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

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sytm.code.service.codeMsgService;
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
public class codeMsgController {
	private Logger log = LoggerFactory.getLogger(codeMsgController.class);
	
	@Autowired(required=true)
    private codeMsgService commMsgService;

	/**
	 * 시스템 메시지 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/SearchSystemMsg.do")
	public NexacroResult SearchSystemMsg(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> systemMsgInfo = commMsgService.searchSystemMsg(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", systemMsgInfo);
		
		return result;
	}
    
    /**
	 * 신규등록 메시지 코드 존재여부 체크
	 * @param searchMap		: 체크할 데이터 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/CheckMsgCode.do")
	public NexacroResult CheckMsgCode(@ParamDataSet(name = "dsChkData", required = false) List<Map<String,String>> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> chkMsgInfo = commMsgService.checkNewMsgCode(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsChkResultMsg", chkMsgInfo);
		
		return result;
	}
    
    /**
	 * 메시지 변경내용 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/SaveMsg.do")
	public NexacroResult SaveMsg(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 시스템 메시지를 저장한다.
    	commMsgService.saveMsg(saveList, loginUserInfo);	
		NexacroResult result = new NexacroResult();
		return result;
	}  
}
