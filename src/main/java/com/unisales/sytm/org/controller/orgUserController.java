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

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sytm.org.service.orgUserService;
import com.unisales.util.NexaUtil;
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
public class orgUserController {
	private Logger log = LoggerFactory.getLogger(orgUserController.class);
	
	@Autowired(required=true)
    private orgUserService commUserService;
	
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectCommonUserList.do")
	public NexacroResult selectCommonUserList(@ParamDataSet(name = "dsCommonCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.selectCommonUserList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCommonList", searchList);
		
		return result;
	}
	/**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchDeptInfo.do")
	public NexacroResult searchDeptInfo(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.searchDeptInfo(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsDept", searchList);
		
		return result;
	}
    /**
	 * 부서 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchDeptUserList.do")
	public NexacroResult searchDeptUserList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.searchDeptUserList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
    /**
	 * 부서 및 부서별 사용자 조회. 조직도 화면에서 사용. searchDeptUserList와 구분 위한 임시 넘버링
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchDeptUserList2.do")
	public NexacroResult searchDeptUserList2(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.searchDeptUserList2(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
	/**
	 * 사용자 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchUserInfo.do")
	public NexacroResult searchUserInfo(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.searchUserInfo(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
	/**
	 * 사용자 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchUserOneInfo.do")
	public NexacroResult searchUserOneInfo(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = commUserService.searchUserOneInfo(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}    
    
    /**
	 * 사용자ID 체크
	 * @param searchMap		: 체크할 데이터 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/checkUserId.do")
	public NexacroResult checkUserId(@ParamDataSet(name = "dsCheckUserId", required = false) List<Map<String,String>> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> chkUser = commUserService.checkUserId(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsCheckResult", chkUser);
		
		return result;
	}
    
    /**
	 * 사용자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveUserInfo.do")
	public NexacroResult saveUserInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();
 
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
        int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> userMap = saveList.get(i);
            
            String pwd = (String) userMap.get("PASSWORD");
            if(pwd == null) pwd = "";
            if(pwd.equals("")) {
            } else {
            	// PASSWORD 복호화
            	String decryptContents = "";
            	try {
            		decryptContents = NexaUtil.getDectypeValue(request, pwd);
            		userMap.put("PASSWORD", decryptContents);
            	} catch (Exception e) {
            		e.printStackTrace();
            		throw new NexacroException("exceptionName", -999, "msg.keyfail");
            	}            	
            }
        }	    	
    	
    	// 시스템 메시지를 저장한다.
    	commUserService.saveUserInfo(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}  

    /**
	 * 사용자 정보 삭제
	 * @param saveMap		: 삭제할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/deleteUserInfo.do")
	public NexacroResult deleteUserInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> delList
										, HttpServletRequest request) throws NexacroException{

    	// 시스템 메시지를 삭제한다.
    	commUserService.deleteUserInfo(delList);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	} 
}
