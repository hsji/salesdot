package com.unisales.util;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class NexterUtil {
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	public Map<String,Object> getUserInfoMap(HttpServletRequest request) 
	{
    	// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	
    	//세션 정보를 map형태로 리턴
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	
    	// 개발중
    	if(userInfo == null) {
    		System.out.println("@@@@@@@@@@@@@@ [NO SESSION] @@@@@@@@@@@@@@@@");
	    	loginUserInfo.put("USER_ID_SRV"			, "jihs");
	    	loginUserInfo.put("SYTM_FLAG_CD_SRV"	, "PC");
	    	loginUserInfo.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");
	    	loginUserInfo.put("EMP_NO_SRV"			, "jihs");
	    	loginUserInfo.put("SERVER_CO_CD"		, "UNIDIA");
    	} else {    	
	    	loginUserInfo.put("USER_ID_SRV"			, userInfo.getStrUserId());
	    	loginUserInfo.put("SYTM_FLAG_CD_SRV"	, userInfo.getStrUserConSysFlag());
	    	loginUserInfo.put("USER_CON_IPADDR_SRV"	, userInfo.getStrUserIPAddress());
	    	loginUserInfo.put("EMP_NO_SRV"			, userInfo.getStrEmpNo());
	    	loginUserInfo.put("SERVER_CO_CD"		, userInfo.getStrCompanyCd());
    	}
    	
		return loginUserInfo;
	}
	
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	public Map<String,Object> setUserInfoMap(HttpServletRequest request, Map<String,Object> searchMap) 
	{
    	// Session 정보에 저장되어 있는 사용자 Object를 가져온다.
    	UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
    	
    	// 개발중
    	if(userInfo == null) {
    		searchMap.put("USER_ID_SRV"			, "jihs");
    		searchMap.put("EMP_ID_SRV"			, "jihs");
    		searchMap.put("SYTM_FLAG_CD_SRV"	, "PC");
    		searchMap.put("USER_CON_IPADDR_SRV"	, "127.0.0.1");
    		//searchMap.put("USER_ID"				, "TESTER");
    		//searchMap.put("EMP_NO"				, "TESTER");
    		searchMap.put("COM_CODE_SRV"			, "UNIDIA");
    		searchMap.put("USER_LANG_SRV"			, "KORN");
    		searchMap.put("LOGIN_COMPANY_CD"	, "UNIDIA");
    		searchMap.put("CO_CD"	, "UNIDIA");
    	} else {
    		searchMap.put("USER_ID_SRV"			, userInfo.getStrUserId());
    		searchMap.put("EMP_ID_SRV"			, userInfo.getStrEmpNo());
    		searchMap.put("SYTM_FLAG_CD_SRV"	, userInfo.getStrUserConSysFlag());
    		searchMap.put("USER_CON_IPADDR_SRV"	, userInfo.getStrUserIPAddress());
    		searchMap.put("LOGIN_COMPANY_CD"	, userInfo.getStrCompanyCd());
    		searchMap.put("CO_CD"				, userInfo.getStrCompanyCd());
    		//searchMap.put("USER_ID"				, userInfo.getStrUserId());
    		//searchMap.put("EMP_NO"				, userInfo.getStrEmpNo());
    		//searchMap.put("COM_CODE_SRV"			, userInfo.getStrComCode());
    		//searchMap.put("USER_LANG_SRV"			, userInfo.getStrLang());
    	}
    	
		return searchMap;
	}		
}
