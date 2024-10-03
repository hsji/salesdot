package com.unisales.sales.controller;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sales.service.salesService;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;

/**
 * <pre>
 * @title   bizProgController
 * @desc    System 정보 관리 프로그램관리
 * -        
 * @package com.dxtobe.sytm.controller
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2021. 03. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2021. 03. 25.		TOBESOFT	최초작성
 */

@Controller
public class salesController {
	private Logger log = LoggerFactory.getLogger(salesController.class);
	
	@Autowired(required=true)
    private salesService salesCommService;

    /**
	 * 고객사 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchCustomerList.do")
	public NexacroResult searchCustomerList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> programInfo = salesCommService.searchCustomerList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", programInfo);
		
		return result;
	}
    

    /**
	 * 고객사 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveCustomerInfo.do")
	public NexacroResult saveCustomerInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	salesCommService.saveCustomerInfo(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}      
    
    /**
	 * 프로젝트 진행 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchProjectList.do")
	public NexacroResult searchProjectList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> programInfo = salesCommService.searchProjectList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", programInfo);
		
		return result;
	}    
    
    /**
	 * 프로젝트 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
     * @throws IOException 
	 */
    @RequestMapping(value = "/saveProjectInfo.do")
	public NexacroResult saveProjectInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException, IOException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");    	
    	
    	salesCommService.saveProjectInfo(saveList, loginUserInfo, path);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}          
    
    /**
	 * 프로젝트 진행 상세 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchProjectDetailList.do")
	public NexacroResult searchProjectDetailList(@ParamDataSet(name = "dsDetailCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> detailInfo = salesCommService.searchProjectDetailList(searchMap);
    	List<Map<String,Object>> fileInfo = salesCommService.searchProjectDetailFileList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsDetail", detailInfo);
		result.addDataSet("dsFile", fileInfo);
		
		return result;
	}    
    
    /**
	 * 프로젝트 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
     * @throws IOException 
	 */
    @RequestMapping(value = "/saveProjectDetailInfo.do")
	public NexacroResult saveProjectDetailInfo(@ParamDataSet(name = "dsDetail", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException, IOException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");       	
    	
    	salesCommService.saveProjectDetailInfo(saveList, loginUserInfo, path);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}             
    
    /**
	 * 파일다운로드 후 다운로드된 서버 파일 삭제
	 * @param request		: N/A
	 * @return uuid : 서버에 저장하는 파일명 생성 후 return
	 */	    
	private static String getUuid() { 
		return UUID.randomUUID().toString().replaceAll("-", ""); 
	}    
    
    /**
	 * 게시판 파일 업로드
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping("/saleFileUpload.do")
    public NexacroResult saleFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
    	//파일업로드
    	Map<String,Object> inMap = null;
    	List<Map<String,Object>> inDs = new ArrayList<Map<String,Object>>();
    	//String path = request.getServletContext().getRealPath("/fileUpload");
    	//String path = "c:\\fileUpload";
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");
        
    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();

    	MultipartFile mfile = null; 
    	String fieldName = ""; 
    	
    	File dir = new File(path); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	
    	String prjtCode = request.getParameter("PRJT_CODE"); 
    	String schedCode = request.getParameter("SCHD_CODE"); 
    	String fileId = request.getParameter("FILE_ID"); //
    	if(fileId == null || fileId.equals("")) {
    		fileId = "FILE_SALES" + getUuid();
    	}
    	
		// 값이 나올때까지 
		while (iter.hasNext()) { 
			fieldName = (String)iter.next();
			
			// 내용을 가져와서 
			mfile = mhsr.getFile(fieldName); 
			String origName; 
			origName = mfile.getOriginalFilename();
			
			// 파일명이 없다면 
			if ("".equals(origName)) {
				continue; 
			} 
			
			// 확장자 
			String ext = origName.substring(origName.lastIndexOf('.')); 
			ext = ext.replace(".", "");
			
			// 파일 명 변경(uuid로 암호화) 
			String saveFileName = getUuid(); 
			
			// 설정한 path에 파일저장 
			File serverFile = new File(path + File.separator + saveFileName ); 
		
			mfile.transferTo(serverFile); 
			
			inMap = new HashMap<>();
			
			inMap.put("PRJT_CODE"		, prjtCode);
			inMap.put("SCHD_CODE"		, schedCode);
			inMap.put("FILE_ID"		, fileId);
			inMap.put("OTXT_FILE_NM", origName);
	    	inMap.put("SAVE_FILE_NM", saveFileName);
	    	inMap.put("FILE_SIZE"	, mfile.getSize());
	    	inMap.put("FILE_TYPE"	, ext);
	    	inMap.put("FILE_PATH_NM", serverFile.toString());
	    	
	    	inDs.add(inMap);
		}
		
		NexterUtil NexUtil = new NexterUtil();
		
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
    						
    	//DB에 파일 정보 INSERT					
    	salesCommService.saveSalesFileInsert(inDs, loginUserInfo);    	
    	
        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet("dsOutput",inDs);
        
        return nexacroResult;    	
    }
    
    @RequestMapping(value = "/deleteSalesFile.do")
	public NexacroResult deleteSalesFile(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException, IOException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 첨부파일 삭제
    	salesCommService.deleteSalesFile(saveList, loginUserInfo);
    	
    	//서버파일삭제
    	Map<String,Object> boradMap = saveList.get(0);
    	//String savePath    = request.getServletContext().getRealPath("/fileUpload");// this.filePath;
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        //System.out.println(properties.getProperty("uploadPath"));
        String savePath = properties.getProperty("uploadPath");
        
    	String filename    = (String) boradMap.get("SAVE_FILE_NM");

    	//파일명 인코딩
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }
    	
    	File file = new File(savePath + File.separator + filename);
    	file.delete();
    	
		NexacroResult result = new NexacroResult();
		return result;
	}      
        
}
