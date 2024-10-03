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
  top: 64px;
  left: 300px;
  outline: none;
  inset: 64px 300px 0px;
  width: calc(100% - 300px);
  height: calc(100% - 64px - 80px); }

.Viewer-Container.full {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  inset: unset; }

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

.Editor-Component_Box div ul > li > span.tit, .Editor-Toolbar-Group.Center > span, .Attribute-Contents-Row .Title, .Attribute-Contents-Row-CheckBox-Container, .Template-Button, .Editor-Toolbar-Group.Right #scaleSelectContainer.Toolbar-Label, .User-Component-List > li, .User-Component-List > li:nth-child(1) {
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
  height: calc(100% - 64px - 80px);
  top: 64px;
  position: absolute;
  background-color: #ffffff;
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

.Editor-Toolbar {
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

.Template-Button.Confirm {
  background-color: #00aada; }

.Template-Button.Transparent {
  width: 118px;
  height: 34px;
  background-color: transparent;
  border-radius: 4px; }

.Template-Button.Toolbar-Border {
  border: solid 1px #4d6c8f; }

.Template-Button.Transparent:hover {
  background-color: #001f46;
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
`, "",{"version":3,"sources":["webpack://./sass/templateMod.scss","webpack://./sass/pdfReader.scss","webpack://./sass/animation.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"pdfReader.scss\";\r\n@import \"animation.scss\";\r\n\r\n.Editor-Component {\r\n  width: 300px;\r\n  height: calc(100% - 64px - 80px);\r\n  top: 64px;\r\n  position: absolute;\r\n  background-color: #ffffff;\r\n  \r\n  border-right: #ccc 1px solid;\r\n  overflow: auto;\r\n}\r\n\r\n.Editor-Component-Active-Button {\r\n  position: absolute;\r\n  width: 23px;\r\n  height: 120px;\r\n  background-color: #fff;\r\n  left: 300px;\r\n  top: calc(50% - 60px);\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #cccccc;\r\n}\r\n\r\n.Editor-Component_Box div ul {\r\n  list-style: none;\r\n  padding: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li {\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  margin:  0 0 5px;\r\n  padding: 8px 0px 8px 20px;\r\n  width: 240px;\r\n  height: 18px;\r\n  display: flex;\r\n}\r\n\r\n.Editor-Component_Box div ul > li.selected,\r\n.Editor-Component_Box div ul > li:hover {\r\n  border: solid 1px #96b3d5;\r\n  background-color: #dce6f3;\r\n}\r\n\r\n.Editor-Component_Box div ul > li.disabled {\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n  opacity: 0.3;\r\n\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.tit {\r\n  @extend %template-font-info;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n  \r\n  color: #333333;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.sign-field-ico {\r\n  height: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.sign-field-ico:before {\r\n  background-image: url(\"./../css/icon/signfield.svg\");\r\n  background-size: 18px 20px;\r\n  height: 20px;\r\n  width: 18px;\r\n  margin: 0 15px 0 0;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.text-field-ico {\r\n  height: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.text-field-ico:before {\r\n  background-image: url(\"./../css/icon/textfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.multiline-field-ico:before {\r\n  background-image: url(\"./../css/icon/multilinefield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.label-field-ico {\r\n  height: 21px;\r\n}\r\n.Editor-Component_Box div ul > li > span.label-field-ico:before {\r\n  background-image: url(\"./../css/icon/labelfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 21px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.check-field-ico:before {\r\n  background-image: url(\"./../css/icon/checkboxfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.radio-field-ico:before {\r\n  background-image: url(\"./../css/icon/radiobutton.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.combo-field-ico {\r\n  height: 16px;\r\n}\r\n.Editor-Component_Box div ul > li > span.combo-field-ico:before {\r\n  background-image: url(\"./../css/icon/comboboxfield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 27px 16px;\r\n  height: 16px;\r\n  width: 27px;\r\n}\r\n.Editor-Component_Box div ul > li > span.image-field-ico:before {\r\n  background-image: url(\"./../css/icon/imagefield.svg\");\r\n  margin: 0 13px 0 0;\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.date-field-ico {\r\n  height: 20px;\r\n}\r\n.Editor-Component_Box div ul > li > span.date-field-ico:before {\r\n  background-image: url(\"./../css/icon/datefield.svg\");\r\n  margin: 0 12px 0 0;\r\n  background-size: 21px 20px;\r\n  height: 20px;\r\n  width: 21px;\r\n}\r\n\r\n.Editor-Component_Box div ul > li > span.number-field-ico {\r\n  height: 19px;\r\n}\r\n.Editor-Component_Box div ul > li > span.number-field-ico:before {\r\n  height: 19px;\r\n  background-image: url(\"./../css/icon/numberfield.svg\");\r\n  margin: 0 14px 0 0;\r\n  background-size: 19px 19px;\r\n  height: 19px;\r\n  width: 19px;\r\n}\r\n\r\n.hide > .fthandle {\r\n  display: none;\r\n}\r\n\r\n#DragBoxGroup > g > rect {\r\n  stroke-width: 1;\r\n  stroke: red;\r\n}\r\n\r\n.Editor-Toolbar {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  overflow: hidden;\r\n  height: 64px;\r\n  width: 100%;\r\n  background-color: #002c5f;\r\n  \r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.Editor-Toolbar-Group {\r\n  padding: 15px 0 15px 0;\r\n}\r\n.Editor-Toolbar-Group.Left {\r\n  padding-left: 40px;\r\n  width: 281px;\r\n}\r\n.Editor-Toolbar-Group.Center {\r\n  width: calc(100% - 281px - 480px);\r\n}\r\n\r\n.Editor-Toolbar-Group.Center > span {\r\n  @extend %template-font-info;\r\n  line-height: 34px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: #e9eaed;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n.Editor-Toolbar-Group.Right {\r\n  padding-right: 40px;\r\n  width: 480px;\r\n}\r\n\r\n.Attribute-kind {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: flex-start;\r\n  -webkit-justify-content: flex-start;\r\n  -ms-flex-pack: flex-start;\r\n  -ms-flex-align-self: flex-start;\r\n  justify-content: flex-start;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  height: 46px;\r\n  padding: 0 14px;\r\n  border-bottom: 1px solid #e5e5e5;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Attribute-kind .Title {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #323232;\r\n  margin-left: 8px;\r\n}\r\n\r\n.Attribute-Contents {\r\n  list-style: none;\r\n}\r\n\r\n.Editor-Attribute {\r\n  position: absolute;\r\n  z-index: 999;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #d3d3d3;\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n}\r\n\r\n.Editor-Attribute.Text-Field {\r\n  width: 298px;\r\n} \r\n\r\n.Editor-Attribute.Base-Field,\r\n.Editor-Attribute.Sign-Field {\r\n  width: 200px;\r\n} \r\n\r\n.Attribute-Contents-Row {\r\n  position: relative;\r\n  margin-bottom: 16px;\r\n}\r\n.Attribute-Contents-Row:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.Attribute-Contents .Divider {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #e5e5e5;\r\n}\r\n\r\n.Attribute-Contents-Row .Title-Wrap{\r\n  position: relative;\r\n  margin-bottom: 7px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n}\r\n\r\n.Attribute-Contents-Row .Title {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;\r\n  \r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #333333;  \r\n  font-size: 13px;\r\n  line-height: 13px;\r\n  font-weight: bold;\r\n  \r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n.Attribute-Contents-Row:first-child .Title {\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n}\r\n\r\n.Attribute-Contents-Row-Wrap .select2-container {\r\n  border: solid 1px #d1d1d1;\r\n}\r\n\r\n.Attribute-Contents-Row-Wrap .select2-container .select2-selection--single {\r\n  border: none;\r\n}\r\n\r\n.Attribute-Contents-Row-CheckBox-Container {\r\n  @extend %template-font-info;\r\n  color: #333;\r\n  font-size: 12px;\r\n}\r\n\r\n.Attribute-Contents-Row-CheckBox-Container > input {\r\n    margin-right: 6px;\r\n    height: 16px;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.Attribute-Input {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 34px;\r\n  line-height: 32px;\r\n  padding: 0 8px;\r\n  border: 1px solid #d2d2d2;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.Attribute-Textarea {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 0 8px;\r\n  border: 1px solid #d2d2d2;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  box-sizing: border-box;\r\n  outline: none;\r\n  text-overflow: ellipsis;\r\n  overflow: auto;\r\n  resize: none;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.Title-Tooltip {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;\r\n  position: relative;\r\n  margin: 0 0 0 6px;\r\n  z-index: 0;\r\n}\r\n\r\n.Attribute-Contents .ic-tooltip {\r\n    cursor: default;\r\n}\r\n\r\n.Attribute-Contents .bg:before {\r\n  content: '';\r\n  display: inline-block;\r\n  background-repeat: no-repeat;\r\n  background-position: 0 0;\r\n  background-size: contain;\r\n  overflow: hidden;\r\n}\r\n\r\n.Attribute-Contents .ic-tooltip:before {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-image: url(./../css/images/ic-tooltip.svg);\r\n}\r\n\r\n.Title-Tooltip-Layer {\r\n  display: none;\r\n  position: absolute;\r\n  right: -10px;\r\n  top: 26px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.Title-Tooltip-Layer .ic-pointer {\r\n  position: absolute;\r\n  right: 14px;\r\n  top: 0;\r\n}\r\n\r\n.Title-Tooltip-Layer .Title-Tooltip-Desc {\r\n  width: 191px;\r\n  padding: 6px;\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  color: #fff;\r\n  background-color: #323232;\r\n  text-align: left;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.Title-Tooltip:hover .Title-Tooltip-Layer {\r\n    display: block;\r\n}\r\n\r\n.Editor-Bottom-Container {\r\n  width: 100%;\r\n  height: 80px; \r\n  background-color: #ffffff;\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: #ccc 1px solid;\r\n  z-index: 100; //2023-12-14\r\n}\r\n\r\n.Editor-Bottom-Container > div {\r\n  margin: 0 auto;\r\n  width: 373px;\r\n  padding: 15px 0;\r\n  display: flex;\r\n}\r\n\r\n.Template-Button {\r\n  @extend %template-font-info;\r\n  border-radius: 2px;\r\n  background-color: #474747;\r\n  width: 184px;\r\n  height: 48px;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  letter-spacing: -0.75px;\r\n  border: 0;\r\n}\r\n\r\n.Template-Button.Confirm {\r\n  background-color: #00aada;\r\n}\r\n\r\n.Template-Button.Transparent {\r\n  width: 118px;\r\n  height: 34px;\r\n  background-color: transparent;\r\n  border-radius: 4px;\r\n}\r\n.Template-Button.Toolbar-Border {\r\n  border: solid 1px #4d6c8f;\r\n}\r\n\r\n.Template-Button.Transparent:hover {\r\n  background-color: #001f46;\r\n  border: solid 1px #4d6c8f;\r\n}\r\n\r\n.Template-Button.Toolbar-Btn-Margin {\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n.Editor-Toolbar-Group.Right > ul {\r\n  list-style: none;\r\n  height: 100%;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li {\r\n  float: left; \r\n  height: 100%;\r\n  min-width: 34px;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li > div > button {\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Editor-Toolbar-Group.Right > ul > li:nth-child(4) {\r\n  min-width: 22px;\r\n}\r\n.Editor-Toolbar-Group.Right > ul > li:nth-child(8) {\r\n  min-width: 70px;\r\n  margin-left: 50px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.Toolbar-Button-Divider {\r\n  display: inline-block;\r\n  width: 1px !important;\r\n  min-width: 1px !important;\r\n  height: 18px !important;\r\n  background-color: #4d6c8f;\r\n  margin: 0 10px 0 12px;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Template-Button.Undo-Button {\r\n  margin-right: 5px;\r\n}\r\ni.Undo-Button::before {\r\n  content: url(\"./../css/icon/undo.png\");\r\n  margin-right: 8px;\r\n}\r\n\r\ni.Redo-Button::before {\r\n  content: url(\"./../css/icon/redo.png\");\r\n  margin-right: 8px;\r\n}\r\n\r\n.Template-Button.Align-Left-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Left-Button > i::before {\r\n  content: url(\"./../css/icon/align-left-btn.png\");\r\n}\r\n.Template-Button.Align-Center-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Center-Button > i::before {\r\n  content: url(\"./../css/icon/align-center-btn.png\");\r\n}\r\n.Template-Button.Align-Right-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n  min-width: 24px;\r\n}\r\n.Template-Button.Align-Right-Button > i::before {\r\n  content: url(\"./../css/icon/align-right-btn.png\");\r\n}\r\n.Template-Button.Align-Top-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Top-Button > i::before {\r\n  content: url(\"./../css/icon/align-top-btn.png\");\r\n}\r\n.Template-Button.Align-Middle-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Middle-Button > i::before {\r\n  content: url(\"./../css/icon/align-middle-btn.png\");\r\n}\r\n.Template-Button.Align-Bottom-Button {\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Align-Bottom-Button > i::before {\r\n  content: url(\"./../css/icon/align-bottom-btn.png\");\r\n}\r\n\r\n.Template-Button.Zoom-Out-Button,\r\n.Template-Button.Zoom-In-Button{\r\n  width: 34px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n.Template-Button.Zoom-Out-Button > i::before {\r\n  content: url(\"./../css/icon/zoom-out-btn.png\");\r\n}\r\n.Template-Button.Zoom-In-Button > i::before {\r\n  content: url(\"./../css/icon/zoom-in-btn.png\");\r\n}\r\n\r\n.Editor-Toolbar-Group.Right #scaleSelectContainer.Toolbar-Label {\r\n  line-height: 34px;\r\n  font-size: 16px;\r\n  @extend %template-font-info;\r\n  text-align: center;\r\n  color: #e9eaed;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right .Toolbar-Label > a {\r\n  color: #e9eaed !important;\r\n}\r\n\r\n.Editor-Toolbar-Group.Right .Toolbar-Label > a {\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    width: 100%;\r\n    display: block;\r\n    background-image: url(\"./../css/icon/zoom-select-down-1.png\");\r\n}\r\n\r\n.Button-Icon-Component {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.Arrow-Btn {\r\n  left: calc(50% - 4px);\r\n  position: absolute;\r\n  top: 50%;\r\n  /*요소의 높이의 반(50%) 만큼 위로 이동*/\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.Reverse-Btn {\r\n  transform: rotate(180deg) translateY(50%);\r\n}\r\n\r\n.Arrow-Btn:before {\r\n  content: url(\"./../css/icon/component-arrow-btn.png\");\r\n}\r\n\r\n.Left-Panel-Btn-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideLeftPanelBtn;\r\n  left: 0;\r\n}\r\n.Left-Panel-Btn-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowLeftPanelBtn;\r\n  left: 300px;\r\n}\r\n\r\n.Left-Panel-Hide-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: HideLeftPanel;\r\n  left: -300px;\r\n}\r\n.Left-Panel-Show-Animation {\r\n  animation-duration: 1s;\r\n  animation-name: ShowLeftPanel;\r\n  left: 0px;\r\n}\r\n\r\n\r\n.Editor-User-Component_Box {\r\n  padding: 0 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.User-Component-List-Conatiner {\r\n  padding: 13px 20px 13px 20px;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.User-Component-List-Conatiner.No-Child {\r\n  padding: 10px 20px;\r\n}\r\n.User-Component-List-Conatiner.Current {\r\n  border-radius: 4px;\r\n  border: solid 2px #3e75ad;\r\n}\r\n\r\n.User-Component-List {\r\n  list-style: none;\r\n  touch-action: none;\r\n} \r\n\r\n.User-Component-List > li {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #666;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 3px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #b6c2d0;\r\n  padding: 7px 0 7px 11px;\r\n}\r\n\r\n.User-Component-List > li:nth-child(1) {\r\n  @extend %template-font-info;\r\n  text-align: left;\r\n  color: #333333;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n\r\n  margin-bottom: 10px;\r\n  box-shadow: none;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.User-Component-List > li:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.Template-Button.Toggle-Button {\r\n  border-radius: 4px;\r\n  background-color: #e5e5e5;\r\n\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n.Color-Button-Wrap {\r\n  width: 32px;\r\n  height: 32px;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  box-shadow: 2px 2.2px 6px 0 rgba(0, 0, 0, 0.08);\r\n  border: solid 1px #d1d1d1;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.Template-Button.Color-Button {\r\n  width: 22px;\r\n  height: 22px;\r\n  border-radius: 2px;\r\n  background-color: #000;\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 5px;\r\n}\r\n\r\n.Template-Button.Toggle-Button:hover,\r\n.Template-Button.Toggle-Button.Selected {\r\n    background-color: #00aada;\r\n}\r\n\r\n.Template-Button.Text-Align-Left,\r\n.Template-Button.Text-Align-Center {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Template-Button.Text-Align-Left > i::before {\r\n  content: url(\"./../css/icon/text-align-left.png\");\r\n}\r\n.Template-Button.Text-Align-Center > i::before {\r\n  content: url(\"./../css/icon/text-align-center.png\");\r\n}\r\n.Template-Button.Text-Align-Right > i::before {\r\n  content: url(\"./../css/icon/text-align-right.png\");\r\n}\r\n.Template-Button.Text-Bold-Button > i::before {\r\n  content: url(\"./../css/icon/b.svg\");\r\n}\r\n.Template-Button.Text-Align-Left:hover > i::before,\r\n.Template-Button.Text-Align-Left.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-left-hover.png\");\r\n}\r\n.Template-Button.Text-Align-Center:hover > i::before,\r\n.Template-Button.Text-Align-Center.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-center-hover.png\");\r\n}\r\n.Template-Button.Text-Align-Right:hover > i::before,\r\n.Template-Button.Text-Align-Right.Selected > i::before  {\r\n  content: url(\"./../css/icon/text-align-right-hover.png\");\r\n}\r\n.Template-Button.Text-Bold-Button:hover > i::before,\r\n.Template-Button.Text-Bold-Button.Selected > i::before  {\r\n  content: url(\"./../css/icon/b-hover.svg\");\r\n}\r\n\r\n\r\n.Field-Delete-Button {\r\n  position: absolute;\r\n  \r\n  background-image: url(\"./../css/icon/field-delete.png\");\r\n  background-size: 20px 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n  z-index: 9999;\r\n}\r\n\r\n.Asterisk-Icon {\r\n  background-image: url(\"./../css/icon/asterisk.png\");\r\n  background-size: 11px 12px;\r\n  height: 12px;\r\n  width: 11px;\r\n\r\n}","\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pdfViewer .page {\r\n    border: 9px solid transparent;;\r\n    padding: 0 !important;\r\n}\r\n\r\n\r\n.Outer-Container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.MainContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  min-width: 320px;\r\n}\r\n\r\n#TemplatePDFViewer, \r\n#ReaderPDFViewer, \r\n#PreviewReaderPDFViewer {\r\n  outline: none;\r\n}\r\n\r\n.Viewer-Container {\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 64px;\r\n  left: 300px;\r\n  outline: none;\r\n  inset: 64px 300px 0px;\r\n  width: calc(100% - 300px);\r\n  height: calc(100% - 64px - 80px);\r\n}\r\n\r\n.Viewer-Container.full {\r\n  overflow: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  inset: unset;\r\n}\r\n\r\n.Template-Show {\r\n  display: block !important;\r\n}\r\n.Template-Hide {\r\n  display: none !important;\r\n}\r\n\r\n.Attribute-Switch-Label {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  vertical-align:middle;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.Attribute-Switch-Label input {display:none;}\r\n\r\n/* The slider */\r\n.Attribute-Switch-Slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #e5e5e5;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.Attribute-Switch-Slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  box-shadow: -1.6px 1.2px 5px 0 rgba(0, 0, 0, 0.15);\r\n  border: solid 1px #d2d2d2;\r\n  background-color: #ffffff;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider {\r\n  background-color: #2196F3;\r\n  border: solid 1px #00aada;\r\n}\r\n\r\ninput[type=\"checkbox\"]:focus + .Attribute-Switch-Slider {\r\n  box-shadow: 4px 4.5px 10px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + .Attribute-Switch-Slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  -ms-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n  border: solid 1px #00aada;\r\n}\r\n\r\n/* Rounded sliders */\r\n.Attribute-Switch-Slider.Round {\r\n  border-radius: 10px;\r\n}\r\n\r\n.Attribute-Switch-Slider.Round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n%template-font-info {\r\n  font-family: MalgunGothic;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.Margin-Right-5 {\r\n  margin-right: 5px;\r\n}\r\n\r\n.Scale-Seletor-Container {\r\n    position: absolute;\r\n}\r\n\r\n.Scale-Seletor-Container .select2-container--default .select2-selection--single {\r\n    display: none;\r\n}\r\n\r\n\r\n@import     './../css/viewer.css';\r\n","\r\n@keyframes HideLeftPanelBtn {\r\n  from {\r\n    left: 300px;\r\n  }\r\n\r\n  to {\r\n    left: 0px;\r\n  }\r\n}\r\n@keyframes ShowLeftPanelBtn {\r\n  from {\r\n    left: 0px;\r\n  }\r\n\r\n  to {\r\n    left: 300px;\r\n  }\r\n}\r\n\r\n@keyframes HideLeftPanel {\r\n  from {\r\n    left: 0px;\r\n  }\r\n\r\n  to {\r\n    left: -300px;\r\n  }\r\n}\r\n@keyframes ShowLeftPanel {\r\n  from {\r\n    left: -300px;\r\n  }\r\n\r\n  to {\r\n    left: 0px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkZBQTZGLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sU0FBUyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxTQUFTLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxTQUFTLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sa0JBQWtCLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxRQUFRLFVBQVUsS0FBSyxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxTQUFTLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLHdCQUF3QixXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksdUJBQXVCLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLE9BQU8sYUFBYSxhQUFhLGNBQWMsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FB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RkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQ0FBb0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7QUFDckQ7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0NBQW9DOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQzs7QUFFckQ7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0M7O0FBRXJEO0FBQ0E7QUFDQSxpQkFBaUIsb0NBQW9DOztBQUVyRDtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvQ0FBb0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtS0FBbUssTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsa0JBQWtCLFFBQVEsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixZQUFZLEtBQUssaUJBQWlCLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsWUFBWSxLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsT0FBTyxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsS0FBSyxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsS0FBSyxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsTUFBTSxLQUFLLGVBQWUsS0FBSyxxQkFBcUIsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFlBQVksaUJBQWlCLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLGdCQUFnQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLFlBQVksaUJBQWlCLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixNQUFNLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxpQkFBaUIsS0FBSyxVQUFVLFVBQVUsVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFlBQVksaUJBQWlCLEtBQUssVUFBVSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLGdCQUFnQixLQUFLLFlBQVksV0FBVyxXQUFXLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxXQUFXLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixNQUFNLGtC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Ozs7Ozs7Ozs7Ozs7OztBQ0NBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0lBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSxrSUFBTyxJQUFJLGtJQUFPLFVBQVUsa0lBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9jc3Mvdmlld2VyLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL3Nhc3MvdGVtcGxhdGVNb2Quc2NzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vc2Fzcy90ZW1wbGF0ZU1vZC5zY3NzP2JiZmYiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZW1wbGF0ZW1vZFNhc3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGVtcGxhdGVtb2RTYXNzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRlbXBsYXRlbW9kU2Fzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NoYWRvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvbG9hZGluZy1pY29uLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImltYWdlcy9sb2FkaW5nLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImltYWdlcy90cmVlaXRlbS1leHBhbmRlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdHJlZWl0ZW0tY29sbGFwc2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLW1lbnVBcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZVVwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VEb3duLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tT3V0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi16b29tSW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXByaW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tZG93bmxvYWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLWJvb2ttYXJrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcImltYWdlcy90b29sYmFyQnV0dG9uLXNlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2ZpbmRiYXJCdXR0b24tcHJldmlvdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fID0gbmV3IFVSTChcImltYWdlcy9maW5kYmFyQnV0dG9uLW5leHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fID0gbmV3IFVSTChcImltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNl9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zN19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM4X19fID0gbmV3IFVSTChcImltYWdlcy9sb2FkaW5nLWRhcmsuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM5X19fID0gbmV3IFVSTChcImltYWdlcy9ncmFiLmN1clwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80MF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZ3JhYmJpbmcuY3VyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNDBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDb3B5cmlnaHQgMjAxNCBNb3ppbGxhIEZvdW5kYXRpb25cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLnRleHRMYXllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBjdXJzb3I6IHRleHQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodCB7XHJcbiAgbWFyZ2luOiAtMXB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMCwgMTcwLCAxKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5iZWdpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5lbmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQubWlkZGxlIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4udGV4dExheWVyIC5oaWdobGlnaHQuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAxKTtcclxufVxyXG5cclxuLnRleHRMYXllciA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi50ZXh0TGF5ZXIgOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50LmFjdGl2ZSB7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG5cclxuLmFubm90YXRpb25MYXllciBzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGE6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGE6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0QW5ub3RhdGlvbiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSxcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3QsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTQsIDI1NSwgMC4xMyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDlweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgM3B4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSB7XHJcbiAgZm9udDogbWVzc2FnZS1ib3g7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dFtkaXNhYmxlZF0sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhW2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3RbZGlzYWJsZWRdLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0W2Rpc2FibGVkXSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6aG92ZXIsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmhvdmVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpob3ZlcixcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6Zm9jdXMsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmZvY3VzLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24uY2hlY2tCb3ggaW5wdXQ6Y2hlY2tlZDphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICB0b3A6IDIwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dC5jb21iIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWI6Zm9jdXMge1xyXG4gIC8qXHJcbiAgICogTGV0dGVyIHNwYWNpbmcgaXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIGVhY2ggY2hhcmFjdGVyLiBIZW5jZSwgdGhlXHJcbiAgICogbGV0dGVyIHNwYWNpbmcgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIG1heSBiZSBwbGFjZWQgb3V0c2lkZSB0aGUgdmlzaWJsZVxyXG4gICAqIGFyZWEsIGNhdXNpbmcgaG9yaXpvbnRhbCBzY3JvbGxpbmcuIFdlIGF2b2lkIHRoaXMgYnkgZXh0ZW5kaW5nIHRoZSB3aWR0aFxyXG4gICAqIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGZvY3VzIGFuZCByZXZlcnQgdGhpcyB3aGVuIGl0IGxvc2VzIGZvY3VzLlxyXG4gICAqL1xyXG4gIHdpZHRoOiAxMTUlO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxyXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cFdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDE1MywgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250OiBtZXNzYWdlLWJveDtcclxuICBmb250LXNpemU6IDlweDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgPiAqIHtcclxuICBmb250LXNpemU6IDlweDtcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgaDEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFubm90YXRpb25MYXllciAucG9wdXAgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIHAge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbkxheWVyIC5oaWdobGlnaHRBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC51bmRlcmxpbmVBbm5vdGF0aW9uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVpZ2dseUFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnN0cmlrZW91dEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmZyZWVUZXh0QW5ub3RhdGlvbixcclxuLmFubm90YXRpb25MYXllciAubGluZUFubm90YXRpb24gc3ZnIGxpbmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWFyZUFubm90YXRpb24gc3ZnIHJlY3QsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlsaW5lQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvbHlnb25Bbm5vdGF0aW9uIHN2ZyBwb2x5Z29uLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5jYXJldEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmlua0Fubm90YXRpb24gc3ZnIHBvbHlsaW5lLFxyXG4uYW5ub3RhdGlvbkxheWVyIC5zdGFtcEFubm90YXRpb24sXHJcbi5hbm5vdGF0aW9uTGF5ZXIgLmZpbGVBdHRhY2htZW50QW5ub3RhdGlvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5jYW52YXNXcmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGRmVmlld2VyIC5wYWdlIHtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICB3aWR0aDogODE2cHg7XHJcbiAgaGVpZ2h0OiAxMDU2cHg7XHJcbiAgbWFyZ2luOiAxcHggYXV0byAtOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gIC1vLWJvcmRlci1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIDkgOSByZXBlYXQ7XHJcbiAgICAgYm9yZGVyLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgOSA5IHJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IC5wYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCxcclxuLnNwcmVhZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMy41cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXHJcbi5zcHJlYWQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnNwcmVhZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc3ByZWFkIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXHJcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNwcmVhZCAucGFnZSxcclxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxyXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMy41cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMy41cHg7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnNwcmVhZCAucGFnZSxcclxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycy5zY3JvbGxIb3Jpem9udGFsIC5wYWdlLFxyXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgY2FudmFzW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZWaWV3ZXIgLnBhZ2UgLmxvYWRpbmdJY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBjZW50ZXIgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnNwcmVhZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnBhZ2UsXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgLnBhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tc2lkZWJhci13aWR0aDogMjAwcHg7XHJcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gIC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAtLWxvYWRpbmdCYXItZW5kLW9mZnNldDogMDtcclxuXHJcbiAgLS10b29sYmFyLWljb24tb3BhY2l0eTogMC43O1xyXG4gIC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHk6IDAuOTtcclxuXHJcbiAgLS1tYWluLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xyXG4gIC0tYm9keS1iZy1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjQwLCAxKTtcclxuICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgyNTUsIDc0LCA3NCwgMSk7XHJcbiAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgxMCwgMTMyLCAyNTUsIDEpO1xyXG4gIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIyLCAxKTtcclxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMTE2LCAxNzcsIDIzOSwgMSk7XHJcbiAgLS1zY3JvbGxiYXItY29sb3I6IGF1dG87XHJcbiAgLS1zY3JvbGxiYXItYmctY29sb3I6IGF1dG87XHJcbiAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcblxyXG4gIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMC45KTtcclxuICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ3LCAxKTtcclxuICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XHJcbiAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgyMjEsIDIyMiwgMjIzLCAxKTtcclxuICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE5LCAxKTtcclxuICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC0tZmllbGQtY29sb3I6IHJnYmEoNiwgNiwgNiwgMSk7XHJcbiAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg4LCAxKTtcclxuICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSgyMjcsIDIyOCwgMjMwLCAxKTtcclxuICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4yKTtcclxuICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoMjM3LCAyMzcsIDIzNywgMSk7XHJcbiAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAxKTtcclxuICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMSk7XHJcbiAgLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAwLjMpO1xyXG5cclxuICAtLWxvYWRpbmctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gIC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tc2lkZWJhclRvZ2dsZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXNlY29uZGFyeVRvb2xiYXJUb2dnbGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlVXAtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XHJcbiAgLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tdmlld0xheWVycy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fX30pO1xyXG4gIC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX199KTtcclxuICAtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19ffSk7XHJcbiAgLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19ffSk7XHJcbiAgLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUNjdy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX199KTtcclxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsV3JhcHBlZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fX30pO1xyXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM2X19ffSk7XHJcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zN19fX30pO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgOnJvb3Qge1xyXG4gICAgLS1tYWluLWNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNTAsIDEpO1xyXG4gICAgLS1ib2R5LWJnLWNvbG9yOiByZ2JhKDQyLCA0MiwgNDYsIDEpO1xyXG4gICAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMTk5LCAxNywgMTcsIDEpO1xyXG4gICAgLS1wcm9ncmVzc0Jhci1jb2xvcjogcmdiYSgwLCA5NiwgMjIzLCAxKTtcclxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogcmdiYSg0MCwgNDAsIDQzLCAxKTtcclxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgyMCwgNjgsIDEzMywgMSk7XHJcbiAgICAtLXNjcm9sbGJhci1jb2xvcjogcmdiYSgxMjEsIDEyMSwgMTIzLCAxKTtcclxuICAgIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiByZ2JhKDM1LCAzNSwgMzksIDEpO1xyXG4gICAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblxyXG4gICAgLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAwLjkpO1xyXG4gICAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTAsIDUwLCA1MiwgMSk7XHJcbiAgICAtLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTYsIDU2LCA2MSwgMSk7XHJcbiAgICAtLXRvb2xiYXItYm9yZGVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDEpO1xyXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMywgMSk7XHJcbiAgICAtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAtLXRvZ2dsZWQtaG92ZXItYWN0aXZlLWJ0bi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XHJcbiAgICAtLXNlcGFyYXRvci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgLS1maWVsZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKTtcclxuICAgIC0tZmllbGQtYmctY29sb3I6IHJnYmEoNjQsIDY0LCA2OCwgMSk7XHJcbiAgICAtLWZpZWxkLWJvcmRlci1jb2xvcjogcmdiYSgxMTUsIDExNSwgMTE1LCAxKTtcclxuICAgIC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yOiByZ2JhKDg5LCA4OSwgODksIDEpO1xyXG4gICAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgLS10cmVlaXRlbS1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgIC0tc2lkZWJhcml0ZW0tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAtLWRvb3JoYW5nZXItYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XHJcbiAgICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDMsIDEpO1xyXG4gICAgLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yOiByZ2JhKDkzLCA5NCwgOTgsIDEpO1xyXG4gICAgLS1kb29yaGFuZ2VyLXNlcGFyYXRvci1jb2xvcjogcmdiYSg5MiwgOTIsIDk3LCAxKTtcclxuICAgIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XHJcbiAgICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xyXG5cclxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgdXNlZCBpbiA8aW5wdXQ+IGVsZW1lbnRzLCB3aGljaCB1bmZvcnR1bmF0ZWx5IG1lYW5zIHRoYXRcclxuICAgICAqIHRoZSBcXGBtYXNrLWltYWdlXFxgIGFwcHJvYWNoIHVzZWQgd2l0aCBhbGwgb2YgdGhlIG90aGVyIGltYWdlcyBkb2Vzbid0IHdvcmtcclxuICAgICAqIGhlcmU7IGhlbmNlIHdoeSB3ZSBzdGlsbCBoYXZlIHR3byB2ZXJzaW9ucyBvZiB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UuICovXHJcbiAgICAtLWxvYWRpbmctaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzhfX199KTtcclxuICB9XHJcbn1cclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRm9udCBzaXplIGlzIG5lZWRlZCB0byBtYWtlIHRoZSBhY3Rpdml0eSBiYXIgdGhlIGNvcnJlY3Qgc2l6ZS4gKi9cclxuICAvKiBmb250LXNpemU6IDEwcHg7ICovXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxufVxyXG5cclxuYm9keSxcclxuaW5wdXQsXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAvKiBmb250OiBtZXNzYWdlLWJveDsgKi9cclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLWNvbG9yKSB2YXIoLS1zY3JvbGxiYXItYmctY29sb3IpO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBkZlZpZXdlci5lbmFibGVQZXJtaXNzaW9ucyAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcclxuICBjdXJzb3I6IG5vbmU7XHJcbn1cclxuXHJcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogbm9uZTtcclxufVxyXG5cclxuLnBkZlByZXNlbnRhdGlvbk1vZGU6ZnVsbHNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgY3Vyc29yOiBub25lO1xyXG59XHJcblxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgPiAqLFxyXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzJweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XHJcbiAgbGVmdDogY2FsYygwcHggLSB2YXIoLS1zaWRlYmFyLXdpZHRoKSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xyXG4gIHJpZ2h0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgLyogSW1wcm92ZSByZXNwb25zaXZlbmVzcyBhbmQgYXZvaWQgdmlzdWFsIGdsaXRjaGVzIHdoZW4gdGhlIHNpZGViYXIgaXMgcmVzaXplZC4gKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcclxuICAvKiBQcmV2ZW50IGUuZy4gdGhlIHRodW1ibmFpbHMgYmVpbmcgc2VsZWN0ZWQgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhck1vdmluZyAjc2lkZWJhckNvbnRhaW5lcixcclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jbWFpbkNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhckNvbnRlbnQge1xyXG4gIHRvcDogMzJweDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3NpZGViYXJDb250ZW50IHtcclxuICBsZWZ0OiAwO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3NpZGViYXJDb250ZW50IHtcclxuICByaWdodDogMDtcclxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbiN2aWV3ZXJDb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcclxufVxyXG5cclxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjdmlld2VyQ29udGFpbmVyIHtcclxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXVxyXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxyXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcclxuICBsZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXVxyXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxyXG4gICN2aWV3ZXJDb250YWluZXI6bm90KC5wZGZQcmVzZW50YXRpb25Nb2RlKSB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQ7XHJcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcblxyXG4uTWFpbi1Db250YWluZXIgLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4jdG9vbGJhckNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN0b29sYmFyU2lkZWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXIge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxyXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHggIWltcG9ydGFudDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NpZGViYXJSZXNpemVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNnB4O1xyXG4gIHotaW5kZXg6IDIwMDtcclxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjc2lkZWJhclJlc2l6ZXIge1xyXG4gIHJpZ2h0OiAtNnB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNzaWRlYmFyUmVzaXplciB7XHJcbiAgbGVmdDogLTZweDtcclxufVxyXG5cclxuI3Rvb2xiYXJDb250YWluZXIsXHJcbi5maW5kYmFyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIHZhcigtLXRvb2xiYXItYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuI3Rvb2xiYXJWaWV3ZXIge1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuI2xvYWRpbmdCYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdG9vbGJhci1ib3JkZXItY29sb3IpO1xyXG5cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjbG9hZGluZ0JhciB7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNsb2FkaW5nQmFyIHtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodDtcclxuICBsZWZ0OiB2YXIoLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQpO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI2xvYWRpbmdCYXIge1xyXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjbG9hZGluZ0JhciB7XHJcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNsb2FkaW5nQmFyIHtcclxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xyXG59XHJcblxyXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTQycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTQycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJnLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBub25lO1xyXG59XHJcblxyXG4jbG9hZGluZ0JhciAucHJvZ3Jlc3MuaW5kZXRlcm1pbmF0ZSAuZ2xpbW1lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMTUwcHgpO1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAxMzVkZWcsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAwLFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNDVweCxcclxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA1NXB4LFxyXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDk1cHgsXHJcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAxMDBweFxyXG4gICk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5maW5kYmFyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgNHB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5maW5kYmFyIHtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xyXG59XHJcbi5maW5kYmFyID4gZGl2IHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmZpbmRiYXIud3JhcENvbnRhaW5lcnMgPiBkaXYge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2I2ZpbmRiYXJNZXNzYWdlQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIge1xyXG4gIGxlZnQ6IDY0cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIge1xyXG4gIHJpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogMjZweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICB3aWR0aDogMjlweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLmZpbmROZXh0IHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZpbmRiYXIgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmZpbmRiYXIgbGFiZWwge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZmluZGJhciBsYWJlbDpob3ZlcixcclxuLmZpbmRiYXIgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2ZpbmRJbnB1dCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI2ZpbmRJbnB1dCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZmluZGJhciAudG9vbGJhckZpZWxkW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLnRvb2xiYXJMYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmaW5kSW5wdXQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4jZmluZElucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAxKTtcclxufVxyXG4jZmluZElucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuI2ZpbmRJbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4jZmluZElucHV0W2RhdGEtc3RhdHVzPVwicGVuZGluZ1wiXSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjZmluZElucHV0W2RhdGEtc3RhdHVzPVwicGVuZGluZ1wiXSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xyXG59XHJcbiNmaW5kSW5wdXRbZGF0YS1zdGF0dXM9XCJub3RGb3VuZFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwMiwgMTAyLCAxKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXIge1xyXG4gIHBhZGRpbmc6IDZweCAwIDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHotaW5kZXg6IDMwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcclxuICByaWdodDogNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcclxuICBsZWZ0OiA0cHg7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyLmhpZGRlblNjcm9sbE1vZGVCdXR0b25zID4gLnNjcm9sbE1vZGVCdXR0b25zLFxyXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TcHJlYWRNb2RlQnV0dG9ucyA+IC5zcHJlYWRNb2RlQnV0dG9ucyB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG9vckhhbmdlcixcclxuLmRvb3JIYW5nZXJSaWdodCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvciksXHJcbiAgICAwIDAgMCAxcHggdmFyKC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3IpO1xyXG59XHJcbi5kb29ySGFuZ2VyOmFmdGVyLFxyXG4uZG9vckhhbmdlcjpiZWZvcmUsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLmRvb3JIYW5nZXI6YWZ0ZXIsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xyXG4gIGJvcmRlci13aWR0aDogOHB4O1xyXG59XHJcbi5kb29ySGFuZ2VyOmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10b29sYmFyLWJnLWNvbG9yKTtcclxufVxyXG4uZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxufVxyXG4uZG9vckhhbmdlcjpiZWZvcmUsXHJcbi5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXdpZHRoOiA5cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXHJcbmh0bWxbZGlyPVwicnRsXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlcjphZnRlcixcclxuaHRtbFtkaXI9XCJsdHJcIl0gLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcclxuICByaWdodDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC05cHg7XHJcbn1cclxuXHJcbiNmaW5kUmVzdWx0c0NvdW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDgyLCA4MiwgODIsIDEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcHggNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jZmluZE1zZyB7XHJcbiAgY29sb3I6IHJnYmEoMjUxLCAwLCAwLCAxKTtcclxufVxyXG4jZmluZE1zZzplbXB0eSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlckxlZnQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyVmlld2VyUmlnaHQsXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhckxlZnQsXHJcbmh0bWxbZGlyPVwicnRsXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlckxlZnQsXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0LFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcclxuaHRtbFtkaXI9XCJsdHJcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxyXG5odG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciAqIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJMZWZ0ID4gKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJNaWRkbGUgPiAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gKixcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAqLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciAqIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc3BsaXRUb29sYmFyQnV0dG9uIHtcclxuICBtYXJnaW46IDJweCAycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLm92ZXJsYXlCdXR0b246aG92ZXIsXHJcbi5vdmVybGF5QnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uID4gc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcclxuLm92ZXJsYXlCdXR0b25bZGlzYWJsZWRdIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCAudG9vbGJhckJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmb2N1cyxcclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjpob3ZlcixcclxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpob3ZlcixcclxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxuICB6LWluZGV4OiAxOTk7XHJcbn1cclxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uU2VwYXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxM3B4IDA7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24sXHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b24sXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxyXG4ub3ZlcmxheUJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbjogMnB4IDFweDtcclxuICBwYWRkaW5nOiAycHggNnB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCxcclxuaHRtbFtkaXI9XCJydGxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwibHRyXCJdICN0b29sYmFyVmlld2VyUmlnaHQgPiAudG9vbGJhckJ1dHRvbjpsYXN0LWNoaWxkLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjdG9vbGJhclZpZXdlckxlZnQgPiAudG9vbGJhckJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuLnRvb2xiYXJCdXR0b246aG92ZXIsXHJcbi50b29sYmFyQnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xyXG59XHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOmhvdmVyLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZDpob3ZlcjphY3RpdmUsXHJcbi5zcGxpdFRvb2xiYXJCdXR0b24udG9nZ2xlZCA+IC50b29sYmFyQnV0dG9uLnRvZ2dsZWQ6aG92ZXI6YWN0aXZlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcclxuICB0b3A6IDZweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XHJcbiAgcmlnaHQ6IDdweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XHJcbiAgbGVmdDogN3B4O1xyXG59XHJcblxyXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICB3aWR0aDogMTYycHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFweCAwIDJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcclxufVxyXG5cclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCA+IG9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XHJcbn1cclxuXHJcbiNjdXN0b21TY2FsZU9wdGlvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI3BhZ2VXaWR0aE9wdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSBzb2xpZDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSxcclxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIsXHJcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgLyogQWxsIG1hdGNoaW5nIGltYWdlcyBoYXZlIGEgc2l6ZSBvZiAxNngxNlxyXG4gICAqIEFsbCByZWxldmFudCBjb250YWluZXJzIGhhdmUgYSBzaXplIG9mIDI4eDI4ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcblxyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbGJhci1pY29uLWJnLWNvbG9yKTtcclxuICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XHJcbiAgbWFzay1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogdmFyKC0tdG9vbGJhci1pY29uLW9wYWNpdHkpO1xyXG4gIHRvcDogNnB4O1xyXG4gIGxlZnQ6IDZweDtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgb3BhY2l0eTogdmFyKC0tZG9vcmhhbmdlci1pY29uLW9wYWNpdHkpO1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDEycHg7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXNpZGViYXJUb2dnbGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyQnV0dG9uI3NpZGViYXJUb2dnbGU6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudG9vbGJhckJ1dHRvbiNzZWNvbmRhcnlUb29sYmFyVG9nZ2xlOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uZmluZFByZXZpb3VzOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5maW5kTmV4dDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLW5leHQtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnBhZ2VVcDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wYWdlRG93bjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24uem9vbU91dDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21PdXQtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLnpvb21Jbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByZXNlbnRhdGlvbk1vZGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByZXNlbnRhdGlvbk1vZGUtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcHJpbnQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcclxufVxyXG5cclxuLnRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSxcclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XHJcbn1cclxuXHJcbi50b29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUsXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1kb3dubG9hZC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyayB7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ib29rbWFya1tocmVmPVwiI1wiXSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlLFxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tYm9va21hcmstaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcclxufVxyXG5cclxuI3ZpZXdUaHVtYm5haWwudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld1RodW1ibmFpbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbik7XHJcbn1cclxuXHJcbiN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdPdXRsaW5lLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdICN2aWV3T3V0bGluZS50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuI3ZpZXdBdHRhY2htZW50cy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbik7XHJcbn1cclxuXHJcbiN2aWV3TGF5ZXJzLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3TGF5ZXJzLWljb24pO1xyXG59XHJcblxyXG4jY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjY3VycmVudE91dGxpbmVJdGVtLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4jdmlld0ZpbmQudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xyXG59XHJcblxyXG4udG9vbGJhckJ1dHRvbi5wZGZTaWRlYmFyTm90aWZpY2F0aW9uOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0b3A6IDFweDtcclxuICAvKiBDcmVhdGUgYSBmaWxsZWQgY2lyY2xlLCB3aXRoIGEgZGlhbWV0ZXIgb2YgOSBwaXhlbHMsIHVzaW5nIG9ubHkgQ1NTOiAqL1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDIxOSwgODUsIDEpO1xyXG4gIGhlaWdodDogOXB4O1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcclxuICByaWdodDogMTdweDtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDFweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMjZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xyXG4gIHBhZGRpbmctbGVmdDogMzZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5maXJzdFBhZ2U6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ubGFzdFBhZ2U6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUNjdzo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDdzo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3ctaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2VsZWN0VG9vbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2VsZWN0VG9vbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNlbGVjdFRvb2wtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmhhbmRUb29sOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxWZXJ0aWNhbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsSG9yaXpvbnRhbDo6YmVmb3JlIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbEhvcml6b250YWwtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFdyYXBwZWQ6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxXcmFwcGVkLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWROb25lOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb24pO1xyXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcclxufVxyXG5cclxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkT2RkOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQtaWNvbik7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZEV2ZW46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb24pO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5kb2N1bWVudFByb3BlcnRpZXM6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcclxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcclxufVxyXG5cclxuLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTFweCAwO1xyXG4gIG1hcmdpbjogNXB4IDJweDtcclxuICB3aWR0aDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcGFyYXRvci1jb2xvcik7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudmVydGljYWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLmhvcml6b250YWxUb29sYmFyU2VwYXJhdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDZweCAwIDVweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3IpO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkIHtcclxuICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRvb2xiYXJGaWVsZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG1hcmdpbjogMTBweCAwIDNweCA3cHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC50b29sYmFyRmllbGRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBtYXJnaW46IDEwcHggN3B4IDNweCAwO1xyXG59XHJcblxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiBoaWRlcyB0aGUgc3Bpbm5lciBpbiBtb3ogKi9cclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQucGFnZU51bWJlci52aXNpYmxlUGFnZUlzTG9hZGluZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbG9hZGluZy1pY29uKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcclxufVxyXG5cclxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50b29sYmFyRmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzBhODRmZjtcclxufVxyXG5cclxuLnRvb2xiYXJMYWJlbCB7XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjbnVtUGFnZXMudG9vbGJhckxhYmVsIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyA+IGE6YWN0aXZlLFxyXG4jdGh1bWJuYWlsVmlldyA+IGE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudGh1bWJuYWlsIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudGh1bWJuYWlsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0aHVtYm5haWxWaWV3ID4gYTpsYXN0LW9mLXR5cGUgPiAudGh1bWJuYWlsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jdGh1bWJuYWlsVmlldyA+IGE6bGFzdC1vZi10eXBlID4gLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG5cclxuLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDEzMiwgMTMyLCAxMzIsIDEpO1xyXG4gIG1hcmdpbjogLTFweCA5cHggNHB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsSW1hZ2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4udGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxufVxyXG5cclxuYTpmb2N1cyA+IC50aHVtYm5haWwgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSxcclxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcsXHJcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxufVxyXG5cclxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4jb3V0bGluZVZpZXcsXHJcbiNhdHRhY2htZW50c1ZpZXcsXHJcbiNsYXllcnNWaWV3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiA0cHggNHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZVdpdGhEZWVwTmVzdGluZyA+IC50cmVlSXRlbSxcclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtID4gLnRyZWVJdGVtcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50cmVlSXRlbSA+IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWluLXdpZHRoOiA5NSU7XHJcbiAgLyogU3VidHJhY3QgdGhlIHJpZ2h0IHBhZGRpbmcgKGxlZnQsIGluIFJUTCBtb2RlKSBvZiB0aGUgY29udGFpbmVyOiAqL1xyXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0tdHJlZWl0ZW0tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAudHJlZUl0ZW0gPiBhIHtcclxuICBwYWRkaW5nOiAycHggMCA1cHggNHB4O1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbSA+IGEge1xyXG4gIHBhZGRpbmc6IDJweCA0cHggNXB4IDA7XHJcbn1cclxuXHJcbiNsYXllcnNWaWV3IC50cmVlSXRlbSA+IGEgPiAqIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+IGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjbGF5ZXJzVmlldyAudHJlZXNJdGVtID4gYSA+IGxhYmVsIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi50cmVlSXRlbVRvZ2dsZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tZXhwYW5kZWQtaWNvbik7XHJcbn1cclxuLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1jb2xsYXBzZWQtaWNvbik7XHJcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xyXG59XHJcbmh0bWxbZGlyPVwicnRsXCJdIC50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuOjpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbiB+IC50cmVlSXRlbXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaHRtbFtkaXI9XCJsdHJcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaHRtbFtkaXI9XCJydGxcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmh0bWxbZGlyPVwibHRyXCJdIC50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IDRweDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xyXG4gIGxlZnQ6IDRweDtcclxufVxyXG5cclxuLnRyZWVJdGVtLnNlbGVjdGVkID4gYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJlZWl0ZW0tc2VsZWN0ZWQtYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcik7XHJcbn1cclxuXHJcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIsXHJcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIgKyBhLFxyXG4udHJlZUl0ZW1Ub2dnbGVyOmhvdmVyIH4gLnRyZWVJdGVtcyxcclxuLnRyZWVJdGVtID4gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhcml0ZW0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFRPRE86IGZpbGUgRkYgYnVnIHRvIHN1cHBvcnQgOjotbW96LXNlbGVjdGlvbjp3aW5kb3ctaW5hY3RpdmVcclxuICAgc28gd2UgY2FuIG92ZXJyaWRlIHRoZSBvcGFxdWUgZ3JleSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHdpbmRvdyBpcyBpbmFjdGl2ZTtcclxuICAgc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcwNjIwOSAqL1xyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4zKTtcclxufVxyXG46OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbiNlcnJvcldyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdmFyKC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG59XHJcblxyXG4jZXJyb3JNZXNzYWdlTGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNlcnJvck1lc3NhZ2VSaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jZXJyb3JNb3JlSW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1maWVsZC1jb2xvcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLm92ZXJsYXlCdXR0b24ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogM3B4IDRweCAycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycHggMTFweDtcclxufVxyXG5cclxuI292ZXJsYXlDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDQwMDAwO1xyXG59XHJcbiNvdmVybGF5Q29udGFpbmVyID4gKiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciA+IC5kaWFsb2cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiA0cHg7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5kaWFsb2cgPiAucm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuXHJcbi5kaWFsb2cgPiAucm93ID4gKiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG5cclxuLmRpYWxvZyAudG9vbGJhckZpZWxkIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uZGlhbG9nIC5zZXBhcmF0b3Ige1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcclxufVxyXG5cclxuLmRpYWxvZyAuYnV0dG9uUm93IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmRpYWxvZyA6bGluayB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbiNwYXNzd29yZE92ZXJsYXkgPiAuZGlhbG9nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI3Bhc3N3b3JkT3ZlcmxheSAudG9vbGJhckZpZWxkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5ID4gLmRpYWxvZyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5odG1sW2Rpcj1cImx0clwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5odG1sW2Rpcj1cInJ0bFwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHNwYW4ge1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHAge1xyXG4gIG1heC13aWR0aDogMjI1cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGVhckJvdGgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uZmlsZUlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuI1BERkJ1ZyB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzJweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbiNQREZCdWcgLmNvbnRyb2xzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDEpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG4jUERGQnVnIC5wYW5lbHMge1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAyN3B4O1xyXG59XHJcbiNQREZCdWcgLnBhbmVscyA+IGRpdiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiNQREZCdWcgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRlYnVnZ2VyU2hvd1RleHQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAxKTtcclxufVxyXG4uZGVidWdnZXJIaWRlVGV4dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAwLCAxKTtcclxufVxyXG4jUERGQnVnIC5zdGF0cyB7XHJcbiAgZm9udC1mYW1pbHk6IGNvdXJpZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn1cclxuI1BERkJ1ZyAuc3RhdHMgLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jUERGQnVnIHRhYmxlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDI1NSwgMTI4LCAxKTtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItdmlzaWJsZSAuY2FudmFzV3JhcHBlciBjYW52YXMge1xyXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciA+IHNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDAsIDAsIDAuNSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3ZpZXdlci50ZXh0TGF5ZXItaG92ZXIgLnRleHRMYXllciA+IHNwYW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbn1cclxuXHJcbiN2aWV3ZXIudGV4dExheWVyLXNoYWRvdyAudGV4dExheWVyID4gc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG4uZ3JhYi10by1wYW4tZ3JhYiB7XHJcbiAgY3Vyc29yOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zOV9fX30pLCBtb3ZlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGdyYWIgIWltcG9ydGFudDtcclxufVxyXG4uZ3JhYi10by1wYW4tZ3JhYlxyXG4gICo6bm90KGlucHV0KTpub3QodGV4dGFyZWEpOm5vdChidXR0b24pOm5vdChzZWxlY3QpOm5vdCg6bGluaykge1xyXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmFiLXRvLXBhbi1ncmFiOmFjdGl2ZSxcclxuLmdyYWItdG8tcGFuLWdyYWJiaW5nIHtcclxuICBjdXJzb3I6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzQwX19ffSksIG1vdmUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmcgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IGdyYWJiaW5nICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogNTAwMDA7IC8qIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBhbnl0aGluZyBlbHNlIGluIFBERi5qcyEgKi9cclxufVxyXG5cclxuQHBhZ2Uge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3ByaW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC8qIEdlbmVyYWwgcnVsZXMgZm9yIHByaW50aW5nLiAqL1xyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lO1xyXG4gIH1cclxuXHJcbiAgLyogUnVsZXMgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtb3pQcmludENhbGxiYWNrLiAqL1xyXG4gICNzaWRlYmFyQ29udGFpbmVyLFxyXG4gICNzZWNvbmRhcnlUb29sYmFyLFxyXG4gIC50b29sYmFyLFxyXG4gICNsb2FkaW5nQm94LFxyXG4gICNlcnJvcldyYXBwZXIsXHJcbiAgLnRleHRMYXllciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgI21haW5Db250YWluZXIsXHJcbiAgI3ZpZXdlckNvbnRhaW5lcixcclxuICAucGFnZSxcclxuICAucGFnZSBjYW52YXMge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAucGFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAucGFnZVtkYXRhLWxvYWRlZF0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZmlsZUlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IFBERi5qcyBwcmludGluZyAqL1xyXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjb3V0ZXJDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgYm9keVtkYXRhLXBkZmpzcHJpbnRpbmddICNwcmludENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI3ByaW50Q29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLyogd3JhcHBlciBhcm91bmQgKHNjYWxlZCkgcHJpbnQgY2FudmFzIGVsZW1lbnRzICovXHJcbiAgI3ByaW50Q29udGFpbmVyID4gZGl2IHtcclxuICAgIC8qIFdpdGhvdXQgdGhlIGZvbGxvd2luZyBtYXgtaGVpZ2h0IGRlY2xhcmF0aW9uLCBDaHJvbWl1bSBtaWdodCBjcmVhdGUgZXh0cmFcclxuICAgICAqIGJsYW5rIHBhZ2VzLCBldmVuIHRob3VnaCBpdCBzaG91bGRuJ3QhICovXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG5cclxuICAgIC8qIElmIHdlJ3JlIHNtYWxsZXIgdGhhbiB0aGUgcGFnZSwgY2VudGVyIHRoZSBjYW52YXMgaG9yaXpvbnRhbGx5IGFuZFxyXG4gICAgICogdmVydGljYWxseSAqL1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAjcHJpbnRDb250YWluZXIgY2FudmFzLFxyXG4gICNwcmludENvbnRhaW5lciBpbWcge1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi52aXNpYmxlTGFyZ2VWaWV3LFxyXG4udmlzaWJsZU1lZGl1bVZpZXcsXHJcbi52aXNpYmxlU21hbGxWaWV3IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAjc2lkZWJhckNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLW5hcnJvdy1iZy1jb2xvcik7XHJcbiAgfVxyXG5cclxuICBodG1sW2Rpcj1cImx0clwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPVwicnRsXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5oaWRkZW5TbWFsbFZpZXcsXHJcbiAgLmhpZGRlblNtYWxsVmlldyAqIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC52aXNpYmxlU21hbGxWaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBodG1sW2Rpcj1cImx0clwiXSAuZmluZGJhciB7XHJcbiAgICBsZWZ0OiAzNHB4O1xyXG4gIH1cclxuICBodG1sW2Rpcj1cInJ0bFwiXSAuZmluZGJhciB7XHJcbiAgICByaWdodDogMzRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDUzNXB4KSB7XHJcbiAgI3NjYWxlU2VsZWN0Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY3NzL3ZpZXdlci5jc3NcIl0s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O0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFOztJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvblxcclxcbiAqXFxyXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7XFxyXFxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxcclxcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcclxcbiAqXFxyXFxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcclxcbiAqXFxyXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcclxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxyXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxyXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcclxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcclxcbiAqL1xcclxcblxcclxcbi50ZXh0TGF5ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodCB7XFxyXFxuICBtYXJnaW46IC0xcHg7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMCwgMTcwLCAxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuaGlnaGxpZ2h0LmJlZ2luIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQuZW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5oaWdobGlnaHQubWlkZGxlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgLmhpZ2hsaWdodC5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgOjotbW96LXNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0TGF5ZXIgOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dExheWVyIC5lbmRPZkNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRMYXllciAuZW5kT2ZDb250ZW50LmFjdGl2ZSB7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5saW5rQW5ub3RhdGlvbiA+IGEsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5wdXNoQnV0dG9uID4gYSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAubGlua0Fubm90YXRpb24gPiBhOmhvdmVyLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucHVzaEJ1dHRvbiA+IGE6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0QW5ub3RhdGlvbiBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiBpbnB1dCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC50ZXh0V2lkZ2V0QW5ub3RhdGlvbiB0ZXh0YXJlYSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1NCwgMjU1LCAwLjEzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogOXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWEge1xcclxcbiAgZm9udDogbWVzc2FnZS1ib3g7XFxyXFxuICBmb250LXNpemU6IDlweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXRbZGlzYWJsZWRdLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhW2Rpc2FibGVkXSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jaG9pY2VXaWRnZXRBbm5vdGF0aW9uIHNlbGVjdFtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dFtkaXNhYmxlZF0sXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQ6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gdGV4dGFyZWE6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuY2hvaWNlV2lkZ2V0QW5ub3RhdGlvbiBzZWxlY3Q6aG92ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpob3ZlcixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0OmZvY3VzLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIHRleHRhcmVhOmZvY3VzLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNob2ljZVdpZGdldEFubm90YXRpb24gc2VsZWN0OmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIsXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5yYWRpb0J1dHRvbiBpbnB1dDpjaGVja2VkOmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmJlZm9yZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLmNoZWNrQm94IGlucHV0OmNoZWNrZWQ6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dDpjaGVja2VkOmFmdGVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmJ1dHRvbldpZGdldEFubm90YXRpb24ucmFkaW9CdXR0b24gaW5wdXQ6Y2hlY2tlZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnRleHRXaWRnZXRBbm5vdGF0aW9uIGlucHV0LmNvbWIge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAudGV4dFdpZGdldEFubm90YXRpb24gaW5wdXQuY29tYjpmb2N1cyB7XFxyXFxuICAvKlxcclxcbiAgICogTGV0dGVyIHNwYWNpbmcgaXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlIG9mIGVhY2ggY2hhcmFjdGVyLiBIZW5jZSwgdGhlXFxyXFxuICAgKiBsZXR0ZXIgc3BhY2luZyBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSB2aXNpYmxlXFxyXFxuICAgKiBhcmVhLCBjYXVzaW5nIGhvcml6b250YWwgc2Nyb2xsaW5nLiBXZSBhdm9pZCB0aGlzIGJ5IGV4dGVuZGluZyB0aGUgd2lkdGhcXHJcXG4gICAqIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGZvY3VzIGFuZCByZXZlcnQgdGhpcyB3aGVuIGl0IGxvc2VzIGZvY3VzLlxcclxcbiAgICovXFxyXFxuICB3aWR0aDogMTE1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuYnV0dG9uV2lkZ2V0QW5ub3RhdGlvbi5jaGVja0JveCBpbnB1dCxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnJhZGlvQnV0dG9uIGlucHV0IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwV3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMTUzLCAxKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEzNiwgMTM2LCAxMzYsIDEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQ6IG1lc3NhZ2UtYm94O1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCA+ICoge1xcclxcbiAgZm9udC1zaXplOiA5cHg7XFxyXFxufVxcclxcblxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnBvcHVwIGgxIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAucG9wdXAgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb3B1cCBwIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFubm90YXRpb25MYXllciAuaGlnaGxpZ2h0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC51bmRlcmxpbmVBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLnNxdWlnZ2x5QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zdHJpa2VvdXRBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmZyZWVUZXh0QW5ub3RhdGlvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5saW5lQW5ub3RhdGlvbiBzdmcgbGluZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5zcXVhcmVBbm5vdGF0aW9uIHN2ZyByZWN0LFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmNpcmNsZUFubm90YXRpb24gc3ZnIGVsbGlwc2UsXFxyXFxuLmFubm90YXRpb25MYXllciAucG9seWxpbmVBbm5vdGF0aW9uIHN2ZyBwb2x5bGluZSxcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5wb2x5Z29uQW5ub3RhdGlvbiBzdmcgcG9seWdvbixcXHJcXG4uYW5ub3RhdGlvbkxheWVyIC5jYXJldEFubm90YXRpb24sXFxyXFxuLmFubm90YXRpb25MYXllciAuaW5rQW5ub3RhdGlvbiBzdmcgcG9seWxpbmUsXFxyXFxuLmFubm90YXRpb25MYXllciAuc3RhbXBBbm5vdGF0aW9uLFxcclxcbi5hbm5vdGF0aW9uTGF5ZXIgLmZpbGVBdHRhY2htZW50QW5ub3RhdGlvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIgLmNhbnZhc1dyYXBwZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIHdpZHRoOiA4MTZweDtcXHJcXG4gIGhlaWdodDogMTA1NnB4O1xcclxcbiAgbWFyZ2luOiAxcHggYXV0byAtOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxyXFxuICAtby1ib3JkZXItaW1hZ2U6IHVybChpbWFnZXMvc2hhZG93LnBuZykgOSA5IHJlcGVhdDtcXHJcXG4gICAgIGJvcmRlci1pbWFnZTogdXJsKGltYWdlcy9zaGFkb3cucG5nKSA5IDkgcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAucGFnZSB7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNpbmdsZVBhZ2VWaWV3IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5zaW5nbGVQYWdlVmlldyAucGFnZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQsXFxyXFxuLnNwcmVhZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMy41cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMuNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwsXFxyXFxuLnNwcmVhZCB7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAuc3ByZWFkLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsV3JhcHBlZCAuc3ByZWFkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ByZWFkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbFdyYXBwZWQgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxIb3Jpem9udGFsIC5zcHJlYWQsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5zcHJlYWQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwcmVhZCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnNjcm9sbEhvcml6b250YWwgLnBhZ2UsXFxyXFxuLnBkZlZpZXdlci5zY3JvbGxXcmFwcGVkIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMy41cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0zLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyAuc3ByZWFkIC5wYWdlLFxcclxcbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMuc2Nyb2xsSG9yaXpvbnRhbCAucGFnZSxcXHJcXG4ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzLnNjcm9sbFdyYXBwZWQgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIGNhbnZhcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlciAucGFnZSBjYW52YXNbaGlkZGVuXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIC5sb2FkaW5nSWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaW1hZ2VzL2xvYWRpbmctaWNvbi5naWZcXFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyIC5wYWdlLFxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlIC5wZGZWaWV3ZXIgLnNwcmVhZCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUgLnBkZlZpZXdlciAucGFnZSxcXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZSAucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotd2Via2l0LWZ1bGwtc2NyZWVuIC5wZGZWaWV3ZXIgLnBhZ2Uge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LW1vei1mdWxsLXNjcmVlbiAucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMCU7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gLnBkZlZpZXdlciAucGFnZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXNpZGViYXItd2lkdGg6IDIwMHB4O1xcclxcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgLS1sb2FkaW5nQmFyLWVuZC1vZmZzZXQ6IDA7XFxyXFxuXFxyXFxuICAtLXRvb2xiYXItaWNvbi1vcGFjaXR5OiAwLjc7XFxyXFxuICAtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5OiAwLjk7XFxyXFxuXFxyXFxuICAtLW1haW4tY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMSk7XFxyXFxuICAtLWJvZHktYmctY29sb3I6IHJnYmEoMjM3LCAyMzcsIDI0MCwgMSk7XFxyXFxuICAtLWVycm9yV3JhcHBlci1iZy1jb2xvcjogcmdiYSgyNTUsIDc0LCA3NCwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDEwLCAxMzIsIDI1NSwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMiwgMSk7XFxyXFxuICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3I6IHJnYmEoMTE2LCAxNzcsIDIzOSwgMSk7XFxyXFxuICAtLXNjcm9sbGJhci1jb2xvcjogYXV0bztcXHJcXG4gIC0tc2Nyb2xsYmFyLWJnLWNvbG9yOiBhdXRvO1xcclxcbiAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuXFxyXFxuICAtLXNpZGViYXItbmFycm93LWJnLWNvbG9yOiByZ2JhKDIzNywgMjM3LCAyNDAsIDAuOSk7XFxyXFxuICAtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ3LCAxKTtcXHJcXG4gIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSgyNDksIDI0OSwgMjUwLCAxKTtcXHJcXG4gIC0tdG9vbGJhci1ib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XFxyXFxuICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiYSgyMjEsIDIyMiwgMjIzLCAxKTtcXHJcXG4gIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC0tdG9nZ2xlZC1ob3Zlci1hY3RpdmUtYnRuLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAtLWRyb3Bkb3duLWJ0bi1iZy1jb2xvcjogcmdiYSgyMTUsIDIxNSwgMjE5LCAxKTtcXHJcXG4gIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtLWZpZWxkLWNvbG9yOiByZ2JhKDYsIDYsIDYsIDEpO1xcclxcbiAgLS1maWVsZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODgsIDEpO1xcclxcbiAgLS1maW5kYmFyLW5leHRwcmV2aW91cy1idG4tYmctY29sb3I6IHJnYmEoMjI3LCAyMjgsIDIzMCwgMSk7XFxyXFxuICAtLXRyZWVpdGVtLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxyXFxuICAtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIC0tZG9vcmhhbmdlci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1ib3JkZXItY29sb3I6IHJnYmEoMTIsIDEyLCAxMywgMC4yKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1ob3Zlci1jb2xvcjogcmdiYSgyMzcsIDIzNywgMjM3LCAxKTtcXHJcXG4gIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMSk7XFxyXFxuICAtLW92ZXJsYXktYnV0dG9uLWJnLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMSk7XFxyXFxuICAtLW92ZXJsYXktYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTMsIDAuMyk7XFxyXFxuXFxyXFxuICAtLWxvYWRpbmctaWNvbjogdXJsKGltYWdlcy9sb2FkaW5nLnN2Zyk7XFxyXFxuICAtLXRyZWVpdGVtLWV4cGFuZGVkLWljb246IHVybChpbWFnZXMvdHJlZWl0ZW0tZXhwYW5kZWQuc3ZnKTtcXHJcXG4gIC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb246IHVybChpbWFnZXMvdHJlZWl0ZW0tY29sbGFwc2VkLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1tZW51QXJyb3cuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcGFnZVVwLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXBhZ2VEb3duLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbU91dC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tem9vbUluLnN2Zyk7XFxyXFxuICAtLXRvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tcHJlc2VudGF0aW9uTW9kZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXByaW50LWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1wcmludC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLW9wZW5GaWxlLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1kb3dubG9hZC5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb246IHVybChpbWFnZXMvdG9vbGJhckJ1dHRvbi1ib29rbWFyay5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdUaHVtYm5haWwuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tdmlld091dGxpbmUuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi12aWV3QXR0YWNobWVudHMtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLXZpZXdMYXllcnMuc3ZnKTtcXHJcXG4gIC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbjogdXJsKGltYWdlcy90b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS5zdmcpO1xcclxcbiAgLS10b29sYmFyQnV0dG9uLXNlYXJjaC1pY29uOiB1cmwoaW1hZ2VzL3Rvb2xiYXJCdXR0b24tc2VhcmNoLnN2Zyk7XFxyXFxuICAtLWZpbmRiYXJCdXR0b24tcHJldmlvdXMtaWNvbjogdXJsKGltYWdlcy9maW5kYmFyQnV0dG9uLXByZXZpb3VzLnN2Zyk7XFxyXFxuICAtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uOiB1cmwoaW1hZ2VzL2ZpbmRiYXJCdXR0b24tbmV4dC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tZmlyc3RQYWdlLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3cuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ3cuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWhhbmRUb29sLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsVmVydGljYWwtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC1pY29uOiB1cmwoaW1hZ2VzL3NlY29uZGFyeVRvb2xiYXJCdXR0b24tc2Nyb2xsSG9yaXpvbnRhbC5zdmcpO1xcclxcbiAgLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbjogdXJsKGltYWdlcy9zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWROb25lLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRPZGQuc3ZnKTtcXHJcXG4gIC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zcHJlYWRFdmVuLnN2Zyk7XFxyXFxuICAtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tZG9jdW1lbnRQcm9wZXJ0aWVzLWljb246IHVybChpbWFnZXMvc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcclxcbiAgOnJvb3Qge1xcclxcbiAgICAtLW1haW4tY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI1MCwgMSk7XFxyXFxuICAgIC0tYm9keS1iZy1jb2xvcjogcmdiYSg0MiwgNDIsIDQ2LCAxKTtcXHJcXG4gICAgLS1lcnJvcldyYXBwZXItYmctY29sb3I6IHJnYmEoMTk5LCAxNywgMTcsIDEpO1xcclxcbiAgICAtLXByb2dyZXNzQmFyLWNvbG9yOiByZ2JhKDAsIDk2LCAyMjMsIDEpO1xcclxcbiAgICAtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3I6IHJnYmEoNDAsIDQwLCA0MywgMSk7XFxyXFxuICAgIC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1ibGVuZC1jb2xvcjogcmdiYSgyMCwgNjgsIDEzMywgMSk7XFxyXFxuICAgIC0tc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjMsIDEpO1xcclxcbiAgICAtLXNjcm9sbGJhci1iZy1jb2xvcjogcmdiYSgzNSwgMzUsIDM5LCAxKTtcXHJcXG4gICAgLS10b29sYmFyLWljb24tYmctY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuXFxyXFxuICAgIC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3I6IHJnYmEoNDIsIDQyLCA0NiwgMC45KTtcXHJcXG4gICAgLS1zaWRlYmFyLXRvb2xiYXItYmctY29sb3I6IHJnYmEoNTAsIDUwLCA1MiwgMSk7XFxyXFxuICAgIC0tdG9vbGJhci1iZy1jb2xvcjogcmdiYSg1NiwgNTYsIDYxLCAxKTtcXHJcXG4gICAgLS10b29sYmFyLWJvcmRlci1jb2xvcjogcmdiYSgxMiwgMTIsIDEzLCAxKTtcXHJcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMywgMSk7XFxyXFxuICAgIC0tdG9nZ2xlZC1idG4tYmctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgLS1kcm9wZG93bi1idG4tYmctY29sb3I6IHJnYmEoNzQsIDc0LCA3OSwgMSk7XFxyXFxuICAgIC0tc2VwYXJhdG9yLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIC0tZmllbGQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XFxyXFxuICAgIC0tZmllbGQtYmctY29sb3I6IHJnYmEoNjQsIDY0LCA2OCwgMSk7XFxyXFxuICAgIC0tZmllbGQtYm9yZGVyLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDEpO1xcclxcbiAgICAtLWZpbmRiYXItbmV4dHByZXZpb3VzLWJ0bi1iZy1jb2xvcjogcmdiYSg4OSwgODksIDg5LCAxKTtcXHJcXG4gICAgLS10cmVlaXRlbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICAtLXRyZWVpdGVtLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIC0tdHJlZWl0ZW0tc2VsZWN0ZWQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgLS10cmVlaXRlbS1zZWxlY3RlZC1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gICAgLS1zaWRlYmFyaXRlbS1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgLS1kb29yaGFuZ2VyLWJnLWNvbG9yOiByZ2JhKDc0LCA3NCwgNzksIDEpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDMsIDEpO1xcclxcbiAgICAtLWRvb3JoYW5nZXItaG92ZXItY29sb3I6IHJnYmEoOTMsIDk0LCA5OCwgMSk7XFxyXFxuICAgIC0tZG9vcmhhbmdlci1zZXBhcmF0b3ItY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XFxyXFxuICAgIC0tb3ZlcmxheS1idXR0b24tYmctY29sb3I6IHJnYmEoOTIsIDkyLCA5NywgMSk7XFxyXFxuICAgIC0tb3ZlcmxheS1idXR0b24taG92ZXItY29sb3I6IHJnYmEoMTE1LCAxMTUsIDExNSwgMSk7XFxyXFxuXFxyXFxuICAgIC8qIFRoaXMgaW1hZ2UgaXMgdXNlZCBpbiA8aW5wdXQ+IGVsZW1lbnRzLCB3aGljaCB1bmZvcnR1bmF0ZWx5IG1lYW5zIHRoYXRcXHJcXG4gICAgICogdGhlIGBtYXNrLWltYWdlYCBhcHByb2FjaCB1c2VkIHdpdGggYWxsIG9mIHRoZSBvdGhlciBpbWFnZXMgZG9lc24ndCB3b3JrXFxyXFxuICAgICAqIGhlcmU7IGhlbmNlIHdoeSB3ZSBzdGlsbCBoYXZlIHR3byB2ZXJzaW9ucyBvZiB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UuICovXFxyXFxuICAgIC0tbG9hZGluZy1pY29uOiB1cmwoaW1hZ2VzL2xvYWRpbmctZGFyay5zdmcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAvKiBGb250IHNpemUgaXMgbmVlZGVkIHRvIG1ha2UgdGhlIGFjdGl2aXR5IGJhciB0aGUgY29ycmVjdCBzaXplLiAqL1xcclxcbiAgLyogZm9udC1zaXplOiAxMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAvKiBmb250OiBtZXNzYWdlLWJveDsgKi9cXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXNjcm9sbGJhci1jb2xvcikgdmFyKC0tc2Nyb2xsYmFyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlZpZXdlci5lbmFibGVQZXJtaXNzaW9ucyAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdlckNvbnRhaW5lci5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4ge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXJDb250YWluZXIucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiBhOm5vdCguaW50ZXJuYWxMaW5rKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTotbW96LWZ1bGwtc2NyZWVuIGE6bm90KC5pbnRlcm5hbExpbmspIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOmZ1bGxzY3JlZW4gYTpub3QoLmludGVybmFsTGluaykge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGU6LXdlYmtpdC1mdWxsLXNjcmVlbiAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBjdXJzb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wZGZQcmVzZW50YXRpb25Nb2RlOi1tb3otZnVsbC1zY3JlZW4gLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZTpmdWxsc2NyZWVuIC50ZXh0TGF5ZXIgPiBzcGFuIHtcXHJcXG4gIGN1cnNvcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBkZlByZXNlbnRhdGlvbk1vZGUucGRmUHJlc2VudGF0aW9uTW9kZUNvbnRyb2xzID4gKixcXHJcXG4ucGRmUHJlc2VudGF0aW9uTW9kZS5wZGZQcmVzZW50YXRpb25Nb2RlQ29udHJvbHMgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDUxLCA1MSwgNTEsIDEpO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLWR1cmF0aW9uKTtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XFxyXFxuICBsZWZ0OiBjYWxjKDBweCAtIHZhcigtLXNpZGViYXItd2lkdGgpKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgcmlnaHQ6IGNhbGMoMHB4IC0gdmFyKC0tc2lkZWJhci13aWR0aCkpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3V0ZXJDb250YWluZXIuc2lkZWJhclJlc2l6aW5nICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIEltcHJvdmUgcmVzcG9uc2l2ZW5lc3MgYW5kIGF2b2lkIHZpc3VhbCBnbGl0Y2hlcyB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcXHJcXG4gIC8qIFByZXZlbnQgZS5nLiB0aGUgdGh1bWJuYWlscyBiZWluZyBzZWxlY3RlZCB3aGVuIHRoZSBzaWRlYmFyIGlzIHJlc2l6ZWQuICovXFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyTW92aW5nICNzaWRlYmFyQ29udGFpbmVyLFxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjc2lkZWJhckNvbnRhaW5lciB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3NpZGViYXJDb250YWluZXIge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNtYWluQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyQ29udGVudCB7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3NpZGViYXJDb250ZW50IHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3NpZGViYXJDb250ZW50IHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzMnB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tc2lkZWJhci10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbik7XFxyXFxufVxcclxcblxcclxcbiNvdXRlckNvbnRhaW5lci5zaWRlYmFyUmVzaXppbmcgI3ZpZXdlckNvbnRhaW5lciB7XFxyXFxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXVxcclxcbiAgI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuXFxyXFxuICAjdmlld2VyQ29udGFpbmVyOm5vdCgucGRmUHJlc2VudGF0aW9uTW9kZSkge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXHJcXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl1cXHJcXG4gICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlblxcclxcbiAgI3ZpZXdlckNvbnRhaW5lcjpub3QoLnBkZlByZXNlbnRhdGlvbk1vZGUpIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgcmlnaHQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4uTWFpbi1Db250YWluZXIgLnRvb2xiYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rvb2xiYXJDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyU2lkZWJhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdG9vbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXIge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhciB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXIgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhciAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclNpZGViYXJSaWdodCAudG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhclJlc2l6ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3NpZGViYXJSZXNpemVyIHtcXHJcXG4gIHJpZ2h0OiAtNnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3NpZGViYXJSZXNpemVyIHtcXHJcXG4gIGxlZnQ6IC02cHg7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyQ29udGFpbmVyLFxcclxcbi5maW5kYmFyLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggMCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyVmlld2VyIHtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10b29sYmFyLWJvcmRlci1jb2xvcik7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1zaWRlYmFyLXRyYW5zaXRpb24tZHVyYXRpb24pO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXNpZGViYXItdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2xvYWRpbmdCYXIge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNsb2FkaW5nQmFyIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0O1xcclxcbiAgbGVmdDogdmFyKC0tbG9hZGluZ0Jhci1lbmQtb2Zmc2V0KTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcXHJcXG4gIGxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICNsb2FkaW5nQmFyIHtcXHJcXG4gIHJpZ2h0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGVyQ29udGFpbmVyLnNpZGViYXJSZXNpemluZyAjbG9hZGluZ0JhciB7XFxyXFxuICAvKiBJbXByb3ZlIHJlc3BvbnNpdmVuZXNzIGFuZCBhdm9pZCB2aXN1YWwgZ2xpdGNoZXMgd2hlbiB0aGUgc2lkZWJhciBpcyByZXNpemVkLiAqL1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTE0MnB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NJbmRldGVybWluYXRlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgbGVmdDogLTE0MnB4O1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nQmFyIC5wcm9ncmVzcy5pbmRldGVybWluYXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmdCYXIgLnByb2dyZXNzLmluZGV0ZXJtaW5hdGUgLmdsaW1tZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxNTBweCk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxMzVkZWcsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmxlbmQtY29sb3IpIDAsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWluZGV0ZXJtaW5hdGUtYmctY29sb3IpIDVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcikgNDVweCxcXHJcXG4gICAgdmFyKC0tcHJvZ3Jlc3NCYXItY29sb3IpIDU1cHgsXFxyXFxuICAgIHZhcigtLXByb2dyZXNzQmFyLWNvbG9yKSA5NXB4LFxcclxcbiAgICB2YXIoLS1wcm9ncmVzc0Jhci1pbmRldGVybWluYXRlLWJsZW5kLWNvbG9yKSAxMDBweFxcclxcbiAgKTtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzc0luZGV0ZXJtaW5hdGUgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzSW5kZXRlcm1pbmF0ZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHRvcDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogMCA0cHg7XFxyXFxuICBtYXJnaW46IDRweCAycHg7XFxyXFxuICBjb2xvcjogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIge1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItYmctY29sb3IpO1xcclxcbn1cXHJcXG4uZmluZGJhciA+IGRpdiB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcbi5maW5kYmFyLndyYXBDb250YWluZXJzID4gZGl2IHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4uZmluZGJhci53cmFwQ29udGFpbmVycyA+IGRpdiNmaW5kYmFyTWVzc2FnZUNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciB7XFxyXFxuICBsZWZ0OiA2NHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgcmlnaHQ6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogM3B4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmluZGJhci1uZXh0cHJldmlvdXMtYnRuLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBoZWlnaHQ6IDI2cHg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZmllbGQtYm9yZGVyLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluZGJhciAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XFxyXFxuICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5maW5kYmFyIC5zcGxpdFRvb2xiYXJCdXR0b24gPiAuZmluZE5leHQge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC5maW5kTmV4dCB7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5kYmFyIGxhYmVsIHtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgbGFiZWw6aG92ZXIsXFxyXFxuLmZpbmRiYXIgaW5wdXQ6Zm9jdXMgKyBsYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2ZpbmRJbnB1dCB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2ZpbmRJbnB1dCB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAudG9vbGJhckxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZWQtYnRuLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jZmluZElucHV0IHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAxKTtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbiNmaW5kSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwicGVuZGluZ1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwicGVuZGluZ1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDNweDtcXHJcXG59XFxyXFxuI2ZpbmRJbnB1dFtkYXRhLXN0YXR1cz1cXFwibm90Rm91bmRcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTAyLCAxMDIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICBwYWRkaW5nOiA2cHggMCAxMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgei1pbmRleDogMzAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyIHtcXHJcXG4gIHJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhciB7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbiNzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TY3JvbGxNb2RlQnV0dG9ucyA+IC5zY3JvbGxNb2RlQnV0dG9ucyxcXHJcXG4jc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lci5oaWRkZW5TcHJlYWRNb2RlQnV0dG9ucyA+IC5zcHJlYWRNb2RlQnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5kb29ySGFuZ2VyLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKSxcXHJcXG4gICAgMCAwIDAgMXB4IHZhcigtLWRvb3JoYW5nZXItYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXI6YmVmb3JlLFxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgYm90dG9tOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuLmRvb3JIYW5nZXJSaWdodDphZnRlciB7XFxyXFxuICBib3JkZXItd2lkdGg6IDhweDtcXHJcXG59XFxyXFxuLmRvb3JIYW5nZXI6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdG9vbGJhci1iZy1jb2xvcik7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZG9vcmhhbmdlci1iZy1jb2xvcik7XFxyXFxufVxcclxcbi5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG4uZG9vckhhbmdlclJpZ2h0OmJlZm9yZSB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3JkZXItd2lkdGg6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyOmFmdGVyLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlclJpZ2h0OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLThweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyOmJlZm9yZSxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXJSaWdodDpiZWZvcmUge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmRvb3JIYW5nZXI6YWZ0ZXIsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuZG9vckhhbmdlcjpiZWZvcmUsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5kb29ySGFuZ2VyUmlnaHQ6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZmluZFJlc3VsdHNDb3VudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNywgMjE3LCAyMTcsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoODIsIDgyLCA4MiwgMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcHggNHB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNmaW5kTXNnIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1MSwgMCwgMCwgMSk7XFxyXFxufVxcclxcbiNmaW5kTXNnOmVtcHR5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0b29sYmFyVmlld2VyTWlkZGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCxcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyTGVmdCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlckxlZnQsXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhclJpZ2h0LFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclNpZGViYXJMZWZ0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmZpbmRiYXIgKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTWlkZGxlID4gKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+ICosXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyU2lkZWJhckxlZnQgKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI3Rvb2xiYXJTaWRlYmFyUmlnaHQgKixcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIgKiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24ge1xcclxcbiAgbWFyZ2luOiAycHggMnB4IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbixcXHJcXG4ub3ZlcmxheUJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IDAgbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG59XFxyXFxuLm92ZXJsYXlCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1idXR0b24tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheUJ1dHRvbjpob3ZlcixcXHJcXG4ub3ZlcmxheUJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uID4gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uW2Rpc2FibGVkXSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuLm92ZXJsYXlCdXR0b25bZGlzYWJsZWRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbi50b2dnbGVkIC50b29sYmFyQnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi5zcGxpdFRvb2xiYXJCdXR0b24gPiAudG9vbGJhckJ1dHRvbjpmb2N1cyxcXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOmhvdmVyLFxcclxcbi50b29sYmFyQnV0dG9uLnRleHRCdXR0b246aG92ZXIsXFxyXFxuLnRvb2xiYXJCdXR0b24udGV4dEJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbiAgei1pbmRleDogMTk5O1xcclxcbn1cXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuc3BsaXRUb29sYmFyQnV0dG9uID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCxcXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvbiA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmRiYXIgLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZC1ib3JkZXItY29sb3IpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMTNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNwbGl0VG9vbGJhckJ1dHRvblNlcGFyYXRvciB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zcGxpdFRvb2xiYXJCdXR0b25TZXBhcmF0b3Ige1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbixcXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLFxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIG1hcmdpbjogMnB4IDFweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA2cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkLFxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdG9vbGJhclZpZXdlclJpZ2h0ID4gLnRvb2xiYXJCdXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI3Rvb2xiYXJWaWV3ZXJSaWdodCA+IC50b29sYmFyQnV0dG9uOmxhc3QtY2hpbGQsXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICN0b29sYmFyVmlld2VyTGVmdCA+IC50b29sYmFyQnV0dG9uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbn1cXHJcXG4udG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4udG9vbGJhckJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpob3ZlcixcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjpmb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb29yaGFuZ2VyLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24udG9nZ2xlZCxcXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnRvZ2dsZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlZC1idG4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uc3BsaXRUb29sYmFyQnV0dG9uLnRvZ2dsZWQgPiAudG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi50b2dnbGVkOmhvdmVyOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVkLWhvdmVyLWFjdGl2ZS1idG4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcGRvd24tYnRuLWJnLWNvbG9yKTtcXHJcXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uOjphZnRlciB7XFxyXFxuICB0b3A6IDZweDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLW1lbnVBcnJvdy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tbWVudUFycm93LWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbjo6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTYycHg7XFxyXFxuICBoZWlnaHQ6IDI4cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAxcHggMCAycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1idG4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Qge1xcclxcbiAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG4uZHJvcGRvd25Ub29sYmFyQnV0dG9uID4gc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b24gPiBzZWxlY3Q6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duVG9vbGJhckJ1dHRvbiA+IHNlbGVjdCA+IG9wdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kb29yaGFuZ2VyLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1c3RvbVNjYWxlT3B0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwYWdlV2lkdGhPcHRpb24ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b25TcGFjZXIge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b246OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlLFxcclxcbi5kcm9wZG93blRvb2xiYXJCdXR0b246OmFmdGVyLFxcclxcbi50cmVlSXRlbVRvZ2dsZXI6OmJlZm9yZSB7XFxyXFxuICAvKiBBbGwgbWF0Y2hpbmcgaW1hZ2VzIGhhdmUgYSBzaXplIG9mIDE2eDE2XFxyXFxuICAgKiBBbGwgcmVsZXZhbnQgY29udGFpbmVycyBoYXZlIGEgc2l6ZSBvZiAyOHgyOCAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuXFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1iZy1jb2xvcik7XFxyXFxuICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxyXFxuICBtYXNrLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IHZhcigtLXRvb2xiYXItaWNvbi1vcGFjaXR5KTtcXHJcXG4gIHRvcDogNnB4O1xcclxcbiAgbGVmdDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IHZhcigtLWRvb3JoYW5nZXItaWNvbi1vcGFjaXR5KTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAxMnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICByaWdodDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zaWRlYmFyVG9nZ2xlLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJCdXR0b24jc2lkZWJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWNvbmRhcnlUb29sYmFyVG9nZ2xlLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRvb2xiYXJCdXR0b24jc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZTo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uZmluZFByZXZpb3VzOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1maW5kYmFyQnV0dG9uLXByZXZpb3VzLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tZmluZGJhckJ1dHRvbi1wcmV2aW91cy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uZmluZE5leHQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLWZpbmRiYXJCdXR0b24tbmV4dC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ucGFnZVVwOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXBhZ2VVcC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZVVwLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wYWdlRG93bjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wYWdlRG93bi1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tcGFnZURvd24taWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnpvb21PdXQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbU91dC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24uem9vbUluOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXpvb21Jbi1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tem9vbUluLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wcmVzZW50YXRpb25Nb2RlOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ucHJlc2VudGF0aW9uTW9kZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmVzZW50YXRpb25Nb2RlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5wcmludDo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnByaW50OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXByaW50LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1wcmludC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJCdXR0b24ub3BlbkZpbGU6OmJlZm9yZSxcXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5vcGVuRmlsZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1vcGVuRmlsZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tb3BlbkZpbGUtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLmRvd25sb2FkOjpiZWZvcmUsXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uZG93bmxvYWQ6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tZG93bmxvYWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWRvd25sb2FkLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5ib29rbWFyayB7XFxyXFxuICBwYWRkaW5nLXRvcDogNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9va21hcmtbaHJlZj1cXFwiI1xcXCJdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckJ1dHRvbi5ib29rbWFyazo6YmVmb3JlLFxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmJvb2ttYXJrOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWJvb2ttYXJrLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1ib29rbWFyay1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdUaHVtYm5haWwudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3VGh1bWJuYWlsLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi12aWV3T3V0bGluZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld091dGxpbmUtaWNvbik7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAjdmlld091dGxpbmUudG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdBdHRhY2htZW50cy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdBdHRhY2htZW50cy1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tdmlld0F0dGFjaG1lbnRzLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld0xheWVycy50b29sYmFyQnV0dG9uOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLXZpZXdMYXllcnMtaWNvbik7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1jdXJyZW50T3V0bGluZUl0ZW0taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS10b29sYmFyQnV0dG9uLWN1cnJlbnRPdXRsaW5lSXRlbS1pY29uKTtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNjdXJyZW50T3V0bGluZUl0ZW0udG9vbGJhckJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXdGaW5kLnRvb2xiYXJCdXR0b246OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXRvb2xiYXJCdXR0b24tc2VhcmNoLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdG9vbGJhckJ1dHRvbi1zZWFyY2gtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRvcDogMXB4O1xcclxcbiAgLyogQ3JlYXRlIGEgZmlsbGVkIGNpcmNsZSwgd2l0aCBhIGRpYW1ldGVyIG9mIDkgcGl4ZWxzLCB1c2luZyBvbmx5IENTUzogKi9cXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTIsIDIxOSwgODUsIDEpO1xcclxcbiAgaGVpZ2h0OiA5cHg7XFxyXFxuICB3aWR0aDogOXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRvb2xiYXJCdXR0b24ucGRmU2lkZWJhck5vdGlmaWNhdGlvbjo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTdweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyQnV0dG9uLnBkZlNpZGViYXJOb3RpZmljYXRpb246OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDAgMXB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWluLWhlaWdodDogMjZweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC5zZWNvbmRhcnlUb29sYmFyQnV0dG9uID4gc3BhbiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAuc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA+IHNwYW4ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmZpcnN0UGFnZTo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1maXJzdFBhZ2UtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWZpcnN0UGFnZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24ubGFzdFBhZ2U6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tbGFzdFBhZ2UtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWxhc3RQYWdlLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5yb3RhdGVDY3c6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tcm90YXRlQ2N3LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDY3ctaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnJvdGF0ZUN3OjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXJvdGF0ZUN3LWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1yb3RhdGVDdy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2VsZWN0VG9vbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zZWxlY3RUb29sLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5oYW5kVG9vbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1oYW5kVG9vbC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24taGFuZFRvb2wtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNjcm9sbFZlcnRpY2FsOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFZlcnRpY2FsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxWZXJ0aWNhbC1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc2Nyb2xsSG9yaXpvbnRhbDo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1zY3JvbGxIb3Jpem9udGFsLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zY3JvbGxXcmFwcGVkOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNjcm9sbFdyYXBwZWQtaWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLnNwcmVhZE5vbmU6OmJlZm9yZSB7XFxyXFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkTm9uZS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZGFyeVRvb2xiYXJCdXR0b24uc3ByZWFkT2RkOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZE9kZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXNlY29uZGFyeVRvb2xiYXJCdXR0b24tc3ByZWFkT2RkLWljb24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi5zcHJlYWRFdmVuOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLXNwcmVhZEV2ZW4taWNvbik7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRhcnlUb29sYmFyQnV0dG9uLmRvY3VtZW50UHJvcGVydGllczo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbi1kb2N1bWVudFByb3BlcnRpZXMtaWNvbik7XFxyXFxuICBtYXNrLWltYWdlOiB2YXIoLS1zZWNvbmRhcnlUb29sYmFyQnV0dG9uLWRvY3VtZW50UHJvcGVydGllcy1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxuLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDExcHggMDtcXHJcXG4gIG1hcmdpbjogNXB4IDJweDtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXBhcmF0b3ItY29sb3IpO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvcml6b250YWxUb29sYmFyU2VwYXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiA2cHggMCA1cHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRvb3JoYW5nZXItc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZCB7XFxyXFxuICBwYWRkaW5nOiA0cHggN3B4O1xcclxcbiAgbWFyZ2luOiAzcHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudG9vbGJhckZpZWxkW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgM3B4IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50b29sYmFyRmllbGRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBtYXJnaW46IDEwcHggN3B4IDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXIge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIGhpZGVzIHRoZSBzcGlubmVyIGluIG1veiAqL1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyLnZpc2libGVQYWdlSXNMb2FkaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWxvYWRpbmctaWNvbik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhckZpZWxkLnBhZ2VOdW1iZXI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuLnRvb2xiYXJGaWVsZC5wYWdlTnVtYmVyOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2xiYXJGaWVsZDpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICMwYTg0ZmY7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyTGFiZWwge1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI251bVBhZ2VzLnRvb2xiYXJMYWJlbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNudW1QYWdlcy50b29sYmFyTGFiZWwge1xcclxcbiAgcGFkZGluZy1yaWdodDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMwcHggMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG5cXHJcXG4jdGh1bWJuYWlsVmlldyA+IGE6YWN0aXZlLFxcclxcbiN0aHVtYm5haWxWaWV3ID4gYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsIHtcXHJcXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50aHVtYm5haWwge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudGh1bWJuYWlsIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWwge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RodW1ibmFpbFZpZXcgPiBhOmxhc3Qtb2YtdHlwZSA+IC50aHVtYm5haWw6bm90KFtkYXRhLWxvYWRlZF0pIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbDpub3QoW2RhdGEtbG9hZGVkXSkge1xcclxcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMTMyLCAxMzIsIDEzMiwgMSk7XFxyXFxuICBtYXJnaW46IC0xcHggOXB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbEltYWdlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbFNlbGVjdGlvblJpbmcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5hOmZvY3VzID4gLnRodW1ibmFpbCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nID4gLnRodW1ibmFpbEltYWdlLFxcclxcbi50aHVtYm5haWw6aG92ZXIgPiAudGh1bWJuYWlsU2VsZWN0aW9uUmluZyA+IC50aHVtYm5haWxJbWFnZSB7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbmE6Zm9jdXMgPiAudGh1bWJuYWlsID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcsXFxyXFxuLnRodW1ibmFpbDpob3ZlciA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsLnNlbGVjdGVkID4gLnRodW1ibmFpbFNlbGVjdGlvblJpbmcgPiAudGh1bWJuYWlsSW1hZ2Uge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC5zZWxlY3RlZCA+IC50aHVtYm5haWxTZWxlY3Rpb25SaW5nIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJpdGVtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI291dGxpbmVWaWV3LFxcclxcbiNhdHRhY2htZW50c1ZpZXcsXFxyXFxuI2xheWVyc1ZpZXcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiA0cHggNHB4IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlV2l0aERlZXBOZXN0aW5nID4gLnRyZWVJdGVtLFxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAudHJlZUl0ZW0gPiAudHJlZUl0ZW1zIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVXaXRoRGVlcE5lc3RpbmcgPiAudHJlZUl0ZW0sXFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbSA+IC50cmVlSXRlbXMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW0gPiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1pbi13aWR0aDogOTUlO1xcclxcbiAgLyogU3VidHJhY3QgdGhlIHJpZ2h0IHBhZGRpbmcgKGxlZnQsIGluIFJUTCBtb2RlKSBvZiB0aGUgY29udGFpbmVyOiAqL1xcclxcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcImx0clxcXCJdIC50cmVlSXRlbSA+IGEge1xcclxcbiAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbSA+IGEge1xcclxcbiAgcGFkZGluZzogMnB4IDRweCA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+ICoge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gI2xheWVyc1ZpZXcgLnRyZWVJdGVtID4gYSA+IGxhYmVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2xheWVyc1ZpZXcgLnRyZWVzSXRlbSA+IGEgPiBsYWJlbCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbVRvZ2dsZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbn1cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS10cmVlaXRlbS1leHBhbmRlZC1pY29uKTtcXHJcXG4gIG1hc2staW1hZ2U6IHZhcigtLXRyZWVpdGVtLWV4cGFuZGVkLWljb24pO1xcclxcbn1cXHJcXG4udHJlZUl0ZW1Ub2dnbGVyLnRyZWVJdGVtc0hpZGRlbjo6YmVmb3JlIHtcXHJcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xcclxcbiAgbWFzay1pbWFnZTogdmFyKC0tdHJlZWl0ZW0tY29sbGFwc2VkLWljb24pO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gLnRyZWVJdGVtVG9nZ2xlci50cmVlSXRlbXNIaWRkZW46OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxufVxcclxcbi50cmVlSXRlbVRvZ2dsZXIudHJlZUl0ZW1zSGlkZGVuIH4gLnRyZWVJdGVtcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtVG9nZ2xlciB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuaHRtbFtkaXI9XFxcInJ0bFxcXCJdIC50cmVlSXRlbVRvZ2dsZXIge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwibHRyXFxcIl0gLnRyZWVJdGVtVG9nZ2xlcjo6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiA0cHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJydGxcXFwiXSAudHJlZUl0ZW1Ub2dnbGVyOjpiZWZvcmUge1xcclxcbiAgbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHJlZUl0ZW0uc2VsZWN0ZWQgPiBhIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyZWVpdGVtLXNlbGVjdGVkLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10cmVlaXRlbS1zZWxlY3RlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50cmVlSXRlbVRvZ2dsZXI6aG92ZXIsXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciArIGEsXFxyXFxuLnRyZWVJdGVtVG9nZ2xlcjpob3ZlciB+IC50cmVlSXRlbXMsXFxyXFxuLnRyZWVJdGVtID4gYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyaXRlbS1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRyZWVpdGVtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETzogZmlsZSBGRiBidWcgdG8gc3VwcG9ydCA6Oi1tb3otc2VsZWN0aW9uOndpbmRvdy1pbmFjdGl2ZVxcclxcbiAgIHNvIHdlIGNhbiBvdmVycmlkZSB0aGUgb3BhcXVlIGdyZXkgYmFja2dyb3VuZCB3aGVuIHRoZSB3aW5kb3cgaXMgaW5hY3RpdmU7XFxyXFxuICAgc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcwNjIwOSAqL1xcclxcbjo6LW1vei1zZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XFxyXFxufVxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JXcmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgdmFyKC0tZXJyb3JXcmFwcGVyLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3JNZXNzYWdlTGVmdCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTWVzc2FnZVJpZ2h0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yTW9yZUluZm8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGQtYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWZpZWxkLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZWxkLWJvcmRlci1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIHdpZHRoOiA5OCU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5QnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWFyZ2luOiAzcHggNHB4IDJweCAhaW1wb3J0YW50O1xcclxcbiAgcGFkZGluZzogMnB4IDExcHg7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB6LWluZGV4OiA0MDAwMDtcXHJcXG59XFxyXFxuI292ZXJsYXlDb250YWluZXIgPiAqIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheUNvbnRhaW5lciA+IC5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5Q29udGFpbmVyID4gLmNvbnRhaW5lciA+IC5kaWFsb2cge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvb3JoYW5nZXItYmctY29sb3IpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyA+IC5yb3cge1xcclxcbiAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nID4gLnJvdyA+ICoge1xcclxcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyAudG9vbGJhckZpZWxkIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgLnNlcGFyYXRvciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogNHB4IDA7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VwYXJhdG9yLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZyAuYnV0dG9uUm93IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2cgOmxpbmsge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwYXNzd29yZE92ZXJsYXkgPiAuZGlhbG9nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Bhc3N3b3JkT3ZlcmxheSAudG9vbGJhckZpZWxkIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgPiAuZGlhbG9nIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiAqIHtcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcbmh0bWxbZGlyPVxcXCJsdHJcXFwiXSAjZG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheSAucm93ID4gKiB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5odG1sW2Rpcj1cXFwicnRsXFxcIl0gI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+ICoge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbiNkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5IC5yb3cgPiBzcGFuIHtcXHJcXG4gIHdpZHRoOiAxMjVweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLnJvdyA+IHAge1xcclxcbiAgbWF4LXdpZHRoOiAyMjVweDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuI2RvY3VtZW50UHJvcGVydGllc092ZXJsYXkgLmJ1dHRvblJvdyB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJCb3RoIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsZUlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jUERGQnVnIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDMycHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcbiNQREZCdWcgLmNvbnRyb2xzIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG59XFxyXFxuI1BERkJ1ZyAucGFuZWxzIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgdG9wOiAyN3B4O1xcclxcbn1cXHJcXG4jUERGQnVnIC5wYW5lbHMgPiBkaXYge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4jUERGQnVnIGJ1dHRvbi5hY3RpdmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5kZWJ1Z2dlclNob3dUZXh0IHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMCwgMSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAyNTUsIDEpO1xcclxcbn1cXHJcXG4uZGVidWdnZXJIaWRlVGV4dDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMjU1LCAyNTUsIDAsIDEpO1xcclxcbn1cXHJcXG4jUERGQnVnIC5zdGF0cyB7XFxyXFxuICBmb250LWZhbWlseTogY291cmllcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxufVxcclxcbiNQREZCdWcgLnN0YXRzIC50aXRsZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuI1BERkJ1ZyB0YWJsZSB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci12aXNpYmxlIC5jYW52YXNXcmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyNTUsIDEyOCwgMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLmNhbnZhc1dyYXBwZXIgY2FudmFzIHtcXHJcXG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXZpc2libGUgLnRleHRMYXllciA+IHNwYW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jdmlld2VyLnRleHRMYXllci1ob3ZlciAudGV4dExheWVyID4gc3Bhbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbiN2aWV3ZXIudGV4dExheWVyLXNoYWRvdyAudGV4dExheWVyID4gc3BhbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYWItdG8tcGFuLWdyYWIge1xcclxcbiAgY3Vyc29yOiB1cmwoXFxcImltYWdlcy9ncmFiLmN1clxcXCIpLCBtb3ZlICFpbXBvcnRhbnQ7XFxyXFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYiAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5ncmFiLXRvLXBhbi1ncmFiXFxyXFxuICAqOm5vdChpbnB1dCk6bm90KHRleHRhcmVhKTpub3QoYnV0dG9uKTpub3Qoc2VsZWN0KTpub3QoOmxpbmspIHtcXHJcXG4gIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uZ3JhYi10by1wYW4tZ3JhYjphY3RpdmUsXFxyXFxuLmdyYWItdG8tcGFuLWdyYWJiaW5nIHtcXHJcXG4gIGN1cnNvcjogdXJsKFxcXCJpbWFnZXMvZ3JhYmJpbmcuY3VyXFxcIiksIG1vdmUgIWltcG9ydGFudDtcXHJcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZyAhaW1wb3J0YW50O1xcclxcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDUwMDAwOyAvKiBzaG91bGQgYmUgaGlnaGVyIHRoYW4gYW55dGhpbmcgZWxzZSBpbiBQREYuanMhICovXFxyXFxufVxcclxcblxcclxcbkBwYWdlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW50Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICAvKiBHZW5lcmFsIHJ1bGVzIGZvciBwcmludGluZy4gKi9cXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBSdWxlcyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1velByaW50Q2FsbGJhY2suICovXFxyXFxuICAjc2lkZWJhckNvbnRhaW5lcixcXHJcXG4gICNzZWNvbmRhcnlUb29sYmFyLFxcclxcbiAgLnRvb2xiYXIsXFxyXFxuICAjbG9hZGluZ0JveCxcXHJcXG4gICNlcnJvcldyYXBwZXIsXFxyXFxuICAudGV4dExheWVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICN2aWV3ZXJDb250YWluZXIge1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtYWluQ29udGFpbmVyLFxcclxcbiAgI3ZpZXdlckNvbnRhaW5lcixcXHJcXG4gIC5wYWdlLFxcclxcbiAgLnBhZ2UgY2FudmFzIHtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2Uge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2VbZGF0YS1sb2FkZWRdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmlsZUlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFJ1bGVzIGZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgUERGLmpzIHByaW50aW5nICovXFxyXFxuICBib2R5W2RhdGEtcGRmanNwcmludGluZ10gI291dGVyQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGJvZHlbZGF0YS1wZGZqc3ByaW50aW5nXSAjcHJpbnRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gICNwcmludENvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC8qIHdyYXBwZXIgYXJvdW5kIChzY2FsZWQpIHByaW50IGNhbnZhcyBlbGVtZW50cyAqL1xcclxcbiAgI3ByaW50Q29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgLyogV2l0aG91dCB0aGUgZm9sbG93aW5nIG1heC1oZWlnaHQgZGVjbGFyYXRpb24sIENocm9taXVtIG1pZ2h0IGNyZWF0ZSBleHRyYVxcclxcbiAgICAgKiBibGFuayBwYWdlcywgZXZlbiB0aG91Z2ggaXQgc2hvdWxkbid0ISAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG5cXHJcXG4gICAgLyogSWYgd2UncmUgc21hbGxlciB0aGFuIHRoZSBwYWdlLCBjZW50ZXIgdGhlIGNhbnZhcyBob3Jpem9udGFsbHkgYW5kXFxyXFxuICAgICAqIHZlcnRpY2FsbHkgKi9cXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNwcmludENvbnRhaW5lciBjYW52YXMsXFxyXFxuICAjcHJpbnRDb250YWluZXIgaW1nIHtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udmlzaWJsZUxhcmdlVmlldyxcXHJcXG4udmlzaWJsZU1lZGl1bVZpZXcsXFxyXFxuLnZpc2libGVTbWFsbFZpZXcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcXHJcXG4gICNzaWRlYmFyQ29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1uYXJyb3ctYmctY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaHRtbFtkaXI9XFxcImx0clxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgaHRtbFtkaXI9XFxcInJ0bFxcXCJdICNvdXRlckNvbnRhaW5lci5zaWRlYmFyT3BlbiAjdmlld2VyQ29udGFpbmVyIHtcXHJcXG4gICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3LFxcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyxcXHJcXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgI291dGVyQ29udGFpbmVyIC52aXNpYmxlTGFyZ2VWaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcXHJcXG4gICAgZGlzcGxheTogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5oaWRkZW5TbWFsbFZpZXcsXFxyXFxuICAuaGlkZGVuU21hbGxWaWV3ICoge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnZpc2libGVTbWFsbFZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gIH1cXHJcXG4gIGh0bWxbZGlyPVxcXCJsdHJcXFwiXSAuZmluZGJhciB7XFxyXFxuICAgIGxlZnQ6IDM0cHg7XFxyXFxuICB9XFxyXFxuICBodG1sW2Rpcj1cXFwicnRsXFxcIl0gLmZpbmRiYXIge1xcclxcbiAgICByaWdodDogMzRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTM1cHgpIHtcXHJcXG4gICNzY2FsZVNlbGVjdENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vY3NzL3ZpZXdlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9zaWduZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0ZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9tdWx0aWxpbmVmaWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2xhYmVsZmllbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9jaGVja2JveGZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vcmFkaW9idXR0b24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9jb21ib2JveGZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vaW1hZ2VmaWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2RhdGVmaWVsZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL251bWJlcmZpZWxkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pbWFnZXMvaWMtdG9vbHRpcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi91bmRvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3JlZG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYWxpZ24tbGVmdC1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYWxpZ24tY2VudGVyLWJ0bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hbGlnbi1yaWdodC1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYWxpZ24tdG9wLWJ0bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9hbGlnbi1taWRkbGUtYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2FsaWduLWJvdHRvbS1idG4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vem9vbS1vdXQtYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3pvb20taW4tYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3pvb20tc2VsZWN0LWRvd24tMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9jb21wb25lbnQtYXJyb3ctYnRuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tbGVmdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLXJpZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL2Iuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LWhvdmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tY2VudGVyLWhvdmVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyA9IG5ldyBVUkwoXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQtaG92ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYi1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gPSBuZXcgVVJMKFwiLi8uLi9jc3MvaWNvbi9maWVsZC1kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fID0gbmV3IFVSTChcIi4vLi4vY3NzL2ljb24vYXN0ZXJpc2sucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLnBkZlZpZXdlciAucGFnZSB7XG4gIGJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cblxuLk91dGVyLUNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uTWFpbkNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDMyMHB4OyB9XG5cbiNUZW1wbGF0ZVBERlZpZXdlcixcbiNSZWFkZXJQREZWaWV3ZXIsXG4jUHJldmlld1JlYWRlclBERlZpZXdlciB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLlZpZXdlci1Db250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICBsZWZ0OiAzMDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaW5zZXQ6IDY0cHggMzAwcHggMHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHggLSA4MHB4KTsgfVxuXG4uVmlld2VyLUNvbnRhaW5lci5mdWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBpbnNldDogdW5zZXQ7IH1cblxuLlRlbXBsYXRlLVNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG5cbi5UZW1wbGF0ZS1IaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBUaGUgc2xpZGVyICovXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzOyB9XG5cbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJveC1zaGFkb3c6IC0xLjZweCAxLjJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzOyB9XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTsgfVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xuICBib3gtc2hhZG93OiA0cHggNC41cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDBhYWRhOyB9XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyLlJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIuUm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4udGl0LCAuRWRpdG9yLVRvb2xiYXItR3JvdXAuQ2VudGVyID4gc3BhbiwgLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3cgLlRpdGxlLCAuQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIsIC5UZW1wbGF0ZS1CdXR0b24sIC5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAjc2NhbGVTZWxlY3RDb250YWluZXIuVG9vbGJhci1MYWJlbCwgLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaSwgLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaTpudGgtY2hpbGQoMSkge1xuICBmb250LWZhbWlseTogTWFsZ3VuR290aGljO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsOyB9XG5cbi5NYXJnaW4tUmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IC5zZWxlY3QyLXNlbGVjdGlvbi0tc2luZ2xlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG5Aa2V5ZnJhbWVzIEhpZGVMZWZ0UGFuZWxCdG4ge1xuICBmcm9tIHtcbiAgICBsZWZ0OiAzMDBweDsgfVxuICB0byB7XG4gICAgbGVmdDogMHB4OyB9IH1cblxuQGtleWZyYW1lcyBTaG93TGVmdFBhbmVsQnRuIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogMHB4OyB9XG4gIHRvIHtcbiAgICBsZWZ0OiAzMDBweDsgfSB9XG5cbkBrZXlmcmFtZXMgSGlkZUxlZnRQYW5lbCB7XG4gIGZyb20ge1xuICAgIGxlZnQ6IDBweDsgfVxuICB0byB7XG4gICAgbGVmdDogLTMwMHB4OyB9IH1cblxuQGtleWZyYW1lcyBTaG93TGVmdFBhbmVsIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTMwMHB4OyB9XG4gIHRvIHtcbiAgICBsZWZ0OiAwcHg7IH0gfVxuXG4uRWRpdG9yLUNvbXBvbmVudCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gODBweCk7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQ6ICNjY2MgMXB4IHNvbGlkO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudC1BY3RpdmUtQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbGVmdDogMzAwcHg7XG4gIHRvcDogY2FsYyg1MCUgLSA2MHB4KTtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBwYWRkaW5nOiA4cHggMHB4IDhweCAyMHB4O1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuc2VsZWN0ZWQsXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGk6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjOTZiM2Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlNmYzOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaS5kaXNhYmxlZCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuMzsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRpdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uc2lnbi1maWVsZC1pY28ge1xuICBoZWlnaHQ6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5zaWduLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMThweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi50ZXh0LWZpZWxkLWljbyB7XG4gIGhlaWdodDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRleHQtZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm11bHRpbGluZS1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBtYXJnaW46IDAgMTNweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubGFiZWwtZmllbGQtaWNvIHtcbiAgaGVpZ2h0OiAyMXB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubGFiZWwtZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICB3aWR0aDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmNoZWNrLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5yYWRpby1maWVsZC1pY286YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xuICBtYXJnaW46IDAgMTNweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uY29tYm8tZmllbGQtaWNvIHtcbiAgaGVpZ2h0OiAxNnB4OyB9XG5cbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uY29tYm8tZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMjdweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmltYWdlLWZpZWxkLWljbzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5kYXRlLWZpZWxkLWljbyB7XG4gIGhlaWdodDogMjBweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmRhdGUtZmllbGQtaWNvOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIxcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjFweDsgfVxuXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLm51bWJlci1maWVsZC1pY28ge1xuICBoZWlnaHQ6IDE5cHg7IH1cblxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5udW1iZXItZmllbGQtaWNvOmJlZm9yZSB7XG4gIGhlaWdodDogMTlweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fX30pO1xuICBtYXJnaW46IDAgMTRweCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogMTlweCAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAxOXB4OyB9XG5cbi5oaWRlID4gLmZ0aGFuZGxlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4jRHJhZ0JveEdyb3VwID4gZyA+IHJlY3Qge1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHN0cm9rZTogcmVkOyB9XG5cbi5FZGl0b3ItVG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmM1ZjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwIHtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMDsgfVxuXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuTGVmdCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgd2lkdGg6IDI4MXB4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5DZW50ZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgxcHggLSA0ODBweCk7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLkNlbnRlciA+IHNwYW4ge1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2U5ZWFlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0ODBweDsgfVxuXG4uQXR0cmlidXRlLWtpbmQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLkF0dHJpYnV0ZS1raW5kIC5UaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLkVkaXRvci1BdHRyaWJ1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QzZDNkMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uRWRpdG9yLUF0dHJpYnV0ZS5UZXh0LUZpZWxkIHtcbiAgd2lkdGg6IDI5OHB4OyB9XG5cbi5FZGl0b3ItQXR0cmlidXRlLkJhc2UtRmllbGQsXG4uRWRpdG9yLUF0dHJpYnV0ZS5TaWduLUZpZWxkIHtcbiAgd2lkdGg6IDIwMHB4OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMgLkRpdmlkZXIge1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1OyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZS1XcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwOyB9XG5cbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3c6Zmlyc3QtY2hpbGQgLlRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1XcmFwIC5zZWxlY3QyLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkMWQxZDE7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xuICBib3JkZXI6IG5vbmU7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIgPiBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cblxuLkF0dHJpYnV0ZS1JbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5BdHRyaWJ1dGUtVGV4dGFyZWEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiBub25lO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IH1cblxuLlRpdGxlLVRvb2x0aXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gIHotaW5kZXg6IDA7IH1cblxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcCB7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzIC5iZzpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uQXR0cmlidXRlLUNvbnRlbnRzIC5pYy10b29sdGlwOmJlZm9yZSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19ffSk7IH1cblxuLlRpdGxlLVRvb2x0aXAtTGF5ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiAyNnB4O1xuICBwYWRkaW5nLXRvcDogOHB4OyB9XG5cbi5UaXRsZS1Ub29sdGlwLUxheWVyIC5pYy1wb2ludGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbiAgdG9wOiAwOyB9XG5cbi5UaXRsZS1Ub29sdGlwLUxheWVyIC5UaXRsZS1Ub29sdGlwLURlc2Mge1xuICB3aWR0aDogMTkxcHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5UaXRsZS1Ub29sdGlwOmhvdmVyIC5UaXRsZS1Ub29sdGlwLUxheWVyIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLkVkaXRvci1Cb3R0b20tQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3A6ICNjY2MgMXB4IHNvbGlkO1xuICB6LWluZGV4OiAxMDA7IH1cblxuLkVkaXRvci1Cb3R0b20tQ29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzNzNweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XG4gIHdpZHRoOiAxODRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNzVweDtcbiAgYm9yZGVyOiAwOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQ29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UcmFuc3BhcmVudCB7XG4gIHdpZHRoOiAxMThweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9vbGJhci1Cb3JkZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCAjNGQ2YzhmOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjQ2O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNGQ2YzhmOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9vbGJhci1CdG4tTWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDM0cHg7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwgPiBsaSA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkgPiBkaXYgPiBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAvKuyalOyGjOydmCDrhpLsnbTsnZgg67CYKDUwJSkg66eM7YG8IOychOuhnCDsnbTrj5kqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwgPiBsaTpudGgtY2hpbGQoNCkge1xuICBtaW4td2lkdGg6IDIycHg7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwgPiBsaTpudGgtY2hpbGQoOCkge1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuLlRvb2xiYXItQnV0dG9uLURpdmlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDZjOGY7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVW5kby1CdXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuXG5pLlVuZG8tQnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fX30pO1xuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG5pLlJlZG8tQnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fX30pO1xuICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUxlZnQtQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUxlZnQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUNlbnRlci1CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQ2VudGVyLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1SaWdodC1CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4td2lkdGg6IDI0cHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1SaWdodC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tVG9wLUJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Ub3AtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLU1pZGRsZS1CdXR0b24ge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tTWlkZGxlLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Cb3R0b20tQnV0dG9uIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUJvdHRvbS1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uWm9vbS1PdXQtQnV0dG9uLFxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLUluLUJ1dHRvbiB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5ab29tLU91dC1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uWm9vbS1Jbi1CdXR0b24gPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fX30pOyB9XG5cbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAjc2NhbGVTZWxlY3RDb250YWluZXIuVG9vbGJhci1MYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlOWVhZWQ7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0IC5Ub29sYmFyLUxhYmVsID4gYSB7XG4gIGNvbG9yOiAjZTllYWVkICFpbXBvcnRhbnQ7IH1cblxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0IC5Ub29sYmFyLUxhYmVsID4gYSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19ffSk7IH1cblxuLkJ1dHRvbi1JY29uLUNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7IH1cblxuLkFycm93LUJ0biB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG5cbi5SZXZlcnNlLUJ0biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWSg1MCUpOyB9XG5cbi5BcnJvdy1CdG46YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX199KTsgfVxuXG4uTGVmdC1QYW5lbC1CdG4tSGlkZS1BbmltYXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogSGlkZUxlZnRQYW5lbEJ0bjtcbiAgbGVmdDogMDsgfVxuXG4uTGVmdC1QYW5lbC1CdG4tU2hvdy1BbmltYXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogU2hvd0xlZnRQYW5lbEJ0bjtcbiAgbGVmdDogMzAwcHg7IH1cblxuLkxlZnQtUGFuZWwtSGlkZS1BbmltYXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogSGlkZUxlZnRQYW5lbDtcbiAgbGVmdDogLTMwMHB4OyB9XG5cbi5MZWZ0LVBhbmVsLVNob3ctQW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IFNob3dMZWZ0UGFuZWw7XG4gIGxlZnQ6IDBweDsgfVxuXG4uRWRpdG9yLVVzZXItQ29tcG9uZW50X0JveCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIge1xuICBwYWRkaW5nOiAxM3B4IDIwcHggMTNweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYjZjMmQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5Vc2VyLUNvbXBvbmVudC1MaXN0LUNvbmF0aW5lci5Oby1DaGlsZCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIuQ3VycmVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzNlNzVhZDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XG4gIHBhZGRpbmc6IDdweCAwIDdweCAxMXB4OyB9XG5cbi5Vc2VyLUNvbXBvbmVudC1MaXN0ID4gbGk6bnRoLWNoaWxkKDEpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDsgfVxuXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4OyB9XG5cbi5Db2xvci1CdXR0b24tV3JhcCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLkNvbG9yLUJ1dHRvbiB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogNXB4OyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbjpob3Zlcixcbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbi5TZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFhZGE7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUxlZnQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXIgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fX30pOyB9XG5cbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUJvbGQtQnV0dG9uID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdDpob3ZlciA+IGk6OmJlZm9yZSxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyOmhvdmVyID4gaTo6YmVmb3JlLFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLUNlbnRlci5TZWxlY3RlZCA+IGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19ffSk7IH1cblxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0OmhvdmVyID4gaTo6YmVmb3JlLFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0LlNlbGVjdGVkID4gaTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX199KTsgfVxuXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b246aG92ZXIgPiBpOjpiZWZvcmUsXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fX30pOyB9XG5cbi5GaWVsZC1EZWxldGUtQnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgei1pbmRleDogOTk5OTsgfVxuXG4uQXN0ZXJpc2stSWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTFweCAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMXB4OyB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Nhc3MvdGVtcGxhdGVNb2Quc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9wZGZSZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc2Fzcy9hbmltYXRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7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LGVBQWU7RUFDZixpQkFBaUI7RUFFakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUV6QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdWOztFQUVJLHlCQUF5QixFQUFBOztBQUc3Qjs7RUFFRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpREFBaUQsRUFBQTs7QUFFbkQ7RUFDRSxpREFBbUQsRUFBQTs7QUFFckQ7RUFDRSxpREFBa0QsRUFBQTs7QUFFcEQ7RUFDRSxpREFBbUMsRUFBQTs7QUFFckM7O0VBRUUsaURBQXVELEVBQUE7O0FBRXpEOztFQUVFLGlEQUF5RCxFQUFBOztBQUUzRDs7RUFFRSxpREFBd0QsRUFBQTs7QUFFMUQ7O0VBRUUsaURBQXlDLEVBQUE7O0FBSTNDO0VBQ0Usa0JBQWtCO0VBRWxCLDBEQUF1RDtFQUN2RCwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSwwREFBbUQ7RUFDbkQsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixXQUFXLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwicGRmUmVhZGVyLnNjc3NcXFwiO1xcclxcbkBpbXBvcnQgXFxcImFuaW1hdGlvbi5zY3NzXFxcIjtcXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHggLSA4MHB4KTtcXHJcXG4gIHRvcDogNjRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBcXHJcXG4gIGJvcmRlci1yaWdodDogI2NjYyAxcHggc29saWQ7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnQtQWN0aXZlLUJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjNweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbGVmdDogMzAwcHg7XFxyXFxuICB0b3A6IGNhbGMoNTAlIC0gNjBweCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luOiAgMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDIwcHg7XFxyXFxuICB3aWR0aDogMjQwcHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuc2VsZWN0ZWQsXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM5NmIzZDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlNmYzO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkuZGlzYWJsZWQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4udGl0IHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIFxcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5zaWduLWZpZWxkLWljbyB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4uc2lnbi1maWVsZC1pY286YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9zaWduZmllbGQuc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnRleHQtZmllbGQtaWNvIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi50ZXh0LWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHRmaWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAxM3B4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubXVsdGlsaW5lLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL211bHRpbGluZWZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5sYWJlbC1maWVsZC1pY28ge1xcclxcbiAgaGVpZ2h0OiAyMXB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmxhYmVsLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2xhYmVsZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTNweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmNoZWNrLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2NoZWNrYm94ZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTNweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLnJhZGlvLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3JhZGlvYnV0dG9uLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDEzcHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5jb21iby1maWVsZC1pY28ge1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmNvbWJvLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2NvbWJvYm94ZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTNweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIHdpZHRoOiAyN3B4O1xcclxcbn1cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmltYWdlLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2ltYWdlZmllbGQuc3ZnXFxcIik7XFxyXFxuICBtYXJnaW46IDAgMTNweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUNvbXBvbmVudF9Cb3ggZGl2IHVsID4gbGkgPiBzcGFuLmRhdGUtZmllbGQtaWNvIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Db21wb25lbnRfQm94IGRpdiB1bCA+IGxpID4gc3Bhbi5kYXRlLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2RhdGVmaWVsZC5zdmdcXFwiKTtcXHJcXG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjFweCAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIxcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubnVtYmVyLWZpZWxkLWljbyB7XFxyXFxuICBoZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcbi5FZGl0b3ItQ29tcG9uZW50X0JveCBkaXYgdWwgPiBsaSA+IHNwYW4ubnVtYmVyLWZpZWxkLWljbzpiZWZvcmUge1xcclxcbiAgaGVpZ2h0OiAxOXB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL251bWJlcmZpZWxkLnN2Z1xcXCIpO1xcclxcbiAgbWFyZ2luOiAwIDE0cHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxOXB4IDE5cHg7XFxyXFxuICBoZWlnaHQ6IDE5cHg7XFxyXFxuICB3aWR0aDogMTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUgPiAuZnRoYW5kbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI0RyYWdCb3hHcm91cCA+IGcgPiByZWN0IHtcXHJcXG4gIHN0cm9rZS13aWR0aDogMTtcXHJcXG4gIHN0cm9rZTogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVRvb2xiYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzVmO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XFxyXFxufVxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5MZWZ0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIHdpZHRoOiAyODFweDtcXHJcXG59XFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLkNlbnRlciB7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjgxcHggLSA0ODBweCk7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5DZW50ZXIgPiBzcGFuIHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2U5ZWFlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQ4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLWtpbmQge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBmbGV4LXN0YXJ0O1xcclxcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBmbGV4LXN0YXJ0O1xcclxcbiAgLW1zLWZsZXgtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgcGFkZGluZzogMCAxNHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLWtpbmQgLlRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogIzMyMzIzMjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1BdHRyaWJ1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDNkM2QzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQXR0cmlidXRlLlRleHQtRmllbGQge1xcclxcbiAgd2lkdGg6IDI5OHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLkVkaXRvci1BdHRyaWJ1dGUuQmFzZS1GaWVsZCxcXHJcXG4uRWRpdG9yLUF0dHJpYnV0ZS5TaWduLUZpZWxkIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59IFxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93Omxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuRGl2aWRlciB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93IC5UaXRsZS1XcmFwe1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdyAuVGl0bGUge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcclxcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgXFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7ICBcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93OmZpcnN0LWNoaWxkIC5UaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QxZDFkMTtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcCAuc2VsZWN0Mi1jb250YWluZXIgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXIge1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMtUm93LUNoZWNrQm94LUNvbnRhaW5lciA+IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1JbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1UZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDAgOHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwIHtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXHJcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgNnB4O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuaWMtdG9vbHRpcCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Db250ZW50cyAuYmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtQ29udGVudHMgLmljLXRvb2x0aXA6YmVmb3JlIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vY3NzL2ltYWdlcy9pYy10b29sdGlwLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwLUxheWVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogLTEwcHg7XFxyXFxuICB0b3A6IDI2cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGl0bGUtVG9vbHRpcC1MYXllciAuaWMtcG9pbnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMTRweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlRpdGxlLVRvb2x0aXAtTGF5ZXIgLlRpdGxlLVRvb2x0aXAtRGVzYyB7XFxyXFxuICB3aWR0aDogMTkxcHg7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5UaXRsZS1Ub29sdGlwOmhvdmVyIC5UaXRsZS1Ub29sdGlwLUxheWVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItQm90dG9tLUNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDsgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogI2NjYyAxcHggc29saWQ7XFxyXFxuICB6LWluZGV4OiAxMDA7IC8vMjAyMy0xMi0xNFxcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLUJvdHRvbS1Db250YWluZXIgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMzczcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uIHtcXHJcXG4gIEBleHRlbmQgJXRlbXBsYXRlLWZvbnQtaW5mbztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzQ3NDc7XFxyXFxuICB3aWR0aDogMTg0cHg7XFxyXFxuICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQ29uZmlybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRyYW5zcGFyZW50IHtcXHJcXG4gIHdpZHRoOiAxMThweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRvb2xiYXItQm9yZGVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM0ZDZjOGY7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVHJhbnNwYXJlbnQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWY0NjtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICM0ZDZjOGY7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVG9vbGJhci1CdG4tTWFyZ2luIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ID4gdWwgPiBsaSB7XFxyXFxuICBmbG9hdDogbGVmdDsgXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtaW4td2lkdGg6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkgPiBkaXYge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGkgPiBkaXYgPiBidXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAvKuyalOyGjOydmCDrhpLsnbTsnZgg67CYKDUwJSkg66eM7YG8IOychOuhnCDsnbTrj5kqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uRWRpdG9yLVRvb2xiYXItR3JvdXAuUmlnaHQgPiB1bCA+IGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBtaW4td2lkdGg6IDIycHg7XFxyXFxufVxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCA+IHVsID4gbGk6bnRoLWNoaWxkKDgpIHtcXHJcXG4gIG1pbi13aWR0aDogNzBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVG9vbGJhci1CdXR0b24tRGl2aWRlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBtaW4td2lkdGg6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ2YzhmO1xcclxcbiAgbWFyZ2luOiAwIDEwcHggMCAxMnB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLyrsmpTshozsnZgg64aS7J207J2YIOuwmCg1MCUpIOunjO2BvCDsnITroZwg7J2064+ZKi9cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5VbmRvLUJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuaS5VbmRvLUJ1dHRvbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi91bmRvLnBuZ1xcXCIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbmkuUmVkby1CdXR0b246OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vcmVkby5wbmdcXFwiKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLUxlZnQtQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1MZWZ0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYWxpZ24tbGVmdC1idG4ucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQ2VudGVyLUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tQ2VudGVyLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYWxpZ24tY2VudGVyLWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1SaWdodC1CdXR0b24ge1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWluLXdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLVJpZ2h0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYWxpZ24tcmlnaHQtYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLVRvcC1CdXR0b24ge1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLkFsaWduLVRvcC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FsaWduLXRvcC1idG4ucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tTWlkZGxlLUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uQWxpZ24tTWlkZGxlLUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vYWxpZ24tbWlkZGxlLWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Cb3R0b20tQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5BbGlnbi1Cb3R0b20tQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9hbGlnbi1ib3R0b20tYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tT3V0LUJ1dHRvbixcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tSW4tQnV0dG9ue1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tT3V0LUJ1dHRvbiA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vem9vbS1vdXQtYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlpvb20tSW4tQnV0dG9uID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLWluLWJ0bi5wbmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0ICNzY2FsZVNlbGVjdENvbnRhaW5lci5Ub29sYmFyLUxhYmVsIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgQGV4dGVuZCAldGVtcGxhdGUtZm9udC1pbmZvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNlOWVhZWQ7XFxyXFxufVxcclxcblxcclxcbi5FZGl0b3ItVG9vbGJhci1Hcm91cC5SaWdodCAuVG9vbGJhci1MYWJlbCA+IGEge1xcclxcbiAgY29sb3I6ICNlOWVhZWQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLkVkaXRvci1Ub29sYmFyLUdyb3VwLlJpZ2h0IC5Ub29sYmFyLUxhYmVsID4gYSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi96b29tLXNlbGVjdC1kb3duLTEucG5nXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5CdXR0b24tSWNvbi1Db21wb25lbnQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5BcnJvdy1CdG4ge1xcclxcbiAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAvKuyalOyGjOydmCDrhpLsnbTsnZgg67CYKDUwJSkg66eM7YG8IOychOuhnCDsnbTrj5kqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uUmV2ZXJzZS1CdG4ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGVZKDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5BcnJvdy1CdG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9jb21wb25lbnQtYXJyb3ctYnRuLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uTGVmdC1QYW5lbC1CdG4tSGlkZS1BbmltYXRpb24ge1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBIaWRlTGVmdFBhbmVsQnRuO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLkxlZnQtUGFuZWwtQnRuLVNob3ctQW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogU2hvd0xlZnRQYW5lbEJ0bjtcXHJcXG4gIGxlZnQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uTGVmdC1QYW5lbC1IaWRlLUFuaW1hdGlvbiB7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IEhpZGVMZWZ0UGFuZWw7XFxyXFxuICBsZWZ0OiAtMzAwcHg7XFxyXFxufVxcclxcbi5MZWZ0LVBhbmVsLVNob3ctQW5pbWF0aW9uIHtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogU2hvd0xlZnRQYW5lbDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLkVkaXRvci1Vc2VyLUNvbXBvbmVudF9Cb3gge1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMi4ycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNmMyZDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIuTm8tQ2hpbGQge1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbn1cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXIuQ3VycmVudCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCAjM2U3NWFkO1xcclxcbn1cXHJcXG5cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaSB7XFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAyLjJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2I2YzJkMDtcXHJcXG4gIHBhZGRpbmc6IDdweCAwIDdweCAxMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVXNlci1Db21wb25lbnQtTGlzdCA+IGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuICBAZXh0ZW5kICV0ZW1wbGF0ZS1mb250LWluZm87XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLlVzZXItQ29tcG9uZW50LUxpc3QgPiBsaTpsYXN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5Ub2dnbGUtQnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuXFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvbG9yLUJ1dHRvbi1XcmFwIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDIuMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDFkMWQxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5Db2xvci1CdXR0b24ge1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVG9nZ2xlLUJ1dHRvbjpob3ZlcixcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRvZ2dsZS1CdXR0b24uU2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhYWRhO1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdCxcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tTGVmdCA+IGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0ID4gaTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLXJpZ2h0LnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24gPiBpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2Iuc3ZnXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0OmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1MZWZ0LlNlbGVjdGVkID4gaTo6YmVmb3JlICB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vLi4vY3NzL2ljb24vdGV4dC1hbGlnbi1sZWZ0LWhvdmVyLnBuZ1xcXCIpO1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQWxpZ24tQ2VudGVyOmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1DZW50ZXIuU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi90ZXh0LWFsaWduLWNlbnRlci1ob3Zlci5wbmdcXFwiKTtcXHJcXG59XFxyXFxuLlRlbXBsYXRlLUJ1dHRvbi5UZXh0LUFsaWduLVJpZ2h0OmhvdmVyID4gaTo6YmVmb3JlLFxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1BbGlnbi1SaWdodC5TZWxlY3RlZCA+IGk6OmJlZm9yZSAge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL3RleHQtYWxpZ24tcmlnaHQtaG92ZXIucG5nXFxcIik7XFxyXFxufVxcclxcbi5UZW1wbGF0ZS1CdXR0b24uVGV4dC1Cb2xkLUJ1dHRvbjpob3ZlciA+IGk6OmJlZm9yZSxcXHJcXG4uVGVtcGxhdGUtQnV0dG9uLlRleHQtQm9sZC1CdXR0b24uU2VsZWN0ZWQgPiBpOjpiZWZvcmUgIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9iLWhvdmVyLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uRmllbGQtRGVsZXRlLUJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi8uLi9jc3MvaWNvbi9maWVsZC1kZWxldGUucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLkFzdGVyaXNrLUljb24ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLy4uL2Nzcy9pY29uL2FzdGVyaXNrLnBuZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMXB4IDEycHg7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICB3aWR0aDogMTFweDtcXHJcXG5cXHJcXG59XCIsXCJcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGRmVmlld2VyIC5wYWdlIHtcXHJcXG4gICAgYm9yZGVyOiA5cHggc29saWQgdHJhbnNwYXJlbnQ7O1xcclxcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5PdXRlci1Db250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5NYWluQ29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIG1pbi13aWR0aDogMzIwcHg7XFxyXFxufVxcclxcblxcclxcbiNUZW1wbGF0ZVBERlZpZXdlciwgXFxyXFxuI1JlYWRlclBERlZpZXdlciwgXFxyXFxuI1ByZXZpZXdSZWFkZXJQREZWaWV3ZXIge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLlZpZXdlci1Db250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDY0cHg7XFxyXFxuICBsZWZ0OiAzMDBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBpbnNldDogNjRweCAzMDBweCAwcHg7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4IC0gODBweCk7XFxyXFxufVxcclxcblxcclxcbi5WaWV3ZXItQ29udGFpbmVyLmZ1bGwge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgaW5zZXQ6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uVGVtcGxhdGUtU2hvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uVGVtcGxhdGUtSGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzNnB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxcclxcblxcclxcbi8qIFRoZSBzbGlkZXIgKi9cXHJcXG4uQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2QyZDJkMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyOmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgYm94LXNoYWRvdzogLTEuNnB4IDEuMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjZDJkMmQyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMGFhZGE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMgKyAuQXR0cmlidXRlLVN3aXRjaC1TbGlkZXIge1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDQuNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlcjpiZWZvcmUge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwYWFkYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuLkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyLlJvdW5kIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5BdHRyaWJ1dGUtU3dpdGNoLVNsaWRlci5Sb3VuZDpiZWZvcmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ldGVtcGxhdGUtZm9udC1pbmZvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBNYWxndW5Hb3RoaWM7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLk1hcmdpbi1SaWdodC01IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uU2NhbGUtU2VsZXRvci1Db250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5TY2FsZS1TZWxldG9yLUNvbnRhaW5lciAuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AaW1wb3J0ICAgICAnLi8uLi9jc3Mvdmlld2VyLmNzcyc7XFxyXFxuXCIsXCJcXHJcXG5Aa2V5ZnJhbWVzIEhpZGVMZWZ0UGFuZWxCdG4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGxlZnQ6IDMwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgU2hvd0xlZnRQYW5lbEJ0biB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBsZWZ0OiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBIaWRlTGVmdFBhbmVsIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IC0zMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBTaG93TGVmdFBhbmVsIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBsZWZ0OiAtMzAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ0ZW1wbGF0ZW1vZFNhc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZW1wbGF0ZU1vZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVtcGxhdGVNb2Quc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==