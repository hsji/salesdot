package com.unisales.sytm.auth.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.auth.service.authProgService;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   bizProgServiceImpl
 * @desc    System 정보 관리 프로그램관리
 * -        
 * @package com.dxtobe.sytm.impl
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2021. 03. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2021. 03. 25.		TOBESOFT	최초작성
 */

@Repository
public class authProgServiceImpl implements authProgService {

	@Autowired
    private SqlSessionTemplate sqlSession;

	@Override
	public List<Map<String, Object>> searchProgramList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authProgramMapper.searchProgramList", search);
	}

	@Override
	public void saveProgramList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> progMap = saveList.get(i);
            
            progMap.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            progMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(progMap.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authProgramMapper.insertProgramList",progMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("authProgramMapper.updateProgramList",progMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("authProgramMapper.deleteProgramAddBtnListAll", progMap);
            	sqlSession.delete("authProgramMapper.deleteProgramList", progMap);
            }
        }  
	}


	@Override
	public List<Map<String, Object>> searchProgramAddBtnList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authProgramMapper.searchProgramAddBtnList", search);
	}

	@Override
	public void saveProgramAddBtnList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> progMap = saveList.get(i);
            
            progMap.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            progMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(progMap.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authProgramMapper.insertProgramAddBtnList",progMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("authProgramMapper.updateProgramAddBtnList",progMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("authProgramMapper.deleteProgramAddBtnList", progMap);
            }
        }  
	}
	
	
	@Override
	public Map<String, Object> searchManual(Map<String, Object> searchMap) throws SQLException, IOException {
		
		
		Map<String, Object> findResult = sqlSession.selectOne("authProgramMapper.searchManual", searchMap);
		
		int size = 0;
		if(findResult.get("PRGM_HELP") != null) {
	    	String contents = "";
	    	String cntnType = findResult.get("PRGM_HELP").getClass().getSimpleName();
			if(!cntnType.equals("String")) {
				Clob clob = (Clob) findResult.get("PRGM_HELP");
		    	if(clob == null) {
		    		size=0;
		    	}else {
		    		size=(int) clob.length();
		    	}
		    	if(size > 0) {
		    		contents = clob.getSubString(1, size); // 첫번째부터 끝까지 복사
		    	}
			} else {
				contents = (String) findResult.get("PRGM_HELP");
			}
			findResult.put("PRGM_HELP", contents);
    	}

		return findResult;
	}
	
	
	@Override
	public void saveManual(Map<String, Object> saveMap) {
		sqlSession.update("authProgramMapper.saveManual", saveMap);
	}
	

 
}
