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
import com.unisales.sales.service.salesManagerService;
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
public class salesManagerController {
	private Logger log = LoggerFactory.getLogger(salesManagerController.class);
	
	@Autowired(required=true)
    private salesManagerService SalesMangerService;


	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/savePresalseList.do")
	public NexacroResult savePresalseList(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsInput5", required = false) List<Map<String,Object>> dsInput5
										, @ParamDataSet(name = "dsInput6", required = false) List<Map<String,Object>> dsInput6
										, @ParamDataSet(name = "dsInput7", required = false) List<Map<String,Object>> dsInput7
										, @ParamDataSet(name = "dsInput8", required = false) List<Map<String,Object>> dsInput8
										, @ParamDataSet(name = "dsMap", required = false) List<Map<String,String>> queryList
										, @ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			// 임시 개발용
			userInfo = new UserInfo();
			userInfo.setStrUserId("jihs");
			userInfo.setStrUserIPAddress("127.0.0.1");
			userInfo.setStrCompanyCd("UNIDIA");
			userInfo.setStrEmpNo("w22010301");
		}
		
		Map<String,Object> datasetMap = new HashMap<>();
		
		datasetMap.put("ds_contract", 		dsInput1);
		datasetMap.put("ds_contract_prod", 	dsInput2);
		datasetMap.put("ds_contract_goods", dsInput3);
		datasetMap.put("ds_contract_si", 	dsInput4);
		datasetMap.put("ds_contract_cs", 	dsInput5);
		datasetMap.put("ds_purchase", 		dsInput6);
		datasetMap.put("ds_schedule", 		dsInput7);
		datasetMap.put("ds_addressbook", 	dsInput8);
		datasetMap.put("dsCond", 	searchMap);
		
		List<Map<String, Object>> listMap1 = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> listMap2 = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> listMap3 = new ArrayList<Map<String, Object>>();
		
		datasetMap.put("ds_in_contract", 	listMap1);
		datasetMap.put("ds_contract_prod_info", listMap2);
		datasetMap.put("ds_contract_goods_info", listMap3);
    	
    	
    	SalesMangerService.savePresalseList(queryList, datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  		    
    
    /**
	 * 매출원가표 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchCostSheet.do")
	public NexacroResult searchCostSheet(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsMap", required = false) Map<String,String> queryMap
										, HttpServletRequest request) throws NexacroException{

		UserInfo info = (UserInfo) request.getSession().getAttribute("userInfo");
		if(info == null) {
			// 임시 개발용
			info = new UserInfo();
			info.setStrUserId("jihs");
			info.setStrUserIPAddress("127.0.0.1");
			info.setStrCompanyCd("UNIDIA");
		}
		
		Map<String,String> newQeuryMap = new HashMap<>();
		newQeuryMap.put("map"	, "salesManagerMapper");
		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_COSTSHEET_CONTRACT_CNT");  
		
		NexacroResult result = new NexacroResult();
		
    	// 서버시스템 메시지를 조회한다.
    	Map<String,Object> cntMap = SalesMangerService.searchMap(newQeuryMap, searchMap, info);
    	//searchMap.put("MAX_CC_SEQ", cntMap.get("MAX_CC_SEQ"));
    	//searchMap.put("COUNT", cntMap.get("COUNT"));
    	//searchMap.put("DOC_STATUS", cntMap.get("DOC_STATUS"));
    	
    	int cnt = Integer.parseInt(String.valueOf(cntMap.get("COUNT")));
    	String sAddFlag = (String) searchMap.get("ADD_FLAG");
    	String sDocStatus = (String) cntMap.get("DOC_STATUS");
    	
    	if(cnt == 0 || (sAddFlag.equals("1") && sDocStatus.equals("FINISH"))) {
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PROJECT_I");     		
    		List<Map<String,Object>> ds_project = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_CONTRACT_PROD_I");
    		List<Map<String,Object>> ds_contract_prod = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PURCHASE_PROD_I");
    		List<Map<String,Object>> ds_purchase_prod = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_CONTRACT_SI_I");
    		List<Map<String,Object>> ds_contract_si = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PURCHASE_SI_I");
    		List<Map<String,Object>> ds_purchase_si = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		
    		result.addDataSet("ds_Project", ds_project);
    		result.addDataSet("ds_ContractProd", ds_contract_prod);
    		result.addDataSet("ds_ContractSi", ds_contract_si);
    		result.addDataSet("ds_PurchaseProd", ds_purchase_prod);
    		result.addDataSet("ds_PurchaseSi", ds_purchase_si);
    	} else if(cnt > 0) {
    		if(sAddFlag.equals("1") && !sDocStatus.equals("FINISH")) {
    			searchMap.put("CC_SEQ", cntMap.get("MAX_CC_SEQ"));
    		}
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PROJECT_U_1");  
        	Map<String,Object> pjtMap1 = SalesMangerService.searchMap(newQeuryMap, searchMap, info);
        	searchMap.put("CONTRACT_NO", pjtMap1.get("CONTRACT_NO"));
        	searchMap.put("SALES_EMP_NO", pjtMap1.get("SALES_EMP_NO"));   
        	
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PROJECT_U_2");  
        	Map<String,Object> pjtMap2 = SalesMangerService.searchMap(newQeuryMap, searchMap, info);
        	searchMap.put("CL_PS", pjtMap2.get("CL_PS"));
        	searchMap.put("CL_RC", pjtMap2.get("CL_RC"));   	
        	searchMap.put("CONTRACT_PRICE", pjtMap2.get("CONTRACT_PRICE"));   
        	
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PROJECT_U_3");
    		List<Map<String,Object>> ds_project = SalesMangerService.searchList(newQeuryMap, searchMap, info);        	
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_CONTRACT_PROD_U");
    		List<Map<String,Object>> ds_contract_prod = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PURCHASE_PROD_U");
    		List<Map<String,Object>> ds_purchase_prod = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_CONTRACT_SI_U");
    		List<Map<String,Object>> ds_contract_si = SalesMangerService.searchList(newQeuryMap, searchMap, info);
    		newQeuryMap.put("mapid"	, "SP_CostSheet_S01_PURCHASE_SI_U");
    		List<Map<String,Object>> ds_purchase_si = SalesMangerService.searchList(newQeuryMap, searchMap, info);   
    		
    		result.addDataSet("ds_Project", ds_project);
    		result.addDataSet("ds_ContractProd", ds_contract_prod);
    		result.addDataSet("ds_ContractSi", ds_contract_si);
    		result.addDataSet("ds_PurchaseProd", ds_purchase_prod);
    		result.addDataSet("ds_PurchaseSi", ds_purchase_si);    		
    	}
		
		return result;
	}       
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveCostSheet.do")
	public NexacroResult saveCostSheet(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsInput5", required = false) List<Map<String,Object>> dsInput5
										, @ParamDataSet(name = "dsMap", required = false) List<Map<String,String>> queryList
										, @ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			// 임시 개발용
			userInfo = new UserInfo();
			userInfo.setStrUserId("jihs");
			userInfo.setStrUserIPAddress("127.0.0.1");
			userInfo.setStrCompanyCd("UNIDIA");
			userInfo.setStrEmpNo("w22010301");
		}
		
		Map<String,Object> datasetMap = new HashMap<>();
		
		datasetMap.put("ds_Project", 	dsInput1);
		datasetMap.put("ds_ContractProd", 	dsInput2);
		datasetMap.put("ds_PurchaseProd", 	dsInput3);
		datasetMap.put("ds_ContractSi", 	dsInput4);
		datasetMap.put("ds_PurchaseSi", 	dsInput5);
		datasetMap.put("dsCond", 	searchMap);
		
		Map<String, Object> out = SalesMangerService.saveCostSheet(queryList, datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_ccseq", out);
		return result;
	}  		        
}
