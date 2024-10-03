

/*
'계약서 제출' 버튼
 */
function docuSave() {
  if (!readermod.isRequiredFieldValueEmpty()) {

    let jsonData = JSON.parse(readermod.getJsonData());
    let postData = {'uuid' : uuid, 'jsonData' : jsonData, 'sysCode' : s, 'bizCode' : b, 	// hsji
                    'u' : u, 'e' : e, 'recevier' : {'name' : r, 'email' : q },
                    'sender' : {'name' : sr, 'email' : sq }
                    };
	console.log(jsonData);				
    console.log(postData);

    $.ajax({
      type: "post",
      url: jsonSaveUrl,		// hsji
      data: JSON.stringify(postData),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        if(data.code=='200'){		// hsji
          console.debug('PDF save success.');
          mailStep = true;
          alert('정상처리되었습니다.');
        } else if(data.code=='300'){
			alert('만료일이 경과되었습니다.');
        } else if(data.code=='400'){
			alert('이미 서명한 문서입니다.');
		} else if(data.code=='500'){
			alert('정상처리되었으나 완료 메일발송에 실패하였습니다.');
		}
      }
    });
  } else {
    alert('필수 입력 항목이 입력되지 않았습니다.');
    return;
  }
};

/* json 데이터 중 작성자(Y) 또는 참여자(N) 를 삭제 */
function isFormer(json, val) {
	console.log("isFormer : " + val);
	var jsonData = json;
	if(isEmpty(val)){
		val = 'N';
	}
	jsonData.formerList = jsonData.formerList.filter(item => item.isFormer !== val);

	console.log("isFormer ==fi==: " , fi);
	if(fi && fi != "") {
		jsonData.formerList = jsonData.formerList.filter(item => item.userUUID == fi);
	}
	jsonData = JSON.stringify(jsonData, null, 2);
	return jsonData;
}