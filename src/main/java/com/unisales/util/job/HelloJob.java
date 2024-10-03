package com.unisales.util.job;
//package com.dxtobe.util.job;
//
//import org.springframework.batch.core.Job;
//import org.springframework.batch.core.Step;
//import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
//import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
//import org.springframework.batch.core.configuration.annotation.JobScope;
//import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
//import org.springframework.batch.core.launch.support.RunIdIncrementer;
//import org.springframework.batch.repeat.RepeatStatus;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Slf4j
//@Configuration
//@EnableBatchProcessing
//public class HelloJob {
//
//	@Autowired
//	private JobBuilderFactory jobBuilderFactory;
//	
//	@Autowired
//    private StepBuilderFactory stepBuilderFactory;
//    
//    @Bean
//    public Job helloJob5() {
//        return jobBuilderFactory.get("helloJob5")	// Job의 name 생성 : helloJob4
//        		.incrementer(new RunIdIncrementer())	// 동일 파라미터를 다시 실행하고 싶을 때 사용
//                .start(helloStep(null))	// helloStep() 스탭 시작
//                .build();
//    }
//
//    @Bean
//    @JobScope
//    public Step helloStep(@Value("#{jobParameters[string]}") String string) {
//        return stepBuilderFactory.get("helloStep")
//               	.tasklet((contribution, chunkContext) -> {	// Step 안에서 수행될 기능 명시
//            	   log.info(">>>>> This is Step1");
//                   log.info(">>>>> requestDate = {}", string);
//                   return RepeatStatus.FINISHED;
//                 })
//                 .build();
//    }
//}
