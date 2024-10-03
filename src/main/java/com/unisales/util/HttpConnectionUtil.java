package com.unisales.util;

/**
 * 
 * @author 
 *
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletInputStream;

import com.nexacro.java.xapi.tx.PlatformRequest;
import com.unisales.util.common.RereadableRequestWrapper;

public class HttpConnectionUtil {

	 static String m_cookies = ""; 
	 static boolean m_session = false;  
    /**
     * @param pURL : 요청 URL 
     * @param pList : 파라미터 객체 (HashMap<String,String>)
     *
     * Created by 닢향
     * http://niphyang.tistory.com
     */
    public static String postRequest(String pURL, RereadableRequestWrapper rereadableRequestWrapper) {

        String myResult = "";

        try {
        	String baseUrl = "http://next.tobesoft.com/";
            //   URL 설정하고 접속하기 
            URL url = new URL(baseUrl + pURL); // URL 설정 

            HttpURLConnection http = (HttpURLConnection) url.openConnection(); // 접속 
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
            // 서버에게 웹에서 <Form>으로 값이 넘어온 것과 같은 방식으로 처리하라는 걸 알려준다 
            http.setRequestProperty("content-type", "text/xml"/*"application/x-www-form-urlencoded"*/);
            if(m_session == true) {
            	http.setRequestProperty("Cookie", m_cookies);
            }

            //saveCookie(http);
            //-------------------------- 
            //   서버로 값 전송 
            //-------------------------- 
            StringBuilder stringBuilder = new StringBuilder();
            
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(rereadableRequestWrapper.getInputStream()));
            char[] charBuffer = new char[128];
            int bytesRead = -1;
            while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                stringBuilder.append(charBuffer, 0, bytesRead);
            }
            OutputStreamWriter outStream = new OutputStreamWriter(http.getOutputStream(), "UTF-8");
            PrintWriter writer = new PrintWriter(outStream);
            writer.write(stringBuilder.toString());
            writer.flush();
            saveCookie(http);
            //-------------------------- 
            //   서버에서 전송받기 
            //-------------------------- 
            InputStreamReader tmp = new InputStreamReader(http.getInputStream(), "UTF-8");
            BufferedReader reader = new BufferedReader(tmp);
            StringBuilder builder = new StringBuilder();
            
            String str;
            while ((str = reader.readLine()) != null) {
                builder.append(str);
            }
            myResult = builder.toString();
            
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("postRequest====" + myResult);
        return myResult;
    }
 
    
    public static void saveCookie( HttpURLConnection conn)
    {   
    	if(m_session == true) return;
        Map<String, List<String>> imap = conn.getHeaderFields( ) ;
        if( imap.containsKey( "Set-Cookie" ) )
        {
        	List<String> lString = imap.get( "Set-Cookie" ) ;
		      for( int i = 0 ; i < lString.size() ; i++ ) {
		       m_cookies += lString.get( i ) ;
		      }
		      System.out.println("m_cookies:" + m_cookies);
            m_session = true ;
        } else {
         m_session = false ;
        }
    }    

}
