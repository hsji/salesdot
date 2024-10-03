package com.unisales.sytm.auth.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

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
public interface authProgService {
	
	//프로그램 리스트 조회
	public List<Map<String,Object>> searchProgramList(Map<String,String> search);	
	//프로그램리스트 저장
	public void saveProgramList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);	
	//프로그램 추가버튼 리스트 조회
	public List<Map<String,Object>> searchProgramAddBtnList(Map<String,String> search);	
	//프로그램리스트 저장
	public void saveProgramAddBtnList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	// 프로그램 매뉴얼 조회
	public Map<String, Object> searchManual(Map<String, Object> searchMap) throws SQLException, IOException;
	// 프로그램 매뉴얼 저장
	public void saveManual(Map<String, Object> saveMap);
	
}
