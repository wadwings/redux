/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/control/Init.js":
/*!*****************************!*\
  !*** ./app/control/Init.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const play_switch = __webpack_require__(/*! ./play_switch */ \"./app/control/play_switch.js\");\r\nconst construct = __webpack_require__(/*! ./construct */ \"./app/control/construct.js\")\r\nconst mute_switch = __webpack_require__(/*! ./mute_switch */ \"./app/control/mute_switch.js\")\r\nconst volume_change = __webpack_require__(/*! ./volume_change */ \"./app/control/volume_change.js\");\r\n\r\nfunction Init(){\r\n    let video = document.querySelector(\"video\");\r\n    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方\r\n\r\n    let play_button = document.querySelector(\"#play\");\r\n    let clicklist = [video, play_button];\r\n    for(let i = 0; i < clicklist.length;i++){\r\n        play_switch(clicklist[i], video)//点击切换播放\r\n    }\r\n\r\n    mute_switch(document.querySelector(\"#volume\"), video);\r\n    volume_change(video);\r\n}\r\n\r\nmodule.exports = Init;\n\n//# sourceURL=webpack:///./app/control/Init.js?");

/***/ }),

/***/ "./app/control/construct.js":
/*!**********************************!*\
  !*** ./app/control/construct.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n    let control = document.createElement(\"div\");\r\n    control.className = \"control\";\r\n\r\n\r\n    let progress = document.createElement(\"progress\");\r\n    progress.setAttribute(\"value\", 0);\r\n    progress.setAttribute(\"max\", 100);\r\n    progress.setAttribute(\"id\", \"progress\");\r\n\r\n\r\n    let play = document.createElement(\"button\");\r\n    play.setAttribute(\"id\", \"play\");\r\n\r\n\r\n    let rate = document.createElement(\"button\");\r\n    rate.setAttribute(\"id\", \"rate\");\r\n\r\n\r\n    let fullscreen = document.createElement(\"button\");\r\n    fullscreen.setAttribute(\"id\", \"fullscreen\");\r\n\r\n\r\n    let volume = document.createElement(\"button\");\r\n    volume.setAttribute(\"id\", \"volume\");\r\n    let div = document.createElement(\"div\");\r\n    div.setAttribute(\"id\", \"leng\");\r\n    let slider = document.createElement(\"div\");\r\n    slider.setAttribute(\"id\", \"slider\");\r\n    slider.setAttribute(\"draggable\", true);\r\n    let slid1 = document.createElement(\"div\");\r\n    slid1.setAttribute(\"id\", \"slid1\");\r\n    let slid2 = document.createElement(\"div\");\r\n    slid2.setAttribute(\"id\", \"slid2\");\r\n    div.appendChild(slid1);\r\n    div.appendChild(slider);\r\n    div.appendChild(slid2);\r\n    volume.appendChild(div);\r\n\r\n\r\n    components = [progress, play, rate, fullscreen, volume];\r\n    for(let i = 0;i < components.length; i++){\r\n        control.appendChild(components[i])\r\n    }\r\n    return control;\r\n}\n\n//# sourceURL=webpack:///./app/control/construct.js?");

/***/ }),

/***/ "./app/control/convert.js":
/*!********************************!*\
  !*** ./app/control/convert.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(arr){\r\n    let i = 0;\r\n    while(\"1\" <= arr[i] <= \"9\"){\r\n        i++\r\n    }\r\n    let number = arr[i] - \"0\";\r\n    while(\"1\" <= arr[i] <= \"9\"){\r\n        number = number*10 + arr[i] - \"0\";\r\n        i++\r\n    }\r\n    return number;\r\n}\n\n//# sourceURL=webpack:///./app/control/convert.js?");

/***/ }),

/***/ "./app/control/mute_switch.js":
/*!************************************!*\
  !*** ./app/control/mute_switch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(button, video){\r\n    button.addEventListener(\"click\", function(){\r\n        if(video.muted){\r\n            video.muted = false;\r\n        }else{\r\n            video.muted = true;\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/mute_switch.js?");

/***/ }),

/***/ "./app/control/play_switch.js":
/*!************************************!*\
  !*** ./app/control/play_switch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(ele, video){\r\n    ele.addEventListener('click', function(){\r\n        if(video.paused){\r\n            video.play();\r\n        }else{\r\n            video.pause();\r\n        }\r\n})}\n\n//# sourceURL=webpack:///./app/control/play_switch.js?");

/***/ }),

/***/ "./app/control/volume_change.js":
/*!**************************************!*\
  !*** ./app/control/volume_change.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst convert = __webpack_require__(/*! ./convert */ \"./app/control/convert.js\");\r\n/*module.exports = function(slider){\r\n    slider.addEventListener(\"drag\", tmp = function(){\r\n        console.log(\"change\");\r\n        setTimeout(function(){}, 300);\r\n        let tmp1 = getMousePos().y;\r\n        let d = tmp1 - tmp;\r\n        if(convert(document.defaultView.getComputedStyle(slid1).height) + d <= 100 && convert(document.defaultView.getComputedStyle(slid1).height) + d >= 0){\r\n            slid1.setAttribute(\"style\", \"height: \" + convert(document.defaultView.getComputedStyle(slid1).height) + d + \"px\");\r\n            slid2.setAttribute(\"style\", \"height: \" + convert(document.defaultView.getComputedStyle(slid2).height) + d + \"px\");\r\n        }else if(convert(document.defaultView.getComputedStyle(slid1).height) + d > 100){\r\n            slid1.setAttribute(\"style\", \"100px\");\r\n            slid2.setAttribute(\"style\", \"0px\");\r\n        }else{\r\n            slid1.setAttribute(\"style\", \"0px\");\r\n            slid2.setAttribute(\"style\", \"100px\");\r\n        }\r\n        return tmp1;\r\n    })\r\n}*/\r\n\r\nmodule.exports = function(video){\r\n    let index = 0\r\n    document.querySelector(\"#slider\").ondrag = function(event){\r\n        let d;\r\n        if(index != 0)\r\n            d = event.clientY - index;\r\n        else\r\n            d = 0;\r\n        const slid1 = document.querySelector(\"#slid1\");\r\n        const slid2 = document.querySelector(\"#slid2\");\r\n        if(slid1.clientHeight + d <= 100 && slid1.clientHeight + d >= 0){\r\n            video.volume = (slid2.clientHeight - d)/100;\r\n            slid1.setAttribute(\"style\", \"height: \" + (slid1.clientHeight + d) + \"px\");\r\n            slid2.setAttribute(\"style\", \"height: \" + (slid2.clientHeight - d) + \"px\");\r\n        }else if(slid1.clientHeight + d > 100){\r\n            video.volume = (slid2.clientHeight - d)/100;\r\n            slid1.setAttribute(\"style\", \"height: 100px\");\r\n            slid2.setAttribute(\"style\", \"height: 0px\");\r\n            }\r\n        index = event.clientY;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/control/volume_change.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const init = __webpack_require__(/*! ./control/Init */ \"./app/control/Init.js\")\r\ninit();\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ })

/******/ });