package com.unisales.comm.board.service.impl;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.comm.board.service.boardService;
import com.unisales.util.NexterUtil;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   AuthInfoService
 * @desc    System 정보 관리 service Implementation (권한정보)
 * -        
 * @package com.dxtobe.sytm.impl
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
@Repository
public class boardServiceImpl implements boardService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	/**********************************************************게시판 컨텐츠**********************************************************************/
	 /**
	 * 게시판 컨텐츠 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchBoardContentDetail(Map<String,String> search) {  	
    	return sqlSession.selectList("boardMapper.searchBoardContentDetail", search);
    }
	
	/**
	 * 게시판 컨텐츠 추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveBoardContents(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
        Map<String,Object> boardMap = saveList.get(0);
        
        boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
        boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
        
        String rowType = (String) boardMap.get("STATUS");
        
        if (rowType.equals("add")){
        	sqlSession.insert("boardMapper.boardContentsInsert", boardMap);
        }else if (rowType.equals("update")){
        	sqlSession.update("boardMapper.updateBoardContents", boardMap);
        }else if(rowType.equals("updateInqCount")){
        	sqlSession.update("boardMapper.updateInqCount", boardMap);
        }else if(rowType.equals("delete")){
        	sqlSession.update("boardMapper.deleteBoardContents", boardMap);
        }
	}
	
	/**********************************************************게시판 컨텐츠 (파일) ***************************************************************/
	/**
	 * 게시판 컨텐츠 (파일) 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchBoardFileList(Map<String,String> search) {  	
    	return sqlSession.selectList("boardMapper.searchBoardFileList", search);
    }
	
	/**
	 * 게시판 컨텐츠 (파일) 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchBoardContentDetailFile(Map<String,String> search) {  	
    	return sqlSession.selectList("boardMapper.searchBoardContentDetailFile", search);
    }
	
	/**
	 * 게시판 컨텐츠 (파일) 저장
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveBoardFileInsert(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            
            boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
          
            sqlSession.insert("boardMapper.boardFileInsert", boardMap);
        }
	}
	/**
	 * 게시판 컨텐츠 (파일) 삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteBoardFile(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            sqlSession.insert("boardMapper.deleteBoardFile", boardMap);
        }       
	}
	
	/**********************************************************게시판 리플(댓글) *****************************************************************/
	/**
	 * 게시판 댓글 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchReplyList(Map<String,String> search) {  	
    	return sqlSession.selectList("boardMapper.searchReplyList", search);
    }

    /**
	 * 게시판 댓글 추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveReply(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		Map<String,Object> boardMap = saveList.get(0);
        
        boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
        boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
        
        String rowType = (String) boardMap.get("STATUS");
        
        if (rowType.equals("add")){
        	sqlSession.insert("boardMapper.insertBoardReply", boardMap);
        }else if (rowType.equals("update")){
        	sqlSession.update("boardMapper.updateBoardReply", boardMap);
        }else if(rowType.equals("delete")){
        	sqlSession.update("boardMapper.deleteBoardReply", boardMap);
        }
	}
	
	/**********************************************************게시판 컨텐츠 (목록 조회) ***********************************************************/
    /**
	 * 게시판 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchBoardList(Map<String,String> search) {  	
    	return sqlSession.selectList("boardMapper.searchBoardList", search);
    }
    
    /**
	 * 게시판 목록 조회(카운트)
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
	public List<Map<String, Object>> searchBoardContentsCnt(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("boardMapper.searchBoardContentsCnt", search);
	} 
    
    /**********************************************************게시판 마스터 ********************************************************************/
    /**
   	 * 게시판 마스터 (게시판관리) 조회
   	 * @param searchMap		: 조회 조건 Map
   	 * @return				: 조회결과 List
   	 */
    @Override
	public List<Map<String, Object>> searchBoardContents(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("boardMapper.searchBoardContents", search);
	}
    
    /**
   	 * 게시판 마스터 (게시판관리) 추가/수정/삭제
   	 * @param searchMap		: 조회 조건 Map
   	 * @return				: 조회결과 List
   	 */
	@Override
	public void saveBoard(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            
            boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            boardMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(boardMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("boardMapper.insertBoard", boardMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("boardMapper.updateBoard", boardMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("boardMapper.deleteBoard", boardMap);
            }
        }
	}
	
	/**
	 * 주간보고 컨텐츠 (파일) 저장
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveWeekReportFileInsert(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            
            boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
          
            sqlSession.insert("boardMapper.insertWeekReportFile", boardMap);
        }
	}
	/**
	 * 게시판 컨텐츠 (파일) 삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteWeekReportFile(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            sqlSession.insert("boardMapper.deleteWeekReportFile", boardMap);
        }       
	}	
	 
}
