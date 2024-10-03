package com.unisales.sytm.code.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sytm.code.service.codeService;
import com.unisales.util.NexterUtil;

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
public class codeController {
	private Logger log = LoggerFactory.getLogger(codeController.class);
	
	@Autowired(required=true)
    private codeService commCodeService;

	@RequestMapping(value = "/selectCommonCodeAll.do")
	public NexacroResult selectCommonCodeAll(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commonCodeGubun = commCodeService.selectCommonCodeGubunAll(searchMap);
    	List<Map<String,Object>> commonCode		 = commCodeService.selectCommonCodeAll(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCodeGubun" , commonCodeGubun);
		result.addDataSet("dsCode"		, commonCode);
		return result;
	} 
	
	/**
   	 * 공통코드 변경내용 저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/saveCommonCodeAll.do")
   	public NexacroResult saveCommonCodeAll(@ParamDataSet(name = "dsCodeGubun", required = false) List<Map<String,Object>> commonCodeGubun
   										  ,@ParamDataSet(name = "dsCode", required = false) List<Map<String,Object>> commonCode
   										  , HttpServletRequest request) throws NexacroException{
       	
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	//임포트한 공통코드를 저장한다.
       	commCodeService.insertCommonCodeGubunAll(commonCodeGubun, loginUserInfo); //대분류저장
       	commCodeService.insertCommonCodeAll(commonCode, loginUserInfo); //소분류저장
       	
   		NexacroResult result = new NexacroResult();
   		
   		return result;
   	}
    
	@RequestMapping(value = "/searchAllCommonCode.do")
	public NexacroResult searchAllCommonCode(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchUnionCommonCode(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("gdsCommCode", commCodeListInfo);
		return result;
	} 
	
	@RequestMapping(value = "/searchUnionCommonCode.do")
	public NexacroResult searchUnionCommonCode(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
			 								, @ParamDataSet(name = "dsCondPage", required = false) Map<String,String> searchMapPage
											, HttpServletRequest request) throws NexacroException{
		searchMap.put("START_NUM", searchMapPage.get("START_NUM"));
		searchMap.put("END_NUM", searchMapPage.get("END_NUM"));
		
    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchUnionCommonCode(searchMap);
    	List<Map<String,Object>> commCodeListInfoCnt = commCodeService.searchUnionCommonCodeCnt(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCodeListInfo);
		result.addDataSet("dsCount", commCodeListInfoCnt);
		return result;
	} 
 
    @RequestMapping(value = "/SearchCommCodeList.do")
	public NexacroResult SearchCommCodeList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchComCodeList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCodeListInfo);
		
		return result;
	}   
    
    /**
	 * 공통코드 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/SearchPopCommCodeList.do")
	public NexacroResult SearchPopCommCodeList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchPopComCodeList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCodeListInfo);
		
		return result;
	}    
    
    /**
   	 * 공통코드 변경내용 저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/saveComCode.do")
   	public NexacroResult saveComCode(@ParamDataSet(name = "dsMaster", required = false) List<Map<String,Object>> saveListComCode
   									,@ParamDataSet(name = "dsDetail", required = false) List<Map<String,Object>> saveListPopComCode
   									, HttpServletRequest request) throws NexacroException{
       	
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	// 시스템 메시지를 저장한다.
       	commCodeService.saveComCode(saveListComCode, loginUserInfo); //대분류저장
       	commCodeService.savePopComCode(saveListPopComCode, loginUserInfo); //소분류저장
       	
   		NexacroResult result = new NexacroResult();
   		
   		return result;
   	}
    
    /**
	 * 신규등록 메시지 코드 존재여부 체크
	 * @param searchMap		: 체크할 데이터 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/checkCommonCode.do")
	public NexacroResult checkCommonCode(@ParamDataSet(name = "dsMasterCheck", required = false) List<Map<String,String>> masterCheck 
										,@ParamDataSet(name = "dsDetailCheck", required = false) List<Map<String,String>> detailCheck 
										, HttpServletRequest request) throws NexacroException{

    	int nMasterSize = masterCheck.size();
    	int nDetailSize = detailCheck.size();
    	
    	List<Map<String,Object>> checkMasterCommonCode = null;
    	List<Map<String,Object>> checkDetailCommonCode = null;
    	
    	if(nMasterSize>0) {
    		checkMasterCommonCode = commCodeService.checkMasterCommonCode(masterCheck);
    	}
    	if(nDetailSize>0) {
    		checkDetailCommonCode = commCodeService.checkDetailCommonCode(detailCheck);
    	}
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsMasterResult", checkMasterCommonCode);
		result.addDataSet("dsDetailResult", checkDetailCommonCode);
		
		return result;
	}
    
    /**
	 * 공통코드 대분류 삭제
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/deleteComCode.do")
	public NexacroResult deleteComCode(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> delList
								, HttpServletRequest request) throws NexacroException{

    	// 공통코드 대분류 삭제한다.
    	commCodeService.deleteComCode(delList);
		NexacroResult result = new NexacroResult();
		
		return result;
	}
    
    /**
	 * 공통코드 대분류 삭제
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/deletePopComCode.do")
	public NexacroResult deletePopComCode(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> delList
								, HttpServletRequest request) throws NexacroException{

    	// 공통코드 대분류 삭제한다.
    	commCodeService.deletePopComCode(delList);
		NexacroResult result = new NexacroResult();
		
		return result;
	}  
    
    /*------------------------------------------------------------------------------------------------------------------------*/
    // 자산관리
    /*------------------------------------------------------------------------------------------------------------------------*/
    /**
	 * 자산관리 목록 조회
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */    
    @RequestMapping(value = "/SearchAssetList.do")
	public NexacroResult SearchAssetList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchAssetList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCodeListInfo);
		
		return result;
	}      
    
    /**
   	 * 자산관리 저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/saveAssetList.do")
   	public NexacroResult saveAssetList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveMap
   									, HttpServletRequest request) throws NexacroException{
       	
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	// 시스템 메시지를 저장한다.
       	commCodeService.saveAssetList(saveMap, loginUserInfo);
       	
   		NexacroResult result = new NexacroResult();
   		
   		return result;
   	}    
    
    /**
	 * IP 목록 조회
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */    
    @RequestMapping(value = "/SearchIPList.do")
	public NexacroResult SearchIPList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> commCodeListInfo = commCodeService.searchIPList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCodeListInfo);
		
		return result;
	}          
    
    /**
   	 * 자산관리 저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/saveIPList.do")
   	public NexacroResult saveIPList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveMap
   									, HttpServletRequest request) throws NexacroException{
       	
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	// 시스템 메시지를 저장한다.
       	commCodeService.saveIPList(saveMap, loginUserInfo);
       	
   		NexacroResult result = new NexacroResult();
   		
   		return result;
   	}        
    
    /**
   	 * 달력생성
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */    
    @RequestMapping(value = "/CreateCalendarList.do")
	public NexacroResult createCalendarList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
    	// 달력생성.
       	DataSet ds = commCodeService.createCalendarList(searchMap, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}       
    
    /**
   	 * 달력조회
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */    
    @RequestMapping(value = "/searchCalendarList.do")
	public NexacroResult searchCalendarList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
    	// 달력조회.
    	List<Map<String,Object>> commCalListInfo = commCodeService.searchCalendarList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", commCalListInfo);
		
		return result;
	}           
    
    /**
   	 * 달력 저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/saveCalendarList.do")
   	public NexacroResult saveCalendarList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveMap
   									, HttpServletRequest request) throws NexacroException{
       	
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	// 시스템 메시지를 저장한다.
       	commCodeService.saveCalendarList(saveMap, loginUserInfo);
       	
   		NexacroResult result = new NexacroResult();
   		
   		return result;
   	}           
    
}
