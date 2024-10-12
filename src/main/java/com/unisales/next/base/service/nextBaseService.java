package com.unisales.next.base.service;

import java.util.List;
import java.util.Map;
import com.unisales.util.UserInfo;

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
public interface nextBaseService {
	/* 조회 */
	public List<Map<String,Object>> searchList(Map<String,String> query, Map<String,Object> search, UserInfo userInfo);
	 
	/* 조회 */
	public Map<String,Object> searchMap(Map<String,String> query, Map<String,Object> search);
	
	/* 조회 */
	public int searchInt(Map<String,String> query, Map<String,Object> search);
	
	/* 조회 */
	public Map<String,Object> searchUserMap(Map<String,String> query, UserInfo userInfo);
	
	/* 조회 */
	public List<Map<String,Object>> searchUserList(Map<String,String> query, UserInfo userInfo);
	
	/* 저장한다. */
	public void saveList(Map<String,String> query, List<Map<String,Object>> saveList, UserInfo userInfo);
	
	/* 저장한다. */
	public void saveMap(Map<String,String> query, Map<String,Object> saveMap, UserInfo userInfo);
	
	/* 저장한다. */
	public void updateNextData(Map<String,String> query, Map<String,Object> searchMap, Map<String, Object> userInfo);
	
	/* 저장한다. */
	public void updateNextList(Map<String,String> query, Map<String,Object> searchMap, List<Map<String,Object>> dsInput, Map<String, Object> userInfo);
	
	/* 저장한다. */
	public void saveListUserMap(Map<String,String> query, List<Map<String,Object>> saveList, Map<String, Object> userInfo);	
	
	/* 회사정보를 저장한다. */
	public void saveCompanyList(Map<String,Object> paramMap, Map<String,String> query, List<Map<String,Object>> saveList, Map<String, Object> userInfo, String companyCd);		

	/* file map을 추가한다. */
	public void insertFileMapUserMap(String mapperId, Map<String,Object> saveMap, Map<String, Object> userInfo);	
	
	/* file master를 추가한다. */
	public void insertFileListUserMap(String mapperId, List<Map<String,Object>> saveList, Map<String, Object> userInfo);

	/* file map을 추가한다. */
	public void deleteFileMapUserMap(String mapperId, Map<String,Object> saveMap, Map<String, Object> userInfo);	
	
	/* file master를 추가한다. */
	public void deleteFileListUserMap(String mapperId, List<Map<String,Object>> saveList, Map<String, Object> userInfo);

	
}
