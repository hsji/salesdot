package com.unisales.sytm.log.service;

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
public interface logSytmService {
	//시스템로그 (로그인로그) 조회
	public List<Map<String,Object>> selectSytmLoginLog(Map<String,String> search);
	//프로그램 호출 현황 조회
	public List<Map<String,Object>> selectPrgmOpenLog(Map<String,String> search);	
	
	/* 시스템로그를 저장한다.. */
	public void saveLog(Map<String,Object> saveList, Map<String, Object> userInfo);
	// 사용자 로그 조회
	public List<Map<String,Object>> selectUserLog(Map<String,String> search);
	
	/*메인화면 로그 관련 데이터 조회*/
	//os별 접속현황
	public List<Map<String,Object>> selectMainLogOs();
	//브라우저별 접속현황
	public List<Map<String,Object>> selectMainLogBrowser();
	//스크린사이즈별 접속 현황
	public List<Map<String,Object>> selectMainLogScreen();
}
