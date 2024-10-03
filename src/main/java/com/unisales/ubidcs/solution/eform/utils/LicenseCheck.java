package com.unisales.ubidcs.solution.eform.utils;

import javax.xml.parsers.*;

import org.w3c.dom.*;

import com.ubireport.common.util.CalendarInfo;
import com.ubireport.common.util.DateUtil;
import com.ubireport.common.util.Utility;
import com.ubireport.common.util.base64.BASE64Decoder;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.InputStream;
import java.util.Vector;

import javax.crypto.*;

public class LicenseCheck {
	public String errorMessage = "";
	public String hostname = "";
	/**
	 * Cloud ?��?��?��?���? 체크?���? ?��?�� ?��메인
	 */
	public String serverName = null;
	public File file = null;
	public InputStream input = null;
	public String product = "";
	public String type = "";
	public String issdate = "";
	public String expiredate = "";
	public String versiontype = "";
	public String cmmt = "";
	public String kind = "";
	public String product_version = "";
	public String eform = "false";
	public String report = "true";

	public LicenseCheck(String hostname, File file) {
		this.hostname = hostname;
		this.file = file;
	}

	public LicenseCheck(String hostname, InputStream input) {
		this.hostname = hostname;
		this.input = input;
	}
	
	public void setServerName(String servername) {
		this.serverName = servername;
	}

	public boolean checkLicense() {
		boolean flag = true;
		errorMessage = "";
		try {
			if (!file.exists()) {
//				errorMessage = "ER0107#Can't Load " + file.getAbsolutePath();
				errorMessage = "ER0101#License file not found";
				flag = false;
				return flag;
			}
			// ?�� ?��?��?��?�� ?��?��개의 ?���? ?��?��?��?���? �?리하?�� ?��?��?�� 모듈?�� ?��?��?��버에 배포?��?�� 경우 ?��?��
			String as[][] = readLicense(file);

			for (int i = 0; i < as.length; i++) {
				if (as[i][5].equals("Trial")) {
					CalendarInfo calendarinfo = new CalendarInfo();
					CalendarInfo calendarinfo1 = new CalendarInfo(as[i][6]);
					if (DateUtil.getJullianDate(calendarinfo) > DateUtil
							.getJullianDate(calendarinfo1)) {
//						errorMessage = "ER0102#License expired";
						errorMessage = "ER0102#License file expired";
						flag = false;
					} else {
						errorMessage = "";
						flag = true;
					}
				} else {
					String licenseName = as[i][4];
					// Cloud?�� ?��?��?��?�� 체크
					if (as[i][7].equals("Cloud")) {
						if (serverName == null) {
							flag = false;
						} else {
							// ?��?��?��?��?�� ?���? ?��메인명이 ?��?�� ?��메인명에 ?��?��?��?�� �? 체크
							int strIndex = serverName.lastIndexOf(licenseName);
							if (strIndex == 0) {
								if (licenseName.equalsIgnoreCase(serverName.substring(strIndex))) {
									flag = true;
								} else {
									flag = false;
								}
							}
							else if (strIndex > 0) {
								String subServerName = serverName.substring(strIndex);
								String preServerName = serverName.substring(strIndex - 1, strIndex);
								// ?��?�� .?�� ?��?�� �? 체크
								if (subServerName.equalsIgnoreCase(licenseName) && preServerName.equals(".")) {
									flag = true;
								} else {
									flag = false;
								}
							} else {
								// ?��?�� ??�? 경우
								flag = false;
							}
						}
						
						if (flag) {
							errorMessage = "";
						} else {
//							errorMessage = "ER0105#Servername(domain) doesn't match";
							errorMessage = "ER0104#Domain name not match [" + serverName + "]";
						}
					} else {
						errorMessage = "ER0108#Invalid license file";
						flag = false;
					}
				}
				product = as[i][1];
				type = as[i][5];
				issdate = as[i][3];
				expiredate = as[i][6];
				versiontype = as[i][7];
				cmmt = as[i][0];
				try {
					kind = as[i][8];
					product_version = as[i][9];
					eform = as[i][10];
					report = as[i][11];
				}
				catch(Exception e){}

				// License�? ?��?��?�� 경우
				if (flag) {
					break;
				}
			}
		} catch (Exception _ex) {
//			System.out.println("LicenseCheck ERROR : " + _ex.toString());
//			errorMessage = "ER0106#License file error";
			if( "".equals(Utility.blankToStr(errorMessage)) )
				errorMessage = "ER0106#Error checking license file";
			flag = false;
			//_ex.printStackTrace();
		}
		
//		if (flag && !Utility.nvl(product, "").equals("DocuMaker")) {
//			flag = false;
//			if( "".equals(Utility.blankToStr(errorMessage)) )
//				errorMessage = "ER0105#Invalid license file";
//		}
		return flag;
	}

	public boolean checkLicense(String war) {
		boolean flag = true;
		errorMessage = "";
		try {
			if (input == null) {
//				errorMessage = "ER0107#Can't Load " + file.getAbsolutePath();
				errorMessage = "ER0101#License file not found";
				flag = false;
				return flag;
			}
			// ?�� ?��?��?��?�� ?��?��개의 ?���? ?��?��?��?���? �?리하?�� ?��?��?�� 모듈?�� ?��?��?��버에 배포?��?�� 경우 ?��?��
			String as[][] = readLicense(input);
			
			for (int i = 0; i < as.length; i++) {
				if (as[i][5].equals("Trial")) {
					CalendarInfo calendarinfo = new CalendarInfo();
					CalendarInfo calendarinfo1 = new CalendarInfo(as[i][6]);
					if (DateUtil.getJullianDate(calendarinfo) > DateUtil
							.getJullianDate(calendarinfo1)) {
//						errorMessage = "ER0102#License expired";
						errorMessage = "ER0102#License file expired";
						flag = false;
					} else {
						errorMessage = "";
						flag = true;
					}
				} else {
					String licenseName = as[i][4];
					if (!hostname.equalsIgnoreCase(licenseName)) {
//						errorMessage = "ER0105#Hostname doesn't match";
						errorMessage = "ER0103#Host name not match [" + hostname + "]";
						flag = false;
					} else {
						errorMessage = "";
						flag = true;
					}
				}
				product = as[i][1];
				type = as[i][5];
				issdate = as[i][3];
				expiredate = as[i][6];
				cmmt = as[i][0];
				try {
					kind = as[i][8];
					product_version = as[i][9];
					eform = as[i][10];
					report = as[i][11];
				}
				catch(Exception e){}
				// License�? ?��?��?�� 경우
				if (flag) {
					break;
				}
			}
		} catch (Exception _ex) {
//			System.out.println("LicenseCheck ERROR : " + _ex.toString());
//			errorMessage = "ER0106#License file error";
			errorMessage = "ER0106#Error checking license file";
			flag = false;
			_ex.printStackTrace();
		}
		return flag;
	}
	
	public String getUseEform() {
		return eform;
	}
	
	public String getUseReport() {
		return report;
	}

	private byte[] decrypt(byte abyte0[], byte abyte1[]) throws Exception {
		SecretKey secretkey = getKey(abyte0);
		Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
		cipher.init(2, secretkey);
		byte abyte2[] = cipher.doFinal(abyte1);
		return abyte2;
	}

	public SecretKey getKey(byte abyte0[]) {
		
		/*
		Use only under JDK 1.3
		Security.addProvider(new BouncyCastleProvider());
		 */
		SecretKey secretkey = null;
		try {

			javax.crypto.spec.DESedeKeySpec desedekeyspec = new javax.crypto.spec.DESedeKeySpec(abyte0);
			javax.crypto.SecretKeyFactory secretkeyfactory = javax.crypto.SecretKeyFactory.getInstance("DESede");
			secretkey = secretkeyfactory.generateSecret(desedekeyspec);
		} catch (Exception exception) {
			exception.printStackTrace();
		}
		return secretkey;
	}

	private String[][] readLicense(File file) throws Exception {

		// DOM, SAXPaser �? ?��?��?�� ?��?��?��?�� ?��?�� ?���? ?�� 발생?��?�� ?��류로 ?��?�� ?��?��?���? ?��?��?��?��?�� 방식?���? �?�?.
		String as[][] = null;
		BASE64Decoder base64decoder = new BASE64Decoder();
		
		try {
			
			FileReader fr = new FileReader(file);
			BufferedReader br = new BufferedReader(fr);
			
			StringBuffer xml = new StringBuffer();
			String lineStr;
			
			while((lineStr = br.readLine()) != null ) {
				
				xml.append(lineStr + "\n");
			}
			
			String xmlStr = xml.toString();
			Vector key = new Vector();
			while(xmlStr.indexOf("<Key>") != -1) {
				
				String keyStr = xmlStr.substring(xmlStr.indexOf("<Key>")+5, xmlStr.indexOf("</Key>"));
				xmlStr = xmlStr.substring(xmlStr.indexOf("</Key>") + 6);
				key.add(keyStr);
			}

			int keyCnt = key.size(); 
			if( keyCnt > 0 ) {
				
				as = new String[keyCnt][];
				
				for( int i = 0; i < keyCnt; i++ ) {
					
					byte[] keybytes = hexStringToBytes((String)key.get(i));
					String keyValue = bytesToString(keybytes);

					int index = keyValue.indexOf("\n");
					String s1 = keyValue.substring(0, index);
					keyValue = keyValue.substring(index + 1);
					byte abyte0[] = base64decoder.decodeBuffer(keyValue);
					byte abyte1[] = base64decoder.decodeBuffer(s1);
					byte abyte2[] = decrypt(abyte1, abyte0);
					String s2 = new String(abyte2, "EUC-KR");
					as[i] = getTokenStrings(s2, "$");
				}
			}
			else {
				
//				errorMessage = "ER0101#Can't Load License.xml";
				errorMessage = "ER0107#License key not found";
			}
		}
		catch(Exception e) {

//			errorMessage = "ER0101#Can't Load License.xml";
			errorMessage = "ER0106#Error checking license file";
		}
		return as;

			
		
		/*
		String as[][] = null;
		BASE64Decoder base64decoder = new BASE64Decoder();
		try {
			
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			Document doc = db.parse(file);
			NodeList keyList = doc.getElementsByTagName("Key");
			
			int keyCnt = keyList.getLength(); 
			if( keyCnt > 0 ) {
				
				as = new String[keyCnt][];
				
				for( int i = 0; i < keyCnt; i++ ) {
					
					Node key = keyList.item(i);
					String keyValue = key.getFirstChild().getNodeValue();

					int index = keyValue.indexOf("\n");
					String s1 = keyValue.substring(0, index);
					keyValue = keyValue.substring(index + 1);
					byte abyte0[] = base64decoder.decodeBuffer(keyValue);
					byte abyte1[] = base64decoder.decodeBuffer(s1);
					byte abyte2[] = decrypt(abyte1, abyte0);
					String s2 = new String(abyte2, "EUC-KR");
					as[i] = getTokenStrings(s2, "$");
				}
			}
			else {
				
				errorMessage = "ER0101#Can't Load License.xml";
			}
		}
		catch(Exception e) {
			
			errorMessage = "ER0101#Can't Load License.xml";
		}
		return as;
		*/
		/*
		Element element = null;
		Element licenseElement = null;
		Document document = null;
		String as[][] = null;

		BASE64Decoder base64decoder = new BASE64Decoder();
		try {
			SAXBuilder saxbuilder = new SAXBuilder();
			document = saxbuilder.build(file);
		} catch (JDOMException jdomexception) {
			errorMessage = "ER0101#Can't Load License.xml";
			throw jdomexception;
		} catch (NullPointerException _ex) {
			errorMessage = "ER0101#Can't Load License.xml";
			throw _ex;
		}

		element = document.getRootElement();
		java.util.List list = element.getChildren("License");
		if (list != null && list.size() > 0) {
			as = new String[list.size()][];

			for (int i = 0; i < list.size(); i++) {
				licenseElement = (Element) list.get(i);
				String s = licenseElement.getChild("Key").getText();
				int index = s.indexOf("\n");
				String s1 = s.substring(0, index);
				s = s.substring(index + 1);
				byte abyte0[] = base64decoder.decodeBuffer(s);
				byte abyte1[] = base64decoder.decodeBuffer(s1);
				byte abyte2[] = decrypt(abyte1, abyte0);
				String s2 = new String(abyte2, "EUC-KR");
				as[i] = getTokenStrings(s2, "$");
			}
		} else {
			errorMessage = "ER0109#Cannot find license infomation";
			throw new Exception(errorMessage);
		}
		*/
	}

	private String[][] readLicense(InputStream input) throws Exception {

		String as[][] = null;
		BASE64Decoder base64decoder = new BASE64Decoder();
		
		try {
			
			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
			DocumentBuilder db = dbf.newDocumentBuilder();
			Document doc = db.parse(input);
			NodeList keyList = doc.getElementsByTagName("Key");
			
			int keyCnt = keyList.getLength(); 
			if( keyCnt > 0 ) {
				
				as = new String[keyCnt][];
				
				for( int i = 0; i < keyCnt; i++ ) {
					
					Node key = keyList.item(i);
					byte[] keybytes = hexStringToBytes(key.getFirstChild().getNodeValue());
					String keyValue = bytesToString(keybytes);

					int index = keyValue.indexOf("\n");
					String s1 = keyValue.substring(0, index);
					keyValue = keyValue.substring(index + 1);
					byte abyte0[] = base64decoder.decodeBuffer(keyValue);
					byte abyte1[] = base64decoder.decodeBuffer(s1);
					byte abyte2[] = decrypt(abyte1, abyte0);
					String s2 = new String(abyte2, "EUC-KR");
					as[i] = getTokenStrings(s2, "$");
				}
			}
			else {
				
//				errorMessage = "ER0101#Can't Load License.xml";
				errorMessage = "ER0107#License key not found";
			}
		}
		catch(Exception e) {
			
//			errorMessage = "ER0101#Can't Load License.xml";
			errorMessage = "ER0106#Error checking license file";
		}

		return as;
		/*
		Element element = null;
		Element licenseElement = null;
		Document document = null;
		String as[][] = null;

		BASE64Decoder base64decoder = new BASE64Decoder();
		try {
			SAXBuilder saxbuilder = new SAXBuilder();
			document = saxbuilder.build(input);
		} catch (JDOMException jdomexception) {
			errorMessage = "ER0101#Can't Load License.xml";
			throw jdomexception;
		} catch (NullPointerException _ex) {
			errorMessage = "ER0101#Can't Load License.xml";
			throw _ex;
		}

		element = document.getRootElement();
		java.util.List list = element.getChildren("License");
		if (list != null && list.size() > 0) {
			as = new String[list.size()][];

			for (int i = 0; i < list.size(); i++) {
				licenseElement = (Element) list.get(i);
				String s = licenseElement.getChild("Key").getText();
				int index = s.indexOf("\n");
				String s1 = s.substring(0, index);
				s = s.substring(index + 1);
				byte abyte0[] = base64decoder.decodeBuffer(s);
				byte abyte1[] = base64decoder.decodeBuffer(s1);
				byte abyte2[] = decrypt(abyte1, abyte0);
				String s2 = new String(abyte2, "EUC-KR");
				as[i] = getTokenStrings(s2, "$");
			}
		} else {
			errorMessage = "ER0109#Cannot find license infomation";
			throw new Exception(errorMessage);
		}

		*/
	}

	private String[] getTokenStrings(String s, String s1) throws Exception {
		
		com.ubireport.common.util.StringTokenizer st = new com.ubireport.common.util.StringTokenizer(s, s1);
		String as[] = new String[st.countTokens()];
		int i = 0;
		while (st.hasMoreTokens())
			as[i++] = st.nextToken();
		return as;
	}

	public String getErrorMsg() {
		return errorMessage;
	}
	
	/**
	 * <p>16진수 문자?��?�� 바이?�� 배열�? �??��?��?��.</p>
	 * <p>문자?��?�� 2?��리�? ?��?��?�� byte�? 바�?�다.</p>
	 */
	private byte[] hexStringToBytes(String digits) throws IllegalArgumentException, NumberFormatException {
		if (digits == null) {
			return null;
		}
		int length = digits.length();
		if (length % 2 == 1) {
			throw new IllegalArgumentException("For input string: \"" + digits + "\"");
		}
		length = length / 2;
		byte[] bytes = new byte[length];
		for (int i = 0; i < length; i++) {
			int index = i * 2;
			bytes[i] = (byte) (Short.parseShort(digits.substring(index, index + 2), 16));
		}
		return bytes;
	}
	
	/**
	 * 바이?�� 배열?�� 문자?���? 바꾼?��.
	 * @param _bytes
	 * @return
	 */
	private String bytesToString(byte[] bytes) {
		String file_string = "";

		for (int i = 0; i < bytes.length; i++) {
			file_string += (char) bytes[i];
		}

		return file_string;
	}
}