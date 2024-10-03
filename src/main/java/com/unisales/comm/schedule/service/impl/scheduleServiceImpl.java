package com.unisales.comm.schedule.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.comm.schedule.service.scheduleService;
import com.nexacro.java.xapi.data.DataSet;

@Repository
public class scheduleServiceImpl implements scheduleService {

	@Autowired
	private SqlSessionTemplate sqlSession;
	

	
	
/****************************************************일정 관리 *****************************************************************/		
	
	/**
	 * 일정 정보  조회
	 */
	@Override
	public List<Map<String, Object>> searchScheduleList(Map<String, Object> searchMap) {
		return sqlSession.selectList("scheduleMapper.searchScheduleList", searchMap);
	}


	/**
	 * 일정 관리 저장
	 */
	@Override
	public void saveScheduleMaster(List<Map<String, Object>> saveList, Map<String, Object> loginUserInfo) {
		int size = saveList.size();
    	int rowType;
    	
    	// 삭제 먼저 처리하기 위해서 정렬 진행 (delete==3, update==2, insert==1)
    	Collections.sort(saveList, new Comparator<Object>() {
    		//Comparator 두 매개변수 객체를 비교함. compare메서드 필수 구현
    		
    		@Override
    		public int compare(Object s1, Object s2) {
    			//크다면 양수 반환, 같다면 0, 작다면 음수
    			return (Integer)((Map<String,Object>)s2).get("DataSetRowType") - (Integer)((Map<String,Object>)s1).get("DataSetRowType");
    		}
    	});
    	
        for (int i=0; i<size; i++) {
            Map<String,Object> scdMap = saveList.get(i);
            
            scdMap.put("USER_ID_SRV", loginUserInfo.get("USER_ID_SRV"));
            scdMap.put("USER_CON_IPADDR_SRV", loginUserInfo.get("USER_CON_IPADDR_SRV"));
            scdMap.put("SYTM_FLAG_CD",  loginUserInfo.get("SYTM_FLAG_CD_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(scdMap.get(DataSetRowTypeAccessor.NAME)));
            
            if(rowType == DataSet.ROW_TYPE_DELETED) {
            	sqlSession.delete("scheduleMapper.deleteScheduleMaster", scdMap);  
            }else if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("scheduleMapper.insertScheduleMaster", scdMap);
            }else if(rowType == DataSet.ROW_TYPE_UPDATED) {
            	sqlSession.update("scheduleMapper.updateScheduleMaster", scdMap);
            }
        }
	}


	@Override
	public int selectChildSchedule(String scdCd) {
		return sqlSession.selectOne("scheduleMapper.selectChildSchedule", scdCd);
	}

	
/**************************************************** 일정  *****************************************************************/		
	
	/**
	 * 달력 그리기
	 * @return 
	 */
	@Override
	public List<Map<String, Object>> getMonthDate(Map<String, Object> dsSearch) {
		return sqlSession.selectList("scheduleMapper.getMonthDate", dsSearch);
	}

	/**
	 * 해당월 일정만 조회 (캘린더 전체 화면) - 원하는 일정(SCD_CD)만
	 */
	@Override
	public List<Map<String, Object>> getSchedule(Map<String, Object> dsSearch) {
		return sqlSession.selectList("scheduleMapper.getSchedule", dsSearch);
	}
	

	/**
	 * 나의 일정 조회 (해당월 일정만 조회 (캘린더 전체 화면) - 권한 있는 일정 전체 )
	 */
	@Override
	public List<Map<String, Object>> getMySchedule(Map<String, Object> dsSearch) {
		return sqlSession.selectList("scheduleMapper.getMySchedule", dsSearch);
	}


	/**
	 * 해당일 일정만 조회 (캘린더 전체 화면)
	 */
	@Override
	public List<Map<String, Object>> sectOneDay(Map<String, Object> dsSearch) {
		if(dsSearch.get("SCD_CD")==null) {
			//권한 있는 일정 전체
			return sqlSession.selectList("scheduleMapper.sectMyOneDay", dsSearch);
		}
		else {
			//원하는 일정(SCD_CD)만 
			return sqlSession.selectList("scheduleMapper.sectOneDay", dsSearch);
		}
		
	}


/**************************************************** 일정  팝업*****************************************************************/		


	/**
	 *로그인 사용자가 사용할 수 있는(권한 있는) 일정(일정코드) 목록
	 */
	@Override
	public List<Map<String, Object>> selectScdNm(Map<String,Object> dsCond) {
		return sqlSession.selectList("scheduleMapper.selectScdNm", dsCond);
	}


	/**
	 * 일정 추가/수정
	 */
	@Override
	public void saveScheduleContents(Map<String, Object> dsList, Map<String, Object> loginUserInfo) {
		dsList.put("USER_ID_SRV", loginUserInfo.get("USER_ID_SRV")); // ID
		dsList.put("USER_CON_IPADDR_SRV", loginUserInfo.get("USER_CON_IPADDR_SRV")); // IP

		String rowType = (String)dsList.get("STATUS");
		

		if(rowType.equals("add")) {
			sqlSession.insert("scheduleMapper.insertScheduleContents", dsList);
		}else if(rowType.equals("delete:U")) { // 삭제여부 update
			sqlSession.update("scheduleMapper.deleteUScheduleContents", dsList);
		}else if(rowType.equals("delete:D")) { // delete
			sqlSession.delete("scheduleMapper.deleteDScheduleContents", dsList);
		}else if(rowType.equals("update") || rowType.equals("searchUpdate")) {
			sqlSession.update("scheduleMapper.updateScheduleContents", dsList);		
		}
	}


	/**
	 * 일정 상세조회
	 */
	@Override
	public List<Map<String, Object>> searchScheduleContents(Map<String, Object> dsCond) {
		return sqlSession.selectList("scheduleMapper.searchScheduleContents", dsCond);
	}



/**************************************************** 일정  파일 관련*****************************************************************/	

	/**
	 * 일정 파일 Insert
	 */
	@Override
	public void saveScheduleFileInsert(List<Map<String, Object>> saveList, Map<String, Object> loginUserInfo) {
		int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> scdMap = saveList.get(i);
            
            scdMap.put("USER_ID_SRV", loginUserInfo.get("USER_ID_SRV"));
            scdMap.put("USER_CON_IPADDR_SRV", loginUserInfo.get("USER_CON_IPADDR_SRV"));
          
            sqlSession.insert("scheduleMapper.saveScheduleFileInsert", scdMap);
        }
	}


	/**
	 * 선택한 일정 파일 조회
	 */
	@Override
	public List<Map<String, Object>> searchScheduleFiles(Map<String, Object> dsCond) {
		return sqlSession.selectList("scheduleMapper.searchScheduleFiles", dsCond);
	}


	/**
	 * 첨부된 파일 삭제
	 */
	@Override
	public void deleteScheduleFile(List<Map<String, Object>> saveList) {
		// TODO Auto-generated method stub
		int size = saveList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> scdMap = saveList.get(i);
            sqlSession.insert("scheduleMapper.deleteScheduleFile", scdMap);
        }    
	}

	
	
	/****************************************************일정  검색*****************************************************************/		
	 
	/**
	 * 일정 검색 Title
	 */
	@Override
	public List<Map<String, Object>> searchScdData(Map<String, Object> dsCond) {	
		return sqlSession.selectList("scheduleMapper.searchScdData", dsCond);		
	}


	/**
	 * 일정 개수 조회
	 */	
	@Override
	public List<Map<String, Object>> searchScheduleListCnt(Map<String, Object> dsCond) {
		return sqlSession.selectList("scheduleMapper.searchScheduleListCnt", dsCond);
	}




}
