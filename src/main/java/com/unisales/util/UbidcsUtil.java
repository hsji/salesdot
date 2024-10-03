package com.unisales.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Hashtable;
import java.util.Properties;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.ibatis.common.resources.Resources;
import com.unisales.ubidcs.solution.eform.Flatten;
import com.unisales.util.Encryptor;

/*
import oracle.sql.BLOB;
*/
import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;


public class UbidcsUtil {
	
	Encryptor encryptor = null;
	
	final String DOC_PROP_FILE 		= "ubidcs/properties/ubidocumaker.properties";
	final String DOC_MAIL_PROP_FILE = "ubidcs/properties/mail.properties";
	final String PDF_MID_PATH 		= "ubidocumaker.pdf.mid.path";
	final String PDF_RESOURCE_PATH 	= "ubidocumaker.resource.path";
	final String PDF_UPLOAD_PATH 	= "ubidocumaker.pdf.upload.path";
	final String PDF_MAIL_PATH 		= "ubidocumaker.mail.path";
	final String PDF_MAILURL_PATH 	= "ubidocumaker.mailurl.path";
	final String PDF_EDITJSONFILE 	= "edit.json";
	final String PDF_INFOJSONFILE 	= "info.json";			
	
    public UbidcsUtil() {
        try {
            encryptor = new Encryptor();
        } catch (InvalidKeyException | NoSuchAlgorithmException | NoSuchPaddingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }    
    
    public String cryptor(String type, String value) {
    	String rValue = "";
    	try {
	    	if(type.equals("encryptor")) {
	    		
					rValue = encryptor.encrypt(value);
				
	    	}else {
	    		rValue = encryptor.decrypt(value);
	    	}
    	} catch (InvalidKeyException | NoSuchAlgorithmException | NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException | UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return rValue;
    }
    
    /* properties 파일 일어올때 */
	public Properties getProperties() throws IOException {
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader(DOC_PROP_FILE);
        properties.load(reader);

        return properties;
	}
    
    /* properties 파일 일어올때 */
	public String propertiesValue(String name) throws IOException {
		Properties properties = new Properties();
		String realPath = "C:\\KcpmcEgov\\workspace\\devUbiDocuMaker\\src\\main\\webapp\\WEB-INF\\properties\\ubidocumaker.properties";
		FileReader resource = new FileReader(realPath);

		properties.load(resource);
		
		return properties.getProperty(name);
	}
	
	/* properties 파일 일어올때2 */
	public String propertiesValue(String res, String name) throws IOException {
		Properties properties = new Properties();
		String realPath = res + "ubidocumaker.properties";
		FileReader resource = new FileReader(realPath);

		properties.load(resource);
		
		return properties.getProperty(name);
	}
	
	/* Upload된 PDF 파일명 MD5암호화 */
	public String txtToMd(String text) throws NoSuchAlgorithmException{
		MessageDigest md = null;
		md = MessageDigest.getInstance("MD5");
		md.update(text.getBytes());		 
		return DatatypeConverter.printHexBinary(md.digest());
	}
	
	/* 서블릿에 넘어오는 Json 데이터 읽어올때 */
	public static String getBody(HttpServletRequest request) throws IOException {
		 
        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;
 
        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }
 
        body = stringBuilder.toString();
        return body;
    }
	
	public boolean fileLog(String res, String logMsg) throws IOException {
		String logPath = propertiesValue(res,"ubidocumaker.log.path");
    	if (!(new File(logPath)).exists()) {
            (new File(logPath)).mkdirs();//수정 2024-02-07
        }

    	File file = new File(logPath, "log_" + new SimpleDateFormat("yyyyMMdd").format(new Date()) + ".txt");
        BufferedWriter writer = null;
        try {
            
        	writer = new BufferedWriter(new FileWriter(file, true));
        	writer.write(  logMsg + "\n");			            	
            writer.close();
            
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
	}
	
	public boolean fileLog(String logMsg) throws IOException {
    	
        String logPath = propertiesValue("ubidocumaker.log.path");
    	if (!(new File(logPath)).exists()) {
            (new File(logPath)).mkdirs();//수정 2024-02-07
        }

    	File file = new File(logPath, "log_" + new SimpleDateFormat("yyyyMMdd").format(new Date()) + ".txt");
        BufferedWriter writer = null;
        try {
            
        	writer = new BufferedWriter(new FileWriter(file, true));
        	writer.write(  logMsg + "\n");			            	
            writer.close();
            
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
	
	public String status(String code, String status, String msg) {
		
		 Gson gson = new Gson();
		 // Json key, value 추가        
		 JsonObject jsonObject = new JsonObject();        
		 jsonObject.addProperty("code", code);        
		 jsonObject.addProperty("status", status);          
		 jsonObject.addProperty("msg", msg);         
		 // JsonObject를 Json 문자열로 변환        
		 String jsonStr = gson.toJson(jsonObject);         
        
		 return jsonStr;
	}
	
	public String status(String code, String status, String sign_url, String msg) {
		
		 Gson gson = new Gson();
		 // Json key, value 추가        
		 JsonObject jsonObject = new JsonObject();        
		 jsonObject.addProperty("code", code);        
		 jsonObject.addProperty("status", status);
		 jsonObject.addProperty("sign_url", sign_url);
		 jsonObject.addProperty("msg", msg);         
		 // JsonObject를 Json 문자열로 변환        
		 String jsonStr = gson.toJson(jsonObject);         
       
		 return jsonStr;
	}
	
	public String makePdf(String resPath, String sysCode, String bizCode, String uuid, String userId, int sendSeq, String jsonData) throws IOException {
		
		try {
			Properties properties = getProperties();
			String midpath = properties.getProperty(PDF_MID_PATH);
	
			String[] arrPath = getPdfFilePath(uuid, sysCode, bizCode);
			String orgPdfPath = arrPath[0];
			//String orgPdfPath = getPdfFilePath(basePath + sysCode + "/" + bizCode + "/" + uuid);
			String basePath = getBasePath();
			String fullPath = basePath + sysCode + "/" + bizCode + "/" + uuid + "/"  + midpath + "/" + userId + "/" + sendSeq + "/";
			
			File dir = new File(fullPath);
	        if (!dir.exists()) {
	            dir.mkdirs();
	        } 
	        String mdName = "";
	        String savedPdfFileName = "U" + userId;
			try {
				mdName = txtToMd(savedPdfFileName + "_" + System.currentTimeMillis()); 
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
	        //String TODAY = new SimpleDateFormat("yyyyMMdd").format(new Date());
	        String savedPath = fullPath + mdName;
	        
	        Date date = new Date();
	        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	        String strDate = format.format(date);
	        
			String jsonStrData = "";
			jsonStrData  = "{ \"filefullpath\"	: \"" + savedPath + "\",";
			jsonStrData += "  \"filepath\" 		: \"" + fullPath + "\",";
			jsonStrData += "  \"filename\" 		: \"" + mdName + "\",";
			jsonStrData += "  \"sysCode\"  		: \"" + sysCode + "\",";
			jsonStrData += "  \"bizCode\"  		: \"" + bizCode + "\",";
			jsonStrData += "  \"userId\"  		: \"" + userId + "\",";
			jsonStrData += "  \"uuid\"  		: \"" + uuid + "\",";
			jsonStrData += "  \"date\"  		: \"" + strDate + "\" }\r\n";
			
	        writeJsonFile(fullPath, jsonStrData, "info.json");

	        
	        Flatten flattenMain = null;
			try {
				flattenMain = Flatten.getInstance();
			} catch (URISyntaxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
	        flattenMain.writeDataToPdf(orgPdfPath , jsonData, savedPath);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
        
		return uuid;
	}
	
	public boolean mailSend(String tp, String mailtitle, String templetNm, String rmail, String rname, String uname, String umail, String link, String filenm, String attfilenm, String dt, String resPath) throws IOException {
   		
    	Properties mailproperties = new Properties();
        Reader reader = Resources.getResourceAsReader(DOC_MAIL_PROP_FILE);
        mailproperties.load(reader);
        
		final Properties props = new Properties();
		
		String host = mailproperties.getProperty("host");	
	    String port = mailproperties.getProperty("port");
	    String fromuser = mailproperties.getProperty("user");
	    String pw = mailproperties.getProperty("pw");
	    String fromusername = mailproperties.getProperty("username");
	    
		// Indicates that SMTP sends mail and requires authentication
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.port", port);//Or "25". If ssl is used, remove the 80 or 25 port configuration and perform the following configuration:
		//Encryption method:
		//props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		//props.put("mail.smtp.socketFactory.port", "465");
		//props.put("mail.smtp.port", "465");
		
		//props.put("mail.smtp.from", mailproperties.getProperty("smtpfrom"));    //mailfrom parameter
		//props.put("mail.user", fromuser);// The sender's account (the sending address created on the console)
		//props.put("mail.password", mailproperties.getProperty("pw"));// SMTP password of the sending address (select the sending address on the console for setting)
		
		// dxtobe
	    props.put("mail.smtp.quitwait", "false");
	    props.put("mail.smtp.starttls.enable", "true");
	    props.put("mail.smtp.ssl.trust", host);
	    //props.put("mail.smtp.socketFactory.port", port);
	    //props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
	    //props.put("mail.smtp.socketFactory.fallback", "false");
	    props.put("mail.smtps.ssl.protocols","TLSv1.2");
	    
		//props.put("mail.smtp.connectiontimeout", 1000);
		
		// Build authorization information for SMTP authentication
		Authenticator authenticator = new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(fromuser, pw);
			}
		};
		//Create a mail session using environment attributes and authorization information
		Session mailSession = Session.getInstance(props, authenticator);
		//mailSession.setDebug(true);//Enable debug mode

		final String messageIDValue = genMessageID(fromuser);
		//Create email message
		MimeMessage message = new MimeMessage(mailSession) {
			@Override
			protected void updateMessageID() throws MessagingException {
				//Set custom Message ID values
				setHeader("Message-ID", messageIDValue);//Create Message-ID
			}
		};
		
		try {
			// Set the sender's email address and name. Fill in the sending address configured on the console. It is consistent with the above mail.user. The name can be customized.
			InternetAddress from = new InternetAddress(fromuser, MimeUtility.encodeText(fromusername, "UTF-8", "B"));//The "from" parameter can set as other sender. Note: it is easy to be rejected by the receiver or enter the dustbin
			message.setFrom(from);
			//Optional. Set replyto address
			Address[] a = new Address[1];
			a[0] = new InternetAddress(umail);		// fromuser
			message.setReplyTo(a);
			// Set recipient email address
			InternetAddress to = new InternetAddress(rmail);
			message.setRecipient(MimeMessage.RecipientType.TO, to);
			//If it is sent to more than one person at the same time, the above two lines will be replaced by the following (because of some limitations of the receiving system, try to send it to one person at a time; at the same time, we limit the number of people allowed to send it to 60 at a time):
			//InternetAddress[] adds = new InternetAddress[2];
			//adds[0] = new InternetAddress("recipient email address1");
			//adds[1] = new InternetAddress("recipient email address2");
			//message.setRecipients(Message.RecipientType.TO, adds);
			message.setSentDate(new Date()); //Set time
			String ccUser = "Cc Address";
			// Set multiple CC addresses
//            if (null != ccUser && !ccUser.isEmpty()) {
//                @SuppressWarnings("static-access")
//                InternetAddress[] internetAddressCC = new InternetAddress().parse(ccUser);
//                message.setRecipients(Message.RecipientType.CC, internetAddressCC);
//            }
			String bccUser = "Bcc Address";
			// Set multiple Bcc addresses
//            if (null != bccUser && !bccUser.isEmpty()) {
//                @SuppressWarnings("static-access")
//                InternetAddress[] internetAddressBCC = new InternetAddress().parse(bccUser);
//                message.setRecipients(Message.RecipientType.BCC, internetAddressBCC);
//            }
			//Set Message Header
			message.setSubject(mailtitle);
//            message.setContent("Test<br>content", "text/html;charset=UTF-8");//html Hypertext;// "text/plain;charset=UTF-8" //plain.

//            //To enable the mail tracking service, use the following code to set the tracking link header. See the document "How can I enable data tracking feature?" for preconditions and constraints?"
//            String tagName = "Test";
//            HashMap<String, String> trace = new HashMap<>();
//            //Here is the string "1"
//            trace.put("OpenTrace", "1");      //Turn on email tracking
//            trace.put("LinkTrace", "1");     //Click the URL tracking in the email
//            trace.put("TagName", tagName);   //Label created by console tagname
//            String jsonTrace = new GsonBuilder().setPrettyPrinting().create().toJson(trace);
//            //System.out.println(jsonTrace);
//            String base64Trace = new String(Base64.getEncoder().encode(jsonTrace.getBytes()));
//            //Set Tracking Link Header
//            message.addHeader("X-AliDM-Trace", base64Trace);
//            //Sample values in the original message eml:X-AliDM-Trace: eyJUYWdOYW1lIjoiVGVzdCIsIk9wZW5UcmFjZSI6IjEiLCJMaW5rVHJhY2UiOiIxIn0=

//Send attachments and content:
			BodyPart messageBodyPart = new MimeBodyPart();
			String mailcontent = "";
			//mailcontent = getMailContent(tp);
			mailcontent = getMailContent(getProperties().getProperty(PDF_MAIL_PATH), tp);
			//if(tp.equals("1")) {

			mailcontent = mailcontent.replaceAll("\\$\\{templetNm\\}", templetNm);
			mailcontent = mailcontent.replaceAll("\\$\\{uname\\}", uname);
			mailcontent = mailcontent.replaceAll("\\$\\{umail\\}", umail);
			mailcontent = mailcontent.replaceAll("\\$\\{rmail\\}", rmail);
			mailcontent = mailcontent.replaceAll("\\$\\{rname\\}", rname);
			mailcontent = mailcontent.replaceAll("\\$\\{link\\}", link);
			mailcontent = mailcontent.replaceAll("\\$\\{dt\\}", dt);
			//}
			messageBodyPart.setText("message");//Set the content of the message, text
			messageBodyPart.setContent(mailcontent, "text/html;charset=UTF-8");// plain:"text/plain;charset=UTF-8" //Set the content of the message
            //Create multiple messages
			Multipart multipart = new MimeMultipart();
            //Set Text Message Part
			multipart.addBodyPart(messageBodyPart);
            //Attachments part
            //When sending attachments, the total smtp email size should not exceed 15M, and the message part should be created.
			if((tp.equalsIgnoreCase("2")) && (!filenm.equals(""))) {// 결과 파일 전송 메일 타입(tp)이고, filenm 값이 있을때로 경우 수정
				MimeBodyPart mimeBodyPart = new MimeBodyPart();
				//            //Set the file path to send attachments

				String filename = filenm;
				FileDataSource source = new FileDataSource(filename);
				mimeBodyPart.setDataHandler(new DataHandler(source));
				//            //Handle the problem of garbled Chinese attachment name (attached file path)
				mimeBodyPart.setFileName(MimeUtility.encodeText("서명완료.pdf"));
				mimeBodyPart.addHeader("Content-Transfer-Encoding", "base64");
				multipart.addBodyPart(mimeBodyPart);
				//Send a complete message with attachments
			}
			message.setContent(multipart);
            // Send attachment code, end
			// Send Mail
			Transport.send(message);
			return true;
		} catch (MessagingException e) {
			String err = e.getMessage();
			// The message content is processed here in a fixed format
			System.out.println(err);
			return false;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}
	
	protected static String  genMessageID(String mailFrom) {
		// message-id should be like first-part@last-part
		String[] mailInfo = mailFrom.split("@");
		String domain = mailFrom;
		int index = mailInfo.length - 1;
		if (index >= 0) {
			domain = mailInfo[index];
		}
		UUID uuid = UUID.randomUUID();
		StringBuffer messageId = new StringBuffer();
		messageId.append('<').append(uuid.toString()).append('@').append(domain).append('>');
		return messageId.toString();
	}
	
	private static String getMailContent(String mailPath, String tp) throws IOException {
		String filename = "docuMail_tp1.html";
		if(tp.equals("2")) {
			filename = "docuMail_tp2.html";
		}
		String rtnvalue = "";
		rtnvalue = Files.lines(Paths.get(mailPath + filename),StandardCharsets.UTF_8).collect(Collectors.joining(System.lineSeparator()));
		//System.out.println(rtnvalue);
		return rtnvalue;
	}	
	
	
	// hsji
	
	public void makeJsonFile(String fileName, String uuid, String sysCode, String bizCode, String userId) throws IOException, ParseException {
		
		String path = getUuidPath( uuid, sysCode, bizCode);
		
        Date date = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String strDate = format.format(date);
        
		/* 파일정보 저장 */
		String jsonData = "";
		jsonData  = "{ \"filefullpath\"	: \"" + ( path + "/" + fileName ) + "\",";
		jsonData += "  \"filepath\" 	: \"" + path + "\",";
		jsonData += "  \"filename\" 	: \"" + fileName + "\",";
		jsonData += "  \"orgfilename\" 	: \"" + fileName + "\",";
		jsonData += "  \"sysCode\"  	: \"" + sysCode + "\",";
		jsonData += "  \"bizCode\"  	: \"" + bizCode + "\",";
		jsonData += "  \"userId\"  		: \"" + userId + "\",";
		jsonData += "  \"date\"  		: \"" + strDate + "\" }\r\n";
		
		writeJsonFile(path, jsonData, PDF_INFOJSONFILE);		
	}	
	
	public String getBasePath() throws IOException, ParseException {
		Properties properties = getProperties();
        String path = properties.getProperty(PDF_RESOURCE_PATH);
        String pdfUpload = properties.getProperty(PDF_UPLOAD_PATH);
        
        return (path + pdfUpload);	//.replace("\\", "\\\\");
	}		
	
	public String getHtmlUrlPath() throws IOException, ParseException {
		Properties properties = getProperties();
        String path = properties.getProperty(PDF_MAILURL_PATH);
        
        return path;
	}		
	
	public void writeJsonFile(String fullPath, String jsonStr, String filename) throws IOException {
		File wfile = new File(fullPath + "/" + filename);
        if (!wfile.exists()) {
        	wfile.createNewFile();            
        }
        FileWriter fw = new FileWriter(wfile);
        BufferedWriter writer = new BufferedWriter(fw);
        writer.write(jsonStr);
        writer.close();				
	}

	public String readTextFile(String fullPath, String filename) throws IOException {
		String filePath = fullPath + "/" + filename;
		String line = "";
		String lineText = "";
		
		try {
			FileReader reader = new FileReader(filePath);
			BufferedReader bufReader = new BufferedReader(reader);
			while((line = bufReader.readLine()) != null) {
				lineText += line;
			}
			bufReader.close();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		return lineText;	
	}			
	
	
	public String readJsonFile(String fullPath, String jsonKey, String filename) throws IOException {
		String jsonFilePath = fullPath + "/" + filename;
		
		String filePath = "";
		try {
			FileReader reader = new FileReader(jsonFilePath);
			BufferedReader bufReader = new BufferedReader(reader);
			String line = "";
			String lineText = "";
			while((line = bufReader.readLine()) != null) {
				lineText += line;
			}
			bufReader.close();
			
			if(lineText.equals("")) {
			} else {
				JSONParser parser = new JSONParser();
				JSONObject jsonObject = (JSONObject) parser.parse(lineText);
				filePath = (String) jsonObject.get(jsonKey);
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return filePath;	
	}			
	
	public String[] getUserPdfFilePath(String uuid, String sysCode, String bizCode, String userId, int seq) throws IOException, ParseException {
		
		Properties properties = getProperties();
		String midpath = properties.getProperty(PDF_MID_PATH);
		
		String basePath = getBasePath();
		String path = basePath + sysCode + "/" + bizCode + "/" + uuid + "/"  + midpath + "/" + userId + "/" + seq + "/";
		
		String infoFilePath = path + "/" + "info.json";
		
		//String filePath = "";
		//String fileName = "";
		//String orgfileName = "";
		String[] stringArray = new String[3];
		try {
			FileReader reader = new FileReader(infoFilePath);
			BufferedReader bufReader = new BufferedReader(reader);
			String line = "";
			String lineText = "";
			while((line = bufReader.readLine()) != null) {
				lineText += line;
			}
			bufReader.close();
			
			if(lineText.equals("")) {
			} else {
				JSONParser parser = new JSONParser();
				JSONObject jsonObject = (JSONObject) parser.parse(lineText);
				stringArray[0] = (String) jsonObject.get("filefullpath");
				stringArray[1] = (String) jsonObject.get("filename");
				stringArray[2] = (String) jsonObject.get("orgfilename");
				//filePath = filePath.replace("\\", "\\\\");
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return stringArray;
	}			
	
	
	public String[] getPdfFilePath(String uuid, String sysCode, String bizCode) throws IOException, ParseException {
		String basePath = getBasePath();
		String path = basePath + sysCode + "/" + bizCode + "/" + uuid;
		String infoFilePath = path + "/" + "info.json";
		
		String[] stringArray = new String[3];
		try {
			FileReader reader = new FileReader(infoFilePath);
			BufferedReader bufReader = new BufferedReader(reader);
			String line = "";
			String lineText = "";
			while((line = bufReader.readLine()) != null) {
				lineText += line;
			}
			bufReader.close();
			
			if(lineText.equals("")) {
			} else {
				JSONParser parser = new JSONParser();
				JSONObject jsonObject = (JSONObject) parser.parse(lineText);
				stringArray[0] = (String) jsonObject.get("filefullpath");
				stringArray[1] = (String) jsonObject.get("filename");
				stringArray[2] = (String) jsonObject.get("orgfilename");
				//filePath = filePath.replace("\\", "\\\\");
			}
		} catch(Exception e) {
			e.printStackTrace();
		}
		return stringArray;
	}		
	
	
	public String getUuidPath(String uuid, String sysCode, String bizCode) throws IOException, ParseException {
		String basePath = getBasePath();
		return basePath + sysCode + "/" + bizCode + "/" + uuid;	
	}
	
	public String getUserPdfPath(String uuid, String sysCode, String bizCode, String userId) throws IOException, ParseException {
		Properties properties = getProperties();
        String path 		= properties.getProperty(PDF_RESOURCE_PATH);
        String pdfUpload 	= properties.getProperty(PDF_UPLOAD_PATH);
        String midPath 		= properties.getProperty(PDF_MID_PATH);	 
        
        String basePath 	= (path + pdfUpload);		

		return basePath + sysCode + "/" + bizCode + "/" + uuid + "/"  + midPath + "/" + userId;	
	}	
	
};
