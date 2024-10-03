package com.unisales.ubiwork.service;

import java.util.List;
import java.util.Map;


/**
 * <pre>
 * @title   NexterCommService
 * @desc    Nexter 공통 부문 관리 service
 * -        
 * @package com.dxtobe.comm.service
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
public interface ubiworkService {
	
	/* 신규 저장 */
	public void saveDocuContentOne(Map<String,Object> docList);
	
	public void saveDocuContent(List<Map<String,Object>> docList);
	
	public void saveDocuReceiveList(List<Map<String,Object>> docList);
	
	public void saveDocuBaseField(List<Map<String,Object>> docList);
	
	public void saveDocuReceiverField(List<Map<String,Object>> docList);
	
	public void copyDocuDoc(Map<String,String> docList);
	
	public void deteDocuAll(Map<String,String> doc);
	
	public void saveDocTree(List<Map<String,Object>> docList);
	
	public void saveUserSign(Map<String,Object> doc);
	
	public List<Map<String,Object>> searchDocuContents(Map<String, Object> search);		
	
	public List<Map<String,Object>> searchDocuReceiveList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuReceiveFieldList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuBaseField(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuHistory(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDeptDocList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchResultDocList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocMyMailList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuTreeList(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuTreeInfo(Map<String, Object> search);
	
	public List<Map<String,Object>> searchDocuTreeOne(Map<String, Object> search);
	
	public List<Map<String,Object>> searchUserSign(Map<String, Object> search);

}
