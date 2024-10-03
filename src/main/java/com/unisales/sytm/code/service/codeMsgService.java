package com.unisales.sytm.code.service;

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
public interface codeMsgService {
	/* 시스템 메시지 조회 */
	public List<Map<String,Object>> searchSystemMsg(Map<String,String> search);
	/* 신규등록 메시지 코드 존재여부 체크 */
	public List<Map<String,Object>> checkNewMsgCode(List<Map<String,String>> search);	
	/* 시스템 메시지를 저장한다. */
	public void saveMsg(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
}
