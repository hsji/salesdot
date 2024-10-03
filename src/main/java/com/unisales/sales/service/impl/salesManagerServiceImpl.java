package com.unisales.sales.service.impl;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sales.service.salesManagerService;
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
public class salesManagerServiceImpl implements salesManagerService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	

		/**
		 * ds_contract (계약)을 읽어 처리
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopContract(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
				String pjtCode = (String) rowMap.get("PROJECT_CODE");
				if(pjtCode == null)	rowMap.put("PROJECT_CODE", "");
				
				String salesEmpNo = (String) rowMap.get("SALES_EMP_NO");
				if(pjtCode == null)	rowMap.put("INCENTIVE_EMP_NO", salesEmpNo);
	
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
	            if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	rowMap.put("SAVE_TYPE", "U");
	            }else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	rowMap.put("SAVE_TYPE", "D");
	            }
	            String sSaveType = (String) rowMap.get("SAVE_TYPE");
	        	String sProjectContractStatus = (String) rowMap.get("PROJECT_CONTRACT_STATUS");
	            
	            if (rowType == DataSet.ROW_TYPE_INSERTED && sSaveType.equals("N")){	// 계약추가 
	            	Map<String,Object> pjtCodeMap = sqlSession.selectOne("salesManagerMapper.selectCreateProjectCode", rowMap);
	            	datasetMap.put("ds_project_cd", pjtCodeMap);
	            	
	            	rowMap.put("PROJECT_CODE", pjtCodeMap.get("PROJECT_CODE"));
	            	sqlSession.insert("salesManagerMapper.insertProjectList",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	Map<String,Object> contractCheckMap1 = sqlSession.selectOne("salesManagerMapper.selectContractUpdateCheck1", rowMap);
	            	Map<String,Object> contractCheckMap2 = sqlSession.selectOne("salesManagerMapper.selectContractUpdateCheck2", rowMap);
	            	
	            	if(contractCheckMap1.size() > 0 && contractCheckMap2.size() > 0) {
	            		String mainList = (String) contractCheckMap1.get("CONTRACT_MAIN_LIST");
	            		String comp = (String) contractCheckMap2.get("COMPANY_NAME");
	            		if(mainList != comp) {
	            			contractCheckMap2.put("CC_SEQ", contractCheckMap1.get("CC_SEQ"));
	            			
	            			Map<String, Object> costMap = new HashMap<String, Object>();
	            			costMap.put("COMPANY_NAME", comp);
	            			costMap.put("CL_EXCEPTION_CODE", contractCheckMap1.get("CL_EXCEPTION_CODE"));
	            			costMap.put("CC_SEQ", contractCheckMap1.get("CC_SEQ"));
	            			
	            			sqlSession.update("salesManagerMapper.updatePresalesCostSheet", costMap);
	            		}
	            	}
	            	if(sProjectContractStatus.equals("0")) {
	            		sqlSession.update("salesManagerMapper.updatePresalesProjectList",rowMap);
	            	}
	            	if(sProjectContractStatus.equals("0") || sProjectContractStatus.equals("3")) {
	            		sqlSession.update("salesManagerMapper.updatePresalesContractList",rowMap);
	            		sqlSession.update("salesManagerMapper.updatePresalesPurchaseList",rowMap);
	            	}
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){	// Presales Project, Contract Update
	            	int contractCnt = sqlSession.selectOne("salesManagerMapper.selectProjectDeleteCheck", rowMap);
	            	if(contractCnt == 0) {
	            		sqlSession.update("salesManagerMapper.deletePresalesContract",rowMap);
	            		sqlSession.update("salesManagerMapper.deletePresalesProject",rowMap);
	            	} else {
	            		sqlSession.update("salesManagerMapper.deletePresalesContractOnly",rowMap);
	            	}
	            }
			}

		}	
		
		private static String setLPad( String strContext, int iLen, char c ) {
			String strResult = "";
			StringBuilder sbAddChar = new StringBuilder();

			for( int i = strContext.length(); i < iLen; i++ ) { // iLen길이 만큼 strChar문자로 채운다.
				sbAddChar.append( c );
			}

			strResult = sbAddChar + strContext; // LPAD이므로, 채울문자열 + 원래문자열로 Concate한다.
			return strResult;
		}		
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopProduct(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_prod");
			List<Map<String,Object>> ds_contract_prod_info = (List<Map<String, Object>>) datasetMap.get("ds_contract_prod_info");
			String newContractNo = (String) datasetMap.get("ds_contractno_prod");
			
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    
				String sInsertStatus =	(String) rowMap.get("INSERT_STATUS");
				String sProductCd =		(String) rowMap.get("PRODUCT_CODE");
    			String sCurContractNo = (String) rowMap.get("CONTRACT_NO");
    			
    			String sFindFlag = "N";
    			
    			if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("A")) {

    				String sInfoContractNo = "";

    				if (sCurContractNo == null || sCurContractNo.length() == 0) {
    					
    					if(ds_contract_prod_info != null) {
	    	    			for (int i= 0; i < ds_contract_prod_info.size(); i++ ) {
	    	    				Map<String, Object> tmpMap = ds_contract_prod_info.get(i);
	    						String sMainProductCd = (String) tmpMap.get("MAIN_PRODUCT_CODE");
	    						String sCurMainProductCd = "";
	    						
	    						if (sProductCd == null || sProductCd.length() <= 3) {
	    							sCurMainProductCd = sProductCd;
	    						} else {
	    							sCurMainProductCd = sProductCd.substring(0, sProductCd.length()-2);
	    						}
	 
	    						if ( sCurMainProductCd.equals(sMainProductCd) ) {
	    							sFindFlag = "Y";
	    							sInfoContractNo = (String) tmpMap.get("CONTRACT_NO");
	    							rowMap.put("CONTRACT_NO", sInfoContractNo);
	    							break;
	    						}
	    	    			}
    					}
    				} else {
    					sFindFlag = "Y";
    				}    				
    			}
	    
	            if (sFindFlag.equals("Y")){
	    			sqlSession.insert("salesManagerMapper.insertPresalesProductList",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("I")){
	            	String svContractNo = (String) datasetMap.get("varContractNo");
	            	
	    			if (svContractNo == null)	{
	    				svContractNo = newContractNo;		// 최초 등록시 계약 코드 없음
	    			}
	    			
	    			// main product code
	    			String sCurMainProductCd = "";
	    			if (sProductCd == null || sProductCd.length() <= 0) {
	    				sCurMainProductCd = sProductCd;			
	    			} else {
	    				sCurMainProductCd = sProductCd.substring(0, sProductCd.length()-2);
	    			}
	    			
	    			if(ds_contract_prod_info != null) {
		    			for (int i= 0; i < ds_contract_prod_info.size(); i++ ) {
		    				Map<String, Object> tmpMap = ds_contract_prod_info.get(i);
		    				String sInfoContractNo = (String) tmpMap.get("CONTRACT_NO");
		    				String sSeq = "";
		    				
		    				if (svContractNo == sInfoContractNo) 
		    				{
		    					sSeq = svContractNo.substring(8);
		    					int nSeq = Integer.parseInt(sSeq);
		    					nSeq ++;
		    					svContractNo = svContractNo.substring(0, 8)+setLPad(Integer.toString(nSeq), 4, '0'); 
		    				}
		    			}
	    			}
	    			datasetMap.put("varContractNo", svContractNo);
	    			
	    			Map<String, Object> tmpMap = new HashMap<>();
	    			tmpMap.put("CONTRACT_NO", svContractNo);
	    			tmpMap.put("PRODUCT_CODE", sProductCd);
	    			tmpMap.put("MAIN_PRODUCT_CODE", sCurMainProductCd);
	    			
	    			rowMap.put("CONTRACT_NO", svContractNo);
            	
	    			ds_contract_prod_info.add(tmpMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesProductList",rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProduct",rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProductDetail",rowMap);
	    			
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {
	            	sqlSession.update("salesManagerMapper.updatePresalesProductList",rowMap);
	            	

	            } else if (rowType == DataSet.ROW_TYPE_DELETED) {
	            	sqlSession.update("salesManagerMapper.deletePresalesProductDetail",rowMap);
	            	int cnt = sqlSession.selectOne("salesManagerMapper.selectContractCountByNo", rowMap);
	            	if(cnt == 0) {
	            		sqlSession.update("salesManagerMapper.deletePresalesContractOnly2",rowMap);
	            	}	            	
	            }

			}
		}
				
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopGoods(Map<String,Object> datasetMap) throws Exception {
			Map<String,Object> dsCond = (Map<String, Object>) datasetMap.get("dsCond");
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_goods");
			String newContractNo = (String) datasetMap.get("ds_contractno_goods");
			List<Map<String,Object>> ds_contract_goods_info = (List<Map<String, Object>>) datasetMap.get("ds_contract_goods_info");
			
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    String sInsertStatus = (String) rowMap.get("INSERT_STATUS");
			    String sProductCd = (String) rowMap.get("PRODUCT_CODE");
			    String sCurContractNo = (String) rowMap.get("CONTRACT_NO");
			    String sFindFlag = "N";
			    if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("A")) {
					
					
					String sContractNo = "";
					String sMinLenProductCd = "";
					String sMaxLenProductCd = "";
					
					if (sCurContractNo == null || sCurContractNo.length() == 0) {
						if(ds_contract_goods_info != null) {
							for (int i= 0; i < ds_contract_goods_info.size(); i++ ) {
	    	    				Map<String, Object> tmpMap = ds_contract_goods_info.get(i);
	    						String sMainProductCd = (String) tmpMap.get("PRODUCT_CODE");
	    						
	    						if (sProductCd.length() == sMainProductCd.length()){
	    							sMinLenProductCd = sProductCd.substring(0, sProductCd.length()-2);
	    							sMaxLenProductCd = sMainProductCd;				
	    						} else if (sProductCd.length() > sMainProductCd.length()) {
	    							sMinLenProductCd = sMainProductCd;
	    							sMaxLenProductCd = sProductCd;
	    						} else {
	    							sMinLenProductCd = sProductCd;
	    							sMaxLenProductCd = sMainProductCd;
	    						}
	 
								//System.out.println(sMaxLenProductCd.substring(0, sMaxLenProductCd.length()-2) +" // "+ sMinLenProductCd);
								if ( sMaxLenProductCd.substring(0, sMaxLenProductCd.length()-2).equals(sMinLenProductCd) ) {
									 
									sFindFlag = "Y";
									sContractNo = (String) tmpMap.get("CONTRACT_NO");
									tmpMap.put("CONTRACT_NO", sContractNo);
									rowMap.put("CONTRACT_NO", sContractNo);
									break;
								}
							}
						}
					} else {
						sFindFlag = "Y";
					}    	
			    }
 
			    if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesGoods1",rowMap);	
			    	
				} else if (sFindFlag.equals("Y")){
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProductDetail",rowMap);
	    						    
	            } else if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("I")){
	            	
	            	String svContractNo = (String) datasetMap.get("varContractNo2");
	            	
	            	if(ds_contract_goods_info != null) {
		    			for (int i= 0; i < ds_contract_goods_info.size(); i++ ) {
		    				Map<String, Object> tmpMap = ds_contract_goods_info.get(i);
		    				String sContractNo = (String) tmpMap.get("CONTRACT_NO");
		    				String sSeq = "";
		    				
		    				if (svContractNo == sContractNo) {
		    					sSeq = svContractNo.substring(8);
		    					int nSeq = Integer.parseInt(sSeq);
		    					nSeq ++;
		    					svContractNo = svContractNo.substring(0, 8)+setLPad(Integer.toString(nSeq), 4, '0'); 
		    				}
		    			}
	            	}
	            	datasetMap.put("varContractNo2", svContractNo);
	    			rowMap.put("CONTRACT_NO", svContractNo);
	    			
	    			Map<String, Object> tmpMap2 = new HashMap<>();
	    			tmpMap2.put("CONTRACT_NO", svContractNo);
	    			tmpMap2.put("PRODUCT_CODE", sProductCd);
            	
	    			String sSeq1 = newContractNo.substring(8);
	    			int nSeq = Integer.parseInt(sSeq1)+1;
	    			sSeq1 = Integer.toString(nSeq);
	    			String sContractNo = newContractNo.substring(0,8) + setLPad(sSeq1, 4, '0');
	    			datasetMap.put("ds_contractno_goods", sContractNo);
	    			
	    			tmpMap2.put("CONTRACT_NO", sContractNo);
	    			
	    			ds_contract_goods_info.add(tmpMap2);
	    			
	    			rowMap.put("CONTRACT_NO", sContractNo);
	    			datasetMap.put("varContractNo2", sContractNo);
	    			/*
	    			  <isNotEmpty property=\"tmp_ds_goods.PROJECT_CODE\">
 SET @PROJECT_CODE = #tmp_ds_goods.PROJECT_CODE#
 </isNotEmpty>
 <isEmpty property=\"tmp_ds_goods.PROJECT_CODE\">
 SET @PROJECT_CODE = #ds_in_contract.PROJECT_CODE#
 </isEmpty>
 
	    			 */
	    			// 확인필요 CONTRACT_decision2connection2 GOODS_INSERT
	    			//sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProduct",rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProductDetail",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.update("salesManagerMapper.deletePresalesProductDetail",rowMap);
	            	int cnt = sqlSession.selectOne("salesManagerMapper.selectContractCountByNo", rowMap);
	            	if(cnt == 0) {
	            		sqlSession.update("salesManagerMapper.deletePresalesContractOnly2",rowMap);
	            	}		            	
	            }

			}
		}
						
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopSI(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_si");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String cNo = sqlSession.selectOne("salesManagerMapper.selectContractNo", rowMap);
					if(cNo == null) {
						cNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", rowMap);
					}
					sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
					sqlSession.insert("salesManagerMapper.insertPresalesSI",rowMap);
					
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesSIDetail",rowMap);	

	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	
	            	sqlSession.update("salesManagerMapper.deletePresalesSIDetail",rowMap);
	            	int cnt = sqlSession.selectOne("salesManagerMapper.selectSICountByNo", rowMap);
	            	if(cnt == 0) {
	            		sqlSession.update("salesManagerMapper.deletePresalesContractOnly2",rowMap);
	            	}		            	
	            }
			}			
		}
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopCS(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_cs");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String cNo = sqlSession.selectOne("salesManagerMapper.selectContractNo", rowMap);
					if(cNo == null) {
						cNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", rowMap);
					}
					sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
					sqlSession.insert("salesManagerMapper.insertPresalesSI",rowMap);
					
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesSIDetail",rowMap);	

	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	
	            	sqlSession.update("salesManagerMapper.deletePresalesSIDetail",rowMap);
	            	int cnt = sqlSession.selectOne("salesManagerMapper.selectSICountByNo", rowMap);
	            	if(cnt == 0) {
	            		sqlSession.update("salesManagerMapper.deletePresalesContractOnly2",rowMap);
	            	}		            	
	            }
			}			
		}		
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopPurchase(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_purchase");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

				if (rowType == DataSet.ROW_TYPE_INSERTED){
					sqlSession.insert("salesManagerMapper.insertPresalesPurchase",rowMap);
					sqlSession.insert("salesManagerMapper.insertPresalesPurchaseProduct",rowMap);
					sqlSession.insert("salesManagerMapper.insertPresalesPurchaseProductDetail",rowMap);
					
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesPurchaseProductDetail",rowMap);	
			    	sqlSession.update("salesManagerMapper.updatePresalesPurchase",rowMap);

	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	
	            	sqlSession.update("salesManagerMapper.deletePresalesPurchaseProductDetail",rowMap);
	            	sqlSession.update("salesManagerMapper.deletePresalesPurchase",rowMap);
	            }
			}			
		}		
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopSchedule(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_schedule");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

				if (rowType == DataSet.ROW_TYPE_INSERTED){
					sqlSession.insert("salesManagerMapper.insertPresalesSchedule",rowMap);
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesSchedule",rowMap);	
	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.update("salesManagerMapper.deletePresalesSchedule",rowMap);
	            }
			}			
		}		
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopAddress(Map<String,Object> datasetMap) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_addressbook");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

				if (rowType == DataSet.ROW_TYPE_INSERTED){
					sqlSession.insert("salesManagerMapper.insertCAMap",rowMap);
				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	

	            } else if (rowType == DataSet.ROW_TYPE_DELETED){
	            	sqlSession.update("salesManagerMapper.deleteCAMap",rowMap);
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
	    public void savePresalseList(List<Map<String,String>> queryList, Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {
	    	
	    	dataSetRowLoopContract(datasetMap);
	    	
    		Map<String,String> newMap = new HashMap<>();
    		newMap.put("CONTRACT_TYPE"	, "PD");	   
    		newMap.put("varContractNo"	, null);
	    	String contractNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", newMap);
	    	datasetMap.put("ds_contractno_prod", contractNo);
	    	dataSetRowLoopProduct(datasetMap);

    		newMap.put("CONTRACT_TYPE"	, "GD");	
    		newMap.put("varContractNo2"	, null);
	    	contractNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", newMap);
	    	datasetMap.put("ds_contractno_goods", contractNo);
	    	dataSetRowLoopGoods(datasetMap);
	    	
	    	dataSetRowLoopSI(datasetMap);
	    	
	    	dataSetRowLoopCS(datasetMap);
	    	
	    	dataSetRowLoopAddress(datasetMap);
	    }    
}
