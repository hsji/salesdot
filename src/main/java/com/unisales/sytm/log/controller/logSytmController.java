package com.unisales.sytm.log.controller;

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
import com.unisales.sytm.log.service.logSytmService;
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
public class logSytmController {
	private Logger log = LoggerFactory.getLogger(logSytmController.class);
	
	@Autowired(required=true)
    private logSytmService logService;
	
	/**
	 * 시스템 접속 로그 현황
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectSytmLoginLog.do")
	public NexacroResult selectSytmLoginLog(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{
    	List<Map<String,Object>> searchList = logService.selectSytmLoginLog(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
    /**
	 * 프로그램 호출 현황
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/selectPrgmOpenLog.do")
	public NexacroResult selectPrgmOpenLog(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{
    	List<Map<String,Object>> searchList = logService.selectPrgmOpenLog(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
    /**
	 * 사용자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveLog.do")
	public NexacroResult saveLog(@ParamDataSet(name = "dsList", required = false) Map<String,Object> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexacroResult result = new NexacroResult();
    	
    	NexterUtil NexUtil = new NexterUtil();
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	request.getSession().setAttribute("userInfo", null);

    	logService.saveLog(saveList, loginUserInfo);
    	return result;
	}  
    
    /**
   	 * 로그저장
   	 * @param saveMap		: 저장할 Dataset
   	 * @return result		: 데이터 셋
   	 */
    @RequestMapping(value = "/selectUserLog.do")
	public NexacroResult selectUserLog(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> selectList = logService.selectUserLog(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", selectList);
		
		return result;
	}
       
    
    /**
	 * main화면 로그 조회(~한달치)
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/selectMainLog.do")
	public NexacroResult selectMainLog( HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> selectMainLogOs 	  = logService.selectMainLogOs();
    	List<Map<String,Object>> selectMainLogBrowser = logService.selectMainLogBrowser();
    	List<Map<String,Object>> selectMainLogScreen  = logService.selectMainLogScreen();
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsOs"	 , selectMainLogOs);
		result.addDataSet("dsBrowser", selectMainLogBrowser);
		result.addDataSet("dsScreen" , selectMainLogScreen);
		
		return result;
	}
}
