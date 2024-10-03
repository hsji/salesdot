package com.unisales.next.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
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
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.Variable;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.java.xapi.tx.PlatformRequest;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.sales.service.salesService;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;

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
public class nextController {
	private Logger log = LoggerFactory.getLogger(nextController.class);

    /**
	 * 고객사 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws PlatformException 
	 */
    @RequestMapping(value = "/nextService.do")
	public NexacroResult nextService(@ParamDataSet(name = "dsGlobal", required = false) Map<String,Object> dsGlobalMap
								, @ParamDataSet(name = "dsParam", required = false) Map<String,Object> dsParamMap
								, @ParamVariable(name="trxUrl") String trxUrl
								, HttpServletRequest request) throws NexacroException, PlatformException {

    	
    	String reqString = NexaUtil.createNextDataset(dsGlobalMap, dsParamMap);
    	
        NexacroResult result = new NexacroResult();

        try {
        	String baseUrl = "http://next.tobesoft.com/";
            //   URL 설정하고 접속하기 
            URL url = new URL(baseUrl + trxUrl); 

            HttpURLConnection http = (HttpURLConnection) url.openConnection();
            //-------------------------- 
            //   전송 모드 설정 - 기본적인 설정 
            //-------------------------- 
            http.setDefaultUseCaches(false);
            http.setDoInput(true); // 서버에서 읽기 모드 지정 
            http.setDoOutput(true); // 서버로 쓰기 모드 지정  
            http.setUseCaches(false);
            http.setRequestMethod("POST"); // 전송 방식은 POST
            //--------------------------
            // 헤더 세팅
            //--------------------------
            http.setRequestProperty("Connection", "keep-alive");
            http.setRequestProperty("cache-control", "no-cache");
            http.setRequestProperty("Accept", "application/xml, text/xml, */*");
            http.setRequestProperty("content-type", "text/xml"/*"application/x-www-form-urlencoded"*/);

            //-------------------------- 
            //   서버로 값 전송 
            //-------------------------- 
            OutputStreamWriter outStream = new OutputStreamWriter(http.getOutputStream(), "UTF-8");
            PrintWriter writer = new PrintWriter(outStream);
            writer.write(reqString);
            writer.flush();
            //-------------------------- 
            //   서버에서 전송받기 
            //-------------------------- 
            /*
            InputStreamReader tmp = new InputStreamReader(http.getInputStream(), "UTF-8");
            BufferedReader reader = new BufferedReader(tmp);
            StringBuilder builder = new StringBuilder();
            String str;
            while ((str = reader.readLine()) != null) {
                builder.append(str);
            }
           System.out.println(builder.toString());
            */
            
            PlatformRequest platformRequest = new PlatformRequest(http.getInputStream(), PlatformType.CONTENT_TYPE_XML, "utf-8");
            platformRequest.receiveData();
            
        	PlatformData inPD = platformRequest.getData();
        	VariableList inVl = inPD.getVariableList();
            DataSetList  inDl = inPD.getDataSetList();
            
            String ErrorCode = inVl.getString("ErrorCode");
            if(ErrorCode != "0") {
    			result.setErrorCode(Integer.parseInt(ErrorCode));
                String ErrorMsg = inVl.getString("ErrorMsg");
    			result.setErrorMsg(ErrorMsg);
            }
            
            int size = inDl.size();
            for(int i=0;i<size;i++) {
            	result.addDataSet(inDl.get(i));
            }
            
        } catch (IOException e) {
    		e.printStackTrace();
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
        }    	
    	
    	return result;
	}

    /**
	 * 고객사 목록 조회
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws PlatformException 
	 */
    @RequestMapping(value = "/nextServiceCode.do")
	public NexacroResult nextServiceCode(@ParamDataSet(name = "dsParam", required = false) Map<String,Object> dsParamMap
								, @ParamVariable(name="trxUrl") String trxUrl
								, HttpServletRequest request) throws NexacroException, PlatformException {
    	
    	String reqString = NexaUtil.createNextDatasetCode(dsParamMap);
    	
        NexacroResult result = new NexacroResult();

        try {
        	String baseUrl = "http://next.tobesoft.com/";
            //   URL 설정하고 접속하기 
            URL url = new URL(baseUrl + trxUrl); 

            HttpURLConnection http = (HttpURLConnection) url.openConnection();
            //-------------------------- 
            //   전송 모드 설정 - 기본적인 설정 
            //-------------------------- 
            http.setDefaultUseCaches(false);
            http.setDoInput(true); // 서버에서 읽기 모드 지정 
            http.setDoOutput(true); // 서버로 쓰기 모드 지정  
            http.setUseCaches(false);
            http.setRequestMethod("POST"); // 전송 방식은 POST
            //--------------------------
            // 헤더 세팅
            //--------------------------
            http.setRequestProperty("Connection", "keep-alive");
            http.setRequestProperty("cache-control", "no-cache");
            http.setRequestProperty("Accept", "application/xml, text/xml, */*");
            http.setRequestProperty("content-type", "text/xml"/*"application/x-www-form-urlencoded"*/);

            //-------------------------- 
            //   서버로 값 전송 
            //-------------------------- 
            OutputStreamWriter outStream = new OutputStreamWriter(http.getOutputStream(), "UTF-8");
            PrintWriter writer = new PrintWriter(outStream);
            writer.write(reqString);
            writer.flush();
            //-------------------------- 
            //   서버에서 전송받기 
            //-------------------------- 
            /*
            InputStreamReader tmp = new InputStreamReader(http.getInputStream(), "UTF-8");
            BufferedReader reader = new BufferedReader(tmp);
            StringBuilder builder = new StringBuilder();
            String str;
            while ((str = reader.readLine()) != null) {
                builder.append(str);
            }
           System.out.println(builder.toString());
            */
            
            PlatformRequest platformRequest = new PlatformRequest(http.getInputStream(), PlatformType.CONTENT_TYPE_XML, "utf-8");
            platformRequest.receiveData();
            
        	PlatformData inPD = platformRequest.getData();
        	VariableList inVl = inPD.getVariableList();
            DataSetList  inDl = inPD.getDataSetList();
            
            String ErrorCode = inVl.getString("ErrorCode");
            if(ErrorCode == null) ErrorCode = "0";
            if(ErrorCode != "0") {
    			result.setErrorCode(Integer.parseInt(ErrorCode));
                String ErrorMsg = inVl.getString("ErrorMsg");
    			result.setErrorMsg(ErrorMsg);
            }
            
            int size = inDl.size();
            for(int i=0;i<size;i++) {
            	result.addDataSet(inDl.get(i));
            }
            
        } catch (IOException e) {
    		e.printStackTrace();
    		throw new NexacroException("exceptionName", -999, "msg.keyfail");
        }    	
    	
    	return result;
	}
    
}
