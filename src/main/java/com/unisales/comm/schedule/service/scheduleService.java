package com.unisales.comm.schedule.service;

import java.util.List;
import java.util.Map;

public interface scheduleService {

	/**************************************************** 일정 관리  *****************************************************************/	
	List<Map<String, Object>> searchScheduleList(Map<String, Object> searchMap);

	void saveScheduleMaster(List<Map<String, Object>> saveList, Map<String, Object> loginUserInfo);

	int selectChildSchedule(String scdCd);

	
	/**************************************************** 일정  *****************************************************************/	
		
	List<Map<String, Object>> getMonthDate(Map<String, Object> dsSearch);

	List<Map<String, Object>> getSchedule(Map<String, Object> dsSearch);
	
	List<Map<String, Object>> getMySchedule(Map<String, Object> dsSearch);

	List<Map<String, Object>> sectOneDay(Map<String, Object> dsSearch);


	/**************************************************** 일정  팝업*****************************************************************/	

	List<Map<String, Object>> selectScdNm(Map<String, Object> dsCond);

	void saveScheduleContents(Map<String, Object> dsList, Map<String, Object> loginUserInfo);

	List<Map<String, Object>> searchScheduleContents(Map<String, Object> dsCond);


	/**************************************************** 일정 파일 관련 *****************************************************************/	

	void saveScheduleFileInsert(List<Map<String, Object>> inDs, Map<String, Object> loginUserInfo);

	List<Map<String, Object>> searchScheduleFiles(Map<String, Object> dsCond);

	void deleteScheduleFile(List<Map<String, Object>> saveList);

	
	/****************************************************일정  검색*****************************************************************/		
	 	
	List<Map<String, Object>> searchScdData(Map<String, Object> dsCond);

	List<Map<String, Object>> searchScheduleListCnt(Map<String, Object> dsCond);


}
