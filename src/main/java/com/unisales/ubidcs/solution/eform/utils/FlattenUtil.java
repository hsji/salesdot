package com.unisales.ubidcs.solution.eform.utils;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.HashMap;
import java.util.Properties;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType0Font;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.ubireport.common.util.StrUtil;
import com.unisales.ubidcs.solution.eform.vo.FlattenVO;

public class FlattenUtil {
  public static Color hex2Rgb(String colorStr) {
    return new Color(Integer.valueOf(colorStr.substring(1, 3), 16).intValue(), Integer.valueOf(colorStr.substring(3, 5), 16).intValue(), 
        Integer.valueOf(colorStr.substring(5, 7), 16).intValue());
  }
  
  public static Double getDoubleValue(Object data) {
    if (data instanceof Double)
      return (Double)data; 
    if (data instanceof Long)
      return Double.valueOf(((Long)data).doubleValue()); 
    if (data instanceof Integer)
      return Double.valueOf(((Integer)data).doubleValue()); 
    if (data instanceof String)
      return Double.valueOf(Double.parseDouble(data.toString())); 
    return null;
  }
  
  public static Integer getIntegerValue(Object data) {
    if (data instanceof Integer)
      return (Integer)data; 
    if (data instanceof Long)
      return Integer.valueOf(((Long)data).intValue()); 
    return null;
  }
  
  public static PDFont getPDFont(PDDocument document, String fontName, boolean isBold, Properties properties, HashMap<String, PDFont> fontMap) throws IOException {
    PDType1Font pDType1Font= new PDType1Font(Standard14Fonts.FontName.HELVETICA);	//PDType1Font.HELVETICA;
    PDFont font = null;
    String _fontName = fontName;
    if (isBold)
      _fontName = _fontName + "_Bold"; 
    font = fontMap.get(_fontName);
    String fontPath = "";
    if (font != null)
      return font; 
    if( System.getProperty("os.name").indexOf("Win") == -1 ) {//guilty 2024-02-15 Window Test 복구
		fontPath = StrUtil.nvl(System.getProperty("sun.java2d.fontpath"), "");
		if( "".equals(fontPath) ) {
			fontPath = System.getProperty("java.home") + "/lib/fonts";
		} else {
			fontPath = System.getProperty("sun.java2d.fontpath");
		}
	    fontPath += "/" + properties.getProperty(_fontName);
	}else {
		fontPath += properties.getProperty(_fontName);//guilty 2024-02-15
	}
    System.out.println("fontPath : " + fontPath);
    if (!StringUtils.isEmpty(fontPath)) {
      if (Files.exists(Paths.get(fontPath, new String[0]), new java.nio.file.LinkOption[0])) {
        InputStream inputStream = new FileInputStream(fontPath);
        //File tempFont = File.createTempFile("tempFont", "ttf");
        File tempFont = new File(fontPath);
        //if(tempFont.exists()) {
        	//System.out.println("fontPath2222222222222 : " + fontPath);
        	//FileUtils.copyInputStreamToFile(inputStream, tempFont);
        	//System.out.println("fontPathAAAAAAAAA : " + tempFont.getAbsolutePath());
        	PDType0Font pDType0Font = PDType0Font.load(document, tempFont);
        	//tempFont.delete();
        	return (PDFont)pDType0Font;
        //return (PDFont)pDType0Font;
      } else {
        //pDType1Font = PDType1Font.HELVETICA;
      } 
    } else {
      //pDType1Font = PDType1Font.HELVETICA;
    } 
    fontMap.put(_fontName, pDType1Font);
    return (PDFont)pDType1Font;
  }
  
  public static float getTextPosX(float pdfX1, String textAlign, float textFieldWidth, float textWidth) {
    float textPosX = pdfX1;
    if ("center".equals(textAlign)) {
      textPosX = pdfX1 + (textFieldWidth - textWidth) / 2.0F;
    } else if ("right".equals(textAlign)) {
      textPosX = pdfX1 + textFieldWidth - textWidth;
    } 
    return textPosX;
  }
  
  public static String getImageBase64String(String imageUrl) throws Exception {
    String changeString = null;
    String filePathName = imageUrl;
    String fileExtName = filePathName.substring(filePathName.lastIndexOf(".") + 1);
    FileInputStream inputStream = null;
    ByteArrayOutputStream byteOutStream = null;
    try {
      File file = new File(filePathName);
      if (file.exists()) {
        inputStream = new FileInputStream(file);
        byteOutStream = new ByteArrayOutputStream();
        byte[] buf = new byte[1024];
        int len = inputStream.read(buf);
        while (len != -1) {
          byteOutStream.write(buf, 0, len);
          len = inputStream.read(buf);
        } 
        byte[] fileArray = byteOutStream.toByteArray();
        String imageString = new String(Base64.getEncoder().encodeToString(fileArray));
        changeString = "data:image/" + fileExtName + ";base64, " + imageString;
      } 
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      if (inputStream != null)
        inputStream.close(); 
      if (byteOutStream != null)
        byteOutStream.close(); 
    } 
    return changeString;
  }
  
  public static FlattenVO getJsonDataToFlattenVO(String pdfFormDataPath) throws Exception {
    FlattenVO flattenVO = null;
    try {
      JSONParser parser = new JSONParser();
      JSONObject jsonObj = (JSONObject)parser.parse(new FileReader(pdfFormDataPath));
      flattenVO = JsonUtil.getJsonToFlattenVO(jsonObj.toString());
    } catch (Exception e) {
      e.printStackTrace();
    } 
    return flattenVO;
  }
}
