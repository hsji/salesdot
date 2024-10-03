package com.unisales.util.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.unisales.util.UserInfo;

@Component
public class UserInfoInterceptor extends HandlerInterceptorAdapter {
	private final Logger logger = LoggerFactory.getLogger(UserInfoInterceptor.class);
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
		// 사용자 정보를 신규로 생성
		UserInfo userInfo = new UserInfo();
		
		// IP Address를 구한 후 Session 정보에 저장한다.
		userInfo.setStrUserIPAddress(getRealIp(request));
		request.getSession().setAttribute("userInfo", userInfo);
		
		// 세션 유지시간 설정(초) *설정시간 우선순위 (.java > 프로젝트 web.xml > 톰캣서버 web.xml)
		//request.getSession().setMaxInactiveInterval(10);	//세션타임 설정하지 않음

		return super.preHandle(request, response, handler);
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		super.postHandle(request, response, handler, modelAndView);
	}
	
	/**
	 * 접속한 Client IP Address를 가져온다.
	 *
     * @param HttpServletRequest
     * @return 사용자 IP
     * @throws    
	 */
	private String getRealIp(HttpServletRequest request) {
		 
        String ip = request.getHeader("X-Forwarded-For");
 
        logger.info(">>>> X-FORWARDED-FOR : " + ip);
 
        if (ip == null) {
            ip = request.getHeader("Proxy-Client-IP");
            logger.info(">>>> Proxy-Client-IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("WL-Proxy-Client-IP"); // 웹로직
            logger.info(">>>> WL-Proxy-Client-IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_CLIENT_IP");
            logger.info(">>>> HTTP_CLIENT_IP : " + ip);
        }
        if (ip == null) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
            logger.info(">>>> HTTP_X_FORWARDED_FOR : " + ip);
        }
        if (ip == null) {
            ip = request.getRemoteAddr();
        }
        
        logger.info(">>>> Result : IP Address : "+ip);
 
        return ip;
 
    }

}
