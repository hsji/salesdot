package com.unisales.comm.schedule.controller;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.runners.Parameterized.Parameters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.comm.schedule.service.scheduleService;
import com.unisales.util.NexterUtil;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.java.xapi.util.StringUtils;



/**
 * <pre>
 * @title   scheduleController
 * @desc    일정 Controller
 * @package com.dxtobe.comm.schedule.controller
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2021. 11. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2021. 11. 09.		TOBESOFT	최초작성
 */

@Controller
public class scheduleController {
	
	private Logger log = LoggerFactory.getLogger(scheduleController.class);
	
	@Autowired(required=true)
    private scheduleService commScheduleService;	

	
	
/****************************************************일정 관리*****************************************************************/	
	/**일정 정보 조회
	 * @param searchMap 
	 * @param request
	 * @return result 
	 * @throws NexacroException
	 */
	@RequestMapping(value="/searchScheduleList.do")
	public NexacroResult searchScheduleList(@ParamDataSet(name="dsCond", required = false) Map<String,Object> searchMap,
			                                HttpServletRequest request) throws NexacroException
	{
		//일정 정보 조회
		List<Map<String,Object>> scheduleList = commScheduleService.searchScheduleList(searchMap);
	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", scheduleList);
		return result;
	}
	

	
	/**일정 관리 추가/수정/삭제
	 * @param saveList : dsList:U (갱신된 정보)
	 * @param request
	 * @return result
	 * @throws NexacroException
	 */
	@RequestMapping(value="/saveScheduleMaster.do")
	public NexacroResult saveScheduleMaster(@ParamDataSet(name="dsList", required = false) List<Map<String,Object>> saveList
			                          , HttpServletRequest request) throws NexacroException
	{
		NexterUtil NexUtil = new NexterUtil();
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
    	// 일정 관리 추가/수정/삭제
    	commScheduleService.saveScheduleMaster(saveList, loginUserInfo);					
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	
	/** row 삭제 전 자식 유무 검사
	 * @param scdCd : 삭제 처리 할 row의 SCD_CD
	 * @return result 
	 */
	@RequestMapping(value="selectChildSchedule.do")
	public NexacroResult selectChildSchedule(@ParamVariable(name="scdCd") String scdCd)
	{
		int child = commScheduleService.selectChildSchedule(scdCd);
		NexacroResult result = new NexacroResult();
		result.addVariable("fvChildResult", child);
		return result;
	}
	
	
	
/****************************************************일정 *****************************************************************/		
	/**일정 정보 조회 + 일정마스터코드 목록 + 일정유형목록
	 * @param searchMap 
	 * @param request
	 * @return result 
	 * @throws NexacroException
	 */
	@RequestMapping(value="/SearchScdInfo.do")
	public NexacroResult SearchScdInfo(@ParamDataSet(name="dsCond", required = false) Map<String,Object> searchMap,
			                                HttpServletRequest request) throws NexacroException
	{
		//일정 정보 조회
		List<Map<String,Object>> scheduleList = commScheduleService.searchScheduleList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", scheduleList);
		return result;
	}
	
	/** 달력 그리기
	 * @param dsSearch
	 * @param request
	 * @return result
	 * @throws NexacroException
	 */
	@RequestMapping(value="getMonthDate.do")
	public NexacroResult getMonthDate(@ParamDataSet(name="dsSearch", required = false) Map<String,Object> dsSearch,
			                          HttpServletRequest request) throws NexacroException
	{
        // 달력 그리기
    	List<Map<String,Object>> monthDate = commScheduleService.getMonthDate(dsSearch);
    			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsMonthDate", monthDate);
		return result;
	}
	
	
	/** 나의 일정 조회 (해당월 일정만 조회 (캘린더 전체 화면) - 권한 있는 일정 전체 )
	 * @param dsSearch
	 * @param request
	 * @return
	 * @throws NexacroException
	 */
	@RequestMapping(value="getMySchedule.do")
	public NexacroResult getMySchedule(@ParamDataSet(name="dsSearch", required = false) Map<String,Object> dsSearch
								, HttpServletRequest request) throws NexacroException
	{
		List<Map<String,Object>> myScdList = commScheduleService.getMySchedule(dsSearch);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsScdData", myScdList);
		return result;
	}
	
	
	/** 해당월 일정만 조회 (캘린더 전체 화면) - 원하는 일정(SCD_CD)만
	 * @param dsSearch
	 * @param request
	 * @return
	 * @throws NexacroException
	 */
	@RequestMapping(value="getSchedule.do")
	public NexacroResult getSchedule(@ParamDataSet(name="dsSearch", required = false) Map<String,Object> dsSearch,
									HttpServletRequest request) throws NexacroException
	{
	  	List<Map<String,Object>> schedule = commScheduleService.getSchedule(dsSearch);
	  	NexacroResult result = new NexacroResult();
		result.addDataSet("dsScdData", schedule);
		
		return result;
	}

	
	
	/** 해당일 일정만 조회 (캘린더 전체 화면)
	 * @param dsSearch
	 * @param request
	 * @return
	 * @throws NexacroException
	 */
	@RequestMapping(value="sectOneDay.do")
	public NexacroResult sectOneDay(@ParamDataSet(name="dsSearch", required = false) Map<String,Object> dsSearch,
									HttpServletRequest request) throws NexacroException
	{
		List<Map<String,Object>> oneDay = commScheduleService.sectOneDay(dsSearch);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsScdList", oneDay);
		return result;	
	}
	
	
	
/****************************************************일정  팝업*****************************************************************/		
    	
	/** 로그인 사용자가 사용할 수 있는(권한 있는) 일정(일정코드) 목록
	 * @param deptCd
	 * @return
	 */
	@RequestMapping(value="selectScdNm.do")
	public NexacroResult selectScdNm(@ParamDataSet(name="dsCond", required=false) Map<String,Object> dsCond
									, HttpServletRequest request)
									throws NexacroException
	{
		List<Map<String,Object>> scdNmList = commScheduleService.selectScdNm(dsCond);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsScdNm", scdNmList);
		return result;
	}
	
	
	/** 일정 추가/수정
	 * @param dsList
	 * @param request
	 * @return
	 * @throws NexacroException
	 */
	@RequestMapping(value="saveScheduleContents.do")
	public NexacroResult saveScheduleContents(@ParamDataSet(name="dsList", required = false) Map<String,Object> dsList,
								HttpServletRequest request) throws NexacroException
	{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
		
    	commScheduleService.saveScheduleContents(dsList, loginUserInfo); // 일정 추가/수정					
    						
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	
	
	/** 일정 상세조회
	 * @param dsCond
	 * @param request
	 * @return
	 * @throws NexacroException
	 * @throws SQLException 
	 */
	@RequestMapping(value="searchScheduleContents.do")
	public NexacroResult searchScheduleContents(@ParamDataSet(name="dsCond", required = false) Map<String,Object> dsCond,
												HttpServletRequest request) throws NexacroException, SQLException
	{
		List<Map<String,Object>> contents  = commScheduleService.searchScheduleContents(dsCond);//일정 내용
		List<Map<String,Object>> files = commScheduleService.searchScheduleFiles(dsCond); // 등록된 파일

    	//2021.06.29 clob -> string 로직 추가 start
		//23.05.18 -> mssql DB에서는 CNTN이 nVarchar(String) 으로 되어있음 관련 로직 추가 
    	int size = 0;
    	if(contents.get(0).get("CNTN") != null) {
	    	String cntn = "";
	    	String cntnType = contents.get(0).get("CNTN").getClass().getSimpleName();
			if(!cntnType.equals("String")) {
				Clob clob = (Clob) contents.get(0).get("CNTN");
		    	if(clob == null) {
		    		size=0;
		    	}else {
		    		size=(int) clob.length();
		    	}
		    	
		    	if(size > 0) {
		    		cntn = clob.getSubString(1, size); // 첫번째부터 끝까지 복사
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
		result.addDataSet("dsFile", files);
		return result;
	}
	
	
	
/*************************************************일정 파일 관련**********************************************************************/	
	
    /**
	 * 일정 파일 업로드
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping("/scheduleFileUpload.do")
    public NexacroResult scheduleFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
    	//파일업로드
    	Map<String,Object> inMap = null;
    	List<Map<String,Object>> inDs = new ArrayList<Map<String,Object>>();
    	//String path = request.getServletContext().getRealPath("/fileUpload");
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
    	
    	String fileId = request.getParameter("FILE_ID"); 
    	if(fileId.equals("")) {
    		fileId = "FILE_"+request.getParameter("SCD_CD")+getUuid();
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
    	
    	//20220426 	RP 94776 로 임시처리
    //	String userId = request.getParameter("USER_ID");
    //	if (StringUtils.isEmpty(userId))
	//	{	
			loginUserInfo = NexUtil.getUserInfoMap(request);
	//	}
	//	else
	//	{	    	
	//   	loginUserInfo.put("USER_ID_SRV"			, request.getParameter("USER_ID"));
	//  	loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");
	//	}					
    	//DB에 파일 정보 INSERT					
    	commScheduleService.saveScheduleFileInsert(inDs, loginUserInfo);
    	
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
	
	
	
	/** 첨부된 파일 삭제
	 * @param saveList
	 * @param request
	 * @return
	 * @throws NexacroException
	 * @throws IOException 
	 */
	@RequestMapping("deleteScheduleFile.do")
	public NexacroResult deleteScheduleFile(@ParamDataSet(name="dsUpload", required = false) List<Map<String, Object>> saveList
											,HttpServletRequest request) throws NexacroException, IOException
	{
    	// 첨부파일 삭제
    	commScheduleService.deleteScheduleFile(saveList);
    	
    	//서버파일삭제
    	Map<String,Object> boradMap = saveList.get(0);
    	//String savePath    = request.getServletContext().getRealPath("/fileUpload");// this.filePath;
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String savePath = properties.getProperty("uploadPath");
    	String filename    = (String) boradMap.get("FILE_ID");

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
	
	

/****************************************************일정  검색*****************************************************************/		
    
	/** 일정 검색(Title)
	 * @param dsCond
	 * @param request
	 * @return
	 * @throws NexacroException
	 */
	@RequestMapping(value="searchScdData.do")
	public NexacroResult searchScdData(@ParamDataSet(name="dsCond", required = false) Map<String, Object> dsCond
									, @ParamDataSet(name="dsCondPage",required = false) Map<String,Object> dsCondPage
									, HttpServletRequest request) throws NexacroException
	{
		dsCond.put("START_NUM", dsCondPage.get("START_NUM"));
		dsCond.put("END_NUM", dsCondPage.get("END_NUM"));			

		List<Map<String,Object>> searchList = commScheduleService.searchScdData(dsCond);
		//전체 일정 수 조회
		List<Map<String,Object>> scheduleListCount = commScheduleService.searchScheduleListCnt(dsCond);
		
		NexacroResult result= new NexacroResult();
		result.addDataSet("dsList", searchList);
		result.addDataSet("dsCount", scheduleListCount);
		return result;
	}
}
