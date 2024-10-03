package com.unisales.sytm.org.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sytm.org.service.orgDeptService;
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
public class orgDeptController {
	private Logger log = LoggerFactory.getLogger(orgDeptController.class);
	
	@Autowired(required=true)
    private orgDeptService commDeptService;
	
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectCommonDeptList.do")
	public NexacroResult selectCommonDeptList(@ParamDataSet(name = "dsCommonCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commDeptService.selectCommonDeptList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCommonList", searchList);
		
		return result;
	}
    
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectDeptList.do")
	public NexacroResult selectDeptList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commDeptService.selectDeptList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
    /**
	 * 사용자ID 체크
	 * @param searchMap		: 체크할 데이터 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/checkDeptCd.do")
	public NexacroResult checkDeptCd(@ParamDataSet(name = "dsCehckDept", required = false) List<Map<String,String>> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> chkDept = commDeptService.checkDeptCd(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCehckDeptResult", chkDept);
		
		return result;
	}
    
    /**
	 * 사용자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveDeptInfo.do")
	public NexacroResult saveDeptInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	commDeptService.saveDeptInfo(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}  

    /**
	 * 사용자 정보 삭제
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/deleteDeptInfo.do")
	public NexacroResult deleteDeptInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> delList
										, HttpServletRequest request) throws NexacroException{

    	commDeptService.deleteDeptInfo(delList);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	} 
    
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectCompanyMapList.do")
	public NexacroResult selectCompanyMapList(HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> searchList = commDeptService.selectCompanyMapList();
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}    
    
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectCompanyDocMapList.do")
	public NexacroResult selectCompanyDocMapList(HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> searchList = commDeptService.selectCompanyDocMapList();
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}        
}
