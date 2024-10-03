package com.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.OncePerRequestFilter;

public class CORSFilter extends OncePerRequestFilter
{
	private static final Logger LOG = LoggerFactory.getLogger(CORSFilter.class);
    
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException 
	{
		// 1개의 도메인만 허용 여부	
		//response.addHeader("Access-Control-Allow-Credentials", "true");
		//response.addHeader("Access-Control-Allow-Origin",      "http://localhost:8017");
		
		// 모든 도메인 허용
		response.addHeader("Access-Control-Allow-Origin",      "*");
		
        response.addHeader("Access-Control-Allow-Methods",     "GET, POST, PUT, DELETE");
        response.addHeader("Access-Control-Allow-Headers",     "cache-control,content-type,expires,if-modified-since,pragma,x-requested-with");
        response.addHeader("Access-Control-Max-Age",           "1800");
            
        filterChain.doFilter(request, response);
	}
}