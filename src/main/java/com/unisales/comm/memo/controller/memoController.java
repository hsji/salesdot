package com.unisales.comm.memo.controller;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.comm.memo.service.memoService;
import com.unisales.util.ImageUtil;
import com.unisales.util.NexterUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformType;

/**
 * <pre>
 * @title   AuthInfoController
 * @desc    System 정보 관리 Controller (권한정보)         
 * @package com.dxtobe.sytm.controller
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

@Controller
public class memoController {
	private Logger log = LoggerFactory.getLogger(memoController.class);
	
	@Autowired(required=true)
    private memoService commMemoService;

	/**********************************************************메모***********************************************************/
	/**
	 * 메모조회
	 * @param dsCond		: 조회 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchMemoList.do")
	public NexacroResult searchMemoList(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, HttpServletRequest request) throws NexacroException{
		
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
    						
		//게시글 첨부파일 리스트 조회
    	List<Map<String,Object>> list = commMemoService.searchMemoList(searchMap, loginUserInfo);
    	Map<String,Object> maxseq = commMemoService.searchMemoMaxSeq(loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", list);
		result.addDataSet("dsMaxSeq", maxseq);
		return result;
	} 
	
	/**
	 * 메모상세조회
	 * @param dsCond		: 조회 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchMemoDetail.do")
	public NexacroResult searchMemoDetail(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
											, HttpServletRequest request) throws NexacroException{
		
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
    						
		//게시글 첨부파일 리스트 조회
    	Map<String,Object> memo = commMemoService.searchMemoDetail(searchMap, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", memo);
		return result;
	} 	
	
	/**
	 * 게시판 컨텐츠 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveMemoContents.do")
	public NexacroResult saveMemoContents(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    						loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 추가/수정
    	commMemoService.saveMemoContents(saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	
}
