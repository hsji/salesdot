package com.unisales.sched;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.scheduling.annotation.Scheduled;

import com.ibatis.common.resources.Resources;


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

@Component
public class scheduller {
	private Logger log = LoggerFactory.getLogger(scheduller.class);

	@Scheduled(cron = "1 1 9 * * *")
    public void autoUpdate() throws IOException
    {
		System.out.println("*** DELETE DIRECTORY ***");
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
    }
    
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
    
        
}
