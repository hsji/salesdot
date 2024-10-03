package com.unisales.next.base.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.next.base.service.nextBaseService;
import com.unisales.util.UserInfo;
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
public class nextBaseServiceImpl implements nextBaseService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	
    /**
	 *  조회
	 * @param queryMap		: Mapper Info
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchList(Map<String,String> queryMap, Map<String,Object> search, UserInfo userInfo) {  	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		String strMapper = mapper + ".select" + mapperId; 
		
		search.put("USER_ID_SRV", userInfo.getStrUserId());
		search.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		search.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		
    	return sqlSession.selectList(strMapper, search);
    }
    
    /**
	 *  조회
	 * @param queryMap		: Mapper Info
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 Map
	 */
    @Override
    public Map<String,Object> searchUserMap(Map<String,String> queryMap, UserInfo userInfo) {  	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		String strMapper = mapper + ".select" + mapperId; 
    	return sqlSession.selectOne(strMapper, userInfo);
    }
    
    /**
	 *  조회
	 * @param queryMap		: Mapper Info
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchUserList(Map<String,String> queryMap, UserInfo userInfo) {  	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		String strMapper = mapper + ".select" + mapperId; 
    	return sqlSession.selectList(strMapper, userInfo);
    }    
    
    /**
	 *  조회
	 * @param queryMap		: Mapper Info
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public Map<String,Object> searchMap(Map<String,String> queryMap, Map<String,Object> search) {  	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		String strMapper = mapper + ".select" + mapperId; 
    	return sqlSession.selectOne(strMapper, search);
    }
    
    /**
	 *  조회
	 * @param queryMap		: Mapper Info
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public int searchInt(Map<String,String> queryMap, Map<String,Object> search) {  	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		String strMapper = mapper + ".select" + mapperId; 
    	return sqlSession.selectOne(strMapper, search);
    }   
    
    /**
	 * 저장한다.
	 * @param queryMap		: Mapper Info
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveList(Map<String,String> queryMap, List<Map<String,Object>> saveList, UserInfo userInfo) {
    	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		
		String strInsertMap = mapper + ".insert" + mapperId;
		String strDeleteMap = mapper + ".delete" + mapperId;
		String strUpdateMap = mapper + ".update" + mapperId;
    	
    	String rowType;
        int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> saveMap = saveList.get(i);
            
            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
            
            rowType = (String) saveMap.get("_rowType_");
            
            if (rowType == "I"){
            	sqlSession.insert(strInsertMap, saveMap);
            }else if (rowType == strUpdateMap){
            	sqlSession.update(strUpdateMap, saveMap);
            }else if (rowType == strDeleteMap){
            	sqlSession.delete(strDeleteMap, saveMap);
            }
        }	
    }    

    /**
	 * 저장한다.
	 * @param queryMap		: Mapper Info
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveListUserMap(Map<String,String> queryMap, List<Map<String,Object>> saveList, Map<String,Object> userInfo) {
    	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		
		String strInsertMap = mapper + ".insert" + mapperId;
		String strDeleteMap = mapper + ".delete" + mapperId;
		String strUpdateMap = mapper + ".update" + mapperId;
    	
		int rowType;
        int size = saveList.size();
        String companyCd = "";
        
        for (int i=0; i<size; i++) {
            Map<String,Object> saveMap = saveList.get(i);
            
            saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            
            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert(strInsertMap,saveMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update(strUpdateMap,saveMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete(strDeleteMap,saveMap);
            }
        }	
    }    
    
    /**
 	 * 저장한다.
 	 * @param queryMap		: Mapper Info
 	 * @param saveList		: 저장할 데이터 리스트
 	 * @param userInfo		: Login UserInfo
 	 * @return				: N/A
 	 */
     @Override
     public void insertFileMapUserMap(String mapperId, Map<String,Object> saveMap, Map<String,Object> userInfo) {
     	
 		String strInsertMap = "nextCommMapper.insert" + mapperId;
     	
        saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
        saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
        saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
        
        //Map<String,Object> cntMap = sqlSession.selectOne("nextCommMapper.selectFileMap", saveMap);
        //int cnt = Integer.parseInt(String.valueOf(cntMap.get("CNT")));
        //if(cnt == 0) {
        	sqlSession.insert(strInsertMap,saveMap);
        //}
     }
     
     /**
  	 * 저장한다.
  	 * @param queryMap		: Mapper Info
  	 * @param saveList		: 저장할 데이터 리스트
  	 * @param userInfo		: Login UserInfo
  	 * @return				: N/A
  	 */
      @Override
      public void insertFileListUserMap(String mapperId, List<Map<String,Object>> saveList, Map<String,Object> userInfo) {
      	
  		String strInsertMap = "nextCommMapper.insert" + mapperId;
      	
		int size = saveList.size();

      
	      for (int i=0; i<size; i++) {
	          Map<String,Object> saveMap = saveList.get(i);
	          
	          saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
	          saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
	          sqlSession.insert(strInsertMap,saveMap);
	      }	
      }       
      
      /**
   	 * 저장한다.
   	 * @param queryMap		: Mapper Info
   	 * @param saveList		: 저장할 데이터 리스트
   	 * @param userInfo		: Login UserInfo
   	 * @return				: N/A
   	 */
       @Override
       public void deleteFileMapUserMap(String mapperId, Map<String,Object> saveMap, Map<String,Object> userInfo) {
       	
   		String strInsertMap = "nextCommMapper.delete" + mapperId;
       	
          saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
          saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
          saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
          
       		sqlSession.delete(strInsertMap,saveMap);
       		
       		// MASTER에 한개도 없으면 MAP도 지운다 - 임시처리
            Map<String,Object> cntMap = sqlSession.selectOne("nextCommMapper.selectFileMasterCount", saveMap);
            int cnt = Integer.parseInt(String.valueOf(cntMap.get("CNT")));       	
            if(cnt == 0) {
            	sqlSession.delete("nextCommMapper.deleteMapFileMasterKey",saveMap);
            }
       }
       
       /**
    	 * 저장한다.
    	 * @param queryMap		: Mapper Info
    	 * @param saveList		: 저장할 데이터 리스트
    	 * @param userInfo		: Login UserInfo
    	 * @return				: N/A
    	 */
        @Override
        public void deleteFileListUserMap(String mapperId, List<Map<String,Object>> saveList, Map<String,Object> userInfo) {
        	
    		String strInsertMap = "nextCommMapper.delete" + mapperId;
        	
  		int size = saveList.size();

        
  	      for (int i=0; i<size; i++) {
  	          Map<String,Object> saveMap = saveList.get(i);
  	          
  	          saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
  	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
  	          saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
  	          sqlSession.delete(strInsertMap,saveMap);
  	      }	
        }         
    
    /**
 	 * 저장한다.
 	 * @param queryMap		: Mapper Info
 	 * @param saveList		: 저장할 데이터 리스트
 	 * @param userInfo		: Login UserInfo
 	 * @return				: N/A
 	 */
     @Override
     public void saveCompanyList(Map<String,Object> paramMap, Map<String,String> queryMap, List<Map<String,Object>> saveList, Map<String,Object> userInfo, String companyCd) {
     	
 		String mapper = queryMap.get("map");
 		String mapperId = queryMap.get("mapid");
 		
 		String strInsertMap = mapper + ".insert" + mapperId;
 		String strDeleteMap = mapper + ".delete" + mapperId;
 		String strUpdateMap = mapper + ".update" + mapperId;
     	
 		int rowType;
         int size = saveList.size();
         
         for (int i=0; i<size; i++) {
             Map<String,Object> saveMap = saveList.get(i);
             
             saveMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
             saveMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
             saveMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
             
             rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
             
             if (rowType == DataSet.ROW_TYPE_INSERTED){
            	saveMap.put("NEW_COMPANY_CD", companyCd);
             	sqlSession.insert(strInsertMap,saveMap);
             }else if (rowType == DataSet.ROW_TYPE_UPDATED){
             	sqlSession.update(strUpdateMap,saveMap);
             }else if (rowType == DataSet.ROW_TYPE_DELETED){
             	sqlSession.delete(strDeleteMap,saveMap);
             }
         }	
     }    
     
    /**
	 * 저장한다.
	 * @param queryMap		: Mapper Info
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveMap(Map<String,String> queryMap, Map<String,Object> saveMap, UserInfo userInfo) {
    	
		String mapper = queryMap.get("map");
		String mapperId = queryMap.get("mapid");
		
		String strInsertMap = mapper + ".insert" + mapperId;
		String strDeleteMap = mapper + ".delete" + mapperId;
		String strUpdateMap = mapper + ".update" + mapperId;
    	
    	String rowType;

        saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
        saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
        saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
        
        rowType = (String) saveMap.get("_rowType_");
        
        if (rowType == "I"){
        	sqlSession.insert(strInsertMap, saveMap);
        }else if (rowType == strUpdateMap){
        	sqlSession.update(strUpdateMap, saveMap);
        }else if (rowType == strDeleteMap){
        	sqlSession.delete(strDeleteMap, saveMap);
        }
	
    }    	
	         
   
}
