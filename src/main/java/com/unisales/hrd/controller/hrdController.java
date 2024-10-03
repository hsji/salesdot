package com.unisales.hrd.controller;

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

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.encryption.AccessPermission;
import org.apache.pdfbox.pdmodel.encryption.StandardProtectionPolicy;
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
import com.unisales.hrd.service.hrdService;
import com.unisales.util.ItextPdfInfo;
import com.unisales.util.MailUtil;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;
import com.unisales.util.PDFUtil;

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
public class hrdController {
	private Logger log = LoggerFactory.getLogger(hrdController.class);
	
	@Autowired(required=true)
    private hrdService hrdCommService;

    public static void deleteDirectory(File file)
    {
        // store all the paths of files and folders present
        // inside directory
        for (File subfile : file.listFiles()) {
 
            // if it is a subfolder,e.g Rohan and Ritik,
            //  recursively call function to empty subfolder
            if (subfile.isDirectory()) {
                deleteDirectory(subfile);
            }
 
            // delete files and empty subfolders
            subfile.delete();
        }
    }
    
    /**
	 * 급여명세작업파일 삭제
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws IOException 
	 */
    @RequestMapping(value = "/deletePdfList.do")
	public NexacroResult deletePdfList(HttpServletRequest request) throws NexacroException, IOException{
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("pdf.properties");
        properties.load(reader);
    	
	    String path = properties.getProperty("pdfDownloadPath");
    	String dpath = "SALEA";
    	String enc = "Y";
 	
    	String rootPath = path + "PDF\\";
    	String encDir = "enc";
    	
		String dirpath = rootPath + dpath;
		String direncpath = rootPath + dpath + encDir;
		
		File file = new File(dirpath);
		deleteDirectory(file);

		File file2 = new File(direncpath);
		deleteDirectory(file2);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
    
    /**
	 * 급여명세 메일 발송현황
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchSendMailResultList.do")
	public NexacroResult searchSendMailResultList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap,
												HttpServletRequest request) throws NexacroException{

    	// 사용자 email 정보
    	List<Map<String,Object>> mailInfo = hrdCommService.searchSendMailResultList(searchMap);
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", mailInfo);
		
		return result;
	}
    
    /**
	 * 급여명세 사용자 메일정보, 메일 컨텐트 조회 
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchSalaryUserList.do")
	public NexacroResult searchSalaryUserList(HttpServletRequest request) throws NexacroException{

    	// 사용자 email 정보
    	List<Map<String,Object>> mailInfo = hrdCommService.searchSalaryUserMailList();
    	// 사용자 email 정보
    	List<Map<String,Object>> mailContentsInfo = hrdCommService.searchMailContents();
			
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsUserList", mailInfo);
		result.addDataSet("dsMailContents", mailContentsInfo);
		
		return result;
	}
    
    /**
	 * 메일 컨텐트 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveMailContents.do")
	public NexacroResult saveMailContents(@ParamDataSet(name = "dsMailContents", required = false) Map<String,Object> saveMap
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	hrdCommService.saveMailContents(saveMap, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}          
    
    /**
	 * 급여명세 메일 발송
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
     * @throws IOException 
	 */
    @RequestMapping(value = "/salarySendMail.do")
	public NexacroResult saveCustomerInfo(@ParamDataSet(name = "dsIn", required = false) List<Map<String,Object>> sendList
										, HttpServletRequest request) throws NexacroException, IOException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
    	
    	String toemail = "";
        int size = sendList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> userMap = sendList.get(i);
            
            toemail = (String) userMap.get("toemail");
            if(toemail == null) toemail = "";
            if(toemail.equals("")) continue;
            
            pdfSalaryCreate(userMap);

            userMap = MailUtil.sendSalaryMail(userMap);
            listMap.add(userMap);
            
            hrdCommService.saveMailResult(userMap);
            
        }	  
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", listMap);
		return result;
	}

	private void pdfSalaryCreate(Map<String, Object> searchMap) throws IOException {
		// TODO Auto-generated method stub
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("pdf.properties");
        properties.load(reader);
    	
	    String path = properties.getProperty("pdfDownloadPath");
	    
    	String html = (String) searchMap.get("html");
    	String fname = (String) searchMap.get("fname");
    	String dpath = "SALEA";
    	String enc = "Y";
    	String resno = (String) searchMap.get("resno");
 	
    	String rootPath = path + "PDF\\";
    	String encDir = "enc";
    	
		String dirpath = rootPath + dpath;
		String direncpath = rootPath + dpath + encDir;
		
    	File dirx = new File(dirpath); 
    	if (!dirx.isDirectory()) { 
    		dirx.mkdirs(); 
    	}
		
		if(enc.equals("Y")) {
			File diry = new File(direncpath); 
			if (!diry.isDirectory()) { 
				diry.mkdirs(); 
			}
		}
		dirpath = dirpath + "\\";
		direncpath = direncpath + "\\";
	    
        // 미리 준비한 DTO 선언
    	ItextPdfInfo itextPdfDto = new ItextPdfInfo();

    	String saveFileName = fname; 
        // pdf 파일이 저장될 경로 ( Windows 기준 )
        itextPdfDto.setPdfFilePath(dirpath);
        itextPdfDto.setPdfFileName(saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        // ======================= PDF 존재 유무 체크 =======================
        File file = pdfUtil.checkPDF(itextPdfDto, html);
        // ===============================================================
        
		String OUTPUT_FOLDER = direncpath;

		PDDocument pdDocument = Loader.loadPDF(file);
		AccessPermission accessPermission = new AccessPermission();
		StandardProtectionPolicy standardProtectionPolicy = new StandardProtectionPolicy(resno, resno, accessPermission); // param : ownerpassword, userpassword, AccessPermission
		standardProtectionPolicy.setEncryptionKeyLength(128); // 암호화 키길이(40, 128, 256) 이외 값 exception
		standardProtectionPolicy.setPermissions(accessPermission);
		pdDocument.protect(standardProtectionPolicy);
		pdDocument.save(OUTPUT_FOLDER + saveFileName + ".pdf");
		pdDocument.close();		
	}
	
    /**
	 * 일일보고 주간조회 
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchWeekWorkList.do")
	public NexacroResult searchWeekWorkList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap,
			HttpServletRequest request) throws NexacroException{

		// 사용자 email 정보
		List<Map<String,Object>> workInfo = hrdCommService.searchWeekWorkList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", workInfo);
	
		return result;
	}	

    
    /**
	 * 일일보고 
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchWorkList.do")
	public NexacroResult searchWorkList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap,
			HttpServletRequest request) throws NexacroException{

		// 사용자 email 정보
		List<Map<String,Object>> workInfo = hrdCommService.searchWorkList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", workInfo);
	
		return result;
	}
    
    /**
	 * 일일보고 
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping(value = "/searchPreWorkList.do")
	public NexacroResult searchPreWorkList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap,
			HttpServletRequest request) throws NexacroException{

		// 사용자 email 정보
		List<Map<String,Object>> workInfo = hrdCommService.searchPreWorkList(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsList", workInfo);
	
		return result;
	}    
    
    /**
	 *일일보고 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveWorkList.do")
	public NexacroResult saveMailContents(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap
										,@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = new HashMap<String, Object>();
    	loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	hrdCommService.deleteWorkList(searchMap);
    	hrdCommService.saveWorkList(saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}           
        
}
