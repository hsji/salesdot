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
import com.unisales.sales.service.projectService;
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
public class projectServiceImpl implements projectService {

	@Autowired
    private SqlSessionTemplate sqlSession1;
	

		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopContract(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
				String sContractType = (String) rowMap.get("CONTRACT_TYPE");
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	String ds_contractNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", rowMap);
	            	datasetMap.put("ds_contractNo", ds_contractNo);
	            	datasetMap.put("varContractNo", ds_contractNo);
	            	
	            	rowMap.put("varContractNo", ds_contractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_LIST_I_U",rowMap);
	            	
		    		if (sContractType.equals("PD") || sContractType.equals("GD")) {	
		    			sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_PRODUCT",rowMap);
		    		} else if (sContractType.equals("ZS") || sContractType.equals("ZT")) {
		    			sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_SI",rowMap);
		    		} else if (sContractType.equals("SM")) {
		    			sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_MA",rowMap);
		    		}
		 
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_LIST_I_U",rowMap);
		    		if (sContractType.equals("PD") || sContractType.equals("GD")) {	
		    			sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_PRODUCT",rowMap);
		    		} else if (sContractType.equals("ZS") || sContractType.equals("ZT")) {
		    			sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_SI",rowMap);
		    		} else if (sContractType.equals("SM")) {
		    			sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_MA",rowMap);		    			
		    		}	            		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.update("projectMapper.deleteSP_Contract_R01_CONTRACT",rowMap);	
	            }
	            

			}

		}	
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java CONTRACT_PROD_DET
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractProdDetail(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_p_det");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_PROD_DET",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_PROD_DET",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.update("projectMapper.deleteSP_Contract_R01_CONTRACT_PROD_DET",rowMap);	
	            }
			}
		}			
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java CONTRACT_SI_DET
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractSIDetail(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_s_det");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_SI_DET",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_SI_DET",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.update("projectMapper.deleteSP_Contract_R01_CONTRACT_SI_DET",rowMap);	
	            }
			}
		}			
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java CONTRACT_MA_DET
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractMADetail(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_m_det");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_CONTRACT_MA_DET",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_CONTRACT_MA_DET",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.update("projectMapper.deleteSP_Contract_R01_CONTRACT_MA_DET",rowMap);	
	            }
			}
		}			
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java SALES_SCHEDULE
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractSchedule(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_schedul");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_Schedule",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_Schedule",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.delete("projectMapper.deleteSP_Contract_R01_Schedule",rowMap);	
	            }
			}
		}				
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java SALES_SCHEDULE
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractAddressBook(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_addressbook");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_Address",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_Address",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.delete("projectMapper.deleteSP_Contract_R01_Address",rowMap);	
	            }
			}
		}		
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java SALES_SCHEDULE
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractMAUnion(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_ma_union");
			String varContractNo = (String) datasetMap.get("varContractNo");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_MAUnion",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_MAUnion",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.delete("projectMapper.deleteSP_Contract_R01_MAUnion",rowMap);	
	            }
			}
		}		
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java SALES_SCHEDULE
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractPromise(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_promise");
			String varContractNo = (String) datasetMap.get("varContractNo");
			if(varContractNo == null) varContractNo = "";
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("varContractNo", varContractNo);
	            	sqlSession.insert("projectMapper.insertSP_Contract_R01_Promise",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession.update("projectMapper.updateSP_Contract_R01_Promise",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession.delete("projectMapper.deleteSP_Contract_R01_Promise",rowMap);	
	            }
			}
		}
		
		/**
		 * ds_contract (계약)을 읽어 처리 SP_Contract_R01BaseAutomationLogic.java SALES_SCHEDULE
		 * @param datasetMap
		 * @throws Exception
		 */
		public void contractRoyalty(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_royalty");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
			    String sRoyaltySeq = (String) rowMap.get("ROYALTY_SEQ");
			    
			    if (sRoyaltySeq != null) {
			    	sqlSession.update("projectMapper.updateSP_Contract_R01_Royalty",rowMap);    
			    } else {
			    	sqlSession.insert("projectMapper.insertSP_Contract_R01_Royalty",rowMap);
			    }
			}
		}		
		
	
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
	 * @throws Exception 
		 */
	    @Override
	    public void saveContractList(Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	try {
	    		// PROJECT
	    		System.out.println("===[saveContractList dataSetRowLoopContract]===");
		    	dataSetRowLoopContract(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList dataSetRowLoopContract end]===");
		  
		    	System.out.println("===[saveContractList contractProdDetail]===");
		    	contractProdDetail(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractProdDetail end]===");
		    	
		    	System.out.println("===[saveContractList contractSIDetail]===");
		    	contractSIDetail(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractSIDetail end]===");	
		    	
		    	System.out.println("===[saveContractList contractMADetail]===");
		    	contractMADetail(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractMADetail end]===");	
		    	
		    	System.out.println("===[saveContractList contractSchedule]===");
		    	contractSchedule(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractSchedule end]===");			    
		
		    	System.out.println("===[saveContractList contractAddressBook]===");
		    	contractAddressBook(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractAddressBook end]===");
		    	
		    	System.out.println("===[saveContractList contractMAUnion]===");
		    	contractMAUnion(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractMAUnion end]===");	
		    	
		    	System.out.println("===[saveContractList contractPromise]===");
		    	contractPromise(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractPromise end]===");			    	
		    	
		    	System.out.println("===[saveContractList contractRoyalty]===");
		    	contractRoyalty(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList contractRoyalty end]===");			    	
		 
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
	    
		public void setRowType(Map<String,Object> datasetMap) throws Exception {
			
			String[] myArray = {"ds_Project", "ds_ContractProd", "ds_PurchaseProd", "ds_ContractSi", "ds_PurchaseSi"};
			
			for(int i=0, len=5;i<5;i++) {
				List<Map<String,Object>> dsIn = (List<Map<String, Object>>) datasetMap.get(myArray[i]);
				if(dsIn == null) continue;
				int size = dsIn.size();
				if (size>0) {
					for (int j=0; j<size; j++) {
						Map<String, Object> oneMap = dsIn.get(j);
						String sGb = (String) oneMap.get("GB");
						if (sGb.equals("I")){
							oneMap.put(DataSetRowTypeAccessor.NAME, DataSet.ROW_TYPE_INSERTED);
						} else if (sGb.equals("U")){
							oneMap.put(DataSetRowTypeAccessor.NAME, DataSet.ROW_TYPE_UPDATED);
						}
					}
				}
			}
		}
	    

	    /**
		 *  조회
		 * @param queryMap		: Mapper Info
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 Map
		 */
	    @Override
	    public Map<String,Object> searchMap(Map<String,String> queryMap, Map<String,Object> search, UserInfo userInfo) {  	
			String mapper = queryMap.get("map");
			String mapperId = queryMap.get("mapid");
			String strMapper = mapper + ".select" + mapperId; 
			
			search.put("USER_ID_SRV", userInfo.getStrEmpNo());
			search.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
			search.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
			search.put("EMP_NO_SRV", userInfo.getStrEmpNo());	
			
	    	return sqlSession1.selectOne(strMapper, search);
	    }
	    
	    /**
		 *  조회
		 * @param queryMap		: Mapper Info
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> searchList(Map<String,String> queryMap, Map<String,Object> search, UserInfo userInfo) {  	
			String mapper = queryMap.get("map");
			String mapperId = queryMap.get("mapid");
			String strMapper = mapper + ".select" + mapperId; 
			
			search.put("USER_ID_SRV", userInfo.getStrEmpNo());
			search.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
			search.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
			search.put("EMP_NO_SRV", userInfo.getStrEmpNo());	
			
	    	return sqlSession1.selectList(strMapper, search);
	    }    	    
	    
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
	 * @throws Exception 
		 */
	    @Override
	    public void saveSP_Contract_R02(Map<String,Object> dsInput, UserInfo userInfo) 
	    				throws Exception {
	    	
    		Map<String,String> inMap = new HashMap<>();
    		inMap.put("CONTRACT_TYPE"	, "SM");
  		
    		String curDate = sqlSession1.selectOne("nextBaseMapper.selectCurrentDate");
	    	String ctrtNo = sqlSession1.selectOne("salesManagerMapper.selectCreateContractNo",inMap);
	    	
	    	dsInput.put("CONTRACT_DATE", curDate);
	    	dsInput.put("NEW_CONTRACT_NO", ctrtNo);
	    	
	    	sqlSession1.insert("projectMapper.insertSP_Contract_R02",inMap);
	    }
	    
	    /**
		 *  조회
		 * @param queryMap		: Mapper Info
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> SP_PurchaseProduct_S03(Map<String,Object> dsInput, UserInfo userInfo) {  	
			
	    	dsInput.put("USER_ID_SRV", userInfo.getStrEmpNo());
	    	dsInput.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
	    	dsInput.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
			
			Map<String,Object> result = sqlSession1.selectOne("projectMapper.searchSP_PurchaseProduct_S03_1", dsInput);
			dsInput.put("CONTRACT_DOC_NO_NEW", result.get("CONTRACT_DOC_NO_NEW"));
			sqlSession1.update("projectMapper.updateSP_PurchaseProduct_S03", dsInput);
			
	    	return sqlSession1.selectList("projectMapper.searchSP_PurchaseProduct_S03_2", dsInput);
	    }    		
	    
	    /**
		 *  조회
		 * @param queryMap		: Mapper Info
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> SP_PurchaseProduct_S04(Map<String,Object> search, UserInfo userInfo) {  	
			
			search.put("USER_ID_SRV", userInfo.getStrEmpNo());
			search.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
			search.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
			
			int result = sqlSession1.selectOne("projectMapper.searchSP_PurchaseProduct_S04_1", search);
			if(result == 0) {
				sqlSession1.insert("projectMapper.insertSP_PurchaseProduct_S04", search);
			}
	    	return sqlSession1.selectList("projectMapper.searchSP_PurchaseProduct_S04_2", search);
	    }    
	    
	    
	    /**
		 *  조회
		 * @param queryMap		: Mapper Info
		 * @param searchMap		: 조회 조건 Map
		 * @return				: 조회결과 List
		 */
	    @Override
	    public List<Map<String,Object>> SP_PurchaseProduct_S02(Map<String,Object> search, UserInfo userInfo) {  	
			
			search.put("USER_ID_SRV", userInfo.getStrEmpNo());
			search.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
			search.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
			
			int result = sqlSession1.selectOne("projectMapper.searchSP_PurchaseSi_S02_1", search);
			if(result == 0) {
				sqlSession1.insert("projectMapper.insertSP_PurchaseProduct_S04", search);
			}
	    	return sqlSession1.selectList("projectMapper.searchSP_PurchaseProduct_S04_1", search);
	    }
	    
		/**
		 * SP_PurchaseS_R01BaseAutomationLogic.java public void model
		 * @param datasetMap
		 * @throws Exception
		 */
		public void SP_PurchaseSi_R01(SqlSession sqlSession, Map<String,Object> datasetMap, Map<String,Object> rowMap, UserInfo userInfo) throws Exception {
			String dsNewKey = sqlSession.selectOne("salesManagerMapper.selectCreatePurchaseCode", rowMap);
			
		}
	    
	    
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_model(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsCond = (List<Map<String, Object>>) datasetMap.get("dsCond");
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("dsPurchase");
			List<Map<String,Object>> dsPurchaseDet = (List<Map<String, Object>>) datasetMap.get("dsPurchaseDet");
			
			int rowCount = ds.size();
			String dsNewKey = sqlSession.selectOne("salesManagerMapper.selectCreatePurchaseCode", dsCond);
			
			if(rowCount <= 0) return;			
			int rowType = 0;
			int rowCountDet = dsPurchaseDet.size();

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
				rowMap.put("CONTRACT_NO_PURCHASE_NEW", dsNewKey);
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	
					String contractNoPurchase 	= (String) rowMap.get("CONTRACT_NO_PURCHASE");
					if(contractNoPurchase != null && !contractNoPurchase.isEmpty())
					{
						dsNewKey = contractNoPurchase;
						rowMap.put("CONTRACT_NO_PURCHASE_NEW", dsNewKey);
						datasetMap.put("dsNewKey", dsNewKey);
					}
					
					sqlSession.insert("projectMapper.insertSP_PurchaseSI_R01",rowMap);
					
						
					
					for(int j = 0, jL = rowCountDet; j < jL; j++)
					{
						Map<String,Object> rowDetMap = dsPurchaseDet.get(j);
						
						String contractNoPurchase2 = (String) rowDetMap.get("CONTRACT_NO_PURCHASE");
						if(contractNoPurchase2 == null || contractNoPurchase2.isEmpty())
						{
							rowDetMap.put("CONTRACT_NO_PURCHASE", dsNewKey);
						}
					}	
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseSI_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.update("projectMapper.deleteSP_PurchaseSI_R01",rowMap);	
	            }
			}
			
		}	    
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_model2(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsPurchase = (List<Map<String, Object>>) datasetMap.get("dsPurchase");
			List<Map<String,Object>> dsPurchaseDet = (List<Map<String, Object>>) datasetMap.get("dsPurchaseDet");
			List<Map<String,Object>> dsPurchasePay = (List<Map<String, Object>>) datasetMap.get("dsPurchasePay");
			String dsNewKey = (String) datasetMap.get("dsNewKey");
			
			int rowCount = dsPurchaseDet.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsPurchaseDet.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
					sqlSession.insert("projectMapper.insertSP_PurchaseSIDet_R01",rowMap);
					
					Map<String,Object> dsLastKey = sqlSession.selectOne("salesManagerMapper.searchSP_PurchaseSIDet_select");
					datasetMap.put("dsDetLastKey", dsLastKey.get("PSD_SEQ_NEW"));
					
					String lumpPayFlag = (String) dsPurchase.get(0).get("LUMP_PAY_FLAG");
					for(int j = 0, jL = dsPurchasePay.size(); j < jL; j++)
					{
						Map<String,Object> rowPMap = dsPurchaseDet.get(j);
						
						String contractNoPurchase = (String) rowPMap.get("CONTRACT_NO_PURCHASE");
						if(contractNoPurchase == null || contractNoPurchase.isEmpty())
						{
							rowPMap.put("CONTRACT_NO_PURCHASE", dsNewKey);
						}
						
						if(lumpPayFlag != "1")
						{
							String psdSeq = (String) rowPMap.get("PSD_SEQ");
							if(psdSeq == null || psdSeq.isEmpty())
							{
								rowPMap.put("PSD_SEQ", datasetMap.get("dsDetLastKey"));
							}
						}
					}					
					
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseSIDet_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.update("projectMapper.deleteSP_PurchaseSIDet_R01",rowMap);	
	            }
			}
			
		}
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_model11(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsPurchasePay = (List<Map<String, Object>>) datasetMap.get("dsPurchasePay");
			int rowCount = dsPurchasePay.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsPurchasePay.get(rowIndex);
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
					sqlSession.insert("projectMapper.insertSP_PurchasePay_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchasePay_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.delete("projectMapper.deleteSP_PurchasePay_R01",rowMap);	
	            }
			}
			
		}
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_model3(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			
			sqlSession.update("projectMapper.updateSP_PurchaseS_R01_model3");
		}		
		
				
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_modify(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsSiContractDet = (List<Map<String, Object>>) datasetMap.get("dsSiContractDet");
			int rowCount = dsSiContractDet.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsSiContractDet.get(rowIndex);
				
				String sContractType = (String) rowMap.get("CONTRACT_TYPE");
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseS_R01_modify",rowMap);
	            }
			}
		}
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseS_R01_modify1(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsProdContractTotal = (List<Map<String, Object>>) datasetMap.get("dsProdContractTotal");
			List<Map<String,Object>> dsPurchaseDet = (List<Map<String, Object>>) datasetMap.get("dsPurchaseDet");
			int rowCount = dsProdContractTotal.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsProdContractTotal.get(rowIndex);
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	rowMap.put("dsPurchaseDetCONTRACT_NO_PURCHASE" , dsPurchaseDet.get(0).get("CONTRACT_NO_PURCHASE"));
					sqlSession.insert("projectMapper.insertSP_PurchaseS_R01_modify1",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseS_R01_modify1",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.delete("projectMapper.deleteSP_PurchaseS_R01_modify1",rowMap);	
	            }
			}
			
		}		
		
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public Map<String,Object> saveSP_PurchaseS_R01(Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

			Map<String,Object> dsNewKey = new HashMap<>();
	    	
	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	try {
	    		// PROJECT
	    		System.out.println("===[saveContractList PurchaseS_R01_model]===");
	    		PurchaseS_R01_model(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_model end]===");
		  
		    	System.out.println("===[saveContractList PurchaseS_R01_model2]===");
		    	PurchaseS_R01_model2(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_model2 end]===");
		    	
		    	System.out.println("===[saveContractList PurchaseS_R01_model11]===");
		    	PurchaseS_R01_model11(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_model11 end]===");	
		    	
		    	System.out.println("===[saveContractList PurchaseS_R01_model3]===");
		    	PurchaseS_R01_model3(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_model3 end]===");	
		    	
		    	System.out.println("===[saveContractList PurchaseS_R01_modify]===");
		    	PurchaseS_R01_modify(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_modify end]===");			    
		
		    	System.out.println("===[saveContractList PurchaseS_R01_modify1]===");
		    	PurchaseS_R01_modify1(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_modify1 end]===");
		    	
				dsNewKey.put("CONTRACT_NO_PURCHASE_NEW", 			datasetMap.get("dsNewKey"));		    	
		    	
		    	sqlSession.getConnection().setAutoCommit(true);
		    	sqlSession.commit();
	    	} catch (Exception e) {
	    		sqlSession.rollback();
	    		throw new Exception();
	    	} finally {
	    		//sqlSession.getConnection().setAutoCommit(true);
	    		sqlSession.close();
	    	}
	    	
	    	return dsNewKey;
	    }    	    
	    
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseP_R01_PURCHASE_PRODUCT(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsCond = (List<Map<String, Object>>) datasetMap.get("dsCond");
			List<Map<String,Object>> dsPurchase = (List<Map<String, Object>>) datasetMap.get("dsPurchase");
			List<Map<String,Object>> dsPurchaseDet = (List<Map<String, Object>>) datasetMap.get("dsPurchaseDet");
			
			int rowCount = dsPurchase.size();
			String dsNewKey = sqlSession.selectOne("salesManagerMapper.selectCreatePurchaseCode", dsCond);
			datasetMap.put("dsNewKey", dsNewKey);
			if(rowCount <= 0) return;			
			int rowType = 0;
			int rowCountDet = dsPurchaseDet.size();

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsPurchase.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
				rowMap.put("CONTRACT_NO_PURCHASE_NEW", dsNewKey);
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
	            	
					String contractNoPurchase 	= (String) rowMap.get("CONTRACT_NO_PURCHASE");
					if(contractNoPurchase != null && !contractNoPurchase.isEmpty())
					{
						dsNewKey = contractNoPurchase;
						rowMap.put("CONTRACT_NO_PURCHASE_NEW", dsNewKey);
						datasetMap.put("dsNewKey", dsNewKey);
					}
					
					sqlSession.insert("projectMapper.insertSP_PurchaseSI_R01",rowMap);
					sqlSession.update("projectMapper.updateSP_PurchaseP_R01",rowMap);
					
					sqlSession.insert("projectMapper.insertSP_PurchaseP_R01_prod",rowMap);
					
					sqlSession.insert("projectMapper.insertSP_PurchaseP_R01_over",rowMap);
					
					for(int j = 0, jL = rowCountDet; j < jL; j++)
					{
						Map<String,Object> rowDetMap = dsPurchaseDet.get(j);
						
						String contractNoPurchase2 = (String) rowDetMap.get("CONTRACT_NO_PURCHASE");
						if(contractNoPurchase2 == null || contractNoPurchase2.isEmpty())
						{
							rowDetMap.put("CONTRACT_NO_PURCHASE", dsNewKey);
						}
					}						
					
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseSI_R01",rowMap);
	            	sqlSession.update("projectMapper.updateSP_PurchaseP_R01_1",rowMap);
	            	
	            	sqlSession.update("projectMapper.updateSP_PurchaseP_R01_prod",rowMap);
	            	
	            	sqlSession.insert("projectMapper.insertSP_PurchaseP_R01_over",rowMap);
	            	
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.update("projectMapper.deleteSP_PurchaseSI_R01",rowMap);	
	            }
			}
			
		}	    
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseP_R01_PURCHASE_PRODUCT_DET(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsPurchase = (List<Map<String, Object>>) datasetMap.get("dsPurchase");
			List<Map<String,Object>> dsPurchaseDet = (List<Map<String, Object>>) datasetMap.get("dsPurchaseDet");
			List<Map<String,Object>> dsPurchasePay = (List<Map<String, Object>>) datasetMap.get("dsPurchasePay");
			String dsNewKey = (String) datasetMap.get("dsNewKey");
			
			int rowCount = dsPurchaseDet.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsPurchaseDet.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
					sqlSession.insert("projectMapper.insertSP_PurchaseP_R01_PRODUCT_DET",rowMap);
					
					Map<String,Object> dsLastKey = sqlSession.selectOne("projectMapper.searchSP_PurchasePDet_select");
					datasetMap.put("dsDetLastKey", dsLastKey.get("PPD_SEQ_NEW"));
					
					String lumpPayFlag = (String) dsPurchase.get(0).get("LUMP_PAY_FLAG");
					for(int j = 0, jL = dsPurchasePay.size(); j < jL; j++)
					{
						Map<String,Object> rowPMap = dsPurchaseDet.get(j);
						
						String contractNoPurchase = (String) rowPMap.get("CONTRACT_NO_PURCHASE");
						if(contractNoPurchase == null || contractNoPurchase.isEmpty())
						{
							rowPMap.put("CONTRACT_NO_PURCHASE", dsNewKey);
						}
						
						if(lumpPayFlag != "1")
						{
							String psdSeq = (String) rowPMap.get("PPD_SEQ");
							if(psdSeq == null || psdSeq.isEmpty())
							{
								rowPMap.put("PPD_SEQ", datasetMap.get("dsDetLastKey"));
							}
						}
					}					
					
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseP_R01_PRODUCT_DET",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.update("projectMapper.deleteSP_PurchaseP_R01_PRODUCT_DET",rowMap);	
	            }
			}
			
		}
		
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseP_R01_PURCHASE_PAY(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsPurchasePay = (List<Map<String, Object>>) datasetMap.get("dsPurchasePay");
			int rowCount = dsPurchasePay.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsPurchasePay.get(rowIndex);
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
					sqlSession.insert("projectMapper.insertSP_PurchasePay_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchasePay_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.delete("projectMapper.deleteSP_PurchasePay_R01",rowMap);	
	            }
			}
			
		}		
		//----------------------------------
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseP_R01_model3(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			
			sqlSession.update("projectMapper.updateSP_PurchaseS_R01_model3");
		}		
		
				
		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void PurchaseP_R01_PURCHASE_MA_UNION(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> dsProdContractM = (List<Map<String, Object>>) datasetMap.get("dsProdContractM");
			int rowCount = dsProdContractM.size();
			if(rowCount <= 0) return;			
			int rowType = 0;

			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsProdContractM.get(rowIndex);
				
				String sContractType = (String) rowMap.get("CONTRACT_TYPE");
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가 
					sqlSession.insert("projectMapper.insertSP_PurchaseP_R01_union",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession.update("projectMapper.updateSP_PurchaseP_R01_union",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	sqlSession.delete("projectMapper.deleteSP_PurchaseP_R01_union",rowMap);	
	            }
			}
		}
		
		
		//----------------------------------
    
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public Map<String,Object> saveSP_PurchaseP_R01(Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

			Map<String,Object> dsNewKey = new HashMap<>();
	    	
	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	try {
	    		// PROJECT
	    		System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_PRODUCT]===");
	    		PurchaseP_R01_PURCHASE_PRODUCT(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_PRODUCT end]===");

	    		System.out.println("===[saveContractList PurchaseS_R01_PURCHASE_PRODUCT_DET]===");
	    		PurchaseP_R01_PURCHASE_PRODUCT_DET(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseS_R01_PURCHASE_PRODUCT_DET end]===");

	    		System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_PAY]===");
	    		PurchaseP_R01_PURCHASE_PAY(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_PAY end]===");

	    		System.out.println("===[saveContractList PurchaseP_R01_model3]===");
	    		PurchaseP_R01_model3(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseP_R01_model3 end]===");

	    		System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_MA_UNION]===");
	    		PurchaseP_R01_PURCHASE_MA_UNION(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[saveContractList PurchaseP_R01_PURCHASE_MA_UNION end]===");

				dsNewKey.put("CONTRACT_NO_PURCHASE_NEW", 			datasetMap.get("dsNewKey"));		    	
		    	
		    	sqlSession.getConnection().setAutoCommit(true);
		    	sqlSession.commit();
	    	} catch (Exception e) {
	    		sqlSession.rollback();
	    		throw new Exception();
	    	} finally {
	    		//sqlSession.getConnection().setAutoCommit(true);
	    		sqlSession.close();
	    	}
	    	
	    	return dsNewKey;
	    }    		    
		
	    
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public Map<String,Object> saveSP_RequestContract_R01(Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

			Map<String,Object> dsNewKey = new HashMap<>();
	    	
	    	try {
	    		List<Map<String,Object>> ds_ReqContract = (List<Map<String, Object>>) datasetMap.get("ds_ReqContract");
	    		List<Map<String,Object>> ds_FileInfo = (List<Map<String, Object>>) datasetMap.get("ds_FileInfo");
	    		
	    		int rowType;
	            int size = ds_ReqContract.size();
	            for (int i=0; i<size; i++) {
	                Map<String,Object> saveMap = ds_ReqContract.get(i);
	                
	                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
	                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
	                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
	                
	                //rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	                
	                String sProjectCd = (String) saveMap.get("PROJECT_CODE");
	        		String sContractNo = (String) saveMap.get("CONTRACT_NO");
	        		
	        		if (sContractNo.substring(0,2).equals("ZS")) {
	            		Map<String, Object> newMap = new HashMap<>();
	            		newMap.put("PROJECT_CODE"	, sProjectCd);
	            		newMap.put("CONTRACT_NO"	, sContractNo);   
	            		
	            		ds_FileInfo.add(newMap);
	            		// FIND_CONTRACT_NO
	            		List<Map<String, Object>> ds_costsheet = sqlSession1.selectList("projectMapper.selectSP_CostSheet_R02", newMap);
	            		if(ds_costsheet.size()>0) {
	            			// FIND_PROJECT_CODE
	            			List<Map<String, Object>> ds_project = sqlSession1.selectList("projectMapper.selectSP_CostSheet_R02_findProject", newMap);
	            			// decision1
	            			if(ds_project.size()>0) {
	            				sqlSession1.insert("projectMapper.insertCostSheet_R02_COSTSHEET_CONTRACT",newMap);
	            				Map<String, Object> ds_ccseq = sqlSession1.selectOne("projectMapper.selectSP_CostSheet_R02_GetSeq");
	            				newMap.put("CC_SEQ", ds_ccseq.get("CC_SEQ"));
	            				sqlSession1.insert("projectMapper.insertCostSheet_R02_COSTSHEET_CONTRACT",newMap);
	            				sqlSession1.insert("projectMapper.insertCostSheet_R02_COSTSHEET_PURCHASE_SI",newMap);
	            			}
	            		}
	        		}
            		sqlSession1.update("projectMapper.updateCostSheet_R02_modify",saveMap);
	            }	
	            
	            size = ds_FileInfo.size();
	            for (int i=0; i<size; i++) {
	                Map<String,Object> saveMap = ds_FileInfo.get(i);
	                
	                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
	                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
	                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
	                
	                //rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	                sqlSession1.update("projectMapper.updateCostSheet_R02_modify2",saveMap);
	            }		            
	    	} catch (Exception e) {
	    		throw new Exception();
	    	} finally {
	    	}
	    	
	    	return dsNewKey;
	    }    			    
	    
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public Map<String,Object> SP_ProjectNewReg_R01(Map<String,Object> dsProjectCode, UserInfo userInfo) 
	    				throws Exception {
			Map<String,Object> dsNewKey = sqlSession1.selectOne("salesManagerMapper.selectCreateProjectCode");
			dsProjectCode.put("PROJECT_CODE", dsNewKey.get("PROJECT_CODE"));
			sqlSession1.insert("projectMapper.insertSP_ProjectNewReg_R01",dsProjectCode);
	    	
	    	return dsNewKey;
	    }    	
	    
	   /**
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ProjectTS_R04(Map<String,Object> searchMap, UserInfo userInfo) 
	    				throws Exception {
			int seq = sqlSession1.selectOne("salesManagerMapper.selectSP_ProjectTS_R04_1");
			List<Map<String,Object>> list = sqlSession1.selectList("salesManagerMapper.selectSP_ProjectTS_R04_2");
	    	int rowType;
	        int size = list.size();
	        for (int i=0; i<size; i++) {
	            Map<String,Object> saveMap = list.get(i);
	            
	            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
	            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
	            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
	            
            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R04_3",saveMap);
	        }			
	        
	        if(searchMap.get("CONTRACT_TYPE").equals("M")) {
	        	// TRADING_STATEMENT_KEY_S(
	        	Map<String,Object> seqMap = sqlSession1.selectOne("salesManagerMapper.SP_ProjectTS_R02_11");
	        	// TS_CONT_S
	        	List<Map<String,Object>> dsTSContractList = sqlSession1.selectOne("salesManagerMapper.selectSP_ProjectTS_R04_4", seqMap);
		        size = dsTSContractList.size();
		        for (int i=0; i<size; i++) {
		            Map<String,Object> saveMap = dsTSContractList.get(i);
		            
		            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		            // TS_CONT_I
	            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R04_5",saveMap);
		        }		
		        // TS_DET_S
		        List<Map<String,Object>> dsTSDet = sqlSession1.selectOne("salesManagerMapper.selectSP_ProjectTS_R04_6", seqMap);
		        
		        size = dsTSContractList.size();
		        for (int i=0; i<size; i++) {
		            Map<String,Object> saveMap = dsTSContractList.get(i);
		            
		            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		            saveMap.put("ds_TSSeqTS_SEQ", seqMap.get("TS_SEQ"));
		            // TS_DET_I
	            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R04_7",saveMap);
		        }				        
	        }
	    }    		    
	    
	   /**
		 * 
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ProjectTS_R02(Map<String,Object> searchMap, List<Map<String,Object>> dsTradingStatementList,
	    		List<Map<String,Object>> dsTSContractList,
	    		List<Map<String,Object>> dsTSContractDet,
	    		List<Map<String,Object>> ds_deleted,
	    		UserInfo userInfo)
	    				throws Exception {
	    	
	    	int rowType;
	        int size = dsTradingStatementList.size();
	        for (int i=0; i<size; i++) {
	            Map<String,Object> saveMap = dsTradingStatementList.get(i);
	            
	            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
	            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
	            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
	            
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	            
	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02",saveMap);
	            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession1.update("projectMapper.updateSP_ProjectTS_R02",saveMap);
	            }
	        }
	        // decision
	        int mode = (int) searchMap.get("MODE_FLAG");
	        // decisionconnection
	        if(mode == 1) {
	        	// TS_SEQ_S
	        	int seq = sqlSession1.selectOne("salesManagerMapper.SP_ProjectTS_R02_1");
	        	
	        	// N_TS_CONTRACT_LIST_I_D
	        	if(dsTSContractList != null) {
			        size = dsTSContractList.size();
			        for (int i=0; i<size; i++) {
			            Map<String,Object> saveMap = dsTSContractList.get(i);
			            
			            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
			            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
			            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
			            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
			            saveMap.put("ds_TSSeqTS_SEQ", seq);
			            
			            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
			            
			            if (rowType == DataSet.ROW_TYPE_INSERTED){
			            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_1",saveMap);
			            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
			            	sqlSession1.insert("projectMapper.deleteSP_ProjectTS_R02_1",saveMap);
			            }else if (rowType == DataSet.ROW_TYPE_DELETED){
			            }
			        }	   
	        	}
		        
		        // N_TS_CONTRACT_DET_I
		        size = dsTSContractDet.size();
		        for (int i=0; i<size; i++) {
		            Map<String,Object> saveMap = dsTSContractDet.get(i);
		            
		            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		            saveMap.put("ds_TSSeqTS_SEQ", seq);
		            
		            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		            
		            if (rowType == DataSet.ROW_TYPE_INSERTED){
		            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_2",saveMap);
		            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
		            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_2",saveMap);
		            }else if (rowType == DataSet.ROW_TYPE_DELETED){
		            }
		        }			        
	        } else {	// decisionconnection1
	        	
	        	// dataSetRowLoop1
	        	
	        	// decision2
		        size = dsTSContractDet.size();
		        for (int i=0; i<size; i++) {
		            Map<String,Object> saveMap = dsTSContractDet.get(i);
		            
		            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		            
		            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		            
		            // decision2connection
		            if (rowType == DataSet.ROW_TYPE_INSERTED){
		            	// select
		            	int seq1 = sqlSession1.selectOne("salesManagerMapper.selectSP_ProjectTS_R02_3");
		            	
		            	// decision3connection
		            	if(seq1 == 0) {
		            		// TS_CONTRACT_LIST_I
		            		sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_4",saveMap);
		            		// TS_CONTRACT_DET_I
		            		sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_5",saveMap);
		            	} else {
		            		sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_5",saveMap);
		            	}
		            	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R02_2",saveMap);
		            }else{	// decision2connection1
		            	sqlSession1.update("projectMapper.updateSP_ProjectTS_R02_6",saveMap);
		            }
		        }		    
		        
		        // dataSetRowLoop
		        size = ds_deleted.size();
		        for (int i=0; i<size; i++) {
		            Map<String,Object> saveMap = ds_deleted.get(i);
		            
		            saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		            saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		            saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		            saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		            
		            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		            
		            // TS_CONTRACT_DET_D(
		            if (rowType == DataSet.ROW_TYPE_INSERTED){
		            	sqlSession1.delete("projectMapper.deleteSP_ProjectTS_R02_7",saveMap);
		            }
		            
		            int seq3 = sqlSession1.selectOne("salesManagerMapper.selectSP_ProjectTS_R02_8");
		            if(seq3 == 0) {
		            	sqlSession1.delete("projectMapper.deleteSP_ProjectTS_R02_9",saveMap);
		            }
		        }				        
	        }
	    }    		    
	    
	   /**
		 * 확정취소.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public List<Map<String,Object>> SP_ProjectTS_S03(Map<String,Object> searchMap, List<Map<String,Object>> dsInput1, UserInfo userInfo)
	    				throws Exception {
	    	
	    	int rowIdx = 0;
	    	List<Map<String,Object>> dsRtn = new ArrayList<Map<String,Object>>();
	    	
	    	while(dsInput1.size() > rowIdx) {
	    		Map<String, Object> rowMap =  dsInput1.get(rowIdx);
	    		
	    		// setInfo
	    		Map<String, Object> newMap = new HashMap<>();
	    		newMap.put("CONTRACT_NO"	, rowMap.get("CONTRACT_NO"));
	    		
	    		// TSDetListNew_search
	    		List<Map<String,Object>> dsOut = sqlSession1.selectList("projectMapper.SP_ProjectTS_S03_1",newMap);
	    		
	    		// addRowCount
	    		int ord = rowIdx + 1;
	    		
	    		for(int i=0,len=dsOut.size();i<len;i++) {
	    			Map<String, Object> outMap =  dsOut.get(i);
	    			outMap.put("ORD", ord);
	    			dsRtn.add(outMap);
	    		}
	    		
	    		rowIdx++;
	    	}

	    	return dsRtn;
	    }    		
	    
	   /**
		 * 확정취소.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public Map<String,Object> SP_ProjectTS_S04(Map<String,Object> searchMap, UserInfo userInfo)
	    				throws Exception {
	    	
	    	int cnt1 = sqlSession1.selectOne("projectMapper.selectSSP_ProjectTS_S04_1",searchMap);
	    	Map<String,Object> map;
	    	if(cnt1 == 0) {
	    		map = sqlSession1.selectOne("projectMapper.selectSSP_ProjectTS_S04_2",searchMap);
	    	} else {
	    		map = sqlSession1.selectOne("projectMapper.selectSSP_ProjectTS_S04_3",searchMap);
	    	}
	    	return map;
	    }    			    
	    
	   /**
		 * 확정취소.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_Contract_R03(Map<String,Object> searchMap, UserInfo userInfo)
	    				throws Exception {
	    	
	    	sqlSession1.update("projectMapper.updateSP_Contract_R03",searchMap);
	    	
	    	sqlSession1.delete("projectMapper.deleteSP_Contract_R03_1",searchMap);
			List<Map<String,Object>> dsSeq = sqlSession1.selectList("projectMapper.selectSP_Contract_R03_1");
			
			int size = dsSeq.size();
			for(int i=0;i<size;i++) {
				Map<String,Object> map = dsSeq.get(i);
				sqlSession1.delete("projectMapper.deleteSP_Contract_R03_2",map);
			}
	    }    	    
	    
	   /**
		 * 프로젝트 머지.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ContractMerge_R01(Map<String,Object> searchMap, List<Map<String,Object>> dsInput1, List<Map<String,Object>> dsInput2, UserInfo userInfo)
	    				throws Exception {
	    	
	    	int cnt1 = sqlSession1.selectOne("projectMapper.selectSP_ContractMerge_R01_Source_ContractCount",searchMap);
	    	
	 		int rowType;
	        int size = dsInput1.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsInput1.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("T_PROJECT_CODE", searchMap.get("T_PROJECT_CODE"));
                
	             rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.update("projectMapper.updateSP_ContractMerge_R01_ContractList", saveMap);
	             }
	        }
	         
	        size = dsInput2.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsInput2.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("T_PROJECT_CODE", searchMap.get("T_PROJECT_CODE"));
                
	             rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.update("projectMapper.updateSP_ContractMerge_R01_PURCHASE", saveMap);
	             }
	        }		        
	        
	        int cnt2 = sqlSession1.selectOne("projectMapper.selectSP_ContractMerge_R01_CONTRACT_CNT",searchMap);
	        if(cnt2 == 0) {
	        	sqlSession1.update("projectMapper.updateSP_ContractMerge_R01_PROJECT_LIST_DEL", searchMap);
	        }
	        
	        if(cnt1 == dsInput1.size()) {
	        	sqlSession1.update("projectMapper.updateSP_ContractMerge_R01_ETC", searchMap);
	        }
	    }  
	    
	   /**
		 * 확정취소.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ProjectBillDelivery_R01(Map<String,Object> searchMap, Map<String,Object> datasetMap, UserInfo userInfo)
	    				throws Exception {
	    	
	    	Map<String,Object> dsOutput = sqlSession1.selectOne("projectMapper.selectSP_ProjectBillDelivery_S03",searchMap);
	    	// BILL_DELIVERY_I_U
	 		int rowType;
	 		List<Map<String,Object>> dsBillDeliveryList = (List<Map<String, Object>>) datasetMap.get("dsBillDeliveryList");
	        int size = dsBillDeliveryList.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsBillDeliveryList.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("NEW_BILL_DELIVERY_NO", dsOutput.get("BILL_DELIVERY_NO"));
                
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R01_1", saveMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	        		sqlSession1.update("projectMapper.updateSP_ProjectBillDelivery_R01_1",saveMap);         		
	            }	             
	        }
	        // select1(
	        Map<String,Object> dsBD_SEQ = sqlSession1.selectOne("projectMapper.selectLAST_BD_SEQ");
	        // BD_CONTRACT_LIST_I_U
	        List<Map<String,Object>> dsBDContractList = (List<Map<String, Object>>) datasetMap.get("dsBDContractList");
	        size = dsBDContractList.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsBDContractList.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("NEW_BD_SEQ", dsBD_SEQ.get("BD_SEQ"));
                
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R01_3", saveMap);
	            }	             
	        }	        
	        // BILL_DELIVERY_DET_BILL_I_U_D
	        List<Map<String,Object>> dsBill = (List<Map<String, Object>>) datasetMap.get("dsBill");
	        size = dsBill.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsBill.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("NEW_BD_SEQ", dsBD_SEQ.get("BD_SEQ"));
                
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R01_4", saveMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession1.update("projectMapper.updateSP_ProjectBillDelivery_R01_4", saveMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession1.delete("projectMapper.deleteSP_ProjectBillDelivery_R01_4", saveMap);
	            }	             
	        }	  	        
	        // BILL_DELIVERY_DET_DELIVERY_I_U_D
	        List<Map<String,Object>> dsDelivery = (List<Map<String, Object>>) datasetMap.get("dsDelivery");
	        size = dsDelivery.size();
	         
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsDelivery.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
                saveMap.put("NEW_BD_SEQ", dsBD_SEQ.get("BD_SEQ"));
                
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
	            if (rowType == DataSet.ROW_TYPE_INSERTED){
	             	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R01_5", saveMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	sqlSession1.update("projectMapper.updateSP_ProjectBillDelivery_R01_4", saveMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession1.delete("projectMapper.deleteSP_ProjectBillDelivery_R01_4", saveMap);
	            }	             
	        }
	        
			List<Map<String,Object>> dsBDContractDelList = sqlSession1.selectList("projectMapper.selectSP_ProjectBillDelivery_R01_6", searchMap);
	        size = dsBDContractDelList.size();
	        
	        // modify
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsBDContractDelList.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
	            rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
             	sqlSession1.delete("projectMapper.deleteSP_ProjectBillDelivery_R01_7", saveMap);
	        }	  	        
	    }
	    
	   /**
		 * 청구서 복사
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ProjectBillDelivery_R03(Map<String,Object> searchMap, UserInfo userInfo)
		    				throws Exception {
	    
	    	Map<String,Object> dsOutput = sqlSession1.selectOne("projectMapper.selectSP_ProjectBillDelivery_S03",searchMap);	
	    	
	    	searchMap.put("VAR_BILL_DELIVERY_NO", dsOutput.get("BILL_DELIVERY_NO"));
	    	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R03_1", searchMap);
	    	
	    	Map<String,Object> dsBD_SEQ = sqlSession1.selectOne("projectMapper.selectLAST_BD_SEQ");
	    	searchMap.put("VAR_INSERT_SEQ", dsBD_SEQ.get("BD_SEQ"));
	    	
	    	sqlSession1.insert("projectMapper.insertSP_ProjectBillDelivery_R03_2", searchMap);
	    	
	    }
	    
	   /**
		 * 거래명세서 복사
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_ProjectTS_R01(Map<String,Object> searchMap, UserInfo userInfo)
		    				throws Exception {
	    
	    	int cnt = sqlSession1.selectOne("projectMapper.selectSP_ProjectTS_R01_1",searchMap);	
	    	if(cnt == 0) {
	    		searchMap.put("TS_NO_SEQ", "01");
	    	} else {
	    		String seq = sqlSession1.selectOne("projectMapper.selectSP_ProjectTS_R01_2",searchMap);
	    		searchMap.put("TS_NO_SEQ", seq);
	    	}
	    	// TRADING_STATEMENT_S(
	    	List<Map<String,Object>> dsTradingStatement = sqlSession1.selectList("projectMapper.selectSP_ProjectTS_R01_3", searchMap);
	    	// 
	        int size = dsTradingStatement.size();
	        int rowType;
	        // TRADING_STATEMENT_I
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsTradingStatement.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
	            //rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
             	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R01_3_4", saveMap);
	        }	
	        
	        Map<String,Object> ds_TSSeq = sqlSession1.selectOne("projectMapper.selectLAST_BD_SEQ");
	        searchMap.put("ds_TSSeqTS_SEQ", ds_TSSeq.get("BD_SEQ"));
	        // TS_CONTRACT_LIST_S
	        List<Map<String,Object>> dsTSContractList = sqlSession1.selectList("projectMapper.selectSP_ProjectTS_R01_5", searchMap);
	        size = dsTSContractList.size();
	        // TRADING_STATEMENT_I
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsTSContractList.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
	            //rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
             	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R01_3_6", saveMap);
	        }		    	
	        // TS_CONTRACT_DET_S
	        List<Map<String,Object>> dsTSDet = sqlSession1.selectList("projectMapper.selectSP_ProjectTS_R01_3_7", searchMap);
	        size = dsTSDet.size();
	        // TRADING_STATEMENT_I
	        for (int i=0; i<size; i++) {
	             Map<String,Object> saveMap = dsTSDet.get(i);
	             
                saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
                saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
                saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
                saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
                
	            //rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
	             
             	sqlSession1.insert("projectMapper.insertSP_ProjectTS_R01_3_8", saveMap);
	        }		        
	    }	  
	    
	   /**
		 * 거래명세서 복사
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
		 * @throws Exception 
		 */
	    @Override
	    public void SP_DeliveryConfirm_R01(Map<String,Object> searchMap, List<Map<String,Object>> dsList1, List<Map<String,Object>> dsList2, UserInfo userInfo)
		    				throws Exception {
	    	String docId = sqlSession1.selectOne("projectMapper.selectSP_DeliveryConfirm_R01_getCDC_DOC_ID",searchMap);	
	    	
			int rowCount = dsList1.size();
			int rowType;
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsList1.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가
	            	rowMap.put("NEW_CDC_DOC_ID", docId);
	            	sqlSession1.insert("projectMapper.insertSP_DeliveryConfirm_R01",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession1.update("projectMapper.updateSP_DeliveryConfirm_R01",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession1.delete("projectMapper.deleteSP_DeliveryConfirm_R01",rowMap);	
	            }
			}	   
			
			rowCount = dsList2.size();
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = dsList2.get(rowIndex);

				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_INSERTED){	// 계약추가
	            	rowMap.put("NEW_CDC_DOC_ID", docId);
	            	sqlSession1.insert("projectMapper.insertSP_DeliveryConfirm_R01_2",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
            		sqlSession1.update("projectMapper.updateSP_DeliveryConfirm_R01_2",rowMap);         		
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	
	            	sqlSession1.delete("projectMapper.deleteSP_DeliveryConfirm_R01_2",rowMap);	
	            }
			}	 			
	    }	    
}
