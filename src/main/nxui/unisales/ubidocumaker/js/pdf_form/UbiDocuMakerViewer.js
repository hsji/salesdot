let UDM_SERVLET_URL = "";
let TEMPLATE_JSON = "";

class UbiDocuMakerViewer {
    constructor(viewerOption) {

        this.targetId = "UbiDocuMakerViewerDiv";

        this.pdfUrl = "";

        this.jsonUrl = "";

        this.imageUrls = [];

        // viewerOption 객체의 키와 값들을 프로퍼티로 설정
        for (const key in viewerOption) {
            if (viewerOption.hasOwnProperty(key)) {
                this[key] = viewerOption[key];
            }
        }
    }



    /*  함수 loadUDMTemplateViewer(dom, pdfUrl, jsonDataUrl, imageUrls) 
    *
    *   targetId : 해당 id dom요소 하위에 DocuMaker 생성 
    *   pdfUrl : DocuMaker에 띄울 PDF 파일 경로  
    *   jsonDataUrl : DocuMaker에 띄울 양식디자인 JSON 파일 경로  
    *   imageUrls : 등록된이미지 옵션 데이터 URL 배열
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
        readermod.changeTranslatorFileLocation('./js/pdf_form/i18n/');
        const fetchJSONData = (url) => {
            return new Promise((resolve, reject) => {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', url, true);
                xobj.onreadystatechange = function () {
                    if (xobj.readyState === 4) {
                        if (xobj.status === 200) {
							if(xobj.responseText || xobj.responseText != "") {	// hsji
								resolve(JSON.parse(xobj.responseText));
							} else {
								resolve("{}");	// hsji
							}
                        } else {
                            reject(new Error('DocuMaker에 띄울 양식디자인 JSON 파일 경로를 불러 올 수 없습니다.'));
                        }
                    }
                };
                xobj.send(null);
            });
        };

        let targetDom = document.getElementById(this.targetId);
        readermod.removeViewerHTMLFromTarget(targetDom);
        readermod.appendViewerHTMLToTarget(targetDom);
        readermod.initDocument(targetDom);
        setWorkerSrc();
        Promise.all([
            fetchJSONData(UDM_SERVLET_URL + this.jsonUrl),
        ]).then(([jsonData]) => {

            console.log(">>>>>>>>>", this.pdfUrl, jsonData);
			if(jsonData != "{}") {		// hsji
				jsonData = isFormer(jsonData, 'Y');//수신자 값 추출(jsonData, 삭제할 isFormer);
				jsonData = setFormer(JSON.parse(jsonData), "isFormer", "Y");
			}
			jsonData = JSON.parse(jsonData);
            readermod.loadDocument(UDM_SERVLET_URL + this.pdfUrl, jsonData, this.imageUrls);
        }).catch(error => {
            console.error('DocuMaker 로드 중 에러가 발생하였습니다.', error);
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
/* json 데이터 중 작성자(Y) 또는 참여자(N) 를 삭제 */
function isFormer(json, val) {
	console.log("isFormer : " + val);
	var jsonData = json;
	if(isEmpty(val)){
		val = 'N';
	}
	jsonData.formerList = jsonData.formerList.filter(item => item.isFormer !== val);
	console.log("isFormer ==fi==: " + fi);
	/*
	if(fi && fi != "") {
		jsonData.formerList = jsonData.formerList.filter(item => item.userUUID == fi);
	}
	*/
	console.log("isFormer ==fi==>: " + jsonData);
	jsonData = JSON.stringify(jsonData, null, 2);
	return jsonData;
}

function setFormer(json, id, value) {
	var jsonData = json;
	console.log("formerList : " + id);
	console.log(jsonData);
	console.log(jsonData.formerList);
	jsonData.formerList.forEach(item => {
		//console.log(item);
		//if (item === id) {
			//console.log(value);		
			item.isFormer = value;
		//}
	});
	return JSON.stringify(jsonData, null, 2);
}