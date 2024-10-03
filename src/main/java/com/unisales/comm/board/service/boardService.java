package com.unisales.comm.board.service;

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
public interface boardService {
	
	/**********************************************************게시판 컨텐츠**********************************************************************/
	/* 게시판 내용 조회 */
	public List<Map<String,Object>> searchBoardContentDetail(Map<String,String> search);	
	/* 게시판 내용 저장 */
	public void saveBoardContents(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/**********************************************************게시판 컨텐츠 (파일) ***************************************************************/
	/* 게시판 내용(파일) 조회 */
	public List<Map<String,Object>> searchBoardFileList(Map<String,String> search);	
	/* 게시판 내용(파일) 조회 */
	public List<Map<String,Object>> searchBoardContentDetailFile(Map<String,String> search);
	/* 게시판 내용(파일) 추가/수정 */
	public void saveBoardFileInsert(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	/* 게시판 내용(파일) 삭제 */
	public void deleteBoardFile(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	
	/**********************************************************게시판 리플(댓글) *****************************************************************/
	/* 게시판 댓글 조회 */
	public List<Map<String,Object>> searchReplyList(Map<String,String> search);
	/* 댓글 추가/삭제/저장 */
	public void saveReply(List<Map<String, Object>> saveList, Map<String, Object> loginUserInfo);	
	
	/**********************************************************게시판 컨텐츠 (목록 조회) ***********************************************************/
	/* 게시판 목록 조회 */
	public List<Map<String,Object>> searchBoardContents(Map<String,String> search);
	/* 게시판 목록 조회(카운트) */
	public List<Map<String,Object>> searchBoardContentsCnt(Map<String,String> search);
	
	/**********************************************************게시판 마스터 ********************************************************************/
	/* 게시판 마스터 (게시판관리) 조회 */
	public List<Map<String,Object>> searchBoardList(Map<String,String> search);	
	/* 게시판 마스터 (게시판관리) 저장 */
	public void saveBoard(List<Map<String,Object>> saveList, Map<String, Object> userInfo);


	/* 주간보고 내용(파일) 추가/수정 */
	public void saveWeekReportFileInsert(List<Map<String,Object>> saveList, Map<String, Object> userInfo);
	public void deleteWeekReportFile(List<Map<String,Object>> saveList, Map<String, Object> userInfo);

}
