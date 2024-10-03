package com.unisales.sytm.log.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unisales.sytm.log.service.logSytmService;

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
public class logSytmServiceImpl implements logSytmService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	

    @Override
    public List<Map<String,Object>> selectSytmLoginLog(Map<String,String> search) {  	
    	return sqlSession.selectList("logSytmMapper.selectSytmLoginLog", search);
    }
    
    @Override
    public List<Map<String,Object>> selectPrgmOpenLog(Map<String,String> search) {  	
    	return sqlSession.selectList("logSytmMapper.selectPrgmOpenLog", search);
    }
    
    @Override
    public List<Map<String,Object>> selectUserLog(Map<String,String> search) {  	
    	return sqlSession.selectList("logSytmMapper.selectUserLog", search);
    }

    @Override
    public void saveLog(Map<String,Object> saveList, Map<String, Object> userInfo) {
        String LogType = (String) saveList.get("LOG_TYPE");
        
        saveList.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
        saveList.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
        saveList.put("USER_ID",  userInfo.get("USER_ID_SRV"));
        saveList.put("SYTM_FLAG_CD",  userInfo.get("SYTM_FLAG_CD_SRV"));

        if(LogType.equals("MENU")) {
        	 sqlSession.insert("logSytmMapper.insertMenuLog", saveList); 	
        }else {
        	if(LogType.equals("LOGIN")) {
        		saveList.put("LOIN_FLAG_CD",  "0010");
        	}else if(LogType.equals("LOGOUT")) {
        		saveList.put("LOIN_FLAG_CD",  "0020");
        	}
        	sqlSession.insert("logSytmMapper.insertLoginLog", saveList);
        }
    }
     
	@Override
	public List<Map<String, Object>> selectMainLogOs() {
		return sqlSession.selectList("logSytmMapper.selectMainLogOs");
	}
	@Override
	public List<Map<String, Object>> selectMainLogBrowser() {
		return sqlSession.selectList("logSytmMapper.selectMainLogBrowser");
	}
	@Override
	public List<Map<String, Object>> selectMainLogScreen() {
		return sqlSession.selectList("logSytmMapper.selectMainLogScreen");
	}   
}
