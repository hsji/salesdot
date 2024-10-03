package com.unisales.sytm.auth.controller;

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
import com.unisales.sytm.auth.service.authMenuService;
import com.unisales.util.NexterUtil;
import com.unisales.util.UserInfo;

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
public class authMenuController {
	private Logger log = LoggerFactory.getLogger(authMenuController.class);
	
	@Autowired(required=true)
    private authMenuService menuService;

	/**
	 * 메뉴 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchMenuList.do")
	public NexacroResult searchMenuList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	// 메뉴목록을 조회한다.
    	List<Map<String,Object>> menuInfo = menuService.searchMenuList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", menuInfo);
		
		return result;
	}
    
    /**
	 * 메뉴 변경내용 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveMenuList.do")
	public NexacroResult saveMenuList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 메뉴정보를 저장한다.
    	menuService.saveMenuList(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		return result;
	}    

    /**
	 * 선택한 메뉴 정보 삭제
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/deleteMenuList.do")
	public NexacroResult deleteMenuList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> delList
										, HttpServletRequest request) throws NexacroException{
    	
    	// 메뉴정보를 삭제한다.
    	menuService.deleteMenuList(delList);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}    
    
    
    /**
	 * 마이메뉴 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchMyMenu.do")
	public NexacroResult searchMyMenu(HttpServletRequest request) throws NexacroException{
    	
    	// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	
    	// 마이메뉴를 조회한다.
    	List<Map<String,Object>> systemMyMenuInfo = menuService.searchMyMenu(userInfo);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", systemMyMenuInfo);
		return result;
	}
    
    /**
	 * 마이메뉴 변경내용 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveMyMenu.do")
	public NexacroResult saveMyMenu(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);

    	// 마이메뉴를 저장한다.
    	menuService.saveMyMenu(saveList, loginUserInfo);
		NexacroResult result = new NexacroResult();
		return result;
	}  
}
