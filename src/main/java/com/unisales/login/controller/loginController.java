package com.unisales.login.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.comm.board.controller.boardController;
import com.unisales.login.service.loginService;
import com.unisales.sytm.log.service.logSytmService;
import com.unisales.sytm.org.service.orgUserService;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;
import com.unisales.util.UserInfo;
import com.nexacro.java.xapi.data.ColumnHeader;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataTypes;
import com.nexacro.java.xapi.util.StringUtils;

/**
 * <pre>
 * @title   Login Controller
 * @desc    사용자 Login Controller         
 * @package com.dxtobe.login.controller
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
public class loginController {
	private Logger log = LoggerFactory.getLogger(loginController.class);
	int LOGIN_FIAL_MAX_CNT = 5;
	
	@Autowired(required=true)
    private loginService LoginService;
	@Autowired(required=true)
    private logSytmService LogService;
	@Autowired(required=true)
    private orgUserService orgUserService;
	@Autowired(required=true)
	private ApplicationContext applicationContext;
	/* Login 처리 frameLogin */   
    /**
	 * Block 사용자 여부 체크 및 로그인 처리
	 * @param searchMap		: 조회 조건 Dataset
	 * @param sSytmFlagCd	: 시스템 코드
	 * @return
	 */
    @RequestMapping(value = "/Login.do")
	public NexacroResult LoginProcess(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
									    , @ParamDataSet(name = "gdsLoginLog", required = false) Map<String,String> loginLogMap
										, @ParamVariable(name="sSytmFlagCd")    String      sSytmFlagCd
										, HttpServletRequest request) throws NexacroException{

		// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	userInfo.setStrUserConSysFlag(sSytmFlagCd);	// 접속한 시스템 코드 저장
    	
    	searchMap.put("SYSTM_FLAG_CD_SRV", sSytmFlagCd);						// 시스템 코드를 Mapper에 추가한다.
    	searchMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());	// 시스템 코드를 Mapper에 추가한다.
    	
    	// PASSWORD 복호화
    	String decryptContents = "";
    	try {
    		String pwd = (String) searchMap.get("USER_PWD");
    		decryptContents = NexaUtil.getDectypeValue(request, pwd);
	    	searchMap.put("USER_PASSWORD", decryptContents);
    	} catch (Exception e) {
    		e.printStackTrace();
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
    	}
    	
    	// Login 사용자 정보를 받을 Object
    	Map<String,Object> loginUserInfo = null;
    					   loginUserInfo = LoginService.Login(searchMap);
		
    	NexacroResult result = new NexacroResult();
		int nRow;
		
		//리턴에러코드/에러메세지 세팅
		if(loginUserInfo == null) {
			result.setErrorCode(-200);
			result.setErrorMsg("사용자 정보가 맞지 않습니다.\n확인 후 다시 시도하여 주십시오.");
		}else {
			result.setErrorCode(0);
			result.setErrorMsg("사용자 Login이 성공했습니다.");
			userInfo.setUserInfo(loginUserInfo);
			
			//로그인 로그 저장
			loginUserInfo.put("LOG_TYPE", "LOGIN");
			
			NexterUtil NexUtil = new NexterUtil();
			
			Map<String, Object> userInfo2 = new HashMap<String, Object>();
								userInfo2 = NexUtil.getUserInfoMap(request);
			
			loginUserInfo.put("COMPANY_CD"		, loginUserInfo.get("COMPANY_CD"));
			loginUserInfo.put("BROWSER_CD"		, loginLogMap.get("BROWSER_CD"));
			loginUserInfo.put("BROWSER_VERSION" , loginLogMap.get("BROWSER_VERSION"));
			loginUserInfo.put("OS_CD"			, loginLogMap.get("OS_CD"));
			loginUserInfo.put("OS_VERSION"		, loginLogMap.get("OS_VERSION"));
			loginUserInfo.put("SCREEN_HEIGHT"	, loginLogMap.get("SCREEN_HEIGHT"));
			loginUserInfo.put("SCREEN_WIDTH"	, loginLogMap.get("SCREEN_WIDTH"));
			loginUserInfo.put("MOB_YN"			, loginLogMap.get("MOB_YN"));
			
			LogService.saveLog(loginUserInfo, userInfo2); //로그인로그 세팅
		}
		
		result = searchBaseInfo(userInfo, result);
		
		result.addDataSet("dsLoginUser", loginUserInfo);
		return result;
	}
    
    
	/* Login 처리 frameLogin */   
    /**
	 * Block 사용자 여부 체크 및 로그인 처리
	 * @param searchMap		: 조회 조건 Dataset
	 * @param sSytmFlagCd	: 시스템 코드
	 * @return
	 */
    @RequestMapping(value = "/LoginSession.do")
	public NexacroResult LoginSession(HttpServletRequest request) throws NexacroException{

    	NexacroResult result = new NexacroResult();
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	try {
        	if(userInfo != null && userInfo.getStrUserId() != null) {
        		
        		Map<String, String> searchMap = new HashMap<String, String>(); 
        		searchMap.put("COMPANY_CD", userInfo.getStrCompanyCd());
        		searchMap.put("USER_ID", 	userInfo.getStrUserId());
        		searchMap.put("EMP_NO", 	userInfo.getStrEmpNo());
        		
            	// Login 사용자 정보를 받을 Object
            	Map<String,Object> loginUserInfo = null;
            					   loginUserInfo = LoginService.LoginSession(searchMap);        		
        		
            	result.addDataSet("dsLoginUser", loginUserInfo);
    	    	
    	    	result = searchBaseInfo(userInfo, result);
    			
        		DataSet dsKey = NexaUtil.createSecureDataset(request, "dsKey");
				result.addDataSet(dsKey);

        	} else {    		
	    		
        		DataSet dsKey = NexaUtil.createSecureDataset(request, "dsKey");
				result.addDataSet(dsKey);
        	}
        	
            Map<String, String> searchMap = new HashMap<>();
            searchMap.put("MSGE", null);
        	
        	// Message 조회
    		List<Map<String,Object>> msgInfo  = LoginService.searchMessage();
    		result.addDataSet("dsMessage", msgInfo);        	
        	// 회사코드 조회
    		searchMap.put("HCL_CD", "COMP");
    		List<Map<String,Object>> companyInfo  = LoginService.searchAllCodeData(searchMap);
    		result.addDataSet("dsCompany", companyInfo);        	
			
    	} catch(Exception e) {
    		e.printStackTrace();
			result.setErrorCode(-900);
			result.setErrorMsg("msg.keyfail");   
			result.addVariable("errorstring", e.getMessage());
    	}
		
		return result;
	}    
    
    /**
	 * 로그인한 사용자의 기본 정보들을 조회한다.
	 * (Message, Menu, 코드데이터, MyMenu, 개인설정정보, 추가버튼 정보, 컴포넌트 정보 등) 
	 * @param searchMap : 조회조건
	 * @return
	 */
	public NexacroResult searchBaseInfo(UserInfo userInfo, NexacroResult result) throws NexacroException{
    	
    	// 권한에 따른 메뉴 정보 조회
    	List<Map<String,Object>> menuInfo = LoginService.searchMenuInfo(userInfo);
    	// 권한에 따른 추가버튼 정보 조회
    	List<Map<String,Object>> addBtnInfo = LoginService.searchAddBtn(userInfo);
    	// 공통코드 조회
    	List<Map<String,Object>> codeInfo = LoginService.searchComCode(userInfo);
    	// MyMenu 조회
		List<Map<String,Object>> myMenuInfo = LoginService.searchMyMenu(userInfo);
		
		result.addDataSet("dsComboData"	, codeInfo);
		result.addDataSet("dsMyMenu"	, myMenuInfo);
		result.addDataSet("dsMenu"		, menuInfo);
		result.addDataSet("dsAddBtn"	, addBtnInfo);
		
		return result;
	} 

	/**
	 * 사용자 정보 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchUserSetting.do")
	public NexacroResult searchUserSetting(HttpServletRequest request) throws NexacroException{

       	// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");

    	// 서버시스템 메시지를 조회한다.
    	List<Map<String,Object>> searchList = LoginService.searchUserSetting(userInfo);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", searchList);
		
		return result;
	}
    
    /**
	 * 사용자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveUserSetting.do")
	public NexacroResult saveUserSetting(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 시스템 메시지를 저장한다.
    	orgUserService.saveUserSetting(saveList, loginUserInfo);
		NexacroResult result = new NexacroResult();
		return result;
	}     
    
    /**
	 * Block 사용자 비밀번호 체크
	 * @param searchMap		: 조회 조건 Dataset
	 * @param sSytmFlagCd	: 시스템 코드
	 * @return
	 */
    @RequestMapping(value = "/searchCurPassword.do")
	public NexacroResult searchCurPassword(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
									    , HttpServletRequest request) throws NexacroException{
  	  	

    	// Login 사용자 정보를 받을 Object
    	Map<String,Object> loginUserInfo = null;
    					   loginUserInfo = LoginService.searchCurPassword(searchMap);
		
    	NexacroResult result = new NexacroResult();
		
		//리턴에러코드/에러메세지 세팅
		if(loginUserInfo == null) {
			result.setErrorCode(-200);
			result.setErrorMsg("비밀번호가 맞지 않습니다.\n확인 후 다시 시도하여 주십시오.");
		}else {
			result.setErrorCode(0);
			result.setErrorMsg("성공");
		}
		result.addDataSet("dsLoginUser", loginUserInfo);
		return result;
	}
    
    /**
	 * 사용자 비밀번호 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveUserPassword.do")
	public NexacroResult saveUserPassword(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> saveMap
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();
    	
    	// PASSWORD 복호화
    	String decryptContents = "";
    	try {
    		String pwd = (String) saveMap.get("CUR_PASSWORD");
    		decryptContents = NexaUtil.getDectypeValue(request, pwd);
    		saveMap.put("CUR_PASSWORD", decryptContents);
	    	
    		pwd = (String) saveMap.get("NEW_PASSWORD");
    		decryptContents = NexaUtil.getDectypeValue(request, pwd);
    		saveMap.put("NEW_PASSWORD", decryptContents);
    	} catch (Exception e) {
    		e.printStackTrace();
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
    	}
    	    	

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	saveMap.put("EMP_NO", loginUserInfo.get("EMP_NO"));
    	
    	// 시스템 메시지를 저장한다.
    	Map<String, Object> userMap = orgUserService.saveUserPassword(saveMap, loginUserInfo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUser", userMap);
		
		return result;
	}   
    
    /**
	 * 사용자 비밀번호 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/initUserPassword.do")
	public NexacroResult initUserPassword(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> saveMap
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();
    	
    	// PASSWORD 복호화
    	String decryptContents = "";
    	try {
    		String pwd = (String) saveMap.get("PASSWORD");
    		decryptContents = NexaUtil.getDectypeValue(request, pwd);
    		saveMap.put("PASSWORD", decryptContents);
    	} catch (Exception e) {
    		e.printStackTrace();
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
    	}
    	    	

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 시스템 메시지를 저장한다.
    	Map<String, Object> userMap = orgUserService.initUserPassword(saveMap, loginUserInfo);
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUser", userMap);
		return result;
	}       
    
    
    /**
	 * 공통코드조회
	 * @param searchMap : 조회조건
	 * @return
	 */
    @RequestMapping(value = "/searchCodeData.do")
	public NexacroResult searchCodeData(@ParamDataSet(name = "input1", required = false) List<Map<String,String>> searchMap 
			, HttpServletRequest request) throws NexacroException{

    	List<Map<String,Object>> codeInfo = null;
    	Map<String, String> tmpCbInfo = null;
    	Map<String, Object> style = null;
    	String DEFAULT_CODE = "";
    	  
    	NexacroResult result = new NexacroResult();
    	
        for(Map<String, String> row : searchMap) {

            tmpCbInfo = new HashMap<String, String>();
            tmpCbInfo.put("HCL_CD", row.get("codeGroup"));

        	// 공통코드 조회
            codeInfo = LoginService.searchCodeData(tmpCbInfo);
            
            if (!StringUtils.isEmpty(row.get("style"))){

            	style = new HashMap<String, Object>();            	
            	style.put("SSC_CD"			, DEFAULT_CODE);
                
            	switch (row.get("style")) {
	                case "A":
	                	style.put("SSC_CD_KORN_NM"	, "-전체-");
	                	break;
	                case "S":
	                	style.put("SSC_CD_KORN_NM"	, "-선택-");
	                	break;
	                case "R":
	                	style.put("SSC_CD_KORN_NM"	, "전체");
	                	break;
	                case "N":
	                	style.put("SSC_CD_KORN_NM"	, "");	
	                    break;
	                default:
	                    break;	            	
	            }
            	codeInfo.add(0, style);
            	
            }
            result.addDataSet(row.get("dsOut")	, codeInfo);

        }
    	
		
		return result;
	}     
    

    
    
}
