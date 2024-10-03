package com.unisales.hrd.service.impl;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.hrd.service.hrdService;
import com.unisales.util.NexaUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.tx.PlatformType;

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
public class hrdServiceImpl implements hrdService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	
    @Override
    public List<Map<String,Object>> searchSendMailResultList(Map<String,Object> searchMap) {  	
    	return sqlSession.selectList("hrdMapper.searchSendMailResultList", searchMap);
    }

    
    @Override
    public List<Map<String,Object>> searchSalaryUserMailList() {  	
    	return sqlSession.selectList("hrdMapper.searchUserMailList");
    }

    @Override
    public List<Map<String,Object>> searchMailContents() {  	
    	return sqlSession.selectList("hrdMapper.searchMailContents");
    }

    @Override
    public void saveMailContents(Map<String,Object> saveMap, Map<String, Object> userInfo) {
        saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
        saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
        
        sqlSession.insert("hrdMapper.insertMailContents", saveMap);
    }    
    
    @Override
    public void saveMailResult(Map<String,Object> saveMap) {
        
        sqlSession.insert("hrdMapper.insertMailResult", saveMap);
    }        
    
    @Override
    public List<Map<String,Object>> searchWeekWorkList(Map<String,Object> searchMap) {  	
    	return sqlSession.selectList("hrdMapper.searchWeekWorkList", searchMap);
    }
    
    @Override
    public List<Map<String,Object>> searchWorkList(Map<String,Object> searchMap) {  	
    	return sqlSession.selectList("hrdMapper.searchWorkList", searchMap);
    }
    
    @Override
    public List<Map<String,Object>> searchPreWorkList(Map<String,Object> searchMap) {  	
    	return sqlSession.selectList("hrdMapper.searchPreWorkList", searchMap);
    }    
    
    @Override
    public void saveWorkList(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            sqlSession.insert("hrdMapper.insertWorkList", msgMap);
            
            /*
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("hrdMapper.updateWorkList", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("hrdMapper.updateWorkList", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("hrdMapper.deleteWorkList", msgMap);
            }
            */
        }	
    }    
    
    @Override
    public void deleteWorkList(Map<String, Object> cond) {
    	sqlSession.delete("hrdMapper.deleteWorkList", cond);
    }      
}
