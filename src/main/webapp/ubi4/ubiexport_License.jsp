<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubireport.viewer.report.preview.UbiViewer" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.text.*" %>
<%

	String appUrl		= "http://next.tobesoft.com";
	String fileURL		= appUrl + "/ubi4";	
	String ubiServerURL	= appUrl + "/UbiServer";						 

	String ds			= "Tutorial";
	String jrfFileDir	= "E:/PROJECT/NEXTp/ROOT/NEXTp/Report/";
	
	String jrfFileName	= "nexacro.jrf";
	String arg			= "user#홍길동#";
	
	String exportPath		= "E:/PROJECT/NEXTp/ROOT/FILE/NEXTp/License";
	String exportFileName	= "License Certificate.pdf";
	String exportFilePath	= exportPath + java.io.File.separator + exportFileName;
	String exportfileType	= "pdf";
	
	
	// HttpServletRequest를 이용하여 HttpPlatformRequest 생성
	HttpPlatformRequest req = new HttpPlatformRequest(request);
	
	// 데이터 수신
	req.receiveData();
	
	// Input DataSet 생성
	PlatformData pdInData = req.getData();
	DataSet inData = pdInData.getDataSet("ds_Print");	
	
	// VariableList 참조
	VariableList varList = pdInData.getVariableList();
	
	
	
	// Output 생성
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	
	String sPrProductType = varList.getString("PRODUCT_TYPE");
	String sPrLanguge = varList.getString("LANGUAGE");
	String sPrLicenseFileNm = varList.getString("LICENSE_FILENM");
	
	
	// System.out.println("sPrProductType:["+sPrProductType+"]");
	// System.out.println("sPrLanguge:["+sPrLanguge+"]");
	// System.out.println("sPrLicenseFileNm:["+sPrLicenseFileNm+"]");
	
	jrfFileName	= sPrLicenseFileNm;
	arg			= "PRODUCT_TYPE#"+sPrProductType+"#LANGUAGE#"+sPrLanguge;
	
	
	try {
		UbiViewer ubi = new UbiViewer(false, false);

		ubi.fileURL = fileURL;
		ubi.ubiServerURL = ubiServerURL;
		ubi.isLocalFile = true;
		ubi.jrfFileDir = jrfFileDir;
		ubi.jrfFileName = jrfFileName;
		ubi.arg = arg;
		ubi.dataSource = ds;
		ubi.setExportParams(exportfileType, exportFilePath);
		ubi.exectype = "TYPE6";
		ubi.fontRevision = true;
		ubi.isDebug = true;
		
		ubi.isLocalData = true; // 추가

		String inDataXml = inData.saveXml();
		ubi.setDataset("ds_Print", inDataXml, "TOBEXML");  //nexacro 데이터셋


		boolean isSuccess = ubi.loadReport();
		// System.out.println("####################");
		// System.out.println(isSuccess);
		
		// System.out.println("####################");
		
		
		
		VariableList vl  = new VariableList();
		
		if( isSuccess){ 
			resVarList.add("ErrorCode",	"0");
			resVarList.add("ErrorMsg",		"Export Success!");	
		} else {
			resVarList.add("ErrorCode",	"-1");
			resVarList.add("ErrorMsg",		"Export Fail!");	
		}	
	}
	catch(Exception e) {
		e.printStackTrace();
		resVarList.add("ErrorCode", "-1");
		resVarList.add("ErrorMsg", e.getMessage());
	}
	
	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();
%>