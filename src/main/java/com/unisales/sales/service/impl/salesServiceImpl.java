package com.unisales.sales.service.impl;

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
import com.unisales.sales.service.salesService;
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
public class salesServiceImpl implements salesService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	

    @Override
    public List<Map<String,Object>> searchCustomerList(Map<String,String> search) {  	
    	return sqlSession.selectList("salesMapper.selectCustomerList", search);
    }
    
    @Override
    public void saveCustomerInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            msgMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            msgMap.put("EMP_NO_SRV", userInfo.get("EMP_NO_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("salesMapper.insertCustomerInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("salesMapper.updateCustomerInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("salesMapper.deleteCustomerInfo", msgMap);
            }
        }	
    }    
    
    public String padLeftZeros(String inputString, int length) {
        if (inputString.length() >= length) {
            return inputString;
        }
        StringBuilder sb = new StringBuilder();
        while (sb.length() < length - inputString.length()) {
            sb.append('0');
        }
        sb.append(inputString);

        return sb.toString();
    }    
    
    @Override
    public List<Map<String,Object>> searchProjectList(Map<String,String> search) {  	
    	return sqlSession.selectList("salesMapper.searchProjectList", search);
    }
    
    @Override
    public void saveProjectInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo, String path) {
        int size = saveList.size();
    	int rowType;
    	
        SimpleDateFormat sdfDate = new SimpleDateFormat("yyyyMMdd");
        Date now = new Date();
        String strDate = sdfDate.format(now);
    	Map<String,Object> dateInMap = new HashMap<String, Object>();
    	dateInMap.put("CURR_DATE", strDate);
        
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            msgMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            msgMap.put("EMP_NO_SRV", userInfo.get("EMP_NO_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	
            	Map<String,Object> dateMap = sqlSession.selectOne("salesMapper.searchProjectCode", dateInMap);
            	String date  = (String) dateMap.get("PRJ_CODE");
            	String prjCode = "";
            	if(date.equals("")) {
            		prjCode = strDate + "001";
            	} else {
            		String strSeq = date.substring(8);
            		int intSeq = Integer.parseInt(strSeq);
            		strSeq = Integer.toString(intSeq+1);
            		
            		prjCode = strDate + padLeftZeros(strSeq, 3);
            	}
        		msgMap.put("PRJT_CODE", prjCode);
            	sqlSession.insert("salesMapper.insertProjectInfo", msgMap);
            	
            	Map<String,Object> detailMap = new HashMap<String, Object>();
            	detailMap.put("PRJT_CODE", prjCode);
            	detailMap.put("SCHD_CODE", "100");	// 프로젝트인지 기본추가
            	detailMap.put("SCHD_SDATE", strDate);	// 시작일 오늘로 기본추가
            	detailMap.put("SCHD_EDATE", strDate);	// 종료일 오늘로 기본추가
            	detailMap.put("SCHD_STATUS", "200");	// 프로젝트인지 기본추가
            	detailMap.put("SCHD_TITLE", "프로젝트 진행 인지");	// 프로젝트인지 기본추가
            	detailMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            	detailMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));   
            	detailMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            	detailMap.put("EMP_NO_SRV", userInfo.get("EMP_NO_SRV"));
            	
            	sqlSession.insert("salesMapper.insertProjectScheduleInfo", detailMap);
            	
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("salesMapper.updateProjectInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	System.out.println(msgMap);
            	List<Map<String,Object>> fileList = sqlSession.selectOne("salesMapper.searchProjectScheduleFileListAll", msgMap);
            	
            	if(fileList != null) {
	            	int filesize = fileList.size();
	            	for (int h=0; h<filesize; h++) {
	            		Map<String,Object> fileMap = fileList.get(h);
	                	String filename    = (String) fileMap.get("SAVE_FILE_NM");
	                	File file = new File(path + File.separator + filename);
	                	if(file.exists()) {
	                		file.delete();     
	                	}
	            	}
            	}
            	System.out.println("-----------------");
            	System.out.println(msgMap);
            	
            	sqlSession.delete("salesMapper.deleteProjectScheduleInfoAll", msgMap);
            	sqlSession.delete("salesMapper.deleteProjectInfo", msgMap);
            }
        }	
    }       
    
    
    @Override
    public List<Map<String,Object>> searchProjectDetailList(Map<String,String> search) {  	
    	return sqlSession.selectList("salesMapper.searchProjectScheduleList", search);
    }
    
    @Override
    public List<Map<String,Object>> searchProjectDetailFileList(Map<String,String> search) {  	
    	return sqlSession.selectList("salesMapper.searchProjectScheduleFileList", search);
    }    
    
    @Override
    public void saveProjectDetailInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo, String path) {
        int size = saveList.size();
    	int rowType;
    	
        SimpleDateFormat sdfDate = new SimpleDateFormat("yyyyMMdd");
        Date now = new Date();
        String strDate = sdfDate.format(now);
    	Map<String,Object> dateInMap = new HashMap<String, Object>();
    	dateInMap.put("CURR_DATE", strDate);
        
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            msgMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            msgMap.put("EMP_NO_SRV", userInfo.get("EMP_NO_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("salesMapper.insertProjectScheduleInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("salesMapper.updateProjectScheduleInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	List<Map<String,Object>> fileList = sqlSession.selectOne("salesMapper.searchProjectScheduleFileList", msgMap);
            	
            	int fsize = fileList.size();
            	for (int h=0; h<fsize; h++) {
            		Map<String,Object> fMap = fileList.get(i);
                	String filename    = (String) fMap.get("SAVE_FILE_NM");
                	File file = new File(path + File.separator + filename);
                	file.delete();            		
            	}
            	            	
            	sqlSession.delete("salesMapper.deleteProjectScheduleInfo", msgMap);
            }
        }	
    }           
    
	/**
	 *  컨텐츠 (파일) 저장
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveSalesFileInsert(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            
            boardMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            boardMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            boardMap.put("SERVER_CO_CD", userInfo.get("SERVER_CO_CD"));
            boardMap.put("EMP_NO_SRV", userInfo.get("EMP_NO_SRV"));
          
            sqlSession.insert("salesMapper.salesFileInsert", boardMap);
        }
	}    
	
	@Override
	public void deleteSalesFile(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> boardMap = saveList.get(i);
            sqlSession.insert("salesMapper.deleteSalesFile", boardMap);
        }       
	}	
}
