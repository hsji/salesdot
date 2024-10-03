package com.unisales.sytm.auth.service;

import java.util.List;
import java.util.Map;

import com.unisales.util.UserInfo;

/**
 * <pre>
 * @title   bizProgService
 * @desc    System 정보 관리 프로그램관리
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
public interface authMenuService {
	
	/* 메뉴 목록 조회 */
	public List<Map<String,Object>> searchMenuList(Map<String,String> search);
	/* 메뉴 정보 변경사항을 저장한다. */
	public void saveMenuList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 선택한 메뉴 정보를 삭제한다. */
	public void deleteMenuList(List<Map<String,Object>> delList);	
	
	/* 마이메뉴 조회 */
	public List<Map<String,Object>> searchMyMenu(UserInfo userInfo);	
	/* 마이메뉴를 저장한다. */
	public void saveMyMenu(List<Map<String,Object>> saveList, Map<String, Object> userInfo);	
}
