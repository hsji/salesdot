package com.unisales.comm.board.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
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

import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.aspose.words.Document;
import com.ibatis.common.resources.Resources;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.comm.board.service.boardService;
import com.unisales.util.ImageUtil;
import com.unisales.util.NexterUtil;
import com.unisales.util.UbidcsUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformType;

/**
 * <pre>
 * @title   AuthInfoController
 * @desc    System 정보 관리 Controller (권한정보)         
 * @package com.dxtobe.sytm.controller
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2019. 05. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2019. 05. 09.		TOBESOFT	최초작성
 */

@Controller
public class boardController {
	private Logger log = LoggerFactory.getLogger(boardController.class);
	
	@Autowired(required=true)
    private boardService commBoardService;

	/**********************************************************게시판 컨텐츠***********************************************************/
	/**
	 * 게시판 컨텐츠 조회
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchBoardContentDetail.do")
	public NexacroResult searchBoardContentDetail(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
		    List<Map<String,Object>> contents  = commBoardService.searchBoardContentDetail(searchMap);		//게시글 내용
	    	List<Map<String,Object>> fileList  = commBoardService.searchBoardContentDetailFile(searchMap);	//게시글 첨부파일
	    	List<Map<String,Object>> replyList = commBoardService.searchReplyList(searchMap);				//게시글 리플(댓글)
	    	
	    	//2021.06.29 clob -> string 로직 추가 start
	    	//23.05.18 -> mssql DB에서는 CNTN이 nVarchar(String) 으로 되어있음 관련 로직 추가 
	    	int size = 0;
	    	if(contents.get(0).get("CNTN") != null) {
		    	String cntnType = contents.get(0).get("CNTN").getClass().getSimpleName();
		    	String cntn = "";
		    	if(!cntnType.equals("String")) {
			    	Clob clob = (Clob) contents.get(0).get("CNTN");
			    	if(clob == null) {
			    		size=0;
			    	}else {
			    		size=(int) clob.length();
			    	}
			    
			    	if(size > 0) {
			    		cntn = clob.getSubString(1, size);
			    	}
		    	} else {
		    		cntn = (String) contents.get(0).get("CNTN");
		    	}
		    	contents.get(0).put("CNTN", cntn);
	    	} else {
	    		contents.get(0).put("CNTN", null);
	    	}
	    	
	    	//2021.06.29 clob -> string 로직 추가 end
	    	
			NexacroResult result = new NexacroResult();
			result.addDataSet("dsList", contents);
			result.addDataSet("dsFile", fileList);
			result.addDataSet("dsReply", replyList);
			return result;
	} 
	
	/**
	 * 게시판 컨텐츠 파일목록조회
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchBoardFileList.do")
	public NexacroResult searchBoardFileList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, HttpServletRequest request) throws NexacroException{
			//게시글 첨부파일 리스트 조회
	    	List<Map<String,Object>> fileList = commBoardService.searchBoardFileList(searchMap);
	    	
			NexacroResult result = new NexacroResult();
			result.addDataSet("dsFile", fileList);
			return result;
	} 
	
	/**
	 * 게시판 컨텐츠 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveBoardContents.do")
	public NexacroResult saveBoardContents(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 게시판 추가/수정
    	commBoardService.saveBoardContents(saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  
    
    /**********************************************************게시판 컨텐츠 (파일) ***********************************************************/
    /**
	 * 게시판 파일 삭제
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws  
	 */
    @RequestMapping(value = "/deleteBoardFile.do")
	public NexacroResult deleteBoardFile(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException, IOException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 첨부파일 삭제
    	commBoardService.deleteBoardFile(saveList, loginUserInfo);
    	
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
    
    /**
	 * 게시판 파일 업로드
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping("/boardFileUpload.do")
    public NexacroResult boardFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
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
    	
    	String fileId = request.getParameter("FILE_ID"); //
    	if(fileId.equals("")) {
    		fileId = "FILE_"+request.getParameter("BOARD_CD")+getUuid();
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
    	//20220426 	RP 94374 로 임시처리
 //   	loginUserInfo.put("USER_ID_SRV"			, request.getParameter("USER_ID"));
 //   	loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");    						
    	//loginUserInfo.put("USER_ID_SRV"			, request.getParameter("USER_ID"));
    	//loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");    						
    						
    	//DB에 파일 정보 INSERT					
    	commBoardService.saveBoardFileInsert(inDs, loginUserInfo);    	
    	
        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet("dsOutput",inDs);
        
        return nexacroResult;    	
    }
    
    /**
	 * 파일다운로드 후 다운로드된 서버 파일 삭제
	 * @param request		: N/A
	 * @return uuid : 서버에 저장하는 파일명 생성 후 return
	 */	    
	private static String getUuid() { 
		return UUID.randomUUID().toString().replaceAll("-", ""); 
	}
	
	/**********************************************************게시판 리플(댓글) ***********************************************************/
    /**
	 * 게시판 댓글 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchReplyList.do")
	public NexacroResult searchReplyList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	//리플(댓글)리스트 조회
    	List<Map<String,Object>> replyList = commBoardService.searchReplyList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", replyList);
		
		return result;
	}
    
    /**
	 * 댓글 추가/삭제/저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveReply.do")
	public NexacroResult saveReply(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 댓글 추가/삭제/저장
    	commBoardService.saveReply(saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  
    
    /**********************************************************게시판 컨텐츠 (목록 조회) ***********************************************************/
    /**
	 * 게시판 목록 조회
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchBoardContent.do")
	public NexacroResult searchBoardContent(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
			 								, @ParamDataSet(name = "dsCondPage", required = false) Map<String,String> searchMapPage
											, HttpServletRequest request) throws NexacroException, SQLException{
		
			//2022.04.06 모바일 페이징 처리 안 함
			if(searchMapPage!=null) {
				//페이징
				searchMap.put("START_NUM", searchMapPage.get("START_NUM"));
				searchMap.put("END_NUM", searchMapPage.get("END_NUM"));				
			}
			
			//게시판목록조회
	    	List<Map<String,Object>> boardList 		= commBoardService.searchBoardContents(searchMap);		//게시판목록조회
	    	List<Map<String,Object>> boardListCount = commBoardService.searchBoardContentsCnt(searchMap);	//게시판목록갯수조회
	    	
	    	//카드형 게시판일 경우 내용 CLOB -> String 변경 로직 추가   22.03.29
	    	//23.05.18 -> mssql DB에서는 CNTN이 nVarchar(String) 으로 되어있음 관련 로직 추가 
	    	if(searchMap.get("srchFlag") != null) {
		    	String sFlag = searchMap.get("srchFlag");		
		    	if(sFlag.equals("C")) {
		        	int size = 0;
		        	for(int i=0; i<boardList.size(); i++) {
		        		if(boardList.get(i).get("CNTN") != null) {
			        		String cntnType = boardList.get(i).get("CNTN").getClass().getSimpleName();
			        		String cntn = "";
			        		if(!cntnType.equals("String")) {
			        			Clob clob = (Clob) boardList.get(i).get("CNTN");
				            	if(clob == null) {
				            		size=0;
				            	}else {
				            		size=(int) clob.length();
				            	}
				            	if(size > 0) {
				            		cntn = clob.getSubString(1, size); // 첫번째부터 끝까지 복사
				            	}
				            	boardList.get(i).put("CNTN", cntn);
			        		}
		        		}
		        	}
		    	}
	    	}
	    	
			NexacroResult result = new NexacroResult();
			result.addDataSet("dsList", boardList);
			result.addDataSet("dsCount", boardListCount);
			
			return result;
	} 
    /**********************************************************게시판 마스터 ***********************************************************/
    /**
	 * 게시판마스터 조회 (게시판관리)
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchBoardList.do")
	public NexacroResult searchBoardList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	//게시판관리 리스트 조회
    	List<Map<String,Object>> boardList = commBoardService.searchBoardList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", boardList);
		
		return result;
	}
    
    /**
	 * 게시판 마스터 추가/수정/삭제 (게시판관리)
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveBoard.do")
	public NexacroResult saveBoard(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 게시판마스터 추가/수정
    	commBoardService.saveBoard(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		return result;
	}  
    
    
    
    /**************************************************카드형 게시판******************************************************/

    /** 카드형 게시판 파일 조회
     * @param searchMap
     * @param request
     * @return
     * @throws NexacroException
     * @throws IOException
     */
    @RequestMapping(value="searchBoardCardFile.do")
    public NexacroResult searchBoardCardFile(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
			, HttpServletRequest request) throws NexacroException, IOException
    {
		List<Map<String,Object>> fileList  = commBoardService.searchBoardContentDetailFile(searchMap);	//게시글 첨부파일
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsFile", fileList);
		return result;
	}
    
    
    /**
	 * 게시판 파일 업로드
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping("/weekReportFileUpload.do")
    public NexacroResult weekReportFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
    	//파일업로드
    	Map<String,Object> inMap = null;
    	List<Map<String,Object>> inDs = new ArrayList<Map<String,Object>>();
    	//String path = request.getServletContext().getRealPath("/fileUpload");
    	//String path = "c:\\fileUpload";
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");
        path = path + "/weekreport"; 
        
    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();

    	MultipartFile mfile = null; 
    	String fieldName = ""; 
    	
    	File dir = new File(path); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	
    	String fileId = request.getParameter("FILE_ID"); //
    	if(fileId.equals("")) {
    		fileId = "FILE_"+ getUuid();
    	}
    	
    	int fileCnt = 0;
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
			
			System.out.println("saveFileName" + path + ":" + saveFileName + ":" + ext + ":" + fileCnt);
			
			if(fileCnt == 0 && ext.equals("docx")) {
				Document doc = new Document(path + File.separator + saveFileName);
				doc.save(path + File.separator + saveFileName + ".pdf");			
			}
			
			inMap = new HashMap<>();
			
			inMap.put("FILE_ID"		, fileId);
			inMap.put("OTXT_FILE_NM", origName);
	    	inMap.put("SAVE_FILE_NM", saveFileName);
	    	inMap.put("FILE_SIZE"	, mfile.getSize());
	    	inMap.put("FILE_TYPE"	, ext);
	    	inMap.put("FILE_PATH_NM", serverFile.toString());
	    	
	    	inDs.add(inMap);
	    	
	    	fileCnt++;
		}
		
		NexterUtil NexUtil = new NexterUtil();
		
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
    	//20220426 	RP 94374 로 임시처리
 //   	loginUserInfo.put("USER_ID_SRV"			, request.getParameter("USER_ID"));
 //   	loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");    						
    	//loginUserInfo.put("USER_ID_SRV"			, request.getParameter("USER_ID"));
    	//loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");    						
    						
    	//DB에 파일 정보 INSERT					
    	commBoardService.saveWeekReportFileInsert(inDs, loginUserInfo);    	
    	
        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet("dsOutput",inDs);
        
        return nexacroResult;    	
    }    
    
	@RequestMapping(value = "/weekReportPDFView.do")
	public void weekReportPDFView(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> searchMap 
			, HttpServletRequest request, HttpServletResponse response) throws IOException {
		
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");
        path = path + "/weekreport"; 
        
		String filename = request.getParameter("filename");
    	
		File pdfFile = new File(path + "/" + filename + ".pdf");
		
		System.out.println(path + "/" + filename);
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
	    }	
	}     
    
    /**
	 * 게시판 파일 삭제
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws  
	 */
    @RequestMapping(value = "/deleteweekReportFile.do")
	public NexacroResult deleteweekReportFile(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException, IOException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 첨부파일 삭제
    	commBoardService.deleteWeekReportFile(saveList, loginUserInfo);
    	
    	//서버파일삭제
    	Map<String,Object> boradMap = saveList.get(0);
    	//String savePath    = request.getServletContext().getRealPath("/fileUpload");// this.filePath;
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        //System.out.println(properties.getProperty("uploadPath"));
        String savePath = properties.getProperty("uploadPath");
        savePath = savePath + "/weekreport"; 
        
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
