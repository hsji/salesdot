$(document).ready(function(){
  var objDragAndDrop = $(".dragAndDropDiv");

  $(document).on("dragenter",".dragAndDropDiv",function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).css('border', '2px solid #0B85A1');
  });
  $(document).on("dragover",".dragAndDropDiv",function(e){
    e.stopPropagation();
    e.preventDefault();
  });
  $(document).on("drop",".dragAndDropDiv",function(e){

    $(this).css('border', '2px dotted #0B85A1');
    e.preventDefault();
    var files = e.originalEvent.dataTransfer.files;

    handleFileUpload(files, objDragAndDrop);
  });

  $(document).on('dragenter', function (e){
    e.stopPropagation();
    e.preventDefault();
  });
  $(document).on('dragover', function (e){
    e.stopPropagation();
    e.preventDefault();
    objDragAndDrop.css('border', '2px dotted #0B85A1');
  });
  $(document).on('drop', function (e){
    e.stopPropagation();
    e.preventDefault();
  });
  //drag 영역 클릭시 파일 선택창
  objDragAndDrop.on('click',function (e){
    $('input[type=file]').trigger('click');
  });

  $('input[type=file]').on('change', function(e) {
    var files = e.originalEvent.target.files;
    handleFileUpload(files,objDragAndDrop);
  });

  function handleFileUpload(files,obj)
  {
    //for (var i = 0; i < files.length; i++)
    for (var i = 0; i < 1; i++)
    {
      var fd = new FormData();
      fd.append('file', 	files[i]);
      fd.append('uuid', 	uuid);
	  fd.append('sysCode',	sysCode);		// hsji
	  fd.append('bizCode',	bizCode);		// hsji
	  fd.append('userId',	userId);		// hsji
      var fileName = files[i].name;
      var fileSize = files[i].size;

      if(fileName.toLowerCase().indexOf('.pdf') < 0 ) {
        //alert("PDF 파일을 업로드 해주시기 바랍니다.");		// hsji
		window.NEXACROHTML.FireUserNotify({ "EDITTYPE" : "EDIT", "UTYPE" : "UPLOAD", "STATUS" : -1 });	// hsji
        return;
      }

      //var status = new createStatusbar(obj); //Using this we can set progress.
      //status.setFileNameSize(fileName,fileSize);
      sendFileToServer(fd, status, fileName);

    }
  }

  function sendFileToServer(formData,status,fileName)
  {
    console.log(formData);
    console.log(fileName);
    //var uploadURL = "/fUpload"; //Upload URL
    var uploadURL = jsonUploadUrl;		// hsji
    var extraData ={}; //Extra Data.
    var jqXHR=$.ajax({
      xhr: function() {
        var xhrobj = $.ajaxSettings.xhr();
        console.log(xhrobj);
        if (xhrobj.upload) {
          xhrobj.upload.addEventListener('progress', function(event) {
            var percent = 0;
            var position = event.loaded || event.position;
            var total = event.total;
            if (event.lengthComputable) {
              percent = Math.ceil(position / total * 100);
            }
            //Set progress
            //status.setProgress(percent);
          }, false);
        }
        return xhrobj;
      },
      url: uploadURL,
      type: "POST",
      contentType:false,
      processData: false,
      cache: false,
      data: formData,
      success: function(data){
        console.log("sendFileToServer", data);

        if(data!=""){
          //var url = "./docuEditor.html?uploadFileName=" + data + "&uuid=" + uuid;
          //var url = "./docuEditor.html?uu=&uuid=" + uuid +"&fnm=" + fileName;
		  // hsji
		console.log(data);
		  if(data) {

			var data = JSON.parse(data);
			uploadFileName = data.filename;
			uuid = data.uuid;
			
			var elem = document.getElementById("fileUpload");
			if(elem) {
				elem.style.visibility = "hidden";
			}
			window.NEXACROHTML.FireUserNotify({ "EDITTYPE" : "EDIT", "UTYPE" : "UPLOAD", "STATUS" : 1, "docId" :  uuid });	// hsji
		  }
		  //uploadFileName = data;	//fileName;	
		  //url = encodeURI(url);
          //location.href = url;
		  LoadEditor();
        }
      }
    });

  //  status.setAbort(jqXHR);
  }

});

/*
'편집 내용 저장' 버튼
 */
function jsonSave() {
  var jsonData = JSON.parse(templatemod.getJsonData());
  jsonData.uuid = uuid;
  var postData = {'json_data' : jsonData, 'uuid' : uuid, 'sysCode' : sysCode, 
					'bizCode' : bizCode, 'userId' : userId, 'title' : jsonData.formTemplateName,
					'formers' : userList,
					'dvOptionList' : dvOptionList, 'expireDate' : expireDate };	// hsji
  console.log(jsonData);
  console.log(postData);
  $.ajax({
    type: "post",
    url: jsonSaveUrl,
    data: JSON.stringify(postData),
    dataType: "json",
    contentType: 'application/json; charset=utf-8',
    success: function(data) {
      console.log(data);
	  window.NEXACROHTML.FireUserNotify({ "EDITTYPE" : "EDIT", "UTYPE" : "SAVE", "docId" : uuid , 
					"fileName" : uploadFileName , "DATA" : data, "STATUS" : (data.code=="200"?1:-1) });	// hsji
      if(data.code=='200'){
        console.log('Json save success.');
        mailStep = true;
        //alert('편집 정보가 저장되었습니다.');	// hsji
      }
    },
    error: function(request,status,error) {
      console.log("code:"+request.status);
      console.log("message:"+request.responseText);
      console.log("error:"+error);
    }
  });
};

function mailSend() {
  if(mailStep) {
    // 입력된 값 가져오기
    var sender_nm = document.getElementById("udm_sender_nm").value;
    var template_title = document.getElementById("udm_template_title").value;
    var message = document.getElementById("udm_message").value;
    var sname = document.getElementById("udm_sender_nm").value;
    var semail = document.getElementById("udm_sender_email").value;
    var rname = document.getElementById("udm_reciever_nm").value;
    var remail = document.getElementById("udm_reciever_email").value;
    var rphone = document.getElementById("udm_reciever_phone").value;
    var expired_date = document.getElementById("udm_expired_date").value;
    var begin_date = new Date().toISOString().split('T')[0]; //오늘 날짜

	var jsonData = JSON.parse(templatemod.getJsonData());
	jsonData = isFormer(jsonData, 'N');//작성자 값 추출(jsonData, 삭제할 isFormer);
	//jsonData = setFormerList(JSON.parse(jsonData), "텍스트-1", "안녕하세요");
console.log(jsonData);
    // sendData 객체 생성
    var sendData = {
      'sender_nm': sender_nm,
      'template_title': template_title,
      'message': message,
      'receiver': {
        'name': rname,
        'email': remail,
        'phone': rphone
      },
      'sender': {
        'name': sname,
        'email': semail
      },
      'expired_date': expired_date,
      'begin_date': begin_date,
      'fileName': uploadFileName,
      'uuid': uuid,
	  'jsonData' : jsonData,
	  'dataset' : 'true'//변경해야함.
    };

    console.log(sendData);
    // AJAX 요청 전송
    $.ajax({
      type: "post",
      url: "/docuMailSend",
      data: JSON.stringify(sendData),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log(data);
        if (data.code == '200') {
          alert('메일이 발송 되었습니다.\n\n' + data.sign_url);
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      }
    });
  } else {
    alert("편집 후 [편집 내용 저장] 을 클릭 후 이용해 주시기 바랍니다.");
  }
}

/* 편집내용 불러오기 (uuid) */
  function jsonLoad( rUuid ) {
	  var url = "./docuEditor.html?uu=load&uuid=" + rUuid;
	  url = encodeURI(url);
	  location.href = url;
  }

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

function setFormerList(json, id, value) {
	var jsonData = json;
	console.log("formerList : " + id);
	console.log(jsonData);
	console.log(jsonData.formerList);
	jsonData.formerList.forEach(item => {
		item.pages.forEach(page => {
			page.fields.forEach(field => {
				if (field.m_fieldId === id) {
					field.m_value = value;
				}
			});
		});
	});
	return JSON.stringify(jsonData, null, 2);
}

function mailSendData(strJsonData) {
    // 입력된 값 가져오기
    console.log("mailSendData");
    var sjsonData = JSON.parse(strJsonData);
console.log("*****************************************");	
	console.log(sjsonData.발신자명);
console.log("*****************************************");	
    var sender_nm = sjsonData.발신자명;
    var template_title = sjsonData.문서제목;
    var message = sjsonData.알림내용;
    var sname = sjsonData.발신자명;
    var semail = sjsonData.발신자메일;
    var rname = sjsonData.수신자명;
    var remail = sjsonData.수신자메일;
    var rphone = sjsonData.수신자연락처;
    var expired_date = "2024-02-28";
    var begin_date = new Date().toISOString().split('T')[0]; //오늘 날짜

	var jsonData = JSON.parse(templatemod.getJsonData());
	jsonData = isFormer(jsonData, 'N');//작성자 값 추출(jsonData, 삭제할 isFormer);
	//jsonData = setFormerList(JSON.parse(jsonData), "텍스트-1", "안녕하세요");
	
	for(key in sjsonData) {
    	console.log('key:' + key + ' / ' + 'value:' + sjsonData[key]);
		jsonData = setFormerList(JSON.parse(jsonData), key, sjsonData[key]);
	}

console.log(jsonData);
    // sendData 객체 생성
    var sendData = {
      'sender_nm': sender_nm,
      'template_title': template_title,
      'message': message,
      'receiver': {
        'name': rname,
        'email': remail,
        'phone': rphone
      },
      'sender': {
        'name': sname,
        'email': semail
      },
      'expired_date': expired_date,
      'begin_date': begin_date,
      'fileName': uploadFileName,
      'uuid': uuid,
	  'jsonData' : jsonData,
	  'dataset' : 'true'//변경해야함.
    };

    console.log(sendData);
    // AJAX 요청 전송
    $.ajax({
      type: "post",
      url: "/docuMailSend",
      data: JSON.stringify(sendData),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log(data);
        if (data.code == '200') {
          console.log('메일이 발송 되었습니다.\n\n' + data.sign_url);
        }
      },
      error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      }
    });
}


/* json 데이터중 대상수신자  */
function isReceiver(json, val) {
	console.log("isReceiver : " + val);
	var jsonData = json;
	if(isEmpty(val)){
		val = 'N';
	}
	jsonData.formerList = jsonData.formerList.filter(item => item.userUUID == val);
	jsonData = JSON.stringify(jsonData, null, 2);
	return jsonData;
}

// hsji 
/* json 데이터중 대상발신자  */
function setFormerData(jsonData, receiverInfo) {
	// 복사본
	var jsonDataCopy = JSON.parse(JSON.stringify(jsonData));
	var objFormer = jsonDataCopy.formerList;
	var type = receiverInfo.receiveType;
	objFormer = objFormer.filter(item => item.userUUID == type);
	for(var key in receiverInfo) {
		objFormer = resetFormerData(objFormer, key, receiverInfo[key]);
	}
	var objFormerCopy = JSON.parse(JSON.stringify(objFormer));
	jsonDataCopy.formerList = objFormerCopy;
	return jsonDataCopy;
}

/* json 데이터중 대상수신자  */
function setReceiverData(jsonData, receiverInfo) {
	// 복사본
	var jsonDataCopy = JSON.parse(JSON.stringify(jsonData));
	var objFormer = jsonDataCopy.formerList;
	var type = receiverInfo.receiveType;
	objFormer = objFormer.filter(item => item.userUUID == type);
	for(var key in receiverInfo) {
		objFormer = resetFormerData(objFormer, key, receiverInfo[key]);
	}
	var objFormerCopy = JSON.parse(JSON.stringify(objFormer));
	jsonDataCopy.formerList = objFormerCopy;
	return jsonDataCopy;
}

function resetFormerData(objFormer, id, value) {
	if(!value || value == "") return objFormer;
	objFormer.forEach(item => {
		item.pages.forEach(page => {
			page.fields.forEach(field => {
				if (field.m_defaultValue === id) {
					field.m_value = value;
				}
			});
		});
	});
	return objFormer;
}


/* json 데이터 중 작성자(Y) 또는 참여자(N) 를 삭제 */
function getFormer(jsonString, receiverInfo) {
	var jsonDataCopy = JSON.parse(jsonString);
	var objFormer = jsonDataCopy.formerList;
	
	objFormer = objFormer.filter(item => item.isFormer !== 'N');	// 작성자
	for(var key in receiverInfo) {
		objFormer = resetFormerData(objFormer, key, receiverInfo[key]);
	}
	jsonDataCopy.formerList = objFormer;
	
	return jsonDataCopy;
}

function setFormerList(json, id, value) {
	var jsonData = json;
	//console.log("formerList : " + id);
	//console.log(jsonData);
	//console.log(jsonData.formerList);
	jsonData.formerList.forEach(item => {
		item.pages.forEach(page => {
			page.fields.forEach(field => {
				if (field.m_fieldId === id) {
					field.m_value = value;
				}
			});
		});
	});
	return JSON.stringify(jsonData, null, 2);
}


function mailSendDataN(strJsonData) {

    var oDatasetData = JSON.parse(strJsonData);
	var jsonString = templatemod.getJsonData();
	var jsonData = JSON.parse(jsonString);
	var receivers = oDatasetData.receiver;	// 수신자
	var receiverInfo, type;
	for(var i=0,len=receivers.length;i<len;i++) {
		receiverInfo = receivers[i];
		receiverInfo.jsonData = getFormer(jsonString, receiverInfo)
	}
	//console.log("----mailSendDataN--", oDatasetData);
	
    // AJAX 요청 전송
    $.ajax({
      type: "post",
      url: jsonMailUrl,
      data: JSON.stringify(oDatasetData),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log(data);
        if (data.code == '200') {
			window.NEXACROHTML.FireUserNotify({ "EDITTYPE" : "EDIT", "UTYPE" : "SENDMAIL", "STATUS" : 1 });
          console.log('메일이 발송 되었습니다.\n\n' + data.sign_url);
        }
      },
      error: function (request, status, error) {
		  window.NEXACROHTML.FireUserNotify({ "EDITTYPE" : "EDIT", "UTYPE" : "SENDMAIL", "STATUS" : -1 });
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
      }
    });
}