(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("readermodSass", [], factory);
	else if(typeof exports === 'object')
		exports["readermodSass"] = factory();
	else
		root["readermodSass"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./css/viewer.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/viewer.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/shadow.png */ "./css/images/shadow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/loading-icon.gif */ "./css/images/loading-icon.gif"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/loading.svg */ "./css/images/loading.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/treeitem-expanded.svg */ "./css/images/treeitem-expanded.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/treeitem-collapsed.svg */ "./css/images/treeitem-collapsed.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-menuArrow.svg */ "./css/images/toolbarButton-menuArrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-sidebarToggle.svg */ "./css/images/toolbarButton-sidebarToggle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-secondaryToolbarToggle.svg */ "./css/images/toolbarButton-secondaryToolbarToggle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-pageUp.svg */ "./css/images/toolbarButton-pageUp.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-pageDown.svg */ "./css/images/toolbarButton-pageDown.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-zoomOut.svg */ "./css/images/toolbarButton-zoomOut.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-zoomIn.svg */ "./css/images/toolbarButton-zoomIn.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-presentationMode.svg */ "./css/images/toolbarButton-presentationMode.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-print.svg */ "./css/images/toolbarButton-print.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-openFile.svg */ "./css/images/toolbarButton-openFile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-download.svg */ "./css/images/toolbarButton-download.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-bookmark.svg */ "./css/images/toolbarButton-bookmark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-viewThumbnail.svg */ "./css/images/toolbarButton-viewThumbnail.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-viewOutline.svg */ "./css/images/toolbarButton-viewOutline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-viewAttachments.svg */ "./css/images/toolbarButton-viewAttachments.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-viewLayers.svg */ "./css/images/toolbarButton-viewLayers.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-currentOutlineItem.svg */ "./css/images/toolbarButton-currentOutlineItem.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! images/toolbarButton-search.svg */ "./css/images/toolbarButton-search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! images/findbarButton-previous.svg */ "./css/images/findbarButton-previous.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! images/findbarButton-next.svg */ "./css/images/findbarButton-next.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-firstPage.svg */ "./css/images/secondaryToolbarButton-firstPage.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-lastPage.svg */ "./css/images/secondaryToolbarButton-lastPage.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-rotateCcw.svg */ "./css/images/secondaryToolbarButton-rotateCcw.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-rotateCw.svg */ "./css/images/secondaryToolbarButton-rotateCw.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-selectTool.svg */ "./css/images/secondaryToolbarButton-selectTool.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-handTool.svg */ "./css/images/secondaryToolbarButton-handTool.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-scrollVertical.svg */ "./css/images/secondaryToolbarButton-scrollVertical.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-scrollHorizontal.svg */ "./css/images/secondaryToolbarButton-scrollHorizontal.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-scrollWrapped.svg */ "./css/images/secondaryToolbarButton-scrollWrapped.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-spreadNone.svg */ "./css/images/secondaryToolbarButton-spreadNone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-spreadOdd.svg */ "./css/images/secondaryToolbarButton-spreadOdd.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-spreadEven.svg */ "./css/images/secondaryToolbarButton-spreadEven.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! images/secondaryToolbarButton-documentProperties.svg */ "./css/images/secondaryToolbarButton-documentProperties.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! images/loading-dark.svg */ "./css/images/loading-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! images/grab.cur */ "./css/images/grab.cur"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! images/grabbing.cur */ "./css/images/grabbing.cur"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.textLayer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;
  line-height: 1;
}

.textLayer > span {
  color: transparent;
  position: absolute;
  white-space: pre;
  cursor: text;
  transform-origin: 0% 0%;
}

.textLayer .highlight {
  margin: -1px;
  padding: 1px;
  background-color: rgba(180, 0, 170, 1);
  border-radius: 4px;
}

.textLayer .highlight.begin {
  border-radius: 4px 0 0 4px;
}

.textLayer .highlight.end {
  border-radius: 0 4px 4px 0;
}

.textLayer .highlight.middle {
  border-radius: 0;
}

.textLayer .highlight.selected {
  background-color: rgba(0, 100, 0, 1);
}

.textLayer ::-moz-selection {
  background: rgba(0, 0, 255, 1);
}

.textLayer ::selection {
  background: rgba(0, 0, 255, 1);
}

.textLayer .endOfContent {
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  right: 0;
  bottom: 0;
  z-index: -1;
  cursor: default;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.textLayer .endOfContent.active {
  top: 0;
}


.annotationLayer section {
  position: absolute;
  text-align: initial;
}

.annotationLayer .linkAnnotation > a,
.annotationLayer .buttonWidgetAnnotation.pushButton > a {
  position: absolute;
  font-size: 1em;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.annotationLayer .linkAnnotation > a:hover,
.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {
  opacity: 0.2;
  background: rgba(255, 255, 0, 1);
  box-shadow: 0 2px 10px rgba(255, 255, 0, 1);
}

.annotationLayer .textAnnotation img {
  position: absolute;
  cursor: pointer;
}

.annotationLayer .textWidgetAnnotation input,
.annotationLayer .textWidgetAnnotation textarea,
.annotationLayer .choiceWidgetAnnotation select,
.annotationLayer .buttonWidgetAnnotation.checkBox input,
.annotationLayer .buttonWidgetAnnotation.radioButton input {
  background-color: rgba(0, 54, 255, 0.13);
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: 9px;
  height: 100%;
  margin: 0;
  padding: 0 3px;
  vertical-align: top;
  width: 100%;
}

.annotationLayer .choiceWidgetAnnotation select option {
  padding: 0;
}

.annotationLayer .buttonWidgetAnnotation.radioButton input {
  border-radius: 50%;
}

.annotationLayer .textWidgetAnnotation textarea {
  font: message-box;
  font-size: 9px;
  resize: none;
}

.annotationLayer .textWidgetAnnotation input[disabled],
.annotationLayer .textWidgetAnnotation textarea[disabled],
.annotationLayer .choiceWidgetAnnotation select[disabled],
.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],
.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {
  background: none;
  border: 1px solid transparent;
  cursor: not-allowed;
}

.annotationLayer .textWidgetAnnotation input:hover,
.annotationLayer .textWidgetAnnotation textarea:hover,
.annotationLayer .choiceWidgetAnnotation select:hover,
.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,
.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {
  border: 1px solid rgba(0, 0, 0, 1);
}

.annotationLayer .textWidgetAnnotation input:focus,
.annotationLayer .textWidgetAnnotation textarea:focus,
.annotationLayer .choiceWidgetAnnotation select:focus {
  background: none;
  border: 1px solid transparent;
}

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,
.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
  background-color: rgba(0, 0, 0, 1);
  content: "";
  display: block;
  position: absolute;
}

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
  height: 80%;
  left: 45%;
  width: 1px;
}

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {
  transform: rotate(45deg);
}

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
  transform: rotate(-45deg);
}

.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
  border-radius: 50%;
  height: 50%;
  left: 30%;
  top: 20%;
  width: 50%;
}

.annotationLayer .textWidgetAnnotation input.comb {
  font-family: monospace;
  padding-left: 2px;
  padding-right: 0;
}

.annotationLayer .textWidgetAnnotation input.comb:focus {
  /*
   * Letter spacing is placed on the right side of each character. Hence, the
   * letter spacing of the last character may be placed outside the visible
   * area, causing horizontal scrolling. We avoid this by extending the width
   * when the element has focus and revert this when it loses focus.
   */
  width: 115%;
}

.annotationLayer .buttonWidgetAnnotation.checkBox input,
.annotationLayer .buttonWidgetAnnotation.radioButton input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
}

.annotationLayer .popupWrapper {
  position: absolute;
  width: 20em;
}

.annotationLayer .popup {
  position: absolute;
  z-index: 200;
  max-width: 20em;
  background-color: rgba(255, 255, 153, 1);
  box-shadow: 0 2px 5px rgba(136, 136, 136, 1);
  border-radius: 2px;
  padding: 6px;
  margin-left: 5px;
  cursor: pointer;
  font: message-box;
  font-size: 9px;
  white-space: normal;
  word-wrap: break-word;
}

.annotationLayer .popup > * {
  font-size: 9px;
}

.annotationLayer .popup h1 {
  display: inline-block;
}

.annotationLayer .popup span {
  display: inline-block;
  margin-left: 5px;
}

.annotationLayer .popup p {
  border-top: 1px solid rgba(51, 51, 51, 1);
  margin-top: 2px;
  padding-top: 2px;
}

.annotationLayer .highlightAnnotation,
.annotationLayer .underlineAnnotation,
.annotationLayer .squigglyAnnotation,
.annotationLayer .strikeoutAnnotation,
.annotationLayer .freeTextAnnotation,
.annotationLayer .lineAnnotation svg line,
.annotationLayer .squareAnnotation svg rect,
.annotationLayer .circleAnnotation svg ellipse,
.annotationLayer .polylineAnnotation svg polyline,
.annotationLayer .polygonAnnotation svg polygon,
.annotationLayer .caretAnnotation,
.annotationLayer .inkAnnotation svg polyline,
.annotationLayer .stampAnnotation,
.annotationLayer .fileAttachmentAnnotation {
  cursor: pointer;
}

.pdfViewer .canvasWrapper {
  overflow: hidden;
}

.pdfViewer .page {
  direction: ltr;
  width: 816px;
  height: 1056px;
  margin: 1px auto -8px;
  position: relative;
  overflow: visible;
  border: 9px solid transparent;
  background-clip: content-box;
  -o-border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 9 9 repeat;
     border-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 9 9 repeat;
  background-color: rgba(255, 255, 255, 1);
}

.pdfViewer.removePageBorders .page {
  margin: 0 auto 10px;
  border: none;
}

.pdfViewer.singlePageView {
  display: inline-block;
}

.pdfViewer.singlePageView .page {
  margin: 0;
  border: none;
}

.pdfViewer.scrollHorizontal,
.pdfViewer.scrollWrapped,
.spread {
  margin-left: 3.5px;
  margin-right: 3.5px;
  text-align: center;
}

.pdfViewer.scrollHorizontal,
.spread {
  white-space: nowrap;
}

.pdfViewer.removePageBorders,
.pdfViewer.scrollHorizontal .spread,
.pdfViewer.scrollWrapped .spread {
  margin-left: 0;
  margin-right: 0;
}

.spread .page,
.pdfViewer.scrollHorizontal .page,
.pdfViewer.scrollWrapped .page,
.pdfViewer.scrollHorizontal .spread,
.pdfViewer.scrollWrapped .spread {
  display: inline-block;
  vertical-align: middle;
}

.spread .page,
.pdfViewer.scrollHorizontal .page,
.pdfViewer.scrollWrapped .page {
  margin-left: -3.5px;
  margin-right: -3.5px;
}

.pdfViewer.removePageBorders .spread .page,
.pdfViewer.removePageBorders.scrollHorizontal .page,
.pdfViewer.removePageBorders.scrollWrapped .page {
  margin-left: 5px;
  margin-right: 5px;
}

.pdfViewer .page canvas {
  margin: 0;
  display: block;
}

.pdfViewer .page canvas[hidden] {
  display: none;
}

.pdfViewer .page .loadingIcon {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center no-repeat;
}

.pdfPresentationMode .pdfViewer {
  margin-left: 0;
  margin-right: 0;
}

.pdfPresentationMode .pdfViewer .page,
.pdfPresentationMode .pdfViewer .spread {
  display: block;
}

.pdfPresentationMode .pdfViewer .page,
.pdfPresentationMode .pdfViewer.removePageBorders .page {
  margin-left: auto;
  margin-right: auto;
}

.pdfPresentationMode:-webkit-full-screen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

.pdfPresentationMode:-moz-full-screen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

.pdfPresentationMode:fullscreen .pdfViewer .page {
  margin-bottom: 100%;
  border: 0;
}

:root {
  --sidebar-width: 200px;
  --sidebar-transition-duration: 200ms;
  --sidebar-transition-timing-function: ease;
  --loadingBar-end-offset: 0;

  --toolbar-icon-opacity: 0.7;
  --doorhanger-icon-opacity: 0.9;

  --main-color: rgba(12, 12, 13, 1);
  --body-bg-color: rgba(237, 237, 240, 1);
  --errorWrapper-bg-color: rgba(255, 74, 74, 1);
  --progressBar-color: rgba(10, 132, 255, 1);
  --progressBar-indeterminate-bg-color: rgba(221, 221, 222, 1);
  --progressBar-indeterminate-blend-color: rgba(116, 177, 239, 1);
  --scrollbar-color: auto;
  --scrollbar-bg-color: auto;
  --toolbar-icon-bg-color: rgba(0, 0, 0, 1);

  --sidebar-narrow-bg-color: rgba(237, 237, 240, 0.9);
  --sidebar-toolbar-bg-color: rgba(245, 246, 247, 1);
  --toolbar-bg-color: rgba(249, 249, 250, 1);
  --toolbar-border-color: rgba(204, 204, 204, 1);
  --button-hover-color: rgba(221, 222, 223, 1);
  --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
  --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
  --dropdown-btn-bg-color: rgba(215, 215, 219, 1);
  --separator-color: rgba(0, 0, 0, 0.3);
  --field-color: rgba(6, 6, 6, 1);
  --field-bg-color: rgba(255, 255, 255, 1);
  --field-border-color: rgba(187, 187, 188, 1);
  --findbar-nextprevious-btn-bg-color: rgba(227, 228, 230, 1);
  --treeitem-color: rgba(0, 0, 0, 0.8);
  --treeitem-hover-color: rgba(0, 0, 0, 0.9);
  --treeitem-selected-color: rgba(0, 0, 0, 0.9);
  --treeitem-selected-bg-color: rgba(0, 0, 0, 0.25);
  --sidebaritem-bg-color: rgba(0, 0, 0, 0.15);
  --doorhanger-bg-color: rgba(255, 255, 255, 1);
  --doorhanger-border-color: rgba(12, 12, 13, 0.2);
  --doorhanger-hover-color: rgba(237, 237, 237, 1);
  --doorhanger-separator-color: rgba(222, 222, 222, 1);
  --overlay-button-bg-color: rgba(12, 12, 13, 0.1);
  --overlay-button-hover-color: rgba(12, 12, 13, 0.3);

  --loading-icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  --treeitem-expanded-icon: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  --treeitem-collapsed-icon: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  --toolbarButton-menuArrow-icon: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  --toolbarButton-sidebarToggle-icon: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  --toolbarButton-secondaryToolbarToggle-icon: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  --toolbarButton-pageUp-icon: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  --toolbarButton-pageDown-icon: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  --toolbarButton-zoomOut-icon: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  --toolbarButton-zoomIn-icon: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  --toolbarButton-presentationMode-icon: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  --toolbarButton-print-icon: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  --toolbarButton-openFile-icon: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  --toolbarButton-download-icon: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
  --toolbarButton-bookmark-icon: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
  --toolbarButton-viewThumbnail-icon: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
  --toolbarButton-viewOutline-icon: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
  --toolbarButton-viewAttachments-icon: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
  --toolbarButton-viewLayers-icon: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
  --toolbarButton-currentOutlineItem-icon: url(${___CSS_LOADER_URL_REPLACEMENT_21___});
  --toolbarButton-search-icon: url(${___CSS_LOADER_URL_REPLACEMENT_22___});
  --findbarButton-previous-icon: url(${___CSS_LOADER_URL_REPLACEMENT_23___});
  --findbarButton-next-icon: url(${___CSS_LOADER_URL_REPLACEMENT_24___});
  --secondaryToolbarButton-firstPage-icon: url(${___CSS_LOADER_URL_REPLACEMENT_25___});
  --secondaryToolbarButton-lastPage-icon: url(${___CSS_LOADER_URL_REPLACEMENT_26___});
  --secondaryToolbarButton-rotateCcw-icon: url(${___CSS_LOADER_URL_REPLACEMENT_27___});
  --secondaryToolbarButton-rotateCw-icon: url(${___CSS_LOADER_URL_REPLACEMENT_28___});
  --secondaryToolbarButton-selectTool-icon: url(${___CSS_LOADER_URL_REPLACEMENT_29___});
  --secondaryToolbarButton-handTool-icon: url(${___CSS_LOADER_URL_REPLACEMENT_30___});
  --secondaryToolbarButton-scrollVertical-icon: url(${___CSS_LOADER_URL_REPLACEMENT_31___});
  --secondaryToolbarButton-scrollHorizontal-icon: url(${___CSS_LOADER_URL_REPLACEMENT_32___});
  --secondaryToolbarButton-scrollWrapped-icon: url(${___CSS_LOADER_URL_REPLACEMENT_33___});
  --secondaryToolbarButton-spreadNone-icon: url(${___CSS_LOADER_URL_REPLACEMENT_34___});
  --secondaryToolbarButton-spreadOdd-icon: url(${___CSS_LOADER_URL_REPLACEMENT_35___});
  --secondaryToolbarButton-spreadEven-icon: url(${___CSS_LOADER_URL_REPLACEMENT_36___});
  --secondaryToolbarButton-documentProperties-icon: url(${___CSS_LOADER_URL_REPLACEMENT_37___});
}

@media (prefers-color-scheme: dark) {
  :root {
    --main-color: rgba(249, 249, 250, 1);
    --body-bg-color: rgba(42, 42, 46, 1);
    --errorWrapper-bg-color: rgba(199, 17, 17, 1);
    --progressBar-color: rgba(0, 96, 223, 1);
    --progressBar-indeterminate-bg-color: rgba(40, 40, 43, 1);
    --progressBar-indeterminate-blend-color: rgba(20, 68, 133, 1);
    --scrollbar-color: rgba(121, 121, 123, 1);
    --scrollbar-bg-color: rgba(35, 35, 39, 1);
    --toolbar-icon-bg-color: rgba(255, 255, 255, 1);

    --sidebar-narrow-bg-color: rgba(42, 42, 46, 0.9);
    --sidebar-toolbar-bg-color: rgba(50, 50, 52, 1);
    --toolbar-bg-color: rgba(56, 56, 61, 1);
    --toolbar-border-color: rgba(12, 12, 13, 1);
    --button-hover-color: rgba(102, 102, 103, 1);
    --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);
    --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);
    --dropdown-btn-bg-color: rgba(74, 74, 79, 1);
    --separator-color: rgba(0, 0, 0, 0.3);
    --field-color: rgba(250, 250, 250, 1);
    --field-bg-color: rgba(64, 64, 68, 1);
    --field-border-color: rgba(115, 115, 115, 1);
    --findbar-nextprevious-btn-bg-color: rgba(89, 89, 89, 1);
    --treeitem-color: rgba(255, 255, 255, 0.8);
    --treeitem-hover-color: rgba(255, 255, 255, 0.9);
    --treeitem-selected-color: rgba(255, 255, 255, 0.9);
    --treeitem-selected-bg-color: rgba(255, 255, 255, 0.25);
    --sidebaritem-bg-color: rgba(255, 255, 255, 0.15);
    --doorhanger-bg-color: rgba(74, 74, 79, 1);
    --doorhanger-border-color: rgba(39, 39, 43, 1);
    --doorhanger-hover-color: rgba(93, 94, 98, 1);
    --doorhanger-separator-color: rgba(92, 92, 97, 1);
    --overlay-button-bg-color: rgba(92, 92, 97, 1);
    --overlay-button-hover-color: rgba(115, 115, 115, 1);

    /* This image is used in <input> elements, which unfortunately means that
     * the \`mask-image\` approach used with all of the other images doesn't work
     * here; hence why we still have two versions of this particular image. */
    --loading-icon: url(${___CSS_LOADER_URL_REPLACEMENT_38___});
  }
}

* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
  width: 100%;
  /* Font size is needed to make the activity bar the correct size. */
  /* font-size: 10px; */
}

body {
  height: 100%;
  width: 100%;
  background-color: var(--body-bg-color);
}

body,
input,
button,
select {
  /* font: message-box; */
  outline: none;
  scrollbar-color: var(--scrollbar-color) var(--scrollbar-bg-color);
}

.hidden {
  display: none !important;
}
[hidden] {
  display: none !important;
}

.pdfViewer.enablePermissions .textLayer > span {
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
          user-select: none !important;
  cursor: not-allowed;
}

#viewerContainer.pdfPresentationMode:-webkit-full-screen {
  top: 0;
  border-top: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -webkit-user-select: none;
          user-select: none;
}

#viewerContainer.pdfPresentationMode:-moz-full-screen {
  top: 0;
  border-top: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -moz-user-select: none;
       user-select: none;
}

#viewerContainer.pdfPresentationMode:fullscreen {
  top: 0;
  border-top: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.pdfPresentationMode:-webkit-full-screen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:-moz-full-screen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:fullscreen a:not(.internalLink) {
  display: none;
}

.pdfPresentationMode:-webkit-full-screen .textLayer > span {
  cursor: none;
}

.pdfPresentationMode:-moz-full-screen .textLayer > span {
  cursor: none;
}

.pdfPresentationMode:fullscreen .textLayer > span {
  cursor: none;
}

.pdfPresentationMode.pdfPresentationModeControls > *,
.pdfPresentationMode.pdfPresentationModeControls .textLayer > span {
  cursor: default;
}

#outerContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

#sidebarContainer {
  position: absolute;
  top: 32px;
  bottom: 0;
  width: var(--sidebar-width);
  visibility: hidden;
  z-index: 100;
  border-top: 1px solid rgba(51, 51, 51, 1);
  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}
html[dir="ltr"] #sidebarContainer {
  transition-property: left;
  left: calc(0px - var(--sidebar-width));
}
html[dir="rtl"] #sidebarContainer {
  transition-property: right;
  right: calc(0px - var(--sidebar-width));
}

#outerContainer.sidebarResizing #sidebarContainer {
  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */
  transition-duration: 0s;
  /* Prevent e.g. the thumbnails being selected when the sidebar is resized. */
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

#outerContainer.sidebarMoving #sidebarContainer,
#outerContainer.sidebarOpen #sidebarContainer {
  visibility: visible;
}
html[dir="ltr"] #outerContainer.sidebarOpen #sidebarContainer {
  left: 0;
}
html[dir="rtl"] #outerContainer.sidebarOpen #sidebarContainer {
  right: 0;
}

#mainContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px;
}

#sidebarContent {
  top: 32px;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
html[dir="ltr"] #sidebarContent {
  left: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}
html[dir="rtl"] #sidebarContent {
  right: 0;
  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25);
}

#viewerContainer {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 32px;
  right: 0;
  bottom: 0;
  left: 0;
  outline: none;
}
#viewerContainer:not(.pdfPresentationMode) {
  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}

#outerContainer.sidebarResizing #viewerContainer {
  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */
  transition-duration: 0s;
}

html[dir="ltr"]
  #outerContainer.sidebarOpen
  #viewerContainer:not(.pdfPresentationMode) {
  transition-property: left;
  left: var(--sidebar-width);
}
html[dir="rtl"]
  #outerContainer.sidebarOpen
  #viewerContainer:not(.pdfPresentationMode) {
  transition-property: right;
  right: var(--sidebar-width);
}

.Main-Container .toolbar {
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  cursor: default;
}

#toolbarContainer {
  width: 100%;
}

#toolbarSidebar {
  width: 100%;
  height: 32px;
  background-color: var(--sidebar-toolbar-bg-color);
}
html[dir="ltr"] #toolbarSidebar {
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25), 0 1px 0 rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.1);
}
html[dir="rtl"] #toolbarSidebar {
  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25), 0 1px 0 rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.1);
}

html[dir="ltr"] #toolbarSidebar .toolbarButton {
  margin-right: 2px !important;
}
html[dir="rtl"] #toolbarSidebar .toolbarButton {
  margin-left: 2px !important;
}

html[dir="ltr"] #toolbarSidebarRight .toolbarButton {
  margin-right: 3px !important;
}
html[dir="rtl"] #toolbarSidebarRight .toolbarButton {
  margin-left: 3px !important;
}

#sidebarResizer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 6px;
  z-index: 200;
  cursor: ew-resize;
}
html[dir="ltr"] #sidebarResizer {
  right: -6px;
}
html[dir="rtl"] #sidebarResizer {
  left: -6px;
}

#toolbarContainer,
.findbar,
.secondaryToolbar {
  position: relative;
  height: 32px;
  background-color: var(--toolbar-bg-color);
  box-shadow: 0 1px 0 var(--toolbar-border-color);
}

#toolbarViewer {
  height: 32px;
}

#loadingBar {
  position: absolute;
  height: 4px;
  background-color: var(--body-bg-color);
  border-bottom: 1px solid var(--toolbar-border-color);

  transition-duration: var(--sidebar-transition-duration);
  transition-timing-function: var(--sidebar-transition-timing-function);
}
html[dir="ltr"] #loadingBar {
  transition-property: left;
  left: 0;
  right: var(--loadingBar-end-offset);
}
html[dir="rtl"] #loadingBar {
  transition-property: right;
  left: var(--loadingBar-end-offset);
  right: 0;
}

html[dir="ltr"] #outerContainer.sidebarOpen #loadingBar {
  left: var(--sidebar-width);
}
html[dir="rtl"] #outerContainer.sidebarOpen #loadingBar {
  right: var(--sidebar-width);
}

#outerContainer.sidebarResizing #loadingBar {
  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */
  transition-duration: 0s;
}

#loadingBar .progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: var(--progressBar-color);
  overflow: hidden;
  transition: width 200ms;
}

@-webkit-keyframes progressIndeterminate {
  0% {
    left: -142px;
  }
  100% {
    left: 0;
  }
}

@keyframes progressIndeterminate {
  0% {
    left: -142px;
  }
  100% {
    left: 0;
  }
}

#loadingBar .progress.indeterminate {
  background-color: var(--progressBar-indeterminate-bg-color);
  transition: none;
}

#loadingBar .progress.indeterminate .glimmer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% + 150px);
  background: repeating-linear-gradient(
    135deg,
    var(--progressBar-indeterminate-blend-color) 0,
    var(--progressBar-indeterminate-bg-color) 5px,
    var(--progressBar-indeterminate-bg-color) 45px,
    var(--progressBar-color) 55px,
    var(--progressBar-color) 95px,
    var(--progressBar-indeterminate-blend-color) 100px
  );
  -webkit-animation: progressIndeterminate 1s linear infinite;
          animation: progressIndeterminate 1s linear infinite;
}

.findbar,
.secondaryToolbar {
  top: 32px;
  position: absolute;
  z-index: 10000;
  height: auto;
  min-width: 16px;
  padding: 0 4px;
  margin: 4px 2px;
  color: rgba(217, 217, 217, 1);
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  cursor: default;
}

.findbar {
  min-width: 300px;
  background-color: var(--toolbar-bg-color);
}
.findbar > div {
  height: 32px;
}
.findbar.wrapContainers > div {
  clear: both;
}
.findbar.wrapContainers > div#findbarMessageContainer {
  height: auto;
}
html[dir="ltr"] .findbar {
  left: 64px;
}
html[dir="rtl"] .findbar {
  right: 64px;
}

.findbar .splitToolbarButton {
  margin-top: 3px;
}
html[dir="ltr"] .findbar .splitToolbarButton {
  margin-left: 0;
  margin-right: 5px;
}
html[dir="rtl"] .findbar .splitToolbarButton {
  margin-left: 5px;
  margin-right: 0;
}

.findbar .splitToolbarButton > .toolbarButton {
  background-color: var(--findbar-nextprevious-btn-bg-color);
  border-radius: 0;
  height: 26px;
  border-top: 1px solid var(--field-border-color);
  border-bottom: 1px solid var(--field-border-color);
}

.findbar .splitToolbarButton > .toolbarButton::before {
  top: 5px;
}

.findbar .splitToolbarButton > .findNext {
  width: 29px;
}
html[dir="ltr"] .findbar .splitToolbarButton > .findNext {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  border-right: 1px solid var(--field-border-color);
}
html[dir="rtl"] .findbar .splitToolbarButton > .findNext {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-left: 1px solid var(--field-border-color);
}

.findbar input[type="checkbox"] {
  pointer-events: none;
}

.findbar label {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.findbar label:hover,
.findbar input:focus + label {
  background-color: var(--button-hover-color);
}

html[dir="ltr"] #findInput {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
html[dir="rtl"] #findInput {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.findbar .toolbarField[type="checkbox"]:checked + .toolbarLabel {
  background-color: var(--toggled-btn-bg-color) !important;
}

#findInput {
  width: 200px;
}
#findInput::-webkit-input-placeholder {
  color: rgba(191, 191, 191, 1);
}
#findInput::-moz-placeholder {
  font-style: normal;
}
#findInput::placeholder {
  font-style: normal;
}
#findInput[data-status="pending"] {
  background-image: var(--loading-icon);
  background-repeat: no-repeat;
  background-position: 98%;
}
html[dir="rtl"] #findInput[data-status="pending"] {
  background-position: 3px;
}
#findInput[data-status="notFound"] {
  background-color: rgba(255, 102, 102, 1);
}

.secondaryToolbar {
  padding: 6px 0 10px;
  height: auto;
  z-index: 30000;
  background-color: var(--doorhanger-bg-color);
}
html[dir="ltr"] .secondaryToolbar {
  right: 4px;
}
html[dir="rtl"] .secondaryToolbar {
  left: 4px;
}

#secondaryToolbarButtonContainer {
  max-width: 220px;
  max-height: 400px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: -4px;
}

#secondaryToolbarButtonContainer.hiddenScrollModeButtons > .scrollModeButtons,
#secondaryToolbarButtonContainer.hiddenSpreadModeButtons > .spreadModeButtons {
  display: none !important;
}

.doorHanger,
.doorHangerRight {
  border-radius: 2px;
  box-shadow: 0 1px 5px var(--doorhanger-border-color),
    0 0 0 1px var(--doorhanger-border-color);
}
.doorHanger:after,
.doorHanger:before,
.doorHangerRight:after,
.doorHangerRight:before {
  bottom: 100%;
  border: solid rgba(0, 0, 0, 0);
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.doorHanger:after,
.doorHangerRight:after {
  border-width: 8px;
}
.doorHanger:after {
  border-bottom-color: var(--toolbar-bg-color);
}
.doorHangerRight:after {
  border-bottom-color: var(--doorhanger-bg-color);
}
.doorHanger:before,
.doorHangerRight:before {
  border-bottom-color: var(--doorhanger-border-color);
  border-width: 9px;
}

html[dir="ltr"] .doorHanger:after,
html[dir="rtl"] .doorHangerRight:after {
  left: 10px;
  margin-left: -8px;
}

html[dir="ltr"] .doorHanger:before,
html[dir="rtl"] .doorHangerRight:before {
  left: 10px;
  margin-left: -9px;
}

html[dir="rtl"] .doorHanger:after,
html[dir="ltr"] .doorHangerRight:after {
  right: 10px;
  margin-right: -8px;
}

html[dir="rtl"] .doorHanger:before,
html[dir="ltr"] .doorHangerRight:before {
  right: 10px;
  margin-right: -9px;
}

#findResultsCount {
  background-color: rgba(217, 217, 217, 1);
  color: rgba(82, 82, 82, 1);
  text-align: center;
  padding: 3px 4px;
  margin: 5px;
}

#findMsg {
  color: rgba(251, 0, 0, 1);
}
#findMsg:empty {
  display: none;
}

#toolbarViewerMiddle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

html[dir="ltr"] #toolbarViewerLeft,
html[dir="rtl"] #toolbarViewerRight,
html[dir="ltr"] #toolbarSidebarLeft,
html[dir="rtl"] #toolbarSidebarRight {
  float: left;
}
html[dir="ltr"] #toolbarViewerRight,
html[dir="rtl"] #toolbarViewerLeft,
html[dir="ltr"] #toolbarSidebarRight,
html[dir="rtl"] #toolbarSidebarLeft {
  float: right;
}
html[dir="ltr"] #toolbarViewerLeft > *,
html[dir="ltr"] #toolbarViewerMiddle > *,
html[dir="ltr"] #toolbarViewerRight > *,
html[dir="ltr"] #toolbarSidebarLeft *,
html[dir="ltr"] #toolbarSidebarRight *,
html[dir="ltr"] .findbar * {
  position: relative;
  float: left;
}
html[dir="rtl"] #toolbarViewerLeft > *,
html[dir="rtl"] #toolbarViewerMiddle > *,
html[dir="rtl"] #toolbarViewerRight > *,
html[dir="rtl"] #toolbarSidebarLeft *,
html[dir="rtl"] #toolbarSidebarRight *,
html[dir="rtl"] .findbar * {
  position: relative;
  float: right;
}

.splitToolbarButton {
  margin: 2px 2px 0;
  display: inline-block;
}
html[dir="ltr"] .splitToolbarButton > .toolbarButton {
  float: left;
}
html[dir="rtl"] .splitToolbarButton > .toolbarButton {
  float: right;
}

.toolbarButton,
.secondaryToolbarButton,
.overlayButton {
  border: 0 none;
  background: none;
  width: 28px;
  height: 28px;
}
.overlayButton {
  background-color: var(--overlay-button-bg-color);
}

.overlayButton:hover,
.overlayButton:focus {
  background-color: var(--overlay-button-hover-color);
}

.toolbarButton > span {
  display: inline-block;
  width: 0;
  height: 0;
  overflow: hidden;
}

.toolbarButton[disabled],
.secondaryToolbarButton[disabled],
.overlayButton[disabled] {
  opacity: 0.5;
}

.splitToolbarButton.toggled .toolbarButton {
  margin: 0;
}

.splitToolbarButton > .toolbarButton:hover,
.splitToolbarButton > .toolbarButton:focus,
.dropdownToolbarButton:hover,
.toolbarButton.textButton:hover,
.toolbarButton.textButton:focus {
  background-color: var(--button-hover-color);
  z-index: 199;
}
.splitToolbarButton > .toolbarButton {
  position: relative;
}
html[dir="ltr"] .splitToolbarButton > .toolbarButton:first-child,
html[dir="rtl"] .splitToolbarButton > .toolbarButton:last-child {
  margin: 0;
}
html[dir="ltr"] .splitToolbarButton > .toolbarButton:last-child,
html[dir="rtl"] .splitToolbarButton > .toolbarButton:first-child {
  margin: 0;
}
.splitToolbarButtonSeparator {
  padding: 10px 0;
  width: 1px;
  background-color: var(--separator-color);
  z-index: 99;
  display: inline-block;
  margin: 4px 0;
}

.findbar .splitToolbarButtonSeparator {
  background-color: var(--field-border-color);
  margin: 0;
  padding: 13px 0;
}

html[dir="ltr"] .splitToolbarButtonSeparator {
  float: left;
}
html[dir="rtl"] .splitToolbarButtonSeparator {
  float: right;
}

.toolbarButton,
.dropdownToolbarButton,
.secondaryToolbarButton,
.overlayButton {
  min-width: 16px;
  margin: 2px 1px;
  padding: 2px 6px 0;
  border: none;
  border-radius: 2px;
  color: var(--main-color);
  font-size: 12px;
  line-height: 14px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  box-sizing: border-box;
}

html[dir="ltr"] #toolbarViewerLeft > .toolbarButton:first-child,
html[dir="rtl"] #toolbarViewerRight > .toolbarButton:last-child {
  margin-left: 2px;
}

html[dir="ltr"] #toolbarViewerRight > .toolbarButton:last-child,
html[dir="rtl"] #toolbarViewerLeft > .toolbarButton:first-child {
  margin-right: 2px;
}
.toolbarButton:hover,
.toolbarButton:focus {
  background-color: var(--button-hover-color);
}
.secondaryToolbarButton:hover,
.secondaryToolbarButton:focus {
  background-color: var(--doorhanger-hover-color);
}

.toolbarButton.toggled,
.splitToolbarButton.toggled > .toolbarButton.toggled,
.secondaryToolbarButton.toggled {
  background-color: var(--toggled-btn-bg-color);
}

.toolbarButton.toggled:hover:active,
.splitToolbarButton.toggled > .toolbarButton.toggled:hover:active,
.secondaryToolbarButton.toggled:hover:active {
  background-color: var(--toggled-hover-active-btn-color);
}

.dropdownToolbarButton {
  width: 140px;
  padding: 0;
  overflow: hidden;
  background-color: var(--dropdown-btn-bg-color);
  margin-top: 2px !important;
}
.dropdownToolbarButton::after {
  top: 6px;
  pointer-events: none;

  -webkit-mask-image: var(--toolbarButton-menuArrow-icon);
  mask-image: var(--toolbarButton-menuArrow-icon);
}
html[dir="ltr"] .dropdownToolbarButton::after {
  right: 7px;
}
html[dir="rtl"] .dropdownToolbarButton::after {
  left: 7px;
}

.dropdownToolbarButton > select {
  width: 162px;
  height: 28px;
  font-size: 12px;
  color: var(--main-color);
  margin: 0;
  padding: 1px 0 2px;
  border: none;
  background-color: var(--dropdown-btn-bg-color);
}
html[dir="ltr"] .dropdownToolbarButton > select {
  padding-left: 4px;
}
html[dir="rtl"] .dropdownToolbarButton > select {
  padding-right: 4px;
}
.dropdownToolbarButton > select:hover {
  background-color: var(--button-hover-color);
}

.dropdownToolbarButton > select:focus {
  background-color: var(--button-hover-color);
}

.dropdownToolbarButton > select > option {
  background: var(--doorhanger-bg-color);
}

#customScaleOption {
  display: none;
}

#pageWidthOption {
  border-bottom: 1px rgba(255, 255, 255, 0.5) solid;
}

.toolbarButtonSpacer {
  width: 30px;
  display: inline-block;
  height: 1px;
}

.toolbarButton::before,
.secondaryToolbarButton::before,
.dropdownToolbarButton::after,
.treeItemToggler::before {
  /* All matching images have a size of 16x16
   * All relevant containers have a size of 28x28 */
  position: absolute;
  display: inline-block;
  width: 16px;
  height: 16px;

  content: "";
  background-color: var(--toolbar-icon-bg-color);
  -webkit-mask-size: cover;
  mask-size: cover;
}

.toolbarButton::before {
  opacity: var(--toolbar-icon-opacity);
  top: 6px;
  left: 6px;
}

.secondaryToolbarButton::before {
  opacity: var(--doorhanger-icon-opacity);
  top: 5px;
}
html[dir="ltr"] .secondaryToolbarButton::before {
  left: 12px;
}
html[dir="rtl"] .secondaryToolbarButton::before {
  right: 12px;
}

.toolbarButton#sidebarToggle::before {
  -webkit-mask-image: var(--toolbarButton-sidebarToggle-icon);
  mask-image: var(--toolbarButton-sidebarToggle-icon);
}
html[dir="rtl"] .toolbarButton#sidebarToggle::before {
  transform: scaleX(-1);
}

.toolbarButton#secondaryToolbarToggle::before {
  -webkit-mask-image: var(--toolbarButton-secondaryToolbarToggle-icon);
  mask-image: var(--toolbarButton-secondaryToolbarToggle-icon);
}
html[dir="rtl"] .toolbarButton#secondaryToolbarToggle::before {
  transform: scaleX(-1);
}

.toolbarButton.findPrevious::before {
  -webkit-mask-image: var(--findbarButton-previous-icon);
  mask-image: var(--findbarButton-previous-icon);
}

.toolbarButton.findNext::before {
  -webkit-mask-image: var(--findbarButton-next-icon);
  mask-image: var(--findbarButton-next-icon);
}

.toolbarButton.pageUp::before {
  -webkit-mask-image: var(--toolbarButton-pageUp-icon);
  mask-image: var(--toolbarButton-pageUp-icon);
}

.toolbarButton.pageDown::before {
  -webkit-mask-image: var(--toolbarButton-pageDown-icon);
  mask-image: var(--toolbarButton-pageDown-icon);
}

.toolbarButton.zoomOut::before {
  -webkit-mask-image: var(--toolbarButton-zoomOut-icon);
  mask-image: var(--toolbarButton-zoomOut-icon);
}

.toolbarButton.zoomIn::before {
  -webkit-mask-image: var(--toolbarButton-zoomIn-icon);
  mask-image: var(--toolbarButton-zoomIn-icon);
}

.toolbarButton.presentationMode::before,
.secondaryToolbarButton.presentationMode::before {
  -webkit-mask-image: var(--toolbarButton-presentationMode-icon);
  mask-image: var(--toolbarButton-presentationMode-icon);
}

.toolbarButton.print::before,
.secondaryToolbarButton.print::before {
  -webkit-mask-image: var(--toolbarButton-print-icon);
  mask-image: var(--toolbarButton-print-icon);
}

.toolbarButton.openFile::before,
.secondaryToolbarButton.openFile::before {
  -webkit-mask-image: var(--toolbarButton-openFile-icon);
  mask-image: var(--toolbarButton-openFile-icon);
}

.toolbarButton.download::before,
.secondaryToolbarButton.download::before {
  -webkit-mask-image: var(--toolbarButton-download-icon);
  mask-image: var(--toolbarButton-download-icon);
}

.secondaryToolbarButton.bookmark {
  padding-top: 6px;
  text-decoration: none;
}

.bookmark[href="#"] {
  opacity: 0.5;
  pointer-events: none;
}

.toolbarButton.bookmark::before,
.secondaryToolbarButton.bookmark::before {
  -webkit-mask-image: var(--toolbarButton-bookmark-icon);
  mask-image: var(--toolbarButton-bookmark-icon);
}

#viewThumbnail.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-viewThumbnail-icon);
  mask-image: var(--toolbarButton-viewThumbnail-icon);
}

#viewOutline.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-viewOutline-icon);
  mask-image: var(--toolbarButton-viewOutline-icon);
}
html[dir="rtl"] #viewOutline.toolbarButton::before {
  transform: scaleX(-1);
}

#viewAttachments.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-viewAttachments-icon);
  mask-image: var(--toolbarButton-viewAttachments-icon);
}

#viewLayers.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-viewLayers-icon);
  mask-image: var(--toolbarButton-viewLayers-icon);
}

#currentOutlineItem.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-currentOutlineItem-icon);
  mask-image: var(--toolbarButton-currentOutlineItem-icon);
}
html[dir="rtl"] #currentOutlineItem.toolbarButton::before {
  transform: scaleX(-1);
}

#viewFind.toolbarButton::before {
  -webkit-mask-image: var(--toolbarButton-search-icon);
  mask-image: var(--toolbarButton-search-icon);
}

.toolbarButton.pdfSidebarNotification::after {
  position: absolute;
  display: inline-block;
  top: 1px;
  /* Create a filled circle, with a diameter of 9 pixels, using only CSS: */
  content: "";
  background-color: rgba(112, 219, 85, 1);
  height: 9px;
  width: 9px;
  border-radius: 50%;
}
html[dir="ltr"] .toolbarButton.pdfSidebarNotification::after {
  left: 17px;
}
html[dir="rtl"] .toolbarButton.pdfSidebarNotification::after {
  right: 17px;
}

.secondaryToolbarButton {
  position: relative;
  margin: 0;
  padding: 0 0 1px;
  height: auto;
  min-height: 26px;
  width: auto;
  min-width: 100%;
  white-space: normal;
  border-radius: 0;
  box-sizing: border-box;
}
html[dir="ltr"] .secondaryToolbarButton {
  padding-left: 36px;
  text-align: left;
}
html[dir="rtl"] .secondaryToolbarButton {
  padding-right: 36px;
  text-align: right;
}

html[dir="ltr"] .secondaryToolbarButton > span {
  padding-right: 4px;
}
html[dir="rtl"] .secondaryToolbarButton > span {
  padding-left: 4px;
}

.secondaryToolbarButton.firstPage::before {
  -webkit-mask-image: var(--secondaryToolbarButton-firstPage-icon);
  mask-image: var(--secondaryToolbarButton-firstPage-icon);
}

.secondaryToolbarButton.lastPage::before {
  -webkit-mask-image: var(--secondaryToolbarButton-lastPage-icon);
  mask-image: var(--secondaryToolbarButton-lastPage-icon);
}

.secondaryToolbarButton.rotateCcw::before {
  -webkit-mask-image: var(--secondaryToolbarButton-rotateCcw-icon);
  mask-image: var(--secondaryToolbarButton-rotateCcw-icon);
}

.secondaryToolbarButton.rotateCw::before {
  -webkit-mask-image: var(--secondaryToolbarButton-rotateCw-icon);
  mask-image: var(--secondaryToolbarButton-rotateCw-icon);
}

.secondaryToolbarButton.selectTool::before {
  -webkit-mask-image: var(--secondaryToolbarButton-selectTool-icon);
  mask-image: var(--secondaryToolbarButton-selectTool-icon);
}

.secondaryToolbarButton.handTool::before {
  -webkit-mask-image: var(--secondaryToolbarButton-handTool-icon);
  mask-image: var(--secondaryToolbarButton-handTool-icon);
}

.secondaryToolbarButton.scrollVertical::before {
  -webkit-mask-image: var(--secondaryToolbarButton-scrollVertical-icon);
  mask-image: var(--secondaryToolbarButton-scrollVertical-icon);
}

.secondaryToolbarButton.scrollHorizontal::before {
  -webkit-mask-image: var(--secondaryToolbarButton-scrollHorizontal-icon);
  mask-image: var(--secondaryToolbarButton-scrollHorizontal-icon);
}

.secondaryToolbarButton.scrollWrapped::before {
  -webkit-mask-image: var(--secondaryToolbarButton-scrollWrapped-icon);
  mask-image: var(--secondaryToolbarButton-scrollWrapped-icon);
}

.secondaryToolbarButton.spreadNone::before {
  -webkit-mask-image: var(--secondaryToolbarButton-spreadNone-icon);
  mask-image: var(--secondaryToolbarButton-spreadNone-icon);
}

.secondaryToolbarButton.spreadOdd::before {
  -webkit-mask-image: var(--secondaryToolbarButton-spreadOdd-icon);
  mask-image: var(--secondaryToolbarButton-spreadOdd-icon);
}

.secondaryToolbarButton.spreadEven::before {
  -webkit-mask-image: var(--secondaryToolbarButton-spreadEven-icon);
  mask-image: var(--secondaryToolbarButton-spreadEven-icon);
}

.secondaryToolbarButton.documentProperties::before {
  -webkit-mask-image: var(--secondaryToolbarButton-documentProperties-icon);
  mask-image: var(--secondaryToolbarButton-documentProperties-icon);
}

.verticalToolbarSeparator {
  display: block;
  padding: 11px 0;
  margin: 5px 2px;
  width: 1px;
  background-color: var(--separator-color);
}
html[dir="ltr"] .verticalToolbarSeparator {
  margin-left: 2px;
}
html[dir="rtl"] .verticalToolbarSeparator {
  margin-right: 2px;
}

.horizontalToolbarSeparator {
  display: block;
  margin: 6px 0 5px;
  height: 1px;
  width: 100%;
  border-top: 1px solid var(--doorhanger-separator-color);
}

.toolbarField {
  padding: 4px 7px;
  margin: 3px 0;
  border-radius: 2px;
  background-color: var(--field-bg-color);
  background-clip: padding-box;
  border-width: 1px;
  border-style: solid;
  border-color: var(--field-border-color);
  box-shadow: none;
  color: var(--field-color);
  font-size: 12px;
  line-height: 16px;
  outline-style: none;
}

.toolbarField[type="checkbox"] {
  opacity: 0;
  position: absolute !important;
  left: 0;
}

html[dir="ltr"] .toolbarField[type="checkbox"] {
  margin: 10px 0 3px 7px;
}

html[dir="rtl"] .toolbarField[type="checkbox"] {
  margin: 10px 7px 3px 0;
}

.toolbarField.pageNumber {
  -moz-appearance: textfield; /* hides the spinner in moz */
  min-width: 16px;
  text-align: right;
  width: 40px;
}

.toolbarField.pageNumber.visiblePageIsLoading {
  background-image: var(--loading-icon);
  background-repeat: no-repeat;
  background-position: 3px;
}

.toolbarField.pageNumber::-webkit-inner-spin-button,
.toolbarField.pageNumber::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.toolbarField:focus {
  border-color: #0a84ff;
}

.toolbarLabel {
  min-width: 16px;
  padding: 6px;
  margin: 2px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 2px;
  color: var(--main-color);
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
}

html[dir="ltr"] #numPages.toolbarLabel {
  padding-left: 2px;
}
html[dir="rtl"] #numPages.toolbarLabel {
  padding-right: 2px;
}

#thumbnailView {
  position: absolute;
  width: calc(100% - 60px);
  top: 0;
  bottom: 0;
  padding: 10px 30px 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#thumbnailView > a:active,
#thumbnailView > a:focus {
  outline: 0;
}

.thumbnail {
  margin: 0 10px 5px;
}
html[dir="ltr"] .thumbnail {
  float: left;
}
html[dir="rtl"] .thumbnail {
  float: right;
}

#thumbnailView > a:last-of-type > .thumbnail {
  margin-bottom: 10px;
}

#thumbnailView > a:last-of-type > .thumbnail:not([data-loaded]) {
  margin-bottom: 9px;
}

.thumbnail:not([data-loaded]) {
  border: 1px dashed rgba(132, 132, 132, 1);
  margin: -1px 9px 4px;
}

.thumbnailImage {
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  z-index: 99;
  background-color: rgba(255, 255, 255, 1);
  background-clip: content-box;
}

.thumbnailSelectionRing {
  border-radius: 2px;
  padding: 7px;
}

a:focus > .thumbnail > .thumbnailSelectionRing > .thumbnailImage,
.thumbnail:hover > .thumbnailSelectionRing > .thumbnailImage {
  opacity: 0.9;
}

a:focus > .thumbnail > .thumbnailSelectionRing,
.thumbnail:hover > .thumbnailSelectionRing {
  background-color: var(--sidebaritem-bg-color);
  background-clip: padding-box;
  color: rgba(255, 255, 255, 0.9);
}

.thumbnail.selected > .thumbnailSelectionRing > .thumbnailImage {
  opacity: 1;
}

.thumbnail.selected > .thumbnailSelectionRing {
  background-color: var(--sidebaritem-bg-color);
  background-clip: padding-box;
  color: rgba(255, 255, 255, 1);
}

#outlineView,
#attachmentsView,
#layersView {
  position: absolute;
  width: calc(100% - 8px);
  top: 0;
  bottom: 0;
  padding: 4px 4px 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

html[dir="ltr"] .treeWithDeepNesting > .treeItem,
html[dir="ltr"] .treeItem > .treeItems {
  margin-left: 20px;
}

html[dir="rtl"] .treeWithDeepNesting > .treeItem,
html[dir="rtl"] .treeItem > .treeItems {
  margin-right: 20px;
}

.treeItem > a {
  text-decoration: none;
  display: inline-block;
  min-width: 95%;
  /* Subtract the right padding (left, in RTL mode) of the container: */
  min-width: calc(100% - 4px);
  height: auto;
  margin-bottom: 1px;
  border-radius: 2px;
  color: var(--treeitem-color);
  font-size: 13px;
  line-height: 15px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  white-space: normal;
  cursor: pointer;
}
html[dir="ltr"] .treeItem > a {
  padding: 2px 0 5px 4px;
}
html[dir="rtl"] .treeItem > a {
  padding: 2px 4px 5px 0;
}

#layersView .treeItem > a > * {
  cursor: pointer;
}
html[dir="ltr"] #layersView .treeItem > a > label {
  padding-left: 4px;
}
html[dir="rtl"] #layersView .treesItem > a > label {
  padding-right: 4px;
}

.treeItemToggler {
  position: relative;
  height: 0;
  width: 0;
  color: rgba(255, 255, 255, 0.5);
}
.treeItemToggler::before {
  -webkit-mask-image: var(--treeitem-expanded-icon);
  mask-image: var(--treeitem-expanded-icon);
}
.treeItemToggler.treeItemsHidden::before {
  -webkit-mask-image: var(--treeitem-collapsed-icon);
  mask-image: var(--treeitem-collapsed-icon);
}
html[dir="rtl"] .treeItemToggler.treeItemsHidden::before {
  transform: scaleX(-1);
}
.treeItemToggler.treeItemsHidden ~ .treeItems {
  display: none;
}
html[dir="ltr"] .treeItemToggler {
  float: left;
}
html[dir="rtl"] .treeItemToggler {
  float: right;
}
html[dir="ltr"] .treeItemToggler::before {
  right: 4px;
}
html[dir="rtl"] .treeItemToggler::before {
  left: 4px;
}

.treeItem.selected > a {
  background-color: var(--treeitem-selected-bg-color);
  color: var(--treeitem-selected-color);
}

.treeItemToggler:hover,
.treeItemToggler:hover + a,
.treeItemToggler:hover ~ .treeItems,
.treeItem > a:hover {
  background-color: var(--sidebaritem-bg-color);
  background-clip: padding-box;
  border-radius: 2px;
  color: var(--treeitem-hover-color);
}

/* TODO: file FF bug to support ::-moz-selection:window-inactive
   so we can override the opaque grey background when the window is inactive;
   see https://bugzilla.mozilla.org/show_bug.cgi?id=706209 */
::-moz-selection {
  background: rgba(0, 0, 255, 0.3);
}
::selection {
  background: rgba(0, 0, 255, 0.3);
}

#errorWrapper {
  background: none repeat scroll 0 0 var(--errorWrapper-bg-color);
  color: var(--main-color);
  left: 0;
  position: absolute;
  right: 0;
  z-index: 1000;
  padding: 3px 6px;
}

#errorMessageLeft {
  float: left;
}

#errorMessageRight {
  float: right;
}

#errorMoreInfo {
  background-color: var(--field-bg-color);
  color: var(--field-color);
  border: 1px solid var(--field-border-color);
  padding: 3px;
  margin: 3px;
  width: 98%;
}

.overlayButton {
  width: auto;
  margin: 3px 4px 2px !important;
  padding: 2px 11px;
}

#overlayContainer {
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 40000;
}
#overlayContainer > * {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#overlayContainer > .container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

#overlayContainer > .container > .dialog {
  display: inline-block;
  padding: 15px;
  border-spacing: 4px;
  color: var(--main-color);
  font-size: 12px;
  line-height: 14px;
  background-color: var(--doorhanger-bg-color);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.dialog > .row {
  display: table-row;
}

.dialog > .row > * {
  display: table-cell;
}

.dialog .toolbarField {
  margin: 5px 0;
}

.dialog .separator {
  display: block;
  margin: 4px 0;
  height: 1px;
  width: 100%;
  background-color: var(--separator-color);
}

.dialog .buttonRow {
  text-align: center;
  vertical-align: middle;
}

.dialog :link {
  color: rgba(255, 255, 255, 1);
}

#passwordOverlay > .dialog {
  text-align: center;
}
#passwordOverlay .toolbarField {
  width: 200px;
}

#documentPropertiesOverlay > .dialog {
  text-align: left;
}
#documentPropertiesOverlay .row > * {
  min-width: 100px;
}
html[dir="ltr"] #documentPropertiesOverlay .row > * {
  text-align: left;
}
html[dir="rtl"] #documentPropertiesOverlay .row > * {
  text-align: right;
}
#documentPropertiesOverlay .row > span {
  width: 125px;
  word-wrap: break-word;
}
#documentPropertiesOverlay .row > p {
  max-width: 225px;
  word-wrap: break-word;
}
#documentPropertiesOverlay .buttonRow {
  margin-top: 10px;
}

.clearBoth {
  clear: both;
}

.fileInput {
  background: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  margin-top: 5px;
  visibility: hidden;
  position: fixed;
  right: 0;
  top: 0;
}

#PDFBug {
  background: none repeat scroll 0 0 rgba(255, 255, 255, 1);
  border: 1px solid rgba(102, 102, 102, 1);
  position: fixed;
  top: 32px;
  right: 0;
  bottom: 0;
  font-size: 10px;
  padding: 0;
  width: 300px;
}
#PDFBug .controls {
  background: rgba(238, 238, 238, 1);
  border-bottom: 1px solid rgba(102, 102, 102, 1);
  padding: 3px;
}
#PDFBug .panels {
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 27px;
}
#PDFBug .panels > div {
  padding: 5px;
}
#PDFBug button.active {
  font-weight: bold;
}
.debuggerShowText {
  background: none repeat scroll 0 0 rgba(255, 255, 0, 1);
  color: rgba(0, 0, 255, 1);
}
.debuggerHideText:hover {
  background: none repeat scroll 0 0 rgba(255, 255, 0, 1);
}
#PDFBug .stats {
  font-family: courier;
  font-size: 10px;
  white-space: pre;
}
#PDFBug .stats .title {
  font-weight: bold;
}
#PDFBug table {
  font-size: 10px;
}

#viewer.textLayer-visible .textLayer {
  opacity: 1;
}

#viewer.textLayer-visible .canvasWrapper {
  background-color: rgba(128, 255, 128, 1);
}

#viewer.textLayer-visible .canvasWrapper canvas {
  mix-blend-mode: screen;
}

#viewer.textLayer-visible .textLayer > span {
  background-color: rgba(255, 255, 0, 0.1);
  color: rgba(0, 0, 0, 1);
  border: solid 1px rgba(255, 0, 0, 0.5);
  box-sizing: border-box;
}

#viewer.textLayer-hover .textLayer > span:hover {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
}

#viewer.textLayer-shadow .textLayer > span {
  background-color: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 1);
}

.grab-to-pan-grab {
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_39___}), move !important;
  cursor: -webkit-grab !important;
  cursor: grab !important;
}
.grab-to-pan-grab
  *:not(input):not(textarea):not(button):not(select):not(:link) {
  cursor: inherit !important;
}
.grab-to-pan-grab:active,
.grab-to-pan-grabbing {
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_40___}), move !important;
  cursor: -webkit-grabbing !important;
  cursor: grabbing !important;
  position: fixed;
  background: rgba(0, 0, 0, 0);
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 50000; /* should be higher than anything else in PDF.js! */
}

@page {
  margin: 0;
}

#printContainer {
  display: none;
}

@media print {
  /* General rules for printing. */
  body {
    background: rgba(0, 0, 0, 0) none;
  }

  /* Rules for browsers that don't support mozPrintCallback. */
  #sidebarContainer,
  #secondaryToolbar,
  .toolbar,
  #loadingBox,
  #errorWrapper,
  .textLayer {
    display: none;
  }
  #viewerContainer {
    overflow: visible;
  }

  #mainContainer,
  #viewerContainer,
  .page,
  .page canvas {
    position: static;
    padding: 0;
    margin: 0;
  }

  .page {
    float: left;
    display: none;
    border: none;
    box-shadow: none;
    background-clip: content-box;
    background-color: rgba(255, 255, 255, 1);
  }

  .page[data-loaded] {
    display: block;
  }

  .fileInput {
    display: none;
  }

  /* Rules for browsers that support PDF.js printing */
  body[data-pdfjsprinting] #outerContainer {
    display: none;
  }
  body[data-pdfjsprinting] #printContainer {
    display: block;
  }
  #printContainer {
    height: 100%;
  }
  /* wrapper around (scaled) print canvas elements */
  #printContainer > div {
    /* Without the following max-height declaration, Chromium might create extra
     * blank pages, even though it shouldn't! */
    max-height: 100%;
    page-break-after: always;
    page-break-inside: avoid;

    /* If we're smaller than the page, center the canvas horizontally and
     * vertically */
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #printContainer canvas,
  #printContainer img {
    direction: ltr;
    display: block;
  }
}

.visibleLargeView,
.visibleMediumView,
.visibleSmallView {
  display: none;
}

@media all and (max-width: 900px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: 840px) {
  #sidebarContainer {
    background-color: var(--sidebar-narrow-bg-color);
  }

  html[dir="ltr"] #outerContainer.sidebarOpen #viewerContainer {
    left: 0 !important;
  }
  html[dir="rtl"] #outerContainer.sidebarOpen #viewerContainer {
    right: 0 !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
  #outerContainer .visibleLargeView,
  #outerContainer .visibleMediumView {
    display: none;
  }
}

@media all and (max-width: 770px) {
  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: 700px) {
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: 640px) {
  .hiddenSmallView,
  .hiddenSmallView * {
    display: none;
  }
  .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir="ltr"] .findbar {
    left: 34px;
  }
  html[dir="rtl"] .findbar {
    right: 34px;
  }
}

@media all and (max-width: 535px) {
  #scaleSelectContainer {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./css/viewer.css"],"names":[],"mappings":"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","sourcesContent":["/* Copyright 2014 Mozilla Foundation\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *     http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n\r\n.textLayer {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  opacity: 0.2;\r\n  line-height: 1;\r\n}\r\n\r\n.textLayer > span {\r\n  color: transparent;\r\n  position: absolute;\r\n  white-space: pre;\r\n  cursor: text;\r\n  transform-origin: 0% 0%;\r\n}\r\n\r\n.textLayer .highlight {\r\n  margin: -1px;\r\n  padding: 1px;\r\n  background-color: rgba(180, 0, 170, 1);\r\n  border-radius: 4px;\r\n}\r\n\r\n.textLayer .highlight.begin {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.textLayer .highlight.end {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.textLayer .highlight.middle {\r\n  border-radius: 0;\r\n}\r\n\r\n.textLayer .highlight.selected {\r\n  background-color: rgba(0, 100, 0, 1);\r\n}\r\n\r\n.textLayer ::-moz-selection {\r\n  background: rgba(0, 0, 255, 1);\r\n}\r\n\r\n.textLayer ::selection {\r\n  background: rgba(0, 0, 255, 1);\r\n}\r\n\r\n.textLayer .endOfContent {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 100%;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: -1;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.textLayer .endOfContent.active {\r\n  top: 0;\r\n}\r\n\r\n\r\n.annotationLayer section {\r\n  position: absolute;\r\n  text-align: initial;\r\n}\r\n\r\n.annotationLayer .linkAnnotation > a,\r\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\r\n  position: absolute;\r\n  font-size: 1em;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.annotationLayer .linkAnnotation > a:hover,\r\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\r\n  opacity: 0.2;\r\n  background: rgba(255, 255, 0, 1);\r\n  box-shadow: 0 2px 10px rgba(255, 255, 0, 1);\r\n}\r\n\r\n.annotationLayer .textAnnotation img {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input,\r\n.annotationLayer .textWidgetAnnotation textarea,\r\n.annotationLayer .choiceWidgetAnnotation select,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n  background-color: rgba(0, 54, 255, 0.13);\r\n  border: 1px solid transparent;\r\n  box-sizing: border-box;\r\n  font-size: 9px;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0 3px;\r\n  vertical-align: top;\r\n  width: 100%;\r\n}\r\n\r\n.annotationLayer .choiceWidgetAnnotation select option {\r\n  padding: 0;\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n  border-radius: 50%;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation textarea {\r\n  font: message-box;\r\n  font-size: 9px;\r\n  resize: none;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input[disabled],\r\n.annotationLayer .textWidgetAnnotation textarea[disabled],\r\n.annotationLayer .choiceWidgetAnnotation select[disabled],\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\r\n  background: none;\r\n  border: 1px solid transparent;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input:hover,\r\n.annotationLayer .textWidgetAnnotation textarea:hover,\r\n.annotationLayer .choiceWidgetAnnotation select:hover,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\r\n  border: 1px solid rgba(0, 0, 0, 1);\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input:focus,\r\n.annotationLayer .textWidgetAnnotation textarea:focus,\r\n.annotationLayer .choiceWidgetAnnotation select:focus {\r\n  background: none;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\r\n  background-color: rgba(0, 0, 0, 1);\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\r\n  height: 80%;\r\n  left: 45%;\r\n  width: 1px;\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\r\n  border-radius: 50%;\r\n  height: 50%;\r\n  left: 30%;\r\n  top: 20%;\r\n  width: 50%;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input.comb {\r\n  font-family: monospace;\r\n  padding-left: 2px;\r\n  padding-right: 0;\r\n}\r\n\r\n.annotationLayer .textWidgetAnnotation input.comb:focus {\r\n  /*\r\n   * Letter spacing is placed on the right side of each character. Hence, the\r\n   * letter spacing of the last character may be placed outside the visible\r\n   * area, causing horizontal scrolling. We avoid this by extending the width\r\n   * when the element has focus and revert this when it loses focus.\r\n   */\r\n  width: 115%;\r\n}\r\n\r\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\r\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  padding: 0;\r\n}\r\n\r\n.annotationLayer .popupWrapper {\r\n  position: absolute;\r\n  width: 20em;\r\n}\r\n\r\n.annotationLayer .popup {\r\n  position: absolute;\r\n  z-index: 200;\r\n  max-width: 20em;\r\n  background-color: rgba(255, 255, 153, 1);\r\n  box-shadow: 0 2px 5px rgba(136, 136, 136, 1);\r\n  border-radius: 2px;\r\n  padding: 6px;\r\n  margin-left: 5px;\r\n  cursor: pointer;\r\n  font: message-box;\r\n  font-size: 9px;\r\n  white-space: normal;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.annotationLayer .popup > * {\r\n  font-size: 9px;\r\n}\r\n\r\n.annotationLayer .popup h1 {\r\n  display: inline-block;\r\n}\r\n\r\n.annotationLayer .popup span {\r\n  display: inline-block;\r\n  margin-left: 5px;\r\n}\r\n\r\n.annotationLayer .popup p {\r\n  border-top: 1px solid rgba(51, 51, 51, 1);\r\n  margin-top: 2px;\r\n  padding-top: 2px;\r\n}\r\n\r\n.annotationLayer .highlightAnnotation,\r\n.annotationLayer .underlineAnnotation,\r\n.annotationLayer .squigglyAnnotation,\r\n.annotationLayer .strikeoutAnnotation,\r\n.annotationLayer .freeTextAnnotation,\r\n.annotationLayer .lineAnnotation svg line,\r\n.annotationLayer .squareAnnotation svg rect,\r\n.annotationLayer .circleAnnotation svg ellipse,\r\n.annotationLayer .polylineAnnotation svg polyline,\r\n.annotationLayer .polygonAnnotation svg polygon,\r\n.annotationLayer .caretAnnotation,\r\n.annotationLayer .inkAnnotation svg polyline,\r\n.annotationLayer .stampAnnotation,\r\n.annotationLayer .fileAttachmentAnnotation {\r\n  cursor: pointer;\r\n}\r\n\r\n.pdfViewer .canvasWrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n.pdfViewer .page {\r\n  direction: ltr;\r\n  width: 816px;\r\n  height: 1056px;\r\n  margin: 1px auto -8px;\r\n  position: relative;\r\n  overflow: visible;\r\n  border: 9px solid transparent;\r\n  background-clip: content-box;\r\n  -o-border-image: url(images/shadow.png) 9 9 repeat;\r\n     border-image: url(images/shadow.png) 9 9 repeat;\r\n  background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.pdfViewer.removePageBorders .page {\r\n  margin: 0 auto 10px;\r\n  border: none;\r\n}\r\n\r\n.pdfViewer.singlePageView {\r\n  display: inline-block;\r\n}\r\n\r\n.pdfViewer.singlePageView .page {\r\n  margin: 0;\r\n  border: none;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.pdfViewer.scrollWrapped,\r\n.spread {\r\n  margin-left: 3.5px;\r\n  margin-right: 3.5px;\r\n  text-align: center;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.spread {\r\n  white-space: nowrap;\r\n}\r\n\r\n.pdfViewer.removePageBorders,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page {\r\n  margin-left: -3.5px;\r\n  margin-right: -3.5px;\r\n}\r\n\r\n.pdfViewer.removePageBorders .spread .page,\r\n.pdfViewer.removePageBorders.scrollHorizontal .page,\r\n.pdfViewer.removePageBorders.scrollWrapped .page {\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.pdfViewer .page canvas {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n.pdfViewer .page canvas[hidden] {\r\n  display: none;\r\n}\r\n\r\n.pdfViewer .page .loadingIcon {\r\n  position: absolute;\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: url(\"images/loading-icon.gif\") center no-repeat;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer .spread {\r\n  display: block;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.pdfPresentationMode:-webkit-full-screen .pdfViewer .page {\r\n  margin-bottom: 100%;\r\n  border: 0;\r\n}\r\n\r\n.pdfPresentationMode:-moz-full-screen .pdfViewer .page {\r\n  margin-bottom: 100%;\r\n  border: 0;\r\n}\r\n\r\n.pdfPresentationMode:fullscreen .pdfViewer .page {\r\n  margin-bottom: 100%;\r\n  border: 0;\r\n}\r\n\r\n:root {\r\n  --sidebar-width: 200px;\r\n  --sidebar-transition-duration: 200ms;\r\n  --sidebar-transition-timing-function: ease;\r\n  --loadingBar-end-offset: 0;\r\n\r\n  --toolbar-icon-opacity: 0.7;\r\n  --doorhanger-icon-opacity: 0.9;\r\n\r\n  --main-color: rgba(12, 12, 13, 1);\r\n  --body-bg-color: rgba(237, 237, 240, 1);\r\n  --errorWrapper-bg-color: rgba(255, 74, 74, 1);\r\n  --progressBar-color: rgba(10, 132, 255, 1);\r\n  --progressBar-indeterminate-bg-color: rgba(221, 221, 222, 1);\r\n  --progressBar-indeterminate-blend-color: rgba(116, 177, 239, 1);\r\n  --scrollbar-color: auto;\r\n  --scrollbar-bg-color: auto;\r\n  --toolbar-icon-bg-color: rgba(0, 0, 0, 1);\r\n\r\n  --sidebar-narrow-bg-color: rgba(237, 237, 240, 0.9);\r\n  --sidebar-toolbar-bg-color: rgba(245, 246, 247, 1);\r\n  --toolbar-bg-color: rgba(249, 249, 250, 1);\r\n  --toolbar-border-color: rgba(204, 204, 204, 1);\r\n  --button-hover-color: rgba(221, 222, 223, 1);\r\n  --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);\r\n  --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);\r\n  --dropdown-btn-bg-color: rgba(215, 215, 219, 1);\r\n  --separator-color: rgba(0, 0, 0, 0.3);\r\n  --field-color: rgba(6, 6, 6, 1);\r\n  --field-bg-color: rgba(255, 255, 255, 1);\r\n  --field-border-color: rgba(187, 187, 188, 1);\r\n  --findbar-nextprevious-btn-bg-color: rgba(227, 228, 230, 1);\r\n  --treeitem-color: rgba(0, 0, 0, 0.8);\r\n  --treeitem-hover-color: rgba(0, 0, 0, 0.9);\r\n  --treeitem-selected-color: rgba(0, 0, 0, 0.9);\r\n  --treeitem-selected-bg-color: rgba(0, 0, 0, 0.25);\r\n  --sidebaritem-bg-color: rgba(0, 0, 0, 0.15);\r\n  --doorhanger-bg-color: rgba(255, 255, 255, 1);\r\n  --doorhanger-border-color: rgba(12, 12, 13, 0.2);\r\n  --doorhanger-hover-color: rgba(237, 237, 237, 1);\r\n  --doorhanger-separator-color: rgba(222, 222, 222, 1);\r\n  --overlay-button-bg-color: rgba(12, 12, 13, 0.1);\r\n  --overlay-button-hover-color: rgba(12, 12, 13, 0.3);\r\n\r\n  --loading-icon: url(images/loading.svg);\r\n  --treeitem-expanded-icon: url(images/treeitem-expanded.svg);\r\n  --treeitem-collapsed-icon: url(images/treeitem-collapsed.svg);\r\n  --toolbarButton-menuArrow-icon: url(images/toolbarButton-menuArrow.svg);\r\n  --toolbarButton-sidebarToggle-icon: url(images/toolbarButton-sidebarToggle.svg);\r\n  --toolbarButton-secondaryToolbarToggle-icon: url(images/toolbarButton-secondaryToolbarToggle.svg);\r\n  --toolbarButton-pageUp-icon: url(images/toolbarButton-pageUp.svg);\r\n  --toolbarButton-pageDown-icon: url(images/toolbarButton-pageDown.svg);\r\n  --toolbarButton-zoomOut-icon: url(images/toolbarButton-zoomOut.svg);\r\n  --toolbarButton-zoomIn-icon: url(images/toolbarButton-zoomIn.svg);\r\n  --toolbarButton-presentationMode-icon: url(images/toolbarButton-presentationMode.svg);\r\n  --toolbarButton-print-icon: url(images/toolbarButton-print.svg);\r\n  --toolbarButton-openFile-icon: url(images/toolbarButton-openFile.svg);\r\n  --toolbarButton-download-icon: url(images/toolbarButton-download.svg);\r\n  --toolbarButton-bookmark-icon: url(images/toolbarButton-bookmark.svg);\r\n  --toolbarButton-viewThumbnail-icon: url(images/toolbarButton-viewThumbnail.svg);\r\n  --toolbarButton-viewOutline-icon: url(images/toolbarButton-viewOutline.svg);\r\n  --toolbarButton-viewAttachments-icon: url(images/toolbarButton-viewAttachments.svg);\r\n  --toolbarButton-viewLayers-icon: url(images/toolbarButton-viewLayers.svg);\r\n  --toolbarButton-currentOutlineItem-icon: url(images/toolbarButton-currentOutlineItem.svg);\r\n  --toolbarButton-search-icon: url(images/toolbarButton-search.svg);\r\n  --findbarButton-previous-icon: url(images/findbarButton-previous.svg);\r\n  --findbarButton-next-icon: url(images/findbarButton-next.svg);\r\n  --secondaryToolbarButton-firstPage-icon: url(images/secondaryToolbarButton-firstPage.svg);\r\n  --secondaryToolbarButton-lastPage-icon: url(images/secondaryToolbarButton-lastPage.svg);\r\n  --secondaryToolbarButton-rotateCcw-icon: url(images/secondaryToolbarButton-rotateCcw.svg);\r\n  --secondaryToolbarButton-rotateCw-icon: url(images/secondaryToolbarButton-rotateCw.svg);\r\n  --secondaryToolbarButton-selectTool-icon: url(images/secondaryToolbarButton-selectTool.svg);\r\n  --secondaryToolbarButton-handTool-icon: url(images/secondaryToolbarButton-handTool.svg);\r\n  --secondaryToolbarButton-scrollVertical-icon: url(images/secondaryToolbarButton-scrollVertical.svg);\r\n  --secondaryToolbarButton-scrollHorizontal-icon: url(images/secondaryToolbarButton-scrollHorizontal.svg);\r\n  --secondaryToolbarButton-scrollWrapped-icon: url(images/secondaryToolbarButton-scrollWrapped.svg);\r\n  --secondaryToolbarButton-spreadNone-icon: url(images/secondaryToolbarButton-spreadNone.svg);\r\n  --secondaryToolbarButton-spreadOdd-icon: url(images/secondaryToolbarButton-spreadOdd.svg);\r\n  --secondaryToolbarButton-spreadEven-icon: url(images/secondaryToolbarButton-spreadEven.svg);\r\n  --secondaryToolbarButton-documentProperties-icon: url(images/secondaryToolbarButton-documentProperties.svg);\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  :root {\r\n    --main-color: rgba(249, 249, 250, 1);\r\n    --body-bg-color: rgba(42, 42, 46, 1);\r\n    --errorWrapper-bg-color: rgba(199, 17, 17, 1);\r\n    --progressBar-color: rgba(0, 96, 223, 1);\r\n    --progressBar-indeterminate-bg-color: rgba(40, 40, 43, 1);\r\n    --progressBar-indeterminate-blend-color: rgba(20, 68, 133, 1);\r\n    --scrollbar-color: rgba(121, 121, 123, 1);\r\n    --scrollbar-bg-color: rgba(35, 35, 39, 1);\r\n    --toolbar-icon-bg-color: rgba(255, 255, 255, 1);\r\n\r\n    --sidebar-narrow-bg-color: rgba(42, 42, 46, 0.9);\r\n    --sidebar-toolbar-bg-color: rgba(50, 50, 52, 1);\r\n    --toolbar-bg-color: rgba(56, 56, 61, 1);\r\n    --toolbar-border-color: rgba(12, 12, 13, 1);\r\n    --button-hover-color: rgba(102, 102, 103, 1);\r\n    --toggled-btn-bg-color: rgba(0, 0, 0, 0.3);\r\n    --toggled-hover-active-btn-color: rgba(0, 0, 0, 0.4);\r\n    --dropdown-btn-bg-color: rgba(74, 74, 79, 1);\r\n    --separator-color: rgba(0, 0, 0, 0.3);\r\n    --field-color: rgba(250, 250, 250, 1);\r\n    --field-bg-color: rgba(64, 64, 68, 1);\r\n    --field-border-color: rgba(115, 115, 115, 1);\r\n    --findbar-nextprevious-btn-bg-color: rgba(89, 89, 89, 1);\r\n    --treeitem-color: rgba(255, 255, 255, 0.8);\r\n    --treeitem-hover-color: rgba(255, 255, 255, 0.9);\r\n    --treeitem-selected-color: rgba(255, 255, 255, 0.9);\r\n    --treeitem-selected-bg-color: rgba(255, 255, 255, 0.25);\r\n    --sidebaritem-bg-color: rgba(255, 255, 255, 0.15);\r\n    --doorhanger-bg-color: rgba(74, 74, 79, 1);\r\n    --doorhanger-border-color: rgba(39, 39, 43, 1);\r\n    --doorhanger-hover-color: rgba(93, 94, 98, 1);\r\n    --doorhanger-separator-color: rgba(92, 92, 97, 1);\r\n    --overlay-button-bg-color: rgba(92, 92, 97, 1);\r\n    --overlay-button-hover-color: rgba(115, 115, 115, 1);\r\n\r\n    /* This image is used in <input> elements, which unfortunately means that\r\n     * the `mask-image` approach used with all of the other images doesn't work\r\n     * here; hence why we still have two versions of this particular image. */\r\n    --loading-icon: url(images/loading-dark.svg);\r\n  }\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n  width: 100%;\r\n  /* Font size is needed to make the activity bar the correct size. */\r\n  /* font-size: 10px; */\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: var(--body-bg-color);\r\n}\r\n\r\nbody,\r\ninput,\r\nbutton,\r\nselect {\r\n  /* font: message-box; */\r\n  outline: none;\r\n  scrollbar-color: var(--scrollbar-color) var(--scrollbar-bg-color);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n\r\n.pdfViewer.enablePermissions .textLayer > span {\r\n  -webkit-user-select: none !important;\r\n     -moz-user-select: none !important;\r\n          user-select: none !important;\r\n  cursor: not-allowed;\r\n}\r\n\r\n#viewerContainer.pdfPresentationMode:-webkit-full-screen {\r\n  top: 0;\r\n  border-top: 2px solid rgba(0, 0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 1);\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  cursor: none;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n#viewerContainer.pdfPresentationMode:-moz-full-screen {\r\n  top: 0;\r\n  border-top: 2px solid rgba(0, 0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 1);\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  cursor: none;\r\n  -moz-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#viewerContainer.pdfPresentationMode:fullscreen {\r\n  top: 0;\r\n  border-top: 2px solid rgba(0, 0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 1);\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  cursor: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.pdfPresentationMode:-webkit-full-screen a:not(.internalLink) {\r\n  display: none;\r\n}\r\n\r\n.pdfPresentationMode:-moz-full-screen a:not(.internalLink) {\r\n  display: none;\r\n}\r\n\r\n.pdfPresentationMode:fullscreen a:not(.internalLink) {\r\n  display: none;\r\n}\r\n\r\n.pdfPresentationMode:-webkit-full-screen .textLayer > span {\r\n  cursor: none;\r\n}\r\n\r\n.pdfPresentationMode:-moz-full-screen .textLayer > span {\r\n  cursor: none;\r\n}\r\n\r\n.pdfPresentationMode:fullscreen .textLayer > span {\r\n  cursor: none;\r\n}\r\n\r\n.pdfPresentationMode.pdfPresentationModeControls > *,\r\n.pdfPresentationMode.pdfPresentationModeControls .textLayer > span {\r\n  cursor: default;\r\n}\r\n\r\n#outerContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n#sidebarContainer {\r\n  position: absolute;\r\n  top: 32px;\r\n  bottom: 0;\r\n  width: var(--sidebar-width);\r\n  visibility: hidden;\r\n  z-index: 100;\r\n  border-top: 1px solid rgba(51, 51, 51, 1);\r\n  transition-duration: var(--sidebar-transition-duration);\r\n  transition-timing-function: var(--sidebar-transition-timing-function);\r\n}\r\nhtml[dir=\"ltr\"] #sidebarContainer {\r\n  transition-property: left;\r\n  left: calc(0px - var(--sidebar-width));\r\n}\r\nhtml[dir=\"rtl\"] #sidebarContainer {\r\n  transition-property: right;\r\n  right: calc(0px - var(--sidebar-width));\r\n}\r\n\r\n#outerContainer.sidebarResizing #sidebarContainer {\r\n  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */\r\n  transition-duration: 0s;\r\n  /* Prevent e.g. the thumbnails being selected when the sidebar is resized. */\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n#outerContainer.sidebarMoving #sidebarContainer,\r\n#outerContainer.sidebarOpen #sidebarContainer {\r\n  visibility: visible;\r\n}\r\nhtml[dir=\"ltr\"] #outerContainer.sidebarOpen #sidebarContainer {\r\n  left: 0;\r\n}\r\nhtml[dir=\"rtl\"] #outerContainer.sidebarOpen #sidebarContainer {\r\n  right: 0;\r\n}\r\n\r\n#mainContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  min-width: 320px;\r\n}\r\n\r\n#sidebarContent {\r\n  top: 32px;\r\n  bottom: 0;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\nhtml[dir=\"ltr\"] #sidebarContent {\r\n  left: 0;\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);\r\n}\r\nhtml[dir=\"rtl\"] #sidebarContent {\r\n  right: 0;\r\n  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n#viewerContainer {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 32px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  outline: none;\r\n}\r\n#viewerContainer:not(.pdfPresentationMode) {\r\n  transition-duration: var(--sidebar-transition-duration);\r\n  transition-timing-function: var(--sidebar-transition-timing-function);\r\n}\r\n\r\n#outerContainer.sidebarResizing #viewerContainer {\r\n  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */\r\n  transition-duration: 0s;\r\n}\r\n\r\nhtml[dir=\"ltr\"]\r\n  #outerContainer.sidebarOpen\r\n  #viewerContainer:not(.pdfPresentationMode) {\r\n  transition-property: left;\r\n  left: var(--sidebar-width);\r\n}\r\nhtml[dir=\"rtl\"]\r\n  #outerContainer.sidebarOpen\r\n  #viewerContainer:not(.pdfPresentationMode) {\r\n  transition-property: right;\r\n  right: var(--sidebar-width);\r\n}\r\n\r\n.Main-Container .toolbar {\r\n  position: relative;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  cursor: default;\r\n}\r\n\r\n#toolbarContainer {\r\n  width: 100%;\r\n}\r\n\r\n#toolbarSidebar {\r\n  width: 100%;\r\n  height: 32px;\r\n  background-color: var(--sidebar-toolbar-bg-color);\r\n}\r\nhtml[dir=\"ltr\"] #toolbarSidebar {\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25), 0 1px 0 rgba(0, 0, 0, 0.15),\r\n    0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\nhtml[dir=\"rtl\"] #toolbarSidebar {\r\n  box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25), 0 1px 0 rgba(0, 0, 0, 0.15),\r\n    0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nhtml[dir=\"ltr\"] #toolbarSidebar .toolbarButton {\r\n  margin-right: 2px !important;\r\n}\r\nhtml[dir=\"rtl\"] #toolbarSidebar .toolbarButton {\r\n  margin-left: 2px !important;\r\n}\r\n\r\nhtml[dir=\"ltr\"] #toolbarSidebarRight .toolbarButton {\r\n  margin-right: 3px !important;\r\n}\r\nhtml[dir=\"rtl\"] #toolbarSidebarRight .toolbarButton {\r\n  margin-left: 3px !important;\r\n}\r\n\r\n#sidebarResizer {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 6px;\r\n  z-index: 200;\r\n  cursor: ew-resize;\r\n}\r\nhtml[dir=\"ltr\"] #sidebarResizer {\r\n  right: -6px;\r\n}\r\nhtml[dir=\"rtl\"] #sidebarResizer {\r\n  left: -6px;\r\n}\r\n\r\n#toolbarContainer,\r\n.findbar,\r\n.secondaryToolbar {\r\n  position: relative;\r\n  height: 32px;\r\n  background-color: var(--toolbar-bg-color);\r\n  box-shadow: 0 1px 0 var(--toolbar-border-color);\r\n}\r\n\r\n#toolbarViewer {\r\n  height: 32px;\r\n}\r\n\r\n#loadingBar {\r\n  position: absolute;\r\n  height: 4px;\r\n  background-color: var(--body-bg-color);\r\n  border-bottom: 1px solid var(--toolbar-border-color);\r\n\r\n  transition-duration: var(--sidebar-transition-duration);\r\n  transition-timing-function: var(--sidebar-transition-timing-function);\r\n}\r\nhtml[dir=\"ltr\"] #loadingBar {\r\n  transition-property: left;\r\n  left: 0;\r\n  right: var(--loadingBar-end-offset);\r\n}\r\nhtml[dir=\"rtl\"] #loadingBar {\r\n  transition-property: right;\r\n  left: var(--loadingBar-end-offset);\r\n  right: 0;\r\n}\r\n\r\nhtml[dir=\"ltr\"] #outerContainer.sidebarOpen #loadingBar {\r\n  left: var(--sidebar-width);\r\n}\r\nhtml[dir=\"rtl\"] #outerContainer.sidebarOpen #loadingBar {\r\n  right: var(--sidebar-width);\r\n}\r\n\r\n#outerContainer.sidebarResizing #loadingBar {\r\n  /* Improve responsiveness and avoid visual glitches when the sidebar is resized. */\r\n  transition-duration: 0s;\r\n}\r\n\r\n#loadingBar .progress {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: var(--progressBar-color);\r\n  overflow: hidden;\r\n  transition: width 200ms;\r\n}\r\n\r\n@-webkit-keyframes progressIndeterminate {\r\n  0% {\r\n    left: -142px;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n@keyframes progressIndeterminate {\r\n  0% {\r\n    left: -142px;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n\r\n#loadingBar .progress.indeterminate {\r\n  background-color: var(--progressBar-indeterminate-bg-color);\r\n  transition: none;\r\n}\r\n\r\n#loadingBar .progress.indeterminate .glimmer {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: calc(100% + 150px);\r\n  background: repeating-linear-gradient(\r\n    135deg,\r\n    var(--progressBar-indeterminate-blend-color) 0,\r\n    var(--progressBar-indeterminate-bg-color) 5px,\r\n    var(--progressBar-indeterminate-bg-color) 45px,\r\n    var(--progressBar-color) 55px,\r\n    var(--progressBar-color) 95px,\r\n    var(--progressBar-indeterminate-blend-color) 100px\r\n  );\r\n  -webkit-animation: progressIndeterminate 1s linear infinite;\r\n          animation: progressIndeterminate 1s linear infinite;\r\n}\r\n\r\n.findbar,\r\n.secondaryToolbar {\r\n  top: 32px;\r\n  position: absolute;\r\n  z-index: 10000;\r\n  height: auto;\r\n  min-width: 16px;\r\n  padding: 0 4px;\r\n  margin: 4px 2px;\r\n  color: rgba(217, 217, 217, 1);\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  text-align: left;\r\n  cursor: default;\r\n}\r\n\r\n.findbar {\r\n  min-width: 300px;\r\n  background-color: var(--toolbar-bg-color);\r\n}\r\n.findbar > div {\r\n  height: 32px;\r\n}\r\n.findbar.wrapContainers > div {\r\n  clear: both;\r\n}\r\n.findbar.wrapContainers > div#findbarMessageContainer {\r\n  height: auto;\r\n}\r\nhtml[dir=\"ltr\"] .findbar {\r\n  left: 64px;\r\n}\r\nhtml[dir=\"rtl\"] .findbar {\r\n  right: 64px;\r\n}\r\n\r\n.findbar .splitToolbarButton {\r\n  margin-top: 3px;\r\n}\r\nhtml[dir=\"ltr\"] .findbar .splitToolbarButton {\r\n  margin-left: 0;\r\n  margin-right: 5px;\r\n}\r\nhtml[dir=\"rtl\"] .findbar .splitToolbarButton {\r\n  margin-left: 5px;\r\n  margin-right: 0;\r\n}\r\n\r\n.findbar .splitToolbarButton > .toolbarButton {\r\n  background-color: var(--findbar-nextprevious-btn-bg-color);\r\n  border-radius: 0;\r\n  height: 26px;\r\n  border-top: 1px solid var(--field-border-color);\r\n  border-bottom: 1px solid var(--field-border-color);\r\n}\r\n\r\n.findbar .splitToolbarButton > .toolbarButton::before {\r\n  top: 5px;\r\n}\r\n\r\n.findbar .splitToolbarButton > .findNext {\r\n  width: 29px;\r\n}\r\nhtml[dir=\"ltr\"] .findbar .splitToolbarButton > .findNext {\r\n  border-bottom-right-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n  border-right: 1px solid var(--field-border-color);\r\n}\r\nhtml[dir=\"rtl\"] .findbar .splitToolbarButton > .findNext {\r\n  border-bottom-left-radius: 2px;\r\n  border-top-left-radius: 2px;\r\n  border-left: 1px solid var(--field-border-color);\r\n}\r\n\r\n.findbar input[type=\"checkbox\"] {\r\n  pointer-events: none;\r\n}\r\n\r\n.findbar label {\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.findbar label:hover,\r\n.findbar input:focus + label {\r\n  background-color: var(--button-hover-color);\r\n}\r\n\r\nhtml[dir=\"ltr\"] #findInput {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\nhtml[dir=\"rtl\"] #findInput {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.findbar .toolbarField[type=\"checkbox\"]:checked + .toolbarLabel {\r\n  background-color: var(--toggled-btn-bg-color) !important;\r\n}\r\n\r\n#findInput {\r\n  width: 200px;\r\n}\r\n#findInput::-webkit-input-placeholder {\r\n  color: rgba(191, 191, 191, 1);\r\n}\r\n#findInput::-moz-placeholder {\r\n  font-style: normal;\r\n}\r\n#findInput::placeholder {\r\n  font-style: normal;\r\n}\r\n#findInput[data-status=\"pending\"] {\r\n  background-image: var(--loading-icon);\r\n  background-repeat: no-repeat;\r\n  background-position: 98%;\r\n}\r\nhtml[dir=\"rtl\"] #findInput[data-status=\"pending\"] {\r\n  background-position: 3px;\r\n}\r\n#findInput[data-status=\"notFound\"] {\r\n  background-color: rgba(255, 102, 102, 1);\r\n}\r\n\r\n.secondaryToolbar {\r\n  padding: 6px 0 10px;\r\n  height: auto;\r\n  z-index: 30000;\r\n  background-color: var(--doorhanger-bg-color);\r\n}\r\nhtml[dir=\"ltr\"] .secondaryToolbar {\r\n  right: 4px;\r\n}\r\nhtml[dir=\"rtl\"] .secondaryToolbar {\r\n  left: 4px;\r\n}\r\n\r\n#secondaryToolbarButtonContainer {\r\n  max-width: 220px;\r\n  max-height: 400px;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  margin-bottom: -4px;\r\n}\r\n\r\n#secondaryToolbarButtonContainer.hiddenScrollModeButtons > .scrollModeButtons,\r\n#secondaryToolbarButtonContainer.hiddenSpreadModeButtons > .spreadModeButtons {\r\n  display: none !important;\r\n}\r\n\r\n.doorHanger,\r\n.doorHangerRight {\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 5px var(--doorhanger-border-color),\r\n    0 0 0 1px var(--doorhanger-border-color);\r\n}\r\n.doorHanger:after,\r\n.doorHanger:before,\r\n.doorHangerRight:after,\r\n.doorHangerRight:before {\r\n  bottom: 100%;\r\n  border: solid rgba(0, 0, 0, 0);\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n}\r\n.doorHanger:after,\r\n.doorHangerRight:after {\r\n  border-width: 8px;\r\n}\r\n.doorHanger:after {\r\n  border-bottom-color: var(--toolbar-bg-color);\r\n}\r\n.doorHangerRight:after {\r\n  border-bottom-color: var(--doorhanger-bg-color);\r\n}\r\n.doorHanger:before,\r\n.doorHangerRight:before {\r\n  border-bottom-color: var(--doorhanger-border-color);\r\n  border-width: 9px;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .doorHanger:after,\r\nhtml[dir=\"rtl\"] .doorHangerRight:after {\r\n  left: 10px;\r\n  margin-left: -8px;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .doorHanger:before,\r\nhtml[dir=\"rtl\"] .doorHangerRight:before {\r\n  left: 10px;\r\n  margin-left: -9px;\r\n}\r\n\r\nhtml[dir=\"rtl\"] .doorHanger:after,\r\nhtml[dir=\"ltr\"] .doorHangerRight:after {\r\n  right: 10px;\r\n  margin-right: -8px;\r\n}\r\n\r\nhtml[dir=\"rtl\"] .doorHanger:before,\r\nhtml[dir=\"ltr\"] .doorHangerRight:before {\r\n  right: 10px;\r\n  margin-right: -9px;\r\n}\r\n\r\n#findResultsCount {\r\n  background-color: rgba(217, 217, 217, 1);\r\n  color: rgba(82, 82, 82, 1);\r\n  text-align: center;\r\n  padding: 3px 4px;\r\n  margin: 5px;\r\n}\r\n\r\n#findMsg {\r\n  color: rgba(251, 0, 0, 1);\r\n}\r\n#findMsg:empty {\r\n  display: none;\r\n}\r\n\r\n#toolbarViewerMiddle {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\nhtml[dir=\"ltr\"] #toolbarViewerLeft,\r\nhtml[dir=\"rtl\"] #toolbarViewerRight,\r\nhtml[dir=\"ltr\"] #toolbarSidebarLeft,\r\nhtml[dir=\"rtl\"] #toolbarSidebarRight {\r\n  float: left;\r\n}\r\nhtml[dir=\"ltr\"] #toolbarViewerRight,\r\nhtml[dir=\"rtl\"] #toolbarViewerLeft,\r\nhtml[dir=\"ltr\"] #toolbarSidebarRight,\r\nhtml[dir=\"rtl\"] #toolbarSidebarLeft {\r\n  float: right;\r\n}\r\nhtml[dir=\"ltr\"] #toolbarViewerLeft > *,\r\nhtml[dir=\"ltr\"] #toolbarViewerMiddle > *,\r\nhtml[dir=\"ltr\"] #toolbarViewerRight > *,\r\nhtml[dir=\"ltr\"] #toolbarSidebarLeft *,\r\nhtml[dir=\"ltr\"] #toolbarSidebarRight *,\r\nhtml[dir=\"ltr\"] .findbar * {\r\n  position: relative;\r\n  float: left;\r\n}\r\nhtml[dir=\"rtl\"] #toolbarViewerLeft > *,\r\nhtml[dir=\"rtl\"] #toolbarViewerMiddle > *,\r\nhtml[dir=\"rtl\"] #toolbarViewerRight > *,\r\nhtml[dir=\"rtl\"] #toolbarSidebarLeft *,\r\nhtml[dir=\"rtl\"] #toolbarSidebarRight *,\r\nhtml[dir=\"rtl\"] .findbar * {\r\n  position: relative;\r\n  float: right;\r\n}\r\n\r\n.splitToolbarButton {\r\n  margin: 2px 2px 0;\r\n  display: inline-block;\r\n}\r\nhtml[dir=\"ltr\"] .splitToolbarButton > .toolbarButton {\r\n  float: left;\r\n}\r\nhtml[dir=\"rtl\"] .splitToolbarButton > .toolbarButton {\r\n  float: right;\r\n}\r\n\r\n.toolbarButton,\r\n.secondaryToolbarButton,\r\n.overlayButton {\r\n  border: 0 none;\r\n  background: none;\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n.overlayButton {\r\n  background-color: var(--overlay-button-bg-color);\r\n}\r\n\r\n.overlayButton:hover,\r\n.overlayButton:focus {\r\n  background-color: var(--overlay-button-hover-color);\r\n}\r\n\r\n.toolbarButton > span {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.toolbarButton[disabled],\r\n.secondaryToolbarButton[disabled],\r\n.overlayButton[disabled] {\r\n  opacity: 0.5;\r\n}\r\n\r\n.splitToolbarButton.toggled .toolbarButton {\r\n  margin: 0;\r\n}\r\n\r\n.splitToolbarButton > .toolbarButton:hover,\r\n.splitToolbarButton > .toolbarButton:focus,\r\n.dropdownToolbarButton:hover,\r\n.toolbarButton.textButton:hover,\r\n.toolbarButton.textButton:focus {\r\n  background-color: var(--button-hover-color);\r\n  z-index: 199;\r\n}\r\n.splitToolbarButton > .toolbarButton {\r\n  position: relative;\r\n}\r\nhtml[dir=\"ltr\"] .splitToolbarButton > .toolbarButton:first-child,\r\nhtml[dir=\"rtl\"] .splitToolbarButton > .toolbarButton:last-child {\r\n  margin: 0;\r\n}\r\nhtml[dir=\"ltr\"] .splitToolbarButton > .toolbarButton:last-child,\r\nhtml[dir=\"rtl\"] .splitToolbarButton > .toolbarButton:first-child {\r\n  margin: 0;\r\n}\r\n.splitToolbarButtonSeparator {\r\n  padding: 10px 0;\r\n  width: 1px;\r\n  background-color: var(--separator-color);\r\n  z-index: 99;\r\n  display: inline-block;\r\n  margin: 4px 0;\r\n}\r\n\r\n.findbar .splitToolbarButtonSeparator {\r\n  background-color: var(--field-border-color);\r\n  margin: 0;\r\n  padding: 13px 0;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .splitToolbarButtonSeparator {\r\n  float: left;\r\n}\r\nhtml[dir=\"rtl\"] .splitToolbarButtonSeparator {\r\n  float: right;\r\n}\r\n\r\n.toolbarButton,\r\n.dropdownToolbarButton,\r\n.secondaryToolbarButton,\r\n.overlayButton {\r\n  min-width: 16px;\r\n  margin: 2px 1px;\r\n  padding: 2px 6px 0;\r\n  border: none;\r\n  border-radius: 2px;\r\n  color: var(--main-color);\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  cursor: default;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml[dir=\"ltr\"] #toolbarViewerLeft > .toolbarButton:first-child,\r\nhtml[dir=\"rtl\"] #toolbarViewerRight > .toolbarButton:last-child {\r\n  margin-left: 2px;\r\n}\r\n\r\nhtml[dir=\"ltr\"] #toolbarViewerRight > .toolbarButton:last-child,\r\nhtml[dir=\"rtl\"] #toolbarViewerLeft > .toolbarButton:first-child {\r\n  margin-right: 2px;\r\n}\r\n.toolbarButton:hover,\r\n.toolbarButton:focus {\r\n  background-color: var(--button-hover-color);\r\n}\r\n.secondaryToolbarButton:hover,\r\n.secondaryToolbarButton:focus {\r\n  background-color: var(--doorhanger-hover-color);\r\n}\r\n\r\n.toolbarButton.toggled,\r\n.splitToolbarButton.toggled > .toolbarButton.toggled,\r\n.secondaryToolbarButton.toggled {\r\n  background-color: var(--toggled-btn-bg-color);\r\n}\r\n\r\n.toolbarButton.toggled:hover:active,\r\n.splitToolbarButton.toggled > .toolbarButton.toggled:hover:active,\r\n.secondaryToolbarButton.toggled:hover:active {\r\n  background-color: var(--toggled-hover-active-btn-color);\r\n}\r\n\r\n.dropdownToolbarButton {\r\n  width: 140px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: var(--dropdown-btn-bg-color);\r\n  margin-top: 2px !important;\r\n}\r\n.dropdownToolbarButton::after {\r\n  top: 6px;\r\n  pointer-events: none;\r\n\r\n  -webkit-mask-image: var(--toolbarButton-menuArrow-icon);\r\n  mask-image: var(--toolbarButton-menuArrow-icon);\r\n}\r\nhtml[dir=\"ltr\"] .dropdownToolbarButton::after {\r\n  right: 7px;\r\n}\r\nhtml[dir=\"rtl\"] .dropdownToolbarButton::after {\r\n  left: 7px;\r\n}\r\n\r\n.dropdownToolbarButton > select {\r\n  width: 162px;\r\n  height: 28px;\r\n  font-size: 12px;\r\n  color: var(--main-color);\r\n  margin: 0;\r\n  padding: 1px 0 2px;\r\n  border: none;\r\n  background-color: var(--dropdown-btn-bg-color);\r\n}\r\nhtml[dir=\"ltr\"] .dropdownToolbarButton > select {\r\n  padding-left: 4px;\r\n}\r\nhtml[dir=\"rtl\"] .dropdownToolbarButton > select {\r\n  padding-right: 4px;\r\n}\r\n.dropdownToolbarButton > select:hover {\r\n  background-color: var(--button-hover-color);\r\n}\r\n\r\n.dropdownToolbarButton > select:focus {\r\n  background-color: var(--button-hover-color);\r\n}\r\n\r\n.dropdownToolbarButton > select > option {\r\n  background: var(--doorhanger-bg-color);\r\n}\r\n\r\n#customScaleOption {\r\n  display: none;\r\n}\r\n\r\n#pageWidthOption {\r\n  border-bottom: 1px rgba(255, 255, 255, 0.5) solid;\r\n}\r\n\r\n.toolbarButtonSpacer {\r\n  width: 30px;\r\n  display: inline-block;\r\n  height: 1px;\r\n}\r\n\r\n.toolbarButton::before,\r\n.secondaryToolbarButton::before,\r\n.dropdownToolbarButton::after,\r\n.treeItemToggler::before {\r\n  /* All matching images have a size of 16x16\r\n   * All relevant containers have a size of 28x28 */\r\n  position: absolute;\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n\r\n  content: \"\";\r\n  background-color: var(--toolbar-icon-bg-color);\r\n  -webkit-mask-size: cover;\r\n  mask-size: cover;\r\n}\r\n\r\n.toolbarButton::before {\r\n  opacity: var(--toolbar-icon-opacity);\r\n  top: 6px;\r\n  left: 6px;\r\n}\r\n\r\n.secondaryToolbarButton::before {\r\n  opacity: var(--doorhanger-icon-opacity);\r\n  top: 5px;\r\n}\r\nhtml[dir=\"ltr\"] .secondaryToolbarButton::before {\r\n  left: 12px;\r\n}\r\nhtml[dir=\"rtl\"] .secondaryToolbarButton::before {\r\n  right: 12px;\r\n}\r\n\r\n.toolbarButton#sidebarToggle::before {\r\n  -webkit-mask-image: var(--toolbarButton-sidebarToggle-icon);\r\n  mask-image: var(--toolbarButton-sidebarToggle-icon);\r\n}\r\nhtml[dir=\"rtl\"] .toolbarButton#sidebarToggle::before {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n.toolbarButton#secondaryToolbarToggle::before {\r\n  -webkit-mask-image: var(--toolbarButton-secondaryToolbarToggle-icon);\r\n  mask-image: var(--toolbarButton-secondaryToolbarToggle-icon);\r\n}\r\nhtml[dir=\"rtl\"] .toolbarButton#secondaryToolbarToggle::before {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n.toolbarButton.findPrevious::before {\r\n  -webkit-mask-image: var(--findbarButton-previous-icon);\r\n  mask-image: var(--findbarButton-previous-icon);\r\n}\r\n\r\n.toolbarButton.findNext::before {\r\n  -webkit-mask-image: var(--findbarButton-next-icon);\r\n  mask-image: var(--findbarButton-next-icon);\r\n}\r\n\r\n.toolbarButton.pageUp::before {\r\n  -webkit-mask-image: var(--toolbarButton-pageUp-icon);\r\n  mask-image: var(--toolbarButton-pageUp-icon);\r\n}\r\n\r\n.toolbarButton.pageDown::before {\r\n  -webkit-mask-image: var(--toolbarButton-pageDown-icon);\r\n  mask-image: var(--toolbarButton-pageDown-icon);\r\n}\r\n\r\n.toolbarButton.zoomOut::before {\r\n  -webkit-mask-image: var(--toolbarButton-zoomOut-icon);\r\n  mask-image: var(--toolbarButton-zoomOut-icon);\r\n}\r\n\r\n.toolbarButton.zoomIn::before {\r\n  -webkit-mask-image: var(--toolbarButton-zoomIn-icon);\r\n  mask-image: var(--toolbarButton-zoomIn-icon);\r\n}\r\n\r\n.toolbarButton.presentationMode::before,\r\n.secondaryToolbarButton.presentationMode::before {\r\n  -webkit-mask-image: var(--toolbarButton-presentationMode-icon);\r\n  mask-image: var(--toolbarButton-presentationMode-icon);\r\n}\r\n\r\n.toolbarButton.print::before,\r\n.secondaryToolbarButton.print::before {\r\n  -webkit-mask-image: var(--toolbarButton-print-icon);\r\n  mask-image: var(--toolbarButton-print-icon);\r\n}\r\n\r\n.toolbarButton.openFile::before,\r\n.secondaryToolbarButton.openFile::before {\r\n  -webkit-mask-image: var(--toolbarButton-openFile-icon);\r\n  mask-image: var(--toolbarButton-openFile-icon);\r\n}\r\n\r\n.toolbarButton.download::before,\r\n.secondaryToolbarButton.download::before {\r\n  -webkit-mask-image: var(--toolbarButton-download-icon);\r\n  mask-image: var(--toolbarButton-download-icon);\r\n}\r\n\r\n.secondaryToolbarButton.bookmark {\r\n  padding-top: 6px;\r\n  text-decoration: none;\r\n}\r\n\r\n.bookmark[href=\"#\"] {\r\n  opacity: 0.5;\r\n  pointer-events: none;\r\n}\r\n\r\n.toolbarButton.bookmark::before,\r\n.secondaryToolbarButton.bookmark::before {\r\n  -webkit-mask-image: var(--toolbarButton-bookmark-icon);\r\n  mask-image: var(--toolbarButton-bookmark-icon);\r\n}\r\n\r\n#viewThumbnail.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-viewThumbnail-icon);\r\n  mask-image: var(--toolbarButton-viewThumbnail-icon);\r\n}\r\n\r\n#viewOutline.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-viewOutline-icon);\r\n  mask-image: var(--toolbarButton-viewOutline-icon);\r\n}\r\nhtml[dir=\"rtl\"] #viewOutline.toolbarButton::before {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n#viewAttachments.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-viewAttachments-icon);\r\n  mask-image: var(--toolbarButton-viewAttachments-icon);\r\n}\r\n\r\n#viewLayers.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-viewLayers-icon);\r\n  mask-image: var(--toolbarButton-viewLayers-icon);\r\n}\r\n\r\n#currentOutlineItem.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-currentOutlineItem-icon);\r\n  mask-image: var(--toolbarButton-currentOutlineItem-icon);\r\n}\r\nhtml[dir=\"rtl\"] #currentOutlineItem.toolbarButton::before {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n#viewFind.toolbarButton::before {\r\n  -webkit-mask-image: var(--toolbarButton-search-icon);\r\n  mask-image: var(--toolbarButton-search-icon);\r\n}\r\n\r\n.toolbarButton.pdfSidebarNotification::after {\r\n  position: absolute;\r\n  display: inline-block;\r\n  top: 1px;\r\n  /* Create a filled circle, with a diameter of 9 pixels, using only CSS: */\r\n  content: \"\";\r\n  background-color: rgba(112, 219, 85, 1);\r\n  height: 9px;\r\n  width: 9px;\r\n  border-radius: 50%;\r\n}\r\nhtml[dir=\"ltr\"] .toolbarButton.pdfSidebarNotification::after {\r\n  left: 17px;\r\n}\r\nhtml[dir=\"rtl\"] .toolbarButton.pdfSidebarNotification::after {\r\n  right: 17px;\r\n}\r\n\r\n.secondaryToolbarButton {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0 0 1px;\r\n  height: auto;\r\n  min-height: 26px;\r\n  width: auto;\r\n  min-width: 100%;\r\n  white-space: normal;\r\n  border-radius: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml[dir=\"ltr\"] .secondaryToolbarButton {\r\n  padding-left: 36px;\r\n  text-align: left;\r\n}\r\nhtml[dir=\"rtl\"] .secondaryToolbarButton {\r\n  padding-right: 36px;\r\n  text-align: right;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .secondaryToolbarButton > span {\r\n  padding-right: 4px;\r\n}\r\nhtml[dir=\"rtl\"] .secondaryToolbarButton > span {\r\n  padding-left: 4px;\r\n}\r\n\r\n.secondaryToolbarButton.firstPage::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-firstPage-icon);\r\n  mask-image: var(--secondaryToolbarButton-firstPage-icon);\r\n}\r\n\r\n.secondaryToolbarButton.lastPage::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-lastPage-icon);\r\n  mask-image: var(--secondaryToolbarButton-lastPage-icon);\r\n}\r\n\r\n.secondaryToolbarButton.rotateCcw::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-rotateCcw-icon);\r\n  mask-image: var(--secondaryToolbarButton-rotateCcw-icon);\r\n}\r\n\r\n.secondaryToolbarButton.rotateCw::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-rotateCw-icon);\r\n  mask-image: var(--secondaryToolbarButton-rotateCw-icon);\r\n}\r\n\r\n.secondaryToolbarButton.selectTool::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-selectTool-icon);\r\n  mask-image: var(--secondaryToolbarButton-selectTool-icon);\r\n}\r\n\r\n.secondaryToolbarButton.handTool::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-handTool-icon);\r\n  mask-image: var(--secondaryToolbarButton-handTool-icon);\r\n}\r\n\r\n.secondaryToolbarButton.scrollVertical::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-scrollVertical-icon);\r\n  mask-image: var(--secondaryToolbarButton-scrollVertical-icon);\r\n}\r\n\r\n.secondaryToolbarButton.scrollHorizontal::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-scrollHorizontal-icon);\r\n  mask-image: var(--secondaryToolbarButton-scrollHorizontal-icon);\r\n}\r\n\r\n.secondaryToolbarButton.scrollWrapped::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-scrollWrapped-icon);\r\n  mask-image: var(--secondaryToolbarButton-scrollWrapped-icon);\r\n}\r\n\r\n.secondaryToolbarButton.spreadNone::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-spreadNone-icon);\r\n  mask-image: var(--secondaryToolbarButton-spreadNone-icon);\r\n}\r\n\r\n.secondaryToolbarButton.spreadOdd::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-spreadOdd-icon);\r\n  mask-image: var(--secondaryToolbarButton-spreadOdd-icon);\r\n}\r\n\r\n.secondaryToolbarButton.spreadEven::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-spreadEven-icon);\r\n  mask-image: var(--secondaryToolbarButton-spreadEven-icon);\r\n}\r\n\r\n.secondaryToolbarButton.documentProperties::before {\r\n  -webkit-mask-image: var(--secondaryToolbarButton-documentProperties-icon);\r\n  mask-image: var(--secondaryToolbarButton-documentProperties-icon);\r\n}\r\n\r\n.verticalToolbarSeparator {\r\n  display: block;\r\n  padding: 11px 0;\r\n  margin: 5px 2px;\r\n  width: 1px;\r\n  background-color: var(--separator-color);\r\n}\r\nhtml[dir=\"ltr\"] .verticalToolbarSeparator {\r\n  margin-left: 2px;\r\n}\r\nhtml[dir=\"rtl\"] .verticalToolbarSeparator {\r\n  margin-right: 2px;\r\n}\r\n\r\n.horizontalToolbarSeparator {\r\n  display: block;\r\n  margin: 6px 0 5px;\r\n  height: 1px;\r\n  width: 100%;\r\n  border-top: 1px solid var(--doorhanger-separator-color);\r\n}\r\n\r\n.toolbarField {\r\n  padding: 4px 7px;\r\n  margin: 3px 0;\r\n  border-radius: 2px;\r\n  background-color: var(--field-bg-color);\r\n  background-clip: padding-box;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: var(--field-border-color);\r\n  box-shadow: none;\r\n  color: var(--field-color);\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  outline-style: none;\r\n}\r\n\r\n.toolbarField[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute !important;\r\n  left: 0;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .toolbarField[type=\"checkbox\"] {\r\n  margin: 10px 0 3px 7px;\r\n}\r\n\r\nhtml[dir=\"rtl\"] .toolbarField[type=\"checkbox\"] {\r\n  margin: 10px 7px 3px 0;\r\n}\r\n\r\n.toolbarField.pageNumber {\r\n  -moz-appearance: textfield; /* hides the spinner in moz */\r\n  min-width: 16px;\r\n  text-align: right;\r\n  width: 40px;\r\n}\r\n\r\n.toolbarField.pageNumber.visiblePageIsLoading {\r\n  background-image: var(--loading-icon);\r\n  background-repeat: no-repeat;\r\n  background-position: 3px;\r\n}\r\n\r\n.toolbarField.pageNumber::-webkit-inner-spin-button,\r\n.toolbarField.pageNumber::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.toolbarField:focus {\r\n  border-color: #0a84ff;\r\n}\r\n\r\n.toolbarLabel {\r\n  min-width: 16px;\r\n  padding: 6px;\r\n  margin: 2px;\r\n  border: 1px solid rgba(0, 0, 0, 0);\r\n  border-radius: 2px;\r\n  color: var(--main-color);\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  text-align: left;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  cursor: default;\r\n}\r\n\r\nhtml[dir=\"ltr\"] #numPages.toolbarLabel {\r\n  padding-left: 2px;\r\n}\r\nhtml[dir=\"rtl\"] #numPages.toolbarLabel {\r\n  padding-right: 2px;\r\n}\r\n\r\n#thumbnailView {\r\n  position: absolute;\r\n  width: calc(100% - 60px);\r\n  top: 0;\r\n  bottom: 0;\r\n  padding: 10px 30px 0;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n#thumbnailView > a:active,\r\n#thumbnailView > a:focus {\r\n  outline: 0;\r\n}\r\n\r\n.thumbnail {\r\n  margin: 0 10px 5px;\r\n}\r\nhtml[dir=\"ltr\"] .thumbnail {\r\n  float: left;\r\n}\r\nhtml[dir=\"rtl\"] .thumbnail {\r\n  float: right;\r\n}\r\n\r\n#thumbnailView > a:last-of-type > .thumbnail {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#thumbnailView > a:last-of-type > .thumbnail:not([data-loaded]) {\r\n  margin-bottom: 9px;\r\n}\r\n\r\n.thumbnail:not([data-loaded]) {\r\n  border: 1px dashed rgba(132, 132, 132, 1);\r\n  margin: -1px 9px 4px;\r\n}\r\n\r\n.thumbnailImage {\r\n  border: 1px solid rgba(0, 0, 0, 0);\r\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);\r\n  opacity: 0.8;\r\n  z-index: 99;\r\n  background-color: rgba(255, 255, 255, 1);\r\n  background-clip: content-box;\r\n}\r\n\r\n.thumbnailSelectionRing {\r\n  border-radius: 2px;\r\n  padding: 7px;\r\n}\r\n\r\na:focus > .thumbnail > .thumbnailSelectionRing > .thumbnailImage,\r\n.thumbnail:hover > .thumbnailSelectionRing > .thumbnailImage {\r\n  opacity: 0.9;\r\n}\r\n\r\na:focus > .thumbnail > .thumbnailSelectionRing,\r\n.thumbnail:hover > .thumbnailSelectionRing {\r\n  background-color: var(--sidebaritem-bg-color);\r\n  background-clip: padding-box;\r\n  color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.thumbnail.selected > .thumbnailSelectionRing > .thumbnailImage {\r\n  opacity: 1;\r\n}\r\n\r\n.thumbnail.selected > .thumbnailSelectionRing {\r\n  background-color: var(--sidebaritem-bg-color);\r\n  background-clip: padding-box;\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n#outlineView,\r\n#attachmentsView,\r\n#layersView {\r\n  position: absolute;\r\n  width: calc(100% - 8px);\r\n  top: 0;\r\n  bottom: 0;\r\n  padding: 4px 4px 0;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nhtml[dir=\"ltr\"] .treeWithDeepNesting > .treeItem,\r\nhtml[dir=\"ltr\"] .treeItem > .treeItems {\r\n  margin-left: 20px;\r\n}\r\n\r\nhtml[dir=\"rtl\"] .treeWithDeepNesting > .treeItem,\r\nhtml[dir=\"rtl\"] .treeItem > .treeItems {\r\n  margin-right: 20px;\r\n}\r\n\r\n.treeItem > a {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  min-width: 95%;\r\n  /* Subtract the right padding (left, in RTL mode) of the container: */\r\n  min-width: calc(100% - 4px);\r\n  height: auto;\r\n  margin-bottom: 1px;\r\n  border-radius: 2px;\r\n  color: var(--treeitem-color);\r\n  font-size: 13px;\r\n  line-height: 15px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  white-space: normal;\r\n  cursor: pointer;\r\n}\r\nhtml[dir=\"ltr\"] .treeItem > a {\r\n  padding: 2px 0 5px 4px;\r\n}\r\nhtml[dir=\"rtl\"] .treeItem > a {\r\n  padding: 2px 4px 5px 0;\r\n}\r\n\r\n#layersView .treeItem > a > * {\r\n  cursor: pointer;\r\n}\r\nhtml[dir=\"ltr\"] #layersView .treeItem > a > label {\r\n  padding-left: 4px;\r\n}\r\nhtml[dir=\"rtl\"] #layersView .treesItem > a > label {\r\n  padding-right: 4px;\r\n}\r\n\r\n.treeItemToggler {\r\n  position: relative;\r\n  height: 0;\r\n  width: 0;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n.treeItemToggler::before {\r\n  -webkit-mask-image: var(--treeitem-expanded-icon);\r\n  mask-image: var(--treeitem-expanded-icon);\r\n}\r\n.treeItemToggler.treeItemsHidden::before {\r\n  -webkit-mask-image: var(--treeitem-collapsed-icon);\r\n  mask-image: var(--treeitem-collapsed-icon);\r\n}\r\nhtml[dir=\"rtl\"] .treeItemToggler.treeItemsHidden::before {\r\n  transform: scaleX(-1);\r\n}\r\n.treeItemToggler.treeItemsHidden ~ .treeItems {\r\n  display: none;\r\n}\r\nhtml[dir=\"ltr\"] .treeItemToggler {\r\n  float: left;\r\n}\r\nhtml[dir=\"rtl\"] .treeItemToggler {\r\n  float: right;\r\n}\r\nhtml[dir=\"ltr\"] .treeItemToggler::before {\r\n  right: 4px;\r\n}\r\nhtml[dir=\"rtl\"] .treeItemToggler::before {\r\n  left: 4px;\r\n}\r\n\r\n.treeItem.selected > a {\r\n  background-color: var(--treeitem-selected-bg-color);\r\n  color: var(--treeitem-selected-color);\r\n}\r\n\r\n.treeItemToggler:hover,\r\n.treeItemToggler:hover + a,\r\n.treeItemToggler:hover ~ .treeItems,\r\n.treeItem > a:hover {\r\n  background-color: var(--sidebaritem-bg-color);\r\n  background-clip: padding-box;\r\n  border-radius: 2px;\r\n  color: var(--treeitem-hover-color);\r\n}\r\n\r\n/* TODO: file FF bug to support ::-moz-selection:window-inactive\r\n   so we can override the opaque grey background when the window is inactive;\r\n   see https://bugzilla.mozilla.org/show_bug.cgi?id=706209 */\r\n::-moz-selection {\r\n  background: rgba(0, 0, 255, 0.3);\r\n}\r\n::selection {\r\n  background: rgba(0, 0, 255, 0.3);\r\n}\r\n\r\n#errorWrapper {\r\n  background: none repeat scroll 0 0 var(--errorWrapper-bg-color);\r\n  color: var(--main-color);\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 1000;\r\n  padding: 3px 6px;\r\n}\r\n\r\n#errorMessageLeft {\r\n  float: left;\r\n}\r\n\r\n#errorMessageRight {\r\n  float: right;\r\n}\r\n\r\n#errorMoreInfo {\r\n  background-color: var(--field-bg-color);\r\n  color: var(--field-color);\r\n  border: 1px solid var(--field-border-color);\r\n  padding: 3px;\r\n  margin: 3px;\r\n  width: 98%;\r\n}\r\n\r\n.overlayButton {\r\n  width: auto;\r\n  margin: 3px 4px 2px !important;\r\n  padding: 2px 11px;\r\n}\r\n\r\n#overlayContainer {\r\n  display: table;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  z-index: 40000;\r\n}\r\n#overlayContainer > * {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n#overlayContainer > .container {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n#overlayContainer > .container > .dialog {\r\n  display: inline-block;\r\n  padding: 15px;\r\n  border-spacing: 4px;\r\n  color: var(--main-color);\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n  background-color: var(--doorhanger-bg-color);\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n  border-radius: 4px;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.dialog > .row {\r\n  display: table-row;\r\n}\r\n\r\n.dialog > .row > * {\r\n  display: table-cell;\r\n}\r\n\r\n.dialog .toolbarField {\r\n  margin: 5px 0;\r\n}\r\n\r\n.dialog .separator {\r\n  display: block;\r\n  margin: 4px 0;\r\n  height: 1px;\r\n  width: 100%;\r\n  background-color: var(--separator-color);\r\n}\r\n\r\n.dialog .buttonRow {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.dialog :link {\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n#passwordOverlay > .dialog {\r\n  text-align: center;\r\n}\r\n#passwordOverlay .toolbarField {\r\n  width: 200px;\r\n}\r\n\r\n#documentPropertiesOverlay > .dialog {\r\n  text-align: left;\r\n}\r\n#documentPropertiesOverlay .row > * {\r\n  min-width: 100px;\r\n}\r\nhtml[dir=\"ltr\"] #documentPropertiesOverlay .row > * {\r\n  text-align: left;\r\n}\r\nhtml[dir=\"rtl\"] #documentPropertiesOverlay .row > * {\r\n  text-align: right;\r\n}\r\n#documentPropertiesOverlay .row > span {\r\n  width: 125px;\r\n  word-wrap: break-word;\r\n}\r\n#documentPropertiesOverlay .row > p {\r\n  max-width: 225px;\r\n  word-wrap: break-word;\r\n}\r\n#documentPropertiesOverlay .buttonRow {\r\n  margin-top: 10px;\r\n}\r\n\r\n.clearBoth {\r\n  clear: both;\r\n}\r\n\r\n.fileInput {\r\n  background: rgba(255, 255, 255, 1);\r\n  color: rgba(0, 0, 0, 1);\r\n  margin-top: 5px;\r\n  visibility: hidden;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n#PDFBug {\r\n  background: none repeat scroll 0 0 rgba(255, 255, 255, 1);\r\n  border: 1px solid rgba(102, 102, 102, 1);\r\n  position: fixed;\r\n  top: 32px;\r\n  right: 0;\r\n  bottom: 0;\r\n  font-size: 10px;\r\n  padding: 0;\r\n  width: 300px;\r\n}\r\n#PDFBug .controls {\r\n  background: rgba(238, 238, 238, 1);\r\n  border-bottom: 1px solid rgba(102, 102, 102, 1);\r\n  padding: 3px;\r\n}\r\n#PDFBug .panels {\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 27px;\r\n}\r\n#PDFBug .panels > div {\r\n  padding: 5px;\r\n}\r\n#PDFBug button.active {\r\n  font-weight: bold;\r\n}\r\n.debuggerShowText {\r\n  background: none repeat scroll 0 0 rgba(255, 255, 0, 1);\r\n  color: rgba(0, 0, 255, 1);\r\n}\r\n.debuggerHideText:hover {\r\n  background: none repeat scroll 0 0 rgba(255, 255, 0, 1);\r\n}\r\n#PDFBug .stats {\r\n  font-family: courier;\r\n  font-size: 10px;\r\n  white-space: pre;\r\n}\r\n#PDFBug .stats .title {\r\n  font-weight: bold;\r\n}\r\n#PDFBug table {\r\n  font-size: 10px;\r\n}\r\n\r\n#viewer.textLayer-visible .textLayer {\r\n  opacity: 1;\r\n}\r\n\r\n#viewer.textLayer-visible .canvasWrapper {\r\n  background-color: rgba(128, 255, 128, 1);\r\n}\r\n\r\n#viewer.textLayer-visible .canvasWrapper canvas {\r\n  mix-blend-mode: screen;\r\n}\r\n\r\n#viewer.textLayer-visible .textLayer > span {\r\n  background-color: rgba(255, 255, 0, 0.1);\r\n  color: rgba(0, 0, 0, 1);\r\n  border: solid 1px rgba(255, 0, 0, 0.5);\r\n  box-sizing: border-box;\r\n}\r\n\r\n#viewer.textLayer-hover .textLayer > span:hover {\r\n  background-color: rgba(255, 255, 255, 1);\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n\r\n#viewer.textLayer-shadow .textLayer > span {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  color: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.grab-to-pan-grab {\r\n  cursor: url(\"images/grab.cur\"), move !important;\r\n  cursor: -webkit-grab !important;\r\n  cursor: grab !important;\r\n}\r\n.grab-to-pan-grab\r\n  *:not(input):not(textarea):not(button):not(select):not(:link) {\r\n  cursor: inherit !important;\r\n}\r\n.grab-to-pan-grab:active,\r\n.grab-to-pan-grabbing {\r\n  cursor: url(\"images/grabbing.cur\"), move !important;\r\n  cursor: -webkit-grabbing !important;\r\n  cursor: grabbing !important;\r\n  position: fixed;\r\n  background: rgba(0, 0, 0, 0);\r\n  display: block;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  z-index: 50000; /* should be higher than anything else in PDF.js! */\r\n}\r\n\r\n@page {\r\n  margin: 0;\r\n}\r\n\r\n#printContainer {\r\n  display: none;\r\n}\r\n\r\n@media print {\r\n  /* General rules for printing. */\r\n  body {\r\n    background: rgba(0, 0, 0, 0) none;\r\n  }\r\n\r\n  /* Rules for browsers that don't support mozPrintCallback. */\r\n  #sidebarContainer,\r\n  #secondaryToolbar,\r\n  .toolbar,\r\n  #loadingBox,\r\n  #errorWrapper,\r\n  .textLayer {\r\n    display: none;\r\n  }\r\n  #viewerContainer {\r\n    overflow: visible;\r\n  }\r\n\r\n  #mainContainer,\r\n  #viewerContainer,\r\n  .page,\r\n  .page canvas {\r\n    position: static;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  .page {\r\n    float: left;\r\n    display: none;\r\n    border: none;\r\n    box-shadow: none;\r\n    background-clip: content-box;\r\n    background-color: rgba(255, 255, 255, 1);\r\n  }\r\n\r\n  .page[data-loaded] {\r\n    display: block;\r\n  }\r\n\r\n  .fileInput {\r\n    display: none;\r\n  }\r\n\r\n  /* Rules for browsers that support PDF.js printing */\r\n  body[data-pdfjsprinting] #outerContainer {\r\n    display: none;\r\n  }\r\n  body[data-pdfjsprinting] #printContainer {\r\n    display: block;\r\n  }\r\n  #printContainer {\r\n    height: 100%;\r\n  }\r\n  /* wrapper around (scaled) print canvas elements */\r\n  #printContainer > div {\r\n    /* Without the following max-height declaration, Chromium might create extra\r\n     * blank pages, even though it shouldn't! */\r\n    max-height: 100%;\r\n    page-break-after: always;\r\n    page-break-inside: avoid;\r\n\r\n    /* If we're smaller than the page, center the canvas horizontally and\r\n     * vertically */\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #printContainer canvas,\r\n  #printContainer img {\r\n    direction: ltr;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.visibleLargeView,\r\n.visibleMediumView,\r\n.visibleSmallView {\r\n  display: none;\r\n}\r\n\r\n@media all and (max-width: 900px) {\r\n  #toolbarViewerMiddle {\r\n    display: table;\r\n    margin: auto;\r\n    left: auto;\r\n    position: inherit;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 840px) {\r\n  #sidebarContainer {\r\n    background-color: var(--sidebar-narrow-bg-color);\r\n  }\r\n\r\n  html[dir=\"ltr\"] #outerContainer.sidebarOpen #viewerContainer {\r\n    left: 0 !important;\r\n  }\r\n  html[dir=\"rtl\"] #outerContainer.sidebarOpen #viewerContainer {\r\n    right: 0 !important;\r\n  }\r\n\r\n  #outerContainer .hiddenLargeView,\r\n  #outerContainer .hiddenMediumView {\r\n    display: inherit;\r\n  }\r\n  #outerContainer .visibleLargeView,\r\n  #outerContainer .visibleMediumView {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 770px) {\r\n  #outerContainer .hiddenLargeView {\r\n    display: none;\r\n  }\r\n  #outerContainer .visibleLargeView {\r\n    display: inherit;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 700px) {\r\n  #outerContainer .hiddenMediumView {\r\n    display: none;\r\n  }\r\n  #outerContainer .visibleMediumView {\r\n    display: inherit;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 640px) {\r\n  .hiddenSmallView,\r\n  .hiddenSmallView * {\r\n    display: none;\r\n  }\r\n  .visibleSmallView {\r\n    display: inherit;\r\n  }\r\n  .toolbarButtonSpacer {\r\n    width: 0;\r\n  }\r\n  html[dir=\"ltr\"] .findbar {\r\n    left: 34px;\r\n  }\r\n  html[dir=\"rtl\"] .findbar {\r\n    right: 34px;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 535px) {\r\n  #scaleSelectContainer {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/reader.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/reader.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_viewer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../css/viewer.css */ "./node_modules/css-loader/dist/cjs.js!./css/viewer.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/images/ic_pulldown.png */ "./css/images/ic_pulldown.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/images/bg_upload.png */ "./css/images/bg_upload.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/first-page.png */ "./css/icon/first-page.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/first-page-hover.png */ "./css/icon/first-page-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/prev-page.png */ "./css/icon/prev-page.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/prev-page-hover.png */ "./css/icon/prev-page-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/next-page.png */ "./css/icon/next-page.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/next-page-hover.png */ "./css/icon/next-page-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/last-page.png */ "./css/icon/last-page.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/last-page-hover.png */ "./css/icon/last-page-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-select-down.png */ "./css/icon/zoom-select-down.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-out-btn2.png */ "./css/icon/zoom-out-btn2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-out-btn2-hover.png */ "./css/icon/zoom-out-btn2-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-in-btn2.png */ "./css/icon/zoom-in-btn2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-in-btn2-hover.png */ "./css/icon/zoom-in-btn2-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/field-input-mode.svg */ "./css/icon/field-input-mode.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/field-input-mode-hover.svg */ "./css/icon/field-input-mode-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/memo-input-mode.svg */ "./css/icon/memo-input-mode.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/memo-Input-mode-hover.svg */ "./css/icon/memo-Input-mode-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/memo-add-mode.svg */ "./css/icon/memo-add-mode.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/memo-add-mode-hover.svg */ "./css/icon/memo-add-mode-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/images/ic-tooltip.svg */ "./css/images/ic-tooltip.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-left.png */ "./css/icon/text-align-left.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-center.png */ "./css/icon/text-align-center.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-right.png */ "./css/icon/text-align-right.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/b.svg */ "./css/icon/b.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-left-hover.png */ "./css/icon/text-align-left-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-center-hover.png */ "./css/icon/text-align-center-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-right-hover.png */ "./css/icon/text-align-right-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/b-hover.svg */ "./css/icon/b-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/field-delete.png */ "./css/icon/field-delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/properties.svg */ "./css/icon/properties.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_viewer_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_31___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
ul {
  list-style: none; }

.pdfViewer .page {
  border: 9px solid transparent;
  padding: 0 !important; }

.Outer-Container {
  width: 100%;
  height: 100%;
  position: relative; }

.MainContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 320px; }

#TemplatePDFViewer,
#ReaderPDFViewer,
#PreviewReaderPDFViewer {
  outline: none; }

.Viewer-Container {
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  outline: none;
  inset: 128px 300px 300px;
  width: calc(100% - 300px - 300px);
  height: calc(100% - 64px - 64px); }

.Viewer-Container.full {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100% !important;
  height: 100% !important;
  inset: unset !important; }

.Viewer-Container.leftfull {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  inset: 128px 0px 300px !important;
  width: calc(100% - 300px) !important;
  height: calc(100% - 64px) !important; }

.Viewer-Container.rightfull {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  inset: 128px 300px 0px !important;
  width: calc(100% - 300px) !important;
  height: calc(100% - 64px) !important; }

.Template-Show {
  display: block !important; }

.Template-Hide {
  display: none !important; }

.Attribute-Switch-Label {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  vertical-align: middle; }

/* Hide default HTML checkbox */
.Attribute-Switch-Label input {
  display: none; }

/* The slider */
.Attribute-Switch-Slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: solid 1px #d2d2d2;
  background-color: #e5e5e5;
  -webkit-transition: .4s;
  transition: .4s; }

.Attribute-Switch-Slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  box-shadow: -1.6px 1.2px 5px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #d2d2d2;
  background-color: #ffffff;
  -webkit-transition: .4s;
  transition: .4s; }

input[type="checkbox"]:checked + .Attribute-Switch-Slider {
  background-color: #2196F3;
  border: solid 1px #00aada; }

input[type="checkbox"]:focus + .Attribute-Switch-Slider {
  box-shadow: 4px 4.5px 10px 0 rgba(0, 0, 0, 0.1); }

input[type="checkbox"]:checked + .Attribute-Switch-Slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
  border: solid 1px #00aada; }

/* Rounded sliders */
.Attribute-Switch-Slider.Round {
  border-radius: 10px; }

.Attribute-Switch-Slider.Round:before {
  border-radius: 50%; }

.Popup-Head .Title, .Popup-Tab-Main li a,
.Popup-Tab-Main li span, .Reader-Toolbar-Group .Toolbar-Field.Page-Number, .Reader-Toolbar-Group .Toolbar-Label, .Reader-Button, .Attribute-Contents-Row .Title, .Attribute-Contents-Row-CheckBox-Container, .Template-Button {
  font-family: MalgunGothic;
  font-style: normal;
  font-stretch: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal; }

.Margin-Right-5 {
  margin-right: 5px; }

.Scale-Seletor-Container {
  position: absolute; }

.Scale-Seletor-Container .select2-container--default .select2-selection--single {
  display: none; }

#ReaderViewerContainer {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 46px;
  left: 0px;
  outline: none;
  inset: 46px 0 0 0;
  width: 100%;
  height: calc(100% - 46px - 81px); }

.EmptyField {
  border: red dashed 2px !important;
  background-color: rgba(255, 0, 0, 0.2) !important; }

.Reader-Page-Memo-Layer textarea {
  text-wrap: nowrap; }

.No-Event-Layer {
  pointer-events: none !important; }

.Sign-Popup {
  z-index: 99990;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center; }

.Sign-Popup::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 100%;
  margin-left: -2px;
  vertical-align: middle; }

.Popup-Bg-Wrap {
  z-index: 99998;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); }

.Sign-Layerpop {
  z-index: 99999;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  line-height: 1.5;
  background: #fff;
  vertical-align: middle;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -ms-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  width: 562px;
  height: 543px; }

.Sign-Layerpop .Popup-Head {
  padding: 32px 0px 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.Popup-Head .Title {
  padding: 0px;
  line-height: 18px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #111111; }

.Popup-Body {
  position: relative;
  max-height: 543px;
  padding: 0;
  color: #323232;
  font-size: 14px;
  text-align: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  height: calc(100% - 70px - 85px); }

.Popup-Foot {
  margin: 0 auto;
  padding: 20px 0px 31px 0px;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.Popup-Foot .btn_common {
  width: auto;
  min-width: auto !important;
  height: 33px;
  line-height: 33px;
  margin: 0 0 0 3px;
  padding: 0 14px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: none;
  background-color: #00aada;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  -o-border-radius: 2px;
  border-radius: 2px;
  border: none; }

.Popup-Foot .btn_common.btn_cancel {
  background-color: #474747; }

.Popup-Foot .btn_common.btn_reset {
  color: #00aada;
  background-color: #ffffff;
  border: solid 1px #00aada; }

.Sign-Tab-Container {
  position: relative;
  height: 100%;
  width: 562px; }

.Popup-Tab-Main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: start;
  -ms-flex-pack: start;
  -ms-flex-align-self: start;
  justify-content: start;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 32px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  padding: 0 31px; }

.Popup-Tab-Main li {
  cursor: pointer;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 126px;
  height: 30px;
  border: solid 1px #d1d1d1;
  background-color: #e5e5e5; }

.Popup-Tab-Main li a,
.Popup-Tab-Main li span {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%; }

.Popup-Tab-Main li.on {
  width: 125px;
  background-color: #002c5f;
  border: none; }

.Popup-Tab-Main li.on a,
.Popup-Tab-Main li.on span {
  color: #ffffff; }

.Sign-Layerpop .Tab-Contents {
  position: relative;
  width: 562px;
  height: 355px;
  padding: 20px 31px 0 31px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {
  width: 100%;
  height: 100%;
  background: #fff;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: solid 1px #d1d1d1; }

.Sign-Layerpop .Tab-Contents #registeredArea.Sign-Area.Draw-Area {
  overflow: auto; }

.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .innerbox {
  position: relative;
  width: 100%;
  height: 100%;
  margin: -1px 0 0 -1px; }

.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signpad,
.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signMsg {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 265px;
  background: #fff; }

.Sign-Layerpop .Tab-Contents .Sign-Area {
  width: 100%;
  height: 100%; }

.Sign-Layerpop .Tab-Contents .Sign-Head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  margin: 0;
  padding: 20px 24px; }

.Sign-Layerpop .Tab-Contents .Sign-Head select,
.Sign-Layerpop .Tab-Contents .Sign-Head input[type="text"] {
  margin-right: 4px; }

.Sign-Head select {
  width: 153px;
  height: 34px !important;
  padding: 0 0 0 10px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat calc(100% - 8px) 50% #fff;
  font-family: inherit;
  color: #000;
  font-size: 14px;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden; }

.Sign-Head .btn_common.line_blue {
  display: inline-block;
  width: auto;
  min-width: 130px;
  height: 34px;
  line-height: 32px;
  margin: 0;
  padding: 0 14px;
  background: #fff;
  font-size: 13px !important;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box; }

.Sign-Head .btn_common.line_blue {
  color: #0e73c3 !important;
  border: 1px solid #0e73c3; }

.Sign-Layerpop .Tab-Contents .signTxtWrap {
  padding: 0 14px 0 24px;
  height: calc(100% - 74px);
  overflow: auto; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul,
.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li,
.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li {
  cursor: pointer;
  -webkit-flex-basis: 33.33%;
  -ms-flex-basis: 33.33%;
  flex-basis: 33.33%;
  margin: 10px 0 0; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap,
.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap {
  display: block;
  width: calc(100% - 10px);
  height: 100%;
  color: #000;
  font-size: 40px;
  text-align: center;
  border: 1px solid #d2d2d2;
  background: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li canvas {
  width: 100%;
  height: 100%; }

.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain; }

.Sign-Layerpop .Tab-Contents .Sign-Area > .innerbox {
  height: 100%; }

.Sign-Layerpop .Tab-Contents .Sign-Area .img_upload_area {
  z-index: 2;
  position: relative;
  height: 100%; }

.corner_point_area {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #666;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.corner_point_area .innerbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  margin: -1px;
  padding: 0;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.corner_point_area .innerbox .bg_area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) repeat 0 0;
  border: 1px solid #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.corner_point_area .innerbox .img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  height: 100%;
  text-align: center; }

.corner_point_area .innerbox .img img {
  max-width: 478px;
  max-height: 226px; }

.corner_point_area .txt_guide {
  display: none; }

.corner_point_area:hover .txt_guide {
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  background: rgba(128, 128, 128, 0.8); }

.img_upload_area .upload_note {
  margin: 10px 0 0;
  padding: 10px 0 0;
  color: #323232;
  font-size: 14px;
  font-weight: 400;
  border-top: 1px solid #d2d2d2; }

.img_upload_area .upload_note p {
  margin: 0 !important;
  line-height: 1.5; }

.Popup-Body .signList {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  -ms-flex-align-self: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  height: auto;
  margin-top: 0;
  padding: 0;
  border: 0 none; }

.Popup-Body .signList .sign_item {
  width: 240px;
  height: auto;
  margin: 0 0 20px;
  padding: 0;
  border: 0 none; }

.signList .sign_item {
  position: relative;
  width: 341px;
  height: 254px;
  margin: 20px 0 0;
  padding: 15px;
  background: #fff;
  border: 1px solid #d2d2d2;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.signList .sign_item .sign_cont_area {
  width: 100%;
  height: 100%; }

.Popup-Body .signList .sign_tit {
  margin: 0 0 4px;
  color: #6a7276;
  font-size: 12px;
  font-weight: 700; }

.signList .sign_item .sign_tit {
  position: relative;
  margin: 0 0 20px;
  padding: 0;
  color: #323232;
  font-size: 18px;
  font-weight: 500; }

.signList .sign_item .sign_cont {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: calc(100% - 44px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  background: #eceff1;
  border: 1px solid #d2d2d2;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.Popup-Body .signList .sign_cont {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -ms-flex-align-self: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 130px;
  border: 1px solid #d2d2d2;
  background: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box; }

.signList .sign_item .sign_cont canvas {
  display: none;
  width: 100%;
  height: 100%; }

.signList .sign_item .sign_cont .img_stamp {
  width: auto;
  max-width: 90%;
  max-height: 90%; }

.Reader-Toolbar {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  height: 46px;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 4px;
  display: flex; }

.Reader-Toolbar-Group {
  padding: 10px 0 10px 0; }

.Reader-Toolbar-Group.Center {
  margin: 0 auto; }

.Reader-Button.Goto-First-Button,
.Reader-Button.Goto-Prev-Button,
.Reader-Button.Goto-Next-Button,
.Reader-Button.Goto-Last-Button,
.Reader-Button.Zoom-Out-Button,
.Reader-Button.Zoom-In-Button,
.Reader-Button.Reader-Field-Input-Mode-Button,
.Reader-Button.Reader-Memo-Input-Mode-Button,
.Reader-Button.Reader-Memo-Add-Mode-Button {
  width: 26px;
  height: 26px;
  vertical-align: middle;
  border-radius: 50%;
  border: solid 1px #d1d1d1;
  background-color: #ffffff;
  margin-right: 30px; }

.Reader-Button.Goto-First-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }

.Reader-Button.Goto-First-Button:hover,
.Reader-Button.Goto-Prev-Button:hover,
.Reader-Button.Goto-Next-Button:hover,
.Reader-Button.Goto-Last-Button:hover {
  background-color: #00aada; }

.Reader-Button.Goto-First-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }

.Reader-Button.Goto-First-Button:disabled > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }

.Reader-Button.Goto-Prev-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }

.Reader-Button.Goto-Prev-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }

.Reader-Button.Goto-Prev-Button:disabled > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }

.Reader-Button.Goto-Next-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }

.Reader-Button.Goto-Next-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }

.Reader-Button.Goto-Next-Button:disabled > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }

.Reader-Button.Goto-Last-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }

.Reader-Button.Goto-Last-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }

.Reader-Button.Goto-Last-Button:disabled > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }

.Reader-Button.Goto-First-Button:disabled,
.Reader-Button.Goto-Prev-Button:disabled,
.Reader-Button.Goto-Next-Button:disabled,
.Reader-Button.Goto-Last-Button:disabled {
  background-color: #d1d1d1; }

.Reader-Button.Zoom-Out-Button,
.Reader-Button.Zoom-In-Button,
.Reader-Button.Reader-Field-Input-Mode-Button,
.Reader-Button.Reader-Memo-Input-Mode-Button,
.Reader-Button.Reader-Memo-Add-Mode-Button {
  border-radius: 0;
  border: none;
  background-color: transparent;
  margin-right: 17px; }

.Reader-Button.Zoom-Out-Button > i,
.Reader-Button.Zoom-In-Button > i,
.Reader-Button.Reader-Field-Input-Mode-Button > i,
.Reader-Button.Reader-Memo-Input-Mode-Button > i,
.Reader-Button.Reader-Memo-Add-Mode-Button > i {
  height: 18px;
  width: 18px;
  display: inline-block;
  margin-top: 4px; }

.Reader-Toolbar-Group > ul {
  list-style: none;
  height: 100%; }

.Reader-Toolbar-Group > ul > li {
  float: left;
  height: 26px; }

.Reader-Toolbar-Group > ul > li:nth-child(6),
.Reader-Toolbar-Group > ul > li:nth-child(10) {
  width: 61px; }

.Reader-Toolbar-Group > ul > li:nth-child(8) {
  margin-left: 30px; }

.Reader-Toolbar-Group .Toolbar-Field.Page-Number {
  font-size: 15px;
  width: 33px;
  height: 22px;
  color: #333333;
  text-align: center; }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0; }

/* Firefox */
input[type=number] {
  -moz-appearance: textfield; }

.Reader-Toolbar-Group .Toolbar-Label {
  font-size: 15px;
  color: #333333;
  line-height: 26px; }

.Toolbar-Button-Divider {
  display: inline-block;
  width: 1px !important;
  min-width: 1px !important;
  height: 18px !important;
  background-color: #4d6c8f;
  margin: 0 30px 0 30px;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  /*요소의 높이의 반(50%) 만큼 위로 이동*/
  transform: translateY(-50%); }

.Reader-Toolbar-Group > ul > li:nth-child(7) {
  width: 60px; }

.Reader-Toolbar-Group > ul > li .Toolbar-Label > a {
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  display: block;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }

.Reader-Button.Zoom-Out-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }

.Reader-Button.Zoom-Out-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }

.Reader-Button.Zoom-In-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }

.Reader-Button.Zoom-In-Button:hover > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }

.Reader-Button.Reader-Field-Input-Mode-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }

.Reader-Button.Reader-Field-Input-Mode-Button:hover > i::before,
.Reader-Button.Reader-Field-Input-Mode-Button.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }

.Reader-Button.Reader-Memo-Input-Mode-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }

.Reader-Button.Reader-Memo-Input-Mode-Button:hover > i::before,
.Reader-Button.Reader-Memo-Input-Mode-Button.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }

.Reader-Button.Reader-Memo-Add-Mode-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }

.Reader-Button.Reader-Memo-Add-Mode-Button:hover > i::before,
.Reader-Button.Reader-Memo-Add-Mode-Button.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }

.Reader-Bottom-Container {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  border-top: #ccc 1px solid; }

.Reader-Bottom-Container > div {
  margin: 0 auto;
  width: 185px;
  padding: 15px 0px;
  display: flex; }

.Reader-Button {
  border-radius: 2px;
  background-color: #474747;
  width: 184px;
  height: 48px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -0.75px;
  border: 0; }

.Reader-Button.Confirm {
  background-color: #00aada; }

.Sign-Layerpop #signTextArea.Tab-Contents .Sign-Head {
  padding: 20px 20px 10px 20px; }

#signTextInput {
  width: calc(100% - 68px);
  height: 30px;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #d1d1d1;
  background-color: #ffffff; }

#signTextCreate {
  width: 68px;
  height: 30px;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #d2d2d2;
  background-color: #e5e5e5; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap .signTypeList {
  display: flex; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li {
  width: 145px;
  height: 75px; }

.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li.on .canvas_wrap,
.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul.signTypeList li.on .canvas_wrap {
  border: solid 4px #00aada; }

.Editor-Attribute {
  position: absolute;
  z-index: 99999;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
  padding: 20px; }

.select2-container--open .select2-dropdown--below {
  z-index: 99999; }

.color-picker {
  z-index: 99999; }

.Attribute-Contents-Row {
  position: relative;
  margin-bottom: 16px; }

.Attribute-Contents-Row:last-child {
  margin-bottom: 0; }

.Attribute-Contents .Divider {
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: #e5e5e5; }

.Attribute-Contents-Row .Title-Wrap {
  position: relative;
  margin-bottom: 7px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 10; }

.Attribute-Contents-Row .Title {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  text-align: left;
  color: #333333;
  font-size: 13px;
  line-height: 13px;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 10px; }

.Attribute-Contents-Row-Wrap .select2-container {
  border: solid 1px #d1d1d1; }

.Attribute-Contents-Row-Wrap .select2-container .select2-selection--single {
  border: none; }

.Attribute-Contents-Row-CheckBox-Container {
  color: #333;
  font-size: 12px; }

.Attribute-Contents-Row-CheckBox-Container > input {
  margin-right: 6px;
  height: 16px;
  vertical-align: bottom; }

.Attribute-Input {
  display: inline-block;
  width: 100%;
  height: 34px;
  line-height: 32px;
  padding: 0 8px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
  outline: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; }

.Attribute-Textarea {
  display: inline-block;
  width: 100%;
  height: 60px;
  padding: 0 8px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  background-color: #fff;
  box-sizing: border-box;
  outline: none;
  text-overflow: ellipsis;
  overflow: auto;
  resize: none;
  white-space: pre-wrap; }

.Title-Tooltip {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  position: relative;
  margin: 0 0 0 6px;
  z-index: 0; }

.Attribute-Contents .ic-tooltip {
  cursor: default; }

.Attribute-Contents .bg:before {
  content: '';
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  overflow: hidden; }

.Attribute-Contents .ic-tooltip:before {
  width: 16px;
  height: 16px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }

.Attribute-Btn {
  width: 80px;
  height: 30px; }

.Template-Button {
  border-radius: 2px;
  background-color: #474747;
  width: 184px;
  height: 48px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -0.75px;
  border: 0; }

.Color-Button-Wrap {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #d1d1d1;
  background-color: #ffffff; }

.Template-Button.Color-Button {
  width: 22px;
  height: 22px;
  border-radius: 2px;
  background-color: #000;
  position: absolute;
  left: 5px;
  top: 5px; }

.Template-Button.Toggle-Button:hover,
.Template-Button.Toggle-Button.Selected {
  background-color: #00aada; }

.Template-Button.Text-Align-Left,
.Template-Button.Text-Align-Center {
  margin-right: 5px; }

.Template-Button.Toggle-Button {
  border-radius: 4px;
  background-color: #e5e5e5;
  width: 32px;
  height: 32px; }

.Template-Button.Text-Align-Left > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }

.Template-Button.Text-Align-Center > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }

.Template-Button.Text-Align-Right > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }

.Template-Button.Text-Bold-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }

.Template-Button.Text-Align-Left:hover > i::before,
.Template-Button.Text-Align-Left.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }

.Template-Button.Text-Align-Center:hover > i::before,
.Template-Button.Text-Align-Center.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }

.Template-Button.Text-Align-Right:hover > i::before,
.Template-Button.Text-Align-Right.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_28___}); }

.Template-Button.Text-Bold-Button:hover > i::before,
.Template-Button.Text-Bold-Button.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_29___}); }

.Field-Delete-Button {
  position: absolute;
  right: -22px;
  top: -20px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_30___});
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
  z-index: 9999; }

.MEMO-Property-Button {
  position: absolute;
  right: -22px;
  top: 5px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_31___});
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
  z-index: 9999; }

.No-Event-Layer .Field-Delete-Button,
.No-Event-Layer .MEMO-Property-Button {
  display: none !important; }

.CalcContainer {
  z-index: 9999;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  padding-bottom: 20px;
  width: 320px; }

.CalcContainer .Field-Delete-Button {
  right: 5px;
  top: 5px; }

.CalcDisplay {
  width: 100%;
  height: 60px;
  padding: 40px 0;
  background: rgba(0, 158, 218, 0.2);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px; }

.CalcButtons {
  padding: 20px 20px 0 20px; }

.CalcRow {
  width: 280px;
  float: left; }

.CalcButtons input[type=button] {
  width: 60px;
  height: 60px;
  float: left;
  padding: 0;
  margin: 5px;
  box-sizing: border-box;
  background: #ecedef;
  border: none;
  font-size: 30px;
  line-height: 30px;
  border-radius: 50%;
  font-weight: 700;
  color: #5E5858;
  cursor: pointer; }

.CalcDisplay input[type=text] {
  width: 270px;
  height: 60px;
  float: left;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  color: #ffffff;
  text-align: right;
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  margin: 0 25px; }

@media screen and (max-width: 768px) {
  #ReaderViewerContainer {
    height: calc(100% - 46px - 55px); }
  .Reader-Toolbar-Group > ul > li:nth-child(1),
  .Reader-Toolbar-Group > ul > li:nth-child(2),
  .Reader-Toolbar-Group > ul > li:nth-child(3),
  .Reader-Toolbar-Group > ul > li:nth-child(4),
  .Reader-Toolbar-Group > ul > li:nth-child(7) {
    display: none; }
  .Sign-Layerpop {
    position: absolute;
    height: 411px;
    width: calc(100% - 10px);
    left: 0;
    top: calc((100% - 411px) / 2);
    margin: 0 5px; }
  .Sign-Layerpop .Popup-Head {
    display: none; }
  .Popup-Body {
    max-height: 368px;
    height: 368px; }
  .Sign-Tab-Container {
    width: 100%; }
  .Popup-Tab-Main {
    padding: 0;
    -webkit-box-pack: center;
    justify-content: center; }
  .Sign-Layerpop .Tab-Contents {
    padding: 0;
    width: 100%;
    height: calc(100% - 32px); }
  .Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {
    border: none; }
  .Popup-Foot {
    padding: 10px 5px; }
  .Popup-Foot .btn_common {
    min-width: 97px !important; }
  .Reader-Bottom-Container {
    height: 55px; }
  .Reader-Bottom-Container > div {
    width: calc(100% - 10px);
    padding: 5px; }
  .Reader-Button {
    width: calc((100% - 5px) / 1);
    margin-right: 5px;
    border-radius: 5px;
    height: 45px; }
  .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li {
    margin-right: 5px; }
  .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap {
    width: 100%; } }
`, "",{"version":3,"sources":["webpack://./sass/reader.scss","webpack://./sass/pdfReader.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"pdfReader.scss\";\r\n\r\n\r\n#ReaderViewerContainer {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 46px;\r\n  left: 0px;\r\n  outline: none;\r\n  inset: 46px 0 0 0;\r\n  width: 100%;\r\n  height: calc(100% - 46px - 81px);\r\n}\r\n\r\n.EmptyField {\r\n    border: red dashed 2px !important;\r\n    \r\n    background-color: rgba(255, 0, 0, 0.2) !important;\r\n}\r\n\r\n.Reader-Page-Memo-Layer textarea {\r\n    text-wrap: nowrap;\r\n}\r\n\r\n.No-Event-Layer {\r\n    pointer-events: none !important;\r\n}\r\n\r\n.Sign-Popup {\r\n    z-index: 99990;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.Sign-Popup::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -2px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.Popup-Bg-Wrap {\r\n    z-index: 99998;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n}\r\n\r\n.Sign-Layerpop {\r\n    z-index: 99999;\r\n    position: relative;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    line-height: 1.5;\r\n    background: #fff;\r\n    vertical-align: middle;\r\n    -webkit-border-radius: 6px;\r\n    -moz-border-radius: 6px;\r\n    -ms-border-radius: 6px;\r\n    -o-border-radius: 6px;\r\n    border-radius: 6px;\r\n    width: 562px;\r\n    height: 543px;\r\n}\r\n\r\n.Sign-Layerpop .Popup-Head {\r\n    padding: 32px 0px 20px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Popup-Head .Title {\r\n    padding: 0px;\r\n    @extend %template-font-info;\r\n    line-height: 18px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #111111;\r\n}\r\n\r\n.Popup-Body {\r\n    position: relative;\r\n    max-height: 543px;\r\n    padding: 0;\r\n    color: #323232;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    height: calc(100% - 70px - 85px);\r\n}\r\n\r\n.Popup-Foot {\r\n    margin: 0 auto;\r\n    padding: 20px 0px 31px 0px;\r\n    text-align: center;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.Popup-Foot .btn_common { \r\n    width: auto;\r\n    min-width: auto !important;\r\n    height: 33px;\r\n    line-height: 33px;\r\n    margin: 0 0 0 3px;\r\n    padding: 0 14px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-transform: none;\r\n    background-color: #00aada;\r\n    -webkit-border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -ms-border-radius: 2px;\r\n    -o-border-radius: 2px;\r\n    border-radius: 2px;\r\n    border: none;\r\n}\r\n\r\n.Popup-Foot .btn_common.btn_cancel {\r\n    background-color: #474747;    \r\n}\r\n\r\n.Popup-Foot .btn_common.btn_reset { \r\n    color: #00aada;\r\n    background-color: #ffffff;\r\n    border: solid 1px #00aada;\r\n}\r\n\r\n.Sign-Tab-Container {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 562px;\r\n}\r\n\r\n.Popup-Tab-Main {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n    -webkit-justify-content: start;\r\n    -ms-flex-pack: start;\r\n    -ms-flex-align-self: start;\r\n    justify-content: start;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    width: 100%;\r\n    height: 32px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    \r\n    list-style: none;\r\n    text-align: center ;\r\n    padding: 0 31px;\r\n}\r\n\r\n.Popup-Tab-Main li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    \r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    width: 126px;\r\n    height: 30px;\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Popup-Tab-Main li a, \r\n.Popup-Tab-Main li span {\r\n    @extend %template-font-info;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    white-space: nowrap;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n.Popup-Tab-Main li.on {\r\n    width: 125px;\r\n    background-color: #002c5f;\r\n    border: none;   \r\n}\r\n\r\n.Popup-Tab-Main li.on a, \r\n.Popup-Tab-Main li.on span {\r\n    color: #ffffff; \r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents {\r\n    position: relative;\r\n    width: 562px;\r\n    height: 355px;\r\n    padding: 20px 31px 0 31px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    color: #666;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    border: solid 1px #d1d1d1;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents #registeredArea.Sign-Area.Draw-Area {\r\n    overflow: auto;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .innerbox {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: -1px 0 0 -1px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signpad, \r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signMsg {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    line-height: 265px;\r\n    background: #fff;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Head {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 20px 24px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Head select, \r\n.Sign-Layerpop .Tab-Contents .Sign-Head input[type=\"text\"] {\r\n    margin-right: 4px;\r\n}\r\n\r\n.Sign-Head select {\r\n    width: 153px;\r\n    height: 34px !important;\r\n    padding: 0 0 0 10px;\r\n    background: url(./../css/images/ic_pulldown.png) no-repeat calc(100% - 8px) 50% #fff;\r\n    font-family: inherit;\r\n    color: #000;\r\n    font-size: 14px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    outline: none;\r\n    white-space: nowrap;\r\n    word-break: break-all;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.Sign-Head .btn_common.line_blue{\r\n    display: inline-block;\r\n    width: auto;\r\n    min-width: 130px;\r\n    height: 34px;\r\n    line-height: 32px;\r\n    margin: 0;\r\n    padding: 0 14px;\r\n    background: #fff;\r\n    font-size: 13px !important;\r\n    font-weight: 500;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Head .btn_common.line_blue {\r\n    color: #0e73c3 !important;\r\n    border: 1px solid #0e73c3;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .signTxtWrap {\r\n    padding: 0 14px 0 24px;\r\n    height: calc(100% - 74px);\r\n    overflow: auto;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin: 0;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li {\r\n    cursor: pointer;\r\n    -webkit-flex-basis: 33.33%;\r\n    -ms-flex-basis: 33.33%;\r\n    flex-basis: 33.33%;\r\n    margin: 10px 0 0;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap {\r\n    display: block;\r\n    width: calc(100% - 10px);\r\n    height: 100%;\r\n    color: #000;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    border: 1px solid #d2d2d2;\r\n    background: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area > .innerbox {\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area  .img_upload_area {\r\n    z-index: 2;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.corner_point_area {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #666;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n    margin: -1px;\r\n    padding: 0;\r\n    \r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox .bg_area {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    background: url(./../css/images/bg_upload.png) repeat 0 0;\r\n    border: 1px solid #fff;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox .img {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n.corner_point_area .innerbox .img img {\r\n    max-width: 478px;\r\n    max-height: 226px;\r\n}\r\n\r\n.corner_point_area .txt_guide {\r\n    display: none;\r\n}\r\n.corner_point_area:hover .txt_guide {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    background: rgba(128,128,128,0.8);\r\n}\r\n.img_upload_area .upload_note {\r\n    margin: 10px 0 0;\r\n    padding: 10px 0 0;\r\n    color: #323232;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    border-top: 1px solid #d2d2d2;\r\n}\r\n.img_upload_area .upload_note p {\r\n    margin: 0 !important;\r\n    line-height: 1.5;\r\n}\r\n\r\n.Popup-Body .signList {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: space-between;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: space-between;\r\n    -ms-flex-align-self: space-between;\r\n    justify-content: space-between;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: auto;\r\n    height: auto;\r\n    margin-top: 0;\r\n    padding: 0;\r\n    border: 0 none;\r\n}\r\n.Popup-Body .signList .sign_item {\r\n    width: 240px;\r\n    height: auto;\r\n    margin: 0 0 20px;\r\n    padding: 0;\r\n    border: 0 none;\r\n}\r\n\r\n.signList .sign_item {\r\n    position: relative;\r\n    width: 341px;\r\n    height: 254px;\r\n    margin: 20px 0 0;\r\n    padding: 15px;\r\n    background: #fff;\r\n    border: 1px solid #d2d2d2;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.signList .sign_item .sign_cont_area {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.Popup-Body .signList .sign_tit {\r\n    margin: 0 0 4px;\r\n    color: #6a7276;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n}\r\n.signList .sign_item .sign_tit {\r\n    position: relative;\r\n    margin: 0 0 20px;\r\n    padding: 0;\r\n    color: #323232;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n.signList .sign_item .sign_cont {\r\n    cursor: pointer;\r\n    position: relative;\r\n    width: 100%;\r\n    height: calc(100% - 44px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #eceff1;\r\n    border: 1px solid #d2d2d2;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.Popup-Body .signList .sign_cont {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 130px;\r\n    border: 1px solid #d2d2d2;\r\n    background: none;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.signList .sign_item .sign_cont canvas {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.signList .sign_item .sign_cont .img_stamp {\r\n    width: auto;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n}\r\n\r\n\r\n.Reader-Toolbar {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    overflow: hidden;\r\n    height: 46px;\r\n    width: 100%;\r\n    background-color: #f8f8f8;\r\n    border-radius: 4px;\r\n    display: flex;\r\n}\r\n\r\n.Reader-Toolbar-Group {\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.Reader-Toolbar-Group.Center {\r\n    margin: 0 auto;\r\n}\r\n\r\n.Reader-Button.Goto-First-Button,\r\n.Reader-Button.Goto-Prev-Button,\r\n.Reader-Button.Goto-Next-Button,\r\n.Reader-Button.Goto-Last-Button,\r\n.Reader-Button.Zoom-Out-Button,\r\n.Reader-Button.Zoom-In-Button,\r\n.Reader-Button.Reader-Field-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button {\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n    margin-right: 30px;\r\n}\r\n.Reader-Button.Goto-First-Button > i::before {\r\n    content: url(\"./../css/icon/first-page.png\");\r\n}\r\n.Reader-Button.Goto-First-Button:hover,\r\n.Reader-Button.Goto-Prev-Button:hover,\r\n.Reader-Button.Goto-Next-Button:hover,\r\n.Reader-Button.Goto-Last-Button:hover {\r\n    background-color: #00aada;\r\n}\r\n.Reader-Button.Goto-First-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/first-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-First-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/first-page.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button > i::before {\r\n    content: url(\"./../css/icon/prev-page.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/prev-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/prev-page.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button > i::before {\r\n    content: url(\"./../css/icon/next-page.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/next-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/next-page.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button > i::before {\r\n    content: url(\"./../css/icon/last-page.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/last-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/last-page.png\");\r\n}\r\n\r\n.Reader-Button.Goto-First-Button:disabled,\r\n.Reader-Button.Goto-Prev-Button:disabled,\r\n.Reader-Button.Goto-Next-Button:disabled,\r\n.Reader-Button.Goto-Last-Button:disabled {\r\n    background-color: #d1d1d1;\r\n}\r\n\r\n.Reader-Button.Zoom-Out-Button,\r\n.Reader-Button.Zoom-In-Button,\r\n.Reader-Button.Reader-Field-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button {\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: transparent;\r\n    margin-right: 17px;\r\n}\r\n\r\n\r\n.Reader-Button.Zoom-Out-Button > i,\r\n.Reader-Button.Zoom-In-Button > i,\r\n.Reader-Button.Reader-Field-Input-Mode-Button > i,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button > i,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button > i {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: inline-block;\r\n    margin-top: 4px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul {\r\n    list-style: none;\r\n    height: 100%;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li {\r\n    float: left; \r\n    height: 26px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(6),\r\n.Reader-Toolbar-Group > ul > li:nth-child(10) {\r\n    width: 61px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(8) {\r\n    margin-left: 30px;\r\n}\r\n\r\n.Reader-Toolbar-Group .Toolbar-Field.Page-Number { \r\n    @extend %template-font-info;\r\n    font-size: 15px;\r\n    width: 33px;\r\n    height: 22px;\r\n    color: #333333;\r\n    text-align: center;    \r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.Reader-Toolbar-Group .Toolbar-Label { \r\n    @extend %template-font-info;\r\n    font-size: 15px;\r\n    color: #333333;\r\n    line-height: 26px;\r\n}\r\n\r\n.Toolbar-Button-Divider {\r\n  display: inline-block;\r\n  width: 1px !important;\r\n  min-width: 1px !important;\r\n  height: 18px !important;\r\n  background-color: #4d6c8f;\r\n  margin: 0 30px 0 30px;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(7) {\r\n    width: 60px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li .Toolbar-Label > a {\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    width: 100%;\r\n    display: block;\r\n    background-image: url(\"./../css/icon/zoom-select-down.png\");\r\n}\r\n\r\n.Reader-Button.Zoom-Out-Button > i::before {\r\n    content: url(\"./../css/icon/zoom-out-btn2.png\");\r\n}\r\n.Reader-Button.Zoom-Out-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/zoom-out-btn2-hover.png\");\r\n}\r\n.Reader-Button.Zoom-In-Button > i::before {\r\n    content: url(\"./../css/icon/zoom-in-btn2.png\");\r\n}\r\n.Reader-Button.Zoom-In-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/zoom-in-btn2-hover.png\");\r\n}\r\n\r\n.Reader-Button.Reader-Field-Input-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/field-input-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Field-Input-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Field-Input-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/field-input-mode-hover.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Input-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/memo-input-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Input-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/memo-Input-mode-hover.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Add-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/memo-add-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Add-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/memo-add-mode-hover.svg\");\r\n}\r\n\r\n\r\n.Reader-Bottom-Container {\r\n  width: 100%;\r\n  height: 80px; \r\n  background-color: #ffffff;\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: #ccc 1px solid;\r\n}\r\n\r\n.Reader-Bottom-Container > div {\r\n  margin: 0 auto;\r\n//   width: 373px;\r\n//   padding: 15px 0;\r\n  width: 185px;\r\n  padding: 15px 0px;\r\n\r\n  display: flex;\r\n}\r\n\r\n.Reader-Button {\r\n  @extend %template-font-info;\r\n  border-radius: 2px;\r\n  background-color: #474747;\r\n  width: 184px;\r\n  height: 48px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  letter-spacing: -0.75px;\r\n  border: 0;\r\n}\r\n\r\n.Reader-Button.Confirm {\r\n  background-color: #00aada;\r\n}\r\n\r\n.Sign-Layerpop #signTextArea.Tab-Contents .Sign-Head {\r\n    padding: 20px 20px 10px 20px;\r\n}\r\n\r\n#signTextInput {\r\n    width: calc(100% - 68px );\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n}\r\n\r\n#signTextCreate {\r\n    width: 68px;\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d2d2d2;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap .signTypeList {\r\n    display: flex;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList  li {\r\n    width: 145px;\r\n    height: 75px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li.on .canvas_wrap,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul.signTypeList li.on .canvas_wrap {\r\n    border: solid 4px #00aada;    \r\n}\r\n\r\n\r\n.Editor-Attribute {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d3d3d3;\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n\r\n  }\r\n  .select2-container--open .select2-dropdown--below {\r\n    z-index: 99999;\r\n  }\r\n\r\n  .color-picker {\r\n    z-index: 99999;\r\n\r\n  }\r\n  \r\n.Attribute-Contents-Row {\r\n    position: relative;\r\n    margin-bottom: 16px;\r\n  }\r\n  .Attribute-Contents-Row:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .Attribute-Contents .Divider {\r\n      margin: 10px 0;\r\n      width: 100%;\r\n      height: 1px;\r\n      background-color: #e5e5e5;\r\n  }\r\n  \r\n  .Attribute-Contents-Row .Title-Wrap{\r\n    position: relative;\r\n    margin-bottom: 7px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    z-index: 10;\r\n  }\r\n  \r\n  .Attribute-Contents-Row .Title {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    \r\n    @extend %template-font-info;\r\n    text-align: left;\r\n    color: #333333;  \r\n    font-size: 13px;\r\n    line-height: 13px;\r\n    font-weight: bold;\r\n    \r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  \r\n.Attribute-Contents-Row-Wrap .select2-container {\r\n    border: solid 1px #d1d1d1;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-Wrap .select2-container .select2-selection--single {\r\n    border: none;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-CheckBox-Container {\r\n    @extend %template-font-info;\r\n    color: #333;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-CheckBox-Container > input {\r\n      margin-right: 6px;\r\n      height: 16px;\r\n      vertical-align: bottom;\r\n  }\r\n  \r\n  .Attribute-Input {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 34px;\r\n    line-height: 32px;\r\n    padding: 0 8px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .Attribute-Textarea {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 60px;\r\n    padding: 0 8px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    text-overflow: ellipsis;\r\n    overflow: auto;\r\n    resize: none;\r\n    white-space: pre-wrap;\r\n  }\r\n  \r\n  .Title-Tooltip {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    position: relative;\r\n    margin: 0 0 0 6px;\r\n    z-index: 0;\r\n  }\r\n  \r\n  .Attribute-Contents .ic-tooltip {\r\n      cursor: default;\r\n  }\r\n  \r\n  .Attribute-Contents .bg:before {\r\n    content: '';\r\n    display: inline-block;\r\n    background-repeat: no-repeat;\r\n    background-position: 0 0;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .Attribute-Contents .ic-tooltip:before {\r\n      width: 16px;\r\n      height: 16px;\r\n      background-image: url(./../css/images/ic-tooltip.svg);\r\n  }\r\n\r\n  .Attribute-Btn {\r\n    width: 80px;\r\n    height: 30px;\r\n  }\r\n\r\n  \r\n.Template-Button {\r\n    @extend %template-font-info;\r\n    border-radius: 2px;\r\n    background-color: #474747;\r\n    width: 184px;\r\n    height: 48px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    letter-spacing: -0.75px;\r\n    border: 0;\r\n  }\r\n  .Color-Button-Wrap {\r\n    width: 32px;\r\n    height: 32px;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n  }\r\n\r\n  .Template-Button.Color-Button {\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 2px;\r\n    background-color: #000;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 5px;\r\n  }\r\n  \r\n  .Template-Button.Toggle-Button:hover,\r\n  .Template-Button.Toggle-Button.Selected {\r\n      background-color: #00aada;\r\n  }\r\n  \r\n  .Template-Button.Text-Align-Left,\r\n  .Template-Button.Text-Align-Center {\r\n    margin-right: 5px;\r\n  }\r\n  .Template-Button.Toggle-Button {\r\n    border-radius: 4px;\r\n    background-color: #e5e5e5;\r\n  \r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n  \r\n.Template-Button.Text-Align-Left > i::before {\r\n    content: url(\"./../css/icon/text-align-left.png\");\r\n  }\r\n  .Template-Button.Text-Align-Center > i::before {\r\n    content: url(\"./../css/icon/text-align-center.png\");\r\n  }\r\n  .Template-Button.Text-Align-Right > i::before {\r\n    content: url(\"./../css/icon/text-align-right.png\");\r\n  }\r\n  .Template-Button.Text-Bold-Button > i::before {\r\n    content: url(\"./../css/icon/b.svg\");\r\n  }\r\n  .Template-Button.Text-Align-Left:hover > i::before,\r\n  .Template-Button.Text-Align-Left.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-left-hover.png\");\r\n  }\r\n  .Template-Button.Text-Align-Center:hover > i::before,\r\n  .Template-Button.Text-Align-Center.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-center-hover.png\");\r\n  }\r\n  .Template-Button.Text-Align-Right:hover > i::before,\r\n  .Template-Button.Text-Align-Right.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-right-hover.png\");\r\n  }\r\n  .Template-Button.Text-Bold-Button:hover > i::before,\r\n  .Template-Button.Text-Bold-Button.Selected > i::before  {\r\n    content: url(\"./../css/icon/b-hover.svg\");\r\n  }\r\n\r\n.Field-Delete-Button {\r\n    position: absolute;\r\n    right: -22px;\r\n    top: -20px;\r\n    \r\n    background-image: url(\"./../css/icon/field-delete.png\");\r\n    background-size: 20px 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n    z-index: 9999;\r\n}\r\n\r\n.MEMO-Property-Button {\r\n    position: absolute;\r\n    right: -22px;\r\n    top: 5px;\r\n    \r\n    background-image: url(\"./../css/icon/properties.svg\");\r\n    background-size: 20px 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n    z-index: 9999;\r\n}\r\n\r\n.No-Event-Layer .Field-Delete-Button,\r\n.No-Event-Layer .MEMO-Property-Button {\r\n    display: none !important;\r\n}\r\n\r\n.CalcContainer {\r\n    z-index: 9999;\r\n    background: #fff;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);\r\n    border-radius: 14px;\r\n    padding-bottom: 20px;\r\n    width: 320px;\r\n    \r\n  }\r\n\r\n  .CalcContainer .Field-Delete-Button {\r\n    right: 5px;\r\n    top: 5px;\r\n  }\r\n  .CalcDisplay {\r\n    width: 100%;\r\n    height: 60px;\r\n    padding: 40px 0;\r\n    background: rgba(0, 158, 218, 0.2);\r\n    border-top-left-radius: 14px;\r\n    border-top-right-radius: 14px;\r\n  }\r\n  .CalcButtons {\r\n    padding: 20px 20px 0 20px;\r\n  }\r\n  .CalcRow {\r\n    width: 280px;\r\n    float: left;\r\n  }\r\n  .CalcButtons input[type=button] {\r\n    width: 60px;\r\n    height: 60px;\r\n    float: left;\r\n    padding: 0;\r\n    margin: 5px;\r\n    box-sizing: border-box;\r\n    background: #ecedef;\r\n    border: none;\r\n    font-size: 30px;\r\n    line-height: 30px;\r\n    border-radius: 50%;\r\n    font-weight: 700;\r\n    color: #5E5858;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  .CalcDisplay input[type=text] {\r\n    width: 270px;\r\n    height: 60px;\r\n    float: left;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    background: none;\r\n    color: #ffffff;\r\n    text-align: right;\r\n    font-weight: 700;\r\n    font-size: 60px;\r\n    line-height: 60px;\r\n    margin: 0 25px;\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 768px) { \r\n\r\n    #ReaderViewerContainer {\r\n        height: calc(100% - 46px - 55px);\r\n    }\r\n\r\n    .Reader-Toolbar-Group > ul > li:nth-child(1),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(2),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(3),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(4),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(7) {\r\n        display: none;    \r\n    }\r\n    \r\n    .Sign-Layerpop {\r\n        position: absolute;\r\n        height: 411px;\r\n        width: calc(100% - 10px);\r\n        \r\n        left: 0;\r\n        top: calc((100% - 411px) / 2);\r\n        margin: 0 5px;\r\n    }\r\n\r\n    .Sign-Layerpop .Popup-Head {\r\n        display: none;\r\n    }\r\n\r\n    .Popup-Body {\r\n        max-height: 368px;\r\n        height: 368px;\r\n    }\r\n\r\n    .Sign-Tab-Container {\r\n        width: 100%;\r\n    }\r\n\r\n    .Popup-Tab-Main {\r\n        padding: 0;\r\n        -webkit-box-pack: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    //반응형일 때 마지막 탭을 안보이게 해놓았는데, 제거. \r\n    .Popup-Tab-Main li:last-child {\r\n        // display: none;\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents { \r\n        padding: 0;\r\n        width: 100%;\r\n        height: calc(100% - 32px);\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {\r\n        border: none;\r\n    }\r\n\r\n    .Popup-Foot {\r\n        padding: 10px 5px;\r\n    }\r\n\r\n    .Popup-Foot .btn_common { \r\n        min-width: 97px !important;\r\n    }\r\n\r\n    .Reader-Bottom-Container {\r\n        height: 55px;\r\n    }\r\n    \r\n    .Reader-Bottom-Container > div {\r\n        width: calc(100% - 10px);\r\n        padding: 5px;\r\n    }\r\n\r\n    // .Reader-Button {\r\n    //     width: calc((100% - 5px) / 2);\r\n    //     margin-right: 5px;\r\n    //     border-radius: 5px;\r\n    //     height: 45px;\r\n    // }\r\n\r\n    .Reader-Button {\r\n        width: calc((100% - 5px) / 1);\r\n        margin-right: 5px;\r\n        border-radius: 5px;\r\n        height: 45px;\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li {\r\n        margin-right: 5px;\r\n    }\r\n    \r\n    .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n","\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pdfViewer .page {\r\n    border: 9px solid transparent;;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n.Outer-Container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.MainContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  min-width: 320px;\r\n}\r\n\r\n#TemplatePDFViewer, \r\n#ReaderPDFViewer, \r\n#PreviewReaderPDFViewer {\r\n  outline: none;\r\n}\r\n\r\n.Viewer-Container {\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  outline: none;\r\n  inset: 128px 300px 300px;\r\n  width: calc(100% - 300px - 300px);\r\n  height: calc(100% - 64px - 64px);\r\n}\r\n\r\n//\r\n.Viewer-Container.full {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  inset: unset !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.leftfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 0px 300px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.rightfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 300px 0px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n\r\n\r\n.Template-Show {\r\n  display: block !important;\r\n}\r\n.Template-Hide {\r\n  display: none !important;\r\n}\r\n\r\n.Attribute-Switch-Label {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.Attribute-Switch-Label input {display:none;}\r\n\r\n/* The slider */\r\n.Attribute-Switch-Slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #e5e5e5;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.Attribute-Switch-Slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  box-shadow: -1.6px 1.2px 5px 0 rgba(0, 0, 0, 0.15);\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #ffffff;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider {\r\n  background-color: #2196F3;\r\n  border: solid 1px #00aada;\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus + .Attribute-Switch-Slider {\r\n  box-shadow: 4px 4.5px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  border: solid 1px #00aada;\r\n}\r\n\r\n/* Rounded sliders */\r\n.Attribute-Switch-Slider.Round {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Attribute-Switch-Slider.Round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n%template-font-info {\r\n  font-family: MalgunGothic;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.Margin-Right-5 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Scale-Seletor-Container {\r\n    position: absolute;\r\n}\r\n\r\n.Scale-Seletor-Container .select2-container--default .select2-selection--single {\r\n    display: none;\r\n}\r\n\r\n\r\n@import     './../css/viewer.css';\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./css/icon/b-hover.svg":
/*!******************************!*\
  !*** ./css/icon/b-hover.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMyI+DQogICAgPHRleHQgeT0iMTMiIGZpbGw9IiNmZmYiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPg0KICAgICAgICBCDQogICAgPC90ZXh0Pg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/b.svg":
/*!************************!*\
  !*** ./css/icon/b.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMyI+DQogICAgPHRleHQgeT0iMTMiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPg0KICAgICAgICBCDQogICAgPC90ZXh0Pg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/field-delete.png":
/*!***********************************!*\
  !*** ./css/icon/field-delete.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAflJREFUeNqklc1KQlEQx8d7rx+bQN2YlYIomSi4qBa9hUEFvUMtapH0AlG5qEW9RFIZrX2DIgj8woufRa7c6CZFbeZwrl2v5/Y58AM9c+bvnDNzRks2mwWB2ZAEZw2ZQ3rIC/KE3CJ3fG3CFIHYOnKKhAQ/ssTZRlQkidzoN0m6zzJywjeE4HujPdc8RhZleIQcwO9Ni0nqM9z4o5hedEMTpLs503uDwSBEIhGQJGm6WjYb8/l8PqPrnNwUsYks6D0OhwO8Xi+Ew2GQZfmzgooC0WiU+WiPweaRLYW3xoQVi0UYjUYs0GKxQD6fZ2KxWAxcLhfU63WoVCqioydIcNW4OhgMmIgm2u/3WUZutxtqtZqZGNkKCc6aeQuFAhPz+/3se7lchmaz+VVxvJKo28dNikWx2+0Td/udUYZvyIzRQcWIx+PgdDpBVVUmRpWlKudyOTO9NxJ8RhaNVabWILFqtQqNRoOtW61W8Hg84+P3elOHe6AjZ4yrJKZVkwT1d9pqtZhoIBAQZZihDNPIsb4X2+02dLvdqWoOh0MolUqsUJ1Oxyj2SloKL8o+cqV5KDMzo5ai4wpsD3nX3hZlmfrHW05xjYnxdYhc/EHsksdOzcMBssunhvoDIZXPgR0eazqxaWje8800vZf5w9cu/pH/BaRFj+JDgAEAEYuaOSvw93gAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/field-input-mode-hover.svg":
/*!*********************************************!*\
  !*** ./css/icon/field-input-mode-hover.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIvPg0KPHBhdGggZD0iTTI0LDMuNmMxMi40LDAsMjAuNCw4LDIwLjQsMjAuNHMtOCwyMC40LTIwLjQsMjAuNFMzLjYsMzYuNCwzLjYsMjRTMTEuNiwzLjYsMjQsMy42IE0yNCwwQzEwLjcsMCwwLDEwLjcsMCwyNA0KCXMxMC43LDI0LDI0LDI0czI0LTEwLjcsMjQtMjRTMzcuMywwLDI0LDBMMjQsMHoiLz4NCjxnPg0KCTxwb2x5Z29uIHBvaW50cz0iMTQsMTMuNCAxNS4yLDEzLjQgMTUuMiwxNi41IDE1LjIsMTkgMTUuMiwzNC42IDE0LDM0LjYgMTQsMzYuNSAxOSwzNi41IDE5LDM0LjYgMTcuOCwzNC42IDE3LjgsMTkgMTcuOCwxNi41IA0KCQkxNy44LDEzLjQgMTksMTMuNCAxOSwxMS41IDE0LDExLjUgCSIvPg0KCTxwb2x5Z29uIHBvaW50cz0iMTEuNSwxOSAxMy40LDE5IDEzLjQsMTYuNSA5LDE2LjUgOSwzMS41IDEzLjQsMzEuNSAxMy40LDI5IDExLjUsMjkgCSIvPg0KCTxwb2x5Z29uIHBvaW50cz0iMTkuNiwxNi41IDE5LjYsMTkgMzYuNSwxOSAzNi41LDI5IDE5LjYsMjkgMTkuNiwzMS41IDM5LDMxLjUgMzksMTYuNSAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/field-input-mode.svg":
/*!***************************************!*\
  !*** ./css/icon/field-input-mode.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0QxRDFEMTt9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiLz4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTQsMTMuNCAxNS4yLDEzLjQgMTUuMiwxNi41IDE1LjIsMTkgMTUuMiwzNC42IDE0LDM0LjYgMTQsMzYuNSAxOSwzNi41IDE5LDM0LjYgMTcuOCwzNC42IDE3LjgsMTkgDQoJCTE3LjgsMTYuNSAxNy44LDEzLjQgMTksMTMuNCAxOSwxMS41IDE0LDExLjUgCSIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTEuNSwxOSAxMy40LDE5IDEzLjQsMTYuNSA5LDE2LjUgOSwzMS41IDEzLjQsMzEuNSAxMy40LDI5IDExLjUsMjkgCSIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTkuNiwxNi41IDE5LjYsMTkgMzYuNSwxOSAzNi41LDI5IDE5LjYsMjkgMTkuNiwzMS41IDM5LDMxLjUgMzksMTYuNSAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/first-page-hover.png":
/*!***************************************!*\
  !*** ./css/icon/first-page-hover.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNJREFUeNpi/P///x0GBobvQKzLgB1wAPEqIH7J8B8CfgIxAxbMDcR7oWrmwBR/xaKQH4iPQOWnAjEjLsXCQHwWKtcJE8emWAKIr0DF65ANQVcMUngTiP8BcQm605gYcIN/GCIEnFGLzxnYPNhBSDEs6I5C5acgBx2uSOFBipTZjEDiMTS61XB4lBOIVwLxa4AAAwD5gl1QNAx1gwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/first-page.png":
/*!*********************************!*\
  !*** ./css/icon/first-page.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNpidHFxucPAwPD9/fv3ugzYAQcQrwLil0xAQhmI1XAo5AbirUDsC8SMTFDBP1gU8gPxTiB2AuJpQJzKhMNEYSDeB8TWQNwFxNlA/B+bYgkgPgjERkBcD8TlMAkWHApVgbgUiHuQJXE5AwT+oQugK34BxPZAfA2Ie4G4lpDJMA3ngLgJiDsIOeMtNMiOQT04BRTOLDg8CgIfgdgdiDdCg44dpOgJKLpx2PAFiH2AeCXIFQABBgCn2iLUbtSAnQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/last-page-hover.png":
/*!**************************************!*\
  !*** ./css/icon/last-page-hover.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJRJREFUeNpi/P///2wGBgZxIA4D4h8M2MFlIOZkACqe8x8C9gAxNxAzYME//0MZjEA8FarhCBDzY1H89T+aQCdUw1kgFiakGITroBouA7EEIcUgXALE/4D4JpIGsGImLD7/x4ALoJlaS6wzOojxICjopkAVHiUUdLOhCvcSihQWoLMZgXgzEIcD8XccXnsIim6AAAMA3p5Y4kdbxu4AAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/last-page.png":
/*!********************************!*\
  !*** ./css/icon/last-page.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMVJREFUeNpiNDY2ns3AwCAOxGFA/IMBCxAUFLwMpDiZgAQjEPsC8RYg5mbADtSAWBmkOBWIpwGxMxDvBGJ+LIr/gAiQ4v9AnA3EXUBsDcT7gFgYm/FMSOxyIK4HYiMgPgDEEvgUg0ATEJcCsTYQH0TXwITFtn84PImhuBaIe4H4KhDbA/ELZEkWJHYH1N3ngNgNiN+im8wCDefJ0BA5BsReQPwRmzNAimcBcQo0yPyA+CsOdXCTNwNxOBB/x+G3h6DoBggwAGvPHw6MLMQnAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/memo-Input-mode-hover.svg":
/*!********************************************!*\
  !*** ./css/icon/memo-Input-mode-hover.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIvPg0KPHBhdGggZD0iTTI0LDMuNmMxMi40LDAsMjAuNCw4LDIwLjQsMjAuNHMtOCwyMC40LTIwLjQsMjAuNFMzLjYsMzYuNCwzLjYsMjRTMTEuNiwzLjYsMjQsMy42IE0yNCwwQzEwLjcsMCwwLDEwLjcsMCwyNA0KCXMxMC43LDI0LDI0LDI0czI0LTEwLjcsMjQtMjRTMzcuMywwLDI0LDBMMjQsMHoiLz4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjI2LjMsMjEuMiAyOC40LDE5LjIgMzEuNywyMi40IDI5LjYsMjQuNCAJCSIvPg0KCQk8cG9seWdvbiBwb2ludHM9IjIxLjUsMjYgMjEuNCwyNiAxNi43LDMwLjYgMTYuNywzMC43IDE2LjcsMzMuNiAyMC4zLDMzLjYgMjQuNCwyOS41IDI0LjQsMjkuNSAyOC43LDI1LjQgMjUuNCwyMi4yIAkJIi8+DQoJPC9nPg0KCTxwYXRoIGQ9Ik0zNi41LDE0LjlMMzAuNiw5SDExLjV2MzBoMjVWMTQuOXogTTE0LjUsMzUuOUwxNC41LDM1LjlWMTJIMjl2NC41aDQuNFYzNkwxNC41LDM1LjlMMTQuNSwzNS45eiIvPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/memo-add-mode-hover.svg":
/*!******************************************!*\
  !*** ./css/icon/memo-add-mode-hover.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIvPg0KPHBhdGggZD0iTTI0LDMuNmMxMi40LDAsMjAuNCw4LDIwLjQsMjAuNHMtOCwyMC40LTIwLjQsMjAuNFMzLjYsMzYuNCwzLjYsMjRTMTEuNiwzLjYsMjQsMy42IE0yNCwwQzEwLjcsMCwwLDEwLjcsMCwyNA0KCXMxMC43LDI0LDI0LDI0czI0LTEwLjcsMjQtMjRTMzcuMywwLDI0LDBMMjQsMHoiLz4NCjxnPg0KCTxwYXRoIGQ9Ik0zNi41LDE0LjlMMzAuNiw5SDExLjV2MzBoMjVWMTQuOXogTTE0LjUsMzUuOUwxNC41LDM1LjlWMTJIMjl2NC41aDQuNFYzNkwxNC41LDM1LjlMMTQuNSwzNS45eiIvPg0KCTxwYXRoIGQ9Ik0yNCwxOS45Yy0zLjQsMC02LjIsMi44LTYuMiw2LjJzMi44LDYuMiw2LjIsNi4yczYuMi0yLjgsNi4yLTYuMlMyNy40LDE5LjksMjQsMTkuOXogTTI3LjYsMjcuMWgtMi44djIuOEgyM3YtMi44aC0yLjgNCgkJdi0xLjhIMjN2LTIuOGgxLjh2Mi44aDIuOFYyNy4xeiIvPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/memo-add-mode.svg":
/*!************************************!*\
  !*** ./css/icon/memo-add-mode.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0QxRDFEMTt9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNi41LDE0LjlMMzAuNiw5SDExLjV2MzBoMjVWMTQuOXogTTE0LjUsMzUuOUwxNC41LDM1LjlWMTJIMjl2NC41aDQuNFYzNkwxNC41LDM1LjlMMTQuNSwzNS45eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNCwxOS45Yy0zLjQsMC02LjIsMi44LTYuMiw2LjJzMi44LDYuMiw2LjIsNi4yczYuMi0yLjgsNi4yLTYuMlMyNy40LDE5LjksMjQsMTkuOXogTTI3LjYsMjcuMWgtMi44djIuOA0KCQloLTEuOHYtMi44aC0yLjh2LTEuOGgyLjh2LTIuOGgxLjh2Mi44aDIuOFYyNy4xeiIvPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/memo-input-mode.svg":
/*!**************************************!*\
  !*** ./css/icon/memo-input-mode.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0QxRDFEMTt9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiLz4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI2LjMsMjEuMiAyOC40LDE5LjIgMzEuNywyMi40IDI5LjYsMjQuNCAJCSIvPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIxLjUsMjYgMjEuNCwyNiAxNi43LDMwLjYgMTYuNywzMC43IDE2LjcsMzMuNiAyMC4zLDMzLjYgMjQuNCwyOS41IDI0LjQsMjkuNSAyOC43LDI1LjQgMjUuNCwyMi4yIA0KCQkJCQkiLz4NCgk8L2c+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTM2LjUsMTQuOUwzMC42LDlIMTEuNXYzMGgyNVYxNC45eiBNMTQuNSwzNS45TDE0LjUsMzUuOVYxMkgyOXY0LjVoNC40VjM2TDE0LjUsMzUuOUwxNC41LDM1Ljl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/next-page-hover.png":
/*!**************************************!*\
  !*** ./css/icon/next-page-hover.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIBJREFUeNpi+P///2wg3gTEHEDMgI6ZGBgYGIHYF4i3ADE3AzoAqmIE4qn/IeAIEPMjm4BsXCdU0VkgFsamAITroIouA7EENgUgXALE/4D4JkgREwMm+IfuSGRci8+KDlyOBHlzClTyKDZvzoZK7gViblwhuRmIfYD4K7qLAQIMAHLb77dYQhvQAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/next-page.png":
/*!********************************!*\
  !*** ./css/icon/next-page.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKdJREFUeNpiNDY2ns3AwCAOxGFA/IMBDTABMSMQ+wLxFiDmxqYgFYinAbEzEO8EYn50Bf+BOBuIu4DYGoj3AbEwsgIYKAfieiA2AuIDQCyBrgAEmoC4FIi1gfggSBG6AhD4h+4GZFALxL1AfBWI7YH4BQuSZAfUHeeA2A2I34IEWaDhMBnqk2NA7AXEH2G6QApmAXEK1Ht+QPwVW0huBmIfdEkQAAgwAD85G72lLYt2AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/prev-page-hover.png":
/*!**************************************!*\
  !*** ./css/icon/prev-page-hover.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAH5JREFUeNpi/P//PwMWwAHEq4D4JRMWSW4g3grEvkDMyAAyAQnzA/GR/xAwFYhRFAgD8VmoZCdMHCYpAcRXoJJ1yKbCJG8C8T8gLkGzkgHdkf8wnIzFilp0K7A5sgObApg3j0IVTUH3JgzzAPFeqKLZjDiCmhOIVwLxa4AAAwDSbN27XK66ngAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/prev-page.png":
/*!********************************!*\
  !*** ./css/icon/prev-page.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ1JREFUeNpiNDY2ZsACOIB4FRC/ZMIiyQ3EW4HYF4gZ0RXwA/FOIHYC4mlAnIqsQBiI9wGxNRB3AXE2EP+HKZAA4oNAbATE9UBcDtPFgiSpCsSlQNyDbCe6G/6huxik4AUQ2wPxNSDuBeJabCbAFJ0D4iYg7sBmxVuo945BHTkFFA4saFZ+BGJ3IN4I9SY7tpD8AsQ+QLwZZANAgAEAPFMauHSYZvsAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/properties.svg":
/*!*********************************!*\
  !*** ./css/icon/properties.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQkRCREJEO30NCjwvc3R5bGU+DQo8Zz4NCgk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMjQiIGN5PSIyNCIgcng9IjQuMiIgcnk9IjQuMSIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNCwwQzEwLjcsMCwwLDEwLjcsMCwyNHMxMC43LDI0LDI0LDI0czI0LTEwLjcsMjQtMjRTMzcuMywwLDI0LDB6IE0zNC44LDI0YzAsMC41LTAuMSwwLjktMC4xLDEuNGwzLDIuMw0KCQljMC4zLDAuMiwwLjQsMC42LDAuMiwwLjlMMzUsMzMuNGMtMC4xLDAuMi0wLjQsMC4zLTAuNiwwLjNjLTAuMSwwLTAuMiwwLTAuMy0wLjFsLTMuNi0xLjRjLTAuOCwwLjYtMS42LDEtMi41LDEuNGwtMC41LDMuNw0KCQljLTAuMSwwLjMtMC40LDAuNi0wLjcsMC42aC01LjhjLTAuNCwwLTAuNi0wLjItMC43LTAuNmwtMC41LTMuN2MtMC45LTAuMy0xLjctMC44LTIuNS0xLjRsLTMuNiwxLjRjLTAuMSwwLjEtMC4yLDAuMS0wLjIsMC4xDQoJCWMtMC4yLDAtMC41LTAuMS0wLjYtMC4zbC0yLjktNC44Yy0wLjItMC4zLTAuMS0wLjYsMC4yLTAuOWwzLTIuM2MtMC4xLTAuNS0wLjEtMC45LTAuMS0xLjRzMC4xLTAuOSwwLjEtMS40bC0zLTIuMw0KCQljLTAuMy0wLjItMC40LTAuNi0wLjItMC45bDIuOS00LjhjMC4xLTAuMiwwLjQtMC4zLDAuNi0wLjNjMC4xLDAsMC4yLDAsMC4zLDAuMWwzLjYsMS40YzAuNy0wLjUsMS41LTEsMi40LTEuM2wwLjUtMy43DQoJCWMwLjEtMC4zLDAuNC0wLjYsMC43LTAuNmg1LjhjMC40LDAsMC42LDAuMiwwLjcsMC42bDAuNiwzLjdjMC45LDAuMywxLjcsMC44LDIuNSwxLjRsMy42LTEuNGMwLjEtMC4xLDAuMi0wLjEsMC4yLTAuMQ0KCQljMC4yLDAsMC41LDAuMSwwLjYsMC4zbDIuOSw0LjhjMC4yLDAuMywwLjEsMC42LTAuMiwwLjlsLTMsMi4zQzM0LjcsMjMsMzQuOCwyMy40LDM0LjgsMjR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/text-align-center-hover.png":
/*!**********************************************!*\
  !*** ./css/icon/text-align-center-hover.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNJREFUeNpi/P//PwMawBBAAozIHCYGCgALIdPxAYpsptjZ/wfMZsYBsZnq8UyfFAYQYACNbQYe69ASGAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/text-align-center.png":
/*!****************************************!*\
  !*** ./css/icon/text-align-center.png ***!
  \****************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNJREFUeNpiNDY2ZkAD/xlwA0ZkDhMDBYCFkOn4AEU2U+zs/wNmM+OA2Ez1eKZPCgMIMAC73AO6tlHbwQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/text-align-left-hover.png":
/*!********************************************!*\
  !*** ./css/icon/text-align-left-hover.png ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACxJREFUeNpi/A8EDPgBIy4JJgYKAAs+kwkBimym2Nn/B8zmYR5gjFS1GSDAAK1tBh5CGH+aAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/text-align-left.png":
/*!**************************************!*\
  !*** ./css/icon/text-align-left.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeNpiNDY2/s+AHzDikmBioACw4DOZEKDIZoqd/X/AbB7mAcZIVZsBAgwA29wDumpElCEAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/text-align-right-hover.png":
/*!*********************************************!*\
  !*** ./css/icon/text-align-right-hover.png ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC9JREFUeNpi/P//PwMegFeSiYECwEJAnpFmNlPs7P8DZjPjgNhM9Xj+TxebAQIMAH53BhxwZY+PAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/text-align-right.png":
/*!***************************************!*\
  !*** ./css/icon/text-align-right.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBJREFUeNpiNDY2ZsAD/uOTZGKgALAQkGekmc0UO/v/gNnMOCA2Uz2e/9PFZoAAAwCs5gO43cpcOQAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/zoom-in-btn2-hover.png":
/*!*****************************************!*\
  !*** ./css/icon/zoom-in-btn2-hover.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa9JREFUeNqc1E1IlEEcx/Fn1zUVX0hEEZE8iEISWigUKNFChJfAg0KpJ8WDePIg7E3BUyAIHcSLkuELmIEHEaFAQcE30FjoUuph2cOaFuhBkED8DvyeZRxXEf/wwWGe3d/MzvwfA97sL8+parzHUxTiEFuYwbUP+xW0xrmYxA9EUKX5ZxjAT4wg87Ygs/I62vAJFShDHUpQg3l04xuybgoa0w460YE953NRtKAPDRhOFRTGW3zEuPWsGf/wwpob0s/vwhM3yOziPwadRR4gHyFnvh8B7TxZIZ3DNv4iDXl6lm1dQr7GJzjAb33vSlCRbsrTOUWdHSxaY3MBMSRQ7Aad6dZMHeGDFWrObgpxzZ3q70NrnAzaxSv1R0I9ZKpVQaNYs75TgMeYcA97GjnqkbtUL9LxxZ4M8IqYsB014Ws1pqlHeI5lHGvuDRZ0OfXuji70M87xHT1aMaZVj9XJEYWYZ7VodHfkjyvxVY1mWmEVf/SKvFRbbOhiyrVwE5bcIP/w27VD/+03O9rEZ8wpeMUNC6T4N3KXKnXDgt79Kq6W2UcG3t03yA8L60XuvBRgAOrPWygQtxSJAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/zoom-in-btn2.png":
/*!***********************************!*\
  !*** ./css/icon/zoom-in-btn2.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaJJREFUeNqc00sohFEUwPFvGK88MokkZSGK5NFYEMlsNBtl4W3FRMnKguwoNkopC9kQ5ZGkLCRhoQhRHlNK47GYZuFdLJSU/G8dum4Ip37N7d75zj3fd8+1OZ1Oy4hs1CEX8bjCLmbgs76JIG0cjUkcoguZMp+HHhxjGOE/JVI7b6MB40hDCvKRhBwsoBWriPgu0ahU4EETzoz/eVGFDhRj8KtELpRjCGPaWiXuUaDNDcjrNyPLTKSqeEGvsUkoHLAb892wSeUfYZfvsIc7BCNG1iK1Q3DI+AEXOJXnPiVKkJOy5Dt5jQqWtLE6AD8ukWgmepJTU3GDfi2p+nZTCMjco/zGauOPRAcolf64lB5SUS+JRrCpPROHDEyYH3saUdIjv4l2hGDOTDSLI/ShUFtTVVTjRJsrQye2sGImepXXeMYa2mRHv+x6K52sXnlR1tQFdeuJbNqlTce8NJpqhQ1cyxUpkbbYkYNJlY0rsGxeWp9c0Ebsowgt0tkqaY3MqYM5R5jcP7dZ0V8iGet6ZUHW/yJgVFb730TvyVxykT1vAgwAB6lVSn0ToEkAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/zoom-out-btn2-hover.png":
/*!******************************************!*\
  !*** ./css/icon/zoom-out-btn2-hover.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXpJREFUeNqc1EsoRFEcx/E7g5hCSiQpC1Ekj9iRTEk2ykZ5rUwWsrJQdpSVUsrCjpAoj7KYhWKhLLwKTdl4LWQxXgsWSkq+t353uo6Z2zT/+jSnO3d+99xz/md81sa1ZVQNelGHAjzhFOv4d7NTftc4B6u4xDiqdL0ek7jCPLK8guwnH6EfSyhHKRpRjFrsYBh7CCQKWtAMQhjErXFfBN0YQzNm4wUF0Yk5LFreNaPXH0K1GWTP4htTVnI1AZ9mHqt0rcMZ3pCGXI+Qd9zjRr/7E1SonbK0ThGPIHsDHhBFkRn0qV2z6wXTHkEf+sxzjWNBF2hVf0TVQ16Vj0osm4u9hmz1SDI1igxsui/6OCJ22LmasE2NmajaEdbmNJkz+kEfvrCPET3RXQG9cljfNaDDnJEzrsC2Gs1uhUM864i0qC2OtTFlenAXds0gZ/EHNEPn9L/iBCvYUvCBGeaL8zeSTJWYYX4rtXpUy9whEz2pBjlhQR3k0K8AAwA9X1A4I0ogYwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/zoom-out-btn2.png":
/*!************************************!*\
  !*** ./css/icon/zoom-out-btn2.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXlJREFUeNqc00soRFEcx/FzBzGFlEhSFqJIHl0LIpmNZqNs5LViomRlQXaU2SilLOyIEknKwkJYKIUojymb8VjIYpAFCyUl31N/03Uy15h/fZrbnXt/59xzzt+ybVsZVYFOVCEHDzjGCsIqRnkc1xlYwjlGUSb3qzGOS8wizS1Ij3yIbiygGIWoQT4qsYEB7MAbK2hOZhBAL66N50JowzAaMP1bkA8tmMG8cq8p+fw+lJtBehYfmFDx1RgsmXm0kmUdTvCMJGS6hLzgFlfy3o+gXNkpJesUcgnSG3CHCPLMoDfZNV1PmHQJepXfLMd1NOgMTXI+InKG3CobpVg0F3sZ6XJG4qkhpGDNDFrFBYKo+yOkGSM4wLYZ9IkuvGMXgzKis7zyyZvyn25Qv/MBy9G0JViXg6aPwj4epUUa5VgcycYUycCt2DKbNiwN2oNT1KMftRLaLvf0xtwgVfrPb87oP1WAPefMPCqxujdm1pFo0HeYTxo58CXAAGrISmgc0ZAnAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/zoom-select-down.png":
/*!***************************************!*\
  !*** ./css/icon/zoom-select-down.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADVJREFUeNpiZFh16z8DBDAyYAKwHBOS5H9sCkDyTGim/EdXADOJAYdCuPVMaFYwYnMfQIABAFLLCJAYqNv4AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/images/bg_upload.png":
/*!**********************************!*\
  !*** ./css/images/bg_upload.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAIAAAACtmMCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAY5JREFUeNqkVcuShCAMpCPlHub/v3RqDj7WbAKogQHU2hxmUJuQdDoB7/cbINcwZgewWFhzFRkxUJw++nlelnUlhXINrVD5f71ePz9j6+wIk99lWTy7uMdtafNp2NEhCiCdim+PcSN2EBIIJVR3CwA2Mrgr8+fmb5enGxTh2HyLTz54434I7B4YcXsnP3N1ZM2FEv5rhJyLBke3Dop4Ujq5twsPiaQoG9RYi7U7Gua70PZNEvW2aa3Dwy7Sapg4vQM9ScpX8YiAixFmjB7St2lXSbeRejEi0k5DqUgIEZujUDxJR3o2Nm8nRs16HMdhGHaPXLSKeALk6zbP0+fz6ZZED9YAB7X2NKNBCWGapmldf1sTL3ItC6LBd4lOlbqqRrbwj3vCeueKVn21ZLXK4pjSlrqUstEDPQzw4r2MZt8J0LQNOpI2bHCWdV9oXBtLbHhMNRQBXZXhlHTzSD5ugaC3G7XFbZr5Qj0mQLSrU0xs9kcqN2JBfillR+ytAM/xPs4HTGM41+VjstDlnwADAPwg0U5x0ugYAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/images/findbarButton-next.svg":
/*!*******************************************!*\
  !*** ./css/images/findbarButton-next.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik04IDEyYTEgMSAwIDAgMS0uNzA3LS4yOTNsLTUtNWExIDEgMCAwIDEgMS40MTQtMS40MTRMOCA5LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAwIDEgMS40MTQgMS40MTRsLTUgNUExIDEgMCAwIDEgOCAxMnoiPjwvcGF0aD48L3N2Zz4=";

/***/ }),

/***/ "./css/images/findbarButton-previous.svg":
/*!***********************************************!*\
  !*** ./css/images/findbarButton-previous.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xMyAxMWExIDEgMCAwIDEtLjcwNy0uMjkzTDggNi40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNGw1LTVhMSAxIDAgMCAxIDEuNDE0IDBsNSA1QTEgMSAwIDAgMSAxMyAxMXoiPjwvcGF0aD48L3N2Zz4=";

/***/ }),

/***/ "./css/images/ic-tooltip.svg":
/*!***********************************!*\
  !*** ./css/images/ic-tooltip.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik04IDE2QzYuNDE3NzUgMTYgNC44NzEwMyAxNS41MzA4IDMuNTU1NDQgMTQuNjUxOEMyLjIzOTg1IDEzLjc3MjcgMS4yMTQ0NyAxMi41MjMzIDAuNjA4OTY3IDExLjA2MTVDMC4wMDM0NjYyNSA5LjU5OTY2IC0wLjE1NDk2IDcuOTkxMTMgMC4xNTM3MjEgNi40MzkyOEMwLjQ2MjQwMyA0Ljg4NzQzIDEuMjI0MzMgMy40NjE5NyAyLjM0MzE1IDIuMzQzMTVDMy40NjE5NyAxLjIyNDMzIDQuODg3NDMgMC40NjI0MDMgNi40MzkyOCAwLjE1MzcyMUM3Ljk5MTEzIC0wLjE1NDk2IDkuNTk5NjYgMC4wMDM0NjYyNSAxMS4wNjE1IDAuNjA4OTY3QzEyLjUyMzMgMS4yMTQ0NyAxMy43NzI3IDIuMjM5ODUgMTQuNjUxOCAzLjU1NTQ0QzE1LjUzMDggNC44NzEwMyAxNiA2LjQxNzc1IDE2IDhDMTYgMTAuMTIxNyAxNS4xNTcxIDEyLjE1NjYgMTMuNjU2OSAxMy42NTY5QzEyLjE1NjYgMTUuMTU3MSAxMC4xMjE3IDE2IDggMTZaTTggMC45NDEwMDRDNi42MDM5MSAwLjk0MTIwMSA1LjIzOTIyIDEuMzU1MzcgNC4wNzg1MSAyLjEzMTE1QzIuOTE3NzkgMi45MDY5MiAyLjAxMzE4IDQuMDA5NDUgMS40NzkwNSA1LjI5OTMzQzAuOTQ0OTI1IDYuNTg5MjIgMC44MDUyNzYgOC4wMDg1MSAxLjA3Nzc2IDkuMzc3NzZDMS4zNTAyNSAxMC43NDcgMi4wMjI2MyAxMi4wMDQ3IDMuMDA5ODkgMTIuOTkxOEMzLjk5NzE1IDEzLjk3ODkgNS4yNTQ5NCAxNC42NTExIDYuNjI0MjMgMTQuOTIzNEM3Ljk5MzUxIDE1LjE5NTcgOS40MTI3OSAxNS4wNTU5IDEwLjcwMjYgMTQuNTIxNkMxMS45OTI0IDEzLjk4NzMgMTMuMDk0OCAxMy4wODI1IDEzLjg3MDQgMTEuOTIxN0MxNC42NDYgMTAuNzYwOCAxNS4wNiA5LjM5NjEgMTUuMDYgOEMxNS4wNiA3LjA3MjkyIDE0Ljg3NzQgNi4xNTQ5MSAxNC41MjI2IDUuMjk4NDFDMTQuMTY3OCA0LjQ0MTkxIDEzLjY0NzcgMy42NjM2OSAxMi45OTIxIDMuMDA4MThDMTIuMzM2NSAyLjM1MjY4IDExLjU1ODIgMS44MzI3NCAxMC43MDE3IDEuNDc4MDVDOS44NDUxMiAxLjEyMzM2IDguOTI3MDkgMC45NDA4NzIgOCAwLjk0MTAwNFoiIGZpbGw9IiNCMkIyQjIiLz4NCjxwYXRoIGQ9Ik04LjcwMzg3IDYuMTE1OThDOC43MDk5MyA2LjAwMDMgOC42OTEwNiA1Ljg4NDY3IDguNjQ4NTEgNS43NzY5MkM4LjYwNTk3IDUuNjY5MTggOC41NDA3NiA1LjU3MTg0IDguNDU3MyA1LjQ5MTUxQzguMzczODQgNS40MTExOCA4LjI3NDA4IDUuMzQ5NzQgOC4xNjQ3OSA1LjMxMTM0QzguMDU1NSA1LjI3Mjk0IDcuOTM5MjMgNS4yNTg1IDcuODIzODcgNS4yNjg5OEM3LjYwMjYzIDUuMjgwODQgNy4zODYyNiA1LjMzODUxIDcuMTg4NDcgNS40MzgzNUM2Ljk5MDY5IDUuNTM4MTkgNi44MTU3OSA1LjY3ODAyIDYuNjc0ODcgNS44NDg5OEw1LjgzODg3IDUuMDgwOThDNi4xMDQzMiA0Ljc2MTE3IDYuNDM2MTcgNC41MDI5NSA2LjgxMTQxIDQuMzI0MjJDNy4xODY2NCA0LjE0NTUgNy41OTYyNyA0LjA1MDU1IDguMDExODcgNC4wNDU5OEM4LjI4NzQ5IDQuMDA4NjcgOC41Njc5NSA0LjAzMjMzIDguODMzNDMgNC4xMTUyOUM5LjA5ODkgNC4xOTgyNSA5LjM0MjkzIDQuMzM4NDggOS41NDgyOCA0LjUyNjA4QzkuNzUzNjIgNC43MTM2OCA5LjkxNTI3IDQuOTQ0MDggMTAuMDIxOCA1LjIwMTAxQzEwLjEyODQgNS40NTc5MyAxMC4xNzcyIDUuNzM1MTEgMTAuMTY0OSA2LjAxMjk4QzEwLjE2NDkgNy40ODI5OCA4LjM2NDg3IDcuOTc4OTggOC41MTg4NyA5LjQzODk4SDcuMTkzODdDNi45NDQ4NyA3Ljc3MTk4IDguNzAzODcgNy4xMDg5OCA4LjcwMzg3IDYuMTE1OThaTTYuOTE1ODcgMTEuMTk2QzYuOTI2NTcgMTAuOTc3MSA3LjAxMjU2IDEwLjc2ODYgNy4xNTkyNyAxMC42MDU4QzcuMzA1OTggMTAuNDQzIDcuNTA0NDIgMTAuMzM1OSA3LjcyMTAzIDEwLjMwMjVDNy45Mzc2MyAxMC4yNjkyIDguMTU5MTEgMTAuMzExNyA4LjM0OCAxMC40MjI4QzguNTM2ODggMTAuNTMzOSA4LjY4MTU5IDEwLjcwNjkgOC43NTc2NCAxMC45MTI0QzguODMzNjkgMTEuMTE4IDguODM2NDEgMTEuMzQzNSA4Ljc2NTM1IDExLjU1MDhDOC42OTQzIDExLjc1ODEgOC41NTM4MSAxMS45MzQ1IDguMzY3NjcgMTIuMDUwMkM4LjE4MTUyIDEyLjE2NTkgNy45NjExNCAxMi4yMTM3IDcuNzQzNzkgMTIuMTg1NkM3LjUyNjQ1IDEyLjE1NzUgNy4zMjU0NyAxMi4wNTUyIDcuMTc0ODcgMTEuODk2QzcuMDg2NTggMTEuODAyOSA3LjAxODEgMTEuNjkyOSA2Ljk3MzU4IDExLjU3MjVDNi45MjkwNiAxMS40NTIyIDYuOTA5NDMgMTEuMzI0MSA2LjkxNTg3IDExLjE5NloiIGZpbGw9IiNCMkIyQjIiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./css/images/ic_pulldown.png":
/*!************************************!*\
  !*** ./css/images/ic_pulldown.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAQAAABn7dZ6AAAAXklEQVQIHQXBIQqDUAAA0Pf54mAI/rIz2ecFPIHBrmAyDdYXzII2g9Vm80p7j0IGAIDE2yoCAHoTDGYBAK1NBD6+ABqHHCD4GUHt9ASAaNGpXEoAgNzu9gIAgIcEwB8SZAzJbA/MewAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/images/loading-dark.svg":
/*!*************************************!*\
  !*** ./css/images/loading-dark.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiINCmZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMSkiIHN0eWxlPSJhbmltYXRpb246c3BpbkxvYWRpbmdJY29uIDFzIHN0ZXBzKDEyLGVuZCkNCmluZmluaXRlIj48c3R5bGU+QGtleWZyYW1lcw0Kc3BpbkxvYWRpbmdJY29ue3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19PC9zdHlsZT48cGF0aA0KZD0iTTcgM1YxczAtMSAxLTEgMSAxIDEgMXYyczAgMS0xIDEtMS0xLTEtMXoiLz48cGF0aCBkPSJNNC42Mw0KNC4xbC0xLTEuNzNTMy4xMyAxLjUgNCAxYy44Ny0uNSAxLjM3LjM3IDEuMzcuMzdsMSAxLjczcy41Ljg3LS4zNw0KMS4zN2MtLjg3LjU3LTEuMzctLjM3LTEuMzctLjM3eiIgZmlsbC1vcGFjaXR5PSIuOTMiLz48cGF0aA0KZD0iTTMuMSA2LjM3bC0xLjczLTFTLjUgNC44NyAxIDRjLjUtLjg3IDEuMzctLjM3IDEuMzctLjM3bDEuNzMgMXMuODcuNS4zNw0KMS4zN2MtLjUuODctMS4zNy4zNy0xLjM3LjM3eiIgZmlsbC1vcGFjaXR5PSIuODYiLz48cGF0aCBkPSJNMw0KOUgxUzAgOSAwIDhzMS0xIDEtMWgyczEgMCAxIDEtMSAxLTEgMXoiIGZpbGwtb3BhY2l0eT0iLjc5Ii8+PHBhdGggZD0iTTQuMSAxMS4zN2wtMS43MyAxUzEuNSAxMi44NyAxDQoxMmMtLjUtLjg3LjM3LTEuMzcuMzctMS4zN2wxLjczLTFzLjg3LS41IDEuMzcuMzdjLjUuODctLjM3IDEuMzctLjM3IDEuMzd6Ig0KZmlsbC1vcGFjaXR5PSIuNzIiLz48cGF0aCBkPSJNMy42MyAxMy41NmwxLTEuNzNzLjUtLjg3DQoxLjM3LS4zN2MuODcuNS4zNyAxLjM3LjM3IDEuMzdsLTEgMS43M3MtLjUuODctMS4zNy4zN2MtLjg3LS41LS4zNy0xLjM3LS4zNy0xLjM3eiINCmZpbGwtb3BhY2l0eT0iLjY1Ii8+PHBhdGggZD0iTTcgMTV2LTJzMC0xIDEtMSAxIDEgMSAxdjJzMCAxLTENCjEtMS0xLTEtMXoiIGZpbGwtb3BhY2l0eT0iLjU4Ii8+PHBhdGggZD0iTTEwLjYzDQoxNC41NmwtMS0xLjczcy0uNS0uODcuMzctMS4zN2MuODctLjUgMS4zNy4zNyAxLjM3LjM3bDEgMS43M3MuNS44Ny0uMzcNCjEuMzdjLS44Ny41LTEuMzctLjM3LTEuMzctLjM3eiIgZmlsbC1vcGFjaXR5PSIuNTEiLz48cGF0aA0KZD0iTTEzLjU2IDEyLjM3bC0xLjczLTFzLS44Ny0uNS0uMzctMS4zN2MuNS0uODcgMS4zNy0uMzcgMS4zNy0uMzdsMS43MyAxcy44Ny41LjM3DQoxLjM3Yy0uNS44Ny0xLjM3LjM3LTEuMzcuMzd6IiBmaWxsLW9wYWNpdHk9Ii40NCIvPjxwYXRoIGQ9Ik0xNQ0KOWgtMnMtMSAwLTEtMSAxLTEgMS0xaDJzMSAwIDEgMS0xIDEtMSAxeiIgZmlsbC1vcGFjaXR5PSIuMzciLz48cGF0aCBkPSJNMTQuNTYgNS4zN2wtMS43Mw0KMXMtLjg3LjUtMS4zNy0uMzdjLS41LS44Ny4zNy0xLjM3LjM3LTEuMzdsMS43My0xcy44Ny0uNSAxLjM3LjM3Yy41Ljg3LS4zNyAxLjM3LS4zNw0KMS4zN3oiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNOS42NCAzLjFsLjk4LTEuNjZzLjUtLjg3NA0KMS4zNy0uMzdjLjg3LjUuMzcgMS4zNy4zNyAxLjM3bC0xIDEuNzNzLS41Ljg3LTEuMzcuMzdjLS44Ny0uNS0uMzctMS4zNy0uMzctMS4zN3oiDQpmaWxsLW9wYWNpdHk9Ii4yMyIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/loading-icon.gif":
/*!*************************************!*\
  !*** ./css/images/loading-icon.gif ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/gif;base64,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";

/***/ }),

/***/ "./css/images/loading.svg":
/*!********************************!*\
  !*** ./css/images/loading.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiIgc3R5bGU9ImFuaW1hdGlvbjpzcGluTG9hZGluZ0ljb24gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZSI+PHN0eWxlPkBrZXlmcmFtZXMgc3BpbkxvYWRpbmdJY29ue3Rve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19PC9zdHlsZT48cGF0aCBkPSJNNyAzVjFzMC0xIDEtMSAxIDEgMSAxdjJzMCAxLTEgMS0xLTEtMS0xeiIvPjxwYXRoIGQ9Ik00LjYzIDQuMWwtMS0xLjczUzMuMTMgMS41IDQgMWMuODctLjUgMS4zNy4zNyAxLjM3LjM3bDEgMS43M3MuNS44Ny0uMzcgMS4zN2MtLjg3LjU3LTEuMzctLjM3LTEuMzctLjM3eiIgZmlsbC1vcGFjaXR5PSIuOTMiLz48cGF0aCBkPSJNMy4xIDYuMzdsLTEuNzMtMVMuNSA0Ljg3IDEgNGMuNS0uODcgMS4zNy0uMzcgMS4zNy0uMzdsMS43MyAxcy44Ny41LjM3IDEuMzdjLS41Ljg3LTEuMzcuMzctMS4zNy4zN3oiIGZpbGwtb3BhY2l0eT0iLjg2Ii8+PHBhdGggZD0iTTMgOUgxUzAgOSAwIDhzMS0xIDEtMWgyczEgMCAxIDEtMSAxLTEgMXoiIGZpbGwtb3BhY2l0eT0iLjc5Ii8+PHBhdGggZD0iTTQuMSAxMS4zN2wtMS43MyAxUzEuNSAxMi44NyAxIDEyYy0uNS0uODcuMzctMS4zNy4zNy0xLjM3bDEuNzMtMXMuODctLjUgMS4zNy4zN2MuNS44Ny0uMzcgMS4zNy0uMzcgMS4zN3oiIGZpbGwtb3BhY2l0eT0iLjcyIi8+PHBhdGggZD0iTTMuNjMgMTMuNTZsMS0xLjczcy41LS44NyAxLjM3LS4zN2MuODcuNS4zNyAxLjM3LjM3IDEuMzdsLTEgMS43M3MtLjUuODctMS4zNy4zN2MtLjg3LS41LS4zNy0xLjM3LS4zNy0xLjM3eiIgZmlsbC1vcGFjaXR5PSIuNjUiLz48cGF0aCBkPSJNNyAxNXYtMnMwLTEgMS0xIDEgMSAxIDF2MnMwIDEtMSAxLTEtMS0xLTF6IiBmaWxsLW9wYWNpdHk9Ii41OCIvPjxwYXRoIGQ9Ik0xMC42MyAxNC41NmwtMS0xLjczcy0uNS0uODcuMzctMS4zN2MuODctLjUgMS4zNy4zNyAxLjM3LjM3bDEgMS43M3MuNS44Ny0uMzcgMS4zN2MtLjg3LjUtMS4zNy0uMzctMS4zNy0uMzd6IiBmaWxsLW9wYWNpdHk9Ii41MSIvPjxwYXRoIGQ9Ik0xMy41NiAxMi4zN2wtMS43My0xcy0uODctLjUtLjM3LTEuMzdjLjUtLjg3IDEuMzctLjM3IDEuMzctLjM3bDEuNzMgMXMuODcuNS4zNyAxLjM3Yy0uNS44Ny0xLjM3LjM3LTEuMzcuMzd6IiBmaWxsLW9wYWNpdHk9Ii40NCIvPjxwYXRoIGQ9Ik0xNSA5aC0ycy0xIDAtMS0xIDEtMSAxLTFoMnMxIDAgMSAxLTEgMS0xIDF6IiBmaWxsLW9wYWNpdHk9Ii4zNyIvPjxwYXRoIGQ9Ik0xNC41NiA1LjM3bC0xLjczIDFzLS44Ny41LTEuMzctLjM3Yy0uNS0uODcuMzctMS4zNy4zNy0xLjM3bDEuNzMtMXMuODctLjUgMS4zNy4zN2MuNS44Ny0uMzcgMS4zNy0uMzcgMS4zN3oiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNOS42NCAzLjFsLjk4LTEuNjZzLjUtLjg3NCAxLjM3LS4zN2MuODcuNS4zNyAxLjM3LjM3IDEuMzdsLTEgMS43M3MtLjUuODctMS4zNy4zN2MtLjg3LS41LS4zNy0xLjM3LS4zNy0xLjM3eiIgZmlsbC1vcGFjaXR5PSIuMjMiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-documentProperties.svg":
/*!******************************************************************!*\
  !*** ./css/images/secondaryToolbarButton-documentProperties.svg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYNCjE2Ij4NCjxwYXRoIA0KICAgZD0iTTggMTZhOCA4IDAgMSAxIDgtOCA4LjAwOSA4LjAwOSAwIDAgMS04IDh6TTggMmE2IDYgMCAxIDAgNiA2IDYuMDA2IDYuMDA2IDAgMCAwLTYtNnoiPg0KPC9wYXRoPg0KPHBhdGggDQogICBkPSJNOCA3YTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMiAwVjhhMSAxIDAgMCAwLTEtMXoiPg0KPC9wYXRoPg0KPGNpcmNsZQ0KICAgY3g9IjgiIGN5PSI1IiByPSIxLjE4OCI+DQo8L2NpcmNsZT4NCjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-firstPage.svg":
/*!*********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-firstPage.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDEzYy0uMyAwLS41LS4xLS43LS4zTDggOC40bC00LjMgNC4zYy0uOS45LTIuMy0uNS0xLjQtMS40bDUtNWMuNC0uNCAxLS40IDEuNCAwbDUgNWMuNi42LjIgMS43LS43IDEuN3ptMC0xMUgzQzEuNyAyIDEuNyA0IDMgNGgxMGMxLjMgMCAxLjMtMiAwLTJ6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-handTool.svg":
/*!********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-handTool.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTE1IDMuN1YxM2MwIDEuNS0xLjUzIDMtMyAzSDcuMTNjLS43MiAwLTEuNjMtLjUtMi4xMy0xbC01LTVzLjg0LTEgLjg3LTFjLjEzLS4xLjMzLS4yLjUzLS4yLjEgMCAuMy4xLjQuMkw0IDEwLjZWMi43YzAtLjYuNC0xIDEtMXMxIC40IDEgMXY0LjZoMVYxYzAtLjYuNC0xIDEtMXMxIC40IDEgMXY2LjNoMVYxLjdjMC0uNi40LTEgMS0xczEgLjQgMSAxdjUuN2gxVjMuN2MwLS42LjQtMSAxLTFzMSAuNCAxIDF6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-lastPage.svg":
/*!********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-lastPage.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTggMTBjLS4zIDAtLjUtLjEtLjctLjNsLTUtNWMtLjktLjkuNS0yLjMgMS40LTEuNEw4IDcuNmw0LjMtNC4zYy45LS45IDIuMy41IDEuNCAxLjRsLTUgNWMtLjIuMi0uNC4zLS43LjN6bTUgMkgzYy0xLjMgMC0xLjMgMiAwIDJoMTBjMS4zIDAgMS4zLTIgMC0yeiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-rotateCcw.svg":
/*!*********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-rotateCcw.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTEgMWExIDEgMCAwMTEgMXYyLjRBNyA3IDAgMTE4IDE1YTcgNyAwIDAxLTQuOS0yIDEgMSAwIDAxMS40LTEuNSA1IDUgMCAxMC0xLTUuNUg2YTEgMSAwIDAxMCAySDFhMSAxIDAgMDEtMS0xVjJhMSAxIDAgMDExLTF6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-rotateCw.svg":
/*!********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-rotateCw.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNSAxYTEgMSAwIDAgMC0xIDF2Mi40MThBNi45OTUgNi45OTUgMCAxIDAgOCAxNWE2Ljk1NCA2Ljk1NCAwIDAgMCA0Ljk1LTIuMDUgMSAxIDAgMCAwLTEuNDE0LTEuNDE0QTUuMDE5IDUuMDE5IDAgMSAxIDEyLjU0OSA2SDEwYTEgMSAwIDAgMCAwIDJoNWExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXoiPjwvcGF0aD48L3N2Zz4=";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-scrollHorizontal.svg":
/*!****************************************************************!*\
  !*** ./css/images/secondaryToolbarButton-scrollHorizontal.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTAgNGgxLjVjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVIMHpNOS41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNUM1IDQuNSA1LjUgNCA2LjUgNHpNMTYgNGgtMS41Yy0xIDAtMS41LjUtMS41IDEuNXY1YzAgMSAuNSAxLjUgMS41IDEuNUgxNnoiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-scrollVertical.svg":
/*!**************************************************************!*\
  !*** ./css/images/secondaryToolbarButton-scrollVertical.svg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTkuNSA0YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41aC0zYy0xIDAtMS41LS41LTEuNS0xLjV2LTVDNSA0LjUgNS41IDQgNi41IDR6TTExIDB2LjVjMCAxLS41IDEuNS0xLjUgMS41aC0zQzUuNSAyIDUgMS41IDUgLjVWMGg2ek0xMSAxNnYtLjVjMC0xLS41LTEuNS0xLjUtMS41aC0zYy0xIDAtMS41LjUtMS41IDEuNXYuNWg2eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-scrollWrapped.svg":
/*!*************************************************************!*\
  !*** ./css/images/secondaryToolbarButton-scrollWrapped.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTUuNSA0YzEgMCAxLjUuNSAxLjUgMS41djVjMCAxLS41IDEuNS0xLjUgMS41aC0zYy0xIDAtMS41LS41LTEuNS0xLjV2LTVDMSA0LjUgMS41IDQgMi41IDR6TTcgMHYuNUM3IDEuNSA2LjUgMiA1LjUgMmgtM0MxLjUgMiAxIDEuNSAxIC41VjBoNnpNNyAxNnYtLjVjMC0xLS41LTEuNS0xLjUtMS41aC0zYy0xIDAtMS41LjUtMS41IDEuNXYuNWg2ek0xMy41IDRjMSAwIDEuNS41IDEuNSAxLjV2NWMwIDEtLjUgMS41LTEuNSAxLjVoLTNjLTEgMC0xLjUtLjUtMS41LTEuNXYtNWMwLTEgLjUtMS41IDEuNS0xLjV6TTE1IDB2LjVjMCAxLS41IDEuNS0xLjUgMS41aC0zQzkuNSAyIDkgMS41IDkgLjVWMGg2ek0xNSAxNnYtLjUwN2MwLTEtLjUtMS41LTEuNS0xLjVoLTNDOS41IDE0IDkgMTQuNSA5IDE1LjV2LjVoNnoiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-selectTool.svg":
/*!**********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-selectTool.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xMi40MDggOC4yMTdsLTguMDgzLTYuN0EuMi4yIDAgMCAwIDQgMS42NzJWMTIuM2EuMi4yIDAgMCAwIC4zMzMuMTQ2bDIuNTYtMi4zNzIgMS44NTcgMy45QTEuMTI1IDEuMTI1IDAgMSAwIDEwLjc4MiAxM0w4LjkxMyA5LjA3NWwzLjQtLjUxYS4yLjIgMCAwIDAgLjA5NS0uMzQ4eiI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-spreadEven.svg":
/*!**********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-spreadEven.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEuNSAzLjVDLjUgMy41IDAgNCAwIDV2Ni41YzAgMSAuNSAxLjUgMS41IDEuNWg0YzEgMCAxLjUtLjUgMS41LTEuNVY1YzAtMS0uNS0xLjUtMS41LTEuNXptMiAxLjJjLjggMCAxLjQuMiAxLjguNi41LjQuNyAxIC43IDEuNyAwIC41LS4yIDEtLjUgMS40LS4yLjMtLjUuNy0xIDFsLS42LjRjLS40LjMtLjYuNC0uNzUuNTYtLjE1LjE0LS4yNS4yNC0uMzUuNDRINnYxLjNIMWMwLS42LjEtMS4xLjMtMS41LjMtLjYuNy0xIDEuNS0xLjYuNy0uNCAxLjEtLjggMS4yOC0xIC4zMi0uMy40Mi0uNi40Mi0xIDAtLjMtLjEtLjYtLjIzLS44LS4xNy0uMi0uMzctLjMtLjc3LS4zcy0uNy4xLS45LjVjLS4wNC4yLS4xLjUtLjEuOUgxLjFjMC0uNi4xLTEuMS4zLTEuNS40LS43IDEuMS0xLjEgMi4xLTEuMXpNMTAuNTQgMy41NEM5LjUgMy41NCA5IDQgOSA1djYuNWMwIDEgLjUgMS41IDEuNTQgMS41aDRjLjk2IDAgMS40Ni0uNSAxLjQ2LTEuNVY1YzAtMS0uNS0xLjQ2LTEuNS0xLjQ2em0xLjkuOTVjLjcgMCAxLjMuMiAxLjcuNS40LjQuNi44LjYgMS40IDAgLjQtLjEuOC0uNCAxLjEtLjIuMi0uMy4zLS41LjQuMSAwIC4zLjEuNi4zLjQuMy41LjguNSAxLjQgMCAuNi0uMiAxLjItLjYgMS42LS40LjUtMS4xLjctMS45LjctMSAwLTEuOC0uMy0yLjItMS0uMTQtLjI5LS4yNC0uNjktLjI0LTEuMjloMS40YzAgLjMgMCAuNS4xLjcuMi40LjUuNSAxIC41LjMgMCAuNS0uMS43LS4zLjItLjIuMy0uNS4zLS44IDAtLjUtLjItLjgtLjYtLjk1LS4yLS4wNS0uNS0uMTUtMS0uMTV2LTFjLjUgMCAuOC0uMSAxLS4xNC4zLS4xLjUtLjQuNS0uOSAwLS4zLS4xLS41LS4yLS43LS4yLS4yLS40LS4zLS43LS4zLS4zIDAtLjYuMS0uNzUuMy0uMi4yLS4yLjUtLjIuODZoLTEuMzRjMC0uNC4xLS43LjE5LTEuMSAwLS4xMi4yLS4zMi40LS42Mi4yLS4yLjQtLjMuNy0uNC4zLS4xLjYtLjEgMS0uMXoiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-spreadNone.svg":
/*!**********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-spreadNone.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTYgM2MtMSAwLTEuNS41LTEuNSAxLjV2N2MwIDEgLjUgMS41IDEuNSAxLjVoNGMxIDAgMS41LS41IDEuNS0xLjV2LTdjMC0xLS41LTEuNS0xLjUtMS41eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/secondaryToolbarButton-spreadOdd.svg":
/*!*********************************************************!*\
  !*** ./css/images/secondaryToolbarButton-spreadOdd.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjU2IDMuNUM5LjU2IDMuNSA5IDQgOSA1djYuNWMwIDEgLjUgMS41IDEuNSAxLjVoNGMxIDAgMS41LS41IDEuNS0xLjVWNWMwLTEtLjUtMS41LTEuNS0xLjV6bTEuOTMgMS4yYy44IDAgMS40LjIgMS44LjY0LjUuNC43IDEgLjcgMS43IDAgLjUtLjIgMS0uNSAxLjQ0LS4yLjMtLjYuNi0xIC45M2wtLjYuNGMtLjQuMy0uNi40LS43LjU1LS4xLjEtLjIuMi0uMy40aDMuMnYxLjI3aC01YzAtLjUuMS0xIC4zLTEuNDMuMi0uNDkuNy0xIDEuNS0xLjU0LjctLjUgMS4xLS44IDEuMy0xLjAyLjMtLjMuNC0uNy40LTEuMDUgMC0uMy0uMS0uNi0uMy0uNzctLjItLjItLjQtLjMtLjctLjMtLjQgMC0uNy4yLS45LjUtLjEuMi0uMS41LS4yLjloLTEuNGMwLS42LjItMS4xLjMtMS41LjQtLjcgMS4xLTEuMSAyLTEuMXpNMS41NCAzLjVDLjU0IDMuNSAwIDQgMCA1djYuNWMwIDEgLjUgMS41IDEuNTQgMS41aDRjMSAwIDEuNS0uNSAxLjUtMS41VjVjMC0xLS41LTEuNS0xLjUtMS41em0xLjggMS4xMjVINC41VjEySDNWNi45SDEuM3YtMWMuNSAwIC44IDAgLjk3LS4wMy4zMy0uMDcuNTMtLjE3LjczLS4zNy4xLS4yLjItLjMuMjUtLjUuMDUtLjIuMDUtLjMuMDUtLjN6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/shadow.png":
/*!*******************************!*\
  !*** ./css/images/shadow.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAA1ElEQVQ4jbWUWw6EIAxFy2NFs/8NzR4UJhpqLsdi5mOmSSMUOfYWqv3S0gMr4XlYH/64gZa/gN3ANYA7KAXALt4ktoQ5MI9YxqaG8bWmsIysMuT6piSQCa4whZThCu8CM4zP9YJaKci9jicPq3NcBWYoPMGUlhG7ivtkB+gVyFY75wXghOvh8t5mto1Mdim6e+MBqH6XsY+YAwjpq3vGF7weTWQptLEDVCZvPTMl5JZZsdh47FHW6qFMyvLYqjcnmdFfY9Xk/KDOlzCusX2mi/ofM7MPkzBcSp4Q1/wAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/images/toolbarButton-bookmark.svg":
/*!***********************************************!*\
  !*** ./css/images/toolbarButton-bookmark.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTQgMTZWMnMwLTEgMS0xaDZzMSAwIDEgMXYxNGwtNC01eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-currentOutlineItem.svg":
/*!*********************************************************!*\
  !*** ./css/images/toolbarButton-currentOutlineItem.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTE0IDloLTZjLTEuMyAwLTEuMyAyIDAgMmg2YzEuMyAwIDEuMy0yIDAtMnptLTUuMi04aC0zLjhjLTEuMyAwLTEuMyAyIDAgMmgxLjd6bS02LjggMGMtMSAwLTEuMyAxLTAuNyAxLjcgMC43IDAuNiAxLjcgMC4zIDEuNy0wLjcgMC0wLjUtMC40LTEtMS0xem0zIDhjLTEgMC0xLjMgMS0wLjcgMS43IDAuNiAwLjYgMS43IDAuMiAxLjctMC43IDAtMC41LTAuNC0xLTEtMXptMC4zLTRoLTAuM2MtMS40IDAtMS40IDIgMCAyaDIuM3ptLTMuMyAwYy0wLjkgMC0xLjQgMS0wLjcgMS43IDAuNyAwLjYgMS43IDAuMiAxLjctMC43IDAtMC42LTAuNS0xLTEtMXptMTIgOGgtOWMtMS4zIDAtMS4zIDIgMCAyaDljMS4zIDAgMS4zLTIgMC0yem0tMTIgMGMtMSAwLTEuMyAxLTAuNyAxLjcgMC43IDAuNiAxLjcgMC4yIDEuNy0wLjcxMiAwLTAuNS0wLjQtMS0xLTF6Ii8+PHBhdGggZD0ibTcuMzcgNC44MzggMy45My0zLjkxMXYyLjEzOGgzLjYyOXYzLjU0NmgtMy42Mjl2Mi4xMzhsLTMuOTMtMy45MTEiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-download.svg":
/*!***********************************************!*\
  !*** ./css/images/toolbarButton-download.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNCAzaC0ydjJoMnY4SDJWNWg3VjNoLS44NDlMNi41ODQgMS41MzhBMiAyIDAgMCAwIDUuMjE5IDFIMmEyIDIgMCAwIDAtMiAydjEwYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY1YTIgMiAwIDAgMC0yLTJ6TTIgM2gzLjIxOWwxLjA3MiAxSDJ6Ij48L3BhdGg+PHBhdGggZD0iTTguMTQ2IDYuMTQ2YS41LjUgMCAwIDAgMCAuNzA3bDIgMmEuNS41IDAgMCAwIC43MDcgMGwyLTJhLjUuNSAwIDEgMC0uNzA3LS43MDdMMTEgNy4yOTNWLjVhLjUuNSAwIDAgMC0xIDB2Ni43OTNMOC44NTQgNi4xNDZhLjUuNSAwIDAgMC0uNzA4IDB6Ij48L3BhdGg+PC9zdmc+";

/***/ }),

/***/ "./css/images/toolbarButton-menuArrow.svg":
/*!************************************************!*\
  !*** ./css/images/toolbarButton-menuArrow.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMTFhMSAxIDAgMDEtLjcwNy0uMjkzbC0yLjk5LTIuOTljLS45MS0uOTQyLjQ3MS0yLjMyNCAxLjQxNC0xLjQxNEw4IDguNTg2bDIuMjgzLTIuMjgzYy45NDMtLjkxIDIuMzI0LjQ3MiAxLjQxNCAxLjQxNGwtMi45OSAyLjk5QTEgMSAwIDAxOCAxMXoiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-openFile.svg":
/*!***********************************************!*\
  !*** ./css/images/toolbarButton-openFile.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNC44NTkgMy4yYTEuMzM1IDEuMzM1IDAgMCAxLTEuMjE3LjhIMTN2MWgxdjhIMlY1aDhWNGgtLjY0MmExLjM2NSAxLjM2NSAwIDAgMS0xLjMyNS0xLjExTDYuNTg0IDEuNTM4QTIgMiAwIDAgMCA1LjIxOSAxSDJhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMS4xNDEtMS44ek0yIDNoMy4yMTlsMS4wNzIgMUgyem03Ljg1NC0uMTQ2TDExIDEuNzA3VjguNWEuNS41IDAgMCAwIDEgMFYxLjcwN2wxLjE0NiAxLjE0NmEuNS41IDAgMSAwIC43MDctLjcwN2wtMi0yYS41LjUgMCAwIDAtLjcwNyAwbC0yIDJhLjUuNSAwIDAgMCAuNzA3LjcwN3oiPjwvcGF0aD48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-pageDown.svg":
/*!***********************************************!*\
  !*** ./css/images/toolbarButton-pageDown.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYNCjE2Ij48cGF0aCB0cmFuc2Zvcm09J3JvdGF0ZSg5MCkgdHJhbnNsYXRlKDAsIC0xNiknDQpkPSJNMTUuNzA3IDcuMjkzbC02LTZhMSAxIDAgMCAwLTEuNDE0IDEuNDE0TDEyLjU4NiA3SDFhMSAxIDAgMCAwIDAgMmgxMS41ODZsLTQuMjkzDQo0LjI5M2ExIDEgMCAxIDAgMS40MTQgMS40MTRsNi02YTEgMSAwIDAgMCAwLTEuNDE0eiI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-pageUp.svg":
/*!*********************************************!*\
  !*** ./css/images/toolbarButton-pageUp.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYNCjE2Ij4NCjxwYXRoIA0KICAgdHJhbnNmb3JtPSdyb3RhdGUoOTApIHRyYW5zbGF0ZSgwLCAtMTYpJw0KICAgZD0iTTE1IDdIMy40MTRsNC4yOTMtNC4yOTNhMSAxIDAgMA0KMC0xLjQxNC0xLjQxNGwtNiA2YTEgMSAwIDAgMCAwIDEuNDE0bDYgNmExIDEgMCAwIDAgMS40MTQtMS40MTRMMy40MTQgOUgxNWExIDEgMCAwDQowIDAtMnoiPg0KPC9wYXRoPg0KPC9zdmc+";

/***/ }),

/***/ "./css/images/toolbarButton-presentationMode.svg":
/*!*******************************************************!*\
  !*** ./css/images/toolbarButton-presentationMode.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTS41IDFIN3MwLTEgMS0xIDEgMSAxIDFoNi41cy41IDAgLjUuNS0uNS41LS41LjVILjVTMCAyIDAgMS41LjUgMSAuNSAxek0xIDNoMTR2N2MwIDItMSAyLTIgMkgzYy0xIDAtMiAwLTItMnptNSAxdjdsNi0zLjV6TTMuNzIgMTUuMzNsLjUzLTJzMC0uNS42NS0uMzVjLjUxLjEzLjM4LjYzLjM4LjYzbC0uNTMgMnMwIC41LS42NC4zNWMtLjUzLS4xMy0uMzktLjYzLS4zOS0uNjN6TTExLjI0IDE1LjYxbC0uNTMtMS45OXMwLS41LjM4LS42M2MuNTEtLjEzLjY0LjM1LjY0LjM1bC41MyAyczAgLjUtLjM4LjYzYy0uNS4xMy0uNjQtLjM1LS42NS0uMzV6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/toolbarButton-print.svg":
/*!********************************************!*\
  !*** ./css/images/toolbarButton-print.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNCA1aC0xVjFhMSAxIDAgMCAwLTEtMUg0YTEgMSAwIDAgMC0xIDF2NEgyYTIgMiAwIDAgMC0yIDJ2NWgzdjNhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTF2LTNoM1Y3YTIgMiAwIDAgMC0yLTJ6TTIuNSA4YS41LjUgMCAxIDEgLjUtLjUuNS41IDAgMCAxLS41LjV6bTkuNSA3SDR2LTVoOHptMC0xMEg0VjFoOHptLTYuNSA3aDRhLjUuNSAwIDAgMCAwLTFoLTRhLjUuNSAwIDEgMCAwIDF6bTAgMmg1YS41LjUgMCAwIDAgMC0xaC01YS41LjUgMCAxIDAgMCAxeiI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-search.svg":
/*!*********************************************!*\
  !*** ./css/images/toolbarButton-search.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNS43MDcgMTQuMjkzbC00LjgyMi00LjgyMmE2LjAxOSA2LjAxOSAwIDEgMC0xLjQxNCAxLjQxNGw0LjgyMiA0LjgyMmExIDEgMCAwIDAgMS40MTQtMS40MTR6TTYgMTBhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-secondaryToolbarToggle.svg":
/*!*************************************************************!*\
  !*** ./css/images/toolbarButton-secondaryToolbarToggle.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik04LjcwNyA3LjI5M2wtNS01YTEgMSAwIDAgMC0xLjQxNCAxLjQxNEw2LjU4NiA4bC00LjI5MyA0LjI5M2ExIDEgMCAxIDAgMS40MTQgMS40MTRsNS01YTEgMSAwIDAgMCAwLTEuNDE0em02IDBsLTUtNWExIDEgMCAwIDAtMS40MTQgMS40MTRMMTIuNTg2IDhsLTQuMjkzIDQuMjkzYTEgMSAwIDEgMCAxLjQxNCAxLjQxNGw1LTVhMSAxIDAgMCAwIDAtMS40MTR6Ij48L3BhdGg+PC9zdmc+";

/***/ }),

/***/ "./css/images/toolbarButton-sidebarToggle.svg":
/*!****************************************************!*\
  !*** ./css/images/toolbarButton-sidebarToggle.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0zIDFoMTBhMy4wMDggMy4wMDggMCAwIDEgMyAzdjhhMy4wMDkgMy4wMDkgMCAwIDEtMyAzSDNhMy4wMDUgMy4wMDUgMCAwIDEtMy0zVjRhMy4wMTMgMy4wMTMgMCAwIDEgMy0zem0xMSAxMVY0YTEgMSAwIDAgMC0xLTFIOHYxMGg1YTEgMSAwIDAgMCAxLTF6TTIgMTJhMSAxIDAgMCAwIDEgMWg0VjNIM2ExIDEgMCAwIDAtMSAxdjh6Ij48L3BhdGg+PHBhdGggZD0iTTMuNSA1aDJhLjUuNSAwIDAgMCAwLTFoLTJhLjUuNSAwIDAgMCAwIDF6bTAgMmgyYS41LjUgMCAwIDAgMC0xaC0yYS41LjUgMCAwIDAgMCAxem0xIDJoMWEuNS41IDAgMCAwIDAtMWgtMWEuNS41IDAgMCAwIDAgMXoiPjwvcGF0aD48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-viewAttachments.svg":
/*!******************************************************!*\
  !*** ./css/images/toolbarButton-viewAttachments.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTYuMiAycy41LS41IDEuMDYgMGMuNS41IDAgMSAwIDFsLTQuNiA0LjYxcy0yLjUgMi41IDAgNSA1IDAgNSAwTDEzLjggNi40czEuNi0xLjYgMC0zLjItMy4yIDAtMy4yIDBMNS44IDhzLS43LjcgMCAxLjQgMS40IDAgMS40IDBsMy45LTMuOXMuNi0uNSAxIDBjLjUuNSAwIDEgMCAxbC0zLjggNHMtMS44IDEuOC0zLjUgMEMzIDguNyA0LjggNyA0LjggN2w0LjctNC45czIuNy0yLjYgNS4zIDBjMi42IDIuNiAwIDUuMyAwIDUuM2wtNi4yIDYuM3MtMy41IDMuNS03IDAgMC03IDAtN3oiLz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-viewLayers.svg":
/*!*************************************************!*\
  !*** ./css/images/toolbarButton-viewLayers.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0LjIzMyA0LjIzMyIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNLjE1IDIuOTkyYy0uMTk4LjEtLjIuMjY2LS4wMDIuMzY1bDEuNjA0LjgwMmEuOTMuOTMgMCAwMC43MjktLjAwMWwxLjYwMi0uODAxYy4xOTgtLjEuMTk3LS4yNjQgMC0uMzY0bC0uNjk1LS4zNDhjLTEuMzA2LjU5NS0yLjU0MiAwLTIuNTQyIDBtLS4yNjQuNTNsLjY1OC0uMzI5Yy42LjI1MiAxLjIzOC4yNDQgMS43NTQgMGwuNjU5LjMyOS0xLjUzNi43Njh6TS4xNSAxLjkzNWMtLjE5OC4xLS4xOTguMjY1IDAgLjM2NGwxLjYwNC44MDJhLjkyNi45MjYgMCAwMC43MjcgMGwxLjYwMy0uODAyYy4xOTgtLjA5OS4xOTgtLjI2NCAwLS4zNjNsLS42OTQtLjM1Yy0xLjE0LjU2LTIuNTQ2LjAwMS0yLjU0Ni4wMDFtLS4yNjQuNTNsLjY2NC0uMzMyYy41Mi4yNjYgMS4yNjEuMjM1IDEuNzUuMDAybC42NTkuMzMtMS41MzcuNzY4ek0uMTUuODc3Yy0uMTk4LjA5OS0uMTk4LjI2NCAwIC4zNjNsMS42MDQuODAyYS45MjYuOTI2IDAgMDAuNzI3IDBsMS42MDMtLjgwMmMuMTk4LS4wOTkuMTk4LS4yNjQgMC0uMzYzTDIuNDgxLjA3NWEuOTI2LjkyNiAwIDAwLS43MjcgMHptLjQzLjE4MkwyLjExNy4yOWwxLjUzOC43NjktMS41MzguNzY4eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-viewOutline.svg":
/*!**************************************************!*\
  !*** ./css/images/toolbarButton-viewOutline.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTE0IDlIOGMtMS4zIDAtMS4zIDIgMCAyaDZjMS4zIDAgMS4zLTIgMC0yem0wLThINUMzLjcgMSAzLjcgMyA1IDNoOWMxLjMgMCAxLjMtMiAwLTJ6TTIgMUMxIDEgLjcgMiAxLjMgMi43IDIgMy4zIDMgMyAzIDJjMC0uNS0uNC0xLTEtMXptMyA4Yy0xIDAtMS4zIDEtLjcgMS43LjYuNiAxLjcuMiAxLjctLjcgMC0uNS0uNC0xLTEtMXpNMTQgNUg1QzMuNiA1IDMuNiA3IDUgN2g5YzEuMyAwIDEuMy0yIDAtMnpNMiA1Yy0uOSAwLTEuNCAxLS43IDEuN0MyIDcuMyAzIDYuOSAzIDZjMC0uNi0uNS0xLTEtMXpNMTQgMTNINWMtMS4zIDAtMS4zIDIgMCAyaDljMS4zIDAgMS4zLTIgMC0yek0yIDEzYy0xIDAtMS4zIDEtLjcgMS43LjcuNiAxLjcuMiAxLjctLjcxMiAwLS41LS40LTEtMS0xeiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-viewThumbnail.svg":
/*!****************************************************!*\
  !*** ./css/images/toolbarButton-viewThumbnail.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxnIHN0eWxlPSItLWRhcmtyZWFkZXItaW5saW5lLWZpbGw6cmdiYSg4MSwgODIsIDgzLCAwLjgpOyIgZGF0YS1kYXJrcmVhZGVyLWlubGluZS1maWxsPSIiPjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PjxyZWN0IHg9IjkiIHk9IjEiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PjxyZWN0IHg9IjEiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PjxyZWN0IHg9IjkiIHk9IjkiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PjwvZz48L3N2Zz4=";

/***/ }),

/***/ "./css/images/toolbarButton-zoomIn.svg":
/*!*********************************************!*\
  !*** ./css/images/toolbarButton-zoomIn.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGQ9Ik0xNCA3SDlWMmExIDEgMCAwIDAtMiAwdjVIMmExIDEgMCAwIDAgMCAyaDV2NWExIDEgMCAwIDAgMiAwVjloNWExIDEgMCAwIDAgMC0yeiI+PC9wYXRoPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/toolbarButton-zoomOut.svg":
/*!**********************************************!*\
  !*** ./css/images/toolbarButton-zoomOut.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PCEtLSBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljDQogICAtIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMNCiAgIC0gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gLS0+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxyZWN0IHg9IjIiIHk9IjciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0Pjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/treeitem-collapsed.svg":
/*!*******************************************!*\
  !*** ./css/images/treeitem-collapsed.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDlMNiA1djh6Ii8+PC9zdmc+";

/***/ }),

/***/ "./css/images/treeitem-expanded.svg":
/*!******************************************!*\
  !*** ./css/images/treeitem-expanded.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwIDEzbDQtN0g2eiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./css/images/grab.cur":
/*!*****************************!*\
  !*** ./css/images/grab.cur ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28d9d0d8fc52c2d99e59.cur";

/***/ }),

/***/ "./css/images/grabbing.cur":
/*!*********************************!*\
  !*** ./css/images/grabbing.cur ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f6c101e2ccb1786ead0.cur";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"readermodSass": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./sass/reader.scss ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./reader.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/reader.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reader_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reader_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reader_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFNBQVMsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sU0FBUyxZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssU0FBUyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLGtCQUFrQixVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sU0FBUyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLE9BQU8sYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxRQUFRLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxVQUFVLEtBQUssUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sU0FBUyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxLQUFLLE9BQU8sYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyx3QkFBd0IsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLHVCQUF1QixPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxPQUFPLGFBQWEsYUFBYSxjQUFjLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUss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QStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQzs7QUFFOUQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRIQUE0SCxNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixZQUFZLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsWUFBWSxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixRQUFRLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksaUJBQWlCLE9BQU8sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxrQkFBa0IsT0FBTyxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtCQUFrQixPQUFPLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGlCQUFpQixPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLGNBQWMsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLFNBQVMsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLFNBQVMsa0JBQWtCLFVBQVUsWUFBWSxXQUFXLFlBQVksbUJBQW1CLFVBQVUsVUFBVSxVQUFVLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxVQUFVLGdCQUFnQixPQUFPLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE9BQU8sWUFBWSxpQkFBaUIsVUFBVSxLQUFLLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixNQUFNLGtCQUFrQixPQUFPLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGlCQUFpQixNQUFNLE9BQU8sbUJBQW1CLFVBQVUsZUFBZSxRQUFRLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsUUFBUSxpQkFBaUIsUUFBUSxjQUFjLGdCQUFnQixRQUFRLGlCQUFpQixRQUFRLFlBQVksWUFBWSxrQkFBa0IsUUFBUSxZQUFZLFVBQVUsaUJBQWlCLFFBQVEsaUJBQWlCLFFBQVEsbUJBQW1CLFFBQVEsbUJBQW1CLE9BQU8sZ0JBQWdCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTSxtRUFBbUUsb0NBQW9DLHFCQUFxQix3Q0FBd0MseUJBQXlCLGdCQUFnQixnQkFBZ0Isb0JBQW9CLHdCQUF3QixrQkFBa0IsdUNBQXVDLEtBQUsscUJBQXFCLDBDQUEwQyxrRUFBa0UsS0FBSywwQ0FBMEMsMEJBQTBCLEtBQUsseUJBQXlCLHdDQUF3QyxLQUFLLHFCQUFxQix1QkFBdUIsd0JBQXdCLGdCQUFnQixlQUFlLG9CQUFvQixxQkFBcUIsMkJBQTJCLEtBQUssNkJBQTZCLG9CQUFvQiw4QkFBOEIsaUJBQWlCLHFCQUFxQiwwQkFBMEIsK0JBQStCLEtBQUssd0JBQXdCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLGVBQWUsaUJBQWlCLGtCQUFrQix1QkFBdUIsb0JBQW9CLHFCQUFxQixvQ0FBb0MsS0FBSyx3QkFBd0IsdUJBQXVCLDJCQUEyQixvQ0FBb0Msb0NBQW9DLHFDQUFxQyw2QkFBNkIsdUNBQXVDLG1DQUFtQywrQkFBK0IseUJBQXlCLHlCQUF5QiwrQkFBK0IsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLDJCQUEyQixxQkFBcUIsc0JBQXNCLEtBQUssb0NBQW9DLCtCQUErQix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLEtBQUssNEJBQTRCLHFCQUFxQixvQ0FBb0MsMEJBQTBCLHdCQUF3QiwwQkFBMEIsMkJBQTJCLHVCQUF1QixLQUFLLHFCQUFxQiwyQkFBMkIsMEJBQTBCLG1CQUFtQix1QkFBdUIsd0JBQXdCLHlCQUF5Qix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLHlDQUF5QyxLQUFLLHFCQUFxQix1QkFBdUIsbUNBQW1DLDJCQUEyQix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLEtBQUssc0NBQXNDLG9CQUFvQixtQ0FBbUMscUJBQXFCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLG9CQUFvQix3QkFBd0IsMEJBQTBCLDZCQUE2QixrQ0FBa0MsbUNBQW1DLGdDQUFnQywrQkFBK0IsOEJBQThCLDJCQUEyQixxQkFBcUIsS0FBSyw0Q0FBNEMsc0NBQXNDLEtBQUssNENBQTRDLHVCQUF1QixrQ0FBa0Msa0NBQWtDLEtBQUssNkJBQTZCLDJCQUEyQixxQkFBcUIscUJBQXFCLEtBQUsseUJBQXlCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLHNCQUFzQixnQ0FBZ0MsdUNBQXVDLDZCQUE2QixtQ0FBbUMsK0JBQStCLHlCQUF5QiwyQkFBMkIsb0JBQW9CLHFCQUFxQix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLGlDQUFpQyw0QkFBNEIsd0JBQXdCLEtBQUssNEJBQTRCLHdCQUF3QiwyQkFBMkIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLG9DQUFvQywrQkFBK0IsNEJBQTRCLCtDQUErQyxvQ0FBb0MsbUNBQW1DLGtDQUFrQywrQkFBK0IscUJBQXFCLHFCQUFxQixrQ0FBa0Msa0NBQWtDLEtBQUssMkRBQTJELG9DQUFvQyx3QkFBd0IsMEJBQTBCLHVCQUF1Qiw0QkFBNEIsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixvQkFBb0IsS0FBSywrQkFBK0IscUJBQXFCLGtDQUFrQyx3QkFBd0IsS0FBSyxpRUFBaUUsd0JBQXdCLEtBQUssc0NBQXNDLDJCQUEyQixxQkFBcUIsc0JBQXNCLGtDQUFrQyx1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLEtBQUssMkRBQTJELG9CQUFvQixxQkFBcUIseUJBQXlCLG9CQUFvQix3QkFBd0IseUJBQXlCLDJCQUEyQixrQ0FBa0MsS0FBSywwRUFBMEUsdUJBQXVCLEtBQUsscUVBQXFFLDJCQUEyQixvQkFBb0IscUJBQXFCLDhCQUE4QixLQUFLLG9JQUFvSSx1QkFBdUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIseUJBQXlCLEtBQUssaURBQWlELG9CQUFvQixxQkFBcUIsS0FBSyxpREFBaUQsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsS0FBSywwSEFBMEgsMEJBQTBCLEtBQUssMkJBQTJCLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLDZGQUE2Riw2QkFBNkIsb0JBQW9CLHdCQUF3QixrQ0FBa0MseUJBQXlCLGlDQUFpQyw4QkFBOEIseUJBQXlCLHNCQUFzQiw0QkFBNEIsOEJBQThCLGdDQUFnQyx5QkFBeUIsS0FBSyx5Q0FBeUMsOEJBQThCLG9CQUFvQix5QkFBeUIscUJBQXFCLDBCQUEwQixrQkFBa0Isd0JBQXdCLHlCQUF5QixtQ0FBbUMseUJBQXlCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLHlCQUF5Qix3QkFBd0IsK0JBQStCLEtBQUssMENBQTBDLGtDQUFrQyxrQ0FBa0MsS0FBSyxtREFBbUQsK0JBQStCLGtDQUFrQyx1QkFBdUIsS0FBSyxvSUFBb0ksNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLGtCQUFrQixLQUFLLDBJQUEwSSx3QkFBd0IsbUNBQW1DLCtCQUErQiwyQkFBMkIseUJBQXlCLEtBQUssb0tBQW9LLHVCQUF1QixpQ0FBaUMscUJBQXFCLG9CQUFvQix3QkFBd0IsMkJBQTJCLGtDQUFrQyx5QkFBeUIsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLDJFQUEyRSxvQkFBb0IscUJBQXFCLEtBQUssNEZBQTRGLHVCQUF1QixvQkFBb0IscUJBQXFCLDRCQUE0QixLQUFLLGlFQUFpRSxxQkFBcUIsS0FBSyxtRUFBbUUsbUJBQW1CLDJCQUEyQixxQkFBcUIsS0FBSyw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQkFBcUIsK0JBQStCLHVDQUF1QyxvQ0FBb0MsbUNBQW1DLGtDQUFrQywrQkFBK0IsS0FBSyxzQ0FBc0MsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLGlDQUFpQyx3Q0FBd0MsOEJBQThCLG9DQUFvQyxnQ0FBZ0Msb0NBQW9DLCtCQUErQiw0QkFBNEIsZ0NBQWdDLGlDQUFpQyxxQkFBcUIsbUJBQW1CLDRDQUE0QyxpQ0FBaUMsZ0NBQWdDLCtCQUErQiw0QkFBNEIsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLCtDQUErQyw2QkFBNkIsNkJBQTZCLDhCQUE4QixzQkFBc0IsaUNBQWlDLHdDQUF3Qyw4QkFBOEIsb0NBQW9DLGdDQUFnQyxvQ0FBb0MsK0JBQStCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLHFCQUFxQixzQkFBc0Isa0VBQWtFLCtCQUErQix1Q0FBdUMsb0NBQW9DLG1DQUFtQyxrQ0FBa0MsK0JBQStCLEtBQUssMkNBQTJDLDZCQUE2Qiw2QkFBNkIsOEJBQThCLHNCQUFzQixpQ0FBaUMsd0NBQXdDLDhCQUE4QixvQ0FBb0MsZ0NBQWdDLG9DQUFvQywrQkFBK0IsNEJBQTRCLHdCQUF3QixvQkFBb0IscUJBQXFCLDJCQUEyQixLQUFLLDJDQUEyQyx5QkFBeUIsMEJBQTBCLEtBQUssdUNBQXVDLHNCQUFzQixLQUFLLHlDQUF5QywyQkFBMkIsZ0JBQWdCLGVBQWUsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLGlDQUFpQyx3Q0FBd0MsOEJBQThCLG9DQUFvQyxnQ0FBZ0Msb0NBQW9DLCtCQUErQiw0QkFBNEIsb0JBQW9CLHFCQUFxQixvQkFBb0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsK0JBQStCLDBDQUEwQyxLQUFLLG1DQUFtQyx5QkFBeUIsMEJBQTBCLHVCQUF1Qix3QkFBd0IseUJBQXlCLHNDQUFzQyxLQUFLLHFDQUFxQyw2QkFBNkIseUJBQXlCLEtBQUssK0JBQStCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHdCQUF3Qix3Q0FBd0MsK0NBQStDLHFDQUFxQywyQ0FBMkMsdUNBQXVDLG9DQUFvQywrQkFBK0IsNEJBQTRCLG9CQUFvQixxQkFBcUIsc0JBQXNCLG1CQUFtQix1QkFBdUIsS0FBSyxzQ0FBc0MscUJBQXFCLHFCQUFxQix5QkFBeUIsbUJBQW1CLHVCQUF1QixLQUFLLDhCQUE4QiwyQkFBMkIscUJBQXFCLHNCQUFzQix5QkFBeUIsc0JBQXNCLHlCQUF5QixrQ0FBa0MsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLDBDQUEwQyxvQkFBb0IscUJBQXFCLEtBQUsscUNBQXFDLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLG9DQUFvQywyQkFBMkIseUJBQXlCLG1CQUFtQix1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLHFDQUFxQyx3QkFBd0IsMkJBQTJCLG9CQUFvQixrQ0FBa0MsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLGlDQUFpQyx3Q0FBd0MsOEJBQThCLG9DQUFvQyxnQ0FBZ0Msb0NBQW9DLCtCQUErQiw0QkFBNEIsMkJBQTJCLDRCQUE0QixrQ0FBa0MsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLHNDQUFzQyw2QkFBNkIsNkJBQTZCLDhCQUE4QixzQkFBc0IsdUNBQXVDLG1DQUFtQywrQkFBK0IsaUNBQWlDLHdDQUF3Qyw4QkFBOEIsb0NBQW9DLGdDQUFnQyxvQ0FBb0MsK0JBQStCLDRCQUE0QixvQkFBb0Isc0JBQXNCLGtDQUFrQyx5QkFBeUIsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLGdEQUFnRCxzQkFBc0Isb0JBQW9CLHFCQUFxQixLQUFLLGdEQUFnRCxvQkFBb0IsdUJBQXVCLHdCQUF3QixLQUFLLDZCQUE2QiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5QkFBeUIscUJBQXFCLG9CQUFvQixrQ0FBa0MsMkJBQTJCLHNCQUFzQixLQUFLLCtCQUErQiwrQkFBK0IsS0FBSyxzQ0FBc0MsdUJBQXVCLEtBQUssNldBQTZXLG9CQUFvQixxQkFBcUIsK0JBQStCLDJCQUEyQixrQ0FBa0Msa0NBQWtDLDJCQUEyQixLQUFLLGtEQUFrRCx1REFBdUQsS0FBSywwS0FBMEssa0NBQWtDLEtBQUssMERBQTBELDZEQUE2RCxLQUFLLDZEQUE2RCx1REFBdUQsS0FBSyxpREFBaUQsc0RBQXNELEtBQUsseURBQXlELDREQUE0RCxLQUFLLDREQUE0RCxzREFBc0QsS0FBSyxpREFBaUQsc0RBQXNELEtBQUsseURBQXlELDREQUE0RCxLQUFLLDREQUE0RCxzREFBc0QsS0FBSyxpREFBaUQsc0RBQXNELEtBQUsseURBQXlELDREQUE0RCxLQUFLLDREQUE0RCxzREFBc0QsS0FBSywwTEFBMEwsa0NBQWtDLEtBQUssNE5BQTROLHlCQUF5QixxQkFBcUIsc0NBQXNDLDJCQUEyQixLQUFLLG9QQUFvUCxxQkFBcUIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsS0FBSyxvQ0FBb0MseUJBQXlCLHFCQUFxQixLQUFLLHlDQUF5QyxxQkFBcUIscUJBQXFCLEtBQUssd0dBQXdHLG9CQUFvQixLQUFLLHNEQUFzRCwwQkFBMEIsS0FBSywyREFBMkQsb0NBQW9DLHdCQUF3QixvQkFBb0IscUJBQXFCLHVCQUF1QiwrQkFBK0IsS0FBSywrRUFBK0UsK0JBQStCLGdCQUFnQixLQUFLLDZDQUE2QyxpQ0FBaUMsS0FBSywrQ0FBK0Msb0NBQW9DLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssaUNBQWlDLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qix5QkFBeUIsZUFBZSxtRUFBbUUsS0FBSyxzREFBc0Qsb0JBQW9CLEtBQUssNERBQTRELHFDQUFxQyxtQ0FBbUMsb0JBQW9CLHVCQUF1QixzRUFBc0UsS0FBSyxvREFBb0QsMERBQTBELEtBQUssd0RBQXdELGdFQUFnRSxLQUFLLCtDQUErQyx5REFBeUQsS0FBSyx1REFBdUQsK0RBQStELEtBQUssbUVBQW1FLDZEQUE2RCxLQUFLLDhJQUE4SSxtRUFBbUUsS0FBSyw4REFBOEQsNERBQTRELEtBQUssNElBQTRJLGtFQUFrRSxLQUFLLDREQUE0RCwwREFBMEQsS0FBSyx3SUFBd0ksZ0VBQWdFLEtBQUssc0NBQXNDLGtCQUFrQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixnQkFBZ0IsaUNBQWlDLEtBQUssd0NBQXdDLHFCQUFxQixzQkFBc0IseUJBQXlCLG1CQUFtQix3QkFBd0Isd0JBQXdCLEtBQUssd0JBQXdCLGtDQUFrQyx5QkFBeUIsZ0NBQWdDLG1CQUFtQixtQkFBbUIseUJBQXlCLHFCQUFxQixzQkFBc0Isd0JBQXdCLDhCQUE4QixnQkFBZ0IsS0FBSyxnQ0FBZ0MsZ0NBQWdDLEtBQUssOERBQThELHFDQUFxQyxLQUFLLHdCQUF3QixrQ0FBa0MscUJBQXFCLDJCQUEyQix3REFBd0Qsa0NBQWtDLGtDQUFrQyxLQUFLLHlCQUF5QixvQkFBb0IscUJBQXFCLDJCQUEyQix3REFBd0Qsa0NBQWtDLGtDQUFrQyxLQUFLLDRFQUE0RSxzQkFBc0IsS0FBSyxrRkFBa0YscUJBQXFCLHFCQUFxQixLQUFLLG9NQUFvTSxzQ0FBc0MsS0FBSywrQkFBK0IsMkJBQTJCLHVCQUF1QiwyQkFBMkIsd0RBQXdELGtDQUFrQyxrQ0FBa0Msc0JBQXNCLFdBQVcseURBQXlELHVCQUF1QixPQUFPLHlCQUF5Qix1QkFBdUIsV0FBVyxtQ0FBbUMsMkJBQTJCLDRCQUE0QixPQUFPLDBDQUEwQyx5QkFBeUIsT0FBTywwQ0FBMEMseUJBQXlCLHNCQUFzQixzQkFBc0Isb0NBQW9DLE9BQU8sZ0RBQWdELDJCQUEyQiwyQkFBMkIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsc0JBQXNCLG9DQUFvQywrQkFBK0IsNEJBQTRCLG9CQUFvQixPQUFPLDRDQUE0QyxvQ0FBb0Msb0NBQW9DLHFDQUFxQyw2QkFBNkIsNENBQTRDLHlCQUF5Qix5QkFBeUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsdUNBQXVDLDJCQUEyQixPQUFPLCtEQUErRCxrQ0FBa0MsT0FBTyx3RkFBd0YscUJBQXFCLE9BQU8sd0RBQXdELG9DQUFvQyxvQkFBb0Isd0JBQXdCLE9BQU8sZ0VBQWdFLDRCQUE0Qix1QkFBdUIsaUNBQWlDLE9BQU8sOEJBQThCLDhCQUE4QixvQkFBb0IscUJBQXFCLDBCQUEwQix1QkFBdUIsa0NBQWtDLDJCQUEyQiwrQkFBK0IsK0JBQStCLHNCQUFzQixnQ0FBZ0MseUJBQXlCLDRCQUE0QixPQUFPLGlDQUFpQyw4QkFBOEIsb0JBQW9CLHFCQUFxQix1QkFBdUIsa0NBQWtDLDJCQUEyQiwrQkFBK0IsK0JBQStCLHNCQUFzQixnQ0FBZ0MsdUJBQXVCLHFCQUFxQiw4QkFBOEIsT0FBTyw0QkFBNEIsb0NBQW9DLG9DQUFvQyxxQ0FBcUMsNkJBQTZCLDJCQUEyQiwwQkFBMEIsbUJBQW1CLE9BQU8sNkNBQTZDLDBCQUEwQixPQUFPLDRDQUE0QyxvQkFBb0IsOEJBQThCLHFDQUFxQyxpQ0FBaUMsaUNBQWlDLHlCQUF5QixPQUFPLG9EQUFvRCxzQkFBc0IsdUJBQXVCLGdFQUFnRSxPQUFPLDBCQUEwQixvQkFBb0IscUJBQXFCLE9BQU8sZ0NBQWdDLG9DQUFvQywyQkFBMkIsa0NBQWtDLHFCQUFxQixxQkFBcUIsMkJBQTJCLHVCQUF1Qix3QkFBd0IsMEJBQTBCLGdDQUFnQyxrQkFBa0IsT0FBTywwQkFBMEIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsMkJBQTJCLHdEQUF3RCxrQ0FBa0Msa0NBQWtDLE9BQU8seUNBQXlDLG9CQUFvQixxQkFBcUIsMkJBQTJCLCtCQUErQiwyQkFBMkIsa0JBQWtCLGlCQUFpQixPQUFPLGdHQUFnRyxvQ0FBb0MsT0FBTyx1RkFBdUYsMEJBQTBCLE9BQU8sc0NBQXNDLDJCQUEyQixrQ0FBa0MsMEJBQTBCLHFCQUFxQixPQUFPLHdEQUF3RCw0REFBNEQsT0FBTyxzREFBc0QsOERBQThELE9BQU8scURBQXFELDZEQUE2RCxPQUFPLHFEQUFxRCw4Q0FBOEMsT0FBTyx1SEFBdUgsa0VBQWtFLE9BQU8sMkhBQTJILG9FQUFvRSxPQUFPLHlIQUF5SCxtRUFBbUUsT0FBTyx5SEFBeUgsb0RBQW9ELE9BQU8sOEJBQThCLDJCQUEyQixxQkFBcUIsbUJBQW1CLDBFQUEwRSxtQ0FBbUMscUJBQXFCLG9CQUFvQixzQkFBc0IsS0FBSywrQkFBK0IsMkJBQTJCLHFCQUFxQixpQkFBaUIsd0VBQXdFLG1DQUFtQyxxQkFBcUIsb0JBQW9CLHNCQUFzQixLQUFLLHdGQUF3RixpQ0FBaUMsS0FBSyx3QkFBd0Isc0JBQXNCLHlCQUF5Qiw4RUFBOEUsNEJBQTRCLDZCQUE2QixxQkFBcUIsZUFBZSwrQ0FBK0MsbUJBQW1CLGlCQUFpQixPQUFPLG9CQUFvQixvQkFBb0IscUJBQXFCLHdCQUF3QiwyQ0FBMkMscUNBQXFDLHNDQUFzQyxPQUFPLG9CQUFvQixrQ0FBa0MsT0FBTyxnQkFBZ0IscUJBQXFCLG9CQUFvQixPQUFPLHVDQUF1QyxvQkFBb0IscUJBQXFCLG9CQUFvQixtQkFBbUIsb0JBQW9CLCtCQUErQiw0QkFBNEIscUJBQXFCLHdCQUF3QiwwQkFBMEIsMkJBQTJCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLGVBQWUscUNBQXFDLHFCQUFxQixxQkFBcUIsb0JBQW9CLG1CQUFtQiwrQkFBK0IscUJBQXFCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLHVCQUF1QixlQUFlLCtDQUErQyxvQ0FBb0MsNkNBQTZDLFNBQVMsOFFBQThRLDhCQUE4QixTQUFTLGdDQUFnQywrQkFBK0IsMEJBQTBCLHFDQUFxQyxnQ0FBZ0MsMENBQTBDLDBCQUEwQixTQUFTLHdDQUF3QywwQkFBMEIsU0FBUyx5QkFBeUIsOEJBQThCLDBCQUEwQixTQUFTLGlDQUFpQyx3QkFBd0IsU0FBUyw2QkFBNkIsdUJBQXVCLHFDQUFxQyxvQ0FBb0MsU0FBUyxtRkFBbUYsNkJBQTZCLFNBQVMsMkNBQTJDLHVCQUF1Qix3QkFBd0Isc0NBQXNDLFNBQVMsK0RBQStELHlCQUF5QixTQUFTLHlCQUF5Qiw4QkFBOEIsU0FBUyxzQ0FBc0MsdUNBQXVDLFNBQVMsc0NBQXNDLHlCQUF5QixTQUFTLGdEQUFnRCxxQ0FBcUMseUJBQXlCLFNBQVMsK0JBQStCLDZDQUE2QyxpQ0FBaUMsa0NBQWtDLDRCQUE0QixZQUFZLDRCQUE0QiwwQ0FBMEMsOEJBQThCLCtCQUErQix5QkFBeUIsU0FBUyxxRkFBcUYsOEJBQThCLFNBQVMseUZBQXlGLHdCQUF3QixTQUFTLFNBQVMsZUFBZSx1QkFBdUIsS0FBSywwQkFBMEIsdUNBQXVDLDhCQUE4QixLQUFLLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLHdCQUF3Qix5QkFBeUIsYUFBYSxlQUFlLGdCQUFnQixjQUFjLHVCQUF1QixLQUFLLCtFQUErRSxvQkFBb0IsS0FBSywyQkFBMkIscUJBQXFCLHlCQUF5Qix3Q0FBd0MseUJBQXlCLG9CQUFvQiwrQkFBK0Isd0NBQXdDLHVDQUF1QyxLQUFLLHNDQUFzQyxxQkFBcUIsd0NBQXdDLHlCQUF5QixlQUFlLGdCQUFnQiw2QkFBNkIsOEJBQThCLDhCQUE4QixLQUFLLDBDQUEwQyxxQkFBcUIsd0NBQXdDLHlCQUF5QixrQkFBa0IsbUJBQW1CLHdDQUF3QywyQ0FBMkMsMkNBQTJDLEtBQUssMkNBQTJDLHFCQUFxQix3Q0FBd0MseUJBQXlCLGtCQUFrQixtQkFBbUIsd0NBQXdDLDJDQUEyQywyQ0FBMkMsS0FBSyxnQ0FBZ0MsZ0NBQWdDLEtBQUssb0JBQW9CLCtCQUErQixLQUFLLGlDQUFpQyx5QkFBeUIsNEJBQTRCLGtCQUFrQixtQkFBbUIsNEJBQTRCLEtBQUssMkVBQTJFLGNBQWMsc0RBQXNELHlCQUF5QixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLGdDQUFnQyxnQ0FBZ0MsOEJBQThCLHNCQUFzQixLQUFLLHlDQUF5Qyx5QkFBeUIsb0JBQW9CLG1CQUFtQixrQkFBa0IseURBQXlELGdDQUFnQyxnQ0FBZ0MsOEJBQThCLHNCQUFzQixLQUFLLHFFQUFxRSxnQ0FBZ0MsZ0NBQWdDLEtBQUssbUVBQW1FLHNEQUFzRCxLQUFLLDRFQUE0RSwwQ0FBMEMsc0NBQXNDLGtDQUFrQyxnQ0FBZ0MsS0FBSyxpRUFBaUUsMEJBQTBCLEtBQUssK0NBQStDLHlCQUF5QixLQUFLLDZCQUE2QixnQ0FBZ0MseUJBQXlCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLDZCQUE2QixLQUFLLHlCQUF5Qix3QkFBd0IsS0FBSyxrQ0FBa0MsMkJBQTJCLEtBQUsseUZBQXlGLHNCQUFzQixLQUFLLDhDQUE4Qyx1QkFBdUI7QUFDanpuRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2w0QzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE2STtBQUM3STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSXVGO0FBQy9HLE9BQU8saUVBQWUsNkhBQU8sSUFBSSw2SEFBTyxVQUFVLDZIQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vY3NzL3ZpZXdlci5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9zYXNzL3JlYWRlci5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9zYXNzL3JlYWRlci5zY3NzPzIwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyZWFkZXJtb2RTYXNzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWRlcm1vZFNhc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhZGVybW9kU2Fzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NoYWRvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvbG9hZGluZy1pY29uLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImltYWdlcy9sb2FkaW5nLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImltYWdlcy90cmVlaXRlbS1leHBhbmRlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdHJlZWl0ZW0tY29sbGFwc2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLW1lbnVBcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZVVwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VEb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tT3V0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tSW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXByaW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tZG93bmxvYWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLWJvb2ttYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXNlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2ZpbmRiYXJCdXR0b24tcHJldmlvdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fID0gbmV3IFVSTChcImltYWdlcy9maW5kYmFyQnV0dG9uLW5leHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fID0gbmV3IFVSTChcImltYWdlcy9sb2FkaW5nLWRhcmsuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fID0gbmV3IFVSTChcImltYWdlcy9ncmFiLmN1clwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZ3JhYmJpbmcuY3VyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDb3B5cmlnaHQgMjAxNCBNb3ppbGxhIEZvdW5kYXRpb25cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLnRleHRMYXllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBjdXJzb3I6IHRleHQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodCB7XHJcbiAgbWFyZ2luOiAtMXB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMCwgMTcwLCAxKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5iZWdpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5lbmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQubWlkZGxlIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAxKTtcclxufVxyXG5cclxuLnRleHRMYXllciA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50LmFjdGl2ZSB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG5cclxuLmFubm90YXRpb25MYXllciBzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGE6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0QW5ub3RhdGlvbiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSxcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3QsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTQsIDI1NSwgMC4xMyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDlweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgM3B4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSB7XHJcbiAgZm9udDogbWVzc2FnZS1ib3g7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dFtkaXNhYmxlZF0sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhW2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3RbZGlzYWJsZWRdLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0W2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6Zm9jdXMsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmZvY3VzLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICB0b3A6IDIwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWI6Zm9jdXMge1xyXG4gIC8qXHJcbiAgICogTGV0dGVyIHNwYWNpbmcgaXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIGVhY2ggY2hhcmFjdGVyLiBIZW5jZSwgdGhlXHJcbiAgICogbGV0dGVyIHNwYWNpbmcgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIG1heSBiZSBwbGFjZWQgb3V0c2lkZSB0aGUgdmlzaWJsZVxyXG4gICAqIGFyZWEsIGNhdXNpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIFdlIGF2b2lkIHRoaXMgYnkgZXh0ZW5kaW5nIHRoZSB3aWR0aFxyXG4gICAqIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGZvY3VzIGFuZCByZXZlcnQgdGhpcyB3aGVuIGl0IGxvc2VzIGZvY3VzLlxyXG4gICAqL1xyXG4gIHdpZHRoOiAxMTUlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cFdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDE1MywgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250OiBtZXNzYWdlLWJveDtcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgPiAqIHtcclxuICBmb250LXNpemU6IDlweDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgaDEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHAge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5oaWdobGlnaHRBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC51bmRlcmxpbmVBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVpZ2dseUFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0cmlrZW91dEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmZyZWVUZXh0QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAubGluZUFubm90YXRpb24gc3ZnIGxpbmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWFyZUFubm90YXRpb24gc3ZnIHJlY3QsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlsaW5lQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlnb25Bbm5vdGF0aW9uIHN2ZyBwb2x5Z29uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jYXJldEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmlua0Fubm90YXRpb24gc3ZnIHBvbHlsaW5lLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zdGFtcEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmZpbGVBdHRhY2htZW50QW5ub3RhdGlvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5jYW52YXNXcmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5wYWdlIHtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICB3aWR0aDogODE2cHg7XHJcbiAgaGVpZ2h0OiAxMDU2cHg7XHJcbiAgbWFyZ2luOiAxcHggYXV0byAtOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gIC1vLWJvcmRlci1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIDkgOSByZXBlYXQ7XHJcbiAgICAgYm9yZGVyLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgOSA5IHJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IC5wYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCxcclxuLnNwcmVhZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMy41cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXHJcbi5zcHJlYWQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc3ByZWFkIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNwcmVhZCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMy41cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMy41cHg7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnNwcmVhZCAucGFnZSxcclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycy5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgLmxvYWRpbmdJY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBjZW50ZXIgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnNwcmVhZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tc2lkZWJhci13aWR0aDogMjAwcHg7XHJcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gIC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAtLWxvYWRpbmdCYXItZW5kLW9mZnNldDogMDtcclxuXHJcbiAgLS10b29sYmFyLWljb24tb3BhY2l0eTogMC43O1xyXG4gIC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHk6IDAuOTtcclxuXHJcbiAgLS1tYWluLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xyXG4gIC0tYm9keS1iZy1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjQwLCAxKTtcclxuICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgyNTUsIDc0LCA3NCwgMSk7XHJcbiAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgxMCwgMTMyLCAyNTUsIDEpO1xyXG4gIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIyLCAxKTtcclxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMTE2LCAxNzcsIDIzOSwgMSk7XHJcbiAgLS1zY3JvbGxiYXItY29sb3I6IGF1dG87XHJcbiAgLS1zY3JvbGxiYXItYmctY29sb3I6IGF1dG87XHJcbiAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG4gIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMC45KTtcclxuICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ3LCAxKTtcclxuICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XHJcbiAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgyMjEsIDIyMiwgMjIzLCAxKTtcclxuICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE5LCAxKTtcclxuICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC0tZmllbGQtY29sb3I6IHJnYmEoNiwgNiwgNiwgMSk7XHJcbiAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg4LCAxKTtcclxuICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSgyMjcsIDIyOCwgMjMwLCAxKTtcclxuICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4yKTtcclxuICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XHJcbiAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAxKTtcclxuICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMSk7XHJcbiAgLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjMpO1xyXG5cclxuICAtLWxvYWRpbmctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gIC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19ffSk7XHJcbiAgLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19ffSk7XHJcbiAgLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fX30pO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1tYWluLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNTAsIDEpO1xyXG4gICAgLS1ib2R5LWJnLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDYsIDEpO1xyXG4gICAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMTk5LCAxNywgMTcsIDEpO1xyXG4gICAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgwLCA5NiwgMjIzLCAxKTtcclxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSg0MCwgNDAsIDQzLCAxKTtcclxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgyMCwgNjgsIDEzMywgMSk7XHJcbiAgICAtLXNjcm9sbGJhci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIzLCAxKTtcclxuICAgIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiByZ2JhKDM1LCAzNSwgMzksIDEpO1xyXG4gICAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblxyXG4gICAgLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAwLjkpO1xyXG4gICAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTAsIDUwLCA1MiwgMSk7XHJcbiAgICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTYsIDU2LCA2MSwgMSk7XHJcbiAgICAtLXRvb2xiYXItYm9yZGVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xyXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMywgMSk7XHJcbiAgICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XHJcbiAgICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLS1maWVsZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcclxuICAgIC0tZmllbGQtYmctY29sb3I6IHJnYmEoNjQsIDY0LCA2OCwgMSk7XHJcbiAgICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxMTUsIDExNSwgMTE1LCAxKTtcclxuICAgIC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yOiByZ2JhKDg5LCA4OSwgODksIDEpO1xyXG4gICAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAtLWRvb3JoYW5nZXItYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XHJcbiAgICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDMsIDEpO1xyXG4gICAgLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yOiByZ2JhKDkzLCA5NCwgOTgsIDEpO1xyXG4gICAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSg5MiwgOTIsIDk3LCAxKTtcclxuICAgIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XHJcbiAgICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xyXG5cclxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgdXNlZCBpbiA8aW5wdXQ+IGVsZW1lbnRzLCB3aGljaCB1bmZvcnR1bmF0ZWx5IG1lYW5zIHRoYXRcclxuICAgICAqIHRoZSBcXGBtYXNrLWltYWdlXFxgIGFwcHJvYWNoIHVzZWQgd2l0aCBhbGwgb2YgdGhlIG90aGVyIGltYWdlcyBkb2Vzbid0IHdvcmtcclxuICAgICAqIGhlcmU7IGhlbmNlIHdoeSB3ZSBzdGlsbCBoYXZlIHR3byB2ZXJzaW9ucyBvZiB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UuICovXHJcbiAgICAtLWxvYWRpbmctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX199KTtcclxuICB9XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRm9udCBzaXplIGlzIG5lZWRlZCB0byBtYWtlIHRoZSBhY3Rpdml0eSBiYXIgdGhlIGNvcnJlY3Qgc2l6ZS4gKi9cclxuICAvKiBmb250LXNpemU6IDEwcHg7ICovXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxufVxyXG5cclxuYm9keSxcclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAvKiBmb250OiBtZXNzYWdlLWJveDsgKi9cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLWNvbG9yKSB2YXIoLS1zY3JvbGxiYXItYmctY29sb3IpO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBkZlZpZXdlci5lbmFibGVQZXJtaXNzaW9ucyAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjdXJzb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgPiAqLFxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzJweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XHJcbiAgbGVmdDogY2FsYygwcHggLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xyXG4gIHJpZ2h0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxuICAvKiBQcmV2ZW50IGUuZy4gdGhlIHRodW1ibmFpbHMgYmVpbmcgc2VsZWN0ZWQgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhck1vdmluZyAjc2lkZWJhckNvbnRhaW5lcixcclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jbWFpbkNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhckNvbnRlbnQge1xyXG4gIHRvcDogMzJweDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3NpZGViYXJDb250ZW50IHtcclxuICBsZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3NpZGViYXJDb250ZW50IHtcclxuICByaWdodDogMDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjdmlld2VyQ29udGFpbmVyIHtcclxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXVxyXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxyXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcclxuICBsZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXVxyXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxyXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XHJcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcblxyXG4uTWFpbi1Db250YWluZXIgLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jdG9vbGJhckNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0b29sYmFyU2lkZWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxyXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHggIWltcG9ydGFudDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NpZGViYXJSZXNpemVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNnB4O1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjc2lkZWJhclJlc2l6ZXIge1xyXG4gIHJpZ2h0OiAtNnB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNzaWRlYmFyUmVzaXplciB7XHJcbiAgbGVmdDogLTZweDtcclxufVxyXG5cclxuI3Rvb2xiYXJDb250YWluZXIsXHJcbi5maW5kYmFyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXRvb2xiYXItYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuI3Rvb2xiYXJWaWV3ZXIge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuI2xvYWRpbmdCYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9vbGJhci1ib3JkZXItY29sb3IpO1xyXG5cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjbG9hZGluZ0JhciB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNsb2FkaW5nQmFyIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcclxuICBsZWZ0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI2xvYWRpbmdCYXIge1xyXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjbG9hZGluZ0JhciB7XHJcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNsb2FkaW5nQmFyIHtcclxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG59XHJcblxyXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTQycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTQycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBub25lO1xyXG59XHJcblxyXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3MuaW5kZXRlcm1pbmF0ZSAuZ2xpbW1lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMTUwcHgpO1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAxMzVkZWcsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAwLFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNDVweCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA1NXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDk1cHgsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAxMDBweFxyXG4gICk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5maW5kYmFyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5maW5kYmFyIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xyXG59XHJcbi5maW5kYmFyID4gZGl2IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmZpbmRiYXIud3JhcENvbnRhaW5lcnMgPiBkaXYge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2I2ZpbmRiYXJNZXNzYWdlQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIge1xyXG4gIGxlZnQ6IDY0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIge1xyXG4gIHJpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogMjZweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICB3aWR0aDogMjlweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZpbmRiYXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmZpbmRiYXIgbGFiZWwge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZmluZGJhciBsYWJlbDpob3ZlcixcclxuLmZpbmRiYXIgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2ZpbmRJbnB1dCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2ZpbmRJbnB1dCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZmluZGJhciAudG9vbGJhckZpZWxkW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLnRvb2xiYXJMYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmaW5kSW5wdXQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4jZmluZElucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAxKTtcclxufVxyXG4jZmluZElucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuI2ZpbmRJbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4jZmluZElucHV0W2RhdGEtc3RhdHVzPVwicGVuZGluZ1wiXSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjZmluZElucHV0W2RhdGEtc3RhdHVzPVwicGVuZGluZ1wiXSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xyXG59XHJcbiNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XCJub3RGb3VuZFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwMiwgMTAyLCAxKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIHBhZGRpbmc6IDZweCAwIDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IDMwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcclxuICByaWdodDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcclxuICBsZWZ0OiA0cHg7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyLmhpZGRlblNjcm9sbE1vZGVCdXR0b25zID4gLnNjcm9sbE1vZGVCdXR0b25zLFxyXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TcHJlYWRNb2RlQnV0dG9ucyA+IC5zcHJlYWRNb2RlQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9vckhhbmdlcixcclxuLmRvb3JIYW5nZXJSaWdodCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvciksXHJcbiAgICAwIDAgMCAxcHggdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpO1xyXG59XHJcbi5kb29ySGFuZ2VyOmFmdGVyLFxyXG4uZG9vckhhbmdlcjpiZWZvcmUsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmRvb3JIYW5nZXI6YWZ0ZXIsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogOHB4O1xyXG59XHJcbi5kb29ySGFuZ2VyOmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcclxufVxyXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxufVxyXG4uZG9vckhhbmdlcjpiZWZvcmUsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXdpZHRoOiA5cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlcjphZnRlcixcclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICByaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC05cHg7XHJcbn1cclxuXHJcbiNmaW5kUmVzdWx0c0NvdW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcHggNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jZmluZE1zZyB7XHJcbiAgY29sb3I6IHJnYmEoMjUxLCAwLCAwLCAxKTtcclxufVxyXG4jZmluZE1zZzplbXB0eSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlckxlZnQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyUmlnaHQsXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhckxlZnQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlckxlZnQsXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciAqIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciAqIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW46IDJweCAycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLm92ZXJsYXlCdXR0b246aG92ZXIsXHJcbi5vdmVybGF5QnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uID4gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcclxuLm92ZXJsYXlCdXR0b25bZGlzYWJsZWRdIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmb2N1cyxcclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjpob3ZlcixcclxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpob3ZlcixcclxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxuICB6LWluZGV4OiAxOTk7XHJcbn1cclxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxM3B4IDA7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24sXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbjogMnB4IDFweDtcclxuICBwYWRkaW5nOiAycHggNnB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuLnRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi50b29sYmFyQnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOmhvdmVyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcclxuICB0b3A6IDZweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XHJcbiAgcmlnaHQ6IDdweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XHJcbiAgbGVmdDogN3B4O1xyXG59XHJcblxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICB3aWR0aDogMTYycHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFweCAwIDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCA+IG9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNjdXN0b21TY2FsZU9wdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3BhZ2VXaWR0aE9wdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSBzb2xpZDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSxcclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIsXHJcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgLyogQWxsIG1hdGNoaW5nIGltYWdlcyBoYXZlIGEgc2l6ZSBvZiAxNngxNlxyXG4gICAqIEFsbCByZWxldmFudCBjb250YWluZXJzIGhhdmUgYSBzaXplIG9mIDI4eDI4ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWJnLWNvbG9yKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XHJcbiAgbWFzay1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogdmFyKC0tdG9vbGJhci1pY29uLW9wYWNpdHkpO1xyXG4gIHRvcDogNnB4O1xyXG4gIGxlZnQ6IDZweDtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogdmFyKC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHkpO1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDEycHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uZmluZFByZXZpb3VzOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5maW5kTmV4dDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnBhZ2VVcDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wYWdlRG93bjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uem9vbU91dDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnpvb21Jbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByZXNlbnRhdGlvbk1vZGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyayB7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ib29rbWFya1tocmVmPVwiI1wiXSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcclxufVxyXG5cclxuI3ZpZXdUaHVtYm5haWwudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbik7XHJcbn1cclxuXHJcbiN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuI3ZpZXdBdHRhY2htZW50cy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XHJcbn1cclxuXHJcbiN2aWV3TGF5ZXJzLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb24pO1xyXG59XHJcblxyXG4jY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4jdmlld0ZpbmQudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0b3A6IDFweDtcclxuICAvKiBDcmVhdGUgYSBmaWxsZWQgY2lyY2xlLCB3aXRoIGEgZGlhbWV0ZXIgb2YgOSBwaXhlbHMsIHVzaW5nIG9ubHkgQ1NTOiAqL1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDIxOSwgODUsIDEpO1xyXG4gIGhlaWdodDogOXB4O1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcclxuICByaWdodDogMTdweDtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDFweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMjZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xyXG4gIHBhZGRpbmctbGVmdDogMzZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5maXJzdFBhZ2U6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ubGFzdFBhZ2U6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUNjdzo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDdzo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2VsZWN0VG9vbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmhhbmRUb29sOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxWZXJ0aWNhbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsSG9yaXpvbnRhbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFdyYXBwZWQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWROb25lOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkT2RkOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZEV2ZW46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5kb2N1bWVudFByb3BlcnRpZXM6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcclxufVxyXG5cclxuLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTFweCAwO1xyXG4gIG1hcmdpbjogNXB4IDJweDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmhvcml6b250YWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDZweCAwIDVweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3IpO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkIHtcclxuICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG1hcmdpbjogMTBweCAwIDNweCA3cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyRmllbGRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBtYXJnaW46IDEwcHggN3B4IDNweCAwO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiBoaWRlcyB0aGUgc3Bpbm5lciBpbiBtb3ogKi9cclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQucGFnZU51bWJlci52aXNpYmxlUGFnZUlzTG9hZGluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzBhODRmZjtcclxufVxyXG5cclxuLnRvb2xiYXJMYWJlbCB7XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyA+IGE6YWN0aXZlLFxyXG4jdGh1bWJuYWlsVmlldyA+IGE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudGh1bWJuYWlsIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudGh1bWJuYWlsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3ID4gYTpsYXN0LW9mLXR5cGUgPiAudGh1bWJuYWlsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyA+IGE6bGFzdC1vZi10eXBlID4gLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG5cclxuLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDEzMiwgMTMyLCAxMzIsIDEpO1xyXG4gIG1hcmdpbjogLTFweCA5cHggNHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsSW1hZ2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4udGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxufVxyXG5cclxuYTpmb2N1cyA+IC50aHVtYm5haWwgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSxcclxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcsXHJcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxufVxyXG5cclxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4jb3V0bGluZVZpZXcsXHJcbiNhdHRhY2htZW50c1ZpZXcsXHJcbiNsYXllcnNWaWV3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiA0cHggNHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZVdpdGhEZWVwTmVzdGluZyA+IC50cmVlSXRlbSxcclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtID4gLnRyZWVJdGVtcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50cmVlSXRlbSA+IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLXdpZHRoOiA5NSU7XHJcbiAgLyogU3VidHJhY3QgdGhlIHJpZ2h0IHBhZGRpbmcgKGxlZnQsIGluIFJUTCBtb2RlKSBvZiB0aGUgY29udGFpbmVyOiAqL1xyXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZUl0ZW0gPiBhIHtcclxuICBwYWRkaW5nOiAycHggMCA1cHggNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbSA+IGEge1xyXG4gIHBhZGRpbmc6IDJweCA0cHggNXB4IDA7XHJcbn1cclxuXHJcbiNsYXllcnNWaWV3IC50cmVlSXRlbSA+IGEgPiAqIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+IGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjbGF5ZXJzVmlldyAudHJlZXNJdGVtID4gYSA+IGxhYmVsIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi50cmVlSXRlbVRvZ2dsZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XHJcbn1cclxuLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbiB+IC50cmVlSXRlbXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDRweDtcclxufVxyXG5cclxuLnRyZWVJdGVtLnNlbGVjdGVkID4gYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIsXHJcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIgKyBhLFxyXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyIH4gLnRyZWVJdGVtcyxcclxuLnRyZWVJdGVtID4gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFRPRE86IGZpbGUgRkYgYnVnIHRvIHN1cHBvcnQgOjotbW96LXNlbGVjdGlvbjp3aW5kb3ctaW5hY3RpdmVcclxuICAgc28gd2UgY2FuIG92ZXJyaWRlIHRoZSBvcGFxdWUgZ3JleSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHdpbmRvdyBpcyBpbmFjdGl2ZTtcclxuICAgc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcwNjIwOSAqL1xyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcclxufVxyXG46OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNlcnJvcldyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdmFyKC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG59XHJcblxyXG4jZXJyb3JNZXNzYWdlTGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNlcnJvck1lc3NhZ2VSaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jZXJyb3JNb3JlSW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1maWVsZC1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogM3B4IDRweCAycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycHggMTFweDtcclxufVxyXG5cclxuI292ZXJsYXlDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDQwMDAwO1xyXG59XHJcbiNvdmVybGF5Q29udGFpbmVyID4gKiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciA+IC5kaWFsb2cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5kaWFsb2cgPiAucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuXHJcbi5kaWFsb2cgPiAucm93ID4gKiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLmRpYWxvZyAudG9vbGJhckZpZWxkIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uZGlhbG9nIC5zZXBhcmF0b3Ige1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxufVxyXG5cclxuLmRpYWxvZyAuYnV0dG9uUm93IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRpYWxvZyA6bGluayB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbiNwYXNzd29yZE92ZXJsYXkgPiAuZGlhbG9nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3Bhc3N3b3JkT3ZlcmxheSAudG9vbGJhckZpZWxkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5ID4gLmRpYWxvZyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHNwYW4ge1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHAge1xyXG4gIG1heC13aWR0aDogMjI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGVhckJvdGgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZmlsZUlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuI1BERkJ1ZyB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzJweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbiNQREZCdWcgLmNvbnRyb2xzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDEpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4jUERGQnVnIC5wYW5lbHMge1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAyN3B4O1xyXG59XHJcbiNQREZCdWcgLnBhbmVscyA+IGRpdiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiNQREZCdWcgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlYnVnZ2VyU2hvd1RleHQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcclxufVxyXG4uZGVidWdnZXJIaWRlVGV4dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxufVxyXG4jUERGQnVnIC5zdGF0cyB7XHJcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn1cclxuI1BERkJ1ZyAuc3RhdHMgLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jUERGQnVnIHRhYmxlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDI1NSwgMTI4LCAxKTtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciBjYW52YXMge1xyXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItaG92ZXIgLnRleHRMYXllciA+IHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXNoYWRvdyAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG4uZ3JhYi10by1wYW4tZ3JhYiB7XHJcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fX30pLCBtb3ZlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcclxufVxyXG4uZ3JhYi10by1wYW4tZ3JhYlxyXG4gICo6bm90KGlucHV0KTpub3QodGV4dGFyZWEpOm5vdChidXR0b24pOm5vdChzZWxlY3QpOm5vdCg6bGluaykge1xyXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmFiLXRvLXBhbi1ncmFiOmFjdGl2ZSxcclxuLmdyYWItdG8tcGFuLWdyYWJiaW5nIHtcclxuICBjdXJzb3I6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19ffSksIG1vdmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogNTAwMDA7IC8qIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBhbnl0aGluZyBlbHNlIGluIFBERi5qcyEgKi9cclxufVxyXG5cclxuQHBhZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3ByaW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC8qIEdlbmVyYWwgcnVsZXMgZm9yIHByaW50aW5nLiAqL1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogUnVsZXMgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtb3pQcmludENhbGxiYWNrLiAqL1xyXG4gICNzaWRlYmFyQ29udGFpbmVyLFxyXG4gICNzZWNvbmRhcnlUb29sYmFyLFxyXG4gIC50b29sYmFyLFxyXG4gICNsb2FkaW5nQm94LFxyXG4gICNlcnJvcldyYXBwZXIsXHJcbiAgLnRleHRMYXllciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgI21haW5Db250YWluZXIsXHJcbiAgI3ZpZXdlckNvbnRhaW5lcixcclxuICAucGFnZSxcclxuICAucGFnZSBjYW52YXMge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAucGFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAucGFnZVtkYXRhLWxvYWRlZF0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZmlsZUlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFBERi5qcyBwcmludGluZyAqL1xyXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjb3V0ZXJDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgYm9keVtkYXRhLXBkZmpzcHJpbnRpbmddICNwcmludENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI3ByaW50Q29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLyogd3JhcHBlciBhcm91bmQgKHNjYWxlZCkgcHJpbnQgY2FudmFzIGVsZW1lbnRzICovXHJcbiAgI3ByaW50Q29udGFpbmVyID4gZGl2IHtcclxuICAgIC8qIFdpdGhvdXQgdGhlIGZvbGxvd2luZyBtYXgtaGVpZ2h0IGRlY2xhcmF0aW9uLCBDaHJvbWl1bSBtaWdodCBjcmVhdGUgZXh0cmFcclxuICAgICAqIGJsYW5rIHBhZ2VzLCBldmVuIHRob3VnaCBpdCBzaG91bGRuJ3QhICovXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG5cclxuICAgIC8qIElmIHdlJ3JlIHNtYWxsZXIgdGhhbiB0aGUgcGFnZSwgY2VudGVyIHRoZSBjYW52YXMgaG9yaXpvbnRhbGx5IGFuZFxyXG4gICAgICogdmVydGljYWxseSAqL1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAjcHJpbnRDb250YWluZXIgY2FudmFzLFxyXG4gICNwcmludENvbnRhaW5lciBpbWcge1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi52aXNpYmxlTGFyZ2VWaWV3LFxyXG4udmlzaWJsZU1lZGl1bVZpZXcsXHJcbi52aXNpYmxlU21hbGxWaWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcik7XHJcbiAgfVxyXG5cclxuICBodG1sW2Rpcj1cImx0clwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPVwicnRsXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5oaWRkZW5TbWFsbFZpZXcsXHJcbiAgLmhpZGRlblNtYWxsVmlldyAqIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC52aXNpYmxlU21hbGxWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBodG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciB7XHJcbiAgICBsZWZ0OiAzNHB4O1xyXG4gIH1cclxuICBodG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciB7XHJcbiAgICByaWdodDogMzRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUzNXB4KSB7XHJcbiAgI3NjYWxlU2VsZWN0Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY3NzL3ZpZXdlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhRTs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtF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RDtFQUNwRDtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0Esa0RBQWtEO0VBQ2xEO0lBQ0U7K0NBQzJDO0lBQzNDLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsd0JBQXdCOztJQUV4QjttQkFDZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsY0FBYztJQUNkLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvblxcclxcbiAqXFxyXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7XFxyXFxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxcclxcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcclxcbiAqXFxyXFxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcclxcbiAqXFxyXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcclxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxyXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxyXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcclxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcclxcbiAqL1xcclxcblxcclxcbi50ZXh0TGF5ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodCB7XFxyXFxuICBtYXJnaW46IC0xcHg7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMCwgMTcwLCAxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmJlZ2luIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQuZW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQubWlkZGxlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgOjotbW96LXNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5lbmRPZkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50LmFjdGl2ZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGEsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhOmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGE6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0QW5ub3RhdGlvbiBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1NCwgMjU1LCAwLjEzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogOXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEge1xcclxcbiAgZm9udDogbWVzc2FnZS1ib3g7XFxyXFxuICBmb250LXNpemU6IDlweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXRbZGlzYWJsZWRdLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhW2Rpc2FibGVkXSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdFtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dFtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmZvY3VzLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmZvY3VzLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWIge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYjpmb2N1cyB7XFxyXFxuICAvKlxcclxcbiAgICogTGV0dGVyIHNwYWNpbmcgaXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIGVhY2ggY2hhcmFjdGVyLiBIZW5jZSwgdGhlXFxyXFxuICAgKiBsZXR0ZXIgc3BhY2luZyBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSB2aXNpYmxlXFxyXFxuICAgKiBhcmVhLCBjYXVzaW5nIGhvcml6b250YWwgc2Nyb2xsaW5nLiBXZSBhdm9pZCB0aGlzIGJ5IGV4dGVuZGluZyB0aGUgd2lkdGhcXHJcXG4gICAqIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGZvY3VzIGFuZCByZXZlcnQgdGhpcyB3aGVuIGl0IGxvc2VzIGZvY3VzLlxcclxcbiAgICovXFxyXFxuICB3aWR0aDogMTE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwV3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMTUzLCAxKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEzNiwgMTM2LCAxMzYsIDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCA+ICoge1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIGgxIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBwIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuaGlnaGxpZ2h0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC51bmRlcmxpbmVBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWlnZ2x5QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zdHJpa2VvdXRBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmZyZWVUZXh0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5saW5lQW5ub3RhdGlvbiBzdmcgbGluZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVhcmVBbm5vdGF0aW9uIHN2ZyByZWN0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsXFxyXFxuLmFubm90YXRpb25MYXllciAucG9seWxpbmVBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb2x5Z29uQW5ub3RhdGlvbiBzdmcgcG9seWdvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jYXJldEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuaW5rQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXFxyXFxuLmFubm90YXRpb25MYXllciAuc3RhbXBBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmZpbGVBdHRhY2htZW50QW5ub3RhdGlvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLmNhbnZhc1dyYXBwZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIHdpZHRoOiA4MTZweDtcXHJcXG4gIGhlaWdodDogMTA1NnB4O1xcclxcbiAgbWFyZ2luOiAxcHggYXV0byAtOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxyXFxuICAtby1ib3JkZXItaW1hZ2U6IHVybChpbWFnZXMvc2hhZG93LnBuZykgOSA5IHJlcGVhdDtcXHJcXG4gICAgIGJvcmRlci1pbWFnZTogdXJsKGltYWdlcy9zaGFkb3cucG5nKSA5IDkgcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAucGFnZSB7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyAucGFnZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQsXFxyXFxuLnNwcmVhZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMuNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXFxyXFxuLnNwcmVhZCB7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByZWFkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmVhZCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMy41cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0zLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAuc3ByZWFkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSBjYW52YXNbaGlkZGVuXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIC5sb2FkaW5nSWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaW1hZ2VzL2xvYWRpbmctaWNvbi5naWZcXFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5wYWdlLFxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnNwcmVhZCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSxcXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXNpZGViYXItd2lkdGg6IDIwMHB4O1xcclxcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQ6IDA7XFxyXFxuXFxyXFxuICAtLXRvb2xiYXItaWNvbi1vcGFjaXR5OiAwLjc7XFxyXFxuICAtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5OiAwLjk7XFxyXFxuXFxyXFxuICAtLW1haW4tY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMSk7XFxyXFxuICAtLWJvZHktYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMSk7XFxyXFxuICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgyNTUsIDc0LCA3NCwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDEwLCAxMzIsIDI1NSwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMiwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMTE2LCAxNzcsIDIzOSwgMSk7XFxyXFxuICAtLXNjcm9sbGJhci1jb2xvcjogYXV0bztcXHJcXG4gIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiBhdXRvO1xcclxcbiAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuXFxyXFxuICAtLXNpZGViYXItbmFycm93LWJnLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyNDAsIDAuOSk7XFxyXFxuICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ3LCAxKTtcXHJcXG4gIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjUwLCAxKTtcXHJcXG4gIC0tdG9vbGJhci1ib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XFxyXFxuICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgyMjEsIDIyMiwgMjIzLCAxKTtcXHJcXG4gIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE5LCAxKTtcXHJcXG4gIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtLWZpZWxkLWNvbG9yOiByZ2JhKDYsIDYsIDYsIDEpO1xcclxcbiAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODgsIDEpO1xcclxcbiAgLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3I6IHJnYmEoMjI3LCAyMjgsIDIzMCwgMSk7XFxyXFxuICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC0tZG9vcmhhbmdlci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4yKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjM3LCAxKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMSk7XFxyXFxuICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMSk7XFxyXFxuICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMyk7XFxyXFxuXFxyXFxuICAtLWxvYWRpbmctaWNvbjogdXJsKGltYWdlcy9sb2FkaW5nLnN2Zyk7XFxyXFxuICAtLXRyZWVpdGVtLWV4cGFuZGVkLWljb246IHVybChpbWFnZXMvdHJlZWl0ZW0tZXhwYW5kZWQuc3ZnKTtcXHJcXG4gIC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb246IHVybChpbWFnZXMvdHJlZWl0ZW0tY29sbGFwc2VkLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1tZW51QXJyb3cuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZVVwLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VEb3duLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbU91dC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbUluLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXByaW50LWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1wcmludC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1kb3dubG9hZC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1ib29rbWFyay5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld091dGxpbmUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdMYXllcnMuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2VhcmNoLnN2Zyk7XFxyXFxuICAtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbjogdXJsKGltYWdlcy9maW5kYmFyQnV0dG9uLXByZXZpb3VzLnN2Zyk7XFxyXFxuICAtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uOiB1cmwoaW1hZ2VzL2ZpbmRiYXJCdXR0b24tbmV4dC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3cuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3cuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XFxyXFxuICAgIC0tYm9keS1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAxKTtcXHJcXG4gICAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMTk5LCAxNywgMTcsIDEpO1xcclxcbiAgICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDAsIDk2LCAyMjMsIDEpO1xcclxcbiAgICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoNDAsIDQwLCA0MywgMSk7XFxyXFxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgyMCwgNjgsIDEzMywgMSk7XFxyXFxuICAgIC0tc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjMsIDEpO1xcclxcbiAgICAtLXNjcm9sbGJhci1iZy1jb2xvcjogcmdiYSgzNSwgMzUsIDM5LCAxKTtcXHJcXG4gICAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuXFxyXFxuICAgIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoNDIsIDQyLCA0NiwgMC45KTtcXHJcXG4gICAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTAsIDUwLCA1MiwgMSk7XFxyXFxuICAgIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSg1NiwgNTYsIDYxLCAxKTtcXHJcXG4gICAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAxKTtcXHJcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMywgMSk7XFxyXFxuICAgIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XFxyXFxuICAgIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIC0tZmllbGQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XFxyXFxuICAgIC0tZmllbGQtYmctY29sb3I6IHJnYmEoNjQsIDY0LCA2OCwgMSk7XFxyXFxuICAgIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xcclxcbiAgICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSg4OSwgODksIDg5LCAxKTtcXHJcXG4gICAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gICAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzksIDEpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDMsIDEpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoOTMsIDk0LCA5OCwgMSk7XFxyXFxuICAgIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XFxyXFxuICAgIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XFxyXFxuICAgIC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMSk7XFxyXFxuXFxyXFxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgdXNlZCBpbiA8aW5wdXQ+IGVsZW1lbnRzLCB3aGljaCB1bmZvcnR1bmF0ZWx5IG1lYW5zIHRoYXRcXHJcXG4gICAgICogdGhlIGBtYXNrLWltYWdlYCBhcHByb2FjaCB1c2VkIHdpdGggYWxsIG9mIHRoZSBvdGhlciBpbWFnZXMgZG9lc24ndCB3b3JrXFxyXFxuICAgICAqIGhlcmU7IGhlbmNlIHdoeSB3ZSBzdGlsbCBoYXZlIHR3byB2ZXJzaW9ucyBvZiB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UuICovXFxyXFxuICAgIC0tbG9hZGluZy1pY29uOiB1cmwoaW1hZ2VzL2xvYWRpbmctZGFyay5zdmcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvKiBGb250IHNpemUgaXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFjdGl2aXR5IGJhciB0aGUgY29ycmVjdCBzaXplLiAqL1xcclxcbiAgLyogZm9udC1zaXplOiAxMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAvKiBmb250OiBtZXNzYWdlLWJveDsgKi9cXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbGJhci1jb2xvcikgdmFyKC0tc2Nyb2xsYmFyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5lbmFibGVQZXJtaXNzaW9ucyAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4ge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUucGRmUHJlc2VudGF0aW9uTW9kZUNvbnRyb2xzID4gKixcXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxyXFxuICBsZWZ0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgcmlnaHQ6IGNhbGMoMHB4IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG4gIC8qIFByZXZlbnQgZS5nLiB0aGUgdGh1bWJuYWlscyBiZWluZyBzZWxlY3RlZCB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyTW92aW5nICNzaWRlYmFyQ29udGFpbmVyLFxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNtYWluQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyQ29udGVudCB7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3NpZGViYXJDb250ZW50IHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3NpZGViYXJDb250ZW50IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXVxcclxcbiAgI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuXFxyXFxuICAjdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXHJcXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl1cXHJcXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxcclxcbiAgI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4uTWFpbi1Db250YWluZXIgLnRvb2xiYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyU2lkZWJhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhclJlc2l6ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3NpZGViYXJSZXNpemVyIHtcXHJcXG4gIHJpZ2h0OiAtNnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3NpZGViYXJSZXNpemVyIHtcXHJcXG4gIGxlZnQ6IC02cHg7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyQ29udGFpbmVyLFxcclxcbi5maW5kYmFyLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyVmlld2VyIHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2xvYWRpbmdCYXIge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNsb2FkaW5nQmFyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgbGVmdDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjbG9hZGluZ0JhciB7XFxyXFxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTE0MnB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTE0MnB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIgLnByb2dyZXNzLmluZGV0ZXJtaW5hdGUgLmdsaW1tZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxNTBweCk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMzVkZWcsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3IpIDAsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpIDVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNDVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDU1cHgsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA5NXB4LFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAxMDBweFxcclxcbiAgKTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzc0luZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMCA0cHg7XFxyXFxuICBtYXJnaW46IDRweCAycHg7XFxyXFxuICBjb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIge1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xcclxcbn1cXHJcXG4uZmluZGJhciA+IGRpdiB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2IHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4uZmluZGJhci53cmFwQ29udGFpbmVycyA+IGRpdiNmaW5kYmFyTWVzc2FnZUNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciB7XFxyXFxuICBsZWZ0OiA2NHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgcmlnaHQ6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogM3B4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBoZWlnaHQ6IDI2cHg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XFxyXFxuICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIGxhYmVsIHtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgbGFiZWw6aG92ZXIsXFxyXFxuLmZpbmRiYXIgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2ZpbmRJbnB1dCB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2ZpbmRJbnB1dCB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAudG9vbGJhckxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZmluZElucHV0IHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAxKTtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbiNmaW5kSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwicGVuZGluZ1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwicGVuZGluZ1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwibm90Rm91bmRcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTAyLCAxMDIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICBwYWRkaW5nOiA2cHggMCAxMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgei1pbmRleDogMzAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TY3JvbGxNb2RlQnV0dG9ucyA+IC5zY3JvbGxNb2RlQnV0dG9ucyxcXHJcXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TcHJlYWRNb2RlQnV0dG9ucyA+IC5zcHJlYWRNb2RlQnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5kb29ySGFuZ2VyLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKSxcXHJcXG4gICAgMCAwIDAgMXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXI6YmVmb3JlLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XFxyXFxuICBib3JkZXItd2lkdGg6IDhweDtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG4uZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItd2lkdGg6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLThweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZmluZFJlc3VsdHNDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcHggNHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNmaW5kTXNnIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1MSwgMCwgMCwgMSk7XFxyXFxufVxcclxcbiNmaW5kTXNnOmVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyVmlld2VyTWlkZGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCxcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIgKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luOiAycHggMnB4IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbixcXHJcXG4ub3ZlcmxheUJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDAgbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG59XFxyXFxuLm92ZXJsYXlCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1idXR0b24tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheUJ1dHRvbjpob3ZlcixcXHJcXG4ub3ZlcmxheUJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuLm92ZXJsYXlCdXR0b25bZGlzYWJsZWRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkIC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmb2N1cyxcXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi50b29sYmFyQnV0dG9uLnRleHRCdXR0b246aG92ZXIsXFxyXFxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbiAgei1pbmRleDogMTk5O1xcclxcbn1cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbixcXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIG1hcmdpbjogMnB4IDFweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA2cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4udG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4udG9vbGJhckJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZCxcXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcXHJcXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XFxyXFxuICB0b3A6IDZweDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTYycHg7XFxyXFxuICBoZWlnaHQ6IDI4cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxcHggMCAycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xcclxcbiAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCA+IG9wdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbVNjYWxlT3B0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwYWdlV2lkdGhPcHRpb24ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b25TcGFjZXIge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlLFxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyLFxcclxcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XFxyXFxuICAvKiBBbGwgbWF0Y2hpbmcgaW1hZ2VzIGhhdmUgYSBzaXplIG9mIDE2eDE2XFxyXFxuICAgKiBBbGwgcmVsZXZhbnQgY29udGFpbmVycyBoYXZlIGEgc2l6ZSBvZiAyOHgyOCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1iZy1jb2xvcik7XFxyXFxuICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxyXFxuICBtYXNrLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IHZhcigtLXRvb2xiYXItaWNvbi1vcGFjaXR5KTtcXHJcXG4gIHRvcDogNnB4O1xcclxcbiAgbGVmdDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IHZhcigtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5KTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICByaWdodDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uZmluZFByZXZpb3VzOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uZmluZE5leHQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucGFnZVVwOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wYWdlRG93bjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnpvb21PdXQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uem9vbUluOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucHJlc2VudGF0aW9uTW9kZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByaW50OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByaW50LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5vcGVuRmlsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZG93bmxvYWQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyayB7XFxyXFxuICBwYWRkaW5nLXRvcDogNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va21hcmtbaHJlZj1cXFwiI1xcXCJdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmJvb2ttYXJrOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdUaHVtYm5haWwudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdBdHRhY2htZW50cy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld0xheWVycy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdGaW5kLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRvcDogMXB4O1xcclxcbiAgLyogQ3JlYXRlIGEgZmlsbGVkIGNpcmNsZSwgd2l0aCBhIGRpYW1ldGVyIG9mIDkgcGl4ZWxzLCB1c2luZyBvbmx5IENTUzogKi9cXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDIxOSwgODUsIDEpO1xcclxcbiAgaGVpZ2h0OiA5cHg7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTdweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDAgMXB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWluLWhlaWdodDogMjZweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uID4gc3BhbiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmZpcnN0UGFnZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ubGFzdFBhZ2U6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDY3c6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUN3OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2VsZWN0VG9vbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5oYW5kVG9vbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFZlcnRpY2FsOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsSG9yaXpvbnRhbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxXcmFwcGVkOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZE5vbmU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkT2RkOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWRFdmVuOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvY3VtZW50UHJvcGVydGllczo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDExcHggMDtcXHJcXG4gIG1hcmdpbjogNXB4IDJweDtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvcml6b250YWxUb29sYmFyU2VwYXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA2cHggMCA1cHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZCB7XFxyXFxuICBwYWRkaW5nOiA0cHggN3B4O1xcclxcbiAgbWFyZ2luOiAzcHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudG9vbGJhckZpZWxkW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgM3B4IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyRmllbGRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBtYXJnaW46IDEwcHggN3B4IDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIGhpZGVzIHRoZSBzcGlubmVyIGluIG1veiAqL1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyLnZpc2libGVQYWdlSXNMb2FkaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZDpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICMwYTg0ZmY7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyTGFiZWwge1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI251bVBhZ2VzLnRvb2xiYXJMYWJlbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNudW1QYWdlcy50b29sYmFyTGFiZWwge1xcclxcbiAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHggMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyA+IGE6YWN0aXZlLFxcclxcbiN0aHVtYm5haWxWaWV3ID4gYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsIHtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50aHVtYm5haWwge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudGh1bWJuYWlsIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWwge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWw6bm90KFtkYXRhLWxvYWRlZF0pIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMTMyLCAxMzIsIDEzMiwgMSk7XFxyXFxuICBtYXJnaW46IC0xcHggOXB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbEltYWdlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5hOmZvY3VzID4gLnRodW1ibmFpbCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlLFxcclxcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSB7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcsXFxyXFxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGxpbmVWaWV3LFxcclxcbiNhdHRhY2htZW50c1ZpZXcsXFxyXFxuI2xheWVyc1ZpZXcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiA0cHggNHB4IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVXaXRoRGVlcE5lc3RpbmcgPiAudHJlZUl0ZW0sXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbSA+IC50cmVlSXRlbXMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW0gPiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1pbi13aWR0aDogOTUlO1xcclxcbiAgLyogU3VidHJhY3QgdGhlIHJpZ2h0IHBhZGRpbmcgKGxlZnQsIGluIFJUTCBtb2RlKSBvZiB0aGUgY29udGFpbmVyOiAqL1xcclxcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlSXRlbSA+IGEge1xcclxcbiAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbSA+IGEge1xcclxcbiAgcGFkZGluZzogMnB4IDRweCA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+ICoge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+IGxhYmVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2xheWVyc1ZpZXcgLnRyZWVzSXRlbSA+IGEgPiBsYWJlbCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbVRvZ2dsZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbn1cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1leHBhbmRlZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWV4cGFuZGVkLWljb24pO1xcclxcbn1cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcbi50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuIH4gLnRyZWVJdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbVRvZ2dsZXIge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW0uc2VsZWN0ZWQgPiBhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIsXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciArIGEsXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciB+IC50cmVlSXRlbXMsXFxyXFxuLnRyZWVJdGVtID4gYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETzogZmlsZSBGRiBidWcgdG8gc3VwcG9ydCA6Oi1tb3otc2VsZWN0aW9uOndpbmRvdy1pbmFjdGl2ZVxcclxcbiAgIHNvIHdlIGNhbiBvdmVycmlkZSB0aGUgb3BhcXVlIGdyZXkgYmFja2dyb3VuZCB3aGVuIHRoZSB3aW5kb3cgaXMgaW5hY3RpdmU7XFxyXFxuICAgc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcwNjIwOSAqL1xcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxyXFxufVxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JXcmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdmFyKC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNZXNzYWdlTGVmdCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTWVzc2FnZVJpZ2h0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTW9yZUluZm8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWFyZ2luOiAzcHggNHB4IDJweCAhaW1wb3J0YW50O1xcclxcbiAgcGFkZGluZzogMnB4IDExcHg7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB6LWluZGV4OiA0MDAwMDtcXHJcXG59XFxyXFxuI292ZXJsYXlDb250YWluZXIgPiAqIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciA+IC5kaWFsb2cge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyA+IC5yb3cge1xcclxcbiAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nID4gLnJvdyA+ICoge1xcclxcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyAudG9vbGJhckZpZWxkIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgLnNlcGFyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4IDA7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyAuYnV0dG9uUm93IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgOmxpbmsge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwYXNzd29yZE92ZXJsYXkgPiAuZGlhbG9nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Bhc3N3b3JkT3ZlcmxheSAudG9vbGJhckZpZWxkIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgPiAuZGlhbG9nIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMjVweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHAge1xcclxcbiAgbWF4LXdpZHRoOiAyMjVweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLmJ1dHRvblJvdyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJCb3RoIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsZUlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jUERGQnVnIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbiNQREZCdWcgLmNvbnRyb2xzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuI1BERkJ1ZyAucGFuZWxzIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAyN3B4O1xcclxcbn1cXHJcXG4jUERGQnVnIC5wYW5lbHMgPiBkaXYge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4jUERGQnVnIGJ1dHRvbi5hY3RpdmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5kZWJ1Z2dlclNob3dUZXh0IHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG4uZGVidWdnZXJIaWRlVGV4dDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbn1cXHJcXG4jUERGQnVnIC5zdGF0cyB7XFxyXFxuICBmb250LWZhbWlseTogY291cmllcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxufVxcclxcbiNQREZCdWcgLnN0YXRzIC50aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuI1BERkJ1ZyB0YWJsZSB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC5jYW52YXNXcmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyNTUsIDEyOCwgMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLmNhbnZhc1dyYXBwZXIgY2FudmFzIHtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci1ob3ZlciAudGV4dExheWVyID4gc3Bhbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXNoYWRvdyAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYWItdG8tcGFuLWdyYWIge1xcclxcbiAgY3Vyc29yOiB1cmwoXFxcImltYWdlcy9ncmFiLmN1clxcXCIpLCBtb3ZlICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYiAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5ncmFiLXRvLXBhbi1ncmFiXFxyXFxuICAqOm5vdChpbnB1dCk6bm90KHRleHRhcmVhKTpub3QoYnV0dG9uKTpub3Qoc2VsZWN0KTpub3QoOmxpbmspIHtcXHJcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uZ3JhYi10by1wYW4tZ3JhYjphY3RpdmUsXFxyXFxuLmdyYWItdG8tcGFuLWdyYWJiaW5nIHtcXHJcXG4gIGN1cnNvcjogdXJsKFxcXCJpbWFnZXMvZ3JhYmJpbmcuY3VyXFxcIiksIG1vdmUgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZyAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDUwMDAwOyAvKiBzaG91bGQgYmUgaGlnaGVyIHRoYW4gYW55dGhpbmcgZWxzZSBpbiBQREYuanMhICovXFxyXFxufVxcclxcblxcclxcbkBwYWdlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW50Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICAvKiBHZW5lcmFsIHJ1bGVzIGZvciBwcmludGluZy4gKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1velByaW50Q2FsbGJhY2suICovXFxyXFxuICAjc2lkZWJhckNvbnRhaW5lcixcXHJcXG4gICNzZWNvbmRhcnlUb29sYmFyLFxcclxcbiAgLnRvb2xiYXIsXFxyXFxuICAjbG9hZGluZ0JveCxcXHJcXG4gICNlcnJvcldyYXBwZXIsXFxyXFxuICAudGV4dExheWVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtYWluQ29udGFpbmVyLFxcclxcbiAgI3ZpZXdlckNvbnRhaW5lcixcXHJcXG4gIC5wYWdlLFxcclxcbiAgLnBhZ2UgY2FudmFzIHtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2Uge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2VbZGF0YS1sb2FkZWRdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlsZUlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFJ1bGVzIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgUERGLmpzIHByaW50aW5nICovXFxyXFxuICBib2R5W2RhdGEtcGRmanNwcmludGluZ10gI291dGVyQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjcHJpbnRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gICNwcmludENvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC8qIHdyYXBwZXIgYXJvdW5kIChzY2FsZWQpIHByaW50IGNhbnZhcyBlbGVtZW50cyAqL1xcclxcbiAgI3ByaW50Q29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgLyogV2l0aG91dCB0aGUgZm9sbG93aW5nIG1heC1oZWlnaHQgZGVjbGFyYXRpb24sIENocm9taXVtIG1pZ2h0IGNyZWF0ZSBleHRyYVxcclxcbiAgICAgKiBibGFuayBwYWdlcywgZXZlbiB0aG91Z2ggaXQgc2hvdWxkbid0ISAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG5cXHJcXG4gICAgLyogSWYgd2UncmUgc21hbGxlciB0aGFuIHRoZSBwYWdlLCBjZW50ZXIgdGhlIGNhbnZhcyBob3Jpem9udGFsbHkgYW5kXFxyXFxuICAgICAqIHZlcnRpY2FsbHkgKi9cXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNwcmludENvbnRhaW5lciBjYW52YXMsXFxyXFxuICAjcHJpbnRDb250YWluZXIgaW1nIHtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZUxhcmdlVmlldyxcXHJcXG4udmlzaWJsZU1lZGl1bVZpZXcsXFxyXFxuLnZpc2libGVTbWFsbFZpZXcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcXHJcXG4gICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaHRtbFtkaXI9XFxcImx0clxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3LFxcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyxcXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5oaWRkZW5TbWFsbFZpZXcsXFxyXFxuICAuaGlkZGVuU21hbGxWaWV3ICoge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnZpc2libGVTbWFsbFZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gIH1cXHJcXG4gIGh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciB7XFxyXFxuICAgIGxlZnQ6IDM0cHg7XFxyXFxuICB9XFxyXFxuICBodG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgICByaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcXHJcXG4gICNzY2FsZVNlbGVjdENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vY3NzL3ZpZXdlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaW1hZ2VzL2ljX3B1bGxkb3duLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ltYWdlcy9iZ191cGxvYWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9maXJzdC1wYWdlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vZmlyc3QtcGFnZS1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3ByZXYtcGFnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3ByZXYtcGFnZS1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL25leHQtcGFnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL25leHQtcGFnZS1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2xhc3QtcGFnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2xhc3QtcGFnZS1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi96b29tLXNlbGVjdC1kb3duLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3pvb20tb3V0LWJ0bjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1vdXQtYnRuMi1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi96b29tLWluLWJ0bjIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4yLWhvdmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWlucHV0LW1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vZmllbGQtaW5wdXQtbW9kZS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9tZW1vLWlucHV0LW1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vbWVtby1JbnB1dC1tb2RlLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL21lbW8tYWRkLW1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vbWVtby1hZGQtbW9kZS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaW1hZ2VzL2ljLXRvb2x0aXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tY2VudGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWxlZnQtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1jZW50ZXItaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1yaWdodC1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9iLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWRlbGV0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9wcm9wZXJ0aWVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5wZGZWaWV3ZXIgLnBhZ2Uge1xuICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG5cbi5PdXRlci1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLk1haW5Db250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAzMjBweDsgfVxuXG4jVGVtcGxhdGVQREZWaWV3ZXIsXG4jUmVhZGVyUERGVmlld2VyLFxuI1ByZXZpZXdSZWFkZXJQREZWaWV3ZXIge1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGluc2V0OiAxMjhweCAzMDBweCAzMDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4IC0gMzAwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHggLSA2NHB4KTsgfVxuXG4uVmlld2VyLUNvbnRhaW5lci5mdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgaW5zZXQ6IHVuc2V0ICFpbXBvcnRhbnQ7IH1cblxuLlZpZXdlci1Db250YWluZXIubGVmdGZ1bGwge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAxMjhweCAwcHggMzAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpICFpbXBvcnRhbnQ7IH1cblxuLlZpZXdlci1Db250YWluZXIucmlnaHRmdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMTI4cHggMzAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50OyB9XG5cbi5UZW1wbGF0ZS1TaG93IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4uVGVtcGxhdGUtSGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uQXR0cmlidXRlLVN3aXRjaC1MYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uQXR0cmlidXRlLVN3aXRjaC1MYWJlbCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLyogVGhlIHNsaWRlciAqL1xuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40czsgfVxuXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBib3gtc2hhZG93OiAtMS42cHggMS4ycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40czsgfVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDQuNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTsgfVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyLlJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuXG4uUG9wdXAtSGVhZCAuVGl0bGUsIC5Qb3B1cC1UYWItTWFpbiBsaSBhLFxuLlBvcHVwLVRhYi1NYWluIGxpIHNwYW4sIC5SZWFkZXItVG9vbGJhci1Hcm91cCAuVG9vbGJhci1GaWVsZC5QYWdlLU51bWJlciwgLlJlYWRlci1Ub29sYmFyLUdyb3VwIC5Ub29sYmFyLUxhYmVsLCAuUmVhZGVyLUJ1dHRvbiwgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3cgLlRpdGxlLCAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIsIC5UZW1wbGF0ZS1CdXR0b24ge1xuICBmb250LWZhbWlseTogTWFsZ3VuR290aGljO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsOyB9XG5cbi5NYXJnaW4tUmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4jUmVhZGVyVmlld2VyQ29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2cHg7XG4gIGxlZnQ6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaW5zZXQ6IDQ2cHggMCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2cHggLSA4MXB4KTsgfVxuXG4uRW1wdHlGaWVsZCB7XG4gIGJvcmRlcjogcmVkIGRhc2hlZCAycHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMikgIWltcG9ydGFudDsgfVxuXG4uUmVhZGVyLVBhZ2UtTWVtby1MYXllciB0ZXh0YXJlYSB7XG4gIHRleHQtd3JhcDogbm93cmFwOyB9XG5cbi5Oby1FdmVudC1MYXllciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7IH1cblxuLlNpZ24tUG9wdXAge1xuICB6LWluZGV4OiA5OTk5MDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uU2lnbi1Qb3B1cDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLlBvcHVwLUJnLVdyYXAge1xuICB6LWluZGV4OiA5OTk5ODtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLlNpZ24tTGF5ZXJwb3Age1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiA1NjJweDtcbiAgaGVpZ2h0OiA1NDNweDsgfVxuXG4uU2lnbi1MYXllcnBvcCAuUG9wdXAtSGVhZCB7XG4gIHBhZGRpbmc6IDMycHggMHB4IDIwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uUG9wdXAtSGVhZCAuVGl0bGUge1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTExMTExOyB9XG5cbi5Qb3B1cC1Cb2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA1NDNweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHggLSA4NXB4KTsgfVxuXG4uUG9wdXAtRm9vdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDBweCAzMXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLlBvcHVwLUZvb3QgLmJ0bl9jb21tb24ge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzNweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIG1hcmdpbjogMCAwIDAgM3B4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5Qb3B1cC1Gb290IC5idG5fY29tbW9uLmJ0bl9jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3OyB9XG5cbi5Qb3B1cC1Gb290IC5idG5fY29tbW9uLmJ0bl9yZXNldCB7XG4gIGNvbG9yOiAjMDBhYWRhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhOyB9XG5cbi5TaWduLVRhYi1Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDU2MnB4OyB9XG5cbi5Qb3B1cC1UYWItTWFpbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMzFweDsgfVxuXG4uUG9wdXAtVGFiLU1haW4gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTI2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTsgfVxuXG4uUG9wdXAtVGFiLU1haW4gbGkgYSxcbi5Qb3B1cC1UYWItTWFpbiBsaSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLlBvcHVwLVRhYi1NYWluIGxpLm9uIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xuICBib3JkZXI6IG5vbmU7IH1cblxuLlBvcHVwLVRhYi1NYWluIGxpLm9uIGEsXG4uUG9wdXAtVGFiLU1haW4gbGkub24gc3BhbiB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1NjJweDtcbiAgaGVpZ2h0OiAzNTVweDtcbiAgcGFkZGluZzogMjBweCAzMXB4IDAgMzFweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAjcmVnaXN0ZXJlZEFyZWEuU2lnbi1BcmVhLkRyYXctQXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEgLmlubmVyYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IC0xcHggMCAwIC0xcHg7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuc2lnbnBhZCxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEgLnNpZ25Nc2cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI2NXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAyNHB4OyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tSGVhZCBzZWxlY3QsXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUhlYWQgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxuXG4uU2lnbi1IZWFkIHNlbGVjdCB7XG4gIHdpZHRoOiAxNTNweDtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2FsYygxMDAlIC0gOHB4KSA1MCUgI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5TaWduLUhlYWQgLmJ0bl9jb21tb24ubGluZV9ibHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLlNpZ24tSGVhZCAuYnRuX2NvbW1vbi5saW5lX2JsdWUge1xuICBjb2xvcjogIzBlNzNjMyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGU3M2MzOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLnNpZ25UeHRXcmFwIHtcbiAgcGFkZGluZzogMCAxNHB4IDAgMjRweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMDsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsIGxpLFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMzMuMzMlO1xuICAtbXMtZmxleC1iYXNpczogMzMuMzMlO1xuICBmbGV4LWJhc2lzOiAzMy4zMyU7XG4gIG1hcmdpbjogMTBweCAwIDA7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCBsaSAuY2FudmFzX3dyYXAsXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bCBsaSAuY2FudmFzX3dyYXAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGkgY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bCBsaSAuY2FudmFzX3dyYXAgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhID4gLmlubmVyYm94IHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuaW1nX3VwbG9hZF9hcmVhIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlICsgMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAycHgpO1xuICBtYXJnaW46IC0xcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3ggLmJnX2FyZWEge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgcmVwZWF0IDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3ggLmltZyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uY29ybmVyX3BvaW50X2FyZWEgLmlubmVyYm94IC5pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiA0NzhweDtcbiAgbWF4LWhlaWdodDogMjI2cHg7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhIC50eHRfZ3VpZGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5jb3JuZXJfcG9pbnRfYXJlYTpob3ZlciAudHh0X2d1aWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC44KTsgfVxuXG4uaW1nX3VwbG9hZF9hcmVhIC51cGxvYWRfbm90ZSB7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHBhZGRpbmc6IDEwcHggMCAwO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QyZDJkMjsgfVxuXG4uaW1nX3VwbG9hZF9hcmVhIC51cGxvYWRfbm90ZSBwIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IH1cblxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtZmxleC1wYWNrOiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwIG5vbmU7IH1cblxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX2l0ZW0ge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwIG5vbmU7IH1cblxuLnNpZ25MaXN0IC5zaWduX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNDFweDtcbiAgaGVpZ2h0OiAyNTRweDtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5zaWduTGlzdCAuc2lnbl9pdGVtIC5zaWduX2NvbnRfYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX3RpdCB7XG4gIG1hcmdpbjogMCAwIDRweDtcbiAgY29sb3I6ICM2YTcyNzY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl90aXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VjZWZmMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5Qb3B1cC1Cb2R5IC5zaWduTGlzdCAuc2lnbl9jb250IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udCBjYW52YXMge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5zaWduTGlzdCAuc2lnbl9pdGVtIC5zaWduX2NvbnQgLmltZ19zdGFtcCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlOyB9XG5cbi5SZWFkZXItVG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA0NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7IH1cblxuLlJlYWRlci1Ub29sYmFyLUdyb3VwLkNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmhvdmVyLFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpob3Zlcixcbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b246aG92ZXIsXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUZpcnN0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUZpcnN0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUZpcnN0LUJ1dHRvbjpkaXNhYmxlZCxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246ZGlzYWJsZWQsXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmRpc2FibGVkLFxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7IH1cblxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1yaWdodDogMTdweDsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24gPiBpLFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24gPiBpLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uID4gaSxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uID4gaSxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiA+IGkge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDRweDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMjZweDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg2KSxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDEwKSB7XG4gIHdpZHRoOiA2MXB4OyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDgpIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cblxuLlJlYWRlci1Ub29sYmFyLUdyb3VwIC5Ub29sYmFyLUZpZWxkLlBhZ2UtTnVtYmVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDsgfVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgLlRvb2xiYXItTGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMjZweDsgfVxuXG4uVG9vbGJhci1CdXR0b24tRGl2aWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNmM4ZjtcbiAgbWFyZ2luOiAwIDMwcHggMCAzMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAvKuyalOyGjOydmCDrhpLsnbTsnZgg67CYKDUwJSkg66eM7YG8IOychOuhnCDsnbTrj5kqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoNykge1xuICB3aWR0aDogNjBweDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpIC5Ub29sYmFyLUxhYmVsID4gYSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlpvb20tSW4tQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19ffSk7IH1cblxuLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3A6ICNjY2MgMXB4IHNvbGlkOyB9XG5cbi5SZWFkZXItQm90dG9tLUNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTg1cHg7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5SZWFkZXItQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gIGJvcmRlcjogMDsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Db25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTsgfVxuXG4uU2lnbi1MYXllcnBvcCAjc2lnblRleHRBcmVhLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDsgfVxuXG4jc2lnblRleHRJbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2OHB4KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbiNzaWduVGV4dENyZWF0ZSB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCAuc2lnblR5cGVMaXN0IHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsLnNpZ25UeXBlTGlzdCBsaSB7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA3NXB4OyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0IGxpLm9uIC5jYW52YXNfd3JhcCxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsLnNpZ25UeXBlTGlzdCBsaS5vbiAuY2FudmFzX3dyYXAge1xuICBib3JkZXI6IHNvbGlkIDRweCAjMDBhYWRhOyB9XG5cbi5FZGl0b3ItQXR0cmlidXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QzZDNkMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcbiAgei1pbmRleDogOTk5OTk7IH1cblxuLmNvbG9yLXBpY2tlciB7XG4gIHotaW5kZXg6IDk5OTk5OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMgLkRpdmlkZXIge1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZS1XcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LVdyYXAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyID4gaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyB9XG5cbi5BdHRyaWJ1dGUtSW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uQXR0cmlidXRlLVRleHRhcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyB9XG5cbi5UaXRsZS1Ub29sdGlwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDAgNnB4O1xuICB6LWluZGV4OiAwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXAge1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuYmc6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcDpiZWZvcmUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fX30pOyB9XG5cbi5BdHRyaWJ1dGUtQnRuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzBweDsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XG4gIGJvcmRlcjogMDsgfVxuXG4uQ29sb3ItQnV0dG9uLVdyYXAge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Db2xvci1CdXR0b24ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b246aG92ZXIsXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b24uU2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0ID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0OmhvdmVyID4gaTo6YmVmb3JlLFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQuU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXI6aG92ZXIgPiBpOjpiZWZvcmUsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyLlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQ6aG92ZXIgPiBpOjpiZWZvcmUsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQuU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19ffSk7IH1cblxuLkZpZWxkLURlbGV0ZS1CdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjJweDtcbiAgdG9wOiAtMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHotaW5kZXg6IDk5OTk7IH1cblxuLk1FTU8tUHJvcGVydHktQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIycHg7XG4gIHRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgei1pbmRleDogOTk5OTsgfVxuXG4uTm8tRXZlbnQtTGF5ZXIgLkZpZWxkLURlbGV0ZS1CdXR0b24sXG4uTm8tRXZlbnQtTGF5ZXIgLk1FTU8tUHJvcGVydHktQnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5DYWxjQ29udGFpbmVyIHtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDMyMHB4OyB9XG5cbi5DYWxjQ29udGFpbmVyIC5GaWVsZC1EZWxldGUtQnV0dG9uIHtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7IH1cblxuLkNhbGNEaXNwbGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogNDBweCAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1OCwgMjE4LCAwLjIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDsgfVxuXG4uQ2FsY0J1dHRvbnMge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMCAyMHB4OyB9XG5cbi5DYWxjUm93IHtcbiAgd2lkdGg6IDI4MHB4O1xuICBmbG9hdDogbGVmdDsgfVxuXG4uQ2FsY0J1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZWNlZGVmO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM1RTU4NTg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uQ2FsY0Rpc3BsYXkgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCAyNXB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNSZWFkZXJWaWV3ZXJDb250YWluZXIge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCAtIDU1cHgpOyB9XG4gIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDEpLFxuICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCgyKSxcbiAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMyksXG4gIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDQpLFxuICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg3KSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuU2lnbi1MYXllcnBvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDExcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiBjYWxjKCgxMDAlIC0gNDExcHgpIC8gMik7XG4gICAgbWFyZ2luOiAwIDVweDsgfVxuICAuU2lnbi1MYXllcnBvcCAuUG9wdXAtSGVhZCB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuUG9wdXAtQm9keSB7XG4gICAgbWF4LWhlaWdodDogMzY4cHg7XG4gICAgaGVpZ2h0OiAzNjhweDsgfVxuICAuU2lnbi1UYWItQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuUG9wdXAtVGFiLU1haW4ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTsgfVxuICAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEuRHJhdy1BcmVhIHtcbiAgICBib3JkZXI6IG5vbmU7IH1cbiAgLlBvcHVwLUZvb3Qge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4OyB9XG4gIC5Qb3B1cC1Gb290IC5idG5fY29tbW9uIHtcbiAgICBtaW4td2lkdGg6IDk3cHggIWltcG9ydGFudDsgfVxuICAuUmVhZGVyLUJvdHRvbS1Db250YWluZXIge1xuICAgIGhlaWdodDogNTVweDsgfVxuICAuUmVhZGVyLUJvdHRvbS1Db250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICBwYWRkaW5nOiA1cHg7IH1cbiAgLlJlYWRlci1CdXR0b24ge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNXB4KSAvIDEpO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7IH1cbiAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3QgbGkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGkgLmNhbnZhc193cmFwIHtcbiAgICB3aWR0aDogMTAwJTsgfSB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Nhc3MvcmVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3Nhc3MvcGRmUmVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0ksNkJBQTZCO0VBQzdCLHFCQUFxQixFQUFBOztBQUl6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxnQkFBZ0IsRUFBQTs7QUFHbEI7OztFQUdFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNs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QjtJQUN4Qix1QkFBdUIsRUFBQTtFQS9qQy9CO0lBd2tDUSxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QixFQUFBO0VBOWpDakM7SUFra0NRLFlBQVksRUFBQTtFQXZzQ3BCO0lBMnNDUSxpQkFBaUIsRUFBQTtFQS9yQ3pCO0lBbXNDUSwwQkFBMEIsRUFBQTtFQTVjbEM7SUFnZFEsWUFBWSxFQUFBO0VBdmNwQjtJQTJjUSx3QkFBd0I7SUFDeEIsWUFBWSxFQUFBO0VBbGNwQjtJQTZjUSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFwYXBCO0lBd2FRLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksV0FBVyxFQUFBLEVBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwicGRmUmVhZGVyLnNjc3NcXFwiO1xcclxcblxcclxcblxcclxcbiNSZWFkZXJWaWV3ZXJDb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQ2cHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgaW5zZXQ6IDQ2cHggMCAwIDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCAtIDgxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uRW1wdHlGaWVsZCB7XFxyXFxuICAgIGJvcmRlcjogcmVkIGRhc2hlZCAycHggIWltcG9ydGFudDtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItUGFnZS1NZW1vLUxheWVyIHRleHRhcmVhIHtcXHJcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5Oby1FdmVudC1MYXllciB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5TaWduLVBvcHVwIHtcXHJcXG4gICAgei1pbmRleDogOTk5OTA7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5TaWduLVBvcHVwOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLUJnLVdyYXAge1xcclxcbiAgICB6LWluZGV4OiA5OTk5ODtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIHtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICB3aWR0aDogNTYycHg7XFxyXFxuICAgIGhlaWdodDogNTQzcHg7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5Qb3B1cC1IZWFkIHtcXHJcXG4gICAgcGFkZGluZzogMzJweCAwcHggMjBweDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtSGVhZCAuVGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICMxMTExMTE7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1Cb2R5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1NDNweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6ICMzMjMyMzI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHggLSA4NXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLUZvb3Qge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweCAwcHggMzFweCAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uUG9wdXAtRm9vdCAuYnRuX2NvbW1vbiB7IFxcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMzNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAgM3B4O1xcclxcbiAgICBwYWRkaW5nOiAwIDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAtby1ib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtRm9vdCAuYnRuX2NvbW1vbi5idG5fY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDc0NzsgICAgXFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1Gb290IC5idG5fY29tbW9uLmJ0bl9yZXNldCB7IFxcclxcbiAgICBjb2xvcjogIzAwYWFkYTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tVGFiLUNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogNTYycHg7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1UYWItTWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIDtcXHJcXG4gICAgcGFkZGluZzogMCAzMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtVGFiLU1haW4gbGkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEyNnB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1UYWItTWFpbiBsaSBhLCBcXHJcXG4uUG9wdXAtVGFiLU1haW4gbGkgc3BhbiB7XFxyXFxuICAgIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1UYWItTWFpbiBsaS5vbiB7XFxyXFxuICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmM1ZjtcXHJcXG4gICAgYm9yZGVyOiBub25lOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtVGFiLU1haW4gbGkub24gYSwgXFxyXFxuLlBvcHVwLVRhYi1NYWluIGxpLm9uIHNwYW4ge1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjsgXFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA1NjJweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMXB4IDAgMzFweDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEuRHJhdy1BcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICM2NjY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzICNyZWdpc3RlcmVkQXJlYS5TaWduLUFyZWEuRHJhdy1BcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEgLmlubmVyYm94IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IC0xcHggMCAwIC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEgLnNpZ25wYWQsIFxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEgLnNpZ25Nc2cge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI2NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUhlYWQge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tSGVhZCBzZWxlY3QsIFxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tSGVhZCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tSGVhZCBzZWxlY3Qge1xcclxcbiAgICB3aWR0aDogMTUzcHg7XFxyXFxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi9jc3MvaW1hZ2VzL2ljX3B1bGxkb3duLnBuZykgbm8tcmVwZWF0IGNhbGMoMTAwJSAtIDhweCkgNTAlICNmZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tSGVhZCAuYnRuX2NvbW1vbi5saW5lX2JsdWV7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1pbi13aWR0aDogMTMwcHg7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCAxNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1IZWFkIC5idG5fY29tbW9uLmxpbmVfYmx1ZSB7XFxyXFxuICAgIGNvbG9yOiAjMGU3M2MzICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZTczYzM7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLnNpZ25UeHRXcmFwIHtcXHJcXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMjRweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NHB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwsXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsIGxpLFxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDMzLjMzJTtcXHJcXG4gICAgLW1zLWZsZXgtYmFzaXM6IDMzLjMzJTtcXHJcXG4gICAgZmxleC1iYXNpczogMzMuMzMlO1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsIGxpIC5jYW52YXNfd3JhcCxcXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bCBsaSAuY2FudmFzX3dyYXAge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsIGxpIGNhbnZhcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIGxpIC5jYW52YXNfd3JhcCBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhID4gLmlubmVyYm94IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgIC5pbWdfdXBsb2FkX2FyZWEge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3gge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDJweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMnB4KTtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3ggLmJnX2FyZWEge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi9jc3MvaW1hZ2VzL2JnX3VwbG9hZC5wbmcpIHJlcGVhdCAwIDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCAuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uY29ybmVyX3BvaW50X2FyZWEgLmlubmVyYm94IC5pbWcgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NzhweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjI2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb3JuZXJfcG9pbnRfYXJlYSAudHh0X2d1aWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhOmhvdmVyIC50eHRfZ3VpZGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjgsMTI4LDEyOCwwLjgpO1xcclxcbn1cXHJcXG4uaW1nX3VwbG9hZF9hcmVhIC51cGxvYWRfbm90ZSB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMCAwO1xcclxcbiAgICBjb2xvcjogIzMyMzIzMjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG59XFxyXFxuLmltZ191cGxvYWRfYXJlYSAudXBsb2FkX25vdGUgcCB7XFxyXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtQm9keSAuc2lnbkxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDAgbm9uZTtcXHJcXG59XFxyXFxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX2l0ZW0ge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaWduTGlzdCAuc2lnbl9pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMzQxcHg7XFxyXFxuICAgIGhlaWdodDogMjU0cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwIDA7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udF9hcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX3RpdCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDRweDtcXHJcXG4gICAgY29sb3I6ICM2YTcyNzY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fdGl0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogIzMyMzIzMjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl9jb250IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZmYxO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5Qb3B1cC1Cb2R5IC5zaWduTGlzdCAuc2lnbl9jb250IHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5zaWduTGlzdCAuc2lnbl9pdGVtIC5zaWduX2NvbnQgY2FudmFzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udCAuaW1nX3N0YW1wIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAuQ2VudGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tT3V0LUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpcnN0LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmhvdmVyLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246aG92ZXIsXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpob3ZlcixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9maXJzdC1wYWdlLWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUZpcnN0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpcnN0LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vcHJldi1wYWdlLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vcHJldi1wYWdlLWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vcHJldi1wYWdlLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL25leHQtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL25leHQtcGFnZS1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL25leHQtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9sYXN0LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9sYXN0LXBhZ2UtaG92ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246ZGlzYWJsZWQgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9sYXN0LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmRpc2FibGVkLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246ZGlzYWJsZWQsXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpkaXNhYmxlZCxcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tSW4tQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tT3V0LUJ1dHRvbiA+IGksXFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24gPiBpLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbiA+IGksXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24gPiBpLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiA+IGkge1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGkge1xcclxcbiAgICBmbG9hdDogbGVmdDsgXFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoNiksXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMTApIHtcXHJcXG4gICAgd2lkdGg6IDYxcHg7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDgpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCAuVG9vbGJhci1GaWVsZC5QYWdlLU51bWJlciB7IFxcclxcbiAgICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgd2lkdGg6IDMzcHg7XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRmlyZWZveCAqL1xcclxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwIC5Ub29sYmFyLUxhYmVsIHsgXFxyXFxuICAgIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbi5Ub29sYmFyLUJ1dHRvbi1EaXZpZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcXHJcXG4gIG1pbi13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDZjOGY7XFxyXFxuICBtYXJnaW46IDAgMzBweCAwIDMwcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAvKuyalOyGjOydmCDrhpLsnbTsnZgg67CYKDUwJSkg66eM7YG8IOychOuhnCDsnbTrj5kqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpIC5Ub29sYmFyLUxhYmVsID4gYSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLXNlbGVjdC1kb3duLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1vdXQtYnRuMi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1vdXQtYnRuMi1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4yLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3pvb20taW4tYnRuMi1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWlucHV0LW1vZGUuc3ZnXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9maWVsZC1pbnB1dC1tb2RlLWhvdmVyLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9tZW1vLWlucHV0LW1vZGUuc3ZnXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbWVtby1JbnB1dC1tb2RlLWhvdmVyLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbWVtby1hZGQtbW9kZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL21lbW8tYWRkLW1vZGUtaG92ZXIuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5SZWFkZXItQm90dG9tLUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDsgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogI2NjYyAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItQm90dG9tLUNvbnRhaW5lciA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4vLyAgIHdpZHRoOiAzNzNweDtcXHJcXG4vLyAgIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24ge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDc0NztcXHJcXG4gIHdpZHRoOiAxODRweDtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uQ29uZmlybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAjc2lnblRleHRBcmVhLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25UZXh0SW5wdXQge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjhweCApO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbiNzaWduVGV4dENyZWF0ZSB7XFxyXFxuICAgIHdpZHRoOiA2OHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgLnNpZ25UeXBlTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0ICBsaSB7XFxyXFxuICAgIHdpZHRoOiAxNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsLnNpZ25UeXBlTGlzdCBsaS5vbiAuY2FudmFzX3dyYXAsXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwuc2lnblR5cGVMaXN0IGxpLm9uIC5jYW52YXNfd3JhcCB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgNHB4ICMwMGFhZGE7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uRWRpdG9yLUF0dHJpYnV0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkM2QzZDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuc2VsZWN0Mi1jb250YWluZXItLW9wZW4gLnNlbGVjdDItZHJvcGRvd24tLWJlbG93IHtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sb3ItcGlja2VyIHtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93Omxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzIC5EaXZpZGVyIHtcXHJcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUtV3JhcHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIFxcclxcbiAgICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzOyAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1XcmFwIC5zZWxlY3QyLWNvbnRhaW5lciAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyIHtcXHJcXG4gICAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIgPiBpbnB1dCB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtSW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1UZXh0YXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogMCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRpdGxlLVRvb2x0aXAge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCA2cHg7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXAge1xcclxcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1Db250ZW50cyAuYmc6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXA6YmVmb3JlIHtcXHJcXG4gICAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vY3NzL2ltYWdlcy9pYy10b29sdGlwLnN2Zyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQXR0cmlidXRlLUJ0biB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4uVGVtcGxhdGUtQnV0dG9uIHtcXHJcXG4gICAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XFxyXFxuICAgIHdpZHRoOiAxODRweDtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgfVxcclxcbiAgLkNvbG9yLUJ1dHRvbi1XcmFwIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5Db2xvci1CdXR0b24ge1xcclxcbiAgICB3aWR0aDogMjJweDtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uOmhvdmVyLFxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uLlNlbGVjdGVkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdCxcXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXIge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gIFxcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQgPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LnBuZ1xcXCIpO1xcclxcbiAgfVxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci5wbmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodCA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLXJpZ2h0LnBuZ1xcXCIpO1xcclxcbiAgfVxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2Iuc3ZnXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdDpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LlNlbGVjdGVkID4gaTo6YmVmb3JlICB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWxlZnQtaG92ZXIucG5nXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyOmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlci5TZWxlY3RlZCA+IGk6OmJlZm9yZSAge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1jZW50ZXItaG92ZXIucG5nXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQ6aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQuU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQtaG92ZXIucG5nXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ItaG92ZXIuc3ZnXFxcIik7XFxyXFxuICB9XFxyXFxuXFxyXFxuLkZpZWxkLURlbGV0ZS1CdXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMjJweDtcXHJcXG4gICAgdG9wOiAtMjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9maWVsZC1kZWxldGUucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uTUVNTy1Qcm9wZXJ0eS1CdXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMjJweDtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vcHJvcGVydGllcy5zdmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi5Oby1FdmVudC1MYXllciAuRmllbGQtRGVsZXRlLUJ1dHRvbixcXHJcXG4uTm8tRXZlbnQtTGF5ZXIgLk1FTU8tUHJvcGVydHktQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FsY0NvbnRhaW5lciB7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FsY0NvbnRhaW5lciAuRmllbGQtRGVsZXRlLUJ1dHRvbiB7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgfVxcclxcbiAgLkNhbGNEaXNwbGF5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogNDBweCAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1OCwgMjE4LCAwLjIpO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTRweDtcXHJcXG4gIH1cXHJcXG4gIC5DYWxjQnV0dG9ucyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XFxyXFxuICB9XFxyXFxuICAuQ2FsY1JvdyB7XFxyXFxuICAgIHdpZHRoOiAyODBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB9XFxyXFxuICAuQ2FsY0J1dHRvbnMgaW5wdXRbdHlwZT1idXR0b25dIHtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZGVmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICM1RTU4NTg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuQ2FsY0Rpc3BsYXkgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICAgIHdpZHRoOiAyNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogMCAyNXB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcXHJcXG5cXHJcXG4gICAgI1JlYWRlclZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2cHggLSA1NXB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCgxKSxcXHJcXG4gICAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMiksXFxyXFxuICAgIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDMpLFxcclxcbiAgICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg0KSxcXHJcXG4gICAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoNykge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTsgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5TaWduLUxheWVycG9wIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogNDExcHg7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoKDEwMCUgLSA0MTFweCkgLyAyKTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLlNpZ24tTGF5ZXJwb3AgLlBvcHVwLUhlYWQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUG9wdXAtQm9keSB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAzNjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzY4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLlNpZ24tVGFiLUNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUG9wdXAtVGFiLU1haW4ge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8v67CY7J2R7ZiV7J28IOuVjCDrp4jsp4Drp4kg7YOt7J2EIOyViOuztOydtOqyjCDtlbTrhpPslZjripTrjbAsIOygnOqxsC4gXFxyXFxuICAgIC5Qb3B1cC1UYWItTWFpbiBsaTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyB7IFxcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEuRHJhdy1BcmVhIHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUG9wdXAtRm9vdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUG9wdXAtRm9vdCAuYnRuX2NvbW1vbiB7IFxcclxcbiAgICAgICAgbWluLXdpZHRoOiA5N3B4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyAuUmVhZGVyLUJ1dHRvbiB7XFxyXFxuICAgIC8vICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDVweCkgLyAyKTtcXHJcXG4gICAgLy8gICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAvLyAgICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICAvLyB9XFxyXFxuXFxyXFxuICAgIC5SZWFkZXItQnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNXB4KSAvIDEpO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3QgbGkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGkgLmNhbnZhc193cmFwIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblwiLFwiXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICAgIGJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50OztcXHJcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uT3V0ZXItQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uTWFpbkNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtaW4td2lkdGg6IDMyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jVGVtcGxhdGVQREZWaWV3ZXIsIFxcclxcbiNSZWFkZXJQREZWaWV3ZXIsIFxcclxcbiNQcmV2aWV3UmVhZGVyUERGVmlld2VyIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXItQ29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGluc2V0OiAxMjhweCAzMDBweCAzMDBweDtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCAtIDMwMHB4KTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCAtIDY0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vL1xcclxcbi5WaWV3ZXItQ29udGFpbmVyLmZ1bGwge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gIGluc2V0OiB1bnNldCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vL1xcclxcbi5WaWV3ZXItQ29udGFpbmVyLmxlZnRmdWxsIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLy8gdG9wOiAwcHg7XFxyXFxuICAvLyBsZWZ0OiAwcHg7XFxyXFxuICBpbnNldDogMTI4cHggMHB4IDMwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8vXFxyXFxuLlZpZXdlci1Db250YWluZXIucmlnaHRmdWxsIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgLy8gdG9wOiAwcHg7XFxyXFxuICAvLyBsZWZ0OiAwcHg7XFxyXFxuICBpbnNldDogMTI4cHggMzAwcHggMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5UZW1wbGF0ZS1TaG93IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1IaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDM2cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwgaW5wdXQge2Rpc3BsYXk6bm9uZTt9XFxyXFxuXFxyXFxuLyogVGhlIHNsaWRlciAqL1xcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDJkMmQyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXI6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiAtMS42cHggMS4ycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNC41cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyLlJvdW5kOmJlZm9yZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiV0ZW1wbGF0ZS1mb250LWluZm8ge1xcclxcbiAgZm9udC1mYW1pbHk6IE1hbGd1bkdvdGhpYztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uTWFyZ2luLVJpZ2h0LTUge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlNjYWxlLVNlbGV0b3ItQ29udGFpbmVyIC5zZWxlY3QyLWNvbnRhaW5lci0tZGVmYXVsdCAuc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBpbXBvcnQgICAgICcuLy4uL2Nzcy92aWV3ZXIuY3NzJztcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInJlYWRlcm1vZFNhc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9