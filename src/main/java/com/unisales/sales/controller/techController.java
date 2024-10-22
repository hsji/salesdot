package com.unisales.sales.controller;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sales.service.techService;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;
import com.unisales.util.UserInfo;

/**
 * <pre>
 * @title   bizProgController
 * @desc    System 정보 관리 프로그램관리
 * -        
 * @package com.dxtobe.sytm.controller
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

@Controller
public class techController {
	private Logger log = LoggerFactory.getLogger(techController.class);
	
	@Autowired(required=true)
    private techService TechService;


	/**
	 * 인력요청
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/TR_RequestSIStaffReg_R01.do")
	public NexacroResult saveSP_Contract_R01(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsMap", required = false) Map<String,String> queryMap
										, @ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		
		Map<String,Object> datasetMap = new HashMap<>();
		
		datasetMap.put("ds_ConfirmList", 	dsInput1);
		datasetMap.put("ds_ProjectSiEmp", 	dsInput2);
		datasetMap.put("ds_DetList", 		dsInput3);
		datasetMap.put("ds_List", 			dsInput4);
		datasetMap.put("dsCond", 			searchMap);
		
		TechService.TR_RequestSIStaffReg_R01(datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  		    
 }
