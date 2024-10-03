

/*
'계약서 제출' 버튼
 */
function docuSave() {
  if (!readermod.isRequiredFieldValueEmpty()) {

    let jsonData = JSON.parse(readermod.getJsonData());
    let postData = {'uuid' : uuid, 'json_data' : jsonData, 'u' : u,
                    'recevier' : {'name' : r, 'email' : q },
                    'sender' : {'name' : sr, 'email' : sq }
                    }
    console.debug(postData);
    $.ajax({
      type: "post",
      url: pdfSaveUrl,
      data: JSON.stringify(postData),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data);
        if(data.code=='200'){
          console.debug('PDF save success.');
          mailStep = true;
          alert('편집 정보가 저장되었습니다.');
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
	jsonData = JSON.stringify(jsonData, null, 2);
	return jsonData;
}