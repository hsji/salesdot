(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("templatemodSass", [], factory);
	else if(typeof exports === 'object')
		exports["templatemodSass"] = factory();
	else
		root["templatemodSass"] = factory();
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/templateMod.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/templateMod.scss ***!
  \************************************************************************************************************/
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




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/signfield.svg */ "./css/icon/signfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/textfield.svg */ "./css/icon/textfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/multilinefield.svg */ "./css/icon/multilinefield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/labelfield.svg */ "./css/icon/labelfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/checkboxfield.svg */ "./css/icon/checkboxfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/radiobutton.svg */ "./css/icon/radiobutton.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/comboboxfield.svg */ "./css/icon/comboboxfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/imagefield.svg */ "./css/icon/imagefield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/datefield.svg */ "./css/icon/datefield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/numberfield.svg */ "./css/icon/numberfield.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/images/ic-tooltip.svg */ "./css/images/ic-tooltip.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/undo.png */ "./css/icon/undo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/redo.png */ "./css/icon/redo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-left-btn.png */ "./css/icon/align-left-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-center-btn.png */ "./css/icon/align-center-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-right-btn.png */ "./css/icon/align-right-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-top-btn.png */ "./css/icon/align-top-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-middle-btn.png */ "./css/icon/align-middle-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/align-bottom-btn.png */ "./css/icon/align-bottom-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-out-btn.png */ "./css/icon/zoom-out-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-in-btn.png */ "./css/icon/zoom-in-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/zoom-select-down-1.png */ "./css/icon/zoom-select-down-1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/component-arrow-btn.png */ "./css/icon/component-arrow-btn.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-left.png */ "./css/icon/text-align-left.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-center.png */ "./css/icon/text-align-center.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-right.png */ "./css/icon/text-align-right.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/b.svg */ "./css/icon/b.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-left-hover.png */ "./css/icon/text-align-left-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-center-hover.png */ "./css/icon/text-align-center-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/text-align-right-hover.png */ "./css/icon/text-align-right-hover.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/b-hover.svg */ "./css/icon/b-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/field-delete.png */ "./css/icon/field-delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./../css/icon/asterisk.png */ "./css/icon/asterisk.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_32___);
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
  width: calc(100% - 300px);
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
  width: calc(100%) !important;
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

.Editor-Component_Box div ul > li > span.tit, .Editor-Toolbar-Group.Center > span, .Attribute-Contents-Row .Title, .Attribute-Contents-Row-CheckBox-Container, .Template-Button, .Editor-Toolbar-Group.Right #scaleSelectContainer.Toolbar-Label, .User-Component-List > li, .User-Component-List > li:nth-child(1), .Editor-Send-Component_Box div ul > li > span.tit, .Editor-Send-Component_Box div ul > p, .Editor-Send-Component_Box div ul > p > span.tit-send {
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

@keyframes HideLeftPanelBtn {
  from {
    left: 300px; }
  to {
    left: 0px; } }

@keyframes ShowLeftPanelBtn {
  from {
    left: 0px; }
  to {
    left: 300px; } }

@keyframes HideLeftPanel {
  from {
    left: 0px; }
  to {
    left: -300px; } }

@keyframes ShowLeftPanel {
  from {
    left: -300px; }
  to {
    left: 0px; } }

.Editor-Component {
  width: 300px;
  height: calc(100% - 64px);
  top: 64px;
  position: absolute;
  background-color: #ffffff;
  border-right: #ccc 1px solid;
  overflow: auto; }

.Editor-Right-Component {
  width: 0px; 
  height: calc(100% - 64px - 80px);
  height: calc(100% - 64px);
  top: 64px;
  position: absolute;
  background-color: #ffffff;
  right: 0px;
  border-right: #ccc 1px solid;
  overflow: auto; }

.Editor-Component-Active-Button {
  position: absolute;
  width: 23px;
  height: 120px;
  background-color: #fff;
  left: 300px;
  top: calc(50% - 60px);
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #cccccc; }

.Editor-Component_Box div ul {
  list-style: none;
  padding: 20px; }

.Editor-Component_Box div ul > li {
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #b6c2d0;
  background-color: #ffffff;
  margin: 0 0 5px;
  padding: 8px 0px 8px 20px;
  width: 240px;
  height: 18px;
  display: flex; }

.Editor-Component_Box div ul > li.selected,
.Editor-Component_Box div ul > li:hover {
  border: solid 1px #96b3d5;
  background-color: #dce6f3; }

.Editor-Component_Box div ul > li.disabled {
  border: solid 1px #b6c2d0;
  background-color: #ffffff;
  opacity: 0.3; }

.Editor-Component_Box div ul > li > span.tit {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #333333; }

.Editor-Component_Box div ul > li > span:before {
  content: "";
  display: inline-block;
  vertical-align: middle; }

.Editor-Component_Box div ul > li > span.sign-field-ico {
  height: 20px; }

.Editor-Component_Box div ul > li > span.sign-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 18px 20px;
  height: 20px;
  width: 18px;
  margin: 0 15px 0 0; }

.Editor-Component_Box div ul > li > span.text-field-ico {
  height: 20px; }

.Editor-Component_Box div ul > li > span.text-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.multiline-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.label-field-ico {
  height: 21px; }

.Editor-Component_Box div ul > li > span.label-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 21px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.check-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.radio-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.combo-field-ico {
  height: 16px; }

.Editor-Component_Box div ul > li > span.combo-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  margin: 0 13px 0 0;
  background-size: 27px 16px;
  height: 16px;
  width: 27px; }

.Editor-Component_Box div ul > li > span.image-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  margin: 0 13px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Component_Box div ul > li > span.date-field-ico {
  height: 20px; }

.Editor-Component_Box div ul > li > span.date-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  margin: 0 12px 0 0;
  background-size: 21px 20px;
  height: 20px;
  width: 21px; }

.Editor-Component_Box div ul > li > span.number-field-ico {
  height: 19px; }

.Editor-Component_Box div ul > li > span.number-field-ico:before {
  height: 19px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  margin: 0 14px 0 0;
  background-size: 19px 19px;
  height: 19px;
  width: 19px; }

.hide > .fthandle {
  display: none; }

#DragBoxGroup > g > rect {
  stroke-width: 1;
  stroke: red; }

.Top-Toolbar {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  height: 64px;
  width: 100%;
  background-color: #002c5f;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between; }

.Editor-Toolbar {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  height: 64px;
  inset: 64px 300px 0px;
  width: calc(100% - 300px);	
  min-width: 860px;
  background: linear-gradient(#84A9F9, #6E92F6);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }

.Editor-Toolbar.leftfull {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  height: 64px;
  inset: 64px 0px 300px;
  width: calc(100%);
  min-width: 860px;
  background: linear-gradient(#84A9F9, #6E92F6);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }

.Editor-Toolbar.rightfull {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  height: 64px;
  inset: 64px 300px 0px;
  width: calc(100% - 300px);
  min-width: 860px;
  background: linear-gradient(#84A9F9, #6E92F6);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }

.Editor-Toolbar-Group {
  padding: 15px 0 15px 0; }

.Editor-Toolbar-Group.Left {
  padding-left: 40px;
  width: 281px; }

.Editor-Toolbar-Group.Center {
  width: calc(100% - 281px - 480px); }

.Editor-Toolbar-Group.Center > span {
  line-height: 34px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #e9eaed;
  width: 100%;
  display: block; }

.Editor-Toolbar-Group.Right {
  padding-right: 40px;
  width: 480px; }

.Attribute-kind {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: flex-start;
  -ms-flex-align-self: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 46px;
  padding: 0 14px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box; }

.Attribute-kind .Title {
  font-size: 14px;
  font-weight: 500;
  color: #323232;
  margin-left: 8px; }

.Attribute-Contents {
  list-style: none; }

.Editor-Attribute {
  position: absolute;
  z-index: 999;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
  padding: 20px; }

.Editor-Attribute.Text-Field {
  width: 298px; }

.Editor-Attribute.Base-Field,
.Editor-Attribute.Sign-Field {
  width: 200px; }

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

.Attribute-Contents-Row:first-child .Title {
  font-size: 14px;
  line-height: 14px; }

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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }

.Title-Tooltip-Layer {
  display: none;
  position: absolute;
  right: -10px;
  top: 26px;
  padding-top: 8px; }

.Title-Tooltip-Layer .ic-pointer {
  position: absolute;
  right: 14px;
  top: 0; }

.Title-Tooltip-Layer .Title-Tooltip-Desc {
  width: 191px;
  padding: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-color: #323232;
  text-align: left;
  border-radius: 4px;
  box-sizing: border-box; }

.Title-Tooltip:hover .Title-Tooltip-Layer {
  display: block; }

.Editor-Bottom-Container {
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  border-top: #ccc 1px solid;
  z-index: 100; }

.Editor-Bottom-Container > div {
  margin: 0 auto;
  width: 373px;
  padding: 15px 0;
  display: flex; }

.Editor-Right-Component .Button-List {
  padding: 15px 15px;
  display: flex; }

.Template-Button {
  border-radius: 14px;
  background-color: #002c5ff2;
  width: 184px;
  height: 48px;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -0.75px;
  border: 0; }

.Template-Button.Confirm {
  background-color: #00aada; }

.Template-Button.Transparent {
  width: 118px;
  height: 34px;
  background-color: transparent;
  border-radius: 4px; }

.Template-Button.Toolbar-Border {
  border: solid 1px #eee; }

.Template-Button.Transparent:hover {
  background-color: #001f46 !important;
  border: solid 1px #4d6c8f; }

.Template-Button.Toolbar-Btn-Margin {
  margin-right: 20px; }

.Editor-Toolbar-Group.Right > ul {
  list-style: none;
  height: 100%; }

.Editor-Toolbar-Group.Right > ul > li {
  float: left;
  height: 100%;
  min-width: 34px; }

.Editor-Toolbar-Group.Right > ul > li > div {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%; }

.Editor-Toolbar-Group.Right > ul > li > div > button {
  position: absolute;
  top: 50%;
  /*요소의 높이의 반(50%) 만큼 위로 이동*/
  transform: translateY(-50%); }

.Editor-Toolbar-Group.Right > ul > li:nth-child(4) {
  min-width: 22px; }

.Editor-Toolbar-Group.Right > ul > li:nth-child(8) {
  min-width: 70px;
  margin-left: 50px;
  margin-right: 20px; }

.Toolbar-Button-Divider {
  display: inline-block;
  width: 1px !important;
  min-width: 1px !important;
  height: 18px !important;
  background-color: #4d6c8f;
  margin: 0 10px 0 12px;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  /*요소의 높이의 반(50%) 만큼 위로 이동*/
  transform: translateY(-50%); }

.Template-Button.Undo-Button {
  margin-right: 5px; }

i.Undo-Button::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  margin-right: 8px; }

i.Redo-Button::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  margin-right: 8px; }

.Template-Button.Align-Left-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Align-Left-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }

.Template-Button.Align-Center-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Align-Center-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }

.Template-Button.Align-Right-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle;
  min-width: 24px; }

.Template-Button.Align-Right-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }

.Template-Button.Align-Top-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Align-Top-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }

.Template-Button.Align-Middle-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Align-Middle-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }

.Template-Button.Align-Bottom-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Align-Bottom-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }

.Template-Button.Zoom-Out-Button,
.Template-Button.Zoom-In-Button {
  width: 34px;
  height: 34px;
  vertical-align: middle; }

.Template-Button.Zoom-Out-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }

.Template-Button.Zoom-In-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }

.Editor-Toolbar-Group.Right #scaleSelectContainer.Toolbar-Label {
  line-height: 34px;
  font-size: 16px;
  text-align: center;
  color: #e9eaed; }

.Editor-Toolbar-Group.Right .Toolbar-Label > a {
  color: #e9eaed !important; }

.Editor-Toolbar-Group.Right .Toolbar-Label > a {
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  display: block;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }

.Button-Icon-Component {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 999; }

.Arrow-Btn {
  left: calc(50% - 4px);
  position: absolute;
  top: 50%;
  /*요소의 높이의 반(50%) 만큼 위로 이동*/
  transform: translateY(-50%); }

.Reverse-Btn {
  transform: rotate(180deg) translateY(50%); }

.Arrow-Btn:before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }

.Left-Panel-Btn-Hide-Animation {
  animation-duration: 1s;
  animation-name: HideLeftPanelBtn;
  left: 0; }

.Left-Panel-Btn-Show-Animation {
  animation-duration: 1s;
  animation-name: ShowLeftPanelBtn;
  left: 300px; }

.Left-Panel-Hide-Animation {
  animation-duration: 1s;
  animation-name: HideLeftPanel;
  left: -300px; }

.Left-Panel-Show-Animation {
  animation-duration: 1s;
  animation-name: ShowLeftPanel;
  left: 0px; }

.Right-Panel-Btn-Hide-Animation {
  animation-duration: 1s;
  animation-name: HideRightPanelBtn;
  Right: 0; }

.Right-Panel-Btn-Show-Animation {
  animation-duration: 1s;
  animation-name: ShowRightPanelBtn;
  Right: 300px; }

.Right-Panel-Hide-Animation {
  animation-duration: 1s;
  animation-name: HideRightPanel;
  Right: -300px; }

.Right-Panel-Show-Animation {
  animation-duration: 1s;
  animation-name: ShowRightPanel;
  Right: 0px; }

.Editor-User-Component_Box {
  padding: 0 20px;
  margin-bottom: 20px; }

.User-Component-List-Conatiner {
  padding: 13px 20px 13px 20px;
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #b6c2d0;
  background-color: #ffffff; }

.User-Component-List-Conatiner.No-Child {
  padding: 10px 20px; }

.User-Component-List-Conatiner.Current {
  border-radius: 4px;
  border: solid 2px #3e75ad; }

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

.Template-Button.Toggle-Button {
  border-radius: 4px;
  background-color: #e5e5e5;
  width: 32px;
  height: 32px; }

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

.Template-Button.Text-Align-Left > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }

.Template-Button.Text-Align-Center > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }

.Template-Button.Text-Align-Right > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }

.Template-Button.Text-Bold-Button > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }

.Template-Button.Text-Align-Left:hover > i::before,
.Template-Button.Text-Align-Left.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }

.Template-Button.Text-Align-Center:hover > i::before,
.Template-Button.Text-Align-Center.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_28___}); }

.Template-Button.Text-Align-Right:hover > i::before,
.Template-Button.Text-Align-Right.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_29___}); }

.Template-Button.Text-Bold-Button:hover > i::before,
.Template-Button.Text-Bold-Button.Selected > i::before {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_30___}); }

.Field-Delete-Button {
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_31___});
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
  z-index: 9999; }

.Asterisk-Icon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_32___});
  background-size: 11px 12px;
  height: 12px;
  width: 11px; }

/*
 발송 관련 입력폼
*/
.Editor-Send-Component_Box div ul {
  list-style: none;
  padding: 20px; }

.Editor-Send-Component_Box div ul > li {
  border-radius: 4px;
  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);
  background-color: aliceblue;
  margin: 0 0 20px;
  padding: 8px 0px 8px 20px;
  width: 240px;
  height: 18px;
  display: flex;
  border: solid 1px #ffffff;
  align-content: space-between;
  flex-wrap: wrap;
  flex-direction: column; }

.Editor-Send-Component_Box div ul > li.selected,
.Editor-Send-Component_Box div ul > li:hover {
  border: solid 1px #96b3d5;
  background-color: #dce6f3; }

.Editor-Send-Component_Box div ul > li.disabled {
  border: solid 1px #b6c2d0;
  background-color: #ffffff;
  opacity: 0.3; }

.Editor-Send-Component_Box div ul > li > span.tit {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #333333; }

.Editor-Send-Component_Box div ul > p {
  padding: 8px 0px 8px 20px; }

.Editor-Send-Component_Box div ul > p > span.tit-send {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #6c6d82e8; }

.Editor-Send-Component_Box div ul > p > span:before {
  content: "";
  display: inline-block;
  vertical-align: middle; }

.Editor-Send-Component_Box div ul > p > span.sign-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  margin: 0 3px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Send-Component_Box div ul > li > span:before {
  content: "";
  display: inline-block;
  vertical-align: middle; }

.Editor-Send-Component_Box div ul > li > span.sign-field-ico:before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  margin: 0 3px 0 0;
  background-size: 20px 20px;
  height: 20px;
  width: 20px; }

.Editor-Send-Component_Box div ul > li > input {
  margin: 0 10px 0 5px;
  border: solid 1px #b6c2d0;
  height: 18px;
  width: 160px; }

.Top-Toolbar > .Editor-Toolbar-Group.Left {
  padding-left: 40px;
  width: 100px; }

.Top-Toolbar > .Editor-Toolbar-Group.Right {
  padding-right: 40px;
  width: 100px; }
`, "",{"version":3,"sources":["webpack://./sass/templateMod.scss","webpack://./sass/pdfReader.scss","webpack://./sass/animation.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"pdfReader.scss\";\r\n@import \"animation.scss\";\r\n\r\n.Editor-Component {\r\n  width: 300px;\r\n  // height: calc(100% - 64px - 80px);\r\n  height: calc(100% - 64px);\r\n  top: 64px;\r\n  position: absolute;\r\n  background-color: #ffffff;\r\n  \r\n  border-right: #ccc 1px solid;\r\n  overflow: auto;\r\n}\r\n\r\n.Editor-Right-Component {\r\n  width: 300px;\r\n  height: calc(100% - 64px - 80px);\r\n  height: calc(100% - 64px);\r\n  top: 64px;\r\n  position: absolute;\r\n  background-color: #ffffff;\r\n  right: 0px;\r\n  border-right: #ccc 1px solid;\r\n  overflow: auto;\r\n}\r\n\r\n.Editor-Component-Active-Button {\r\n  position: absolute;\r\n  width: 23px;\r\n  height: 120px;\r\n  background-color: #fff;\r\n  left: 300px;\r\n  top: calc(50% - 60px);\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #cccccc;\r\n}\r\n\r\n.Editor-Component_Box div ul {\r\n  list-style: none;\r\n  padding: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li {\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  margin:  0 0 5px;\r\n  padding: 8px 0px 8px 20px;\r\n  width: 240px;\r\n  height: 18px;\r\n  display: flex;\r\n}\r\n\r\n.Editor-Component_Box div ul > li.selected,\r\n.Editor-Component_Box div ul > li:hover {\r\n  border: solid 1px #96b3d5;\r\n  background-color: #dce6f3;\r\n}\r\n\r\n.Editor-Component_Box div ul > li.disabled {\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  opacity: 0.3;\r\n\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.tit {\r\n  @extend %template-font-info;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  \r\n  color: #333333;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.sign-field-ico {\r\n  height: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.sign-field-ico:before {\r\n  background-image: url(\"./../css/icon/signfield.svg\");\r\n  background-size: 18px 20px;\r\n  height: 20px;\r\n  width: 18px;\r\n  margin: 0 15px 0 0;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.text-field-ico {\r\n  height: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.text-field-ico:before {\r\n  background-image: url(\"./../css/icon/textfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.multiline-field-ico:before {\r\n  background-image: url(\"./../css/icon/multilinefield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.label-field-ico {\r\n  height: 21px;\r\n}\r\n.Editor-Component_Box div ul > li > span.label-field-ico:before {\r\n  background-image: url(\"./../css/icon/labelfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 21px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.check-field-ico:before {\r\n  background-image: url(\"./../css/icon/checkboxfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.radio-field-ico:before {\r\n  background-image: url(\"./../css/icon/radiobutton.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.combo-field-ico {\r\n  height: 16px;\r\n}\r\n.Editor-Component_Box div ul > li > span.combo-field-ico:before {\r\n  background-image: url(\"./../css/icon/comboboxfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 27px 16px;\r\n  height: 16px;\r\n  width: 27px;\r\n}\r\n.Editor-Component_Box div ul > li > span.image-field-ico:before {\r\n  background-image: url(\"./../css/icon/imagefield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.date-field-ico {\r\n  height: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.date-field-ico:before {\r\n  background-image: url(\"./../css/icon/datefield.svg\");\r\n  margin: 0 12px 0 0;\r\n  background-size: 21px 20px;\r\n  height: 20px;\r\n  width: 21px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.number-field-ico {\r\n  height: 19px;\r\n}\r\n.Editor-Component_Box div ul > li > span.number-field-ico:before {\r\n  height: 19px;\r\n  background-image: url(\"./../css/icon/numberfield.svg\");\r\n  margin: 0 14px 0 0;\r\n  background-size: 19px 19px;\r\n  height: 19px;\r\n  width: 19px;\r\n}\r\n\r\n.hide > .fthandle {\r\n  display: none;\r\n}\r\n\r\n#DragBoxGroup > g > rect {\r\n  stroke-width: 1;\r\n  stroke: red;\r\n}\r\n\r\n// 0219 추가\r\n.Top-Toolbar {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow: hidden;\r\n  height: 64px;\r\n  width: 100%;\r\n\r\n  background-color: #002c5f;\r\n  \r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.Editor-Toolbar {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow: hidden;\r\n  height: 64px;\r\n  //width: 100%;\r\n  inset: 64px 300px 0px;\r\n  width: calc(100% - 300px - 300px);\r\n  min-width: 860px;\r\n\r\n  // background-color: #002c5f;\r\n  background: linear-gradient(#84A9F9, #6E92F6);\r\n  \r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n//240223 추가\r\n.Editor-Toolbar.leftfull {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow: hidden;\r\n  height: 64px;\r\n  //width: 100%;\r\n  inset: 64px 0px 300px;\r\n  width: calc(100% - 300px);\r\n  min-width: 860px;\r\n\r\n  // background-color: #002c5f;\r\n  background: linear-gradient(#84A9F9, #6E92F6);\r\n  \r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n//240223 추가\r\n.Editor-Toolbar.rightfull {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow: hidden;\r\n  height: 64px;\r\n  //width: 100%;\r\n  inset: 64px 300px 0px;\r\n  width: calc(100% - 300px);\r\n  min-width: 860px;\r\n\r\n  // background-color: #002c5f;\r\n  background: linear-gradient(#84A9F9, #6E92F6);\r\n  \r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.Editor-Toolbar-Group {\r\n  padding: 15px 0 15px 0;\r\n}\r\n.Editor-Toolbar-Group.Left {\r\n  padding-left: 40px;\r\n  width: 281px;\r\n}\r\n.Editor-Toolbar-Group.Center {\r\n  width: calc(100% - 281px - 480px);\r\n}\r\n\r\n.Editor-Toolbar-Group.Center > span {\r\n  @extend %template-font-info;\r\n  line-height: 34px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: #e9eaed;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.Editor-Toolbar-Group.Right {\r\n  padding-right: 40px;\r\n  width: 480px;\r\n}\r\n\r\n.Attribute-kind {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -ms-flex-pack: flex-start;\r\n  -ms-flex-align-self: flex-start;\r\n  justify-content: flex-start;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  height: 46px;\r\n  padding: 0 14px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Attribute-kind .Title {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #323232;\r\n  margin-left: 8px;\r\n}\r\n\r\n.Attribute-Contents {\r\n  list-style: none;\r\n}\r\n\r\n.Editor-Attribute {\r\n  position: absolute;\r\n  z-index: 999;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #d3d3d3;\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n}\r\n\r\n.Editor-Attribute.Text-Field {\r\n  width: 298px;\r\n} \r\n\r\n.Editor-Attribute.Base-Field,\r\n.Editor-Attribute.Sign-Field {\r\n  width: 200px;\r\n} \r\n\r\n.Attribute-Contents-Row {\r\n  position: relative;\r\n  margin-bottom: 16px;\r\n}\r\n.Attribute-Contents-Row:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.Attribute-Contents .Divider {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Attribute-Contents-Row .Title-Wrap{\r\n  position: relative;\r\n  margin-bottom: 7px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n}\r\n\r\n.Attribute-Contents-Row .Title {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;\r\n  \r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #333333;  \r\n  font-size: 13px;\r\n  line-height: 13px;\r\n  font-weight: bold;\r\n  \r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n.Attribute-Contents-Row:first-child .Title {\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n}\r\n\r\n.Attribute-Contents-Row-Wrap .select2-container {\r\n  border: solid 1px #d1d1d1;\r\n}\r\n\r\n.Attribute-Contents-Row-Wrap .select2-container .select2-selection--single {\r\n  border: none;\r\n}\r\n\r\n.Attribute-Contents-Row-CheckBox-Container {\r\n  @extend %template-font-info;\r\n  color: #333;\r\n  font-size: 12px;\r\n}\r\n\r\n.Attribute-Contents-Row-CheckBox-Container > input {\r\n    margin-right: 6px;\r\n    height: 16px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.Attribute-Input {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 34px;\r\n  line-height: 32px;\r\n  padding: 0 8px;\r\n  border: 1px solid #d2d2d2;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.Attribute-Textarea {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 0 8px;\r\n  border: 1px solid #d2d2d2;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-overflow: ellipsis;\r\n  overflow: auto;\r\n  resize: none;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.Title-Tooltip {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;\r\n  position: relative;\r\n  margin: 0 0 0 6px;\r\n  z-index: 0;\r\n}\r\n\r\n.Attribute-Contents .ic-tooltip {\r\n    cursor: default;\r\n}\r\n\r\n.Attribute-Contents .bg:before {\r\n  content: '';\r\n  display: inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 0 0;\r\n  background-size: contain;\r\n  overflow: hidden;\r\n}\r\n\r\n.Attribute-Contents .ic-tooltip:before {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-image: url(./../css/images/ic-tooltip.svg);\r\n}\r\n\r\n.Title-Tooltip-Layer {\r\n  display: none;\r\n  position: absolute;\r\n  right: -10px;\r\n  top: 26px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.Title-Tooltip-Layer .ic-pointer {\r\n  position: absolute;\r\n  right: 14px;\r\n  top: 0;\r\n}\r\n\r\n.Title-Tooltip-Layer .Title-Tooltip-Desc {\r\n  width: 191px;\r\n  padding: 6px;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n  background-color: #323232;\r\n  text-align: left;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Title-Tooltip:hover .Title-Tooltip-Layer {\r\n    display: block;\r\n}\r\n\r\n.Editor-Bottom-Container {\r\n  width: 100%;\r\n  height: 80px; \r\n  background-color: #ffffff;\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: #ccc 1px solid;\r\n  z-index: 100; //2023-12-14\r\n}\r\n\r\n.Editor-Bottom-Container > div {\r\n  margin: 0 auto;\r\n  width: 373px;\r\n  padding: 15px 0;\r\n  display: flex;\r\n}\r\n\r\n// 0219 추가\r\n.Editor-Right-Component .Button-List {\r\n  // margin: 0 auto;\r\n  // width: 373px;\r\n  padding: 15px 15px;\r\n  display: flex;\r\n}\r\n\r\n.Template-Button {\r\n  @extend %template-font-info;\r\n  border-radius: 14px;\r\n  background-color: #002c5ff2;\r\n  width: 184px;\r\n  height: 48px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  letter-spacing: -0.75px;\r\n  border: 0;\r\n}\r\n\r\n.Template-Button.Confirm {\r\n  background-color: #00aada;\r\n}\r\n\r\n.Template-Button.Transparent {\r\n  width: 118px;\r\n  height: 34px;\r\n  background-color: transparent;\r\n  border-radius: 4px;\r\n}\r\n.Template-Button.Toolbar-Border {\r\n  border: solid 1px #eee;\r\n}\r\n\r\n.Template-Button.Transparent:hover {\r\n  background-color: #001f46 !important;\r\n  border: solid 1px #4d6c8f;\r\n}\r\n\r\n.Template-Button.Toolbar-Btn-Margin {\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n.Editor-Toolbar-Group.Right > ul {\r\n  list-style: none;\r\n  height: 100%;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li {\r\n  float: left; \r\n  height: 100%;\r\n  min-width: 34px;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li > div > button {\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li:nth-child(4) {\r\n  min-width: 22px;\r\n}\r\n.Editor-Toolbar-Group.Right > ul > li:nth-child(8) {\r\n  min-width: 70px;\r\n  margin-left: 50px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.Toolbar-Button-Divider {\r\n  display: inline-block;\r\n  width: 1px !important;\r\n  min-width: 1px !important;\r\n  height: 18px !important;\r\n  background-color: #4d6c8f;\r\n  margin: 0 10px 0 12px;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Template-Button.Undo-Button {\r\n  margin-right: 5px;\r\n}\r\ni.Undo-Button::before {\r\n  content: url(\"./../css/icon/undo.png\");\r\n  margin-right: 8px;\r\n}\r\n\r\ni.Redo-Button::before {\r\n  content: url(\"./../css/icon/redo.png\");\r\n  margin-right: 8px;\r\n}\r\n\r\n.Template-Button.Align-Left-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Left-Button > i::before {\r\n  content: url(\"./../css/icon/align-left-btn.png\");\r\n}\r\n.Template-Button.Align-Center-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Center-Button > i::before {\r\n  content: url(\"./../css/icon/align-center-btn.png\");\r\n}\r\n.Template-Button.Align-Right-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n  min-width: 24px;\r\n}\r\n.Template-Button.Align-Right-Button > i::before {\r\n  content: url(\"./../css/icon/align-right-btn.png\");\r\n}\r\n.Template-Button.Align-Top-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Top-Button > i::before {\r\n  content: url(\"./../css/icon/align-top-btn.png\");\r\n}\r\n.Template-Button.Align-Middle-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Middle-Button > i::before {\r\n  content: url(\"./../css/icon/align-middle-btn.png\");\r\n}\r\n.Template-Button.Align-Bottom-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Bottom-Button > i::before {\r\n  content: url(\"./../css/icon/align-bottom-btn.png\");\r\n}\r\n\r\n.Template-Button.Zoom-Out-Button,\r\n.Template-Button.Zoom-In-Button{\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Zoom-Out-Button > i::before {\r\n  content: url(\"./../css/icon/zoom-out-btn.png\");\r\n}\r\n.Template-Button.Zoom-In-Button > i::before {\r\n  content: url(\"./../css/icon/zoom-in-btn.png\");\r\n}\r\n\r\n.Editor-Toolbar-Group.Right #scaleSelectContainer.Toolbar-Label {\r\n  line-height: 34px;\r\n  font-size: 16px;\r\n  @extend %template-font-info;\r\n  text-align: center;\r\n  color: #e9eaed;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right .Toolbar-Label > a {\r\n  color: #e9eaed !important;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right .Toolbar-Label > a {\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    width: 100%;\r\n    display: block;\r\n    background-image: url(\"./../css/icon/zoom-select-down-1.png\");\r\n}\r\n\r\n.Button-Icon-Component {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.Arrow-Btn {\r\n  left: calc(50% - 4px);\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Reverse-Btn {\r\n  transform: rotate(180deg) translateY(50%);\r\n}\r\n\r\n.Arrow-Btn:before {\r\n  content: url(\"./../css/icon/component-arrow-btn.png\");\r\n}\r\n\r\n//좌측\r\n.Left-Panel-Btn-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideLeftPanelBtn;\r\n  left: 0;\r\n}\r\n.Left-Panel-Btn-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowLeftPanelBtn;\r\n  left: 300px;\r\n}\r\n\r\n.Left-Panel-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideLeftPanel;\r\n  left: -300px;\r\n}\r\n.Left-Panel-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowLeftPanel;\r\n  left: 0px;\r\n}\r\n\r\n//우측 - 240223 추가함\r\n.Right-Panel-Btn-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideRightPanelBtn;\r\n  Right: 0;\r\n}\r\n.Right-Panel-Btn-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowRightPanelBtn;\r\n  Right: 300px;\r\n}\r\n\r\n.Right-Panel-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideRightPanel;\r\n  Right: -300px;\r\n}\r\n.Right-Panel-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowRightPanel;\r\n  Right: 0px;\r\n}\r\n\r\n\r\n\r\n.Editor-User-Component_Box {\r\n  padding: 0 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.User-Component-List-Conatiner {\r\n  padding: 13px 20px 13px 20px;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.User-Component-List-Conatiner.No-Child {\r\n  padding: 10px 20px;\r\n}\r\n.User-Component-List-Conatiner.Current {\r\n  border-radius: 4px;\r\n  border: solid 2px #3e75ad;\r\n}\r\n\r\n.User-Component-List {\r\n  list-style: none;\r\n  touch-action: none;\r\n} \r\n\r\n.User-Component-List > li {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #666;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 3px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  padding: 7px 0 7px 11px;\r\n}\r\n\r\n.User-Component-List > li:nth-child(1) {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #333333;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n\r\n  margin-bottom: 10px;\r\n  box-shadow: none;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.User-Component-List > li:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.Template-Button.Toggle-Button {\r\n  border-radius: 4px;\r\n  background-color: #e5e5e5;\r\n\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.Color-Button-Wrap {\r\n  width: 32px;\r\n  height: 32px;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #d1d1d1;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.Template-Button.Color-Button {\r\n  width: 22px;\r\n  height: 22px;\r\n  border-radius: 2px;\r\n  background-color: #000;\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 5px;\r\n}\r\n\r\n.Template-Button.Toggle-Button:hover,\r\n.Template-Button.Toggle-Button.Selected {\r\n    background-color: #00aada;\r\n}\r\n\r\n.Template-Button.Text-Align-Left,\r\n.Template-Button.Text-Align-Center {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Template-Button.Text-Align-Left > i::before {\r\n  content: url(\"./../css/icon/text-align-left.png\");\r\n}\r\n.Template-Button.Text-Align-Center > i::before {\r\n  content: url(\"./../css/icon/text-align-center.png\");\r\n}\r\n.Template-Button.Text-Align-Right > i::before {\r\n  content: url(\"./../css/icon/text-align-right.png\");\r\n}\r\n.Template-Button.Text-Bold-Button > i::before {\r\n  content: url(\"./../css/icon/b.svg\");\r\n}\r\n.Template-Button.Text-Align-Left:hover > i::before,\r\n.Template-Button.Text-Align-Left.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-left-hover.png\");\r\n}\r\n.Template-Button.Text-Align-Center:hover > i::before,\r\n.Template-Button.Text-Align-Center.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-center-hover.png\");\r\n}\r\n.Template-Button.Text-Align-Right:hover > i::before,\r\n.Template-Button.Text-Align-Right.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-right-hover.png\");\r\n}\r\n.Template-Button.Text-Bold-Button:hover > i::before,\r\n.Template-Button.Text-Bold-Button.Selected > i::before  {\r\n  content: url(\"./../css/icon/b-hover.svg\");\r\n}\r\n\r\n\r\n.Field-Delete-Button {\r\n  position: absolute;\r\n  \r\n  background-image: url(\"./../css/icon/field-delete.png\");\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n  z-index: 9999;\r\n}\r\n\r\n.Asterisk-Icon {\r\n  background-image: url(\"./../css/icon/asterisk.png\");\r\n  background-size: 11px 12px;\r\n  height: 12px;\r\n  width: 11px;\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n 발송 관련 입력폼\r\n*/\r\n\r\n.Editor-Send-Component_Box div ul {\r\n  list-style: none;\r\n  padding: 20px;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > li {\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  background-color: aliceblue;\r\n  margin: 0 0 20px;\r\n  padding: 8px 0px 8px 20px;\r\n  width: 240px;\r\n  height: 18px;\r\n  display: flex;\r\n  border: solid 1px #ffffff;\r\n  align-content: space-between;\r\n  flex-wrap: wrap;\r\n  flex-direction: column;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > li.selected,\r\n\r\n.Editor-Send-Component_Box div ul > li:hover {\r\n  border: solid 1px #96b3d5;\r\n  background-color: #dce6f3;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > li.disabled {\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  opacity: 0.3;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > li > span.tit {\r\n  @extend %template-font-info;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  color: #333333;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > p {\r\n  @extend %template-font-info;\r\n  padding: 8px 0px 8px 20px;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > p > span.tit-send {\r\n  @extend %template-font-info;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: #6c6d82e8;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > p > span:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.Editor-Send-Component_Box div ul > p > span.sign-field-ico:before {\r\n  background-image: url(\"./../css/icon/signfield.svg\");\r\n  margin: 0 3px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n\r\n.Editor-Send-Component_Box div ul > li > span:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n.Editor-Send-Component_Box div ul > li > span.sign-field-ico:before {\r\n  background-image: url(\"./../css/icon/signfield.svg\");\r\n  margin: 0 3px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.Editor-Send-Component_Box div ul > li > input {\r\n  margin: 0 10px 0 5px;\r\n  border: solid 1px #b6c2d0;\r\n  // background-size: 20px 20px;\r\n  height: 18px;\r\n  width: 160px;\r\n}\r\n\r\n.Top-Toolbar > .Editor-Toolbar-Group.Left {\r\n  padding-left: 40px;\r\n  width: 100px;\r\n}\r\n\r\n.Top-Toolbar > .Editor-Toolbar-Group.Right {\r\n  padding-right: 40px;\r\n  width: 100px;\r\n}","\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pdfViewer .page {\r\n    border: 9px solid transparent;;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n.Outer-Container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.MainContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  min-width: 320px;\r\n}\r\n\r\n#TemplatePDFViewer, \r\n#ReaderPDFViewer, \r\n#PreviewReaderPDFViewer {\r\n  outline: none;\r\n}\r\n\r\n.Viewer-Container {\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  outline: none;\r\n  inset: 128px 300px 300px;\r\n  width: calc(100% - 300px - 300px);\r\n  height: calc(100% - 64px - 64px);\r\n}\r\n\r\n//\r\n.Viewer-Container.full {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  inset: unset !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.leftfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 0px 300px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n//\r\n.Viewer-Container.rightfull {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  // top: 0px;\r\n  // left: 0px;\r\n  inset: 128px 300px 0px !important;\r\n  width: calc(100% - 300px) !important;\r\n  height: calc(100% - 64px) !important;\r\n}\r\n\r\n\r\n\r\n.Template-Show {\r\n  display: block !important;\r\n}\r\n.Template-Hide {\r\n  display: none !important;\r\n}\r\n\r\n.Attribute-Switch-Label {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.Attribute-Switch-Label input {display:none;}\r\n\r\n/* The slider */\r\n.Attribute-Switch-Slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #e5e5e5;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.Attribute-Switch-Slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  box-shadow: -1.6px 1.2px 5px 0 rgba(0, 0, 0, 0.15);\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #ffffff;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider {\r\n  background-color: #2196F3;\r\n  border: solid 1px #00aada;\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus + .Attribute-Switch-Slider {\r\n  box-shadow: 4px 4.5px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  border: solid 1px #00aada;\r\n}\r\n\r\n/* Rounded sliders */\r\n.Attribute-Switch-Slider.Round {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Attribute-Switch-Slider.Round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n%template-font-info {\r\n  font-family: MalgunGothic;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.Margin-Right-5 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Scale-Seletor-Container {\r\n    position: absolute;\r\n}\r\n\r\n.Scale-Seletor-Container .select2-container--default .select2-selection--single {\r\n    display: none;\r\n}\r\n\r\n\r\n@import     './../css/viewer.css';\r\n","\r\n@keyframes HideLeftPanelBtn {\r\n  from {\r\n    left: 300px;\r\n  }\r\n\r\n  to {\r\n    left: 0px;\r\n  }\r\n}\r\n@keyframes ShowLeftPanelBtn {\r\n  from {\r\n    left: 0px;\r\n  }\r\n\r\n  to {\r\n    left: 300px;\r\n  }\r\n}\r\n\r\n@keyframes HideLeftPanel {\r\n  from {\r\n    left: 0px;\r\n  }\r\n\r\n  to {\r\n    left: -300px;\r\n  }\r\n}\r\n@keyframes ShowLeftPanel {\r\n  from {\r\n    left: -300px;\r\n  }\r\n\r\n  to {\r\n    left: 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./css/icon/align-bottom-btn.png":
/*!***************************************!*\
  !*** ./css/icon/align-bottom-btn.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpi/P//PwMaQBdgZCACMDFQCQw+g1hIUIs37IZxGI2w6MeVJRjp5qL/1DAIIMAACxgGIABssM0AAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/align-center-btn.png":
/*!***************************************!*\
  !*** ./css/icon/align-center-btn.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNpi/P//PwMWABJkRBdkYiAB0E4xC5o7GXDwGQepmxmpGs4sWEIBV+gMptBgHGKpDiDAAIHMCii91YliAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/align-left-btn.png":
/*!*************************************!*\
  !*** ./css/icon/align-left-btn.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBJREFUeNpi/A8EDAwMjAwkAiYGMgH9NbKg8f/jUcs4TPzIOKhClWE0VAetRoAAAwAWjwYqE9RPjgAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/align-middle-btn.png":
/*!***************************************!*\
  !*** ./css/icon/align-middle-btn.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADtJREFUeNpi/P//PwMaQBdgZCACMDFQCbCQoBavS6nmIqp67T+JXsIqzoIlVnCFxRAMI2IBI11cBBBgAFXoChoDLn4uAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/align-right-btn.png":
/*!**************************************!*\
  !*** ./css/icon/align-right-btn.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADVJREFUeNpi/P//PwMZ4D8TA5mA/hpZsLkfj3rGgXMqVf3ISHMbSUk6QzVUGYeGU8nWCBBgAOhOBirBG54WAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/align-top-btn.png":
/*!************************************!*\
  !*** ./css/icon/align-top-btn.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpi/A8EDFQALEDMSA2DmBioBFiwiKF7lZGAOHVdNGrQAEc/LsA4QsMIIMAANb8GIIPduuEAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/asterisk.png":
/*!*******************************!*\
  !*** ./css/icon/asterisk.png ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANdJREFUeNp00LGOAVEUxvGLyT6ABB0VJQVPgI1GSbWJTrKi0SoEIWoKyWoVKi+AxAPIZqPWCN1GoRSSwf8mR3KNcZLf3Jmc7+aeOx67mFeOSopf/JkNr3qtAkYoOhuP8Deiyr1iKOsXCykMcUYPHxLSaxN1ya3044AlsujAlnDNOHmOo/7Y4RMl2egzRvzHF3LYOy94c5n5Zl4wggXGCBpjXBHCBDOEdTiANE5oYCDhPlpy8Qz8Xvn5VSTQxUXCem0jjgrWljR+1PvaCGW5NKfYyolPdRdgAKw4Kt11WWH9AAAAAElFTkSuQmCC";

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

/***/ "./css/icon/checkboxfield.svg":
/*!************************************!*\
  !*** ./css/icon/checkboxfield.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw5YzAtNSw0LTksOS05aDMwYzUsMCw5LDQsOSw5djMwYzAsNS00LDktOSw5SDljLTUsMC05LTQtOS05Vjl6IE05LDNDNS43LDMsMyw1LjcsMyw5djMwYzAsMy4zLDIuNyw2LDYsNmgzMA0KCWMzLjMsMCw2LTIuNyw2LTZWOWMwLTMuMy0yLjctNi02LTZIOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMS41LDI2LjFsLTMuNS0zLjVjLTAuNi0wLjYtMS41LTAuNi0yLjEsMGwwLDBjLTAuNiwwLjYtMC42LDEuNSwwLDIuMWwzLjksMy45bDEuNCwxLjRjMC40LDAuNCwxLDAuNCwxLjQsMA0KCWwxLjQtMS40bDguMy04LjNjMC42LTAuNiwwLjYtMS41LDAtMi4xbDAsMGMtMC42LTAuNi0xLjUtMC42LTIuMSwwbC03LjksNy45QzIyLDI2LjMsMjEuNywyNi4zLDIxLjUsMjYuMXoiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./css/icon/comboboxfield.svg":
/*!************************************!*\
  !*** ./css/icon/comboboxfield.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw5YzAtNSw0LTksOS05aDMwYzUsMCw5LDQsOSw5djMwYzAsNS00LDktOSw5SDljLTUsMC05LTQtOS05Vjl6IE05LDNDNS43LDMsMyw1LjcsMyw5djMwYzAsMy4zLDIuNyw2LDYsNmgzMA0KCWMzLjMsMCw2LTIuNyw2LTZWOWMwLTMuMy0yLjctNi02LTZIOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC44LDI4LjdsNy4xLTguMWMwLjYtMC42LDAuMS0xLjctMC44LTEuN0gxNi45Yy0wLjksMC0xLjMsMS0wLjgsMS43bDcuMSw4LjFDMjMuNiwyOS4yLDI0LjQsMjkuMiwyNC44LDI4Ljd6DQoJIi8+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/component-arrow-btn.png":
/*!******************************************!*\
  !*** ./css/icon/component-arrow-btn.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIlJREFUeNpi7Ji0iJOBgcECiPczYAFMQPwdiLcDcRguBSDADsTLgbgAlwIYux+Iu4GYEZsCGCgB4sVAzIZLAQhEA/E2IObFpQAEnEGOx6eAAZ8VILAXiL1wKQB52QuIP2FT0At15C8QhwVJ4j8QFwHxBGTVMAU/gTgeiFeiGwdSwA/EnrgiCyDAAItSFDcNPmpfAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/datefield.svg":
/*!********************************!*\
  !*** ./css/icon/datefield.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNMTMuNywyNy40YzEuOSwwLDMuNC0xLjUsMy40LTMuNHMtMS41LTMuNC0zLjQtMy40cy0zLjQsMS41LTMuNCwzLjRDMTAuMywyNS45LDExLjgsMjcuNCwxMy43LDI3LjR6IE0xNy4xLDM0LjMNCgljMCwxLjktMS41LDMuNC0zLjQsMy40cy0zLjQtMS41LTMuNC0zLjRzMS41LTMuNCwzLjQtMy40UzE3LjEsMzIuNCwxNy4xLDM0LjN6IE0yNCwyNy40YzEuOSwwLDMuNC0xLjUsMy40LTMuNHMtMS41LTMuNC0zLjQtMy40DQoJYy0xLjksMC0zLjQsMS41LTMuNCwzLjRTMjIuMSwyNy40LDI0LDI3LjR6IE0yNy4zLDM0LjNjMCwxLjktMS41LDMuNC0zLjQsMy40Yy0xLjksMC0zLjQtMS41LTMuNC0zLjRzMS41LTMuNCwzLjQtMy40DQoJQzI1LjgsMzAuOSwyNy4zLDMyLjQsMjcuMywzNC4zeiBNMzQuMiwyNy40YzEuOSwwLDMuNC0xLjUsMy40LTMuNHMtMS41LTMuNC0zLjQtMy40Yy0xLjksMC0zLjQsMS41LTMuNCwzLjRTMzIuMywyNy40LDM0LjIsMjcuNHoNCgkgTTQ3LjksOC42YzAtNC44LTMuOC04LjYtOC42LTguNkg4LjZDMy44LDAsMCwzLjgsMCw4LjZ2MzAuOUMwLDQ0LjIsMy44LDQ4LDguNiw0OGgzMC44YzQuNywwLDguNi0zLjgsOC42LTguNkw0Ny45LDguNkw0Ny45LDguNnoNCgkgTTMuNCwxMy43aDQxdjI1LjdjMCwyLjgtMi4zLDUuMS01LjEsNS4xSDguNmMtMi44LDAtNS4xLTIuMy01LjEtNS4xTDMuNCwxMy43TDMuNCwxMy43eiBNOC42LDMuNGgzMC44YzIuOCwwLDUuMSwyLjMsNS4xLDUuMXYxLjcNCglIMy40VjguNkMzLjQsNS43LDUuNywzLjQsOC42LDMuNHoiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./css/icon/field-delete.png":
/*!***********************************!*\
  !*** ./css/icon/field-delete.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAflJREFUeNqklc1KQlEQx8d7rx+bQN2YlYIomSi4qBa9hUEFvUMtapH0AlG5qEW9RFIZrX2DIgj8woufRa7c6CZFbeZwrl2v5/Y58AM9c+bvnDNzRks2mwWB2ZAEZw2ZQ3rIC/KE3CJ3fG3CFIHYOnKKhAQ/ssTZRlQkidzoN0m6zzJywjeE4HujPdc8RhZleIQcwO9Ni0nqM9z4o5hedEMTpLs503uDwSBEIhGQJGm6WjYb8/l8PqPrnNwUsYks6D0OhwO8Xi+Ew2GQZfmzgooC0WiU+WiPweaRLYW3xoQVi0UYjUYs0GKxQD6fZ2KxWAxcLhfU63WoVCqioydIcNW4OhgMmIgm2u/3WUZutxtqtZqZGNkKCc6aeQuFAhPz+/3se7lchmaz+VVxvJKo28dNikWx2+0Td/udUYZvyIzRQcWIx+PgdDpBVVUmRpWlKudyOTO9NxJ8RhaNVabWILFqtQqNRoOtW61W8Hg84+P3elOHe6AjZ4yrJKZVkwT1d9pqtZhoIBAQZZihDNPIsb4X2+02dLvdqWoOh0MolUqsUJ1Oxyj2SloKL8o+cqV5KDMzo5ai4wpsD3nX3hZlmfrHW05xjYnxdYhc/EHsksdOzcMBssunhvoDIZXPgR0eazqxaWje8800vZf5w9cu/pH/BaRFj+JDgAEAEYuaOSvw93gAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/imagefield.svg":
/*!*********************************!*\
  !*** ./css/icon/imagefield.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuNywxNS40YzAsMi44LTIuMyw1LjEtNS4xLDUuMWMtMi44LDAtNS4xLTIuMy01LjEtNS4xczIuMy01LjEsNS4xLTUuMUMzNS40LDEwLjMsMzcuNywxMi42LDM3LjcsMTUuNHoNCgkgTTM0LjMsMTUuNGMwLTAuOS0wLjgtMS43LTEuNy0xLjdjLTAuOSwwLTEuNywwLjgtMS43LDEuN2MwLDAuOSwwLjgsMS43LDEuNywxLjdDMzMuNSwxNy4xLDM0LjMsMTYuNCwzNC4zLDE1LjR6IE0wLDEwLjMNCglDMCw0LjYsNC42LDAsMTAuMywwaDI3LjRDNDMuNCwwLDQ4LDQuNiw0OCwxMC4zdjI3LjRDNDgsNDMuNCw0My40LDQ4LDM3LjcsNDhIMTAuM0M0LjYsNDgsMCw0My40LDAsMzcuN1YxMC4zeiBNMTAuMywzLjQNCgljLTMuOCwwLTYuOSwzLjEtNi45LDYuOXYyNy40YzAsMS4zLDAuMywyLjUsMSwzLjVsMTYtMTUuN2MyLTIsNS4yLTIsNy4yLDBsMTYsMTUuN2MwLjYtMSwxLTIuMiwxLTMuNVYxMC4zYzAtMy44LTMuMS02LjktNi45LTYuOQ0KCUgxMC4zeiBNMTAuMyw0NC42aDI3LjRjMS4zLDAsMi41LTAuMywzLjUtMC45bC0xNi0xNS43Yy0wLjctMC43LTEuNy0wLjctMi40LDBsLTE2LDE1LjdDNy44LDQ0LjIsOSw0NC42LDEwLjMsNDQuNnoiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./css/icon/labelfield.svg":
/*!*********************************!*\
  !*** ./css/icon/labelfield.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzYuMSwzYzEuNywwLDMsMS4zLDMsM3YzOWwtMTIuMy02LjJjLTAuOC0wLjQtMS44LTAuNi0yLjctMC42cy0xLjksMC4yLTIuNywwLjZMOS4xLDQ1VjZjMC0xLjcsMS4zLTMsMy0zSDM2LjEgTTM2LjEsMA0KCQloLTI0Yy0zLjMsMC02LDIuNy02LDZ2MzljMCwxLjcsMS40LDMsMywzYzAuNCwwLDAuOS0wLjEsMS4zLTAuM2wxMi4zLTYuMmMwLjQtMC4yLDAuOS0wLjMsMS4zLTAuM3MwLjksMC4xLDEuMywwLjNsMTIuMyw2LjINCgkJYzAuNCwwLjIsMC45LDAuMywxLjMsMC4zYzEuNiwwLDMtMS4zLDMtM1Y2QzQyLjEsMi43LDM5LjQsMCwzNi4xLDBMMzYuMSwweiIvPg0KPC9nPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/multilinefield.svg":
/*!*************************************!*\
  !*** ./css/icon/multilinefield.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw5YzAtNSw0LTksOS05aDMwYzUsMCw5LDQsOSw5djMwYzAsNS00LDktOSw5SDljLTUsMC05LTQtOS05Vjl6IE05LDNDNS43LDMsMyw1LjcsMyw5djMwYzAsMy4zLDIuNyw2LDYsNmgzMA0KCWMzLjMsMCw2LTIuNyw2LTZWOWMwLTMuMy0yLjctNi02LTZIOXoiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS41LDEyLjZoMi44djAuOWMwLDAuNSwwLjQsMC45LDAuOSwwLjlzMC45LTAuNCwwLjktMC45di0xLjhjMC0wLjUtMC40LTAuOS0wLjktMC45SDkuOQ0KCQljLTAuNSwwLTAuOSwwLjQtMC45LDAuOXYxLjhjMCwwLjUsMC40LDAuOSwwLjksMC45czAuOS0wLjQsMC45LTAuOXYtMC45aDIuOHYxMS4xaC0wLjljLTAuNSwwLTAuOSwwLjQtMC45LDAuOQ0KCQljMCwwLjUsMC40LDAuOSwwLjksMC45aDMuN2MwLjUsMCwwLjktMC40LDAuOS0wLjljMC0wLjUtMC40LTAuOS0wLjktMC45aC0wLjlWMTIuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuNSwxMy43aC0xMGMtMC44LDAtMS41LTAuNy0xLjUtMS41djBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDEwYzAuOCwwLDEuNSwwLjcsMS41LDEuNXYwDQoJCUMzOSwxMywzOC4zLDEzLjcsMzcuNSwxMy43eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNy41LDI1LjVoLTEzYy0wLjgsMC0xLjUtMC43LTEuNS0xLjV2MGMwLTAuOCwwLjctMS41LDEuNS0xLjVoMTNjMC44LDAsMS41LDAuNywxLjUsMS41djANCgkJQzM5LDI0LjgsMzguMywyNS41LDM3LjUsMjUuNXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcuNSwzNy4zaC0yN2MtMC44LDAtMS41LTAuNy0xLjUtMS41djBjMC0wLjgsMC43LTEuNSwxLjUtMS41aDI3YzAuOCwwLDEuNSwwLjcsMS41LDEuNXYwDQoJCUMzOSwzNi42LDM4LjMsMzcuMywzNy41LDM3LjN6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/numberfield.svg":
/*!**********************************!*\
  !*** ./css/icon/numberfield.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMCw5YzAtNSw0LTksOS05aDMwYzUsMCw5LDQsOSw5djMwYzAsNS00LDktOSw5SDljLTUsMC05LTQtOS05Vjl6IE05LDNDNS43LDMsMyw1LjcsMyw5djMwYzAsMy4zLDIuNyw2LDYsNmgzMA0KCWMzLjMsMCw2LTIuNyw2LTZWOWMwLTMuMy0yLjctNi02LTZIOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNC41LDE5LjJjLTAuMywwLjMtMC41LDAuNy0wLjYsMC45Yy0wLjIsMC43LTAuOSwxLjEtMS42LDAuOWMtMC43LTAuMi0xLjEtMC45LTAuOS0xLjYNCgljMC4yLTAuNiwwLjYtMS41LDEuMy0yLjJjMC44LTAuNywxLjktMS4yLDMuNC0xLjJjMywwLDQuOCwyLjMsNC44LDQuNGMwLDAuOC0wLjIsMi4xLTEsMy4xYy0wLjEsMC4xLTAuMiwwLjMtMC40LDAuNA0KCWMwLjEsMC4xLDAuMiwwLjIsMC4zLDAuM2MwLjEsMC4xLDAuMywwLjMsMC40LDAuNWMwLjUsMC43LDAuNywxLjUsMC43LDIuNGMwLDEuNy0wLjYsMy0xLjYsMy45Yy0xLDAuOC0yLjIsMS4xLTMuMywxLjENCgljLTEsMC0yLTAuMi0yLjktMC43Yy0wLjktMC42LTEuNS0xLjUtMS45LTIuNmMtMC4yLTAuNywwLjEtMS41LDAuOC0xLjdjMC43LTAuMiwxLjQsMC4yLDEuNiwwLjhjMC4xLDAuNCwwLjIsMC42LDAuNCwwLjhsMCwwLjENCgljMCwwLDAuMSwwLjEsMC4xLDAuMWwwLDBsMCwwYzAuMSwwLjEsMC4xLDAuMSwwLjIsMC4yYzAuMSwwLjEsMC4yLDAuMSwwLjQsMC4yYzAuMywwLjEsMC42LDAuMiwxLjEsMC4yYzAuNywwLDEuMi0wLjIsMS42LTAuNQ0KCWMwLjMtMC4zLDAuNi0wLjgsMC42LTEuOGMwLTAuNC0wLjEtMC43LTAuMi0wLjljLTAuMS0wLjItMC4zLTAuMy0wLjYtMC41Yy0wLjYtMC4zLTEuNC0wLjQtMi0wLjRjLTAuNywwLTEuMy0wLjYtMS4zLTEuMw0KCWMwLTAuNywwLjYtMS4zLDEuMy0xLjNjMS41LDAsMi4xLTAuNSwyLjQtMC44YzAuMy0wLjQsMC40LTEsMC40LTEuNWMwLTAuNi0wLjYtMS43LTIuMi0xLjdDMzUuMywxOC43LDM0LjgsMTguOSwzNC41LDE5LjJ6IE0yMSwyMQ0KCWMwLTEuMiwxLTIuMywyLjItMi4zYzAuOSwwLDEuNiwwLjQsMiwxYzAuMywwLjUsMC41LDEuMy0wLjIsMi41Yy0wLjMsMC42LTAuOCwxLTEuNCwxLjVjLTAuMywwLjMtMC42LDAuNS0xLDAuOGwtMC4xLDAuMQ0KCWMtMC4zLDAuMi0wLjYsMC41LTAuOSwwLjdjLTEuNSwxLjEtMy4xLDIuNy0zLjEsNS41YzAsMC43LDAuNiwxLjMsMS4zLDEuM2wwLjEsMGwwLjEsMGg2LjljMC43LDAsMS4zLTAuNiwxLjMtMS4zDQoJYzAtMC43LTAuNi0xLjMtMS4zLTEuM2gtNS41YzAuMy0wLjgsMC45LTEuMywxLjgtMmMwLjMtMC4yLDAuNS0wLjQsMC44LTAuNmwwLDBsMC4yLTAuMWMwLjQtMC4zLDAuNy0wLjUsMS4xLTAuOA0KCWMwLjctMC42LDEuNS0xLjMsMi0yLjNjMS4xLTEuOSwxLjEtMy44LDAuMS01LjNjLTAuOS0xLjQtMi41LTIuMi00LjEtMi4yYy0yLjgsMC00LjgsMi41LTQuOCw1YzAsMC43LDAuNiwxLjMsMS4zLDEuMw0KCUMyMC40LDIyLjMsMjEsMjEuNywyMSwyMXogTTksMjMuM2MwLjUtMC40LDEuMS0wLjgsMS41LTEuM3Y4LjdjMCwwLjcsMC42LDEuMywxLjMsMS4zYzAuNywwLDEuMy0wLjYsMS4zLTEuM1YxNy4zDQoJYzAtMC43LTAuNS0xLjMtMS4yLTEuM2MtMC42LTAuMS0xLjMsMC40LTEuNCwxYy0wLjMsMS4yLTEuNCwzLTMsNGMtMC42LDAuNC0wLjgsMS4yLTAuNCwxLjhDNy42LDIzLjUsOC40LDIzLjcsOSwyMy4zeiIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./css/icon/radiobutton.svg":
/*!**********************************!*\
  !*** ./css/icon/radiobutton.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQsNGMxMSwwLDIwLDksMjAsMjBzLTksMjAtMjAsMjBTNCwzNSw0LDI0UzEzLDQsMjQsNCBNMjQsMEMxMC43LDAsMCwxMC43LDAsMjRzMTAuNywyNCwyNCwyNHMyNC0xMC43LDI0LTI0DQoJCVMzNy4zLDAsMjQsMEwyNCwweiIvPg0KPC9nPg0KPGc+DQoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjQiIGN5PSIyNCIgcj0iMTIiLz4NCjwvZz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./css/icon/redo.png":
/*!***************************!*\
  !*** ./css/icon/redo.png ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOFJREFUeNqMkk0KwjAQhSfizoU73URv4SWkdzB36CWKFNwI3qMH0GtI3XQpuHJjwS7ijLzQGNLYBx+0k3mZH0LWWhrgxKihc0oYbcocBlZMyVxtr6h5Sr0Mc2Rm9KsnYykUbth5Fc7MFt9FasY180Li3murSMz/NR68SiqVHBpvMGZjTYJU6HhUWdKCeVBaipkTDG5jE/ovufzOdJLcILgZYXQ5jRgr/ORoJdVmju9KBtVMiwWVA5tVOLPI1e7AeA/ggg0vQYaYkwnfqvEqx9Q6U+yRa7RUM29QI6b93I8AAwASbAhzrovCTAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/signfield.svg":
/*!********************************!*\
  !*** ./css/icon/signfield.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMTQuNiwzOC41bDI1LjktMjZjMi45LTIuOSwyLjktNy41LDAtMTAuNGMtMi45LTIuOS03LjUtMi45LTEwLjQsMGwtMjUuOSwyNmMtMC4yLDAuMi0wLjMsMC40LTAuNCwwLjZMMC4xLDQwDQoJCWMtMC4yLDAuNSwwLDEuMSwwLjMsMS41YzAuNCwwLjQsMC45LDAuNiwxLjUsMC40bDEyLTNDMTQuMSwzOC45LDE0LjQsMzguNywxNC42LDM4LjV6IE0zLjgsMzguM0w2LjYsMzBMMzIuMiw0LjQNCgkJYzEuNy0xLjcsNC40LTEuNyw2LjEsMGMxLjcsMS43LDEuNyw0LjUsMCw2LjFMMTIuNywzNi4xTDMuOCwzOC4zeiIvPg0KCTxwYXRoIGQ9Ik00Ny45LDQwLjFjLTAuMi0wLjgtMS4xLTEuMy0xLjktMWwwLDBsMCwwbDAsMGgtMC4xYy0wLjEsMC0wLjEsMC0wLjIsMC4xYy0wLjIsMC4xLTAuNCwwLjItMC43LDAuMw0KCQljLTAuNiwwLjMtMS40LDAuNy0yLjQsMS4zYy0wLjQsMC4yLTAuNywwLjUtMSwwLjdjLTAuNiwwLjQtMS4xLDAuOC0xLjgsMS4yYy0xLDAuNi0xLjgsMC45LTIuNCwwLjljLTAuMiwwLTAuNC0wLjEtMC44LTAuNQ0KCQljLTAuMy0wLjQtMC42LTAuOS0wLjgtMS41Yy0wLjctMi40LTEuNS00LjctNC01LjVjLTEuOC0wLjYtMy41LDAuMS00LjksMC45Yy0xLjMsMC44LTIuNywxLjktNCwzbC0wLjQsMC4zYy0xLjUsMS4yLTMsMi40LTQuNiwzLjMNCgkJQzE2LjUsNDQuNSwxNSw0NSwxMy41LDQ1Yy0yLjIsMC00LjItMC42LTUuOC0xLjRsLTQsMWMwLjEsMCwwLjEsMC4xLDAuMiwwLjFDNiw0Ni4zLDkuMyw0OCwxMy41LDQ4YzIuMiwwLDQuMy0wLjgsNi4xLTEuOA0KCQljMS44LTEsMy41LTIuNCw1LTMuNmwwLjQtMC4zYzEuNC0xLjEsMi42LTIuMSwzLjctMi44YzEuMi0wLjcsMS45LTAuOCwyLjQtMC42YzAuOCwwLjMsMS4yLDAuOSwyLDMuNWMwLjMsMC45LDAuNywxLjgsMS40LDIuNg0KCQljMC43LDAuOCwxLjcsMS41LDMsMS41YzEuNCwwLDIuOC0wLjcsMy45LTEuM2MwLjctMC40LDEuNS0xLDIuMS0xLjRjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjVjMC44LTAuNSwxLjUtMC45LDEuOS0xLjENCgkJYzAuMi0wLjEsMC40LTAuMiwwLjUtMC4yYzAuMSwwLDAuMSwwLDAuMSwwbDAsMEM0Ny43LDQxLjcsNDguMiw0MC45LDQ3LjksNDAuMXoiLz4NCjwvZz4NCjwvc3ZnPg0K";

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

/***/ "./css/icon/textfield.svg":
/*!********************************!*\
  !*** ./css/icon/textfield.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i66CI7J207Ja0XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCINCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMjEyMTIxO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuNSwxNUgzMHYxLjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNXYtM2MwLTAuOC0wLjctMS41LTEuNS0xLjVoLTE1Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2Mw0KCWMwLDAuOCwwLjcsMS41LDEuNSwxLjVzMS41LTAuNywxLjUtMS41VjE1aDQuNXYxOEgyMWMtMC44LDAtMS41LDAuNy0xLjUsMS41UzIwLjIsMzYsMjEsMzZoNmMwLjgsMCwxLjUtMC43LDEuNS0xLjVTMjcuOCwzMywyNywzMw0KCWgtMS41VjE1eiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsOWMwLTUsNC05LDktOWgzMGM1LDAsOSw0LDksOXYzMGMwLDUtNCw5LTksOUg5Yy01LDAtOS00LTktOVY5eiBNOSwzQzUuNywzLDMsNS43LDMsOXYzMGMwLDMuMywyLjcsNiw2LDZoMzANCgljMy4zLDAsNi0yLjcsNi02VjljMC0zLjMtMi43LTYtNi02SDl6Ii8+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./css/icon/undo.png":
/*!***************************!*\
  !*** ./css/icon/undo.png ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNqUkksKwjAURZOuoBN1Et2Fu+gCnJk9uAmRgkP34QJ0HdZJx05EEAsiPG/0BkKtSfvg0Hzeyec1SkTUHzTYgbxrPiXJUNFLLk6gBNM+4lp+4w5sSgzlBTgECyxTopdz3nlD8QFmKbFdML/zdojoKCie3Sq5+sYNiIrHCFzAK2PjCsYqHRm/4ho1O/Meos+pnbhnZwV0RNLMUR8HdzSg4aVLVq+roiVzXK7xEzb4wUdWb0IKjvmw7Qdgg527ook9OcMjVeBJKo6ZMPctwACnXTdL7/2SfgAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./css/icon/zoom-in-btn.png":
/*!**********************************!*\
  !*** ./css/icon/zoom-in-btn.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNqk080rRFEYx/FrXooYESMLLyU2kyYLC8rGRjZ2KFayk5Wy8C9IyUqkpLwtZqGQha2ksJiwQookDGqIRFzfk8d0etwb8dSne+655/zu6dxzs1zXdVTF0YU6RHGFbSzi0PErEyQimMO7+1mn2MWF3L9iHNnWnIyvRhQHMmEa1WpgHAl5voEcv6BlWUmv19ssgxI24RXULA/H1MN23KFB9c/iDbU6yOzLC4rUhG55QZPqr5LVj9r9Ifa7Hju4RRD58h1y5RpBobTTOMGRzMuUCSpBUu5j2FMfds1qV+IMlyjVQU9yXkylMGyFtmEe59J3L9cCq505Ryt48DgffntUJHs6ZfcHyFpAHvqc39UAwkjoFQWQxCMarbdUoAPFVl+LrGbT70DG5MyYsH6E1UBzkockxNQzWr2CjBrsy8AbLGFS9jAt/Vs49grTv0AIPVjHtUxIYRWdsg1lXmHOD/+Wn29hfw3SYTP/CTLKMYLghwADANOLGSKAB/QJAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./css/icon/zoom-out-btn.png":
/*!***********************************!*\
  !*** ./css/icon/zoom-out-btn.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNqk0s8rhEEcx/GxP4pCals5kJIcNm0OLo4u8hcoN7nJSTn4F6TkJFJSxGEPCidXSeGw4YQUB2FRSyTi8Z5892kaM7tPfOvV8zzzzHyeb/NMVRAEyqosBtGFNG6xjzWcKl/pIFGHFXwFP3WJQ1zL8wdmUW2sCZVu0jiRBYtotyZmkZP3O6jxBW1IJ8OurxnGJWzOFdQrL2cqhJQs4xOddpDel3ekIga1SffT5niC/e7GAR4QR73yVxEXOJN1YemgRuTlOYOjMkGtuMINmuygVzkvugqYLBP0JNcG4z48R5t49p0Ph5Ts6YI5HiNrFbUYUdFqDEnk7I5iyOMFPRW66ZNudn0HMoNHCRtF0pqoT/KEhOh6Q78rSOvAsUy8xzrmZQ+LMr6Hc1eY3XoCQ9jGnSwoYAsDsg3NrjAV8U/ZfoX9NcgOW/pPkNaCKcS/BRgAhT8RGdOqXsQAAAAASUVORK5CYII=";

/***/ }),

/***/ "./css/icon/zoom-select-down-1.png":
/*!*****************************************!*\
  !*** ./css/icon/zoom-select-down-1.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpi9M3p/88AAYwMmAAsx4Qk+R+bApA8E5op/9EVwExiwKEQbj0TmhWM2NwHEGAAKH8IVPmZQrgAAAAASUVORK5CYII=";

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
/******/ 			"templatemodSass": 0
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
/*!*******************************!*\
  !*** ./sass/templateMod.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_templateMod_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./templateMod.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/templateMod.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_templateMod_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_templateMod_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_templateMod_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_templateMod_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkZBQTZGLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxTQUFTLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxTQUFTLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sa0JBQWtCLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsS0FBSyxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxTQUFTLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLHdCQUF3QixXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksdUJBQXVCLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLE9BQU8sYUFBYSxhQUFhLGNBQWMsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FB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RkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtS0FBbUssTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLFFBQVEsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxrQkFBa0IsWUFBWSxLQUFLLGlCQUFpQixXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLFlBQVksS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLE9BQU8sS0FBSyxlQUFlLEtBQUsscUJBQXFCLEtBQUssS0FBSyxlQUFlLEtBQUsscUJBQXFCLEtBQUssS0FBSyxlQUFlLEtBQUsscUJBQXFCLE1BQU0sS0FBSyxlQUFlLEtBQUsscUJBQXFCLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGlCQUFpQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxrQkFBa0IsTUFBTSxZQUFZLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixNQUFNLFlBQVksaUJBQWlCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sZ0JBQWdCLEtBQUssWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksaUJBQWlCLEtBQUssVUFBVSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFlBQVksaUJBQWlCLEtBQUssVUFBVSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFlBQVksV0FBVyxXQUFXLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssWUFBWSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrSUFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLGtJQUFPLElBQUksa0lBQU8sVUFBVSxrSUFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2Nzcy92aWV3ZXIuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vc2Fzcy90ZW1wbGF0ZU1vZC5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9zYXNzL3RlbXBsYXRlTW9kLnNjc3M/YmJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRlbXBsYXRlbW9kU2Fzc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZW1wbGF0ZW1vZFNhc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGVtcGxhdGVtb2RTYXNzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2hhZG93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImltYWdlcy9sb2FkaW5nLWljb24uZ2lmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2xvYWRpbmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3RyZWVpdGVtLWV4cGFuZGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImltYWdlcy90cmVlaXRlbS1jb2xsYXBzZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tbWVudUFycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1wYWdlVXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZURvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXpvb21PdXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXpvb21Jbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcHJpbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLW9wZW5GaWxlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1kb3dubG9hZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tYm9va21hcmsuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdMYXllcnMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZmluZGJhckJ1dHRvbi1wcmV2aW91cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2ZpbmRiYXJCdXR0b24tbmV4dC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM2X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM3X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2xvYWRpbmctZGFyay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2dyYWIuY3VyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzQwX19fID0gbmV3IFVSTChcImltYWdlcy9ncmFiYmluZy5jdXJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvblxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG4udGV4dExheWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMC4yO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4udGV4dExheWVyID4gc3BhbiB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIGN1cnNvcjogdGV4dDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxufVxyXG5cclxuLnRleHRMYXllciAuaGlnaGxpZ2h0IHtcclxuICBtYXJnaW46IC0xcHg7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAwLCAxNzAsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmJlZ2luIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmVuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5taWRkbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDEpO1xyXG59XHJcblxyXG4udGV4dExheWVyIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRleHRMYXllciA6OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5lbmRPZkNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTAwJTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5lbmRPZkNvbnRlbnQuYWN0aXZlIHtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIHNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGEsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmtBbm5vdGF0aW9uID4gYTpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMCwgMSk7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRBbm5vdGF0aW9uIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dCxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1NCwgMjU1LCAwLjEzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAzcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Qgb3B0aW9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhIHtcclxuICBmb250OiBtZXNzYWdlLWJveDtcclxuICBmb250LXNpemU6IDlweDtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0W2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWFbZGlzYWJsZWRdLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdFtkaXNhYmxlZF0sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXRbZGlzYWJsZWRdLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dDpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dDpmb2N1cyxcclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6Zm9jdXMsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgbGVmdDogNDUlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbGVmdDogMzAlO1xyXG4gIHRvcDogMjAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWIge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYjpmb2N1cyB7XHJcbiAgLypcclxuICAgKiBMZXR0ZXIgc3BhY2luZyBpcyBwbGFjZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgZWFjaCBjaGFyYWN0ZXIuIEhlbmNlLCB0aGVcclxuICAgKiBsZXR0ZXIgc3BhY2luZyBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSB2aXNpYmxlXHJcbiAgICogYXJlYSwgY2F1c2luZyBob3Jpem9udGFsIHNjcm9sbGluZy4gV2UgYXZvaWQgdGhpcyBieSBleHRlbmRpbmcgdGhlIHdpZHRoXHJcbiAgICogd2hlbiB0aGUgZWxlbWVudCBoYXMgZm9jdXMgYW5kIHJldmVydCB0aGlzIHdoZW4gaXQgbG9zZXMgZm9jdXMuXHJcbiAgICovXHJcbiAgd2lkdGg6IDExNSU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwV3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMGVtO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMTUzLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCA+ICoge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBoMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgcCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmhpZ2hsaWdodEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnVuZGVybGluZUFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWlnZ2x5QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAuc3RyaWtlb3V0QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAuZnJlZVRleHRBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5saW5lQW5ub3RhdGlvbiBzdmcgbGluZSxcclxuLmFubm90YXRpb25MYXllciAuc3F1YXJlQW5ub3RhdGlvbiBzdmcgcmVjdCxcclxuLmFubm90YXRpb25MYXllciAuY2lyY2xlQW5ub3RhdGlvbiBzdmcgZWxsaXBzZSxcclxuLmFubm90YXRpb25MYXllciAucG9seWxpbmVBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcclxuLmFubm90YXRpb25MYXllciAucG9seWdvbkFubm90YXRpb24gc3ZnIHBvbHlnb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNhcmV0QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAuaW5rQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0YW1wQW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAuZmlsZUF0dGFjaG1lbnRBbm5vdGF0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLmNhbnZhc1dyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2Uge1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIHdpZHRoOiA4MTZweDtcclxuICBoZWlnaHQ6IDEwNTZweDtcclxuICBtYXJnaW46IDFweCBhdXRvIC04cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgLW8tYm9yZGVyLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgOSA5IHJlcGVhdDtcclxuICAgICBib3JkZXItaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSA5IDkgcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcgLnBhZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcclxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkLFxyXG4uc3ByZWFkIHtcclxuICBtYXJnaW4tbGVmdDogMy41cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzLjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcclxuLnNwcmVhZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zcHJlYWQgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnNwcmVhZCxcclxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc3ByZWFkIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zLjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0zLjVweDtcclxufVxyXG5cclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAuc3ByZWFkIC5wYWdlLFxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnBkZlZpZXdlciAucGFnZSBjYW52YXMge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBkZlZpZXdlciAucGFnZSBjYW52YXNbaGlkZGVuXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBkZlZpZXdlciAucGFnZSAubG9hZGluZ0ljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSxcclxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAuc3ByZWFkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSxcclxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAucGFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1zaWRlYmFyLXdpZHRoOiAyMDBweDtcclxuICAtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0OiAwO1xyXG5cclxuICAtLXRvb2xiYXItaWNvbi1vcGFjaXR5OiAwLjc7XHJcbiAgLS1kb29yaGFuZ2VyLWljb24tb3BhY2l0eTogMC45O1xyXG5cclxuICAtLW1haW4tY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMSk7XHJcbiAgLS1ib2R5LWJnLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyNDAsIDEpO1xyXG4gIC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yOiByZ2JhKDI1NSwgNzQsIDc0LCAxKTtcclxuICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDEwLCAxMzIsIDI1NSwgMSk7XHJcbiAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjIsIDEpO1xyXG4gIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgxMTYsIDE3NywgMjM5LCAxKTtcclxuICAtLXNjcm9sbGJhci1jb2xvcjogYXV0bztcclxuICAtLXNjcm9sbGJhci1iZy1jb2xvcjogYXV0bztcclxuICAtLXRvb2xiYXItaWNvbi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuXHJcbiAgLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjQwLCAwLjkpO1xyXG4gIC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDcsIDEpO1xyXG4gIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjUwLCAxKTtcclxuICAtLXRvb2xiYXItYm9yZGVyLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpO1xyXG4gIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDIyMSwgMjIyLCAyMjMsIDEpO1xyXG4gIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTksIDEpO1xyXG4gIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLS1maWVsZC1jb2xvcjogcmdiYSg2LCA2LCA2LCAxKTtcclxuICAtLWZpZWxkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODgsIDEpO1xyXG4gIC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yOiByZ2JhKDIyNywgMjI4LCAyMzAsIDEpO1xyXG4gIC0tdHJlZWl0ZW0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtLWRvb3JoYW5nZXItYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjIpO1xyXG4gIC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjM3LCAxKTtcclxuICAtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDEpO1xyXG4gIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4xKTtcclxuICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMyk7XHJcblxyXG4gIC0tbG9hZGluZy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgLS10cmVlaXRlbS1leHBhbmRlZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbiAgLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX199KTtcclxuICAtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX199KTtcclxuICAtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzZfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19ffSk7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICA6cm9vdCB7XHJcbiAgICAtLW1haW4tY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XHJcbiAgICAtLWJvZHktYmctY29sb3I6IHJnYmEoNDIsIDQyLCA0NiwgMSk7XHJcbiAgICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgxOTksIDE3LCAxNywgMSk7XHJcbiAgICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDAsIDk2LCAyMjMsIDEpO1xyXG4gICAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yOiByZ2JhKDQwLCA0MCwgNDMsIDEpO1xyXG4gICAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yOiByZ2JhKDIwLCA2OCwgMTMzLCAxKTtcclxuICAgIC0tc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjMsIDEpO1xyXG4gICAgLS1zY3JvbGxiYXItYmctY29sb3I6IHJnYmEoMzUsIDM1LCAzOSwgMSk7XHJcbiAgICAtLXRvb2xiYXItaWNvbi1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHJcbiAgICAtLXNpZGViYXItbmFycm93LWJnLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDYsIDAuOSk7XHJcbiAgICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSg1MCwgNTAsIDUyLCAxKTtcclxuICAgIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSg1NiwgNTYsIDYxLCAxKTtcclxuICAgIC0tdG9vbGJhci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMSk7XHJcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAzLCAxKTtcclxuICAgIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSg3NCwgNzQsIDc5LCAxKTtcclxuICAgIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtLWZpZWxkLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpO1xyXG4gICAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSg2NCwgNjQsIDY4LCAxKTtcclxuICAgIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xyXG4gICAgLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3I6IHJnYmEoODksIDg5LCA4OSwgMSk7XHJcbiAgICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIC0tZG9vcmhhbmdlci1iZy1jb2xvcjogcmdiYSg3NCwgNzQsIDc5LCAxKTtcclxuICAgIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MywgMSk7XHJcbiAgICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoOTMsIDk0LCA5OCwgMSk7XHJcbiAgICAtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDkyLCA5MiwgOTcsIDEpO1xyXG4gICAgLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcjogcmdiYSg5MiwgOTIsIDk3LCAxKTtcclxuICAgIC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMSk7XHJcblxyXG4gICAgLyogVGhpcyBpbWFnZSBpcyB1c2VkIGluIDxpbnB1dD4gZWxlbWVudHMsIHdoaWNoIHVuZm9ydHVuYXRlbHkgbWVhbnMgdGhhdFxyXG4gICAgICogdGhlIFxcYG1hc2staW1hZ2VcXGAgYXBwcm9hY2ggdXNlZCB3aXRoIGFsbCBvZiB0aGUgb3RoZXIgaW1hZ2VzIGRvZXNuJ3Qgd29ya1xyXG4gICAgICogaGVyZTsgaGVuY2Ugd2h5IHdlIHN0aWxsIGhhdmUgdHdvIHZlcnNpb25zIG9mIHRoaXMgcGFydGljdWxhciBpbWFnZS4gKi9cclxuICAgIC0tbG9hZGluZy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOF9fX30pO1xyXG4gIH1cclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBGb250IHNpemUgaXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFjdGl2aXR5IGJhciB0aGUgY29ycmVjdCBzaXplLiAqL1xyXG4gIC8qIGZvbnQtc2l6ZTogMTBweDsgKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG59XHJcblxyXG5ib2R5LFxyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gIC8qIGZvbnQ6IG1lc3NhZ2UtYm94OyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItY29sb3IpIHZhcigtLXNjcm9sbGJhci1iZy1jb2xvcik7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5baGlkZGVuXSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGRmVmlld2VyLmVuYWJsZVBlcm1pc3Npb25zIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4ge1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjdXJzb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlLnBkZlByZXNlbnRhdGlvbk1vZGVDb250cm9scyA+ICosXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlLnBkZlByZXNlbnRhdGlvbk1vZGVDb250cm9scyAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNzaWRlYmFyQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg1MSwgNTEsIDUxLCAxKTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcclxuICBsZWZ0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XHJcbiAgcmlnaHQ6IGNhbGMoMHB4IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG4gIC8qIFByZXZlbnQgZS5nLiB0aGUgdGh1bWJuYWlscyBiZWluZyBzZWxlY3RlZCB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyTW92aW5nICNzaWRlYmFyQ29udGFpbmVyLFxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNtYWluQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1pbi13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyQ29udGVudCB7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjc2lkZWJhckNvbnRlbnQge1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjc2lkZWJhckNvbnRlbnQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMycHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICN2aWV3ZXJDb250YWluZXIge1xyXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdXHJcbiAgI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuXHJcbiAgI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xyXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdXHJcbiAgI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuXHJcbiAgI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcclxuICByaWdodDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuXHJcbi5NYWluLUNvbnRhaW5lciAudG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbiN0b29sYmFyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3Rvb2xiYXJTaWRlYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyIC50b29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2lkZWJhclJlc2l6ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGN1cnNvcjogZXctcmVzaXplO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNzaWRlYmFyUmVzaXplciB7XHJcbiAgcmlnaHQ6IC02cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3NpZGViYXJSZXNpemVyIHtcclxuICBsZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4jdG9vbGJhckNvbnRhaW5lcixcclxuLmZpbmRiYXIsXHJcbi5zZWNvbmRhcnlUb29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgdmFyKC0tdG9vbGJhci1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4jdG9vbGJhclZpZXdlciB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4jbG9hZGluZ0JhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XHJcblxyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNsb2FkaW5nQmFyIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IHZhcigtLWxvYWRpbmdCYXItZW5kLW9mZnNldCk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2xvYWRpbmdCYXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xyXG4gIGxlZnQ6IHZhcigtLWxvYWRpbmdCYXItZW5kLW9mZnNldCk7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjbG9hZGluZ0JhciB7XHJcbiAgbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcclxuICByaWdodDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI2xvYWRpbmdCYXIge1xyXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XHJcbn1cclxuXHJcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzc0luZGV0ZXJtaW5hdGUge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IC0xNDJweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwcm9ncmVzc0luZGV0ZXJtaW5hdGUge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IC0xNDJweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuI2xvYWRpbmdCYXIgLnByb2dyZXNzLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIC5nbGltbWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxNTBweCk7XHJcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcclxuICAgIDEzNWRlZyxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3IpIDAsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKSA1cHgsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKSA0NXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDU1cHgsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcikgOTVweCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3IpIDEwMHB4XHJcbiAgKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogcHJvZ3Jlc3NJbmRldGVybWluYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3NJbmRldGVybWluYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLmZpbmRiYXIsXHJcbi5zZWNvbmRhcnlUb29sYmFyIHtcclxuICB0b3A6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgcGFkZGluZzogMCA0cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmZpbmRiYXIge1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XHJcbn1cclxuLmZpbmRiYXIgPiBkaXYge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG4uZmluZGJhci53cmFwQ29udGFpbmVycyA+IGRpdiB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLmZpbmRiYXIud3JhcENvbnRhaW5lcnMgPiBkaXYjZmluZGJhck1lc3NhZ2VDb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciB7XHJcbiAgbGVmdDogNjRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciB7XHJcbiAgcmlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xyXG4gIHdpZHRoOiAyOXB4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uZmluZGJhciBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZmluZGJhciBsYWJlbCB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5kYmFyIGxhYmVsOmhvdmVyLFxyXG4uZmluZGJhciBpbnB1dDpmb2N1cyArIGxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjZmluZElucHV0IHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjZmluZElucHV0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5maW5kYmFyIC50b29sYmFyRmllbGRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAudG9vbGJhckxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWJ0bi1iZy1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZpbmRJbnB1dCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiNmaW5kSW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDEpO1xyXG59XHJcbiNmaW5kSW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4jZmluZElucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbiNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XCJwZW5kaW5nXCJdIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1sb2FkaW5nLWljb24pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XCJwZW5kaW5nXCJdIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzcHg7XHJcbn1cclxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cIm5vdEZvdW5kXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTAyLCAxMDIsIDEpO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgcGFkZGluZzogNnB4IDAgMTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMzAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIHJpZ2h0OiA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIGxlZnQ6IDRweDtcclxufVxyXG5cclxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIge1xyXG4gIG1heC13aWR0aDogMjIwcHg7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxufVxyXG5cclxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIuaGlkZGVuU2Nyb2xsTW9kZUJ1dHRvbnMgPiAuc2Nyb2xsTW9kZUJ1dHRvbnMsXHJcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyLmhpZGRlblNwcmVhZE1vZGVCdXR0b25zID4gLnNwcmVhZE1vZGVCdXR0b25zIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kb29ySGFuZ2VyLFxyXG4uZG9vckhhbmdlclJpZ2h0IHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKSxcclxuICAgIDAgMCAwIDFweCB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XHJcbn1cclxuLmRvb3JIYW5nZXI6YWZ0ZXIsXHJcbi5kb29ySGFuZ2VyOmJlZm9yZSxcclxuLmRvb3JIYW5nZXJSaWdodDphZnRlcixcclxuLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uZG9vckhhbmdlcjphZnRlcixcclxuLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XHJcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbn1cclxuLmRvb3JIYW5nZXI6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xyXG59XHJcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xyXG59XHJcbi5kb29ySGFuZ2VyOmJlZm9yZSxcclxuLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItd2lkdGg6IDlweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRvb3JIYW5nZXI6YWZ0ZXIsXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyOmJlZm9yZSxcclxuaHRtbFtkaXI9XCJydGxcIl0gLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxyXG5odG1sW2Rpcj1cImx0clwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICByaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kb29ySGFuZ2VyOmJlZm9yZSxcclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTlweDtcclxufVxyXG5cclxuI2ZpbmRSZXN1bHRzQ291bnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMSk7XHJcbiAgY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNweCA0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiNmaW5kTXNnIHtcclxuICBjb2xvcjogcmdiYSgyNTEsIDAsIDAsIDEpO1xyXG59XHJcbiNmaW5kTXNnOmVtcHR5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdG9vbGJhclZpZXdlck1pZGRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyTGVmdCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCxcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyUmlnaHQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyTGVmdCxcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhckxlZnQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlck1pZGRsZSA+ICosXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJMZWZ0ICosXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0ICosXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5maW5kYmFyICoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlck1pZGRsZSA+ICosXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0ICosXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0ICosXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5maW5kYmFyICoge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbjogMnB4IDJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbixcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24sXHJcbi5vdmVybGF5QnV0dG9uIHtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1idXR0b24tYmctY29sb3IpO1xyXG59XHJcblxyXG4ub3ZlcmxheUJ1dHRvbjpob3ZlcixcclxuLm92ZXJsYXlCdXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24gPiBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b25bZGlzYWJsZWRdLFxyXG4ub3ZlcmxheUJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkIC50b29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpob3ZlcixcclxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZvY3VzLFxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOmhvdmVyLFxyXG4udG9vbGJhckJ1dHRvbi50ZXh0QnV0dG9uOmhvdmVyLFxyXG4udG9vbGJhckJ1dHRvbi50ZXh0QnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG4gIHotaW5kZXg6IDE5OTtcclxufVxyXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQsXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQsXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDEzcHggMDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbixcclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbixcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24sXHJcbi5vdmVybGF5QnV0dG9uIHtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luOiAycHggMXB4O1xyXG4gIHBhZGRpbmc6IDJweCA2cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG4udG9vbGJhckJ1dHRvbjpob3ZlcixcclxuLnRvb2xiYXJCdXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZCxcclxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkID4gLnRvb2xiYXJCdXR0b24udG9nZ2xlZCxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24udG9nZ2xlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcclxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkID4gLnRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3IpO1xyXG59XHJcblxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcik7XHJcbiAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xyXG4gIHRvcDogNnB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcclxuICByaWdodDogN3B4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcclxuICBsZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMXB4IDAgMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0ID4gb3B0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuI2N1c3RvbVNjYWxlT3B0aW9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jcGFnZVdpZHRoT3B0aW9uIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIHNvbGlkO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvblNwYWNlciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbjo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlLFxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlcixcclxuLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcclxuICAvKiBBbGwgbWF0Y2hpbmcgaW1hZ2VzIGhhdmUgYSBzaXplIG9mIDE2eDE2XHJcbiAgICogQWxsIHJlbGV2YW50IGNvbnRhaW5lcnMgaGF2ZSBhIHNpemUgb2YgMjh4MjggKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuXHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tYmctY29sb3IpO1xyXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcclxuICBtYXNrLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiB2YXIoLS10b29sYmFyLWljb24tb3BhY2l0eSk7XHJcbiAgdG9wOiA2cHg7XHJcbiAgbGVmdDogNnB4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiB2YXIoLS1kb29yaGFuZ2VyLWljb24tb3BhY2l0eSk7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgbGVmdDogMTJweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICByaWdodDogMTJweDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uI3NlY29uZGFyeVRvb2xiYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyQnV0dG9uI3NlY29uZGFyeVRvb2xiYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5maW5kUHJldmlvdXM6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLmZpbmROZXh0OjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ucGFnZVVwOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnBhZ2VEb3duOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi56b29tT3V0OjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uem9vbUluOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnByZXNlbnRhdGlvbk1vZGU6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucHJlc2VudGF0aW9uTW9kZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnByaW50OjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByaW50OjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByaW50LWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5vcGVuRmlsZTo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5vcGVuRmlsZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uZG93bmxvYWQ6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZG93bmxvYWQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmJvb2ttYXJrIHtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJvb2ttYXJrW2hyZWY9XCIjXCJdIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLmJvb2ttYXJrOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmJvb2ttYXJrOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb24pO1xyXG59XHJcblxyXG4jdmlld1RodW1ibmFpbC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uKTtcclxufVxyXG5cclxuI3ZpZXdPdXRsaW5lLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3ZpZXdPdXRsaW5lLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4jdmlld0F0dGFjaG1lbnRzLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uKTtcclxufVxyXG5cclxuI3ZpZXdMYXllcnMudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XHJcbn1cclxuXHJcbiNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbiN2aWV3RmluZC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRvcDogMXB4O1xyXG4gIC8qIENyZWF0ZSBhIGZpbGxlZCBjaXJjbGUsIHdpdGggYSBkaWFtZXRlciBvZiA5IHBpeGVscywgdXNpbmcgb25seSBDU1M6ICovXHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMjE5LCA4NSwgMSk7XHJcbiAgaGVpZ2h0OiA5cHg7XHJcbiAgd2lkdGg6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xyXG4gIGxlZnQ6IDE3cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDAgMXB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uID4gc3BhbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uID4gc3BhbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmZpcnN0UGFnZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5sYXN0UGFnZTo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucm90YXRlQ2N3OjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUN3OjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zZWxlY3RUb29sOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uaGFuZFRvb2w6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFZlcnRpY2FsOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxIb3Jpem9udGFsOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsV3JhcHBlZDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZE5vbmU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWRPZGQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkRXZlbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvY3VtZW50UHJvcGVydGllczo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb24pO1xyXG59XHJcblxyXG4udmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMXB4IDA7XHJcbiAgbWFyZ2luOiA1cHggMnB4O1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC52ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3Ige1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbFRvb2xiYXJTZXBhcmF0b3Ige1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNnB4IDAgNXB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQge1xyXG4gIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tZmllbGQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAudG9vbGJhckZpZWxkW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgbWFyZ2luOiAxMHB4IDAgM3B4IDdweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG1hcmdpbjogMTBweCA3cHggM3B4IDA7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQucGFnZU51bWJlciB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIGhpZGVzIHRoZSBzcGlubmVyIGluIG1veiAqL1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyLnZpc2libGVQYWdlSXNMb2FkaW5nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1sb2FkaW5nLWljb24pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbi50b29sYmFyRmllbGQucGFnZU51bWJlcjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMGE4NGZmO1xyXG59XHJcblxyXG4udG9vbGJhckxhYmVsIHtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICNudW1QYWdlcy50b29sYmFyTGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNudW1QYWdlcy50b29sYmFyTGFiZWwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxufVxyXG5cclxuI3RodW1ibmFpbFZpZXcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHggMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3ID4gYTphY3RpdmUsXHJcbiN0aHVtYm5haWxWaWV3ID4gYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50aHVtYm5haWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50aHVtYm5haWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3ID4gYTpsYXN0LW9mLXR5cGUgPiAudGh1bWJuYWlsOm5vdChbZGF0YS1sb2FkZWRdKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsOm5vdChbZGF0YS1sb2FkZWRdKSB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMTMyLCAxMzIsIDEzMiwgMSk7XHJcbiAgbWFyZ2luOiAtMXB4IDlweCA0cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWxJbWFnZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB6LWluZGV4OiA5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbn1cclxuXHJcbi50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG59XHJcblxyXG5hOmZvY3VzID4gLnRodW1ibmFpbCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlLFxyXG4udGh1bWJuYWlsOmhvdmVyID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2Uge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYTpmb2N1cyA+IC50aHVtYm5haWwgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyxcclxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG59XHJcblxyXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50aHVtYm5haWwuc2VsZWN0ZWQgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbiNvdXRsaW5lVmlldyxcclxuI2F0dGFjaG1lbnRzVmlldyxcclxuI2xheWVyc1ZpZXcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDRweCA0cHggMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVXaXRoRGVlcE5lc3RpbmcgPiAudHJlZUl0ZW0sXHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbSA+IC50cmVlSXRlbXMge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRyZWVJdGVtID4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtaW4td2lkdGg6IDk1JTtcclxuICAvKiBTdWJ0cmFjdCB0aGUgcmlnaHQgcGFkZGluZyAobGVmdCwgaW4gUlRMIG1vZGUpIG9mIHRoZSBjb250YWluZXI6ICovXHJcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlSXRlbSA+IGEge1xyXG4gIHBhZGRpbmc6IDJweCAwIDVweCA0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtID4gYSB7XHJcbiAgcGFkZGluZzogMnB4IDRweCA1cHggMDtcclxufVxyXG5cclxuI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+ICoge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjbGF5ZXJzVmlldyAudHJlZUl0ZW0gPiBhID4gbGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNsYXllcnNWaWV3IC50cmVlc0l0ZW0gPiBhID4gbGFiZWwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLnRyZWVJdGVtVG9nZ2xlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1leHBhbmRlZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1leHBhbmRlZC1pY29uKTtcclxufVxyXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWNvbGxhcHNlZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcbi50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuIH4gLnRyZWVJdGVtcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZUl0ZW1Ub2dnbGVyIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW1Ub2dnbGVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcclxuICByaWdodDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgbGVmdDogNHB4O1xyXG59XHJcblxyXG4udHJlZUl0ZW0uc2VsZWN0ZWQgPiBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlcixcclxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciArIGEsXHJcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIgfiAudHJlZUl0ZW1zLFxyXG4udHJlZUl0ZW0gPiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLyogVE9ETzogZmlsZSBGRiBidWcgdG8gc3VwcG9ydCA6Oi1tb3otc2VsZWN0aW9uOndpbmRvdy1pbmFjdGl2ZVxyXG4gICBzbyB3ZSBjYW4gb3ZlcnJpZGUgdGhlIG9wYXF1ZSBncmV5IGJhY2tncm91bmQgd2hlbiB0aGUgd2luZG93IGlzIGluYWN0aXZlO1xyXG4gICBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzA2MjA5ICovXHJcbjo6LW1vei1zZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xyXG59XHJcbjo6c2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuI2Vycm9yV3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB2YXIoLS1lcnJvcldyYXBwZXItYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHBhZGRpbmc6IDNweCA2cHg7XHJcbn1cclxuXHJcbiNlcnJvck1lc3NhZ2VMZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2Vycm9yTWVzc2FnZVJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNlcnJvck1vcmVJbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW46IDNweDtcclxuICB3aWR0aDogOTglO1xyXG59XHJcblxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAzcHggNHB4IDJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDJweCAxMXB4O1xyXG59XHJcblxyXG4jb3ZlcmxheUNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogNDAwMDA7XHJcbn1cclxuI292ZXJsYXlDb250YWluZXIgPiAqIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI292ZXJsYXlDb250YWluZXIgPiAuY29udGFpbmVyID4gLmRpYWxvZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDRweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmRpYWxvZyA+IC5yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcclxufVxyXG5cclxuLmRpYWxvZyA+IC5yb3cgPiAqIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG59XHJcblxyXG4uZGlhbG9nIC50b29sYmFyRmllbGQge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5kaWFsb2cgLnNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA0cHggMDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xyXG59XHJcblxyXG4uZGlhbG9nIC5idXR0b25Sb3cge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZGlhbG9nIDpsaW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuI3Bhc3N3b3JkT3ZlcmxheSA+IC5kaWFsb2cge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGFzc3dvcmRPdmVybGF5IC50b29sYmFyRmllbGQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgPiAuZGlhbG9nIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gc3BhbiB7XHJcbiAgd2lkdGg6IDEyNXB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gcCB7XHJcbiAgbWF4LXdpZHRoOiAyMjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLmJ1dHRvblJvdyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNsZWFyQm90aCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5maWxlSW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4jUERGQnVnIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuI1BERkJ1ZyAuY29udHJvbHMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcbiNQREZCdWcgLnBhbmVscyB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDI3cHg7XHJcbn1cclxuI1BERkJ1ZyAucGFuZWxzID4gZGl2IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuI1BERkJ1ZyBidXR0b24uYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGVidWdnZXJTaG93VGV4dCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDEpO1xyXG59XHJcbi5kZWJ1Z2dlckhpZGVUZXh0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xyXG59XHJcbiNQREZCdWcgLnN0YXRzIHtcclxuICBmb250LWZhbWlseTogY291cmllcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxufVxyXG4jUERGQnVnIC5zdGF0cyAudGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNQREZCdWcgdGFibGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAudGV4dExheWVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC5jYW52YXNXcmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMjU1LCAxMjgsIDEpO1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC5jYW52YXNXcmFwcGVyIGNhbnZhcyB7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4jdmlld2VyLnRleHRMYXllci1ob3ZlciAudGV4dExheWVyID4gc3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItc2hhZG93IC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbn1cclxuXHJcbi5ncmFiLXRvLXBhbi1ncmFiIHtcclxuICBjdXJzb3I6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19ffSksIG1vdmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogZ3JhYiAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmFiLXRvLXBhbi1ncmFiXHJcbiAgKjpub3QoaW5wdXQpOm5vdCh0ZXh0YXJlYSk6bm90KGJ1dHRvbik6bm90KHNlbGVjdCk6bm90KDpsaW5rKSB7XHJcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyYWItdG8tcGFuLWdyYWI6YWN0aXZlLFxyXG4uZ3JhYi10by1wYW4tZ3JhYmJpbmcge1xyXG4gIGN1cnNvcjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNDBfX199KSwgbW92ZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZyAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogZ3JhYmJpbmcgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiA1MDAwMDsgLyogc2hvdWxkIGJlIGhpZ2hlciB0aGFuIGFueXRoaW5nIGVsc2UgaW4gUERGLmpzISAqL1xyXG59XHJcblxyXG5AcGFnZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jcHJpbnRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLyogR2VuZXJhbCBydWxlcyBmb3IgcHJpbnRpbmcuICovXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1velByaW50Q2FsbGJhY2suICovXHJcbiAgI3NpZGViYXJDb250YWluZXIsXHJcbiAgI3NlY29uZGFyeVRvb2xiYXIsXHJcbiAgLnRvb2xiYXIsXHJcbiAgI2xvYWRpbmdCb3gsXHJcbiAgI2Vycm9yV3JhcHBlcixcclxuICAudGV4dExheWVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAjbWFpbkNvbnRhaW5lcixcclxuICAjdmlld2VyQ29udGFpbmVyLFxyXG4gIC5wYWdlLFxyXG4gIC5wYWdlIGNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5wYWdlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICB9XHJcblxyXG4gIC5wYWdlW2RhdGEtbG9hZGVkXSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5maWxlSW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIFJ1bGVzIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgUERGLmpzIHByaW50aW5nICovXHJcbiAgYm9keVtkYXRhLXBkZmpzcHJpbnRpbmddICNvdXRlckNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBib2R5W2RhdGEtcGRmanNwcmludGluZ10gI3ByaW50Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAjcHJpbnRDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAvKiB3cmFwcGVyIGFyb3VuZCAoc2NhbGVkKSBwcmludCBjYW52YXMgZWxlbWVudHMgKi9cclxuICAjcHJpbnRDb250YWluZXIgPiBkaXYge1xyXG4gICAgLyogV2l0aG91dCB0aGUgZm9sbG93aW5nIG1heC1oZWlnaHQgZGVjbGFyYXRpb24sIENocm9taXVtIG1pZ2h0IGNyZWF0ZSBleHRyYVxyXG4gICAgICogYmxhbmsgcGFnZXMsIGV2ZW4gdGhvdWdoIGl0IHNob3VsZG4ndCEgKi9cclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcblxyXG4gICAgLyogSWYgd2UncmUgc21hbGxlciB0aGFuIHRoZSBwYWdlLCBjZW50ZXIgdGhlIGNhbnZhcyBob3Jpem9udGFsbHkgYW5kXHJcbiAgICAgKiB2ZXJ0aWNhbGx5ICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNwcmludENvbnRhaW5lciBjYW52YXMsXHJcbiAgI3ByaW50Q29udGFpbmVyIGltZyB7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLnZpc2libGVMYXJnZVZpZXcsXHJcbi52aXNpYmxlTWVkaXVtVmlldyxcclxuLnZpc2libGVTbWFsbFZpZXcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItbmFycm93LWJnLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIGh0bWxbZGlyPVwibHRyXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaHRtbFtkaXI9XCJydGxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmhpZGRlblNtYWxsVmlldyxcclxuICAuaGlkZGVuU21hbGxWaWV3ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnZpc2libGVTbWFsbFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPVwibHRyXCJdIC5maW5kYmFyIHtcclxuICAgIGxlZnQ6IDM0cHg7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPVwicnRsXCJdIC5maW5kYmFyIHtcclxuICAgIHJpZ2h0OiAzNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcclxuICAjc2NhbGVTZWxlY3RDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jc3Mvdmlld2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFFOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7S0FDdEIsc0JBQXNCO1VBQ2pCLGlCQUFpQjtBQUMzQjs7QUFFQTtFQUNFLE1BQU07QUFDUjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gs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QUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ29weXJpZ2h0IDIwMTQgTW96aWxsYSBGb3VuZGF0aW9uXFxyXFxuICpcXHJcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXHJcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxyXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxyXFxuICpcXHJcXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxyXFxuICpcXHJcXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXFxyXFxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUyxcXHJcXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cXHJcXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXFxyXFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxyXFxuICovXFxyXFxuXFxyXFxuLnRleHRMYXllciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0IHtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG4gIHBhZGRpbmc6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAwLCAxNzAsIDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQuYmVnaW4ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5lbmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5taWRkbGUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0LnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciA6Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciA6OnNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmVuZE9mQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5lbmRPZkNvbnRlbnQuYWN0aXZlIHtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciBzZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmtBbm5vdGF0aW9uID4gYSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGE6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRBbm5vdGF0aW9uIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDU0LCAyNTUsIDAuMTMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDNweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Qgb3B0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSB7XFxyXFxuICBmb250OiBtZXNzYWdlLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogOXB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dFtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWFbZGlzYWJsZWRdLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0W2Rpc2FibGVkXSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0W2Rpc2FibGVkXSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dDpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYTpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6Zm9jdXMsXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6Zm9jdXMsXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGxlZnQ6IDMwJTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYiB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iOmZvY3VzIHtcXHJcXG4gIC8qXFxyXFxuICAgKiBMZXR0ZXIgc3BhY2luZyBpcyBwbGFjZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgZWFjaCBjaGFyYWN0ZXIuIEhlbmNlLCB0aGVcXHJcXG4gICAqIGxldHRlciBzcGFjaW5nIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBtYXkgYmUgcGxhY2VkIG91dHNpZGUgdGhlIHZpc2libGVcXHJcXG4gICAqIGFyZWEsIGNhdXNpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIFdlIGF2b2lkIHRoaXMgYnkgZXh0ZW5kaW5nIHRoZSB3aWR0aFxcclxcbiAgICogd2hlbiB0aGUgZWxlbWVudCBoYXMgZm9jdXMgYW5kIHJldmVydCB0aGlzIHdoZW4gaXQgbG9zZXMgZm9jdXMuXFxyXFxuICAgKi9cXHJcXG4gIHdpZHRoOiAxMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXBXcmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAxNTMsIDEpO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udDogbWVzc2FnZS1ib3g7XFxyXFxuICBmb250LXNpemU6IDlweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwID4gKiB7XFxyXFxuICBmb250LXNpemU6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAgaDEge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHAge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMSk7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5oaWdobGlnaHRBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnVuZGVybGluZUFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuc3F1aWdnbHlBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0cmlrZW91dEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuZnJlZVRleHRBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmxpbmVBbm5vdGF0aW9uIHN2ZyBsaW5lLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWFyZUFubm90YXRpb24gc3ZnIHJlY3QsXFxyXFxuLmFubm90YXRpb25MYXllciAuY2lyY2xlQW5ub3RhdGlvbiBzdmcgZWxsaXBzZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb2x5bGluZUFubm90YXRpb24gc3ZnIHBvbHlsaW5lLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlnb25Bbm5vdGF0aW9uIHN2ZyBwb2x5Z29uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNhcmV0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5pbmtBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zdGFtcEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuZmlsZUF0dGFjaG1lbnRBbm5vdGF0aW9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAuY2FudmFzV3JhcHBlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgd2lkdGg6IDgxNnB4O1xcclxcbiAgaGVpZ2h0OiAxMDU2cHg7XFxyXFxuICBtYXJnaW46IDFweCBhdXRvIC04cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIGJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXHJcXG4gIC1vLWJvcmRlci1pbWFnZTogdXJsKGltYWdlcy9zaGFkb3cucG5nKSA5IDkgcmVwZWF0O1xcclxcbiAgICAgYm9yZGVyLWltYWdlOiB1cmwoaW1hZ2VzL3NoYWRvdy5wbmcpIDkgOSByZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuc2luZ2xlUGFnZVZpZXcge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IC5wYWdlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCxcXHJcXG4uc3ByZWFkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzLjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMy41cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcXHJcXG4uc3ByZWFkIHtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zcHJlYWQgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnNwcmVhZCxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByZWFkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zLjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTMuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5zcHJlYWQgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycy5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsV3JhcHBlZCAucGFnZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhc1toaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLnBhZ2UgLmxvYWRpbmdJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJpbWFnZXMvbG9hZGluZy1pY29uLmdpZlxcXCIpIGNlbnRlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAuc3ByZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5wYWdlLFxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tc2lkZWJhci13aWR0aDogMjAwcHg7XFxyXFxuICAtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICAtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAtLWxvYWRpbmdCYXItZW5kLW9mZnNldDogMDtcXHJcXG5cXHJcXG4gIC0tdG9vbGJhci1pY29uLW9wYWNpdHk6IDAuNztcXHJcXG4gIC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHk6IDAuOTtcXHJcXG5cXHJcXG4gIC0tbWFpbi1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAxKTtcXHJcXG4gIC0tYm9keS1iZy1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjQwLCAxKTtcXHJcXG4gIC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yOiByZ2JhKDI1NSwgNzQsIDc0LCAxKTtcXHJcXG4gIC0tcHJvZ3Jlc3NCYXItY29sb3I6IHJnYmEoMTAsIDEzMiwgMjU1LCAxKTtcXHJcXG4gIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIyLCAxKTtcXHJcXG4gIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgxMTYsIDE3NywgMjM5LCAxKTtcXHJcXG4gIC0tc2Nyb2xsYmFyLWNvbG9yOiBhdXRvO1xcclxcbiAgLS1zY3JvbGxiYXItYmctY29sb3I6IGF1dG87XFxyXFxuICAtLXRvb2xiYXItaWNvbi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG5cXHJcXG4gIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMC45KTtcXHJcXG4gIC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDcsIDEpO1xcclxcbiAgLS10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNTAsIDEpO1xcclxcbiAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcXHJcXG4gIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDIyMSwgMjIyLCAyMjMsIDEpO1xcclxcbiAgLS10b2dnbGVkLWJ0bi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yOiByZ2JhKDIxNSwgMjE1LCAyMTksIDEpO1xcclxcbiAgLS1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC0tZmllbGQtY29sb3I6IHJnYmEoNiwgNiwgNiwgMSk7XFxyXFxuICAtLWZpZWxkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgLS1maWVsZC1ib3JkZXItY29sb3I6IHJnYmEoMTg3LCAxODcsIDE4OCwgMSk7XFxyXFxuICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSgyMjcsIDIyOCwgMjMwLCAxKTtcXHJcXG4gIC0tdHJlZWl0ZW0tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIC0tdHJlZWl0ZW0taG92ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXHJcXG4gIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICAtLXNpZGViYXJpdGVtLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjIpO1xcclxcbiAgLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyMzcsIDEpO1xcclxcbiAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAxKTtcXHJcXG4gIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4xKTtcXHJcXG4gIC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4zKTtcXHJcXG5cXHJcXG4gIC0tbG9hZGluZy1pY29uOiB1cmwoaW1hZ2VzL2xvYWRpbmcuc3ZnKTtcXHJcXG4gIC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbjogdXJsKGltYWdlcy90cmVlaXRlbS1leHBhbmRlZC5zdmcpO1xcclxcbiAgLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbjogdXJsKGltYWdlcy90cmVlaXRlbS1jb2xsYXBzZWQuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLW1lbnVBcnJvdy5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1wYWdlVXAuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZURvd24uc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tT3V0LnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tSW4uc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXByaW50LnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLW9wZW5GaWxlLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLWRvd25sb2FkLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLWJvb2ttYXJrLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld0xheWVycy5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1zZWFyY2guc3ZnKTtcXHJcXG4gIC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uOiB1cmwoaW1hZ2VzL2ZpbmRiYXJCdXR0b24tcHJldmlvdXMuc3ZnKTtcXHJcXG4gIC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb246IHVybChpbWFnZXMvZmluZGJhckJ1dHRvbi1uZXh0LnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2Uuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2Uuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE5vbmUuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4uc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjUwLCAxKTtcXHJcXG4gICAgLS1ib2R5LWJnLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDYsIDEpO1xcclxcbiAgICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgxOTksIDE3LCAxNywgMSk7XFxyXFxuICAgIC0tcHJvZ3Jlc3NCYXItY29sb3I6IHJnYmEoMCwgOTYsIDIyMywgMSk7XFxyXFxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSg0MCwgNDAsIDQzLCAxKTtcXHJcXG4gICAgLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yOiByZ2JhKDIwLCA2OCwgMTMzLCAxKTtcXHJcXG4gICAgLS1zY3JvbGxiYXItY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMywgMSk7XFxyXFxuICAgIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiByZ2JhKDM1LCAzNSwgMzksIDEpO1xcclxcbiAgICAtLXRvb2xiYXItaWNvbi1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG5cXHJcXG4gICAgLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAwLjkpO1xcclxcbiAgICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSg1MCwgNTAsIDUyLCAxKTtcXHJcXG4gICAgLS10b29sYmFyLWJnLWNvbG9yOiByZ2JhKDU2LCA1NiwgNjEsIDEpO1xcclxcbiAgICAtLXRvb2xiYXItYm9yZGVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xcclxcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAzLCAxKTtcXHJcXG4gICAgLS10b2dnbGVkLWJ0bi1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICAtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSg3NCwgNzQsIDc5LCAxKTtcXHJcXG4gICAgLS1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgLS1maWVsZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcXHJcXG4gICAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSg2NCwgNjQsIDY4LCAxKTtcXHJcXG4gICAgLS1maWVsZC1ib3JkZXItY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMSk7XFxyXFxuICAgIC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yOiByZ2JhKDg5LCA4OSwgODksIDEpO1xcclxcbiAgICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICAgIC0tdHJlZWl0ZW0taG92ZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgICAtLXNpZGViYXJpdGVtLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XFxyXFxuICAgIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMzksIDM5LCA0MywgMSk7XFxyXFxuICAgIC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcjogcmdiYSg5MywgOTQsIDk4LCAxKTtcXHJcXG4gICAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSg5MiwgOTIsIDk3LCAxKTtcXHJcXG4gICAgLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcjogcmdiYSg5MiwgOTIsIDk3LCAxKTtcXHJcXG4gICAgLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMTUsIDExNSwgMTE1LCAxKTtcXHJcXG5cXHJcXG4gICAgLyogVGhpcyBpbWFnZSBpcyB1c2VkIGluIDxpbnB1dD4gZWxlbWVudHMsIHdoaWNoIHVuZm9ydHVuYXRlbHkgbWVhbnMgdGhhdFxcclxcbiAgICAgKiB0aGUgYG1hc2staW1hZ2VgIGFwcHJvYWNoIHVzZWQgd2l0aCBhbGwgb2YgdGhlIG90aGVyIGltYWdlcyBkb2Vzbid0IHdvcmtcXHJcXG4gICAgICogaGVyZTsgaGVuY2Ugd2h5IHdlIHN0aWxsIGhhdmUgdHdvIHZlcnNpb25zIG9mIHRoaXMgcGFydGljdWxhciBpbWFnZS4gKi9cXHJcXG4gICAgLS1sb2FkaW5nLWljb246IHVybChpbWFnZXMvbG9hZGluZy1kYXJrLnN2Zyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIC8qIEZvbnQgc2l6ZSBpcyBuZWVkZWQgdG8gbWFrZSB0aGUgYWN0aXZpdHkgYmFyIHRoZSBjb3JyZWN0IHNpemUuICovXFxyXFxuICAvKiBmb250LXNpemU6IDEwcHg7ICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIC8qIGZvbnQ6IG1lc3NhZ2UtYm94OyAqL1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLWNvbG9yKSB2YXIoLS1zY3JvbGxiYXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLmVuYWJsZVBlcm1pc3Npb25zIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4ge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgPiAqLFxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlLnBkZlByZXNlbnRhdGlvbk1vZGVDb250cm9scyAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXHJcXG4gIGxlZnQ6IGNhbGMoMHB4IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XFxyXFxuICByaWdodDogY2FsYygwcHggLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xcclxcbiAgLyogUHJldmVudCBlLmcuIHRoZSB0aHVtYm5haWxzIGJlaW5nIHNlbGVjdGVkIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJNb3ZpbmcgI3NpZGViYXJDb250YWluZXIsXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5Db250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWluLXdpZHRoOiAzMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXJDb250ZW50IHtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjc2lkZWJhckNvbnRlbnQge1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjc2lkZWJhckNvbnRlbnQge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4jdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdXFxyXFxuICAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW5cXHJcXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcclxcbiAgbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXVxcclxcbiAgI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuXFxyXFxuICAjdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XFxyXFxuICByaWdodDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxufVxcclxcblxcclxcbi5NYWluLUNvbnRhaW5lciAudG9vbGJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4jdG9vbGJhckNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJTaWRlYmFyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci10b29sYmFyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyIC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyUmVzaXplciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogNnB4O1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjc2lkZWJhclJlc2l6ZXIge1xcclxcbiAgcmlnaHQ6IC02cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjc2lkZWJhclJlc2l6ZXIge1xcclxcbiAgbGVmdDogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJDb250YWluZXIsXFxyXFxuLmZpbmRiYXIsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXRvb2xiYXItYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJWaWV3ZXIge1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZ0JhciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRvb2xiYXItYm9yZGVyLWNvbG9yKTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjbG9hZGluZ0JhciB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2xvYWRpbmdCYXIge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XFxyXFxuICBsZWZ0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI2xvYWRpbmdCYXIge1xcclxcbiAgbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI2xvYWRpbmdCYXIge1xcclxcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNsb2FkaW5nQmFyIHtcXHJcXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIgLnByb2dyZXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcik7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzc0luZGV0ZXJtaW5hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAtMTQycHg7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBwcm9ncmVzc0luZGV0ZXJtaW5hdGUge1xcclxcbiAgMCUge1xcclxcbiAgICBsZWZ0OiAtMTQycHg7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIgLnByb2dyZXNzLmluZGV0ZXJtaW5hdGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3MuaW5kZXRlcm1pbmF0ZSAuZ2xpbW1lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDE1MHB4KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDEzNWRlZyxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcikgMCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNXB4LFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKSA0NXB4LFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1jb2xvcikgNTVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDk1cHgsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3IpIDEwMHB4XFxyXFxuICApO1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3NJbmRldGVybWluYXRlIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXIge1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTAwMDA7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4td2lkdGg6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAwIDRweDtcXHJcXG4gIG1hcmdpbjogNHB4IDJweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciB7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcbi5maW5kYmFyID4gZGl2IHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuLmZpbmRiYXIud3JhcENvbnRhaW5lcnMgPiBkaXYge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2I2ZpbmRiYXJNZXNzYWdlQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyIHtcXHJcXG4gIGxlZnQ6IDY0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZmluZGJhciB7XFxyXFxuICByaWdodDogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIGhlaWdodDogMjZweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcXHJcXG4gIHdpZHRoOiAyOXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgbGFiZWwge1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciBsYWJlbDpob3ZlcixcXHJcXG4uZmluZGJhciBpbnB1dDpmb2N1cyArIGxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjZmluZElucHV0IHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjZmluZElucHV0IHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAudG9vbGJhckZpZWxkW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC50b29sYmFyTGFiZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNmaW5kSW5wdXQge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG4jZmluZElucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDEpO1xcclxcbn1cXHJcXG4jZmluZElucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG4jZmluZElucHV0W2RhdGEtc3RhdHVzPVxcXCJwZW5kaW5nXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5OCU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjZmluZElucHV0W2RhdGEtc3RhdHVzPVxcXCJwZW5kaW5nXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xcclxcbn1cXHJcXG4jZmluZElucHV0W2RhdGEtc3RhdHVzPVxcXCJub3RGb3VuZFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMDIsIDEwMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHBhZGRpbmc6IDZweCAwIDEwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB6LWluZGV4OiAzMDAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXIge1xcclxcbiAgcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIGxlZnQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XFxyXFxufVxcclxcblxcclxcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyLmhpZGRlblNjcm9sbE1vZGVCdXR0b25zID4gLnNjcm9sbE1vZGVCdXR0b25zLFxcclxcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyLmhpZGRlblNwcmVhZE1vZGVCdXR0b25zID4gLnNwcmVhZE1vZGVCdXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvb3JIYW5nZXIsXFxyXFxuLmRvb3JIYW5nZXJSaWdodCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpLFxcclxcbiAgICAwIDAgMCAxcHggdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG4uZG9vckhhbmdlcjphZnRlcixcXHJcXG4uZG9vckhhbmdlcjpiZWZvcmUsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDphZnRlcixcXHJcXG4uZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XFxyXFxuICBib3R0b206IDEwMCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4uZG9vckhhbmdlcjphZnRlcixcXHJcXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcXHJcXG4gIGJvcmRlci13aWR0aDogOHB4O1xcclxcbn1cXHJcXG4uZG9vckhhbmdlcjphZnRlciB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YmVmb3JlLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci13aWR0aDogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRvb3JIYW5nZXI6YmVmb3JlLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlcjphZnRlcixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogLThweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC05cHg7XFxyXFxufVxcclxcblxcclxcbiNmaW5kUmVzdWx0c0NvdW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE3LCAyMTcsIDIxNywgMSk7XFxyXFxuICBjb2xvcjogcmdiYSg4MiwgODIsIDgyLCAxKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweCA0cHg7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZpbmRNc2cge1xcclxcbiAgY29sb3I6IHJnYmEoMjUxLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuI2ZpbmRNc2c6ZW1wdHkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTGVmdCxcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciAqIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZmluZGJhciAqIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDJweCAycHggMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogMCBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHdpZHRoOiAyOHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG4ub3ZlcmxheUJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5QnV0dG9uOmhvdmVyLFxcclxcbi5vdmVybGF5QnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24gPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b25bZGlzYWJsZWRdLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcXHJcXG4ub3ZlcmxheUJ1dHRvbltkaXNhYmxlZF0ge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246aG92ZXIsXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZvY3VzLFxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b246aG92ZXIsXFxyXFxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpob3ZlcixcXHJcXG4udG9vbGJhckJ1dHRvbi50ZXh0QnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxuICB6LWluZGV4OiAxOTk7XFxyXFxufVxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxM3B4IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLFxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24sXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24sXFxyXFxuLm92ZXJsYXlCdXR0b24ge1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgbWFyZ2luOiAycHggMXB4O1xcclxcbiAgcGFkZGluZzogMnB4IDZweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcbi50b29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi50b29sYmFyQnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItaG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi50b2dnbGVkLFxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24udG9nZ2xlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWJ0bi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24ge1xcclxcbiAgd2lkdGg6IDE0MHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xcclxcbiAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcXHJcXG4gIHRvcDogNnB4O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1tZW51QXJyb3ctaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XFxyXFxuICByaWdodDogN3B4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xcclxcbiAgbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxNjJweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDFweCAwIDJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0ID4gb3B0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VzdG9tU2NhbGVPcHRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VXaWR0aE9wdGlvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvblNwYWNlciB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbjo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUsXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIsXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcXHJcXG4gIC8qIEFsbCBtYXRjaGluZyBpbWFnZXMgaGF2ZSBhIHNpemUgb2YgMTZ4MTZcXHJcXG4gICAqIEFsbCByZWxldmFudCBjb250YWluZXJzIGhhdmUgYSBzaXplIG9mIDI4eDI4ICovXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG5cXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWJnLWNvbG9yKTtcXHJcXG4gIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXHJcXG4gIG1hc2stc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogdmFyKC0tdG9vbGJhci1pY29uLW9wYWNpdHkpO1xcclxcbiAgdG9wOiA2cHg7XFxyXFxuICBsZWZ0OiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogdmFyKC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHkpO1xcclxcbiAgdG9wOiA1cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDEycHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbiNzaWRlYmFyVG9nZ2xlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudG9vbGJhckJ1dHRvbiNzaWRlYmFyVG9nZ2xlOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5maW5kUHJldmlvdXM6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5maW5kTmV4dDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1uZXh0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wYWdlVXA6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnBhZ2VEb3duOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VEb3duLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uem9vbU91dDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tT3V0LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi56b29tSW46OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi16b29tSW4taWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnByZXNlbnRhdGlvbk1vZGU6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnByaW50OjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucHJpbnQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByaW50LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5vcGVuRmlsZTo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLm9wZW5GaWxlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uZG93bmxvYWQ6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5kb3dubG9hZDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmJvb2ttYXJrIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib29rbWFya1tocmVmPVxcXCIjXFxcIl0ge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLmJvb2ttYXJrOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uYm9va21hcms6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld1RodW1ibmFpbC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbik7XFxyXFxufVxcclxcblxcclxcbiN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld0F0dGFjaG1lbnRzLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XFxyXFxufVxcclxcblxcclxcbiN2aWV3TGF5ZXJzLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnRPdXRsaW5lSXRlbS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tY3VycmVudE91dGxpbmVJdGVtLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2N1cnJlbnRPdXRsaW5lSXRlbS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld0ZpbmQudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdG9wOiAxcHg7XFxyXFxuICAvKiBDcmVhdGUgYSBmaWxsZWQgY2lyY2xlLCB3aXRoIGEgZGlhbWV0ZXIgb2YgOSBwaXhlbHMsIHVzaW5nIG9ubHkgQ1NTOiAqL1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExMiwgMjE5LCA4NSwgMSk7XFxyXFxuICBoZWlnaHQ6IDlweDtcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XFxyXFxuICBsZWZ0OiAxN3B4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMCAxcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiAyNnB4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDM2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xcclxcbiAgcGFkZGluZy1yaWdodDogMzZweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24gPiBzcGFuIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uID4gc3BhbiB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZmlyc3RQYWdlOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5sYXN0UGFnZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1sYXN0UGFnZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUNjdzo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucm90YXRlQ3c6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zZWxlY3RUb29sOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmhhbmRUb29sOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsVmVydGljYWw6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxIb3Jpem9udGFsOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFdyYXBwZWQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkTm9uZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWRPZGQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZEV2ZW46OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkRXZlbi1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZG9jdW1lbnRQcm9wZXJ0aWVzOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTFweCAwO1xcclxcbiAgbWFyZ2luOiA1cHggMnB4O1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9yaXpvbnRhbFRvb2xiYXJTZXBhcmF0b3Ige1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDZweCAwIDVweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkIHtcXHJcXG4gIHBhZGRpbmc6IDRweCA3cHg7XFxyXFxuICBtYXJnaW46IDNweCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZmllbGQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50b29sYmFyRmllbGRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBtYXJnaW46IDEwcHggMCAzcHggN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG1hcmdpbjogMTBweCA3cHggM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGQucGFnZU51bWJlciB7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogaGlkZXMgdGhlIHNwaW5uZXIgaW4gbW96ICovXFxyXFxuICBtaW4td2lkdGg6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIudmlzaWJsZVBhZ2VJc0xvYWRpbmcge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyRmllbGQucGFnZU51bWJlcjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzBhODRmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJMYWJlbCB7XFxyXFxuICBtaW4td2lkdGg6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI251bVBhZ2VzLnRvb2xiYXJMYWJlbCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbiN0aHVtYm5haWxWaWV3IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMzBweCAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcblxcclxcbiN0aHVtYm5haWxWaWV3ID4gYTphY3RpdmUsXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWwge1xcclxcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRodW1ibmFpbCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50aHVtYm5haWwge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyA+IGE6bGFzdC1vZi10eXBlID4gLnRodW1ibmFpbCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyA+IGE6bGFzdC1vZi10eXBlID4gLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsOm5vdChbZGF0YS1sb2FkZWRdKSB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxMzIsIDEzMiwgMTMyLCAxKTtcXHJcXG4gIG1hcmdpbjogLTFweCA5cHggNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsSW1hZ2Uge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2UsXFxyXFxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuYTpmb2N1cyA+IC50aHVtYm5haWwgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyxcXHJcXG4udGh1bWJuYWlsOmhvdmVyID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWwuc2VsZWN0ZWQgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0bGluZVZpZXcsXFxyXFxuI2F0dGFjaG1lbnRzVmlldyxcXHJcXG4jbGF5ZXJzVmlldyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHBhZGRpbmc6IDRweCA0cHggMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVXaXRoRGVlcE5lc3RpbmcgPiAudHJlZUl0ZW0sXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlSXRlbSA+IC50cmVlSXRlbXMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZVdpdGhEZWVwTmVzdGluZyA+IC50cmVlSXRlbSxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtID4gLnRyZWVJdGVtcyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbSA+IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWluLXdpZHRoOiA5NSU7XFxyXFxuICAvKiBTdWJ0cmFjdCB0aGUgcmlnaHQgcGFkZGluZyAobGVmdCwgaW4gUlRMIG1vZGUpIG9mIHRoZSBjb250YWluZXI6ICovXFxyXFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtID4gYSB7XFxyXFxuICBwYWRkaW5nOiAycHggMCA1cHggNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtID4gYSB7XFxyXFxuICBwYWRkaW5nOiAycHggNHB4IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGF5ZXJzVmlldyAudHJlZUl0ZW0gPiBhID4gKiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjbGF5ZXJzVmlldyAudHJlZUl0ZW0gPiBhID4gbGFiZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjbGF5ZXJzVmlldyAudHJlZXNJdGVtID4gYSA+IGxhYmVsIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWVJdGVtVG9nZ2xlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxufVxcclxcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWV4cGFuZGVkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XFxyXFxufVxcclxcbi50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW4gfiAudHJlZUl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbS5zZWxlY3RlZCA+IGEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlcixcXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyICsgYSxcXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyIH4gLnRyZWVJdGVtcyxcXHJcXG4udHJlZUl0ZW0gPiBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPOiBmaWxlIEZGIGJ1ZyB0byBzdXBwb3J0IDo6LW1vei1zZWxlY3Rpb246d2luZG93LWluYWN0aXZlXFxyXFxuICAgc28gd2UgY2FuIG92ZXJyaWRlIHRoZSBvcGFxdWUgZ3JleSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHdpbmRvdyBpcyBpbmFjdGl2ZTtcXHJcXG4gICBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzA2MjA5ICovXFxyXFxuOjotbW96LXNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcXHJcXG59XFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvcldyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB2YXIoLS1lcnJvcldyYXBwZXItYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxyXFxufVxcclxcblxcclxcbiNlcnJvck1lc3NhZ2VMZWZ0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNZXNzYWdlUmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNb3JlSW5mbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZmllbGQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgd2lkdGg6IDk4JTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXlCdXR0b24ge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtYXJnaW46IDNweCA0cHggMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAycHggMTFweDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXlDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHotaW5kZXg6IDQwMDAwO1xcclxcbn1cXHJcXG4jb3ZlcmxheUNvbnRhaW5lciA+ICoge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXlDb250YWluZXIgPiAuY29udGFpbmVyID4gLmRpYWxvZyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nID4gLnJvdyB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgPiAucm93ID4gKiB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIC50b29sYmFyRmllbGQge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyAuc2VwYXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA0cHggMDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nIC5idXR0b25Sb3cge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyA6bGluayB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Bhc3N3b3JkT3ZlcmxheSA+IC5kaWFsb2cge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jcGFzc3dvcmRPdmVybGF5IC50b29sYmFyRmllbGQge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSA+IC5kaWFsb2cge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHNwYW4ge1xcclxcbiAgd2lkdGg6IDEyNXB4O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gcCB7XFxyXFxuICBtYXgtd2lkdGg6IDIyNXB4O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAuYnV0dG9uUm93IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbGVhckJvdGgge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5maWxlSW5wdXQge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbiNQREZCdWcge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuI1BERkJ1ZyAuY29udHJvbHMge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAxKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbn1cXHJcXG4jUERGQnVnIC5wYW5lbHMge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDI3cHg7XFxyXFxufVxcclxcbiNQREZCdWcgLnBhbmVscyA+IGRpdiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbiNQREZCdWcgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLmRlYnVnZ2VyU2hvd1RleHQge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMSk7XFxyXFxufVxcclxcbi5kZWJ1Z2dlckhpZGVUZXh0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxufVxcclxcbiNQREZCdWcgLnN0YXRzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjb3VyaWVyO1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuI1BERkJ1ZyAuc3RhdHMgLnRpdGxlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4jUERGQnVnIHRhYmxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAudGV4dExheWVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLmNhbnZhc1dyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDI1NSwgMTI4LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciBjYW52YXMge1xcclxcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjEpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLWhvdmVyIC50ZXh0TGF5ZXIgPiBzcGFuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlci50ZXh0TGF5ZXItc2hhZG93IC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhYi10by1wYW4tZ3JhYiB7XFxyXFxuICBjdXJzb3I6IHVybChcXFwiaW1hZ2VzL2dyYWIuY3VyXFxcIiksIG1vdmUgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmdyYWItdG8tcGFuLWdyYWJcXHJcXG4gICo6bm90KGlucHV0KTpub3QodGV4dGFyZWEpOm5vdChidXR0b24pOm5vdChzZWxlY3QpOm5vdCg6bGluaykge1xcclxcbiAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5ncmFiLXRvLXBhbi1ncmFiOmFjdGl2ZSxcXHJcXG4uZ3JhYi10by1wYW4tZ3JhYmJpbmcge1xcclxcbiAgY3Vyc29yOiB1cmwoXFxcImltYWdlcy9ncmFiYmluZy5jdXJcXFwiKSwgbW92ZSAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgei1pbmRleDogNTAwMDA7IC8qIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBhbnl0aGluZyBlbHNlIGluIFBERi5qcyEgKi9cXHJcXG59XFxyXFxuXFxyXFxuQHBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpbnRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHByaW50IHtcXHJcXG4gIC8qIEdlbmVyYWwgcnVsZXMgZm9yIHByaW50aW5nLiAqL1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFJ1bGVzIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbW96UHJpbnRDYWxsYmFjay4gKi9cXHJcXG4gICNzaWRlYmFyQ29udGFpbmVyLFxcclxcbiAgI3NlY29uZGFyeVRvb2xiYXIsXFxyXFxuICAudG9vbGJhcixcXHJcXG4gICNsb2FkaW5nQm94LFxcclxcbiAgI2Vycm9yV3JhcHBlcixcXHJcXG4gIC50ZXh0TGF5ZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21haW5Db250YWluZXIsXFxyXFxuICAjdmlld2VyQ29udGFpbmVyLFxcclxcbiAgLnBhZ2UsXFxyXFxuICAucGFnZSBjYW52YXMge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZVtkYXRhLWxvYWRlZF0ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWxlSW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogUnVsZXMgZm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBQREYuanMgcHJpbnRpbmcgKi9cXHJcXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjb3V0ZXJDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgYm9keVtkYXRhLXBkZmpzcHJpbnRpbmddICNwcmludENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgI3ByaW50Q29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLyogd3JhcHBlciBhcm91bmQgKHNjYWxlZCkgcHJpbnQgY2FudmFzIGVsZW1lbnRzICovXFxyXFxuICAjcHJpbnRDb250YWluZXIgPiBkaXYge1xcclxcbiAgICAvKiBXaXRob3V0IHRoZSBmb2xsb3dpbmcgbWF4LWhlaWdodCBkZWNsYXJhdGlvbiwgQ2hyb21pdW0gbWlnaHQgY3JlYXRlIGV4dHJhXFxyXFxuICAgICAqIGJsYW5rIHBhZ2VzLCBldmVuIHRob3VnaCBpdCBzaG91bGRuJ3QhICovXFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcXHJcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcclxcblxcclxcbiAgICAvKiBJZiB3ZSdyZSBzbWFsbGVyIHRoYW4gdGhlIHBhZ2UsIGNlbnRlciB0aGUgY2FudmFzIGhvcml6b250YWxseSBhbmRcXHJcXG4gICAgICogdmVydGljYWxseSAqL1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgI3ByaW50Q29udGFpbmVyIGNhbnZhcyxcXHJcXG4gICNwcmludENvbnRhaW5lciBpbWcge1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi52aXNpYmxlTGFyZ2VWaWV3LFxcclxcbi52aXNpYmxlTWVkaXVtVmlldyxcXHJcXG4udmlzaWJsZVNtYWxsVmlldyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXHJcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xcclxcbiAgI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBodG1sW2Rpcj1cXFwibHRyXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICBodG1sW2Rpcj1cXFwicnRsXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcsXFxyXFxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3LFxcclxcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTWVkaXVtVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xcclxcbiAgLmhpZGRlblNtYWxsVmlldyxcXHJcXG4gIC5oaWRkZW5TbWFsbFZpZXcgKiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudmlzaWJsZVNtYWxsVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICAudG9vbGJhckJ1dHRvblNwYWNlciB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgfVxcclxcbiAgaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyIHtcXHJcXG4gICAgbGVmdDogMzRweDtcXHJcXG4gIH1cXHJcXG4gIGh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZmluZGJhciB7XFxyXFxuICAgIHJpZ2h0OiAzNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1MzVweCkge1xcclxcbiAgI3NjYWxlU2VsZWN0Q29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9jc3Mvdmlld2VyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3NpZ25maWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHRmaWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL211bHRpbGluZWZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vbGFiZWxmaWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2NoZWNrYm94ZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9yYWRpb2J1dHRvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2NvbWJvYm94ZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9pbWFnZWZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vZGF0ZWZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vbnVtYmVyZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ltYWdlcy9pYy10b29sdGlwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3VuZG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vcmVkby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hbGlnbi1sZWZ0LWJ0bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hbGlnbi1jZW50ZXItYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2FsaWduLXJpZ2h0LWJ0bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hbGlnbi10b3AtYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2FsaWduLW1pZGRsZS1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYWxpZ24tYm90dG9tLWJ0bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi96b29tLW91dC1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1zZWxlY3QtZG93bi0xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2NvbXBvbmVudC1hcnJvdy1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tY2VudGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWxlZnQtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1jZW50ZXItaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1yaWdodC1ob3Zlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9iLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2ZpZWxkLWRlbGV0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hc3Rlcmlzay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4ucGRmVmlld2VyIC5wYWdlIHtcbiAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4uT3V0ZXItQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5NYWluQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMzIwcHg7IH1cblxuI1RlbXBsYXRlUERGVmlld2VyLFxuI1JlYWRlclBERlZpZXdlcixcbiNQcmV2aWV3UmVhZGVyUERGVmlld2VyIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4uVmlld2VyLUNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBpbnNldDogMTI4cHggMzAwcHggMzAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCAtIDMwMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gNjRweCk7IH1cblxuLlZpZXdlci1Db250YWluZXIuZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGluc2V0OiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLmxlZnRmdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMTI4cHggMHB4IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KSAhaW1wb3J0YW50OyB9XG5cbi5WaWV3ZXItQ29udGFpbmVyLnJpZ2h0ZnVsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDEyOHB4IDMwMHB4IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDsgfVxuXG4uVGVtcGxhdGUtU2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLlRlbXBsYXRlLUhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwgaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm94LXNoYWRvdzogLTEuNnB4IDEuMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDRweCA0LjVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7IH1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG5cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi50aXQsIC5FZGl0b3ItVG9vbGJhci1Hcm91cC5DZW50ZXIgPiBzcGFuLCAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUsIC5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciwgLlRlbXBsYXRlLUJ1dHRvbiwgLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ICNzY2FsZVNlbGVjdENvbnRhaW5lci5Ub29sYmFyLUxhYmVsLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpLCAuVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOm50aC1jaGlsZCgxKSwgLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRpdCwgLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gcCwgLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gcCA+IHNwYW4udGl0LXNlbmQge1xuICBmb250LWZhbWlseTogTWFsZ3VuR290aGljO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsOyB9XG5cbi5NYXJnaW4tUmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG5Aa2V5ZnJhbWVzIEhpZGVMZWZ0UGFuZWxCdG4ge1xuICBmcm9tIHtcbiAgICBsZWZ0OiAzMDBweDsgfVxuICB0byB7XG4gICAgbGVmdDogMHB4OyB9IH1cblxuQGtleWZyYW1lcyBTaG93TGVmdFBhbmVsQnRuIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogMHB4OyB9XG4gIHRvIHtcbiAgICBsZWZ0OiAzMDBweDsgfSB9XG5cbkBrZXlmcmFtZXMgSGlkZUxlZnRQYW5lbCB7XG4gIGZyb20ge1xuICAgIGxlZnQ6IDBweDsgfVxuICB0byB7XG4gICAgbGVmdDogLTMwMHB4OyB9IH1cblxuQGtleWZyYW1lcyBTaG93TGVmdFBhbmVsIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTMwMHB4OyB9XG4gIHRvIHtcbiAgICBsZWZ0OiAwcHg7IH0gfVxuXG4uRWRpdG9yLUNvbXBvbmVudCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yaWdodDogI2NjYyAxcHggc29saWQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5FZGl0b3ItUmlnaHQtQ29tcG9uZW50IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHggLSA4MHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogI2NjYyAxcHggc29saWQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50LUFjdGl2ZS1CdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsZWZ0OiAzMDBweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDYwcHgpO1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYzsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgMCA1cHg7XG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDIwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaS5zZWxlY3RlZCxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaTpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5NmIzZDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U2ZjM7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpLmRpc2FibGVkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC4zOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4udGl0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5zaWduLWZpZWxkLWljbyB7XG4gIGhlaWdodDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnNpZ24tZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRleHQtZmllbGQtaWNvIHtcbiAgaGVpZ2h0OiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4udGV4dC1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBtYXJnaW46IDAgMTNweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubXVsdGlsaW5lLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5sYWJlbC1maWVsZC1pY28ge1xuICBoZWlnaHQ6IDIxcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5sYWJlbC1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBtYXJnaW46IDAgMTNweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uY2hlY2stZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnJhZGlvLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5jb21iby1maWVsZC1pY28ge1xuICBoZWlnaHQ6IDE2cHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5jb21iby1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xuICBtYXJnaW46IDAgMTNweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjdweCAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAyN3B4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uaW1hZ2UtZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmRhdGUtZmllbGQtaWNvIHtcbiAgaGVpZ2h0OiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uZGF0ZS1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xuICBtYXJnaW46IDAgMTJweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjFweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMXB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubnVtYmVyLWZpZWxkLWljbyB7XG4gIGhlaWdodDogMTlweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm51bWJlci1maWVsZC1pY286YmVmb3JlIHtcbiAgaGVpZ2h0OiAxOXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XG4gIG1hcmdpbjogMCAxNHB4IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAxOXB4IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgd2lkdGg6IDE5cHg7IH1cblxuLmhpZGUgPiAuZnRoYW5kbGUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbiNEcmFnQm94R3JvdXAgPiBnID4gcmVjdCB7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlOiByZWQ7IH1cblxuLlRvcC1Ub29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5FZGl0b3ItVG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2NHB4O1xuICBpbnNldDogNjRweCAzMDBweCAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCAtIDMwMHB4KTtcbiAgbWluLXdpZHRoOiA4NjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NEE5RjksICM2RTkyRjYpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uRWRpdG9yLVRvb2xiYXIubGVmdGZ1bGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNjRweDtcbiAgaW5zZXQ6IDY0cHggMHB4IDMwMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBtaW4td2lkdGg6IDg2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg0QTlGOSwgIzZFOTJGNik7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci5yaWdodGZ1bGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNjRweDtcbiAgaW5zZXQ6IDY0cHggMzAwcHggMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBtaW4td2lkdGg6IDg2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzg0QTlGOSwgIzZFOTJGNik7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cCB7XG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLkxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAyODFweDsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuQ2VudGVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MXB4IC0gNDgwcHgpOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5DZW50ZXIgPiBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlOWVhZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDgwcHg7IH1cblxuLkF0dHJpYnV0ZS1raW5kIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5BdHRyaWJ1dGUta2luZCAuVGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICBtYXJnaW4tbGVmdDogOHB4OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5FZGl0b3ItQXR0cmlidXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkM2QzZDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLkVkaXRvci1BdHRyaWJ1dGUuVGV4dC1GaWVsZCB7XG4gIHdpZHRoOiAyOThweDsgfVxuXG4uRWRpdG9yLUF0dHJpYnV0ZS5CYXNlLUZpZWxkLFxuLkVkaXRvci1BdHRyaWJ1dGUuU2lnbi1GaWVsZCB7XG4gIHdpZHRoOiAyMDBweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzIC5EaXZpZGVyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUtV3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93OmZpcnN0LWNoaWxkIC5UaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LVdyYXAgLnNlbGVjdDItY29udGFpbmVyIC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyID4gaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyB9XG5cbi5BdHRyaWJ1dGUtSW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uQXR0cmlidXRlLVRleHRhcmVhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyB9XG5cbi5UaXRsZS1Ub29sdGlwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDAgNnB4O1xuICB6LWluZGV4OiAwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXAge1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuYmc6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcDpiZWZvcmUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fX30pOyB9XG5cbi5UaXRsZS1Ub29sdGlwLUxheWVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogMjZweDtcbiAgcGFkZGluZy10b3A6IDhweDsgfVxuXG4uVGl0bGUtVG9vbHRpcC1MYXllciAuaWMtcG9pbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE0cHg7XG4gIHRvcDogMDsgfVxuXG4uVGl0bGUtVG9vbHRpcC1MYXllciAuVGl0bGUtVG9vbHRpcC1EZXNjIHtcbiAgd2lkdGg6IDE5MXB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4uVGl0bGUtVG9vbHRpcDpob3ZlciAuVGl0bGUtVG9vbHRpcC1MYXllciB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5FZGl0b3ItQm90dG9tLUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wOiAjY2NjIDFweCBzb2xpZDtcbiAgei1pbmRleDogMTAwOyB9XG5cbi5FZGl0b3ItQm90dG9tLUNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMzczcHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uRWRpdG9yLVJpZ2h0LUNvbXBvbmVudCAuQnV0dG9uLUxpc3Qge1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNWZmMjtcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC43NXB4O1xuICBib3JkZXI6IDA7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Db25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRyYW5zcGFyZW50IHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Ub29sYmFyLUJvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZWU7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UcmFuc3BhcmVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFmNDYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzRkNmM4ZjsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRvb2xiYXItQnRuLU1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNHB4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpID4gZGl2ID4gYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgbWluLXdpZHRoOiAyMnB4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGk6bnRoLWNoaWxkKDgpIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi5Ub29sYmFyLUJ1dHRvbi1EaXZpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ2YzhmO1xuICBtYXJnaW46IDAgMTBweCAwIDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC8q7JqU7IaM7J2YIOuGkuydtOydmCDrsJgoNTAlKSDrp4ztgbwg7JyE66GcIOydtOuPmSovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlVuZG8tQnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuaS5VbmRvLUJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX199KTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cblxuaS5SZWRvLUJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1MZWZ0LUJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1MZWZ0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1DZW50ZXItQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUNlbnRlci1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tUmlnaHQtQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWluLXdpZHRoOiAyNHB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tUmlnaHQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLVRvcC1CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tVG9wLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1NaWRkbGUtQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLU1pZGRsZS1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQm90dG9tLUJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Cb3R0b20tQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tT3V0LUJ1dHRvbixcbi5UZW1wbGF0ZS1CdXR0b24uWm9vbS1Jbi1CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uWm9vbS1PdXQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tSW4tQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX199KTsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgI3NjYWxlU2VsZWN0Q29udGFpbmVyLlRvb2xiYXItTGFiZWwge1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTllYWVkOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAuVG9vbGJhci1MYWJlbCA+IGEge1xuICBjb2xvcjogI2U5ZWFlZCAhaW1wb3J0YW50OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAuVG9vbGJhci1MYWJlbCA+IGEge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fX30pOyB9XG5cbi5CdXR0b24tSWNvbi1Db21wb25lbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OyB9XG5cbi5BcnJvdy1CdG4ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDRweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC8q7JqU7IaM7J2YIOuGkuydtOydmCDrsJgoNTAlKSDrp4ztgbwg7JyE66GcIOydtOuPmSovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uUmV2ZXJzZS1CdG4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVkoNTAlKTsgfVxuXG4uQXJyb3ctQnRuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19ffSk7IH1cblxuLkxlZnQtUGFuZWwtQnRuLUhpZGUtQW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVMZWZ0UGFuZWxCdG47XG4gIGxlZnQ6IDA7IH1cblxuLkxlZnQtUGFuZWwtQnRuLVNob3ctQW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IFNob3dMZWZ0UGFuZWxCdG47XG4gIGxlZnQ6IDMwMHB4OyB9XG5cbi5MZWZ0LVBhbmVsLUhpZGUtQW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVMZWZ0UGFuZWw7XG4gIGxlZnQ6IC0zMDBweDsgfVxuXG4uTGVmdC1QYW5lbC1TaG93LUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBTaG93TGVmdFBhbmVsO1xuICBsZWZ0OiAwcHg7IH1cblxuLlJpZ2h0LVBhbmVsLUJ0bi1IaWRlLUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBIaWRlUmlnaHRQYW5lbEJ0bjtcbiAgUmlnaHQ6IDA7IH1cblxuLlJpZ2h0LVBhbmVsLUJ0bi1TaG93LUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBTaG93UmlnaHRQYW5lbEJ0bjtcbiAgUmlnaHQ6IDMwMHB4OyB9XG5cbi5SaWdodC1QYW5lbC1IaWRlLUFuaW1hdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBIaWRlUmlnaHRQYW5lbDtcbiAgUmlnaHQ6IC0zMDBweDsgfVxuXG4uUmlnaHQtUGFuZWwtU2hvdy1BbmltYXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogU2hvd1JpZ2h0UGFuZWw7XG4gIFJpZ2h0OiAwcHg7IH1cblxuLkVkaXRvci1Vc2VyLUNvbXBvbmVudF9Cb3gge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyIHtcbiAgcGFkZGluZzogMTNweCAyMHB4IDEzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIuTm8tQ2hpbGQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLkN1cnJlbnQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMzZTc1YWQ7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xuICBwYWRkaW5nOiA3cHggMCA3cHggMTFweDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7IH1cblxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDsgfVxuXG4uQ29sb3ItQnV0dG9uLVdyYXAge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Db2xvci1CdXR0b24ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b246aG92ZXIsXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b24uU2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0ID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQ6aG92ZXIgPiBpOjpiZWZvcmUsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdC5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlcjpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXIuU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodDpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodC5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uOmhvdmVyID4gaTo6YmVmb3JlLFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX199KTsgfVxuXG4uRmllbGQtRGVsZXRlLUJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHotaW5kZXg6IDk5OTk7IH1cblxuLkFzdGVyaXNrLUljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDExcHggMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTFweDsgfVxuXG4vKlxyXG4g67Cc7IahIOq0gOugqCDsnoXroKXtj7xcclxuKi9cbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDIwcHg7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmZmZmZmO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuc2VsZWN0ZWQsXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaTpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5NmIzZDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U2ZjM7IH1cblxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuZGlzYWJsZWQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjM7IH1cblxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRpdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IHAge1xuICBwYWRkaW5nOiA4cHggMHB4IDhweCAyMHB4OyB9XG5cbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IHAgPiBzcGFuLnRpdC1zZW5kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNmQ4MmU4OyB9XG5cbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IHAgPiBzcGFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBwID4gc3Bhbi5zaWduLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIG1hcmdpbjogMCAzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5zaWduLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIG1hcmdpbjogMCAzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IGlucHV0IHtcbiAgbWFyZ2luOiAwIDEwcHggMCA1cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE2MHB4OyB9XG5cbi5Ub3AtVG9vbGJhciA+IC5FZGl0b3ItVG9vbGJhci1Hcm91cC5MZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB3aWR0aDogMTAwcHg7IH1cblxuLlRvcC1Ub29sYmFyID4gLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4OyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Nhc3MvdGVtcGxhdGVNb2Quc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wZGZSZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9hbmltYXRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGdCQUFnQixFQUFBOztBQUdsQjs7O0VBR0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsaUNBQWlDO0VBQ2pDLGdDQUFnQyxFQUFBOztBQUlsQztFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSxjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUdsQixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLG9DQUFvQyxFQUFBOztBQUl0QztFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBR2xCLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsb0NBQW9DLEVBQUE7O0FBS3RDO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VB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QUFzQixFQUFBOztBQUl4QjtFQUNFLHlEQUFvRDtFQUNwRCxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0VBRXpCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJwZGZSZWFkZXIuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiYW5pbWF0aW9uLnNjc3NcXFwiO1xcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIC8vIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCAtIDgwcHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcXHJcXG4gIHRvcDogNjRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBcXHJcXG4gIGJvcmRlci1yaWdodDogI2NjYyAxcHggc29saWQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1SaWdodC1Db21wb25lbnQge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gODBweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xcclxcbiAgdG9wOiA2NHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICBib3JkZXItcmlnaHQ6ICNjY2MgMXB4IHNvbGlkO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50LUFjdGl2ZS1CdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIzcHg7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGxlZnQ6IDMwMHB4O1xcclxcbiAgdG9wOiBjYWxjKDUwJSAtIDYwcHgpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG1hcmdpbjogIDAgMCA1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAyMHB4O1xcclxcbiAgd2lkdGg6IDI0MHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpLnNlbGVjdGVkLFxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaTpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjOTZiM2Q1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTZmMztcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpLmRpc2FibGVkIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRpdCB7XFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uc2lnbi1maWVsZC1pY28ge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnNpZ24tZmllbGQtaWNvOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vc2lnbmZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxOHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi50ZXh0LWZpZWxkLWljbyB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4udGV4dC1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0ZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTNweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm11bHRpbGluZS1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9tdWx0aWxpbmVmaWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubGFiZWwtZmllbGQtaWNvIHtcXHJcXG4gIGhlaWdodDogMjFweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5sYWJlbC1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9sYWJlbGZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIxcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5jaGVjay1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9jaGVja2JveGZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5yYWRpby1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9yYWRpb2J1dHRvbi5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uY29tYm8tZmllbGQtaWNvIHtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5jb21iby1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9jb21ib2JveGZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyN3B4IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB3aWR0aDogMjdweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5pbWFnZS1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9pbWFnZWZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5kYXRlLWZpZWxkLWljbyB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uZGF0ZS1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9kYXRlZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTJweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIxcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm51bWJlci1maWVsZC1pY28ge1xcclxcbiAgaGVpZ2h0OiAxOXB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm51bWJlci1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGhlaWdodDogMTlweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9udW1iZXJmaWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAxNHB4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTlweCAxOXB4O1xcclxcbiAgaGVpZ2h0OiAxOXB4O1xcclxcbiAgd2lkdGg6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlID4gLmZ0aGFuZGxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNEcmFnQm94R3JvdXAgPiBnID4gcmVjdCB7XFxyXFxuICBzdHJva2Utd2lkdGg6IDE7XFxyXFxuICBzdHJva2U6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gMDIxOSDstpTqsIBcXHJcXG4uVG9wLVRvb2xiYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIC8vd2lkdGg6IDEwMCU7XFxyXFxuICBpbnNldDogNjRweCAzMDBweCAwcHg7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHggLSAzMDBweCk7XFxyXFxuICBtaW4td2lkdGg6IDg2MHB4O1xcclxcblxcclxcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMmM1ZjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjODRBOUY5LCAjNkU5MkY2KTtcXHJcXG4gIFxcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8vMjQwMjIzIOy2lOqwgFxcclxcbi5FZGl0b3ItVG9vbGJhci5sZWZ0ZnVsbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAvL3dpZHRoOiAxMDAlO1xcclxcbiAgaW5zZXQ6IDY0cHggMHB4IDMwMHB4O1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXHJcXG4gIG1pbi13aWR0aDogODYwcHg7XFxyXFxuXFxyXFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NEE5RjksICM2RTkyRjYpO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLy8yNDAyMjMg7LaU6rCAXFxyXFxuLkVkaXRvci1Ub29sYmFyLnJpZ2h0ZnVsbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAvL3dpZHRoOiAxMDAlO1xcclxcbiAgaW5zZXQ6IDY0cHggMzAwcHggMHB4O1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXHJcXG4gIG1pbi13aWR0aDogODYwcHg7XFxyXFxuXFxyXFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM4NEE5RjksICM2RTkyRjYpO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XFxyXFxufVxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5MZWZ0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIHdpZHRoOiAyODFweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLkNlbnRlciB7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjgxcHggLSA0ODBweCk7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5DZW50ZXIgPiBzcGFuIHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2U5ZWFlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQ4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLWtpbmQge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBmbGV4LXN0YXJ0O1xcclxcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBmbGV4LXN0YXJ0O1xcclxcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgcGFkZGluZzogMCAxNHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLWtpbmQgLlRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogIzMyMzIzMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1BdHRyaWJ1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDNkM2QzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQXR0cmlidXRlLlRleHQtRmllbGQge1xcclxcbiAgd2lkdGg6IDI5OHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLkVkaXRvci1BdHRyaWJ1dGUuQmFzZS1GaWVsZCxcXHJcXG4uRWRpdG9yLUF0dHJpYnV0ZS5TaWduLUZpZWxkIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59IFxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93Omxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuRGl2aWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZS1XcmFwe1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcclxcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgXFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7ICBcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93OmZpcnN0LWNoaWxkIC5UaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1JbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1UZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDAgOHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgNnB4O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuYmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXA6YmVmb3JlIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vY3NzL2ltYWdlcy9pYy10b29sdGlwLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwLUxheWVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTEwcHg7XFxyXFxuICB0b3A6IDI2cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGl0bGUtVG9vbHRpcC1MYXllciAuaWMtcG9pbnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTRweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRpdGxlLVRvb2x0aXAtTGF5ZXIgLlRpdGxlLVRvb2x0aXAtRGVzYyB7XFxyXFxuICB3aWR0aDogMTkxcHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwOmhvdmVyIC5UaXRsZS1Ub29sdGlwLUxheWVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQm90dG9tLUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDsgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogI2NjYyAxcHggc29saWQ7XFxyXFxuICB6LWluZGV4OiAxMDA7IC8vMjAyMy0xMi0xNFxcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUJvdHRvbS1Db250YWluZXIgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMzczcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vLyAwMjE5IOy2lOqwgFxcclxcbi5FZGl0b3ItUmlnaHQtQ29tcG9uZW50IC5CdXR0b24tTGlzdCB7XFxyXFxuICAvLyBtYXJnaW46IDAgYXV0bztcXHJcXG4gIC8vIHdpZHRoOiAzNzNweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24ge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjNWZmMjtcXHJcXG4gIHdpZHRoOiAxODRweDtcXHJcXG4gIGhlaWdodDogNDhweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5Db25maXJtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVHJhbnNwYXJlbnQge1xcclxcbiAgd2lkdGg6IDExOHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVG9vbGJhci1Cb3JkZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UcmFuc3BhcmVudDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjQ2ICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjNGQ2YzhmO1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRvb2xiYXItQnRuLU1hcmdpbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkge1xcclxcbiAgZmxvYXQ6IGxlZnQ7IFxcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpID4gZGl2ID4gYnV0dG9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwgPiBsaTpudGgtY2hpbGQoNCkge1xcclxcbiAgbWluLXdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpOm50aC1jaGlsZCg4KSB7XFxyXFxuICBtaW4td2lkdGg6IDcwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvb2xiYXItQnV0dG9uLURpdmlkZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgbWluLXdpZHRoOiAxcHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNmM4ZjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDAgMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIC8q7JqU7IaM7J2YIOuGkuydtOydmCDrsJgoNTAlKSDrp4ztgbwg7JyE66GcIOydtOuPmSovXFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVW5kby1CdXR0b24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbmkuVW5kby1CdXR0b246OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdW5kby5wbmdcXFwiKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pLlJlZG8tQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3JlZG8ucG5nXFxcIik7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1MZWZ0LUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tTGVmdC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FsaWduLWxlZnQtYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUNlbnRlci1CdXR0b24ge1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUNlbnRlci1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FsaWduLWNlbnRlci1idG4ucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tUmlnaHQtQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1pbi13aWR0aDogMjRweDtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1SaWdodC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FsaWduLXJpZ2h0LWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Ub3AtQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Ub3AtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9hbGlnbi10b3AtYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLU1pZGRsZS1CdXR0b24ge1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLU1pZGRsZS1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FsaWduLW1pZGRsZS1idG4ucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQm90dG9tLUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQm90dG9tLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYWxpZ24tYm90dG9tLWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLU91dC1CdXR0b24sXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLUluLUJ1dHRvbntcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLU91dC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3pvb20tb3V0LWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLUluLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1pbi1idG4ucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAjc2NhbGVTZWxlY3RDb250YWluZXIuVG9vbGJhci1MYWJlbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZTllYWVkO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgLlRvb2xiYXItTGFiZWwgPiBhIHtcXHJcXG4gIGNvbG9yOiAjZTllYWVkICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAuVG9vbGJhci1MYWJlbCA+IGEge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1zZWxlY3QtZG93bi0xLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uQnV0dG9uLUljb24tQ29tcG9uZW50IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uQXJyb3ctQnRuIHtcXHJcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLlJldmVyc2UtQnRuIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSg1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uQXJyb3ctQnRuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vY29tcG9uZW50LWFycm93LWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLy/soozsuKFcXHJcXG4uTGVmdC1QYW5lbC1CdG4tSGlkZS1BbmltYXRpb24ge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBIaWRlTGVmdFBhbmVsQnRuO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLkxlZnQtUGFuZWwtQnRuLVNob3ctQW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogU2hvd0xlZnRQYW5lbEJ0bjtcXHJcXG4gIGxlZnQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uTGVmdC1QYW5lbC1IaWRlLUFuaW1hdGlvbiB7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVMZWZ0UGFuZWw7XFxyXFxuICBsZWZ0OiAtMzAwcHg7XFxyXFxufVxcclxcbi5MZWZ0LVBhbmVsLVNob3ctQW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogU2hvd0xlZnRQYW5lbDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLy/smrDsuKEgLSAyNDAyMjMg7LaU6rCA7ZWoXFxyXFxuLlJpZ2h0LVBhbmVsLUJ0bi1IaWRlLUFuaW1hdGlvbiB7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVSaWdodFBhbmVsQnRuO1xcclxcbiAgUmlnaHQ6IDA7XFxyXFxufVxcclxcbi5SaWdodC1QYW5lbC1CdG4tU2hvdy1BbmltYXRpb24ge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBTaG93UmlnaHRQYW5lbEJ0bjtcXHJcXG4gIFJpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlJpZ2h0LVBhbmVsLUhpZGUtQW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogSGlkZVJpZ2h0UGFuZWw7XFxyXFxuICBSaWdodDogLTMwMHB4O1xcclxcbn1cXHJcXG4uUmlnaHQtUGFuZWwtU2hvdy1BbmltYXRpb24ge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBTaG93UmlnaHRQYW5lbDtcXHJcXG4gIFJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5FZGl0b3ItVXNlci1Db21wb25lbnRfQm94IHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Vc2VyLUNvbXBvbmVudC1MaXN0LUNvbmF0aW5lciB7XFxyXFxuICBwYWRkaW5nOiAxM3B4IDIwcHggMTNweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLk5vLUNoaWxkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG59XFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyLkN1cnJlbnQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggIzNlNzVhZDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG59IFxcclxcblxcclxcbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGkge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICBwYWRkaW5nOiA3cHggMCA3cHggMTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaTpudGgtY2hpbGQoMSkge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGk6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcblxcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5Db2xvci1CdXR0b24tV3JhcCB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQ29sb3ItQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDVweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b246aG92ZXIsXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uLlNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWFkYTtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQsXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQgPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tbGVmdC5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlciA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1jZW50ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodCA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1yaWdodC5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9iLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdDpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdC5TZWxlY3RlZCA+IGk6OmJlZm9yZSAge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tbGVmdC1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlcjpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyLlNlbGVjdGVkID4gaTo6YmVmb3JlICB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1jZW50ZXItaG92ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodDpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tUmlnaHQuU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLXJpZ2h0LWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uLlNlbGVjdGVkID4gaTo6YmVmb3JlICB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYi1ob3Zlci5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLkZpZWxkLURlbGV0ZS1CdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vZmllbGQtZGVsZXRlLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcblxcclxcbi5Bc3Rlcmlzay1JY29uIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9hc3Rlcmlzay5wbmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTFweCAxMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgd2lkdGg6IDExcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuIOuwnOyGoSDqtIDroKgg7J6F66Cl7Y+8XFxyXFxuKi9cXHJcXG5cXHJcXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgbWFyZ2luOiAwIDAgMjBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDIwcHg7XFxyXFxuICB3aWR0aDogMjQwcHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZmZmZjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaS5zZWxlY3RlZCxcXHJcXG5cXHJcXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaTpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjOTZiM2Q1O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTZmMztcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi50aXQge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IHAge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgcGFkZGluZzogOHB4IDBweCA4cHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gcCA+IHNwYW4udGl0LXNlbmQge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzZjNmQ4MmU4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBwID4gc3BhbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uRWRpdG9yLVNlbmQtQ29tcG9uZW50X0JveCBkaXYgdWwgPiBwID4gc3Bhbi5zaWduLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3NpZ25maWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5FZGl0b3ItU2VuZC1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5zaWduLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3NpZ25maWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1TZW5kLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBpbnB1dCB7XFxyXFxuICBtYXJnaW46IDAgMTBweCAwIDVweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRvcC1Ub29sYmFyID4gLkVkaXRvci1Ub29sYmFyLUdyb3VwLkxlZnQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVG9wLVRvb2xiYXIgPiAuRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQge1xcclxcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XCIsXCJcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gICAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7O1xcclxcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5PdXRlci1Db250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5NYWluQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbiNUZW1wbGF0ZVBERlZpZXdlciwgXFxyXFxuI1JlYWRlclBERlZpZXdlciwgXFxyXFxuI1ByZXZpZXdSZWFkZXJQREZWaWV3ZXIge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlci1Db250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgaW5zZXQ6IDEyOHB4IDMwMHB4IDMwMHB4O1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4IC0gMzAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gNjRweCk7XFxyXFxufVxcclxcblxcclxcbi8vXFxyXFxuLlZpZXdlci1Db250YWluZXIuZnVsbCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgaW5zZXQ6IHVuc2V0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8vXFxyXFxuLlZpZXdlci1Db250YWluZXIubGVmdGZ1bGwge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvLyB0b3A6IDBweDtcXHJcXG4gIC8vIGxlZnQ6IDBweDtcXHJcXG4gIGluc2V0OiAxMjhweCAwcHggMzAwcHggIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLy9cXHJcXG4uVmlld2VyLUNvbnRhaW5lci5yaWdodGZ1bGwge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAvLyB0b3A6IDBweDtcXHJcXG4gIC8vIGxlZnQ6IDBweDtcXHJcXG4gIGluc2V0OiAxMjhweCAzMDBweCAwcHggIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLlRlbXBsYXRlLVNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1MYWJlbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMzZweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1MYWJlbCBpbnB1dCB7ZGlzcGxheTpub25lO31cXHJcXG5cXHJcXG4vKiBUaGUgc2xpZGVyICovXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNkMmQyZDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlcjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGJveC1zaGFkb3c6IC0xLjZweCAxLjJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0LjVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXI6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7XFxyXFxufVxcclxcblxcclxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQ6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuJXRlbXBsYXRlLWZvbnQtaW5mbyB7XFxyXFxuICBmb250LWZhbWlseTogTWFsZ3VuR290aGljO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5NYXJnaW4tUmlnaHQtNSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLlNjYWxlLVNlbGV0b3ItQ29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGltcG9ydCAgICAgJy4vLi4vY3NzL3ZpZXdlci5jc3MnO1xcclxcblwiLFwiXFxyXFxuQGtleWZyYW1lcyBIaWRlTGVmdFBhbmVsQnRuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBsZWZ0OiAzMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIFNob3dMZWZ0UGFuZWxCdG4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgbGVmdDogMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgSGlkZUxlZnRQYW5lbCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBsZWZ0OiAtMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgU2hvd0xlZnRQYW5lbCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgbGVmdDogLTMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidGVtcGxhdGVtb2RTYXNzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVtcGxhdGVNb2Quc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RlbXBsYXRlTW9kLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=