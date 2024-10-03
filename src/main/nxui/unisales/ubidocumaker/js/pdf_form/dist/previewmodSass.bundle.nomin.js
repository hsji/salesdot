(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("previewmodSass", [], factory);
	else if(typeof exports === 'object')
		exports["previewmodSass"] = factory();
	else
		root["previewmodSass"] = factory();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/preview.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/preview.scss ***!
  \********************************************************************************************************/
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
.Popup-Tab-Main li span, .Reader-Toolbar-Group .Toolbar-Field.Page-Number, .Reader-Toolbar-Group .Toolbar-Label, .Reader-Button, .Attribute-Contents-Row .Title, .Attribute-Contents-Row-CheckBox-Container, .Template-Button, .User-Component-List > li, .User-Component-List > li:nth-child(1) {
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
.Popup-Tab-Main li span, .Reader-Toolbar-Group .Toolbar-Field.Page-Number, .Reader-Toolbar-Group .Toolbar-Label, .Reader-Button, .Attribute-Contents-Row .Title, .Attribute-Contents-Row-CheckBox-Container, .Template-Button, .User-Component-List > li, .User-Component-List > li:nth-child(1) {
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

#PreviewReaderViewerContainer {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 46px;
  left: 300px;
  outline: none;
  inset: 46px 300px 0px;
  width: calc(100% - 300px);
  height: calc(100% - 46px - 81px); }

.Preview-Compoment.Editor-Component {
  padding: 30px 0;
  width: 300px;
  height: calc(100% - 46px - 80px - 60px);
  top: 46px;
  position: absolute;
  background-color: #ffffff;
  border-right: #ccc 1px solid;
  overflow: auto; }

.Editor-User-Component_Box {
  padding: 0 20px;
  margin-bottom: 20px; }

.User-Component-List-Conatiner {
  padding: 13px 20px 13px 20px;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #b6c2d0;
  background-color: #ffffff;
  margin-bottom: 10px; }

.User-Component-List-Conatiner.No-Child {
  padding: 10px 20px; }

.User-Component-List-Conatiner.Current {
  border-radius: 5px !important;
  border: solid 2px #ff0743 !important; }

.User-Component-List {
  list-style: none;
  touch-action: none; }

.User-Component-List > li {
  text-align: left;
  color: #666;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #b6c2d0;
  padding: 7px 0 7px 11px; }

.User-Component-List > li:nth-child(1) {
  text-align: left;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: none;
  border: none;
  padding: 0; }

.User-Component-List > li:last-child {
  margin-bottom: 0px; }
`, "",{"version":3,"sources":["webpack://./sass/preview.scss","webpack://./sass/pdfReader.scss","webpack://./sass/reader.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"pdfReader.scss\";\r\n@import \"reader.scss\";\r\n\r\n\r\n#PreviewReaderViewerContainer {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 46px;\r\n  left: 300px;\r\n  outline: none;\r\n  inset: 46px 300px 0px;\r\n  width: calc(100% - 300px);\r\n  height: calc(100% - 46px - 81px);\r\n}\r\n\r\n\r\n.Preview-Compoment.Editor-Component {\r\n  padding: 30px 0;\r\n  width: 300px;\r\n  height: calc(100% - 46px - 80px - 60px);\r\n  top: 46px;\r\n  position: absolute;\r\n  background-color: #ffffff;\r\n  \r\n  border-right: #ccc 1px solid;\r\n  overflow: auto;\r\n}\r\n\r\n.Editor-User-Component_Box {\r\n  padding: 0 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.User-Component-List-Conatiner {\r\n  padding: 13px 20px 13px 20px;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.User-Component-List-Conatiner.No-Child {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.User-Component-List-Conatiner.Current {\r\n  border-radius: 5px !important;\r\n  border: solid 2px #ff0743 !important;\r\n}\r\n\r\n.User-Component-List {\r\n  list-style: none;\r\n  touch-action: none;\r\n} \r\n\r\n.User-Component-List > li {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #666;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 3px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  padding: 7px 0 7px 11px;\r\n}\r\n\r\n.User-Component-List > li:nth-child(1) {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #333333;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n\r\n  margin-bottom: 10px;\r\n  box-shadow: none;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.User-Component-List > li:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n","\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pdfViewer .page {\r\n    border: 9px solid transparent;;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n.Outer-Container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.MainContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  min-width: 320px;\r\n}\r\n\r\n#TemplatePDFViewer, \r\n#ReaderPDFViewer, \r\n#PreviewReaderPDFViewer {\r\n  outline: none;\r\n}\r\n\r\n.Viewer-Container {\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  outline: none;\r\n  inset: 128px 300px 300px;\r\n  width: calc(100% - 300px - 300px);\r\n  height: calc(100% - 64px - 64px);\r\n}\r\n\r\n//\r\n.Viewer-Container.full {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  inset: unset !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.leftfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 0px 300px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.rightfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 300px 0px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n\r\n\r\n.Template-Show {\r\n  display: block !important;\r\n}\r\n.Template-Hide {\r\n  display: none !important;\r\n}\r\n\r\n.Attribute-Switch-Label {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.Attribute-Switch-Label input {display:none;}\r\n\r\n/* The slider */\r\n.Attribute-Switch-Slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #e5e5e5;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.Attribute-Switch-Slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  box-shadow: -1.6px 1.2px 5px 0 rgba(0, 0, 0, 0.15);\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #ffffff;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider {\r\n  background-color: #2196F3;\r\n  border: solid 1px #00aada;\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus + .Attribute-Switch-Slider {\r\n  box-shadow: 4px 4.5px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  border: solid 1px #00aada;\r\n}\r\n\r\n/* Rounded sliders */\r\n.Attribute-Switch-Slider.Round {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Attribute-Switch-Slider.Round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n%template-font-info {\r\n  font-family: MalgunGothic;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.Margin-Right-5 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Scale-Seletor-Container {\r\n    position: absolute;\r\n}\r\n\r\n.Scale-Seletor-Container .select2-container--default .select2-selection--single {\r\n    display: none;\r\n}\r\n\r\n\r\n@import     './../css/viewer.css';\r\n","@import \"pdfReader.scss\";\r\n\r\n\r\n#ReaderViewerContainer {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 46px;\r\n  left: 0px;\r\n  outline: none;\r\n  inset: 46px 0 0 0;\r\n  width: 100%;\r\n  height: calc(100% - 46px - 81px);\r\n}\r\n\r\n.EmptyField {\r\n    border: red dashed 2px !important;\r\n    \r\n    background-color: rgba(255, 0, 0, 0.2) !important;\r\n}\r\n\r\n.Reader-Page-Memo-Layer textarea {\r\n    text-wrap: nowrap;\r\n}\r\n\r\n.No-Event-Layer {\r\n    pointer-events: none !important;\r\n}\r\n\r\n.Sign-Popup {\r\n    z-index: 99990;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.Sign-Popup::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -2px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.Popup-Bg-Wrap {\r\n    z-index: 99998;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n}\r\n\r\n.Sign-Layerpop {\r\n    z-index: 99999;\r\n    position: relative;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    line-height: 1.5;\r\n    background: #fff;\r\n    vertical-align: middle;\r\n    -webkit-border-radius: 6px;\r\n    -moz-border-radius: 6px;\r\n    -ms-border-radius: 6px;\r\n    -o-border-radius: 6px;\r\n    border-radius: 6px;\r\n    width: 562px;\r\n    height: 543px;\r\n}\r\n\r\n.Sign-Layerpop .Popup-Head {\r\n    padding: 32px 0px 20px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Popup-Head .Title {\r\n    padding: 0px;\r\n    @extend %template-font-info;\r\n    line-height: 18px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #111111;\r\n}\r\n\r\n.Popup-Body {\r\n    position: relative;\r\n    max-height: 543px;\r\n    padding: 0;\r\n    color: #323232;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    height: calc(100% - 70px - 85px);\r\n}\r\n\r\n.Popup-Foot {\r\n    margin: 0 auto;\r\n    padding: 20px 0px 31px 0px;\r\n    text-align: center;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.Popup-Foot .btn_common { \r\n    width: auto;\r\n    min-width: auto !important;\r\n    height: 33px;\r\n    line-height: 33px;\r\n    margin: 0 0 0 3px;\r\n    padding: 0 14px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-transform: none;\r\n    background-color: #00aada;\r\n    -webkit-border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -ms-border-radius: 2px;\r\n    -o-border-radius: 2px;\r\n    border-radius: 2px;\r\n    border: none;\r\n}\r\n\r\n.Popup-Foot .btn_common.btn_cancel {\r\n    background-color: #474747;    \r\n}\r\n\r\n.Popup-Foot .btn_common.btn_reset { \r\n    color: #00aada;\r\n    background-color: #ffffff;\r\n    border: solid 1px #00aada;\r\n}\r\n\r\n.Sign-Tab-Container {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 562px;\r\n}\r\n\r\n.Popup-Tab-Main {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n    -webkit-justify-content: start;\r\n    -ms-flex-pack: start;\r\n    -ms-flex-align-self: start;\r\n    justify-content: start;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    width: 100%;\r\n    height: 32px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    \r\n    list-style: none;\r\n    text-align: center ;\r\n    padding: 0 31px;\r\n}\r\n\r\n.Popup-Tab-Main li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    \r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    width: 126px;\r\n    height: 30px;\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Popup-Tab-Main li a, \r\n.Popup-Tab-Main li span {\r\n    @extend %template-font-info;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    white-space: nowrap;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n.Popup-Tab-Main li.on {\r\n    width: 125px;\r\n    background-color: #002c5f;\r\n    border: none;   \r\n}\r\n\r\n.Popup-Tab-Main li.on a, \r\n.Popup-Tab-Main li.on span {\r\n    color: #ffffff; \r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents {\r\n    position: relative;\r\n    width: 562px;\r\n    height: 355px;\r\n    padding: 20px 31px 0 31px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    color: #666;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    border: solid 1px #d1d1d1;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents #registeredArea.Sign-Area.Draw-Area {\r\n    overflow: auto;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .innerbox {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: -1px 0 0 -1px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signpad, \r\n.Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area .signMsg {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    line-height: 265px;\r\n    background: #fff;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Head {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 20px 24px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Head select, \r\n.Sign-Layerpop .Tab-Contents .Sign-Head input[type=\"text\"] {\r\n    margin-right: 4px;\r\n}\r\n\r\n.Sign-Head select {\r\n    width: 153px;\r\n    height: 34px !important;\r\n    padding: 0 0 0 10px;\r\n    background: url(./../css/images/ic_pulldown.png) no-repeat calc(100% - 8px) 50% #fff;\r\n    font-family: inherit;\r\n    color: #000;\r\n    font-size: 14px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 0;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    outline: none;\r\n    white-space: nowrap;\r\n    word-break: break-all;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.Sign-Head .btn_common.line_blue{\r\n    display: inline-block;\r\n    width: auto;\r\n    min-width: 130px;\r\n    height: 34px;\r\n    line-height: 32px;\r\n    margin: 0;\r\n    padding: 0 14px;\r\n    background: #fff;\r\n    font-size: 13px !important;\r\n    font-weight: 500;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Head .btn_common.line_blue {\r\n    color: #0e73c3 !important;\r\n    border: 1px solid #0e73c3;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .signTxtWrap {\r\n    padding: 0 14px 0 24px;\r\n    height: calc(100% - 74px);\r\n    overflow: auto;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin: 0;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li {\r\n    cursor: pointer;\r\n    -webkit-flex-basis: 33.33%;\r\n    -ms-flex-basis: 33.33%;\r\n    flex-basis: 33.33%;\r\n    margin: 10px 0 0;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap {\r\n    display: block;\r\n    width: calc(100% - 10px);\r\n    height: 100%;\r\n    color: #000;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    border: 1px solid #d2d2d2;\r\n    background: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul li .canvas_wrap img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area > .innerbox {\r\n    height: 100%;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area  .img_upload_area {\r\n    z-index: 2;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.corner_point_area {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #666;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% + 2px);\r\n    margin: -1px;\r\n    padding: 0;\r\n    \r\n    -webkit-border-radius: 20px;\r\n    -moz-border-radius: 20px;\r\n    -ms-border-radius: 20px;\r\n    -o-border-radius: 20px;\r\n    border-radius: 20px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox .bg_area {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    background: url(./../css/images/bg_upload.png) repeat 0 0;\r\n    border: 1px solid #fff;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.corner_point_area .innerbox .img {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n.corner_point_area .innerbox .img img {\r\n    max-width: 478px;\r\n    max-height: 226px;\r\n}\r\n\r\n.corner_point_area .txt_guide {\r\n    display: none;\r\n}\r\n.corner_point_area:hover .txt_guide {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    background: rgba(128,128,128,0.8);\r\n}\r\n.img_upload_area .upload_note {\r\n    margin: 10px 0 0;\r\n    padding: 10px 0 0;\r\n    color: #323232;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    border-top: 1px solid #d2d2d2;\r\n}\r\n.img_upload_area .upload_note p {\r\n    margin: 0 !important;\r\n    line-height: 1.5;\r\n}\r\n\r\n.Popup-Body .signList {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: space-between;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: space-between;\r\n    -ms-flex-align-self: space-between;\r\n    justify-content: space-between;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: auto;\r\n    height: auto;\r\n    margin-top: 0;\r\n    padding: 0;\r\n    border: 0 none;\r\n}\r\n.Popup-Body .signList .sign_item {\r\n    width: 240px;\r\n    height: auto;\r\n    margin: 0 0 20px;\r\n    padding: 0;\r\n    border: 0 none;\r\n}\r\n\r\n.signList .sign_item {\r\n    position: relative;\r\n    width: 341px;\r\n    height: 254px;\r\n    margin: 20px 0 0;\r\n    padding: 15px;\r\n    background: #fff;\r\n    border: 1px solid #d2d2d2;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.signList .sign_item .sign_cont_area {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.Popup-Body .signList .sign_tit {\r\n    margin: 0 0 4px;\r\n    color: #6a7276;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n}\r\n.signList .sign_item .sign_tit {\r\n    position: relative;\r\n    margin: 0 0 20px;\r\n    padding: 0;\r\n    color: #323232;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n}\r\n.signList .sign_item .sign_cont {\r\n    cursor: pointer;\r\n    position: relative;\r\n    width: 100%;\r\n    height: calc(100% - 44px);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background: #eceff1;\r\n    border: 1px solid #d2d2d2;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.Popup-Body .signList .sign_cont {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n    -ms-flex-pack: center;\r\n    -ms-flex-align-self: center;\r\n    justify-content: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 130px;\r\n    border: 1px solid #d2d2d2;\r\n    background: none;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.signList .sign_item .sign_cont canvas {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.signList .sign_item .sign_cont .img_stamp {\r\n    width: auto;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n}\r\n\r\n\r\n.Reader-Toolbar {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    overflow: hidden;\r\n    height: 46px;\r\n    width: 100%;\r\n    background-color: #f8f8f8;\r\n    border-radius: 4px;\r\n    display: flex;\r\n}\r\n\r\n.Reader-Toolbar-Group {\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n.Reader-Toolbar-Group.Center {\r\n    margin: 0 auto;\r\n}\r\n\r\n.Reader-Button.Goto-First-Button,\r\n.Reader-Button.Goto-Prev-Button,\r\n.Reader-Button.Goto-Next-Button,\r\n.Reader-Button.Goto-Last-Button,\r\n.Reader-Button.Zoom-Out-Button,\r\n.Reader-Button.Zoom-In-Button,\r\n.Reader-Button.Reader-Field-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button {\r\n    width: 26px;\r\n    height: 26px;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n    margin-right: 30px;\r\n}\r\n.Reader-Button.Goto-First-Button > i::before {\r\n    content: url(\"./../css/icon/first-page.png\");\r\n}\r\n.Reader-Button.Goto-First-Button:hover,\r\n.Reader-Button.Goto-Prev-Button:hover,\r\n.Reader-Button.Goto-Next-Button:hover,\r\n.Reader-Button.Goto-Last-Button:hover {\r\n    background-color: #00aada;\r\n}\r\n.Reader-Button.Goto-First-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/first-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-First-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/first-page.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button > i::before {\r\n    content: url(\"./../css/icon/prev-page.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/prev-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Prev-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/prev-page.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button > i::before {\r\n    content: url(\"./../css/icon/next-page.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/next-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Next-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/next-page.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button > i::before {\r\n    content: url(\"./../css/icon/last-page.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/last-page-hover.png\");\r\n}\r\n.Reader-Button.Goto-Last-Button:disabled > i::before {  \r\n    content: url(\"./../css/icon/last-page.png\");\r\n}\r\n\r\n.Reader-Button.Goto-First-Button:disabled,\r\n.Reader-Button.Goto-Prev-Button:disabled,\r\n.Reader-Button.Goto-Next-Button:disabled,\r\n.Reader-Button.Goto-Last-Button:disabled {\r\n    background-color: #d1d1d1;\r\n}\r\n\r\n.Reader-Button.Zoom-Out-Button,\r\n.Reader-Button.Zoom-In-Button,\r\n.Reader-Button.Reader-Field-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button {\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: transparent;\r\n    margin-right: 17px;\r\n}\r\n\r\n\r\n.Reader-Button.Zoom-Out-Button > i,\r\n.Reader-Button.Zoom-In-Button > i,\r\n.Reader-Button.Reader-Field-Input-Mode-Button > i,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button > i,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button > i {\r\n    height: 18px;\r\n    width: 18px;\r\n    display: inline-block;\r\n    margin-top: 4px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul {\r\n    list-style: none;\r\n    height: 100%;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li {\r\n    float: left; \r\n    height: 26px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(6),\r\n.Reader-Toolbar-Group > ul > li:nth-child(10) {\r\n    width: 61px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(8) {\r\n    margin-left: 30px;\r\n}\r\n\r\n.Reader-Toolbar-Group .Toolbar-Field.Page-Number { \r\n    @extend %template-font-info;\r\n    font-size: 15px;\r\n    width: 33px;\r\n    height: 22px;\r\n    color: #333333;\r\n    text-align: center;    \r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n/* Firefox */\r\ninput[type=number] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.Reader-Toolbar-Group .Toolbar-Label { \r\n    @extend %template-font-info;\r\n    font-size: 15px;\r\n    color: #333333;\r\n    line-height: 26px;\r\n}\r\n\r\n.Toolbar-Button-Divider {\r\n  display: inline-block;\r\n  width: 1px !important;\r\n  min-width: 1px !important;\r\n  height: 18px !important;\r\n  background-color: #4d6c8f;\r\n  margin: 0 30px 0 30px;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li:nth-child(7) {\r\n    width: 60px;\r\n}\r\n\r\n.Reader-Toolbar-Group > ul > li .Toolbar-Label > a {\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    width: 100%;\r\n    display: block;\r\n    background-image: url(\"./../css/icon/zoom-select-down.png\");\r\n}\r\n\r\n.Reader-Button.Zoom-Out-Button > i::before {\r\n    content: url(\"./../css/icon/zoom-out-btn2.png\");\r\n}\r\n.Reader-Button.Zoom-Out-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/zoom-out-btn2-hover.png\");\r\n}\r\n.Reader-Button.Zoom-In-Button > i::before {\r\n    content: url(\"./../css/icon/zoom-in-btn2.png\");\r\n}\r\n.Reader-Button.Zoom-In-Button:hover > i::before {  \r\n    content: url(\"./../css/icon/zoom-in-btn2-hover.png\");\r\n}\r\n\r\n.Reader-Button.Reader-Field-Input-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/field-input-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Field-Input-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Field-Input-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/field-input-mode-hover.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Input-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/memo-input-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Input-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Memo-Input-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/memo-Input-mode-hover.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Add-Mode-Button > i::before {\r\n    content: url(\"./../css/icon/memo-add-mode.svg\");\r\n}\r\n.Reader-Button.Reader-Memo-Add-Mode-Button:hover > i::before,\r\n.Reader-Button.Reader-Memo-Add-Mode-Button.Selected > i::before {  \r\n    content: url(\"./../css/icon/memo-add-mode-hover.svg\");\r\n}\r\n\r\n\r\n.Reader-Bottom-Container {\r\n  width: 100%;\r\n  height: 80px; \r\n  background-color: #ffffff;\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: #ccc 1px solid;\r\n}\r\n\r\n.Reader-Bottom-Container > div {\r\n  margin: 0 auto;\r\n//   width: 373px;\r\n//   padding: 15px 0;\r\n  width: 185px;\r\n  padding: 15px 0px;\r\n\r\n  display: flex;\r\n}\r\n\r\n.Reader-Button {\r\n  @extend %template-font-info;\r\n  border-radius: 2px;\r\n  background-color: #474747;\r\n  width: 184px;\r\n  height: 48px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  letter-spacing: -0.75px;\r\n  border: 0;\r\n}\r\n\r\n.Reader-Button.Confirm {\r\n  background-color: #00aada;\r\n}\r\n\r\n.Sign-Layerpop #signTextArea.Tab-Contents .Sign-Head {\r\n    padding: 20px 20px 10px 20px;\r\n}\r\n\r\n#signTextInput {\r\n    width: calc(100% - 68px );\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n}\r\n\r\n#signTextCreate {\r\n    width: 68px;\r\n    height: 30px;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d2d2d2;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap .signTypeList {\r\n    display: flex;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList  li {\r\n    width: 145px;\r\n    height: 75px;\r\n}\r\n\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li.on .canvas_wrap,\r\n.Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul.signTypeList li.on .canvas_wrap {\r\n    border: solid 4px #00aada;    \r\n}\r\n\r\n\r\n.Editor-Attribute {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d3d3d3;\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n\r\n  }\r\n  .select2-container--open .select2-dropdown--below {\r\n    z-index: 99999;\r\n  }\r\n\r\n  .color-picker {\r\n    z-index: 99999;\r\n\r\n  }\r\n  \r\n.Attribute-Contents-Row {\r\n    position: relative;\r\n    margin-bottom: 16px;\r\n  }\r\n  .Attribute-Contents-Row:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .Attribute-Contents .Divider {\r\n      margin: 10px 0;\r\n      width: 100%;\r\n      height: 1px;\r\n      background-color: #e5e5e5;\r\n  }\r\n  \r\n  .Attribute-Contents-Row .Title-Wrap{\r\n    position: relative;\r\n    margin-bottom: 7px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    z-index: 10;\r\n  }\r\n  \r\n  .Attribute-Contents-Row .Title {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    \r\n    @extend %template-font-info;\r\n    text-align: left;\r\n    color: #333333;  \r\n    font-size: 13px;\r\n    line-height: 13px;\r\n    font-weight: bold;\r\n    \r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  \r\n.Attribute-Contents-Row-Wrap .select2-container {\r\n    border: solid 1px #d1d1d1;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-Wrap .select2-container .select2-selection--single {\r\n    border: none;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-CheckBox-Container {\r\n    @extend %template-font-info;\r\n    color: #333;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .Attribute-Contents-Row-CheckBox-Container > input {\r\n      margin-right: 6px;\r\n      height: 16px;\r\n      vertical-align: bottom;\r\n  }\r\n  \r\n  .Attribute-Input {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 34px;\r\n    line-height: 32px;\r\n    padding: 0 8px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .Attribute-Textarea {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 60px;\r\n    padding: 0 8px;\r\n    border: 1px solid #d2d2d2;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    text-overflow: ellipsis;\r\n    overflow: auto;\r\n    resize: none;\r\n    white-space: pre-wrap;\r\n  }\r\n  \r\n  .Title-Tooltip {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: -webkit-inline-flex;\r\n    display: inline-flex;\r\n    position: relative;\r\n    margin: 0 0 0 6px;\r\n    z-index: 0;\r\n  }\r\n  \r\n  .Attribute-Contents .ic-tooltip {\r\n      cursor: default;\r\n  }\r\n  \r\n  .Attribute-Contents .bg:before {\r\n    content: '';\r\n    display: inline-block;\r\n    background-repeat: no-repeat;\r\n    background-position: 0 0;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .Attribute-Contents .ic-tooltip:before {\r\n      width: 16px;\r\n      height: 16px;\r\n      background-image: url(./../css/images/ic-tooltip.svg);\r\n  }\r\n\r\n  .Attribute-Btn {\r\n    width: 80px;\r\n    height: 30px;\r\n  }\r\n\r\n  \r\n.Template-Button {\r\n    @extend %template-font-info;\r\n    border-radius: 2px;\r\n    background-color: #474747;\r\n    width: 184px;\r\n    height: 48px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    letter-spacing: -0.75px;\r\n    border: 0;\r\n  }\r\n  .Color-Button-Wrap {\r\n    width: 32px;\r\n    height: 32px;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n    border: solid 1px #d1d1d1;\r\n    background-color: #ffffff;\r\n  }\r\n\r\n  .Template-Button.Color-Button {\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 2px;\r\n    background-color: #000;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 5px;\r\n  }\r\n  \r\n  .Template-Button.Toggle-Button:hover,\r\n  .Template-Button.Toggle-Button.Selected {\r\n      background-color: #00aada;\r\n  }\r\n  \r\n  .Template-Button.Text-Align-Left,\r\n  .Template-Button.Text-Align-Center {\r\n    margin-right: 5px;\r\n  }\r\n  .Template-Button.Toggle-Button {\r\n    border-radius: 4px;\r\n    background-color: #e5e5e5;\r\n  \r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n  \r\n.Template-Button.Text-Align-Left > i::before {\r\n    content: url(\"./../css/icon/text-align-left.png\");\r\n  }\r\n  .Template-Button.Text-Align-Center > i::before {\r\n    content: url(\"./../css/icon/text-align-center.png\");\r\n  }\r\n  .Template-Button.Text-Align-Right > i::before {\r\n    content: url(\"./../css/icon/text-align-right.png\");\r\n  }\r\n  .Template-Button.Text-Bold-Button > i::before {\r\n    content: url(\"./../css/icon/b.svg\");\r\n  }\r\n  .Template-Button.Text-Align-Left:hover > i::before,\r\n  .Template-Button.Text-Align-Left.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-left-hover.png\");\r\n  }\r\n  .Template-Button.Text-Align-Center:hover > i::before,\r\n  .Template-Button.Text-Align-Center.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-center-hover.png\");\r\n  }\r\n  .Template-Button.Text-Align-Right:hover > i::before,\r\n  .Template-Button.Text-Align-Right.Selected > i::before  {\r\n    content: url(\"./../css/icon/text-align-right-hover.png\");\r\n  }\r\n  .Template-Button.Text-Bold-Button:hover > i::before,\r\n  .Template-Button.Text-Bold-Button.Selected > i::before  {\r\n    content: url(\"./../css/icon/b-hover.svg\");\r\n  }\r\n\r\n.Field-Delete-Button {\r\n    position: absolute;\r\n    right: -22px;\r\n    top: -20px;\r\n    \r\n    background-image: url(\"./../css/icon/field-delete.png\");\r\n    background-size: 20px 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n    z-index: 9999;\r\n}\r\n\r\n.MEMO-Property-Button {\r\n    position: absolute;\r\n    right: -22px;\r\n    top: 5px;\r\n    \r\n    background-image: url(\"./../css/icon/properties.svg\");\r\n    background-size: 20px 20px;\r\n    height: 20px;\r\n    width: 20px;\r\n    z-index: 9999;\r\n}\r\n\r\n.No-Event-Layer .Field-Delete-Button,\r\n.No-Event-Layer .MEMO-Property-Button {\r\n    display: none !important;\r\n}\r\n\r\n.CalcContainer {\r\n    z-index: 9999;\r\n    background: #fff;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);\r\n    border-radius: 14px;\r\n    padding-bottom: 20px;\r\n    width: 320px;\r\n    \r\n  }\r\n\r\n  .CalcContainer .Field-Delete-Button {\r\n    right: 5px;\r\n    top: 5px;\r\n  }\r\n  .CalcDisplay {\r\n    width: 100%;\r\n    height: 60px;\r\n    padding: 40px 0;\r\n    background: rgba(0, 158, 218, 0.2);\r\n    border-top-left-radius: 14px;\r\n    border-top-right-radius: 14px;\r\n  }\r\n  .CalcButtons {\r\n    padding: 20px 20px 0 20px;\r\n  }\r\n  .CalcRow {\r\n    width: 280px;\r\n    float: left;\r\n  }\r\n  .CalcButtons input[type=button] {\r\n    width: 60px;\r\n    height: 60px;\r\n    float: left;\r\n    padding: 0;\r\n    margin: 5px;\r\n    box-sizing: border-box;\r\n    background: #ecedef;\r\n    border: none;\r\n    font-size: 30px;\r\n    line-height: 30px;\r\n    border-radius: 50%;\r\n    font-weight: 700;\r\n    color: #5E5858;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  .CalcDisplay input[type=text] {\r\n    width: 270px;\r\n    height: 60px;\r\n    float: left;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    background: none;\r\n    color: #ffffff;\r\n    text-align: right;\r\n    font-weight: 700;\r\n    font-size: 60px;\r\n    line-height: 60px;\r\n    margin: 0 25px;\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 768px) { \r\n\r\n    #ReaderViewerContainer {\r\n        height: calc(100% - 46px - 55px);\r\n    }\r\n\r\n    .Reader-Toolbar-Group > ul > li:nth-child(1),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(2),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(3),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(4),\r\n    .Reader-Toolbar-Group > ul > li:nth-child(7) {\r\n        display: none;    \r\n    }\r\n    \r\n    .Sign-Layerpop {\r\n        position: absolute;\r\n        height: 411px;\r\n        width: calc(100% - 10px);\r\n        \r\n        left: 0;\r\n        top: calc((100% - 411px) / 2);\r\n        margin: 0 5px;\r\n    }\r\n\r\n    .Sign-Layerpop .Popup-Head {\r\n        display: none;\r\n    }\r\n\r\n    .Popup-Body {\r\n        max-height: 368px;\r\n        height: 368px;\r\n    }\r\n\r\n    .Sign-Tab-Container {\r\n        width: 100%;\r\n    }\r\n\r\n    .Popup-Tab-Main {\r\n        padding: 0;\r\n        -webkit-box-pack: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    //반응형일 때 마지막 탭을 안보이게 해놓았는데, 제거. \r\n    .Popup-Tab-Main li:last-child {\r\n        // display: none;\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents { \r\n        padding: 0;\r\n        width: 100%;\r\n        height: calc(100% - 32px);\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents .Sign-Area.Draw-Area {\r\n        border: none;\r\n    }\r\n\r\n    .Popup-Foot {\r\n        padding: 10px 5px;\r\n    }\r\n\r\n    .Popup-Foot .btn_common { \r\n        min-width: 97px !important;\r\n    }\r\n\r\n    .Reader-Bottom-Container {\r\n        height: 55px;\r\n    }\r\n    \r\n    .Reader-Bottom-Container > div {\r\n        width: calc(100% - 10px);\r\n        padding: 5px;\r\n    }\r\n\r\n    // .Reader-Button {\r\n    //     width: calc((100% - 5px) / 2);\r\n    //     margin-right: 5px;\r\n    //     border-radius: 5px;\r\n    //     height: 45px;\r\n    // }\r\n\r\n    .Reader-Button {\r\n        width: calc((100% - 5px) / 1);\r\n        margin-right: 5px;\r\n        border-radius: 5px;\r\n        height: 45px;\r\n    }\r\n\r\n    .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList li {\r\n        margin-right: 5px;\r\n    }\r\n    \r\n    .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul li .canvas_wrap {\r\n        width: 100%;\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
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
/******/ 			"previewmodSass": 0
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
/*!***************************!*\
  !*** ./sass/preview.scss ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./preview.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/preview.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preview_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVELHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0NBQW9DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2RkFBNkYsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxTQUFTLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLFNBQVMsWUFBWSxhQUFhLGFBQWEsT0FBTyxTQUFTLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFNBQVMsS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxrQkFBa0IsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLFNBQVMsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxPQUFPLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sUUFBUSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFFBQVEsVUFBVSxLQUFLLFFBQVEsVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFNBQVMsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsS0FBSyxPQUFPLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssd0JBQXdCLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSx1QkFBdUIsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssWUFBWSxNQUFNLEtBQUssT0FBTyxhQUFhLGFBQWEsY0FBYyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFL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QUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0EsaUJBQWlCLG1DQUFtQzs7QUFFcEQ7QUFDQSxpQkFBaUIsbUNBQW1DOztBQUVwRDtBQUNBLGlCQUFpQixtQ0FBbUM7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7O0FBRTlEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQzs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sNEpBQTRKLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixRQUFRLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLFlBQVksS0FBSyxpQkFBaUIsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGlCQUFpQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLG1CQUFtQixZQUFZLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixPQUFPLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixZQUFZLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsWUFBWSxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksaUJBQWlCLE9BQU8sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxrQkFBa0IsT0FBTyxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtCQUFrQixPQUFPLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGlCQUFpQixPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLGNBQWMsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLFNBQVMsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLFNBQVMsa0JBQWtCLFVBQVUsWUFBWSxXQUFXLFlBQVksbUJBQW1CLFVBQVUsVUFBVSxVQUFVLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxVQUFVLGdCQUFnQixPQUFPLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLE9BQU8sWUFBWSxpQkFBaUIsVUFBVSxLQUFLLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixNQUFNLGtCQUFrQixPQUFPLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFV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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQThJO0FBQzlJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJd0Y7QUFDaEgsT0FBTyxpRUFBZSw4SEFBTyxJQUFJLDhIQUFPLFVBQVUsOEhBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9jc3Mvdmlld2VyLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL3Nhc3MvcHJldmlldy5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9zYXNzL3ByZXZpZXcuc2Nzcz85NDczIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicHJldmlld21vZFNhc3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJldmlld21vZFNhc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicHJldmlld21vZFNhc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9zaGFkb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2xvYWRpbmctaWNvbi5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvbG9hZGluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdHJlZWl0ZW0tZXhwYW5kZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3RyZWVpdGVtLWNvbGxhcHNlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1tZW51QXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VVcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1wYWdlRG93bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbU91dC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbUluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1wcmludC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tb3BlbkZpbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLWRvd25sb2FkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1ib29rbWFyay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld091dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld0xheWVycy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcImltYWdlcy9maW5kYmFyQnV0dG9uLXByZXZpb3VzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZmluZGJhckJ1dHRvbi1uZXh0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvbG9hZGluZy1kYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZ3JhYi5jdXJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2dyYWJiaW5nLmN1clwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ29weXJpZ2h0IDIwMTQgTW96aWxsYSBGb3VuZGF0aW9uXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi50ZXh0TGF5ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQge1xyXG4gIG1hcmdpbjogLTFweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDAsIDE3MCwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQuYmVnaW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQuZW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcclxufVxyXG5cclxuLnRleHRMYXllciAuaGlnaGxpZ2h0Lm1pZGRsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnRleHRMYXllciAuaGlnaGxpZ2h0LnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMSk7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xyXG59XHJcblxyXG4udGV4dExheWVyIDo6c2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmVuZE9mQ29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmVuZE9mQ29udGVudC5hY3RpdmUge1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmtBbm5vdGF0aW9uID4gYSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhOmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMCwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dEFubm90YXRpb24gaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dCxcclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDU0LCAyNTUsIDAuMTMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDNweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCBvcHRpb24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEge1xyXG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXRbZGlzYWJsZWRdLFxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYVtkaXNhYmxlZF0sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0W2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dFtkaXNhYmxlZF0sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXRbZGlzYWJsZWRdIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMSk7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmZvY3VzLFxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpmb2N1cyxcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBsZWZ0OiA0NSU7XHJcbiAgd2lkdGg6IDFweDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBsZWZ0OiAzMCU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYiB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iOmZvY3VzIHtcclxuICAvKlxyXG4gICAqIExldHRlciBzcGFjaW5nIGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiBlYWNoIGNoYXJhY3Rlci4gSGVuY2UsIHRoZVxyXG4gICAqIGxldHRlciBzcGFjaW5nIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBtYXkgYmUgcGxhY2VkIG91dHNpZGUgdGhlIHZpc2libGVcclxuICAgKiBhcmVhLCBjYXVzaW5nIGhvcml6b250YWwgc2Nyb2xsaW5nLiBXZSBhdm9pZCB0aGlzIGJ5IGV4dGVuZGluZyB0aGUgd2lkdGhcclxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGhhcyBmb2N1cyBhbmQgcmV2ZXJ0IHRoaXMgd2hlbiBpdCBsb3NlcyBmb2N1cy5cclxuICAgKi9cclxuICB3aWR0aDogMTE1JTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dCxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXBXcmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwZW07XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIG1heC13aWR0aDogMjBlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAxNTMsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEzNiwgMTM2LCAxMzYsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udDogbWVzc2FnZS1ib3g7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwID4gKiB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIGgxIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBwIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAxKTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuaGlnaGxpZ2h0QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAudW5kZXJsaW5lQW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAuc3F1aWdnbHlBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zdHJpa2VvdXRBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5mcmVlVGV4dEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmVBbm5vdGF0aW9uIHN2ZyBsaW5lLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVhcmVBbm5vdGF0aW9uIHN2ZyByZWN0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaXJjbGVBbm5vdGF0aW9uIHN2ZyBlbGxpcHNlLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb2x5bGluZUFubm90YXRpb24gc3ZnIHBvbHlsaW5lLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb2x5Z29uQW5ub3RhdGlvbiBzdmcgcG9seWdvbixcclxuLmFubm90YXRpb25MYXllciAuY2FyZXRBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5pbmtBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcclxuLmFubm90YXRpb25MYXllciAuc3RhbXBBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5maWxlQXR0YWNobWVudEFubm90YXRpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBkZlZpZXdlciAuY2FudmFzV3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgd2lkdGg6IDgxNnB4O1xyXG4gIGhlaWdodDogMTA1NnB4O1xyXG4gIG1hcmdpbjogMXB4IGF1dG8gLThweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAtby1ib3JkZXItaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSA5IDkgcmVwZWF0O1xyXG4gICAgIGJvcmRlci1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIDkgOSByZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAucGFnZSB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyAucGFnZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQsXHJcbi5zcHJlYWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzLjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMuNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsLFxyXG4uc3ByZWFkIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLFxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnNwcmVhZCxcclxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnNwcmVhZCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zcHJlYWQgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcclxuICBtYXJnaW4tbGVmdDogLTMuNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTMuNXB4O1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5zcHJlYWQgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycy5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhc1toaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5wYWdlIC5sb2FkaW5nSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgY2VudGVyIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5wYWdlLFxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5zcHJlYWQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5wYWdlLFxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLXNpZGViYXItd2lkdGg6IDIwMHB4O1xyXG4gIC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQ6IDA7XHJcblxyXG4gIC0tdG9vbGJhci1pY29uLW9wYWNpdHk6IDAuNztcclxuICAtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5OiAwLjk7XHJcblxyXG4gIC0tbWFpbi1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAxKTtcclxuICAtLWJvZHktYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMSk7XHJcbiAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMjU1LCA3NCwgNzQsIDEpO1xyXG4gIC0tcHJvZ3Jlc3NCYXItY29sb3I6IHJnYmEoMTAsIDEzMiwgMjU1LCAxKTtcclxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMiwgMSk7XHJcbiAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yOiByZ2JhKDExNiwgMTc3LCAyMzksIDEpO1xyXG4gIC0tc2Nyb2xsYmFyLWNvbG9yOiBhdXRvO1xyXG4gIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiBhdXRvO1xyXG4gIC0tdG9vbGJhci1pY29uLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG5cclxuICAtLXNpZGViYXItbmFycm93LWJnLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyNDAsIDAuOSk7XHJcbiAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoMjQ1LCAyNDYsIDI0NywgMSk7XHJcbiAgLS10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNTAsIDEpO1xyXG4gIC0tdG9vbGJhci1ib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XHJcbiAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMjIxLCAyMjIsIDIyMywgMSk7XHJcbiAgLS10b2dnbGVkLWJ0bi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxOSwgMSk7XHJcbiAgLS1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtLWZpZWxkLWNvbG9yOiByZ2JhKDYsIDYsIDYsIDEpO1xyXG4gIC0tZmllbGQtYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgLS1maWVsZC1ib3JkZXItY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4OCwgMSk7XHJcbiAgLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3I6IHJnYmEoMjI3LCAyMjgsIDIzMCwgMSk7XHJcbiAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIC0tdHJlZWl0ZW0taG92ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAtLXNpZGViYXJpdGVtLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIC0tZG9vcmhhbmdlci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMik7XHJcbiAgLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyMzcsIDEpO1xyXG4gIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMSk7XHJcbiAgLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjEpO1xyXG4gIC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4zKTtcclxuXHJcbiAgLS1sb2FkaW5nLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICAtLXRyZWVpdGVtLWV4cGFuZGVkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxuICAtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXByaW50LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fX30pO1xyXG4gIC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fX30pO1xyXG4gIC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNl9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX199KTtcclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIDpyb290IHtcclxuICAgIC0tbWFpbi1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjUwLCAxKTtcclxuICAgIC0tYm9keS1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAxKTtcclxuICAgIC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yOiByZ2JhKDE5OSwgMTcsIDE3LCAxKTtcclxuICAgIC0tcHJvZ3Jlc3NCYXItY29sb3I6IHJnYmEoMCwgOTYsIDIyMywgMSk7XHJcbiAgICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoNDAsIDQwLCA0MywgMSk7XHJcbiAgICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMjAsIDY4LCAxMzMsIDEpO1xyXG4gICAgLS1zY3JvbGxiYXItY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMywgMSk7XHJcbiAgICAtLXNjcm9sbGJhci1iZy1jb2xvcjogcmdiYSgzNSwgMzUsIDM5LCAxKTtcclxuICAgIC0tdG9vbGJhci1pY29uLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cclxuICAgIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoNDIsIDQyLCA0NiwgMC45KTtcclxuICAgIC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTIsIDEpO1xyXG4gICAgLS10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDU2LCA1NiwgNjEsIDEpO1xyXG4gICAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAxKTtcclxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDMsIDEpO1xyXG4gICAgLS10b2dnbGVkLWJ0bi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzksIDEpO1xyXG4gICAgLS1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC0tZmllbGQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XHJcbiAgICAtLWZpZWxkLWJnLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjgsIDEpO1xyXG4gICAgLS1maWVsZC1ib3JkZXItY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMSk7XHJcbiAgICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSg4OSwgODksIDg5LCAxKTtcclxuICAgIC0tdHJlZWl0ZW0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIC0tdHJlZWl0ZW0taG92ZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAtLXNpZGViYXJpdGVtLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzksIDEpO1xyXG4gICAgLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQzLCAxKTtcclxuICAgIC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcjogcmdiYSg5MywgOTQsIDk4LCAxKTtcclxuICAgIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XHJcbiAgICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDkyLCA5MiwgOTcsIDEpO1xyXG4gICAgLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMTUsIDExNSwgMTE1LCAxKTtcclxuXHJcbiAgICAvKiBUaGlzIGltYWdlIGlzIHVzZWQgaW4gPGlucHV0PiBlbGVtZW50cywgd2hpY2ggdW5mb3J0dW5hdGVseSBtZWFucyB0aGF0XHJcbiAgICAgKiB0aGUgXFxgbWFzay1pbWFnZVxcYCBhcHByb2FjaCB1c2VkIHdpdGggYWxsIG9mIHRoZSBvdGhlciBpbWFnZXMgZG9lc24ndCB3b3JrXHJcbiAgICAgKiBoZXJlOyBoZW5jZSB3aHkgd2Ugc3RpbGwgaGF2ZSB0d28gdmVyc2lvbnMgb2YgdGhpcyBwYXJ0aWN1bGFyIGltYWdlLiAqL1xyXG4gICAgLS1sb2FkaW5nLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19ffSk7XHJcbiAgfVxyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIEZvbnQgc2l6ZSBpcyBuZWVkZWQgdG8gbWFrZSB0aGUgYWN0aXZpdHkgYmFyIHRoZSBjb3JyZWN0IHNpemUuICovXHJcbiAgLyogZm9udC1zaXplOiAxMHB4OyAqL1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbn1cclxuXHJcbmJvZHksXHJcbmlucHV0LFxyXG5idXR0b24sXHJcbnNlbGVjdCB7XHJcbiAgLyogZm9udDogbWVzc2FnZS1ib3g7ICovXHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbGJhci1jb2xvcikgdmFyKC0tc2Nyb2xsYmFyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbltoaWRkZW5dIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuZW5hYmxlUGVybWlzc2lvbnMgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4ge1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjdXJzb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGUucGRmUHJlc2VudGF0aW9uTW9kZUNvbnRyb2xzID4gKixcclxuLnBkZlByZXNlbnRhdGlvbk1vZGUucGRmUHJlc2VudGF0aW9uTW9kZUNvbnRyb2xzIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3NpZGViYXJDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xyXG4gIGxlZnQ6IGNhbGMoMHB4IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcclxuICByaWdodDogY2FsYygwcHggLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI3NpZGViYXJDb250YWluZXIge1xyXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbiAgLyogUHJldmVudCBlLmcuIHRoZSB0aHVtYm5haWxzIGJlaW5nIHNlbGVjdGVkIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJNb3ZpbmcgI3NpZGViYXJDb250YWluZXIsXHJcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuI21haW5Db250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuI3NpZGViYXJDb250ZW50IHtcclxuICB0b3A6IDMycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNzaWRlYmFyQ29udGVudCB7XHJcbiAgbGVmdDogMDtcclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNzaWRlYmFyQ29udGVudCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4jdmlld2VyQ29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzJweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl1cclxuICAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW5cclxuICAjdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XHJcbiAgbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl1cclxuICAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW5cclxuICAjdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xyXG4gIHJpZ2h0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5cclxuLk1haW4tQ29udGFpbmVyIC50b29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuI3Rvb2xiYXJDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdG9vbGJhclNpZGViYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxyXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyIC50b29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IC50b29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IC50b29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzaWRlYmFyUmVzaXplciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDZweDtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgY3Vyc29yOiBldy1yZXNpemU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3NpZGViYXJSZXNpemVyIHtcclxuICByaWdodDogLTZweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjc2lkZWJhclJlc2l6ZXIge1xyXG4gIGxlZnQ6IC02cHg7XHJcbn1cclxuXHJcbiN0b29sYmFyQ29udGFpbmVyLFxyXG4uZmluZGJhcixcclxuLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbiN0b29sYmFyVmlld2VyIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbiNsb2FkaW5nQmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRvb2xiYXItYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2xvYWRpbmdCYXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjbG9hZGluZ0JhciB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XHJcbiAgbGVmdDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcclxuICBsZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI2xvYWRpbmdCYXIge1xyXG4gIHJpZ2h0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjbG9hZGluZ0JhciB7XHJcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxufVxyXG5cclxuI2xvYWRpbmdCYXIgLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzSW5kZXRlcm1pbmF0ZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogLTE0MnB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByb2dyZXNzSW5kZXRlcm1pbmF0ZSB7XHJcbiAgMCUge1xyXG4gICAgbGVmdDogLTE0MnB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3MuaW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2xvYWRpbmdCYXIgLnByb2dyZXNzLmluZGV0ZXJtaW5hdGUgLmdsaW1tZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE1MHB4KTtcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTM1ZGVnLFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcikgMCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpIDVweCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpIDQ1cHgsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcikgNTVweCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA5NXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcikgMTAwcHhcclxuICApO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzc0luZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzc0luZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZmluZGJhcixcclxuLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIHRvcDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICBwYWRkaW5nOiAwIDRweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uZmluZGJhciB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcclxufVxyXG4uZmluZGJhciA+IGRpdiB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uZmluZGJhci53cmFwQ29udGFpbmVycyA+IGRpdiNmaW5kYmFyTWVzc2FnZUNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5maW5kYmFyIHtcclxuICBsZWZ0OiA2NHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5maW5kYmFyIHtcclxuICByaWdodDogNjRweDtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICB0b3A6IDVweDtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XHJcbiAgd2lkdGg6IDI5cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5maW5kYmFyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5kYmFyIGxhYmVsIHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmZpbmRiYXIgbGFiZWw6aG92ZXIsXHJcbi5maW5kYmFyIGlucHV0OmZvY3VzICsgbGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICNmaW5kSW5wdXQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNmaW5kSW5wdXQge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmZpbmRiYXIgLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC50b29sYmFyTGFiZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jZmluZElucHV0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuI2ZpbmRJbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMSk7XHJcbn1cclxuI2ZpbmRJbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbiNmaW5kSW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cInBlbmRpbmdcIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCU7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cInBlbmRpbmdcIl0ge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcclxufVxyXG4jZmluZElucHV0W2RhdGEtc3RhdHVzPVwibm90Rm91bmRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMDIsIDEwMiwgMSk7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyIHtcclxuICBwYWRkaW5nOiA2cHggMCAxMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAzMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgcmlnaHQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgbGVmdDogNHB4O1xyXG59XHJcblxyXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAyMjBweDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG59XHJcblxyXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TY3JvbGxNb2RlQnV0dG9ucyA+IC5zY3JvbGxNb2RlQnV0dG9ucyxcclxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIuaGlkZGVuU3ByZWFkTW9kZUJ1dHRvbnMgPiAuc3ByZWFkTW9kZUJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRvb3JIYW5nZXIsXHJcbi5kb29ySGFuZ2VyUmlnaHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA1cHggdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpLFxyXG4gICAgMCAwIDAgMXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKTtcclxufVxyXG4uZG9vckhhbmdlcjphZnRlcixcclxuLmRvb3JIYW5nZXI6YmVmb3JlLFxyXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyLFxyXG4uZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5kb29ySGFuZ2VyOmFmdGVyLFxyXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICBib3JkZXItd2lkdGg6IDhweDtcclxufVxyXG4uZG9vckhhbmdlcjphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XHJcbn1cclxuLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XHJcbn1cclxuLmRvb3JIYW5nZXI6YmVmb3JlLFxyXG4uZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci13aWR0aDogOXB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuZG9vckhhbmdlcjphZnRlcixcclxuaHRtbFtkaXI9XCJydGxcIl0gLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRvb3JIYW5nZXI6YmVmb3JlLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XHJcbiAgbGVmdDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTlweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLmRvb3JIYW5nZXI6YWZ0ZXIsXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLThweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLmRvb3JIYW5nZXI6YmVmb3JlLFxyXG5odG1sW2Rpcj1cImx0clwiXSAuZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOXB4O1xyXG59XHJcblxyXG4jZmluZFJlc3VsdHNDb3VudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcclxuICBjb2xvcjogcmdiYSg4MiwgODIsIDgyLCAxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM3B4IDRweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuI2ZpbmRNc2cge1xyXG4gIGNvbG9yOiByZ2JhKDI1MSwgMCwgMCwgMSk7XHJcbn1cclxuI2ZpbmRNc2c6ZW1wdHkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJMZWZ0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0LFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJSaWdodCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIgKiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIgKiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAycHggMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbixcclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIGJvcmRlcjogMCBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcbi5vdmVybGF5QnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5vdmVybGF5QnV0dG9uOmhvdmVyLFxyXG4ub3ZlcmxheUJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b25bZGlzYWJsZWRdLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXHJcbi5vdmVybGF5QnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmhvdmVyLFxyXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zm9jdXMsXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi50b29sYmFyQnV0dG9uLnRleHRCdXR0b246aG92ZXIsXHJcbi50b29sYmFyQnV0dG9uLnRleHRCdXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbiAgei1pbmRleDogMTk5O1xyXG59XHJcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCxcclxuaHRtbFtkaXI9XCJydGxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCxcclxuaHRtbFtkaXI9XCJydGxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxuICB6LWluZGV4OiA5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0cHggMDtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTNweCAwO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLFxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbixcclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICBtYXJnaW46IDJweCAxcHg7XHJcbiAgcGFkZGluZzogMnB4IDZweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcbi50b29sYmFyQnV0dG9uOmhvdmVyLFxyXG4udG9vbGJhckJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpob3ZlcixcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItaG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi50b2dnbGVkLFxyXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWJ0bi1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlLFxyXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcik7XHJcbn1cclxuXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24ge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcclxuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xyXG4gIHJpZ2h0OiA3cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDdweDtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XHJcbiAgd2lkdGg6IDE2MnB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxcHggMCAycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3QgPiBvcHRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xyXG59XHJcblxyXG4jY3VzdG9tU2NhbGVPcHRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNwYWdlV2lkdGhPcHRpb24ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQ7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICB3aWR0aDogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUsXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyLFxyXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIC8qIEFsbCBtYXRjaGluZyBpbWFnZXMgaGF2ZSBhIHNpemUgb2YgMTZ4MTZcclxuICAgKiBBbGwgcmVsZXZhbnQgY29udGFpbmVycyBoYXZlIGEgc2l6ZSBvZiAyOHgyOCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1iZy1jb2xvcik7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xyXG4gIG1hc2stc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IHZhcigtLXRvb2xiYXItaWNvbi1vcGFjaXR5KTtcclxuICB0b3A6IDZweDtcclxuICBsZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IHZhcigtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5KTtcclxuICB0b3A6IDVweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICBsZWZ0OiAxMnB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbiNzaWRlYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudG9vbGJhckJ1dHRvbiNzaWRlYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLmZpbmRQcmV2aW91czo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uZmluZE5leHQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wYWdlVXA6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ucGFnZURvd246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnpvb21PdXQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi56b29tSW46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ucHJlc2VudGF0aW9uTW9kZTo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ucHJpbnQ6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucHJpbnQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByaW50LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLm9wZW5GaWxlOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLm9wZW5GaWxlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5kb3dubG9hZDo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5kb3dubG9hZDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uYm9va21hcmsge1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYm9va21hcmtbaHJlZj1cIiNcIl0ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uYm9va21hcms6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uYm9va21hcms6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbik7XHJcbn1cclxuXHJcbiN2aWV3VGh1bWJuYWlsLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xyXG59XHJcblxyXG4jdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbiN2aWV3QXR0YWNobWVudHMudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb24pO1xyXG59XHJcblxyXG4jdmlld0xheWVycy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uKTtcclxufVxyXG5cclxuI2N1cnJlbnRPdXRsaW5lSXRlbS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2N1cnJlbnRPdXRsaW5lSXRlbS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuI3ZpZXdGaW5kLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdG9wOiAxcHg7XHJcbiAgLyogQ3JlYXRlIGEgZmlsbGVkIGNpcmNsZSwgd2l0aCBhIGRpYW1ldGVyIG9mIDkgcGl4ZWxzLCB1c2luZyBvbmx5IENTUzogKi9cclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAyMTksIDg1LCAxKTtcclxuICBoZWlnaHQ6IDlweDtcclxuICB3aWR0aDogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XHJcbiAgbGVmdDogMTdweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAxcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMzZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24gPiBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24gPiBzcGFuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZmlyc3RQYWdlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmxhc3RQYWdlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDY3c6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucm90YXRlQ3c6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNlbGVjdFRvb2w6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5oYW5kVG9vbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsVmVydGljYWw6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbEhvcml6b250YWw6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxXcmFwcGVkOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkTm9uZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZE9kZDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWRFdmVuOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZG9jdW1lbnRQcm9wZXJ0aWVzOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbik7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDExcHggMDtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA2cHggMCA1cHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yKTtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZCB7XHJcbiAgcGFkZGluZzogNHB4IDdweDtcclxuICBtYXJnaW46IDNweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1maWVsZC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC50b29sYmFyRmllbGRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBtYXJnaW46IDEwcHggMCAzcHggN3B4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudG9vbGJhckZpZWxkW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgbWFyZ2luOiAxMHB4IDdweCAzcHggMDtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogaGlkZXMgdGhlIHNwaW5uZXIgaW4gbW96ICovXHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIudmlzaWJsZVBhZ2VJc0xvYWRpbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzcHg7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQucGFnZU51bWJlcjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwYTg0ZmY7XHJcbn1cclxuXHJcbi50b29sYmFyTGFiZWwge1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI251bVBhZ2VzLnRvb2xiYXJMYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI251bVBhZ2VzLnRvb2xiYXJMYWJlbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweCAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuI3RodW1ibmFpbFZpZXcgPiBhOmFjdGl2ZSxcclxuI3RodW1ibmFpbFZpZXcgPiBhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRodW1ibmFpbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRodW1ibmFpbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyA+IGE6bGFzdC1vZi10eXBlID4gLnRodW1ibmFpbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWw6bm90KFtkYXRhLWxvYWRlZF0pIHtcclxuICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWw6bm90KFtkYXRhLWxvYWRlZF0pIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxMzIsIDEzMiwgMTMyLCAxKTtcclxuICBtYXJnaW46IC0xcHggOXB4IDRweDtcclxufVxyXG5cclxuLnRodW1ibmFpbEltYWdlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbn1cclxuXHJcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2UsXHJcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5hOmZvY3VzID4gLnRodW1ibmFpbCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nLFxyXG4udGh1bWJuYWlsOmhvdmVyID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbn1cclxuXHJcbi50aHVtYm5haWwuc2VsZWN0ZWQgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuI291dGxpbmVWaWV3LFxyXG4jYXR0YWNobWVudHNWaWV3LFxyXG4jbGF5ZXJzVmlldyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogNHB4IDRweCAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVXaXRoRGVlcE5lc3RpbmcgPiAudHJlZUl0ZW0sXHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlSXRlbSA+IC50cmVlSXRlbXMge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZVdpdGhEZWVwTmVzdGluZyA+IC50cmVlSXRlbSxcclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtID4gLnRyZWVJdGVtcyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udHJlZUl0ZW0gPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogOTUlO1xyXG4gIC8qIFN1YnRyYWN0IHRoZSByaWdodCBwYWRkaW5nIChsZWZ0LCBpbiBSVEwgbW9kZSkgb2YgdGhlIGNvbnRhaW5lcjogKi9cclxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtID4gYSB7XHJcbiAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW0gPiBhIHtcclxuICBwYWRkaW5nOiAycHggNHB4IDVweCAwO1xyXG59XHJcblxyXG4jbGF5ZXJzVmlldyAudHJlZUl0ZW0gPiBhID4gKiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNsYXllcnNWaWV3IC50cmVlSXRlbSA+IGEgPiBsYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2xheWVyc1ZpZXcgLnRyZWVzSXRlbSA+IGEgPiBsYWJlbCB7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4udHJlZUl0ZW1Ub2dnbGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWV4cGFuZGVkLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWV4cGFuZGVkLWljb24pO1xyXG59XHJcbi50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbjo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW4gfiAudHJlZUl0ZW1zIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlSXRlbVRvZ2dsZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbVRvZ2dsZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIHJpZ2h0OiA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcclxuICBsZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi50cmVlSXRlbS5zZWxlY3RlZCA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3IpO1xyXG59XHJcblxyXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyLFxyXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyICsgYSxcclxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciB+IC50cmVlSXRlbXMsXHJcbi50cmVlSXRlbSA+IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4vKiBUT0RPOiBmaWxlIEZGIGJ1ZyB0byBzdXBwb3J0IDo6LW1vei1zZWxlY3Rpb246d2luZG93LWluYWN0aXZlXHJcbiAgIHNvIHdlIGNhbiBvdmVycmlkZSB0aGUgb3BhcXVlIGdyZXkgYmFja2dyb3VuZCB3aGVuIHRoZSB3aW5kb3cgaXMgaW5hY3RpdmU7XHJcbiAgIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MDYyMDkgKi9cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XHJcbn1cclxuOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4jZXJyb3JXcmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHZhcigtLWVycm9yV3JhcHBlci1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcGFkZGluZzogM3B4IDZweDtcclxufVxyXG5cclxuI2Vycm9yTWVzc2FnZUxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jZXJyb3JNZXNzYWdlUmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2Vycm9yTW9yZUluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZmllbGQtY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi5vdmVybGF5QnV0dG9uIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDNweCA0cHggMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMnB4IDExcHg7XHJcbn1cclxuXHJcbiNvdmVybGF5Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB6LWluZGV4OiA0MDAwMDtcclxufVxyXG4jb3ZlcmxheUNvbnRhaW5lciA+ICoge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuI292ZXJsYXlDb250YWluZXIgPiAuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIgPiAuZGlhbG9nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItc3BhY2luZzogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uZGlhbG9nID4gLnJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtcm93O1xyXG59XHJcblxyXG4uZGlhbG9nID4gLnJvdyA+ICoge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbi5kaWFsb2cgLnRvb2xiYXJGaWVsZCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmRpYWxvZyAuc2VwYXJhdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDRweCAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcbn1cclxuXHJcbi5kaWFsb2cgLmJ1dHRvblJvdyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5kaWFsb2cgOmxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4jcGFzc3dvcmRPdmVybGF5ID4gLmRpYWxvZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwYXNzd29yZE92ZXJsYXkgLnRvb2xiYXJGaWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSA+IC5kaWFsb2cge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiBzcGFuIHtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiBwIHtcclxuICBtYXgtd2lkdGg6IDIyNXB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAuYnV0dG9uUm93IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2xlYXJCb3RoIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmZpbGVJbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbiNQREZCdWcge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDMycHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4jUERGQnVnIC5jb250cm9scyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAxKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuI1BERkJ1ZyAucGFuZWxzIHtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMjdweDtcclxufVxyXG4jUERGQnVnIC5wYW5lbHMgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4jUERGQnVnIGJ1dHRvbi5hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kZWJ1Z2dlclNob3dUZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMSk7XHJcbn1cclxuLmRlYnVnZ2VySGlkZVRleHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XHJcbn1cclxuI1BERkJ1ZyAuc3RhdHMge1xyXG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG59XHJcbiNQREZCdWcgLnN0YXRzIC50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI1BERkJ1ZyB0YWJsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC50ZXh0TGF5ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLmNhbnZhc1dyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyNTUsIDEyOCwgMSk7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLmNhbnZhc1dyYXBwZXIgY2FudmFzIHtcclxuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjEpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLWhvdmVyIC50ZXh0TGF5ZXIgPiBzcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci1zaGFkb3cgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLmdyYWItdG8tcGFuLWdyYWIge1xyXG4gIGN1cnNvcjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX199KSwgbW92ZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyYWItdG8tcGFuLWdyYWJcclxuICAqOm5vdChpbnB1dCk6bm90KHRleHRhcmVhKTpub3QoYnV0dG9uKTpub3Qoc2VsZWN0KTpub3QoOmxpbmspIHtcclxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG4uZ3JhYi10by1wYW4tZ3JhYjphY3RpdmUsXHJcbi5ncmFiLXRvLXBhbi1ncmFiYmluZyB7XHJcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80MF9fX30pLCBtb3ZlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDUwMDAwOyAvKiBzaG91bGQgYmUgaGlnaGVyIHRoYW4gYW55dGhpbmcgZWxzZSBpbiBQREYuanMhICovXHJcbn1cclxuXHJcbkBwYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNwcmludENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAvKiBHZW5lcmFsIHJ1bGVzIGZvciBwcmludGluZy4gKi9cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIFJ1bGVzIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbW96UHJpbnRDYWxsYmFjay4gKi9cclxuICAjc2lkZWJhckNvbnRhaW5lcixcclxuICAjc2Vjb25kYXJ5VG9vbGJhcixcclxuICAudG9vbGJhcixcclxuICAjbG9hZGluZ0JveCxcclxuICAjZXJyb3JXcmFwcGVyLFxyXG4gIC50ZXh0TGF5ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gICNtYWluQ29udGFpbmVyLFxyXG4gICN2aWV3ZXJDb250YWluZXIsXHJcbiAgLnBhZ2UsXHJcbiAgLnBhZ2UgY2FudmFzIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Uge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2VbZGF0YS1sb2FkZWRdIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmZpbGVJbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogUnVsZXMgZm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBQREYuanMgcHJpbnRpbmcgKi9cclxuICBib2R5W2RhdGEtcGRmanNwcmludGluZ10gI291dGVyQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjcHJpbnRDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gICNwcmludENvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC8qIHdyYXBwZXIgYXJvdW5kIChzY2FsZWQpIHByaW50IGNhbnZhcyBlbGVtZW50cyAqL1xyXG4gICNwcmludENvbnRhaW5lciA+IGRpdiB7XHJcbiAgICAvKiBXaXRob3V0IHRoZSBmb2xsb3dpbmcgbWF4LWhlaWdodCBkZWNsYXJhdGlvbiwgQ2hyb21pdW0gbWlnaHQgY3JlYXRlIGV4dHJhXHJcbiAgICAgKiBibGFuayBwYWdlcywgZXZlbiB0aG91Z2ggaXQgc2hvdWxkbid0ISAqL1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuXHJcbiAgICAvKiBJZiB3ZSdyZSBzbWFsbGVyIHRoYW4gdGhlIHBhZ2UsIGNlbnRlciB0aGUgY2FudmFzIGhvcml6b250YWxseSBhbmRcclxuICAgICAqIHZlcnRpY2FsbHkgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgI3ByaW50Q29udGFpbmVyIGNhbnZhcyxcclxuICAjcHJpbnRDb250YWluZXIgaW1nIHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4udmlzaWJsZUxhcmdlVmlldyxcclxuLnZpc2libGVNZWRpdW1WaWV3LFxyXG4udmlzaWJsZVNtYWxsVmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAjdG9vbGJhclZpZXdlck1pZGRsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgI3NpZGViYXJDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgaHRtbFtkaXI9XCJsdHJcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBodG1sW2Rpcj1cInJ0bFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuaGlkZGVuU21hbGxWaWV3LFxyXG4gIC5oaWRkZW5TbWFsbFZpZXcgKiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudmlzaWJsZVNtYWxsVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxuICAudG9vbGJhckJ1dHRvblNwYWNlciB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIge1xyXG4gICAgbGVmdDogMzRweDtcclxuICB9XHJcbiAgaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIge1xyXG4gICAgcmlnaHQ6IDM0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MzVweCkge1xyXG4gICNzY2FsZVNlbGVjdENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Nzcy92aWV3ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0VBYUU7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtLQUN0QixzQkFBc0I7VUFDakIsaUJBQWlCO0FBQzNCOztBQUVBO0VBQ0UsTUFBTTtBQUNSOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGdDQUFnQztFQUNoQywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSx3Q0FBd0M7RUFDeEMsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBOzs7OztFQUtFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGtDQUFrQztBQUNwQzs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7O0lBS0U7RUFDRixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsd0JBQXdCO0tBQ3JCLHFCQUFxQjtVQUNoQixnQkFBZ0I7RUFDeEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHdDQUF3QztFQUN4Qyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0VBY0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsbUVBQWtEO0tBQy9DLGdFQUErQztFQUNsRCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxvRUFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQywwQkFBMEI7O0VBRTFCLDJCQUEyQjtFQUMzQiw4QkFBOEI7O0VBRTlCLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsNkNBQTZDO0VBQzdDLDBDQUEwQztFQUMxQyw0REFBNEQ7RUFDNUQsK0RBQStEO0VBQy9ELHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUNBQXlDOztFQUV6QyxtREFBbUQ7RUFDbkQsa0RBQWtEO0VBQ2xELDBDQUEwQztFQUMxQyw4Q0FBOEM7RUFDOUMsNENBQTRDO0VBQzVDLDBDQUEwQztFQUMxQyxvREFBb0Q7RUFDcEQsK0NBQStDO0VBQy9DLHFDQUFxQztFQUNyQywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLDRDQUE0QztFQUM1QywyREFBMkQ7RUFDM0Qsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyw2Q0FBNkM7RUFDN0MsaURBQWlEO0VBQ2pELDJDQUEyQztFQUMzQyw2Q0FBNkM7RUFDN0MsZ0RBQWdEO0VBQ2hELGdEQUFnRDtFQUNoRCxvREFBb0Q7RUFDcEQsZ0RBQWdEO0VBQ2hELG1EQUFtRDs7RUFFbkQsdURBQXVDO0VBQ3ZDLGlFQUEyRDtFQUMzRCxrRUFBNkQ7RUFDN0QsdUVBQXVFO0VBQ3ZFLDJFQUErRTtFQUMvRSxvRkFBaUc7RUFDakcsb0VBQWlFO0VBQ2pFLHNFQUFxRTtFQUNyRSxzRUFBbUU7RUFDbkUscUVBQWlFO0VBQ2pFLCtFQUFxRjtFQUNyRixvRUFBK0Q7RUFDL0QsdUVBQXFFO0VBQ3JFLHVFQUFxRTtFQUNyRSx1RUFBcUU7RUFDckUsNEVBQStFO0VBQy9FLDBFQUEyRTtFQUMzRSw4RUFBbUY7RUFDbkYseUVBQXlFO0VBQ3pFLGlGQUF5RjtFQUN6RixxRUFBaUU7RUFDakUsdUVBQXFFO0VBQ3JFLG1FQUE2RDtFQUM3RCxpRkFBeUY7RUFDekYsZ0ZBQXVGO0VBQ3ZGLGlGQUF5RjtFQUN6RixnRkFBdUY7RUFDdkYsa0ZBQTJGO0VBQzNGLGdGQUF1RjtFQUN2RixzRkFBbUc7RUFDbkcsd0ZBQXVHO0VBQ3ZHLHFGQUFpRztFQUNqRyxrRkFBMkY7RUFDM0YsaUZBQXlGO0VBQ3pGLGtGQUEyRjtFQUMzRiwwRkFBMkc7QUFDN0c7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsNkNBQTZDO0lBQzdDLHdDQUF3QztJQUN4Qyx5REFBeUQ7SUFDekQsNkRBQTZEO0lBQzdELHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsK0NBQStDOztJQUUvQyxnREFBZ0Q7SUFDaEQsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QywyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQyxvREFBb0Q7SUFDcEQsNENBQTRDO0lBQzVDLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLDRDQUE0QztJQUM1Qyx3REFBd0Q7SUFDeEQsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCxtREFBbUQ7SUFDbkQsdURBQXVEO0lBQ3ZELGlEQUFpRDtJQUNqRCwwQ0FBMEM7SUFDMUMsOENBQThDO0lBQzlDLDZDQUE2QztJQUM3QyxpREFBaUQ7SUFDakQsOENBQThDO0lBQzlDLG9EQUFvRDs7SUFFcEQ7OzZFQUV5RTtJQUN6RSx3REFBNEM7RUFDOUM7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1FQUFtRTtFQUNuRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTs7OztFQUlFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUVBQWlFO0FBQ25FOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7S0FDakMsaUNBQWlDO1VBQzVCLDRCQUE0QjtFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO1VBQ2pCLGlCQUFpQjtBQUMzQjs7QUFFQTtFQUNFLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7T0FDakIsaUJBQWlCO0FBQ3hCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtLQUN0QixzQkFBc0I7VUFDakIsaUJBQWlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlDQUF5QztFQUN6Qyx1REFBdUQ7RUFDdkQscUVBQXFFO0FBQ3ZFO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0ZBQWtGO0VBQ2xGLHVCQUF1QjtFQUN2Qiw0RUFBNEU7RUFDNUUseUJBQXlCO0tBQ3RCLHNCQUFzQjtVQUNqQixpQkFBaUI7QUFDM0I7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLGtGQUFrRjtFQUNsRix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFDQTs7O0VBR0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFOzhCQUM0QjtBQUM5QjtBQUNBO0VBQ0U7OEJBQzRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsb0RBQW9EOztFQUVwRCx1REFBdUQ7RUFDdkQscUVBQXFFO0FBQ3ZFO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsT0FBTztFQUNQLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtGQUFrRjtFQUNsRix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGOztBQUVBO0VBQ0UsMkRBQTJEO0VBQzNELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWix5QkFBeUI7RUFDekI7Ozs7Ozs7O0dBUUM7RUFDRCwyREFBMkQ7VUFDbkQsbURBQW1EO0FBQzdEOztBQUVBOztFQUVFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwREFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0Msa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7S0FDdEIsc0JBQXNCO1VBQ2pCLGlCQUFpQjtBQUMzQjs7QUFFQTs7RUFFRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCOzRDQUMwQztBQUM1QztBQUNBOzs7O0VBSUUsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBOztFQUVFLG1EQUFtRDtFQUNuRCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBOzs7O0VBSUUsV0FBVztBQUNiO0FBQ0E7Ozs7RUFJRSxZQUFZO0FBQ2Q7QUFDQTs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBOzs7Ozs7RUFNRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUVBOztFQUVFLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOzs7OztFQUtFLDJDQUEyQztFQUMzQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFNBQVM7QUFDWDtBQUNBOztFQUVFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0tBQ3RCLHNCQUFzQjtVQUNqQixpQkFBaUI7RUFDekIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsMkNBQTJDO0FBQzdDO0FBQ0E7O0VBRUUsK0NBQStDO0FBQ2pEOztBQUVBOzs7RUFHRSw2Q0FBNkM7QUFDL0M7O0FBRUE7OztFQUdFLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFFBQVE7RUFDUixvQkFBb0I7O0VBRXBCLHVEQUF1RDtFQUN2RCwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBOzs7O0VBSUU7bURBQ2lEO0VBQ2pELGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7O0VBRVosV0FBVztFQUNYLDhDQUE4QztFQUM5Qyx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsUUFBUTtBQUNWO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCxtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9FQUFvRTtFQUNwRSw0REFBNEQ7QUFDOUQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELDRDQUE0QztBQUM5Qzs7QUFFQTs7RUFFRSw4REFBOEQ7RUFDOUQsc0RBQXNEO0FBQ3hEOztBQUVBOztFQUVFLG1EQUFtRDtFQUNuRCwyQ0FBMkM7QUFDN0M7O0FBRUE7O0VBRUUsc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQTs7RUFFRSxzREFBc0Q7RUFDdEQsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsc0RBQXNEO0VBQ3RELDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLDJEQUEyRDtFQUMzRCxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usd0RBQXdEO0VBQ3hELGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRSx3REFBd0Q7QUFDMUQ7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUix5RUFBeUU7RUFDekUsV0FBVztFQUNYLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxpRUFBaUU7RUFDakUseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHFFQUFxRTtFQUNyRSw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSx1RUFBdUU7RUFDdkUsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLE9BQU87QUFDVDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQixFQUFFLDZCQUE2QjtFQUN6RCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw0QkFBNEI7RUFDNUIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7S0FDdEIsc0JBQXNCO1VBQ2pCLGlCQUFpQjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsc0VBQXNFO0VBQ3RFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOztFQUVFLDZDQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlDQUFpQztFQUNqQyx5QkFBeUI7S0FDdEIsc0JBQXNCO1VBQ2pCLGlCQUFpQjtBQUMzQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QscUVBQXFFO0VBQ3JFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7S0FDdEIsc0JBQXNCO1VBQ2pCLGlCQUFpQjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsaURBQWlEO0VBQ2pELHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usa0RBQWtEO0VBQ2xELDBDQUEwQztBQUM1QztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCxxQ0FBcUM7QUFDdkM7O0FBRUE7Ozs7RUFJRSw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUE7OzREQUU0RDtBQUM1RDtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELHdCQUF3QjtFQUN4QixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0UseURBQXlEO0VBQ3pELHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywrQ0FBK0M7RUFDL0MsWUFBWTtBQUNkO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsT0FBTztFQUNQLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1REFBdUQ7RUFDdkQseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlFQUErQztFQUMvQywrQkFBK0I7RUFDL0IsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCO0FBQ0E7O0VBRUUsaUVBQW1EO0VBQ25ELG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjLEVBQUUsbURBQW1EO0FBQ3JFOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBLDREQUE0RDtFQUM1RDs7Ozs7O0lBTUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7Ozs7SUFJRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsd0NBQXdDO0VBQzFDOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSxvREFBb0Q7RUFDcEQ7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBLGtEQUFrRDtFQUNsRDtJQUNFOytDQUMyQztJQUMzQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7SUFFeEI7bUJBQ2U7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtFQUNBOztJQUVFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDb3B5cmlnaHQgMjAxNCBNb3ppbGxhIEZvdW5kYXRpb25cXHJcXG4gKlxcclxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpO1xcclxcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cXHJcXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXHJcXG4gKlxcclxcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXHJcXG4gKlxcclxcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcXHJcXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLFxcclxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxcclxcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcXHJcXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG4udGV4dExheWVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQge1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDAsIDE3MCwgMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5iZWdpbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmVuZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0Lm1pZGRsZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIDo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIDo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmVuZE9mQ29udGVudC5hY3RpdmUge1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIHNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmtBbm5vdGF0aW9uID4gYTpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dEFubm90YXRpb24gaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQsXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEsXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3QsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTQsIDI1NSwgMC4xMyk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDlweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgM3B4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhIHtcXHJcXG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0W2Rpc2FibGVkXSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYVtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3RbZGlzYWJsZWRdLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXRbZGlzYWJsZWRdLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXRbZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dDpmb2N1cyxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpmb2N1cyxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgbGVmdDogMzAlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWI6Zm9jdXMge1xcclxcbiAgLypcXHJcXG4gICAqIExldHRlciBzcGFjaW5nIGlzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSBvZiBlYWNoIGNoYXJhY3Rlci4gSGVuY2UsIHRoZVxcclxcbiAgICogbGV0dGVyIHNwYWNpbmcgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIG1heSBiZSBwbGFjZWQgb3V0c2lkZSB0aGUgdmlzaWJsZVxcclxcbiAgICogYXJlYSwgY2F1c2luZyBob3Jpem9udGFsIHNjcm9sbGluZy4gV2UgYXZvaWQgdGhpcyBieSBleHRlbmRpbmcgdGhlIHdpZHRoXFxyXFxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGhhcyBmb2N1cyBhbmQgcmV2ZXJ0IHRoaXMgd2hlbiBpdCBsb3NlcyBmb2N1cy5cXHJcXG4gICAqL1xcclxcbiAgd2lkdGg6IDExNSU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cFdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDE1MywgMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250OiBtZXNzYWdlLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogOXB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAgPiAqIHtcXHJcXG4gIGZvbnQtc2l6ZTogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBoMSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAgcCB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAxKTtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmhpZ2hsaWdodEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAudW5kZXJsaW5lQW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVpZ2dseUFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuc3RyaWtlb3V0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5mcmVlVGV4dEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAubGluZUFubm90YXRpb24gc3ZnIGxpbmUsXFxyXFxuLmFubm90YXRpb25MYXllciAuc3F1YXJlQW5ub3RhdGlvbiBzdmcgcmVjdCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaXJjbGVBbm5vdGF0aW9uIHN2ZyBlbGxpcHNlLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlsaW5lQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXFxyXFxuLmFubm90YXRpb25MYXllciAucG9seWdvbkFubm90YXRpb24gc3ZnIHBvbHlnb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuY2FyZXRBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmlua0Fubm90YXRpb24gc3ZnIHBvbHlsaW5lLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0YW1wQW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5maWxlQXR0YWNobWVudEFubm90YXRpb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5jYW52YXNXcmFwcGVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICB3aWR0aDogODE2cHg7XFxyXFxuICBoZWlnaHQ6IDEwNTZweDtcXHJcXG4gIG1hcmdpbjogMXB4IGF1dG8gLThweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcclxcbiAgLW8tYm9yZGVyLWltYWdlOiB1cmwoaW1hZ2VzL3NoYWRvdy5wbmcpIDkgOSByZXBlYXQ7XFxyXFxuICAgICBib3JkZXItaW1hZ2U6IHVybChpbWFnZXMvc2hhZG93LnBuZykgOSA5IHJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcgLnBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkLFxcclxcbi5zcHJlYWQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMuNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzLjVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsLFxcclxcbi5zcHJlYWQge1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnNwcmVhZCxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmVhZCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5zcHJlYWQgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMuNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtMy41cHg7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnNwcmVhZCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycy5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSBjYW52YXMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSAubG9hZGluZ0ljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImltYWdlcy9sb2FkaW5nLWljb24uZ2lmXFxcIikgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSxcXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5zcHJlYWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAucGFnZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1zaWRlYmFyLXdpZHRoOiAyMDBweDtcXHJcXG4gIC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG4gIC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0OiAwO1xcclxcblxcclxcbiAgLS10b29sYmFyLWljb24tb3BhY2l0eTogMC43O1xcclxcbiAgLS1kb29yaGFuZ2VyLWljb24tb3BhY2l0eTogMC45O1xcclxcblxcclxcbiAgLS1tYWluLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xcclxcbiAgLS1ib2R5LWJnLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyNDAsIDEpO1xcclxcbiAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMjU1LCA3NCwgNzQsIDEpO1xcclxcbiAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgxMCwgMTMyLCAyNTUsIDEpO1xcclxcbiAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjIsIDEpO1xcclxcbiAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yOiByZ2JhKDExNiwgMTc3LCAyMzksIDEpO1xcclxcbiAgLS1zY3JvbGxiYXItY29sb3I6IGF1dG87XFxyXFxuICAtLXNjcm9sbGJhci1iZy1jb2xvcjogYXV0bztcXHJcXG4gIC0tdG9vbGJhci1pY29uLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcblxcclxcbiAgLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjQwLCAwLjkpO1xcclxcbiAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoMjQ1LCAyNDYsIDI0NywgMSk7XFxyXFxuICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XFxyXFxuICAtLXRvb2xiYXItYm9yZGVyLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xcclxcbiAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMjIxLCAyMjIsIDIyMywgMSk7XFxyXFxuICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoMjE1LCAyMTUsIDIxOSwgMSk7XFxyXFxuICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLS1maWVsZC1jb2xvcjogcmdiYSg2LCA2LCA2LCAxKTtcXHJcXG4gIC0tZmllbGQtYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg4LCAxKTtcXHJcXG4gIC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yOiByZ2JhKDIyNywgMjI4LCAyMzAsIDEpO1xcclxcbiAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcclxcbiAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICAtLWRvb3JoYW5nZXItYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMik7XFxyXFxuICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XFxyXFxuICAtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDEpO1xcclxcbiAgLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjEpO1xcclxcbiAgLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjMpO1xcclxcblxcclxcbiAgLS1sb2FkaW5nLWljb246IHVybChpbWFnZXMvbG9hZGluZy5zdmcpO1xcclxcbiAgLS10cmVlaXRlbS1leHBhbmRlZC1pY29uOiB1cmwoaW1hZ2VzL3RyZWVpdGVtLWV4cGFuZGVkLnN2Zyk7XFxyXFxuICAtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uOiB1cmwoaW1hZ2VzL3RyZWVpdGVtLWNvbGxhcHNlZC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tbWVudUFycm93LnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VVcC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1wYWdlRG93bi5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXpvb21PdXQuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXpvb21Jbi5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcHJpbnQuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tb3BlbkZpbGUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tZG93bmxvYWQuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tYm9va21hcmsuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0uc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXNlYXJjaC5zdmcpO1xcclxcbiAgLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb246IHVybChpbWFnZXMvZmluZGJhckJ1dHRvbi1wcmV2aW91cy5zdmcpO1xcclxcbiAgLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbjogdXJsKGltYWdlcy9maW5kYmFyQnV0dG9uLW5leHQuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNTAsIDEpO1xcclxcbiAgICAtLWJvZHktYmctY29sb3I6IHJnYmEoNDIsIDQyLCA0NiwgMSk7XFxyXFxuICAgIC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yOiByZ2JhKDE5OSwgMTcsIDE3LCAxKTtcXHJcXG4gICAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgwLCA5NiwgMjIzLCAxKTtcXHJcXG4gICAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yOiByZ2JhKDQwLCA0MCwgNDMsIDEpO1xcclxcbiAgICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMjAsIDY4LCAxMzMsIDEpO1xcclxcbiAgICAtLXNjcm9sbGJhci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIzLCAxKTtcXHJcXG4gICAgLS1zY3JvbGxiYXItYmctY29sb3I6IHJnYmEoMzUsIDM1LCAzOSwgMSk7XFxyXFxuICAgIC0tdG9vbGJhci1pY29uLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcblxcclxcbiAgICAtLXNpZGViYXItbmFycm93LWJnLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDYsIDAuOSk7XFxyXFxuICAgIC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDUwLCA1MCwgNTIsIDEpO1xcclxcbiAgICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTYsIDU2LCA2MSwgMSk7XFxyXFxuICAgIC0tdG9vbGJhci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMSk7XFxyXFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDMsIDEpO1xcclxcbiAgICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzksIDEpO1xcclxcbiAgICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICAtLWZpZWxkLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xcclxcbiAgICAtLWZpZWxkLWJnLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjgsIDEpO1xcclxcbiAgICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxMTUsIDExNSwgMTE1LCAxKTtcXHJcXG4gICAgLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3I6IHJnYmEoODksIDg5LCA4OSwgMSk7XFxyXFxuICAgIC0tdHJlZWl0ZW0tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICAtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxyXFxuICAgIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxyXFxuICAgIC0tZG9vcmhhbmdlci1iZy1jb2xvcjogcmdiYSg3NCwgNzQsIDc5LCAxKTtcXHJcXG4gICAgLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcjogcmdiYSgzOSwgMzksIDQzLCAxKTtcXHJcXG4gICAgLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yOiByZ2JhKDkzLCA5NCwgOTgsIDEpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDkyLCA5MiwgOTcsIDEpO1xcclxcbiAgICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDkyLCA5MiwgOTcsIDEpO1xcclxcbiAgICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xcclxcblxcclxcbiAgICAvKiBUaGlzIGltYWdlIGlzIHVzZWQgaW4gPGlucHV0PiBlbGVtZW50cywgd2hpY2ggdW5mb3J0dW5hdGVseSBtZWFucyB0aGF0XFxyXFxuICAgICAqIHRoZSBgbWFzay1pbWFnZWAgYXBwcm9hY2ggdXNlZCB3aXRoIGFsbCBvZiB0aGUgb3RoZXIgaW1hZ2VzIGRvZXNuJ3Qgd29ya1xcclxcbiAgICAgKiBoZXJlOyBoZW5jZSB3aHkgd2Ugc3RpbGwgaGF2ZSB0d28gdmVyc2lvbnMgb2YgdGhpcyBwYXJ0aWN1bGFyIGltYWdlLiAqL1xcclxcbiAgICAtLWxvYWRpbmctaWNvbjogdXJsKGltYWdlcy9sb2FkaW5nLWRhcmsuc3ZnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgLyogRm9udCBzaXplIGlzIG5lZWRlZCB0byBtYWtlIHRoZSBhY3Rpdml0eSBiYXIgdGhlIGNvcnJlY3Qgc2l6ZS4gKi9cXHJcXG4gIC8qIGZvbnQtc2l6ZTogMTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgLyogZm9udDogbWVzc2FnZS1ib3g7ICovXFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItY29sb3IpIHZhcigtLXNjcm9sbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5baGlkZGVuXSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuZW5hYmxlUGVybWlzc2lvbnMgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlLnBkZlByZXNlbnRhdGlvbk1vZGVDb250cm9scyA+ICosXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUucGRmUHJlc2VudGF0aW9uTW9kZUNvbnRyb2xzIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAxKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcclxcbiAgbGVmdDogY2FsYygwcHggLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcXHJcXG4gIHJpZ2h0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxyXFxuICAvKiBQcmV2ZW50IGUuZy4gdGhlIHRodW1ibmFpbHMgYmVpbmcgc2VsZWN0ZWQgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhck1vdmluZyAjc2lkZWJhckNvbnRhaW5lcixcXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbkNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBtaW4td2lkdGg6IDMyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhckNvbnRlbnQge1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNzaWRlYmFyQ29udGVudCB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNzaWRlYmFyQ29udGVudCB7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbiN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl1cXHJcXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxcclxcbiAgI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxyXFxuICBsZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdXFxyXFxuICAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW5cXHJcXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLk1haW4tQ29udGFpbmVyIC50b29sYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9vbGJhclNpZGViYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyIC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXJSZXNpemVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNzaWRlYmFyUmVzaXplciB7XFxyXFxuICByaWdodDogLTZweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNzaWRlYmFyUmVzaXplciB7XFxyXFxuICBsZWZ0OiAtNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9vbGJhckNvbnRhaW5lcixcXHJcXG4uZmluZGJhcixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tdG9vbGJhci1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9vbGJhclZpZXdlciB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9vbGJhci1ib3JkZXItY29sb3IpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNsb2FkaW5nQmFyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IHZhcigtLWxvYWRpbmdCYXItZW5kLW9mZnNldCk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjbG9hZGluZ0JhciB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcXHJcXG4gIGxlZnQ6IHZhcigtLWxvYWRpbmdCYXItZW5kLW9mZnNldCk7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjbG9hZGluZ0JhciB7XFxyXFxuICBsZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjbG9hZGluZ0JhciB7XFxyXFxuICByaWdodDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI2xvYWRpbmdCYXIge1xcclxcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3Mge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzSW5kZXRlcm1pbmF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IC0xNDJweDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHByb2dyZXNzSW5kZXRlcm1pbmF0ZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGxlZnQ6IC0xNDJweDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3MuaW5kZXRlcm1pbmF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIC5nbGltbWVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlICsgMTUwcHgpO1xcclxcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgMTM1ZGVnLFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAwLFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKSA1cHgsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpIDQ1cHgsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA1NXB4LFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcikgOTVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcikgMTAwcHhcXHJcXG4gICk7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHJvZ3Jlc3NJbmRldGVybWluYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzc0luZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhcixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxMDAwMDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDAgNHB4O1xcclxcbiAgbWFyZ2luOiA0cHggMnB4O1xcclxcbiAgY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMSk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIHtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuLmZpbmRiYXIgPiBkaXYge1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG4uZmluZGJhci53cmFwQ29udGFpbmVycyA+IGRpdiB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuLmZpbmRiYXIud3JhcENvbnRhaW5lcnMgPiBkaXYjZmluZGJhck1lc3NhZ2VDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgbGVmdDogNjRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5maW5kYmFyIHtcXHJcXG4gIHJpZ2h0OiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xcclxcbiAgd2lkdGg6IDI5cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciBsYWJlbCB7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIGxhYmVsOmhvdmVyLFxcclxcbi5maW5kYmFyIGlucHV0OmZvY3VzICsgbGFiZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNmaW5kSW5wdXQge1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNmaW5kSW5wdXQge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC50b29sYmFyRmllbGRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLnRvb2xiYXJMYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWJ0bi1iZy1jb2xvcikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZpbmRJbnB1dCB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcbiNmaW5kSW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMSk7XFxyXFxufVxcclxcbiNmaW5kSW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG4jZmluZElucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbiNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XFxcInBlbmRpbmdcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1sb2FkaW5nLWljb24pO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XFxcInBlbmRpbmdcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzcHg7XFxyXFxufVxcclxcbiNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XFxcIm5vdEZvdW5kXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwMiwgMTAyLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXIge1xcclxcbiAgcGFkZGluZzogNnB4IDAgMTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHotaW5kZXg6IDMwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICByaWdodDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNlY29uZGFyeVRvb2xiYXIge1xcclxcbiAgbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDIyMHB4O1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIuaGlkZGVuU2Nyb2xsTW9kZUJ1dHRvbnMgPiAuc2Nyb2xsTW9kZUJ1dHRvbnMsXFxyXFxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIuaGlkZGVuU3ByZWFkTW9kZUJ1dHRvbnMgPiAuc3ByZWFkTW9kZUJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9vckhhbmdlcixcXHJcXG4uZG9vckhhbmdlclJpZ2h0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvciksXFxyXFxuICAgIDAgMCAwIDFweCB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyOmFmdGVyLFxcclxcbi5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGJvdHRvbTogMTAwJTtcXHJcXG4gIGJvcmRlcjogc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyOmFmdGVyLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyOmFmdGVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xcclxcbn1cXHJcXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG4uZG9vckhhbmdlcjpiZWZvcmUsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLXdpZHRoOiA5cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZG9vckhhbmdlcjphZnRlcixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTlweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXI6YmVmb3JlLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTlweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZpbmRSZXN1bHRzQ291bnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDEpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3B4IDRweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZmluZE1zZyB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTEsIDAsIDAsIDEpO1xcclxcbn1cXHJcXG4jZmluZE1zZzplbXB0eSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9vbGJhclZpZXdlck1pZGRsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0LFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlck1pZGRsZSA+ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyICoge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlck1pZGRsZSA+ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5maW5kYmFyICoge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMnB4IDJweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24sXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24sXFxyXFxuLm92ZXJsYXlCdXR0b24ge1xcclxcbiAgYm9yZGVyOiAwIG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDI4cHg7XFxyXFxufVxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXlCdXR0b246aG92ZXIsXFxyXFxuLm92ZXJsYXlCdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b25bZGlzYWJsZWRdLFxcclxcbi5vdmVybGF5QnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zm9jdXMsXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4udG9vbGJhckJ1dHRvbi50ZXh0QnV0dG9uOmhvdmVyLFxcclxcbi50b29sYmFyQnV0dG9uLnRleHRCdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDE5OTtcXHJcXG59XFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDEzcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24sXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbixcXHJcXG4ub3ZlcmxheUJ1dHRvbiB7XFxyXFxuICBtaW4td2lkdGg6IDE2cHg7XFxyXFxuICBtYXJnaW46IDJweCAxcHg7XFxyXFxuICBwYWRkaW5nOiAycHggNnB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuLnRvb2xiYXJCdXR0b246aG92ZXIsXFxyXFxuLnRvb2xiYXJCdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246aG92ZXIsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkID4gLnRvb2xiYXJCdXR0b24udG9nZ2xlZCxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUsXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkID4gLnRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTQwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcik7XFxyXFxuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xcclxcbiAgdG9wOiA2cHg7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiA3cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xcclxcbiAgd2lkdGg6IDE2MnB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMXB4IDAgMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3QgPiBvcHRpb24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNjdXN0b21TY2FsZU9wdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZVdpZHRoT3B0aW9uIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgc29saWQ7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uU3BhY2VyIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSxcXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlcixcXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgLyogQWxsIG1hdGNoaW5nIGltYWdlcyBoYXZlIGEgc2l6ZSBvZiAxNngxNlxcclxcbiAgICogQWxsIHJlbGV2YW50IGNvbnRhaW5lcnMgaGF2ZSBhIHNpemUgb2YgMjh4MjggKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcblxcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tYmctY29sb3IpO1xcclxcbiAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcclxcbiAgbWFzay1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiB2YXIoLS10b29sYmFyLWljb24tb3BhY2l0eSk7XFxyXFxuICB0b3A6IDZweDtcXHJcXG4gIGxlZnQ6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiB2YXIoLS1kb29yaGFuZ2VyLWljb24tb3BhY2l0eSk7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgbGVmdDogMTJweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgcmlnaHQ6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uI3NlY29uZGFyeVRvb2xiYXJUb2dnbGU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyQnV0dG9uI3NlY29uZGFyeVRvb2xiYXJUb2dnbGU6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLmZpbmRQcmV2aW91czo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLmZpbmROZXh0OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnBhZ2VVcDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucGFnZURvd246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi56b29tT3V0OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnpvb21Jbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucHJlc2VudGF0aW9uTW9kZTo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByZXNlbnRhdGlvbk1vZGU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucHJpbnQ6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLm9wZW5GaWxlOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5kb3dubG9hZDo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uYm9va21hcmsge1xcclxcbiAgcGFkZGluZy10b3A6IDZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2ttYXJrW2hyZWY9XFxcIiNcXFwiXSB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uYm9va21hcms6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbik7XFxyXFxufVxcclxcblxcclxcbiN2aWV3VGh1bWJuYWlsLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdPdXRsaW5lLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3ZpZXdPdXRsaW5lLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3QXR0YWNobWVudHMudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdMYXllcnMudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3RmluZC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0b3A6IDFweDtcXHJcXG4gIC8qIENyZWF0ZSBhIGZpbGxlZCBjaXJjbGUsIHdpdGggYSBkaWFtZXRlciBvZiA5IHBpeGVscywgdXNpbmcgb25seSBDU1M6ICovXFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEyLCAyMTksIDg1LCAxKTtcXHJcXG4gIGhlaWdodDogOXB4O1xcclxcbiAgd2lkdGg6IDlweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDE3cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XFxyXFxuICByaWdodDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMCAwIDFweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzZweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xcclxcbiAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24gPiBzcGFuIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5maXJzdFBhZ2U6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmxhc3RQYWdlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucm90YXRlQ2N3OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDdzo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNlbGVjdFRvb2w6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uaGFuZFRvb2w6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxWZXJ0aWNhbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbEhvcml6b250YWw6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsV3JhcHBlZDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWROb25lOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZE9kZDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkRXZlbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5kb2N1bWVudFByb3BlcnRpZXM6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMXB4IDA7XFxyXFxuICBtYXJnaW46IDVweCAycHg7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ob3Jpem9udGFsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogNnB4IDAgNXB4O1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGQge1xcclxcbiAgcGFkZGluZzogNHB4IDdweDtcXHJcXG4gIG1hcmdpbjogM3B4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1maWVsZC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDNweCA3cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudG9vbGJhckZpZWxkW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgbWFyZ2luOiAxMHB4IDdweCAzcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyIHtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiBoaWRlcyB0aGUgc3Bpbm5lciBpbiBtb3ogKi9cXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGQucGFnZU51bWJlci52aXNpYmxlUGFnZUlzTG9hZGluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1sb2FkaW5nLWljb24pO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbi50b29sYmFyRmllbGQucGFnZU51bWJlcjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMGE4NGZmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckxhYmVsIHtcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIG1hcmdpbjogMnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNudW1QYWdlcy50b29sYmFyTGFiZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmFjdGl2ZSxcXHJcXG4jdGh1bWJuYWlsVmlldyA+IGE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbCB7XFxyXFxuICBtYXJnaW46IDAgMTBweCA1cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudGh1bWJuYWlsIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRodW1ibmFpbCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiN0aHVtYm5haWxWaWV3ID4gYTpsYXN0LW9mLXR5cGUgPiAudGh1bWJuYWlsIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0aHVtYm5haWxWaWV3ID4gYTpsYXN0LW9mLXR5cGUgPiAudGh1bWJuYWlsOm5vdChbZGF0YS1sb2FkZWRdKSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWw6bm90KFtkYXRhLWxvYWRlZF0pIHtcXHJcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDEzMiwgMTMyLCAxMzIsIDEpO1xcclxcbiAgbWFyZ2luOiAtMXB4IDlweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWxJbWFnZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuYTpmb2N1cyA+IC50aHVtYm5haWwgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSxcXHJcXG4udGh1bWJuYWlsOmhvdmVyID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2Uge1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cXHJcXG5hOmZvY3VzID4gLnRodW1ibmFpbCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nLFxcclxcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWwuc2VsZWN0ZWQgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNvdXRsaW5lVmlldyxcXHJcXG4jYXR0YWNobWVudHNWaWV3LFxcclxcbiNsYXllcnNWaWV3IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZzogNHB4IDRweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZVdpdGhEZWVwTmVzdGluZyA+IC50cmVlSXRlbSxcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtID4gLnRyZWVJdGVtcyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWVJdGVtID4gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtaW4td2lkdGg6IDk1JTtcXHJcXG4gIC8qIFN1YnRyYWN0IHRoZSByaWdodCBwYWRkaW5nIChsZWZ0LCBpbiBSVEwgbW9kZSkgb2YgdGhlIGNvbnRhaW5lcjogKi9cXHJcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTVweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZUl0ZW0gPiBhIHtcXHJcXG4gIHBhZGRpbmc6IDJweCAwIDVweCA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW0gPiBhIHtcXHJcXG4gIHBhZGRpbmc6IDJweCA0cHggNXB4IDA7XFxyXFxufVxcclxcblxcclxcbiNsYXllcnNWaWV3IC50cmVlSXRlbSA+IGEgPiAqIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNsYXllcnNWaWV3IC50cmVlSXRlbSA+IGEgPiBsYWJlbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNsYXllcnNWaWV3IC50cmVlc0l0ZW0gPiBhID4gbGFiZWwge1xcclxcbiAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG59XFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1leHBhbmRlZC1pY29uKTtcXHJcXG59XFxyXFxuLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbiB+IC50cmVlSXRlbXMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlSXRlbVRvZ2dsZXIge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XFxyXFxuICByaWdodDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWVJdGVtLnNlbGVjdGVkID4gYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyLFxcclxcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIgKyBhLFxcclxcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIgfiAudHJlZUl0ZW1zLFxcclxcbi50cmVlSXRlbSA+IGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qIFRPRE86IGZpbGUgRkYgYnVnIHRvIHN1cHBvcnQgOjotbW96LXNlbGVjdGlvbjp3aW5kb3ctaW5hY3RpdmVcXHJcXG4gICBzbyB3ZSBjYW4gb3ZlcnJpZGUgdGhlIG9wYXF1ZSBncmV5IGJhY2tncm91bmQgd2hlbiB0aGUgd2luZG93IGlzIGluYWN0aXZlO1xcclxcbiAgIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MDYyMDkgKi9cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcclxcbn1cXHJcXG46OnNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yV3JhcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHZhcigtLWVycm9yV3JhcHBlci1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTWVzc2FnZUxlZnQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1lc3NhZ2VSaWdodCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1vcmVJbmZvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1maWVsZC1jb2xvcik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1hcmdpbjogM3B4IDRweCAycHggIWltcG9ydGFudDtcXHJcXG4gIHBhZGRpbmc6IDJweCAxMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgei1pbmRleDogNDAwMDA7XFxyXFxufVxcclxcbiNvdmVybGF5Q29udGFpbmVyID4gKiB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXlDb250YWluZXIgPiAuY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIgPiAuZGlhbG9nIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItc3BhY2luZzogNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgPiAucm93IHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyA+IC5yb3cgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgLnRvb2xiYXJGaWVsZCB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIC5zZXBhcmF0b3Ige1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDRweCAwO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgLmJ1dHRvblJvdyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIDpsaW5rIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFzc3dvcmRPdmVybGF5ID4gLmRpYWxvZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNwYXNzd29yZE92ZXJsYXkgLnRvb2xiYXJGaWVsZCB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5ID4gLmRpYWxvZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XFxyXFxuICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gc3BhbiB7XFxyXFxuICB3aWR0aDogMTI1cHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiBwIHtcXHJcXG4gIG1heC13aWR0aDogMjI1cHg7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5idXR0b25Sb3cge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyQm90aCB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbGVJbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI1BERkJ1ZyB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG4jUERGQnVnIC5jb250cm9scyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDEpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxufVxcclxcbiNQREZCdWcgLnBhbmVscyB7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMjdweDtcXHJcXG59XFxyXFxuI1BERkJ1ZyAucGFuZWxzID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuI1BERkJ1ZyBidXR0b24uYWN0aXZlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uZGVidWdnZXJTaG93VGV4dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXHJcXG59XFxyXFxuLmRlYnVnZ2VySGlkZVRleHQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcXHJcXG59XFxyXFxuI1BERkJ1ZyAuc3RhdHMge1xcclxcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbn1cXHJcXG4jUERGQnVnIC5zdGF0cyAudGl0bGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbiNQREZCdWcgdGFibGUge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC50ZXh0TGF5ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMjU1LCAxMjgsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC5jYW52YXNXcmFwcGVyIGNhbnZhcyB7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItaG92ZXIgLnRleHRMYXllciA+IHNwYW46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci1zaGFkb3cgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi5ncmFiLXRvLXBhbi1ncmFiIHtcXHJcXG4gIGN1cnNvcjogdXJsKFxcXCJpbWFnZXMvZ3JhYi5jdXJcXFwiKSwgbW92ZSAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWIgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogZ3JhYiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uZ3JhYi10by1wYW4tZ3JhYlxcclxcbiAgKjpub3QoaW5wdXQpOm5vdCh0ZXh0YXJlYSk6bm90KGJ1dHRvbik6bm90KHNlbGVjdCk6bm90KDpsaW5rKSB7XFxyXFxuICBjdXJzb3I6IGluaGVyaXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmdyYWItdG8tcGFuLWdyYWI6YWN0aXZlLFxcclxcbi5ncmFiLXRvLXBhbi1ncmFiYmluZyB7XFxyXFxuICBjdXJzb3I6IHVybChcXFwiaW1hZ2VzL2dyYWJiaW5nLmN1clxcXCIpLCBtb3ZlICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmcgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB6LWluZGV4OiA1MDAwMDsgLyogc2hvdWxkIGJlIGhpZ2hlciB0aGFuIGFueXRoaW5nIGVsc2UgaW4gUERGLmpzISAqL1xcclxcbn1cXHJcXG5cXHJcXG5AcGFnZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNwcmludENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgcHJpbnQge1xcclxcbiAgLyogR2VuZXJhbCBydWxlcyBmb3IgcHJpbnRpbmcuICovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogUnVsZXMgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtb3pQcmludENhbGxiYWNrLiAqL1xcclxcbiAgI3NpZGViYXJDb250YWluZXIsXFxyXFxuICAjc2Vjb25kYXJ5VG9vbGJhcixcXHJcXG4gIC50b29sYmFyLFxcclxcbiAgI2xvYWRpbmdCb3gsXFxyXFxuICAjZXJyb3JXcmFwcGVyLFxcclxcbiAgLnRleHRMYXllciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWFpbkNvbnRhaW5lcixcXHJcXG4gICN2aWV3ZXJDb250YWluZXIsXFxyXFxuICAucGFnZSxcXHJcXG4gIC5wYWdlIGNhbnZhcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlW2RhdGEtbG9hZGVkXSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpbGVJbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFBERi5qcyBwcmludGluZyAqL1xcclxcbiAgYm9keVtkYXRhLXBkZmpzcHJpbnRpbmddICNvdXRlckNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBib2R5W2RhdGEtcGRmanNwcmludGluZ10gI3ByaW50Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAjcHJpbnRDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAvKiB3cmFwcGVyIGFyb3VuZCAoc2NhbGVkKSBwcmludCBjYW52YXMgZWxlbWVudHMgKi9cXHJcXG4gICNwcmludENvbnRhaW5lciA+IGRpdiB7XFxyXFxuICAgIC8qIFdpdGhvdXQgdGhlIGZvbGxvd2luZyBtYXgtaGVpZ2h0IGRlY2xhcmF0aW9uLCBDaHJvbWl1bSBtaWdodCBjcmVhdGUgZXh0cmFcXHJcXG4gICAgICogYmxhbmsgcGFnZXMsIGV2ZW4gdGhvdWdoIGl0IHNob3VsZG4ndCEgKi9cXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xcclxcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxyXFxuXFxyXFxuICAgIC8qIElmIHdlJ3JlIHNtYWxsZXIgdGhhbiB0aGUgcGFnZSwgY2VudGVyIHRoZSBjYW52YXMgaG9yaXpvbnRhbGx5IGFuZFxcclxcbiAgICAgKiB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjcHJpbnRDb250YWluZXIgY2FudmFzLFxcclxcbiAgI3ByaW50Q29udGFpbmVyIGltZyB7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGVMYXJnZVZpZXcsXFxyXFxuLnZpc2libGVNZWRpdW1WaWV3LFxcclxcbi52aXNpYmxlU21hbGxWaWV3IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAjdG9vbGJhclZpZXdlck1pZGRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxyXFxuICAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItbmFycm93LWJnLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIGh0bWxbZGlyPVxcXCJydGxcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyxcXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXFxyXFxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTWVkaXVtVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuICAuaGlkZGVuU21hbGxWaWV3LFxcclxcbiAgLmhpZGRlblNtYWxsVmlldyAqIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC52aXNpYmxlU21hbGxWaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICB9XFxyXFxuICBodG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgICBsZWZ0OiAzNHB4O1xcclxcbiAgfVxcclxcbiAgaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5maW5kYmFyIHtcXHJcXG4gICAgcmlnaHQ6IDM0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUzNXB4KSB7XFxyXFxuICAjc2NhbGVTZWxlY3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL2Nzcy92aWV3ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ltYWdlcy9pY19wdWxsZG93bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pbWFnZXMvYmdfdXBsb2FkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vZmlyc3QtcGFnZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2ZpcnN0LXBhZ2UtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9wcmV2LXBhZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9wcmV2LXBhZ2UtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9uZXh0LXBhZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9uZXh0LXBhZ2UtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9sYXN0LXBhZ2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9sYXN0LXBhZ2UtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1zZWxlY3QtZG93bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi96b29tLW91dC1idG4yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3pvb20tb3V0LWJ0bjItaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3pvb20taW4tYnRuMi1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9maWVsZC1pbnB1dC1tb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWlucHV0LW1vZGUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vbWVtby1pbnB1dC1tb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL21lbW8tSW5wdXQtbW9kZS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9tZW1vLWFkZC1tb2RlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL21lbW8tYWRkLW1vZGUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ltYWdlcy9pYy10b29sdGlwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tbGVmdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLXJpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2Iuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LWhvdmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tY2VudGVyLWhvdmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYi1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9maWVsZC1kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vcHJvcGVydGllcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4ucGRmVmlld2VyIC5wYWdlIHtcbiAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4uT3V0ZXItQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5NYWluQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMzIwcHg7IH1cblxuI1RlbXBsYXRlUERGVmlld2VyLFxuI1JlYWRlclBERlZpZXdlcixcbiNQcmV2aWV3UmVhZGVyUERGVmlld2VyIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4uVmlld2VyLUNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBpbnNldDogMTI4cHggMzAwcHggMzAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCAtIDMwMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gNjRweCk7IH1cblxuLlZpZXdlci1Db250YWluZXIuZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGluc2V0OiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLmxlZnRmdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMTI4cHggMHB4IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLnJpZ2h0ZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDEyOHB4IDMwMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDsgfVxuXG4uVGVtcGxhdGUtU2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLlRlbXBsYXRlLUhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwgaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm94LXNoYWRvdzogLTEuNnB4IDEuMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDRweCA0LjVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7IH1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLlBvcHVwLUhlYWQgLlRpdGxlLCAuUG9wdXAtVGFiLU1haW4gbGkgYSxcbi5Qb3B1cC1UYWItTWFpbiBsaSBzcGFuLCAuUmVhZGVyLVRvb2xiYXItR3JvdXAgLlRvb2xiYXItRmllbGQuUGFnZS1OdW1iZXIsIC5SZWFkZXItVG9vbGJhci1Hcm91cCAuVG9vbGJhci1MYWJlbCwgLlJlYWRlci1CdXR0b24sIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZSwgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyLCAuVGVtcGxhdGUtQnV0dG9uLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtZmFtaWx5OiBNYWxndW5Hb3RoaWM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7IH1cblxuLk1hcmdpbi1SaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLlNjYWxlLVNlbGV0b3ItQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4ucGRmVmlld2VyIC5wYWdlIHtcbiAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4uT3V0ZXItQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5NYWluQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMzIwcHg7IH1cblxuI1RlbXBsYXRlUERGVmlld2VyLFxuI1JlYWRlclBERlZpZXdlcixcbiNQcmV2aWV3UmVhZGVyUERGVmlld2VyIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4uVmlld2VyLUNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBpbnNldDogMTI4cHggMzAwcHggMzAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCAtIDMwMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gNjRweCk7IH1cblxuLlZpZXdlci1Db250YWluZXIuZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGluc2V0OiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLmxlZnRmdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMTI4cHggMHB4IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLnJpZ2h0ZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDEyOHB4IDMwMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDsgfVxuXG4uVGVtcGxhdGUtU2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLlRlbXBsYXRlLUhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwgaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm94LXNoYWRvdzogLTEuNnB4IDEuMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDRweCA0LjVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7IH1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLlBvcHVwLUhlYWQgLlRpdGxlLCAuUG9wdXAtVGFiLU1haW4gbGkgYSxcbi5Qb3B1cC1UYWItTWFpbiBsaSBzcGFuLCAuUmVhZGVyLVRvb2xiYXItR3JvdXAgLlRvb2xiYXItRmllbGQuUGFnZS1OdW1iZXIsIC5SZWFkZXItVG9vbGJhci1Hcm91cCAuVG9vbGJhci1MYWJlbCwgLlJlYWRlci1CdXR0b24sIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZSwgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyLCAuVGVtcGxhdGUtQnV0dG9uLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtZmFtaWx5OiBNYWxndW5Hb3RoaWM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7IH1cblxuLk1hcmdpbi1SaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLlNjYWxlLVNlbGV0b3ItQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbiNSZWFkZXJWaWV3ZXJDb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDZweDtcbiAgbGVmdDogMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBpbnNldDogNDZweCAwIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCAtIDgxcHgpOyB9XG5cbi5FbXB0eUZpZWxkIHtcbiAgYm9yZGVyOiByZWQgZGFzaGVkIDJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKSAhaW1wb3J0YW50OyB9XG5cbi5SZWFkZXItUGFnZS1NZW1vLUxheWVyIHRleHRhcmVhIHtcbiAgdGV4dC13cmFwOiBub3dyYXA7IH1cblxuLk5vLUV2ZW50LUxheWVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uU2lnbi1Qb3B1cCB7XG4gIHotaW5kZXg6IDk5OTkwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5TaWduLVBvcHVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uUG9wdXAtQmctV3JhcCB7XG4gIHotaW5kZXg6IDk5OTk4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4uU2lnbi1MYXllcnBvcCB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNnB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDU2MnB4O1xuICBoZWlnaHQ6IDU0M3B4OyB9XG5cbi5TaWduLUxheWVycG9wIC5Qb3B1cC1IZWFkIHtcbiAgcGFkZGluZzogMzJweCAwcHggMjBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5Qb3B1cC1IZWFkIC5UaXRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxMTExMTE7IH1cblxuLlBvcHVwLUJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDU0M3B4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCAtIDg1cHgpOyB9XG5cbi5Qb3B1cC1Gb290IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMHB4IDMxcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uUG9wdXAtRm9vdCAuYnRuX2NvbW1vbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgbWFyZ2luOiAwIDAgMCAzcHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IG5vbmU7IH1cblxuLlBvcHVwLUZvb3QgLmJ0bl9jb21tb24uYnRuX2NhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7IH1cblxuLlBvcHVwLUZvb3QgLmJ0bl9jb21tb24uYnRuX3Jlc2V0IHtcbiAgY29sb3I6ICMwMGFhZGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7IH1cblxuLlNpZ24tVGFiLUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTYycHg7IH1cblxuLlBvcHVwLVRhYi1NYWluIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAzMXB4OyB9XG5cbi5Qb3B1cC1UYWItTWFpbiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMjZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XG5cbi5Qb3B1cC1UYWItTWFpbiBsaSBhLFxuLlBvcHVwLVRhYi1NYWluIGxpIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMzMzMztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uUG9wdXAtVGFiLU1haW4gbGkub24ge1xuICB3aWR0aDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNWY7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uUG9wdXAtVGFiLU1haW4gbGkub24gYSxcbi5Qb3B1cC1UYWItTWFpbiBsaS5vbiBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDU2MnB4O1xuICBoZWlnaHQ6IDM1NXB4O1xuICBwYWRkaW5nOiAyMHB4IDMxcHggMCAzMXB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzICNyZWdpc3RlcmVkQXJlYS5TaWduLUFyZWEuRHJhdy1BcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuaW5uZXJib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogLTFweCAwIDAgLTFweDsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEuRHJhdy1BcmVhIC5zaWducGFkLFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuc2lnbk1zZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjY1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUhlYWQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIHNlbGVjdCxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tSGVhZCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIG1hcmdpbi1yaWdodDogNHB4OyB9XG5cbi5TaWduLUhlYWQgc2VsZWN0IHtcbiAgd2lkdGg6IDE1M3B4O1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjYWxjKDEwMCUgLSA4cHgpIDUwJSAjZmZmO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLlNpZ24tSGVhZCAuYnRuX2NvbW1vbi5saW5lX2JsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uU2lnbi1IZWFkIC5idG5fY29tbW9uLmxpbmVfYmx1ZSB7XG4gIGNvbG9yOiAjMGU3M2MzICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZTczYzM7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuc2lnblR4dFdyYXAge1xuICBwYWRkaW5nOiAwIDE0cHggMCAyNHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc0cHgpO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsLFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGksXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAzMy4zMyU7XG4gIC1tcy1mbGV4LWJhc2lzOiAzMy4zMyU7XG4gIGZsZXgtYmFzaXM6IDMzLjMzJTtcbiAgbWFyZ2luOiAxMHB4IDAgMDsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsIGxpIC5jYW52YXNfd3JhcCxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIGxpIC5jYW52YXNfd3JhcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCBsaSBjYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIGxpIC5jYW52YXNfd3JhcCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgPiAuaW5uZXJib3gge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5pbWdfdXBsb2FkX2FyZWEge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uY29ybmVyX3BvaW50X2FyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uY29ybmVyX3BvaW50X2FyZWEgLmlubmVyYm94IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAycHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDJweCk7XG4gIG1hcmdpbjogLTFweDtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCAuYmdfYXJlYSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSByZXBlYXQgMCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCAuaW1nIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3ggLmltZyBpbWcge1xuICBtYXgtd2lkdGg6IDQ3OHB4O1xuICBtYXgtaGVpZ2h0OiAyMjZweDsgfVxuXG4uY29ybmVyX3BvaW50X2FyZWEgLnR4dF9ndWlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmNvcm5lcl9wb2ludF9hcmVhOmhvdmVyIC50eHRfZ3VpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjgpOyB9XG5cbi5pbWdfdXBsb2FkX2FyZWEgLnVwbG9hZF9ub3RlIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgcGFkZGluZzogMTBweCAwIDA7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDJkMmQyOyB9XG5cbi5pbWdfdXBsb2FkX2FyZWEgLnVwbG9hZF9ub3RlIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxuXG4uUG9wdXAtQm9keSAuc2lnbkxpc3Qge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWJldHdlZW47XG4gIC1tcy1mbGV4LWFsaWduLXNlbGY6IHNwYWNlLWJldHdlZW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDAgbm9uZTsgfVxuXG4uUG9wdXAtQm9keSAuc2lnbkxpc3QgLnNpZ25faXRlbSB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDAgbm9uZTsgfVxuXG4uc2lnbkxpc3QgLnNpZ25faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0MXB4O1xuICBoZWlnaHQ6IDI1NHB4O1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udF9hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uUG9wdXAtQm9keSAuc2lnbkxpc3QgLnNpZ25fdGl0IHtcbiAgbWFyZ2luOiAwIDAgNHB4O1xuICBjb2xvcjogIzZhNzI3NjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5zaWduTGlzdCAuc2lnbl9pdGVtIC5zaWduX3RpdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl9jb250IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWNlZmYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX2NvbnQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl9jb250IGNhbnZhcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udCAuaW1nX3N0YW1wIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA5MCU7IH1cblxuLlJlYWRlci1Ub29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLlJlYWRlci1Ub29sYmFyLUdyb3VwIHtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAuQ2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b246aG92ZXIsXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uOmhvdmVyLFxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpob3Zlcixcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLVByZXYtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1OZXh0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmRpc2FibGVkLFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpkaXNhYmxlZCxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b246ZGlzYWJsZWQsXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24sXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbixcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4OyB9XG5cbi5SZWFkZXItQnV0dG9uLlpvb20tT3V0LUJ1dHRvbiA+IGksXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbiA+IGksXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24gPiBpLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24gPiBpLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uID4gaSB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNHB4OyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyNnB4OyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDYpLFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMTApIHtcbiAgd2lkdGg6IDYxcHg7IH1cblxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoOCkge1xuICBtYXJnaW4tbGVmdDogMzBweDsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgLlRvb2xiYXItRmllbGQuUGFnZS1OdW1iZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwOyB9XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCAuVG9vbGJhci1MYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4OyB9XG5cbi5Ub29sYmFyLUJ1dHRvbi1EaXZpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ2YzhmO1xuICBtYXJnaW46IDAgMzBweCAwIDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC8q7JqU7IaM7J2YIOuGkuydtOydmCDrsJgoNTAlKSDrp4ztgbwg7JyE66GcIOydtOuPmSovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg3KSB7XG4gIHdpZHRoOiA2MHB4OyB9XG5cbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGkgLlRvb2xiYXItTGFiZWwgPiBhIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlpvb20tT3V0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlpvb20tSW4tQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX199KTsgfVxuXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pOyB9XG5cbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19ffSk7IH1cblxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX199KTsgfVxuXG4uUmVhZGVyLUJvdHRvbS1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXRvcDogI2NjYyAxcHggc29saWQ7IH1cblxuLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxODVweDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLlJlYWRlci1CdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XG4gIHdpZHRoOiAxODRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgYm9yZGVyOiAwOyB9XG5cbi5SZWFkZXItQnV0dG9uLkNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhOyB9XG5cbi5TaWduLUxheWVycG9wICNzaWduVGV4dEFyZWEuVGFiLUNvbnRlbnRzIC5TaWduLUhlYWQge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4OyB9XG5cbiNzaWduVGV4dElucHV0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY4cHgpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuI3NpZ25UZXh0Q3JlYXRlIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTsgfVxuXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIC5zaWduVHlwZUxpc3Qge1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0IGxpIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDc1cHg7IH1cblxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3QgbGkub24gLmNhbnZhc193cmFwLFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwuc2lnblR5cGVMaXN0IGxpLm9uIC5jYW52YXNfd3JhcCB7XG4gIGJvcmRlcjogc29saWQgNHB4ICMwMGFhZGE7IH1cblxuLkVkaXRvci1BdHRyaWJ1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDNkM2QzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xuICB6LWluZGV4OiA5OTk5OTsgfVxuXG4uY29sb3ItcGlja2VyIHtcbiAgei1pbmRleDogOTk5OTk7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuRGl2aWRlciB7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3cgLlRpdGxlLVdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3cgLlRpdGxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1XcmFwIC5zZWxlY3QyLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICBib3JkZXI6IG5vbmU7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIgPiBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cblxuLkF0dHJpYnV0ZS1JbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5BdHRyaWJ1dGUtVGV4dGFyZWEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiBub25lO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IH1cblxuLlRpdGxlLVRvb2x0aXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gIHotaW5kZXg6IDA7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcCB7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzIC5iZzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzIC5pYy10b29sdGlwOmJlZm9yZSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19ffSk7IH1cblxuLkF0dHJpYnV0ZS1CdG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAzMHB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XG4gIHdpZHRoOiAxODRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgYm9yZGVyOiAwOyB9XG5cbi5Db2xvci1CdXR0b24tV3JhcCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkNvbG9yLUJ1dHRvbiB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbjpob3Zlcixcbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbi5TZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0ID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQ6aG92ZXIgPiBpOjpiZWZvcmUsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdC5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlcjpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXIuU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodDpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodC5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX199KTsgfVxuXG4uRmllbGQtRGVsZXRlLUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMnB4O1xuICB0b3A6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgei1pbmRleDogOTk5OTsgfVxuXG4uTUVNTy1Qcm9wZXJ0eS1CdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjJweDtcbiAgdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB6LWluZGV4OiA5OTk5OyB9XG5cbi5Oby1FdmVudC1MYXllciAuRmllbGQtRGVsZXRlLUJ1dHRvbixcbi5Oby1FdmVudC1MYXllciAuTUVNTy1Qcm9wZXJ0eS1CdXR0b24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLkNhbGNDb250YWluZXIge1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMzIwcHg7IH1cblxuLkNhbGNDb250YWluZXIgLkZpZWxkLURlbGV0ZS1CdXR0b24ge1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDsgfVxuXG4uQ2FsY0Rpc3BsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTU4LCAyMTgsIDAuMik7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNHB4OyB9XG5cbi5DYWxjQnV0dG9ucyB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7IH1cblxuLkNhbGNSb3cge1xuICB3aWR0aDogMjgwcHg7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5DYWxjQnV0dG9ucyBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNlY2VkZWY7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzVFNTg1ODtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5DYWxjRGlzcGxheSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwIDI1cHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI1JlYWRlclZpZXdlckNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NnB4IC0gNTVweCk7IH1cbiAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMSksXG4gIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDIpLFxuICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCgzKSxcbiAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoNCksXG4gIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDcpIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5TaWduLUxheWVycG9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA0MTFweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IGNhbGMoKDEwMCUgLSA0MTFweCkgLyAyKTtcbiAgICBtYXJnaW46IDAgNXB4OyB9XG4gIC5TaWduLUxheWVycG9wIC5Qb3B1cC1IZWFkIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5Qb3B1cC1Cb2R5IHtcbiAgICBtYXgtaGVpZ2h0OiAzNjhweDtcbiAgICBoZWlnaHQ6IDM2OHB4OyB9XG4gIC5TaWduLVRhYi1Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5Qb3B1cC1UYWItTWFpbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpOyB9XG4gIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEge1xuICAgIGJvcmRlcjogbm9uZTsgfVxuICAuUG9wdXAtRm9vdCB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7IH1cbiAgLlBvcHVwLUZvb3QgLmJ0bl9jb21tb24ge1xuICAgIG1pbi13aWR0aDogOTdweCAhaW1wb3J0YW50OyB9XG4gIC5SZWFkZXItQm90dG9tLUNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA1NXB4OyB9XG4gIC5SZWFkZXItQm90dG9tLUNvbnRhaW5lciA+IGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAuUmVhZGVyLUJ1dHRvbiB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1cHgpIC8gMSk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNDVweDsgfVxuICAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsLnNpZ25UeXBlTGlzdCBsaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCBsaSAuY2FudmFzX3dyYXAge1xuICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuI1ByZXZpZXdSZWFkZXJWaWV3ZXJDb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDZweDtcbiAgbGVmdDogMzAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGluc2V0OiA0NnB4IDMwMHB4IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NnB4IC0gODFweCk7IH1cblxuLlByZXZpZXctQ29tcG9tZW50LkVkaXRvci1Db21wb25lbnQge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NnB4IC0gODBweCAtIDYwcHgpO1xuICB0b3A6IDQ2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAjY2NjIDFweCBzb2xpZDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLkVkaXRvci1Vc2VyLUNvbXBvbmVudF9Cb3gge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyIHtcbiAgcGFkZGluZzogMTNweCAyMHB4IDEzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIuTm8tQ2hpbGQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLkN1cnJlbnQge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmMDc0MyAhaW1wb3J0YW50OyB9XG5cbi5Vc2VyLUNvbXBvbmVudC1MaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lOyB9XG5cbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcbiAgcGFkZGluZzogN3B4IDAgN3B4IDExcHg7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaTpudGgtY2hpbGQoMSkge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zYXNzL3ByZXZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wZGZSZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9yZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGdCQUFnQixFQUFBOztBQUdsQjs7O0VBR0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLGdDQUFnQyxFQUFBOztBQUlsQztFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSxjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUdsQixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBR2xCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsb0NBQW9DLEVBQUE7O0FBS3RDO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFxQixFQUFBOztBQUd2QiwrQkFBQTtBQUNBO0VBQStCLGFBQVksRUFBQTs7QUFFM0MsZUFBQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFD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QUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcInBkZlJlYWRlci5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJyZWFkZXIuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuI1ByZXZpZXdSZWFkZXJWaWV3ZXJDb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQ2cHg7XFxyXFxuICBsZWZ0OiAzMDBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBpbnNldDogNDZweCAzMDBweCAwcHg7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NnB4IC0gODFweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5QcmV2aWV3LUNvbXBvbWVudC5FZGl0b3ItQ29tcG9uZW50IHtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCAtIDgwcHggLSA2MHB4KTtcXHJcXG4gIHRvcDogNDZweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBcXHJcXG4gIGJvcmRlci1yaWdodDogI2NjYyAxcHggc29saWQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Vc2VyLUNvbXBvbmVudF9Cb3gge1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLk5vLUNoaWxkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLkN1cnJlbnQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCAjZmYwNzQzICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5Vc2VyLUNvbXBvbmVudC1MaXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpIHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xcclxcbiAgcGFkZGluZzogN3B4IDAgN3B4IDExcHg7XFxyXFxufVxcclxcblxcclxcbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGk6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cIixcIlxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDs7XFxyXFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLk91dGVyLUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLk1haW5Db250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWluLXdpZHRoOiAzMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI1RlbXBsYXRlUERGVmlld2VyLCBcXHJcXG4jUmVhZGVyUERGVmlld2VyLCBcXHJcXG4jUHJldmlld1JlYWRlclBERlZpZXdlciB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uVmlld2VyLUNvbnRhaW5lciB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBpbnNldDogMTI4cHggMzAwcHggMzAwcHg7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHggLSAzMDBweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHggLSA2NHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLy9cXHJcXG4uVmlld2VyLUNvbnRhaW5lci5mdWxsIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBpbnNldDogdW5zZXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLy9cXHJcXG4uVmlld2VyLUNvbnRhaW5lci5sZWZ0ZnVsbCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC8vIHRvcDogMHB4O1xcclxcbiAgLy8gbGVmdDogMHB4O1xcclxcbiAgaW5zZXQ6IDEyOHB4IDBweCAzMDBweCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KSAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vL1xcclxcbi5WaWV3ZXItQ29udGFpbmVyLnJpZ2h0ZnVsbCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIC8vIHRvcDogMHB4O1xcclxcbiAgLy8gbGVmdDogMHB4O1xcclxcbiAgaW5zZXQ6IDEyOHB4IDMwMHB4IDBweCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KSAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uVGVtcGxhdGUtU2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtSGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzNnB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxcclxcblxcclxcbi8qIFRoZSBzbGlkZXIgKi9cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgYm94LXNoYWRvdzogLTEuNnB4IDEuMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDJkMmQyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDQuNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlcjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyLlJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ldGVtcGxhdGUtZm9udC1pbmZvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBNYWxndW5Hb3RoaWM7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLk1hcmdpbi1SaWdodC01IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AaW1wb3J0ICAgICAnLi8uLi9jc3Mvdmlld2VyLmNzcyc7XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCJwZGZSZWFkZXIuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuXFxyXFxuI1JlYWRlclZpZXdlckNvbnRhaW5lciB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDZweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBpbnNldDogNDZweCAwIDAgMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NnB4IC0gODFweCk7XFxyXFxufVxcclxcblxcclxcbi5FbXB0eUZpZWxkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgZGFzaGVkIDJweCAhaW1wb3J0YW50O1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1QYWdlLU1lbW8tTGF5ZXIgdGV4dGFyZWEge1xcclxcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLk5vLUV2ZW50LUxheWVyIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tUG9wdXAge1xcclxcbiAgICB6LWluZGV4OiA5OTk5MDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tUG9wdXA6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtQmctV3JhcCB7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3Age1xcclxcbiAgICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIHdpZHRoOiA1NjJweDtcXHJcXG4gICAgaGVpZ2h0OiA1NDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlBvcHVwLUhlYWQge1xcclxcbiAgICBwYWRkaW5nOiAzMnB4IDBweCAyMHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1IZWFkIC5UaXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzExMTExMTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLUJvZHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDU0M3B4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogIzMyMzIzMjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCAtIDg1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uUG9wdXAtRm9vdCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAzMXB4IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5Qb3B1cC1Gb290IC5idG5fY29tbW9uIHsgXFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzNweDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCAzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTRweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1Gb290IC5idG5fY29tbW9uLmJ0bl9jYW5jZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLUZvb3QgLmJ0bl9jb21tb24uYnRuX3Jlc2V0IHsgXFxyXFxuICAgIGNvbG9yOiAjMDBhYWRhO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1UYWItQ29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA1NjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLVRhYi1NYWluIHtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcclxcbiAgICAtbXMtZmxleC1hbGlnbi1zZWxmOiBzdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIFxcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xcclxcbiAgICBwYWRkaW5nOiAwIDMxcHg7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1UYWItTWFpbiBsaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aWR0aDogMTI2cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLVRhYi1NYWluIGxpIGEsIFxcclxcbi5Qb3B1cC1UYWItTWFpbiBsaSBzcGFuIHtcXHJcXG4gICAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLlBvcHVwLVRhYi1NYWluIGxpLm9uIHtcXHJcXG4gICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7ICAgXFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1UYWItTWFpbiBsaS5vbiBhLCBcXHJcXG4uUG9wdXAtVGFiLU1haW4gbGkub24gc3BhbiB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmOyBcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDU2MnB4O1xcclxcbiAgICBoZWlnaHQ6IDM1NXB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDMxcHggMCAzMXB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzY2NjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgI3JlZ2lzdGVyZWRBcmVhLlNpZ24tQXJlYS5EcmF3LUFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuaW5uZXJib3gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogLTFweCAwIDAgLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuc2lnbnBhZCwgXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhLkRyYXctQXJlYSAuc2lnbk1zZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjY1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tSGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIHNlbGVjdCwgXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1IZWFkIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1IZWFkIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxNTNweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLy4uL2Nzcy9pbWFnZXMvaWNfcHVsbGRvd24ucG5nKSBuby1yZXBlYXQgY2FsYygxMDAlIC0gOHB4KSA1MCUgI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uU2lnbi1IZWFkIC5idG5fY29tbW9uLmxpbmVfYmx1ZXtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWluLXdpZHRoOiAxMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwIDE0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUhlYWQgLmJ0bl9jb21tb24ubGluZV9ibHVlIHtcXHJcXG4gICAgY29sb3I6ICMwZTczYzMgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBlNzNjMztcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuc2lnblR4dFdyYXAge1xcclxcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDc0cHgpO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCxcXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGksXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwgbGkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIC13ZWJraXQtZmxleC1iYXNpczogMzMuMzMlO1xcclxcbiAgICAtbXMtZmxleC1iYXNpczogMzMuMzMlO1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMy4zMyU7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGkgLmNhbnZhc193cmFwLFxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsIGxpIC5jYW52YXNfd3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwgbGkgY2FudmFzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwgbGkgLmNhbnZhc193cmFwIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgPiAuaW5uZXJib3gge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAgLmltZ191cGxvYWRfYXJlYSB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ybmVyX3BvaW50X2FyZWEge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnB4KTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAycHgpO1xcclxcbiAgICBtYXJnaW46IC0xcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIFxcclxcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhIC5pbm5lcmJveCAuYmdfYXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLy4uL2Nzcy9pbWFnZXMvYmdfdXBsb2FkLnBuZykgcmVwZWF0IDAgMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uY29ybmVyX3BvaW50X2FyZWEgLmlubmVyYm94IC5pbWcge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb3JuZXJfcG9pbnRfYXJlYSAuaW5uZXJib3ggLmltZyBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDQ3OHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcm5lcl9wb2ludF9hcmVhIC50eHRfZ3VpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uY29ybmVyX3BvaW50X2FyZWE6aG92ZXIgLnR4dF9ndWlkZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwxMjgsMTI4LDAuOCk7XFxyXFxufVxcclxcbi5pbWdfdXBsb2FkX2FyZWEgLnVwbG9hZF9ub3RlIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwIDA7XFxyXFxuICAgIGNvbG9yOiAjMzIzMjMyO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbn1cXHJcXG4uaW1nX3VwbG9hZF9hcmVhIC51cGxvYWRfbm90ZSBwIHtcXHJcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi5Qb3B1cC1Cb2R5IC5zaWduTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLW1zLWZsZXgtcGFjazogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ24tc2VsZjogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMCBub25lO1xcclxcbn1cXHJcXG4uUG9wdXAtQm9keSAuc2lnbkxpc3QgLnNpZ25faXRlbSB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDAgbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25MaXN0IC5zaWduX2l0ZW0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAzNDFweDtcXHJcXG4gICAgaGVpZ2h0OiAyNTRweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl9jb250X2FyZWEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uUG9wdXAtQm9keSAuc2lnbkxpc3QgLnNpZ25fdGl0IHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xcclxcbiAgICBjb2xvcjogIzZhNzI3NjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl90aXQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjMzIzMjMyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5zaWduTGlzdCAuc2lnbl9pdGVtIC5zaWduX2NvbnQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlY2VmZjE7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLlBvcHVwLUJvZHkgLnNpZ25MaXN0IC5zaWduX2NvbnQge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIC1tcy1mbGV4LWFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25MaXN0IC5zaWduX2l0ZW0gLnNpZ25fY29udCBjYW52YXMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uc2lnbkxpc3QgLnNpZ25faXRlbSAuc2lnbl9jb250IC5pbWdfc3RhbXAge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cC5DZW50ZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tSW4tQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b24ge1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vZmlyc3QtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b246aG92ZXIsXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpob3ZlcixcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmhvdmVyLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUZpcnN0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpcnN0LXBhZ2UtaG92ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tRmlyc3QtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vZmlyc3QtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9wcmV2LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9wcmV2LXBhZ2UtaG92ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tUHJldi1CdXR0b246ZGlzYWJsZWQgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9wcmV2LXBhZ2UucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTmV4dC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbmV4dC1wYWdlLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbmV4dC1wYWdlLWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmRpc2FibGVkID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbmV4dC1wYWdlLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLUxhc3QtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2xhc3QtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2xhc3QtcGFnZS1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uR290by1MYXN0LUJ1dHRvbjpkaXNhYmxlZCA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2xhc3QtcGFnZS5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1GaXJzdC1CdXR0b246ZGlzYWJsZWQsXFxyXFxuLlJlYWRlci1CdXR0b24uR290by1QcmV2LUJ1dHRvbjpkaXNhYmxlZCxcXHJcXG4uUmVhZGVyLUJ1dHRvbi5Hb3RvLU5leHQtQnV0dG9uOmRpc2FibGVkLFxcclxcbi5SZWFkZXItQnV0dG9uLkdvdG8tTGFzdC1CdXR0b246ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1Jbi1CdXR0b24sXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLlJlYWRlci1CdXR0b24uWm9vbS1PdXQtQnV0dG9uID4gaSxcXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbiA+IGksXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uID4gaSxcXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvbiA+IGksXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uID4gaSB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0OyBcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg2KSxcXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCgxMCkge1xcclxcbiAgICB3aWR0aDogNjFweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoOCkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Ub29sYmFyLUdyb3VwIC5Ub29sYmFyLUZpZWxkLlBhZ2UtTnVtYmVyIHsgXFxyXFxuICAgIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMzNweDtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgICBjb2xvcjogIzMzMzMzMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxyXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXJlZm94ICovXFxyXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLVRvb2xiYXItR3JvdXAgLlRvb2xiYXItTGFiZWwgeyBcXHJcXG4gICAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvb2xiYXItQnV0dG9uLURpdmlkZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgbWluLXdpZHRoOiAxcHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNmM4ZjtcXHJcXG4gIG1hcmdpbjogMCAzMHB4IDAgMzBweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC8q7JqU7IaM7J2YIOuGkuydtOydmCDrsJgoNTAlKSDrp4ztgbwg7JyE66GcIOydtOuPmSovXFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDcpIHtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGkgLlRvb2xiYXItTGFiZWwgPiBhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3pvb20tc2VsZWN0LWRvd24ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tT3V0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLW91dC1idG4yLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLU91dC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLW91dC1idG4yLWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5ab29tLUluLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLWluLWJ0bjIucG5nXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLlpvb20tSW4tQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4yLWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vZmllbGQtaW5wdXQtbW9kZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7ICBcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWlucHV0LW1vZGUtaG92ZXIuc3ZnXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUlucHV0LU1vZGUtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL21lbW8taW5wdXQtbW9kZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUgeyAgXFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9tZW1vLUlucHV0LW1vZGUtaG92ZXIuc3ZnXFxcIik7XFxyXFxufVxcclxcbi5SZWFkZXItQnV0dG9uLlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9tZW1vLWFkZC1tb2RlLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG4uUmVhZGVyLUJ1dHRvbi5SZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuLlJlYWRlci1CdXR0b24uUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHsgIFxcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vbWVtby1hZGQtbW9kZS1ob3Zlci5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4OyBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3JkZXItdG9wOiAjY2NjIDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLlJlYWRlci1Cb3R0b20tQ29udGFpbmVyID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbi8vICAgd2lkdGg6IDM3M3B4O1xcclxcbi8vICAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgd2lkdGg6IDE4NXB4O1xcclxcbiAgcGFkZGluZzogMTVweCAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLUJ1dHRvbiB7XFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0NzQ3O1xcclxcbiAgd2lkdGg6IDE4NHB4O1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uUmVhZGVyLUJ1dHRvbi5Db25maXJtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wICNzaWduVGV4dEFyZWEuVGFiLUNvbnRlbnRzIC5TaWduLUhlYWQge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnblRleHRJbnB1dCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2OHB4ICk7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25UZXh0Q3JlYXRlIHtcXHJcXG4gICAgd2lkdGg6IDY4cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCAuc2lnblR5cGVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3QgIGxpIHtcXHJcXG4gICAgd2lkdGg6IDE0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0IGxpLm9uIC5jYW52YXNfd3JhcCxcXHJcXG4uU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bC5zaWduVHlwZUxpc3QgbGkub24gLmNhbnZhc193cmFwIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggIzAwYWFkYTsgICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5FZGl0b3ItQXR0cmlidXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2QzZDNkMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbiAuc2VsZWN0Mi1kcm9wZG93bi0tYmVsb3cge1xcclxcbiAgICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2xvci1waWNrZXIge1xcclxcbiAgICB6LWluZGV4OiA5OTk5OTtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3c6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMgLkRpdmlkZXIge1xcclxcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZS1XcmFwe1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgXFxyXFxuICAgIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6ICMzMzMzMzM7ICBcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIFxcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1XcmFwIC5zZWxlY3QyLWNvbnRhaW5lciB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93LVdyYXAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIge1xcclxcbiAgICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciA+IGlucHV0IHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1JbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLVRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVGl0bGUtVG9vbHRpcCB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDAgMCAwIDZweDtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcCB7XFxyXFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXR0cmlidXRlLUNvbnRlbnRzIC5iZzpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcDpiZWZvcmUge1xcclxcbiAgICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi9jc3MvaW1hZ2VzL2ljLXRvb2x0aXAuc3ZnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5BdHRyaWJ1dGUtQnRuIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbi5UZW1wbGF0ZS1CdXR0b24ge1xcclxcbiAgICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NDc0NztcXHJcXG4gICAgd2lkdGg6IDE4NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuICAuQ29sb3ItQnV0dG9uLVdyYXAge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLkNvbG9yLUJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMnB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b246aG92ZXIsXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b24uU2VsZWN0ZWQge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LFxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgfVxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbiAgXFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdCA+IGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWxlZnQucG5nXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tY2VudGVyLnBuZ1xcXCIpO1xcclxcbiAgfVxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0ID4gaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQucG5nXFxcIik7XFxyXFxuICB9XFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYi5zdmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0OmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbiAgLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQuU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gICAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tbGVmdC1ob3Zlci5wbmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXI6aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuICAuVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyLlNlbGVjdGVkID4gaTo6YmVmb3JlICB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci1ob3Zlci5wbmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodDpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodC5TZWxlY3RlZCA+IGk6OmJlZm9yZSAge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1yaWdodC1ob3Zlci5wbmdcXFwiKTtcXHJcXG4gIH1cXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4gIC5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbi5TZWxlY3RlZCA+IGk6OmJlZm9yZSAge1xcclxcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYi1ob3Zlci5zdmdcXFwiKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uRmllbGQtRGVsZXRlLUJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0yMnB4O1xcclxcbiAgICB0b3A6IC0yMHB4O1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWRlbGV0ZS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi5NRU1PLVByb3BlcnR5LUJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IC0yMnB4O1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9wcm9wZXJ0aWVzLnN2Z1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLk5vLUV2ZW50LUxheWVyIC5GaWVsZC1EZWxldGUtQnV0dG9uLFxcclxcbi5Oby1FdmVudC1MYXllciAuTUVNTy1Qcm9wZXJ0eS1CdXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5DYWxjQ29udGFpbmVyIHtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5DYWxjQ29udGFpbmVyIC5GaWVsZC1EZWxldGUtQnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICB9XFxyXFxuICAuQ2FsY0Rpc3BsYXkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTU4LCAyMTgsIDAuMik7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE0cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgLkNhbGNCdXR0b25zIHtcXHJcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcXHJcXG4gIH1cXHJcXG4gIC5DYWxjUm93IHtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gIH1cXHJcXG4gIC5DYWxjQnV0dG9ucyBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlY2VkZWY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzVFNTg1ODtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC5DYWxjRGlzcGxheSBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDI1cHg7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxcclxcblxcclxcbiAgICAjUmVhZGVyVmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCAtIDU1cHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDEpLFxcclxcbiAgICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCgyKSxcXHJcXG4gICAgLlJlYWRlci1Ub29sYmFyLUdyb3VwID4gdWwgPiBsaTpudGgtY2hpbGQoMyksXFxyXFxuICAgIC5SZWFkZXItVG9vbGJhci1Hcm91cCA+IHVsID4gbGk6bnRoLWNoaWxkKDQpLFxcclxcbiAgICAuUmVhZGVyLVRvb2xiYXItR3JvdXAgPiB1bCA+IGxpOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lOyAgICBcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLlNpZ24tTGF5ZXJwb3Age1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MTFweDtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHRvcDogY2FsYygoMTAwJSAtIDQxMXB4KSAvIDIpO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuU2lnbi1MYXllcnBvcCAuUG9wdXAtSGVhZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Qb3B1cC1Cb2R5IHtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDM2OHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNjhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuU2lnbi1UYWItQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Qb3B1cC1UYWItTWFpbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy/rsJjsnZHtmJXsnbwg65WMIOuniOyngOuniSDtg63snYQg7JWI67O07J206rKMIO2VtOuGk+yVmOuKlOuNsCwg7KCc6rGwLiBcXHJcXG4gICAgLlBvcHVwLVRhYi1NYWluIGxpOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIHsgXFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYS5EcmF3LUFyZWEge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Qb3B1cC1Gb290IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Qb3B1cC1Gb290IC5idG5fY29tbW9uIHsgXFxyXFxuICAgICAgICBtaW4td2lkdGg6IDk3cHggIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuUmVhZGVyLUJvdHRvbS1Db250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuUmVhZGVyLUJvdHRvbS1Db250YWluZXIgPiBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIC5SZWFkZXItQnV0dG9uIHtcXHJcXG4gICAgLy8gICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNXB4KSAvIDIpO1xcclxcbiAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIC8vICAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIC8vIH1cXHJcXG5cXHJcXG4gICAgLlJlYWRlci1CdXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1cHgpIC8gMSk7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnNpZ25UeHRXcmFwIHVsLnNpZ25UeXBlTGlzdCBsaSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bCBsaSAuY2FudmFzX3dyYXAge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcmV2aWV3bW9kU2Fzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXZpZXcuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXZpZXcuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==