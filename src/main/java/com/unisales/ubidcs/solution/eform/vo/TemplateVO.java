package com.unisales.ubidcs.solution.eform.vo;
 
public class TemplateVO {
    private String t_uuid;
    private String t_Nm; //추가
    private String pdfPath;
    private String pdfNm;
    private String jsonPath;
    private String jsonNm;
    private Object jsonObj;

    // 기본 생성자
    public TemplateVO() {
    }

    // 모든 필드를 초기화하는 생성자
    public TemplateVO(String t_uuid, String pdfPath, String pdfNm, String jsonPath, String jsonNm, String t_Nm, Object jsonObj) {
        this.t_uuid = t_uuid;
        this.pdfPath = pdfPath;
        this.pdfNm = pdfNm;
        this.jsonPath = jsonPath;
        this.jsonNm = jsonNm;
        this.t_Nm = t_Nm;
        this.jsonObj = jsonObj;
    }

    // Getter 및 Setter 메서드
    public String getT_uuid() {
        return t_uuid;
    }

    public void setT_uuid(String t_uuid) {
        this.t_uuid = t_uuid;
    }

    public String getPdfPath() {
        return pdfPath;
    }

    public void setPdfPath(String pdfPath) {
        this.pdfPath = pdfPath;
    }

    public String getPdfNm() {
        return pdfNm;
    }

    public void setPdfNm(String pdfNm) {
        this.pdfNm = pdfNm;
    }

    public String getJsonPath() {
        return jsonPath;
    }

    public void setJsonPath(String jsonPath) {
        this.jsonPath = jsonPath;
    }

    public String getJsonNm() {
        return jsonNm;
    }

    public void setJsonNm(String jsonNm) {
        this.jsonNm = jsonNm;
    }

    public String getT_Nm() {
        return t_Nm;
    }

    public void setT_Nm(String t_Nm) {
        this.t_Nm = t_Nm;
    }

    public Object getJsonObj() {
        return jsonObj;
    }

    public void setJsonObj(Object jsonObj) {
        this.jsonObj = jsonObj;
    }
}
