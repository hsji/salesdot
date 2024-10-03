package com.unisales.sytm.code.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.code.service.codeMsgService;
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
public class codeMsgServiceImpl implements codeMsgService {

	@Autowired
    private SqlSessionTemplate sqlSession;
    
    /**
	 * 시스템 메시지 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchSystemMsg(Map<String,String> search) {  	
    	return sqlSession.selectList("codeMsgMapper.searchSystemMsg", search);
    }
    
    /**
	 * 신규등록 메시지 코드 존재여부 체크
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> checkNewMsgCode(List<Map<String,String>> search) { 
        return sqlSession.selectList("codeMsgMapper.checkNewMsgCode", search);
    }    
    
    /**
	 * 시스템 메시지를 저장한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveMsg(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("codeMsgMapper.insertMsg", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("codeMsgMapper.updateMsg", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("codeMsgMapper.deleteMsg", msgMap);
            }
        }	
    }
}
