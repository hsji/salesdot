package com.unisales.sales.service;

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
public interface salesService {

	public List<Map<String,Object>> searchCustomerList(Map<String,String> search);
	
	public void saveCustomerInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	public List<Map<String,Object>> searchProjectList(Map<String,String> search);
	
	public void saveProjectInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo, String path);	

	public List<Map<String,Object>> searchProjectDetailList(Map<String,String> search);
	
	public List<Map<String,Object>> searchProjectDetailFileList(Map<String,String> search);
	
	public void saveProjectDetailInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo, String path);	
	
	public void saveSalesFileInsert(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	public void deleteSalesFile(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
}
