package com.unisales.ubidcs.service;

import java.util.List;
import java.util.Map;

import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   
 * @desc    로그인 처리 서비스.
 * -        
 * @package com.wms.login.service
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
public interface meetService {
	
	public List<Map<String,Object>> searchBase(Map<String,Object> queryMap, Map<String,Object> search);
	
	public Map<String,Object> searchBaseOne(Map<String,Object> queryMap, Map<String,Object> search);
	
	public List<Map<String,Object>> searchCheck(Map<String,Object> queryMap, List<Map<String,Object>> search);

	public List<Map<String,Object>> searchBasePaging(Map<String,Object> queryMap, Map<String,Object> search);
	
	public List<Map<String,Object>> searchBasePagingCnt(Map<String,Object> queryMap, Map<String,Object> search);
	
	public List<Map<String,Object>> searchBaseFileList(Map<String,Object> queryMap, Map<String,String> search);
	
	public void saveBaseContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo);
	
	public void saveMasterDetailContents(Map<String,Object> queryMap, List<Map<String, Object>> saveMaterList, List<Map<String, Object>> saveDetailList, Map<String, Object> userInfo);
	
	public void saveBaseMergeContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo);
	
	public void saveMapContents(Map<String,Object> queryMap, Map<String, Object> saveMap, Map<String, Object> userInfo);
	
	public void deleteContents(Map<String,Object> queryMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo);
	
	public void deleteAndInsertContents(Map<String,Object> queryMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo);
	
	public void insertContents(Map<String,Object> queryMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo);
	
	public void updateContents(Map<String,Object> queryMap, Map<String, Object> saveMap);
	
	public void deleteContents(Map<String,Object> queryMap, Map<String, Object> saveMap);
	
	public void saveFileInsert(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo);
	
	public void deleteFile(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo);
	
	public DataSet executeProcedure(Map<String,Object> queryMap, Map<String, Object> searchMap, Map<String, Object> userInfo);
}
