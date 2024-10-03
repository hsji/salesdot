package com.unisales.sytm.org.service;

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
public interface orgDeptService {
	//공통(common)에서 사용될 부서 목록조회
	public List<Map<String,Object>> selectCommonDeptList(Map<String,String> search);
	/* 부서 정보 조회 */
	public List<Map<String,Object>> selectDeptList(Map<String,String> search);
	/* 사용자 ID체크 */
	public List<Map<String,Object>> checkDeptCd(List<Map<String,String>> search);	
	/* 사용자 정보를 저장한다. */
	public void saveDeptInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 사용자 정보를 삭제한다. */
	public void deleteDeptInfo(List<Map<String,Object>> delList);
	//조직도
	public List<Map<String,Object>> selectCompanyMapList();
	//조직도
	public List<Map<String,Object>> selectCompanyDocMapList();	
}
