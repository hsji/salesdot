package com.unisales.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.Reader;
import java.io.StringReader;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;
import com.ibatis.common.resources.Resources;
import com.itextpdf.html2pdf.ConverterProperties;
import com.itextpdf.html2pdf.HtmlConverter;
import com.itextpdf.html2pdf.resolver.font.DefaultFontProvider;
import com.itextpdf.io.font.FontProgram;
import com.itextpdf.io.font.FontProgramFactory;
import com.itextpdf.kernel.events.Event;
import com.itextpdf.kernel.events.IEventHandler;
import com.itextpdf.kernel.events.PdfDocumentEvent;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfArray;
import com.itextpdf.kernel.pdf.PdfDictionary;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfName;
import com.itextpdf.kernel.pdf.PdfNumber;
import com.itextpdf.kernel.pdf.PdfPage;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.PdfCanvas;
import com.itextpdf.kernel.pdf.xobject.PdfFormXObject;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.IBlockElement;
import com.itextpdf.layout.element.IElement;
import com.itextpdf.layout.font.FontProvider;


public class PDFUtil {

    /*
     * PDF 유무를 체크한 후
     * PDF 파일이 없을 경우 PDF 파일 생성 메소드 실행
     */
    public File checkPDF (ItextPdfInfo pdfDto, String html) {
        File file = new File(pdfDto.getPdfFilePath(),pdfDto.getPdfFileName() + pdfDto.getPdfExtend());
        if(file.exists()) {
        	file.delete();
        }
        //int fileSize = (int) file.length();
        //System.out.println(">>>>>>>>>>>>>>>>>" + fileSize);
        //if (fileSize == 0) {
        	createPDFHTML(pdfDto, html);
            file = new File(pdfDto.getPdfFilePath(),pdfDto.getPdfFileName() + pdfDto.getPdfExtend());
        //}
        return file;
    }
		    
    /*
     * iText 라이브러리를 사용한 PDF 파일 생성
     * CSS , Font 설정 기능 포함
     * */
    public void createPDF(ItextPdfInfo itextPdfDto, String html) {
    	try {
    		
        	Properties properties = new Properties();
            Reader reader = Resources.getResourceAsReader("pdf.properties");
            properties.load(reader);
        	
    	    String FONT1 = properties.getProperty("font1");
    	    String FONT2 = properties.getProperty("font2");

    	    ConverterProperties properties1 = new ConverterProperties();
    	    FontProvider fontProvider = new DefaultFontProvider(true, true, true);
    	    FontProgram fontProgram = FontProgramFactory.createFont(FONT1);
    	    fontProvider.addFont(fontProgram);
    	    FontProgram fontProgram2 = FontProgramFactory.createFont(FONT2);
    	    fontProvider.addFont(fontProgram2);
    	    
    	    properties1.setFontProvider(fontProvider);

    	    //pdf 페이지 크기를 조정
    	    String dest = itextPdfDto.getPdfFilePath()+"/"+ itextPdfDto.getPdfFileName() + itextPdfDto.getPdfExtend();
    	    List<IElement> elements = HtmlConverter.convertToElements(html, properties1);
    	    PdfDocument pdf = new PdfDocument(new PdfWriter(dest));
    	    Document document = new Document(pdf);
    	    //setMargins 매개변수순서 : 상, 우, 하, 좌
    	    document.setMargins(50, 0, 50, 0);
    	    for (IElement element : elements) {
    	      document.add((IBlockElement) element);
    	    }
    	    document.close();    		
    	} catch (Exception e) {
            System.out.println("에러");
            e.printStackTrace();    		
    	}

    	/*
        // 최초 문서 사이즈 설정
        Document document = new Document(PageSize.A4, 30, 30, 30, 30);

        try {
            // PDF 파일 생성
            PdfWriter pdfWriter = PdfWriter.getInstance(document, new FileOutputStream(itextPdfDto.getPdfFilePath()+"/"+ itextPdfDto.getPdfFileName()));
            // PDF 파일에 사용할 폰트 크기 설정
            pdfWriter.setInitialLeading(12.5f);
            // PDF 파일 열기
            document.open();

            // XMLWorkerHelper xmlWorkerHelper = XMLWorkerHelper.getInstance();

            // CSS 설정 변수 세팅
            CSSResolver cssResolver = new StyleAttrCSSResolver();
            CssFile cssFile = null;

            try {

                InputStream cssStream = getClass().getClassLoader().getResourceAsStream("static/theme_chrome.css");

                // CSS 파일 담기
                cssFile = XMLWorkerHelper.getCSS(cssStream);
//	                    cssFile = XMLWorkerHelper.getCSS(new FileInputStream("src/main/resources/static/css/test.css"));
            } catch (Exception e) {
                throw new IllegalArgumentException("PDF CSS 파일을 찾을 수 없습니다.");
            }

            if(cssFile == null) {
                throw new IllegalArgumentException("PDF CSS 파일을 찾을 수 없습니다.");
            }

            // CSS 파일 적용
            cssResolver.addCss(cssFile);

            // PDF 파일에 HTML 내용 삽입
            XMLWorkerFontProvider fontProvider = new XMLWorkerFontProvider(XMLWorkerFontProvider.DONTLOOKFORFONTS);

            
            try {
                fontProvider.register("c:/windows/fonts/malgun.ttf", "Malgun Gothic");
            } catch (Exception e) {
                throw new IllegalArgumentException("PDF 폰트 파일을 찾을 수 없습니다.");
            }

            if(fontProvider.getRegisteredFonts() == null) {
                throw new IllegalArgumentException("PDF 폰트 파일을 찾을 수 없습니다.");
            }
            
            

            // 사용할 폰트를 담아두었던 내용을
            // CSSAppliersImpl에 담아 적용
            CssAppliers cssAppliers = new CssAppliersImpl(fontProvider);

            // HTML Pipeline 생성
            HtmlPipelineContext htmlPipelineContext = new HtmlPipelineContext(cssAppliers);
            htmlPipelineContext.setTagFactory(Tags.getHtmlTagProcessorFactory());

            // ========================================================================================
            // Pipelines
            PdfWriterPipeline pdfWriterPipeline = new PdfWriterPipeline(document, pdfWriter);
            HtmlPipeline htmlPipeline = new HtmlPipeline(htmlPipelineContext, pdfWriterPipeline);
            CssResolverPipeline cssResolverPipeline = new CssResolverPipeline(cssResolver, htmlPipeline);
            // ========================================================================================


            // ========================================================================================
            // XMLWorker
            XMLWorker xmlWorker = new XMLWorker(cssResolverPipeline, true);
            XMLParser xmlParser = new XMLParser(true, xmlWorker, StandardCharsets.UTF_8);
            // ========================================================================================


            String htmlStr = html;

            // HTML 내용을 PDF 파일에 삽입
            StringReader stringReader = new StringReader(htmlStr);
            // XML 파싱
            xmlParser.parse(stringReader);
            // PDF 문서 닫기
            document.close();
            // PDF Writer 닫기
            pdfWriter.close();

        } catch (DocumentException e1) {
            throw new IllegalArgumentException("PDF 라이브러리 설정 에러");
        } catch (FileNotFoundException e2) {
            e2.printStackTrace();
            throw new IllegalArgumentException("PDF 파일 생성중 에러");
        } catch (IOException e3) {
            e3.printStackTrace();
            throw new IllegalArgumentException("PDF 파일 생성중 에러2");
        } catch (Exception e4) {
            e4.printStackTrace();
            throw new IllegalArgumentException("PDF 파일 생성중 에러3");
        }
        finally {
            try {
                document.close();
            } catch (Exception e) {
                System.out.println("PDF 파일 닫기 에러");
                e.printStackTrace();
            }
        }
        */

    }
    
    public void createPDFHTML(ItextPdfInfo itextPdfDto, String html) {
    	try {
    	    ConverterProperties properties = new ConverterProperties();
    	    properties.setFontProvider(new DefaultFontProvider(true, true, true));    	
    	    String src = itextPdfDto.getPdfFilePath()+"/"+ itextPdfDto.getPdfFileName() + itextPdfDto.getPdfExtend();
    	    String dest = itextPdfDto.getPdfFilePath()+"/"+ itextPdfDto.getPdfFileName() + "_scale" + itextPdfDto.getPdfExtend();
    	    HtmlConverter.convertToPdf(html, new FileOutputStream(src), properties);
    	    manipulatePdf(src, dest);
    	} catch (Exception e) {
            System.out.println("에러");
            e.printStackTrace();    		
    	}
    }
    
    protected void manipulatePdf(String src, String dest) throws Exception {
        PdfDocument srcDoc = new PdfDocument(new PdfReader(src));
        PdfDocument pdfDoc = new PdfDocument(new PdfWriter(dest));

        float scale = 0.5f;
        ScaleDownEventHandler eventHandler = new ScaleDownEventHandler(scale);
        pdfDoc.addEventHandler(PdfDocumentEvent.START_PAGE, eventHandler);

        int numberOfPages = srcDoc.getNumberOfPages();
        for (int p = 1; p <= numberOfPages; p++) {
            eventHandler.setPageDict(srcDoc.getPage(p).getPdfObject());

            // Copy and paste scaled page content as formXObject
            PdfFormXObject page = srcDoc.getPage(p).copyAsFormXObject(pdfDoc);
            PdfCanvas canvas = new PdfCanvas(pdfDoc.addNewPage());
            canvas.addXObjectWithTransformationMatrix(page, scale, 0f, 0f, scale, 0f, 0f);
        }

        pdfDoc.close();
        srcDoc.close();
    }
    
    
    private static class ScaleDownEventHandler implements IEventHandler {
        protected float scale = 1;
        protected PdfDictionary pageDict;

        public ScaleDownEventHandler(float scale) {
            this.scale = scale;
        }

        public void setPageDict(PdfDictionary pageDict) {
            this.pageDict = pageDict;
        }

        @Override
        public void handleEvent(Event currentEvent) {
            PdfDocumentEvent docEvent = (PdfDocumentEvent) currentEvent;
            PdfPage page = docEvent.getPage();

            page.put(PdfName.Rotate, pageDict.getAsNumber(PdfName.Rotate));

            // The MediaBox value defines the full size of the page.
            scaleDown(page, pageDict, PdfName.MediaBox, scale);

            // The CropBox value defines the visible size of the page.
            scaleDown(page, pageDict, PdfName.CropBox, scale);
        }

        protected void scaleDown(PdfPage destPage, PdfDictionary pageDictSrc, PdfName box, float scale) {
            PdfArray original = pageDictSrc.getAsArray(box);
            if (original != null) {
                float width = original.getAsNumber(2).floatValue() - original.getAsNumber(0).floatValue();
                float height = original.getAsNumber(3).floatValue() - original.getAsNumber(1).floatValue();

                PdfArray result = new PdfArray();
                result.add(new PdfNumber(0));
                result.add(new PdfNumber(0));
                result.add(new PdfNumber(width * scale));
                result.add(new PdfNumber(height * scale));
                destPage.put(box, result);
            }
        }
    }    
}
