<%@page import="java.io.BufferedOutputStream"%>
<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.io.BufferedInputStream"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="javax.servlet.ServletOutputStream"%><%@ 
page import="javax.servlet.http.HttpServletRequest"%><%@ 
page import="javax.servlet.http.HttpServletResponse"%><%@ 
page trimDirectiveWhitespaces="true" %><%    
String contextRealPath = request.getSession().getServletContext().getRealPath("/");



String name = request.getParameter("file");
String path = request.getParameter("path");



String filename = java.net.URLDecoder.decode(name,"utf-8");

String savePath = "E:/PROJECT/NEXTp/ROOT/FILE/NEXTp/Certificate";

byte[] buffer = new byte[1024];

BufferedOutputStream out_stream = new BufferedOutputStream(response.getOutputStream()); 
BufferedInputStream in_stream = null;

int bufferSize = out.getBufferSize(); 

  File fis = new File(savePath + "/" + filename);
 
  if(fis.exists()){
	try{
		response.setContentType("utf-8");
		response.setContentType("application/octet;charset=utf-8");
		response.setHeader("Accept-Ranges", "bytes");		
		response.setHeader("Content-Disposition", "attachment;filename=" + java.net.URLEncoder.encode(filename,"UTF8"));
  
		out.clear();
		out = pageContext.pushBody();		 
		
		in_stream = new BufferedInputStream(new FileInputStream(fis));

		int n = 0;
		while ((n = in_stream.read(buffer, 0, 1024)) != -1) {
			out_stream.write(buffer, 0, n);
		}// while
	
		int remainSize = out.getRemaining();
		int usedSize = bufferSize - remainSize;			
			
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		if (in_stream != null) {
			try {
				in_stream.close();
			} catch (Exception e) {}
		}
		if (out_stream != null) {
			try {
				out_stream.close();
			} catch (Exception e) {}
		}
	}
}else{
		response.sendRedirect("unknownfile");
}
%>