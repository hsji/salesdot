package com.unisales.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Properties;
import java.util.UUID;

import javax.annotation.PostConstruct;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.encryption.AccessPermission;
import org.apache.pdfbox.pdmodel.encryption.StandardProtectionPolicy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.ibatis.common.resources.Resources;
import com.nexacro.java.xapi.data.ColumnHeader;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataTypes;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.PlatformType;

@Controller
public class FileUpDownload {
	private static final Logger log = LoggerFactory.getLogger(FileUpDownload.class);
	
	//특정 property로 관리되는 경우 아래와 같이 가져온다.
	//첨부파일 경로를 custom.properties에서 읽어 온다.
	@Value("${file.upload.path}")
	private String filePath2;
	
	private String filePath = "d:\\upload";
	
	
    /**
	 * 파일다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	
    @RequestMapping("/fileDownload.do")
    public NexacroFileResult fileDown(HttpServletRequest request, HttpServletResponse response) throws Exception {

    	//String savePath =request.getServletContext().getRealPath("/fileUpload");// this.filePath;
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String savePath = properties.getProperty("uploadPath");
    	String filename = request.getParameter("saveFileName");
    	String orgFileName = request.getParameter("orgFileName");
    	
    	log.debug("========= savePath :: " + savePath);
    	log.debug("========= filename :: " + filename);
    	log.debug("========= orgFileName :: " + orgFileName);

    	//파일명 인코딩
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }
    	
    	File file = new File(savePath + File.separator + filename);
    	
        if(file != null && file.exists()) {
        	log.debug("     =======================있어  ");
 
        } else {
        	log.debug("     =======================없어  ");
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }		
   	
    	NexacroFileResult fileResult = new NexacroFileResult(file);
    	fileResult.setOriginalName(orgFileName);
    	
    	return fileResult;
    }    	
    /**
	 * 파일다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	
    @RequestMapping("/fileDownload2.do")
    public NexacroFileResult fileDown2(HttpServletRequest request, HttpServletResponse response) throws Exception {

    	
		String subFilePath = (String)request.getParameter("filePath");
		if(subFilePath == null || ("").equals(subFilePath)){
			subFilePath = "";
		}else{
			subFilePath = File.separator + subFilePath;
		}    	
    	
    	String savePath = this.filePath + subFilePath;
    	String filename = request.getParameter("saveFileName");
    	String orgFileName = request.getParameter("orgFileName");

    	System.out.println("savePath:" + savePath);
    	System.out.println("filename:" + filename);
    	System.out.println("orgFileName:" + orgFileName);
    	
    	//파일명 인코딩
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }
        //orgFileName = new String(orgFileName.getBytes("iso8859-1"), characterEncoding);    	
    	
    	File file = new File(savePath + File.separator + filename);
    	
    	NexacroFileResult fileResult = new NexacroFileResult(file);
    	log.debug("orgFileName:" + orgFileName);
    	fileResult.setOriginalName(orgFileName);
    	
    	return fileResult;
    }    

    /**
	 * 이미지 파일다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	    
    @RequestMapping("/fileDownImage2.do")
    public NexacroFileResult fileDownImage2(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	
	   String sFileUrlPath = (String)request.getParameter("fileUrlPath");
    	
	   String newFilename  = (String)request.getParameter("newFileName");
	   String orgFileName  = (String)request.getParameter("orgFileName");
    	
	   //파일명 인코딩
	   String characterEncoding = request.getCharacterEncoding();
       if (characterEncoding == null) 
           characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        
       orgFileName = new String(orgFileName.getBytes("iso8859-1"), characterEncoding);
        
       NexacroFileResult fileResult = null;
    	
       try
       {
    	   	URL 			  url  = new URL(sFileUrlPath);            
    	   	HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    	   	
    	   	// System.getProperty ( "user.dir" ) -> 현재 작업디렉토리를 가져온다.
    	   	File        	  file = new File(System.getProperty ( "user.dir" )+File.separator+orgFileName); //이미지 저장위치
    	   	
            InputStream 	 in    = (InputStream) conn.getInputStream();
            FileOutputStream out   = new FileOutputStream(file);
            
            int k;
            while ((k =in.read()) != -1) 
            {
                out.write(k);
            }           
            
            fileResult = new NexacroFileResult(file);
        	fileResult.setOriginalName(newFilename);
        	
            in.close();
            out.close();            
            
        }
        catch(Exception e) 
        {   
            e.printStackTrace();        
        }
    	
    	return fileResult;
    }  

    /**
	 * 파일Upload
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return nexacroResult	: 데이터 셋
	 */	    
    @RequestMapping("/fileUpload2.do")
    public NexacroResult fileUpload2(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    	
    	String subFilePath = (String)request.getParameter("filePath");
    	String saveSubFilePath = subFilePath;
    	if(subFilePath == null || ("").equals(subFilePath)){
    		subFilePath = "";
    	}else{
    		subFilePath = File.separator + subFilePath;
    	}
    	
    	DataSet dsFiles = new DataSet("dsOutput");
    	dsFiles.addColumn(new ColumnHeader("ATTC_FILE_NM", DataTypes.STRING));
    	dsFiles.addColumn(new ColumnHeader("SERV_ATTC_FILE_NM", DataTypes.STRING));
    	dsFiles.addColumn(new ColumnHeader("ATTC_FILE_SIZE", DataTypes.STRING));
    	dsFiles.addColumn(new ColumnHeader("ATTC_FILE_TYPE", DataTypes.STRING));
    	dsFiles.addColumn(new ColumnHeader("ATTC_FILE_PATH", DataTypes.STRING));
    	
    	String path = this.filePath + subFilePath;
    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();

    	MultipartFile mfile = null; 
    	String fieldName = ""; 
    	
    	File dir = new File(path); 
    	if (!dir.isDirectory()) { 
    		dir.mkdirs(); 
    	}
    	    	
		// 값이 나올때까지 
		while (iter.hasNext()) { 
			fieldName = (String)iter.next();
			
			// 내용을 가져와서 
			mfile = mhsr.getFile(fieldName); 
			String origName; 
			//origName = new String(mfile.getOriginalFilename().getBytes("8859_1"), "UTF-8");
			origName = mfile.getOriginalFilename();

			// 파일명이 없다면 
			if ("".equals(origName)) {
				continue; 
			} 
			// 파일 명 변경(uuid로 암호화) 
			String ext = origName.substring(origName.lastIndexOf('.')); 
			ext = ext.replace(".", "");
			
			// 확장자 
			String saveFileName = getUuid(); 
			// 설정한 path에 파일저장 
			File serverFile = new File(path + File.separator + saveFileName); 
			mfile.transferTo(serverFile); 

			 int row = dsFiles.newRow();
			 dsFiles.set(row, "ATTC_FILE_NM", origName);
			 dsFiles.set(row, "SERV_ATTC_FILE_NM", saveFileName);
			 dsFiles.set(row, "ATTC_FILE_SIZE", mfile.getSize());
			 dsFiles.set(row, "ATTC_FILE_TYPE", ext);
			 dsFiles.set(row, "ATTC_FILE_PATH", saveSubFilePath);
		}

        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet(dsFiles);

        return nexacroResult;    	
    }

    /**
	 * 파일 삭제 처리
	 * @param dsInput		: 삭제할 파일 목록이 있는 Dataset
	 * @return nexacroResult: 데이터 셋
	 */	        
	@RequestMapping("/fileDeleteDS2.do")
    public NexacroResult fileDeleteDS2(@ParamDataSet(name="dsDelFileList") List<Map<String, Object>> dsInput) throws Exception {
    	DataSet dsResult = new DataSet("dsDelFileResult");
    	dsResult.addColumn(new ColumnHeader("DEL_ORG_FILE_NAME", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("DEL_SVR_FILE_NAME", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_CODE", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_MSG", DataTypes.STRING));

    	int nRow = 0;
    	if(dsInput.isEmpty()) {
			nRow = dsResult.newRow();
   		
			dsResult.set(nRow, "ERR_CODE", "300");
			dsResult.set(nRow, "ERR_MSG", "전달된 파일 정보에 데이터가 없습니다.");
			
    		NexacroResult nexacroResult = new NexacroResult();
    		nexacroResult.addDataSet(dsResult);
    		return nexacroResult;		
		}
		
		int nCnt = dsInput.size();

		// 사용할 변수 선언
		String sFilePath = "";
		String sSvrFileName = "";
		String sOrgFileName = "";
		String sFullFilePath = "";
		String sFileId = "";
		
		int i = 0;
		
		for(i = 0; i < nCnt; i++) {
			sFilePath = dsInput.get(i).get("ATTC_FILE_PATH").toString();
			sSvrFileName = dsInput.get(i).get("SERV_ATTC_FILE_NM").toString();
			sOrgFileName = dsInput.get(i).get("ATTC_FILE_NM").toString();
			
			// 삭제할 할 파일 명 처리(Full Directory 처리)
			sFullFilePath = this.filePath + File.separator + sFilePath + File.separator + sSvrFileName;
			nRow = dsResult.newRow();
			
			dsResult.set(nRow, "DEL_ORG_FILE_NAME", sOrgFileName);
			dsResult.set(nRow, "DEL_SVR_FILE_NAME", sSvrFileName);

			try {
				System.out.println("path ==> " + sFullFilePath);
				
				File delFile = new File(sFullFilePath); // 경로
				
				if(delFile.exists()) {
					if(delFile.delete()) {
						System.out.println(sFullFilePath + " 파일 삭제를 성공했습니다.");
						dsResult.set(nRow, "ERR_CODE", "0");
						dsResult.set(nRow, "ERR_MSG", sOrgFileName + " 파일 삭제를 성공했습니다.");
					}
					else {
						System.out.println(sFullFilePath + " 파일 삭제에 실패했습니다.");
						dsResult.set(nRow, "ERR_CODE", "100");
						dsResult.set(nRow, "ERR_MSG", sOrgFileName + " 파일 삭제에 실패했습니다.");
					}
				}
				else {
					System.out.println(sFullFilePath + " 파일이 존재하지 않습니다.");
					dsResult.set(nRow, "ERR_CODE", "200");
					dsResult.set(nRow, "ERR_MSG", sOrgFileName + " 파일이 존재하지 않습니다.");
				}
			
			}
			catch (Exception e) {
				System.out.println(e);
				dsResult.set(nRow, "ERR_CODE", "-1");
				dsResult.set(nRow, "ERR_MSG", "System Error가 발생했습니다.");
			}
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(dsResult);
		return nexacroResult;
    }

    /**
	 * 단일 파일 삭제 처리
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return nexacroResult: 데이터 셋
	 */	
	@RequestMapping("/fileDeleteSingle2.do")
    public NexacroResult fileDeleteSingle2(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String subFilePath = (String)request.getParameter("filePath");
		if(subFilePath == null || ("").equals(subFilePath)){
			subFilePath = "";
		}else{
			subFilePath =  subFilePath + "/";
		}    	
    	
    	String savePath = this.filePath + subFilePath;
    	String filename = request.getParameter("saveFileName");
    	String orgFileName = request.getParameter("orgFileName");
    	
    	//파일명 인코딩
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }		
		
    	DataSet dsResult = new DataSet("dsDelFileResult");
    	dsResult.addColumn(new ColumnHeader("DEL_ORG_FILE_NAME", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("DEL_SVR_FILE_NAME", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_CODE", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_MSG", DataTypes.STRING));

    	int nRow = 0;

    	String sFullFilePath = "";
    	
        sFullFilePath = savePath + filename;
		
		nRow = dsResult.newRow();
			
		dsResult.set(nRow, "DEL_ORG_FILE_NAME", orgFileName);
		dsResult.set(nRow, "DEL_SVR_FILE_NAME", filename);

		try {
			System.out.println("path ==> " + sFullFilePath);
			
			File delFile = new File(sFullFilePath); // 경로
				
			if(delFile.exists()) {
				if(delFile.delete()) {
					System.out.println(sFullFilePath + " 파일 삭제를 성공했습니다.");
					dsResult.set(nRow, "ERR_CODE", "0");
					dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일 삭제를 성공했습니다.");
				}
				else {
					System.out.println(sFullFilePath + " 파일 삭제에 실패했습니다.");
					dsResult.set(nRow, "ERR_CODE", "100");
					dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일 삭제에 실패했습니다.");
				}
			}
			else {
				System.out.println(sFullFilePath + " 파일이 존재하지 않습니다.");
				dsResult.set(nRow, "ERR_CODE", "200");
				dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일이 존재하지 않습니다.");
			}
		
		}
		catch (Exception e) {
			System.out.println(e);
			dsResult.set(nRow, "ERR_CODE", "-1");
			dsResult.set(nRow, "ERR_MSG", "System Error가 발생했습니다.");
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(dsResult);
		return nexacroResult;
    }

    /**
	 * BLOB File Process (서버에서 BLOB 파일로 만들어서 return) - HTML5 시 (먼저 파일이 업로드되어 있어야 함)
	 * @param dsInput		: BLOB 변환할 파일정보 Dataset
	 * @return nexacroResult: 데이터 셋
	 */	
	@RequestMapping("/BlobFileProc2.do")
    public NexacroResult BlobFileProc2(@ParamDataSet(name="dsFileInput") List<Map<String, Object>> dsInput) throws Exception {
    	DataSet dsResult = new DataSet("dsResult");
    	dsResult.addColumn(new ColumnHeader("FILE_BLOB", DataTypes.BLOB));
    	dsResult.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("FILE_NM", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_CODE", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_MSG", DataTypes.STRING));

    	int nRow = 0;
    	if(dsInput.isEmpty()) {
			nRow = dsResult.newRow();
   		
			dsResult.set(nRow, "ERR_CODE", "300");
			dsResult.set(nRow, "ERR_MSG", "전달된 파일 정보에 데이터가 없습니다.");
			
    		NexacroResult nexacroResult = new NexacroResult();
    		nexacroResult.addDataSet(dsResult);
    		return nexacroResult;		
		}
		
		int nCnt = dsInput.size();

		// 사용할 변수 선언
		String sFilePath = "";
		String sSvrFileName = "";
		String sOrgFileName = "";
		String sFullFilePath = "";
		
		int i = 0;
		
		for(i = 0; i < nCnt; i++) {
			sFilePath = dsInput.get(i).get("FILEPATH").toString();
			sSvrFileName = dsInput.get(i).get("SERVER_FILENAME").toString();
			sOrgFileName = dsInput.get(i).get("ORG_FILENAME").toString();
			
			// 삭제할 할 파일 명 처리(Full Directory 처리)
			sFullFilePath = this.filePath + sFilePath + "/" + sSvrFileName;
			nRow = dsResult.newRow();
			
			File file = new File(sFullFilePath);
			FileInputStream fileInputStream = new FileInputStream(file);
			byte[] b = new byte[(int)file.length()];
			
			try {
				fileInputStream.read(b);
			}
			catch (Exception e) {
				System.out.println(e);
				dsResult.set(nRow, "ERR_CODE", "-2");
				dsResult.set(nRow, "ERR_MSG", "Blob 파일을 읽는데 실패했습니다.");
			}
			
			fileInputStream.close();
			
			dsResult.set(i, "FILE_BLOB", b);
			dsResult.set(i, "FILE_SIZE", b.length);
			dsResult.set(i, "FILE_NM", sOrgFileName);
			
			try {
				System.out.println("path ==> " + sFullFilePath);
				
				File delFile = new File(sFullFilePath); // 경로
				
				if(delFile.exists()) {
					if(delFile.delete()) {
						System.out.println(sFullFilePath + " 파일을 읽는데 성공했습니다.");
						dsResult.set(nRow, "ERR_CODE", "0");
						dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일을 읽는데 성공했습니다.");
					}
					else {
						System.out.println(sFullFilePath + " 파일 삭제에 실패했습니다.(Blob 읽기 성공)");
						dsResult.set(nRow, "ERR_CODE", "100");
						dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일 삭제에 실패했습니다(Blob 읽기 성공).");
					}
				}
				else {
					System.out.println(sFullFilePath + " 파일이 존재하지 않습니다.(Blob 읽기 성공)");
					dsResult.set(nRow, "ERR_CODE", "200");
					dsResult.set(nRow, "ERR_MSG", sFullFilePath + " 파일이 존재하지 않습니다.(Blob 읽기 성공)");
				}
			
			}
			catch (Exception e) {
				System.out.println(e);
				dsResult.set(nRow, "ERR_CODE", "-1");
				dsResult.set(nRow, "ERR_MSG", "System Error가 발생했습니다.");
			}
		}
		
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(dsResult);
		return nexacroResult;
    }

    /**
	 * BLOB 데이터를 일반 파일로 다운로드 - HTML5 시
	 * @param dsInput		: BLOB 데이터 포함 Dataset
	 * @return nexacroResult: 데이터 셋
	 */	
    @RequestMapping("/BlobImageDown2.do")
    public NexacroResult BlobImageDown2(@ParamDataSet(name="dsFileInput") List<Map<String, Object>> dsInput) throws IOException {
		// 사용할 변수 선언
		String sFilePath = "";
		String sFullFilePath = "";
		String sFileBlob = "";
		int nRow = 0;

		// 전달할 데이터 셋
    	DataSet dsResult = new DataSet("dsResult");
    	dsResult.addColumn(new ColumnHeader("FILE_NM", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("FILE_PATH", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_CODE", DataTypes.STRING));
    	dsResult.addColumn(new ColumnHeader("ERR_MSG", DataTypes.STRING));
    	
    	if(dsInput.isEmpty()) {
			nRow = dsResult.newRow();
   		
			dsResult.set(nRow, "ERR_CODE", "300");
			dsResult.set(nRow, "ERR_MSG", "전달된 파일 정보에 데이터가 없습니다.");
			
    		NexacroResult nexacroResult = new NexacroResult();
    		nexacroResult.addDataSet(dsResult);
    		return nexacroResult;		
		}
    	
		sFilePath = dsInput.get(0).get("TMP_FILE_PATH").toString();
		sFileBlob = dsInput.get(0).get("FILE_BLOB").toString();

		// 확장자 
		String sSaveFileName = getUuid(); 
		// 삭제할 할 파일 명 처리(Full Directory 처리)
		sFullFilePath = this.filePath + sFilePath + "/";
		
	    FileOutputStream fos = null;

	    File fileDir = new File(sFullFilePath);
	    if (!fileDir.exists()) {
	        fileDir.mkdirs();
	    }		

	    File destFile = new File(sFullFilePath + sSaveFileName);
	    
	    byte[] buff = sFileBlob.getBytes();
	    String toStr = new String(buff);
	    byte[] b64dec = base64Dec(toStr);
		nRow = dsResult.newRow();
		
	    try {
	        fos = new FileOutputStream(destFile);
	        fos.write(b64dec);
	        fos.close();
	        
			dsResult.set(nRow, "FILE_NM", sSaveFileName);
			dsResult.set(nRow, "FILE_PATH", sFilePath);
			dsResult.set(nRow, "ERR_CODE", "0");
			dsResult.set(nRow, "ERR_MSG", "success");
			
		} catch (IOException e) {
	        System.out.println("Exception position : BlobImageDown");
			dsResult.set(nRow, "ERR_CODE", "-1");
			dsResult.set(nRow, "ERR_MSG", "이미지 파일 생성 중 에러가 발생했습니다.");	        
	    }
	    
		NexacroResult nexacroResult = new NexacroResult();
		nexacroResult.addDataSet(dsResult);
		
		return nexacroResult;
    }  

    /**
	 * 파일다운로드 후 다운로드된 서버 파일 삭제
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return nexacroResult: 데이터 셋
	 */	    
    @RequestMapping("/fileDownWithDel2.do")
    public void doDownloadWithDelete2(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	
    	String subFilePath = (String)request.getParameter("filePath");
		if(subFilePath == null || ("").equals(subFilePath)){
			subFilePath = "";
		}else{
			subFilePath =  subFilePath + "/";
		}    	
    	
    	String savePath = this.filePath + subFilePath;
    	String filename = request.getParameter("saveFileName");
    	String orgFileName = request.getParameter("orgFileName");

        // 파일 이름 체크
    	File file = new File(savePath + filename);

        byte[] fileBytes = new byte[(int) file.length()];
        FileInputStream in = null;

        try {
            in = new FileInputStream(file);
            in.read(fileBytes);
        } finally {
            if (in != null)
                in.close();
        }

        OutputStream out = null;

        try {
            response.setHeader("Content-Disposition",  "attachment; filename="
                    + orgFileName + ";");
            response.setHeader("Content-Length", "" + file.length());

            out = response.getOutputStream();
            out.write(fileBytes);
            out.flush();
        } finally {
            if (out != null){
                out.close();
            }
            Thread.sleep(2000);
            file.delete();
        }
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
	 * Base64 문자열 Decoding
	 * @param  sDec		: decoding 대상 문자열
	 * @return decoding return
	 */	    
	private static byte[] base64Dec(String sDec) {
	    return Base64.decodeBase64(sDec);
	}
	
    /**
	 * PDF 다운로드
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return fileResult	: 데이터 셋
	 */	
    @RequestMapping("/pdfSalaryDownload.do")
    public NexacroFileResult pdfSalaryDownload(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	
    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("pdf.properties");
        properties.load(reader);
    	
	    String path = properties.getProperty("pdfDownloadPath");
	    
    	String html = request.getParameter("html");
    	String fname = request.getParameter("fname");
    	String dpath = request.getParameter("dpath");
    	String enc = request.getParameter("enc");
    	String resno = request.getParameter("resno");
    	
    	
    	dpath = "SALEA";
    	
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }    	
    	
    	/*
    	String html 	= dsInput.get("html");		// html
    	String fname 	= dsInput.get("fname");		// file name
    	String dpath 	= dsInput.get("dpath");		// directory
    	String enc	 	= dsInput.get("enc");		// enc y/n
    	String resno	= dsInput.get("resno");		// 주번
    	*/
    	
    	if(resno == null) resno = "1234";  	
    	if(enc == null) enc = "N";
 	
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
    	
    	//String contextRealPath = request.getSession().getServletContext().getRealPath("/");
    	//String PATH = "pdfFiles";
    	//String savePath = contextRealPath + PATH;

    	String saveFileName = fname; 
        // pdf 파일이 저장될 경로 ( Windows 기준 )
        itextPdfDto.setPdfFilePath(dirpath);
        itextPdfDto.setPdfFileName(saveFileName);
        
        PDFUtil pdfUtil = new PDFUtil();
        // ======================= PDF 존재 유무 체크 =======================
        File file = pdfUtil.checkPDF(itextPdfDto, html);
        // ===============================================================
        
		if(enc.equals("Y")) {
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
		
		/*
        String ORIG = path + "\\" + saveFileName + ".pdf";
        String OUTPUT_FOLDER = path + "\\pdfenc\\";
        
        byte[] USERPASS = "user".getBytes();
        byte[] OWNERPASS = "owner".getBytes();
        
        //File file = new File(filePath);
        //PDDocument pdDocument = new PDDocument();
        PDDocument pdDocument = Loader.loadPDF(file);
        AccessPermission accessPermission = new AccessPermission();
        StandardProtectionPolicy standardProtectionPolicy = new StandardProtectionPolicy("test", "test", accessPermission); // param : ownerpassword, userpassword, AccessPermission
        standardProtectionPolicy.setEncryptionKeyLength(128); // 암호화 키길이(40, 128, 256) 이외 값 exception
        standardProtectionPolicy.setPermissions(accessPermission);
        pdDocument.protect(standardProtectionPolicy);
        pdDocument.save(OUTPUT_FOLDER + saveFileName);
        pdDocument.close();
        */
		
        
/*
        PdfReader pdfReader = new PdfReader(ORIG);
        WriterProperties writerProperties = new WriterProperties();
        writerProperties.setStandardEncryption(USERPASS, OWNERPASS, EncryptionConstants.ALLOW_PRINTING, EncryptionConstants.ENCRYPTION_AES_128);
        PdfWriter pdfWriter = new PdfWriter(new FileOutputStream(OUTPUT_FOLDER + saveFileName), writerProperties);
        PdfDocument pdfDocument = new PdfDocument(pdfReader, pdfWriter);
        pdfDocument.close();
*/		
        // ===============================================================
        // 파일 다운로드를 위한 header 설정
		NexacroFileResult fileResult = null;
		File encFile = null;
		if(enc.equals("Y")) {
			encFile = new File(direncpath + saveFileName + ".pdf");
	    	fileResult = new NexacroFileResult(encFile);
	    	
		} else {
			fileResult = new NexacroFileResult(file);
		}
 		
    	fileResult.setOriginalName(saveFileName + ".pdf");
    	
    	return fileResult;
    	
        // ===============================================================
		
		
        // 파일 다운로드
		/*
		 *
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename="+itextPdfDto.getPdfFileName()+";");
        response.setStatus(HttpServletResponse.SC_OK);
		response.setContentLength((int) file.length());

		 
        BufferedInputStream in = null;
        BufferedOutputStream out = null;
        ServletOutputStream ostream = response.getOutputStream(); 

        // PDF 파일을 버퍼에 담은 후 다운로드
        try{
        	if(enc.equals("Y")) {
        		in = new BufferedInputStream(new FileInputStream(encFile));
        	} else {
        		in = new BufferedInputStream(new FileInputStream(file));
        	}
            out = new BufferedOutputStream(response.getOutputStream());
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            byte[] buffer = new byte[4096];
            int read = 0;
            while ((read = in.read(buffer)) != -1) {
            	ostream.write(buffer, 0, read);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                in.close();
                ostream.flush(); 
                //Objects.requireNonNull(out).flush();
                out.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            if(enc.equals("Y")) {
            	encFile.delete();
            	file.delete();
            } else {
            	file.delete();
            }
        }
        
		//NexacroResult result = new NexacroResult();
		
		//return result;		
        */
    }      
    
    
    /**
	 * 파일 삭제 처리
	 * @param dsInput		: 삭제할 파일 목록이 있는 Dataset
	 * @return nexacroResult: 데이터 셋
	 */	        
	@RequestMapping("/fileDeleteSalaryPDF.do")
    public NexacroResult fileDeleteSalaryPDF(HttpServletRequest request) throws Exception {

    	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("pdf.properties");
        properties.load(reader);
    	
	    String path = properties.getProperty("pdfDownloadPath");
    	String rootPath = path + "PDF";
    	
    	File folder = new File(rootPath);
    	try {
    	    while(folder.exists()) {
	    		File[] folder_list = folder.listFiles(); //파일리스트 얻어오기
	    				
	    		for (int j = 0; j < folder_list.length; j++) {
	    			folder_list[j].delete(); //파일 삭제 
	    		}
	    				
	    		if(folder_list.length == 0 && folder.isDirectory()){ 
	    			folder.delete(); //대상폴더 삭제
	    		}
            }
    	 } catch (Exception e) {
    		e.getStackTrace();
    	}
    	
		NexacroResult nexacroResult = new NexacroResult();
		return nexacroResult;
    }    
    
    /**
	 * 파일Upload
	 * @param request		: Http Request
	 * @param response		: Http response
	 * @return nexacroResult	: 데이터 셋
	 */	    
    @RequestMapping("/ckEditorUpload.do")
    public void ckEditorUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    
    	String contextRealPath = request.getSession().getServletContext().getRealPath("/");
    	String PATH = "ckimage";
    	String savePath = contextRealPath + PATH;
    	
    	String scheme = request.getScheme();
    	String serverName = request.getServerName();
    	int serverPort = request.getServerPort();    	
    	String fullurl = scheme + "://" + serverName + ":" + serverPort + "/" + PATH + "/";
    	
    	System.out.println("########savePath##############:" + savePath);
    	System.out.println("servlet path= " + request.getServletPath());
    	System.out.println("request URL= " + request.getRequestURL());
    	System.out.println("request URI= " + request.getRequestURI());    	
    	System.out.println("fullurl= " + fullurl);
    	
    	StringBuffer returnData = new StringBuffer("");
    	returnData.setLength(0);
    	returnData.delete(0, returnData.length());    	

    	try {
	    	String path = savePath;
	    	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
	    	Iterator<String> iter = mhsr.getFileNames();
	
	    	MultipartFile mfile = null; 
	    	String fieldName = ""; 
	    	
	    	File dir = new File(path); 
	    	if (!dir.isDirectory()) { 
	    		dir.mkdirs(); 
	    	}
	    	    	
			// 값이 나올때까지 
			while (iter.hasNext()) { 
				fieldName = (String)iter.next();
				
				// 내용을 가져와서 
				mfile = mhsr.getFile(fieldName); 
				String origName; 
				origName = mfile.getOriginalFilename();
	
				System.out.println(">>>>>>>>>>>" + origName);
				// 파일명이 없다면 
				if ("".equals(origName)) {
					continue; 
				} 
				// 파일 명 변경(uuid로 암호화) 
				String ext = origName.substring(origName.lastIndexOf('.')); 
				ext = ext.replace(".", "");
				
				// 확장자 
				String saveFileName = getUuid() + "." + ext; 
				String serverUrl = path + File.separator + saveFileName;
				String localUrl = fullurl + saveFileName;
				// 설정한 path에 파일저장 
				File serverFile = new File(serverUrl); 
				mfile.transferTo(serverFile); 
				
				returnData.append("{");
				returnData.append(" \"message\" : ").append(" \"SUCCESS\",");
				returnData.append(" \"uploaded\" : ").append(" 1,");
				returnData.append(" \"fileName\" : ").append(" \"").append(saveFileName).append("\", ");
				returnData.append(" \"url\" : ").append(" \"").append(localUrl).append("\" ");
				returnData.append("}");				
			}
		} catch (Exception e) {
			System.out.println(">>>>>>>>>>>" + e.getMessage());
			returnData.append("{");
			returnData.append(" \"uploaded\" : ").append(" 0,");
			returnData.append(" \"error\" : { ").append(" \"message\" : \"").append(e.getMessage()).append("\"} ");
			returnData.append("}");
		}
		response.setContentType("application/json"); 
		response.setHeader("access-control-allow-credentials","true" ); 
		response.setHeader("access-control-allow-origin","*" ); 
		
		PrintWriter writer = response.getWriter(); 
		writer.println(returnData.toString());  
		writer.flush();
		writer.close();
    }        
}
