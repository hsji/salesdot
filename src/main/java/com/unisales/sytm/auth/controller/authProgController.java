package com.unisales.sytm.auth.controller;

import java.io.IOException;
import java.sql.SQLException;
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
import com.unisales.sytm.auth.service.authProgService;
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
public class authProgController {
	private Logger log = LoggerFactory.getLogger(authProgController.class);
	
	@Autowired(required=true)
    private authProgService progService;

    /**
	 * 프로그램 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchProgramList.do")
	public NexacroResult searchProgramList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> programInfo = progService.searchProgramList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", programInfo);
		
		return result;
	}
    
    /**
	 * 프로그램 변경내용 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveProgramList.do")
	public NexacroResult saveProgramList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 시스템 메시지를 저장한다.
    	progService.saveProgramList(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}  

    /**
	 * 프로그램 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchProgramAddBtnList.do")
	public NexacroResult searchProgramAddBtnList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> programInfo = progService.searchProgramAddBtnList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", programInfo);
		
		return result;
	}
    
    /**
	 * 프로그램 변경내용 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/saveProgramAddBtnList.do")
	public NexacroResult saveProgramAddBtnList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 시스템 메시지를 저장한다.
    	progService.saveProgramAddBtnList(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	} 
    

    /**
	 * 프로그램 매뉴얼 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 데이터 셋
	 */
	 @RequestMapping(value = "/searchManual.do")
	 public NexacroResult searchManual(@ParamDataSet(name = "dsCond") Map<String, Object> searchMap)
	  									throws NexacroException, SQLException, IOException {
		 Map<String,Object> manualInfo = progService.searchManual(searchMap);
	  	
		 NexacroResult result = new NexacroResult();
		 result.addDataSet("dsList", manualInfo);
			
		 return result;
	  }
	 
	 
	 /**
	 * 프로그램 매뉴얼 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 조회 데이터 셋
	 */
	 @RequestMapping(value = "/saveManual.do")
	 public NexacroResult saveManual(@ParamDataSet(name = "dsList") Map<String, Object> saveMap) {
		 
		  progService.saveManual(saveMap);
		  NexacroResult result = new NexacroResult();
		  return result;
	  }
}
