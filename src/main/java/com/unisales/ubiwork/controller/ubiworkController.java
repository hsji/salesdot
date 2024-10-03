package com.unisales.ubiwork.controller;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
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

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
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
import com.unisales.ubidcs.solution.eform.Flatten;
import com.unisales.ubiwork.service.ubiworkService;
import com.unisales.util.FileUtil;
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
public class ubiworkController {
	private Logger log = LoggerFactory.getLogger(ubiworkController.class);
	
	@Autowired(required=true)
    private ubiworkService commUbiService;

	/**
	 * 문서 리스트 조회
	 * @param saveMap		: 조회 조건 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchDocuContents.do")
	public NexacroResult searchDocuContents(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuContents(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", docList);
		
		return result;
		
	}
	
	@RequestMapping(value = "/searchMailHistory.do")
	public NexacroResult searchMailHistory(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuHistory(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsHistory", docList);
		
		return result;
		
	}
	
	@RequestMapping(value = "/searchResultDocList.do")
	public NexacroResult searchResultDocList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchResultDocList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", docList);
		
		return result;
		
	}	
	
	@RequestMapping(value = "/searchDocMailHistory.do")
	public NexacroResult searchDocMailHistory(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuContents(searchMap);
		List<Map<String,Object>> docHistory = commUbiService.searchDocuHistory(searchMap);
		List<Map<String,Object>> docReceive = commUbiService.searchDocuReceiveList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsDocList", docList);
		result.addDataSet("dsHistory", docHistory);
		result.addDataSet("dsReceiveInfo", docReceive);
		
		return result;
		
	}		
	
	@RequestMapping(value = "/searchDocMyMailList.do")
	public NexacroResult searchDocMyMailList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> dsList = commUbiService.searchDocMyMailList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", dsList);
		
		return result;
		
	}			
	
	
	/**
	 * 문서 리스트 조회
	 * @param saveMap		: 조회 조건 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchDocuDetail.do")
	public NexacroResult searchDocuDetail(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> fieldList = commUbiService.searchDocuBaseField(searchMap);
		List<Map<String,Object>> receiverList = commUbiService.searchDocuReceiveList(searchMap);
		List<Map<String,Object>> receiverFieldList = commUbiService.searchDocuReceiveFieldList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsFieldInfo", fieldList);
		result.addDataSet("dsReceiver", receiverList);
		result.addDataSet("dsReceiverField", receiverFieldList);
		
		return result;
	}	

	
	/**
	 * 문서 발송대상자 조회
	 * @param saveMap		: 조회 조건 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchDocuReceiveList.do")
	public NexacroResult searchDocuReceiveList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuReceiveList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", docList);
		
		return result;
		
	}	
	
	@RequestMapping(value = "/searchDocuBaseField.do")
	public NexacroResult searchDocuBaseField(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuBaseField(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", docList);
		
		return result;
		
	}		
	
	@RequestMapping(value = "/searchDocuTree.do")
	public NexacroResult searchDocuTree(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		List<Map<String,Object>> docList = commUbiService.searchDocuTreeList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", docList);
		
		return result;
		
	}			
	
	/**
	 * 문서 그룹 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchDocuTreeInfo.do")
	public NexacroResult searchDocuTreeInfo(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUbiService.searchDocuTreeInfo(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}	
    
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchDocuTreeOne.do")
	public NexacroResult searchDocuTreeOne(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUbiService.searchDocuTreeOne(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}	    
    
    
	/**
	 * 서명이미지 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchUserSign.do")
	public NexacroResult searchUserSign(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUbiService.searchUserSign(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}	        

    @RequestMapping(value = "/saveUserSign.do")
	public NexacroResult saveUserSign(@ParamDataSet(name = "dsList", required = false) Map<String,Object> saveMap
										, HttpServletRequest request) throws NexacroException{
    	commUbiService.saveUserSign(saveMap);
   	
		NexacroResult result = new NexacroResult();
		return result;
	}  	    
	
	/**
	 * 문서 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveDocuContent.do")
	public NexacroResult saveDocuContent(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{

    	// 게시판 추가/수정
    	commUbiService.saveDocuContent(saveList);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	
    
    @RequestMapping(value = "/saveDocuReceiverField.do")
	public NexacroResult saveDocuReceiverField(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{

    	// 게시판 추가/수정
    	commUbiService.saveDocuReceiverField(saveList);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	    
    
	/**
	 * 수신자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveDocuReceiveList.do")
	public NexacroResult saveDocuReceiveList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{

    	// 게시판 추가/수정
    	commUbiService.saveDocuReceiveList(saveList);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	   
    
    @RequestMapping(value = "/saveDocuBaseField.do")
	public NexacroResult saveDocuBaseField(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{

    	// 게시판 추가/수정
    	commUbiService.saveDocuBaseField(saveList);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	        
    
    @RequestMapping(value = "/saveAsDoc.do")
	public NexacroResult saveAsDoc(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws Exception{


    	String docId 	= searchMap.get("DOC_ID");
    	String sysCode 	= searchMap.get("SYS_CODE");
    	String bizCode 	= searchMap.get("BIZ_CODE");
    	String uuid 	= "uuid_" + System.currentTimeMillis();
    	
    	UbidcsUtil ubidcsUtil = new UbidcsUtil();
    	String basePath = ubidcsUtil.getBasePath();
    	String createPath = basePath + sysCode + "/" + bizCode + "/" + uuid;
    	
    	// Copy Files
    	// 1. 디렉토리 생성
    	File dir = new File(createPath); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	    	
    	// 2. 기존 PDF 디렉토리 전체
    	String orgPath = basePath + sysCode + "/" + bizCode + "/" + docId;;
    	FileUtil fileUtil = new FileUtil();

    	
    	fileUtil.copys(orgPath, createPath, true);
    	
    	// 3. edit.json 변경
    	String[] arrPath = new String[2];
    	arrPath[0] = createPath + "/edit.json";
    	arrPath[1] = createPath + "/info.json";
    	
    	for(int i=0;i<2;i++) {
    		File jsonfile = new File(arrPath[i]);
    		
    		if(jsonfile.exists()) {
    			try {
    				FileReader reader = new FileReader(jsonfile);
    				BufferedReader bufReader = new BufferedReader(reader);
    				String line = "";
    				String lineText = "";
    				while((line = bufReader.readLine()) != null) {
    					lineText += line;
    				}
    				bufReader.close();
    				
    				if(lineText.equals("")) {
    				} else {
    					lineText = lineText.replaceAll(docId, uuid);
    					lineText = lineText.replaceAll(orgPath, createPath);

    			        FileWriter fw = new FileWriter(jsonfile);
    			        BufferedWriter writer = new BufferedWriter(fw);
    			        writer.write(lineText);
    			        writer.close();								
    				}
    			} catch(Exception e) {
    				e.printStackTrace();
    			}
    		}    		
    	}
		
    	// 4. ubi_doc 데이터 복사
		searchMap.put("NEWUUID", uuid);
		searchMap.put("OLDPATH", orgPath);
		searchMap.put("NEWPATH", createPath);
		
		commUbiService.copyDocuDoc(searchMap);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}
    
    @RequestMapping(value = "/deleteDoc.do")
	public NexacroResult deleteDoc(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws Exception{
    	
    	String docId 	= searchMap.get("DOC_ID");
    	String sysCode 	= searchMap.get("SYS_CODE");
    	String bizCode 	= searchMap.get("BIZ_CODE");
    	
    	UbidcsUtil ubidcsUtil = new UbidcsUtil();
    	String basePath = ubidcsUtil.getBasePath();
    	String docPath = basePath + sysCode + "/" + bizCode + "/" + docId;
    	
    	File dir = new File(docPath);
    	FileUtils.deleteDirectory(dir);
        if (dir.isDirectory()) {
        	dir.delete(); // 대상폴더 삭제
        }
        commUbiService.deteDocuAll(searchMap);
    	
		NexacroResult result = new NexacroResult();
		return result;
    }
    
    @RequestMapping(value = "/saveDocTree.do")
	public NexacroResult saveDocTree(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{

    	// 게시판 추가/수정
    	commUbiService.saveDocTree(saveList);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	    

}
