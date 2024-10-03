/**
 * TPL Settings
 *
 */
var strLauncherFileName = "TPLSvc_Setup.exe";                       //런처파일명   
//var sProtocol   = window.location.protocol;		// HTTPS는 인증서 분제로 HTTP로 FIX
//var bHttps      = (sProtocol == "https:");
var openurl     = "http://127.0.0.1";    //고정(변경불가) https 를 사용 할 경우 https://127.0.0.1 로 변경 

var minport     = 7895;       //연결 가능한 port를 찾을때 시작 port  (http는 7895~7935, https는 7936~7966)	
var maxport     = 7900;       //연결 가능한 port를 찾을때 최대 범위    
    
var setport     = -1;       //-p옵션을 통해 넣었던 포트번호가 있으면 그 번호를 넣어야 함; 없을 경우 -1
var openport    = -1;       // openport가 실패할 경우 시도할 처음 port 번호
var findport    = false;    // setport 혹은 쿠키값으로 먼제 port 찾을때 false;
var bDebug 		= false;    // TPLSvc 디버깅 모드 (true 설정 시 페이지에 textBox 생성)

// MIPLATFORM용
var isJsonp		= false;
var jsonp_node = null;

var bEngineCheck    = false;	//엔진 버젼 체크 여부 
var bMiPlatformInstallCheck = false;

/**
 * TOBESOFT DEFAULT PRODUCT Settings
 * miplatform, xplatform, nexacro 14 제품은 32bit만 있음.
 * miplatform은 Updater 버전이 다를 수 있음으로 각 버전에 맞는 setupkey 설정이 필요함.
 * MiUpdater 321 : {8F0B18AE-8177-4C20-A2AC-DBD2416E1ED8}
 * MiUpdater 322 : {0ACA9DE0-A29B-4BC3-A662-5CC43113754D}
 * MiUpdater 331 : {7B86A3FB-30CA-449D-A374-8D48DC6D7D28}
 * MiUpdater 332 : {B3CA6623-4AA7-4E44-BDB6-F6E24654270A} 
 */
var strProductCode    = "";
var TOBE_PRODUCTS = {
		"TARGET"	: null ,
		"miplatform" : {
			"V3.2"  : {
				"FILENAME32" : "MiPlatform_SetupUpdater321.exe" ,
				"FILENAME64" : "MiPlatform_SetupUpdater321.exe" ,
				"SETUPKEY32" : "{8F0B18AE-8177-4C20-A2AC-DBD2416E1ED8}" ,
				"SETUPKEY64" : "{8F0B18AE-8177-4C20-A2AC-DBD2416E1ED8}"
			},
			"V3.3" : {
				"FILENAME32" : "MiPlatform_SetupUpdater331.exe" ,
				"FILENAME64" : "MiPlatform_SetupUpdater331.exe" ,
				"SETUPKEY32" : "{7B86A3FB-30CA-449D-A374-8D48DC6D7D28}" ,
				"SETUPKEY64" : "{7B86A3FB-30CA-449D-A374-8D48DC6D7D28}"
			}
		},
		"xplatform" : {
			"V9.2"  : {
				"FILENAME32" : "XPLATFORM9.2_SetupEngine.exe" ,
				"FILENAME64" : "XPLATFORM9.2_SetupEngine.exe" ,
				"SETUPKEY32" : "{0239FCE5-88CF-48e9-912D-90DAFC25E38B}" ,
				"SETUPKEY64" : "{0239FCE5-88CF-48e9-912D-90DAFC25E38B}"
			},
			"V9.2.1"  : {
				"FILENAME32" : "XPLATFORM9.2.1_SetupEngine.exe" ,
				"FILENAME64" : "XPLATFORM9.2.1_SetupEngine.exe" ,
				"SETUPKEY32" : "{AA890DB4-7357-4237-82BB-D0B931AAB420}" ,
				"SETUPKEY64" : "{AA890DB4-7357-4237-82BB-D0B931AAB420}"
			},
			"V9.2.2"  : {
				"FILENAME32" : "XPLATFORM9.2.2_SetupEngine.exe" ,
				"FILENAME64" : "XPLATFORM9.2.2_SetupEngine.exe" ,
				"SETUPKEY32" : "{E05CD7D8-28AF-4577-89AC-E4F1F8ABF046}" ,
				"SETUPKEY64" : "{E05CD7D8-28AF-4577-89AC-E4F1F8ABF046}"
			}
		},
		"nexacro" : {
			"V14" : {
				"FILENAME32" : "nexacro14_SetupEngine.exe" ,
				"FILENAME64" : "nexacro14_SetupEngine.exe" ,
				"SETUPKEY32" : "{212D7517-F389-406B-99CF-9AB3B35B428D}" ,
				"SETUPKEY64" : "{212D7517-F389-406B-99CF-9AB3B35B428D}"
			},
			"V17" : {
				"FILENAME32" : "nexacro17_SetupRuntime_x86.exe" ,
				"FILENAME64" : "nexacro17_SetupRuntime_x64.exe" ,
				"SETUPKEY32" : "{DFC74642-2DFB-455B-879D-A097E4B97C9E}" ,
				"SETUPKEY64" : "{DB2D4086-A192-4FCB-A24D-77A7373B02AA}"
			},
			"V17.1" : {
				"FILENAME32" : "nexacro17_SetupRuntime_x86.exe" ,
				"FILENAME64" : "nexacro17_SetupRuntime_x64.exe" ,
				"SETUPKEY32" : "{701B46D8-E1C4-4A14-AC06-F537B82A814B}" ,
				"SETUPKEY64" : "{DEAD1C30-1F73-4DE5-AA28-36BACD93F4EE}"
			},
			"VN" : {
				"FILENAME32" : "NexacroN_SetupRuntime_x86.exe" ,
				"FILENAME64" : "NexacroN_SetupRuntime_x64.exe" ,
				"SETUPKEY32" : "{3D10EE09-348B-4B0B-AD04-69A3CE921D1C}" ,
				"SETUPKEY64" : "{3E221E7D-2ECF-4EF4-AD16-C69972112C86}"
			}
		}
}


var is64bit = false; // 32bit 설치파일이 대부분으로 Default 설정
// 아래 변수는 PC OS 종류에 따라 64bit 여부 결정
//var is64bit = (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1);

var objProduct  = {};
var openurl_add = "";  //고정(변경불가) "/launcher/xplatform", "/launcher/nexacro"

var debugmode = {
    debug: bDebug,
    loglevel: "debug"
}; // loglevel debug, info, error
var console = window.console || {
    log: function() {}
}; // console 객체가 없는 IE 를 위한 처리 (IE8 이하)

/**
 * [TPL_Download description]
 * TPLSvc 프로그램 다운로드 
 */
var objTPLDownElem;
var objEngineDownElem;
function DownloadFile(type, elem) {
	
	if(type == "launcher") {
	    var downURL = strTPLDownloadPath + strLauncherFileName;
	    elem.href = downURL; 
	    objTPLDownElem = elem;
	    istalledMsg("Downloaded", "launcher");
	    return downURL;
	} else {
	    var oProduct = TOBE_PRODUCTS.TARGET;
	    var sFileName = "";
	    if(is64bit) {	// 64bit
	    	sFileName = oProduct.FILENAME64;
	    } else {
	    	sFileName = oProduct.FILENAME32;
	    }
	    var downURL = strEngineDownloadPath + sFileName;
	    elem.href = downURL; 
	    objEngineDownElem = elem;
	    istalledMsg("Downloaded", "engine");
	    return downURL;
	}
}


function istalledMsg(str, msg, url) {
    if (typeof(nexaCallBack) == "function") {
        nexaCallBack(str, msg, url);
    }
}

function fn_closeMessage() {
    if (!bEndClose) return;
    var contents = "모든 설치가 완료되었습니다. <br> 새로고침 또는 재접속바랍니다.";
    istalledMsg("close", contents);
}

/**
 * [TPLService 사용 예]
 * TPL Service 의 경우 local 통신을 하게 되며 TPL Service 모듈의 설치 여부는 최초 통신의 성공 여부를 통해 통신이 실패 할 경우 모듈 설치를 진행
 * TPL Service 는 Window OS(XP SP3 이상) 의 services 항목에 추가 되어 구동 되기 때문에 Window services 에 정상 등록 되지 않을 경우 사용이 불가능 할 수 있으며
 * TPL Service 에서 사용하고 있는 port 를 혹시라도 PC 에서 사용을 막는 작업을 할 경우 사용 제한이 생길 수 있습니다.
 */

/**
 *  [trace description]
 *  Debug mode 를 위한 trace function 정의
 */
var trace = function() {
    var msg = "";
    if (debugmode.debug) {
        var domText = document.getElementById('debugTextBox');
        if (domText) {
            domText.style.display = "block";
            msg += arguments[0];
            for (var i = 1, len = arguments.length; i < len; i++) {
                msg += ", " + arguments[i];
            }
            domText.value += msg + "\n";
            console.log(msg);
        }
    }
}

if (window.addEventListener) { //firefox, IE9, 파이어폭스, 오페라, 사파리, 크롬 전용
    window.addEventListener("load", function() {
    	fnTplStart();
    });
    window.addEventListener("error", function(e) {
        http_onerror(e);
    });
} else if (window.attachEvent) { //IE 전용
    window.attachEvent("onload", function() {
    	 fnTplStart();
    });
    window.attachEvent("onerror", function(e) {
        http_onerror(e);
    });
}

/**
 *@method fnTplStart
 * 최초 구동시 호출되며 서비스 체크 및 실행
 */
function fnTplStart() {

	var arrProd = ["miplatform", "xplatform", "nexacro"];
	var vPrd = strProductName.toLowerCase();
	if(arrProd.indexOf(vPrd) < 0) {
		alert("Product Name이 잘못되었습니다. strProductName 을 확인하세요");
		return;
	}
	strProductCode = vPrd;
	if(vPrd == "miplatform") {
		openurl_add = "/launcher/nexacro";  //고정(변경불가) "/launcher/xplatform", "/launcher/nexacro"
	} else {
		openurl_add = "/launcher/" + strProductCode;  //고정(변경불가) "/launcher/xplatform", "/launcher/nexacro"
	}
	
	var vObj = TOBE_PRODUCTS[strProductCode];
	if(strProductVersion == "17.0") strProductVersion = "17";
	
	TOBE_PRODUCTS.TARGET = vObj["V" + strProductVersion];
	if(!TOBE_PRODUCTS.TARGET) {
		alert("Product Version이 잘못되었습니다. strProductVersion 을 확인하세요");
		return;
	}
	
	// 분리버전이 있는 경우
	if(	strCustomEngineName32 && strCustomEngineName32 != "" &&
		strCustomEngineKey32 && strCustomEngineKey32 != "") {
		TOBE_PRODUCTS.TARGET.FILENAME32 = strCustomEngineName32;
		TOBE_PRODUCTS.TARGET.FILENAME64 = strCustomEngineName64;
		TOBE_PRODUCTS.TARGET.SETUPKEY32 = strCustomEngineKey32;
		TOBE_PRODUCTS.TARGET.SETUPKEY64 = strCustomEngineKey64;
	}
	
	tpl_start();
}


/**
 * download후 time로 확인
 */    
var timerid;
function timercheck() {
	timerid = setInterval(function(){ tpl_start(); }, 2000);
}
function timerstop() {
	if(timerid) {
		clearInterval(timerid);
		timerid = null;
	}
}    


/**
 * [sendData CallBack]
 * TPLSvc 통신준비 callback function Error 가 발생 할 경우 http_onerror function 에서 설치 유무 확인
 * 통신이 성공 할 경우 TPLSvc launcher version 확인 
 */
function httpCallBackReturn(result, gubun) {

    if (result.action) {
        //console.log("httpCallBackReturn:" + result.action);
        var action = result.action;
        if (action == "create") {
            setCookie("tplsvcopenport", openport, 14);
            
            if (debugmode.loglevel == "debug") {
                trace("createProcess", "after setCookie", "action : " + (objProduct?objProduct.action:result.action));
            }
            if (result.result == "success") {
            	
            	
            	if(bMiPlatformInstallCheck) {
            		isJsonp = true;
                    do_property('setproperty', 'basicmp'); // nexacro 구동을 위한 기본 속성 설정
                    sendData(true);
                    
                    return;
            	}
            	
            	
                objProduct.action = 'check';
                objProduct.value = {
                    "getlauncherversion": {}
                };
                sendData(true);
            }
        }
        else if (action == "check") {
            var strLocLauncherVer = result.value["getlauncherversion"].productversion;
            var bUpdateCheck = fn_checkVersion(strLauncherVersion, strLocLauncherVer ,',');  //1,1,0,200		
                        
        	var strEnginesetupkey = "";
            var oProduct = TOBE_PRODUCTS.TARGET;
            if(is64bit) strEnginesetupkey = oProduct.SETUPKEY64;
            else strEnginesetupkey = oProduct.SETUPKEY32;
            
            if (!bUpdateCheck) {
                istalledMsg("newlanucher", "update", "");
            } else {

                istalledMsg("newlanucher", "installed", "");
                objProduct.action = "method";
					objProduct.value = {
						"getengineversion": {
							"param": [strEnginesetupkey],
							"result": null
						}
					};			
					sendData(true);
            }

        } else if (action == "setproperty") {
        	if (!bEngineCheck) {
                return;
            }
            timerstop();
            
            if (typeof(bMakeShortcut) == undefined) {
                do_method('makeshortcut'); // 단축아이콘 생성
                sendData(true);
                return;
            } else if (bMakeShortcut == true) {
                do_method('makeshortcut'); // 단축아이콘 생성
                sendData(true);
                return;
            } else if (typeof(bAddWebInfo) !== undefined && bAddWebInfo === true) {
                do_method('addWebInfo'); // 단축아이콘 생성
                sendData(true);
                return;
            } else {
            	
            	if(bMiPlatformInstallCheck) {
	                do_method('download'); // 단축아이콘 생성
	                do_method('launch'); // nexacro 실행            		
	                return;
            	}
                
            	
                do_method('launch'); // nexacro 실행
                sendData(true);
            }
        } else if (action == "method") {
            if (result.result == "success") {
                if (result.value.makeshortcut) {
                    if (typeof(bAddWebInfo) !== undefined && bAddWebInfo === true) {
                        do_method('addWebInfo'); // 단축아이콘 생성
                        sendData(true);
                    } else {
                        do_method('launch'); // nexacro 실행
                        sendData(true);
                    }
                } else if (result.value.isexistshortcut) {} else if (result.value.download) {} else if (result.value.addWebInfo) {
                    do_method('launch'); // nexacro 실행
                    sendData(true);
                } else if (result.value.getengineversion) {
                    
                    var rtnEngineVer = result.value.getengineversion.result;
                   
                    var bUpdateCheck = fn_checkVersion(strEngineVersion, rtnEngineVer, '.');		//17.1.1.200
                    if (!bUpdateCheck) {

                        //do_property('setproperty', 'basic');
                        //sendData(true);
                    	if(strSetupResourcePath && strSetupResourcePath != "" && strProductName == "nexacro") {
                    		do_method('downloadresource'); // SetupResource.zip 다운로드													
                    		sendData(true);
                    	}
                        istalledMsg("EngineDownload", "update", "");

                    } else {
                    	
                    	if(strProductName == "miplatform" && bMiPlatformInstallCheck == false) {
                            bEngineCheck = true;
                            istalledMsg("nexacro");
                    		tpl_finish();
                    		
	                        setTimeout(function() {
	                        	objProduct  = {};
	                        	bMiPlatformInstallCheck = true;
	                            tpl_start(true);
	                        	//objProduct.platform = "miplatform";
	                            //do_property('setproperty', 'basic'); // nexacro 구동을 위한 기본 속성 설정
	                            //sendData(true);	                        	
	                        }, 500);
	                        return;
                    	}
                    	
                    	
                        bEngineCheck = true;
                        istalledMsg("nexacro");
                        do_property('setproperty', 'basic'); // nexacro 구동을 위한 기본 속성 설정
                        sendData(true);

                        do_method('makeshortcut'); // 단축아이콘 생성
                        do_method('launch'); // nexacro 실행
                    }

                } else if (result.value.deleteshortcut) {} else if (result.value.launch == true || result.value.launch == "ok") {
                    setTimeout(function() {
                        tpl_finish();
                    }, 1000);
                }
            } else {
                trace("error======================");
                return http_onerror();
            }
        } else if (action == "destroy") {
            fn_closeMessage();
        }
    } else {
        return http_onerror();
    }
}


/**
 * [sendData CallBack]
 * TPLSvc 통신준비 callback function Error 가 발생 할 경우 http_onerror function 에서 설치 유무 확인
 * 통신이 성공 할 경우 TPLSvc launcher version 확인 
 */
function httpCallBack(__ajax) {
    return function() {
        if (!__ajax) {
            trace("httpCallBack _ahax error-----");
            return;
        }
        var ajax_handle = __ajax;
        if (ajax_handle.readyState == 4) {
            if (ajax_handle.status == 200) {
                var data = ajax_handle.responseText;
                if (launcher_response(data)) {
                    if (debugmode.loglevel == "debug") {
                        trace(data);
                    }
                    var result = JSON.parse(data);
                    httpCallBackReturn(result);
                }
            } else {
                return http_onerror();
            }
        } else if (ajax_handle.readyState === 0) {
            if (debugmode.loglevel == "debug") {
                trace("createProcess function Error XMLHttpRequest status : " + ajax_handle.status);
            }
            return http_onerror();
        } else if (ajax_handle.readyState == undefined) { // XDomainRequest
            var data = ajax_handle.responseText;
            if (launcher_response(data)) {
                if (debugmode.loglevel == "debug") {
                    trace(data);
                }
                var result = JSON.parse(data);
                httpCallBackReturn(result);
            } else {
                return http_onerror();
            }
        }
    };
}

/**
 *  [tpl_start description]
 *  TPLService 와 통신을 하기 위한 준비 function 
 */
function tpl_start() {
    //생성 및 id 할당
    trace("tpl start", "생성 및 id 할당");
    //objProduct.platform = 'nexacro'; //필수 세팅
    var vPrd = strProductName.toLowerCase();
    if(vPrd == "miplatform" && bMiPlatformInstallCheck == false) {
    	objProduct.platform = "nexacro"; //필수 세팅
    } else	if(vPrd == "miplatform" && bMiPlatformInstallCheck == true) {
        openurl_add = "/launcher/" + strProductCode;  //고정(변경불가) "/launcher/xplatform", "/launcher/nexacro"
        objProduct.platform = strProductCode; //필수 세팅
    } else {
    	objProduct.platform = strProductCode; //필수 세팅
    }
    
    
    
    objProduct.action = 'create'; //필수 세팅
    //objProduct.id = '';            // 통신이 성공하면 정보가 채워지므로 생략해도 무방

    if (setport > 0) {
        openport = setport;
    } else {
        openport = parseInt(getCookie("tplsvcopenport"), 10) | 0;
    }
    if (openport > 0) {
        findport = false;
    } else {
        findport = true;
        openport = minport;
    }
    sendData(true); // sendData(openpost, is_create, resultCallback)
}


function tpl_finish() {
    //종료 ==> 종료는 생략할 수 있으나 런처 서비스에서 관련 정보를 일정 시간 동안 가지고 있지 않게 하려면 호출해야 함;
    if (debugmode.loglevel == "debug") {
        objProduct.action = 'destroy';
    }
    sendData(true);
}

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
}

function getCookie(name) {
    var nameOfCookie = name + '=';
    var x = 0;
    var endOfCookie;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) {
                endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(' ', x) + 1;
        if (x == 0) {
            break;
        }
    }
    return '';
}


/**
* @param  {[type] json string}
* 
*/
function jsonp_result(result) 
{
  var isDoflag = false;
  if (launcher_response(result)) {
		  try {
			  var value = objProduct.value;
			  if(!value) return;
			  if(value.DeviceType) {
				  do_property('setproperty', 'basic'); // miplatform 구동을 위한 기본 속성 설정
				  sendData(true);
				  
				  do_method('download');
				  sendData(true);
				  
				  do_method('launch');
				  sendData(true);
				  
				  if(bMakeShortcut) {
		              do_method('makeshortcut');
		              sendData(true);
				  }
			  }
		  } catch(e) {
		  } 	  
  } else {
 }
}


function sendData(openpost, resultCallback) {

	var jsonData = JSON.stringify(objProduct);

	var timestamp = "/" + new Date().getTime(); //cache 방지용
	var send_url = openurl + ":" + openport + openurl_add + timestamp;

	if(isJsonp) {
        var jsc_u = send_url + "?callback=" + "jsonp_result" + "&" + encodeURIComponent(jsonData); //jsonp_result는 콜백함수명;
        
        if (jsonp_node == null) {
            jsonp_node = document.createElement('script');
        } else {
          document.getElementsByTagName('body')[0].removeChild(jsonp_node);
          delete jsonp_node;
          jsonp_node = document.createElement('script');
        }

        try {
            jsonp_node.setAttribute('src', jsc_u);
            jsonp_node.setAttribute('type', 'text/javascript');
            jsonp_node.onerror = http_onerror; 
            document.getElementsByTagName('body')[0].appendChild(jsonp_node);
        } catch (e) {
            //console.log("jsonp error============", e);
        }	
	} else {
		var xhrObj = {};
		var __ajax;
		if (window.XDomainRequest) {
			xhrObj.handle = new XDomainRequest();
			xhrObj.reqType = 2;
		} else if (window.XMLHttpRequest) {
			xhrObj.handle = new XMLHttpRequest();
			xhrObj.reqType = 1;
		}
		__ajax = xhrObj.handle;
		if (xhrObj == null) {
			trace("It can not create XMLHttpRequest or XDomainRequestx");
			return null;
		}

		var callback = httpCallBack(__ajax);
		if (xhrObj.reqType != 2) {
			__ajax.onreadystatechange = callback;
		} else {
			__ajax.onload = callback;
			__ajax.onerror = http_onerror;
			__ajax.ontimeout = http_ontimeout;
		}

		
		if (xhrObj.reqType != 2) {
			if (openpost) {
				__ajax.open("POST", send_url, "true");
				__ajax.send(jsonData);
			} else {
				__ajax.open("GET", send_url + "?" + jsonData, "true");
				__ajax.send();
			}
		} else {
			if (openpost) {
				__ajax.open("POST", send_url);
				__ajax.send(jsonData);
			} else {
				__ajax.open("GET", send_url);
				__ajax.send();
			}
		}
		__ajax = null;
	}
}

function http_ontimeout() {
    if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
        trace("http_ontimeout");
    }
    return http_onerror();
}

function http_onerror(e) {
    if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
        trace("http_onerror ", "first line", "action : " + objProduct.action, "oepnport : " + openport);
    }
    if (objProduct.action == 'create') {
        var isAttempt = localStorage.getItem("isAttempt");
        if (isAttempt == null || isAttempt == "error") {
            //localStorage.setItem("isAttempt", "ok"); // TPLSvc 파일 다운로드 flag 값 : 설치전까지 자동다운되도록 수정 : mkn - 2020.02.10
        	istalledMsg("newlanucher", "error");
        } else {
            if (findport == false) {
                if (setport > 0) {
                    setport = 0;
                    openport = parseInt(getCookie("tplsvcopenport"), 10) | 0;
                    if (openport > 0) {
                        sendData(true);
                        return;
                    }
                }
                openport = minport;
            } else {
                openport++;

            }
            findport = true;

            if (openport <= maxport) {
                sendData(true);
            } else {
                localStorage.setItem("isAttempt", "error");
                if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
                    trace("프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
                }
                istalledMsg("error", "프로그램 추가 제거 항목에서 TPLSvc 프로그램이 설치 되어있지 확인 및 Window 서비스 항목에서 TPLSvc 서비스 중지 되어 있는지 확인 바랍니다.");
            }
        }
    } else {
        istalledMsg("error", "[Error] action : " + objProduct.action + "oepnport : " + openport);
    }
}

function launcher_response(result) {
    if (result.length <= 0) {
        return false;
    }
    try {
        var objResult = JSON.parse(result);
        //var objResult = eval('(' + result + ')');
        if (objResult.result == "success" && objResult.id.length > 0) {
            objProduct = objResult;
            return true;
        } else {
            if (debugmode.loglevel == "debug" || debugmode.loglevel == "error")
                trace("launcher_response error msg", objResult.result);
            
            return false;
        }
    } catch (e) {
        //console.log("##############3", e);
        if (debugmode.loglevel == "debug" || debugmode.loglevel == "error") {
            trace("launcher_response : " + e.message)
            return false;
        }
    }
}

/**
 * 속성 및 메소드를 가져오기 위해서느 json 형식으로 값을 전달 후 json 으로 값을 받을 수 있습니다.
 * TPlSvc 의 proeryt 값을 가져오기 위한 셋팅 - json 형식으로 값을 전달 후 json 형식으로 값을 전달 받음
 * @param  {[action string]}
 * @param  {[action_sub string]}
 * @return 
 */
function do_property(action, action_sub) {
    if (action == 'setproperty') { //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
        objProduct.action = 'setproperty';
        var vPrd = strProductName.toLowerCase();
        if(vPrd == "miplatform") {
        	objProduct.platform = vPrd;
        	//openurl_add = "/launcher/" + vPrd;
        }
        if (action_sub == 'basic') {
        	var strEnginesetupkey = "";
            var oProduct = TOBE_PRODUCTS.TARGET;
            if(is64bit) strEnginesetupkey = oProduct.SETUPKEY64;
            else strEnginesetupkey = oProduct.SETUPKEY32;
            
            objProduct.value = {
                    "splashimage"       : strSplashimage,
                    "loadingimage"      : strLoadingimage,
                    "globalvalue"       : strGlobalvalue,
                    "onlyone"           : bOnlyone,			
                    "splashmessage"     : strSplashmessage			 
                };
            
            if(strProductName == "nexacro") {
            	objProduct.value.key = strKey;
            	objProduct.value.version = strProductVersion;
            	objProduct.value.enginesetupkey = strEnginesetupkey;
            	objProduct.value.bjson = strStartFile;
                var bSetupResource = false;
                if(strSetupResourcePath && strSetupResourcePath != "") {
                	bSetupResource = true;
                }
                objProduct.value.setupresource = bSetupResource;
                
        		if(strComponentPath && strComponentPath != "") {
        			objProduct.value.componentpath = strComponentPath;
        		}                       
            } else if(strProductName == "miplatform") {
            	objProduct.value = {};
            	objProduct.value.SiteKey = strKey;
            	objProduct.value.StartXML = strStartFile;
            	objProduct.value.OnlyOne = bOnlyone;
            	objProduct.value.UpdateURL = strUpdateURL;
            	//objProduct.value.Launch = true;
            	objProduct.value.ReInstall = true;
            	if(strResource != "") objProduct.value.Resource = strResource;
            	if(strStartImage != "") objProduct.value.StartImage = strStartImage;
            	if(strWidth != "") objProduct.value.Width = strWidth;
            	if(strHeight != "") objProduct.value.Height = strHeight;
            	if(strLeft != "") objProduct.value.Left = strLeft;
            	if(strTop != "") objProduct.value.Top = strTop;
            	if(strRetry != "") objProduct.value.Retry = strRetry;
            	if(strTimeout != "") objProduct.value.TimeOut = strTimeout;
            	if(strGlobalvalue != "") objProduct.value.GlobalVal = strGlobalvalue;
            	
        		if(strComponentPath && strComponentPath != "") {
        			objProduct.value.ComponentPath = strComponentPath;
        		}                   	
            } else {
            	objProduct.value.key = strKey;
            	objProduct.value.version = strProductVersion;
            	objProduct.value.enginesetupkey = strEnginesetupkey;
            	objProduct.value.xadl = strStartFile;
            	objProduct.value.commthreadcount = 3;
            	objProduct.value.errorfile = strErrFile;
            	objProduct.value.showiniterror = false;
            	objProduct.value.usewininet = true;
            	
        		if(strComponentPath && strComponentPath != "") {
        			objProduct.value.componentpath = strComponentPath;
        		}                   	
            }
            
        } else if (action_sub == 'basicmp') {
        	objProduct.value = {"Version": strProductVersion, "DeviceType":strDeviceType, "Key": strKey };
        }
 
    } else if (action == 'getproperty') {
		objProduct.action = 'getproperty'; //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
		
		objProduct.value = {
				"bjson"             : "",
				"key"               : "",
				"xadl"              : "",
				"componentpath"     : "",
				"cachedir"          : "",
				"splashimage"       : "",
				"loadingimage"      : "",
				"commthreadwaittime": 0,
				"version"           : "",
				"commthreadcount"   : 0,
				"errorfile"         : "",
				"globalvalue"       : "",
				"onlyone"           : bOnlyone,
				"showiniterror"     : false,
				"usewininet"        : true,
				"enginesetupkey"    : "",
				"splashmessage"     : ""  
			};		

    } else {
        return;
    }
}

/**
 * @param  {[action string]}
 * @return about:blank
 */
function do_method(action) {
    objProduct.action = 'method';

    //trace(">>>>>>>>>>>>>>do_method","action=",action);
    if (action == 'makeshortcut') {
    	if(strProductName == "miplatform") {
    		objProduct.value = { 
				"MakeShortCut": { 
					"param": [strUpdaterExePath, strCommand, strShortcutName, strIConPath, strPos]
				}
			};                        
    	} else if(strProductName == "xplatform") {
			objProduct.value = {
				"makeshortcut": {
					"param": [strWallpapericonNm, strWallpapericon, strWallpaperposition, false]
				}
			};
		} else {
	        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
			objProduct.value = {
				"makeshortcut": {
					"param": [strWallpapericonNm, strWallpapericon, "", strWallpaperposition, false]
				}
			};
    	}
    } else if (action == 'launch') {
    	if(strProductName == "miplatform") {
    		objProduct.value = { "Run": ""};
    	} else {
        //method 실행 ==> action = 'method' value = {"method명" :  };
			objProduct.value = {
				"launch": true
			};
    	}
    } else if (action == 'isexistshortcut') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
    	
        objProduct.value = {
            "isexistshortcut": {
                "param": [strWallpapericonNm, "startmenu", true],
                "result": null
            }
        };
    } else if (action == 'downloadresource') {
        objProduct.value = {
            "downloadresource": {
                "param": [strSetupResourcePath] //SetupResource.zip 존재하는 경로
            }
        };

    } else if (action == 'download') {
    	if(strProductName == "miplatform") {
    		objProduct.value = { "StartDownload": { "result":""}};
    	} else {
        //method 실행 ==> action = 'method' value = {"method명" : };
			objProduct.value = {
				"download": null
			};
    	}
    } else if (action == 'addWebInfo') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
        objProduct.value = {
            "addWebInfo": {
                "param": [window.document.cookie]
            }
        };
    } else if (action == 'getengineversion') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};        
		objProduct.value = {
			"getengineversion": {
				"param": [strEnginesetupkey],
				"result": null
			}
		};

		
    } else if (action == 'deleteshortcut') {
        //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
        objProduct.value = {
            "deleteshortcut": {
                "param": [strWallpapericonNm, "startmenu", true],
                "result": null
            }
        };
	} else {
        return;
    }
}

function get_event(action) {
    objProduct.action = 'event';
    if (action == 'error') {
        //get event info  ==> action = 'event' value = {"event명" : {...}};
        if (add_value) {
            objProduct.value = '{ "error": { "code": 0, "message": "" } }';
        } else {
            objProduct.value = {
                "error": {
                    "code": 0,
                    "message": ""
                }
            };
        }
    } else {
        return;
    }

    sendData(true);
}


/**
 * [fn_checkVersion]
 * 런처 버전 비교 로직 추가 - 2020.02.06 추가(versionB(local)이 낮으면 false)
 */
function fn_checkVersion(versionA, versionB, delimiter) {

    let compareResult = true;

    versionA = versionA.split(delimiter);
    versionB = versionB.split(delimiter);

    const length = Math.max(versionA.length, versionB.length);

    for (let i = 0; i < length; i += 1) {
        const a = versionA[i] ? parseInt(versionA[i], 10) : 0;
        const b = versionB[i] ? parseInt(versionB[i], 10) : 0;

        if (a > b) {
            compareResult = false;
            break;
        }
    }
    return compareResult;
}