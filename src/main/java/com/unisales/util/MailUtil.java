package com.unisales.util;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Map;
import java.util.Properties;
import java.util.TimeZone;

import javax.activation.CommandMap;
import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.activation.MailcapCommandMap;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.springframework.beans.factory.annotation.Autowired;

import com.ibatis.common.resources.Resources;


public class MailUtil {
	
	  /**
	   * SendMail
	 * @throws IOException 
	   */
	  public static Map<String,Object> sendSalaryMail(Map<String,Object> contentsMap) throws IOException {
		  
		  
    	Properties properties = new Properties();
        Reader readerPdf = Resources.getResourceAsReader("pdf.properties");
        properties.load(readerPdf);
    	
	    String path = properties.getProperty("pdfDownloadPath");
    	String rootPath = path + "PDF\\";
    	String encDir = "enc\\";
    	String dpath = "SALEA";
    	
		String direncpath = rootPath + dpath + encDir;
		String filename = (String) contentsMap.get("fname") + ".pdf";
		String fileFullPath = direncpath + filename;
		
		File file = new File(fileFullPath); 
		if(file.exists()) {
		    // 메일 인코딩
		    final String bodyEncoding = "UTF-8"; //콘텐츠 인코딩
		    
		    String subject = (String) contentsMap.get("subject");
		    //String fromEmail = (String) contentsMap.get("fromemail");
		    String fromUsername = (String) contentsMap.get("fromname");
		    String toEmail = (String) contentsMap.get("toemail");
		    
		    final String userccname = (String) contentsMap.get("fromemail");    
		    //final String password = (String) contentsMap.get("fromemailpassword"); 
		    
		    String html = (String) contentsMap.get("contents"); 
		    
	        Reader reader = Resources.getResourceAsReader("mail.properties");
	        properties.load(reader);
	    	
		    String host = properties.getProperty("host");	    
		    String port = properties.getProperty("port");
		    String fromEmail = properties.getProperty("user");
		    final String username = properties.getProperty("user");  
		    final String password = properties.getProperty("pw");
		    
		    System.out.println("fromEmail" + username + ":" + fromEmail);
		    System.out.println("fromUsername" + fromUsername);
		    System.out.println("toemail" + toEmail);
		    
		    // 메일 옵션 설정
		    Properties props = new Properties();    
		    //props.put("mail.transport.protocol", "smtp");
		    props.put("mail.smtp.host", host);
		    props.put("mail.smtp.port", port);
		    props.put("mail.smtp.auth", "true");
		    //props.put("mail.smtp.auth", "false");
		   // props.put("mail.smtp.ssl.enable", "true");
		 
		    props.put("mail.smtp.quitwait", "false");
		    props.put("mail.smtp.starttls.enable", "true");
		    props.put("mail.smtp.ssl.trust", host);
		    //props.put("mail.smtp.socketFactory.port", port);
		    //props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		    //props.put("mail.smtp.socketFactory.fallback", "false");
		    props.put("mail.smtps.ssl.protocols","TLSv1.2");

		    
		    try {
		      // 메일 서버  인증 계정 설정
		      Authenticator auth = new Authenticator() {
		        protected PasswordAuthentication getPasswordAuthentication() {
		          return new PasswordAuthentication(username, password);
		        }
		      };
		      
			  // 메일 세션 생성
			  Session session = Session.getInstance(props, auth);
			  
			  // 메일 송/수신 옵션 설정
			  Message message = new MimeMessage(session);
			  message.setFrom(new InternetAddress(fromEmail, MimeUtility.encodeText(fromUsername, "UTF-8", "B")));
			  message.setRecipients(RecipientType.TO, InternetAddress.parse(toEmail, false));
			  message.setRecipients(RecipientType.BCC, InternetAddress.parse(userccname, false));
			  
			  //message.setSubject(subject);
			  message.setSubject(MimeUtility.encodeText(subject, "UTF-8", "B"));
			  
			  //TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
			  message.setSentDate(new Date());
			  
			  // 메일 콘텐츠 설정
		      Multipart mParts = new MimeMultipart();
		      MimeBodyPart mTextPart = new MimeBodyPart();
			 
			      // 메일 콘텐츠 - 내용
			  //mTextPart.setText(html, bodyEncoding, "html");
			  mTextPart.setContent(html, "text/html;charset=UTF-8");
		      mParts.addBodyPart(mTextPart);
				            
		      MimeBodyPart attachPart = new MimeBodyPart();

		      DataSource source = new FileDataSource(fileFullPath);
		      attachPart.setDataHandler(new DataHandler(source));
			
			  //파일명칭이 깨지지 않도록 조치를 취함
		      try {
				attachPart.setFileName(MimeUtility.encodeText(source.getName(), "EUC-KR","B"));
				mParts.addBodyPart(attachPart);
					
		      } catch (UnsupportedEncodingException e) {
					System.out.println("파일 endcode 에러 발생");
					System.out.println(e.getMessage());
			    	contentsMap.put("RESULT", -1);
					contentsMap.put("RESULT_MSG",e.getMessage());
					e.printStackTrace();
			  }
		
		      // 메일 콘텐츠 설정
		      message.setContent(mParts);
		      
		      // MIME 타입 설정
		      MailcapCommandMap MailcapCmdMap = (MailcapCommandMap) CommandMap.getDefaultCommandMap();
		      MailcapCmdMap.addMailcap("text/html;; x-java-content-handler=com.sun.mail.handlers.text_html");
		      MailcapCmdMap.addMailcap("text/xml;; x-java-content-handler=com.sun.mail.handlers.text_xml");
		      MailcapCmdMap.addMailcap("text/plain;; x-java-content-handler=com.sun.mail.handlers.text_plain");
		      MailcapCmdMap.addMailcap("multipart/*;; x-java-content-handler=com.sun.mail.handlers.multipart_mixed");
		      MailcapCmdMap.addMailcap("message/rfc822;; x-java-content-handler=com.sun.mail.handlers.message_rfc822");
		      CommandMap.setDefaultCommandMap(MailcapCmdMap);
		 
		      // 메일 발송
		      Transport.send( message );

		      contentsMap.put("RESULT", 1);
			  contentsMap.put("RESULT_MSG","SUCCESS");
		      
		    } catch ( Exception e ) {
		    	contentsMap.put("RESULT", -1);
				contentsMap.put("RESULT_MSG",e.getMessage());
				e.printStackTrace();
		    }			
		} else {
			contentsMap.put("RESULT", -1);
			contentsMap.put("RESULT_MSG", "FILE이 존재하지 않습니다.");
		}
		
		return contentsMap;
		
	  }
}
