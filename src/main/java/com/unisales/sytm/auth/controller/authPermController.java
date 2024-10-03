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
import com.unisales.sytm.auth.service.authPermService;
import com.unisales.util.NexterUtil;

/**
 * <pre>
 * @title   bizAuthController
 * @desc    System 정보 관리 권란관리
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
public class authPermController {
	private Logger log = LoggerFactory.getLogger(authPermController.class);
	
	@Autowired(required=true)
    private authPermService authService;
	
	/*********************************************************************************************************************************************/
    /************데이터권한관리**********************************************************************************************************************/
	/**
	 * 데이터 권한 리스트 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/authDataGrpSearchUserList.do")
	public NexacroResult authDataGrpSearchUserList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	//user list를 조회한다.
    	List<Map<String,Object>> authDataGrpUserList = authService.authDataGrpSearchUserList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", authDataGrpUserList);
		
		return result;
	}
    /**
	 * 데이터 권한 리스트 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/authDataGrpSearchList.do")
   	public NexacroResult authDataGrpSearchList(@ParamDataSet(name = "dsDetailCond", required = false) Map<String,String> searchMap 
   										, HttpServletRequest request) throws NexacroException{

       	List<Map<String,Object>> authDataGrpDept = authService.authDataGrpSearchDeptList(searchMap); //미등록권한 조회
       	List<Map<String,Object>> authDataGrp	 = authService.authDataGrpSearchDataGrpList(searchMap); //등록권한조회
       	
   		NexacroResult result = new NexacroResult();
   		result.addDataSet("dsRegi", authDataGrp);
   		result.addDataSet("dsUnregi", authDataGrpDept);
   		
   		return result;
   	}
    
    /**
   	 * 데이터 권한 리스트 저장
   	 * @param searchMap		: 조회 조건 Dataset
   	 * @return result		: 조회 데이터 셋
   	 */
    @RequestMapping(value = "/authDataGrpSaveDataGrpList.do")
	public NexacroResult authDataGrpSaveDataGrpList(@ParamDataSet(name = "dsRegi", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	authService.authDataGrpSaveDataGrpList(saveList, loginUserInfo);
	
		NexacroResult result = new NexacroResult();	
		return result;
	}  
    
    /*********************************************************************************************************************************************/
    /************그룹권한메뉴관리**********************************************************************************************************************/
    /**
	 * 그룹권한메뉴관리 권한목록조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/premGrpList.do")
	public NexacroResult premGrpList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premGrpList = authService.premGrpList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", premGrpList);
		
		return result;
	}
    
    /**
	 * 그룹권한메뉴관리 할당/미할당 메뉴조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/premGrpMenuList.do")
	public NexacroResult premGrpMenuList(@ParamDataSet(name = "dsCondDetail", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premGrpRegiMenuList = authService.premGrpRegiMenuList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsRegiMenu", premGrpRegiMenuList);
		return result;
	}
    
    /**
	 * 그룹권한메뉴관리 권한목록 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePremGrpList.do")
	public NexacroResult savePremGrpList(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	authService.savePremGrpList(saveList, loginUserInfo);
	
		NexacroResult result = new NexacroResult();	
		return result;
	} 
    
    /**
	 * 그룹권한메뉴관리 할당메뉴 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePremMenuList.do")
	public NexacroResult savePremMenuList(@ParamDataSet(name = "dsRegiMenu", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsRegiMenuDel", required = false) List<Map<String,Object>> saveListDel
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	if(saveList.size()>0) authService.savePremMenuList(saveList, loginUserInfo);
    	if(saveListDel.size()>0) authService.deletePremMenuList(saveListDel, loginUserInfo);

		NexacroResult result = new NexacroResult();	
		return result;
	} 
    
    /************그룹권한메뉴관리-추가버튼관리 팝업**********************************************************************************************************************/
    /**
	 * 그룹권한메뉴관리 권한목록조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPremGrpAddBtnList.do")
	public NexacroResult searchPremGrpAddBtnList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premGrpAddBtnList = authService.searchPremGrpAddBtnList(searchMap);
    	List<Map<String,Object>> prgmAddBtnList = authService.searchPrgmAddBtnList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPrem", premGrpAddBtnList);
		result.addDataSet("dsPrgm", prgmAddBtnList);
		return result;
	}
    
    /**
	 * 그룹권한메뉴관리 할당메뉴 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePremGrpAddBtnList.do")
	public NexacroResult savePremGrpAddBtnList(@ParamDataSet(name = "dsPrem", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	authService.savePremGrpAddBtnList(saveList, loginUserInfo);
	
		NexacroResult result = new NexacroResult();	
		return result;
	} 
    /*********************************************************************************************************************************************/
    /************권한별 사용자 관리********************************************************************************************************************/
    /**
	 * 권한별 사용자 관리 - 권한 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPremList.do")
	public NexacroResult searchPremList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premList = authService.searchPremList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", premList);
		return result;
	}
    
    /**
	 * 권한별 사용자 관리 -권한 대상 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPremUserList.do")
	public NexacroResult searchPremUserList(@ParamDataSet(name = "dsCondDetail", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premUserList = authService.searchPremUserList(searchMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPremTarget", premUserList);
		return result;
	}
    
    /**
	 * 권한별 사용자 관리 -권한 대상 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePremUserList.do")
	public NexacroResult savePremUserList(@ParamDataSet(name = "dsPremTarget", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	authService.savePremUserList(saveList, loginUserInfo);
	
		NexacroResult result = new NexacroResult();	
		return result;
	} 
    /*********************************************************************************************************************************************/
    /************권한별 사용자 관리 사용자 선택 팝업*********************************************************************************************************/
    /**
	 * 권한별 사용자 관리 사용자 선택 팝업
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPermAllUser.do")
	public NexacroResult searchPermAllUser(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> userList = authService.searchPermAllUser(searchMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", userList);
		return result;
	}
    
    /*********************************************************************************************************************************************/
    /************개인별 권한 관리*********************************************************************************************************/
    /**
	 * 권한별 사용자 관리 사용자 선택 팝업
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPersonalPremUserList.do")
	public NexacroResult searchPersonalPremUserList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> userList = authService.searchPersonalPremUserList(searchMap);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", userList);
		return result;
	}
    
    /**
	 * 권한별 사용자 관리 사용자 선택 팝업
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPersonalPremMenuList.do")
	public NexacroResult searchPersonalPremMenuList(@ParamDataSet(name = "dsCondDetail", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> regiList = authService.searchPersonalPremRegiMenuList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsRegiMenu", regiList);
		return result;
	}
    
    /**
	 * 권한별 사용자 관리 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePersonalPremUserList.do")
   	public NexacroResult savePersonalPremUserList(@ParamDataSet(name = "dsRegiMenu", required = false) List<Map<String,Object>> saveList
   										, @ParamDataSet(name = "dsRegiMenuDel", required = false) List<Map<String,Object>> saveListDel
   										, HttpServletRequest request) throws NexacroException{
       	NexterUtil NexUtil = new NexterUtil();

       	// Login 사용자 정보를 받은 Map
       	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
       	loginUserInfo = NexUtil.getUserInfoMap(request);
       	
       	//저장한다.
       	if(saveList.size()>0) authService.savePersonalPremUserList(saveList, loginUserInfo);
       	if(saveListDel.size()>0) authService.deletePersonalPremUserList(saveListDel, loginUserInfo);

   		NexacroResult result = new NexacroResult();	
   		return result;
   	} 
    
    /*********************************************************************************************************************************************/
    /************개인별 권한 관리 추가버튼 관리*********************************************************************************************************/
    /**
	 * 그룹권한메뉴관리 권한목록조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPremUserAddBtnList.do")
	public NexacroResult searchPremUserAddBtnList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> premUserAddBtnList = authService.searchPremUserAddBtnList(searchMap);
    	List<Map<String,Object>> prgmAddBtnList     = authService.searchPrgmUserAddBtnList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsPrem", premUserAddBtnList);
		result.addDataSet("dsPrgm", prgmAddBtnList);
		return result;
	}
    
    /**
	 * 그룹권한메뉴관리 할당메뉴 저장
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/savePremUserAddBtnList.do")
	public NexacroResult savePremUserAddBtnList(@ParamDataSet(name = "dsPrem", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	//저장한다.
    	authService.savePremUserAddBtnList(saveList, loginUserInfo);
	
		NexacroResult result = new NexacroResult();	
		return result;
	} 
    
    /*********************************************************************************************************************************************/
    /************개인별 권한 메뉴 조회*********************************************************************************************************/
    @RequestMapping(value = "/searchPermPersonMenuList.do")
	public NexacroResult searchPermPersonMenuList(@ParamDataSet(name = "dsCondDetail", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> permPersonMenuList = authService.searchPermPersonMenuList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsRegiMenu", permPersonMenuList);
		return result;
	}
    
    /**
	 * 메뉴별 권한 관리 - 권한 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPermMenuList.do")
	public NexacroResult searchPermMenuList(@ParamDataSet(name = "dsCondDetail", required = false) Map<String,String> searchMap 
										, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> permListGrp = authService.searchPermMenuGrpList(searchMap);
    	List<Map<String,Object>> permListUser = authService.searchPermMenuUserList(searchMap);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsGrp", permListGrp);
		result.addDataSet("dsUser", permListUser);
		return result;
	}    
    
}
