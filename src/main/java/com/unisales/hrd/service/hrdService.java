package com.unisales.hrd.service;

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
public interface hrdService {
	public List<Map<String,Object>> searchSendMailResultList(Map<String,Object> searchMap);

	public List<Map<String,Object>> searchSalaryUserMailList();
	
	public List<Map<String,Object>> searchMailContents();
	
	public void saveMailContents(Map<String,Object> saveMap, Map<String, Object> userInfo);	
	
	public void saveMailResult(Map<String,Object> saveMap);
	
	
	public List<Map<String,Object>> searchWorkList(Map<String,Object> searchMap);
	public List<Map<String,Object>> searchWeekWorkList(Map<String,Object> searchMap);
	public List<Map<String,Object>> searchPreWorkList(Map<String,Object> searchMap);
	
	public void deleteWorkList(Map<String,Object> searchMap);
	public void saveWorkList(List<Map<String,Object>> saveMap, Map<String, Object> userInfo);

}
