(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("readermod", [], factory);
	else if(typeof exports === 'object')
		exports["readermod"] = factory();
	else
		root["readermod"] = factory();
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
/*!**********************************************!*\
  !*** ./js/pdf_form/src/reader/readerMain.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTranslator: () => (/* binding */ addTranslator),
/* harmony export */   annotationModChange: () => (/* binding */ annotationModChange),
/* harmony export */   changeReaderMode: () => (/* binding */ changeReaderMode),
/* harmony export */   changeTemplateLocale: () => (/* binding */ changeTemplateLocale),
/* harmony export */   changeTranslatorFileLocation: () => (/* binding */ changeTranslatorFileLocation),
/* harmony export */   getJsonData: () => (/* binding */ getJsonData),
/* harmony export */   initDocument: () => (/* binding */ initDocument),
/* harmony export */   isRequiredFieldValueEmpty: () => (/* binding */ isRequiredFieldValueEmpty),
/* harmony export */   loadDocument: () => (/* binding */ loadDocument),
/* harmony export */   setCustomAlert: () => (/* binding */ setCustomAlert)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./js/pdf_form/src/Constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./js/pdf_form/src/utils/utils.js");
/* harmony import */ var _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../pdf.cursor.tool */ "./js/pdf_form/src/pdf.cursor.tool.js");
/* harmony import */ var _readerMod_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readerMod.js */ "./js/pdf_form/src/reader/readerMod.js");
/**
 * @module Reader/ReaderMod
 */

console.log('Reader VERSION:', "1.0.0000");








var pdfCursorTools, pdfViewer, readerMod, __readerEventBus, __readerOwnerNode;
window.onload = function () {
}

/**
 * @description 초기 셋팅을 한다.
 *
 * @param {Element} ownerNode  해당 프로젝트의 최상단 Element를 감싸고 있는 Element
 * @param {Array} langs  사용할 다국어 리스트 기본값으로 ["ko", "en"]가 들어있다.
 * @Date : 2021. 5. 31
 * @Method Name : initDocument
 */
function initDocument(ownerNode, langs = ["ko", "en"]) {
    __readerOwnerNode = ownerNode;

    _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.translator.fetch(langs).then(() => {
        // -> Translations are ready...
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.changeLocale(langs[0]);
    });

    let pdfContainer = __readerOwnerNode.querySelector(" #" + _Constants__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.READER_PDF_VIEWER_CONTAINER);
    __readerEventBus = new pdfjsViewer.EventBus();
    pdfCursorTools = new _pdf_cursor_tool__WEBPACK_IMPORTED_MODULE_2__.PDFCursorTools({
        container: pdfContainer,
        eventBus: __readerEventBus,
        cursorToolOnLoad: 0
    });

    pdfViewer = new pdfjsViewer.PDFViewer({
        container: pdfContainer,
        eventBus: __readerEventBus,
        textLayerMode: 0,
    });

    readerMod = new _readerMod_js__WEBPACK_IMPORTED_MODULE_3__.ReaderMod(pdfViewer, __readerOwnerNode);
    readerMod.readerInit();
}

/**
 * @description PDF문서를 로드한다.
 *
 * @param {String} pdfFileUrl PDF FILE URL
 * @param {Object} templateData 기존 Template에서 저장한 Json Object
 * @Date : 2021. 5. 31
 * @Method Name : loadDocument
 */
function loadDocument(pdfFileUrl, templateData, imgJsonFileUrl) {

    readerMod.imgJsonFileUrl = imgJsonFileUrl;

  __readerEventBus.on("pagerendered", function (evt) {
    console.log("pageRendered: " + evt);
    readerMod.pageRender(evt);
  });

  __readerEventBus.on("pagechanging", function (evt) {
    console.log("pagechanging");
    documentPageSettings(evt.pageNumber);
  });

  __readerEventBus.on("scalechanging", function (evt) {
    console.log("scalechanging");
    changeLayerSize(evt);
  });

  __readerEventBus.on("pagesinit", function () {
    console.log("pagesinit");
    pdfViewer.currentScale = 1;
    // We can use pdfViewer now, e.g. let's change default scale.

    let totalPage = __readerOwnerNode.querySelector(" #" + "Num-Pages");
    totalPage.textContent = " / " + pdfViewer.pagesCount;
    documentPageBtnEnable(pdfViewer.currentPageNumber);
    readerMod.loadJsonData(templateData);
  });

  let loadingTask = pdfjsLib.getDocument({
    url: pdfFileUrl,
    cMapUrl: "/js/pdf_form/pdfjs/cmaps/",
    cMapPacked: true,
    pdfBug: false,
  });
  loadingTask.promise.then(function (pdfDocument) {
    pdfDocument.getData().then((data) => {});
    pdfViewer.currentScale = 1;
    pdfViewer.setDocument(pdfDocument);
    pdfCursorTools.switchTool(1);
    console.log(pdfViewer.pageViewsReady);
    // documentReadycheck(pdfViewer.pageViewsReady);
  });

  __readerOwnerNode
    .querySelector(" #" + "Zoom-Out-Button")
    .addEventListener("click", documentZoomOut);
  __readerOwnerNode
    .querySelector(" #" + "Zoom-In-Button")
    .addEventListener("click", documentZoomIn);

  __readerOwnerNode
    .querySelector(" #" + "Goto-First-Button")
    .addEventListener("click", documentGotoFirst);
  __readerOwnerNode
    .querySelector(" #" + "Goto-Prev-Button")
    .addEventListener("click", documentGotoPrev);
  __readerOwnerNode
    .querySelector(" #" + "Goto-Next-Button")
    .addEventListener("click", documentGotoNext);
  __readerOwnerNode
    .querySelector(" #" + "Goto-Last-Button")
    .addEventListener("click", documentGotoLast);
  __readerOwnerNode
    .querySelector(" #" + "scaleSelectContainer")
    .addEventListener("click", showScaleSelector);

  __readerOwnerNode
    .querySelector(" #" + "Reader-Field-Input-Mode-Button")
    .addEventListener("click", changeFieldInputMode);
  __readerOwnerNode
    .querySelector(" #" + "Reader-Memo-Input-Mode-Button")
    .addEventListener("click", changeMemoInputMode);
  __readerOwnerNode
    .querySelector(" #" + "Reader-Memo-Add-Mode-Button")
    .addEventListener("click", changeMemoAddMode);
}

/**
 * @description Template Field정보를 반환한다.
 *
 * @return {Object} Template Field 정보
 * @Date : 2021. 5. 31
 * @Method Name : getJsonData
 */
function getJsonData() {
    return readerMod.exportFieldData();
}

/**
 * @description 필수 필드가 비어있는지 여부를 반환한다.
 *
 * @return {Boolean} 필수 필드가 비어있는지 여부
 * @Date : 2021. 5. 31
 * @Method Name : isRequiredFieldValueEmpty
 */
function isRequiredFieldValueEmpty() {
    return readerMod.isRequiredFieldValueEmpty();
}

/**
 * @description 사용할 Alert Function을 셋팅한다.
 *
 * @param {Function} alertFunc 레퍼런스
 * @Date : 2021. 5. 31
 * @Method Name : setCustomAlert
 */
function setCustomAlert(alertFunc) {
    readerMod.customAlertFunc = alertFunc;
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
    readerMod.pageRefresh();
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
 *  @description Page의 높이를 계산한다.
 *
 * @param {Element} pageElement 계산할 Page Element
 * @return Number: Page Height
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
 *  @description PDF 페이지의 Layer사이즈가 변할 때의 처리를한다.
 *
 * @param {Object} evt Event Object
 * @Date : 2021. 5. 31
 * @Method Name : changeLayerSize
 */
function changeLayerSize(evt) {
    let height = 0;
    pdfViewer._pages.forEach( function (element) {
        height += calcPageHeight(element);
    });
}

/**
 *  @description  문서의 배율을 축소한다.
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
 * @description  문서의 배율을 확대한다.
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
 * @description  문서의 배율을 설정한다.
 *
 * @param {String} value  문서의 배율
 * @Date : 2021. 5. 31
 * @Method Name : setScaleValueText
 */
function setScaleValueText(value) {
    const currentValue = Math.floor(parseFloat(value) * 100);
    var element = __readerOwnerNode.querySelector(" #scaleSelectContainer > a");
    element.textContent = currentValue + "%";    
    
    let scaleContainer = __readerOwnerNode.querySelector(" .Scale-Seletor-Container");
    if (!scaleContainer.classList.contains("Template-Hide")) {
        scaleContainer.classList.toggle("Template-Hide");
    }
}

/**
 * @description  첫 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoFirst
 */
function documentGotoFirst() {
    pdfViewer.currentPageNumber = 1;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description  이전 페이지로 이동한다.
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
 * @description  다음 페이지로 이동한다.
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
 * @description  마지막 페이지로 이동한다.
 *
 * @Date : 2021. 5. 31
 * @Method Name : documentGotoPrev
 */
function documentGotoLast() {
    pdfViewer.currentPageNumber = pdfViewer.pagesCount;
    documentPageSettings(pdfViewer.currentPageNumber);
}

/**
 * @description  페이지 정보를 설정한다..
 *
 * @param {Number} pageNo   설정할 페이지 정보
 * @Date : 2021. 5. 31
 * @Method Name : documentPageSettings
 */
function documentPageSettings(pageNo) {
    let pageInput = __readerOwnerNode.querySelector(" #" + "pageNumber");
    pageInput.value = pageNo;
    documentPageBtnEnable(pdfViewer.currentPageNumber);
}

/**
 * @description  페이지버튼의 활성화 여부를 판단하여 설정한다.
 *
 * @param {Number} pageNo  설정할 페이지 정보
 * @Date : 2021. 5. 31
 * @Method Name : documentPageBtnEnable
 */
function documentPageBtnEnable(pageNo) {
    if (pageNo === 1) {
        __readerOwnerNode.querySelector(" #" + "Goto-First-Button").disabled = true;
        __readerOwnerNode.querySelector(" #" + "Goto-Prev-Button").disabled = true;
    } else {
        __readerOwnerNode.querySelector(" #" + "Goto-First-Button").disabled = false;
        __readerOwnerNode.querySelector(" #" + "Goto-Prev-Button").disabled = false;
    }
    if (pageNo === pdfViewer.pagesCount) {
        __readerOwnerNode.querySelector(" #" + "Goto-Last-Button").disabled = true;
        __readerOwnerNode.querySelector(" #" + "Goto-Next-Button").disabled = true;
    } else {
        __readerOwnerNode.querySelector(" #" + "Goto-Last-Button").disabled = false;
        __readerOwnerNode.querySelector(" #" + "Goto-Next-Button").disabled = false;
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
    let scaleContainer = __readerOwnerNode.querySelector(" .Scale-Seletor-Container");
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

function annotationModChange(mod) {
    pdfViewer.annotationEditorMode = mod;
    pdfCursorTools.switchTool(0);
}

function changeReaderMode(mode) {
    readerMod.hideMemoProperties();
    
    if (__readerOwnerNode.querySelector(" #" + "Reader-Field-Input-Mode-Button").classList.contains("Selected")) {
        __readerOwnerNode.querySelector(" #" + "Reader-Field-Input-Mode-Button").classList.remove("Selected");
    }
    if (__readerOwnerNode.querySelector(" #" + "Reader-Memo-Input-Mode-Button").classList.contains("Selected")) {
        __readerOwnerNode.querySelector(" #" + "Reader-Memo-Input-Mode-Button").classList.remove("Selected");
    }
    if (__readerOwnerNode.querySelector(" #" + "Reader-Memo-Add-Mode-Button").classList.contains("Selected")) {
        __readerOwnerNode.querySelector(" #" + "Reader-Memo-Add-Mode-Button").classList.remove("Selected");
    }
    switch (mode) {
        case 0:
            pdfCursorTools.switchTool(1);
            __readerOwnerNode.querySelector(" #" + "Reader-Field-Input-Mode-Button").classList.add("Selected");
            break;
        case 1:
            pdfCursorTools.switchTool(0);
            __readerOwnerNode.querySelector(" #" + "Reader-Memo-Input-Mode-Button").classList.add("Selected");
            break;
        case 2:
            pdfCursorTools.switchTool(0);
            __readerOwnerNode.querySelector(" #" + "Reader-Memo-Add-Mode-Button").classList.add("Selected");
            break;
        default:
            pdfCursorTools.switchTool(0);
            break;
    }
    
    readerMod.changeReaderMode(mode);
}

function changeFieldInputMode() {
    changeReaderMode(0);
}

function changeMemoInputMode() {
    changeReaderMode(1);
}

function changeMemoAddMode() {
    changeReaderMode(2);
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYm9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsNEJBQTRCO0FBQzVCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVM7QUFDN0I7QUFDQSx3QkFBd0Isb0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbCtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUE0RCxnQ0FBZ0MsQ0FBZ0s7QUFDaFEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGNBQWM7QUFDZCwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2REFBNkQsUUFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQSwyQkFBMkI7QUFDM0IsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFD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QVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBUztBQUNqQztBQUNBLDRCQUE0QixvREFBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBUztBQUNqQztBQUNBLDRCQUE0QixvREFBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUiw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7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QTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSwrQ0FBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSwrQ0FBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSwrQ0FBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vZmxhdHBpY2tyLm1pbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL2wxMG4va28uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9qcy9wZGZfZm9ybS9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL1RyYW5zbGF0b3IvdHJhbnNsYXRvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy9UcmFuc2xhdG9yL3V0aWxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3BkZi5jdXJzb3IudG9vbC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy9yZWFkZXIvcmVhZGVyTW9kLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3JlYWRlci9yZWFkZXJQYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci8uL2pzL3BkZl9mb3JtL3NyYy91dGlscy9jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9qcy9wZGZfZm9ybS9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZGVzaWduZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1kZXNpZ25lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLWRlc2lnbmVyLy4vanMvcGRmX2Zvcm0vc3JjL3JlYWRlci9yZWFkZXJNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicmVhZGVybW9kXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWRlcm1vZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFkZXJtb2RcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyogZmxhdHBpY2tyIHY0LjYuOSwsIEBsaWNlbnNlIE1JVCAqL1xyXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmZsYXRwaWNrcj10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQsbj0xLGE9YXJndW1lbnRzLmxlbmd0aDtuPGE7bisrKWZvcih2YXIgaSBpbiB0PWFyZ3VtZW50c1tuXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKSYmKGVbaV09dFtpXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHQoKXtmb3IodmFyIGU9MCx0PTAsbj1hcmd1bWVudHMubGVuZ3RoO3Q8bjt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDt2YXIgYT1BcnJheShlKSxpPTA7Zm9yKHQ9MDt0PG47dCsrKWZvcih2YXIgbz1hcmd1bWVudHNbdF0scj0wLGw9by5sZW5ndGg7cjxsO3IrKyxpKyspYVtpXT1vW3JdO3JldHVybiBhfXZhciBuPVtcIm9uQ2hhbmdlXCIsXCJvbkNsb3NlXCIsXCJvbkRheUNyZWF0ZVwiLFwib25EZXN0cm95XCIsXCJvbktleURvd25cIixcIm9uTW9udGhDaGFuZ2VcIixcIm9uT3BlblwiLFwib25QYXJzZUNvbmZpZ1wiLFwib25SZWFkeVwiLFwib25WYWx1ZVVwZGF0ZVwiLFwib25ZZWFyQ2hhbmdlXCIsXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIl0sYT17X2Rpc2FibGU6W10sYWxsb3dJbnB1dDohMSxhbGxvd0ludmFsaWRQcmVsb2FkOiExLGFsdEZvcm1hdDpcIkYgaiwgWVwiLGFsdElucHV0OiExLGFsdElucHV0Q2xhc3M6XCJmb3JtLWNvbnRyb2wgaW5wdXRcIixhbmltYXRlOlwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJi0xPT09d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIiksYXJpYURhdGVGb3JtYXQ6XCJGIGosIFlcIixhdXRvRmlsbERlZmF1bHRUaW1lOiEwLGNsaWNrT3BlbnM6ITAsY2xvc2VPblNlbGVjdDohMCxjb25qdW5jdGlvbjpcIiwgXCIsZGF0ZUZvcm1hdDpcIlktbS1kXCIsZGVmYXVsdEhvdXI6MTIsZGVmYXVsdE1pbnV0ZTowLGRlZmF1bHRTZWNvbmRzOjAsZGlzYWJsZTpbXSxkaXNhYmxlTW9iaWxlOiExLGVuYWJsZVNlY29uZHM6ITEsZW5hYmxlVGltZTohMSxlcnJvckhhbmRsZXI6ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUud2FybihlKX0sZ2V0V2VlazpmdW5jdGlvbihlKXt2YXIgdD1uZXcgRGF0ZShlLmdldFRpbWUoKSk7dC5zZXRIb3VycygwLDAsMCwwKSx0LnNldERhdGUodC5nZXREYXRlKCkrMy0odC5nZXREYXkoKSs2KSU3KTt2YXIgbj1uZXcgRGF0ZSh0LmdldEZ1bGxZZWFyKCksMCw0KTtyZXR1cm4gMStNYXRoLnJvdW5kKCgodC5nZXRUaW1lKCktbi5nZXRUaW1lKCkpLzg2NGU1LTMrKG4uZ2V0RGF5KCkrNiklNykvNyl9LGhvdXJJbmNyZW1lbnQ6MSxpZ25vcmVkRm9jdXNFbGVtZW50czpbXSxpbmxpbmU6ITEsbG9jYWxlOlwiZGVmYXVsdFwiLG1pbnV0ZUluY3JlbWVudDo1LG1vZGU6XCJzaW5nbGVcIixtb250aFNlbGVjdG9yVHlwZTpcImRyb3Bkb3duXCIsbmV4dEFycm93OlwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixub0NhbGVuZGFyOiExLG5vdzpuZXcgRGF0ZSxvbkNoYW5nZTpbXSxvbkNsb3NlOltdLG9uRGF5Q3JlYXRlOltdLG9uRGVzdHJveTpbXSxvbktleURvd246W10sb25Nb250aENoYW5nZTpbXSxvbk9wZW46W10sb25QYXJzZUNvbmZpZzpbXSxvblJlYWR5OltdLG9uVmFsdWVVcGRhdGU6W10sb25ZZWFyQ2hhbmdlOltdLG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjpbXSxwbHVnaW5zOltdLHBvc2l0aW9uOlwiYXV0b1wiLHBvc2l0aW9uRWxlbWVudDp2b2lkIDAscHJldkFycm93OlwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsc2hvcnRoYW5kQ3VycmVudE1vbnRoOiExLHNob3dNb250aHM6MSxzdGF0aWM6ITEsdGltZV8yNGhyOiExLHdlZWtOdW1iZXJzOiExLHdyYXA6ITF9LGk9e3dlZWtkYXlzOntzaG9ydGhhbmQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGxvbmdoYW5kOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdfSxtb250aHM6e3Nob3J0aGFuZDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGxvbmdoYW5kOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXX0sZGF5c0luTW9udGg6WzMxLDI4LDMxLDMwLDMxLDMwLDMxLDMxLDMwLDMxLDMwLDMxXSxmaXJzdERheU9mV2VlazowLG9yZGluYWw6ZnVuY3Rpb24oZSl7dmFyIHQ9ZSUxMDA7aWYodD4zJiZ0PDIxKXJldHVyblwidGhcIjtzd2l0Y2godCUxMCl7Y2FzZSAxOnJldHVyblwic3RcIjtjYXNlIDI6cmV0dXJuXCJuZFwiO2Nhc2UgMzpyZXR1cm5cInJkXCI7ZGVmYXVsdDpyZXR1cm5cInRoXCJ9fSxyYW5nZVNlcGFyYXRvcjpcIiB0byBcIix3ZWVrQWJicmV2aWF0aW9uOlwiV2tcIixzY3JvbGxUaXRsZTpcIlNjcm9sbCB0byBpbmNyZW1lbnRcIix0b2dnbGVUaXRsZTpcIkNsaWNrIHRvIHRvZ2dsZVwiLGFtUE06W1wiQU1cIixcIlBNXCJdLHllYXJBcmlhTGFiZWw6XCJZZWFyXCIsbW9udGhBcmlhTGFiZWw6XCJNb250aFwiLGhvdXJBcmlhTGFiZWw6XCJIb3VyXCIsbWludXRlQXJpYUxhYmVsOlwiTWludXRlXCIsdGltZV8yNGhyOiExfSxvPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTIpLChcIjAwMFwiK2UpLnNsaWNlKC0xKnQpfSxyPWZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZT8xOjB9O2Z1bmN0aW9uIGwoZSx0KXt2YXIgbjtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYT10aGlzO2NsZWFyVGltZW91dChuKSxuPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkoYSxhcmd1bWVudHMpfSksdCl9fXZhciBjPWZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgQXJyYXk/ZTpbZV19O2Z1bmN0aW9uIGQoZSx0LG4pe2lmKCEwPT09bilyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHQpO2UuY2xhc3NMaXN0LnJlbW92ZSh0KX1mdW5jdGlvbiBzKGUsdCxuKXt2YXIgYT13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gdD10fHxcIlwiLG49bnx8XCJcIixhLmNsYXNzTmFtZT10LHZvaWQgMCE9PW4mJihhLnRleHRDb250ZW50PW4pLGF9ZnVuY3Rpb24gdShlKXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIGYoZSx0KXtyZXR1cm4gdChlKT9lOmUucGFyZW50Tm9kZT9mKGUucGFyZW50Tm9kZSx0KTp2b2lkIDB9ZnVuY3Rpb24gbShlLHQpe3ZhciBuPXMoXCJkaXZcIixcIm51bUlucHV0V3JhcHBlclwiKSxhPXMoXCJpbnB1dFwiLFwibnVtSW5wdXQgXCIrZSksaT1zKFwic3BhblwiLFwiYXJyb3dVcFwiKSxvPXMoXCJzcGFuXCIsXCJhcnJvd0Rvd25cIik7aWYoLTE9PT1uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIDkuMFwiKT9hLnR5cGU9XCJudW1iZXJcIjooYS50eXBlPVwidGV4dFwiLGEucGF0dGVybj1cIlxcXFxkKlwiKSx2b2lkIDAhPT10KWZvcih2YXIgciBpbiB0KWEuc2V0QXR0cmlidXRlKHIsdFtyXSk7cmV0dXJuIG4uYXBwZW5kQ2hpbGQoYSksbi5hcHBlbmRDaGlsZChpKSxuLmFwcGVuZENoaWxkKG8pLG59ZnVuY3Rpb24gZyhlKXt0cnl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jb21wb3NlZFBhdGg/ZS5jb21wb3NlZFBhdGgoKVswXTplLnRhcmdldH1jYXRjaCh0KXtyZXR1cm4gZS50YXJnZXR9fXZhciBwPWZ1bmN0aW9uKCl7fSxoPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbi5tb250aHNbdD9cInNob3J0aGFuZFwiOlwibG9uZ2hhbmRcIl1bZV19LHY9e0Q6cCxGOmZ1bmN0aW9uKGUsdCxuKXtlLnNldE1vbnRoKG4ubW9udGhzLmxvbmdoYW5kLmluZGV4T2YodCkpfSxHOmZ1bmN0aW9uKGUsdCl7ZS5zZXRIb3VycyhwYXJzZUZsb2F0KHQpKX0sSDpmdW5jdGlvbihlLHQpe2Uuc2V0SG91cnMocGFyc2VGbG9hdCh0KSl9LEo6ZnVuY3Rpb24oZSx0KXtlLnNldERhdGUocGFyc2VGbG9hdCh0KSl9LEs6ZnVuY3Rpb24oZSx0LG4pe2Uuc2V0SG91cnMoZS5nZXRIb3VycygpJTEyKzEyKnIobmV3IFJlZ0V4cChuLmFtUE1bMV0sXCJpXCIpLnRlc3QodCkpKX0sTTpmdW5jdGlvbihlLHQsbil7ZS5zZXRNb250aChuLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZih0KSl9LFM6ZnVuY3Rpb24oZSx0KXtlLnNldFNlY29uZHMocGFyc2VGbG9hdCh0KSl9LFU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IERhdGUoMWUzKnBhcnNlRmxvYXQodCkpfSxXOmZ1bmN0aW9uKGUsdCxuKXt2YXIgYT1wYXJzZUludCh0KSxpPW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSwwLDIrNyooYS0xKSwwLDAsMCwwKTtyZXR1cm4gaS5zZXREYXRlKGkuZ2V0RGF0ZSgpLWkuZ2V0RGF5KCkrbi5maXJzdERheU9mV2VlayksaX0sWTpmdW5jdGlvbihlLHQpe2Uuc2V0RnVsbFllYXIocGFyc2VGbG9hdCh0KSl9LFo6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IERhdGUodCl9LGQ6ZnVuY3Rpb24oZSx0KXtlLnNldERhdGUocGFyc2VGbG9hdCh0KSl9LGg6ZnVuY3Rpb24oZSx0KXtlLnNldEhvdXJzKHBhcnNlRmxvYXQodCkpfSxpOmZ1bmN0aW9uKGUsdCl7ZS5zZXRNaW51dGVzKHBhcnNlRmxvYXQodCkpfSxqOmZ1bmN0aW9uKGUsdCl7ZS5zZXREYXRlKHBhcnNlRmxvYXQodCkpfSxsOnAsbTpmdW5jdGlvbihlLHQpe2Uuc2V0TW9udGgocGFyc2VGbG9hdCh0KS0xKX0sbjpmdW5jdGlvbihlLHQpe2Uuc2V0TW9udGgocGFyc2VGbG9hdCh0KS0xKX0sczpmdW5jdGlvbihlLHQpe2Uuc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHQpKX0sdTpmdW5jdGlvbihlLHQpe3JldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHQpKX0sdzpwLHk6ZnVuY3Rpb24oZSx0KXtlLnNldEZ1bGxZZWFyKDJlMytwYXJzZUZsb2F0KHQpKX19LEQ9e0Q6XCIoXFxcXHcrKVwiLEY6XCIoXFxcXHcrKVwiLEc6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixIOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsSjpcIihcXFxcZFxcXFxkfFxcXFxkKVxcXFx3K1wiLEs6XCJcIixNOlwiKFxcXFx3KylcIixTOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsVTpcIiguKylcIixXOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsWTpcIihcXFxcZHs0fSlcIixaOlwiKC4rKVwiLGQ6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixoOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsaTpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLGo6XCIoXFxcXGRcXFxcZHxcXFxcZClcIixsOlwiKFxcXFx3KylcIixtOlwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsbjpcIihcXFxcZFxcXFxkfFxcXFxkKVwiLHM6XCIoXFxcXGRcXFxcZHxcXFxcZClcIix1OlwiKC4rKVwiLHc6XCIoXFxcXGRcXFxcZHxcXFxcZClcIix5OlwiKFxcXFxkezJ9KVwifSx3PXtaOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvSVNPU3RyaW5nKCl9LEQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0LndlZWtkYXlzLnNob3J0aGFuZFt3LncoZSx0LG4pXX0sRjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgody5uKGUsdCxuKS0xLCExLHQpfSxHOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbyh3LmgoZSx0LG4pKX0sSDpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmdldEhvdXJzKCkpfSxKOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMCE9PXQub3JkaW5hbD9lLmdldERhdGUoKSt0Lm9yZGluYWwoZS5nZXREYXRlKCkpOmUuZ2V0RGF0ZSgpfSxLOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQuYW1QTVtyKGUuZ2V0SG91cnMoKT4xMSldfSxNOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGgoZS5nZXRNb250aCgpLCEwLHQpfSxTOmZ1bmN0aW9uKGUpe3JldHVybiBvKGUuZ2V0U2Vjb25kcygpKX0sVTpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRUaW1lKCkvMWUzfSxXOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbi5nZXRXZWVrKGUpfSxZOmZ1bmN0aW9uKGUpe3JldHVybiBvKGUuZ2V0RnVsbFllYXIoKSw0KX0sZDpmdW5jdGlvbihlKXtyZXR1cm4gbyhlLmdldERhdGUoKSl9LGg6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0SG91cnMoKSUxMj9lLmdldEhvdXJzKCklMTI6MTJ9LGk6ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZS5nZXRNaW51dGVzKCkpfSxqOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldERhdGUoKX0sbDpmdW5jdGlvbihlLHQpe3JldHVybiB0LndlZWtkYXlzLmxvbmdoYW5kW2UuZ2V0RGF5KCldfSxtOmZ1bmN0aW9uKGUpe3JldHVybiBvKGUuZ2V0TW9udGgoKSsxKX0sbjpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRNb250aCgpKzF9LHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0U2Vjb25kcygpfSx1OmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFRpbWUoKX0sdzpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXREYXkoKX0seTpmdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nKGUuZ2V0RnVsbFllYXIoKSkuc3Vic3RyaW5nKDIpfX0sYj1mdW5jdGlvbihlKXt2YXIgdD1lLmNvbmZpZyxuPXZvaWQgMD09PXQ/YTp0LG89ZS5sMTBuLHI9dm9pZCAwPT09bz9pOm8sbD1lLmlzTW9iaWxlLGM9dm9pZCAwIT09bCYmbDtyZXR1cm4gZnVuY3Rpb24oZSx0LGEpe3ZhciBpPWF8fHI7cmV0dXJuIHZvaWQgMD09PW4uZm9ybWF0RGF0ZXx8Yz90LnNwbGl0KFwiXCIpLm1hcCgoZnVuY3Rpb24odCxhLG8pe3JldHVybiB3W3RdJiZcIlxcXFxcIiE9PW9bYS0xXT93W3RdKGUsaSxuKTpcIlxcXFxcIiE9PXQ/dDpcIlwifSkpLmpvaW4oXCJcIik6bi5mb3JtYXREYXRlKGUsdCxpKX19LEM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jb25maWcsbj12b2lkIDA9PT10P2E6dCxvPWUubDEwbixyPXZvaWQgMD09PW8/aTpvO3JldHVybiBmdW5jdGlvbihlLHQsaSxvKXtpZigwPT09ZXx8ZSl7dmFyIGwsYz1vfHxyLGQ9ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlsPW5ldyBEYXRlKGUuZ2V0VGltZSgpKTtlbHNlIGlmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiZ2b2lkIDAhPT1lLnRvRml4ZWQpbD1uZXcgRGF0ZShlKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz10fHwobnx8YSkuZGF0ZUZvcm1hdCx1PVN0cmluZyhlKS50cmltKCk7aWYoXCJ0b2RheVwiPT09dSlsPW5ldyBEYXRlLGk9ITA7ZWxzZSBpZigvWiQvLnRlc3QodSl8fC9HTVQkLy50ZXN0KHUpKWw9bmV3IERhdGUoZSk7ZWxzZSBpZihuJiZuLnBhcnNlRGF0ZSlsPW4ucGFyc2VEYXRlKGUscyk7ZWxzZXtsPW4mJm4ubm9DYWxlbmRhcj9uZXcgRGF0ZSgobmV3IERhdGUpLnNldEhvdXJzKDAsMCwwLDApKTpuZXcgRGF0ZSgobmV3IERhdGUpLmdldEZ1bGxZZWFyKCksMCwxLDAsMCwwLDApO2Zvcih2YXIgZj12b2lkIDAsbT1bXSxnPTAscD0wLGg9XCJcIjtnPHMubGVuZ3RoO2crKyl7dmFyIHc9c1tnXSxiPVwiXFxcXFwiPT09dyxDPVwiXFxcXFwiPT09c1tnLTFdfHxiO2lmKERbd10mJiFDKXtoKz1EW3ddO3ZhciBNPW5ldyBSZWdFeHAoaCkuZXhlYyhlKTtNJiYoZj0hMCkmJm1bXCJZXCIhPT13P1wicHVzaFwiOlwidW5zaGlmdFwiXSh7Zm46dlt3XSx2YWw6TVsrK3BdfSl9ZWxzZSBifHwoaCs9XCIuXCIpO20uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5mbixuPWUudmFsO3JldHVybiBsPXQobCxuLGMpfHxsfSkpfWw9Zj9sOnZvaWQgMH19aWYobCBpbnN0YW5jZW9mIERhdGUmJiFpc05hTihsLmdldFRpbWUoKSkpcmV0dXJuITA9PT1pJiZsLnNldEhvdXJzKDAsMCwwLDApLGw7bi5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHByb3ZpZGVkOiBcIitkKSl9fX07ZnVuY3Rpb24gTShlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPSEwKSwhMSE9PW4/bmV3IERhdGUoZS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsMCwwLDApLW5ldyBEYXRlKHQuZ2V0VGltZSgpKS5zZXRIb3VycygwLDAsMCwwKTplLmdldFRpbWUoKS10LmdldFRpbWUoKX12YXIgeT04NjRlNTtmdW5jdGlvbiB4KGUpe3ZhciB0PWUuZGVmYXVsdEhvdXIsbj1lLmRlZmF1bHRNaW51dGUsYT1lLmRlZmF1bHRTZWNvbmRzO2lmKHZvaWQgMCE9PWUubWluRGF0ZSl7dmFyIGk9ZS5taW5EYXRlLmdldEhvdXJzKCksbz1lLm1pbkRhdGUuZ2V0TWludXRlcygpLHI9ZS5taW5EYXRlLmdldFNlY29uZHMoKTt0PGkmJih0PWkpLHQ9PT1pJiZuPG8mJihuPW8pLHQ9PT1pJiZuPT09byYmYTxyJiYoYT1lLm1pbkRhdGUuZ2V0U2Vjb25kcygpKX1pZih2b2lkIDAhPT1lLm1heERhdGUpe3ZhciBsPWUubWF4RGF0ZS5nZXRIb3VycygpLGM9ZS5tYXhEYXRlLmdldE1pbnV0ZXMoKTsodD1NYXRoLm1pbih0LGwpKT09PWwmJihuPU1hdGgubWluKGMsbikpLHQ9PT1sJiZuPT09YyYmKGE9ZS5tYXhEYXRlLmdldFNlY29uZHMoKSl9cmV0dXJue2hvdXJzOnQsbWludXRlczpuLHNlY29uZHM6YX19XCJmdW5jdGlvblwiIT10eXBlb2YgT2JqZWN0LmFzc2lnbiYmKE9iamVjdC5hc3NpZ249ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07aWYoIWUpdGhyb3cgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO2Zvcih2YXIgYT1mdW5jdGlvbih0KXt0JiZPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChmdW5jdGlvbihuKXtyZXR1cm4gZVtuXT10W25dfSkpfSxpPTAsbz10O2k8by5sZW5ndGg7aSsrKXt2YXIgcj1vW2ldO2Eocil9cmV0dXJuIGV9KTtmdW5jdGlvbiBFKHAsdil7dmFyIHc9e2NvbmZpZzplKGUoe30sYSksVC5kZWZhdWx0Q29uZmlnKSxsMTBuOml9O2Z1bmN0aW9uIEUoZSl7cmV0dXJuIGUuYmluZCh3KX1mdW5jdGlvbiBrKCl7dmFyIGU9dy5jb25maWc7ITE9PT1lLndlZWtOdW1iZXJzJiYxPT09ZS5zaG93TW9udGhzfHwhMCE9PWUubm9DYWxlbmRhciYmd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtpZih2b2lkIDAhPT13LmNhbGVuZGFyQ29udGFpbmVyJiYody5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIiksdm9pZCAwIT09dy5kYXlzQ29udGFpbmVyKXt2YXIgdD0ody5kYXlzLm9mZnNldFdpZHRoKzEpKmUuc2hvd01vbnRoczt3LmRheXNDb250YWluZXIuc3R5bGUud2lkdGg9dCtcInB4XCIsdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aD10Kyh2b2lkIDAhPT13LndlZWtXcmFwcGVyP3cud2Vla1dyYXBwZXIub2Zmc2V0V2lkdGg6MCkrXCJweFwiLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIpLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpfX0pKX1mdW5jdGlvbiBJKGUpe2lmKDA9PT13LnNlbGVjdGVkRGF0ZXMubGVuZ3RoKXt2YXIgdD12b2lkIDA9PT13LmNvbmZpZy5taW5EYXRlfHxNKG5ldyBEYXRlLHcuY29uZmlnLm1pbkRhdGUpPj0wP25ldyBEYXRlOm5ldyBEYXRlKHcuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpKSxuPXgody5jb25maWcpO3Quc2V0SG91cnMobi5ob3VycyxuLm1pbnV0ZXMsbi5zZWNvbmRzLHQuZ2V0TWlsbGlzZWNvbmRzKCkpLHcuc2VsZWN0ZWREYXRlcz1bdF0sdy5sYXRlc3RTZWxlY3RlZERhdGVPYmo9dH12b2lkIDAhPT1lJiZcImJsdXJcIiE9PWUudHlwZSYmZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PVwia2V5ZG93blwiPT09ZS50eXBlLG49ZyhlKSxhPW47dm9pZCAwIT09dy5hbVBNJiZuPT09dy5hbVBNJiYody5hbVBNLnRleHRDb250ZW50PXcubDEwbi5hbVBNW3Iody5hbVBNLnRleHRDb250ZW50PT09dy5sMTBuLmFtUE1bMF0pXSk7dmFyIGk9cGFyc2VGbG9hdChhLmdldEF0dHJpYnV0ZShcIm1pblwiKSksbD1wYXJzZUZsb2F0KGEuZ2V0QXR0cmlidXRlKFwibWF4XCIpKSxjPXBhcnNlRmxvYXQoYS5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKSxkPXBhcnNlSW50KGEudmFsdWUsMTApLHM9ZS5kZWx0YXx8KHQ/Mzg9PT1lLndoaWNoPzE6LTE6MCksdT1kK2MqcztpZih2b2lkIDAhPT1hLnZhbHVlJiYyPT09YS52YWx1ZS5sZW5ndGgpe3ZhciBmPWE9PT13LmhvdXJFbGVtZW50LG09YT09PXcubWludXRlRWxlbWVudDt1PGk/KHU9bCt1K3IoIWYpKyhyKGYpJiZyKCF3LmFtUE0pKSxtJiZqKHZvaWQgMCwtMSx3LmhvdXJFbGVtZW50KSk6dT5sJiYodT1hPT09dy5ob3VyRWxlbWVudD91LWwtcighdy5hbVBNKTppLG0mJmoodm9pZCAwLDEsdy5ob3VyRWxlbWVudCkpLHcuYW1QTSYmZiYmKDE9PT1jP3UrZD09PTIzOk1hdGguYWJzKHUtZCk+YykmJih3LmFtUE0udGV4dENvbnRlbnQ9dy5sMTBuLmFtUE1bcih3LmFtUE0udGV4dENvbnRlbnQ9PT13LmwxMG4uYW1QTVswXSldKSxhLnZhbHVlPW8odSl9fShlKTt2YXIgYT13Ll9pbnB1dC52YWx1ZTtTKCksYmUoKSx3Ll9pbnB1dC52YWx1ZSE9PWEmJncuX2RlYm91bmNlZENoYW5nZSgpfWZ1bmN0aW9uIFMoKXtpZih2b2lkIDAhPT13LmhvdXJFbGVtZW50JiZ2b2lkIDAhPT13Lm1pbnV0ZUVsZW1lbnQpe3ZhciBlLHQsbj0ocGFyc2VJbnQody5ob3VyRWxlbWVudC52YWx1ZS5zbGljZSgtMiksMTApfHwwKSUyNCxhPShwYXJzZUludCh3Lm1pbnV0ZUVsZW1lbnQudmFsdWUsMTApfHwwKSU2MCxpPXZvaWQgMCE9PXcuc2Vjb25kRWxlbWVudD8ocGFyc2VJbnQody5zZWNvbmRFbGVtZW50LnZhbHVlLDEwKXx8MCklNjA6MDt2b2lkIDAhPT13LmFtUE0mJihlPW4sdD13LmFtUE0udGV4dENvbnRlbnQsbj1lJTEyKzEyKnIodD09PXcubDEwbi5hbVBNWzFdKSk7dmFyIG89dm9pZCAwIT09dy5jb25maWcubWluVGltZXx8dy5jb25maWcubWluRGF0ZSYmdy5taW5EYXRlSGFzVGltZSYmdy5sYXRlc3RTZWxlY3RlZERhdGVPYmomJjA9PT1NKHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLHcuY29uZmlnLm1pbkRhdGUsITApO2lmKHZvaWQgMCE9PXcuY29uZmlnLm1heFRpbWV8fHcuY29uZmlnLm1heERhdGUmJncubWF4RGF0ZUhhc1RpbWUmJncubGF0ZXN0U2VsZWN0ZWREYXRlT2JqJiYwPT09TSh3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaix3LmNvbmZpZy5tYXhEYXRlLCEwKSl7dmFyIGw9dm9pZCAwIT09dy5jb25maWcubWF4VGltZT93LmNvbmZpZy5tYXhUaW1lOncuY29uZmlnLm1heERhdGU7KG49TWF0aC5taW4obixsLmdldEhvdXJzKCkpKT09PWwuZ2V0SG91cnMoKSYmKGE9TWF0aC5taW4oYSxsLmdldE1pbnV0ZXMoKSkpLGE9PT1sLmdldE1pbnV0ZXMoKSYmKGk9TWF0aC5taW4oaSxsLmdldFNlY29uZHMoKSkpfWlmKG8pe3ZhciBjPXZvaWQgMCE9PXcuY29uZmlnLm1pblRpbWU/dy5jb25maWcubWluVGltZTp3LmNvbmZpZy5taW5EYXRlOyhuPU1hdGgubWF4KG4sYy5nZXRIb3VycygpKSk9PT1jLmdldEhvdXJzKCkmJmE8Yy5nZXRNaW51dGVzKCkmJihhPWMuZ2V0TWludXRlcygpKSxhPT09Yy5nZXRNaW51dGVzKCkmJihpPU1hdGgubWF4KGksYy5nZXRTZWNvbmRzKCkpKX1PKG4sYSxpKX19ZnVuY3Rpb24gXyhlKXt2YXIgdD1lfHx3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iajt0JiZPKHQuZ2V0SG91cnMoKSx0LmdldE1pbnV0ZXMoKSx0LmdldFNlY29uZHMoKSl9ZnVuY3Rpb24gTyhlLHQsbil7dm9pZCAwIT09dy5sYXRlc3RTZWxlY3RlZERhdGVPYmomJncubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGUlMjQsdCxufHwwLDApLHcuaG91ckVsZW1lbnQmJncubWludXRlRWxlbWVudCYmIXcuaXNNb2JpbGUmJih3LmhvdXJFbGVtZW50LnZhbHVlPW8ody5jb25maWcudGltZV8yNGhyP2U6KDEyK2UpJTEyKzEyKnIoZSUxMj09MCkpLHcubWludXRlRWxlbWVudC52YWx1ZT1vKHQpLHZvaWQgMCE9PXcuYW1QTSYmKHcuYW1QTS50ZXh0Q29udGVudD13LmwxMG4uYW1QTVtyKGU+PTEyKV0pLHZvaWQgMCE9PXcuc2Vjb25kRWxlbWVudCYmKHcuc2Vjb25kRWxlbWVudC52YWx1ZT1vKG4pKSl9ZnVuY3Rpb24gRihlKXt2YXIgdD1nKGUpLG49cGFyc2VJbnQodC52YWx1ZSkrKGUuZGVsdGF8fDApOyhuLzFlMz4xfHxcIkVudGVyXCI9PT1lLmtleSYmIS9bXlxcZF0vLnRlc3Qobi50b1N0cmluZygpKSkmJlEobil9ZnVuY3Rpb24gQShlLHQsbixhKXtyZXR1cm4gdCBpbnN0YW5jZW9mIEFycmF5P3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIEEoZSx0LG4sYSl9KSk6ZSBpbnN0YW5jZW9mIEFycmF5P2UuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIEEoZSx0LG4sYSl9KSk6KGUuYWRkRXZlbnRMaXN0ZW5lcih0LG4sYSksdm9pZCB3Ll9oYW5kbGVycy5wdXNoKHtyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9fSkpfWZ1bmN0aW9uIE4oKXtwZShcIm9uQ2hhbmdlXCIpfWZ1bmN0aW9uIFAoZSx0KXt2YXIgbj12b2lkIDAhPT1lP3cucGFyc2VEYXRlKGUpOncubGF0ZXN0U2VsZWN0ZWREYXRlT2JqfHwody5jb25maWcubWluRGF0ZSYmdy5jb25maWcubWluRGF0ZT53Lm5vdz93LmNvbmZpZy5taW5EYXRlOncuY29uZmlnLm1heERhdGUmJncuY29uZmlnLm1heERhdGU8dy5ub3c/dy5jb25maWcubWF4RGF0ZTp3Lm5vdyksYT13LmN1cnJlbnRZZWFyLGk9dy5jdXJyZW50TW9udGg7dHJ5e3ZvaWQgMCE9PW4mJih3LmN1cnJlbnRZZWFyPW4uZ2V0RnVsbFllYXIoKSx3LmN1cnJlbnRNb250aD1uLmdldE1vbnRoKCkpfWNhdGNoKGUpe2UubWVzc2FnZT1cIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIrbix3LmNvbmZpZy5lcnJvckhhbmRsZXIoZSl9dCYmdy5jdXJyZW50WWVhciE9PWEmJihwZShcIm9uWWVhckNoYW5nZVwiKSxLKCkpLCF0fHx3LmN1cnJlbnRZZWFyPT09YSYmdy5jdXJyZW50TW9udGg9PT1pfHxwZShcIm9uTW9udGhDaGFuZ2VcIiksdy5yZWRyYXcoKX1mdW5jdGlvbiBZKGUpe3ZhciB0PWcoZSk7fnQuY2xhc3NOYW1lLmluZGV4T2YoXCJhcnJvd1wiKSYmaihlLHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKT8xOi0xKX1mdW5jdGlvbiBqKGUsdCxuKXt2YXIgYT1lJiZnKGUpLGk9bnx8YSYmYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuZmlyc3RDaGlsZCxvPWhlKFwiaW5jcmVtZW50XCIpO28uZGVsdGE9dCxpJiZpLmRpc3BhdGNoRXZlbnQobyl9ZnVuY3Rpb24gSChlLHQsbixhKXt2YXIgaT1YKHQsITApLG89cyhcInNwYW5cIixcImZsYXRwaWNrci1kYXkgXCIrZSx0LmdldERhdGUoKS50b1N0cmluZygpKTtyZXR1cm4gby5kYXRlT2JqPXQsby4kaT1hLG8uc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLHcuZm9ybWF0RGF0ZSh0LHcuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSksLTE9PT1lLmluZGV4T2YoXCJoaWRkZW5cIikmJjA9PT1NKHQsdy5ub3cpJiYody50b2RheURhdGVFbGVtPW8sby5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIiksby5zZXRBdHRyaWJ1dGUoXCJhcmlhLWN1cnJlbnRcIixcImRhdGVcIikpLGk/KG8udGFiSW5kZXg9LTEsdmUodCkmJihvLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSx3LnNlbGVjdGVkRGF0ZUVsZW09byxcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiYoZChvLFwic3RhcnRSYW5nZVwiLHcuc2VsZWN0ZWREYXRlc1swXSYmMD09PU0odCx3LnNlbGVjdGVkRGF0ZXNbMF0sITApKSxkKG8sXCJlbmRSYW5nZVwiLHcuc2VsZWN0ZWREYXRlc1sxXSYmMD09PU0odCx3LnNlbGVjdGVkRGF0ZXNbMV0sITApKSxcIm5leHRNb250aERheVwiPT09ZSYmby5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKSkpKTpvLmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItZGlzYWJsZWRcIiksXCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmZnVuY3Rpb24oZSl7cmV0dXJuIShcInJhbmdlXCIhPT13LmNvbmZpZy5tb2RlfHx3LnNlbGVjdGVkRGF0ZXMubGVuZ3RoPDIpJiYoTShlLHcuc2VsZWN0ZWREYXRlc1swXSk+PTAmJk0oZSx3LnNlbGVjdGVkRGF0ZXNbMV0pPD0wKX0odCkmJiF2ZSh0KSYmby5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKSx3LndlZWtOdW1iZXJzJiYxPT09dy5jb25maWcuc2hvd01vbnRocyYmXCJwcmV2TW9udGhEYXlcIiE9PWUmJm4lNz09MSYmdy53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixcIjxzcGFuIGNsYXNzPSdmbGF0cGlja3ItZGF5Jz5cIit3LmNvbmZpZy5nZXRXZWVrKHQpK1wiPC9zcGFuPlwiKSxwZShcIm9uRGF5Q3JlYXRlXCIsbyksb31mdW5jdGlvbiBMKGUpe2UuZm9jdXMoKSxcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiZhZShlKX1mdW5jdGlvbiBXKGUpe2Zvcih2YXIgdD1lPjA/MDp3LmNvbmZpZy5zaG93TW9udGhzLTEsbj1lPjA/dy5jb25maWcuc2hvd01vbnRoczotMSxhPXQ7YSE9bjthKz1lKWZvcih2YXIgaT13LmRheXNDb250YWluZXIuY2hpbGRyZW5bYV0sbz1lPjA/MDppLmNoaWxkcmVuLmxlbmd0aC0xLHI9ZT4wP2kuY2hpbGRyZW4ubGVuZ3RoOi0xLGw9bztsIT1yO2wrPWUpe3ZhciBjPWkuY2hpbGRyZW5bbF07aWYoLTE9PT1jLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpJiZYKGMuZGF0ZU9iaikpcmV0dXJuIGN9fWZ1bmN0aW9uIFIoZSx0KXt2YXIgbj1lZShkb2N1bWVudC5hY3RpdmVFbGVtZW50fHxkb2N1bWVudC5ib2R5KSxhPXZvaWQgMCE9PWU/ZTpuP2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ6dm9pZCAwIT09dy5zZWxlY3RlZERhdGVFbGVtJiZlZSh3LnNlbGVjdGVkRGF0ZUVsZW0pP3cuc2VsZWN0ZWREYXRlRWxlbTp2b2lkIDAhPT13LnRvZGF5RGF0ZUVsZW0mJmVlKHcudG9kYXlEYXRlRWxlbSk/dy50b2RheURhdGVFbGVtOlcodD4wPzE6LTEpO3ZvaWQgMD09PWE/dy5faW5wdXQuZm9jdXMoKTpuP2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPS0xPT09ZS5jbGFzc05hbWUuaW5kZXhPZihcIk1vbnRoXCIpP2UuZGF0ZU9iai5nZXRNb250aCgpOncuY3VycmVudE1vbnRoLGE9dD4wP3cuY29uZmlnLnNob3dNb250aHM6LTEsaT10PjA/MTotMSxvPW4tdy5jdXJyZW50TW9udGg7byE9YTtvKz1pKWZvcih2YXIgcj13LmRheXNDb250YWluZXIuY2hpbGRyZW5bb10sbD1uLXcuY3VycmVudE1vbnRoPT09bz9lLiRpK3Q6dDwwP3IuY2hpbGRyZW4ubGVuZ3RoLTE6MCxjPXIuY2hpbGRyZW4ubGVuZ3RoLGQ9bDtkPj0wJiZkPGMmJmQhPSh0PjA/YzotMSk7ZCs9aSl7dmFyIHM9ci5jaGlsZHJlbltkXTtpZigtMT09PXMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikmJlgocy5kYXRlT2JqKSYmTWF0aC5hYnMoZS4kaS1kKT49TWF0aC5hYnModCkpcmV0dXJuIEwocyl9dy5jaGFuZ2VNb250aChpKSxSKFcoaSksMCl9KGEsdCk6TChhKX1mdW5jdGlvbiBCKGUsdCl7Zm9yKHZhciBuPShuZXcgRGF0ZShlLHQsMSkuZ2V0RGF5KCktdy5sMTBuLmZpcnN0RGF5T2ZXZWVrKzcpJTcsYT13LnV0aWxzLmdldERheXNJbk1vbnRoKCh0LTErMTIpJTEyLGUpLGk9dy51dGlscy5nZXREYXlzSW5Nb250aCh0LGUpLG89d2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxyPXcuY29uZmlnLnNob3dNb250aHM+MSxsPXI/XCJwcmV2TW9udGhEYXkgaGlkZGVuXCI6XCJwcmV2TW9udGhEYXlcIixjPXI/XCJuZXh0TW9udGhEYXkgaGlkZGVuXCI6XCJuZXh0TW9udGhEYXlcIixkPWErMS1uLHU9MDtkPD1hO2QrKyx1Kyspby5hcHBlbmRDaGlsZChIKGwsbmV3IERhdGUoZSx0LTEsZCksZCx1KSk7Zm9yKGQ9MTtkPD1pO2QrKyx1Kyspby5hcHBlbmRDaGlsZChIKFwiXCIsbmV3IERhdGUoZSx0LGQpLGQsdSkpO2Zvcih2YXIgZj1pKzE7Zjw9NDItbiYmKDE9PT13LmNvbmZpZy5zaG93TW9udGhzfHx1JTchPTApO2YrKyx1Kyspby5hcHBlbmRDaGlsZChIKGMsbmV3IERhdGUoZSx0KzEsZiVpKSxmLHUpKTt2YXIgbT1zKFwiZGl2XCIsXCJkYXlDb250YWluZXJcIik7cmV0dXJuIG0uYXBwZW5kQ2hpbGQobyksbX1mdW5jdGlvbiBKKCl7aWYodm9pZCAwIT09dy5kYXlzQ29udGFpbmVyKXt1KHcuZGF5c0NvbnRhaW5lciksdy53ZWVrTnVtYmVycyYmdSh3LndlZWtOdW1iZXJzKTtmb3IodmFyIGU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHQ9MDt0PHcuY29uZmlnLnNob3dNb250aHM7dCsrKXt2YXIgbj1uZXcgRGF0ZSh3LmN1cnJlbnRZZWFyLHcuY3VycmVudE1vbnRoLDEpO24uc2V0TW9udGgody5jdXJyZW50TW9udGgrdCksZS5hcHBlbmRDaGlsZChCKG4uZ2V0RnVsbFllYXIoKSxuLmdldE1vbnRoKCkpKX13LmRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZSksdy5kYXlzPXcuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLFwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUmJjE9PT13LnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiZhZSgpfX1mdW5jdGlvbiBLKCl7aWYoISh3LmNvbmZpZy5zaG93TW9udGhzPjF8fFwiZHJvcGRvd25cIiE9PXcuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlKSl7dmFyIGU9ZnVuY3Rpb24oZSl7cmV0dXJuISh2b2lkIDAhPT13LmNvbmZpZy5taW5EYXRlJiZ3LmN1cnJlbnRZZWFyPT09dy5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpJiZlPHcuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSkmJiEodm9pZCAwIT09dy5jb25maWcubWF4RGF0ZSYmdy5jdXJyZW50WWVhcj09PXcuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSYmZT53LmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCkpfTt3Lm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnRhYkluZGV4PS0xLHcubW9udGhzRHJvcGRvd25Db250YWluZXIuaW5uZXJIVE1MPVwiXCI7Zm9yKHZhciB0PTA7dDwxMjt0KyspaWYoZSh0KSl7dmFyIG49cyhcIm9wdGlvblwiLFwiZmxhdHBpY2tyLW1vbnRoRHJvcGRvd24tbW9udGhcIik7bi52YWx1ZT1uZXcgRGF0ZSh3LmN1cnJlbnRZZWFyLHQpLmdldE1vbnRoKCkudG9TdHJpbmcoKSxuLnRleHRDb250ZW50PWgodCx3LmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsdy5sMTBuKSxuLnRhYkluZGV4PS0xLHcuY3VycmVudE1vbnRoPT09dCYmKG4uc2VsZWN0ZWQ9ITApLHcubW9udGhzRHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQobil9fX1mdW5jdGlvbiBVKCl7dmFyIGUsdD1zKFwiZGl2XCIsXCJmbGF0cGlja3ItbW9udGhcIiksbj13aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3cuY29uZmlnLnNob3dNb250aHM+MXx8XCJzdGF0aWNcIj09PXcuY29uZmlnLm1vbnRoU2VsZWN0b3JUeXBlP2U9cyhcInNwYW5cIixcImN1ci1tb250aFwiKToody5tb250aHNEcm9wZG93bkNvbnRhaW5lcj1zKFwic2VsZWN0XCIsXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHNcIiksdy5tb250aHNEcm9wZG93bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdy5sMTBuLm1vbnRoQXJpYUxhYmVsKSxBKHcubW9udGhzRHJvcGRvd25Db250YWluZXIsXCJjaGFuZ2VcIiwoZnVuY3Rpb24oZSl7dmFyIHQ9ZyhlKSxuPXBhcnNlSW50KHQudmFsdWUsMTApO3cuY2hhbmdlTW9udGgobi13LmN1cnJlbnRNb250aCkscGUoXCJvbk1vbnRoQ2hhbmdlXCIpfSkpLEsoKSxlPXcubW9udGhzRHJvcGRvd25Db250YWluZXIpO3ZhciBhPW0oXCJjdXIteWVhclwiLHt0YWJpbmRleDpcIi0xXCJ9KSxpPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXTtpLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIix3LmwxMG4ueWVhckFyaWFMYWJlbCksdy5jb25maWcubWluRGF0ZSYmaS5zZXRBdHRyaWJ1dGUoXCJtaW5cIix3LmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksdy5jb25maWcubWF4RGF0ZSYmKGkuc2V0QXR0cmlidXRlKFwibWF4XCIsdy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLGkuZGlzYWJsZWQ9ISF3LmNvbmZpZy5taW5EYXRlJiZ3LmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCk9PT13LmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpO3ZhciBvPXMoXCJkaXZcIixcImZsYXRwaWNrci1jdXJyZW50LW1vbnRoXCIpO3JldHVybiBvLmFwcGVuZENoaWxkKGUpLG8uYXBwZW5kQ2hpbGQoYSksbi5hcHBlbmRDaGlsZChvKSx0LmFwcGVuZENoaWxkKG4pLHtjb250YWluZXI6dCx5ZWFyRWxlbWVudDppLG1vbnRoRWxlbWVudDplfX1mdW5jdGlvbiBxKCl7dSh3Lm1vbnRoTmF2KSx3Lm1vbnRoTmF2LmFwcGVuZENoaWxkKHcucHJldk1vbnRoTmF2KSx3LmNvbmZpZy5zaG93TW9udGhzJiYody55ZWFyRWxlbWVudHM9W10sdy5tb250aEVsZW1lbnRzPVtdKTtmb3IodmFyIGU9dy5jb25maWcuc2hvd01vbnRocztlLS07KXt2YXIgdD1VKCk7dy55ZWFyRWxlbWVudHMucHVzaCh0LnllYXJFbGVtZW50KSx3Lm1vbnRoRWxlbWVudHMucHVzaCh0Lm1vbnRoRWxlbWVudCksdy5tb250aE5hdi5hcHBlbmRDaGlsZCh0LmNvbnRhaW5lcil9dy5tb250aE5hdi5hcHBlbmRDaGlsZCh3Lm5leHRNb250aE5hdil9ZnVuY3Rpb24gJCgpe3cud2Vla2RheUNvbnRhaW5lcj91KHcud2Vla2RheUNvbnRhaW5lcik6dy53ZWVrZGF5Q29udGFpbmVyPXMoXCJkaXZcIixcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtmb3IodmFyIGU9dy5jb25maWcuc2hvd01vbnRocztlLS07KXt2YXIgdD1zKFwiZGl2XCIsXCJmbGF0cGlja3Itd2Vla2RheWNvbnRhaW5lclwiKTt3LndlZWtkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodCl9cmV0dXJuIHooKSx3LndlZWtkYXlDb250YWluZXJ9ZnVuY3Rpb24geigpe2lmKHcud2Vla2RheUNvbnRhaW5lcil7dmFyIGU9dy5sMTBuLmZpcnN0RGF5T2ZXZWVrLG49dCh3LmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kKTtlPjAmJmU8bi5sZW5ndGgmJihuPXQobi5zcGxpY2UoZSxuLmxlbmd0aCksbi5zcGxpY2UoMCxlKSkpO2Zvcih2YXIgYT13LmNvbmZpZy5zaG93TW9udGhzO2EtLTspdy53ZWVrZGF5Q29udGFpbmVyLmNoaWxkcmVuW2FdLmlubmVySFRNTD1cIlxcbiAgICAgIDxzcGFuIGNsYXNzPSdmbGF0cGlja3Itd2Vla2RheSc+XFxuICAgICAgICBcIituLmpvaW4oXCI8L3NwYW4+PHNwYW4gY2xhc3M9J2ZsYXRwaWNrci13ZWVrZGF5Jz5cIikrXCJcXG4gICAgICA8L3NwYW4+XFxuICAgICAgXCJ9fWZ1bmN0aW9uIEcoZSx0KXt2b2lkIDA9PT10JiYodD0hMCk7dmFyIG49dD9lOmUtdy5jdXJyZW50TW9udGg7bjwwJiYhMD09PXcuX2hpZGVQcmV2TW9udGhBcnJvd3x8bj4wJiYhMD09PXcuX2hpZGVOZXh0TW9udGhBcnJvd3x8KHcuY3VycmVudE1vbnRoKz1uLCh3LmN1cnJlbnRNb250aDwwfHx3LmN1cnJlbnRNb250aD4xMSkmJih3LmN1cnJlbnRZZWFyKz13LmN1cnJlbnRNb250aD4xMT8xOi0xLHcuY3VycmVudE1vbnRoPSh3LmN1cnJlbnRNb250aCsxMiklMTIscGUoXCJvblllYXJDaGFuZ2VcIiksSygpKSxKKCkscGUoXCJvbk1vbnRoQ2hhbmdlXCIpLERlKCkpfWZ1bmN0aW9uIFYoZSl7cmV0dXJuISghdy5jb25maWcuYXBwZW5kVG98fCF3LmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlKSl8fHcuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZSl9ZnVuY3Rpb24gWihlKXtpZih3LmlzT3BlbiYmIXcuY29uZmlnLmlubGluZSl7dmFyIHQ9ZyhlKSxuPVYodCksYT10PT09dy5pbnB1dHx8dD09PXcuYWx0SW5wdXR8fHcuZWxlbWVudC5jb250YWlucyh0KXx8ZS5wYXRoJiZlLnBhdGguaW5kZXhPZiYmKH5lLnBhdGguaW5kZXhPZih3LmlucHV0KXx8fmUucGF0aC5pbmRleE9mKHcuYWx0SW5wdXQpKSxpPVwiYmx1clwiPT09ZS50eXBlP2EmJmUucmVsYXRlZFRhcmdldCYmIVYoZS5yZWxhdGVkVGFyZ2V0KTohYSYmIW4mJiFWKGUucmVsYXRlZFRhcmdldCksbz0hdy5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY29udGFpbnModCl9KSk7aSYmbyYmKHZvaWQgMCE9PXcudGltZUNvbnRhaW5lciYmdm9pZCAwIT09dy5taW51dGVFbGVtZW50JiZ2b2lkIDAhPT13LmhvdXJFbGVtZW50JiZcIlwiIT09dy5pbnB1dC52YWx1ZSYmdm9pZCAwIT09dy5pbnB1dC52YWx1ZSYmSSgpLHcuY2xvc2UoKSx3LmNvbmZpZyYmXCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmMT09PXcuc2VsZWN0ZWREYXRlcy5sZW5ndGgmJih3LmNsZWFyKCExKSx3LnJlZHJhdygpKSl9fWZ1bmN0aW9uIFEoZSl7aWYoISghZXx8dy5jb25maWcubWluRGF0ZSYmZTx3LmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCl8fHcuY29uZmlnLm1heERhdGUmJmU+dy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSl7dmFyIHQ9ZSxuPXcuY3VycmVudFllYXIhPT10O3cuY3VycmVudFllYXI9dHx8dy5jdXJyZW50WWVhcix3LmNvbmZpZy5tYXhEYXRlJiZ3LmN1cnJlbnRZZWFyPT09dy5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpP3cuY3VycmVudE1vbnRoPU1hdGgubWluKHcuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSx3LmN1cnJlbnRNb250aCk6dy5jb25maWcubWluRGF0ZSYmdy5jdXJyZW50WWVhcj09PXcuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSYmKHcuY3VycmVudE1vbnRoPU1hdGgubWF4KHcuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSx3LmN1cnJlbnRNb250aCkpLG4mJih3LnJlZHJhdygpLHBlKFwib25ZZWFyQ2hhbmdlXCIpLEsoKSl9fWZ1bmN0aW9uIFgoZSx0KXt2YXIgbjt2b2lkIDA9PT10JiYodD0hMCk7dmFyIGE9dy5wYXJzZURhdGUoZSx2b2lkIDAsdCk7aWYody5jb25maWcubWluRGF0ZSYmYSYmTShhLHcuY29uZmlnLm1pbkRhdGUsdm9pZCAwIT09dD90OiF3Lm1pbkRhdGVIYXNUaW1lKTwwfHx3LmNvbmZpZy5tYXhEYXRlJiZhJiZNKGEsdy5jb25maWcubWF4RGF0ZSx2b2lkIDAhPT10P3Q6IXcubWF4RGF0ZUhhc1RpbWUpPjApcmV0dXJuITE7aWYoIXcuY29uZmlnLmVuYWJsZSYmMD09PXcuY29uZmlnLmRpc2FibGUubGVuZ3RoKXJldHVybiEwO2lmKHZvaWQgMD09PWEpcmV0dXJuITE7Zm9yKHZhciBpPSEhdy5jb25maWcuZW5hYmxlLG89bnVsbCE9PShuPXcuY29uZmlnLmVuYWJsZSkmJnZvaWQgMCE9PW4/bjp3LmNvbmZpZy5kaXNhYmxlLHI9MCxsPXZvaWQgMDtyPG8ubGVuZ3RoO3IrKyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YobD1vW3JdKSYmbChhKSlyZXR1cm4gaTtpZihsIGluc3RhbmNlb2YgRGF0ZSYmdm9pZCAwIT09YSYmbC5nZXRUaW1lKCk9PT1hLmdldFRpbWUoKSlyZXR1cm4gaTtpZihcInN0cmluZ1wiPT10eXBlb2YgbCl7dmFyIGM9dy5wYXJzZURhdGUobCx2b2lkIDAsITApO3JldHVybiBjJiZjLmdldFRpbWUoKT09PWEuZ2V0VGltZSgpP2k6IWl9aWYoXCJvYmplY3RcIj09dHlwZW9mIGwmJnZvaWQgMCE9PWEmJmwuZnJvbSYmbC50byYmYS5nZXRUaW1lKCk+PWwuZnJvbS5nZXRUaW1lKCkmJmEuZ2V0VGltZSgpPD1sLnRvLmdldFRpbWUoKSlyZXR1cm4gaX1yZXR1cm4haX1mdW5jdGlvbiBlZShlKXtyZXR1cm4gdm9pZCAwIT09dy5kYXlzQ29udGFpbmVyJiYoLTE9PT1lLmNsYXNzTmFtZS5pbmRleE9mKFwiaGlkZGVuXCIpJiYtMT09PWUuY2xhc3NOYW1lLmluZGV4T2YoXCJmbGF0cGlja3ItZGlzYWJsZWRcIikmJncuZGF5c0NvbnRhaW5lci5jb250YWlucyhlKSl9ZnVuY3Rpb24gdGUoZSl7IShlLnRhcmdldD09PXcuX2lucHV0KXx8ISh3LnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjB8fHcuX2lucHV0LnZhbHVlLmxlbmd0aD4wKXx8ZS5yZWxhdGVkVGFyZ2V0JiZWKGUucmVsYXRlZFRhcmdldCl8fHcuc2V0RGF0ZSh3Ll9pbnB1dC52YWx1ZSwhMCxlLnRhcmdldD09PXcuYWx0SW5wdXQ/dy5jb25maWcuYWx0Rm9ybWF0OncuY29uZmlnLmRhdGVGb3JtYXQpfWZ1bmN0aW9uIG5lKGUpe3ZhciB0PWcoZSksbj13LmNvbmZpZy53cmFwP3AuY29udGFpbnModCk6dD09PXcuX2lucHV0LGE9dy5jb25maWcuYWxsb3dJbnB1dCxpPXcuaXNPcGVuJiYoIWF8fCFuKSxvPXcuY29uZmlnLmlubGluZSYmbiYmIWE7aWYoMTM9PT1lLmtleUNvZGUmJm4pe2lmKGEpcmV0dXJuIHcuc2V0RGF0ZSh3Ll9pbnB1dC52YWx1ZSwhMCx0PT09dy5hbHRJbnB1dD93LmNvbmZpZy5hbHRGb3JtYXQ6dy5jb25maWcuZGF0ZUZvcm1hdCksdC5ibHVyKCk7dy5vcGVuKCl9ZWxzZSBpZihWKHQpfHxpfHxvKXt2YXIgcj0hIXcudGltZUNvbnRhaW5lciYmdy50aW1lQ29udGFpbmVyLmNvbnRhaW5zKHQpO3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgMTM6cj8oZS5wcmV2ZW50RGVmYXVsdCgpLEkoKSxzZSgpKTp1ZShlKTticmVhaztjYXNlIDI3OmUucHJldmVudERlZmF1bHQoKSxzZSgpO2JyZWFrO2Nhc2UgODpjYXNlIDQ2Om4mJiF3LmNvbmZpZy5hbGxvd0lucHV0JiYoZS5wcmV2ZW50RGVmYXVsdCgpLHcuY2xlYXIoKSk7YnJlYWs7Y2FzZSAzNzpjYXNlIDM5OmlmKHJ8fG4pdy5ob3VyRWxlbWVudCYmdy5ob3VyRWxlbWVudC5mb2N1cygpO2Vsc2UgaWYoZS5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgMCE9PXcuZGF5c0NvbnRhaW5lciYmKCExPT09YXx8ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmZWUoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKXt2YXIgbD0zOT09PWUua2V5Q29kZT8xOi0xO2UuY3RybEtleT8oZS5zdG9wUHJvcGFnYXRpb24oKSxHKGwpLFIoVygxKSwwKSk6Uih2b2lkIDAsbCl9YnJlYWs7Y2FzZSAzODpjYXNlIDQwOmUucHJldmVudERlZmF1bHQoKTt2YXIgYz00MD09PWUua2V5Q29kZT8xOi0xO3cuZGF5c0NvbnRhaW5lciYmdm9pZCAwIT09dC4kaXx8dD09PXcuaW5wdXR8fHQ9PT13LmFsdElucHV0P2UuY3RybEtleT8oZS5zdG9wUHJvcGFnYXRpb24oKSxRKHcuY3VycmVudFllYXItYyksUihXKDEpLDApKTpyfHxSKHZvaWQgMCw3KmMpOnQ9PT13LmN1cnJlbnRZZWFyRWxlbWVudD9RKHcuY3VycmVudFllYXItYyk6dy5jb25maWcuZW5hYmxlVGltZSYmKCFyJiZ3LmhvdXJFbGVtZW50JiZ3LmhvdXJFbGVtZW50LmZvY3VzKCksSShlKSx3Ll9kZWJvdW5jZWRDaGFuZ2UoKSk7YnJlYWs7Y2FzZSA5OmlmKHIpe3ZhciBkPVt3LmhvdXJFbGVtZW50LHcubWludXRlRWxlbWVudCx3LnNlY29uZEVsZW1lbnQsdy5hbVBNXS5jb25jYXQody5wbHVnaW5FbGVtZW50cykuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZX0pKSxzPWQuaW5kZXhPZih0KTtpZigtMSE9PXMpe3ZhciB1PWRbcysoZS5zaGlmdEtleT8tMToxKV07ZS5wcmV2ZW50RGVmYXVsdCgpLCh1fHx3Ll9pbnB1dCkuZm9jdXMoKX19ZWxzZSF3LmNvbmZpZy5ub0NhbGVuZGFyJiZ3LmRheXNDb250YWluZXImJncuZGF5c0NvbnRhaW5lci5jb250YWlucyh0KSYmZS5zaGlmdEtleSYmKGUucHJldmVudERlZmF1bHQoKSx3Ll9pbnB1dC5mb2N1cygpKX19aWYodm9pZCAwIT09dy5hbVBNJiZ0PT09dy5hbVBNKXN3aXRjaChlLmtleSl7Y2FzZSB3LmwxMG4uYW1QTVswXS5jaGFyQXQoMCk6Y2FzZSB3LmwxMG4uYW1QTVswXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTp3LmFtUE0udGV4dENvbnRlbnQ9dy5sMTBuLmFtUE1bMF0sUygpLGJlKCk7YnJlYWs7Y2FzZSB3LmwxMG4uYW1QTVsxXS5jaGFyQXQoMCk6Y2FzZSB3LmwxMG4uYW1QTVsxXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTp3LmFtUE0udGV4dENvbnRlbnQ9dy5sMTBuLmFtUE1bMV0sUygpLGJlKCl9KG58fFYodCkpJiZwZShcIm9uS2V5RG93blwiLGUpfWZ1bmN0aW9uIGFlKGUpe2lmKDE9PT13LnNlbGVjdGVkRGF0ZXMubGVuZ3RoJiYoIWV8fGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSYmIWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpKSl7Zm9yKHZhciB0PWU/ZS5kYXRlT2JqLmdldFRpbWUoKTp3LmRheXMuZmlyc3RFbGVtZW50Q2hpbGQuZGF0ZU9iai5nZXRUaW1lKCksbj13LnBhcnNlRGF0ZSh3LnNlbGVjdGVkRGF0ZXNbMF0sdm9pZCAwLCEwKS5nZXRUaW1lKCksYT1NYXRoLm1pbih0LHcuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLGk9TWF0aC5tYXgodCx3LnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSxvPSExLHI9MCxsPTAsYz1hO2M8aTtjKz15KVgobmV3IERhdGUoYyksITApfHwobz1vfHxjPmEmJmM8aSxjPG4mJighcnx8Yz5yKT9yPWM6Yz5uJiYoIWx8fGM8bCkmJihsPWMpKTtmb3IodmFyIGQ9MDtkPHcuY29uZmlnLnNob3dNb250aHM7ZCsrKWZvcih2YXIgcz13LmRheXNDb250YWluZXIuY2hpbGRyZW5bZF0sdT1mdW5jdGlvbihhLGkpe3ZhciBjLGQsdSxmPXMuY2hpbGRyZW5bYV0sbT1mLmRhdGVPYmouZ2V0VGltZSgpLGc9cj4wJiZtPHJ8fGw+MCYmbT5sO3JldHVybiBnPyhmLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpLFtcImluUmFuZ2VcIixcInN0YXJ0UmFuZ2VcIixcImVuZFJhbmdlXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2YuY2xhc3NMaXN0LnJlbW92ZShlKX0pKSxcImNvbnRpbnVlXCIpOm8mJiFnP1wiY29udGludWVcIjooW1wic3RhcnRSYW5nZVwiLFwiaW5SYW5nZVwiLFwiZW5kUmFuZ2VcIixcIm5vdEFsbG93ZWRcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7Zi5jbGFzc0xpc3QucmVtb3ZlKGUpfSkpLHZvaWQodm9pZCAwIT09ZSYmKGUuY2xhc3NMaXN0LmFkZCh0PD13LnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpP1wic3RhcnRSYW5nZVwiOlwiZW5kUmFuZ2VcIiksbjx0JiZtPT09bj9mLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpOm4+dCYmbT09PW4mJmYuY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpLG0+PXImJigwPT09bHx8bTw9bCkmJihkPW4sdT10LChjPW0pPk1hdGgubWluKGQsdSkmJmM8TWF0aC5tYXgoZCx1KSkmJmYuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIikpKSl9LGY9MCxtPXMuY2hpbGRyZW4ubGVuZ3RoO2Y8bTtmKyspdShmKX19ZnVuY3Rpb24gaWUoKXshdy5pc09wZW58fHcuY29uZmlnLnN0YXRpY3x8dy5jb25maWcuaW5saW5lfHxjZSgpfWZ1bmN0aW9uIG9lKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj13LmNvbmZpZ1tcIl9cIitlK1wiRGF0ZVwiXT13LnBhcnNlRGF0ZSh0LHcuY29uZmlnLmRhdGVGb3JtYXQpLGE9dy5jb25maWdbXCJfXCIrKFwibWluXCI9PT1lP1wibWF4XCI6XCJtaW5cIikrXCJEYXRlXCJdO3ZvaWQgMCE9PW4mJih3W1wibWluXCI9PT1lP1wibWluRGF0ZUhhc1RpbWVcIjpcIm1heERhdGVIYXNUaW1lXCJdPW4uZ2V0SG91cnMoKT4wfHxuLmdldE1pbnV0ZXMoKT4wfHxuLmdldFNlY29uZHMoKT4wKSx3LnNlbGVjdGVkRGF0ZXMmJih3LnNlbGVjdGVkRGF0ZXM9dy5zZWxlY3RlZERhdGVzLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIFgoZSl9KSksdy5zZWxlY3RlZERhdGVzLmxlbmd0aHx8XCJtaW5cIiE9PWV8fF8obiksYmUoKSksdy5kYXlzQ29udGFpbmVyJiYoZGUoKSx2b2lkIDAhPT1uP3cuY3VycmVudFllYXJFbGVtZW50W2VdPW4uZ2V0RnVsbFllYXIoKS50b1N0cmluZygpOncuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShlKSx3LmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZD0hIWEmJnZvaWQgMCE9PW4mJmEuZ2V0RnVsbFllYXIoKT09PW4uZ2V0RnVsbFllYXIoKSl9fWZ1bmN0aW9uIHJlKCl7cmV0dXJuIHcuY29uZmlnLndyYXA/cC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpOnB9ZnVuY3Rpb24gbGUoKXtcIm9iamVjdFwiIT10eXBlb2Ygdy5jb25maWcubG9jYWxlJiZ2b2lkIDA9PT1ULmwxMG5zW3cuY29uZmlnLmxvY2FsZV0mJncuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJmbGF0cGlja3I6IGludmFsaWQgbG9jYWxlIFwiK3cuY29uZmlnLmxvY2FsZSkpLHcubDEwbj1lKGUoe30sVC5sMTBucy5kZWZhdWx0KSxcIm9iamVjdFwiPT10eXBlb2Ygdy5jb25maWcubG9jYWxlP3cuY29uZmlnLmxvY2FsZTpcImRlZmF1bHRcIiE9PXcuY29uZmlnLmxvY2FsZT9ULmwxMG5zW3cuY29uZmlnLmxvY2FsZV06dm9pZCAwKSxELks9XCIoXCIrdy5sMTBuLmFtUE1bMF0rXCJ8XCIrdy5sMTBuLmFtUE1bMV0rXCJ8XCIrdy5sMTBuLmFtUE1bMF0udG9Mb3dlckNhc2UoKStcInxcIit3LmwxMG4uYW1QTVsxXS50b0xvd2VyQ2FzZSgpK1wiKVwiLHZvaWQgMD09PWUoZSh7fSx2KSxKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHAuZGF0YXNldHx8e30pKSkudGltZV8yNGhyJiZ2b2lkIDA9PT1ULmRlZmF1bHRDb25maWcudGltZV8yNGhyJiYody5jb25maWcudGltZV8yNGhyPXcubDEwbi50aW1lXzI0aHIpLHcuZm9ybWF0RGF0ZT1iKHcpLHcucGFyc2VEYXRlPUMoe2NvbmZpZzp3LmNvbmZpZyxsMTBuOncubDEwbn0pfWZ1bmN0aW9uIGNlKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHcuY29uZmlnLnBvc2l0aW9uKXtpZih2b2lkIDAhPT13LmNhbGVuZGFyQ29udGFpbmVyKXtwZShcIm9uUHJlQ2FsZW5kYXJQb3NpdGlvblwiKTt2YXIgdD1lfHx3Ll9wb3NpdGlvbkVsZW1lbnQsbj1BcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwody5jYWxlbmRhckNvbnRhaW5lci5jaGlsZHJlbiwoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSt0Lm9mZnNldEhlaWdodH0pLDApLGE9dy5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRXaWR0aCxpPXcuY29uZmlnLnBvc2l0aW9uLnNwbGl0KFwiIFwiKSxvPWlbMF0scj1pLmxlbmd0aD4xP2lbMV06bnVsbCxsPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz13aW5kb3cuaW5uZXJIZWlnaHQtbC5ib3R0b20scz1cImFib3ZlXCI9PT1vfHxcImJlbG93XCIhPT1vJiZjPG4mJmwudG9wPm4sdT13aW5kb3cucGFnZVlPZmZzZXQrbC50b3ArKHM/LW4tMjp0Lm9mZnNldEhlaWdodCsyKTtpZihkKHcuY2FsZW5kYXJDb250YWluZXIsXCJhcnJvd1RvcFwiLCFzKSxkKHcuY2FsZW5kYXJDb250YWluZXIsXCJhcnJvd0JvdHRvbVwiLHMpLCF3LmNvbmZpZy5pbmxpbmUpe3ZhciBmPXdpbmRvdy5wYWdlWE9mZnNldCtsLmxlZnQsbT0hMSxnPSExO1wiY2VudGVyXCI9PT1yPyhmLT0oYS1sLndpZHRoKS8yLG09ITApOlwicmlnaHRcIj09PXImJihmLT1hLWwud2lkdGgsZz0hMCksZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwiYXJyb3dMZWZ0XCIsIW0mJiFnKSxkKHcuY2FsZW5kYXJDb250YWluZXIsXCJhcnJvd0NlbnRlclwiLG0pLGQody5jYWxlbmRhckNvbnRhaW5lcixcImFycm93UmlnaHRcIixnKTt2YXIgcD13aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0od2luZG93LnBhZ2VYT2Zmc2V0K2wucmlnaHQpLGg9ZithPndpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLHY9cCthPndpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO2lmKGQody5jYWxlbmRhckNvbnRhaW5lcixcInJpZ2h0TW9zdFwiLGgpLCF3LmNvbmZpZy5zdGF0aWMpaWYody5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS50b3A9dStcInB4XCIsaClpZih2KXt2YXIgRD1mdW5jdGlvbigpe2Zvcih2YXIgZT1udWxsLHQ9MDt0PGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDt0Kyspe3ZhciBuPWRvY3VtZW50LnN0eWxlU2hlZXRzW3RdO3RyeXtuLmNzc1J1bGVzfWNhdGNoKGUpe2NvbnRpbnVlfWU9bjticmVha31yZXR1cm4gbnVsbCE9ZT9lOihhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGEpLGEuc2hlZXQpO3ZhciBhfSgpO2lmKHZvaWQgMD09PUQpcmV0dXJuO3ZhciBiPXdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLEM9TWF0aC5tYXgoMCxiLzItYS8yKSxNPUQuY3NzUnVsZXMubGVuZ3RoLHk9XCJ7bGVmdDpcIitsLmxlZnQrXCJweDtyaWdodDphdXRvO31cIjtkKHcuY2FsZW5kYXJDb250YWluZXIsXCJyaWdodE1vc3RcIiwhMSksZCh3LmNhbGVuZGFyQ29udGFpbmVyLFwiY2VudGVyTW9zdFwiLCEwKSxELmluc2VydFJ1bGUoXCIuZmxhdHBpY2tyLWNhbGVuZGFyLmNlbnRlck1vc3Q6YmVmb3JlLC5mbGF0cGlja3ItY2FsZW5kYXIuY2VudGVyTW9zdDphZnRlclwiK3ksTSksdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0PUMrXCJweFwiLHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQ9XCJhdXRvXCJ9ZWxzZSB3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQ9XCJhdXRvXCIsdy5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodD1wK1wicHhcIjtlbHNlIHcuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdD1mK1wicHhcIix3LmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0PVwiYXV0b1wifX19ZWxzZSB3LmNvbmZpZy5wb3NpdGlvbih3LGUpfWZ1bmN0aW9uIGRlKCl7dy5jb25maWcubm9DYWxlbmRhcnx8dy5pc01vYmlsZXx8KEsoKSxEZSgpLEooKSl9ZnVuY3Rpb24gc2UoKXt3Ll9pbnB1dC5mb2N1cygpLC0xIT09d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIil8fHZvaWQgMCE9PW5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzP3NldFRpbWVvdXQody5jbG9zZSwwKTp3LmNsb3NlKCl9ZnVuY3Rpb24gdWUoZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZihnKGUpLChmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc0xpc3QmJmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRheVwiKSYmIWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxhdHBpY2tyLWRpc2FibGVkXCIpJiYhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJub3RBbGxvd2VkXCIpfSkpO2lmKHZvaWQgMCE9PXQpe3ZhciBuPXQsYT13LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj1uZXcgRGF0ZShuLmRhdGVPYmouZ2V0VGltZSgpKSxpPShhLmdldE1vbnRoKCk8dy5jdXJyZW50TW9udGh8fGEuZ2V0TW9udGgoKT53LmN1cnJlbnRNb250aCt3LmNvbmZpZy5zaG93TW9udGhzLTEpJiZcInJhbmdlXCIhPT13LmNvbmZpZy5tb2RlO2lmKHcuc2VsZWN0ZWREYXRlRWxlbT1uLFwic2luZ2xlXCI9PT13LmNvbmZpZy5tb2RlKXcuc2VsZWN0ZWREYXRlcz1bYV07ZWxzZSBpZihcIm11bHRpcGxlXCI9PT13LmNvbmZpZy5tb2RlKXt2YXIgbz12ZShhKTtvP3cuc2VsZWN0ZWREYXRlcy5zcGxpY2UocGFyc2VJbnQobyksMSk6dy5zZWxlY3RlZERhdGVzLnB1c2goYSl9ZWxzZVwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUmJigyPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmdy5jbGVhcighMSwhMSksdy5sYXRlc3RTZWxlY3RlZERhdGVPYmo9YSx3LnNlbGVjdGVkRGF0ZXMucHVzaChhKSwwIT09TShhLHcuc2VsZWN0ZWREYXRlc1swXSwhMCkmJncuc2VsZWN0ZWREYXRlcy5zb3J0KChmdW5jdGlvbihlLHQpe3JldHVybiBlLmdldFRpbWUoKS10LmdldFRpbWUoKX0pKSk7aWYoUygpLGkpe3ZhciByPXcuY3VycmVudFllYXIhPT1hLmdldEZ1bGxZZWFyKCk7dy5jdXJyZW50WWVhcj1hLmdldEZ1bGxZZWFyKCksdy5jdXJyZW50TW9udGg9YS5nZXRNb250aCgpLHImJihwZShcIm9uWWVhckNoYW5nZVwiKSxLKCkpLHBlKFwib25Nb250aENoYW5nZVwiKX1pZihEZSgpLEooKSxiZSgpLGl8fFwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGV8fDEhPT13LmNvbmZpZy5zaG93TW9udGhzP3ZvaWQgMCE9PXcuc2VsZWN0ZWREYXRlRWxlbSYmdm9pZCAwPT09dy5ob3VyRWxlbWVudCYmdy5zZWxlY3RlZERhdGVFbGVtJiZ3LnNlbGVjdGVkRGF0ZUVsZW0uZm9jdXMoKTpMKG4pLHZvaWQgMCE9PXcuaG91ckVsZW1lbnQmJnZvaWQgMCE9PXcuaG91ckVsZW1lbnQmJncuaG91ckVsZW1lbnQuZm9jdXMoKSx3LmNvbmZpZy5jbG9zZU9uU2VsZWN0KXt2YXIgbD1cInNpbmdsZVwiPT09dy5jb25maWcubW9kZSYmIXcuY29uZmlnLmVuYWJsZVRpbWUsYz1cInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiYyPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmIXcuY29uZmlnLmVuYWJsZVRpbWU7KGx8fGMpJiZzZSgpfU4oKX19dy5wYXJzZURhdGU9Qyh7Y29uZmlnOncuY29uZmlnLGwxMG46dy5sMTBufSksdy5faGFuZGxlcnM9W10sdy5wbHVnaW5FbGVtZW50cz1bXSx3LmxvYWRlZFBsdWdpbnM9W10sdy5fYmluZD1BLHcuX3NldEhvdXJzRnJvbURhdGU9Xyx3Ll9wb3NpdGlvbkNhbGVuZGFyPWNlLHcuY2hhbmdlTW9udGg9Ryx3LmNoYW5nZVllYXI9USx3LmNsZWFyPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09ZSYmKGU9ITApO3ZvaWQgMD09PXQmJih0PSEwKTt3LmlucHV0LnZhbHVlPVwiXCIsdm9pZCAwIT09dy5hbHRJbnB1dCYmKHcuYWx0SW5wdXQudmFsdWU9XCJcIik7dm9pZCAwIT09dy5tb2JpbGVJbnB1dCYmKHcubW9iaWxlSW5wdXQudmFsdWU9XCJcIik7dy5zZWxlY3RlZERhdGVzPVtdLHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqPXZvaWQgMCwhMD09PXQmJih3LmN1cnJlbnRZZWFyPXcuX2luaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCksdy5jdXJyZW50TW9udGg9dy5faW5pdGlhbERhdGUuZ2V0TW9udGgoKSk7aWYoITA9PT13LmNvbmZpZy5lbmFibGVUaW1lKXt2YXIgbj14KHcuY29uZmlnKSxhPW4uaG91cnMsaT1uLm1pbnV0ZXMsbz1uLnNlY29uZHM7TyhhLGksbyl9dy5yZWRyYXcoKSxlJiZwZShcIm9uQ2hhbmdlXCIpfSx3LmNsb3NlPWZ1bmN0aW9uKCl7dy5pc09wZW49ITEsdy5pc01vYmlsZXx8KHZvaWQgMCE9PXcuY2FsZW5kYXJDb250YWluZXImJncuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIiksdm9pZCAwIT09dy5faW5wdXQmJncuX2lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO3BlKFwib25DbG9zZVwiKX0sdy5fY3JlYXRlRWxlbWVudD1zLHcuZGVzdHJveT1mdW5jdGlvbigpe3ZvaWQgMCE9PXcuY29uZmlnJiZwZShcIm9uRGVzdHJveVwiKTtmb3IodmFyIGU9dy5faGFuZGxlcnMubGVuZ3RoO2UtLTspdy5faGFuZGxlcnNbZV0ucmVtb3ZlKCk7aWYody5faGFuZGxlcnM9W10sdy5tb2JpbGVJbnB1dCl3Lm1vYmlsZUlucHV0LnBhcmVudE5vZGUmJncubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3Lm1vYmlsZUlucHV0KSx3Lm1vYmlsZUlucHV0PXZvaWQgMDtlbHNlIGlmKHcuY2FsZW5kYXJDb250YWluZXImJncuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSlpZih3LmNvbmZpZy5zdGF0aWMmJncuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSl7dmFyIHQ9dy5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlO2lmKHQubGFzdENoaWxkJiZ0LnJlbW92ZUNoaWxkKHQubGFzdENoaWxkKSx0LnBhcmVudE5vZGUpe2Zvcig7dC5maXJzdENoaWxkOyl0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQuZmlyc3RDaGlsZCx0KTt0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9fWVsc2Ugdy5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHcuY2FsZW5kYXJDb250YWluZXIpO3cuYWx0SW5wdXQmJih3LmlucHV0LnR5cGU9XCJ0ZXh0XCIsdy5hbHRJbnB1dC5wYXJlbnROb2RlJiZ3LmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQody5hbHRJbnB1dCksZGVsZXRlIHcuYWx0SW5wdXQpO3cuaW5wdXQmJih3LmlucHV0LnR5cGU9dy5pbnB1dC5fdHlwZSx3LmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGF0cGlja3ItaW5wdXRcIiksdy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKSk7W1wiX3Nob3dUaW1lSW5wdXRcIixcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcIl9faGlkZVByZXZNb250aEFycm93XCIsXCJpc01vYmlsZVwiLFwiaXNPcGVuXCIsXCJzZWxlY3RlZERhdGVFbGVtXCIsXCJtaW5EYXRlSGFzVGltZVwiLFwibWF4RGF0ZUhhc1RpbWVcIixcImRheXNcIixcImRheXNDb250YWluZXJcIixcIl9pbnB1dFwiLFwiX3Bvc2l0aW9uRWxlbWVudFwiLFwiaW5uZXJDb250YWluZXJcIixcInJDb250YWluZXJcIixcIm1vbnRoTmF2XCIsXCJ0b2RheURhdGVFbGVtXCIsXCJjYWxlbmRhckNvbnRhaW5lclwiLFwid2Vla2RheUNvbnRhaW5lclwiLFwicHJldk1vbnRoTmF2XCIsXCJuZXh0TW9udGhOYXZcIixcIm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyXCIsXCJjdXJyZW50TW9udGhFbGVtZW50XCIsXCJjdXJyZW50WWVhckVsZW1lbnRcIixcIm5hdmlnYXRpb25DdXJyZW50TW9udGhcIixcInNlbGVjdGVkRGF0ZUVsZW1cIixcImNvbmZpZ1wiXS5mb3JFYWNoKChmdW5jdGlvbihlKXt0cnl7ZGVsZXRlIHdbZV19Y2F0Y2goZSl7fX0pKX0sdy5pc0VuYWJsZWQ9WCx3Lmp1bXBUb0RhdGU9UCx3Lm9wZW49ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD13Ll9wb3NpdGlvbkVsZW1lbnQpO2lmKCEwPT09dy5pc01vYmlsZSl7aWYoZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBuPWcoZSk7biYmbi5ibHVyKCl9cmV0dXJuIHZvaWQgMCE9PXcubW9iaWxlSW5wdXQmJih3Lm1vYmlsZUlucHV0LmZvY3VzKCksdy5tb2JpbGVJbnB1dC5jbGljaygpKSx2b2lkIHBlKFwib25PcGVuXCIpfWlmKHcuX2lucHV0LmRpc2FibGVkfHx3LmNvbmZpZy5pbmxpbmUpcmV0dXJuO3ZhciBhPXcuaXNPcGVuO3cuaXNPcGVuPSEwLGF8fCh3LmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpLHcuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIikscGUoXCJvbk9wZW5cIiksY2UodCkpOyEwPT09dy5jb25maWcuZW5hYmxlVGltZSYmITA9PT13LmNvbmZpZy5ub0NhbGVuZGFyJiYoITEhPT13LmNvbmZpZy5hbGxvd0lucHV0fHx2b2lkIDAhPT1lJiZ3LnRpbWVDb250YWluZXIuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KXx8c2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gdy5ob3VyRWxlbWVudC5zZWxlY3QoKX0pLDUwKSl9LHcucmVkcmF3PWRlLHcuc2V0PWZ1bmN0aW9uKGUsdCl7aWYobnVsbCE9PWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlKWZvcih2YXIgYSBpbiBPYmplY3QuYXNzaWduKHcuY29uZmlnLGUpLGUpdm9pZCAwIT09ZmVbYV0mJmZlW2FdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KSk7ZWxzZSB3LmNvbmZpZ1tlXT10LHZvaWQgMCE9PWZlW2VdP2ZlW2VdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlKCl9KSk6bi5pbmRleE9mKGUpPi0xJiYody5jb25maWdbZV09Yyh0KSk7dy5yZWRyYXcoKSxiZSghMCl9LHcuc2V0RGF0ZT1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09dCYmKHQ9ITEpO3ZvaWQgMD09PW4mJihuPXcuY29uZmlnLmRhdGVGb3JtYXQpO2lmKDAhPT1lJiYhZXx8ZSBpbnN0YW5jZW9mIEFycmF5JiYwPT09ZS5sZW5ndGgpcmV0dXJuIHcuY2xlYXIodCk7bWUoZSxuKSx3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj13LnNlbGVjdGVkRGF0ZXNbdy5zZWxlY3RlZERhdGVzLmxlbmd0aC0xXSx3LnJlZHJhdygpLFAodm9pZCAwLHQpLF8oKSwwPT09dy5zZWxlY3RlZERhdGVzLmxlbmd0aCYmdy5jbGVhcighMSk7YmUodCksdCYmcGUoXCJvbkNoYW5nZVwiKX0sdy50b2dnbGU9ZnVuY3Rpb24oZSl7aWYoITA9PT13LmlzT3BlbilyZXR1cm4gdy5jbG9zZSgpO3cub3BlbihlKX07dmFyIGZlPXtsb2NhbGU6W2xlLHpdLHNob3dNb250aHM6W3EsaywkXSxtaW5EYXRlOltQXSxtYXhEYXRlOltQXSxjbGlja09wZW5zOltmdW5jdGlvbigpeyEwPT09dy5jb25maWcuY2xpY2tPcGVucz8oQSh3Ll9pbnB1dCxcImZvY3VzXCIsdy5vcGVuKSxBKHcuX2lucHV0LFwiY2xpY2tcIix3Lm9wZW4pKToody5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdy5vcGVuKSx3Ll9pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix3Lm9wZW4pKX1dfTtmdW5jdGlvbiBtZShlLHQpe3ZhciBuPVtdO2lmKGUgaW5zdGFuY2VvZiBBcnJheSluPWUubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gdy5wYXJzZURhdGUoZSx0KX0pKTtlbHNlIGlmKGUgaW5zdGFuY2VvZiBEYXRlfHxcIm51bWJlclwiPT10eXBlb2YgZSluPVt3LnBhcnNlRGF0ZShlLHQpXTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXN3aXRjaCh3LmNvbmZpZy5tb2RlKXtjYXNlXCJzaW5nbGVcIjpjYXNlXCJ0aW1lXCI6bj1bdy5wYXJzZURhdGUoZSx0KV07YnJlYWs7Y2FzZVwibXVsdGlwbGVcIjpuPWUuc3BsaXQody5jb25maWcuY29uanVuY3Rpb24pLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHcucGFyc2VEYXRlKGUsdCl9KSk7YnJlYWs7Y2FzZVwicmFuZ2VcIjpuPWUuc3BsaXQody5sMTBuLnJhbmdlU2VwYXJhdG9yKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiB3LnBhcnNlRGF0ZShlLHQpfSkpfWVsc2Ugdy5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIrSlNPTi5zdHJpbmdpZnkoZSkpKTt3LnNlbGVjdGVkRGF0ZXM9dy5jb25maWcuYWxsb3dJbnZhbGlkUHJlbG9hZD9uOm4uZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGUmJlgoZSwhMSl9KSksXCJyYW5nZVwiPT09dy5jb25maWcubW9kZSYmdy5zZWxlY3RlZERhdGVzLnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZ2V0VGltZSgpLXQuZ2V0VGltZSgpfSkpfWZ1bmN0aW9uIGdlKGUpe3JldHVybiBlLnNsaWNlKCkubWFwKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGV8fGUgaW5zdGFuY2VvZiBEYXRlP3cucGFyc2VEYXRlKGUsdm9pZCAwLCEwKTplJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZS5mcm9tJiZlLnRvP3tmcm9tOncucGFyc2VEYXRlKGUuZnJvbSx2b2lkIDApLHRvOncucGFyc2VEYXRlKGUudG8sdm9pZCAwKX06ZX0pKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlfSkpfWZ1bmN0aW9uIHBlKGUsdCl7aWYodm9pZCAwIT09dy5jb25maWcpe3ZhciBuPXcuY29uZmlnW2VdO2lmKHZvaWQgMCE9PW4mJm4ubGVuZ3RoPjApZm9yKHZhciBhPTA7blthXSYmYTxuLmxlbmd0aDthKyspblthXSh3LnNlbGVjdGVkRGF0ZXMsdy5pbnB1dC52YWx1ZSx3LHQpO1wib25DaGFuZ2VcIj09PWUmJih3LmlucHV0LmRpc3BhdGNoRXZlbnQoaGUoXCJjaGFuZ2VcIikpLHcuaW5wdXQuZGlzcGF0Y2hFdmVudChoZShcImlucHV0XCIpKSl9fWZ1bmN0aW9uIGhlKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cmV0dXJuIHQuaW5pdEV2ZW50KGUsITAsITApLHR9ZnVuY3Rpb24gdmUoZSl7Zm9yKHZhciB0PTA7dDx3LnNlbGVjdGVkRGF0ZXMubGVuZ3RoO3QrKylpZigwPT09TSh3LnNlbGVjdGVkRGF0ZXNbdF0sZSkpcmV0dXJuXCJcIit0O3JldHVybiExfWZ1bmN0aW9uIERlKCl7dy5jb25maWcubm9DYWxlbmRhcnx8dy5pc01vYmlsZXx8IXcubW9udGhOYXZ8fCh3LnllYXJFbGVtZW50cy5mb3JFYWNoKChmdW5jdGlvbihlLHQpe3ZhciBuPW5ldyBEYXRlKHcuY3VycmVudFllYXIsdy5jdXJyZW50TW9udGgsMSk7bi5zZXRNb250aCh3LmN1cnJlbnRNb250aCt0KSx3LmNvbmZpZy5zaG93TW9udGhzPjF8fFwic3RhdGljXCI9PT13LmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZT93Lm1vbnRoRWxlbWVudHNbdF0udGV4dENvbnRlbnQ9aChuLmdldE1vbnRoKCksdy5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLHcubDEwbikrXCIgXCI6dy5tb250aHNEcm9wZG93bkNvbnRhaW5lci52YWx1ZT1uLmdldE1vbnRoKCkudG9TdHJpbmcoKSxlLnZhbHVlPW4uZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfSkpLHcuX2hpZGVQcmV2TW9udGhBcnJvdz12b2lkIDAhPT13LmNvbmZpZy5taW5EYXRlJiYody5jdXJyZW50WWVhcj09PXcuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKT93LmN1cnJlbnRNb250aDw9dy5jb25maWcubWluRGF0ZS5nZXRNb250aCgpOncuY3VycmVudFllYXI8dy5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKSx3Ll9oaWRlTmV4dE1vbnRoQXJyb3c9dm9pZCAwIT09dy5jb25maWcubWF4RGF0ZSYmKHcuY3VycmVudFllYXI9PT13LmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk/dy5jdXJyZW50TW9udGgrMT53LmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCk6dy5jdXJyZW50WWVhcj53LmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpKX1mdW5jdGlvbiB3ZShlKXtyZXR1cm4gdy5zZWxlY3RlZERhdGVzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHcuZm9ybWF0RGF0ZSh0LGUpfSkpLmZpbHRlcigoZnVuY3Rpb24oZSx0LG4pe3JldHVyblwicmFuZ2VcIiE9PXcuY29uZmlnLm1vZGV8fHcuY29uZmlnLmVuYWJsZVRpbWV8fG4uaW5kZXhPZihlKT09PXR9KSkuam9pbihcInJhbmdlXCIhPT13LmNvbmZpZy5tb2RlP3cuY29uZmlnLmNvbmp1bmN0aW9uOncubDEwbi5yYW5nZVNlcGFyYXRvcil9ZnVuY3Rpb24gYmUoZSl7dm9pZCAwPT09ZSYmKGU9ITApLHZvaWQgMCE9PXcubW9iaWxlSW5wdXQmJncubW9iaWxlRm9ybWF0U3RyJiYody5tb2JpbGVJbnB1dC52YWx1ZT12b2lkIDAhPT13LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj93LmZvcm1hdERhdGUody5sYXRlc3RTZWxlY3RlZERhdGVPYmosdy5tb2JpbGVGb3JtYXRTdHIpOlwiXCIpLHcuaW5wdXQudmFsdWU9d2Uody5jb25maWcuZGF0ZUZvcm1hdCksdm9pZCAwIT09dy5hbHRJbnB1dCYmKHcuYWx0SW5wdXQudmFsdWU9d2Uody5jb25maWcuYWx0Rm9ybWF0KSksITEhPT1lJiZwZShcIm9uVmFsdWVVcGRhdGVcIil9ZnVuY3Rpb24gQ2UoZSl7dmFyIHQ9ZyhlKSxuPXcucHJldk1vbnRoTmF2LmNvbnRhaW5zKHQpLGE9dy5uZXh0TW9udGhOYXYuY29udGFpbnModCk7bnx8YT9HKG4/LTE6MSk6dy55ZWFyRWxlbWVudHMuaW5kZXhPZih0KT49MD90LnNlbGVjdCgpOnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKT93LmNoYW5nZVllYXIody5jdXJyZW50WWVhcisxKTp0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93RG93blwiKSYmdy5jaGFuZ2VZZWFyKHcuY3VycmVudFllYXItMSl9cmV0dXJuIGZ1bmN0aW9uKCl7dy5lbGVtZW50PXcuaW5wdXQ9cCx3LmlzT3Blbj0hMSxmdW5jdGlvbigpe3ZhciB0PVtcIndyYXBcIixcIndlZWtOdW1iZXJzXCIsXCJhbGxvd0lucHV0XCIsXCJhbGxvd0ludmFsaWRQcmVsb2FkXCIsXCJjbGlja09wZW5zXCIsXCJ0aW1lXzI0aHJcIixcImVuYWJsZVRpbWVcIixcIm5vQ2FsZW5kYXJcIixcImFsdElucHV0XCIsXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIixcImlubGluZVwiLFwic3RhdGljXCIsXCJlbmFibGVTZWNvbmRzXCIsXCJkaXNhYmxlTW9iaWxlXCJdLGk9ZShlKHt9LEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocC5kYXRhc2V0fHx7fSkpKSx2KSxvPXt9O3cuY29uZmlnLnBhcnNlRGF0ZT1pLnBhcnNlRGF0ZSx3LmNvbmZpZy5mb3JtYXREYXRlPWkuZm9ybWF0RGF0ZSxPYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJlbmFibGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY29uZmlnLl9lbmFibGV9LHNldDpmdW5jdGlvbihlKXt3LmNvbmZpZy5fZW5hYmxlPWdlKGUpfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LmNvbmZpZyxcImRpc2FibGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY29uZmlnLl9kaXNhYmxlfSxzZXQ6ZnVuY3Rpb24oZSl7dy5jb25maWcuX2Rpc2FibGU9Z2UoZSl9fSk7dmFyIHI9XCJ0aW1lXCI9PT1pLm1vZGU7aWYoIWkuZGF0ZUZvcm1hdCYmKGkuZW5hYmxlVGltZXx8cikpe3ZhciBsPVQuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0fHxhLmRhdGVGb3JtYXQ7by5kYXRlRm9ybWF0PWkubm9DYWxlbmRhcnx8cj9cIkg6aVwiKyhpLmVuYWJsZVNlY29uZHM/XCI6U1wiOlwiXCIpOmwrXCIgSDppXCIrKGkuZW5hYmxlU2Vjb25kcz9cIjpTXCI6XCJcIil9aWYoaS5hbHRJbnB1dCYmKGkuZW5hYmxlVGltZXx8cikmJiFpLmFsdEZvcm1hdCl7dmFyIGQ9VC5kZWZhdWx0Q29uZmlnLmFsdEZvcm1hdHx8YS5hbHRGb3JtYXQ7by5hbHRGb3JtYXQ9aS5ub0NhbGVuZGFyfHxyP1wiaDppXCIrKGkuZW5hYmxlU2Vjb25kcz9cIjpTIEtcIjpcIiBLXCIpOmQrXCIgaDppXCIrKGkuZW5hYmxlU2Vjb25kcz9cIjpTXCI6XCJcIikrXCIgS1wifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LmNvbmZpZyxcIm1pbkRhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY29uZmlnLl9taW5EYXRlfSxzZXQ6b2UoXCJtaW5cIil9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkody5jb25maWcsXCJtYXhEYXRlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB3LmNvbmZpZy5fbWF4RGF0ZX0sc2V0Om9lKFwibWF4XCIpfSk7dmFyIHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3cuY29uZmlnW1wibWluXCI9PT1lP1wiX21pblRpbWVcIjpcIl9tYXhUaW1lXCJdPXcucGFyc2VEYXRlKHQsXCJIOmk6U1wiKX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LmNvbmZpZyxcIm1pblRpbWVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY29uZmlnLl9taW5UaW1lfSxzZXQ6cyhcIm1pblwiKX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LmNvbmZpZyxcIm1heFRpbWVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuY29uZmlnLl9tYXhUaW1lfSxzZXQ6cyhcIm1heFwiKX0pLFwidGltZVwiPT09aS5tb2RlJiYody5jb25maWcubm9DYWxlbmRhcj0hMCx3LmNvbmZpZy5lbmFibGVUaW1lPSEwKTtPYmplY3QuYXNzaWduKHcuY29uZmlnLG8saSk7Zm9yKHZhciB1PTA7dTx0Lmxlbmd0aDt1Kyspdy5jb25maWdbdFt1XV09ITA9PT13LmNvbmZpZ1t0W3VdXXx8XCJ0cnVlXCI9PT13LmNvbmZpZ1t0W3VdXTtuLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PXcuY29uZmlnW2VdfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3cuY29uZmlnW2VdPWMody5jb25maWdbZV18fFtdKS5tYXAoRSl9KSksdy5pc01vYmlsZT0hdy5jb25maWcuZGlzYWJsZU1vYmlsZSYmIXcuY29uZmlnLmlubGluZSYmXCJzaW5nbGVcIj09PXcuY29uZmlnLm1vZGUmJiF3LmNvbmZpZy5kaXNhYmxlLmxlbmd0aCYmIXcuY29uZmlnLmVuYWJsZSYmIXcuY29uZmlnLndlZWtOdW1iZXJzJiYvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7Zm9yKHU9MDt1PHcuY29uZmlnLnBsdWdpbnMubGVuZ3RoO3UrKyl7dmFyIGY9dy5jb25maWcucGx1Z2luc1t1XSh3KXx8e307Zm9yKHZhciBtIGluIGYpbi5pbmRleE9mKG0pPi0xP3cuY29uZmlnW21dPWMoZlttXSkubWFwKEUpLmNvbmNhdCh3LmNvbmZpZ1ttXSk6dm9pZCAwPT09aVttXSYmKHcuY29uZmlnW21dPWZbbV0pfWkuYWx0SW5wdXRDbGFzc3x8KHcuY29uZmlnLmFsdElucHV0Q2xhc3M9cmUoKS5jbGFzc05hbWUrXCIgXCIrdy5jb25maWcuYWx0SW5wdXRDbGFzcyk7cGUoXCJvblBhcnNlQ29uZmlnXCIpfSgpLGxlKCksZnVuY3Rpb24oKXtpZih3LmlucHV0PXJlKCksIXcuaW5wdXQpcmV0dXJuIHZvaWQgdy5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgZWxlbWVudCBzcGVjaWZpZWRcIikpO3cuaW5wdXQuX3R5cGU9dy5pbnB1dC50eXBlLHcuaW5wdXQudHlwZT1cInRleHRcIix3LmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIiksdy5faW5wdXQ9dy5pbnB1dCx3LmNvbmZpZy5hbHRJbnB1dCYmKHcuYWx0SW5wdXQ9cyh3LmlucHV0Lm5vZGVOYW1lLHcuY29uZmlnLmFsdElucHV0Q2xhc3MpLHcuX2lucHV0PXcuYWx0SW5wdXQsdy5hbHRJbnB1dC5wbGFjZWhvbGRlcj13LmlucHV0LnBsYWNlaG9sZGVyLHcuYWx0SW5wdXQuZGlzYWJsZWQ9dy5pbnB1dC5kaXNhYmxlZCx3LmFsdElucHV0LnJlcXVpcmVkPXcuaW5wdXQucmVxdWlyZWQsdy5hbHRJbnB1dC50YWJJbmRleD13LmlucHV0LnRhYkluZGV4LHcuYWx0SW5wdXQudHlwZT1cInRleHRcIix3LmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSwhdy5jb25maWcuc3RhdGljJiZ3LmlucHV0LnBhcmVudE5vZGUmJncuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUody5hbHRJbnB1dCx3LmlucHV0Lm5leHRTaWJsaW5nKSk7dy5jb25maWcuYWxsb3dJbnB1dHx8dy5faW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIixcInJlYWRvbmx5XCIpO3cuX3Bvc2l0aW9uRWxlbWVudD13LmNvbmZpZy5wb3NpdGlvbkVsZW1lbnR8fHcuX2lucHV0fSgpLGZ1bmN0aW9uKCl7dy5zZWxlY3RlZERhdGVzPVtdLHcubm93PXcucGFyc2VEYXRlKHcuY29uZmlnLm5vdyl8fG5ldyBEYXRlO3ZhciBlPXcuY29uZmlnLmRlZmF1bHREYXRlfHwoXCJJTlBVVFwiIT09dy5pbnB1dC5ub2RlTmFtZSYmXCJURVhUQVJFQVwiIT09dy5pbnB1dC5ub2RlTmFtZXx8IXcuaW5wdXQucGxhY2Vob2xkZXJ8fHcuaW5wdXQudmFsdWUhPT13LmlucHV0LnBsYWNlaG9sZGVyP3cuaW5wdXQudmFsdWU6bnVsbCk7ZSYmbWUoZSx3LmNvbmZpZy5kYXRlRm9ybWF0KTt3Ll9pbml0aWFsRGF0ZT13LnNlbGVjdGVkRGF0ZXMubGVuZ3RoPjA/dy5zZWxlY3RlZERhdGVzWzBdOncuY29uZmlnLm1pbkRhdGUmJncuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpPncubm93LmdldFRpbWUoKT93LmNvbmZpZy5taW5EYXRlOncuY29uZmlnLm1heERhdGUmJncuY29uZmlnLm1heERhdGUuZ2V0VGltZSgpPHcubm93LmdldFRpbWUoKT93LmNvbmZpZy5tYXhEYXRlOncubm93LHcuY3VycmVudFllYXI9dy5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKSx3LmN1cnJlbnRNb250aD13Ll9pbml0aWFsRGF0ZS5nZXRNb250aCgpLHcuc2VsZWN0ZWREYXRlcy5sZW5ndGg+MCYmKHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqPXcuc2VsZWN0ZWREYXRlc1swXSk7dm9pZCAwIT09dy5jb25maWcubWluVGltZSYmKHcuY29uZmlnLm1pblRpbWU9dy5wYXJzZURhdGUody5jb25maWcubWluVGltZSxcIkg6aVwiKSk7dm9pZCAwIT09dy5jb25maWcubWF4VGltZSYmKHcuY29uZmlnLm1heFRpbWU9dy5wYXJzZURhdGUody5jb25maWcubWF4VGltZSxcIkg6aVwiKSk7dy5taW5EYXRlSGFzVGltZT0hIXcuY29uZmlnLm1pbkRhdGUmJih3LmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCk+MHx8dy5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCk+MHx8dy5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCk+MCksdy5tYXhEYXRlSGFzVGltZT0hIXcuY29uZmlnLm1heERhdGUmJih3LmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCk+MHx8dy5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCk+MHx8dy5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCk+MCl9KCksdy51dGlscz17Z2V0RGF5c0luTW9udGg6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dy5jdXJyZW50TW9udGgpLHZvaWQgMD09PXQmJih0PXcuY3VycmVudFllYXIpLDE9PT1lJiYodCU0PT0wJiZ0JTEwMCE9MHx8dCU0MDA9PTApPzI5OncubDEwbi5kYXlzSW5Nb250aFtlXX19LHcuaXNNb2JpbGV8fGZ1bmN0aW9uKCl7dmFyIGU9d2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZih3LmNhbGVuZGFyQ29udGFpbmVyPXMoXCJkaXZcIixcImZsYXRwaWNrci1jYWxlbmRhclwiKSx3LmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4PS0xLCF3LmNvbmZpZy5ub0NhbGVuZGFyKXtpZihlLmFwcGVuZENoaWxkKCh3Lm1vbnRoTmF2PXMoXCJkaXZcIixcImZsYXRwaWNrci1tb250aHNcIiksdy55ZWFyRWxlbWVudHM9W10sdy5tb250aEVsZW1lbnRzPVtdLHcucHJldk1vbnRoTmF2PXMoXCJzcGFuXCIsXCJmbGF0cGlja3ItcHJldi1tb250aFwiKSx3LnByZXZNb250aE5hdi5pbm5lckhUTUw9dy5jb25maWcucHJldkFycm93LHcubmV4dE1vbnRoTmF2PXMoXCJzcGFuXCIsXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKSx3Lm5leHRNb250aE5hdi5pbm5lckhUTUw9dy5jb25maWcubmV4dEFycm93LHEoKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodyxcIl9oaWRlUHJldk1vbnRoQXJyb3dcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuX19oaWRlUHJldk1vbnRoQXJyb3d9LHNldDpmdW5jdGlvbihlKXt3Ll9faGlkZVByZXZNb250aEFycm93IT09ZSYmKGQody5wcmV2TW9udGhOYXYsXCJmbGF0cGlja3ItZGlzYWJsZWRcIixlKSx3Ll9faGlkZVByZXZNb250aEFycm93PWUpfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3LFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdy5fX2hpZGVOZXh0TW9udGhBcnJvd30sc2V0OmZ1bmN0aW9uKGUpe3cuX19oaWRlTmV4dE1vbnRoQXJyb3chPT1lJiYoZCh3Lm5leHRNb250aE5hdixcImZsYXRwaWNrci1kaXNhYmxlZFwiLGUpLHcuX19oaWRlTmV4dE1vbnRoQXJyb3c9ZSl9fSksdy5jdXJyZW50WWVhckVsZW1lbnQ9dy55ZWFyRWxlbWVudHNbMF0sRGUoKSx3Lm1vbnRoTmF2KSksdy5pbm5lckNvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIiksdy5jb25maWcud2Vla051bWJlcnMpe3ZhciB0PWZ1bmN0aW9uKCl7dy5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzV2Vla3NcIik7dmFyIGU9cyhcImRpdlwiLFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO2UuYXBwZW5kQ2hpbGQocyhcInNwYW5cIixcImZsYXRwaWNrci13ZWVrZGF5XCIsdy5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTt2YXIgdD1zKFwiZGl2XCIsXCJmbGF0cGlja3Itd2Vla3NcIik7cmV0dXJuIGUuYXBwZW5kQ2hpbGQodCkse3dlZWtXcmFwcGVyOmUsd2Vla051bWJlcnM6dH19KCksbj10LndlZWtXcmFwcGVyLGE9dC53ZWVrTnVtYmVyczt3LmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG4pLHcud2Vla051bWJlcnM9YSx3LndlZWtXcmFwcGVyPW59dy5yQ29udGFpbmVyPXMoXCJkaXZcIixcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpLHcuckNvbnRhaW5lci5hcHBlbmRDaGlsZCgkKCkpLHcuZGF5c0NvbnRhaW5lcnx8KHcuZGF5c0NvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItZGF5c1wiKSx3LmRheXNDb250YWluZXIudGFiSW5kZXg9LTEpLEooKSx3LnJDb250YWluZXIuYXBwZW5kQ2hpbGQody5kYXlzQ29udGFpbmVyKSx3LmlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHcuckNvbnRhaW5lciksZS5hcHBlbmRDaGlsZCh3LmlubmVyQ29udGFpbmVyKX13LmNvbmZpZy5lbmFibGVUaW1lJiZlLmFwcGVuZENoaWxkKGZ1bmN0aW9uKCl7dy5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzVGltZVwiKSx3LmNvbmZpZy5ub0NhbGVuZGFyJiZ3LmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO3ZhciBlPXgody5jb25maWcpO3cudGltZUNvbnRhaW5lcj1zKFwiZGl2XCIsXCJmbGF0cGlja3ItdGltZVwiKSx3LnRpbWVDb250YWluZXIudGFiSW5kZXg9LTE7dmFyIHQ9cyhcInNwYW5cIixcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLFwiOlwiKSxuPW0oXCJmbGF0cGlja3ItaG91clwiLHtcImFyaWEtbGFiZWxcIjp3LmwxMG4uaG91ckFyaWFMYWJlbH0pO3cuaG91ckVsZW1lbnQ9bi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO3ZhciBhPW0oXCJmbGF0cGlja3ItbWludXRlXCIse1wiYXJpYS1sYWJlbFwiOncubDEwbi5taW51dGVBcmlhTGFiZWx9KTt3Lm1pbnV0ZUVsZW1lbnQ9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLHcuaG91ckVsZW1lbnQudGFiSW5kZXg9dy5taW51dGVFbGVtZW50LnRhYkluZGV4PS0xLHcuaG91ckVsZW1lbnQudmFsdWU9byh3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj93LmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpOncuY29uZmlnLnRpbWVfMjRocj9lLmhvdXJzOmZ1bmN0aW9uKGUpe3N3aXRjaChlJTI0KXtjYXNlIDA6Y2FzZSAxMjpyZXR1cm4gMTI7ZGVmYXVsdDpyZXR1cm4gZSUxMn19KGUuaG91cnMpKSx3Lm1pbnV0ZUVsZW1lbnQudmFsdWU9byh3LmxhdGVzdFNlbGVjdGVkRGF0ZU9iaj93LmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKCk6ZS5taW51dGVzKSx3LmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIix3LmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCkpLHcubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsdy5jb25maWcubWludXRlSW5jcmVtZW50LnRvU3RyaW5nKCkpLHcuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsdy5jb25maWcudGltZV8yNGhyP1wiMFwiOlwiMVwiKSx3LmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLHcuY29uZmlnLnRpbWVfMjRocj9cIjIzXCI6XCIxMlwiKSx3LmhvdXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLFwiMlwiKSx3Lm1pbnV0ZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWluXCIsXCIwXCIpLHcubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIixcIjU5XCIpLHcubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIixcIjJcIiksdy50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG4pLHcudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0KSx3LnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYSksdy5jb25maWcudGltZV8yNGhyJiZ3LnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO2lmKHcuY29uZmlnLmVuYWJsZVNlY29uZHMpe3cudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzU2Vjb25kc1wiKTt2YXIgaT1tKFwiZmxhdHBpY2tyLXNlY29uZFwiKTt3LnNlY29uZEVsZW1lbnQ9aS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLHcuc2Vjb25kRWxlbWVudC52YWx1ZT1vKHcubGF0ZXN0U2VsZWN0ZWREYXRlT2JqP3cubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKTplLnNlY29uZHMpLHcuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsdy5taW51dGVFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpLHcuc2Vjb25kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIixcIjBcIiksdy5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLFwiNTlcIiksdy5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLFwiMlwiKSx3LnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocyhcInNwYW5cIixcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLFwiOlwiKSksdy50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGkpfXcuY29uZmlnLnRpbWVfMjRocnx8KHcuYW1QTT1zKFwic3BhblwiLFwiZmxhdHBpY2tyLWFtLXBtXCIsdy5sMTBuLmFtUE1bcigody5sYXRlc3RTZWxlY3RlZERhdGVPYmo/dy5ob3VyRWxlbWVudC52YWx1ZTp3LmNvbmZpZy5kZWZhdWx0SG91cik+MTEpXSksdy5hbVBNLnRpdGxlPXcubDEwbi50b2dnbGVUaXRsZSx3LmFtUE0udGFiSW5kZXg9LTEsdy50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHcuYW1QTSkpO3JldHVybiB3LnRpbWVDb250YWluZXJ9KCkpO2Qody5jYWxlbmRhckNvbnRhaW5lcixcInJhbmdlTW9kZVwiLFwicmFuZ2VcIj09PXcuY29uZmlnLm1vZGUpLGQody5jYWxlbmRhckNvbnRhaW5lcixcImFuaW1hdGVcIiwhMD09PXcuY29uZmlnLmFuaW1hdGUpLGQody5jYWxlbmRhckNvbnRhaW5lcixcIm11bHRpTW9udGhcIix3LmNvbmZpZy5zaG93TW9udGhzPjEpLHcuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7dmFyIGk9dm9pZCAwIT09dy5jb25maWcuYXBwZW5kVG8mJnZvaWQgMCE9PXcuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO2lmKCh3LmNvbmZpZy5pbmxpbmV8fHcuY29uZmlnLnN0YXRpYykmJih3LmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQody5jb25maWcuaW5saW5lP1wiaW5saW5lXCI6XCJzdGF0aWNcIiksdy5jb25maWcuaW5saW5lJiYoIWkmJncuZWxlbWVudC5wYXJlbnROb2RlP3cuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3LmNhbGVuZGFyQ29udGFpbmVyLHcuX2lucHV0Lm5leHRTaWJsaW5nKTp2b2lkIDAhPT13LmNvbmZpZy5hcHBlbmRUbyYmdy5jb25maWcuYXBwZW5kVG8uYXBwZW5kQ2hpbGQody5jYWxlbmRhckNvbnRhaW5lcikpLHcuY29uZmlnLnN0YXRpYykpe3ZhciBsPXMoXCJkaXZcIixcImZsYXRwaWNrci13cmFwcGVyXCIpO3cuZWxlbWVudC5wYXJlbnROb2RlJiZ3LmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobCx3LmVsZW1lbnQpLGwuYXBwZW5kQ2hpbGQody5lbGVtZW50KSx3LmFsdElucHV0JiZsLmFwcGVuZENoaWxkKHcuYWx0SW5wdXQpLGwuYXBwZW5kQ2hpbGQody5jYWxlbmRhckNvbnRhaW5lcil9dy5jb25maWcuc3RhdGljfHx3LmNvbmZpZy5pbmxpbmV8fCh2b2lkIDAhPT13LmNvbmZpZy5hcHBlbmRUbz93LmNvbmZpZy5hcHBlbmRUbzp3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQody5jYWxlbmRhckNvbnRhaW5lcil9KCksZnVuY3Rpb24oKXt3LmNvbmZpZy53cmFwJiZbXCJvcGVuXCIsXCJjbG9zZVwiLFwidG9nZ2xlXCIsXCJjbGVhclwiXS5mb3JFYWNoKChmdW5jdGlvbihlKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHcuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIrZStcIl1cIiksKGZ1bmN0aW9uKHQpe3JldHVybiBBKHQsXCJjbGlja1wiLHdbZV0pfSkpfSkpO2lmKHcuaXNNb2JpbGUpcmV0dXJuIHZvaWQgZnVuY3Rpb24oKXt2YXIgZT13LmNvbmZpZy5lbmFibGVUaW1lP3cuY29uZmlnLm5vQ2FsZW5kYXI/XCJ0aW1lXCI6XCJkYXRldGltZS1sb2NhbFwiOlwiZGF0ZVwiO3cubW9iaWxlSW5wdXQ9cyhcImlucHV0XCIsdy5pbnB1dC5jbGFzc05hbWUrXCIgZmxhdHBpY2tyLW1vYmlsZVwiKSx3Lm1vYmlsZUlucHV0LnRhYkluZGV4PTEsdy5tb2JpbGVJbnB1dC50eXBlPWUsdy5tb2JpbGVJbnB1dC5kaXNhYmxlZD13LmlucHV0LmRpc2FibGVkLHcubW9iaWxlSW5wdXQucmVxdWlyZWQ9dy5pbnB1dC5yZXF1aXJlZCx3Lm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyPXcuaW5wdXQucGxhY2Vob2xkZXIsdy5tb2JpbGVGb3JtYXRTdHI9XCJkYXRldGltZS1sb2NhbFwiPT09ZT9cIlktbS1kXFxcXFRIOmk6U1wiOlwiZGF0ZVwiPT09ZT9cIlktbS1kXCI6XCJIOmk6U1wiLHcuc2VsZWN0ZWREYXRlcy5sZW5ndGg+MCYmKHcubW9iaWxlSW5wdXQuZGVmYXVsdFZhbHVlPXcubW9iaWxlSW5wdXQudmFsdWU9dy5mb3JtYXREYXRlKHcuc2VsZWN0ZWREYXRlc1swXSx3Lm1vYmlsZUZvcm1hdFN0cikpO3cuY29uZmlnLm1pbkRhdGUmJih3Lm1vYmlsZUlucHV0Lm1pbj13LmZvcm1hdERhdGUody5jb25maWcubWluRGF0ZSxcIlktbS1kXCIpKTt3LmNvbmZpZy5tYXhEYXRlJiYody5tb2JpbGVJbnB1dC5tYXg9dy5mb3JtYXREYXRlKHcuY29uZmlnLm1heERhdGUsXCJZLW0tZFwiKSk7dy5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpJiYody5tb2JpbGVJbnB1dC5zdGVwPVN0cmluZyh3LmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpKTt3LmlucHV0LnR5cGU9XCJoaWRkZW5cIix2b2lkIDAhPT13LmFsdElucHV0JiYody5hbHRJbnB1dC50eXBlPVwiaGlkZGVuXCIpO3RyeXt3LmlucHV0LnBhcmVudE5vZGUmJncuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUody5tb2JpbGVJbnB1dCx3LmlucHV0Lm5leHRTaWJsaW5nKX1jYXRjaChlKXt9QSh3Lm1vYmlsZUlucHV0LFwiY2hhbmdlXCIsKGZ1bmN0aW9uKGUpe3cuc2V0RGF0ZShnKGUpLnZhbHVlLCExLHcubW9iaWxlRm9ybWF0U3RyKSxwZShcIm9uQ2hhbmdlXCIpLHBlKFwib25DbG9zZVwiKX0pKX0oKTt2YXIgZT1sKGllLDUwKTt3Ll9kZWJvdW5jZWRDaGFuZ2U9bChOLDMwMCksdy5kYXlzQ29udGFpbmVyJiYhL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiZBKHcuZGF5c0NvbnRhaW5lcixcIm1vdXNlb3ZlclwiLChmdW5jdGlvbihlKXtcInJhbmdlXCI9PT13LmNvbmZpZy5tb2RlJiZhZShnKGUpKX0pKTtBKHdpbmRvdy5kb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLG5lKSx3LmNvbmZpZy5pbmxpbmV8fHcuY29uZmlnLnN0YXRpY3x8QSh3aW5kb3csXCJyZXNpemVcIixlKTt2b2lkIDAhPT13aW5kb3cub250b3VjaHN0YXJ0P0Eod2luZG93LmRvY3VtZW50LFwidG91Y2hzdGFydFwiLFopOkEod2luZG93LmRvY3VtZW50LFwibW91c2Vkb3duXCIsWik7QSh3aW5kb3cuZG9jdW1lbnQsXCJmb2N1c1wiLFose2NhcHR1cmU6ITB9KSwhMD09PXcuY29uZmlnLmNsaWNrT3BlbnMmJihBKHcuX2lucHV0LFwiZm9jdXNcIix3Lm9wZW4pLEEody5faW5wdXQsXCJjbGlja1wiLHcub3BlbikpO3ZvaWQgMCE9PXcuZGF5c0NvbnRhaW5lciYmKEEody5tb250aE5hdixcImNsaWNrXCIsQ2UpLEEody5tb250aE5hdixbXCJrZXl1cFwiLFwiaW5jcmVtZW50XCJdLEYpLEEody5kYXlzQ29udGFpbmVyLFwiY2xpY2tcIix1ZSkpO2lmKHZvaWQgMCE9PXcudGltZUNvbnRhaW5lciYmdm9pZCAwIT09dy5taW51dGVFbGVtZW50JiZ2b2lkIDAhPT13LmhvdXJFbGVtZW50KXt2YXIgdD1mdW5jdGlvbihlKXtyZXR1cm4gZyhlKS5zZWxlY3QoKX07QSh3LnRpbWVDb250YWluZXIsW1wiaW5jcmVtZW50XCJdLEkpLEEody50aW1lQ29udGFpbmVyLFwiYmx1clwiLEkse2NhcHR1cmU6ITB9KSxBKHcudGltZUNvbnRhaW5lcixcImNsaWNrXCIsWSksQShbdy5ob3VyRWxlbWVudCx3Lm1pbnV0ZUVsZW1lbnRdLFtcImZvY3VzXCIsXCJjbGlja1wiXSx0KSx2b2lkIDAhPT13LnNlY29uZEVsZW1lbnQmJkEody5zZWNvbmRFbGVtZW50LFwiZm9jdXNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdy5zZWNvbmRFbGVtZW50JiZ3LnNlY29uZEVsZW1lbnQuc2VsZWN0KCl9KSksdm9pZCAwIT09dy5hbVBNJiZBKHcuYW1QTSxcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe0koZSksTigpfSkpfXcuY29uZmlnLmFsbG93SW5wdXQmJkEody5faW5wdXQsXCJibHVyXCIsdGUpfSgpLCh3LnNlbGVjdGVkRGF0ZXMubGVuZ3RofHx3LmNvbmZpZy5ub0NhbGVuZGFyKSYmKHcuY29uZmlnLmVuYWJsZVRpbWUmJl8ody5jb25maWcubm9DYWxlbmRhcj93LmxhdGVzdFNlbGVjdGVkRGF0ZU9iajp2b2lkIDApLGJlKCExKSksaygpO3ZhciB0PS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IXcuaXNNb2JpbGUmJnQmJmNlKCkscGUoXCJvblJlYWR5XCIpfSgpLHd9ZnVuY3Rpb24gayhlLHQpe2Zvcih2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnR9KSksYT1bXSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBvPW5baV07dHJ5e2lmKG51bGwhPT1vLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtb21pdFwiKSljb250aW51ZTt2b2lkIDAhPT1vLl9mbGF0cGlja3ImJihvLl9mbGF0cGlja3IuZGVzdHJveSgpLG8uX2ZsYXRwaWNrcj12b2lkIDApLG8uX2ZsYXRwaWNrcj1FKG8sdHx8e30pLGEucHVzaChvLl9mbGF0cGlja3IpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IoZSl9fXJldHVybiAxPT09YS5sZW5ndGg/YVswXTphfVwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MRWxlbWVudCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEhUTUxDb2xsZWN0aW9uJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgTm9kZUxpc3QmJihIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyPU5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGsodGhpcyxlKX0sSFRNTEVsZW1lbnQucHJvdG90eXBlLmZsYXRwaWNrcj1mdW5jdGlvbihlKXtyZXR1cm4gayhbdGhpc10sZSl9KTt2YXIgVD1mdW5jdGlvbihlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2sod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSksdCk6ZSBpbnN0YW5jZW9mIE5vZGU/ayhbZV0sdCk6ayhlLHQpfTtyZXR1cm4gVC5kZWZhdWx0Q29uZmlnPXt9LFQubDEwbnM9e2VuOmUoe30saSksZGVmYXVsdDplKHt9LGkpfSxULmxvY2FsaXplPWZ1bmN0aW9uKHQpe1QubDEwbnMuZGVmYXVsdD1lKGUoe30sVC5sMTBucy5kZWZhdWx0KSx0KX0sVC5zZXREZWZhdWx0cz1mdW5jdGlvbih0KXtULmRlZmF1bHRDb25maWc9ZShlKHt9LFQuZGVmYXVsdENvbmZpZyksdCl9LFQucGFyc2VEYXRlPUMoe30pLFQuZm9ybWF0RGF0ZT1iKHt9KSxULmNvbXBhcmVEYXRlcz1NLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBqUXVlcnkmJnZvaWQgMCE9PWpRdWVyeS5mbiYmKGpRdWVyeS5mbi5mbGF0cGlja3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGsodGhpcyxlKX0pLERhdGUucHJvdG90eXBlLmZwX2luY3I9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSx0aGlzLmdldE1vbnRoKCksdGhpcy5nZXREYXRlKCkrKFwic3RyaW5nXCI9PXR5cGVvZiBlP3BhcnNlSW50KGUsMTApOmUpKX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKHdpbmRvdy5mbGF0cGlja3I9VCksVH0pKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxyXG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxyXG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmtvID0ge30pKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgZnAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5mbGF0cGlja3IgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHdpbmRvdy5mbGF0cGlja3JcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBsMTBuczoge30sXHJcbiAgICAgIH07XHJcbiAgdmFyIEtvcmVhbiA9IHtcclxuICAgICAgd2Vla2RheXM6IHtcclxuICAgICAgICAgIHNob3J0aGFuZDogW1wi7J28XCIsIFwi7JuUXCIsIFwi7ZmUXCIsIFwi7IiYXCIsIFwi66qpXCIsIFwi6riIXCIsIFwi7YagXCJdLFxyXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgICBcIuydvOyalOydvFwiLFxyXG4gICAgICAgICAgICAgIFwi7JuU7JqU7J28XCIsXHJcbiAgICAgICAgICAgICAgXCLtmZTsmpTsnbxcIixcclxuICAgICAgICAgICAgICBcIuyImOyalOydvFwiLFxyXG4gICAgICAgICAgICAgIFwi66qp7JqU7J28XCIsXHJcbiAgICAgICAgICAgICAgXCLquIjsmpTsnbxcIixcclxuICAgICAgICAgICAgICBcIu2GoOyalOydvFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgbW9udGhzOiB7XHJcbiAgICAgICAgICBzaG9ydGhhbmQ6IFtcclxuICAgICAgICAgICAgICBcIjHsm5RcIixcclxuICAgICAgICAgICAgICBcIjLsm5RcIixcclxuICAgICAgICAgICAgICBcIjPsm5RcIixcclxuICAgICAgICAgICAgICBcIjTsm5RcIixcclxuICAgICAgICAgICAgICBcIjXsm5RcIixcclxuICAgICAgICAgICAgICBcIjbsm5RcIixcclxuICAgICAgICAgICAgICBcIjfsm5RcIixcclxuICAgICAgICAgICAgICBcIjjsm5RcIixcclxuICAgICAgICAgICAgICBcIjnsm5RcIixcclxuICAgICAgICAgICAgICBcIjEw7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIxMeyblFwiLFxyXG4gICAgICAgICAgICAgIFwiMTLsm5RcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBsb25naGFuZDogW1xyXG4gICAgICAgICAgICAgIFwiMeyblFwiLFxyXG4gICAgICAgICAgICAgIFwiMuyblFwiLFxyXG4gICAgICAgICAgICAgIFwiM+yblFwiLFxyXG4gICAgICAgICAgICAgIFwiNOyblFwiLFxyXG4gICAgICAgICAgICAgIFwiNeyblFwiLFxyXG4gICAgICAgICAgICAgIFwiNuyblFwiLFxyXG4gICAgICAgICAgICAgIFwiN+yblFwiLFxyXG4gICAgICAgICAgICAgIFwiOOyblFwiLFxyXG4gICAgICAgICAgICAgIFwiOeyblFwiLFxyXG4gICAgICAgICAgICAgIFwiMTDsm5RcIixcclxuICAgICAgICAgICAgICBcIjEx7JuUXCIsXHJcbiAgICAgICAgICAgICAgXCIxMuyblFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwi7J28XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJhbmdlU2VwYXJhdG9yOiBcIiB+IFwiLFxyXG4gIH07XHJcbiAgZnAubDEwbnMua28gPSBLb3JlYW47XHJcbiAgdmFyIGtvID0gZnAubDEwbnM7XHJcblxyXG4gIGV4cG9ydHMuS29yZWFuID0gS29yZWFuO1xyXG4gIGV4cG9ydHMuZGVmYXVsdCA9IGtvO1xyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxufSkpKTtcclxuIiwiXHJcbi8qKlxyXG4gKiBAbW9kdWxlIFRlbXBsYXRlL0NPTlNUQU5UU1xyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIO2UhOuhnOygne2KuOyXkOyEnCDsgqzsmqntlZjripQg7IOB7IiYIOuqqOydjFxyXG4gKlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gQVNURVJJU0tfSUNPTl9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjQVNURVJJU0tfSUNPTl9DTEFTU31cclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IEFTVFJFSVNLX0RJVl9IRUlHSFQge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0FTVFJFSVNLX0RJVl9IRUlHSFR9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBDUkVBVEVfRklFTERfQUNUSU9OICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjQ1JFQVRFX0ZJRUxEX0FDVElPTiB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBESVZJREVSX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRElWSURFUl9DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBEUkFHX0JPWF9OQU1FICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRFJBR19CT1hfTkFNRSB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfREFURV9JTlBVVF9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfREFURV9JTlBVVF9DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX0lOUFVUX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfSU5QVVRfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfSU5QVVRfV1JBUF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0lOUFVUX1dSQVBfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfS0lORF9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfS0lORF9DTEFTU31cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX1BBTkVMX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfUEFORUxfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfUEFORUxfSUQgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9QQU5FTF9JRCB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEVESVRPUl9BVFRSX1NFTEVDVF9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfU0VMRUNUX0NMQVNTfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRURJVE9SX0FUVFJfVEVYVEFSRUFfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9URVhUQVJFQV9DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBFRElUT1JfQ09NUE9ORU5UX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0NPTVBPTkVOVF9DTEFTUyB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBGSUVMRF9BVFRSX0NIQU5HRV9BQ1RJT04gIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNGSUVMRF9BVFRSX0NIQU5HRV9BQ1RJT04gfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0ZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gR1JPVVBfQVRUUl9DSEFOR0VfQUNUSU9OIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNHUk9VUF9BVFRSX0NIQU5HRV9BQ1RJT059XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBHUk9VUF9BVFRSX09XTkVSX0NIQU5HRV9BQ1RJT04ge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0dST1VQX0FUVFJfT1dORVJfQ0hBTkdFX0FDVElPTn1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IEdST1VQX1JFTU9WRV9BQ1RJT04ge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0dST1VQX1JFTU9WRV9BQ1RJT059XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBISURFX0NMQVNTIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNISURFX0NMQVNTfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gTUFJTl9HUk9VUF9OQU1FIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNNQUlOX0dST1VQX05BTUV9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBNSU5JTVVNX0RSQUdfU0laRSAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI01JTklNVU1fRFJBR19TSVpFIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFBSRVZJRVdfUkVBREVSX1BERl9WSUVXRVIge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1BSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJ9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUiAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1BSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFJFQURFUl9QQUdFX0ZJRUxEX0xBWUVSX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BBR0VfRklFTERfTEFZRVJfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gUkVBREVSX1BERl9WSUVXRVIgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRUFERVJfUERGX1ZJRVdFUiB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBSRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gUkVNT1ZFX0ZJRUxEX0FDVElPTiB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVNT1ZFX0ZJRUxEX0FDVElPTn1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFNIT1dfQ0xBU1MgIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNTSE9XX0NMQVNTIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFNXSVRDSF9MQUJFTF9DTEFTUyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU1dJVENIX0xBQkVMX0NMQVNTfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gU1dJVENIX0xBQkVMX1NMSURFUl9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9TTElERVJfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gU1dJVENIX0xBQkVMX1NMSURFUl9ST1VORF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1NXSVRDSF9MQUJFTF9TTElERVJfUk9VTkRfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gVEVNUExBVEVfTEFZRVJfQVNURVJJU0tfTkFNRSAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX0xBWUVSX0FTVEVSSVNLX05BTUUgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gVEVNUExBVEVfTEFZRVJfTkFNRSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfTEFZRVJfTkFNRX1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFRFTVBMQVRFX0xBWUVSX1JFQ1RfTkFNRSAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX0xBWUVSX1JFQ1RfTkFNRSB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBURU1QTEFURV9QREZfVklFV0VSICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfUERGX1ZJRVdFUiB9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBURU1QTEFURV9QREZfVklFV0VSX0NPTlRBSU5FUiAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX1BERl9WSUVXRVJfQ09OVEFJTkVSIH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IFRJVExFX0NMQVNTICB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVElUTEVfQ0xBU1MgfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gVElUTEVfV1JBUF9DTEFTUyAge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RJVExFX1dSQVBfQ0xBU1MgfVxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBGaWxlTmFtZSBDT05TVEFOVFMuanNcclxuICogQHNpbmNlIDIwMjEuMDUuMzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDT05TVEFOVFMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI01BSU5fR1JPVVBfTkFNRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIENhbnZhc+ydmCDrqZTsnbgg64W465OcXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBNQUlOX0dST1VQX05BTUUgPSBcIk1haW5Db250YWluZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9QREZfVklFV0VSX0NPTlRBSU5FUlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7ISc7J2YIFBERiBWaWV3ZXIgQ29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBURU1QTEFURV9QREZfVklFV0VSX0NPTlRBSU5FUiA9IFwiVGVtcGxhdGVWaWV3ZXJDb250YWluZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9QREZfVklFV0VSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJzsnZggUERGIFZpZXdlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVEVNUExBVEVfUERGX1ZJRVdFUiA9IFwiVGVtcGxhdGVQREZWaWV3ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVJcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDshJzrqoXrqqjrk5zsl5DshJzsnZggUERGIFZpZXdlciBDb250YWluZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFJFQURFUl9QREZfVklFV0VSX0NPTlRBSU5FUiA9IFwiUmVhZGVyVmlld2VyQ29udGFpbmVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjUkVBREVSX1BERl9WSUVXRVJcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDshJzrqoXrqqjrk5zsl5DshJzsnZggUERGIFZpZXdlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgUkVBREVSX1BERl9WSUVXRVIgPSBcIlJlYWRlclBERlZpZXdlclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1BSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg66+466as67O06riwIOuqqOuTnOyXkOyEnOydmCBQREYgVmlld2VyIENvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgUFJFVklFV19SRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIgPSBcIlByZXZpZXdSZWFkZXJWaWV3ZXJDb250YWluZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg66+466as67O06riwIOuqqOuTnOyXkOyEnOydmCBQREYgVmlld2VyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBQUkVWSUVXX1JFQURFUl9QREZfVklFV0VSID0gXCJQcmV2aWV3UmVhZGVyUERGVmlld2VyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVEVNUExBVEVfTEFZRVJfTkFNRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRlIOugiOydtOyWtCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRFTVBMQVRFX0xBWUVSX05BTUUgPSBcIlRlbXBsYXRlTGF5ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNURU1QTEFURV9MQVlFUl9BU1RFUklTS19OQU1FXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXsl5DshJwg7ZWE7IiYIOyXrOu2gCDrp4jtgazqsIAg7J6I64qUIOugiOydtOyWtCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFRFTVBMQVRFX0xBWUVSX0FTVEVSSVNLX05BTUUgPSBcIlRlbXBsYXRlQXN0ZXJpc2tMYXllclwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RFTVBMQVRFX0xBWUVSX1JFQ1RfTkFNRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl7JeQ7IScIO2VhOuTnOulvCDrp4zrk6TquLAg7JyE7ZW0IOyDneyEse2VmOuKlCDsnoTsi5wgZGl2IOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVEVNUExBVEVfTEFZRVJfUkVDVF9OQU1FID0gXCJUZW1wbGF0ZVJlY3RcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNEUkFHX0JPWF9OQU1FXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXsl5DshJwg65Oc656Y6re4IO2WiOydhOuVjCDtlYTrk5zrk6TsnbQg7J6I7J2EIOqyveyasCDrp4zrk5zripQgU1ZHIOq3uOujuSDrhbjrk5wg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBEUkFHX0JPWF9OQU1FID0gXCJEcmFnQm94R3JvdXBcIjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU0hPV19DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOuFuOuTnOulvCDrs7TsnbTrj4TroZ0g7ZWY64qUIENTUyDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBTSE9XX0NMQVNTID0gXCJUZW1wbGF0ZS1TaG93XCJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNISURFX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg64W465Oc66W8IOyViOuztOydtOuPhOuhnSDtlZjripQgQ1NTIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEhJREVfQ0xBU1MgPSBcIlRlbXBsYXRlLUhpZGVcIlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9DT01QT05FTlRfQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDsgqzsnbTrk5wg7YOt7J2YIO2BtOudvOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQ09NUE9ORU5UX0NMQVNTID0gXCJFZGl0b3ItQ29tcG9uZW50X0JveFwiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg64W465OcIO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9DTEFTUyA9IFwiRWRpdG9yLUF0dHJpYnV0ZVwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0ZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDsgq3soJzrsoTtirwg64W465OcIO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTID0gXCJGaWVsZC1EZWxldGUtQnV0dG9uXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjTUVNT19QUk9QRVJUWV9CVVRUT05fQ0xBU1NcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBSZWFkZXLrqqjrk5zsl5DshJwg66mU66qoIOyGjeyEsSDrsoTtirwg64W465OcIO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBNRU1PX1BST1BFUlRZX0JVVFRPTl9DTEFTUyA9IFwiTUVNTy1Qcm9wZXJ0eS1CdXR0b25cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9LSU5EX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE65Oc7J2YIOyGjeyEsSDsooXrpZgg64W465OcIO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9LSU5EX0NMQVNTID0gXCJBdHRyaWJ1dGUta2luZFwiO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9QQU5FTF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7YyQ64SsIOuFuOuTnCDtgbTrnpjsiqQg7J2066aELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfUEFORUxfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1Db250ZW50c1wiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX1BBTkVMX0lEXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE65Oc7J2YIOyGjeyEsSDtjJDrhKwg64W465OcIElELlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfUEFORUxfSUQgPSBcIkF0dHJpYnV0ZS1QYW5lbFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7Luo7YWQ7LigIOyXtOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1Db250ZW50cy1Sb3dcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7Luo7YWQ7LigIOyXtOydhCDqsJDsi7jqs6Ag7J6I64qUIOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUyA9IFwiQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1XcmFwXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjVElUTEVfV1JBUF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7Luo7YWQ7LigIOyXtOydmCDtg4DsnbTti4DsnYQg6rCQ7Iu46rOgIOyeiOuKlCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVElUTEVfV1JBUF9DTEFTUyA9IFwiVGl0bGUtV3JhcFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1RJVExFX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE65Oc7J2YIOyGjeyEsSDsu6jthZDsuKAg7Je07J2YIO2DgOydtO2LgCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVElUTEVfQ0xBU1MgPSBcIlRpdGxlXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX1NFTEVDVF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIFNlbGVjdCDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgRURJVE9SX0FUVFJfU0VMRUNUX0NMQVNTID0gXCJBdHRyaWJ1dGUtU2VsZWN0XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU1dJVENIX0xBQkVMX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE65Oc7J2YIOyGjeyEsSDsnZggU3dpdGNo67KE7Yq8ICDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgU1dJVENIX0xBQkVMX0NMQVNTID0gXCJBdHRyaWJ1dGUtU3dpdGNoLUxhYmVsXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU1dJVENIX0xBQkVMX1NMSURFUl9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIFN3aXRjaOuyhO2KvOydmCDsiqzrnbzsnbTrjZQg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFNXSVRDSF9MQUJFTF9TTElERVJfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1Td2l0Y2gtU2xpZGVyXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjU1dJVENIX0xBQkVMX1NMSURFUl9ST1VORF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIFN3aXRjaOuyhO2KvOydmCDsiqzrnbzsnbTrjZTsnZgg64+E6re4656AIERpdiDrhbjrk5zsnZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgU1dJVENIX0xBQkVMX1NMSURFUl9ST1VORF9DTEFTUyA9IFwiUm91bmRcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNESVZJREVSX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg6rWs67aE7J6QIOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBESVZJREVSX0NMQVNTID0gXCJEaXZpZGVyXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0VESVRPUl9BVFRSX0lOUFVUX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE65Oc7J2YIOyGjeyEsSDsnZggaW5wdXQg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEVESVRPUl9BVFRSX0lOUFVUX0NMQVNTID0gXCJBdHRyaWJ1dGUtSW5wdXRcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNFRElUT1JfQVRUUl9URVhUQVJFQV9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIFRleHRhcmVhIOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9URVhUQVJFQV9DTEFTUyA9IFwiQXR0cmlidXRlLVRleHRhcmVhXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfREFURV9JTlBVVF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIERhdGUgaW5wdXQg64W465Oc7J2YIO2BtOuemOyKpCDsnbTrpoRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEVESVRPUl9BVFRSX0RBVEVfSU5QVVRfQ0xBU1MgPSBcIkF0dHJpYnV0ZS1EYXRlLUlucHV0XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL0NPTlNUQU5UUy5DT05TVEFOVFMjRURJVE9SX0FUVFJfSU5QVVRfV1JBUF9DTEFTU1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIO2VhOuTnOydmCDsho3shLEg7J2YIGlucHV0IOuFuOuTnOulvCDqsJDsi7jqs6Ag7J6I64qUIOuFuOuTnOydmCDtgbTrnpjsiqQg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBFRElUT1JfQVRUUl9JTlBVVF9XUkFQX0NMQVNTID0gXCJBdHRyaWJ1dGUtSW5wdXQtV3JhcFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0NSRUFURV9GSUVMRF9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65OcIOyDneyEsSBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBDUkVBVEVfRklFTERfQUNUSU9OID0gXCJDcmVhdGVGaWVsZEFjdGlvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1JFTU9WRV9GSUVMRF9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65OcIOyCreygnCBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRU1PVkVfRklFTERfQUNUSU9OID0gXCJSZW1vdmVGaWVsZEFjdGlvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0ZJRUxEX0FUVFJfQ0hBTkdFX0FDVElPTlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIFVORE8gUkVET+ydmCDtlYTrk5wg7IaN7ISxIOuzgOqyvSBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBGSUVMRF9BVFRSX0NIQU5HRV9BQ1RJT04gPSBcIkZpZWxkQXR0ckNoYW5nZUFjdGlvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0dST1VQX1JFTU9WRV9BQ1RJT05cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCBVTkRPIFJFRE/snZgg7ZWE65OcIOyCreygnCBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHUk9VUF9SRU1PVkVfQUNUSU9OID0gXCJHcm91cFJlbW92ZUFjdGlvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0dST1VQX0FUVFJfQ0hBTkdFX0FDVElPTlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIFVORE8gUkVET+ydmCDtlYTrk5zrk6TsnZgg7IaN7ISxIOuzgOqyvSBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHUk9VUF9BVFRSX0NIQU5HRV9BQ1RJT04gPSBcIkdyb3VwQXR0ckNoYW5nZUFjdGlvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0dST1VQX0FUVFJfT1dORVJfQ0hBTkdFX0FDVElPTlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIFVORE8gUkVET+ydmCDtlYTrk5zrk6TsnZgg7ISc66qF7J6QIOuzgOqyvSBBY3Rpb27snZgg7J2066aEXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHUk9VUF9BVFRSX09XTkVSX0NIQU5HRV9BQ1RJT04gPSBcIkdyb3VwQXR0ck93bmVyQ2hhbmdlQWN0aW9uXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI1JFQURFUl9QQUdFX0ZJRUxEX0xBWUVSX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qFIOuqqOuTnOyXkOyEnCBGaWVsZOuTpOydtCDsmKzrnbzqsIgg66CI7J207Ja0IO2BtOuemOyKpCDsnbTrpoQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBSRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTUyA9IFwiUmVhZGVyLVBhZ2UtRmllbGQtTGF5ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNSRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qFIOuqqOuTnOyXkOyEnCBNRU1P65Ok7J20IOyYrOudvOqwiCDroIjsnbTslrQg7YG0656Y7IqkIOydtOumhC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1MgPSBcIlJlYWRlci1QYWdlLU1lbW8tTGF5ZXJcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNBU1RFUklTS19JQ09OX0NMQVNTXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgVGVtcGxhdGXrqqjrk5zsl5DshJwg7ZWE7IiYIOyXrOu2gCDslYTsnbTsvZgg7YG0656Y7IqkIOydtOumhFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgQVNURVJJU0tfSUNPTl9DTEFTUyA9IFwiQXN0ZXJpc2stSWNvblwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI0FTVFJFSVNLX0RJVl9IRUlHSFRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBUZW1wbGF0ZeuqqOuTnOyXkOyEnCDtlYTsiJgg7Jes67aAIOyVhOydtOy9mCDshLjroZzquLjsnbRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIEFTVFJFSVNLX0RJVl9IRUlHSFQgPSAxMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvQ09OU1RBTlRTLkNPTlNUQU5UUyNNSU5JTVVNX0RSQUdfU0laRVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIFRlbXBsYXRl66qo65Oc7JeQ7IScIOuTnOuemOq3uOulvCDtlojri6TripQg7LWc7IaM7J2YIOyCrOydtOymiCDquLDspIBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE1JTklNVU1fRFJBR19TSVpFID0gMTA7XHJcblxyXG4gICAgc3RhdGljIFJBRElPX1RZUEVfMSA9ICcxJztcclxuICAgIHN0YXRpYyBSQUlPRF9UWVBFXzFfUEFUSCA9IGA8cGF0aCBkPVwiTTI0LDEyYy02LjYsMC0xMiw1LjQtMTIsMTJzNS40LDEyLDEyLDEyczEyLTUuNCwxMi0xMlMzMC42LFxyXG4gICAgICAgICAgICAxMiwyNCwxMnpNMjQsMEMxMC44LDAsMCwxMC44LDAsMjRzMTAuOCwyNCwyNCwyNHMyNC0xMC44LDI0LTI0UzM3LjIsMCwyNCwwek0yNCw0My4yQzEzLjQsNDMuMiw0LjgsMzQuNiw0LjgsMjRTMTMuNCxcclxuICAgICAgICAgICAgNC44LDI0LDQuOFM0My4yLDEzLjQsNDMuMiwyNFMzNC42LDQzLjIsMjQsNDMuMnpcIi8+YDtcclxuICAgIHN0YXRpYyBSQURJT19UWVBFXzIgPSAnMic7XHJcbiAgICBzdGF0aWMgUkFJT0RfVFlQRV8yX1BBVEggPSBgPHBhdGggZD1cIk0yNCwwQzEwLjgsMCwwLDEwLjgsMCwyNHMxMC44LDI0LDI0LDI0czI0LTEwLjgsMjQtMjRTMzcuMiwwLDI0LDB6TTI0LDQzLjJDMTMuNCw0My4yLDQuOCwzNC42LDQuOCwyNFMxMy40LFxcXHJcbiAgICAgICAgICAgIDQuOCwyNCw0LjhTNDMuMiwxMy40LDQzLjIsMjRTMzQuNiw0My4yLDI0LDQzLjJ6XCIvPmA7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9DT05TVEFOVFMuQ09OU1RBTlRTI05PX0VWRU5UX0xBWUVSXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7J2067Kk7Yq466W8IOuwm+yngCDslYrripQgY2xhc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBOT19FVkVOVF9MQVlFUiA9IFwiTm8tRXZlbnQtTGF5ZXJcIjtcclxuXHJcbiAgICBzdGF0aWMgUkVBREVSX0ZJRUxEX0lOUFVUX01PREUgICAgICA9IDA7XHJcbiAgICBzdGF0aWMgUkVBREVSX0ZJRUxEX01FTU9fTU9ERSAgICAgICA9IDE7XHJcbiAgICBzdGF0aWMgUkVBREVSX0ZJRUxEX01FTU9fTUFLRV9NT0RFICA9IDI7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMuanMnO1xyXG5cclxuLyoqXHJcbiAqIHNpbXBsZS10cmFuc2xhdG9yXHJcbiAqIEEgc21hbGwgSmF2YVNjcmlwdCBsaWJyYXJ5IHRvIHRyYW5zbGF0ZSB3ZWJwYWdlcyBpbnRvIGRpZmZlcmVudCBsYW5ndWFnZXMuXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZWFzcmVtZHQvc2ltcGxlLXRyYW5zbGF0b3JcclxuICpcclxuICogQXV0aG9yOiBBbmRyZWFzIFJlbWR0IDxtZUBhbmRyZWFzcmVtZHQuY29tPiAoaHR0cHM6Ly9hbmRyZWFzcmVtZHQuY29tKVxyXG4gKiBMaWNlbnNlOiBNSVQgKGh0dHBzOi8vbWl0LWxpY2Vuc2Uub3JnLylcclxuICovXHJcbmNsYXNzIFRyYW5zbGF0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBUcmFuc2xhdG9yIGJ5IHByb3ZpZGluZyBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBsb2dnZXIodHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfT1BUSU9OUycsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oVHJhbnNsYXRvci5kZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBkZWJ1ZywgcmVnaXN0ZXJHbG9iYWxseSwgZGV0ZWN0TGFuZ3VhZ2UgfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLmRlYnVnID0gbG9nZ2VyKGRlYnVnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlZ2lzdGVyR2xvYmFsbHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsT2JqZWN0W3JlZ2lzdGVyR2xvYmFsbHldID0gdGhpcy50cmFuc2xhdGVGb3JLZXkuYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZXRlY3RMYW5ndWFnZSAmJiB0aGlzLl9lbnYgPT0gJ2Jyb3dzZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RldGVjdExhbmd1YWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBnbG9iYWwgb2JqZWN0LCBkZXBlbmRpbmcgb24gdGhlIGVudmlyb25tZW50LlxyXG4gICAgICogSWYgdGhlIHNjcmlwdCBpcyBleGVjdXRlZCBpbiBhIGJyb3dzZXIsIHJldHVybiB0aGUgd2luZG93IG9iamVjdCxcclxuICAgICAqIG90aGVyd2lzZSwgaW4gTm9kZS5qcywgcmV0dXJuIHRoZSBnbG9iYWwgb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgZ2V0IF9nbG9iYWxPYmplY3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VudiA9PSAnYnJvd3NlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBhbmQgcmV0dXJuIHRoZSBlbnZpcm9ubWVudCBpbiB3aGljaCB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGVudmlyb25tZW50XHJcbiAgICAgKi9cclxuICAgIGdldCBfZW52KCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnYnJvd3Nlcic7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ25vZGUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdicm93c2VyJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVjdCB0aGUgdXNlcnMgcHJlZmVycmVkIGxhbmd1YWdlLiBJZiB0aGUgbGFuZ3VhZ2UgaXMgc3RvcmVkIGluXHJcbiAgICAgKiBsb2NhbFN0b3JhZ2UgZHVlIHRvIGEgcHJldmlvdXMgaW50ZXJhY3Rpb24sIHVzZSBpdC5cclxuICAgICAqIElmIG5vIGxvY2FsU3RvcmFnZSBlbnRyeSBoYXMgYmVlbiBmb3VuZCwgdXNlIHRoZSBkZWZhdWx0IGJyb3dzZXIgbGFuZ3VhZ2UuXHJcbiAgICAgKi9cclxuICAgIF9kZXRlY3RMYW5ndWFnZSgpIHtcclxuICAgICAgICBjb25zdCBpbk1lbW9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnLnBlcnNpc3RLZXkpO1xyXG5cclxuICAgICAgICBpZiAoaW5NZW1vcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlID0gaW5NZW1vcnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZXNcclxuICAgICAgICAgICAgICAgID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXVxyXG4gICAgICAgICAgICAgICAgOiBuYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UgPSBsYW5nLnN1YnN0cigwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSB0cmFuc2xhdGVkIHZhbHVlIGZyb20gYSBKU09OIGJ5IHByb3ZpZGluZyBhIGtleS4gQWRkaXRpb25hbGx5LFxyXG4gICAgICogdGhlIHRhcmdldCBsYW5ndWFnZSBjYW4gYmUgc3BlY2lmaWVkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b0xhbmd1YWdlXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIF9nZXRWYWx1ZUZyb21KU09OKGtleSwgdG9MYW5ndWFnZSkge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB0aGlzLmxhbmd1YWdlcy5nZXQodG9MYW5ndWFnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXkuc3BsaXQoJy4nKS5yZWR1Y2UoKG9iaiwgaSkgPT4gKG9iaiA/IG9ialtpXSA6IG51bGwpLCBqc29uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcGxhY2UgYSBnaXZlbiBET00gbm9kZXMnIGF0dHJpYnV0ZSB2YWx1ZXMgKGJ5IGRlZmF1bHQgaW5uZXJIVE1MKSB3aXRoXHJcbiAgICAgKiB0aGUgdHJhbnNsYXRlZCB0ZXh0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b0xhbmd1YWdlXHJcbiAgICAgKi9cclxuICAgIF9yZXBsYWNlKGVsZW1lbnQsIHRvTGFuZ3VhZ2UpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaTE4bicpPy5zcGxpdCgvXFxzL2cpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBlbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtaTE4bi1hdHRyJyk/LnNwbGl0KC9cXHMvZyk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGtleXMubGVuZ3RoICE9IGF0dHJpYnV0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ01JU01BVENISU5HX0FUVFJJQlVURVMnLCBrZXlzLCBhdHRyaWJ1dGVzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5fZ2V0VmFsdWVGcm9tSlNPTihrZXksIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlcyA/IGF0dHJpYnV0ZXNbaW5kZXhdIDogJ2lubmVySFRNTCc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHIgPT0gJ2lubmVySFRNTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJdID0gdGV4dDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKCdUUkFOU0xBVElPTl9OT1RfRk9VTkQnLCBrZXksIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGUgYWxsIERPTSBub2RlcyB0aGF0IG1hdGNoIHRoZSBnaXZlbiBzZWxlY3RvciBpbnRvIHRoZVxyXG4gICAgICogc3BlY2lmaWVkIHRhcmdldCBsYW5ndWFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9MYW5ndWFnZSBUaGUgdGFyZ2V0IGxhbmd1YWdlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0ZVBhZ2VUbyh0b0xhbmd1YWdlID0gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VudiA9PSAnbm9kZScpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9FTlZJUk9OTUVOVCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRvTGFuZ3VhZ2UgIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTV9MQU5HVUFHRScsIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9MYW5ndWFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdFTVBUWV9QQVJBTV9MQU5HVUFHRScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VzLmhhcyh0b0xhbmd1YWdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdOT19MQU5HVUFHRV9SRUdJU1RFUkVEJywgdG9MYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID1cclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuY29uZmlnLnNlbGVjdG9yID09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy5zZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29uZmlnLnNlbGVjdG9yO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoICYmIGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gdGhpcy5fcmVwbGFjZShlbGVtZW50LCB0b0xhbmd1YWdlKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcGxhY2UoZWxlbWVudHMsIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudExhbmd1YWdlID0gdG9MYW5ndWFnZTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRvTGFuZ3VhZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wZXJzaXN0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuY29uZmlnLnBlcnNpc3RLZXksIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZSBhIGdpdmVuIGtleSBpbnRvIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UgaWYgaXQgZXhpc3RzXHJcbiAgICAgKiBpbiB0aGUgdHJhbnNsYXRpb24gZmlsZS4gSWYgbm90IG9yIGlmIHRoZSBsYW5ndWFnZSBoYXNuJ3QgYmVlbiBhZGRlZCB5ZXQsXHJcbiAgICAgKiB0aGUgcmV0dXJuIHZhbHVlIGlzIGBudWxsYC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgZnJvbSB0aGUgbGFuZ3VhZ2UgZmlsZSB0byB0cmFuc2xhdGVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0b0xhbmd1YWdlIFRoZSB0YXJnZXQgbGFuZ3VhZ2VcclxuICAgICAqIEByZXR1cm4geyhTdHJpbmd8bnVsbCl9XHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0ZUZvcktleShrZXksIHRvTGFuZ3VhZ2UgPSB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdJTlZBTElEX1BBUkFNX0tFWScsIGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlcy5oYXModG9MYW5ndWFnZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnTk9fTEFOR1VBR0VfUkVHSVNURVJFRCcsIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLl9nZXRWYWx1ZUZyb21KU09OKGtleSwgdG9MYW5ndWFnZSk7XHJcblxyXG4gICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdUUkFOU0xBVElPTl9OT1RfRk9VTkQnLCBrZXksIHRvTGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgdHJhbnNsYXRpb24gcmVzb3VyY2UgdG8gdGhlIFRyYW5zbGF0b3Igb2JqZWN0LiBUaGUgbGFuZ3VhZ2VcclxuICAgICAqIGNhbiB0aGVuIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHNpbmdsZSBrZXlzIG9yIHRoZSBlbnRpcmUgcGFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbGFuZ3VhZ2UgVGhlIHRhcmdldCBsYW5ndWFnZSB0byBhZGRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBqc29uIFRoZSBsYW5ndWFnZSByZXNvdXJjZSBmaWxlIGFzIEpTT05cclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVHJhbnNsYXRvciBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGQobGFuZ3VhZ2UsIGpzb24pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxhbmd1YWdlICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0lOVkFMSURfUEFSQU1fTEFOR1VBR0UnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxhbmd1YWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0VNUFRZX1BBUkFNX0xBTkdVQUdFJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikgfHwgdHlwZW9mIGpzb24gIT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTV9KU09OJywganNvbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGpzb24pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ0VNUFRZX1BBUkFNX0pTT04nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5zZXQobGFuZ3VhZ2UsIGpzb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHRyYW5zbGF0aW9uIHJlc291cmNlIGZyb20gdGhlIFRyYW5zbGF0b3Igb2JqZWN0LiBUaGUgbGFuZ3VhZ2VcclxuICAgICAqIHdvbid0IGJlIGF2YWlsYWJsZSBhZnRlcndhcmRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZSBUaGUgdGFyZ2V0IGxhbmd1YWdlIHRvIHJlbW92ZVxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUcmFuc2xhdG9yIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZShsYW5ndWFnZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnSU5WQUxJRF9QQVJBTV9MQU5HVUFHRScsIGxhbmd1YWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFuZ3VhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnRU1QVFlfUEFSQU1fTEFOR1VBR0UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmd1YWdlcy5kZWxldGUobGFuZ3VhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIGEgdHJhbnNsYXRpb24gcmVzb3VyY2UgZnJvbSB0aGUgd2ViIHNlcnZlci4gSXQgY2FuIGVpdGhlciBmZXRjaFxyXG4gICAgICogYSBzaW5nbGUgcmVzb3VyY2Ugb3IgYW4gYXJyYXkgb2YgcmVzb3VyY2VzLiBBZnRlciBhbGwgcmVzb3VyY2VzIGFyZSBmZXRjaGVkLFxyXG4gICAgICogcmV0dXJuIGEgUHJvbWlzZS5cclxuICAgICAqIElmIHRoZSBvcHRpb25hbCwgc2Vjb25kIHBhcmFtZXRlciBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGZldGNoZWQgdHJhbnNsYXRpb25zXHJcbiAgICAgKiB3aWxsIGJlIGFkZGVkIHRvIHRoZSBUcmFuc2xhdG9yIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gc291cmNlcyBUaGUgZmlsZXMgdG8gZmV0Y2hcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2F2ZSBTYXZlIHRoZSB0cmFuc2xhdGlvbiB0byB0aGUgVHJhbnNsYXRvciBvYmplY3RcclxuICAgICAqIEByZXR1cm4geyhQcm9taXNlfG51bGwpfVxyXG4gICAgICovXHJcbiAgICBmZXRjaChzb3VyY2VzLCBzYXZlID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSAmJiB0eXBlb2Ygc291cmNlcyAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdJTlZBTElEX1BBUkFNRVRFUl9TT1VSQ0VTJywgc291cmNlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZXMpKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZXMgPSBbc291cmNlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmxzID0gc291cmNlcy5tYXAoKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IHNvdXJjZS5yZXBsYWNlKC9cXC5qc29uJC8sICcnKS5yZXBsYWNlKC9eXFwvLywgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5jb25maWcuZmlsZXNMb2NhdGlvbi5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAke3BhdGh9LyR7ZmlsZW5hbWV9Lmpzb25gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZW52ID09ICdicm93c2VyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodXJscy5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2VzKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZXMubWFwKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKCdGRVRDSF9FUlJPUicsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigobGFuZ3VhZ2VGaWxlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGEgZmlsZSBjb3VsZCBub3QgYmUgZmV0Y2hlZCwgaXQgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZmlsdGVyZWQgb3V0LlxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlRmlsZXMgPSBsYW5ndWFnZUZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlRmlsZXMuZm9yRWFjaCgoZmlsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKHNvdXJjZXNbaW5kZXhdLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2VGaWxlcy5sZW5ndGggPiAxID8gbGFuZ3VhZ2VGaWxlcyA6IGxhbmd1YWdlRmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2VudiA9PSAnbm9kZScpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBsYW5ndWFnZUZpbGVzID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgdXJscy5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhwcm9jZXNzLmN3ZCgpICsgdXJsLCAndXRmLTgnKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHNhdmUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuYWRkKHNvdXJjZXNbaW5kZXhdLCBqc29uKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFuZ3VhZ2VGaWxlcy5wdXNoKGpzb24pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRlYnVnKCdNT0RVTEVfTk9UX0ZPVU5EJywgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobGFuZ3VhZ2VGaWxlcy5sZW5ndGggPiAxID8gbGFuZ3VhZ2VGaWxlcyA6IGxhbmd1YWdlRmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIG9mIHRoZSB0cmFuc2xhdG9yIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsYW5ndWFnZVxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgc2V0RGVmYXVsdExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnKCdJTlZBTElEX1BBUkFNX0xBTkdVQUdFJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGFuZ3VhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1ZygnRU1QVFlfUEFSQU1fTEFOR1VBR0UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhbmd1YWdlcy5oYXMobGFuZ3VhZ2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWcoJ05PX0xBTkdVQUdFX1JFR0lTVEVSRUQnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBsYW5ndWFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldCBjdXJyZW50TGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMYW5ndWFnZSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRlZmF1bHQgbGFuZ3VhZ2U7XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXQgZGVmYXVsdExhbmd1YWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGRlZmF1bHQgY29uZmlnIG9iamVjdCB3aG9zZSBrZXlzIGNhbiBiZSBvdmVycmlkZW5cclxuICAgICAqIGJ5IHRoZSB1c2VyJ3MgY29uZmlnIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRDb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4gICAgICAgICAgICBkZXRlY3RMYW5ndWFnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1pMThuXScsXHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVnaXN0ZXJHbG9iYWxseTogJ19fJyxcclxuICAgICAgICAgICAgcGVyc2lzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBlcnNpc3RLZXk6ICdwcmVmZXJyZWRfbGFuZ3VhZ2UnLFxyXG4gICAgICAgICAgICBmaWxlc0xvY2F0aW9uOiAnL2kxOG4nLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zbGF0b3I7IiwiY29uc3QgQ09OU09MRV9NRVNTQUdFUyA9IHtcclxuICAgIElOVkFMSURfUEFSQU1fTEFOR1VBR0U6IChwYXJhbSkgPT5cclxuICAgICAgICBgSW52YWxpZCBwYXJhbWV0ZXIgZm9yIFxcYGxhbmd1YWdlXFxgIHByb3ZpZGVkLiBFeHBlY3RlZCBhIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiBwYXJhbX0uYCxcclxuICAgIElOVkFMSURfUEFSQU1fSlNPTjogKHBhcmFtKSA9PlxyXG4gICAgICAgIGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgXFxganNvblxcYCBwcm92aWRlZC4gRXhwZWN0ZWQgYW4gb2JqZWN0LCBidXQgZ290ICR7dHlwZW9mIHBhcmFtfS5gLFxyXG4gICAgRU1QVFlfUEFSQU1fTEFOR1VBR0U6ICgpID0+XHJcbiAgICAgICAgYFRoZSBwYXJhbWV0ZXIgZm9yIFxcYGxhbmd1YWdlXFxgIGNhbid0IGJlIGFuIGVtcHR5IHN0cmluZy5gLFxyXG4gICAgRU1QVFlfUEFSQU1fSlNPTjogKCkgPT5cclxuICAgICAgICBgVGhlIHBhcmFtZXRlciBmb3IgXFxganNvblxcYCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGtleS92YWx1ZSBwYWlyLmAsXHJcbiAgICBJTlZBTElEX1BBUkFNX0tFWTogKHBhcmFtKSA9PlxyXG4gICAgICAgIGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgXFxga2V5XFxgIHByb3ZpZGVkLiBFeHBlY3RlZCBhIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiBwYXJhbX0uYCxcclxuICAgIE5PX0xBTkdVQUdFX1JFR0lTVEVSRUQ6IChsYW5ndWFnZSkgPT5cclxuICAgICAgICBgTm8gdHJhbnNsYXRpb24gZm9yIGxhbmd1YWdlIFwiJHtsYW5ndWFnZX1cIiBoYXMgYmVlbiBhZGRlZCwgeWV0LiBNYWtlIHN1cmUgdG8gcmVnaXN0ZXIgdGhhdCBsYW5ndWFnZSB1c2luZyB0aGUgXFxgLmFkZCgpXFxgIG1ldGhvZCBmaXJzdC5gLFxyXG4gICAgVFJBTlNMQVRJT05fTk9UX0ZPVU5EOiAoa2V5LCBsYW5ndWFnZSkgPT5cclxuICAgICAgICBgTm8gdHJhbnNsYXRpb24gZm91bmQgZm9yIGtleSBcIiR7a2V5fVwiIGluIGxhbmd1YWdlIFwiJHtsYW5ndWFnZX1cIi4gSXMgdGhlcmUgYSBrZXkvdmFsdWUgaW4geW91ciB0cmFuc2xhdGlvbiBmaWxlP2AsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9TT1VSQ0VTOiAocGFyYW0pID0+XHJcbiAgICAgICAgYEludmFsaWQgcGFyYW1ldGVyIGZvciBcXGBzb3VyY2VzXFxgIHByb3ZpZGVkLiBFeHBlY3RlZCBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gYXJyYXksIGJ1dCBnb3QgJHt0eXBlb2YgcGFyYW19LmAsXHJcbiAgICBGRVRDSF9FUlJPUjogKHJlc3BvbnNlKSA9PlxyXG4gICAgICAgIGBDb3VsZCBub3QgZmV0Y2ggXCIke3Jlc3BvbnNlLnVybH1cIjogJHtyZXNwb25zZS5zdGF0dXN9ICgke3Jlc3BvbnNlLnN0YXR1c1RleHR9KWAsXHJcbiAgICBJTlZBTElEX0VOVklST05NRU5UOiAoKSA9PlxyXG4gICAgICAgIGBZb3UgYXJlIHRyeWluZyB0byBleGVjdXRlIHRoZSBtZXRob2QgXFxgdHJhbnNsYXRlUGFnZVRvKClcXGAsIHdoaWNoIGlzIG9ubHkgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBZb3VyIGVudmlyb25tZW50IGlzIG1vc3QgbGlrZWx5IE5vZGUuanNgLFxyXG4gICAgTU9EVUxFX05PVF9GT1VORDogKG1lc3NhZ2UpID0+IG1lc3NhZ2UsXHJcbiAgICBNSVNNQVRDSElOR19BVFRSSUJVVEVTOiAoa2V5cywgYXR0cmlidXRlcywgZWxlbWVudCkgPT5cclxuICAgICAgICBgVGhlIGF0dHJpYnV0ZXMgXCJkYXRhLWkxOG5cIiBhbmQgXCJkYXRhLWkxOG4tYXR0clwiIG11c3QgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2Yga2V5cy5cclxuXHJcblZhbHVlcyBpbiBcXGBkYXRhLWkxOG5cXGA6ICAgICAgKCR7a2V5cy5sZW5ndGh9KSBcXGAke2tleXMuam9pbignICcpfVxcYFxyXG5WYWx1ZXMgaW4gXFxgZGF0YS1pMThuLWF0dHJcXGA6ICgke2F0dHJpYnV0ZXMubGVuZ3RofSkgXFxgJHthdHRyaWJ1dGVzLmpvaW4oJyAnKX1cXGBcclxuXHJcblRoZSBIVE1MIGVsZW1lbnQgaXM6XHJcbiR7ZWxlbWVudC5vdXRlckhUTUx9YCxcclxuICAgIElOVkFMSURfT1BUSU9OUzogKHBhcmFtKSA9PlxyXG4gICAgICAgIGBJbnZhbGlkIGNvbmZpZyBwYXNzZWQgdG8gdGhlIFxcYFRyYW5zbGF0b3JcXGAgY29uc3RydWN0b3IuIEV4cGVjdGVkIGFuIG9iamVjdCwgYnV0IGdvdCAke3R5cGVvZiBwYXJhbX0uIFVzaW5nIGRlZmF1bHQgY29uZmlnIGluc3RlYWQuYCxcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzRW5hYmxlZFxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXIoaXNFbmFibGVkKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbG9nKGNvZGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAoaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gQ09OU09MRV9NRVNTQUdFU1tjb2RlXTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobWVzc2FnZSA/IG1lc3NhZ2UoLi4uYXJncykgOiAnVW5oYW5kbGVkIEVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gZXguc3RhY2suc3BsaXQoL1xcbi9nKVsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFttZXRob2QsIGZpbGVwYXRoXSA9IGxpbmUuc3BsaXQoL0AvKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2V4Lm1lc3NhZ2V9XHJcblxyXG5UaGlzIGVycm9yIGhhcHBlbmVkIGluIHRoZSBtZXRob2QgXFxgJHttZXRob2R9XFxgIGZyb206IFxcYCR7ZmlsZXBhdGh9XFxgLlxyXG5cclxuSWYgeW91IGRvbid0IHdhbnQgdG8gc2VlIHRoZXNlIGVycm9yIG1lc3NhZ2VzLCB0dXJuIG9mZiBkZWJ1Z2dpbmcgYnkgcGFzc2luZyBcXGB7IGRlYnVnOiBmYWxzZSB9XFxgIHRvIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHJcbkVycm9yIGNvZGU6ICR7Y29kZX1cclxuXHJcbkNoZWNrIG91dCB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoZSBBUEk6XHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZWFzcmVtZHQvc2ltcGxlLXRyYW5zbGF0b3IjdXNhZ2VcclxuICAgICAgICBgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCIvL2ltcG9ydCAqIGFzIEdyYWJUb1BhbiBmcm9tICcuL2dyYWItdG8tcGFuLmpzJztcclxuXHJcbmNvbnN0IGlzTm90SUVvcklzSUUxMHBsdXMgPSAhZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IGRvY3VtZW50LmRvY3VtZW50TW9kZSA+IDk7XHJcbmNvbnN0IGNocm9tZTIgPSB3aW5kb3cuY2hyb21lO1xyXG5jb25zdCBpc0Nocm9tZTE1T3JPcGVyYTE1cGx1cyA9IGNocm9tZTIgJiYgKGNocm9tZTIud2Vic3RvcmUgfHwgY2hyb21lMi5hcHApO1xyXG5jb25zdCBpc1NhZmFyaTZwbHVzID0gL0FwcGxlLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpICYmIC9WZXJzaW9uXFwvKFs2LTldXFxkKnxbMS01XVxcZCspLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZnVuY3Rpb24gaXNMZWZ0TW91c2VSZWxlYXNlZChldmVudCkge1xyXG4gICAgICAgIGlmIChcImJ1dHRvbnNcIiBpbiBldmVudCAmJiBpc05vdElFb3JJc0lFMTBwbHVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShldmVudC5idXR0b25zICYgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDaHJvbWUxNU9yT3BlcmExNXBsdXMgfHwgaXNTYWZhcmk2cGx1cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LndoaWNoID09PSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiAgICAgICAgICAgICAgICBcclxubGV0IG1hdGNoZXNTZWxlY3RvcjtcclxuW1wid2Via2l0TVwiLCBcIm1vek1cIiwgXCJtc01cIiwgXCJvTVwiLCBcIm1cIl0uc29tZShmdW5jdGlvbiAocHJlZml4KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBwcmVmaXggKyBcImF0Y2hlc1wiO1xyXG5cclxuICAgICAgICBpZiAobmFtZSBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lICs9IFwiU2VsZWN0b3JcIjtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzU2VsZWN0b3IgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3RvcjtcclxufSk7XHJcblxyXG5jb25zdCBDdXJzb3JUb29sID0ge1xyXG4gICAgICAgIFNFTEVDVDogMCxcclxuICAgICAgICBIQU5EOiAxLFxyXG4gICAgICAgIFpPT006IDJcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQREZDdXJzb3JUb29scyB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRCdXMsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3JUb29sT25Mb2FkID0gMVxyXG4gICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cyA9IGV2ZW50QnVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVCZWZvcmVQcmVzZW50YXRpb25Nb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZFRvb2wgPSBuZXcgR3JhYlRvUGFuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5jb250YWluZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9vbChjdXJzb3JUb29sT25Mb2FkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGFjdGl2ZVRvb2woKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2hUb29sKHRvb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUJlZm9yZVByZXNlbnRhdGlvbk1vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b29sID09PSB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZUFjdGl2ZVRvb2wgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuU0VMRUNUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ3Vyc29yVG9vbC5IQU5EOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kVG9vbC5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLlpPT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLlNFTEVDVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWN0aXZlVG9vbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDdXJzb3JUb29sLkhBTkQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFjdGl2ZVRvb2woKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRUb29sLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIEN1cnNvclRvb2wuWk9PTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBzd2l0Y2hUb29sOiBcIiR7dG9vbH1cIiBpcyBhbiB1bnN1cHBvcnRlZCB2YWx1ZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0b29sO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5kaXNwYXRjaChcImN1cnNvcnRvb2xjaGFuZ2VkXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sOiB0aGlzLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLl9vbihcInN3aXRjaGN1cnNvcnRvb2xcIiwgZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb29sKGV2dC50b29sKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuX29uKFwicHJlc2VudGF0aW9ubW9kZWNoYW5nZWRcIiwgZXZ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5zd2l0Y2hJblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNseUFjdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNseUFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoVG9vbChDdXJzb3JUb29sLlNFTEVDVCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVCZWZvcmVQcmVzZW50YXRpb25Nb2RlID0gcHJldmlvdXNseUFjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c2x5QWN0aXZlID0gdGhpcy5hY3RpdmVCZWZvcmVQcmVzZW50YXRpb25Nb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQmVmb3JlUHJlc2VudGF0aW9uTW9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hUb29sKHByZXZpb3VzbHlBY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIEBtb2R1bGUgUmVhZGVyL1JlYWRlck1vZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJy4uL0NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5pbXBvcnQge1JlYWRlclBhZ2VEYXRhfSBmcm9tICcuL3JlYWRlclBhZ2VEYXRhLmpzJ1xyXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCdcclxuaW1wb3J0IENQIGZyb20gJy4vLi4vdXRpbHMvY29sb3ItcGlja2VyJztcclxuXHJcbnZhciBfcmVhZGVyTW9kO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDtlYTrk5wg7J6F66ClIOq0gOugqCDsspjrpqzrpbwg7ZWY64qUIENsYXNzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2t9IGN1c3RvbUFsZXJ0RnVuYyAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNjdXN0b21BbGVydEZ1bmMgfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbWVudUNkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbWVudUNkfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGFnZXNJbmZvICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3BhZ2VzSW5mbyB9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwZGZWaWV3ZXIge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwZGZWaWV3ZXJ9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSByZWFkZXJPd25lck5vZGUgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcmVhZGVyT3duZXJOb2RlIH1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IHJlZ2lzdGVyZWRTaWduRGF0YXMgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcmVnaXN0ZXJlZFNpZ25EYXRhcyB9XHJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzaWduQ2FudmFzIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnbkNhbnZhc31cclxuICogQHByb3BlcnR5IHtPYmplY3R9IHRlbXBsYXRlRGF0YSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCN0ZW1wbGF0ZURhdGEgfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGV4dFNpZ25DYW52YXMgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjdGV4dFNpZ25DYW52YXMgfVxyXG4gKlxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjbG9uZVNpZ25EYXRhICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2Nsb25lU2lnbkRhdGEgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjbG9zZVNpZ25Qb3B1cCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNjbG9zZVNpZ25Qb3B1cCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGV4cG9ydEZpZWxkRGF0YSAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNleHBvcnRGaWVsZERhdGEgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5ICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2lzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBsb2FkSnNvbkRhdGEgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbG9hZEpzb25EYXRhIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbG9hZEpzb25EYXRhV2l0aFVzZXJJbmZvICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2xvYWRKc29uRGF0YVdpdGhVc2VySW5mbyB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGxvYWRSZWdpc3RlcmVkU2lnbkRhdGEgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbG9hZFJlZ2lzdGVyZWRTaWduRGF0YSB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHBhZ2VSZWZyZXNoICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3BhZ2VSZWZyZXNoIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcGFnZVJlbmRlciAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwYWdlUmVuZGVyIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVhZGVySW5pdCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNyZWFkZXJJbml0IH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2F2ZVNpZ25Qb3B1cERhdGEgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2F2ZVNpZ25Qb3B1cERhdGEgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzaWduUG9wdXBJbml0RXZ0ICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25Qb3B1cEluaXRFdnQgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzaWduUG9wdXBUYWJDbGljayAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduUG9wdXBUYWJDbGljayB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNpZ25SZXZlcnQgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblJldmVydCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNpZ25UZXh0Q3JlYXRlICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25UZXh0Q3JlYXRlIH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2lnblRleHRDcmVhdGVLZXlVcEV2ZW50ICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25UZXh0Q3JlYXRlS2V5VXBFdmVudCB9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHN0YW1wRmlsZVNlbGVjdCAge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzdGFtcEZpbGVTZWxlY3QgfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzdGFtcEZpbGVTZWxlY3QgIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc3RhbXBGaWxlU2VsZWN0IH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYWRkVVJMSW1hZ2VUb1NpZ25BcmVhICB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2FkZFVSTEltYWdlVG9TaWduQXJlYSB9XHJcbiAqIFxyXG4gKiBARmlsZU5hbWUgUmVhZGVyTW9kLmpzXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjMxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVhZGVyTW9kIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7UERGVmlld2VyfVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNwZGZWaWV3ZXJcclxuICAgKiBAZGVzY3JpcHRpb24gUERGLmpzIOu3sOyWtCDsmKTruIzsoJ3tirhcclxuICAgKi9cclxuICBwZGZWaWV3ZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3RlbXBsYXRlRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiBUZW1wbGF0ZeyXkOyEnCDrp4zrk6Ag7ZWE65OcIOygleuztCDrjbDsnbTthLAuXHJcbiAgICovXHJcbiAgdGVtcGxhdGVEYXRhO1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduQ2FudmFzXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqhe2MneyXheydmCBEcmF3aW5n7YOt7J2YIGNhbnZhcyBPYmplY3QuXHJcbiAgICovXHJcbiAgc2lnbkNhbnZhcyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3RleHRTaWduQ2FudmFzXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqhe2MneyXheydmCDthY3siqTtirgg7ISc66qF7YOt7JeQ7IScIO2FjeyKpO2KuCDshJzrqoXsnYQg7ISg7YOd7ZWY66m0IOyggOyepe2VmOuKlCBjYW52YXMgT2JqZWN0LlxyXG4gICAqL1xyXG4gIHRleHRTaWduQ2FudmFzID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcGFnZXNJbmZvXHJcbiAgICogQGRlc2NyaXB0aW9uIO2VhOuTnOuTpOydmCDsoJXrs7Trpbwg64u06rOgIOyeiOuKlCDtjpjsnbTsp4Ag7KCV67O0IOyYpOu4jOygne2KuFxyXG4gICAqL1xyXG4gIHBhZ2VzSW5mbyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZSB7RWxlbWVudH1cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcmVhZGVyT3duZXJOb2RlXHJcbiAgICogQGRlc2NyaXB0aW9uIOydtCDtlITroZzsoJ3tirjqsIAg7Y+s7ZWo65CgIEVsZW1lbnTsnZgg67aA66qoIEhUTUwgRUxFTUVOVFxyXG4gICAqL1xyXG4gIHJlYWRlck93bmVyTm9kZSA9IFwiXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlZ2lzdGVyZWRTaWduRGF0YXNcclxuICAgKiBAZGVzY3JpcHRpb24g7ISc67KE7JeQ7IScIOuTseuhneuQnCDshJzrqoUg7J2066+47KeAIOygleuztOulvCDri7TslYTshJwg7KCA7J6l7ZWY6rOgIOyeiOydhCDrjbDsnbTthLAgT2JqZWN0XHJcbiAgICovXHJcbiAgcmVnaXN0ZXJlZFNpZ25EYXRhcyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtDYWxsYmFja31cclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjY3VzdG9tQWxlcnRGdW5jXHJcbiAgICogQGRlc2NyaXB0aW9uIOyVjOumvCDssL3snYQg652E7Jqw6riwIOychO2VnCBDYWxsYmFjayBGdW5jdGlvblxyXG4gICAqL1xyXG4gIGN1c3RvbUFsZXJ0RnVuYyA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3JlYWRlck1vZGVcclxuICAgKiBAZGVzY3JpcHRpb24g7J6F66ClIOuqqOuTnCAwIOuplOuqqOuqqOuTnCAxXHJcbiAgICovXHJcbiAgcmVhZGVyTW9kZSA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2ltZ0pzb25GaWxlVXJsXHJcbiAgICogQGRlc2NyaXB0aW9uIGltZ0pzb25GaWxlVXJs64qUIOuTseuhneuQnCDsnbTrr7jsp4Ag7YOt7JeQ7IScIOuztOyXrOykhCDsnbTrr7jsp4Drk6TsnZgg7KCV67O066W8IOuLtOydgCBqc29uIO2MjOydvCDqsr3roZwgXHJcbiAgICovXHJcbiAgaW1nSnNvbkZpbGVVcmwgPSBcIlwiO1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3BkZlZpZXdlciBQREYgVmlld2VyIE9iamVjdFxyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlIOydtCDtlITroZzsoJ3tirjqsIAg7Y+s7ZWo65CgIEVsZW1lbnTsnZgg67aA66qoIEhUTUwgRUxFTUVOVFxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoX3BkZlZpZXdlciwgb3duZXJOb2RlKSB7XHJcbiAgICB0aGlzLnBkZlZpZXdlciA9IF9wZGZWaWV3ZXI7XHJcbiAgICBfcmVhZGVyTW9kID0gdGhpcztcclxuICAgIHRoaXMucmVhZGVyT3duZXJOb2RlID0gb3duZXJOb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHBhZ2VSZW5kZXJcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcGFnZVJlbmRlclxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7Y6Y7J207KeAIOuenOuNlOungSDsnbTrsqTtirjrlYwg7ZWE65Oc66W8IOuenOuNlOunge2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBFdmVudCBPYmplY3RcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBwYWdlUmVuZGVyKGV2ZW50KSB7XHJcbiAgICBjb25zdCBwYWdlTm8gPSBldmVudC5wYWdlTnVtYmVyO1xyXG4gICAgLy9jb25zb2xlLmxvZyhwYWdlTm8pO1xyXG4gICAgbGV0IHBnTm9kZSA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiIFtkYXRhLXBhZ2UtbnVtYmVyPSdcIiArIHBhZ2VObyArIFwiJ11cIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhfcmVhZGVyTW9kLnBhZ2VzSW5mbyk7XHJcbiAgICBpZiAoa2V5cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBfcmVhZGVyTW9kLmhpZGVNZW1vUHJvcGVydGllcygpO1xyXG4gICAgbGV0IHBhZ2VJbmZvID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV07XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IF9yZWFkZXJNb2QucGRmVmlld2VyLl9wYWdlc1twYWdlTm8gLSAxXS52aWV3cG9ydDtcclxuICAgIHBhZ2VJbmZvLmNyZWF0ZUZpZWxkKFxyXG4gICAgICBwZ05vZGUsXHJcbiAgICAgIHZpZXdwb3J0LFxyXG4gICAgICBfcmVhZGVyTW9kLnJlYWRlck1vZGUsXHJcbiAgICAgIF9yZWFkZXJNb2QuZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyLFxyXG4gICAgICBfcmVhZGVyTW9kLm1lbW9Qcm9wZXJ0eUJ0bkNsaWNrRXZlbnRMaXN0ZW5lclxyXG4gICAgKTtcclxuICAgIGlmIChfcmVhZGVyTW9kLnJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfTUVNT19NQUtFX01PREUpIHtcclxuICAgICAgcGdOb2RlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfTUVNT19MQVlFUl9DTEFTUylcclxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3JlYWRlck1vZC50ZW1wbGF0ZU1vdXNlVXBFdmVudCk7XHJcbiAgICAgIHBnTm9kZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1MpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIF9yZWFkZXJNb2QudGVtcGxhdGVNb3VzZVVwRXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHBhZ2VSZWZyZXNoXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3BhZ2VSZWZyZXNoXHJcbiAgICogQGRlc2NyaXB0aW9uICDtlYTrk5zrjbDsnbTthLDrpbwg64uk7IucIOuenOuNlOunge2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgcGFnZVJlZnJlc2goKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3JlYWRlck1vZC5wYWdlc0luZm8pO1xyXG4gICAgaWYgKGtleXMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWFkZXJNb2QuaGlkZU1lbW9Qcm9wZXJ0aWVzKCk7XHJcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBsZXQgcGFnZU51bWJlciA9IHBhcnNlSW50KGtleSkgKyAxO1xyXG4gICAgICBsZXQgcGdOb2RlID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiBbZGF0YS1wYWdlLW51bWJlcj0nXCIgKyBwYWdlTnVtYmVyICsgXCInXVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBpc0xvYWRlZCA9IHBnTm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxvYWRlZFwiKTtcclxuICAgICAgaWYgKGlzTG9hZGVkID09PSBcInRydWVcIikge1xyXG4gICAgICAgIGxldCBwYWdlSW5mbyA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW2tleV07XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBfcmVhZGVyTW9kLnBkZlZpZXdlci5fcGFnZXNba2V5XS52aWV3cG9ydDtcclxuICAgICAgICBwYWdlSW5mby5jcmVhdGVGaWVsZChcclxuICAgICAgICAgIHBnTm9kZSxcclxuICAgICAgICAgIHZpZXdwb3J0LFxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJNb2RlLFxyXG4gICAgICAgICAgX3JlYWRlck1vZC5kZWxldGVCdG5DbGlja0V2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgICBfcmVhZGVyTW9kLm1lbW9Qcm9wZXJ0eUJ0bkNsaWNrRXZlbnRMaXN0ZW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9PT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9NRU1PX01BS0VfTU9ERSkge1xyXG4gICAgICAgICAgcGdOb2RlXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1MpXHJcbiAgICAgICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBfcmVhZGVyTW9kLnRlbXBsYXRlTW91c2VVcEV2ZW50KTtcclxuICAgICAgICAgIHBnTm9kZVxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIENPTlNUQU5UUy5SRUFERVJfUEFHRV9NRU1PX0xBWUVSX0NMQVNTKVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3JlYWRlck1vZC50ZW1wbGF0ZU1vdXNlVXBFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBsb2FkSnNvbkRhdGFcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjbG9hZEpzb25EYXRhXHJcbiAgICogQGRlc2NyaXB0aW9uICBmaWVsZOygleuztOulvCDroZzrk5ztlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbkRhdGEgIGltcG9ydO2VoCBqc29uIGRhdGEgT2JqZWN0XHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBsb2FkSnNvbkRhdGEoanNvbkRhdGEpIHtcclxuICAgIGlmIChqc29uRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YSA9IGpzb25EYXRhO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZUluZm8gPSBVdGlscy5jbG9uZU9iamVjdChcclxuICAgICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXVxyXG4gICAgKTtcclxuXHJcbiAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgdmFyIHBhZ2VEYXRhID0gbmV3IFJlYWRlclBhZ2VEYXRhKFxyXG4gICAgICAgIGVsZW1lbnQucGFnZU5vLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZUluZm8sXHJcbiAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsXHJcbiAgICAgICAgX3JlYWRlck1vZC5jdXN0b21BbGVydEZ1bmMsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgX3JlYWRlck1vZC5zaWduQ2FudmFzXHJcbiAgICAgICk7XHJcbiAgICAgIGVsZW1lbnQuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcGFnZURhdGEucHVzaEZpZWxkKGZpZWxkLm1faWQsIGZpZWxkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChlbGVtZW50Lm1lbW9zICE9PSBudWxsICYmIGVsZW1lbnQubWVtb3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsZW1lbnQubWVtb3MuZm9yRWFjaCgobWVtbykgPT4ge1xyXG4gICAgICAgICAgcGFnZURhdGEucHVzaE1lbW8obWVtby5tX2lkLCBtZW1vKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBfcmVhZGVyTW9kLnBhZ2VzSW5mb1tlbGVtZW50LnBhZ2VOb10gPSBwYWdlRGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGxvYWRKc29uRGF0YVdpdGhVc2VySW5mb1xyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNsb2FkSnNvbkRhdGFXaXRoVXNlckluZm9cclxuICAgKiBAZGVzY3JpcHRpb24gIOyEnOuqheyekCDsoJXrs7TsmYAgZmllbGTsoJXrs7Trpbwg7ZWp7LOQ7IScIOuhnOuTnO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uRGF0YSAgaW1wb3J07ZWgIGpzb24gZGF0YSBPYmplY3RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlckluZm8gIOyEnOuqheyekCDsoJXrs7QgT2JqZWN0XHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgbG9hZEpzb25EYXRhV2l0aFVzZXJJbmZvKGpzb25EYXRhLCB1c2VySW5mbywgdXNlcktleSkge1xyXG4gICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEgPSBqc29uRGF0YTtcclxuICAgIGxldCBkZWZhdWx0VmFsdWVJbmZvID0gVXRpbHMuY2xvbmVPYmplY3QodXNlckluZm8pO1xyXG5cclxuICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbdXNlcktleV0ucGFnZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICB2YXIgcGFnZURhdGEgPSBuZXcgUmVhZGVyUGFnZURhdGEoXHJcbiAgICAgICAgZWxlbWVudC5wYWdlTm8sXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlSW5mbyxcclxuICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSxcclxuICAgICAgICBfcmVhZGVyTW9kLmN1c3RvbUFsZXJ0RnVuYyxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhc1xyXG4gICAgICApO1xyXG4gICAgICBlbGVtZW50LmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHBhZ2VEYXRhLnB1c2hGaWVsZChmaWVsZC5tX2lkLCBmaWVsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgX3JlYWRlck1vZC5wYWdlc0luZm9bZWxlbWVudC5wYWdlTm9dICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICBfcmVhZGVyTW9kLnBhZ2VzSW5mb1tlbGVtZW50LnBhZ2VOb10gIT09IG51bGxcclxuICAgICAgKSB7XHJcbiAgICAgICAgZGVsZXRlIF9yZWFkZXJNb2QucGFnZXNJbmZvW2VsZW1lbnQucGFnZU5vXTtcclxuICAgICAgfVxyXG4gICAgICBfcmVhZGVyTW9kLnBhZ2VzSW5mb1tlbGVtZW50LnBhZ2VOb10gPSBwYWdlRGF0YTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHJlYWRlckluaXRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjcmVhZGVySW5pdFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7ZWE7JqU7ZWcIOygleuztOuTpOydhCDstIjquLDtmZTtlZzri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHJlYWRlckluaXQoKSB7XHJcbiAgICBpZiAoX3JlYWRlck1vZC5zaWduQ2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgIGxldCBkcmF3Q29tcG9uZW50ID1cclxuICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiI2RyYXdDb21wb25lbnRcIik7XHJcbiAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGRyYXdDb21wb25lbnQsIHtcclxuICAgICAgICBpc0RyYXdpbmdNb2RlOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhcy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMgPT09IG51bGwpIHtcclxuICAgICAgbGV0IGNhbnZhczEgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiICN0ZXh0U2lnbkNhbnZhcyAuY2FudmFzX3dyYXAgY2FudmFzXCJcclxuICAgICAgKTtcclxuICAgICAgX3JlYWRlck1vZC50ZXh0U2lnbkNhbnZhcyA9IG5ldyBmYWJyaWMuU3RhdGljQ2FudmFzKGNhbnZhczEsIHt9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiAjZHJhd1R5cGVJbml0QnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3JlYWRlck1vZC5zaWduUmV2ZXJ0KTtcclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiICNjYW5jZWxCdXR0b25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcmVhZGVyTW9kLmNsb3NlU2lnblBvcHVwKTtcclxuICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiICNkcmF3UmVnaXN0QnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3JlYWRlck1vZC5zYXZlU2lnblBvcHVwRGF0YSk7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgX3JlYWRlck1vZC5zaWduUG9wdXBJbml0RXZ0KTtcclxuXHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBGaWxlSW5wdXRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgX3JlYWRlck1vZC5zdGFtcEltYWdlU2VsZWN0ZWQpO1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIgLmNvcm5lcl9wb2ludF9hcmVhIC50eHRfZ3VpZGVcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcmVhZGVyTW9kLnN0YW1wRmlsZVNlbGVjdCk7XHJcblxyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgXCIgLlNpZ24tUG9wdXAgPiAuU2lnbi1MYXllcnBvcCAuUG9wdXAtQm9keSAuUG9wdXAtVGFiLU1haW4gPiBsaVwiXHJcbiAgICAgIClcclxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5T2JqZWN0KGVsLm9uY2xpY2spKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcmVhZGVyTW9kLnNpZ25Qb3B1cFRhYkNsaWNrLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gbG9hZFJlZ2lzdGVyZWRTaWduRGF0YVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNsb2FkUmVnaXN0ZXJlZFNpZ25EYXRhXHJcbiAgICogQGRlc2NyaXB0aW9uICAg7ISc67KE66Gc67aA7YSwIOuTseuhneuQnCDsnbjsnqUg7KCV67O066W8IOu2iOufrOyYqOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgYXN5bmMgbG9hZFJlZ2lzdGVyZWRTaWduRGF0YSgpIHtcclxuICAgIGxldCBzaWduVHlwZUxpc3QgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiAuU2lnbi1MYXllcnBvcCAuVGFiLUNvbnRlbnRzIC5TaWduLUFyZWEgLnJlZ2lzdGVyZWRTaWduV3JhcCB1bC5zaWduVHlwZUxpc3RcIlxyXG4gICAgKTtcclxuICAgIGxldCBzdGFtcGxpc3RUeXBlID0gc2lnblR5cGVMaXN0LmdldEF0dHJpYnV0ZShcImNsb25la2V5XCIpO1xyXG4gICAgbGV0IHBvcHVwRGl2ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIik7XHJcbiAgICBsZXQgbGF5ZXJQb3AgPSBwb3B1cERpdi5xdWVyeVNlbGVjdG9yKFwiLlNpZ24tTGF5ZXJwb3BcIik7XHJcbiAgICAvL2xldCByZWdTaWduQXBpVXJsID0gbGF5ZXJQb3AuZ2V0QXR0cmlidXRlKFwicmVnU2lnbkFwaVVybFwiKTtcclxuICAgIGlmIChcclxuICAgICAgX3JlYWRlck1vZC5pbWdKc29uRmlsZVVybCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIF9yZWFkZXJNb2QuaW1nSnNvbkZpbGVVcmwgPT09IG51bGwgfHxcclxuICAgICAgX3JlYWRlck1vZC5pbWdKc29uRmlsZVVybCA9PT0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcmVnU2lnbkFwaVVybCA9IF9yZWFkZXJNb2QuaW1nSnNvbkZpbGVVcmw7XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICBsZXQgc3RhbXBVcmwgPSByZWdTaWduQXBpVXJsO1xyXG4gICAgaWYgKHN0YW1wbGlzdFR5cGUgIT09IFwicmVnaXN0ZXJlZENvbXBhbnlMaXN0XCIpIHtcclxuICAgICAgc3RhbXBVcmwgPSBcIi91aS9icC9lZG9jL2Vmb3JtL2ZpbmRVc2VyU3RhbXBMaXN0QnlNYWlsLmRvXCI7Ly/slrTrlqQg7Jqp64+E7KeAP1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRlbnRDaGlwaGVyID0gZmFsc2U7XHJcbiAgICB2YXIgYm9keUpzb25TdHIgPSBKU09OLnN0cmluZ2lmeSh7IHJlZ2lzdGVyZWRTaWduRGF0YXM6IFwicmVhZGVyXCIgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhib2R5SnNvblN0cik7XHJcbiAgICBpZiAod2luZG93LmlzUGFyYW1ldGVyRW5jeXB0ID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnRlbnRDaGlwaGVyID0gdHJ1ZTtcclxuICAgICAgYm9keUpzb25TdHIgPSBDaXBoZXJVdGlsLmVuY3J5cHQoYm9keUpzb25TdHIsIFwiQUVTXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIG1ldGFbbmFtZT1fY3NyZl1cIikuY29udGVudDtcclxuICAgIFxyXG5cclxuICAgIGZldGNoKFxyXG4gICAgICBzdGFtcFVybCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJ4LWNzcmYtdG9rZW5cIjogY3NyZixcclxuICAgICAgICAgIFwieC1yZXF1ZXN0ZWQtd2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXHJcbiAgICAgICAgICBcImNvbnRlbnQtY2hpcGhlclwiOiBjb250ZW50Q2hpcGhlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogYm9keUpzb25TdHIsXHJcbiAgICAgIH1cclxuICAgICAgLy9mZXRjaChcImZpbmRDb21wYW55U3RhbXBMaXN0LmRvXCJcclxuICAgIClcclxuICAgICovXHJcbiAgICBsZXQgc3RhbXBVcmwgPSByZWdTaWduQXBpVXJsOy8v7ZiE7J6s64qUIOyCrOyaqSDslYjtlagoQVBJ67Cp7IudIOyCrOyaqeyLnCDsgqzsmqkpXHJcblxyXG5cclxuICAgIC8vIHJlZ1NpZ25BcGlVcmzsnbQg67Cw7Je07J247KeAIO2ZleyduFxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVnU2lnbkFwaVVybCkpIHtcclxuICAgICAgICAvLyDrsLDsl7Tsnbgg6rK97Jqw7J2YIOyymOumrFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiW+uTseuhneuQnCDsnbTrr7jsp4BdIFVSTCDrsLDsl7QuXCIpO1xyXG4gICAgICAgIGxldCBkYXRhID0gX3JlYWRlck1vZC5jb252ZXJ0VXJsc1RvSnNvbihyZWdTaWduQXBpVXJsKTtcclxuICAgICAgICBfcmVhZGVyTW9kLnJlZ2lzdGVyZWRTaWduRGF0YXMgPSBkYXRhO1xyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGRhdGEubGVuZ3RoOyArK2lkeCkge1xyXG4gICAgICAgICAgbGV0IGxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICBsZXQgY2FudmFzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLmNsYXNzTmFtZSA9IFwiY2FudmFzX3dyYXBcIjtcclxuICAgICAgICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICBsZXQgc2lnbkRhdGEgPSBkYXRhW2lkeF07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICDthYzsiqTtirhcclxuICAgICAgICAgICovXHJcbiAgICAgICAgICAvLyBjb252ZXJ0SW1hZ2VUb0Jhc2U2NCDtlajsiJgg7Zi47Lac7ZWY7JesIOydtOuvuOyngOulvCBiYXNlNjTroZwg67OA7ZmY7ZWY6rOgIOqysOqzvOulvCDsspjrpqxcclxuICAgICAgICAgIGF3YWl0IF9yZWFkZXJNb2QuY29udmVydEltYWdlVG9CYXNlNjQoc2lnbkRhdGEuaW1nX3NyYylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGJhc2U2NFN0cmluZykge1xyXG4gICAgICAgICAgICBzaWduRGF0YS5pbWdfc3JjID0gYmFzZTY0U3RyaW5nO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAvL2FsZXJ0KFwi7ISg7YOd7ZWY7IugIOuTseuhneuQnCDsnbTrr7jsp4DsnZggVVJM7JeQIOygkeq3vO2VoCDsiJgg7JeG7Iq164uI64ukLlxcbiAoQ09SU+ygleyxhSDsnITrsLAg7Zi57J2AIOyemOuqu+uQnCBVUkwpXCIpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICDthYzsiqTtirhcclxuICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgaW1nRWwuc3JjID0gc2lnbkRhdGEuaW1nX3NyYztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaW1nRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldnQpO1xyXG4gICAgICAgICAgICBsZXQgbGlMaXN0ID0gc2lnblR5cGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGlJZHggPSAwOyBsaUlkeCA8IGxpTGlzdC5sZW5ndGg7ICsrbGlJZHgpIHtcclxuICAgICAgICAgICAgICBsZXQgbGlFbCA9IGxpTGlzdC5pdGVtKGxpSWR4KTtcclxuICAgICAgICAgICAgICBpZiAobGlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGlFbC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRMaSA9IGV2dC50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xyXG4gICAgICAgICAgICB0YXJnZXRMaS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicmVnaXN0ZXJlZElkeFwiLCBpZHgpO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5zZXRBdHRyaWJ1dGUoXCJyZWdpc3RlcmVkSW1nVHlwZVwiLCAnVVJMJyk7XHJcbiAgICAgICAgICAvL2NhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwic3RwTk9cIiwgc2lnbkRhdGEuc3RwX25vKTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuYXBwZW5kQ2hpbGQoaW1nRWwpO1xyXG4gICAgICAgICAgbGlFbC5hcHBlbmRDaGlsZChjYW52YXNXcmFwKTtcclxuICAgICAgICAgIHNpZ25UeXBlTGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g67Cw7Je07J20IOyVhOuLjCDqsr3smrDsnZgg7LKY66asXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJb65Ox66Gd65CcIOydtOuvuOyngF0gSnNvbiDtjIzsnbwg6rK966GcXCIpO1xyXG4gICAgICAgIGZldGNoKHJlZ1NpZ25BcGlVcmwpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLsnZHri7Ug642w7J207YSwOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgX3JlYWRlck1vZC5yZWdpc3RlcmVkU2lnbkRhdGFzID0gZGF0YTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZGF0YS5sZW5ndGg7ICsraWR4KSB7XHJcbiAgICAgICAgICAgICAgbGV0IGxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgICAgbGV0IGNhbnZhc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgIGNhbnZhc1dyYXAuY2xhc3NOYW1lID0gXCJjYW52YXNfd3JhcFwiO1xyXG4gICAgICAgICAgICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgbGV0IHNpZ25EYXRhID0gZGF0YVtpZHhdO1xyXG4gICAgICAgICAgICAgIGlmIChzaWduRGF0YS5pbWdfdHlwZSA9PT0gXCJTVkdcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbc2lnbkRhdGEuaW1nX3NyY10sIHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGltZ0VsLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGltZ0VsLnNyYyA9IHNpZ25EYXRhLmltZ19zcmM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2dCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlMaXN0ID0gc2lnblR5cGVMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGxpSWR4ID0gMDsgbGlJZHggPCBsaUxpc3QubGVuZ3RoOyArK2xpSWR4KSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBsaUVsID0gbGlMaXN0Lml0ZW0obGlJZHgpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAobGlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpRWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0TGkgPSBldnQudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInJlZ2lzdGVyZWRJZHhcIiwgaWR4KTtcclxuICAgICAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcInJlZ2lzdGVyZWRJbWdUeXBlXCIsIHNpZ25EYXRhLmltZ190eXBlKTtcclxuICAgICAgICAgICAgICAvL2NhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwic3RwTk9cIiwgc2lnbkRhdGEuc3RwX25vKTtcclxuICAgICAgICAgICAgICBjYW52YXNXcmFwLmFwcGVuZENoaWxkKGltZ0VsKTtcclxuICAgICAgICAgICAgICBsaUVsLmFwcGVuZENoaWxkKGNhbnZhc1dyYXApO1xyXG4gICAgICAgICAgICAgIHNpZ25UeXBlTGlzdC5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuyXkOufrCDrsJzsg506XCIsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gc2lnblBvcHVwVGFiQ2xpY2tcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblBvcHVwVGFiQ2xpY2tcclxuICAgKiBAZGVzY3JpcHRpb24g7ISc66qF7Yyd7JeF7J2YIO2DreydhCDtgbTrpq3tlojsnYQg65WMIO2DreydtOuPmeydhCDtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgT2JqZWN0XHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzaWduUG9wdXBUYWJDbGljayhldnQpIHtcclxuICAgIGNvbnN0IHRhcmdldElkID0gZXZ0LnRhcmdldC5jbG9zZXN0KFwibGlcIikuaWQ7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIiAuU2lnbi1Qb3B1cCA+IC5TaWduLUxheWVycG9wIC5Qb3B1cC1Cb2R5IC5Qb3B1cC1UYWItTWFpbiA+IGxpXCJcclxuICAgICAgKVxyXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHlPYmplY3QoZWwub25jbGljaykpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsLmlkID09PSB0YXJnZXRJZCkge1xyXG4gICAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJvblwiKSkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGFiSWQgPSB0YXJnZXRJZC5yZXBsYWNlKFwiQnV0dG9uXCIsIFwiXCIpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXJnZXRUYWJJZCA9PT0gXCJyZWdpc3RlcmVkU2lnblRhYlwiICYmXHJcbiAgICAgICAgICAgIF9yZWFkZXJNb2QucmVnaXN0ZXJlZFNpZ25EYXRhcyA9PT0gbnVsbFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vX3JlYWRlck1vZC5sb2FkUmVnaXN0ZXJlZFNpZ25EYXRhKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLzEyMTMg67OR7Jqx7LaU6rCAXHJcbiAgICAgICAgICAvLyBkb2N1bWVudFxyXG4gICAgICAgICAgLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJbWFnZUJ1dHRvblwiKVxyXG4gICAgICAgICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9yZWFkZXJNb2QuYWRkVVJMSW1hZ2VUb1NpZ25BcmVhKCkpO1xyXG5cclxuICAgICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlXHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgIFwiIC5TaWduLVBvcHVwID4gLlNpZ24tTGF5ZXJwb3AgLlBvcHVwLUJvZHkgLlNpZ24tVGFiLUNvbnRhaW5lciA+IC5UYWItQ29udGVudHNcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChjb250ZW50RWwpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0YWJOYW1lID0gY29udGVudEVsLmdldEF0dHJpYnV0ZShcImRhdGEtdGFiLW5hbWVcIik7XHJcbiAgICAgICAgICAgICAgaWYgKHRhYk5hbWUgPT09IHRhcmdldFRhYklkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudEVsLmNsYXNzTGlzdC5jb250YWlucyhcIlRlbXBsYXRlLUhpZGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudEVsLmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiVGVtcGxhdGUtSGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25cIikpIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gc2lnblBvcHVwSW5pdEV2dFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduUG9wdXBJbml0RXZ0XHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqhe2MneyXheydtCDsspjsnYwg65yw65WMIO2VhOyalO2VnCDrjbDsnbTthLDrk6TsnYQg7LSI6riw7ZmU7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50ICBFdmVudCBPYmplY3RcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzaWduUG9wdXBJbml0RXZ0KGV2dCkge1xyXG4gICAgY29uc3QgcG9wdXBEaXYgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzaWduRWxlbWVudFwiKTtcclxuICAgIGxldCBjdXJyZW50VGFiRWwgPSBwb3B1cERpdi5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5TaWduLVRhYi1Db250YWluZXIgLlBvcHVwLVRhYi1NYWluIGxpLm9uXCJcclxuICAgICk7XHJcblxyXG4gICAgc3dpdGNoIChjdXJyZW50VGFiRWwuaWQpIHtcclxuICAgICAgY2FzZSBcInNpZ25EcmF3VGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBsZXQgY2FudmFzUGFyZW50ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiLlNpZ24tQXJlYS5EcmF3LUFyZWFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHBhcmVudEJCb3ggPSBjYW52YXNQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKHBhcmVudEJCb3gud2lkdGggPCA1MDApIHtcclxuICAgICAgICAgIF9yZWFkZXJNb2Quc2lnbkNhbnZhcy5zZXREaW1lbnNpb25zKHtcclxuICAgICAgICAgICAgd2lkdGg6IHBhcmVudEJCb3gud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcGFyZW50QkJveC5oZWlnaHQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgX3JlYWRlck1vZC5zaWduQ2FudmFzLnNldERpbWVuc2lvbnMoe1xyXG4gICAgICAgICAgICB3aWR0aDogNTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMzNSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXMuY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwic2lnblRleHRUYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBzaWduVHlwZUxpc3QgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCIgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3RcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgVXRpbHMucmVtb3ZlQWxsQ2hpbGROb2RlKHNpZ25UeXBlTGlzdCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInN0YW1wU2lnblRhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgbGV0IGltYWdlRWwgPVxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBJbWFnZVRhZ1wiKTtcclxuICAgICAgICBpbWFnZUVsLnNyYyA9IFwiXCI7XHJcblxyXG4gICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wRmlsZUlucHV0XCIpLnNlbGVjdCgpO1xyXG4gICAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3N0YW1wRmlsZUlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwicmVnaXN0ZXJlZFNpZ25BcmVhXCI6IHtcclxuICAgICAgICAvLzEyMTUg7LaU6rCAXHJcbiAgICAgICAgX3JlYWRlck1vZC5jbGVhclNpZ25UeXBlTGlzdCgpOyAvL+ydtOuvuOyngGxpIOy0iOq4sO2ZlFxyXG4gICAgICAgIF9yZWFkZXJNb2QubG9hZFJlZ2lzdGVyZWRTaWduRGF0YSgpOyAvL+ydtOuvuOyngGxpIOyDneyEsVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gc2lnblJldmVydFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzaWduUmV2ZXJ0XHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqheuNsOydtO2EsOulvCDstIjquLDtmZTtlZzri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzaWduUmV2ZXJ0KCkge1xyXG4gICAgY29uc3QgcG9wdXBEaXYgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzaWduRWxlbWVudFwiKTtcclxuICAgIGxldCBjdXJyZW50VGFiRWwgPSBwb3B1cERpdi5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5TaWduLVRhYi1Db250YWluZXIgLlBvcHVwLVRhYi1NYWluIGxpLm9uXCJcclxuICAgICk7XHJcblxyXG4gICAgc3dpdGNoIChjdXJyZW50VGFiRWwuaWQpIHtcclxuICAgICAgY2FzZSBcInNpZ25EcmF3VGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBfcmVhZGVyTW9kLnNpZ25DYW52YXMuY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwic2lnblRleHRUYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBzaWduVHlwZUxpc3QgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCIgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3RcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgVXRpbHMucmVtb3ZlQWxsQ2hpbGROb2RlKHNpZ25UeXBlTGlzdCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInN0YW1wU2lnblRhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgbGV0IGltYWdlRWwgPVxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBJbWFnZVRhZ1wiKTtcclxuICAgICAgICBpbWFnZUVsLnNyYyA9IFwiXCI7XHJcbiAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBGaWxlSW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJyZWdpc3RlcmVkU2lnblRhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgbGV0IHNpZ25UeXBlTGlzdExpID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgIFwiIC5TaWduLUxheWVycG9wIC5UYWItQ29udGVudHMgLlNpZ24tQXJlYSAucmVnaXN0ZXJlZFNpZ25XcmFwIHVsLnNpZ25UeXBlTGlzdCBsaVwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgbGlJZHggPSAwOyBsaUlkeCA8IHNpZ25UeXBlTGlzdExpLmxlbmd0aDsgKytsaUlkeCkge1xyXG4gICAgICAgICAgbGV0IGxpRWwgPSBzaWduVHlwZUxpc3RMaS5pdGVtKGxpSWR4KTtcclxuICAgICAgICAgIGlmIChsaUVsLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgICAgIGxpRWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNsb3NlU2lnblBvcHVwXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2Nsb3NlU2lnblBvcHVwXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuqhe2MneyXheydhCDri6vripTri6QuXHJcbiAgICpcclxuICAgKiBARGF0ZSAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNsb3NlU2lnblBvcHVwKCkge1xyXG4gICAgbGV0IHBvcHVwRGl2ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIik7XHJcbiAgICBpZiAoIXBvcHVwRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIlRlbXBsYXRlLUhpZGVcIikpIHtcclxuICAgICAgcG9wdXBEaXYuY2xhc3NMaXN0LnRvZ2dsZShcIlRlbXBsYXRlLUhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY2xvbmVTaWduRGF0YVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNjbG9uZVNpZ25EYXRhXHJcbiAgICogQGRlc2NyaXB0aW9uICDshJzrqoUg7ZWE65OcIOygleuztOulvCDrs7XsgqztlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGREYXRhICAgRmllbGQgRGF0YVxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY2xvbmVTaWduRGF0YShmaWVsZERhdGEpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhfcmVhZGVyTW9kLnBhZ2VzSW5mbyk7XHJcblxyXG4gICAga2V5cy5mb3JFYWNoKChwYWdlS2V5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpZWxka2V5cyA9IE9iamVjdC5rZXlzKF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VLZXldLmZpZWxkcyk7XHJcbiAgICAgIGZpZWxka2V5cy5mb3JFYWNoKChmaWVsZEtleSkgPT4ge1xyXG4gICAgICAgIGxldCBmaWVsZCA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VLZXldLmZpZWxkc1tmaWVsZEtleV07XHJcbiAgICAgICAgaWYgKGZpZWxkS2V5ID09PSBmaWVsZERhdGEubV9pZCB8fCBmaWVsZC5tX3R5cGUgIT09IFwiU2lnbkZpZWxkXCIpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGQubV92YWx1ZSA9IGZpZWxkRGF0YS5tX3ZhbHVlO1xyXG5cclxuICAgICAgICBmaWVsZC5zaWduVHlwZSA9IGZpZWxkRGF0YS5zaWduVHlwZTtcclxuICAgICAgICBmaWVsZC5tX29yZ1NpZ25XaWR0aCA9IGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aDtcclxuICAgICAgICBmaWVsZC5tX29yZ1NpZ25IZWlnaHQgPSBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0O1xyXG4gICAgICAgIGZpZWxkLm1fc3RwTm8gPSBmaWVsZERhdGEubV9zdHBObztcclxuICAgICAgICBpZiAoZmllbGQuc2lnblR5cGUgPT09IFwicGF0aFwiIHx8IGZpZWxkLnNpZ25UeXBlID09PSBcInRleHRQYXRoXCIpIHtcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnbkxlZnQgPSBmaWVsZERhdGEubV9vcmdTaWduTGVmdDtcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnblRvcCA9IGZpZWxkRGF0YS5tX29yZ1NpZ25Ub3A7XHJcbiAgICAgICAgICBmaWVsZC5tX3N2Z0RhdGEgPSBmaWVsZERhdGEubV9zdmdEYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBzYXZlU2lnblBvcHVwRGF0YVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzYXZlU2lnblBvcHVwRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7ISc66qF7Yyd7JeF7JeQIOuWoOyeiOuKlCDrjbDsnbTthLDrpbwg7KCA7J6l7ZWY6rOgIOuLq+uKlOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgYXN5bmMgc2F2ZVNpZ25Qb3B1cERhdGEoKSB7XHJcbiAgICBjb25zdCBwb3B1cERpdiA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25FbGVtZW50XCIpO1xyXG4gICAgY29uc3QgbGF5ZXJQb3AgPSBwb3B1cERpdi5xdWVyeVNlbGVjdG9yKFwiLlNpZ24tTGF5ZXJwb3BcIik7XHJcbiAgICBjb25zdCBmaWVsZElkID0gbGF5ZXJQb3AuZ2V0QXR0cmlidXRlKFwiZmllbGRJZFwiKTtcclxuICAgIGNvbnN0IHBhZ2VObyA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcInBhZ2VOb1wiKTtcclxuICAgIGNvbnN0IHNpZ25XaWR0aCA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcInNpZ25XaWR0aFwiKTtcclxuICAgIGNvbnN0IHNpZ25IZWlnaHQgPSBsYXllclBvcC5nZXRBdHRyaWJ1dGUoXCJzaWduSGVpZ2h0XCIpO1xyXG5cclxuICAgIGxldCBmaWVsZERhdGEgPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlTm8gLSAxXS5nZXRGaWVsZChmaWVsZElkKTtcclxuXHJcbiAgICBsZXQgY3VycmVudFRhYkVsID0gcG9wdXBEaXYucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuU2lnbi1UYWItQ29udGFpbmVyIC5Qb3B1cC1UYWItTWFpbiBsaS5vblwiXHJcbiAgICApO1xyXG5cclxuICAgIHN3aXRjaCAoY3VycmVudFRhYkVsLmlkKSB7XHJcbiAgICAgIGNhc2UgXCJzaWduRHJhd1RhYkJ1dHRvblwiOiB7XHJcbiAgICAgICAgZmllbGREYXRhLm1fc3ZnRGF0YSA9IGJ0b2EodW5lc2NhcGUoX3JlYWRlck1vZC5zaWduQ2FudmFzLnRvU1ZHKCkpKTtcclxuICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IEpTT04uc3RyaW5naWZ5KF9yZWFkZXJNb2Quc2lnbkNhbnZhcyk7XHJcbiAgICAgICAgZmllbGREYXRhLnNpZ25UeXBlID0gXCJwYXRoXCI7XHJcbiAgICAgICAgbGV0IG9iamVjdHNCQm94ID0gVXRpbHMubWVyZ2VPYmplY3RzUmVjdChfcmVhZGVyTW9kLnNpZ25DYW52YXMpO1xyXG4gICAgICAgIGlmIChvYmplY3RzQkJveCAhPSBudWxsKXtcclxuICAgICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgb2JqZWN0c0JCb3gucmlnaHQgLSBvYmplY3RzQkJveC5sZWZ0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQgPSBNYXRoLmFicyhcclxuICAgICAgICAgICAgICBvYmplY3RzQkJveC5ib3R0b20gLSBvYmplY3RzQkJveC50b3BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkxlZnQgPSBvYmplY3RzQkJveC5sZWZ0O1xyXG4gICAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduVG9wID0gb2JqZWN0c0JCb3gudG9wO1xyXG4gICAgICAgICAgICBmaWVsZERhdGEubV9zdHBObyA9IFwiXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV9zdmdEYXRhID0gXCJcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwiXCI7XHJcbiAgICAgICAgICBhbGVydChg7J6F66Cl65CcIFwi7Iu47J24XCLsnbQg7JeG7Iq164uI64ukLmApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBVdGlscy5hZGRPYmplY3RzVG9DYW52YXMoX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUsIGZpZWxkRGF0YSwgbnVsbCwgc2lnbldpZHRoLCBzaWduSGVpZ2h0LCBvYmplY3RzLFxyXG4gICAgICAgIC8vICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGgsIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQpO1xyXG4gICAgICAgIC8qIDExMDggbGJ3IDog7J286rSE7ISc66qFIOq4sOuKpSDsoJzqsbAgKi9cclxuICAgICAgICAvL19yZWFkZXJNb2QuY2xvbmVTaWduRGF0YShmaWVsZERhdGEpO1xyXG4gICAgICAgIF9yZWFkZXJNb2QucGFnZVJlZnJlc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwic2lnblRleHRUYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX3N2Z0RhdGEgPSBidG9hKHVuZXNjYXBlKF9yZWFkZXJNb2QudGV4dFNpZ25DYW52YXMudG9TVkcoKSkpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX3ZhbHVlID0gSlNPTi5zdHJpbmdpZnkoX3JlYWRlck1vZC50ZXh0U2lnbkNhbnZhcyk7XHJcbiAgICAgICAgZmllbGREYXRhLnNpZ25UeXBlID0gXCJ0ZXh0UGF0aFwiO1xyXG4gICAgICAgIGxldCBzZWxlY3RUZXh0U2lnbkVsID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiIC5zaWduVHh0V3JhcCA+IHVsLnNpZ25UeXBlTGlzdCA+IGxpLm9uXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBjYW52YXNXcmFwID0gc2VsZWN0VGV4dFNpZ25FbC5xdWVyeVNlbGVjdG9yKFwiLmNhbnZhc193cmFwXCIpO1xyXG5cclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGggPSBjYW52YXNXcmFwLmdldEF0dHJpYnV0ZShcInBhdGhXaWR0aFwiKTtcclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0ID0gY2FudmFzV3JhcC5nZXRBdHRyaWJ1dGUoXCJwYXRoSGVpZ2h0XCIpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25MZWZ0ID0gY2FudmFzV3JhcC5nZXRBdHRyaWJ1dGUoXCJwYXRoTGVmdFwiKTtcclxuICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduVG9wID0gY2FudmFzV3JhcC5nZXRBdHRyaWJ1dGUoXCJwYXRoVG9wXCIpO1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX3N0cE5vID0gXCJcIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWVsZERhdGEubV92YWx1ZSk7XHJcbiAgICAgICAgLy8gVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLCBmaWVsZERhdGEsIG51bGwsIHNpZ25XaWR0aCwgc2lnbkhlaWdodCwgb2JqZWN0cyxcclxuICAgICAgICAvLyAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoLCBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0KTtcclxuICAgICAgICAvKiAxMTA4IGxidyA6IOydvOq0hOyEnOuqhSDquLDriqUg7KCc6rGwICovXHJcbiAgICAgICAgLy8gX3JlYWRlck1vZC5jbG9uZVNpZ25EYXRhKGZpZWxkRGF0YSk7XHJcbiAgICAgICAgX3JlYWRlck1vZC5wYWdlUmVmcmVzaCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXNlIFwic3RhbXBTaWduVGFiQnV0dG9uXCI6IHtcclxuICAgICAgICBsZXQgaW1hZ2VFbCA9XHJcbiAgICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzdGFtcEltYWdlVGFnXCIpO1xyXG4gICAgICAgIGlmIChpbWFnZUVsLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICBhbGVydChg7ISg7YOd65CcIFwi7J2066+47KeAXCLqsIAg7JeG7Iq164uI64ukLmApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IGltYWdlRWwuc3JjO1xyXG4gICAgICAgIGxldCBpbWFnZU9iaiA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1hZ2VFbCk7XHJcbiAgICAgICAgZmllbGREYXRhLnNpZ25UeXBlID0gXCJpbWFnZVwiO1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IGltYWdlT2JqLndpZHRoO1xyXG4gICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQgPSBpbWFnZU9iai5oZWlnaHQ7XHJcbiAgICAgICAgZmllbGREYXRhLm1fc3RwTm8gPSBcIlwiO1xyXG4gICAgICAgIC8vIFV0aWxzLmFkZE9iamVjdHNUb0NhbnZhcyhfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSwgZmllbGREYXRhLCBudWxsLCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIFtpbWFnZU9ial0sXHJcbiAgICAgICAgLy8gICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCwgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCk7XHJcbiAgICAgICAgLyogMTEwOCBsYncgOiDsnbzqtITshJzrqoUg6riw64qlIOygnOqxsCAqL1xyXG4gICAgICAgIC8vIF9yZWFkZXJNb2QuY2xvbmVTaWduRGF0YShmaWVsZERhdGEpO1xyXG4gICAgICAgIF9yZWFkZXJNb2QucGFnZVJlZnJlc2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwicmVnaXN0ZXJlZFNpZ25UYWJCdXR0b25cIjoge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZERhdGFOb2RlID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiIC5TaWduLUxheWVycG9wIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5UYWItQ29udGVudHMgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlNpZ24tQXJlYSBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVnaXN0ZXJlZFNpZ25XcmFwIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLnNpZ25UeXBlTGlzdCBsaS5vblwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWREYXRhTm9kZSA9PT0gbnVsbCB8fCBzZWxlY3RlZERhdGFOb2RlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICAgIGFsZXJ0KGDshKDtg53rkJwgXCLrk7HroZ3rkJwg7J2066+47KeAXCLqsIAg7JeG7Iq164uI64ukLmApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2FudmFzV3JhcE5vZGUgPSBzZWxlY3RlZERhdGFOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY2FudmFzX3dyYXBcIik7XHJcbiAgICAgICAgbGV0IHJlZ2lzdGVyZWRJZHggPSBjYW52YXNXcmFwTm9kZS5nZXRBdHRyaWJ1dGUoXCJyZWdpc3RlcmVkSWR4XCIpO1xyXG4gICAgICAgIGxldCBzZWxldGVkRGF0YSA9IF9yZWFkZXJNb2QucmVnaXN0ZXJlZFNpZ25EYXRhc1tyZWdpc3RlcmVkSWR4XTtcclxuICAgICAgICAvL2ZpZWxkRGF0YS5tX3N0cE5vID0gY2FudmFzV3JhcE5vZGUuZ2V0QXR0cmlidXRlKFwic3RwTk9cIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxldGVkRGF0YS5pbWdfdHlwZSk7XHJcbiAgICAgICAgaWYgKHNlbGV0ZWREYXRhLmltZ190eXBlID09PSBcIklNR1wiKSB7XHJcbiAgICAgICAgICBsZXQgaW1nTm9kZSA9IGNhbnZhc1dyYXBOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IHNlbGV0ZWREYXRhLmltZ19zcmM7XHJcbiAgICAgICAgICBsZXQgaW1hZ2VPYmogPSBuZXcgZmFicmljLkltYWdlKGltZ05vZGUpO1xyXG4gICAgICAgICAgZmllbGREYXRhLnNpZ25UeXBlID0gXCJpbWFnZVwiO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoID0gaW1hZ2VPYmoud2lkdGg7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0ID0gaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgICAgLy8gVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLCBmaWVsZERhdGEsIG51bGwsIHNpZ25XaWR0aCwgc2lnbkhlaWdodCwgW2ltYWdlT2JqXSxcclxuICAgICAgICAgIC8vICAgICBmaWVsZERhdGEubV9vcmdTaWduV2lkdGgsIGZpZWxkRGF0YS5tX29yZ1NpZ25IZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZXRlZERhdGEuaW1nX3R5cGUgPT09IFwiU1ZHXCIpIHtcclxuICAgICAgICAgIGxldCBzdGF0aWNDYW52YXMgPSBVdGlscy5hZGRTaWduU3ZnVG9DYW52YXMoXHJcbiAgICAgICAgICAgIGZpZWxkRGF0YSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgc2lnbldpZHRoLFxyXG4gICAgICAgICAgICBzaWduSGVpZ2h0LFxyXG4gICAgICAgICAgICBzZWxldGVkRGF0YS5pbWdfc3JjXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fc3ZnRGF0YSA9IGJ0b2EodW5lc2NhcGUoc3RhdGljQ2FudmFzLnRvU1ZHKCkpKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX3ZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc3RhdGljQ2FudmFzKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwicGF0aFwiO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoID0gc2VsZXRlZERhdGEub3JnU2lnbldpZHRoO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCA9IHNlbGV0ZWREYXRhLm9yZ1NpZ25IZWlnaHQ7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduTGVmdCA9IHNlbGV0ZWREYXRhLm9yZ1NpZ25MZWZ0O1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnblRvcCA9IHNlbGV0ZWREYXRhLm9yZ1NpZ25Ub3A7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGV0ZWREYXRhLmltZ190eXBlID09PSBcIlVSTFwiKSB7XHJcbiAgICAgICAgICBsZXQgaW1nTm9kZSA9IGNhbnZhc1dyYXBOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IHNlbGV0ZWREYXRhLmltZ19zcmM7XHJcblxyXG4gICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgIC8vICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNoZWNrSW1hZ2VWYWxpZGl0eShzZWxldGVkRGF0YS5pbWdfc3JjKTtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCLsnbTrr7jsp4AgVVJM7J20IOycoO2aqO2VqeuLiOuLpC5cIik7XHJcbiAgICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gICAgIGFsZXJ0KFwi7ISg7YOd7ZWY7IugIOuTseuhneuQnCDsnbTrr7jsp4DsnZggVVJM7JeQIOygkeq3vO2VoCDsiJgg7JeG7Iq164uI64ukLlxcbiAoQ09SU+ygleyxhSDsnITrsLAg7Zi57J2AIOyemOuqu+uQnCBVUkwpXCIpO1xyXG4gICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgIC8vY29udmVydEltYWdlVG9CYXNlNjQg7ZWo7IiYIO2YuOy2nO2VmOyXrCDsnbTrr7jsp4DrpbwgYmFzZTY066GcIOuzgO2ZmO2VmOqzoCDqsrDqs7zrpbwg7LKY66asXHJcbiAgICAgICAgICAvLyBhd2FpdCBfcmVhZGVyTW9kLmNvbnZlcnRJbWFnZVRvQmFzZTY0KHNlbGV0ZWREYXRhLmltZ19zcmMpXHJcbiAgICAgICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKGJhc2U2NFN0cmluZykge1xyXG4gICAgICAgICAgLy8gICAgICAgZmllbGREYXRhLm1fdmFsdWUgPSBiYXNlNjRTdHJpbmc7XHJcbiAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAvLyAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgLy8gICAgICAgYWxlcnQoXCLshKDtg53tlZjsi6Ag65Ox66Gd65CcIOydtOuvuOyngOydmCBVUkzsl5Ag7KCR6re87ZWgIOyImCDsl4bsirXri4jri6QuXFxuIChDT1JT7KCV7LGFIOychOuwsCDtmLnsnYAg7J6Y66q765CcIFVSTClcIilcclxuICAgICAgICAgIC8vICAgfSk7XHJcblxyXG4gICAgICAgICAgbGV0IGltYWdlT2JqID0gbmV3IGZhYnJpYy5JbWFnZShpbWdOb2RlKTtcclxuICAgICAgICAgIGZpZWxkRGF0YS5zaWduVHlwZSA9IFwiaW1hZ2VcIjtcclxuICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCA9IGltYWdlT2JqLndpZHRoO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCA9IGltYWdlT2JqLmhlaWdodDtcclxuICAgICAgICAgIC8vIFV0aWxzLmFkZE9iamVjdHNUb0NhbnZhcyhfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSwgZmllbGREYXRhLCBudWxsLCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIFtpbWFnZU9ial0sXHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgIGZpZWxkRGF0YS5tX29yZ1NpZ25XaWR0aCwgZmllbGREYXRhLm1fb3JnU2lnbkhlaWdodCk7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHNlbGV0ZWREYXRhLmltZ190eXBlID09PSBcIkJBU0U2NFwiKSB7XHJcbiAgICAgICAgICBsZXQgaW1nTm9kZSA9IGNhbnZhc1dyYXBOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV92YWx1ZSA9IHNlbGV0ZWREYXRhLmltZ19zcmM7XHJcbiAgICAgICAgICBsZXQgaW1hZ2VPYmogPSBuZXcgZmFicmljLkltYWdlKGltZ05vZGUpO1xyXG4gICAgICAgICAgZmllbGREYXRhLnNpZ25UeXBlID0gXCJpbWFnZVwiO1xyXG4gICAgICAgICAgZmllbGREYXRhLm1fb3JnU2lnbldpZHRoID0gaW1hZ2VPYmoud2lkdGg7XHJcbiAgICAgICAgICBmaWVsZERhdGEubV9vcmdTaWduSGVpZ2h0ID0gaW1hZ2VPYmouaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgJ1vrk7HroZ3rkJwg7ISc66qFXSBKU09OIO2YleyLnSDspJEgaW1nX3R5cGXsnbQgXCInICtcclxuICAgICAgICAgICAgICBzZWxldGVkRGF0YS5pbWdfdHlwZSArXHJcbiAgICAgICAgICAgICAgJ1wi7J2AIOyymOumrCDtlaDsiJgg7JeG7Iq164uI64ukLidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIDExMDggbGJ3IDog7J286rSE7ISc66qFIOq4sOuKpSDsoJzqsbAgKi9cclxuICAgICAgICAvLyBfcmVhZGVyTW9kLmNsb25lU2lnbkRhdGEoZmllbGREYXRhKTtcclxuICAgICAgICBfcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBvcHVwRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIlRlbXBsYXRlLUhpZGVcIikpIHtcclxuICAgICAgcG9wdXBEaXYuY2xhc3NMaXN0LnRvZ2dsZShcIlRlbXBsYXRlLUhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gZXhwb3J0RmllbGREYXRhXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2V4cG9ydEZpZWxkRGF0YVxyXG4gICAqIEBkZXNjcmlwdGlvbiAgRmllbGQg7KCV67O0IOyghOyytOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEZpZWxkIOygleuztCBKc29uIFN0cmluZ1xyXG4gICAqIEBEYXRlIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgZXhwb3J0RmllbGREYXRhKCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBzaWduVGV4dENyZWF0ZUtleVVwRXZlbnRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2Qjc2lnblRleHRDcmVhdGVLZXlVcEV2ZW50XHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICog7ISc66qF7Yyd7JeF7J2YIO2FjeyKpO2KuCDshJzrqoUg7YOt7J2YIGlucHV07J2YIGtleSB1cCDsnbTrsqTtirjroZwg7JeU7YSw7YKkIOyeheugpeyLnCDsnoXroKUg67KE7Yq87J20IOuIhOuluOqyg+qzvCDrj5nsnbztlZwg64+Z7J6R7J2EIO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHNpZ25UZXh0Q3JlYXRlS2V5VXBFdmVudChldnQpIHtcclxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgX3JlYWRlck1vZC5zaWduVGV4dENyZWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHNpZ25UZXh0Q3JlYXRlXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI3NpZ25UZXh0Q3JlYXRlXHJcbiAgICogQGRlc2NyaXB0aW9uIOyEnOuyhOuhnOu2gO2EsCDthY3siqTtirgg7ISc66qF642w7J207YSw66W8IOuwm+uKlOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHNpZ25UZXh0Q3JlYXRlKCkge1xyXG4gICAgY29uc3QgdGV4dFZhbCA9XHJcbiAgICAgIF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI3NpZ25UZXh0SW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgc2lnblR5cGVMaXN0ID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIgLlNpZ24tTGF5ZXJwb3AgLlRhYi1Db250ZW50cyAuU2lnbi1BcmVhIC5zaWduVHh0V3JhcCB1bC5zaWduVHlwZUxpc3RcIlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IDE0NTtcclxuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IDc1O1xyXG5cclxuICAgIFV0aWxzLnJlbW92ZUFsbENoaWxkTm9kZShzaWduVHlwZUxpc3QpO1xyXG4gICAgdmFyIGNvbnRlbnRDaGlwaGVyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgY3NyZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIgbWV0YVtuYW1lPV9jc3JmXVwiKS5jb250ZW50O1xyXG4gICAgZm9yICh2YXIgc2lnbklkeCA9IDA7IHNpZ25JZHggPCA5OyBzaWduSWR4KyspIHtcclxuICAgICAgdmFyIGJvZHlKc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNpZ25hdHVyZVRleHQ6IHRleHRWYWwsXHJcbiAgICAgICAgZm9udEluZGV4OiBzaWduSWR4LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHdpbmRvdy5pc1BhcmFtZXRlckVuY3lwdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnRlbnRDaGlwaGVyID0gdHJ1ZTtcclxuICAgICAgICBib2R5SnNvblN0ciA9IENpcGhlclV0aWwuZW5jcnlwdChib2R5SnNvblN0ciwgXCJBRVNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIFwiL3VpL2JwL2Vkb2MvZWZvcm0vY3JlYXRlVGV4dFNpZ25hdHVyZXNCeU1haWwuZG9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIngtY3NyZi10b2tlblwiOiBjc3JmLFxyXG4gICAgICAgICAgICBcIngtcmVxdWVzdGVkLXdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxyXG4gICAgICAgICAgICBcImNvbnRlbnQtY2hpcGhlclwiOiBjb250ZW50Q2hpcGhlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogYm9keUpzb25TdHIsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZldGNoKFwiY3JlYXRlVGV4dFNpZ25hdHVyZXMuZG9cIlxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRfc3RhdHVzICE9PSBcIlNcIikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGxpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICBsZXQgY2FudmFzV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLmNsYXNzTmFtZSA9IFwiY2FudmFzX3dyYXBcIjtcclxuICAgICAgICAgIGxldCBjYW52YXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgICBsZXQgc2lnblBhdGggPSBuZXcgZmFicmljLlBhdGgoZGF0YS5zaWduYXR1cmVfZGF0YSwge1xyXG4gICAgICAgICAgICBmaWxsOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHN0YXRpY0NhbnZzID0gVXRpbHMuYWRkT2JqZWN0c1RvQ2FudmFzKFxyXG4gICAgICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgY2FudmFzRWwsXHJcbiAgICAgICAgICAgIGNhbnZhc1dpZHRoIC0gMTAsXHJcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCAtIDEwLFxyXG4gICAgICAgICAgICBbc2lnblBhdGhdLFxyXG4gICAgICAgICAgICBzaWduUGF0aC53aWR0aCxcclxuICAgICAgICAgICAgc2lnblBhdGguaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNhbnZhc0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGxldCBsaUxpc3QgPSBzaWduVHlwZUxpc3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBsaUlkeCA9IDA7IGxpSWR4IDwgbGlMaXN0Lmxlbmd0aDsgKytsaUlkeCkge1xyXG4gICAgICAgICAgICAgIGxldCBsaUVsID0gbGlMaXN0Lml0ZW0obGlJZHgpO1xyXG4gICAgICAgICAgICAgIGlmIChsaUVsLmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsaUVsLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRhcmdldExpID0gZXZ0LnRhcmdldC5jbG9zZXN0KFwibGlcIik7XHJcbiAgICAgICAgICAgIHRhcmdldExpLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcclxuICAgICAgICAgICAgX3JlYWRlck1vZC50ZXh0U2lnbkNhbnZhcy5jbGVhcigpO1xyXG4gICAgICAgICAgICBVdGlscy5jbG9uZUZhYnJpY0NhbnZhcyhcclxuICAgICAgICAgICAgICBfcmVhZGVyTW9kLnRleHRTaWduQ2FudmFzLFxyXG4gICAgICAgICAgICAgIHN0YXRpY0NhbnZzLnRvT2JqZWN0KCkub2JqZWN0c1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjYW52YXNXcmFwLnNldEF0dHJpYnV0ZShcImZvbnROYW1lXCIsIGRhdGEuZm9udF9uYW1lKTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicGF0aFdpZHRoXCIsIHNpZ25QYXRoLndpZHRoKTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicGF0aEhlaWdodFwiLCBzaWduUGF0aC5oZWlnaHQpO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5zZXRBdHRyaWJ1dGUoXCJwYXRoTGVmdFwiLCBzaWduUGF0aC5sZWZ0KTtcclxuICAgICAgICAgIGNhbnZhc1dyYXAuc2V0QXR0cmlidXRlKFwicGF0aFRvcFwiLCBzaWduUGF0aC50b3ApO1xyXG4gICAgICAgICAgY2FudmFzV3JhcC5hcHBlbmRDaGlsZChjYW52YXNFbCk7XHJcbiAgICAgICAgICBsaUVsLmFwcGVuZENoaWxkKGNhbnZhc1dyYXApO1xyXG4gICAgICAgICAgc2lnblR5cGVMaXN0LmFwcGVuZENoaWxkKGxpRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHN0YW1wRmlsZVNlbGVjdFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzdGFtcEZpbGVTZWxlY3RcclxuICAgKiBAZGVzY3JpcHRpb24gIOydtOuvuOyngCDsnbjsnqUg7ISg7YOd7ZWY6riwIOuyhO2KvOydhCDriIzroIDsnYQg65WM7J2YIOyymOumrOulvCDtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgT2JqZWN0XHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzdGFtcEZpbGVTZWxlY3QoZXZ0KSB7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzdGFtcEZpbGVJbnB1dFwiKS5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIHN0YW1wRmlsZVNlbGVjdFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlck1vZCNzdGFtcEZpbGVTZWxlY3RcclxuICAgKiBAZGVzY3JpcHRpb24gIOydtOuvuOyngCDsnbjsnqUg7YyM7J287J2EIOyEoO2Dne2WiOydhCDrlYwg7LKY66as66W8IO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAgRXZlbnQgT2JqZWN0XHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBzdGFtcEltYWdlU2VsZWN0ZWQoZXZ0KSB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IGV2dC50YXJnZXQuZmlsZXM7XHJcbiAgICBjb25zdCBmaWxlID0gZmlsZUxpc3RbMF07XHJcbiAgICBpZiAoZmlsZSA9PT0gdW5kZWZpbmVkIHx8IGZpbGUgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xyXG4gICAgICBpZiAoX3JlYWRlck1vZC5jdXN0b21BbGVydEZ1bmMgIT09IG51bGwpIHtcclxuICAgICAgICBfcmVhZGVyTW9kLmN1c3RvbUFsZXJ0RnVuYyhcIuydtOuvuOyngOunjCDssqjrtoAg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIGxldCBpbWFnZUVsID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBJbWFnZVRhZ1wiKTtcclxuICAgICAgaW1hZ2VFbC5zcmMgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHlcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJNb2QjaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eVxyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTsiJgg7ZWE65Oc6rCAIOu5hOyWtOyeiOuKlOyngCDsl6zrtoDrpbwg67CY7ZmY7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0g7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aAXHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSgpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhfcmVhZGVyTW9kLnBhZ2VzSW5mbyk7XHJcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzLmxlbmd0aDsgKytpZHgpIHtcclxuICAgICAgY29uc3QgcGFnZURhdGEgPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1trZXlzW2lkeF1dO1xyXG5cclxuICAgICAgbGV0IHBhZ2VOdW1iZXIgPSBwYXJzZUludChrZXlzW2lkeF0pICsgMTtcclxuICAgICAgbGV0IHBnTm9kZSA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIgW2RhdGEtcGFnZS1udW1iZXI9J1wiICsgcGFnZU51bWJlciArIFwiJ11cIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgaXNMb2FkZWQgPSBwZ05vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1sb2FkZWRcIik7XHJcbiAgICAgIGNvbnN0IGZpZWxkS2V5cyA9IE9iamVjdC5rZXlzKHBhZ2VEYXRhLmZpZWxkcyk7XHJcbiAgICAgIGlmIChmaWVsZEtleXMubGVuZ3RoID4gMCAmJiAoaXNMb2FkZWQgPT09IG51bGwgfHwgaXNMb2FkZWQgPT09IFwiZmFsc2VcIikpIHtcclxuICAgICAgICBfcmVhZGVyTW9kLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYWdlRGF0YS5pc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5KCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUmVhZGVyTW9kZShtb2RlKSB7XHJcbiAgICBpZiAoX3JlYWRlck1vZC5yZWFkZXJNb2RlID09PSBtb2RlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9IG1vZGU7XHJcbiAgICBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZVxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIENPTlNUQU5UUy5SRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTUylcclxuICAgICAgLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9PT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9JTlBVVF9NT0RFKSB7XHJcbiAgICAgICAgICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUikpIHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWxheWVyLmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpKSB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfTUVNT19MQVlFUl9DTEFTUylcclxuICAgICAgLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgX3JlYWRlck1vZC5yZWFkZXJNb2RlID09PSBDT05TVEFOVFMuUkVBREVSX0ZJRUxEX01FTU9fTUFLRV9NT0RFIHx8XHJcbiAgICAgICAgICBfcmVhZGVyTW9kLnJlYWRlck1vZGUgPT09IENPTlNUQU5UUy5SRUFERVJfRklFTERfTUVNT19NT0RFXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAobGF5ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUikpIHtcclxuICAgICAgICAgICAgbGF5ZXIuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoIWxheWVyLmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuTk9fRVZFTlRfTEFZRVIpKSB7XHJcbiAgICAgICAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLk5PX0VWRU5UX0xBWUVSKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3JlYWRlck1vZC50ZW1wbGF0ZU1vdXNlVXBFdmVudCk7XHJcbiAgICAgICAgaWYgKF9yZWFkZXJNb2QucmVhZGVyTW9kZSA9PT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9NRU1PX01BS0VfTU9ERSkge1xyXG4gICAgICAgICAgbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgX3JlYWRlck1vZC50ZW1wbGF0ZU1vdXNlVXBFdmVudCk7XHJcbiAgICAgICAgICBsYXllci5zdHlsZS5jdXJzb3IgPSBcInRleHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGF5ZXIuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHRlbXBsYXRlTW91c2VVcEV2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCBwYWdlTm8gPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wYWdlXCIpLmRhdGFzZXQucGFnZU51bWJlcjtcclxuXHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IF9yZWFkZXJNb2QucGRmVmlld2VyLl9wYWdlc1tOdW1iZXIocGFnZU5vKSAtIDFdO1xyXG4gICAgbGV0IG1lbW8gPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtZW1vLm1faWQgPSBVdGlscy5nZW5lcmF0ZV91dWlkdjQoKTtcclxuICAgIGxldCBwYWdlUG9pbnQgPSB2aWV3cG9ydC5nZXRQYWdlUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XHJcbiAgICBtZW1vLm1fcGRmWCA9IHBhZ2VQb2ludFswXTtcclxuICAgIG1lbW8ubV9wZGZZID0gcGFnZVBvaW50WzFdO1xyXG4gICAgbGV0IGRlZmF1bHRXaWR0aCA9IDEwMDtcclxuICAgIGxldCBkZWZhdWx0SGVpZ2h0ID0gMTAwO1xyXG4gICAgbGV0IHBhZ2VQb2ludDIgPSB2aWV3cG9ydC5nZXRQYWdlUG9pbnQoXHJcbiAgICAgIGV2ZW50Lm9mZnNldFggKyBkZWZhdWx0V2lkdGgsXHJcbiAgICAgIGV2ZW50Lm9mZnNldFkgKyBkZWZhdWx0SGVpZ2h0XHJcbiAgICApO1xyXG4gICAgbWVtby5tX3BkZlgyID0gcGFnZVBvaW50MlswXTtcclxuICAgIG1lbW8ubV9wZGZZMiA9IHBhZ2VQb2ludDJbMV07XHJcbiAgICBtZW1vLm1fd2lkdGggPSBkZWZhdWx0V2lkdGg7XHJcbiAgICBtZW1vLm1faGVpZ2h0ID0gZGVmYXVsdEhlaWdodDtcclxuICAgIG1lbW8ubV90eXBlID0gXCJNZW1vRmllbGRcIjtcclxuICAgIG1lbW8ubV9mb250U2l6ZSA9IF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLm1lbW9Qcm9wZXRpZXMuZm9udFNpemU7XHJcbiAgICBtZW1vLm1fZm9udE5hbWUgPSBfcmVhZGVyTW9kLnBhZ2VzSW5mb1twYWdlTm8gLSAxXS5tZW1vUHJvcGV0aWVzLmZvbnRGYW1pbHk7XHJcbiAgICBtZW1vLm1fZm9udENvbG9yID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0ubWVtb1Byb3BldGllcy5mb250Q29sb3I7XHJcbiAgICBtZW1vLm1fYmFja0NvbG9yID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0ubWVtb1Byb3BldGllcy5iYWNrQ29sb3I7XHJcbiAgICBtZW1vLm1fa2luZCA9IFwidGV4dFwiO1xyXG4gICAgbWVtby5tX2lzUmVtb3ZlZCA9IGZhbHNlO1xyXG4gICAgbWVtby5tX2ZpZWxkSWQgPSBtZW1vLm1faWQ7XHJcbiAgICBtZW1vLm1fcmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIG1lbW8ubV90ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIG1lbW8ubV90ZXh0VmV0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuICAgIG1lbW8ubV9ib2xkID0gX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0ubWVtb1Byb3BldGllcy5pc0JvbGQ7XHJcbiAgICBtZW1vLm1fdmFsdWUgPSBcIlwiO1xyXG4gICAgbWVtby5tX3BhZ2VObyA9IHBhZ2VObztcclxuICAgIF9yZWFkZXJNb2QucGFnZXNJbmZvW3BhZ2VObyAtIDFdLnB1c2hNZW1vKG1lbW8ubV9pZCwgbWVtbyk7XHJcbiAgICBpZiAoXHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MgPT09XHJcbiAgICAgICAgdW5kZWZpbmVkIHx8XHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MgPT09IG51bGxcclxuICAgICkge1xyXG4gICAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zID0gW107XHJcbiAgICB9XHJcbiAgICBfcmVhZGVyTW9kLnRlbXBsYXRlRGF0YS5mb3JtZXJMaXN0WzBdLnBhZ2VzW3BhZ2VObyAtIDFdLm1lbW9zLnB1c2gobWVtbyk7XHJcbiAgICBfcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcblxyXG4gICAgX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvblwiKVxyXG4gICAgICAuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVCdG5DbGlja0V2ZW50TGlzdGVuZXIoZXZ0KSB7XHJcbiAgICBpZiAoIWV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5GSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWVtb0lkID0gZXZ0LnRhcmdldC5kYXRhc2V0Lm1lbW9JZDtcclxuICAgIGNvbnN0IHBhZ2VObyA9IGV2dC50YXJnZXQuZGF0YXNldC5tZW1vUGFnZU5vO1xyXG4gICAgZXZ0LnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgX3JlYWRlck1vZC5wYWdlc0luZm9bcGFnZU5vIC0gMV0ucmVtb3ZlTWVtbyhtZW1vSWQpO1xyXG4gICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlc1twYWdlTm8gLSAxXS5tZW1vcyA9XHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MuZmlsdGVyKFxyXG4gICAgICAgIChtZW1vKSA9PiBtZW1vLm1faWQgIT09IG1lbW9JZFxyXG4gICAgICApO1xyXG5cclxuICAgIF9yZWFkZXJNb2QuaGlkZU1lbW9Qcm9wZXJ0aWVzKCk7XHJcbiAgfVxyXG5cclxuICBtZW1vUHJvcGVydHlCdG5DbGlja0V2ZW50TGlzdGVuZXIoZXZ0KSB7XHJcbiAgICBpZiAoIWV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5NRU1PX1BST1BFUlRZX0JVVFRPTl9DTEFTUykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lbW9JZCA9IGV2dC50YXJnZXQuZGF0YXNldC5tZW1vSWQ7XHJcbiAgICBjb25zdCBwYWdlTm8gPSBldnQudGFyZ2V0LmRhdGFzZXQubWVtb1BhZ2VObztcclxuICAgIGxldCBjdXJNZW1vID0gbnVsbDtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBtZW1vSWR4ID0gMDtcclxuICAgICAgbWVtb0lkeCA8XHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MubGVuZ3RoO1xyXG4gICAgICArK21lbW9JZHhcclxuICAgICkge1xyXG4gICAgICBsZXQgbWVtbyA9XHJcbiAgICAgICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlc1twYWdlTm8gLSAxXS5tZW1vc1ttZW1vSWR4XTtcclxuICAgICAgaWYgKG1lbW8ubV9pZCA9PT0gbWVtb0lkKSB7XHJcbiAgICAgICAgY3VyTWVtbyA9IFV0aWxzLmNsb25lT2JqZWN0KG1lbW8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3JlYWRlck1vZC5zaG93TWVtb1Byb3BlcnRpZXMoZXZ0LCBjdXJNZW1vLCBudWxsKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGhpZGVNZW1vUHJvcGVydGllcygpIHtcclxuICAgIGxldCBvbGRBdHRyID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIjXCIgKyBDT05TVEFOVFMuTUFJTl9HUk9VUF9OQU1FICsgXCIgLkVkaXRvci1BdHRyaWJ1dGVcIlxyXG4gICAgKTtcclxuICAgIGlmIChvbGRBdHRyICE9PSBudWxsICYmIG9sZEF0dHIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvbGRBdHRyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwbHlNZW1vUHJvcGVydGllcyhcclxuICAgIG1lbW9JZCxcclxuICAgIHBhZ2VObyxcclxuICAgIGZvbnRGYW1pbHksXHJcbiAgICBmb250U2l6ZSxcclxuICAgIGlzQm9sZCxcclxuICAgIGZvbnRDb2xvcixcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIGlzQWxsXHJcbiAgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZW1vSWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGFnZU5vKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvbnRGYW1pbHkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9udFNpemUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNCb2xkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvbnRDb2xvcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXNBbGwpO1xyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBtZW1vSWR4ID0gMDtcclxuICAgICAgbWVtb0lkeCA8XHJcbiAgICAgIF9yZWFkZXJNb2QudGVtcGxhdGVEYXRhLmZvcm1lckxpc3RbMF0ucGFnZXNbcGFnZU5vIC0gMV0ubWVtb3MubGVuZ3RoO1xyXG4gICAgICArK21lbW9JZHhcclxuICAgICkge1xyXG4gICAgICBsZXQgbWVtbyA9XHJcbiAgICAgICAgX3JlYWRlck1vZC50ZW1wbGF0ZURhdGEuZm9ybWVyTGlzdFswXS5wYWdlc1twYWdlTm8gLSAxXS5tZW1vc1ttZW1vSWR4XTtcclxuICAgICAgaWYgKGlzQWxsKSB7XHJcbiAgICAgICAgbWVtby5tX2ZvbnROYW1lID0gZm9udEZhbWlseTtcclxuICAgICAgICBtZW1vLm1fZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICBtZW1vLm1fZm9udENvbG9yID0gZm9udENvbG9yO1xyXG4gICAgICAgIG1lbW8ubV9ib2xkID0gaXNCb2xkO1xyXG4gICAgICAgIG1lbW8ubV9iYWNrQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1lbW8ubV9pZCA9PT0gbWVtb0lkKSB7XHJcbiAgICAgICAgICBtZW1vLm1fZm9udE5hbWUgPSBmb250RmFtaWx5O1xyXG4gICAgICAgICAgbWVtby5tX2ZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgICBtZW1vLm1fZm9udENvbG9yID0gZm9udENvbG9yO1xyXG4gICAgICAgICAgbWVtby5tX2JvbGQgPSBpc0JvbGQ7XHJcbiAgICAgICAgICBtZW1vLm1fYmFja0NvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TWVtb1Byb3BlcnRpZXMoZXZ0LCBtZW1vRGF0YSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICBsZXQgb2xkQXR0ciA9IF9yZWFkZXJNb2QucmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiI1wiICsgQ09OU1RBTlRTLk1BSU5fR1JPVVBfTkFNRSArIFwiIC5FZGl0b3ItQXR0cmlidXRlXCJcclxuICAgICk7XHJcbiAgICBpZiAob2xkQXR0ciAhPT0gbnVsbCAmJiBvbGRBdHRyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2xkQXR0ci5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJvcGVydGlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICB2YXIgcGFuZWwgPSBVdGlscy5jcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGUoKTtcclxuXHJcbiAgICB2YXIgZm9udEF0dHJSb3cgPSBVdGlscy5jcmVhdGVUZXh0TWVtb0F0dHJidXRlTm9kZShcclxuICAgICAgbWVtb0RhdGEubV9pZCxcclxuICAgICAgbWVtb0RhdGEubV9mb250Q29sb3IsXHJcbiAgICAgIG1lbW9EYXRhLm1fYm9sZCxcclxuICAgICAgbWVtb0RhdGEubV9iYWNrQ29sb3IsXHJcbiAgICAgIGNoYW5nZUV2ZW50RnVuY1xyXG4gICAgKTtcclxuICAgIHBhbmVsLmFwcGVuZENoaWxkKGZvbnRBdHRyUm93LnJvdyk7XHJcblxyXG4gICAgdmFyIGVudGlyZVJvdyA9IFV0aWxzLmNyZWF0ZUF0dHJpYnV0ZVRvZ2dsZUJ1dHRvbk5vZGUoXHJcbiAgICAgIG1lbW9EYXRhLm1faWQsXHJcbiAgICAgIFwiZW50aXJlXCIsXHJcbiAgICAgIFwiVGVtcGxhdGUuZW50cmllQXBwbHlcIixcclxuICAgICAgZmFsc2UsXHJcbiAgICAgIGNoYW5nZUV2ZW50RnVuY1xyXG4gICAgKTtcclxuICAgIHBhbmVsLmFwcGVuZENoaWxkKGVudGlyZVJvdyk7XHJcblxyXG4gICAgbGV0IGZvbnRGYW1pbHlDb21ib1NlbGVjdCA9XHJcbiAgICAgIGZvbnRBdHRyUm93LmZvbnRGYW1pbHlDb21iby5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xyXG4gICAgJChmb250RmFtaWx5Q29tYm9TZWxlY3QpLnNlbGVjdDIoe1xyXG4gICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0pO1xyXG4gICAgJChmb250RmFtaWx5Q29tYm9TZWxlY3QpLnZhbChtZW1vRGF0YS5tX2ZvbnROYW1lKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChmb250RmFtaWx5Q29tYm9TZWxlY3QpLm9uKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYyk7XHJcbiAgICBsZXQgZm9udFNpemVDb21ib1NlbGVjdCA9IGZvbnRBdHRyUm93LmZvbnRTaXplQ29tYm8ucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcclxuICAgICQoZm9udFNpemVDb21ib1NlbGVjdCkuc2VsZWN0Mih7XHJcbiAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSk7XHJcbiAgICAkKGZvbnRTaXplQ29tYm9TZWxlY3QpLnZhbChtZW1vRGF0YS5tX2ZvbnRTaXplKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgJChmb250U2l6ZUNvbWJvU2VsZWN0KS5vbihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG5cclxuICAgIGxldCBjb2xvcklucHV0ID0gZm9udEF0dHJSb3cuY29sb3JCdG4ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgIGNvbG9ySW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbWVtb0RhdGEubV9mb250Q29sb3I7XHJcbiAgICBsZXQgcGlja2VyID0gbmV3IENQKGNvbG9ySW5wdXQsIHsgY29sb3I6IG1lbW9EYXRhLm1fZm9udENvbG9yIH0pO1xyXG4gICAgY29sb3JJbnB1dC52YWx1ZSA9IG1lbW9EYXRhLm1fZm9udENvbG9yO1xyXG4gICAgcGlja2VyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChyLCBnLCBiLCBhKSB7XHJcbiAgICAgIGlmICghcGlja2VyLnZpc2libGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29sb3JJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuICAgICAgY29sb3JJbnB1dC52YWx1ZSA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG5cclxuICAgICAgbGV0IGNvbG9yVGV4dElucHV0ID1cclxuICAgICAgICBmb250QXR0clJvdy5jb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gICAgICBjb2xvclRleHRJbnB1dC52YWx1ZSA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG4gICAgfSk7XHJcbiAgICBwaWNrZXIub24oXCJleGl0XCIsIGZ1bmN0aW9uIChyLCBnLCBiLCBhKSB7XHJcbiAgICAgIGNvbG9ySW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQ1AuSEVYKFtyLCBnLCBiLCBhXSk7XHJcblxyXG4gICAgICBsZXQgY29sb3JUZXh0SW5wdXQgPVxyXG4gICAgICAgIGZvbnRBdHRyUm93LmNvbG9yQnRuLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XHJcbiAgICAgIGNvbG9yVGV4dElucHV0LnZhbHVlID0gQ1AuSEVYKFtyLCBnLCBiLCBhXSk7XHJcbiAgICAgIGNvbG9yVGV4dElucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNvbG9ySW5wdXQyID0gZm9udEF0dHJSb3cuYmFja2dyb3VuZENvbG9yQnRuLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcbiAgICBjb2xvcklucHV0Mi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBtZW1vRGF0YS5tX2JhY2tDb2xvcjtcclxuICAgIGxldCBwaWNrZXIyID0gbmV3IENQKGNvbG9ySW5wdXQyLCB7IGNvbG9yOiBtZW1vRGF0YS5tX2JhY2tDb2xvciB9KTtcclxuICAgIGNvbG9ySW5wdXQyLnZhbHVlID0gbWVtb0RhdGEubV9iYWNrQ29sb3I7XHJcbiAgICBwaWNrZXIyLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChyLCBnLCBiLCBhKSB7XHJcbiAgICAgIGlmICghcGlja2VyMi52aXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbG9ySW5wdXQyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG4gICAgICBjb2xvcklucHV0Mi52YWx1ZSA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG5cclxuICAgICAgbGV0IGNvbG9yVGV4dElucHV0ID1cclxuICAgICAgICBmb250QXR0clJvdy5iYWNrZ3JvdW5kQ29sb3JCdG4ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtcclxuICAgICAgY29sb3JUZXh0SW5wdXQudmFsdWUgPSBDUC5IRVgoW3IsIGcsIGIsIGFdKTtcclxuICAgIH0pO1xyXG4gICAgcGlja2VyMi5vbihcImV4aXRcIiwgZnVuY3Rpb24gKHIsIGcsIGIsIGEpIHtcclxuICAgICAgY29sb3JJbnB1dDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gQ1AuSEVYKFtyLCBnLCBiLCBhXSk7XHJcblxyXG4gICAgICBsZXQgY29sb3JUZXh0SW5wdXQgPVxyXG4gICAgICAgIGZvbnRBdHRyUm93LmJhY2tncm91bmRDb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gICAgICBjb2xvclRleHRJbnB1dC52YWx1ZSA9IENQLkhFWChbciwgZywgYiwgYV0pO1xyXG4gICAgICBjb2xvclRleHRJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICB2YXIgcm93V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuXHJcbiAgICBsZXQgYXBwbHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYXBwbHlCdG4uY2xhc3NOYW1lID0gXCJBdHRyaWJ1dGUtQnRuXCI7XHJcbiAgICBhcHBseUJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTVweFwiO1xyXG4gICAgYXBwbHlCdG4uc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XHJcbiAgICBhcHBseUJ0bi50ZXh0Q29udGVudCA9IFwi7KCB7JqpXCI7XHJcbiAgICBhcHBseUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBsZXQgZW50aXJlU3dpdGNoUGFyZW50Tm9kZSA9IGV2dC50YXJnZXQuY2xvc2VzdChcInVsLkF0dHJpYnV0ZS1Db250ZW50c1wiKTtcclxuICAgICAgbGV0IGVudGlyZVN3aXRjaCA9IGVudGlyZVN3aXRjaFBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcImxhYmVsLkF0dHJpYnV0ZS1Td2l0Y2gtTGFiZWwgPiBpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBmb250RmFtaWx5ID0gZm9udEF0dHJSb3cuZm9udEZhbWlseUNvbWJvLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCJzZWxlY3QuQXR0cmlidXRlLVNlbGVjdCBcIlxyXG4gICAgICApLnZhbHVlO1xyXG4gICAgICBsZXQgZm9udFNpemUgPSBmb250QXR0clJvdy5mb250U2l6ZUNvbWJvLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCJzZWxlY3QuQXR0cmlidXRlLVNlbGVjdCBcIlxyXG4gICAgICApLnZhbHVlO1xyXG4gICAgICBsZXQgaXNCb2xkID1cclxuICAgICAgICBmb250QXR0clJvdy5ib2xkQnRuLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIikudmFsdWU7XHJcbiAgICAgIGxldCBmb250Q29sb3IgPVxyXG4gICAgICAgIGZvbnRBdHRyUm93LmNvbG9yQnRuLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIikudmFsdWU7XHJcbiAgICAgIGxldCBiYWNrQ29sb3IgPVxyXG4gICAgICAgIGZvbnRBdHRyUm93LmJhY2tncm91bmRDb2xvckJ0bi5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgXCJpbnB1dFt0eXBlPSd0ZXh0J11cIlxyXG4gICAgICAgICkudmFsdWU7XHJcbiAgICAgIF9yZWFkZXJNb2QuYXBwbHlNZW1vUHJvcGVydGllcyhcclxuICAgICAgICBtZW1vRGF0YS5tX2lkLFxyXG4gICAgICAgIG1lbW9EYXRhLm1fcGFnZU5vLFxyXG4gICAgICAgIGZvbnRGYW1pbHksXHJcbiAgICAgICAgZm9udFNpemUsXHJcbiAgICAgICAgaXNCb2xkLFxyXG4gICAgICAgIGZvbnRDb2xvcixcclxuICAgICAgICBiYWNrQ29sb3IsXHJcbiAgICAgICAgZW50aXJlU3dpdGNoLmNoZWNrZWRcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiQXR0cmlidXRlLUJ0blwiO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCLri6vquLBcIjtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBfcmVhZGVyTW9kLmhpZGVNZW1vUHJvcGVydGllcygpO1xyXG4gICAgfSk7XHJcbiAgICByb3dXcmFwLmFwcGVuZENoaWxkKGFwcGx5QnRuKTtcclxuICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChyb3dXcmFwKTtcclxuICAgIHBhbmVsLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgcHJvcGVydGlzRGl2LmFwcGVuZENoaWxkKHBhbmVsKTtcclxuICAgIHByb3BlcnRpc0Rpdi5zZXRBdHRyaWJ1dGUoXCJGaWVsZC1pZFwiLCBtZW1vRGF0YS5tX2lkKTtcclxuICAgIHByb3BlcnRpc0Rpdi5jbGFzc05hbWUgPSBcIkVkaXRvci1BdHRyaWJ1dGVcIjtcclxuICAgIGxldCBwTm9kZSA9IGV2dC50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGxldCBwZ05vZGUgPSBfcmVhZGVyTW9kLnJlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIiBbZGF0YS1wYWdlLW51bWJlcj0nXCIgKyBtZW1vRGF0YS5tX3BhZ2VObyArIFwiJ11cIlxyXG4gICAgKTtcclxuICAgIHByb3BlcnRpc0Rpdi5zdHlsZS50b3AgPSBwTm9kZS5vZmZzZXRUb3AgKyA0MCArIFwicHhcIjtcclxuICAgIHByb3BlcnRpc0Rpdi5zdHlsZS5sZWZ0ID1cclxuICAgICAgcE5vZGUub2Zmc2V0TGVmdCArIHBOb2RlLm9mZnNldFdpZHRoICsgcGdOb2RlLm9mZnNldExlZnQgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICBsZXQgdmlld2VyID0gX3JlYWRlck1vZC5yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIgI1wiICsgQ09OU1RBTlRTLlJFQURFUl9QREZfVklFV0VSXHJcbiAgICApO1xyXG4gICAgdmlld2VyLmFwcGVuZENoaWxkKHByb3BlcnRpc0Rpdik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gYWRkVVJMSW1hZ2VUb1NpZ25BcmVhXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyTW9kI2FkZFVSTEltYWdlVG9TaWduQXJlYVxyXG4gICAqIEBkZXNjcmlwdGlvbiAgIOuzkeyasTog7ISc67KE66Gc67aA7YSwIOuTseuhneuQnCDsnbjsnqUg7KCV67O066W8IOu2iOufrOyYqOuLpC5cclxuICAgKlxyXG4gICAqIEBEYXRlIDIwMjMuIDEyLiAxM1xyXG4gICAqL1xyXG4gIGFkZFVSTEltYWdlVG9TaWduQXJlYSgpIHtcclxuICAgIHZhciBpbWFnZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VVUkxJbnB1dFwiKS52YWx1ZTtcclxuICAgIF9yZWFkZXJNb2RcclxuICAgICAgLmdldEJhc2U2NEltYWdlRnJvbVVybChpbWFnZVVybClcclxuICAgICAgLnRoZW4oKGJhc2U2NEltYWdlKSA9PiB7XHJcbiAgICAgICAgX3JlYWRlck1vZC5hZGRJbWFnZVRvTGlzdChiYXNlNjRJbWFnZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJbWFnZVRvTGlzdChiYXNlNjRJbWFnZSkge1xyXG4gICAgdmFyIHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWduVHlwZUxpc3RcIik7XHJcbiAgICAvLyDquLDsobTsl5AgY2xhc3M9XCJvblwi7J20IOyeiOuKlCDsmpTshozsl5DshJwg7YG0656Y7IqkIOygnOqxsFxyXG4gICAgdmFyIGV4aXN0aW5nT25FbGVtZW50ID0gdWwucXVlcnlTZWxlY3RvcihcImxpLm9uXCIpO1xyXG4gICAgaWYgKGV4aXN0aW5nT25FbGVtZW50KSB7XHJcbiAgICAgIGV4aXN0aW5nT25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsg4jroZzsmrQgbGkg7JqU7IaMIOyDneyEsSDrsI8g7LaU6rCAXHJcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5jbGFzc05hbWUgPSBcIm9uXCI7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSBcImNhbnZhc193cmFwXCI7XHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBiYXNlNjRJbWFnZTtcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG5cclxuICBnZXRCYXNlNjRJbWFnZUZyb21VcmwoaW1hZ2VVcmwpIHtcclxuICAgIHJldHVybiBmZXRjaChpbWFnZVVybClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvay5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChibG9iKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRCYXNlNjRJbWFnZUZyb21VcmxCeVByb3h5U2VydmVyKGltYWdlVXJsKSB7XHJcbiAgICBjb25zdCBwcm94eVVybCA9IFwiaHR0cHM6Ly90aGluZ3Byb3h5LmZyZWVib2FyZC5pby9mZXRjaC9cIjsgLy8g66y066OMIO2UhOuhneyLnCDshJzruYTsiqQgVVJMXHJcbiAgICBjb25zdCB1cmwgPSBwcm94eVVybCArIGltYWdlVXJsO1xyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2suXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoYmxvYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gMjAyNDAxMzFcclxuICBjb252ZXJ0SW1hZ2VUb0Jhc2U2NChpbWFnZVVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfsnbTrr7jsp4Drpbwg67aI65+s7Jik64qUIOuPmeyViCDsmKTrpZjqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBpbWFnZVVybCk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gaXNJbWFnZVVSTFZhbGlkKHVybCwgY2FsbGJhY2spIHtcclxuICAvLyAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAvLyAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAvLyAgICAgICAvLyDsnbTrr7jsp4Ag66Gc65OcIOyEseqztSDsi5xcclxuICAvLyAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgIC8vIOydtOuvuOyngCDroZzrk5wg7Iuk7YyoIOyLnFxyXG4gIC8vICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBpbWcuc3JjID0gdXJsO1xyXG4gIC8vIH1cclxuXHJcbiAgYXN5bmMgY2hlY2tJbWFnZVZhbGlkaXR5KHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7IC8vIOydtOuvuOyngCDroZzrk5wg7ISx6rO1XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZWplY3QoZmFsc2UpOyAvLyDsnbTrr7jsp4Ag66Gc65OcIOyLpO2MqFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTaWduVHlwZUxpc3QoKSB7XHJcbiAgICAvLyAncmVnaXN0ZXJlZEFyZWEnIOyalOyGjOyXkCDsoJHqt7xcclxuICAgIGNvbnN0IHJlZ2lzdGVyZWRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RlcmVkQXJlYVwiKTtcclxuXHJcbiAgICAvLyAncmVnaXN0ZXJlZEFyZWEnIOuCtOu2gOydmCAnc2lnblR5cGVMaXN0J+ulvCDssL7snYxcclxuICAgIGNvbnN0IHNpZ25UeXBlTGlzdCA9IHJlZ2lzdGVyZWRBcmVhLnF1ZXJ5U2VsZWN0b3IoXCIuc2lnblR5cGVMaXN0XCIpO1xyXG5cclxuICAgIC8vICdzaWduVHlwZUxpc3QnIOuCtOu2gOydmCDrqqjrk6AgJ2xpJyDsmpTshozrpbwg7IKt7KCcXHJcbiAgICB3aGlsZSAoc2lnblR5cGVMaXN0LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc2lnblR5cGVMaXN0LnJlbW92ZUNoaWxkKHNpZ25UeXBlTGlzdC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb252ZXJ0VXJsc1RvSnNvbihpbWFnZVVybHMpIHtcclxuICAgIHJldHVybiBpbWFnZVVybHMubWFwKHVybCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW1nX3R5cGU6IFwiVVJMXCIsXHJcbiAgICAgICAgICAgIGltZ19zcmM6IHVybFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIFJlYWRlci9SZWFkZXJNb2RcclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi8uLi91dGlscy91dGlscy5qcyc7XHJcbmltcG9ydCB7Q09OU1RBTlRTfSBmcm9tICcuLy4uL0NvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgZmxhdHBpY2tyIGZyb20gXCIuLy4uLy4uL2ZsYXRwaWNrci5taW4uanNcIjtcclxuaW1wb3J0IHsgS29yZWFuIH0gZnJvbSBcIi4uLy4uL2wxMG4va28uanNcIlxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDtlYTrk5wg656c642U66eBIOq0gOugqCDsspjrpqzrpbwg7ZWY64qUIENsYXNzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7Q2FsbGJhY2t9IGFsZXJ0RnVuYyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjYWxlcnRGdW5jfVxyXG4gKiBAcHJvcGVydHkge0Jsb2J9IGNoZWNrQmxvYiB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY2hlY2tCbG9ifVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY2hlY2tJbWd1cmwge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NoZWNrSW1ndXJsfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gY2hlY2tTdmcge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NoZWNrU3ZnfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0ZVBpY2tlciB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjZGF0ZVBpY2tlcn1cclxuICogQHByb3BlcnR5IHtPYmplY3R9IGZpZWxkcyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjZmllbGRzfVxyXG4gKiBAcHJvcGVydHkge09iamVjdH0gbV9kZWZhdWx0VmFsdWVJbmZvIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNtX2RlZmF1bHRWYWx1ZUluZm99XHJcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gbV9vd25lck5vZGUge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI21fb3duZXJOb2RlfVxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG1fcmVhZG9ubHkge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI21fcmVhZG9ubHl9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBwYWdlTm8ge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3BhZ2VOb31cclxuICogQHByb3BlcnR5IHtCbG9ifSByYWRpb09mZmJsb2Ige0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT2ZmYmxvYn1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHJhZGlvT2ZmSW1ndXJsIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09mZkltZ3VybH1cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHJhZGlvT2ZmU3ZnIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09mZlN2Z31cclxuICogQHByb3BlcnR5IHtCbG9ifSByYWRpb09uYmxvYiB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PbmJsb2J9XHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSByYWRpb09uSW1ndXJsIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09uSW1ndXJsfVxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmFkaW9PblN2ZyB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PblN2Z31cclxuICpcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQ2hlY2tib3hGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlQ2hlY2tib3hGaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQ29tYm9ib3hGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlQ29tYm9ib3hGaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlRmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVGaWVsZERpdiB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlRmllbGREaXZ9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUZpZWxkTGF5ZXIge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUZpZWxkTGF5ZXJ9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUltYWdlRmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUltYWdlRmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUxhYmVsRmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUxhYmVsRmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZU11bHRpbGluZVRleHRGaWVsZCB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlTXVsdGlsaW5lVGV4dEZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVSYWRpb0ZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVSYWRpb0ZpZWxkfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVTaWduRmllbGQge0BsaW5rIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZVNpZ25GaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlVGV4dEZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVUZXh0RmllbGR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGdldEZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNnZXRGaWVsZH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSB7QGxpbmsgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcHVzaEZpZWxkIHtAbGluayBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNwdXNoRmllbGR9XHJcbiAqIFxyXG4gKiBARmlsZU5hbWUgUmVhZGVyUGFnZURhdGEuanNcclxuICogQHNpbmNlIDIwMjEuMDUuMzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWFkZXJQYWdlRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2VObyDrnpzrjZTrp4Eg7ZWY64qUIO2OmOydtOyngCDrsojtmLhcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdFZhbHVlSW5mbyDshJzrqoXsnpDsnZgg6riw67O4IOygleuztOuTpOydtCDrk6TslrTsnojripQgT2JqZWN0XHJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBvd25lck5vZGUg7J20IO2UhOuhnOygne2KuOqwgCDtj6ztlajrkKAgRWxlbWVudOydmCDrtoDrqqggSFRNTCBFTEVNRU5UXHJcbiAgICogQHBhcmFtIHtDYWxsYmFja30gY3VzdG9tQWxlcnRGdW5jIOyVjOumvOywvSDtmLjstpzsnYQg7JyE7ZWcIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSByZWFkb25seSDsnoXroKXsnYQg67Cb7KeAIOyViuqzoCDsnb3quLAg7KCE7JqpIOuqqOuTnOuhnCDsgqzsmqntlaDrlYzrpbwg7JyE7ZWcIOuzgOyImFxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwYWdlTm8sXHJcbiAgICBkZWZhdWx0VmFsdWVJbmZvLFxyXG4gICAgb3duZXJOb2RlLFxyXG4gICAgY3VzdG9tQWxlcnRGdW5jID0gbnVsbCxcclxuICAgIHJlYWRvbmx5ID0gZmFsc2UsXHJcbiAgICBzaWduQ2FudmFzID0gbnVsbFxyXG4gICkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcGFnZU5vXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g656c642U66eBIO2VmOuKlCDtjpjsnbTsp4Ag67KI7Zi4XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGFnZU5vID0gcGFnZU5vO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2ZpZWxkc1xyXG4gICAgICogQGRlc2NyaXB0aW9uIOuenOuNlOunge2VoCDtlYTrk5wg7KCV67O0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZmllbGRzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjbWVtb3NcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnpzrjZTrp4HtlaAg66mU66qoIOygleuztFxyXG4gICAgICovXHJcbiAgICB0aGlzLm1lbW9zID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjZGF0ZVBpY2tlclxyXG4gICAgICogQGRlc2NyaXB0aW9uIOy6mOumsOuNlCDtjJ3sl4XssL0gT2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGF0ZVBpY2tlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNtX2RlZmF1bHRWYWx1ZUluZm9cclxuICAgICAqIEBkZXNjcmlwdGlvbiDshJzrqoXsnpDsnZgg6riw67O4IOygleuztOuTpOydtCDrk6TslrTsnojripQgT2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMubV9kZWZhdWx0VmFsdWVJbmZvID0gZGVmYXVsdFZhbHVlSW5mbztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtFbGVtZW50fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjbV9vd25lck5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiDsnbQg7ZSE66Gc7KCd7Yq46rCAIO2PrO2VqOuQoCBFbGVtZW507J2YIOu2gOuqqCBIVE1MIEVMRU1FTlRcclxuICAgICAqL1xyXG4gICAgdGhpcy5tX293bmVyTm9kZSA9IG93bmVyTm9kZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjbV9yZWFkb25seVxyXG4gICAgICogQGRlc2NyaXB0aW9uIOuenOuNlOunge2VnCDsnoXroKUg7LC965Ok7J2EIOydveq4sOyghOyaqeycvOuhnCDrp4zrk6Tsp4Dsl5Ag64yA7ZWcIOyXrOu2gFxyXG4gICAgICovXHJcbiAgICB0aGlzLm1fcmVhZG9ubHkgPSByZWFkb25seTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtDYWxsYmFja31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2FsZXJ0RnVuY1xyXG4gICAgICogQGRlc2NyaXB0aW9uIOyVjOumvOywvSDtmLjstpzsnYQg7JyE7ZWcIENhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWxlcnRGdW5jID0gY3VzdG9tQWxlcnRGdW5jO1xyXG5cclxuICAgIHRoaXMuc2lnbkNhbnZhcyA9IHNpZ25DYW52YXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY2hlY2tTdmdcclxuICAgICAqIEBkZXNjcmlwdGlvbiDssrTtgawg66qo7JaR7J2EIO2RnO2YhO2VmOq4sCDsnITtlZwgU1ZHIOydtOuvuOyngCDrjbDsnbTthLAuXHJcbiAgICAgKi9cclxuICAgIGxldCBjaGVja1N2ZyA9XHJcbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+PHBhdGggZD1cIk0xNy4yIDMyLjJMNC45IDE5LjkgMCAyNC44IDE3LjIgNDIgNDggMTAuOSA0My4xIDZ6XCIvPjwvc3ZnID4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT25TdmdcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnbzrlJTsmKTsnZgg7ISg7YOd65CY7JeI7J2EIOuVjCDrqqjslpHsnYQg7ZGc7ZiE7ZWY6riwIOychO2VnCBTVkcg7J2066+47KeAIOuNsOydtO2EsC5cclxuICAgICAqL1xyXG4gICAgbGV0IHJhZGlvT25TdmcgPVxyXG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxcXHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQsMTJjLTYuNiwwLTEyLDUuNC0xMiwxMnM1LjQsMTIsMTIsMTJzMTItNS40LDEyLTEyUzMwLjYsXFxcclxuICAgICAgICAgICAgMTIsMjQsMTJ6TTI0LDBDMTAuOCwwLDAsMTAuOCwwLDI0czEwLjgsMjQsMjQsMjRzMjQtMTAuOCwyNC0yNFMzNy4yLDAsMjQsMHpNMjQsNDMuMkMxMy40LDQzLjIsNC44LDM0LjYsNC44LDI0UzEzLjQsXFxcclxuICAgICAgICAgICAgNC44LDI0LDQuOFM0My4yLDEzLjQsNDMuMiwyNFMzNC42LDQzLjIsMjQsNDMuMnpcIi8+PC9zdmcgPic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PZmZTdmdcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnbzrlJTsmKTsnZgg7ISg7YOdIOyViOuQmOyXiOydhCDrlYwg66qo7JaR7J2EIO2RnO2YhO2VmOq4sCDsnITtlZwgU1ZHIOydtOuvuOyngCDrjbDsnbTthLAuXHJcbiAgICAgKi9cclxuICAgIGxldCByYWRpb09mZlN2ZyA9XHJcbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XFxcclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNCwwQzEwLjgsMCwwLDEwLjgsMCwyNHMxMC44LDI0LDI0LDI0czI0LTEwLjgsMjQtMjRTMzcuMiwwLDI0LDB6TTI0LDQzLjJDMTMuNCw0My4yLDQuOCwzNC42LDQuOCwyNFMxMy40LFxcXHJcbiAgICAgICAgICAgIDQuOCwyNCw0LjhTNDMuMiwxMy40LDQzLjIsMjRTMzQuNiw0My4yLDI0LDQzLjJ6XCIvPjwvc3ZnID4nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge0Jsb2J9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjaGVja0Jsb2JcclxuICAgICAqIEBkZXNjcmlwdGlvbiDssrTtgawgU1ZH7J2YIEJsb2Ig642w7J207YSwLlxyXG4gICAgICovXHJcbiAgICBsZXQgY2hlY2tCbG9iID0gbmV3IEJsb2IoW2NoZWNrU3ZnXSwgeyB0eXBlOiBcImltYWdlL3N2Zyt4bWxcIiB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjaGVja0ltZ3VybFxyXG4gICAgICogQGRlc2NyaXB0aW9uIOyytO2BrCBTVkfsnZgg7ZiE7J6sIFVSTOyXkOyEnOunjCDsnKDtmqjtlZwg7J6E7IucIFVSTFxyXG4gICAgICovXHJcbiAgICB0aGlzLmNoZWNrSW1ndXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjaGVja0Jsb2IpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge0Jsb2J9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNyYWRpb09uYmxvYlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOudvOuUlOyYpOqwgCDshKDtg53rkJjsl4jsnYQg65WMIFNWR+ydmCBCbG9iIOuNsOydtO2EsC5cclxuICAgICAqL1xyXG4gICAgbGV0IHJhZGlvT25ibG9iID0gbmV3IEJsb2IoW3JhZGlvT25TdmddLCB7IHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3JhZGlvT25JbWd1cmxcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnbzrlJTsmKTqsIAg7ISg7YOd65CY7JeI7J2EIOuVjCBTVkfsnZgg7ZiE7J6sIFVSTOyXkOyEnOunjCDsnKDtmqjtlZwg7J6E7IucIFVSTFxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhZGlvT25JbWd1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJhZGlvT25ibG9iKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIHtCbG9ifVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PZmZibG9iXHJcbiAgICAgKiBAZGVzY3JpcHRpb24g652865SU7Jik6rCAIOyEoO2DnSDslYjrkJjsl4jsnYQg65WMIFNWR+ydmCBCbG9iIOuNsOydtO2EsC5cclxuICAgICAqL1xyXG4gICAgbGV0IHJhZGlvT2ZmYmxvYiA9IG5ldyBCbG9iKFtyYWRpb09mZlN2Z10sIHsgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjcmFkaW9PZmZJbWd1cmxcclxuICAgICAqIEBkZXNjcmlwdGlvbiDrnbzrlJTsmKTqsIAg7ISg7YOdIOyViOuQmOyXiOydhCDrlYwgU1ZH7J2YIO2YhOyerCBVUkzsl5DshJzrp4wg7Jyg7Zqo7ZWcIOyehOyLnCBVUkxcclxuICAgICAqL1xyXG4gICAgdGhpcy5yYWRpb09mZkltZ3VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmFkaW9PZmZibG9iKTtcclxuXHJcbiAgICB0aGlzLm1lbW9Qcm9wZXRpZXMgPSB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiTWFsZ3VuR290aGljXCIsXHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgZm9udENvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgYmFja0NvbG9yOiBcIiMzMzMzMzMzM1wiLFxyXG4gICAgICBpc0JvbGQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBwdXNoTWVtb1xyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI3B1c2hNZW1vXHJcbiAgICogQGRlc2NyaXB0aW9uIO2VhOuTnE9iamVjdOulvCDstpTqsIDtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRLZXkgIO2VhOuTnOydmCDqs6DsnKBJRFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCAg7ZWE65OcIE9iamVjdFxyXG4gICAqIEBEYXRlICAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIHB1c2hNZW1vKG1lbW9LZXksIG1lbW8pIHtcclxuICAgIHRoaXMubWVtb3NbbWVtb0tleV0gPSBtZW1vO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTWVtbyhtZW1vS2V5KSB7XHJcbiAgICBkZWxldGUgdGhpcy5tZW1vc1ttZW1vS2V5XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBwdXNoRmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNwdXNoRmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24g7ZWE65OcT2JqZWN066W8IOy2lOqwgO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZEtleSAg7ZWE65Oc7J2YIOqzoOycoElEXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkICDtlYTrk5wgT2JqZWN0XHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgcHVzaEZpZWxkKGZpZWxkS2V5LCBmaWVsZCkge1xyXG4gICAgdGhpcy5maWVsZHNbZmllbGRLZXldID0gZmllbGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gcHVzaEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjZ2V0RmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24g7ZW064u57ZWY64qUIO2CpOydmCDtlYTrk5xPYmplY3Trpbwg66as7YS07ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkS2V5ICDtlYTrk5zsnZgg6rOg7JygSURcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICDtlYTrk5wgT2JqZWN0XHJcbiAgICogQERhdGUgIDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgZ2V0RmllbGQoZmllbGRLZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkc1tmaWVsZEtleV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eVxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2lzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHlcclxuICAgKiBAZGVzY3JpcHRpb24g7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aA66W8IOuwmO2ZmO2VnOuLpC5cclxuICAgKlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbjog7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aAXHJcbiAgICogQERhdGUgMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBpc1JlcXVpcmVkRmllbGRWYWx1ZUVtcHR5KCkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKTtcclxuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXMubGVuZ3RoOyArK2lkeCkge1xyXG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleXNbaWR4XV07XHJcbiAgICAgIGlmIChmaWVsZC5tX3JlcXVpcmVkID09PSBcInRydWVcIikge1xyXG4gICAgICAgIGxldCBmaWVsZERpdiA9IHRoaXMubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIFwiI1wiICsgZmllbGQubV9pZCArIFwiX2RpdlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX3ZhbHVlKSkge1xyXG4gICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChcIkVtcHR5RmllbGRcIik7XHJcbiAgICAgICAgICBsZXQgZmllbGREaXZSZWN0ID0gZmllbGREaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICBsZXQgdmlld2VyQ29udGFpbmVyID0gdGhpcy5tX293bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBcIiAjXCIgKyBDT05TVEFOVFMuUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbGV0IHZpZXdlckNvbnRhaW5lclJlY3QgPSB2aWV3ZXJDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICBpZiAodmlld2VyQ29udGFpbmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lciA9IHRoaXMubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBcIiAjXCIgKyBDT05TVEFOVFMuUFJFVklFV19SRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBmaWVsZERpdlJlY3QudG9wIC1cclxuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyUmVjdC50b3A7XHJcbiAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wID1cclxuICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gLSB2aWV3ZXJDb250YWluZXJSZWN0LmhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZmllbGREaXYgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRW1wdHlGaWVsZFwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJFbXB0eUZpZWxkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eSgpIHtcclxuICAvLyAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKTtcclxuICAvLyAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5cy5sZW5ndGg7ICsraWR4KSB7XHJcbiAgLy8gICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleXNbaWR4XV07XHJcbiAgLy8gICAgICAgICBpZiAoZmllbGQubV9yZXF1aXJlZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAvLyAgICAgICAgICAgICBsZXQgZmllbGREaXYgPSB0aGlzLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBmaWVsZC5tX2lkICsgXCJfZGl2XCIpO1xyXG4gIC8vICAgICAgICAgICAgIGlmIChVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1fdmFsdWUpKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJFbXB0eUZpZWxkXCIpO1xyXG4gIC8vICAgICAgICAgICAgICAgICBsZXQgYmJveCA9IGZpZWxkRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIC8vICAgICAgICAgICAgICAgICBsZXQgdmlld2VyQ29udGFpbmVyID0gdGhpcy5tX293bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIENPTlNUQU5UUy5SRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIpO1xyXG4gIC8vICAgICAgICAgICAgICAgICBpZiAodmlld2VyQ29udGFpbmVyID09PSBudWxsKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIgPSB0aGlzLm1fb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgQ09OU1RBTlRTLlBSRVZJRVdfUkVBREVSX1BERl9WSUVXRVJfQ09OVEFJTkVSKTtcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc2Nyb2xsVG9wID0gYmJveC55O1xyXG4gIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICAgICAgICBpZiAoZmllbGREaXYgIT09IG51bGwgJiZcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJFbXB0eUZpZWxkXCIpKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QudG9nZ2xlKFwiRW1wdHlGaWVsZFwiKTtcclxuICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlRmllbGRMYXllclxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUZpZWxkTGF5ZXJcclxuICAgKiBAZGVzY3JpcHRpb24gIO2VhOuTnOulvCDsmKzrprQg66CI7J207Ja066W8IOyDneyEse2VmOyXrCDrsJjtmZjtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICDtjpjsnbTsp4Agd2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICAg7Y6Y7J207KeAIGhlaWdodFxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZUZpZWxkTGF5ZXIod2lkdGgsIGhlaWdodCwgY2xhc3NOYW1lKSB7XHJcbiAgICBsZXQgZmllbGRMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmaWVsZExheWVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgZmllbGRMYXllci5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIGZpZWxkTGF5ZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIGZpZWxkTGF5ZXIuc3R5bGUud2lkdGggPSB3aWR0aDtcclxuICAgIGZpZWxkTGF5ZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgZmllbGRMYXllci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICByZXR1cm4gZmllbGRMYXllcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVNZW1vRGl2XHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlTWVtb0RpdlxyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTrk5wg66CI7J207Ja0IOychOyXkCDsmKzrnbzqsIAg7ZWE65Oc66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2Ugb2JqZWN0IHRoaXMgb2JlamN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG1lbW8gbWVtbyDsoJXrs7RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgICDrnpzrjZTrp4HrkJjripQgUERGIFBhZ2XsnZggdmlld3BvcnRcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVNZW1vRGl2KFxyXG4gICAgX3RoaXNQYWdlLFxyXG4gICAgbWVtbyxcclxuICAgIHZpZXdwb3J0LFxyXG4gICAgZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyLFxyXG4gICAgbWVtb1Byb3BlcnR5QnRuQ2xpY2tFdmVudExpc3RlbmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCB2aWV3cG9ydFhZID0gdmlld3BvcnQuY29udmVydFRvVmlld3BvcnRQb2ludChcclxuICAgICAgbWVtby5tX3BkZlgsXHJcbiAgICAgIG1lbW8ubV9wZGZZXHJcbiAgICApO1xyXG4gICAgY29uc3Qgdmlld3BvcnRYWTIgPSB2aWV3cG9ydC5jb252ZXJ0VG9WaWV3cG9ydFBvaW50KFxyXG4gICAgICBtZW1vLm1fcGRmWDIsXHJcbiAgICAgIG1lbW8ubV9wZGZZMlxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1lbW9NYXJnaW4gPSAxMDtcclxuXHJcbiAgICBjb25zdCBuZXdYID0gdmlld3BvcnRYWVswXTtcclxuICAgIGNvbnN0IG5ld1kgPSB2aWV3cG9ydFhZWzFdO1xyXG4gICAgY29uc3QgbmV3WDIgPSB2aWV3cG9ydFhZMlswXTtcclxuICAgIGNvbnN0IG5ld1kyID0gdmlld3BvcnRYWTJbMV07XHJcbiAgICBjb25zdCBuZXdXID0gTWF0aC5hYnMobmV3WDIgLSBuZXdYKTtcclxuICAgIGNvbnN0IG5ld0ggPSBNYXRoLmFicyhuZXdZMiAtIG5ld1kpO1xyXG4gICAgbGV0IG1lbW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVtb0Rpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIG1lbW9EaXYuc3R5bGUubGVmdCA9IG5ld1ggLSBtZW1vTWFyZ2luICsgXCJweFwiO1xyXG4gICAgbWVtb0Rpdi5zdHlsZS50b3AgPSBuZXdZIC0gbWVtb01hcmdpbiArIFwicHhcIjtcclxuICAgIG1lbW9EaXYuc3R5bGUud2lkdGggPSBuZXdXICsgbWVtb01hcmdpbiArIFwicHhcIjtcclxuICAgIG1lbW9EaXYuc3R5bGUuaGVpZ2h0ID0gbmV3SCArIG1lbW9NYXJnaW4gKyBcInB4XCI7XHJcbiAgICBtZW1vRGl2LmlkID0gbWVtby5tX2lkICsgXCJfZGl2XCI7XHJcblxyXG4gICAgbWVtb0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBtZW1vLm1fYmFja0NvbG9yO1xyXG4gICAgbWVtb0Rpdi5zdHlsZS5vdXRsaW5lQ29sb3IgPSBtZW1vLm1fYmFja0NvbG9yO1xyXG4gICAgbWVtb0Rpdi5zdHlsZS5vdXRsaW5lU3R5bGUgPSBcInNvbGlkXCI7XHJcbiAgICBtZW1vRGl2LnN0eWxlLm91dGxpbmVXaWR0aCA9IFwiMXB4XCI7XHJcbiAgICBjb25zdCBvcmdXaWR0aCA9IE1hdGguYWJzKG1lbW8ubV9wZGZYIC0gbWVtby5tX3BkZlgyKTtcclxuICAgIGNvbnN0IG9yZ0hlaWdodCA9IE1hdGguYWJzKG1lbW8ubV9wZGZZIC0gbWVtby5tX3BkZlkyKTtcclxuICAgIGNvbnN0IHhTY2FsZSA9IG5ld1cgLyBvcmdXaWR0aDtcclxuICAgIGNvbnN0IHlTY2FsZSA9IG5ld0ggLyBvcmdIZWlnaHQ7XHJcblxyXG4gICAgbGV0IG11bHRpbGluZVRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5sZWZ0ID0gXCI1cHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS50b3AgPSBcIjVweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLndpZHRoID0gbmV3VyArIFwicHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5oZWlnaHQgPSBuZXdIICsgXCJweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmZvbnRGYW1pbHkgPSBtZW1vLm1fZm9udE5hbWU7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuZm9udFNpemUgPSBtZW1vLm1fZm9udFNpemUgKiB4U2NhbGUgKyBcInB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuY29sb3IgPSBtZW1vLm1fZm9udENvbG9yO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLnRleHRBbGlnbiA9IG1lbW8ubV90ZXh0QWxpZ247XHJcblxyXG4gICAgaWYgKG1lbW8ubV9yZWFkb25seSkge1xyXG4gICAgICBtdWx0aWxpbmVUZXh0RmllbGQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbW8ubV9ib2xkID09PSBcInRydWVcIikge1xyXG4gICAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgfVxyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLmlubmVySFRNTCA9IG1lbW8ubV92YWx1ZTtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcblxyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2hhbmdlXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBtZW1vLm1fdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCImIzEzOyYjMTA7XCIpO1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhtZW1vLm1fdmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIG1lbW9EaXYuYXBwZW5kQ2hpbGQobXVsdGlsaW5lVGV4dEZpZWxkKTtcclxuXHJcbiAgICBqUXVlcnkobWVtb0RpdilcclxuICAgICAgLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgY29udGFpbm1lbnQ6IFwicGFyZW50XCIsXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgbGV0IHBvaW50MSA9IHZpZXdwb3J0LmNvbnZlcnRUb1BkZlBvaW50KFxyXG4gICAgICAgICAgICB1aS5wb3NpdGlvbi5sZWZ0ICsgbWVtb01hcmdpbixcclxuICAgICAgICAgICAgdWkucG9zaXRpb24udG9wICsgbWVtb01hcmdpblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIG1lbW8ubV9wZGZYID0gcG9pbnQxWzBdO1xyXG4gICAgICAgICAgbWVtby5tX3BkZlkgPSBwb2ludDFbMV07XHJcbiAgICAgICAgICBsZXQgcG9pbnQyID0gdmlld3BvcnQuY29udmVydFRvUGRmUG9pbnQoXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLmxlZnQgKyBtZW1vTWFyZ2luICsgbmV3VyxcclxuICAgICAgICAgICAgdWkucG9zaXRpb24udG9wICsgbWVtb01hcmdpbiArIG5ld0hcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWDIgPSBwb2ludDJbMF07XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWTIgPSBwb2ludDJbMV07XHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnJlc2l6YWJsZSh7XHJcbiAgICAgICAgY29udGFpbm1lbnQ6IFwicGFyZW50XCIsXHJcbiAgICAgICAgYWxzb1Jlc2l6ZTogalF1ZXJ5KG11bHRpbGluZVRleHRGaWVsZCksXHJcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICBsZXQgcG9pbnQxID0gdmlld3BvcnQuY29udmVydFRvUGRmUG9pbnQoXHJcbiAgICAgICAgICAgIHVpLnBvc2l0aW9uLmxlZnQgKyBtZW1vTWFyZ2luLFxyXG4gICAgICAgICAgICB1aS5wb3NpdGlvbi50b3AgKyBtZW1vTWFyZ2luXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbWVtby5tX3BkZlggPSBwb2ludDFbMF07XHJcbiAgICAgICAgICBtZW1vLm1fcGRmWSA9IHBvaW50MVsxXTtcclxuICAgICAgICAgIGxldCBwb2ludDIgPSB2aWV3cG9ydC5jb252ZXJ0VG9QZGZQb2ludChcclxuICAgICAgICAgICAgdWkucG9zaXRpb24ubGVmdCArIG1lbW9NYXJnaW4gKyB1aS5zaXplLndpZHRoIC0gbWVtb01hcmdpbixcclxuICAgICAgICAgICAgdWkucG9zaXRpb24udG9wICsgbWVtb01hcmdpbiArIHVpLnNpemUuaGVpZ2h0IC0gbWVtb01hcmdpblxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIG1lbW8ubV9wZGZYMiA9IHBvaW50MlswXTtcclxuICAgICAgICAgIG1lbW8ubV9wZGZZMiA9IHBvaW50MlsxXTtcclxuICAgICAgICAgIG1lbW8ubV93aWR0aCA9IHVpLnNpemUud2lkdGg7XHJcbiAgICAgICAgICBtZW1vLm1faGVpZ2h0ID0gdWkuc2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGRlbGV0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyk7XHJcbiAgICBkZWxldGVCdG5EaXYuZGF0YXNldC5tZW1vSWQgPSBtZW1vLm1faWQ7XHJcbiAgICBkZWxldGVCdG5EaXYuZGF0YXNldC5tZW1vUGFnZU5vID0gbWVtby5tX3BhZ2VObztcclxuXHJcbiAgICBkZWxldGVCdG5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUJ0bkNsaWNrRXZlbnRMaXN0ZW5lcik7XHJcbiAgICBtZW1vRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkRpdik7XHJcblxyXG4gICAgbGV0IHByb3BlcnR5QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb3BlcnR5QnRuRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLk1FTU9fUFJPUEVSVFlfQlVUVE9OX0NMQVNTKTtcclxuICAgIHByb3BlcnR5QnRuRGl2LmRhdGFzZXQubWVtb0lkID0gbWVtby5tX2lkO1xyXG4gICAgcHJvcGVydHlCdG5EaXYuZGF0YXNldC5tZW1vUGFnZU5vID0gbWVtby5tX3BhZ2VObztcclxuXHJcbiAgICBwcm9wZXJ0eUJ0bkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVtb1Byb3BlcnR5QnRuQ2xpY2tFdmVudExpc3RlbmVyKTtcclxuICAgIG1lbW9EaXYuYXBwZW5kQ2hpbGQocHJvcGVydHlCdG5EaXYpO1xyXG4gICAgcmV0dXJuIG1lbW9EaXY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlRmllbGREaXZcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVGaWVsZERpdlxyXG4gICAqIEBkZXNjcmlwdGlvbiDtlYTrk5wg66CI7J207Ja0IOychOyXkCDsmKzrnbzqsIAg7ZWE65Oc66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2Ugb2JqZWN0IHRoaXMgb2JlamN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCAgIOuenOuNlOungeuQmOuKlCBQREYgUGFnZeydmCB2aWV3cG9ydFxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZUZpZWxkRGl2KF90aGlzUGFnZSwgZmllbGQsIHZpZXdwb3J0LCBmaWVsZFdyYXBlcikge1xyXG4gICAgY29uc3Qgdmlld3BvcnRYWSA9IHZpZXdwb3J0LmNvbnZlcnRUb1ZpZXdwb3J0UG9pbnQoXHJcbiAgICAgIGZpZWxkLm1fcGRmWCxcclxuICAgICAgZmllbGQubV9wZGZZXHJcbiAgICApO1xyXG4gICAgY29uc3Qgdmlld3BvcnRYWTIgPSB2aWV3cG9ydC5jb252ZXJ0VG9WaWV3cG9ydFBvaW50KFxyXG4gICAgICBmaWVsZC5tX3BkZlgyLFxyXG4gICAgICBmaWVsZC5tX3BkZlkyXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG5ld1ggPSB2aWV3cG9ydFhZWzBdO1xyXG4gICAgY29uc3QgbmV3WSA9IHZpZXdwb3J0WFlbMV07XHJcbiAgICBjb25zdCBuZXdYMiA9IHZpZXdwb3J0WFkyWzBdO1xyXG4gICAgY29uc3QgbmV3WTIgPSB2aWV3cG9ydFhZMlsxXTtcclxuICAgIGNvbnN0IG5ld1cgPSBNYXRoLmFicyhuZXdYMiAtIG5ld1gpO1xyXG4gICAgY29uc3QgbmV3SCA9IE1hdGguYWJzKG5ld1kyIC0gbmV3WSk7XHJcbiAgICBsZXQgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS5sZWZ0ID0gbmV3WCArIFwicHhcIjtcclxuICAgIGZpZWxkRGl2LnN0eWxlLnRvcCA9IG5ld1kgKyBcInB4XCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS53aWR0aCA9IG5ld1cgKyBcInB4XCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS5oZWlnaHQgPSBuZXdIICsgXCJweFwiO1xyXG4gICAgZmllbGREaXYuaWQgPSBmaWVsZC5tX2lkICsgXCJfZGl2XCI7XHJcblxyXG4gICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDE1OCwgMjE4LCAwLjIpXCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS5vdXRsaW5lQ29sb3IgPSBcIiM5MWFhYmFcIjtcclxuICAgIGZpZWxkRGl2LnN0eWxlLm91dGxpbmVTdHlsZSA9IFwiZGFzaGVkXCI7XHJcbiAgICBmaWVsZERpdi5zdHlsZS5vdXRsaW5lV2lkdGggPSBcIjFweFwiO1xyXG5cclxuICAgIC8vMTIwNiDrs5HsmrEg7LaU6rCAIDog7Y+s7Luk7Iqk7IucIOqyveqzhOyEoCDsg4kg67OA7ZmU7ZW07IScIO2RnOyLnFxyXG4gICAgZmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGl2IOuCtOu2gOydmCDsmpTshozqsIAg7Y+s7Luk7Iqk65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICBmaWVsZERpdi5zdHlsZS5vdXRsaW5lQ29sb3IgPSBcInJnYigxMyA2MyAyNTAgLyA4OCUpXCI7XHJcbiAgICAgICAgZmllbGREaXYuc3R5bGUub3V0bGluZVdpZHRoID0gXCIzcHhcIjtcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGZpZWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiYmx1clwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGl2IOuCtOu2gOydmCDsmpTshozqsIAgYmx1cijtj6zsu6TsiqQg7ZW07KCcKeuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgZmllbGREaXYuc3R5bGUub3V0bGluZUNvbG9yID0gXCIjOTFhYWJhXCI7XHJcbiAgICAgICAgZmllbGREaXYuc3R5bGUub3V0bGluZVdpZHRoID0gXCIxcHhcIjtcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9yZ1dpZHRoID0gTWF0aC5hYnMoZmllbGQubV9wZGZYIC0gZmllbGQubV9wZGZYMik7XHJcbiAgICBjb25zdCBvcmdIZWlnaHQgPSBNYXRoLmFicyhmaWVsZC5tX3BkZlkgLSBmaWVsZC5tX3BkZlkyKTtcclxuICAgIGNvbnN0IHhTY2FsZSA9IG5ld1cgLyBvcmdXaWR0aDtcclxuICAgIGNvbnN0IHlTY2FsZSA9IG5ld0ggLyBvcmdIZWlnaHQ7XHJcblxyXG4gICAgc3dpdGNoIChmaWVsZC5tX3R5cGUpIHtcclxuICAgICAgY2FzZSBcIlRleHRGaWVsZFwiOlxyXG4gICAgICBjYXNlIFwiTnVtYmVyRmllbGRcIjpcclxuICAgICAgY2FzZSBcIkRhdGVGaWVsZFwiOiB7XHJcbiAgICAgICAgbGV0IHRleHRGaWVsZERpdiA9IF90aGlzUGFnZS5jcmVhdGVUZXh0RmllbGQoXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG5ld1csXHJcbiAgICAgICAgICBuZXdILFxyXG4gICAgICAgICAgeFNjYWxlLFxyXG4gICAgICAgICAgX3RoaXNQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaWVsZERpdi5hcHBlbmRDaGlsZCh0ZXh0RmllbGREaXYpO1xyXG4gICAgICAgIGlmIChmaWVsZC5tX3R5cGUgPT09IFwiTnVtYmVyRmllbGRcIiAmJiBmaWVsZC5tX3VzZUNhbGMgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICB0ZXh0RmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgX3RoaXNQYWdlLnNob3dDYWxjKHRleHRGaWVsZERpdiwgbmV3WCwgbmV3WSwgbmV3SCwgZmllbGRXcmFwZXIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJNdWx0aUxpbmVUZXh0RmllbGRcIjoge1xyXG4gICAgICAgIGxldCBtdWx0aWxpbmVUZXh0RmllbGQgPSBfdGhpc1BhZ2UuY3JlYXRlTXVsdGlsaW5lVGV4dEZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIHhTY2FsZSxcclxuICAgICAgICAgIF90aGlzUGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQobXVsdGlsaW5lVGV4dEZpZWxkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiTGFiZWxGaWVsZFwiOiB7XHJcbiAgICAgICAgbGV0IGxhYmVsRmllbGQgPSBfdGhpc1BhZ2UuY3JlYXRlTGFiZWxGaWVsZChcclxuICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgbmV3VyxcclxuICAgICAgICAgIG5ld0gsXHJcbiAgICAgICAgICB4U2NhbGUsXHJcbiAgICAgICAgICBfdGhpc1BhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKGxhYmVsRmllbGQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJTaWduRmllbGRcIjoge1xyXG4gICAgICAgIGxldCBzaWduRmllbGREaXYgPSBfdGhpc1BhZ2UuY3JlYXRlU2lnbkZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIF90aGlzUGFnZSxcclxuICAgICAgICAgIGZpZWxkLm1fdXNlRHJhd1NpZ24sXHJcbiAgICAgICAgICBmaWVsZC5tX3VzZUltYWdlU2lnbixcclxuICAgICAgICAgIGZpZWxkLm1fdXNlUmVnU2lnbixcclxuICAgICAgICAgIGZpZWxkLm1fcmVnU2lnbkFwaVVybFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQoc2lnbkZpZWxkRGl2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiSW1hZ2VGaWVsZFwiOiB7XHJcbiAgICAgICAgbGV0IGltZ0ZpZWxkRGl2ID0gX3RoaXNQYWdlLmNyZWF0ZUltYWdlRmllbGQoXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG5ld1csXHJcbiAgICAgICAgICBuZXdILFxyXG4gICAgICAgICAgX3RoaXNQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaWVsZERpdi5hcHBlbmRDaGlsZChpbWdGaWVsZERpdik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIkNoZWNrYm94RmllbGRcIjoge1xyXG4gICAgICAgIGxldCBjaGVja2JveEZpZWxkRGl2ID0gX3RoaXNQYWdlLmNyZWF0ZUNoZWNrYm94RmllbGQoXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG5ld1csXHJcbiAgICAgICAgICBuZXdILFxyXG4gICAgICAgICAgX3RoaXNQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaWVsZERpdi5hcHBlbmRDaGlsZChjaGVja2JveEZpZWxkRGl2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiUmFkaW9GaWVsZFwiOiB7XHJcbiAgICAgICAgbGV0IHJhZGlvRmllbGREaXYgPSBfdGhpc1BhZ2UuY3JlYXRlUmFkaW9GaWVsZChcclxuICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgbmV3VyxcclxuICAgICAgICAgIG5ld0gsXHJcbiAgICAgICAgICBfdGhpc1BhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGZpZWxkRGl2LmFwcGVuZENoaWxkKHJhZGlvRmllbGREaXYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJDb21ib2JveEZpZWxkXCI6IHtcclxuICAgICAgICBsZXQgY29tYm9ib3hGaWVsZERpdiA9IF90aGlzUGFnZS5jcmVhdGVDb21ib2JveEZpZWxkKFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBuZXdXLFxyXG4gICAgICAgICAgbmV3SCxcclxuICAgICAgICAgIF90aGlzUGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmllbGREaXYuYXBwZW5kQ2hpbGQoY29tYm9ib3hGaWVsZERpdik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZUZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uIO2VhOuTnOugiOydtOyWtOulvCDsg53shLHtlZjqs6Ag7ZWE65Oc66W8IOunjOuToOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYWdlTm9kZSBQREYuanPsl5DshJwg7IOd7ISx65CcIHBhZ2UgRWxlbWVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCDrnpzrjZTrp4HrkJjripQgUERGIFBhZ2XsnZggdmlld3BvcnRcclxuICAgKiBAcGFyYW0ge051bWJlcn0g7ZiE7J6sIOuqqOuTnCBtb2RlXHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZUZpZWxkKFxyXG4gICAgcGFnZU5vZGUsXHJcbiAgICB2aWV3cG9ydCxcclxuICAgIHJlYWRlck1vZGUsXHJcbiAgICBkZWxldGVCdG5DbGlja0V2ZW50TGlzdGVuZXIsXHJcbiAgICBtZW1vUHJvcGVydHlCdG5DbGlja0V2ZW50TGlzdGVuZXJcclxuICApIHtcclxuICAgIGxldCBfcmVuZGVyUGFnZURhdGEgPSB0aGlzO1xyXG4gICAgbGV0IG9sZEZpZWxkTGF5ZXIgPSBwYWdlTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5cIiArIENPTlNUQU5UUy5SRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTU1xyXG4gICAgKTtcclxuICAgIGlmIChvbGRGaWVsZExheWVyICE9PSBudWxsICYmIG9sZEZpZWxkTGF5ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwYWdlTm9kZS5yZW1vdmVDaGlsZChvbGRGaWVsZExheWVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhfcmVuZGVyUGFnZURhdGEuZmllbGRzKTtcclxuICAgIGxldCBmaWVsZExheWVyID0gX3JlbmRlclBhZ2VEYXRhLmNyZWF0ZUZpZWxkTGF5ZXIoXHJcbiAgICAgIHBhZ2VOb2RlLnN0eWxlLndpZHRoLFxyXG4gICAgICBwYWdlTm9kZS5zdHlsZS5oZWlnaHQsXHJcbiAgICAgIENPTlNUQU5UUy5SRUFERVJfUEFHRV9GSUVMRF9MQVlFUl9DTEFTU1xyXG4gICAgKTtcclxuICAgIGlmIChyZWFkZXJNb2RlICE9PSBDT05TVEFOVFMuUkVBREVSX0ZJRUxEX0lOUFVUX01PREUpIHtcclxuICAgICAgZmllbGRMYXllci5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUik7XHJcbiAgICB9XHJcbiAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZChmaWVsZExheWVyKTtcclxuICAgIGxldCBmaWVsZFdyYXBlciA9IG51bGw7XHJcbiAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZpZWxkV3JhcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZmllbGRXcmFwZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgIGZpZWxkV3JhcGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgIGZpZWxkV3JhcGVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICBmaWVsZExheWVyLmFwcGVuZENoaWxkKGZpZWxkV3JhcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3RoaXNQYWdlID0gdGhpcztcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIHZhciBmaWVsZCA9IF9yZW5kZXJQYWdlRGF0YS5maWVsZHNba2V5XTtcclxuICAgICAgbGV0IGZpZWxkRGl2ID0gX3JlbmRlclBhZ2VEYXRhLmNyZWF0ZUZpZWxkRGl2KFxyXG4gICAgICAgIF90aGlzUGFnZSxcclxuICAgICAgICBmaWVsZCxcclxuICAgICAgICB2aWV3cG9ydCxcclxuICAgICAgICBmaWVsZFdyYXBlclxyXG4gICAgICApO1xyXG4gICAgICBmaWVsZFdyYXBlci5hcHBlbmRDaGlsZChmaWVsZERpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgb2xkTWVtb0xheWVyID0gcGFnZU5vZGUucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuXCIgKyBDT05TVEFOVFMuUkVBREVSX1BBR0VfTUVNT19MQVlFUl9DTEFTU1xyXG4gICAgKTtcclxuICAgIGlmIChvbGRNZW1vTGF5ZXIgIT09IG51bGwgJiYgb2xkTWVtb0xheWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFnZU5vZGUucmVtb3ZlQ2hpbGQob2xkTWVtb0xheWVyKTtcclxuICAgIH1cclxuICAgIGxldCBtZW1vTGF5ZXIgPSBfcmVuZGVyUGFnZURhdGEuY3JlYXRlRmllbGRMYXllcihcclxuICAgICAgcGFnZU5vZGUuc3R5bGUud2lkdGgsXHJcbiAgICAgIHBhZ2VOb2RlLnN0eWxlLmhlaWdodCxcclxuICAgICAgQ09OU1RBTlRTLlJFQURFUl9QQUdFX01FTU9fTEFZRVJfQ0xBU1NcclxuICAgICk7XHJcbiAgICBpZiAocmVhZGVyTW9kZSA9PT0gQ09OU1RBTlRTLlJFQURFUl9GSUVMRF9JTlBVVF9NT0RFKSB7XHJcbiAgICAgIG1lbW9MYXllci5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5OT19FVkVOVF9MQVlFUik7XHJcbiAgICB9XHJcbiAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZChtZW1vTGF5ZXIpO1xyXG4gICAgbGV0IG1lbW9XcmFwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVtb1dyYXBlci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIG1lbW9XcmFwZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIG1lbW9XcmFwZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBtZW1vTGF5ZXIuYXBwZW5kQ2hpbGQobWVtb1dyYXBlcik7XHJcblxyXG4gICAgY29uc3QgbWVtb0tleXMgPSBPYmplY3Qua2V5cyhfcmVuZGVyUGFnZURhdGEubWVtb3MpO1xyXG4gICAgbWVtb0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIGxldCBtZW1vID0gX3JlbmRlclBhZ2VEYXRhLm1lbW9zW2tleV07XHJcbiAgICAgIGxldCBtZW1vRGl2ID0gX3JlbmRlclBhZ2VEYXRhLmNyZWF0ZU1lbW9EaXYoXHJcbiAgICAgICAgX3RoaXNQYWdlLFxyXG4gICAgICAgIG1lbW8sXHJcbiAgICAgICAgdmlld3BvcnQsXHJcbiAgICAgICAgZGVsZXRlQnRuQ2xpY2tFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIG1lbW9Qcm9wZXJ0eUJ0bkNsaWNrRXZlbnRMaXN0ZW5lclxyXG4gICAgICApO1xyXG4gICAgICBtZW1vV3JhcGVyLmFwcGVuZENoaWxkKG1lbW9EaXYpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY3JlYXRlVGV4dEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlVGV4dEZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDtlYTrk5wgTm9kZeulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgRmllbGQg7KCV67O0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAgRmllbGQgV2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICBGaWVsZCBIZWlnaHRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZm9udFNjYWxlIO2PsO2KuCDtgazquLDsnZgg67Cw7JyoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgIFBkZiBQYWdlIE51bWJlclxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZVRleHRGaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgZm9udFNjYWxlLCBwYWdlKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgIHRleHRGaWVsZERpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUuZm9udEZhbWlseSA9IGZpZWxkLm1fZm9udE5hbWU7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUuZm9udFNpemUgPSBmaWVsZC5tX2ZvbnRTaXplICogZm9udFNjYWxlICsgXCJweFwiO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmNvbG9yID0gZmllbGQubV9mb250Q29sb3I7XHJcbiAgICB0ZXh0RmllbGREaXYuc3R5bGUudGV4dEFsaWduID0gZmllbGQubV90ZXh0QWxpZ247XHJcblxyXG4gICAgaWYgKHRoaXMubV9yZWFkb25seSkge1xyXG4gICAgICB0ZXh0RmllbGREaXYucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tX2JvbGQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIHRleHRGaWVsZERpdi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICB9XHJcbiAgICB0ZXh0RmllbGREaXYudmFsdWUgPSBmaWVsZC5tX3ZhbHVlO1xyXG4gICAgLy9yZ2IoMCAxNTggMjE4IC8gMjAlKTtcclxuICAgIC8vMXB4IGRhc2hlZCAjOTFhYWJhO1xyXG4gICAgdGV4dEZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIHRleHRGaWVsZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNoYW5nZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubV9pbnB1dE1pbik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1faW5wdXRNaW4pKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGV2dC50YXJnZXQudmFsdWUpIDwgTnVtYmVyKGZpZWxkLm1faW5wdXRNaW4pKSB7XHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQudmFsdWUgPSBmaWVsZC5tX2lucHV0TWluO1xyXG4gICAgICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgYWxlcnQoXCLsnoXroKUg67KU7JyE66W8IOuyl+yWtOuCrOyKteuLiOuLpC5cXG7ri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqULlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVV0aWxzLmlzU3RyaW5nRW1wdHkoZmllbGQubV9pbnB1dE1heCkpIHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoZXZ0LnRhcmdldC52YWx1ZSkgPiBOdW1iZXIoZmllbGQubV9pbnB1dE1heCkpIHtcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC52YWx1ZSA9IGZpZWxkLm1faW5wdXRNYXg7XHJcbiAgICAgICAgICAgIGZpZWxkLm1fdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBhbGVydChcIuyeheugpSDrspTsnITrpbwg67KX7Ja064Ks7Iq164uI64ukLlxcbuuLpOyLnCDsnoXroKXtlbTso7zshLjsmpQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX2RlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgbGV0IGR2VmFsdWUgPSB0aGlzLm1fZGVmYXVsdFZhbHVlSW5mb1tmaWVsZC5tX2RlZmF1bHRWYWx1ZV07XHJcbiAgICAgIGlmIChkdlZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0ZXh0RmllbGREaXYudmFsdWUgPSBkdlZhbHVlO1xyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBkdlZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm1fdHlwZSA9PT0gXCJEYXRlRmllbGRcIikge1xyXG4gICAgICBsZXQgZHZWYWx1ZSA9IG51bGw7XHJcbiAgICAgIGlmIChmaWVsZC5tX3VzZUN1cnJlbnREYXRlID09PSBcInRydWVcIikge1xyXG4gICAgICAgIGR2VmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBmbGF0cGlja3IuZm9ybWF0RGF0ZShkdlZhbHVlLCBmaWVsZC5tX2lucHV0Rm9ybWF0KTtcclxuICAgICAgfVxyXG4gICAgICBwYWdlLmRhdGVQaWNrZXIgPSBmbGF0cGlja3IodGV4dEZpZWxkRGl2LCB7XHJcbiAgICAgICAgbG9jYWxlOiBLb3JlYW4sXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZmllbGQubV9pbnB1dEZvcm1hdCxcclxuICAgICAgICBkZWZhdWx0RGF0ZTogZHZWYWx1ZSxcclxuICAgICAgICBtaW5EYXRlOiBmaWVsZC5tX2lucHV0TWluLFxyXG4gICAgICAgIG1heERhdGU6IGZpZWxkLm1faW5wdXRNYXgsXHJcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSB7XHJcbiAgICAgICAgICBmaWVsZC5tX3ZhbHVlID0gZGF0ZVN0cjtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGQubV90eXBlID09PSBcIk51bWJlckZpZWxkXCIpIHtcclxuICAgICAgdGV4dEZpZWxkRGl2LnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICBpZiAoIVV0aWxzLmlzU3RyaW5nRW1wdHkoZmllbGQubV9pbnB1dE1heCkpIHtcclxuICAgICAgICB0ZXh0RmllbGREaXYubWF4ID0gTnVtYmVyKGZpZWxkLm1faW5wdXRNYXgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghVXRpbHMuaXNTdHJpbmdFbXB0eShmaWVsZC5tX2lucHV0TWluKSkge1xyXG4gICAgICAgIHRleHRGaWVsZERpdi5taW4gPSBOdW1iZXIoZmllbGQubV9pbnB1dE1pbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0RmllbGREaXY7XHJcbiAgfVxyXG5cclxuICBzaG93Q2FsYyhmaWVsZElucHV0LCBmaWVsZERpdlgsIGZpZWxkRGl2WSwgZmllbGREaXZILCBmaWVsZFdyYXBlcikge1xyXG4gICAgbGV0IG9sZENhbGMgPSBmaWVsZFdyYXBlci5xdWVyeVNlbGVjdG9yKFwiLkNhbGNDb250YWluZXJcIik7XHJcbiAgICBpZiAob2xkQ2FsYyAhPT0gbnVsbCAmJiBvbGRDYWxjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2xkQ2FsYy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2FsY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiQ2FsY0NvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNhbGNGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBjYWxjRm9ybS5uYW1lID0gXCJDYWxjRm9ybVwiO1xyXG4gICAgbGV0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGlzcGxheURpdi5jbGFzc05hbWUgPSBcIkNhbGNEaXNwbGF5XCI7XHJcbiAgICBsZXQgZGlzcGxheVJlc3VsdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZGlzcGxheVJlc3VsdElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGRpc3BsYXlSZXN1bHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiMFwiO1xyXG4gICAgZGlzcGxheVJlc3VsdElucHV0Lm5hbWUgPSBcIkNhbGNEaXNwbGF5UmVzdWx0XCI7XHJcbiAgICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlSZXN1bHRJbnB1dCk7XHJcbiAgICBjYWxjRm9ybS5hcHBlbmRDaGlsZChkaXNwbGF5RGl2KTtcclxuXHJcbiAgICBsZXQgY2FsY0J1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY0J1dHRvbnNEaXYuY2xhc3NOYW1lID0gXCJDYWxjQnV0dG9uc1wiO1xyXG4gICAgbGV0IGNhbGNSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNSb3cxLmNsYXNzTmFtZSA9IFwiQ2FsY1Jvd1wiO1xyXG4gICAgbGV0IGNhbGNCNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCNy50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCNy52YWx1ZSA9IFwiN1wiO1xyXG4gICAgY2FsY0I3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCNy52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNCOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCOC50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCOC52YWx1ZSA9IFwiOFwiO1xyXG4gICAgY2FsY0I4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCOC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNCOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCOS50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCOS52YWx1ZSA9IFwiOVwiO1xyXG4gICAgY2FsY0I5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCOS52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNBZGRCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0FkZEIudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQWRkQi52YWx1ZSA9IFwiK1wiO1xyXG4gICAgY2FsY0FkZEIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0FkZEIudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNhbGNSb3cxLmFwcGVuZENoaWxkKGNhbGNCNyk7XHJcbiAgICBjYWxjUm93MS5hcHBlbmRDaGlsZChjYWxjQjgpO1xyXG4gICAgY2FsY1JvdzEuYXBwZW5kQ2hpbGQoY2FsY0I5KTtcclxuICAgIGNhbGNSb3cxLmFwcGVuZENoaWxkKGNhbGNBZGRCKTtcclxuXHJcbiAgICBsZXQgY2FsY1JvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsY1JvdzIuY2xhc3NOYW1lID0gXCJDYWxjUm93XCI7XHJcbiAgICBsZXQgY2FsY0I0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0I0LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0I0LnZhbHVlID0gXCI0XCI7XHJcbiAgICBjYWxjQjQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0I0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY0I1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0I1LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0I1LnZhbHVlID0gXCI1XCI7XHJcbiAgICBjYWxjQjUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0I1LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY0I2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0I2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0I2LnZhbHVlID0gXCI2XCI7XHJcbiAgICBjYWxjQjYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0I2LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgY2FsY1N1YkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjU3ViQi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNTdWJCLnZhbHVlID0gXCItXCI7XHJcbiAgICBjYWxjU3ViQi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjU3ViQi52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgY2FsY1JvdzIuYXBwZW5kQ2hpbGQoY2FsY0I0KTtcclxuICAgIGNhbGNSb3cyLmFwcGVuZENoaWxkKGNhbGNCNSk7XHJcbiAgICBjYWxjUm93Mi5hcHBlbmRDaGlsZChjYWxjQjYpO1xyXG4gICAgY2FsY1JvdzIuYXBwZW5kQ2hpbGQoY2FsY1N1YkIpO1xyXG5cclxuICAgIGxldCBjYWxjUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYWxjUm93My5jbGFzc05hbWUgPSBcIkNhbGNSb3dcIjtcclxuICAgIGxldCBjYWxjQjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjEudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjEudmFsdWUgPSBcIjFcIjtcclxuICAgIGNhbGNCMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjEudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjIudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjIudmFsdWUgPSBcIjJcIjtcclxuICAgIGNhbGNCMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjIudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjQjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQjMudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjQjMudmFsdWUgPSBcIjNcIjtcclxuICAgIGNhbGNCMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgPSBkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUgKyBjYWxjQjMudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjTXVsQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNNdWxCLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY011bEIudmFsdWUgPSBcIipcIjtcclxuICAgIGNhbGNNdWxCLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNNdWxCLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBjYWxjUm93My5hcHBlbmRDaGlsZChjYWxjQjEpO1xyXG4gICAgY2FsY1JvdzMuYXBwZW5kQ2hpbGQoY2FsY0IyKTtcclxuICAgIGNhbGNSb3czLmFwcGVuZENoaWxkKGNhbGNCMyk7XHJcbiAgICBjYWxjUm93My5hcHBlbmRDaGlsZChjYWxjTXVsQik7XHJcblxyXG4gICAgbGV0IGNhbGNSb3c0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhbGNSb3c0LmNsYXNzTmFtZSA9IFwiQ2FsY1Jvd1wiO1xyXG4gICAgbGV0IGNhbGNCMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNhbGNCMC50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNCMC52YWx1ZSA9IFwiMFwiO1xyXG4gICAgY2FsY0IwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSA9IGRpc3BsYXlSZXN1bHRJbnB1dC52YWx1ZSArIGNhbGNCMC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNBQ0IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYWxjQUNCLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgY2FsY0FDQi52YWx1ZSA9IFwiQUNcIjtcclxuICAgIGNhbGNBQ0IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIH0pO1xyXG4gICAgbGV0IGNhbGNEaXZCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0RpdkIudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYWxjRGl2Qi52YWx1ZSA9IFwiL1wiO1xyXG4gICAgY2FsY0RpdkIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlICsgY2FsY0RpdkIudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGxldCBjYWxjRXF1YWxCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2FsY0VxdWFsQi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbGNFcXVhbEIudmFsdWUgPSBcIj1cIjtcclxuICAgIGNhbGNFcXVhbEIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZGlzcGxheVJlc3VsdElucHV0LnZhbHVlID0gZXZhbChkaXNwbGF5UmVzdWx0SW5wdXQudmFsdWUpO1xyXG4gICAgICBmaWVsZElucHV0LnZhbHVlID0gZGlzcGxheVJlc3VsdElucHV0LnZhbHVlO1xyXG4gICAgICBmaWVsZElucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgIH0pO1xyXG4gICAgY2FsY1JvdzQuYXBwZW5kQ2hpbGQoY2FsY0IwKTtcclxuICAgIGNhbGNSb3c0LmFwcGVuZENoaWxkKGNhbGNBQ0IpO1xyXG4gICAgY2FsY1JvdzQuYXBwZW5kQ2hpbGQoY2FsY0RpdkIpO1xyXG4gICAgY2FsY1JvdzQuYXBwZW5kQ2hpbGQoY2FsY0VxdWFsQik7XHJcblxyXG4gICAgY2FsY0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FsY1JvdzEpO1xyXG4gICAgY2FsY0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FsY1JvdzIpO1xyXG4gICAgY2FsY0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FsY1JvdzMpO1xyXG4gICAgY2FsY0J1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FsY1JvdzQpO1xyXG4gICAgY2FsY0Zvcm0uYXBwZW5kQ2hpbGQoY2FsY0J1dHRvbnNEaXYpO1xyXG4gICAgY2FsY0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxjRm9ybSk7XHJcbiAgICBjYWxjQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgY2FsY0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gZmllbGREaXZYICsgXCJweFwiO1xyXG4gICAgY2FsY0NvbnRhaW5lci5zdHlsZS50b3AgPSBmaWVsZERpdlkgKyBmaWVsZERpdkggKyAxMCArIFwicHhcIjtcclxuXHJcbiAgICBsZXQgY2xvc2VCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2xvc2VCdG5EaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuRklFTERfREVMRVRFX0JVVFRPTl9DTEFTUyk7XHJcblxyXG4gICAgY2FsY0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bkRpdik7XHJcblxyXG4gICAgY2xvc2VCdG5EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbGV0IG9sZENhbGMgPSBmaWVsZFdyYXBlci5xdWVyeVNlbGVjdG9yKFwiLkNhbGNDb250YWluZXJcIik7XHJcbiAgICAgIGlmIChvbGRDYWxjICE9PSBudWxsICYmIG9sZENhbGMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9sZENhbGMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZpZWxkV3JhcGVyLmFwcGVuZENoaWxkKGNhbGNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZU11bHRpbGluZVRleHRGaWVsZFxyXG4gICAqIEBuYW1lIG1vZHVsZTpSZWFkZXIvUmVhZGVyTW9kLlJlYWRlclBhZ2VEYXRhI2NyZWF0ZU11bHRpbGluZVRleHRGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiDrqYDti7Drnbzsnbgg7YWN7Iqk7Yq4IO2VhOuTnCBOb2Rl66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICBGaWVsZCBXaWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgIEZpZWxkIEhlaWdodFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmb250U2NhbGUg7Y+w7Yq4IO2BrOq4sOydmCDrsLDsnKhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZSAgUGRmIFBhZ2UgTnVtYmVyXHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlTXVsdGlsaW5lVGV4dEZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCBmb250U2NhbGUsIHBhZ2UpIHtcclxuICAgIGxldCBtdWx0aWxpbmVUZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5mb250RmFtaWx5ID0gZmllbGQubV9mb250TmFtZTtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5mb250U2l6ZSA9IGZpZWxkLm1fZm9udFNpemUgKiBmb250U2NhbGUgKyBcInB4XCI7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuY29sb3IgPSBmaWVsZC5tX2ZvbnRDb2xvcjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS50ZXh0QWxpZ24gPSBmaWVsZC5tX3RleHRBbGlnbjtcclxuXHJcbiAgICBpZiAoZmllbGQubV9yZWFkb25seSkge1xyXG4gICAgICBtdWx0aWxpbmVUZXh0RmllbGQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpZWxkLm1fYm9sZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgbXVsdGlsaW5lVGV4dEZpZWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgIH1cclxuICAgIG11bHRpbGluZVRleHRGaWVsZC52YWx1ZSA9IGZpZWxkLm1fdmFsdWU7XHJcbiAgICBtdWx0aWxpbmVUZXh0RmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG5cclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcclxuICAgIG11bHRpbGluZVRleHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNoYW5nZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZmllbGQubV92YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubV92YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpbGluZVRleHRGaWVsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVTaWduRmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlY3JlYXRlU2lnbkZpZWxkYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVTaWduRmllbGRcclxuICAgKiBAZGVzY3JpcHRpb24gIOyEnOuqhSDtlYTrk5wgTm9kZeulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgRmllbGQg7KCV67O0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAgRmllbGQgV2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICBGaWVsZCBIZWlnaHRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gX3RoaXNQYWdlICB0aGlzIFJlbmRlclBhZ2VEYXRhIE9iamVjdFxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZVNpZ25GaWVsZChcclxuICAgIGZpZWxkLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBfdGhpc1BhZ2UsXHJcbiAgICBkcmF3U2lnbixcclxuICAgIGltYWdlU2lnbixcclxuICAgIHJlZ1NpZ24sXHJcbiAgICByZWdTaWduQXBpVXJsXHJcbiAgKSB7XHJcbiAgICBsZXQgc2lnbkZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIHNpZ25GaWVsZERpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIHNpZ25GaWVsZERpdi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIHNpZ25GaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgc2lnbkZpZWxkRGl2LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBzaWduRmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgc2lnbkZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgc2lnbkZpZWxkRGl2LmlkID0gZmllbGQubV9pZCArIFwiX2NhbnZhc1wiO1xyXG4gICAgLy90ZXh0RmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG5cclxuICAgIGlmICghdGhpcy5tX3JlYWRvbmx5KSB7XHJcbiAgICAgIHNpZ25GaWVsZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBsZXQgcG9wdXBEaXYgPSBfdGhpc1BhZ2UubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc2lnbkVsZW1lbnRcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF5ZXJQb3AgPSBwb3B1cERpdi5xdWVyeVNlbGVjdG9yKFwiLlNpZ24tTGF5ZXJwb3BcIik7XHJcbiAgICAgICAgICAgIGxheWVyUG9wLnNldEF0dHJpYnV0ZShcImZpZWxkSWRcIiwgZmllbGQubV9pZCk7XHJcbiAgICAgICAgICAgIGxheWVyUG9wLnNldEF0dHJpYnV0ZShcInBhZ2VOb1wiLCBmaWVsZC5tX3BhZ2VObyk7XHJcbiAgICAgICAgICAgIGxheWVyUG9wLnNldEF0dHJpYnV0ZShcInNpZ25XaWR0aFwiLCB3aWR0aCk7XHJcbiAgICAgICAgICAgIGxheWVyUG9wLnNldEF0dHJpYnV0ZShcInNpZ25IZWlnaHRcIiwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8qMjAyMy0xMi0xNCAqL1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJkcmF3U2lnblwiLCBkcmF3U2lnbik7XHJcbiAgICAgICAgICAgIGxheWVyUG9wLnNldEF0dHJpYnV0ZShcImltYWdlU2lnblwiLCBpbWFnZVNpZ24pO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJyZWdTaWduXCIsIHJlZ1NpZ24pO1xyXG4gICAgICAgICAgICBsYXllclBvcC5zZXRBdHRyaWJ1dGUoXCJyZWdTaWduQXBpVXJsXCIsIHJlZ1NpZ25BcGlVcmwpO1xyXG5cclxuICAgICAgICAgIGlmIChwb3B1cERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJUZW1wbGF0ZS1IaWRlXCIpKSB7XHJcbiAgICAgICAgICAgIHBvcHVwRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgICAgICAgICBwb3B1cERpdi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBTaWduLUxheWVycG9wIOyalOyGjOulvCDssL7slYQg7ZW064u5IOuNsOydtO2EsCDsho3shLHsnYQg6rCA7KC47Ji164uI64ukLlxyXG4gICAgICAgICAgdmFyIGRyYXdTaWduRmxhZyA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcImRyYXdzaWduXCIpID09PSBcInRydWVcIjtcclxuICAgICAgICAgIHZhciBpbWFnZVNpZ25GbGFnID0gbGF5ZXJQb3AuZ2V0QXR0cmlidXRlKFwiaW1hZ2VzaWduXCIpID09PSBcInRydWVcIjtcclxuICAgICAgICAgIHZhciByZWdTaWduRmxhZyA9IGxheWVyUG9wLmdldEF0dHJpYnV0ZShcInJlZ3NpZ25cIikgPT09IFwidHJ1ZVwiO1xyXG5cclxuICAgICAgICAgIC8vIOqwgSDtg63sl5Ag64yA7ZWcIO2RnOyLnCDsl6zrtoDrpbwg7ISk7KCV7ZWp64uI64ukLlxyXG4gICAgICAgICAgdmFyIGRyYXdUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25EcmF3VGFiQnV0dG9uXCIpO1xyXG4gICAgICAgICAgdmFyIGltYWdlVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFtcFNpZ25UYWJCdXR0b25cIik7XHJcbiAgICAgICAgICB2YXIgcmVnVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3RlcmVkU2lnblRhYkJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgICBkcmF3VGFiLnN0eWxlLmRpc3BsYXkgPSBkcmF3U2lnbkZsYWcgPyBcIlwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICBpbWFnZVRhYi5zdHlsZS5kaXNwbGF5ID0gaW1hZ2VTaWduRmxhZyA/IFwiXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgIHJlZ1RhYi5zdHlsZS5kaXNwbGF5ID0gcmVnU2lnbkZsYWcgPyBcIlwiIDogXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgLy8g6riw7KG07JeQICdvbicg7YG0656Y7Iqk66W8IOqwgOynhCDtg63sl5DshJwg7YG0656Y7IqkIOygnOqxsFxyXG4gICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuUG9wdXAtVGFiLU1haW4gbGlcIilcclxuICAgICAgICAgICAgLmZvckVhY2goKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKSk7XHJcblxyXG4gICAgICAgICAgLy8g6rCA7J6lIOuovOyggCDrgpjtg4DrgpjripQg7Zmc7ISx7ZmUIO2DreydhCDssL7slYQgJ29uJyDtgbTrnpjsiqQg7LaU6rCAIOuwjyDtgbTrpq0g7J2067Kk7Yq4IOuwnOyDnVxyXG4gICAgICAgICAgaWYgKGRyYXdTaWduRmxhZyAmJiBkcmF3VGFiLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGRyYXdUYWIuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xyXG4gICAgICAgICAgICBkcmF3VGFiLmNsaWNrKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGltYWdlU2lnbkZsYWcgJiYgaW1hZ2VUYWIuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgaW1hZ2VUYWIuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xyXG4gICAgICAgICAgICBpbWFnZVRhYi5jbGljaygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZWdTaWduRmxhZyAmJiByZWdUYWIuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgcmVnVGFiLmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcclxuICAgICAgICAgICAgcmVnVGFiLmNsaWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAgIF90aGlzUGFnZS5zaWduQ2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPVxyXG4gICAgICAgICAgICBmaWVsZC5tX3NpZ25QZW5UaGlja25lc3M7XHJcbiAgICAgICAgICBfdGhpc1BhZ2Uuc2lnbkNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLmNvbG9yID0gZmllbGQubV9zaWduUGVuQ29sb3I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhmaWVsZC5tX3ZhbHVlKTtcclxuICAgIGlmIChcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gXCJcIiAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChmaWVsZC5zaWduVHlwZSA9PT0gXCJwYXRoXCIgfHwgZmllbGQuc2lnblR5cGUgPT09IFwidGV4dFBhdGhcIikge1xyXG4gICAgICAgIGNvbnN0IHNpZ25EYXRhID0gSlNPTi5wYXJzZShmaWVsZC5tX3ZhbHVlKTtcclxuICAgICAgICBVdGlscy5hZGRPYmplY3RzVG9DYW52YXMoXHJcbiAgICAgICAgICBfdGhpc1BhZ2UubV9vd25lck5vZGUsXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIHNpZ25GaWVsZERpdixcclxuICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgc2lnbkRhdGEub2JqZWN0cyxcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnbldpZHRoLFxyXG4gICAgICAgICAgZmllbGQubV9vcmdTaWduSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChmaWVsZC5zaWduVHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgbGV0IGltYWdlRWwgPSBfdGhpc1BhZ2UubV9vd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjc3RhbXBJbWFnZVRhZ1wiKTtcclxuICAgICAgICBpbWFnZUVsLnNyYyA9IGZpZWxkLm1fdmFsdWU7XHJcbiAgICAgICAgbGV0IGltYWdlT2JqID0gbmV3IGZhYnJpYy5JbWFnZShpbWFnZUVsKTtcclxuICAgICAgICBVdGlscy5hZGRPYmplY3RzVG9DYW52YXMoXHJcbiAgICAgICAgICBfdGhpc1BhZ2UubV9vd25lck5vZGUsXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIHNpZ25GaWVsZERpdixcclxuICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgW2ltYWdlT2JqXSxcclxuICAgICAgICAgIGZpZWxkLm1fb3JnU2lnbldpZHRoLFxyXG4gICAgICAgICAgZmllbGQubV9vcmdTaWduSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpZ25GaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVJbWFnZUZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlSW1hZ2VGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiAg7J2066+47KeAIO2VhOuTnCBOb2Rl66W8IOyDneyEse2VnOuLpC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCBGaWVsZCDsoJXrs7RcclxuICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGggICBGaWVsZCBXaWR0aFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHQgIEZpZWxkIEhlaWdodFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBfdGhpc1BhZ2UgIHRoaXMgUmVuZGVyUGFnZURhdGEgT2JqZWN0XHJcbiAgICogQHJldHVybiB7RUxFTUVOVH1cclxuICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICovXHJcbiAgY3JlYXRlSW1hZ2VGaWVsZChmaWVsZCwgd2lkdGgsIGhlaWdodCwgX3RoaXNQYWdlKSB7XHJcbiAgICBsZXQgaW1nRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIGltZ0ZpZWxkRGl2LnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgaW1nRmllbGREaXYuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBpbWdGaWVsZERpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgIGltZ0ZpZWxkRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgIGltZ0ZpZWxkRGl2LmlkID0gZmllbGQubV9pZCArIFwiX2NvbnRhaW5lclwiO1xyXG5cclxuICAgIGxldCBpbWdGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWdGaWVsZC5zdHlsZS5tYXhXaWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgaW1nRmllbGQuc3R5bGUubWF4SGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBpbWdGaWVsZC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGltZ0ZpZWxkLnN0eWxlLm9iamVjdEZpdCA9IFwiY29udGFpblwiO1xyXG4gICAgaW1nRmllbGQuaWQgPSBmaWVsZC5tX2lkICsgXCJfY29udGFpbmVyXCI7XHJcbiAgICBpbWdGaWVsZERpdi5hcHBlbmRDaGlsZChpbWdGaWVsZCk7XHJcblxyXG4gICAgbGV0IGltZ0ZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbWdGaWVsZElucHV0LnR5cGUgPSBcImZpbGVcIjtcclxuICAgIGltZ0ZpZWxkSW5wdXQuaWQgPSBmaWVsZC5tX2lkICsgXCJfZmlsZV9pbnB1dFwiO1xyXG4gICAgaW1nRmllbGRJbnB1dC5hY2NlcHQgPSBcImltYWdlLypcIjtcclxuICAgIGltZ0ZpZWxkSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW1nRmllbGREaXYuYXBwZW5kQ2hpbGQoaW1nRmllbGRJbnB1dCk7XHJcblxyXG4gICAgLy90ZXh0RmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgaWYgKCF0aGlzLm1fcmVhZG9ubHkpIHtcclxuICAgICAgaW1nRmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgaW1nRmllbGRJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGltZ0ZpZWxkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGNvbnN0IGZpbGVMaXN0ID0gZXZ0LnRhcmdldC5maWxlcztcclxuICAgICAgY29uc3QgZmlsZSA9IGZpbGVMaXN0WzBdO1xyXG4gICAgICBpZiAoZmlsZSA9PT0gdW5kZWZpbmVkIHx8IGZpbGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkge1xyXG4gICAgICAgIGlmIChfdGhpc1BhZ2UuYWxlcnRGdW5jICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBfdGhpc1BhZ2UuYWxlcnRGdW5jKFV0aWxzLnRyYW5zbGF0ZUZvcktleShcIlJlYWRlci5vbmx5SW1hZ2VNc2dcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgVXRpbHMuaW1hZ2VGaWxlVG9CYXNlNjQoZmlsZUxpc3RbMF0sIGZ1bmN0aW9uIChpbWdCYXNlNjREYXRhKSB7XHJcbiAgICAgICAgaW1nRmllbGQuc3JjID0gaW1nQmFzZTY0RGF0YTtcclxuICAgICAgICBmaWVsZC5tX3ZhbHVlID0gaW1nRmllbGQuc3JjO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coZmllbGQubV92YWx1ZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IFwiXCIgJiZcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IG51bGxcclxuICAgICkge1xyXG4gICAgICBpbWdGaWVsZC5zcmMgPSBmaWVsZC5tX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGltZ0ZpZWxkRGl2O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94RmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVDaGVja2JveEZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uICDssrTtgazrsJXsiqQg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF90aGlzUGFnZSAgdGhpcyBSZW5kZXJQYWdlRGF0YSBPYmplY3RcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVDaGVja2JveEZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCBfdGhpc1BhZ2UpIHtcclxuICAgIGxldCBjaGVja2JveEZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNoZWNrYm94RmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBjaGVja2JveEZpZWxkRGl2LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICBjaGVja2JveEZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgY2hlY2tib3hGaWVsZERpdi5pZCA9IGZpZWxkLm1faWQgKyBcIl9jb250YWluZXJcIjtcclxuICAgIGxldCBjaGVja0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjaGVja0ltZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgY2hlY2tJbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBjaGVja0ltZy5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIGNoZWNrSW1nLmlkID0gZmllbGQubV9pZCArIFwiX2ltZ1wiO1xyXG4gICAgY2hlY2tJbWcuc3JjID0gdGhpcy5jaGVja0ltZ3VybDtcclxuICAgIGlmICghdGhpcy5tX3JlYWRvbmx5KSB7XHJcbiAgICAgIGNoZWNrYm94RmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBpZiAoZmllbGQubV92YWx1ZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgIGZpZWxkLm1fdmFsdWUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZpZWxkLm1fdmFsdWUgPSBcInRydWVcIjtcclxuICAgICAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2JveEZpZWxkRGl2LmFwcGVuZENoaWxkKGNoZWNrSW1nKTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IFwiXCIgJiZcclxuICAgICAgZmllbGQubV92YWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IG51bGxcclxuICAgICkge1xyXG4gICAgICBpZiAoZmllbGQubV92YWx1ZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBjaGVja0ltZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrSW1nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hlY2tJbWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGVja2JveEZpZWxkRGl2O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZVJhZGlvRmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVSYWRpb0ZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uICDrnbzrlJTsmKQg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF90aGlzUGFnZSAgdGhpcyBSZW5kZXJQYWdlRGF0YSBPYmplY3RcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVSYWRpb0ZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCBfdGhpc1BhZ2UpIHtcclxuICAgIGxldCByYWRpb0ZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJhZGlvRmllbGREaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICByYWRpb0ZpZWxkRGl2LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICByYWRpb0ZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgcmFkaW9GaWVsZERpdi5pZCA9IGZpZWxkLm1faWQgKyBcIl9jb250YWluZXJcIjtcclxuICAgIGxldCByYWRpb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICByYWRpb0ltZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcmFkaW9JbWcuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICByYWRpb0ltZy5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgIHJhZGlvSW1nLmlkID0gZmllbGQubV9pZCArIFwiX2ltZ1wiO1xyXG4gICAgcmFkaW9JbWcuc3JjID0gdGhpcy5yYWRpb09mZkltZ3VybDtcclxuXHJcbiAgICByYWRpb0ZpZWxkRGl2LmFwcGVuZENoaWxkKHJhZGlvSW1nKTtcclxuXHJcbiAgICBsZXQgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHJhZGlvSW5wdXQudHlwZSA9IFwicmFkaW9cIjtcclxuICAgIHJhZGlvSW5wdXQudmFsdWUgPSBmaWVsZC5tX2RlZmF1bHRWYWx1ZTtcclxuICAgIHJhZGlvSW5wdXQuaWQgPSBmaWVsZC5tX2lkICsgXCJfcmFkaW9cIjtcclxuICAgIHJhZGlvSW5wdXQubmFtZSA9IGZpZWxkLm1fZ3JvdXBOYW1lO1xyXG4gICAgcmFkaW9JbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICByYWRpb0ZpZWxkRGl2LmFwcGVuZENoaWxkKHJhZGlvSW5wdXQpO1xyXG5cclxuICAgIGlmICghdGhpcy5tX3JlYWRvbmx5KSB7XHJcbiAgICAgIHJhZGlvRmllbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICByYWRpb0lucHV0LmNsaWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmFkaW9JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXZ0KTtcclxuICAgICAgbGV0IHRhcmdldFJhZGlvID0gZXZ0LnRhcmdldDtcclxuICAgICAgbGV0IHJlbmRlckxheWVyID0gZXZ0LnRhcmdldC5jbG9zZXN0KFwiZGl2LlJlYWRlci1QYWdlLUZpZWxkLUxheWVyXCIpO1xyXG4gICAgICBsZXQgcmFkaW9zID0gcmVuZGVyTGF5ZXIucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcImlucHV0W25hbWU9J1wiICsgZmllbGQubV9ncm91cE5hbWUgKyBcIiddXCJcclxuICAgICAgKTtcclxuICAgICAgcmFkaW9zLmZvckVhY2goZnVuY3Rpb24gKHJhZGlvRWwpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYWRpb0VsKTtcclxuICAgICAgICBsZXQgZmllbGRJZCA9IHJhZGlvRWwuaWQucmVwbGFjZShcIl9yYWRpb1wiLCBcIlwiKTtcclxuICAgICAgICBfdGhpc1BhZ2UuZmllbGRzW2ZpZWxkSWRdLm1fdmFsdWUgPSB0YXJnZXRSYWRpby52YWx1ZTtcclxuICAgICAgICBsZXQgcmFkaW9JbWdFbElkID0gcmFkaW9FbC5pZC5yZXBsYWNlKFwiX3JhZGlvXCIsIFwiX2ltZ1wiKTtcclxuICAgICAgICBsZXQgcmFkaW9JbWdFbCA9IHJlbmRlckxheWVyLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyByYWRpb0ltZ0VsSWQpO1xyXG4gICAgICAgIGlmIChyYWRpb0VsID09PSB0YXJnZXRSYWRpbykge1xyXG4gICAgICAgICAgcmFkaW9JbWdFbC5zcmMgPSBfdGhpc1BhZ2UucmFkaW9PbkltZ3VybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmFkaW9JbWdFbC5zcmMgPSBfdGhpc1BhZ2UucmFkaW9PZmZJbWd1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKFxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBcIlwiICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICBmaWVsZC5tX3ZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgPT09IGZpZWxkLm1faWRcclxuICAgICkge1xyXG4gICAgICByYWRpb0ltZy5zcmMgPSBfdGhpc1BhZ2UucmFkaW9PbkltZ3VybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJhZGlvSW1nLnNyYyA9IF90aGlzUGFnZS5yYWRpb09mZkltZ3VybDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmFkaW9GaWVsZERpdjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVMYWJlbEZpZWxkXHJcbiAgICogQG5hbWUgbW9kdWxlOlJlYWRlci9SZWFkZXJNb2QuUmVhZGVyUGFnZURhdGEjY3JlYXRlTGFiZWxGaWVsZFxyXG4gICAqIEBkZXNjcmlwdGlvbiBMYWJlbCDtlYTrk5wgTm9kZeulvCDsg53shLHtlZzri6QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmllbGQgRmllbGQg7KCV67O0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICAgRmllbGQgV2lkdGhcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0ICBGaWVsZCBIZWlnaHRcclxuICAgKiBAcGFyYW0ge051bWJlcn0gZm9udFNjYWxlIO2PsO2KuCDtgazquLDsnZgg67Cw7JyoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2UgIFBkZiBQYWdlIE51bWJlclxyXG4gICAqIEByZXR1cm4ge0VMRU1FTlR9XHJcbiAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAqL1xyXG4gIGNyZWF0ZUxhYmVsRmllbGQoZmllbGQsIHdpZHRoLCBoZWlnaHQsIGZvbnRTY2FsZSwgcGFnZSkge1xyXG4gICAgbGV0IGxhYmVsRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGxhYmVsRmllbGREaXYuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmaWVsZC5tX2ZvbnROYW1lO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5mb250U2l6ZSA9IGZpZWxkLm1fZm9udFNpemUgKiBmb250U2NhbGUgKyBcInB4XCI7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLmNvbG9yID0gZmllbGQubV9mb250Q29sb3I7XHJcbiAgICBsYWJlbEZpZWxkRGl2LnN0eWxlLnRleHRBbGlnbiA9IGZpZWxkLm1fdGV4dEFsaWduO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5saW5lSGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICAgIGlmIChmaWVsZC5tX2JvbGQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgIGxhYmVsRmllbGREaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgfVxyXG4gICAgLy9yZ2IoMCAxNTggMjE4IC8gMjAlKTtcclxuICAgIC8vMXB4IGRhc2hlZCAjOTFhYWJhO1xyXG4gICAgbGFiZWxGaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcblxyXG4gICAgaWYgKCFVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1fZGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICBsZXQgZHZWYWx1ZSA9IHRoaXMubV9kZWZhdWx0VmFsdWVJbmZvW2ZpZWxkLm1fZGVmYXVsdFZhbHVlXTtcclxuICAgICAgaWYgKGR2VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpZWxkLm1fdmFsdWUgPSBkdlZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbEZpZWxkRGl2LnRleHRDb250ZW50ID0gZmllbGQubV92YWx1ZTtcclxuICAgIHJldHVybiBsYWJlbEZpZWxkRGl2O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZUNvbWJvYm94RmllbGRcclxuICAgKiBAbmFtZSBtb2R1bGU6UmVhZGVyL1JlYWRlck1vZC5SZWFkZXJQYWdlRGF0YSNjcmVhdGVDb21ib2JveEZpZWxkXHJcbiAgICogQGRlc2NyaXB0aW9uICDsvaTrs7TrsJXsiqQg7ZWE65OcIE5vZGXrpbwg7IOd7ISx7ZWc64ukLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkIEZpZWxkIOygleuztFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCAgIEZpZWxkIFdpZHRoXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGhlaWdodCAgRmllbGQgSGVpZ2h0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IF90aGlzUGFnZSAgdGhpcyBSZW5kZXJQYWdlRGF0YSBPYmplY3RcclxuICAgKiBAcmV0dXJuIHtFTEVNRU5UfVxyXG4gICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgKi9cclxuICBjcmVhdGVDb21ib2JveEZpZWxkKGZpZWxkLCB3aWR0aCwgaGVpZ2h0LCBfdGhpc1BhZ2UpIHtcclxuICAgIHZhciBzZWxlY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuXHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgc2VsZWN0Tm9kZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgIHNlbGVjdE5vZGUuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgIHNlbGVjdE5vZGUuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBzZWxlY3ROb2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcclxuICAgIHNlbGVjdE5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgc2VsZWN0Tm9kZS5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfU0VMRUNUX0NMQVNTO1xyXG4gICAgdmFyIGRlZmF1bHRPcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGRlZmF1bHRPcHRpb25Ob2RlLnZhbHVlID0gXCJcIjtcclxuICAgIGRlZmF1bHRPcHRpb25Ob2RlLnRleHQgPSBVdGlscy50cmFuc2xhdGVGb3JLZXkoXCJSZWFkZXIuc2VsZWN0RGVmYXVsdFRleHRcIik7XHJcbiAgICBzZWxlY3ROb2RlLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb25Ob2RlKTtcclxuICAgIGxldCB2YWwxID0gZmllbGQubV92YWx1ZTtcclxuICAgIGlmIChVdGlscy5pc1N0cmluZ0VtcHR5KHZhbDEpKSB7XHJcbiAgICAgIHZhbDEgPSBmaWVsZC5tX2RlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbWJvbGlzdCA9IGZpZWxkLm1fY29tYm9ib3hMaXN0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgY29tYm9saXN0Lmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgdmFyIG9wdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb25Ob2RlLnZhbHVlID0gY29tYm9saXN0W2lkeF07XHJcbiAgICAgIG9wdGlvbk5vZGUudGV4dCA9IGNvbWJvbGlzdFtpZHhdO1xyXG4gICAgICBpZiAob3B0aW9uTm9kZS52YWx1ZSA9PT0gdmFsMSkge1xyXG4gICAgICAgIG9wdGlvbk5vZGUuc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0Tm9kZS5hcHBlbmRDaGlsZChvcHRpb25Ob2RlKTtcclxuICAgIH1cclxuICAgIGlmIChVdGlscy5pc1N0cmluZ0VtcHR5KGZpZWxkLm1fdmFsdWUpKSB7XHJcbiAgICAgIGZpZWxkLm1fdmFsdWUgPSBmaWVsZC5tX2RlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIHNlbGVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGxldCBzZWxlY3RlZElkeCA9IGV2dC50YXJnZXQub3B0aW9ucy5zZWxlY3RlZEluZGV4O1xyXG4gICAgICBmaWVsZC5tX3ZhbHVlID0gY29tYm9saXN0W3NlbGVjdGVkSWR4IC0gMV07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5tX3JlYWRvbmx5KSB7XHJcbiAgICAgIHNlbGVjdE5vZGUucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdE5vZGU7XHJcbiAgfVxyXG59XHJcbiIsIi8qIVxyXG4gKlxyXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMjEgVGF1ZmlrIE51cnJvaG1hblxyXG4gKlxyXG4gKiA8aHR0cHM6Ly9naXRodWIuY29tL3RhdWZpay1udXJyb2htYW4vY29sb3ItcGlja2VyPlxyXG4gKlxyXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIOKAnFNvZnR3YXJl4oCdKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQg4oCcQVMgSVPigJ0sIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcbiAqIFNPRlRXQVJFLlxyXG4gKlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XHJcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6IChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5DUCA9IGZhY3RvcnkoKSk7XHJcbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheSh4KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uIGlzRGVmaW5lZCh4KSB7XHJcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgeDtcclxuICAgIH07XHJcbiAgICB2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xyXG4gICAgICAgIHJldHVybiAnZnVuY3Rpb24nID09PSB0eXBlb2YgeDtcclxuICAgIH07XHJcbiAgICB2YXIgaXNJbnN0YW5jZSA9IGZ1bmN0aW9uIGlzSW5zdGFuY2UoeCwgb2YpIHtcclxuICAgICAgICByZXR1cm4geCAmJiBpc1NldChvZikgJiYgeCBpbnN0YW5jZW9mIG9mO1xyXG4gICAgfTtcclxuICAgIHZhciBpc051bGwgPSBmdW5jdGlvbiBpc051bGwoeCkge1xyXG4gICAgICAgIHJldHVybiBudWxsID09PSB4O1xyXG4gICAgfTtcclxuICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcclxuICAgICAgICByZXR1cm4gJ251bWJlcicgPT09IHR5cGVvZiB4O1xyXG4gICAgfTtcclxuICAgIHZhciBpc051bWVyaWMgPSBmdW5jdGlvbiBpc051bWVyaWMoeCkge1xyXG4gICAgICAgIHJldHVybiAvXi0/KD86XFxkKi4pP1xcZCskLy50ZXN0KHggKyBcIlwiKTtcclxuICAgIH07XHJcbiAgICB2YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdCh4LCBpc1BsYWluKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhaW4gPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBpc1BsYWluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdvYmplY3QnICE9PSB0eXBlb2YgeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc1BsYWluID8gaXNJbnN0YW5jZSh4LCBPYmplY3QpIDogdHJ1ZTtcclxuICAgIH07XHJcbiAgICB2YXIgaXNTZXQgPSBmdW5jdGlvbiBpc1NldCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZCh4KSAmJiAhaXNOdWxsKHgpO1xyXG4gICAgfTtcclxuICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcclxuICAgICAgICByZXR1cm4gJ3N0cmluZycgPT09IHR5cGVvZiB4O1xyXG4gICAgfTtcclxuICAgIHZhciBmcm9tSlNPTiA9IGZ1bmN0aW9uIGZyb21KU09OKHgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh4KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGZyb21TdGF0ZXMgPSBmdW5jdGlvbiBmcm9tU3RhdGVzKCkge1xyXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBsb3QgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgIGxvdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbe31dLmNvbmNhdChsb3QpKTtcclxuICAgIH07XHJcbiAgICB2YXIgZnJvbVZhbHVlID0gZnVuY3Rpb24gZnJvbVZhbHVlKHgpIHtcclxuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4geC5tYXAoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tVmFsdWUoeCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiB4KSB7XHJcbiAgICAgICAgICAgICAgICB4W2tdID0gZnJvbVZhbHVlKHhba10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmFsc2UgPT09IHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdmYWxzZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChudWxsID09PSB4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cnVlID09PSB4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndHJ1ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiICsgeDtcclxuICAgIH07XHJcbiAgICB2YXIgdG9DYXNlQ2FtZWwgPSBmdW5jdGlvbiB0b0Nhc2VDYW1lbCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHgucmVwbGFjZSgvWy1fLl0oXFx3KS9nLCBmdW5jdGlvbiAobTAsIG0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0Nhc2VVcHBlcihtMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvQ2FzZVVwcGVyID0gZnVuY3Rpb24gdG9DYXNlVXBwZXIoeCkge1xyXG4gICAgICAgIHJldHVybiB4LnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvQ291bnQgPSBmdW5jdGlvbiB0b0NvdW50KHgpIHtcclxuICAgICAgICByZXR1cm4geC5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvRWRnZSA9IGZ1bmN0aW9uIHRvRWRnZSh4LCBlZGdlcykge1xyXG4gICAgICAgIGlmIChpc1NldChlZGdlc1swXSkgJiYgeCA8IGVkZ2VzWzBdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlZGdlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2V0KGVkZ2VzWzFdKSAmJiB4ID4gZWRnZXNbMV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVkZ2VzWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH07XHJcbiAgICB2YXIgdG9KU09OID0gZnVuY3Rpb24gdG9KU09OKHgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoeCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gdG9OdW1iZXIoeCwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgYmFzZSA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFzZSA/IHBhcnNlSW50KHgsIGJhc2UpIDogcGFyc2VGbG9hdCh4KTtcclxuICAgIH07XHJcbiAgICB2YXIgdG9PYmplY3RDb3VudCA9IGZ1bmN0aW9uIHRvT2JqZWN0Q291bnQoeCkge1xyXG4gICAgICAgIHJldHVybiB0b0NvdW50KHRvT2JqZWN0S2V5cyh4KSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvT2JqZWN0S2V5cyA9IGZ1bmN0aW9uIHRvT2JqZWN0S2V5cyh4KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHgpO1xyXG4gICAgfTtcclxuICAgIHZhciB0b1JvdW5kID0gZnVuY3Rpb24gdG9Sb3VuZCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHgpID8gTWF0aC5yb3VuZCh4KSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoeCwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgYmFzZSA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNOdW1iZXIoeCkgPyB4LnRvU3RyaW5nKGJhc2UpIDogXCJcIiArIHg7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvVmFsdWUgPSBmdW5jdGlvbiB0b1ZhbHVlKHgpIHtcclxuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4geC5tYXAoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b1ZhbHVlKHYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVtZXJpYyh4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9OdW1iZXIoeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc09iamVjdCh4KSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIHgpIHtcclxuICAgICAgICAgICAgICAgIHhba10gPSB0b1ZhbHVlKHhba10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJ2ZhbHNlJyA9PT0geCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgnbnVsbCcgPT09IHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgndHJ1ZScgPT09IHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfTtcclxuICAgIHZhciBEID0gZG9jdW1lbnQ7XHJcbiAgICB2YXIgVyA9IHdpbmRvdztcclxuICAgIHZhciBCID0gRC5ib2R5O1xyXG4gICAgdmFyIFIgPSBELmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBnZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCBwYXJzZVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlVmFsdWUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBwYXJzZVZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoYXNBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSA/IHRvVmFsdWUodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldERhdHVtID0gZnVuY3Rpb24gZ2V0RGF0dW0obm9kZSwgZGF0dW0sIHBhcnNlVmFsdWUpIHtcclxuICAgICAgICBpZiAocGFyc2VWYWx1ZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIHBhcnNlVmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsdWUgPSBnZXRBdHRyaWJ1dGUobm9kZSwgJ2RhdGEtJyArIGRhdHVtLCBwYXJzZVZhbHVlKSxcclxuICAgICAgICAgICAgdiA9ICh2YWx1ZSArIFwiXCIpLnRyaW0oKTtcclxuICAgICAgICBpZiAocGFyc2VWYWx1ZSAmJiB2ICYmICgnWycgPT09IHZbMF0gJiYgJ10nID09PSB2LnNsaWNlKC0xKSB8fCAneycgPT09IHZbMF0gJiYgJ30nID09PSB2LnNsaWNlKC0xKSkgJiYgbnVsbCAhPT0gKHYgPSBmcm9tSlNPTih2YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFBhcmVudCA9IGZ1bmN0aW9uIGdldFBhcmVudChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlKG5vZGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhc1N0YXRlKG5vZGUsIHN0YXRlKSAmJiBub2RlW3N0YXRlXSB8fCBudWxsO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRUZXh0ID0gZnVuY3Rpb24gZ2V0VGV4dChub2RlLCB0cmltKSB7XHJcbiAgICAgICAgaWYgKHRyaW0gPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0cmltID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0YXRlID0gJ3RleHRDb250ZW50JztcclxuICAgICAgICBpZiAoIWhhc1N0YXRlKG5vZGUsIHN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250ZW50ID0gbm9kZVtzdGF0ZV07XHJcbiAgICAgICAgY29udGVudCA9IHRyaW0gPyBjb250ZW50LnRyaW0oKSA6IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgIT09IGNvbnRlbnQgPyBjb250ZW50IDogbnVsbDtcclxuICAgIH07XHJcbiAgICB2YXIgaGFzQXR0cmlidXRlID0gZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5vZGUsIGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgfTtcclxuICAgIHZhciBoYXNTdGF0ZSA9IGZ1bmN0aW9uIGhhc1N0YXRlKG5vZGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlIGluIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzV2luZG93ID0gZnVuY3Rpb24gaXNXaW5kb3cobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlID09PSBXO1xyXG4gICAgfTtcclxuICAgIHZhciBsZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBsZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSksIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGxldEVsZW1lbnQgPSBmdW5jdGlvbiBsZXRFbGVtZW50KG5vZGUpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBub2RlLnJlbW92ZSgpLCBwYXJlbnQ7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRydWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBmcm9tVmFsdWUodmFsdWUpKSwgbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIHx8IFwiXCIgPT09IHZhbHVlIHx8IDAgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXRBdHRyaWJ1dGUobm9kZSwgYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0Q2hpbGRMYXN0ID0gZnVuY3Rpb24gc2V0Q2hpbGRMYXN0KHBhcmVudCwgbm9kZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSksIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldERhdHVtID0gZnVuY3Rpb24gc2V0RGF0dW0obm9kZSwgZGF0dW0sIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpIHx8IGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRvSlNPTih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGUobm9kZSwgJ2RhdGEtJyArIGRhdHVtLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldEVsZW1lbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50KG5vZGUsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBub2RlID0gaXNTdHJpbmcobm9kZSkgPyBELmNyZWF0ZUVsZW1lbnQobm9kZSkgOiBub2RlO1xyXG4gICAgICAgIGlmIChpc09iamVjdChjb250ZW50KSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gY29udGVudDtcclxuICAgICAgICAgICAgY29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTdHJpbmcoY29udGVudCkpIHtcclxuICAgICAgICAgICAgc2V0SFRNTChub2RlLCBjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XHJcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRIVE1MID0gZnVuY3Rpb24gc2V0SFRNTChub2RlLCBjb250ZW50LCB0cmltKSB7XHJcbiAgICAgICAgaWYgKHRyaW0gPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0cmltID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bGwgPT09IGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGF0ZSA9ICdpbm5lckhUTUwnO1xyXG4gICAgICAgIHJldHVybiBoYXNTdGF0ZShub2RlLCBzdGF0ZSkgJiYgKG5vZGVbc3RhdGVdID0gdHJpbSA/IGNvbnRlbnQudHJpbSgpIDogY29udGVudCksIG5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobm9kZSwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlW2tleV0gPSB2YWx1ZSwgbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0U3R5bGUgPSBmdW5jdGlvbiBzZXRTdHlsZShub2RlLCBzdHlsZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9ICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlLnN0eWxlW3RvQ2FzZUNhbWVsKHN0eWxlKV0gPSBmcm9tVmFsdWUodmFsdWUpLCBub2RlO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRUZXh0ID0gZnVuY3Rpb24gc2V0VGV4dChub2RlLCBjb250ZW50LCB0cmltKSB7XHJcbiAgICAgICAgaWYgKHRyaW0gPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0cmltID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bGwgPT09IGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGF0ZSA9ICd0ZXh0Q29udGVudCc7XHJcbiAgICAgICAgcmV0dXJuIGhhc1N0YXRlKG5vZGUsIHN0YXRlKSAmJiAobm9kZVtzdGF0ZV0gPSB0cmltID8gY29udGVudC50cmltKCkgOiBjb250ZW50KSwgbm9kZTtcclxuICAgIH07XHJcbiAgICB2YXIgb2ZmRXZlbnQgPSBmdW5jdGlvbiBvZmZFdmVudChuYW1lLCBub2RlLCB0aGVuKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHRoZW4pO1xyXG4gICAgfTtcclxuICAgIHZhciBvZmZFdmVudERlZmF1bHQgPSBmdW5jdGlvbiBvZmZFdmVudERlZmF1bHQoZSkge1xyXG4gICAgICAgIHJldHVybiBlOy8vICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcbiAgICB2YXIgb2ZmRXZlbnRzID0gZnVuY3Rpb24gb2ZmRXZlbnRzKG5hbWVzLCBub2RlLCB0aGVuKSB7XHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2ZmRXZlbnQobmFtZSwgbm9kZSwgdGhlbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRXZlbnQgPSBmdW5jdGlvbiBvbkV2ZW50KG5hbWUsIG5vZGUsIHRoZW4sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwIHx8IG9wdGlvbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgb3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCB0aGVuLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICB2YXIgb25FdmVudHMgPSBmdW5jdGlvbiBvbkV2ZW50cyhuYW1lcywgbm9kZSwgdGhlbiwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvbkV2ZW50KG5hbWUsIG5vZGUsIHRoZW4sIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBob29rKCQpIHtcclxuICAgICAgICB2YXIgaG9va3MgPSB7fTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmlyZShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNTZXQoaG9va3NbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBob29rc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh0aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhlbi5hcHBseSgkLCBkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiAkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb2ZmKG5hbWUsIHRoZW4pIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NldChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvb2tzID0ge30sICQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU2V0KGhvb2tzW25hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2V0KHRoZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIF9qID0gaG9va3NbbmFtZV0ubGVuZ3RoOyBpIDwgX2o7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhlbiA9PT0gaG9va3NbbmFtZV1baV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvb2tzW25hbWVdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBDbGVhbi11cCBlbXB0eSBob29rKHMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGhvb2tzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGhvb2tzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb24obmFtZSwgdGhlbikge1xyXG4gICAgICAgICAgICBpZiAoIWlzU2V0KGhvb2tzW25hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgaG9va3NbbmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTZXQodGhlbikpIHtcclxuICAgICAgICAgICAgICAgIGhvb2tzW25hbWVdLnB1c2godGhlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQuaG9va3MgPSBob29rcztcclxuICAgICAgICAkLmZpcmUgPSBmaXJlO1xyXG4gICAgICAgICQub2ZmID0gb2ZmO1xyXG4gICAgICAgICQub24gPSBvbjtcclxuICAgICAgICByZXR1cm4gJDtcclxuICAgIH1cclxuICAgIHZhciBnZXRBeGlzID0gZnVuY3Rpb24gZ2V0QXhpcyhldmVudCwgbm9kZSkge1xyXG4gICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyxcclxuICAgICAgICAgICAgeCA9IHRvdWNoZXMgPyB0b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICB5ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gW3ggLSByZWN0WzBdLCB5IC0gcmVjdFsxXSwgcmVjdFswXSwgcmVjdFsxXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFJlY3QgPSBmdW5jdGlvbiBnZXRSZWN0KG5vZGUpIHtcclxuICAgICAgICB2YXIgaCwgcmVjdCwgdywgeCwgeSwgWCwgWTtcclxuICAgICAgICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcclxuICAgICAgICAgICAgeCA9IG5vZGUucGFnZVhPZmZzZXQgfHwgUi5zY3JvbGxMZWZ0IHx8IEIuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgeSA9IG5vZGUucGFnZVlPZmZzZXQgfHwgUi5zY3JvbGxUb3AgfHwgQi5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHcgPSBub2RlLmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIGggPSBub2RlLmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB4ID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgICAgICB5ID0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIHcgPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgICBoID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIFggPSByZWN0LnJpZ2h0O1xyXG4gICAgICAgICAgICBZID0gcmVjdC5ib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbeCwgeSwgdywgaCwgWCwgWV07XHJcbiAgICB9O1xyXG4gICAgbGV0IG5hbWUgPSAnQ1AnLFxyXG4gICAgICAgIGRlbGF5ID0gVy5zZXRUaW1lb3V0LFxyXG4gICAgICAgIGhleCA9ICdIRVgnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsb3Nlc3QoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKGEgPSBhLnBhcmVudEVsZW1lbnQpICYmIGEgIT09IGIpO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfSAvLyBDb252ZXJ0IGN1cnNvciBwb3NpdGlvbiB0byBSR0JBXHJcbiAgICBmdW5jdGlvbiBQMlJHQihhKSB7XHJcbiAgICAgICAgbGV0IGggPSArYVswXSxcclxuICAgICAgICAgICAgcyA9ICthWzFdLFxyXG4gICAgICAgICAgICB2ID0gK2FbMl0sXHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIGcsXHJcbiAgICAgICAgICAgIGIsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHAsXHJcbiAgICAgICAgICAgIHEsXHJcbiAgICAgICAgICAgIHQ7XHJcbiAgICAgICAgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xyXG4gICAgICAgIGYgPSBoICogNiAtIGk7XHJcbiAgICAgICAgcCA9IHYgKiAoMSAtIHMpO1xyXG4gICAgICAgIHEgPSB2ICogKDEgLSBmICogcyk7XHJcbiAgICAgICAgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcclxuICAgICAgICBpID0gaSB8fCAwO1xyXG4gICAgICAgIHEgPSBxIHx8IDA7XHJcbiAgICAgICAgdCA9IHQgfHwgMDtcclxuICAgICAgICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgciA9IHEsIGcgPSB2LCBiID0gcDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgciA9IHQsIGcgPSBwLCBiID0gdjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbdG9Sb3VuZChyICogMjU1KSwgdG9Sb3VuZChnICogMjU1KSwgdG9Sb3VuZChiICogMjU1KSwgaXNTZXQoYVszXSkgPyArYVszXSA6IDFdO1xyXG4gICAgfSAvLyBDb252ZXJ0IFJHQkEgdG8gSFNWQVxyXG4gICAgZnVuY3Rpb24gUkdCMkhTVihhKSB7XHJcbiAgICAgICAgbGV0IHIgPSArYVswXSAvIDI1NSxcclxuICAgICAgICAgICAgZyA9ICthWzFdIC8gMjU1LFxyXG4gICAgICAgICAgICBiID0gK2FbMl0gLyAyNTUsXHJcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxyXG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSxcclxuICAgICAgICAgICAgaCxcclxuICAgICAgICAgICAgcyxcclxuICAgICAgICAgICAgdiA9IG1heCxcclxuICAgICAgICAgICAgZCA9IG1heCAtIG1pbjtcclxuICAgICAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XHJcbiAgICAgICAgaWYgKG1heCA9PT0gbWluKSB7XHJcbiAgICAgICAgICAgIGggPSAwOyAvLyBBY2hyb21hdGljXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtYXgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcjpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGc6XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYjpcclxuICAgICAgICAgICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGggLz0gNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtoLCBzLCB2LCBpc1NldChhWzNdKSA/ICthWzNdIDogMV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBFVkVOVFNfRE9XTiA9IFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nXTtcclxuICAgIGNvbnN0IEVWRU5UU19NT1ZFID0gWyd0b3VjaG1vdmUnLCAnbW91c2Vtb3ZlJ107XHJcbiAgICBjb25zdCBFVkVOVFNfUkVTSVpFID0gWydvcmllbnRhdGlvbmNoYW5nZScsICdyZXNpemUnXTtcclxuICAgIGNvbnN0IEVWRU5UU19VUCA9IFsndG91Y2hlbmQnLCAnbW91c2V1cCddO1xyXG5cclxuICAgIGZ1bmN0aW9uIENQKHNvdXJjZSwgc3RhdGUgPSB7fSkge1xyXG4gICAgICAgIGlmICghRCkge1xyXG4gICAgICAgICAgICBEID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVykge1xyXG4gICAgICAgICAgICBXID0gd2luZG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIUIpIHtcclxuICAgICAgICAgICAgQiA9IEQuYm9keTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFSKSB7XHJcbiAgICAgICAgICAgIFIgPSBELmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzb3VyY2UpIHJldHVybjtcclxuICAgICAgICBjb25zdCAkID0gdGhpczsgLy8gUmV0dXJuIG5ldyBpbnN0YW5jZSBpZiBgQ1BgIHdhcyBjYWxsZWQgd2l0aG91dCB0aGUgYG5ld2Agb3BlcmF0b3JcclxuICAgICAgICBpZiAoIWlzSW5zdGFuY2UoJCwgQ1ApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ1Aoc291cmNlLCBzdGF0ZSk7XHJcbiAgICAgICAgfSAvLyBBbHJlYWR5IGluc3RhbnRpYXRlZCwgc2tpcCFcclxuICAgICAgICBpZiAoc291cmNlW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgZmlyZSxcclxuICAgICAgICAgICAgaG9va3NcclxuICAgICAgICB9ID0gaG9vaygkKTtcclxuICAgICAgICAkLnN0YXRlID0gc3RhdGUgPSBmcm9tU3RhdGVzKENQLnN0YXRlLCBpc1N0cmluZyhzdGF0ZSkgPyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBzdGF0ZVxyXG4gICAgICAgIH0gOiBzdGF0ZSB8fCB7fSk7XHJcbiAgICAgICAgJC5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgJC52aXNpYmxlID0gZmFsc2U7IC8vIFN0b3JlIGN1cnJlbnQgaW5zdGFuY2UgdG8gYENQLmluc3RhbmNlc2BcclxuICAgICAgICBDUC5pbnN0YW5jZXNbc291cmNlLmlkIHx8IHNvdXJjZS5uYW1lIHx8IHRvT2JqZWN0Q291bnQoQ1AuaW5zdGFuY2VzKV0gPSAkOyAvLyBNYXJrIGN1cnJlbnQgRE9NIGFzIGFjdGl2ZSBjb2xvciBwaWNrZXIgdG8gcHJldmVudCBkdXBsaWNhdGUgaW5zdGFuY2VcclxuICAgICAgICBzb3VyY2VbbmFtZV0gPSAxO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0aGVWYWx1ZShmcm9tKSB7XHJcbiAgICAgICAgICAgIGxldCB0byA9IENQW2lzRnVuY3Rpb24oQ1Bbc3RhdGUuY29sb3JdKSA/IHN0YXRlLmNvbG9yIDogaGV4XSxcclxuICAgICAgICAgICAgICAgIHRoZUNvbG9yOyAvLyBHZXQgdmFsdWUgZnJvbSBgZGF0YS1jb2xvcmAgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGlmICh0aGVDb2xvciA9IGdldERhdHVtKHNvdXJjZSwgJ2NvbG9yJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NldChmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXREYXR1bShzb3VyY2UsICdjb2xvcicsIHRvKGZyb20pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0byh0aGVDb2xvcik7XHJcbiAgICAgICAgICAgIH0gLy8gR2V0IHZhbHVlIGZyb20gYHZhbHVlYCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaWYgKHRoZUNvbG9yID0gZ2V0U3RhdGUoc291cmNlLCAndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2V0KGZyb20pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFN0YXRlKHNvdXJjZSwgJ3ZhbHVlJywgdG8oZnJvbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvKHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgfSAvLyBHZXQgdmFsdWUgZnJvbSBjb250ZW50XHJcbiAgICAgICAgICAgIGlmICh0aGVDb2xvciA9IGdldFRleHQoc291cmNlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2V0KGZyb20pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRleHQoc291cmNlLCB0byhmcm9tKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8odGhlQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1NldChmcm9tKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBEbyBub3RoaW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAxXTsgLy8gRGVmYXVsdCB0byBibGFja1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gc3RhdGVbJ2NsYXNzJ10sXHJcbiAgICAgICAgICAgIGRvRW50ZXIsXHJcbiAgICAgICAgICAgIGRvRXhpdCxcclxuICAgICAgICAgICAgZG9GaXQsXHJcbiAgICAgICAgICAgIGRvUmVzaXplLFxyXG4gICAgICAgICAgICB0aGVDb2xvciA9IHRoZVZhbHVlKCksXHJcbiAgICAgICAgICAgIHRoZURhdGEgPSBSR0IySFNWKHRoZUNvbG9yKSxcclxuICAgICAgICAgICAgc2VsZiA9IHNldEVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzTmFtZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgQyA9IHNldEVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBTViA9IHNldEVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzTmFtZSArICc6c3YnXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBIID0gc2V0RWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogY2xhc3NOYW1lICsgJzpoJ1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgQSA9IHNldEVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgICdjbGFzcyc6IGNsYXNzTmFtZSArICc6YSdcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIFNWQ29sb3IgPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgU1ZTYXR1cmF0aW9uID0gc2V0RWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIFNWVmFsdWUgPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgU1ZDdXJzb3IgPSBzZXRFbGVtZW50KCdpJyksXHJcbiAgICAgICAgICAgIEhDb2xvciA9IHNldEVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICBIQ3Vyc29yID0gc2V0RWxlbWVudCgnaScpLFxyXG4gICAgICAgICAgICBBQ29sb3IgPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgQVBhdHRlcm4gPSBzZXRFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgQUN1cnNvciA9IHNldEVsZW1lbnQoJ2knKSxcclxuICAgICAgICAgICAgU1ZTdGFydGluZyA9IDAsXHJcbiAgICAgICAgICAgIEhTdGFydGluZyA9IDAsXHJcbiAgICAgICAgICAgIEFTdGFydGluZyA9IDAsXHJcbiAgICAgICAgICAgIFNWRHJhZ2dpbmcgPSAwLFxyXG4gICAgICAgICAgICBIRHJhZ2dpbmcgPSAwLFxyXG4gICAgICAgICAgICBBRHJhZ2dpbmcgPSAwO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChzZWxmLCBDKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoQywgU1YpO1xyXG4gICAgICAgIHNldENoaWxkTGFzdChDLCBIKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoQywgQSk7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KFNWLCBTVkNvbG9yKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoU1YsIFNWU2F0dXJhdGlvbik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KFNWLCBTVlZhbHVlKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoU1YsIFNWQ3Vyc29yKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoSCwgSENvbG9yKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoSCwgSEN1cnNvcik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEEsIEFDb2xvcik7XHJcbiAgICAgICAgc2V0Q2hpbGRMYXN0KEEsIEFQYXR0ZXJuKTtcclxuICAgICAgICBzZXRDaGlsZExhc3QoQSwgQUN1cnNvcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvQXBwbHkoaXNGaXJzdCwgdG9QYXJlbnQpIHtcclxuICAgICAgICAgICAgLy8gUmVmcmVzaCBkYXRhXHJcbiAgICAgICAgICAgIHRoZURhdGEgPSBSR0IySFNWKHRoZUNvbG9yID0gdGhlVmFsdWUoKSk7XHJcbiAgICAgICAgICAgIGlmICghaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hpbGRMYXN0KHRvUGFyZW50IHx8IHN0YXRlLnBhcmVudCB8fCBCLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgICQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9FbnRlciA9IHRvUGFyZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb0FwcGx5KDAsIHRvUGFyZW50KSwgZmlyZSgnZW50ZXInLCB0aGVDb2xvciksICQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvRXhpdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRQYXJlbnQoc2VsZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXRFbGVtZW50KHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICQuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgJC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX0RPV04sIFNWLCBkb0Rvd25TVik7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX0RPV04sIEgsIGRvRG93bkgpO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnRzKEVWRU5UU19ET1dOLCBBLCBkb0Rvd25BKTtcclxuICAgICAgICAgICAgICAgIG9mZkV2ZW50cyhFVkVOVFNfTU9WRSwgRCwgZG9Nb3ZlKTtcclxuICAgICAgICAgICAgICAgIG9mZkV2ZW50cyhFVkVOVFNfVVAsIEQsIGRvU3RvcCk7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudHMoRVZFTlRTX1JFU0laRSwgVywgZG9SZXNpemUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcmUoJ2V4aXQnLCB0aGVDb2xvcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvRml0ID0gdG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb3RSZWN0ID0gZ2V0UmVjdChSKSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VSZWN0ID0gZ2V0UmVjdChzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpblJlY3QgPSBnZXRSZWN0KFcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEJhckhlaWdodCA9IHdpblJlY3RbM10gLSBSLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsIHNjcm9sbCBiYXJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxCYXJXaWR0aCA9IHdpblJlY3RbMl0gLSByb290UmVjdFsyXSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBzY3JvbGwgYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZlJlY3QgPSBnZXRSZWN0KHNlbGYpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZIZWlnaHQgPSBzZWxmUmVjdFszXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmV2lkdGggPSBzZWxmUmVjdFsyXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmTGVmdCA9IHNvdXJjZVJlY3RbMF0gKyB3aW5SZWN0WzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZUb3AgPSBzb3VyY2VSZWN0WzFdICsgd2luUmVjdFsxXSArIHNvdXJjZVJlY3RbM107IC8vIERyb3AhXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3QodG8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZXQodG9bMF0pICYmIChzZWxmTGVmdCA9IHRvWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1NldCh0b1sxXSkgJiYgKHNlbGZUb3AgPSB0b1sxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW5YID0gd2luUmVjdFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluWSA9IHdpblJlY3RbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFggPSB3aW5SZWN0WzBdICsgd2luUmVjdFsyXSAtIHNlbGZXaWR0aCAtIHNjcm9sbEJhcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhZID0gd2luUmVjdFsxXSArIHdpblJlY3RbM10gLSBzZWxmSGVpZ2h0IC0gc2Nyb2xsQmFySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZMZWZ0ID0gdG9FZGdlKHNlbGZMZWZ0LCBbbWluWCwgbWF4WF0pID4+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZlRvcCA9IHRvRWRnZShzZWxmVG9wLCBbbWluWSwgbWF4WV0pID4+IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZShzZWxmLCAnbGVmdCcsIHNlbGZMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKHNlbGYsICd0b3AnLCBzZWxmVG9wKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlKCdmaXQnLCB0aGVDb2xvcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvUmVzaXplID0gKCkgPT4gZG9GaXQoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvRG93bkEoZSkge1xyXG4gICAgICAgICAgICAgICAgJC5jdXJyZW50ID0gQTtcclxuICAgICAgICAgICAgICAgIEFTdGFydGluZyA9IEFEcmFnZ2luZyA9IDE7XHJcbiAgICAgICAgICAgICAgICBkb01vdmUoZSk7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvRG93bkgoZSkge1xyXG4gICAgICAgICAgICAgICAgJC5jdXJyZW50ID0gSDtcclxuICAgICAgICAgICAgICAgIEhTdGFydGluZyA9IEhEcmFnZ2luZyA9IDE7XHJcbiAgICAgICAgICAgICAgICBkb01vdmUoZSk7XHJcbiAgICAgICAgICAgICAgICBvZmZFdmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvRG93blNWKGUpIHtcclxuICAgICAgICAgICAgICAgICQuY3VycmVudCA9IFNWO1xyXG4gICAgICAgICAgICAgICAgU1ZTdGFydGluZyA9IFNWRHJhZ2dpbmcgPSAxO1xyXG4gICAgICAgICAgICAgICAgZG9Nb3ZlKGUpO1xyXG4gICAgICAgICAgICAgICAgb2ZmRXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb01vdmUoZSkge1xyXG4gICAgICAgICAgICAgICAgU1ZEcmFnZ2luZyAmJiBkb1NldFNWQ3Vyc29yKGUpO1xyXG4gICAgICAgICAgICAgICAgSERyYWdnaW5nICYmIGRvU2V0SEN1cnNvcihlKTtcclxuICAgICAgICAgICAgICAgIEFEcmFnZ2luZyAmJiBkb1NldEFDdXJzb3IoZSk7XHJcbiAgICAgICAgICAgICAgICB0aGVDb2xvciA9IFAyUkdCKHRoZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFNWRHJhZ2dpbmcgfHwgSERyYWdnaW5nIHx8IEFEcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmUoU1ZTdGFydGluZyB8fCBIU3RhcnRpbmcgfHwgQVN0YXJ0aW5nID8gJ3N0YXJ0JyA6ICdkcmFnJywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmUoJ2NoYW5nZScsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNWU3RhcnRpbmcgPSBIU3RhcnRpbmcgPSBBU3RhcnRpbmcgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb1NldENvbG9yKCkge1xyXG4gICAgICAgICAgICAgICAgZG9TZXRDdXJzb3IodGhlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYSA9IFAyUkdCKHRoZURhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBQMlJHQihbdGhlRGF0YVswXSwgMSwgMV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoU1ZDb2xvciwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKCcgKyBiWzBdICsgJywnICsgYlsxXSArICcsJyArIGJbMl0gKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoQUNvbG9yLCAnYmFja2dyb3VuZC1pbWFnZScsICdsaW5lYXItZ3JhZGllbnQocmdiKCcgKyBhWzBdICsgJywnICsgYVsxXSArICcsJyArIGFbMl0gKyAnKSx0cmFuc3BhcmVudCknKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9TZXRDdXJzb3IoeCkge1xyXG4gICAgICAgICAgICAgICAgaXNTZXQoeFsxXSkgJiYgc2V0U3R5bGUoU1ZDdXJzb3IsICdyaWdodCcsIFNWV2lkdGggLSBTVldpZHRoQ3Vyc29yIC8gMiAtIFNWV2lkdGggKiAreFsxXSk7XHJcbiAgICAgICAgICAgICAgICBpc1NldCh4WzJdKSAmJiBzZXRTdHlsZShTVkN1cnNvciwgJ3RvcCcsIFNWSGVpZ2h0IC0gU1ZIZWlnaHRDdXJzb3IgLyAyIC0gU1ZIZWlnaHQgKiAreFsyXSk7XHJcbiAgICAgICAgICAgICAgICBpc1NldCh4WzBdKSAmJiBzZXRTdHlsZShIQ3Vyc29yLCAndG9wJywgSEhlaWdodCAtIEhIZWlnaHRDdXJzb3IgLyAyIC0gSEhlaWdodCAqICt4WzBdKTtcclxuICAgICAgICAgICAgICAgIGlzU2V0KHhbM10pICYmIHNldFN0eWxlKEFDdXJzb3IsICd0b3AnLCBBSGVpZ2h0IC0gQUhlaWdodEN1cnNvciAvIDIgLSBBSGVpZ2h0ICogK3hbM10pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkb1NldEFDdXJzb3IoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhlRGF0YVszXSA9IChBSGVpZ2h0IC0gdG9FZGdlKGdldEF4aXMoZSwgQSlbMV0sIFswLCBBSGVpZ2h0XSkpIC8gQUhlaWdodDtcclxuICAgICAgICAgICAgICAgIGRvU2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9TZXRIQ3Vyc29yKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoZURhdGFbMF0gPSAoSEhlaWdodCAtIHRvRWRnZShnZXRBeGlzKGUsIEgpWzFdLCBbMCwgSEhlaWdodF0pKSAvIEhIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBkb1NldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvU2V0U1ZDdXJzb3IoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFNWUG9pbnQgPSBnZXRBeGlzKGUsIFNWKSxcclxuICAgICAgICAgICAgICAgICAgICB4ID0gdG9FZGdlKFNWUG9pbnRbMF0sIFswLCBTVldpZHRoXSksXHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRvRWRnZShTVlBvaW50WzFdLCBbMCwgU1ZIZWlnaHRdKTtcclxuICAgICAgICAgICAgICAgIHRoZURhdGFbMV0gPSAxIC0gKFNWV2lkdGggLSB4KSAvIFNWV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGVEYXRhWzJdID0gKFNWSGVpZ2h0IC0geSkgLyBTVkhlaWdodDtcclxuICAgICAgICAgICAgICAgIGRvU2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZG9TdG9wKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoZUNvbG9yID0gUDJSR0IodGhlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU291cmNlID0gc291cmNlID09PSBnZXRDbG9zZXN0KHQsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxmID0gc2VsZiA9PT0gZ2V0Q2xvc2VzdCh0LCBzZWxmKTtcclxuICAgICAgICAgICAgICAgICQuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzU291cmNlICYmICFpc1NlbGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaG9va3MuYmx1cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlKCdibHVyJywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsaWNrIG91dHNpZGUgdGhlIHNvdXJjZSBvciBwaWNrZXIgZWxlbWVudCB0byBleGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTVkRyYWdnaW5nIHx8IEhEcmFnZ2luZyB8fCBBRHJhZ2dpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBhcmVudChzZWxmKSAmJiBkb0V4aXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU1ZEcmFnZ2luZyB8fCBIRHJhZ2dpbmcgfHwgQURyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlKCdzdG9wJywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU1ZEcmFnZ2luZyA9IEhEcmFnZ2luZyA9IEFEcmFnZ2luZyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IFNWUmVjdCA9IGdldFJlY3QoU1YpLFxyXG4gICAgICAgICAgICAgICAgU1ZSZWN0Q3Vyc29yID0gZ2V0UmVjdChTVkN1cnNvciksXHJcbiAgICAgICAgICAgICAgICBIUmVjdCA9IGdldFJlY3QoSCksXHJcbiAgICAgICAgICAgICAgICBIUmVjdEN1cnNvciA9IGdldFJlY3QoSEN1cnNvciksXHJcbiAgICAgICAgICAgICAgICBBUmVjdCA9IGdldFJlY3QoQSksXHJcbiAgICAgICAgICAgICAgICBBUmVjdEN1cnNvciA9IGdldFJlY3QoQUN1cnNvciksXHJcbiAgICAgICAgICAgICAgICBTVkhlaWdodCA9IFNWUmVjdFszXSxcclxuICAgICAgICAgICAgICAgIFNWSGVpZ2h0Q3Vyc29yID0gU1ZSZWN0Q3Vyc29yWzNdLFxyXG4gICAgICAgICAgICAgICAgU1ZXaWR0aCA9IFNWUmVjdFsyXSxcclxuICAgICAgICAgICAgICAgIFNWV2lkdGhDdXJzb3IgPSBTVlJlY3RDdXJzb3JbMl0sXHJcbiAgICAgICAgICAgICAgICBISGVpZ2h0ID0gSFJlY3RbM10sXHJcbiAgICAgICAgICAgICAgICBISGVpZ2h0Q3Vyc29yID0gSFJlY3RDdXJzb3JbM10sXHJcbiAgICAgICAgICAgICAgICBBSGVpZ2h0ID0gQVJlY3RbM10sXHJcbiAgICAgICAgICAgICAgICBBSGVpZ2h0Q3Vyc29yID0gQVJlY3RDdXJzb3JbM107XHJcbiAgICAgICAgICAgIGlmIChpc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBvbkV2ZW50cyhFVkVOVFNfRE9XTiwgc291cmNlLCBkb0NsaWNrKTtcclxuICAgICAgICAgICAgICAgIGRlbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlKCdjaGFuZ2UnLCB0aGVDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9LCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9uRXZlbnRzKEVWRU5UU19ET1dOLCBTViwgZG9Eb3duU1YpO1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX0RPV04sIEgsIGRvRG93bkgpO1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX0RPV04sIEEsIGRvRG93bkEpO1xyXG4gICAgICAgICAgICAgICAgb25FdmVudHMoRVZFTlRTX01PVkUsIEQsIGRvTW92ZSk7XHJcbiAgICAgICAgICAgICAgICBvbkV2ZW50cyhFVkVOVFNfVVAsIEQsIGRvU3RvcCk7XHJcbiAgICAgICAgICAgICAgICBvbkV2ZW50cyhFVkVOVFNfUkVTSVpFLCBXLCBkb1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBkb0ZpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvU2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgJC5jb2xvciA9IChyLCBnLCBiLCBhKSA9PiBDUFtpc0Z1bmN0aW9uKENQW3N0YXRlLmNvbG9yXSkgPyBzdGF0ZS5jb2xvciA6IGhleF0oW3IsIGcsIGIsIGFdKTtcclxuICAgICAgICAgICAgJC5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgJC5lbnRlciA9IGRvRW50ZXI7XHJcbiAgICAgICAgICAgICQuZXhpdCA9IGRvRXhpdDtcclxuICAgICAgICAgICAgJC5maXQgPSBkb0ZpdDtcclxuICAgICAgICAgICAgJC5nZXQgPSAoKSA9PiB0aGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAkLnBvcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghc291cmNlW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQ7IC8vIEFscmVhZHkgZWplY3RlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHNvdXJjZVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIG9mZkV2ZW50cyhFVkVOVFNfRE9XTiwgc291cmNlLCBkb0NsaWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb0V4aXQoKSwgZmlyZSgncG9wJywgdGhlQ29sb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAkLnNldCA9IChyLCBnLCBiLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGVEYXRhID0gUkdCMkhTVihbciwgZywgYiwgYV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvU2V0Q29sb3IoKSwgJDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJC5zZWxmID0gc2VsZjtcclxuICAgICAgICAgICAgJC52YWx1ZSA9IChyLCBnLCBiLCBhKSA9PiAoJC5zZXQociwgZywgYiwgYSksIGZpcmUoJ2NoYW5nZScsIFtyLCBnLCBiLCBhXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb0FwcGx5KDEpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb0NsaWNrKGUpIHtcclxuICAgICAgICAgICAgaWYgKGhvb2tzLmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJlKCdmb2N1cycsIHRoZUNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTb3VyY2UgPSBzb3VyY2UgPT09IGdldENsb3Nlc3QodCwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICFnZXRQYXJlbnQoc2VsZikgJiYgZG9FbnRlcihzdGF0ZS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb0V4aXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJDtcclxuICAgIH1cclxuICAgIENQW2hleF0gPSB4ID0+IHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcoeCkpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gKHggPSB4LnRyaW0oKSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoKDQgPT09IGNvdW50IHx8IDcgPT09IGNvdW50KSAmJiAnIycgPT09IHhbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICgvXiMoW2EtZlxcZF17M30pezEsMn0kL2kudGVzdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICg0ID09PSBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RvTnVtYmVyKHhbMV0gKyB4WzFdLCAxNiksIHRvTnVtYmVyKHhbMl0gKyB4WzJdLCAxNiksIHRvTnVtYmVyKHhbM10gKyB4WzNdLCAxNiksIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RvTnVtYmVyKHhbMV0gKyB4WzJdLCAxNiksIHRvTnVtYmVyKHhbM10gKyB4WzRdLCAxNiksIHRvTnVtYmVyKHhbNV0gKyB4WzZdLCAxNiksIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCg1ID09PSBjb3VudCB8fCA5ID09PSBjb3VudCkgJiYgJyMnID09PSB4WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoL14jKFthLWZcXGRdezMsNH0pezEsMn0kL2kudGVzdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICg1ID09PSBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RvTnVtYmVyKHhbMV0gKyB4WzFdLCAxNiksIHRvTnVtYmVyKHhbMl0gKyB4WzJdLCAxNiksIHRvTnVtYmVyKHhbM10gKyB4WzNdLCAxNiksIHRvTnVtYmVyKHhbNF0gKyB4WzRdLCAxNikgLyAyNTVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RvTnVtYmVyKHhbMV0gKyB4WzJdLCAxNiksIHRvTnVtYmVyKHhbM10gKyB4WzRdLCAxNiksIHRvTnVtYmVyKHhbNV0gKyB4WzZdLCAxNiksIHRvTnVtYmVyKHhbN10gKyB4WzhdLCAxNikgLyAyNTVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMV07IC8vIERlZmF1bHQgdG8gYmxhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcjJyArICgnMDAwMDAwJyArIHRvU3RyaW5nKCt4WzJdIHwgK3hbMV0gPDwgOCB8ICt4WzBdIDw8IDE2LCAxNikpLnNsaWNlKC02KSArIChpc1NldCh4WzNdKSAmJiB4WzNdIDwgMSA/IHRvU3RyaW5nKHRvUm91bmQoeFszXSAqIDI1NSkgKyAweDEwMDAwLCAxNikuc3Vic3RyKC0yKSA6IFwiXCIpO1xyXG4gICAgfTtcclxuICAgIENQLmluc3RhbmNlcyA9IHt9O1xyXG4gICAgQ1Auc3RhdGUgPSB7XHJcbiAgICAgICAgJ2NsYXNzJzogJ2NvbG9yLXBpY2tlcicsXHJcbiAgICAgICAgJ2NvbG9yJzogaGV4LFxyXG4gICAgICAgICdwYXJlbnQnOiBudWxsXHJcbiAgICB9O1xyXG4gICAgQ1AudmVyc2lvbiA9ICcyLjIuMCc7XHJcbiAgICByZXR1cm4gQ1A7XHJcbn0pOyIsIi8qKlxyXG4gKiBAbW9kdWxlIFRlbXBsYXRlL1V0aWxzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi8uLi9Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSAnLi8uLi9UcmFuc2xhdG9yL3RyYW5zbGF0b3IuanMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAgVXRpbCDrqqjsnYwgQ2xhc3NcclxuICpcclxuICogQHByb3BlcnR5IHtBcnJheX0gZm9udEZhbWlseUNvbWJvQm94IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZm9udEZhbWlseUNvbWJvQm94fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBkYXRlRm9ybWF0Q29tYm9Cb3gge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNkYXRlRm9ybWF0Q29tYm9Cb3h9XHJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGZvbnRTaXplQ29tYm9Cb3gge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNmb250U2l6ZUNvbWJvQm94fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBzaWduUGVuV2lkdGhDb21ib0JveCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NpZ25QZW5XaWR0aENvbWJvQm94fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSB1c2VySW5mb09wdGlvbkxpc3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN1c2VySW5mb09wdGlvbkxpc3R9XHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB1c2VySW5mb09wdGlvbkxpc3RDb3VudCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3VzZXJJbmZvT3B0aW9uTGlzdENvdW50fVxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBkdkZpZWxkT3B0aW9uTGlzdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2R2RmllbGRPcHRpb25MaXN0fVxyXG4gKlxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBhZGRPYmplY3RzVG9DYW52YXMge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNhZGRPYmplY3RzVG9DYW52YXN9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGFkZFNpZ25TdmdUb0NhbnZhcyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2FkZFNpZ25TdmdUb0NhbnZhc31cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYm91bmRpbmdSZWN0VG9SZWN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjYm91bmRpbmdSZWN0VG9SZWN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjbG9uZUZhYnJpY0NhbnZhcyB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb25lRmFicmljQ2FudmFzfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjbG9uZU9iamVjdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2Nsb25lT2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjbG9uZU9iamVjdFRvT2JqZWN0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvbmVPYmplY3RUb09iamVjdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xvc2VTZWxlY3QyVGFnIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvc2VTZWxlY3QyVGFnfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBc3Rlcmlza0RpdiB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUFzdGVyaXNrRGl2fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyYnV0ZVBvcHVwIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmJ1dGVQb3B1cH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlQ2hlY2tCb3hOb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlQ2hlY2tCb3hOb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyaWJ1dGVDb2xvcklucHV0Tm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUNvbG9ySW5wdXROb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyaWJ1dGVEYXRlSW5wdXROb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlRGF0ZUlucHV0Tm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyaWJ1dGVJbnB1dE5vZGUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVJbnB1dE5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUF0dHJpYnV0ZVBhbmVsTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVBhbmVsTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVBdHRyaWJ1dGVTZWxlY3ROb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlU2VsZWN0Tm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlQXR0cmlidXRlVG9nZ2xlQnV0dG9uTm9kZSB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZVRvZ2dsZUJ1dHRvbk5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZURpdmlkZXJOb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlRGl2aWRlck5vZGV9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZUZpZWxkRGVsZXRlQnRuIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlRmllbGREZWxldGVCdG59XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNyZWF0ZVRleHRBbGlnbkJ1dHRvbk5vZGUge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVUZXh0QWxpZ25CdXR0b25Ob2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVUZXh0QXR0cmJ1dGVOb2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dEF0dHJidXRlTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlfVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjcmVhdGVUZXh0Q29sb3JCdXR0b25Ob2RlIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZmllbGRBbmNlc3RvcnMge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNmaWVsZEFuY2VzdG9yc31cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZmluZFNhbWVBbmNlc3RvciB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2ZpbmRTYW1lQW5jZXN0b3J9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGdldEZvblNpemVDb21ib0JveCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldEZvblNpemVDb21ib0JveH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZ2V0VXNlckluZm9PcHRzTGlzdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldFVzZXJJbmZvT3B0c0xpc3R9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGltYWdlRmlsZVRvQmFzZTY0IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaW1hZ2VGaWxlVG9CYXNlNjR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGlzRW1wdHlPYmplY3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpc0VtcHR5T2JqZWN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBpc1Nob3dBc3Rlcmlza0RpdiB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2lzU2hvd0FzdGVyaXNrRGl2fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBpc1N0cmluZ0VtcHR5IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjaXNTdHJpbmdFbXB0eX1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbWVyZ2VGaWVsZHNCQm94IHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMubWVyZ2VGaWVsZHNCQm94I2FkZE9iamVjdHNUb0NhbnZhc31cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbWVyZ2VPYmplY3RzUmVjdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI21lcmdlT2JqZWN0c1JlY3R9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG1lcmdlUmVjdCB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI21lcmdlUmVjdH1cclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVwb3NpdGlvbkZpZWxkRGVsZXRlQnRuIHtAbGluayBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjcmVwb3NpdGlvbkZpZWxkRGVsZXRlQnRufVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzZXREVkZpZWxkT3B0c0xpc3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzZXREVkZpZWxkT3B0c0xpc3R9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNldFVzZXJJbmZvT3B0c0xpc3Qge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzZXRVc2VySW5mb09wdHNMaXN0fVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzZXRVc2VySW5mb09wdHNMaXN0Q291bnQge0BsaW5rIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzZXRVc2VySW5mb09wdHNMaXN0Q291bnR9XHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNob3dBc3Rlcmlza0RpdiB7QGxpbmsgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3Nob3dBc3Rlcmlza0Rpdn1cclxuICogXHJcbiAqIEBGaWxlTmFtZSB1dGlscy5qc1xyXG4gKiBAc2luY2UgMjAyMS4wNS4zMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNmb250RmFtaWx5Q29tYm9Cb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtj7Dtirgg7KKF66WYXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb250RmFtaWx5Q29tYm9Cb3ggPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIuunkeydgCDqs6DrlJVcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiTWFsZ3VuR290aGljXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCLrsJTtg5XssrRcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiQmF0YW5nXCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2RhdGVGb3JtYXRDb21ib0JveFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOuCoOynnCDtj6zrqacg66as7Iqk7Yq4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkYXRlRm9ybWF0Q29tYm9Cb3ggPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIllZWVktTU0tRERcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiWS1tLWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIllZWVkvTU0vRERcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiWS9tL2RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIllZWVkuTU0uRERcIixcclxuICAgICAgICAgICAgdmFsdWU6IFwiWS5tLmRcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBzdGF0aWMgcmFkaW9UeXBlTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBDT05TVEFOVFMuUkFESU9fVFlQRV8xXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiVHlwZSAyXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBDT05TVEFOVFMuUkFESU9fVFlQRV8yXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZm9udFNpemVDb21ib0JveFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2PsO2KuCDsgqzsnbTspogg7L2k67O067CV7IqkIOumrOyKpO2KuFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9udFNpemVDb21ib0JveCA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NpZ25QZW5XaWR0aENvbWJvQm94XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qF7Y6cIOuRkOq7mCDsvaTrs7TrsJXsiqQg66as7Iqk7Yq4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaWduUGVuV2lkdGhDb21ib0JveCA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge0FycmF5fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3VzZXJJbmZvT3B0aW9uTGlzdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqheyekCDrpqzsiqTtirhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHVzZXJJbmZvT3B0aW9uTGlzdCA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN1c2VySW5mb09wdGlvbkxpc3RDb3VudFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyEnOuqheyekCDrpqzsiqTtirgg6rCv7IiYXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1c2VySW5mb09wdGlvbkxpc3RDb3VudCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZHZGaWVsZE9wdGlvbkxpc3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDquLDrs7jqsJIg7Ji17IWYIOumrOyKpO2KuFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZHZGaWVsZE9wdGlvbkxpc3QgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2lnblRhYlNob3dPcHRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDshJzrqoXtg60g67O07J6EL+yViOuztOyehCDquLDrs7jqsJIg7Ji17IWYXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaWduVGFiU2hvd09wdCA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNsb2NhbGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtmITsnqwg7Ja47Ja0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsb2NhbGUgPSBcImtvXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3RyYW5zbGF0b3JcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDri6Tqta3slrQg7IKs7Jqp7J2EIOychO2VnCBPYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcih7XHJcbiAgICAgICAgZmlsZXNMb2NhdGlvbjogJy9qcy9wZGZfZm9ybS9pMThuJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBcclxuICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gaXNFbXB0eU9iamVjdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2lzRW1wdHlPYmplY3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAgT2JqZWN06rCAIOu5hOyWtOyeiOuKlOyngCDssrTtgaxcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBwYXJhbVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eU9iamVjdChwYXJhbSkge1xyXG4gICAgICAgIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIHBhcmFtID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW0pLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjbG9zZVNlbGVjdDJUYWdcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjbG9zZVNlbGVjdDJUYWdcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBTZWxlY3Qy6rCAIOyXtOugpOyeiOuKlCDtg5zqt7jrpbwg7LK07YGs7ZWY7JesIOuLq+uKlOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9zZVNlbGVjdDJUYWcobm9kZSkge1xyXG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvckFsbChcImxpIC5cIiArIENPTlNUQU5UUy5FRElUT1JfQVRUUl9TRUxFQ1RfQ0xBU1MpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsKS5zZWxlY3QyKCdjbG9zZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjcmVtb3ZlQWxsQ2hpbGROb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZW064u57ZWY64qUIE5vZGXsnZgg66qo65OgIENoaWxk66W8IOygnOqxsO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbW92ZUFsbENoaWxkTm9kZShub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmxhc3RDaGlsZC5pZCA9PT0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1BBTkVMX0lEKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5jbG9zZVNlbGVjdDJUYWcobm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVQYW5lbE5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTrk5zsnZgg7IaN7ISx7J2EIOuztOyXrOykhCBQYW5lbOulvCDsg53shLHtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZVBhbmVsTm9kZSgpIHtcclxuICAgICAgICB2YXIgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgcGFuZWwuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1BBTkVMX0NMQVNTO1xyXG4gICAgICAgIHBhbmVsLmlkID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1BBTkVMX0lEO1xyXG5cclxuICAgICAgICByZXR1cm4gcGFuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZWE65Oc7J2YIOyGjeyEseykkSBpbnB1dOydhCDsgqzsmqntlZjripQgRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRQcm9wZXR5TmFtZSDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgaW5wdXTsl5Ag65Ok7Ja06rCIIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVUb29sdGlwICBUb29sVGlw7JeQIOuTpOyWtOqwiCDrgrTsmqlcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyAg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlSW5wdXROb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgdHlwZSwgbm9kZVRvb2x0aXAsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleSh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCB0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9JTlBVVF9DTEFTUztcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLWlkXCIsIGZpZWxkSWQpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBmaWVsZFByb3BldHlOYW1lKTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgIT09IFwiXCIgKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZUV2ZW50RnVuYywgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZUF0dHJpYnV0ZUlucHV0Tm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOuTnOydmCDsho3shLHspJEgdGV4dGFyZeulvCDsgqzsmqntlZjripQgRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRQcm9wZXR5TmFtZSDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgdGV4dGFyZeyXkCDrk6TslrTqsIgg6rCSXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlVGV4dEFyZWFOb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgdHlwZSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuICAgICAgICB2YXIgdGl0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZVdyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfQ0xBU1M7XHJcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KHRpdGxlKTtcclxuICAgICAgICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICAgICAgdGV4dGFyZWEuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1RFWFRBUkVBX0NMQVNTO1xyXG4gICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS50eXBlID0gdHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMsIHRydWUpO1xyXG5cclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlQ2hlY2tCb3hOb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlQ2hlY2tCb3hOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIO2VhOuTnOydmCDsho3shLHspJEgY2hlY2tib3jrpbwg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkUHJvcGV0eU5hbWUg7IKs7Jqp7ZWgIEZpZWxk7J2YIOyGjeyEsSDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAgRWxlbWVudOyXkCDsgqzsmqntlaAg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIGlucHV07JeQIOuTpOyWtOqwiCDqsJJcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVDaGVja0JveE5vZGUoZmllbGRJZCwgZmllbGRQcm9wZXR5TmFtZSwgdGl0bGUsIHZhbHVlLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG5cclxuICAgICAgICB2YXIgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0VGV4dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wdXRUZXh0LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9JTlBVVF9DTEFTUztcclxuICAgICAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIGlucHV0VGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgaW5wdXQuaWQgPSBmaWVsZFByb3BldHlOYW1lICsgXCJfY2hrYm94XCI7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFRleHQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hlY2tCb3hDb250YWluZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXJOb2RlLmNsYXNzTmFtZSA9IFwiQXR0cmlidXRlLUNvbnRlbnRzLVJvdy1DaGVja0JveC1Db250YWluZXJcIlxyXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgdmFyIGNoZWNrQm94TGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGNoZWNrQm94TGFiZWxOb2RlLmh0bWxGb3IgPSBmaWVsZFByb3BldHlOYW1lICsgXCJfY2hrYm94XCI7XHJcbiAgICAgICAgY2hlY2tCb3hMYWJlbE5vZGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBjaGVja0JveENvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbE5vZGUpO1xyXG5cclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXJOb2RlKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW5wdXRUZXh0KTtcclxuICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZURhdGVJbnB1dE5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBdHRyaWJ1dGVEYXRlSW5wdXROb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIO2VhOuTnOydmCDsho3shLHspJEgRGF0ZeulvCDsgqzsmqntlZjripQgRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQgIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkUHJvcGV0eU5hbWUgIOyCrOyaqe2VoCBGaWVsZOydmCDsho3shLEg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgIEVsZW1lbnTsl5Ag7IKs7Jqp7ZWgIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICBpbnB1dOyXkCDrk6TslrTqsIgg6rCSXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZVRvb2x0aXAgIFRvb2xUaXDsl5Ag65Ok7Ja06rCIIOuCtOyaqVxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jICDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVEYXRlSW5wdXROb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgbm9kZVRvb2x0aXAsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfSU5QVVRfQ0xBU1M7XHJcbiAgICAgICAgaW5wdXQuaWQgPSBmaWVsZFByb3BldHlOYW1lICsgXCJfZGF0ZS1waWNrZXJcIjtcclxuICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgZmllbGRQcm9wZXR5TmFtZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnB1dFBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dFBpY2tlci5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfREFURV9JTlBVVF9DTEFTUztcclxuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaW5wdXRQaWNrZXIudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMsIHRydWUpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZVdyYXApO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0UGlja2VyKTtcclxuICAgICAgICByZXR1cm4gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZUNvbG9ySW5wdXROb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlQ29sb3JJbnB1dE5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTrk5zsnZgg7IaN7ISx7KSRIENvbG9yIFBpY2tlcuulvCDsgqzsmqntlZjripQgRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQgIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkUHJvcGV0eU5hbWUgIOyCrOyaqe2VoCBGaWVsZOydmCDsho3shLEg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgIEVsZW1lbnTsl5Ag7IKs7Jqp7ZWgIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICBpbnB1dOyXkCDrk6TslrTqsIgg6rCSXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgaW5wdXTsnZggdHlwZeyXkCDrk6TslrTqsIgg6rCSIC0g7IKs7Jqp7ZWY7KeAIOyViuydjC5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlVG9vbHRpcCAgVG9vbFRpcOyXkCDrk6TslrTqsIgg64K07JqpXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMgIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZUNvbG9ySW5wdXROb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgdHlwZSwgbm9kZVRvb2x0aXAsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgcm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9DT05URU5UU19ST1dfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfSU5QVVRfQ0xBU1M7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgZmllbGRQcm9wZXR5TmFtZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnB1dC5pZCA9IGZpZWxkSWQgKyBcIl9jb2xvclwiO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5wdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgdmFyIGlucHV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaW5wdXRXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9JTlBVVF9XUkFQX0NMQVNTO1xyXG4gICAgICAgIGlucHV0V3JhcC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgaW5wdXRXcmFwLmFwcGVuZENoaWxkKGlucHV0QnRuKTtcclxuXHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGlucHV0V3JhcCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVUb2dnbGVCdXR0b25Ob2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlVG9nZ2xlQnV0dG9uTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIFRvZ2dsZSBidXR0b27snYQg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lICDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlICBFbGVtZW507JeQIOyCrOyaqe2VoCDsnbTrpoRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAgaW5wdXTsl5Ag65Ok7Ja06rCIIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jICDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVUb2dnbGVCdXR0b25Ob2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIHRpdGxlLCB2YWx1ZSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuICAgICAgICB2YXIgcm93V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcm93V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfQ0xBU1M7XHJcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KHRpdGxlKTtcclxuICAgICAgICB0aXRsZVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1pMThuXCIsIHRpdGxlKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHN3aXRjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIHN3aXRjaExhYmVsLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5TV0lUQ0hfTEFCRUxfQ0xBU1M7XHJcblxyXG4gICAgICAgIHZhciBpbnB1dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXRUZXh0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dFRleHQuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIGZpZWxkUHJvcGV0eU5hbWUpO1xyXG4gICAgICAgIGlucHV0VGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5wdXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRUZXh0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5wdXRUZXh0LnZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpbnB1dFRleHQudmFsdWUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2xpZGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHNsaWRlclNwYW4uY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuU1dJVENIX0xBQkVMX1NMSURFUl9DTEFTUyk7XHJcbiAgICAgICAgc2xpZGVyU3Bhbi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5TV0lUQ0hfTEFCRUxfU0xJREVSX1JPVU5EX0NMQVNTKTtcclxuXHJcbiAgICAgICAgc3dpdGNoTGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIHN3aXRjaExhYmVsLmFwcGVuZENoaWxkKHNsaWRlclNwYW4pO1xyXG5cclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKHN3aXRjaExhYmVsKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJvd1dyYXApO1xyXG4gICAgICAgIHJldHVybiByb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIO2VhOuTnOydmCDsho3shLHspJEgU2VsZWN066W8IOyCrOyaqe2VmOuKlCBFbGVtZW5066W8IOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lICDsgqzsmqntlaAgRmllbGTsnZgg7IaN7ISxIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucyBbe3ZhbHVlOiBcInZhbHVlXCIsIHRleHQ6IFwidGV4dFwifV0gc2VsZWN07JeQIOyCrOyaqeuQmOuKlCBNYXAgQXJyYXlcclxuICAgICAqIEBwYXJhbSB7IFN0cmluZ30gdGl0bGUgRWxlbWVudOyXkCDsgqzsmqntlaAg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHVzZURlZmF1bE9wdGlvbk5vZGUg64yA7IOB7ISg7YOd7J2EIOyCrOyaqe2VoOyngCDsl6zrtoBcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBdHRyaWJ1dGVTZWxlY3RJbm5lck5vZGUoZmllbGRJZCwgZmllbGRQcm9wZXR5TmFtZSwgb3B0aW9ucywgdGl0bGUsIHVzZURlZmF1bE9wdGlvbk5vZGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdmFyIHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJvd1dyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTO1xyXG5cclxuICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRpdGxlV3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfV1JBUF9DTEFTUztcclxuICAgICAgICAgICAgdmFyIHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSBVdGlscy50cmFuc2xhdGVGb3JLZXkodGl0bGUpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1pMThuXCIsIHRpdGxlKTtcclxuICAgICAgICAgICAgdGl0bGVXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICBzZWxlY3ROb2RlLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9TRUxFQ1RfQ0xBU1M7XHJcbiAgICAgICAgaWYgKHVzZURlZmF1bE9wdGlvbk5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmF1bHRPcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbk5vZGUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uTm9kZS50ZXh0ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KFwiVGVtcGxhdGUuc2VsZWN0RGVmYXVsdFRleHRcIik7XHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25Ob2RlLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCBcIlRlbXBsYXRlLnNlbGVjdERlZmF1bHRUZXh0XCIpO1xyXG4gICAgICAgICAgICBzZWxlY3ROb2RlLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb25Ob2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgb3B0aW9ucy5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uTm9kZS52YWx1ZSA9IG9wdGlvbnNbaWR4XS52YWx1ZTtcclxuICAgICAgICAgICAgb3B0aW9uTm9kZS50ZXh0ID0gb3B0aW9uc1tpZHhdLnRleHQ7XHJcbiAgICAgICAgICAgIHNlbGVjdE5vZGUuYXBwZW5kQ2hpbGQob3B0aW9uTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3ROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgc2VsZWN0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgZmllbGRQcm9wZXR5TmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChzZWxlY3ROb2RlKTtcclxuICAgICAgICByZXR1cm4gcm93V3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVTZWxlY3ROb2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmlidXRlU2VsZWN0Tm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICAg7ZWE65Oc7J2YIOyGjeyEseykkSBTZWxlY3Trpbwg7IKs7Jqp7ZWY64qUIEVsZW1lbnTrpbwgbGnroZwg6rCQ7Iu47IScIOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFByb3BldHlOYW1lIOyCrOyaqe2VoCBGaWVsZOydmCDsho3shLEg7J2066aEXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zIFt7dmFsdWU6IFwidmFsdWVcIiwgdGV4dDogXCJ0ZXh0XCJ9XSA6IHNlbGVjdOyXkCDsgqzsmqnrkJjripQgTWFwIEFycmF5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgIEVsZW1lbnTsl5Ag7IKs7Jqp7ZWgIOydtOumhFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB1c2VEZWZhdWxPcHRpb25Ob2RlIOuMgOyDgeyEoO2DneydhCDsgqzsmqntlaDsp4Ag7Jes67aAXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmlidXRlU2VsZWN0Tm9kZShmaWVsZElkLCBmaWVsZFByb3BldHlOYW1lLCBvcHRpb25zLCB0aXRsZSwgdXNlRGVmYXVsT3B0aW9uTm9kZSA9IHRydWUpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gVXRpbHMuY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlKGZpZWxkSWQsIGZpZWxkUHJvcGV0eU5hbWUsIG9wdGlvbnMsIHRpdGxlLCB1c2VEZWZhdWxPcHRpb25Ob2RlKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocm93V3JhcCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVEaXZpZGVyTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZURpdmlkZXJOb2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgICBsaeydmCDqtazrtoTsnpDrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVEaXZpZGVyTm9kZSgpIHtcclxuICAgICAgICB2YXIgZGl2aWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBkaXZpZGVyUm93LmNsYXNzTmFtZSA9IENPTlNUQU5UUy5ESVZJREVSX0NMQVNTO1xyXG4gICAgICAgIHJldHVybiBkaXZpZGVyUm93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZVRleHRBbGlnbkJ1dHRvbk5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVUZXh0QWxpZ25CdXR0b25Ob2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgICDtlYTrk5zsnZgg7IaN7ISx7KSRIFRleHQgQWxpZ24gQnV0dG9uIEVsZW1lbnTsnYQg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAg7ZiE7J6s7J2YIHRleHQgYWxpZ24g6rCSXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dEFsaWduQnV0dG9uTm9kZShmaWVsZElkLCB2YWx1ZSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJvd1dyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZVdyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfQ0xBU1M7XHJcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KFwiVGVtcGxhdGUudGV4dEFsaWduVGV4dFwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uc2V0QXR0cmlidXRlKFwiZGF0YS1pMThuXCIsIFwiVGVtcGxhdGUudGV4dEFsaWduVGV4dFwiKTtcclxuICAgICAgICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XHJcblxyXG4gICAgICAgIHZhciBidG5zV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIGxlZnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxlZnRCdG4uY2xhc3NMaXN0LmFkZChcIlRlbXBsYXRlLUJ1dHRvblwiKTtcclxuICAgICAgICBsZWZ0QnRuLmNsYXNzTGlzdC5hZGQoXCJUZXh0LUFsaWduLUxlZnRcIik7XHJcbiAgICAgICAgbGVmdEJ0bi5jbGFzc0xpc3QuYWRkKFwiVG9nZ2xlLUJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdmFyIGxlZnRJY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgICAgbGVmdEJ0bi5hcHBlbmRDaGlsZChsZWZ0SWNvbkJ0bik7XHJcblxyXG4gICAgICAgIHZhciBjZW50ZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiVGVtcGxhdGUtQnV0dG9uXCIpO1xyXG4gICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiVGV4dC1BbGlnbi1DZW50ZXJcIik7XHJcbiAgICAgICAgY2VudGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJUb2dnbGUtQnV0dG9uXCIpO1xyXG5cclxuICAgICAgICB2YXIgY2VudGVySWNvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGNlbnRlckJ0bi5hcHBlbmRDaGlsZChjZW50ZXJJY29uQnRuKTtcclxuXHJcbiAgICAgICAgdmFyIHJpZ2h0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByaWdodEJ0bi5jbGFzc0xpc3QuYWRkKFwiVGVtcGxhdGUtQnV0dG9uXCIpO1xyXG4gICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC5hZGQoXCJUZXh0LUFsaWduLVJpZ2h0XCIpO1xyXG4gICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC5hZGQoXCJUb2dnbGUtQnV0dG9uXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmlnaHRJY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgICAgcmlnaHRCdG4uYXBwZW5kQ2hpbGQocmlnaHRJY29uQnRuKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgbGVmdEJ0bi5jbGFzc0xpc3QuYWRkKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgY2VudGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC5hZGQoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlucHV0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dE5vZGUudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5wdXROb2RlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtaWRcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZShcImRhdGEtZmllbGQtcHJvcGVydHktbmFtZVwiLCBcInRleHRBbGlnblwiKTtcclxuICAgICAgICBpbnB1dE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG5cclxuICAgICAgICBsZWZ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICBpZiAoIWxlZnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGxlZnRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyaWdodEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNlbnRlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2VudGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIGlucHV0Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIGlmICghY2VudGVyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyaWdodEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsZWZ0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcIlNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICByaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIGlucHV0Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIGlmICghcmlnaHRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiU2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGVmdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNlbnRlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQobGVmdEJ0bik7XHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoY2VudGVyQnRuKTtcclxuICAgICAgICBidG5zV3JhcC5hcHBlbmRDaGlsZChyaWdodEJ0bik7XHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoaW5wdXROb2RlKTtcclxuXHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChidG5zV3JhcCk7XHJcbiAgICAgICAgcmV0dXJuIHJvd1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIO2VhOuTnOydmCDsho3shLHspJEgVGV4dCBCb2xkIHRvZ2dsZSBCdXR0b24gRWxlbWVudOydhCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSUQgIOyCrOyaqe2VoCBGaWVsZOydmCBJRFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICDtmITsnqzsnZggdGV4dCBib2xkIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jIOqwkuydtCDrs4DtlaAg65WMIO2YuOy2nOuQmOyWtOyniCBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRleHRCb2xkQnV0dG9uTm9kZShmaWVsZElkLCB2YWx1ZSwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgdmFyIHJvd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJvd1dyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX1JPV19XUkFQX0NMQVNTO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aXRsZVdyYXAuY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgdmFyIHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jbGFzc05hbWUgPSBDT05TVEFOVFMuVElUTEVfQ0xBU1M7XHJcbiAgICAgICAgdGl0bGVTcGFuLnRleHRDb250ZW50ID0gVXRpbHMudHJhbnNsYXRlRm9yS2V5KFwiVGVtcGxhdGUuYm9sZFRleHRcIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCBcIlRlbXBsYXRlLmJvbGRUZXh0XCIpO1xyXG4gICAgICAgIHRpdGxlV3JhcC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bnNXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB2YXIgYm9sZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYm9sZEJ0bi5jbGFzc0xpc3QuYWRkKFwiVGVtcGxhdGUtQnV0dG9uXCIpO1xyXG4gICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LmFkZChcIlRleHQtQm9sZC1CdXR0b25cIik7XHJcbiAgICAgICAgYm9sZEJ0bi5jbGFzc0xpc3QuYWRkKFwiVG9nZ2xlLUJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgdmFyIGJvbGRCdG5JY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgICAgYm9sZEJ0bi5hcHBlbmRDaGlsZChib2xkQnRuSWNvbkJ0bik7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgYm9sZEJ0bi5jbGFzc0xpc3QuYWRkKFwiU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW5wdXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGlucHV0Tm9kZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaW5wdXROb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1pZFwiLCBmaWVsZElkKTtcclxuICAgICAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1maWVsZC1wcm9wZXJ0eS1uYW1lXCIsIFwiYm9sZFwiKTtcclxuICAgICAgICBpbnB1dE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG5cclxuICAgICAgICBib2xkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmICghYm9sZEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXROb2RlLnZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE5vZGUudmFsdWUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgYm9sZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiU2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidG5zV3JhcC5hcHBlbmRDaGlsZChib2xkQnRuKTtcclxuICAgICAgICBidG5zV3JhcC5hcHBlbmRDaGlsZChpbnB1dE5vZGUpO1xyXG5cclxuICAgICAgICByb3dXcmFwLmFwcGVuZENoaWxkKGJ0bnNXcmFwKTtcclxuICAgICAgICByZXR1cm4gcm93V3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVUZXh0Q29sb3JCdXR0b25Ob2RlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDtlYTrk5zsnZgg7IaN7ISx7KSRIFRleHQgQ29sb3IgcGlja2VyIEVsZW1lbnTsnYQg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAg7ZiE7J6s7J2YIHRleHQgY29sb3Ig6rCSXHJcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjaGFuZ2VFdmVudEZ1bmMg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZShmaWVsZElkLCB0aXRsZSwgdmFsdWUsIGNoYW5nZUV2ZW50RnVuYykge1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuXHJcbiAgICAgICAgdmFyIHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGl0bGVXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5USVRMRV9XUkFQX0NMQVNTO1xyXG4gICAgICAgIHZhciB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uY2xhc3NOYW1lID0gQ09OU1RBTlRTLlRJVExFX0NMQVNTO1xyXG4gICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IFV0aWxzLnRyYW5zbGF0ZUZvcktleSh0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaTE4blwiLCB0aXRsZSk7XHJcbiAgICAgICAgdGl0bGVXcmFwLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZCh0aXRsZVdyYXApO1xyXG5cclxuICAgICAgICB2YXIgYnRuc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGJ0bnNXcmFwLmNsYXNzTmFtZSA9IFwiQ29sb3ItQnV0dG9uLVdyYXBcIjtcclxuXHJcbiAgICAgICAgdmFyIGJvbGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJvbGRCdG4uY2xhc3NMaXN0LmFkZChcIlRlbXBsYXRlLUJ1dHRvblwiKTtcclxuICAgICAgICBib2xkQnRuLmNsYXNzTGlzdC5hZGQoXCJDb2xvci1CdXR0b25cIik7XHJcblxyXG4gICAgICAgIHZhciBpbnB1dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaW5wdXROb2RlLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICBpbnB1dE5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGlucHV0Tm9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLWlkXCIsIGZpZWxkSWQpO1xyXG4gICAgICAgIGlucHV0Tm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZpZWxkLXByb3BlcnR5LW5hbWVcIiwgXCJmb250Q29sb3JcIik7XHJcbiAgICAgICAgaW5wdXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRXZlbnRGdW5jKTtcclxuXHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoYm9sZEJ0bik7XHJcbiAgICAgICAgYnRuc1dyYXAuYXBwZW5kQ2hpbGQoaW5wdXROb2RlKTtcclxuXHJcbiAgICAgICAgcm93V3JhcC5hcHBlbmRDaGlsZChidG5zV3JhcCk7XHJcbiAgICAgICAgcmV0dXJuIHJvd1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlVGV4dEF0dHJidXRlTm9kZVxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2NyZWF0ZVRleHRBdHRyYnV0ZU5vZGVcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ZWE65Oc7J2YIOyGjeyEseykkSBUZXh0IOyGjeyEseydmCBFbGVtZW5065Ok7J2EIOunjOuToOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJRCAg7IKs7Jqp7ZWgIEZpZWxk7J2YIElEXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm9udENvbG9yICDtmITsnqzsnZggRm9udCBDb2xvciDqsJJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb250QWxpZ24gIO2YhOyerOydmCB0ZXh0IGFsaWduIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlzQm9sZCAg7ZiE7J6s7J2YIHRleHQgYm9sZCDqsJJcclxuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNoYW5nZUV2ZW50RnVuYyAg6rCS7J20IOuzgO2VoCDrlYwg7Zi47Lac65CY7Ja07KeIIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dEF0dHJidXRlTm9kZShmaWVsZElkLCBmb250Q29sb3IsIGZvbnRBbGlnbiwgaXNCb2xkLCBjaGFuZ2VFdmVudEZ1bmMpIHtcclxuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHJvdy5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ09OVEVOVFNfUk9XX0NMQVNTO1xyXG4gICAgICAgIHZhciByb3dXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByb3dXcmFwLmNsYXNzTmFtZSA9IENPTlNUQU5UUy5FRElUT1JfQVRUUl9ST1dfV1JBUF9DTEFTUztcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZm9udEF0dHJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICBmb250QXR0clRhYmxlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdmFyIGNvbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29sMS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEwcHhcIjtcclxuICAgICAgICBjb2wxLmNvbFNwYW4gPSA0O1xyXG4gICAgICAgIHZhciBmb250RmFtaWx5Q29tYm8gPSBVdGlscy5jcmVhdGVBdHRyaWJ1dGVTZWxlY3RJbm5lck5vZGUoZmllbGRJZCwgXCJmb250TmFtZVwiLCBVdGlscy5mb250RmFtaWx5Q29tYm9Cb3gsIFwiVGVtcGxhdGUuZm9udE5hbWVUZXh0XCIsIGZhbHNlKTtcclxuICAgICAgICBjb2wxLmFwcGVuZENoaWxkKGZvbnRGYW1pbHlDb21ibyk7XHJcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChjb2wxKTtcclxuXHJcbiAgICAgICAgdmFyIGNvbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY29sMi5jb2xTcGFuID0gNDtcclxuICAgICAgICB2YXIgZm9udFNpemVDb21ibyA9IFV0aWxzLmNyZWF0ZUF0dHJpYnV0ZVNlbGVjdElubmVyTm9kZShmaWVsZElkLCBcImZvbnRTaXplXCIsIFV0aWxzLmdldEZvblNpemVDb21ib0JveCgpLCBcIlRlbXBsYXRlLmZvbnRTaXplVGV4dFwiLCBmYWxzZSk7XHJcbiAgICAgICAgY29sMi5hcHBlbmRDaGlsZChmb250U2l6ZUNvbWJvKTtcclxuICAgICAgICByb3cxLmFwcGVuZENoaWxkKGNvbDIpO1xyXG5cclxuICAgICAgICBmb250QXR0clRhYmxlLmFwcGVuZENoaWxkKHJvdzEpO1xyXG5cclxuICAgICAgICB2YXIgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB2YXIgY29sMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2wzLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDMuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDMuY29sU3BhbiA9IDQ7XHJcbiAgICAgICAgcm93Mi5hcHBlbmRDaGlsZChjb2wzKTtcclxuXHJcbiAgICAgICAgdmFyIGFsaWduQnRuc05vZGUgPSBVdGlscy5jcmVhdGVUZXh0QWxpZ25CdXR0b25Ob2RlKGZpZWxkSWQsIGZvbnRBbGlnbiwgY2hhbmdlRXZlbnRGdW5jKTtcclxuICAgICAgICBjb2wzLmFwcGVuZENoaWxkKGFsaWduQnRuc05vZGUpO1xyXG5cclxuICAgICAgICB2YXIgY29sNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2w0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDQuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDQuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgdmFyIGJvbGRCdG5Ob2RlID0gVXRpbHMuY3JlYXRlVGV4dEJvbGRCdXR0b25Ob2RlKGZpZWxkSWQsIGlzQm9sZCwgY2hhbmdlRXZlbnRGdW5jKTtcclxuICAgICAgICBjb2w0LmFwcGVuZENoaWxkKGJvbGRCdG5Ob2RlKTtcclxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNvbDQpO1xyXG5cclxuICAgICAgICB2YXIgY29sNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb2w1LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTBweFwiO1xyXG4gICAgICAgIGNvbDUuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xyXG4gICAgICAgIGNvbDUuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgdmFyIGNvbG9yQnRuTm9kZSA9IFV0aWxzLmNyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGUoZmllbGRJZCwgXCJUZW1wbGF0ZS5jb2xvclRleHRcIiwgZm9udENvbG9yLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG4gICAgICAgIGNvbDUuYXBwZW5kQ2hpbGQoY29sb3JCdG5Ob2RlKTtcclxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNvbDUpO1xyXG5cclxuICAgICAgICBmb250QXR0clRhYmxlLmFwcGVuZENoaWxkKHJvdzIpO1xyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoZm9udEF0dHJUYWJsZSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJvd1dyYXApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJvdzogcm93LFxyXG4gICAgICAgICAgICBmb250RmFtaWx5Q29tYm86IGZvbnRGYW1pbHlDb21ibyxcclxuICAgICAgICAgICAgZm9udFNpemVDb21ibzogZm9udFNpemVDb21ibyxcclxuICAgICAgICAgICAgY29sb3JCdG46IGNvbG9yQnRuTm9kZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNyZWF0ZVRleHRBdHRyYnV0ZU5vZGVcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVUZXh0TWVtb0F0dHJidXRlTm9kZVxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDrqZTrqqgg7IaN7ISx7J2YIEVsZW1lbnTrk6TsnYQg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZElEICDsgqzsmqntlaAgRmllbGTsnZggSURcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmb250Q29sb3IgIO2YhOyerOydmCBGb250IENvbG9yIOqwklxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZvbnRBbGlnbiAg7ZiE7J6s7J2YIHRleHQgYWxpZ24g6rCSXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXNCb2xkICDtmITsnqzsnZggdGV4dCBib2xkIOqwklxyXG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gY2hhbmdlRXZlbnRGdW5jICDqsJLsnbQg67OA7ZWgIOuVjCDtmLjstpzrkJjslrTsp4ggY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgICBzdGF0aWMgY3JlYXRlVGV4dE1lbW9BdHRyYnV0ZU5vZGUoZmllbGRJZCwgZm9udENvbG9yLCBpc0JvbGQsIGJhY2tncm91bmRDb2xvciwgY2hhbmdlRXZlbnRGdW5jKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICByb3cuY2xhc3NOYW1lID0gQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NPTlRFTlRTX1JPV19DTEFTUztcclxuICAgICAgICBsZXQgcm93V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcm93V3JhcC5jbGFzc05hbWUgPSBDT05TVEFOVFMuRURJVE9SX0FUVFJfUk9XX1dSQVBfQ0xBU1M7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZvbnRBdHRyVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIGxldCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGxldCBjb2wxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDEuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgY29sMS5jb2xTcGFuID0gNDtcclxuICAgICAgICBsZXQgZm9udEZhbWlseUNvbWJvID0gVXRpbHMuY3JlYXRlQXR0cmlidXRlU2VsZWN0SW5uZXJOb2RlKGZpZWxkSWQsIFwiZm9udE5hbWVcIiwgVXRpbHMuZm9udEZhbWlseUNvbWJvQm94LCBcIlRlbXBsYXRlLmZvbnROYW1lVGV4dFwiLCBmYWxzZSk7XHJcbiAgICAgICAgY29sMS5hcHBlbmRDaGlsZChmb250RmFtaWx5Q29tYm8pO1xyXG4gICAgICAgIHJvdzEuYXBwZW5kQ2hpbGQoY29sMSk7XHJcblxyXG4gICAgICAgIGxldCBjb2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDIuY29sU3BhbiA9IDQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplQ29tYm8gPSBVdGlscy5jcmVhdGVBdHRyaWJ1dGVTZWxlY3RJbm5lck5vZGUoZmllbGRJZCwgXCJmb250U2l6ZVwiLCBVdGlscy5nZXRGb25TaXplQ29tYm9Cb3goKSwgXCJUZW1wbGF0ZS5mb250U2l6ZVRleHRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbDIuYXBwZW5kQ2hpbGQoZm9udFNpemVDb21ibyk7XHJcbiAgICAgICAgcm93MS5hcHBlbmRDaGlsZChjb2wyKTtcclxuXHJcbiAgICAgICAgZm9udEF0dHJUYWJsZS5hcHBlbmRDaGlsZChyb3cxKTtcclxuXHJcbiAgICAgICAgbGV0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgICAgIGxldCBjb2w0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgY29sNC5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICAgICAgY29sNC5jb2xTcGFuID0gMjtcclxuICAgICAgICBsZXQgYm9sZEJ0bk5vZGUgPSBVdGlscy5jcmVhdGVUZXh0Qm9sZEJ1dHRvbk5vZGUoZmllbGRJZCwgaXNCb2xkLCBjaGFuZ2VFdmVudEZ1bmMpO1xyXG4gICAgICAgIGNvbDQuYXBwZW5kQ2hpbGQoYm9sZEJ0bk5vZGUpO1xyXG4gICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoY29sNCk7XHJcblxyXG4gICAgICAgIGxldCBjb2w1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgY29sNS5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICAgICAgY29sNS5jb2xTcGFuID0gMjtcclxuICAgICAgICBsZXQgY29sb3JCdG5Ob2RlID0gVXRpbHMuY3JlYXRlVGV4dENvbG9yQnV0dG9uTm9kZShmaWVsZElkLCBcIlRlbXBsYXRlLmNvbG9yVGV4dFwiLCBmb250Q29sb3IsIGNoYW5nZUV2ZW50RnVuYyk7XHJcbiAgICAgICAgY29sNS5hcHBlbmRDaGlsZChjb2xvckJ0bk5vZGUpO1xyXG4gICAgICAgIHJvdzIuYXBwZW5kQ2hpbGQoY29sNSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjb2w2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGNvbDYuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgY29sNi5zdHlsZS5wYWRkaW5nVG9wID0gXCIyMHB4XCI7XHJcbiAgICAgICAgY29sNi5jb2xTcGFuID0gMjtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZENvbG9yQnRuTm9kZSA9IFV0aWxzLmNyZWF0ZVRleHRDb2xvckJ1dHRvbk5vZGUoZmllbGRJZCwgXCJUZW1wbGF0ZS5iZ0NvbG9yVGV4dFwiLCBiYWNrZ3JvdW5kQ29sb3IsIGNoYW5nZUV2ZW50RnVuYyk7XHJcbiAgICAgICAgY29sNi5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kQ29sb3JCdG5Ob2RlKTtcclxuICAgICAgICByb3cyLmFwcGVuZENoaWxkKGNvbDYpO1xyXG5cclxuICAgICAgICBmb250QXR0clRhYmxlLmFwcGVuZENoaWxkKHJvdzIpO1xyXG4gICAgICAgIHJvd1dyYXAuYXBwZW5kQ2hpbGQoZm9udEF0dHJUYWJsZSk7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJvd1dyYXApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJvdzogcm93LFxyXG4gICAgICAgICAgICBmb250RmFtaWx5Q29tYm86IGZvbnRGYW1pbHlDb21ibyxcclxuICAgICAgICAgICAgZm9udFNpemVDb21ibzogZm9udFNpemVDb21ibyxcclxuICAgICAgICAgICAgYm9sZEJ0bjogYm9sZEJ0bk5vZGUsXHJcbiAgICAgICAgICAgIGNvbG9yQnRuOiBjb2xvckJ0bk5vZGUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckJ0bjogYmFja2dyb3VuZENvbG9yQnRuTm9kZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gYXNzaWduXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjYXNzaWduXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIG9iamVjdOyXkCDtlbTri7kg7IaN7ISx7J20IOyeiOycvOuptCDqsJLsnYQg7ISk7KCV7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogIOyCrOyaqe2VoCBPYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wICDsgqzsmqntlaAg7IaN7ISxXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgIOyGjeyEseyXkCDsgqzsmqntlaAg6rCSXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3NpZ24ob2JqLCBwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcHJvcCA9IHByb3Auc3BsaXQoXCIuXCIpO1xyXG5cclxuICAgICAgICBpZiAocHJvcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gcHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBhc3NpZ24ob2JqW2VdID1cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2VdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gb2JqW2VdXHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgIHByb3AsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIG9ialtwcm9wWzBdXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGZpZWxkQW5jZXN0b3JzXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZmllbGRBbmNlc3RvcnNcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBGaWVsZOyXkCDsg4Hsho3rkJwg67aA66qo65Ok7J2EIOywvuuKlOuLpC4uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFueWNsYXNzIDog7LC+7J2EIGZpZWxkXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX06IOyDgeyGjeuQnCDrtoDrqqjrk6RcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpZWxkQW5jZXN0b3JzIChhbnljbGFzcylcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIChhbnljbGFzcyA9PT0gdW5kZWZpbmVkKTogcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgKGFueWNsYXNzID09PSBudWxsKTogcmV0dXJuIFtdO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbYW55Y2xhc3MsIC4uLihVdGlscy5maWVsZEFuY2VzdG9ycyAoT2JqZWN0LmdldFByb3RvdHlwZU9mIChhbnljbGFzcykpKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGZpbmRTYW1lQW5jZXN0b3JcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNmaW5kU2FtZUFuY2VzdG9yXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIEZpZWxk65Ok7J2YIOqzte2GteycvOuhnCDsg4Hsho3rkJwg67aA66qo66W8IOywvuuKlOuLpC4uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gIGZpZWxkTGlzdCDssL7snYQgZmllbGQg66as7Iqk7Yq4XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9ICDqs7XthrXsnLzroZwg7IOB7IaN65CcIOu2gOuqqFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZmluZFNhbWVBbmNlc3RvcihmaWVsZExpc3QpIHtcclxuICAgICAgICAvLyDssqvrsojsp7gg7ZWE65Oc7J2YIOyhsOyDgeuTpOydhCDsobDsgqztlZzri6QuXHJcbiAgICAgICAgdmFyIGZpcnN0QW5jZXN0b3JzID0gVXRpbHMuZmllbGRBbmNlc3RvcnMoZmllbGRMaXN0WzBdKTtcclxuICAgICAgICB2YXIgc2FtZUFuY2VzdG9yID0gZmlyc3RBbmNlc3RvcnNbMF07XHJcbiAgICAgICAgLy8g7ZWE65Oc7J2YIOqwr+yImOqwgCAx6rCc7J2066m0IOq3uOuDpSDrpqzthLTtlZzri6QuXHJcbiAgICAgICAgaWYgKGZpZWxkTGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhbWVBbmNlc3RvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgLy8gMuuyiOynuCDtlYTrk5zrtoDthLAg66Oo7ZSE66W8IO2VnOuLpC5cclxuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPCBmaWVsZExpc3QubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICB2YXIgYW5jZXN0b3JzID0gVXRpbHMuZmllbGRBbmNlc3RvcnMoZmllbGRMaXN0W2lkeF0pO1xyXG4gICAgICAgICAgICAvLyDrtoDrqqjqsIAgMeqwnOydtOuptCBCYXNlRmllbGTsnbTrr4DroZwg6re464yA66GcIOumrO2EtO2VnOuLpC5cclxuICAgICAgICAgICAgaWYgKGFuY2VzdG9ycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbmNlc3RvcnNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN0YXJ0SWR4ID0gMDtcclxuICAgICAgICAgICAgLy8g7LKr67KI7Ke4IO2VhOuTnOydmCDsobDsg4HsnYQg66Oo7ZSE7ZWY64qUIGluZGV47J2066+A66GcIDHrtoDthLAg7Iuc7J6R7ZWc64ukLlxyXG4gICAgICAgICAgICB2YXIgc3RhcnRJZHgyID0gMTtcclxuXHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDqs7XthrXsnLzroZwg7ISg7YOd65CcIO2VhOuTnOydmCDsobDsg4Hrs7Tri6Qg7KeA6riIIOyhsOyCrO2VmOuKlCDtlYTrk5zsnZgg7KGw7IOB7J20IOqwr+yImOqwgCDsoIHsnLzrqbQgXHJcbiAgICAgICAgICAgIC8vIOyghOu2gCDsobDsgqztlaAg7ZWE7JqU6rCAIOyXhuydtCDrkZjsnZgg7LCo7J2064KY64qUIOunjO2BvCDrtoDthLAg7KGw7IKs7ZWc64ukLlxyXG4gICAgICAgICAgICAvLyBleCkgVGV4dEZpZWxk7JmAIEltYWdlRmllbGTrpbwg67mE6rWQ7ZW067O066m0XHJcbiAgICAgICAgICAgIC8vIFRleHQgVGV4dEJhc2UgQmFzZSwgSW1hZ2UgQmFzZSDsnbTroIfqsowg7KGw7IOB65Ok7J20IOyhtOyerO2VnOuLpC5cclxuICAgICAgICAgICAgLy8g7J2066CH6rKMIDHrsojsp7jripQg66y07KGw6rG0IOuLpOultOuLiCAx67KI7Ke464qUIO2MqOyKpO2VmOqzoCDri6TsnYzrtoDthLAg7KGw7IKs66W8IO2VnOuLpC5cclxuICAgICAgICAgICAgY29uc3Qgc2FtZUFuY2VzdG9yUGFyZW50cyA9IFV0aWxzLmZpZWxkQW5jZXN0b3JzKHNhbWVBbmNlc3Rvcik7XHJcbiAgICAgICAgICAgIGlmIChzYW1lQW5jZXN0b3JQYXJlbnRzLmxlbmd0aCA+PSBhbmNlc3RvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydElkeCA9IHNhbWVBbmNlc3RvclBhcmVudHMubGVuZ3RoIC0gYW5jZXN0b3JzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWNJZHggPSBzdGFydElkeDsgc2VjSWR4IDwgYW5jZXN0b3JzLmxlbmd0aDsgc2VjSWR4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNlc3RvciA9IGFuY2VzdG9yc1tzZWNJZHhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmRTYW1lQW5jZXN0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZmlyc3RJZHggPSBzdGFydElkeDI7IGZpcnN0SWR4IDwgZmlyc3RBbmNlc3RvcnMubGVuZ3RoOyBmaXJzdElkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihhbmNlc3RvcikgPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZpcnN0QW5jZXN0b3JzW2ZpcnN0SWR4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6rCZ7J2EIOqyveyasCArMeydhCDtlZjripQg7J207Jyg64qUIHByb3RvdHlwZeydmCBjb25zdHJ1Y3RvcuqwgCDtlZjrgpgg7JyE66W8IOuwlOudvOuztOq4sCDrlYzrrLjsnbTri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVBbmNlc3RvciA9IGZpcnN0QW5jZXN0b3JzW2ZpcnN0SWR4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbWVBbmNlc3RvclBhcmVudHMgPSBVdGlscy5maWVsZEFuY2VzdG9ycyhzYW1lQW5jZXN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDquLjsnbTqsIAgMuuptCBCYXNlRmllbGTsnbTrr4DroZwg6re464yA66GcIOumrO2EtO2VnOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhbWVBbmNlc3RvclBhcmVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2FtZUFuY2VzdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRTYW1lQW5jZXN0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydElkeDIgPSBmaXJzdElkeCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kU2FtZUFuY2VzdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNhbWVBbmNlc3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmluZFNhbWVBbmNlc3RvcjIoZmllbGRMaXN0KSB7XHJcbiAgICAgICAgaWYgKGZpZWxkTGlzdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTGlzdFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlyc3RGaWVsZEFuY2VzdG9ycyA9IGZpZWxkTGlzdFswXS5hbmNlc3RvcnMoKTtcclxuICAgICAgICBsZXQgY29tbW9uQW5jZXN0b3IgPSBmaXJzdEZpZWxkQW5jZXN0b3JzWzBdO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDE7IGlkeCA8IGZpZWxkTGlzdC5sZW5ndGg7ICsraWR4KSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tb25BbmNlc3RvciA9PT0gXCJCRlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmllbGRBbmNlc3RvcnMgPSBmaWVsZExpc3RbaWR4XS5hbmNlc3RvcnMoKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkQW5jZXN0b3JzLmluY2x1ZGVzKGNvbW1vbkFuY2VzdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkeDIgPSAxOyBpZHgyIDwgZmlyc3RGaWVsZEFuY2VzdG9ycy5sZW5ndGg7ICsraWR4Mikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkQW5jZXN0b3JzLmluY2x1ZGVzKGZpcnN0RmllbGRBbmNlc3RvcnNbaWR4Ml0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uQW5jZXN0b3IgPSBmaXJzdEZpZWxkQW5jZXN0b3JzW2lkeDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tb25BbmNlc3RvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBnZXRVc2VySW5mb09wdHNMaXN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZ2V0VXNlckluZm9PcHRzTGlzdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDshJzrqoXsnpDrk6TsnZgg7KCV67O0IOumrOyKpO2KuOulvCDrsJjtmZjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7QXJyYXl9IOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq4XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRVc2VySW5mb09wdHNMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy51c2VySW5mb09wdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gc2V0VXNlckluZm9PcHRzTGlzdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3NldFVzZXJJbmZvT3B0c0xpc3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirjrpbwg7ISk7KCV7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpZWxkTGlzdCAg7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFVzZXJJbmZvT3B0c0xpc3Qob3B0cykge1xyXG4gICAgICAgIFV0aWxzLnVzZXJJbmZvT3B0aW9uTGlzdCA9IG9wdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gZ2V0VXNlckluZm9PcHRzTGlzdENvdW50XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZ2V0VXNlckluZm9PcHRzTGlzdENvdW50XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirgg6ri47J2066W8IOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9OiDshJzrqoXsnpDrk6TsnZgg7KCV67O0IOumrOyKpO2KuOq4uOydtFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0VXNlckluZm9PcHRzTGlzdENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy51c2VySW5mb09wdGlvbkxpc3RDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBzZXRVc2VySW5mb09wdHNMaXN0Q291bnRcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzZXRVc2VySW5mb09wdHNMaXN0Q291bnRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ISc66qF7J6Q65Ok7J2YIOygleuztCDrpqzsiqTtirgg6ri47J2066W8IOyEpOygle2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmllbGRMaXN0IOyEnOuqheyekOuTpOydmCDsoJXrs7Qg66as7Iqk7Yq4IOq4uOydtFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0VXNlckluZm9PcHRzTGlzdENvdW50KGNvdW50KSB7XHJcbiAgICAgICAgVXRpbHMudXNlckluZm9PcHRpb25MaXN0Q291bnQgPSBjb3VudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gZ2V0RFZGaWVsZE9wdHNMaXN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZ2V0RFZGaWVsZE9wdHNMaXN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgICDquLDrs7jqsJLsnLzroZwg7IKs7Jqp7ZWgIOqwkuuTpOydmCDrpqzsiqTtirjrpbwg67CY7ZmY7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0FycmF5fSDquLDrs7jqsJLsnLzroZwg7IKs7Jqp7ZWgIOqwkuuTpOydmCDrpqzsiqTtirhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldERWRmllbGRPcHRzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZHZGaWVsZE9wdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gc2V0RFZGaWVsZE9wdHNMaXN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0RFZGaWVsZE9wdHNMaXN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgIOq4sOuzuOqwkuycvOuhnCDsgqzsmqntlaAg6rCS65Ok7J2YIOumrOyKpO2KuOulvCDshKTsoJXtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGZpZWxkTGlzdCB7QXJyYXl9ICDquLDrs7jqsJLsnLzroZwg7IKs7Jqp7ZWgIOqwkuuTpOydmCDrpqzsiqTtirhcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldERWRmllbGRPcHRzTGlzdChvcHRzKSB7XHJcbiAgICAgICAgVXRpbHMuZHZGaWVsZE9wdGlvbkxpc3QgPSBvcHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGdldFNpZ25UYWJTaG93T3B0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZ2V0U2lnblRhYlNob3dPcHRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAgIOyEnOuqhe2DrSDrs7TsnoQv7JWI67O07J6EIOq4sOuzuOqwkuycvOuhnCDsgqzsmqntlaAg6rCS65Ok7J2EIOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0g7ISc66qF7YOtIOuztOyehC/slYjrs7TsnoQg6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6QgXHJcbiAgICAgKiBARGF0ZSA6IDIwMjMuIDEyLiAyN1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2lnblRhYlNob3dPcHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLnNpZ25UYWJTaG93T3B0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHNldFNpZ25UYWJTaG93T3B0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjc2V0U2lnblRhYlNob3dPcHRcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAg7ISc66qF7YOtIOuztOyehC/slYjrs7TsnoQg6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6TsnYQg7ISk7KCV7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzaWduVGFiU2hvd09wdCB7T2JqZWN0fSAg7ISc66qF7YOtIOuztOyehC/slYjrs7TsnoQg6riw67O46rCS7Jy866GcIOyCrOyaqe2VoCDqsJLrk6RcclxuICAgICAqIEBEYXRlIDogMjAyMy4gMTIuIDI3XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRTaWduVGFiU2hvd09wdChvcHRzKSB7XHJcbiAgICAgICAgVXRpbHMuc2lnblRhYlNob3dPcHQgPSBvcHRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGdldEZvblNpemVDb21ib0JveFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2dldEZvblNpemVDb21ib0JveFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDsho3shLHsl5DshJwg7IKs7Jqp7ZWgIO2PsO2KuCDsgqzsnbTspogg66as7Iqk7Yq466W8IOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0g7IaN7ISx7JeQ7IScIOyCrOyaqe2VoCDtj7Dtirgg7IKs7J207KaIIOumrOyKpO2KuFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Rm9uU2l6ZUNvbWJvQm94KCkge1xyXG4gICAgICAgIGlmIChVdGlscy5mb250U2l6ZUNvbWJvQm94Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmZvbnRTaXplQ29tYm9Cb3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSA1MDsgaWR4KyspIHtcclxuICAgICAgICAgICAgVXRpbHMuZm9udFNpemVDb21ib0JveC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IGlkeCArIFwicHhcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpZHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVdGlscy5mb250U2l6ZUNvbWJvQm94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGdldFNpZ25QZW5XaWR0aENvbWJvQm94XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjZ2V0U2lnblBlbldpZHRoQ29tYm9Cb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDsho3shLHsl5DshJwg7IKs7Jqp7ZWgIO2OnCDrkZDqu5gg66as7Iqk7Yq466W8IOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX0g7IaN7ISx7JeQ7IScIOyCrOyaqe2VoCDtjpwg65GQ6ruYIOumrOyKpO2KuFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2lnblBlbldpZHRoQ29tYm9Cb3goKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhVdGlscy5zaWduUGVuV2lkdGhDb21ib0JveC5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChVdGlscy5zaWduUGVuV2lkdGhDb21ib0JveC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlscy5zaWduUGVuV2lkdGhDb21ib0JveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMTsgaWR4IDw9IDIwOyBpZHggKz0gMSkge1xyXG4gICAgICAgICAgICBVdGlscy5zaWduUGVuV2lkdGhDb21ib0JveC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IGlkeCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBpZHhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVdGlscy5zaWduUGVuV2lkdGhDb21ib0JveDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjcmVhdGVBdHRyYnV0ZVBvcHVwXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY3JlYXRlQXR0cmJ1dGVQb3B1cFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIOyGjeyEsSDtjJ3sl4XsnZggRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBvd25lck5vZGUg7ZW064u5IO2UhOuhnOygne2KuOydmCDstZzsg4Hri6ggRWxlbWVudOulvCDqsJDsi7jqs6Ag7J6I64qUIEVsZW1lbnRcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IOyGjeyEsSDtjJ3sl4XsnZggZWxlbWVudFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXR0cmJ1dGVQb3B1cChvd25lck5vZGUsIG93bmVyRmllbGRCQm94KSB7XHJcbiAgICAgICAgbGV0IGF0dHJEaXYgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAuXCIgKyBDT05TVEFOVFMuRURJVE9SX0FUVFJfQ0xBU1MpO1xyXG4gICAgICAgIGlmIChhdHRyRGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGF0dHJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBhdHRyRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLkVESVRPUl9BVFRSX0NMQVNTKTtcclxuICAgICAgICAgICAgYXR0ckRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5TSE9XX0NMQVNTKTtcclxuICAgICAgICAgICAgbGV0IHZpZXdlciA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIENPTlNUQU5UUy5URU1QTEFURV9QREZfVklFV0VSKTtcclxuICAgICAgICAgICAgdmlld2VyLmFwcGVuZENoaWxkKGF0dHJEaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFV0aWxzLnJlbW92ZUFsbENoaWxkTm9kZShhdHRyRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhdHRyRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuU0hPV19DTEFTUykpIHtcclxuICAgICAgICAgICAgYXR0ckRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5TSE9XX0NMQVNTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0ckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGlmIChvd25lckZpZWxkQkJveCAhPT0gbnVsbCAmJiBvd25lckZpZWxkQkJveCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGF0dHJEaXYuc3R5bGUubGVmdCA9IG93bmVyRmllbGRCQm94LnggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGF0dHJEaXYuc3R5bGUudG9wID0gb3duZXJGaWVsZEJCb3gueSArIG93bmVyRmllbGRCQm94LmhlaWdodCArIDEwICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXR0ckRpdjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBzaG93QXN0ZXJpc2tEaXZcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNzaG93QXN0ZXJpc2tEaXZcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtlYTsiJgg7ZGc7IucIOuniO2BrOulvCDrs7TsnbTqsbDrgpgg7Iio6ri064ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlICDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIOy1nOyDgeuLqCBFbGVtZW5066W8IOqwkOyLuOqzoCDsnojripQgRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSWQgIO2VhOyImCDrp4jtgazqsIAg7IKs7Jqp65CY64qUIO2VhOuTnOydmCBpZFxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpc1Nob3cgIHRydWXrqbQg67O07J206rOgIGZhbHNl66m0IOyIqOq4tOuLpC5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmaWVsZFggIO2VhOyImCDrp4jtgazqsIAg7IKs7Jqp65CY64qUIO2VhOuTnOydmCB47KKM7ZGcXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZmllbGRZICDtlYTsiJgg66eI7YGs6rCAIOyCrOyaqeuQmOuKlCDtlYTrk5zsnZggeeyijO2RnFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZpZWxkSGVpZ2h0ICDtlYTsiJgg66eI7YGs6rCAIOyCrOyaqeuQmOuKlCDtlYTrk5zsnZgg64aS7J20XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaG93QXN0ZXJpc2tEaXYob3duZXJOb2RlLCBmaWVsZElkLCBpc1Nob3csIGZpZWxkWCwgZmllbGRZLCBmaWVsZEhlaWdodCkge1xyXG4gICAgICAgIGxldCBhc3Rlcmlza0RpdiA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIGZpZWxkSWQgKyBcIl9hc3Rlcmlza1wiKTtcclxuICAgICAgICBpZiAoYXN0ZXJpc2tEaXYgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwic2hvd0FzdGVyaXNrRGl2ICAgXCIgKyBpc1Nob3cpO1xyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkWCA9PT0gbnVsbCB8fCBmaWVsZFkgPT09IG51bGwgfHwgZmllbGRIZWlnaHQgPT09IG51bGwgfHxcclxuICAgICAgICAgICAgICAgIGZpZWxkWCA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkWSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYXN0ZXJpc2tIZWlnaHQgPSBDT05TVEFOVFMuQVNUUkVJU0tfRElWX0hFSUdIVDtcclxuICAgICAgICAgICAgYXN0ZXJpc2tEaXYuc3R5bGUubGVmdCA9IChmaWVsZFggLSA2IC0gYXN0ZXJpc2tIZWlnaHQpICsgXCJweFwiO1xyXG4gICAgICAgICAgICBsZXQgYXN0ZXJpc2tZID0gZmllbGRZICsgKGZpZWxkSGVpZ2h0IC8gMikgLSAoYXN0ZXJpc2tIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgYXN0ZXJpc2tEaXYuc3R5bGUudG9wID0gYXN0ZXJpc2tZICsgXCJweFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc3Rlcmlza0Rpdi5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgICAgICBhc3Rlcmlza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKENPTlNUQU5UUy5TSE9XX0NMQVNTKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5ISURFX0NMQVNTKSkge1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuSElERV9DTEFTUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFzdGVyaXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuU0hPV19DTEFTUykpIHtcclxuICAgICAgICAgICAgYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuU0hPV19DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5ISURFX0NMQVNTKSkge1xyXG4gICAgICAgICAgICBhc3Rlcmlza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKENPTlNUQU5UUy5ISURFX0NMQVNTKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlQXN0ZXJpc2tEaXZcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVBc3Rlcmlza0RpdlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOyImCDtkZzsi5wg66eI7YGs7J2YIEVsZW1lbnTrpbwg66eM65Og64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRJZCAg7ZWE7IiYIOuniO2BrOqwgCDsgqzsmqnrkJjripQg7ZWE65Oc7J2YIGlkXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSDtlYTsiJgg7ZGc7IucIOuniO2BrOydmCBlbGVtZW50XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBc3Rlcmlza0Rpdihvd25lck5vZGUsIGZpZWxkSWQpIHtcclxuICAgICAgICBsZXQgYXN0ZXJpc2tEaXYgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBmaWVsZElkICsgXCJfYXN0ZXJpc2tcIik7XHJcbiAgICAgICAgaWYgKGFzdGVyaXNrRGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuQVNURVJJU0tfSUNPTl9DTEFTUyk7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LnN0eWxlLndpZHRoID0gXCIxMXB4XCI7XHJcbiAgICAgICAgICAgIGFzdGVyaXNrRGl2LnN0eWxlLmhlaWdodCA9IFwiMTJweFwiO1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXJEaXYgPSBvd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBDT05TVEFOVFMuVEVNUExBVEVfTEFZRVJfQVNURVJJU0tfTkFNRSk7XHJcbiAgICAgICAgICAgIGxheWVyRGl2LmFwcGVuZENoaWxkKGFzdGVyaXNrRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFzdGVyaXNrRGl2O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gaXNTaG93QXN0ZXJpc2tEaXZcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpc1Nob3dBc3Rlcmlza0RpdlxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOyImCDtkZzsi5wg66eI7YGs6rCAIOuztOydtOuKlOyngCDsl6zrtoDrpbwg67CY7ZmY7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlICDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIOy1nOyDgeuLqCBFbGVtZW5066W8IOqwkOyLuOqzoCDsnojripQgRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkSWQgIO2VhOyImCDrp4jtgazqsIAg7IKs7Jqp65CY64qUIO2VhOuTnOydmCBpZFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTaG93QXN0ZXJpc2tEaXYob3duZXJOb2RlLCBmaWVsZElkKSB7XHJcbiAgICAgICAgbGV0IGFzdGVyaXNrRGl2ID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgZmllbGRJZCArIFwiX2FzdGVyaXNrXCIpO1xyXG4gICAgICAgIGlmIChhc3Rlcmlza0RpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXN0ZXJpc2tEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5TSE9XX0NMQVNTKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzdGVyaXNrRGl2LmNsYXNzTGlzdC5jb250YWlucyhDT05TVEFOVFMuSElERV9DTEFTUykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY3JlYXRlRmllbGREZWxldGVCdG5cclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjcmVhdGVGaWVsZERlbGV0ZUJ0blxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOuTnOydmCBEZWxldGXrsoTtirzsnZggRWxlbWVudOulvCDrp4zrk6Dri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBvd25lck5vZGUgIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0NhbGxCYWNrfSBidG5DbGlja0V2dEhhbmRsZXIgIOuyhO2KvOydhCDriIzroIDsnYQg65WMIOuPmeyeke2VoCBIYW5kbGVyXHJcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSDtlYTrk5zsnZggRGVsZXRl67KE7Yq87J2YIGVsZW1lbnRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUZpZWxkRGVsZXRlQnRuKG93bmVyTm9kZSwgYnRuQ2xpY2tFdnRIYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IGRlbGV0ZUJ0bkRpdiA9IG93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiIC5cIiArIENPTlNUQU5UUy5GSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTKTtcclxuICAgICAgICBpZiAoZGVsZXRlQnRuRGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QuYWRkKENPTlNUQU5UUy5GSUVMRF9ERUxFVEVfQlVUVE9OX0NMQVNTKTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuRGl2LmNsYXNzTGlzdC5hZGQoQ09OU1RBTlRTLlNIT1dfQ0xBU1MpO1xyXG4gICAgICAgICAgICBsZXQgdmlld2VyID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgQ09OU1RBTlRTLlRFTVBMQVRFX1BERl9WSUVXRVIpO1xyXG4gICAgICAgICAgICB2aWV3ZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5TSE9XX0NMQVNTKSkge1xyXG4gICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmFkZChDT05TVEFOVFMuU0hPV19DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWxldGVCdG5EaXYuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlNUQU5UUy5ISURFX0NMQVNTKSkge1xyXG4gICAgICAgICAgICBkZWxldGVCdG5EaXYuY2xhc3NMaXN0LnRvZ2dsZShDT05TVEFOVFMuSElERV9DTEFTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZUJ0bkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnRuQ2xpY2tFdnRIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlQnRuRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIHJlcG9zaXRpb25GaWVsZERlbGV0ZUJ0blxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3JlcG9zaXRpb25GaWVsZERlbGV0ZUJ0blxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIO2VhOuTnOydmCBEZWxldGXrsoTtirzsnZgg7JyE7LmY66W8IOyhsOygle2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG93bmVyTm9kZSAg7ZW064u5IO2UhOuhnOygne2KuOydmCDstZzsg4Hri6ggRWxlbWVudOulvCDqsJDsi7jqs6Ag7J6I64qUIEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4ICBGaWVsZOydmCBY7KKM7ZGcXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geSAgRmllbGTsnZggeeyijO2RnFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoICBGaWVsZOydmCB3aWR0aFxyXG4gICAgICogQHJldHVybiB7RWxlbWVudH0g7ZWE65Oc7J2YIERlbGV0ZeuyhO2KvOydmCBlbGVtZW50XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZXBvc2l0aW9uRmllbGREZWxldGVCdG4ob3duZXJOb2RlLCB4LCB5LCB3aWR0aCkge1xyXG5cclxuICAgICAgICBsZXQgZGVsZXRlQnRuRGl2ID0gb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgLlwiICsgQ09OU1RBTlRTLkZJRUxEX0RFTEVURV9CVVRUT05fQ0xBU1MpO1xyXG4gICAgICAgIGlmIChkZWxldGVCdG5EaXYgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVCdG5EaXYgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QuY29udGFpbnMoQ09OU1RBTlRTLkhJREVfQ0xBU1MpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkRpdi5jbGFzc0xpc3QudG9nZ2xlKENPTlNUQU5UUy5ISURFX0NMQVNTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlQnRuRGl2LnN0eWxlLmxlZnQgPSB4ICsgd2lkdGggKyAxMCArIFwicHhcIjtcclxuICAgICAgICBkZWxldGVCdG5EaXYuc3R5bGUudG9wID0geSArIDEwICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGFkZFNpZ25TdmdUb0NhbnZhc1xyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2FkZFNpZ25TdmdUb0NhbnZhc1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIGNhbnZhc+yXkCBTVkfrpbwg7LaU6rCA7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZCAg7LaU6rCA7ZWgIGNhbnZhc+ydmCBTaWduIEZpZWxkIE9iamVjdFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjYW52YXNEaXYgIGNhbnZhc+ydmCBFbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2lnbldpZHRoICDshJzrqoXtlYTrk5zsnZggV2lkdGhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzaWduSGVpZ2h0ICDshJzrqoXtlYTrk5zsnZggaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3ZnICBTVkcgU3RyaW5nXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEZhYnJpYyBjYW52YXMgT2JqZWN0OiBTVkfrjbDsnbTthLDqsIAg7LaU6rCA65CcIENhbnZhc1xyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkU2lnblN2Z1RvQ2FudmFzKGZpZWxkLCBjYW52YXNEaXYsIHNpZ25XaWR0aCwgc2lnbkhlaWdodCwgc3ZnKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhc09iaiA9IGNhbnZhc0RpdjtcclxuICAgICAgICBpZiAoY2FudmFzRGl2ID09PSBudWxsIHx8IGNhbnZhc0RpdiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbnZhc09iaiA9IGZpZWxkLm1faWQgKyBcIl9jYW52YXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YXRpY0NhbnZzMSA9IG5ldyBmYWJyaWMuU3RhdGljQ2FudmFzKGNhbnZhc09iaiwgeyBpc0RyYXdpbmdNb2RlOiBmYWxzZSB9KTtcclxuICAgICAgICBzdGF0aWNDYW52czEuc2V0SGVpZ2h0KHNpZ25IZWlnaHQpO1xyXG4gICAgICAgIHN0YXRpY0NhbnZzMS5zZXRXaWR0aChzaWduV2lkdGgpO1xyXG5cclxuICAgICAgICBmYWJyaWMubG9hZFNWR0Zyb21TdHJpbmcoc3ZnLCBmdW5jdGlvbiAob2JqZWN0cywgb3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gZmFicmljLnV0aWwuZ3JvdXBTVkdFbGVtZW50cyhvYmplY3RzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgbGV0IHhTY2FsZSA9IHN0YXRpY0NhbnZzMS53aWR0aCAvIG9iai53aWR0aDtcclxuICAgICAgICAgICAgbGV0IHlTY2FsZSA9IHN0YXRpY0NhbnZzMS5oZWlnaHQgLyBvYmouaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZTEgPSB4U2NhbGUgPiB5U2NhbGUgPyB5U2NhbGUgOiB4U2NhbGU7XHJcbiAgICAgICAgICAgIG9iai5zY2FsZShzY2FsZTEpO1xyXG5cclxuICAgICAgICAgICAgb2JqLnN0cm9rZVdpZHRoID0gb2JqLnN0cm9rZVdpZHRoIC8gc2NhbGUxO1xyXG4gICAgICAgICAgICBpZiAob2JqLl9vYmplY3RzICE9PSBudWxsICYmIG9iai5fb2JqZWN0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0cyA9IG9iai5fb2JqZWN0cztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG9iamVjdHMubGVuZ3RoOyArK2lkeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNbaWR4XS5zdHJva2VXaWR0aCA9IG9iamVjdHNbaWR4XS5zdHJva2VXaWR0aCAvIHNjYWxlMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0aWNDYW52czEuYWRkKG9iaikuY2VudGVyT2JqZWN0KG9iaikucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgICAgIG9iai5zZXRDb29yZHMoKTtcclxuICAgICAgICB9LCBcclxuICAgICAgICAgbnVsbCxcclxuICAgICAgICAge2Nyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyAvLyBDT1JTIOyEpOyglVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdGF0aWNDYW52czE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gYWRkT2JqZWN0c1RvQ2FudmFzXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjYWRkT2JqZWN0c1RvQ2FudmFzXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgY2FudmFz7JeQIE9iamVjdHPrpbwg7LaU6rCA7ZWc64ukLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3duZXJOb2RlICDtlbTri7kg7ZSE66Gc7KCd7Yq47J2YIOy1nOyDgeuLqCBFbGVtZW5066W8IOqwkOyLuOqzoCDsnojripQgRWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkICDstpTqsIDtlaAgY2FudmFz7J2YIFNpZ24gRmllbGQgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNhbnZhc0RpdiAgY2FudmFz7J2YIEVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzaWduV2lkdGggIOyEnOuqhe2VhOuTnOydmCBXaWR0aFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNpZ25IZWlnaHQgIOyEnOuqhe2VhOuTnOydmCBoZWlnaHRcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9iamVjdHMgIDogUGF0aOydmCDrpqzsiqTtirhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcmdXaWR0aCAg7LaU6rCA65CgIE9iamVjdHPsnZggV2lkdGhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcmdIZWlnaHQgIDog7LaU6rCA65CgIE9iamVjdHPsnZggaGVpZ2h0XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEZhYnJpYyBjYW52YXMgT2JqZWN0OiBPYmplY3Rz6rCAIOy2lOqwgOuQnCBDYW52YXNcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZE9iamVjdHNUb0NhbnZhcyhfb3duZXJOb2RlLCBmaWVsZCwgY2FudmFzRGl2LCBzaWduV2lkdGgsIHNpZ25IZWlnaHQsIG9iamVjdHMsIG9yZ1dpZHRoLCBvcmdIZWlnaHQpIHtcclxuICAgICAgICBsZXQgY2FudmFzT2JqID0gY2FudmFzRGl2O1xyXG4gICAgICAgIGlmIChjYW52YXNEaXYgPT09IG51bGwgfHwgY2FudmFzRGl2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNhbnZhc0lkID0gZmllbGQubV9pZCArIFwiX2NhbnZhc1wiO1xyXG4gICAgICAgICAgICBjYW52YXNPYmogPSBfb3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBjYW52YXNJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdGF0aWNDYW52czEgPSBuZXcgZmFicmljLlN0YXRpY0NhbnZhcyhjYW52YXNPYmosIHsgaXNEcmF3aW5nTW9kZTogZmFsc2UgfSk7XHJcbiAgICAgICAgc3RhdGljQ2FudnMxLnNldEhlaWdodChzaWduSGVpZ2h0KTtcclxuICAgICAgICBzdGF0aWNDYW52czEuc2V0V2lkdGgoc2lnbldpZHRoKTtcclxuICAgICAgICBsZXQgeFNjYWxlID0gc3RhdGljQ2FudnMxLndpZHRoIC8gb3JnV2lkdGg7XHJcbiAgICAgICAgbGV0IHlTY2FsZSA9IHN0YXRpY0NhbnZzMS5oZWlnaHQgLyBvcmdIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2NhbGUxID0geFNjYWxlID4geVNjYWxlID8geVNjYWxlIDogeFNjYWxlO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coc2NhbGUxKTtcclxuICAgICAgICBmYWJyaWMudXRpbC5lbmxpdmVuT2JqZWN0cyhvYmplY3RzLCBmdW5jdGlvbiAob2Jqcykge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ1JlbmRlck9uQWRkUmVtb3ZlID0gc3RhdGljQ2FudnMxLnJlbmRlck9uQWRkUmVtb3ZlO1xyXG4gICAgICAgICAgICBzdGF0aWNDYW52czEucmVuZGVyT25BZGRSZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGdvdG9DZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAob2Jqcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBnb3RvQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9ianMuZm9yRWFjaChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBvLmxlZnQgKiBzY2FsZTE7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wID0gby50b3AgKiBzY2FsZTE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ290b0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgbGVmdCA9ICgoc3RhdGljQ2FudnMxLndpZHRoIC0gby53aWR0aCAqIHNjYWxlMSkgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgIHRvcCA9ICgoc3RhdGljQ2FudnMxLmhlaWdodCAtIG8uaGVpZ2h0ICogc2NhbGUxKSAvIDIpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IHNjYWxlMSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IHNjYWxlMSxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogby5zdHJva2VXaWR0aCAvIHNjYWxlMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0aWNDYW52czEuYWRkKG8pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRpY0NhbnZzMS5yZW5kZXJPbkFkZFJlbW92ZSA9IG9yaWdSZW5kZXJPbkFkZFJlbW92ZTtcclxuICAgICAgICAgICAgc3RhdGljQ2FudnMxLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICBzdGF0aWNDYW52czEuY2FsY09mZnNldCgpO1xyXG4gICAgICAgICAgICBpZiAob2Jqcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqcyA9IHN0YXRpY0NhbnZzMS5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXAgPSBuZXcgZmFicmljLkdyb3VwKG9ianMsIHtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoKHN0YXRpY0NhbnZzMS53aWR0aCAtIGdyb3VwLndpZHRoICkgLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ICgoc3RhdGljQ2FudnMxLmhlaWdodCAtIGdyb3VwLmhlaWdodCApIC8gMilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBncm91cC5zZXRDb29yZHMoKTtcclxuICAgICAgICAgICAgICAgIHN0YXRpY0NhbnZzMS5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGljQ2FudnMxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGNsb25lT2JqZWN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvbmVPYmplY3RcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSAgT2JqZWN0IGRlZXAgY29weVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0b09iaiAg67O17IKs7ZWgIG9iamVjdFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAg67O17IKs65CcIG9iamVjdFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2xvbmVPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgdmFyIGNsb25lID0ge307XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09IFwib2JqZWN0XCIgJiYgb2JqW2tleV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVba2V5XSA9IFsuLi5vYmpba2V5XV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb25lW2tleV0gPSBVdGlscy5jbG9uZU9iamVjdChvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZVtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBjbG9uZU9iamVjdFRvT2JqZWN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2xvbmVPYmplY3RUb09iamVjdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIGZyb21PYmrsnZgg642w7J207YSw66W8IHRvT2Jq66GcIGRlZXAgY29weVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tT2JqIOuzteyCrO2VoCBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0b09iaiAg67O17IKs65CgIG9iamVjdFxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSDrs7XsgqzrkJwgb2JqZWN0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9uZU9iamVjdFRvT2JqZWN0KGZyb21PYmosIHRvT2JqKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGZyb21PYmopIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJwYWdlc1wiIHx8IGtleSA9PT0gXCJmaWVsZHNcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tT2JqW2tleV0gPT0gXCJvYmplY3RcIiAmJiBmcm9tT2JqW2tleV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdG9PYmpba2V5XSA9IFV0aWxzLmNsb25lT2JqZWN0KGZyb21PYmpba2V5XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b09ialtrZXldID0gZnJvbU9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdG9PYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY2xvbmVGYWJyaWNDYW52YXNcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNjbG9uZUZhYnJpY0NhbnZhc1xyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICBjYW52YXPsl5AgT2JqZWN0c+ulvCDstpTqsIDtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbnZhc09iaiAgT2JqZWN06rCAIOy2lOqwgOuQoCBDYW52YXNcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvYmplY3RzIOuzteyCrOuQoCBPYmplY3TsnZgg66as7Iqk7Yq4XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9uZUZhYnJpY0NhbnZhcyhjYW52YXNPYmosIG9iamVjdHMpIHtcclxuICAgICAgICBmYWJyaWMudXRpbC5lbmxpdmVuT2JqZWN0cyhvYmplY3RzLCBmdW5jdGlvbiAob2Jqcykge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ1JlbmRlck9uQWRkUmVtb3ZlID0gY2FudmFzT2JqLnJlbmRlck9uQWRkUmVtb3ZlO1xyXG4gICAgICAgICAgICBjYW52YXNPYmoucmVuZGVyT25BZGRSZW1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIG9ianMuZm9yRWFjaChmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzT2JqLmFkZChvKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhbnZhc09iai5yZW5kZXJPbkFkZFJlbW92ZSA9IG9yaWdSZW5kZXJPbkFkZFJlbW92ZTtcclxuICAgICAgICAgICAgY2FudmFzT2JqLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICBjYW52YXNPYmouY2FsY09mZnNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIGlzU3RyaW5nRW1wdHlcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpc1N0cmluZ0VtcHR5XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg66y47J6Q7Je07J20IOu5hOyWtOyeiOuKlOyngCDtmZXsnbjtlZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciDtmZXsnbjtlaAg66y47J6Q7Je0XHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSDruYTslrTsnojsnLzrqbQgdHJ1ZSDruYTslrTsnojsp4Ag7JWK7Jy866m0IGZhbHNlXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZ0VtcHR5KHN0cikge1xyXG4gICAgICAgIGlmIChzdHIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIG1lcmdlUmVjdFxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI21lcmdlUmVjdFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpICDrkZAgUmVjdOulvCDtlansuZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHIxIHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCByaWdodDogMH0g7ZWp7LOQ7JW865CY64qUIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcjIge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwfSDtlanss5DslbzrkJjripQgUmVjdCBPYmplY3RcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0ge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwLCB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTog7ZWp7LOQ7KeEIFJlY3RcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1lcmdlUmVjdChyMSwgcjIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBNYXRoLm1pbihyMS5sZWZ0LCByMi5sZWZ0KSxcclxuICAgICAgICAgICAgdG9wOiBNYXRoLm1pbihyMS50b3AsIHIyLnRvcCksXHJcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLm1heChyMS5yaWdodCwgcjIucmlnaHQpLFxyXG4gICAgICAgICAgICBib3R0b206IE1hdGgubWF4KHIxLmJvdHRvbSwgcjIuYm90dG9tKSxcclxuICAgICAgICAgICAgeDogTWF0aC5taW4ocjEubGVmdCwgcjIubGVmdCksXHJcbiAgICAgICAgICAgIHk6IE1hdGgubWluKHIxLnRvcCwgcjIudG9wKSxcclxuICAgICAgICAgICAgd2lkdGg6IE1hdGguYWJzKE1hdGgubWF4KHIxLnJpZ2h0LCByMi5yaWdodCkgLSBNYXRoLm1pbihyMS5sZWZ0LCByMi5sZWZ0KSksXHJcbiAgICAgICAgICAgIGhlaWdodDogTWF0aC5hYnMoTWF0aC5tYXgocjEuYm90dG9tLCByMi5ib3R0b20pIC0gTWF0aC5taW4ocjEudG9wLCByMi50b3ApKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gYm91bmRpbmdSZWN0VG9SZWN0XHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjYm91bmRpbmdSZWN0VG9SZWN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgQm91bmRpbmdSZWN066W8IOyXrOq4sOyEnCDsgqzsmqntlaAgUmVjdCBPYmplY3TroZwg67OA6rK9XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3Qge2xlZnQ6IDAsIHdpdGg6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9IEJvdW5kaW5nIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCByaWdodDogMH06IOyXrOq4sOyEnCDsgqzsmqntlaAgUmVjdCBPYmplY3RcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJvdW5kaW5nUmVjdFRvUmVjdChyZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxyXG4gICAgICAgICAgICByaWdodDogcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCxcclxuICAgICAgICAgICAgYm90dG9tOiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQGZ1bmN0aW9uIG1lcmdlT2JqZWN0c1JlY3RcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNtZXJnZU9iamVjdHNSZWN0XHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykgQ2FudmFz7J2YIFBhdGggT2JqZWN0c+ydmCBSZWN065Ok7J2EIO2VmOuCmOuhnCDtlansuZzri6QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbnZhcyBGYWJyaWMgY2FudmFzOiBQYXRoIE9iamVjdHPqsIAg7J6I64qUIGNhbnZhc1xyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgcmlnaHQ6IDB9OiDsl6zquLDshJwg7IKs7Jqp7ZWgIFJlY3QgT2JqZWN0XHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBtZXJnZU9iamVjdHNSZWN0KGNhbnZhcykge1xyXG4gICAgICAgIGxldCByZWN0ID0gbnVsbDtcclxuICAgICAgICBjYW52YXMuZm9yRWFjaE9iamVjdChmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIHZhciBib3VuZCA9IG9iai5nZXRCb3VuZGluZ1JlY3QoKTtcclxuICAgICAgICAgICAgaWYgKHJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QgPSBVdGlscy5tZXJnZVJlY3QoVXRpbHMuYm91bmRpbmdSZWN0VG9SZWN0KGJvdW5kKSwgVXRpbHMuYm91bmRpbmdSZWN0VG9SZWN0KGJvdW5kKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWN0ID0gVXRpbHMubWVyZ2VSZWN0KHJlY3QsIFV0aWxzLmJvdW5kaW5nUmVjdFRvUmVjdChib3VuZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiBtZXJnZUZpZWxkc0JCb3hcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNtZXJnZUZpZWxkc0JCb3hcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSBGaWVsZCBMaXN07J2YIEJCb3jrk6TsnYQg7ZWY64KY66GcIO2Vqey5nOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWVsZHMgRmllbGTsnZgg67Cw7Je0XHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCByaWdodDogMH06IOyXrOq4sOyEnCDsgqzsmqntlaAgUmVjdCBPYmplY3RcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1lcmdlRmllbGRzQkJveChmaWVsZHMpIHtcclxuICAgICAgICBsZXQgcmVjdCA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZmllbGRzLmxlbmd0aDsgaWR4ICs9IDEpIHtcclxuICAgICAgICAgICAgbGV0IGJvdW5kID0gZmllbGRzW2lkeF0uZ2V0QkJveCgpO1xyXG4gICAgICAgICAgICBpZiAocmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmVjdCA9IFV0aWxzLm1lcmdlUmVjdChVdGlscy5ib3VuZGluZ1JlY3RUb1JlY3QoYm91bmQpLCBVdGlscy5ib3VuZGluZ1JlY3RUb1JlY3QoYm91bmQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlY3QgPSBVdGlscy5tZXJnZVJlY3QocmVjdCwgVXRpbHMuYm91bmRpbmdSZWN0VG9SZWN0KGJvdW5kKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gaW1hZ2VGaWxlVG9CYXNlNjRcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyNpbWFnZUZpbGVUb0Jhc2U2NFxyXG4gICAgICogQGRlc2NyaXB0aW9uIChTdGF0aWMpIEltYWdl7YyM7J287J2EIOydveyWtCBCYXNlNjQgU3RyaW5n7Jy866GcIOuwmO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZmlsZSBGaWxlOiDsnbTrr7jsp4Ag7YyM7J287J2YIEZpbGUgT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge0NhbGxiYWNrfSBjYWxsQmFja0Z1bmMgIEJhc2U2NCDrrLjsnpDsl7TsnYQg67Cb7J2EIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbWFnZUZpbGVUb0Jhc2U2NChmaWxlLCBjYWxsQmFja0Z1bmMpIHtcclxuICAgICAgICBpZiAoZmlsZSA9PT0gdW5kZWZpbmVkIHx8IGZpbGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrRnVuYyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gY2hhbmdlTG9jYWxlXHJcbiAgICAgKiBAbmFtZSBtb2R1bGU6VGVtcGxhdGUvVXRpbHMuVXRpbHMjY2hhbmdlTG9jYWxlXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gKFN0YXRpYykg7ZiE7J6sIOyWuOyWtOulvCDtjIzrnbzrr7jthLDsl5Ag66ee6rKMIOuzgO2ZmO2VnOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbG9jYWxlIOuwlOq/gCDslrjslrRcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNoYW5nZUxvY2FsZShsb2NhbGUpIHtcclxuICAgICAgICBVdGlscy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICAgICAgVXRpbHMudHJhbnNsYXRvci50cmFuc2xhdGVQYWdlVG8obG9jYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBmdW5jdGlvbiB0cmFuc2xhdGVGb3JLZXlcclxuICAgICAqIEBuYW1lIG1vZHVsZTpUZW1wbGF0ZS9VdGlscy5VdGlscyN0cmFuc2xhdGVGb3JLZXlcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDtgqTsl5Ag7ZW064u57ZWY64qUIOusuOyekOyXtOydhCDtmITsnqwg7Ja47Ja066GcIOuwlOq+vOuLpC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IOuwlOq/gCDrrLjsnpDsl7Tsl5Ag7ZW064u57ZWY64qUIO2CpFxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJhbnNsYXRlRm9yS2V5KGtleSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy50cmFuc2xhdG9yLnRyYW5zbGF0ZUZvcktleShrZXksIFV0aWxzLmxvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gdHJhbnNsYXRvckZpbGVMb2NhdGlvblxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI3RyYW5zbGF0b3JGaWxlTG9jYXRpb25cclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDri6Tqta3slrQg7Ja47Ja0IO2MjOydvOydmCDsnITsuZjrpbwg7KeA7KCV7ZWc64ukLlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxvY2FsaG9zdDo1NTAwL2pzL3BkZl9mb3JtL2kxOG7snZgg6rK97JqwICBcIi9qcy9wZGZfZm9ybS9pMThuXCJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVzTG9jYXRpb24g7Ja47Ja07YyM7J287J2YIOychOy5mCjsoIjrjIAg6rK966GcKVxyXG4gICAgICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJhbnNsYXRvckZpbGVMb2NhdGlvbihmaWxlc0xvY2F0aW9uKSB7XHJcbiAgICAgICAgVXRpbHMudHJhbnNsYXRvci5jb25maWcuZmlsZXNMb2NhdGlvbiA9IGZpbGVzTG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAZnVuY3Rpb24gYWRkVHJhbnNsYXRvclxyXG4gICAgICogQG5hbWUgbW9kdWxlOlRlbXBsYXRlL1V0aWxzLlV0aWxzI2FkZFRyYW5zbGF0b3JcclxuICAgICAqIEBkZXNjcmlwdGlvbiAoU3RhdGljKSDri6Tqta3slrQg7Ja47Ja066W8IOy2lOqwgO2VnOuLpC5cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBhZGRUcmFuc2xhdG9yKFwianBcIiwganNvbkRhdGEpXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhbGUg7Ja47Ja0IOydtOumhFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxhbmdEYXRhIGkxOG4va28uanNvbuqzvCDqsJnsnYAg7JaR7Iud7Jy866GcIOuQnCBKU09O7J2EIO2MjOyLse2VnCDrjbDsnbTthLBcclxuICAgICAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFRyYW5zbGF0b3IobG9jYWxlLCBsYW5nRGF0YSkge1xyXG4gICAgICAgIFV0aWxzLnRyYW5zbGF0b3IuYWRkKGxvY2FsZSwgbGFuZ0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhcHBlbmRGb250RmFtaWx5KGZvbnRGYW1pbHlBcnIpIHtcclxuICAgICAgICBVdGlscy5mb250RmFtaWx5Q29tYm9Cb3ggPSBVdGlscy5mb250RmFtaWx5Q29tYm9Cb3guY29uY2F0KGZvbnRGYW1pbHlBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZV91dWlkdjQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgK1xyXG4gICAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XHJcbiAgICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xudmFyIGcgPVxuICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpIHx8XG4gIHt9XG5cbnZhciBzdXBwb3J0ID0ge1xuICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIGcsXG4gIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBnICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICBibG9iOlxuICAgICdGaWxlUmVhZGVyJyBpbiBnICYmXG4gICAgJ0Jsb2InIGluIGcgJiZcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIGcsXG4gIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIGdcbn1cblxuZnVuY3Rpb24gaXNEYXRhVmlldyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG59XG5cbmlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICBdXG5cbiAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgfHxcbiAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gIH1cbiAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH4hXS9pLnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZTogXCInICsgbmFtZSArICdcIicpXG4gIH1cbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICB0aGlzLm1hcCA9IHt9XG5cbiAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICBpZiAoaGVhZGVyLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0hlYWRlcnMgY29uc3RydWN0b3I6IGV4cGVjdGVkIG5hbWUvdmFsdWUgcGFpciB0byBiZSBsZW5ndGggMiwgZm91bmQnICsgaGVhZGVyLmxlbmd0aClcbiAgICAgIH1cbiAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbkhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2gobmFtZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaXRlbXMucHVzaCh2YWx1ZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5pZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xufVxuXG5mdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gIGlmIChib2R5Ll9ub0JvZHkpIHJldHVyblxuICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgfVxuICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHZhciBtYXRjaCA9IC9jaGFyc2V0PShbQS1aYS16MC05Xy1dKykvLmV4ZWMoYmxvYi50eXBlKVxuICB2YXIgZW5jb2RpbmcgPSBtYXRjaCA/IG1hdGNoWzFdIDogJ3V0Zi04J1xuICByZWFkZXIucmVhZEFzVGV4dChibG9iLCBlbmNvZGluZylcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgaWYgKGJ1Zi5zbGljZSkge1xuICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gIH1cbn1cblxuZnVuY3Rpb24gQm9keSgpIHtcbiAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgLypcbiAgICAgIGZldGNoLW1vY2sgd3JhcHMgdGhlIFJlc3BvbnNlIG9iamVjdCBpbiBhbiBFUzYgUHJveHkgdG9cbiAgICAgIHByb3ZpZGUgdXNlZnVsIHRlc3QgaGFybmVzcyBmZWF0dXJlcyBzdWNoIGFzIGZsdXNoLiBIb3dldmVyLCBvblxuICAgICAgRVM1IGJyb3dzZXJzIHdpdGhvdXQgZmV0Y2ggb3IgUHJveHkgc3VwcG9ydCBwb2xseWZpbGxzIG11c3QgYmUgdXNlZDtcbiAgICAgIHRoZSBwcm94eS1wb2xseWZpbGwgaXMgdW5hYmxlIHRvIHByb3h5IGFuIGF0dHJpYnV0ZSB1bmxlc3MgaXQgZXhpc3RzXG4gICAgICBvbiB0aGUgb2JqZWN0IGJlZm9yZSB0aGUgUHJveHkgaXMgY3JlYXRlZC4gVGhpcyBjaGFuZ2UgZW5zdXJlc1xuICAgICAgUmVzcG9uc2UuYm9keVVzZWQgZXhpc3RzIG9uIHRoZSBpbnN0YW5jZSwgd2hpbGUgbWFpbnRhaW5pbmcgdGhlXG4gICAgICBzZW1hbnRpYyBvZiBzZXR0aW5nIFJlcXVlc3QuYm9keVVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgX2luaXRCb2R5IGlzIGNhbGxlZC5cbiAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWFzc2lnblxuICAgIHRoaXMuYm9keVVzZWQgPSB0aGlzLmJvZHlVc2VkXG4gICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICB0aGlzLl9ub0JvZHkgPSB0cnVlO1xuICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHZhciBpc0NvbnN1bWVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChpc0NvbnN1bWVkKSB7XG4gICAgICAgIHJldHVybiBpc0NvbnN1bWVkXG4gICAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0LFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQgKyB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBhcyBBcnJheUJ1ZmZlcicpXG4gICAgfVxuICB9XG5cbiAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiByZWplY3RlZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxudmFyIG1ldGhvZHMgPSBbJ0NPTk5FQ1QnLCAnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUEFUQ0gnLCAnUE9TVCcsICdQVVQnLCAnVFJBQ0UnXVxuXG5mdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgfVxuICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsXG4gICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gIH1cblxuICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbidcbiAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB9XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbCB8fCAoZnVuY3Rpb24gKCkge1xuICAgIGlmICgnQWJvcnRDb250cm9sbGVyJyBpbiBnKSB7XG4gICAgICB2YXIgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgIHJldHVybiBjdHJsLnNpZ25hbDtcbiAgICB9XG4gIH0oKSk7XG4gIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgfVxuICB0aGlzLl9pbml0Qm9keShib2R5KVxuXG4gIGlmICh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykge1xuICAgIGlmIChvcHRpb25zLmNhY2hlID09PSAnbm8tc3RvcmUnIHx8IG9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAnXycgcGFyYW1ldGVyIGluIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgIHZhciByZVBhcmFtU2VhcmNoID0gLyhbPyZdKV89W14mXSovXG4gICAgICBpZiAocmVQYXJhbVNlYXJjaC50ZXN0KHRoaXMudXJsKSkge1xuICAgICAgICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cyB0aGVuIHNldCB0aGUgdmFsdWUgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShyZVBhcmFtU2VhcmNoLCAnJDFfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBhZGQgYSBuZXcgJ18nIHBhcmFtZXRlciB0byB0aGUgZW5kIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB2YXIgcmVRdWVyeVN0cmluZyA9IC9cXD8vXG4gICAgICAgIHRoaXMudXJsICs9IChyZVF1ZXJ5U3RyaW5nLnRlc3QodGhpcy51cmwpID8gJyYnIDogJz8nKSArICdfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywge2JvZHk6IHRoaXMuX2JvZHlJbml0fSlcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICBib2R5XG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnJicpXG4gICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBmb3JtXG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpXG4gIC8vIEF2b2lkaW5nIHNwbGl0IHZpYSByZWdleCB0byB3b3JrIGFyb3VuZCBhIGNvbW1vbiBJRTExIGJ1ZyB3aXRoIHRoZSBjb3JlLWpzIDMuNi4wIHJlZ2V4IHBvbHlmaWxsXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gvaXNzdWVzLzc0OFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNzUxXG4gIHByZVByb2Nlc3NlZEhlYWRlcnNcbiAgICAuc3BsaXQoJ1xccicpXG4gICAgLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHJldHVybiBoZWFkZXIuaW5kZXhPZignXFxuJykgPT09IDAgPyBoZWFkZXIuc3Vic3RyKDEsIGhlYWRlci5sZW5ndGgpIDogaGVhZGVyXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3BvbnNlICcgKyBlcnJvci5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGhlYWRlcnNcbn1cblxuQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICBpZiAodGhpcy5zdGF0dXMgPCAyMDAgfHwgdGhpcy5zdGF0dXMgPiA1OTkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc3BvbnNlJzogVGhlIHN0YXR1cyBwcm92aWRlZCAoMCkgaXMgb3V0c2lkZSB0aGUgcmFuZ2UgWzIwMCwgNTk5XS5cIilcbiAgfVxuICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiAnJyArIG9wdGlvbnMuc3RhdHVzVGV4dFxuICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG59XG5cbkJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cblJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICB1cmw6IHRoaXMudXJsXG4gIH0pXG59XG5cblJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAyMDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgcmVzcG9uc2Uuc3RhdHVzID0gMFxuICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxudmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cblJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxufVxuXG5leHBvcnQgdmFyIERPTUV4Y2VwdGlvbiA9IGcuRE9NRXhjZXB0aW9uXG50cnkge1xuICBuZXcgRE9NRXhjZXB0aW9uKClcbn0gY2F0Y2ggKGVycikge1xuICBET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKVxuICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFja1xuICB9XG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERPTUV4Y2VwdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICB9XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICB9XG4gICAgICAvLyBUaGlzIGNoZWNrIGlmIHNwZWNpZmljYWxseSBmb3Igd2hlbiBhIHVzZXIgZmV0Y2hlcyBhIGZpbGUgbG9jYWxseSBmcm9tIHRoZSBmaWxlIHN5c3RlbVxuICAgICAgLy8gT25seSBpZiB0aGUgc3RhdHVzIGlzIG91dCBvZiBhIG5vcm1hbCByYW5nZVxuICAgICAgaWYgKHJlcXVlc3QudXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6Ly8nKSAmJiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID4gNTk5KSkge1xuICAgICAgICBvcHRpb25zLnN0YXR1cyA9IDIwMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgdGltZWQgb3V0JykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFVybCh1cmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB1cmwgPT09ICcnICYmIGcubG9jYXRpb24uaHJlZiA/IGcubG9jYXRpb24uaHJlZiA6IHVybFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIGZpeFVybChyZXF1ZXN0LnVybCksIHRydWUpXG5cbiAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyKSB7XG4gICAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN1cHBvcnQuYXJyYXlCdWZmZXJcbiAgICAgICkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbml0ICYmIHR5cGVvZiBpbml0LmhlYWRlcnMgPT09ICdvYmplY3QnICYmICEoaW5pdC5oZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycyB8fCAoZy5IZWFkZXJzICYmIGluaXQuaGVhZGVycyBpbnN0YW5jZW9mIGcuSGVhZGVycykpKSB7XG4gICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGluaXQuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIG5hbWVzLnB1c2gobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgbm9ybWFsaXplVmFsdWUoaW5pdC5oZWFkZXJzW25hbWVdKSlcbiAgICAgIH0pXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBET05FIChzdWNjZXNzIG9yIGZhaWx1cmUpXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICB9KVxufVxuXG5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcblxuaWYgKCFnLmZldGNoKSB7XG4gIGcuZmV0Y2ggPSBmZXRjaFxuICBnLkhlYWRlcnMgPSBIZWFkZXJzXG4gIGcuUmVxdWVzdCA9IFJlcXVlc3RcbiAgZy5SZXNwb25zZSA9IFJlc3BvbnNlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIEBtb2R1bGUgUmVhZGVyL1JlYWRlck1vZFxyXG4gKi9cclxuXHJcbmNvbnNvbGUubG9nKCdSZWFkZXIgVkVSU0lPTjonLCBWRVJTSU9OKTtcclxuXHJcbmltcG9ydCB7Q09OU1RBTlRTfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5cclxuaW1wb3J0IHsgUERGQ3Vyc29yVG9vbHMgfSBmcm9tICcuLy4uL3BkZi5jdXJzb3IudG9vbCc7XHJcbmltcG9ydCB7UmVhZGVyTW9kfSBmcm9tICcuL3JlYWRlck1vZC5qcyc7XHJcblxyXG52YXIgcGRmQ3Vyc29yVG9vbHMsIHBkZlZpZXdlciwgcmVhZGVyTW9kLCBfX3JlYWRlckV2ZW50QnVzLCBfX3JlYWRlck93bmVyTm9kZTtcclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDstIjquLAg7IWL7YyF7J2EIO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBvd25lck5vZGUgIO2VtOuLuSDtlITroZzsoJ3tirjsnZgg7LWc7IOB64uoIEVsZW1lbnTrpbwg6rCQ7Iu46rOgIOyeiOuKlCBFbGVtZW50XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGxhbmdzICDsgqzsmqntlaAg64uk6rWt7Ja0IOumrOyKpO2KuCDquLDrs7jqsJLsnLzroZwgW1wia29cIiwgXCJlblwiXeqwgCDrk6TslrTsnojri6QuXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogaW5pdERvY3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERvY3VtZW50KG93bmVyTm9kZSwgbGFuZ3MgPSBbXCJrb1wiLCBcImVuXCJdKSB7XHJcbiAgICBfX3JlYWRlck93bmVyTm9kZSA9IG93bmVyTm9kZTtcclxuXHJcbiAgICBVdGlscy50cmFuc2xhdG9yLmZldGNoKGxhbmdzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAtPiBUcmFuc2xhdGlvbnMgYXJlIHJlYWR5Li4uXHJcbiAgICAgICAgVXRpbHMuY2hhbmdlTG9jYWxlKGxhbmdzWzBdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwZGZDb250YWluZXIgPSBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIENPTlNUQU5UUy5SRUFERVJfUERGX1ZJRVdFUl9DT05UQUlORVIpO1xyXG4gICAgX19yZWFkZXJFdmVudEJ1cyA9IG5ldyBwZGZqc1ZpZXdlci5FdmVudEJ1cygpO1xyXG4gICAgcGRmQ3Vyc29yVG9vbHMgPSBuZXcgUERGQ3Vyc29yVG9vbHMoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogcGRmQ29udGFpbmVyLFxyXG4gICAgICAgIGV2ZW50QnVzOiBfX3JlYWRlckV2ZW50QnVzLFxyXG4gICAgICAgIGN1cnNvclRvb2xPbkxvYWQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIHBkZlZpZXdlciA9IG5ldyBwZGZqc1ZpZXdlci5QREZWaWV3ZXIoe1xyXG4gICAgICAgIGNvbnRhaW5lcjogcGRmQ29udGFpbmVyLFxyXG4gICAgICAgIGV2ZW50QnVzOiBfX3JlYWRlckV2ZW50QnVzLFxyXG4gICAgICAgIHRleHRMYXllck1vZGU6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZWFkZXJNb2QgPSBuZXcgUmVhZGVyTW9kKHBkZlZpZXdlciwgX19yZWFkZXJPd25lck5vZGUpO1xyXG4gICAgcmVhZGVyTW9kLnJlYWRlckluaXQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBQREbrrLjshJzrpbwg66Gc65Oc7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGRmRmlsZVVybCBQREYgRklMRSBVUkxcclxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlRGF0YSDquLDsobQgVGVtcGxhdGXsl5DshJwg7KCA7J6l7ZWcIEpzb24gT2JqZWN0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogbG9hZERvY3VtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZERvY3VtZW50KHBkZkZpbGVVcmwsIHRlbXBsYXRlRGF0YSwgaW1nSnNvbkZpbGVVcmwpIHtcclxuXHJcbiAgICByZWFkZXJNb2QuaW1nSnNvbkZpbGVVcmwgPSBpbWdKc29uRmlsZVVybDtcclxuXHJcbiAgX19yZWFkZXJFdmVudEJ1cy5vbihcInBhZ2VyZW5kZXJlZFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VSZW5kZXJlZDogXCIgKyBldnQpO1xyXG4gICAgcmVhZGVyTW9kLnBhZ2VSZW5kZXIoZXZ0KTtcclxuICB9KTtcclxuXHJcbiAgX19yZWFkZXJFdmVudEJ1cy5vbihcInBhZ2VjaGFuZ2luZ1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VjaGFuZ2luZ1wiKTtcclxuICAgIGRvY3VtZW50UGFnZVNldHRpbmdzKGV2dC5wYWdlTnVtYmVyKTtcclxuICB9KTtcclxuXHJcbiAgX19yZWFkZXJFdmVudEJ1cy5vbihcInNjYWxlY2hhbmdpbmdcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzY2FsZWNoYW5naW5nXCIpO1xyXG4gICAgY2hhbmdlTGF5ZXJTaXplKGV2dCk7XHJcbiAgfSk7XHJcblxyXG4gIF9fcmVhZGVyRXZlbnRCdXMub24oXCJwYWdlc2luaXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYWdlc2luaXRcIik7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gMTtcclxuICAgIC8vIFdlIGNhbiB1c2UgcGRmVmlld2VyIG5vdywgZS5nLiBsZXQncyBjaGFuZ2UgZGVmYXVsdCBzY2FsZS5cclxuXHJcbiAgICBsZXQgdG90YWxQYWdlID0gX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIk51bS1QYWdlc1wiKTtcclxuICAgIHRvdGFsUGFnZS50ZXh0Q29udGVudCA9IFwiIC8gXCIgKyBwZGZWaWV3ZXIucGFnZXNDb3VudDtcclxuICAgIGRvY3VtZW50UGFnZUJ0bkVuYWJsZShwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpO1xyXG4gICAgcmVhZGVyTW9kLmxvYWRKc29uRGF0YSh0ZW1wbGF0ZURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgbG9hZGluZ1Rhc2sgPSBwZGZqc0xpYi5nZXREb2N1bWVudCh7XHJcbiAgICB1cmw6IHBkZkZpbGVVcmwsXHJcbiAgICBjTWFwVXJsOiBcIi9qcy9wZGZfZm9ybS9wZGZqcy9jbWFwcy9cIixcclxuICAgIGNNYXBQYWNrZWQ6IHRydWUsXHJcbiAgICBwZGZCdWc6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbihmdW5jdGlvbiAocGRmRG9jdW1lbnQpIHtcclxuICAgIHBkZkRvY3VtZW50LmdldERhdGEoKS50aGVuKChkYXRhKSA9PiB7fSk7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gMTtcclxuICAgIHBkZlZpZXdlci5zZXREb2N1bWVudChwZGZEb2N1bWVudCk7XHJcbiAgICBwZGZDdXJzb3JUb29scy5zd2l0Y2hUb29sKDEpO1xyXG4gICAgY29uc29sZS5sb2cocGRmVmlld2VyLnBhZ2VWaWV3c1JlYWR5KTtcclxuICAgIC8vIGRvY3VtZW50UmVhZHljaGVjayhwZGZWaWV3ZXIucGFnZVZpZXdzUmVhZHkpO1xyXG4gIH0pO1xyXG5cclxuICBfX3JlYWRlck93bmVyTm9kZVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJab29tLU91dC1CdXR0b25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRab29tT3V0KTtcclxuICBfX3JlYWRlck93bmVyTm9kZVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJab29tLUluLUJ1dHRvblwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudFpvb21Jbik7XHJcblxyXG4gIF9fcmVhZGVyT3duZXJOb2RlXHJcbiAgICAucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tRmlyc3QtQnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50R290b0ZpcnN0KTtcclxuICBfX3JlYWRlck93bmVyTm9kZVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLVByZXYtQnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRvY3VtZW50R290b1ByZXYpO1xyXG4gIF9fcmVhZGVyT3duZXJOb2RlXHJcbiAgICAucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tTmV4dC1CdXR0b25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRHb3RvTmV4dCk7XHJcbiAgX19yZWFkZXJPd25lck5vZGVcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1MYXN0LUJ1dHRvblwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudEdvdG9MYXN0KTtcclxuICBfX3JlYWRlck93bmVyTm9kZVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJzY2FsZVNlbGVjdENvbnRhaW5lclwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2NhbGVTZWxlY3Rvcik7XHJcblxyXG4gIF9fcmVhZGVyT3duZXJOb2RlXHJcbiAgICAucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvblwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VGaWVsZElucHV0TW9kZSk7XHJcbiAgX19yZWFkZXJPd25lck5vZGVcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlTWVtb0lucHV0TW9kZSk7XHJcbiAgX19yZWFkZXJPd25lck5vZGVcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiUmVhZGVyLU1lbW8tQWRkLU1vZGUtQnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU1lbW9BZGRNb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBUZW1wbGF0ZSBGaWVsZOygleuztOulvCDrsJjtmZjtlZzri6QuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdH0gVGVtcGxhdGUgRmllbGQg7KCV67O0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZ2V0SnNvbkRhdGFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRKc29uRGF0YSgpIHtcclxuICAgIHJldHVybiByZWFkZXJNb2QuZXhwb3J0RmllbGREYXRhKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aA66W8IOuwmO2ZmO2VnOuLpC5cclxuICpcclxuICogQHJldHVybiB7Qm9vbGVhbn0g7ZWE7IiYIO2VhOuTnOqwgCDruYTslrTsnojripTsp4Ag7Jes67aAXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogaXNSZXF1aXJlZEZpZWxkVmFsdWVFbXB0eVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gcmVhZGVyTW9kLmlzUmVxdWlyZWRGaWVsZFZhbHVlRW1wdHkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDsgqzsmqntlaAgQWxlcnQgRnVuY3Rpb27snYQg7IWL7YyF7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhbGVydEZ1bmMg66CI7Y2865+w7IqkXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogc2V0Q3VzdG9tQWxlcnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXN0b21BbGVydChhbGVydEZ1bmMpIHtcclxuICAgIHJlYWRlck1vZC5jdXN0b21BbGVydEZ1bmMgPSBhbGVydEZ1bmM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g7ZiE7J6sIOyWuOyWtOulvCDtjIzrnbzrr7jthLDsl5Ag66ee6rKMIOuzgO2ZmO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2FsZSDrsJTqv4Ag7Ja47Ja0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogY2hhbmdlVGVtcGxhdGVMb2NhbGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZW1wbGF0ZUxvY2FsZShsb2NhbGUpIHtcclxuICAgIFV0aWxzLmNoYW5nZUxvY2FsZShsb2NhbGUpO1xyXG4gICAgcmVhZGVyTW9kLnBhZ2VSZWZyZXNoKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIOuLpOq1reyWtCDslrjslrTrpbwg7LaU6rCA7ZWc64ukLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbG9jYWxlIOyWuOyWtCDsnbTrpoRcclxuICogQHBhcmFtIHtPYmplY3R9IGxhbmdEYXRhIGkxOG4va28uanNvbuqzvCDqsJnsnYAg7JaR7Iud7Jy866GcIOuQnCBKU09O7J2EIO2MjOyLse2VnCDrjbDsnbTthLBcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBhZGRUcmFuc2xhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkVHJhbnNsYXRvcihsb2NhbGUsIGxhbmdEYXRhKSB7XHJcbiAgICBVdGlscy5hZGRUcmFuc2xhdG9yKGxvY2FsZSwgbGFuZ0RhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uICDri6Tqta3slrQg7Ja47Ja0IO2MjOydvOydmCDsnITsuZjrpbwg7KeA7KCV7ZWc64ukLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBsb2NhbGhvc3Q6NTUwMC9qcy9wZGZfZm9ybS9pMThu7J2YIOqyveyasCAgXCIvanMvcGRmX2Zvcm0vaTE4blwiXHJcbiAqIGluaXREb2N1bWVudCDsnbTsoITsl5Ag7Zi47Lac7J20IOuQmOyWtOyVvO2VnOuLpC5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVzTG9jYXRpb24g7Ja47Ja07YyM7J287J2YIOychOy5mCjsoIjrjIAg6rK966GcKVxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGNoYW5nZVRyYW5zbGF0b3JGaWxlTG9jYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUcmFuc2xhdG9yRmlsZUxvY2F0aW9uKGxjYXRpb24pIHtcclxuICAgIFV0aWxzLnRyYW5zbGF0b3JGaWxlTG9jYXRpb24obGNhdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQGRlc2NyaXB0aW9uIFBhZ2XsnZgg64aS7J2066W8IOqzhOyCsO2VnOuLpC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBwYWdlRWxlbWVudCDqs4TsgrDtlaAgUGFnZSBFbGVtZW50XHJcbiAqIEByZXR1cm4gTnVtYmVyOiBQYWdlIEhlaWdodFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGNhbGNQYWdlSGVpZ2h0XHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjUGFnZUhlaWdodChwYWdlRWxlbWVudCkge1xyXG4gICAgdmFyIHN0eWxlID0gcGFnZUVsZW1lbnQuZGl2LmN1cnJlbnRTdHlsZSB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYWdlRWxlbWVudC5kaXYpO1xyXG4gICAgY29uc3QgbWFyZ2luSGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xyXG4gICAgY29uc3QgcGFkZGluZ0hlaWdodCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgY29uc3QgYm9yZGVySGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcclxuICAgIHJldHVybiBwYWdlRWxlbWVudC5oZWlnaHQgKyBtYXJnaW5IZWlnaHQgKyBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0O1xyXG59XHJcblxyXG4vKipcclxuICogIEBkZXNjcmlwdGlvbiBQREYg7Y6Y7J207KeA7J2YIExheWVy7IKs7J207KaI6rCAIOuzgO2VoCDrlYzsnZgg7LKY66as66W87ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZXZ0IEV2ZW50IE9iamVjdFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGNoYW5nZUxheWVyU2l6ZVxyXG4gKi9cclxuZnVuY3Rpb24gY2hhbmdlTGF5ZXJTaXplKGV2dCkge1xyXG4gICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICBwZGZWaWV3ZXIuX3BhZ2VzLmZvckVhY2goIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaGVpZ2h0ICs9IGNhbGNQYWdlSGVpZ2h0KGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgQGRlc2NyaXB0aW9uICDrrLjshJzsnZgg67Cw7Jyo7J2EIOy2leyGjO2VnOuLpC5cclxuICpcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBkb2N1bWVudFpvb21PdXRcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50Wm9vbU91dCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gY3VycmVudFZhbHVlIC0gMC4xO1xyXG4gICAgc2V0U2NhbGVWYWx1ZVRleHQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIOusuOyEnOydmCDrsLDsnKjsnYQg7ZmV64yA7ZWc64ukLlxyXG4gKlxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50Wm9vbUluXHJcbiAqL1xyXG5mdW5jdGlvbiBkb2N1bWVudFpvb21JbigpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gY3VycmVudFZhbHVlICsgMC4xO1xyXG4gICAgc2V0U2NhbGVWYWx1ZVRleHQocGRmVmlld2VyLmN1cnJlbnRTY2FsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIOusuOyEnOydmCDrsLDsnKjsnYQg7ISk7KCV7ZWc64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgIOusuOyEnOydmCDrsLDsnKhcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBzZXRTY2FsZVZhbHVlVGV4dFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0U2NhbGVWYWx1ZVRleHQodmFsdWUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IE1hdGguZmxvb3IocGFyc2VGbG9hdCh2YWx1ZSkgKiAxMDApO1xyXG4gICAgdmFyIGVsZW1lbnQgPSBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNzY2FsZVNlbGVjdENvbnRhaW5lciA+IGFcIik7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlICsgXCIlXCI7ICAgIFxyXG4gICAgXHJcbiAgICBsZXQgc2NhbGVDb250YWluZXIgPSBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiIC5TY2FsZS1TZWxldG9yLUNvbnRhaW5lclwiKTtcclxuICAgIGlmICghc2NhbGVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiVGVtcGxhdGUtSGlkZVwiKSkge1xyXG4gICAgICAgIHNjYWxlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uICDssqsg7Y6Y7J207KeA66GcIOydtOuPme2VnOuLpC5cclxuICpcclxuICogQERhdGUgOiAyMDIxLiA1LiAzMVxyXG4gKiBATWV0aG9kIE5hbWUgOiBkb2N1bWVudEdvdG9GaXJzdFxyXG4gKi9cclxuZnVuY3Rpb24gZG9jdW1lbnRHb3RvRmlyc3QoKSB7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgZG9jdW1lbnRQYWdlU2V0dGluZ3MocGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAg7J207KCEIO2OmOydtOyngOuhnCDsnbTrj5ntlZzri6QuXHJcbiAqXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZG9jdW1lbnRHb3RvUHJldlxyXG4gKi9cclxuZnVuY3Rpb24gZG9jdW1lbnRHb3RvUHJldigpIHtcclxuICAgIGlmIChwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgLSAxIDwgMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlci0tO1xyXG4gICAgZG9jdW1lbnRQYWdlU2V0dGluZ3MocGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAg64uk7J2MIO2OmOydtOyngOuhnCDsnbTrj5ntlZzri6QuXHJcbiAqXHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZG9jdW1lbnRHb3RvUHJldlxyXG4gKi9cclxuZnVuY3Rpb24gZG9jdW1lbnRHb3RvTmV4dCgpIHtcclxuICAgIGlmIChwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgKyAxID4gcGRmVmlld2VyLnBhZ2VzQ291bnQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIrKztcclxuICAgIGRvY3VtZW50UGFnZVNldHRpbmdzKHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIOuniOyngOuniSDtjpjsnbTsp4DroZwg7J2064+Z7ZWc64ukLlxyXG4gKlxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IGRvY3VtZW50R290b1ByZXZcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50R290b0xhc3QoKSB7XHJcbiAgICBwZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSBwZGZWaWV3ZXIucGFnZXNDb3VudDtcclxuICAgIGRvY3VtZW50UGFnZVNldHRpbmdzKHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIO2OmOydtOyngCDsoJXrs7Trpbwg7ISk7KCV7ZWc64ukLi5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2VObyAgIOyEpOygle2VoCDtjpjsnbTsp4Ag7KCV67O0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZG9jdW1lbnRQYWdlU2V0dGluZ3NcclxuICovXHJcbmZ1bmN0aW9uIGRvY3VtZW50UGFnZVNldHRpbmdzKHBhZ2VObykge1xyXG4gICAgbGV0IHBhZ2VJbnB1dCA9IF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJwYWdlTnVtYmVyXCIpO1xyXG4gICAgcGFnZUlucHV0LnZhbHVlID0gcGFnZU5vO1xyXG4gICAgZG9jdW1lbnRQYWdlQnRuRW5hYmxlKHBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gIO2OmOydtOyngOuyhO2KvOydmCDtmZzshLHtmZQg7Jes67aA66W8IO2MkOuLqO2VmOyXrCDshKTsoJXtlZzri6QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTm8gIOyEpOygle2VoCDtjpjsnbTsp4Ag7KCV67O0XHJcbiAqIEBEYXRlIDogMjAyMS4gNS4gMzFcclxuICogQE1ldGhvZCBOYW1lIDogZG9jdW1lbnRQYWdlQnRuRW5hYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBkb2N1bWVudFBhZ2VCdG5FbmFibGUocGFnZU5vKSB7XHJcbiAgICBpZiAocGFnZU5vID09PSAxKSB7XHJcbiAgICAgICAgX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tRmlyc3QtQnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1QcmV2LUJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLUZpcnN0LUJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLVByZXYtQnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAocGFnZU5vID09PSBwZGZWaWV3ZXIucGFnZXNDb3VudCkge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLUxhc3QtQnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiR290by1OZXh0LUJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJHb3RvLUxhc3QtQnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIkdvdG8tTmV4dC1CdXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAgUERG66y47ISc7J2YIOuwsOycqCBTZWxlY3Trpbwg67O07Jes7KSA64ukLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gZXZ0IEV2ZW50IE9iamVjdFxyXG4gKiBARGF0ZSA6IDIwMjEuIDUuIDMxXHJcbiAqIEBNZXRob2QgTmFtZSA6IHNob3dTY2FsZVNlbGVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93U2NhbGVTZWxlY3RvcihldnQpIHtcclxuICAgIGNvbnN0IHRhcmdldEJib3ggPSBldnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IHNjYWxlQ29udGFpbmVyID0gX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAuU2NhbGUtU2VsZXRvci1Db250YWluZXJcIik7XHJcbiAgICBzY2FsZUNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gdGFyZ2V0QmJveC5sZWZ0ICsgXCJweFwiO1xyXG4gICAgc2NhbGVDb250YWluZXIuc3R5bGUudG9wID0gdGFyZ2V0QmJveC50b3AgKyBcInB4XCI7XHJcbiAgICBpZiAoc2NhbGVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiVGVtcGxhdGUtSGlkZVwiKSkge1xyXG4gICAgICAgIHNjYWxlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJUZW1wbGF0ZS1IaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHNjYWxlU2VsZWN0ID0gc2NhbGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcclxuICAgIGlmICghJChzY2FsZVNlbGVjdCkuaGFzQ2xhc3MoXCJzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlXCIpKSB7XHJcbiAgICAgICAgLy8gU2VsZWN0MiBoYXMgYmVlbiBpbml0aWFsaXplZFxyXG4gICAgICAgICQoc2NhbGVTZWxlY3QpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjgwcHhcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJChzY2FsZVNlbGVjdCkudmFsKHBkZlZpZXdlci5jdXJyZW50U2NhbGUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAkKHNjYWxlU2VsZWN0KS5zZWxlY3QyKCdvcGVuJyk7XHJcbiAgICAkKHNjYWxlU2VsZWN0KS5vbignc2VsZWN0MjpzZWxlY3QnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZ1xyXG4gICAgICAgIHZhciBkYXRhID0gZS5wYXJhbXMuZGF0YTtcclxuICAgICAgICBwZGZWaWV3ZXIuY3VycmVudFNjYWxlID0gZGF0YS5pZDtcclxuICAgICAgICBzZXRTY2FsZVZhbHVlVGV4dChkYXRhLmlkKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbm5vdGF0aW9uTW9kQ2hhbmdlKG1vZCkge1xyXG4gICAgcGRmVmlld2VyLmFubm90YXRpb25FZGl0b3JNb2RlID0gbW9kO1xyXG4gICAgcGRmQ3Vyc29yVG9vbHMuc3dpdGNoVG9vbCgwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJlYWRlck1vZGUobW9kZSkge1xyXG4gICAgcmVhZGVyTW9kLmhpZGVNZW1vUHJvcGVydGllcygpO1xyXG4gICAgXHJcbiAgICBpZiAoX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIlJlYWRlci1GaWVsZC1JbnB1dC1Nb2RlLUJ1dHRvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItRmllbGQtSW5wdXQtTW9kZS1CdXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItTWVtby1JbnB1dC1Nb2RlLUJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiU2VsZWN0ZWRcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoX19yZWFkZXJPd25lck5vZGUucXVlcnlTZWxlY3RvcihcIiAjXCIgKyBcIlJlYWRlci1NZW1vLUFkZC1Nb2RlLUJ1dHRvblwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJTZWxlY3RlZFwiKSkge1xyXG4gICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcIlNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBwZGZDdXJzb3JUb29scy5zd2l0Y2hUb29sKDEpO1xyXG4gICAgICAgICAgICBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiUmVhZGVyLUZpZWxkLUlucHV0LU1vZGUtQnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBwZGZDdXJzb3JUb29scy5zd2l0Y2hUb29sKDApO1xyXG4gICAgICAgICAgICBfX3JlYWRlck93bmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwiICNcIiArIFwiUmVhZGVyLU1lbW8tSW5wdXQtTW9kZS1CdXR0b25cIikuY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHBkZkN1cnNvclRvb2xzLnN3aXRjaFRvb2woMCk7XHJcbiAgICAgICAgICAgIF9fcmVhZGVyT3duZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIgI1wiICsgXCJSZWFkZXItTWVtby1BZGQtTW9kZS1CdXR0b25cIikuY2xhc3NMaXN0LmFkZChcIlNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwZGZDdXJzb3JUb29scy5zd2l0Y2hUb29sKDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVhZGVyTW9kLmNoYW5nZVJlYWRlck1vZGUobW9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUZpZWxkSW5wdXRNb2RlKCkge1xyXG4gICAgY2hhbmdlUmVhZGVyTW9kZSgwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTWVtb0lucHV0TW9kZSgpIHtcclxuICAgIGNoYW5nZVJlYWRlck1vZGUoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU1lbW9BZGRNb2RlKCkge1xyXG4gICAgY2hhbmdlUmVhZGVyTW9kZSgyKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==