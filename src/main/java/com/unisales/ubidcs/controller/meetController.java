package com.unisales.ubidcs.controller;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.Reader;
import java.sql.Clob;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

import org.apache.commons.io.FileUtils;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.encryption.AccessPermission;
import org.apache.pdfbox.pdmodel.encryption.StandardProtectionPolicy;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.apache.pdfbox.tools.imageio.ImageIOUtil;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfPage;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.kernel.pdf.canvas.parser.listener.LocationTextExtractionStrategy;
import com.itextpdf.text.pdf.parser.PdfReaderContentParser;
import com.itextpdf.text.pdf.parser.TextMarginFinder;
import com.itextpdf.text.pdf.parser.TextRenderInfo;

import com.itextpdf.kernel.pdf.canvas.parser.PdfCanvasProcessor;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.ubidcs.service.meetService;
import com.unisales.ubidcs.solution.eform.Flatten;
import com.unisales.util.ImageUtil;
import com.unisales.util.ItextPdfInfo;
import com.unisales.util.NexaUtil;
import com.unisales.util.NexterUtil;
import com.unisales.util.PDFUtil;
import com.unisales.util.UbidcsUtil;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformType;

/**
 * <pre>
 * @title   공통용 서비스 컨트롤러
 * @desc    공통형태의 서비스 사용         
 * @package com.wms.base.controller
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
public class meetController {
	private Logger log = LoggerFactory.getLogger(meetController.class);
	
	final String MEETDOC_BASEFILE 	= "basedoc.properties";
	final String PDF_EDITJSONFILE 	= "edit.json";
	final String PDF_INFOJSONFILE 	= "info.json";	
	
	@Autowired(required=true)
    private meetService commMeetService;


	/********************************************************** 공통***********************************************************/
	/**
	 * 공통 조회
	 * @param searchMap		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchCommonBaseService.do")
	public NexacroResult searchCommonBaseService(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										    , @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
    	NexterUtil NexUtil = new NexterUtil();
    	searchMap = NexUtil.setUserInfoMap(request, searchMap);
    	
	    List<Map<String,Object>> contents  = commMeetService.searchBase(queryMap, searchMap);		//게시글 내용

	    String outds = (String) queryMap.get("outds");
	    if(outds == null) outds = "dsList";
	    NexacroResult result = new NexacroResult();
		result.addDataSet(outds, contents);
		
		return result;
	} 
	
	/**
	 * 공통 조회
	 * @param searchMap		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchCommonListService.do")
	public NexacroResult searchCommonListService(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										    , @ParamDataSet(name = "dsMap", required = false) List<Map<String,Object>> queryList
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
    	NexterUtil NexUtil = new NexterUtil();
    	searchMap = NexUtil.setUserInfoMap(request, searchMap);
    	
	    NexacroResult result = new NexacroResult();
	    
    	int size = queryList.size();
    	for(int i=0;i<size;i++) {
    		Map<String,Object> queryMap = queryList.get(i);
    	    List<Map<String,Object>> list  = commMeetService.searchBase(queryMap, searchMap);		//게시글 내용
    	    String outds = (String) queryMap.get("outds");
    	    result.addDataSet(outds, list);
    	}
		
		return result;
	} 
	
	
	/**
	 * 공통 조회
	 * @param in1Map		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchCommonCheckService.do")
	public NexacroResult searchCommonCheckService(@ParamDataSet(name = "dsIn1", required = false)  List<Map<String,Object>> in1Map 
											, @ParamDataSet(name = "dsIn2", required = false)  List<Map<String,Object>> in2Map
										    , @ParamDataSet(name = "dsMap", required = false) List<Map<String,Object>> queryMap
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
	    NexacroResult result = new NexacroResult();
	    
	    if(in1Map.size()>0) {
		    Map<String,Object> map1 = queryMap.get(0);
		    String outds = (String) map1.get("outds");
		    if(outds == null) outds = "dsOut1";
		    
	    	List<Map<String,Object>> out = commMeetService.searchCheck(map1, in1Map);
	    	result.addDataSet(outds, out);
	    }

	    if(in2Map != null && in2Map.size()>0) {
		    Map<String,Object> map1 = queryMap.get(1);
		    String outds = (String) map1.get("outds");
		    if(outds == null) outds = "dsOut2";
		    
	    	List<Map<String,Object>> out = commMeetService.searchCheck(map1, in1Map);
	    	result.addDataSet(outds, out);
	    }
		
		return result;
	} 
	
	
	/**
	 * 공통 조회 페이징
	 * @param searchMap		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchCommonBasePagingService.do")
	public NexacroResult searchCommonBasePagingService(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap
										    , @ParamDataSet(name = "dsCondPage", required = false) Map<String,Object> pageMap
										    , @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
    	NexterUtil NexUtil = new NexterUtil();
    	searchMap = NexUtil.setUserInfoMap(request, searchMap);
    	
		searchMap.put("START_NUM", pageMap.get("START_NUM"));
		searchMap.put("END_NUM", pageMap.get("END_NUM"));
		
		
	    List<Map<String,Object>> listInfo  = commMeetService.searchBasePaging(queryMap, searchMap);		
	    List<Map<String,Object>> cntInfo  = commMeetService.searchBasePagingCnt(queryMap, searchMap);		

	    String outds = (String) queryMap.get("outds");
	    if(outds == null) outds = "dsList";

	    String cntds = outds + "Cnt";
	    
	    NexacroResult result = new NexacroResult();
		result.addDataSet(outds, listInfo);
		result.addDataSet(cntds, cntInfo);
		
		
		return result;
	} 	
	

	/**
	 * 공통 파일목록조회
	 * @param searchMap		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/searchCommonBaseFileService.do")
	public NexacroResult searchCommonBaseFileService(@ParamDataSet(name = "dsCond", required = false) Map<String,String> searchMap 
											, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
											, HttpServletRequest request) throws NexacroException{
			//게시글 첨부파일 리스트 조회
	    	List<Map<String,Object>> fileList = commMeetService.searchBaseFileList(queryMap, searchMap);
	    	
		    String outds = (String) queryMap.get("outds");
		    if(outds == null) outds = "dsFile";	    	
			NexacroResult result = new NexacroResult();
			result.addDataSet(outds, fileList);
			return result;
	} 
	
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveCommonBaseService.do")
	public NexacroResult saveCommonBaseService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException, IOException, ParseException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	// 추가/수정
    	commMeetService.saveBaseContents(queryMap, saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  
   
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveCommonBaseFileService.do")
	public NexacroResult saveCommonBaseFileService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException, IOException, ParseException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	if(saveList.size() > 0) {
	    	Map<String, Object> mapFirst = saveList.get(0);
	    	if(mapFirst != null) {
	    		String fileData = (String) mapFirst.get("FILE");

	    		if(fileData != null) {
	    			

		    		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		    		String path = ubidcsUtil.getUuidPath((String)mapFirst.get("DOC_ID"), (String)mapFirst.get("SYS_CODE"), (String)mapFirst.get("BIZ_CODE") ) + "/bigimage/" + (String)mapFirst.get("USER_ID") + ".png";

	    			String[] strings = fileData.split(",");
	    	        byte[] data = DatatypeConverter.parseBase64Binary(strings[1]);
	    	        
	    	        ByteArrayInputStream bis = new ByteArrayInputStream(data);
	    	        BufferedImage image = ImageIO.read(bis);
	    	        bis.close();

	    	        // write the image to a file
	    	        File outputfile = new File(path);
	    	        ImageIO.write(image, "png", outputfile);
	    	        
	    	        // 회의메인 상태 변경
	    	    	Map<String,Object> queryMap1 = new HashMap<String, Object>();
	    	    	queryMap1.put("map", "meet");
	    	    	queryMap1.put("mapid", "MeetResultInfo");
	    	    	
	    	    	Map<String,Object> saveMap = new HashMap<String, Object>();
	    	    	saveMap.put("MTG_RESULT_TYPE", "R");
	    	    	saveMap.put("DOC_ID", (String)mapFirst.get("DOC_ID"));
	       	
	    	    	commMeetService.updateContents(queryMap1, saveMap);
	    	    	
	    	        /*
	    	        File file = new File(path);
	    	        try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
	    	            outputStream.write(data);
	    	        } catch (IOException e) {
	    	            e.printStackTrace();
	    	        }
	    	        */
	    	        
	    	        /*
		    		File file = new File(path);
		            if (!file.exists()) {                
		            	file.createNewFile();            
		            } 
		            FileWriter fw = new FileWriter(file);            
		            BufferedWriter writer = new BufferedWriter(fw);             
		            writer.write(fileData);
		            writer.close();
		            */
	    		}
	
	    	}
    	}
    	
    	// 추가/수정
    	commMeetService.saveBaseContents(queryMap, saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}      

    /**
	 * 파일다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	
    public String SaveBaseDoc(Map<String, Object> dsList, List<Map<String,Object>> userList) throws Exception {

        String html = dsList.get("HTML").toString();
        String saveFileName = dsList.get("DOC_ID").toString();
        
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String path = ubidcsUtil.getUuidPath( (String)dsList.get("DOC_ID"), (String)dsList.get("SYS_CODE"), (String)dsList.get("BIZ_CODE"));	
		
    	File dir = new File(path); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    		
    		File dir2 = new File(path + "/bigimage"); 
    		dir2.mkdirs();
    	} else {
    		for(File file: dir.listFiles()) {
   				file.delete();
    		}
    	}
    	
    	// 회의록 HTML 저장
    	ubidcsUtil.writeJsonFile(path, html, saveFileName + ".html");
    	
    	// 참석자정보
    	int size = userList.size();
    	String userName, workName;
    	String nameStr = "";
    	for(int i=0;i<size;i++) {
    		Map<String,Object> userMap = userList.get(i);
    		userName = (String) userMap.get("USER_NAME");
    		workName = (String) userMap.get("WORK_NAME");
    		if(workName == null) workName = "";
    		if(i>0) nameStr += ", ";
    		nameStr += userName + " " + workName + "  (인)  ";// + '</span>';
    	}
    	html = html.replace("@@USERLIST@@", nameStr);
		
        // 미리 준비한 DTO 선언
    	ItextPdfInfo itextPdfDto = new ItextPdfInfo();
    	
        itextPdfDto.setPdfFilePath(path);
        itextPdfDto.setPdfFileName(saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        File serverFile = pdfUtil.checkPDF(itextPdfDto, html);
        
    	// 이미지 저장
		// 설정한 path에 파일저장 
		
		if(serverFile.exists()) {
			// snapshot
			PDDocument document = Loader.loadPDF(serverFile);
			PDFRenderer pdfRenderer = new PDFRenderer(document);
			
			int page = document.getNumberOfPages();
	
			BufferedImage bim = pdfRenderer.renderImageWithDPI(0, 30, ImageType.RGB);
			ImageIOUtil.writeImage(bim, path + "/" + saveFileName + ".png", 30);
			
			// 페이지별이미지 생성
			for(int i = 0 ; i < page ; i++){
				BufferedImage bim2 = pdfRenderer.renderImageWithDPI(i, 72, ImageType.RGB);
				String fileName = String.format("%d-large.png", (i+1));
				ImageIOUtil.writeImage(bim2, path + "/bigimage/" + fileName, 72);
			}
			
			// 이미지 합치기
			int w = 595;
			int h = 842;
			int hs = h*page;
			//hs = hs + (15*(page-1));
			
			BufferedImage mergedImage = new BufferedImage(w, hs, BufferedImage.TYPE_INT_RGB);
			Graphics2D graphics = (Graphics2D) mergedImage.getGraphics();
			graphics.setBackground(Color.WHITE);
			
			int top = 0;
			for(int i = 0 ; i < page ; i++){
				String fileName = String.format("%d-large.png", (i+1));
				BufferedImage image1 = ImageIO.read(new File(path + "/bigimage/" + fileName));
				graphics.drawImage(image1, 0, top, null);
				top = top + h;
			}		
			ImageIO.write(mergedImage, "png", new File(path + "/bigimage/mergedImage.png"));
			
			for(int i = 0 ; i < page ; i++){
				String fileName = String.format("%d-large.png", (i+1));
				File delFile = new File(path + "/bigimage/" + fileName);
				delFile.delete();
			}			
			
			// TEST

			/*
			PdfDocument pdfDoc = new PdfDocument(new PdfReader("input.pdf"));

			for (int pageNum = 1; pageNum <= pdfDoc.getNumberOfPages(); pageNum++) {
			    PdfPage page1 = pdfDoc.getPage(pageNum);
			    LocationTextExtractionStrategy strategy = new LocationTextExtractionStrategy();
			    new PdfCanvasProcessor(strategy).processPageContent(page1);
			    List<TextRenderInfo> textInfos = strategy.getResultantTextRenderInfos();
			    
			    for (TextRenderInfo textRenderInfo : textInfos) {
			        Rectangle rect = textRenderInfo.getDescentLine().getBoundingRectangle();
			        System.out.println("Page: " + pageNum + ", Text: " + textRenderInfo.getText() +
			                           ", Font Size: " + textRenderInfo.getFontSize() +
			                           ", Position: " + rect.getLeft() + ", " + rect.getBottom());
			    }
			}

			pdfDoc.close();
			*/
			/*
		       PdfReader reader = new PdfReader(path + "/" + saveFileName + ".pdf");

		        int numberOfPages = reader.getNumberOfPages();



		        PdfReaderContentParser parser = new PdfReaderContentParser(reader);
		        parser.processContent(numberOfPages, new TextMarginFinder() {
		            @Override
		            public void renderText(TextRenderInfo renderInfo) {
		                super.renderText(renderInfo);
		                System.out.println(renderInfo.getText() + ", x: " + renderInfo.getBaseline().getBoundingRectange().x + ", y: " + renderInfo.getBaseline().getBoundingRectange().y);
		            }
		        });			
			*/
	    	Map<String,Object> queryMap = new HashMap<String, Object>();
	    	queryMap.put("map", "meet");
	    	queryMap.put("mapid", "MeetPageInfo");
	    	
	    	Map<String,Object> saveMap = new HashMap<String, Object>();
	    	saveMap.put("PDF_PAGE", page);
	    	saveMap.put("DOC_ID", saveFileName);
   	
	    	commMeetService.updateContents(queryMap, saveMap);
	    	
	        document.close();        
		}
        
        return path;
    }
		    
    
	/**
	 * 문서 기본정보 저장
	 */	
	public void ubiDocuInfoJsonSaveService(Map<String,Object> doc, String path, Map<String, Object> loginUserInfo) throws IOException, ParseException {

		String userId = (String) loginUserInfo.get("USER_ID_SRV");
		Map<String,String> queryMap = new HashMap<>();
		queryMap.put("QType"	, "insert");
		queryMap.put("QMap"		, "ubiDocMapper.insertDocInfo");
		
		String fileName = doc.get("DOC_ID") + ".pdf";
	
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		ubidcsUtil.makeJsonFile(fileName, (String)doc.get("DOC_ID"), (String)doc.get("SYS_CODE"), (String)doc.get("BIZ_CODE"), userId);
	}
	
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/insertContentsService.do")
	public NexacroResult insertContentsService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws Exception{
    	NexterUtil NexUtil = new NexterUtil();
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);

    	commMeetService.insertContents(queryMap, saveList, loginUserInfo);

		NexacroResult result = new NexacroResult();
		return result;
	}      	
	
    
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/updateContentsService.do")
	public NexacroResult updateContentsService(@ParamDataSet(name = "dsList", required = false) Map<String,Object> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws Exception{

    	commMeetService.updateContents(queryMap, saveList);

		NexacroResult result = new NexacroResult();
		return result;
	}      	
    
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/deleteContentsService.do")
	public NexacroResult deleteContentsService(@ParamDataSet(name = "dsList", required = false) Map<String,Object> deleteMap
										, @ParamDataSet(name = "dsMap", required = false) List<Map<String,Object>> queryList
										, HttpServletRequest request) throws Exception{

	    NexacroResult result = new NexacroResult();
	    
    	int size = queryList.size();
    	for(int i=0;i<size;i++) {
    		Map<String,Object> queryMap = queryList.get(i);
    	    commMeetService.deleteContents(queryMap, deleteMap);		//게시글 내용
    	}
    	
		return result;
	}        
    
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/saveMgtInfoService.do")
	public NexacroResult saveMgtInfoService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
											,@ParamDataSet(name = "dsUser", required = false) List<Map<String,Object>> userList
											,@ParamDataSet(name = "dsReadUser", required = false) List<Map<String,Object>> readuserList
											,@ParamDataSet(name = "dsSignUser", required = false) List<Map<String,Object>> signuserList
										, HttpServletRequest request) throws Exception{
    	NexterUtil NexUtil = new NexterUtil();
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);

    	Map<String,Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("map", "meet");
    	queryMap.put("mapid", "MeetInfo");    	
    	
    	saveList.get(0).put("MTG_RESULT_TYPE", null);
    	commMeetService.saveBaseContents(queryMap, saveList, loginUserInfo);

    	int size = userList.size();
    	for(int i=0;i<size;i++) {
    		Map<String,Object> onemap = userList.get(i);
    		if(onemap != null) {
    			onemap.put("READ_STATUS", null);
    		}
    	}
    	queryMap.put("mapid", "MeetUserList");
    	commMeetService.deleteAndInsertContents(queryMap, userList, loginUserInfo);
    	
    	queryMap.put("mapid", "MeetReadUserInfo");
    	commMeetService.deleteAndInsertContents(queryMap, readuserList, loginUserInfo);
    	
    	queryMap.put("mapid", "MeetSignUserInfo");
    	commMeetService.deleteAndInsertContents(queryMap, signuserList, loginUserInfo);
    	
    	
    	// PDF 저장
    	Map<String,Object> doc = saveList.get(0);
    	String path = SaveBaseDoc(doc, userList);
    	
    	// Sign DB 저장
    	
        // 문서기본정보 저장
    	ubiDocuInfoJsonSaveService(doc, path, loginUserInfo);    
    	
		NexacroResult result = new NexacroResult();
		return result;
	}      
    
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/saveUserConfirm.do")
	public NexacroResult saveUserConfirm(@ParamDataSet(name = "dsList", required = false) Map<String,Object> saveMap
											,@ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws Exception{

        String html = saveMap.get("HTML").toString();
        String saveFileName = saveMap.get("DOC_ID").toString();
        String user = saveMap.get("USER_ID").toString();
        
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String path = ubidcsUtil.getUuidPath( (String)saveMap.get("DOC_ID"), (String)saveMap.get("SYS_CODE"), (String)saveMap.get("BIZ_CODE"));	
		
        // 미리 준비한 DTO 선언
    	ItextPdfInfo itextPdfDto = new ItextPdfInfo();
    	
        itextPdfDto.setPdfFilePath(path);
        itextPdfDto.setPdfFileName(saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        pdfUtil.checkPDF(itextPdfDto, html);
        
    	// 이미지 저장
		// 설정한 path에 파일저장 
		
        File f = new File(path + "/bigimage/" + user + ".png");
		if(f.exists()) {
			f.delete();
		} 
		
		commMeetService.updateContents(queryMap, saveMap);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}          
    

    /**
	 * 파일다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	
    public void UpdateBaseDoc(Map<String, Object> dsList) throws Exception {

    	Map<String,Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("map", "meet");
    	queryMap.put("mapid", "HtmlUserList");    	
    	
    	// 사용자정보 읽기
    	List<Map<String,Object>> userList = commMeetService.searchBase(queryMap, dsList);
    	
    	
        String saveFileName = dsList.get("DOC_ID").toString();
        
		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String path = ubidcsUtil.getUuidPath( (String)dsList.get("DOC_ID"), (String)dsList.get("SYS_CODE"), (String)dsList.get("BIZ_CODE"));	
		
    	// 회의록 HTML 읽기
    	String html = ubidcsUtil.readTextFile(path, saveFileName + ".html");
    	
    	// 참석자정보
    	int size = userList.size();
    	String userName, workName, state;
    	String nameStr = "";
    	for(int i=0;i<size;i++) {
    		Map<String,Object> userMap = userList.get(i);
    		userName = (String) userMap.get("USER_NAME");
    		workName = (String) userMap.get("WORK_NAME");
    		state = (String) userMap.get("READ_STATUS");
    		if(state == null) state = "";
    		
    		if(workName == null) workName = "";
    		if(i>0) nameStr += ", ";
    		
    		if(state.equals("Z")) {		// 열람완료
    			String sign = (String) userMap.get("USER_SIGN");
    			//nameStr += userName + " " + workName + "<div style=\"vertical-align:center;\"><img src=\"" + sign + "\" width=20 height=20></div>";
    			nameStr += userName + " " + workName + "<img src=\"" + sign + "\" width=30 height=20>";
    		} else if(state.equals("R")) {		// 반송
    			nameStr += userName + " " + workName + " " + "<span style=\"font-size:10.0pt;font-family:&quot;맑은 고딕&quot;color:#ff0000;\">  [반송]  </span>";
    		} else {
    			nameStr += "<span style=\"font-size:10.0pt;font-family:&quot;맑은 고딕&quot;\">" + userName + " " + workName + "  (인)  </span>";// + '</span>';
    		}
    	}
    	html = html.replace("@@USERLIST@@", nameStr);
    	
    	System.out.println(html);
		
        // 미리 준비한 DTO 선언
    	ItextPdfInfo itextPdfDto = new ItextPdfInfo();
    	
        itextPdfDto.setPdfFilePath(path);
        itextPdfDto.setPdfFileName(saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        File serverFile = pdfUtil.checkPDF(itextPdfDto, html);
    }
    
	/**
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws Exception 
	 */
    @RequestMapping(value = "/saveUserViewService.do")
	public NexacroResult saveUserViewService(@ParamDataSet(name = "dsList", required = false) Map<String,Object> saveMap
										, HttpServletRequest request) throws Exception{
    	NexterUtil NexUtil = new NexterUtil();
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);

    	Map<String,Object> queryMap = new HashMap<String, Object>();
    	queryMap.put("map", "meet");
    	queryMap.put("mapid", "UserState");    	
    	
    	// flag 변경
    	commMeetService.updateContents(queryMap, saveMap);
    	
    	// PDF 저장
    	UpdateBaseDoc(saveMap);
    	
    	// 열람자수 조회
    	queryMap.put("map", "meet");
    	queryMap.put("mapid", "MeetResultCount");    	

    	Map<String,Object> selectMap =  commMeetService.searchBaseOne(queryMap, saveMap);
    	long readCnt = (long) selectMap.get("READ_CNT");
    	long totalCnt = (long) selectMap.get("TOTAL_CNT");
    	
    	// 열람자수 조회
    	queryMap.put("map", "meet");
    	queryMap.put("mapid", "MeetResultInfo");
    	
    	if(readCnt == totalCnt) {
        	saveMap.put("MTG_RESULT_TYPE", "Z");
        	
    		UbidcsUtil ubidcsUtil = new UbidcsUtil();
    		
    		String path = ubidcsUtil.getUuidPath( (String) saveMap.get("DOC_ID"), (String) saveMap.get("SYS_CODE"), (String) saveMap.get("BIZ_CODE")) + "/bigimage";
    		File dir = new File(path); 
    		if (dir.isDirectory()) { 
    			for (File file: dir.listFiles())
    			    if (!file.isDirectory())
    			        file.delete();    			
    		}
        	
    	} else {
        	saveMap.put("MTG_RESULT_TYPE", "P");
    	}
    	commMeetService.updateContents(queryMap, saveMap);
    	
    	
		NexacroResult result = new NexacroResult();
		return result;
	}          
    
	/**
	 * 공통 Master/Detail 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveCommonMasterDetailService.do")
   	public NexacroResult saveCommonMasterDetailService(@ParamDataSet(name = "dsMaster", required = false) List<Map<String,Object>> saveMasterList
   													,@ParamDataSet(name = "dsDetail", required = false) List<Map<String,Object>> saveDetailList
   													, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 추가/수정
    	commMeetService.saveMasterDetailContents(queryMap, saveMasterList, saveDetailList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  
    
    /**
	 * 사용자 정보 저장
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/savePasswordInfo.do")
	public NexacroResult savePasswordInfo(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException{
    	
    	NexterUtil NexUtil = new NexterUtil();
 
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
    	
        int size = saveList.size();
        for (int i=0; i<size; i++) {
            Map<String,Object> userMap = saveList.get(i);
            
            String pwd = (String) userMap.get("PASSWORD");
            if(pwd == null) pwd = "";
            if(pwd.equals("")) {
            } else {
            	// PASSWORD 복호화
            	String decryptContents = "";
            	try {
            		decryptContents = NexaUtil.getDectypeValue(request, pwd);
            		userMap.put("PASSWORD", decryptContents);
            	} catch (Exception e) {
            		e.printStackTrace();
            		throw new NexacroException("exceptionName", -999, "msg.keyfail");
            	}            	
            }
        }	    	
    	
    	// 시스템 메시지를 저장한다.
        commMeetService.saveBaseContents(queryMap, saveList, loginUserInfo);
			
		NexacroResult result = new NexacroResult();
		
		return result;
	}      
    
    
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 */
    @RequestMapping(value = "/saveCommonBaseMergeService.do")
	public NexacroResult saveCommonBaseMergeService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 추가/수정
    	commMeetService.saveBaseMergeContents(queryMap, saveList, loginUserInfo);
    	
		NexacroResult result = new NexacroResult();
		return result;
	}      
    
    /**********************************************************게시판 컨텐츠 (파일) ***********************************************************/
    /**
	 * 게시판 파일 삭제
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
     * @throws  
	 */
    @RequestMapping(value = "/deleteCommonBaseFileService.do")
	public NexacroResult deleteCommonBaseFileService(@ParamDataSet(name = "dsList", required = false) List<Map<String,Object>> saveList
										, @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
										, HttpServletRequest request) throws NexacroException, IOException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
  
    	// 첨부파일 삭제
    	commMeetService.deleteFile(queryMap, saveList, loginUserInfo);
    	
    	//서버파일삭제
    	Map<String,Object> boradMap = saveList.get(0);
    	//String savePath    = request.getServletContext().getRealPath("/fileUpload");// this.filePath;
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        //System.out.println(properties.getProperty("uploadPath"));
        String savePath = properties.getProperty("uploadPath");
        
    	String filename    = (String) boradMap.get("SAVE_FILE_NM");

    	//파일명 인코딩
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }
    	
    	File file = new File(savePath + File.separator + filename);
    	file.delete();
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  
    
    /**
	 * 공통 파일 업로드
	 * @param searchMap		: 조회 조건 Dataset
	 * @return result		: 조회 데이터 셋
	 */
    @RequestMapping("/commonFileUploadService.do")
    public NexacroResult commonFileUploadService(@ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
    										, HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
    	//파일업로드
    	Map<String,Object> inMap = null;
    	List<Map<String,Object>> inDs = new ArrayList<Map<String,Object>>();
    	//String path = request.getServletContext().getRealPath("/fileUpload");
    	//String path = "c:\\fileUpload";
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");
        
    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();

    	MultipartFile mfile = null; 
    	String fieldName = ""; 
    	
    	File dir = new File(path); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	
    	String fileId = request.getParameter("FILE_ID"); //
    	if(fileId.equals("")) {
    		fileId = "FILE_"+request.getParameter("BOARD_CD")+getUuid();
    	}
    	
		// 값이 나올때까지 
		while (iter.hasNext()) { 
			fieldName = (String)iter.next();
			
			// 내용을 가져와서 
			mfile = mhsr.getFile(fieldName); 
			String origName; 
			origName = mfile.getOriginalFilename();
			
			// 파일명이 없다면 
			if ("".equals(origName)) {
				continue; 
			} 
			
			// 확장자 
			String ext = origName.substring(origName.lastIndexOf('.')); 
			ext = ext.replace(".", "");
			
			// 파일 명 변경(uuid로 암호화) 
			String saveFileName = getUuid(); 
			
			// 설정한 path에 파일저장 
			File serverFile = new File(path + File.separator + saveFileName ); 
		
			mfile.transferTo(serverFile); 
			
			inMap = new HashMap<>();
			
			inMap.put("FILE_ID"		, fileId);
			inMap.put("OTXT_FILE_NM", origName);
	    	inMap.put("SAVE_FILE_NM", saveFileName);
	    	inMap.put("FILE_SIZE"	, mfile.getSize());
	    	inMap.put("FILE_TYPE"	, ext);
	    	inMap.put("FILE_PATH_NM", serverFile.toString());
	    	
	    	inDs.add(inMap);
		}
		
		NexterUtil NexUtil = new NexterUtil();
		
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
    						
    	//DB에 파일 정보 INSERT					
    	commMeetService.saveFileInsert(queryMap, inDs, loginUserInfo);    	
    	
	    String outds = (String) queryMap.get("outds");
	    if(outds == null) outds = "dsOutput";	    
	    
        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet(outds, inDs);
        
        return nexacroResult;    	
    }
    
    /**
	 * 파일다운로드 후 다운로드된 서버 파일 삭제
	 * @param request		: N/A
	 * @return uuid : 서버에 저장하는 파일명 생성 후 return
	 */	    
	private static String getUuid() { 
		return UUID.randomUUID().toString().replaceAll("-", ""); 
	}
	
	/**
	 * 공통 프로시저 호출
	 * @param searchMap		: 조회할 Dataset
	 * @return result		: 데이터 셋
	 */
	@RequestMapping(value = "/executeProcedureService.do")
	public NexacroResult executeProcedureService(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap
										    , @ParamDataSet(name = "dsMap", required = false) Map<String,Object> queryMap
											, HttpServletRequest request) throws NexacroException, IOException, SQLException{
		
    	NexterUtil NexUtil = new NexterUtil();
    	searchMap = NexUtil.setUserInfoMap(request, searchMap);
    	
    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);    	
    	
    	DataSet ds = commMeetService.executeProcedure(queryMap, searchMap, loginUserInfo);		

	    NexacroResult result = new NexacroResult();
	    if(ds != null) {
	    	result.addDataSet(ds);
	    }
		
		
		return result;
	} 
	
	/**
	 * PDF Snapshot 이미지를 전송. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return string file 정보
	 */			
	@RequestMapping(value = "/searchSnapshot.do")
	public void ubiGetSnapshot(HttpServletRequest request, HttpServletResponse response) throws NexacroException, IOException, ParseException {
		
		try {
			String sysCode = request.getParameter("S");
			String bizCode = request.getParameter("B");
			String docId = request.getParameter("D");
			
			UbidcsUtil ubidcsUtil = new UbidcsUtil();
			String path = ubidcsUtil.getUuidPath( docId, sysCode, bizCode) + "/";	
			
			System.out.println(path + ":" + docId);
		    File imgFile = new File(path + docId + ".png");
		    if(imgFile.exists()) {
			    // 보여주기
			    response.setContentType("application/octet-stream");
			 
				FileInputStream fis = null;
				BufferedOutputStream bos = null;
				
			    fis = new FileInputStream(path + docId + ".png");
			    int size = fis.available();
			    
			    byte[] buf = new byte[size];
			    int readCount = fis.read(buf);

			    response.flushBuffer();
			 
			    bos = new BufferedOutputStream(response.getOutputStream());
			    bos.write(buf, 0, readCount);
			    bos.flush();
		    } else {
				response.getWriter().print("");
		    }	
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	
	
	/**
	 * PDF를 조회,출력한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream PDF stream
	 */	
	@RequestMapping(value = "/searchPDFView.do")
	public void searchPDFView(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		
		String sysCode = request.getParameter("S");
		String bizCode = request.getParameter("B");
		String docId = request.getParameter("D");
		String sign = request.getParameter("M");
		if(sign == null) sign = "";

		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String path = ubidcsUtil.getUuidPath( docId, sysCode, bizCode) + "/";
		
		String filename = docId;
			
		//System.out.println("ubiPDFView :" + uuid + ":" + doctype);
		//String u = request.getParameter("u");
		if(docId == null) docId = "";

    	if(docId.equals("")) {
    		response.getWriter().print("-999|NOT FOUND");
    	} else {
    		try {
    			if(sign.equals("M")) {
    				String signpath =  path + "0/";
    				String filePath =  signpath + docId + ".pdf";
    				File filesign = new File(filePath);
    				if(filesign.exists()) {
    					path = signpath;
    				}
    			}

	    		String filePath =  path + docId + ".pdf";
	    		File file = new File(filePath);
			    if(file.exists()) {
				    // 보여주기
				    response.setContentType("application/pdf");
				    response.setHeader("Content-Description", "JSP Generated Data");
				 
					FileInputStream fis = null;
					BufferedOutputStream bos = null;
					
				    fis = new FileInputStream(file);
				    int size = fis.available();
				    
				    byte[] buf = new byte[size];
				    int readCount = fis.read(buf);
				 
				    response.flushBuffer();
				 
				    bos = new BufferedOutputStream(response.getOutputStream());
				    bos.write(buf, 0, readCount);
				    bos.flush();
			    } else {
					response.getWriter().print("-999|NOT FOUND");
			    }	
    		} catch(Exception e) {
    			response.getWriter().print("-1|" + e.getStackTrace());
    			e.printStackTrace();
    		}
    	}
	} 	
	
	/**
	 * PDF를 조회,출력한다. 
	 * <p>
	 * <b>History:</b>
	 *    작성자, 1.0, 24.3.4 최초작성
	 * </p>
	 *
	 * @author DXTOBE
	 * @version 1.0
	 * 
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return stream PDF stream
	 */	
	@RequestMapping(value = "/searchImageView.do")
	public void searchImageView(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException {
		
		String sysCode = request.getParameter("S");
		String bizCode = request.getParameter("B");
		String docId = request.getParameter("D");
		String userId = request.getParameter("U");
		String page = request.getParameter("PAGE");

		UbidcsUtil ubidcsUtil = new UbidcsUtil();
		String path = ubidcsUtil.getUuidPath( docId, sysCode, bizCode) + "/bigimage/mergedImage.png";
		String userPath = ubidcsUtil.getUuidPath( docId, sysCode, bizCode) + "/bigimage/" + userId + ".png";
		
		System.out.println("searchImageView:" + path + ":" + userPath );
		String filename = docId;
			
		//System.out.println("ubiPDFView :" + uuid + ":" + doctype);
		//String u = request.getParameter("u");
		if(docId == null) docId = "";

    	if(docId.equals("")) {
    		response.getWriter().print("-999|NOT FOUND");
    	} else {
    		try {
    			String strFind = "N";
	    		File file = new File(userPath);
			    if(file.exists()) {
			    	strFind = "Y";
			    } else {
			    	file = new File(path);
			    	if(file.exists()) {
			    		strFind = "Y";
			    	}
			    }	
			    
			    if(strFind.equals("Y")) {
				    // 보여주기
				    response.setContentType("image/png");
				 
					FileInputStream fis = null;
					BufferedOutputStream bos = null;
					
				    fis = new FileInputStream(file);
				    int size = fis.available();
				    
				    byte[] buf = new byte[size];
				    int readCount = fis.read(buf);
				 
				    response.flushBuffer();
				 
				    bos = new BufferedOutputStream(response.getOutputStream());
				    bos.write(buf, 0, readCount);
				    bos.flush();
			    	
			    } else {
					response.getWriter().print("-999|NOT FOUND");
			    }
    		} catch(Exception e) {
    			response.getWriter().print("-1|" + e.getStackTrace());
    			e.printStackTrace();
    		}
    	}
	} 		
		
}
