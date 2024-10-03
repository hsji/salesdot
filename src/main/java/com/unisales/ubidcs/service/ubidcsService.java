package com.unisales.ubidcs.service;

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
public interface ubidcsService {

	public void saveDocuQueryMap(Map<String,String> queryMap, Map<String,Object> docMap);
	
	public void saveDocuQueryList(Map<String,String> queryMap, List<Map<String,Object>> docList);

	public Map<String,Object> searchDocuQueryMap(Map<String,String> queryMap, Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuQueryList(Map<String,String> queryMap, Map<String, Object> search);
}
