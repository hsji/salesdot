(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PDFCursorTools", [], factory);
	else if(typeof exports === 'object')
		exports["PDFCursorTools"] = factory();
	else
		root["PDFCursorTools"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!********************************************!*\
  !*** ./js/pdf_form/src/pdf.cursor.tool.js ***!
  \********************************************/
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
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGQ3Vyc29yVG9vbHMuYnVuZGxlLm5vbWluLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOztVQ1ZBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsS0FBSztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy9wZGYuY3Vyc29yLnRvb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQREZDdXJzb3JUb29sc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQREZDdXJzb3JUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQREZDdXJzb3JUb29sc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0ICogYXMgR3JhYlRvUGFuIGZyb20gJy4vZ3JhYi10by1wYW4uanMnO1xyXG5cclxuY29uc3QgaXNOb3RJRW9ySXNJRTEwcGx1cyA9ICFkb2N1bWVudC5kb2N1bWVudE1vZGUgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID4gOTtcclxuY29uc3QgY2hyb21lMiA9IHdpbmRvdy5jaHJvbWU7XHJcbmNvbnN0IGlzQ2hyb21lMTVPck9wZXJhMTVwbHVzID0gY2hyb21lMiAmJiAoY2hyb21lMi53ZWJzdG9yZSB8fCBjaHJvbWUyLmFwcCk7XHJcbmNvbnN0IGlzU2FmYXJpNnBsdXMgPSAvQXBwbGUvLnRlc3QobmF2aWdhdG9yLnZlbmRvcikgJiYgL1ZlcnNpb25cXC8oWzYtOV1cXGQqfFsxLTVdXFxkKykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5mdW5jdGlvbiBpc0xlZnRNb3VzZVJlbGVhc2VkKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKFwiYnV0dG9uc1wiIGluIGV2ZW50ICYmIGlzTm90SUVvcklzSUUxMHBsdXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhKGV2ZW50LmJ1dHRvbnMgJiAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0Nocm9tZTE1T3JPcGVyYTE1cGx1cyB8fCBpc1NhZmFyaTZwbHVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQud2hpY2ggPT09IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuICAgICAgICAgICAgICAgIFxyXG5sZXQgbWF0Y2hlc1NlbGVjdG9yO1xyXG5bXCJ3ZWJraXRNXCIsIFwibW96TVwiLCBcIm1zTVwiLCBcIm9NXCIsIFwibVwiXS5zb21lKGZ1bmN0aW9uIChwcmVmaXgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHByZWZpeCArIFwiYXRjaGVzXCI7XHJcblxyXG4gICAgICAgIGlmIChuYW1lIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWUgKz0gXCJTZWxlY3RvclwiO1xyXG5cclxuICAgICAgICBpZiAobmFtZSBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yO1xyXG59KTtcclxuXHJcbmNvbnN0IEN1cnNvclRvb2wgPSB7XHJcbiAgICAgICAgU0VMRUNUOiAwLFxyXG4gICAgICAgIEhBTkQ6IDEsXHJcbiAgICAgICAgWk9PTTogMlxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFBERkN1cnNvclRvb2xzIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBldmVudEJ1cyxcclxuICAgICAgICAgICAgICAgIGN1cnNvclRvb2xPbkxvYWQgPSAxXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzID0gZXZlbnRCdXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJlZm9yZVByZXNlbnRhdGlvbk1vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kVG9vbCA9IG5ldyBHcmFiVG9QYW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb29sKGN1cnNvclRvb2xPbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgYWN0aXZlVG9vbCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaFRvb2wodG9vbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQmVmb3JlUHJlc2VudGF0aW9uTW9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNhYmxlQWN0aXZlVG9vbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5TRUxFQ1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLkhBTkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRUb29sLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuWk9PTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuU0VMRUNUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBY3RpdmVUb29sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuSEFORDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWN0aXZlVG9vbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZFRvb2wuYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5aT09NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHN3aXRjaFRvb2w6IFwiJHt0b29sfVwiIGlzIGFuIHVuc3VwcG9ydGVkIHZhbHVlLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRvb2w7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmRpc3BhdGNoKFwiY3Vyc29ydG9vbGNoYW5nZWRcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2w6IHRoaXMuYWN0aXZlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuX29uKFwic3dpdGNoY3Vyc29ydG9vbFwiLCBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvb2woZXZ0LnRvb2wpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5fb24oXCJwcmVzZW50YXRpb25tb2RlY2hhbmdlZFwiLCBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnN3aXRjaEluUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c2x5QWN0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c2x5QWN0aXZlID0gdGhpcy5hY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb29sKEN1cnNvclRvb2wuU0VMRUNUKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJlZm9yZVByZXNlbnRhdGlvbk1vZGUgPSBwcmV2aW91c2x5QWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzbHlBY3RpdmUgPSB0aGlzLmFjdGl2ZUJlZm9yZVByZXNlbnRhdGlvbk1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVCZWZvcmVQcmVzZW50YXRpb25Nb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvb2wocHJldmlvdXNseUFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=