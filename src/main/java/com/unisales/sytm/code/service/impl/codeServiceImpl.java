package com.unisales.sytm.code.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.code.dao.codeDao;
import com.unisales.sytm.code.service.codeService;
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
public class codeServiceImpl implements codeService {
    @Autowired
    private SqlSessionFactory sqlSessionFactory;

    @Autowired
    private PlatformTransactionManager transactionManager;    
    
    @Autowired
	SqlSession sqlSession;
    
    /**
	 * 대분류코드전체조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
	public List<Map<String, Object>> selectCommonCodeGubunAll(Map<String, String> search) {
		// TODO Auto-generated method stub
    	return sqlSession.selectList("codeMapper.selectCommonCodeGubunAll", search);
	}
    /**
	 * 소분류코드전체조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
	public List<Map<String, Object>> selectCommonCodeAll(Map<String, String> search) {
		// TODO Auto-generated method stub
    	return sqlSession.selectList("codeMapper.selectCommonCodeAll", search);
	}
    @Override
	public void insertCommonCodeGubunAll(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = saveList.get(i);
            
            comCode.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            comCode.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));

            //if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("codeMapper.insertCommonCodeGubunAll",comCode);
            //}
        }      
	}
    
    @Override
	public void insertCommonCodeAll(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = saveList.get(i);
            
            comCode.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            comCode.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));
System.out.println("rowType ::::"+ rowType);
            //if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("codeMapper.insertCommonCodeAll",comCode);
            //}
        }      
	}
    /**
	 * 공통코드 통합 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
	public List<Map<String, Object>> searchUnionCommonCode(Map<String, String> search) {
		// TODO Auto-generated method stub
    	return sqlSession.selectList("codeMapper.searchUnionCommonCode", search);
	}
    
    
	@Override
	public List<Map<String, Object>> searchUnionCommonCodeCnt(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("codeMapper.searchUnionCommonCodeCnt", search);
	}


	/**
	 * 공통코드 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchComCodeList(Map<String,String> search) {
		return sqlSession.selectList("codeMapper.searchComCodeList", search);
    }
    /**
	 * 공통코드 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchPopComCodeList(Map<String,String> search) {  	
    	return sqlSession.selectList("codeMapper.searchPopComCodeList", search);
    }


	@Override
	public void saveComCode(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = saveList.get(i);
            
            comCode.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            comCode.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));

            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("codeMapper.insertComCode",comCode);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("codeMapper.updateComCode",comCode);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("codeMapper.deleteComCode",comCode);
            }
        }      
	}


	@Override
	public void deleteComCode(List<Map<String, Object>> delList) {
		// TODO Auto-generated method stub

        int size = delList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = delList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("codeMapper.deleteComCode",comCode);
            }
        }
	}


	@Override
	public void savePopComCode(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = saveList.get(i);
            
            comCode.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            comCode.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("insertPopComCode",comCode);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.insert("updatePopComCode",comCode);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("deletePopComCode",comCode);
            }
        }
	}


	@Override
	public void deletePopComCode(List<Map<String, Object>> delList) {
		// TODO Auto-generated method stub
        int size = delList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> comCode = delList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(comCode.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("deletePopComCode",comCode);
            }
        }
	}    
    
	/**
	 * 신규등록 코드 존재여부 체크
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> checkMasterCommonCode(List<Map<String,String>> search) { 
        return sqlSession.selectList("codeMapper.checkMasterCommonCode", search);
    }  
    
    /**
	 * 신규등록 코드 존재여부 체크
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> checkDetailCommonCode(List<Map<String,String>> search) { 
    	int size = search.size();
    	String sSscCd = "";
    	Map<String, String> searchCondMap = search.get(0);

        for (int i=0; i<size; i++) {
             Map<String, String> comCode = search.get(i);
             sSscCd += comCode.get("SSC_CD");
             if(i<size-1) {
            	 sSscCd += ",";
             }
         }

        searchCondMap.put("SSC_CD", sSscCd);
        return sqlSession.selectList("codeMapper.checkDetailCommonCode", searchCondMap);
    }  
	
    /**
	 * 자산 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchAssetList(Map<String,String> search) {  	
    	return sqlSession.selectList("codeMapper.searchAssetList", search);
    }	
    
    /**
	 * 자산 목록 저장
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */    
	@Override
	public void saveAssetList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> assetMap = saveList.get(i);
            
            assetMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            assetMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(assetMap.get(DataSetRowTypeAccessor.NAME)));

            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	
            	Map<String, Object> maxMap = sqlSession.selectOne("codeMapper.searchAssetMaxNo",assetMap);
            	Long maxValue = (Long) maxMap.get("IASSET_NO");
            	
            	assetMap.put("ASSET_NO", maxValue.intValue());
            	sqlSession.insert("codeMapper.insertAsset",assetMap);

            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("codeMapper.updateAsset",assetMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("codeMapper.deleteAsset",assetMap);
            }
        }      
	}    
	
	   /**
		 * IP 목록 조회
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> searchIPList(Map<String,String> search) {  	
	    	return sqlSession.selectList("codeMapper.searchIPList", search);
	    }	
	    
	    /**
		 * IP 목록 저장
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */    
		@Override
		public void saveIPList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
			// TODO Auto-generated method stub
	        int size = saveList.size();
	    	int rowType;
	        for (int i=0; i<size; i++) {
	            Map<String,Object> assetMap = saveList.get(i);
	            
	            assetMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
	            assetMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
	            
	            rowType = Integer.parseInt(String.valueOf(assetMap.get(DataSetRowTypeAccessor.NAME)));

	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	            	sqlSession.insert("codeMapper.insertIP",assetMap);

	            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("codeMapper.updateIP",assetMap);
	            }else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.delete("codeMapper.deleteIP",assetMap);
	            }
	        }      
		}    	
		
		
	   /**
		 * 달력 조회
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> searchCalendarList(Map<String,String> search) {  	
	    	return sqlSession.selectList("codeMapper.searchCalendarList", search);
	    }			
		
	    @Override
		public DataSet createCalendarList(Map<String, String> searchMap, Map<String, Object> userInfo) {
	    	DataSet ds = null;
			try {
				searchMap.put("USER_ID_SRV", (String) userInfo.get("USER_ID_SRV"));
				searchMap.put("USER_CON_IPADDR_SRV", (String) userInfo.get("USER_CON_IPADDR_SRV"));				
				ds = codeDao.calendarCreateProcCall(searchMap.get("dsn"), searchMap);
			} catch (Exception e) {
				e.printStackTrace();
			}
	    	return ds;
		}		
	    
	    /**
		 * 달력 저장
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */    
		@Override
		public void saveCalendarList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
			// TODO Auto-generated method stub
	        int size = saveList.size();
	    	int rowType;
	        for (int i=0; i<size; i++) {
	            Map<String,Object> calMap = saveList.get(i);
	            
	            calMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
	            calMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
	            
	            rowType = Integer.parseInt(String.valueOf(calMap.get(DataSetRowTypeAccessor.NAME)));

	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	            	sqlSession.insert("codeMapper.insertCalendar",calMap);
	            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("codeMapper.updateCalendar",calMap);
	            }else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.delete("codeMapper.deleteCalendar",calMap);
	            }
	        }      
		}    		    
}
