package com.unisales.ubidcs.solution.eform.vo;
 
import java.util.ArrayList;
import java.util.LinkedHashMap;

public class ContractVO {

        private String c_uuid;
        private String pdfPath;
        private String pdfNm;
        private String jsonPath;
        private String jsonNm;
        private ArrayList<LinkedHashMap<String, Object>> jsonArr;
        private ArrayList formerArr;
        int stepCnt = 0;

        // 기본 생성자
        public ContractVO() {
                // 기본 생성자 내에서 필드 초기화 또는 다른 초기화 작업 수행
        }

        // 매개변수가 있는 생성자
        public ContractVO(String c_uuid, String pdfPath, String pdfNm, String jsonPath, String jsonNm, ArrayList<LinkedHashMap<String, Object>> jsonArr, ArrayList formerArr, int stepCnt) {
                this.c_uuid = c_uuid;
                this.pdfPath = pdfPath;
                this.pdfNm = pdfNm;
                this.jsonPath = jsonPath;
                this.jsonNm = jsonNm;
                this.jsonArr = jsonArr;
                this.formerArr = formerArr;
                this.stepCnt = stepCnt;
        }

        /*
        1. 문서 제목
        2. 문서 참여자
        3. 참여자 수
        4.

        + originalJsonData


        [MASTER]
        문서 ID, 양식명, 최종PDF파일명, PDF파일위치, 디자인데이터JSON
        [DETAIL]
        문서ID, SEQ, 참여자디자인명

         */


        public int stepCnt_plus() {
                return ++stepCnt;
        }

        // Getter 메서드들
        public String getC_uuid() {
                return c_uuid;
        }

        public String getPdfPath() {
                return pdfPath;
        }

        public String getPdfNm() {
                return pdfNm;
        }

        public String getJsonPath() {
                return jsonPath;
        }

        public String getJsonNm() {
                return jsonNm;
        }

        public ArrayList<LinkedHashMap<String, Object>> getJsonArr() {
                return jsonArr;
        }

        public ArrayList getFormerArr() {
                return formerArr;
        }

        public int getStepCnt() {
                return stepCnt;
        }

        // Setter 메서드들
        public void setC_uuid(String c_uuid) {
                this.c_uuid = c_uuid;
        }

        public void setPdfPath(String pdfPath) {
                this.pdfPath = pdfPath;
        }

        public void setPdfNm(String pdfNm) {
                this.pdfNm = pdfNm;
        }

        public void setJsonPath(String jsonPath) {
                this.jsonPath = jsonPath;
        }

        public void setJsonNm(String jsonNm) {
                this.jsonNm = jsonNm;
        }

        public void setJsonArr(ArrayList<LinkedHashMap<String, Object>> jsonArr) {
                this.jsonArr = jsonArr;
        }

        public void setFormerArr(ArrayList formerArr) {
                this.formerArr = formerArr;
        }

        public void setStepCnt(int stepCnt) {
                this.stepCnt = stepCnt;
        }


}
