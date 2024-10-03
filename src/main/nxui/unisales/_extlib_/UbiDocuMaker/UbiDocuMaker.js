//==============================================================================
//	Define the Component Class of the Compostie Component.
//==============================================================================
//==============================================================================
// Object : nexacro.UbiDocuMaker
// Group : Component
//==============================================================================
if (!nexacro.UbiDocuMaker)
{
    nexacro.UbiDocuMakerNotifyEventInfo = function(scope, gubun, data) {
        this.id = this.eventid = "onnotify";
        this.fromobject = this.fromreferenceobject = scope;
        this.type = gubun;
		this.data = data;
    };
	
    var _pUbiDocuMakerNotifyEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.UbiDocuMakerNotifyEventInfo);
    nexacro.UbiDocuMakerNotifyEventInfo.prototype = _pUbiDocuMakerNotifyEventInfo;
    _pUbiDocuMakerNotifyEventInfo._type_name = "UbiDocuMakerEventInfo";
    delete _pUbiDocuMakerNotifyEventInfo;
	//==============================================================================
	// nexacro.UbiDocuMaker
	//==============================================================================
	nexacro.UbiDocuMaker = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro._CompositeComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pUbiDocuMaker = nexacro._createPrototype(nexacro._CompositeComponent, nexacro.UbiDocuMaker);
	nexacro.UbiDocuMaker.prototype = _pUbiDocuMaker;
	_pUbiDocuMaker._type_name = "UbiDocuMaker";
	
	/* accessibility */
	_pUbiDocuMaker.accessibilityrole = "form";
	
    _pUbiDocuMaker._event_list = {
        "onnotify": 1
	};	
	
	/**
	*  UbiDocuMaker ExtComponent
	*  @FileName 	UbiDocuMaker.xcdl
	*  @Creator 		DXTOBE
	*  @CreateDate 	2024/02/02
	*  @Desction   
	************** 소스 수정 이력 ***********************************************
	* Date					Modifier					Description
	*******************************************************************************
	* 2024/02/02			DXTOBE					최초생성
	*******************************************************************************
	*/
	
	/*
	 * 변수 선언 영역
	*/
	
	// UbiDocuMaker Properties
	/*
	_pUbiDocuMaker.editorPath = null;									// HTML 파일 경로
	_pUbiDocuMaker.viewType = "dmedit";								// Edit mode
	_pUbiDocuMaker.editorFileName = "docuEditor.html";			// Edit mode FileName
	_pUbiDocuMaker.viewerFileName = "docuViewer.html";			// View mode FileName
	_pUbiDocuMaker.bizFormUrl = "";										// 업무 연계시 연계 업무 prefix
	*/
	_pUbiDocuMaker._p_parent = null;
	_pUbiDocuMaker._p_editorPath = null;								// HTML 파일 경로
	_pUbiDocuMaker._p_viewType = "dmedit";							// Edit mode
	_pUbiDocuMaker._p_editorFileName = "docuEditor.html";		// Edit mode FileName
	_pUbiDocuMaker._p_viewerFileName = "docuViewerOnly.html";	// View mode FileName
	_pUbiDocuMaker._p_bizFormUrl = "";									// 업무 연계시 연계 업무 prefix
	_pUbiDocuMaker._p_autoSaveMsg = true;							// 업무 연계시 연계 업무 prefix
	
	_pUbiDocuMaker._isPageLoaded = false;					// 페이지 로딩 완료 여부
	_pUbiDocuMaker._bLoadEditor = false;						// 에디터 메소드 실행 여부
	_pUbiDocuMaker._bSetFieldInfo = false;						// 에디터 메소드 실행 여부
	_pUbiDocuMaker._bFormerInfo = false;						// 에디터 메소드 실행 여부
	_pUbiDocuMaker._bSetDocinfo = false;						// 에디터 메소드 실행 여부
	
	_pUbiDocuMaker._scope = null;
	_pUbiDocuMaker._callBack = null;	
	
	_pUbiDocuMaker._lang = "ko";				// 언어
	
	_pUbiDocuMaker._langText = {
			"ko" :  { 
						"i001" 				: "문서제목을 확인하십시오.",
						"i002" 				: "시스템코드를 확인하십시오.",
						"i003" 				: "업무코드를 확인하십시오.",
						"i004" 				: "발송정보가 없습니다.",
						"i005" 				: "수신정보가 없습니다.",
						"i006" 				: "메일을 발송하시겠습니까?",
						"i007" 				: "저장하시겠습니까?",
						"i008" 				: "메일이 발송 되었습니다.",
						"i009" 				: "메일 발송에 실패하였습니다.",
						"s001" 				: "편집 정보가 저장되었습니다.",
						"e001" 				: "편집 정보 저장을 실패하였습니다."
			},
			"en" :  { 
						"i001" 				: "문서제목을 확인하십시오.",
						"i002" 				: "시스템코드를 확인하십시오.",
						"i003" 				: "업무코드를 확인하십시오.",
						"i004" 				: "발송정보가 없습니다.",
						"i005" 				: "수신정보가 없습니다.",
						"i006" 				: "메일을 발송하시겠습니까?",
						"i007" 				: "저장하시겠습니까?",
						"i008" 				: "메일이 발송 되었습니다.",
						"i009" 				: "메일 발송에 실패하였습니다.",
						"s001" 				: "편집 정보가 저장되었습니다.",
						"e001" 				: "편집 정보 저장을 실패하였습니다."
			},
			"jp" :  { 
						"i001" 				: "문서제목을 확인하십시오.",
						"i002" 				: "시스템코드를 확인하십시오.",
						"i003" 				: "업무코드를 확인하십시오.",
						"i004" 				: "발송정보가 없습니다.",
						"i005" 				: "수신정보가 없습니다.",
						"i006" 				: "메일을 발송하시겠습니까?",
						"i007" 				: "저장하시겠습니까?",
						"i008" 				: "메일이 발송 되었습니다.",
						"i009" 				: "메일 발송에 실패하였습니다.",
						"s001" 				: "편집 정보가 저장되었습니다.",
						"e001" 				: "편집 정보 저장을 실패하였습니다."
			}
	};
	_pUbiDocuMaker._on_bubble_beforeclose = function(_a, _b, _c, _d) {
		if(this._p_parent) {
			return this._p_parent._on_bubble_beforeclose(_a, _b, _c, _d);
		}
	};
		
	_pUbiDocuMaker._on_bubble_close = function(_a, _b, _c) {
		if(this._scope) this._scope = null;
		if(this._callBack) this._callBack = null;
		if(this._p_doc_ds) this._p_doc_ds = null;
		if(this._p_former_ds) this._p_former_ds = null;
		if(this._p_field_ds) this._p_field_ds = null;
		if(this._p_field_ds) this._p_field_ds = null;
		
		if(this._p_parent) {
			return this._p_parent._on_bubble_close(_a, _b, _c);
		}
	};
	/*******************************************************************************************************************************
	 * Properties
	*******************************************************************************************************************************/
	/**
	 * @class 업무와 연결역할화면 연결 - 공통팝업등
	 * @param {String} v - form url aaa::bbb.xfdl
	 * @return N/A
	 * example : set_editonly(true);
	 */   
	_pUbiDocuMaker.set_autoSaveMsg = function(v)	{
		this._p_autoSaveMsg = nexacro._toBoolean(v);
	};		
	
	/**
	 * @class 업무와 연결역할화면 연결 - 공통팝업등
	 * @param {String} v - form url aaa::bbb.xfdl
	 * @return N/A
	 * example : set_editonly(true);
	 */   
	_pUbiDocuMaker.set_bizFormUrl = function(v)	{
		this._p_bizFormUrl = v;
		this.form.divComm.set_url(this._p_bizFormUrl);
	};		
	
	/**
	 * @class editor type 설정
	 * @param {String} v - dmedit, dmview 선택
	 * @return N/A
	 * example : set_editonly(true);
	 */   
	_pUbiDocuMaker.set_viewType = function(v)	{
		var arr = ["dmedit", "dmview"];
		if(arr.indexOf(v) < 0) return;
		
		var type = this._p_viewType;
		this._p_viewType = v;
		if(this._isNull(this._p_editorPath) == false && type != v) {
			this.set_editorPath(this._p_editorPath);
		}
	};
	
	/**
	 * @class editor path
	 * @param {String} filename  'http://....docuEditor.html'
	 * @return N/A
	 */   
	_pUbiDocuMaker.set_editorPath = function(url)	{
		if(this._emptyToNull(url) == null) return;
		
		this._isPageLoaded = false;
		this._bLoadEditor = false;						// 에디터 메소드 실행 여부
		this._bSetFieldInfo = false;						// 에디터 메소드 실행 여부
		this._bFormerInfo = false;						// 에디터 메소드 실행 여부
		this._bSetDocinfo = false;						// 에디터 메소드 실행 여부
		
		var form = this._getRootForm();
		var _j = nexacro._getServiceLocation(url, form._base_url, null, false);
		this._p_editorPath = this._emptyToNull(_j);
		
		this._writeLog("set_editorUrl : " + url + " >> real path : " + this._p_editorPath);
		
		var strFileName = this._p_editorFileName;
		if(this.viewType == "dmview") {
			strFileName = this._p_viewerFileName;
		}
		
		var slashStr = "/";
		if((this._p_editorPath.length-1) == this._p_editorPath.lastIndexOf("/")) {
			slashStr = "";
		}

		this._writeLog("set_editorPath param : " + url + " >> real path : " + this._p_editorPath + slashStr + strFileName);
		
		this._getWebBrowser().set_url(this._p_editorPath + slashStr + strFileName);
	};		
	
	/**
	 * @class editor FileName
	 * @param {String} filename  'docuEditor.html'
	 * @return N/A
	 */   
	_pUbiDocuMaker.set_editorFileName = function(name)	{
		if(this._emptyToNull(name) == null) return;
		this._p_editorFileName = name;
	};			
	
	/**
	 * @class viewer FileName
	 * @param {String} filename  'docuEditor.html'
	 * @return N/A
	 */   
	_pUbiDocuMaker.set_viewerFileName = function(name)	{
		if(this._emptyToNull(name) == null) return;
		this._p_viewerFileName = name;
	};			
	
	/*******************************************************************************************************************************
	 * Bind 영역
	*******************************************************************************************************************************/

	/*******************************************************************************************************************************
	 * Method
	*******************************************************************************************************************************/
	/**
	 * @class debug move 
	 * @param {Boolean} v - debug 여부
	 * @return N/A
	 */   
	_pUbiDocuMaker.setDebugMode = function(v)	{
		this._isDebug = nexacro._toBoolean(v);
	};	
	
	/**
	 * @class setFormerInfo
	 * @description 문서사용자 정보 dataset을 받는다 - format은 지정
	 * @param {Object} ds - dataset
	 * @return N/A
	 */   
	_pUbiDocuMaker.setFormerInfo = function(ds)	{
		this._writeLog("setFormerInfo  : " + ds.name);
		this._p_former_ds = ds;
		
		if(this._isPageLoaded == false) {
			this._bFormerInfo = true;
			return true;		
		}				
		
		if(ds && ds.rowcount > 0) {
			var info = this._getFormerInfo();
			this._writeConsoleLog("callMethod setFormerInfo  : " , info);
			
			var wb = this._getWebBrowser();
			wb.callMethod("SetFormerInfo", JSON.stringify(info));			
		}
	};		

	_pUbiDocuMaker._getFormerInfo = function()	{
		if(!this._p_former_ds) {
			this._p_former_ds = this.form.dsFormerInfo;
		}
		var ds = this._p_former_ds;
		if(!ds || ds.rowcount == 0) return;
		
		var userList = [];
		for(var i = 0 ; i < ds.getRowCount(); i++) {
			var objInfo = {};
			objInfo.displayUserName 	= ds.getColumn(i, "FORMER_NAME");
			objInfo.userUUID  			= ds.getColumn(i, "FORMER_ID");
			objInfo.isFormer   			= ds.getColumn(i, "FORMER_YN");
			userList.push(objInfo);
		}
		return userList;
	};		

	/**
	 * @class setFieldInfo
	 * @description 문서필드 정보 dataset을 받는다 - format은 지정
	 * @param {Object} ds - dataset
	 * @return N/A
	 */   
	_pUbiDocuMaker.setFieldInfo = function(ds)	{
		this._writeLog("setFieldInfo  : " + ds.name);
		this._p_field_ds = ds;
		
		if(this._isPageLoaded == false) {
			this._bSetFieldInfo = true;
			return;		
		}		
		
		if(ds && ds.rowcount > 0) {
			var info = this._getFieldInfo();
			this._writeConsoleLog("callMethod setFieldInfo  : " , info);
			
			var wb = this._getWebBrowser();
			wb.callMethod("setFieldInfo", JSON.stringify(info));			
		}		
	};		
	
	_pUbiDocuMaker._getFieldInfo = function()	{
		var ds = this._p_field_ds;
		if(!ds || ds.rowcount == 0) return;
		
		var fieldList = [];
		for(var i = 0 ; i < ds.getRowCount(); i++) {
			var objInfo = {};
			objInfo.displayText = ds.getColumn(i, "FIELD_NAME");
			objInfo.variable  = ds.getColumn(i, "FIELD_ID");
			objInfo.mask  = ds.getColumn(i, "FIELD_MASK") || "";
			objInfo.formerId  = ds.getColumn(i, "FORMER_ID");
			fieldList.push(objInfo);
		}		
		return fieldList;
	};		
	
	/**
	 * @class getLangText
	 * @description domain text
	 * @return {String} domain text
	 */   
	_pUbiDocuMaker.getLangText = function(code)	{
		var lang = this._langText[this._lang];
		return lang[code];
	};
	
	/**
	 * @class setLang
	 * @description language 설정
	 * @return N/A
	 */   
	_pUbiDocuMaker.setLang = function(code)	{
		this._lang = code;
	};
	
	/**
	 * @class getLangText
	 * @description domain text
	 * @return {String} domain text
	 */
	_pUbiDocuMaker.setLangValue = function(code, objValue)	{
		this._langText[code] = objValue;
	};
	
	/**
	 * @class setDocInfo
	 * @description 문서정보 dataset을 받는다 - format은 지정
	 * @param {Object} ds - dataset
	 * @return N/A
	 */   
	_pUbiDocuMaker.setDocInfo = function(ds, index)	{
		this._writeLog("setDocInfo  : " + ds.name + " index:" + index);
		this._p_doc_ds = ds;
		this._p_doc_ds_index = index || 0;
		
		if(this._isPageLoaded == false) {
			this._bSetDocinfo = true;
			return true;		
		}
		
		if(ds && ds.rowcount > 0) {
			var colInfo = ds.getColumnInfo("docStatus");
			if(!colInfo) {
				ds.addColumn("docStatus", "string");
			}
			if(this._isNull(ds.getColumn(this._p_doc_ds_index, "DOC_ID"))) {
				if(this._isNull(ds.getColumn(this._p_doc_ds_index, "DOC_TITLE"))) {
					this.showMsg("", "", this.getLangText("i001"));
					return false;
				}
				if(this._isNull(ds.getColumn(this._p_doc_ds_index, "SYS_CODE"))) {
					this.showMsg("", "", this.getLangText("i002"));
					return false;
				}
				if(this._isNull(ds.getColumn(this._p_doc_ds_index, "BIZ_CODE"))) {
					this.showMsg("", "", this.getLangText("i003"));
					return false;
				}
				ds.setColumn(this._p_doc_ds_index, "docStatus", "I");
			}
			var info = this._getDocInfo();
			this._writeConsoleLog("callMethod setDocInfo  : " , info);
			
			var wb = this._getWebBrowser();
			wb.callMethod("SetDocInfo", JSON.stringify(info));			
		} else {
			trace("[ ::: UbiDoc ::: ]\t" + "문서정보가 없습니다.");
		}
		
		return true;
	};			
	
	_pUbiDocuMaker._getDocInfo = function()	{
		var ds = this._p_doc_ds;
		if(!ds || ds.rowcount == 0) return;
		
		var docInfo = { "signtabShowOption" : { "useDrawSign" : "true", "useImageSign" : "true", "useRegSign" : "true"} };
		var index = this._p_doc_ds_index;
		docInfo.id 			= ds.getColumn(index, "DOC_ID") || "";
		docInfo.title 		= ds.getColumn(index, "DOC_TITLE") || "";
		docInfo.sysCode	= ds.getColumn(index, "SYS_CODE") || "";
		docInfo.bizCode 	= ds.getColumn(index, "BIZ_CODE") || "";
		docInfo.userId	= ds.getColumn(index, "INPT_ID") || "";
		docInfo.seq		= ds.getColumn(index, "SEND_SEQ") + "";
		docInfo.expireDate	= ds.getColumn(index, "EXPIRE_DATE") || "";
		docInfo.signtabShowOption.useDrawSign 	= this._intToBoolString(ds.getColumn(index, "DRAWSIGN_FLAG")) || "true";
		docInfo.signtabShowOption.useImageSign 	= this._intToBoolString(ds.getColumn(index, "DRAWIMAGE_FLAG")) || "true";
		docInfo.signtabShowOption.useRegSign 		= this._intToBoolString(ds.getColumn(index, "REFIMAGE_FLAG") )|| "true";
		
		return docInfo;
	};			
	
	_pUbiDocuMaker._intToBoolString = function(v)	{
		if(v === 1) return "true";
		else "false";
	};
	
	/**
	 * @class callback 지정
	 * @param {Object} scope - form
	 * @param {Object} callBack - callBack func
	 * @return N/A
	 * example : setCallback(this, this.callback);
	 */   
	_pUbiDocuMaker.setCallback = function(scope, callBack)	{
		this._writeLog("Callback 설정 Form  : " + scope._orgurl + " - " + typeof(callBack));
		this._scope = scope;
		this._callBack = callBack;
	};	
	
	/**
	 * @class 웹브라우저 event를 화면 영역에 전달 - 내부용
	 * @param {Object} data - 결과
	 * @return N/A
	 * example : returnCallback({});
	 */   
	_pUbiDocuMaker._returnCallback = function(gubun, data)	{

		if(data.UTYPE == "INIT") {	// PAGE INIT
			this._isPageLoaded = true;
			
			if(this._bSetDocinfo == true) {
				this.setDocInfo(this._p_doc_ds, this._p_doc_ds_index);
				this._bSetDocinfo = false;
			}
			if(this._bFormerInfo == true) {
				this.setFormerInfo(this._p_former_ds);
				this._bFormerInfo = false;
			}
			if(this._bSetFieldInfo == true) {
				this.setFieldInfo(this._p_field_ds);
				this._bSetFieldInfo = false;
			}

			if(this._bLoadEditor == true) {
				this.loadEditor();
			}
		} else if(data.UTYPE == "UPLOAD") {
			if(data.STATUS == 1) {
				var ds = this._p_doc_ds;
				if(this._isNull(ds.getColumn(this._p_doc_ds_index, "DOC_ID"))) {
					ds.setColumn(this._p_doc_ds_index, "DOC_ID", data.docId);
				}
			}
		} else if(data.UTYPE == "LOAD") {
			this._openPDFFile = data.PDFFILE;
		} else if(data.UTYPE == "SAVE") {
			if(data.DATA.code == "200") {
				var ds = this._p_doc_ds;
				if(this._isNull(ds.getColumn(this._p_doc_ds_index, "DOC_ID"))) {
					ds.setColumn(this._p_doc_ds_index, "DOC_ID", data.docId);
					ds.setColumn(this._p_doc_ds_index, "PDF_ORIG_FILE_NM", data.fileName);
					
					var editInfo = ds.getColumn(this._p_doc_ds_index, "EDIT_INFO");
					if(!editInfo || editInfo == "") {
						var docInfo = this.getDocInfo();
						if(docInfo) {
							ds.setColumn(this._p_doc_ds_index, "EDIT_INFO", JSON.stringify(docInfo.editinfo));
						}
					}
				}
				if(this._p_autoSaveMsg != false)  {
					this.showMsg("alert","",this.getLangText("s001"));
				}
			} else {
				if(this._p_autoSaveMsg != false)  {
					this.showMsg("alert","",this.getLangText("s002"));
				}
			}
		} else if(data.UTYPE == "SENDMAIL") {
			if(data.STATUS == 1) {
				if(this._p_autoSaveMsg != false)  {
					this.showMsg("alert","",this.getLangText("i008"));
				}
			} else {
				if(this._p_autoSaveMsg != false)  {
					this.showMsg("alert","",this.getLangText("i009"));
				}
			}
		}
		
	
        if (this.onnotify && this.onnotify._has_handlers) {
            var _c = new nexacro.UbiDocuMakerNotifyEventInfo(this, gubun, data);
            _c.eventid = "onnotify";
            this.onnotify._fireEvent(this, _c);
        }
		
		
		/*
		if(this._scope && this._callBack) {
			this._callBack.call(this._scope, gubun, data);
			return;
		}
		*/
	};		
	/**
	 * @class empty string인 경우 null로 return
	 * @param {String} sValue - 확인 대상 Dataset
	 * @return {String} 결과문자
	 */   
	_pUbiDocuMaker._emptyToNull = function(sValue)
	{
		if(sValue == "")
		{
			sValue = null;
		}
		return sValue;
	};	
	
	/**
	 * @class null값 확인
	 * @param {String} sValue - 확인 대상 value
	 * @return {boolean}
	 */   
	_pUbiDocuMaker._isNull = function(sValue)
	{
		if (new String(sValue).valueOf() == "undefined") return true;
		if (sValue == null) return true;
		
		var ChkStr = new String(sValue);

		if (ChkStr == null) return true;
		if (ChkStr.toString().length == 0 ) return true;
		return false;
	};	
	
	/**
	 * @class 웹브라우저 얻기. <br>
	 * @param N/A
	 * @return {Object} webBrowser 
	 */
	_pUbiDocuMaker._getWebBrowser = function() 
	{
		return this.form.divEditor.form.UbiDocuMakerWb;
	};	
	
	/**
	 * @class 팝업콜백. <br>
	 * @param {String} ID - 팝업 ID
	 * @param {Variant} RTN - RETURN VALUE
	 * @return N/A
	 */
	_pUbiDocuMaker._PopupCallBack = function(id, rtn) 
	{
		if(id == "sendmail") {
			if(rtn == false) {
				this._dsMailInfo = this._dsReceiver = null;
				this._returnCallback("CANCELMAIL",{ "UTYPE" : "CANCELMAIL" })
			} else {
				this._sendMail();
			}
		} else if(id == "save") {
			if(rtn == false) {
				this._returnCallback("CANCELSAVE",{ "UTYPE" : "CANCELSAVE" })
				return;
			}
			var wb = this._getWebBrowser();
			return wb.callMethod("JsonSaveProc");
		}
	};	
	
	/**
	 * @class alert 팝업. <br>
	 * @param {String} type - alert, confirm
	 * @param {String} id - 팝업 id
	 * @param {String} text - 출력할 text
	 * @return N/A
	 */
	_pUbiDocuMaker.showMsg = function(type, id, text) 
	{
		if(type != "confirm") type = "alert";
		if(!this.bizFormUrl || this.bizFormUrl == "") {
			if(type == "alert") {
				alert(text);
			} else {
				var rtn = confirm(text);
				this._PopupCallBack(id, rtn);
			}
		} else {
			this.form.divComm.form.fnOpenPopup(this, this._PopupCallBack, type, id, text);
		}
	};
	
	/**
	 * @class 로그출력. <br>
	 * @param {String} v - 출력할 text
	 * @return N/A
	 */
	_pUbiDocuMaker._writeLog = function(v, required) 
	{
		if(this._isDebug == false && !required) return;
		
		trace("[ ::: UbiDoc ::: ]\t" + v);
	};
	
	_pUbiDocuMaker._writeConsoleLog = function(v, info) 
	{
		if(this._isDebug == false) return;
		
		console.log("[ ::: UbiDoc ::: ]\t" , v, info);
	};	
	
	/**
	 * @class 문서를 오픈한다. <br>
	 * @param N/A
	 * @return N/A
	 */
	_pUbiDocuMaker.loadEditor = function() 
	{
		if(this._isPageLoaded == false) {
			this._bLoadEditor = true;
			return;
		}
	
		var wb = this._getWebBrowser();
		wb.callMethod("LoadEditor");
	};
	
	/**
	 * @class 문서 정보를 가져온다. <br>
	 * @return {Object} 문서정보 { docId : , fileName : , editInfo : }
	 */
	_pUbiDocuMaker.getDocInfo = function() 
	{
		var wb = this._getWebBrowser();
		var docInfo = wb.callMethod("getDocInfo");
		return JSON.parse(docInfo);
	};	

	/**
	 * @class 메일발송. <br>
	 * @return N/A
	 */
	_pUbiDocuMaker.sendMail = function(dsMailInfo, dsReceiver) 
	{
		if(!dsMailInfo || dsMailInfo.rowcount == 0) {
			this.showMsg("alert", "", this.getLangText("i004"));
			return;
		}
		if(!dsReceiver || dsReceiver.rowcount == 0) {
			this.showMsg("alert", "", this.getLangText("i005"));
			return;
		}
		this._dsMailInfo = dsMailInfo;
		this._dsReceiver = dsReceiver;
		this.showMsg("confirm", "sendmail", this.getLangText("i006"));
	};	
	
	_pUbiDocuMaker._signCheck = function(v) 
	{
		if(v == 1 || v == "1" || v == "true") return "1";
		else return "0";
	};
	
	_pUbiDocuMaker._sendMail = function(pParam) 
	{
		var dsMailInfo = this._dsMailInfo;
		var nRowPos   = dsMailInfo.rowposition;
		var dsReceiver = this._dsReceiver;
		
		var uuid 				= dsMailInfo.getColumn(nRowPos, "DOC_ID");
		var mailTitle 			= dsMailInfo.getColumn(nRowPos, "SEND_TITLE") || dsMailInfo.getColumn(0, "DOC_TITLE");
		var mailMessage		= dsMailInfo.getColumn(nRowPos, "SEND_MESSAGE");
		var beginDate 		= new Date().toISOString().split('T')[0]; //오늘 날짜
		var expiredDate 		= dsMailInfo.getColumn(nRowPos, "EXPIREMAIL_DATE");
		
		var senderId 			= dsMailInfo.getColumn(nRowPos, "SEND_ID");
		var senderName 		= dsMailInfo.getColumn(nRowPos, "USER_NAME");
		var senderMail 		= dsMailInfo.getColumn(nRowPos, "USER_MAILADDR");
		var senderPhone		= dsMailInfo.getColumn(nRowPos, "USER_PHONE");
		var sysCode 			= dsMailInfo.getColumn(nRowPos, "SYS_CODE");
		var bizCode			= dsMailInfo.getColumn(nRowPos, "BIZ_CODE");		
		var certType			= dsMailInfo.getColumn(nRowPos, "CERT_TYPE") || "1";	
		var sendType			= dsMailInfo.getColumn(nRowPos, "SEND_TYPE") || "1";	
		var signType			= dsMailInfo.getColumn(nRowPos, "SIGN_TYPE") || "1";	
		var drawSign			= this._signCheck(dsMailInfo.getColumn(nRowPos, "DRAWSIGN_FLAG")) || "1";	
		var imageSign			= this._signCheck(dsMailInfo.getColumn(nRowPos, "DRAWIMAGE_FLAG") ) || "1";	
		var regSign				= this._signCheck(dsMailInfo.getColumn(nRowPos, "REFIMAGE_FLAG")) || "1";	
		var sendData = {
				'title'					: 	mailTitle,
				'message'			: 	mailMessage,
				'receiver'			: [],
				'sender': {
						'id'			: senderId,
						'name'		: senderName,
						'email'		: senderMail,
						'phone'		: senderPhone
				},
				'expiredDate'		: expiredDate,
				'beginDate'		: beginDate,
				'uuid'				: uuid,
				'sysCode'			: sysCode,
				'bizCode'			: bizCode,
				'dataset' 			: 'true',	//변경해야함.
				'drawSign'			: drawSign,
				'imageSign'		: imageSign,
				'regSign'			: regSign,
				'certType'		: certType,
				'sendType'		: sendType,
				'signType'		: signType
		};
		
		var arrCols = [];
		for(var i=0,len=dsReceiver.colcount;i<len;i++) {
			arrCols.push(dsReceiver.getColumnInfo(i).name);
		}
		
		for(var i=0,len=dsReceiver.rowcount;i<len;i++) {
				var objReveive = {};
				for(var j=0,lenj=arrCols.length;j<lenj;j++) {
					objReveive[arrCols[j]] = dsReceiver.getColumn(i, arrCols[j]);
				}
				objReveive["sysCode"] = sysCode;
				objReveive["bizCode"] = bizCode;
				objReveive["uuid"] 	 = uuid;
				sendData.receiver.push(objReveive);
		}
		
		this._dsMailInfo = this._dsReceiver = arrCols = null;
	
		var wb = this._getWebBrowser();
		if(pParam == "SAVE") {
			wb.callMethod("SaveDoc", JSON.stringify(sendData));	
		} else {
			wb.callMethod("SendMail", JSON.stringify(sendData));	
		}
	};
	
	/**
	 * @class 메일발송. <br>
	 * @return N/A
	 */
	_pUbiDocuMaker.saveDoc = function(dsMailInfo, dsReceiver) 
	{
		if(!dsMailInfo || dsMailInfo.rowcount == 0) {
			this.showMsg("alert", "", this.getLangText("i004"));
			return;
		}
		if(!dsReceiver || dsReceiver.rowcount == 0) {
			this.showMsg("alert", "", this.getLangText("i005"));
			return;
		}
		this._dsMailInfo = dsMailInfo;
		this._dsReceiver = dsReceiver;
		
		this._sendMail("SAVE");
	};		

	
	/**
	 * @class 편집정보를 저장한다. <br>
	 * @return N/A
	 */
	_pUbiDocuMaker.saveEditor = function() 
	{
		this.showMsg("confirm", "save", this.getLangText("i007"));
	};
	
	/**
	 * @class 버튼 visible 처리를 세팅. <br>
	 * @param {Array} arrVisible - 버튼 visible
	 * @return N/A
	 */
	_pUbiDocuMaker.arrangeButton = function(arrVisible) 
	{
		this._writeLog("arrangeButton Default : [label, text, multiline, image, sign, check, radio, combo, date, number]");
		this._writeLog("arrangeButton Set : " + arrVisible);
		var wb = this._getWebBrowser();
		wb.callMethod("arrangeButton", JSON.stringify({ "btn" : arrVisible }));	
	};		
	
    _pUbiDocuMaker._properties = [{
        name: "editorPath"
    }, {
        name: "viewType"
    }, {
        name: "editorFileName"
    }, {
        name: "viewerFileName"
    }, {
        name: "bizFormUrl"
    }];
    nexacro._defineProperties(_pUbiDocuMaker, _pUbiDocuMaker._properties);	

	delete _pUbiDocuMaker;
}


	
	
	/************************************************************************
	FUNCTION : _get_form_module
	DESCRIPTION :
	RETURN :
	************************************************************************/
	nexacro.UbiDocuMaker.prototype._get_form_module = function ()
	{
		return function()
		{
			if (!this._is_form)
			return;
			
			var obj = null;
			
			this.on_create = function()
			{
				this.set_name("UbiDocuMaker");
				this.set_titletext("UbiDocuMaker");
				this.set_background("#ffffff");
				if (nexacro.Form == this.constructor)
				{
					this._setFormPosition(800,600);
				}
				
				// Object(Dataset, ExcelExportObject) Initialize
				obj = new nexacro.NormalDataset("dsFormerInfo", this);
				obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"order\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col><Col id=\"order\">1</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col><Col id=\"order\">2</Col></Row></Rows>");
				this.addChild(obj.name, obj);
				
				// UI Components Initialize
				obj = new nexacro.Div("divEditor","0","0",null,null,"0","0",null,null,null,null,this);
				obj.set_taborder("0");
				obj.set_positionstep("0");
				obj.set_visible("true");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.WebBrowser("UbiDocuMakerWb","0","0",null,null,"0","0",null,null,null,null,this.divEditor.form);
				obj.set_taborder("0");
				this.divEditor.addChild(obj.name, obj);
				
				obj = new nexacro.Div("divComm","0","0","0","0",null,null,null,null,null,null,this.divEditor.form);
				obj.set_taborder("1");
				this.divEditor.addChild(obj.name, obj);
				
				obj = new nexacro.ImageViewer("ImageViewer00","0","0",null,null,"0","0",null,null,null,null,this);
				obj.set_taborder("1");
				obj.set_image("url(\'imagerc::UbiDocuMaker/doc.png\')");
				this.addChild(obj.name, obj);
				
				obj = new nexacro.Div("divComm","0","0","0","0",null,null,null,null,null,null,this);
				obj.set_taborder("2");
				this.addChild(obj.name, obj);
				// Layout Functions
				//-- Default Layout : this.divEditor.form.divComm
				obj = new nexacro.Layout("default","",0,0,this.divEditor.form.divComm.form,function(p){});
				this.divEditor.form.divComm.form.addLayout(obj.name, obj);
				
				//-- Default Layout : this.divEditor.form
				obj = new nexacro.Layout("default","",0,0,this.divEditor.form,function(p){});
				this.divEditor.form.addLayout(obj.name, obj);
				
				//-- Default Layout : this.divComm
				obj = new nexacro.Layout("default","",0,0,this.divComm.form,function(p){});
				this.divComm.form.addLayout(obj.name, obj);
				
				//-- Default Layout : this
				obj = new nexacro.Layout("default","",800,600,this,function(p){});
				this.addLayout(obj.name, obj);
				
				// BindItem Information
				
			};
			
			this.loadPreloadList = function()
			{
				
			};
			
			// User Script
			this.registerScript("UbiDocuMaker.xcdl", function() {
					this._onload = function(obj,e)
					{
						this.ImageViewer00.set_visible(false);
						
						this.parent.setFormerInfo(this.dsFormerInfo);
						
						/* alert form link */
						if(this.parent.bizFormUrl && this.parent.bizFormUrl != "") {
							this.divComm.set_url(this.parent.bizFormUrl); 	// alert 등 업무 영역
						}
					};
					
					/*******************************************************************************************************************************
					* 각 COMPONENT 별 EVENT 영역
					*******************************************************************************************************************************/
					this.divEditor_UbiDocuMakerWb_onusernotify = function(obj,e)
					{
						if(e.userdata) {
							this.parent._writeLog("웹브라우저 NOTIFY : " + e.userdata);
							var objData = JSON.parse(e.userdata);
							this.parent._returnCallback("NOTIFY", objData);
						}
					};
					
					/*
					상단 STEP TEXT 및 위치 변경
					*/
					this.fnComAlert = function(sPopupId, oArg, oPopupCallback, oOption)
					{
						this.divComm.form.fnOpenPopup(this, sPopupId, oArg, oPopupCallback, oOption);
					};
					
					this.PopupCallback = function(id, rtn) {
						if(id == "TITLE") {
							this.divIntro.form.edtDocName.setFocus();
						}
					};
					
					this._notify = function(id) {
						this.divIntro.form.resetScroll();
						
						this.resetScroll();
					};
					
					
					
				});
			
			// Regist UI Components Event
			this.on_initEvent = function()
			{
				this.addEventHandler("onload",this._onload,this);
				this.divEditor.form.UbiDocuMakerWb.addEventHandler("onusernotify",this.divEditor_UbiDocuMakerWb_onusernotify,this);
			};
			this.loadIncludeScript("UbiDocuMaker.xcdl");
			this.loadPreloadList();
			
			// Remove Reference
			obj = null;
		};
	};
