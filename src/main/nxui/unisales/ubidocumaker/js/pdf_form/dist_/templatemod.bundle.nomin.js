(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("templatemod", [], factory);
	else if(typeof exports === 'object')
		exports["templatemod"] = factory();
	else
		root["templatemod"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/pdf_form/src/Constants.js":
/*!**************************************!*\
  !*** ./js/pdf_form/src/Constants.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANTS: () => (/* binding */ CONSTANTS)
/* harmony export */ });

/**
 * @module Template/CONSTANTS
 */


/**
 * @description 프로젝트에서 사용하는 상수 모음
 *
 * @property {String} ASTERISK_ICON_CLASS {@link module:Template/CONSTANTS.CONSTANTS#ASTERISK_ICON_CLASS}
 * @property {Number} ASTREISK_DIV_HEIGHT {@link module:Template/CONSTANTS.CONSTANTS#ASTREISK_DIV_HEIGHT}
 * @property {String} CREATE_FIELD_ACTION  {@link module:Template/CONSTANTS.CONSTANTS#CREATE_FIELD_ACTION }
 * @property {String} DIVIDER_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#DIVIDER_CLASS }
 * @property {String} DRAG_BOX_NAME  {@link module:Template/CONSTANTS.CONSTANTS#DRAG_BOX_NAME }
 * @property {String} EDITOR_ATTR_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_CLASS }
 * @property {String} EDITOR_ATTR_CONTENTS_ROW_CLASS {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_CONTENTS_ROW_CLASS}
 * @property {String} EDITOR_ATTR_DATE_INPUT_CLASS {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_DATE_INPUT_CLASS}
 * @property {String} EDITOR_ATTR_INPUT_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_INPUT_CLASS }
 * @property {String} EDITOR_ATTR_INPUT_WRAP_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_INPUT_WRAP_CLASS }
 * @property {String} EDITOR_ATTR_KIND_CLASS {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_KIND_CLASS}
 * @property {String} EDITOR_ATTR_PANEL_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_PANEL_CLASS }
 * @property {String} EDITOR_ATTR_PANEL_ID  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_PANEL_ID }
 * @property {String} EDITOR_ATTR_ROW_WRAP_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_ROW_WRAP_CLASS }
 * @property {String} EDITOR_ATTR_SELECT_CLASS {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_SELECT_CLASS}
 * @property {String} EDITOR_ATTR_TEXTAREA_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_TEXTAREA_CLASS }
 * @property {String} EDITOR_COMPONENT_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#EDITOR_COMPONENT_CLASS }
 * @property {String} FIELD_ATTR_CHANGE_ACTION  {@link module:Template/CONSTANTS.CONSTANTS#FIELD_ATTR_CHANGE_ACTION }
 * @property {String} FIELD_DELETE_BUTTON_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#FIELD_DELETE_BUTTON_CLASS }
 * @property {String} GROUP_ATTR_CHANGE_ACTION {@link module:Template/CONSTANTS.CONSTANTS#GROUP_ATTR_CHANGE_ACTION}
 * @property {String} GROUP_ATTR_OWNER_CHANGE_ACTION {@link module:Template/CONSTANTS.CONSTANTS#GROUP_ATTR_OWNER_CHANGE_ACTION}
 * @property {String} GROUP_REMOVE_ACTION {@link module:Template/CONSTANTS.CONSTANTS#GROUP_REMOVE_ACTION}
 * @property {String} HIDE_CLASS {@link module:Template/CONSTANTS.CONSTANTS#HIDE_CLASS}
 * @property {String} MAIN_GROUP_NAME {@link module:Template/CONSTANTS.CONSTANTS#MAIN_GROUP_NAME}
 * @property {Number} MINIMUM_DRAG_SIZE  {@link module:Template/CONSTANTS.CONSTANTS#MINIMUM_DRAG_SIZE }
 * @property {String} PREVIEW_READER_PDF_VIEWER {@link module:Template/CONSTANTS.CONSTANTS#PREVIEW_READER_PDF_VIEWER}
 * @property {String} PREVIEW_READER_PDF_VIEWER_CONTAINER  {@link module:Template/CONSTANTS.CONSTANTS#PREVIEW_READER_PDF_VIEWER_CONTAINER }
 * @property {String} READER_PAGE_FIELD_LAYER_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#READER_PAGE_FIELD_LAYER_CLASS }
 * @property {String} READER_PDF_VIEWER  {@link module:Template/CONSTANTS.CONSTANTS#READER_PDF_VIEWER }
 * @property {String} READER_PDF_VIEWER_CONTAINER  {@link module:Template/CONSTANTS.CONSTANTS#READER_PDF_VIEWER_CONTAINER }
 * @property {String} REMOVE_FIELD_ACTION {@link module:Template/CONSTANTS.CONSTANTS#REMOVE_FIELD_ACTION}
 * @property {String} SHOW_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#SHOW_CLASS }
 * @property {String} SWITCH_LABEL_CLASS {@link module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_CLASS}
 * @property {String} SWITCH_LABEL_SLIDER_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_SLIDER_CLASS }
 * @property {String} SWITCH_LABEL_SLIDER_ROUND_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_SLIDER_ROUND_CLASS }
 * @property {String} TEMPLATE_LAYER_ASTERISK_NAME  {@link module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_ASTERISK_NAME }
 * @property {String} TEMPLATE_LAYER_NAME {@link module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_NAME}
 * @property {String} TEMPLATE_LAYER_RECT_NAME  {@link module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_RECT_NAME }
 * @property {String} TEMPLATE_PDF_VIEWER  {@link module:Template/CONSTANTS.CONSTANTS#TEMPLATE_PDF_VIEWER }
 * @property {String} TEMPLATE_PDF_VIEWER_CONTAINER  {@link module:Template/CONSTANTS.CONSTANTS#TEMPLATE_PDF_VIEWER_CONTAINER }
 * @property {String} TITLE_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#TITLE_CLASS }
 * @property {String} TITLE_WRAP_CLASS  {@link module:Template/CONSTANTS.CONSTANTS#TITLE_WRAP_CLASS }
 * 
 * @class
 * @FileName CONSTANTS.js
 * @since 2021.05.31
 */
class CONSTANTS {

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#MAIN_GROUP_NAME
     * @description (Static) Canvas의 메인 노드
     */
    static MAIN_GROUP_NAME = "MainContainer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TEMPLATE_PDF_VIEWER_CONTAINER
     * @description (Static) Template모드에서의 PDF Viewer Container
     */
    static TEMPLATE_PDF_VIEWER_CONTAINER = "TemplateViewerContainer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TEMPLATE_PDF_VIEWER
     * @description (Static) Template모드에서의 PDF Viewer
     */
    static TEMPLATE_PDF_VIEWER = "TemplatePDFViewer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#READER_PDF_VIEWER_CONTAINER
     * @description (Static) 서명모드에서의 PDF Viewer Container
     */
    static READER_PDF_VIEWER_CONTAINER = "ReaderViewerContainer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#READER_PDF_VIEWER
     * @description (Static) 서명모드에서의 PDF Viewer
     */
    static READER_PDF_VIEWER = "ReaderPDFViewer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#PREVIEW_READER_PDF_VIEWER_CONTAINER
     * @description (Static) 미리보기 모드에서의 PDF Viewer Container
     */
    static PREVIEW_READER_PDF_VIEWER_CONTAINER = "PreviewReaderViewerContainer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#PREVIEW_READER_PDF_VIEWER
     * @description (Static) 미리보기 모드에서의 PDF Viewer
     */
    static PREVIEW_READER_PDF_VIEWER = "PreviewReaderPDFViewer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_NAME
     * @description (Static) Template 레이어 이름
     */
    static TEMPLATE_LAYER_NAME = "TemplateLayer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_ASTERISK_NAME
     * @description (Static) Template에서 필수 여부 마크가 있는 레이어 이름
     */
    static TEMPLATE_LAYER_ASTERISK_NAME = "TemplateAsteriskLayer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TEMPLATE_LAYER_RECT_NAME
     * @description (Static) Template에서 필드를 만들기 위해 생성하는 임시 div 이름
     */
    static TEMPLATE_LAYER_RECT_NAME = "TemplateRect";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#DRAG_BOX_NAME
     * @description (Static) Template에서 드래그 했을때 필드들이 있을 경우 만드는 SVG 그룹 노드 이름
     */
    static DRAG_BOX_NAME = "DragBoxGroup";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#SHOW_CLASS
     * @description (Static) 노드를 보이도록 하는 CSS 클래스 이름
     */
    static SHOW_CLASS = "Template-Show"

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#HIDE_CLASS
     * @description (Static) 노드를 안보이도록 하는 CSS 클래스 이름
     */
    static HIDE_CLASS = "Template-Hide"

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_COMPONENT_CLASS
     * @description (Static) Template모드에서 사이드 탭의 클라스 이름.
     */
    static EDITOR_COMPONENT_CLASS = "Editor-Component_Box";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_CLASS
     * @description (Static) Template모드에서 필드의 속성 노드 클래스 이름.
     */
    static EDITOR_ATTR_CLASS = "Editor-Attribute";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#FIELD_DELETE_BUTTON_CLASS
     * @description (Static) Template모드에서 삭제버튼 노드 클래스 이름.
     */
    static FIELD_DELETE_BUTTON_CLASS = "Field-Delete-Button";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#MEMO_PROPERTY_BUTTON_CLASS
     * @description (Static) Reader모드에서 메모 속성 버튼 노드 클래스 이름.
     */
    static MEMO_PROPERTY_BUTTON_CLASS = "MEMO-Property-Button";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_KIND_CLASS
     * @description (Static) Template모드에서 필드의 속성 종류 노드 클래스 이름.
     */
    static EDITOR_ATTR_KIND_CLASS = "Attribute-kind";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_PANEL_CLASS
     * @description (Static) Template모드에서 필드의 속성 판넬 노드 클래스 이름.
     */
    static EDITOR_ATTR_PANEL_CLASS = "Attribute-Contents";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_PANEL_ID
     * @description (Static) Template모드에서 필드의 속성 판넬 노드 ID.
     */
    static EDITOR_ATTR_PANEL_ID = "Attribute-Panel";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_CONTENTS_ROW_CLASS
     * @description (Static) Template모드에서 필드의 속성 컨텐츠 열의 클래스 이름
     */
    static EDITOR_ATTR_CONTENTS_ROW_CLASS = "Attribute-Contents-Row";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_ROW_WRAP_CLASS
     * @description (Static) Template모드에서 필드의 속성 컨텐츠 열을 감싸고 있는 노드의 클래스 이름
     */
    static EDITOR_ATTR_ROW_WRAP_CLASS = "Attribute-Contents-Row-Wrap";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TITLE_WRAP_CLASS
     * @description (Static) Template모드에서 필드의 속성 컨텐츠 열의 타이틀을 감싸고 있는 노드의 클래스 이름
     */
    static TITLE_WRAP_CLASS = "Title-Wrap";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#TITLE_CLASS
     * @description (Static) Template모드에서 필드의 속성 컨텐츠 열의 타이틀 노드의 클래스 이름
     */
    static TITLE_CLASS = "Title";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_SELECT_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Select 노드의 클래스 이름
     */
    static EDITOR_ATTR_SELECT_CLASS = "Attribute-Select";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Switch버튼  노드의 클래스 이름
     */
    static SWITCH_LABEL_CLASS = "Attribute-Switch-Label";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_SLIDER_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Switch버튼의 슬라이더 노드의 클래스 이름
     */
    static SWITCH_LABEL_SLIDER_CLASS = "Attribute-Switch-Slider";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#SWITCH_LABEL_SLIDER_ROUND_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Switch버튼의 슬라이더의 도그란 Div 노드의 클래스 이름
     */
    static SWITCH_LABEL_SLIDER_ROUND_CLASS = "Round";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#DIVIDER_CLASS
     * @description (Static) 구분자 노드의 클래스 이름
     */
    static DIVIDER_CLASS = "Divider";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_INPUT_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 input 노드의 클래스 이름
     */
    static EDITOR_ATTR_INPUT_CLASS = "Attribute-Input";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_TEXTAREA_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Textarea 노드의 클래스 이름
     */
    static EDITOR_ATTR_TEXTAREA_CLASS = "Attribute-Textarea";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_DATE_INPUT_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 Date input 노드의 클래스 이름
     */
    static EDITOR_ATTR_DATE_INPUT_CLASS = "Attribute-Date-Input";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#EDITOR_ATTR_INPUT_WRAP_CLASS
     * @description (Static) Template모드에서 필드의 속성 의 input 노드를 감싸고 있는 노드의 클래스 이름
     */
    static EDITOR_ATTR_INPUT_WRAP_CLASS = "Attribute-Input-Wrap";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#CREATE_FIELD_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드 생성 Action의 이름
     */
    static CREATE_FIELD_ACTION = "CreateFieldAction";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#REMOVE_FIELD_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드 삭제 Action의 이름
     */
    static REMOVE_FIELD_ACTION = "RemoveFieldAction";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#FIELD_ATTR_CHANGE_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드 속성 변경 Action의 이름
     */
    static FIELD_ATTR_CHANGE_ACTION = "FieldAttrChangeAction";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#GROUP_REMOVE_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드 삭제 Action의 이름
     */
    static GROUP_REMOVE_ACTION = "GroupRemoveAction";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#GROUP_ATTR_CHANGE_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드들의 속성 변경 Action의 이름
     */
    static GROUP_ATTR_CHANGE_ACTION = "GroupAttrChangeAction";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#GROUP_ATTR_OWNER_CHANGE_ACTION
     * @description (Static) Template모드에서 UNDO REDO의 필드들의 서명자 변경 Action의 이름
     */
    static GROUP_ATTR_OWNER_CHANGE_ACTION = "GroupAttrOwnerChangeAction";


    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#READER_PAGE_FIELD_LAYER_CLASS
     * @description (Static) 서명 모드에서 Field들이 올라갈 레이어 클래스 이름.
     */
    static READER_PAGE_FIELD_LAYER_CLASS = "Reader-Page-Field-Layer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#READER_PAGE_MEMO_LAYER_CLASS
     * @description (Static) 서명 모드에서 MEMO들이 올라갈 레이어 클래스 이름.
     */
    static READER_PAGE_MEMO_LAYER_CLASS = "Reader-Page-Memo-Layer";

    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#ASTERISK_ICON_CLASS
     * @description (Static) Template모드에서 필수 여부 아이콘 클래스 이름
     */
    static ASTERISK_ICON_CLASS = "Asterisk-Icon";

    /**
     * @static
     * @type {Number}
     * @name module:Template/CONSTANTS.CONSTANTS#ASTREISK_DIV_HEIGHT
     * @description (Static) Template모드에서 필수 여부 아이콘 세로길이
     */
    static ASTREISK_DIV_HEIGHT = 12;

    /**
     * @static
     * @type {Number}
     * @name module:Template/CONSTANTS.CONSTANTS#MINIMUM_DRAG_SIZE
     * @description (Static) Template모드에서 드래그를 했다는 최소의 사이즈 기준
     */
    static MINIMUM_DRAG_SIZE = 10;

    static RADIO_TYPE_1 = '1';
    static RAIOD_TYPE_1_PATH = `<path d="M24,12c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S30.6,
            12,24,12zM24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.2,0,24,0zM24,43.2C13.4,43.2,4.8,34.6,4.8,24S13.4,
            4.8,24,4.8S43.2,13.4,43.2,24S34.6,43.2,24,43.2z"/>`;
    static RADIO_TYPE_2 = '2';
    static RAIOD_TYPE_2_PATH = `<path d="M24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.2,0,24,0zM24,43.2C13.4,43.2,4.8,34.6,4.8,24S13.4,\
            4.8,24,4.8S43.2,13.4,43.2,24S34.6,43.2,24,43.2z"/>`;

            
    /**
     * @static
     * @type {String}
     * @name module:Template/CONSTANTS.CONSTANTS#NO_EVENT_LAYER
     * @description (Static) 이벤트를 받지 않는 class.
     */
    static NO_EVENT_LAYER = "No-Event-Layer";

    static READER_FIELD_INPUT_MODE      = 0;
    static READER_FIELD_MEMO_MODE       = 1;
    static READER_FIELD_MEMO_MAKE_MODE  = 2;
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/BaseField.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/Fields/BaseField.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseField: () => (/* binding */ BaseField)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");

/**
 * @module Template/Field
 */




/**
 * @description 필드들의 기본이 되는 Class
 * 
 * @property {String} m_id {@link module:Template/Field.BaseField#m_id}
 * @property {Number} m_x {@link module:Template/Field.BaseField#m_x}
 * @property {Number} m_y {@link module:Template/Field.BaseField#m_y}
 * @property {Number} m_width {@link module:Template/Field.BaseField#m_width}
 * @property {Number} m_height {@link module:Template/Field.BaseField#m_height}
 * @property {Number} m_pageNo {@link module:Template/Field.BaseField#m_pageNo}
 * @property {Number} m_pdfX {@link module:Template/Field.BaseField#m_pdfX}
 * @property {Number} m_pdfX2 {@link module:Template/Field.BaseField#m_pdfX2}
 * @property {Number} m_pdfY {@link module:Template/Field.BaseField#m_pdfY}
 * @property {Number} m_pdfY2 {@link module:Template/Field.BaseField#m_pdfY2}
 * @property {String} m_type {@link module:Template/Field.BaseField#m_type}
 * @property {Number} m_fontSize {@link module:Template/Field.BaseField#m_fontSize}
 * @property {String} m_fontName {@link module:Template/Field.BaseField#m_fontName}
 * @property {String} m_fontWeight {@link module:Template/Field.BaseField#m_fontWeight}
 * @property {String} m_fontStyle {@link module:Template/Field.BaseField#m_fontStyle}
 * @property {String} m_fontColor {@link module:Template/Field.BaseField#m_fontColor}
 * @property {String} m_kind {@link module:Template/Field.BaseField#m_kind}
 * @property {Boolean} m_isRemoved {@link module:Template/Field.BaseField#m_isRemoved}
 * @property {String} m_value {@link module:Template/Field.BaseField#m_value}
 * @property {String} m_ownerId {@link module:Template/Field.BaseField#m_ownerId}
 * @property {String} m_fieldId {@link module:Template/Field.BaseField#m_fieldId}
 * @property {String} m_required {@link module:Template/Field.BaseField#m_required}
 * 
 * @property {Function} fromJson {@link module:Template/Field.BaseField#fromJson}
 * @property {Function} getBBox {@link module:Template/Field.BaseField#getBBox}
 * @property {Function} fieldName {@link module:Template/Field.BaseField#fieldName}
 * @property {Function} showFieldAttribute {@link module:Template/Field.BaseField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.BaseField#showFieldsAttribute}
 * @FileName BaseField.js
 * @since 2021.05.31
 */
class BaseField {

    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     * @param width 필드의 가로길이
     * @param height 필드의 세로길이
     * 
     */
    constructor(id, pageNo, x, y, width, height) {
        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_id
         * @description 필드의 고유 ID
         * @example
         * // getter id()
         * // setter id(val)
         */
        this.m_id = id;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_x
         * @description 필드의 svg상의 x 좌표
         * @example
         * // getter x()
         * // setter x(val)
         */
        this.m_x = x;


        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_y
         * @description 필드의 svg상의 y 좌표
         * @example
         * // getter y()
         * // setter y(val)
         */
        this.m_y = y;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_width
         * @description 필드의 svg상의 가로 길이
         * @example
         * // getter width()
         * // setter width(val)
         */
        this.m_width = width;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_height
         * @description 필드의 svg상의 세로 길이
         * @example
         * // getter height()
         * // setter height(val)
         */
        this.m_height = height;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_pageNo
         * @description 필드의 PDF에서의 페이지 번호
         * @example
         * // getter pageNo()
         * // setter pageNo(val)
         */
        this.m_pageNo = pageNo;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_pdfX
         * @description 필드의 PDF에서의 X좌표
         * @example
         * // getter pdfX()
         * // setter pdfX(val)
         */
        this.m_pdfX = 0;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_pdfY
         * @description 필드의 PDF에서의 Y좌표
         * @example
         * // getter pdfY()
         * // setter pdfY(val)
         */
        this.m_pdfY = 0;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_pdfX2
         * @description 필드의 PDF에서의 X2좌표
         * @example
         * // getter pdfX2()
         * // setter pdfX2(val)
         */
        this.m_pdfX2 = 0;

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_pdfY2
         * @description 필드의 PDF에서의 Y2좌표
         * @example
         * // getter pdfY2()
         * // setter pdfY2(val)
         */
        this.m_pdfY2 = 0;


        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_type
         * @description 필드의 타입이름
         * @readonly
         * @example
         * // getter type()
         */
        this.m_type = BaseField.fieldName();

        /**
         * @type {Number}
         * @name module:Template/Field.BaseField#m_fontSize
         * @description 필드에서 사용되는 폰트크기값
         * @example
         * // getter fontSize()
         * // setter fontSize(val)
         */
        this.m_fontSize = 16;

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_fontName
         * @description 필드에서 사용되는 폰트이름.
         * @example
         * // getter fontName()
         * // setter fontName(val)
         */
        this.m_fontName = 'MalgunGothic';

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_fontWeight
         * @description 필드에서 사용되는 폰트 두께
         * @example
         * // getter fontWeight()
         * // setter fontWeight(val)
         */
        this.m_fontWeight = "";

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_fontStyle
         * @description 필드에서 사용되는 폰트 스타일
         * @example
         * // getter fontStyle()
         * // setter fontStyle(val)
         */
        this.m_fontStyle = "";

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_fontColor
         * @description 필드에서 사용되는 폰트 색상
         * @example
         * // getter fontColor()
         * // setter fontColor(val)
         */
        this.m_fontColor = "#000000"

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_kind
         * @description  필드종류의 한글이름
         * @readonly
         * @example
         * // getter kind()
         */
        this.m_kind = "";

        /**
         * @type {Boolean}
         * @name module:Template/Field.BaseField#m_isRemoved
         * @example
         * // getter isRemoved()
         * // setter isRemoved(val)
         * @description  필드삭제여부
         */
        this.m_isRemoved = false;

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_value
         * @description  필드 값
         * @example
         * // getter value()
         * // setter value(val)
         */
        this.m_value = "";

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_ownerId
         * @description  필드가 속한 서명자의 ID
         * @example
         * // getter ownerId()
         * // setter ownerId(val)
         */
        this.m_ownerId = ""

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_fieldId
         * @description  필드의 별칭
         * @example
         * // getter fieldId()
         * // setter fieldId(val)
         */
        this.m_fieldId = id;

        /**
         * @type {String}
         * @name module:Template/Field.BaseField#m_required
         * @description  필드의 필수여부
         * @example
         * // getter required()
         * // setter required(val)
         */
        this.m_required = "true";

    }

    /**
     * @function fromJson
     * @name module:Template/Field.BaseField#fromJson
     * @description (Static) JSON데이터로 로드한다.
     *
     * @param target 복사할 필드 오브젝트
     * @param jsonData 필드의 JSON데이터.
     * @return {Object} JSON데이터를 로드한 필드를 리턴한다.
     * @static
     */ 
    static fromJson(target, jsonData) {
        let field = Object.assign(target, jsonData);
        return field;
    }

    /**
     * @function fieldName
     * @static
     * @name module:Template/Field.BaseField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     *
     */
    static fieldName() {
        return "BaseField";
    }

    ancestors() {
        return ["BF"];
    }

    get type() {
        return this.m_type;
    }

    get id() {
        return this.m_id;
    }
    get kind() {
        return this.m_kind;
    }

    set id(__id) {
        this.m_id = __id;
    }

    get fieldId() {
        return this.m_fieldId;
    }

    set fieldId(__fieldId) {
        this.m_id = __fieldId;
    }

    get pageNo() {
        return this.m_pageNo;
    }

    set pageNo(_pageNo) {
        this.m_pageNo = _pageNo;
    }

    get x() {
        return this.m_x;
    }

    set x(__x) {
        this.m_x = __x;
    }

    get y() {
        return this.m_y;
    }

    set y(__y) {
        this.m_y = __y;
    }

    get width() {
        return this.m_width;
    }

    set width(__width) {
        this.m_width = __width;
    }

    get height() {
        return this.m_height;
    }

    set height(__height) {
        this.m_height = __height;
    }

    get toolTip() {
        return this.m_toolTip;
    }

    set toolTip(__toolTip) {
        this.m_toolTip = __toolTip;
    }

    get pdfX() {
        return this.m_pdfX;
    }

    set pdfX(__pdfX) {
        this.m_pdfX = __pdfX;
    }

    get pdfY() {
        return this.m_pdfY;
    }

    set pdfY(__pdfY) {
        this.m_pdfY = __pdfY;
    }

    get pdfX2() {
        return this.m_pdfX2;
    }

    set pdfX2(__pdfX2) {
        this.m_pdfX2 = __pdfX2;
    }

    get pdfY2() {
        return this.m_pdfY2;
    }

    set pdfY2(__pdfY2) {
        this.m_pdfY2 = __pdfY2;
    }

    get fontSize() {
        return this.m_fontSize;
    }

    set fontSize(__fontSize) {
        this.m_fontSize = __fontSize;
    }

    get fontName() {
        return this.m_fontName;
    }

    set fontName(__fontName) {
        this.m_fontName = __fontName;
    }

    get fontWeight() {
        return this.m_fontWeight;
    }

    set fontWeight(__fontWeight) {
        this.m_fontWeight = __fontWeight;
    }

    get fontStyle() {
        return this.m_fontStyle;
    }

    set fontStyle(__fontStyle) {
        this.m_fontStyle = __fontStyle;
    }

    get fontColor() {
        return this.m_fontColor;
    }

    set fontColor(__fontColor) {
        this.m_fontColor = __fontColor;
    }

    get isRemoved() {
        return this.m_isRemoved;
    }
    set isRemoved(_isRemoved) {
        this.m_isRemoved = _isRemoved;
    }

    get value() {
        return this.m_value;
    }
    set value(_value) {
        this.m_value = _value;
    }

    get ownerId() {
        return this.m_ownerId;
    }

    set ownerId(__ownerId) {
        this.m_ownerId = __ownerId;
    }

    get required() {
        return this.m_required;
    }

    set required(__required) {
        this.m_required = __required;
    }

    /**
     *
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.BaseField#showFieldAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} node  속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue    서명자 아이디
     * @param {Array} userList   서명자 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue,
        userList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);
        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        $(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(ownerSelect).val(ownerIdValue).trigger("change");
        $(ownerSelect).on("change", changeEventFunc);

        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);


        panel.setAttribute("Field-id-list", idValue);
        node.className = "Editor-Attribute";
        node.classList.add("Base-Field");
        node.appendChild(panel);
    }

    /**
     *
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.BaseField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} ownerNode  속성 팝업 Node
     * @param {Array} fieldList    필드들의 리스트
     * @param {HTML} attrNode   속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList  서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc   속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     * @static
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });
        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        BaseField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue,
            userList,
            changeEventFunc);
    }

    validateValue(propertyName, value) {
        return true;
    }

    /**
     * 
     * @function getBBox
     * @name module:Template/Field.BaseField#getBBox
     * @description 필드의 bounding Rect를 리턴 .
     * @memberOf module:Template/Field.BaseField
     * @return {Rect} Object 
     * @Date : 2021. 5. 31
     */
    getBBox() {
        return {
            left: this.x,
            top: this.y,
            right: this.x + this.width,
            bottom: this.y + this.height,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        }
    }
} 


/***/ }),

/***/ "./js/pdf_form/src/Fields/CheckboxField.js":
/*!*************************************************!*\
  !*** ./js/pdf_form/src/Fields/CheckboxField.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxField: () => (/* binding */ CheckboxField)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");

/**
 * @module Template/Field
*/





/**
 * @description 체크박스 필드 Class
 *
 * @property {Function} fieldName {@link module:Template/Field.CheckboxField#fieldName}
 * @property {Function} widthValue {@link module:Template/Field.CheckboxField#widthValue}
 * @property {Function} heightValue {@link module:Template/Field.CheckboxField#heightValue}
 * @property {Function} getSVGFieldObject {@link module:Template/Field.CheckboxField#getSVGFieldObject}
 * 
 * @augments BaseField {@link module:Template/Field.BaseField#BaseField}
 * @FileName CheckboxField.js
 * @since 2021.05.31
 */

class CheckboxField extends _BaseField__WEBPACK_IMPORTED_MODULE_0__.BaseField {

    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, CheckboxField.widthValue(), CheckboxField.heightValue());
        this.m_type = CheckboxField.fieldName();

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.checkFieldTool");

        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }

    /**
     * @function fieldName
     * @name module:Template/Field.CheckboxField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "CheckboxField";
    }
    
    ancestors() {
        return ["CBF", "BF"];
    }

    /**
     * @function widthValue
     * @name module:Template/Field.CheckboxField#widthValue
     * @description (Static) 필드의 초기 가로 길이
     * @return {Number}
     * @static
     *
     */
    static widthValue() {
        return 60;
    }

    /**
     * @function heightValue
     * @name module:Template/Field.CheckboxField#heightValue
     * @description (Static) 필드의 초기 세로 길이
     * @return {Number}
     * @static
     *
     */
    static heightValue() {
        return 60;
    }

    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.CheckboxField#getSVGFieldObject
     * @memberOf module:Template/Field.CheckboxField
     * @description 필드의 정보를 가지고 SVG Element를 생성한다.
     *
     * @param {Object} canvas  Snap SVG의 Canvas Object
     * @param {Object} mainGroup   SVG의 메인 Node
     * @param {Number} scale  현재 PDF의 Scale
     * @param {HTML} ownerNode   해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Callback} removeDragOverGroupFunc   드래그 되어 선택되어진 Field Group을 제거하는 callback function
     * @param {Callback} changeValueEventFunc     속성값이 변할때 호출되는 callback function
     * @param {Callback} changeFreeTransformFunc     FreeTransform을 다시 생성하기 위한 callback function
     * @return SVG Node Element
     * @Date : 2021. 5. 31
     */
    getSVGFieldObject(canvas, mainGroup, scale, ownerNode, removeDragOverGroupFunc, changeValueEventFunc, changeFreeTransformFunc) {
        let group = mainGroup.group();
        group.attr({
            id: this.id + "Group",
            cursor: "move"
        });
        let rect = canvas.rect(this.x, this.y, this.width * scale, this.height * scale);
        rect.attr({
            id: this.id,
            "fill-opacity": "0.6",
            "fill": "#ffac7f"
        });
        group.append(rect);
        
        const checkString = '<svg xmlns="http://www.w3.org/2000/svg" x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"  viewBox="0 0 48 48"><path d="M17.2 32.2L4.9 19.9 0 24.8 17.2 42 48 10.9 43.1 6z"/></svg >'
        const p = Snap.parse(checkString);
        group.append(p);

        group.hover(
            function () { // f_in
            },
            function () { // f_out
            }
        );

        let _chkField = this;
        let mousePos = { x: 0, y: 0 };
        group.mousedown(function (evt) {
            mousePos.x = evt.pageX;
            mousePos.y = evt.pageY;
            const items = mainGroup.selectAll('g');
            items.forEach(function (element) {
                if (element !== group) {
                    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                        element.freeTransform.hideResizeHandler();
                    }
                }
            });
            if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                group.freeTransform.showResizeHandler();
            } else {
                changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
            }
        });

        group.mouseup(function (evt) {
            if (group.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
                if (Math.abs(mousePos.x - evt.pageX) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE
                    || Math.abs(mousePos.y - evt.pageY) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE) {
                    return;
                }
                removeDragOverGroupFunc.call();
                const items = mainGroup.selectAll('g');
                items.forEach(function (element) {
                    if (element !== group) {
                        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                            element.freeTransform.hideResizeHandler();
                        }
                    }
                });
                if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                    group.freeTransform.showResizeHandler();
                } else {
                    changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
                }
                _chkField.constructor.showFieldsAttribute(ownerNode, [_chkField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            } else {
                _chkField.constructor.showFieldsAttribute(ownerNode, [_chkField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            }
        });
        return group;

    }
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/ComboboxField.js":
/*!*************************************************!*\
  !*** ./js/pdf_form/src/Fields/ComboboxField.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboboxField: () => (/* binding */ ComboboxField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_3__);

/**
 * @module Template/Field
*/






/**
 * @description 콤보박스 필드 Class
 *
 * @property {String} m_comboboxList {@link module:Template/Field.ComboboxField#m_comboboxList}
 *
 * @property {Function} fieldName {@link module:Template/Field.ComboboxField#fieldName}
 * @property {Function} showFieldAttribute {@link module:Template/Field.ComboboxField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.ComboboxField#showFieldsAttribute}
 * 
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName ComboboxField.js
 * @since 2021.05.31
 */
class ComboboxField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {

    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, ComboboxField.widthValue(), ComboboxField.heightValue());
        this.m_type = ComboboxField.fieldName();

        /**
         * @type {String}
         * @name module:Template/Field.ComboboxField#m_comboboxList
         * @description 콤보박스에 들어갈 리스트
         * @example
         * // getter comboboxList()
         * // setter comboboxList(val)
         */
        this.m_comboboxList = "";

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.comboFieldTool");
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }

    /**
     * @function fieldName
     * @name module:Template/Field.ComboboxField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "ComboboxField";
    }
    
    ancestors() {
        return ["CMBF", "TBF", "BF"];
    }

    get comboboxList() {
        return this.m_comboboxList;
    }
    set comboboxList(__comboboxList) {
        this.m_comboboxList = __comboboxList;
    }

    /**
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.ComboboxField#showFieldAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} node   속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue    서명자 아이디
     * @param {String} dvValue     기본값
     * @param {String} fontFamilyNameValue    폰트 이름
     * @param {String} fontSizeValue     폰트 크기 값
     * @param {String} textAlignValue    텍스트 가로 정렬 값
     * @param {String} boldValue     폰트 볼드 여부
     * @param {String} fontColorValue     폰트 칼라
     * @param {String} comboboxListValue    콤보박스 리스트에 들어가는 리스트 값
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue, comboboxListValue,
        userList, dvOptionList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        jQuery(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        jQuery(ownerSelect).val(ownerIdValue).trigger("change");
        jQuery(ownerSelect).on("change", changeEventFunc);

        //12-28
        if (dvOptionList && Array.isArray(dvOptionList) && dvOptionList.length > 0) {
            var defaultValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "defaultValue", dvOptionList, "Template.defaultValueText", true);
            panel.appendChild(defaultValueRow);

            let defaultValueSelect = defaultValueRow.querySelector("select");
            $(defaultValueSelect).select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
            $(defaultValueSelect).val(dvValue).trigger("change");
            $(defaultValueSelect).on("change", changeEventFunc);
        }


        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        var comboboxRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeTextAreaNode(idValue, "comboboxList", "Template.comboBoxSelctValueText", comboboxListValue, "", changeEventFunc);
        panel.appendChild(comboboxRow);

        var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextAttrbuteNode(idValue, fontColorValue, textAlignValue, boldValue, changeEventFunc);
        panel.appendChild(fontAttrRow.row);

        let fontFamilyComboSelect = fontAttrRow.fontFamilyCombo.querySelector("select");
        $(fontFamilyComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontFamilyComboSelect).val(fontFamilyNameValue).trigger("change");
        $(fontFamilyComboSelect).on("change", changeEventFunc);
        let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
        $(fontSizeComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontSizeComboSelect).val(fontSizeValue).trigger("change");
        $(fontSizeComboSelect).on("change", changeEventFunc);

        let colorInput = fontAttrRow.colorBtn.querySelector("button");
        colorInput.style.backgroundColor = fontColorValue;
        let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default())(colorInput, { color: fontColorValue });
        colorInput.value = fontColorValue;
        picker.on('change', function (r, g, b, a) {
            if (!picker.visible) {
                return;
            }
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);
            colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
        });
        picker.on('exit', function (r, g, b, a) {
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
            colorTextInput.dispatchEvent(new Event("change"));
        });

        panel.setAttribute("Field-id-list", idValue);
        node.className = "Editor-Attribute";
        node.classList.add("Text-Field");
        node.appendChild(panel);
    }


    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.ComboboxField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {HTML} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });

        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var dvValue = fieldList[0].defaultValue;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].defaultValue !== dvValue) {
                dvValue = '';
                break;
            }
        }

        var fontFamilyNameValue = fieldList[0].fontName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontName !== fontFamilyNameValue) {
                fontFamilyNameValue = '';
                break;
            }
        }
        var fontSizeValue = fieldList[0].fontSize;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontSize !== fontSizeValue) {
                fontSizeValue = '';
                break;
            }
        }

        var textAlignValue = fieldList[0].textAlign;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].textAlign !== textAlignValue) {
                textAlignValue = '';
                break;
            }
        }

        var boldValue = fieldList[0].isBold;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].isBold !== boldValue) {
                boldValue = '';
                break;
            }
        }
        var fontColorValue = fieldList[0].fontColor;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontColor !== fontColorValue) {
                fontColorValue = '';
                break;
            }
        }

        var comboboxListValue = fieldList[0].comboboxList;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].comboboxList !== comboboxListValue) {
                comboboxListValue = '';
                break;
            }
        }

        let dvOptions = [];

        if (comboboxListValue !== '') {
            const combolist = comboboxListValue.split("\n");
            for (var idx = 0; idx < combolist.length; ++idx) {
                if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(combolist[idx])) {
                    continue;
                }
                    
                dvOptions.push({
                    text: combolist[idx],
                    value: combolist[idx]
                })
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        ComboboxField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue, comboboxListValue,
            userList, dvOptions,
            changeEventFunc);
    }

    validateValue(propertyName, value) {
        return true;
    }

}


/***/ }),

/***/ "./js/pdf_form/src/Fields/DateField.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/Fields/DateField.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateField: () => (/* binding */ DateField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_3__);

/**
 * @module Template/Field
*/






/**
 * @description 날짜 필드 Class
 *
 * @property {Function} fieldName {@link module:Template/Field.DateField#fieldName}
 * @property {Function} showFieldAttribute {@link module:Template/Field.DateField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.DateField#showFieldsAttribute}
 * 
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName DateField.js
 * @since 2021.05.31
 */
class DateField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, DateField.widthValue(), DateField.heightValue());
        this.m_type = DateField.fieldName();
        
        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.dateFieldTool");

        /**
         * @type {String}
         * @name module:Template/Field.DateField#m_inputMax
         * @description 날짜의 최대값
         * @example
         * // getter inputMax()
         * // setter inputMax(val)
         */
        this.m_inputMax = "";

        /**
         * @type {String}
         * @name module:Template/Field.DateField#m_inputMin
         * @description 날짜의 최소값
         * @example
         * // getter inputMin()
         * // setter inputMin(val)
         */
        this.m_inputMin = "";

        /**
         * @type {String}
         * @name module:Template/Field.DateField#m_useCurrentDate
         * @description  현재 날짜를 기본값으로 사용할 지 여부
         * @example
         * // getter useCurrentDate()
         * // setter useCurrentDate(val)
         */
        this.m_useCurrentDate = "true";

        /**
         * @type {String}
         * @name module:Template/Field.DateField#m_inputFormat
         * @description  날짜 포멧
         * @example
         * // getter inputFormat()
         * // setter inputFormat(val)
         */
        this.m_inputFormat = "Y-m-d";
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }

    /**
     * @function fieldName
     * @name module:Template/Field.DateField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "DateField";
    }
    
    ancestors() {
        return ["DF", "TBF", "BF"];
    }

    get inputFormat() {
        return this.m_inputFormat;
    }

    set inputFormat(__inputFormat) {
        this.m_inputFormat = __inputFormat;
    }

    get inputMax() {
        return this.m_inputMax;
    }

    set inputMax(__inputMax) {
        this.m_inputMax = __inputMax;
    }

    get inputMin() {
        return this.m_inputMin;
    }

    set inputMin(__inputMin) {
        this.m_inputMin = __inputMin;
    }

    get useCurrentDate() {
        return this.m_useCurrentDate;
    }

    set useCurrentDate(__useCurrentDate) {
        this.m_useCurrentDate = __useCurrentDate;
    }

    /**
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.DateField#showFieldAttribute
     * @description (Static)  필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} node  속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue     서명자 아이디
     * @param {String} inputFormatValue     날짜 형식
     * @param {String} useCurrentDateValue     현재 날짜를 쓰는지 여부
     * @param {String} fontFamilyNameValue     폰트 이름
     * @param {String} fontSizeValue     폰트 크기 값
     * @param {String} textAlignValue     텍스트 가로 정렬 값
     * @param {String} boldValue     폰트 볼드 여부
     * @param {String} fontColorValue     폰트 칼라
     * @param {String} comboboxListValue    콤보박스 리스트에 들어가는 리스트 값
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, inputFormatValue, useCurrentDateValue,
        fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
        userList,
        changeEventFunc) {
        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        $(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(ownerSelect).val(ownerIdValue).trigger("change");
        $(ownerSelect).on("change", changeEventFunc);

        var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextAttrbuteNode(idValue, fontColorValue, textAlignValue, boldValue, changeEventFunc);
        panel.appendChild(fontAttrRow.row);

        let fontFamilyComboSelect = fontAttrRow.fontFamilyCombo.querySelector("select");
        $(fontFamilyComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontFamilyComboSelect).val(fontFamilyNameValue).trigger("change");
        $(fontFamilyComboSelect).on("change", changeEventFunc);
        let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
        $(fontSizeComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontSizeComboSelect).val(fontSizeValue).trigger("change");
        $(fontSizeComboSelect).on("change", changeEventFunc);

        let colorInput = fontAttrRow.colorBtn.querySelector("button");
        colorInput.style.backgroundColor = fontColorValue;
        let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default())(colorInput, { color: fontColorValue });
        colorInput.value = fontColorValue;
        picker.on('change', function (r, g, b, a) {
            if (!picker.visible) {
                return;
            }
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);
            colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
        });
        picker.on('exit', function (r, g, b, a) {
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
            colorTextInput.dispatchEvent(new Event("change"));
        });


        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        var inputFormatRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "inputFormat", _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.dateFormatComboBox, "Template.dateFormatText", false);
        panel.appendChild(inputFormatRow);

        let inputFormatSelect = inputFormatRow.querySelector("select");
        $(inputFormatSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(inputFormatSelect).val(inputFormatValue).trigger("change");
        $(inputFormatSelect).on("change", changeEventFunc);

        var useCurrentRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeCheckBoxNode(idValue, "useCurrentDate", "Template.useCurrentDateText", useCurrentDateValue, changeEventFunc);
        panel.appendChild(useCurrentRow);

        panel.setAttribute("Field-id-list", idValue);
        node.className = "Editor-Attribute";
        node.classList.add("Text-Field");
        node.appendChild(panel);
       
    }

    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.DateField#showFieldsAttribute
     * @description (Static)  필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {HTML} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });

        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var idValue = idValueArr.join();
        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        var fontFamilyNameValue = fieldList[0].fontName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontName !== fontFamilyNameValue) {
                fontFamilyNameValue = '';
                break;
            }
        }
        var fontSizeValue = fieldList[0].fontSize;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontSize !== fontSizeValue) {
                fontSizeValue = '';
                break;
            }
        }

        var textAlignValue = fieldList[0].textAlign;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].textAlign !== textAlignValue) {
                textAlignValue = '';
                break;
            }
        }

        var boldValue = fieldList[0].isBold;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].isBold !== boldValue) {
                boldValue = '';
                break;
            }
        }
        var fontColorValue = fieldList[0].fontColor;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontColor !== fontColorValue) {
                fontColorValue = '';
                break;
            }
        }
        var inputFormatValue = fieldList[0].inputFormat;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].inputFormat !== inputFormatValue) {
                inputFormatValue = '';
                break;
            }
        }

        var useCurrentDateValue = fieldList[0].useCurrentDate;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].useCurrentDate !== useCurrentDateValue) {
                useCurrentDateValue = '';
                break;
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        DateField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, inputFormatValue, useCurrentDateValue,
            fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
            userList,
            changeEventFunc);
    }
}


/***/ }),

/***/ "./js/pdf_form/src/Fields/ImageField.js":
/*!**********************************************!*\
  !*** ./js/pdf_form/src/Fields/ImageField.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageField: () => (/* binding */ ImageField)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");

/**
 * @module Template/Field
*/





/**
 * @description 이미지 필드 Class
 *
 *
 * @property {Function} fieldName {@link module:Template/Field.ImageField#fieldName}
 * @property {Function} widthValue {@link module:Template/Field.ImageField#widthValue}
 * @property {Function} heightValue {@link module:Template/Field.ImageField#heightValue}
 * @property {Function} makeSVGText {@link module:Template/Field.ImageField#makeSVGText}
 * @property {Function} getSVGFieldObject {@link module:Template/Field.ImageField#getSVGFieldObject}
 *
 * @augments BaseField {@link module:Template/Field.BaseField#BaseField}
 * @FileName ImageField.js
 * @since 2021.05.31
 */
class ImageField extends _BaseField__WEBPACK_IMPORTED_MODULE_0__.BaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, ImageField.widthValue(), ImageField.heightValue());
        this.m_type = ImageField.fieldName();

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.imageFieldTool");

        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }


    /**
     * @function fieldName
     * @name module:Template/Field.ImageField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "ImageField";
    }

    
    ancestors() {
        return ["IMGF", "BF"];
    }

    /**
     * @function widthValue
     * @name module:Template/Field.ImageField#widthValue
     * @description (Static) 필드의 초기 가로 길이
     * @return {Number}
     * @static
     *
     */
    static widthValue() {
        return 150;
    }
    
    /**
     * @function heightValue
     * @name module:Template/Field.ImageField#heightValue
     * @description (Static)  필드의 초기 세로 길이
     * @return {Number}
     * @static
     *
     */
    static heightValue() {
        return 60;
    }

    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.ImageField#makeSVGText
     * @memberOf module:Template/Field.ImageField
     * @description 필드의 종류를 표현하는 SVG Text element
     *
     * @param {Number} scale 현재 PDF의 Scale
     * @return SVG Node Element
     * @Date : 2021. 5. 31
     */
    makeSVGText(scale) {
        let value = this.m_fieldId;
        var textFontColor = "fill='" + this.fontColor + "' ";

        let textPos = ' x="50%"  dy="0.35em" text-anchor="middle" '
        if (this.textAlign === "left") {
            textPos = ' x="3%"  dy="0.35em" text-anchor="start" ';
        } else if (this.textAlign === "right") {
            textPos = ' x="97%" dy="0.35em" text-anchor="end" ';
        }

        let textVerticalPos = 'y="50%"';

        let fontInfo = ' font-size="' + this.fontSize + 'px" ';
        let textObj = '<text' + textPos + textVerticalPos + fontInfo + textFontColor + '>' + value + '</text>';
        const fobjectSVG = '<svg x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"><g  >' + textObj + '</g></svg>';

        return fobjectSVG;
    }

    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.ImageField#getSVGFieldObject
     * @memberOf module:Template/Field.ImageField
     * @description 필드의 정보를 가지고 SVG Element를 생성한다.
     *
     * @param {Object} canvas Snap SVG의 Canvas Object
     * @param {Object} mainGroup   SVG의 메인 Node
     * @param {Number} scale  현재 PDF의 Scale
     * @param {HTML} ownerNode    해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Callback} removeDragOverGroupFunc     드래그 되어 선택되어진 Field Group을 제거하는 callback function
     * @param {Callback} changeValueEventFunc    속성값이 변할때 호출되는 callback function
     * @param {Callback} changeFreeTransformFunc     FreeTransform을 다시 생성하기 위한 callback function
     * @return SVG Node Element
     * @Date : 2021. 5. 31
     */
    getSVGFieldObject(canvas, mainGroup, scale, ownerNode, removeDragOverGroupFunc, changeValueEventFunc, changeFreeTransformFunc) {
        let group = mainGroup.group();
        group.attr({
            id: this.id + "Group",
            cursor: "move"
        });
        let rect = canvas.rect(this.x, this.y, this.width * scale, this.height * scale);
        rect.attr({
            id: this.id,
            "fill-opacity": "0.6",
            "fill": "#ffac7f"
        });
        group.append(rect);
        const p = Snap.parse(this.makeSVGText(scale));
        group.append(p);

        group.hover(
            function () { // f_in
            },
            function () { // f_out
            }
        );

        let _imgField = this;
        let mousePos = { x: 0, y: 0 };
        group.mousedown(function (evt) {
            mousePos.x = evt.pageX;
            mousePos.y = evt.pageY;
            const items = mainGroup.selectAll('g');
            items.forEach(function (element) {
                if (element !== group) {
                    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                        element.freeTransform.hideResizeHandler();
                    }
                }
            });
            if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                group.freeTransform.showResizeHandler();
            } else {
                changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
            }
        });

        group.mouseup(function (evt) {
            if (group.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
                if (Math.abs(mousePos.x - evt.pageX) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE
                    || Math.abs(mousePos.y - evt.pageY) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE) {
                    return;
                }
                removeDragOverGroupFunc.call();
                const items = mainGroup.selectAll('g');
                items.forEach(function (element) {
                    if (element !== group) {
                        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                            element.freeTransform.hideResizeHandler();
                        }
                    }
                });
                if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                    group.freeTransform.showResizeHandler();
                } else {
                    changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
                }
                _imgField.constructor.showFieldsAttribute(ownerNode, [_imgField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            } else {
                _imgField.constructor.showFieldsAttribute(ownerNode, [_imgField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            }
        });
        return group;

    }
}


/***/ }),

/***/ "./js/pdf_form/src/Fields/LabelField.js":
/*!**********************************************!*\
  !*** ./js/pdf_form/src/Fields/LabelField.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelField: () => (/* binding */ LabelField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_3__);

/**
 * @module Template/Field
*/






/**
 * @description 레이블 필드 Class
 *
 * @property {Function} fieldName {@link module:Template/Field.LabelField#fieldName}
 * @property {Function} showFieldAttribute {@link module:Template/Field.LabelField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.LabelField#showFieldsAttribute}
 * @property {Function} makeSVGText {@link module:Template/Field.LabelField#makeSVGText}
 *
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName LabelField.js
 * @since 2021.05.31
 */
class LabelField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, LabelField.widthValue(), LabelField.heightValue());
        this.m_type = LabelField.fieldName();


        this.m_maxValueLength = 100;

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.labelFieldTool");
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }


    /**
     * @function fieldName
     * @name module:Template/Field.LabelField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "LabelField";
    }

    ancestors() {
        return ["LF", "TBF", "BF"];
    }

    /**
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.LabelField#showFieldAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} node   속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue     서명자 아이디
     * @param {String} dvValue     기본값
     * @param {String} fontFamilyNameValue     폰트 이름
     * @param {String} fontSizeValue     폰트 크기 값
     * @param {String} textAlignValue     텍스트 가로 정렬 값
     * @param {String} boldValue     폰트 볼드 여부
     * @param {String} fontColorValue     폰트 칼라
     * @param {String} fieldValue    레이블 텍스트
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue, fieldValue,
        userList, dvOptionList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        jQuery(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        jQuery(ownerSelect).val(ownerIdValue).trigger("change");
        jQuery(ownerSelect).on("change", changeEventFunc);

        //12-28
        if (dvOptionList && Array.isArray(dvOptionList) && dvOptionList.length > 0) {
            var defaultValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "defaultValue", dvOptionList, "Template.defaultValueText", true);
            panel.appendChild(defaultValueRow);

            let defaultValueSelect = defaultValueRow.querySelector("select");
            $(defaultValueSelect).select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
            $(defaultValueSelect).val(dvValue).trigger("change");
            $(defaultValueSelect).on("change", changeEventFunc);
        }

        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        var fieldValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "value", "Template.labelValueText", fieldValue, "", "", changeEventFunc);
        panel.appendChild(fieldValueRow);

        var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextAttrbuteNode(idValue, fontColorValue, textAlignValue, boldValue, changeEventFunc);
        panel.appendChild(fontAttrRow.row);

        let fontFamilyComboSelect = fontAttrRow.fontFamilyCombo.querySelector("select");
        $(fontFamilyComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontFamilyComboSelect).val(fontFamilyNameValue).trigger("change");
        $(fontFamilyComboSelect).on("change", changeEventFunc);
        let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
        $(fontSizeComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontSizeComboSelect).val(fontSizeValue).trigger("change");
        $(fontSizeComboSelect).on("change", changeEventFunc);

        let colorInput = fontAttrRow.colorBtn.querySelector("button");
        colorInput.style.backgroundColor = fontColorValue;
        let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default())(colorInput, { color: fontColorValue });
        colorInput.value = fontColorValue;
        picker.on('change', function (r, g, b, a) {
            if (!picker.visible) {
                return;
            }
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);
            colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
        });
        picker.on('exit', function (r, g, b, a) {
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
            colorTextInput.dispatchEvent(new Event("change"));
        });

        panel.setAttribute("Field-id-list", idValue);

        node.className = "Editor-Attribute";
        node.classList.add("Text-Field");
        node.appendChild(panel);
    }


    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.LabelField#showFieldsAttribute
     * @description 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {HTML} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });

        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }


        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var dvValue = fieldList[0].defaultValue;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].defaultValue !== dvValue) {
                dvValue = '';
                break;
            }
        }

        var fontFamilyNameValue = fieldList[0].fontName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontName !== fontFamilyNameValue) {
                fontFamilyNameValue = '';
                break;
            }
        }
        var fontSizeValue = fieldList[0].fontSize;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontSize !== fontSizeValue) {
                fontSizeValue = '';
                break;
            }
        }

        var textAlignValue = fieldList[0].textAlign;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].textAlign !== textAlignValue) {
                textAlignValue = '';
                break;
            }
        }

        var boldValue = fieldList[0].isBold;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].isBold !== boldValue) {
                boldValue = '';
                break;
            }
        }
        var fontColorValue = fieldList[0].fontColor;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontColor !== fontColorValue) {
                fontColorValue = '';
                break;
            }
        }

        var fieldValue = fieldList[0].value;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].value !== fieldValue) {
                fieldValue = '';
                break;
            }
        }

        LabelField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue, fieldValue,
            userList, dvOptionList,
            changeEventFunc);
    }

    validateValue(propertyName, value) {
        return true;
    }


    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.LabelField#makeSVGText
     * @memberOf module:Template/Field.LabelField
     * @description (Static)  필드의 종류를 표현하는 SVG Text element
     *
     * @param {Number} scale 현재 PDF의 Scale
     * @return {Object} SVG Node Element
     * @Date : 2021. 5. 31
     */
    makeSVGText(scale) {
        let value = this.value;
        if (value === '' && this.defaultValueText === '') {
            value = this.m_fieldId;
        } else if (value === '' && this.defaultValueText !== '') {
            value = this.defaultValueText;
        }
        var textFontColor = "fill='" + this.fontColor + "' ";

        let textPos = ' x="50%"  dy="0.35em" text-anchor="middle" '
        if (this.textAlign === "left") {
            textPos = ' x="3%"  dy="0.35em" text-anchor="start" ';
        } else if (this.textAlign === "right") {
            textPos = ' x="97%" dy="0.35em" text-anchor="end" ';
        }

        let textVerticalPos = 'y="50%"';
        if (this.textVeticalAlign === "top") {
            textVerticalPos = 'y="25%"';
        } else if (this.textVeticalAlign === "bottom") {
            textVerticalPos = 'y="70%"';
        }

        let fontWeigth = "";
        if (this.isBold === "true") {
            fontWeigth = " font-weight='bold' ";
        }

        let fontFmaily = " font-family='" + this.fontName + "' ";

        let fontInfo = ' font-size="' + this.fontSize * scale + 'px" ';
        let textObj = '<text' + textPos + textVerticalPos + fontFmaily + fontInfo + textFontColor + fontWeigth + '>' + value + '</text>';
        const fobjectSVG = '<svg x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"><g  >' + textObj + '</g></svg>';

        return fobjectSVG;
    }
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/MultiLineTextField.js":
/*!******************************************************!*\
  !*** ./js/pdf_form/src/Fields/MultiLineTextField.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiLineTextField: () => (/* binding */ MultiLineTextField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");

/**
 * @module Template/Field
*/





/**
 * @description 멀티라인 필드 Class
 *
 * @property {Function} fieldName {@link module:Template/Field.MultiLineTextField#fieldName}
 * @property {Function} showFieldAttribute {@link module:Template/Field.MultiLineTextField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.MultiLineTextField#showFieldsAttribute}
 * @property {Function} makeSVGText {@link module:Template/Field.MultiLineTextField#makeSVGText}
 *
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName MultiLineTextField.js
 * @since 2021.05.31
 */
class MultiLineTextField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, MultiLineTextField.widthValue(), MultiLineTextField.heightValue());
        this.m_type = MultiLineTextField.fieldName();

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.multilineFieldTool");
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
        this.textVeticalAlign = "top";
    }

    /**
     * @function fieldName
     * @name module:Template/Field.MultiLineTextField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "MultiLineTextField";
    }

    ancestors() {
        return ["MLTF", "TBF", "BF"];
    }

    /**
     * @function widthValue
     * @name module:Template/Field.MultiLineTextField#widthValue
     * @description (Static) 필드의 초기 가로 길이
     * @return {Number}
     * @static
     *
     */
    static widthValue() {
        return 150;
    }

    /**
     * @function heightValue
     * @name module:Template/Field.MultiLineTextField#heightValue
     * @description (Static) 필드의 초기 세로 길이
     * @return {Number}
     * @static
     *
     */
    static heightValue() {
        return 60;
    }

    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.MultiLineTextField#showFieldsAttribute
     * @description (Static)  필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {HTML} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField.showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc);
    }

    validateValue(propertyName, value) {
        return true;
    }
}


/***/ }),

/***/ "./js/pdf_form/src/Fields/NumberField.js":
/*!***********************************************!*\
  !*** ./js/pdf_form/src/Fields/NumberField.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberField: () => (/* binding */ NumberField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_2__);

/**
 * @module Template/Field
 */





/**
 * @description 숫자 필드 Class
 *
 * @property {Number} m_inputMax {@link module:Template/Field.NumberField#m_inputMax}
 * @property {Number} m_inputMin {@link module:Template/Field.NumberField#m_inputMin}
 * 
 * @property {Function} fieldName {@link module:Template/Field.NumberField#fieldName}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.NumberField#showFieldsAttribute}
 * 
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName NumberField.js
 * @since 2021.05.31
 */
class NumberField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, NumberField.widthValue(), NumberField.heightValue());
        this.m_type = NumberField.fieldName();
        
        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.numberFieldTool");

        /**
         * @type {Number}
         * @name module:Template/Field.NumberField#m_inputMax
         * @description 숫자 필드의 최대값
         * @example
         * // getter inputMax()
         * // setter inputMax(val)
         */
        this.m_inputMax = null;

        /**
         * @type {Number}
         * @name module:Template/Field.NumberField#m_inputMin
         * @description 숫자 필드의 최소값
         * @example
         * // getter inputMin()
         * // setter inputMin(val)
         */
        this.m_inputMin = null;

        this.m_useCalc = 'false';

        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
        
    }

    /**
     * @function fieldName
     * @name module:Template/Field.NumberField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "NumberField";
    }
    
    ancestors() {
        return ["NF", "TBF", "BF"];
    }

    get inputMax() {
        return this.m_inputMax;
    }

    set inputMax(__inputMax) {
        this.m_inputMax = __inputMax;
    }

    get inputMin() {
        return this.m_inputMin;
    }

    set inputMin(__inputMin) {
        this.m_inputMin = __inputMin;
    }

    /**
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.TextBaseField#showFieldAttribute
     * @description  (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} node  속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue     서명자 아이디
     * @param {String} dvValue     기본값
     * @param {Number} minValue     최소값
     * @param {Number} maxValue     최대값
     * @param {String} fontFamilyNameValue     폰트 이름
     * @param {String} fontSizeValue     폰트 크기 값
     * @param {String} textAlignValue     텍스트 가로 정렬 값
     * @param {String} boldValue     폰트 볼드 여부
     * @param {String} fontColorValue     폰트 칼라
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, minValue, maxValue, useCalcVal, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
        userList, dvOptionList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        jQuery(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        jQuery(ownerSelect).val(ownerIdValue).trigger("change");
        jQuery(ownerSelect).on("change", changeEventFunc);

        //12-28
        if (dvOptionList && Array.isArray(dvOptionList) && dvOptionList.length > 0) {
            var defaultValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "defaultValue", dvOptionList, "Template.defaultValueText", true);
            panel.appendChild(defaultValueRow);

            let defaultValueSelect = defaultValueRow.querySelector("select");
            $(defaultValueSelect).select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
            $(defaultValueSelect).val(dvValue).trigger("change");
            $(defaultValueSelect).on("change", changeEventFunc);
        }

        let minVal = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(minValue) ? '' : Number(minValue);
        var minValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldMinValue", "Template.fieldMinValue", minVal, "number", "", changeEventFunc);
        panel.appendChild(minValueRow);
        let maxVal = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(maxValue) ? '' : Number(maxValue);
        var maxValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldMaxValue", "Template.fieldMaxValue", maxVal, "number", "", changeEventFunc);
        panel.appendChild(maxValueRow);

        let calcRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "useCalc", "Template.useCalc", useCalcVal, changeEventFunc);
        panel.appendChild(calcRow);

        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextAttrbuteNode(idValue, fontColorValue, textAlignValue, boldValue, changeEventFunc);
        panel.appendChild(fontAttrRow.row);

        let fontFamilyComboSelect = fontAttrRow.fontFamilyCombo.querySelector("select");
        $(fontFamilyComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontFamilyComboSelect).val(fontFamilyNameValue).trigger("change");
        $(fontFamilyComboSelect).on("change", changeEventFunc);
        let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
        $(fontSizeComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontSizeComboSelect).val(fontSizeValue).trigger("change");
        $(fontSizeComboSelect).on("change", changeEventFunc);

        let colorInput = fontAttrRow.colorBtn.querySelector("button");
        colorInput.style.backgroundColor = fontColorValue;
        let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default())(colorInput, { color: fontColorValue });
        colorInput.value = fontColorValue;
        picker.on('change', function (r, g, b, a) {
            if (!picker.visible) {
                return;
            }
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default().HEX([r, g, b, a]);
            colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default().HEX([r, g, b, a]));
        });
        picker.on('exit', function (r, g, b, a) {
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_2___default().HEX([r, g, b, a]));
            colorTextInput.dispatchEvent(new Event("change"));
        });

        panel.setAttribute("Field-id-list", idValue);

        node.className = "Editor-Attribute";
        node.classList.add("Text-Field");
        node.appendChild(panel);
    }


     /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.NumberField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {HTML} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {HTML} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });

        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var dvValue = fieldList[0].defaultValue;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].defaultValue !== dvValue) {
                dvValue = '';
                break;
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        let minValue = fieldList[0].m_inputMin;
        for (let idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].m_inputMin !== minValue) {
                minValue = '';
                break;
            }
        }
        let maxValue = fieldList[0].m_inputMax;
        for (let idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].m_inputMax !== maxValue) {
                maxValue = '';
                break;
            }
        }

        let useCalcValue = fieldList[0].m_useCalc;
        for (let idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].m_useCalc !== useCalcValue) {
                useCalcValue = '';
                break;
            }
        }

        var fontFamilyNameValue = fieldList[0].fontName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontName !== fontFamilyNameValue) {
                fontFamilyNameValue = '';
                break;
            }
        }
        var fontSizeValue = fieldList[0].fontSize;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontSize !== fontSizeValue) {
                fontSizeValue = '';
                break;
            }
        }

        var textAlignValue = fieldList[0].textAlign;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].textAlign !== textAlignValue) {
                textAlignValue = '';
                break;
            }
        }

        var boldValue = fieldList[0].isBold;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].isBold !== boldValue) {
                boldValue = '';
                break;
            }
        }
        var fontColorValue = fieldList[0].fontColor;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontColor !== fontColorValue) {
                fontColorValue = '';
                break;
            }
        }

        NumberField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, minValue, maxValue, useCalcValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
            userList, dvOptionList,
            changeEventFunc);
    }
    /**
     * @function validateValue
     * @static
     * @name module:Template/Field.NumberField#validateValue
     * @description 해당 프로퍼티의 값이 유효한지 체크한다. .
     *
     * @param {String} fieldPropetyName 필드의 속성 이름
     * @param {String} value   필드의 속성 값
     * @return {Boolean}
     * @Date : 2021. 5. 31
     */
    validateValue(fieldPropetyName, value) {
        if (fieldPropetyName === "defaultValue") {
            let isnum = /^\d+$/.test(value);
            if (!isnum) {
                return false;
            }
        }
        return true;
    }
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/RadioField.js":
/*!**********************************************!*\
  !*** ./js/pdf_form/src/Fields/RadioField.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioField: () => (/* binding */ RadioField)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");

/**
 * @module Template/Field
*/





/**
 * @description 라디오 필드 Class
 *
 * @property {String} m_groupName {@link module:Template/Field.RadioField#m_groupName}
 * @property {String} m_defaultValue {@link module:Template/Field.RadioField#m_defaultValue}
 * 
 * @property {Function} fieldName {@link module:Template/Field.RadioField#fieldName}
 * @property {Function} widthValue {@link module:Template/Field.RadioField#widthValue}
 * @property {Function} heightValue {@link module:Template/Field.RadioField#heightValue}
 * @property {Function} getSVGFieldObject {@link module:Template/Field.RadioField#getSVGFieldObject}
 * @property {Function} showFieldAttribute {@link module:Template/Field.RadioField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.RadioField#showFieldsAttribute}
 *
 * @augments BaseField {@link module:Template/Field.BaseField#BaseField}
 * @FileName RadioField.js
 * @since 2021.05.31
 */
class RadioField extends _BaseField__WEBPACK_IMPORTED_MODULE_0__.BaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, RadioField.widthValue(), RadioField.heightValue());
        this.m_type = RadioField.fieldName();

        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.radioFieldTool");

        
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }

        /**
         * @type {String}
         * @name module:Template/Field.RadioField#m_groupName
         * @description 라디오 그룹 이름
         * @default id가 들어간다.
         * @example
         * // getter groupName()
         * // setter groupName(val)
         */
        this.m_groupName = id;

        /**
         * @type {String}
         * @name module:Template/Field.RadioField#m_defaultValue
         * @description 라디오를 선택했을 때의 값
         * @default id가 들어간다.
         * @example
         * // getter defaultValue()
         * // setter defaultValue(val)
         */
        this.m_defaultValue = id;
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
        this.m_radioType = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RADIO_TYPE_1;
    }

    /**
     * @function fieldName
     * @name module:Template/Field.RadioField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "RadioField";
    }

    ancestors() {
        return [ "RF", "BF"];
    }
    /**
     * @function widthValue
     * @name module:Template/Field.RadioField#widthValue
     * @description (Static) 필드의 초기 가로 길이
     * @return {Number}
     * @static
     *
     */
    static widthValue() {
        return 60;
    }

    /**
     * @function heightValue
     * @name module:Template/Field.RadioField#heightValue
     * @description (Static) 필드의 초기 세로 길이
     * @return {Number}
     * @static
     *
     */
    static heightValue() {
        return 60;
    }

    get groupName() {
        return this.m_groupName;
    }

    set groupName(__groupName) {
        this.m_groupName = __groupName;
    }

    get defaultValue() {
        return this.m_defaultValue;
    }
    set defaultValue(__defaultValue) {
        this.m_defaultValue = __defaultValue;
    }

    get radioType() {
        return this.m_radioType;
    }
    set radioType(__radioType) {
        this.m_radioType = __radioType;
    }

    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.RadioField#getSVGFieldObject
     * @memberOf module:Template.CheckboxField
     * @description  필드의 정보를 가지고 SVG Element를 생성한다.
     *
     * @param {Object} canvas Snap SVG의 Canvas Object
     * @param {Object} mainGroup   SVG의 메인 Node
     * @param {Number} scale  현재 PDF의 Scale
     * @param {ELEMENT} ownerNode   해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Callback} removeDragOverGroupFunc     드래그 되어 선택되어진 Field Group을 제거하는 callback function
     * @param {Callback} changeValueEventFunc     속성값이 변할때 호출되는 callback function
     * @param {Callback} changeFreeTransformFunc     FreeTransform을 다시 생성하기 위한 callback function
     * @return {Object} SVG Node Element
     * @Date : 2021. 5. 31
     */
    getSVGFieldObject(canvas, mainGroup, scale, ownerNode, removeDragOverGroupFunc, changeValueEventFunc, changeFreeTransformFunc) {
        let group = mainGroup.group();
        group.attr({
            id: this.id + "Group",
            cursor: "move"
        });
        let rect = canvas.rect(this.x, this.y, this.width * scale, this.height * scale);
        rect.attr({
            id: this.id,
            "fill-opacity": "0.6",
            "fill": "#ffac7f"
        });
        group.append(rect);
        const radioPath = this.m_radioType === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RADIO_TYPE_1 ? _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RAIOD_TYPE_1_PATH : _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RAIOD_TYPE_2_PATH 
        const radioString = '<svg xmlns="http://www.w3.org/2000/svg" x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"  viewBox="0 0 48 48"> ' + radioPath + ' </svg >'
        const p = Snap.parse(radioString);
        group.append(p);


        group.hover(
            function () { // f_in
            },
            function () { // f_out
            }
        );

        let _radioField = this;
        let mousePos = { x: 0, y: 0 };
        group.mousedown(function (evt) {
            mousePos.x = evt.pageX;
            mousePos.y = evt.pageY;
            const items = mainGroup.selectAll('g');
            items.forEach(function (element) {
                if (element !== group) {
                    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                        element.freeTransform.hideResizeHandler();
                    }
                }
            });

            if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                group.freeTransform.showResizeHandler();
            } else {
                changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
            }
        });

        group.mouseup(function (evt) {
            if (group.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
                if (Math.abs(mousePos.x - evt.pageX) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE
                    || Math.abs(mousePos.y - evt.pageY) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE) {
                    return;
                }
                removeDragOverGroupFunc.call();
                const items = mainGroup.selectAll('g');
                items.forEach(function (element) {
                    if (element !== group) {
                        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                            element.freeTransform.hideResizeHandler();
                        }
                    }
                });
                if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                    group.freeTransform.showResizeHandler();
                } else {
                    changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
                }
                _radioField.constructor.showFieldsAttribute(ownerNode, [_radioField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            } else {
                _radioField.constructor.showFieldsAttribute(ownerNode, [_radioField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            }
        });
        return group;

    }

    changeTextElement(fieldGroup, scale) {
        fieldGroup.select("svg").remove();
        
        const radioPath = this.m_radioType === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RADIO_TYPE_1 ? _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RAIOD_TYPE_1_PATH : _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.RAIOD_TYPE_2_PATH 
        const radioString = '<svg xmlns="http://www.w3.org/2000/svg" x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"  viewBox="0 0 48 48"> ' + radioPath + ' </svg >'
        const p = Snap.parse(radioString);
        fieldGroup.append(p);
    }

    /**
     *
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.RadioField#showFieldAttribute
     * @description  (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} node  속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue     서명자 아이디
     * @param {String} groupNameValue     라디오 그룹 이름.
     * @param {String} dvValue     기본값
     * @param {Array} userList   서명자 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, groupNameValue, dvValue, raiodTypeValue,
        userList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        $(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(ownerSelect).val(ownerIdValue).trigger("change");
        $(ownerSelect).on("change", changeEventFunc);

        var radioTypeRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "radioType", _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.radioTypeList, "", useDefaulOptionNode);
        panel.appendChild(radioTypeRow);

        let radioTypeSelect = radioTypeRow.querySelector("select");
        $(radioTypeSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(radioTypeSelect).val(raiodTypeValue).trigger("change");
        $(radioTypeSelect).on("change", changeEventFunc);

        var groupRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "groupName", "Template.radioGroupNameText", groupNameValue, "", "", changeEventFunc);
        panel.appendChild(groupRow);

        var dvValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "defaultValue", "Template.radioValueText", dvValue, "", "", changeEventFunc);
        panel.appendChild(dvValueRow);

        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        panel.setAttribute("Field-id-list", idValue);

        node.className = "Editor-Attribute";
        node.classList.add("Base-Field");
        node.appendChild(panel);
    }


    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.RadioField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {ELEMENT} attrNode   속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);


        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });
        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var groupNameValue = fieldList[0].groupName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].groupName !== groupNameValue) {
                groupNameValue = '';
                break;
            }
        }

        var dvValue = fieldList[0].defaultValue;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].defaultValue !== dvValue) {
                dvValue = '';
                break;
            }
        }

        var raiodTypeValue = fieldList[0].m_radioType;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].m_radioType !== raiodTypeValue) {
                raiodTypeValue = '';
                break;
            }
        }

        RadioField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, groupNameValue, dvValue, raiodTypeValue,
            userList,
            changeEventFunc);
    }
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/SignField.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/Fields/SignField.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignField: () => (/* binding */ SignField)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");

/**
 * @module Template/Field
*/





/**
 * @description 서명 필드 Class
 *
 * @property {Number} m_signPenThickness {@link module:Template/Field.SignField#m_signPenThickness}
 * @property {String} m_signPenColor {@link module:Template/Field.SignField#m_signPenColor}
 *
 * @property {Function} fieldName {@link module:Template/Field.SignField#fieldName}
 * @property {Function} widthValue {@link module:Template/Field.SignField#widthValue}
 * @property {Function} heightValue {@link module:Template/Field.SignField#heightValue}
 * @property {Function} getSVGFieldObject {@link module:Template/Field.SignField#getSVGFieldObject}
 * @property {Function} makeSVGText {@link module:Template/Field.SignField#makeSVGText}
 * @property {Function} showFieldAttribute {@link module:Template/Field.SignField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.SignField#showFieldsAttribute}
 *
 * @augments BaseField {@link module:Template.BaseField#BaseField}
 * @FileName SignField.js
 * @since 2021.05.31
 */
class SignField extends _BaseField__WEBPACK_IMPORTED_MODULE_0__.BaseField {
  /**
   * @constructor
   * @param id 필드의 ID
   * @param pageNo 필드가 속한 페이지 번호
   * @param x 필드의 svg상의 x좌표
   * @param y 필드의 svg상의 y좌표
   *
   */
  constructor(id, pageNo, x, y, useDrawSign, useImageSign, useRegSign) {
    super(id, pageNo, x, y, SignField.widthValue(), SignField.heightValue());
    this.m_type = SignField.fieldName();

    this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.signFieldTool");

    /**
     * @type {Number}
     * @name module:Template.RadioField#m_signPenThickness
     * @description 서명펜의 두께
     * @default 1.0
     * @example
     * // getter signPenThickness()
     * // setter signPenThickness(val)
     */
    this.m_signPenThickness = 1;

    /**
     * @type {String}
     * @name module:Template.RadioField#m_signPenColor
     * @description 서명펜의 색상
     * @default #000000
     * @example
     * // getter signPenColor()
     * // setter signPenColor(val)
     */
    this.m_signPenColor = "#000000";
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
      return;
    }
    this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");

    SignField.useDrawSignDef = useDrawSign;
    SignField.useImageSignDef = useImageSign;
    SignField.useRegSignDef = useRegSign;


    this.m_useDrawSign = useDrawSign;
    this.m_useImageSign = useImageSign;
    this.m_useRegSign = useRegSign;
    //regSignApi
    this.m_regSignApiUrl = "";
  }

  /**
   * @function fieldName
   * @name module:Template/Field.SignField#fieldName
   * @return {String}
   * @description (Static) 필드 타입의 이름
   * @static
   *
   */
  static fieldName() {
    return "SignField";
  }

  ancestors() {
    return ["SF", "BF"];
  }

  /**
   * @function widthValue
   * @name module:Template/Field.SignField#widthValue
   * @description (Static) 필드의 초기 가로 길이
   * @return {Number}
   * @static
   *
   */
  static widthValue() {
    return 150;
  }

  /**
   * @function heightValue
   * @name module:Template/Field.SignField#heightValue
   * @description (Static) 필드의 초기 세로 길이
   * @return {Number}
   * @static
   *
   */
  static heightValue() {
    return 60;
  }

  get signPenThickness() {
    return this.m_signPenThickness;
  }
  set signPenThickness(__signPenThickness) {
    this.m_signPenThickness = __signPenThickness;
  }

  get signPenColor() {
    return this.m_signPenColor;
  }
  set signPenColor(__signPenColor) {
    this.m_signPenColor = __signPenColor;
  }


  /**
   * @function showFieldAttribute
   * @static
   * @name module:Template/Field.SignField#showFieldAttribute
   * @description (Static)  필드의 속성 팝업창을 설정한다.
   *
   * @param {ELEMENT} node  속성 팝업 Node
   * @param {String} idValue     필드의 id값
   * @param {String} requiredValue     필수여부 값
   * @param {String} ownerIdValue     서명자 아이디
   * @param {String} signPenThicknessValue     사인 팬 두깨
   * @param {Array} userList   서명자 리스트
   * @param {String} useDrawSign     필수여부 값
   * @param {String} useImageSign     필수여부 값
   * @param {String} useRegSign     필수여부 값
   * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
   * @Date : 2021. 5. 31
   */
  static showFieldAttribute(
    node,
    idValue,
    fieldIdValue,
    requiredValue,
    ownerIdValue,
    signPenThicknessValue,
    userList,
    useDrawSignValue,
    useImageSignValue,
    useRegSignValue,
    regSignApiUrlValue,
    changeEventFunc,
    signTabShowOpt
  ) {
    var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

    var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(
      idValue,
      "required",
      "Template.isRequired",
      requiredValue,
      changeEventFunc
    );
    panel.appendChild(requireRow);

    let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
    var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(
      idValue,
      "ownerId",
      userList,
      "",
      useDefaulOptionNode
    );
    panel.appendChild(ownerSelectRow);

    let ownerSelect = ownerSelectRow.querySelector("select");
    $(ownerSelect).select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
    $(ownerSelect).val(ownerIdValue).trigger("change");
    $(ownerSelect).on("change", changeEventFunc);

    var penWidthSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(
      idValue,
      "signPenThickness",
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getSignPenWidthComboBox(),
      "Template.signPenThicknessText",
      false
    );
    panel.appendChild(penWidthSelectRow);

    let penWidthSelect = penWidthSelectRow.querySelector("select");
    $(penWidthSelect).select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
    $(penWidthSelect).val(signPenThicknessValue).trigger("change");
    $(penWidthSelect).on("change", changeEventFunc);

    var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(
      idValue,
      "fieldId",
      "Template.fieldIdText",
      fieldIdValue,
      "",
      "",
      changeEventFunc
    );
    panel.appendChild(fieldIdValueRow);

    /*
        1214 lbw 시작
        */

    
    this.useDrawSignDef = signTabShowOpt.useDrawSign;
    this.useImageSignDef = signTabShowOpt.useImageSign;
    this.useRegSignDef = signTabShowOpt.useRegSign;

    if (this.useDrawSignDef == undefined){
      this.useDrawSignDef = "true";
    }
    if (this.useImageSignDef == undefined) {
      this.useImageSignDef = "true";
    }
    if (this.useRegSignDef == undefined) {
      this.useRegSignDef = "true";
    }
    
    
    //1.펜
    if ("true" == this.useDrawSignDef || useDrawSignValue == "true") {
      var useDrawSignRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(
        idValue,
        "useDrawSign",
        "Template.drawSignText",
        useDrawSignValue,
        changeEventFunc
      );
      panel.appendChild(useDrawSignRow);
    }

    //2. 이미지
    if ("true" == this.useImageSignDef || useImageSignValue == "true") {
      var useImageSignRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(
        idValue,
        "useImageSign",
        "Template.imageSignText",
        useImageSignValue,
        changeEventFunc
      );
      panel.appendChild(useImageSignRow);
    }

    //3. 등록된 이미지
    if ("true" == this.useRegSignDef || useRegSignValue == "true") {
      var useRegSignRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(
        idValue,
        "useRegSign",
        "Template.regSignText",
        useRegSignValue,
        changeEventFunc
      );
      panel.appendChild(useRegSignRow);
    }
    

    /* 1215 제외
    var regSignApiUrlRow = Utils.createAttributeInputNode(
      idValue,
      "regSignApiUrl",
      "Template.regSignApiUrlText",
      regSignApiUrlValue,
      "등록된 이미지 서명탭에 이미지를 불러올 수 있도록 서버의 API URL을 입력합니다.",
      "",
      changeEventFunc
    );
    panel.appendChild(regSignApiUrlRow);
    */
    /*
        1214 lbw 끝
        */

    panel.setAttribute("Field-id-list", idValue);

    node.className = "Editor-Attribute";
    node.classList.add("Sign-Field");
    node.appendChild(panel);
  }

  /**
   * @function showFieldsAttribute
   * @static
   * @name module:Template/Field.SignField#showFieldsAttribute
   * @description (Static) 필드의 속성 팝업창을 설정한다.
   *
   * @param {ELEMENT} ownerNode  속성 팝업 Node
   * @param {Array} fieldList     필드들의 리스트
   * @param {ELEMENT} attrNode    속성 팝업의 Node
   * @param {String} mainGroup    SVG의 메인 Element
   * @param {Array} userList   서명자 리스트
   * @param {Array} dvOptionList   기본값 선택 리스트
   * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
   * @Date : 2021. 5. 31
   */
  static showFieldsAttribute(
    ownerNode,
    fieldList,
    attrNode,
    mainGroup,
    userList,
    dvOptionList,
    changeEventFunc,
    signTabShowOpt
  ) {
    let node = attrNode;
    if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
      const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
      node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
    }
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

    var idValueArr = [];
    fieldList.forEach((field) => {
      idValueArr.push(field.id);
    });
    var idValue = idValueArr.join();

    var ownerIdValue = fieldList[0].ownerId;
    for (var idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].ownerId !== ownerIdValue) {
        ownerIdValue = "";
        break;
      }
    }

    var fieldIdValue = fieldList[0].fieldId;
    for (var idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].fieldId !== fieldIdValue) {
        fieldIdValue = "";
        break;
      }
    }

    var requiredValue = fieldList[0].required;
    for (var idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].required !== requiredValue) {
        requiredValue = "";
        break;
      }
    }

    var signPenThicknessValue = fieldList[0].signPenThickness;
    fieldList.forEach((field) => {
      if (field.signPenThickness !== signPenThicknessValue) {
        signPenThicknessValue = "";
        return;
      }
    });

    let useDrawSignValue = fieldList[0].m_useDrawSign;
    for (let idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].m_useDrawSign !== useDrawSignValue) {
        useDrawSignValue = "";
        break;
      }
    }

    let useImageSignValue = fieldList[0].m_useImageSign;
    for (let idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].m_useImageSign !== useImageSignValue) {
        useImageSignValue = "";
        break;
      }
    }

    let useRegSignValue = fieldList[0].m_useRegSign;
    for (let idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].m_useRegSign !== useRegSignValue) {
        useRegSignValue = "";
        break;
      }
    }

    var regSignApiUrlValue = fieldList[0].m_regSignApiUrl;
    for (var idx = 0; idx < fieldList.length; ++idx) {
      if (fieldList[idx].m_regSignApiUrl !== regSignApiUrlValue) {
        regSignApiUrlValue = "";
        break;
      }
    }

    SignField.showFieldAttribute(
      node,
      idValue,
      fieldIdValue,
      requiredValue,
      ownerIdValue,
      signPenThicknessValue,
      userList,
      useDrawSignValue,
      useImageSignValue,
      useRegSignValue,
      regSignApiUrlValue,
      changeEventFunc,
      signTabShowOpt
    );
  }

  /**
   * @function getSVGFieldObject
   * @name module:Template.ImageField#makeSVGText
   * @memberOf module:Template.ImageField
   * @description 필드의 종류를 표현하는 SVG Text element
   *
   * @param {Number} scale 현재 PDF의 Scale
   * @return {Object} SVG Node Element
   * @Date : 2021. 5. 31
   */
  makeSVGText(scale) {
    let value = this.m_fieldId;
    var textFontColor = "fill='" + this.fontColor + "' ";

    let textPos = ' x="50%"  dy="0.35em" text-anchor="middle" ';
    if (this.textAlign === "left") {
      textPos = ' x="3%"  dy="0.35em" text-anchor="start" ';
    } else if (this.textAlign === "right") {
      textPos = ' x="97%" dy="0.35em" text-anchor="end" ';
    }

    let textVerticalPos = 'y="50%"';

    let fontInfo = ' font-size="' + this.fontSize + 'px" ';
    let textObj =
      "<text" +
      textPos +
      textVerticalPos +
      fontInfo +
      textFontColor +
      ">" +
      value +
      "</text>";
    const fobjectSVG =
      '<svg x="' +
      this.x +
      'px" y="' +
      this.y +
      'px" width="' +
      this.width * scale +
      'px" height="' +
      this.height * scale +
      'px"><g  >' +
      textObj +
      "</g></svg>";

    return fobjectSVG;
  }

  /**
   * @function getSVGFieldObject
   * @name module:Template.RadioField#getSVGFieldObject
   * @memberOf module:Template/Field.SignField
   * @description  필드의 정보를 가지고 SVG Element를 생성한다.
   *
   * @param {Object} canvas Snap SVG의 Canvas Object
   * @param {Object} mainGroup   SVG의 메인 Node
   * @param {Number} scale  현재 PDF의 Scale
   * @param {ELEMENT} ownerNode    해당 프로젝트의 최상단 Element를 감싸고 있는 Element
   * @param {Callback} removeDragOverGroupFunc     드래그 되어 선택되어진 Field Group을 제거하는 callback function
   * @param {Callback} changeValueEventFunc     속성값이 변할때 호출되는 callback function
   * @param {Callback} changeFreeTransformFunc    FreeTransform을 다시 생성하기 위한 callback function
   * @return SVG Node Element
   * @Date : 2021. 5. 31
   */
  getSVGFieldObject(
    canvas,
    mainGroup,
    scale,
    ownerNode,
    removeDragOverGroupFunc,
    changeValueEventFunc,
    changeFreeTransformFunc
  ) {
    let group = mainGroup.group();
    group.attr({
      id: this.id + "Group",
      cursor: "move",
    });
    let rect = canvas.rect(
      this.x,
      this.y,
      this.width * scale,
      this.height * scale
    );
    rect.attr({
      id: this.id,
      "fill-opacity": "0.6",
      fill: "#ffac7f",
    });
    group.append(rect);
    const p = Snap.parse(this.makeSVGText(scale));
    group.append(p);

    group.hover(
      function () {
        // f_in
      },
      function () {
        // f_out
      }
    );

    let _signField = this;
    let mousePos = { x: 0, y: 0 };
    group.mousedown(function (evt) {
      mousePos.x = evt.pageX;
      mousePos.y = evt.pageY;
      const items = mainGroup.selectAll("g");
      items.forEach(function (element) {
        if (element !== group) {
          if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
            element.freeTransform.hideResizeHandler();
          }
        }
      });
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
        group.freeTransform.showResizeHandler();
      } else {
        changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
      }
    });

    group.mouseup(function (evt) {
      if (group.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
        if (
          Math.abs(mousePos.x - evt.pageX) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE ||
          Math.abs(mousePos.y - evt.pageY) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE
        ) {
          return;
        }
        removeDragOverGroupFunc.call();
        const items = mainGroup.selectAll("g");
        items.forEach(function (element) {
          if (element !== group) {
            if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
              element.freeTransform.hideResizeHandler();
            }
          }
        });
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
          group.freeTransform.showResizeHandler();
        } else {
          changeFreeTransformFunc(
            group,
            rect.attr("width"),
            rect.attr("height")
          );
        }
        _signField.constructor.showFieldsAttribute(
          ownerNode,
          [_signField],
          undefined,
          mainGroup,
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(),
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(),
          changeValueEventFunc,
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getSignTabShowOpt(),
        );
      } else {
        _signField.constructor.showFieldsAttribute(
          ownerNode,
          [_signField],
          undefined,
          mainGroup,
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(),
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(),
          changeValueEventFunc,
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getSignTabShowOpt(),
        );
      }
    });
    return group;
  }
}


/***/ }),

/***/ "./js/pdf_form/src/Fields/TextBaseField.js":
/*!*************************************************!*\
  !*** ./js/pdf_form/src/Fields/TextBaseField.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextBaseField: () => (/* binding */ TextBaseField)
/* harmony export */ });
/* harmony import */ var _BaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_3__);

/**
 * @module Template/Field
*/






/**
 * @텍스트 필드의 기본이 되는 Class
 *
 * @property {Function} fieldName {@link module:Template/Field.TextBaseField#fieldName}
 * @property {Function} widthValue {@link module:Template/Field.TextBaseField#widthValue}
 * @property {Function} heightValue {@link module:Template/Field.TextBaseField#heightValue}
 * @property {Function} needTextSvgRefresh {@link module:Template/Field.TextBaseField#needTextSvgRefresh}
 * @property {Function} makeSVGText {@link module:Template/Field.TextBaseField#makeSVGText}
 * @property {Function} getSVGFieldObject {@link module:Template/Field.TextBaseField#getSVGFieldObject}
 * @property {Function} changeTextElement {@link module:Template/Field.TextBaseField#changeTextElement}
 * @property {Function} showFieldAttribute {@link module:Template/Field.TextBaseField#showFieldAttribute}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.TextBaseField#showFieldsAttribute}
 *
 * @augments BaseField {@link module:Template/Field.BaseField#BaseField}
 * @FileName TextBaseField.js
 * @since 2021.05.31
 */
class TextBaseField extends _BaseField__WEBPACK_IMPORTED_MODULE_0__.BaseField {

    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     * @param width 필드의 가로길이
     * @param height 필드의 세로길이
     *
     */
    constructor(id, pageNo, x, y, width, height) {
        super(id, pageNo, x, y, width, height);
        this.m_type = TextBaseField.fieldName();

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_placeHolder
         * @description placeHolder
         * @example
         * // getter placeHolder()
         * // setter placeHolder(val)
         */
        this.m_placeHolder = '';

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_defaultValue
         * @description 텍스트 기본값  ID
         * @example
         * // getter defaultValue()
         * // setter defaultValue(val)
         */
        this.m_defaultValue = "";

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_defaultValueText
         * @description  텍스트 기본값을 표현하는 텍스트
         * @example
         * // getter defaultValueText()
         * // setter defaultValueText(val)
         */
        this.m_defaultValueText = "";

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_textAlign
         * @description 텍스트의 가로 정렬값
         * @example
         * // getter textAlign()
         * // setter textAlign(val)
         */
        this.m_textAlign = "left";

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_textVeticalAlign
         * @description 텍스트의 세로 정렬값
         * @example
         * // getter textVeticalAlign()
         * // setter textVeticalAlign(val)
         */
        this.m_textVeticalAlign = "middle";

        /**
         * @type {String}
         * @name module:Template/Field.TextBaseField#m_bold
         * @description 텍스트의 볼드 여부
         * @example
         * // getter bold()
         * // setter bold(val)
         */
        this.m_bold = "false";
        this.m_kind = "";
    }

    /**
     * @function widthValue
     * @name module:Template/Field.TextBaseField#widthValue
     * @description (Static) 필드의 초기 가로 길이
     * @return {Number}
     * @static
     *
     */
    static widthValue() {
        return 150;
    }

    /**
     * @function heightValue
     * @name module:Template/Field.TextBaseField#heightValue
     * @description (Static) 필드의 초기 세로 길이
     * @return {Number}
     * @static
     *
     */
    static heightValue() {
        return 40;
    }

    /**
     * @function fieldName
     * @name module:Template/Field.TextBaseField#fieldName
     * @return {String}
     * @description (Static)  필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "TextBaseField";
    }

    ancestors() {
        return [ "TBF", "BF"];
    }

    get placeHolder() {
        return this.m_placeHolder;
    }

    set placeHolder(__placeHolder) {
        this.m_placeHolder = __placeHolder;
    }

    get defaultValue() {
        return this.m_defaultValue;
    }
    set defaultValue(__defaultValue) {
        this.m_defaultValue = __defaultValue;
    }

    get defaultValueText() {
        return this.m_defaultValueText;
    }
    set defaultValueText(__defaultValueText) {
        this.m_defaultValueText = __defaultValueText;
    }

    get textAlign() {
        return this.m_textAlign;
    }
    set textAlign(__textAlign) {
        this.m_textAlign = __textAlign;
    }

    get textVeticalAlign() {
        return this.m_textVeticalAlign;
    }
    set textVeticalAlign(__textVeticalAlign) {
        this.m_textVeticalAlign = __textVeticalAlign;
    }

    get isBold() {
        return this.m_bold;
    }
    set isBold(__bold) {
        this.m_bold = __bold;
    }

    /**
     * @function needTextSvgRefresh
     * @static
     * @name module:Template/Field.TextBaseField#needTextSvgRefresh
     * @description  (Static) 해당하는 필드의 속성이 SVG의 텍스트 Node를 변경해야되는지 체크한다.
     *
     * @param { String} fieldPropetyName 필드의 속성값
     * @return {Boolean} 텍스트를 새로 그려야되는 필드의 경우 TRUE를 리턴한다.
     * @Date : 2021. 5. 31
     */
    static needTextSvgRefresh(fieldPropetyName) {
        if (fieldPropetyName === "defaultValue" ||
            fieldPropetyName === "value" ||
            fieldPropetyName === "fieldId" ||
            fieldPropetyName === "placeHolder" ||
            fieldPropetyName === "textAlign" ||
            fieldPropetyName === "bold" ||
            fieldPropetyName === "fontSize" ||
            fieldPropetyName === "fontName" ||
            fieldPropetyName === "radioType" ||
            fieldPropetyName === "fontColor") {
            return true;
        }
        return false;
    }

    /**
     * @function makeSVGText
     * @name module:Template/Field.TextBaseField#makeSVGText
     * @memberOf module:Template/Field.TextBaseField
     * @description 필드의 종류를 표현하는 SVG Text element
     *
     * @param {Number} scale 현재 PDF의 Scale
     * @return {Object} SVG Node Element
     * @Date : 2021. 5. 31
     */
    makeSVGText(scale) {
        let value = this.defaultValueText;
        if (value === '') {
            value = this.m_fieldId;
        }
        var textFontColor = "fill='" + this.fontColor + "' ";
 
        let textPos = ' x="50%"  dy="0.35em" text-anchor="middle" '
        if (this.textAlign === "left") {
            textPos = ' x="3%"  dy="0.35em" text-anchor="start" ';
        } else if (this.textAlign === "right") {
            textPos = ' x="97%" dy="0.35em" text-anchor="end" ';
        }

        let textVerticalPos = 'y="50%"';
        if (this.textVeticalAlign === "top") {
            textVerticalPos = 'y="25%"';
        } else if (this.textVeticalAlign === "bottom") {
            textVerticalPos = 'y="70%"';
        }

        let fontWeigth = "";
        if (this.isBold === "true") {
            fontWeigth = " font-weight='bold' ";
        }

        let fontFmaily = " font-family='" + this.fontName + "' ";
        
        let fontInfo = ' font-size="' + this.fontSize  * scale + 'px" ';
        let textObj = '<text' + textPos + textVerticalPos + fontFmaily + fontInfo + textFontColor + fontWeigth +  '>' + value + '</text>';
        const fobjectSVG = '<svg x="' + this.x + 'px" y="' + this.y + 'px" width="' + this.width * scale +
            'px" height="' + this.height * scale + 'px"><g  >' + textObj + '</g></svg>';

        return fobjectSVG;
    }

    /**
     * @function getSVGFieldObject
     * @name module:Template/Field.TextBaseField#getSVGFieldObject
     * @memberOf module:Template/Field.TextBaseField
     * @description  필드의 정보를 가지고 SVG Element를 생성한다.
     *
     * @param {Object} canvas Snap SVG의 Canvas Object
     * @param {Object} mainGroup   SVG의 메인 Node
     * @param {Number} scale  현재 PDF의 Scale
     * @param {ELEMENT} ownerNode    해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Callback} removeDragOverGroupFunc    드래그 되어 선택되어진 Field Group을 제거하는 callback function
     * @param {Callback} changeValueEventFunc     속성값이 변할때 호출되는 callback function
     * @param {Callback} changeFreeTransformFunc     FreeTransform을 다시 생성하기 위한 callback function
     * @return SVG Node Element
     * @Date : 2021. 5. 31
     */
    getSVGFieldObject(canvas, mainGroup, scale, ownerNode, removeDragOverGroupFunc, changeValueEventFunc, changeFreeTransformFunc) {
        let group = mainGroup.group();
        group.attr({
            id: this.id + "Group",
            cursor: "move"
        });

        let rect = canvas.rect(this.x, this.y, this.width * scale, this.height * scale);
        rect.attr({
            id: this.id,
            "fill-opacity": "0.5",
            "fill": "#ffac7f"
        });
        group.append(rect);
        const p = Snap.parse(this.makeSVGText(scale));
        group.append(p);

        group.hover(
            function () { // f_in
            },
            function () { // f_out
            }
        );
    
        let _textBaseField = this;
        let mousePos = { x: 0, y: 0 };
        group.mousedown(function (evt) {
            mousePos.x = evt.pageX;
            mousePos.y = evt.pageY;
            const items = mainGroup.selectAll('g');
            items.forEach(function (element) {
                if (element !== group) {
                    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                        element.freeTransform.hideResizeHandler();
                    }
                }
            });

            if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                group.freeTransform.showResizeHandler();
            } else {
                changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
            }
        });
        
        group.mouseup(function (evt) {
            if (group.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
                if (Math.abs(mousePos.x - evt.pageX) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE
                    || Math.abs(mousePos.y - evt.pageY) > _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MINIMUM_DRAG_SIZE) {
                    return;
                }
                removeDragOverGroupFunc.call();
                const items = mainGroup.selectAll('g');
                items.forEach(function (element) {
                    if (element !== group) {
                        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
                            element.freeTransform.hideResizeHandler();
                        }
                    }
                });
                if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(group.freeTransform)) {
                    group.freeTransform.showResizeHandler();
                } else {
                    changeFreeTransformFunc(group, rect.attr("width"), rect.attr("height"));
                }
                _textBaseField.constructor.showFieldsAttribute(ownerNode, [_textBaseField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            } else {
                _textBaseField.constructor.showFieldsAttribute(ownerNode, [_textBaseField], undefined, mainGroup, _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(), _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(), changeValueEventFunc);
            }
        });
        return group;

    }

    /**
     * @function changeTextElement
     * @name module:Template/Field.TextBaseField#changeTextElement
     * @memberOf module:Template/Field.TextBaseField
     * @description   필드를 표현하는 Text Node의 Text를 변경한다.
     *
     * @param {Object} fieldGroup Field의 SVG 노드
     * @param {Number} scale 현재 PDF의 Scale
     * @Date : 2021. 5. 31
     */
    changeTextElement(fieldGroup, scale) {
        fieldGroup.select("svg").remove();
        var newText = this.makeSVGText(scale);
        const p = Snap.parse(newText);
        fieldGroup.append(p);
    }

    /**
     * @function showFieldAttribute
     * @static
     * @name module:Template/Field.TextBaseField#showFieldAttribute
     * @description  (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} node  속성 팝업 Node
     * @param {String} idValue     필드의 id값
     * @param {String} requiredValue     필수여부 값
     * @param {String} ownerIdValue     서명자 아이디
     * @param {String} dvValue     기본값
     * @param {String} fontFamilyNameValue     폰트 이름
     * @param {String} fontSizeValue     폰트 크기 값
     * @param {String} textAlignValue     텍스트 가로 정렬 값
     * @param {String} boldValue     폰트 볼드 여부
     * @param {String} fontColorValue     폰트 칼라
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldAttribute(node,
        idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
        userList, dvOptionList,
        changeEventFunc) {

        var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

        var requireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(idValue, "required", "Template.isRequired", requiredValue, changeEventFunc);
        panel.appendChild(requireRow);

        let useDefaulOptionNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() !== 1;
        var ownerSelectRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "ownerId", userList, "", useDefaulOptionNode);
        panel.appendChild(ownerSelectRow);

        let ownerSelect = ownerSelectRow.querySelector("select");
        jQuery(ownerSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        jQuery(ownerSelect).val(ownerIdValue).trigger("change");
        jQuery(ownerSelect).on("change", changeEventFunc);

        //12-28
        if (dvOptionList && Array.isArray(dvOptionList) && dvOptionList.length > 0) {
            var defaultValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeSelectNode(idValue, "defaultValue", dvOptionList, "Template.defaultValueText", true);
            panel.appendChild(defaultValueRow);
    
            let defaultValueSelect = defaultValueRow.querySelector("select");
            $(defaultValueSelect).select2({
                minimumResultsForSearch: Infinity,
                width: "100%"
            });
            $(defaultValueSelect).val(dvValue).trigger("change");
            $(defaultValueSelect).on("change", changeEventFunc);
        }

        var fieldIdValueRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeInputNode(idValue, "fieldId", "Template.fieldIdText", fieldIdValue, "", "", changeEventFunc);
        panel.appendChild(fieldIdValueRow);

        var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextAttrbuteNode(idValue, fontColorValue, textAlignValue, boldValue, changeEventFunc);
        panel.appendChild(fontAttrRow.row);

        let fontFamilyComboSelect = fontAttrRow.fontFamilyCombo.querySelector("select");
        $(fontFamilyComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontFamilyComboSelect).val(fontFamilyNameValue).trigger("change");
        $(fontFamilyComboSelect).on("change", changeEventFunc);
        let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
        $(fontSizeComboSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        $(fontSizeComboSelect).val(fontSizeValue).trigger("change");
        $(fontSizeComboSelect).on("change", changeEventFunc);

        let colorInput = fontAttrRow.colorBtn.querySelector("button");
        colorInput.style.backgroundColor = fontColorValue;
        let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default())(colorInput, { color: fontColorValue });
        colorInput.value = fontColorValue;
        picker.on('change', function (r, g, b, a) {
            if (!picker.visible) {
                return;
            }
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);
            colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
        });
        picker.on('exit', function (r, g, b, a) {
            colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]);

            let colorTextInput = fontAttrRow.colorBtn.querySelector("input[type='text']");
            colorTextInput.value = (_utils_color_picker__WEBPACK_IMPORTED_MODULE_3___default().HEX([r, g, b, a]));
            colorTextInput.dispatchEvent(new Event("change"));
        });

        panel.setAttribute("Field-id-list", idValue);

        node.className = "Editor-Attribute";
        node.classList.add("Text-Field");
        node.appendChild(panel);
    }


    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.TextBaseField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {ELEMENT} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        let node = attrNode;
        if (attrNode === null || _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(attrNode)) {
            const bbox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeFieldsBBox(fieldList);
            node = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(ownerNode, bbox);
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.repositionFieldDeleteBtn(ownerNode, bbox.x, bbox.y, bbox.width);
        }
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(node);

        var idValueArr = [];
        fieldList.forEach((field) => {
            idValueArr.push(field.id);
        });

        var idValue = idValueArr.join();

        var ownerIdValue = fieldList[0].ownerId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].ownerId !== ownerIdValue) {
                ownerIdValue = '';
                break;
            }
        }

        var requiredValue = fieldList[0].required;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].required !== requiredValue) {
                requiredValue = '';
                break;
            }
        }

        var dvValue = fieldList[0].defaultValue;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].defaultValue !== dvValue) {
                dvValue = '';
                break;
            }
        }

        var fieldIdValue = fieldList[0].fieldId;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fieldId !== fieldIdValue) {
                fieldIdValue = '';
                break;
            }
        }

        var fontFamilyNameValue = fieldList[0].fontName;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontName !== fontFamilyNameValue) {
                fontFamilyNameValue = '';
                break;
            }
        }
        var fontSizeValue = fieldList[0].fontSize;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontSize !== fontSizeValue) {
                fontSizeValue = '';
                break;
            }
        }

        var textAlignValue = fieldList[0].textAlign;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].textAlign !== textAlignValue) {
                textAlignValue = '';
                break;
            }
        }

        var boldValue = fieldList[0].isBold;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].isBold !== boldValue) {
                boldValue = '';
                break;
            }
        }
        var fontColorValue = fieldList[0].fontColor;
        for (var idx = 0; idx < fieldList.length; ++idx) {
            if (fieldList[idx].fontColor !== fontColorValue) {
                fontColorValue = '';
                break;
            }
        }

        TextBaseField.showFieldAttribute(node,
            idValue, fieldIdValue, requiredValue, ownerIdValue, dvValue, fontFamilyNameValue, fontSizeValue, textAlignValue, boldValue, fontColorValue,
            userList, dvOptionList,
            changeEventFunc);
    }
    
    validateValue(propertyName, value) {
        return true;
    }
}



/***/ }),

/***/ "./js/pdf_form/src/Fields/TextField.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/Fields/TextField.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextField: () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _TextBaseField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextBaseField */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");

/**
 * @module Template/Field
*/




/**
 * 텍스트 필드 Class
 *
 * @property {Number} m_maxValueLength {@link module:Template/Field.TextField#m_maxValueLength}
 * 
 * @property {Function} fieldName {@link module:Template/Field.TextField#fieldName}
 * @property {Function} showFieldsAttribute {@link module:Template/Field.TextField#showFieldsAttribute}
 * 
 * @augments TextBaseField {@link module:Template/Field.TextBaseField#TextBaseField}
 * @FileName TextField.js
 * @since 2021.05.31
 */
class TextField extends _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField {
    /**
     * @constructor
     * @param id 필드의 ID
     * @param pageNo 필드가 속한 페이지 번호
     * @param x 필드의 svg상의 x좌표
     * @param y 필드의 svg상의 y좌표
     *
     */
    constructor(id, pageNo, x, y) {
        super(id, pageNo, x, y, TextField.widthValue(), TextField.heightValue());
        this.m_type = TextField.fieldName();

        /**
         * @type {Number}
         * @name module:Template.NumberField#m_maxValueLength
         * @description 텍스트 필드 값의 최대길이
         * @example
         * // getter maxValueLength()
         * // setter maxValueLength(val)
         */
        this.m_maxValueLength = 100;
        
        this.m_kind = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.textFieldTool");
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(id)) {
            return;
        }
        this.m_fieldId = this.m_id.replace(this.m_type, this.m_kind + "-");
    }

    /**
     * @function fieldName
     * @name module:Template/Field.TextField#fieldName
     * @return {String}
     * @description (Static) 필드 타입의 이름
     * @static
     *
     */
    static fieldName() {
        return "TextField";
    }

    ancestors() {
        return ["TF", "TBF", "BF"];
    }

    get maxValueLength() {
        return this.m_maxValueLength;
    }
    set maxValueLength(__maxValueLength) {
        this.m_maxValueLength = __maxValueLength;
    }

    /**
     * @function showFieldsAttribute
     * @static
     * @name module:Template/Field.TextField#showFieldsAttribute
     * @description (Static) 필드의 속성 팝업창을 설정한다.
     *
     * @param {ELEMENT} ownerNode  속성 팝업 Node
     * @param {Array} fieldList     필드들의 리스트
     * @param {ELEMENT} attrNode    속성 팝업의 Node
     * @param {String} mainGroup    SVG의 메인 Element
     * @param {Array} userList   서명자 리스트
     * @param {Array} dvOptionList   기본값 선택 리스트
     * @param {Callback} changeEventFunc    속성값이 변할때 호출되는 callback function
     * @Date : 2021. 5. 31
     */
    static showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc) {
        _TextBaseField__WEBPACK_IMPORTED_MODULE_0__.TextBaseField.showFieldsAttribute(ownerNode, fieldList, attrNode, mainGroup, userList, dvOptionList, changeEventFunc);
    }
    
    validateValue(propertyName, value) {
        return true;
    }
}



/***/ }),

/***/ "./js/pdf_form/src/Translator/translator.js":
/*!**************************************************!*\
  !*** ./js/pdf_form/src/Translator/translator.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./js/pdf_form/src/Translator/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);


/**
 * simple-translator
 * A small JavaScript library to translate webpages into different languages.
 * https://github.com/andreasremdt/simple-translator
 *
 * Author: Andreas Remdt <me@andreasremdt.com> (https://andreasremdt.com)
 * License: MIT (https://mit-license.org/)
 */
class Translator {
    /**
     * Initialize the Translator by providing options.
     *
     * @param {Object} options
     */
    constructor(options = {}) {
        this.debug = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logger)(true);

        if (typeof options != 'object' || Array.isArray(options)) {
            this.debug('INVALID_OPTIONS', options);
            options = {};
        }

        this.languages = new Map();
        this.config = Object.assign(Translator.defaultConfig, options);

        const { debug, registerGlobally, detectLanguage } = this.config;

        this.debug = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.logger)(debug);

        if (registerGlobally) {
            this._globalObject[registerGlobally] = this.translateForKey.bind(this);
        }

        if (detectLanguage && this._env == 'browser') {
            this._detectLanguage();
        }
    }

    /**
     * Return the global object, depending on the environment.
     * If the script is executed in a browser, return the window object,
     * otherwise, in Node.js, return the global object.
     *
     * @return {Object}
     */
    get _globalObject() {
        if (this._env == 'browser') {
            return window;
        }

        return __webpack_require__.g;
    }

    /**
     * Check and return the environment in which the script is executed.
     *
     * @return {String} The environment
     */
    get _env() {
        if (typeof window != 'undefined') {
            return 'browser';
        } else if ( true && module.exports) {
            return 'node';
        }

        return 'browser';
    }

    /**
     * Detect the users preferred language. If the language is stored in
     * localStorage due to a previous interaction, use it.
     * If no localStorage entry has been found, use the default browser language.
     */
    _detectLanguage() {
        const inMemory = localStorage.getItem(this.config.persistKey);

        if (inMemory) {
            this.config.defaultLanguage = inMemory;
        } else {
            const lang = navigator.languages
                ? navigator.languages[0]
                : navigator.language;

            this.config.defaultLanguage = lang.substr(0, 2);
        }
    }

    /**
     * Get a translated value from a JSON by providing a key. Additionally,
     * the target language can be specified as the second parameter.
     *
     * @param {String} key
     * @param {String} toLanguage
     * @return {String}
     */
    _getValueFromJSON(key, toLanguage) {
        const json = this.languages.get(toLanguage);

        return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), json);
    }

    /**
     * Replace a given DOM nodes' attribute values (by default innerHTML) with
     * the translated text.
     *
     * @param {HTMLElement} element
     * @param {String} toLanguage
     */
    _replace(element, toLanguage) {
        const keys = element.getAttribute('data-i18n')?.split(/\s/g);
        const attributes = element?.getAttribute('data-i18n-attr')?.split(/\s/g);

        if (attributes && keys.length != attributes.length) {
            this.debug('MISMATCHING_ATTRIBUTES', keys, attributes, element);
        }

        keys.forEach((key, index) => {
            const text = this._getValueFromJSON(key, toLanguage);
            const attr = attributes ? attributes[index] : 'innerHTML';

            if (text) {
                if (attr == 'innerHTML') {
                    element[attr] = text;
                } else {
                    element.setAttribute(attr, text);
                }
            } else {
                this.debug('TRANSLATION_NOT_FOUND', key, toLanguage);
            }
        });
    }

    /**
     * Translate all DOM nodes that match the given selector into the
     * specified target language.
     *
     * @param {String} toLanguage The target language
     */
    translatePageTo(toLanguage = this.config.defaultLanguage) {
        if (this._env == 'node') {
            this.debug('INVALID_ENVIRONMENT');
            return;
        }

        if (typeof toLanguage != 'string') {
            this.debug('INVALID_PARAM_LANGUAGE', toLanguage);
            return;
        }

        if (toLanguage.length == 0) {
            this.debug('EMPTY_PARAM_LANGUAGE');
            return;
        }

        if (!this.languages.has(toLanguage)) {
            this.debug('NO_LANGUAGE_REGISTERED', toLanguage);
            return;
        }

        const elements =
            typeof this.config.selector == 'string'
                ? Array.from(document.querySelectorAll(this.config.selector))
                : this.config.selector;

        if (elements.length && elements.length > 0) {
            elements.forEach((element) => this._replace(element, toLanguage));
        } else if (elements.length == undefined) {
            this._replace(elements, toLanguage);
        }

        this._currentLanguage = toLanguage;
        document.documentElement.lang = toLanguage;

        if (this.config.persist) {
            localStorage.setItem(this.config.persistKey, toLanguage);
        }
    }

    /**
     * Translate a given key into the specified language if it exists
     * in the translation file. If not or if the language hasn't been added yet,
     * the return value is `null`.
     *
     * @param {String} key The key from the language file to translate
     * @param {String} toLanguage The target language
     * @return {(String|null)}
     */
    translateForKey(key, toLanguage = this.config.defaultLanguage) {
        if (typeof key != 'string') {
            this.debug('INVALID_PARAM_KEY', key);
            return null;
        }

        if (!this.languages.has(toLanguage)) {
            this.debug('NO_LANGUAGE_REGISTERED', toLanguage);
            return null;
        }

        const text = this._getValueFromJSON(key, toLanguage);

        if (!text) {
            this.debug('TRANSLATION_NOT_FOUND', key, toLanguage);
            return null;
        }

        return text;
    }

    /**
     * Add a translation resource to the Translator object. The language
     * can then be used to translate single keys or the entire page.
     *
     * @param {String} language The target language to add
     * @param {String} json The language resource file as JSON
     * @return {Object} Translator instance
     */
    add(language, json) {
        if (typeof language != 'string') {
            this.debug('INVALID_PARAM_LANGUAGE', language);
            return this;
        }

        if (language.length == 0) {
            this.debug('EMPTY_PARAM_LANGUAGE');
            return this;
        }

        if (Array.isArray(json) || typeof json != 'object') {
            this.debug('INVALID_PARAM_JSON', json);
            return this;
        }

        if (Object.keys(json).length == 0) {
            this.debug('EMPTY_PARAM_JSON');
            return this;
        }

        this.languages.set(language, json);

        return this;
    }

    /**
     * Remove a translation resource from the Translator object. The language
     * won't be available afterwards.
     *
     * @param {String} language The target language to remove
     * @return {Object} Translator instance
     */
    remove(language) {
        if (typeof language != 'string') {
            this.debug('INVALID_PARAM_LANGUAGE', language);
            return this;
        }

        if (language.length == 0) {
            this.debug('EMPTY_PARAM_LANGUAGE');
            return this;
        }

        this.languages.delete(language);

        return this;
    }

    /**
     * Fetch a translation resource from the web server. It can either fetch
     * a single resource or an array of resources. After all resources are fetched,
     * return a Promise.
     * If the optional, second parameter is set to true, the fetched translations
     * will be added to the Translator object.
     *
     * @param {String|Array} sources The files to fetch
     * @param {Boolean} save Save the translation to the Translator object
     * @return {(Promise|null)}
     */
    fetch(sources, save = true) {
        if (!Array.isArray(sources) && typeof sources != 'string') {
            this.debug('INVALID_PARAMETER_SOURCES', sources);
            return null;
        }

        if (!Array.isArray(sources)) {
            sources = [sources];
        }

        const urls = sources.map((source) => {
            const filename = source.replace(/\.json$/, '').replace(/^\//, '');
            const path = this.config.filesLocation.replace(/\/$/, '');

            return `${path}/${filename}.json`;
        });

        if (this._env == 'browser') {
            return Promise.all(urls.map((url) => fetch(url)))
                .then((responses) =>
                    Promise.all(
                        responses.map((response) => {
                            if (response.ok) {
                                return response.json();
                            }

                            this.debug('FETCH_ERROR', response);
                        })
                    )
                )
                .then((languageFiles) => {
                    // If a file could not be fetched, it will be `undefined` and filtered out.
                    languageFiles = languageFiles.filter((file) => file);

                    if (save) {
                        languageFiles.forEach((file, index) => {
                            this.add(sources[index], file);
                        });
                    }

                    return languageFiles.length > 1 ? languageFiles : languageFiles[0];
                });
        } else if (this._env == 'node') {
            // return new Promise((resolve) => {
            //     const languageFiles = [];

            //     urls.forEach((url, index) => {
            //         try {
            //             const json = JSON.parse(
            //                 require('fs').readFileSync(process.cwd() + url, 'utf-8')
            //             );

            //             if (save) {
            //                 this.add(sources[index], json);
            //             }

            //             languageFiles.push(json);
            //         } catch (err) {
            //             this.debug('MODULE_NOT_FOUND', err.message);
            //         }
            //     });

            //     resolve(languageFiles.length > 1 ? languageFiles : languageFiles[0]);
            // });
        }
    }

    /**
     * Sets the default language of the translator instance.
     *
     * @param {String} language
     * @return {void}
     */
    setDefaultLanguage(language) {
        if (typeof language != 'string') {
            this.debug('INVALID_PARAM_LANGUAGE', language);
            return;
        }

        if (language.length == 0) {
            this.debug('EMPTY_PARAM_LANGUAGE');
            return;
        }

        if (!this.languages.has(language)) {
            this.debug('NO_LANGUAGE_REGISTERED', language);
            return null;
        }

        this.config.defaultLanguage = language;
    }

    /**
     * Return the currently selected language.
     *
     * @return {String}
     */
    get currentLanguage() {
        return this._currentLanguage || this.config.defaultLanguage;
    }

    /**
     * Returns the current default language;
     *
     * @return {String}
     */
    get defaultLanguage() {
        return this.config.defaultLanguage;
    }

    /**
     * Return the default config object whose keys can be overriden
     * by the user's config passed to the constructor.
     *
     * @return {Object}
     */
    static get defaultConfig() {
        return {
            defaultLanguage: 'en',
            detectLanguage: true,
            selector: '[data-i18n]',
            debug: false,
            registerGlobally: '__',
            persist: false,
            persistKey: 'preferred_language',
            filesLocation: '/i18n',
        };
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Translator);

/***/ }),

/***/ "./js/pdf_form/src/Translator/utils.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/Translator/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logger: () => (/* binding */ logger)
/* harmony export */ });
const CONSOLE_MESSAGES = {
    INVALID_PARAM_LANGUAGE: (param) =>
        `Invalid parameter for \`language\` provided. Expected a string, but got ${typeof param}.`,
    INVALID_PARAM_JSON: (param) =>
        `Invalid parameter for \`json\` provided. Expected an object, but got ${typeof param}.`,
    EMPTY_PARAM_LANGUAGE: () =>
        `The parameter for \`language\` can't be an empty string.`,
    EMPTY_PARAM_JSON: () =>
        `The parameter for \`json\` must have at least one key/value pair.`,
    INVALID_PARAM_KEY: (param) =>
        `Invalid parameter for \`key\` provided. Expected a string, but got ${typeof param}.`,
    NO_LANGUAGE_REGISTERED: (language) =>
        `No translation for language "${language}" has been added, yet. Make sure to register that language using the \`.add()\` method first.`,
    TRANSLATION_NOT_FOUND: (key, language) =>
        `No translation found for key "${key}" in language "${language}". Is there a key/value in your translation file?`,
    INVALID_PARAMETER_SOURCES: (param) =>
        `Invalid parameter for \`sources\` provided. Expected either a string or an array, but got ${typeof param}.`,
    FETCH_ERROR: (response) =>
        `Could not fetch "${response.url}": ${response.status} (${response.statusText})`,
    INVALID_ENVIRONMENT: () =>
        `You are trying to execute the method \`translatePageTo()\`, which is only available in the browser. Your environment is most likely Node.js`,
    MODULE_NOT_FOUND: (message) => message,
    MISMATCHING_ATTRIBUTES: (keys, attributes, element) =>
        `The attributes "data-i18n" and "data-i18n-attr" must contain the same number of keys.

Values in \`data-i18n\`:      (${keys.length}) \`${keys.join(' ')}\`
Values in \`data-i18n-attr\`: (${attributes.length}) \`${attributes.join(' ')}\`

The HTML element is:
${element.outerHTML}`,
    INVALID_OPTIONS: (param) =>
        `Invalid config passed to the \`Translator\` constructor. Expected an object, but got ${typeof param}. Using default config instead.`,
};

/**
 *
 * @param {Boolean} isEnabled
 * @return {Function}
 */
function logger(isEnabled) {
    return function log(code, ...args) {
        if (isEnabled) {
            try {
                const message = CONSOLE_MESSAGES[code];
                throw new TypeError(message ? message(...args) : 'Unhandled Error');
            } catch (ex) {
                const line = ex.stack.split(/\n/g)[1];
                const [method, filepath] = line.split(/@/);

                console.error(`${ex.message}

This error happened in the method \`${method}\` from: \`${filepath}\`.

If you don't want to see these error messages, turn off debugging by passing \`{ debug: false }\` to the constructor.

Error code: ${code}

Check out the documentation for more details about the API:
https://github.com/andreasremdt/simple-translator#usage
        `);
            }
        }
    };
}

/***/ }),

/***/ "./js/pdf_form/src/pdf.cursor.tool.js":
/*!********************************************!*\
  !*** ./js/pdf_form/src/pdf.cursor.tool.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PDFCursorTools: () => (/* binding */ PDFCursorTools)
/* harmony export */ });
//import * as GrabToPan from './grab-to-pan.js';

const isNotIEorIsIE10plus = !document.documentMode || document.documentMode > 9;
const chrome2 = window.chrome;
const isChrome15OrOpera15plus = chrome2 && (chrome2.webstore || chrome2.app);
const isSafari6plus = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);

function isLeftMouseReleased(event) {
        if ("buttons" in event && isNotIEorIsIE10plus) {
                return !(event.buttons & 1);
        }

        if (isChrome15OrOpera15plus || isSafari6plus) {
                return event.which === 0;
        }

        return false;
}
                
let matchesSelector;
["webkitM", "mozM", "msM", "oM", "m"].some(function (prefix) {
        let name = prefix + "atches";

        if (name in document.documentElement) {
                matchesSelector = name;
        }

        name += "Selector";

        if (name in document.documentElement) {
                matchesSelector = name;
        }

        return matchesSelector;
});

const CursorTool = {
        SELECT: 0,
        HAND: 1,
        ZOOM: 2
};

class PDFCursorTools {
        constructor({
                container,
                eventBus,
                cursorToolOnLoad = 1
        }) {
                this.container = container;
                this.eventBus = eventBus;
                this.active = 0;
                this.activeBeforePresentationMode = null;
                this.handTool = new GrabToPan({
                        element: this.container
                });

                this._addEventListeners();

                Promise.resolve().then(() => {
                        this.switchTool(cursorToolOnLoad);
                });
        }

        get activeTool() {
                return this.active;
        }

        switchTool(tool) {
                if (this.activeBeforePresentationMode !== null) {
                        return;
                }

                if (tool === this.active) {
                        return;
                }

                const disableActiveTool = () => {
                        switch (this.active) {
                                case CursorTool.SELECT:
                                        break;

                                case CursorTool.HAND:
                                        this.handTool.deactivate();
                                        break;

                                case CursorTool.ZOOM:
                                        break;
                        }
                };

                switch (tool) {
                        case CursorTool.SELECT:
                                disableActiveTool();
                                break;

                        case CursorTool.HAND:
                                disableActiveTool();
                                this.handTool.activate();
                                break;

                        case CursorTool.ZOOM:
                                break;
                        default:
                                console.error(`switchTool: "${tool}" is an unsupported value.`);
                                return;
                }

                this.active = tool;

                this._dispatchEvent();
        }

        _dispatchEvent() {
                this.eventBus.dispatch("cursortoolchanged", {
                        source: this,
                        tool: this.active
                });
        }

        _addEventListeners() {
                this.eventBus._on("switchcursortool", evt => {
                        this.switchTool(evt.tool);
                });

                this.eventBus._on("presentationmodechanged", evt => {
                        if (evt.switchInProgress) {
                                return;
                        }

                        let previouslyActive;

                        if (evt.active) {
                                previouslyActive = this.active;
                                this.switchTool(CursorTool.SELECT);
                                this.activeBeforePresentationMode = previouslyActive;
                        } else {
                                previouslyActive = this.activeBeforePresentationMode;
                                this.activeBeforePresentationMode = null;
                                this.switchTool(previouslyActive);
                        }
                });
        }

}

/***/ }),

/***/ "./js/pdf_form/src/template/templateData.js":
/*!**************************************************!*\
  !*** ./js/pdf_form/src/template/templateData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateData: () => (/* binding */ TemplateData)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");

/**
 * @module Template/Data
 */



/**
 * @description
 * 문서의 이름과 서명자의 정보를 담고 있는 Class <br/>
 * JSON데이터를 추출하기 위해 만들어진 Data Class
 *
 * @property {String} formTemplateName {@link module:Template/Data.TemplateData#formTemplateName}
 * @property {String} formTemplateUUID {@link module:Template/Data.TemplateData#formTemplateUUID}
 * @property {Array} formerList {@link module:Template/Data.TemplateData#formerList}
 *
 * @property {Function} pushOwner {@link module:Template/Data.TemplateData#pushOwner}
 * 
 * @example
 *  아래와 같이 JSON데이터를 만들 때 사용된다.
 *  {
        "formTemplateName": "Form Template 문서 이름",
        "formTemplateUUID": "Form Template 문서 UUID",
        "formerList": [  -- TemplateDataOwner Data Class
            {
                "pages": [  -- TemplateDataPage Data Class
                    {
                        "pageNo": 0,
                        "fields": [
                        ]
                    }
                ]
            }
        ]
    }
 *
 * @FileName TemplateData.js
 * @since 2021.05.31
 */
class TemplateData {

    /**
     * @constructor
     * @param {String} name Template 문서 이름.
     *
     */
    constructor(name, uuid) {

        /**
         * @type {String}
         * @name module:Template/Data.TemplateData#formTemplateName
         * @description  Template 문서 이름.
         */
        this.formTemplateName = name;

        /**
         * @type {String}
         * @name module:Template/Data.TemplateData#formTemplateUUID
         * @description  Template 문서 UUID.
         */
        this.formTemplateUUID = uuid;
        if (uuid === undefined || uuid === null) {
            this.formTemplateUUID = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.generate_uuidv4();
        }

        /**
         * @type {Array}
         * @name module:Template/Data.TemplateData#formerList
         * @description  TemplateDataOwner Array
         */
        this.formerList = [];
    }

    /**
     * @function pushOwner
     * @name module:Template/Data.TemplateData#pushOwner
     * @description TemplateDataOwner를 추가한다.
     *
     * @param {Object} ownerData 추가할 서명자 데이터 TemplateDataOwner
     * @Date : 2021. 5. 31
    */
    pushOwner(ownerData) {
        this.formerList.push(ownerData);
    }
}

/***/ }),

/***/ "./js/pdf_form/src/template/templateDataOwner.js":
/*!*******************************************************!*\
  !*** ./js/pdf_form/src/template/templateDataOwner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateDataOwner: () => (/* binding */ TemplateDataOwner)
/* harmony export */ });

/**
 * @module Template/Data
 */

/**
 * @description 페이지 정보를 담고 있는 서명자 정보 Class<br/>
 * JSON데이터를 추출하기 위해 만들어진 Data Class
 * 
 *
 * @property {Array} pages {@link module:Template/Data.TemplateDataOwner#pages}
 *
 * @property {Function} pushPage {@link module:Template/Data.TemplateDataOwner#pushPage}
 * @property {Function} cloneTemplateDataOwnerObject {@link module:Template/Data.TemplateDataOwner#cloneTemplateDataOwnerObject}
 * @property {Function} cloneObject {@link module:Template/Data.TemplateDataOwner#cloneObject}
 * 
 * @see module:Template/Data.TemplateData
 * @FileName TemplateDataOwner.js
 * @since 2021.05.31
 */
class TemplateDataOwner {

    /**
     * @constructor
     *
     */
    constructor() {
        /**
         * @type {Array}
         * @name module:Template/Data.TemplateDataOwner#pages
         * @description  TemplateDataPage 클래스 배열
         */
        this.pages = [];
    }

    /**
     * @function pushPage
     * @name module:Template/Data.TemplateDataOwner#pushPage
     * @description TemplateDataPage Object를 추가한다.
     *
     * @param {Object} page  TemplateDataPage Object
     * @Date : 2021. 5. 31
    */
    pushPage(page) {
        this.pages.push(page);
    }

    /**
     * @static
     * @function cloneTemplateDataOwnerObject
     * @name module:Template/Data.TemplateDataOwner#cloneTemplateDataOwnerObject
     * @description (Static) TemplateDataOwner 오브젝트를 복사한다.
     * 
     * @param {Object} obj  복사할 Object
     * @return {Object} TemplateDataOwner Object
     * @Date : 2021. 5. 31
    */
    static cloneTemplateDataOwnerObject(obj) {
        var clone = new TemplateDataOwner();
        for (var key in obj) {
            if (key === "pages" || key === "fields") {
                continue;
            }
            if (typeof obj[key] == "object" && obj[key] != null) {
                clone[key] = TemplateDataOwner.cloneObject(obj[key]);
            } else {
                clone[key] = obj[key];
            }
        }

        return clone;
    }

    /**
     * @static
     * @function cloneObject
     * @name module:Template/Data.TemplateDataOwner#cloneObject
     * @description (Static) 오브젝트를 복사한다.
     *
     * @param {Object} obj  복사할 Object
     * @return {Object}
     * @Date : 2021. 5. 31
    */
    static cloneObject(obj) {
        var clone = {};
        for (var key in obj) {
            if (key === "pages" || key === "fields") {
                continue;
            }
            if (typeof obj[key] == "object" && obj[key] != null) {
                clone[key] = TemplateDataOwner.cloneObject(obj[key]);
            } else {
                clone[key] = obj[key];
            }
        }

        return clone;
    }

}


/***/ }),

/***/ "./js/pdf_form/src/template/templateDataPage.js":
/*!******************************************************!*\
  !*** ./js/pdf_form/src/template/templateDataPage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateDataPage: () => (/* binding */ TemplateDataPage)
/* harmony export */ });

/**
 * @module Template/Data
 */

/**
 * @description  필드 리스트 정보를 담고 있는 페이지 정보 Class<br/>
 * JSON데이터를 추출하기 위해 만들어진 Data Class
 *
 * @property {Number} pageNo {@link module:Template/Data.TemplateDataPage#pageNo}
 * @property {Array} fields {@link module:Template/Data.TemplateDataPage#fields}
 *
 * @property {Function} pushField {@link module:Template/Data.TemplateDataPage#pushField}
 *
 * @see module:Template/Data.TemplateData
 * @FileName TemplateDataPage.js
 * @since 2021.05.31
 */
class TemplateDataPage {

    /**
     * @constructor
     *
     * @param {Number} pageNo 페이지 번호
     */
    constructor(pageNo) {
        /**
         * @type {Number}
         * @name module: Template/Data.TemplateDataPage#pageNo
         * @description  페이지 번호
         */
        this.pageNo = pageNo;

        /**
         * @type {Array}
         * @name module:Template/Data.TemplateDataPage#fields
         * @description  Field 리스트.
         */
        this.fields = [];
    }

    /**
     * @function pushField
     * @name module:Template/Data.TemplateDataOwner#pushField
     * @description Field Object를 추가한다.
     *
     * @param {Object} field  Field Object
     * @Date : 2021. 5. 31
    */
    pushField(field) {
        this.fields.push(field);
    }
}

/***/ }),

/***/ "./js/pdf_form/src/template/templateUserFieldInfo.js":
/*!***********************************************************!*\
  !*** ./js/pdf_form/src/template/templateUserFieldInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateUserFieldInfo: () => (/* binding */ TemplateUserFieldInfo)
/* harmony export */ });

/**
 * @module Template/Data
 */

/**
 * @description 서명자 정보 Class
 * 
 *
 * @property {Array} fields {@link module:Template/Data.TemplateUserFieldInfo#fields}
 *
 * @property {Function} pushField {@link module:Template/Data.TemplateUserFieldInfo#pushField}
 * @property {Function} field {@link module:Template/Data.TemplateUserFieldInfo#field}
 * @property {Function} removeField {@link module:Template/Data.TemplateUserFieldInfo#removeField}
 * @property {Function} contains {@link module:Template/Data.TemplateUserFieldInfo#contains}
 * 
 * @class
 * @FileName TemplateUserFieldInfo.js
 * @since 2021.05.31
 */
class TemplateUserFieldInfo {

    constructor() {

        /**
         * @type {Array}
         * @name module: Template/Data.TemplateUserFieldInfo#fields
         * @description  Field 리스트.
         */
        this.fields = {};
    }

    /**
     * @function pushField
     * @name module:Template/Data.TemplateUserFieldInfo#pushField
     * @description Field Object를 추가한다.
     *
     * @param {Object} field  Field Object
     * @Date : 2021. 5. 31
    */
    pushField(fieldId, field) {
        this.fields[fieldId] = field;
    }

    /**
     * @function field
     * @name module:Template/Data.TemplateUserFieldInfo#field
     * @description ID에 해당하는 Field Object를 리턴한다.
     *
     * @param {String} fieldId  Field ID
     * @return {Object} Field Object
     * @Date : 2021. 5. 31
    */
    field(fieldId) {
        return this.fields[fieldId];
    }

    /**
     * @function removeField
     * @name module:Template/Data.TemplateUserFieldInfo#removeField
     * @description ID에 해당하는 Field Object를 삭제한다.
     *
     * @param {String} fieldId  Field ID
     * @Date : 2021. 5. 31
    */
    removeField(fieldId) {
        if (this.contains(fieldId)) {
            delete this.fields[fieldId];
        }
    }

    /**
     * @function contains
     * @name module:Template/Data.TemplateUserFieldInfo#contains
     * @description ID에 해당하는 Field Object가 존재하는지 여부를 리턴한다.
     *
     * @param {String} fieldId  Field ID
     * @return {Boolean}} 존재하면 True 아니면 false
     * @Date : 2021. 5. 31
    */
    contains(fieldId) {
        return this.fields.hasOwnProperty(fieldId);
    }
}

/***/ }),

/***/ "./js/pdf_form/src/template/templatemod.js":
/*!*************************************************!*\
  !*** ./js/pdf_form/src/template/templatemod.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateMod: () => (/* binding */ TemplateMod)
/* harmony export */ });
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Fields/BaseField */ "./js/pdf_form/src/Fields/BaseField.js");
/* harmony import */ var _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Fields/TextField */ "./js/pdf_form/src/Fields/TextField.js");
/* harmony import */ var _Fields_NumberField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Fields/NumberField */ "./js/pdf_form/src/Fields/NumberField.js");
/* harmony import */ var _Fields_DateField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Fields/DateField */ "./js/pdf_form/src/Fields/DateField.js");
/* harmony import */ var _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../Fields/SignField */ "./js/pdf_form/src/Fields/SignField.js");
/* harmony import */ var _Fields_TextBaseField_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../Fields/TextBaseField.js */ "./js/pdf_form/src/Fields/TextBaseField.js");
/* harmony import */ var _Fields_ImageField_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Fields/ImageField.js */ "./js/pdf_form/src/Fields/ImageField.js");
/* harmony import */ var _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Fields/MultiLineTextField.js */ "./js/pdf_form/src/Fields/MultiLineTextField.js");
/* harmony import */ var _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Fields/CheckboxField.js */ "./js/pdf_form/src/Fields/CheckboxField.js");
/* harmony import */ var _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Fields/RadioField.js */ "./js/pdf_form/src/Fields/RadioField.js");
/* harmony import */ var _Fields_LabelField_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Fields/LabelField.js */ "./js/pdf_form/src/Fields/LabelField.js");
/* harmony import */ var _Fields_ComboboxField_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Fields/ComboboxField.js */ "./js/pdf_form/src/Fields/ComboboxField.js");
/* harmony import */ var _templateData_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templateData.js */ "./js/pdf_form/src/template/templateData.js");
/* harmony import */ var _templateDataOwner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templateDataOwner.js */ "./js/pdf_form/src/template/templateDataOwner.js");
/* harmony import */ var _templateDataPage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templateDataPage.js */ "./js/pdf_form/src/template/templateDataPage.js");
/* harmony import */ var _templateUserFieldInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templateUserFieldInfo.js */ "./js/pdf_form/src/template/templateUserFieldInfo.js");

/**
 * @module Template/TemplateMod
 */

























var _templateMod;

/**
 * @description 필드 관련 처리를 하는 Class
 * 
 * @property {Boolean} dragStart {@link module:Template/TemplateMod.TemplateMod#dragStart}
 * @property {Object} dragBox {@link module:Template/TemplateMod.TemplateMod#dragBox}
 * @property {Object} mainCanvas {@link module:Template/TemplateMod.TemplateMod#mainCanvas}
 * @property {Rect} pageBoundingBox {@link module:Template/TemplateMod.TemplateMod#pageBoundingBox}
 * @property {Object} templateRectMousePosition {@link module:Template/TemplateMod.TemplateMod#templateRectMousePosition}
 * @property {String} selectAddFieldType {@link module:Template/TemplateMod.TemplateMod#selectAddFieldType}
 * @property {Object} fieldDictionary {@link module:Template/TemplateMod.TemplateMod#fieldDictionary}
 * @property {Number} unredoActionIdx {@link module:Template/TemplateMod.TemplateMod#unredoActionIdx}
 * @property {Object} unredoActionDict {@link module:Template/TemplateMod.TemplateMod#unredoActionDict}
 * @property {Object} pdfViewer {@link module:Template/TemplateMod.TemplateMod#pdfViewer}
 * @property {Object} templateUserFieldInfo {@link module:Template/TemplateMod.TemplateMod#templateUserFieldInfo}
 * @property {Object} ownerNode {@link module:Template/TemplateMod.TemplateMod#ownerNode}
 * @property {Boolean} isFieldDragStart {@link module:Template/TemplateMod.TemplateMod#isFieldDragStart}
 * @property {String} menuCode {@link module:Template/TemplateMod.TemplateMod#menuCode}
 *
 * @property {Function} addUndoRedoAct {@link module:Template/TemplateMod.TemplateMod#addUndoRedoAct}
 * @property {Function} buildDVOptsInfo {@link module:Template/TemplateMod.TemplateMod#buildDVOptsInfo}
 * @property {Function} buildFieldformerList {@link module:Template/TemplateMod.TemplateMod#buildFieldformerList}
 * @property {Function} buildFieldUserInfo {@link module:Template/TemplateMod.TemplateMod#buildFieldUserInfo}
 * @property {Function} calcFieldPostion {@link module:Template/TemplateMod.TemplateMod#calcFieldPostion}
 * @property {Function} calcTemplateBoundary {@link module:Template/TemplateMod.TemplateMod#calcTemplateBoundary}
 * @property {Function} changeFieldPosition {@link module:Template/TemplateMod.TemplateMod#changeFieldPosition}
 * @property {Function} changeFieldValueEvent {@link module:Template/TemplateMod.TemplateMod#changeFieldValueEvent}
 * @property {Function} changeFreeTransform {@link module:Template/TemplateMod.TemplateMod#changeFreeTransform}
 * @property {Function} changeGroupBoxFreeTransform {@link module:Template/TemplateMod.TemplateMod#changeGroupBoxFreeTransform}
 * @property {Function} checkTemplateFieldData {@link module:Template/TemplateMod.TemplateMod#checkTemplateFieldData}
 * @property {Function} clearSelectedTool {@link module:Template/TemplateMod.TemplateMod#clearSelectedTool}
 * @property {Function} convertUserListToSelectOptions {@link module:Template/TemplateMod.TemplateMod#convertUserListToSelectOptions}
 * @property {Function} createDragOverGroup {@link module:Template/TemplateMod.TemplateMod#createDragOverGroup}
 * @property {Function} createField {@link module:Template/TemplateMod.TemplateMod#createField}
 * @property {Function} createFieldObject {@link module:Template/TemplateMod.TemplateMod#createFieldObject}
 * @property {Function} createTemplateRect {@link module:Template/TemplateMod.TemplateMod#createTemplateRect}
 * @property {Function} dragendFunc {@link module:Template/TemplateMod.TemplateMod#dragendFunc}
 * @property {Function} dragmoveFunc {@link module:Template/TemplateMod.TemplateMod#dragmoveFunc}
 * @property {Function} dragstartFunc {@link module:Template/TemplateMod.TemplateMod#dragstartFunc}
 * @property {Function} exportFieldData {@link module:Template/TemplateMod.TemplateMod#exportFieldData}
 * @property {Function} fieldDeleteBtnClicked {@link module:Template/TemplateMod.TemplateMod#fieldDeleteBtnClicked}
 * @property {Function} fieldFtEvent {@link module:Template/TemplateMod.TemplateMod#fieldFtEvent}
 * @property {Function} fieldRepositioning {@link module:Template/TemplateMod.TemplateMod#fieldRepositioning}
 * @property {Function} generateFieldId {@link module:Template/TemplateMod.TemplateMod#generateFieldId}
 * @property {Function} getCreateFieldDefaultWidth {@link module:Template/TemplateMod.TemplateMod#getCreateFieldDefaultWidth}
 * @property {Function} getDvTextValue {@link module:Template/TemplateMod.TemplateMod#getDvTextValue}
 * @property {Function} getFieldFromJson {@link module:Template/TemplateMod.TemplateMod#getFieldFromJson}
 * @property {Function} getFieldIdFromGroupNode {@link module:Template/TemplateMod.TemplateMod#getFieldIdFromGroupNode}
 * @property {Function} getFieldJsonData {@link module:Template/TemplateMod.TemplateMod#getFieldJsonData}
 * @property {Function} getFieldSize {@link module:Template/TemplateMod.TemplateMod#getFieldSize}
 * @property {Function} getPageBorderWidth {@link module:Template/TemplateMod.TemplateMod#getPageBorderWidth}
 * @property {Function} getPageBoundingClientRect {@link module:Template/TemplateMod.TemplateMod#getPageBoundingClientRect}
 * @property {Function} getPageElement {@link module:Template/TemplateMod.TemplateMod#getPageElement}
 * @property {Function} getPdfPageFromSvgPos {@link module:Template/TemplateMod.TemplateMod#getPdfPageFromSvgPos}
 * @property {Function} hideAllResizeHandles {@link module:Template/TemplateMod.TemplateMod#hideAllResizeHandles}
 * @property {Function} hideFieldAttribute {@link module:Template/TemplateMod.TemplateMod#hideFieldAttribute}
 * @property {Function} hideTemplateLayer {@link module:Template/TemplateMod.TemplateMod#hideTemplateLayer}
 * @property {Function} importFieldData {@link module:Template/TemplateMod.TemplateMod#importFieldData}
 * @property {Function} keycheck {@link module:Template/TemplateMod.TemplateMod#keycheck}
 * @property {Function} redoAction {@link module:Template/TemplateMod.TemplateMod#redoAction}
 * @property {Function} refreshformerList {@link module:Template/TemplateMod.TemplateMod#refreshformerList}
 * @property {Function} removeDragGroupField {@link module:Template/TemplateMod.TemplateMod#removeDragGroupField}
 * @property {Function} removeDragOverGroup {@link module:Template/TemplateMod.TemplateMod#removeDragOverGroup}
 * @property {Function} removeField {@link module:Template/TemplateMod.TemplateMod#removeField}
 * @property {Function} removeSelectedField {@link module:Template/TemplateMod.TemplateMod#removeSelectedField}
 * @property {Function} removeTemplateRect {@link module:Template/TemplateMod.TemplateMod#removeTemplateRect}
 * @property {Function} replaceFieldData {@link module:Template/TemplateMod.TemplateMod#replaceFieldData}
 * @property {Function} replaceFieldStringData {@link module:Template/TemplateMod.TemplateMod#replaceFieldStringData}
 * @property {Function} resetTool {@link module:Template/TemplateMod.TemplateMod#resetTool}
 * @property {Function} selectTool {@link module:Template/TemplateMod.TemplateMod#selectTool}
 * @property {Function} selectUserList {@link module:Template/TemplateMod.TemplateMod#selectUserList}
 * @property {Function} showAsteriskDiv {@link module:Template/TemplateMod.TemplateMod#showAsteriskDiv}
 * @property {Function} showFieldAttribute {@link module:Template/TemplateMod.TemplateMod#showFieldAttribute}
 * @property {Function} showFieldListAttribute {@link module:Template/TemplateMod.TemplateMod#showFieldListAttribute}
 * @property {Function} sortFieldsAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsAlign}
 * @property {Function} sortFieldsBottomAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsBottomAlign}
 * @property {Function} sortFieldsHCenterAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsHCenterAlign}
 * @property {Function} sortFieldsHRegularIntervalAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsHRegularIntervalAlign}
 * @property {Function} sortFieldsLeftAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsLeftAlign}
 * @property {Function} sortFieldsRightAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsRightAlign}
 * @property {Function} sortFieldsTopAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsTopAlign}
 * @property {Function} sortFieldsVCenterAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsVCenterAlign}
 * @property {Function} sortFieldsVRegularIntervalAlign {@link module:Template/TemplateMod.TemplateMod#sortFieldsVRegularIntervalAlign}
 * @property {Function} templateInit {@link module:Template/TemplateMod.TemplateMod#templateInit}
 * @property {Function} templateMouseMoveEvent {@link module:Template/TemplateMod.TemplateMod#templateMouseMoveEvent}
 * @property {Function} templateMouseUpEvent {@link module:Template/TemplateMod.TemplateMod#templateMouseUpEvent}
 * @property {Function} templateResize {@link module:Template/TemplateMod.TemplateMod#templateResize}
 * @property {Function} tmpGroupFtEvent {@link module:Template/TemplateMod.TemplateMod#tmpGroupFtEvent}
 * @property {Function} undoAction {@link module:Template/TemplateMod.TemplateMod#undoAction}
 * @property {Function} updateFieldPoint {@link module:Template/TemplateMod.TemplateMod#updateFieldPoint}
 * @property {Function} appendFontFamily {@link module:Template/TemplateMod.TemplateMod#appendFontFamily}
 * @property {Function} appendSignTabShowOpt {@link module:Template/TemplateMod.TemplateMod#appendSignTabShowOpt}
 * 
 * @FileName TemplateMod.js
 * @since 2021.05.31
 */
class TemplateMod {
  /**
   * @type {Boolean}
   * @name module:Template/TemplateMod.TemplateMod#dragStart
   * @description  SVG화면에서 드래그가 시작되었는지 여부
   */
  dragStart = false;

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#dragBox
   * @description  SVG에서 드래그된 것을 표현하는 Rect Node
   */
  dragBox = undefined;

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#mainCanvas
   * @description  Snap Instance
   */
  mainCanvas;

  /**
   * @type {Rect}
   * @name module:Template/TemplateMod.TemplateMod#pageBoundingBox
   * @description  필드들이 움직일 수 있는 경계
   */
  pageBoundingBox = { x: 0, y: 0, width: 0, height: 0 };

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#templateRectMousePosition
   * @description 필드를 생성하여 움직 일때 현재 마우스 위치와 기존 마우스 위치를 가지고 있는 변수
   */
  templateRectMousePosition;

  /**
   * @type {String}
   * @name module:Template/TemplateMod.TemplateMod#selectAddFieldType
   * @description 필드를 만들기 위해 선택된 필드의 종류
   */
  selectAddFieldType = "";

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#fieldDictionary
   * @description 필드들의 정보를 가지고 있는 Dictionary
   */
  fieldDictionary = {};

  /**
   * @type {Number}
   * @name module:Template/TemplateMod.TemplateMod#unredoActionIdx
   * @description 현재 Undo Redo Index
   */
  unredoActionIdx = -1;

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#unredoActionDict
   * @description Undo Redo의 Action을 가지고 있는 Dictionary
   */
  unredoActionDict = {};

  /**
   * @type {PDFViewer}
   * @name module:Template/TemplateMod.TemplateMod#pdfViewer
   * @description PDF.js 뷰어 오브젝트
   */
  pdfViewer;

  /**
   * @type {Object}
   * @name module:Template/TemplateMod.TemplateMod#templateUserFieldInfo
   * @description 서명자의 정보를 가지고 있는 Dictionary
   */
  templateUserFieldInfo = {};

  /**
   * @type {Element}
   * @name module:Template/TemplateMod.TemplateMod#ownerNode
   * @description 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
   */
  ownerNode = null;

  /**
   * @type {Boolean}
   * @name module:Template/TemplateMod.TemplateMod#isFieldDragStart
   * @description 현재 필드가 드래그 되고 있는지 여부.
   */
  isFieldDragStart = false;

  /**
   * @type {String}
   * @name module:Template/TemplateMod.TemplateMod#menuCode
   * @description smartsuit에서의 menucode
   */
  menuCode = "";

  templateClipBoard = "";

  useDrawSign = "true";
  useImageSign = "true";
  useRegSign = "true";

  /**
   * @constructor
   * @param {Object} _pdfViewer PDF Viewer Object
   * @param {Element} ownerNode 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
   *
   */
  constructor(_pdfViewer, ownerNode = null, signTabShowDefOptVal) {
    this.pdfViewer = _pdfViewer;
    _templateMod = this;
    _templateMod.appendSignTabShowOpt(signTabShowDefOptVal);
    this.ownerNode = ownerNode;
  }

  /**
   * @function addUndoRedoAct
   * @name module:Template/TemplateMod.TemplateMod#addUndoRedoAct
   * @description undo redo 처리를 위한 데이터를 추가.
   *
   * @param {String} type   action 종류
   * @param {Object} oldData     이전에 있던 데이터
   * @param {Object} newData     새로운 데이터
   * @Date : 2021. 5. 31
   */
  addUndoRedoAct(type, oldData, newData) {
    if (
      type !== _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.CREATE_FIELD_ACTION &&
      type !== _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.REMOVE_FIELD_ACTION &&
      oldData === newData
    ) {
      return;
    }
    _templateMod.unredoActionDict[++_templateMod.unredoActionIdx] = {
      action: type,
      old: oldData,
      new: newData,
    };
    _templateMod.unredoActionDict[_templateMod.unredoActionIdx + 1] = undefined;
  }

  /**
   * @function buildDVOptsInfo
   * @name module:Template/TemplateMod.TemplateMod#buildDVOptsInfo
   * @description Default Value 리스트 정보를 설정 .
   *
   * @param {Array} dvOptions   Default Value 리스트
   * @Date : 2021. 5. 31
   */
  buildDVOptsInfo(dvOptions) {
    var dvOptionList = [];
    for (var idx = 0; idx < dvOptions.length; ++idx) {
      dvOptionList.push({
        text: dvOptions[idx].displayText,
        value: dvOptions[idx].variable,
      });
    }
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.setDVFieldOptsList(dvOptionList);
  }

    /**
   * @function buildSignTabShowOpt
   * @name module:Template/TemplateMod.TemplateMod#buildSignTabShowOpt
   * @description Default Value 리스트 정보를 설정 .
   *
   * @param {Object} Options   Default Value 리스트
   * @Date : 2023. 12. 27
   */
    buildSignTabShowOpt(Options) {
      //var OptionList = {};
      
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.setSignTabShowOpt(Options);
    }

  /**
   * @function buildFieldUserInfo
   * @name module:Template/TemplateMod.TemplateMod#buildFieldUserInfo
   * @description 서명할 사람들 리스트 정보를 설정 .
   *
   * @param {Array} dvOptions   서명할 사람들 정보 리스트
   * @Date : 2021. 5. 31
   */
  buildFieldUserInfo(userList) {
    for (var idx = 0; idx < userList.length; ++idx) {
      let fieldUserInfo = Object.assign(
        new _templateUserFieldInfo_js__WEBPACK_IMPORTED_MODULE_18__.TemplateUserFieldInfo(),
        userList[idx]
      );
      _templateMod.templateUserFieldInfo[fieldUserInfo.userUUID] =
        fieldUserInfo;
    }
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.setUserInfoOptsList(
      _templateMod.convertUserListToSelectOptions(
        _templateMod.templateUserFieldInfo
      )
    );
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.setUserInfoOptsListCount(
      Object.keys(_templateMod.templateUserFieldInfo).length
    );
  }

  /**
   * @function buildFieldformerList
   * @name module:Template/TemplateMod.TemplateMod#buildFieldformerList
   * @description 사이드 패널에 있는 서명자 정보를 갱신 .
   *
   * @Date : 2021. 5. 31
   */
  buildFieldformerList() {
    const ownerDom = _templateMod.ownerNode.querySelector(
      " #Editor-User-Component_Box"
    );
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(ownerDom);
    const keys = Object.keys(_templateMod.templateUserFieldInfo);
    keys.forEach(function (key) {
      const userFieldInfo = _templateMod.templateUserFieldInfo[key];
      if (userFieldInfo.isFormer === "Y") {
        return;
      }
      let fieldListDom = document.createElement("div");
      fieldListDom.setAttribute("data-user-key", key);
      fieldListDom.classList.add("User-Component-List-Conatiner");
      const fieldKeys = Object.keys(userFieldInfo.fields);
      if (fieldKeys.length === 0) {
        fieldListDom.classList.add("No-Child");
      }
      let listDom = document.createElement("ul");
      listDom.className = "User-Component-List";
      let listItemDom = document.createElement("li");
      let listItemSpanDom = document.createElement("span");
      listItemSpanDom.textContent = userFieldInfo.displayUserName;
      listItemDom.appendChild(listItemSpanDom);
      listDom.appendChild(listItemDom);
      fieldKeys.forEach(function (fieldKey) {
        const userField = userFieldInfo.field(fieldKey);
        if (userField.isRemoved) {
          return;
        }
        let listItemDom2 = document.createElement("li");
        let listItemSpanDom2 = document.createElement("span");
        let prefix =
          userField.required === "true"
            ? "[" + _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.requireText") + "]"
            : "[" + _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.selectText") + "]";
        if (userField.type === "SignField") {
          listItemSpanDom2.textContent =
            "[" + _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.translateForKey("Template.signText") + "]";
        }
        listItemSpanDom2.textContent = prefix + userField.fieldId;

        listItemDom2.appendChild(listItemSpanDom2);
        listDom.appendChild(listItemDom2);
      });
      fieldListDom.appendChild(listDom);
      ownerDom.appendChild(fieldListDom);
    });
  }

  /**
   * @function calcFieldPostion
   * @name module:Template/TemplateMod.TemplateMod#calcFieldPostion
   * @description Field의 위치(HTML에서)를 계산한다.
   *
   * @param {Object} field   BaseField를 상속받은 Object
   * @param {Boolean} isImport
   * Field를 Import중일 경우에 필드 위치를 계산할 때 Page Element의 보더도 함께 계산한다.
   * @return {Object} Rect  { x: , y: , width: , height:  }
   * @Date : 2021. 5. 31
   */
  calcFieldPostion(field, isImport = false) {
    var viewBBox = _templateMod.ownerNode
      .querySelector(" #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER)
      .getBoundingClientRect();
    const fieldPageNo = field.pageNo;
    const viewport = _templateMod.pdfViewer._pages[fieldPageNo - 1].viewport;
    var viewportXY = viewport.convertToViewportPoint(field.pdfX, field.pdfY);
    var viewportXY2 = viewport.convertToViewportPoint(field.pdfX2, field.pdfY2);

    var pageOffSet = _templateMod.computePageOffset(fieldPageNo);

    var newX = viewportXY[0] + pageOffSet.left - viewBBox.left;
    var newY = viewportXY[1] + pageOffSet.top - viewBBox.top;
    var newX2 = viewportXY2[0] + pageOffSet.left - viewBBox.left;
    var newY2 = viewportXY2[1] + pageOffSet.top - viewBBox.top;

    if (isImport) {
      var pageBorderWidth = _templateMod.getPageBorderWidth(fieldPageNo);
      newX = newX + pageBorderWidth.left;
      newY = newY + pageBorderWidth.top;
      newX2 = newX2 + pageBorderWidth.left;
      newY2 = newY2 + pageBorderWidth.top;
    }

    var newW = Math.abs(newX2 - newX);
    var newH = Math.abs(newY2 - newY);

    field.x = newX;
    field.y = newY;
    field.width = newW;
    field.height = newH;
    return { x: newX, y: newY, width: newW, height: newH };
  }

  /**
   * @function calcTemplateBoundary
   * @name module:Template/TemplateMod.TemplateMod#calcTemplateBoundary
   * @description 필드들이 움직일 수 있는 경계를 계산한다.
   *
   * @param {Number} objectWidth  가로길이
   * @param {Number} objectHeight  세로 길이
   * @Date : 2021. 5. 31
   */
  calcTemplateBoundary(objectWidth, objectHeight) {
    const viewer1 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER
    );
    const viewerBoundingRect = viewer1.getBoundingClientRect();
    var pgRect = _templateMod.getPageBoundingClientRect();
    _templateMod.pageBoundingBox.x =
      pgRect.x + objectWidth / 2 - viewerBoundingRect.left;
    _templateMod.pageBoundingBox.y =
      pgRect.y + objectHeight / 2 - viewerBoundingRect.top;
    _templateMod.pageBoundingBox.width = pgRect.width - objectWidth;
  }

  /**
   * @function changeFieldPosition
   * @name module:Template/TemplateMod.TemplateMod#changeFieldPosition
   * @description Field의 변경된 위치를 설정한다.
   *
   * @param {Object} field   BaseField를 상속받은 Object
   * @param {Matrix} newMatrix    위치정보를 계산할때 쓰일 메트릭스 기본값 undeinfed
   * @param {Boolean} donotUndoRedo     undo redo데이터를 생성하는지 여부 기본값 false
   * @Date : 2021. 5. 31
   */
  changeFieldPosition(field, newMatrix = undefined, donotUndoRedo = false) {
    let childRect = field.select("rect");
    let fieldGlobalMatrix = newMatrix;
    if (fieldGlobalMatrix === undefined) {
      fieldGlobalMatrix = field.transform().globalMatrix;
    }
    let childRectBBox = childRect.getBBox();
    const x1 = fieldGlobalMatrix.x(childRectBBox.x, childRectBBox.y);
    const y1 = fieldGlobalMatrix.y(childRectBBox.x, childRectBBox.y);
    const x2 = fieldGlobalMatrix.x(childRectBBox.x2, childRectBBox.y2);
    const y2 = fieldGlobalMatrix.y(childRectBBox.x2, childRectBBox.y2);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);
    childRect.attr({ x: x1, y: y1, width: width, height: height });
    var childSvg = field.select("svg");
    childSvg.attr({ x: x1, y: y1, width: width, height: height });
    field.transform(Snap.matrix().toTransformString());
    var oldData = _templateMod.getFieldJsonData(childRect.attr("id"));
    const isUpdated = _templateMod.updateFieldPoint(field);
    if (isUpdated === false) {
      return;
    }
    _templateMod.changeFreeTransform(field, width, height);
    if (!donotUndoRedo) {
      var newData = _templateMod.getFieldJsonData(childRect.attr("id"));
      _templateMod.addUndoRedoAct(
        _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.FIELD_ATTR_CHANGE_ACTION,
        oldData,
        newData
      );
    }
  }

  /**
   * @function changeFieldValueEvent
   * @name module:Template/TemplateMod.TemplateMod#changeFieldValueEvent
   * @description 필드의 속성 값이 변경 되었을 때 속성의 종류에 따라 처리하기 위한 메소드.
   *
   * @param {Object} event  event Object
   * @Date : 2021. 5. 31
   */
  changeFieldValueEvent(event) {
    const targetNode = event.target;
    const fieldId = targetNode.getAttribute("data-field-id");
    const fieldPropetyName = targetNode.getAttribute(
      "data-field-property-name"
    );
    var oldDataArr = [];
    var newDataArr = [];
    var ownerId = "";

    fieldId.split(",").forEach((idVal) => {
      var fieldGroup = _templateMod.mainCanvas.select("#" + idVal + "Group");
      if (fieldGroup === null || fieldGroup === undefined) {
        return;
      }
      var field = _templateMod.fieldDictionary[idVal];
      if (!field.validateValue(fieldPropetyName, targetNode.value)) {
        console.log("not validate");
        return;
      }
      const oldData = _templateMod.getFieldJsonData(idVal);
      oldDataArr.push(oldData);
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.assign(field, "m_" + fieldPropetyName, targetNode.value);
      if (_Fields_TextBaseField_js__WEBPACK_IMPORTED_MODULE_8__.TextBaseField.needTextSvgRefresh(fieldPropetyName)) {
        if (fieldPropetyName === "defaultValue" && field.type === "TextField") {
          let dvText = _templateMod.getDvTextValue(targetNode.value);
          field.defaultValueText = dvText;
        } else if (
          fieldPropetyName === "defaultValue" &&
          field.type === "ComboboxField"
        ) {
          let dvText = targetNode.value;
          field.defaultValueText = dvText;
        }
        var curScale = _templateMod.pdfViewer.currentScale;
        field.changeTextElement(fieldGroup, curScale);
      }
      if (fieldPropetyName === "ownerId") {
        _templateMod.refreshformerList(field);
      }
      if (fieldPropetyName === "fieldMinValue") {
        field.m_inputMin = Number(targetNode.value);
      }
      if (fieldPropetyName === "fieldMaxValue") {
        field.m_inputMax = Number(targetNode.value);
      }
      if (fieldPropetyName === "useCalc") {
        field.m_useCalc = targetNode.value;
      }
      if (fieldPropetyName === "useDrawSign") {
        field.m_useDrawSign = targetNode.value;
        _templateMod.validateSignOptions(targetNode, fieldId, fieldPropetyName);
        field.m_useDrawSign = targetNode.value;
      }
      if (fieldPropetyName === "useImageSign") {
        field.m_useImageSign = targetNode.value;
        _templateMod.validateSignOptions(targetNode, fieldId, fieldPropetyName);
        field.m_useImageSign = targetNode.value;
      }
      if (fieldPropetyName === "useRegSign") {
        field.m_useRegSign = targetNode.value;
        _templateMod.validateSignOptions(targetNode, fieldId, fieldPropetyName);
        field.m_useRegSign = targetNode.value;
      }
      if (fieldPropetyName === "required") {
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(
          _templateMod.ownerNode,
          idVal,
          targetNode.value === "true" ? true : false
        );
      }
      const newData = _templateMod.getFieldJsonData(idVal);
      newDataArr.push(newData);
      ownerId = field.ownerId;
    });
    if (oldDataArr.length === 0 || newDataArr === 0) {
      return;
    }
    if (
      fieldPropetyName === "ownerId" ||
      fieldPropetyName === "fieldId" ||
      fieldPropetyName === "required"
    ) {
      _templateMod.buildFieldformerList();
      _templateMod.selectUserList(ownerId);
    }
    let actionName = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_CHANGE_ACTION;
    if (fieldPropetyName === "ownerId") {
      actionName = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_OWNER_CHANGE_ACTION;
    }
    _templateMod.addUndoRedoAct(actionName, oldDataArr, newDataArr);
  }

  //병욱 추가
  validateSignOptions(targetNode, fieldId, fieldPropetyName) {
    const signField = document.querySelector(".Sign-Field");
    const useDrawSignInput = signField.querySelector(
      'input[data-field-property-name="useDrawSign"]'
    );
    const useImageSignInput = signField.querySelector(
      'input[data-field-property-name="useImageSign"]'
    );
    const useRegSignInput = signField.querySelector(
      'input[data-field-property-name="useRegSign"]'
    );

    let useDrawSign = useDrawSignInput && useDrawSignInput.value === "true" ? true : false;
    let useImageSign = useImageSignInput && useImageSignInput.value === "true" ? true : false;
    let useRegSign = useRegSignInput && useRegSignInput.value === "true" ? true : false;

    if (!useDrawSign && !useImageSign && !useRegSign) {
      console.log("targetNode.checked:" + targetNode.checked + "\n");
      console.log("targetNode.value:" + targetNode.value + "\n");
      console.log("useDrawSignInput.value:" + useDrawSignInput.value + "\n");
      targetNode.checked = true;
      targetNode.value = "true";
      //alert('적어도 하나의 서명 옵션을 활성화해야 합니다.');

      // 부모 요소를 찾고,
      let parentDiv = targetNode.parentElement;
      // 부모 요소 내에서 체크박스를 찾습니다.
      let checkboxInput = parentDiv.querySelector('input[type="checkbox"]');
      checkboxInput.checked = true;

      return true;
    }
  }

  /**
   * @function changeFreeTransform
   * @name module:Template/TemplateMod.TemplateMod#changeFreeTransform
   * @description 필드의 크기 및 위치를 변경하는 FreeTransform을 새로 변경한다.
   *
   * @param {Object} fieldGroup   SVG의 group 오브젝트
   * @param {Number} width     필드의 가로 길이
   * @param {Number} height    필드의 세로 길이
   * @Date : 2021. 5. 31
   */
  changeFreeTransform(fieldGroup, width, height) {
    if (fieldGroup.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME) {
      return;
    }
    let hasHideClass = false;
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(fieldGroup.freeTransform)) {
      hasHideClass = !fieldGroup.freeTransform.isShowResizeHandler();
      fieldGroup.freeTransform.unplug();
    }
    _templateMod.calcTemplateBoundary(width, height);
    // const startTime = performance.now();
    let ft = _templateMod.mainCanvas.freeTransform(
      fieldGroup,
      {
        snap: { rotate: 1 },
        attrs: { stroke: "#9d6859" },
        subjectBBox: fieldGroup.select("rect").getBBox(true),
        size: 4,
        draw: "bbox",
        boundary: _templateMod.pageBoundingBox,
      },
      function (ft2, events) {
        _templateMod.fieldFtEvent(events[0], fieldGroup);
      }
    );
    ft.setOpts({ rotate: false });
    if (hasHideClass) {
      fieldGroup.freeTransform.hideResizeHandler();
    }
  }

  /**
   * @function changeGroupBoxFreeTransform
   * @name module:Template/TemplateMod.TemplateMod#changeGroupBoxFreeTransform
   * @description필드 그룹박스 크기 및 위치를 변경하는 FreeTransform을 새로 변경한다.
   *
   * @param {Object} tempGroupBox  SVG의 group 오브젝트
   * @Date : 2021. 5. 31
   */
  changeGroupBoxFreeTransform(tempGroupBox) {
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(tempGroupBox.freeTransform)) {
      tempGroupBox.freeTransform.unplug();
    }
    _templateMod.calcTemplateBoundary(
      tempGroupBox.getBBox().width,
      tempGroupBox.getBBox().height
    );
    var tempGFt = _templateMod.mainCanvas.freeTransform(
      tempGroupBox,
      {
        snap: { rotate: 1 },
        size: 4,
        draw: "bbox",
        boundary: _templateMod.pageBoundingBox,
      },
      function (ft, events) {
        //console.log(events);
        _templateMod.tmpGroupFtEvent(events[0]);
      }
    );
    tempGFt.setOpts({ rotate: false, scale: false });
  }

  /**
   * @function checkTemplateFieldData
   * @name module:Template/TemplateMod.TemplateMod#checkTemplateFieldData
   * @description
   * Label이나 Combobox의 경우 안에 값을 셋팅하지 않으면 서명모드에서
   * 필수 값 체크 여부를 통과하지 못하기 때문에 템플릿 에디트에서 해당 값들이
   * 들어 있는지 체크한다.
   *
   * @return {Boolean}
   * @Date : 2021. 6. 18
   */
  checkTemplateFieldData() {
    const keys = Object.keys(_templateMod.templateUserFieldInfo);
    for (let usrKeyIdx = 0; usrKeyIdx < keys.length; ++usrKeyIdx) {
      const userInfo = _templateMod.templateUserFieldInfo[keys[usrKeyIdx]];
      for (
        var pageNo = 0;
        pageNo < _templateMod.pdfViewer.pagesCount;
        ++pageNo
      ) {
        const fieldKeys = Object.keys(_templateMod.fieldDictionary);
        for (let keyIdx = 0; keyIdx < fieldKeys.length; ++keyIdx) {
          const field = _templateMod.fieldDictionary[fieldKeys[keyIdx]];
          if (field.isRemoved) {
            continue;
          }
          if (field.type === "LabelField") {
            if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(field.value)) {
              let svgRect = _templateMod.mainCanvas.select(
                "#" + field.id + "Group > rect"
              );
              _templateMod.showFieldAttribute(field.id);
              let viewerContainer = _templateMod.ownerNode.querySelector(
                " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER_CONTAINER
              );
              viewerContainer.scrollTop = svgRect.attr("y");
              return false;
            }
          } else if (field.type === "ComboboxField") {
            if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(field.comboboxList)) {
              let svgRect = _templateMod.mainCanvas.select(
                "#" + field.id + "Group > rect"
              );
              _templateMod.showFieldAttribute(field.id);
              let viewerContainer = _templateMod.ownerNode.querySelector(
                " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER_CONTAINER
              );
              viewerContainer.scrollTop = svgRect.attr("y");
              return false;
            }
          }
        }
      }
    }

    return true;
  }

  /**
   * @function clearSelectedTool
   * @name module:Template/TemplateMod.TemplateMod#clearSelectedTool
   * @description 사이드 탭에 선탠된 모드를 초기화한다.
   *
   * @Date : 2021. 5. 31
   */
  clearSelectedTool() {
    let toolElement = _templateMod.ownerNode.querySelectorAll(
      "." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_COMPONENT_CLASS + " ul li"
    );
    for (let index = 0; index < toolElement.length; index++) {
      if (toolElement[index].classList.contains("selected")) {
        toolElement[index].classList.toggle("selected");
      }
    }
  }

  /**
   * @function computePageOffset
   * @name module:Template/TemplateMod.TemplateMod#computePageOffset
   * @description사이드  페이지의 Offset을 계산한다..
   *
   * @param {Number} pageNo  페이지 번호
   * @return  {Object} { left: , top:  }
   * @Date : 2021. 5. 31
   */
  computePageOffset(pageNo) {
    let pgNode = _templateMod.getPageElement(pageNo);
    var rect = pgNode.getBoundingClientRect(),
      bodyElt = document.body;
    return {
      top: rect.top + bodyElt.scrollTop,
      left: rect.left + bodyElt.scrollLeft,
    };
  }

  /**
   * @function convertUserListToSelectOptions
   * @name module:Template/TemplateMod.TemplateMod#convertUserListToSelectOptions
   * @description 사이드 서명자 리스트를 필드 속성에서 사용하기 위해 여기서 사용할 포멧으로 변환한다. .
   *
   * @return {Array} [{ text: , value:  }...]
   * @Date : 2021. 5. 31
   */
  convertUserListToSelectOptions() {
    let optionList = [];

    const keys = Object.keys(_templateMod.templateUserFieldInfo);
    keys.forEach(function (key) {
      const usrInfo = _templateMod.templateUserFieldInfo[key];
      if (
        usrInfo.isFormer !== null &&
        usrInfo.isFormer !== undefined &&
        usrInfo.isFormer === "Y"
      ) {
        return;
      }
      optionList.push({
        text: usrInfo.displayUserName,
        value: usrInfo.userUUID,
      });
    });

    return optionList;
  }

  copyObject() {
    _templateMod.templateClipBoard = "";
    const selectedNode = _templateMod.ownerNode.querySelector(
      " ." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_ATTR_CLASS
    );
    if (selectedNode === null) {
      return;
    }
    const attrPanelNode = selectedNode.querySelector(
      "." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_ATTR_PANEL_CLASS
    );
    if (attrPanelNode === null) {
      return;
    }
    const idListAttr = attrPanelNode.getAttribute("Field-id-list");
    _templateMod.templateClipBoard = idListAttr;
  }

  /**
   * @function createDragOverGroup
   * @name module:Template/TemplateMod.TemplateMod#createDragOverGroup
   * @description 사이드 드래그 된 곳의 Object들을 svg 그룹으로 묶는다.
   *
   * @param {Object} border Snap의 bounding box
   * @Date : 2021. 5. 31
   */
  createDragOverGroup(border) {
    _templateMod.hideFieldAttribute();
    var tempGNew = _templateMod.mainCanvas.group();
    tempGNew.attr({ id: _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME });
    var items = _templateMod.mainCanvas.selectAll(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME + " > g"
    );
    var selectItemArray = [];
    items.forEach(function (el) {
      var mybounds = el.getBBox();
      if (Snap.path.isBBoxIntersect(mybounds, border)) {
        selectItemArray.push(el);
      }
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(el.freeTransform)) {
        el.freeTransform.hideResizeHandler();
      }
    });
    if (selectItemArray.length == 1) {
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(selectItemArray[0].freeTransform)) {
        selectItemArray[0].freeTransform.unplug();
      }
      let bbox = selectItemArray[0].getBBox();
      _templateMod.changeFreeTransform(
        selectItemArray[0],
        bbox.width,
        bbox.height
      );
      const childRect = selectItemArray[0].select("rect");
      _templateMod.showFieldAttribute(childRect.attr("id"));
      tempGNew.remove();
      return;
    }
    if (selectItemArray.length < 1) {
      tempGNew.remove();
      _templateMod.hideFieldAttribute();
      return;
    }
    var fieldList = [];
    selectItemArray.forEach(function (el) {
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(el.freeTransform)) {
        el.freeTransform.unplug();
      }

      const childRect = el.select("rect");
      fieldList.push(_templateMod.fieldDictionary[childRect.attr("id")]);
      tempGNew.append(el);
    });
    _templateMod.showFieldListAttribute(fieldList);
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(tempGNew.freeTransform)) {
      tempGNew.freeTransform.unplug();
    }
    _templateMod.calcTemplateBoundary(
      tempGNew.getBBox().width,
      tempGNew.getBBox().height
    );
    var tempGFt = _templateMod.mainCanvas.freeTransform(
      tempGNew,
      {
        snap: { rotate: 1 },
        size: 4,
        draw: "bbox",
        boundary: _templateMod.pageBoundingBox,
      },
      function (ft, events) {
        _templateMod.tmpGroupFtEvent(events[0]);
      }
    );
    tempGFt.setOpts({ rotate: false, scale: false });
  }

  /**
   * @function createField
   * @name module:Template/TemplateMod.TemplateMod#createField
   * @description 사이드 필드를 생성한다.
   *
   * @param {String} type  필드의 타입
   * @param {Number} mousePageX   마우스의 x좌표
   * @param {Number } mousePageY   마우스의 y좌표
   * @return {Object} fieldGroup SVG의 Group Object
   * @Date : 2021. 5. 31
   */
  createField(type, mousePageX, mousePageY) {
    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );

    const viewer1 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER
    );
    const viewerBoundingRect = viewer1.getBoundingClientRect();
    const m1 = _templateMod.mainCanvas.transform().diffMatrix.invert();
    const fieldX = m1.x(
      mousePageX - viewerBoundingRect.left,
      mousePageY - viewerBoundingRect.top
    );
    const fieldY = m1.y(
      mousePageX - viewerBoundingRect.left,
      mousePageY - viewerBoundingRect.top
    );
    let field = _templateMod.createFieldObject(
      type,
      fieldX,
      fieldY,
      _templateMod.getPdfPageFromSvgPos(fieldX, fieldY)
    );
    _templateMod.selectAddFieldType = "";
    let ost = _templateMod.computePageOffset();
    let pageBorderWidth = _templateMod.getPageBorderWidth(field.pageNo);

    let x = mousePageX - ost.left - pageBorderWidth.left;
    let y = mousePageY - ost.top - pageBorderWidth.top;
    let fieldGroup = field.getSVGFieldObject(
      _templateMod.mainCanvas,
      mainGroup,
      _templateMod.pdfViewer.currentScale,
      _templateMod.ownerNode,
      _templateMod.removeDragOverGroup,
      _templateMod.changeFieldValueEvent,
      _templateMod.changeFreeTransform
    );
    var groupBBox = fieldGroup.getBBox();
    const viewport = _templateMod.pdfViewer._pages[field.pageNo - 1].viewport;
    let pdfPoision = viewport.convertToPdfPoint(x, y);
    let pdfPoision2 = viewport.convertToPdfPoint(
      x + groupBBox.width,
      y + groupBBox.height
    );
    field.pdfX = pdfPoision[0];
    field.pdfY = pdfPoision[1];
    field.pdfX2 = pdfPoision2[0];
    field.pdfY2 = pdfPoision2[1];
    _templateMod.fieldDictionary[field.id] = field;
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsListCount() === 1) {
      const keys = Object.keys(_templateMod.templateUserFieldInfo);
      field.m_ownerId = _templateMod.templateUserFieldInfo[keys[0]].userUUID;
      _templateMod.refreshformerList(field);
      _templateMod.buildFieldformerList();
    }

    _templateMod.changeFreeTransform(fieldGroup, field.width, field.height);
    _templateMod.showAsteriskDiv(
      field.id,
      field.required === "true",
      field.x,
      field.y,
      field.height
    );
    var jsonData = JSON.stringify(field);
    _templateMod.addUndoRedoAct(
      _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.CREATE_FIELD_ACTION,
      jsonData,
      jsonData
    );
    return fieldGroup;
  }

  /**
   * @function createFieldObject
   * @name module:Template/TemplateMod.TemplateMod#createFieldObject
   * @description 사이드 Filed Object의 인스턴스를 생성한다.
   *
   * @param {String} type 필드의 타입
   * @param {Number} x     x좌표
   * @param {Number} y     y좌표
   * @return {Object} Field Object
   * @Date : 2021. 5. 31
   */
  createFieldObject(type, x, y, pageNum = undefined) {
    let fieldId = _templateMod.generateFieldId(type);
    let pageNo = pageNum;
    if (pageNum === undefined) {
      pageNo = _templateMod.pdfViewer.currentPageNumber;
    }
    console.log(pageNo);
    switch (type) {
      case "TextField": {
        let textField = new _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField(fieldId, pageNo, x, y);
        return textField;
      }
      case "LabelField": {
        let labelField = new _Fields_LabelField_js__WEBPACK_IMPORTED_MODULE_13__.LabelField(fieldId, pageNo, x, y);
        return labelField;
      }
      case "SignField": {
        let signField = new _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField(
          fieldId,
          pageNo,
          x,
          y,
          _templateMod.useDrawSign,
          _templateMod.useImageSign,
          _templateMod.useRegSign
        );
        
        return signField;
      }
      case "NumberField": {
        let numberField = new _Fields_NumberField__WEBPACK_IMPORTED_MODULE_5__.NumberField(fieldId, pageNo, x, y);
        return numberField;
      }
      case "DateField": {
        let dateField = new _Fields_DateField__WEBPACK_IMPORTED_MODULE_6__.DateField(fieldId, pageNo, x, y);
        return dateField;
      }
      case "ImageField": {
        let imageField = new _Fields_ImageField_js__WEBPACK_IMPORTED_MODULE_9__.ImageField(fieldId, pageNo, x, y);
        return imageField;
      }
      case "MultiLineTextField": {
        let multilineTextField = new _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField(fieldId, pageNo, x, y);
        return multilineTextField;
      }
      case "CheckboxField": {
        let checkboxField = new _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField(fieldId, pageNo, x, y);
        return checkboxField;
      }
      case "RadioField": {
        let radioField = new _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField(fieldId, pageNo, x, y);
        return radioField;
      }
      case "ComboboxField": {
        let comboboxField = new _Fields_ComboboxField_js__WEBPACK_IMPORTED_MODULE_14__.ComboboxField(fieldId, pageNo, x, y);
        return comboboxField;
      }
      default: {
        return null;
      }
    }
  }

  /**
   * @function createTemplateRect
   * @name module:Template/TemplateMod.TemplateMod#createTemplateRect
   * @description PDF위에 올라가는 Template 레이어에 필드를 만들기위해 임시 Div를 만든다.
   *
   * @Date : 2021. 5. 31
   */
  createTemplateRect() {
    var templateLayer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME
    );
    templateLayer.style.display = "block";
    let templateRect = document.createElement("div");
    templateRect.id = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_RECT_NAME;
    templateRect.style.position = "absolute";
    templateRect.style.left = "0px";
    templateRect.style.top = "0px";
    var size = _templateMod.getFieldSize(_templateMod.selectAddFieldType);
    var curScale = _templateMod.pdfViewer.currentScale;
    templateRect.style.width = size.w * curScale + "px";
    templateRect.style.height = size.h * curScale + "px";
    templateRect.style.background = "none";
    templateRect.style.border = "1px solid red";
    _templateMod.ownerNode
      .querySelector(" #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME)
      .appendChild(templateRect);

    templateLayer.addEventListener(
      "mousemove",
      _templateMod.templateMouseMoveEvent,
      true
    );
    templateLayer.addEventListener(
      "mouseup",
      _templateMod.templateMouseUpEvent,
      true
    );
  }

  /**
   * @function dragendFunc
   * @name module:Template/TemplateMod.TemplateMod#dragendFunc
   * @description SVG내에서 Drag가 끝났을떄의 후처리를 한다. .
   *
   * @param {Event} event event object
   * @Date : 2021. 5. 31
   */
  dragendFunc(event) {
    event.stopPropagation();
    if (!_templateMod.dragStart) {
      return false;
    }
    var border = _templateMod.dragBox.getBBox();
    _templateMod.dragBox.remove();
    _templateMod.dragStart = false;
    _templateMod.removeDragOverGroup();
    _templateMod.createDragOverGroup(border);
  }

  /**
   * @function dragmoveFunc
   * @name module:Template/TemplateMod.TemplateMod#dragmoveFunc
   * @description SVG내에서 드래그 중일 때 처리를 한다.
   *
   * @param {Number} dx  시작좌표로 부터 x만큼 움직인 크기
   * @param {Number} dy   시작좌표로 부터 y만큼 움직인 크기
   * @param {Number} x   마우스의 x좌표 사용하지 않음
   * @param {Number} y   마우스의 y좌표 사용하지 않음
   * @param {Object} event     Event Object
   * @Date : 2021. 5. 31
   */
  dragmoveFunc(dx, dy, x, y, event) {
    event.stopPropagation();
    if (!_templateMod.dragStart) {
      return false;
    }
    var xoffset = 0,
      yoffset = 0;

    if (dx < 0) {
      xoffset = dx;
      dx = -1 * dx;
    }

    if (dy < 0) {
      yoffset = dy;
      dy = -1 * dy;
    }

    _templateMod.dragBox.transform("T" + xoffset + "," + yoffset);
    _templateMod.dragBox.attr("width", dx);
    _templateMod.dragBox.attr("height", dy);
    _templateMod.dragBox.attr("fill", "none");
  }

  /**
   * @function dragstartFunc
   * @name module:Template/TemplateMod.TemplateMod#dragstartFunc
   * @description SVG내에서 drag를 시작할때 처리하는 메소드
   *
   * @param {Number} x   마우스의 x좌표 사용하지 않음
   * @param {Number} y   마우스의 y좌표 사용하지 않음
   * @param {Object} event     Event Object
   * @Date : 2021. 5. 31
   */
  dragstartFunc(x, y, event) {
    event.stopPropagation();
    //if path or circle were clicked don't draw box
    if (
      !(event.target.nodeName === "svg" || event.target.nodeName === "rect")
    ) {
      if (_templateMod.dragBox) {
        _templateMod.dragBox.remove();
      }
      return false;
    }
    if (event.target.nodeName === "rect") {
      var dragStop = false;
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(event.srcElement.id)) {
        var obj1 = _templateMod.mainCanvas
          .select("#" + event.srcElement.id)
          .parent();
        if (obj1) {
          dragStop =
            !_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(obj1.freeTransform) ||
            obj1.parent().attr("id") === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME;
        }
      }
      if (
        (event.target !== undefined &&
          event.target.classList !== null &&
          event.target.classList !== undefined &&
          event.target.classList.length > 0 &&
          event.target.classList.contains("fthandle")) ||
        dragStop
      ) {
        if (
          _templateMod.dragBox !== undefined &&
          _templateMod.dragBox !== null
        ) {
          _templateMod.dragBox.remove();
        }
        return false;
      }
    }
    _templateMod.dragStart = true;
    var viewer1 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER
    );
    var br = viewer1.getBoundingClientRect();
    var mainCavnasMatrix = _templateMod.mainCanvas
      .transform()
      .diffMatrix.invert();
    var gragBoxX = mainCavnasMatrix.x(
      event.pageX - br.left,
      event.pageY - br.top
    );
    var gragBoxY = mainCavnasMatrix.y(
      event.pageX - br.left,
      event.pageY - br.top
    );
    _templateMod.dragBox = _templateMod.mainCanvas
      .rect(gragBoxX, gragBoxY, 0, 0)
      .attr("stroke", "black");
  }

  /**
   * @function exportFieldData
   * @name module:Template/TemplateMod.TemplateMod#exportFieldData
   * @description Field정보를 JSON형식으로 리턴하는 메소드
   *
   * @return {String} { formTemplateName: "", pages: [ {data..., fields: []}] }
   * @Date : 2021. 5. 31
   */
  exportFieldData() {
    var templateTitle = _templateMod.ownerNode.querySelector(
      " .Editor-Toolbar-Group.Center > span "
    );
    templateTitle.textContent;
    let templateData = new _templateData_js__WEBPACK_IMPORTED_MODULE_15__.TemplateData(templateTitle.textContent);

    const keys = Object.keys(_templateMod.templateUserFieldInfo);
    keys.forEach(function (key) {
      const userInfo = _templateMod.templateUserFieldInfo[key];
      let templateDataOwner =
        _templateDataOwner_js__WEBPACK_IMPORTED_MODULE_16__.TemplateDataOwner.cloneTemplateDataOwnerObject(userInfo);
      for (
        var pageNo = 0;
        pageNo < _templateMod.pdfViewer.pagesCount;
        ++pageNo
      ) {
        let templateDataPage = new _templateDataPage_js__WEBPACK_IMPORTED_MODULE_17__.TemplateDataPage(pageNo);

        const fieldKeys = Object.keys(_templateMod.fieldDictionary);
        fieldKeys.forEach(function (fieldKey) {
          const field = _templateMod.fieldDictionary[fieldKey];
          if (field.isRemoved) {
            return;
          }
          if (pageNo !== field.pageNo - 1) {
            return;
          }
          if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(field.ownerId) && userInfo.isFormer === "Y") {
            templateDataPage.pushField(field);
            return;
          }
          if (field.ownerId !== key) {
            return;
          }
          templateDataPage.pushField(field);
        });
        templateDataOwner.pushPage(templateDataPage);
      }
      templateData.pushOwner(templateDataOwner);
    });

    return JSON.stringify(templateData);
  }

  /**
   * @function fieldDeleteBtnClicked
   * @name module:Template/TemplateMod.TemplateMod#fieldDeleteBtnClicked
   * @description 필드의 삭제 버튼을 눌렀을때 동작하는 메소드.
   *
   * @param {Object} evt    Event Object
   * @Date : 2021. 5. 31
   */
  fieldDeleteBtnClicked(evt) {
    _templateMod.removeSelectedField();
  }

  /**
   * @function fieldFtEvent
   * @name module:Template/TemplateMod.TemplateMod#fieldFtEvent
   * @description Default Value 리스트정보를 설정 .
   *
   * @param {String} eventName   이벤트 종류
   * @param {Object} field  SVG의 Field Group Object
   * @Date : 2021. 5. 31
   */
  fieldFtEvent(eventName, field) {
    if (eventName === "drag start" || eventName === "apply") {
      //hide attr
      let childRect = field.select("rect");
      let fieldId = childRect.attr("id");
      if (_templateMod.isFieldDragStart === true) {
        _templateMod.hideFieldAttribute();
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isShowAsteriskDiv(_templateMod.ownerNode, fieldId)) {
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(_templateMod.ownerNode, fieldId, false);
        }
        return;
      }
      _templateMod.isFieldDragStart = true;
      _templateMod.hideFieldAttribute();

      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(_templateMod.ownerNode, fieldId, false);
    }
    if (eventName === "scale end" || eventName === "drag end") {
      _templateMod.isFieldDragStart = false;
      _templateMod.changeFieldPosition(field);
      _templateMod.showFieldAttribute(
        _templateMod.getFieldIdFromGroupNode(field)
      );
    }
  }

  /**
   * @function fieldRepositioning
   * @name module:Template/TemplateMod.TemplateMod#fieldRepositioning
   * @description 필드의 위치를 재조정한다.
   *
   * @param {Object} event  event object
   * @param {Boolean} isImport  field를 임포트하는지 여부
   * @Date : 2021. 5. 31
   */
  fieldRepositioning(event, isImport = false) {
    const keys = Object.keys(_templateMod.fieldDictionary);
    keys.forEach(function (key) {
      var field = _templateMod.fieldDictionary[key];
      var fieldGroup = _templateMod.mainCanvas.select("#" + field.id + "Group");

      var fieldRect = fieldGroup.select("rect");
      var fieldSvg = fieldGroup.select("svg");
      var oldW = field.width;
      const newRect = _templateMod.calcFieldPostion(field, isImport);
      var scale = newRect.width / oldW;
      fieldRect.attr(newRect);
      fieldSvg.attr(newRect);
      var fieldSvgText = fieldSvg.select("text");
      if (fieldSvgText) {
        fieldSvgText.attr("font-size", field.fontSize * scale + "px");
        fieldGroup.transform(Snap.matrix().toTransformString());
      }

      _templateMod.changeFreeTransform(
        fieldGroup,
        newRect.width,
        newRect.height
      );

      _templateMod.showAsteriskDiv(
        field.id,
        field.required === "true",
        newRect.x,
        newRect.y,
        newRect.height
      );
    });
  }

  /**
   * @function generateFieldId
   * @name module:Template/TemplateMod.TemplateMod#generateFieldId
   * @description 필드의 이름을 현재 존재하는 필드의 No중 MAX값을 찾아서 +1해서 만든다.
   *
   * @param {String} type 필드의 종류
   * @return {String} 필드의 이름.
   * @Date : 2021. 5. 31
   */
  generateFieldId(type) {
    var typeList = _templateMod.mainCanvas.selectAll(
      "rect[id^='" + type + "']"
    );
    if (typeList.length < 1) {
      return type + 1;
    }
    let firstId = typeList[0].node.id;
    let maxNoStr = firstId.replace(type, "");
    let maxNo = parseInt(maxNoStr);
    for (var typeIdx = 1; typeIdx < typeList.length; typeIdx++) {
      let obj1 = typeList[typeIdx];
      let objNoStr = obj1.attr("id").replace(type, "");
      let objNo = parseInt(objNoStr);
      if (objNo > maxNo) {
        maxNo = objNo;
      }
    }
    maxNo = maxNo + 1;
    return type + maxNo;
  }

  /**
   * @function getCreateFieldDefaultWidth
   * @name module:Template/TemplateMod.TemplateMod#getCreateFieldDefaultWidth
   * @description 필드를 만들때 필드의 설정된 기본크기를 리턴한다.
   *
   * @param {String} type  필드의 종류
   * @return {Number} 필드의 기본 가로길이
   * @Date : 2021. 5. 31
   */
  getCreateFieldDefaultWidth(type) {
    switch (type) {
      case "TextField": {
        return _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField.widthValue();
      }
      case "LabelField": {
        return _Fields_LabelField_js__WEBPACK_IMPORTED_MODULE_13__.LabelField.widthValue();
      }
      case "NumberField": {
        return _Fields_NumberField__WEBPACK_IMPORTED_MODULE_5__.NumberField.widthValue();
      }
      case "DateField": {
        return _Fields_DateField__WEBPACK_IMPORTED_MODULE_6__.DateField.widthValue();
      }
      case "SignField": {
        return _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField.widthValue();
      }
      case "ImageField": {
        return _Fields_ImageField_js__WEBPACK_IMPORTED_MODULE_9__.ImageField.widthValue();
      }
      case "MultiLineTextField": {
        return _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField.widthValue();
      }
      case "CheckboxField": {
        return _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField.widthValue();
      }
      case "RadioField": {
        return _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField.widthValue();
      }
      case "ComboboxField": {
        return _Fields_ComboboxField_js__WEBPACK_IMPORTED_MODULE_14__.ComboboxField.widthValue();
      }
    }
  }

  /**
   * @function getDvTextValue
   * @name module:Template/TemplateMod.TemplateMod#getDvTextValue
   * @description Default Value 의 읽을 수 있는 Text값을 반환한다.
   *
   * @param  {String} value 기본값의 variable
   * @return {String} 기본값의 Text 값
   * @Date : 2021. 5. 31
   */
  getDvTextValue(value) {
    const dvOpts = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList();
    for (var idx = 0; idx < dvOpts.length; ++idx) {
      if (dvOpts[idx].value === value) {
        return dvOpts[idx].text;
      }
    }
    return "";
  }

  /**
   * @function getFieldFromJson
   * @name module:Template/TemplateMod.TemplateMod#getFieldFromJson
   * @description JSON 텍스트를 이용하여 필드의 인스턴스를 생성하여 반환한다.
   *
   * @param  {String} type 필드의 종류
   * @param  {String} jsonData  필드 데이터의 JSON 텍스트
   * @return Field Object 필드의 인스턴스
   * @Date : 2021. 5. 31
   */
  getFieldFromJson(type, jsonData) {
    switch (type) {
      case "SignField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField(), jsonData);
      }
      case "TextField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField(), jsonData);
      }
      case "LabelField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_LabelField_js__WEBPACK_IMPORTED_MODULE_13__.LabelField(), jsonData);
      }
      case "NumberField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_NumberField__WEBPACK_IMPORTED_MODULE_5__.NumberField(), jsonData);
      }
      case "DateField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_DateField__WEBPACK_IMPORTED_MODULE_6__.DateField(), jsonData);
      }
      case "ImageField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_ImageField_js__WEBPACK_IMPORTED_MODULE_9__.ImageField(), jsonData);
      }
      case "MultiLineTextField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField(), jsonData);
      }
      case "CheckboxField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField(), jsonData);
      }
      case "RadioField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField(), jsonData);
      }
      case "ComboboxField": {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.fromJson(new _Fields_ComboboxField_js__WEBPACK_IMPORTED_MODULE_14__.ComboboxField(), jsonData);
      }
    }
  }

  /**
   * @function getFieldIdFromGroupNode
   * @name module:Template/TemplateMod.TemplateMod#getFieldIdFromGroupNode
   * @description SVG의 Group오브젝트로부터 필드의 ID를 찾아서 반환한다.
   *
   * @param  {Object} fieldGorup  SVG의 group 오브젝트
   * @return {String} 필드의 ID
   * @Date : 2021. 5. 31
   */
  getFieldIdFromGroupNode(fieldGorup) {
    let childRect = fieldGorup.select("rect");
    return childRect.attr("id");
  }

  /**
   * @function getFieldJsonData
   * @name module:Template/TemplateMod.TemplateMod#getFieldJsonData
   * @description 필드의 데이터를 JSON Text로 반환한다.
   *
   * @param  {String} fieldId Field의 ID
   * @return {String} JSON 텍스트
   * @Date : 2021. 5. 31
   */
  getFieldJsonData(fieldId) {
    var field = _templateMod.fieldDictionary[fieldId];
    var data = JSON.stringify(field);
    return data;
  }

  /**
   * @function getFieldSize
   * @name module:Template/TemplateMod.TemplateMod#getFieldSize
   * @description 필드의 가로 세로 사이즈를 리턴.
   *
   * @param  {String} type 필드의 종류
   * @return  {Object} { w: , h:  }  default - { w: 150, h: 40 };
   * @Date : 2021. 5. 31
   */
  getFieldSize(type) {
    var size = { w: 150, h: 40 };
    switch (type) {
      case "TextField":
      case "NumberField":
      case "DateField":
      case "LabelField":
      case "ComboboxField":
        size = { w: _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField.widthValue(), h: _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField.heightValue() };
        break;
      case "SignField":
      case "ImageField":
        size = { w: _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField.widthValue(), h: _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField.heightValue() };
        break;
      case "MultiLineTextField":
        size = {
          w: _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField.widthValue(),
          h: _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField.heightValue(),
        };
        break;
      case "CheckboxField":
        size = {
          w: _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField.widthValue(),
          h: _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField.heightValue(),
        };
        break;
      case "RadioField":
        size = { w: _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField.widthValue(), h: _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField.heightValue() };
        break;
    }
    return size;
  }

  /**
   * @function getPageElement
   * @name module:Template/TemplateMod.TemplateMod#getPageElement
   * @description PDF 페이지 Element
   *
   * @param  {Number} pageNo  PDF 페이지 번호
   * @return {Element}
   * @Date : 2021. 5. 31
   */
  getPageElement(pageNo) {
    let pageNumber = pageNo;
    if (pageNumber === undefined) {
      pageNumber = _templateMod.pdfViewer.currentPageNumber;
    }
    let pg = _templateMod.ownerNode.querySelector(
      " #TemplatePDFViewer [aria-label='Page " + pageNumber + "']"
    );
    return pg;
  }

  /**
   * @function getPageBorderWidth
   * @name module:Template/TemplateMod.TemplateMod#getPageBorderWidth
   * @description PDF 페이지의 border Width를 반한한다.
   *
   * @param { Number} pageNo  PDF 페이지 번호
   * @return {Rect} Object { left: , top: , right: , bottom:  }
   * @Date : 2021. 5. 31
   */
  getPageBorderWidth(pageNo) {
    let pageNumber = pageNo;
    if (pageNumber === undefined) {
      pageNumber = _templateMod.pdfViewer.currentPageNumber;
    }
    let pgNode = _templateMod.ownerNode.querySelector(
      " #TemplatePDFViewer [aria-label='Page " + pageNumber + "']"
    );

    let pageComputedStyle = window.getComputedStyle(pgNode);
    let borderTopStr = pageComputedStyle.getPropertyValue("border-top-width");
    let borderLeftStr = pageComputedStyle.getPropertyValue("border-left-width");
    let borderBottomStr = pageComputedStyle.getPropertyValue(
      "border-bottom-width"
    );
    let borderRightStr =
      pageComputedStyle.getPropertyValue("border-right-width");
    let borderTopWidth = 0;
    let borderLeftWidth = 0;
    let borderBottomWidth = 0;
    let borderRightWidth = 0;
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(borderTopStr)) {
      borderTopWidth = parseInt(borderTopStr.replace("px", ""));
    }
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(borderLeftStr)) {
      borderLeftWidth = parseInt(borderLeftStr.replace("px", ""));
    }
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(borderBottomStr)) {
      borderBottomWidth = parseInt(borderBottomStr.replace("px", ""));
    }
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(borderRightStr)) {
      borderRightWidth = parseInt(borderRightStr.replace("px", ""));
    }
    return {
      top: borderTopWidth,
      left: borderLeftWidth,
      bottom: borderBottomWidth,
      right: borderRightWidth,
    };
  }

  /**
   * @function getPageBoundingClientRect
   * @name module:Template/TemplateMod.TemplateMod#getPageBoundingClientRect
   * @description PDF 페이지의 Bounding Rect
   *
   * @param { Number} pageNo  PDF 페이지 번호
   * @return {Rect} Object { x: , y: , width: , height:  }
   * @Date : 2021. 5. 31
   */
  getPageBoundingClientRect(pageNo) {
    let pageNumber = pageNo;
    if (pageNumber === undefined) {
      pageNumber = _templateMod.pdfViewer.currentPageNumber;
    }
    let pg = _templateMod.ownerNode.querySelector(
      " #TemplatePDFViewer [aria-label='Page " + pageNumber + "']"
    );
    return pg.getBoundingClientRect();
  }

  /**
   * @function getPdfPageFromSvgPos
   * @name module:Template/TemplateMod.TemplateMod#getPdfPageFromSvgPos
   * @description SVG 레이어에서 PDF의 페이지 위치를 계산하여 리턴한다.
   *
   * @param {Number} x SVG의 X좌표
   * @param {Number} y SVG의 Y좌표
   * @return {Number} Pdf Page Number
   * @Date : 2021. 5. 31
   */
  getPdfPageFromSvgPos(x, y) {
    let currentHeightSum = 0;
    for (let idx = 1; idx <= _templateMod.pdfViewer.pagesCount; ++idx) {
      let pageRect = _templateMod.getPageBoundingClientRect(idx);
      let pageHeight = pageRect.height;
      currentHeightSum += pageHeight;
      if (currentHeightSum > y) {
        console.log(`${idx}, ${pageHeight}, ${currentHeightSum}, ${y}`);
        return idx;
      }
    }
    return 1;
  }

  /**
   * @function hideAllResizeHandles
   * @name module:Template/TemplateMod.TemplateMod#hideAllResizeHandles
   * @description 필드들의 리사이즈 핸들러들을 숨긴다.
   *
   * @Date : 2021. 5. 31
   */
  hideAllResizeHandles() {
    let items = _templateMod.mainCanvas.selectAll(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME + " > g"
    );
    items.forEach(function (element) {
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(element.freeTransform)) {
        element.freeTransform.hideResizeHandler();
      }
    });
  }

  /**
   * @function hideFieldAttribute
   * @name module:Template/TemplateMod.TemplateMod#hideFieldAttribute
   * @description 필드의 속성 팝업을 숨긴다.
   *
   * @Date : 2021. 5. 31
   */
  hideFieldAttribute() {
    const selectedNode = _templateMod.ownerNode.querySelector(
      " ." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_ATTR_CLASS
    );
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(selectedNode);
    if (selectedNode !== null) {
      selectedNode.style.display = "none";
    }

    const deleteBtnNode = _templateMod.ownerNode.querySelector(
      " ." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS
    );

    if (
      deleteBtnNode !== null &&
      deleteBtnNode.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.SHOW_CLASS)
    ) {
      deleteBtnNode.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.SHOW_CLASS);
    }
    if (
      deleteBtnNode !== null &&
      !deleteBtnNode.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.HIDE_CLASS)
    ) {
      deleteBtnNode.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.HIDE_CLASS);
    }
  }

  /**
   * @function hideTemplateLayer
   * @name module:Template/TemplateMod.TemplateMod#hideTemplateLayer
   * @description TemplateLayer를 숨긴다.
   *
   * @Date : 2021. 5. 31
   */
  hideTemplateLayer() {
    let templateLayer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME
    );
    templateLayer.removeEventListener(
      "mousemove",
      _templateMod.templateMouseMoveEvent,
      true
    );
    templateLayer.removeEventListener(
      "mouseup",
      _templateMod.templateMouseUpEvent,
      true
    );
    templateLayer.style.display = "none";
  }

  /**
   * @function importFieldData
   * @name module:Template/TemplateMod.TemplateMod#importFieldData
   * @description  field를 import한다.
   *
   * @param {Object} data  import할 json data
   * @Date : 2021. 5. 31
   */
  importFieldData(data) {
    data.formerList.forEach((owner) => {
      owner.pages.forEach((page) => {
        if (page.pageNo >= _templateMod.pdfViewer._pages.length) {
          return;
        }
        page.fields.forEach((field) => {
          field.m_ownerId = owner.userUUID;
          if (
            owner.isFormer !== null &&
            owner.isFormer !== undefined &&
            owner.isFormer === "Y"
          ) {
            field.m_ownerId = "";
          }
          _templateMod.replaceFieldData(field, true);
        });
      });
    });
    // _templateMod.fieldRepositioning();
    _templateMod.hideAllResizeHandles();
    _templateMod.hideFieldAttribute();
    _templateMod.hideTemplateLayer();
    _templateMod.buildFieldformerList();
  }

  /**
   * @function keycheck
   * @name module:Template/TemplateMod.TemplateMod#keycheck
   * @description  keycheck  단축키 이벤트.
   *
   * @param {Object} evt   evt객체
   * @Date : 2021. 5. 31
   */
  keycheck(evt) {
    var keyCode = evt.which ? evt.which : evt.keyCode;
    if (evt.ctrlKey) {
      switch (keyCode) {
        case 89:
          _templateMod.redoAction();
          return;
        case 90:
          _templateMod.undoAction();
          return;
        case 77:
        // let dat1 = _templateMod.exportFieldData();
        //  console.log((dat1));
        //console.log(JSON.stringify(dat1));

        // _templateMod.importFieldData("/testFields.json", true);
        // return;
        // console.log(_templateMod.isAllFieldHasOwner());

        // let ret1 = _templateMod.checkTemplateFieldData();
        // console.log(ret1);
      }
    }

    if (keyCode === 46) {
      _templateMod.removeSelectedField();
    }
  }

  pasteObject() {
    console.log(_templateMod.templateClipBoard);
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(_templateMod.templateClipBoard)) {
      return;
    }
    const fieldIdList = _templateMod.templateClipBoard.split(",");
    for (const fieldId of fieldIdList) {
      const field = _templateMod.fieldDictionary[fieldId];
      const fieldJsonData = JSON.stringify(field);
      const copyField1 = JSON.parse(fieldJsonData);
      let newId = _templateMod.generateFieldId(copyField1.m_type);
      copyField1.m_id = newId;
      copyField1.m_pdfX = copyField1.m_pdfX + 10;
      copyField1.m_pdfX2 = copyField1.m_pdfX2 + 10;
      copyField1.m_pdfY = copyField1.m_pdfY - 10;
      copyField1.m_pdfY2 = copyField1.m_pdfY2 - 10;
      copyField1.m_fieldId = newId.replace(
        copyField1.m_type,
        copyField1.m_kind + "-"
      );
      _templateMod.replaceFieldStringData(JSON.stringify(copyField1));
    }
    if (fieldIdList.length > 0) {
      _templateMod.hideAllResizeHandles();
      _templateMod.hideFieldAttribute();
      _templateMod.hideTemplateLayer();
      _templateMod.buildFieldformerList();
    }
  }

  /**
   * @function redoAction
   * @name module:Template/TemplateMod.TemplateMod#redoAction
   * @description   이전에 실행취소 했던 것을 다시 실행한다.
   *
   * @Date : 2021. 5. 31
   */
  redoAction() {
    var idx = ++_templateMod.unredoActionIdx;
    var data = _templateMod.unredoActionDict[idx];
    if (data === undefined) {
      _templateMod.unredoActionIdx--;
      return;
    }
    _templateMod.removeDragOverGroup();
    switch (data.action) {
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.CREATE_FIELD_ACTION:
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.FIELD_ATTR_CHANGE_ACTION: {
        _templateMod.replaceFieldStringData(data.new);
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.REMOVE_FIELD_ACTION: {
        _templateMod.removeField(data.new);
        _templateMod.hideFieldAttribute();
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_REMOVE_ACTION: {
        data.new.forEach((newData) => {
          _templateMod.removeField(newData);
        });
        _templateMod.hideFieldAttribute();
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_CHANGE_ACTION: {
        data.new.forEach((newData) => {
          _templateMod.replaceFieldStringData(newData);
        });
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_OWNER_CHANGE_ACTION: {
        data.new.forEach((newData) => {
          _templateMod.replaceFieldStringData(newData);
        });
        _templateMod.buildFieldformerList();
        return;
      }
    }
  }

  /**
   * @function refreshformerList
   * @name module:Template/TemplateMod.TemplateMod#refreshformerList
   * @description  필드의 서명자 정보가 수정될 때 사이드의 서명자 리스트를 갱신한다.
   *
   * @param  {Obejct} field 갱신할 필드 인스턴스
   * @Date : 2021. 5. 31
   */
  refreshformerList(field) {
    const keys = Object.keys(_templateMod.templateUserFieldInfo);
    keys.forEach(function (key) {
      let userInfo = _templateMod.templateUserFieldInfo[key];
      if (userInfo.contains(field.id)) {
        if (field.ownerId !== key) {
          userInfo.removeField(field.id);
        }
      } else {
        if (field.ownerId === key) {
          userInfo.pushField(field.id, field);
        }
      }
    });
  }

  /**
   * @function removeDragGroupField
   * @name module:Template/TemplateMod.TemplateMod#removeDragGroupField
   * @description  Drag해서 선택한 필드의 그룹을 지운다.
   *
   * @Date : 2021. 5. 31
   */
  removeDragGroupField() {
    var tempGOld = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
    );
    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    if (tempGOld !== null && tempGOld.children().length >= 1) {
      tempGOld.freeTransform.hideHandles();
      var chds = tempGOld.children();
      const tempGMatrix = tempGOld.transform().globalMatrix;
      var oldDataArr = [];
      var newDataArr = [];
      chds.forEach(function (element) {
        const childRect = element.select("rect");
        const field = _templateMod.fieldDictionary[childRect.attr("id")];
        field.isRemoved = true;

        let usrFieldData = _templateMod.templateUserFieldInfo[field.ownerId];
        if (usrFieldData !== null && usrFieldData !== undefined) {
          usrFieldData.removeField(field.id);
        }
        let layerDiv = _templateMod.ownerNode.querySelector(
          " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME
        );
        let asteriskDiv = _templateMod.ownerNode.querySelector(
          " #" + field.id + "_asterisk"
        );
        layerDiv.removeChild(asteriskDiv);

        const fieldJsonData = JSON.stringify(field);
        oldDataArr.push(fieldJsonData);
        newDataArr.push(fieldJsonData);
        _templateMod.hideFieldAttribute();
      });
      _templateMod.addUndoRedoAct(
        _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_REMOVE_ACTION,
        oldDataArr,
        newDataArr
      );
      tempGOld.remove();
      _templateMod.buildFieldformerList();
    }
  }

  /**
   * @function removeDragOverGroup
   * @name module:Template/TemplateMod.TemplateMod#removeDragOverGroup
   * @description   드래그해서 만들 필드 그립을 해제한다.
   *
   * @param  {Boolean} donotUndoRedo  undoRedo를 실행하지 않는다.
   * @Date : 2021. 5. 31
   */
  removeDragOverGroup(donotUndoRedo = true) {
    var tempGOld = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
    );
    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    if (tempGOld !== null && tempGOld.children().length >= 1) {
      tempGOld.freeTransform.hideHandles();
      var chds = tempGOld.children();
      const tempGMatrix = tempGOld.transform().globalMatrix;
      chds.forEach(function (element) {
        mainGroup.append(element);
        _templateMod.changeFieldPosition(element, tempGMatrix, donotUndoRedo);
        _templateMod.changeFreeTransform(
          element,
          element.width,
          element.height
        );
      });
      tempGOld.remove();
    }
  }

  /**
   * @function removeField
   * @name module:Template/TemplateMod.TemplateMod#removeField
   * @description  undo, redo에서 필드를 삭제할 때 사용.
   *
   * @param  {String} jsonData 필드의 JSON String 데이터
   * @Date : 2021. 5. 31
   */
  removeField(jsonData) {
    const replaceData = JSON.parse(jsonData);
    const field1 = _templateMod.getFieldFromJson(
      replaceData.m_type,
      replaceData
    );
    field1.isRemoved = true;
    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(field1.ownerId)) {
      _templateMod.templateUserFieldInfo[field1.ownerId].removeField(field1.id);
    }
    const mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    var selectedFieldGroup = mainGroup.select("#" + field1.id + "Group");
    if (selectedFieldGroup) {
      selectedFieldGroup.freeTransform.unplug();
      selectedFieldGroup.remove();

      let layerDiv = _templateMod.ownerNode.querySelector(
        " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME
      );
      let asteriskDiv = _templateMod.ownerNode.querySelector(
        " #" + field1.id + "_asterisk"
      );
      if (asteriskDiv !== null && asteriskDiv !== undefined) {
        layerDiv.removeChild(asteriskDiv);
      }
    }
  }

  /**
   * @function removeSelectedField
   * @name module:Template/TemplateMod.TemplateMod#removeSelectedField
   * @description  선택된 필드를 삭제한다.
   *
   * @Date : 2021. 5. 31
   */
  removeSelectedField() {
    const selectedNode = _templateMod.ownerNode.querySelector(
      " ." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_ATTR_CLASS
    );
    const attrPanelNode = selectedNode.querySelector(
      "." + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.EDITOR_ATTR_PANEL_CLASS
    );
    if (attrPanelNode === null) {
      return;
    }
    const idListAttr = attrPanelNode.getAttribute("Field-id-list");
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isStringEmpty(idListAttr)) {
      return;
    }
    const idArray = idListAttr.split(",");
    if (idArray.length > 1) {
      _templateMod.removeDragGroupField();
      return;
    }
    var selectedItem = _templateMod.mainCanvas.select(
      "#" + idArray[0] + "Group"
    );
    if (selectedItem === null) {
      return;
    }
    const childRect = selectedItem.select("rect");
    const field = _templateMod.fieldDictionary[childRect.attr("id")];
    field.isRemoved = true;
    let usrFieldData = _templateMod.templateUserFieldInfo[field.ownerId];
    if (usrFieldData !== null && usrFieldData !== undefined) {
      usrFieldData.removeField(field.id);
    }

    const fieldJsonData = JSON.stringify(field);
    _templateMod.addUndoRedoAct(
      _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.REMOVE_FIELD_ACTION,
      fieldJsonData,
      fieldJsonData
    );
    _templateMod.hideFieldAttribute();
    selectedItem.freeTransform.unplug();
    selectedItem.remove();

    let layerDiv = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME
    );
    let asteriskDiv = _templateMod.ownerNode.querySelector(
      " #" + field.id + "_asterisk"
    );
    if (asteriskDiv !== null && asteriskDiv !== undefined) {
      layerDiv.removeChild(asteriskDiv);
    }

    _templateMod.buildFieldformerList();
  }

  /**
   * @function removeTemplateRect
   * @name module:Template/TemplateMod.TemplateMod#removeTemplateRect
   * @description   PDF위에 올라가는 Template 레이어에 필드를 만들기위해 만든 임시 Div를 삭제한다.
   *
   * @Date : 2021. 5. 31
   */
  removeTemplateRect() {
    let templateLayer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME
    );
    let templateRect = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_RECT_NAME
    );
    if (templateRect === null || templateRect === undefined) {
      return;
    }
    templateLayer.removeChild(templateRect);
    templateLayer.removeEventListener(
      "mousemove",
      _templateMod.templateMouseMoveEvent,
      true
    );
    templateLayer.removeEventListener(
      "mouseup",
      _templateMod.templateMouseUpEvent,
      true
    );
    templateLayer.style.display = "none";
  }

  /**
   * @function replaceFieldData
   * @name module:Template/TemplateMod.TemplateMod#replaceFieldData
   * @description  해당하는 JSON String의 데이터로 필드를 교체한다.
   *
   * @param {String} jsonData 필드의 JSON String 데이터
   * @param {Boolean} isImport import일 때 호출되는지 여부
   * @Date : 2021. 5. 31
   */
  replaceFieldData(jsonData, isImport = false) {
    _templateMod.hideAllResizeHandles();
    const field1 = _templateMod.getFieldFromJson(jsonData.m_type, jsonData);
    field1.isRemoved = false;
    const mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    var selectedFieldGroup = mainGroup.select("#" + field1.id + "Group");
    if (selectedFieldGroup) {
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(selectedFieldGroup.freeTransform)) {
        selectedFieldGroup.freeTransform.unplug();
      }
      selectedFieldGroup.remove();
    }

    const newRect = _templateMod.calcFieldPostion(field1, isImport);
    let fieldGroup = field1.getSVGFieldObject(
      _templateMod.mainCanvas,
      mainGroup,
      1.0,
      _templateMod.ownerNode,
      _templateMod.removeDragOverGroup,
      _templateMod.changeFieldValueEvent,
      _templateMod.changeFreeTransform
    );
    mainGroup.append(fieldGroup);
    _templateMod.fieldDictionary[field1.id] = field1;

    _templateMod.changeFreeTransform(fieldGroup, field1.width, field1.height);
    _templateMod.refreshformerList(field1);

    _templateMod.showAsteriskDiv(
      field1.id,
      field1.required === "true",
      field1.x,
      field1.y,
      field1.height
    );

    _templateMod.showFieldAttribute(field1.id);
  }

  /**
   * @function replaceFieldStringData
   * @name module:Template/TemplateMod.TemplateMod#replaceFieldStringData
   * @description   해당하는 JSON 데이터로 필드를 교체한다.
   *
   * @param {String} jsonData 필드의 JSON String 데이터
   * @Date : 2021. 5. 31
   */
  replaceFieldStringData(jsonData) {
    _templateMod.hideAllResizeHandles();
    const replaceData = JSON.parse(jsonData);
    _templateMod.replaceFieldData(replaceData, true);
  }

  /**
   * @function resetTool
   * @name module:Template/TemplateMod.TemplateMod#resetTool
   * @description  선택된 툴을 리셋한다.
   *
   * @Date : 2021. 5. 31
   */
  resetTool() {
    _templateMod.selectAddFieldType = "";
    _templateMod.removeTemplateRect();
  }

  /**
   * @function selectUserList
   * @name module:Template/TemplateMod.TemplateMod#selectUserList
   * @description "User ID"에 맞는 서명자를 선택된 상태로 만든다. .
   *
   * @param {String} userKey User Id
   * @Date : 2021. 5. 31
   */
  selectUserList(userKey) {
    const ownerDom = _templateMod.ownerNode.querySelector(
      " #Editor-User-Component_Box"
    );
    ownerDom.childNodes.forEach((child) => {
      if (child.classList.contains("Current")) {
        child.classList.toggle("Current");
      }
      const childUserKey = child.getAttribute("data-user-key");
      if (userKey === childUserKey) {
        child.classList.toggle("Current");
      }
    });
  }

  /**
   * @function selectTool
   * @name module:Template/TemplateMod.TemplateMod#selectTool
   * @description 필드를 만들기 위한 툴을 설정한다. .
   *
   * @param {String} tool tool 이름
   * @Date : 2021. 5. 31
   */
  selectTool(tool) {
    if (
      _templateMod.selectAddFieldType !== "" ||
      _templateMod.selectAddFieldType !== undefined
    ) {
      _templateMod.removeTemplateRect();
    }
    switch (tool) {
      case 0: {
        if (_templateMod.selectAddFieldType === "SignField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "SignField";
        break;
      }
      case 1: {
        if (_templateMod.selectAddFieldType === "TextField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "TextField";
        break;
      }
      case 2: {
        if (_templateMod.selectAddFieldType === "MultiLineTextField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "MultiLineTextField";
        break;
      }
      case 3: {
        if (_templateMod.selectAddFieldType === "LabelField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "LabelField";
        break;
      }
      case 4: {
        if (_templateMod.selectAddFieldType === "CheckboxField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "CheckboxField";
        break;
      }
      case 5: {
        if (_templateMod.selectAddFieldType === "RadioField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "RadioField";
        break;
      }
      case 6: {
        if (_templateMod.selectAddFieldType === "ComboboxField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "ComboboxField";
        break;
      }
      case 7: {
        if (_templateMod.selectAddFieldType === "DateField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "DateField";
        break;
      }
      case 8: {
        if (_templateMod.selectAddFieldType === "NumberField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "NumberField";
        break;
      }
      case 9: {
        if (_templateMod.selectAddFieldType === "ImageField") {
          _templateMod.resetTool();
          return;
        }
        _templateMod.selectAddFieldType = "ImageField";
        break;
      }
    }

    _templateMod.createTemplateRect();
    _templateMod.hideFieldAttribute();
    _templateMod.hideAllResizeHandles();
  }

  /**
   * @function showAsteriskDiv
   * @name module:Template/TemplateMod.TemplateMod#showAsteriskDiv
   * @description 해당 필드 ID의 필수 여부를 보여줄지 여부를 설정한다.
   *
   * @param {String} fieldId  Field id
   * @param {Boolean} isShow     보여줄지 여부
   * @param {Number} fieldX     필드의 X좌표
   * @param {Number} fieldY     필드의 Y좌표
   * @param {Number} fieldHeight   필드의 높이
   * @Date : 2021. 5. 31
   */
  showAsteriskDiv(fieldId, isShow, fieldX, fieldY, fieldHeight) {
    let asteriskDiv = _templateMod.ownerNode.querySelector(
      " #" + fieldId + "_asterisk"
    );
    if (asteriskDiv === null) {
      const asteriskDiv = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAsteriskDiv(
        _templateMod.ownerNode,
        fieldId
      );
      asteriskDiv.id = fieldId + "_asterisk";
    }
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(
      _templateMod.ownerNode,
      fieldId,
      isShow,
      fieldX,
      fieldY,
      fieldHeight
    );
  }

  /**
   * @function showFieldAttribute
   * @name module:Template/TemplateMod.TemplateMod#showFieldAttribute
   * @description  해당 필드 ID의 속성창을 보여준다.
   *
   * @param {String} fieldId  Field id
   * @Date : 2021. 5. 31
   */
  showFieldAttribute(fieldId) {
    const field = _templateMod.fieldDictionary[fieldId];
    let attrNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(
      _templateMod.ownerNode,
      field.getBBox()
    );
    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    var fieldAncestors = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.fieldAncestors(field);
    fieldAncestors[0].constructor.showFieldsAttribute(
      _templateMod.ownerNode,
      [field],
      attrNode,
      mainGroup,
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(),
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(),
      _templateMod.changeFieldValueEvent,
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getSignTabShowOpt(),
    );

    let deleteBtnNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createFieldDeleteBtn(
      _templateMod.ownerNode,
      _templateMod.fieldDeleteBtnClicked
    );
    deleteBtnNode.style.left = field.x + field.width + 10 + "px";
    const fieldCenterY = field.y + field.height / 2 - 10;
    deleteBtnNode.style.top = fieldCenterY + "px";
    _templateMod.selectUserList(field.ownerId);
  }

  showCommonFieldListAttribute(
    type,
    ownerNode,
    fieldList,
    attrNode,
    mainGroup,
    userList,
    dvOptionList,
    changeEventFunc
  ) {
    switch (type) {
      case "TF": {
        return _Fields_TextField__WEBPACK_IMPORTED_MODULE_4__.TextField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "LF": {
        return _Fields_LabelField_js__WEBPACK_IMPORTED_MODULE_13__.LabelField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "SF": {
        return _Fields_SignField__WEBPACK_IMPORTED_MODULE_7__.SignField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc,
          _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getSignTabShowOpt(),
        );
      }
      case "NF": {
        return _Fields_NumberField__WEBPACK_IMPORTED_MODULE_5__.NumberField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "DF": {
        return _Fields_DateField__WEBPACK_IMPORTED_MODULE_6__.DateField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "IMGF": {
        return _Fields_ImageField_js__WEBPACK_IMPORTED_MODULE_9__.ImageField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "MLTF": {
        return _Fields_MultiLineTextField_js__WEBPACK_IMPORTED_MODULE_10__.MultiLineTextField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "CBF": {
        return _Fields_CheckboxField_js__WEBPACK_IMPORTED_MODULE_11__.CheckboxField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "RF": {
        return _Fields_RadioField_js__WEBPACK_IMPORTED_MODULE_12__.RadioField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      case "CMBF": {
        return _Fields_ComboboxField_js__WEBPACK_IMPORTED_MODULE_14__.ComboboxField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
      default: {
        return _Fields_BaseField__WEBPACK_IMPORTED_MODULE_3__.BaseField.showFieldsAttribute(
          ownerNode,
          fieldList,
          attrNode,
          mainGroup,
          userList,
          dvOptionList,
          changeEventFunc
        );
      }
    }
  }

  /**
   * @function showFieldListAttribute
   * @name module:Template/TemplateMod.TemplateMod#showFieldListAttribute
   * @description 해당 필드들의 속성창을 보여준다.
   *
   * @param {Array} fieldList  Field Object List
   * @Date : 2021. 5. 31
   */
  showFieldListAttribute(fieldList) {
    var dragOverBox = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
    );
    var dragOverBBox = dragOverBox.getBBox();
    let attrNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttrbutePopup(
      _templateMod.ownerNode,
      dragOverBBox
    );
    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    // console.log(Utils.findSameAncestor2(fieldList));
    const commonFieldType = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.findSameAncestor2(fieldList);
    _templateMod.showCommonFieldListAttribute(
      commonFieldType,
      _templateMod.ownerNode,
      fieldList,
      attrNode,
      mainGroup,
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getUserInfoOptsList(),
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.getDVFieldOptsList(),
      _templateMod.changeFieldValueEvent
    );

    let deleteBtnNode = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createFieldDeleteBtn(
      _templateMod.ownerNode,
      _templateMod.fieldDeleteBtnClicked
    );
    deleteBtnNode.style.left = dragOverBBox.x + dragOverBBox.width + 10 + "px";
    deleteBtnNode.style.top = dragOverBBox.y + 10 + "px";
  }

  /**
   * @function sortFieldsAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsAlign
   * @description 선택된 필드들의 위치를 정렬 시킨다..
   *
   * @param {String} type  정렬 이름. left, hCenter, right, top, vCenter, bottom, VRegularInterval, HRegularInterval
   * @Date : 2021. 5. 31
   */
  sortFieldsAlign(type) {
    var tempGBox = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
    );
    if (tempGBox === null) {
      return;
    }

    var selectedItems = _templateMod.mainCanvas.selectAll(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME + " > g"
    );
    switch (type) {
      case "left": {
        _templateMod.sortFieldsLeftAlign(selectedItems);
        break;
      }
      case "hCenter": {
        _templateMod.sortFieldsHCenterAlign(tempGBox, selectedItems);
        break;
      }
      case "right": {
        _templateMod.sortFieldsRightAlign(selectedItems);
        break;
      }
      case "top": {
        _templateMod.sortFieldsTopAlign(selectedItems);
        break;
      }
      case "vCenter": {
        _templateMod.sortFieldsVCenterAlign(tempGBox, selectedItems);
        break;
      }
      case "bottom": {
        _templateMod.sortFieldsBottomAlign(selectedItems);
        break;
      }
      case "VRegularInterval": {
        _templateMod.sortFieldsVRegularIntervalAlign(selectedItems);
        break;
      }
      case "HRegularInterval": {
        _templateMod.sortFieldsHRegularIntervalAlign(selectedItems);
        break;
      }
    }
    _templateMod.tmpGroupFtEvent("drag end");
    _templateMod.changeGroupBoxFreeTransform(tempGBox);
  }

  /**
   * @function sortFieldsBottomAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsBottomAlign
   * @description 선택된 필드들을 가장 낮은 Y좌표로 정렬시킨다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsBottomAlign(selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var minY = 0;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      if (bbox.y2 > minY) {
        minY = bbox.y2;
      }
    });
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      childRect.attr({ y: minY - bbox.height });
    });
  }

  /**
   * @function sortFieldsHCenterAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsHCenterAlign
   * @description  선택된 필드들의 Y좌표 중앙으로 정렬시킨다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsHCenterAlign(tempGBox, selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var groupBbox = tempGBox.getBBox();
    var cx = groupBbox.cx;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      childRect.attr({ x: cx - bbox.width / 2 });
    });
  }

  /**
   * @function sortFieldsHRegularIntervalAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsHRegularIntervalAlign
   * @description  선택된 필드들을 가로 간격이 일정하게 정렬한다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsHRegularIntervalAlign(selectedItems) {
    if (selectedItems.length < 3) {
      return;
    }
    var items = Array.from(selectedItems);
    items = items.sort(function (a, b) {
      var childRectA = a.select("rect").getBBox();
      var childRectB = b.select("rect").getBBox();
      return childRectA.x - childRectB.x;
    });

    var firstItem = items[0];
    var lastItem = items[items.length - 1];
    var firstItemBBox = firstItem.getBBox();
    var lastItemBBox = lastItem.getBBox();
    var totalInterval = Math.abs(lastItemBBox.x - firstItemBBox.x2);
    for (var idx = 1; idx < items.length - 1; ++idx) {
      var item = items[idx];
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      totalInterval = totalInterval - bbox.width;
    }
    var betweenItemCnt = items.length - 1;
    var interval = totalInterval / betweenItemCnt;
    var beforeX2 = firstItemBBox.x2;
    for (var idx2 = 1; idx2 < items.length - 1; ++idx2) {
      var item2 = items[idx2];
      var childRect2 = item2.select("rect");
      childRect2.attr({ x: beforeX2 + interval });
      var bbox2 = childRect2.getBBox();
      beforeX2 = bbox2.x2;
    }
  }

  /**
   * @function sortFieldsLeftAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsLeftAlign
   * @description 선택된 필드들을 가장 낮은 X좌표로 정렬시킨다.
   *
   * @param {Array} selectedItems Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsLeftAlign(selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var minX = Number.MAX_VALUE;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      if (bbox.x < minX) {
        minX = bbox.x;
      }
    });

    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      childRect.attr({ x: minX });
    });
  }

  /**
   * @function sortFieldsRightAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsRightAlign
   * @description  선택된 필드들을 가장 큰 X좌표로 정렬시킨다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsRightAlign(selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var minX = 0;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      if (bbox.x2 > minX) {
        minX = bbox.x2;
      }
    });

    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      childRect.attr({ x: minX - bbox.width });
    });
  }

  /**
   * @function sortFieldsTopAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsTopAlign
   * @description 선택된 필드들을 가장 높은 Y좌표로 정렬시킨다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsTopAlign(selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var minY = Number.MAX_VALUE;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      if (bbox.y < minY) {
        minY = bbox.y;
      }
    });

    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      childRect.attr({ y: minY });
    });
  }

  /**
   * @function sortFieldsVCenterAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsVCenterAlign
   * @description 선택된 필드들을 Y좌표의 가운데로 정렬시킨다.
   *
   * @param {Array} selectedItems  Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsVCenterAlign(tempGBox, selectedItems) {
    if (selectedItems.length < 2) {
      return;
    }
    var groupBbox = tempGBox.getBBox();
    var cy = groupBbox.cy;
    selectedItems.forEach((item) => {
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      childRect.attr({ y: cy - bbox.height / 2 });
    });
  }

  /**
   * @function sortFieldsVRegularIntervalAlign
   * @name module:Template/TemplateMod.TemplateMod#sortFieldsVRegularIntervalAlign
   * @description 선택된 필드들을 세로간격이 일정하게 정렬시킨다.
   *
   * @param {Array} selectedItems Field List
   * @Date : 2021. 5. 31
   */
  sortFieldsVRegularIntervalAlign(selectedItems) {
    if (selectedItems.length < 3) {
      return;
    }
    var items = Array.from(selectedItems);
    items = items.sort(function (a, b) {
      var childRectA = a.select("rect").getBBox();
      var childRectB = b.select("rect").getBBox();
      return childRectA.y - childRectB.y;
    });

    var firstItem = items[0];
    var lastItem = items[items.length - 1];
    var firstItemBBox = firstItem.getBBox();
    var lastItemBBox = lastItem.getBBox();
    var totalInterval = Math.abs(lastItemBBox.y - firstItemBBox.y2);
    for (var idx = 1; idx < items.length - 1; ++idx) {
      var item = items[idx];
      var childRect = item.select("rect");
      var bbox = childRect.getBBox();
      totalInterval = totalInterval - bbox.height;
    }
    var betweenItemCnt = items.length - 1;
    var interval = totalInterval / betweenItemCnt;
    var beforeY2 = firstItemBBox.y2;
    for (var idx2 = 1; idx2 < items.length - 1; ++idx2) {
      var item2 = items[idx2];
      var childRect2 = item2.select("rect");
      childRect2.attr({ y: beforeY2 + interval });
      var bbox2 = childRect2.getBBox();
      beforeY2 = bbox2.y2;
    }
  }

  /**
   * @function templateInit
   * @name module:Template/TemplateMod.TemplateMod#templateInit
   * @description 초기화 설정한다.
   *
   * @Date : 2021. 5. 31
   */
  templateInit() {
    var layerDiv = document.createElement("div");
    layerDiv.id = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME;
    layerDiv.style.position = "absolute";
    layerDiv.style.top = "0px";
    layerDiv.style.width = "100%";
    layerDiv.style.zIndex = "99";
    var pdfContainer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER_CONTAINER
    );
    pdfContainer.appendChild(layerDiv);

    _templateMod.mainCanvas = Snap("100%", "100%");
    let viewer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER
    );
    viewer.appendChild(_templateMod.mainCanvas.node);
    _templateMod.mainCanvas.attr({
      style: "position: absolute; top: 0; z-index: 99",
    });
    let mainGroup = _templateMod.mainCanvas.group();
    mainGroup.attr({ id: _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME });
    _templateMod.mainCanvas.drag(
      _templateMod.dragmoveFunc,
      _templateMod.dragstartFunc,
      _templateMod.dragendFunc
    );
    viewer.setAttribute("tabindex", 0);
    document.body.addEventListener("keyup", _templateMod.keycheck, true);

    let asteriskLayer = document.createElement("div");
    asteriskLayer.id = _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME;
    asteriskLayer.style.position = "absolute";
    asteriskLayer.style.top = "0";
    asteriskLayer.style.zIndex = "98";
    asteriskLayer.style.width = "100%";
    viewer.appendChild(asteriskLayer);

    _templateMod.buildFieldformerList();
  }

  /**
   * @function templateMouseMoveEvent
   * @name module:Template/TemplateMod.TemplateMod#templateMouseMoveEvent
   * @description PDF위에 올라가는 Template 레이어에 필드를 움직일 때 발생하는 MOVE Event를 처리한다.
   *
   * @param {Object} event   event Object
   * @Date : 2021. 5. 31
   */
  templateMouseMoveEvent(event) {
    let templateRect = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_RECT_NAME
    );
    let target1 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME
    );
    let target2 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_RECT_NAME
    );

    if (!(target1 === event.target || target2 === event.target)) {
      return false;
    }
    let offsetX = event.offsetX;
    let offsetY = event.offsetY;
    if (
      event.target === target2 &&
      !_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(_templateMod.templateRectMousePosition)
    ) {
      offsetX =
        _templateMod.templateRectMousePosition.x +
        (event.pageX - _templateMod.templateRectMousePosition.ox);
      offsetY =
        _templateMod.templateRectMousePosition.y +
        (event.pageY - _templateMod.templateRectMousePosition.oy);
    }
    event.stopPropagation();
    _templateMod.templateRectMousePosition = {
      x: offsetX,
      y: offsetY,
      ox: event.pageX,
      oy: event.pageY,
    };

    (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: templateRect,
      translateX: offsetX,
      translateY: offsetY,
      direction: "normal",
      loop: false,
      delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(300, { easing: "easeOutElastic(1, .6)" }),
    });
  }

  /**
   * @function templateMouseUpEvent
   * @name module:Template/TemplateMod.TemplateMod#templateMouseUpEvent
   * @description PDF위에 올라가는 Template 레이어에 필드를 움직일 때 발생하는 mount up Event를 처리한다.
   *
   * @param {Object} event  event Object
   * @Date : 2021. 5. 31
   */
  templateMouseUpEvent(event) {
    _templateMod.removeTemplateRect();
    _templateMod.clearSelectedTool();

    var mainGroup = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.MAIN_GROUP_NAME
    );
    var pageX = event.pageX;
    var pageRect = _templateMod.getPageBoundingClientRect();
    if (pageX < pageRect.x) {
      pageX = pageRect.x;
    } else if (pageX > pageRect.x + pageRect.width) {
      pageX =
        pageRect.x +
        pageRect.width -
        _templateMod.getCreateFieldDefaultWidth(
          _templateMod.selectAddFieldType
        );
    }
    var fieldGroup = _templateMod.createField(
      _templateMod.selectAddFieldType,
      pageX,
      event.pageY
    );
    mainGroup.append(fieldGroup);
  }

  /**
   * @function templateResize
   * @name module:Template/TemplateMod.TemplateMod#templateResize
   * @description template에서 사용되는 노드들의 사이즈를 재조정한다.
   *
   * @param {Object} event  event Object
   * @param {Number} height   리사이즈된 높이.
   * @Date : 2021. 5. 31
   */
  templateResize(event, height) {
    var templateLayer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_NAME
    );
    templateLayer.style.height = height + "px";
    _templateMod.mainCanvas.attr({ height: height });
    _templateMod.pageBoundingBox.height = height;
    _templateMod.fieldRepositioning(event, true);

    let asteriskLayer = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME
    );
    asteriskLayer.style.height = height + "px";

    var tempGBox = _templateMod.mainCanvas.select(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
    );
    if (tempGBox === null) {
      return;
    }
    var bbox = tempGBox.getBBox();
    _templateMod.removeDragOverGroup();
    _templateMod.createDragOverGroup(bbox);
  }

  /**
   * @function tmpGroupFtEvent
   * @name module:Template/TemplateMod.TemplateMod#tmpGroupFtEvent
   * @description 드래그해서 선택된 필드 그룹 FreeTransform의 이벤트를 처리한다.
   *
   * @param {String} eventName  FreeTransform에서 발생하는 이벤트 이름.
   * @Date : 2021. 5. 31
   */
  tmpGroupFtEvent(eventName) {
    if (eventName === "drag start" || eventName === "apply") {
      //hide attr
      if (_templateMod.isFieldDragStart === true) {
        return;
      }
      _templateMod.isFieldDragStart = true;
      _templateMod.hideFieldAttribute();

      var groups = _templateMod.mainCanvas.selectAll(
        "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME + " > g"
      );
      var oldDataArr = [];
      var newDataArr = [];
      var tempGOld = _templateMod.mainCanvas.select(
        "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
      );
      groups.forEach((element) => {
        let childRect = element.select("rect");
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(
          _templateMod.ownerNode,
          childRect.attr("id"),
          false
        );
      });
    }
    if (eventName === "drag end") {
      _templateMod.isFieldDragStart = false;
      var groups = _templateMod.mainCanvas.selectAll(
        "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME + " > g"
      );
      var oldDataArr = [];
      var newDataArr = [];
      var tempGOld = _templateMod.mainCanvas.select(
        "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.DRAG_BOX_NAME
      );
      var fieldList = [];
      groups.forEach((element) => {
        let childRect = element.select("rect");
        let fieldId = childRect.attr("id");
        var oldData = _templateMod.getFieldJsonData(fieldId);
        oldDataArr.push(oldData);
        const tempGMatrix = tempGOld.transform().globalMatrix;
        _templateMod.changeFieldPosition(element, tempGMatrix, true);
        var newData = _templateMod.getFieldJsonData(fieldId);
        newDataArr.push(newData);
        fieldList.push(_templateMod.fieldDictionary[fieldId]);
      });
      tempGOld.transform(Snap.matrix().toTransformString());
      _templateMod.showFieldListAttribute(fieldList);
      _templateMod.addUndoRedoAct(
        _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_CHANGE_ACTION,
        oldDataArr,
        newDataArr
      );
      _templateMod.changeGroupBoxFreeTransform(tempGOld);
    }
  }

  /**
   * @function undoAction
   * @name module:Template/TemplateMod.TemplateMod#undoAction
   * @description  Undo를 처리한다.
   *
   * @Date : 2021. 5. 31
   */
  undoAction() {
    var idx = _templateMod.unredoActionIdx--;
    if (idx < 0) {
      _templateMod.unredoActionIdx = -1;
      return;
    }
    _templateMod.removeDragOverGroup();
    var data = _templateMod.unredoActionDict[idx];
    switch (data.action) {
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.CREATE_FIELD_ACTION: {
        _templateMod.removeField(data.old);
        _templateMod.hideFieldAttribute();
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.REMOVE_FIELD_ACTION:
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.FIELD_ATTR_CHANGE_ACTION: {
        _templateMod.replaceFieldStringData(data.old);
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_REMOVE_ACTION:
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_CHANGE_ACTION: {
        data.old.forEach((oldData) => {
          _templateMod.replaceFieldStringData(oldData);
        });
        _templateMod.buildFieldformerList();
        return;
      }
      case _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.GROUP_ATTR_OWNER_CHANGE_ACTION: {
        data.old.forEach((oldData) => {
          _templateMod.replaceFieldStringData(oldData);
        });
        _templateMod.buildFieldformerList();
        return;
      }
    }
  }

  /**
   * @function updateFieldPoint
   * @name module:Template/TemplateMod.TemplateMod#updateFieldPoint
   * @description  필드의 PDF좌표를 업데이트 한다.
   *
   * @param {Object} fieldGroup  SVG의 group 오브젝트
   *
   * @return {Boolean} 변경이 되지 않으면 false 변경이되면 true
   * @Date : 2021. 5. 31
   */
  updateFieldPoint(fieldGroup) {
    let childRect = fieldGroup.select("rect");
    var field = _templateMod.fieldDictionary[childRect.attr("id")];
    let ost = _templateMod.computePageOffset(field.pageNo);
    const viewer1 = _templateMod.ownerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_2__.CONSTANTS.TEMPLATE_PDF_VIEWER
    );
    const viewerBoundingRect = viewer1.getBoundingClientRect();
    var diffMatrix = _templateMod.mainCanvas.transform().diffMatrix;
    var childRectBBox = childRect.getBBox();
    field.x = childRectBBox.x;
    field.y = childRectBBox.y;
    field.width = childRectBBox.width;
    field.height = childRectBBox.height;
    field.pageNo = _templateMod.getPdfPageFromSvgPos(field.x, field.y);

    let pageBorderWidth = _templateMod.getPageBorderWidth(field.pageNo);

    let x =
      diffMatrix.x(childRectBBox.x, childRectBBox.y) +
      viewerBoundingRect.left -
      ost.left -
      pageBorderWidth.left;
    let y =
      diffMatrix.y(childRectBBox.x, childRectBBox.y) +
      viewerBoundingRect.top -
      ost.top -
      pageBorderWidth.top;
    const viewport = _templateMod.pdfViewer._pages[field.pageNo - 1].viewport;
    let pdfPoision = viewport.convertToPdfPoint(x, y);
    let pdfPoision2 = viewport.convertToPdfPoint(
      x + childRectBBox.width,
      y + childRectBBox.height
    );
    let isShow = false;
    if (field.required === "true") {
      isShow = true;
    }

    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.showAsteriskDiv(
      _templateMod.ownerNode,
      childRect.attr("id"),
      isShow,
      childRectBBox.x,
      childRectBBox.y,
      childRectBBox.height
    );
    let oldPdfX = Number(field.pdfX);
    let oldPdfX2 = Number(field.pdfX2);
    let oldPdfY = Number(field.pdfY);
    let oldPdfY2 = Number(field.pdfY2);
    if (
      pdfPoision[0].toFixed(2) === oldPdfX.toFixed(2) &&
      pdfPoision[1].toFixed(2) === oldPdfY.toFixed(2) &&
      pdfPoision2[0].toFixed(2) === oldPdfX2.toFixed(2) &&
      pdfPoision2[1].toFixed(2) === oldPdfY2.toFixed(2)
    ) {
      return false;
    }
    field.pdfX = pdfPoision[0];
    field.pdfY = pdfPoision[1];
    field.pdfX2 = pdfPoision2[0];
    field.pdfY2 = pdfPoision2[1];

    return true;
  }

  appendFontFamily(fontFamilyArr) {
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.appendFontFamily(fontFamilyArr);
  }

  appendSignTabShowOpt(signTabShowDefOptVal) {
    if (signTabShowDefOptVal) {
      if (typeof signTabShowDefOptVal.useDrawSign !== "undefined") {
        _templateMod.useDrawSign = signTabShowDefOptVal.useDrawSign;
      }
      if (typeof signTabShowDefOptVal.useImageSign !== "undefined") {
        _templateMod.useImageSign = signTabShowDefOptVal.useImageSign;
      }
      if (typeof signTabShowDefOptVal.useRegSign !== "undefined") {
        _templateMod.useRegSign = signTabShowDefOptVal.useRegSign;
      }
    }
  }
}


/***/ }),

/***/ "./js/pdf_form/src/utils/color-picker.js":
/*!***********************************************!*\
  !*** ./js/pdf_form/src/utils/color-picker.js ***!
  \***********************************************/
/***/ (function(module) {

/*!
 *
 * The MIT License (MIT)
 *
 * Copyright © 2021 Taufik Nurrohman
 *
 * <https://github.com/taufik-nurrohman/color-picker>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function (global, factory) {
     true ? module.exports = factory() : 0;
})(this, function () {
    'use strict';
    var isArray = function isArray(x) {
        return Array.isArray(x);
    };
    var isDefined = function isDefined(x) {
        return 'undefined' !== typeof x;
    };
    var isFunction = function isFunction(x) {
        return 'function' === typeof x;
    };
    var isInstance = function isInstance(x, of) {
        return x && isSet(of) && x instanceof of;
    };
    var isNull = function isNull(x) {
        return null === x;
    };
    var isNumber = function isNumber(x) {
        return 'number' === typeof x;
    };
    var isNumeric = function isNumeric(x) {
        return /^-?(?:\d*.)?\d+$/.test(x + "");
    };
    var isObject = function isObject(x, isPlain) {
        if (isPlain === void 0) {
            isPlain = true;
        }
        if ('object' !== typeof x) {
            return false;
        }
        return isPlain ? isInstance(x, Object) : true;
    };
    var isSet = function isSet(x) {
        return isDefined(x) && !isNull(x);
    };
    var isString = function isString(x) {
        return 'string' === typeof x;
    };
    var fromJSON = function fromJSON(x) {
        var value = null;
        try {
            value = JSON.parse(x);
        } catch (e) { }
        return value;
    };
    var fromStates = function fromStates() {
        for (var _len = arguments.length, lot = new Array(_len), _key = 0; _key < _len; _key++) {
            lot[_key] = arguments[_key];
        }
        return Object.assign.apply(Object, [{}].concat(lot));
    };
    var fromValue = function fromValue(x) {
        if (isArray(x)) {
            return x.map(function (v) {
                return fromValue(x);
            });
        }
        if (isObject(x)) {
            for (var k in x) {
                x[k] = fromValue(x[k]);
            }
            return x;
        }
        if (false === x) {
            return 'false';
        }
        if (null === x) {
            return 'null';
        }
        if (true === x) {
            return 'true';
        }
        return "" + x;
    };
    var toCaseCamel = function toCaseCamel(x) {
        return x.replace(/[-_.](\w)/g, function (m0, m1) {
            return toCaseUpper(m1);
        });
    };
    var toCaseUpper = function toCaseUpper(x) {
        return x.toUpperCase();
    };
    var toCount = function toCount(x) {
        return x.length;
    };
    var toEdge = function toEdge(x, edges) {
        if (isSet(edges[0]) && x < edges[0]) {
            return edges[0];
        }
        if (isSet(edges[1]) && x > edges[1]) {
            return edges[1];
        }
        return x;
    };
    var toJSON = function toJSON(x) {
        return JSON.stringify(x);
    };
    var toNumber = function toNumber(x, base) {
        if (base === void 0) {
            base = 10;
        }
        return base ? parseInt(x, base) : parseFloat(x);
    };
    var toObjectCount = function toObjectCount(x) {
        return toCount(toObjectKeys(x));
    };
    var toObjectKeys = function toObjectKeys(x) {
        return Object.keys(x);
    };
    var toRound = function toRound(x) {
        return isNumber(x) ? Math.round(x) : null;
    };
    var toString = function toString(x, base) {
        if (base === void 0) {
            base = 10;
        }
        return isNumber(x) ? x.toString(base) : "" + x;
    };
    var toValue = function toValue(x) {
        if (isArray(x)) {
            return x.map(function (v) {
                return toValue(v);
            });
        }
        if (isNumeric(x)) {
            return toNumber(x);
        }
        if (isObject(x)) {
            for (var k in x) {
                x[k] = toValue(x[k]);
            }
            return x;
        }
        if ('false' === x) {
            return false;
        }
        if ('null' === x) {
            return null;
        }
        if ('true' === x) {
            return true;
        }
        return x;
    };
    var D = document;
    var W = window;
    var B = D.body;
    var R = D.documentElement;
    var getAttribute = function getAttribute(node, attribute, parseValue) {
        if (parseValue === void 0) {
            parseValue = true;
        }
        if (!hasAttribute(node, attribute)) {
            return null;
        }
        var value = node.getAttribute(attribute);
        return parseValue ? toValue(value) : value;
    };
    var getDatum = function getDatum(node, datum, parseValue) {
        if (parseValue === void 0) {
            parseValue = true;
        }
        var value = getAttribute(node, 'data-' + datum, parseValue),
            v = (value + "").trim();
        if (parseValue && v && ('[' === v[0] && ']' === v.slice(-1) || '{' === v[0] && '}' === v.slice(-1)) && null !== (v = fromJSON(value))) {
            return v;
        }
        return value;
    };
    var getParent = function getParent(node) {
        return node.parentNode || null;
    };
    var getState = function getState(node, state) {
        return hasState(node, state) && node[state] || null;
    };
    var getText = function getText(node, trim) {
        if (trim === void 0) {
            trim = true;
        }
        var state = 'textContent';
        if (!hasState(node, state)) {
            return false;
        }
        var content = node[state];
        content = trim ? content.trim() : content;
        return "" !== content ? content : null;
    };
    var hasAttribute = function hasAttribute(node, attribute) {
        return node.hasAttribute(attribute);
    };
    var hasState = function hasState(node, state) {
        return state in node;
    };
    var isWindow = function isWindow(node) {
        return node === W;
    };
    var letAttribute = function letAttribute(node, attribute) {
        return node.removeAttribute(attribute), node;
    };
    var letElement = function letElement(node) {
        var parent = getParent(node);
        return node.remove(), parent;
    };
    var setAttribute = function setAttribute(node, attribute, value) {
        if (true === value) {
            value = attribute;
        }
        return node.setAttribute(attribute, fromValue(value)), node;
    };
    var setAttributes = function setAttributes(node, attributes) {
        var value;
        for (var attribute in attributes) {
            value = attributes[attribute];
            if (value || "" === value || 0 === value) {
                setAttribute(node, attribute, value);
            } else {
                letAttribute(node, attribute);
            }
        }
        return node;
    };
    var setChildLast = function setChildLast(parent, node) {
        return parent.appendChild(node), node;
    };
    var setDatum = function setDatum(node, datum, value) {
        if (isArray(value) || isObject(value)) {
            value = toJSON(value);
        }
        return setAttribute(node, 'data-' + datum, value);
    };
    var setElement = function setElement(node, content, attributes) {
        node = isString(node) ? D.createElement(node) : node;
        if (isObject(content)) {
            attributes = content;
            content = false;
        }
        if (isString(content)) {
            setHTML(node, content);
        }
        if (isObject(attributes)) {
            setAttributes(node, attributes);
        }
        return node;
    };
    var setHTML = function setHTML(node, content, trim) {
        if (trim === void 0) {
            trim = true;
        }
        if (null === content) {
            return node;
        }
        var state = 'innerHTML';
        return hasState(node, state) && (node[state] = trim ? content.trim() : content), node;
    };
    var setState = function setState(node, key, value) {
        return node[key] = value, node;
    };
    var setStyle = function setStyle(node, style, value) {
        if (isNumber(value)) {
            value += 'px';
        }
        return node.style[toCaseCamel(style)] = fromValue(value), node;
    };
    var setText = function setText(node, content, trim) {
        if (trim === void 0) {
            trim = true;
        }
        if (null === content) {
            return node;
        }
        var state = 'textContent';
        return hasState(node, state) && (node[state] = trim ? content.trim() : content), node;
    };
    var offEvent = function offEvent(name, node, then) {
        node.removeEventListener(name, then);
    };
    var offEventDefault = function offEventDefault(e) {
        return e;// && e.preventDefault();
    };
    var offEvents = function offEvents(names, node, then) {
        names.forEach(function (name) {
            return offEvent(name, node, then);
        });
    };
    var onEvent = function onEvent(name, node, then, options) {
        if (options === void 0 || options === false) {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("testPassive", null, opts);
                window.removeEventListener("testPassive", null, opts);
            } catch (e) { }
            options = supportsPassive ? { passive: true } : false;
        }
        
        node.addEventListener(name, then, options);
    };
    var onEvents = function onEvents(names, node, then, options) {
        if (options === void 0) {
            options = false;
        }
        names.forEach(function (name) {
            return onEvent(name, node, then, options);
        });
    };

    function hook($) {
        var hooks = {};

        function fire(name, data) {
            if (!isSet(hooks[name])) {
                return $;
            }
            hooks[name].forEach(function (then) {
                return then.apply($, data);
            });
            return $;
        }

        function off(name, then) {
            if (!isSet(name)) {
                return hooks = {}, $;
            }
            if (isSet(hooks[name])) {
                if (isSet(then)) {
                    for (var i = 0, _j = hooks[name].length; i < _j; ++i) {
                        if (then === hooks[name][i]) {
                            hooks[name].splice(i, 1);
                            break;
                        }
                    } // Clean-up empty hook(s)
                    if (0 === j) {
                        delete hooks[name];
                    }
                } else {
                    delete hooks[name];
                }
            }
            return $;
        }

        function on(name, then) {
            if (!isSet(hooks[name])) {
                hooks[name] = [];
            }
            if (isSet(then)) {
                hooks[name].push(then);
            }
            return $;
        }
        $.hooks = hooks;
        $.fire = fire;
        $.off = off;
        $.on = on;
        return $;
    }
    var getAxis = function getAxis(event, node) {
        var touches = event.touches,
            x = touches ? touches[0].clientX : event.clientX,
            y = touches ? touches[0].clientY : event.clientY;
        if (node) {
            var rect = getRect(node);
            return [x - rect[0], y - rect[1], rect[0], rect[1]];
        }
        return [x, y];
    };
    var getRect = function getRect(node) {
        var h, rect, w, x, y, X, Y;
        if (isWindow(node)) {
            x = node.pageXOffset || R.scrollLeft || B.scrollLeft;
            y = node.pageYOffset || R.scrollTop || B.scrollTop;
            w = node.innerWidth;
            h = node.innerHeight;
        } else {
            rect = node.getBoundingClientRect();
            x = rect.left;
            y = rect.top;
            w = rect.width;
            h = rect.height;
            X = rect.right;
            Y = rect.bottom;
        }
        return [x, y, w, h, X, Y];
    };
    let name = 'CP',
        delay = W.setTimeout,
        hex = 'HEX';

    function getClosest(a, b) {
        if (a === b) {
            return a;
        }
        while ((a = a.parentElement) && a !== b);
        return a;
    } // Convert cursor position to RGBA
    function P2RGB(a) {
        let h = +a[0],
            s = +a[1],
            v = +a[2],
            r,
            g,
            b,
            i,
            f,
            p,
            q,
            t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        i = i || 0;
        q = q || 0;
        t = t || 0;
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return [toRound(r * 255), toRound(g * 255), toRound(b * 255), isSet(a[3]) ? +a[3] : 1];
    } // Convert RGBA to HSVA
    function RGB2HSV(a) {
        let r = +a[0] / 255,
            g = +a[1] / 255,
            b = +a[2] / 255,
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            h,
            s,
            v = max,
            d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0; // Achromatic
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h, s, v, isSet(a[3]) ? +a[3] : 1];
    }
    const EVENTS_DOWN = ['touchstart', 'mousedown'];
    const EVENTS_MOVE = ['touchmove', 'mousemove'];
    const EVENTS_RESIZE = ['orientationchange', 'resize'];
    const EVENTS_UP = ['touchend', 'mouseup'];

    function CP(source, state = {}) {
        if (!D) {
            D = document;
        }
        if (!W) {
            W = window;
        }
        if (!B) {
            B = D.body;
        }
        if (!R) {
            R = D.documentElement;
        }
        if (!source) return;
        const $ = this; // Return new instance if `CP` was called without the `new` operator
        if (!isInstance($, CP)) {
            return new CP(source, state);
        } // Already instantiated, skip!
        if (source[name]) {
            return;
        }
        let {
            fire,
            hooks
        } = hook($);
        $.state = state = fromStates(CP.state, isString(state) ? {
            color: state
        } : state || {});
        $.source = source;
        $.visible = false; // Store current instance to `CP.instances`
        CP.instances[source.id || source.name || toObjectCount(CP.instances)] = $; // Mark current DOM as active color picker to prevent duplicate instance
        source[name] = 1;

        function theValue(from) {
            let to = CP[isFunction(CP[state.color]) ? state.color : hex],
                theColor; // Get value from `data-color` attribute
            if (theColor = getDatum(source, 'color')) {
                if (isSet(from)) {
                    return setDatum(source, 'color', to(from));
                }
                return to(theColor);
            } // Get value from `value` attribute
            if (theColor = getState(source, 'value')) {
                if (isSet(from)) {
                    return setState(source, 'value', to(from));
                }
                return to(theColor);
            } // Get value from content
            if (theColor = getText(source)) {
                if (isSet(from)) {
                    return setText(source, to(from));
                }
                return to(theColor);
            }
            if (isSet(from)) {
                return; // Do nothing
            }
            return [0, 0, 0, 1]; // Default to black
        }
        let className = state['class'],
            doEnter,
            doExit,
            doFit,
            doResize,
            theColor = theValue(),
            theData = RGB2HSV(theColor),
            self = setElement('div', {
                'class': className
            }),
            C = setElement('div'),
            SV = setElement('div', {
                'class': className + ':sv'
            }),
            H = setElement('div', {
                'class': className + ':h'
            }),
            A = setElement('div', {
                'class': className + ':a'
            }),
            SVColor = setElement('div'),
            SVSaturation = setElement('div'),
            SVValue = setElement('div'),
            SVCursor = setElement('i'),
            HColor = setElement('div'),
            HCursor = setElement('i'),
            AColor = setElement('div'),
            APattern = setElement('div'),
            ACursor = setElement('i'),
            SVStarting = 0,
            HStarting = 0,
            AStarting = 0,
            SVDragging = 0,
            HDragging = 0,
            ADragging = 0;
        setChildLast(self, C);
        setChildLast(C, SV);
        setChildLast(C, H);
        setChildLast(C, A);
        setChildLast(SV, SVColor);
        setChildLast(SV, SVSaturation);
        setChildLast(SV, SVValue);
        setChildLast(SV, SVCursor);
        setChildLast(H, HColor);
        setChildLast(H, HCursor);
        setChildLast(A, AColor);
        setChildLast(A, APattern);
        setChildLast(A, ACursor);

        function doApply(isFirst, toParent) {
            // Refresh data
            theData = RGB2HSV(theColor = theValue());
            if (!isFirst) {
                setChildLast(toParent || state.parent || B, self);
                $.visible = true;
            }
            doEnter = toParent => {
                return doApply(0, toParent), fire('enter', theColor), $;
            };
            doExit = () => {
                if (getParent(self)) {
                    letElement(self);
                    $.current = null;
                    $.visible = false;
                }
                offEvents(EVENTS_DOWN, SV, doDownSV);
                offEvents(EVENTS_DOWN, H, doDownH);
                offEvents(EVENTS_DOWN, A, doDownA);
                offEvents(EVENTS_MOVE, D, doMove);
                offEvents(EVENTS_UP, D, doStop);
                offEvents(EVENTS_RESIZE, W, doResize);
                return fire('exit', theColor);
            };
            doFit = to => {
                let rootRect = getRect(R),
                    sourceRect = getRect(source),
                    winRect = getRect(W),
                    scrollBarHeight = winRect[3] - R.clientHeight,
                    // Horizontal scroll bar
                    scrollBarWidth = winRect[2] - rootRect[2],
                    // Vertical scroll bar
                    selfRect = getRect(self),
                    selfHeight = selfRect[3],
                    selfWidth = selfRect[2],
                    selfLeft = sourceRect[0] + winRect[0],
                    selfTop = sourceRect[1] + winRect[1] + sourceRect[3]; // Drop!
                if (isObject(to)) {
                    isSet(to[0]) && (selfLeft = to[0]);
                    isSet(to[1]) && (selfTop = to[1]);
                } else {
                    let minX = winRect[0],
                        minY = winRect[1],
                        maxX = winRect[0] + winRect[2] - selfWidth - scrollBarWidth,
                        maxY = winRect[1] + winRect[3] - selfHeight - scrollBarHeight;
                    selfLeft = toEdge(selfLeft, [minX, maxX]) >> 0;
                    selfTop = toEdge(selfTop, [minY, maxY]) >> 0;
                }
                setStyle(self, 'left', selfLeft);
                setStyle(self, 'top', selfTop);
                return fire('fit', theColor);
            };
            doResize = () => doFit();

            function doDownA(e) {
                $.current = A;
                AStarting = ADragging = 1;
                doMove(e);
                offEventDefault(e);
            }

            function doDownH(e) {
                $.current = H;
                HStarting = HDragging = 1;
                doMove(e);
                offEventDefault(e);
            }

            function doDownSV(e) {
                $.current = SV;
                SVStarting = SVDragging = 1;
                doMove(e);
                offEventDefault(e);
            }

            function doMove(e) {
                SVDragging && doSetSVCursor(e);
                HDragging && doSetHCursor(e);
                ADragging && doSetACursor(e);
                theColor = P2RGB(theData);
                if (SVDragging || HDragging || ADragging) {
                    fire(SVStarting || HStarting || AStarting ? 'start' : 'drag', theColor);
                    fire('change', theColor);
                }
                SVStarting = HStarting = AStarting = 0;
            }

            function doSetColor() {
                doSetCursor(theData);
                let a = P2RGB(theData),
                    b = P2RGB([theData[0], 1, 1]);
                setStyle(SVColor, 'background-color', 'rgb(' + b[0] + ',' + b[1] + ',' + b[2] + ')');
                setStyle(AColor, 'background-image', 'linear-gradient(rgb(' + a[0] + ',' + a[1] + ',' + a[2] + '),transparent)');
            }

            function doSetCursor(x) {
                isSet(x[1]) && setStyle(SVCursor, 'right', SVWidth - SVWidthCursor / 2 - SVWidth * +x[1]);
                isSet(x[2]) && setStyle(SVCursor, 'top', SVHeight - SVHeightCursor / 2 - SVHeight * +x[2]);
                isSet(x[0]) && setStyle(HCursor, 'top', HHeight - HHeightCursor / 2 - HHeight * +x[0]);
                isSet(x[3]) && setStyle(ACursor, 'top', AHeight - AHeightCursor / 2 - AHeight * +x[3]);
            }

            function doSetACursor(e) {
                theData[3] = (AHeight - toEdge(getAxis(e, A)[1], [0, AHeight])) / AHeight;
                doSetColor();
            }

            function doSetHCursor(e) {
                theData[0] = (HHeight - toEdge(getAxis(e, H)[1], [0, HHeight])) / HHeight;
                doSetColor();
            }

            function doSetSVCursor(e) {
                let SVPoint = getAxis(e, SV),
                    x = toEdge(SVPoint[0], [0, SVWidth]),
                    y = toEdge(SVPoint[1], [0, SVHeight]);
                theData[1] = 1 - (SVWidth - x) / SVWidth;
                theData[2] = (SVHeight - y) / SVHeight;
                doSetColor();
            }

            function doStop(e) {
                theColor = P2RGB(theData);
                let t = e.target,
                    isSource = source === getClosest(t, source),
                    isSelf = self === getClosest(t, self);
                $.current = null;
                if (!isSource && !isSelf) {
                    if (hooks.blur) {
                        fire('blur', theColor);
                    } else {
                        // Click outside the source or picker element to exit
                        if (SVDragging || HDragging || ADragging);
                        else {
                            getParent(self) && doExit();
                        }
                    }
                } else {
                    if (isSelf) {
                        if (SVDragging || HDragging || ADragging) {
                            fire('stop', theColor);
                        }
                    }
                }
                SVDragging = HDragging = ADragging = 0;
            }
            let SVRect = getRect(SV),
                SVRectCursor = getRect(SVCursor),
                HRect = getRect(H),
                HRectCursor = getRect(HCursor),
                ARect = getRect(A),
                ARectCursor = getRect(ACursor),
                SVHeight = SVRect[3],
                SVHeightCursor = SVRectCursor[3],
                SVWidth = SVRect[2],
                SVWidthCursor = SVRectCursor[2],
                HHeight = HRect[3],
                HHeightCursor = HRectCursor[3],
                AHeight = ARect[3],
                AHeightCursor = ARectCursor[3];
            if (isFirst) {
                onEvents(EVENTS_DOWN, source, doClick);
                delay(() => {
                    fire('change', theColor);
                }, 1);
            } else {
                onEvents(EVENTS_DOWN, SV, doDownSV);
                onEvents(EVENTS_DOWN, H, doDownH);
                onEvents(EVENTS_DOWN, A, doDownA);
                onEvents(EVENTS_MOVE, D, doMove);
                onEvents(EVENTS_UP, D, doStop);
                onEvents(EVENTS_RESIZE, W, doResize);
                doFit();
            }
            doSetColor();
            $.color = (r, g, b, a) => CP[isFunction(CP[state.color]) ? state.color : hex]([r, g, b, a]);
            $.current = null;
            $.enter = doEnter;
            $.exit = doExit;
            $.fit = doFit;
            $.get = () => theValue();
            $.pop = () => {
                if (!source[name]) {
                    return $; // Already ejected
                }
                delete source[name];
                offEvents(EVENTS_DOWN, source, doClick);
                return doExit(), fire('pop', theColor);
            };
            $.set = (r, g, b, a) => {
                theData = RGB2HSV([r, g, b, a]);
                return doSetColor(), $;
            };
            $.self = self;
            $.value = (r, g, b, a) => ($.set(r, g, b, a), fire('change', [r, g, b, a]));
        }
        doApply(1);

        function doClick(e) {
            if (hooks.focus) {
                fire('focus', theColor);
            } else {
                let t = e.target,
                    isSource = source === getClosest(t, source);
                if (isSource) {
                    !getParent(self) && doEnter(state.parent);
                } else {
                    doExit();
                }
            }
        }
        return $;
    }
    CP[hex] = x => {
        if (isString(x)) {
            let count = (x = x.trim()).length;
            if ((4 === count || 7 === count) && '#' === x[0]) {
                if (/^#([a-f\d]{3}){1,2}$/i.test(x)) {
                    if (4 === count) {
                        return [toNumber(x[1] + x[1], 16), toNumber(x[2] + x[2], 16), toNumber(x[3] + x[3], 16), 1];
                    }
                    return [toNumber(x[1] + x[2], 16), toNumber(x[3] + x[4], 16), toNumber(x[5] + x[6], 16), 1];
                }
            } else if ((5 === count || 9 === count) && '#' === x[0]) {
                if (/^#([a-f\d]{3,4}){1,2}$/i.test(x)) {
                    if (5 === count) {
                        return [toNumber(x[1] + x[1], 16), toNumber(x[2] + x[2], 16), toNumber(x[3] + x[3], 16), toNumber(x[4] + x[4], 16) / 255];
                    }
                    return [toNumber(x[1] + x[2], 16), toNumber(x[3] + x[4], 16), toNumber(x[5] + x[6], 16), toNumber(x[7] + x[8], 16) / 255];
                }
            }
            return [0, 0, 0, 1]; // Default to black
        }
        return '#' + ('000000' + toString(+x[2] | +x[1] << 8 | +x[0] << 16, 16)).slice(-6) + (isSet(x[3]) && x[3] < 1 ? toString(toRound(x[3] * 255) + 0x10000, 16).substr(-2) : "");
    };
    CP.instances = {};
    CP.state = {
        'class': 'color-picker',
        'color': hex,
        'parent': null
    };
    CP.version = '2.2.0';
    return CP;
});

/***/ }),

/***/ "./js/pdf_form/src/utils/utils.js":
/*!****************************************!*\
  !*** ./js/pdf_form/src/utils/utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _Translator_translator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Translator/translator.js */ "./js/pdf_form/src/Translator/translator.js");
/**
 * @module Template/Utils
 */





/**
 * @description  Util 모음 Class
 *
 * @property {Array} fontFamilyComboBox {@link module:Template/Utils.Utils#fontFamilyComboBox}
 * @property {Array} dateFormatComboBox {@link module:Template/Utils.Utils#dateFormatComboBox}
 * @property {Array} fontSizeComboBox {@link module:Template/Utils.Utils#fontSizeComboBox}
 * @property {Array} signPenWidthComboBox {@link module:Template/Utils.Utils#signPenWidthComboBox}
 * @property {Array} userInfoOptionList {@link module:Template/Utils.Utils#userInfoOptionList}
 * @property {Number} userInfoOptionListCount {@link module:Template/Utils.Utils#userInfoOptionListCount}
 * @property {Array} dvFieldOptionList {@link module:Template/Utils.Utils#dvFieldOptionList}
 *
 * @property {Function} addObjectsToCanvas {@link module:Template/Utils.Utils#addObjectsToCanvas}
 * @property {Function} addSignSvgToCanvas {@link module:Template/Utils.Utils#addSignSvgToCanvas}
 * @property {Function} boundingRectToRect {@link module:Template/Utils.Utils#boundingRectToRect}
 * @property {Function} cloneFabricCanvas {@link module:Template/Utils.Utils#cloneFabricCanvas}
 * @property {Function} cloneObject {@link module:Template/Utils.Utils#cloneObject}
 * @property {Function} cloneObjectToObject {@link module:Template/Utils.Utils#cloneObjectToObject}
 * @property {Function} closeSelect2Tag {@link module:Template/Utils.Utils#closeSelect2Tag}
 * @property {Function} createAsteriskDiv {@link module:Template/Utils.Utils#createAsteriskDiv}
 * @property {Function} createAttrbutePopup {@link module:Template/Utils.Utils#createAttrbutePopup}
 * @property {Function} createAttributeCheckBoxNode {@link module:Template/Utils.Utils#createAttributeCheckBoxNode}
 * @property {Function} createAttributeColorInputNode {@link module:Template/Utils.Utils#createAttributeColorInputNode}
 * @property {Function} createAttributeDateInputNode {@link module:Template/Utils.Utils#createAttributeDateInputNode}
 * @property {Function} createAttributeInputNode {@link module:Template/Utils.Utils#createAttributeInputNode}
 * @property {Function} createAttributeInputNode {@link module:Template/Utils.Utils#createAttributeInputNode}
 * @property {Function} createAttributePanelNode {@link module:Template/Utils.Utils#createAttributePanelNode}
 * @property {Function} createAttributeSelectInnerNode {@link module:Template/Utils.Utils#createAttributeSelectInnerNode}
 * @property {Function} createAttributeSelectNode {@link module:Template/Utils.Utils#createAttributeSelectNode}
 * @property {Function} createAttributeToggleButtonNode {@link module:Template/Utils.Utils#createAttributeToggleButtonNode}
 * @property {Function} createDividerNode {@link module:Template/Utils.Utils#createDividerNode}
 * @property {Function} createFieldDeleteBtn {@link module:Template/Utils.Utils#createFieldDeleteBtn}
 * @property {Function} createTextAlignButtonNode {@link module:Template/Utils.Utils#createTextAlignButtonNode}
 * @property {Function} createTextAttrbuteNode {@link module:Template/Utils.Utils#createTextAttrbuteNode}
 * @property {Function} createTextBoldButtonNode {@link module:Template/Utils.Utils#createTextBoldButtonNode}
 * @property {Function} createTextColorButtonNode {@link module:Template/Utils.Utils#createTextColorButtonNode}
 * @property {Function} fieldAncestors {@link module:Template/Utils.Utils#fieldAncestors}
 * @property {Function} findSameAncestor {@link module:Template/Utils.Utils#findSameAncestor}
 * @property {Function} getFonSizeComboBox {@link module:Template/Utils.Utils#getFonSizeComboBox}
 * @property {Function} getUserInfoOptsList {@link module:Template/Utils.Utils#getUserInfoOptsList}
 * @property {Function} imageFileToBase64 {@link module:Template/Utils.Utils#imageFileToBase64}
 * @property {Function} isEmptyObject {@link module:Template/Utils.Utils#isEmptyObject}
 * @property {Function} isShowAsteriskDiv {@link module:Template/Utils.Utils#isShowAsteriskDiv}
 * @property {Function} isStringEmpty {@link module:Template/Utils.Utils#isStringEmpty}
 * @property {Function} mergeFieldsBBox {@link module:Template/Utils.mergeFieldsBBox#addObjectsToCanvas}
 * @property {Function} mergeObjectsRect {@link module:Template/Utils.Utils#mergeObjectsRect}
 * @property {Function} mergeRect {@link module:Template/Utils.Utils#mergeRect}
 * @property {Function} repositionFieldDeleteBtn {@link module:Template/Utils.Utils#repositionFieldDeleteBtn}
 * @property {Function} setDVFieldOptsList {@link module:Template/Utils.Utils#setDVFieldOptsList}
 * @property {Function} setUserInfoOptsList {@link module:Template/Utils.Utils#setUserInfoOptsList}
 * @property {Function} setUserInfoOptsListCount {@link module:Template/Utils.Utils#setUserInfoOptsListCount}
 * @property {Function} showAsteriskDiv {@link module:Template/Utils.Utils#showAsteriskDiv}
 * 
 * @FileName utils.js
 * @since 2021.05.31
 */
class Utils {

    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#fontFamilyComboBox
     * @description (Static) 폰트 종류
     */
    static fontFamilyComboBox = [
        {
            text: "맑은 고딕",
            value: "MalgunGothic"
        },
        {
            text: "바탕체",
            value: "Batang"
        }
    ];

    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#dateFormatComboBox
     * @description (Static) 날짜 포멧 리스트
     */
    static dateFormatComboBox = [
        {
            text: "YYYY-MM-DD",
            value: "Y-m-d"
        },
        {
            text: "YYYY/MM/DD",
            value: "Y/m/d"
        },
        {
            text: "YYYY.MM.DD",
            value: "Y.m.d"
        }
    ]

    static radioTypeList = [
        {
            text: "Type 1",
            value: _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.RADIO_TYPE_1
        },
        {
            text: "Type 2",
            value: _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.RADIO_TYPE_2
        }
    ]
    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#fontSizeComboBox
     * @description (Static) 폰트 사이즈 콤보박스 리스트
     */
    static fontSizeComboBox = [];

    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#signPenWidthComboBox
     * @description (Static) 서명펜 두께 콤보박스 리스트
     */
    static signPenWidthComboBox = [];

    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#userInfoOptionList
     * @description (Static) 서명자 리스트
     */
    static userInfoOptionList = [];

    /**
     * @static
     * @type {Number}
     * @name module:Template/Utils.Utils#userInfoOptionListCount
     * @description (Static) 서명자 리스트 갯수
     */
    static userInfoOptionListCount = 0;

    /**
     * @static
     * @type {Array}
     * @name module:Template/Utils.Utils#dvFieldOptionList
     * @description (Static) 기본값 옵션 리스트
     */
    static dvFieldOptionList = [];

    /**
     * @static
     * @type {Object}
     * @name module:Template/Utils.Utils#signTabShowOpt
     * @description (Static) 서명탭 보임/안보임 기본값 옵션
     */
    static signTabShowOpt = {};

    /**
     * @static
     * @type {String}
     * @name module:Template/Utils.Utils#locale
     * @description (Static) 현재 언어
     */
    static locale = "ko";

    /**
     * @static
     * @type {Object}
     * @name module:Template/Utils.Utils#translator
     * @description (Static) 다국어 사용을 위한 Object
     */
    static translator = new _Translator_translator_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        filesLocation: '/js/pdf_form/i18n'
    });

    /**
     *
     * @constructor
     * 
    */
    constructor() {
        
    }


    /**
     * @static
     * @function isEmptyObject
     * @name module:Template/Utils.Utils#isEmptyObject
     * @description (Static)  Object가 비어있는지 체크
     * 
     * @param {Object} param
     * @return {Boolean} param
     * @Date : 2021. 5. 31
     */
    static isEmptyObject(param) {
        if (param === undefined ||
            param === null) {
            return true;
        }
        return Object.keys(param).length === 0;
    }

    /**
     * @static
     * @function closeSelect2Tag
     * @name module:Template/Utils.Utils#closeSelect2Tag
     * @description (Static) Select2가 열려있는 태그를 체크하여 닫는다.
     *
     * @param {Element} node
     * @return {Boolean}
     * @Date : 2021. 5. 31
     */
    static closeSelect2Tag(node) {
        node.querySelectorAll("li ." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_SELECT_CLASS).forEach((el) => {
            if (el.classList.contains("select2-hidden-accessible")) {
                $(el).select2('close');
            }
        });
    }

    /**
     * @static
     * @function removeAllChildNode
     * @name module:Template/Utils.Utils#removeAllChildNode
     * @description (Static) 해당하는 Node의 모든 Child를 제거한다.
     *
     * @param {Element} node
     * @Date : 2021. 5. 31
     */
    static removeAllChildNode(node) {
        if (node === null) {
            return;
        }
        while (node.firstChild) {
            if (node.lastChild.id === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_PANEL_ID) {
                Utils.closeSelect2Tag(node.lastChild);
            }
            node.removeChild(node.lastChild);
        }
    }

    /**
     * @static
     * @function createAttributePanelNode
     * @name module:Template/Utils.Utils#createAttributePanelNode
     * @description (Static) 필드의 속성을 보여줄 Panel를 생성한다.
     *
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributePanelNode() {
        var panel = document.createElement("ul");
        panel.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_PANEL_CLASS;
        panel.id = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_PANEL_ID;

        return panel;
    }

    /**
     * @static
     * @function createAttributeInputNode
     * @name module:Template/Utils.Utils#createAttributeInputNode
     * @description (Static) 필드의 속성중 input을 사용하는 Element를 만든다.
     *
     * @param {String} fieldID 사용할 Field의 ID
     * @param {String} fieldPropetyName 사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  input에 들어갈 값
     * @param {String} nodeTooltip  ToolTip에 들어갈 내용
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeInputNode(fieldId, fieldPropetyName, title, value, type, nodeTooltip, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey(title);
        titleSpan.setAttribute("data-i18n", title);
        titleWrap.appendChild(titleSpan);
        var input = document.createElement("input");
        input.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_INPUT_CLASS;
        input.setAttribute("data-field-id", fieldId);
        input.setAttribute("data-field-property-name", fieldPropetyName);
        if (value !== "") {
            input.value = value;
        }
        if (type !== "" ) {
            input.type = type;
        }
        input.addEventListener("change", changeEventFunc, true);
        
        row.appendChild(titleWrap);
        row.appendChild(input);
        return row;
    }

    /**
     * @static
     * @function createAttributeInputNode
     * @name module:Template/Utils.Utils#createAttributeInputNode
     * @description (Static) 필드의 속성중 textare를 사용하는 Element를 만든다.
     *
     * @param {String} fieldID 사용할 Field의 ID
     * @param {String} fieldPropetyName 사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  textare에 들어갈 값
     * @param {callback} changeEventFunc 값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeTextAreaNode(fieldId, fieldPropetyName, title, value, type, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey(title);
        titleWrap.appendChild(titleSpan);
        var textarea = document.createElement("textarea");
        textarea.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_TEXTAREA_CLASS;
        textarea.setAttribute("data-field-id", fieldId);
        textarea.setAttribute("data-field-property-name", fieldPropetyName);
        if (value !== "") {
            textarea.value = value;
        }
        if (type !== "") {
            textarea.type = type;
        }
        textarea.addEventListener("change", changeEventFunc, true);

        row.appendChild(titleWrap);
        row.appendChild(textarea);
        return row;
    }

    /**
     * @static
     * @function createAttributeCheckBoxNode
     * @name module:Template/Utils.Utils#createAttributeCheckBoxNode
     * @description (Static)  필드의 속성중 checkbox를 사용하는 Element를 만든다.
     *
     * @param {String} fieldID 사용할 Field의 ID
     * @param {String} fieldPropetyName 사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  input에 들어갈 값
     * @param {callback} changeEventFunc 값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeCheckBoxNode(fieldId, fieldPropetyName, title, value, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;

        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_INPUT_CLASS;
        inputText.setAttribute("data-field-id", fieldId);
        inputText.setAttribute("data-field-property-name", fieldPropetyName);
        inputText.style.display = "none";
        inputText.addEventListener("change", changeEventFunc, true);

        var input = document.createElement("input");
        input.type = "checkbox";
        input.id = fieldPropetyName + "_chkbox";
        input.addEventListener("change", function (evt) {
            if (input.checked) {
                inputText.value = "true";
            } else {
                inputText.value = "false";
            }
            inputText.dispatchEvent(new Event("change"));
        });

        if (value === 'true') {
            input.checked = true;
            inputText.value = "true";
        } else {
            input.checked = false;
            inputText.value = "false";
        }

        var checkBoxContainerNode = document.createElement("p");
        checkBoxContainerNode.className = "Attribute-Contents-Row-CheckBox-Container"
        checkBoxContainerNode.appendChild(input);
        var checkBoxLabelNode = document.createElement("label");
        checkBoxLabelNode.htmlFor = fieldPropetyName + "_chkbox";
        checkBoxLabelNode.textContent = title;
        checkBoxContainerNode.appendChild(checkBoxLabelNode);

        row.appendChild(checkBoxContainerNode);
        row.appendChild(inputText);
        return row;
    }

    /**
     * @static
     * @function createAttributeDateInputNode
     * @name module:Template/Utils.Utils#createAttributeDateInputNode
     * @description (Static)  필드의 속성중 Date를 사용하는 Element를 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} fieldPropetyName  사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  input에 들어갈 값
     * @param {String} nodeTooltip  ToolTip에 들어갈 내용
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeDateInputNode(fieldId, fieldPropetyName, title, value, nodeTooltip, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = title;
        titleWrap.appendChild(titleSpan);
        var input = document.createElement("input");
        input.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_INPUT_CLASS;
        input.id = fieldPropetyName + "_date-picker";
        input.style.display = "none";
        input.setAttribute("data-field-id", fieldId);
        input.setAttribute("data-field-property-name", fieldPropetyName);
        if (value !== "") {
            input.value = value;
        }
        var inputPicker = document.createElement("input");
        inputPicker.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_DATE_INPUT_CLASS;
        if (value !== "") {
            inputPicker.value = value;
        }
        
        input.addEventListener("change", changeEventFunc, true);
        row.appendChild(titleWrap);
        row.appendChild(input);
        row.appendChild(inputPicker);
        return row;
    }

    /**
     * @static
     * @function createAttributeColorInputNode
     * @name module:Template/Utils.Utils#createAttributeColorInputNode
     * @description (Static) 필드의 속성중 Color Picker를 사용하는 Element를 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} fieldPropetyName  사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  input에 들어갈 값
     * @param {String} type  input의 type에 들어갈 값 - 사용하지 않음.
     * @param {String} nodeTooltip  ToolTip에 들어갈 내용
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeColorInputNode(fieldId, fieldPropetyName, title, value, type, nodeTooltip, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = title;
        titleWrap.appendChild(titleSpan);
        var input = document.createElement("input");
        input.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_INPUT_CLASS;
        input.setAttribute("data-field-id", fieldId);
        input.setAttribute("data-field-property-name", fieldPropetyName);
        if (value !== "") {
            input.value = value;
        }
        input.type = "text";
        input.id = fieldId + "_color";
        input.addEventListener("change", changeEventFunc, true);
        
        var inputBtn = document.createElement("input");
        inputBtn.type = "button";
        var inputWrap = document.createElement("div");
        inputWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_INPUT_WRAP_CLASS;
        inputWrap.appendChild(input);
        inputWrap.appendChild(inputBtn);

        row.appendChild(titleWrap);
        row.appendChild(inputWrap);
        return row;
    }

    /**
     * @static
     * @function createAttributeToggleButtonNode
     * @name module:Template/Utils.Utils#createAttributeToggleButtonNode
     * @description (Static)  필드의 속성중 Toggle button을 사용하는 Element를 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} fieldPropetyName  사용할 Field의 속성 이름
     * @param {String} title  Element에 사용할 이름
     * @param {String} value  input에 들어갈 값
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeToggleButtonNode(fieldId, fieldPropetyName, title, value, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey(title);
        titleSpan.setAttribute("data-i18n", title);
        rowWrap.appendChild(titleSpan);
        
        var switchLabel = document.createElement("label");
        switchLabel.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SWITCH_LABEL_CLASS;

        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.setAttribute("data-field-id", fieldId);
        inputText.setAttribute("data-field-property-name", fieldPropetyName);
        inputText.style.display = "none";
        inputText.addEventListener("change", changeEventFunc, true);

        var input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("change", function (evt) {
            if (input.checked) {
                inputText.value = true;
            } else {
                inputText.value = false;
            }
            inputText.dispatchEvent(new Event("change"));
        });
        if (value === 'true') {
            input.checked = true;
            inputText.value = "true";
        } else {
            input.checked = false;
            inputText.value = "false";
        }

        var sliderSpan = document.createElement("span");
        sliderSpan.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SWITCH_LABEL_SLIDER_CLASS);
        sliderSpan.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SWITCH_LABEL_SLIDER_ROUND_CLASS);

        switchLabel.appendChild(input);
        switchLabel.appendChild(sliderSpan);

        rowWrap.appendChild(switchLabel);
        rowWrap.appendChild(inputText);
        row.appendChild(rowWrap);
        return row;
    }

    /**
     * @static
     * @function createAttributeSelectInnerNode
     * @name module:Template/Utils.Utils#createAttributeSelectInnerNode
     * @description (Static)  필드의 속성중 Select를 사용하는 Element를 만든다.
     *
     * @param {String} fieldID 사용할 Field의 ID
     * @param {String} fieldPropetyName  사용할 Field의 속성 이름
     * @param {Array} options [{value: "value", text: "text"}] select에 사용되는 Map Array
     * @param { String} title Element에 사용할 이름
     * @param {Boolean} useDefaulOptionNode 대상선택을 사용할지 여부
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeSelectInnerNode(fieldId, fieldPropetyName, options, title, useDefaulOptionNode = true) {
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;

        if (title !== "") {
            var titleWrap = document.createElement("div");
            titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
            var titleSpan = document.createElement("span");
            titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
            titleSpan.textContent = Utils.translateForKey(title);
            titleSpan.setAttribute("data-i18n", title);
            titleWrap.appendChild(titleSpan);
            rowWrap.appendChild(titleWrap);
        }

        var selectNode = document.createElement("select");
        selectNode.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_SELECT_CLASS;
        if (useDefaulOptionNode) {
            var defaultOptionNode = document.createElement("option");
            defaultOptionNode.value = "";
            defaultOptionNode.text = Utils.translateForKey("Template.selectDefaultText");
            defaultOptionNode.setAttribute("data-i18n", "Template.selectDefaultText");
            selectNode.appendChild(defaultOptionNode);
        }
        for (var idx = 0; idx < options.length; idx++) {
            var optionNode = document.createElement("option");
            optionNode.value = options[idx].value;
            optionNode.text = options[idx].text;
            selectNode.appendChild(optionNode);
        }

        selectNode.setAttribute("data-field-id", fieldId);
        selectNode.setAttribute("data-field-property-name", fieldPropetyName);
        
        rowWrap.appendChild(selectNode);
        return rowWrap;
    }

    /**
     * @static
     * @function createAttributeSelectNode
     * @name module:Template/Utils.Utils#createAttributeSelectNode
     * @description (Static)   필드의 속성중 Select를 사용하는 Element를 li로 감싸서 만든다.
     *
     * @param {String} fieldID 사용할 Field의 ID
     * @param {String} fieldPropetyName 사용할 Field의 속성 이름
     * @param {Array} options [{value: "value", text: "text"}] : select에 사용되는 Map Array
     * @param {String} title  Element에 사용할 이름
     * @param {Boolean} useDefaulOptionNode 대상선택을 사용할지 여부
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createAttributeSelectNode(fieldId, fieldPropetyName, options, title, useDefaulOptionNode = true) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var rowWrap = Utils.createAttributeSelectInnerNode(fieldId, fieldPropetyName, options, title, useDefaulOptionNode);
        row.appendChild(rowWrap);
        return row;
    }

    /**
     * @static
     * @function createDividerNode
     * @name module:Template/Utils.Utils#createDividerNode
     * @description (Static)   li의 구분자를 만든다.
     *
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createDividerNode() {
        var dividerRow = document.createElement("li");
        dividerRow.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DIVIDER_CLASS;
        return dividerRow;
    }

    /**
     * @static
     * @function createTextAlignButtonNode
     * @name module:Template/Utils.Utils#createTextAlignButtonNode
     * @description (Static)   필드의 속성중 Text Align Button Element을 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} value  현재의 text align 값
     * @param {callback} changeEventFunc 값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createTextAlignButtonNode(fieldId, value, changeEventFunc) {
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;

        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey("Template.textAlignText");
        titleSpan.setAttribute("data-i18n", "Template.textAlignText");
        titleWrap.appendChild(titleSpan);
        rowWrap.appendChild(titleWrap);

        var btnsWrap = document.createElement("div");
        var leftBtn = document.createElement("button");
        leftBtn.classList.add("Template-Button");
        leftBtn.classList.add("Text-Align-Left");
        leftBtn.classList.add("Toggle-Button");

        var leftIconBtn = document.createElement("i");
        leftBtn.appendChild(leftIconBtn);

        var centerBtn = document.createElement("button");
        centerBtn.classList.add("Template-Button");
        centerBtn.classList.add("Text-Align-Center");
        centerBtn.classList.add("Toggle-Button");

        var centerIconBtn = document.createElement("i");
        centerBtn.appendChild(centerIconBtn);

        var rightBtn = document.createElement("button");
        rightBtn.classList.add("Template-Button");
        rightBtn.classList.add("Text-Align-Right");
        rightBtn.classList.add("Toggle-Button");

        var rightIconBtn = document.createElement("i");
        rightBtn.appendChild(rightIconBtn);

        switch (value) {
            case "left":
                leftBtn.classList.add("Selected");
                break;
            case "center":
                centerBtn.classList.add("Selected");
                break;
            case "right":
                rightBtn.classList.add("Selected");
                break;
        }

        var inputNode = document.createElement("input");
        inputNode.type = "text";
        inputNode.style.display = "none";
        inputNode.value = value;
        inputNode.setAttribute("data-field-id", fieldId);
        inputNode.setAttribute("data-field-property-name", "textAlign");
        inputNode.addEventListener("change", changeEventFunc);

        leftBtn.addEventListener("click", function (evt) {
            inputNode.value = "left";
            inputNode.dispatchEvent(new Event("change"));
            if (!leftBtn.classList.contains("Selected")) {
                leftBtn.classList.toggle("Selected");
            }
            if (rightBtn.classList.contains("Selected")) {
                rightBtn.classList.toggle("Selected");
            }
            if (centerBtn.classList.contains("Selected")) {
                centerBtn.classList.toggle("Selected");
            }
            
        });
        centerBtn.addEventListener("click", function (evt) {
            inputNode.value = "center";
            inputNode.dispatchEvent(new Event("change"));
            if (!centerBtn.classList.contains("Selected")) {
                centerBtn.classList.toggle("Selected");
            }
            if (rightBtn.classList.contains("Selected")) {
                rightBtn.classList.toggle("Selected");
            }
            if (leftBtn.classList.contains("Selected")) {
                leftBtn.classList.toggle("Selected");
            }

        });
        rightBtn.addEventListener("click", function (evt) {
            inputNode.value = "right";
            inputNode.dispatchEvent(new Event("change"));
            if (!rightBtn.classList.contains("Selected")) {
                rightBtn.classList.toggle("Selected");
            }
            if (leftBtn.classList.contains("Selected")) {
                leftBtn.classList.toggle("Selected");
            }
            if (centerBtn.classList.contains("Selected")) {
                centerBtn.classList.toggle("Selected");
            }

        });

        btnsWrap.appendChild(leftBtn);
        btnsWrap.appendChild(centerBtn);
        btnsWrap.appendChild(rightBtn);
        btnsWrap.appendChild(inputNode);

        rowWrap.appendChild(btnsWrap);
        return rowWrap;
    }

    /**
     * @static
     * @function createTextBoldButtonNode
     * @name module:Template/Utils.Utils#createTextBoldButtonNode
     * @description (Static)  필드의 속성중 Text Bold toggle Button Element을 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} value  현재의 text bold 값
     * @param {callback} changeEventFunc 값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createTextBoldButtonNode(fieldId, value, changeEventFunc) {
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;

        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey("Template.boldText");
        titleSpan.setAttribute("data-i18n", "Template.boldText");
        titleWrap.appendChild(titleSpan);
        rowWrap.appendChild(titleWrap);

        var btnsWrap = document.createElement("div");
        var boldBtn = document.createElement("button");
        boldBtn.classList.add("Template-Button");
        boldBtn.classList.add("Text-Bold-Button");
        boldBtn.classList.add("Toggle-Button");

        var boldBtnIconBtn = document.createElement("i");
        boldBtn.appendChild(boldBtnIconBtn);

        if (value === "true") {
            boldBtn.classList.add("Selected");
        }

        var inputNode = document.createElement("input");
        inputNode.type = "text";
        inputNode.style.display = "none";
        inputNode.value = value;
        inputNode.setAttribute("data-field-id", fieldId);
        inputNode.setAttribute("data-field-property-name", "bold");
        inputNode.addEventListener("change", changeEventFunc);

        boldBtn.addEventListener("click", function (evt) {
            if (!boldBtn.classList.contains("Selected")) {
                inputNode.value = "true";
            } else {
                inputNode.value = "false";
            }
            inputNode.dispatchEvent(new Event("change"));
            boldBtn.classList.toggle("Selected");

        });

        btnsWrap.appendChild(boldBtn);
        btnsWrap.appendChild(inputNode);

        rowWrap.appendChild(btnsWrap);
        return rowWrap;
    }

    /**
     * @static
     * @function createTextColorButtonNode
     * @name module:Template/Utils.Utils#createTextColorButtonNode
     * @description (Static)  필드의 속성중 Text Color picker Element을 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} value  현재의 text color 값
     * @param {callback} changeEventFunc 값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createTextColorButtonNode(fieldId, title, value, changeEventFunc) {
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;

        var titleWrap = document.createElement("div");
        titleWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_WRAP_CLASS;
        var titleSpan = document.createElement("span");
        titleSpan.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TITLE_CLASS;
        titleSpan.textContent = Utils.translateForKey(title);
        titleSpan.setAttribute("data-i18n", title);
        titleWrap.appendChild(titleSpan);
        rowWrap.appendChild(titleWrap);

        var btnsWrap = document.createElement("div");
        btnsWrap.className = "Color-Button-Wrap";

        var boldBtn = document.createElement("button");
        boldBtn.classList.add("Template-Button");
        boldBtn.classList.add("Color-Button");

        var inputNode = document.createElement("input");
        inputNode.type = "text";
        inputNode.style.display = "none";
        inputNode.value = value;
        inputNode.setAttribute("data-field-id", fieldId);
        inputNode.setAttribute("data-field-property-name", "fontColor");
        inputNode.addEventListener("change", changeEventFunc);

        btnsWrap.appendChild(boldBtn);
        btnsWrap.appendChild(inputNode);

        rowWrap.appendChild(btnsWrap);
        return rowWrap;
    }

    /**
     * @static
     * @function createTextAttrbuteNode
     * @name module:Template/Utils.Utils#createTextAttrbuteNode
     * @description (Static)  필드의 속성중 Text 속성의 Element들을 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} fontColor  현재의 Font Color 값
     * @param {String} fontAlign  현재의 text align 값
     * @param {String} isBold  현재의 text bold 값
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
    static createTextAttrbuteNode(fieldId, fontColor, fontAlign, isBold, changeEventFunc) {
        var row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        var rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;
        
        var fontAttrTable = document.createElement("table");
        fontAttrTable.style.width = "100%";
        var row1 = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.style.paddingRight = "10px";
        col1.colSpan = 4;
        var fontFamilyCombo = Utils.createAttributeSelectInnerNode(fieldId, "fontName", Utils.fontFamilyComboBox, "Template.fontNameText", false);
        col1.appendChild(fontFamilyCombo);
        row1.appendChild(col1);

        var col2 = document.createElement("td");
        col2.colSpan = 4;
        var fontSizeCombo = Utils.createAttributeSelectInnerNode(fieldId, "fontSize", Utils.getFonSizeComboBox(), "Template.fontSizeText", false);
        col2.appendChild(fontSizeCombo);
        row1.appendChild(col2);

        fontAttrTable.appendChild(row1);

        var row2 = document.createElement("tr");
        var col3 = document.createElement("td");
        col3.style.paddingRight = "10px";
        col3.style.paddingTop = "20px";
        col3.colSpan = 4;
        row2.appendChild(col3);

        var alignBtnsNode = Utils.createTextAlignButtonNode(fieldId, fontAlign, changeEventFunc);
        col3.appendChild(alignBtnsNode);

        var col4 = document.createElement("td");
        col4.style.paddingRight = "10px";
        col4.style.paddingTop = "20px";
        col4.colSpan = 2;
        var boldBtnNode = Utils.createTextBoldButtonNode(fieldId, isBold, changeEventFunc);
        col4.appendChild(boldBtnNode);
        row2.appendChild(col4);

        var col5 = document.createElement("td");
        col5.style.paddingRight = "10px";
        col5.style.paddingTop = "20px";
        col5.colSpan = 2;
        var colorBtnNode = Utils.createTextColorButtonNode(fieldId, "Template.colorText", fontColor, changeEventFunc);
        col5.appendChild(colorBtnNode);
        row2.appendChild(col5);

        fontAttrTable.appendChild(row2);
        rowWrap.appendChild(fontAttrTable);
        row.appendChild(rowWrap);
        
        return {
            row: row,
            fontFamilyCombo: fontFamilyCombo,
            fontSizeCombo: fontSizeCombo,
            colorBtn: colorBtnNode
        };
    }

     /**
     * @static
     * @function createTextAttrbuteNode
     * @name module:Template/Utils.Utils#createTextMemoAttrbuteNode
     * @description (Static)  메모 속성의 Element들을 만든다.
     *
     * @param {String} fieldID  사용할 Field의 ID
     * @param {String} fontColor  현재의 Font Color 값
     * @param {String} fontAlign  현재의 text align 값
     * @param {String} isBold  현재의 text bold 값
     * @param {callback} changeEventFunc  값이 변할 때 호출되어질 callback
     * @return {Element}
     * @Date : 2021. 5. 31
     */
     static createTextMemoAttrbuteNode(fieldId, fontColor, isBold, backgroundColor, changeEventFunc) {
        let row = document.createElement("li");
        row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
        let rowWrap = document.createElement("div");
        rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;
        
        let fontAttrTable = document.createElement("table");
        fontAttrTable.style.width = "100%";
        let row1 = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.style.paddingRight = "10px";
        col1.colSpan = 4;
        let fontFamilyCombo = Utils.createAttributeSelectInnerNode(fieldId, "fontName", Utils.fontFamilyComboBox, "Template.fontNameText", false);
        col1.appendChild(fontFamilyCombo);
        row1.appendChild(col1);

        let col2 = document.createElement("td");
        col2.colSpan = 4;
        let fontSizeCombo = Utils.createAttributeSelectInnerNode(fieldId, "fontSize", Utils.getFonSizeComboBox(), "Template.fontSizeText", false);
        col2.appendChild(fontSizeCombo);
        row1.appendChild(col2);

        fontAttrTable.appendChild(row1);

        let row2 = document.createElement("tr");

        let col4 = document.createElement("td");
        col4.style.paddingRight = "10px";
        col4.style.paddingTop = "20px";
        col4.colSpan = 2;
        let boldBtnNode = Utils.createTextBoldButtonNode(fieldId, isBold, changeEventFunc);
        col4.appendChild(boldBtnNode);
        row2.appendChild(col4);

        let col5 = document.createElement("td");
        col5.style.paddingRight = "10px";
        col5.style.paddingTop = "20px";
        col5.colSpan = 2;
        let colorBtnNode = Utils.createTextColorButtonNode(fieldId, "Template.colorText", fontColor, changeEventFunc);
        col5.appendChild(colorBtnNode);
        row2.appendChild(col5);

        
        let col6 = document.createElement("td");
        col6.style.paddingRight = "10px";
        col6.style.paddingTop = "20px";
        col6.colSpan = 2;
        let backgroundColorBtnNode = Utils.createTextColorButtonNode(fieldId, "Template.bgColorText", backgroundColor, changeEventFunc);
        col6.appendChild(backgroundColorBtnNode);
        row2.appendChild(col6);

        fontAttrTable.appendChild(row2);
        rowWrap.appendChild(fontAttrTable);
        row.appendChild(rowWrap);
        
        return {
            row: row,
            fontFamilyCombo: fontFamilyCombo,
            fontSizeCombo: fontSizeCombo,
            boldBtn: boldBtnNode,
            colorBtn: colorBtnNode,
            backgroundColorBtn: backgroundColorBtnNode
        };
    }

    /**
     * @static
     * @function assign
     * @name module:Template/Utils.Utils#assign
     * @description (Static)  object에 해당 속성이 있으면 값을 설정한다.
     *
     * @param {Object} obj  사용할 Object
     * @param {Object} prop  사용할 속성
     * @param {Object} value  속성에 사용할 값
     * @Date : 2021. 5. 31
     */
    static assign(obj, prop, value) {
        if (typeof prop === "string")
            prop = prop.split(".");

        if (prop.length > 1) {
            var e = prop.shift();
            assign(obj[e] =
                    Object.prototype.toString.call(obj[e]) === "[object Object]"
                    ? obj[e]
                    : {},
                prop,
                value);
        } else
            obj[prop[0]] = value;
    }

    /**
     * @static
     * @function fieldAncestors
     * @name module:Template/Utils.Utils#fieldAncestors
     * @description (Static) Field에 상속된 부모들을 찾는다..
     *
     * @param {Object} anyclass : 찾을 field
     * @return {Array}: 상속된 부모들
     * @Date : 2021. 5. 31
     */
    static fieldAncestors (anyclass)
    {
        switch (true) {
        case (anyclass === undefined): return;
        case (anyclass === null): return [];
        default:
            return [anyclass, ...(Utils.fieldAncestors (Object.getPrototypeOf (anyclass)))];
        }
    }

    /**
     * @static
     * @function findSameAncestor
     * @name module:Template/Utils.Utils#findSameAncestor
     * @description (Static)  Field들의 공통으로 상속된 부모를 찾는다..
     *
     * @param {Array}  fieldList 찾을 field 리스트
     * @return {Object}  공통으로 상속된 부모
     * @Date : 2021. 5. 31
     */
    static findSameAncestor(fieldList) {
        // 첫번째 필드의 조상들을 조사한다.
        var firstAncestors = Utils.fieldAncestors(fieldList[0]);
        var sameAncestor = firstAncestors[0];
        // 필드의 갯수가 1개이면 그냥 리턴한다.
        if (fieldList.length === 1) {
            return sameAncestor;
        }
        var cnt = 0;
        // 2번째 필드부터 루프를 한다.
        for (var idx = 1; idx < fieldList.length; idx++) {
            var ancestors = Utils.fieldAncestors(fieldList[idx]);
            // 부모가 1개이면 BaseField이므로 그대로 리턴한다.
            if (ancestors.length === 1) {
                return ancestors[0];
            }
            var startIdx = 0;
            // 첫번째 필드의 조상을 루프하는 index이므로 1부터 시작한다.
            var startIdx2 = 1;

            // 현재 공통으로 선택된 필드의 조상보다 지금 조사하는 필드의 조상이 갯수가 적으면 
            // 전부 조사할 필요가 없이 둘의 차이나는 만큼 부터 조사한다.
            // ex) TextField와 ImageField를 비교해보면
            // Text TextBase Base, Image Base 이렇게 조상들이 존재한다.
            // 이렇게 1번째는 무조건 다르니 1번째는 패스하고 다음부터 조사를 한다.
            const sameAncestorParents = Utils.fieldAncestors(sameAncestor);
            if (sameAncestorParents.length >= ancestors.length) {
                startIdx = sameAncestorParents.length - ancestors.length;
            }
            for (var secIdx = startIdx; secIdx < ancestors.length; secIdx++) {
                var ancestor = ancestors[secIdx];
                var findSameAncestor = false;
                
                for (var firstIdx = startIdx2; firstIdx < firstAncestors.length; firstIdx++) {
                    cnt++;
                    if (Object.getPrototypeOf(ancestor) == Object.getPrototypeOf(firstAncestors[firstIdx])) {
                        // 같을 경우 +1을 하는 이유는 prototype의 constructor가 하나 위를 바라보기 때문이다.
                        sameAncestor = firstAncestors[firstIdx + 1];
                        const sameAncestorParents = Utils.fieldAncestors(sameAncestor);
                        // 길이가 2면 BaseField이므로 그대로 리턴한다.
                        if (sameAncestorParents.length === 2) {
                            return sameAncestor;
                        }
                        findSameAncestor = true;
                        startIdx2 = firstIdx + 1;
                        break;
                    }
                }
                if (findSameAncestor) {
                    break;
                }
            }
        }
        return sameAncestor;
    }

    static findSameAncestor2(fieldList) {
        if (fieldList.length === 1) {
            return fieldList[0];
        }
        const firstFieldAncestors = fieldList[0].ancestors();
        let commonAncestor = firstFieldAncestors[0];
        for (let idx = 1; idx < fieldList.length; ++idx) {
            if (commonAncestor === "BF") {
                return commonAncestor;
            }
            const fieldAncestors = fieldList[idx].ancestors();
            if (fieldAncestors.includes(commonAncestor)) {
                continue;
            }

            for (let idx2 = 1; idx2 < firstFieldAncestors.length; ++idx2) {
                if (fieldAncestors.includes(firstFieldAncestors[idx2])) {
                    commonAncestor = firstFieldAncestors[idx2];
                    break;
                }
            }
        }
        return commonAncestor;
    }

    /**
     * @static
     * @function getUserInfoOptsList
     * @name module:Template/Utils.Utils#getUserInfoOptsList
     * @description (Static)  서명자들의 정보 리스트를 반환한다.
     *
     * @return {Array} 서명자들의 정보 리스트
     * @Date : 2021. 5. 31
     */
    static getUserInfoOptsList() {
        return Utils.userInfoOptionList;
    }

    /**
     * @static
     * @function setUserInfoOptsList
     * @name module:Template/Utils.Utils#setUserInfoOptsList
     * @description (Static)  서명자들의 정보 리스트를 설정한다.
     *
     * @param {Array} fieldList  서명자들의 정보 리스트
     * @Date : 2021. 5. 31
     */
    static setUserInfoOptsList(opts) {
        Utils.userInfoOptionList = opts;
    }

    /**
     * @static
     * @function getUserInfoOptsListCount
     * @name module:Template/Utils.Utils#getUserInfoOptsListCount
     * @description (Static) 서명자들의 정보 리스트 길이를 반환한다.
     *
     * @return {Number}: 서명자들의 정보 리스트길이
     * @Date : 2021. 5. 31
     */
    static getUserInfoOptsListCount() {
        return Utils.userInfoOptionListCount;
    }

    /**
     * @static
     * @function setUserInfoOptsListCount
     * @name module:Template/Utils.Utils#setUserInfoOptsListCount
     * @description (Static)  서명자들의 정보 리스트 길이를 설정한다.
     *
     * @param {Number} fieldList 서명자들의 정보 리스트 길이
     * @Date : 2021. 5. 31
     */
    static setUserInfoOptsListCount(count) {
        Utils.userInfoOptionListCount = count;
    }


    /**
     * @static
     * @function getDVFieldOptsList
     * @name module:Template/Utils.Utils#getDVFieldOptsList
     * @description (Static)   기본값으로 사용할 값들의 리스트를 반환한다.
     *
     * @return {Array} 기본값으로 사용할 값들의 리스트
     * @Date : 2021. 5. 31
     */
    static getDVFieldOptsList() {
        return Utils.dvFieldOptionList;
    }

    /**
     * @static
     * @function setDVFieldOptsList
     * @name module:Template/Utils.Utils#setDVFieldOptsList
     * @description (Static)  기본값으로 사용할 값들의 리스트를 설정한다.
     *
     * @param fieldList {Array}  기본값으로 사용할 값들의 리스트
     * @Date : 2021. 5. 31
     */
    static setDVFieldOptsList(opts) {
        Utils.dvFieldOptionList = opts;
    }

    /**
     * @static
     * @function getSignTabShowOpt
     * @name module:Template/Utils.Utils#getSignTabShowOpt
     * @description (Static)   서명탭 보임/안보임 기본값으로 사용할 값들을 반환한다.
     *
     * @return {Array} 서명탭 보임/안보임 기본값으로 사용할 값들 
     * @Date : 2023. 12. 27
     */
    static getSignTabShowOpt() {
        return Utils.signTabShowOpt;
    }

    /**
     * @static
     * @function setSignTabShowOpt
     * @name module:Template/Utils.Utils#setSignTabShowOpt
     * @description (Static)  서명탭 보임/안보임 기본값으로 사용할 값들을 설정한다.
     *
     * @param signTabShowOpt {Object}  서명탭 보임/안보임 기본값으로 사용할 값들
     * @Date : 2023. 12. 27
     */
    static setSignTabShowOpt(opts) {
        Utils.signTabShowOpt = opts;
    }

    /**
     * @static
     * @function getFonSizeComboBox
     * @name module:Template/Utils.Utils#getFonSizeComboBox
     * @description (Static)  속성에서 사용할 폰트 사이즈 리스트를 반환한다.
     *
     * @return {Array} 속성에서 사용할 폰트 사이즈 리스트
     * @Date : 2021. 5. 31
     */
    static getFonSizeComboBox() {
        if (Utils.fontSizeComboBox.length > 0) {
            return Utils.fontSizeComboBox;
        }
        for (var idx = 1; idx <= 50; idx++) {
            Utils.fontSizeComboBox.push({
                text: idx + "px",
                value: idx
            });
        }
        return Utils.fontSizeComboBox;
    }

    /**
     * @static
     * @function getSignPenWidthComboBox
     * @name module:Template/Utils.Utils#getSignPenWidthComboBox
     * @description (Static) 속성에서 사용할 펜 두께 리스트를 반환한다.
     *
     * @return {Array} 속성에서 사용할 펜 두께 리스트
     * @Date : 2021. 5. 31
     */
    static getSignPenWidthComboBox() {
        //console.log(Utils.signPenWidthComboBox.length);
        if (Utils.signPenWidthComboBox.length > 0) {
            return Utils.signPenWidthComboBox;
        }
        for (var idx = 1; idx <= 20; idx += 1) {
            Utils.signPenWidthComboBox.push({
                text: idx,
                value: idx
            });
        }
        return Utils.signPenWidthComboBox;
    }

    /**
     * @static
     * @function createAttrbutePopup
     * @name module:Template/Utils.Utils#createAttrbutePopup
     * @description (Static) 속성 팝업의 Element를 만든다.
     *
     * @param {Element} ownerNode 해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @return {Element} 속성 팝업의 element
     * @Date : 2021. 5. 31
     */
    static createAttrbutePopup(ownerNode, ownerFieldBBox) {
        let attrDiv = ownerNode.querySelector(" ." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CLASS);
        if (attrDiv === null) {
            attrDiv = document.createElement("div");
            attrDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CLASS);
            attrDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
            let viewer = ownerNode.querySelector(" #" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_PDF_VIEWER);
            viewer.appendChild(attrDiv);
        } else {
            Utils.removeAllChildNode(attrDiv);
        }
        if (!attrDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS)) {
            attrDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
        }
        attrDiv.style.display = "block";
        if (ownerFieldBBox !== null && ownerFieldBBox !== undefined) {
            attrDiv.style.left = ownerFieldBBox.x + "px";
            attrDiv.style.top = ownerFieldBBox.y + ownerFieldBBox.height + 10 + "px";
        }
        return attrDiv;
    }

    /**
     * @static
     * @function showAsteriskDiv
     * @name module:Template/Utils.Utils#showAsteriskDiv
     * @description (Static) 필수 표시 마크를 보이거나 숨긴다.
     *
     * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {String} fieldId  필수 마크가 사용되는 필드의 id
     * @param {Boolean} isShow  true면 보이고 false면 숨긴다.
     * @param {Number} fieldX  필수 마크가 사용되는 필드의 x좌표
     * @param {Number} fieldY  필수 마크가 사용되는 필드의 y좌표
     * @param {Number} fieldHeight  필수 마크가 사용되는 필드의 높이
     * @Date : 2021. 5. 31
     */
    static showAsteriskDiv(ownerNode, fieldId, isShow, fieldX, fieldY, fieldHeight) {
        let asteriskDiv = ownerNode.querySelector(" #" + fieldId + "_asterisk");
        if (asteriskDiv === null) {
            return;
        }
    //    console.log("showAsteriskDiv   " + isShow);
        if (isShow) {
            if (fieldX === null || fieldY === null || fieldHeight === null ||
                fieldX === undefined || fieldY === undefined || fieldHeight === undefined) {
                return;
            }
            let asteriskHeight = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.ASTREISK_DIV_HEIGHT;
            asteriskDiv.style.left = (fieldX - 6 - asteriskHeight) + "px";
            let asteriskY = fieldY + (fieldHeight / 2) - (asteriskHeight / 2);
            asteriskDiv.style.top = asteriskY + "px";

            if (!asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS)) {
                asteriskDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
            }
            if (asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS)) {
                asteriskDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS);
            }
            return;
        }

        if (asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS)) {
            asteriskDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
        }
        if (!asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS)) {
            asteriskDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS);
        }
    }

    /**
     * @static
     * @function createAsteriskDiv
     * @name module:Template/Utils.Utils#createAsteriskDiv
     * @description (Static) 필수 표시 마크의 Element를 만든다.
     *
     * @param {Element} ownerNode 해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {String} fieldId  필수 마크가 사용되는 필드의 id
     * @return {Element} 필수 표시 마크의 element
     * @Date : 2021. 5. 31
     */
    static createAsteriskDiv(ownerNode, fieldId) {
        let asteriskDiv = ownerNode.querySelector(" #" + fieldId + "_asterisk");
        if (asteriskDiv === null) {
            asteriskDiv = document.createElement("div");
            asteriskDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.ASTERISK_ICON_CLASS);
            asteriskDiv.style.position = "absolute"
            asteriskDiv.style.width = "11px";
            asteriskDiv.style.height = "12px";
            let layerDiv = ownerNode.querySelector(" #" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME);
            layerDiv.appendChild(asteriskDiv);
        }
        return asteriskDiv;
    }
    /**
     * @static
     * @function isShowAsteriskDiv
     * @name module:Template/Utils.Utils#isShowAsteriskDiv
     * @description (Static) 필수 표시 마크가 보이는지 여부를 반환한다.
     *
     * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {String} fieldId  필수 마크가 사용되는 필드의 id
     * @Date : 2021. 5. 31
     */
    static isShowAsteriskDiv(ownerNode, fieldId) {
        let asteriskDiv = ownerNode.querySelector(" #" + fieldId + "_asterisk");
        if (asteriskDiv === null) {
            return false;
        }

        if (asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS)) {
            return true;
        }
        if (asteriskDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS)) {
            return false;
        }
        return false;
    }

    /**
     * @static
     * @function createFieldDeleteBtn
     * @name module:Template/Utils.Utils#createFieldDeleteBtn
     * @description (Static) 필드의 Delete버튼의 Element를 만든다.
     *
     * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {CallBack} btnClickEvtHandler  버튼을 눌렀을 때 동작할 Handler
     * @return {Element} 필드의 Delete버튼의 element
     * @Date : 2021. 5. 31
     */
    static createFieldDeleteBtn(ownerNode, btnClickEvtHandler) {
        let deleteBtnDiv = ownerNode.querySelector(" ." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS);
        if (deleteBtnDiv === null) {
            deleteBtnDiv = document.createElement("div");
            deleteBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS);
            deleteBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
            let viewer = ownerNode.querySelector(" #" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_PDF_VIEWER);
            viewer.appendChild(deleteBtnDiv);
        }
        if (!deleteBtnDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS)) {
            deleteBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SHOW_CLASS);
        }
        if (deleteBtnDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS)) {
            deleteBtnDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS);
        }
        
        deleteBtnDiv.addEventListener("click", btnClickEvtHandler);
        return deleteBtnDiv;
    }

    /**
     * @static
     * @function repositionFieldDeleteBtn
     * @name module:Template/Utils.Utils#repositionFieldDeleteBtn
     * @description (Static) 필드의 Delete버튼의 위치를 조정한다.
     *
     * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Number} x  Field의 X좌표
     * @param {Number} y  Field의 y좌표
     * @param {Number} width  Field의 width
     * @return {Element} 필드의 Delete버튼의 element
     * @Date : 2021. 5. 31
     */
    static repositionFieldDeleteBtn(ownerNode, x, y, width) {

        let deleteBtnDiv = ownerNode.querySelector(" ." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS);
        if (deleteBtnDiv === null) {
            console.log("deleteBtnDiv empty");
            return;
        }
        if (deleteBtnDiv.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS)) {
            deleteBtnDiv.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.HIDE_CLASS);
        }
        deleteBtnDiv.style.left = x + width + 10 + "px";
        deleteBtnDiv.style.top = y + 10 + "px";
    }

    /**
     * @static
     * @function addSignSvgToCanvas
     * @name module:Template/Utils.Utils#addSignSvgToCanvas
     * @description (Static) canvas에 SVG를 추가한다.
     *
     * @param {Object} field  추가할 canvas의 Sign Field Object
     * @param {Element} canvasDiv  canvas의 Element
     * @param {Number} signWidth  서명필드의 Width
     * @param {Number} signHeight  서명필드의 height
     * @param {String} svg  SVG String
     * @return {Object} Fabric canvas Object: SVG데이터가 추가된 Canvas
     * @Date : 2021. 5. 31
     */
    static addSignSvgToCanvas(field, canvasDiv, signWidth, signHeight, svg) {
        let canvasObj = canvasDiv;
        if (canvasDiv === null || canvasDiv === undefined) {
            canvasObj = field.m_id + "_canvas";
        }
        let staticCanvs1 = new fabric.StaticCanvas(canvasObj, { isDrawingMode: false });
        staticCanvs1.setHeight(signHeight);
        staticCanvs1.setWidth(signWidth);

        fabric.loadSVGFromString(svg, function (objects, options) {
            var obj = fabric.util.groupSVGElements(objects, options);
            let xScale = staticCanvs1.width / obj.width;
            let yScale = staticCanvs1.height / obj.height;
            const scale1 = xScale > yScale ? yScale : xScale;
            obj.scale(scale1);

            obj.strokeWidth = obj.strokeWidth / scale1;
            if (obj._objects !== null && obj._objects !== undefined) {
                let objects = obj._objects;
                for (var idx = 0; idx < objects.length; ++idx) {
                    objects[idx].strokeWidth = objects[idx].strokeWidth / scale1;
                }
            }
            staticCanvs1.add(obj).centerObject(obj).renderAll();
            obj.setCoords();
        }, 
         null,
         {crossOrigin: 'anonymous' // CORS 설정
        });
        return staticCanvs1;
    }

    /**
     * @static
     * @function addObjectsToCanvas
     * @name module:Template/Utils.Utils#addObjectsToCanvas
     * @description (Static) canvas에 Objects를 추가한다.
     *
     * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
     * @param {Object} field  추가할 canvas의 Sign Field Object
     * @param {Element} canvasDiv  canvas의 Element
     * @param {Number} signWidth  서명필드의 Width
     * @param {Number} signHeight  서명필드의 height
     * @param {Array} objects  : Path의 리스트
     * @param {Number} orgWidth  추가될 Objects의 Width
     * @param {Number} orgHeight  : 추가될 Objects의 height
     * @return {Object} Fabric canvas Object: Objects가 추가된 Canvas
     * @Date : 2021. 5. 31
     */
    static addObjectsToCanvas(_ownerNode, field, canvasDiv, signWidth, signHeight, objects, orgWidth, orgHeight) {
        let canvasObj = canvasDiv;
        if (canvasDiv === null || canvasDiv === undefined) {
            let canvasId = field.m_id + "_canvas";
            canvasObj = _ownerNode.querySelector("#" + canvasId);
        }
        let staticCanvs1 = new fabric.StaticCanvas(canvasObj, { isDrawingMode: false });
        staticCanvs1.setHeight(signHeight);
        staticCanvs1.setWidth(signWidth);
        let xScale = staticCanvs1.width / orgWidth;
        let yScale = staticCanvs1.height / orgHeight;
        const scale1 = xScale > yScale ? yScale : xScale;
       // console.log(scale1);
        fabric.util.enlivenObjects(objects, function (objs) {
            var origRenderOnAddRemove = staticCanvs1.renderOnAddRemove;
            staticCanvs1.renderOnAddRemove = false;
            let gotoCenter = true;
            if (objs.length > 1) {
                gotoCenter = false;
            }

            objs.forEach(function (o) {
                let left = o.left * scale1;
                let top = o.top * scale1;
                if (gotoCenter) {
                   left = ((staticCanvs1.width - o.width * scale1) / 2);
                   top = ((staticCanvs1.height - o.height * scale1) / 2);                    
                }
                o.set({
                    left: left,
                    top: top,
                    scaleY: scale1,
                    scaleX: scale1,
                    strokeWidth: o.strokeWidth / scale1
                });
                staticCanvs1.add(o);
            });

            staticCanvs1.renderOnAddRemove = origRenderOnAddRemove;
            staticCanvs1.renderAll();
            staticCanvs1.calcOffset();
            if (objs.length > 1) {
                var objs = staticCanvs1.getObjects();
                var group = new fabric.Group(objs, {
                });
                group.set({
                    left: ((staticCanvs1.width - group.width ) / 2),
                    top: ((staticCanvs1.height - group.height ) / 2)
                })
                group.setCoords();
                staticCanvs1.renderAll();
            }
        });

        return staticCanvs1;
    }

    /**
     * @static
     * @function cloneObject
     * @name module:Template/Utils.Utils#cloneObject
     * @description (Static)  Object deep copy
     *
     * @param {Object} toObj  복사할 object
     * @return {Object}  복사된 object
     * @Date : 2021. 5. 31
     */
    static cloneObject(obj) {
        var clone = {};
        for (var key in obj) {
            if (typeof obj[key] == "object" && obj[key] != null) {
                if (Array.isArray(obj[key])) {
                    clone[key] = [...obj[key]];
                } else {
                    clone[key] = Utils.cloneObject(obj[key]);
                }
            } else {
                clone[key] = obj[key];
            }
        }

        return clone;
    }

    /**
     * @static
     * @function cloneObjectToObject
     * @name module:Template/Utils.Utils#cloneObjectToObject
     * @description (Static) fromObj의 데이터를 toObj로 deep copy
     *
     * @param {Object} fromObj 복사할 object
     * @param {Object} toObj  복사될 object
     * @return {Object} 복사된 object
     * @Date : 2021. 5. 31
     */
    static cloneObjectToObject(fromObj, toObj) {
        for (var key in fromObj) {
            if (key === "pages" || key === "fields") {
                continue;
            }
            if (typeof fromObj[key] == "object" && fromObj[key] != null) {
                toObj[key] = Utils.cloneObject(fromObj[key]);
            } else {
                toObj[key] = fromObj[key];
            }
        }

        return toObj;
    }

    /**
     * @static
     * @function cloneFabricCanvas
     * @name module:Template/Utils.Utils#cloneFabricCanvas
     * @description (Static)  canvas에 Objects를 추가한다.
     *
     * @param {Object} canvasObj  Object가 추가될 Canvas
     * @param {Array}  objects 복사될 Object의 리스트
     * @Date : 2021. 5. 31
     */
    static cloneFabricCanvas(canvasObj, objects) {
        fabric.util.enlivenObjects(objects, function (objs) {
            var origRenderOnAddRemove = canvasObj.renderOnAddRemove;
            canvasObj.renderOnAddRemove = false;

            objs.forEach(function (o) {
                canvasObj.add(o);
            });
            canvasObj.renderOnAddRemove = origRenderOnAddRemove;
            canvasObj.renderAll();
            canvasObj.calcOffset();
        });
    }

    /**
     * @static
     * @function isStringEmpty
     * @name module:Template/Utils.Utils#isStringEmpty
     * @description (Static) 문자열이 비어있는지 확인한다.
     *
     * @param {String} str 확인할 문자열
     * @return {Boolean} 비어있으면 true 비어있지 않으면 false
     * @Date : 2021. 5. 31
     */
    static isStringEmpty(str) {
        if (str === null) {
            return true;
        }
        if (str === "") {
            return true;
        }
        if (str === undefined) {
            return true;
        }
        return false;
    }

    /**
     * @static
     * @function mergeRect
     * @name module:Template/Utils.Utils#mergeRect
     * @description (Static)  두 Rect를 합친다.
     *
     * @param {Object} r1 {left: 0, right: 0, top: 0, right: 0} 합쳐야되는 Rect Object
     * @param {Object} r2 {left: 0, right: 0, top: 0, right: 0} 합쳐야되는 Rect Object
     * @return {Object} {left: 0, right: 0, top: 0, right: 0, x: 0, y: 0, width: 0, height: 0}: 합쳐진 Rect
     * @Date : 2021. 5. 31
     */
    static mergeRect(r1, r2) {
        return {
            left: Math.min(r1.left, r2.left),
            top: Math.min(r1.top, r2.top),
            right: Math.max(r1.right, r2.right),
            bottom: Math.max(r1.bottom, r2.bottom),
            x: Math.min(r1.left, r2.left),
            y: Math.min(r1.top, r2.top),
            width: Math.abs(Math.max(r1.right, r2.right) - Math.min(r1.left, r2.left)),
            height: Math.abs(Math.max(r1.bottom, r2.bottom) - Math.min(r1.top, r2.top)),
        }
    }

    /**
     * @static
     * @function boundingRectToRect
     * @name module:Template/Utils.Utils#boundingRectToRect
     * @description (Static) BoundingRect를 여기서 사용할 Rect Object로 변경
     *
     * @param {Object} rect {left: 0, with: 0, width: 0, height: 0} Bounding Rect Object
     * @return {Object} {left: 0, right: 0, top: 0, right: 0}: 여기서 사용할 Rect Object
     * @Date : 2021. 5. 31
     */
    static boundingRectToRect(rect) {
        return {
            left: rect.left,
            top: rect.top,
            right: rect.left + rect.width,
            bottom: rect.top + rect.height
        }
    }

    /**
     * @static
     * @function mergeObjectsRect
     * @name module:Template/Utils.Utils#mergeObjectsRect
     * @description (Static) Canvas의 Path Objects의 Rect들을 하나로 합친다.
     *
     * @param {Object} canvas Fabric canvas: Path Objects가 있는 canvas
     * @return {Object} {left: 0, right: 0, top: 0, right: 0}: 여기서 사용할 Rect Object
     * @Date : 2021. 5. 31
     */
    static mergeObjectsRect(canvas) {
        let rect = null;
        canvas.forEachObject(function (obj) {
            var bound = obj.getBoundingRect();
            if (rect === null) {
                rect = Utils.mergeRect(Utils.boundingRectToRect(bound), Utils.boundingRectToRect(bound));
            } else {
                rect = Utils.mergeRect(rect, Utils.boundingRectToRect(bound));
            }
        })
        return rect;
    }

    /**
     * @static
     * @function mergeFieldsBBox
     * @name module:Template/Utils.Utils#mergeFieldsBBox
     * @description (Static) Field List의 BBox들을 하나로 합친다.
     *
     * @param {Array} fields Field의 배열
     * @return {Object} {left: 0, right: 0, top: 0, right: 0}: 여기서 사용할 Rect Object
     * @Date : 2021. 5. 31
     */
    static mergeFieldsBBox(fields) {
        let rect = null;
        for (var idx = 0; idx < fields.length; idx += 1) {
            let bound = fields[idx].getBBox();
            if (rect === null) {
                rect = Utils.mergeRect(Utils.boundingRectToRect(bound), Utils.boundingRectToRect(bound));
            } else {
                rect = Utils.mergeRect(rect, Utils.boundingRectToRect(bound));
            }
        }
        return rect;
    }

    /**
     * @static
     * @function imageFileToBase64
     * @name module:Template/Utils.Utils#imageFileToBase64
     * @description (Static) Image파일을 읽어 Base64 String으로 반환한다.
     *
     * @param {Object} file File: 이미지 파일의 File Object
     * @param {Callback} callBackFunc  Base64 문자열을 받을 callback function
     * @Date : 2021. 5. 31
     */
    static imageFileToBase64(file, callBackFunc) {
        if (file === undefined || file === null) {
            return null;
        }
        if (!file.type.startsWith('image/')) { return null; }

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callBackFunc(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    /**
     * @static
     * @function changeLocale
     * @name module:Template/Utils.Utils#changeLocale
     * @description (Static) 현재 언어를 파라미터에 맞게 변환한다.
     *
     * @param {String} locale 바꿀 언어
     * @Date : 2021. 5. 31
     */
    static changeLocale(locale) {
        Utils.locale = locale;
        Utils.translator.translatePageTo(locale);
    }

    /**
     * @static
     * @function translateForKey
     * @name module:Template/Utils.Utils#translateForKey
     * @description (Static) 키에 해당하는 문자열을 현재 언어로 바꾼다.
     *
     * @param {String} key 바꿀 문자열에 해당하는 키
     * @Date : 2021. 5. 31
     */
    static translateForKey(key) {
        return Utils.translator.translateForKey(key, Utils.locale);
    }

    /**
     * @static
     * @function translatorFileLocation
     * @name module:Template/Utils.Utils#translatorFileLocation
     * @description (Static) 다국어 언어 파일의 위치를 지정한다.
     * @example
     * localhost:5500/js/pdf_form/i18n의 경우  "/js/pdf_form/i18n"
     * 
     * @param {String} filesLocation 언어파일의 위치(절대 경로)
     * @Date : 2021. 5. 31
     */
    static translatorFileLocation(filesLocation) {
        Utils.translator.config.filesLocation = filesLocation;
    }

    /**
     * @static
     * @function addTranslator
     * @name module:Template/Utils.Utils#addTranslator
     * @description (Static) 다국어 언어를 추가한다.
     * @example
     * addTranslator("jp", jsonData)
     * 
     * @param {String} locale 언어 이름
     * @param {Object} langData i18n/ko.json과 같은 양식으로 된 JSON을 파싱한 데이터
     * @Date : 2021. 5. 31
     */
    static addTranslator(locale, langData) {
        Utils.translator.add(locale, langData);
    }

    static appendFontFamily(fontFamilyArr) {
        Utils.fontFamilyComboBox = Utils.fontFamilyComboBox.concat(fontFamilyArr);
    }

    static generate_uuidv4() {
        return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
     }
}


/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************************!*\
  !*** ./js/pdf_form/src/template/templateMain.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTranslator: () => (/* binding */ addTranslator),
/* harmony export */   appendFontFamily: () => (/* binding */ appendFontFamily),
/* harmony export */   appendSignTabShowOpt: () => (/* binding */ appendSignTabShowOpt),
/* harmony export */   changeTemplateLocale: () => (/* binding */ changeTemplateLocale),
/* harmony export */   changeTranslatorFileLocation: () => (/* binding */ changeTranslatorFileLocation),
/* harmony export */   checkTemplateFieldData: () => (/* binding */ checkTemplateFieldData),
/* harmony export */   copyField: () => (/* binding */ copyField),
/* harmony export */   getJsonData: () => (/* binding */ getJsonData),
/* harmony export */   initDocument: () => (/* binding */ initDocument),
/* harmony export */   pasteField: () => (/* binding */ pasteField),
/* harmony export */   releaseTemplate: () => (/* binding */ releaseTemplate)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pdf.cursor.tool */ "./js/pdf_form/src/pdf.cursor.tool.js");
/* harmony import */ var _templatemod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templatemod */ "./js/pdf_form/src/template/templatemod.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/**
 * @module Template/TemplateMain
 */

console.log('Template VERSION:', "1.0.0000");







var pdfCursorTools, pdfViewer, templatemod, __templateOwnerNode;

const USE_ONLY_CSS_ZOOM = false;
const TEXT_LAYER_MODE = 0; // DISABLE
const MAX_IMAGE_SIZE = 1024 * 1024;
const DEFAULT_SCALE_DELTA = 1.0;

/**
 * @description PDF문서를 로드하고 초기 셋팅을 한다.
 * 
 * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
 * @param {String} pdfFileUrl   PDF FILE URL
 * @param {Array}  userList  서명자 정보 리스트
 * @param {Array} dvOptionList  기본값 정보 리스트
 * @param {Object} importData  기존 Template에서 저장한 Json Object
 * @param {Array} langs  사용할 다국어 리스트 기본값으로 ["ko", "en"]가 들어있다.
 * @Date : 2021. 5. 31
 * @Method Name : initDocument
 */
function initDocument(ownerNode, pdfFileUrl, userList, dvOptionList, signTabShowDefOptVal, importData, langs = ["ko", "en"]) {
    __templateOwnerNode = ownerNode;
    
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.translator.fetch(langs).then(() => {
        // -> Translations are ready...
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.changeLocale(langs[0]);
    });

    let pdfContainer = __templateOwnerNode.querySelector(' #' + _Constants__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_PDF_VIEWER_CONTAINER);
    let eventBus = new pdfjsViewer.EventBus();
    pdfCursorTools = new _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_1__.PDFCursorTools({
        container: pdfContainer,
        eventBus: eventBus,
        cursorToolOnLoad: 0
    });

    pdfViewer = new pdfjsViewer.PDFViewer({
        container: pdfContainer,
        eventBus: eventBus,
        useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
        textLayerMode: TEXT_LAYER_MODE,
    });

    templatemod = new _templatemod__WEBPACK_IMPORTED_MODULE_2__.TemplateMod(pdfViewer, ownerNode);
    templatemod.appendSignTabShowOpt(signTabShowDefOptVal);
    templatemod.buildSignTabShowOpt(signTabShowDefOptVal);
    templatemod.buildFieldUserInfo(userList);
    templatemod.buildDVOptsInfo(dvOptionList);
     
    eventBus.on("pagerendered", function (evt) {
        console.log("pageRendered: ");
    });

    eventBus.on("pagechanging", function (evt) {
        console.log("pagechanging");
    });

    eventBus.on("scalechanging", function (evt) {
        console.log("scalechanging");
        changeLayerSize(evt);
    });

    eventBus.on("pagesinit", function () {
        console.log("pagesinit");
        pdfViewer.currentScale = DEFAULT_SCALE_DELTA;
        // We can use pdfViewer now, e.g. let's change default scale.
    });

    let loadingTask = pdfjsLib.getDocument({
        url: pdfFileUrl,
        cMapUrl: '/js/pdf_form/pdfjs/cmaps/',
        cMapPacked: true,
    })
    loadingTask.promise.then(function (pdfDocument) {
        pdfDocument.getData().then((data) => {
        })
        pdfViewer.currentScale = DEFAULT_SCALE_DELTA;
        pdfViewer.setDocument(pdfDocument)
        //pdfCursorTools.switchTool(1);
        templatemod.templateInit();

        if (importData === null || importData === undefined) {
            return;
        }
        checkPageViewsReady(pdfViewer.pageViewsReady, importData);
    })

    __templateOwnerNode.querySelector("#" + "Zoom-Out-Button").addEventListener("click", documentZoomOut);
    __templateOwnerNode.querySelector("#" + "Zoom-In-Button").addEventListener("click", documentZoomIn);
    __templateOwnerNode.querySelector(" .Button-Icon-Component").addEventListener("click", hideShowSidePanel);

    __templateOwnerNode.querySelectorAll(" .Editor-Component_Box > div > ul > li").forEach((el) => {
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.isEmptyObject(el.onclick)) {
            return;
        }
        el.addEventListener("click", fieldSelectTool, true);
    });

    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Left > button.Undo-Button").addEventListener("click", undoAction);
    
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Left > button.Redo-Button").addEventListener("click", redoAction);

    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Left-Button").addEventListener("click", sortFieldAligLeft);
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Center-Button").addEventListener("click", sortFieldAligHCenter);
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Right-Button").addEventListener("click", sortFieldAligRight);
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Top-Button").addEventListener("click", sortFieldAligTop);
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Middle-Button").addEventListener("click", sortFieldAligVCenter);
    __templateOwnerNode.querySelector(" .Editor-Toolbar-Group.Right  button.Align-Bottom-Button").addEventListener("click", sortFieldAligBottom);

    __templateOwnerNode.querySelector("#scaleSelectContainer").addEventListener("click", showScaleSelector);
    window.addEventListener('resize', function(event) {
        changeLayerSize(event);
    }, true);
}


/**
 * @description Template Field정보를 반환한다.
 *
 * @return {Object} Template Field 정보
 * @Date : 2021. 5. 31
 * @Method Name : getJsonData
 */
function getJsonData() {
    return templatemod.exportFieldData();
}

/**
 * @description Template에서 사용했던 데이터들을 초기화한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : releaseTemplate
 */
function releaseTemplate() {

    let targetElBtn = __templateOwnerNode.querySelector("#Editor-Component-Active-Button");
    let targetElPanel = __templateOwnerNode.querySelector("#Editor-Component");
    if (targetElBtn.classList.contains("Left-Panel-Btn-Hide-Animation")) {
        targetElBtn.classList.toggle("Left-Panel-Btn-Hide-Animation");
    }
    if (targetElPanel.classList.contains("Left-Panel-Hide-Animation")) {
        targetElPanel.classList.toggle("Left-Panel-Hide-Animation");
    }
    if (targetElBtn.classList.contains("Left-Panel-Btn-Show-Animation")) {
        targetElBtn.classList.toggle("Left-Panel-Btn-Show-Animation");
    }
    if (targetElPanel.classList.contains("Left-Panel-Show-Animation")) {
        targetElPanel.classList.toggle("Left-Panel-Show-Animation");
    }

    let templateLayer = __templateOwnerNode.querySelector("#" + _Constants__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_LAYER_NAME);
    if (templateLayer !== null) {
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.removeAllChildNode(templateLayer);
    }
    let asteriskLayer = __templateOwnerNode.querySelector("#" + _Constants__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.TEMPLATE_LAYER_ASTERISK_NAME);
    if (asteriskLayer !== null) {
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.removeAllChildNode(asteriskLayer);
    }
}

/**
 * @description Field중에 반드시 설정해야될 속성이 설정 되어있는지 체크한다.
 * @Date : 2021. 5. 31
 * @Method Name : checkTemplateFieldData
 */
function checkTemplateFieldData() {
    return templatemod.checkTemplateFieldData();
}

/**
 * @description 현재 언어를 파라미터에 맞게 변환한다.
 *
 * @param {String} locale 바꿀 언어
 * @Date : 2021. 5. 31
 * @Method Name : changeTemplateLocale
 */
function changeTemplateLocale(locale) {
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.changeLocale(locale);
    templatemod.buildFieldformerList();
}


/**
 * @description  다국어 언어 파일의 위치를 지정한다.
 * @example
 * localhost:5500/js/pdf_form/i18n의 경우  "/js/pdf_form/i18n"
 * initDocument 이전에 호출이 되어야한다.
 * @param {String} filesLocation 언어파일의 위치(절대 경로)
 * @Date : 2021. 5. 31
 * @Method Name : changeTranslatorFileLocation
 */
function changeTranslatorFileLocation(lcation) {
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.translatorFileLocation(lcation);
}

/**
 * @description  다국어 언어를 추가한다.
 * @param {String} locale 언어 이름
 * @param {Object} langData i18n/ko.json과 같은 양식으로 된 JSON을 파싱한 데이터
 * @Date : 2021. 5. 31
 * @Method Name : addTranslator
 */
function addTranslator(locale, langData) {
    _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Utils.addTranslator(locale, langData);
}

function copyField() {
    templatemod.copyObject();
}

function pasteField() {
    templatemod.pasteObject();
}

/**
 * @description Page의 높이를 계산한다.
 *
 * @param {Element} PDF.js에서 만든 Page Element : 계산할 Page Element
 * @return {Number} Page Height
 * @Date : 2021. 5. 31
 * @Method Name : calcPageHeight
 */
 function calcPageHeight(pageElement) {
    var style = pageElement.div.currentStyle || window.getComputedStyle(pageElement.div);
    const marginHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    return pageElement.height + marginHeight + paddingHeight + borderHeight;
}

/**
 * @description Pdf.js에서 pageViewsReady가 true될때 까지 체크해서 Template Field Data 추가한다.
 *
 * @param {Boolean} oldvalue pageViewsReady의 현재 데이터값
 * @param {Object} importData  추가할 Template Field Data
 * @Date : 2021. 5. 31
 * @Method Name : checkPageViewsReady
 */
function checkPageViewsReady(oldvalue, importData) {
    undefined === oldvalue && (oldvalue = pdfViewer.pageViewsReady);
    var clearcheck = setInterval(repeatcheck, 100);
    function repeatcheck() {
        return new Promise(function (resolve, reject) {
                if (pdfViewer.pageViewsReady) {
                    resolve("pageViewsReady");
                    clearInterval(clearcheck);
                }
            }).then(function (text) {
                console.log(text);
                templatemod.importFieldData(importData);
            });
    }
}

/**
 * @description PDF 페이지의 Layer사이즈가 변할 때의 처리를한다.
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : changeLayerSize
 */
 function changeLayerSize(evt) {
    let height = 0;
    pdfViewer._pages.forEach(function (element) {
        height += calcPageHeight(element);
    });
    templatemod.templateResize(evt, height);
}

/**
 * @description  문서의 배율을 축소한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentZoomOut
 */
function  documentZoomOut() {
    const currentValue = parseFloat(pdfViewer.currentScale);
    pdfViewer.currentScale = currentValue - 0.1;
    setScaleValueText(pdfViewer.currentScale);
}

/**
 * @description  문서의 배율을 확대한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentZoomIn
 */
function  documentZoomIn() {
    const currentValue = parseFloat(pdfViewer.currentScale);
    pdfViewer.currentScale = currentValue + 0.1;
    setScaleValueText(pdfViewer.currentScale);
}

/**
 * @description  문서의 배율을 설정한다.
 *
 * @param {String}  value문서의 배율
 * @Date : 2021. 5. 31
 * @Method Name : setScaleValueText
 */
 function setScaleValueText(value) {
    const currentValue = Math.floor(parseFloat(value) * 100);
     var element = __templateOwnerNode.querySelector(" #scaleSelectContainer > a");
    element.textContent = currentValue + "%";
}

/**
 * @description  사이드 패널이 보이고 있으면 숨기고 숨겨있으면 보이게한다.
 *
 * @param {Event} event event
 * @Date : 2021. 5. 31
 * @Method Name : hideShowSidePanel
 */
function hideShowSidePanel(event) {
    let targetElBtn = __templateOwnerNode.querySelector("#Editor-Component-Active-Button");
    let targetElPanel = __templateOwnerNode.querySelector("#Editor-Component");
    let arrowBtn = __templateOwnerNode.querySelector("#Editor-Component-Active-Button > .Button-Icon-Component .Arrow-Btn ");
    arrowBtn.classList.toggle("Reverse-Btn");
    if (!targetElBtn.classList.contains("Left-Panel-Btn-Hide-Animation")) {
        targetElBtn.classList.toggle("Left-Panel-Btn-Hide-Animation");
        targetElPanel.classList.toggle("Left-Panel-Hide-Animation");

    } else {
        targetElBtn.classList.toggle("Left-Panel-Btn-Show-Animation");
        targetElPanel.classList.toggle("Left-Panel-Show-Animation");
    }
}

/**
 * @description  사이드 패널이 보이고 있으면 숨기고 숨겨있으면 보이게한다.
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : hideShowSidePanel
 */
function fieldSelectTool(evt) {
    evt.stopPropagation();
    const element = evt.target.closest("li");
    const selectValue = element.getAttribute("data-index");
    templatemod.clearSelectedTool();
    if (!element.classList.contains("selected")) {
        element.classList.add("selected");
    }
    templatemod.selectTool(parseInt(selectValue));
}

/**
 * @description  undo button handler
 *
 * @param {Event} evt  event
 * @Date : 2021. 5. 31
 * @Method Name : undoAction
 */
function undoAction(evt) {
    templatemod.undoAction();
}

/**
 * @description  redo button handler
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : redoAction
 */
function redoAction(evt) {
    templatemod.redoAction();
}

/**
 * @description  Field들을 왼쪽라인에 맞춰서 정렬
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldAligLeft
 */
function sortFieldAligLeft(evt) {
    templatemod.sortFieldsAlign("left");
}

/**
 * @description  Field들을 오른쪽라인에 맞춰서 정렬
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldsAlign
 */
function sortFieldAligRight(evt) {
    templatemod.sortFieldsAlign("right");
}

/**
 * @description  Field들을 x좌표 기준의 센터라인에 맞춰서 정렬
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldAligHCenter
 */
function sortFieldAligHCenter(evt) {
    templatemod.sortFieldsAlign("hCenter");
}

/**
 * @description  Field들을 Top라인에 맞춰서 정렬
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldAligTop
 */
function sortFieldAligTop(evt) {
    templatemod.sortFieldsAlign("top");
}

/**
 * @description  Field들을 y좌표 기준의 센터라인에 맞춰서 정렬
 *
 * @param {Event} evt  event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldAligVCenter
 */
function sortFieldAligVCenter(evt) {
    templatemod.sortFieldsAlign("vCenter");
}

/**
 * @description  Field들을 Bottom라인에 맞춰서 정렬
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : sortFieldAligBottom
 */
function sortFieldAligBottom(evt) {
    templatemod.sortFieldsAlign("bottom");
}

/**
 * @description  PDF문서의 배율 Select를 보여준다.
 *
 * @param {Event} evt event
 * @Date : 2021. 5. 31
 * @Method Name : showScaleSelector
 */
function showScaleSelector(evt) {

    const targetBbox = evt.target.getBoundingClientRect();
    let scaleContainer = __templateOwnerNode.querySelector(".Scale-Seletor-Container");
    console.log(targetBbox);
    scaleContainer.style.left = targetBbox.left + "px";
    scaleContainer.style.top = targetBbox.top + "px";
    scaleContainer.style.zIndex = "-1";
    
    if (scaleContainer.classList.contains("Template-Hide")) {
        scaleContainer.classList.toggle("Template-Hide");
    }
    let scaleSelect = scaleContainer.querySelector("select");
    if (!$(scaleSelect).hasClass("select2-hidden-accessible")) {
        // Select2 has been initialized
        $(scaleSelect).select2({
            minimumResultsForSearch: Infinity,
            width: "80px"
        });
    }
    $(scaleSelect).val(pdfViewer.currentScale).trigger("change");
    $(scaleSelect).select2('open');
    $(scaleSelect).on('select2:select', function (e) {
        // Do something
        var data = e.params.data;
        pdfViewer.currentScale = data.id;
        setScaleValueText(data.id);
    });
}

function appendFontFamily(fontFamilyArr) {
    templatemod.appendFontFamily(fontFamilyArr);
}

function appendSignTabShowOpt(signTabShowDefOptVal) {
  templatemod.appendSignTabShowOpt(signTabShowDefOptVal);
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});