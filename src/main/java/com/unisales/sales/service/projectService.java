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
public interface projectService {

	public void saveContractList(Map<String,Object> datasetMap, UserInfo userInfo) throws Exception;
	/* 조회 */
	public List<Map<String,Object>> searchList(Map<String,String> query, Map<String,Object> search, UserInfo userInfo);	
	/* 조회 */
	public Map<String,Object> searchMap(Map<String,String> query, Map<String,Object> search, UserInfo userInfo);		

	public void saveSP_Contract_R02(Map<String,Object> dsIn, UserInfo userInfo) throws Exception;
	
	/* 조회 */
	public List<Map<String,Object>> SP_PurchaseProduct_S03(Map<String,Object> dsInput, UserInfo userInfo);	

	/* 조회 */
	public List<Map<String,Object>> SP_PurchaseProduct_S04(Map<String,Object> search, UserInfo userInfo);	

	/* 조회 */
	public List<Map<String,Object>> SP_PurchaseProduct_S02(Map<String,Object> search, UserInfo userInfo);	
	
	public Map<String,Object> saveSP_PurchaseS_R01(Map<String,Object> datasetMap, UserInfo userInfo) throws Exception;
	
	public Map<String,Object> saveSP_PurchaseP_R01(Map<String,Object> datasetMap, UserInfo userInfo) throws Exception;
	
}
