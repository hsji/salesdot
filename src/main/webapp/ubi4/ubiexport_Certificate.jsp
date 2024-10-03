<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="com.ubireport.viewer.report.preview.UbiViewer" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.text.*" %>
<%

	String appUrl		= "http://next.tobesoft.com";
	String fileURL		= appUrl + "/ubi4";	
	String ubiServerURL	= appUrl + "/UbiServer";					 

	String ds			= "Tutorial";
	String jrfFileDir	= "E:/PROJECT/NEXTp/ROOT/NEXTp/Report/";
	String jrfFileName	= "EDU_CERTIFICATE.jrf";
	String arg			= "";
	
	String exportPath		= "E:/PROJECT/NEXTp/ROOT/FILE/NEXTp/Certificate";
	String exportFilePath	= exportPath + java.io.File.separator;
	String exportfileType	= "pdf";


	File fPath = new File(exportPath);
	if (!fPath.exists()) {
		fPath.mkdirs();
	}
	
	// HttpServletRequest를 이용하여 HttpPlatformRequest 생성
	HttpPlatformRequest req = new HttpPlatformRequest(request);
	
	// 데이터 수신
	req.receiveData();
	
	// Input DataSet 생성
	PlatformData pdInData = req.getData();
	DataSet inData = pdInData.getDataSet("ds_Print");	
	DataSet inPrint = new DataSet("ds_InPrint");
	
	// VariableList 참조
	VariableList varList = pdInData.getVariableList();
	
	// Output 생성
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();

	try {
		boolean isSuccess = true;		
		
		UbiViewer ubi = new UbiViewer(false, false);
		ubi.fileURL = fileURL;
		ubi.ubiServerURL = ubiServerURL;
		ubi.isLocalFile = true;
		ubi.jrfFileDir = jrfFileDir;
		ubi.jrfFileName = jrfFileName;
		ubi.arg = arg;
		ubi.dataSource = ds;
		ubi.exectype = "TYPE6";
		ubi.fontRevision = true;
		ubi.isDebug = true;
		ubi.isLocalData = true; // 추가
		
		
		String inDataXml = inData.saveXml();
		inPrint.loadXml(inDataXml);
		
		for (int i=0; i<inData.getRowCount(); i++) {
			inPrint.clearData();
			inPrint.newRow();
			inPrint.set(0, "cer_no",	inData.getString(i, "cer_no"));
			inPrint.set(0, "req_nm",	inData.getString(i, "req_nm"));
			inPrint.set(0, "company_nm",inData.getString(i, "company_nm"));
			inPrint.set(0, "course_nm",	inData.getString(i, "course_nm"));
			inPrint.set(0, "period",	inData.getString(i, "period"));
			inPrint.set(0, "yyyy",		inData.getString(i, "yyyy"));
			inPrint.set(0, "mm",		inData.getString(i, "mm"));
			inPrint.set(0, "dd",		inData.getString(i, "dd"));
			inPrint.set(0, "imgLogo",	inData.getString(i, "imgLogo"));
			inPrint.set(0, "imgStamp",	inData.getString(i, "imgStamp"));
			inPrint.set(0, "outLine",	inData.getString(i, "outLine"));
			inPrint.set(0, "getTime",	inData.getString(i, "getTime"));
			inPrint.set(0, "CEO_NAME",	inData.getString(i, "CEO_NAME"));
			inPrint.set(0, "ESL_SEQ",	inData.getString(i, "ESL_SEQ"));
			
			
			String strFileNm = "투비소프트수료증서_" + inPrint.getString(0, "req_nm")+"_"+inData.getString(i, "ESL_SEQ");
			System.out.println(exportFilePath+strFileNm);
			ubi.setExportParams(exportfileType, exportFilePath+strFileNm);
			
			String inPrintXml = inPrint.saveXml();
			ubi.setDataset("ds_print", inPrintXml, "TOBEXML");  //nexacro 데이터셋
			isSuccess = ubi.loadReport();
			// System.out.println(isSuccess);
			if (!isSuccess) break;
		}
		
		VariableList vl  = new VariableList();
		if( isSuccess){ 
			resVarList.add("ErrorCode",	"0");
			resVarList.add("ErrorMsg",	"Export Success!");	
		} else {
			resVarList.add("ErrorCode",	"-1");
			resVarList.add("ErrorMsg",	"Export Fail!");	
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