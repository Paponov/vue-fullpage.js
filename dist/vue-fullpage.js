/*!
 * vue-fullpage.js v0.1.4
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullpageJs"] = factory();
	else
		root["VueFullpageJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.7 - Extensions 0.1.8
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e.fullpage=o(t,n),e.fullpage}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(on,rn){"use strict";var ln="fullpage-wrapper",an="."+ln,sn="fp-responsive",cn="fp-notransition",un="fp-destroyed",fn="fp-enabled",dn="fp-viewing",vn="active",pn="."+vn,hn="fp-completely",gn="fp-section",mn="."+gn,Sn=mn+pn,bn="fp-tableCell",wn="."+bn,yn="fp-auto-height",En="fp-normal-scroll",xn="fp-nav",An="#"+xn,Ln="fp-tooltip",Mn="fp-slide",Tn="."+Mn,On=Tn+pn,kn="fp-slides",Cn="."+kn,Hn="fp-slidesContainer",Rn="."+Hn,zn="fp-table",In="fp-slidesNav",Bn="."+In,Nn=Bn+" a",e="fp-controlArrow",jn="."+e,Pn="fp-prev",Wn=jn+".fp-prev",Yn=jn+".fp-next";function Dn(e,t){on.console&&on.console[e]&&on.console[e]("fullPage: "+t)}function Xn(e,t){return(t=1<arguments.length?t:rn)?t.querySelectorAll(e):null}function Vn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Vn(e[r],o[r]))}return e}function Zn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Gn(){return"innerHeight"in on?on.innerHeight:rn.documentElement.offsetHeight}function Fn(){return on.innerWidth}function Un(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!So(o,t);)o=o[n];return o}function Qn(e,t){return n(e,t,"previousElementSibling")}function _n(e,t){return n(e,t,"nextElementSibling")}function Kn(e,t){if(null==t)return e.previousElementSibling;var n=Kn(e);return n&&So(n,t)?n:null}function Jn(e,t){if(null==t)return e.nextElementSibling;var n=Jn(e);return n&&So(n,t)?n:null}function $n(e){return e[e.length-1]}function qn(e,t){e=no(e)?e[0]:e;for(var n=null!=t?Xn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return no(e)?e:[e]}function eo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function to(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function no(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function oo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ro(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function io(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||rn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function lo(e,t){o(e,t,!0)}function ao(e,t){for("string"==typeof t&&(t=wo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function so(e){for(var t=rn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function co(e,t){return e&&1===e.nodeType?So(e,t)?e:co(e.parentNode,t):null}function uo(e,t){r(e,e.nextSibling,t)}function fo(e,t){r(e,e,t)}function r(e,t,n){no(n)||("string"==typeof n&&(n=wo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function vo(){var e=rn.documentElement;return(on.pageYOffset||e.scrollTop)-(e.clientTop||0)}function po(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function ho(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function go(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function mo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof on.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=rn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function So(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function bo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function wo(e){var t=rn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function yo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(So(o,t)||null==t)&&r.push(o),o=o[n];return r}function Eo(e,t){return i(e,t,"nextElementSibling")}function xo(e,t){return i(e,t,"previousElementSibling")}function Ao(e,t){e.insertBefore(t,e.firstChild)}return on.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||on;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),on.fp_utils={$:Xn,deepExtend:Vn,hasClass:Zn,getWindowHeight:Gn,css:Un,until:n,prevUntil:Qn,nextUntil:_n,prev:Kn,next:Jn,last:$n,index:qn,getList:l,hide:eo,show:to,isArrayOrList:no,addClass:oo,removeClass:ro,appendTo:io,wrap:o,wrapAll:lo,wrapInner:ao,unwrap:so,closest:co,after:uo,before:fo,insertBefore:r,getScrollTop:vo,siblings:po,preventDefault:ho,isFunction:go,trigger:mo,matches:So,toggle:bo,createElementFromHTML:wo,remove:yo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Eo,prevAll:xo,showError:Dn,prependTo:Ao,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Zn(e,t);o&&null==n||!n?ro(e,t):(!o&&null==n||n)&&oo(e,t)}}},function(e,g){var n=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<rn.domain.indexOf("alvarotrigo.com"),r=Xn("html, body"),s=Xn("html")[0],m=Xn("body")[0];if(!Zn(s,fn)){var S={};g=Vn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:on.fp_scrolloverflow?on.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Xn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,l,c,o,a=!1,i=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),u="ontouchstart"in on||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Xn(e)[0]:e,y=Gn(),f=Fn(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Vn({},v.m);var p,h,A,L,M,T,O,k,C,H,R=Wt(),z={touchmove:"ontouchmove"in on?"touchmove":R.move,touchstart:"ontouchstart"in on?"touchstart":R.down},I=!1,B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',N=!1;try{var j=Object.defineProperty({},"passive",{get:function(){N=!0}});on.addEventListener("testPassive",null,j),on.removeEventListener("testPassive",null,j)}catch(e){}var P,W,Y=Vn({},g),D=!1,X=!0,V={};Jt(),on.fp_easings=Vn(on.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.5",S.setAutoScrolling=ne,S.setRecordHistory=oe,S.setScrollingSpeed=re,S.setFitToSection=ie,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=le,S.setAllowScrolling=ae,S.setKeyboardScrolling=ce,S.moveSectionUp=ue,S.moveSectionDown=fe,S.silentMoveTo=de,S.moveTo=ve,S.moveSlideRight=pe,S.moveSlideLeft=he,S.fitToSection=Ce,S.reBuild=ge,S.setResponsive=Se,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ye,isTouch:u,c:it,getXmovement:Ot,removeAnimation:Lt,getTransforms:Vt,lazyLoad:_e,addAnimation:At,performHorizontalMove:wt,landscapeScroll:mt,silentLandscapeScroll:Dt,keepSlidesPosition:We,silentScroll:Xt,styleSlides:Ae,styleSection:Me,scrollHandler:ke,getEventsPage:Yt,getMSPointer:Wt,isReallyTouch:Ie,usingExtension:Ft,toggleControlArrows:St,touchStartHandler:Be,touchMoveHandler:ze}}},S.destroy=function(e){mo(w,"destroy",e),ne(!1,"internal"),ae(!0),se(!1),ce(!1),oo(w,un),[M,L,h,T,O,C,A].forEach(function(e){clearTimeout(e)}),on.removeEventListener("scroll",ke),on.removeEventListener("hashchange",st),on.removeEventListener("resize",yt),rn.removeEventListener("keydown",ut),rn.removeEventListener("keyup",ft),["click","touchstart"].forEach(function(e){rn.removeEventListener(e,be)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){rn.removeEventListener(e,ye,!0)}),Ft("dragAndMove")&&S.dragAndMove.destroy(),e&&(Xt(0),Xn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Ue(e,"src")}),Xn("img[data-srcset]").forEach(function(e){Ue(e,"srcset")}),yo(Xn(An+", "+Bn+", "+jn)),Un(Xn(mn),{height:"","background-color":"",padding:""}),Un(Xn(Tn),{width:""}),Un(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Un(r,{overflow:"",height:""}),ro(s,fn),ro(m,sn),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(dn)&&ro(m,e)}),Xn(mn+", "+Tn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),ro(e,zn+" "+vn+" "+hn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Zn(e,gn)&&!D&&e.removeAttribute("data-anchor")}),Gt(w),[wn,Rn,Cn].forEach(function(e){Xn(e,w).forEach(function(e){so(e)})}),on.scrollTo(0,0),[gn,Mn,Hn].forEach(function(e){ro(Xn("."+e),e)}))},S.getActiveSection=function(){return new tn(Xn(Sn)[0])},S.getActiveSlide=function(){return Ze(Xn(On,Xn(Sn)[0])[0])},S.landscapeScroll=mt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Xn(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Xn(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:ne},S.shared={afterRenderActions:Oe,isNormalScrollElement:!1},on.fullpage_api=S,g.$&&Object.keys(S).forEach(function(e){g.$.fn.fullpage[e]=S[e]}),xe("continuousHorizontal"),xe("scrollHorizontally"),xe("resetSliders"),xe("interlockedSlides"),xe("responsiveSlides"),xe("fadingEffect"),xe("dragAndMove"),xe("offsetSections"),xe("scrollOverflowReset"),xe("parallax"),xe("cards"),Ft("dragAndMove")&&S.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=rn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",rn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=on.getComputedStyle(t).getPropertyValue(n[o]));return rn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Xn(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(D=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var e="[data-tooltip]",n=Xn(g.sectionSelector.split(",").join(e+",")+e,w);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Un(w,{height:"100%",position:"relative"}),oo(w,ln),oo(s,fn),y=Gn(),ro(w,un),oo(Xn(g.sectionSelector,w),gn),oo(Xn(g.slideSelector,w),Mn),Ut("parallax","init");for(var e=Xn(mn),t=0;t<e.length;t++){var n=t,o=e[t],r=Xn(Tn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Me(o,n),l=o,a=n,void 0!==g.anchors[a]&&Zn(l,vn)&&Mt(g.anchors[a],a),g.menu&&g.css3&&null!=co(Xn(g.menu)[0],an)&&Xn(g.menu).forEach(function(e){m.appendChild(e)}),0<i?Ae(o,r,i):g.verticalCentered&&kt(o)}var l,a;g.fixedElements&&g.css3&&Xn(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=rn.createElement("div");e.setAttribute("id",xn);var t=rn.createElement("ul");e.appendChild(t),io(e,m);var n=Xn(An)[0];oo(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&oo(n,"fp-show-active");for(var o="",r=0;r<Xn(mn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+Te(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+Ln+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}Xn("ul",n)[0].innerHTML=o,Un(Xn(An),{"margin-top":"-"+Xn(An)[0].offsetHeight/2+"px"}),oo(Xn("a",Xn("li",Xn(An)[0])[qn(Xn(Sn)[0],mn)]),vn)}(),Xn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),g.fadingEffect&&S.fadingEffect&&S.fadingEffect.apply(),Ft("cards")&&S.cards.init(),g.scrollOverflow&&(p=g.scrollOverflowHandler.init(g))}(),ae(!0),se(!0),ne(g.autoScrolling,"internal"),xt(),Pt(),"complete"===rn.readyState&&at(),on.addEventListener("load",at),g.scrollOverflow||Oe(),function(){for(var e=1;e<4;e++)C=setTimeout(Ee,350*e)}(),on.addEventListener("scroll",ke),on.addEventListener("hashchange",st),on.addEventListener("blur",ht),on.addEventListener("resize",yt),rn.addEventListener("keydown",ut),rn.addEventListener("keyup",ft),["click","touchstart"].forEach(function(e){rn.addEventListener(e,be)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){we(e,!1)}),["mouseleave","touchend"].forEach(function(e){we(e,!0)})),Ft("dragAndMove")&&S.dragAndMove.turnOffTouch());var Z,G,F,U=!1,Q=0,_=0,K=0,J=0,$=(new Date).getTime(),q=0,ee=0,te=y;return S}function ne(e,t){e||Xt(0),Kt("autoScrolling",e,t);var n=Xn(Sn)[0];if(g.autoScrolling&&!g.scrollBar)Un(r,{overflow:"hidden",height:"100%"}),oe(Y.recordHistory,"internal"),Un(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Xt(n.offsetTop);else if(Un(r,{overflow:"visible",height:"initial"}),oe(!!g.autoScrolling&&Y.recordHistory,"internal"),Un(w,{"-ms-touch-action":"","touch-action":""}),Gt(w),null!=n){var o=Ge(n.offsetTop);o.element.scrollTo(0,o.options)}mo(w,"setAutoScrolling",e)}function oe(e,t){Kt("recordHistory",e,t)}function re(e,t){"internal"!==t&&Ft("fadingEffect")&&S.fadingEffect.update(e),Ft("cards")&&S.cards.update(e),Kt("scrollingSpeed",e,t)}function ie(e,t){Kt("fitToSection",e,t)}function le(e){e?(function(){var e,t="";on.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in rn.createElement("div")?"wheel":void 0!==rn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!N&&{passive:!1};"DOMMouseScroll"==n?rn[e](t+"MozMousePixelScroll",je,o):rn[e](t+n,je,o)}(),w.addEventListener("mousedown",dt),w.addEventListener("mouseup",vt)):(rn.addEventListener?(rn.removeEventListener("mousewheel",je,!1),rn.removeEventListener("wheel",je,!1),rn.removeEventListener("MozMousePixelScroll",je,!1)):rn.detachEvent("onmousewheel",je),w.removeEventListener("mousedown",dt),w.removeEventListener("mouseup",vt))}function ae(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Zt(t,e,"m")}):Zt(t,"all","m"),mo(w,"setAllowScrolling",{value:t,directions:e})}function se(e){e?(le(!0),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(z.touchmove,Re,{passive:!1}),m.addEventListener(z.touchmove,Re,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(z.touchstart,Be),e.removeEventListener(z.touchmove,ze,{passive:!1}),e.addEventListener(z.touchstart,Be),e.addEventListener(z.touchmove,ze,{passive:!1})}}()):(le(!1),function(){if(i||u){g.autoScrolling&&(m.removeEventListener(z.touchmove,ze,{passive:!1}),m.removeEventListener(z.touchmove,Re,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(z.touchstart,Be),e.removeEventListener(z.touchmove,ze,{passive:!1})}}())}function ce(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Zt(t,e,"k")}):(Zt(t,"all","k"),g.keyboardScrolling=t)}function ue(){var e=Qn(Xn(Sn)[0],mn);e||!g.loopTop&&!g.continuousVertical||(e=$n(Xn(mn))),null!=e&&De(e,null,!0)}function fe(){var e=_n(Xn(Sn)[0],mn);e||!g.loopBottom&&!g.continuousVertical||(e=Xn(mn)[0]),null!=e&&De(e,null,!1)}function de(e,t){re(0,"internal"),ve(e,t),re(Y.scrollingSpeed,"internal")}function ve(e,t){var n=Rt(e);void 0!==t?zt(e,t):null!=n&&De(n)}function pe(e){Pe("right",e)}function he(e){Pe("left",e)}function ge(e){if(!Zn(w,un)){E=!0,y=Gn(),f=Fn();for(var t=Xn(mn),n=0;n<t.length;++n){var o=t[n],r=Xn(Cn,o)[0],i=Xn(Tn,o);g.verticalCentered&&Un(Xn(wn,o),{height:Ct(o)+"px"}),Un(o,{height:Le(o)+"px"}),1<i.length&&mt(r,Xn(On,r)[0])}g.scrollOverflow&&p.createScrollBarForAll();var l=qn(Xn(Sn)[0],mn);l&&!Ft("fadingEffect")&&de(l+1),E=!1,go(g.afterResize)&&e&&g.afterResize.call(w,on.innerWidth,on.innerHeight),go(g.afterReBuild)&&!e&&g.afterReBuild.call(w),mo(w,"afterRebuild")}}function me(){return Zn(m,sn)}function Se(e){var t=me();e?t||(ne(!1,"internal"),ie(!1,"internal"),eo(Xn(An)),oo(m,sn),go(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSections(),mo(w,"afterResponsive",e),g.scrollOverflow&&p.createScrollBarForAll()):t&&(ne(Y.autoScrolling,"internal"),ie(Y.autoScrolling,"internal"),to(Xn(An)),ro(m,sn),go(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSlides(),mo(w,"afterResponsive",e))}function be(e){var t=e.target;t&&co(t,An+" a")?function(e){ho(e);var t=qn(co(this,An+" li"));De(Xn(mn)[t])}.call(t,e):So(t,".fp-tooltip")?function(){mo(Kn(this),"click")}.call(t):So(t,jn)?function(){var e=co(this,mn);Zn(this,Pn)?v.m.left&&he(e):v.m.right&&pe(e)}.call(t,e):So(t,Nn)||null!=co(t,Nn)?function(e){ho(e);var t=Xn(Cn,co(this,mn))[0],n=Xn(Tn,t)[qn(co(this,"li"))];mt(t,n)}.call(t,e):co(t,g.menu+" [data-menuanchor]")&&function(e){!Xn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(ho(e),ve(this.getAttribute("data-menuanchor")))}.call(t,e)}function we(e,t){rn["fp_"+e]=t,rn.addEventListener(e,ye,!0)}function ye(e){var o=event.toElement||e.relatedTarget||e.target,t=e.type,r=!1;o!=rn&&o?("touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(g.normalScrollElements.split(",").forEach(function(e){if(!r){var t=So(o,e),n=co(o,e);(t||n)&&(S.shared.isNormalScrollElement||se(!1),S.shared.isNormalScrollElement=!0,r=!0)}}),!r&&S.shared.isNormalScrollElement&&(se(!0),S.shared.isNormalScrollElement=!1))):se(!0)}function Ee(){var e=Gn(),t=Fn();y===e&&f===t||(y=e,f=t,ge(!0))}function xe(e){var t="fp_"+e+"Extension";V[e]=g[e+"Key"],S[e]=void 0!==on[t]?new on[t]:null,S[e]&&S[e].c(e)}function Ae(e,t,n){var o=100*n,r=100/n,i=rn.createElement("div");i.className=kn,lo(t,i);var l,a,s=rn.createElement("div");s.className=Hn,lo(t,s),Un(Xn(Rn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[wo('<div class="fp-controlArrow fp-prev"></div>'),wo('<div class="fp-controlArrow fp-next"></div>')],uo(Xn(Cn,l)[0],a),"#fff"!==g.controlArrowColor&&(Un(Xn(Yn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Un(Xn(Wn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||eo(Xn(Wn,l))),g.slidesNavigation&&function(e,t){io(wo('<div class="'+In+'"><ul></ul></div>'),e);var n=Xn(Bn,e)[0];oo(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)io(wo('<li><a href="#"><span class="fp-sr-only">'+Te(o,"Slide")+"</span><span></span></a></li>"),Xn("ul",n)[0]);Un(n,{"margin-left":"-"+n.innerWidth/2+"px"}),oo(Xn("a",Xn("li",n)[0]),vn)}(e,n)),t.forEach(function(e){Un(e,{width:r+"%"}),g.verticalCentered&&kt(e)});var c=Xn(On,e)[0];null!=c&&(0!==qn(Xn(Sn),mn)||0===qn(Xn(Sn),mn)&&0!==qn(c))?(Dt(c,"internal"),oo(c,"fp-initial")):oo(t[0],vn)}function Le(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Gn()}function Me(e,t){t||null!=Xn(Sn)[0]||oo(e,vn),o=Xn(Sn)[0],Un(e,{height:Le(e)+"px"}),g.paddingTop&&Un(e,{"padding-top":g.paddingTop}),g.paddingBottom&&Un(e,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[t]&&Un(e,{"background-color":g.sectionsColor[t]}),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}function Te(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function Oe(){var e,t,n=Xn(Sn)[0];oo(n,hn),_e(n),Qe(),Je(n),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),e=ct(),t=Rt(e.section),e.section&&t&&(void 0===t||qn(t)!==qn(o))||!go(g.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:qn(n,mn)}),go(g.afterRender)&&Xe("afterRender"),mo(w,"afterRender")}function ke(){var e;if(mo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Ft("dragAndMove"))&&!_t()){var t=Ft("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):vo(),n=0,o=t+Gn()/2,r=(Ft("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Gn())===t,i=Xn(mn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Zn(e=i[n],vn)){U=!0;var a,s,c=Xn(Sn)[0],u=qn(c,mn)+1,f=Tt(e),d=e.getAttribute("data-anchor"),v=qn(e,mn)+1,p=Xn(On,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=qn(p)),x&&(oo(e,vn),ro(po(e),vn),Ut("parallax","afterLoad"),go(g.onLeave)&&Xe("onLeave",h),go(g.afterLoad)&&Xe("afterLoad",h),g.resetSliders&&S.resetSliders&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),qe(c),_e(e),Je(e),Mt(d,v-1),g.anchors.length&&(b=d),Bt(a,s,d)),clearTimeout(T),T=setTimeout(function(){U=!1},100)}g.fitToSection&&(clearTimeout(O),O=setTimeout(function(){g.fitToSection&&Xn(Sn)[0].offsetHeight<=y&&Ce()},g.fitToSectionDelay))}}function Ce(){x&&(E=!0,De(Xn(Sn)[0]),E=!1)}function He(e){if(v.m[e]){var t="down"===e?fe:ue;if(S.scrollHorizontally&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Xn(Sn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Re(e){g.autoScrolling&&Ie(e)&&v.m.up&&ho(e)}function ze(e){var t=co(e.target,mn)||Xn(Sn)[0];if(Ie(e)){g.autoScrolling&&ho(e);var n=Yt(e);K=n.y,J=n.x,Xn(Cn,t).length&&Math.abs(_-J)>Math.abs(Q-K)?!a&&Math.abs(_-J)>Fn()/100*g.touchSensitivity&&(J<_?v.m.right&&pe(t):v.m.left&&he(t)):g.autoScrolling&&x&&Math.abs(Q-K)>on.innerHeight/100*g.touchSensitivity&&(K<Q?He("down"):Q<K&&He("up"))}}function Ie(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Be(e){if(g.fitToSection&&(P=!1),Ie(e)){var t=Yt(e);Q=t.y,_=t.x}}function Ne(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function je(e){var t=(new Date).getTime(),n=Zn(Xn(".fp-completely")[0],En);if(!v.m.down&&!v.m.up)return ho(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||on.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),g.scrollBar&&ho(e);var a=t-$;if($=t,200<a&&(d=[]),x&&!Qt()){var s=Ne(d,10);Ne(d,70)<=s&&l&&He(r<0?"down":"up")}return!1}g.fitToSection&&(P=!1)}function Pe(e,t){var n=null==t?Xn(Sn)[0]:t,o=Xn(Cn,n)[0];if(!(null==o||Qt()||a||Xn(Tn,o).length<2)){var r=Xn(On,o)[0],i=null;if(null==(i="left"===e?Qn(r,Tn):_n(r,Tn))){if(!g.loopHorizontal)return;var l=po(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,mt(o,i,e)}}function We(){for(var e=Xn(On),t=0;t<e.length;t++)Dt(e[t],"internal")}function Ye(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Ft("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():q<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==Jn(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),q=o}function De(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ye(e),yMovement:Tt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:qn(e,mn),activeSlide:Xn(On,e)[0],activeSection:Xn(Sn)[0],leavingSection:qn(Xn(Sn),mn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&vo()===i.dtop&&!Zn(e,yn))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=qn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,go(g.onLeave)&&!1===Xe("onLeave",i))return}var a;Ut("parallax","apply",i),Ut("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?fo(Xn(Sn)[0],Eo(s.activeSection,mn)):uo(Xn(Sn)[0],xo(s.activeSection,mn).reverse()),Xt(Xn(Sn)[0].offsetTop),We(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=Tt(s.element),s.leavingSection=qn(s.activeSection,mn)+1,s.sectionIndex=qn(s.element,mn),mo(Xn(an)[0],"onContinuousVertical",s),i=s),Ft("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||qe(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),oo(e,vn),ro(po(e),vn),_e(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Bt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Ht(t,!0),g.scrollingSpeed?(clearTimeout(L),L=setTimeout(function(){Fe(e)},g.scrollingSpeed)):Fe(e)}else{var n=Ge(e.dtop);S.test.top=-e.dtop+"px",$t(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Fe(e)},30):Fe(e)})}}(i),b=i.anchorLink,Mt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Xn(mn).length-1:0)}}var s}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ve(Xn(Sn)[0]),slide:Ze(Xn(On,Xn(Sn)[0])[0])}},onLeave:function(){return{origin:Ve(r.activeSection),destination:Ve(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ve(r.section),origin:Ze(r.prevSlide),destination:Ze(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(mo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ve(e){return e?new tn(e):null}function Ze(e){return e?new nn(e):null}function Ge(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Xn(an)[0]):(t.options=e,t.element=on),t}function Fe(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?fo(Xn(mn)[0],t.wrapAroundElements):uo(Xn(mn)[Xn(mn).length-1],t.wrapAroundElements),Xt(Xn(Sn)[0].offsetTop),We(),t.sectionIndex=qn(t.element,mn),t.leavingSection=qn(t.activeSection,mn)+1),go(g.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Ut("parallax","afterLoad"),Ft("scrollOverflowReset")&&S.scrollOverflowReset.reset(),Ft("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||Je(e.element),oo(e.element,hn),ro(po(e.element),hn),Qe(),x=!0,go(e.callback)&&e.callback()}function Ue(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Qe(){var e=Xn(".fp-auto-height")[0]||me()&&Xn(".fp-auto-height-responsive")[0];g.lazyLoading&&e&&Xn(mn+":not("+pn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&_e(e)})}function _e(o){g.lazyLoading&&Xn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",et(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Ue(n,e),n.addEventListener("load",function(){Ke(o)}))}),So(n,"source")){var e=co(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Ke(o)})}})}function Ke(e){g.scrollOverflow&&(clearTimeout(W),W=setTimeout(function(){p.createScrollBar(e)},200))}function Je(e){var t=et(e);Xn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Xn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&$e(e),e.onload=function(){e.hasAttribute("data-autoplay")&&$e(e)}})}function $e(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function qe(e){var t=et(e);Xn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Xn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function et(e){var t=Xn(On,e);return t.length&&(e=t[0]),e}function tt(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function nt(f){var d=void 0!==V[f]&&V[f].length,e=[],v=!1;return no(V[f])?e=V[f]:e.push(V[f]),e.forEach(function(e){var t=function(){if(rn.domain.length){for(var e=rn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=tt(n[0]),r=tt(n[1]),i=tt(n[2]),l=tt(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length;if(!d&&a)return!1;var s=d?tt(e):"",c=1<(s=s.split("_")).length&&-1<s[1].indexOf(f,s[1].length-f.length),u=s[0].indexOf(t,s[0].length-t.length)<0;v=v||!(u&&a&&l!=s[0])&&c||!a}),v}function ot(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(G)&&(clearTimeout(F),F=setTimeout(rt,900))})}function rt(){I=!1}function it(e){G=rn.createElement("div"),Z=tt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),G.innerHTML=Z,G=G.firstChild,"MutationObserver"in on&&new MutationObserver(ot).observe(rn.body,{childList:!0,subtree:!1}),Ft(e)&&S[e]&&(nt(e)||(lt(),setInterval(lt,2e3)))}function lt(){G&&(I||(Math.random()<.5?Ao(m,G):io(G,m),I=!0),G.setAttribute("style",tt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,tt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function at(){var e=ct(),t=e.section,n=e.slide;t&&(g.animateAnchor?zt(t,n):de(t,n))}function st(){if(!U&&!g.lockAnchors){var e=ct(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;if(t&&t.length){var i=!Ft("dragAndMove")||l;(t&&t!==b&&!o||r||!a&&l!=n&&i)&&zt(t,n)}}}function ct(){var e,t,n=on.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function ut(e){clearTimeout(k);var t=rn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=rn.activeElement,u=pt(et(Xn(Sn)[0]));function f(e){return ho(e),u[0]?u[0].focus():null}(t=e,n=pt(rn),o=n.indexOf(rn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ze(co(i,Tn)),a=Ve(co(i,mn)),l||a)&&(c?null==co(c,Sn+","+Sn+" "+On)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&ho(e))}(e):So(t,"textarea")||So(t,"input")||So(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&ho(e),c=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=rn.activeElement,o=So(n,"video")||So(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&ue();break;case 32:if(t&&v.k.up&&!o){ue();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||fe());break;case 36:v.k.up&&ve(1);break;case 35:v.k.down&&ve(Xn(mn).length);break;case 37:v.k.left&&he();break;case 39:v.k.right&&pe()}}(e)},150))}function ft(e){t&&(c=e.ctrlKey)}function dt(e){2==e.which&&(ee=e.pageY,w.addEventListener("mousemove",gt))}function vt(e){2==e.which&&w.removeEventListener("mousemove",gt)}function pt(e){return[].slice.call(Xn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function ht(){c=t=!1}function gt(e){g.autoScrolling&&(x&&(e.pageY<ee&&v.m.up?ue():e.pageY>ee&&v.m.down&&fe()),ee=e.pageY)}function mt(e,t,n){var o=co(e,mn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:qn(t),section:o,sectionIndex:qn(o,mn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Xn(Bn,o)[0],slideAnchor:jt(t),prevSlide:Xn(On,o)[0],prevSlideIndex:qn(Xn(On,o)[0]),localIsResizing:E};r.xMovement=Ot(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Ut("parallax","applyHorizontal",r),Ut("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&go(g.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(oo(t,vn),ro(po(t),vn),r.localIsResizing||(qe(r.prevSlide),_e(t)),St(r),Zn(o,vn)&&!r.localIsResizing&&Bt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),_t()?bt(r):wt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Ft("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function St(e){!g.loopHorizontal&&g.controlArrows&&(bo(Xn(Wn,e.section),0!==e.slideIndex),bo(Xn(Yn,e.section),null!=Jn(e.destiny)))}function bt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(ro(Xn(pn,t),vn),oo(Xn("a",Xn("li",t)[n]),vn)),e.localIsResizing||(Ut("parallax","afterSlideLoads"),Ut("scrollOverflowReset","setPrevious",e.prevSlide),Ut("scrollOverflowReset","reset"),go(g.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,Je(e.destiny)),a=!1,Ft("interlockedSlides")&&S.interlockedSlides.apply(e)}function wt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Un(At(Xn(Rn,e)),Vt(r)),M=setTimeout(function(){n&&bt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),$t(e,Math.round(o.left),g.scrollingSpeed,function(){n&&bt(t)})}function yt(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)A=setTimeout(Et,200*e)},200)}function Et(){if(mo(w,"onResize"),xt(),i){var e=rn.activeElement;if(!So(e,"textarea")&&!So(e,"input")&&!So(e,"select")){var t=Gn();Math.abs(t-te)>20*Math.max(te,t)/100&&(ge(!0),te=t)}}else Ee()}function xt(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&on.innerWidth<e,o=t&&on.innerHeight<t;e&&t?Se(n||o):e?Se(n):t&&Se(o)}function At(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return ro(e,cn),Un(e,{"-webkit-transition":t,transition:t})}function Lt(e){return oo(e,cn)}function Mt(e,t){var n,o,r,i;n=e,Xn(g.menu).forEach(function(e){g.menu&&null!=e&&(ro(Xn(pn,e),vn),oo(Xn('[data-menuanchor="'+n+'"]',e),vn))}),o=e,r=t,i=Xn(An)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(ro(Xn(pn,Xn(An)[0]),vn),oo(o?Xn('a[href="#'+o+'"]',Xn(An)[0]):Xn("a",Xn("li",Xn(An)[0])[r]),vn))}function Tt(e){var t=qn(Xn(Sn)[0],mn),n=qn(e,mn);return t==n?"none":n<t?"up":"down"}function Ot(e,t){return e==t?"none":t<e?"left":"right"}function kt(e){if(!Zn(e,zn)){var t=rn.createElement("div");t.className=bn,t.style.height=Ct(e)+"px",oo(e,zn),ao(e,t)}}function Ct(e){var t=Le(e);if(g.paddingTop||g.paddingBottom){var n=e;Zn(n,gn)||(n=co(e,mn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function Ht(e,t){t?At(w):Lt(w),clearTimeout(H),Un(w,Vt(e)),S.test.translate3d=e,H=setTimeout(function(){ro(w,cn)},10)}function Rt(e){var t=Xn(mn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Xn(mn)[n]}return t}function zt(e,t){var n=Rt(e);if(null!=n){var o,r,i,l=(null==(i=Xn(Tn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Xn(Tn,r)[o]),i);jt(n)===b||Zn(n,vn)?It(l):De(n,function(){It(l)})}}function It(e){null!=e&&mt(co(e,Cn),e)}function Bt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Nt(r+"/"+(l=t))):(null!=e&&(l=t),Nt(n))),Pt()}function Nt(e){if(g.recordHistory)location.hash=e;else if(i||u)on.history.replaceState(void 0,void 0,"#"+e);else{var t=on.location.href.split("#")[0];on.location.replace(t+"#"+e)}}function jt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=qn(e);return null==t&&(t=n),t}function Pt(){var e=Xn(Sn)[0],t=Xn(On,e)[0],n=jt(e),o=jt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+dn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),oo(m,dn+"-"+r)}function Wt(){return on.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Yt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,u&&Ie(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Dt(e,t){re(0,"internal"),void 0!==t&&(E=!0),mt(co(e,Cn),e),void 0!==t&&(E=!1),re(Y.scrollingSpeed,"internal")}function Xt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)Ht("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Un(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=Ge(t);qt(n.element,n.options)}}function Vt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Zt(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Gt(e){return Un(e,{"-webkit-transition":"none",transition:"none"})}function Ft(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function Ut(e,t,n){if(Ft(e))return S[e][t](n)}function Qt(){return Ft("dragAndMove")&&S.dragAndMove.isAnimating}function _t(){return Ft("dragAndMove")&&S.dragAndMove.isGrabbing}function Kt(e,t,n){g[e]=t,"internal"!==n&&(Y[e]=t)}function Jt(){var e=g.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Dn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Dn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Zn(s,fn)?Dn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Dn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Dn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Dn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Dn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Xn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Xn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Dn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Dn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function $t(t,n,o,r){var e,i=(e=t).self!=on&&Zn(e,kn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?vo():e.offsetTop,l=n-i,a=0;P=!0;var s=function(){if(P){var e=n;a+=20,o&&(e=on.fp_easings[g.easing](a,i,l,o)),qt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function qt(e,t){!g.autoScrolling||g.scrollBar||e.self!=on&&Zn(e,kn)?e.self!=on&&Zn(e,kn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function en(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=qn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function tn(e){en.call(this,e,mn)}function nn(e){en.call(this,e,Tn)}Jt()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t}),new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alvarotrigolopez/Sites/vue-fullpage.js/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-103a4254", Component.options)
  } else {
    hotAPI.reload("data-v-103a4254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      // eslint-disable-next-line
      this.api = new _fullpageExtensions2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    !this.skipInit && this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
if (!window.fullpage_api) {
  window.fullpage = _fullpageExtensions2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-103a4254", module.exports)
  }
}

/***/ })
/******/ ]);
});