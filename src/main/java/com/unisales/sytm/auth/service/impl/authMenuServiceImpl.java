package com.unisales.sytm.auth.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.auth.service.authMenuService;
import com.unisales.util.UserInfo;
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
public class authMenuServiceImpl implements authMenuService {

	@Autowired
    private SqlSessionTemplate sqlSession;

	/**
	 * 메뉴 목록 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchMenuList(Map<String,String> search) {
    	return sqlSession.selectList("authMenuMapper.searchMenuList", search);	
    }
    
    /**
	 * 메뉴 정보 변경사항을 저장한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveMenuList(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
    	int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> menuMap = saveList.get(i);
            
            menuMap.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            menuMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(menuMap.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authMenuMapper.insertMenuList",menuMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("authMenuMapper.updateMenuList",menuMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("authMenuMapper.deleteMenuList", menuMap);
            }
        } 
    }
    
    /**
	 * 선택한 메뉴정보를 삭제한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void deleteMenuList(List<Map<String,Object>> delList) {
    	// TODO Auto-generated method stub
		int size = delList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> menuMap = delList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(menuMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("authMenuMapper.deleteMenuList", menuMap);
            }
        }
    }       

    /**
	 * 마이메뉴 조회
	 * @param searchMap		: 조회 조건 Map
	 * @return				: 조회결과 List
	 */
    @Override
    public List<Map<String,Object>> searchMyMenu(UserInfo userInfo) {  	
    	return sqlSession.selectList("authMenuMapper.searchMyMenu", userInfo);
    }
  
    /**
	 * 마이메뉴를 저장한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @param userInfo		: Login UserInfo
	 * @return				: N/A
	 */
    @Override
    public void saveMyMenu(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> myMenuMap = saveList.get(i);
            
            myMenuMap.put("USER_ID_SRV"			, userInfo.get("USER_ID_SRV"));
            myMenuMap.put("USER_CON_IPADDR_SRV"	, userInfo.get("USER_CON_IPADDR_SRV"));
            myMenuMap.put("SYTM_FLAG_CD_SRV"	, userInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(myMenuMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authMenuMapper.insertMyMenu", myMenuMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("authMenuMapper.updateMyMenu", myMenuMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.update("authMenuMapper.deleteMyMenu", myMenuMap);
            }
        }	
    }
}
