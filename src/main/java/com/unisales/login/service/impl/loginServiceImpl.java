package com.unisales.login.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.unisales.login.mapper.loginMapper;
import com.unisales.login.service.loginService;
import com.unisales.util.UserInfo;

/**
 * <pre>
 * @title   LoginServiceImpl
 * @desc    로그인 서비스 Implementation
 * -        
 * @package com.dxtobe.login.impl
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
public class loginServiceImpl implements loginService {

    @Autowired
    private SqlSessionTemplate sqlSession;

/* Login 처리 frameLogin */     
    /**
	 * Block 사용자 여부 체크
	 * @param searchMap		: 조회 조건 Map
	 * @param sSytmFlagCd	: 시스템 코드
	 * @return
	 */
    @Override
    public Map<String,String> searchBlockUser(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchBlockUser(search);    	
    }
    
    /**
	 * 로그인 처리 사용자가 유호한 사용자인지 확인 
	 * @param search : 조회조건 Map
	 * @return
	 */    
    @Override
	public Map<String,Object> Login(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.Login(search);
	}
    
    /**
	 * 로그인 처리 사용자가 유호한 사용자인지 확인 
	 * @param search : 조회조건 Map
	 * @return
	 */    
    @Override
	public Map<String,Object> LoginSession(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.LoginSession(search);
	}    
    /**
	 * 로그인을 시도한 사용자가 시스템에 로그인을 실패한 건수를 가져온다. 
	 * @param search : 조회조건 Map
	 * @param sSytmFlagCd : 시스템코드
	 * @return
	 */    
    @Override
	public Map<String,Object> searchLoginFailCnt(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchLoginFailCnt(search);
	}

    /**
	 * 로그인을 시도한 사용자 ID의 성공을 저장하고 Fail Count를 초기화 한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public void saveLoginSuccessCnt(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        mapper.saveLoginSuccessCnt(userInfo);
	}
    
    /**
	 * 로그인을 시도한 사용자 ID의 실패 건수를 저장한다. 
	 * @param userInfo : 사용자 정보 Map
	 * @param sSytmFlagCd : 시스템코드
	 * @param sUserIPAddress : 사용자 Client IP
	 * @return
	 */    
    @Override
	public void saveLoginFailCnt(Map<String,String> userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        mapper.saveLoginFailCnt(userInfo);
	}
    
    /**
	 * 사용자 로그인/로그아웃 로그를 저장한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public void saveLoginLogInfo(Map<String,Object> loginInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        mapper.saveLoginLogInfo(loginInfo);
	}
    
    

    /**
	 * 시스템에서 사용하는 메시지 목록을 조회한다.
	 * @param 
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchMessage() {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchMessage();
	}
    
    /**
	 * 시스템에서 사용하는 메시지 목록을 조회한다.
	 * @param 
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchAllCodeData(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchAllCodeData(search);
	}    
    
    /**
	 * 시스템에서 사용하는 공통코드 목록을 조회한다.
	 * @param 
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchComCode(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchComCode(userInfo);
	}
    
    /**
	 * 사용자의 MyMenu를 조회 한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchMyMenu(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchMyMenu(userInfo);
	}
    
    /**
	 * 개인설정정보를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchPersonalSetting(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchPersonalSetting(userInfo);
	}	
    
    /**
	 * 추가버튼 정보를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchAddButtonInfo(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchAddButtonInfo(userInfo);
	}	    
    
    /**
	 * 컴포넌트 설정 정보를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchCompSetInfo(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchCompSetInfo(userInfo);
	}
    
    /**
	 * 로고이미지를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchLogoImgInfo(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchLogoImgInfo(userInfo);
	}

    /**
	 * 권한에 따른 메뉴 정보 조회를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchMenuInfo(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchMenuInfo(userInfo);
	}
    
    /**
	 * 권한에 따른 추가버튼 정보 조회를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchAddBtn(UserInfo userInfo) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchAddBtn(userInfo);
	}
 
    /**
	 * 사용자 테마 정보를 조회한다.
	 * @param userInfo : Session에 저장된 사용자 정보
	 * @return
	 */     
    @Override
    public List<Map<String,Object>> searchUserSetting(UserInfo userInfo) {  	
    	//return sqlSession.selectList("LoginMapper.searchUserSetting", userInfo);
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchUserSetting(userInfo);    	
    }   
    
    /**
	 * 로그인 처리 사용자가 유호한 사용자인지 확인 
	 * @param search : 조회조건 Map
	 * @return
	 */    
    @Override
	public Map<String,Object> searchCurPassword(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchCurPassword(search);
	}
    
    /**
	 * 로그인 처리 사용자가 유호한 사용자인지 확인 
	 * @param search : 조회조건 Map
	 * @return
	 */    
    @Override
	public List<Map<String,Object>> searchCodeData(Map<String,String> search) {
    	loginMapper mapper = sqlSession.getMapper(loginMapper.class);
        return mapper.searchCodeData(search);
	}    
    
}
