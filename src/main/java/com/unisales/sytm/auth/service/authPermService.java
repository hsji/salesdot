package com.unisales.sytm.auth.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title   bizAuthService
 * @desc    System 정보 관리 권한관리
 * -        
 * @package com.dxtobe.sytm.service
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
public interface authPermService {
	/*************************데이터그룹관리*************************************/
	//사용자조회
	public List<Map<String,Object>> authDataGrpSearchUserList(Map<String,String> search);	
	//전체부서조회
	public List<Map<String,Object>> authDataGrpSearchDeptList(Map<String,String> search);
	//데이터그룹 조회
	public List<Map<String,Object>> authDataGrpSearchDataGrpList(Map<String,String> search);
	//데이터그룹 저장
	public void authDataGrpSaveDataGrpList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/*************************그룹권한메뉴관리*************************************/
	//그룹권한리스트 조회
	public List<Map<String,Object>> premGrpList(Map<String,String> search);	
	//그룹권한 등록메뉴 조회
	public List<Map<String,Object>> premGrpRegiMenuList(Map<String,String> search);	
	//그룹권한 저장
	public void savePremGrpList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	//그룹권한 메뉴 저장
	public void savePremMenuList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	//그룹권한 메뉴 삭제
	public void deletePremMenuList(List<Map<String,Object>> saveListDel, Map<String, Object> userInfo);
	
	/*************************그룹권한메뉴관리-추가버튼관리 팝업*************************************/
	//권한 추가버튼관리 조회
	public List<Map<String,Object>> searchPremGrpAddBtnList(Map<String,String> search);	
	//프로그램 추가버튼 리스트 조회
	public List<Map<String,Object>> searchPrgmAddBtnList(Map<String,String> search);	
	//권한 추가버튼 저장
	public void savePremGrpAddBtnList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/*************************권한별 사용자 관리*************************************/
	//권한리스트 조회
	public List<Map<String,Object>> searchPremList(Map<String,String> search);	
	//권한별 사용자 조회
	public List<Map<String,Object>> searchPremUserList(Map<String,String> search);	
	//권한별 사용자 저장
	public void savePremUserList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/*************************권한별 사용자 관리 사용자 선택 팝업*************************************/
	//사용자 전체 리스트 조회
	public List<Map<String,Object>> searchPermAllUser(Map<String,String> search);	

	/*************************개인별 권한 관리*************************************/
	//사용자 목록 조회
	public List<Map<String,Object>> searchPersonalPremUserList(Map<String,String> search);	
	//등록된 권한 메뉴 조회
	public List<Map<String,Object>> searchPersonalPremRegiMenuList(Map<String,String> search);	
	//미등록된 메뉴 조회
	public List<Map<String,Object>> searchPersonalPremUnRegiMenuList(Map<String,String> search);	
	//권한 등록 저장
	public void savePersonalPremUserList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	//등록권한 삭제
	public void deletePersonalPremUserList(List<Map<String,Object>> saveListDel, Map<String, Object> userInfo);
	
	/*************************개인권한메뉴관리-추가버튼관리 팝업*************************************/
	//사용자별 권한 추가 버튼 목록 조회
	public List<Map<String,Object>> searchPremUserAddBtnList(Map<String,String> search);	
	//프로그램추가버튼 목록 조회
	public List<Map<String,Object>> searchPrgmUserAddBtnList(Map<String,String> search);	
	//추가버튼 저장
	public void savePremUserAddBtnList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/*************************개인별 권한 메뉴 조회*************************************/
	//개인별 권한에 따른 메뉴 리스트 조회
	public List<Map<String,Object>> searchPermPersonMenuList(Map<String,String> search);	
	
	/*************************메뉴별 권한 조회*************************************/
	//메뉴별 권한 리스트 조회
	public List<Map<String,Object>> searchPermMenuGrpList(Map<String,String> search);		
	
	//메뉴별 권한 리스트 조회
	public List<Map<String,Object>> searchPermMenuUserList(Map<String,String> search);	
}
