package com.unisales.ubiwork.service.impl;

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
import com.unisales.ubiwork.service.ubiworkService;
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
public class ubiworkServiceImpl implements ubiworkService {

	@Autowired
    private SqlSessionTemplate sqlSession;

	
	
	/**
	 * 문서 Master 정보 신규 저장
	 * @param docInfo		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
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
	
	/**
	 * 문서 Master 정보 신규 저장
	 * @param docInfo		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
	public void saveDocuContentOne(Map<String,Object> docMap) {
		sqlSession.insert("ubiDocMapper.insertDocInfo", docMap);
	}	
	
	@Override
	public void saveDocuReceiveList(List<Map<String,Object>> docList) {
        
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(doc.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("ubiDocMapper.deleteReceiveInfo", doc);
            } else {
            	sqlSession.insert("ubiDocMapper.insertReceiveInfo", doc);
            }
        }
	}	
	
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
	
	@Override
	public void saveDocuReceiverField(List<Map<String,Object>> docList) {
        
		int size = docList.size();
		String docStatus = "";
		int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> doc = docList.get(i);
            
            if (i == 0){
            	sqlSession.delete("ubiDocMapper.deleteDocReceiverField", doc);
            }
            sqlSession.insert("ubiDocMapper.insertDocReceiverField", doc);
            
        }
	}	
	
	@Override
	public void copyDocuDoc(Map<String,String> docList) {
		 sqlSession.insert("ubiDocMapper.insertCopyDoc", docList);
		 sqlSession.insert("ubiDocMapper.insertCopyDocField", docList);
	}	
	
	@Override
	public void deteDocuAll(Map<String,String> doc) {
		 sqlSession.delete("ubiDocMapper.deleteDocInfo", doc);
		 sqlSession.delete("ubiDocMapper.deleteReceiveDoc", doc);
		 sqlSession.delete("ubiDocMapper.deleteDocBaseFieldAll", doc);
		 sqlSession.delete("ubiDocMapper.deleteDocReceiverAll", doc);
		 sqlSession.delete("ubiDocMapper.deleteDocHistoryAll", doc);
	}
	
	@Override
	public void saveUserSign(Map<String,Object> doc) {
		 sqlSession.insert("ubiDocMapper.insertUserSign", doc);
	}	
	
    @Override
    public void saveDocTree(List<Map<String,Object>> saveList) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("ubiDocMapper.insertDocTree", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("ubiDocMapper.updateDocTree", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("ubiDocMapper.deleteDocTree", msgMap);
            }
        }	
    }	
	
	/**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchDocuContents(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocInfo", search);
    }

	@Override
    public List<Map<String,Object>> searchUserSign(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectUserSign", search);
    }
	
	/**
	 * 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
	@Override
    public List<Map<String,Object>> searchDocuReceiveList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocReceiveInfo", search);
    }	
	
	@Override
    public List<Map<String,Object>> searchDocuReceiveFieldList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocReceiverField", search);
    }		
	
	@Override
    public List<Map<String,Object>> searchDocuBaseField(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocBaseFieldInfo", search);
    }	
	
	@Override
    public List<Map<String,Object>> searchDocuHistory(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocHistory", search);
    }
	
	@Override
    public List<Map<String,Object>> searchDeptDocList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDeptDocList", search);
    }		
	
	@Override
    public List<Map<String,Object>> searchResultDocList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectResultDocList", search);
    }
	
	@Override
    public List<Map<String,Object>> searchDocMyMailList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocMailList", search);
    }		
	
	@Override
    public List<Map<String,Object>> searchDocuTreeList(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocuTreeLust", search);
    }		
		
	@Override
    public List<Map<String,Object>> searchDocuTreeInfo(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocuTreeInfo", search);
    }		
	
	@Override
    public List<Map<String,Object>> searchDocuTreeOne(Map<String, Object> search) {  	
    	return sqlSession.selectList("ubiDocMapper.selectDocTreeOne", search);
    }			
			
}
