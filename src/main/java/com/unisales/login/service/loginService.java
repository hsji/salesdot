package com.unisales.login.service;

import java.util.List;
import java.util.Map;

import com.unisales.util.UserInfo;

/**
 * <pre>
 * @title   
 * @desc    로그인 처리 서비스.
 * -        
 * @package com.dxtobe.login.service
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
public interface loginService {
/* Login 처리 frameLogin */   	
	/* Block 사용자 여부 체크 */
	public Map<String,String> searchBlockUser(Map<String,String> search);
	/* 로그인 처리 사용자가 유호한 사용자인지 확인 */
	public Map<String,Object> Login(Map<String,String> search);
	/* 로그인 처리 사용자가 유호한 사용자인지 확인 */
	public Map<String,Object> LoginSession(Map<String,String> search);
	/* 로그인을 시도한 사용자 ID의 성공을 저장하고 Fail Count를 초기화 한다. */
	public void saveLoginSuccessCnt(UserInfo userInfo);
	/* 로그인을 시도한 사용자 ID의 실패 건수를 저장한다. */
	public void saveLoginFailCnt(Map<String,String> userInfo);
	/* 로그인하는 사용자가 이전에 특정 시스템 로그인 실패 건수를 가져온다. */
	public Map<String,Object> searchLoginFailCnt(Map<String,String> search);
	
	/* 사용자 로그인/로그아웃 로그를 저장한다. */
	public void saveLoginLogInfo(Map<String,Object> loginInfo);	
	
	// 로그인 후 기초정보 조회
	/* 시스템에서 사용하는 메시지 목록을 조회한다. */
	public List<Map<String,Object>> searchMessage();
	/* 시스템에서 사용하는회사 목록을 조회한다. */
	public List<Map<String,Object>> searchAllCodeData(Map<String,String> search);
	/* 시스템에서 사용하는 공통코드 목록을 조회한다. */
	public List<Map<String,Object>> searchComCode(UserInfo userInfo);	
	/* MyMenu를 조회한다. */
	public List<Map<String,Object>> searchMyMenu(UserInfo userInfo);
	/* 개인설정정보를 조회한다. */
	public List<Map<String,Object>> searchPersonalSetting(UserInfo userInfo);
	// 추가버튼 정보 조회
	public List<Map<String,Object>> searchAddButtonInfo(UserInfo userInfo);
	// 컴포넌트 설정 정보 조회
	public List<Map<String,Object>> searchCompSetInfo(UserInfo userInfo);
	// Logo Image 정보 조회
	public List<Map<String,Object>> searchLogoImgInfo(UserInfo userInfo);	
	// 권한에 따른 메뉴 정보 조회
	public List<Map<String,Object>> searchMenuInfo(UserInfo userInfo);	
	// 권한에 따른 추가버튼 정보 조회
	public List<Map<String,Object>> searchAddBtn(UserInfo userInfo);	
	/* 사용자 테마 정보 조회 */
	public List<Map<String,Object>> searchUserSetting(UserInfo userInfo);
	/* 사용자 비밀번호 확인 */
	public Map<String,Object> searchCurPassword(Map<String,String> search);
	/* 공통코드조회 */
	public List<Map<String,Object>> searchCodeData(Map<String,String> search);	

}
