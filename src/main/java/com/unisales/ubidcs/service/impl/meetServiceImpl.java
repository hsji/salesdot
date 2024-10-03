package com.unisales.ubidcs.service.impl;

import java.lang.reflect.Method;
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
import com.unisales.ubidcs.dao.meetDao;
import com.unisales.ubidcs.service.meetService;
import com.unisales.util.NexterUtil;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   AuthInfoService
 * @desc    System 정보 관리 service Implementation (권한정보)
 * -        
 * @package com.wms.sytm.impl
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
public class meetServiceImpl implements meetService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	
	/**********************************************************게시판 컨텐츠**********************************************************************/
	 /**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchBase(Map<String,Object> queryMap, Map<String,Object> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		System.out.println("[SEARCH]" +mapper + " " + mapperid);
		System.out.println(search);
		
    	return sqlSession.selectList(mapper + "Mapper.select" + mapperid, search);
    }
	
	 /**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
   public Map<String,Object> searchBaseOne(Map<String,Object> queryMap, Map<String,Object> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		System.out.println("[SEARCH]" +mapper + " " + mapperid);
		System.out.println(search);
		
   	return sqlSession.selectOne(mapper + "Mapper.select" + mapperid, search);
   }	
	
	 /**
	 * 조회 체크
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
   public List<Map<String,Object>> searchCheck(Map<String,Object> queryMap, List<Map<String,Object>> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		System.out.println("[SEARCH]" +mapper + " " + mapperid);
		System.out.println(search);
		
   	return sqlSession.selectList(mapper + "Mapper.selectCheck" + mapperid, search);
   }	
	
	 /**
	 * 조회 paging
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
   public List<Map<String,Object>> searchBasePaging(Map<String,Object> queryMap, Map<String,Object> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		System.out.println("[SEARCH PAGING]" +mapper + " " + mapperid);
		System.out.println(search);
		
   	return sqlSession.selectList(mapper + "Mapper.select" + mapperid, search);
   }
	
	 /**
	 * 조회 paging cnt
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
   public List<Map<String,Object>> searchBasePagingCnt(Map<String,Object> queryMap, Map<String,Object> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		System.out.println("[SEARCH PAGING CNT]" +mapper + " " + mapperid);
		System.out.println(search);
		
   	return sqlSession.selectList(mapper + "Mapper.select" + mapperid, search);
   }	
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveBaseContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String insertMap = mapper + "Mapper.insert" + mapperid;
		String deleteMap = mapper + "Mapper.delete" + mapperid;
		String updateMap = mapper + "Mapper.update" + mapperid;
		
		System.out.println("[SAVE PAGING CNT]" +mapper + " " + mapperid);
		
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveList.get(i);
            
            oneMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            oneMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            oneMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(oneMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert(insertMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update(updateMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete(deleteMap, oneMap);
            }
        }
	}
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String deleteMap = mapper + "Mapper.delete" + mapperid;
		
		
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveList.get(i);
            
           	sqlSession.delete(deleteMap, oneMap);
        }
	}	
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteAndInsertContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String deleteMap = mapper + "Mapper.delete" + mapperid;
		String insertMap = mapper + "Mapper.insert" + mapperid;
		
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveList.get(i);
            
            if(i==0) {
            	sqlSession.delete(deleteMap, oneMap);
            }
           	sqlSession.insert(insertMap, oneMap);
        }
	}		
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void insertContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String insertMap = mapper + "Mapper.insert" + mapperid;
		
		
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveList.get(i);
            
           	sqlSession.insert(insertMap, oneMap);
        }
	}		
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void updateContents(Map<String,Object> queryMap, Map<String, Object> saveMap) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String updateMap = mapper + "Mapper.update" + mapperid;
		
       	sqlSession.update(updateMap, saveMap);
	}		
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteContents(Map<String,Object> queryMap, Map<String, Object> saveMap) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String updateMap = mapper + "Mapper.delete" + mapperid;
		
       	sqlSession.delete(updateMap, saveMap);
	}			
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveMasterDetailContents(Map<String,Object> queryMap, List<Map<String, Object>> saveMaterList, List<Map<String, Object>> saveDetailList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String insertMap = mapper + "Mapper.insertMaster" + mapperid;
		String deleteMap = mapper + "Mapper.deleteMaster" + mapperid;
		String updateMap = mapper + "Mapper.updateMaster" + mapperid;
		
		System.out.println("[SAVE PAGING CNT]" +mapper + " " + mapperid);
		
		int size = saveMaterList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveMaterList.get(i);
            
            oneMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            oneMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            oneMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(oneMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert(insertMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update(updateMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete(deleteMap, oneMap);
            }
        }
        
        
		insertMap = mapper + "Mapper.insertDetail" + mapperid;
		deleteMap = mapper + "Mapper.deleteDetail" + mapperid;
		updateMap = mapper + "Mapper.updateDetail" + mapperid;
		
		System.out.println("[SAVE PAGING CNT]" +mapper + " " + mapperid);
		
		size = saveDetailList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveDetailList.get(i);
            
            oneMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            oneMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            oneMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(oneMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert(insertMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update(updateMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete(deleteMap, oneMap);
            }
        }
        
	}
		
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveBaseMergeContents(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String selectCountMap = mapper + "Mapper.select" + mapperid;
		String insertMap = mapper + "Mapper.insert" + mapperid;
		String deleteMap = mapper + "Mapper.delete" + mapperid;
		//String updateMap = mapper + "Mapper.update" + mapperid + "Common";
		
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> oneMap = saveList.get(i);
            
            oneMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            oneMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            oneMap.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(oneMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED || rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.insert(insertMap, oneMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	Map<String, Object> map = sqlSession.selectOne(mapper + selectCountMap, oneMap);
            	int cnt = (int) map.get("CNT");
            	if(cnt > 0) {
            		sqlSession.delete(deleteMap, oneMap);
            	}
            }
        }
	}	
	
	
	/**
	 *  추가/수정/삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveMapContents(Map<String,Object> queryMap, Map<String, Object> saveMap, Map<String, Object> userInfo) {
		
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		String mappertype = (String) queryMap.get("maptype");
		
		String queryMapId = mapper + "Mapper." + mappertype + mapperid;
		
		if(mappertype.equals("insert")) {
			sqlSession.insert(queryMapId, saveMap);
		} else if(mappertype.equals("update")){
			sqlSession.update(queryMapId, saveMap);
		} else if(mappertype.equals("delete")){
			sqlSession.delete(queryMapId, saveMap);
		}
	}		
	
	/**********************************************************게시판 컨텐츠 (파일) ***************************************************************/
	/**
	 * 게시판 컨텐츠 (파일) 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchBaseFileList(Map<String,Object> queryMap, Map<String,String> search) {  	
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
    	return sqlSession.selectList(mapper + "Mapper.select" + mapperid, search);
    }

	
	/**
	 * 게시판 컨텐츠 (파일) 저장
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveFileInsert(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String insertMap = mapper + "Mapper.insert" + mapperid;
		
		// TODO Auto-generated method stub
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            
            boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
          
            sqlSession.insert(insertMap, boardMap);
        }
	}
	
	/**
	 * 게시판 컨텐츠 (파일) 삭제
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void deleteFile(Map<String,Object> queryMap, List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		String mapper = (String) queryMap.get("map");
		String mapperid = (String) queryMap.get("mapid");
		
		String delteMap = mapper + "Mapper.delete" + mapperid;
		
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            sqlSession.delete(delteMap, boardMap);
        }       
	}
	
	/**
	 * 프로시저 호출
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */	
    @Override
	public DataSet executeProcedure(Map<String,Object> queryMap, Map<String, Object> searchMap, Map<String, Object> userInfo) {
    	DataSet ds = null;
		try {
			 ds = meetDao.introProcCall(queryMap, searchMap);
			 
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return ds;
	}			
}
