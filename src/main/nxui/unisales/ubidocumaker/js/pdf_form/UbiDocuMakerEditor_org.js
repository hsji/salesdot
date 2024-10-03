let UDM_SERVLET_URL = "";
let TEMPLATE_JSON = "";

class UbiDocuMakerEditor {
    constructor(editorOption) {

        // targetId : 해당 id dom요소 하위에 DocuMaker 생성
        this.targetId = "UbiDocuMakerEditorDiv";

        // DocuMaker에 띄울 PDF 파일 경로
        this.pdfUrl = "";

        // jsonUrl : DocuMaker에 띄울 양식디자인 JSON 파일 경로
        this.jsonUrl = "";

        // userList : 발송자,참여자 데이터 배열
        this.userList = [
            {
                "displayUserName": "작성자",
                "userUUID": "16af08b3-c7a5-4ff5-905c-2f2514541b0d",
                "email": "test1@email.com",
                "isFormer": "Y"
            },
            {
                "displayUserName": "참여자",
                "userUUID": "26af08b3-c7a5-4ff5-905c-2f2514541b0d",
                "email": "test2@email.com",
                "isFormer": "N"
            }, 
        ];

        //등록된이미지 보임/안보임 옵션 객체
        this.signtabShowOption = {
            "useDrawSign": "true",
            "useImageSign": "true",
            "useRegSign": "true"
        };

        //기본값 옵션 데이터 배열
        this.dvOptionList = [];

        //폰트 배열
        this.fontFamilyList = [];

        // editorOption 객체의 키와 값들을 프로퍼티로 설정
        for (const key in editorOption) {
            if (editorOption.hasOwnProperty(key)) {
                this[key] = editorOption[key];
            }
        }

        
    }

    /*  
    함수 open() 
    */
    open() {
        const setWorkerSrc = () => {
            var agent = navigator.userAgent.toLowerCase();
            if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
                // IE일 경우
                pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdf_form/pdfjs/es5/pdf.worker.min.js';
            } else {
                // IE가 아닐 경우
                pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdf_form/pdfjs/pdf.worker.min.js';
            }
        };
			  //텍스트 프로퍼티 js파일 지정.
        templatemod.changeTranslatorFileLocation('./js/pdf_form/i18n/');
        const fetchJSONData = (url) => {
            return new Promise((resolve, reject) => {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', url, true);
                xobj.onreadystatechange = function () {
                    if (xobj.readyState === 4) {
                        if (xobj.status === 200) {
                            resolve(JSON.parse(xobj.responseText));
                        } else {
                            reject(new Error('DocuMaker TemplateEditor에 띄울 양식디자인 JSON 파일 경로를 불러 올 수 없습니다.'));
                        }
                    }
                };
                xobj.send(null);
            });
        };

        let targetDom = document.getElementById(this.targetId);
        templatemod.removeEditorHTMLFromTarget(targetDom);
        templatemod.appendEditorHTMLToTarget(targetDom);
        
        setWorkerSrc();
        Promise.all([
            fetchJSONData(UDM_SERVLET_URL + this.jsonUrl),
        ]).then(([jsonData]) => {
            if (!isEmpty(uploadFileName)) {
                $('#fileUpload').hide();
            }
            console.log(this.pdfUrl, jsonData);
            // document.querySelector('.MAIN-TITLE > span').textContent = jsonData.formTemplateName;
            document.querySelector('.MAIN-TITLE > span').textContent = jsonData.formTemplateName;
            templatemod.initDocument(targetDom, UDM_SERVLET_URL + this.pdfUrl, this.userList, this.dvOptionList, this.signtabShowOption, jsonData);
            templatemod.appendFontFamily(this.fontFamilyList);
        }).catch(error => {
            console.error('DocuMaker TemplateEditor 로드 중 에러가 발생하였습니다.', error);
            if (!isEmpty(uploadFileName)) {
                $('#fileUpload').hide();
            }

            //document.querySelector('.MAIN-TITLE > span').textContent = jsonData.formTemplateName;
            templatemod.initDocument(targetDom, UDM_SERVLET_URL + this.pdfUrl, this.userList, this.dvOptionList, this.signtabShowOption, jsonData);
            templatemod.appendFontFamily(this.fontFamilyList);
        });

    }

    /*  함수 setUDMservletUrl(url) 
    *
    *   1.url : DocuMaker 서블릿 URL설정
    *
    */
    setUDMservletUrl(url) {
        UDM_SERVLET_URL = url;
    }

    // 템플릿 생성 메소드
    createTemplate(successCallback, errorCallback, actionCallback) {
        // 템플릿 생성 작업 수행
        console.log("템플릿 생성 중...");

        // 성공, 실패, 액션 콜백 호출
        successCallback({
            type: 'template',
            template_id: '생성된 템플릿 ID',
            template_name: this.prefill.template_name,
            step_settings: this.prefill.step_settings,
            code: '-1'
        });
    }

    // 템플릿 수정 메소드
    modifyTemplate(successCallback, errorCallback, actionCallback) {
        // 템플릿 수정 작업 수행
        console.log("템플릿 수정 중...");

        // 성공, 실패, 액션 콜백 호출
        successCallback({
            type: 'template',
            template_id: this.mode.template_id,
            template_name: this.prefill.template_name,
            step_settings: this.prefill.step_settings,
            code: '-1'
        });
    }

    // 템플릿 복제 메소드
    duplicateTemplate(successCallback, errorCallback, actionCallback) {
        // 템플릿 복제 작업 수행
        console.log("템플릿 복제 중...");

        // 성공, 실패, 액션 콜백 호출
        successCallback({
            type: 'template',
            template_id: '복제된 템플릿 ID',
            template_name: this.prefill.template_name,
            step_settings: this.prefill.step_settings,
            code: '-1'
        });
    }

}


/*
Util 함수.. 이동 필요
 */
function isEmpty(text) {
    if (text == ""
        || text == null
        || text == undefined
        || (text != null && typeof text == "object" && !Object
        .keys(text).length)) {
        return true;
    }
    return false;
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}