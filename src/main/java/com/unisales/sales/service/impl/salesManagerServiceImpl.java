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
				
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
				
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
	        	
	        	System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::sSaveType:" + sSaveType + " sProjectContractStatus:" + sProjectContractStatus);
	            
	            if (rowType == DataSet.ROW_TYPE_INSERTED && sSaveType.equals("N")){	// 계약추가 
	            	Map<String,Object> pjtCodeMap = sqlSession.selectOne("salesManagerMapper.selectCreateProjectCode", rowMap);
	            	datasetMap.put("ds_project_cd", pjtCodeMap);
	            	datasetMap.put("ds_in_contract", rowMap);
	            	
	            	rowMap.put("PROJECT_CODE", pjtCodeMap.get("PROJECT_CODE"));
	            	sqlSession.insert("salesManagerMapper.insertProjectList",rowMap);
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED){
	            	Map<String,Object> contractCheckMap1 = sqlSession.selectOne("salesManagerMapper.selectContractUpdateCheck1", rowMap);
	            	Map<String,Object> contractCheckMap2 = sqlSession.selectOne("salesManagerMapper.selectContractUpdateCheck2", rowMap);
	            	
	            	datasetMap.put("ds_in_contract", rowMap);
	            	if(contractCheckMap1 != null && contractCheckMap2 != null && contractCheckMap1.size() > 0 && contractCheckMap2.size() > 0) {
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
		
		private Map<String, Object> copyItem(Map<String,Object> datasetMap, Map<String, Object> rowMap)  {
			try {
				@SuppressWarnings("unchecked")
				Map<String,Object> inContractMap = (Map<String, Object>) datasetMap.get("ds_in_contract");
				@SuppressWarnings("unchecked")
				Map<String,Object> inCondMap = (Map<String, Object>) datasetMap.get("dsCond");
				
				if(inContractMap != null && inCondMap != null) {
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "BUSINESS_TYPE");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "CONTRACT_NAME");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "PRODUCT_CODE");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "CONTRACT_DATE");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_EMP_NO");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_DEPT_CD");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_DEPT_NAME");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_CO_CD");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_EMP_NO");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "SALES_STATUS");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "PIPELINE_FLAG");
					rowMap = selectItem(inContractMap, inCondMap, rowMap, "CONTRACT_MAIN");
				}
				
				if(inContractMap != null) {
					String contNo = (String) datasetMap.get("varContractNo");
					if(contNo != null) {
						if(rowMap.get("CONTRACT_NO") == null || rowMap.get("CONTRACT_NO").equals("")) {
							rowMap.put("CONTRACT_NO", contNo);
						}
					}
				}
			} catch(Exception e) {
				
			} finally {
				
			}
			
			return rowMap;
		}		
		
		private Map<String, Object> selectItem(Map<String, Object> map1, Map<String, Object> map2, Map<String, Object> targetMap, String colId)  {
			String returnStr = null;
			if(targetMap.get(colId) == null || targetMap.get(colId).equals("")) {
				if(map1.get(colId) == null || map1.get(colId).equals("")) {
					returnStr = (String) map2.get(colId);
				} else {
					returnStr = (String) map1.get(colId);
				}			
				
				if(returnStr != null) {
					targetMap.put(colId, returnStr);
				}
			}
			
			return targetMap;
		}
		
		/**
		 * ds_contract (계약)을 읽어 계약 삭제
		 * @param datasetMap
		 * @throws Exception
		 */
		public void dataSetRowLoopProduct(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_prod");
			List<Map<String,Object>> ds_contract_prod_info = (List<Map<String, Object>>) datasetMap.get("ds_contract_prod_info");
			String newContractNo = (String) datasetMap.get("ds_contractno_prod");
			
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
			    
				String sInsertStatus =	(String) rowMap.get("INSERT_STATUS");
				String sProductCd =		(String) rowMap.get("PRODUCT_CODE");
    			String sCurContractNo = (String) rowMap.get("CONTRACT_NO");
    			
    			String sFindFlag = "N";
    			
    			System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::sInsertStatus:" + sInsertStatus);
    			System.out.println("\t" + rowIndex + ">>>" + rowType + ":::" + sInsertStatus);
    			if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("A")) {

    				String sInfoContractNo = "";

    				if (sCurContractNo == null || sCurContractNo.length() == 0) {
    					
    					if(ds_contract_prod_info != null) {
	    	    			for (int i= 0; i < ds_contract_prod_info.size(); i++ ) {
	    	    				Map<String, Object> tmpMap = ds_contract_prod_info.get(i);
	    						String sMainProductCd = (String) tmpMap.get("MAIN_PRODUCT_CODE");
	    						String sCurMainProductCd = "";
	    						
	    						if (sProductCd.length() <= 4) {
	    							sCurMainProductCd = sProductCd.substring(0,2);
	    						} else {
	    							sCurMainProductCd = sProductCd.substring(0, sProductCd.length()-2);
	    						}
	 
	    						if ( sCurMainProductCd.equals(sMainProductCd) ) {
	    							sFindFlag = "Y";
	    							sInfoContractNo = (String) tmpMap.get("CONTRACT_NO");
	    							rowMap.put("CONTRACT_NO", sInfoContractNo);
	    							
	    							System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::@@@ find @@@@ sInfoContractNo:" + sInfoContractNo);
	    							break;
	    						}
	    	    			}
    					}
    				} else {
    					sFindFlag = "Y";
    				}    				
    			}
    			System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::sFindFlag:" + sFindFlag);
	            if (sFindFlag.equals("Y")){
	            	// insertPresalesContractProductDetail insertPresalesProductList
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProductDetail",rowMap);
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
		    				
		    				// 기존데이터에 계약번호가 있으면 계약변호를 추가
		    				if (svContractNo == sInfoContractNo) 
		    				{
		    					sSeq = svContractNo.substring(8);	// CDYYYYMM
		    					int nSeq = Integer.parseInt(sSeq);
		    					nSeq ++;
		    					svContractNo = svContractNo.substring(0, 8)+setLPad(Integer.toString(nSeq), 7, '0'); 	// 15자리
		    				}
		    			}
	    			}
	    			datasetMap.put("varContractNo", svContractNo);
	    			
	    			// Project Code가 없으면 프로젝트신규이므로 신규에서 생성된 프로젝트코드 사용
	    			String sProjectCd =	(String) rowMap.get("PROJECT_CODE");
	    			if(sProjectCd == null || sProjectCd.equals("")) {
	    				Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
	    				sProjectCd = (String) pjtCodeMap.get("PROJECT_CODE");
	    				rowMap.put("PROJECT_CODE", sProjectCd);
	    			}
	    			
	    			Map<String, Object> tmpMap = new HashMap<>();
	    			tmpMap.put("CONTRACT_NO", 	svContractNo);
	    			tmpMap.put("PRODUCT_CODE", 	sProductCd);
	    			tmpMap.put("MAIN_PRODUCT_CODE", sCurMainProductCd);
	    			
	    			ds_contract_prod_info.add(tmpMap);
	    			
	    			rowMap.put("CONTRACT_NO", svContractNo);            	
	    			rowMap = copyItem(datasetMap, rowMap);
	    			
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
		public void dataSetRowLoopGoods(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
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
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));
			    String sInsertStatus = (String) rowMap.get("INSERT_STATUS");
			    String sProductCd = (String) rowMap.get("PRODUCT_CODE");
			    String sCurContractNo = (String) rowMap.get("CONTRACT_NO");
			    String sFindFlag = "N";
			    
			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::sInsertStatus:" + sInsertStatus);
			    
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
									
									System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::@@find@@ sContractNo:" + sContractNo);
									break;
								}
							}
						}
					} else {
						sFindFlag = "Y";
					}    	
			    }
 
			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType + ":::sFindFlag:" + sFindFlag);
			    if (rowType == DataSet.ROW_TYPE_UPDATED) {		    	
			    	sqlSession.update("salesManagerMapper.updatePresalesGoods1",rowMap);	
			    	
				} else if (sFindFlag.equals("Y")){
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractProductDetail",rowMap);
	    						    
	            } else if (rowType == DataSet.ROW_TYPE_INSERTED && sInsertStatus.equals("I")){
	            	String sContractNo = (String) datasetMap.get("ds_contractno_goods");
	    			if(ds_contract_goods_info != null && ds_contract_goods_info.size() > 0) {
	    				sContractNo = (String) ds_contract_goods_info.get(0).get("CONTRACT_NO");
	    			}
	    			
	    			String sSeq1 = sContractNo.substring(8);
	    			int nSeq = Integer.parseInt(sSeq1)+1;
	    			sSeq1 = Integer.toString(nSeq);
	    			sContractNo = sContractNo.substring(0,8) + setLPad(sSeq1, 7, '0');
	    			datasetMap.put("ds_contractno_goods", sContractNo);
	    			
	    			if(ds_contract_goods_info != null && ds_contract_goods_info.size() > 0) {
	    				ds_contract_goods_info.get(0).put("CONTRACT_NO", sContractNo);
	    			}
	    			datasetMap.put("varContractNo2", sContractNo);
	    			
	            	String svContractNo = (String) datasetMap.get("varContractNo2");
	            	
	            	if(ds_contract_goods_info != null) {
		    			for (int i= 0; i < ds_contract_goods_info.size(); i++ ) {
		    				Map<String, Object> tmpMap = ds_contract_goods_info.get(i);
		    				String sContractNo2 = (String) tmpMap.get("CONTRACT_NO");
		    				String sSeq = "";
		    				
		    				if (sContractNo == sContractNo2) {
		    					sSeq = sContractNo.substring(8);
		    					int nSeq2 = Integer.parseInt(sSeq);
		    					nSeq2 ++;
		    					sContractNo = svContractNo.substring(0, 8)+setLPad(Integer.toString(nSeq2), 7, '0'); 
		    				}
		    			}
	            	}
	            	datasetMap.put("varContractNo2", sContractNo);
	    			rowMap.put("CONTRACT_NO", sContractNo);
	    			
	    			Map<String, Object> tmpMap2 = new HashMap<>();
	    			tmpMap2.put("CONTRACT_NO", sContractNo);
	    			tmpMap2.put("PRODUCT_CODE", sProductCd);
	    			
	    			ds_contract_goods_info.add(tmpMap2);
	    			
	    			String sProjectCd =	(String) rowMap.get("PROJECT_CODE");
	    			if(sProjectCd == null || sProjectCd.equals("")) {
	    				Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
	    				sProjectCd = (String) pjtCodeMap.get("PROJECT_CODE");
	    				rowMap.put("PROJECT_CODE", sProjectCd);
	    			}	    			

	    			// 확인필요 CONTRACT_decision2connection2 GOODS_INSERT
	    			//sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
	    			rowMap = copyItem(datasetMap, rowMap);
	    			
	    			sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
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
		public void dataSetRowLoopSI(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_si");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType);
			    boolean createCheck = false;
				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String pjtCode = (String) rowMap.get("PROJECT_CODE");
					if(pjtCode == null || pjtCode.equals("")) {
						Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
						pjtCode =  (String) pjtCodeMap.get("PROJECT_CODE");
						rowMap.put("PROJECT_CODE", pjtCode);
					}

					String cNo = sqlSession.selectOne("salesManagerMapper.selectContractNo", rowMap);
					if(cNo == null) {  		
						createCheck = true;
						cNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", rowMap);
					}
					rowMap.put("CONTRACT_NO", cNo);
	    			
	    			rowMap = copyItem(datasetMap, rowMap);
	    			
	    			if(createCheck == true) {
	    				sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
	    				sqlSession.insert("salesManagerMapper.insertPresalesSI",rowMap);
	    			}
	    			sqlSession.insert("salesManagerMapper.insertPresalesSIDetail",rowMap);
					
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
		public void dataSetRowLoopCS(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_contract_cs");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType);
			    boolean createCheck = false;
				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String pjtCode = (String) rowMap.get("PROJECT_CODE");
					if(pjtCode == null || pjtCode.equals("")) {
						Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
						pjtCode =  (String) pjtCodeMap.get("PROJECT_CODE");
						rowMap.put("PROJECT_CODE", pjtCode);
					}					
					String cNo = sqlSession.selectOne("salesManagerMapper.selectContractNo", rowMap);
					if(cNo == null) {
						cNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", rowMap);
						createCheck = true;
					}
					rowMap.put("CONTRACT_NO", cNo);
								
	    			rowMap = copyItem(datasetMap, rowMap);
					
	    			if(createCheck == true) {
	    				sqlSession.insert("salesManagerMapper.insertPresalesContractList",rowMap);
	    				sqlSession.insert("salesManagerMapper.insertPresalesSI",rowMap);
	    			}
	    			sqlSession.insert("salesManagerMapper.insertPresalesSIDetail",rowMap);	    			
					
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
		public void dataSetRowLoopPurchase(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_purchase");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType);
				if (rowType == DataSet.ROW_TYPE_INSERTED){
					
					String pjtCode = (String) rowMap.get("PROJECT_CODE");
					if(pjtCode == null || pjtCode.equals("")) {
						Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
						pjtCode =  (String) pjtCodeMap.get("PROJECT_CODE");
						rowMap.put("PROJECT_CODE", pjtCode);
					}			
					
					String purCode = sqlSession.selectOne("salesManagerMapper.selectCreatePurchaseCode",rowMap);
					rowMap.put("CONTRACT_NO_PURCHASE", purCode);
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
		public void dataSetRowLoopSchedule(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_schedule");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

			    System.out.println("\t" + rowIndex + ">>>:rowType" + rowType);
				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String pjtCode = (String) rowMap.get("PROJECT_CODE");
					if(pjtCode == null || pjtCode.equals("")) {
						Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
						pjtCode =  (String) pjtCodeMap.get("PROJECT_CODE");
						rowMap.put("PROJECT_CODE", pjtCode);
					}								
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
		public void dataSetRowLoopAddress(SqlSession sqlSession, Map<String,Object> datasetMap, UserInfo userInfo) throws Exception {
			System.out.println("dataSetRowLoopAddress1");
			List<Map<String,Object>> ds = (List<Map<String, Object>>) datasetMap.get("ds_addressbook");
			int rowCount = ds.size();
			if(rowCount <= 0) return;
			System.out.println("dataSetRowLoopAddress2");
			int rowType = 0;
			String varContractNo = null;
			
			List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
	
			for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				
				Map<String,Object> rowMap = ds.get(rowIndex);
				rowMap.put("USER_ID_SRV", userInfo.getStrEmpNo());
				rowMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
				rowMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());			
				rowMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());				
				
			    rowType = Integer.parseInt(String.valueOf(rowMap.get(DataSetRowTypeAccessor.NAME)));

			    System.out.println("\t" + rowIndex + ">>>===:rowType" + rowType);
				if (rowType == DataSet.ROW_TYPE_INSERTED){
					String pjtCode = (String) rowMap.get("SOURCE_DATA");
					if(pjtCode == null || pjtCode.equals("")) {
						Map<String,Object> pjtCodeMap = (Map<String, Object>) datasetMap.get("ds_project_cd");
						pjtCode =  (String) pjtCodeMap.get("PROJECT_CODE");
						rowMap.put("SOURCE_DATA", pjtCode);
					}
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

	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	try {
	    		// PROJECT
	    		System.out.println("===[savePresalseList dataSetRowLoopContract]===");
		    	dataSetRowLoopContract(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopContract end]===");
		  
		    	// PRODUCT - 제품은 사업분류으로 처리
	    		Map<String,String> newMap = new HashMap<>();
	    		newMap.put("CONTRACT_TYPE"	, "PD");	   
	    		newMap.put("varContractNo"	, null);
		    	String contractNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", newMap);
		    	datasetMap.put("ds_contractno_prod", contractNo);
		    	System.out.println("===[savePresalseList dataSetRowLoopProduct]===");
		    	dataSetRowLoopProduct(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopProduct end]===");
	
	    		newMap.put("CONTRACT_TYPE"	, "GD");	
	    		newMap.put("varContractNo2"	, null);
		    	contractNo = sqlSession.selectOne("salesManagerMapper.selectCreateContractNo", newMap);
		    	datasetMap.put("ds_contractno_goods", contractNo);
	    		System.out.println("===[savePresalseList dataSetRowLoopGoods]===");
		    	dataSetRowLoopGoods(sqlSession, datasetMap, userInfo);
	    		System.out.println("===[savePresalseList dataSetRowLoopGoods end]===");
		    	
	    		System.out.println("===[savePresalseList dataSetRowLoopSI start]===");
		    	dataSetRowLoopSI(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopSI end]===");
		    	
		    	System.out.println("===[savePresalseList dataSetRowLoopCS start]===");
		    	dataSetRowLoopCS(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopCS end]===");
		    	
		    	
		    	System.out.println("===[savePresalseList dataSetRowLoopPurchase start]===");
		    	dataSetRowLoopPurchase(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopPurchase start]===");
		    	
		    	
		    	System.out.println("===[savePresalseList dataSetRowLoopSchedule start]===");
		    	dataSetRowLoopSchedule(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopSchedule start]===");		    	
		    	
		    	System.out.println("===[savePresalseList dataSetRowLoopAddress start]===");
		    	dataSetRowLoopAddress(sqlSession, datasetMap, userInfo);
		    	System.out.println("===[savePresalseList dataSetRowLoopAddress end]===");
		 
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
		 * 저장한다.
		 * @param queryMap		: Mapper Info
		 * @param saveList		: 저장할 데이터 리스트
		 * @param userInfo		: Login UserInfo
		 * @return				: N/A
	 * @throws Exception 
		 */
	    @Override
	    public Map<String, Object> saveCostSheet(List<Map<String,String>> queryList, Map<String,Object> datasetMap, UserInfo userInfo) 
	    				throws Exception {

	    	SqlSession sqlSession = sqlSession1.getSqlSessionFactory().openSession();
	    	sqlSession.getConnection().setAutoCommit(false);
	    	
	    	Map<String,Object> outMap = new HashMap<>();
	    	outMap.put("CC_SEQ", "");
	    	
	    	try {
	    		setRowType(datasetMap);
	    		
	    		int size;
	    		int rowType;
	    		List<Map<String,Object>> dsIn = (List<Map<String, Object>>) datasetMap.get("ds_Project");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		            
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	    	              	sqlSession.insert("salesMangerMapper.insertSP_CostSheet_R01_COSTSHEET_CONTRACT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_CONTRACT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_DELETED){
	    	            	  sqlSession.delete("salesMangerMapper.deleteSP_CostSheet_R01_COSTSHEET_CONTRACT", saveMap);
	    	              }	    	 
		    	    }
	    		}
	    	    
	    	    int ds_ccseqCC_SEQ = sqlSession.selectOne("salesMangerMapper.selectSP_CostSheet_R01_GET_CC_SEQ");
	    	    outMap.put("CC_SEQ", ds_ccseqCC_SEQ);
	    	    
	    		dsIn = (List<Map<String, Object>>) datasetMap.get("ds_ContractProd");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          saveMap.put("ds_ccseqCC_SEQ", ds_ccseqCC_SEQ);
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	    	              	sqlSession.insert("salesMangerMapper.insertSP_CostSheet_R01_COSTSHEET_CONTRACT_PRODUCT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_CONTRACT_PRODUCT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_DELETED){
	    	            	  sqlSession.delete("salesMangerMapper.deleteSP_CostSheet_R01_COSTSHEET_CONTRACT_PRODUCT", saveMap);
	    	              } 
		    	    }
	    		}
	    		
	    		dsIn = (List<Map<String, Object>>) datasetMap.get("ds_PurchaseProd");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          saveMap.put("ds_ccseqCC_SEQ", ds_ccseqCC_SEQ);
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	    	              	sqlSession.insert("salesMangerMapper.insertSP_CostSheet_R01_COSTSHEET_PURCHASE_PRODUCT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_PURCHASE_PRODUCT", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_DELETED){
	    	            	  sqlSession.delete("salesMangerMapper.deleteSP_CostSheet_R01_COSTSHEET_PURCHASE_PRODUCT", saveMap);
	    	              } 
		    	    }
	    		}
	    		
	    		dsIn = (List<Map<String, Object>>) datasetMap.get("ds_ContractSi");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          saveMap.put("ds_ccseqCC_SEQ", ds_ccseqCC_SEQ);
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	    	              	sqlSession.insert("salesMangerMapper.insertSP_CostSheet_R01_COSTSHEET_CONTRACT_SI", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_CONTRACT_SI", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_DELETED){
	    	            	  sqlSession.delete("salesMangerMapper.deleteSP_CostSheet_R01_COSTSHEET_CONTRACT_SI", saveMap);
	    	              } 
		    	    }
	    		}	    
	    		
	    		dsIn = (List<Map<String, Object>>) datasetMap.get("ds_PurchaseSi");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          saveMap.put("ds_ccseqCC_SEQ", ds_ccseqCC_SEQ);
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	             if (rowType == DataSet.ROW_TYPE_INSERTED){
	    	              	sqlSession.insert("salesMangerMapper.insertSP_CostSheet_R01_COSTSHEET_PURCHASE_SI", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_PURCHASE_SI", saveMap);
	    	              }else if (rowType == DataSet.ROW_TYPE_DELETED){
	    	            	  sqlSession.delete("salesMangerMapper.deleteSP_CostSheet_R01_COSTSHEET_PURCHASE_SI", saveMap);
	    	              } 
		    	    }
	    		}
	    		
	    		dsIn = (List<Map<String, Object>>) datasetMap.get("ds_Project");
	    		if(dsIn != null) {
		      		size = dsIn.size();
		    	    for (int i=0; i<size; i++) {
		    	          Map<String,Object> saveMap = dsIn.get(i);
		    	          
		    	          saveMap.put("USER_ID_SRV", userInfo.getStrUserId());
		    	          saveMap.put("USER_CON_IPADDR_SRV", userInfo.getStrUserIPAddress());
		    	          saveMap.put("SERVER_CO_CD", userInfo.getStrCompanyCd());
		    	          saveMap.put("EMP_NO_SRV", userInfo.getStrEmpNo());
		    	          saveMap.put("ds_ccseqCC_SEQ", ds_ccseqCC_SEQ);
		    	          
		    	          rowType = Integer.parseInt(String.valueOf(saveMap.get(DataSetRowTypeAccessor.NAME)));
		    	          
	    	              if (rowType == DataSet.ROW_TYPE_UPDATED){
	    	            	  sqlSession.update("salesMangerMapper.updateSP_CostSheet_R01_COSTSHEET_MAP_INSERT", saveMap);
	    	              } 
		    	    }
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
	    	
	    	return outMap;
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
}
