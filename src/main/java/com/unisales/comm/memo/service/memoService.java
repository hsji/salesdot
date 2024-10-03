package com.unisales.comm.memo.service;

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
public interface memoService {
	
	/**********************************************************게시판 컨텐츠**********************************************************************/
	/* 메모 조회 */
	public List<Map<String,Object>> searchMemoList(Map<String,String> search, Map<String,Object> userInfo);	

	/* 메모 상세 조회 */
	public Map<String,Object> searchMemoMaxSeq(Map<String,Object> userInfo);	
	
	/* 메모 상세 조회 */
	public Map<String,Object> searchMemoDetail(Map<String,Object> search, Map<String,Object> userInfo);	
	
	/* 메모 내용 저장 */
	public void saveMemoContents(List<Map<String,Object>> saveList, Map<String, Object> userInfo);	

}
