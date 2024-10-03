package com.unisales.sytm.org.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.org.service.orgUserService;
import com.unisales.util.NexaUtil;
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
public class orgUserServiceImpl implements orgUserService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	

    @Override
    public List<Map<String,Object>> selectCommonUserList(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.selectCommonUserList", search);
    }
	
    @Override
    public List<Map<String,Object>> searchDeptInfo(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.searchDeptInfo", search);
    }

    @Override
    public List<Map<String,Object>> searchDeptUserList(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.searchDeptUserList", search);
    }
    
    @Override
    public List<Map<String,Object>> searchDeptUserList2(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.searchDeptUserList2", search);
    }

    @Override
    public List<Map<String,Object>> searchUserInfo(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.searchUserInfo", search);
    }
    
    @Override
    public List<Map<String,Object>> searchUserOneInfo(Map<String,String> search) {  	
    	return sqlSession.selectList("orgUserMapper.searchUserOneInfo", search);
    }

    @Override
    public List<Map<String,Object>> checkUserId(List<Map<String,String>> search) { 
        return sqlSession.selectList("orgUserMapper.checkUserId", search);
    }    
    
    @Override
    public void saveUserInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("orgUserMapper.insertUserInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("orgUserMapper.updateUserInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("orgUserMapper.deleteUserInfo", msgMap);
            }
        }	
    }
    
    @Override
    public void deleteUserInfo(List<Map<String,Object>> delList) {

        int size = delList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = delList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("orgUserMapper.deleteUserInfo", msgMap);
            }
        }
    }
    
    @Override
    public void saveUserSetting(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> userSettingMap = saveList.get(i);
            
            userSettingMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            userSettingMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(userSettingMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("orgUserMapper.updateUserSetting", userSettingMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	
            }
        }	
    }
    
    @Override
    public Map<String,Object>  saveUserPassword(Map<String,Object> saveMap, Map<String, Object> userInfo) {
    	sqlSession.update("orgUserMapper.updateUserPassword", saveMap);
    	
    	return sqlSession.selectOne("orgUserMapper.checkUserPassword", saveMap);
    }    
    
    @Override
    public Map<String,Object> initUserPassword(Map<String,Object> saveMap, Map<String, Object> userInfo) {
    	sqlSession.update("orgUserMapper.initUserPassword", saveMap);
    	
    	return sqlSession.selectOne("orgUserMapper.checkUserPassword", saveMap);
    }        
}
