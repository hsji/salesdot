package com.unisales.sales.service.impl;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sales.service.techService;
import com.unisales.util.NexaUtil;
import com.unisales.util.UserInfo;
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
public class techServiceImpl implements techService {

	@Autowired
    private SqlSessionTemplate sqlSession1;
	

	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
	 * @throws Exception 
		 */
	    @Override
	    public void TR_RequestSIStaffReg_R01(Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	try {
	    		List<Map<String,Object>> ds_ProjectSiEmp = (List<Map<String, Object>>) datasetMap.get("ds_ProjectSiEmp");
	    		
	    		if(ds_ProjectSiEmp.size() > 0) {
	    			datasetMap.put("ORG_CONTRACT_NO",	ds_ProjectSiEmp.get(0).get("CONTRACT_NO"));
	    		}

		    	sqlSession.getConnection().setAutoCommit(true);
		    	sqlSession.commit();
	    	} catch (Exception e) {
	    		sqlSession.rollback();
	    		throw new Exception();
	    	} finally {
	    		//sqlSession.getConnection().setAutoCommit(true);
	    		sqlSession.close();
	    	}
	    }
}
