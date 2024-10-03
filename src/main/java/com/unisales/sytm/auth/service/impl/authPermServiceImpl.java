package com.unisales.sytm.auth.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.auth.service.authPermService;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   bizAuthServiceImpl
 * @desc    System 정보 관리 권란관리
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
public class authPermServiceImpl implements authPermService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	
	/*************************데이터권한조회*************************************/
	@Override
	public List<Map<String, Object>> authDataGrpSearchUserList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.authDataGrpSearchUserList", search);
	}

	@Override
	public List<Map<String, Object>> authDataGrpSearchDeptList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.authDataGrpSearchDeptList", search);
	}

	@Override
	public List<Map<String, Object>> authDataGrpSearchDataGrpList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.authDataGrpSearchDataGrpList", search);
	}

	@Override
	public void authDataGrpSaveDataGrpList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(authDataGrp.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authPermMapper.insertAuthDataGrpList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_DELETED) {
            	sqlSession.update("authPermMapper.deleteAuthDataGrpList",authDataGrp);
            }
        } 
	}
	
	/*************************그룹권한메뉴관리*************************************/
	@Override
	public List<Map<String, Object>> premGrpList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.premGrpList", search);
	}
	
	@Override
	public List<Map<String, Object>> premGrpRegiMenuList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.premGrpRegiMenuList", search);
	}

	@Override
	public void savePremGrpList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(authDataGrp.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authPermMapper.insertPremGrpList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED) {
            	sqlSession.update("authPermMapper.updatePremGrpList",authDataGrp);
            }else if(rowType==DataSet.ROW_TYPE_DELETED) {
            	sqlSession.delete("authPermMapper.deletePremMenuAddBtnList",authDataGrp);
            	sqlSession.delete("authPermMapper.deletePremMenuList",authDataGrp);
            	sqlSession.delete("authPermMapper.deletePremGrpList",authDataGrp);
            }
        } 
		
	}

	@Override
	public void savePremMenuList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            if(authDataGrp.get("PERM_CHK").equals("1")){
            	sqlSession.insert("authPermMapper.insertPremMenuList",authDataGrp);
            }
        } 
	}
	@Override
	public void deletePremMenuList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> permMenuDel = saveList.get(i);
            
            sqlSession.delete("authPermMapper.deletePremMenuAddBtnList", permMenuDel);
            sqlSession.delete("authPermMapper.deletePremMenuList", permMenuDel);
        } 
	}
	
	/*************************그룹권한메뉴관리-추가버튼관리 팝업*************************************/
	@Override
	public List<Map<String, Object>> searchPremGrpAddBtnList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPremGrpAddBtnList", search);
	}
	@Override
	public List<Map<String, Object>> searchPrgmAddBtnList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPrgmAddBtnList", search);
	}
	
	@Override
	public void savePremGrpAddBtnList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(authDataGrp.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authPermMapper.insertPremGrpAddBtnList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_DELETED) {
            	sqlSession.delete("authPermMapper.deletePremMenuAddBtnList",authDataGrp);
            }
        } 
	}

	/*************************권한별 사용자 관리*************************************/
	@Override
	public List<Map<String, Object>> searchPremList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPremList", search);
	}

	@Override
	public List<Map<String, Object>> searchPremUserList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPremUserList", search);
	}

	@Override
	public void savePremUserList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(authDataGrp.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authPermMapper.insertPremUserList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_DELETED) {
            	sqlSession.delete("authPermMapper.deletePremUserList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED) {
            	sqlSession.update("authPermMapper.updatePremUserList",authDataGrp);
            }
        } 
	}
	
	/*************************권한별 사용자 관리 사용자 선택 팝업*************************************/
	@Override
	public List<Map<String, Object>> searchPermAllUser(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPermAllUser", search);
	}
	
	/*************************개인별 권한 관리*************************************/
	@Override
	public List<Map<String, Object>> searchPersonalPremUserList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPersonalPremUserList", search);
	}
	@Override
	public List<Map<String, Object>> searchPersonalPremRegiMenuList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPersonalPremRegiMenuList", search);
	}
	@Override
	public List<Map<String, Object>> searchPersonalPremUnRegiMenuList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPersonalPremUnRegiMenuList", search);
	}
	
	@Override
	public void savePersonalPremUserList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
		
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            if(authDataGrp.get("PERM_CHK").equals("1")){
            	sqlSession.insert("authPermMapper.insertPersonalPrem",authDataGrp);
            }
        } 
	}
	
	@Override
	public void deletePersonalPremUserList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> userPermMap = saveList.get(i);
            
            sqlSession.delete("authPermMapper.deletePremUserMenuAddBtnList", userPermMap);
            sqlSession.delete("authPermMapper.deletePersonalPrem", userPermMap);
        }
	}
	
	/*************************그룹권한메뉴관리-추가버튼관리 팝업*************************************/
	@Override
	public List<Map<String, Object>> searchPremUserAddBtnList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPremUserAddBtnList", search);
	}
	@Override
	public List<Map<String, Object>> searchPrgmUserAddBtnList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPrgmUserAddBtnList", search);
	}
	@Override
	public void savePremUserAddBtnList(List<Map<String, Object>> saveList, Map<String, Object> userInfo) {
		// TODO Auto-generated method stub
		int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> authDataGrp = saveList.get(i);
            
            authDataGrp.put("USER_ID_SRV"		 , userInfo.get("USER_ID_SRV"));
            authDataGrp.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(authDataGrp.get(DataSetRowTypeAccessor.NAME)));
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("authPermMapper.insertPremUserAddBtnList",authDataGrp);
            }else if (rowType == DataSet.ROW_TYPE_DELETED) {
            	sqlSession.delete("authPermMapper.deletePremUserMenuAddBtnList",authDataGrp);
            }
        } 
	}
	
	/*************************개인별 권한 메뉴 리스트 조회*************************************/
	@Override
	public List<Map<String, Object>> searchPermPersonMenuList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPermPersonMenuList", search);
	}
	
	/*************************메뉴별 권한 리스트 조회*************************************/
	@Override
	public List<Map<String, Object>> searchPermMenuGrpList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPermMenuGrpList", search);
	}	
	
	@Override
	public List<Map<String, Object>> searchPermMenuUserList(Map<String, String> search) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("authPermMapper.searchPermMenuUserList", search);
	}		
}
