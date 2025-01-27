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
public interface techService {

	public void TR_RequestSIStaffReg_R01(Map<String,Object> datasetMap, UserInfo userInfo) throws Exception;
}
