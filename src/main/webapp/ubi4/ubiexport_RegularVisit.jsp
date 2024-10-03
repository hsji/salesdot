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
	//String jrfFileDir	= "E:/PROJECT/NEXTp/ROOT/NEXTp/Report/";
	//String jrfFileDir	= "D:/Documents/01. Project/TOBESOFT/NEXTp/WebContent/NEXTp/Report/";
	String jrfFileDir	= "E:/PROJECT/NEXTp/ROOT/NEXTp/Report/";
	String jrfFileName	= "PRINT_REGULARVISIT.jrf";
	String arg			= "";
	//String exportPath		= "D:/Documents/01. Project/TOBESOFT/NEXTp/WebContent/FILE/NEXTp/RegularVisit";
	String exportPath		= "E:/PROJECT/NEXTp/ROOT/FILE/NEXTp/RegularVisit";
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
	DataSet inData = pdInData.getDataSet("dsRVL");	
	DataSet inPrint = new DataSet("dsRVL");
	
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
			inPrint.set(0, "RVL_SEQ", inData.getString(i, "RVL_SEQ"));
			inPrint.set(0, "RTS_SEQ", inData.getString(i, "RTS_SEQ"));
			inPrint.set(0, "CLIENT_NAME", inData.getString(i, "CLIENT_NAME"));
			inPrint.set(0, "PROJECT_NAME", inData.getString(i, "PROJECT_NAME"));
			inPrint.set(0, "NP_FLAG", inData.getString(i, "NP_FLAG"));
			inPrint.set(0, "NP_VERSION", inData.getString(i, "NP_VERSION"));
			inPrint.set(0, "XP_FLAG", inData.getString(i, "XP_FLAG"));
			inPrint.set(0, "XP_VERSION", inData.getString(i, "XP_VERSION"));
			inPrint.set(0, "MP_FLAG", inData.getString(i, "MP_FLAG"));
			inPrint.set(0, "MP_VERSION", inData.getString(i, "MP_VERSION"));
			inPrint.set(0, "XPUSH_FLAG", inData.getString(i, "XPUSH_FLAG"));
			inPrint.set(0, "XPUSH_VERSION", inData.getString(i, "XPUSH_VERSION"));
			inPrint.set(0, "ETC_PRODUCTS", inData.getString(i, "ETC_PRODUCTS"));
			inPrint.set(0, "OPERATOR_COMPANY", inData.getString(i, "OPERATOR_COMPANY"));
			inPrint.set(0, "AREA_CODE", inData.getString(i, "AREA_CODE"));
			inPrint.set(0, "MA_START_DATE", inData.getString(i, "MA_START_DATE"));
			inPrint.set(0, "MA_END_DATE", inData.getString(i, "MA_END_DATE"));
			inPrint.set(0, "VISIT_FLAG", inData.getString(i, "VISIT_FLAG"));
			inPrint.set(0, "REMOTE_FLAG", inData.getString(i, "REMOTE_FLAG"));
			inPrint.set(0, "ERROR_FLAG", inData.getString(i, "ERROR_FLAG"));
			inPrint.set(0, "MONTH_FLAG", inData.getString(i, "MONTH_FLAG"));
			inPrint.set(0, "BIMONTHLY_FLAG", inData.getString(i, "BIMONTHLY_FLAG"));
			inPrint.set(0, "QUARTER_FLAG", inData.getString(i, "QUARTER_FLAG"));
			inPrint.set(0, "SEMIANNUAL_FLAG", inData.getString(i, "SEMIANNUAL_FLAG"));
			inPrint.set(0, "INSTALL_FLAG", inData.getString(i, "INSTALL_FLAG"));
			inPrint.set(0, "MOVE_INSTALL_FLAG", inData.getString(i, "MOVE_INSTALL_FLAG"));
			inPrint.set(0, "PATCH_FLAG", inData.getString(i, "PATCH_FLAG"));
			inPrint.set(0, "ABNORMALITY_FLAG", inData.getString(i, "ABNORMALITY_FLAG"));
			inPrint.set(0, "DEVELOP_FLAG", inData.getString(i, "DEVELOP_FLAG"));
			inPrint.set(0, "ENV_FLAG", inData.getString(i, "ENV_FLAG"));
			inPrint.set(0, "EMERGENCY_FLAG", inData.getString(i, "EMERGENCY_FLAG"));
			inPrint.set(0, "APPLICATION_FLAG", inData.getString(i, "APPLICATION_FLAG"));
			inPrint.set(0, "EDU_FLAG", inData.getString(i, "EDU_FLAG"));
			inPrint.set(0, "ETC_FLAG", inData.getString(i, "ETC_FLAG"));
			inPrint.set(0, "ETC_PROCESS", inData.getString(i, "ETC_PROCESS"));
			inPrint.set(0, "ENGINE", inData.getString(i, "ENGINE"));
			inPrint.set(0, "CACHE", inData.getString(i, "CACHE"));
			inPrint.set(0, "XML_FLAG", inData.getString(i, "XML_FLAG"));
			inPrint.set(0, "SSV_FLAG", inData.getString(i, "SSV_FLAG"));
			inPrint.set(0, "COMPRESS_FLAG", inData.getString(i, "COMPRESS_FLAG"));
			inPrint.set(0, "COMPILE_FLAG", inData.getString(i, "COMPILE_FLAG"));
			inPrint.set(0, "MERGE_FLAG", inData.getString(i, "MERGE_FLAG"));
			inPrint.set(0, "HTTP_FLAG", inData.getString(i, "HTTP_FLAG"));
			inPrint.set(0, "HTTPS_FLAG", inData.getString(i, "HTTPS_FLAG"));
			inPrint.set(0, "PRIVATE_FLAG", inData.getString(i, "PRIVATE_FLAG"));
			inPrint.set(0, "EMBED_FLAG", inData.getString(i, "EMBED_FLAG"));
			inPrint.set(0, "COMBINED_FLAG", inData.getString(i, "COMBINED_FLAG"));
			inPrint.set(0, "MOBILE_FLAG", inData.getString(i, "MOBILE_FLAG"));
			inPrint.set(0, "ETC_CHECK", inData.getString(i, "ETC_CHECK"));
			inPrint.set(0, "SERVER_CHECK", inData.getString(i, "SERVER_CHECK"));
			inPrint.set(0, "PORT_CHECK", inData.getString(i, "PORT_CHECK"));
			inPrint.set(0, "PROVIDER_CHECK", inData.getString(i, "PROVIDER_CHECK"));
			inPrint.set(0, "CLIENT_CHECK", inData.getString(i, "CLIENT_CHECK"));
			inPrint.set(0, "WORK_DATE", inData.getString(i, "WORK_DATE"));
			inPrint.set(0, "WORK_START_TIME", inData.getString(i, "WORK_START_TIME"));
			inPrint.set(0, "WORK_END_TIME", inData.getString(i, "WORK_END_TIME"));
			inPrint.set(0, "REQUIREMENTS", inData.getString(i, "REQUIREMENTS"));
			inPrint.set(0, "WORK_EMP_NO", inData.getString(i, "WORK_EMP_NO"));
			inPrint.set(0, "WORK_NAME", inData.getString(i, "WORK_NAME"));
			inPrint.set(0, "WORK_DUTY", inData.getString(i, "WORK_DUTY"));
			inPrint.set(0, "WORK_TEL", inData.getString(i, "WORK_TEL"));
			inPrint.set(0, "WORK_EMAIL", inData.getString(i, "WORK_EMAIL"));
			inPrint.set(0, "WORK_SIGN", inData.getString(i, "WORK_SIGN"));
			inPrint.set(0, "WORK_SIGN_PATH", inData.getString(i, "WORK_SIGN_PATH"));
			inPrint.set(0, "OPERATOR", inData.getString(i, "OPERATOR"));
			inPrint.set(0, "OPERATOR_DUTY", inData.getString(i, "OPERATOR_DUTY"));
			inPrint.set(0, "OPERATOR_TEL", inData.getString(i, "OPERATOR_TEL"));
			inPrint.set(0, "OPERATOR_EMAIL", inData.getString(i, "OPERATOR_EMAIL"));
			inPrint.set(0, "OPERATOR_SIGN", inData.getString(i, "OPERATOR_SIGN"));
			inPrint.set(0, "OPERATOR_SIGN_PATH", inData.getString(i, "OPERATOR_SIGN_PATH"));
			inPrint.set(0, "CLIENT", inData.getString(i, "CLIENT"));
			inPrint.set(0, "CLIENT_DUTY", inData.getString(i, "CLIENT_DUTY"));
			inPrint.set(0, "CLIENT_TEL", inData.getString(i, "CLIENT_TEL"));
			inPrint.set(0, "CLIENT_EMAIL", inData.getString(i, "CLIENT_EMAIL"));
			inPrint.set(0, "CLIENT_SIGN", inData.getString(i, "CLIENT_SIGN"));
			inPrint.set(0, "CLIENT_SIGN_PATH", inData.getString(i, "CLIENT_SIGN_PATH"));
			
			String strFileNm = inPrint.getString(0, "CLIENT_NAME")+"_"+inPrint.getString(0, "PROJECT_NAME");
			//System.out.println(exportFilePath+strFileNm);
			ubi.setExportParams(exportfileType, exportFilePath+inPrint.getString(0, "RVL_SEQ")+"_1_"+strFileNm);
			String inPrintXml = inPrint.saveXml();
			ubi.setDataset("dsRVL", inPrintXml, "TOBEXML");  //nexacro 데이터셋
			isSuccess = ubi.loadReport();
			// System.out.println(isSuccess);
			if (!isSuccess) break;
			
			ubi.setExportParams(exportfileType, exportFilePath+inPrint.getString(0, "RVL_SEQ")+"_2_"+strFileNm);
			inPrintXml = inPrint.saveXml();
			ubi.setDataset("dsRVL", inPrintXml, "TOBEXML");  //nexacro 데이터셋
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