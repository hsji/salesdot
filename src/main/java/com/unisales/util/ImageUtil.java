package com.unisales.util;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

import javax.imageio.ImageIO;



public class ImageUtil {
    /**
	 * 시스템에 로그인한 사용자 정보를 Map형태의 데이터로 리턴한다.
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	public static byte[] generatelmage(byte[] imageContent, String mainPosition, int maxWH) throws IOException  {

		// 원본 이미지 가져오기
		BufferedImage originalImg = ImageIO.read(new ByteArrayInputStream(imageContent));

		String imgFormat = "jpg";  // 새 이미지 포맷. jpg, gif 등

	    int imageWidth;
	    int imageHeight;
	    double ratio;
	    int w;
	    int h;

	    // 원본 이미지 사이즈 가져오기
	    imageWidth  = originalImg.getWidth(null);
	    imageHeight = originalImg.getHeight(null);
		
	    if(mainPosition.equals("W")){    // 넓이기준
		        ratio = (double)maxWH/(double)imageWidth;
		        w = (int)(imageWidth * ratio);
		        h = (int)(imageHeight * ratio);
		}else if(mainPosition.equals("H")){ // 높이기준
		        ratio = (double)maxWH/(double)imageHeight;
		        w = (int)(imageWidth * ratio);
		        h = (int)(imageHeight * ratio);
		}else{ //설정값 (비율무시)
		        w = maxWH;
		        h = maxWH;
		}
	    // 이미지 리사이즈
	    // Image.SCALE_DEFAULT : 기본 이미지 스케일링 알고리즘 사용
	    // Image.SCALE_FAST    : 이미지 부드러움보다 속도 우선
	    // Image.SCALE_REPLICATE : ReplicateScaleFilter 클래스로 구체화 된 이미지 크기 조절 알고리즘
	    // Image.SCALE_SMOOTH  : 속도보다 이미지 부드러움을 우선
	    // Image.SCALE_AREA_AVERAGING  : 평균 알고리즘 사용
	    Image resizeImage = originalImg.getScaledInstance(w, h, Image.SCALE_SMOOTH);

	    // 새 이미지  저장하기
	    BufferedImage newImage = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
	    Graphics g = newImage.getGraphics();
	    g.drawImage(resizeImage, 0, 0, null);
	    g.dispose();

		ByteArrayOutputStream output = new ByteArrayOutputStream();
		ImageIO.write(newImage, imgFormat, output);
		return output.toByteArray();
	}
	/**
	 * Dataset 전달을 위한 DB Blob이미지 Converting
	 * @param saveList		: 저장할 데이터 리스트
	 * @return				: N/A
	 */	
	/*
	public static byte[] convertBloblmageToDataset(Map<String,Object> map, String key) throws IOException  {
		ByteArrayOutputStream baos = null; 
		try {
       		BLOB oblob = (BLOB) map.get(key);

    		InputStream instream = oblob.getBinaryStream();
		
    		baos = new ByteArrayOutputStream(); 

    		int v_size = oblob.getBufferSize(); 
    		byte v_data[] = new byte[v_size]; 
    		long v_length = oblob.length(); 
    		int v_len = -1; 

    		while((v_len = instream.read(v_data)) != -1 ) 
    		{ 
	    		baos.write(v_data, 0, v_len); 
    		}
		}
    	catch(Exception e)
    	{
    		System.out.println( "readBlob Exception : " + e.getMessage() ); 
    	}
		
		return baos.toByteArray();
	}
	*/
	
};
