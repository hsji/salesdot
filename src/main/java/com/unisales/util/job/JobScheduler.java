package com.unisales.util.job;
//package com.dxtobe.util.job;
//
//import java.util.Date;
//
//import org.springframework.batch.core.Job;
//import org.springframework.batch.core.JobParameters;
//import org.springframework.batch.core.JobParametersBuilder;
//import org.springframework.batch.core.explore.JobExplorer;
//import org.springframework.batch.core.launch.JobLauncher;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.scheduling.annotation.Scheduled;
//
//@Configuration
//@EnableScheduling
//public class JobScheduler {
//
//	@Autowired
//    private JobLauncher jobLauncher;
//	@Autowired
//    private JobExplorer jobExplorer;
//	@Autowired
//    private ApplicationContext applicationContext;
//    
//    @Scheduled(cron="0/10 * * * * *")
//    public void executeBatch() {
//    	try {
//    	Job job = applicationContext.getBean("helloJob5", Job.class);
//    	JobParameters jobParameters = new JobParametersBuilder(this.jobExplorer)	// jobExplorer은 메타데이터 조회 기능 (배치 작업의 실행 이력 추적, 모니터링, 제어, 파라미터 값 관리 등의 목적)
//    			.addString("string", "테스트")	// String 파라미터 추가
//    			.addDate("date", new Date())	// Date 파라미터 추가
//    			.getNextJobParameters(job)		// job 의 파라미터로 지
//    			.toJobParameters();				// JobParametersBuilder 로 부터 생성된 객체를 JobParameters 형으로 재생성
//    			jobLauncher.run(job, jobParameters);	// jobParameters 를 넘기며 job 을 실행
//    	} catch (Exception e) {
//			e.printStackTrace();
//		}
//    	
//    }
//}