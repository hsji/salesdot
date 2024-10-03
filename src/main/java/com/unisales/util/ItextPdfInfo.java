package com.unisales.util;


public class ItextPdfInfo {

    private String pdfCode; 	// pdf 종류가 여러개일 경우 html 을 구분하기 위한 코드
    private String pdfFilePath; // pdf 파일이 저장될 경로
    private String pdfFileName; // pdf 파일명
    private String pdfExtend = ".pdf"; // pdf 확장자	
	
	public String getPdfCode() {
		return pdfCode;
	}

	public void setPdfCode(String pdfCode) {
		this.pdfCode = pdfCode;
	}

	public String getPdfFilePath() {
		return pdfFilePath;
	}

	public void setPdfFilePath(String pdfFilePath) {
		this.pdfFilePath = pdfFilePath;
	}

	public String getPdfFileName() {
		return pdfFileName;
	}

	public void setPdfFileName(String pdfFileName) {
		this.pdfFileName = pdfFileName;
	}

	public String getPdfExtend() {
		return pdfExtend;
	}
	
}
