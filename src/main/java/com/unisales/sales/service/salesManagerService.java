package com.unisales.sales.service;

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
public interface salesManagerService {

	public void savePresalseList(List<Map<String,String>> query, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception;
	/* 조회 */
	public List<Map<String,Object>> searchList(Map<String,String> query, Map<String,Object> search, UserInfo userInfo);	
	/* 조회 */
	public Map<String,Object> searchMap(Map<String,String> query, Map<String,Object> search, UserInfo userInfo);		
}
