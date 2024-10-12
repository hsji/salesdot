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
		
}
