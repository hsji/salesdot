package com.unisales.sytm.code.service;

import java.util.List;
import java.util.Map;

import com.nexacro.java.xapi.data.DataSet;

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
public interface codeService {
	/*대분류코드전체조회*/
	public List<Map<String,Object>> selectCommonCodeGubunAll(Map<String,String> search);	
	/*소분류코드전체조회*/
	public List<Map<String,Object>> selectCommonCodeAll(Map<String,String> search);	
	/*대분류코드 머지문*/
	public void insertCommonCodeGubunAll(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/*소분류코드 머지문*/
	public void insertCommonCodeAll(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 공통코드 목록 조회 */
	public List<Map<String,Object>> searchPopComCodeList(Map<String,String> search);	
	/* 공통코드 목록 조회 */
	public List<Map<String,Object>> searchComCodeList(Map<String,String> search);
	/* 공통코드 통합 조회 */
	public List<Map<String,Object>> searchUnionCommonCode(Map<String,String> search);
	// 공통코드 통합 전체 로우 갯수 조회
	public List<Map<String,Object>> searchUnionCommonCodeCnt(Map<String,String> search);
	/* 대분류코드 저장한다. */
	public void saveComCode(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 대분류코드를 삭제한다. */
	public void deleteComCode(List<Map<String,Object>> delList);	
	/* 소분류코드 저장한다. */
	public void savePopComCode(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 소분류코드를 삭제한다. */
	public void deletePopComCode(List<Map<String,Object>> delList);	
	// 대분류코드 중복체크
	public List<Map<String,Object>> checkMasterCommonCode(List<Map<String,String>> search);	
	//소분류 코드 중복체크
	public List<Map<String,Object>> checkDetailCommonCode(List<Map<String,String>> search);
	
	/*자산조회*/
	public List<Map<String,Object>> searchAssetList(Map<String,String> search);	
	/* 자산정보 저장한다. */
	public void saveAssetList(List<Map<String,Object>> saveList, Map<String,Object> userInfo);
	
	/*IP조회*/
	public List<Map<String,Object>> searchIPList(Map<String,String> search);	
	/* 자산정보 저장한다. */
	public void saveIPList(List<Map<String,Object>> saveList, Map<String,Object> userInfo);	
	/* 칼렌다생성. */
	public DataSet createCalendarList(Map<String, String> searchMap, Map<String,Object> userInfo);	
	/* 칼렌다 조회 */
	public List<Map<String,Object>> searchCalendarList(Map<String,String> search);
	/* 소분류코드 저장한다. */
	public void saveCalendarList(List<Map<String,Object>> saveList, Map<String, Object> userInfo);	
	
}
