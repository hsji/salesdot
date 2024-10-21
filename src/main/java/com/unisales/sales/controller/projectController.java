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
import com.unisales.sales.service.projectService;
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
public class projectController {
	private Logger log = LoggerFactory.getLogger(projectController.class);
	
	@Autowired(required=true)
    private projectService ProjectService;


	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveSP_Contract_R01.do")
	public NexacroResult saveSP_Contract_R01(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsInput5", required = false) List<Map<String,Object>> dsInput5
										, @ParamDataSet(name = "dsInput6", required = false) List<Map<String,Object>> dsInput6
										, @ParamDataSet(name = "dsInput7", required = false) List<Map<String,Object>> dsInput7
										, @ParamDataSet(name = "dsInput8", required = false) List<Map<String,Object>> dsInput8
										, @ParamDataSet(name = "dsInput9", required = false) List<Map<String,Object>> dsInput9
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
		
		datasetMap.put("ds_contract", 			dsInput1);
		datasetMap.put("ds_contract_p_det", 	dsInput2);
		datasetMap.put("ds_contract_s_det", 	dsInput3);
		datasetMap.put("ds_contract_m_det", 	dsInput4);
		datasetMap.put("ds_schedul", 			dsInput5);
		datasetMap.put("ds_addressbook", 		dsInput6);
		datasetMap.put("ds_ma_union", 			dsInput7);
		datasetMap.put("ds_promise", 			dsInput8);
		datasetMap.put("ds_royalty", 			dsInput9);
		datasetMap.put("dsCond", 				searchMap);
		
		List<Map<String, Object>> listMap1 = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> listMap2 = new ArrayList<Map<String, Object>>();
		List<Map<String, Object>> listMap3 = new ArrayList<Map<String, Object>>();
		
		datasetMap.put("ds_in_contract", 	listMap1);
		datasetMap.put("ds_contract_prod_info", listMap2);
		datasetMap.put("ds_contract_goods_info", listMap3);
    	
    	
		ProjectService.saveContractList(datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  		    
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveSP_Contract_R02.do")
	public NexacroResult saveSP_Contract_R02(@ParamDataSet(name = "dsInput", required = false) Map<String,Object> dsInput
										, @ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.saveSP_Contract_R02(dsInput, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  		    
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_PurchaseProduct_S03.do")
	public NexacroResult SP_PurchaseProduct_S03(@ParamDataSet(name = "dsInput", required = false) Map<String,Object> dsInput
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		List<Map<String,Object>> contents = ProjectService.SP_PurchaseProduct_S03(dsInput, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNewDocNo", contents);
		return result;
	}  		    
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_PurchaseProduct_S04.do")
	public NexacroResult SP_PurchaseProduct_S04(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		List<Map<String,Object>> contents = ProjectService.SP_PurchaseProduct_S04(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsProdContractM", contents);
		return result;
	}
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_PurchaseProduct_S02.do")
	public NexacroResult SP_PurchaseProduct_S02(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		List<Map<String,Object>> contents = ProjectService.SP_PurchaseProduct_S02(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsProdContract", contents);
		return result;
	}    
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveSP_PurchaseS_R01.do")
	public NexacroResult saveSP_PurchaseS_R01(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsInput5", required = false) List<Map<String,Object>> dsInput5
										, @ParamDataSet(name = "dsInput6", required = false) List<Map<String,Object>> dsInput6
										, @ParamDataSet(name = "dsInput7", required = false) List<Map<String,Object>> dsInput7
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
		
		datasetMap.put("dsPurchase", 			dsInput1);
		datasetMap.put("dsPurchaseDet", 	dsInput2);
		datasetMap.put("dsPurchasePay", 	dsInput3);
		datasetMap.put("dsProdContractM", 	dsInput4);
		datasetMap.put("dsSiContractDet", 			dsInput5);
		datasetMap.put("dsProdContractTotal", 		dsInput6);
		datasetMap.put("dsNewKey", 			dsInput7);
		datasetMap.put("dsCond", 				searchMap);
		
    	
		Map<String,Object> ds = ProjectService.saveSP_PurchaseS_R01(datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNewKey", ds);
		return result;
	}  		  
    
	/**
	 * presales 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveSP_PurchaseP_R01.do")
	public NexacroResult saveSP_PurchaseP_R01(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, @ParamDataSet(name = "dsInput5", required = false) List<Map<String,Object>> dsInput5
										, @ParamDataSet(name = "dsInput6", required = false) List<Map<String,Object>> dsInput6
										, @ParamDataSet(name = "dsInput7", required = false) List<Map<String,Object>> dsInput7
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
		
		datasetMap.put("dsPurchase", 			dsInput1);
		datasetMap.put("dsPurchaseDet", 	dsInput2);
		datasetMap.put("dsPurchasePay", 	dsInput3);
		datasetMap.put("dsProdContractM", 	dsInput4);
		datasetMap.put("dsSiContractDet", 			dsInput5);
		datasetMap.put("dsProdContractTotal", 		dsInput6);
		datasetMap.put("dsNewKey", 			dsInput7);
		datasetMap.put("dsCond", 				searchMap);
		
    	
		Map<String,Object> ds = ProjectService.saveSP_PurchaseP_R01(datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNewKey", ds);
		return result;
	}  	    
    
	/**
	 * SP_RequestContract.xfdl 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveSP_RequestContract_R01.do")
	public NexacroResult saveSP_RequestContract_R01(@ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
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
		
		datasetMap.put("ds_ReqContract", dsInput1);
		datasetMap.put("ds_FileInfo", 	dsInput2);
		
    	
		Map<String,Object> ds = ProjectService.saveSP_RequestContract_R01(datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsNewKey", ds);
		return result;
	}  	     
    
	/**
	 * SP_RequestContract.xfdl 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectNewReg_R01.do")
	public NexacroResult saveSP_RequestContract_R01(@ParamDataSet(name = "dsInput1", required = false) Map<String,Object> dsInput1
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
    	
		Map<String,Object> ds = ProjectService.SP_ProjectNewReg_R01(dsInput1, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsProjectCode", ds);
		return result;
	}  	      
    
	/**
	 * 프로젝트머지
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ContractMerge_R01.do")
	public NexacroResult SP_ContractMerge_R01(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_ContractMerge_R01(searchMap, dsInput1, dsInput2, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	      
    
	/**
	 * 
	 * 계약확정취소
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_Contract_R03.do")
	public NexacroResult SP_Contract_R03(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_Contract_R03(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		
		return result;
	}  	      
    
	/**
	 * 
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectTS_S04.do")
	public NexacroResult SP_ProjectTS_S04(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		Map<String,Object> map = ProjectService.SP_ProjectTS_S04(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsTsNo", map);
		return result;
	}
    
	/**
	 * 
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectTS_S03.do")
	public NexacroResult SP_ProjectTS_S03(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		List<Map<String,Object>> list = ProjectService.SP_ProjectTS_S03(searchMap, dsInput1, userInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsTSContractDetTmp", list);
		return result;
	}  	        
    
	/**
	 * 거래명세서
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectTS_R02.do")
	public NexacroResult SP_ProjectTS_R02(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsTradingStatementList", required = false) List<Map<String,Object>> dsTradingStatementList
										, @ParamDataSet(name = "dsTSContractList", required = false) List<Map<String,Object>> dsTSContractList
										, @ParamDataSet(name = "dsTSContractDet", required = false) List<Map<String,Object>> dsTSContractDet
										, @ParamDataSet(name = "ds_deleted", required = false) List<Map<String,Object>> ds_deleted
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_ProjectTS_R02(searchMap, dsTradingStatementList, dsTSContractList, dsTSContractDet, ds_deleted, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	     
    
	/**
	 * 거래명세서
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectTS_R04.do")
	public NexacroResult SP_ProjectTS_R04(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_ProjectTS_R04(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	    
    
	/**
	 * 청구,납품서
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectBillDelivery_R01.do")
	public NexacroResult SP_ProjectBillDelivery_R01(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, @ParamDataSet(name = "dsInput3", required = false) List<Map<String,Object>> dsInput3
										, @ParamDataSet(name = "dsInput4", required = false) List<Map<String,Object>> dsInput4
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		
		Map<String,Object> datasetMap = new HashMap<>();
		
		datasetMap.put("dsBillDeliveryList", 	dsInput1);
		datasetMap.put("dsBDContractList", 		dsInput2);
		datasetMap.put("dsBill", 				dsInput3);
		datasetMap.put("dsDelivery", 			dsInput4);
		
		ProjectService.SP_ProjectBillDelivery_R01(searchMap, datasetMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	     
    
	/**
	 * 청구,납품서 복사
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectBillDelivery_R03.do")
	public NexacroResult SP_ProjectBillDelivery_R03(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_ProjectBillDelivery_R03(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	     
    
	/**
	 * 거래명세서 복사
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_ProjectTS_R01.do")
	public NexacroResult SP_ProjectTS_R01(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_ProjectTS_R01(searchMap, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	      
    
	/**
	 * 거래명세서 복사
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/SP_DeliveryConfirm_R01.do")
	public NexacroResult SP_DeliveryConfirm_R01(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, @ParamDataSet(name = "dsInput1", required = false) List<Map<String,Object>> dsInput1
										, @ParamDataSet(name = "dsInput2", required = false) List<Map<String,Object>> dsInput2
										, HttpServletRequest request) throws NexacroException, IOException, Exception, ParseException{
    	
		UserInfo userInfo = (UserInfo) request.getSession().getAttribute("userInfo");
		if(userInfo == null) {
			userInfo = NexaUtil.getDevUserInfo();
			if(userInfo == null) {
				throw new NexacroException("NO USER", -1, "nouser");
			}
		}
		ProjectService.SP_DeliveryConfirm_R01(searchMap, dsInput1, dsInput2, userInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	     
 }
