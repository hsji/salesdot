package com.unisales.util;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.crypto.Cipher;
import javax.servlet.http.HttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.uiadapter.spring.core.NexacroException;

import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;

/**
 * <pre>
 * @title   Utility
 * @desc    TMS Utility         
 * @package com.tms.util
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2023. 10
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023. 10. 18.		TOBESOFT	최초작성
 */

public class NexaUtil {
    /**
	 * ResultSet으로 부터 Dataset을 생성한다.
	 * @param dsName		: 생성할 Dataset Name
	 * @param rs			: ResultSet
	 * @return				: Dataset
	 */	 
    public static DataSet createDataset(String dsName, ResultSet rs) throws SQLException, IOException {

    	DataSet ds = new DataSet(dsName);
    	ds.setName(dsName);
    	
    	ResultSetMetaData rsmd = rs.getMetaData();     // select 한 정보
    	int numberOfColumns = rsmd.getColumnCount();   // select한 컬럼수

    	int colSize;
    	//String[] arrColName =  new String[numberOfColumns];
    	//String[] arrColType =  new String[numberOfColumns];
    	//String saColType = "";
    	System.out.println("-------------------------------------------------------------------------------------------------");
    	System.out.println("■ Dataset Column 정보를 생성합니다.  ");
    	System.out.println("-------------------------------------------------------------------------------------------------");
    	for(int columnIndex = 1; columnIndex <= numberOfColumns; columnIndex++) {

    		String colName = rsmd.getColumnName(columnIndex);
    		int    colType = rsmd.getColumnType(columnIndex);
    		colSize = rsmd.getColumnDisplaySize(columnIndex);
    		
    		//arrColName[columnIndex-1] = colName;
    		
    		// select한 컬럼의 type에 맞게 데이터셋 컬럼을 생성
    		if(colType == Types.NUMERIC) {
    			//saColType = "N";
    			ds.addColumn(colName, PlatformDataType.BIG_DECIMAL, colSize);
    		} else if(colType == Types.DOUBLE) {
    			//saColType = "O";
    			ds.addColumn(colName, PlatformDataType.BIG_DECIMAL, colSize);
    		} else if(colType == Types.DECIMAL) {
    			//saColType = "E";
    			ds.addColumn(colName, PlatformDataType.BIG_DECIMAL, colSize);
    		} else if(colType == Types.VARCHAR || colType == Types.CHAR) {
    			//saColType = "S";
    			ds.addColumn(colName, PlatformDataType.STRING, colSize);
    		} else if(colType == Types.DATE) {
    			//saColType = "D";
    			ds.addColumn(colName, PlatformDataType.DATE_TIME, colSize);
    		} else if(colType == Types.INTEGER) {
    			//saColType = "I";
    			ds.addColumn(colName, PlatformDataType.INT, colSize);  			
    		} else if(colType == Types.BIGINT) {
    			//saColType = "G";
    			ds.addColumn(colName, PlatformDataType.DOUBLE, colSize);  			
    		} else if(colType == Types.CLOB) {
    			//saColType = "C";
    			ds.addColumn(colName, PlatformDataType.STRING, colSize);
    		} else {
    			//saColType = "U";
    			ds.addColumn(colName, PlatformDataType.UNDEFINED, 255);
    		}
    		System.out.println("[ADD COLUMN]\t" + colName + "\t:" + colType + "\t\t:" + rsmd.getColumnTypeName(columnIndex));
    		//arrColType[columnIndex-1] = saColType;
    	}

    	int nRow = 0;
    	//Object object;
    	
    	int nRowResult = rs.getRow();

    	//if(rs.getRow()>0) {
    	while(rs.next()) {
	    	//do {
	    		nRow = ds.newRow();
	    		for(int columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
	    			//object = fireDataSetConvertedValue(ds, rs.getObject(columnIndex), nRow, columnIndex, false, false);
	    			//System.out.println(arrColName[columnIndex] + ":" + rs.getString(arrColName[columnIndex]));
	    			//System.out.println(arrColName[columnIndex] + ":" + rs.getObject(columnIndex+1));
	    			ds.set(nRow, columnIndex, rs.getObject(columnIndex+1));
	    			/*
	    			switch(arrColType[columnIndex]) {
	    			case "N" :
	    				object = rs.get
	    				break;
	    			case "O" :
	    				break;
	    			case "E" :
	    				break;
	    			case "S" :
	    				break;
	    			case "D" :
	    				break;
	    			case "I" :
	    				break;
	    			case "G" :
	    				break;
	    			case "C" :
	    				break;
	    			case "U" :
	    				break;
	    			default:
	    			}
	    			*/
	    		}
	
	    	//}
	    	//while(rs.next());
    	}

        return ds;
    }
    
    /**
	 * Next용 Dataset String을 생성한다.
	 * @param globalMap		: globalMap
	 * @param paramMap		: paramMap
	 * @return				: Requset String
	 */	 
    public static String createNextDataset(Map<String,Object> globalMap, Map<String,Object> paramMap) {
    	
    	StringBuilder stringBuilder = new StringBuilder();
    	StringBuilder stringColInfos = new StringBuilder();
    	StringBuilder stringRows = new StringBuilder();
    	
      	
    	stringBuilder.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
    	stringBuilder.append("<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">\n");
    	stringBuilder.append("<Parameters>\n");
    	stringBuilder.append("</Parameters>\n");
    	stringBuilder.append("<Dataset id=\"gdsGlobal\">\n");

        for (Map.Entry<String, Object> e : globalMap.entrySet()) {
        	String key = e.getKey();
        	Object val = e.getValue();
    		if(val == null) val = "";
    		stringColInfos.append("<Column id=\"").append(key).append("\" type=\"STRING\" size=\"256\" />\n");
    		stringRows.append("<Col id=\"").append(key).append("\">").append(val.toString()).append("</Col>\n");
        }

    	stringBuilder.append("<ColumnInfo>\n");
    	stringBuilder.append(stringColInfos.toString());
    	stringBuilder.append("</ColumnInfo>\n");
    	stringBuilder.append("<Rows>\n");
    	stringBuilder.append("<Row>\n");
    	stringBuilder.append(stringRows.toString());
    	stringBuilder.append("</Row>\n");
    	stringBuilder.append("</Rows>\n");
    	stringBuilder.append("</Dataset>\n");
   	
    	stringColInfos.setLength(0);
    	stringRows.setLength(0);
    	
    	stringBuilder.append("<Dataset id=\"gdsParam\">\n");
    	
        for (Map.Entry<String, Object> e : paramMap.entrySet()) {
        	String key = e.getKey();
        	Object val = e.getValue();
    		if(val == null) val = "";
    		stringColInfos.append("<Column id=\"").append(key).append("\" type=\"STRING\" size=\"256\"/>\n");
    		stringRows.append("<Col id=\"").append(key).append("\">").append(val.toString()).append("</Col>\n");
        }    	
    	stringBuilder.append("<ColumnInfo>\n");
    	stringBuilder.append(stringColInfos.toString());
    	stringBuilder.append("</ColumnInfo>\n");
    	stringBuilder.append("<Rows>\n");
    	stringBuilder.append("<Row>\n");
    	stringBuilder.append(stringRows.toString());
    	stringBuilder.append("</Row>\n");
    	stringBuilder.append("</Rows>\n");
    	stringBuilder.append("</Dataset>\n");
    	stringBuilder.append("</Root>\n");
    	
    	//System.out.println("======" + stringBuilder.toString());

        return stringBuilder.toString();
    }    
    
    /**
	 * Next용 Dataset String을 생성한다.
	 * @param globalMap		: globalMap
	 * @param paramMap		: paramMap
	 * @return				: Requset String
	 */	 
    public static String createNextDatasetCode(Map<String,Object> paramMap) {
    	
    	StringBuilder stringBuilder = new StringBuilder();
    	StringBuilder stringColInfos = new StringBuilder();
    	StringBuilder stringRows = new StringBuilder();
    	
      	
    	stringBuilder.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
    	stringBuilder.append("<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">\n");
    	stringBuilder.append("<Parameters>\n");
    	stringBuilder.append("<Parameter id=\"CO_CD\">W01</Parameter>\n");
    	stringBuilder.append("</Parameters>\n");
   	
    	stringColInfos.setLength(0);
    	stringRows.setLength(0);
    	
    	stringBuilder.append("<Dataset id=\"InParam\">\n");
    	
        for (Map.Entry<String, Object> e : paramMap.entrySet()) {
        	String key = e.getKey();
        	Object val = e.getValue();
    		if(val == null) val = "";
    		stringColInfos.append("<Column id=\"").append(key).append("\" type=\"STRING\" size=\"256\"/>\n");
    		stringRows.append("<Col id=\"").append(key).append("\">").append(val.toString()).append("</Col>\n");
        }    	
    	stringBuilder.append("<ColumnInfo>\n");
    	stringBuilder.append(stringColInfos.toString());
    	stringBuilder.append("</ColumnInfo>\n");
    	stringBuilder.append("<Rows>\n");
    	stringBuilder.append("<Row>\n");
    	stringBuilder.append(stringRows.toString());
    	stringBuilder.append("</Row>\n");
    	stringBuilder.append("</Rows>\n");
    	stringBuilder.append("</Dataset>\n");
    	stringBuilder.append("</Root>\n");
    	
    	//System.out.println("======" + stringBuilder.toString());

        return stringBuilder.toString();
    }        

    /**
	 * ResultSet으로 부터 Dataset을 생성한다.
	 * @param dsName		: 생성할 Dataset Name
	 * @param rs			: ResultSet
	 * @return				: Dataset
	 */	    
	public static DataSet executeDataset(String dsName, ResultSet rs) throws Exception
    {
		DataSet dSet = null;

        try{
            dSet = createDataset(dsName, rs);
        }catch(Exception e){
            e.printStackTrace();
            throw e;
        }
        return dSet;
    }
	
    public static byte[] hexToByteArray(String hex) throws Exception  {
        if (hex == null || hex.length() % 2 != 0) {
            return new byte[]{};
        }

        byte[] bytes = new byte[hex.length() / 2];
        for (int i = 0; i < hex.length(); i += 2) {
            byte value = (byte)Integer.parseInt(hex.substring(i, i + 2), 16);
            bytes[(int) Math.floor(i / 2)] = value;
        }
        return bytes;
    }	    	
	
    /**
	 * RSA 암호화키 획득.
	 * @param request		: HttpServletRequest
	 * @param dsName		: Dataset name
	 * @return				: Dataset
     * @throws Exception 
	 */	
    public static DataSet createSecureDataset(HttpServletRequest request, String dsName) throws Exception  {
    	
    	DataSet ds = new DataSet(dsName);
    	ds.clear();
    	
    	ds.addColumn("publicKeyModulus", PlatformDataType.STRING, 255);
    	ds.addColumn("publicKeyExponent", PlatformDataType.STRING, 255);
    	
    	try {
    		
			String publicKeyModulus = (String) request.getSession().getAttribute("publicKeyModulus");
			String publicKeyExponent = (String) request.getSession().getAttribute("publicKeyExponent");
			
			if(publicKeyModulus == null || publicKeyExponent == null) {
				int KEY_SIZE = 1024;
				KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
				generator.initialize(KEY_SIZE);
				
				KeyPair keyPair = generator.genKeyPair();
				KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		
				PublicKey publicKey = keyPair.getPublic();
				PrivateKey privateKey = keyPair.getPrivate();
	
				// 세션에 공개키의 문자열을 키로하여 개인키를 저장한다.
				request.getSession().setAttribute("rsaPrivateKey", privateKey);
		
				// 공개키를 문자열로 변환하여 JavaScript RSA 라이브러리 넘겨준다.
				RSAPublicKeySpec publicSpec = (RSAPublicKeySpec) keyFactory.getKeySpec(publicKey, RSAPublicKeySpec.class);
		
				publicKeyModulus = publicSpec.getModulus().toString(16);
				publicKeyExponent = publicSpec.getPublicExponent().toString(16);
				
				request.getSession().setAttribute("publicKeyModulus", publicKeyModulus);
				request.getSession().setAttribute("publicKeyExponent", publicKeyExponent);
			}
			
			int nRow = ds.newRow();
			ds.set(nRow, "publicKeyModulus", publicKeyModulus);
			ds.set(nRow, "publicKeyExponent", publicKeyExponent);
		  
    	} catch(Exception e) {
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
    	}
    	
    	return ds;
    }
    
    /**
	 * RSA 암호화키 획득.
	 * @param request		: HttpServletRequest
	 * @param v				: 복호화 대상 value
	 * @return	decryptContents			: 복호화값
     * @throws Exception 
	 */	
    public static String getDectypeValue(HttpServletRequest request, String v) throws Exception  {
    	String decryptContents = "";
    	try {
	    	PrivateKey privateKey = (PrivateKey) request.getSession().getAttribute("rsaPrivateKey");
	    	Cipher cipher = Cipher.getInstance("RSA");
	    	byte[] encryptedBytes = hexToByteArray(v);
	    	cipher.init(Cipher.DECRYPT_MODE, privateKey);
	    	byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
	    	decryptContents = new String(decryptedBytes, "utf-8"); // 문자 인코딩 주의.    
    	
    	} catch(Exception e) {
       		throw new NexacroException("exceptionName", -999, "msg.keyfail");
    	}    	
    	
    	return decryptContents;
    }
    
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
    /*
	public static Map<String,Object> getUserInfoMap(HttpServletRequest request) 
	{
    	// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	
    	//세션 정보를 map형태로 리턴
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();

    	// 개발중
    	if(userInfo == null) {
	    	loginUserInfo.put("USER_ID"				, "TESTER");
	    	loginUserInfo.put("USER_ID_SRV"				, "TESTER");
	    	loginUserInfo.put("SYS_FLAG"			, "53010");
	    	loginUserInfo.put("SYTM_FLAG_CD"			, "53010");
	    	loginUserInfo.put("IPADDR"				, "127.0.0.1");
	    	loginUserInfo.put("USER_IPADDR"			, "127.0.0.1");
	    	loginUserInfo.put("USER_CON_IPADDR_SRV"			, "127.0.0.1");
	    	loginUserInfo.put("STAFF_NO"			, "TESTER");
	    	loginUserInfo.put("GROUP_NO"			, "");
    	} else {
        	loginUserInfo.put("USER_ID"				, userInfo.getUserId());
        	loginUserInfo.put("USER_ID_SRV"			, userInfo.getUserId());
        	loginUserInfo.put("SYS_FLAG"			, userInfo.getSysFlag());
        	loginUserInfo.put("SYTM_FLAG_CD"			, userInfo.getSysFlag());
        	loginUserInfo.put("IPADDR"				, userInfo.getUserIPAddress());
        	loginUserInfo.put("STAFF_NO"			, userInfo.getStaffNo());
        	loginUserInfo.put("GROUP_NO"			, userInfo.getGroupId());     
	    	loginUserInfo.put("USER_IPADDR"			, userInfo.getUserIPAddress());
	    	loginUserInfo.put("USER_CON_IPADDR_SRV"			, userInfo.getUserIPAddress());        	
    	}
    	
		return loginUserInfo;
	}
	*/
	
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
    /*
	public static Map<String,Object> appendUserInfoMap(HttpServletRequest request, Map<String,Object> map) 
	{
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo != null) {
			map.put("USER_ID"				, userInfo.getUserId());
			map.put("USER_ID_SRV"			, userInfo.getUserId());
			map.put("SYS_FLAG"				, userInfo.getSysFlag());
			map.put("SYTM_FLAG_CD"			, userInfo.getSysFlag());
			map.put("IPADDR"				, userInfo.getUserIPAddress());
			map.put("STAFF_NO"				, userInfo.getStaffNo());
			map.put("GROUP_NO"				, userInfo.getGroupId());     
			map.put("USER_IPADDR"			, userInfo.getUserIPAddress());
			map.put("USER_CON_IPADDR_SRV"	, userInfo.getUserIPAddress());
		}
		return map;
	}
	*/
	
	
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	@SuppressWarnings("unchecked")
	public static Map<String,Object> getListOfMap(Object obj) 
	{
		Map<String,Object> newMap = new HashMap<String, Object>();
		if(obj instanceof List) {
			List<?> arr = (List<?>) obj;
			if(arr.size() > 0) {
				newMap = (Map<String, Object>) arr.get(0);
				return newMap;
			} else {
				return newMap;
			}
		} else {
			return (Map<String, Object>) obj;
		}
	}	    
	
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	@SuppressWarnings("unchecked")
	public static Map<String,Object> getListOfDataSet(DataSet obj) 
	{
		Map<String,Object> newMap = new HashMap<String, Object>();
		int colcount = obj.getColumnCount();
		for(int i=0;i<colcount;i++) {
			newMap.put(obj.getColumn(i).getName(), obj.getObject(0, i));
		}
		return newMap;
	}	    	
}
