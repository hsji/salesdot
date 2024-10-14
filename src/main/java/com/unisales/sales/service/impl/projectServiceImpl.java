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
		
}
