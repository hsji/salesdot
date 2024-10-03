package com.unisales.ubidcs.service.impl;

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
import com.unisales.ubidcs.service.ubidcsService;
import com.unisales.util.UbidcsUtil;
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
public class ubidcsServiceImpl implements ubidcsService {

	@Autowired
    private SqlSessionTemplate sqlSession;

	

	/**
	 * 문서 Master 정보 신규 저장
	 * @param docInfo		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
	public void saveDocuContent(List<Map<String,Object>> docList) {

		try {
			UbidcsUtil ubidcsUtil = new UbidcsUtil();
			
			int size = docList.size();
			String docStatus = "", docid = "", sysCode = "", bizCode = "", fileName = "";
			int rowType;
	        for (int i=0; i<size; i++) {
	            Map<String,Object> doc = docList.get(i);
	            docStatus = (String) doc.get("docStatus");
	            
	            rowType = Integer.parseInt(String.valueOf(doc.get(DataSetRowTypeAccessor.NAME)));
	            if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.delete("ubiDocMapper.deleteDocInfo", doc);
	            } else {
	            	fileName = (String) doc.get("PDF_FILE_PATH_NM");
	            	if(fileName == null) fileName = "";
	            	if(fileName.equals("")) {
	            		docid = (String) doc.get("DOC_ID");
	            		sysCode = (String) doc.get("SYS_CODE");
	            		bizCode = (String) doc.get("BIZ_CODE");
	            		String[] arrPath = ubidcsUtil.getPdfFilePath(docid, sysCode, bizCode);
	            		doc.put("PDF_FILE_PATH_NM", arrPath[0]);
	            		doc.put("PDF_FILE_NM", 		arrPath[1]);
	            		doc.put("PDF_ORIG_FILE_NM", arrPath[2]);
	            	}
	            	sqlSession.insert("ubiDocMapper.insertDocInfo", doc);
	            }
	        }
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	*/
	
	@Override
	public void saveDocuQueryMap(Map<String,String> queryMap, Map<String,Object> docMap) {
		String QType = queryMap.get("QType");
		String QMap = queryMap.get("QMap");
		if(QType.equals("insert")) {
			sqlSession.insert(QMap, docMap);
		} else if(QType.equals("update")) {
			sqlSession.update(QMap, docMap);
		} else if(QType.equals("delete")) {
			sqlSession.delete(QMap, docMap);
		}
	}	
	
	@Override
	public void saveDocuQueryList(Map<String,String> queryMap, List<Map<String,Object>> docList) {
		String QType = queryMap.get("QType");
		String QMap = queryMap.get("QMap");		
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
    		if(QType.equals("insert")) {
    			sqlSession.insert(QMap, doc);
    		} else if(QType.equals("update")) {
    			sqlSession.update(QMap, doc);
    		} else if(QType.equals("delete")) {
    			sqlSession.delete(QMap, doc);
    		}
        }
	}		
		
	
	/**
	 * 문서 Master 정보 신규 저장
	 * @param docInfo		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/**
	@Override
	public void saveDocuContentOne(Map<String,Object> docMap) {
		sqlSession.insert("ubiDocMapper.insertDocInfo", docMap);
	}	
	
	
	@Override
	public void saveReceiveFlag(Map<String,Object> docMap) {
		sqlSession.update("ubiDocMapper.updateReveiceInfo", docMap);
	}		
	
	@Override
	public void saveDocuHistory(Map<String,Object> docMap) {
		sqlSession.insert("ubiDocMapper.insertDocHistory", docMap);
	}		
	
	@Override
	public void saveDocuFieldSeqUpdate(Map<String,Object> docMap) {
		sqlSession.update("ubiDocMapper.updateDocFieldSeq", docMap);
	}
	
	@Override
	public void saveDocuFieldUserUpdate(Map<String,Object> docMap) {
		sqlSession.update("ubiDocMapper.updateDocFieldUser", docMap);
	}				
	*/
	/*
	@Override
	public void saveDocuReceiveList(List<Map<String,Object>> docList) {
        
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
            sqlSession.insert("ubiDocMapper.insertReceiveInfo", doc);
            
        }
	}
	*/	
	/*
	@Override
	public void saveDocuBaseField(List<Map<String,Object>> docList) {
        
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(doc.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("ubiDocMapper.deleteDocBaseFieldInfo", doc);
            } else {
            	sqlSession.insert("ubiDocMapper.insertDocBaseFieldInfo", doc);
            }
        }
	}
	*/	
	/*
	@Override
	public void saveDocuBaseFieldMap(List<Map<String,Object>> docList) {
        
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
           	sqlSession.insert("ubiDocMapper.insertDocBaseFieldInfo", doc);
        }
	}
	*/	
	
	/*
	@Override
	public void deleteDocuBaseField(Map<String,Object> docList) {
        
		sqlSession.delete("ubiDocMapper.deleteDocBaseFieldAll", docList);
	}
	*/	
	
	/**
	 * 단건조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public Map<String,Object> searchDocuQueryMap(Map<String,String> queryMap, Map<String, Object> search) {  	
		String QMap = queryMap.get("QMap");
		
    	return sqlSession.selectOne(QMap, search);
    }
	
	/**
	 * 리스트조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchDocuQueryList(Map<String,String> queryMap, Map<String, Object> search) {  	
		String QMap = queryMap.get("QMap");
		
    	return sqlSession.selectList(QMap, search);
    }
	
	/**
	 * 단건조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public Map<String,Object> searchDocuOne(Map<String, Object> search) {  	
    	return sqlSession.selectOne("ubiDocMapper.selectDocOne", search);
    }
    */
	
	/**
	 * 단건조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public List<Map<String,Object>> searchDocuHistory(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocHistory", search);
    }	
	*/
	/**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public List<Map<String,Object>> searchDocuContents(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocInfo", search);
    }
	*/
	
	/**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/* 
	@Override
    public List<Map<String,Object>> searchDocuReceiveList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocReceiveInfo", search);
    }	
	*/
	/*
	@Override
    public Map<String,Object> searchDocuReceiveOne(Map<String, Object> search) {  	
    	return sqlSession.selectOne("ubiDocMapper.selectDocReceiveOne", search);
    }
    */		
	/* 
	@Override
    public List<Map<String,Object>> searchDocuBaseField(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocBaseFieldInfo", search);
    }	
	*/
	/**
	 * 파일정보 신규 저장
	 * @param docInfo		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
	public void saveNewFile(Map<String, Object> docInfo) {
        
        sqlSession.insert("ubiDocMapper.insertDocInfo", docInfo);
	}
	*/
	/**
	 * 파일 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public Map<String,Object> searchFileInfo(Map<String, Object> search) {  	
    	return sqlSession.selectOne("ubiDocMapper.searchDocInfo", search);
    }	
	*/
	/**
	 * TITLE 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public Map<String,Object> searchDocTitle(Map<String, Object> search) {  	
    	return sqlSession.selectOne("ubiDocMapper.selectDocTitle", search);
    }		 
	*/	
	/**
	 * TITLE 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	/*
	@Override
    public Map<String,Object> searchMailUser(Map<String, Object> search) {  	
    	return sqlSession.selectOne("ubiDocMapper.selectMailUser", search);
    }	
    */	 	
}
