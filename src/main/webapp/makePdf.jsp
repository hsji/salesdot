<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page language="java"%>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="org.apache.pdfbox.Loader" %>
<%@ page import="org.apache.pdfbox.pdmodel.PDDocument" %>
<%@ page import="org.apache.pdfbox.pdmodel.encryption.AccessPermission" %>
<%@ page import="org.apache.pdfbox.pdmodel.encryption.StandardProtectionPolicy" %>
<%@ page import="com.itextpdf.kernel.pdf.EncryptionConstants" %>
<%@ page import="com.itextpdf.kernel.pdf.PdfDocument" %>
<%@ page import="com.itextpdf.kernel.pdf.PdfReader" %>
<%@ page import="com.itextpdf.kernel.pdf.WriterProperties" %>
<%@ page import="com.unisales.util.ItextPdfInfo" %>
<%@ page import="com.unisales.util.PDFUtil" %>

<%
	System.out.println("---------------------------------------------------"); 
	String default_charset = "utf-8";
	
	String default_encode_method = PlatformType.CONTENT_TYPE_XML;
	PlatformRequest platformRequest = new PlatformRequest(request.getInputStream(), default_encode_method, default_charset);
    platformRequest.receiveData();
    PlatformData inPD = platformRequest.getData();

    VariableList    inVariableList  = inPD.getVariableList();
    DataSetList     inDataSetList   = inPD.getDataSetList();
	
	DataSet inds 	= inDataSetList.get("dsIn");
	
	String html 	= inds.getString(0,"html");		// html
	String fname 	= inds.getString(0,"fname");	// file name
	String dpath 	= inds.getString(0,"dpath");	// directory
	String enc	 	= inds.getString(0,"enc");		// enc y/n
	String resno	= inds.getString(0,"resno");	// 주번
	if(resno == null) resno = "1234";
	
	if(enc == null) enc = "N";
	
	String rootPath = "C:\\Salary\\PDF\\";
	String encDir = "enc";
	
	try {
		String dirpath = rootPath + dpath;
		String direncpath = rootPath + dpath + encDir;
		
    	File dirx = new File(dirpath); 
		
    	if (!dirx.isDirectory()) { 
    		dirx.mkdirs(); 
    	}
		
		if(enc.equals("Y")) {
			File diry = new File(direncpath); 
			if (!diry.isDirectory()) { 
				diry.mkdirs(); 
			}
		}
		dirpath = dirpath + "\\";
		direncpath = direncpath + "\\";
		System.out.println("========>DIR:" + dirpath);
		
    	ItextPdfInfo itextPdfDto = new ItextPdfInfo(); 	
        // pdf 파일이 저장될 경로 ( Windows 기준 )
		itextPdfDto.setPdfFilePath(dirpath);

        String saveFileName = fname;// + ".pdf"; 
        itextPdfDto.setPdfFileName(saveFileName);
		System.out.println("========>file:" + dirpath + saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        // ======================= PDF 존재 유무 체크 =======================
        // 없다면 PDF 파일 만들기
        File file = pdfUtil.checkPDF(itextPdfDto, html);
        // ===============================================================

		if(enc.equals("Y")) {
			String OUTPUT_FOLDER = direncpath;

			PDDocument pdDocument = Loader.loadPDF(file);
			AccessPermission accessPermission = new AccessPermission();
			StandardProtectionPolicy standardProtectionPolicy = new StandardProtectionPolicy(resno, resno, accessPermission); // param : ownerpassword, userpassword, AccessPermission
			standardProtectionPolicy.setEncryptionKeyLength(128); // 암호화 키길이(40, 128, 256) 이외 값 exception
			standardProtectionPolicy.setPermissions(accessPermission);
			pdDocument.protect(standardProtectionPolicy);
			pdDocument.save(OUTPUT_FOLDER + saveFileName + ".pdf");
			pdDocument.close();
		}
        System.out.println("========>END:");
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	PlatformResponse platformResponse = new PlatformResponse(response.getOutputStream(), default_encode_method, default_charset);
    PlatformData outPD = new PlatformData();
    VariableList    out_vl  = new VariableList();
    DataSetList     out_dl   = new DataSetList();
	
	out_vl.add("ErrorCode", 0);
	out_vl.add("ErrorMsg", "SUCC");	
	
	outPD.setDataSetList(out_dl);
	outPD.setVariableList(out_vl);
	out.clearBuffer();
	platformResponse.setData(outPD);
	platformResponse.sendData();

%>