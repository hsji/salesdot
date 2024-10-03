package com.unisales.comm.memo.service.impl;

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
import com.unisales.comm.memo.service.memoService;
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
public class memoServiceImpl implements memoService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	/**********************************************************게시판 컨텐츠**********************************************************************/
	 /**
	 * 메모 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchMemoList(Map<String,String> search, Map<String, Object> userInfo) {  	
		search.put("USER_ID_SRV", (String) userInfo.get("USER_ID_SRV"));
    	return sqlSession.selectList("memoMapper.searchMemoList", search);
    }
	
	 /**
	 * 메모 상세 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public Map<String,Object> searchMemoMaxSeq(Map<String, Object> userInfo) {  	
		return sqlSession.selectOne("memoMapper.searchMemoMaxSeq", userInfo);
	}
		
	
	 /**
	 * 메모 상세 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
   public Map<String,Object> searchMemoDetail(Map<String,Object> search, Map<String, Object> userInfo) {  	
   	return sqlSession.selectOne("memoMapper.searchMemoDetail", search);
   }
	
	
    /**
   	 * 메모 추가/수정/삭제
   	 * @param searchMap		: 조회 조건 Map
   	 * @return				: 조회결과 List
   	 */
	@Override
	public void saveMemoContents(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> memoMap = saveList.get(i);
            
            memoMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            memoMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            memoMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(memoMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("memoMapper.deleteMemoContents", memoMap);
            }
        }
            
        for (int i=0; i<size; i++) {
            Map<String,Object> memoMap = saveList.get(i);
            
            memoMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            memoMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            memoMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(memoMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("memoMapper.insertMemoContents", memoMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("memoMapper.updateMemoContents", memoMap);
            }
        }            
	}	
}
