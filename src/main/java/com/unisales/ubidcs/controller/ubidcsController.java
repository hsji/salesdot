package com.unisales.ubidcs.controller;

import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.security.NoSuchAlgorithmException;
import java.sql.Clob;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.apache.pdfbox.tools.imageio.ImageIOUtil;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.ubidcs.service.ubidcsService;
import com.unisales.ubidcs.solution.eform.Flatten;
import com.unisales.util.UbidcsUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformType;

/**
 * <pre>
 * @title   UbiDocs 서비스 컨트롤러
 * @desc    공통형태의 서비스 사용         
 * @package com.ubi.ubidcs.controller
 * <pre>
 * 
 * @author  
 * @since   
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */

@Controller
public class ubidcsController {
	private Logger log = LoggerFactory.getLogger(ubidcsController.class);
	
	final String PDF_EDITJSONFILE 	= "edit.json";
	final String PDF_INFOJSONFILE 	= "info.json";
	
	@Autowired(required=true)
    private ubidcsService commUbiService;	
	/**
	 * PDF를 조회,출력한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream PDF stream
	 */	
	@RequestMapping(value = "/ubiPDFView.do")
	public void ubiPDFView(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		//String basePath = ubidcsUtil.getBasePath();
        
		String uuid 	= request.getParameter("uuid");
		String sysCode 	= request.getParameter("sysCode");
		String bizCode 	= request.getParameter("bizCode");
		String doctype 	= request.getParameter("tp");
		if(doctype == null) doctype = "";
			
		//System.out.println("ubiPDFView :" + uuid + ":" + doctype);
		//String u = request.getParameter("u");
		if(uuid == null) uuid = "";

    	if(uuid.equals("")) {
    		response.getWriter().print("-999|NOT FOUND");
    	} else {
    		try {
	    		String filePath = "";
	    		if(doctype.equals("mail")) {	// docuViewer.html에서 호출
	    			String userId 	= request.getParameter("u");
	    			String seq 		= request.getParameter("seq");
	    	        //*****************************************************************************
	    	        // 실 ID 가져오기
	    	        //*****************************************************************************	 	        		
	    	        userId = ubiDocuJsonGetMailUserService(uuid, userId, Integer.parseInt(seq)); 
	    	        
	    			if(seq == null) seq = "";
	    			
	    			//Properties properties = ubidcsUtil.getProperties();
	    			String midpath = ubidcsUtil.getUserPdfPath(uuid, sysCode, bizCode, userId);	//properties.getProperty("ubidocumaker.pdf.mid.path");	    			
	    			filePath =  midpath + "/" + seq + "/";
	    		} else {
	    			filePath =  ubidcsUtil.getUuidPath(uuid, sysCode, bizCode);	//basePath + sysCode + "/" + bizCode + "/" + uuid;
	    		}
	    		System.out.println("ubiPDFView:" + filePath);
	    		File file = new File(filePath);
	    		
	    		//System.out.println("ubiPDFView filePath:" + filePath + ":" + file.isDirectory());
	    		if(file.isDirectory()) {
	    			//String strPdfPath = ubidcsUtil.getPdfFilePath(filePath);
	    			String strPdfPath = ubidcsUtil.readJsonFile(filePath, "filefullpath", PDF_INFOJSONFILE);
	    			
				    File pdfFile = new File(strPdfPath);
				    //System.out.println("ubiPDFView strPdfPath:" + strPdfPath + ":" + pdfFile.exists());
				    if(pdfFile.exists()) {
					    // 보여주기
					    response.setContentType("application/pdf");
					    response.setHeader("Content-Description", "JSP Generated Data");
					 
						FileInputStream fis = null;
						BufferedOutputStream bos = null;
						
					    fis = new FileInputStream(pdfFile);
					    int size = fis.available();
					    
					    byte[] buf = new byte[size];
					    int readCount = fis.read(buf);
					 
					    response.flushBuffer();
					 
					    bos = new BufferedOutputStream(response.getOutputStream());
					    bos.write(buf, 0, readCount);
					    bos.flush();
				    } else {
						response.getWriter().print("-999|NOT FOUND");
				    }	
	    		}
    		} catch(Exception e) {
    			response.getWriter().print("-1|" + e.getStackTrace());
    			e.printStackTrace();
    		}
    	}
	} 
	
	
	/**
	 * 넥사화면에서 웹브라우저로 사인결과를 확인한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream PDF stream
	 */	
	@RequestMapping(value = "/ubiPDFUserSignView.do")
	public void ubiPDFUserSignView(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		
		String uuid 	= request.getParameter("uuid");
		String sysCode 	= request.getParameter("sysCode");
		String bizCode 	= request.getParameter("bizCode");
		String userId 	= request.getParameter("u");
		String seq 	= request.getParameter("seq");
		if(userId == null) userId = "";

		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String[] arrPath;
		if(userId.equals("")) {
			arrPath = ubidcsUtil.getPdfFilePath(uuid, sysCode, bizCode);
		} else {
			arrPath = ubidcsUtil.getUserPdfFilePath(uuid, sysCode, bizCode, userId, Integer.parseInt(seq));
		}
        
		String filePath = arrPath[0];
		if(uuid == null) uuid = "";

		System.out.println("ubiPDFUserSignView.do===" + filePath);
    	if(uuid.equals("")) {
    		response.getWriter().print("-999|NOT FOUND");
    	} else {
    		try {
	    		File file = new File(filePath);
			    if(file.exists()) {
				    // 보여주기
			    	System.out.println("ubiPDFUserSignView.do===PDF보여준다");
				    response.setContentType("application/pdf");
				    response.setHeader("Content-Description", "JSP Generated Data");
				 
					FileInputStream fis = null;
					BufferedOutputStream bos = null;
					
				    fis = new FileInputStream(file);
				    int size = fis.available();
				    
				    byte[] buf = new byte[size];
				    int readCount = fis.read(buf);
				 
				    response.flushBuffer();
				 
				    bos = new BufferedOutputStream(response.getOutputStream());
				    bos.write(buf, 0, readCount);
				    bos.flush();
			    } else {
					response.getWriter().print("-999|NOT FOUND");
			    }	
    		} catch(Exception e) {
    			response.getWriter().print("-1|" + e.getStackTrace());
    			e.printStackTrace();
    		}
    	}
	} 	
	
	/**
	 * PDF를 편집정보를조회한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream json string
	 */		
	@SuppressWarnings("resource")
	@RequestMapping(value = "/ubiEditorJson.do")
	public void ubiEditorJson(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		//String basePath = ubidcsUtil.getBasePath();
        
		String uuid = request.getParameter("uuid");
		String sysCode = request.getParameter("sysCode");
		String bizCode = request.getParameter("bizCode");

		if(uuid == null) uuid = "";

    	if(uuid.equals("")) {
    		response.getWriter().print("");
    	} else {
    		try {
	    		String filePath =  ubidcsUtil.getUuidPath(uuid, sysCode, bizCode) + "/" + PDF_EDITJSONFILE;               //  basePath + sysCode + "/" + bizCode + "/" + uuid + "/edit.json";
	    		File file = new File(filePath);
	    		
	    		if(file.exists()) {
				    response.setContentType("application/json");
				    response.setCharacterEncoding("utf-8");
				 
					FileInputStream fis = null;
					BufferedOutputStream bos = null;
					
				    fis = new FileInputStream(file);
				    int size = fis.available();
				    
				    byte[] buf = new byte[size];
				    int readCount = fis.read(buf);
				 
				    response.flushBuffer();
				 
				    bos = new BufferedOutputStream(response.getOutputStream());
				    bos.write(buf, 0, readCount);
				    bos.flush();
	    		}
    		} catch(Exception e) {
    			response.getWriter().print("");
    			e.printStackTrace();
    		}
    	}
	}
	
	/**
	 * PDF Snapshot 이미지를 전송. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return string file 정보
	 */			
	@RequestMapping(value = "/ubiGetSnapshot.do")
	public void ubiGetSnapshot(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		
		try {
			UbidcsUtil ubidcsUtil = new UbidcsUtil();
			
			String uuid = request.getParameter("u");
			String sysCode = request.getParameter("s");
			String bizCode = request.getParameter("b");
			
			String[] arrPath = ubidcsUtil.getPdfFilePath(uuid, sysCode, bizCode);
			
		    File imgFile = new File(arrPath[0] + ".png");
		    if(imgFile.exists()) {
			    // 보여주기
			    response.setContentType("application/octet-stream");
			 
				FileInputStream fis = null;
				BufferedOutputStream bos = null;
				
			    fis = new FileInputStream(arrPath[0] + ".png");
			    int size = fis.available();
			    
			    byte[] buf = new byte[size];
			    int readCount = fis.read(buf);
			 
			    response.flushBuffer();
			 
			    bos = new BufferedOutputStream(response.getOutputStream());
			    bos.write(buf, 0, readCount);
			    bos.flush();
		    } else {
				response.getWriter().print("");
		    }	
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	public void ubiDocuNewSaveService(String uuid, String sysCode, String bizCode, 
							String userId) throws IOException, ParseException {

		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String[] arrPath = ubidcsUtil.getPdfFilePath(uuid, sysCode, bizCode);

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "insert");
		queryMap.put("QMap"		, "ubiDocMapper.insertDocInfo");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"		, uuid);
		inMap.put("SYS_CODE"	, sysCode);
		inMap.put("BIZ_CODE"	, bizCode);
		inMap.put("USED_FLAG"		, "1");
		inMap.put("INPT_ID"		, userId);		
		inMap.put("CHGE_ID"		, userId);			
		inMap.put("PDF_FILE_NM"		, arrPath[1]);
		inMap.put("PDF_ORIG_FILE_NM"	, arrPath[2]);
		inMap.put("PDF_FILE_PATH_NM"	, arrPath[0]);
		
		commUbiService.saveDocuQueryMap(queryMap, inMap);
	}
			
	/**
	 * PDF를 최초 등록한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return string file 정보
	 */			
	@RequestMapping(value = "/ubiFileUpload.do")
	public void ubiFileUpload(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		
		System.out.println("ubiFileUpload");
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		//String basePath = ubidcsUtil.getBasePath();
        
    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();
    	String uuid    = mhsr.getParameter("uuid");
    	String sysCode = mhsr.getParameter("sysCode");
    	String bizCode = mhsr.getParameter("bizCode");
    	String userId  = mhsr.getParameter("userId");
    	String formerType = "former";
    	
    	if(uuid == null) uuid = "";
    	if(uuid.equals("") || uuid.equals("null")) {
    		uuid = "uuid_" + System.currentTimeMillis();
    	}

    	MultipartFile mfile = null; 
    	String fieldName = ""; 
    	
    	String fullPath = ubidcsUtil.getUuidPath(uuid, sysCode, bizCode);	//basePath + sysCode + "/" + bizCode + "/" + uuid;
    	fullPath = fullPath.replace("\\", "\\\\");
    	
    	String mdName = "";
    	
    	File dir = new File(fullPath); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	
    	String outData = "{ \"uuid\": \"" + uuid + "\" ";
		// 값이 나올때까지 
		while (iter.hasNext()) { 
			fieldName = (String)iter.next();
			
			// 내용을 가져와서 
			mfile = mhsr.getFile(fieldName); 
			String origName; 
			//origName = new String(mfile.getOriginalFilename().getBytes("8859_1"), "UTF-8");
			origName = mfile.getOriginalFilename();

			// 파일명이 없다면 
			if ("".equals(origName)) {
				continue; 
			} 
			
			try {
				mdName = ubidcsUtil.txtToMd(origName + "_" + System.currentTimeMillis());// 해당 파일객체들의 키값을 하나씩 출력 
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			// 설정한 path에 파일저장 
			File serverFile = new File(fullPath + "/" + mdName); 
			mfile.transferTo(serverFile); 
			
			// snapshot
			PDDocument document = Loader.loadPDF(serverFile);
			PDFRenderer pdfRenderer = new PDFRenderer(document);

			BufferedImage bim = pdfRenderer.renderImageWithDPI(0, 20, ImageType.RGB);
			ImageIOUtil.writeImage(bim, fullPath + "/" + mdName + ".png", 20);
	        document.close();
			
	        Date date = new Date();
	        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	        String strDate = format.format(date);
	        
			/* 파일정보 저장 */
			String jsonData = "";
			jsonData  = "{ \"filefullpath\"	: \"" + ( fullPath + "/" + mdName ) + "\",";
			jsonData += "  \"filepath\" 	: \"" + fullPath + "\",";
			jsonData += "  \"filename\" 	: \"" + mdName + "\",";
			jsonData += "  \"orgfilename\" 	: \"" + origName + "\",";
			jsonData += "  \"sysCode\"  	: \"" + sysCode + "\",";
			jsonData += "  \"bizCode\"  	: \"" + bizCode + "\",";
			jsonData += "  \"userId\"  		: \"" + userId + "\",";
			jsonData += "  \"date\"  		: \"" + strDate + "\" }\r\n";
			
			ubidcsUtil.writeJsonFile(fullPath, jsonData, PDF_INFOJSONFILE);
			
			/*
			File wfile = new File(fullPath + "/" + "info.json");
            if (!wfile.exists()) {
            	wfile.createNewFile();            
            }
            FileWriter fw = new FileWriter(wfile);
            BufferedWriter writer = new BufferedWriter(fw);
            writer.write(jsonData);
            writer.close();
            */			
            
            outData += ", \"filename\": \"" + origName + "\" ";
		}
		
		outData += "}";
		
        //*****************************************************************************
        // 업무 데이터 저장
        //*****************************************************************************		
		ubiDocuNewSaveService(uuid, sysCode,bizCode, userId);
        //*****************************************************************************		

		response.setContentType("application/octet-stream; charset=utf-8");
		response.getWriter().print(outData); // 전송이 되는 부분
	}
	
	/**
	 * 편집저장시 최초 저장 또는 변경 
	 */			
	@SuppressWarnings("null")
	public void ubiDocuJsonSaveService(String uuid, String sysCode, String bizCode, 
									String userId, String title, String expireDate, String jsonData) throws IOException, ParseException {
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String[] arrPath = ubidcsUtil.getPdfFilePath(uuid, sysCode, bizCode);
		
		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectDocOne");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
		if(outMap == null) {
			outMap = new HashMap<>();
			outMap.put("DOC_ID"				, uuid);
			outMap.put("SYS_CODE"			, sysCode);
			outMap.put("BIZ_CODE"			, bizCode);
			outMap.put("DOC_TITLE"			, title);
	    	outMap.put("EXPIRE_DATE"		, expireDate);
	    	outMap.put("EDIT_INFO"			, jsonData);
	    	outMap.put("PDF_FILE_NM"		, arrPath[1]);
	    	outMap.put("PDF_ORIG_FILE_NM"	, arrPath[2]);
	    	outMap.put("PDF_FILE_PATH_NM"	, arrPath[0]);
	    	outMap.put("USED_FLAG"			, "1");
	    	outMap.put("INPT_ID"			, userId);		
	    	outMap.put("CHGE_ID"			, userId);			
		} else {
	    	outMap.put("DOC_TITLE"			, title);
	    	outMap.put("EXPIRE_DATE"		, expireDate);
	    	outMap.put("EDIT_INFO"			, jsonData);
	    	outMap.put("PDF_FILE_NM"		, arrPath[1]);
	    	outMap.put("PDF_ORIG_FILE_NM"	, arrPath[2]);
	    	outMap.put("PDF_FILE_PATH_NM"	, arrPath[0]);
	    	outMap.put("CHGE_ID"			, userId);
		}
    	
		//Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "insert");
		queryMap.put("QMap"		, "ubiDocMapper.insertDocInfo");
		
    	commUbiService.saveDocuQueryMap(queryMap, outMap);
	}
	
	/**
	 * 작성,수신 그룹저장  3.15
	 */		
	public void ubiDocuJsonSaveFormerService(String uuid, String userId, JSONArray formers) throws IOException, ParseException {
		int size = formers.size();
		int nCnt = 0;
		
		List<Map<String,Object>> list = new ArrayList<>();
		
		for(int i=0; i<size; i++) {
            JSONObject former   = (JSONObject) formers.get(i);
            String fid 		= (String)former.get("userUUID"); 		// field id
            String fname 	= (String)former.get("displayUserName");	// field text
            String isformer	= (String)former.get("isFormer");			// mask
            
    		Map<String,Object> inMap = new HashMap<>();
    		
    		inMap.put("DOC_ID"			, uuid);
    		inMap.put("FORMER_ID"		, fid);
    		inMap.put("FORMER_NAME"		, fname);
    		inMap.put("FORMER_YN"		, isformer);
    		inMap.put("INPT_ID"			, userId);		
    		inMap.put("CHGE_ID"			, userId);	
    		
    		list.add(inMap);
		}
		
		Map<String,String> queryMap = new HashMap<>();
		
		queryMap.put("QType"	, "insert");
		queryMap.put("QMap"		, "ubiDocMapper.insertDocFormer");
		
		commUbiService.saveDocuQueryList(queryMap, list);
	
	}
	
	/**
	 * 필드저장 
	 */		
	public void ubiDocuJsonSaveOptionService(String uuid, String sysCode, String bizCode, String userId, JSONArray options) throws IOException, ParseException {

		int size = options.size();
		int nCnt = 0;
		
		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "delete");
		queryMap.put("QMap"		, "ubiDocMapper.deleteDocBaseFieldAll");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);		
		commUbiService.saveDocuQueryMap(queryMap, inMap);
		
		List<Map<String,Object>> list = new ArrayList<>();
		
		for(int i=0; i<size; i++) {
            JSONObject option   = (JSONObject) options.get(i);
            String variable 	= (String)option.get("variable"); 		// field id
            String displayText 	= (String)option.get("displayText");	// field text
            String mask 		= (String)option.get("mask");			// mask
            String former 		= (String)option.get("formerId");			// former
            
            if(variable != null) {
            	nCnt++;
            	
	    		Map<String,Object> inMap2 = new HashMap<>();
	    		
	    		inMap2.put("DOC_ID"			, uuid);
	    		inMap2.put("FIELD_ID"		, variable);
	    		inMap2.put("FIELD_NAME"		, displayText);
	    		inMap2.put("FIELD_ORDER"	, nCnt);
	    		inMap2.put("FIELD_MASK"		, mask);
	    		inMap2.put("FORMER_ID"		, former);
	    		inMap2.put("USED_FLAG"		, "1");
	    		inMap2.put("INPT_ID"		, userId);
	    		inMap2.put("CHGE_ID"		, userId);
	    		
	    		list.add(inMap2);
            }
		}
		
		if(list.size()>0) {
			queryMap.put("QType"	, "insert");
			queryMap.put("QMap"		, "ubiDocMapper.insertDocBaseFieldInfo");			
			commUbiService.saveDocuQueryList(queryMap, list);
		}
	}
	
	/**
	 * JSON 정보를 저장한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream return value
	 */		
	@RequestMapping(value = "/ubiDocuJsonSave.do")
	public void ubiDocuJsonSave(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String basePath = ubidcsUtil.getBasePath();
		
		//String resPath = request.getServletContext().getRealPath("/WEB-INF/properties/");

		String json = ubidcsUtil.getBody(request);

        JSONParser jsonParser = new JSONParser();//Parser
        Object obj = null;
		try {
			obj = jsonParser.parse(json);
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}//To Object
        JSONObject jsonObj 	= (JSONObject) obj;//To JsonObject
        String uuid 		= (String)jsonObj.get("uuid"); 		
        String sysCode 		= (String)jsonObj.get("sysCode"); 	
        String bizCode 		= (String)jsonObj.get("bizCode"); 	
        String userId 		= (String)jsonObj.get("userId"); 	
        String title 		= (String)jsonObj.get("title"); 	
        String expireDate 	= (String)jsonObj.get("expireDate"); 	
        String jsonData 	= (String)jsonObj.get("json_data").toString().replaceAll("\\\\", ""); //jsonData
        
        JSONArray formers	= (JSONArray)jsonObj.get("formers"); 		// formers
        JSONArray options	= (JSONArray)jsonObj.get("dvOptionList"); 	// field list

        // JSON 데이터를 받아와서 저장할 경로 설정
		String filePath = basePath + sysCode + "/" + bizCode + "/" + uuid;
		String fileFullPath = filePath + "/" + PDF_EDITJSONFILE;
		//System.out.println("fileFullPath > " + fileFullPath);
        if (!(new File(filePath)).exists()) {
            (new File(filePath)).mkdir();
        }
        
        //*****************************************************************************
        // 업무 데이터 저장
        //*****************************************************************************
        ubiDocuJsonSaveService(uuid, sysCode, bizCode, userId, title, expireDate, jsonData);	// doc master
        ubiDocuJsonSaveFormerService(uuid, userId, formers);									// formers
        ubiDocuJsonSaveOptionService(uuid, sysCode, bizCode, userId, options);					// doc field
        //*****************************************************************************

        // 아이템을 편집하며 변경된 JSON 데이터를 받아와서 기존 Json파일 내용 갱신
        try (OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(fileFullPath), "UTF-8")) {
            writer.write(jsonData);
            writer.close();
            //ubidcsUtil.fileLog(resPath, "[" + uuid + "][docuJsonSave][성공]");
            System.out.println("[SUCCESS]");
            response.setContentType("application/json;charset=utf-8");            ;
			response.getWriter().write(ubidcsUtil.status("200","success","정상적으로 저장 되었습니다."));			
        } catch (IOException e) {
        	System.out.println("[FAIL]");
        	//ubidcsUtil.fileLog(resPath, "[" + uuid + "][docuJsonSave][실패]");
        	response.setContentType("application/json;charset=utf-8");            ;
			response.getWriter().write(ubidcsUtil.status("500","fail","json 파일 생성시 오류 발생."));
        }
	}
	
	/**
	 * 서명 만료일자 확인 
	 */			
	public Boolean ubiDocuJsonCheckMailExpireService(String uuid, int seq) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectDocHistoryExpireDate");

		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("SEND_SEQ"			, seq);
		
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
		
		String expDate = (String) outMap.get("EXPIREMAIL_DATE");
		String curDate = new SimpleDateFormat("yyyyMMdd").format(new Date());
		if(expDate == null) expDate = "";
		
		Boolean check = true;
		if(!expDate.equals("") && expDate.compareTo(curDate) < 0) {
			check = false;
		}

		return check;
	}			
	
	/**
	 * 서명 완료여부 확인. 
	 */			
	public String ubiDocuJsonCheckAlreadySignService(String uuid, String userid, int seq) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectSignCheck");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("USER_ID"			, userid);
		inMap.put("SEND_SEQ"			, seq);
		
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
		
		String status = (String) outMap.get("R_STATUS");

		return status;
	}			
	
	/**
	 * 메일발송시 전달된 임시ID를 가지고 USER ID를 얻어온다 
	 */			
	public String ubiDocuJsonGetMailUserService(String uuid, String userId, int seq) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectMailUser");

		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("MAILUSER_ID"			, userId);
		inMap.put("SEND_SEQ"			, seq);
		
		System.out.println("ubiDocuJsonGetMailUserService" + uuid + ":" + userId + ":" + seq);
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);

		String rtnStr = "";
		if(outMap == null) {
			rtnStr = null;
		} else {
			rtnStr = (String) outMap.get("USER_ID");
		}
		return rtnStr;
	}		
	
	/**
	 * 메일발송시 저장된 메일 TITLE, 메일 메세지정보를 얻기
	 */				
	public String[] ubiDocuJsonGetDocTitleService(String uuid, int seq) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectDocTitle");

		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("SEND_SEQ"			, seq);
		
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
		String[] stringArray = new String[2];
		stringArray[0] = (String) outMap.get("SEND_TITLE");
		stringArray[1] = (String) outMap.get("SEND_MESSAGE");
		
		return stringArray;
	}	
		
	/**
	 * 메일편집완료후 정보 저장
	 */			
	public void ubiDocuJsonSaveEditDocService(String uuid, String rUserId, int seq, String rStatus) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "update");
		queryMap.put("QMap"		, "ubiDocMapper.updateReveiceInfo");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("USER_ID"			, rUserId);
		inMap.put("SEND_SEQ"		, seq);
		inMap.put("R_STATUS"		, rStatus);
		inMap.put("CHGE_ID"			, rUserId);
		
		commUbiService.saveDocuQueryMap(queryMap, inMap);
	}
	
	/**
	 * 등록이미지 1
	 * @throws ParseException 
	 */		
	@RequestMapping(value = "/ubiDocuGetStamp1.do")
	public void ubiDocuGetStamp1(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		String uuid = request.getParameter("d");
		String mailUserId = request.getParameter("u");
		String s = request.getParameter("e");
		if(mailUserId == null || s == null) {
			response.getWriter().print("");
		} else {
			int seq = Integer.parseInt(s);
			String userId = ubiDocuJsonGetMailUserService(uuid, mailUserId, seq); 
			if(userId == null) {
				response.getWriter().print("");
			} else {
				Map<String,String> queryMap = new HashMap<>();
				queryMap.put("QMap"		, "ubiDocMapper.selectUserSign1");
				
				Map<String,Object> inMap = new HashMap<>();
				inMap.put("USER_ID"			, userId);		
				Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
				if(outMap == null) {
					response.getWriter().print("");
				} else {
					String userSign = (String) outMap.get("USER_SIGN");
					if(userSign == null) {
						response.getWriter().print("");
					} else {
						String base64Image = userSign.split(",")[1];
						byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);
						response.setContentType("image/*");		
						//byte[] byteArrray = userSign.getBytes();
						BufferedOutputStream bos = null;
					    bos = new BufferedOutputStream(response.getOutputStream());
					    bos.write(imageBytes);
					    bos.flush();						
					}
				}
			}
		}
	}
	
	/**
	 * 등록이미지 2
	 * @throws ParseException 
	 */		
	@RequestMapping(value = "/ubiDocuGetStamp2.do")
	public void ubiDocuGetStamp2(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		String uuid = request.getParameter("d");
		String mailUserId = request.getParameter("u");
		String s = request.getParameter("e");
		if(mailUserId == null || s == null) {
			response.getWriter().print("");
		} else {
			int seq = Integer.parseInt(s);
			String userId = ubiDocuJsonGetMailUserService(uuid, mailUserId, seq); 
			if(userId == null) {
				response.getWriter().print("");
			} else {
				Map<String,String> queryMap = new HashMap<>();
				queryMap.put("QMap"		, "ubiDocMapper.selectUserSign2");
				
				Map<String,Object> inMap = new HashMap<>();
				inMap.put("USER_ID"			, userId);		
				Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
				if(outMap == null) {
					response.getWriter().print("");
				} else {
					String userSign = (String) outMap.get("USER_SIGNIMAGE");
					if(userSign == null) {
						response.getWriter().print("");
					} else {
						String base64Image = userSign.split(",")[1];
						byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Image);
						response.setContentType("image/*");		
						//byte[] byteArrray = userSign.getBytes();
						BufferedOutputStream bos = null;
					    bos = new BufferedOutputStream(response.getOutputStream());
					    bos.write(imageBytes);
					    bos.flush();						
					}
				}
			}
		}
	}	
	
	/**
	 * 메일 수신-서명완료 후 저장 및 완료 메일 처리. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream return value
	 */		
	@RequestMapping(value = "/ubiDocuPDFSave.do")
	public void ubiDocuPDFSave(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException {
		
		try {
			String resPath = request.getServletContext().getRealPath("/WEB-INF/properties/");
			
			UbidcsUtil ubidcsUtil = new UbidcsUtil();
	
			String json = ubidcsUtil.getBody(request);

	        JSONParser jsonParser = new JSONParser();//Parser
	        Object objJson = null;
			try {
				objJson = jsonParser.parse(json);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}//To Object
			
	        JSONObject jsonObj 	= (JSONObject) objJson;					//To JsonObject
	        String uuid 		= (String)jsonObj.get("uuid"); 			//userUUID
	        String mailUserId 	= (String)jsonObj.get("u");				//mail userId
	        int seq 			= Integer.parseInt((String)jsonObj.get("e"));				//u
	        String sysCode 		= (String)jsonObj.get("sysCode");		//sysCode
	        String bizCode 		= (String)jsonObj.get("bizCode");		//sysCode
	        
	        //*****************************************************************************
	        // 만료일 체크
	        //*****************************************************************************	 	        		
	        if(ubiDocuJsonCheckMailExpireService(uuid, seq) == false) {
				response.setContentType("application/json;charset=utf-8");
				response.getWriter().write(ubidcsUtil.status("300","fail","만료일이 경과되었습니다."));	        	
	        } else {
	        
		        //*****************************************************************************
		        // 업무 데이터 - 사용자 ID 가져오기
		        //*****************************************************************************	 	        		
		        String userId = ubiDocuJsonGetMailUserService(uuid, mailUserId, seq); 
		        
		        String r_status		= ubiDocuJsonCheckAlreadySignService(uuid, userId, seq);
		        if(r_status.equals("Z")) {	// 서명 완료
					response.setContentType("application/json;charset=utf-8");
					response.getWriter().write(ubidcsUtil.status("400","fail","이미 서명한 문서입니다."));		        	
		        } else {
		        
			        String jsonData 	= (String)jsonObj.get("jsonData").toString();	//.replaceAll("\\\\", ""); //jsonData
			        
			        // Receiver        
			        JSONObject objRecevier 	= (JSONObject)jsonObj.get("recevier");	//.toString().replaceAll("\\\\", ""); //recevier
			        String rName 		= (String)objRecevier.get("name"); //userUUID
			        rName 				= ubidcsUtil.cryptor("decrypt",rName);
			        String rEmail 		= (String)objRecevier.get("email"); //userUUID
			        rEmail 				= ubidcsUtil.cryptor("decrypt",rEmail);
			        
			        // Sender
			        JSONObject objSender = (JSONObject)jsonObj.get("sender");	//.toString().replaceAll("\\\\", ""); //recevier
			        String sName 		= (String)objSender.get("name"); //userUUID
			        sName 				= ubidcsUtil.cryptor("decrypt",sName);
			        String sEmail 		= (String)objSender.get("email"); //userUUID
			        sEmail 				= ubidcsUtil.cryptor("decrypt",sEmail);
			        
			        // JSON 데이터를 받아와서 저장할 경로 설정
					//String basePath 	= ubidcsUtil.getBasePath();
					//String[] arrPath 	= ubidcsUtil.getPdfFilePath(uuid, sysCode, bizCode);			
					
		//			String orgPdfPath 	= ubidcsUtil.getPdfFilePath(basePath + sysCode + "/" + bizCode + "/" + uuid);
					//String orgPdfPath 	= arrPath[0];
					
					String fullPath 	= ubidcsUtil.getUserPdfPath(uuid, sysCode, bizCode, userId) + "/" + seq + "/";		//basePath + sysCode + "/" + bizCode + "/" + uuid + "/"  + midpath + "/" + userId + "/" + seq + "/";
					
					String strOutPath	= ubidcsUtil.readJsonFile(fullPath, "filefullpath", PDF_INFOJSONFILE);
			
			        Flatten flattenMain = null;
					try {
						flattenMain = Flatten.getInstance();
					} catch (URISyntaxException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
			        //*****************************************************************************
			        // 업무서비스
					// 발송 제목, 메세지
			        //*****************************************************************************	 			
					String[] arrTitle = ubiDocuJsonGetDocTitleService(uuid, seq);
					String title = arrTitle[0];
					String message = arrTitle[1];
					if(title == null) title = "";
					if(message == null) message = "";
					
					//Path source = Paths.get(strOutPath);
					//Path target = Paths.get(strOutPath + "__");
					
					//Files.copy(source,  target, StandardCopyOption.REPLACE_EXISTING);	
					String strTargetPath = strOutPath + "__";
					Files.copy(Paths.get(strOutPath), Paths.get(strTargetPath), StandardCopyOption.REPLACE_EXISTING);
			        flattenMain.writeDataToPdf(strTargetPath , jsonData, strOutPath);
			        //Files.copy(Paths.get(strTargetPath), Paths.get(strOutPath), StandardCopyOption.REPLACE_EXISTING);
			
			        if( ubidcsUtil.mailSend("2", title, message, rEmail, rName, rEmail, rName, "", strOutPath, "", "", resPath) ) {
			        	if( ubidcsUtil.mailSend("2", title, message, sEmail, sName, rEmail, rName, "", strOutPath, "", "", resPath) ) {
			    	        //*****************************************************************************
			    	        // 업무 데이터 저장
			    	        //*****************************************************************************	 	        		
			        		ubiDocuJsonSaveEditDocService(uuid, userId, seq, "Z");
			        		response.setContentType("application/json;charset=utf-8");            ;
			    			response.getWriter().write(ubidcsUtil.status("200","success","정상적으로 메일 발송 되었습니다."));	
			        	}else {
			    	        //*****************************************************************************
			    	        // 업무 데이터 저장
			    	        //*****************************************************************************	 	        		
			        		ubiDocuJsonSaveEditDocService(uuid, userId, seq, "K");
			        		response.setContentType("application/json;charset=utf-8");
			    			response.getWriter().write(ubidcsUtil.status("400","fail","메일 발송 오류"));
			        	}			
					}else {
				        //*****************************************************************************
				        // 업무 데이터 저장
				        //*****************************************************************************	 				
						ubiDocuJsonSaveEditDocService(uuid, userId, seq, "U");
						response.setContentType("application/json;charset=utf-8");
						response.getWriter().write(ubidcsUtil.status("500","fail","메일 발송 오류"));
					}
		        }
	        }
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 메일 발송 - 문서 발송 히스토리 업데이트. 	
	 */		
	public int ubiDocuJsonSaveHistoryService(String uuid, String expDate, String dSign, String iSign, 
			String rSign, String sTitle, String sMesssage, String sendId,
			String sName, String sEmail, String sPhone, String cetyType, String sendType, String signType) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QMap"		, "ubiDocMapper.selectDocHistory");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("SEND_MAX"		, "Y");
		
		Map<String,Object> outMap = commUbiService.searchDocuQueryMap(queryMap, inMap);
		
		int seq = 1;
		if(outMap == null) {
			outMap = new HashMap<String,Object>();
			outMap.put("DOC_ID"			, uuid);
			outMap.put("SEND_SEQ"		, 1);
			outMap.put("INPT_ID"		, sendId);
		} else {
			seq = (int)outMap.get("SEND_SEQ")+1;
			outMap.put("SEND_SEQ"		, seq);
		}
		
		outMap.put("EXPIREMAIL_DATE", expDate);
		outMap.put("DRAWSIGN_FLAG"	, dSign);
		outMap.put("DRAWIMAGE_FLAG"	, iSign);
		outMap.put("REFIMAGE_FLAG"	, rSign);
		outMap.put("SEND_TITLE"		, sTitle);
		outMap.put("SEND_MESSAGE"	, sMesssage);
		outMap.put("SEND_ID"		, sendId);
		outMap.put("CHGE_ID"		, sendId);
		outMap.put("USER_NAME"		, sName);
		outMap.put("USER_MAILADDR"	, sEmail);
		outMap.put("USER_PHONE"		, sPhone);
		outMap.put("CERT_TYPE"		, cetyType);
		outMap.put("SEND_TYPE"		, sendType);
		outMap.put("SIGN_TYPE"		, signType);
		
		queryMap.put("QType"	, "insert");
		queryMap.put("QMap"		, "ubiDocMapper.insertDocHistory");
		
		commUbiService.saveDocuQueryMap(queryMap, outMap);
		
		return seq;
	}
	
	/**
	 * 문서 발송 필드 정보 저장. 	
	 */			
	public void ubiDocuJsonSaveUpdateFieldService(String uuid, int newseq) throws IOException, ParseException {

		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "update");
		queryMap.put("QMap"		, "ubiDocMapper.updateDocFieldSeq");
		
		Map<String,Object> inMap = new HashMap<>();
		inMap.put("DOC_ID"			, uuid);
		inMap.put("ORG_SEQ"		, newseq - 1);
		inMap.put("NEW_SEQ"		, newseq);
		
		commUbiService.saveDocuQueryMap(queryMap, inMap);
	}
	
	/**
	 * 수신자 정보 추가. 	
	 */			 
	public Map<String,Object> ubiDocuJsonMailReceiverAdd(String uuid, String rName, String rEmail, String rPhone,  String rRegno, String sysCode, String bizCode, 
			String rUserId, String mStatus, String rStatus, String json, String sUserId, int sendSeq, String mailUser, String mailUrl, String former) throws IOException, ParseException {

		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String[] arrPath = ubidcsUtil.getUserPdfFilePath(uuid, sysCode, bizCode, rUserId, sendSeq);
		
		Map<String,Object> inMap = new HashMap<>();
	
		inMap.put("DOC_ID"			, uuid);
		inMap.put("USER_ID"			, rUserId);
		inMap.put("SEND_SEQ"		, sendSeq);
		inMap.put("USER_NAME"		, rName);
		inMap.put("USER_MAILADDR"	, rEmail);
		inMap.put("USER_PHONE"		, rPhone);
		inMap.put("USER_REGNO"		, rRegno);
		inMap.put("M_STATUS"		, mStatus);
		inMap.put("R_STATUS"		, rStatus);
		inMap.put("EDIT_INFO"		, json);
    	inMap.put("PDF_FILE_NM"		, arrPath[1]);
    	inMap.put("PDF_ORIG_FILE_NM", arrPath[2]);
    	inMap.put("PDF_FILE_PATH_NM", arrPath[0]);
    	inMap.put("MAILUSER_ID"	    , mailUser);
    	inMap.put("MAIL_URL"	    , mailUrl);
    	inMap.put("FORMER_ID"	    , former);
		inMap.put("INPT_ID"			, sUserId);
		inMap.put("CHGE_ID"			, sUserId);
		
		return inMap;
	}
	
	/**
	 * 발신자 메일발송. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream return value
	 */			
	@RequestMapping(value = "/ubiSendMail.do")
	public void ubiSendMail(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();

        //String jsonDataSender 	= (String)jsonObj.get("sender").toString().replaceAll("\\\\", ""); //sender
		Object  obj = null;
		try {
			
			List<Map<String,Object>> list = new ArrayList<>();
			
			String json 	= ubidcsUtil.getBody(request);
			
	        JSONParser jsonParser = new JSONParser();//Parser

			try {
				obj = jsonParser.parse(json);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}//To Object
	        JSONObject jsonObj = (JSONObject) obj;//To JsonObject

	        String sysCode 			= (String)jsonObj.get("sysCode"); 			// sysCode
	        String bizCode 			= (String)jsonObj.get("bizCode"); 			// bizCode
	        String uuid 			= (String)jsonObj.get("uuid"); 				// uuid    
	        String title 			= (String)jsonObj.get("title"); 			// template_title
	        String message 			= (String)jsonObj.get("message"); 			// message       
	        String expiredDate 		= (String)jsonObj.get("expiredDate"); 		// expired_date
	        //String beginDate 		= (String)jsonObj.get("beginDate"); 		// begin_date
	        String dataset 			= (String)jsonObj.get("dataset");	 		//dataset true/false Test
	        String drawSign 		= (String)jsonObj.get("drawSign");
	        String imageSign 		= (String)jsonObj.get("imageSign");
	        String regSign 			= (String)jsonObj.get("regSign");
	        String certType 		= (String)jsonObj.get("certType");
	        String sendType 		= (String)jsonObj.get("sendType");
	        String signType 		= (String)jsonObj.get("signType");
	        //String jsonData 		= (String)jsonObj.get("jsonData").toString();
	        JSONObject jsonDataSender 	= (JSONObject)jsonObj.get("sender"); //sender
	        
	        String sId 		= (String)jsonDataSender.get("id");  	//sender id
	        String sName 	= (String)jsonDataSender.get("name");  //sender name
	        String sEmail 	= (String)jsonDataSender.get("email"); //sender email
	        String sPhone 	= (String)jsonDataSender.get("phone"); //sender phone	
	        
	        System.out.println("[SEND MAIL] sysCode" + sysCode + " bizCode:" + bizCode + " uuid:" + uuid);
	        
	        //*****************************************************************************
	        // 업무 데이터 저장
	        //*****************************************************************************	        
	        int sendSeq = ubiDocuJsonSaveHistoryService(uuid, expiredDate, drawSign, imageSign,	regSign, 
	        			title, message, sId, sName, sEmail, sPhone, certType, sendType, signType);
	        
	        ubiDocuJsonSaveUpdateFieldService(uuid, sendSeq);
	        //*****************************************************************************	 
	        
			String resPath 	= request.getServletContext().getRealPath("/WEB-INF/properties/");
			String tempUrl 	= request.getRequestURL().toString();
			String tempUri 	= request.getRequestURI();
			String url 		= tempUrl.replace(tempUri, "") + ubidcsUtil.getHtmlUrlPath();
      
	
	        JSONArray jsonArrayReceiver = (JSONArray) jsonObj.get("receiver");
	        obj = null;
	        
	        int sendSize = jsonArrayReceiver.size();
	        int successCnt = 0;

            for(int i=0; i<sendSize; i++) {
         
                JSONObject objectInArray = (JSONObject) jsonArrayReceiver.get(i);
                String rUserId 	= (String)objectInArray.get("USER_ID"); 		//receiver name
                String rName 	= (String)objectInArray.get("USER_NAME"); 		//receiver name
                String rEmail 	= (String)objectInArray.get("USER_MAILADDR"); 	//receiver email
                String rPhone 	= (String)objectInArray.get("USER_PHONE"); 		//receiver phone
                String rRegno 	= (String)objectInArray.get("USER_REGNO"); 		//receiver phone
                String rFormer 	= (String)objectInArray.get("FORMER_ID"); 		//receiver phone
                String jsonData = (String)objectInArray.get("jsonData").toString();
                
                String mailUserId = "U" + System.currentTimeMillis();
                
        		String 	link = url + "docuMail.html?";
 		       			link+= "p="  + uuid;
	       				link+= "&s=" + sysCode;
	       				link+= "&b=" + bizCode;
	       				link+= "&q=" + ubidcsUtil.cryptor("encryptor",rEmail);
	       				link+= "&r=" + ubidcsUtil.cryptor("encryptor",rName);
	       				link+= "&e=" + sendSeq;
 		       if(dataset.equals("true")) {
 		    	   link+= "&f=" + ubidcsUtil.makePdf(resPath, sysCode, bizCode, uuid, rUserId, sendSeq, jsonData);
 		    	   link+= "&u=" + mailUserId;
 		    	  link+= "&fi=" + rFormer;
 		       }
 		       link+= "&sq=" + ubidcsUtil.cryptor("encryptor",sEmail);
 		       link+= "&sr=" + ubidcsUtil.cryptor("encryptor",sName);

 		       //response.setContentType("text/html;charset=utf-8");
 		       if( ubidcsUtil.mailSend("1", title, message, rEmail, rName, sName, sEmail, link, uuid, "", expiredDate, resPath) ) {
		 			//ubidcsUtil.fileLog(resPath, "[" + uuid + "][docuMailSend][성공][" + rName + "(" + rEmail + ")]" + link);
 		    	   successCnt++;
 		    	  list.add(ubiDocuJsonMailReceiverAdd(uuid, rName, rEmail, rPhone, rRegno, sysCode, bizCode, rUserId, "1", "1", jsonData, sId, sendSeq, mailUserId, link, rFormer));
 		       } else {
 		    	  list.add(ubiDocuJsonMailReceiverAdd(uuid, rName, rEmail, rPhone, rRegno, sysCode, bizCode, rUserId, "0", "", jsonData, sId, sendSeq, mailUserId, link, rFormer));
 		       }
            }
            if(sendSize > 0) {
        		Map<String,String> queryMap = new HashMap<>();
        		queryMap.put("QType"	, "insert");
        		queryMap.put("QMap"		, "ubiDocMapper.insertReceiveInfo");            	
    	        //*****************************************************************************
    	        // 업무 데이터 저장
    	        //*****************************************************************************
            	commUbiService.saveDocuQueryList(queryMap, list);
    	        //*****************************************************************************	             	
            }
            
            response.setContentType("application/json;charset=utf-8");     
            if(sendSize == successCnt) {
	 			response.getWriter().write(ubidcsUtil.status("200","success","","정상적으로 메일 발송 되었습니다."));            	
            } else {
	 			response.getWriter().write(ubidcsUtil.status("500","fail","메일 발송 오류"));           	
            }
			
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}//To Object

	}	
	
	/**
	 * 발송문서 저장. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream return value
	 */			
	@RequestMapping(value = "/ubiSaveDoc.do")
	public void ubiSaveDoc(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();

        //String jsonDataSender 	= (String)jsonObj.get("sender").toString().replaceAll("\\\\", ""); //sender
		Object  obj = null;
		try {
			
			List<Map<String,Object>> list = new ArrayList<>();
			
			String json 	= ubidcsUtil.getBody(request);
			
	        JSONParser jsonParser = new JSONParser();//Parser

			try {
				obj = jsonParser.parse(json);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}//To Object
	        JSONObject jsonObj = (JSONObject) obj;//To JsonObject

	        String sysCode 			= (String)jsonObj.get("sysCode"); 			// sysCode
	        String bizCode 			= (String)jsonObj.get("bizCode"); 			// bizCode
	        String uuid 			= (String)jsonObj.get("uuid"); 				// uuid    
	        String title 			= (String)jsonObj.get("title"); 			// template_title
	        String message 			= (String)jsonObj.get("message"); 			// message       
	        String expiredDate 		= (String)jsonObj.get("expiredDate"); 		// expired_date
	        //String beginDate 		= (String)jsonObj.get("beginDate"); 		// begin_date
	        String dataset 			= (String)jsonObj.get("dataset");	 		//dataset true/false Test
	        String drawSign 		= (String)jsonObj.get("drawSign");
	        String imageSign 		= (String)jsonObj.get("imageSign");
	        String regSign 			= (String)jsonObj.get("regSign");
	        String certType 		= (String)jsonObj.get("certType");
	        String sendType 		= (String)jsonObj.get("sendType");
	        String signType 		= (String)jsonObj.get("signType");
	        //String jsonData 		= (String)jsonObj.get("jsonData").toString();
	        JSONObject jsonDataSender 	= (JSONObject)jsonObj.get("sender"); //sender
	        
	        String sId 		= (String)jsonDataSender.get("id");  	//sender id
	        String sName 	= (String)jsonDataSender.get("name");  //sender name
	        String sEmail 	= (String)jsonDataSender.get("email"); //sender email
	        String sPhone 	= (String)jsonDataSender.get("phone"); //sender phone	
	        
			String resPath 	= request.getServletContext().getRealPath("/WEB-INF/properties/");
			String tempUrl 	= request.getRequestURL().toString();
			String tempUri 	= request.getRequestURI();
			String url 		= tempUrl.replace(tempUri, "") + ubidcsUtil.getHtmlUrlPath();
      
	
	        JSONArray jsonArrayReceiver = (JSONArray) jsonObj.get("receiver");
	        obj = null;
	        
	        int sendSize = jsonArrayReceiver.size();
	        int successCnt = 0;

            for(int i=0; i<sendSize; i++) {
         
                JSONObject objectInArray = (JSONObject) jsonArrayReceiver.get(i);
                String rUserId 	= (String)objectInArray.get("USER_ID"); 		//receiver name
                String rName 	= (String)objectInArray.get("USER_NAME"); 		//receiver name
                String rEmail 	= (String)objectInArray.get("USER_MAILADDR"); 	//receiver email
                String rPhone 	= (String)objectInArray.get("USER_PHONE"); 		//receiver phone
                String rRegno 	= (String)objectInArray.get("USER_REGNO"); 		//receiver phone
                String rFormer 	= (String)objectInArray.get("FORMER_ID"); 		//receiver phone
                String jsonData = (String)objectInArray.get("jsonData").toString();
                

                ubidcsUtil.makePdf(resPath, sysCode, bizCode, uuid, rUserId, 999999, jsonData);
            }
            
            response.setContentType("application/json;charset=utf-8");     
            response.getWriter().write(ubidcsUtil.status("200","success","","정상처리되었습니다."));
			
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			//e1.printStackTrace();
            response.getWriter().write(ubidcsUtil.status("-1","error","",e1.getMessage()));
		}//To Object

	}		
	
	/**
	 * 수신자 메일 입력 정보 체크. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream return value
	 */			
	@RequestMapping(value = "/ubiMailCheck.do")
	public void ubiMailCheck(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		System.out.println("doPost START");
		
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String json = ubidcsUtil.getBody(request);
        JSONParser jsonParser = new JSONParser();//Parser
        Object obj = null;
		try {
			obj = jsonParser.parse(json);
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}//To Object
        JSONObject jsonObj = (JSONObject) obj;//To JsonObject
        String shareMail = (String)jsonObj.get("shareMail"); //입력 Email
        String q = (String)jsonObj.get("q"); //암호화된 Email
        System.out.println("shareMail1 >" + shareMail);

    	String shareMailTemp = ubidcsUtil.cryptor("encryptor",shareMail);
        
        response.setContentType("text/html;charset=utf-8");
        if(shareMailTemp.equals(q)) {
			response.getWriter().print("true");
        }else {
        	response.getWriter().print("false");
        }	
	}
	
}

