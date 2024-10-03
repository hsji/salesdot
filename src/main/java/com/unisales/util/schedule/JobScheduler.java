package com.unisales.util.schedule;

import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;

import com.unisales.login.controller.loginController;

public class JobScheduler {

	private Logger log = LoggerFactory.getLogger(JobScheduler.class);

	@Scheduled(cron = "0 0 13 * * *") // 매일 13시
	public void jobMethod() throws Exception {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		log.info("스케줄 실행 : " + dateFormat.format(calendar.getTime()));
	}
}