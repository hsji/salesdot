package com.unisales.sytm.org.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title   NexterCommService
 * @desc    Nexter 공통 부문 관리 service
 * -        
 * @package com.dxtobe.comm.service
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
public interface orgUserService {
	//공통(common)에서 사용될 사용자 목록 조회
	public List<Map<String,Object>> selectCommonUserList(Map<String,String> search);
	/* 부서 정보 조회 */
	public List<Map<String,Object>> searchDeptInfo(Map<String,String> search);
	//부서별 사용자 리스트
	public List<Map<String,Object>> searchDeptUserList(Map<String,String> search);
	//부서 및 부서별 사용자 조회. 조직도 화면에서 사용. searchDeptUserList와 구분 위한 임시 넘버링
	public List<Map<String,Object>> searchDeptUserList2(Map<String,String> search);
	/* 사용자 정보 조회 */
	public List<Map<String,Object>> searchUserInfo(Map<String,String> search);
	/* 사용자 정보 조회 */
	public List<Map<String,Object>> searchUserOneInfo(Map<String,String> search);
	/* 사용자 ID체크 */
	public List<Map<String,Object>> checkUserId(List<Map<String,String>> search);	
	/* 사용자 정보를 저장한다. */
	public void saveUserInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 사용자 정보를 삭제한다. */
	public void deleteUserInfo(List<Map<String,Object>> delList);	
	/* 사용자 테마 정보를 저장한다. */
	public void saveUserSetting(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 사용자 비밀전호를 저장한다. */
	public Map<String,Object>  saveUserPassword(Map<String,Object> saveMap, Map<String, Object> userInfo);	
	/* 사용자 비밀전호를 초기화한다. */
	public Map<String,Object> initUserPassword(Map<String,Object> saveMap, Map<String, Object> userInfo);	
}
