(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("previewmod", [], factory);
	else if(typeof exports === 'object')
		exports["previewmod"] = factory();
	else
		root["previewmod"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/pdf_form/flatpickr.min.js":
/*!**************************************!*\
  !*** ./js/pdf_form/flatpickr.min.js ***!
  \**************************************/
/***/ (function(module) {

/* flatpickr v4.6.9,, @license MIT */
!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var n=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},r=function(e){return!0===e?1:0};function l(e,t){var n;return function(){var a=this;clearTimeout(n),n=setTimeout((function(){return e.apply(a,arguments)}),t)}}var c=function(e){return e instanceof Array?e:[e]};function d(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function s(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function f(e,t){return t(e)?e:e.parentNode?f(e.parentNode,t):void 0}function m(e,t){var n=s("div","numInputWrapper"),a=s("input","numInput "+e),i=s("span","arrowUp"),o=s("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==t)for(var r in t)a.setAttribute(r,t[r]);return n.appendChild(a),n.appendChild(i),n.appendChild(o),n}function g(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(t){return e.target}}var p=function(){},h=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},v={D:p,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*r(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var a=parseInt(t),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+n.firstDayOfWeek),i},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:p,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:p,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},D={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[w.w(e,t,n)]},F:function(e,t,n){return h(w.n(e,t,n)-1,!1,t)},G:function(e,t,n){return o(w.h(e,t,n))},H:function(e){return o(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[r(e.getHours()>11)]},M:function(e,t){return h(e.getMonth(),!0,t)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},b=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,t,a){var i=a||r;return void 0===n.formatDate||c?t.split("").map((function(t,a,o){return w[t]&&"\\"!==o[a-1]?w[t](e,i,n):"\\"!==t?t:""})).join(""):n.formatDate(e,t,i)}},C=function(e){var t=e.config,n=void 0===t?a:t,o=e.l10n,r=void 0===o?i:o;return function(e,t,i,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=t||(n||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(n&&n.parseDate)l=n.parseDate(e,s);else{l=n&&n.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],g=0,p=0,h="";g<s.length;g++){var w=s[g],b="\\"===w,C="\\"===s[g-1]||b;if(D[w]&&!C){h+=D[w];var M=new RegExp(h).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:v[w],val:M[++p]})}else b||(h+=".");m.forEach((function(e){var t=e.fn,n=e.val;return l=t(l,n,c)||l}))}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===i&&l.setHours(0,0,0,0),l;n.errorHandler(new Error("Invalid date provided: "+d))}}};function M(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var y=864e5;function x(e){var t=e.defaultHour,n=e.defaultMinute,a=e.defaultSeconds;if(void 0!==e.minDate){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),r=e.minDate.getSeconds();t<i&&(t=i),t===i&&n<o&&(n=o),t===i&&n===o&&a<r&&(a=e.minDate.getSeconds())}if(void 0!==e.maxDate){var l=e.maxDate.getHours(),c=e.maxDate.getMinutes();(t=Math.min(t,l))===l&&(n=Math.min(c,n)),t===l&&n===c&&(a=e.maxDate.getSeconds())}return{hours:t,minutes:n,seconds:a}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(t){t&&Object.keys(t).forEach((function(n){return e[n]=t[n]}))},i=0,o=t;i<o.length;i++){var r=o[i];a(r)}return e});function E(p,v){var w={config:e(e({},a),T.defaultConfig),l10n:i};function E(e){return e.bind(w)}function k(){var e=w.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==w.calendarContainer&&(w.calendarContainer.style.visibility="hidden",w.calendarContainer.style.display="block"),void 0!==w.daysContainer){var t=(w.days.offsetWidth+1)*e.showMonths;w.daysContainer.style.width=t+"px",w.calendarContainer.style.width=t+(void 0!==w.weekWrapper?w.weekWrapper.offsetWidth:0)+"px",w.calendarContainer.style.removeProperty("visibility"),w.calendarContainer.style.removeProperty("display")}}))}function I(e){if(0===w.selectedDates.length){var t=void 0===w.config.minDate||M(new Date,w.config.minDate)>=0?new Date:new Date(w.config.minDate.getTime()),n=x(w.config);t.setHours(n.hours,n.minutes,n.seconds,t.getMilliseconds()),w.selectedDates=[t],w.latestSelectedDateObj=t}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=g(e),a=n;void 0!==w.amPM&&n===w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),d=parseInt(a.value,10),s=e.delta||(t?38===e.which?1:-1:0),u=d+c*s;if(void 0!==a.value&&2===a.value.length){var f=a===w.hourElement,m=a===w.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!w.amPM)),m&&j(void 0,-1,w.hourElement)):u>l&&(u=a===w.hourElement?u-l-r(!w.amPM):i,m&&j(void 0,1,w.hourElement)),w.amPM&&f&&(1===c?u+d===23:Math.abs(u-d)>c)&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]),a.value=o(u)}}(e);var a=w._input.value;S(),be(),w._input.value!==a&&w._debouncedChange()}function S(){if(void 0!==w.hourElement&&void 0!==w.minuteElement){var e,t,n=(parseInt(w.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(w.minuteElement.value,10)||0)%60,i=void 0!==w.secondElement?(parseInt(w.secondElement.value,10)||0)%60:0;void 0!==w.amPM&&(e=n,t=w.amPM.textContent,n=e%12+12*r(t===w.l10n.amPM[1]));var o=void 0!==w.config.minTime||w.config.minDate&&w.minDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.minDate,!0);if(void 0!==w.config.maxTime||w.config.maxDate&&w.maxDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.maxDate,!0)){var l=void 0!==w.config.maxTime?w.config.maxTime:w.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(o){var c=void 0!==w.config.minTime?w.config.minTime:w.config.minDate;(n=Math.max(n,c.getHours()))===c.getHours()&&a<c.getMinutes()&&(a=c.getMinutes()),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}O(n,a,i)}}function _(e){var t=e||w.latestSelectedDateObj;t&&O(t.getHours(),t.getMinutes(),t.getSeconds())}function O(e,t,n){void 0!==w.latestSelectedDateObj&&w.latestSelectedDateObj.setHours(e%24,t,n||0,0),w.hourElement&&w.minuteElement&&!w.isMobile&&(w.hourElement.value=o(w.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),w.minuteElement.value=o(t),void 0!==w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(e>=12)]),void 0!==w.secondElement&&(w.secondElement.value=o(n)))}function F(e){var t=g(e),n=parseInt(t.value)+(e.delta||0);(n/1e3>1||"Enter"===e.key&&!/[^\d]/.test(n.toString()))&&Q(n)}function A(e,t,n,a){return t instanceof Array?t.forEach((function(t){return A(e,t,n,a)})):e instanceof Array?e.forEach((function(e){return A(e,t,n,a)})):(e.addEventListener(t,n,a),void w._handlers.push({remove:function(){return e.removeEventListener(t,n)}}))}function N(){pe("onChange")}function P(e,t){var n=void 0!==e?w.parseDate(e):w.latestSelectedDateObj||(w.config.minDate&&w.config.minDate>w.now?w.config.minDate:w.config.maxDate&&w.config.maxDate<w.now?w.config.maxDate:w.now),a=w.currentYear,i=w.currentMonth;try{void 0!==n&&(w.currentYear=n.getFullYear(),w.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,w.config.errorHandler(e)}t&&w.currentYear!==a&&(pe("onYearChange"),K()),!t||w.currentYear===a&&w.currentMonth===i||pe("onMonthChange"),w.redraw()}function Y(e){var t=g(e);~t.className.indexOf("arrow")&&j(e,t.classList.contains("arrowUp")?1:-1)}function j(e,t,n){var a=e&&g(e),i=n||a&&a.parentNode&&a.parentNode.firstChild,o=he("increment");o.delta=t,i&&i.dispatchEvent(o)}function H(e,t,n,a){var i=X(t,!0),o=s("span","flatpickr-day "+e,t.getDate().toString());return o.dateObj=t,o.$i=a,o.setAttribute("aria-label",w.formatDate(t,w.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===M(t,w.now)&&(w.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,ve(t)&&(o.classList.add("selected"),w.selectedDateElem=o,"range"===w.config.mode&&(d(o,"startRange",w.selectedDates[0]&&0===M(t,w.selectedDates[0],!0)),d(o,"endRange",w.selectedDates[1]&&0===M(t,w.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===w.config.mode&&function(e){return!("range"!==w.config.mode||w.selectedDates.length<2)&&(M(e,w.selectedDates[0])>=0&&M(e,w.selectedDates[1])<=0)}(t)&&!ve(t)&&o.classList.add("inRange"),w.weekNumbers&&1===w.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&w.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+w.config.getWeek(t)+"</span>"),pe("onDayCreate",o),o}function L(e){e.focus(),"range"===w.config.mode&&ae(e)}function W(e){for(var t=e>0?0:w.config.showMonths-1,n=e>0?w.config.showMonths:-1,a=t;a!=n;a+=e)for(var i=w.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&X(c.dateObj))return c}}function R(e,t){var n=ee(document.activeElement||document.body),a=void 0!==e?e:n?document.activeElement:void 0!==w.selectedDateElem&&ee(w.selectedDateElem)?w.selectedDateElem:void 0!==w.todayDateElem&&ee(w.todayDateElem)?w.todayDateElem:W(t>0?1:-1);void 0===a?w._input.focus():n?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():w.currentMonth,a=t>0?w.config.showMonths:-1,i=t>0?1:-1,o=n-w.currentMonth;o!=a;o+=i)for(var r=w.daysContainer.children[o],l=n-w.currentMonth===o?e.$i+t:t<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&X(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return L(s)}w.changeMonth(i),R(W(i),0)}(a,t):L(a)}function B(e,t){for(var n=(new Date(e,t,1).getDay()-w.l10n.firstDayOfWeek+7)%7,a=w.utils.getDaysInMonth((t-1+12)%12,e),i=w.utils.getDaysInMonth(t,e),o=window.document.createDocumentFragment(),r=w.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",d=a+1-n,u=0;d<=a;d++,u++)o.appendChild(H(l,new Date(e,t-1,d),d,u));for(d=1;d<=i;d++,u++)o.appendChild(H("",new Date(e,t,d),d,u));for(var f=i+1;f<=42-n&&(1===w.config.showMonths||u%7!=0);f++,u++)o.appendChild(H(c,new Date(e,t+1,f%i),f,u));var m=s("div","dayContainer");return m.appendChild(o),m}function J(){if(void 0!==w.daysContainer){u(w.daysContainer),w.weekNumbers&&u(w.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<w.config.showMonths;t++){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),e.appendChild(B(n.getFullYear(),n.getMonth()))}w.daysContainer.appendChild(e),w.days=w.daysContainer.firstChild,"range"===w.config.mode&&1===w.selectedDates.length&&ae()}}function K(){if(!(w.config.showMonths>1||"dropdown"!==w.config.monthSelectorType)){var e=function(e){return!(void 0!==w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&e<w.config.minDate.getMonth())&&!(void 0!==w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()&&e>w.config.maxDate.getMonth())};w.monthsDropdownContainer.tabIndex=-1,w.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=s("option","flatpickr-monthDropdown-month");n.value=new Date(w.currentYear,t).getMonth().toString(),n.textContent=h(t,w.config.shorthandCurrentMonth,w.l10n),n.tabIndex=-1,w.currentMonth===t&&(n.selected=!0),w.monthsDropdownContainer.appendChild(n)}}}function U(){var e,t=s("div","flatpickr-month"),n=window.document.createDocumentFragment();w.config.showMonths>1||"static"===w.config.monthSelectorType?e=s("span","cur-month"):(w.monthsDropdownContainer=s("select","flatpickr-monthDropdown-months"),w.monthsDropdownContainer.setAttribute("aria-label",w.l10n.monthAriaLabel),A(w.monthsDropdownContainer,"change",(function(e){var t=g(e),n=parseInt(t.value,10);w.changeMonth(n-w.currentMonth),pe("onMonthChange")})),K(),e=w.monthsDropdownContainer);var a=m("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",w.l10n.yearAriaLabel),w.config.minDate&&i.setAttribute("min",w.config.minDate.getFullYear().toString()),w.config.maxDate&&(i.setAttribute("max",w.config.maxDate.getFullYear().toString()),i.disabled=!!w.config.minDate&&w.config.minDate.getFullYear()===w.config.maxDate.getFullYear());var o=s("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),n.appendChild(o),t.appendChild(n),{container:t,yearElement:i,monthElement:e}}function q(){u(w.monthNav),w.monthNav.appendChild(w.prevMonthNav),w.config.showMonths&&(w.yearElements=[],w.monthElements=[]);for(var e=w.config.showMonths;e--;){var t=U();w.yearElements.push(t.yearElement),w.monthElements.push(t.monthElement),w.monthNav.appendChild(t.container)}w.monthNav.appendChild(w.nextMonthNav)}function $(){w.weekdayContainer?u(w.weekdayContainer):w.weekdayContainer=s("div","flatpickr-weekdays");for(var e=w.config.showMonths;e--;){var t=s("div","flatpickr-weekdaycontainer");w.weekdayContainer.appendChild(t)}return z(),w.weekdayContainer}function z(){if(w.weekdayContainer){var e=w.l10n.firstDayOfWeek,n=t(w.l10n.weekdays.shorthand);e>0&&e<n.length&&(n=t(n.splice(e,n.length),n.splice(0,e)));for(var a=w.config.showMonths;a--;)w.weekdayContainer.children[a].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+n.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function G(e,t){void 0===t&&(t=!0);var n=t?e:e-w.currentMonth;n<0&&!0===w._hidePrevMonthArrow||n>0&&!0===w._hideNextMonthArrow||(w.currentMonth+=n,(w.currentMonth<0||w.currentMonth>11)&&(w.currentYear+=w.currentMonth>11?1:-1,w.currentMonth=(w.currentMonth+12)%12,pe("onYearChange"),K()),J(),pe("onMonthChange"),De())}function V(e){return!(!w.config.appendTo||!w.config.appendTo.contains(e))||w.calendarContainer.contains(e)}function Z(e){if(w.isOpen&&!w.config.inline){var t=g(e),n=V(t),a=t===w.input||t===w.altInput||w.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(w.input)||~e.path.indexOf(w.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!V(e.relatedTarget):!a&&!n&&!V(e.relatedTarget),o=!w.config.ignoredFocusElements.some((function(e){return e.contains(t)}));i&&o&&(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement&&""!==w.input.value&&void 0!==w.input.value&&I(),w.close(),w.config&&"range"===w.config.mode&&1===w.selectedDates.length&&(w.clear(!1),w.redraw()))}}function Q(e){if(!(!e||w.config.minDate&&e<w.config.minDate.getFullYear()||w.config.maxDate&&e>w.config.maxDate.getFullYear())){var t=e,n=w.currentYear!==t;w.currentYear=t||w.currentYear,w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth=Math.min(w.config.maxDate.getMonth(),w.currentMonth):w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&(w.currentMonth=Math.max(w.config.minDate.getMonth(),w.currentMonth)),n&&(w.redraw(),pe("onYearChange"),K())}}function X(e,t){var n;void 0===t&&(t=!0);var a=w.parseDate(e,void 0,t);if(w.config.minDate&&a&&M(a,w.config.minDate,void 0!==t?t:!w.minDateHasTime)<0||w.config.maxDate&&a&&M(a,w.config.maxDate,void 0!==t?t:!w.maxDateHasTime)>0)return!1;if(!w.config.enable&&0===w.config.disable.length)return!0;if(void 0===a)return!1;for(var i=!!w.config.enable,o=null!==(n=w.config.enable)&&void 0!==n?n:w.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l){var c=w.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return!i}function ee(e){return void 0!==w.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&w.daysContainer.contains(e))}function te(e){!(e.target===w._input)||!(w.selectedDates.length>0||w._input.value.length>0)||e.relatedTarget&&V(e.relatedTarget)||w.setDate(w._input.value,!0,e.target===w.altInput?w.config.altFormat:w.config.dateFormat)}function ne(e){var t=g(e),n=w.config.wrap?p.contains(t):t===w._input,a=w.config.allowInput,i=w.isOpen&&(!a||!n),o=w.config.inline&&n&&!a;if(13===e.keyCode&&n){if(a)return w.setDate(w._input.value,!0,t===w.altInput?w.config.altFormat:w.config.dateFormat),t.blur();w.open()}else if(V(t)||i||o){var r=!!w.timeContainer&&w.timeContainer.contains(t);switch(e.keyCode){case 13:r?(e.preventDefault(),I(),se()):ue(e);break;case 27:e.preventDefault(),se();break;case 8:case 46:n&&!w.config.allowInput&&(e.preventDefault(),w.clear());break;case 37:case 39:if(r||n)w.hourElement&&w.hourElement.focus();else if(e.preventDefault(),void 0!==w.daysContainer&&(!1===a||document.activeElement&&ee(document.activeElement))){var l=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),G(l),R(W(1),0)):R(void 0,l)}break;case 38:case 40:e.preventDefault();var c=40===e.keyCode?1:-1;w.daysContainer&&void 0!==t.$i||t===w.input||t===w.altInput?e.ctrlKey?(e.stopPropagation(),Q(w.currentYear-c),R(W(1),0)):r||R(void 0,7*c):t===w.currentYearElement?Q(w.currentYear-c):w.config.enableTime&&(!r&&w.hourElement&&w.hourElement.focus(),I(e),w._debouncedChange());break;case 9:if(r){var d=[w.hourElement,w.minuteElement,w.secondElement,w.amPM].concat(w.pluginElements).filter((function(e){return e})),s=d.indexOf(t);if(-1!==s){var u=d[s+(e.shiftKey?-1:1)];e.preventDefault(),(u||w._input).focus()}}else!w.config.noCalendar&&w.daysContainer&&w.daysContainer.contains(t)&&e.shiftKey&&(e.preventDefault(),w._input.focus())}}if(void 0!==w.amPM&&t===w.amPM)switch(e.key){case w.l10n.amPM[0].charAt(0):case w.l10n.amPM[0].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[0],S(),be();break;case w.l10n.amPM[1].charAt(0):case w.l10n.amPM[1].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[1],S(),be()}(n||V(t))&&pe("onKeyDown",e)}function ae(e){if(1===w.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():w.days.firstElementChild.dateObj.getTime(),n=w.parseDate(w.selectedDates[0],void 0,!0).getTime(),a=Math.min(t,w.selectedDates[0].getTime()),i=Math.max(t,w.selectedDates[0].getTime()),o=!1,r=0,l=0,c=a;c<i;c+=y)X(new Date(c),!0)||(o=o||c>a&&c<i,c<n&&(!r||c>r)?r=c:c>n&&(!l||c<l)&&(l=c));for(var d=0;d<w.config.showMonths;d++)for(var s=w.daysContainer.children[d],u=function(a,i){var c,d,u,f=s.children[a],m=f.dateObj.getTime(),g=r>0&&m<r||l>0&&m>l;return g?(f.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){f.classList.remove(e)})),"continue"):o&&!g?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){f.classList.remove(e)})),void(void 0!==e&&(e.classList.add(t<=w.selectedDates[0].getTime()?"startRange":"endRange"),n<t&&m===n?f.classList.add("startRange"):n>t&&m===n&&f.classList.add("endRange"),m>=r&&(0===l||m<=l)&&(d=n,u=t,(c=m)>Math.min(d,u)&&c<Math.max(d,u))&&f.classList.add("inRange"))))},f=0,m=s.children.length;f<m;f++)u(f)}}function ie(){!w.isOpen||w.config.static||w.config.inline||ce()}function oe(e){return function(t){var n=w.config["_"+e+"Date"]=w.parseDate(t,w.config.dateFormat),a=w.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(w["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),w.selectedDates&&(w.selectedDates=w.selectedDates.filter((function(e){return X(e)})),w.selectedDates.length||"min"!==e||_(n),be()),w.daysContainer&&(de(),void 0!==n?w.currentYearElement[e]=n.getFullYear().toString():w.currentYearElement.removeAttribute(e),w.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function re(){return w.config.wrap?p.querySelector("[data-input]"):p}function le(){"object"!=typeof w.config.locale&&void 0===T.l10ns[w.config.locale]&&w.config.errorHandler(new Error("flatpickr: invalid locale "+w.config.locale)),w.l10n=e(e({},T.l10ns.default),"object"==typeof w.config.locale?w.config.locale:"default"!==w.config.locale?T.l10ns[w.config.locale]:void 0),D.K="("+w.l10n.amPM[0]+"|"+w.l10n.amPM[1]+"|"+w.l10n.amPM[0].toLowerCase()+"|"+w.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},v),JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===T.defaultConfig.time_24hr&&(w.config.time_24hr=w.l10n.time_24hr),w.formatDate=b(w),w.parseDate=C({config:w.config,l10n:w.l10n})}function ce(e){if("function"!=typeof w.config.position){if(void 0!==w.calendarContainer){pe("onPreCalendarPosition");var t=e||w._positionElement,n=Array.prototype.reduce.call(w.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),a=w.calendarContainer.offsetWidth,i=w.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=t.getBoundingClientRect(),c=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&c<n&&l.top>n,u=window.pageYOffset+l.top+(s?-n-2:t.offsetHeight+2);if(d(w.calendarContainer,"arrowTop",!s),d(w.calendarContainer,"arrowBottom",s),!w.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),d(w.calendarContainer,"arrowLeft",!m&&!g),d(w.calendarContainer,"arrowCenter",m),d(w.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(d(w.calendarContainer,"rightMost",h),!w.config.static)if(w.calendarContainer.style.top=u+"px",h)if(v){var D=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];try{n.cssRules}catch(e){continue}e=n;break}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a}();if(void 0===D)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=D.cssRules.length,y="{left:"+l.left+"px;right:auto;}";d(w.calendarContainer,"rightMost",!1),d(w.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),w.calendarContainer.style.left=C+"px",w.calendarContainer.style.right="auto"}else w.calendarContainer.style.left="auto",w.calendarContainer.style.right=p+"px";else w.calendarContainer.style.left=f+"px",w.calendarContainer.style.right="auto"}}}else w.config.position(w,e)}function de(){w.config.noCalendar||w.isMobile||(K(),De(),J())}function se(){w._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(w.close,0):w.close()}function ue(e){e.preventDefault(),e.stopPropagation();var t=f(g(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,a=w.latestSelectedDateObj=new Date(n.dateObj.getTime()),i=(a.getMonth()<w.currentMonth||a.getMonth()>w.currentMonth+w.config.showMonths-1)&&"range"!==w.config.mode;if(w.selectedDateElem=n,"single"===w.config.mode)w.selectedDates=[a];else if("multiple"===w.config.mode){var o=ve(a);o?w.selectedDates.splice(parseInt(o),1):w.selectedDates.push(a)}else"range"===w.config.mode&&(2===w.selectedDates.length&&w.clear(!1,!1),w.latestSelectedDateObj=a,w.selectedDates.push(a),0!==M(a,w.selectedDates[0],!0)&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(S(),i){var r=w.currentYear!==a.getFullYear();w.currentYear=a.getFullYear(),w.currentMonth=a.getMonth(),r&&(pe("onYearChange"),K()),pe("onMonthChange")}if(De(),J(),be(),i||"range"===w.config.mode||1!==w.config.showMonths?void 0!==w.selectedDateElem&&void 0===w.hourElement&&w.selectedDateElem&&w.selectedDateElem.focus():L(n),void 0!==w.hourElement&&void 0!==w.hourElement&&w.hourElement.focus(),w.config.closeOnSelect){var l="single"===w.config.mode&&!w.config.enableTime,c="range"===w.config.mode&&2===w.selectedDates.length&&!w.config.enableTime;(l||c)&&se()}N()}}w.parseDate=C({config:w.config,l10n:w.l10n}),w._handlers=[],w.pluginElements=[],w.loadedPlugins=[],w._bind=A,w._setHoursFromDate=_,w._positionCalendar=ce,w.changeMonth=G,w.changeYear=Q,w.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);w.input.value="",void 0!==w.altInput&&(w.altInput.value="");void 0!==w.mobileInput&&(w.mobileInput.value="");w.selectedDates=[],w.latestSelectedDateObj=void 0,!0===t&&(w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth());if(!0===w.config.enableTime){var n=x(w.config),a=n.hours,i=n.minutes,o=n.seconds;O(a,i,o)}w.redraw(),e&&pe("onChange")},w.close=function(){w.isOpen=!1,w.isMobile||(void 0!==w.calendarContainer&&w.calendarContainer.classList.remove("open"),void 0!==w._input&&w._input.classList.remove("active"));pe("onClose")},w._createElement=s,w.destroy=function(){void 0!==w.config&&pe("onDestroy");for(var e=w._handlers.length;e--;)w._handlers[e].remove();if(w._handlers=[],w.mobileInput)w.mobileInput.parentNode&&w.mobileInput.parentNode.removeChild(w.mobileInput),w.mobileInput=void 0;else if(w.calendarContainer&&w.calendarContainer.parentNode)if(w.config.static&&w.calendarContainer.parentNode){var t=w.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else w.calendarContainer.parentNode.removeChild(w.calendarContainer);w.altInput&&(w.input.type="text",w.altInput.parentNode&&w.altInput.parentNode.removeChild(w.altInput),delete w.altInput);w.input&&(w.input.type=w.input._type,w.input.classList.remove("flatpickr-input"),w.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete w[e]}catch(e){}}))},w.isEnabled=X,w.jumpToDate=P,w.open=function(e,t){void 0===t&&(t=w._positionElement);if(!0===w.isMobile){if(e){e.preventDefault();var n=g(e);n&&n.blur()}return void 0!==w.mobileInput&&(w.mobileInput.focus(),w.mobileInput.click()),void pe("onOpen")}if(w._input.disabled||w.config.inline)return;var a=w.isOpen;w.isOpen=!0,a||(w.calendarContainer.classList.add("open"),w._input.classList.add("active"),pe("onOpen"),ce(t));!0===w.config.enableTime&&!0===w.config.noCalendar&&(!1!==w.config.allowInput||void 0!==e&&w.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return w.hourElement.select()}),50))},w.redraw=de,w.set=function(e,t){if(null!==e&&"object"==typeof e)for(var a in Object.assign(w.config,e),e)void 0!==fe[a]&&fe[a].forEach((function(e){return e()}));else w.config[e]=t,void 0!==fe[e]?fe[e].forEach((function(e){return e()})):n.indexOf(e)>-1&&(w.config[e]=c(t));w.redraw(),be(!0)},w.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=w.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return w.clear(t);me(e,n),w.latestSelectedDateObj=w.selectedDates[w.selectedDates.length-1],w.redraw(),P(void 0,t),_(),0===w.selectedDates.length&&w.clear(!1);be(t),t&&pe("onChange")},w.toggle=function(e){if(!0===w.isOpen)return w.close();w.open(e)};var fe={locale:[le,z],showMonths:[q,k,$],minDate:[P],maxDate:[P],clickOpens:[function(){!0===w.config.clickOpens?(A(w._input,"focus",w.open),A(w._input,"click",w.open)):(w._input.removeEventListener("focus",w.open),w._input.removeEventListener("click",w.open))}]};function me(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return w.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[w.parseDate(e,t)];else if("string"==typeof e)switch(w.config.mode){case"single":case"time":n=[w.parseDate(e,t)];break;case"multiple":n=e.split(w.config.conjunction).map((function(e){return w.parseDate(e,t)}));break;case"range":n=e.split(w.l10n.rangeSeparator).map((function(e){return w.parseDate(e,t)}))}else w.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));w.selectedDates=w.config.allowInvalidPreload?n:n.filter((function(e){return e instanceof Date&&X(e,!1)})),"range"===w.config.mode&&w.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function ge(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?w.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:w.parseDate(e.from,void 0),to:w.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function pe(e,t){if(void 0!==w.config){var n=w.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](w.selectedDates,w.input.value,w,t);"onChange"===e&&(w.input.dispatchEvent(he("change")),w.input.dispatchEvent(he("input")))}}function he(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ve(e){for(var t=0;t<w.selectedDates.length;t++)if(0===M(w.selectedDates[t],e))return""+t;return!1}function De(){w.config.noCalendar||w.isMobile||!w.monthNav||(w.yearElements.forEach((function(e,t){var n=new Date(w.currentYear,w.currentMonth,1);n.setMonth(w.currentMonth+t),w.config.showMonths>1||"static"===w.config.monthSelectorType?w.monthElements[t].textContent=h(n.getMonth(),w.config.shorthandCurrentMonth,w.l10n)+" ":w.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),w._hidePrevMonthArrow=void 0!==w.config.minDate&&(w.currentYear===w.config.minDate.getFullYear()?w.currentMonth<=w.config.minDate.getMonth():w.currentYear<w.config.minDate.getFullYear()),w._hideNextMonthArrow=void 0!==w.config.maxDate&&(w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth+1>w.config.maxDate.getMonth():w.currentYear>w.config.maxDate.getFullYear()))}function we(e){return w.selectedDates.map((function(t){return w.formatDate(t,e)})).filter((function(e,t,n){return"range"!==w.config.mode||w.config.enableTime||n.indexOf(e)===t})).join("range"!==w.config.mode?w.config.conjunction:w.l10n.rangeSeparator)}function be(e){void 0===e&&(e=!0),void 0!==w.mobileInput&&w.mobileFormatStr&&(w.mobileInput.value=void 0!==w.latestSelectedDateObj?w.formatDate(w.latestSelectedDateObj,w.mobileFormatStr):""),w.input.value=we(w.config.dateFormat),void 0!==w.altInput&&(w.altInput.value=we(w.config.altFormat)),!1!==e&&pe("onValueUpdate")}function Ce(e){var t=g(e),n=w.prevMonthNav.contains(t),a=w.nextMonthNav.contains(t);n||a?G(n?-1:1):w.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?w.changeYear(w.currentYear+1):t.classList.contains("arrowDown")&&w.changeYear(w.currentYear-1)}return function(){w.element=w.input=p,w.isOpen=!1,function(){var t=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(p.dataset||{}))),v),o={};w.config.parseDate=i.parseDate,w.config.formatDate=i.formatDate,Object.defineProperty(w.config,"enable",{get:function(){return w.config._enable},set:function(e){w.config._enable=ge(e)}}),Object.defineProperty(w.config,"disable",{get:function(){return w.config._disable},set:function(e){w.config._disable=ge(e)}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=T.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var d=T.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):d+" h:i"+(i.enableSeconds?":S":"")+" K"}Object.defineProperty(w.config,"minDate",{get:function(){return w.config._minDate},set:oe("min")}),Object.defineProperty(w.config,"maxDate",{get:function(){return w.config._maxDate},set:oe("max")});var s=function(e){return function(t){w.config["min"===e?"_minTime":"_maxTime"]=w.parseDate(t,"H:i:S")}};Object.defineProperty(w.config,"minTime",{get:function(){return w.config._minTime},set:s("min")}),Object.defineProperty(w.config,"maxTime",{get:function(){return w.config._maxTime},set:s("max")}),"time"===i.mode&&(w.config.noCalendar=!0,w.config.enableTime=!0);Object.assign(w.config,o,i);for(var u=0;u<t.length;u++)w.config[t[u]]=!0===w.config[t[u]]||"true"===w.config[t[u]];n.filter((function(e){return void 0!==w.config[e]})).forEach((function(e){w.config[e]=c(w.config[e]||[]).map(E)})),w.isMobile=!w.config.disableMobile&&!w.config.inline&&"single"===w.config.mode&&!w.config.disable.length&&!w.config.enable&&!w.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<w.config.plugins.length;u++){var f=w.config.plugins[u](w)||{};for(var m in f)n.indexOf(m)>-1?w.config[m]=c(f[m]).map(E).concat(w.config[m]):void 0===i[m]&&(w.config[m]=f[m])}i.altInputClass||(w.config.altInputClass=re().className+" "+w.config.altInputClass);pe("onParseConfig")}(),le(),function(){if(w.input=re(),!w.input)return void w.config.errorHandler(new Error("Invalid input element specified"));w.input._type=w.input.type,w.input.type="text",w.input.classList.add("flatpickr-input"),w._input=w.input,w.config.altInput&&(w.altInput=s(w.input.nodeName,w.config.altInputClass),w._input=w.altInput,w.altInput.placeholder=w.input.placeholder,w.altInput.disabled=w.input.disabled,w.altInput.required=w.input.required,w.altInput.tabIndex=w.input.tabIndex,w.altInput.type="text",w.input.setAttribute("type","hidden"),!w.config.static&&w.input.parentNode&&w.input.parentNode.insertBefore(w.altInput,w.input.nextSibling));w.config.allowInput||w._input.setAttribute("readonly","readonly");w._positionElement=w.config.positionElement||w._input}(),function(){w.selectedDates=[],w.now=w.parseDate(w.config.now)||new Date;var e=w.config.defaultDate||("INPUT"!==w.input.nodeName&&"TEXTAREA"!==w.input.nodeName||!w.input.placeholder||w.input.value!==w.input.placeholder?w.input.value:null);e&&me(e,w.config.dateFormat);w._initialDate=w.selectedDates.length>0?w.selectedDates[0]:w.config.minDate&&w.config.minDate.getTime()>w.now.getTime()?w.config.minDate:w.config.maxDate&&w.config.maxDate.getTime()<w.now.getTime()?w.config.maxDate:w.now,w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth(),w.selectedDates.length>0&&(w.latestSelectedDateObj=w.selectedDates[0]);void 0!==w.config.minTime&&(w.config.minTime=w.parseDate(w.config.minTime,"H:i"));void 0!==w.config.maxTime&&(w.config.maxTime=w.parseDate(w.config.maxTime,"H:i"));w.minDateHasTime=!!w.config.minDate&&(w.config.minDate.getHours()>0||w.config.minDate.getMinutes()>0||w.config.minDate.getSeconds()>0),w.maxDateHasTime=!!w.config.maxDate&&(w.config.maxDate.getHours()>0||w.config.maxDate.getMinutes()>0||w.config.maxDate.getSeconds()>0)}(),w.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=w.currentMonth),void 0===t&&(t=w.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:w.l10n.daysInMonth[e]}},w.isMobile||function(){var e=window.document.createDocumentFragment();if(w.calendarContainer=s("div","flatpickr-calendar"),w.calendarContainer.tabIndex=-1,!w.config.noCalendar){if(e.appendChild((w.monthNav=s("div","flatpickr-months"),w.yearElements=[],w.monthElements=[],w.prevMonthNav=s("span","flatpickr-prev-month"),w.prevMonthNav.innerHTML=w.config.prevArrow,w.nextMonthNav=s("span","flatpickr-next-month"),w.nextMonthNav.innerHTML=w.config.nextArrow,q(),Object.defineProperty(w,"_hidePrevMonthArrow",{get:function(){return w.__hidePrevMonthArrow},set:function(e){w.__hidePrevMonthArrow!==e&&(d(w.prevMonthNav,"flatpickr-disabled",e),w.__hidePrevMonthArrow=e)}}),Object.defineProperty(w,"_hideNextMonthArrow",{get:function(){return w.__hideNextMonthArrow},set:function(e){w.__hideNextMonthArrow!==e&&(d(w.nextMonthNav,"flatpickr-disabled",e),w.__hideNextMonthArrow=e)}}),w.currentYearElement=w.yearElements[0],De(),w.monthNav)),w.innerContainer=s("div","flatpickr-innerContainer"),w.config.weekNumbers){var t=function(){w.calendarContainer.classList.add("hasWeeks");var e=s("div","flatpickr-weekwrapper");e.appendChild(s("span","flatpickr-weekday",w.l10n.weekAbbreviation));var t=s("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,a=t.weekNumbers;w.innerContainer.appendChild(n),w.weekNumbers=a,w.weekWrapper=n}w.rContainer=s("div","flatpickr-rContainer"),w.rContainer.appendChild($()),w.daysContainer||(w.daysContainer=s("div","flatpickr-days"),w.daysContainer.tabIndex=-1),J(),w.rContainer.appendChild(w.daysContainer),w.innerContainer.appendChild(w.rContainer),e.appendChild(w.innerContainer)}w.config.enableTime&&e.appendChild(function(){w.calendarContainer.classList.add("hasTime"),w.config.noCalendar&&w.calendarContainer.classList.add("noCalendar");var e=x(w.config);w.timeContainer=s("div","flatpickr-time"),w.timeContainer.tabIndex=-1;var t=s("span","flatpickr-time-separator",":"),n=m("flatpickr-hour",{"aria-label":w.l10n.hourAriaLabel});w.hourElement=n.getElementsByTagName("input")[0];var a=m("flatpickr-minute",{"aria-label":w.l10n.minuteAriaLabel});w.minuteElement=a.getElementsByTagName("input")[0],w.hourElement.tabIndex=w.minuteElement.tabIndex=-1,w.hourElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getHours():w.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),w.minuteElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getMinutes():e.minutes),w.hourElement.setAttribute("step",w.config.hourIncrement.toString()),w.minuteElement.setAttribute("step",w.config.minuteIncrement.toString()),w.hourElement.setAttribute("min",w.config.time_24hr?"0":"1"),w.hourElement.setAttribute("max",w.config.time_24hr?"23":"12"),w.hourElement.setAttribute("maxlength","2"),w.minuteElement.setAttribute("min","0"),w.minuteElement.setAttribute("max","59"),w.minuteElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(n),w.timeContainer.appendChild(t),w.timeContainer.appendChild(a),w.config.time_24hr&&w.timeContainer.classList.add("time24hr");if(w.config.enableSeconds){w.timeContainer.classList.add("hasSeconds");var i=m("flatpickr-second");w.secondElement=i.getElementsByTagName("input")[0],w.secondElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getSeconds():e.seconds),w.secondElement.setAttribute("step",w.minuteElement.getAttribute("step")),w.secondElement.setAttribute("min","0"),w.secondElement.setAttribute("max","59"),w.secondElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(s("span","flatpickr-time-separator",":")),w.timeContainer.appendChild(i)}w.config.time_24hr||(w.amPM=s("span","flatpickr-am-pm",w.l10n.amPM[r((w.latestSelectedDateObj?w.hourElement.value:w.config.defaultHour)>11)]),w.amPM.title=w.l10n.toggleTitle,w.amPM.tabIndex=-1,w.timeContainer.appendChild(w.amPM));return w.timeContainer}());d(w.calendarContainer,"rangeMode","range"===w.config.mode),d(w.calendarContainer,"animate",!0===w.config.animate),d(w.calendarContainer,"multiMonth",w.config.showMonths>1),w.calendarContainer.appendChild(e);var i=void 0!==w.config.appendTo&&void 0!==w.config.appendTo.nodeType;if((w.config.inline||w.config.static)&&(w.calendarContainer.classList.add(w.config.inline?"inline":"static"),w.config.inline&&(!i&&w.element.parentNode?w.element.parentNode.insertBefore(w.calendarContainer,w._input.nextSibling):void 0!==w.config.appendTo&&w.config.appendTo.appendChild(w.calendarContainer)),w.config.static)){var l=s("div","flatpickr-wrapper");w.element.parentNode&&w.element.parentNode.insertBefore(l,w.element),l.appendChild(w.element),w.altInput&&l.appendChild(w.altInput),l.appendChild(w.calendarContainer)}w.config.static||w.config.inline||(void 0!==w.config.appendTo?w.config.appendTo:window.document.body).appendChild(w.calendarContainer)}(),function(){w.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(w.element.querySelectorAll("[data-"+e+"]"),(function(t){return A(t,"click",w[e])}))}));if(w.isMobile)return void function(){var e=w.config.enableTime?w.config.noCalendar?"time":"datetime-local":"date";w.mobileInput=s("input",w.input.className+" flatpickr-mobile"),w.mobileInput.tabIndex=1,w.mobileInput.type=e,w.mobileInput.disabled=w.input.disabled,w.mobileInput.required=w.input.required,w.mobileInput.placeholder=w.input.placeholder,w.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",w.selectedDates.length>0&&(w.mobileInput.defaultValue=w.mobileInput.value=w.formatDate(w.selectedDates[0],w.mobileFormatStr));w.config.minDate&&(w.mobileInput.min=w.formatDate(w.config.minDate,"Y-m-d"));w.config.maxDate&&(w.mobileInput.max=w.formatDate(w.config.maxDate,"Y-m-d"));w.input.getAttribute("step")&&(w.mobileInput.step=String(w.input.getAttribute("step")));w.input.type="hidden",void 0!==w.altInput&&(w.altInput.type="hidden");try{w.input.parentNode&&w.input.parentNode.insertBefore(w.mobileInput,w.input.nextSibling)}catch(e){}A(w.mobileInput,"change",(function(e){w.setDate(g(e).value,!1,w.mobileFormatStr),pe("onChange"),pe("onClose")}))}();var e=l(ie,50);w._debouncedChange=l(N,300),w.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&A(w.daysContainer,"mouseover",(function(e){"range"===w.config.mode&&ae(g(e))}));A(window.document.body,"keydown",ne),w.config.inline||w.config.static||A(window,"resize",e);void 0!==window.ontouchstart?A(window.document,"touchstart",Z):A(window.document,"mousedown",Z);A(window.document,"focus",Z,{capture:!0}),!0===w.config.clickOpens&&(A(w._input,"focus",w.open),A(w._input,"click",w.open));void 0!==w.daysContainer&&(A(w.monthNav,"click",Ce),A(w.monthNav,["keyup","increment"],F),A(w.daysContainer,"click",ue));if(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement){var t=function(e){return g(e).select()};A(w.timeContainer,["increment"],I),A(w.timeContainer,"blur",I,{capture:!0}),A(w.timeContainer,"click",Y),A([w.hourElement,w.minuteElement],["focus","click"],t),void 0!==w.secondElement&&A(w.secondElement,"focus",(function(){return w.secondElement&&w.secondElement.select()})),void 0!==w.amPM&&A(w.amPM,"click",(function(e){I(e),N()}))}w.config.allowInput&&A(w._input,"blur",te)}(),(w.selectedDates.length||w.config.noCalendar)&&(w.config.enableTime&&_(w.config.noCalendar?w.latestSelectedDateObj:void 0),be(!1)),k();var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!w.isMobile&&t&&ce(),pe("onReady")}(),w}function k(e,t){for(var n=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=E(o,t||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return k(this,e)},HTMLElement.prototype.flatpickr=function(e){return k([this],e)});var T=function(e,t){return"string"==typeof e?k(window.document.querySelectorAll(e),t):e instanceof Node?k([e],t):k(e,t)};return T.defaultConfig={},T.l10ns={en:e({},i),default:e({},i)},T.localize=function(t){T.l10ns.default=e(e({},T.l10ns.default),t)},T.setDefaults=function(t){T.defaultConfig=e(e({},T.defaultConfig),t)},T.parseDate=C({}),T.formatDate=b({}),T.compareDates=M,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return k(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=T),T}));

/***/ }),

/***/ "./js/pdf_form/l10n/ko.js":
/*!********************************!*\
  !*** ./js/pdf_form/l10n/ko.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Korean = {
      weekdays: {
          shorthand: ["일", "월", "화", "수", "목", "금", "토"],
          longhand: [
              "일요일",
              "월요일",
              "화요일",
              "수요일",
              "목요일",
              "금요일",
              "토요일",
          ],
      },
      months: {
          shorthand: [
              "1월",
              "2월",
              "3월",
              "4월",
              "5월",
              "6월",
              "7월",
              "8월",
              "9월",
              "10월",
              "11월",
              "12월",
          ],
          longhand: [
              "1월",
              "2월",
              "3월",
              "4월",
              "5월",
              "6월",
              "7월",
              "8월",
              "9월",
              "10월",
              "11월",
              "12월",
          ],
      },
      ordinal: function () {
          return "일";
      },
      rangeSeparator: " ~ ",
  };
  fp.l10ns.ko = Korean;
  var ko = fp.l10ns;

  exports.Korean = Korean;
  exports.default = ko;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

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

/***/ "./js/pdf_form/src/reader/readerMod.js":
/*!*********************************************!*\
  !*** ./js/pdf_form/src/reader/readerMod.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReaderMod: () => (/* binding */ ReaderMod)
/* harmony export */ });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _readerPageData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readerPageData.js */ "./js/pdf_form/src/reader/readerPageData.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/color-picker */ "./js/pdf_form/src/utils/color-picker.js");
/* harmony import */ var _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_color_picker__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @module Reader/ReaderMod
 */







var _readerMod;

/**
 * @description 필드 입력 관련 처리를 하는 Class
 *
 * @property {Callback} customAlertFunc  {@link module:Reader/ReaderMod.ReaderMod#customAlertFunc }
 * @property {Object} menuCd {@link module:Reader/ReaderMod.ReaderMod#menuCd}
 * @property {Object} pagesInfo  {@link module:Reader/ReaderMod.ReaderMod#pagesInfo }
 * @property {Object} pdfViewer {@link module:Reader/ReaderMod.ReaderMod#pdfViewer}
 * @property {Object} readerOwnerNode  {@link module:Reader/ReaderMod.ReaderMod#readerOwnerNode }
 * @property {Object} registeredSignDatas  {@link module:Reader/ReaderMod.ReaderMod#registeredSignDatas }
 * @property {Object} signCanvas {@link module:Reader/ReaderMod.ReaderMod#signCanvas}
 * @property {Object} templateData  {@link module:Reader/ReaderMod.ReaderMod#templateData }
 * @property {Object} textSignCanvas  {@link module:Reader/ReaderMod.ReaderMod#textSignCanvas }
 *
 * @property {Function} cloneSignData  {@link module:Reader/ReaderMod.ReaderMod#cloneSignData }
 * @property {Function} closeSignPopup  {@link module:Reader/ReaderMod.ReaderMod#closeSignPopup }
 * @property {Function} exportFieldData  {@link module:Reader/ReaderMod.ReaderMod#exportFieldData }
 * @property {Function} isRequiredFieldValueEmpty  {@link module:Reader/ReaderMod.ReaderMod#isRequiredFieldValueEmpty }
 * @property {Function} loadJsonData  {@link module:Reader/ReaderMod.ReaderMod#loadJsonData }
 * @property {Function} loadJsonDataWithUserInfo  {@link module:Reader/ReaderMod.ReaderMod#loadJsonDataWithUserInfo }
 * @property {Function} loadRegisteredSignData  {@link module:Reader/ReaderMod.ReaderMod#loadRegisteredSignData }
 * @property {Function} pageRefresh  {@link module:Reader/ReaderMod.ReaderMod#pageRefresh }
 * @property {Function} pageRender  {@link module:Reader/ReaderMod.ReaderMod#pageRender }
 * @property {Function} readerInit  {@link module:Reader/ReaderMod.ReaderMod#readerInit }
 * @property {Function} saveSignPopupData  {@link module:Reader/ReaderMod.ReaderMod#saveSignPopupData }
 * @property {Function} signPopupInitEvt  {@link module:Reader/ReaderMod.ReaderMod#signPopupInitEvt }
 * @property {Function} signPopupTabClick  {@link module:Reader/ReaderMod.ReaderMod#signPopupTabClick }
 * @property {Function} signRevert  {@link module:Reader/ReaderMod.ReaderMod#signRevert }
 * @property {Function} signTextCreate  {@link module:Reader/ReaderMod.ReaderMod#signTextCreate }
 * @property {Function} signTextCreateKeyUpEvent  {@link module:Reader/ReaderMod.ReaderMod#signTextCreateKeyUpEvent }
 * @property {Function} stampFileSelect  {@link module:Reader/ReaderMod.ReaderMod#stampFileSelect }
 * @property {Function} stampFileSelect  {@link module:Reader/ReaderMod.ReaderMod#stampFileSelect }
 * @property {Function} addURLImageToSignArea  {@link module:Reader/ReaderMod.ReaderMod#addURLImageToSignArea }
 * 
 * @FileName ReaderMod.js
 * @since 2021.05.31
 */
class ReaderMod {
  /**
   * @type {PDFViewer}
   * @name module:Reader/ReaderMod.ReaderMod#pdfViewer
   * @description PDF.js 뷰어 오브젝트
   */
  pdfViewer;

  /**
   * @type {Object}
   * @name module:Reader/ReaderMod.ReaderMod#templateData
   * @description Template에서 만든 필드 정보 데이터.
   */
  templateData;

  /**
   * @type {Object}
   * @name module:Reader/ReaderMod.ReaderMod#signCanvas
   * @description 서명팝업의 Drawing탭의 canvas Object.
   */
  signCanvas = null;

  /**
   * @type {Object}
   * @name module:Reader/ReaderMod.ReaderMod#textSignCanvas
   * @description 서명팝업의 텍스트 서명탭에서 텍스트 서명을 선택하면 저장하는 canvas Object.
   */
  textSignCanvas = null;

  /**
   * @type {Object}
   * @name module:Reader/ReaderMod.ReaderMod#pagesInfo
   * @description 필드들의 정보를 담고 있는 페이지 정보 오브젝트
   */
  pagesInfo = {};

  /**
   * @type {Element}
   * @name module:Reader/ReaderMod.ReaderMod#readerOwnerNode
   * @description 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
   */
  readerOwnerNode = "";

  /**
   * @type {Object}
   * @name module:Reader/ReaderMod.ReaderMod#registeredSignDatas
   * @description 서버에서 등록된 서명 이미지 정보를 담아서 저장하고 있을 데이터 Object
   */
  registeredSignDatas = null;

  /**
   * @type {Callback}
   * @name module:Reader/ReaderMod.ReaderMod#customAlertFunc
   * @description 알림 창을 띄우기 위한 Callback Function
   */
  customAlertFunc = null;

  /**
   * @type {Number}
   * @name module:Reader/ReaderMod.ReaderMod#readerMode
   * @description 입력 모드 0 메모모드 1
   */
  readerMode = 0;

  /**
   * @type {String}
   * @name module:Reader/ReaderMod.ReaderMod#imgJsonFileUrl
   * @description imgJsonFileUrl는 등록된 이미지 탭에서 보여줄 이미지들의 정보를 담은 json 파일 경로 
   */
  imgJsonFileUrl = "";

  /**
   * @constructor
   * @param {Object} _pdfViewer PDF Viewer Object
   * @param {Element} ownerNode 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
   *
   */
  constructor(_pdfViewer, ownerNode) {
    this.pdfViewer = _pdfViewer;
    _readerMod = this;
    this.readerOwnerNode = ownerNode;
  }

  /**
   * @function pageRender
   * @name module:Reader/ReaderMod.ReaderMod#pageRender
   * @description  페이지 랜더링 이벤트때 필드를 랜더링한다.
   *
   * @param {Object} event Event Object
   * @Date  2021. 5. 31
   */
  pageRender(event) {
    const pageNo = event.pageNumber;
    //console.log(pageNo);
    let pgNode = _readerMod.readerOwnerNode.querySelector(
      " [data-page-number='" + pageNo + "']"
    );
    const keys = Object.keys(_readerMod.pagesInfo);
    if (keys.length <= 0) {
      return;
    }
    _readerMod.hideMemoProperties();
    let pageInfo = _readerMod.pagesInfo[pageNo - 1];
    const viewport = _readerMod.pdfViewer._pages[pageNo - 1].viewport;
    pageInfo.createField(
      pgNode,
      viewport,
      _readerMod.readerMode,
      _readerMod.deleteBtnClickEventListener,
      _readerMod.memoPropertyBtnClickEventListener
    );
    if (_readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_MEMO_MAKE_MODE) {
      pgNode
        .querySelector("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS)
        .removeEventListener("mouseup", _readerMod.templateMouseUpEvent);
      pgNode
        .querySelector("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS)
        .addEventListener("mouseup", _readerMod.templateMouseUpEvent);
    }
  }

  /**
   * @function pageRefresh
   * @name module:Reader/ReaderMod.ReaderMod#pageRefresh
   * @description  필드데이터를 다시 랜더링한다.
   *
   * @Date 2021. 5. 31
   */
  pageRefresh() {
    const keys = Object.keys(_readerMod.pagesInfo);
    if (keys.length <= 0) {
      return;
    }

    _readerMod.hideMemoProperties();
    keys.forEach((key) => {
      let pageNumber = parseInt(key) + 1;
      let pgNode = _readerMod.readerOwnerNode.querySelector(
        " [data-page-number='" + pageNumber + "']"
      );
      let isLoaded = pgNode.getAttribute("data-loaded");
      if (isLoaded === "true") {
        let pageInfo = _readerMod.pagesInfo[key];
        const viewport = _readerMod.pdfViewer._pages[key].viewport;
        pageInfo.createField(
          pgNode,
          viewport,
          _readerMod.readerMode,
          _readerMod.deleteBtnClickEventListener,
          _readerMod.memoPropertyBtnClickEventListener
        );
        if (_readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_MEMO_MAKE_MODE) {
          pgNode
            .querySelector("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS)
            .removeEventListener("mouseup", _readerMod.templateMouseUpEvent);
          pgNode
            .querySelector("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS)
            .addEventListener("mouseup", _readerMod.templateMouseUpEvent);
        }
      }
    });
  }

  /**
   * @function loadJsonData
   * @name module:Reader/ReaderMod.ReaderMod#loadJsonData
   * @description  field정보를 로드한다.
   *
   * @param {Object} jsonData  import할 json data Object
   * @Date 2021. 5. 31
   */
  loadJsonData(jsonData) {
    if (jsonData === null) {
      return;
    }
    _readerMod.templateData = jsonData;
    let defaultValueInfo = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneObject(
      _readerMod.templateData.formerList[0]
    );

    _readerMod.templateData.formerList[0].pages.forEach((element) => {
      var pageData = new _readerPageData_js__WEBPACK_IMPORTED_MODULE_2__.ReaderPageData(
        element.pageNo,
        defaultValueInfo,
        _readerMod.readerOwnerNode,
        _readerMod.customAlertFunc,
        false,
        _readerMod.signCanvas
      );
      element.fields.forEach((field) => {
        pageData.pushField(field.m_id, field);
      });
      if (element.memos !== null && element.memos !== undefined) {
        element.memos.forEach((memo) => {
          pageData.pushMemo(memo.m_id, memo);
        });
      }
      _readerMod.pagesInfo[element.pageNo] = pageData;
    });
  }

  /**
   * @function loadJsonDataWithUserInfo
   * @name module:Reader/ReaderMod.ReaderMod#loadJsonDataWithUserInfo
   * @description  서명자 정보와 field정보를 합쳐서 로드한다.
   *
   * @param {Object} jsonData  import할 json data Object
   * @param {Object} userInfo  서명자 정보 Object
   * @Date  2021. 5. 31
   */
  loadJsonDataWithUserInfo(jsonData, userInfo, userKey) {
    _readerMod.templateData = jsonData;
    let defaultValueInfo = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneObject(userInfo);

    _readerMod.templateData.formerList[userKey].pages.forEach((element) => {
      var pageData = new _readerPageData_js__WEBPACK_IMPORTED_MODULE_2__.ReaderPageData(
        element.pageNo,
        defaultValueInfo,
        _readerMod.readerOwnerNode,
        _readerMod.customAlertFunc,
        true,
        _readerMod.signCanvas
      );
      element.fields.forEach((field) => {
        pageData.pushField(field.m_id, field);
      });
      if (
        _readerMod.pagesInfo[element.pageNo] !== undefined ||
        _readerMod.pagesInfo[element.pageNo] !== null
      ) {
        delete _readerMod.pagesInfo[element.pageNo];
      }
      _readerMod.pagesInfo[element.pageNo] = pageData;
    });
  }

  /**
   * @function readerInit
   * @name module:Reader/ReaderMod.ReaderMod#readerInit
   * @description  필요한 정보들을 초기화한다.
   *
   * @Date 2021. 5. 31
   */
  readerInit() {
    if (_readerMod.signCanvas === null) {
      let drawComponent =
        _readerMod.readerOwnerNode.querySelector("#drawComponent");
      _readerMod.signCanvas = new fabric.Canvas(drawComponent, {
        isDrawingMode: true,
      });
    } else {
      _readerMod.signCanvas.clear();
    }
    if (_readerMod.textSignCanvas === null) {
      let canvas1 = _readerMod.readerOwnerNode.querySelector(
        " #textSignCanvas .canvas_wrap canvas"
      );
      _readerMod.textSignCanvas = new fabric.StaticCanvas(canvas1, {});
    } else {
      _readerMod.textSignCanvas.clear();
    }

    _readerMod.readerOwnerNode
      .querySelector(" #drawTypeInitButton")
      .addEventListener("click", _readerMod.signRevert);
    _readerMod.readerOwnerNode
      .querySelector(" #cancelButton")
      .addEventListener("click", _readerMod.closeSignPopup);
    _readerMod.readerOwnerNode
      .querySelector(" #drawRegistButton")
      .addEventListener("click", _readerMod.saveSignPopupData);
    _readerMod.readerOwnerNode
      .querySelector(" #signElement")
      .addEventListener("change", _readerMod.signPopupInitEvt);

    _readerMod.readerOwnerNode
      .querySelector(" #stampFileInput")
      .addEventListener("change", _readerMod.stampImageSelected);
    _readerMod.readerOwnerNode
      .querySelector(" .corner_point_area .txt_guide")
      .addEventListener("click", _readerMod.stampFileSelect);

    _readerMod.readerOwnerNode
      .querySelectorAll(
        " .Sign-Popup > .Sign-Layerpop .Popup-Body .Popup-Tab-Main > li"
      )
      .forEach((el) => {
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(el.onclick)) {
          return;
        }
        el.addEventListener("click", _readerMod.signPopupTabClick, true);
      });
  }

  /**
   * @function loadRegisteredSignData
   * @name module:Reader/ReaderMod.ReaderMod#loadRegisteredSignData
   * @description   서버로부터 등록된 인장 정보를 불러온다.
   *
   * @Date 2021. 5. 31
   */
  async loadRegisteredSignData() {
    let signTypeList = _readerMod.readerOwnerNode.querySelector(
      " .Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul.signTypeList"
    );
    let stamplistType = signTypeList.getAttribute("clonekey");
    let popupDiv = _readerMod.readerOwnerNode.querySelector(" #signElement");
    let layerPop = popupDiv.querySelector(".Sign-Layerpop");
    //let regSignApiUrl = layerPop.getAttribute("regSignApiUrl");
    if (
      _readerMod.imgJsonFileUrl === undefined ||
      _readerMod.imgJsonFileUrl === null ||
      _readerMod.imgJsonFileUrl === false
    ) {
      return;
    }
    let regSignApiUrl = _readerMod.imgJsonFileUrl;


    /*
    let stampUrl = regSignApiUrl;
    if (stamplistType !== "registeredCompanyList") {
      stampUrl = "/ui/bp/edoc/eform/findUserStampListByMail.do";//어떤 용도지?
    }
    var contentChipher = false;
    var bodyJsonStr = JSON.stringify({ registeredSignDatas: "reader" });
    console.log(bodyJsonStr);
    if (window.isParameterEncypt === true) {
      contentChipher = true;
      bodyJsonStr = CipherUtil.encrypt(bodyJsonStr, "AES");
    }

    const csrf = document.querySelector(" meta[name=_csrf]").content;
    

    fetch(
      stampUrl,
      {
        headers: {
          "content-type": "application/json",
          "x-csrf-token": csrf,
          "x-requested-with": "XMLHttpRequest",
          "content-chipher": contentChipher,
        },
        method: "POST",
        body: bodyJsonStr,
      }
      //fetch("findCompanyStampList.do"
    )
    */
    let stampUrl = regSignApiUrl;//현재는 사용 안함(API방식 사용시 사용)


    // regSignApiUrl이 배열인지 확인
    if (Array.isArray(regSignApiUrl)) {
        // 배열인 경우의 처리
        console.log("[등록된 이미지] URL 배열.");
        let data = _readerMod.convertUrlsToJson(regSignApiUrl);
        _readerMod.registeredSignDatas = data;
        for (var idx = 0; idx < data.length; ++idx) {
          let liEl = document.createElement("li");
          let canvasWrap = document.createElement("div");
          canvasWrap.className = "canvas_wrap";
          let imgEl = document.createElement("img");
          let signData = data[idx];
          
          /*
          테스트
          */
          // convertImageToBase64 함수 호출하여 이미지를 base64로 변환하고 결과를 처리
          await _readerMod.convertImageToBase64(signData.img_src)
          .then(function(base64String) {
            signData.img_src = base64String;
          })
          .catch(function(error) {
              console.error('Error:', error);
              //alert("선택하신 등록된 이미지의 URL에 접근할 수 없습니다.\n (CORS정책 위배 혹은 잘못된 URL)")
          });
          /*
          테스트
          */

          imgEl.src = signData.img_src;
          
          imgEl.addEventListener("click", function (evt) {
            //console.log(evt);
            let liList = signTypeList.querySelectorAll("li");
            for (var liIdx = 0; liIdx < liList.length; ++liIdx) {
              let liEl = liList.item(liIdx);
              if (liEl.classList.contains("on")) {
                liEl.classList.toggle("on");
              }
            }
            let targetLi = evt.target.closest("li");
            targetLi.classList.toggle("on");
          });
          canvasWrap.setAttribute("registeredIdx", idx);
          canvasWrap.setAttribute("registeredImgType", 'URL');
          //canvasWrap.setAttribute("stpNO", signData.stp_no);
          canvasWrap.appendChild(imgEl);
          liEl.appendChild(canvasWrap);
          signTypeList.appendChild(liEl);
        }


    } else {
        // 배열이 아닌 경우의 처리
        console.log("[등록된 이미지] Json 파일 경로");
        fetch(regSignApiUrl)
          .then((response) => response.json())
          .then((data) => {
            //console.log("응답 데이터:", data);
            _readerMod.registeredSignDatas = data;
            for (var idx = 0; idx < data.length; ++idx) {
              let liEl = document.createElement("li");
              let canvasWrap = document.createElement("div");
              canvasWrap.className = "canvas_wrap";
              let imgEl = document.createElement("img");
              let signData = data[idx];
              if (signData.img_type === "SVG") {
                let blob = new Blob([signData.img_src], {
                  type: "image/svg+xml",
                });
                imgEl.src = URL.createObjectURL(blob);
              } else {
                imgEl.src = signData.img_src;
              }
              imgEl.addEventListener("click", function (evt) {
                //console.log(evt);
                let liList = signTypeList.querySelectorAll("li");
                for (var liIdx = 0; liIdx < liList.length; ++liIdx) {
                  let liEl = liList.item(liIdx);
                  if (liEl.classList.contains("on")) {
                    liEl.classList.toggle("on");
                  }
                }
                let targetLi = evt.target.closest("li");
                targetLi.classList.toggle("on");
              });
              canvasWrap.setAttribute("registeredIdx", idx);
              canvasWrap.setAttribute("registeredImgType", signData.img_type);
              //canvasWrap.setAttribute("stpNO", signData.stp_no);
              canvasWrap.appendChild(imgEl);
              liEl.appendChild(canvasWrap);
              signTypeList.appendChild(liEl);
            }
          })
          .catch((error) => {
            console.error("에러 발생:", error);
          });


    }

    
  }

  /**
   * @function signPopupTabClick
   * @name module:Reader/ReaderMod.ReaderMod#signPopupTabClick
   * @description 서명팝업의 탭을 클릭했을 때 탭이동을 한다.
   *
   * @param {Object} event Event Object
   * @Date 2021. 5. 31
   */
  signPopupTabClick(evt) {
    const targetId = evt.target.closest("li").id;
    _readerMod.readerOwnerNode
      .querySelectorAll(
        " .Sign-Popup > .Sign-Layerpop .Popup-Body .Popup-Tab-Main > li"
      )
      .forEach((el) => {
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.isEmptyObject(el.onclick)) {
          return;
        }
        if (el.id === targetId) {
          if (!el.classList.contains("on")) {
            el.classList.toggle("on");
          }

          const targetTabId = targetId.replace("Button", "");
          if (
            targetTabId === "registeredSignTab" &&
            _readerMod.registeredSignDatas === null
          ) {
            //_readerMod.loadRegisteredSignData();
          }
          //1213 병욱추가
          // document
          //   .getElementById("addImageButton")
          //   .addEventListener("click", _readerMod.addURLImageToSignArea());

          _readerMod.readerOwnerNode
            .querySelectorAll(
              " .Sign-Popup > .Sign-Layerpop .Popup-Body .Sign-Tab-Container > .Tab-Contents"
            )
            .forEach((contentEl) => {
              const tabName = contentEl.getAttribute("data-tab-name");
              if (tabName === targetTabId) {
                if (contentEl.classList.contains("Template-Hide")) {
                  contentEl.classList.toggle("Template-Hide");
                }
              } else {
                if (!contentEl.classList.contains("Template-Hide")) {
                  contentEl.classList.toggle("Template-Hide");
                }
              }
            });
        } else {
          if (el.classList.contains("on")) {
            el.classList.toggle("on");
          }
        }
      });
  }

  /**
   * @function signPopupInitEvt
   * @name module:Reader/ReaderMod.ReaderMod#signPopupInitEvt
   * @description 서명팝업이 처음 뜰때 필요한 데이터들을 초기화한다.
   *
   * @param {Object} event  Event Object
   * @Date  2021. 5. 31
   */
  signPopupInitEvt(evt) {
    const popupDiv = _readerMod.readerOwnerNode.querySelector(" #signElement");
    let currentTabEl = popupDiv.querySelector(
      ".Sign-Tab-Container .Popup-Tab-Main li.on"
    );

    switch (currentTabEl.id) {
      case "signDrawTabButton": {
        let canvasParent = _readerMod.readerOwnerNode.querySelector(
          ".Sign-Area.Draw-Area"
        );
        let parentBBox = canvasParent.getBoundingClientRect();
        if (parentBBox.width < 500) {
          _readerMod.signCanvas.setDimensions({
            width: parentBBox.width,
            height: parentBBox.height,
          });
        } else {
          _readerMod.signCanvas.setDimensions({
            width: 500,
            height: 335,
          });
        }
        _readerMod.signCanvas.clear();
      }
      case "signTextTabButton": {
        let signTypeList = _readerMod.readerOwnerNode.querySelector(
          " .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList"
        );
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(signTypeList);
      }
      case "stampSignTabButton": {
        let imageEl =
          _readerMod.readerOwnerNode.querySelector(" #stampImageTag");
        imageEl.src = "";

        _readerMod.readerOwnerNode.querySelector(" #stampFileInput").select();
        _readerMod.readerOwnerNode.querySelector(" #stampFileInput").value = "";
      }
      case "registeredSignArea": {
        //1215 추가
        _readerMod.clearSignTypeList(); //이미지li 초기화
        _readerMod.loadRegisteredSignData(); //이미지li 생성
      }
    }
  }

  /**
   * @function signRevert
   * @name module:Reader/ReaderMod.ReaderMod#signRevert
   * @description 서명데이터를 초기화한다.
   *
   * @Date  2021. 5. 31
   */
  signRevert() {
    const popupDiv = _readerMod.readerOwnerNode.querySelector(" #signElement");
    let currentTabEl = popupDiv.querySelector(
      ".Sign-Tab-Container .Popup-Tab-Main li.on"
    );

    switch (currentTabEl.id) {
      case "signDrawTabButton": {
        _readerMod.signCanvas.clear();
      }
      case "signTextTabButton": {
        let signTypeList = _readerMod.readerOwnerNode.querySelector(
          " .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList"
        );
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(signTypeList);
      }
      case "stampSignTabButton": {
        let imageEl =
          _readerMod.readerOwnerNode.querySelector(" #stampImageTag");
        imageEl.src = "";
        _readerMod.readerOwnerNode.querySelector(" #stampFileInput").value = "";
      }
      case "registeredSignTabButton": {
        let signTypeListLi = _readerMod.readerOwnerNode.querySelectorAll(
          " .Sign-Layerpop .Tab-Contents .Sign-Area .registeredSignWrap ul.signTypeList li"
        );

        for (var liIdx = 0; liIdx < signTypeListLi.length; ++liIdx) {
          let liEl = signTypeListLi.item(liIdx);
          if (liEl.classList.contains("on")) {
            liEl.classList.toggle("on");
          }
        }
      }
    }
  }

  /**
   * @function closeSignPopup
   * @name module:Reader/ReaderMod.ReaderMod#closeSignPopup
   * @description 서명팝업을 닫는다.
   *
   * @Date 2021. 5. 31
   */
  closeSignPopup() {
    let popupDiv = _readerMod.readerOwnerNode.querySelector(" #signElement");
    if (!popupDiv.classList.contains("Template-Hide")) {
      popupDiv.classList.toggle("Template-Hide");
    }
  }

  /**
   * @function cloneSignData
   * @name module:Reader/ReaderMod.ReaderMod#cloneSignData
   * @description  서명 필드 정보를 복사한다.
   *
   * @param {Object} fieldData   Field Data
   * @Date 2021. 5. 31
   */
  cloneSignData(fieldData) {
    const keys = Object.keys(_readerMod.pagesInfo);

    keys.forEach((pageKey) => {
      const fieldkeys = Object.keys(_readerMod.pagesInfo[pageKey].fields);
      fieldkeys.forEach((fieldKey) => {
        let field = _readerMod.pagesInfo[pageKey].fields[fieldKey];
        if (fieldKey === fieldData.m_id || field.m_type !== "SignField") {
          return;
        }
        field.m_value = fieldData.m_value;

        field.signType = fieldData.signType;
        field.m_orgSignWidth = fieldData.m_orgSignWidth;
        field.m_orgSignHeight = fieldData.m_orgSignHeight;
        field.m_stpNo = fieldData.m_stpNo;
        if (field.signType === "path" || field.signType === "textPath") {
          field.m_orgSignLeft = fieldData.m_orgSignLeft;
          field.m_orgSignTop = fieldData.m_orgSignTop;
          field.m_svgData = fieldData.m_svgData;
        }
      });
    });
  }

  /**
   * @function saveSignPopupData
   * @name module:Reader/ReaderMod.ReaderMod#saveSignPopupData
   * @description  서명팝업에 떠있는 데이터를 저장하고 닫는다.
   *
   * @Date 2021. 5. 31
   */
  async saveSignPopupData() {
    const popupDiv = _readerMod.readerOwnerNode.querySelector(" #signElement");
    const layerPop = popupDiv.querySelector(".Sign-Layerpop");
    const fieldId = layerPop.getAttribute("fieldId");
    const pageNo = layerPop.getAttribute("pageNo");
    const signWidth = layerPop.getAttribute("signWidth");
    const signHeight = layerPop.getAttribute("signHeight");

    let fieldData = _readerMod.pagesInfo[pageNo - 1].getField(fieldId);

    let currentTabEl = popupDiv.querySelector(
      ".Sign-Tab-Container .Popup-Tab-Main li.on"
    );

    switch (currentTabEl.id) {
      case "signDrawTabButton": {
        fieldData.m_svgData = btoa(unescape(_readerMod.signCanvas.toSVG()));
        fieldData.m_value = JSON.stringify(_readerMod.signCanvas);
        fieldData.signType = "path";
        let objectsBBox = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.mergeObjectsRect(_readerMod.signCanvas);
        if (objectsBBox != null){
            fieldData.m_orgSignWidth = Math.abs(
              objectsBBox.right - objectsBBox.left
            );
            fieldData.m_orgSignHeight = Math.abs(
              objectsBBox.bottom - objectsBBox.top
            );
            fieldData.m_orgSignLeft = objectsBBox.left;
            fieldData.m_orgSignTop = objectsBBox.top;
            fieldData.m_stpNo = "";
        }else{
          fieldData.m_svgData = "";
          fieldData.m_value = "";
          fieldData.signType = "";
          alert(`입력된 "싸인"이 없습니다.`);
          return;
        }
        
        // Utils.addObjectsToCanvas(_readerMod.readerOwnerNode, fieldData, null, signWidth, signHeight, objects,
        //     fieldData.m_orgSignWidth, fieldData.m_orgSignHeight);
        /* 1108 lbw : 일괄서명 기능 제거 */
        //_readerMod.cloneSignData(fieldData);
        _readerMod.pageRefresh();
        break;
      }
      case "signTextTabButton": {
        fieldData.m_svgData = btoa(unescape(_readerMod.textSignCanvas.toSVG()));
        fieldData.m_value = JSON.stringify(_readerMod.textSignCanvas);
        fieldData.signType = "textPath";
        let selectTextSignEl = _readerMod.readerOwnerNode.querySelector(
          " .signTxtWrap > ul.signTypeList > li.on"
        );
        let canvasWrap = selectTextSignEl.querySelector(".canvas_wrap");

        fieldData.m_orgSignWidth = canvasWrap.getAttribute("pathWidth");
        fieldData.m_orgSignHeight = canvasWrap.getAttribute("pathHeight");
        fieldData.m_orgSignLeft = canvasWrap.getAttribute("pathLeft");
        fieldData.m_orgSignTop = canvasWrap.getAttribute("pathTop");
        fieldData.m_stpNo = "";
        // console.log(fieldData.m_value);
        // Utils.addObjectsToCanvas(_readerMod.readerOwnerNode, fieldData, null, signWidth, signHeight, objects,
        //     fieldData.m_orgSignWidth, fieldData.m_orgSignHeight);
        /* 1108 lbw : 일괄서명 기능 제거 */
        // _readerMod.cloneSignData(fieldData);
        _readerMod.pageRefresh();
        break;
      }

      case "stampSignTabButton": {
        let imageEl =
          _readerMod.readerOwnerNode.querySelector(" #stampImageTag");
        if (imageEl.getAttribute("src") == "") {
          fieldData.m_value = "";
          alert(`선택된 "이미지"가 없습니다.`);
          return;
        }
        fieldData.m_value = imageEl.src;
        let imageObj = new fabric.Image(imageEl);
        fieldData.signType = "image";
        fieldData.m_orgSignWidth = imageObj.width;
        fieldData.m_orgSignHeight = imageObj.height;
        fieldData.m_stpNo = "";
        // Utils.addObjectsToCanvas(_readerMod.readerOwnerNode, fieldData, null, signWidth, signHeight, [imageObj],
        //     fieldData.m_orgSignWidth, fieldData.m_orgSignHeight);
        /* 1108 lbw : 일괄서명 기능 제거 */
        // _readerMod.cloneSignData(fieldData);
        _readerMod.pageRefresh();
        break;
      }
      case "registeredSignTabButton": {
        let selectedDataNode = _readerMod.readerOwnerNode.querySelector(
          " .Sign-Layerpop \
                                                                                    .Tab-Contents \
                                                                                    .Sign-Area \
                                                                                    .registeredSignWrap \
                                                                                    ul.signTypeList li.on"
        );
        if (selectedDataNode === null || selectedDataNode === undefined) {
          fieldData.m_value = "";
          alert(`선택된 "등록된 이미지"가 없습니다.`);
          return;
        }
        let canvasWrapNode = selectedDataNode.querySelector(".canvas_wrap");
        let registeredIdx = canvasWrapNode.getAttribute("registeredIdx");
        let seletedData = _readerMod.registeredSignDatas[registeredIdx];
        //fieldData.m_stpNo = canvasWrapNode.getAttribute("stpNO");
        //console.log(seletedData.img_type);
        if (seletedData.img_type === "IMG") {
          let imgNode = canvasWrapNode.querySelector("img");
          fieldData.m_value = seletedData.img_src;
          let imageObj = new fabric.Image(imgNode);
          fieldData.signType = "image";
          fieldData.m_orgSignWidth = imageObj.width;
          fieldData.m_orgSignHeight = imageObj.height;
          // Utils.addObjectsToCanvas(_readerMod.readerOwnerNode, fieldData, null, signWidth, signHeight, [imageObj],
          //     fieldData.m_orgSignWidth, fieldData.m_orgSignHeight);
        } else if (seletedData.img_type === "SVG") {
          let staticCanvas = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.addSignSvgToCanvas(
            fieldData,
            null,
            signWidth,
            signHeight,
            seletedData.img_src
          );
          fieldData.m_svgData = btoa(unescape(staticCanvas.toSVG()));
          fieldData.m_value = JSON.stringify(staticCanvas);
          fieldData.signType = "path";
          fieldData.m_orgSignWidth = seletedData.orgSignWidth;
          fieldData.m_orgSignHeight = seletedData.orgSignHeight;
          fieldData.m_orgSignLeft = seletedData.orgSignLeft;
          fieldData.m_orgSignTop = seletedData.orgSignTop;
          
        } else if (seletedData.img_type === "URL") {
          let imgNode = canvasWrapNode.querySelector("img");
          fieldData.m_value = seletedData.img_src;

          // try {
          //   const isValid = await checkImageValidity(seletedData.img_src);
          //   console.log("이미지 URL이 유효합니다.");
          // } catch (error) {
          //     alert("선택하신 등록된 이미지의 URL에 접근할 수 없습니다.\n (CORS정책 위배 혹은 잘못된 URL)");
          // }

          //convertImageToBase64 함수 호출하여 이미지를 base64로 변환하고 결과를 처리
          // await _readerMod.convertImageToBase64(seletedData.img_src)
          //   .then(function(base64String) {
          //       fieldData.m_value = base64String;
          //   })
          //   .catch(function(error) {
          //       console.error('Error:', error);
          //       alert("선택하신 등록된 이미지의 URL에 접근할 수 없습니다.\n (CORS정책 위배 혹은 잘못된 URL)")
          //   });

          let imageObj = new fabric.Image(imgNode);
          fieldData.signType = "image";
          fieldData.m_orgSignWidth = imageObj.width;
          fieldData.m_orgSignHeight = imageObj.height;
          // Utils.addObjectsToCanvas(_readerMod.readerOwnerNode, fieldData, null, signWidth, signHeight, [imageObj],
          //               fieldData.m_orgSignWidth, fieldData.m_orgSignHeight);


        } else if (seletedData.img_type === "BASE64") {
          let imgNode = canvasWrapNode.querySelector("img");
          fieldData.m_value = seletedData.img_src;
          let imageObj = new fabric.Image(imgNode);
          fieldData.signType = "image";
          fieldData.m_orgSignWidth = imageObj.width;
          fieldData.m_orgSignHeight = imageObj.height;
        } else {
          console.log(
            '[등록된 서명] JSON 형식 중 img_type이 "' +
              seletedData.img_type +
              '"은 처리 할수 없습니다.'
          );
        }
        /* 1108 lbw : 일괄서명 기능 제거 */
        // _readerMod.cloneSignData(fieldData);
        _readerMod.pageRefresh();
        break;
      }
    }

    if (!popupDiv.classList.contains("Template-Hide")) {
      popupDiv.classList.toggle("Template-Hide");
    }
  }

  /**
   * @function exportFieldData
   * @name module:Reader/ReaderMod.ReaderMod#exportFieldData
   * @description  Field 정보 전체를 반환한다.
   *
   * @return {String} Field 정보 Json String
   * @Date 2021. 5. 31
   */
  exportFieldData() {
    return JSON.stringify(_readerMod.templateData);
  }

  /**
   * @function signTextCreateKeyUpEvent
   * @name module:Reader/ReaderMod.ReaderMod#signTextCreateKeyUpEvent
   * @description
   * 서명팝업의 텍스트 서명 탭의 input의 key up 이벤트로 엔터키 입력시 입력 버튼이 누른것과 동일한 동작을 한다.
   *
   * @Date  2021. 5. 31
   */
  signTextCreateKeyUpEvent(evt) {
    if (evt.keyCode === 13) {
      _readerMod.signTextCreate();
    }
  }

  /**
   * @function signTextCreate
   * @name module:Reader/ReaderMod.ReaderMod#signTextCreate
   * @description 서버로부터 텍스트 서명데이터를 받는다.
   *
   * @Date  2021. 5. 31
   */
  signTextCreate() {
    const textVal =
      _readerMod.readerOwnerNode.querySelector(" #signTextInput").value;
    let signTypeList = _readerMod.readerOwnerNode.querySelector(
      " .Sign-Layerpop .Tab-Contents .Sign-Area .signTxtWrap ul.signTypeList"
    );

    const canvasWidth = 145;
    const canvasHeight = 75;

    _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(signTypeList);
    var contentChipher = false;

    const csrf = document.querySelector(" meta[name=_csrf]").content;
    for (var signIdx = 0; signIdx < 9; signIdx++) {
      var bodyJsonStr = JSON.stringify({
        signatureText: textVal,
        fontIndex: signIdx,
      });
      if (window.isParameterEncypt === true) {
        contentChipher = true;
        bodyJsonStr = CipherUtil.encrypt(bodyJsonStr, "AES");
      }

      fetch(
        "/ui/bp/edoc/eform/createTextSignaturesByMail.do",
        {
          headers: {
            "content-type": "application/json",
            "x-csrf-token": csrf,
            "x-requested-with": "XMLHttpRequest",
            "content-chipher": contentChipher,
          },
          method: "POST",
          body: bodyJsonStr,
        }
        // fetch("createTextSignatures.do"
      )
        .then((response) => response.json())
        .then((data) => {

          if (data.result_status !== "S") {
            
            return;
          }
          let liEl = document.createElement("li");
          let canvasWrap = document.createElement("div");
          canvasWrap.className = "canvas_wrap";
          let canvasEl = document.createElement("canvas");
          let signPath = new fabric.Path(data.signature_data, {
            fill: "#000000",
          });
          let staticCanvs = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.addObjectsToCanvas(
            _readerMod.readerOwnerNode,
            null,
            canvasEl,
            canvasWidth - 10,
            canvasHeight - 10,
            [signPath],
            signPath.width,
            signPath.height
          );

          canvasEl.addEventListener("click", function (evt) {
            let liList = signTypeList.querySelectorAll("li");
            for (var liIdx = 0; liIdx < liList.length; ++liIdx) {
              let liEl = liList.item(liIdx);
              if (liEl.classList.contains("on")) {
                liEl.classList.toggle("on");
              }
            }
            let targetLi = evt.target.closest("li");
            targetLi.classList.toggle("on");
            _readerMod.textSignCanvas.clear();
            _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneFabricCanvas(
              _readerMod.textSignCanvas,
              staticCanvs.toObject().objects
            );
          });
          canvasWrap.setAttribute("fontName", data.font_name);
          canvasWrap.setAttribute("pathWidth", signPath.width);
          canvasWrap.setAttribute("pathHeight", signPath.height);
          canvasWrap.setAttribute("pathLeft", signPath.left);
          canvasWrap.setAttribute("pathTop", signPath.top);
          canvasWrap.appendChild(canvasEl);
          liEl.appendChild(canvasWrap);
          signTypeList.appendChild(liEl);
        });
    }
  }

  /**
   * @function stampFileSelect
   * @name module:Reader/ReaderMod.ReaderMod#stampFileSelect
   * @description  이미지 인장 선택하기 버튼을 눌렀을 때의 처리를 한다.
   *
   * @param {Object} event Event Object
   * @Date 2021. 5. 31
   */
  stampFileSelect(evt) {
    _readerMod.readerOwnerNode.querySelector(" #stampFileInput").click();
  }

  /**
   * @function stampFileSelect
   * @name module:Reader/ReaderMod.ReaderMod#stampFileSelect
   * @description  이미지 인장 파일을 선택했을 때 처리를 한다.
   *
   * @param {Object} event  Event Object
   * @Date 2021. 5. 31
   */
  stampImageSelected(evt) {
    const fileList = evt.target.files;
    const file = fileList[0];
    if (file === undefined || file === null) {
      return;
    }
    if (!file.type.startsWith("image/")) {
      if (_readerMod.customAlertFunc !== null) {
        _readerMod.customAlertFunc("이미지만 첨부 가능합니다.");
      }
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //console.log(reader.result);
      let imageEl = _readerMod.readerOwnerNode.querySelector(" #stampImageTag");
      imageEl.src = reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  /**
   * @function isRequiredFieldValueEmpty
   * @name module:Reader/ReaderMod.ReaderMod#isRequiredFieldValueEmpty
   * @description 필수 필드가 비어있는지 여부를 반환한다.
   *
   * @return {Boolean} 필수 필드가 비어있는지 여부
   * @Date  2021. 5. 31
   */
  isRequiredFieldValueEmpty() {
    const keys = Object.keys(_readerMod.pagesInfo);
    for (var idx = 0; idx < keys.length; ++idx) {
      const pageData = _readerMod.pagesInfo[keys[idx]];

      let pageNumber = parseInt(keys[idx]) + 1;
      let pgNode = _readerMod.readerOwnerNode.querySelector(
        " [data-page-number='" + pageNumber + "']"
      );
      let isLoaded = pgNode.getAttribute("data-loaded");
      const fieldKeys = Object.keys(pageData.fields);
      if (fieldKeys.length > 0 && (isLoaded === null || isLoaded === "false")) {
        _readerMod.pdfViewer.currentPageNumber = pageNumber;
        return false;
      }
      if (pageData.isRequiredFieldValueEmpty()) {
        return true;
      }
    }
    return false;
  }

  changeReaderMode(mode) {
    if (_readerMod.readerMode === mode) {
      return;
    }
    _readerMod.readerMode = mode;
    _readerMod.readerOwnerNode
      .querySelectorAll("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_FIELD_LAYER_CLASS)
      .forEach((layer) => {
        if (_readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_INPUT_MODE) {
          if (layer.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER)) {
            layer.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER);
          }
        } else {
          if (!layer.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER)) {
            layer.classList.remove(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER);
          }
        }
      });
    _readerMod.readerOwnerNode
      .querySelectorAll("." + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS)
      .forEach((layer) => {
        if (
          _readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_MEMO_MAKE_MODE ||
          _readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_MEMO_MODE
        ) {
          if (layer.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER)) {
            layer.classList.toggle(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER);
          }
        } else {
          if (!layer.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER)) {
            layer.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.NO_EVENT_LAYER);
          }
        }
        layer.removeEventListener("mouseup", _readerMod.templateMouseUpEvent);
        if (_readerMod.readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_FIELD_MEMO_MAKE_MODE) {
          layer.addEventListener("mouseup", _readerMod.templateMouseUpEvent);
          layer.style.cursor = "text";
        } else {
          layer.style.cursor = "pointer";
        }
      });
  }

  templateMouseUpEvent(event) {
    const pageNo = event.target.closest(".page").dataset.pageNumber;

    const viewport = _readerMod.pdfViewer._pages[Number(pageNo) - 1];
    let memo = new Object();
    memo.m_id = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.generate_uuidv4();
    let pagePoint = viewport.getPagePoint(event.offsetX, event.offsetY);
    memo.m_pdfX = pagePoint[0];
    memo.m_pdfY = pagePoint[1];
    let defaultWidth = 100;
    let defaultHeight = 100;
    let pagePoint2 = viewport.getPagePoint(
      event.offsetX + defaultWidth,
      event.offsetY + defaultHeight
    );
    memo.m_pdfX2 = pagePoint2[0];
    memo.m_pdfY2 = pagePoint2[1];
    memo.m_width = defaultWidth;
    memo.m_height = defaultHeight;
    memo.m_type = "MemoField";
    memo.m_fontSize = _readerMod.pagesInfo[pageNo - 1].memoPropeties.fontSize;
    memo.m_fontName = _readerMod.pagesInfo[pageNo - 1].memoPropeties.fontFamily;
    memo.m_fontColor = _readerMod.pagesInfo[pageNo - 1].memoPropeties.fontColor;
    memo.m_backColor = _readerMod.pagesInfo[pageNo - 1].memoPropeties.backColor;
    memo.m_kind = "text";
    memo.m_isRemoved = false;
    memo.m_fieldId = memo.m_id;
    memo.m_required = false;
    memo.m_textAlign = "left";
    memo.m_textVeticalAlign = "middle";
    memo.m_bold = _readerMod.pagesInfo[pageNo - 1].memoPropeties.isBold;
    memo.m_value = "";
    memo.m_pageNo = pageNo;
    _readerMod.pagesInfo[pageNo - 1].pushMemo(memo.m_id, memo);
    if (
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos ===
        undefined ||
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos === null
    ) {
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos = [];
    }
    _readerMod.templateData.formerList[0].pages[pageNo - 1].memos.push(memo);
    _readerMod.pageRefresh();

    _readerMod.readerOwnerNode
      .querySelector(" #" + "Reader-Memo-Input-Mode-Button")
      .dispatchEvent(new Event("click"));
  }

  deleteBtnClickEventListener(evt) {
    if (!evt.target.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS)) {
      return;
    }

    const memoId = evt.target.dataset.memoId;
    const pageNo = evt.target.dataset.memoPageNo;
    evt.target.parentNode.remove();
    _readerMod.pagesInfo[pageNo - 1].removeMemo(memoId);
    _readerMod.templateData.formerList[0].pages[pageNo - 1].memos =
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos.filter(
        (memo) => memo.m_id !== memoId
      );

    _readerMod.hideMemoProperties();
  }

  memoPropertyBtnClickEventListener(evt) {
    if (!evt.target.classList.contains(_Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.MEMO_PROPERTY_BUTTON_CLASS)) {
      return;
    }

    const memoId = evt.target.dataset.memoId;
    const pageNo = evt.target.dataset.memoPageNo;
    let curMemo = null;
    for (
      let memoIdx = 0;
      memoIdx <
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos.length;
      ++memoIdx
    ) {
      let memo =
        _readerMod.templateData.formerList[0].pages[pageNo - 1].memos[memoIdx];
      if (memo.m_id === memoId) {
        curMemo = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneObject(memo);
        break;
      }
    }

    _readerMod.showMemoProperties(evt, curMemo, null);
    return;
  }

  hideMemoProperties() {
    let oldAttr = _readerMod.readerOwnerNode.querySelector(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.MAIN_GROUP_NAME + " .Editor-Attribute"
    );
    if (oldAttr !== null && oldAttr !== undefined) {
      oldAttr.remove();
    }
  }

  applyMemoProperties(
    memoId,
    pageNo,
    fontFamily,
    fontSize,
    isBold,
    fontColor,
    backgroundColor,
    isAll
  ) {
    // console.log(memoId);
    // console.log(pageNo);
    // console.log(fontFamily);
    // console.log(fontSize);
    // console.log(isBold);
    // console.log(fontColor);
    // console.log(backgroundColor);
    // console.log(isAll);

    for (
      let memoIdx = 0;
      memoIdx <
      _readerMod.templateData.formerList[0].pages[pageNo - 1].memos.length;
      ++memoIdx
    ) {
      let memo =
        _readerMod.templateData.formerList[0].pages[pageNo - 1].memos[memoIdx];
      if (isAll) {
        memo.m_fontName = fontFamily;
        memo.m_fontSize = fontSize;
        memo.m_fontColor = fontColor;
        memo.m_bold = isBold;
        memo.m_backColor = backgroundColor;
      } else {
        if (memo.m_id === memoId) {
          memo.m_fontName = fontFamily;
          memo.m_fontSize = fontSize;
          memo.m_fontColor = fontColor;
          memo.m_bold = isBold;
          memo.m_backColor = backgroundColor;
          break;
        }
      }
    }
    _readerMod.pageRefresh();
  }

  showMemoProperties(evt, memoData, changeEventFunc) {
    let oldAttr = _readerMod.readerOwnerNode.querySelector(
      "#" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.MAIN_GROUP_NAME + " .Editor-Attribute"
    );
    if (oldAttr !== null && oldAttr !== undefined) {
      oldAttr.remove();
    }

    let propertisDiv = document.createElement("div");

    var panel = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributePanelNode();

    var fontAttrRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createTextMemoAttrbuteNode(
      memoData.m_id,
      memoData.m_fontColor,
      memoData.m_bold,
      memoData.m_backColor,
      changeEventFunc
    );
    panel.appendChild(fontAttrRow.row);

    var entireRow = _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils.createAttributeToggleButtonNode(
      memoData.m_id,
      "entire",
      "Template.entrieApply",
      false,
      changeEventFunc
    );
    panel.appendChild(entireRow);

    let fontFamilyComboSelect =
      fontAttrRow.fontFamilyCombo.querySelector("select");
    $(fontFamilyComboSelect).select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
    $(fontFamilyComboSelect).val(memoData.m_fontName).trigger("change");
    $(fontFamilyComboSelect).on("change", changeEventFunc);
    let fontSizeComboSelect = fontAttrRow.fontSizeCombo.querySelector("select");
    $(fontSizeComboSelect).select2({
      minimumResultsForSearch: Infinity,
      width: "100%",
    });
    $(fontSizeComboSelect).val(memoData.m_fontSize).trigger("change");
    $(fontSizeComboSelect).on("change", changeEventFunc);

    let colorInput = fontAttrRow.colorBtn.querySelector("button");
    colorInput.style.backgroundColor = memoData.m_fontColor;
    let picker = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default())(colorInput, { color: memoData.m_fontColor });
    colorInput.value = memoData.m_fontColor;
    picker.on("change", function (r, g, b, a) {
      if (!picker.visible) {
        return;
      }
      colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
      colorInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);

      let colorTextInput =
        fontAttrRow.colorBtn.querySelector("input[type='text']");
      colorTextInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
    });
    picker.on("exit", function (r, g, b, a) {
      colorInput.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);

      let colorTextInput =
        fontAttrRow.colorBtn.querySelector("input[type='text']");
      colorTextInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
      colorTextInput.dispatchEvent(new Event("change"));
    });
    let colorInput2 = fontAttrRow.backgroundColorBtn.querySelector("button");
    colorInput2.style.backgroundColor = memoData.m_backColor;
    let picker2 = new (_utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default())(colorInput2, { color: memoData.m_backColor });
    colorInput2.value = memoData.m_backColor;
    picker2.on("change", function (r, g, b, a) {
      if (!picker2.visible) {
        return;
      }
      colorInput2.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
      colorInput2.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);

      let colorTextInput =
        fontAttrRow.backgroundColorBtn.querySelector("input[type='text']");
      colorTextInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
    });
    picker2.on("exit", function (r, g, b, a) {
      colorInput2.style.backgroundColor = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);

      let colorTextInput =
        fontAttrRow.backgroundColorBtn.querySelector("input[type='text']");
      colorTextInput.value = _utils_color_picker__WEBPACK_IMPORTED_MODULE_4___default().HEX([r, g, b, a]);
      colorTextInput.dispatchEvent(new Event("change"));
    });

    var row = document.createElement("li");
    row.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_CONTENTS_ROW_CLASS;
    var rowWrap = document.createElement("div");
    rowWrap.className = _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.EDITOR_ATTR_ROW_WRAP_CLASS;

    let applyBtn = document.createElement("button");
    applyBtn.className = "Attribute-Btn";
    applyBtn.style.marginRight = "15px";
    applyBtn.style.marginLeft = "5px";
    applyBtn.textContent = "적용";
    applyBtn.addEventListener("click", function (evt) {
      let entireSwitchParentNode = evt.target.closest("ul.Attribute-Contents");
      let entireSwitch = entireSwitchParentNode.querySelector(
        "label.Attribute-Switch-Label > input[type='checkbox']"
      );

      let fontFamily = fontAttrRow.fontFamilyCombo.querySelector(
        "select.Attribute-Select "
      ).value;
      let fontSize = fontAttrRow.fontSizeCombo.querySelector(
        "select.Attribute-Select "
      ).value;
      let isBold =
        fontAttrRow.boldBtn.querySelector("input[type='text']").value;
      let fontColor =
        fontAttrRow.colorBtn.querySelector("input[type='text']").value;
      let backColor =
        fontAttrRow.backgroundColorBtn.querySelector(
          "input[type='text']"
        ).value;
      _readerMod.applyMemoProperties(
        memoData.m_id,
        memoData.m_pageNo,
        fontFamily,
        fontSize,
        isBold,
        fontColor,
        backColor,
        entireSwitch.checked
      );
    });

    let cancelBtn = document.createElement("button");
    cancelBtn.className = "Attribute-Btn";
    cancelBtn.textContent = "닫기";
    cancelBtn.addEventListener("click", function (evt) {
      _readerMod.hideMemoProperties();
    });
    rowWrap.appendChild(applyBtn);
    rowWrap.appendChild(cancelBtn);
    row.appendChild(rowWrap);
    panel.appendChild(row);

    propertisDiv.appendChild(panel);
    propertisDiv.setAttribute("Field-id", memoData.m_id);
    propertisDiv.className = "Editor-Attribute";
    let pNode = evt.target.parentNode;
    let pgNode = _readerMod.readerOwnerNode.querySelector(
      " [data-page-number='" + memoData.m_pageNo + "']"
    );
    propertisDiv.style.top = pNode.offsetTop + 40 + "px";
    propertisDiv.style.left =
      pNode.offsetLeft + pNode.offsetWidth + pgNode.offsetLeft + 20 + "px";

    let viewer = _readerMod.readerOwnerNode.querySelector(
      " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PDF_VIEWER
    );
    viewer.appendChild(propertisDiv);
  }

  /**
   * @function addURLImageToSignArea
   * @name module:Reader/ReaderMod.ReaderMod#addURLImageToSignArea
   * @description   병욱: 서버로부터 등록된 인장 정보를 불러온다.
   *
   * @Date 2023. 12. 13
   */
  addURLImageToSignArea() {
    var imageUrl = document.getElementById("imageURLInput").value;
    _readerMod
      .getBase64ImageFromUrl(imageUrl)
      .then((base64Image) => {
        _readerMod.addImageToList(base64Image);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  addImageToList(base64Image) {
    var ul = document.querySelector(".signTypeList");
    // 기존에 class="on"이 있는 요소에서 클래스 제거
    var existingOnElement = ul.querySelector("li.on");
    if (existingOnElement) {
      existingOnElement.classList.remove("on");
    }

    // 새로운 li 요소 생성 및 추가
    var li = document.createElement("li");
    li.className = "on";
    var div = document.createElement("div");
    div.className = "canvas_wrap";
    var img = document.createElement("img");
    img.src = base64Image;

    div.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
  }

  getBase64ImageFromUrl(imageUrl) {
    return fetch(imageUrl)
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getBase64ImageFromUrlByProxyServer(imageUrl) {
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/"; // 무료 프록시 서비스 URL
    const url = proxyUrl + imageUrl;

    return fetch(url)
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // 20240131
  convertImageToBase64(imageUrl) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                resolve(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.onerror = function() {
            reject(new Error('이미지를 불러오는 동안 오류가 발생했습니다.'));
        };
        xhr.open('GET', imageUrl);
        xhr.send();
    });
  }

  // isImageURLValid(url, callback) {
  //   var img = new Image();
  //   img.onload = function() {
  //       // 이미지 로드 성공 시
  //       callback(true);
  //   };
  //   img.onerror = function() {
  //       // 이미지 로드 실패 시
  //       callback(false);
  //   };
  //   img.src = url;
  // }

  async checkImageValidity(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(true); // 이미지 로드 성공
        };
        img.onerror = function() {
            reject(false); // 이미지 로드 실패
        };
        img.src = url;
    });
  }

  clearSignTypeList() {
    // 'registeredArea' 요소에 접근
    const registeredArea = document.getElementById("registeredArea");

    // 'registeredArea' 내부의 'signTypeList'를 찾음
    const signTypeList = registeredArea.querySelector(".signTypeList");

    // 'signTypeList' 내부의 모든 'li' 요소를 삭제
    while (signTypeList.firstChild) {
      signTypeList.removeChild(signTypeList.firstChild);
    }
  }


  convertUrlsToJson(imageUrls) {
    return imageUrls.map(url => {
        return {
            img_type: "URL",
            img_src: url
        };
    });
  }

}


/***/ }),

/***/ "./js/pdf_form/src/reader/readerPageData.js":
/*!**************************************************!*\
  !*** ./js/pdf_form/src/reader/readerPageData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReaderPageData: () => (/* binding */ ReaderPageData)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/utils.js */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants.js */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _flatpickr_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../flatpickr.min.js */ "./js/pdf_form/flatpickr.min.js");
/* harmony import */ var _flatpickr_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flatpickr_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _l10n_ko_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../l10n/ko.js */ "./js/pdf_form/l10n/ko.js");
/* harmony import */ var _l10n_ko_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_l10n_ko_js__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @module Reader/ReaderMod
 */








/**
 * @description 필드 랜더링 관련 처리를 하는 Class
 *
 * @property {Callback} alertFunc {@link module:Reader/ReaderMod.ReaderPageData#alertFunc}
 * @property {Blob} checkBlob {@link module:Reader/ReaderMod.ReaderPageData#checkBlob}
 * @property {String} checkImgurl {@link module:Reader/ReaderMod.ReaderPageData#checkImgurl}
 * @property {String} checkSvg {@link module:Reader/ReaderMod.ReaderPageData#checkSvg}
 * @property {Object} datePicker {@link module:Reader/ReaderMod.ReaderPageData#datePicker}
 * @property {Object} fields {@link module:Reader/ReaderMod.ReaderPageData#fields}
 * @property {Object} m_defaultValueInfo {@link module:Reader/ReaderMod.ReaderPageData#m_defaultValueInfo}
 * @property {Element} m_ownerNode {@link module:Reader/ReaderMod.ReaderPageData#m_ownerNode}
 * @property {Boolean} m_readonly {@link module:Reader/ReaderMod.ReaderPageData#m_readonly}
 * @property {Number} pageNo {@link module:Reader/ReaderMod.ReaderPageData#pageNo}
 * @property {Blob} radioOffblob {@link module:Reader/ReaderMod.ReaderPageData#radioOffblob}
 * @property {String} radioOffImgurl {@link module:Reader/ReaderMod.ReaderPageData#radioOffImgurl}
 * @property {String} radioOffSvg {@link module:Reader/ReaderMod.ReaderPageData#radioOffSvg}
 * @property {Blob} radioOnblob {@link module:Reader/ReaderMod.ReaderPageData#radioOnblob}
 * @property {String} radioOnImgurl {@link module:Reader/ReaderMod.ReaderPageData#radioOnImgurl}
 * @property {String} radioOnSvg {@link module:Reader/ReaderMod.ReaderPageData#radioOnSvg}
 *
 * @property {Function} createCheckboxField {@link module:Reader/ReaderMod.ReaderPageData#createCheckboxField}
 * @property {Function} createComboboxField {@link module:Reader/ReaderMod.ReaderPageData#createComboboxField}
 * @property {Function} createField {@link module:Reader/ReaderMod.ReaderPageData#createField}
 * @property {Function} createFieldDiv {@link module:Reader/ReaderMod.ReaderPageData#createFieldDiv}
 * @property {Function} createFieldLayer {@link module:Reader/ReaderMod.ReaderPageData#createFieldLayer}
 * @property {Function} createImageField {@link module:Reader/ReaderMod.ReaderPageData#createImageField}
 * @property {Function} createLabelField {@link module:Reader/ReaderMod.ReaderPageData#createLabelField}
 * @property {Function} createMultilineTextField {@link module:Reader/ReaderMod.ReaderPageData#createMultilineTextField}
 * @property {Function} createRadioField {@link module:Reader/ReaderMod.ReaderPageData#createRadioField}
 * @property {Function} createSignField {@link module:Reader/ReaderMod.ReaderPageData#createSignField}
 * @property {Function} createTextField {@link module:Reader/ReaderMod.ReaderPageData#createTextField}
 * @property {Function} getField {@link module:Reader/ReaderMod.ReaderPageData#getField}
 * @property {Function} isRequiredFieldValueEmpty {@link module:Reader/ReaderMod.ReaderPageData#isRequiredFieldValueEmpty}
 * @property {Function} pushField {@link module:Reader/ReaderMod.ReaderPageData#pushField}
 * 
 * @FileName ReaderPageData.js
 * @since 2021.05.31
 */
class ReaderPageData {
  /**
   * @constructor
   * @param {Number} pageNo 랜더링 하는 페이지 번호
   * @param {Object} defaultValueInfo 서명자의 기본 정보들이 들어있는 Object
   * @param {Element} ownerNode 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
   * @param {Callback} customAlertFunc 알림창 호출을 위한 Callback function
   * @param {Boolean} readonly 입력을 받지 않고 읽기 전용 모드로 사용할때를 위한 변수
   *
   */
  constructor(
    pageNo,
    defaultValueInfo,
    ownerNode,
    customAlertFunc = null,
    readonly = false,
    signCanvas = null
  ) {
    /**
     * @type {Number}
     * @name module:Reader/ReaderMod.ReaderPageData#pageNo
     * @description 랜더링 하는 페이지 번호
     */
    this.pageNo = pageNo;

    /**
     * @type {Object}
     * @name module:Reader/ReaderMod.ReaderPageData#fields
     * @description 랜더링할 필드 정보
     */
    this.fields = {};

    /**
     * @type {Object}
     * @name module:Reader/ReaderMod.ReaderPageData#memos
     * @description 랜더링할 메모 정보
     */
    this.memos = {};

    /**
     * @type {Object}
     * @name module:Reader/ReaderMod.ReaderPageData#datePicker
     * @description 캘린더 팝업창 Object
     */
    this.datePicker = undefined;

    /**
     * @type {Object}
     * @name module:Reader/ReaderMod.ReaderPageData#m_defaultValueInfo
     * @description 서명자의 기본 정보들이 들어있는 Object
     */
    this.m_defaultValueInfo = defaultValueInfo;

    /**
     * @type {Element}
     * @name module:Reader/ReaderMod.ReaderPageData#m_ownerNode
     * @description 이 프로젝트가 포함될 Element의 부모 HTML ELEMENT
     */
    this.m_ownerNode = ownerNode;

    /**
     * @type {Boolean}
     * @name module:Reader/ReaderMod.ReaderPageData#m_readonly
     * @description 랜더링한 입력 창들을 읽기전용으로 만들지에 대한 여부
     */
    this.m_readonly = readonly;

    /**
     * @type {Callback}
     * @name module:Reader/ReaderMod.ReaderPageData#alertFunc
     * @description 알림창 호출을 위한 Callback function
     */
    this.alertFunc = customAlertFunc;

    this.signCanvas = signCanvas;

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#checkSvg
     * @description 체크 모양을 표현하기 위한 SVG 이미지 데이터.
     */
    let checkSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M17.2 32.2L4.9 19.9 0 24.8 17.2 42 48 10.9 43.1 6z"/></svg >';

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOnSvg
     * @description 라디오의 선택되었을 때 모양을 표현하기 위한 SVG 이미지 데이터.
     */
    let radioOnSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">\
            <path d="M24,12c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S30.6,\
            12,24,12zM24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.2,0,24,0zM24,43.2C13.4,43.2,4.8,34.6,4.8,24S13.4,\
            4.8,24,4.8S43.2,13.4,43.2,24S34.6,43.2,24,43.2z"/></svg >';

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOffSvg
     * @description 라디오의 선택 안되었을 때 모양을 표현하기 위한 SVG 이미지 데이터.
     */
    let radioOffSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">\
            <path d="M24,0C10.8,0,0,10.8,0,24s10.8,24,24,24s24-10.8,24-24S37.2,0,24,0zM24,43.2C13.4,43.2,4.8,34.6,4.8,24S13.4,\
            4.8,24,4.8S43.2,13.4,43.2,24S34.6,43.2,24,43.2z"/></svg >';

    /**
     * @type {Blob}
     * @name module:Reader/ReaderMod.ReaderPageData#checkBlob
     * @description 체크 SVG의 Blob 데이터.
     */
    let checkBlob = new Blob([checkSvg], { type: "image/svg+xml" });

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#checkImgurl
     * @description 체크 SVG의 현재 URL에서만 유효한 임시 URL
     */
    this.checkImgurl = URL.createObjectURL(checkBlob);

    /**
     * @type {Blob}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOnblob
     * @description 라디오가 선택되었을 때 SVG의 Blob 데이터.
     */
    let radioOnblob = new Blob([radioOnSvg], { type: "image/svg+xml" });

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOnImgurl
     * @description 라디오가 선택되었을 때 SVG의 현재 URL에서만 유효한 임시 URL
     */
    this.radioOnImgurl = URL.createObjectURL(radioOnblob);

    /**
     * @type {Blob}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOffblob
     * @description 라디오가 선택 안되었을 때 SVG의 Blob 데이터.
     */
    let radioOffblob = new Blob([radioOffSvg], { type: "image/svg+xml" });

    /**
     * @type {String}
     * @name module:Reader/ReaderMod.ReaderPageData#radioOffImgurl
     * @description 라디오가 선택 안되었을 때 SVG의 현재 URL에서만 유효한 임시 URL
     */
    this.radioOffImgurl = URL.createObjectURL(radioOffblob);

    this.memoPropeties = {
      fontFamily: "MalgunGothic",
      fontSize: 16,
      fontColor: "#000000",
      backColor: "#33333333",
      isBold: false,
    };
  }

  /**
   * @function pushMemo
   * @name module:Reader/ReaderMod.ReaderPageData#pushMemo
   * @description 필드Object를 추가한다.
   *
   * @param {String} fieldKey  필드의 고유ID
   * @param {Object} field  필드 Object
   * @Date  2021. 5. 31
   */
  pushMemo(memoKey, memo) {
    this.memos[memoKey] = memo;
  }

  removeMemo(memoKey) {
    delete this.memos[memoKey];
  }

  /**
   * @function pushField
   * @name module:Reader/ReaderMod.ReaderPageData#pushField
   * @description 필드Object를 추가한다.
   *
   * @param {String} fieldKey  필드의 고유ID
   * @param {Object} field  필드 Object
   * @Date  2021. 5. 31
   */
  pushField(fieldKey, field) {
    this.fields[fieldKey] = field;
  }

  /**
   * @function pushField
   * @name module:Reader/ReaderMod.ReaderPageData#getField
   * @description 해당하는 키의 필드Object를 리턴한다.
   *
   * @param {String} fieldKey  필드의 고유ID
   * @return {Object}  필드 Object
   * @Date  2021. 5. 31
   */
  getField(fieldKey) {
    return this.fields[fieldKey];
  }

  /**
   * @function isRequiredFieldValueEmpty
   * @name module:Reader/ReaderMod.ReaderPageData#isRequiredFieldValueEmpty
   * @description 필수 필드가 비어있는지 여부를 반환한다.
   *
   * @return boolean: 필수 필드가 비어있는지 여부
   * @Date 2021. 5. 31
   */
  isRequiredFieldValueEmpty() {
    const keys = Object.keys(this.fields);
    for (var idx = 0; idx < keys.length; ++idx) {
      const field = this.fields[keys[idx]];
      if (field.m_required === "true") {
        let fieldDiv = this.m_ownerNode.querySelector(
          "#" + field.m_id + "_div"
        );
        if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_value)) {
          fieldDiv.classList.add("EmptyField");
          let fieldDivRect = fieldDiv.getBoundingClientRect();
          let viewerContainer = this.m_ownerNode.querySelector(
            " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_PDF_VIEWER_CONTAINER
          );
          let viewerContainerRect = viewerContainer.getBoundingClientRect();
          if (viewerContainer === null) {
            viewerContainer = this.m_ownerNode.querySelector(
              " #" + _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.PREVIEW_READER_PDF_VIEWER_CONTAINER
            );
          }
          let scrollPosition =
            viewerContainer.scrollTop +
            fieldDivRect.top -
            viewerContainerRect.top;
          viewerContainer.scrollTop =
            scrollPosition - viewerContainerRect.height / 2;

          return true;
        } else {
          if (
            fieldDiv !== null &&
            fieldDiv.classList !== undefined &&
            fieldDiv.classList.contains("EmptyField")
          ) {
            fieldDiv.classList.toggle("EmptyField");
          }
        }
      }
    }
    return false;
  }

  // isRequiredFieldValueEmpty() {
  //     const keys = Object.keys(this.fields);
  //     for (var idx = 0; idx < keys.length; ++idx) {
  //         const field = this.fields[keys[idx]];
  //         if (field.m_required === "true") {
  //             let fieldDiv = this.m_ownerNode.querySelector("#" + field.m_id + "_div");
  //             if (Utils.isStringEmpty(field.m_value)) {
  //                 fieldDiv.classList.add("EmptyField");
  //                 let bbox = fieldDiv.getBoundingClientRect();
  //                 let viewerContainer = this.m_ownerNode.querySelector(" #" + CONSTANTS.READER_PDF_VIEWER_CONTAINER);
  //                 if (viewerContainer === null) {
  //                     viewerContainer = this.m_ownerNode.querySelector(" #" + CONSTANTS.PREVIEW_READER_PDF_VIEWER_CONTAINER);
  //                 }
  //                 viewerContainer.scrollTop = bbox.y;
  //                 return true;
  //             } else {
  //                 if (fieldDiv !== null &&
  //                     fieldDiv.classList !== undefined &&
  //                     fieldDiv.classList.contains("EmptyField")) {
  //                     fieldDiv.classList.toggle("EmptyField");
  //                 }
  //             }
  //         }
  //     }
  //     return false;
  // }

  /**
   * @function createFieldLayer
   * @name module:Reader/ReaderMod.ReaderPageData#createFieldLayer
   * @description  필드를 올릴 레이어를 생성하여 반환한다.
   *
   * @param {Number} width   페이지 width
   * @param {Number} height   페이지 height
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createFieldLayer(width, height, className) {
    let fieldLayer = document.createElement("div");
    fieldLayer.style.position = "absolute";
    fieldLayer.style.left = "0px";
    fieldLayer.style.top = "0px";
    fieldLayer.style.width = width;
    fieldLayer.style.height = height;
    fieldLayer.className = className;
    return fieldLayer;
  }

  /**
   * @function createMemoDiv
   * @name module:Reader/ReaderMod.ReaderPageData#createMemoDiv
   * @description 필드 레이어 위에 올라가 필드를 생성한다.
   *
   * @param {Object} _thisPage object this obejct
   * @param {Object} memo memo 정보
   * @param {Object} viewport   랜더링되는 PDF Page의 viewport
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createMemoDiv(
    _thisPage,
    memo,
    viewport,
    deleteBtnClickEventListener,
    memoPropertyBtnClickEventListener
  ) {
    const viewportXY = viewport.convertToViewportPoint(
      memo.m_pdfX,
      memo.m_pdfY
    );
    const viewportXY2 = viewport.convertToViewportPoint(
      memo.m_pdfX2,
      memo.m_pdfY2
    );
    const memoMargin = 10;

    const newX = viewportXY[0];
    const newY = viewportXY[1];
    const newX2 = viewportXY2[0];
    const newY2 = viewportXY2[1];
    const newW = Math.abs(newX2 - newX);
    const newH = Math.abs(newY2 - newY);
    let memoDiv = document.createElement("div");
    memoDiv.style.position = "absolute";
    memoDiv.style.left = newX - memoMargin + "px";
    memoDiv.style.top = newY - memoMargin + "px";
    memoDiv.style.width = newW + memoMargin + "px";
    memoDiv.style.height = newH + memoMargin + "px";
    memoDiv.id = memo.m_id + "_div";

    memoDiv.style.backgroundColor = memo.m_backColor;
    memoDiv.style.outlineColor = memo.m_backColor;
    memoDiv.style.outlineStyle = "solid";
    memoDiv.style.outlineWidth = "1px";
    const orgWidth = Math.abs(memo.m_pdfX - memo.m_pdfX2);
    const orgHeight = Math.abs(memo.m_pdfY - memo.m_pdfY2);
    const xScale = newW / orgWidth;
    const yScale = newH / orgHeight;

    let multilineTextField = document.createElement("textarea");
    multilineTextField.style.position = "absolute";
    multilineTextField.style.left = "5px";
    multilineTextField.style.top = "5px";
    multilineTextField.style.border = "none";
    multilineTextField.style.width = newW + "px";
    multilineTextField.style.height = newH + "px";
    multilineTextField.style.fontFamily = memo.m_fontName;
    multilineTextField.style.fontSize = memo.m_fontSize * xScale + "px";
    multilineTextField.style.color = memo.m_fontColor;
    multilineTextField.style.textAlign = memo.m_textAlign;

    if (memo.m_readonly) {
      multilineTextField.readOnly = true;
    }
    if (memo.m_bold === "true") {
      multilineTextField.style.fontWeight = "bold";
    }
    multilineTextField.innerHTML = memo.m_value;
    multilineTextField.style.backgroundColor = "transparent";

    multilineTextField.style.resize = "none";
    multilineTextField.addEventListener(
      "change",
      function (evt) {
        // console.log(evt.target.value);
        memo.m_value = evt.target.value.replaceAll("\n", "&#13;&#10;");
        //  console.log(memo.m_value);
      },
      true
    );

    memoDiv.appendChild(multilineTextField);

    jQuery(memoDiv)
      .draggable({
        containment: "parent",
        stop: function (event, ui) {
          let point1 = viewport.convertToPdfPoint(
            ui.position.left + memoMargin,
            ui.position.top + memoMargin
          );
          memo.m_pdfX = point1[0];
          memo.m_pdfY = point1[1];
          let point2 = viewport.convertToPdfPoint(
            ui.position.left + memoMargin + newW,
            ui.position.top + memoMargin + newH
          );
          memo.m_pdfX2 = point2[0];
          memo.m_pdfY2 = point2[1];
        },
      })
      .resizable({
        containment: "parent",
        alsoResize: jQuery(multilineTextField),
        resize: function (event, ui) {
          let point1 = viewport.convertToPdfPoint(
            ui.position.left + memoMargin,
            ui.position.top + memoMargin
          );
          memo.m_pdfX = point1[0];
          memo.m_pdfY = point1[1];
          let point2 = viewport.convertToPdfPoint(
            ui.position.left + memoMargin + ui.size.width - memoMargin,
            ui.position.top + memoMargin + ui.size.height - memoMargin
          );
          memo.m_pdfX2 = point2[0];
          memo.m_pdfY2 = point2[1];
          memo.m_width = ui.size.width;
          memo.m_height = ui.size.height;
        },
      });

    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS);
    deleteBtnDiv.dataset.memoId = memo.m_id;
    deleteBtnDiv.dataset.memoPageNo = memo.m_pageNo;

    deleteBtnDiv.addEventListener("click", deleteBtnClickEventListener);
    memoDiv.appendChild(deleteBtnDiv);

    let propertyBtnDiv = document.createElement("div");
    propertyBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.MEMO_PROPERTY_BUTTON_CLASS);
    propertyBtnDiv.dataset.memoId = memo.m_id;
    propertyBtnDiv.dataset.memoPageNo = memo.m_pageNo;

    propertyBtnDiv.addEventListener("click", memoPropertyBtnClickEventListener);
    memoDiv.appendChild(propertyBtnDiv);
    return memoDiv;
  }

  /**
   * @function createFieldDiv
   * @name module:Reader/ReaderMod.ReaderPageData#createFieldDiv
   * @description 필드 레이어 위에 올라가 필드를 생성한다.
   *
   * @param {Object} _thisPage object this obejct
   * @param {Object} field Field 정보
   * @param {Object} viewport   랜더링되는 PDF Page의 viewport
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createFieldDiv(_thisPage, field, viewport, fieldWraper) {
    const viewportXY = viewport.convertToViewportPoint(
      field.m_pdfX,
      field.m_pdfY
    );
    const viewportXY2 = viewport.convertToViewportPoint(
      field.m_pdfX2,
      field.m_pdfY2
    );

    const newX = viewportXY[0];
    const newY = viewportXY[1];
    const newX2 = viewportXY2[0];
    const newY2 = viewportXY2[1];
    const newW = Math.abs(newX2 - newX);
    const newH = Math.abs(newY2 - newY);
    let fieldDiv = document.createElement("div");
    fieldDiv.style.position = "absolute";
    fieldDiv.style.left = newX + "px";
    fieldDiv.style.top = newY + "px";
    fieldDiv.style.width = newW + "px";
    fieldDiv.style.height = newH + "px";
    fieldDiv.id = field.m_id + "_div";

    fieldDiv.style.backgroundColor = "rgba(0, 158, 218, 0.2)";
    fieldDiv.style.outlineColor = "#91aaba";
    fieldDiv.style.outlineStyle = "dashed";
    fieldDiv.style.outlineWidth = "1px";

    //1206 병욱 추가 : 포커스시 경계선 색 변화해서 표시
    fieldDiv.addEventListener(
      "focus",
      function (event) {
        //console.log("Div 내부의 요소가 포커스되었습니다.");
        fieldDiv.style.outlineColor = "rgb(13 63 250 / 88%)";
        fieldDiv.style.outlineWidth = "3px";
      },
      true
    );
    fieldDiv.addEventListener(
      "blur",
      function (event) {
        //console.log("Div 내부의 요소가 blur(포커스 해제)되었습니다.");
        fieldDiv.style.outlineColor = "#91aaba";
        fieldDiv.style.outlineWidth = "1px";
      },
      true
    );
    const orgWidth = Math.abs(field.m_pdfX - field.m_pdfX2);
    const orgHeight = Math.abs(field.m_pdfY - field.m_pdfY2);
    const xScale = newW / orgWidth;
    const yScale = newH / orgHeight;

    switch (field.m_type) {
      case "TextField":
      case "NumberField":
      case "DateField": {
        let textFieldDiv = _thisPage.createTextField(
          field,
          newW,
          newH,
          xScale,
          _thisPage
        );
        fieldDiv.appendChild(textFieldDiv);
        if (field.m_type === "NumberField" && field.m_useCalc === "true") {
          textFieldDiv.addEventListener("focus", () => {
            _thisPage.showCalc(textFieldDiv, newX, newY, newH, fieldWraper);
          });
        }
        break;
      }
      case "MultiLineTextField": {
        let multilineTextField = _thisPage.createMultilineTextField(
          field,
          newW,
          newH,
          xScale,
          _thisPage
        );
        fieldDiv.appendChild(multilineTextField);
        break;
      }
      case "LabelField": {
        let labelField = _thisPage.createLabelField(
          field,
          newW,
          newH,
          xScale,
          _thisPage
        );
        fieldDiv.appendChild(labelField);
        break;
      }
      case "SignField": {
        let signFieldDiv = _thisPage.createSignField(
          field,
          newW,
          newH,
          _thisPage,
          field.m_useDrawSign,
          field.m_useImageSign,
          field.m_useRegSign,
          field.m_regSignApiUrl
        );
        fieldDiv.appendChild(signFieldDiv);
        break;
      }
      case "ImageField": {
        let imgFieldDiv = _thisPage.createImageField(
          field,
          newW,
          newH,
          _thisPage
        );
        fieldDiv.appendChild(imgFieldDiv);
        break;
      }
      case "CheckboxField": {
        let checkboxFieldDiv = _thisPage.createCheckboxField(
          field,
          newW,
          newH,
          _thisPage
        );
        fieldDiv.appendChild(checkboxFieldDiv);
        break;
      }
      case "RadioField": {
        let radioFieldDiv = _thisPage.createRadioField(
          field,
          newW,
          newH,
          _thisPage
        );
        fieldDiv.appendChild(radioFieldDiv);
        break;
      }
      case "ComboboxField": {
        let comboboxFieldDiv = _thisPage.createComboboxField(
          field,
          newW,
          newH,
          _thisPage
        );
        fieldDiv.appendChild(comboboxFieldDiv);
        break;
      }
    }
    return fieldDiv;
  }

  /**
   * @function createField
   * @name module:Reader/ReaderMod.ReaderPageData#createField
   * @description 필드레이어를 생성하고 필드를 만든다.
   *
   * @param pageNode PDF.js에서 생성된 page Element
   * @param {Object} viewport 랜더링되는 PDF Page의 viewport
   * @param {Number} 현재 모드 mode
   * @Date : 2021. 5. 31
   */
  createField(
    pageNode,
    viewport,
    readerMode,
    deleteBtnClickEventListener,
    memoPropertyBtnClickEventListener
  ) {
    let _renderPageData = this;
    let oldFieldLayer = pageNode.querySelector(
      "." + _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_PAGE_FIELD_LAYER_CLASS
    );
    if (oldFieldLayer !== null && oldFieldLayer !== undefined) {
      pageNode.removeChild(oldFieldLayer);
    }
    const keys = Object.keys(_renderPageData.fields);
    let fieldLayer = _renderPageData.createFieldLayer(
      pageNode.style.width,
      pageNode.style.height,
      _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_PAGE_FIELD_LAYER_CLASS
    );
    if (readerMode !== _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_FIELD_INPUT_MODE) {
      fieldLayer.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.NO_EVENT_LAYER);
    }
    pageNode.appendChild(fieldLayer);
    let fieldWraper = null;
    if (keys.length > 0) {
      fieldWraper = document.createElement("div");
      fieldWraper.style.position = "relative";
      fieldWraper.style.width = "100%";
      fieldWraper.style.height = "100%";
      fieldLayer.appendChild(fieldWraper);
    }

    var _thisPage = this;
    keys.forEach(function (key) {
      var field = _renderPageData.fields[key];
      let fieldDiv = _renderPageData.createFieldDiv(
        _thisPage,
        field,
        viewport,
        fieldWraper
      );
      fieldWraper.appendChild(fieldDiv);
    });

    let oldMemoLayer = pageNode.querySelector(
      "." + _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS
    );
    if (oldMemoLayer !== null && oldMemoLayer !== undefined) {
      pageNode.removeChild(oldMemoLayer);
    }
    let memoLayer = _renderPageData.createFieldLayer(
      pageNode.style.width,
      pageNode.style.height,
      _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_PAGE_MEMO_LAYER_CLASS
    );
    if (readerMode === _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.READER_FIELD_INPUT_MODE) {
      memoLayer.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.NO_EVENT_LAYER);
    }
    pageNode.appendChild(memoLayer);
    let memoWraper = document.createElement("div");
    memoWraper.style.position = "relative";
    memoWraper.style.width = "100%";
    memoWraper.style.height = "100%";
    memoLayer.appendChild(memoWraper);

    const memoKeys = Object.keys(_renderPageData.memos);
    memoKeys.forEach(function (key) {
      let memo = _renderPageData.memos[key];
      let memoDiv = _renderPageData.createMemoDiv(
        _thisPage,
        memo,
        viewport,
        deleteBtnClickEventListener,
        memoPropertyBtnClickEventListener
      );
      memoWraper.appendChild(memoDiv);
    });
  }

  /**
   * @function createTextField
   * @name module:Reader/ReaderMod.ReaderPageData#createTextField
   * @description 텍스트 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Number} fontScale 폰트 크기의 배율
   * @param {Number} page  Pdf Page Number
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createTextField(field, width, height, fontScale, page) {
    let textFieldDiv = document.createElement("input");
    textFieldDiv.style.position = "absolute";
    textFieldDiv.style.left = "0px";
    textFieldDiv.style.top = "0px";
    textFieldDiv.style.border = "none";
    textFieldDiv.style.width = width + "px";
    textFieldDiv.style.height = height + "px";
    textFieldDiv.style.fontFamily = field.m_fontName;
    textFieldDiv.style.fontSize = field.m_fontSize * fontScale + "px";
    textFieldDiv.style.color = field.m_fontColor;
    textFieldDiv.style.textAlign = field.m_textAlign;

    if (this.m_readonly) {
      textFieldDiv.readOnly = true;
    }

    if (field.m_bold === "true") {
      textFieldDiv.style.fontWeight = "bold";
    }
    textFieldDiv.value = field.m_value;
    //rgb(0 158 218 / 20%);
    //1px dashed #91aaba;
    textFieldDiv.style.backgroundColor = "transparent";
    textFieldDiv.addEventListener(
      "change",
      function (evt) {
        // console.log(field.m_inputMin);
        // console.log(evt.target.value);
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_inputMin)) {
          if (Number(evt.target.value) < Number(field.m_inputMin)) {
            evt.target.value = field.m_inputMin;
            field.m_value = evt.target.value;
            alert("입력 범위를 벗어났습니다.\n다시 입력해주세요.");
            return false;
          }
        }
        if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_inputMax)) {
          if (Number(evt.target.value) > Number(field.m_inputMax)) {
            evt.target.value = field.m_inputMax;
            field.m_value = evt.target.value;
            alert("입력 범위를 벗어났습니다.\n다시 입력해주세요.");
            return false;
          }
        }
        field.m_value = evt.target.value;
      },
      true
    );

    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_defaultValue)) {
      let dvValue = this.m_defaultValueInfo[field.m_defaultValue];
      if (dvValue !== undefined) {
        textFieldDiv.value = dvValue;
        field.m_value = dvValue;
      }
    }

    if (field.m_type === "DateField") {
      let dvValue = null;
      if (field.m_useCurrentDate === "true") {
        dvValue = new Date();
        field.m_value = _flatpickr_min_js__WEBPACK_IMPORTED_MODULE_2___default().formatDate(dvValue, field.m_inputFormat);
      }
      page.datePicker = _flatpickr_min_js__WEBPACK_IMPORTED_MODULE_2___default()(textFieldDiv, {
        locale: _l10n_ko_js__WEBPACK_IMPORTED_MODULE_3__.Korean,
        dateFormat: field.m_inputFormat,
        defaultDate: dvValue,
        minDate: field.m_inputMin,
        maxDate: field.m_inputMax,
        onClose: function (selectedDates, dateStr, instance) {
          field.m_value = dateStr;
        },
      });
    } else if (field.m_type === "NumberField") {
      textFieldDiv.type = "number";
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_inputMax)) {
        textFieldDiv.max = Number(field.m_inputMax);
      }
      if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_inputMin)) {
        textFieldDiv.min = Number(field.m_inputMin);
      }
    }
    return textFieldDiv;
  }

  showCalc(fieldInput, fieldDivX, fieldDivY, fieldDivH, fieldWraper) {
    let oldCalc = fieldWraper.querySelector(".CalcContainer");
    if (oldCalc !== null && oldCalc !== undefined) {
      oldCalc.remove();
    }

    let calcContainer = document.createElement("div");
    calcContainer.className = "CalcContainer";
    let calcForm = document.createElement("form");
    calcForm.name = "CalcForm";
    let displayDiv = document.createElement("div");
    displayDiv.className = "CalcDisplay";
    let displayResultInput = document.createElement("input");
    displayResultInput.type = "text";
    displayResultInput.placeholder = "0";
    displayResultInput.name = "CalcDisplayResult";
    displayDiv.appendChild(displayResultInput);
    calcForm.appendChild(displayDiv);

    let calcButtonsDiv = document.createElement("div");
    calcButtonsDiv.className = "CalcButtons";
    let calcRow1 = document.createElement("div");
    calcRow1.className = "CalcRow";
    let calcB7 = document.createElement("input");
    calcB7.type = "button";
    calcB7.value = "7";
    calcB7.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB7.value;
    });
    let calcB8 = document.createElement("input");
    calcB8.type = "button";
    calcB8.value = "8";
    calcB8.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB8.value;
    });
    let calcB9 = document.createElement("input");
    calcB9.type = "button";
    calcB9.value = "9";
    calcB9.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB9.value;
    });
    let calcAddB = document.createElement("input");
    calcAddB.type = "button";
    calcAddB.value = "+";
    calcAddB.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcAddB.value;
    });
    calcRow1.appendChild(calcB7);
    calcRow1.appendChild(calcB8);
    calcRow1.appendChild(calcB9);
    calcRow1.appendChild(calcAddB);

    let calcRow2 = document.createElement("div");
    calcRow2.className = "CalcRow";
    let calcB4 = document.createElement("input");
    calcB4.type = "button";
    calcB4.value = "4";
    calcB4.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB4.value;
    });
    let calcB5 = document.createElement("input");
    calcB5.type = "button";
    calcB5.value = "5";
    calcB5.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB5.value;
    });
    let calcB6 = document.createElement("input");
    calcB6.type = "button";
    calcB6.value = "6";
    calcB6.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB6.value;
    });
    let calcSubB = document.createElement("input");
    calcSubB.type = "button";
    calcSubB.value = "-";
    calcSubB.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcSubB.value;
    });
    calcRow2.appendChild(calcB4);
    calcRow2.appendChild(calcB5);
    calcRow2.appendChild(calcB6);
    calcRow2.appendChild(calcSubB);

    let calcRow3 = document.createElement("div");
    calcRow3.className = "CalcRow";
    let calcB1 = document.createElement("input");
    calcB1.type = "button";
    calcB1.value = "1";
    calcB1.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB1.value;
    });
    let calcB2 = document.createElement("input");
    calcB2.type = "button";
    calcB2.value = "2";
    calcB2.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB2.value;
    });
    let calcB3 = document.createElement("input");
    calcB3.type = "button";
    calcB3.value = "3";
    calcB3.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB3.value;
    });
    let calcMulB = document.createElement("input");
    calcMulB.type = "button";
    calcMulB.value = "*";
    calcMulB.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcMulB.value;
    });
    calcRow3.appendChild(calcB1);
    calcRow3.appendChild(calcB2);
    calcRow3.appendChild(calcB3);
    calcRow3.appendChild(calcMulB);

    let calcRow4 = document.createElement("div");
    calcRow4.className = "CalcRow";
    let calcB0 = document.createElement("input");
    calcB0.type = "button";
    calcB0.value = "0";
    calcB0.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcB0.value;
    });
    let calcACB = document.createElement("input");
    calcACB.type = "button";
    calcACB.value = "AC";
    calcACB.addEventListener("click", () => {
      displayResultInput.value = "";
    });
    let calcDivB = document.createElement("input");
    calcDivB.type = "button";
    calcDivB.value = "/";
    calcDivB.addEventListener("click", () => {
      displayResultInput.value = displayResultInput.value + calcDivB.value;
    });
    let calcEqualB = document.createElement("input");
    calcEqualB.type = "button";
    calcEqualB.value = "=";
    calcEqualB.addEventListener("click", function () {
      displayResultInput.value = eval(displayResultInput.value);
      fieldInput.value = displayResultInput.value;
      fieldInput.dispatchEvent(new Event("change"));
    });
    calcRow4.appendChild(calcB0);
    calcRow4.appendChild(calcACB);
    calcRow4.appendChild(calcDivB);
    calcRow4.appendChild(calcEqualB);

    calcButtonsDiv.appendChild(calcRow1);
    calcButtonsDiv.appendChild(calcRow2);
    calcButtonsDiv.appendChild(calcRow3);
    calcButtonsDiv.appendChild(calcRow4);
    calcForm.appendChild(calcButtonsDiv);
    calcContainer.appendChild(calcForm);
    calcContainer.style.position = "absolute";
    calcContainer.style.left = fieldDivX + "px";
    calcContainer.style.top = fieldDivY + fieldDivH + 10 + "px";

    let closeBtnDiv = document.createElement("div");
    closeBtnDiv.classList.add(_Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.FIELD_DELETE_BUTTON_CLASS);

    calcContainer.appendChild(closeBtnDiv);

    closeBtnDiv.addEventListener("click", () => {
      let oldCalc = fieldWraper.querySelector(".CalcContainer");
      if (oldCalc !== null && oldCalc !== undefined) {
        oldCalc.remove();
      }
    });

    fieldWraper.appendChild(calcContainer);
  }

  /**
   * @function createMultilineTextField
   * @name module:Reader/ReaderMod.ReaderPageData#createMultilineTextField
   * @description 멀티라인 텍스트 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Number} fontScale 폰트 크기의 배율
   * @param {Number} page  Pdf Page Number
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createMultilineTextField(field, width, height, fontScale, page) {
    let multilineTextField = document.createElement("textarea");
    multilineTextField.style.position = "absolute";
    multilineTextField.style.left = "0px";
    multilineTextField.style.top = "0px";
    multilineTextField.style.border = "none";
    multilineTextField.style.width = width + "px";
    multilineTextField.style.height = height + "px";
    multilineTextField.style.fontFamily = field.m_fontName;
    multilineTextField.style.fontSize = field.m_fontSize * fontScale + "px";
    multilineTextField.style.color = field.m_fontColor;
    multilineTextField.style.textAlign = field.m_textAlign;

    if (field.m_readonly) {
      multilineTextField.readOnly = true;
    }
    if (field.m_bold === "true") {
      multilineTextField.style.fontWeight = "bold";
    }
    multilineTextField.value = field.m_value;
    multilineTextField.style.backgroundColor = "transparent";

    multilineTextField.style.resize = "none";
    multilineTextField.addEventListener(
      "change",
      function (evt) {
        field.m_value = evt.target.value;
        // console.log(field.m_value);
      },
      true
    );

    return multilineTextField;
  }

  /**
   * @function createSignField
   * @name module:Reader/RecreateSignFieldaderMod.ReaderPageData#createSignField
   * @description  서명 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Object} _thisPage  this RenderPageData Object
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createSignField(
    field,
    width,
    height,
    _thisPage,
    drawSign,
    imageSign,
    regSign,
    regSignApiUrl
  ) {
    let signFieldDiv = document.createElement("canvas");
    signFieldDiv.style.position = "absolute";
    signFieldDiv.style.left = "0px";
    signFieldDiv.style.top = "0px";
    signFieldDiv.style.width = width + "px";
    signFieldDiv.style.height = height + "px";
    signFieldDiv.style.border = "none";
    signFieldDiv.id = field.m_id + "_canvas";
    //textFieldDiv.style.backgroundColor = "transparent";

    if (!this.m_readonly) {
      signFieldDiv.addEventListener(
        "click",
        function (evt) {
          let popupDiv = _thisPage.m_ownerNode.querySelector(" #signElement");

            let layerPop = popupDiv.querySelector(".Sign-Layerpop");
            layerPop.setAttribute("fieldId", field.m_id);
            layerPop.setAttribute("pageNo", field.m_pageNo);
            layerPop.setAttribute("signWidth", width);
            layerPop.setAttribute("signHeight", height);

            /*2023-12-14 */
            layerPop.setAttribute("drawSign", drawSign);
            layerPop.setAttribute("imageSign", imageSign);
            layerPop.setAttribute("regSign", regSign);
            layerPop.setAttribute("regSignApiUrl", regSignApiUrl);

          if (popupDiv.classList.contains("Template-Hide")) {
            popupDiv.classList.toggle("Template-Hide");
            popupDiv.dispatchEvent(new Event("change"));
          }

          
          // Sign-Layerpop 요소를 찾아 해당 데이터 속성을 가져옵니다.
          var drawSignFlag = layerPop.getAttribute("drawsign") === "true";
          var imageSignFlag = layerPop.getAttribute("imagesign") === "true";
          var regSignFlag = layerPop.getAttribute("regsign") === "true";

          // 각 탭에 대한 표시 여부를 설정합니다.
          var drawTab = document.getElementById("signDrawTabButton");
          var imageTab = document.getElementById("stampSignTabButton");
          var regTab = document.getElementById("registeredSignTabButton");

          drawTab.style.display = drawSignFlag ? "" : "none";
          imageTab.style.display = imageSignFlag ? "" : "none";
          regTab.style.display = regSignFlag ? "" : "none";

          // 기존에 'on' 클래스를 가진 탭에서 클래스 제거
          document
            .querySelectorAll(".Popup-Tab-Main li")
            .forEach((tab) => tab.classList.remove("on"));

          // 가장 먼저 나타나는 활성화 탭을 찾아 'on' 클래스 추가 및 클릭 이벤트 발생
          if (drawSignFlag && drawTab.style.display !== "none") {
            drawTab.classList.add("on");
            drawTab.click();
          } else if (imageSignFlag && imageTab.style.display !== "none") {
            imageTab.classList.add("on");
            imageTab.click();
          } else if (regSignFlag && regTab.style.display !== "none") {
            regTab.classList.add("on");
            regTab.click();
          }
         

          _thisPage.signCanvas.freeDrawingBrush.width =
            field.m_signPenThickness;
          _thisPage.signCanvas.freeDrawingBrush.color = field.m_signPenColor;
        },
        true
      );
    }

    //console.log(field.m_value);
    if (
      field.m_value !== "" &&
      field.m_value !== undefined &&
      field.m_value !== null
    ) {
      if (field.signType === "path" || field.signType === "textPath") {
        const signData = JSON.parse(field.m_value);
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.addObjectsToCanvas(
          _thisPage.m_ownerNode,
          field,
          signFieldDiv,
          width,
          height,
          signData.objects,
          field.m_orgSignWidth,
          field.m_orgSignHeight
        );
      } else if (field.signType === "image") {
        let imageEl = _thisPage.m_ownerNode.querySelector(" #stampImageTag");
        imageEl.src = field.m_value;
        let imageObj = new fabric.Image(imageEl);
        _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.addObjectsToCanvas(
          _thisPage.m_ownerNode,
          field,
          signFieldDiv,
          width,
          height,
          [imageObj],
          field.m_orgSignWidth,
          field.m_orgSignHeight
        );
      }
    }
    return signFieldDiv;
  }

  /**
   * @function createImageField
   * @name module:Reader/ReaderMod.ReaderPageData#createImageField
   * @description  이미지 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Object} _thisPage  this RenderPageData Object
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createImageField(field, width, height, _thisPage) {
    let imgFieldDiv = document.createElement("div");
    imgFieldDiv.style.position = "absolute";
    imgFieldDiv.style.left = "0px";
    imgFieldDiv.style.top = "0px";
    imgFieldDiv.style.width = width + "px";
    imgFieldDiv.style.height = height + "px";
    imgFieldDiv.style.border = "none";
    imgFieldDiv.style.display = "flex";
    imgFieldDiv.style.alignItems = "center";
    imgFieldDiv.style.justifyContent = "center";
    imgFieldDiv.id = field.m_id + "_container";

    let imgField = document.createElement("img");
    imgField.style.maxWidth = "100%";
    imgField.style.maxHeight = "100%";
    imgField.style.border = "none";
    imgField.style.objectFit = "contain";
    imgField.id = field.m_id + "_container";
    imgFieldDiv.appendChild(imgField);

    let imgFieldInput = document.createElement("input");
    imgFieldInput.type = "file";
    imgFieldInput.id = field.m_id + "_file_input";
    imgFieldInput.accept = "image/*";
    imgFieldInput.style.display = "none";
    imgFieldDiv.appendChild(imgFieldInput);

    //textFieldDiv.style.backgroundColor = "transparent";
    if (!this.m_readonly) {
      imgFieldDiv.addEventListener(
        "click",
        function (evt) {
          imgFieldInput.click();
        },
        true
      );
    }

    imgFieldInput.addEventListener("change", function (evt) {
      const fileList = evt.target.files;
      const file = fileList[0];
      if (file === undefined || file === null) {
        return;
      }
      if (!file.type.startsWith("image/")) {
        if (_thisPage.alertFunc !== null) {
          _thisPage.alertFunc(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.translateForKey("Reader.onlyImageMsg"));
        }
        return;
      }
      _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.imageFileToBase64(fileList[0], function (imgBase64Data) {
        imgField.src = imgBase64Data;
        field.m_value = imgField.src;
      });
    });

    //console.log(field.m_value);
    if (
      field.m_value !== "" &&
      field.m_value !== undefined &&
      field.m_value !== null
    ) {
      imgField.src = field.m_value;
    }
    return imgFieldDiv;
  }

  /**
   * @function createCheckboxField
   * @name module:Reader/ReaderMod.ReaderPageData#createCheckboxField
   * @description  체크박스 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Object} _thisPage  this RenderPageData Object
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createCheckboxField(field, width, height, _thisPage) {
    let checkboxFieldDiv = document.createElement("div");
    checkboxFieldDiv.style.position = "absolute";
    checkboxFieldDiv.style.left = "0px";
    checkboxFieldDiv.style.top = "0px";
    checkboxFieldDiv.style.width = width + "px";
    checkboxFieldDiv.style.height = height + "px";
    checkboxFieldDiv.style.border = "none";
    checkboxFieldDiv.id = field.m_id + "_container";
    let checkImg = document.createElement("img");
    checkImg.style.width = "100%";
    checkImg.style.height = "100%";
    checkImg.style.border = "none";
    checkImg.id = field.m_id + "_img";
    checkImg.src = this.checkImgurl;
    if (!this.m_readonly) {
      checkboxFieldDiv.addEventListener("click", function (evt) {
        if (field.m_value === "true") {
          field.m_value = "false";
          checkImg.style.display = "none";
        } else {
          field.m_value = "true";
          checkImg.style.display = "block";
        }
      });
    }

    checkboxFieldDiv.appendChild(checkImg);

    if (
      field.m_value !== "" &&
      field.m_value !== undefined &&
      field.m_value !== null
    ) {
      if (field.m_value === "true") {
        checkImg.style.display = "block";
      } else {
        checkImg.style.display = "none";
      }
    } else {
      checkImg.style.display = "none";
    }

    return checkboxFieldDiv;
  }

  /**
   * @function createRadioField
   * @name module:Reader/ReaderMod.ReaderPageData#createRadioField
   * @description  라디오 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Object} _thisPage  this RenderPageData Object
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createRadioField(field, width, height, _thisPage) {
    let radioFieldDiv = document.createElement("div");
    radioFieldDiv.style.position = "absolute";
    radioFieldDiv.style.left = "0px";
    radioFieldDiv.style.top = "0px";
    radioFieldDiv.style.width = width + "px";
    radioFieldDiv.style.height = height + "px";
    radioFieldDiv.style.border = "none";
    radioFieldDiv.id = field.m_id + "_container";
    let radioImg = document.createElement("img");
    radioImg.style.width = "100%";
    radioImg.style.height = "100%";
    radioImg.style.border = "none";
    radioImg.id = field.m_id + "_img";
    radioImg.src = this.radioOffImgurl;

    radioFieldDiv.appendChild(radioImg);

    let radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.value = field.m_defaultValue;
    radioInput.id = field.m_id + "_radio";
    radioInput.name = field.m_groupName;
    radioInput.style.display = "none";
    radioFieldDiv.appendChild(radioInput);

    if (!this.m_readonly) {
      radioFieldDiv.addEventListener("click", function (evt) {
        radioInput.click();
      });
    }
    radioInput.addEventListener("change", function (evt) {
      // console.log(evt);
      let targetRadio = evt.target;
      let renderLayer = evt.target.closest("div.Reader-Page-Field-Layer");
      let radios = renderLayer.querySelectorAll(
        "input[name='" + field.m_groupName + "']"
      );
      radios.forEach(function (radioEl) {
        // console.log(radioEl);
        let fieldId = radioEl.id.replace("_radio", "");
        _thisPage.fields[fieldId].m_value = targetRadio.value;
        let radioImgElId = radioEl.id.replace("_radio", "_img");
        let radioImgEl = renderLayer.querySelector("#" + radioImgElId);
        if (radioEl === targetRadio) {
          radioImgEl.src = _thisPage.radioOnImgurl;
        } else {
          radioImgEl.src = _thisPage.radioOffImgurl;
        }
      });
    });
    if (
      field.m_value !== "" &&
      field.m_value !== undefined &&
      field.m_value !== null &&
      field.m_value === field.m_id
    ) {
      radioImg.src = _thisPage.radioOnImgurl;
    } else {
      radioImg.src = _thisPage.radioOffImgurl;
    }

    return radioFieldDiv;
  }

  /**
   * @function createLabelField
   * @name module:Reader/ReaderMod.ReaderPageData#createLabelField
   * @description Label 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Number} fontScale 폰트 크기의 배율
   * @param {Number} page  Pdf Page Number
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createLabelField(field, width, height, fontScale, page) {
    let labelFieldDiv = document.createElement("div");
    labelFieldDiv.style.position = "absolute";
    labelFieldDiv.style.left = "0px";
    labelFieldDiv.style.top = "0px";
    labelFieldDiv.style.border = "none";
    labelFieldDiv.style.width = width + "px";
    labelFieldDiv.style.height = height + "px";
    labelFieldDiv.style.fontFamily = field.m_fontName;
    labelFieldDiv.style.fontSize = field.m_fontSize * fontScale + "px";
    labelFieldDiv.style.color = field.m_fontColor;
    labelFieldDiv.style.textAlign = field.m_textAlign;
    labelFieldDiv.style.lineHeight = height + "px";

    if (field.m_bold === "true") {
      labelFieldDiv.style.fontWeight = "bold";
    }
    //rgb(0 158 218 / 20%);
    //1px dashed #91aaba;
    labelFieldDiv.style.backgroundColor = "transparent";

    if (!_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_defaultValue)) {
      let dvValue = this.m_defaultValueInfo[field.m_defaultValue];
      if (dvValue !== undefined) {
        field.m_value = dvValue;
      }
    }
    labelFieldDiv.textContent = field.m_value;
    return labelFieldDiv;
  }

  /**
   * @function createComboboxField
   * @name module:Reader/ReaderMod.ReaderPageData#createComboboxField
   * @description  콤보박스 필드 Node를 생성한다.
   *
   * @param {Object} field Field 정보
   * @param {Number} width   Field Width
   * @param {Number} height  Field Height
   * @param {Object} _thisPage  this RenderPageData Object
   * @return {ELEMENT}
   * @Date : 2021. 5. 31
   */
  createComboboxField(field, width, height, _thisPage) {
    var selectNode = document.createElement("select");

    selectNode.style.position = "absolute";
    selectNode.style.left = "0px";
    selectNode.style.top = "0px";
    selectNode.style.border = "none";
    selectNode.style.width = width + "px";
    selectNode.style.height = height + "px";
    selectNode.style.backgroundColor = "transparent";
    selectNode.className = _Constants_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS.EDITOR_ATTR_SELECT_CLASS;
    var defaultOptionNode = document.createElement("option");
    defaultOptionNode.value = "";
    defaultOptionNode.text = _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.translateForKey("Reader.selectDefaultText");
    selectNode.appendChild(defaultOptionNode);
    let val1 = field.m_value;
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(val1)) {
      val1 = field.m_defaultValue;
    }
    const combolist = field.m_comboboxList.split("\n");
    for (var idx = 0; idx < combolist.length; idx++) {
      var optionNode = document.createElement("option");
      optionNode.value = combolist[idx];
      optionNode.text = combolist[idx];
      if (optionNode.value === val1) {
        optionNode.selected = "selected";
      }
      selectNode.appendChild(optionNode);
    }
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.Utils.isStringEmpty(field.m_value)) {
      field.m_value = field.m_defaultValue;
    }
    selectNode.addEventListener("change", function (evt) {
      let selectedIdx = evt.target.options.selectedIndex;
      field.m_value = combolist[selectedIdx - 1];
    });

    if (this.m_readonly) {
      selectNode.readOnly = true;
    }
    return selectNode;
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

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMException: () => (/* binding */ DOMException),
/* harmony export */   Headers: () => (/* binding */ Headers),
/* harmony export */   Request: () => (/* binding */ Request),
/* harmony export */   Response: () => (/* binding */ Response),
/* harmony export */   fetch: () => (/* binding */ fetch)
/* harmony export */ });
/* eslint-disable no-prototype-builtins */
var g =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  // eslint-disable-next-line no-undef
  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
  {}

var support = {
  searchParams: 'URLSearchParams' in g,
  iterable: 'Symbol' in g && 'iterator' in Symbol,
  blob:
    'FileReader' in g &&
    'Blob' in g &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in g,
  arrayBuffer: 'ArrayBuffer' in g
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
      }
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body._noBody) return
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)
  var encoding = match ? match[1] : 'utf-8'
  reader.readAsText(blob, encoding)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    // eslint-disable-next-line no-self-assign
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._noBody = true;
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }
  }

  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this)
      if (isConsumed) {
        return isConsumed
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        )
      } else {
        return Promise.resolve(this._bodyArrayBuffer)
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer)
    } else {
      throw new Error('could not read as ArrayBuffer')
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal || (function () {
    if ('AbortController' in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  }());
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        try {
          headers.append(key, value)
        } catch (error) {
          console.warn('Response ' + error.message)
        }
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
  }
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 200, statusText: ''})
  response.status = 0
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = g.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      // This check if specifically for when a user fetches a file locally from the file system
      // Only if the status is out of a normal range
      if (request.url.startsWith('file://') && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request timed out'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && g.location.href ? g.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name))
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
      request.headers.forEach(function(value, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value)
        }
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!g.fetch) {
  g.fetch = fetch
  g.Headers = Headers
  g.Request = Request
  g.Response = Response
}


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
/*!***********************************************!*\
  !*** ./js/pdf_form/src/reader/previewMain.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTranslator: () => (/* binding */ addTranslator),
/* harmony export */   buildUserInfoList: () => (/* binding */ buildUserInfoList),
/* harmony export */   changeTemplateLocale: () => (/* binding */ changeTemplateLocale),
/* harmony export */   changeTranslatorFileLocation: () => (/* binding */ changeTranslatorFileLocation),
/* harmony export */   changeUserCardShow: () => (/* binding */ changeUserCardShow),
/* harmony export */   getJsonData: () => (/* binding */ getJsonData),
/* harmony export */   initDocument: () => (/* binding */ initDocument),
/* harmony export */   isRequiredFieldValueEmpty: () => (/* binding */ isRequiredFieldValueEmpty),
/* harmony export */   loadDocument: () => (/* binding */ loadDocument)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pdf.cursor.tool */ "./js/pdf_form/src/pdf.cursor.tool.js");
/* harmony import */ var _readerMod_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readerMod.js */ "./js/pdf_form/src/reader/readerMod.js");
/**
 * @module Reader/PreviewMod
 */

console.log('Preview VERSION:', "1.0.0000");







var pdfCursorTools, pdfViewer, previewMod, __previewEventBus, __previewOwnerNode, __previewUserInfos, __previewJsonData;
window.onload = function () {
}

/**
 * @description 초기 셋팅을 한다.
 *
 * @param {Element} ownerNode : 해당 프로젝트의 최상단 Element를 감싸고 있는 Element
 * @param {Array} langs  사용할 다국어 리스트 기본값으로 ["ko", "en"]가 들어있다.
 * @Date : 2021. 5. 31
 * @Method Name : initDocument
 */
function initDocument(ownerNode, langs = ["ko", "en"]) {
    __previewOwnerNode = ownerNode;

    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.translator.fetch(langs).then(() => {
        // -> Translations are ready...
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.changeLocale(langs[1]);
    });

    let pdfContainer = __previewOwnerNode.querySelector(" #" + _Constants__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.PREVIEW_READER_PDF_VIEWER_CONTAINER);
    __previewEventBus = new pdfjsViewer.EventBus();
    pdfCursorTools = new _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_2__.PDFCursorTools({
        container: pdfContainer,
        eventBus: __previewEventBus,
        cursorToolOnLoad: 0
    });

    pdfViewer = new pdfjsViewer.PDFViewer({
        container: pdfContainer,
        eventBus: __previewEventBus,
        textLayerMode: 0,
    });

    previewMod = new _readerMod_js__WEBPACK_IMPORTED_MODULE_3__.ReaderMod(pdfViewer, __previewOwnerNode);
    previewMod.readerInit();
}

/**
 * @description PDF문서를 로드한다.
 *
 * @param {String} pdfFileUrl  PDF FILE URL
 * @param {Object} templateData 기존 Template에서 저장한 Json Object
 * @Date : 2021. 5. 31
 * @Method Name : loadDocument
 */
function loadDocument(pdfFileUrl, templateData) {

    __previewEventBus.on("pagerendered", function (evt) {
        console.log("pageRendered: " + evt);
        previewMod.pageRender(evt);
    });

    __previewEventBus.on("pagechanging", function (evt) {
        console.log("pagechanging");
        documentPageSettings(evt.pageNumber);
    });

    __previewEventBus.on("scalechanging", function (evt) {
        console.log("scalechanging");
        changeLayerSize(evt);
    });

    __previewEventBus.on("pagesinit", function () {
        console.log("pagesinit");
        pdfViewer.currentScale = 1;
        // We can use pdfViewer now, e.g. let's change default scale.

        let totalPage = __previewOwnerNode.querySelector(" #" + "Num-Pages");
        totalPage.textContent = " / " + pdfViewer.pagesCount;
        documentPageBtnEnable(pdfViewer.currentPageNumber);
        // previewMod.loadJsonData(templateData);

        previewMod.loadJsonDataWithUserInfo(
          templateData,
          __previewUserInfos[0],
          0
        );
    });

    let loadingTask = pdfjsLib.getDocument({
        url: pdfFileUrl,
        cMapUrl: '/js/pdf_form/pdfjs/cmaps/',
        cMapPacked: true,
    })
    loadingTask.promise.then(function (pdfDocument) {
        pdfDocument.getData().then((data) => {
        })
        pdfViewer.currentScale = 1;
        pdfViewer.setDocument(pdfDocument)
        pdfCursorTools.switchTool(1);
        console.log(pdfViewer.pageViewsReady);
        // documentReadycheck(pdfViewer.pageViewsReady);

    })

    __previewJsonData = JSON.stringify(templateData);

    __previewOwnerNode.querySelector(" #" + "Zoom-Out-Button").addEventListener("click", documentZoomOut);
    __previewOwnerNode.querySelector(" #" + "Zoom-In-Button").addEventListener("click", documentZoomIn);

    __previewOwnerNode.querySelector(" #" + "Goto-First-Button").addEventListener("click", documentGotoFirst);
    __previewOwnerNode.querySelector(" #" + "Goto-Prev-Button").addEventListener("click", documentGotoPrev);
    __previewOwnerNode.querySelector(" #" + "Goto-Next-Button").addEventListener("click", documentGotoNext);
    __previewOwnerNode.querySelector(" #" + "Goto-Last-Button").addEventListener("click", documentGotoLast);
    __previewOwnerNode.querySelector(" #" + "scaleSelectContainer").addEventListener("click", showScaleSelector);
}

/**
 * @description 현재 주어진 서명자 정보들을 기준으로 Template Field정보를 반환한다.
 *
 * @return {Object}: Template Field 정보
 * @Date : 2021. 5. 31
 * @Method Name : getJsonData
 */
function getJsonData() {
    let jsonData = __previewJsonData;
    let dataArray = [];
    for (var idx = 0; idx < __previewUserInfos.length; ++idx) {
        let orgData = JSON.parse(jsonData);
        orgData.formerList = orgData.formerList.slice(0, 1);
        let obj = _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneObjectToObject(__previewUserInfos[idx], orgData.formerList[0]);
        dataArray.push(JSON.stringify(orgData));
    }
    return dataArray;
}

/**
 * @description 필수 필드가 비어있는지 여부를 반환한다.
 *
 * @return {Boolean} 필수 필드가 비어있는지 여부
 * @Date : 2021. 5. 31
 * @Method Name : isRequiredFieldValueEmpty
 */
function isRequiredFieldValueEmpty() {
    return previewMod.isRequiredFieldValueEmpty();
}

/**
 * @description 서명자 정보 리스트로 화면을 구성한다.
 *
 * @param {Array} userInfoList   서명자 정보 리스트
 * @Date : 2021. 5. 31
 * @Method Name : buildUserInfoList
 */
function buildUserInfoList(userInfoList) {
    __previewUserInfos = userInfoList;
    const ownerDom = __previewOwnerNode.querySelector(" #Editor-User-Component_Box");
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeAllChildNode(ownerDom);
    for (var cnt = 0; cnt < __previewUserInfos.length; ++cnt) {
        let fieldListDom = document.createElement("div");
        fieldListDom.setAttribute("data-user-key", cnt);
        fieldListDom.classList.add("User-Component-List-Conatiner");
        if (cnt === 0) {
            fieldListDom.classList.add("Current");
        }
        let listDom = document.createElement("ul");
        listDom.className = "User-Component-List";
        let listItemDom = document.createElement("li");
        let listItemSpanDom = document.createElement("span");
        listItemSpanDom.textContent = __previewUserInfos[cnt].displayUserName;
        listItemDom.appendChild(listItemSpanDom);
        listDom.appendChild(listItemDom);
        let listItemEmailDom = document.createElement("li");
        let listItemEmailSpanDom = document.createElement("span");
        listItemEmailSpanDom.textContent = __previewUserInfos[cnt].email;
        listItemEmailDom.appendChild(listItemEmailSpanDom);
        listDom.appendChild(listItemEmailDom);
        fieldListDom.appendChild(listDom);
        ownerDom.appendChild(fieldListDom);
        fieldListDom.addEventListener("click", chageUserInfo);
    }
}

/**
 * @description 현재 언어를 파라미터에 맞게 변환한다.
 *
 * @param {String} locale 바꿀 언어
 * @Date : 2021. 5. 31
 * @Method Name : changeTemplateLocale
 */
function changeTemplateLocale(locale) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.changeLocale(locale);
    previewMod.pageRefresh();
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
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.translatorFileLocation(lcation);
}

/**
 * @description  다국어 언어를 추가한다.
 * @param {String} locale 언어 이름
 * @param {Object} langData i18n/ko.json과 같은 양식으로 된 JSON을 파싱한 데이터
 * @Date : 2021. 5. 31
 * @Method Name : addTranslator
 */
function addTranslator(locale, langData) {
    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addTranslator(locale, langData);
}

/**
 * @description  미리보기시 보일 카드의 경우를 제어한다.
 * @Date : 2023. 12. 15
 * @Method Name : changeUserCardShow
 */
function changeUserCardShow(
  jsonData,
  userList,
  isNoFieldsNoShow,
  isFormerShow
) {
  if (isNoFieldsNoShow) {
    // UserList
    var noFieldsUserList = genNoFieldsUserList(jsonData); // 함수 구현 필요
    userList = NoShowNoFieldsCard(noFieldsUserList, true); // 함수 구현 필요

    // Json
    jsonData = removeFormerWithEmptyFields(jsonData); // 함수 구현 필요

    console.log(noFieldsUserList);

    if (!isFormerShow) {
      // UserList
      userList = isFormerShowf(userList, false); // 함수 구현 필요
      jsonData = removeFormersWithIsFormerY(jsonData); // 함수 구현 필요
    }
  } else {
    if (!isFormerShow) {
      // UserList
      userList = isFormerShowf(userList, false); // 함수 구현 필요
      jsonData = removeFormersWithIsFormerY(jsonData); // 함수 구현 필요
    }
  }

  return { jsonData, userList }; // 수정된 jsonData와 userList를 반환
}

/**
 * @description Page의 높이를 계산한다.
 *
 * @param {Element} pageElement 계산할 Page Element
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
 * @description PDF 페이지의 Layer사이즈가 변할 때의 처리를한다.
 *
 * @param {Object} evt event
 * @Date : 2021. 5. 31
 * @Method Name : changeLayerSize
 */
function changeLayerSize(evt) {
    let height = 0;
    pdfViewer._pages.forEach(function (element) {
        height += calcPageHeight(element);
    });
}

/**
 * @description 문서의 배율을 축소한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentZoomOut
 */
function documentZoomOut() {
    const currentValue = parseFloat(pdfViewer.currentScale);
    pdfViewer.currentScale = currentValue - 0.1;
    setScaleValueText(pdfViewer.currentScale);
}

/**
 * @description 문서의 배율을 확대한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentZoomIn
 */
function documentZoomIn() {
    const currentValue = parseFloat(pdfViewer.currentScale);
    pdfViewer.currentScale = currentValue + 0.1;
    setScaleValueText(pdfViewer.currentScale);
}

/**
 * @description 문서의 배율을 설정한다.
 *
 * @param {String} value  문서의 배율
 * @Date : 2021. 5. 31
 * @Method Name : setScaleValueText
 */
function setScaleValueText(value) {
    const currentValue = Math.floor(parseFloat(value) * 100);
    var element = __previewOwnerNode.querySelector(" #scaleSelectContainer > a");
    element.textContent = currentValue + "%";
}

/**
 * @description 첫 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoFirst
 */
function documentGotoFirst() {
    pdfViewer.currentPageNumber = 1;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description 이전 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoPrev
 */
function documentGotoPrev() {
    if (pdfViewer.currentPageNumber - 1 < 1) {
        return;
    }
    pdfViewer.currentPageNumber--;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description 다음 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoPrev
 */
function documentGotoNext() {
    if (pdfViewer.currentPageNumber + 1 > pdfViewer.pagesCount) {
        return;
    }
    pdfViewer.currentPageNumber++;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description 마지막 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoPrev
 */
function documentGotoLast() {
    pdfViewer.currentPageNumber = pdfViewer.pagesCount;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description 페이지 정보를 설정한다..
 *
 * @param {Number} pageNo  설정할 페이지 정보
 * @Date : 2021. 5. 31
 * @Method Name : documentPageSettings
 */
function documentPageSettings(pageNo) {
    let pageInput = __previewOwnerNode.querySelector(" #" + "pageNumber");
    pageInput.value = pageNo;
    documentPageBtnEnable(pdfViewer.currentPageNumber);
}

/**
 * @description 페이지버튼의 활성화 여부를 판단하여 설정한다.
 *
 * @param {Number} pageNo  설정할 페이지 정보
 * @Date : 2021. 5. 31
 * @Method Name : documentPageBtnEnable
 */
function documentPageBtnEnable(pageNo) {
    if (pageNo === 1) {
        __previewOwnerNode.querySelector(" #" + "Goto-First-Button").disabled = true;
        __previewOwnerNode.querySelector(" #" + "Goto-Prev-Button").disabled = true;
    } else {
        __previewOwnerNode.querySelector(" #" + "Goto-First-Button").disabled = false;
        __previewOwnerNode.querySelector(" #" + "Goto-Prev-Button").disabled = false;
    }
    if (pageNo === pdfViewer.pagesCount) {
        __previewOwnerNode.querySelector(" #" + "Goto-Last-Button").disabled = true;
        __previewOwnerNode.querySelector(" #" + "Goto-Next-Button").disabled = true;
    } else {
        __previewOwnerNode.querySelector(" #" + "Goto-Last-Button").disabled = false;
        __previewOwnerNode.querySelector(" #" + "Goto-Next-Button").disabled = false;
    }
}

/**
 * @description  PDF문서의 배율 Select를 보여준다.
 *
 * @param {Object} evt Event Object
 * @Date : 2021. 5. 31
 * @Method Name : showScaleSelector
 */
function showScaleSelector(evt) {

    const targetBbox = evt.target.getBoundingClientRect();
    let scaleContainer = __previewOwnerNode.querySelector(" .Scale-Seletor-Container");
    scaleContainer.style.left = targetBbox.left + "px";
    scaleContainer.style.top = targetBbox.top + "px";
    if (scaleContainer.classList.contains("Template-Hide")) {
        scaleContainer.classList.toggle("Template-Hide");
    }
    let scaleSelect = scaleContainer.querySelector("select");
    if (!$(scaleSelect).hasClass("select2-hidden-accessible")) {
        // Select2 has been initialized
        $(scaleSelect).select2({
            minimumResultsForSearch: Infinity,
            closeOnSelect: false,
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

/**
 * @description  선택된 서명자 정보로 데이터를 교체한다.
 *
 * @param {Object} evt  Event Object
 * @Date : 2021. 5. 31
 * @Method Name : fieldFtEvent
 */
function chageUserInfo(evt) {
    let targetDom = evt.target;
    let keyDom = targetDom;
    if (!targetDom.classList.contains("User-Component-List-Conatiner")) {
        keyDom = targetDom.closest("div.User-Component-List-Conatiner");
    }
    let userKey = keyDom.getAttribute("data-user-key");
    previewMod.loadJsonDataWithUserInfo(
      JSON.parse(__previewJsonData),
      __previewUserInfos[userKey],
      userKey
    );
    previewMod.pageRefresh();

    let compBoxChilds = __previewOwnerNode.querySelectorAll(".User-Component-List-Conatiner");
    compBoxChilds.forEach(child => {
        if (child === keyDom) {
            if (!child.classList.contains("Current")) {
                child.classList.toggle("Current");
            }
            return;
        }
        if (child.classList.contains("Current")) {
            child.classList.toggle("Current");
        }
    })
}

//2023-12-15 병욱 추가
// userList 가공 함수
function isFormerShowf(userList, showFormer) {
    if (showFormer) {
        // 파라미터가 true일 경우, userList를 그대로 반환
        return userList;
    } else {
        // 파라미터가 false일 경우, isFormer가 "Y"인 요소를 제외하고 반환
        return userList.filter(user => user.isFormer !== "Y");
    }
}

function genNoFieldsUserList(JsonData) {
    return JsonData.formerList.map(former => ({
        displayUserName: former.displayUserName,
        userUUID: former.userUUID,
        email: former.email,
        isFormer: former.isFormer,
        // 모든 pages의 fields의 길이가 0이면 "Y", 그렇지 않으면 "N"
        isNoFields: former.pages.every(page => page.fields.length === 0) ? "Y" : "N"
    }));
}

function NoShowNoFieldsCard(userlist_, showFields) {
    return showFields ? userlist_.filter(user => user.isNoFields !== "Y") : userlist_;
}


// json 가공 함수
function removeFormerWithEmptyFields(JsonData) {
    JsonData.formerList = JsonData.formerList.filter(former => 
        !former.pages.every(page => page.fields.length === 0)
    );
    return JsonData;
}

function removeFormersWithIsFormerY(jsonData) {
    jsonData.formerList = jsonData.formerList.filter(former => former.isFormer !== "Y");
    return jsonData;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmJvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUIsaURBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0EsNEJBQTRCLCtCQUErQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkIsa0RBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDRCQUE0QixrREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBUztBQUN2QztBQUNBLHNDQUFzQyxvREFBUztBQUMvQyx1Q0FBdUMsb0RBQVM7QUFDaEQsbUNBQW1DLG9EQUFTO0FBQzVDO0FBQ0EsVUFBVTtBQUNWLHdDQUF3QyxvREFBUztBQUNqRCxtQ0FBbUMsb0RBQVM7QUFDNUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDhCQUE4QixvREFBUztBQUN2QztBQUNBO0FBQ0Esb0NBQW9DLG9EQUFTO0FBQzdDLG9DQUFvQyxvREFBUztBQUM3QztBQUNBLHVDQUF1QyxvREFBUztBQUNoRCxtQ0FBbUMsb0RBQVM7QUFDNUM7QUFDQSxVQUFVO0FBQ1Ysd0NBQXdDLG9EQUFTO0FBQ2pELGdDQUFnQyxvREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msb0RBQVM7QUFDL0M7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0RBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0RBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrREFBSztBQUNyQjtBQUNBLHNCQUFzQixrREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtEQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFFLGVBQWUsNkJBQTZCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsOERBQU07QUFDL0MseUJBQXlCLDhEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBTTtBQUNuQyxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsOERBQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFNO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNERBQUUsZ0JBQWdCLDZCQUE2QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhEQUFNO0FBQ2hELDBCQUEwQiw4REFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOERBQU07QUFDbkMsS0FBSztBQUNMO0FBQ0EsMENBQTBDLDhEQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBTTtBQUNuQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFTO0FBQzdCO0FBQ0Esd0JBQXdCLG9EQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBQ0U7QUFDNUM7QUFDaUQ7QUFDUjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsVUFBVSxXQUFXO0FBQ25DLGNBQWMsTUFBTSxXQUFXO0FBQy9CLGNBQWMsUUFBUSxhQUFhO0FBQ25DLGNBQWMsUUFBUSxVQUFVO0FBQ2hDLGNBQWMsUUFBUSxZQUFZO0FBQ2xDLGNBQWMsUUFBUSxRQUFRO0FBQzlCLGNBQWMsUUFBUSxvQkFBb0I7QUFDMUMsY0FBYyxTQUFTLGFBQWE7QUFDcEMsY0FBYyxTQUFTLFlBQVk7QUFDbkMsY0FBYyxRQUFRLFFBQVE7QUFDOUIsY0FBYyxNQUFNLGNBQWM7QUFDbEMsY0FBYyxRQUFRLGdCQUFnQjtBQUN0QyxjQUFjLFFBQVEsYUFBYTtBQUNuQyxjQUFjLE1BQU0sYUFBYTtBQUNqQyxjQUFjLFFBQVEsZUFBZTtBQUNyQyxjQUFjLFFBQVEsWUFBWTtBQUNsQztBQUNBLGNBQWMsVUFBVSxxQkFBcUI7QUFDN0MsY0FBYyxVQUFVLHFCQUFxQjtBQUM3QyxjQUFjLFVBQVUsYUFBYTtBQUNyQyxjQUFjLFVBQVUsZ0JBQWdCO0FBQ3hDLGNBQWMsVUFBVSxrQkFBa0I7QUFDMUMsY0FBYyxVQUFVLGtCQUFrQjtBQUMxQyxjQUFjLFVBQVUsa0JBQWtCO0FBQzFDLGNBQWMsVUFBVSwwQkFBMEI7QUFDbEQsY0FBYyxVQUFVLGtCQUFrQjtBQUMxQyxjQUFjLFVBQVUsaUJBQWlCO0FBQ3pDLGNBQWMsVUFBVSxpQkFBaUI7QUFDekMsY0FBYyxVQUFVLFVBQVU7QUFDbEMsY0FBYyxVQUFVLDJCQUEyQjtBQUNuRCxjQUFjLFVBQVUsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVCQUF1QjtBQUNsRTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsdUJBQXVCO0FBQ3RFO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1QkFBdUI7QUFDeEU7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsS0FBSztBQUNwRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtCQUErQixvREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVM7QUFDZjtBQUNBLHVCQUF1QixvREFBUztBQUNoQywrQkFBK0Isb0RBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLG9EQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBUztBQUNmO0FBQ0EsdUJBQXVCLG9EQUFTO0FBQ2hDLDhCQUE4QixvREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrREFBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0RBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtRUFBb0I7QUFDNUM7QUFDQSx3QkFBd0Isd0RBQVM7QUFDakMsZ0JBQWdCLCtDQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0EsV0FBVyxrREFBSztBQUNoQjtBQUNBO0FBQ0EsV0FBVyxrREFBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2wrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBNEQsZ0NBQWdDLENBQWdLO0FBQ2hRLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGdCQUFnQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFFBQVE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0EsMkJBQTJCO0FBQzNCLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FB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QUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVM7QUFDakM7QUFDQSw0QkFBNEIsb0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVM7QUFDakM7QUFDQSw0QkFBNEIsb0RBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1IsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vZmxhdHBpY2tyLm1pbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL2wxMG4va28uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9qcy9wZGZfZm9ybS9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL1RyYW5zbGF0b3IvdHJhbnNsYXRvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy9UcmFuc2xhdG9yL3V0aWxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3BkZi5jdXJzb3IudG9vbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy9yZWFkZXIvcmVhZGVyTW9kLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3JlYWRlci9yZWFkZXJQYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy91dGlscy9jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9qcy9wZGZfZm9ybS9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3JlYWRlci9wcmV2aWV3TWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInByZXZpZXdtb2RcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicHJldmlld21vZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwcmV2aWV3bW9kXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8qIGZsYXRwaWNrciB2NC42LjksLCBAbGljZW5zZSBNSVQgKi9cclxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5mbGF0cGlja3I9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPWZ1bmN0aW9uKCl7cmV0dXJuKGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49MSxhPWFyZ3VtZW50cy5sZW5ndGg7bjxhO24rKylmb3IodmFyIGkgaW4gdD1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSkmJihlW2ldPXRbaV0pO3JldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiB0KCl7Zm9yKHZhciBlPTAsdD0wLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWUrPWFyZ3VtZW50c1t0XS5sZW5ndGg7dmFyIGE9QXJyYXkoZSksaT0wO2Zvcih0PTA7dDxuO3QrKylmb3IodmFyIG89YXJndW1lbnRzW3RdLHI9MCxsPW8ubGVuZ3RoO3I8bDtyKyssaSsrKWFbaV09b1tyXTtyZXR1cm4gYX12YXIgbj1bXCJvbkNoYW5nZVwiLFwib25DbG9zZVwiLFwib25EYXlDcmVhdGVcIixcIm9uRGVzdHJveVwiLFwib25LZXlEb3duXCIsXCJvbk1vbnRoQ2hhbmdlXCIsXCJvbk9wZW5cIixcIm9uUGFyc2VDb25maWdcIixcIm9uUmVhZHlcIixcIm9uVmFsdWVVcGRhdGVcIixcIm9uWWVhckNoYW5nZVwiLFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCJdLGE9e19kaXNhYmxlOltdLGFsbG93SW5wdXQ6ITEsYWxsb3dJbnZhbGlkUHJlbG9hZDohMSxhbHRGb3JtYXQ6XCJGIGosIFlcIixhbHRJbnB1dDohMSxhbHRJbnB1dENsYXNzOlwiZm9ybS1jb250cm9sIGlucHV0XCIsYW5pbWF0ZTpcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYtMT09PXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpLGFyaWFEYXRlRm9ybWF0OlwiRiBqLCBZXCIsYXV0b0ZpbGxEZWZhdWx0VGltZTohMCxjbGlja09wZW5zOiEwLGNsb3NlT25TZWxlY3Q6ITAsY29uanVuY3Rpb246XCIsIFwiLGRhdGVGb3JtYXQ6XCJZLW0tZFwiLGRlZmF1bHRIb3VyOjEyLGRlZmF1bHRNaW51dGU6MCxkZWZhdWx0U2Vjb25kczowLGRpc2FibGU6W10sZGlzYWJsZU1vYmlsZTohMSxlbmFibGVTZWNvbmRzOiExLGVuYWJsZVRpbWU6ITEsZXJyb3JIYW5kbGVyOmZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZjb25zb2xlLndhcm4oZSl9LGdldFdlZWs6ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IERhdGUoZS5nZXRUaW1lKCkpO3Quc2V0SG91cnMoMCwwLDAsMCksdC5zZXREYXRlKHQuZ2V0RGF0ZSgpKzMtKHQuZ2V0RGF5KCkrNiklNyk7dmFyIG49bmV3IERhdGUodC5nZXRGdWxsWWVhcigpLDAsNCk7cmV0dXJuIDErTWF0aC5yb3VuZCgoKHQuZ2V0VGltZSgpLW4uZ2V0VGltZSgpKS84NjRlNS0zKyhuLmdldERheSgpKzYpJTcpLzcpfSxob3VySW5jcmVtZW50OjEsaWdub3JlZEZvY3VzRWxlbWVudHM6W10saW5saW5lOiExLGxvY2FsZTpcImRlZmF1bHRcIixtaW51dGVJbmNyZW1lbnQ6NSxtb2RlOlwic2luZ2xlXCIsbW9udGhTZWxlY3RvclR5cGU6XCJkcm9wZG93blwiLG5leHRBcnJvdzpcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsbm9DYWxlbmRhcjohMSxub3c6bmV3IERhdGUsb25DaGFuZ2U6W10sb25DbG9zZTpbXSxvbkRheUNyZWF0ZTpbXSxvbkRlc3Ryb3k6W10sb25LZXlEb3duOltdLG9uTW9udGhDaGFuZ2U6W10sb25PcGVuOltdLG9uUGFyc2VDb25maWc6W10sb25SZWFkeTpbXSxvblZhbHVlVXBkYXRlOltdLG9uWWVhckNoYW5nZTpbXSxvblByZUNhbGVuZGFyUG9zaXRpb246W10scGx1Z2luczpbXSxwb3NpdGlvbjpcImF1dG9cIixwb3NpdGlvbkVsZW1lbnQ6dm9pZCAwLHByZXZBcnJvdzpcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNNS4yMDcgOC40NzFsNy4xNDYgNy4xNDctMC43MDcgMC43MDctNy44NTMtNy44NTQgNy44NTQtNy44NTMgMC43MDcgMC43MDctNy4xNDcgNy4xNDZ6JyAvPjwvc3ZnPlwiLHNob3J0aGFuZEN1cnJlbnRNb250aDohMSxzaG93TW9udGhzOjEsc3RhdGljOiExLHRpbWVfMjRocjohMSx3ZWVrTnVtYmVyczohMSx3cmFwOiExfSxpPXt3ZWVrZGF5czp7c2hvcnRoYW5kOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxsb25naGFuZDpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXX0sbW9udGhzOntzaG9ydGhhbmQ6W1wiSmFuXCIsXCJGZWJcIixcIk1hclwiLFwiQXByXCIsXCJNYXlcIixcIkp1blwiLFwiSnVsXCIsXCJBdWdcIixcIlNlcFwiLFwiT2N0XCIsXCJOb3ZcIixcIkRlY1wiXSxsb25naGFuZDpbXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl19LGRheXNJbk1vbnRoOlszMSwyOCwzMSwzMCwzMSwzMCwzMSwzMSwzMCwzMSwzMCwzMV0sZmlyc3REYXlPZldlZWs6MCxvcmRpbmFsOmZ1bmN0aW9uKGUpe3ZhciB0PWUlMTAwO2lmKHQ+MyYmdDwyMSlyZXR1cm5cInRoXCI7c3dpdGNoKHQlMTApe2Nhc2UgMTpyZXR1cm5cInN0XCI7Y2FzZSAyOnJldHVyblwibmRcIjtjYXNlIDM6cmV0dXJuXCJyZFwiO2RlZmF1bHQ6cmV0dXJuXCJ0aFwifX0scmFuZ2VTZXBhcmF0b3I6XCIgdG8gXCIsd2Vla0FiYnJldmlhdGlvbjpcIldrXCIsc2Nyb2xsVGl0bGU6XCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsdG9nZ2xlVGl0bGU6XCJDbGljayB0byB0b2dnbGVcIixhbVBNOltcIkFNXCIsXCJQTVwiXSx5ZWFyQXJpYUxhYmVsOlwiWWVhclwiLG1vbnRoQXJpYUxhYmVsOlwiTW9udGhcIixob3VyQXJpYUxhYmVsOlwiSG91clwiLG1pbnV0ZUFyaWFMYWJlbDpcIk1pbnV0ZVwiLHRpbWVfMjRocjohMX0sbz1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0yKSwoXCIwMDBcIitlKS5zbGljZSgtMSp0KX0scj1mdW5jdGlvbihlKXtyZXR1cm4hMD09PWU/MTowfTtmdW5jdGlvbiBsKGUsdCl7dmFyIG47cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGE9dGhpcztjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KGEsYXJndW1lbnRzKX0pLHQpfX12YXIgYz1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEFycmF5P2U6W2VdfTtmdW5jdGlvbiBkKGUsdCxuKXtpZighMD09PW4pcmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KTtlLmNsYXNzTGlzdC5yZW1vdmUodCl9ZnVuY3Rpb24gcyhlLHQsbil7dmFyIGE9d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuIHQ9dHx8XCJcIixuPW58fFwiXCIsYS5jbGFzc05hbWU9dCx2b2lkIDAhPT1uJiYoYS50ZXh0Q29udGVudD1uKSxhfWZ1bmN0aW9uIHUoZSl7Zm9yKDtlLmZpcnN0Q2hpbGQ7KWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKX1mdW5jdGlvbiBmKGUsdCl7cmV0dXJuIHQoZSk/ZTplLnBhcmVudE5vZGU/ZihlLnBhcmVudE5vZGUsdCk6dm9pZCAwfWZ1bmN0aW9uIG0oZSx0KXt2YXIgbj1zKFwiZGl2XCIsXCJudW1JbnB1dFdyYXBwZXJcIiksYT1zKFwiaW5wdXRcIixcIm51bUlucHV0IFwiK2UpLGk9cyhcInNwYW5cIixcImFycm93VXBcIiksbz1zKFwic3BhblwiLFwiYXJyb3dEb3duXCIpO2lmKC0xPT09bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA5LjBcIik/YS50eXBlPVwibnVtYmVyXCI6KGEudHlwZT1cInRleHRcIixhLnBhdHRlcm49XCJcXFxcZCpcIiksdm9pZCAwIT09dClmb3IodmFyIHIgaW4gdClhLnNldEF0dHJpYnV0ZShyLHRbcl0pO3JldHVybiBuLmFwcGVuZENoaWxkKGEpLG4uYXBwZW5kQ2hpbGQoaSksbi5hcHBlbmRDaGlsZChvKSxufWZ1bmN0aW9uIGcoZSl7dHJ5e3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY29tcG9zZWRQYXRoP2UuY29tcG9zZWRQYXRoKClbMF06ZS50YXJnZXR9Y2F0Y2godCl7cmV0dXJuIGUudGFyZ2V0fX12YXIgcD1mdW5jdGlvbigpe30saD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG4ubW9udGhzW3Q/XCJzaG9ydGhhbmRcIjpcImxvbmdoYW5kXCJdW2VdfSx2PXtEOnAsRjpmdW5jdGlvbihlLHQsbil7ZS5zZXRNb250aChuLm1vbnRocy5sb25naGFuZC5pbmRleE9mKHQpKX0sRzpmdW5jdGlvbihlLHQpe2Uuc2V0SG91cnMocGFyc2VGbG9hdCh0KSl9LEg6ZnVuY3Rpb24oZSx0KXtlLnNldEhvdXJzKHBhcnNlRmxvYXQodCkpfSxKOmZ1bmN0aW9uKGUsdCl7ZS5zZXREYXRlKHBhcnNlRmxvYXQodCkpfSxLOmZ1bmN0aW9uKGUsdCxuKXtlLnNldEhvdXJzKGUuZ2V0SG91cnMoKSUxMisxMipyKG5ldyBSZWdFeHAobi5hbVBNWzFdLFwiaVwiKS50ZXN0KHQpKSl9LE06ZnVuY3Rpb24oZSx0LG4pe2Uuc2V0TW9udGgobi5tb250aHMuc2hvcnRoYW5kLmluZGV4T2YodCkpfSxTOmZ1bmN0aW9uKGUsdCl7ZS5zZXRTZWNvbmRzKHBhcnNlRmxvYXQodCkpfSxVOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBEYXRlKDFlMypwYXJzZUZsb2F0KHQpKX0sVzpmdW5jdGlvbihlLHQsbil7dmFyIGE9cGFyc2VJbnQodCksaT1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksMCwyKzcqKGEtMSksMCwwLDAsMCk7cmV0dXJuIGkuc2V0RGF0ZShpLmdldERhdGUoKS1pLmdldERheSgpK24uZmlyc3REYXlPZldlZWspLGl9LFk6ZnVuY3Rpb24oZSx0KXtlLnNldEZ1bGxZZWFyKHBhcnNlRmxvYXQodCkpfSxaOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBEYXRlKHQpfSxkOmZ1bmN0aW9uKGUsdCl7ZS5zZXREYXRlKHBhcnNlRmxvYXQodCkpfSxoOmZ1bmN0aW9uKGUsdCl7ZS5zZXRIb3VycyhwYXJzZUZsb2F0KHQpKX0saTpmdW5jdGlvbihlLHQpe2Uuc2V0TWludXRlcyhwYXJzZUZsb2F0KHQpKX0sajpmdW5jdGlvbihlLHQpe2Uuc2V0RGF0ZShwYXJzZUZsb2F0KHQpKX0sbDpwLG06ZnVuY3Rpb24oZSx0KXtlLnNldE1vbnRoKHBhcnNlRmxvYXQodCktMSl9LG46ZnVuY3Rpb24oZSx0KXtlLnNldE1vbnRoKHBhcnNlRmxvYXQodCktMSl9LHM6ZnVuY3Rpb24oZSx0KXtlLnNldFNlY29uZHMocGFyc2VGbG9hdCh0KSl9LHU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IERhdGUocGFyc2VGbG9hdCh0KSl9LHc6cCx5OmZ1bmN0aW9uKGUsdCl7ZS5zZXRGdWxsWWVhcigyZTMrcGFyc2VGbG9hdCh0KSl9fSxEPXtEOlwiKFxcXFx3KylcIixGOlwiKFxcXFx3KylcIixHOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsSDpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLEo6XCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixLOlwiXCIsTTpcIihcXFxcdyspXCIsUzpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFU6XCIoLispXCIsVzpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFk6XCIoXFxcXGR7NH0pXCIsWjpcIiguKylcIixkOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsaDpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLGk6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixqOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsbDpcIihcXFxcdyspXCIsbTpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLG46XCIoXFxcXGRcXFxcZHxcXFxcZClcIixzOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsdTpcIiguKylcIix3OlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIseTpcIihcXFxcZHsyfSlcIn0sdz17WjpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0lTT1N0cmluZygpfSxEOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdC53ZWVrZGF5cy5zaG9ydGhhbmRbdy53KGUsdCxuKV19LEY6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKHcubihlLHQsbiktMSwhMSx0KX0sRzpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG8ody5oKGUsdCxuKSl9LEg6ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZS5nZXRIb3VycygpKX0sSjpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDAhPT10Lm9yZGluYWw/ZS5nZXREYXRlKCkrdC5vcmRpbmFsKGUuZ2V0RGF0ZSgpKTplLmdldERhdGUoKX0sSzpmdW5jdGlvbihlLHQpe3JldHVybiB0LmFtUE1bcihlLmdldEhvdXJzKCk+MTEpXX0sTTpmdW5jdGlvbihlLHQpe3JldHVybiBoKGUuZ2V0TW9udGgoKSwhMCx0KX0sUzpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmdldFNlY29uZHMoKSl9LFU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0VGltZSgpLzFlM30sVzpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG4uZ2V0V2VlayhlKX0sWTpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmdldEZ1bGxZZWFyKCksNCl9LGQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZS5nZXREYXRlKCkpfSxoOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEhvdXJzKCklMTI/ZS5nZXRIb3VycygpJTEyOjEyfSxpOmZ1bmN0aW9uKGUpe3JldHVybiBvKGUuZ2V0TWludXRlcygpKX0sajpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXREYXRlKCl9LGw6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC53ZWVrZGF5cy5sb25naGFuZFtlLmdldERheSgpXX0sbTpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmdldE1vbnRoKCkrMSl9LG46ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0TW9udGgoKSsxfSxzOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFNlY29uZHMoKX0sdTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRUaW1lKCl9LHc6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RGF5KCl9LHk6ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZyhlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKX19LGI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb25maWcsbj12b2lkIDA9PT10P2E6dCxvPWUubDEwbixyPXZvaWQgMD09PW8/aTpvLGw9ZS5pc01vYmlsZSxjPXZvaWQgMCE9PWwmJmw7cmV0dXJuIGZ1bmN0aW9uKGUsdCxhKXt2YXIgaT1hfHxyO3JldHVybiB2b2lkIDA9PT1uLmZvcm1hdERhdGV8fGM/dC5zcGxpdChcIlwiKS5tYXAoKGZ1bmN0aW9uKHQsYSxvKXtyZXR1cm4gd1t0XSYmXCJcXFxcXCIhPT1vW2EtMV0/d1t0XShlLGksbik6XCJcXFxcXCIhPT10P3Q6XCJcIn0pKS5qb2luKFwiXCIpOm4uZm9ybWF0RGF0ZShlLHQsaSl9fSxDPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY29uZmlnLG49dm9pZCAwPT09dD9hOnQsbz1lLmwxMG4scj12b2lkIDA9PT1vP2k6bztyZXR1cm4gZnVuY3Rpb24oZSx0LGksbyl7aWYoMD09PWV8fGUpe3ZhciBsLGM9b3x8cixkPWU7aWYoZSBpbnN0YW5jZW9mIERhdGUpbD1uZXcgRGF0ZShlLmdldFRpbWUoKSk7ZWxzZSBpZihcInN0cmluZ1wiIT10eXBlb2YgZSYmdm9pZCAwIT09ZS50b0ZpeGVkKWw9bmV3IERhdGUoZSk7ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9dHx8KG58fGEpLmRhdGVGb3JtYXQsdT1TdHJpbmcoZSkudHJpbSgpO2lmKFwidG9kYXlcIj09PXUpbD1uZXcgRGF0ZSxpPSEwO2Vsc2UgaWYoL1okLy50ZXN0KHUpfHwvR01UJC8udGVzdCh1KSlsPW5ldyBEYXRlKGUpO2Vsc2UgaWYobiYmbi5wYXJzZURhdGUpbD1uLnBhcnNlRGF0ZShlLHMpO2Vsc2V7bD1uJiZuLm5vQ2FsZW5kYXI/bmV3IERhdGUoKG5ldyBEYXRlKS5zZXRIb3VycygwLDAsMCwwKSk6bmV3IERhdGUoKG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpLDAsMSwwLDAsMCwwKTtmb3IodmFyIGY9dm9pZCAwLG09W10sZz0wLHA9MCxoPVwiXCI7ZzxzLmxlbmd0aDtnKyspe3ZhciB3PXNbZ10sYj1cIlxcXFxcIj09PXcsQz1cIlxcXFxcIj09PXNbZy0xXXx8YjtpZihEW3ddJiYhQyl7aCs9RFt3XTt2YXIgTT1uZXcgUmVnRXhwKGgpLmV4ZWMoZSk7TSYmKGY9ITApJiZtW1wiWVwiIT09dz9cInB1c2hcIjpcInVuc2hpZnRcIl0oe2ZuOnZbd10sdmFsOk1bKytwXX0pfWVsc2UgYnx8KGgrPVwiLlwiKTttLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZm4sbj1lLnZhbDtyZXR1cm4gbD10KGwsbixjKXx8bH0pKX1sPWY/bDp2b2lkIDB9fWlmKGwgaW5zdGFuY2VvZiBEYXRlJiYhaXNOYU4obC5nZXRUaW1lKCkpKXJldHVybiEwPT09aSYmbC5zZXRIb3VycygwLDAsMCwwKSxsO24uZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBwcm92aWRlZDogXCIrZCkpfX19O2Z1bmN0aW9uIE0oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksITEhPT1uP25ldyBEYXRlKGUuZ2V0VGltZSgpKS5zZXRIb3VycygwLDAsMCwwKS1uZXcgRGF0ZSh0LmdldFRpbWUoKSkuc2V0SG91cnMoMCwwLDAsMCk6ZS5nZXRUaW1lKCktdC5nZXRUaW1lKCl9dmFyIHk9ODY0ZTU7ZnVuY3Rpb24geChlKXt2YXIgdD1lLmRlZmF1bHRIb3VyLG49ZS5kZWZhdWx0TWludXRlLGE9ZS5kZWZhdWx0U2Vjb25kcztpZih2b2lkIDAhPT1lLm1pbkRhdGUpe3ZhciBpPWUubWluRGF0ZS5nZXRIb3VycygpLG89ZS5taW5EYXRlLmdldE1pbnV0ZXMoKSxyPWUubWluRGF0ZS5nZXRTZWNvbmRzKCk7dDxpJiYodD1pKSx0PT09aSYmbjxvJiYobj1vKSx0PT09aSYmbj09PW8mJmE8ciYmKGE9ZS5taW5EYXRlLmdldFNlY29uZHMoKSl9aWYodm9pZCAwIT09ZS5tYXhEYXRlKXt2YXIgbD1lLm1heERhdGUuZ2V0SG91cnMoKSxjPWUubWF4RGF0ZS5nZXRNaW51dGVzKCk7KHQ9TWF0aC5taW4odCxsKSk9PT1sJiYobj1NYXRoLm1pbihjLG4pKSx0PT09bCYmbj09PWMmJihhPWUubWF4RGF0ZS5nZXRTZWNvbmRzKCkpfXJldHVybntob3Vyczp0LG1pbnV0ZXM6bixzZWNvbmRzOmF9fVwiZnVuY3Rpb25cIiE9dHlwZW9mIE9iamVjdC5hc3NpZ24mJihPYmplY3QuYXNzaWduPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO2lmKCFlKXRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdFwiKTtmb3IodmFyIGE9ZnVuY3Rpb24odCl7dCYmT2JqZWN0LmtleXModCkuZm9yRWFjaCgoZnVuY3Rpb24obil7cmV0dXJuIGVbbl09dFtuXX0pKX0saT0wLG89dDtpPG8ubGVuZ3RoO2krKyl7dmFyIHI9b1tpXTthKHIpfXJldHVybiBlfSk7ZnVuY3Rpb24gRShwLHYpe3ZhciB3PXtjb25maWc6ZShlKHt9LGEpLFQuZGVmYXVsdENvbmZpZyksbDEwbjppfTtmdW5jdGlvbiBFKGUpe3JldHVybiBlLmJpbmQodyl9ZnVuY3Rpb24gaygpe3ZhciBlPXcuY29uZmlnOyExPT09ZS53ZWVrTnVtYmVycyYmMT09PWUuc2hvd01vbnRoc3x8ITAhPT1lLm5vQ2FsZW5kYXImJndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7aWYodm9pZCAwIT09dy5jYWxlbmRhckNvbnRhaW5lciYmKHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLHZvaWQgMCE9PXcuZGF5c0NvbnRhaW5lcil7dmFyIHQ9KHcuZGF5cy5vZmZzZXRXaWR0aCsxKSplLnNob3dNb250aHM7dy5kYXlzQ29udGFpbmVyLnN0eWxlLndpZHRoPXQrXCJweFwiLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGg9dCsodm9pZCAwIT09dy53ZWVrV3JhcHBlcj93LndlZWtXcmFwcGVyLm9mZnNldFdpZHRoOjApK1wicHhcIix3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidmlzaWJpbGl0eVwiKSx3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKX19KSl9ZnVuY3Rpb24gSShlKXtpZigwPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCl7dmFyIHQ9dm9pZCAwPT09dy5jb25maWcubWluRGF0ZXx8TShuZXcgRGF0ZSx3LmNvbmZpZy5taW5EYXRlKT49MD9uZXcgRGF0ZTpuZXcgRGF0ZSh3LmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSksbj14KHcuY29uZmlnKTt0LnNldEhvdXJzKG4uaG91cnMsbi5taW51dGVzLG4uc2Vjb25kcyx0LmdldE1pbGxpc2Vjb25kcygpKSx3LnNlbGVjdGVkRGF0ZXM9W3RdLHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqPXR9dm9pZCAwIT09ZSYmXCJibHVyXCIhPT1lLnR5cGUmJmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD1cImtleWRvd25cIj09PWUudHlwZSxuPWcoZSksYT1uO3ZvaWQgMCE9PXcuYW1QTSYmbj09PXcuYW1QTSYmKHcuYW1QTS50ZXh0Q29udGVudD13LmwxMG4uYW1QTVtyKHcuYW1QTS50ZXh0Q29udGVudD09PXcubDEwbi5hbVBNWzBdKV0pO3ZhciBpPXBhcnNlRmxvYXQoYS5nZXRBdHRyaWJ1dGUoXCJtaW5cIikpLGw9cGFyc2VGbG9hdChhLmdldEF0dHJpYnV0ZShcIm1heFwiKSksYz1wYXJzZUZsb2F0KGEuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSksZD1wYXJzZUludChhLnZhbHVlLDEwKSxzPWUuZGVsdGF8fCh0PzM4PT09ZS53aGljaD8xOi0xOjApLHU9ZCtjKnM7aWYodm9pZCAwIT09YS52YWx1ZSYmMj09PWEudmFsdWUubGVuZ3RoKXt2YXIgZj1hPT09dy5ob3VyRWxlbWVudCxtPWE9PT13Lm1pbnV0ZUVsZW1lbnQ7dTxpPyh1PWwrdStyKCFmKSsocihmKSYmcighdy5hbVBNKSksbSYmaih2b2lkIDAsLTEsdy5ob3VyRWxlbWVudCkpOnU+bCYmKHU9YT09PXcuaG91ckVsZW1lbnQ/dS1sLXIoIXcuYW1QTSk6aSxtJiZqKHZvaWQgMCwxLHcuaG91ckVsZW1lbnQpKSx3LmFtUE0mJmYmJigxPT09Yz91K2Q9PT0yMzpNYXRoLmFicyh1LWQpPmMpJiYody5hbVBNLnRleHRDb250ZW50PXcubDEwbi5hbVBNW3Iody5hbVBNLnRleHRDb250ZW50PT09dy5sMTBuLmFtUE1bMF0pXSksYS52YWx1ZT1vKHUpfX0oZSk7dmFyIGE9dy5faW5wdXQudmFsdWU7UygpLGJlKCksdy5faW5wdXQudmFsdWUhPT1hJiZ3Ll9kZWJvdW5jZWRDaGFuZ2UoKX1mdW5jdGlvbiBTKCl7aWYodm9pZCAwIT09dy5ob3VyRWxlbWVudCYmdm9pZCAwIT09dy5taW51dGVFbGVtZW50KXt2YXIgZSx0LG49KHBhcnNlSW50KHcuaG91ckVsZW1lbnQudmFsdWUuc2xpY2UoLTIpLDEwKXx8MCklMjQsYT0ocGFyc2VJbnQody5taW51dGVFbGVtZW50LnZhbHVlLDEwKXx8MCklNjAsaT12b2lkIDAhPT13LnNlY29uZEVsZW1lbnQ/KHBhcnNlSW50KHcuc2Vjb25kRWxlbWVudC52YWx1ZSwxMCl8fDApJTYwOjA7dm9pZCAwIT09dy5hbVBNJiYoZT1uLHQ9dy5hbVBNLnRleHRDb250ZW50LG49ZSUxMisxMipyKHQ9PT13LmwxMG4uYW1QTVsxXSkpO3ZhciBvPXZvaWQgMCE9PXcuY29uZmlnLm1pblRpbWV8fHcuY29uZmlnLm1pbkRhdGUmJncubWluRGF0ZUhhc1RpbWUmJncubGF0ZXN0U2VsZWN0ZWREYXRlT2JqJiYwPT09TSh3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaix3LmNvbmZpZy5taW5EYXRlLCEwKTtpZih2b2lkIDAhPT13LmNvbmZpZy5tYXhUaW1lfHx3LmNvbmZpZy5tYXhEYXRlJiZ3Lm1heERhdGVIYXNUaW1lJiZ3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiYmMD09PU0ody5sYXRlc3RTZWxlY3RlZERhdGVPYmosdy5jb25maWcubWF4RGF0ZSwhMCkpe3ZhciBsPXZvaWQgMCE9PXcuY29uZmlnLm1heFRpbWU/dy5jb25maWcubWF4VGltZTp3LmNvbmZpZy5tYXhEYXRlOyhuPU1hdGgubWluKG4sbC5nZXRIb3VycygpKSk9PT1sLmdldEhvdXJzKCkmJihhPU1hdGgubWluKGEsbC5nZXRNaW51dGVzKCkpKSxhPT09bC5nZXRNaW51dGVzKCkmJihpPU1hdGgubWluKGksbC5nZXRTZWNvbmRzKCkpKX1pZihvKXt2YXIgYz12b2lkIDAhPT13LmNvbmZpZy5taW5UaW1lP3cuY29uZmlnLm1pblRpbWU6dy5jb25maWcubWluRGF0ZTsobj1NYXRoLm1heChuLGMuZ2V0SG91cnMoKSkpPT09Yy5nZXRIb3VycygpJiZhPGMuZ2V0TWludXRlcygpJiYoYT1jLmdldE1pbnV0ZXMoKSksYT09PWMuZ2V0TWludXRlcygpJiYoaT1NYXRoLm1heChpLGMuZ2V0U2Vjb25kcygpKSl9TyhuLGEsaSl9fWZ1bmN0aW9uIF8oZSl7dmFyIHQ9ZXx8dy5sYXRlc3RTZWxlY3RlZERhdGVPYmo7dCYmTyh0LmdldEhvdXJzKCksdC5nZXRNaW51dGVzKCksdC5nZXRTZWNvbmRzKCkpfWZ1bmN0aW9uIE8oZSx0LG4pe3ZvaWQgMCE9PXcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqJiZ3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3VycyhlJTI0LHQsbnx8MCwwKSx3LmhvdXJFbGVtZW50JiZ3Lm1pbnV0ZUVsZW1lbnQmJiF3LmlzTW9iaWxlJiYody5ob3VyRWxlbWVudC52YWx1ZT1vKHcuY29uZmlnLnRpbWVfMjRocj9lOigxMitlKSUxMisxMipyKGUlMTI9PTApKSx3Lm1pbnV0ZUVsZW1lbnQudmFsdWU9byh0KSx2b2lkIDAhPT13LmFtUE0mJih3LmFtUE0udGV4dENvbnRlbnQ9dy5sMTBuLmFtUE1bcihlPj0xMildKSx2b2lkIDAhPT13LnNlY29uZEVsZW1lbnQmJih3LnNlY29uZEVsZW1lbnQudmFsdWU9byhuKSkpfWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZyhlKSxuPXBhcnNlSW50KHQudmFsdWUpKyhlLmRlbHRhfHwwKTsobi8xZTM+MXx8XCJFbnRlclwiPT09ZS5rZXkmJiEvW15cXGRdLy50ZXN0KG4udG9TdHJpbmcoKSkpJiZRKG4pfWZ1bmN0aW9uIEEoZSx0LG4sYSl7cmV0dXJuIHQgaW5zdGFuY2VvZiBBcnJheT90LmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBBKGUsdCxuLGEpfSkpOmUgaW5zdGFuY2VvZiBBcnJheT9lLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBBKGUsdCxuLGEpfSkpOihlLmFkZEV2ZW50TGlzdGVuZXIodCxuLGEpLHZvaWQgdy5faGFuZGxlcnMucHVzaCh7cmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfX0pKX1mdW5jdGlvbiBOKCl7cGUoXCJvbkNoYW5nZVwiKX1mdW5jdGlvbiBQKGUsdCl7dmFyIG49dm9pZCAwIT09ZT93LnBhcnNlRGF0ZShlKTp3LmxhdGVzdFNlbGVjdGVkRGF0ZU9ianx8KHcuY29uZmlnLm1pbkRhdGUmJncuY29uZmlnLm1pbkRhdGU+dy5ub3c/dy5jb25maWcubWluRGF0ZTp3LmNvbmZpZy5tYXhEYXRlJiZ3LmNvbmZpZy5tYXhEYXRlPHcubm93P3cuY29uZmlnLm1heERhdGU6dy5ub3cpLGE9dy5jdXJyZW50WWVhcixpPXcuY3VycmVudE1vbnRoO3RyeXt2b2lkIDAhPT1uJiYody5jdXJyZW50WWVhcj1uLmdldEZ1bGxZZWFyKCksdy5jdXJyZW50TW9udGg9bi5nZXRNb250aCgpKX1jYXRjaChlKXtlLm1lc3NhZ2U9XCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiK24sdy5jb25maWcuZXJyb3JIYW5kbGVyKGUpfXQmJncuY3VycmVudFllYXIhPT1hJiYocGUoXCJvblllYXJDaGFuZ2VcIiksSygpKSwhdHx8dy5jdXJyZW50WWVhcj09PWEmJncuY3VycmVudE1vbnRoPT09aXx8cGUoXCJvbk1vbnRoQ2hhbmdlXCIpLHcucmVkcmF3KCl9ZnVuY3Rpb24gWShlKXt2YXIgdD1nKGUpO350LmNsYXNzTmFtZS5pbmRleE9mKFwiYXJyb3dcIikmJmooZSx0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIik/MTotMSl9ZnVuY3Rpb24gaihlLHQsbil7dmFyIGE9ZSYmZyhlKSxpPW58fGEmJmEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsbz1oZShcImluY3JlbWVudFwiKTtvLmRlbHRhPXQsaSYmaS5kaXNwYXRjaEV2ZW50KG8pfWZ1bmN0aW9uIEgoZSx0LG4sYSl7dmFyIGk9WCh0LCEwKSxvPXMoXCJzcGFuXCIsXCJmbGF0cGlja3ItZGF5IFwiK2UsdC5nZXREYXRlKCkudG9TdHJpbmcoKSk7cmV0dXJuIG8uZGF0ZU9iaj10LG8uJGk9YSxvLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix3LmZvcm1hdERhdGUodCx3LmNvbmZpZy5hcmlhRGF0ZUZvcm1hdCkpLC0xPT09ZS5pbmRleE9mKFwiaGlkZGVuXCIpJiYwPT09TSh0LHcubm93KSYmKHcudG9kYXlEYXRlRWxlbT1vLG8uY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpLG8uc2V0QXR0cmlidXRlKFwiYXJpYS1jdXJyZW50XCIsXCJkYXRlXCIpKSxpPyhvLnRhYkluZGV4PS0xLHZlKHQpJiYoby5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIiksdy5zZWxlY3RlZERhdGVFbGVtPW8sXCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmKGQobyxcInN0YXJ0UmFuZ2VcIix3LnNlbGVjdGVkRGF0ZXNbMF0mJjA9PT1NKHQsdy5zZWxlY3RlZERhdGVzWzBdLCEwKSksZChvLFwiZW5kUmFuZ2VcIix3LnNlbGVjdGVkRGF0ZXNbMV0mJjA9PT1NKHQsdy5zZWxlY3RlZERhdGVzWzFdLCEwKSksXCJuZXh0TW9udGhEYXlcIj09PWUmJm8uY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIikpKSk6by5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpLFwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUmJmZ1bmN0aW9uKGUpe3JldHVybiEoXCJyYW5nZVwiIT09dy5jb25maWcubW9kZXx8dy5zZWxlY3RlZERhdGVzLmxlbmd0aDwyKSYmKE0oZSx3LnNlbGVjdGVkRGF0ZXNbMF0pPj0wJiZNKGUsdy5zZWxlY3RlZERhdGVzWzFdKTw9MCl9KHQpJiYhdmUodCkmJm8uY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIiksdy53ZWVrTnVtYmVycyYmMT09PXcuY29uZmlnLnNob3dNb250aHMmJlwicHJldk1vbnRoRGF5XCIhPT1lJiZuJTc9PTEmJncud2Vla051bWJlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsXCI8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLWRheSc+XCIrdy5jb25maWcuZ2V0V2Vlayh0KStcIjwvc3Bhbj5cIikscGUoXCJvbkRheUNyZWF0ZVwiLG8pLG99ZnVuY3Rpb24gTChlKXtlLmZvY3VzKCksXCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmYWUoZSl9ZnVuY3Rpb24gVyhlKXtmb3IodmFyIHQ9ZT4wPzA6dy5jb25maWcuc2hvd01vbnRocy0xLG49ZT4wP3cuY29uZmlnLnNob3dNb250aHM6LTEsYT10O2EhPW47YSs9ZSlmb3IodmFyIGk9dy5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW2FdLG89ZT4wPzA6aS5jaGlsZHJlbi5sZW5ndGgtMSxyPWU+MD9pLmNoaWxkcmVuLmxlbmd0aDotMSxsPW87bCE9cjtsKz1lKXt2YXIgYz1pLmNoaWxkcmVuW2xdO2lmKC0xPT09Yy5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSYmWChjLmRhdGVPYmopKXJldHVybiBjfX1mdW5jdGlvbiBSKGUsdCl7dmFyIG49ZWUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudHx8ZG9jdW1lbnQuYm9keSksYT12b2lkIDAhPT1lP2U6bj9kb2N1bWVudC5hY3RpdmVFbGVtZW50OnZvaWQgMCE9PXcuc2VsZWN0ZWREYXRlRWxlbSYmZWUody5zZWxlY3RlZERhdGVFbGVtKT93LnNlbGVjdGVkRGF0ZUVsZW06dm9pZCAwIT09dy50b2RheURhdGVFbGVtJiZlZSh3LnRvZGF5RGF0ZUVsZW0pP3cudG9kYXlEYXRlRWxlbTpXKHQ+MD8xOi0xKTt2b2lkIDA9PT1hP3cuX2lucHV0LmZvY3VzKCk6bj9mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0tMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoXCJNb250aFwiKT9lLmRhdGVPYmouZ2V0TW9udGgoKTp3LmN1cnJlbnRNb250aCxhPXQ+MD93LmNvbmZpZy5zaG93TW9udGhzOi0xLGk9dD4wPzE6LTEsbz1uLXcuY3VycmVudE1vbnRoO28hPWE7bys9aSlmb3IodmFyIHI9dy5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW29dLGw9bi13LmN1cnJlbnRNb250aD09PW8/ZS4kaSt0OnQ8MD9yLmNoaWxkcmVuLmxlbmd0aC0xOjAsYz1yLmNoaWxkcmVuLmxlbmd0aCxkPWw7ZD49MCYmZDxjJiZkIT0odD4wP2M6LTEpO2QrPWkpe3ZhciBzPXIuY2hpbGRyZW5bZF07aWYoLTE9PT1zLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpJiZYKHMuZGF0ZU9iaikmJk1hdGguYWJzKGUuJGktZCk+PU1hdGguYWJzKHQpKXJldHVybiBMKHMpfXcuY2hhbmdlTW9udGgoaSksUihXKGkpLDApfShhLHQpOkwoYSl9ZnVuY3Rpb24gQihlLHQpe2Zvcih2YXIgbj0obmV3IERhdGUoZSx0LDEpLmdldERheSgpLXcubDEwbi5maXJzdERheU9mV2Vlays3KSU3LGE9dy51dGlscy5nZXREYXlzSW5Nb250aCgodC0xKzEyKSUxMixlKSxpPXcudXRpbHMuZ2V0RGF5c0luTW9udGgodCxlKSxvPXdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscj13LmNvbmZpZy5zaG93TW9udGhzPjEsbD1yP1wicHJldk1vbnRoRGF5IGhpZGRlblwiOlwicHJldk1vbnRoRGF5XCIsYz1yP1wibmV4dE1vbnRoRGF5IGhpZGRlblwiOlwibmV4dE1vbnRoRGF5XCIsZD1hKzEtbix1PTA7ZDw9YTtkKyssdSsrKW8uYXBwZW5kQ2hpbGQoSChsLG5ldyBEYXRlKGUsdC0xLGQpLGQsdSkpO2ZvcihkPTE7ZDw9aTtkKyssdSsrKW8uYXBwZW5kQ2hpbGQoSChcIlwiLG5ldyBEYXRlKGUsdCxkKSxkLHUpKTtmb3IodmFyIGY9aSsxO2Y8PTQyLW4mJigxPT09dy5jb25maWcuc2hvd01vbnRoc3x8dSU3IT0wKTtmKyssdSsrKW8uYXBwZW5kQ2hpbGQoSChjLG5ldyBEYXRlKGUsdCsxLGYlaSksZix1KSk7dmFyIG09cyhcImRpdlwiLFwiZGF5Q29udGFpbmVyXCIpO3JldHVybiBtLmFwcGVuZENoaWxkKG8pLG19ZnVuY3Rpb24gSigpe2lmKHZvaWQgMCE9PXcuZGF5c0NvbnRhaW5lcil7dSh3LmRheXNDb250YWluZXIpLHcud2Vla051bWJlcnMmJnUody53ZWVrTnVtYmVycyk7Zm9yKHZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSx0PTA7dDx3LmNvbmZpZy5zaG93TW9udGhzO3QrKyl7dmFyIG49bmV3IERhdGUody5jdXJyZW50WWVhcix3LmN1cnJlbnRNb250aCwxKTtuLnNldE1vbnRoKHcuY3VycmVudE1vbnRoK3QpLGUuYXBwZW5kQ2hpbGQoQihuLmdldEZ1bGxZZWFyKCksbi5nZXRNb250aCgpKSl9dy5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpLHcuZGF5cz13LmRheXNDb250YWluZXIuZmlyc3RDaGlsZCxcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiYxPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmYWUoKX19ZnVuY3Rpb24gSygpe2lmKCEody5jb25maWcuc2hvd01vbnRocz4xfHxcImRyb3Bkb3duXCIhPT13LmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZSkpe3ZhciBlPWZ1bmN0aW9uKGUpe3JldHVybiEodm9pZCAwIT09dy5jb25maWcubWluRGF0ZSYmdy5jdXJyZW50WWVhcj09PXcuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSYmZTx3LmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCkpJiYhKHZvaWQgMCE9PXcuY29uZmlnLm1heERhdGUmJncuY3VycmVudFllYXI9PT13LmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkmJmU+dy5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpKX07dy5tb250aHNEcm9wZG93bkNvbnRhaW5lci50YWJJbmRleD0tMSx3Lm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmlubmVySFRNTD1cIlwiO2Zvcih2YXIgdD0wO3Q8MTI7dCsrKWlmKGUodCkpe3ZhciBuPXMoXCJvcHRpb25cIixcImZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoXCIpO24udmFsdWU9bmV3IERhdGUody5jdXJyZW50WWVhcix0KS5nZXRNb250aCgpLnRvU3RyaW5nKCksbi50ZXh0Q29udGVudD1oKHQsdy5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLHcubDEwbiksbi50YWJJbmRleD0tMSx3LmN1cnJlbnRNb250aD09PXQmJihuLnNlbGVjdGVkPSEwKSx3Lm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKG4pfX19ZnVuY3Rpb24gVSgpe3ZhciBlLHQ9cyhcImRpdlwiLFwiZmxhdHBpY2tyLW1vbnRoXCIpLG49d2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt3LmNvbmZpZy5zaG93TW9udGhzPjF8fFwic3RhdGljXCI9PT13LmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZT9lPXMoXCJzcGFuXCIsXCJjdXItbW9udGhcIik6KHcubW9udGhzRHJvcGRvd25Db250YWluZXI9cyhcInNlbGVjdFwiLFwiZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhzXCIpLHcubW9udGhzRHJvcGRvd25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHcubDEwbi5tb250aEFyaWFMYWJlbCksQSh3Lm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLFwiY2hhbmdlXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWcoZSksbj1wYXJzZUludCh0LnZhbHVlLDEwKTt3LmNoYW5nZU1vbnRoKG4tdy5jdXJyZW50TW9udGgpLHBlKFwib25Nb250aENoYW5nZVwiKX0pKSxLKCksZT13Lm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyKTt2YXIgYT1tKFwiY3VyLXllYXJcIix7dGFiaW5kZXg6XCItMVwifSksaT1hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07aS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdy5sMTBuLnllYXJBcmlhTGFiZWwpLHcuY29uZmlnLm1pbkRhdGUmJmkuc2V0QXR0cmlidXRlKFwibWluXCIsdy5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLHcuY29uZmlnLm1heERhdGUmJihpLnNldEF0dHJpYnV0ZShcIm1heFwiLHcuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKSxpLmRpc2FibGVkPSEhdy5jb25maWcubWluRGF0ZSYmdy5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpPT09dy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKTt2YXIgbz1zKFwiZGl2XCIsXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtyZXR1cm4gby5hcHBlbmRDaGlsZChlKSxvLmFwcGVuZENoaWxkKGEpLG4uYXBwZW5kQ2hpbGQobyksdC5hcHBlbmRDaGlsZChuKSx7Y29udGFpbmVyOnQseWVhckVsZW1lbnQ6aSxtb250aEVsZW1lbnQ6ZX19ZnVuY3Rpb24gcSgpe3Uody5tb250aE5hdiksdy5tb250aE5hdi5hcHBlbmRDaGlsZCh3LnByZXZNb250aE5hdiksdy5jb25maWcuc2hvd01vbnRocyYmKHcueWVhckVsZW1lbnRzPVtdLHcubW9udGhFbGVtZW50cz1bXSk7Zm9yKHZhciBlPXcuY29uZmlnLnNob3dNb250aHM7ZS0tOyl7dmFyIHQ9VSgpO3cueWVhckVsZW1lbnRzLnB1c2godC55ZWFyRWxlbWVudCksdy5tb250aEVsZW1lbnRzLnB1c2godC5tb250aEVsZW1lbnQpLHcubW9udGhOYXYuYXBwZW5kQ2hpbGQodC5jb250YWluZXIpfXcubW9udGhOYXYuYXBwZW5kQ2hpbGQody5uZXh0TW9udGhOYXYpfWZ1bmN0aW9uICQoKXt3LndlZWtkYXlDb250YWluZXI/dSh3LndlZWtkYXlDb250YWluZXIpOncud2Vla2RheUNvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3Itd2Vla2RheXNcIik7Zm9yKHZhciBlPXcuY29uZmlnLnNob3dNb250aHM7ZS0tOyl7dmFyIHQ9cyhcImRpdlwiLFwiZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXJcIik7dy53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHQpfXJldHVybiB6KCksdy53ZWVrZGF5Q29udGFpbmVyfWZ1bmN0aW9uIHooKXtpZih3LndlZWtkYXlDb250YWluZXIpe3ZhciBlPXcubDEwbi5maXJzdERheU9mV2VlayxuPXQody5sMTBuLndlZWtkYXlzLnNob3J0aGFuZCk7ZT4wJiZlPG4ubGVuZ3RoJiYobj10KG4uc3BsaWNlKGUsbi5sZW5ndGgpLG4uc3BsaWNlKDAsZSkpKTtmb3IodmFyIGE9dy5jb25maWcuc2hvd01vbnRoczthLS07KXcud2Vla2RheUNvbnRhaW5lci5jaGlsZHJlblthXS5pbm5lckhUTUw9XCJcXG4gICAgICA8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlxcbiAgICAgICAgXCIrbi5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdmbGF0cGlja3Itd2Vla2RheSc+XCIpK1wiXFxuICAgICAgPC9zcGFuPlxcbiAgICAgIFwifX1mdW5jdGlvbiBHKGUsdCl7dm9pZCAwPT09dCYmKHQ9ITApO3ZhciBuPXQ/ZTplLXcuY3VycmVudE1vbnRoO248MCYmITA9PT13Ll9oaWRlUHJldk1vbnRoQXJyb3d8fG4+MCYmITA9PT13Ll9oaWRlTmV4dE1vbnRoQXJyb3d8fCh3LmN1cnJlbnRNb250aCs9biwody5jdXJyZW50TW9udGg8MHx8dy5jdXJyZW50TW9udGg+MTEpJiYody5jdXJyZW50WWVhcis9dy5jdXJyZW50TW9udGg+MTE/MTotMSx3LmN1cnJlbnRNb250aD0ody5jdXJyZW50TW9udGgrMTIpJTEyLHBlKFwib25ZZWFyQ2hhbmdlXCIpLEsoKSksSigpLHBlKFwib25Nb250aENoYW5nZVwiKSxEZSgpKX1mdW5jdGlvbiBWKGUpe3JldHVybiEoIXcuY29uZmlnLmFwcGVuZFRvfHwhdy5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZSkpfHx3LmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUpfWZ1bmN0aW9uIFooZSl7aWYody5pc09wZW4mJiF3LmNvbmZpZy5pbmxpbmUpe3ZhciB0PWcoZSksbj1WKHQpLGE9dD09PXcuaW5wdXR8fHQ9PT13LmFsdElucHV0fHx3LmVsZW1lbnQuY29udGFpbnModCl8fGUucGF0aCYmZS5wYXRoLmluZGV4T2YmJih+ZS5wYXRoLmluZGV4T2Yody5pbnB1dCl8fH5lLnBhdGguaW5kZXhPZih3LmFsdElucHV0KSksaT1cImJsdXJcIj09PWUudHlwZT9hJiZlLnJlbGF0ZWRUYXJnZXQmJiFWKGUucmVsYXRlZFRhcmdldCk6IWEmJiFuJiYhVihlLnJlbGF0ZWRUYXJnZXQpLG89IXcuY29uZmlnLmlnbm9yZWRGb2N1c0VsZW1lbnRzLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNvbnRhaW5zKHQpfSkpO2kmJm8mJih2b2lkIDAhPT13LnRpbWVDb250YWluZXImJnZvaWQgMCE9PXcubWludXRlRWxlbWVudCYmdm9pZCAwIT09dy5ob3VyRWxlbWVudCYmXCJcIiE9PXcuaW5wdXQudmFsdWUmJnZvaWQgMCE9PXcuaW5wdXQudmFsdWUmJkkoKSx3LmNsb3NlKCksdy5jb25maWcmJlwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUmJjE9PT13LnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiYody5jbGVhcighMSksdy5yZWRyYXcoKSkpfX1mdW5jdGlvbiBRKGUpe2lmKCEoIWV8fHcuY29uZmlnLm1pbkRhdGUmJmU8dy5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpfHx3LmNvbmZpZy5tYXhEYXRlJiZlPncuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSkpe3ZhciB0PWUsbj13LmN1cnJlbnRZZWFyIT09dDt3LmN1cnJlbnRZZWFyPXR8fHcuY3VycmVudFllYXIsdy5jb25maWcubWF4RGF0ZSYmdy5jdXJyZW50WWVhcj09PXcuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKT93LmN1cnJlbnRNb250aD1NYXRoLm1pbih3LmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksdy5jdXJyZW50TW9udGgpOncuY29uZmlnLm1pbkRhdGUmJncuY3VycmVudFllYXI9PT13LmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkmJih3LmN1cnJlbnRNb250aD1NYXRoLm1heCh3LmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCksdy5jdXJyZW50TW9udGgpKSxuJiYody5yZWRyYXcoKSxwZShcIm9uWWVhckNoYW5nZVwiKSxLKCkpfX1mdW5jdGlvbiBYKGUsdCl7dmFyIG47dm9pZCAwPT09dCYmKHQ9ITApO3ZhciBhPXcucGFyc2VEYXRlKGUsdm9pZCAwLHQpO2lmKHcuY29uZmlnLm1pbkRhdGUmJmEmJk0oYSx3LmNvbmZpZy5taW5EYXRlLHZvaWQgMCE9PXQ/dDohdy5taW5EYXRlSGFzVGltZSk8MHx8dy5jb25maWcubWF4RGF0ZSYmYSYmTShhLHcuY29uZmlnLm1heERhdGUsdm9pZCAwIT09dD90OiF3Lm1heERhdGVIYXNUaW1lKT4wKXJldHVybiExO2lmKCF3LmNvbmZpZy5lbmFibGUmJjA9PT13LmNvbmZpZy5kaXNhYmxlLmxlbmd0aClyZXR1cm4hMDtpZih2b2lkIDA9PT1hKXJldHVybiExO2Zvcih2YXIgaT0hIXcuY29uZmlnLmVuYWJsZSxvPW51bGwhPT0obj13LmNvbmZpZy5lbmFibGUpJiZ2b2lkIDAhPT1uP246dy5jb25maWcuZGlzYWJsZSxyPTAsbD12b2lkIDA7cjxvLmxlbmd0aDtyKyspe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKGw9b1tyXSkmJmwoYSkpcmV0dXJuIGk7aWYobCBpbnN0YW5jZW9mIERhdGUmJnZvaWQgMCE9PWEmJmwuZ2V0VGltZSgpPT09YS5nZXRUaW1lKCkpcmV0dXJuIGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGwpe3ZhciBjPXcucGFyc2VEYXRlKGwsdm9pZCAwLCEwKTtyZXR1cm4gYyYmYy5nZXRUaW1lKCk9PT1hLmdldFRpbWUoKT9pOiFpfWlmKFwib2JqZWN0XCI9PXR5cGVvZiBsJiZ2b2lkIDAhPT1hJiZsLmZyb20mJmwudG8mJmEuZ2V0VGltZSgpPj1sLmZyb20uZ2V0VGltZSgpJiZhLmdldFRpbWUoKTw9bC50by5nZXRUaW1lKCkpcmV0dXJuIGl9cmV0dXJuIWl9ZnVuY3Rpb24gZWUoZSl7cmV0dXJuIHZvaWQgMCE9PXcuZGF5c0NvbnRhaW5lciYmKC0xPT09ZS5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSYmLTE9PT1lLmNsYXNzTmFtZS5pbmRleE9mKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpJiZ3LmRheXNDb250YWluZXIuY29udGFpbnMoZSkpfWZ1bmN0aW9uIHRlKGUpeyEoZS50YXJnZXQ9PT13Ll9pbnB1dCl8fCEody5zZWxlY3RlZERhdGVzLmxlbmd0aD4wfHx3Ll9pbnB1dC52YWx1ZS5sZW5ndGg+MCl8fGUucmVsYXRlZFRhcmdldCYmVihlLnJlbGF0ZWRUYXJnZXQpfHx3LnNldERhdGUody5faW5wdXQudmFsdWUsITAsZS50YXJnZXQ9PT13LmFsdElucHV0P3cuY29uZmlnLmFsdEZvcm1hdDp3LmNvbmZpZy5kYXRlRm9ybWF0KX1mdW5jdGlvbiBuZShlKXt2YXIgdD1nKGUpLG49dy5jb25maWcud3JhcD9wLmNvbnRhaW5zKHQpOnQ9PT13Ll9pbnB1dCxhPXcuY29uZmlnLmFsbG93SW5wdXQsaT13LmlzT3BlbiYmKCFhfHwhbiksbz13LmNvbmZpZy5pbmxpbmUmJm4mJiFhO2lmKDEzPT09ZS5rZXlDb2RlJiZuKXtpZihhKXJldHVybiB3LnNldERhdGUody5faW5wdXQudmFsdWUsITAsdD09PXcuYWx0SW5wdXQ/dy5jb25maWcuYWx0Rm9ybWF0OncuY29uZmlnLmRhdGVGb3JtYXQpLHQuYmx1cigpO3cub3BlbigpfWVsc2UgaWYoVih0KXx8aXx8byl7dmFyIHI9ISF3LnRpbWVDb250YWluZXImJncudGltZUNvbnRhaW5lci5jb250YWlucyh0KTtzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDEzOnI/KGUucHJldmVudERlZmF1bHQoKSxJKCksc2UoKSk6dWUoZSk7YnJlYWs7Y2FzZSAyNzplLnByZXZlbnREZWZhdWx0KCksc2UoKTticmVhaztjYXNlIDg6Y2FzZSA0NjpuJiYhdy5jb25maWcuYWxsb3dJbnB1dCYmKGUucHJldmVudERlZmF1bHQoKSx3LmNsZWFyKCkpO2JyZWFrO2Nhc2UgMzc6Y2FzZSAzOTppZihyfHxuKXcuaG91ckVsZW1lbnQmJncuaG91ckVsZW1lbnQuZm9jdXMoKTtlbHNlIGlmKGUucHJldmVudERlZmF1bHQoKSx2b2lkIDAhPT13LmRheXNDb250YWluZXImJighMT09PWF8fGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmVlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSl7dmFyIGw9Mzk9PT1lLmtleUNvZGU/MTotMTtlLmN0cmxLZXk/KGUuc3RvcFByb3BhZ2F0aW9uKCksRyhsKSxSKFcoMSksMCkpOlIodm9pZCAwLGwpfWJyZWFrO2Nhc2UgMzg6Y2FzZSA0MDplLnByZXZlbnREZWZhdWx0KCk7dmFyIGM9NDA9PT1lLmtleUNvZGU/MTotMTt3LmRheXNDb250YWluZXImJnZvaWQgMCE9PXQuJGl8fHQ9PT13LmlucHV0fHx0PT09dy5hbHRJbnB1dD9lLmN0cmxLZXk/KGUuc3RvcFByb3BhZ2F0aW9uKCksUSh3LmN1cnJlbnRZZWFyLWMpLFIoVygxKSwwKSk6cnx8Uih2b2lkIDAsNypjKTp0PT09dy5jdXJyZW50WWVhckVsZW1lbnQ/USh3LmN1cnJlbnRZZWFyLWMpOncuY29uZmlnLmVuYWJsZVRpbWUmJighciYmdy5ob3VyRWxlbWVudCYmdy5ob3VyRWxlbWVudC5mb2N1cygpLEkoZSksdy5fZGVib3VuY2VkQ2hhbmdlKCkpO2JyZWFrO2Nhc2UgOTppZihyKXt2YXIgZD1bdy5ob3VyRWxlbWVudCx3Lm1pbnV0ZUVsZW1lbnQsdy5zZWNvbmRFbGVtZW50LHcuYW1QTV0uY29uY2F0KHcucGx1Z2luRWxlbWVudHMpLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KSkscz1kLmluZGV4T2YodCk7aWYoLTEhPT1zKXt2YXIgdT1kW3MrKGUuc2hpZnRLZXk/LTE6MSldO2UucHJldmVudERlZmF1bHQoKSwodXx8dy5faW5wdXQpLmZvY3VzKCl9fWVsc2Uhdy5jb25maWcubm9DYWxlbmRhciYmdy5kYXlzQ29udGFpbmVyJiZ3LmRheXNDb250YWluZXIuY29udGFpbnModCkmJmUuc2hpZnRLZXkmJihlLnByZXZlbnREZWZhdWx0KCksdy5faW5wdXQuZm9jdXMoKSl9fWlmKHZvaWQgMCE9PXcuYW1QTSYmdD09PXcuYW1QTSlzd2l0Y2goZS5rZXkpe2Nhc2Ugdy5sMTBuLmFtUE1bMF0uY2hhckF0KDApOmNhc2Ugdy5sMTBuLmFtUE1bMF0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6dy5hbVBNLnRleHRDb250ZW50PXcubDEwbi5hbVBNWzBdLFMoKSxiZSgpO2JyZWFrO2Nhc2Ugdy5sMTBuLmFtUE1bMV0uY2hhckF0KDApOmNhc2Ugdy5sMTBuLmFtUE1bMV0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6dy5hbVBNLnRleHRDb250ZW50PXcubDEwbi5hbVBNWzFdLFMoKSxiZSgpfShufHxWKHQpKSYmcGUoXCJvbktleURvd25cIixlKX1mdW5jdGlvbiBhZShlKXtpZigxPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmKCFlfHxlLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikmJiFlLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSkpe2Zvcih2YXIgdD1lP2UuZGF0ZU9iai5nZXRUaW1lKCk6dy5kYXlzLmZpcnN0RWxlbWVudENoaWxkLmRhdGVPYmouZ2V0VGltZSgpLG49dy5wYXJzZURhdGUody5zZWxlY3RlZERhdGVzWzBdLHZvaWQgMCwhMCkuZ2V0VGltZSgpLGE9TWF0aC5taW4odCx3LnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSxpPU1hdGgubWF4KHQsdy5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksbz0hMSxyPTAsbD0wLGM9YTtjPGk7Yys9eSlYKG5ldyBEYXRlKGMpLCEwKXx8KG89b3x8Yz5hJiZjPGksYzxuJiYoIXJ8fGM+cik/cj1jOmM+biYmKCFsfHxjPGwpJiYobD1jKSk7Zm9yKHZhciBkPTA7ZDx3LmNvbmZpZy5zaG93TW9udGhzO2QrKylmb3IodmFyIHM9dy5kYXlzQ29udGFpbmVyLmNoaWxkcmVuW2RdLHU9ZnVuY3Rpb24oYSxpKXt2YXIgYyxkLHUsZj1zLmNoaWxkcmVuW2FdLG09Zi5kYXRlT2JqLmdldFRpbWUoKSxnPXI+MCYmbTxyfHxsPjAmJm0+bDtyZXR1cm4gZz8oZi5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKSxbXCJpblJhbmdlXCIsXCJzdGFydFJhbmdlXCIsXCJlbmRSYW5nZVwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtmLmNsYXNzTGlzdC5yZW1vdmUoZSl9KSksXCJjb250aW51ZVwiKTpvJiYhZz9cImNvbnRpbnVlXCI6KFtcInN0YXJ0UmFuZ2VcIixcImluUmFuZ2VcIixcImVuZFJhbmdlXCIsXCJub3RBbGxvd2VkXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2YuY2xhc3NMaXN0LnJlbW92ZShlKX0pKSx2b2lkKHZvaWQgMCE9PWUmJihlLmNsYXNzTGlzdC5hZGQodDw9dy5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKT9cInN0YXJ0UmFuZ2VcIjpcImVuZFJhbmdlXCIpLG48dCYmbT09PW4/Zi5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTpuPnQmJm09PT1uJiZmLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKSxtPj1yJiYoMD09PWx8fG08PWwpJiYoZD1uLHU9dCwoYz1tKT5NYXRoLm1pbihkLHUpJiZjPE1hdGgubWF4KGQsdSkpJiZmLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpKSkpfSxmPTAsbT1zLmNoaWxkcmVuLmxlbmd0aDtmPG07ZisrKXUoZil9fWZ1bmN0aW9uIGllKCl7IXcuaXNPcGVufHx3LmNvbmZpZy5zdGF0aWN8fHcuY29uZmlnLmlubGluZXx8Y2UoKX1mdW5jdGlvbiBvZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49dy5jb25maWdbXCJfXCIrZStcIkRhdGVcIl09dy5wYXJzZURhdGUodCx3LmNvbmZpZy5kYXRlRm9ybWF0KSxhPXcuY29uZmlnW1wiX1wiKyhcIm1pblwiPT09ZT9cIm1heFwiOlwibWluXCIpK1wiRGF0ZVwiXTt2b2lkIDAhPT1uJiYod1tcIm1pblwiPT09ZT9cIm1pbkRhdGVIYXNUaW1lXCI6XCJtYXhEYXRlSGFzVGltZVwiXT1uLmdldEhvdXJzKCk+MHx8bi5nZXRNaW51dGVzKCk+MHx8bi5nZXRTZWNvbmRzKCk+MCksdy5zZWxlY3RlZERhdGVzJiYody5zZWxlY3RlZERhdGVzPXcuc2VsZWN0ZWREYXRlcy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBYKGUpfSkpLHcuc2VsZWN0ZWREYXRlcy5sZW5ndGh8fFwibWluXCIhPT1lfHxfKG4pLGJlKCkpLHcuZGF5c0NvbnRhaW5lciYmKGRlKCksdm9pZCAwIT09bj93LmN1cnJlbnRZZWFyRWxlbWVudFtlXT1uLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTp3LmN1cnJlbnRZZWFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoZSksdy5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQ9ISFhJiZ2b2lkIDAhPT1uJiZhLmdldEZ1bGxZZWFyKCk9PT1uLmdldEZ1bGxZZWFyKCkpfX1mdW5jdGlvbiByZSgpe3JldHVybiB3LmNvbmZpZy53cmFwP3AucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKTpwfWZ1bmN0aW9uIGxlKCl7XCJvYmplY3RcIiE9dHlwZW9mIHcuY29uZmlnLmxvY2FsZSYmdm9pZCAwPT09VC5sMTBuc1t3LmNvbmZpZy5sb2NhbGVdJiZ3LmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGxvY2FsZSBcIit3LmNvbmZpZy5sb2NhbGUpKSx3LmwxMG49ZShlKHt9LFQubDEwbnMuZGVmYXVsdCksXCJvYmplY3RcIj09dHlwZW9mIHcuY29uZmlnLmxvY2FsZT93LmNvbmZpZy5sb2NhbGU6XCJkZWZhdWx0XCIhPT13LmNvbmZpZy5sb2NhbGU/VC5sMTBuc1t3LmNvbmZpZy5sb2NhbGVdOnZvaWQgMCksRC5LPVwiKFwiK3cubDEwbi5hbVBNWzBdK1wifFwiK3cubDEwbi5hbVBNWzFdK1wifFwiK3cubDEwbi5hbVBNWzBdLnRvTG93ZXJDYXNlKCkrXCJ8XCIrdy5sMTBuLmFtUE1bMV0udG9Mb3dlckNhc2UoKStcIilcIix2b2lkIDA9PT1lKGUoe30sdiksSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwLmRhdGFzZXR8fHt9KSkpLnRpbWVfMjRociYmdm9pZCAwPT09VC5kZWZhdWx0Q29uZmlnLnRpbWVfMjRociYmKHcuY29uZmlnLnRpbWVfMjRocj13LmwxMG4udGltZV8yNGhyKSx3LmZvcm1hdERhdGU9Yih3KSx3LnBhcnNlRGF0ZT1DKHtjb25maWc6dy5jb25maWcsbDEwbjp3LmwxMG59KX1mdW5jdGlvbiBjZShlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB3LmNvbmZpZy5wb3NpdGlvbil7aWYodm9pZCAwIT09dy5jYWxlbmRhckNvbnRhaW5lcil7cGUoXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIik7dmFyIHQ9ZXx8dy5fcG9zaXRpb25FbGVtZW50LG49QXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKHcuY2FsZW5kYXJDb250YWluZXIuY2hpbGRyZW4sKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrdC5vZmZzZXRIZWlnaHR9KSwwKSxhPXcuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsaT13LmNvbmZpZy5wb3NpdGlvbi5zcGxpdChcIiBcIiksbz1pWzBdLHI9aS5sZW5ndGg+MT9pWzFdOm51bGwsbD10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9d2luZG93LmlubmVySGVpZ2h0LWwuYm90dG9tLHM9XCJhYm92ZVwiPT09b3x8XCJiZWxvd1wiIT09byYmYzxuJiZsLnRvcD5uLHU9d2luZG93LnBhZ2VZT2Zmc2V0K2wudG9wKyhzPy1uLTI6dC5vZmZzZXRIZWlnaHQrMik7aWYoZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwiYXJyb3dUb3BcIiwhcyksZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwiYXJyb3dCb3R0b21cIixzKSwhdy5jb25maWcuaW5saW5lKXt2YXIgZj13aW5kb3cucGFnZVhPZmZzZXQrbC5sZWZ0LG09ITEsZz0hMTtcImNlbnRlclwiPT09cj8oZi09KGEtbC53aWR0aCkvMixtPSEwKTpcInJpZ2h0XCI9PT1yJiYoZi09YS1sLndpZHRoLGc9ITApLGQody5jYWxlbmRhckNvbnRhaW5lcixcImFycm93TGVmdFwiLCFtJiYhZyksZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwiYXJyb3dDZW50ZXJcIixtKSxkKHcuY2FsZW5kYXJDb250YWluZXIsXCJhcnJvd1JpZ2h0XCIsZyk7dmFyIHA9d2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgtKHdpbmRvdy5wYWdlWE9mZnNldCtsLnJpZ2h0KSxoPWYrYT53aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCx2PXArYT53aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtpZihkKHcuY2FsZW5kYXJDb250YWluZXIsXCJyaWdodE1vc3RcIixoKSwhdy5jb25maWcuc3RhdGljKWlmKHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wPXUrXCJweFwiLGgpaWYodil7dmFyIEQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9bnVsbCx0PTA7dDxkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7dCsrKXt2YXIgbj1kb2N1bWVudC5zdHlsZVNoZWV0c1t0XTt0cnl7bi5jc3NSdWxlc31jYXRjaChlKXtjb250aW51ZX1lPW47YnJlYWt9cmV0dXJuIG51bGwhPWU/ZTooYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhKSxhLnNoZWV0KTt2YXIgYX0oKTtpZih2b2lkIDA9PT1EKXJldHVybjt2YXIgYj13aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxDPU1hdGgubWF4KDAsYi8yLWEvMiksTT1ELmNzc1J1bGVzLmxlbmd0aCx5PVwie2xlZnQ6XCIrbC5sZWZ0K1wicHg7cmlnaHQ6YXV0bzt9XCI7ZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwicmlnaHRNb3N0XCIsITEpLGQody5jYWxlbmRhckNvbnRhaW5lcixcImNlbnRlck1vc3RcIiwhMCksRC5pbnNlcnRSdWxlKFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmJlZm9yZSwuZmxhdHBpY2tyLWNhbGVuZGFyLmNlbnRlck1vc3Q6YWZ0ZXJcIit5LE0pLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdD1DK1wicHhcIix3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0PVwiYXV0b1wifWVsc2Ugdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0PVwiYXV0b1wiLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQ9cCtcInB4XCI7ZWxzZSB3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQ9ZitcInB4XCIsdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodD1cImF1dG9cIn19fWVsc2Ugdy5jb25maWcucG9zaXRpb24odyxlKX1mdW5jdGlvbiBkZSgpe3cuY29uZmlnLm5vQ2FsZW5kYXJ8fHcuaXNNb2JpbGV8fChLKCksRGUoKSxKKCkpfWZ1bmN0aW9uIHNlKCl7dy5faW5wdXQuZm9jdXMoKSwtMSE9PXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpfHx2b2lkIDAhPT1uYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cz9zZXRUaW1lb3V0KHcuY2xvc2UsMCk6dy5jbG9zZSgpfWZ1bmN0aW9uIHVlKGUpe2UucHJldmVudERlZmF1bHQoKSxlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0PWYoZyhlKSwoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikmJiFlLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSYmIWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKX0pKTtpZih2b2lkIDAhPT10KXt2YXIgbj10LGE9dy5sYXRlc3RTZWxlY3RlZERhdGVPYmo9bmV3IERhdGUobi5kYXRlT2JqLmdldFRpbWUoKSksaT0oYS5nZXRNb250aCgpPHcuY3VycmVudE1vbnRofHxhLmdldE1vbnRoKCk+dy5jdXJyZW50TW9udGgrdy5jb25maWcuc2hvd01vbnRocy0xKSYmXCJyYW5nZVwiIT09dy5jb25maWcubW9kZTtpZih3LnNlbGVjdGVkRGF0ZUVsZW09bixcInNpbmdsZVwiPT09dy5jb25maWcubW9kZSl3LnNlbGVjdGVkRGF0ZXM9W2FdO2Vsc2UgaWYoXCJtdWx0aXBsZVwiPT09dy5jb25maWcubW9kZSl7dmFyIG89dmUoYSk7bz93LnNlbGVjdGVkRGF0ZXMuc3BsaWNlKHBhcnNlSW50KG8pLDEpOncuc2VsZWN0ZWREYXRlcy5wdXNoKGEpfWVsc2VcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiYoMj09PXcuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJncuY2xlYXIoITEsITEpLHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqPWEsdy5zZWxlY3RlZERhdGVzLnB1c2goYSksMCE9PU0oYSx3LnNlbGVjdGVkRGF0ZXNbMF0sITApJiZ3LnNlbGVjdGVkRGF0ZXMuc29ydCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5nZXRUaW1lKCktdC5nZXRUaW1lKCl9KSkpO2lmKFMoKSxpKXt2YXIgcj13LmN1cnJlbnRZZWFyIT09YS5nZXRGdWxsWWVhcigpO3cuY3VycmVudFllYXI9YS5nZXRGdWxsWWVhcigpLHcuY3VycmVudE1vbnRoPWEuZ2V0TW9udGgoKSxyJiYocGUoXCJvblllYXJDaGFuZ2VcIiksSygpKSxwZShcIm9uTW9udGhDaGFuZ2VcIil9aWYoRGUoKSxKKCksYmUoKSxpfHxcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlfHwxIT09dy5jb25maWcuc2hvd01vbnRocz92b2lkIDAhPT13LnNlbGVjdGVkRGF0ZUVsZW0mJnZvaWQgMD09PXcuaG91ckVsZW1lbnQmJncuc2VsZWN0ZWREYXRlRWxlbSYmdy5zZWxlY3RlZERhdGVFbGVtLmZvY3VzKCk6TChuKSx2b2lkIDAhPT13LmhvdXJFbGVtZW50JiZ2b2lkIDAhPT13LmhvdXJFbGVtZW50JiZ3LmhvdXJFbGVtZW50LmZvY3VzKCksdy5jb25maWcuY2xvc2VPblNlbGVjdCl7dmFyIGw9XCJzaW5nbGVcIj09PXcuY29uZmlnLm1vZGUmJiF3LmNvbmZpZy5lbmFibGVUaW1lLGM9XCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmMj09PXcuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJiF3LmNvbmZpZy5lbmFibGVUaW1lOyhsfHxjKSYmc2UoKX1OKCl9fXcucGFyc2VEYXRlPUMoe2NvbmZpZzp3LmNvbmZpZyxsMTBuOncubDEwbn0pLHcuX2hhbmRsZXJzPVtdLHcucGx1Z2luRWxlbWVudHM9W10sdy5sb2FkZWRQbHVnaW5zPVtdLHcuX2JpbmQ9QSx3Ll9zZXRIb3Vyc0Zyb21EYXRlPV8sdy5fcG9zaXRpb25DYWxlbmRhcj1jZSx3LmNoYW5nZU1vbnRoPUcsdy5jaGFuZ2VZZWFyPVEsdy5jbGVhcj1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PWUmJihlPSEwKTt2b2lkIDA9PT10JiYodD0hMCk7dy5pbnB1dC52YWx1ZT1cIlwiLHZvaWQgMCE9PXcuYWx0SW5wdXQmJih3LmFsdElucHV0LnZhbHVlPVwiXCIpO3ZvaWQgMCE9PXcubW9iaWxlSW5wdXQmJih3Lm1vYmlsZUlucHV0LnZhbHVlPVwiXCIpO3cuc2VsZWN0ZWREYXRlcz1bXSx3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj12b2lkIDAsITA9PT10JiYody5jdXJyZW50WWVhcj13Ll9pbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpLHcuY3VycmVudE1vbnRoPXcuX2luaXRpYWxEYXRlLmdldE1vbnRoKCkpO2lmKCEwPT09dy5jb25maWcuZW5hYmxlVGltZSl7dmFyIG49eCh3LmNvbmZpZyksYT1uLmhvdXJzLGk9bi5taW51dGVzLG89bi5zZWNvbmRzO08oYSxpLG8pfXcucmVkcmF3KCksZSYmcGUoXCJvbkNoYW5nZVwiKX0sdy5jbG9zZT1mdW5jdGlvbigpe3cuaXNPcGVuPSExLHcuaXNNb2JpbGV8fCh2b2lkIDAhPT13LmNhbGVuZGFyQ29udGFpbmVyJiZ3LmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpLHZvaWQgMCE9PXcuX2lucHV0JiZ3Ll9pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtwZShcIm9uQ2xvc2VcIil9LHcuX2NyZWF0ZUVsZW1lbnQ9cyx3LmRlc3Ryb3k9ZnVuY3Rpb24oKXt2b2lkIDAhPT13LmNvbmZpZyYmcGUoXCJvbkRlc3Ryb3lcIik7Zm9yKHZhciBlPXcuX2hhbmRsZXJzLmxlbmd0aDtlLS07KXcuX2hhbmRsZXJzW2VdLnJlbW92ZSgpO2lmKHcuX2hhbmRsZXJzPVtdLHcubW9iaWxlSW5wdXQpdy5tb2JpbGVJbnB1dC5wYXJlbnROb2RlJiZ3Lm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQody5tb2JpbGVJbnB1dCksdy5tb2JpbGVJbnB1dD12b2lkIDA7ZWxzZSBpZih3LmNhbGVuZGFyQ29udGFpbmVyJiZ3LmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpaWYody5jb25maWcuc3RhdGljJiZ3LmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpe3ZhciB0PXcuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZTtpZih0Lmxhc3RDaGlsZCYmdC5yZW1vdmVDaGlsZCh0Lmxhc3RDaGlsZCksdC5wYXJlbnROb2RlKXtmb3IoO3QuZmlyc3RDaGlsZDspdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LmZpcnN0Q2hpbGQsdCk7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfX1lbHNlIHcuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3LmNhbGVuZGFyQ29udGFpbmVyKTt3LmFsdElucHV0JiYody5pbnB1dC50eXBlPVwidGV4dFwiLHcuYWx0SW5wdXQucGFyZW50Tm9kZSYmdy5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHcuYWx0SW5wdXQpLGRlbGV0ZSB3LmFsdElucHV0KTt3LmlucHV0JiYody5pbnB1dC50eXBlPXcuaW5wdXQuX3R5cGUsdy5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpLHcuaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIikpO1tcIl9zaG93VGltZUlucHV0XCIsXCJsYXRlc3RTZWxlY3RlZERhdGVPYmpcIixcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIixcIl9oaWRlUHJldk1vbnRoQXJyb3dcIixcIl9faGlkZU5leHRNb250aEFycm93XCIsXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLFwiaXNNb2JpbGVcIixcImlzT3BlblwiLFwic2VsZWN0ZWREYXRlRWxlbVwiLFwibWluRGF0ZUhhc1RpbWVcIixcIm1heERhdGVIYXNUaW1lXCIsXCJkYXlzXCIsXCJkYXlzQ29udGFpbmVyXCIsXCJfaW5wdXRcIixcIl9wb3NpdGlvbkVsZW1lbnRcIixcImlubmVyQ29udGFpbmVyXCIsXCJyQ29udGFpbmVyXCIsXCJtb250aE5hdlwiLFwidG9kYXlEYXRlRWxlbVwiLFwiY2FsZW5kYXJDb250YWluZXJcIixcIndlZWtkYXlDb250YWluZXJcIixcInByZXZNb250aE5hdlwiLFwibmV4dE1vbnRoTmF2XCIsXCJtb250aHNEcm9wZG93bkNvbnRhaW5lclwiLFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFwiY3VycmVudFllYXJFbGVtZW50XCIsXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXCJzZWxlY3RlZERhdGVFbGVtXCIsXCJjb25maWdcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dHJ5e2RlbGV0ZSB3W2VdfWNhdGNoKGUpe319KSl9LHcuaXNFbmFibGVkPVgsdy5qdW1wVG9EYXRlPVAsdy5vcGVuPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9dy5fcG9zaXRpb25FbGVtZW50KTtpZighMD09PXcuaXNNb2JpbGUpe2lmKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgbj1nKGUpO24mJm4uYmx1cigpfXJldHVybiB2b2lkIDAhPT13Lm1vYmlsZUlucHV0JiYody5tb2JpbGVJbnB1dC5mb2N1cygpLHcubW9iaWxlSW5wdXQuY2xpY2soKSksdm9pZCBwZShcIm9uT3BlblwiKX1pZih3Ll9pbnB1dC5kaXNhYmxlZHx8dy5jb25maWcuaW5saW5lKXJldHVybjt2YXIgYT13LmlzT3Blbjt3LmlzT3Blbj0hMCxhfHwody5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKSx3Ll9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpLHBlKFwib25PcGVuXCIpLGNlKHQpKTshMD09PXcuY29uZmlnLmVuYWJsZVRpbWUmJiEwPT09dy5jb25maWcubm9DYWxlbmRhciYmKCExIT09dy5jb25maWcuYWxsb3dJbnB1dHx8dm9pZCAwIT09ZSYmdy50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCl8fHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIHcuaG91ckVsZW1lbnQuc2VsZWN0KCl9KSw1MCkpfSx3LnJlZHJhdz1kZSx3LnNldD1mdW5jdGlvbihlLHQpe2lmKG51bGwhPT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IodmFyIGEgaW4gT2JqZWN0LmFzc2lnbih3LmNvbmZpZyxlKSxlKXZvaWQgMCE9PWZlW2FdJiZmZVthXS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZSgpfSkpO2Vsc2Ugdy5jb25maWdbZV09dCx2b2lkIDAhPT1mZVtlXT9mZVtlXS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZSgpfSkpOm4uaW5kZXhPZihlKT4tMSYmKHcuY29uZmlnW2VdPWModCkpO3cucmVkcmF3KCksYmUoITApfSx3LnNldERhdGU9ZnVuY3Rpb24oZSx0LG4pe3ZvaWQgMD09PXQmJih0PSExKTt2b2lkIDA9PT1uJiYobj13LmNvbmZpZy5kYXRlRm9ybWF0KTtpZigwIT09ZSYmIWV8fGUgaW5zdGFuY2VvZiBBcnJheSYmMD09PWUubGVuZ3RoKXJldHVybiB3LmNsZWFyKHQpO21lKGUsbiksdy5sYXRlc3RTZWxlY3RlZERhdGVPYmo9dy5zZWxlY3RlZERhdGVzW3cuc2VsZWN0ZWREYXRlcy5sZW5ndGgtMV0sdy5yZWRyYXcoKSxQKHZvaWQgMCx0KSxfKCksMD09PXcuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJncuY2xlYXIoITEpO2JlKHQpLHQmJnBlKFwib25DaGFuZ2VcIil9LHcudG9nZ2xlPWZ1bmN0aW9uKGUpe2lmKCEwPT09dy5pc09wZW4pcmV0dXJuIHcuY2xvc2UoKTt3Lm9wZW4oZSl9O3ZhciBmZT17bG9jYWxlOltsZSx6XSxzaG93TW9udGhzOltxLGssJF0sbWluRGF0ZTpbUF0sbWF4RGF0ZTpbUF0sY2xpY2tPcGVuczpbZnVuY3Rpb24oKXshMD09PXcuY29uZmlnLmNsaWNrT3BlbnM/KEEody5faW5wdXQsXCJmb2N1c1wiLHcub3BlbiksQSh3Ll9pbnB1dCxcImNsaWNrXCIsdy5vcGVuKSk6KHcuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHcub3Blbiksdy5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdy5vcGVuKSl9XX07ZnVuY3Rpb24gbWUoZSx0KXt2YXIgbj1bXTtpZihlIGluc3RhbmNlb2YgQXJyYXkpbj1lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHcucGFyc2VEYXRlKGUsdCl9KSk7ZWxzZSBpZihlIGluc3RhbmNlb2YgRGF0ZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbj1bdy5wYXJzZURhdGUoZSx0KV07ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgZSlzd2l0Y2gody5jb25maWcubW9kZSl7Y2FzZVwic2luZ2xlXCI6Y2FzZVwidGltZVwiOm49W3cucGFyc2VEYXRlKGUsdCldO2JyZWFrO2Nhc2VcIm11bHRpcGxlXCI6bj1lLnNwbGl0KHcuY29uZmlnLmNvbmp1bmN0aW9uKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiB3LnBhcnNlRGF0ZShlLHQpfSkpO2JyZWFrO2Nhc2VcInJhbmdlXCI6bj1lLnNwbGl0KHcubDEwbi5yYW5nZVNlcGFyYXRvcikubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gdy5wYXJzZURhdGUoZSx0KX0pKX1lbHNlIHcuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiK0pTT04uc3RyaW5naWZ5KGUpKSk7dy5zZWxlY3RlZERhdGVzPXcuY29uZmlnLmFsbG93SW52YWxpZFByZWxvYWQ/bjpuLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBEYXRlJiZYKGUsITEpfSkpLFwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUmJncuc2VsZWN0ZWREYXRlcy5zb3J0KChmdW5jdGlvbihlLHQpe3JldHVybiBlLmdldFRpbWUoKS10LmdldFRpbWUoKX0pKX1mdW5jdGlvbiBnZShlKXtyZXR1cm4gZS5zbGljZSgpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgRGF0ZT93LnBhcnNlRGF0ZShlLHZvaWQgMCwhMCk6ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuZnJvbSYmZS50bz97ZnJvbTp3LnBhcnNlRGF0ZShlLmZyb20sdm9pZCAwKSx0bzp3LnBhcnNlRGF0ZShlLnRvLHZvaWQgMCl9OmV9KSkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZX0pKX1mdW5jdGlvbiBwZShlLHQpe2lmKHZvaWQgMCE9PXcuY29uZmlnKXt2YXIgbj13LmNvbmZpZ1tlXTtpZih2b2lkIDAhPT1uJiZuLmxlbmd0aD4wKWZvcih2YXIgYT0wO25bYV0mJmE8bi5sZW5ndGg7YSsrKW5bYV0ody5zZWxlY3RlZERhdGVzLHcuaW5wdXQudmFsdWUsdyx0KTtcIm9uQ2hhbmdlXCI9PT1lJiYody5pbnB1dC5kaXNwYXRjaEV2ZW50KGhlKFwiY2hhbmdlXCIpKSx3LmlucHV0LmRpc3BhdGNoRXZlbnQoaGUoXCJpbnB1dFwiKSkpfX1mdW5jdGlvbiBoZShlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO3JldHVybiB0LmluaXRFdmVudChlLCEwLCEwKSx0fWZ1bmN0aW9uIHZlKGUpe2Zvcih2YXIgdD0wO3Q8dy5zZWxlY3RlZERhdGVzLmxlbmd0aDt0KyspaWYoMD09PU0ody5zZWxlY3RlZERhdGVzW3RdLGUpKXJldHVyblwiXCIrdDtyZXR1cm4hMX1mdW5jdGlvbiBEZSgpe3cuY29uZmlnLm5vQ2FsZW5kYXJ8fHcuaXNNb2JpbGV8fCF3Lm1vbnRoTmF2fHwody55ZWFyRWxlbWVudHMuZm9yRWFjaCgoZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgRGF0ZSh3LmN1cnJlbnRZZWFyLHcuY3VycmVudE1vbnRoLDEpO24uc2V0TW9udGgody5jdXJyZW50TW9udGgrdCksdy5jb25maWcuc2hvd01vbnRocz4xfHxcInN0YXRpY1wiPT09dy5jb25maWcubW9udGhTZWxlY3RvclR5cGU/dy5tb250aEVsZW1lbnRzW3RdLnRleHRDb250ZW50PWgobi5nZXRNb250aCgpLHcuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCx3LmwxMG4pK1wiIFwiOncubW9udGhzRHJvcGRvd25Db250YWluZXIudmFsdWU9bi5nZXRNb250aCgpLnRvU3RyaW5nKCksZS52YWx1ZT1uLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKX0pKSx3Ll9oaWRlUHJldk1vbnRoQXJyb3c9dm9pZCAwIT09dy5jb25maWcubWluRGF0ZSYmKHcuY3VycmVudFllYXI9PT13LmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCk/dy5jdXJyZW50TW9udGg8PXcuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKTp3LmN1cnJlbnRZZWFyPHcuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSksdy5faGlkZU5leHRNb250aEFycm93PXZvaWQgMCE9PXcuY29uZmlnLm1heERhdGUmJih3LmN1cnJlbnRZZWFyPT09dy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpP3cuY3VycmVudE1vbnRoKzE+dy5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpOncuY3VycmVudFllYXI+dy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSl9ZnVuY3Rpb24gd2UoZSl7cmV0dXJuIHcuc2VsZWN0ZWREYXRlcy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB3LmZvcm1hdERhdGUodCxlKX0pKS5maWx0ZXIoKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInJhbmdlXCIhPT13LmNvbmZpZy5tb2RlfHx3LmNvbmZpZy5lbmFibGVUaW1lfHxuLmluZGV4T2YoZSk9PT10fSkpLmpvaW4oXCJyYW5nZVwiIT09dy5jb25maWcubW9kZT93LmNvbmZpZy5jb25qdW5jdGlvbjp3LmwxMG4ucmFuZ2VTZXBhcmF0b3IpfWZ1bmN0aW9uIGJlKGUpe3ZvaWQgMD09PWUmJihlPSEwKSx2b2lkIDAhPT13Lm1vYmlsZUlucHV0JiZ3Lm1vYmlsZUZvcm1hdFN0ciYmKHcubW9iaWxlSW5wdXQudmFsdWU9dm9pZCAwIT09dy5sYXRlc3RTZWxlY3RlZERhdGVPYmo/dy5mb3JtYXREYXRlKHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLHcubW9iaWxlRm9ybWF0U3RyKTpcIlwiKSx3LmlucHV0LnZhbHVlPXdlKHcuY29uZmlnLmRhdGVGb3JtYXQpLHZvaWQgMCE9PXcuYWx0SW5wdXQmJih3LmFsdElucHV0LnZhbHVlPXdlKHcuY29uZmlnLmFsdEZvcm1hdCkpLCExIT09ZSYmcGUoXCJvblZhbHVlVXBkYXRlXCIpfWZ1bmN0aW9uIENlKGUpe3ZhciB0PWcoZSksbj13LnByZXZNb250aE5hdi5jb250YWlucyh0KSxhPXcubmV4dE1vbnRoTmF2LmNvbnRhaW5zKHQpO258fGE/RyhuPy0xOjEpOncueWVhckVsZW1lbnRzLmluZGV4T2YodCk+PTA/dC5zZWxlY3QoKTp0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIik/dy5jaGFuZ2VZZWFyKHcuY3VycmVudFllYXIrMSk6dC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikmJncuY2hhbmdlWWVhcih3LmN1cnJlbnRZZWFyLTEpfXJldHVybiBmdW5jdGlvbigpe3cuZWxlbWVudD13LmlucHV0PXAsdy5pc09wZW49ITEsZnVuY3Rpb24oKXt2YXIgdD1bXCJ3cmFwXCIsXCJ3ZWVrTnVtYmVyc1wiLFwiYWxsb3dJbnB1dFwiLFwiYWxsb3dJbnZhbGlkUHJlbG9hZFwiLFwiY2xpY2tPcGVuc1wiLFwidGltZV8yNGhyXCIsXCJlbmFibGVUaW1lXCIsXCJub0NhbGVuZGFyXCIsXCJhbHRJbnB1dFwiLFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsXCJpbmxpbmVcIixcInN0YXRpY1wiLFwiZW5hYmxlU2Vjb25kc1wiLFwiZGlzYWJsZU1vYmlsZVwiXSxpPWUoZSh7fSxKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHAuZGF0YXNldHx8e30pKSksdiksbz17fTt3LmNvbmZpZy5wYXJzZURhdGU9aS5wYXJzZURhdGUsdy5jb25maWcuZm9ybWF0RGF0ZT1pLmZvcm1hdERhdGUsT2JqZWN0LmRlZmluZVByb3BlcnR5KHcuY29uZmlnLFwiZW5hYmxlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fZW5hYmxlfSxzZXQ6ZnVuY3Rpb24oZSl7dy5jb25maWcuX2VuYWJsZT1nZShlKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJkaXNhYmxlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fZGlzYWJsZX0sc2V0OmZ1bmN0aW9uKGUpe3cuY29uZmlnLl9kaXNhYmxlPWdlKGUpfX0pO3ZhciByPVwidGltZVwiPT09aS5tb2RlO2lmKCFpLmRhdGVGb3JtYXQmJihpLmVuYWJsZVRpbWV8fHIpKXt2YXIgbD1ULmRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdHx8YS5kYXRlRm9ybWF0O28uZGF0ZUZvcm1hdD1pLm5vQ2FsZW5kYXJ8fHI/XCJIOmlcIisoaS5lbmFibGVTZWNvbmRzP1wiOlNcIjpcIlwiKTpsK1wiIEg6aVwiKyhpLmVuYWJsZVNlY29uZHM/XCI6U1wiOlwiXCIpfWlmKGkuYWx0SW5wdXQmJihpLmVuYWJsZVRpbWV8fHIpJiYhaS5hbHRGb3JtYXQpe3ZhciBkPVQuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXR8fGEuYWx0Rm9ybWF0O28uYWx0Rm9ybWF0PWkubm9DYWxlbmRhcnx8cj9cImg6aVwiKyhpLmVuYWJsZVNlY29uZHM/XCI6UyBLXCI6XCIgS1wiKTpkK1wiIGg6aVwiKyhpLmVuYWJsZVNlY29uZHM/XCI6U1wiOlwiXCIpK1wiIEtcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJtaW5EYXRlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fbWluRGF0ZX0sc2V0Om9lKFwibWluXCIpfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHcuY29uZmlnLFwibWF4RGF0ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdy5jb25maWcuX21heERhdGV9LHNldDpvZShcIm1heFwiKX0pO3ZhciBzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXt3LmNvbmZpZ1tcIm1pblwiPT09ZT9cIl9taW5UaW1lXCI6XCJfbWF4VGltZVwiXT13LnBhcnNlRGF0ZSh0LFwiSDppOlNcIil9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJtaW5UaW1lXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fbWluVGltZX0sc2V0OnMoXCJtaW5cIil9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJtYXhUaW1lXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fbWF4VGltZX0sc2V0OnMoXCJtYXhcIil9KSxcInRpbWVcIj09PWkubW9kZSYmKHcuY29uZmlnLm5vQ2FsZW5kYXI9ITAsdy5jb25maWcuZW5hYmxlVGltZT0hMCk7T2JqZWN0LmFzc2lnbih3LmNvbmZpZyxvLGkpO2Zvcih2YXIgdT0wO3U8dC5sZW5ndGg7dSsrKXcuY29uZmlnW3RbdV1dPSEwPT09dy5jb25maWdbdFt1XV18fFwidHJ1ZVwiPT09dy5jb25maWdbdFt1XV07bi5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT13LmNvbmZpZ1tlXX0pKS5mb3JFYWNoKChmdW5jdGlvbihlKXt3LmNvbmZpZ1tlXT1jKHcuY29uZmlnW2VdfHxbXSkubWFwKEUpfSkpLHcuaXNNb2JpbGU9IXcuY29uZmlnLmRpc2FibGVNb2JpbGUmJiF3LmNvbmZpZy5pbmxpbmUmJlwic2luZ2xlXCI9PT13LmNvbmZpZy5tb2RlJiYhdy5jb25maWcuZGlzYWJsZS5sZW5ndGgmJiF3LmNvbmZpZy5lbmFibGUmJiF3LmNvbmZpZy53ZWVrTnVtYmVycyYmL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2Zvcih1PTA7dTx3LmNvbmZpZy5wbHVnaW5zLmxlbmd0aDt1Kyspe3ZhciBmPXcuY29uZmlnLnBsdWdpbnNbdV0odyl8fHt9O2Zvcih2YXIgbSBpbiBmKW4uaW5kZXhPZihtKT4tMT93LmNvbmZpZ1ttXT1jKGZbbV0pLm1hcChFKS5jb25jYXQody5jb25maWdbbV0pOnZvaWQgMD09PWlbbV0mJih3LmNvbmZpZ1ttXT1mW21dKX1pLmFsdElucHV0Q2xhc3N8fCh3LmNvbmZpZy5hbHRJbnB1dENsYXNzPXJlKCkuY2xhc3NOYW1lK1wiIFwiK3cuY29uZmlnLmFsdElucHV0Q2xhc3MpO3BlKFwib25QYXJzZUNvbmZpZ1wiKX0oKSxsZSgpLGZ1bmN0aW9uKCl7aWYody5pbnB1dD1yZSgpLCF3LmlucHV0KXJldHVybiB2b2lkIHcuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIpKTt3LmlucHV0Ll90eXBlPXcuaW5wdXQudHlwZSx3LmlucHV0LnR5cGU9XCJ0ZXh0XCIsdy5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpLHcuX2lucHV0PXcuaW5wdXQsdy5jb25maWcuYWx0SW5wdXQmJih3LmFsdElucHV0PXMody5pbnB1dC5ub2RlTmFtZSx3LmNvbmZpZy5hbHRJbnB1dENsYXNzKSx3Ll9pbnB1dD13LmFsdElucHV0LHcuYWx0SW5wdXQucGxhY2Vob2xkZXI9dy5pbnB1dC5wbGFjZWhvbGRlcix3LmFsdElucHV0LmRpc2FibGVkPXcuaW5wdXQuZGlzYWJsZWQsdy5hbHRJbnB1dC5yZXF1aXJlZD13LmlucHV0LnJlcXVpcmVkLHcuYWx0SW5wdXQudGFiSW5kZXg9dy5pbnB1dC50YWJJbmRleCx3LmFsdElucHV0LnR5cGU9XCJ0ZXh0XCIsdy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksIXcuY29uZmlnLnN0YXRpYyYmdy5pbnB1dC5wYXJlbnROb2RlJiZ3LmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHcuYWx0SW5wdXQsdy5pbnB1dC5uZXh0U2libGluZykpO3cuY29uZmlnLmFsbG93SW5wdXR8fHcuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsXCJyZWFkb25seVwiKTt3Ll9wb3NpdGlvbkVsZW1lbnQ9dy5jb25maWcucG9zaXRpb25FbGVtZW50fHx3Ll9pbnB1dH0oKSxmdW5jdGlvbigpe3cuc2VsZWN0ZWREYXRlcz1bXSx3Lm5vdz13LnBhcnNlRGF0ZSh3LmNvbmZpZy5ub3cpfHxuZXcgRGF0ZTt2YXIgZT13LmNvbmZpZy5kZWZhdWx0RGF0ZXx8KFwiSU5QVVRcIiE9PXcuaW5wdXQubm9kZU5hbWUmJlwiVEVYVEFSRUFcIiE9PXcuaW5wdXQubm9kZU5hbWV8fCF3LmlucHV0LnBsYWNlaG9sZGVyfHx3LmlucHV0LnZhbHVlIT09dy5pbnB1dC5wbGFjZWhvbGRlcj93LmlucHV0LnZhbHVlOm51bGwpO2UmJm1lKGUsdy5jb25maWcuZGF0ZUZvcm1hdCk7dy5faW5pdGlhbERhdGU9dy5zZWxlY3RlZERhdGVzLmxlbmd0aD4wP3cuc2VsZWN0ZWREYXRlc1swXTp3LmNvbmZpZy5taW5EYXRlJiZ3LmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKT53Lm5vdy5nZXRUaW1lKCk/dy5jb25maWcubWluRGF0ZTp3LmNvbmZpZy5tYXhEYXRlJiZ3LmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKTx3Lm5vdy5nZXRUaW1lKCk/dy5jb25maWcubWF4RGF0ZTp3Lm5vdyx3LmN1cnJlbnRZZWFyPXcuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCksdy5jdXJyZW50TW9udGg9dy5faW5pdGlhbERhdGUuZ2V0TW9udGgoKSx3LnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjAmJih3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj13LnNlbGVjdGVkRGF0ZXNbMF0pO3ZvaWQgMCE9PXcuY29uZmlnLm1pblRpbWUmJih3LmNvbmZpZy5taW5UaW1lPXcucGFyc2VEYXRlKHcuY29uZmlnLm1pblRpbWUsXCJIOmlcIikpO3ZvaWQgMCE9PXcuY29uZmlnLm1heFRpbWUmJih3LmNvbmZpZy5tYXhUaW1lPXcucGFyc2VEYXRlKHcuY29uZmlnLm1heFRpbWUsXCJIOmlcIikpO3cubWluRGF0ZUhhc1RpbWU9ISF3LmNvbmZpZy5taW5EYXRlJiYody5jb25maWcubWluRGF0ZS5nZXRIb3VycygpPjB8fHcuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpPjB8fHcuY29uZmlnLm1pbkRhdGUuZ2V0U2Vjb25kcygpPjApLHcubWF4RGF0ZUhhc1RpbWU9ISF3LmNvbmZpZy5tYXhEYXRlJiYody5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpPjB8fHcuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpPjB8fHcuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpPjApfSgpLHcudXRpbHM9e2dldERheXNJbk1vbnRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXcuY3VycmVudE1vbnRoKSx2b2lkIDA9PT10JiYodD13LmN1cnJlbnRZZWFyKSwxPT09ZSYmKHQlND09MCYmdCUxMDAhPTB8fHQlNDAwPT0wKT8yOTp3LmwxMG4uZGF5c0luTW9udGhbZV19fSx3LmlzTW9iaWxlfHxmdW5jdGlvbigpe3ZhciBlPXdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYody5jYWxlbmRhckNvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItY2FsZW5kYXJcIiksdy5jYWxlbmRhckNvbnRhaW5lci50YWJJbmRleD0tMSwhdy5jb25maWcubm9DYWxlbmRhcil7aWYoZS5hcHBlbmRDaGlsZCgody5tb250aE5hdj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItbW9udGhzXCIpLHcueWVhckVsZW1lbnRzPVtdLHcubW9udGhFbGVtZW50cz1bXSx3LnByZXZNb250aE5hdj1zKFwic3BhblwiLFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIiksdy5wcmV2TW9udGhOYXYuaW5uZXJIVE1MPXcuY29uZmlnLnByZXZBcnJvdyx3Lm5leHRNb250aE5hdj1zKFwic3BhblwiLFwiZmxhdHBpY2tyLW5leHQtbW9udGhcIiksdy5uZXh0TW9udGhOYXYuaW5uZXJIVE1MPXcuY29uZmlnLm5leHRBcnJvdyxxKCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHcsXCJfaGlkZVByZXZNb250aEFycm93XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3Ll9faGlkZVByZXZNb250aEFycm93fSxzZXQ6ZnVuY3Rpb24oZSl7dy5fX2hpZGVQcmV2TW9udGhBcnJvdyE9PWUmJihkKHcucHJldk1vbnRoTmF2LFwiZmxhdHBpY2tyLWRpc2FibGVkXCIsZSksdy5fX2hpZGVQcmV2TW9udGhBcnJvdz1lKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodyxcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuX19oaWRlTmV4dE1vbnRoQXJyb3d9LHNldDpmdW5jdGlvbihlKXt3Ll9faGlkZU5leHRNb250aEFycm93IT09ZSYmKGQody5uZXh0TW9udGhOYXYsXCJmbGF0cGlja3ItZGlzYWJsZWRcIixlKSx3Ll9faGlkZU5leHRNb250aEFycm93PWUpfX0pLHcuY3VycmVudFllYXJFbGVtZW50PXcueWVhckVsZW1lbnRzWzBdLERlKCksdy5tb250aE5hdikpLHcuaW5uZXJDb250YWluZXI9cyhcImRpdlwiLFwiZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyXCIpLHcuY29uZmlnLndlZWtOdW1iZXJzKXt2YXIgdD1mdW5jdGlvbigpe3cuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO3ZhciBlPXMoXCJkaXZcIixcImZsYXRwaWNrci13ZWVrd3JhcHBlclwiKTtlLmFwcGVuZENoaWxkKHMoXCJzcGFuXCIsXCJmbGF0cGlja3Itd2Vla2RheVwiLHcubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7dmFyIHQ9cyhcImRpdlwiLFwiZmxhdHBpY2tyLXdlZWtzXCIpO3JldHVybiBlLmFwcGVuZENoaWxkKHQpLHt3ZWVrV3JhcHBlcjplLHdlZWtOdW1iZXJzOnR9fSgpLG49dC53ZWVrV3JhcHBlcixhPXQud2Vla051bWJlcnM7dy5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChuKSx3LndlZWtOdW1iZXJzPWEsdy53ZWVrV3JhcHBlcj1ufXcuckNvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItckNvbnRhaW5lclwiKSx3LnJDb250YWluZXIuYXBwZW5kQ2hpbGQoJCgpKSx3LmRheXNDb250YWluZXJ8fCh3LmRheXNDb250YWluZXI9cyhcImRpdlwiLFwiZmxhdHBpY2tyLWRheXNcIiksdy5kYXlzQ29udGFpbmVyLnRhYkluZGV4PS0xKSxKKCksdy5yQ29udGFpbmVyLmFwcGVuZENoaWxkKHcuZGF5c0NvbnRhaW5lciksdy5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3LnJDb250YWluZXIpLGUuYXBwZW5kQ2hpbGQody5pbm5lckNvbnRhaW5lcil9dy5jb25maWcuZW5hYmxlVGltZSYmZS5hcHBlbmRDaGlsZChmdW5jdGlvbigpe3cuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1RpbWVcIiksdy5jb25maWcubm9DYWxlbmRhciYmdy5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKTt2YXIgZT14KHcuY29uZmlnKTt3LnRpbWVDb250YWluZXI9cyhcImRpdlwiLFwiZmxhdHBpY2tyLXRpbWVcIiksdy50aW1lQ29udGFpbmVyLnRhYkluZGV4PS0xO3ZhciB0PXMoXCJzcGFuXCIsXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIixcIjpcIiksbj1tKFwiZmxhdHBpY2tyLWhvdXJcIix7XCJhcmlhLWxhYmVsXCI6dy5sMTBuLmhvdXJBcmlhTGFiZWx9KTt3LmhvdXJFbGVtZW50PW4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTt2YXIgYT1tKFwiZmxhdHBpY2tyLW1pbnV0ZVwiLHtcImFyaWEtbGFiZWxcIjp3LmwxMG4ubWludXRlQXJpYUxhYmVsfSk7dy5taW51dGVFbGVtZW50PWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXSx3LmhvdXJFbGVtZW50LnRhYkluZGV4PXcubWludXRlRWxlbWVudC50YWJJbmRleD0tMSx3LmhvdXJFbGVtZW50LnZhbHVlPW8ody5sYXRlc3RTZWxlY3RlZERhdGVPYmo/dy5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKTp3LmNvbmZpZy50aW1lXzI0aHI/ZS5ob3VyczpmdW5jdGlvbihlKXtzd2l0Y2goZSUyNCl7Y2FzZSAwOmNhc2UgMTI6cmV0dXJuIDEyO2RlZmF1bHQ6cmV0dXJuIGUlMTJ9fShlLmhvdXJzKSksdy5taW51dGVFbGVtZW50LnZhbHVlPW8ody5sYXRlc3RTZWxlY3RlZERhdGVPYmo/dy5sYXRlc3RTZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpOmUubWludXRlcyksdy5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsdy5jb25maWcuaG91ckluY3JlbWVudC50b1N0cmluZygpKSx3Lm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLHcuY29uZmlnLm1pbnV0ZUluY3JlbWVudC50b1N0cmluZygpKSx3LmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLHcuY29uZmlnLnRpbWVfMjRocj9cIjBcIjpcIjFcIiksdy5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIix3LmNvbmZpZy50aW1lXzI0aHI/XCIyM1wiOlwiMTJcIiksdy5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixcIjJcIiksdy5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLFwiMFwiKSx3Lm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsXCI1OVwiKSx3Lm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsXCIyXCIpLHcudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuKSx3LnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodCksdy50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGEpLHcuY29uZmlnLnRpbWVfMjRociYmdy50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtpZih3LmNvbmZpZy5lbmFibGVTZWNvbmRzKXt3LnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7dmFyIGk9bShcImZsYXRwaWNrci1zZWNvbmRcIik7dy5zZWNvbmRFbGVtZW50PWkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXSx3LnNlY29uZEVsZW1lbnQudmFsdWU9byh3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj93LmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCk6ZS5zZWNvbmRzKSx3LnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RlcFwiLHcubWludXRlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSx3LnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsXCIwXCIpLHcuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIixcIjU5XCIpLHcuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixcIjJcIiksdy50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHMoXCJzcGFuXCIsXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIixcIjpcIikpLHcudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpKX13LmNvbmZpZy50aW1lXzI0aHJ8fCh3LmFtUE09cyhcInNwYW5cIixcImZsYXRwaWNrci1hbS1wbVwiLHcubDEwbi5hbVBNW3IoKHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqP3cuaG91ckVsZW1lbnQudmFsdWU6dy5jb25maWcuZGVmYXVsdEhvdXIpPjExKV0pLHcuYW1QTS50aXRsZT13LmwxMG4udG9nZ2xlVGl0bGUsdy5hbVBNLnRhYkluZGV4PS0xLHcudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3LmFtUE0pKTtyZXR1cm4gdy50aW1lQ29udGFpbmVyfSgpKTtkKHcuY2FsZW5kYXJDb250YWluZXIsXCJyYW5nZU1vZGVcIixcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlKSxkKHcuY2FsZW5kYXJDb250YWluZXIsXCJhbmltYXRlXCIsITA9PT13LmNvbmZpZy5hbmltYXRlKSxkKHcuY2FsZW5kYXJDb250YWluZXIsXCJtdWx0aU1vbnRoXCIsdy5jb25maWcuc2hvd01vbnRocz4xKSx3LmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO3ZhciBpPXZvaWQgMCE9PXcuY29uZmlnLmFwcGVuZFRvJiZ2b2lkIDAhPT13LmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZTtpZigody5jb25maWcuaW5saW5lfHx3LmNvbmZpZy5zdGF0aWMpJiYody5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHcuY29uZmlnLmlubGluZT9cImlubGluZVwiOlwic3RhdGljXCIpLHcuY29uZmlnLmlubGluZSYmKCFpJiZ3LmVsZW1lbnQucGFyZW50Tm9kZT93LmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUody5jYWxlbmRhckNvbnRhaW5lcix3Ll9pbnB1dC5uZXh0U2libGluZyk6dm9pZCAwIT09dy5jb25maWcuYXBwZW5kVG8mJncuY29uZmlnLmFwcGVuZFRvLmFwcGVuZENoaWxkKHcuY2FsZW5kYXJDb250YWluZXIpKSx3LmNvbmZpZy5zdGF0aWMpKXt2YXIgbD1zKFwiZGl2XCIsXCJmbGF0cGlja3Itd3JhcHBlclwiKTt3LmVsZW1lbnQucGFyZW50Tm9kZSYmdy5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGwsdy5lbGVtZW50KSxsLmFwcGVuZENoaWxkKHcuZWxlbWVudCksdy5hbHRJbnB1dCYmbC5hcHBlbmRDaGlsZCh3LmFsdElucHV0KSxsLmFwcGVuZENoaWxkKHcuY2FsZW5kYXJDb250YWluZXIpfXcuY29uZmlnLnN0YXRpY3x8dy5jb25maWcuaW5saW5lfHwodm9pZCAwIT09dy5jb25maWcuYXBwZW5kVG8/dy5jb25maWcuYXBwZW5kVG86d2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHcuY2FsZW5kYXJDb250YWluZXIpfSgpLGZ1bmN0aW9uKCl7dy5jb25maWcud3JhcCYmW1wib3BlblwiLFwiY2xvc2VcIixcInRvZ2dsZVwiLFwiY2xlYXJcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh3LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiK2UrXCJdXCIpLChmdW5jdGlvbih0KXtyZXR1cm4gQSh0LFwiY2xpY2tcIix3W2VdKX0pKX0pKTtpZih3LmlzTW9iaWxlKXJldHVybiB2b2lkIGZ1bmN0aW9uKCl7dmFyIGU9dy5jb25maWcuZW5hYmxlVGltZT93LmNvbmZpZy5ub0NhbGVuZGFyP1widGltZVwiOlwiZGF0ZXRpbWUtbG9jYWxcIjpcImRhdGVcIjt3Lm1vYmlsZUlucHV0PXMoXCJpbnB1dFwiLHcuaW5wdXQuY2xhc3NOYW1lK1wiIGZsYXRwaWNrci1tb2JpbGVcIiksdy5tb2JpbGVJbnB1dC50YWJJbmRleD0xLHcubW9iaWxlSW5wdXQudHlwZT1lLHcubW9iaWxlSW5wdXQuZGlzYWJsZWQ9dy5pbnB1dC5kaXNhYmxlZCx3Lm1vYmlsZUlucHV0LnJlcXVpcmVkPXcuaW5wdXQucmVxdWlyZWQsdy5tb2JpbGVJbnB1dC5wbGFjZWhvbGRlcj13LmlucHV0LnBsYWNlaG9sZGVyLHcubW9iaWxlRm9ybWF0U3RyPVwiZGF0ZXRpbWUtbG9jYWxcIj09PWU/XCJZLW0tZFxcXFxUSDppOlNcIjpcImRhdGVcIj09PWU/XCJZLW0tZFwiOlwiSDppOlNcIix3LnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjAmJih3Lm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZT13Lm1vYmlsZUlucHV0LnZhbHVlPXcuZm9ybWF0RGF0ZSh3LnNlbGVjdGVkRGF0ZXNbMF0sdy5tb2JpbGVGb3JtYXRTdHIpKTt3LmNvbmZpZy5taW5EYXRlJiYody5tb2JpbGVJbnB1dC5taW49dy5mb3JtYXREYXRlKHcuY29uZmlnLm1pbkRhdGUsXCJZLW0tZFwiKSk7dy5jb25maWcubWF4RGF0ZSYmKHcubW9iaWxlSW5wdXQubWF4PXcuZm9ybWF0RGF0ZSh3LmNvbmZpZy5tYXhEYXRlLFwiWS1tLWRcIikpO3cuaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSYmKHcubW9iaWxlSW5wdXQuc3RlcD1TdHJpbmcody5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSk7dy5pbnB1dC50eXBlPVwiaGlkZGVuXCIsdm9pZCAwIT09dy5hbHRJbnB1dCYmKHcuYWx0SW5wdXQudHlwZT1cImhpZGRlblwiKTt0cnl7dy5pbnB1dC5wYXJlbnROb2RlJiZ3LmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHcubW9iaWxlSW5wdXQsdy5pbnB1dC5uZXh0U2libGluZyl9Y2F0Y2goZSl7fUEody5tb2JpbGVJbnB1dCxcImNoYW5nZVwiLChmdW5jdGlvbihlKXt3LnNldERhdGUoZyhlKS52YWx1ZSwhMSx3Lm1vYmlsZUZvcm1hdFN0cikscGUoXCJvbkNoYW5nZVwiKSxwZShcIm9uQ2xvc2VcIil9KSl9KCk7dmFyIGU9bChpZSw1MCk7dy5fZGVib3VuY2VkQ2hhbmdlPWwoTiwzMDApLHcuZGF5c0NvbnRhaW5lciYmIS9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmQSh3LmRheXNDb250YWluZXIsXCJtb3VzZW92ZXJcIiwoZnVuY3Rpb24oZSl7XCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmYWUoZyhlKSl9KSk7QSh3aW5kb3cuZG9jdW1lbnQuYm9keSxcImtleWRvd25cIixuZSksdy5jb25maWcuaW5saW5lfHx3LmNvbmZpZy5zdGF0aWN8fEEod2luZG93LFwicmVzaXplXCIsZSk7dm9pZCAwIT09d2luZG93Lm9udG91Y2hzdGFydD9BKHdpbmRvdy5kb2N1bWVudCxcInRvdWNoc3RhcnRcIixaKTpBKHdpbmRvdy5kb2N1bWVudCxcIm1vdXNlZG93blwiLFopO0Eod2luZG93LmRvY3VtZW50LFwiZm9jdXNcIixaLHtjYXB0dXJlOiEwfSksITA9PT13LmNvbmZpZy5jbGlja09wZW5zJiYoQSh3Ll9pbnB1dCxcImZvY3VzXCIsdy5vcGVuKSxBKHcuX2lucHV0LFwiY2xpY2tcIix3Lm9wZW4pKTt2b2lkIDAhPT13LmRheXNDb250YWluZXImJihBKHcubW9udGhOYXYsXCJjbGlja1wiLENlKSxBKHcubW9udGhOYXYsW1wia2V5dXBcIixcImluY3JlbWVudFwiXSxGKSxBKHcuZGF5c0NvbnRhaW5lcixcImNsaWNrXCIsdWUpKTtpZih2b2lkIDAhPT13LnRpbWVDb250YWluZXImJnZvaWQgMCE9PXcubWludXRlRWxlbWVudCYmdm9pZCAwIT09dy5ob3VyRWxlbWVudCl7dmFyIHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGcoZSkuc2VsZWN0KCl9O0Eody50aW1lQ29udGFpbmVyLFtcImluY3JlbWVudFwiXSxJKSxBKHcudGltZUNvbnRhaW5lcixcImJsdXJcIixJLHtjYXB0dXJlOiEwfSksQSh3LnRpbWVDb250YWluZXIsXCJjbGlja1wiLFkpLEEoW3cuaG91ckVsZW1lbnQsdy5taW51dGVFbGVtZW50XSxbXCJmb2N1c1wiLFwiY2xpY2tcIl0sdCksdm9pZCAwIT09dy5zZWNvbmRFbGVtZW50JiZBKHcuc2Vjb25kRWxlbWVudCxcImZvY3VzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHcuc2Vjb25kRWxlbWVudCYmdy5zZWNvbmRFbGVtZW50LnNlbGVjdCgpfSkpLHZvaWQgMCE9PXcuYW1QTSYmQSh3LmFtUE0sXCJjbGlja1wiLChmdW5jdGlvbihlKXtJKGUpLE4oKX0pKX13LmNvbmZpZy5hbGxvd0lucHV0JiZBKHcuX2lucHV0LFwiYmx1clwiLHRlKX0oKSwody5zZWxlY3RlZERhdGVzLmxlbmd0aHx8dy5jb25maWcubm9DYWxlbmRhcikmJih3LmNvbmZpZy5lbmFibGVUaW1lJiZfKHcuY29uZmlnLm5vQ2FsZW5kYXI/dy5sYXRlc3RTZWxlY3RlZERhdGVPYmo6dm9pZCAwKSxiZSghMSkpLGsoKTt2YXIgdD0vXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyF3LmlzTW9iaWxlJiZ0JiZjZSgpLHBlKFwib25SZWFkeVwiKX0oKSx3fWZ1bmN0aW9uIGsoZSx0KXtmb3IodmFyIG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50fSkpLGE9W10saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgbz1uW2ldO3RyeXtpZihudWxsIT09by5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikpY29udGludWU7dm9pZCAwIT09by5fZmxhdHBpY2tyJiYoby5fZmxhdHBpY2tyLmRlc3Ryb3koKSxvLl9mbGF0cGlja3I9dm9pZCAwKSxvLl9mbGF0cGlja3I9RShvLHR8fHt9KSxhLnB1c2goby5fZmxhdHBpY2tyKX1jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfX1yZXR1cm4gMT09PWEubGVuZ3RoP2FbMF06YX1cInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTEVsZW1lbnQmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MQ29sbGVjdGlvbiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE5vZGVMaXN0JiYoSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrcj1Ob2RlTGlzdC5wcm90b3R5cGUuZmxhdHBpY2tyPWZ1bmN0aW9uKGUpe3JldHVybiBrKHRoaXMsZSl9LEhUTUxFbGVtZW50LnByb3RvdHlwZS5mbGF0cGlja3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGsoW3RoaXNdLGUpfSk7dmFyIFQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9rKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpLHQpOmUgaW5zdGFuY2VvZiBOb2RlP2soW2VdLHQpOmsoZSx0KX07cmV0dXJuIFQuZGVmYXVsdENvbmZpZz17fSxULmwxMG5zPXtlbjplKHt9LGkpLGRlZmF1bHQ6ZSh7fSxpKX0sVC5sb2NhbGl6ZT1mdW5jdGlvbih0KXtULmwxMG5zLmRlZmF1bHQ9ZShlKHt9LFQubDEwbnMuZGVmYXVsdCksdCl9LFQuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7VC5kZWZhdWx0Q29uZmlnPWUoZSh7fSxULmRlZmF1bHRDb25maWcpLHQpfSxULnBhcnNlRGF0ZT1DKHt9KSxULmZvcm1hdERhdGU9Yih7fSksVC5jb21wYXJlRGF0ZXM9TSxcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5JiZ2b2lkIDAhPT1qUXVlcnkuZm4mJihqUXVlcnkuZm4uZmxhdHBpY2tyPWZ1bmN0aW9uKGUpe3JldHVybiBrKHRoaXMsZSl9KSxEYXRlLnByb3RvdHlwZS5mcF9pbmNyPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpLHRoaXMuZ2V0RGF0ZSgpKyhcInN0cmluZ1wiPT10eXBlb2YgZT9wYXJzZUludChlLDEwKTplKSl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3cuZmxhdHBpY2tyPVQpLFR9KSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcclxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcclxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5rbyA9IHt9KSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGZwID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZmxhdHBpY2tyICE9PSB1bmRlZmluZWRcclxuICAgICAgPyB3aW5kb3cuZmxhdHBpY2tyXHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgbDEwbnM6IHt9LFxyXG4gICAgICB9O1xyXG4gIHZhciBLb3JlYW4gPSB7XHJcbiAgICAgIHdlZWtkYXlzOiB7XHJcbiAgICAgICAgICBzaG9ydGhhbmQ6IFtcIuydvFwiLCBcIuyblFwiLCBcIu2ZlFwiLCBcIuyImFwiLCBcIuuqqVwiLCBcIuq4iFwiLCBcIu2GoFwiXSxcclxuICAgICAgICAgIGxvbmdoYW5kOiBbXHJcbiAgICAgICAgICAgICAgXCLsnbzsmpTsnbxcIixcclxuICAgICAgICAgICAgICBcIuyblOyalOydvFwiLFxyXG4gICAgICAgICAgICAgIFwi7ZmU7JqU7J28XCIsXHJcbiAgICAgICAgICAgICAgXCLsiJjsmpTsnbxcIixcclxuICAgICAgICAgICAgICBcIuuqqeyalOydvFwiLFxyXG4gICAgICAgICAgICAgIFwi6riI7JqU7J28XCIsXHJcbiAgICAgICAgICAgICAgXCLthqDsmpTsnbxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRoczoge1xyXG4gICAgICAgICAgc2hvcnRoYW5kOiBbXHJcbiAgICAgICAgICAgICAgXCIx7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIy7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIz7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI07JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI17JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI27JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI37JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI47JuUXCIsXHJcbiAgICAgICAgICAgICAgXCI57JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIxMOyblFwiLFxyXG4gICAgICAgICAgICAgIFwiMTHsm5RcIixcclxuICAgICAgICAgICAgICBcIjEy7JuUXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgICBcIjHsm5RcIixcclxuICAgICAgICAgICAgICBcIjLsm5RcIixcclxuICAgICAgICAgICAgICBcIjPsm5RcIixcclxuICAgICAgICAgICAgICBcIjTsm5RcIixcclxuICAgICAgICAgICAgICBcIjXsm5RcIixcclxuICAgICAgICAgICAgICBcIjbsm5RcIixcclxuICAgICAgICAgICAgICBcIjfsm5RcIixcclxuICAgICAgICAgICAgICBcIjjsm5RcIixcclxuICAgICAgICAgICAgICBcIjnsm5RcIixcclxuICAgICAgICAgICAgICBcIjEw7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIxMeyblFwiLFxyXG4gICAgICAgICAgICAgIFwiMTLsm5RcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBcIuydvFwiO1xyXG4gICAgICB9LFxyXG4gICAgICByYW5nZVNlcGFyYXRvcjogXCIgfiBcIixcclxuICB9O1xyXG4gIGZwLmwxMG5zLmtvID0gS29yZWFuO1xyXG4gIHZhciBrbyA9IGZwLmwxMG5zO1xyXG5cclxuICBleHBvcnRzLktvcmVhbiA9IEtvcmVhbjtcclxuICBleHBvcnRzLmRlZmF1bHQgPSBrbztcclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbn0pKSk7XHJcbiIsIlxyXG4vKipcclxuICogQG1vZHVsZSBUZW1wbGF0ZS9DT05TVEFOVFNcclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDtlITroZzsoJ3tirjsl5DshJwg7IKs7Jqp7ZWY64qUIOyDgeyImCDrqqjsnYxcclxuICpcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEFTVEVSSVNLX0lDT05fQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0FTVEVSSVNLX0lDT05fQ0xBU1N9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBBU1RSRUlTS19ESVZfSEVJR0hUIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNBU1RSRUlTS19ESVZfSEVJR0hUfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gQ1JFQVRFX0ZJRUxEX0FDVElPTiAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0NSRUFURV9GSUVMRF9BQ1RJT04gfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRElWSURFUl9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0RJVklERVJfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRFJBR19CT1hfTkFNRSAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0RSQUdfQk9YX05BTUUgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX0RBVEVfSU5QVVRfQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0RBVEVfSU5QVVRfQ0xBU1N9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9JTlBVVF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0lOUFVUX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX0lOUFVUX1dSQVBfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9JTlBVVF9XUkFQX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX0tJTkRfQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0tJTkRfQ0xBU1N9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9QQU5FTF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX1BBTkVMX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX1BBTkVMX0lEICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfUEFORUxfSUQgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9TRUxFQ1RfQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX1NFTEVDVF9DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX1RFWFRBUkVBX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfVEVYVEFSRUFfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0NPTVBPTkVOVF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9DT01QT05FTlRfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRklFTERfQVRUUl9DSEFOR0VfQUNUSU9OICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRklFTERfQVRUUl9DSEFOR0VfQUNUSU9OIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNGSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEdST1VQX0FUVFJfQ0hBTkdFX0FDVElPTiB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjR1JPVVBfQVRUUl9DSEFOR0VfQUNUSU9OfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gR1JPVVBfQVRUUl9PV05FUl9DSEFOR0VfQUNUSU9OIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9BVFRSX09XTkVSX0NIQU5HRV9BQ1RJT059XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBHUk9VUF9SRU1PVkVfQUNUSU9OIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9SRU1PVkVfQUNUSU9OfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gSElERV9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjSElERV9DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IE1BSU5fR1JPVVBfTkFNRSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjTUFJTl9HUk9VUF9OQU1FfVxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gTUlOSU1VTV9EUkFHX1NJWkUgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNNSU5JTVVNX0RSQUdfU0laRSB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gUFJFVklFV19SRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUiB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBSRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1JFQURFUl9QQUdFX0ZJRUxEX0xBWUVSX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFJFQURFUl9QREZfVklFV0VSICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BERl9WSUVXRVIgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFJFTU9WRV9GSUVMRF9BQ1RJT04ge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1JFTU9WRV9GSUVMRF9BQ1RJT059XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBTSE9XX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU0hPV19DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBTV0lUQ0hfTEFCRUxfQ0xBU1Mge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFNXSVRDSF9MQUJFTF9TTElERVJfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNTV0lUQ0hfTEFCRUxfU0xJREVSX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFNXSVRDSF9MQUJFTF9TTElERVJfUk9VTkRfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNTV0lUQ0hfTEFCRUxfU0xJREVSX1JPVU5EX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFRFTVBMQVRFX0xBWUVSX0FTVEVSSVNLX05BTUUgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9MQVlFUl9BU1RFUklTS19OQU1FIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFRFTVBMQVRFX0xBWUVSX05BTUUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX0xBWUVSX05BTUV9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBURU1QTEFURV9MQVlFUl9SRUNUX05BTUUgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9MQVlFUl9SRUNUX05BTUUgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gVEVNUExBVEVfUERGX1ZJRVdFUiAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX1BERl9WSUVXRVIgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gVEVNUExBVEVfUERGX1ZJRVdFUl9DT05UQUlORVIgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9QREZfVklFV0VSX0NPTlRBSU5FUiB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBUSVRMRV9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RJVExFX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFRJVExFX1dSQVBfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNUSVRMRV9XUkFQX0NMQVNTIH1cclxuICogXHJcbiAqIEBjbGFzc1xyXG4gKiBARmlsZU5hbWUgQ09OU1RBTlRTLmpzXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjMxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ09OU1RBTlRTIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNNQUlOX0dST1VQX05BTUVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBDYW52YXPsnZgg66mU7J24IOuFuOuTnFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTUFJTl9HUk9VUF9OQU1FID0gXCJNYWluQ29udGFpbmVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfUERGX1ZJRVdFUl9DT05UQUlORVJcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnOydmCBQREYgVmlld2VyIENvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVEVNUExBVEVfUERGX1ZJRVdFUl9DT05UQUlORVIgPSBcIlRlbXBsYXRlVmlld2VyQ29udGFpbmVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfUERGX1ZJRVdFUlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7ISc7J2YIFBERiBWaWV3ZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRFTVBMQVRFX1BERl9WSUVXRVIgPSBcIlRlbXBsYXRlUERGVmlld2VyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qF66qo65Oc7JeQ7ISc7J2YIFBERiBWaWV3ZXIgQ29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIgPSBcIlJlYWRlclZpZXdlckNvbnRhaW5lclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1JFQURFUl9QREZfVklFV0VSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qF66qo65Oc7JeQ7ISc7J2YIFBERiBWaWV3ZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFJFQURFUl9QREZfVklFV0VSID0gXCJSZWFkZXJQREZWaWV3ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOuvuOumrOuztOq4sCDrqqjrk5zsl5DshJzsnZggUERGIFZpZXdlciBDb250YWluZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFBSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSID0gXCJQcmV2aWV3UmVhZGVyVmlld2VyQ29udGFpbmVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUFJFVklFV19SRUFERVJfUERGX1ZJRVdFUlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOuvuOumrOuztOq4sCDrqqjrk5zsl5DshJzsnZggUERGIFZpZXdlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgUFJFVklFV19SRUFERVJfUERGX1ZJRVdFUiA9IFwiUHJldmlld1JlYWRlclBERlZpZXdlclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX0xBWUVSX05BTUVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZSDroIjsnbTslrQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBURU1QTEFURV9MQVlFUl9OQU1FID0gXCJUZW1wbGF0ZUxheWVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfTEFZRVJfQVNURVJJU0tfTkFNRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl7JeQ7IScIO2VhOyImCDsl6zrtoAg66eI7YGs6rCAIOyeiOuKlCDroIjsnbTslrQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBURU1QTEFURV9MQVlFUl9BU1RFUklTS19OQU1FID0gXCJUZW1wbGF0ZUFzdGVyaXNrTGF5ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9MQVlFUl9SRUNUX05BTUVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeyXkOyEnCDtlYTrk5zrpbwg66eM65Ok6riwIOychO2VtCDsg53shLHtlZjripQg7J6E7IucIGRpdiDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRFTVBMQVRFX0xBWUVSX1JFQ1RfTkFNRSA9IFwiVGVtcGxhdGVSZWN0XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRFJBR19CT1hfTkFNRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl7JeQ7IScIOuTnOuemOq3uCDtlojsnYTrlYwg7ZWE65Oc65Ok7J20IOyeiOydhCDqsr3smrAg66eM65Oc64qUIFNWRyDqt7jro7kg64W465OcIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRFJBR19CT1hfTkFNRSA9IFwiRHJhZ0JveEdyb3VwXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NIT1dfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDrhbjrk5zrpbwg67O07J2064+E66GdIO2VmOuKlCBDU1Mg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgU0hPV19DTEFTUyA9IFwiVGVtcGxhdGUtU2hvd1wiXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjSElERV9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOuFuOuTnOulvCDslYjrs7TsnbTrj4TroZ0g7ZWY64qUIENTUyDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBISURFX0NMQVNTID0gXCJUZW1wbGF0ZS1IaWRlXCJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQ09NUE9ORU5UX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7IKs7J2065OcIO2DreydmCDtgbTrnbzsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0NPTVBPTkVOVF9DTEFTUyA9IFwiRWRpdG9yLUNvbXBvbmVudF9Cb3hcIjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOuFuOuTnCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfQ0xBU1MgPSBcIkVkaXRvci1BdHRyaWJ1dGVcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNGSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7IKt7KCc67KE7Yq8IOuFuOuTnCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyA9IFwiRmllbGQtRGVsZXRlLUJ1dHRvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI01FTU9fUFJPUEVSVFlfQlVUVE9OX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgUmVhZGVy66qo65Oc7JeQ7IScIOuplOuqqCDsho3shLEg67KE7Yq8IOuFuOuTnCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTUVNT19QUk9QRVJUWV9CVVRUT05fQ0xBU1MgPSBcIk1FTU8tUHJvcGVydHktQnV0dG9uXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfS0lORF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7KKF66WYIOuFuOuTnCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfS0lORF9DTEFTUyA9IFwiQXR0cmlidXRlLWtpbmRcIjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfUEFORUxfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIO2MkOuErCDrhbjrk5wg7YG0656Y7IqkIOydtOumhC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIEVESVRPUl9BVFRSX1BBTkVMX0NMQVNTID0gXCJBdHRyaWJ1dGUtQ29udGVudHNcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9QQU5FTF9JRFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7YyQ64SsIOuFuOuTnCBJRC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIEVESVRPUl9BVFRSX1BBTkVMX0lEID0gXCJBdHRyaWJ1dGUtUGFuZWxcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOy7qO2FkOy4oCDsl7TsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTID0gXCJBdHRyaWJ1dGUtQ29udGVudHMtUm93XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOy7qO2FkOy4oCDsl7TsnYQg6rCQ7Iu46rOgIOyeiOuKlCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctV3JhcFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RJVExFX1dSQVBfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOy7qO2FkOy4oCDsl7TsnZgg7YOA7J207YuA7J2EIOqwkOyLuOqzoCDsnojripQg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRJVExFX1dSQVBfQ0xBU1MgPSBcIlRpdGxlLVdyYXBcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNUSVRMRV9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7Luo7YWQ7LigIOyXtOydmCDtg4DsnbTti4Ag64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRJVExFX0NMQVNTID0gXCJUaXRsZVwiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9TRUxFQ1RfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBTZWxlY3Qg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEVESVRPUl9BVFRSX1NFTEVDVF9DTEFTUyA9IFwiQXR0cmlidXRlLVNlbGVjdFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIFN3aXRjaOuyhO2KvCAg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFNXSVRDSF9MQUJFTF9DTEFTUyA9IFwiQXR0cmlidXRlLVN3aXRjaC1MYWJlbFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9TTElERVJfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBTd2l0Y2jrsoTtirzsnZgg7Iqs65287J20642UIOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBTV0lUQ0hfTEFCRUxfU0xJREVSX0NMQVNTID0gXCJBdHRyaWJ1dGUtU3dpdGNoLVNsaWRlclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9TTElERVJfUk9VTkRfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBTd2l0Y2jrsoTtirzsnZgg7Iqs65287J20642U7J2YIOuPhOq3uOuegCBEaXYg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFNXSVRDSF9MQUJFTF9TTElERVJfUk9VTkRfQ0xBU1MgPSBcIlJvdW5kXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRElWSURFUl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOq1rOu2hOyekCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRElWSURFUl9DTEFTUyA9IFwiRGl2aWRlclwiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9JTlBVVF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIGlucHV0IOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9JTlBVVF9DTEFTUyA9IFwiQXR0cmlidXRlLUlucHV0XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfVEVYVEFSRUFfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBUZXh0YXJlYSDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfVEVYVEFSRUFfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1UZXh0YXJlYVwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0RBVEVfSU5QVVRfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBEYXRlIGlucHV0IOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9EQVRFX0lOUFVUX0NMQVNTID0gXCJBdHRyaWJ1dGUtRGF0ZS1JbnB1dFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0lOUFVUX1dSQVBfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTrk5zsnZgg7IaN7ISxIOydmCBpbnB1dCDrhbjrk5zrpbwg6rCQ7Iu46rOgIOyeiOuKlCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfSU5QVVRfV1JBUF9DTEFTUyA9IFwiQXR0cmlidXRlLUlucHV0LVdyYXBcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNDUkVBVEVfRklFTERfQUNUSU9OXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwgVU5ETyBSRURP7J2YIO2VhOuTnCDsg53shLEgQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQ1JFQVRFX0ZJRUxEX0FDVElPTiA9IFwiQ3JlYXRlRmllbGRBY3Rpb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRU1PVkVfRklFTERfQUNUSU9OXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwgVU5ETyBSRURP7J2YIO2VhOuTnCDsgq3soJwgQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgUkVNT1ZFX0ZJRUxEX0FDVElPTiA9IFwiUmVtb3ZlRmllbGRBY3Rpb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNGSUVMRF9BVFRSX0NIQU5HRV9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65OcIOyGjeyEsSDrs4Dqsr0gQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRklFTERfQVRUUl9DSEFOR0VfQUNUSU9OID0gXCJGaWVsZEF0dHJDaGFuZ2VBY3Rpb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9SRU1PVkVfQUNUSU9OXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwgVU5ETyBSRURP7J2YIO2VhOuTnCDsgq3soJwgQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgR1JPVVBfUkVNT1ZFX0FDVElPTiA9IFwiR3JvdXBSZW1vdmVBY3Rpb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9BVFRSX0NIQU5HRV9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65Oc65Ok7J2YIOyGjeyEsSDrs4Dqsr0gQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgR1JPVVBfQVRUUl9DSEFOR0VfQUNUSU9OID0gXCJHcm91cEF0dHJDaGFuZ2VBY3Rpb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9BVFRSX09XTkVSX0NIQU5HRV9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65Oc65Ok7J2YIOyEnOuqheyekCDrs4Dqsr0gQWN0aW9u7J2YIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgR1JPVVBfQVRUUl9PV05FUl9DSEFOR0VfQUNUSU9OID0gXCJHcm91cEF0dHJPd25lckNoYW5nZUFjdGlvblwiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqhSDrqqjrk5zsl5DshJwgRmllbGTrk6TsnbQg7Jis65286rCIIOugiOydtOyWtCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgUkVBREVSX1BBR0VfRklFTERfTEFZRVJfQ0xBU1MgPSBcIlJlYWRlci1QYWdlLUZpZWxkLUxheWVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BBR0VfTUVNT19MQVlFUl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqhSDrqqjrk5zsl5DshJwgTUVNT+uTpOydtCDsmKzrnbzqsIgg66CI7J207Ja0IO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTID0gXCJSZWFkZXItUGFnZS1NZW1vLUxheWVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjQVNURVJJU0tfSUNPTl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOyImCDsl6zrtoAg7JWE7J207L2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEFTVEVSSVNLX0lDT05fQ0xBU1MgPSBcIkFzdGVyaXNrLUljb25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNBU1RSRUlTS19ESVZfSEVJR0hUXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE7IiYIOyXrOu2gCDslYTsnbTsvZgg7IS466Gc6ri47J20XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBBU1RSRUlTS19ESVZfSEVJR0hUID0gMTI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjTUlOSU1VTV9EUkFHX1NJWkVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDrk5zrnpjqt7jrpbwg7ZaI64uk64qUIOy1nOyGjOydmCDsgqzsnbTspogg6riw7KSAXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBNSU5JTVVNX0RSQUdfU0laRSA9IDEwO1xyXG5cclxuICAgIHN0YXRpYyBSQURJT19UWVBFXzEgPSAnMSc7XHJcbiAgICBzdGF0aWMgUkFJT0RfVFlQRV8xX1BBVEggPSBgPHBhdGggZD1cIk0yNCwxMmMtNi42LDAtMTIsNS40LTEyLDEyczUuNCwxMiwxMiwxMnMxMi01LjQsMTItMTJTMzAuNixcclxuICAgICAgICAgICAgMTIsMjQsMTJ6TTI0LDBDMTAuOCwwLDAsMTAuOCwwLDI0czEwLjgsMjQsMjQsMjRzMjQtMTAuOCwyNC0yNFMzNy4yLDAsMjQsMHpNMjQsNDMuMkMxMy40LDQzLjIsNC44LDM0LjYsNC44LDI0UzEzLjQsXHJcbiAgICAgICAgICAgIDQuOCwyNCw0LjhTNDMuMiwxMy40LDQzLjIsMjRTMzQuNiw0My4yLDI0LDQzLjJ6XCIvPmA7XHJcbiAgICBzdGF0aWMgUkFESU9fVFlQRV8yID0gJzInO1xyXG4gICAgc3RhdGljIFJBSU9EX1RZUEVfMl9QQVRIID0gYDxwYXRoIGQ9XCJNMjQsMEMxMC44LDAsMCwxMC44LDAsMjRzMTAuOCwyNCwyNCwyNHMyNC0xMC44LDI0LTI0UzM3LjIsMCwyNCwwek0yNCw0My4yQzEzLjQsNDMuMiw0LjgsMzQuNiw0LjgsMjRTMTMuNCxcXFxyXG4gICAgICAgICAgICA0LjgsMjQsNC44UzQzLjIsMTMuNCw0My4yLDI0UzM0LjYsNDMuMiwyNCw0My4yelwiLz5gO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNOT19FVkVOVF9MQVlFUlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOydtOuypO2KuOulvCDrsJvsp4Ag7JWK64qUIGNsYXNzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTk9fRVZFTlRfTEFZRVIgPSBcIk5vLUV2ZW50LUxheWVyXCI7XHJcblxyXG4gICAgc3RhdGljIFJFQURFUl9GSUVMRF9JTlBVVF9NT0RFICAgICAgPSAwO1xyXG4gICAgc3RhdGljIFJFQURFUl9GSUVMRF9NRU1PX01PREUgICAgICAgPSAxO1xyXG4gICAgc3RhdGljIFJFQURFUl9GSUVMRF9NRU1PX01BS0VfTU9ERSAgPSAyO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBzaW1wbGUtdHJhbnNsYXRvclxyXG4gKiBBIHNtYWxsIEphdmFTY3JpcHQgbGlicmFyeSB0byB0cmFuc2xhdGUgd2VicGFnZXMgaW50byBkaWZmZXJlbnQgbGFuZ3VhZ2VzLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5kcmVhc3JlbWR0L3NpbXBsZS10cmFuc2xhdG9yXHJcbiAqXHJcbiAqIEF1dGhvcjogQW5kcmVhcyBSZW1kdCA8bWVAYW5kcmVhc3JlbWR0LmNvbT4gKGh0dHBzOi8vYW5kcmVhc3JlbWR0LmNvbSlcclxuICogTGljZW5zZTogTUlUIChodHRwczovL21pdC1saWNlbnNlLm9yZy8pXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2xhdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgVHJhbnNsYXRvciBieSBwcm92aWRpbmcgb3B0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmRlYnVnID0gbG9nZ2VyKHRydWUpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdJTlZBTElEX09QVElPTlMnLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKFRyYW5zbGF0b3IuZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGVidWcsIHJlZ2lzdGVyR2xvYmFsbHksIGRldGVjdExhbmd1YWdlIH0gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGxvZ2dlcihkZWJ1Zyk7XHJcblxyXG4gICAgICAgIGlmIChyZWdpc3Rlckdsb2JhbGx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dsb2JhbE9iamVjdFtyZWdpc3Rlckdsb2JhbGx5XSA9IHRoaXMudHJhbnNsYXRlRm9yS2V5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGV0ZWN0TGFuZ3VhZ2UgJiYgdGhpcy5fZW52ID09ICdicm93c2VyJykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXRlY3RMYW5ndWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgZ2xvYmFsIG9iamVjdCwgZGVwZW5kaW5nIG9uIHRoZSBlbnZpcm9ubWVudC5cclxuICAgICAqIElmIHRoZSBzY3JpcHQgaXMgZXhlY3V0ZWQgaW4gYSBicm93c2VyLCByZXR1cm4gdGhlIHdpbmRvdyBvYmplY3QsXHJcbiAgICAgKiBvdGhlcndpc2UsIGluIE5vZGUuanMsIHJldHVybiB0aGUgZ2xvYmFsIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldCBfZ2xvYmFsT2JqZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbnYgPT0gJ2Jyb3dzZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgYW5kIHJldHVybiB0aGUgZW52aXJvbm1lbnQgaW4gd2hpY2ggdGhlIHNjcmlwdCBpcyBleGVjdXRlZC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBlbnZpcm9ubWVudFxyXG4gICAgICovXHJcbiAgICBnZXQgX2VudigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Jyb3dzZXInO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdub2RlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnYnJvd3Nlcic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlY3QgdGhlIHVzZXJzIHByZWZlcnJlZCBsYW5ndWFnZS4gSWYgdGhlIGxhbmd1YWdlIGlzIHN0b3JlZCBpblxyXG4gICAgICogbG9jYWxTdG9yYWdlIGR1ZSB0byBhIHByZXZpb3VzIGludGVyYWN0aW9uLCB1c2UgaXQuXHJcbiAgICAgKiBJZiBubyBsb2NhbFN0b3JhZ2UgZW50cnkgaGFzIGJlZW4gZm91bmQsIHVzZSB0aGUgZGVmYXVsdCBicm93c2VyIGxhbmd1YWdlLlxyXG4gICAgICovXHJcbiAgICBfZGV0ZWN0TGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaW5NZW1vcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZy5wZXJzaXN0S2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGluTWVtb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZSA9IGluTWVtb3J5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzXHJcbiAgICAgICAgICAgICAgICA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF1cclxuICAgICAgICAgICAgICAgIDogbmF2aWdhdG9yLmxhbmd1YWdlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlID0gbGFuZy5zdWJzdHIoMCwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgdHJhbnNsYXRlZCB2YWx1ZSBmcm9tIGEgSlNPTiBieSBwcm92aWRpbmcgYSBrZXkuIEFkZGl0aW9uYWxseSxcclxuICAgICAqIHRoZSB0YXJnZXQgbGFuZ3VhZ2UgY2FuIGJlIHNwZWNpZmllZCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9MYW5ndWFnZVxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBfZ2V0VmFsdWVGcm9tSlNPTihrZXksIHRvTGFuZ3VhZ2UpIHtcclxuICAgICAgICBjb25zdCBqc29uID0gdGhpcy5sYW5ndWFnZXMuZ2V0KHRvTGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5LnNwbGl0KCcuJykucmVkdWNlKChvYmosIGkpID0+IChvYmogPyBvYmpbaV0gOiBudWxsKSwganNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlIGEgZ2l2ZW4gRE9NIG5vZGVzJyBhdHRyaWJ1dGUgdmFsdWVzIChieSBkZWZhdWx0IGlubmVySFRNTCkgd2l0aFxyXG4gICAgICogdGhlIHRyYW5zbGF0ZWQgdGV4dC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9MYW5ndWFnZVxyXG4gICAgICovXHJcbiAgICBfcmVwbGFjZShlbGVtZW50LCB0b0xhbmd1YWdlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWkxOG4nKT8uc3BsaXQoL1xccy9nKTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gZWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWkxOG4tYXR0cicpPy5zcGxpdCgvXFxzL2cpO1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBrZXlzLmxlbmd0aCAhPSBhdHRyaWJ1dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdNSVNNQVRDSElOR19BVFRSSUJVVEVTJywga2V5cywgYXR0cmlidXRlcywgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuX2dldFZhbHVlRnJvbUpTT04oa2V5LCB0b0xhbmd1YWdlKTtcclxuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZXMgPyBhdHRyaWJ1dGVzW2luZGV4XSA6ICdpbm5lckhUTUwnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyID09ICdpbm5lckhUTUwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFthdHRyXSA9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZygnVFJBTlNMQVRJT05fTk9UX0ZPVU5EJywga2V5LCB0b0xhbmd1YWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNsYXRlIGFsbCBET00gbm9kZXMgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gc2VsZWN0b3IgaW50byB0aGVcclxuICAgICAqIHNwZWNpZmllZCB0YXJnZXQgbGFuZ3VhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRvTGFuZ3VhZ2UgVGhlIHRhcmdldCBsYW5ndWFnZVxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVQYWdlVG8odG9MYW5ndWFnZSA9IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbnYgPT0gJ25vZGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfRU5WSVJPTk1FTlQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0b0xhbmd1YWdlICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfUEFSQU1fTEFOR1VBR0UnLCB0b0xhbmd1YWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvTGFuZ3VhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnRU1QVFlfUEFSQU1fTEFOR1VBR0UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlcy5oYXModG9MYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnTk9fTEFOR1VBR0VfUkVHSVNURVJFRCcsIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9XHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLmNvbmZpZy5zZWxlY3RvciA9PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmNvbmZpZy5zZWxlY3RvcjtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHRoaXMuX3JlcGxhY2UoZWxlbWVudCwgdG9MYW5ndWFnZSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXBsYWNlKGVsZW1lbnRzLCB0b0xhbmd1YWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSA9IHRvTGFuZ3VhZ2U7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0b0xhbmd1YWdlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcucGVyc2lzdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZy5wZXJzaXN0S2V5LCB0b0xhbmd1YWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGUgYSBnaXZlbiBrZXkgaW50byB0aGUgc3BlY2lmaWVkIGxhbmd1YWdlIGlmIGl0IGV4aXN0c1xyXG4gICAgICogaW4gdGhlIHRyYW5zbGF0aW9uIGZpbGUuIElmIG5vdCBvciBpZiB0aGUgbGFuZ3VhZ2UgaGFzbid0IGJlZW4gYWRkZWQgeWV0LFxyXG4gICAgICogdGhlIHJldHVybiB2YWx1ZSBpcyBgbnVsbGAuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IGZyb20gdGhlIGxhbmd1YWdlIGZpbGUgdG8gdHJhbnNsYXRlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9MYW5ndWFnZSBUaGUgdGFyZ2V0IGxhbmd1YWdlXHJcbiAgICAgKiBAcmV0dXJuIHsoU3RyaW5nfG51bGwpfVxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVGb3JLZXkoa2V5LCB0b0xhbmd1YWdlID0gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTV9LRVknLCBrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZXMuaGFzKHRvTGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ05PX0xBTkdVQUdFX1JFR0lTVEVSRUQnLCB0b0xhbmd1YWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5fZ2V0VmFsdWVGcm9tSlNPTihrZXksIHRvTGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnVFJBTlNMQVRJT05fTk9UX0ZPVU5EJywga2V5LCB0b0xhbmd1YWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHRyYW5zbGF0aW9uIHJlc291cmNlIHRvIHRoZSBUcmFuc2xhdG9yIG9iamVjdC4gVGhlIGxhbmd1YWdlXHJcbiAgICAgKiBjYW4gdGhlbiBiZSB1c2VkIHRvIHRyYW5zbGF0ZSBzaW5nbGUga2V5cyBvciB0aGUgZW50aXJlIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxhbmd1YWdlIFRoZSB0YXJnZXQgbGFuZ3VhZ2UgdG8gYWRkXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ganNvbiBUaGUgbGFuZ3VhZ2UgcmVzb3VyY2UgZmlsZSBhcyBKU09OXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRyYW5zbGF0b3IgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkKGxhbmd1YWdlLCBqc29uKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdJTlZBTElEX1BBUkFNX0xBTkdVQUdFJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsYW5ndWFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdFTVBUWV9QQVJBTV9MQU5HVUFHRScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pIHx8IHR5cGVvZiBqc29uICE9ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfUEFSQU1fSlNPTicsIGpzb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhqc29uKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdFTVBUWV9QQVJBTV9KU09OJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuc2V0KGxhbmd1YWdlLCBqc29uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSB0cmFuc2xhdGlvbiByZXNvdXJjZSBmcm9tIHRoZSBUcmFuc2xhdG9yIG9iamVjdC4gVGhlIGxhbmd1YWdlXHJcbiAgICAgKiB3b24ndCBiZSBhdmFpbGFibGUgYWZ0ZXJ3YXJkcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgVGhlIHRhcmdldCBsYW5ndWFnZSB0byByZW1vdmVcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVHJhbnNsYXRvciBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZW1vdmUobGFuZ3VhZ2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxhbmd1YWdlICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfUEFSQU1fTEFOR1VBR0UnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhbmd1YWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0VNUFRZX1BBUkFNX0xBTkdVQUdFJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMuZGVsZXRlKGxhbmd1YWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBhIHRyYW5zbGF0aW9uIHJlc291cmNlIGZyb20gdGhlIHdlYiBzZXJ2ZXIuIEl0IGNhbiBlaXRoZXIgZmV0Y2hcclxuICAgICAqIGEgc2luZ2xlIHJlc291cmNlIG9yIGFuIGFycmF5IG9mIHJlc291cmNlcy4gQWZ0ZXIgYWxsIHJlc291cmNlcyBhcmUgZmV0Y2hlZCxcclxuICAgICAqIHJldHVybiBhIFByb21pc2UuXHJcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwsIHNlY29uZCBwYXJhbWV0ZXIgaXMgc2V0IHRvIHRydWUsIHRoZSBmZXRjaGVkIHRyYW5zbGF0aW9uc1xyXG4gICAgICogd2lsbCBiZSBhZGRlZCB0byB0aGUgVHJhbnNsYXRvciBvYmplY3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHNvdXJjZXMgVGhlIGZpbGVzIHRvIGZldGNoXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHNhdmUgU2F2ZSB0aGUgdHJhbnNsYXRpb24gdG8gdGhlIFRyYW5zbGF0b3Igb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJuIHsoUHJvbWlzZXxudWxsKX1cclxuICAgICAqL1xyXG4gICAgZmV0Y2goc291cmNlcywgc2F2ZSA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlcykgJiYgdHlwZW9mIHNvdXJjZXMgIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTUVURVJfU09VUkNFUycsIHNvdXJjZXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkge1xyXG4gICAgICAgICAgICBzb3VyY2VzID0gW3NvdXJjZXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJscyA9IHNvdXJjZXMubWFwKChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBzb3VyY2UucmVwbGFjZSgvXFwuanNvbiQvLCAnJykucmVwbGFjZSgvXlxcLy8sICcnKTtcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuY29uZmlnLmZpbGVzTG9jYXRpb24ucmVwbGFjZSgvXFwvJC8sICcnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtwYXRofS8ke2ZpbGVuYW1lfS5qc29uYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2VudiA9PSAnYnJvd3NlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHVybHMubWFwKCh1cmwpID0+IGZldGNoKHVybCkpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlcykgPT5cclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VzLm1hcCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZygnRkVUQ0hfRVJST1InLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGxhbmd1YWdlRmlsZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhIGZpbGUgY291bGQgbm90IGJlIGZldGNoZWQsIGl0IHdpbGwgYmUgYHVuZGVmaW5lZGAgYW5kIGZpbHRlcmVkIG91dC5cclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZUZpbGVzID0gbGFuZ3VhZ2VGaWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2F2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZUZpbGVzLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChzb3VyY2VzW2luZGV4XSwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlRmlsZXMubGVuZ3RoID4gMSA/IGxhbmd1YWdlRmlsZXMgOiBsYW5ndWFnZUZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lbnYgPT0gJ25vZGUnKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbGFuZ3VhZ2VGaWxlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIHVybHMuZm9yRWFjaCgodXJsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMocHJvY2Vzcy5jd2QoKSArIHVybCwgJ3V0Zi04JylcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChzYXZlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmFkZChzb3VyY2VzW2luZGV4XSwganNvbik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhbmd1YWdlRmlsZXMucHVzaChqc29uKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kZWJ1ZygnTU9EVUxFX05PVF9GT1VORCcsIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICByZXNvbHZlKGxhbmd1YWdlRmlsZXMubGVuZ3RoID4gMSA/IGxhbmd1YWdlRmlsZXMgOiBsYW5ndWFnZUZpbGVzWzBdKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSBvZiB0aGUgdHJhbnNsYXRvciBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2VcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHNldERlZmF1bHRMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTV9MQU5HVUFHRScsIGxhbmd1YWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhbmd1YWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0VNUFRZX1BBUkFNX0xBTkdVQUdFJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZXMuaGFzKGxhbmd1YWdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdOT19MQU5HVUFHRV9SRUdJU1RFUkVEJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbGFuZ3VhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXQgY3VycmVudExhbmd1YWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TGFuZ3VhZ2UgfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkZWZhdWx0IGxhbmd1YWdlO1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0IGRlZmF1bHRMYW5ndWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBkZWZhdWx0IGNvbmZpZyBvYmplY3Qgd2hvc2Uga2V5cyBjYW4gYmUgb3ZlcnJpZGVuXHJcbiAgICAgKiBieSB0aGUgdXNlcidzIGNvbmZpZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0Q29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZTogJ2VuJyxcclxuICAgICAgICAgICAgZGV0ZWN0TGFuZ3VhZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtaTE4bl0nLFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyR2xvYmFsbHk6ICdfXycsXHJcbiAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBwZXJzaXN0S2V5OiAncHJlZmVycmVkX2xhbmd1YWdlJyxcclxuICAgICAgICAgICAgZmlsZXNMb2NhdGlvbjogJy9pMThuJyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdG9yOyIsImNvbnN0IENPTlNPTEVfTUVTU0FHRVMgPSB7XHJcbiAgICBJTlZBTElEX1BBUkFNX0xBTkdVQUdFOiAocGFyYW0pID0+XHJcbiAgICAgICAgYEludmFsaWQgcGFyYW1ldGVyIGZvciBcXGBsYW5ndWFnZVxcYCBwcm92aWRlZC4gRXhwZWN0ZWQgYSBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgcGFyYW19LmAsXHJcbiAgICBJTlZBTElEX1BBUkFNX0pTT046IChwYXJhbSkgPT5cclxuICAgICAgICBgSW52YWxpZCBwYXJhbWV0ZXIgZm9yIFxcYGpzb25cXGAgcHJvdmlkZWQuIEV4cGVjdGVkIGFuIG9iamVjdCwgYnV0IGdvdCAke3R5cGVvZiBwYXJhbX0uYCxcclxuICAgIEVNUFRZX1BBUkFNX0xBTkdVQUdFOiAoKSA9PlxyXG4gICAgICAgIGBUaGUgcGFyYW1ldGVyIGZvciBcXGBsYW5ndWFnZVxcYCBjYW4ndCBiZSBhbiBlbXB0eSBzdHJpbmcuYCxcclxuICAgIEVNUFRZX1BBUkFNX0pTT046ICgpID0+XHJcbiAgICAgICAgYFRoZSBwYXJhbWV0ZXIgZm9yIFxcYGpzb25cXGAgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBrZXkvdmFsdWUgcGFpci5gLFxyXG4gICAgSU5WQUxJRF9QQVJBTV9LRVk6IChwYXJhbSkgPT5cclxuICAgICAgICBgSW52YWxpZCBwYXJhbWV0ZXIgZm9yIFxcYGtleVxcYCBwcm92aWRlZC4gRXhwZWN0ZWQgYSBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgcGFyYW19LmAsXHJcbiAgICBOT19MQU5HVUFHRV9SRUdJU1RFUkVEOiAobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgYE5vIHRyYW5zbGF0aW9uIGZvciBsYW5ndWFnZSBcIiR7bGFuZ3VhZ2V9XCIgaGFzIGJlZW4gYWRkZWQsIHlldC4gTWFrZSBzdXJlIHRvIHJlZ2lzdGVyIHRoYXQgbGFuZ3VhZ2UgdXNpbmcgdGhlIFxcYC5hZGQoKVxcYCBtZXRob2QgZmlyc3QuYCxcclxuICAgIFRSQU5TTEFUSU9OX05PVF9GT1VORDogKGtleSwgbGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgYE5vIHRyYW5zbGF0aW9uIGZvdW5kIGZvciBrZXkgXCIke2tleX1cIiBpbiBsYW5ndWFnZSBcIiR7bGFuZ3VhZ2V9XCIuIElzIHRoZXJlIGEga2V5L3ZhbHVlIGluIHlvdXIgdHJhbnNsYXRpb24gZmlsZT9gLFxyXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfU09VUkNFUzogKHBhcmFtKSA9PlxyXG4gICAgICAgIGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgXFxgc291cmNlc1xcYCBwcm92aWRlZC4gRXhwZWN0ZWQgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIGFycmF5LCBidXQgZ290ICR7dHlwZW9mIHBhcmFtfS5gLFxyXG4gICAgRkVUQ0hfRVJST1I6IChyZXNwb25zZSkgPT5cclxuICAgICAgICBgQ291bGQgbm90IGZldGNoIFwiJHtyZXNwb25zZS51cmx9XCI6ICR7cmVzcG9uc2Uuc3RhdHVzfSAoJHtyZXNwb25zZS5zdGF0dXNUZXh0fSlgLFxyXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVDogKCkgPT5cclxuICAgICAgICBgWW91IGFyZSB0cnlpbmcgdG8gZXhlY3V0ZSB0aGUgbWV0aG9kIFxcYHRyYW5zbGF0ZVBhZ2VUbygpXFxgLCB3aGljaCBpcyBvbmx5IGF2YWlsYWJsZSBpbiB0aGUgYnJvd3Nlci4gWW91ciBlbnZpcm9ubWVudCBpcyBtb3N0IGxpa2VseSBOb2RlLmpzYCxcclxuICAgIE1PRFVMRV9OT1RfRk9VTkQ6IChtZXNzYWdlKSA9PiBtZXNzYWdlLFxyXG4gICAgTUlTTUFUQ0hJTkdfQVRUUklCVVRFUzogKGtleXMsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpID0+XHJcbiAgICAgICAgYFRoZSBhdHRyaWJ1dGVzIFwiZGF0YS1pMThuXCIgYW5kIFwiZGF0YS1pMThuLWF0dHJcIiBtdXN0IGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIGtleXMuXHJcblxyXG5WYWx1ZXMgaW4gXFxgZGF0YS1pMThuXFxgOiAgICAgICgke2tleXMubGVuZ3RofSkgXFxgJHtrZXlzLmpvaW4oJyAnKX1cXGBcclxuVmFsdWVzIGluIFxcYGRhdGEtaTE4bi1hdHRyXFxgOiAoJHthdHRyaWJ1dGVzLmxlbmd0aH0pIFxcYCR7YXR0cmlidXRlcy5qb2luKCcgJyl9XFxgXHJcblxyXG5UaGUgSFRNTCBlbGVtZW50IGlzOlxyXG4ke2VsZW1lbnQub3V0ZXJIVE1MfWAsXHJcbiAgICBJTlZBTElEX09QVElPTlM6IChwYXJhbSkgPT5cclxuICAgICAgICBgSW52YWxpZCBjb25maWcgcGFzc2VkIHRvIHRoZSBcXGBUcmFuc2xhdG9yXFxgIGNvbnN0cnVjdG9yLiBFeHBlY3RlZCBhbiBvYmplY3QsIGJ1dCBnb3QgJHt0eXBlb2YgcGFyYW19LiBVc2luZyBkZWZhdWx0IGNvbmZpZyBpbnN0ZWFkLmAsXHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtCb29sZWFufSBpc0VuYWJsZWRcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2VyKGlzRW5hYmxlZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGxvZyhjb2RlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IENPTlNPTEVfTUVTU0FHRVNbY29kZV07XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UgPyBtZXNzYWdlKC4uLmFyZ3MpIDogJ1VuaGFuZGxlZCBFcnJvcicpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluZSA9IGV4LnN0YWNrLnNwbGl0KC9cXG4vZylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kLCBmaWxlcGF0aF0gPSBsaW5lLnNwbGl0KC9ALyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtleC5tZXNzYWdlfVxyXG5cclxuVGhpcyBlcnJvciBoYXBwZW5lZCBpbiB0aGUgbWV0aG9kIFxcYCR7bWV0aG9kfVxcYCBmcm9tOiBcXGAke2ZpbGVwYXRofVxcYC5cclxuXHJcbklmIHlvdSBkb24ndCB3YW50IHRvIHNlZSB0aGVzZSBlcnJvciBtZXNzYWdlcywgdHVybiBvZmYgZGVidWdnaW5nIGJ5IHBhc3NpbmcgXFxgeyBkZWJ1ZzogZmFsc2UgfVxcYCB0byB0aGUgY29uc3RydWN0b3IuXHJcblxyXG5FcnJvciBjb2RlOiAke2NvZGV9XHJcblxyXG5DaGVjayBvdXQgdGhlIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgZGV0YWlscyBhYm91dCB0aGUgQVBJOlxyXG5odHRwczovL2dpdGh1Yi5jb20vYW5kcmVhc3JlbWR0L3NpbXBsZS10cmFuc2xhdG9yI3VzYWdlXHJcbiAgICAgICAgYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IiwiLy9pbXBvcnQgKiBhcyBHcmFiVG9QYW4gZnJvbSAnLi9ncmFiLXRvLXBhbi5qcyc7XHJcblxyXG5jb25zdCBpc05vdElFb3JJc0lFMTBwbHVzID0gIWRvY3VtZW50LmRvY3VtZW50TW9kZSB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPiA5O1xyXG5jb25zdCBjaHJvbWUyID0gd2luZG93LmNocm9tZTtcclxuY29uc3QgaXNDaHJvbWUxNU9yT3BlcmExNXBsdXMgPSBjaHJvbWUyICYmIChjaHJvbWUyLndlYnN0b3JlIHx8IGNocm9tZTIuYXBwKTtcclxuY29uc3QgaXNTYWZhcmk2cGx1cyA9IC9BcHBsZS8udGVzdChuYXZpZ2F0b3IudmVuZG9yKSAmJiAvVmVyc2lvblxcLyhbNi05XVxcZCp8WzEtNV1cXGQrKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbmZ1bmN0aW9uIGlzTGVmdE1vdXNlUmVsZWFzZWQoZXZlbnQpIHtcclxuICAgICAgICBpZiAoXCJidXR0b25zXCIgaW4gZXZlbnQgJiYgaXNOb3RJRW9ySXNJRTEwcGx1cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEoZXZlbnQuYnV0dG9ucyAmIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2hyb21lMTVPck9wZXJhMTVwbHVzIHx8IGlzU2FmYXJpNnBsdXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC53aGljaCA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4gICAgICAgICAgICAgICAgXHJcbmxldCBtYXRjaGVzU2VsZWN0b3I7XHJcbltcIndlYmtpdE1cIiwgXCJtb3pNXCIsIFwibXNNXCIsIFwib01cIiwgXCJtXCJdLnNvbWUoZnVuY3Rpb24gKHByZWZpeCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gcHJlZml4ICsgXCJhdGNoZXNcIjtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzU2VsZWN0b3IgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZSArPSBcIlNlbGVjdG9yXCI7XHJcblxyXG4gICAgICAgIGlmIChuYW1lIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzU2VsZWN0b3I7XHJcbn0pO1xyXG5cclxuY29uc3QgQ3Vyc29yVG9vbCA9IHtcclxuICAgICAgICBTRUxFQ1Q6IDAsXHJcbiAgICAgICAgSEFORDogMSxcclxuICAgICAgICBaT09NOiAyXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgUERGQ3Vyc29yVG9vbHMge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIGV2ZW50QnVzLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yVG9vbE9uTG9hZCA9IDFcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMgPSBldmVudEJ1cztcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmVmb3JlUHJlc2VudGF0aW9uTW9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRUb29sID0gbmV3IEdyYWJUb1Bhbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvb2woY3Vyc29yVG9vbE9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBhY3RpdmVUb29sKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoVG9vbCh0b29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVCZWZvcmVQcmVzZW50YXRpb25Nb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG9vbCA9PT0gdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc2FibGVBY3RpdmVUb29sID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLlNFTEVDVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuSEFORDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZFRvb2wuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5aT09NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5TRUxFQ1Q6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFjdGl2ZVRvb2woKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5IQU5EOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBY3RpdmVUb29sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kVG9vbC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLlpPT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgc3dpdGNoVG9vbDogXCIke3Rvb2x9XCIgaXMgYW4gdW5zdXBwb3J0ZWQgdmFsdWUuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdG9vbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfZGlzcGF0Y2hFdmVudCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuZGlzcGF0Y2goXCJjdXJzb3J0b29sY2hhbmdlZFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbDogdGhpcy5hY3RpdmVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5fb24oXCJzd2l0Y2hjdXJzb3J0b29sXCIsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9vbChldnQudG9vbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLl9vbihcInByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkXCIsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQuc3dpdGNoSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzbHlBY3RpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzbHlBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRvb2woQ3Vyc29yVG9vbC5TRUxFQ1QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmVmb3JlUHJlc2VudGF0aW9uTW9kZSA9IHByZXZpb3VzbHlBY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNseUFjdGl2ZSA9IHRoaXMuYWN0aXZlQmVmb3JlUHJlc2VudGF0aW9uTW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJlZm9yZVByZXNlbnRhdGlvbk1vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9vbChwcmV2aW91c2x5QWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBAbW9kdWxlIFJlYWRlci9SZWFkZXJNb2RcclxuICovXHJcblxyXG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuLi9Db25zdGFudHMuanMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuLy4uL3V0aWxzL3V0aWxzLmpzJztcclxuaW1wb3J0IHtSZWFkZXJQYWdlRGF0YX0gZnJvbSAnLi9yZWFkZXJQYWdlRGF0YS5qcydcclxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXHJcbmltcG9ydCBDUCBmcm9tICcuLy4uL3V0aWxzL2NvbG9yLXBpY2tlcic7XHJcblxyXG52YXIgX3JlYWRlck1vZDtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZWE65OcIOyeheugpSDqtIDroKgg7LKY66as66W8IO2VmOuKlCBDbGFzc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrfSBjdXN0b21BbGVydEZ1bmMgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjY3VzdG9tQWxlcnRGdW5jIH1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IG1lbnVDZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI21lbnVDZH1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IHBhZ2VzSW5mbyAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwYWdlc0luZm8gfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGRmVmlld2VyIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcGRmVmlld2VyfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gcmVhZGVyT3duZXJOb2RlICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlYWRlck93bmVyTm9kZSB9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSByZWdpc3RlcmVkU2lnbkRhdGFzICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlZ2lzdGVyZWRTaWduRGF0YXMgfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gc2lnbkNhbnZhcyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25DYW52YXN9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZW1wbGF0ZURhdGEgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjdGVtcGxhdGVEYXRhIH1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IHRleHRTaWduQ2FudmFzICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3RleHRTaWduQ2FudmFzIH1cclxuICpcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvbmVTaWduRGF0YSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNjbG9uZVNpZ25EYXRhIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvc2VTaWduUG9wdXAgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjY2xvc2VTaWduUG9wdXAgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBleHBvcnRGaWVsZERhdGEgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjZXhwb3J0RmllbGREYXRhIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5IH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbG9hZEpzb25EYXRhICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2xvYWRKc29uRGF0YSB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGxvYWRKc29uRGF0YVdpdGhVc2VySW5mbyAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNsb2FkSnNvbkRhdGFXaXRoVXNlckluZm8gfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBsb2FkUmVnaXN0ZXJlZFNpZ25EYXRhICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2xvYWRSZWdpc3RlcmVkU2lnbkRhdGEgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBwYWdlUmVmcmVzaCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwYWdlUmVmcmVzaCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHBhZ2VSZW5kZXIgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcGFnZVJlbmRlciB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHJlYWRlckluaXQgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcmVhZGVySW5pdCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNhdmVTaWduUG9wdXBEYXRhICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NhdmVTaWduUG9wdXBEYXRhIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2lnblBvcHVwSW5pdEV2dCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduUG9wdXBJbml0RXZ0IH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2lnblBvcHVwVGFiQ2xpY2sgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblBvcHVwVGFiQ2xpY2sgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzaWduUmV2ZXJ0ICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25SZXZlcnQgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzaWduVGV4dENyZWF0ZSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduVGV4dENyZWF0ZSB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNpZ25UZXh0Q3JlYXRlS2V5VXBFdmVudCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduVGV4dENyZWF0ZUtleVVwRXZlbnQgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzdGFtcEZpbGVTZWxlY3QgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc3RhbXBGaWxlU2VsZWN0IH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc3RhbXBGaWxlU2VsZWN0ICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3N0YW1wRmlsZVNlbGVjdCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGFkZFVSTEltYWdlVG9TaWduQXJlYSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNhZGRVUkxJbWFnZVRvU2lnbkFyZWEgfVxyXG4gKiBcclxuICogQEZpbGVOYW1lIFJlYWRlck1vZC5qc1xyXG4gKiBAc2luY2UgMjAyMS4wNS4zMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlYWRlck1vZCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge1BERlZpZXdlcn1cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcGRmVmlld2VyXHJcbiAgICogQGRlc2NyaXB0aW9uIFBERi5qcyDrt7DslrQg7Jik67iM7KCd7Yq4XHJcbiAgICovXHJcbiAgcGRmVmlld2VyO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCN0ZW1wbGF0ZURhdGFcclxuICAgKiBAZGVzY3JpcHRpb24gVGVtcGxhdGXsl5DshJwg66eM65OgIO2VhOuTnCDsoJXrs7Qg642w7J207YSwLlxyXG4gICAqL1xyXG4gIHRlbXBsYXRlRGF0YTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnbkNhbnZhc1xyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrqoXtjJ3sl4XsnZggRHJhd2luZ+2DreydmCBjYW52YXMgT2JqZWN0LlxyXG4gICAqL1xyXG4gIHNpZ25DYW52YXMgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCN0ZXh0U2lnbkNhbnZhc1xyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrqoXtjJ3sl4XsnZgg7YWN7Iqk7Yq4IOyEnOuqhe2DreyXkOyEnCDthY3siqTtirgg7ISc66qF7J2EIOyEoO2Dne2VmOuptCDsoIDsnqXtlZjripQgY2FudmFzIE9iamVjdC5cclxuICAgKi9cclxuICB0ZXh0U2lnbkNhbnZhcyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3BhZ2VzSW5mb1xyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTrk5zrk6TsnZgg7KCV67O066W8IOuLtOqzoCDsnojripQg7Y6Y7J207KeAIOygleuztCDsmKTruIzsoJ3tirhcclxuICAgKi9cclxuICBwYWdlc0luZm8gPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGUge0VsZW1lbnR9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlYWRlck93bmVyTm9kZVxyXG4gICAqIEBkZXNjcmlwdGlvbiDsnbQg7ZSE66Gc7KCd7Yq46rCAIO2PrO2VqOuQoCBFbGVtZW507J2YIOu2gOuqqCBIVE1MIEVMRU1FTlRcclxuICAgKi9cclxuICByZWFkZXJPd25lck5vZGUgPSBcIlwiO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNyZWdpc3RlcmVkU2lnbkRhdGFzXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuyhOyXkOyEnCDrk7HroZ3rkJwg7ISc66qFIOydtOuvuOyngCDsoJXrs7Trpbwg64u07JWE7IScIOyggOyepe2VmOqzoCDsnojsnYQg642w7J207YSwIE9iamVjdFxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyZWRTaWduRGF0YXMgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7Q2FsbGJhY2t9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2N1c3RvbUFsZXJ0RnVuY1xyXG4gICAqIEBkZXNjcmlwdGlvbiDslYzrprwg7LC97J2EIOudhOyasOq4sCDsnITtlZwgQ2FsbGJhY2sgRnVuY3Rpb25cclxuICAgKi9cclxuICBjdXN0b21BbGVydEZ1bmMgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNyZWFkZXJNb2RlXHJcbiAgICogQGRlc2NyaXB0aW9uIOyeheugpSDrqqjrk5wgMCDrqZTrqqjrqqjrk5wgMVxyXG4gICAqL1xyXG4gIHJlYWRlck1vZGUgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNpbWdKc29uRmlsZVVybFxyXG4gICAqIEBkZXNjcmlwdGlvbiBpbWdKc29uRmlsZVVybOuKlCDrk7HroZ3rkJwg7J2066+47KeAIO2DreyXkOyEnCDrs7Tsl6zspIQg7J2066+47KeA65Ok7J2YIOygleuztOulvCDri7TsnYAganNvbiDtjIzsnbwg6rK966GcIFxyXG4gICAqL1xyXG4gIGltZ0pzb25GaWxlVXJsID0gXCJcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF9wZGZWaWV3ZXIgUERGIFZpZXdlciBPYmplY3RcclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSDsnbQg7ZSE66Gc7KCd7Yq46rCAIO2PrO2VqOuQoCBFbGVtZW507J2YIOu2gOuqqCBIVE1MIEVMRU1FTlRcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKF9wZGZWaWV3ZXIsIG93bmVyTm9kZSkge1xyXG4gICAgdGhpcy5wZGZWaWV3ZXIgPSBfcGRmVmlld2VyO1xyXG4gICAgX3JlYWRlck1vZCA9IHRoaXM7XHJcbiAgICB0aGlzLnJlYWRlck93bmVyTm9kZSA9IG93bmVyTm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBwYWdlUmVuZGVyXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3BhZ2VSZW5kZXJcclxuICAgKiBAZGVzY3JpcHRpb24gIO2OmOydtOyngCDrnpzrjZTrp4Eg7J2067Kk7Yq465WMIO2VhOuTnOulvCDrnpzrjZTrp4HtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgT2JqZWN0XHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgcGFnZVJlbmRlcihldmVudCkge1xyXG4gICAgY29uc3QgcGFnZU5vID0gZXZlbnQucGFnZU51bWJlcjtcclxuICAgIC8vY29uc29sZS5sb2cocGFnZU5vKTtcclxuICAgIGxldCBwZ05vZGUgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiBbZGF0YS1wYWdlLW51bWJlcj0nXCIgKyBwYWdlTm8gKyBcIiddXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3JlYWRlck1vZC5wYWdlc0luZm8pO1xyXG4gICAgaWYgKGtleXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgX3JlYWRlck1vZC5oaWRlTWVtb1Byb3BlcnRpZXMoKTtcclxuICAgIGxldCBwYWdlSW5mbyA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdO1xyXG4gICAgY29uc3Qgdmlld3BvcnQgPSBfcmVhZGVyTW9kLnBkZlZpZXdlci5fcGFnZXNbcGFnZU5vIC0gMV0udmlld3BvcnQ7XHJcbiAgICBwYWdlSW5mby5jcmVhdGVGaWVsZChcclxuICAgICAgcGdOb2RlLFxyXG4gICAgICB2aWV3cG9ydCxcclxuICAgICAgX3JlYWRlck1vZC5yZWFkZXJNb2RlLFxyXG4gICAgICBfcmVhZGVyTW9kLmRlbGV0ZUJ0bkNsaWNrRXZlbnRMaXN0ZW5lcixcclxuICAgICAgX3JlYWRlck1vZC5tZW1vUHJvcGVydHlCdG5DbGlja0V2ZW50TGlzdGVuZXJcclxuICAgICk7XHJcbiAgICBpZiAoX3JlYWRlck1vZC5yZWFkZXJNb2RlID09PSBDT05TVEFOVFMuUkVBREVSX0ZJRUxEX01FTU9fTUFLRV9NT0RFKSB7XHJcbiAgICAgIHBnTm9kZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1MpXHJcbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9yZWFkZXJNb2QudGVtcGxhdGVNb3VzZVVwRXZlbnQpO1xyXG4gICAgICBwZ05vZGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIENPTlNUQU5UUy5SRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfcmVhZGVyTW9kLnRlbXBsYXRlTW91c2VVcEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBwYWdlUmVmcmVzaFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwYWdlUmVmcmVzaFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7ZWE65Oc642w7J207YSw66W8IOuLpOyLnCDrnpzrjZTrp4HtlZzri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHBhZ2VSZWZyZXNoKCkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKF9yZWFkZXJNb2QucGFnZXNJbmZvKTtcclxuICAgIGlmIChrZXlzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBfcmVhZGVyTW9kLmhpZGVNZW1vUHJvcGVydGllcygpO1xyXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgbGV0IHBhZ2VOdW1iZXIgPSBwYXJzZUludChrZXkpICsgMTtcclxuICAgICAgbGV0IHBnTm9kZSA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIgW2RhdGEtcGFnZS1udW1iZXI9J1wiICsgcGFnZU51bWJlciArIFwiJ11cIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgaXNMb2FkZWQgPSBwZ05vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkZWRcIik7XHJcbiAgICAgIGlmIChpc0xvYWRlZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBsZXQgcGFnZUluZm8gPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1trZXldO1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gX3JlYWRlck1vZC5wZGZWaWV3ZXIuX3BhZ2VzW2tleV0udmlld3BvcnQ7XHJcbiAgICAgICAgcGFnZUluZm8uY3JlYXRlRmllbGQoXHJcbiAgICAgICAgICBwZ05vZGUsXHJcbiAgICAgICAgICB2aWV3cG9ydCxcclxuICAgICAgICAgIF9yZWFkZXJNb2QucmVhZGVyTW9kZSxcclxuICAgICAgICAgIF9yZWFkZXJNb2QuZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyLFxyXG4gICAgICAgICAgX3JlYWRlck1vZC5tZW1vUHJvcGVydHlCdG5DbGlja0V2ZW50TGlzdGVuZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChfcmVhZGVyTW9kLnJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfTUVNT19NQUtFX01PREUpIHtcclxuICAgICAgICAgIHBnTm9kZVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIENPTlNUQU5UUy5SRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTKVxyXG4gICAgICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3JlYWRlck1vZC50ZW1wbGF0ZU1vdXNlVXBFdmVudCk7XHJcbiAgICAgICAgICBwZ05vZGVcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfTUVNT19MQVlFUl9DTEFTUylcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9yZWFkZXJNb2QudGVtcGxhdGVNb3VzZVVwRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gbG9hZEpzb25EYXRhXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2xvYWRKc29uRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiAgZmllbGTsoJXrs7Trpbwg66Gc65Oc7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGpzb25EYXRhICBpbXBvcnTtlaAganNvbiBkYXRhIE9iamVjdFxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgbG9hZEpzb25EYXRhKGpzb25EYXRhKSB7XHJcbiAgICBpZiAoanNvbkRhdGEgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEgPSBqc29uRGF0YTtcclxuICAgIGxldCBkZWZhdWx0VmFsdWVJbmZvID0gVXRpbHMuY2xvbmVPYmplY3QoXHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF1cclxuICAgICk7XHJcblxyXG4gICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHZhciBwYWdlRGF0YSA9IG5ldyBSZWFkZXJQYWdlRGF0YShcclxuICAgICAgICBlbGVtZW50LnBhZ2VObyxcclxuICAgICAgICBkZWZhdWx0VmFsdWVJbmZvLFxyXG4gICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLFxyXG4gICAgICAgIF9yZWFkZXJNb2QuY3VzdG9tQWxlcnRGdW5jLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhc1xyXG4gICAgICApO1xyXG4gICAgICBlbGVtZW50LmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHBhZ2VEYXRhLnB1c2hGaWVsZChmaWVsZC5tX2lkLCBmaWVsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZWxlbWVudC5tZW1vcyAhPT0gbnVsbCAmJiBlbGVtZW50Lm1lbW9zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGVtZW50Lm1lbW9zLmZvckVhY2goKG1lbW8pID0+IHtcclxuICAgICAgICAgIHBhZ2VEYXRhLnB1c2hNZW1vKG1lbW8ubV9pZCwgbWVtbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgX3JlYWRlck1vZC5wYWdlc0luZm9bZWxlbWVudC5wYWdlTm9dID0gcGFnZURhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBsb2FkSnNvbkRhdGFXaXRoVXNlckluZm9cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbG9hZEpzb25EYXRhV2l0aFVzZXJJbmZvXHJcbiAgICogQGRlc2NyaXB0aW9uICDshJzrqoXsnpAg7KCV67O07JmAIGZpZWxk7KCV67O066W8IO2VqeyzkOyEnCDroZzrk5ztlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbkRhdGEgIGltcG9ydO2VoCBqc29uIGRhdGEgT2JqZWN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJJbmZvICDshJzrqoXsnpAg7KCV67O0IE9iamVjdFxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGxvYWRKc29uRGF0YVdpdGhVc2VySW5mbyhqc29uRGF0YSwgdXNlckluZm8sIHVzZXJLZXkpIHtcclxuICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhID0ganNvbkRhdGE7XHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlSW5mbyA9IFV0aWxzLmNsb25lT2JqZWN0KHVzZXJJbmZvKTtcclxuXHJcbiAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0W3VzZXJLZXldLnBhZ2VzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgdmFyIHBhZ2VEYXRhID0gbmV3IFJlYWRlclBhZ2VEYXRhKFxyXG4gICAgICAgIGVsZW1lbnQucGFnZU5vLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZUluZm8sXHJcbiAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsXHJcbiAgICAgICAgX3JlYWRlck1vZC5jdXN0b21BbGVydEZ1bmMsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXNcclxuICAgICAgKTtcclxuICAgICAgZWxlbWVudC5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICBwYWdlRGF0YS5wdXNoRmllbGQoZmllbGQubV9pZCwgZmllbGQpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIF9yZWFkZXJNb2QucGFnZXNJbmZvW2VsZW1lbnQucGFnZU5vXSAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgX3JlYWRlck1vZC5wYWdlc0luZm9bZWxlbWVudC5wYWdlTm9dICE9PSBudWxsXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRlbGV0ZSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1tlbGVtZW50LnBhZ2VOb107XHJcbiAgICAgIH1cclxuICAgICAgX3JlYWRlck1vZC5wYWdlc0luZm9bZWxlbWVudC5wYWdlTm9dID0gcGFnZURhdGE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiByZWFkZXJJbml0XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlYWRlckluaXRcclxuICAgKiBAZGVzY3JpcHRpb24gIO2VhOyalO2VnCDsoJXrs7Trk6TsnYQg7LSI6riw7ZmU7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICByZWFkZXJJbml0KCkge1xyXG4gICAgaWYgKF9yZWFkZXJNb2Quc2lnbkNhbnZhcyA9PT0gbnVsbCkge1xyXG4gICAgICBsZXQgZHJhd0NvbXBvbmVudCA9XHJcbiAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiNkcmF3Q29tcG9uZW50XCIpO1xyXG4gICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhkcmF3Q29tcG9uZW50LCB7XHJcbiAgICAgICAgaXNEcmF3aW5nTW9kZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGlmIChfcmVhZGVyTW9kLnRleHRTaWduQ2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgIGxldCBjYW52YXMxID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiAjdGV4dFNpZ25DYW52YXMgLmNhbnZhc193cmFwIGNhbnZhc1wiXHJcbiAgICAgICk7XHJcbiAgICAgIF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMgPSBuZXcgZmFicmljLlN0YXRpY0NhbnZhcyhjYW52YXMxLCB7fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfcmVhZGVyTW9kLnRleHRTaWduQ2FudmFzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI2RyYXdUeXBlSW5pdEJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9yZWFkZXJNb2Quc2lnblJldmVydCk7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiAjY2FuY2VsQnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3JlYWRlck1vZC5jbG9zZVNpZ25Qb3B1cCk7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiAjZHJhd1JlZ2lzdEJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9yZWFkZXJNb2Quc2F2ZVNpZ25Qb3B1cERhdGEpO1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25FbGVtZW50XCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIF9yZWFkZXJNb2Quc2lnblBvcHVwSW5pdEV2dCk7XHJcblxyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wRmlsZUlucHV0XCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIF9yZWFkZXJNb2Quc3RhbXBJbWFnZVNlbGVjdGVkKTtcclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiIC5jb3JuZXJfcG9pbnRfYXJlYSAudHh0X2d1aWRlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3JlYWRlck1vZC5zdGFtcEZpbGVTZWxlY3QpO1xyXG5cclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiIC5TaWduLVBvcHVwID4gLlNpZ24tTGF5ZXJwb3AgLlBvcHVwLUJvZHkgLlBvcHVwLVRhYi1NYWluID4gbGlcIlxyXG4gICAgICApXHJcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGlmICghVXRpbHMuaXNFbXB0eU9iamVjdChlbC5vbmNsaWNrKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3JlYWRlck1vZC5zaWduUG9wdXBUYWJDbGljaywgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGxvYWRSZWdpc3RlcmVkU2lnbkRhdGFcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbG9hZFJlZ2lzdGVyZWRTaWduRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiAgIOyEnOuyhOuhnOu2gO2EsCDrk7HroZ3rkJwg7J247J6lIOygleuztOulvCDrtojrn6zsmKjri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGFzeW5jIGxvYWRSZWdpc3RlcmVkU2lnbkRhdGEoKSB7XHJcbiAgICBsZXQgc2lnblR5cGVMaXN0ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5yZWdpc3RlcmVkU2lnbldyYXAgdWwuc2lnblR5cGVMaXN0XCJcclxuICAgICk7XHJcbiAgICBsZXQgc3RhbXBsaXN0VHlwZSA9IHNpZ25UeXBlTGlzdC5nZXRBdHRyaWJ1dGUoXCJjbG9uZWtleVwiKTtcclxuICAgIGxldCBwb3B1cERpdiA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25FbGVtZW50XCIpO1xyXG4gICAgbGV0IGxheWVyUG9wID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcIi5TaWduLUxheWVycG9wXCIpO1xyXG4gICAgLy9sZXQgcmVnU2lnbkFwaVVybCA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcInJlZ1NpZ25BcGlVcmxcIik7XHJcbiAgICBpZiAoXHJcbiAgICAgIF9yZWFkZXJNb2QuaW1nSnNvbkZpbGVVcmwgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBfcmVhZGVyTW9kLmltZ0pzb25GaWxlVXJsID09PSBudWxsIHx8XHJcbiAgICAgIF9yZWFkZXJNb2QuaW1nSnNvbkZpbGVVcmwgPT09IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlZ1NpZ25BcGlVcmwgPSBfcmVhZGVyTW9kLmltZ0pzb25GaWxlVXJsO1xyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgbGV0IHN0YW1wVXJsID0gcmVnU2lnbkFwaVVybDtcclxuICAgIGlmIChzdGFtcGxpc3RUeXBlICE9PSBcInJlZ2lzdGVyZWRDb21wYW55TGlzdFwiKSB7XHJcbiAgICAgIHN0YW1wVXJsID0gXCIvdWkvYnAvZWRvYy9lZm9ybS9maW5kVXNlclN0YW1wTGlzdEJ5TWFpbC5kb1wiOy8v7Ja065akIOyaqeuPhOyngD9cclxuICAgIH1cclxuICAgIHZhciBjb250ZW50Q2hpcGhlciA9IGZhbHNlO1xyXG4gICAgdmFyIGJvZHlKc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoeyByZWdpc3RlcmVkU2lnbkRhdGFzOiBcInJlYWRlclwiIH0pO1xyXG4gICAgY29uc29sZS5sb2coYm9keUpzb25TdHIpO1xyXG4gICAgaWYgKHdpbmRvdy5pc1BhcmFtZXRlckVuY3lwdCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb250ZW50Q2hpcGhlciA9IHRydWU7XHJcbiAgICAgIGJvZHlKc29uU3RyID0gQ2lwaGVyVXRpbC5lbmNyeXB0KGJvZHlKc29uU3RyLCBcIkFFU1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiBtZXRhW25hbWU9X2NzcmZdXCIpLmNvbnRlbnQ7XHJcbiAgICBcclxuXHJcbiAgICBmZXRjaChcclxuICAgICAgc3RhbXBVcmwsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwieC1jc3JmLXRva2VuXCI6IGNzcmYsXHJcbiAgICAgICAgICBcIngtcmVxdWVzdGVkLXdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICAgXCJjb250ZW50LWNoaXBoZXJcIjogY29udGVudENoaXBoZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IGJvZHlKc29uU3RyLFxyXG4gICAgICB9XHJcbiAgICAgIC8vZmV0Y2goXCJmaW5kQ29tcGFueVN0YW1wTGlzdC5kb1wiXHJcbiAgICApXHJcbiAgICAqL1xyXG4gICAgbGV0IHN0YW1wVXJsID0gcmVnU2lnbkFwaVVybDsvL+2YhOyerOuKlCDsgqzsmqkg7JWI7ZWoKEFQSeuwqeyLnSDsgqzsmqnsi5wg7IKs7JqpKVxyXG5cclxuXHJcbiAgICAvLyByZWdTaWduQXBpVXJs7J20IOuwsOyXtOyduOyngCDtmZXsnbhcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZ1NpZ25BcGlVcmwpKSB7XHJcbiAgICAgICAgLy8g67Cw7Je07J24IOqyveyasOydmCDsspjrpqxcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlvrk7HroZ3rkJwg7J2066+47KeAXSBVUkwg67Cw7Je0LlwiKTtcclxuICAgICAgICBsZXQgZGF0YSA9IF9yZWFkZXJNb2QuY29udmVydFVybHNUb0pzb24ocmVnU2lnbkFwaVVybCk7XHJcbiAgICAgICAgX3JlYWRlck1vZC5yZWdpc3RlcmVkU2lnbkRhdGFzID0gZGF0YTtcclxuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBkYXRhLmxlbmd0aDsgKytpZHgpIHtcclxuICAgICAgICAgIGxldCBsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgbGV0IGNhbnZhc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5jbGFzc05hbWUgPSBcImNhbnZhc193cmFwXCI7XHJcbiAgICAgICAgICBsZXQgaW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgbGV0IHNpZ25EYXRhID0gZGF0YVtpZHhdO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAg7YWM7Iqk7Yq4XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICAgLy8gY29udmVydEltYWdlVG9CYXNlNjQg7ZWo7IiYIO2YuOy2nO2VmOyXrCDsnbTrr7jsp4DrpbwgYmFzZTY066GcIOuzgO2ZmO2VmOqzoCDqsrDqs7zrpbwg7LKY66asXHJcbiAgICAgICAgICBhd2FpdCBfcmVhZGVyTW9kLmNvbnZlcnRJbWFnZVRvQmFzZTY0KHNpZ25EYXRhLmltZ19zcmMpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihiYXNlNjRTdHJpbmcpIHtcclxuICAgICAgICAgICAgc2lnbkRhdGEuaW1nX3NyYyA9IGJhc2U2NFN0cmluZztcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgLy9hbGVydChcIuyEoO2Dne2VmOyLoCDrk7HroZ3rkJwg7J2066+47KeA7J2YIFVSTOyXkCDsoJHqt7ztlaAg7IiYIOyXhuyKteuLiOuLpC5cXG4gKENPUlPsoJXssYUg7JyE67CwIO2YueydgCDsnpjrqrvrkJwgVVJMKVwiKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAg7YWM7Iqk7Yq4XHJcbiAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgIGltZ0VsLnNyYyA9IHNpZ25EYXRhLmltZ19zcmM7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZ0KTtcclxuICAgICAgICAgICAgbGV0IGxpTGlzdCA9IHNpZ25UeXBlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGxpSWR4ID0gMDsgbGlJZHggPCBsaUxpc3QubGVuZ3RoOyArK2xpSWR4KSB7XHJcbiAgICAgICAgICAgICAgbGV0IGxpRWwgPSBsaUxpc3QuaXRlbShsaUlkeCk7XHJcbiAgICAgICAgICAgICAgaWYgKGxpRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICAgICAgICAgIGxpRWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0TGkgPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKTtcclxuICAgICAgICAgICAgdGFyZ2V0TGkuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInJlZ2lzdGVyZWRJZHhcIiwgaWR4KTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicmVnaXN0ZXJlZEltZ1R5cGVcIiwgJ1VSTCcpO1xyXG4gICAgICAgICAgLy9jYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInN0cE5PXCIsIHNpZ25EYXRhLnN0cF9ubyk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLmFwcGVuZENoaWxkKGltZ0VsKTtcclxuICAgICAgICAgIGxpRWwuYXBwZW5kQ2hpbGQoY2FudmFzV3JhcCk7XHJcbiAgICAgICAgICBzaWduVHlwZUxpc3QuYXBwZW5kQ2hpbGQobGlFbCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOuwsOyXtOydtCDslYTri4wg6rK97Jqw7J2YIOyymOumrFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW+uTseuhneuQnCDsnbTrr7jsp4BdIEpzb24g7YyM7J28IOqyveuhnFwiKTtcclxuICAgICAgICBmZXRjaChyZWdTaWduQXBpVXJsKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi7J2R64u1IOuNsOydtO2EsDpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIF9yZWFkZXJNb2QucmVnaXN0ZXJlZFNpZ25EYXRhcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGRhdGEubGVuZ3RoOyArK2lkeCkge1xyXG4gICAgICAgICAgICAgIGxldCBsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgIGxldCBjYW52YXNXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICBjYW52YXNXcmFwLmNsYXNzTmFtZSA9IFwiY2FudmFzX3dyYXBcIjtcclxuICAgICAgICAgICAgICBsZXQgaW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgIGxldCBzaWduRGF0YSA9IGRhdGFbaWR4XTtcclxuICAgICAgICAgICAgICBpZiAoc2lnbkRhdGEuaW1nX3R5cGUgPT09IFwiU1ZHXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW3NpZ25EYXRhLmltZ19zcmNdLCB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbWdFbC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbWdFbC5zcmMgPSBzaWduRGF0YS5pbWdfc3JjO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWdFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpTGlzdCA9IHNpZ25UeXBlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsaUlkeCA9IDA7IGxpSWR4IDwgbGlMaXN0Lmxlbmd0aDsgKytsaUlkeCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbGlFbCA9IGxpTGlzdC5pdGVtKGxpSWR4KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGxpRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaUVsLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldExpID0gZXZ0LnRhcmdldC5jbG9zZXN0KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY2FudmFzV3JhcC5zZXRBdHRyaWJ1dGUoXCJyZWdpc3RlcmVkSWR4XCIsIGlkeCk7XHJcbiAgICAgICAgICAgICAgY2FudmFzV3JhcC5zZXRBdHRyaWJ1dGUoXCJyZWdpc3RlcmVkSW1nVHlwZVwiLCBzaWduRGF0YS5pbWdfdHlwZSk7XHJcbiAgICAgICAgICAgICAgLy9jYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInN0cE5PXCIsIHNpZ25EYXRhLnN0cF9ubyk7XHJcbiAgICAgICAgICAgICAgY2FudmFzV3JhcC5hcHBlbmRDaGlsZChpbWdFbCk7XHJcbiAgICAgICAgICAgICAgbGlFbC5hcHBlbmRDaGlsZChjYW52YXNXcmFwKTtcclxuICAgICAgICAgICAgICBzaWduVHlwZUxpc3QuYXBwZW5kQ2hpbGQobGlFbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLsl5Drn6wg67Cc7IOdOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHNpZ25Qb3B1cFRhYkNsaWNrXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25Qb3B1cFRhYkNsaWNrXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqhe2MneyXheydmCDtg63snYQg7YG066at7ZaI7J2EIOuVjCDtg63snbTrj5nsnYQg7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IE9iamVjdFxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgc2lnblBvcHVwVGFiQ2xpY2soZXZ0KSB7XHJcbiAgICBjb25zdCB0YXJnZXRJZCA9IGV2dC50YXJnZXQuY2xvc2VzdChcImxpXCIpLmlkO1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIgLlNpZ24tUG9wdXAgPiAuU2lnbi1MYXllcnBvcCAuUG9wdXAtQm9keSAuUG9wdXAtVGFiLU1haW4gPiBsaVwiXHJcbiAgICAgIClcclxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5T2JqZWN0KGVsLm9uY2xpY2spKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5pZCA9PT0gdGFyZ2V0SWQpIHtcclxuICAgICAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHRhcmdldFRhYklkID0gdGFyZ2V0SWQucmVwbGFjZShcIkJ1dHRvblwiLCBcIlwiKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0VGFiSWQgPT09IFwicmVnaXN0ZXJlZFNpZ25UYWJcIiAmJlxyXG4gICAgICAgICAgICBfcmVhZGVyTW9kLnJlZ2lzdGVyZWRTaWduRGF0YXMgPT09IG51bGxcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvL19yZWFkZXJNb2QubG9hZFJlZ2lzdGVyZWRTaWduRGF0YSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8xMjEzIOuzkeyasey2lOqwgFxyXG4gICAgICAgICAgLy8gZG9jdW1lbnRcclxuICAgICAgICAgIC8vICAgLmdldEVsZW1lbnRCeUlkKFwiYWRkSW1hZ2VCdXR0b25cIilcclxuICAgICAgICAgIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcmVhZGVyTW9kLmFkZFVSTEltYWdlVG9TaWduQXJlYSgpKTtcclxuXHJcbiAgICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICBcIiAuU2lnbi1Qb3B1cCA+IC5TaWduLUxheWVycG9wIC5Qb3B1cC1Cb2R5IC5TaWduLVRhYi1Db250YWluZXIgPiAuVGFiLUNvbnRlbnRzXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoY29udGVudEVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGFiTmFtZSA9IGNvbnRlbnRFbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYi1uYW1lXCIpO1xyXG4gICAgICAgICAgICAgIGlmICh0YWJOYW1lID09PSB0YXJnZXRUYWJJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiVGVtcGxhdGUtSGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiVGVtcGxhdGUtSGlkZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50RWwuY2xhc3NMaXN0LnRvZ2dsZShcIlRlbXBsYXRlLUhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHNpZ25Qb3B1cEluaXRFdnRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblBvcHVwSW5pdEV2dFxyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrqoXtjJ3sl4XsnbQg7LKY7J2MIOucsOuVjCDtlYTsmpTtlZwg642w7J207YSw65Ok7J2EIOy0iOq4sO2ZlO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAgRXZlbnQgT2JqZWN0XHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgc2lnblBvcHVwSW5pdEV2dChldnQpIHtcclxuICAgIGNvbnN0IHBvcHVwRGl2ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIik7XHJcbiAgICBsZXQgY3VycmVudFRhYkVsID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuU2lnbi1UYWItQ29udGFpbmVyIC5Qb3B1cC1UYWItTWFpbiBsaS5vblwiXHJcbiAgICApO1xyXG5cclxuICAgIHN3aXRjaCAoY3VycmVudFRhYkVsLmlkKSB7XHJcbiAgICAgIGNhc2UgXCJzaWduRHJhd1RhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgbGV0IGNhbnZhc1BhcmVudCA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBcIi5TaWduLUFyZWEuRHJhdy1BcmVhXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBwYXJlbnRCQm94ID0gY2FudmFzUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChwYXJlbnRCQm94LndpZHRoIDwgNTAwKSB7XHJcbiAgICAgICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXMuc2V0RGltZW5zaW9ucyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwYXJlbnRCQm94LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHBhcmVudEJCb3guaGVpZ2h0LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhcy5zZXREaW1lbnNpb25zKHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMzUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX3JlYWRlck1vZC5zaWduQ2FudmFzLmNsZWFyKCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInNpZ25UZXh0VGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBsZXQgc2lnblR5cGVMaXN0ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIFV0aWxzLnJlbW92ZUFsbENoaWxkTm9kZShzaWduVHlwZUxpc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJzdGFtcFNpZ25UYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBpbWFnZUVsID1cclxuICAgICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wSW1hZ2VUYWdcIik7XHJcbiAgICAgICAgaW1hZ2VFbC5zcmMgPSBcIlwiO1xyXG5cclxuICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzdGFtcEZpbGVJbnB1dFwiKS5zZWxlY3QoKTtcclxuICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzdGFtcEZpbGVJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInJlZ2lzdGVyZWRTaWduQXJlYVwiOiB7XHJcbiAgICAgICAgLy8xMjE1IOy2lOqwgFxyXG4gICAgICAgIF9yZWFkZXJNb2QuY2xlYXJTaWduVHlwZUxpc3QoKTsgLy/snbTrr7jsp4BsaSDstIjquLDtmZRcclxuICAgICAgICBfcmVhZGVyTW9kLmxvYWRSZWdpc3RlcmVkU2lnbkRhdGEoKTsgLy/snbTrr7jsp4BsaSDsg53shLFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHNpZ25SZXZlcnRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblJldmVydFxyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrqoXrjbDsnbTthLDrpbwg7LSI6riw7ZmU7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgc2lnblJldmVydCgpIHtcclxuICAgIGNvbnN0IHBvcHVwRGl2ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIik7XHJcbiAgICBsZXQgY3VycmVudFRhYkVsID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuU2lnbi1UYWItQ29udGFpbmVyIC5Qb3B1cC1UYWItTWFpbiBsaS5vblwiXHJcbiAgICApO1xyXG5cclxuICAgIHN3aXRjaCAoY3VycmVudFRhYkVsLmlkKSB7XHJcbiAgICAgIGNhc2UgXCJzaWduRHJhd1RhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgX3JlYWRlck1vZC5zaWduQ2FudmFzLmNsZWFyKCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInNpZ25UZXh0VGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBsZXQgc2lnblR5cGVMaXN0ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIFV0aWxzLnJlbW92ZUFsbENoaWxkTm9kZShzaWduVHlwZUxpc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJzdGFtcFNpZ25UYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBpbWFnZUVsID1cclxuICAgICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wSW1hZ2VUYWdcIik7XHJcbiAgICAgICAgaW1hZ2VFbC5zcmMgPSBcIlwiO1xyXG4gICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wRmlsZUlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwicmVnaXN0ZXJlZFNpZ25UYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBzaWduVHlwZUxpc3RMaSA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgICBcIiAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bC5zaWduVHlwZUxpc3QgbGlcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGxpSWR4ID0gMDsgbGlJZHggPCBzaWduVHlwZUxpc3RMaS5sZW5ndGg7ICsrbGlJZHgpIHtcclxuICAgICAgICAgIGxldCBsaUVsID0gc2lnblR5cGVMaXN0TGkuaXRlbShsaUlkeCk7XHJcbiAgICAgICAgICBpZiAobGlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgICAgICBsaUVsLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjbG9zZVNpZ25Qb3B1cFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNjbG9zZVNpZ25Qb3B1cFxyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrqoXtjJ3sl4XsnYQg64ur64qU64ukLlxyXG4gICAqXHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjbG9zZVNpZ25Qb3B1cCgpIHtcclxuICAgIGxldCBwb3B1cERpdiA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25FbGVtZW50XCIpO1xyXG4gICAgaWYgKCFwb3B1cERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgIHBvcHVwRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNsb25lU2lnbkRhdGFcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjY2xvbmVTaWduRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7ISc66qFIO2VhOuTnCDsoJXrs7Trpbwg67O17IKs7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkRGF0YSAgIEZpZWxkIERhdGFcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNsb25lU2lnbkRhdGEoZmllbGREYXRhKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3JlYWRlck1vZC5wYWdlc0luZm8pO1xyXG5cclxuICAgIGtleXMuZm9yRWFjaCgocGFnZUtleSkgPT4ge1xyXG4gICAgICBjb25zdCBmaWVsZGtleXMgPSBPYmplY3Qua2V5cyhfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlS2V5XS5maWVsZHMpO1xyXG4gICAgICBmaWVsZGtleXMuZm9yRWFjaCgoZmllbGRLZXkpID0+IHtcclxuICAgICAgICBsZXQgZmllbGQgPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlS2V5XS5maWVsZHNbZmllbGRLZXldO1xyXG4gICAgICAgIGlmIChmaWVsZEtleSA9PT0gZmllbGREYXRhLm1faWQgfHwgZmllbGQubV90eXBlICE9PSBcIlNpZ25GaWVsZFwiKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBmaWVsZERhdGEubV92YWx1ZTtcclxuXHJcbiAgICAgICAgZmllbGQuc2lnblR5cGUgPSBmaWVsZERhdGEuc2lnblR5cGU7XHJcbiAgICAgICAgZmllbGQubV9vcmdTaWduV2lkdGggPSBmaWVsZERhdGEubV9vcmdTaWduV2lkdGg7XHJcbiAgICAgICAgZmllbGQubV9vcmdTaWduSGVpZ2h0ID0gZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodDtcclxuICAgICAgICBmaWVsZC5tX3N0cE5vID0gZmllbGREYXRhLm1fc3RwTm87XHJcbiAgICAgICAgaWYgKGZpZWxkLnNpZ25UeXBlID09PSBcInBhdGhcIiB8fCBmaWVsZC5zaWduVHlwZSA9PT0gXCJ0ZXh0UGF0aFwiKSB7XHJcbiAgICAgICAgICBmaWVsZC5tX29yZ1NpZ25MZWZ0ID0gZmllbGREYXRhLm1fb3JnU2lnbkxlZnQ7XHJcbiAgICAgICAgICBmaWVsZC5tX29yZ1NpZ25Ub3AgPSBmaWVsZERhdGEubV9vcmdTaWduVG9wO1xyXG4gICAgICAgICAgZmllbGQubV9zdmdEYXRhID0gZmllbGREYXRhLm1fc3ZnRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gc2F2ZVNpZ25Qb3B1cERhdGFcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2F2ZVNpZ25Qb3B1cERhdGFcclxuICAgKiBAZGVzY3JpcHRpb24gIOyEnOuqhe2MneyXheyXkCDrlqDsnojripQg642w7J207YSw66W8IOyggOyepe2VmOqzoCDri6vripTri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGFzeW5jIHNhdmVTaWduUG9wdXBEYXRhKCkge1xyXG4gICAgY29uc3QgcG9wdXBEaXYgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzaWduRWxlbWVudFwiKTtcclxuICAgIGNvbnN0IGxheWVyUG9wID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcIi5TaWduLUxheWVycG9wXCIpO1xyXG4gICAgY29uc3QgZmllbGRJZCA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcImZpZWxkSWRcIik7XHJcbiAgICBjb25zdCBwYWdlTm8gPSBsYXllclBvcC5nZXRBdHRyaWJ1dGUoXCJwYWdlTm9cIik7XHJcbiAgICBjb25zdCBzaWduV2lkdGggPSBsYXllclBvcC5nZXRBdHRyaWJ1dGUoXCJzaWduV2lkdGhcIik7XHJcbiAgICBjb25zdCBzaWduSGVpZ2h0ID0gbGF5ZXJQb3AuZ2V0QXR0cmlidXRlKFwic2lnbkhlaWdodFwiKTtcclxuXHJcbiAgICBsZXQgZmllbGREYXRhID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0uZ2V0RmllbGQoZmllbGRJZCk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUYWJFbCA9IHBvcHVwRGl2LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLlNpZ24tVGFiLUNvbnRhaW5lciAuUG9wdXAtVGFiLU1haW4gbGkub25cIlxyXG4gICAgKTtcclxuXHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRUYWJFbC5pZCkge1xyXG4gICAgICBjYXNlIFwic2lnbkRyYXdUYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX3N2Z0RhdGEgPSBidG9hKHVuZXNjYXBlKF9yZWFkZXJNb2Quc2lnbkNhbnZhcy50b1NWRygpKSk7XHJcbiAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBKU09OLnN0cmluZ2lmeShfcmVhZGVyTW9kLnNpZ25DYW52YXMpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwicGF0aFwiO1xyXG4gICAgICAgIGxldCBvYmplY3RzQkJveCA9IFV0aWxzLm1lcmdlT2JqZWN0c1JlY3QoX3JlYWRlck1vZC5zaWduQ2FudmFzKTtcclxuICAgICAgICBpZiAob2JqZWN0c0JCb3ggIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IE1hdGguYWJzKFxyXG4gICAgICAgICAgICAgIG9iamVjdHNCQm94LnJpZ2h0IC0gb2JqZWN0c0JCb3gubGVmdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0ID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgb2JqZWN0c0JCb3guYm90dG9tIC0gb2JqZWN0c0JCb3gudG9wXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25MZWZ0ID0gb2JqZWN0c0JCb3gubGVmdDtcclxuICAgICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnblRvcCA9IG9iamVjdHNCQm94LnRvcDtcclxuICAgICAgICAgICAgZmllbGREYXRhLm1fc3RwTm8gPSBcIlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fc3ZnRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICBmaWVsZERhdGEuc2lnblR5cGUgPSBcIlwiO1xyXG4gICAgICAgICAgYWxlcnQoYOyeheugpeuQnCBcIuyLuOyduFwi7J20IOyXhuyKteuLiOuLpC5gKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLCBmaWVsZERhdGEsIG51bGwsIHNpZ25XaWR0aCwgc2lnbkhlaWdodCwgb2JqZWN0cyxcclxuICAgICAgICAvLyAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoLCBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0KTtcclxuICAgICAgICAvKiAxMTA4IGxidyA6IOydvOq0hOyEnOuqhSDquLDriqUg7KCc6rGwICovXHJcbiAgICAgICAgLy9fcmVhZGVyTW9kLmNsb25lU2lnbkRhdGEoZmllbGREYXRhKTtcclxuICAgICAgICBfcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInNpZ25UZXh0VGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBmaWVsZERhdGEubV9zdmdEYXRhID0gYnRvYSh1bmVzY2FwZShfcmVhZGVyTW9kLnRleHRTaWduQ2FudmFzLnRvU1ZHKCkpKTtcclxuICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IEpTT04uc3RyaW5naWZ5KF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwidGV4dFBhdGhcIjtcclxuICAgICAgICBsZXQgc2VsZWN0VGV4dFNpZ25FbCA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBcIiAuc2lnblR4dFdyYXAgPiB1bC5zaWduVHlwZUxpc3QgPiBsaS5vblwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgY2FudmFzV3JhcCA9IHNlbGVjdFRleHRTaWduRWwucXVlcnlTZWxlY3RvcihcIi5jYW52YXNfd3JhcFwiKTtcclxuXHJcbiAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoID0gY2FudmFzV3JhcC5nZXRBdHRyaWJ1dGUoXCJwYXRoV2lkdGhcIik7XHJcbiAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCA9IGNhbnZhc1dyYXAuZ2V0QXR0cmlidXRlKFwicGF0aEhlaWdodFwiKTtcclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduTGVmdCA9IGNhbnZhc1dyYXAuZ2V0QXR0cmlidXRlKFwicGF0aExlZnRcIik7XHJcbiAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnblRvcCA9IGNhbnZhc1dyYXAuZ2V0QXR0cmlidXRlKFwicGF0aFRvcFwiKTtcclxuICAgICAgICBmaWVsZERhdGEubV9zdHBObyA9IFwiXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmllbGREYXRhLm1fdmFsdWUpO1xyXG4gICAgICAgIC8vIFV0aWxzLmFkZE9iamVjdHNUb0NhbnZhcyhfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSwgZmllbGREYXRhLCBudWxsLCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIG9iamVjdHMsXHJcbiAgICAgICAgLy8gICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCwgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCk7XHJcbiAgICAgICAgLyogMTEwOCBsYncgOiDsnbzqtITshJzrqoUg6riw64qlIOygnOqxsCAqL1xyXG4gICAgICAgIC8vIF9yZWFkZXJNb2QuY2xvbmVTaWduRGF0YShmaWVsZERhdGEpO1xyXG4gICAgICAgIF9yZWFkZXJNb2QucGFnZVJlZnJlc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBcInN0YW1wU2lnblRhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgbGV0IGltYWdlRWwgPVxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBJbWFnZVRhZ1wiKTtcclxuICAgICAgICBpZiAoaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gXCJcIikge1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgYWxlcnQoYOyEoO2DneuQnCBcIuydtOuvuOyngFwi6rCAIOyXhuyKteuLiOuLpC5gKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBpbWFnZUVsLnNyYztcclxuICAgICAgICBsZXQgaW1hZ2VPYmogPSBuZXcgZmFicmljLkltYWdlKGltYWdlRWwpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGggPSBpbWFnZU9iai53aWR0aDtcclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0ID0gaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX3N0cE5vID0gXCJcIjtcclxuICAgICAgICAvLyBVdGlscy5hZGRPYmplY3RzVG9DYW52YXMoX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsIGZpZWxkRGF0YSwgbnVsbCwgc2lnbldpZHRoLCBzaWduSGVpZ2h0LCBbaW1hZ2VPYmpdLFxyXG4gICAgICAgIC8vICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGgsIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQpO1xyXG4gICAgICAgIC8qIDExMDggbGJ3IDog7J286rSE7ISc66qFIOq4sOuKpSDsoJzqsbAgKi9cclxuICAgICAgICAvLyBfcmVhZGVyTW9kLmNsb25lU2lnbkRhdGEoZmllbGREYXRhKTtcclxuICAgICAgICBfcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInJlZ2lzdGVyZWRTaWduVGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRhTm9kZSA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBcIiAuU2lnbi1MYXllcnBvcCBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuVGFiLUNvbnRlbnRzIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5TaWduLUFyZWEgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZ2lzdGVyZWRTaWduV3JhcCBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5zaWduVHlwZUxpc3QgbGkub25cIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRGF0YU5vZGUgPT09IG51bGwgfHwgc2VsZWN0ZWREYXRhTm9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICBhbGVydChg7ISg7YOd65CcIFwi65Ox66Gd65CcIOydtOuvuOyngFwi6rCAIOyXhuyKteuLiOuLpC5gKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNhbnZhc1dyYXBOb2RlID0gc2VsZWN0ZWREYXRhTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc193cmFwXCIpO1xyXG4gICAgICAgIGxldCByZWdpc3RlcmVkSWR4ID0gY2FudmFzV3JhcE5vZGUuZ2V0QXR0cmlidXRlKFwicmVnaXN0ZXJlZElkeFwiKTtcclxuICAgICAgICBsZXQgc2VsZXRlZERhdGEgPSBfcmVhZGVyTW9kLnJlZ2lzdGVyZWRTaWduRGF0YXNbcmVnaXN0ZXJlZElkeF07XHJcbiAgICAgICAgLy9maWVsZERhdGEubV9zdHBObyA9IGNhbnZhc1dyYXBOb2RlLmdldEF0dHJpYnV0ZShcInN0cE5PXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2VsZXRlZERhdGEuaW1nX3R5cGUpO1xyXG4gICAgICAgIGlmIChzZWxldGVkRGF0YS5pbWdfdHlwZSA9PT0gXCJJTUdcIikge1xyXG4gICAgICAgICAgbGV0IGltZ05vZGUgPSBjYW52YXNXcmFwTm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBzZWxldGVkRGF0YS5pbWdfc3JjO1xyXG4gICAgICAgICAgbGV0IGltYWdlT2JqID0gbmV3IGZhYnJpYy5JbWFnZShpbWdOb2RlKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IGltYWdlT2JqLndpZHRoO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCA9IGltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICAgIC8vIFV0aWxzLmFkZE9iamVjdHNUb0NhbnZhcyhfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSwgZmllbGREYXRhLCBudWxsLCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIFtpbWFnZU9ial0sXHJcbiAgICAgICAgICAvLyAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoLCBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGV0ZWREYXRhLmltZ190eXBlID09PSBcIlNWR1wiKSB7XHJcbiAgICAgICAgICBsZXQgc3RhdGljQ2FudmFzID0gVXRpbHMuYWRkU2lnblN2Z1RvQ2FudmFzKFxyXG4gICAgICAgICAgICBmaWVsZERhdGEsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIHNpZ25XaWR0aCxcclxuICAgICAgICAgICAgc2lnbkhlaWdodCxcclxuICAgICAgICAgICAgc2VsZXRlZERhdGEuaW1nX3NyY1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX3N2Z0RhdGEgPSBidG9hKHVuZXNjYXBlKHN0YXRpY0NhbnZhcy50b1NWRygpKSk7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRpY0NhbnZhcyk7XHJcbiAgICAgICAgICBmaWVsZERhdGEuc2lnblR5cGUgPSBcInBhdGhcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IHNlbGV0ZWREYXRhLm9yZ1NpZ25XaWR0aDtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQgPSBzZWxldGVkRGF0YS5vcmdTaWduSGVpZ2h0O1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkxlZnQgPSBzZWxldGVkRGF0YS5vcmdTaWduTGVmdDtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25Ub3AgPSBzZWxldGVkRGF0YS5vcmdTaWduVG9wO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxldGVkRGF0YS5pbWdfdHlwZSA9PT0gXCJVUkxcIikge1xyXG4gICAgICAgICAgbGV0IGltZ05vZGUgPSBjYW52YXNXcmFwTm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBzZWxldGVkRGF0YS5pbWdfc3JjO1xyXG5cclxuICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAvLyAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBjaGVja0ltYWdlVmFsaWRpdHkoc2VsZXRlZERhdGEuaW1nX3NyYyk7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwi7J2066+47KeAIFVSTOydtCDsnKDtmqjtlanri4jri6QuXCIpO1xyXG4gICAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vICAgICBhbGVydChcIuyEoO2Dne2VmOyLoCDrk7HroZ3rkJwg7J2066+47KeA7J2YIFVSTOyXkCDsoJHqt7ztlaAg7IiYIOyXhuyKteuLiOuLpC5cXG4gKENPUlPsoJXssYUg7JyE67CwIO2YueydgCDsnpjrqrvrkJwgVVJMKVwiKTtcclxuICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAvL2NvbnZlcnRJbWFnZVRvQmFzZTY0IO2VqOyImCDtmLjstpztlZjsl6wg7J2066+47KeA66W8IGJhc2U2NOuhnCDrs4DtmZjtlZjqs6Ag6rKw6rO866W8IOyymOumrFxyXG4gICAgICAgICAgLy8gYXdhaXQgX3JlYWRlck1vZC5jb252ZXJ0SW1hZ2VUb0Jhc2U2NChzZWxldGVkRGF0YS5pbWdfc3JjKVxyXG4gICAgICAgICAgLy8gICAudGhlbihmdW5jdGlvbihiYXNlNjRTdHJpbmcpIHtcclxuICAgICAgICAgIC8vICAgICAgIGZpZWxkRGF0YS5tX3ZhbHVlID0gYmFzZTY0U3RyaW5nO1xyXG4gICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgLy8gICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgIC8vICAgICAgIGFsZXJ0KFwi7ISg7YOd7ZWY7IugIOuTseuhneuQnCDsnbTrr7jsp4DsnZggVVJM7JeQIOygkeq3vO2VoCDsiJgg7JeG7Iq164uI64ukLlxcbiAoQ09SU+ygleyxhSDsnITrsLAg7Zi57J2AIOyemOuqu+uQnCBVUkwpXCIpXHJcbiAgICAgICAgICAvLyAgIH0pO1xyXG5cclxuICAgICAgICAgIGxldCBpbWFnZU9iaiA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1nTm9kZSk7XHJcbiAgICAgICAgICBmaWVsZERhdGEuc2lnblR5cGUgPSBcImltYWdlXCI7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGggPSBpbWFnZU9iai53aWR0aDtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQgPSBpbWFnZU9iai5oZWlnaHQ7XHJcbiAgICAgICAgICAvLyBVdGlscy5hZGRPYmplY3RzVG9DYW52YXMoX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsIGZpZWxkRGF0YSwgbnVsbCwgc2lnbldpZHRoLCBzaWduSGVpZ2h0LCBbaW1hZ2VPYmpdLFxyXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGgsIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQpO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWxldGVkRGF0YS5pbWdfdHlwZSA9PT0gXCJCQVNFNjRcIikge1xyXG4gICAgICAgICAgbGV0IGltZ05vZGUgPSBjYW52YXNXcmFwTm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBzZWxldGVkRGF0YS5pbWdfc3JjO1xyXG4gICAgICAgICAgbGV0IGltYWdlT2JqID0gbmV3IGZhYnJpYy5JbWFnZShpbWdOb2RlKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IGltYWdlT2JqLndpZHRoO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCA9IGltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICdb65Ox66Gd65CcIOyEnOuqhV0gSlNPTiDtmJXsi50g7KSRIGltZ190eXBl7J20IFwiJyArXHJcbiAgICAgICAgICAgICAgc2VsZXRlZERhdGEuaW1nX3R5cGUgK1xyXG4gICAgICAgICAgICAgICdcIuydgCDsspjrpqwg7ZWg7IiYIOyXhuyKteuLiOuLpC4nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiAxMTA4IGxidyA6IOydvOq0hOyEnOuqhSDquLDriqUg7KCc6rGwICovXHJcbiAgICAgICAgLy8gX3JlYWRlck1vZC5jbG9uZVNpZ25EYXRhKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgX3JlYWRlck1vZC5wYWdlUmVmcmVzaCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb3B1cERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgIHBvcHVwRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGV4cG9ydEZpZWxkRGF0YVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNleHBvcnRGaWVsZERhdGFcclxuICAgKiBAZGVzY3JpcHRpb24gIEZpZWxkIOygleuztCDsoITssrTrpbwg67CY7ZmY7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7U3RyaW5nfSBGaWVsZCDsoJXrs7QgSnNvbiBTdHJpbmdcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGV4cG9ydEZpZWxkRGF0YSgpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gc2lnblRleHRDcmVhdGVLZXlVcEV2ZW50XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25UZXh0Q3JlYXRlS2V5VXBFdmVudFxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIOyEnOuqhe2MneyXheydmCDthY3siqTtirgg7ISc66qFIO2DreydmCBpbnB1dOydmCBrZXkgdXAg7J2067Kk7Yq466GcIOyXlO2EsO2CpCDsnoXroKXsi5wg7J6F66ClIOuyhO2KvOydtCDriITrpbjqsoPqs7wg64+Z7J287ZWcIOuPmeyekeydhCDtlZzri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzaWduVGV4dENyZWF0ZUtleVVwRXZlbnQoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIF9yZWFkZXJNb2Quc2lnblRleHRDcmVhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBzaWduVGV4dENyZWF0ZVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduVGV4dENyZWF0ZVxyXG4gICAqIEBkZXNjcmlwdGlvbiDshJzrsoTroZzrtoDthLAg7YWN7Iqk7Yq4IOyEnOuqheuNsOydtO2EsOulvCDrsJvripTri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzaWduVGV4dENyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHRleHRWYWwgPVxyXG4gICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzaWduVGV4dElucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IHNpZ25UeXBlTGlzdCA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAuc2lnblR4dFdyYXAgdWwuc2lnblR5cGVMaXN0XCJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2FudmFzV2lkdGggPSAxNDU7XHJcbiAgICBjb25zdCBjYW52YXNIZWlnaHQgPSA3NTtcclxuXHJcbiAgICBVdGlscy5yZW1vdmVBbGxDaGlsZE5vZGUoc2lnblR5cGVMaXN0KTtcclxuICAgIHZhciBjb250ZW50Q2hpcGhlciA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGNzcmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIG1ldGFbbmFtZT1fY3NyZl1cIikuY29udGVudDtcclxuICAgIGZvciAodmFyIHNpZ25JZHggPSAwOyBzaWduSWR4IDwgOTsgc2lnbklkeCsrKSB7XHJcbiAgICAgIHZhciBib2R5SnNvblN0ciA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzaWduYXR1cmVUZXh0OiB0ZXh0VmFsLFxyXG4gICAgICAgIGZvbnRJbmRleDogc2lnbklkeCxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh3aW5kb3cuaXNQYXJhbWV0ZXJFbmN5cHQgPT09IHRydWUpIHtcclxuICAgICAgICBjb250ZW50Q2hpcGhlciA9IHRydWU7XHJcbiAgICAgICAgYm9keUpzb25TdHIgPSBDaXBoZXJVdGlsLmVuY3J5cHQoYm9keUpzb25TdHIsIFwiQUVTXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmZXRjaChcclxuICAgICAgICBcIi91aS9icC9lZG9jL2Vmb3JtL2NyZWF0ZVRleHRTaWduYXR1cmVzQnlNYWlsLmRvXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJ4LWNzcmYtdG9rZW5cIjogY3NyZixcclxuICAgICAgICAgICAgXCJ4LXJlcXVlc3RlZC13aXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcclxuICAgICAgICAgICAgXCJjb250ZW50LWNoaXBoZXJcIjogY29udGVudENoaXBoZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGJvZHk6IGJvZHlKc29uU3RyLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmZXRjaChcImNyZWF0ZVRleHRTaWduYXR1cmVzLmRvXCJcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0X3N0YXR1cyAhPT0gXCJTXCIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgbGV0IGNhbnZhc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5jbGFzc05hbWUgPSBcImNhbnZhc193cmFwXCI7XHJcbiAgICAgICAgICBsZXQgY2FudmFzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgbGV0IHNpZ25QYXRoID0gbmV3IGZhYnJpYy5QYXRoKGRhdGEuc2lnbmF0dXJlX2RhdGEsIHtcclxuICAgICAgICAgICAgZmlsbDogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxldCBzdGF0aWNDYW52cyA9IFV0aWxzLmFkZE9iamVjdHNUb0NhbnZhcyhcclxuICAgICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIGNhbnZhc0VsLFxyXG4gICAgICAgICAgICBjYW52YXNXaWR0aCAtIDEwLFxyXG4gICAgICAgICAgICBjYW52YXNIZWlnaHQgLSAxMCxcclxuICAgICAgICAgICAgW3NpZ25QYXRoXSxcclxuICAgICAgICAgICAgc2lnblBhdGgud2lkdGgsXHJcbiAgICAgICAgICAgIHNpZ25QYXRoLmhlaWdodFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBjYW52YXNFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBsZXQgbGlMaXN0ID0gc2lnblR5cGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGlJZHggPSAwOyBsaUlkeCA8IGxpTGlzdC5sZW5ndGg7ICsrbGlJZHgpIHtcclxuICAgICAgICAgICAgICBsZXQgbGlFbCA9IGxpTGlzdC5pdGVtKGxpSWR4KTtcclxuICAgICAgICAgICAgICBpZiAobGlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGlFbC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRMaSA9IGV2dC50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xyXG4gICAgICAgICAgICB0YXJnZXRMaS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICAgIF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgVXRpbHMuY2xvbmVGYWJyaWNDYW52YXMoXHJcbiAgICAgICAgICAgICAgX3JlYWRlck1vZC50ZXh0U2lnbkNhbnZhcyxcclxuICAgICAgICAgICAgICBzdGF0aWNDYW52cy50b09iamVjdCgpLm9iamVjdHNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5zZXRBdHRyaWJ1dGUoXCJmb250TmFtZVwiLCBkYXRhLmZvbnRfbmFtZSk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInBhdGhXaWR0aFwiLCBzaWduUGF0aC53aWR0aCk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInBhdGhIZWlnaHRcIiwgc2lnblBhdGguaGVpZ2h0KTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicGF0aExlZnRcIiwgc2lnblBhdGgubGVmdCk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInBhdGhUb3BcIiwgc2lnblBhdGgudG9wKTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuYXBwZW5kQ2hpbGQoY2FudmFzRWwpO1xyXG4gICAgICAgICAgbGlFbC5hcHBlbmRDaGlsZChjYW52YXNXcmFwKTtcclxuICAgICAgICAgIHNpZ25UeXBlTGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBzdGFtcEZpbGVTZWxlY3RcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc3RhbXBGaWxlU2VsZWN0XHJcbiAgICogQGRlc2NyaXB0aW9uICDsnbTrr7jsp4Ag7J247J6lIOyEoO2Dne2VmOq4sCDrsoTtirzsnYQg64iM66CA7J2EIOuVjOydmCDsspjrpqzrpbwg7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IE9iamVjdFxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgc3RhbXBGaWxlU2VsZWN0KGV2dCkge1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBGaWxlSW5wdXRcIikuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBzdGFtcEZpbGVTZWxlY3RcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc3RhbXBGaWxlU2VsZWN0XHJcbiAgICogQGRlc2NyaXB0aW9uICDsnbTrr7jsp4Ag7J247J6lIO2MjOydvOydhCDshKDtg53tlojsnYQg65WMIOyymOumrOulvCDtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgIEV2ZW50IE9iamVjdFxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgc3RhbXBJbWFnZVNlbGVjdGVkKGV2dCkge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSBldnQudGFyZ2V0LmZpbGVzO1xyXG4gICAgY29uc3QgZmlsZSA9IGZpbGVMaXN0WzBdO1xyXG4gICAgaWYgKGZpbGUgPT09IHVuZGVmaW5lZCB8fCBmaWxlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHtcclxuICAgICAgaWYgKF9yZWFkZXJNb2QuY3VzdG9tQWxlcnRGdW5jICE9PSBudWxsKSB7XHJcbiAgICAgICAgX3JlYWRlck1vZC5jdXN0b21BbGVydEZ1bmMoXCLsnbTrr7jsp4Drp4wg7LKo67aAIOqwgOuKpe2VqeuLiOuLpC5cIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICBsZXQgaW1hZ2VFbCA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wSW1hZ2VUYWdcIik7XHJcbiAgICAgIGltYWdlRWwuc3JjID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2lzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHlcclxuICAgKiBAZGVzY3JpcHRpb24g7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aA66W8IOuwmO2ZmO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IO2VhOyImCDtlYTrk5zqsIAg67mE7Ja07J6I64qU7KeAIOyXrOu2gFxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkoKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3JlYWRlck1vZC5wYWdlc0luZm8pO1xyXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5cy5sZW5ndGg7ICsraWR4KSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VEYXRhID0gX3JlYWRlck1vZC5wYWdlc0luZm9ba2V5c1tpZHhdXTtcclxuXHJcbiAgICAgIGxldCBwYWdlTnVtYmVyID0gcGFyc2VJbnQoa2V5c1tpZHhdKSArIDE7XHJcbiAgICAgIGxldCBwZ05vZGUgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiIFtkYXRhLXBhZ2UtbnVtYmVyPSdcIiArIHBhZ2VOdW1iZXIgKyBcIiddXCJcclxuICAgICAgKTtcclxuICAgICAgbGV0IGlzTG9hZGVkID0gcGdOb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtbG9hZGVkXCIpO1xyXG4gICAgICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhwYWdlRGF0YS5maWVsZHMpO1xyXG4gICAgICBpZiAoZmllbGRLZXlzLmxlbmd0aCA+IDAgJiYgKGlzTG9hZGVkID09PSBudWxsIHx8IGlzTG9hZGVkID09PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgX3JlYWRlck1vZC5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFnZURhdGEuaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVJlYWRlck1vZGUobW9kZSkge1xyXG4gICAgaWYgKF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9PT0gbW9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck1vZGUgPSBtb2RlO1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfRklFTERfTEFZRVJfQ0xBU1MpXHJcbiAgICAgIC5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICAgIGlmIChfcmVhZGVyTW9kLnJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfSU5QVVRfTU9ERSkge1xyXG4gICAgICAgICAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpKSB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFsYXllci5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKSkge1xyXG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1MpXHJcbiAgICAgIC5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9PT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9NRU1PX01BS0VfTU9ERSB8fFxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJNb2RlID09PSBDT05TVEFOVFMuUkVBREVSX0ZJRUxEX01FTU9fTU9ERVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGxheWVyLmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpKSB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC50b2dnbGUoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCFsYXllci5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKSkge1xyXG4gICAgICAgICAgICBsYXllci5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9yZWFkZXJNb2QudGVtcGxhdGVNb3VzZVVwRXZlbnQpO1xyXG4gICAgICAgIGlmIChfcmVhZGVyTW9kLnJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfTUVNT19NQUtFX01PREUpIHtcclxuICAgICAgICAgIGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9yZWFkZXJNb2QudGVtcGxhdGVNb3VzZVVwRXZlbnQpO1xyXG4gICAgICAgICAgbGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxheWVyLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB0ZW1wbGF0ZU1vdXNlVXBFdmVudChldmVudCkge1xyXG4gICAgY29uc3QgcGFnZU5vID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucGFnZVwiKS5kYXRhc2V0LnBhZ2VOdW1iZXI7XHJcblxyXG4gICAgY29uc3Qgdmlld3BvcnQgPSBfcmVhZGVyTW9kLnBkZlZpZXdlci5fcGFnZXNbTnVtYmVyKHBhZ2VObykgLSAxXTtcclxuICAgIGxldCBtZW1vID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbWVtby5tX2lkID0gVXRpbHMuZ2VuZXJhdGVfdXVpZHY0KCk7XHJcbiAgICBsZXQgcGFnZVBvaW50ID0gdmlld3BvcnQuZ2V0UGFnZVBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xyXG4gICAgbWVtby5tX3BkZlggPSBwYWdlUG9pbnRbMF07XHJcbiAgICBtZW1vLm1fcGRmWSA9IHBhZ2VQb2ludFsxXTtcclxuICAgIGxldCBkZWZhdWx0V2lkdGggPSAxMDA7XHJcbiAgICBsZXQgZGVmYXVsdEhlaWdodCA9IDEwMDtcclxuICAgIGxldCBwYWdlUG9pbnQyID0gdmlld3BvcnQuZ2V0UGFnZVBvaW50KFxyXG4gICAgICBldmVudC5vZmZzZXRYICsgZGVmYXVsdFdpZHRoLFxyXG4gICAgICBldmVudC5vZmZzZXRZICsgZGVmYXVsdEhlaWdodFxyXG4gICAgKTtcclxuICAgIG1lbW8ubV9wZGZYMiA9IHBhZ2VQb2ludDJbMF07XHJcbiAgICBtZW1vLm1fcGRmWTIgPSBwYWdlUG9pbnQyWzFdO1xyXG4gICAgbWVtby5tX3dpZHRoID0gZGVmYXVsdFdpZHRoO1xyXG4gICAgbWVtby5tX2hlaWdodCA9IGRlZmF1bHRIZWlnaHQ7XHJcbiAgICBtZW1vLm1fdHlwZSA9IFwiTWVtb0ZpZWxkXCI7XHJcbiAgICBtZW1vLm1fZm9udFNpemUgPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlTm8gLSAxXS5tZW1vUHJvcGV0aWVzLmZvbnRTaXplO1xyXG4gICAgbWVtby5tX2ZvbnROYW1lID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0ubWVtb1Byb3BldGllcy5mb250RmFtaWx5O1xyXG4gICAgbWVtby5tX2ZvbnRDb2xvciA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLm1lbW9Qcm9wZXRpZXMuZm9udENvbG9yO1xyXG4gICAgbWVtby5tX2JhY2tDb2xvciA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLm1lbW9Qcm9wZXRpZXMuYmFja0NvbG9yO1xyXG4gICAgbWVtby5tX2tpbmQgPSBcInRleHRcIjtcclxuICAgIG1lbW8ubV9pc1JlbW92ZWQgPSBmYWxzZTtcclxuICAgIG1lbW8ubV9maWVsZElkID0gbWVtby5tX2lkO1xyXG4gICAgbWVtby5tX3JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICBtZW1vLm1fdGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBtZW1vLm1fdGV4dFZldGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcbiAgICBtZW1vLm1fYm9sZCA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLm1lbW9Qcm9wZXRpZXMuaXNCb2xkO1xyXG4gICAgbWVtby5tX3ZhbHVlID0gXCJcIjtcclxuICAgIG1lbW8ubV9wYWdlTm8gPSBwYWdlTm87XHJcbiAgICBfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlTm8gLSAxXS5wdXNoTWVtbyhtZW1vLm1faWQsIG1lbW8pO1xyXG4gICAgaWYgKFxyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zID09PVxyXG4gICAgICAgIHVuZGVmaW5lZCB8fFxyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zID09PSBudWxsXHJcbiAgICApIHtcclxuICAgICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlc1twYWdlTm8gLSAxXS5tZW1vcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlc1twYWdlTm8gLSAxXS5tZW1vcy5wdXNoKG1lbW8pO1xyXG4gICAgX3JlYWRlck1vZC5wYWdlUmVmcmVzaCgpO1xyXG5cclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b25cIilcclxuICAgICAgLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIikpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyKGV2dCkge1xyXG4gICAgaWYgKCFldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lbW9JZCA9IGV2dC50YXJnZXQuZGF0YXNldC5tZW1vSWQ7XHJcbiAgICBjb25zdCBwYWdlTm8gPSBldnQudGFyZ2V0LmRhdGFzZXQubWVtb1BhZ2VObztcclxuICAgIGV2dC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgIF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLnJlbW92ZU1lbW8obWVtb0lkKTtcclxuICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MgPVxyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zLmZpbHRlcihcclxuICAgICAgICAobWVtbykgPT4gbWVtby5tX2lkICE9PSBtZW1vSWRcclxuICAgICAgKTtcclxuXHJcbiAgICBfcmVhZGVyTW9kLmhpZGVNZW1vUHJvcGVydGllcygpO1xyXG4gIH1cclxuXHJcbiAgbWVtb1Byb3BlcnR5QnRuQ2xpY2tFdmVudExpc3RlbmVyKGV2dCkge1xyXG4gICAgaWYgKCFldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuTUVNT19QUk9QRVJUWV9CVVRUT05fQ0xBU1MpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZW1vSWQgPSBldnQudGFyZ2V0LmRhdGFzZXQubWVtb0lkO1xyXG4gICAgY29uc3QgcGFnZU5vID0gZXZ0LnRhcmdldC5kYXRhc2V0Lm1lbW9QYWdlTm87XHJcbiAgICBsZXQgY3VyTWVtbyA9IG51bGw7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgbWVtb0lkeCA9IDA7XHJcbiAgICAgIG1lbW9JZHggPFxyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zLmxlbmd0aDtcclxuICAgICAgKyttZW1vSWR4XHJcbiAgICApIHtcclxuICAgICAgbGV0IG1lbW8gPVxyXG4gICAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3NbbWVtb0lkeF07XHJcbiAgICAgIGlmIChtZW1vLm1faWQgPT09IG1lbW9JZCkge1xyXG4gICAgICAgIGN1ck1lbW8gPSBVdGlscy5jbG9uZU9iamVjdChtZW1vKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9yZWFkZXJNb2Quc2hvd01lbW9Qcm9wZXJ0aWVzKGV2dCwgY3VyTWVtbywgbnVsbCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBoaWRlTWVtb1Byb3BlcnRpZXMoKSB7XHJcbiAgICBsZXQgb2xkQXR0ciA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI1wiICsgQ09OU1RBTlRTLk1BSU5fR1JPVVBfTkFNRSArIFwiIC5FZGl0b3ItQXR0cmlidXRlXCJcclxuICAgICk7XHJcbiAgICBpZiAob2xkQXR0ciAhPT0gbnVsbCAmJiBvbGRBdHRyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2xkQXR0ci5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5TWVtb1Byb3BlcnRpZXMoXHJcbiAgICBtZW1vSWQsXHJcbiAgICBwYWdlTm8sXHJcbiAgICBmb250RmFtaWx5LFxyXG4gICAgZm9udFNpemUsXHJcbiAgICBpc0JvbGQsXHJcbiAgICBmb250Q29sb3IsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBpc0FsbFxyXG4gICkge1xyXG4gICAgLy8gY29uc29sZS5sb2cobWVtb0lkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhZ2VObyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb250RmFtaWx5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvbnRTaXplKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlzQm9sZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb250Q29sb3IpO1xyXG4gICAgLy8gY29uc29sZS5sb2coYmFja2dyb3VuZENvbG9yKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlzQWxsKTtcclxuXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgbWVtb0lkeCA9IDA7XHJcbiAgICAgIG1lbW9JZHggPFxyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zLmxlbmd0aDtcclxuICAgICAgKyttZW1vSWR4XHJcbiAgICApIHtcclxuICAgICAgbGV0IG1lbW8gPVxyXG4gICAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3NbbWVtb0lkeF07XHJcbiAgICAgIGlmIChpc0FsbCkge1xyXG4gICAgICAgIG1lbW8ubV9mb250TmFtZSA9IGZvbnRGYW1pbHk7XHJcbiAgICAgICAgbWVtby5tX2ZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgbWVtby5tX2ZvbnRDb2xvciA9IGZvbnRDb2xvcjtcclxuICAgICAgICBtZW1vLm1fYm9sZCA9IGlzQm9sZDtcclxuICAgICAgICBtZW1vLm1fYmFja0NvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChtZW1vLm1faWQgPT09IG1lbW9JZCkge1xyXG4gICAgICAgICAgbWVtby5tX2ZvbnROYW1lID0gZm9udEZhbWlseTtcclxuICAgICAgICAgIG1lbW8ubV9mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgICAgbWVtby5tX2ZvbnRDb2xvciA9IGZvbnRDb2xvcjtcclxuICAgICAgICAgIG1lbW8ubV9ib2xkID0gaXNCb2xkO1xyXG4gICAgICAgICAgbWVtby5tX2JhY2tDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlYWRlck1vZC5wYWdlUmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01lbW9Qcm9wZXJ0aWVzKGV2dCwgbWVtb0RhdGEsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgbGV0IG9sZEF0dHIgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiNcIiArIENPTlNUQU5UUy5NQUlOX0dST1VQX05BTUUgKyBcIiAuRWRpdG9yLUF0dHJpYnV0ZVwiXHJcbiAgICApO1xyXG4gICAgaWYgKG9sZEF0dHIgIT09IG51bGwgJiYgb2xkQXR0ciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9sZEF0dHIucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByb3BlcnRpc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgdmFyIHBhbmVsID0gVXRpbHMuY3JlYXRlQXR0cmlidXRlUGFuZWxOb2RlKCk7XHJcblxyXG4gICAgdmFyIGZvbnRBdHRyUm93ID0gVXRpbHMuY3JlYXRlVGV4dE1lbW9BdHRyYnV0ZU5vZGUoXHJcbiAgICAgIG1lbW9EYXRhLm1faWQsXHJcbiAgICAgIG1lbW9EYXRhLm1fZm9udENvbG9yLFxyXG4gICAgICBtZW1vRGF0YS5tX2JvbGQsXHJcbiAgICAgIG1lbW9EYXRhLm1fYmFja0NvbG9yLFxyXG4gICAgICBjaGFuZ2VFdmVudEZ1bmNcclxuICAgICk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChmb250QXR0clJvdy5yb3cpO1xyXG5cclxuICAgIHZhciBlbnRpcmVSb3cgPSBVdGlscy5jcmVhdGVBdHRyaWJ1dGVUb2dnbGVCdXR0b25Ob2RlKFxyXG4gICAgICBtZW1vRGF0YS5tX2lkLFxyXG4gICAgICBcImVudGlyZVwiLFxyXG4gICAgICBcIlRlbXBsYXRlLmVudHJpZUFwcGx5XCIsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICBjaGFuZ2VFdmVudEZ1bmNcclxuICAgICk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChlbnRpcmVSb3cpO1xyXG5cclxuICAgIGxldCBmb250RmFtaWx5Q29tYm9TZWxlY3QgPVxyXG4gICAgICBmb250QXR0clJvdy5mb250RmFtaWx5Q29tYm8ucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcclxuICAgICQoZm9udEZhbWlseUNvbWJvU2VsZWN0KS5zZWxlY3QyKHtcclxuICAgICAgbWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IEluZmluaXR5LFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9KTtcclxuICAgICQoZm9udEZhbWlseUNvbWJvU2VsZWN0KS52YWwobWVtb0RhdGEubV9mb250TmFtZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoZm9udEZhbWlseUNvbWJvU2VsZWN0KS5vbihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG4gICAgbGV0IGZvbnRTaXplQ29tYm9TZWxlY3QgPSBmb250QXR0clJvdy5mb250U2l6ZUNvbWJvLnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XHJcbiAgICAkKGZvbnRTaXplQ29tYm9TZWxlY3QpLnNlbGVjdDIoe1xyXG4gICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0pO1xyXG4gICAgJChmb250U2l6ZUNvbWJvU2VsZWN0KS52YWwobWVtb0RhdGEubV9mb250U2l6ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoZm9udFNpemVDb21ib1NlbGVjdCkub24oXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jKTtcclxuXHJcbiAgICBsZXQgY29sb3JJbnB1dCA9IGZvbnRBdHRyUm93LmNvbG9yQnRuLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcbiAgICBjb2xvcklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG1lbW9EYXRhLm1fZm9udENvbG9yO1xyXG4gICAgbGV0IHBpY2tlciA9IG5ldyBDUChjb2xvcklucHV0LCB7IGNvbG9yOiBtZW1vRGF0YS5tX2ZvbnRDb2xvciB9KTtcclxuICAgIGNvbG9ySW5wdXQudmFsdWUgPSBtZW1vRGF0YS5tX2ZvbnRDb2xvcjtcclxuICAgIHBpY2tlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAociwgZywgYiwgYSkge1xyXG4gICAgICBpZiAoIXBpY2tlci52aXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbG9ySW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQ1AuSEVYKFtyLCBnLCBiLCBhXSk7XHJcbiAgICAgIGNvbG9ySW5wdXQudmFsdWUgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuXHJcbiAgICAgIGxldCBjb2xvclRleHRJbnB1dCA9XHJcbiAgICAgICAgZm9udEF0dHJSb3cuY29sb3JCdG4ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtcclxuICAgICAgY29sb3JUZXh0SW5wdXQudmFsdWUgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuICAgIH0pO1xyXG4gICAgcGlja2VyLm9uKFwiZXhpdFwiLCBmdW5jdGlvbiAociwgZywgYiwgYSkge1xyXG4gICAgICBjb2xvcklucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG5cclxuICAgICAgbGV0IGNvbG9yVGV4dElucHV0ID1cclxuICAgICAgICBmb250QXR0clJvdy5jb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gICAgICBjb2xvclRleHRJbnB1dC52YWx1ZSA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG4gICAgICBjb2xvclRleHRJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICB9KTtcclxuICAgIGxldCBjb2xvcklucHV0MiA9IGZvbnRBdHRyUm93LmJhY2tncm91bmRDb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4gICAgY29sb3JJbnB1dDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWVtb0RhdGEubV9iYWNrQ29sb3I7XHJcbiAgICBsZXQgcGlja2VyMiA9IG5ldyBDUChjb2xvcklucHV0MiwgeyBjb2xvcjogbWVtb0RhdGEubV9iYWNrQ29sb3IgfSk7XHJcbiAgICBjb2xvcklucHV0Mi52YWx1ZSA9IG1lbW9EYXRhLm1fYmFja0NvbG9yO1xyXG4gICAgcGlja2VyMi5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAociwgZywgYiwgYSkge1xyXG4gICAgICBpZiAoIXBpY2tlcjIudmlzaWJsZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb2xvcklucHV0Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuICAgICAgY29sb3JJbnB1dDIudmFsdWUgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuXHJcbiAgICAgIGxldCBjb2xvclRleHRJbnB1dCA9XHJcbiAgICAgICAgZm9udEF0dHJSb3cuYmFja2dyb3VuZENvbG9yQnRuLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XHJcbiAgICAgIGNvbG9yVGV4dElucHV0LnZhbHVlID0gQ1AuSEVYKFtyLCBnLCBiLCBhXSk7XHJcbiAgICB9KTtcclxuICAgIHBpY2tlcjIub24oXCJleGl0XCIsIGZ1bmN0aW9uIChyLCBnLCBiLCBhKSB7XHJcbiAgICAgIGNvbG9ySW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG5cclxuICAgICAgbGV0IGNvbG9yVGV4dElucHV0ID1cclxuICAgICAgICBmb250QXR0clJvdy5iYWNrZ3JvdW5kQ29sb3JCdG4ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtcclxuICAgICAgY29sb3JUZXh0SW5wdXQudmFsdWUgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuICAgICAgY29sb3JUZXh0SW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgdmFyIHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm93V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1M7XHJcblxyXG4gICAgbGV0IGFwcGx5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFwcGx5QnRuLmNsYXNzTmFtZSA9IFwiQXR0cmlidXRlLUJ0blwiO1xyXG4gICAgYXBwbHlCdG4uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjE1cHhcIjtcclxuICAgIGFwcGx5QnRuLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xyXG4gICAgYXBwbHlCdG4udGV4dENvbnRlbnQgPSBcIuyggeyaqVwiO1xyXG4gICAgYXBwbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgbGV0IGVudGlyZVN3aXRjaFBhcmVudE5vZGUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCJ1bC5BdHRyaWJ1dGUtQ29udGVudHNcIik7XHJcbiAgICAgIGxldCBlbnRpcmVTd2l0Y2ggPSBlbnRpcmVTd2l0Y2hQYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCJsYWJlbC5BdHRyaWJ1dGUtU3dpdGNoLUxhYmVsID4gaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgZm9udEZhbWlseSA9IGZvbnRBdHRyUm93LmZvbnRGYW1pbHlDb21iby5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwic2VsZWN0LkF0dHJpYnV0ZS1TZWxlY3QgXCJcclxuICAgICAgKS52YWx1ZTtcclxuICAgICAgbGV0IGZvbnRTaXplID0gZm9udEF0dHJSb3cuZm9udFNpemVDb21iby5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwic2VsZWN0LkF0dHJpYnV0ZS1TZWxlY3QgXCJcclxuICAgICAgKS52YWx1ZTtcclxuICAgICAgbGV0IGlzQm9sZCA9XHJcbiAgICAgICAgZm9udEF0dHJSb3cuYm9sZEJ0bi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpLnZhbHVlO1xyXG4gICAgICBsZXQgZm9udENvbG9yID1cclxuICAgICAgICBmb250QXR0clJvdy5jb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpLnZhbHVlO1xyXG4gICAgICBsZXQgYmFja0NvbG9yID1cclxuICAgICAgICBmb250QXR0clJvdy5iYWNrZ3JvdW5kQ29sb3JCdG4ucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiaW5wdXRbdHlwZT0ndGV4dCddXCJcclxuICAgICAgICApLnZhbHVlO1xyXG4gICAgICBfcmVhZGVyTW9kLmFwcGx5TWVtb1Byb3BlcnRpZXMoXHJcbiAgICAgICAgbWVtb0RhdGEubV9pZCxcclxuICAgICAgICBtZW1vRGF0YS5tX3BhZ2VObyxcclxuICAgICAgICBmb250RmFtaWx5LFxyXG4gICAgICAgIGZvbnRTaXplLFxyXG4gICAgICAgIGlzQm9sZCxcclxuICAgICAgICBmb250Q29sb3IsXHJcbiAgICAgICAgYmFja0NvbG9yLFxyXG4gICAgICAgIGVudGlyZVN3aXRjaC5jaGVja2VkXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcIkF0dHJpYnV0ZS1CdG5cIjtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwi64ur6riwXCI7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgX3JlYWRlck1vZC5oaWRlTWVtb1Byb3BlcnRpZXMoKTtcclxuICAgIH0pO1xyXG4gICAgcm93V3JhcC5hcHBlbmRDaGlsZChhcHBseUJ0bik7XHJcbiAgICByb3dXcmFwLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQocm93V3JhcCk7XHJcbiAgICBwYW5lbC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAgIHByb3BlcnRpc0Rpdi5hcHBlbmRDaGlsZChwYW5lbCk7XHJcbiAgICBwcm9wZXJ0aXNEaXYuc2V0QXR0cmlidXRlKFwiRmllbGQtaWRcIiwgbWVtb0RhdGEubV9pZCk7XHJcbiAgICBwcm9wZXJ0aXNEaXYuY2xhc3NOYW1lID0gXCJFZGl0b3ItQXR0cmlidXRlXCI7XHJcbiAgICBsZXQgcE5vZGUgPSBldnQudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBsZXQgcGdOb2RlID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIgW2RhdGEtcGFnZS1udW1iZXI9J1wiICsgbWVtb0RhdGEubV9wYWdlTm8gKyBcIiddXCJcclxuICAgICk7XHJcbiAgICBwcm9wZXJ0aXNEaXYuc3R5bGUudG9wID0gcE5vZGUub2Zmc2V0VG9wICsgNDAgKyBcInB4XCI7XHJcbiAgICBwcm9wZXJ0aXNEaXYuc3R5bGUubGVmdCA9XHJcbiAgICAgIHBOb2RlLm9mZnNldExlZnQgKyBwTm9kZS5vZmZzZXRXaWR0aCArIHBnTm9kZS5vZmZzZXRMZWZ0ICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgbGV0IHZpZXdlciA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiICNcIiArIENPTlNUQU5UUy5SRUFERVJfUERGX1ZJRVdFUlxyXG4gICAgKTtcclxuICAgIHZpZXdlci5hcHBlbmRDaGlsZChwcm9wZXJ0aXNEaXYpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGFkZFVSTEltYWdlVG9TaWduQXJlYVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNhZGRVUkxJbWFnZVRvU2lnbkFyZWFcclxuICAgKiBAZGVzY3JpcHRpb24gICDrs5HsmrE6IOyEnOuyhOuhnOu2gO2EsCDrk7HroZ3rkJwg7J247J6lIOygleuztOulvCDrtojrn6zsmKjri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIzLiAxMi4gMTNcclxuICAgKi9cclxuICBhZGRVUkxJbWFnZVRvU2lnbkFyZWEoKSB7XHJcbiAgICB2YXIgaW1hZ2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlVVJMSW5wdXRcIikudmFsdWU7XHJcbiAgICBfcmVhZGVyTW9kXHJcbiAgICAgIC5nZXRCYXNlNjRJbWFnZUZyb21VcmwoaW1hZ2VVcmwpXHJcbiAgICAgIC50aGVuKChiYXNlNjRJbWFnZSkgPT4ge1xyXG4gICAgICAgIF9yZWFkZXJNb2QuYWRkSW1hZ2VUb0xpc3QoYmFzZTY0SW1hZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkSW1hZ2VUb0xpc3QoYmFzZTY0SW1hZ2UpIHtcclxuICAgIHZhciB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnblR5cGVMaXN0XCIpO1xyXG4gICAgLy8g6riw7KG07JeQIGNsYXNzPVwib25cIuydtCDsnojripQg7JqU7IaM7JeQ7IScIO2BtOuemOyKpCDsoJzqsbBcclxuICAgIHZhciBleGlzdGluZ09uRWxlbWVudCA9IHVsLnF1ZXJ5U2VsZWN0b3IoXCJsaS5vblwiKTtcclxuICAgIGlmIChleGlzdGluZ09uRWxlbWVudCkge1xyXG4gICAgICBleGlzdGluZ09uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g7IOI66Gc7Jq0IGxpIOyalOyGjCDsg53shLEg67CPIOy2lOqwgFxyXG4gICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuY2xhc3NOYW1lID0gXCJvblwiO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJjYW52YXNfd3JhcFwiO1xyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gYmFzZTY0SW1hZ2U7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFzZTY0SW1hZ2VGcm9tVXJsKGltYWdlVXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goaW1hZ2VVcmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2suXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFzZTY0SW1hZ2VGcm9tVXJsQnlQcm94eVNlcnZlcihpbWFnZVVybCkge1xyXG4gICAgY29uc3QgcHJveHlVcmwgPSBcImh0dHBzOi8vdGhpbmdwcm94eS5mcmVlYm9hcmQuaW8vZmV0Y2gvXCI7IC8vIOustOujjCDtlITroZ3si5wg7ISc67mE7IqkIFVSTFxyXG4gICAgY29uc3QgdXJsID0gcHJveHlVcmwgKyBpbWFnZVVybDtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rLlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGJsb2IpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIDIwMjQwMTMxXHJcbiAgY29udmVydEltYWdlVG9CYXNlNjQoaW1hZ2VVcmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign7J2066+47KeA66W8IOu2iOufrOyYpOuKlCDrj5nslYgg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgaW1hZ2VVcmwpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGlzSW1hZ2VVUkxWYWxpZCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgLy8gICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgLy8gICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgLy8g7J2066+47KeAIOuhnOuTnCDshLHqs7Ug7IucXHJcbiAgLy8gICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAvLyAgICAgICAvLyDsnbTrr7jsp4Ag66Gc65OcIOyLpO2MqCDsi5xcclxuICAvLyAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgaW1nLnNyYyA9IHVybDtcclxuICAvLyB9XHJcblxyXG4gIGFzeW5jIGNoZWNrSW1hZ2VWYWxpZGl0eSh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpOyAvLyDsnbTrr7jsp4Ag66Gc65OcIOyEseqztVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTsgLy8g7J2066+47KeAIOuhnOuTnCDsi6TtjKhcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltZy5zcmMgPSB1cmw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2lnblR5cGVMaXN0KCkge1xyXG4gICAgLy8gJ3JlZ2lzdGVyZWRBcmVhJyDsmpTshozsl5Ag7KCR6re8XHJcbiAgICBjb25zdCByZWdpc3RlcmVkQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJlZEFyZWFcIik7XHJcblxyXG4gICAgLy8gJ3JlZ2lzdGVyZWRBcmVhJyDrgrTrtoDsnZggJ3NpZ25UeXBlTGlzdCfrpbwg7LC+7J2MXHJcbiAgICBjb25zdCBzaWduVHlwZUxpc3QgPSByZWdpc3RlcmVkQXJlYS5xdWVyeVNlbGVjdG9yKFwiLnNpZ25UeXBlTGlzdFwiKTtcclxuXHJcbiAgICAvLyAnc2lnblR5cGVMaXN0JyDrgrTrtoDsnZgg66qo65OgICdsaScg7JqU7IaM66W8IOyCreygnFxyXG4gICAgd2hpbGUgKHNpZ25UeXBlTGlzdC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHNpZ25UeXBlTGlzdC5yZW1vdmVDaGlsZChzaWduVHlwZUxpc3QuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY29udmVydFVybHNUb0pzb24oaW1hZ2VVcmxzKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVcmxzLm1hcCh1cmwgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGltZ190eXBlOiBcIlVSTFwiLFxyXG4gICAgICAgICAgICBpbWdfc3JjOiB1cmxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQG1vZHVsZSBSZWFkZXIvUmVhZGVyTW9kXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQge0NPTlNUQU5UU30gZnJvbSAnLi8uLi9Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IGZsYXRwaWNrciBmcm9tIFwiLi8uLi8uLi9mbGF0cGlja3IubWluLmpzXCI7XHJcbmltcG9ydCB7IEtvcmVhbiB9IGZyb20gXCIuLi8uLi9sMTBuL2tvLmpzXCJcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZWE65OcIOuenOuNlOungSDqtIDroKgg7LKY66as66W8IO2VmOuKlCBDbGFzc1xyXG4gKlxyXG4gKiBAcHJvcGVydHkge0NhbGxiYWNrfSBhbGVydEZ1bmMge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2FsZXJ0RnVuY31cclxuICogQHByb3BlcnR5IHtCbG9ifSBjaGVja0Jsb2Ige0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NoZWNrQmxvYn1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGNoZWNrSW1ndXJsIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjaGVja0ltZ3VybH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGNoZWNrU3ZnIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjaGVja1N2Z31cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGVQaWNrZXIge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2RhdGVQaWNrZXJ9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBmaWVsZHMge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2ZpZWxkc31cclxuICogQHByb3BlcnR5IHtPYmplY3R9IG1fZGVmYXVsdFZhbHVlSW5mbyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjbV9kZWZhdWx0VmFsdWVJbmZvfVxyXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IG1fb3duZXJOb2RlIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNtX293bmVyTm9kZX1cclxuICogQHByb3BlcnR5IHtCb29sZWFufSBtX3JlYWRvbmx5IHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNtX3JlYWRvbmx5fVxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gcGFnZU5vIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNwYWdlTm99XHJcbiAqIEBwcm9wZXJ0eSB7QmxvYn0gcmFkaW9PZmZibG9iIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09mZmJsb2J9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByYWRpb09mZkltZ3VybCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PZmZJbWd1cmx9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByYWRpb09mZlN2ZyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PZmZTdmd9XHJcbiAqIEBwcm9wZXJ0eSB7QmxvYn0gcmFkaW9PbmJsb2Ige0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT25ibG9ifVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmFkaW9PbkltZ3VybCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PbkltZ3VybH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHJhZGlvT25Tdmcge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT25Tdmd9XHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUNoZWNrYm94RmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUNoZWNrYm94RmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUNvbWJvYm94RmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUNvbWJvYm94RmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVGaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlRmllbGREaXYge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUZpZWxkRGl2fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVGaWVsZExheWVyIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVGaWVsZExheWVyfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVJbWFnZUZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVJbWFnZUZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVMYWJlbEZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVMYWJlbEZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVNdWx0aWxpbmVUZXh0RmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZU11bHRpbGluZVRleHRGaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlUmFkaW9GaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlUmFkaW9GaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlU2lnbkZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVTaWduRmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZVRleHRGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlVGV4dEZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjZ2V0RmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2lzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHl9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHB1c2hGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcHVzaEZpZWxkfVxyXG4gKiBcclxuICogQEZpbGVOYW1lIFJlYWRlclBhZ2VEYXRhLmpzXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjMxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVhZGVyUGFnZURhdGEge1xyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTm8g656c642U66eBIO2VmOuKlCDtjpjsnbTsp4Ag67KI7Zi4XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRWYWx1ZUluZm8g7ISc66qF7J6Q7J2YIOq4sOuzuCDsoJXrs7Trk6TsnbQg65Ok7Ja07J6I64qUIE9iamVjdFxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlIOydtCDtlITroZzsoJ3tirjqsIAg7Y+s7ZWo65CgIEVsZW1lbnTsnZgg67aA66qoIEhUTUwgRUxFTUVOVFxyXG4gICAqIEBwYXJhbSB7Q2FsbGJhY2t9IGN1c3RvbUFsZXJ0RnVuYyDslYzrprzssL0g7Zi47Lac7J2EIOychO2VnCBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVhZG9ubHkg7J6F66Cl7J2EIOuwm+yngCDslYrqs6Ag7J296riwIOyghOyaqSDrqqjrk5zroZwg7IKs7Jqp7ZWg65WM66W8IOychO2VnCDrs4DsiJhcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFnZU5vLFxyXG4gICAgZGVmYXVsdFZhbHVlSW5mbyxcclxuICAgIG93bmVyTm9kZSxcclxuICAgIGN1c3RvbUFsZXJ0RnVuYyA9IG51bGwsXHJcbiAgICByZWFkb25seSA9IGZhbHNlLFxyXG4gICAgc2lnbkNhbnZhcyA9IG51bGxcclxuICApIHtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3BhZ2VOb1xyXG4gICAgICogQGRlc2NyaXB0aW9uIOuenOuNlOungSDtlZjripQg7Y6Y7J207KeAIOuyiO2YuFxyXG4gICAgICovXHJcbiAgICB0aGlzLnBhZ2VObyA9IHBhZ2VObztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNmaWVsZHNcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnpzrjZTrp4HtlaAg7ZWE65OcIOygleuztFxyXG4gICAgICovXHJcbiAgICB0aGlzLmZpZWxkcyA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI21lbW9zXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g656c642U66eB7ZWgIOuplOuqqCDsoJXrs7RcclxuICAgICAqL1xyXG4gICAgdGhpcy5tZW1vcyA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2RhdGVQaWNrZXJcclxuICAgICAqIEBkZXNjcmlwdGlvbiDsupjrprDrjZQg7Yyd7JeF7LC9IE9iamVjdFxyXG4gICAgICovXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjbV9kZWZhdWx0VmFsdWVJbmZvXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g7ISc66qF7J6Q7J2YIOq4sOuzuCDsoJXrs7Trk6TsnbQg65Ok7Ja07J6I64qUIE9iamVjdFxyXG4gICAgICovXHJcbiAgICB0aGlzLm1fZGVmYXVsdFZhbHVlSW5mbyA9IGRlZmF1bHRWYWx1ZUluZm87XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI21fb3duZXJOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g7J20IO2UhOuhnOygne2KuOqwgCDtj6ztlajrkKAgRWxlbWVudOydmCDrtoDrqqggSFRNTCBFTEVNRU5UXHJcbiAgICAgKi9cclxuICAgIHRoaXMubV9vd25lck5vZGUgPSBvd25lck5vZGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI21fcmVhZG9ubHlcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnpzrjZTrp4HtlZwg7J6F66ClIOywveuTpOydhCDsnb3quLDsoITsmqnsnLzroZwg66eM65Ok7KeA7JeQIOuMgO2VnCDsl6zrtoBcclxuICAgICAqL1xyXG4gICAgdGhpcy5tX3JlYWRvbmx5ID0gcmVhZG9ubHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7Q2FsbGJhY2t9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNhbGVydEZ1bmNcclxuICAgICAqIEBkZXNjcmlwdGlvbiDslYzrprzssL0g7Zi47Lac7J2EIOychO2VnCBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICB0aGlzLmFsZXJ0RnVuYyA9IGN1c3RvbUFsZXJ0RnVuYztcclxuXHJcbiAgICB0aGlzLnNpZ25DYW52YXMgPSBzaWduQ2FudmFzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NoZWNrU3ZnXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g7LK07YGsIOuqqOyWkeydhCDtkZztmITtlZjquLAg7JyE7ZWcIFNWRyDsnbTrr7jsp4Ag642w7J207YSwLlxyXG4gICAgICovXHJcbiAgICBsZXQgY2hlY2tTdmcgPVxyXG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPjxwYXRoIGQ9XCJNMTcuMiAzMi4yTDQuOSAxOS45IDAgMjQuOCAxNy4yIDQyIDQ4IDEwLjkgNDMuMSA2elwiLz48L3N2ZyA+JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09uU3ZnXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g652865SU7Jik7J2YIOyEoO2DneuQmOyXiOydhCDrlYwg66qo7JaR7J2EIO2RnO2YhO2VmOq4sCDsnITtlZwgU1ZHIOydtOuvuOyngCDrjbDsnbTthLAuXHJcbiAgICAgKi9cclxuICAgIGxldCByYWRpb09uU3ZnID1cclxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cXFxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI0LDEyYy02LjYsMC0xMiw1LjQtMTIsMTJzNS40LDEyLDEyLDEyczEyLTUuNCwxMi0xMlMzMC42LFxcXHJcbiAgICAgICAgICAgIDEyLDI0LDEyek0yNCwwQzEwLjgsMCwwLDEwLjgsMCwyNHMxMC44LDI0LDI0LDI0czI0LTEwLjgsMjQtMjRTMzcuMiwwLDI0LDB6TTI0LDQzLjJDMTMuNCw0My4yLDQuOCwzNC42LDQuOCwyNFMxMy40LFxcXHJcbiAgICAgICAgICAgIDQuOCwyNCw0LjhTNDMuMiwxMy40LDQzLjIsMjRTMzQuNiw0My4yLDI0LDQzLjJ6XCIvPjwvc3ZnID4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT2ZmU3ZnXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g652865SU7Jik7J2YIOyEoO2DnSDslYjrkJjsl4jsnYQg65WMIOuqqOyWkeydhCDtkZztmITtlZjquLAg7JyE7ZWcIFNWRyDsnbTrr7jsp4Ag642w7J207YSwLlxyXG4gICAgICovXHJcbiAgICBsZXQgcmFkaW9PZmZTdmcgPVxyXG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxcXHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQsMEMxMC44LDAsMCwxMC44LDAsMjRzMTAuOCwyNCwyNCwyNHMyNC0xMC44LDI0LTI0UzM3LjIsMCwyNCwwek0yNCw0My4yQzEzLjQsNDMuMiw0LjgsMzQuNiw0LjgsMjRTMTMuNCxcXFxyXG4gICAgICAgICAgICA0LjgsMjQsNC44UzQzLjIsMTMuNCw0My4yLDI0UzM0LjYsNDMuMiwyNCw0My4yelwiLz48L3N2ZyA+JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtCbG9ifVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY2hlY2tCbG9iXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g7LK07YGsIFNWR+ydmCBCbG9iIOuNsOydtO2EsC5cclxuICAgICAqL1xyXG4gICAgbGV0IGNoZWNrQmxvYiA9IG5ldyBCbG9iKFtjaGVja1N2Z10sIHsgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY2hlY2tJbWd1cmxcclxuICAgICAqIEBkZXNjcmlwdGlvbiDssrTtgawgU1ZH7J2YIO2YhOyerCBVUkzsl5DshJzrp4wg7Jyg7Zqo7ZWcIOyehOyLnCBVUkxcclxuICAgICAqL1xyXG4gICAgdGhpcy5jaGVja0ltZ3VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoY2hlY2tCbG9iKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtCbG9ifVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PbmJsb2JcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnbzrlJTsmKTqsIAg7ISg7YOd65CY7JeI7J2EIOuVjCBTVkfsnZggQmxvYiDrjbDsnbTthLAuXHJcbiAgICAgKi9cclxuICAgIGxldCByYWRpb09uYmxvYiA9IG5ldyBCbG9iKFtyYWRpb09uU3ZnXSwgeyB0eXBlOiBcImltYWdlL3N2Zyt4bWxcIiB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09uSW1ndXJsXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g652865SU7Jik6rCAIOyEoO2DneuQmOyXiOydhCDrlYwgU1ZH7J2YIO2YhOyerCBVUkzsl5DshJzrp4wg7Jyg7Zqo7ZWcIOyehOyLnCBVUkxcclxuICAgICAqL1xyXG4gICAgdGhpcy5yYWRpb09uSW1ndXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyYWRpb09uYmxvYik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7QmxvYn1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT2ZmYmxvYlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOudvOuUlOyYpOqwgCDshKDtg50g7JWI65CY7JeI7J2EIOuVjCBTVkfsnZggQmxvYiDrjbDsnbTthLAuXHJcbiAgICAgKi9cclxuICAgIGxldCByYWRpb09mZmJsb2IgPSBuZXcgQmxvYihbcmFkaW9PZmZTdmddLCB7IHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT2ZmSW1ndXJsXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g652865SU7Jik6rCAIOyEoO2DnSDslYjrkJjsl4jsnYQg65WMIFNWR+ydmCDtmITsnqwgVVJM7JeQ7ISc66eMIOycoO2aqO2VnCDsnoTsi5wgVVJMXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmFkaW9PZmZJbWd1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJhZGlvT2ZmYmxvYik7XHJcblxyXG4gICAgdGhpcy5tZW1vUHJvcGV0aWVzID0ge1xyXG4gICAgICBmb250RmFtaWx5OiBcIk1hbGd1bkdvdGhpY1wiLFxyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGZvbnRDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgIGJhY2tDb2xvcjogXCIjMzMzMzMzMzNcIixcclxuICAgICAgaXNCb2xkOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gcHVzaE1lbW9cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNwdXNoTWVtb1xyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTrk5xPYmplY3Trpbwg7LaU6rCA7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkS2V5ICDtlYTrk5zsnZgg6rOg7JygSURcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgIO2VhOuTnCBPYmplY3RcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBwdXNoTWVtbyhtZW1vS2V5LCBtZW1vKSB7XHJcbiAgICB0aGlzLm1lbW9zW21lbW9LZXldID0gbWVtbztcclxuICB9XHJcblxyXG4gIHJlbW92ZU1lbW8obWVtb0tleSkge1xyXG4gICAgZGVsZXRlIHRoaXMubWVtb3NbbWVtb0tleV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gcHVzaEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcHVzaEZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uIO2VhOuTnE9iamVjdOulvCDstpTqsIDtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRLZXkgIO2VhOuTnOydmCDqs6DsnKBJRFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCAg7ZWE65OcIE9iamVjdFxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHB1c2hGaWVsZChmaWVsZEtleSwgZmllbGQpIHtcclxuICAgIHRoaXMuZmllbGRzW2ZpZWxkS2V5XSA9IGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHB1c2hGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2dldEZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uIO2VtOuLue2VmOuKlCDtgqTsnZgg7ZWE65OcT2JqZWN066W8IOumrO2EtO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZEtleSAg7ZWE65Oc7J2YIOqzoOycoElEXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSAg7ZWE65OcIE9iamVjdFxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGdldEZpZWxkKGZpZWxkS2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZHNbZmllbGRLZXldO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHlcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5XHJcbiAgICogQGRlc2NyaXB0aW9uIO2VhOyImCDtlYTrk5zqsIAg67mE7Ja07J6I64qU7KeAIOyXrOu2gOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIGJvb2xlYW46IO2VhOyImCDtlYTrk5zqsIAg67mE7Ja07J6I64qU7KeAIOyXrOu2gFxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSgpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcyk7XHJcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzLmxlbmd0aDsgKytpZHgpIHtcclxuICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1trZXlzW2lkeF1dO1xyXG4gICAgICBpZiAoZmllbGQubV9yZXF1aXJlZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBsZXQgZmllbGREaXYgPSB0aGlzLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBcIiNcIiArIGZpZWxkLm1faWQgKyBcIl9kaXZcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKFV0aWxzLmlzU3RyaW5nRW1wdHkoZmllbGQubV92YWx1ZSkpIHtcclxuICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJFbXB0eUZpZWxkXCIpO1xyXG4gICAgICAgICAgbGV0IGZpZWxkRGl2UmVjdCA9IGZpZWxkRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgbGV0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgXCIgI1wiICsgQ09OU1RBTlRTLlJFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGxldCB2aWV3ZXJDb250YWluZXJSZWN0ID0gdmlld2VyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgaWYgKHZpZXdlckNvbnRhaW5lciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIgPSB0aGlzLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgXCIgI1wiICsgQ09OU1RBTlRTLlBSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPVxyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZmllbGREaXZSZWN0LnRvcCAtXHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lclJlY3QudG9wO1xyXG4gICAgICAgICAgdmlld2VyQ29udGFpbmVyLnNjcm9sbFRvcCA9XHJcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uIC0gdmlld2VyQ29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGZpZWxkRGl2ICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIkVtcHR5RmllbGRcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QudG9nZ2xlKFwiRW1wdHlGaWVsZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkoKSB7XHJcbiAgLy8gICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcyk7XHJcbiAgLy8gICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXMubGVuZ3RoOyArK2lkeCkge1xyXG4gIC8vICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1trZXlzW2lkeF1dO1xyXG4gIC8vICAgICAgICAgaWYgKGZpZWxkLm1fcmVxdWlyZWQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IGZpZWxkRGl2ID0gdGhpcy5tX293bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZmllbGQubV9pZCArIFwiX2RpdlwiKTtcclxuICAvLyAgICAgICAgICAgICBpZiAoVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX3ZhbHVlKSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKFwiRW1wdHlGaWVsZFwiKTtcclxuICAvLyAgICAgICAgICAgICAgICAgbGV0IGJib3ggPSBmaWVsZERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAvLyAgICAgICAgICAgICAgICAgbGV0IHZpZXdlckNvbnRhaW5lciA9IHRoaXMubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBDT05TVEFOVFMuUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSKTtcclxuICAvLyAgICAgICAgICAgICAgICAgaWYgKHZpZXdlckNvbnRhaW5lciA9PT0gbnVsbCkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyID0gdGhpcy5tX293bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIENPTlNUQU5UUy5QUkVWSUVXX1JFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUik7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnNjcm9sbFRvcCA9IGJib3gueTtcclxuICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRGl2ICE9PSBudWxsICYmXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QgIT09IHVuZGVmaW5lZCAmJlxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRW1wdHlGaWVsZFwiKSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LnRvZ2dsZShcIkVtcHR5RmllbGRcIik7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZUZpZWxkTGF5ZXJcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVGaWVsZExheWVyXHJcbiAgICogQGRlc2NyaXB0aW9uICDtlYTrk5zrpbwg7Jis66a0IOugiOydtOyWtOulvCDsg53shLHtlZjsl6wg67CY7ZmY7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAg7Y6Y7J207KeAIHdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgIO2OmOydtOyngCBoZWlnaHRcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVGaWVsZExheWVyKHdpZHRoLCBoZWlnaHQsIGNsYXNzTmFtZSkge1xyXG4gICAgbGV0IGZpZWxkTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGRMYXllci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGZpZWxkTGF5ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBmaWVsZExheWVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBmaWVsZExheWVyLnN0eWxlLndpZHRoID0gd2lkdGg7XHJcbiAgICBmaWVsZExheWVyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGZpZWxkTGF5ZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgcmV0dXJuIGZpZWxkTGF5ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlTWVtb0RpdlxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZU1lbW9EaXZcclxuICAgKiBAZGVzY3JpcHRpb24g7ZWE65OcIOugiOydtOyWtCDsnITsl5Ag7Jis65286rCAIO2VhOuTnOulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3RoaXNQYWdlIG9iamVjdCB0aGlzIG9iZWpjdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZW1vIG1lbW8g7KCV67O0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0ICAg656c642U66eB65CY64qUIFBERiBQYWdl7J2YIHZpZXdwb3J0XHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlTWVtb0RpdihcclxuICAgIF90aGlzUGFnZSxcclxuICAgIG1lbW8sXHJcbiAgICB2aWV3cG9ydCxcclxuICAgIGRlbGV0ZUJ0bkNsaWNrRXZlbnRMaXN0ZW5lcixcclxuICAgIG1lbW9Qcm9wZXJ0eUJ0bkNsaWNrRXZlbnRMaXN0ZW5lclxyXG4gICkge1xyXG4gICAgY29uc3Qgdmlld3BvcnRYWSA9IHZpZXdwb3J0LmNvbnZlcnRUb1ZpZXdwb3J0UG9pbnQoXHJcbiAgICAgIG1lbW8ubV9wZGZYLFxyXG4gICAgICBtZW1vLm1fcGRmWVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHZpZXdwb3J0WFkyID0gdmlld3BvcnQuY29udmVydFRvVmlld3BvcnRQb2ludChcclxuICAgICAgbWVtby5tX3BkZlgyLFxyXG4gICAgICBtZW1vLm1fcGRmWTJcclxuICAgICk7XHJcbiAgICBjb25zdCBtZW1vTWFyZ2luID0gMTA7XHJcblxyXG4gICAgY29uc3QgbmV3WCA9IHZpZXdwb3J0WFlbMF07XHJcbiAgICBjb25zdCBuZXdZID0gdmlld3BvcnRYWVsxXTtcclxuICAgIGNvbnN0IG5ld1gyID0gdmlld3BvcnRYWTJbMF07XHJcbiAgICBjb25zdCBuZXdZMiA9IHZpZXdwb3J0WFkyWzFdO1xyXG4gICAgY29uc3QgbmV3VyA9IE1hdGguYWJzKG5ld1gyIC0gbmV3WCk7XHJcbiAgICBjb25zdCBuZXdIID0gTWF0aC5hYnMobmV3WTIgLSBuZXdZKTtcclxuICAgIGxldCBtZW1vRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbW9EaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBtZW1vRGl2LnN0eWxlLmxlZnQgPSBuZXdYIC0gbWVtb01hcmdpbiArIFwicHhcIjtcclxuICAgIG1lbW9EaXYuc3R5bGUudG9wID0gbmV3WSAtIG1lbW9NYXJnaW4gKyBcInB4XCI7XHJcbiAgICBtZW1vRGl2LnN0eWxlLndpZHRoID0gbmV3VyArIG1lbW9NYXJnaW4gKyBcInB4XCI7XHJcbiAgICBtZW1vRGl2LnN0eWxlLmhlaWdodCA9IG5ld0ggKyBtZW1vTWFyZ2luICsgXCJweFwiO1xyXG4gICAgbWVtb0Rpdi5pZCA9IG1lbW8ubV9pZCArIFwiX2RpdlwiO1xyXG5cclxuICAgIG1lbW9EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWVtby5tX2JhY2tDb2xvcjtcclxuICAgIG1lbW9EaXYuc3R5bGUub3V0bGluZUNvbG9yID0gbWVtby5tX2JhY2tDb2xvcjtcclxuICAgIG1lbW9EaXYuc3R5bGUub3V0bGluZVN0eWxlID0gXCJzb2xpZFwiO1xyXG4gICAgbWVtb0Rpdi5zdHlsZS5vdXRsaW5lV2lkdGggPSBcIjFweFwiO1xyXG4gICAgY29uc3Qgb3JnV2lkdGggPSBNYXRoLmFicyhtZW1vLm1fcGRmWCAtIG1lbW8ubV9wZGZYMik7XHJcbiAgICBjb25zdCBvcmdIZWlnaHQgPSBNYXRoLmFicyhtZW1vLm1fcGRmWSAtIG1lbW8ubV9wZGZZMik7XHJcbiAgICBjb25zdCB4U2NhbGUgPSBuZXdXIC8gb3JnV2lkdGg7XHJcbiAgICBjb25zdCB5U2NhbGUgPSBuZXdIIC8gb3JnSGVpZ2h0O1xyXG5cclxuICAgIGxldCBtdWx0aWxpbmVUZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUubGVmdCA9IFwiNXB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUudG9wID0gXCI1cHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS53aWR0aCA9IG5ld1cgKyBcInB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuaGVpZ2h0ID0gbmV3SCArIFwicHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5mb250RmFtaWx5ID0gbWVtby5tX2ZvbnROYW1lO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmZvbnRTaXplID0gbWVtby5tX2ZvbnRTaXplICogeFNjYWxlICsgXCJweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmNvbG9yID0gbWVtby5tX2ZvbnRDb2xvcjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS50ZXh0QWxpZ24gPSBtZW1vLm1fdGV4dEFsaWduO1xyXG5cclxuICAgIGlmIChtZW1vLm1fcmVhZG9ubHkpIHtcclxuICAgICAgbXVsdGlsaW5lVGV4dEZpZWxkLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChtZW1vLm1fYm9sZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIH1cclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5pbm5lckhUTUwgPSBtZW1vLm1fdmFsdWU7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG5cclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNoYW5nZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgbWVtby5tX3ZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiJiMxMzsmIzEwO1wiKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2cobWVtby5tX3ZhbHVlKTtcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBtZW1vRGl2LmFwcGVuZENoaWxkKG11bHRpbGluZVRleHRGaWVsZCk7XHJcblxyXG4gICAgalF1ZXJ5KG1lbW9EaXYpXHJcbiAgICAgIC5kcmFnZ2FibGUoe1xyXG4gICAgICAgIGNvbnRhaW5tZW50OiBcInBhcmVudFwiLFxyXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgIGxldCBwb2ludDEgPSB2aWV3cG9ydC5jb252ZXJ0VG9QZGZQb2ludChcclxuICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCArIG1lbW9NYXJnaW4sXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCArIG1lbW9NYXJnaW5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWCA9IHBvaW50MVswXTtcclxuICAgICAgICAgIG1lbW8ubV9wZGZZID0gcG9pbnQxWzFdO1xyXG4gICAgICAgICAgbGV0IHBvaW50MiA9IHZpZXdwb3J0LmNvbnZlcnRUb1BkZlBvaW50KFxyXG4gICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ICsgbWVtb01hcmdpbiArIG5ld1csXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCArIG1lbW9NYXJnaW4gKyBuZXdIXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbWVtby5tX3BkZlgyID0gcG9pbnQyWzBdO1xyXG4gICAgICAgICAgbWVtby5tX3BkZlkyID0gcG9pbnQyWzFdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXNpemFibGUoe1xyXG4gICAgICAgIGNvbnRhaW5tZW50OiBcInBhcmVudFwiLFxyXG4gICAgICAgIGFsc29SZXNpemU6IGpRdWVyeShtdWx0aWxpbmVUZXh0RmllbGQpLFxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgbGV0IHBvaW50MSA9IHZpZXdwb3J0LmNvbnZlcnRUb1BkZlBvaW50KFxyXG4gICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ICsgbWVtb01hcmdpbixcclxuICAgICAgICAgICAgdWkucG9zaXRpb24udG9wICsgbWVtb01hcmdpblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIG1lbW8ubV9wZGZYID0gcG9pbnQxWzBdO1xyXG4gICAgICAgICAgbWVtby5tX3BkZlkgPSBwb2ludDFbMV07XHJcbiAgICAgICAgICBsZXQgcG9pbnQyID0gdmlld3BvcnQuY29udmVydFRvUGRmUG9pbnQoXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLmxlZnQgKyBtZW1vTWFyZ2luICsgdWkuc2l6ZS53aWR0aCAtIG1lbW9NYXJnaW4sXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLnRvcCArIG1lbW9NYXJnaW4gKyB1aS5zaXplLmhlaWdodCAtIG1lbW9NYXJnaW5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWDIgPSBwb2ludDJbMF07XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWTIgPSBwb2ludDJbMV07XHJcbiAgICAgICAgICBtZW1vLm1fd2lkdGggPSB1aS5zaXplLndpZHRoO1xyXG4gICAgICAgICAgbWVtby5tX2hlaWdodCA9IHVpLnNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBkZWxldGVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLkZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1MpO1xyXG4gICAgZGVsZXRlQnRuRGl2LmRhdGFzZXQubWVtb0lkID0gbWVtby5tX2lkO1xyXG4gICAgZGVsZXRlQnRuRGl2LmRhdGFzZXQubWVtb1BhZ2VObyA9IG1lbW8ubV9wYWdlTm87XHJcblxyXG4gICAgZGVsZXRlQnRuRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVCdG5DbGlja0V2ZW50TGlzdGVuZXIpO1xyXG4gICAgbWVtb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdG5EaXYpO1xyXG5cclxuICAgIGxldCBwcm9wZXJ0eUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9wZXJ0eUJ0bkRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5NRU1PX1BST1BFUlRZX0JVVFRPTl9DTEFTUyk7XHJcbiAgICBwcm9wZXJ0eUJ0bkRpdi5kYXRhc2V0Lm1lbW9JZCA9IG1lbW8ubV9pZDtcclxuICAgIHByb3BlcnR5QnRuRGl2LmRhdGFzZXQubWVtb1BhZ2VObyA9IG1lbW8ubV9wYWdlTm87XHJcblxyXG4gICAgcHJvcGVydHlCdG5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbW9Qcm9wZXJ0eUJ0bkNsaWNrRXZlbnRMaXN0ZW5lcik7XHJcbiAgICBtZW1vRGl2LmFwcGVuZENoaWxkKHByb3BlcnR5QnRuRGl2KTtcclxuICAgIHJldHVybiBtZW1vRGl2O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGl2XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlRmllbGREaXZcclxuICAgKiBAZGVzY3JpcHRpb24g7ZWE65OcIOugiOydtOyWtCDsnITsl5Ag7Jis65286rCAIO2VhOuTnOulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3RoaXNQYWdlIG9iamVjdCB0aGlzIG9iZWpjdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgICDrnpzrjZTrp4HrkJjripQgUERGIFBhZ2XsnZggdmlld3BvcnRcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVGaWVsZERpdihfdGhpc1BhZ2UsIGZpZWxkLCB2aWV3cG9ydCwgZmllbGRXcmFwZXIpIHtcclxuICAgIGNvbnN0IHZpZXdwb3J0WFkgPSB2aWV3cG9ydC5jb252ZXJ0VG9WaWV3cG9ydFBvaW50KFxyXG4gICAgICBmaWVsZC5tX3BkZlgsXHJcbiAgICAgIGZpZWxkLm1fcGRmWVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHZpZXdwb3J0WFkyID0gdmlld3BvcnQuY29udmVydFRvVmlld3BvcnRQb2ludChcclxuICAgICAgZmllbGQubV9wZGZYMixcclxuICAgICAgZmllbGQubV9wZGZZMlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdYID0gdmlld3BvcnRYWVswXTtcclxuICAgIGNvbnN0IG5ld1kgPSB2aWV3cG9ydFhZWzFdO1xyXG4gICAgY29uc3QgbmV3WDIgPSB2aWV3cG9ydFhZMlswXTtcclxuICAgIGNvbnN0IG5ld1kyID0gdmlld3BvcnRYWTJbMV07XHJcbiAgICBjb25zdCBuZXdXID0gTWF0aC5hYnMobmV3WDIgLSBuZXdYKTtcclxuICAgIGNvbnN0IG5ld0ggPSBNYXRoLmFicyhuZXdZMiAtIG5ld1kpO1xyXG4gICAgbGV0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZpZWxkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZmllbGREaXYuc3R5bGUubGVmdCA9IG5ld1ggKyBcInB4XCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS50b3AgPSBuZXdZICsgXCJweFwiO1xyXG4gICAgZmllbGREaXYuc3R5bGUud2lkdGggPSBuZXdXICsgXCJweFwiO1xyXG4gICAgZmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gbmV3SCArIFwicHhcIjtcclxuICAgIGZpZWxkRGl2LmlkID0gZmllbGQubV9pZCArIFwiX2RpdlwiO1xyXG5cclxuICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxNTgsIDIxOCwgMC4yKVwiO1xyXG4gICAgZmllbGREaXYuc3R5bGUub3V0bGluZUNvbG9yID0gXCIjOTFhYWJhXCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS5vdXRsaW5lU3R5bGUgPSBcImRhc2hlZFwiO1xyXG4gICAgZmllbGREaXYuc3R5bGUub3V0bGluZVdpZHRoID0gXCIxcHhcIjtcclxuXHJcbiAgICAvLzEyMDYg67OR7JqxIOy2lOqwgCA6IO2PrOy7pOyKpOyLnCDqsr3qs4TshKAg7IOJIOuzgO2ZlO2VtOyEnCDtkZzsi5xcclxuICAgIGZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiZm9jdXNcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRpdiDrgrTrtoDsnZgg7JqU7IaM6rCAIO2PrOy7pOyKpOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgZmllbGREaXYuc3R5bGUub3V0bGluZUNvbG9yID0gXCJyZ2IoMTMgNjMgMjUwIC8gODglKVwiO1xyXG4gICAgICAgIGZpZWxkRGl2LnN0eWxlLm91dGxpbmVXaWR0aCA9IFwiM3B4XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBmaWVsZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImJsdXJcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRpdiDrgrTrtoDsnZgg7JqU7IaM6rCAIGJsdXIo7Y+s7Luk7IqkIO2VtOygnCnrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgICAgIGZpZWxkRGl2LnN0eWxlLm91dGxpbmVDb2xvciA9IFwiIzkxYWFiYVwiO1xyXG4gICAgICAgIGZpZWxkRGl2LnN0eWxlLm91dGxpbmVXaWR0aCA9IFwiMXB4XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICBjb25zdCBvcmdXaWR0aCA9IE1hdGguYWJzKGZpZWxkLm1fcGRmWCAtIGZpZWxkLm1fcGRmWDIpO1xyXG4gICAgY29uc3Qgb3JnSGVpZ2h0ID0gTWF0aC5hYnMoZmllbGQubV9wZGZZIC0gZmllbGQubV9wZGZZMik7XHJcbiAgICBjb25zdCB4U2NhbGUgPSBuZXdXIC8gb3JnV2lkdGg7XHJcbiAgICBjb25zdCB5U2NhbGUgPSBuZXdIIC8gb3JnSGVpZ2h0O1xyXG5cclxuICAgIHN3aXRjaCAoZmllbGQubV90eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJUZXh0RmllbGRcIjpcclxuICAgICAgY2FzZSBcIk51bWJlckZpZWxkXCI6XHJcbiAgICAgIGNhc2UgXCJEYXRlRmllbGRcIjoge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGREaXYgPSBfdGhpc1BhZ2UuY3JlYXRlVGV4dEZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIHhTY2FsZSxcclxuICAgICAgICAgIF90aGlzUGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQodGV4dEZpZWxkRGl2KTtcclxuICAgICAgICBpZiAoZmllbGQubV90eXBlID09PSBcIk51bWJlckZpZWxkXCIgJiYgZmllbGQubV91c2VDYWxjID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgdGV4dEZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIF90aGlzUGFnZS5zaG93Q2FsYyh0ZXh0RmllbGREaXYsIG5ld1gsIG5ld1ksIG5ld0gsIGZpZWxkV3JhcGVyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiTXVsdGlMaW5lVGV4dEZpZWxkXCI6IHtcclxuICAgICAgICBsZXQgbXVsdGlsaW5lVGV4dEZpZWxkID0gX3RoaXNQYWdlLmNyZWF0ZU11bHRpbGluZVRleHRGaWVsZChcclxuICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgbmV3VyxcclxuICAgICAgICAgIG5ld0gsXHJcbiAgICAgICAgICB4U2NhbGUsXHJcbiAgICAgICAgICBfdGhpc1BhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKG11bHRpbGluZVRleHRGaWVsZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkxhYmVsRmllbGRcIjoge1xyXG4gICAgICAgIGxldCBsYWJlbEZpZWxkID0gX3RoaXNQYWdlLmNyZWF0ZUxhYmVsRmllbGQoXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG5ld1csXHJcbiAgICAgICAgICBuZXdILFxyXG4gICAgICAgICAgeFNjYWxlLFxyXG4gICAgICAgICAgX3RoaXNQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaWVsZERpdi5hcHBlbmRDaGlsZChsYWJlbEZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiU2lnbkZpZWxkXCI6IHtcclxuICAgICAgICBsZXQgc2lnbkZpZWxkRGl2ID0gX3RoaXNQYWdlLmNyZWF0ZVNpZ25GaWVsZChcclxuICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgbmV3VyxcclxuICAgICAgICAgIG5ld0gsXHJcbiAgICAgICAgICBfdGhpc1BhZ2UsXHJcbiAgICAgICAgICBmaWVsZC5tX3VzZURyYXdTaWduLFxyXG4gICAgICAgICAgZmllbGQubV91c2VJbWFnZVNpZ24sXHJcbiAgICAgICAgICBmaWVsZC5tX3VzZVJlZ1NpZ24sXHJcbiAgICAgICAgICBmaWVsZC5tX3JlZ1NpZ25BcGlVcmxcclxuICAgICAgICApO1xyXG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKHNpZ25GaWVsZERpdik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkltYWdlRmllbGRcIjoge1xyXG4gICAgICAgIGxldCBpbWdGaWVsZERpdiA9IF90aGlzUGFnZS5jcmVhdGVJbWFnZUZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIF90aGlzUGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQoaW1nRmllbGREaXYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJDaGVja2JveEZpZWxkXCI6IHtcclxuICAgICAgICBsZXQgY2hlY2tib3hGaWVsZERpdiA9IF90aGlzUGFnZS5jcmVhdGVDaGVja2JveEZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIF90aGlzUGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3hGaWVsZERpdik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIlJhZGlvRmllbGRcIjoge1xyXG4gICAgICAgIGxldCByYWRpb0ZpZWxkRGl2ID0gX3RoaXNQYWdlLmNyZWF0ZVJhZGlvRmllbGQoXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG5ld1csXHJcbiAgICAgICAgICBuZXdILFxyXG4gICAgICAgICAgX3RoaXNQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaWVsZERpdi5hcHBlbmRDaGlsZChyYWRpb0ZpZWxkRGl2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiQ29tYm9ib3hGaWVsZFwiOiB7XHJcbiAgICAgICAgbGV0IGNvbWJvYm94RmllbGREaXYgPSBfdGhpc1BhZ2UuY3JlYXRlQ29tYm9ib3hGaWVsZChcclxuICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgbmV3VyxcclxuICAgICAgICAgIG5ld0gsXHJcbiAgICAgICAgICBfdGhpc1BhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKGNvbWJvYm94RmllbGREaXYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGREaXY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlRmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTrk5zroIjsnbTslrTrpbwg7IOd7ISx7ZWY6rOgIO2VhOuTnOulvCDrp4zrk6Dri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGFnZU5vZGUgUERGLmpz7JeQ7IScIOyDneyEseuQnCBwYWdlIEVsZW1lbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQg656c642U66eB65CY64qUIFBERiBQYWdl7J2YIHZpZXdwb3J0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IO2YhOyerCDrqqjrk5wgbW9kZVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVGaWVsZChcclxuICAgIHBhZ2VOb2RlLFxyXG4gICAgdmlld3BvcnQsXHJcbiAgICByZWFkZXJNb2RlLFxyXG4gICAgZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyLFxyXG4gICAgbWVtb1Byb3BlcnR5QnRuQ2xpY2tFdmVudExpc3RlbmVyXHJcbiAgKSB7XHJcbiAgICBsZXQgX3JlbmRlclBhZ2VEYXRhID0gdGhpcztcclxuICAgIGxldCBvbGRGaWVsZExheWVyID0gcGFnZU5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfRklFTERfTEFZRVJfQ0xBU1NcclxuICAgICk7XHJcbiAgICBpZiAob2xkRmllbGRMYXllciAhPT0gbnVsbCAmJiBvbGRGaWVsZExheWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFnZU5vZGUucmVtb3ZlQ2hpbGQob2xkRmllbGRMYXllcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3JlbmRlclBhZ2VEYXRhLmZpZWxkcyk7XHJcbiAgICBsZXQgZmllbGRMYXllciA9IF9yZW5kZXJQYWdlRGF0YS5jcmVhdGVGaWVsZExheWVyKFxyXG4gICAgICBwYWdlTm9kZS5zdHlsZS53aWR0aCxcclxuICAgICAgcGFnZU5vZGUuc3R5bGUuaGVpZ2h0LFxyXG4gICAgICBDT05TVEFOVFMuUkVBREVSX1BBR0VfRklFTERfTEFZRVJfQ0xBU1NcclxuICAgICk7XHJcbiAgICBpZiAocmVhZGVyTW9kZSAhPT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9JTlBVVF9NT0RFKSB7XHJcbiAgICAgIGZpZWxkTGF5ZXIuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpO1xyXG4gICAgfVxyXG4gICAgcGFnZU5vZGUuYXBwZW5kQ2hpbGQoZmllbGRMYXllcik7XHJcbiAgICBsZXQgZmllbGRXcmFwZXIgPSBudWxsO1xyXG4gICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmaWVsZFdyYXBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGZpZWxkV3JhcGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICBmaWVsZFdyYXBlci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICBmaWVsZFdyYXBlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgZmllbGRMYXllci5hcHBlbmRDaGlsZChmaWVsZFdyYXBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90aGlzUGFnZSA9IHRoaXM7XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICB2YXIgZmllbGQgPSBfcmVuZGVyUGFnZURhdGEuZmllbGRzW2tleV07XHJcbiAgICAgIGxldCBmaWVsZERpdiA9IF9yZW5kZXJQYWdlRGF0YS5jcmVhdGVGaWVsZERpdihcclxuICAgICAgICBfdGhpc1BhZ2UsXHJcbiAgICAgICAgZmllbGQsXHJcbiAgICAgICAgdmlld3BvcnQsXHJcbiAgICAgICAgZmllbGRXcmFwZXJcclxuICAgICAgKTtcclxuICAgICAgZmllbGRXcmFwZXIuYXBwZW5kQ2hpbGQoZmllbGREaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IG9sZE1lbW9MYXllciA9IHBhZ2VOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLlwiICsgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1NcclxuICAgICk7XHJcbiAgICBpZiAob2xkTWVtb0xheWVyICE9PSBudWxsICYmIG9sZE1lbW9MYXllciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhZ2VOb2RlLnJlbW92ZUNoaWxkKG9sZE1lbW9MYXllcik7XHJcbiAgICB9XHJcbiAgICBsZXQgbWVtb0xheWVyID0gX3JlbmRlclBhZ2VEYXRhLmNyZWF0ZUZpZWxkTGF5ZXIoXHJcbiAgICAgIHBhZ2VOb2RlLnN0eWxlLndpZHRoLFxyXG4gICAgICBwYWdlTm9kZS5zdHlsZS5oZWlnaHQsXHJcbiAgICAgIENPTlNUQU5UUy5SRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTXHJcbiAgICApO1xyXG4gICAgaWYgKHJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfSU5QVVRfTU9ERSkge1xyXG4gICAgICBtZW1vTGF5ZXIuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpO1xyXG4gICAgfVxyXG4gICAgcGFnZU5vZGUuYXBwZW5kQ2hpbGQobWVtb0xheWVyKTtcclxuICAgIGxldCBtZW1vV3JhcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbW9XcmFwZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICBtZW1vV3JhcGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBtZW1vV3JhcGVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgbWVtb0xheWVyLmFwcGVuZENoaWxkKG1lbW9XcmFwZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lbW9LZXlzID0gT2JqZWN0LmtleXMoX3JlbmRlclBhZ2VEYXRhLm1lbW9zKTtcclxuICAgIG1lbW9LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICBsZXQgbWVtbyA9IF9yZW5kZXJQYWdlRGF0YS5tZW1vc1trZXldO1xyXG4gICAgICBsZXQgbWVtb0RpdiA9IF9yZW5kZXJQYWdlRGF0YS5jcmVhdGVNZW1vRGl2KFxyXG4gICAgICAgIF90aGlzUGFnZSxcclxuICAgICAgICBtZW1vLFxyXG4gICAgICAgIHZpZXdwb3J0LFxyXG4gICAgICAgIGRlbGV0ZUJ0bkNsaWNrRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICBtZW1vUHJvcGVydHlCdG5DbGlja0V2ZW50TGlzdGVuZXJcclxuICAgICAgKTtcclxuICAgICAgbWVtb1dyYXBlci5hcHBlbmRDaGlsZChtZW1vRGl2KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZVRleHRGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZVRleHRGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiDthY3siqTtirgg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZvbnRTY2FsZSDtj7Dtirgg7YGs6riw7J2YIOuwsOycqFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlICBQZGYgUGFnZSBOdW1iZXJcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVUZXh0RmllbGQoZmllbGQsIHdpZHRoLCBoZWlnaHQsIGZvbnRTY2FsZSwgcGFnZSkge1xyXG4gICAgbGV0IHRleHRGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmaWVsZC5tX2ZvbnROYW1lO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmZvbnRTaXplID0gZmllbGQubV9mb250U2l6ZSAqIGZvbnRTY2FsZSArIFwicHhcIjtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS5jb2xvciA9IGZpZWxkLm1fZm9udENvbG9yO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLnRleHRBbGlnbiA9IGZpZWxkLm1fdGV4dEFsaWduO1xyXG5cclxuICAgIGlmICh0aGlzLm1fcmVhZG9ubHkpIHtcclxuICAgICAgdGV4dEZpZWxkRGl2LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQubV9ib2xkID09PSBcInRydWVcIikge1xyXG4gICAgICB0ZXh0RmllbGREaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgfVxyXG4gICAgdGV4dEZpZWxkRGl2LnZhbHVlID0gZmllbGQubV92YWx1ZTtcclxuICAgIC8vcmdiKDAgMTU4IDIxOCAvIDIwJSk7XHJcbiAgICAvLzFweCBkYXNoZWQgIzkxYWFiYTtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB0ZXh0RmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjaGFuZ2VcIixcclxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkLm1faW5wdXRNaW4pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmICghVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX2lucHV0TWluKSkge1xyXG4gICAgICAgICAgaWYgKE51bWJlcihldnQudGFyZ2V0LnZhbHVlKSA8IE51bWJlcihmaWVsZC5tX2lucHV0TWluKSkge1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LnZhbHVlID0gZmllbGQubV9pbnB1dE1pbjtcclxuICAgICAgICAgICAgZmllbGQubV92YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7J6F66ClIOuylOychOulvCDrspfslrTrgqzsirXri4jri6QuXFxu64uk7IucIOyeheugpe2VtOyjvOyEuOyalC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1faW5wdXRNYXgpKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGV2dC50YXJnZXQudmFsdWUpID4gTnVtYmVyKGZpZWxkLm1faW5wdXRNYXgpKSB7XHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSBmaWVsZC5tX2lucHV0TWF4O1xyXG4gICAgICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCLsnoXroKUg67KU7JyE66W8IOuyl+yWtOuCrOyKteuLiOuLpC5cXG7ri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIVV0aWxzLmlzU3RyaW5nRW1wdHkoZmllbGQubV9kZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgIGxldCBkdlZhbHVlID0gdGhpcy5tX2RlZmF1bHRWYWx1ZUluZm9bZmllbGQubV9kZWZhdWx0VmFsdWVdO1xyXG4gICAgICBpZiAoZHZWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGV4dEZpZWxkRGl2LnZhbHVlID0gZHZWYWx1ZTtcclxuICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZHZWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tX3R5cGUgPT09IFwiRGF0ZUZpZWxkXCIpIHtcclxuICAgICAgbGV0IGR2VmFsdWUgPSBudWxsO1xyXG4gICAgICBpZiAoZmllbGQubV91c2VDdXJyZW50RGF0ZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBkdlZhbHVlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZmxhdHBpY2tyLmZvcm1hdERhdGUoZHZWYWx1ZSwgZmllbGQubV9pbnB1dEZvcm1hdCk7XHJcbiAgICAgIH1cclxuICAgICAgcGFnZS5kYXRlUGlja2VyID0gZmxhdHBpY2tyKHRleHRGaWVsZERpdiwge1xyXG4gICAgICAgIGxvY2FsZTogS29yZWFuLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZpZWxkLm1faW5wdXRGb3JtYXQsXHJcbiAgICAgICAgZGVmYXVsdERhdGU6IGR2VmFsdWUsXHJcbiAgICAgICAgbWluRGF0ZTogZmllbGQubV9pbnB1dE1pbixcclxuICAgICAgICBtYXhEYXRlOiBmaWVsZC5tX2lucHV0TWF4LFxyXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkge1xyXG4gICAgICAgICAgZmllbGQubV92YWx1ZSA9IGRhdGVTdHI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkLm1fdHlwZSA9PT0gXCJOdW1iZXJGaWVsZFwiKSB7XHJcbiAgICAgIHRleHRGaWVsZERpdi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgaWYgKCFVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1faW5wdXRNYXgpKSB7XHJcbiAgICAgICAgdGV4dEZpZWxkRGl2Lm1heCA9IE51bWJlcihmaWVsZC5tX2lucHV0TWF4KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIVV0aWxzLmlzU3RyaW5nRW1wdHkoZmllbGQubV9pbnB1dE1pbikpIHtcclxuICAgICAgICB0ZXh0RmllbGREaXYubWluID0gTnVtYmVyKGZpZWxkLm1faW5wdXRNaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dEZpZWxkRGl2O1xyXG4gIH1cclxuXHJcbiAgc2hvd0NhbGMoZmllbGRJbnB1dCwgZmllbGREaXZYLCBmaWVsZERpdlksIGZpZWxkRGl2SCwgZmllbGRXcmFwZXIpIHtcclxuICAgIGxldCBvbGRDYWxjID0gZmllbGRXcmFwZXIucXVlcnlTZWxlY3RvcihcIi5DYWxjQ29udGFpbmVyXCIpO1xyXG4gICAgaWYgKG9sZENhbGMgIT09IG51bGwgJiYgb2xkQ2FsYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9sZENhbGMucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNhbGNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIkNhbGNDb250YWluZXJcIjtcclxuICAgIGxldCBjYWxjRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgY2FsY0Zvcm0ubmFtZSA9IFwiQ2FsY0Zvcm1cIjtcclxuICAgIGxldCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpc3BsYXlEaXYuY2xhc3NOYW1lID0gXCJDYWxjRGlzcGxheVwiO1xyXG4gICAgbGV0IGRpc3BsYXlSZXN1bHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRpc3BsYXlSZXN1bHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBkaXNwbGF5UmVzdWx0SW5wdXQucGxhY2Vob2xkZXIgPSBcIjBcIjtcclxuICAgIGRpc3BsYXlSZXN1bHRJbnB1dC5uYW1lID0gXCJDYWxjRGlzcGxheVJlc3VsdFwiO1xyXG4gICAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChkaXNwbGF5UmVzdWx0SW5wdXQpO1xyXG4gICAgY2FsY0Zvcm0uYXBwZW5kQ2hpbGQoZGlzcGxheURpdik7XHJcblxyXG4gICAgbGV0IGNhbGNCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNCdXR0b25zRGl2LmNsYXNzTmFtZSA9IFwiQ2FsY0J1dHRvbnNcIjtcclxuICAgIGxldCBjYWxjUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjUm93MS5jbGFzc05hbWUgPSBcIkNhbGNSb3dcIjtcclxuICAgIGxldCBjYWxjQjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjcudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjcudmFsdWUgPSBcIjdcIjtcclxuICAgIGNhbGNCNy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjcudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjgudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjgudmFsdWUgPSBcIjhcIjtcclxuICAgIGNhbGNCOC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjgudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjkudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjkudmFsdWUgPSBcIjlcIjtcclxuICAgIGNhbGNCOS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjkudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQWRkQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNBZGRCLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0FkZEIudmFsdWUgPSBcIitcIjtcclxuICAgIGNhbGNBZGRCLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNBZGRCLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBjYWxjUm93MS5hcHBlbmRDaGlsZChjYWxjQjcpO1xyXG4gICAgY2FsY1JvdzEuYXBwZW5kQ2hpbGQoY2FsY0I4KTtcclxuICAgIGNhbGNSb3cxLmFwcGVuZENoaWxkKGNhbGNCOSk7XHJcbiAgICBjYWxjUm93MS5hcHBlbmRDaGlsZChjYWxjQWRkQik7XHJcblxyXG4gICAgbGV0IGNhbGNSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNSb3cyLmNsYXNzTmFtZSA9IFwiQ2FsY1Jvd1wiO1xyXG4gICAgbGV0IGNhbGNCNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCNC50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCNC52YWx1ZSA9IFwiNFwiO1xyXG4gICAgY2FsY0I0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCNC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNCNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCNS50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCNS52YWx1ZSA9IFwiNVwiO1xyXG4gICAgY2FsY0I1LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCNS52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNCNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCNi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCNi52YWx1ZSA9IFwiNlwiO1xyXG4gICAgY2FsY0I2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCNi52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNTdWJCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY1N1YkIudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjU3ViQi52YWx1ZSA9IFwiLVwiO1xyXG4gICAgY2FsY1N1YkIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY1N1YkIudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNhbGNSb3cyLmFwcGVuZENoaWxkKGNhbGNCNCk7XHJcbiAgICBjYWxjUm93Mi5hcHBlbmRDaGlsZChjYWxjQjUpO1xyXG4gICAgY2FsY1JvdzIuYXBwZW5kQ2hpbGQoY2FsY0I2KTtcclxuICAgIGNhbGNSb3cyLmFwcGVuZENoaWxkKGNhbGNTdWJCKTtcclxuXHJcbiAgICBsZXQgY2FsY1JvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY1JvdzMuY2xhc3NOYW1lID0gXCJDYWxjUm93XCI7XHJcbiAgICBsZXQgY2FsY0IxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0IxLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0IxLnZhbHVlID0gXCIxXCI7XHJcbiAgICBjYWxjQjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0IxLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY0IyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0IyLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0IyLnZhbHVlID0gXCIyXCI7XHJcbiAgICBjYWxjQjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0IyLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY0IzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0IzLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0IzLnZhbHVlID0gXCIzXCI7XHJcbiAgICBjYWxjQjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0IzLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY011bEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjTXVsQi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNNdWxCLnZhbHVlID0gXCIqXCI7XHJcbiAgICBjYWxjTXVsQi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjTXVsQi52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgY2FsY1JvdzMuYXBwZW5kQ2hpbGQoY2FsY0IxKTtcclxuICAgIGNhbGNSb3czLmFwcGVuZENoaWxkKGNhbGNCMik7XHJcbiAgICBjYWxjUm93My5hcHBlbmRDaGlsZChjYWxjQjMpO1xyXG4gICAgY2FsY1JvdzMuYXBwZW5kQ2hpbGQoY2FsY011bEIpO1xyXG5cclxuICAgIGxldCBjYWxjUm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjUm93NC5jbGFzc05hbWUgPSBcIkNhbGNSb3dcIjtcclxuICAgIGxldCBjYWxjQjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjAudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjAudmFsdWUgPSBcIjBcIjtcclxuICAgIGNhbGNCMC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjAudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQUNCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0FDQi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNBQ0IudmFsdWUgPSBcIkFDXCI7XHJcbiAgICBjYWxjQUNCLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjRGl2QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNEaXZCLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0RpdkIudmFsdWUgPSBcIi9cIjtcclxuICAgIGNhbGNEaXZCLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNEaXZCLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY0VxdWFsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNFcXVhbEIudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjRXF1YWxCLnZhbHVlID0gXCI9XCI7XHJcbiAgICBjYWxjRXF1YWxCLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGV2YWwoZGlzcGxheVJlc3VsdElucHV0LnZhbHVlKTtcclxuICAgICAgZmllbGRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZTtcclxuICAgICAgZmllbGRJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICB9KTtcclxuICAgIGNhbGNSb3c0LmFwcGVuZENoaWxkKGNhbGNCMCk7XHJcbiAgICBjYWxjUm93NC5hcHBlbmRDaGlsZChjYWxjQUNCKTtcclxuICAgIGNhbGNSb3c0LmFwcGVuZENoaWxkKGNhbGNEaXZCKTtcclxuICAgIGNhbGNSb3c0LmFwcGVuZENoaWxkKGNhbGNFcXVhbEIpO1xyXG5cclxuICAgIGNhbGNCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbGNSb3cxKTtcclxuICAgIGNhbGNCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbGNSb3cyKTtcclxuICAgIGNhbGNCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbGNSb3czKTtcclxuICAgIGNhbGNCdXR0b25zRGl2LmFwcGVuZENoaWxkKGNhbGNSb3c0KTtcclxuICAgIGNhbGNGb3JtLmFwcGVuZENoaWxkKGNhbGNCdXR0b25zRGl2KTtcclxuICAgIGNhbGNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY0Zvcm0pO1xyXG4gICAgY2FsY0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGNhbGNDb250YWluZXIuc3R5bGUubGVmdCA9IGZpZWxkRGl2WCArIFwicHhcIjtcclxuICAgIGNhbGNDb250YWluZXIuc3R5bGUudG9wID0gZmllbGREaXZZICsgZmllbGREaXZIICsgMTAgKyBcInB4XCI7XHJcblxyXG4gICAgbGV0IGNsb3NlQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNsb3NlQnRuRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLkZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1MpO1xyXG5cclxuICAgIGNhbGNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG5EaXYpO1xyXG5cclxuICAgIGNsb3NlQnRuRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGxldCBvbGRDYWxjID0gZmllbGRXcmFwZXIucXVlcnlTZWxlY3RvcihcIi5DYWxjQ29udGFpbmVyXCIpO1xyXG4gICAgICBpZiAob2xkQ2FsYyAhPT0gbnVsbCAmJiBvbGRDYWxjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvbGRDYWxjLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmaWVsZFdyYXBlci5hcHBlbmRDaGlsZChjYWxjQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVNdWx0aWxpbmVUZXh0RmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVNdWx0aWxpbmVUZXh0RmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24g66mA7Yuw65287J24IO2FjeyKpO2KuCDtlYTrk5wgTm9kZeulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgRmllbGQg7KCV67O0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAgRmllbGQgV2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICBGaWVsZCBIZWlnaHRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZm9udFNjYWxlIO2PsO2KuCDtgazquLDsnZgg67Cw7JyoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgIFBkZiBQYWdlIE51bWJlclxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZU11bHRpbGluZVRleHRGaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgZm9udFNjYWxlLCBwYWdlKSB7XHJcbiAgICBsZXQgbXVsdGlsaW5lVGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuZm9udEZhbWlseSA9IGZpZWxkLm1fZm9udE5hbWU7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuZm9udFNpemUgPSBmaWVsZC5tX2ZvbnRTaXplICogZm9udFNjYWxlICsgXCJweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmNvbG9yID0gZmllbGQubV9mb250Q29sb3I7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUudGV4dEFsaWduID0gZmllbGQubV90ZXh0QWxpZ247XHJcblxyXG4gICAgaWYgKGZpZWxkLm1fcmVhZG9ubHkpIHtcclxuICAgICAgbXVsdGlsaW5lVGV4dEZpZWxkLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChmaWVsZC5tX2JvbGQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICB9XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQudmFsdWUgPSBmaWVsZC5tX3ZhbHVlO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuXHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUucmVzaXplID0gXCJub25lXCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjaGFuZ2VcIixcclxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkLm1fdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBtdWx0aWxpbmVUZXh0RmllbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlU2lnbkZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWNyZWF0ZVNpZ25GaWVsZGFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlU2lnbkZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uICDshJzrqoUg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF90aGlzUGFnZSAgdGhpcyBSZW5kZXJQYWdlRGF0YSBPYmplY3RcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVTaWduRmllbGQoXHJcbiAgICBmaWVsZCxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgX3RoaXNQYWdlLFxyXG4gICAgZHJhd1NpZ24sXHJcbiAgICBpbWFnZVNpZ24sXHJcbiAgICByZWdTaWduLFxyXG4gICAgcmVnU2lnbkFwaVVybFxyXG4gICkge1xyXG4gICAgbGV0IHNpZ25GaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBzaWduRmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBzaWduRmllbGREaXYuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBzaWduRmllbGREaXYuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIHNpZ25GaWVsZERpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgc2lnbkZpZWxkRGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIHNpZ25GaWVsZERpdi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIHNpZ25GaWVsZERpdi5pZCA9IGZpZWxkLm1faWQgKyBcIl9jYW52YXNcIjtcclxuICAgIC8vdGV4dEZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuXHJcbiAgICBpZiAoIXRoaXMubV9yZWFkb25seSkge1xyXG4gICAgICBzaWduRmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgbGV0IHBvcHVwRGl2ID0gX3RoaXNQYWdlLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25FbGVtZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxheWVyUG9wID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcIi5TaWduLUxheWVycG9wXCIpO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJmaWVsZElkXCIsIGZpZWxkLm1faWQpO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJwYWdlTm9cIiwgZmllbGQubV9wYWdlTm8pO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJzaWduV2lkdGhcIiwgd2lkdGgpO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJzaWduSGVpZ2h0XCIsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvKjIwMjMtMTItMTQgKi9cclxuICAgICAgICAgICAgbGF5ZXJQb3Auc2V0QXR0cmlidXRlKFwiZHJhd1NpZ25cIiwgZHJhd1NpZ24pO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJpbWFnZVNpZ25cIiwgaW1hZ2VTaWduKTtcclxuICAgICAgICAgICAgbGF5ZXJQb3Auc2V0QXR0cmlidXRlKFwicmVnU2lnblwiLCByZWdTaWduKTtcclxuICAgICAgICAgICAgbGF5ZXJQb3Auc2V0QXR0cmlidXRlKFwicmVnU2lnbkFwaVVybFwiLCByZWdTaWduQXBpVXJsKTtcclxuXHJcbiAgICAgICAgICBpZiAocG9wdXBEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiVGVtcGxhdGUtSGlkZVwiKSkge1xyXG4gICAgICAgICAgICBwb3B1cERpdi5jbGFzc0xpc3QudG9nZ2xlKFwiVGVtcGxhdGUtSGlkZVwiKTtcclxuICAgICAgICAgICAgcG9wdXBEaXYuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2lnbi1MYXllcnBvcCDsmpTshozrpbwg7LC+7JWEIO2VtOuLuSDrjbDsnbTthLAg7IaN7ISx7J2EIOqwgOyguOyYteuLiOuLpC5cclxuICAgICAgICAgIHZhciBkcmF3U2lnbkZsYWcgPSBsYXllclBvcC5nZXRBdHRyaWJ1dGUoXCJkcmF3c2lnblwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICB2YXIgaW1hZ2VTaWduRmxhZyA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcImltYWdlc2lnblwiKSA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICB2YXIgcmVnU2lnbkZsYWcgPSBsYXllclBvcC5nZXRBdHRyaWJ1dGUoXCJyZWdzaWduXCIpID09PSBcInRydWVcIjtcclxuXHJcbiAgICAgICAgICAvLyDqsIEg7YOt7JeQIOuMgO2VnCDtkZzsi5wg7Jes67aA66W8IOyEpOygle2VqeuLiOuLpC5cclxuICAgICAgICAgIHZhciBkcmF3VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduRHJhd1RhYkJ1dHRvblwiKTtcclxuICAgICAgICAgIHZhciBpbWFnZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhbXBTaWduVGFiQnV0dG9uXCIpO1xyXG4gICAgICAgICAgdmFyIHJlZ1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJlZFNpZ25UYWJCdXR0b25cIik7XHJcblxyXG4gICAgICAgICAgZHJhd1RhYi5zdHlsZS5kaXNwbGF5ID0gZHJhd1NpZ25GbGFnID8gXCJcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgaW1hZ2VUYWIuc3R5bGUuZGlzcGxheSA9IGltYWdlU2lnbkZsYWcgPyBcIlwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICByZWdUYWIuc3R5bGUuZGlzcGxheSA9IHJlZ1NpZ25GbGFnID8gXCJcIiA6IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgIC8vIOq4sOyhtOyXkCAnb24nIO2BtOuemOyKpOulvCDqsIDsp4Qg7YOt7JeQ7IScIO2BtOuemOyKpCDsoJzqsbBcclxuICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLlBvcHVwLVRhYi1NYWluIGxpXCIpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwib25cIikpO1xyXG5cclxuICAgICAgICAgIC8vIOqwgOyepSDrqLzsoIAg64KY7YOA64KY64qUIO2ZnOyEse2ZlCDtg63snYQg7LC+7JWEICdvbicg7YG0656Y7IqkIOy2lOqwgCDrsI8g7YG066atIOydtOuypO2KuCDrsJzsg51cclxuICAgICAgICAgIGlmIChkcmF3U2lnbkZsYWcgJiYgZHJhd1RhYi5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBkcmF3VGFiLmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcclxuICAgICAgICAgICAgZHJhd1RhYi5jbGljaygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChpbWFnZVNpZ25GbGFnICYmIGltYWdlVGFiLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGltYWdlVGFiLmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcclxuICAgICAgICAgICAgaW1hZ2VUYWIuY2xpY2soKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVnU2lnbkZsYWcgJiYgcmVnVGFiLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIHJlZ1RhYi5jbGFzc0xpc3QuYWRkKFwib25cIik7XHJcbiAgICAgICAgICAgIHJlZ1RhYi5jbGljaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgICBfdGhpc1BhZ2Uuc2lnbkNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID1cclxuICAgICAgICAgICAgZmllbGQubV9zaWduUGVuVGhpY2tuZXNzO1xyXG4gICAgICAgICAgX3RoaXNQYWdlLnNpZ25DYW52YXMuZnJlZURyYXdpbmdCcnVzaC5jb2xvciA9IGZpZWxkLm1fc2lnblBlbkNvbG9yO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZmllbGQubV92YWx1ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IFwiXCIgJiZcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IG51bGxcclxuICAgICkge1xyXG4gICAgICBpZiAoZmllbGQuc2lnblR5cGUgPT09IFwicGF0aFwiIHx8IGZpZWxkLnNpZ25UeXBlID09PSBcInRleHRQYXRoXCIpIHtcclxuICAgICAgICBjb25zdCBzaWduRGF0YSA9IEpTT04ucGFyc2UoZmllbGQubV92YWx1ZSk7XHJcbiAgICAgICAgVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKFxyXG4gICAgICAgICAgX3RoaXNQYWdlLm1fb3duZXJOb2RlLFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBzaWduRmllbGREaXYsXHJcbiAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIHNpZ25EYXRhLm9iamVjdHMsXHJcbiAgICAgICAgICBmaWVsZC5tX29yZ1NpZ25XaWR0aCxcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnbkhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGQuc2lnblR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIGxldCBpbWFnZUVsID0gX3RoaXNQYWdlLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wSW1hZ2VUYWdcIik7XHJcbiAgICAgICAgaW1hZ2VFbC5zcmMgPSBmaWVsZC5tX3ZhbHVlO1xyXG4gICAgICAgIGxldCBpbWFnZU9iaiA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1hZ2VFbCk7XHJcbiAgICAgICAgVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKFxyXG4gICAgICAgICAgX3RoaXNQYWdlLm1fb3duZXJOb2RlLFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBzaWduRmllbGREaXYsXHJcbiAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIFtpbWFnZU9ial0sXHJcbiAgICAgICAgICBmaWVsZC5tX29yZ1NpZ25XaWR0aCxcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnbkhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaWduRmllbGREaXY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlSW1hZ2VGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUltYWdlRmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24gIOydtOuvuOyngCDtlYTrk5wgTm9kZeulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgRmllbGQg7KCV67O0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAgRmllbGQgV2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICBGaWVsZCBIZWlnaHRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3RoaXNQYWdlICB0aGlzIFJlbmRlclBhZ2VEYXRhIE9iamVjdFxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZUltYWdlRmllbGQoZmllbGQsIHdpZHRoLCBoZWlnaHQsIF90aGlzUGFnZSkge1xyXG4gICAgbGV0IGltZ0ZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGltZ0ZpZWxkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGltZ0ZpZWxkRGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIGltZ0ZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICBpbWdGaWVsZERpdi5pZCA9IGZpZWxkLm1faWQgKyBcIl9jb250YWluZXJcIjtcclxuXHJcbiAgICBsZXQgaW1nRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1nRmllbGQuc3R5bGUubWF4V2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGltZ0ZpZWxkLnN0eWxlLm1heEhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgaW1nRmllbGQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBpbWdGaWVsZC5zdHlsZS5vYmplY3RGaXQgPSBcImNvbnRhaW5cIjtcclxuICAgIGltZ0ZpZWxkLmlkID0gZmllbGQubV9pZCArIFwiX2NvbnRhaW5lclwiO1xyXG4gICAgaW1nRmllbGREaXYuYXBwZW5kQ2hpbGQoaW1nRmllbGQpO1xyXG5cclxuICAgIGxldCBpbWdGaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW1nRmllbGRJbnB1dC50eXBlID0gXCJmaWxlXCI7XHJcbiAgICBpbWdGaWVsZElucHV0LmlkID0gZmllbGQubV9pZCArIFwiX2ZpbGVfaW5wdXRcIjtcclxuICAgIGltZ0ZpZWxkSW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7XHJcbiAgICBpbWdGaWVsZElucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGltZ0ZpZWxkRGl2LmFwcGVuZENoaWxkKGltZ0ZpZWxkSW5wdXQpO1xyXG5cclxuICAgIC8vdGV4dEZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIGlmICghdGhpcy5tX3JlYWRvbmx5KSB7XHJcbiAgICAgIGltZ0ZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLFxyXG4gICAgICAgIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIGltZ0ZpZWxkSW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWdGaWVsZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBjb25zdCBmaWxlTGlzdCA9IGV2dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlTGlzdFswXTtcclxuICAgICAgaWYgKGZpbGUgPT09IHVuZGVmaW5lZCB8fCBmaWxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHtcclxuICAgICAgICBpZiAoX3RoaXNQYWdlLmFsZXJ0RnVuYyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgX3RoaXNQYWdlLmFsZXJ0RnVuYyhVdGlscy50cmFuc2xhdGVGb3JLZXkoXCJSZWFkZXIub25seUltYWdlTXNnXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIFV0aWxzLmltYWdlRmlsZVRvQmFzZTY0KGZpbGVMaXN0WzBdLCBmdW5jdGlvbiAoaW1nQmFzZTY0RGF0YSkge1xyXG4gICAgICAgIGltZ0ZpZWxkLnNyYyA9IGltZ0Jhc2U2NERhdGE7XHJcbiAgICAgICAgZmllbGQubV92YWx1ZSA9IGltZ0ZpZWxkLnNyYztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGZpZWxkLm1fdmFsdWUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBcIlwiICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBudWxsXHJcbiAgICApIHtcclxuICAgICAgaW1nRmllbGQuc3JjID0gZmllbGQubV92YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbWdGaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVDaGVja2JveEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlQ2hlY2tib3hGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7LK07YGs67CV7IqkIO2VhOuTnCBOb2Rl66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICBGaWVsZCBXaWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgIEZpZWxkIEhlaWdodFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2UgIHRoaXMgUmVuZGVyUGFnZURhdGEgT2JqZWN0XHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlQ2hlY2tib3hGaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgX3RoaXNQYWdlKSB7XHJcbiAgICBsZXQgY2hlY2tib3hGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjaGVja2JveEZpZWxkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIGNoZWNrYm94RmllbGREaXYuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIGNoZWNrYm94RmllbGREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGNoZWNrYm94RmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGNoZWNrYm94RmllbGREaXYuaWQgPSBmaWVsZC5tX2lkICsgXCJfY29udGFpbmVyXCI7XHJcbiAgICBsZXQgY2hlY2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY2hlY2tJbWcuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGNoZWNrSW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgY2hlY2tJbWcuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBjaGVja0ltZy5pZCA9IGZpZWxkLm1faWQgKyBcIl9pbWdcIjtcclxuICAgIGNoZWNrSW1nLnNyYyA9IHRoaXMuY2hlY2tJbWd1cmw7XHJcbiAgICBpZiAoIXRoaXMubV9yZWFkb25seSkge1xyXG4gICAgICBjaGVja2JveEZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLm1fdmFsdWUgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICBmaWVsZC5tX3ZhbHVlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgICAgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmaWVsZC5tX3ZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tib3hGaWVsZERpdi5hcHBlbmRDaGlsZChjaGVja0ltZyk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBcIlwiICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBudWxsXHJcbiAgICApIHtcclxuICAgICAgaWYgKGZpZWxkLm1fdmFsdWUgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hlY2tib3hGaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVSYWRpb0ZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlUmFkaW9GaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg652865SU7JikIO2VhOuTnCBOb2Rl66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICBGaWVsZCBXaWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgIEZpZWxkIEhlaWdodFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2UgIHRoaXMgUmVuZGVyUGFnZURhdGEgT2JqZWN0XHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlUmFkaW9GaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgX3RoaXNQYWdlKSB7XHJcbiAgICBsZXQgcmFkaW9GaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByYWRpb0ZpZWxkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIHJhZGlvRmllbGREaXYuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIHJhZGlvRmllbGREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIHJhZGlvRmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIHJhZGlvRmllbGREaXYuaWQgPSBmaWVsZC5tX2lkICsgXCJfY29udGFpbmVyXCI7XHJcbiAgICBsZXQgcmFkaW9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgcmFkaW9JbWcuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHJhZGlvSW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcmFkaW9JbWcuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICByYWRpb0ltZy5pZCA9IGZpZWxkLm1faWQgKyBcIl9pbWdcIjtcclxuICAgIHJhZGlvSW1nLnNyYyA9IHRoaXMucmFkaW9PZmZJbWd1cmw7XHJcblxyXG4gICAgcmFkaW9GaWVsZERpdi5hcHBlbmRDaGlsZChyYWRpb0ltZyk7XHJcblxyXG4gICAgbGV0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICByYWRpb0lucHV0LnR5cGUgPSBcInJhZGlvXCI7XHJcbiAgICByYWRpb0lucHV0LnZhbHVlID0gZmllbGQubV9kZWZhdWx0VmFsdWU7XHJcbiAgICByYWRpb0lucHV0LmlkID0gZmllbGQubV9pZCArIFwiX3JhZGlvXCI7XHJcbiAgICByYWRpb0lucHV0Lm5hbWUgPSBmaWVsZC5tX2dyb3VwTmFtZTtcclxuICAgIHJhZGlvSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcclxuXHJcbiAgICBpZiAoIXRoaXMubV9yZWFkb25seSkge1xyXG4gICAgICByYWRpb0ZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgcmFkaW9JbnB1dC5jbGljaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2dCk7XHJcbiAgICAgIGxldCB0YXJnZXRSYWRpbyA9IGV2dC50YXJnZXQ7XHJcbiAgICAgIGxldCByZW5kZXJMYXllciA9IGV2dC50YXJnZXQuY2xvc2VzdChcImRpdi5SZWFkZXItUGFnZS1GaWVsZC1MYXllclwiKTtcclxuICAgICAgbGV0IHJhZGlvcyA9IHJlbmRlckxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCJpbnB1dFtuYW1lPSdcIiArIGZpZWxkLm1fZ3JvdXBOYW1lICsgXCInXVwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJhZGlvcy5mb3JFYWNoKGZ1bmN0aW9uIChyYWRpb0VsKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmFkaW9FbCk7XHJcbiAgICAgICAgbGV0IGZpZWxkSWQgPSByYWRpb0VsLmlkLnJlcGxhY2UoXCJfcmFkaW9cIiwgXCJcIik7XHJcbiAgICAgICAgX3RoaXNQYWdlLmZpZWxkc1tmaWVsZElkXS5tX3ZhbHVlID0gdGFyZ2V0UmFkaW8udmFsdWU7XHJcbiAgICAgICAgbGV0IHJhZGlvSW1nRWxJZCA9IHJhZGlvRWwuaWQucmVwbGFjZShcIl9yYWRpb1wiLCBcIl9pbWdcIik7XHJcbiAgICAgICAgbGV0IHJhZGlvSW1nRWwgPSByZW5kZXJMYXllci5xdWVyeVNlbGVjdG9yKFwiI1wiICsgcmFkaW9JbWdFbElkKTtcclxuICAgICAgICBpZiAocmFkaW9FbCA9PT0gdGFyZ2V0UmFkaW8pIHtcclxuICAgICAgICAgIHJhZGlvSW1nRWwuc3JjID0gX3RoaXNQYWdlLnJhZGlvT25JbWd1cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJhZGlvSW1nRWwuc3JjID0gX3RoaXNQYWdlLnJhZGlvT2ZmSW1ndXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmIChcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gXCJcIiAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlID09PSBmaWVsZC5tX2lkXHJcbiAgICApIHtcclxuICAgICAgcmFkaW9JbWcuc3JjID0gX3RoaXNQYWdlLnJhZGlvT25JbWd1cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByYWRpb0ltZy5zcmMgPSBfdGhpc1BhZ2UucmFkaW9PZmZJbWd1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJhZGlvRmllbGREaXY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlTGFiZWxGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUxhYmVsRmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24gTGFiZWwg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGZvbnRTY2FsZSDtj7Dtirgg7YGs6riw7J2YIOuwsOycqFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlICBQZGYgUGFnZSBOdW1iZXJcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVMYWJlbEZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCBmb250U2NhbGUsIHBhZ2UpIHtcclxuICAgIGxldCBsYWJlbEZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5mb250RmFtaWx5ID0gZmllbGQubV9mb250TmFtZTtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUuZm9udFNpemUgPSBmaWVsZC5tX2ZvbnRTaXplICogZm9udFNjYWxlICsgXCJweFwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5jb2xvciA9IGZpZWxkLm1fZm9udENvbG9yO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS50ZXh0QWxpZ24gPSBmaWVsZC5tX3RleHRBbGlnbjtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUubGluZUhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuXHJcbiAgICBpZiAoZmllbGQubV9ib2xkID09PSBcInRydWVcIikge1xyXG4gICAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIH1cclxuICAgIC8vcmdiKDAgMTU4IDIxOCAvIDIwJSk7XHJcbiAgICAvLzFweCBkYXNoZWQgIzkxYWFiYTtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG5cclxuICAgIGlmICghVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX2RlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgbGV0IGR2VmFsdWUgPSB0aGlzLm1fZGVmYXVsdFZhbHVlSW5mb1tmaWVsZC5tX2RlZmF1bHRWYWx1ZV07XHJcbiAgICAgIGlmIChkdlZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZHZWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFiZWxGaWVsZERpdi50ZXh0Q29udGVudCA9IGZpZWxkLm1fdmFsdWU7XHJcbiAgICByZXR1cm4gbGFiZWxGaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVDb21ib2JveEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlQ29tYm9ib3hGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7L2k67O067CV7IqkIO2VhOuTnCBOb2Rl66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICBGaWVsZCBXaWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgIEZpZWxkIEhlaWdodFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2UgIHRoaXMgUmVuZGVyUGFnZURhdGEgT2JqZWN0XHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlQ29tYm9ib3hGaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgX3RoaXNQYWdlKSB7XHJcbiAgICB2YXIgc2VsZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblxyXG4gICAgc2VsZWN0Tm9kZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHNlbGVjdE5vZGUuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgc2VsZWN0Tm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgc2VsZWN0Tm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIHNlbGVjdE5vZGUuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1NFTEVDVF9DTEFTUztcclxuICAgIHZhciBkZWZhdWx0T3B0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBkZWZhdWx0T3B0aW9uTm9kZS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkZWZhdWx0T3B0aW9uTm9kZS50ZXh0ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KFwiUmVhZGVyLnNlbGVjdERlZmF1bHRUZXh0XCIpO1xyXG4gICAgc2VsZWN0Tm9kZS5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uTm9kZSk7XHJcbiAgICBsZXQgdmFsMSA9IGZpZWxkLm1fdmFsdWU7XHJcbiAgICBpZiAoVXRpbHMuaXNTdHJpbmdFbXB0eSh2YWwxKSkge1xyXG4gICAgICB2YWwxID0gZmllbGQubV9kZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21ib2xpc3QgPSBmaWVsZC5tX2NvbWJvYm94TGlzdC5zcGxpdChcIlxcblwiKTtcclxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGNvbWJvbGlzdC5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgIHZhciBvcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uTm9kZS52YWx1ZSA9IGNvbWJvbGlzdFtpZHhdO1xyXG4gICAgICBvcHRpb25Ob2RlLnRleHQgPSBjb21ib2xpc3RbaWR4XTtcclxuICAgICAgaWYgKG9wdGlvbk5vZGUudmFsdWUgPT09IHZhbDEpIHtcclxuICAgICAgICBvcHRpb25Ob2RlLnNlbGVjdGVkID0gXCJzZWxlY3RlZFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdE5vZGUuYXBwZW5kQ2hpbGQob3B0aW9uTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX3ZhbHVlKSkge1xyXG4gICAgICBmaWVsZC5tX3ZhbHVlID0gZmllbGQubV9kZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZWxlY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBsZXQgc2VsZWN0ZWRJZHggPSBldnQudGFyZ2V0Lm9wdGlvbnMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgZmllbGQubV92YWx1ZSA9IGNvbWJvbGlzdFtzZWxlY3RlZElkeCAtIDFdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubV9yZWFkb25seSkge1xyXG4gICAgICBzZWxlY3ROb2RlLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBzZWxlY3ROb2RlO1xyXG4gIH1cclxufVxyXG4iLCIvKiFcclxuICpcclxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDIxIFRhdWZpayBOdXJyb2htYW5cclxuICpcclxuICogPGh0dHBzOi8vZ2l0aHViLmNvbS90YXVmaWstbnVycm9obWFuL2NvbG9yLXBpY2tlcj5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSDigJxTb2Z0d2FyZeKAnSksIHRvIGRlYWxcclxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIOKAnEFTIElT4oCdLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG4gKiBTT0ZUV0FSRS5cclxuICpcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOiAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ1AgPSBmYWN0b3J5KCkpO1xyXG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoeCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHgpO1xyXG4gICAgfTtcclxuICAgIHZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQoeCkge1xyXG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHg7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcclxuICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHg7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzSW5zdGFuY2UgPSBmdW5jdGlvbiBpc0luc3RhbmNlKHgsIG9mKSB7XHJcbiAgICAgICAgcmV0dXJuIHggJiYgaXNTZXQob2YpICYmIHggaW5zdGFuY2VvZiBvZjtcclxuICAgIH07XHJcbiAgICB2YXIgaXNOdWxsID0gZnVuY3Rpb24gaXNOdWxsKHgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbCA9PT0geDtcclxuICAgIH07XHJcbiAgICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcih4KSB7XHJcbiAgICAgICAgcmV0dXJuICdudW1iZXInID09PSB0eXBlb2YgeDtcclxuICAgIH07XHJcbiAgICB2YXIgaXNOdW1lcmljID0gZnVuY3Rpb24gaXNOdW1lcmljKHgpIHtcclxuICAgICAgICByZXR1cm4gL14tPyg/OlxcZCouKT9cXGQrJC8udGVzdCh4ICsgXCJcIik7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QoeCwgaXNQbGFpbikge1xyXG4gICAgICAgIGlmIChpc1BsYWluID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgaXNQbGFpbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNQbGFpbiA/IGlzSW5zdGFuY2UoeCwgT2JqZWN0KSA6IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzU2V0ID0gZnVuY3Rpb24gaXNTZXQoeCkge1xyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQoeCkgJiYgIWlzTnVsbCh4KTtcclxuICAgIH07XHJcbiAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh4KSB7XHJcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnID09PSB0eXBlb2YgeDtcclxuICAgIH07XHJcbiAgICB2YXIgZnJvbUpTT04gPSBmdW5jdGlvbiBmcm9tSlNPTih4KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UoeCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIHZhciBmcm9tU3RhdGVzID0gZnVuY3Rpb24gZnJvbVN0YXRlcygpIHtcclxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbG90ID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICBsb3RbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgW3t9XS5jb25jYXQobG90KSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGZyb21WYWx1ZSA9IGZ1bmN0aW9uIGZyb21WYWx1ZSh4KSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHgubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbVZhbHVlKHgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4geCkge1xyXG4gICAgICAgICAgICAgICAgeFtrXSA9IGZyb21WYWx1ZSh4W2tdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZhbHNlID09PSB4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnVsbCA9PT0geCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ251bGwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ1ZSA9PT0geCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3RydWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIiArIHg7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvQ2FzZUNhbWVsID0gZnVuY3Rpb24gdG9DYXNlQ2FtZWwoeCkge1xyXG4gICAgICAgIHJldHVybiB4LnJlcGxhY2UoL1stXy5dKFxcdykvZywgZnVuY3Rpb24gKG0wLCBtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9DYXNlVXBwZXIobTEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciB0b0Nhc2VVcHBlciA9IGZ1bmN0aW9uIHRvQ2FzZVVwcGVyKHgpIHtcclxuICAgICAgICByZXR1cm4geC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfTtcclxuICAgIHZhciB0b0NvdW50ID0gZnVuY3Rpb24gdG9Db3VudCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHgubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIHZhciB0b0VkZ2UgPSBmdW5jdGlvbiB0b0VkZ2UoeCwgZWRnZXMpIHtcclxuICAgICAgICBpZiAoaXNTZXQoZWRnZXNbMF0pICYmIHggPCBlZGdlc1swXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWRnZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NldChlZGdlc1sxXSkgJiYgeCA+IGVkZ2VzWzFdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlZGdlc1sxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTih4KSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHgpO1xyXG4gICAgfTtcclxuICAgIHZhciB0b051bWJlciA9IGZ1bmN0aW9uIHRvTnVtYmVyKHgsIGJhc2UpIHtcclxuICAgICAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhc2UgPyBwYXJzZUludCh4LCBiYXNlKSA6IHBhcnNlRmxvYXQoeCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvT2JqZWN0Q291bnQgPSBmdW5jdGlvbiB0b09iamVjdENvdW50KHgpIHtcclxuICAgICAgICByZXR1cm4gdG9Db3VudCh0b09iamVjdEtleXMoeCkpO1xyXG4gICAgfTtcclxuICAgIHZhciB0b09iamVjdEtleXMgPSBmdW5jdGlvbiB0b09iamVjdEtleXMoeCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh4KTtcclxuICAgIH07XHJcbiAgICB2YXIgdG9Sb3VuZCA9IGZ1bmN0aW9uIHRvUm91bmQoeCkge1xyXG4gICAgICAgIHJldHVybiBpc051bWJlcih4KSA/IE1hdGgucm91bmQoeCkgOiBudWxsO1xyXG4gICAgfTtcclxuICAgIHZhciB0b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKHgsIGJhc2UpIHtcclxuICAgICAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHgpID8geC50b1N0cmluZyhiYXNlKSA6IFwiXCIgKyB4O1xyXG4gICAgfTtcclxuICAgIHZhciB0b1ZhbHVlID0gZnVuY3Rpb24gdG9WYWx1ZSh4KSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHgubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9WYWx1ZSh2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc051bWVyaWMoeCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvTnVtYmVyKHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiB4KSB7XHJcbiAgICAgICAgICAgICAgICB4W2tdID0gdG9WYWx1ZSh4W2tdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdmYWxzZScgPT09IHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ251bGwnID09PSB4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ3RydWUnID09PSB4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH07XHJcbiAgICB2YXIgRCA9IGRvY3VtZW50O1xyXG4gICAgdmFyIFcgPSB3aW5kb3c7XHJcbiAgICB2YXIgQiA9IEQuYm9keTtcclxuICAgIHZhciBSID0gRC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB2YXIgZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgcGFyc2VWYWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJzZVZhbHVlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcGFyc2VWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWUgPyB0b1ZhbHVlKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXREYXR1bSA9IGZ1bmN0aW9uIGdldERhdHVtKG5vZGUsIGRhdHVtLCBwYXJzZVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlVmFsdWUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBwYXJzZVZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0QXR0cmlidXRlKG5vZGUsICdkYXRhLScgKyBkYXR1bSwgcGFyc2VWYWx1ZSksXHJcbiAgICAgICAgICAgIHYgPSAodmFsdWUgKyBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgaWYgKHBhcnNlVmFsdWUgJiYgdiAmJiAoJ1snID09PSB2WzBdICYmICddJyA9PT0gdi5zbGljZSgtMSkgfHwgJ3snID09PSB2WzBdICYmICd9JyA9PT0gdi5zbGljZSgtMSkpICYmIG51bGwgIT09ICh2ID0gZnJvbUpTT04odmFsdWUpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRQYXJlbnQgPSBmdW5jdGlvbiBnZXRQYXJlbnQobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnBhcmVudE5vZGUgfHwgbnVsbDtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZShub2RlLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBoYXNTdGF0ZShub2RlLCBzdGF0ZSkgJiYgbm9kZVtzdGF0ZV0gfHwgbnVsbDtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0VGV4dCA9IGZ1bmN0aW9uIGdldFRleHQobm9kZSwgdHJpbSkge1xyXG4gICAgICAgIGlmICh0cmltID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgdHJpbSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGF0ZSA9ICd0ZXh0Q29udGVudCc7XHJcbiAgICAgICAgaWYgKCFoYXNTdGF0ZShub2RlLCBzdGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udGVudCA9IG5vZGVbc3RhdGVdO1xyXG4gICAgICAgIGNvbnRlbnQgPSB0cmltID8gY29udGVudC50cmltKCkgOiBjb250ZW50O1xyXG4gICAgICAgIHJldHVybiBcIlwiICE9PSBjb250ZW50ID8gY29udGVudCA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgIH07XHJcbiAgICB2YXIgaGFzU3RhdGUgPSBmdW5jdGlvbiBoYXNTdGF0ZShub2RlLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZSBpbiBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZSA9PT0gVztcclxuICAgIH07XHJcbiAgICB2YXIgbGV0QXR0cmlidXRlID0gZnVuY3Rpb24gbGV0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpLCBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBsZXRFbGVtZW50ID0gZnVuY3Rpb24gbGV0RWxlbWVudChub2RlKSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZS5yZW1vdmUoKSwgcGFyZW50O1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0cnVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgZnJvbVZhbHVlKHZhbHVlKSksIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSB8fCBcIlwiID09PSB2YWx1ZSB8fCAwID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0QXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldENoaWxkTGFzdCA9IGZ1bmN0aW9uIHNldENoaWxkTGFzdChwYXJlbnQsIG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpLCBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXREYXR1bSA9IGZ1bmN0aW9uIHNldERhdHVtKG5vZGUsIGRhdHVtLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSB8fCBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0b0pTT04odmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlKG5vZGUsICdkYXRhLScgKyBkYXR1bSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRFbGVtZW50ID0gZnVuY3Rpb24gc2V0RWxlbWVudChub2RlLCBjb250ZW50LCBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgbm9kZSA9IGlzU3RyaW5nKG5vZGUpID8gRC5jcmVhdGVFbGVtZW50KG5vZGUpIDogbm9kZTtcclxuICAgICAgICBpZiAoaXNPYmplY3QoY29udGVudCkpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKGNvbnRlbnQpKSB7XHJcbiAgICAgICAgICAgIHNldEhUTUwobm9kZSwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc09iamVjdChhdHRyaWJ1dGVzKSkge1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0SFRNTCA9IGZ1bmN0aW9uIHNldEhUTUwobm9kZSwgY29udGVudCwgdHJpbSkge1xyXG4gICAgICAgIGlmICh0cmltID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgdHJpbSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWxsID09PSBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhdGUgPSAnaW5uZXJIVE1MJztcclxuICAgICAgICByZXR1cm4gaGFzU3RhdGUobm9kZSwgc3RhdGUpICYmIChub2RlW3N0YXRlXSA9IHRyaW0gPyBjb250ZW50LnRyaW0oKSA6IGNvbnRlbnQpLCBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5vZGUsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZVtrZXldID0gdmFsdWUsIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUobm9kZSwgc3R5bGUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZS5zdHlsZVt0b0Nhc2VDYW1lbChzdHlsZSldID0gZnJvbVZhbHVlKHZhbHVlKSwgbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0VGV4dCA9IGZ1bmN0aW9uIHNldFRleHQobm9kZSwgY29udGVudCwgdHJpbSkge1xyXG4gICAgICAgIGlmICh0cmltID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgdHJpbSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWxsID09PSBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhdGUgPSAndGV4dENvbnRlbnQnO1xyXG4gICAgICAgIHJldHVybiBoYXNTdGF0ZShub2RlLCBzdGF0ZSkgJiYgKG5vZGVbc3RhdGVdID0gdHJpbSA/IGNvbnRlbnQudHJpbSgpIDogY29udGVudCksIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9mZkV2ZW50ID0gZnVuY3Rpb24gb2ZmRXZlbnQobmFtZSwgbm9kZSwgdGhlbikge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGVuKTtcclxuICAgIH07XHJcbiAgICB2YXIgb2ZmRXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gb2ZmRXZlbnREZWZhdWx0KGUpIHtcclxuICAgICAgICByZXR1cm4gZTsvLyAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9mZkV2ZW50cyA9IGZ1bmN0aW9uIG9mZkV2ZW50cyhuYW1lcywgbm9kZSwgdGhlbikge1xyXG4gICAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mZkV2ZW50KG5hbWUsIG5vZGUsIHRoZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkV2ZW50ID0gZnVuY3Rpb24gb25FdmVudChuYW1lLCBub2RlLCB0aGVuLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCB8fCBvcHRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgdGhlbiwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRXZlbnRzID0gZnVuY3Rpb24gb25FdmVudHMobmFtZXMsIG5vZGUsIHRoZW4sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb25FdmVudChuYW1lLCBub2RlLCB0aGVuLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaG9vaygkKSB7XHJcbiAgICAgICAgdmFyIGhvb2tzID0ge307XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpcmUobmFtZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzU2V0KGhvb2tzW25hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaG9va3NbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAodGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoZW4uYXBwbHkoJCwgZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gJDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9mZihuYW1lLCB0aGVuKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNTZXQobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBob29rcyA9IHt9LCAkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1NldChob29rc1tuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NldCh0aGVuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBfaiA9IGhvb2tzW25hbWVdLmxlbmd0aDsgaSA8IF9qOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoZW4gPT09IGhvb2tzW25hbWVdW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob29rc1tuYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8gQ2xlYW4tdXAgZW1wdHkgaG9vayhzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBob29rc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBob29rc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uKG5hbWUsIHRoZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NldChob29rc1tuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgIGhvb2tzW25hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU2V0KHRoZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBob29rc1tuYW1lXS5wdXNoKHRoZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkLmhvb2tzID0gaG9va3M7XHJcbiAgICAgICAgJC5maXJlID0gZmlyZTtcclxuICAgICAgICAkLm9mZiA9IG9mZjtcclxuICAgICAgICAkLm9uID0gb247XHJcbiAgICAgICAgcmV0dXJuICQ7XHJcbiAgICB9XHJcbiAgICB2YXIgZ2V0QXhpcyA9IGZ1bmN0aW9uIGdldEF4aXMoZXZlbnQsIG5vZGUpIHtcclxuICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMsXHJcbiAgICAgICAgICAgIHggPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgeSA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZ2V0UmVjdChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFt4IC0gcmVjdFswXSwgeSAtIHJlY3RbMV0sIHJlY3RbMF0sIHJlY3RbMV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRSZWN0ID0gZnVuY3Rpb24gZ2V0UmVjdChub2RlKSB7XHJcbiAgICAgICAgdmFyIGgsIHJlY3QsIHcsIHgsIHksIFgsIFk7XHJcbiAgICAgICAgaWYgKGlzV2luZG93KG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHggPSBub2RlLnBhZ2VYT2Zmc2V0IHx8IFIuc2Nyb2xsTGVmdCB8fCBCLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIHkgPSBub2RlLnBhZ2VZT2Zmc2V0IHx8IFIuc2Nyb2xsVG9wIHx8IEIuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB3ID0gbm9kZS5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBoID0gbm9kZS5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgeCA9IHJlY3QubGVmdDtcclxuICAgICAgICAgICAgeSA9IHJlY3QudG9wO1xyXG4gICAgICAgICAgICB3ID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgaCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICBYID0gcmVjdC5yaWdodDtcclxuICAgICAgICAgICAgWSA9IHJlY3QuYm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3gsIHksIHcsIGgsIFgsIFldO1xyXG4gICAgfTtcclxuICAgIGxldCBuYW1lID0gJ0NQJyxcclxuICAgICAgICBkZWxheSA9IFcuc2V0VGltZW91dCxcclxuICAgICAgICBoZXggPSAnSEVYJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbG9zZXN0KGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKChhID0gYS5wYXJlbnRFbGVtZW50KSAmJiBhICE9PSBiKTtcclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH0gLy8gQ29udmVydCBjdXJzb3IgcG9zaXRpb24gdG8gUkdCQVxyXG4gICAgZnVuY3Rpb24gUDJSR0IoYSkge1xyXG4gICAgICAgIGxldCBoID0gK2FbMF0sXHJcbiAgICAgICAgICAgIHMgPSArYVsxXSxcclxuICAgICAgICAgICAgdiA9ICthWzJdLFxyXG4gICAgICAgICAgICByLFxyXG4gICAgICAgICAgICBnLFxyXG4gICAgICAgICAgICBiLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICBwLFxyXG4gICAgICAgICAgICBxLFxyXG4gICAgICAgICAgICB0O1xyXG4gICAgICAgIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcclxuICAgICAgICBmID0gaCAqIDYgLSBpO1xyXG4gICAgICAgIHAgPSB2ICogKDEgLSBzKTtcclxuICAgICAgICBxID0gdiAqICgxIC0gZiAqIHMpO1xyXG4gICAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XHJcbiAgICAgICAgaSA9IGkgfHwgMDtcclxuICAgICAgICBxID0gcSB8fCAwO1xyXG4gICAgICAgIHQgPSB0IHx8IDA7XHJcbiAgICAgICAgc3dpdGNoIChpICUgNikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByID0gdiwgZyA9IHQsIGIgPSBwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByID0gcCwgZyA9IHEsIGIgPSB2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3RvUm91bmQociAqIDI1NSksIHRvUm91bmQoZyAqIDI1NSksIHRvUm91bmQoYiAqIDI1NSksIGlzU2V0KGFbM10pID8gK2FbM10gOiAxXTtcclxuICAgIH0gLy8gQ29udmVydCBSR0JBIHRvIEhTVkFcclxuICAgIGZ1bmN0aW9uIFJHQjJIU1YoYSkge1xyXG4gICAgICAgIGxldCByID0gK2FbMF0gLyAyNTUsXHJcbiAgICAgICAgICAgIGcgPSArYVsxXSAvIDI1NSxcclxuICAgICAgICAgICAgYiA9ICthWzJdIC8gMjU1LFxyXG4gICAgICAgICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcclxuICAgICAgICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXHJcbiAgICAgICAgICAgIGgsXHJcbiAgICAgICAgICAgIHMsXHJcbiAgICAgICAgICAgIHYgPSBtYXgsXHJcbiAgICAgICAgICAgIGQgPSBtYXggLSBtaW47XHJcbiAgICAgICAgcyA9IG1heCA9PT0gMCA/IDAgOiBkIC8gbWF4O1xyXG4gICAgICAgIGlmIChtYXggPT09IG1pbikge1xyXG4gICAgICAgICAgICBoID0gMDsgLy8gQWNocm9tYXRpY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHI6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBnOlxyXG4gICAgICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGI6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoIC89IDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbaCwgcywgdiwgaXNTZXQoYVszXSkgPyArYVszXSA6IDFdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgRVZFTlRTX0RPV04gPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XHJcbiAgICBjb25zdCBFVkVOVFNfTU9WRSA9IFsndG91Y2htb3ZlJywgJ21vdXNlbW92ZSddO1xyXG4gICAgY29uc3QgRVZFTlRTX1JFU0laRSA9IFsnb3JpZW50YXRpb25jaGFuZ2UnLCAncmVzaXplJ107XHJcbiAgICBjb25zdCBFVkVOVFNfVVAgPSBbJ3RvdWNoZW5kJywgJ21vdXNldXAnXTtcclxuXHJcbiAgICBmdW5jdGlvbiBDUChzb3VyY2UsIHN0YXRlID0ge30pIHtcclxuICAgICAgICBpZiAoIUQpIHtcclxuICAgICAgICAgICAgRCA9IGRvY3VtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVcpIHtcclxuICAgICAgICAgICAgVyA9IHdpbmRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFCKSB7XHJcbiAgICAgICAgICAgIEIgPSBELmJvZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghUikge1xyXG4gICAgICAgICAgICBSID0gRC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc291cmNlKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgJCA9IHRoaXM7IC8vIFJldHVybiBuZXcgaW5zdGFuY2UgaWYgYENQYCB3YXMgY2FsbGVkIHdpdGhvdXQgdGhlIGBuZXdgIG9wZXJhdG9yXHJcbiAgICAgICAgaWYgKCFpc0luc3RhbmNlKCQsIENQKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENQKHNvdXJjZSwgc3RhdGUpO1xyXG4gICAgICAgIH0gLy8gQWxyZWFkeSBpbnN0YW50aWF0ZWQsIHNraXAhXHJcbiAgICAgICAgaWYgKHNvdXJjZVtuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZpcmUsXHJcbiAgICAgICAgICAgIGhvb2tzXHJcbiAgICAgICAgfSA9IGhvb2soJCk7XHJcbiAgICAgICAgJC5zdGF0ZSA9IHN0YXRlID0gZnJvbVN0YXRlcyhDUC5zdGF0ZSwgaXNTdHJpbmcoc3RhdGUpID8ge1xyXG4gICAgICAgICAgICBjb2xvcjogc3RhdGVcclxuICAgICAgICB9IDogc3RhdGUgfHwge30pO1xyXG4gICAgICAgICQuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgICQudmlzaWJsZSA9IGZhbHNlOyAvLyBTdG9yZSBjdXJyZW50IGluc3RhbmNlIHRvIGBDUC5pbnN0YW5jZXNgXHJcbiAgICAgICAgQ1AuaW5zdGFuY2VzW3NvdXJjZS5pZCB8fCBzb3VyY2UubmFtZSB8fCB0b09iamVjdENvdW50KENQLmluc3RhbmNlcyldID0gJDsgLy8gTWFyayBjdXJyZW50IERPTSBhcyBhY3RpdmUgY29sb3IgcGlja2VyIHRvIHByZXZlbnQgZHVwbGljYXRlIGluc3RhbmNlXHJcbiAgICAgICAgc291cmNlW25hbWVdID0gMTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdGhlVmFsdWUoZnJvbSkge1xyXG4gICAgICAgICAgICBsZXQgdG8gPSBDUFtpc0Z1bmN0aW9uKENQW3N0YXRlLmNvbG9yXSkgPyBzdGF0ZS5jb2xvciA6IGhleF0sXHJcbiAgICAgICAgICAgICAgICB0aGVDb2xvcjsgLy8gR2V0IHZhbHVlIGZyb20gYGRhdGEtY29sb3JgIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBpZiAodGhlQ29sb3IgPSBnZXREYXR1bShzb3VyY2UsICdjb2xvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTZXQoZnJvbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0dW0oc291cmNlLCAnY29sb3InLCB0byhmcm9tKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8odGhlQ29sb3IpO1xyXG4gICAgICAgICAgICB9IC8vIEdldCB2YWx1ZSBmcm9tIGB2YWx1ZWAgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGlmICh0aGVDb2xvciA9IGdldFN0YXRlKHNvdXJjZSwgJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NldChmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRTdGF0ZShzb3VyY2UsICd2YWx1ZScsIHRvKGZyb20pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0byh0aGVDb2xvcik7XHJcbiAgICAgICAgICAgIH0gLy8gR2V0IHZhbHVlIGZyb20gY29udGVudFxyXG4gICAgICAgICAgICBpZiAodGhlQ29sb3IgPSBnZXRUZXh0KHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NldChmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUZXh0KHNvdXJjZSwgdG8oZnJvbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvKHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTZXQoZnJvbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMV07IC8vIERlZmF1bHQgdG8gYmxhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHN0YXRlWydjbGFzcyddLFxyXG4gICAgICAgICAgICBkb0VudGVyLFxyXG4gICAgICAgICAgICBkb0V4aXQsXHJcbiAgICAgICAgICAgIGRvRml0LFxyXG4gICAgICAgICAgICBkb1Jlc2l6ZSxcclxuICAgICAgICAgICAgdGhlQ29sb3IgPSB0aGVWYWx1ZSgpLFxyXG4gICAgICAgICAgICB0aGVEYXRhID0gUkdCMkhTVih0aGVDb2xvciksXHJcbiAgICAgICAgICAgIHNlbGYgPSBzZXRFbGVtZW50KCdkaXYnLCB7XHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc05hbWVcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIEMgPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgU1YgPSBzZXRFbGVtZW50KCdkaXYnLCB7XHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc05hbWUgKyAnOnN2J1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgSCA9IHNldEVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzTmFtZSArICc6aCdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIEEgPSBzZXRFbGVtZW50KCdkaXYnLCB7XHJcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiBjbGFzc05hbWUgKyAnOmEnXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBTVkNvbG9yID0gc2V0RWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIFNWU2F0dXJhdGlvbiA9IHNldEVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBTVlZhbHVlID0gc2V0RWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIFNWQ3Vyc29yID0gc2V0RWxlbWVudCgnaScpLFxyXG4gICAgICAgICAgICBIQ29sb3IgPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgSEN1cnNvciA9IHNldEVsZW1lbnQoJ2knKSxcclxuICAgICAgICAgICAgQUNvbG9yID0gc2V0RWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIEFQYXR0ZXJuID0gc2V0RWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIEFDdXJzb3IgPSBzZXRFbGVtZW50KCdpJyksXHJcbiAgICAgICAgICAgIFNWU3RhcnRpbmcgPSAwLFxyXG4gICAgICAgICAgICBIU3RhcnRpbmcgPSAwLFxyXG4gICAgICAgICAgICBBU3RhcnRpbmcgPSAwLFxyXG4gICAgICAgICAgICBTVkRyYWdnaW5nID0gMCxcclxuICAgICAgICAgICAgSERyYWdnaW5nID0gMCxcclxuICAgICAgICAgICAgQURyYWdnaW5nID0gMDtcclxuICAgICAgICBzZXRDaGlsZExhc3Qoc2VsZiwgQyk7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEMsIFNWKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoQywgSCk7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEMsIEEpO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChTViwgU1ZDb2xvcik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KFNWLCBTVlNhdHVyYXRpb24pO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChTViwgU1ZWYWx1ZSk7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KFNWLCBTVkN1cnNvcik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEgsIEhDb2xvcik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEgsIEhDdXJzb3IpO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChBLCBBQ29sb3IpO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChBLCBBUGF0dGVybik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEEsIEFDdXJzb3IpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb0FwcGx5KGlzRmlyc3QsIHRvUGFyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggZGF0YVxyXG4gICAgICAgICAgICB0aGVEYXRhID0gUkdCMkhTVih0aGVDb2xvciA9IHRoZVZhbHVlKCkpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIHNldENoaWxkTGFzdCh0b1BhcmVudCB8fCBzdGF0ZS5wYXJlbnQgfHwgQiwgc2VsZik7XHJcbiAgICAgICAgICAgICAgICAkLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvRW50ZXIgPSB0b1BhcmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9BcHBseSgwLCB0b1BhcmVudCksIGZpcmUoJ2VudGVyJywgdGhlQ29sb3IpLCAkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb0V4aXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0UGFyZW50KHNlbGYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0RWxlbWVudChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAkLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnRzKEVWRU5UU19ET1dOLCBTViwgZG9Eb3duU1YpO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnRzKEVWRU5UU19ET1dOLCBILCBkb0Rvd25IKTtcclxuICAgICAgICAgICAgICAgIG9mZkV2ZW50cyhFVkVOVFNfRE9XTiwgQSwgZG9Eb3duQSk7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX01PVkUsIEQsIGRvTW92ZSk7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX1VQLCBELCBkb1N0b3ApO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnRzKEVWRU5UU19SRVNJWkUsIFcsIGRvUmVzaXplKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlKCdleGl0JywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb0ZpdCA9IHRvID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByb290UmVjdCA9IGdldFJlY3QoUiksXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlUmVjdCA9IGdldFJlY3Qoc291cmNlKSxcclxuICAgICAgICAgICAgICAgICAgICB3aW5SZWN0ID0gZ2V0UmVjdChXKSxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxCYXJIZWlnaHQgPSB3aW5SZWN0WzNdIC0gUi5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBzY3JvbGwgYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSB3aW5SZWN0WzJdIC0gcm9vdFJlY3RbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsIGJhclxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZSZWN0ID0gZ2V0UmVjdChzZWxmKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmSGVpZ2h0ID0gc2VsZlJlY3RbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZldpZHRoID0gc2VsZlJlY3RbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZkxlZnQgPSBzb3VyY2VSZWN0WzBdICsgd2luUmVjdFswXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmVG9wID0gc291cmNlUmVjdFsxXSArIHdpblJlY3RbMV0gKyBzb3VyY2VSZWN0WzNdOyAvLyBEcm9wIVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2V0KHRvWzBdKSAmJiAoc2VsZkxlZnQgPSB0b1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZXQodG9bMV0pICYmIChzZWxmVG9wID0gdG9bMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWluWCA9IHdpblJlY3RbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblkgPSB3aW5SZWN0WzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhYID0gd2luUmVjdFswXSArIHdpblJlY3RbMl0gLSBzZWxmV2lkdGggLSBzY3JvbGxCYXJXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4WSA9IHdpblJlY3RbMV0gKyB3aW5SZWN0WzNdIC0gc2VsZkhlaWdodCAtIHNjcm9sbEJhckhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmTGVmdCA9IHRvRWRnZShzZWxmTGVmdCwgW21pblgsIG1heFhdKSA+PiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZUb3AgPSB0b0VkZ2Uoc2VsZlRvcCwgW21pblksIG1heFldKSA+PiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoc2VsZiwgJ2xlZnQnLCBzZWxmTGVmdCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZShzZWxmLCAndG9wJywgc2VsZlRvcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyZSgnZml0JywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkb1Jlc2l6ZSA9ICgpID0+IGRvRml0KCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb0Rvd25BKGUpIHtcclxuICAgICAgICAgICAgICAgICQuY3VycmVudCA9IEE7XHJcbiAgICAgICAgICAgICAgICBBU3RhcnRpbmcgPSBBRHJhZ2dpbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgZG9Nb3ZlKGUpO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb0Rvd25IKGUpIHtcclxuICAgICAgICAgICAgICAgICQuY3VycmVudCA9IEg7XHJcbiAgICAgICAgICAgICAgICBIU3RhcnRpbmcgPSBIRHJhZ2dpbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgZG9Nb3ZlKGUpO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb0Rvd25TVihlKSB7XHJcbiAgICAgICAgICAgICAgICAkLmN1cnJlbnQgPSBTVjtcclxuICAgICAgICAgICAgICAgIFNWU3RhcnRpbmcgPSBTVkRyYWdnaW5nID0gMTtcclxuICAgICAgICAgICAgICAgIGRvTW92ZShlKTtcclxuICAgICAgICAgICAgICAgIG9mZkV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9Nb3ZlKGUpIHtcclxuICAgICAgICAgICAgICAgIFNWRHJhZ2dpbmcgJiYgZG9TZXRTVkN1cnNvcihlKTtcclxuICAgICAgICAgICAgICAgIEhEcmFnZ2luZyAmJiBkb1NldEhDdXJzb3IoZSk7XHJcbiAgICAgICAgICAgICAgICBBRHJhZ2dpbmcgJiYgZG9TZXRBQ3Vyc29yKGUpO1xyXG4gICAgICAgICAgICAgICAgdGhlQ29sb3IgPSBQMlJHQih0aGVEYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChTVkRyYWdnaW5nIHx8IEhEcmFnZ2luZyB8fCBBRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlKFNWU3RhcnRpbmcgfHwgSFN0YXJ0aW5nIHx8IEFTdGFydGluZyA/ICdzdGFydCcgOiAnZHJhZycsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlKCdjaGFuZ2UnLCB0aGVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTVlN0YXJ0aW5nID0gSFN0YXJ0aW5nID0gQVN0YXJ0aW5nID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9TZXRDb2xvcigpIHtcclxuICAgICAgICAgICAgICAgIGRvU2V0Q3Vyc29yKHRoZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBQMlJHQih0aGVEYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICBiID0gUDJSR0IoW3RoZURhdGFbMF0sIDEsIDFdKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKFNWQ29sb3IsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYignICsgYlswXSArICcsJyArIGJbMV0gKyAnLCcgKyBiWzJdICsgJyknKTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKEFDb2xvciwgJ2JhY2tncm91bmQtaW1hZ2UnLCAnbGluZWFyLWdyYWRpZW50KHJnYignICsgYVswXSArICcsJyArIGFbMV0gKyAnLCcgKyBhWzJdICsgJyksdHJhbnNwYXJlbnQpJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvU2V0Q3Vyc29yKHgpIHtcclxuICAgICAgICAgICAgICAgIGlzU2V0KHhbMV0pICYmIHNldFN0eWxlKFNWQ3Vyc29yLCAncmlnaHQnLCBTVldpZHRoIC0gU1ZXaWR0aEN1cnNvciAvIDIgLSBTVldpZHRoICogK3hbMV0pO1xyXG4gICAgICAgICAgICAgICAgaXNTZXQoeFsyXSkgJiYgc2V0U3R5bGUoU1ZDdXJzb3IsICd0b3AnLCBTVkhlaWdodCAtIFNWSGVpZ2h0Q3Vyc29yIC8gMiAtIFNWSGVpZ2h0ICogK3hbMl0pO1xyXG4gICAgICAgICAgICAgICAgaXNTZXQoeFswXSkgJiYgc2V0U3R5bGUoSEN1cnNvciwgJ3RvcCcsIEhIZWlnaHQgLSBISGVpZ2h0Q3Vyc29yIC8gMiAtIEhIZWlnaHQgKiAreFswXSk7XHJcbiAgICAgICAgICAgICAgICBpc1NldCh4WzNdKSAmJiBzZXRTdHlsZShBQ3Vyc29yLCAndG9wJywgQUhlaWdodCAtIEFIZWlnaHRDdXJzb3IgLyAyIC0gQUhlaWdodCAqICt4WzNdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9TZXRBQ3Vyc29yKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoZURhdGFbM10gPSAoQUhlaWdodCAtIHRvRWRnZShnZXRBeGlzKGUsIEEpWzFdLCBbMCwgQUhlaWdodF0pKSAvIEFIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBkb1NldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvU2V0SEN1cnNvcihlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVEYXRhWzBdID0gKEhIZWlnaHQgLSB0b0VkZ2UoZ2V0QXhpcyhlLCBIKVsxXSwgWzAsIEhIZWlnaHRdKSkgLyBISGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZG9TZXRDb2xvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb1NldFNWQ3Vyc29yKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBTVlBvaW50ID0gZ2V0QXhpcyhlLCBTViksXHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRvRWRnZShTVlBvaW50WzBdLCBbMCwgU1ZXaWR0aF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB0b0VkZ2UoU1ZQb2ludFsxXSwgWzAsIFNWSGVpZ2h0XSk7XHJcbiAgICAgICAgICAgICAgICB0aGVEYXRhWzFdID0gMSAtIChTVldpZHRoIC0geCkgLyBTVldpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhlRGF0YVsyXSA9IChTVkhlaWdodCAtIHkpIC8gU1ZIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBkb1NldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvU3RvcChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVDb2xvciA9IFAyUkdCKHRoZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBpc1NvdXJjZSA9IHNvdXJjZSA9PT0gZ2V0Q2xvc2VzdCh0LCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZiA9IHNlbGYgPT09IGdldENsb3Nlc3QodCwgc2VsZik7XHJcbiAgICAgICAgICAgICAgICAkLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1NvdXJjZSAmJiAhaXNTZWxmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvb2tzLmJsdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZSgnYmx1cicsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGljayBvdXRzaWRlIHRoZSBzb3VyY2Ugb3IgcGlja2VyIGVsZW1lbnQgdG8gZXhpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU1ZEcmFnZ2luZyB8fCBIRHJhZ2dpbmcgfHwgQURyYWdnaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQYXJlbnQoc2VsZikgJiYgZG9FeGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NlbGYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNWRHJhZ2dpbmcgfHwgSERyYWdnaW5nIHx8IEFEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZSgnc3RvcCcsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNWRHJhZ2dpbmcgPSBIRHJhZ2dpbmcgPSBBRHJhZ2dpbmcgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBTVlJlY3QgPSBnZXRSZWN0KFNWKSxcclxuICAgICAgICAgICAgICAgIFNWUmVjdEN1cnNvciA9IGdldFJlY3QoU1ZDdXJzb3IpLFxyXG4gICAgICAgICAgICAgICAgSFJlY3QgPSBnZXRSZWN0KEgpLFxyXG4gICAgICAgICAgICAgICAgSFJlY3RDdXJzb3IgPSBnZXRSZWN0KEhDdXJzb3IpLFxyXG4gICAgICAgICAgICAgICAgQVJlY3QgPSBnZXRSZWN0KEEpLFxyXG4gICAgICAgICAgICAgICAgQVJlY3RDdXJzb3IgPSBnZXRSZWN0KEFDdXJzb3IpLFxyXG4gICAgICAgICAgICAgICAgU1ZIZWlnaHQgPSBTVlJlY3RbM10sXHJcbiAgICAgICAgICAgICAgICBTVkhlaWdodEN1cnNvciA9IFNWUmVjdEN1cnNvclszXSxcclxuICAgICAgICAgICAgICAgIFNWV2lkdGggPSBTVlJlY3RbMl0sXHJcbiAgICAgICAgICAgICAgICBTVldpZHRoQ3Vyc29yID0gU1ZSZWN0Q3Vyc29yWzJdLFxyXG4gICAgICAgICAgICAgICAgSEhlaWdodCA9IEhSZWN0WzNdLFxyXG4gICAgICAgICAgICAgICAgSEhlaWdodEN1cnNvciA9IEhSZWN0Q3Vyc29yWzNdLFxyXG4gICAgICAgICAgICAgICAgQUhlaWdodCA9IEFSZWN0WzNdLFxyXG4gICAgICAgICAgICAgICAgQUhlaWdodEN1cnNvciA9IEFSZWN0Q3Vyc29yWzNdO1xyXG4gICAgICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX0RPV04sIHNvdXJjZSwgZG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICBkZWxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZSgnY2hhbmdlJywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvbkV2ZW50cyhFVkVOVFNfRE9XTiwgU1YsIGRvRG93blNWKTtcclxuICAgICAgICAgICAgICAgIG9uRXZlbnRzKEVWRU5UU19ET1dOLCBILCBkb0Rvd25IKTtcclxuICAgICAgICAgICAgICAgIG9uRXZlbnRzKEVWRU5UU19ET1dOLCBBLCBkb0Rvd25BKTtcclxuICAgICAgICAgICAgICAgIG9uRXZlbnRzKEVWRU5UU19NT1ZFLCBELCBkb01vdmUpO1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX1VQLCBELCBkb1N0b3ApO1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX1JFU0laRSwgVywgZG9SZXNpemUpO1xyXG4gICAgICAgICAgICAgICAgZG9GaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb1NldENvbG9yKCk7XHJcbiAgICAgICAgICAgICQuY29sb3IgPSAociwgZywgYiwgYSkgPT4gQ1BbaXNGdW5jdGlvbihDUFtzdGF0ZS5jb2xvcl0pID8gc3RhdGUuY29sb3IgOiBoZXhdKFtyLCBnLCBiLCBhXSk7XHJcbiAgICAgICAgICAgICQuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICQuZW50ZXIgPSBkb0VudGVyO1xyXG4gICAgICAgICAgICAkLmV4aXQgPSBkb0V4aXQ7XHJcbiAgICAgICAgICAgICQuZml0ID0gZG9GaXQ7XHJcbiAgICAgICAgICAgICQuZ2V0ID0gKCkgPT4gdGhlVmFsdWUoKTtcclxuICAgICAgICAgICAgJC5wb3AgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZVtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkOyAvLyBBbHJlYWR5IGVqZWN0ZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2VbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX0RPV04sIHNvdXJjZSwgZG9DbGljayk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9FeGl0KCksIGZpcmUoJ3BvcCcsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJC5zZXQgPSAociwgZywgYiwgYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlRGF0YSA9IFJHQjJIU1YoW3IsIGcsIGIsIGFdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb1NldENvbG9yKCksICQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQuc2VsZiA9IHNlbGY7XHJcbiAgICAgICAgICAgICQudmFsdWUgPSAociwgZywgYiwgYSkgPT4gKCQuc2V0KHIsIGcsIGIsIGEpLCBmaXJlKCdjaGFuZ2UnLCBbciwgZywgYiwgYV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9BcHBseSgxKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9DbGljayhlKSB7XHJcbiAgICAgICAgICAgIGlmIChob29rcy5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgZmlyZSgnZm9jdXMnLCB0aGVDb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU291cmNlID0gc291cmNlID09PSBnZXRDbG9zZXN0KHQsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAhZ2V0UGFyZW50KHNlbGYpICYmIGRvRW50ZXIoc3RhdGUucGFyZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9FeGl0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICQ7XHJcbiAgICB9XHJcbiAgICBDUFtoZXhdID0geCA9PiB7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKHgpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9ICh4ID0geC50cmltKCkpLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKCg0ID09PSBjb3VudCB8fCA3ID09PSBjb3VudCkgJiYgJyMnID09PSB4WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoL14jKFthLWZcXGRdezN9KXsxLDJ9JC9pLnRlc3QoeCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoNCA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0b051bWJlcih4WzFdICsgeFsxXSwgMTYpLCB0b051bWJlcih4WzJdICsgeFsyXSwgMTYpLCB0b051bWJlcih4WzNdICsgeFszXSwgMTYpLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0b051bWJlcih4WzFdICsgeFsyXSwgMTYpLCB0b051bWJlcih4WzNdICsgeFs0XSwgMTYpLCB0b051bWJlcih4WzVdICsgeFs2XSwgMTYpLCAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoNSA9PT0gY291bnQgfHwgOSA9PT0gY291bnQpICYmICcjJyA9PT0geFswXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKC9eIyhbYS1mXFxkXXszLDR9KXsxLDJ9JC9pLnRlc3QoeCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoNSA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0b051bWJlcih4WzFdICsgeFsxXSwgMTYpLCB0b051bWJlcih4WzJdICsgeFsyXSwgMTYpLCB0b051bWJlcih4WzNdICsgeFszXSwgMTYpLCB0b051bWJlcih4WzRdICsgeFs0XSwgMTYpIC8gMjU1XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0b051bWJlcih4WzFdICsgeFsyXSwgMTYpLCB0b051bWJlcih4WzNdICsgeFs0XSwgMTYpLCB0b051bWJlcih4WzVdICsgeFs2XSwgMTYpLCB0b051bWJlcih4WzddICsgeFs4XSwgMTYpIC8gMjU1XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDFdOyAvLyBEZWZhdWx0IHRvIGJsYWNrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnIycgKyAoJzAwMDAwMCcgKyB0b1N0cmluZygreFsyXSB8ICt4WzFdIDw8IDggfCAreFswXSA8PCAxNiwgMTYpKS5zbGljZSgtNikgKyAoaXNTZXQoeFszXSkgJiYgeFszXSA8IDEgPyB0b1N0cmluZyh0b1JvdW5kKHhbM10gKiAyNTUpICsgMHgxMDAwMCwgMTYpLnN1YnN0cigtMikgOiBcIlwiKTtcclxuICAgIH07XHJcbiAgICBDUC5pbnN0YW5jZXMgPSB7fTtcclxuICAgIENQLnN0YXRlID0ge1xyXG4gICAgICAgICdjbGFzcyc6ICdjb2xvci1waWNrZXInLFxyXG4gICAgICAgICdjb2xvcic6IGhleCxcclxuICAgICAgICAncGFyZW50JzogbnVsbFxyXG4gICAgfTtcclxuICAgIENQLnZlcnNpb24gPSAnMi4yLjAnO1xyXG4gICAgcmV0dXJuIENQO1xyXG59KTsiLCIvKipcclxuICogQG1vZHVsZSBUZW1wbGF0ZS9VdGlsc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4vLi4vQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gJy4vLi4vVHJhbnNsYXRvci90cmFuc2xhdG9yLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIFV0aWwg66qo7J2MIENsYXNzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGZvbnRGYW1pbHlDb21ib0JveCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2ZvbnRGYW1pbHlDb21ib0JveH1cclxuICogQHByb3BlcnR5IHtBcnJheX0gZGF0ZUZvcm1hdENvbWJvQm94IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZGF0ZUZvcm1hdENvbWJvQm94fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBmb250U2l6ZUNvbWJvQm94IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZm9udFNpemVDb21ib0JveH1cclxuICogQHByb3BlcnR5IHtBcnJheX0gc2lnblBlbldpZHRoQ29tYm9Cb3gge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzaWduUGVuV2lkdGhDb21ib0JveH1cclxuICogQHByb3BlcnR5IHtBcnJheX0gdXNlckluZm9PcHRpb25MaXN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjdXNlckluZm9PcHRpb25MaXN0fVxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gdXNlckluZm9PcHRpb25MaXN0Q291bnQge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN1c2VySW5mb09wdGlvbkxpc3RDb3VudH1cclxuICogQHByb3BlcnR5IHtBcnJheX0gZHZGaWVsZE9wdGlvbkxpc3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNkdkZpZWxkT3B0aW9uTGlzdH1cclxuICpcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYWRkT2JqZWN0c1RvQ2FudmFzIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjYWRkT2JqZWN0c1RvQ2FudmFzfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBhZGRTaWduU3ZnVG9DYW52YXMge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNhZGRTaWduU3ZnVG9DYW52YXN9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGJvdW5kaW5nUmVjdFRvUmVjdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2JvdW5kaW5nUmVjdFRvUmVjdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvbmVGYWJyaWNDYW52YXMge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjbG9uZUZhYnJpY0NhbnZhc31cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvbmVPYmplY3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjbG9uZU9iamVjdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvbmVPYmplY3RUb09iamVjdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb25lT2JqZWN0VG9PYmplY3R9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNsb3NlU2VsZWN0MlRhZyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb3NlU2VsZWN0MlRhZ31cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXN0ZXJpc2tEaXYge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBc3Rlcmlza0Rpdn1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmJ1dGVQb3B1cCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJidXRlUG9wdXB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUF0dHJpYnV0ZUNoZWNrQm94Tm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUNoZWNrQm94Tm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlQ29sb3JJbnB1dE5vZGUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVDb2xvcklucHV0Tm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlRGF0ZUlucHV0Tm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZURhdGVJbnB1dE5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlU2VsZWN0Tm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVNlbGVjdE5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUF0dHJpYnV0ZVRvZ2dsZUJ1dHRvbk5vZGUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVUb2dnbGVCdXR0b25Ob2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVEaXZpZGVyTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZURpdmlkZXJOb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVGaWVsZERlbGV0ZUJ0biB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUZpZWxkRGVsZXRlQnRufVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVUZXh0QWxpZ25CdXR0b25Ob2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dEFsaWduQnV0dG9uTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlVGV4dEF0dHJidXRlTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRBdHRyYnV0ZU5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZpZWxkQW5jZXN0b3JzIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZmllbGRBbmNlc3RvcnN9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZpbmRTYW1lQW5jZXN0b3Ige0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNmaW5kU2FtZUFuY2VzdG9yfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRGb25TaXplQ29tYm9Cb3gge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNnZXRGb25TaXplQ29tYm9Cb3h9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGdldFVzZXJJbmZvT3B0c0xpc3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNnZXRVc2VySW5mb09wdHNMaXN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBpbWFnZUZpbGVUb0Jhc2U2NCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2ltYWdlRmlsZVRvQmFzZTY0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBpc0VtcHR5T2JqZWN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaXNFbXB0eU9iamVjdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaXNTaG93QXN0ZXJpc2tEaXYge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpc1Nob3dBc3Rlcmlza0Rpdn1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaXNTdHJpbmdFbXB0eSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2lzU3RyaW5nRW1wdHl9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG1lcmdlRmllbGRzQkJveCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLm1lcmdlRmllbGRzQkJveCNhZGRPYmplY3RzVG9DYW52YXN9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG1lcmdlT2JqZWN0c1JlY3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNtZXJnZU9iamVjdHNSZWN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBtZXJnZVJlY3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNtZXJnZVJlY3R9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHJlcG9zaXRpb25GaWVsZERlbGV0ZUJ0biB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3JlcG9zaXRpb25GaWVsZERlbGV0ZUJ0bn1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2V0RFZGaWVsZE9wdHNMaXN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0RFZGaWVsZE9wdHNMaXN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzZXRVc2VySW5mb09wdHNMaXN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0VXNlckluZm9PcHRzTGlzdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2V0VXNlckluZm9PcHRzTGlzdENvdW50IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0VXNlckluZm9PcHRzTGlzdENvdW50fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzaG93QXN0ZXJpc2tEaXYge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzaG93QXN0ZXJpc2tEaXZ9XHJcbiAqIFxyXG4gKiBARmlsZU5hbWUgdXRpbHMuanNcclxuICogQHNpbmNlIDIwMjEuMDUuMzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZm9udEZhbWlseUNvbWJvQm94XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7Y+w7Yq4IOyiheulmFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9udEZhbWlseUNvbWJvQm94ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCLrp5HsnYAg6rOg65SVXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIk1hbGd1bkdvdGhpY1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi67CU7YOV7LK0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkJhdGFuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNkYXRlRm9ybWF0Q29tYm9Cb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDrgqDsp5wg7Y+s66mnIOumrOyKpO2KuFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGF0ZUZvcm1hdENvbWJvQm94ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJZWVlZLU1NLUREXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlktbS1kXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJZWVlZL01NL0REXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlkvbS9kXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJZWVlZLk1NLkREXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIlkubS5kXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgc3RhdGljIHJhZGlvVHlwZUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlR5cGUgMVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogQ09OU1RBTlRTLlJBRElPX1RZUEVfMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlR5cGUgMlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogQ09OU1RBTlRTLlJBRElPX1RZUEVfMlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2ZvbnRTaXplQ29tYm9Cb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtj7Dtirgg7IKs7J207KaIIOy9pOuztOuwleyKpCDrpqzsiqTtirhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvbnRTaXplQ29tYm9Cb3ggPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzaWduUGVuV2lkdGhDb21ib0JveFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqhe2OnCDrkZDqu5gg7L2k67O067CV7IqkIOumrOyKpO2KuFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2lnblBlbldpZHRoQ29tYm9Cb3ggPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN1c2VySW5mb09wdGlvbkxpc3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDshJzrqoXsnpAg66as7Iqk7Yq4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1c2VySW5mb09wdGlvbkxpc3QgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjdXNlckluZm9PcHRpb25MaXN0Q291bnRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDshJzrqoXsnpAg66as7Iqk7Yq4IOqwr+yImFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdXNlckluZm9PcHRpb25MaXN0Q291bnQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2R2RmllbGRPcHRpb25MaXN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg6riw67O46rCSIOyYteyFmCDrpqzsiqTtirhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGR2RmllbGRPcHRpb25MaXN0ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NpZ25UYWJTaG93T3B0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qF7YOtIOuztOyehC/slYjrs7TsnoQg6riw67O46rCSIOyYteyFmFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2lnblRhYlNob3dPcHQgPSB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjbG9jYWxlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZiE7J6sIOyWuOyWtFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbG9jYWxlID0gXCJrb1wiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN0cmFuc2xhdG9yXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg64uk6rWt7Ja0IOyCrOyaqeydhCDsnITtlZwgT2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3Ioe1xyXG4gICAgICAgIGZpbGVzTG9jYXRpb246ICcvanMvcGRmX2Zvcm0vaTE4bidcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogXHJcbiAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGlzRW1wdHlPYmplY3RcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpc0VtcHR5T2JqZWN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIE9iamVjdOqwgCDruYTslrTsnojripTsp4Ag7LK07YGsXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gcGFyYW1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHlPYmplY3QocGFyYW0pIHtcclxuICAgICAgICBpZiAocGFyYW0gPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwYXJhbSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtKS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY2xvc2VTZWxlY3QyVGFnXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvc2VTZWxlY3QyVGFnXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgU2VsZWN0MuqwgCDsl7TroKTsnojripQg7YOc6re466W8IOyytO2BrO2VmOyXrCDri6vripTri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2xvc2VTZWxlY3QyVGFnKG5vZGUpIHtcclxuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaSAuXCIgKyBDT05TVEFOVFMuRURJVE9SX0FUVFJfU0VMRUNUX0NMQVNTKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChlbCkuc2VsZWN0MignY2xvc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3JlbW92ZUFsbENoaWxkTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VtOuLue2VmOuKlCBOb2Rl7J2YIOuqqOuToCBDaGlsZOulvCDsoJzqsbDtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZW1vdmVBbGxDaGlsZE5vZGUobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5sYXN0Q2hpbGQuaWQgPT09IENPTlNUQU5UUy5FRElUT1JfQVRUUl9QQU5FTF9JRCkge1xyXG4gICAgICAgICAgICAgICAgVXRpbHMuY2xvc2VTZWxlY3QyVGFnKG5vZGUubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlUGFuZWxOb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlUGFuZWxOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZWE65Oc7J2YIOyGjeyEseydhCDrs7Tsl6zspIQgUGFuZWzrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGUoKSB7XHJcbiAgICAgICAgdmFyIHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIHBhbmVsLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9QQU5FTF9DTEFTUztcclxuICAgICAgICBwYW5lbC5pZCA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9QQU5FTF9JRDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOuTnOydmCDsho3shLHspJEgaW5wdXTsnYQg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkUHJvcGV0eU5hbWUg7IKs7Jqp7ZWgIEZpZWxk7J2YIOyGjeyEsSDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAgRWxlbWVudOyXkCDsgqzsmqntlaAg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIGlucHV07JeQIOuTpOyWtOqwiCDqsJJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlVG9vbHRpcCAgVG9vbFRpcOyXkCDrk6TslrTqsIgg64K07JqpXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMgIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCB0aXRsZSwgdmFsdWUsIHR5cGUsIG5vZGVUb29sdGlwLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfV1JBUF9DTEFTUztcclxuICAgICAgICB2YXIgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9DTEFTUztcclxuICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBVdGlscy50cmFuc2xhdGVGb3JLZXkodGl0bGUpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWkxOG5cIiwgdGl0bGUpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfSU5QVVRfQ0xBU1M7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgZmllbGRQcm9wZXR5TmFtZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlICE9PSBcIlwiICkge1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZVdyYXApO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVJbnB1dE5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVJbnB1dE5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTrk5zsnZgg7IaN7ISx7KSRIHRleHRhcmXrpbwg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkUHJvcGV0eU5hbWUg7IKs7Jqp7ZWgIEZpZWxk7J2YIOyGjeyEsSDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAgRWxlbWVudOyXkCDsgqzsmqntlaAg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIHRleHRhcmXsl5Ag65Ok7Ja06rCIIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZVRleHRBcmVhTm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCB0aXRsZSwgdmFsdWUsIHR5cGUsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleSh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRleHRhcmVhLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9URVhUQVJFQV9DTEFTUztcclxuICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLWlkXCIsIGZpZWxkSWQpO1xyXG4gICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBmaWVsZFByb3BldHlOYW1lKTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGV4dGFyZWEudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jLCB0cnVlKTtcclxuXHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZUNoZWNrQm94Tm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUNoZWNrQm94Tm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIGNoZWNrYm9466W8IOyCrOyaqe2VmOuKlCBFbGVtZW5066W8IOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lIOyCrOyaqe2VoCBGaWVsZOydmCDsho3shLEg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgIEVsZW1lbnTsl5Ag7IKs7Jqp7ZWgIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICBpbnB1dOyXkCDrk6TslrTqsIgg6rCSXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlQ2hlY2tCb3hOb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuXHJcbiAgICAgICAgdmFyIGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dFRleHQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucHV0VGV4dC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfSU5QVVRfQ0xBU1M7XHJcbiAgICAgICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBmaWVsZFByb3BldHlOYW1lKTtcclxuICAgICAgICBpbnB1dFRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGlucHV0LmlkID0gZmllbGRQcm9wZXR5TmFtZSArIFwiX2Noa2JveFwiO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRUZXh0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNoZWNrQm94Q29udGFpbmVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyTm9kZS5jbGFzc05hbWUgPSBcIkF0dHJpYnV0ZS1Db250ZW50cy1Sb3ctQ2hlY2tCb3gtQ29udGFpbmVyXCJcclxuICAgICAgICBjaGVja0JveENvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIHZhciBjaGVja0JveExhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBjaGVja0JveExhYmVsTm9kZS5odG1sRm9yID0gZmllbGRQcm9wZXR5TmFtZSArIFwiX2Noa2JveFwiO1xyXG4gICAgICAgIGNoZWNrQm94TGFiZWxOb2RlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXJOb2RlLmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWxOb2RlKTtcclxuXHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyTm9kZSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVEYXRlSW5wdXROb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlRGF0ZUlucHV0Tm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIERhdGXrpbwg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lICDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgaW5wdXTsl5Ag65Ok7Ja06rCIIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVUb29sdGlwICBUb29sVGlw7JeQIOuTpOyWtOqwiCDrgrTsmqlcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyAg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlRGF0ZUlucHV0Tm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCB0aXRsZSwgdmFsdWUsIG5vZGVUb29sdGlwLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfV1JBUF9DTEFTUztcclxuICAgICAgICB2YXIgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9DTEFTUztcclxuICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0lOUFVUX0NMQVNTO1xyXG4gICAgICAgIGlucHV0LmlkID0gZmllbGRQcm9wZXR5TmFtZSArIFwiX2RhdGUtcGlja2VyXCI7XHJcbiAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5wdXRQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXRQaWNrZXIuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0RBVEVfSU5QVVRfQ0xBU1M7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0UGlja2VyLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jLCB0cnVlKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dFBpY2tlcik7XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVDb2xvcklucHV0Tm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUNvbG9ySW5wdXROb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZWE65Oc7J2YIOyGjeyEseykkSBDb2xvciBQaWNrZXLrpbwg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lICDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgaW5wdXTsl5Ag65Ok7Ja06rCIIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIGlucHV07J2YIHR5cGXsl5Ag65Ok7Ja06rCIIOqwkiAtIOyCrOyaqe2VmOyngCDslYrsnYwuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZVRvb2x0aXAgIFRvb2xUaXDsl5Ag65Ok7Ja06rCIIOuCtOyaqVxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jICDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVDb2xvcklucHV0Tm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCB0aXRsZSwgdmFsdWUsIHR5cGUsIG5vZGVUb29sdGlwLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfV1JBUF9DTEFTUztcclxuICAgICAgICB2YXIgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9DTEFTUztcclxuICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0lOUFVUX0NMQVNTO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wdXQuaWQgPSBmaWVsZElkICsgXCJfY29sb3JcIjtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYywgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHZhciBpbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlucHV0V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfSU5QVVRfV1JBUF9DTEFTUztcclxuICAgICAgICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGlucHV0V3JhcC5hcHBlbmRDaGlsZChpbnB1dEJ0bik7XHJcblxyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZVdyYXApO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dFdyYXApO1xyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlVG9nZ2xlQnV0dG9uTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVRvZ2dsZUJ1dHRvbk5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ZWE65Oc7J2YIOyGjeyEseykkSBUb2dnbGUgYnV0dG9u7J2EIOyCrOyaqe2VmOuKlCBFbGVtZW5066W8IOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCAg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRQcm9wZXR5TmFtZSAg7IKs7Jqp7ZWgIEZpZWxk7J2YIOyGjeyEsSDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAgRWxlbWVudOyXkCDsgqzsmqntlaAg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIGlucHV07JeQIOuTpOyWtOqwiCDqsJJcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyAg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlVG9nZ2xlQnV0dG9uTm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCB0aXRsZSwgdmFsdWUsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJvd1dyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleSh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCB0aXRsZSk7XHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzd2l0Y2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBzd2l0Y2hMYWJlbC5jbGFzc05hbWUgPSBDT05TVEFOVFMuU1dJVENIX0xBQkVMX0NMQVNTO1xyXG5cclxuICAgICAgICB2YXIgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXRUZXh0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBmaWVsZFByb3BldHlOYW1lKTtcclxuICAgICAgICBpbnB1dFRleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlucHV0VGV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNsaWRlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzbGlkZXJTcGFuLmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLlNXSVRDSF9MQUJFTF9TTElERVJfQ0xBU1MpO1xyXG4gICAgICAgIHNsaWRlclNwYW4uY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuU1dJVENIX0xBQkVMX1NMSURFUl9ST1VORF9DTEFTUyk7XHJcblxyXG4gICAgICAgIHN3aXRjaExhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBzd2l0Y2hMYWJlbC5hcHBlbmRDaGlsZChzbGlkZXJTcGFuKTtcclxuXHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChzd2l0Y2hMYWJlbCk7XHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyb3dXcmFwKTtcclxuICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIFNlbGVjdOulvCDsgqzsmqntlZjripQgRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRQcm9wZXR5TmFtZSAg7IKs7Jqp7ZWgIEZpZWxk7J2YIOyGjeyEsSDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMgW3t2YWx1ZTogXCJ2YWx1ZVwiLCB0ZXh0OiBcInRleHRcIn1dIHNlbGVjdOyXkCDsgqzsmqnrkJjripQgTWFwIEFycmF5XHJcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd9IHRpdGxlIEVsZW1lbnTsl5Ag7IKs7Jqp7ZWgIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB1c2VEZWZhdWxPcHRpb25Ob2RlIOuMgOyDgeyEoO2DneydhCDsgqzsmqntlaDsp4Ag7Jes67aAXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIG9wdGlvbnMsIHRpdGxlLCB1c2VEZWZhdWxPcHRpb25Ob2RlID0gdHJ1ZSkge1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuXHJcbiAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0aXRsZVdyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9DTEFTUztcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KHRpdGxlKTtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCB0aXRsZSk7XHJcbiAgICAgICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0Tm9kZS5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfU0VMRUNUX0NMQVNTO1xyXG4gICAgICAgIGlmICh1c2VEZWZhdWxPcHRpb25Ob2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZhdWx0T3B0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25Ob2RlLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbk5vZGUudGV4dCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleShcIlRlbXBsYXRlLnNlbGVjdERlZmF1bHRUZXh0XCIpO1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWkxOG5cIiwgXCJUZW1wbGF0ZS5zZWxlY3REZWZhdWx0VGV4dFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0Tm9kZS5hcHBlbmRDaGlsZChkZWZhdWx0T3B0aW9uTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG9wdGlvbnMubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUudmFsdWUgPSBvcHRpb25zW2lkeF0udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdGlvbk5vZGUudGV4dCA9IG9wdGlvbnNbaWR4XS50ZXh0O1xyXG4gICAgICAgICAgICBzZWxlY3ROb2RlLmFwcGVuZENoaWxkKG9wdGlvbk5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLWlkXCIsIGZpZWxkSWQpO1xyXG4gICAgICAgIHNlbGVjdE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoc2VsZWN0Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHJvd1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlU2VsZWN0Tm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVNlbGVjdE5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAgIO2VhOuTnOydmCDsho3shLHspJEgU2VsZWN066W8IOyCrOyaqe2VmOuKlCBFbGVtZW5066W8IGxp66GcIOqwkOyLuOyEnCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRQcm9wZXR5TmFtZSDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucyBbe3ZhbHVlOiBcInZhbHVlXCIsIHRleHQ6IFwidGV4dFwifV0gOiBzZWxlY3Tsl5Ag7IKs7Jqp65CY64qUIE1hcCBBcnJheVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlRGVmYXVsT3B0aW9uTm9kZSDrjIDsg4HshKDtg53snYQg7IKs7Jqp7ZWg7KeAIOyXrOu2gFxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZVNlbGVjdE5vZGUoZmllbGRJZCwgZmllbGRQcm9wZXR5TmFtZSwgb3B0aW9ucywgdGl0bGUsIHVzZURlZmF1bE9wdGlvbk5vZGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuICAgICAgICB2YXIgcm93V3JhcCA9IFV0aWxzLmNyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCBvcHRpb25zLCB0aXRsZSwgdXNlRGVmYXVsT3B0aW9uTm9kZSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJvd1dyYXApO1xyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlRGl2aWRlck5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVEaXZpZGVyTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICAgbGnsnZgg6rWs67aE7J6Q66W8IOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGl2aWRlck5vZGUoKSB7XHJcbiAgICAgICAgdmFyIGRpdmlkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgZGl2aWRlclJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRElWSURFUl9DTEFTUztcclxuICAgICAgICByZXR1cm4gZGl2aWRlclJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVUZXh0QWxpZ25CdXR0b25Ob2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dEFsaWduQnV0dG9uTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICAg7ZWE65Oc7J2YIOyGjeyEseykkSBUZXh0IEFsaWduIEJ1dHRvbiBFbGVtZW507J2EIOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCAg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIO2YhOyerOydmCB0ZXh0IGFsaWduIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHRBbGlnbkJ1dHRvbk5vZGUoZmllbGRJZCwgdmFsdWUsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuXHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleShcIlRlbXBsYXRlLnRleHRBbGlnblRleHRcIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCBcIlRlbXBsYXRlLnRleHRBbGlnblRleHRcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZCh0aXRsZVdyYXApO1xyXG5cclxuICAgICAgICB2YXIgYnRuc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHZhciBsZWZ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBsZWZ0QnRuLmNsYXNzTGlzdC5hZGQoXCJUZW1wbGF0ZS1CdXR0b25cIik7XHJcbiAgICAgICAgbGVmdEJ0bi5jbGFzc0xpc3QuYWRkKFwiVGV4dC1BbGlnbi1MZWZ0XCIpO1xyXG4gICAgICAgIGxlZnRCdG4uY2xhc3NMaXN0LmFkZChcIlRvZ2dsZS1CdXR0b25cIik7XHJcblxyXG4gICAgICAgIHZhciBsZWZ0SWNvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGxlZnRCdG4uYXBwZW5kQ2hpbGQobGVmdEljb25CdG4pO1xyXG5cclxuICAgICAgICB2YXIgY2VudGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjZW50ZXJCdG4uY2xhc3NMaXN0LmFkZChcIlRlbXBsYXRlLUJ1dHRvblwiKTtcclxuICAgICAgICBjZW50ZXJCdG4uY2xhc3NMaXN0LmFkZChcIlRleHQtQWxpZ24tQ2VudGVyXCIpO1xyXG4gICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiVG9nZ2xlLUJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdmFyIGNlbnRlckljb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgICAgICBjZW50ZXJCdG4uYXBwZW5kQ2hpbGQoY2VudGVySWNvbkJ0bik7XHJcblxyXG4gICAgICAgIHZhciByaWdodEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcmlnaHRCdG4uY2xhc3NMaXN0LmFkZChcIlRlbXBsYXRlLUJ1dHRvblwiKTtcclxuICAgICAgICByaWdodEJ0bi5jbGFzc0xpc3QuYWRkKFwiVGV4dC1BbGlnbi1SaWdodFwiKTtcclxuICAgICAgICByaWdodEJ0bi5jbGFzc0xpc3QuYWRkKFwiVG9nZ2xlLUJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJpZ2h0SWNvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIHJpZ2h0QnRuLmFwcGVuZENoaWxkKHJpZ2h0SWNvbkJ0bik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIGxlZnRCdG4uY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICByaWdodEJ0bi5jbGFzc0xpc3QuYWRkKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXROb2RlLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnB1dE5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLWlkXCIsIGZpZWxkSWQpO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgXCJ0ZXh0QWxpZ25cIik7XHJcbiAgICAgICAgaW5wdXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jKTtcclxuXHJcbiAgICAgICAgbGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgaW5wdXROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgaWYgKCFsZWZ0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmlnaHRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2VudGVyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNlbnRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICBpZiAoIWNlbnRlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmlnaHRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGVmdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgaW5wdXROb2RlLnZhbHVlID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICBpZiAoIXJpZ2h0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByaWdodEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxlZnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGxlZnRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ0bnNXcmFwLmFwcGVuZENoaWxkKGxlZnRCdG4pO1xyXG4gICAgICAgIGJ0bnNXcmFwLmFwcGVuZENoaWxkKGNlbnRlckJ0bik7XHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQocmlnaHRCdG4pO1xyXG4gICAgICAgIGJ0bnNXcmFwLmFwcGVuZENoaWxkKGlucHV0Tm9kZSk7XHJcblxyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoYnRuc1dyYXApO1xyXG4gICAgICAgIHJldHVybiByb3dXcmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIFRleHQgQm9sZCB0b2dnbGUgQnV0dG9uIEVsZW1lbnTsnYQg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAg7ZiE7J6s7J2YIHRleHQgYm9sZCDqsJJcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUZXh0Qm9sZEJ1dHRvbk5vZGUoZmllbGRJZCwgdmFsdWUsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuXHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleShcIlRlbXBsYXRlLmJvbGRUZXh0XCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWkxOG5cIiwgXCJUZW1wbGF0ZS5ib2xkVGV4dFwiKTtcclxuICAgICAgICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcblxyXG4gICAgICAgIHZhciBidG5zV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIGJvbGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LmFkZChcIlRlbXBsYXRlLUJ1dHRvblwiKTtcclxuICAgICAgICBib2xkQnRuLmNsYXNzTGlzdC5hZGQoXCJUZXh0LUJvbGQtQnV0dG9uXCIpO1xyXG4gICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LmFkZChcIlRvZ2dsZS1CdXR0b25cIik7XHJcblxyXG4gICAgICAgIHZhciBib2xkQnRuSWNvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGJvbGRCdG4uYXBwZW5kQ2hpbGQoYm9sZEJ0bkljb25CdG4pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlucHV0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dE5vZGUudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5wdXROb2RlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBcImJvbGRcIik7XHJcbiAgICAgICAgaW5wdXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jKTtcclxuXHJcbiAgICAgICAgYm9sZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAoIWJvbGRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXROb2RlLnZhbHVlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoYm9sZEJ0bik7XHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoaW5wdXROb2RlKTtcclxuXHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChidG5zV3JhcCk7XHJcbiAgICAgICAgcmV0dXJuIHJvd1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ZWE65Oc7J2YIOyGjeyEseykkSBUZXh0IENvbG9yIHBpY2tlciBFbGVtZW507J2EIOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCAg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIO2YhOyerOydmCB0ZXh0IGNvbG9yIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGUoZmllbGRJZCwgdGl0bGUsIHZhbHVlLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcm93V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1M7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfV1JBUF9DTEFTUztcclxuICAgICAgICB2YXIgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9DTEFTUztcclxuICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBVdGlscy50cmFuc2xhdGVGb3JLZXkodGl0bGUpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWkxOG5cIiwgdGl0bGUpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bnNXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBidG5zV3JhcC5jbGFzc05hbWUgPSBcIkNvbG9yLUJ1dHRvbi1XcmFwXCI7XHJcblxyXG4gICAgICAgIHZhciBib2xkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBib2xkQnRuLmNsYXNzTGlzdC5hZGQoXCJUZW1wbGF0ZS1CdXR0b25cIik7XHJcbiAgICAgICAgYm9sZEJ0bi5jbGFzc0xpc3QuYWRkKFwiQ29sb3ItQnV0dG9uXCIpO1xyXG5cclxuICAgICAgICB2YXIgaW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0Tm9kZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wdXROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIFwiZm9udENvbG9yXCIpO1xyXG4gICAgICAgIGlucHV0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYyk7XHJcblxyXG4gICAgICAgIGJ0bnNXcmFwLmFwcGVuZENoaWxkKGJvbGRCdG4pO1xyXG4gICAgICAgIGJ0bnNXcmFwLmFwcGVuZENoaWxkKGlucHV0Tm9kZSk7XHJcblxyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoYnRuc1dyYXApO1xyXG4gICAgICAgIHJldHVybiByb3dXcmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZVRleHRBdHRyYnV0ZU5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVUZXh0QXR0cmJ1dGVOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIO2VhOuTnOydmCDsho3shLHspJEgVGV4dCDsho3shLHsnZggRWxlbWVudOuTpOydhCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQgIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZvbnRDb2xvciAg7ZiE7J6s7J2YIEZvbnQgQ29sb3Ig6rCSXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm9udEFsaWduICDtmITsnqzsnZggdGV4dCBhbGlnbiDqsJJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpc0JvbGQgIO2YhOyerOydmCB0ZXh0IGJvbGQg6rCSXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMgIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHRBdHRyYnV0ZU5vZGUoZmllbGRJZCwgZm9udENvbG9yLCBmb250QWxpZ24sIGlzQm9sZCwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuICAgICAgICB2YXIgcm93V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcm93V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGZvbnRBdHRyVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHZhciByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIHZhciBjb2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDEuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgY29sMS5jb2xTcGFuID0gNDtcclxuICAgICAgICB2YXIgZm9udEZhbWlseUNvbWJvID0gVXRpbHMuY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlKGZpZWxkSWQsIFwiZm9udE5hbWVcIiwgVXRpbHMuZm9udEZhbWlseUNvbWJvQm94LCBcIlRlbXBsYXRlLmZvbnROYW1lVGV4dFwiLCBmYWxzZSk7XHJcbiAgICAgICAgY29sMS5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tYm8pO1xyXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoY29sMSk7XHJcblxyXG4gICAgICAgIHZhciBjb2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDIuY29sU3BhbiA9IDQ7XHJcbiAgICAgICAgdmFyIGZvbnRTaXplQ29tYm8gPSBVdGlscy5jcmVhdGVBdHRyaWJ1dGVTZWxlY3RJbm5lck5vZGUoZmllbGRJZCwgXCJmb250U2l6ZVwiLCBVdGlscy5nZXRGb25TaXplQ29tYm9Cb3goKSwgXCJUZW1wbGF0ZS5mb250U2l6ZVRleHRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbDIuYXBwZW5kQ2hpbGQoZm9udFNpemVDb21ibyk7XHJcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChjb2wyKTtcclxuXHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5hcHBlbmRDaGlsZChyb3cxKTtcclxuXHJcbiAgICAgICAgdmFyIHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdmFyIGNvbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29sMy5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICBjb2wzLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgICAgICBjb2wzLmNvbFNwYW4gPSA0O1xyXG4gICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoY29sMyk7XHJcblxyXG4gICAgICAgIHZhciBhbGlnbkJ0bnNOb2RlID0gVXRpbHMuY3JlYXRlVGV4dEFsaWduQnV0dG9uTm9kZShmaWVsZElkLCBmb250QWxpZ24sIGNoYW5nZUV2ZW50RnVuYyk7XHJcbiAgICAgICAgY29sMy5hcHBlbmRDaGlsZChhbGlnbkJ0bnNOb2RlKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29sNC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICBjb2w0LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgICAgICBjb2w0LmNvbFNwYW4gPSAyO1xyXG4gICAgICAgIHZhciBib2xkQnRuTm9kZSA9IFV0aWxzLmNyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZShmaWVsZElkLCBpc0JvbGQsIGNoYW5nZUV2ZW50RnVuYyk7XHJcbiAgICAgICAgY29sNC5hcHBlbmRDaGlsZChib2xkQnRuTm9kZSk7XHJcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChjb2w0KTtcclxuXHJcbiAgICAgICAgdmFyIGNvbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29sNS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICBjb2w1LnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcclxuICAgICAgICBjb2w1LmNvbFNwYW4gPSAyO1xyXG4gICAgICAgIHZhciBjb2xvckJ0bk5vZGUgPSBVdGlscy5jcmVhdGVUZXh0Q29sb3JCdXR0b25Ob2RlKGZpZWxkSWQsIFwiVGVtcGxhdGUuY29sb3JUZXh0XCIsIGZvbnRDb2xvciwgY2hhbmdlRXZlbnRGdW5jKTtcclxuICAgICAgICBjb2w1LmFwcGVuZENoaWxkKGNvbG9yQnRuTm9kZSk7XHJcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChjb2w1KTtcclxuXHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5hcHBlbmRDaGlsZChyb3cyKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKGZvbnRBdHRyVGFibGUpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyb3dXcmFwKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByb3c6IHJvdyxcclxuICAgICAgICAgICAgZm9udEZhbWlseUNvbWJvOiBmb250RmFtaWx5Q29tYm8sXHJcbiAgICAgICAgICAgIGZvbnRTaXplQ29tYm86IGZvbnRTaXplQ29tYm8sXHJcbiAgICAgICAgICAgIGNvbG9yQnRuOiBjb2xvckJ0bk5vZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVUZXh0QXR0cmJ1dGVOb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dE1lbW9BdHRyYnV0ZU5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg66mU66qoIOyGjeyEseydmCBFbGVtZW5065Ok7J2EIOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCAg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm9udENvbG9yICDtmITsnqzsnZggRm9udCBDb2xvciDqsJJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb250QWxpZ24gIO2YhOyerOydmCB0ZXh0IGFsaWduIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlzQm9sZCAg7ZiE7J6s7J2YIHRleHQgYm9sZCDqsJJcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyAg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICAgc3RhdGljIGNyZWF0ZVRleHRNZW1vQXR0cmJ1dGVOb2RlKGZpZWxkSWQsIGZvbnRDb2xvciwgaXNCb2xkLCBiYWNrZ3JvdW5kQ29sb3IsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgbGV0IHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJvd1dyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmb250QXR0clRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGZvbnRBdHRyVGFibGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBsZXQgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBsZXQgY29sMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2wxLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDEuY29sU3BhbiA9IDQ7XHJcbiAgICAgICAgbGV0IGZvbnRGYW1pbHlDb21ibyA9IFV0aWxzLmNyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZShmaWVsZElkLCBcImZvbnROYW1lXCIsIFV0aWxzLmZvbnRGYW1pbHlDb21ib0JveCwgXCJUZW1wbGF0ZS5mb250TmFtZVRleHRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbDEuYXBwZW5kQ2hpbGQoZm9udEZhbWlseUNvbWJvKTtcclxuICAgICAgICByb3cxLmFwcGVuZENoaWxkKGNvbDEpO1xyXG5cclxuICAgICAgICBsZXQgY29sMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2wyLmNvbFNwYW4gPSA0O1xyXG4gICAgICAgIGxldCBmb250U2l6ZUNvbWJvID0gVXRpbHMuY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlKGZpZWxkSWQsIFwiZm9udFNpemVcIiwgVXRpbHMuZ2V0Rm9uU2l6ZUNvbWJvQm94KCksIFwiVGVtcGxhdGUuZm9udFNpemVUZXh0XCIsIGZhbHNlKTtcclxuICAgICAgICBjb2wyLmFwcGVuZENoaWxkKGZvbnRTaXplQ29tYm8pO1xyXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoY29sMik7XHJcblxyXG4gICAgICAgIGZvbnRBdHRyVGFibGUuYXBwZW5kQ2hpbGQocm93MSk7XHJcblxyXG4gICAgICAgIGxldCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuICAgICAgICBsZXQgY29sNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2w0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDQuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDQuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgbGV0IGJvbGRCdG5Ob2RlID0gVXRpbHMuY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlKGZpZWxkSWQsIGlzQm9sZCwgY2hhbmdlRXZlbnRGdW5jKTtcclxuICAgICAgICBjb2w0LmFwcGVuZENoaWxkKGJvbGRCdG5Ob2RlKTtcclxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNvbDQpO1xyXG5cclxuICAgICAgICBsZXQgY29sNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2w1LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDUuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDUuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgbGV0IGNvbG9yQnRuTm9kZSA9IFV0aWxzLmNyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGUoZmllbGRJZCwgXCJUZW1wbGF0ZS5jb2xvclRleHRcIiwgZm9udENvbG9yLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG4gICAgICAgIGNvbDUuYXBwZW5kQ2hpbGQoY29sb3JCdG5Ob2RlKTtcclxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNvbDUpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBsZXQgY29sNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2w2LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDYuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDYuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvckJ0bk5vZGUgPSBVdGlscy5jcmVhdGVUZXh0Q29sb3JCdXR0b25Ob2RlKGZpZWxkSWQsIFwiVGVtcGxhdGUuYmdDb2xvclRleHRcIiwgYmFja2dyb3VuZENvbG9yLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG4gICAgICAgIGNvbDYuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZENvbG9yQnRuTm9kZSk7XHJcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChjb2w2KTtcclxuXHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5hcHBlbmRDaGlsZChyb3cyKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKGZvbnRBdHRyVGFibGUpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyb3dXcmFwKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByb3c6IHJvdyxcclxuICAgICAgICAgICAgZm9udEZhbWlseUNvbWJvOiBmb250RmFtaWx5Q29tYm8sXHJcbiAgICAgICAgICAgIGZvbnRTaXplQ29tYm86IGZvbnRTaXplQ29tYm8sXHJcbiAgICAgICAgICAgIGJvbGRCdG46IGJvbGRCdG5Ob2RlLFxyXG4gICAgICAgICAgICBjb2xvckJ0bjogY29sb3JCdG5Ob2RlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JCdG46IGJhY2tncm91bmRDb2xvckJ0bk5vZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGFzc2lnblxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Fzc2lnblxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICBvYmplY3Tsl5Ag7ZW064u5IOyGjeyEseydtCDsnojsnLzrqbQg6rCS7J2EIOyEpOygle2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqICDsgqzsmqntlaAgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcCAg7IKs7Jqp7ZWgIOyGjeyEsVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlICDsho3shLHsl5Ag7IKs7Jqp7ZWgIOqwklxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXNzaWduKG9iaiwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHByb3AgPSBwcm9wLnNwbGl0KFwiLlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHByb3AubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHByb3Auc2hpZnQoKTtcclxuICAgICAgICAgICAgYXNzaWduKG9ialtlXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtlXSkgPT09IFwiW29iamVjdCBPYmplY3RdXCJcclxuICAgICAgICAgICAgICAgICAgICA/IG9ialtlXVxyXG4gICAgICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgICAgICBwcm9wLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBvYmpbcHJvcFswXV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBmaWVsZEFuY2VzdG9yc1xyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2ZpZWxkQW5jZXN0b3JzXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgRmllbGTsl5Ag7IOB7IaN65CcIOu2gOuqqOuTpOydhCDssL7ripTri6QuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhbnljbGFzcyA6IOywvuydhCBmaWVsZFxyXG4gICAgICogQHJldHVybiB7QXJyYXl9OiDsg4Hsho3rkJwg67aA66qo65OkXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmaWVsZEFuY2VzdG9ycyAoYW55Y2xhc3MpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSAoYW55Y2xhc3MgPT09IHVuZGVmaW5lZCk6IHJldHVybjtcclxuICAgICAgICBjYXNlIChhbnljbGFzcyA9PT0gbnVsbCk6IHJldHVybiBbXTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gW2FueWNsYXNzLCAuLi4oVXRpbHMuZmllbGRBbmNlc3RvcnMgKE9iamVjdC5nZXRQcm90b3R5cGVPZiAoYW55Y2xhc3MpKSldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBmaW5kU2FtZUFuY2VzdG9yXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZmluZFNhbWVBbmNlc3RvclxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICBGaWVsZOuTpOydmCDqs7XthrXsnLzroZwg7IOB7IaN65CcIOu2gOuqqOulvCDssL7ripTri6QuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBmaWVsZExpc3Qg7LC+7J2EIGZpZWxkIOumrOyKpO2KuFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAg6rO17Ya17Jy866GcIOyDgeyGjeuQnCDrtoDrqqhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmRTYW1lQW5jZXN0b3IoZmllbGRMaXN0KSB7XHJcbiAgICAgICAgLy8g7LKr67KI7Ke4IO2VhOuTnOydmCDsobDsg4Hrk6TsnYQg7KGw7IKs7ZWc64ukLlxyXG4gICAgICAgIHZhciBmaXJzdEFuY2VzdG9ycyA9IFV0aWxzLmZpZWxkQW5jZXN0b3JzKGZpZWxkTGlzdFswXSk7XHJcbiAgICAgICAgdmFyIHNhbWVBbmNlc3RvciA9IGZpcnN0QW5jZXN0b3JzWzBdO1xyXG4gICAgICAgIC8vIO2VhOuTnOydmCDqsK/siJjqsIAgMeqwnOydtOuptCDqt7jrg6Ug66as7YS07ZWc64ukLlxyXG4gICAgICAgIGlmIChmaWVsZExpc3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzYW1lQW5jZXN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIC8vIDLrsojsp7gg7ZWE65Oc67aA7YSwIOujqO2UhOulvCDtlZzri6QuXHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMTsgaWR4IDwgZmllbGRMaXN0Lmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgdmFyIGFuY2VzdG9ycyA9IFV0aWxzLmZpZWxkQW5jZXN0b3JzKGZpZWxkTGlzdFtpZHhdKTtcclxuICAgICAgICAgICAgLy8g67aA66qo6rCAIDHqsJzsnbTrqbQgQmFzZUZpZWxk7J2066+A66GcIOq3uOuMgOuhnCDrpqzthLTtlZzri6QuXHJcbiAgICAgICAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5jZXN0b3JzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydElkeCA9IDA7XHJcbiAgICAgICAgICAgIC8vIOyyq+uyiOynuCDtlYTrk5zsnZgg7KGw7IOB7J2EIOujqO2UhO2VmOuKlCBpbmRleOydtOuvgOuhnCAx67aA7YSwIOyLnOyeke2VnOuLpC5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0SWR4MiA9IDE7XHJcblxyXG4gICAgICAgICAgICAvLyDtmITsnqwg6rO17Ya17Jy866GcIOyEoO2DneuQnCDtlYTrk5zsnZgg7KGw7IOB67O064ukIOyngOq4iCDsobDsgqztlZjripQg7ZWE65Oc7J2YIOyhsOyDgeydtCDqsK/siJjqsIAg7KCB7Jy866m0IFxyXG4gICAgICAgICAgICAvLyDsoITrtoAg7KGw7IKs7ZWgIO2VhOyalOqwgCDsl4bsnbQg65GY7J2YIOywqOydtOuCmOuKlCDrp4ztgbwg67aA7YSwIOyhsOyCrO2VnOuLpC5cclxuICAgICAgICAgICAgLy8gZXgpIFRleHRGaWVsZOyZgCBJbWFnZUZpZWxk66W8IOu5hOq1kO2VtOuztOuptFxyXG4gICAgICAgICAgICAvLyBUZXh0IFRleHRCYXNlIEJhc2UsIEltYWdlIEJhc2Ug7J2066CH6rKMIOyhsOyDgeuTpOydtCDsobTsnqztlZzri6QuXHJcbiAgICAgICAgICAgIC8vIOydtOugh+qyjCAx67KI7Ke464qUIOustOyhsOqxtCDri6TrpbTri4ggMeuyiOynuOuKlCDtjKjsiqTtlZjqs6Ag64uk7J2M67aA7YSwIOyhsOyCrOulvCDtlZzri6QuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhbWVBbmNlc3RvclBhcmVudHMgPSBVdGlscy5maWVsZEFuY2VzdG9ycyhzYW1lQW5jZXN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZUFuY2VzdG9yUGFyZW50cy5sZW5ndGggPj0gYW5jZXN0b3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRJZHggPSBzYW1lQW5jZXN0b3JQYXJlbnRzLmxlbmd0aCAtIGFuY2VzdG9ycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgc2VjSWR4ID0gc3RhcnRJZHg7IHNlY0lkeCA8IGFuY2VzdG9ycy5sZW5ndGg7IHNlY0lkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jZXN0b3IgPSBhbmNlc3RvcnNbc2VjSWR4XTtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5kU2FtZUFuY2VzdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGZpcnN0SWR4ID0gc3RhcnRJZHgyOyBmaXJzdElkeCA8IGZpcnN0QW5jZXN0b3JzLmxlbmd0aDsgZmlyc3RJZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYW5jZXN0b3IpID09IE9iamVjdC5nZXRQcm90b3R5cGVPZihmaXJzdEFuY2VzdG9yc1tmaXJzdElkeF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOqwmeydhCDqsr3smrAgKzHsnYQg7ZWY64qUIOydtOycoOuKlCBwcm90b3R5cGXsnZggY29uc3RydWN0b3LqsIAg7ZWY64KYIOychOulvCDrsJTrnbzrs7TquLAg65WM66y47J2064ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1lQW5jZXN0b3IgPSBmaXJzdEFuY2VzdG9yc1tmaXJzdElkeCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYW1lQW5jZXN0b3JQYXJlbnRzID0gVXRpbHMuZmllbGRBbmNlc3RvcnMoc2FtZUFuY2VzdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6ri47J206rCAIDLrqbQgQmFzZUZpZWxk7J2066+A66GcIOq3uOuMgOuhnCDrpqzthLTtlZzri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYW1lQW5jZXN0b3JQYXJlbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNhbWVBbmNlc3RvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kU2FtZUFuY2VzdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJZHgyID0gZmlyc3RJZHggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZFNhbWVBbmNlc3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzYW1lQW5jZXN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbmRTYW1lQW5jZXN0b3IyKGZpZWxkTGlzdCkge1xyXG4gICAgICAgIGlmIChmaWVsZExpc3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZExpc3RbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpcnN0RmllbGRBbmNlc3RvcnMgPSBmaWVsZExpc3RbMF0uYW5jZXN0b3JzKCk7XHJcbiAgICAgICAgbGV0IGNvbW1vbkFuY2VzdG9yID0gZmlyc3RGaWVsZEFuY2VzdG9yc1swXTtcclxuICAgICAgICBmb3IgKGxldCBpZHggPSAxOyBpZHggPCBmaWVsZExpc3QubGVuZ3RoOyArK2lkeCkge1xyXG4gICAgICAgICAgICBpZiAoY29tbW9uQW5jZXN0b3IgPT09IFwiQkZcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQW5jZXN0b3JzID0gZmllbGRMaXN0W2lkeF0uYW5jZXN0b3JzKCk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFuY2VzdG9ycy5pbmNsdWRlcyhjb21tb25BbmNlc3RvcikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpZHgyID0gMTsgaWR4MiA8IGZpcnN0RmllbGRBbmNlc3RvcnMubGVuZ3RoOyArK2lkeDIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEFuY2VzdG9ycy5pbmNsdWRlcyhmaXJzdEZpZWxkQW5jZXN0b3JzW2lkeDJdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbkFuY2VzdG9yID0gZmlyc3RGaWVsZEFuY2VzdG9yc1tpZHgyXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gZ2V0VXNlckluZm9PcHRzTGlzdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldFVzZXJJbmZvT3B0c0xpc3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirjrpbwg67CY7ZmY7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSDshJzrqoXsnpDrk6TsnZgg7KCV67O0IOumrOyKpO2KuFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0VXNlckluZm9PcHRzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMudXNlckluZm9PcHRpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHNldFVzZXJJbmZvT3B0c0xpc3RcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzZXRVc2VySW5mb09wdHNMaXN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq466W8IOyEpOygle2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZExpc3QgIOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq4XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRVc2VySW5mb09wdHNMaXN0KG9wdHMpIHtcclxuICAgICAgICBVdGlscy51c2VySW5mb09wdGlvbkxpc3QgPSBvcHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGdldFVzZXJJbmZvT3B0c0xpc3RDb3VudFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldFVzZXJJbmZvT3B0c0xpc3RDb3VudFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq4IOq4uOydtOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfTog7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirjquLjsnbRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFVzZXJJbmZvT3B0c0xpc3RDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMudXNlckluZm9PcHRpb25MaXN0Q291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gc2V0VXNlckluZm9PcHRzTGlzdENvdW50XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0VXNlckluZm9PcHRzTGlzdENvdW50XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq4IOq4uOydtOulvCDshKTsoJXtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZpZWxkTGlzdCDshJzrqoXsnpDrk6TsnZgg7KCV67O0IOumrOyKpO2KuCDquLjsnbRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFVzZXJJbmZvT3B0c0xpc3RDb3VudChjb3VudCkge1xyXG4gICAgICAgIFV0aWxzLnVzZXJJbmZvT3B0aW9uTGlzdENvdW50ID0gY291bnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGdldERWRmllbGRPcHRzTGlzdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldERWRmllbGRPcHRzTGlzdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICAg6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6TsnZgg66as7Iqk7Yq466W8IOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0g6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6TsnZgg66as7Iqk7Yq4XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXREVkZpZWxkT3B0c0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmR2RmllbGRPcHRpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHNldERWRmllbGRPcHRzTGlzdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NldERWRmllbGRPcHRzTGlzdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDquLDrs7jqsJLsnLzroZwg7IKs7Jqp7ZWgIOqwkuuTpOydmCDrpqzsiqTtirjrpbwg7ISk7KCV7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBmaWVsZExpc3Qge0FycmF5fSAg6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6TsnZgg66as7Iqk7Yq4XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXREVkZpZWxkT3B0c0xpc3Qob3B0cykge1xyXG4gICAgICAgIFV0aWxzLmR2RmllbGRPcHRpb25MaXN0ID0gb3B0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBnZXRTaWduVGFiU2hvd09wdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldFNpZ25UYWJTaG93T3B0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgICDshJzrqoXtg60g67O07J6EL+yViOuztOyehCDquLDrs7jqsJLsnLzroZwg7IKs7Jqp7ZWgIOqwkuuTpOydhCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IOyEnOuqhe2DrSDrs7TsnoQv7JWI67O07J6EIOq4sOuzuOqwkuycvOuhnCDsgqzsmqntlaAg6rCS65OkIFxyXG4gICAgICogQERhdGUgOiAyMDIzLiAxMi4gMjdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFNpZ25UYWJTaG93T3B0KCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5zaWduVGFiU2hvd09wdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBzZXRTaWduVGFiU2hvd09wdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NldFNpZ25UYWJTaG93T3B0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIOyEnOuqhe2DrSDrs7TsnoQv7JWI67O07J6EIOq4sOuzuOqwkuycvOuhnCDsgqzsmqntlaAg6rCS65Ok7J2EIOyEpOygle2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2lnblRhYlNob3dPcHQge09iamVjdH0gIOyEnOuqhe2DrSDrs7TsnoQv7JWI67O07J6EIOq4sOuzuOqwkuycvOuhnCDsgqzsmqntlaAg6rCS65OkXHJcbiAgICAgKiBARGF0ZSA6IDIwMjMuIDEyLiAyN1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0U2lnblRhYlNob3dPcHQob3B0cykge1xyXG4gICAgICAgIFV0aWxzLnNpZ25UYWJTaG93T3B0ID0gb3B0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBnZXRGb25TaXplQ29tYm9Cb3hcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNnZXRGb25TaXplQ29tYm9Cb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7IaN7ISx7JeQ7IScIOyCrOyaqe2VoCDtj7Dtirgg7IKs7J207KaIIOumrOyKpO2KuOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IOyGjeyEseyXkOyEnCDsgqzsmqntlaAg7Y+w7Yq4IOyCrOydtOymiCDrpqzsiqTtirhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEZvblNpemVDb21ib0JveCgpIHtcclxuICAgICAgICBpZiAoVXRpbHMuZm9udFNpemVDb21ib0JveC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5mb250U2l6ZUNvbWJvQm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPD0gNTA7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgIFV0aWxzLmZvbnRTaXplQ29tYm9Cb3gucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBpZHggKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaWR4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXRpbHMuZm9udFNpemVDb21ib0JveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBnZXRTaWduUGVuV2lkdGhDb21ib0JveFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldFNpZ25QZW5XaWR0aENvbWJvQm94XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7IaN7ISx7JeQ7IScIOyCrOyaqe2VoCDtjpwg65GQ6ruYIOumrOyKpO2KuOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IOyGjeyEseyXkOyEnCDsgqzsmqntlaAg7Y6cIOuRkOq7mCDrpqzsiqTtirhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFNpZ25QZW5XaWR0aENvbWJvQm94KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coVXRpbHMuc2lnblBlbldpZHRoQ29tYm9Cb3gubGVuZ3RoKTtcclxuICAgICAgICBpZiAoVXRpbHMuc2lnblBlbldpZHRoQ29tYm9Cb3gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuc2lnblBlbldpZHRoQ29tYm9Cb3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSAyMDsgaWR4ICs9IDEpIHtcclxuICAgICAgICAgICAgVXRpbHMuc2lnblBlbldpZHRoQ29tYm9Cb3gucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBpZHgsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaWR4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXRpbHMuc2lnblBlbldpZHRoQ29tYm9Cb3g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmJ1dGVQb3B1cFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJidXRlUG9wdXBcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDsho3shLEg7Yyd7JeF7J2YIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSDsho3shLEg7Yyd7JeF7J2YIGVsZW1lbnRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJidXRlUG9wdXAob3duZXJOb2RlLCBvd25lckZpZWxkQkJveCkge1xyXG4gICAgICAgIGxldCBhdHRyRGl2ID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgLlwiICsgQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NMQVNTKTtcclxuICAgICAgICBpZiAoYXR0ckRpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhdHRyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYXR0ckRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5FRElUT1JfQVRUUl9DTEFTUyk7XHJcbiAgICAgICAgICAgIGF0dHJEaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuU0hPV19DTEFTUyk7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ZXIgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBDT05TVEFOVFMuVEVNUExBVEVfUERGX1ZJRVdFUik7XHJcbiAgICAgICAgICAgIHZpZXdlci5hcHBlbmRDaGlsZChhdHRyRGl2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVdGlscy5yZW1vdmVBbGxDaGlsZE5vZGUoYXR0ckRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXR0ckRpdi5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgIGF0dHJEaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuU0hPV19DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF0dHJEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBpZiAob3duZXJGaWVsZEJCb3ggIT09IG51bGwgJiYgb3duZXJGaWVsZEJCb3ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhdHRyRGl2LnN0eWxlLmxlZnQgPSBvd25lckZpZWxkQkJveC54ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBhdHRyRGl2LnN0eWxlLnRvcCA9IG93bmVyRmllbGRCQm94LnkgKyBvd25lckZpZWxkQkJveC5oZWlnaHQgKyAxMCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF0dHJEaXY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gc2hvd0FzdGVyaXNrRGl2XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2hvd0FzdGVyaXNrRGl2XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZWE7IiYIO2RnOyLnCDrp4jtgazrpbwg67O07J206rGw64KYIOyIqOq4tOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSAg7ZW064u5IO2UhOuhnOygne2KuOydmCDstZzsg4Hri6ggRWxlbWVudOulvCDqsJDsi7jqs6Ag7J6I64qUIEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElkICDtlYTsiJgg66eI7YGs6rCAIOyCrOyaqeuQmOuKlCDtlYTrk5zsnZggaWRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNTaG93ICB0cnVl66m0IOuztOydtOqzoCBmYWxzZeuptCDsiKjquLTri6QuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmllbGRYICDtlYTsiJgg66eI7YGs6rCAIOyCrOyaqeuQmOuKlCDtlYTrk5zsnZggeOyijO2RnFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZpZWxkWSAg7ZWE7IiYIOuniO2BrOqwgCDsgqzsmqnrkJjripQg7ZWE65Oc7J2YIHnsooztkZxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmaWVsZEhlaWdodCAg7ZWE7IiYIOuniO2BrOqwgCDsgqzsmqnrkJjripQg7ZWE65Oc7J2YIOuGkuydtFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hvd0FzdGVyaXNrRGl2KG93bmVyTm9kZSwgZmllbGRJZCwgaXNTaG93LCBmaWVsZFgsIGZpZWxkWSwgZmllbGRIZWlnaHQpIHtcclxuICAgICAgICBsZXQgYXN0ZXJpc2tEaXYgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBmaWVsZElkICsgXCJfYXN0ZXJpc2tcIik7XHJcbiAgICAgICAgaWYgKGFzdGVyaXNrRGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcInNob3dBc3Rlcmlza0RpdiAgIFwiICsgaXNTaG93KTtcclxuICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZFggPT09IG51bGwgfHwgZmllbGRZID09PSBudWxsIHx8IGZpZWxkSGVpZ2h0ID09PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICBmaWVsZFggPT09IHVuZGVmaW5lZCB8fCBmaWVsZFkgPT09IHVuZGVmaW5lZCB8fCBmaWVsZEhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGFzdGVyaXNrSGVpZ2h0ID0gQ09OU1RBTlRTLkFTVFJFSVNLX0RJVl9IRUlHSFQ7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LnN0eWxlLmxlZnQgPSAoZmllbGRYIC0gNiAtIGFzdGVyaXNrSGVpZ2h0KSArIFwicHhcIjtcclxuICAgICAgICAgICAgbGV0IGFzdGVyaXNrWSA9IGZpZWxkWSArIChmaWVsZEhlaWdodCAvIDIpIC0gKGFzdGVyaXNrSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LnN0eWxlLnRvcCA9IGFzdGVyaXNrWSArIFwicHhcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5TSE9XX0NMQVNTKSkge1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuU0hPV19DTEFTUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFzdGVyaXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuSElERV9DTEFTUykpIHtcclxuICAgICAgICAgICAgICAgIGFzdGVyaXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoQ09OU1RBTlRTLkhJREVfQ0xBU1MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3Rlcmlza0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LmNsYXNzTGlzdC50b2dnbGUoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFzdGVyaXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuSElERV9DTEFTUykpIHtcclxuICAgICAgICAgICAgYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuSElERV9DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUFzdGVyaXNrRGl2XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXN0ZXJpc2tEaXZcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTsiJgg7ZGc7IucIOuniO2BrOydmCBFbGVtZW5066W8IOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIOy1nOyDgeuLqCBFbGVtZW5066W8IOqwkOyLuOqzoCDsnojripQgRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSWQgIO2VhOyImCDrp4jtgazqsIAg7IKs7Jqp65CY64qUIO2VhOuTnOydmCBpZFxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH0g7ZWE7IiYIO2RnOyLnCDrp4jtgazsnZggZWxlbWVudFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXN0ZXJpc2tEaXYob3duZXJOb2RlLCBmaWVsZElkKSB7XHJcbiAgICAgICAgbGV0IGFzdGVyaXNrRGl2ID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgZmllbGRJZCArIFwiX2FzdGVyaXNrXCIpO1xyXG4gICAgICAgIGlmIChhc3Rlcmlza0RpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhc3Rlcmlza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLkFTVEVSSVNLX0lDT05fQ0xBU1MpO1xyXG4gICAgICAgICAgICBhc3Rlcmlza0Rpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICBhc3Rlcmlza0Rpdi5zdHlsZS53aWR0aCA9IFwiMTFweFwiO1xyXG4gICAgICAgICAgICBhc3Rlcmlza0Rpdi5zdHlsZS5oZWlnaHQgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgbGV0IGxheWVyRGl2ID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgQ09OU1RBTlRTLlRFTVBMQVRFX0xBWUVSX0FTVEVSSVNLX05BTUUpO1xyXG4gICAgICAgICAgICBsYXllckRpdi5hcHBlbmRDaGlsZChhc3Rlcmlza0Rpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhc3Rlcmlza0RpdjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGlzU2hvd0FzdGVyaXNrRGl2XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaXNTaG93QXN0ZXJpc2tEaXZcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTsiJgg7ZGc7IucIOuniO2BrOqwgCDrs7TsnbTripTsp4Ag7Jes67aA66W8IOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSAg7ZW064u5IO2UhOuhnOygne2KuOydmCDstZzsg4Hri6ggRWxlbWVudOulvCDqsJDsi7jqs6Ag7J6I64qUIEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElkICDtlYTsiJgg66eI7YGs6rCAIOyCrOyaqeuQmOuKlCDtlYTrk5zsnZggaWRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU2hvd0FzdGVyaXNrRGl2KG93bmVyTm9kZSwgZmllbGRJZCkge1xyXG4gICAgICAgIGxldCBhc3Rlcmlza0RpdiA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIGZpZWxkSWQgKyBcIl9hc3Rlcmlza1wiKTtcclxuICAgICAgICBpZiAoYXN0ZXJpc2tEaXYgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzdGVyaXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuU0hPV19DTEFTUykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3Rlcmlza0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLkhJREVfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUZpZWxkRGVsZXRlQnRuXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlRmllbGREZWxldGVCdG5cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTrk5zsnZggRGVsZXRl67KE7Yq87J2YIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlICDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIOy1nOyDgeuLqCBFbGVtZW5066W8IOqwkOyLuOqzoCDsnojripQgRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtDYWxsQmFja30gYnRuQ2xpY2tFdnRIYW5kbGVyICDrsoTtirzsnYQg64iM66CA7J2EIOuVjCDrj5nsnpHtlaAgSGFuZGxlclxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH0g7ZWE65Oc7J2YIERlbGV0ZeuyhO2KvOydmCBlbGVtZW50XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVGaWVsZERlbGV0ZUJ0bihvd25lck5vZGUsIGJ0bkNsaWNrRXZ0SGFuZGxlcikge1xyXG4gICAgICAgIGxldCBkZWxldGVCdG5EaXYgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAuXCIgKyBDT05TVEFOVFMuRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ0bkRpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkZWxldGVCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5TSE9XX0NMQVNTKTtcclxuICAgICAgICAgICAgbGV0IHZpZXdlciA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIENPTlNUQU5UUy5URU1QTEFURV9QREZfVklFV0VSKTtcclxuICAgICAgICAgICAgdmlld2VyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuU0hPV19DTEFTUykpIHtcclxuICAgICAgICAgICAgZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuSElERV9DTEFTUykpIHtcclxuICAgICAgICAgICAgZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC50b2dnbGUoQ09OU1RBTlRTLkhJREVfQ0xBU1MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBkZWxldGVCdG5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkNsaWNrRXZ0SGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUJ0bkRpdjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiByZXBvc2l0aW9uRmllbGREZWxldGVCdG5cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNyZXBvc2l0aW9uRmllbGREZWxldGVCdG5cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTrk5zsnZggRGVsZXRl67KE7Yq87J2YIOychOy5mOulvCDsobDsoJXtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBvd25lck5vZGUgIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geCAgRmllbGTsnZggWOyijO2RnFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHkgIEZpZWxk7J2YIHnsooztkZxcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgRmllbGTsnZggd2lkdGhcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IO2VhOuTnOydmCBEZWxldGXrsoTtirzsnZggZWxlbWVudFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVwb3NpdGlvbkZpZWxkRGVsZXRlQnRuKG93bmVyTm9kZSwgeCwgeSwgd2lkdGgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ0bkRpdiA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiIC5cIiArIENPTlNUQU5UUy5GSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTKTtcclxuICAgICAgICBpZiAoZGVsZXRlQnRuRGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlQnRuRGl2IGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5ISURFX0NMQVNTKSkge1xyXG4gICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuSElERV9DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZUJ0bkRpdi5zdHlsZS5sZWZ0ID0geCArIHdpZHRoICsgMTAgKyBcInB4XCI7XHJcbiAgICAgICAgZGVsZXRlQnRuRGl2LnN0eWxlLnRvcCA9IHkgKyAxMCArIFwicHhcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBhZGRTaWduU3ZnVG9DYW52YXNcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNhZGRTaWduU3ZnVG9DYW52YXNcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBjYW52YXPsl5AgU1ZH66W8IOy2lOqwgO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgIOy2lOqwgO2VoCBjYW52YXPsnZggU2lnbiBGaWVsZCBPYmplY3RcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY2FudmFzRGl2ICBjYW52YXPsnZggRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNpZ25XaWR0aCAg7ISc66qF7ZWE65Oc7J2YIFdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2lnbkhlaWdodCAg7ISc66qF7ZWE65Oc7J2YIGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN2ZyAgU1ZHIFN0cmluZ1xyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBGYWJyaWMgY2FudmFzIE9iamVjdDogU1ZH642w7J207YSw6rCAIOy2lOqwgOuQnCBDYW52YXNcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFNpZ25TdmdUb0NhbnZhcyhmaWVsZCwgY2FudmFzRGl2LCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIHN2Zykge1xyXG4gICAgICAgIGxldCBjYW52YXNPYmogPSBjYW52YXNEaXY7XHJcbiAgICAgICAgaWYgKGNhbnZhc0RpdiA9PT0gbnVsbCB8fCBjYW52YXNEaXYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjYW52YXNPYmogPSBmaWVsZC5tX2lkICsgXCJfY2FudmFzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGF0aWNDYW52czEgPSBuZXcgZmFicmljLlN0YXRpY0NhbnZhcyhjYW52YXNPYmosIHsgaXNEcmF3aW5nTW9kZTogZmFsc2UgfSk7XHJcbiAgICAgICAgc3RhdGljQ2FudnMxLnNldEhlaWdodChzaWduSGVpZ2h0KTtcclxuICAgICAgICBzdGF0aWNDYW52czEuc2V0V2lkdGgoc2lnbldpZHRoKTtcclxuXHJcbiAgICAgICAgZmFicmljLmxvYWRTVkdGcm9tU3RyaW5nKHN2ZywgZnVuY3Rpb24gKG9iamVjdHMsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGZhYnJpYy51dGlsLmdyb3VwU1ZHRWxlbWVudHMob2JqZWN0cywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGxldCB4U2NhbGUgPSBzdGF0aWNDYW52czEud2lkdGggLyBvYmoud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB5U2NhbGUgPSBzdGF0aWNDYW52czEuaGVpZ2h0IC8gb2JqLmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUxID0geFNjYWxlID4geVNjYWxlID8geVNjYWxlIDogeFNjYWxlO1xyXG4gICAgICAgICAgICBvYmouc2NhbGUoc2NhbGUxKTtcclxuXHJcbiAgICAgICAgICAgIG9iai5zdHJva2VXaWR0aCA9IG9iai5zdHJva2VXaWR0aCAvIHNjYWxlMTtcclxuICAgICAgICAgICAgaWYgKG9iai5fb2JqZWN0cyAhPT0gbnVsbCAmJiBvYmouX29iamVjdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdHMgPSBvYmouX29iamVjdHM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBvYmplY3RzLmxlbmd0aDsgKytpZHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RzW2lkeF0uc3Ryb2tlV2lkdGggPSBvYmplY3RzW2lkeF0uc3Ryb2tlV2lkdGggLyBzY2FsZTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGljQ2FudnMxLmFkZChvYmopLmNlbnRlck9iamVjdChvYmopLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICBvYmouc2V0Q29vcmRzKCk7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgIG51bGwsXHJcbiAgICAgICAgIHtjcm9zc09yaWdpbjogJ2Fub255bW91cycgLy8gQ09SUyDshKTsoJVcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3RhdGljQ2FudnMxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGFkZE9iamVjdHNUb0NhbnZhc1xyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2FkZE9iamVjdHNUb0NhbnZhc1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIGNhbnZhc+yXkCBPYmplY3Rz66W8IOy2lOqwgO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSAg7ZW064u5IO2UhOuhnOygne2KuOydmCDstZzsg4Hri6ggRWxlbWVudOulvCDqsJDsi7jqs6Ag7J6I64qUIEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCAg7LaU6rCA7ZWgIGNhbnZhc+ydmCBTaWduIEZpZWxkIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjYW52YXNEaXYgIGNhbnZhc+ydmCBFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2lnbldpZHRoICDshJzrqoXtlYTrk5zsnZggV2lkdGhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzaWduSGVpZ2h0ICDshJzrqoXtlYTrk5zsnZggaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvYmplY3RzICA6IFBhdGjsnZgg66as7Iqk7Yq4XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3JnV2lkdGggIOy2lOqwgOuQoCBPYmplY3Rz7J2YIFdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3JnSGVpZ2h0ICA6IOy2lOqwgOuQoCBPYmplY3Rz7J2YIGhlaWdodFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBGYWJyaWMgY2FudmFzIE9iamVjdDogT2JqZWN0c+qwgCDstpTqsIDrkJwgQ2FudmFzXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRPYmplY3RzVG9DYW52YXMoX293bmVyTm9kZSwgZmllbGQsIGNhbnZhc0Rpdiwgc2lnbldpZHRoLCBzaWduSGVpZ2h0LCBvYmplY3RzLCBvcmdXaWR0aCwgb3JnSGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGNhbnZhc09iaiA9IGNhbnZhc0RpdjtcclxuICAgICAgICBpZiAoY2FudmFzRGl2ID09PSBudWxsIHx8IGNhbnZhc0RpdiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNJZCA9IGZpZWxkLm1faWQgKyBcIl9jYW52YXNcIjtcclxuICAgICAgICAgICAgY2FudmFzT2JqID0gX293bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiI1wiICsgY2FudmFzSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhdGljQ2FudnMxID0gbmV3IGZhYnJpYy5TdGF0aWNDYW52YXMoY2FudmFzT2JqLCB7IGlzRHJhd2luZ01vZGU6IGZhbHNlIH0pO1xyXG4gICAgICAgIHN0YXRpY0NhbnZzMS5zZXRIZWlnaHQoc2lnbkhlaWdodCk7XHJcbiAgICAgICAgc3RhdGljQ2FudnMxLnNldFdpZHRoKHNpZ25XaWR0aCk7XHJcbiAgICAgICAgbGV0IHhTY2FsZSA9IHN0YXRpY0NhbnZzMS53aWR0aCAvIG9yZ1dpZHRoO1xyXG4gICAgICAgIGxldCB5U2NhbGUgPSBzdGF0aWNDYW52czEuaGVpZ2h0IC8gb3JnSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHNjYWxlMSA9IHhTY2FsZSA+IHlTY2FsZSA/IHlTY2FsZSA6IHhTY2FsZTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHNjYWxlMSk7XHJcbiAgICAgICAgZmFicmljLnV0aWwuZW5saXZlbk9iamVjdHMob2JqZWN0cywgZnVuY3Rpb24gKG9ianMpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdSZW5kZXJPbkFkZFJlbW92ZSA9IHN0YXRpY0NhbnZzMS5yZW5kZXJPbkFkZFJlbW92ZTtcclxuICAgICAgICAgICAgc3RhdGljQ2FudnMxLnJlbmRlck9uQWRkUmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBnb3RvQ2VudGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKG9ianMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgZ290b0NlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gby5sZWZ0ICogc2NhbGUxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcCA9IG8udG9wICogc2NhbGUxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdvdG9DZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgIGxlZnQgPSAoKHN0YXRpY0NhbnZzMS53aWR0aCAtIG8ud2lkdGggKiBzY2FsZTEpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICB0b3AgPSAoKHN0YXRpY0NhbnZzMS5oZWlnaHQgLSBvLmhlaWdodCAqIHNjYWxlMSkgLyAyKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgby5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiBzY2FsZTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiBzY2FsZTEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IG8uc3Ryb2tlV2lkdGggLyBzY2FsZTFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3RhdGljQ2FudnMxLmFkZChvKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0aWNDYW52czEucmVuZGVyT25BZGRSZW1vdmUgPSBvcmlnUmVuZGVyT25BZGRSZW1vdmU7XHJcbiAgICAgICAgICAgIHN0YXRpY0NhbnZzMS5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgICAgc3RhdGljQ2FudnMxLmNhbGNPZmZzZXQoKTtcclxuICAgICAgICAgICAgaWYgKG9ianMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ianMgPSBzdGF0aWNDYW52czEuZ2V0T2JqZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyb3VwID0gbmV3IGZhYnJpYy5Hcm91cChvYmpzLCB7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogKChzdGF0aWNDYW52czEud2lkdGggLSBncm91cC53aWR0aCApIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAoKHN0YXRpY0NhbnZzMS5oZWlnaHQgLSBncm91cC5oZWlnaHQgKSAvIDIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZ3JvdXAuc2V0Q29vcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDYW52czEucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRpY0NhbnZzMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjbG9uZU9iamVjdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb25lT2JqZWN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIE9iamVjdCBkZWVwIGNvcHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdG9PYmogIOuzteyCrO2VoCBvYmplY3RcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gIOuzteyCrOuQnCBvYmplY3RcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNsb25lT2JqZWN0KG9iaikge1xyXG4gICAgICAgIHZhciBjbG9uZSA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lW2tleV0gPSBbLi4ub2JqW2tleV1dO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9uZVtrZXldID0gVXRpbHMuY2xvbmVPYmplY3Qob2JqW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY2xvbmVPYmplY3RUb09iamVjdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb25lT2JqZWN0VG9PYmplY3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBmcm9tT2Jq7J2YIOuNsOydtO2EsOulvCB0b09iauuhnCBkZWVwIGNvcHlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZnJvbU9iaiDrs7XsgqztlaAgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdG9PYmogIOuzteyCrOuQoCBvYmplY3RcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0g67O17IKs65CcIG9iamVjdFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2xvbmVPYmplY3RUb09iamVjdChmcm9tT2JqLCB0b09iaikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tT2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwicGFnZXNcIiB8fCBrZXkgPT09IFwiZmllbGRzXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJvbU9ialtrZXldID09IFwib2JqZWN0XCIgJiYgZnJvbU9ialtrZXldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRvT2JqW2tleV0gPSBVdGlscy5jbG9uZU9iamVjdChmcm9tT2JqW2tleV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9PYmpba2V5XSA9IGZyb21PYmpba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNsb25lRmFicmljQ2FudmFzXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvbmVGYWJyaWNDYW52YXNcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAgY2FudmFz7JeQIE9iamVjdHPrpbwg7LaU6rCA7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYW52YXNPYmogIE9iamVjdOqwgCDstpTqsIDrkKAgQ2FudmFzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb2JqZWN0cyDrs7XsgqzrkKAgT2JqZWN07J2YIOumrOyKpO2KuFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2xvbmVGYWJyaWNDYW52YXMoY2FudmFzT2JqLCBvYmplY3RzKSB7XHJcbiAgICAgICAgZmFicmljLnV0aWwuZW5saXZlbk9iamVjdHMob2JqZWN0cywgZnVuY3Rpb24gKG9ianMpIHtcclxuICAgICAgICAgICAgdmFyIG9yaWdSZW5kZXJPbkFkZFJlbW92ZSA9IGNhbnZhc09iai5yZW5kZXJPbkFkZFJlbW92ZTtcclxuICAgICAgICAgICAgY2FudmFzT2JqLnJlbmRlck9uQWRkUmVtb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc09iai5hZGQobyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYW52YXNPYmoucmVuZGVyT25BZGRSZW1vdmUgPSBvcmlnUmVuZGVyT25BZGRSZW1vdmU7XHJcbiAgICAgICAgICAgIGNhbnZhc09iai5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgICAgY2FudmFzT2JqLmNhbGNPZmZzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBpc1N0cmluZ0VtcHR5XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaXNTdHJpbmdFbXB0eVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOusuOyekOyXtOydtCDruYTslrTsnojripTsp4Ag7ZmV7J247ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIg7ZmV7J247ZWgIOusuOyekOyXtFxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0g67mE7Ja07J6I7Jy866m0IHRydWUg67mE7Ja07J6I7KeAIOyViuycvOuptCBmYWxzZVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmdFbXB0eShzdHIpIHtcclxuICAgICAgICBpZiAoc3RyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBtZXJnZVJlY3RcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNtZXJnZVJlY3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg65GQIFJlY3Trpbwg7ZWp7Lmc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByMSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgcmlnaHQ6IDB9IO2VqeyzkOyVvOuQmOuKlCBSZWN0IE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHIyIHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCByaWdodDogMH0g7ZWp7LOQ7JW865CY64qUIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCByaWdodDogMCwgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH06IO2VqeyzkOynhCBSZWN0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtZXJnZVJlY3QocjEsIHIyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogTWF0aC5taW4ocjEubGVmdCwgcjIubGVmdCksXHJcbiAgICAgICAgICAgIHRvcDogTWF0aC5taW4ocjEudG9wLCByMi50b3ApLFxyXG4gICAgICAgICAgICByaWdodDogTWF0aC5tYXgocjEucmlnaHQsIHIyLnJpZ2h0KSxcclxuICAgICAgICAgICAgYm90dG9tOiBNYXRoLm1heChyMS5ib3R0b20sIHIyLmJvdHRvbSksXHJcbiAgICAgICAgICAgIHg6IE1hdGgubWluKHIxLmxlZnQsIHIyLmxlZnQpLFxyXG4gICAgICAgICAgICB5OiBNYXRoLm1pbihyMS50b3AsIHIyLnRvcCksXHJcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLmFicyhNYXRoLm1heChyMS5yaWdodCwgcjIucmlnaHQpIC0gTWF0aC5taW4ocjEubGVmdCwgcjIubGVmdCkpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKE1hdGgubWF4KHIxLmJvdHRvbSwgcjIuYm90dG9tKSAtIE1hdGgubWluKHIxLnRvcCwgcjIudG9wKSksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGJvdW5kaW5nUmVjdFRvUmVjdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2JvdW5kaW5nUmVjdFRvUmVjdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIEJvdW5kaW5nUmVjdOulvCDsl6zquLDshJwg7IKs7Jqp7ZWgIFJlY3QgT2JqZWN066GcIOuzgOqyvVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IHtsZWZ0OiAwLCB3aXRoOiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSBCb3VuZGluZyBSZWN0IE9iamVjdFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgcmlnaHQ6IDB9OiDsl6zquLDshJwg7IKs7Jqp7ZWgIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBib3VuZGluZ1JlY3RUb1JlY3QocmVjdCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcclxuICAgICAgICAgICAgcmlnaHQ6IHJlY3QubGVmdCArIHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGJvdHRvbTogcmVjdC50b3AgKyByZWN0LmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBtZXJnZU9iamVjdHNSZWN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjbWVyZ2VPYmplY3RzUmVjdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIENhbnZhc+ydmCBQYXRoIE9iamVjdHPsnZggUmVjdOuTpOydhCDtlZjrgpjroZwg7ZWp7Lmc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYW52YXMgRmFicmljIGNhbnZhczogUGF0aCBPYmplY3Rz6rCAIOyeiOuKlCBjYW52YXNcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0ge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwfTog7Jes6riw7IScIOyCrOyaqe2VoCBSZWN0IE9iamVjdFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWVyZ2VPYmplY3RzUmVjdChjYW52YXMpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IG51bGw7XHJcbiAgICAgICAgY2FudmFzLmZvckVhY2hPYmplY3QoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICB2YXIgYm91bmQgPSBvYmouZ2V0Qm91bmRpbmdSZWN0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZWN0ID0gVXRpbHMubWVyZ2VSZWN0KFV0aWxzLmJvdW5kaW5nUmVjdFRvUmVjdChib3VuZCksIFV0aWxzLmJvdW5kaW5nUmVjdFRvUmVjdChib3VuZCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVjdCA9IFV0aWxzLm1lcmdlUmVjdChyZWN0LCBVdGlscy5ib3VuZGluZ1JlY3RUb1JlY3QoYm91bmQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gbWVyZ2VGaWVsZHNCQm94XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjbWVyZ2VGaWVsZHNCQm94XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgRmllbGQgTGlzdOydmCBCQm9465Ok7J2EIO2VmOuCmOuhnCDtlansuZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmllbGRzIEZpZWxk7J2YIOuwsOyXtFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgcmlnaHQ6IDB9OiDsl6zquLDshJwg7IKs7Jqp7ZWgIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtZXJnZUZpZWxkc0JCb3goZmllbGRzKSB7XHJcbiAgICAgICAgbGV0IHJlY3QgPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGZpZWxkcy5sZW5ndGg7IGlkeCArPSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBib3VuZCA9IGZpZWxkc1tpZHhdLmdldEJCb3goKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QgPSBVdGlscy5tZXJnZVJlY3QoVXRpbHMuYm91bmRpbmdSZWN0VG9SZWN0KGJvdW5kKSwgVXRpbHMuYm91bmRpbmdSZWN0VG9SZWN0KGJvdW5kKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWN0ID0gVXRpbHMubWVyZ2VSZWN0KHJlY3QsIFV0aWxzLmJvdW5kaW5nUmVjdFRvUmVjdChib3VuZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGltYWdlRmlsZVRvQmFzZTY0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaW1hZ2VGaWxlVG9CYXNlNjRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBJbWFnZe2MjOydvOydhCDsnb3slrQgQmFzZTY0IFN0cmluZ+ycvOuhnCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpbGUgRmlsZTog7J2066+47KeAIO2MjOydvOydmCBGaWxlIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtDYWxsYmFja30gY2FsbEJhY2tGdW5jICBCYXNlNjQg66y47J6Q7Je07J2EIOuwm+ydhCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW1hZ2VGaWxlVG9CYXNlNjQoZmlsZSwgY2FsbEJhY2tGdW5jKSB7XHJcbiAgICAgICAgaWYgKGZpbGUgPT09IHVuZGVmaW5lZCB8fCBmaWxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYWxsQmFja0Z1bmMocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNoYW5nZUxvY2FsZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NoYW5nZUxvY2FsZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2YhOyerCDslrjslrTrpbwg7YyM652866+47YSw7JeQIOunnuqyjCDrs4DtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxvY2FsZSDrsJTqv4Ag7Ja47Ja0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjaGFuZ2VMb2NhbGUobG9jYWxlKSB7XHJcbiAgICAgICAgVXRpbHMubG9jYWxlID0gbG9jYWxlO1xyXG4gICAgICAgIFV0aWxzLnRyYW5zbGF0b3IudHJhbnNsYXRlUGFnZVRvKGxvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gdHJhbnNsYXRlRm9yS2V5XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjdHJhbnNsYXRlRm9yS2V5XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7YKk7JeQIO2VtOuLue2VmOuKlCDrrLjsnpDsl7TsnYQg7ZiE7J6sIOyWuOyWtOuhnCDrsJTqvrzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSDrsJTqv4Ag66y47J6Q7Je07JeQIO2VtOuLue2VmOuKlCDtgqRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyYW5zbGF0ZUZvcktleShrZXkpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMudHJhbnNsYXRvci50cmFuc2xhdGVGb3JLZXkoa2V5LCBVdGlscy5sb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHRyYW5zbGF0b3JGaWxlTG9jYXRpb25cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN0cmFuc2xhdG9yRmlsZUxvY2F0aW9uXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg64uk6rWt7Ja0IOyWuOyWtCDtjIzsnbzsnZgg7JyE7LmY66W8IOyngOygle2VnOuLpC5cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBsb2NhbGhvc3Q6NTUwMC9qcy9wZGZfZm9ybS9pMThu7J2YIOqyveyasCAgXCIvanMvcGRmX2Zvcm0vaTE4blwiXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlc0xvY2F0aW9uIOyWuOyWtO2MjOydvOydmCDsnITsuZgo7KCI64yAIOqyveuhnClcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyYW5zbGF0b3JGaWxlTG9jYXRpb24oZmlsZXNMb2NhdGlvbikge1xyXG4gICAgICAgIFV0aWxzLnRyYW5zbGF0b3IuY29uZmlnLmZpbGVzTG9jYXRpb24gPSBmaWxlc0xvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGFkZFRyYW5zbGF0b3JcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNhZGRUcmFuc2xhdG9yXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg64uk6rWt7Ja0IOyWuOyWtOulvCDstpTqsIDtlZzri6QuXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogYWRkVHJhbnNsYXRvcihcImpwXCIsIGpzb25EYXRhKVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbG9jYWxlIOyWuOyWtCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsYW5nRGF0YSBpMThuL2tvLmpzb27qs7wg6rCZ7J2AIOyWkeyLneycvOuhnCDrkJwgSlNPTuydhCDtjIzsi7HtlZwg642w7J207YSwXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRUcmFuc2xhdG9yKGxvY2FsZSwgbGFuZ0RhdGEpIHtcclxuICAgICAgICBVdGlscy50cmFuc2xhdG9yLmFkZChsb2NhbGUsIGxhbmdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXBwZW5kRm9udEZhbWlseShmb250RmFtaWx5QXJyKSB7XHJcbiAgICAgICAgVXRpbHMuZm9udEZhbWlseUNvbWJvQm94ID0gVXRpbHMuZm9udEZhbWlseUNvbWJvQm94LmNvbmNhdChmb250RmFtaWx5QXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVfdXVpZHY0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICtcclxuICAgICAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xyXG4gICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbnZhciBnID1cbiAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsKSB8fFxuICB7fVxuXG52YXIgc3VwcG9ydCA9IHtcbiAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBnLFxuICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gZyAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgYmxvYjpcbiAgICAnRmlsZVJlYWRlcicgaW4gZyAmJlxuICAgICdCbG9iJyBpbiBnICYmXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBnLFxuICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBnXG59XG5cbmZ1bmN0aW9uIGlzRGF0YVZpZXcob2JqKSB7XG4gIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxufVxuXG5pZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgXVxuXG4gIHZhciBpc0FycmF5QnVmZmVyVmlldyA9XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3IHx8XG4gICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICB9XG4gIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+IV0vaS50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWU6IFwiJyArIG5hbWUgKyAnXCInKVxuICB9XG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbmZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gIHZhciBpdGVyYXRvciA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdGhpcy5tYXAgPSB7fVxuXG4gIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgaWYgKGhlYWRlci5sZW5ndGggIT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXJzIGNvbnN0cnVjdG9yOiBleHBlY3RlZCBuYW1lL3ZhbHVlIHBhaXIgdG8gYmUgbGVuZ3RoIDIsIGZvdW5kJyArIGhlYWRlci5sZW5ndGgpXG4gICAgICB9XG4gICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKG5hbWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIGl0ZW1zLnB1c2godmFsdWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbn1cblxuZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICBpZiAoYm9keS5fbm9Cb2R5KSByZXR1cm5cbiAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gIH1cbiAgYm9keS5ib2R5VXNlZCA9IHRydWVcbn1cblxuZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgIH1cbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICB2YXIgbWF0Y2ggPSAvY2hhcnNldD0oW0EtWmEtejAtOV8tXSspLy5leGVjKGJsb2IudHlwZSlcbiAgdmFyIGVuY29kaW5nID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICd1dGYtOCdcbiAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYiwgZW5jb2RpbmcpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJylcbn1cblxuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gIGlmIChidWYuc2xpY2UpIHtcbiAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gIH0gZWxzZSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICB9XG59XG5cbmZ1bmN0aW9uIEJvZHkoKSB7XG4gIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgIC8qXG4gICAgICBmZXRjaC1tb2NrIHdyYXBzIHRoZSBSZXNwb25zZSBvYmplY3QgaW4gYW4gRVM2IFByb3h5IHRvXG4gICAgICBwcm92aWRlIHVzZWZ1bCB0ZXN0IGhhcm5lc3MgZmVhdHVyZXMgc3VjaCBhcyBmbHVzaC4gSG93ZXZlciwgb25cbiAgICAgIEVTNSBicm93c2VycyB3aXRob3V0IGZldGNoIG9yIFByb3h5IHN1cHBvcnQgcG9sbHlmaWxscyBtdXN0IGJlIHVzZWQ7XG4gICAgICB0aGUgcHJveHktcG9sbHlmaWxsIGlzIHVuYWJsZSB0byBwcm94eSBhbiBhdHRyaWJ1dGUgdW5sZXNzIGl0IGV4aXN0c1xuICAgICAgb24gdGhlIG9iamVjdCBiZWZvcmUgdGhlIFByb3h5IGlzIGNyZWF0ZWQuIFRoaXMgY2hhbmdlIGVuc3VyZXNcbiAgICAgIFJlc3BvbnNlLmJvZHlVc2VkIGV4aXN0cyBvbiB0aGUgaW5zdGFuY2UsIHdoaWxlIG1haW50YWluaW5nIHRoZVxuICAgICAgc2VtYW50aWMgb2Ygc2V0dGluZyBSZXF1ZXN0LmJvZHlVc2VkIGluIHRoZSBjb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgIF9pbml0Qm9keSBpcyBjYWxsZWQuXG4gICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1hc3NpZ25cbiAgICB0aGlzLmJvZHlVc2VkID0gdGhpcy5ib2R5VXNlZFxuICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgIGlmICghYm9keSkge1xuICAgICAgdGhpcy5fbm9Cb2R5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICB2YXIgaXNDb25zdW1lZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAoaXNDb25zdW1lZCkge1xuICAgICAgICByZXR1cm4gaXNDb25zdW1lZFxuICAgICAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5fYm9keUFycmF5QnVmZmVyKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5idWZmZXIuc2xpY2UoXG4gICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgYXMgQXJyYXlCdWZmZXInKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbnZhciBtZXRob2RzID0gWydDT05ORUNUJywgJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BBVENIJywgJ1BPU1QnLCAnUFVUJywgJ1RSQUNFJ11cblxuZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlcXVlc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgIH1cbiAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICB0aGlzLnNpZ25hbCA9IGlucHV0LnNpZ25hbFxuICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICB9XG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nXG4gIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgfVxuICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gIHRoaXMuc2lnbmFsID0gb3B0aW9ucy5zaWduYWwgfHwgdGhpcy5zaWduYWwgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ0Fib3J0Q29udHJvbGxlcicgaW4gZykge1xuICAgICAgdmFyIGN0cmwgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICByZXR1cm4gY3RybC5zaWduYWw7XG4gICAgfVxuICB9KCkpO1xuICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gIH1cbiAgdGhpcy5faW5pdEJvZHkoYm9keSlcblxuICBpZiAodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gJ25vLXN0b3JlJyB8fCBvcHRpb25zLmNhY2hlID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgJ18nIHBhcmFtZXRlciBpbiB0aGUgcXVlcnkgc3RyaW5nXG4gICAgICB2YXIgcmVQYXJhbVNlYXJjaCA9IC8oWz8mXSlfPVteJl0qL1xuICAgICAgaWYgKHJlUGFyYW1TZWFyY2gudGVzdCh0aGlzLnVybCkpIHtcbiAgICAgICAgLy8gSWYgaXQgYWxyZWFkeSBleGlzdHMgdGhlbiBzZXQgdGhlIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnJlcGxhY2UocmVQYXJhbVNlYXJjaCwgJyQxXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGEgbmV3ICdfJyBwYXJhbWV0ZXIgdG8gdGhlIGVuZCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdmFyIHJlUXVlcnlTdHJpbmcgPSAvXFw/L1xuICAgICAgICB0aGlzLnVybCArPSAocmVRdWVyeVN0cmluZy50ZXN0KHRoaXMudXJsKSA/ICcmJyA6ICc/JykgKyAnXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG59XG5cbmZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgYm9keVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoJyYnKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gZm9ybVxufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKVxuICAvLyBBdm9pZGluZyBzcGxpdCB2aWEgcmVnZXggdG8gd29yayBhcm91bmQgYSBjb21tb24gSUUxMSBidWcgd2l0aCB0aGUgY29yZS1qcyAzLjYuMCByZWdleCBwb2x5ZmlsbFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoL2lzc3Vlcy83NDhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzc1MVxuICBwcmVQcm9jZXNzZWRIZWFkZXJzXG4gICAgLnNwbGl0KCdcXHInKVxuICAgIC5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaGVhZGVyLmluZGV4T2YoJ1xcbicpID09PSAwID8gaGVhZGVyLnN1YnN0cigxLCBoZWFkZXIubGVuZ3RoKSA6IGhlYWRlclxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZXNwb25zZSAnICsgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbkJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXNcbiAgaWYgKHRoaXMuc3RhdHVzIDwgMjAwIHx8IHRoaXMuc3RhdHVzID4gNTk5KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNwb25zZSc6IFRoZSBzdGF0dXMgcHJvdmlkZWQgKDApIGlzIG91dHNpZGUgdGhlIHJhbmdlIFsyMDAsIDU5OV0uXCIpXG4gIH1cbiAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQgPT09IHVuZGVmaW5lZCA/ICcnIDogJycgKyBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxufVxuXG5Cb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG5SZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgdXJsOiB0aGlzLnVybFxuICB9KVxufVxuXG5SZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMjAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gIHJlc3BvbnNlLnN0YXR1cyA9IDBcbiAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbnZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG5SZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbn1cblxuZXhwb3J0IHZhciBET01FeGNlcHRpb24gPSBnLkRPTUV4Y2VwdGlvblxudHJ5IHtcbiAgbmV3IERPTUV4Y2VwdGlvbigpXG59IGNhdGNoIChlcnIpIHtcbiAgRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdmFyIGVycm9yID0gRXJyb3IobWVzc2FnZSlcbiAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2tcbiAgfVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBET01FeGNlcHRpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgfVxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cbiAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgfVxuICAgICAgLy8gVGhpcyBjaGVjayBpZiBzcGVjaWZpY2FsbHkgZm9yIHdoZW4gYSB1c2VyIGZldGNoZXMgYSBmaWxlIGxvY2FsbHkgZnJvbSB0aGUgZmlsZSBzeXN0ZW1cbiAgICAgIC8vIE9ubHkgaWYgdGhlIHN0YXR1cyBpcyBvdXQgb2YgYSBub3JtYWwgcmFuZ2VcbiAgICAgIGlmIChyZXF1ZXN0LnVybC5zdGFydHNXaXRoKCdmaWxlOi8vJykgJiYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+IDU5OSkpIHtcbiAgICAgICAgb3B0aW9ucy5zdGF0dXMgPSAyMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IHRpbWVkIG91dCcpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaXhVcmwodXJsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdXJsID09PSAnJyAmJiBnLmxvY2F0aW9uLmhyZWYgPyBnLmxvY2F0aW9uLmhyZWYgOiB1cmxcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCBmaXhVcmwocmVxdWVzdC51cmwpLCB0cnVlKVxuXG4gICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhocikge1xuICAgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdXBwb3J0LmFycmF5QnVmZmVyXG4gICAgICApIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5pdCAmJiB0eXBlb2YgaW5pdC5oZWFkZXJzID09PSAnb2JqZWN0JyAmJiAhKGluaXQuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMgfHwgKGcuSGVhZGVycyAmJiBpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBnLkhlYWRlcnMpKSkge1xuICAgICAgdmFyIG5hbWVzID0gW107XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbml0LmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBuYW1lcy5wdXNoKG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG5vcm1hbGl6ZVZhbHVlKGluaXQuaGVhZGVyc1tuYW1lXSkpXG4gICAgICB9KVxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWVzLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgfSlcbn1cblxuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cbmlmICghZy5mZXRjaCkge1xuICBnLmZldGNoID0gZmV0Y2hcbiAgZy5IZWFkZXJzID0gSGVhZGVyc1xuICBnLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIGcuUmVzcG9uc2UgPSBSZXNwb25zZVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBAbW9kdWxlIFJlYWRlci9QcmV2aWV3TW9kXHJcbiAqL1xyXG5cclxuY29uc29sZS5sb2coJ1ByZXZpZXcgVkVSU0lPTjonLCBWRVJTSU9OKTtcclxuXHJcbmltcG9ydCB7Q09OU1RBTlRTfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBQREZDdXJzb3JUb29scyB9IGZyb20gJy4vLi4vcGRmLmN1cnNvci50b29sJztcclxuaW1wb3J0IHtSZWFkZXJNb2R9IGZyb20gJy4vcmVhZGVyTW9kLmpzJztcclxuXHJcbnZhciBwZGZDdXJzb3JUb29scywgcGRmVmlld2VyLCBwcmV2aWV3TW9kLCBfX3ByZXZpZXdFdmVudEJ1cywgX19wcmV2aWV3T3duZXJOb2RlLCBfX3ByZXZpZXdVc2VySW5mb3MsIF9fcHJldmlld0pzb25EYXRhO1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOy0iOq4sCDshYvtjIXsnYQg7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSA6IO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGxhbmdzICDsgqzsmqntlaAg64uk6rWt7Ja0IOumrOyKpO2KuCDquLDrs7jqsJLsnLzroZwgW1wia29cIiwgXCJlblwiXeqwgCDrk6TslrTsnojri6QuXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogaW5pdERvY3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERvY3VtZW50KG93bmVyTm9kZSwgbGFuZ3MgPSBbXCJrb1wiLCBcImVuXCJdKSB7XHJcbiAgICBfX3ByZXZpZXdPd25lck5vZGUgPSBvd25lck5vZGU7XHJcblxyXG4gICAgVXRpbHMudHJhbnNsYXRvci5mZXRjaChsYW5ncykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gLT4gVHJhbnNsYXRpb25zIGFyZSByZWFkeS4uLlxyXG4gICAgICAgIFV0aWxzLmNoYW5nZUxvY2FsZShsYW5nc1sxXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGRmQ29udGFpbmVyID0gX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgQ09OU1RBTlRTLlBSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSKTtcclxuICAgIF9fcHJldmlld0V2ZW50QnVzID0gbmV3IHBkZmpzVmlld2VyLkV2ZW50QnVzKCk7XHJcbiAgICBwZGZDdXJzb3JUb29scyA9IG5ldyBQREZDdXJzb3JUb29scyh7XHJcbiAgICAgICAgY29udGFpbmVyOiBwZGZDb250YWluZXIsXHJcbiAgICAgICAgZXZlbnRCdXM6IF9fcHJldmlld0V2ZW50QnVzLFxyXG4gICAgICAgIGN1cnNvclRvb2xPbkxvYWQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIHBkZlZpZXdlciA9IG5ldyBwZGZqc1ZpZXdlci5QREZWaWV3ZXIoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogcGRmQ29udGFpbmVyLFxyXG4gICAgICAgIGV2ZW50QnVzOiBfX3ByZXZpZXdFdmVudEJ1cyxcclxuICAgICAgICB0ZXh0TGF5ZXJNb2RlOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJldmlld01vZCA9IG5ldyBSZWFkZXJNb2QocGRmVmlld2VyLCBfX3ByZXZpZXdPd25lck5vZGUpO1xyXG4gICAgcHJldmlld01vZC5yZWFkZXJJbml0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gUERG66y47ISc66W8IOuhnOuTnO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHBkZkZpbGVVcmwgIFBERiBGSUxFIFVSTFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGVEYXRhIOq4sOyhtCBUZW1wbGF0ZeyXkOyEnCDsoIDsnqXtlZwgSnNvbiBPYmplY3RcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBsb2FkRG9jdW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRG9jdW1lbnQocGRmRmlsZVVybCwgdGVtcGxhdGVEYXRhKSB7XHJcblxyXG4gICAgX19wcmV2aWV3RXZlbnRCdXMub24oXCJwYWdlcmVuZGVyZWRcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZVJlbmRlcmVkOiBcIiArIGV2dCk7XHJcbiAgICAgICAgcHJldmlld01vZC5wYWdlUmVuZGVyKGV2dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfX3ByZXZpZXdFdmVudEJ1cy5vbihcInBhZ2VjaGFuZ2luZ1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdlY2hhbmdpbmdcIik7XHJcbiAgICAgICAgZG9jdW1lbnRQYWdlU2V0dGluZ3MoZXZ0LnBhZ2VOdW1iZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX19wcmV2aWV3RXZlbnRCdXMub24oXCJzY2FsZWNoYW5naW5nXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxlY2hhbmdpbmdcIik7XHJcbiAgICAgICAgY2hhbmdlTGF5ZXJTaXplKGV2dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfX3ByZXZpZXdFdmVudEJ1cy5vbihcInBhZ2VzaW5pdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdlc2luaXRcIik7XHJcbiAgICAgICAgcGRmVmlld2VyLmN1cnJlbnRTY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gV2UgY2FuIHVzZSBwZGZWaWV3ZXIgbm93LCBlLmcuIGxldCdzIGNoYW5nZSBkZWZhdWx0IHNjYWxlLlxyXG5cclxuICAgICAgICBsZXQgdG90YWxQYWdlID0gX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJOdW0tUGFnZXNcIik7XHJcbiAgICAgICAgdG90YWxQYWdlLnRleHRDb250ZW50ID0gXCIgLyBcIiArIHBkZlZpZXdlci5wYWdlc0NvdW50O1xyXG4gICAgICAgIGRvY3VtZW50UGFnZUJ0bkVuYWJsZShwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIC8vIHByZXZpZXdNb2QubG9hZEpzb25EYXRhKHRlbXBsYXRlRGF0YSk7XHJcblxyXG4gICAgICAgIHByZXZpZXdNb2QubG9hZEpzb25EYXRhV2l0aFVzZXJJbmZvKFxyXG4gICAgICAgICAgdGVtcGxhdGVEYXRhLFxyXG4gICAgICAgICAgX19wcmV2aWV3VXNlckluZm9zWzBdLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbG9hZGluZ1Rhc2sgPSBwZGZqc0xpYi5nZXREb2N1bWVudCh7XHJcbiAgICAgICAgdXJsOiBwZGZGaWxlVXJsLFxyXG4gICAgICAgIGNNYXBVcmw6ICcvanMvcGRmX2Zvcm0vcGRmanMvY21hcHMvJyxcclxuICAgICAgICBjTWFwUGFja2VkOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbihmdW5jdGlvbiAocGRmRG9jdW1lbnQpIHtcclxuICAgICAgICBwZGZEb2N1bWVudC5nZXREYXRhKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcGRmVmlld2VyLmN1cnJlbnRTY2FsZSA9IDE7XHJcbiAgICAgICAgcGRmVmlld2VyLnNldERvY3VtZW50KHBkZkRvY3VtZW50KVxyXG4gICAgICAgIHBkZkN1cnNvclRvb2xzLnN3aXRjaFRvb2woMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGRmVmlld2VyLnBhZ2VWaWV3c1JlYWR5KTtcclxuICAgICAgICAvLyBkb2N1bWVudFJlYWR5Y2hlY2socGRmVmlld2VyLnBhZ2VWaWV3c1JlYWR5KTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIF9fcHJldmlld0pzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkodGVtcGxhdGVEYXRhKTtcclxuXHJcbiAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIlpvb20tT3V0LUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRab29tT3V0KTtcclxuICAgIF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiWm9vbS1Jbi1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50Wm9vbUluKTtcclxuXHJcbiAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tRmlyc3QtQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEdvdG9GaXJzdCk7XHJcbiAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tUHJldi1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50R290b1ByZXYpO1xyXG4gICAgX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLU5leHQtQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEdvdG9OZXh0KTtcclxuICAgIF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1MYXN0LUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRHb3RvTGFzdCk7XHJcbiAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcInNjYWxlU2VsZWN0Q29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2NhbGVTZWxlY3Rvcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZiE7J6sIOyjvOyWtOynhCDshJzrqoXsnpAg7KCV67O065Ok7J2EIOq4sOykgOycvOuhnCBUZW1wbGF0ZSBGaWVsZOygleuztOulvCDrsJjtmZjtlZzri6QuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH06IFRlbXBsYXRlIEZpZWxkIOygleuztFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGdldEpzb25EYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SnNvbkRhdGEoKSB7XHJcbiAgICBsZXQganNvbkRhdGEgPSBfX3ByZXZpZXdKc29uRGF0YTtcclxuICAgIGxldCBkYXRhQXJyYXkgPSBbXTtcclxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IF9fcHJldmlld1VzZXJJbmZvcy5sZW5ndGg7ICsraWR4KSB7XHJcbiAgICAgICAgbGV0IG9yZ0RhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcclxuICAgICAgICBvcmdEYXRhLmZvcm1lckxpc3QgPSBvcmdEYXRhLmZvcm1lckxpc3Quc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgbGV0IG9iaiA9IFV0aWxzLmNsb25lT2JqZWN0VG9PYmplY3QoX19wcmV2aWV3VXNlckluZm9zW2lkeF0sIG9yZ0RhdGEuZm9ybWVyTGlzdFswXSk7XHJcbiAgICAgICAgZGF0YUFycmF5LnB1c2goSlNPTi5zdHJpbmdpZnkob3JnRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFBcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDtlYTsiJgg7ZWE65Oc6rCAIOu5hOyWtOyeiOuKlOyngCDsl6zrtoDrpbwg67CY7ZmY7ZWc64ukLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDtlYTsiJgg7ZWE65Oc6rCAIOu5hOyWtOyeiOuKlOyngCDsl6zrtoBcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSgpIHtcclxuICAgIHJldHVybiBwcmV2aWV3TW9kLmlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDshJzrqoXsnpAg7KCV67O0IOumrOyKpO2KuOuhnCDtmZTrqbTsnYQg6rWs7ISx7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSB1c2VySW5mb0xpc3QgICDshJzrqoXsnpAg7KCV67O0IOumrOyKpO2KuFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGJ1aWxkVXNlckluZm9MaXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRVc2VySW5mb0xpc3QodXNlckluZm9MaXN0KSB7XHJcbiAgICBfX3ByZXZpZXdVc2VySW5mb3MgPSB1c2VySW5mb0xpc3Q7XHJcbiAgICBjb25zdCBvd25lckRvbSA9IF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNFZGl0b3ItVXNlci1Db21wb25lbnRfQm94XCIpO1xyXG4gICAgVXRpbHMucmVtb3ZlQWxsQ2hpbGROb2RlKG93bmVyRG9tKTtcclxuICAgIGZvciAodmFyIGNudCA9IDA7IGNudCA8IF9fcHJldmlld1VzZXJJbmZvcy5sZW5ndGg7ICsrY250KSB7XHJcbiAgICAgICAgbGV0IGZpZWxkTGlzdERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZmllbGRMaXN0RG9tLnNldEF0dHJpYnV0ZShcImRhdGEtdXNlci1rZXlcIiwgY250KTtcclxuICAgICAgICBmaWVsZExpc3REb20uY2xhc3NMaXN0LmFkZChcIlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyXCIpO1xyXG4gICAgICAgIGlmIChjbnQgPT09IDApIHtcclxuICAgICAgICAgICAgZmllbGRMaXN0RG9tLmNsYXNzTGlzdC5hZGQoXCJDdXJyZW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGlzdERvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBsaXN0RG9tLmNsYXNzTmFtZSA9IFwiVXNlci1Db21wb25lbnQtTGlzdFwiO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsZXQgbGlzdEl0ZW1TcGFuRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGlzdEl0ZW1TcGFuRG9tLnRleHRDb250ZW50ID0gX19wcmV2aWV3VXNlckluZm9zW2NudF0uZGlzcGxheVVzZXJOYW1lO1xyXG4gICAgICAgIGxpc3RJdGVtRG9tLmFwcGVuZENoaWxkKGxpc3RJdGVtU3BhbkRvbSk7XHJcbiAgICAgICAgbGlzdERvbS5hcHBlbmRDaGlsZChsaXN0SXRlbURvbSk7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtRW1haWxEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtRW1haWxTcGFuRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgbGlzdEl0ZW1FbWFpbFNwYW5Eb20udGV4dENvbnRlbnQgPSBfX3ByZXZpZXdVc2VySW5mb3NbY250XS5lbWFpbDtcclxuICAgICAgICBsaXN0SXRlbUVtYWlsRG9tLmFwcGVuZENoaWxkKGxpc3RJdGVtRW1haWxTcGFuRG9tKTtcclxuICAgICAgICBsaXN0RG9tLmFwcGVuZENoaWxkKGxpc3RJdGVtRW1haWxEb20pO1xyXG4gICAgICAgIGZpZWxkTGlzdERvbS5hcHBlbmRDaGlsZChsaXN0RG9tKTtcclxuICAgICAgICBvd25lckRvbS5hcHBlbmRDaGlsZChmaWVsZExpc3REb20pO1xyXG4gICAgICAgIGZpZWxkTGlzdERvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhZ2VVc2VySW5mbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZiE7J6sIOyWuOyWtOulvCDtjIzrnbzrr7jthLDsl5Ag66ee6rKMIOuzgO2ZmO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2FsZSDrsJTqv4Ag7Ja47Ja0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogY2hhbmdlVGVtcGxhdGVMb2NhbGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZW1wbGF0ZUxvY2FsZShsb2NhbGUpIHtcclxuICAgIFV0aWxzLmNoYW5nZUxvY2FsZShsb2NhbGUpO1xyXG4gICAgcHJldmlld01vZC5wYWdlUmVmcmVzaCgpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uICDri6Tqta3slrQg7Ja47Ja0IO2MjOydvOydmCDsnITsuZjrpbwg7KeA7KCV7ZWc64ukLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBsb2NhbGhvc3Q6NTUwMC9qcy9wZGZfZm9ybS9pMThu7J2YIOqyveyasCAgXCIvanMvcGRmX2Zvcm0vaTE4blwiXHJcbiAqIGluaXREb2N1bWVudCDsnbTsoITsl5Ag7Zi47Lac7J20IOuQmOyWtOyVvO2VnOuLpC5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVzTG9jYXRpb24g7Ja47Ja07YyM7J287J2YIOychOy5mCjsoIjrjIAg6rK966GcKVxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGNoYW5nZVRyYW5zbGF0b3JGaWxlTG9jYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUcmFuc2xhdG9yRmlsZUxvY2F0aW9uKGxjYXRpb24pIHtcclxuICAgIFV0aWxzLnRyYW5zbGF0b3JGaWxlTG9jYXRpb24obGNhdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIOuLpOq1reyWtCDslrjslrTrpbwg7LaU6rCA7ZWc64ukLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbG9jYWxlIOyWuOyWtCDsnbTrpoRcclxuICogQHBhcmFtIHtPYmplY3R9IGxhbmdEYXRhIGkxOG4va28uanNvbuqzvCDqsJnsnYAg7JaR7Iud7Jy866GcIOuQnCBKU09O7J2EIO2MjOyLse2VnCDrjbDsnbTthLBcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBhZGRUcmFuc2xhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhbnNsYXRvcihsb2NhbGUsIGxhbmdEYXRhKSB7XHJcbiAgICBVdGlscy5hZGRUcmFuc2xhdG9yKGxvY2FsZSwgbGFuZ0RhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uICDrr7jrpqzrs7TquLDsi5wg67O07J28IOy5tOuTnOydmCDqsr3smrDrpbwg7KCc7Ja07ZWc64ukLlxyXG4gKiBARGF0ZSA6IDIwMjMuIDEyLiAxNVxyXG4gKiBATWV0aG9kIE5hbWUgOiBjaGFuZ2VVc2VyQ2FyZFNob3dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VVc2VyQ2FyZFNob3coXHJcbiAganNvbkRhdGEsXHJcbiAgdXNlckxpc3QsXHJcbiAgaXNOb0ZpZWxkc05vU2hvdyxcclxuICBpc0Zvcm1lclNob3dcclxuKSB7XHJcbiAgaWYgKGlzTm9GaWVsZHNOb1Nob3cpIHtcclxuICAgIC8vIFVzZXJMaXN0XHJcbiAgICB2YXIgbm9GaWVsZHNVc2VyTGlzdCA9IGdlbk5vRmllbGRzVXNlckxpc3QoanNvbkRhdGEpOyAvLyDtlajsiJgg6rWs7ZiEIO2VhOyalFxyXG4gICAgdXNlckxpc3QgPSBOb1Nob3dOb0ZpZWxkc0NhcmQobm9GaWVsZHNVc2VyTGlzdCwgdHJ1ZSk7IC8vIO2VqOyImCDqtaztmIQg7ZWE7JqUXHJcblxyXG4gICAgLy8gSnNvblxyXG4gICAganNvbkRhdGEgPSByZW1vdmVGb3JtZXJXaXRoRW1wdHlGaWVsZHMoanNvbkRhdGEpOyAvLyDtlajsiJgg6rWs7ZiEIO2VhOyalFxyXG5cclxuICAgIGNvbnNvbGUubG9nKG5vRmllbGRzVXNlckxpc3QpO1xyXG5cclxuICAgIGlmICghaXNGb3JtZXJTaG93KSB7XHJcbiAgICAgIC8vIFVzZXJMaXN0XHJcbiAgICAgIHVzZXJMaXN0ID0gaXNGb3JtZXJTaG93Zih1c2VyTGlzdCwgZmFsc2UpOyAvLyDtlajsiJgg6rWs7ZiEIO2VhOyalFxyXG4gICAgICBqc29uRGF0YSA9IHJlbW92ZUZvcm1lcnNXaXRoSXNGb3JtZXJZKGpzb25EYXRhKTsgLy8g7ZWo7IiYIOq1rO2YhCDtlYTsmpRcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCFpc0Zvcm1lclNob3cpIHtcclxuICAgICAgLy8gVXNlckxpc3RcclxuICAgICAgdXNlckxpc3QgPSBpc0Zvcm1lclNob3dmKHVzZXJMaXN0LCBmYWxzZSk7IC8vIO2VqOyImCDqtaztmIQg7ZWE7JqUXHJcbiAgICAgIGpzb25EYXRhID0gcmVtb3ZlRm9ybWVyc1dpdGhJc0Zvcm1lclkoanNvbkRhdGEpOyAvLyDtlajsiJgg6rWs7ZiEIO2VhOyalFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsganNvbkRhdGEsIHVzZXJMaXN0IH07IC8vIOyImOygleuQnCBqc29uRGF0YeyZgCB1c2VyTGlzdOulvCDrsJjtmZhcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBQYWdl7J2YIOuGkuydtOulvCDqs4TsgrDtlZzri6QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFnZUVsZW1lbnQg6rOE7IKw7ZWgIFBhZ2UgRWxlbWVudFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFBhZ2UgSGVpZ2h0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogY2FsY1BhZ2VIZWlnaHRcclxuICovXHJcbmZ1bmN0aW9uIGNhbGNQYWdlSGVpZ2h0KHBhZ2VFbGVtZW50KSB7XHJcbiAgICB2YXIgc3R5bGUgPSBwYWdlRWxlbWVudC5kaXYuY3VycmVudFN0eWxlIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhZ2VFbGVtZW50LmRpdik7XHJcbiAgICBjb25zdCBtYXJnaW5IZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XHJcbiAgICBjb25zdCBwYWRkaW5nSGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgICBjb25zdCBib3JkZXJIZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xyXG4gICAgcmV0dXJuIHBhZ2VFbGVtZW50LmhlaWdodCArIG1hcmdpbkhlaWdodCArIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gUERGIO2OmOydtOyngOydmCBMYXllcuyCrOydtOymiOqwgCDrs4DtlaAg65WM7J2YIOyymOumrOulvO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGV2dCBldmVudFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGNoYW5nZUxheWVyU2l6ZVxyXG4gKi9cclxuZnVuY3Rpb24gY2hhbmdlTGF5ZXJTaXplKGV2dCkge1xyXG4gICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICBwZGZWaWV3ZXIuX3BhZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBoZWlnaHQgKz0gY2FsY1BhZ2VIZWlnaHQoZWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDrrLjshJzsnZgg67Cw7Jyo7J2EIOy2leyGjO2VnOuLpC5cclxuICpcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBkb2N1bWVudFpvb21PdXRcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50Wm9vbU91dCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gY3VycmVudFZhbHVlIC0gMC4xO1xyXG4gICAgc2V0U2NhbGVWYWx1ZVRleHQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g66y47ISc7J2YIOuwsOycqOydhCDtmZXrjIDtlZzri6QuXHJcbiAqXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZG9jdW1lbnRab29tSW5cclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50Wm9vbUluKCkge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChwZGZWaWV3ZXIuY3VycmVudFNjYWxlKTtcclxuICAgIHBkZlZpZXdlci5jdXJyZW50U2NhbGUgPSBjdXJyZW50VmFsdWUgKyAwLjE7XHJcbiAgICBzZXRTY2FsZVZhbHVlVGV4dChwZGZWaWV3ZXIuY3VycmVudFNjYWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDrrLjshJzsnZgg67Cw7Jyo7J2EIOyEpOygle2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICDrrLjshJzsnZgg67Cw7JyoXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogc2V0U2NhbGVWYWx1ZVRleHRcclxuICovXHJcbmZ1bmN0aW9uIHNldFNjYWxlVmFsdWVUZXh0KHZhbHVlKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQodmFsdWUpICogMTAwKTtcclxuICAgIHZhciBlbGVtZW50ID0gX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NjYWxlU2VsZWN0Q29udGFpbmVyID4gYVwiKTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50VmFsdWUgKyBcIiVcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDssqsg7Y6Y7J207KeA66GcIOydtOuPme2VnOuLpC5cclxuICpcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBkb2N1bWVudEdvdG9GaXJzdFxyXG4gKi9cclxuZnVuY3Rpb24gZG9jdW1lbnRHb3RvRmlyc3QoKSB7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgZG9jdW1lbnRQYWdlU2V0dGluZ3MocGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDsnbTsoIQg7Y6Y7J207KeA66GcIOydtOuPme2VnOuLpC5cclxuICpcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBkb2N1bWVudEdvdG9QcmV2XHJcbiAqL1xyXG5mdW5jdGlvbiBkb2N1bWVudEdvdG9QcmV2KCkge1xyXG4gICAgaWYgKHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlciAtIDEgPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyLS07XHJcbiAgICBkb2N1bWVudFBhZ2VTZXR0aW5ncyhwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOuLpOydjCDtjpjsnbTsp4DroZwg7J2064+Z7ZWc64ukLlxyXG4gKlxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50R290b1ByZXZcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50R290b05leHQoKSB7XHJcbiAgICBpZiAocGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyICsgMSA+IHBkZlZpZXdlci5wYWdlc0NvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKys7XHJcbiAgICBkb2N1bWVudFBhZ2VTZXR0aW5ncyhwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOuniOyngOuniSDtjpjsnbTsp4DroZwg7J2064+Z7ZWc64ukLlxyXG4gKlxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50R290b1ByZXZcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50R290b0xhc3QoKSB7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSBwZGZWaWV3ZXIucGFnZXNDb3VudDtcclxuICAgIGRvY3VtZW50UGFnZVNldHRpbmdzKHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7Y6Y7J207KeAIOygleuztOulvCDshKTsoJXtlZzri6QuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gcGFnZU5vICDshKTsoJXtlaAg7Y6Y7J207KeAIOygleuztFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50UGFnZVNldHRpbmdzXHJcbiAqL1xyXG5mdW5jdGlvbiBkb2N1bWVudFBhZ2VTZXR0aW5ncyhwYWdlTm8pIHtcclxuICAgIGxldCBwYWdlSW5wdXQgPSBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcInBhZ2VOdW1iZXJcIik7XHJcbiAgICBwYWdlSW5wdXQudmFsdWUgPSBwYWdlTm87XHJcbiAgICBkb2N1bWVudFBhZ2VCdG5FbmFibGUocGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDtjpjsnbTsp4DrsoTtirzsnZgg7Zmc7ISx7ZmUIOyXrOu2gOulvCDtjJDri6jtlZjsl6wg7ISk7KCV7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gcGFnZU5vICDshKTsoJXtlaAg7Y6Y7J207KeAIOygleuztFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50UGFnZUJ0bkVuYWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gZG9jdW1lbnRQYWdlQnRuRW5hYmxlKHBhZ2VObykge1xyXG4gICAgaWYgKHBhZ2VObyA9PT0gMSkge1xyXG4gICAgICAgIF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1GaXJzdC1CdXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1QcmV2LUJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1GaXJzdC1CdXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tUHJldi1CdXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChwYWdlTm8gPT09IHBkZlZpZXdlci5wYWdlc0NvdW50KSB7XHJcbiAgICAgICAgX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLUxhc3QtQnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tTmV4dC1CdXR0b25cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tTGFzdC1CdXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBfX3ByZXZpZXdPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tTmV4dC1CdXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAgUERG66y47ISc7J2YIOuwsOycqCBTZWxlY3Trpbwg67O07Jes7KSA64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZXZ0IEV2ZW50IE9iamVjdFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IHNob3dTY2FsZVNlbGVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93U2NhbGVTZWxlY3RvcihldnQpIHtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRCYm94ID0gZXZ0LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBzY2FsZUNvbnRhaW5lciA9IF9fcHJldmlld093bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiIC5TY2FsZS1TZWxldG9yLUNvbnRhaW5lclwiKTtcclxuICAgIHNjYWxlQ29udGFpbmVyLnN0eWxlLmxlZnQgPSB0YXJnZXRCYm94LmxlZnQgKyBcInB4XCI7XHJcbiAgICBzY2FsZUNvbnRhaW5lci5zdHlsZS50b3AgPSB0YXJnZXRCYm94LnRvcCArIFwicHhcIjtcclxuICAgIGlmIChzY2FsZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgICAgc2NhbGVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcIlRlbXBsYXRlLUhpZGVcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgc2NhbGVTZWxlY3QgPSBzY2FsZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xyXG4gICAgaWYgKCEkKHNjYWxlU2VsZWN0KS5oYXNDbGFzcyhcInNlbGVjdDItaGlkZGVuLWFjY2Vzc2libGVcIikpIHtcclxuICAgICAgICAvLyBTZWxlY3QyIGhhcyBiZWVuIGluaXRpYWxpemVkXHJcbiAgICAgICAgJChzY2FsZVNlbGVjdCkuc2VsZWN0Mih7XHJcbiAgICAgICAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgICAgICAgY2xvc2VPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKHNjYWxlU2VsZWN0KS52YWwocGRmVmlld2VyLmN1cnJlbnRTY2FsZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICQoc2NhbGVTZWxlY3QpLnNlbGVjdDIoJ29wZW4nKTtcclxuICAgICQoc2NhbGVTZWxlY3QpLm9uKCdzZWxlY3QyOnNlbGVjdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nXHJcbiAgICAgICAgdmFyIGRhdGEgPSBlLnBhcmFtcy5kYXRhO1xyXG4gICAgICAgIHBkZlZpZXdlci5jdXJyZW50U2NhbGUgPSBkYXRhLmlkO1xyXG4gICAgICAgIHNldFNjYWxlVmFsdWVUZXh0KGRhdGEuaWQpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uICDshKDtg53rkJwg7ISc66qF7J6QIOygleuztOuhnCDrjbDsnbTthLDrpbwg6rWQ7LK07ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZXZ0ICBFdmVudCBPYmplY3RcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBmaWVsZEZ0RXZlbnRcclxuICovXHJcbmZ1bmN0aW9uIGNoYWdlVXNlckluZm8oZXZ0KSB7XHJcbiAgICBsZXQgdGFyZ2V0RG9tID0gZXZ0LnRhcmdldDtcclxuICAgIGxldCBrZXlEb20gPSB0YXJnZXREb207XHJcbiAgICBpZiAoIXRhcmdldERvbS5jbGFzc0xpc3QuY29udGFpbnMoXCJVc2VyLUNvbXBvbmVudC1MaXN0LUNvbmF0aW5lclwiKSkge1xyXG4gICAgICAgIGtleURvbSA9IHRhcmdldERvbS5jbG9zZXN0KFwiZGl2LlVzZXItQ29tcG9uZW50LUxpc3QtQ29uYXRpbmVyXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHVzZXJLZXkgPSBrZXlEb20uZ2V0QXR0cmlidXRlKFwiZGF0YS11c2VyLWtleVwiKTtcclxuICAgIHByZXZpZXdNb2QubG9hZEpzb25EYXRhV2l0aFVzZXJJbmZvKFxyXG4gICAgICBKU09OLnBhcnNlKF9fcHJldmlld0pzb25EYXRhKSxcclxuICAgICAgX19wcmV2aWV3VXNlckluZm9zW3VzZXJLZXldLFxyXG4gICAgICB1c2VyS2V5XHJcbiAgICApO1xyXG4gICAgcHJldmlld01vZC5wYWdlUmVmcmVzaCgpO1xyXG5cclxuICAgIGxldCBjb21wQm94Q2hpbGRzID0gX19wcmV2aWV3T3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuVXNlci1Db21wb25lbnQtTGlzdC1Db25hdGluZXJcIik7XHJcbiAgICBjb21wQm94Q2hpbGRzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmIChjaGlsZCA9PT0ga2V5RG9tKSB7XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ3VycmVudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcIkN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiQ3VycmVudFwiKSkge1xyXG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiQ3VycmVudFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLzIwMjMtMTItMTUg67OR7JqxIOy2lOqwgFxyXG4vLyB1c2VyTGlzdCDqsIDqs7Ug7ZWo7IiYXHJcbmZ1bmN0aW9uIGlzRm9ybWVyU2hvd2YodXNlckxpc3QsIHNob3dGb3JtZXIpIHtcclxuICAgIGlmIChzaG93Rm9ybWVyKSB7XHJcbiAgICAgICAgLy8g7YyM652866+47YSw6rCAIHRydWXsnbwg6rK97JqwLCB1c2VyTGlzdOulvCDqt7jrjIDroZwg67CY7ZmYXHJcbiAgICAgICAgcmV0dXJuIHVzZXJMaXN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDtjIzrnbzrr7jthLDqsIAgZmFsc2Xsnbwg6rK97JqwLCBpc0Zvcm1lcuqwgCBcIllcIuyduCDsmpTshozrpbwg7KCc7Jm47ZWY6rOgIOuwmO2ZmFxyXG4gICAgICAgIHJldHVybiB1c2VyTGlzdC5maWx0ZXIodXNlciA9PiB1c2VyLmlzRm9ybWVyICE9PSBcIllcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbk5vRmllbGRzVXNlckxpc3QoSnNvbkRhdGEpIHtcclxuICAgIHJldHVybiBKc29uRGF0YS5mb3JtZXJMaXN0Lm1hcChmb3JtZXIgPT4gKHtcclxuICAgICAgICBkaXNwbGF5VXNlck5hbWU6IGZvcm1lci5kaXNwbGF5VXNlck5hbWUsXHJcbiAgICAgICAgdXNlclVVSUQ6IGZvcm1lci51c2VyVVVJRCxcclxuICAgICAgICBlbWFpbDogZm9ybWVyLmVtYWlsLFxyXG4gICAgICAgIGlzRm9ybWVyOiBmb3JtZXIuaXNGb3JtZXIsXHJcbiAgICAgICAgLy8g66qo65OgIHBhZ2Vz7J2YIGZpZWxkc+ydmCDquLjsnbTqsIAgMOydtOuptCBcIllcIiwg6re466CH7KeAIOyViuycvOuptCBcIk5cIlxyXG4gICAgICAgIGlzTm9GaWVsZHM6IGZvcm1lci5wYWdlcy5ldmVyeShwYWdlID0+IHBhZ2UuZmllbGRzLmxlbmd0aCA9PT0gMCkgPyBcIllcIiA6IFwiTlwiXHJcbiAgICB9KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vU2hvd05vRmllbGRzQ2FyZCh1c2VybGlzdF8sIHNob3dGaWVsZHMpIHtcclxuICAgIHJldHVybiBzaG93RmllbGRzID8gdXNlcmxpc3RfLmZpbHRlcih1c2VyID0+IHVzZXIuaXNOb0ZpZWxkcyAhPT0gXCJZXCIpIDogdXNlcmxpc3RfO1xyXG59XHJcblxyXG5cclxuLy8ganNvbiDqsIDqs7Ug7ZWo7IiYXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm1lcldpdGhFbXB0eUZpZWxkcyhKc29uRGF0YSkge1xyXG4gICAgSnNvbkRhdGEuZm9ybWVyTGlzdCA9IEpzb25EYXRhLmZvcm1lckxpc3QuZmlsdGVyKGZvcm1lciA9PiBcclxuICAgICAgICAhZm9ybWVyLnBhZ2VzLmV2ZXJ5KHBhZ2UgPT4gcGFnZS5maWVsZHMubGVuZ3RoID09PSAwKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBKc29uRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybWVyc1dpdGhJc0Zvcm1lclkoanNvbkRhdGEpIHtcclxuICAgIGpzb25EYXRhLmZvcm1lckxpc3QgPSBqc29uRGF0YS5mb3JtZXJMaXN0LmZpbHRlcihmb3JtZXIgPT4gZm9ybWVyLmlzRm9ybWVyICE9PSBcIllcIik7XHJcbiAgICByZXR1cm4ganNvbkRhdGE7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9