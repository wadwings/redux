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

/***/ "./app/barrage/barrage.js":
/*!********************************!*\
  !*** ./app/barrage/barrage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const move = __webpack_require__(/*! ./move */ \"./app/barrage/move.js\");\r\n\r\nmodule.exports = function(player){\r\n    var btn = document.getElementById(\"send\");\r\n    btn.onclick = function () {\r\n        addBarrage(player);\r\n    };\r\n    document.onkeydown = function (evt) {\r\n        var event = evt || window.event;\r\n        if (event.keyCode == 13) {\r\n            addBarrage(player);\r\n        }\r\n    };\r\n}\r\n\r\n\r\nfunction addBarrage(player) {\r\n    const colors = [\"#2C3E50\",\"#FF0000\",\"#1E87F0\",\"#7AC84B\",\"#FF7F00\",\"#9B39F4\",\"#FF69B4\",]; //弹幕颜色库\r\n    let text = document.getElementById(\"input\").value;\r\n    document.getElementById(\"input\").value = \"\";\r\n    let index = parseInt(Math.random() * colors.length); //随机弹幕颜色\r\n    let p = document.createElement(\"p\");\r\n    let clientHeight = player.clientHeight - 45;\r\n    let top = new Date()%clientHeight;\r\n    let clientWidth = player.clientWidth;\r\n    p.style.fontSize = (40-text.length > 20 ?40-text.length:20) + \"px\";\r\n    p.innerHTML = text;\r\n    p.style.position = \"absolute\";\r\n    p.style.color = colors[index];\r\n    p.style.top = (top - 45) + \"px\";\r\n    p.style.left = (clientWidth + text.length*parseInt(p.style.fontSize)/2) + \"px\";\r\n    p.style.transition = \"0.3s linear\";\r\n    player.appendChild(p);\r\n    console.log(p);\r\n\r\n    move(p);\r\n}\r\n\n\n//# sourceURL=webpack:///./app/barrage/barrage.js?");

/***/ }),

/***/ "./app/barrage/move.js":
/*!*****************************!*\
  !*** ./app/barrage/move.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = move;\r\n\r\nfunction move(p) {\r\n    p.style.left = (parseInt(p.style.left) - 50) + \"px\";\r\n    if(parseInt(p.style.left) <= -700){\r\n        setTimeout(function(){\r\n            removeElement(p);\r\n    },300);\r\n    }else{\r\n        setTimeout(function(){\r\n            move(p);\r\n        },300);\r\n    }\r\n}\r\n\r\nfunction removeElement(_element){\r\n    var _parentElement = _element.parentNode;\r\n    if(_parentElement){\r\n    _parentElement.removeChild(_element);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/barrage/move.js?");

/***/ }),

/***/ "./app/control/fullscreen_switch.js":
/*!******************************************!*\
  !*** ./app/control/fullscreen_switch.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function toFullVideo(videoDom) {\r\n    if (videoDom.requestFullscreen) {\r\n        return videoDom.requestFullscreen();\r\n    } else if (videoDom.webkitRequestFullScreen) {\r\n        return videoDom.webkitRequestFullScreen();\r\n    } else if (videoDom.mozRequestFullScreen) {\r\n        return videoDom.mozRequestFullScreen();\r\n    } else {\r\n        return videoDom.msRequestFullscreen();\r\n    }\r\n}//兼容封装\r\nfunction ExitFullVideo(va) {\r\n    if (document.exitFullscreen) {\r\n        document.exitFullscreen();\r\n    } else if (document.msExitFullscreen) {\r\n        document.msExitFullscreen();\r\n    } else if (document.mozCancelFullScreen) {\r\n        document.mozCancelFullScreen();\r\n    } else if (document.webkitExitFullscreen) {\r\n        document.webkitExitFullscreen();\r\n    }\r\n}\r\n\r\nmodule.exports = function (button, div) {\r\n    window.fullscreen = false;\r\n    div.addEventListener(\"fullscreenchange\", function(){\r\n        if(window.fullscreen){\r\n            window.fullscreen = false;\r\n        }else{\r\n            window.fullscreen = true;\r\n        }\r\n    })\r\n    button.addEventListener(\"click\", function () {\r\n        if (window.fullscreen) {\r\n            ExitFullVideo(div);\r\n        }else{\r\n            toFullVideo(div);\r\n        }\r\n    })\r\n    div.addEventListener(\"dblclick\", function () {\r\n        while(window.timeout.length)\r\n            clearTimeout(window.timeout.pop());\r\n        if(window.fullscreen){\r\n            ExitFullVideo(div);\r\n        }else{\r\n            toFullVideo(div);\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/fullscreen_switch.js?");

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

eval("module.exports = function(ele, video){\r\n    window.timeout = new Array();\r\n    ele.addEventListener('click', function(){\r\n    window.timeout.push(setTimeout(function(){\r\n        if(video.paused){\r\n            video.play();\r\n        }else{\r\n            video.pause();\r\n        }},200)\r\n    )})\r\n}\r\n\n\n//# sourceURL=webpack:///./app/control/play_switch.js?");

/***/ }),

/***/ "./app/control/progress.js":
/*!*********************************!*\
  !*** ./app/control/progress.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video){\r\n    let index = 0;\r\n    const played = document.querySelector(\"#played\");\r\n    const non_played = document.querySelector(\"#non_played\");\r\n    const progress = document.querySelector(\"#progress\");\r\n    document.querySelector(\"#bar\").ondrag = function(event){\r\n        window.time = false;\r\n        const duration = video.duration;\r\n        video.pause();\r\n        let d = 0;\r\n        if(index == 0||event.clientX == 0)\r\n            d = 0;\r\n        else{\r\n            d = event.clientX - index;\r\n        let rate = d;\r\n        console.log(rate);\r\n        if(played.clientWidth + rate <= progress.clientWidth && played.clientWidth + rate >= 0){\r\n            video.currentTime = duration*(played.clientWidth + rate)/progress.clientWidth;\r\n            console.log(\"1\" + played.clientWidth/progress.clientWidth);\r\n            played.style.width = (played.clientWidth + rate) + \"px\";\r\n            console.log(\"3\" + played.clientWidth + rate);\r\n            console.log(\"2\" + played.clientWidth);\r\n            non_played.style.width= (non_played.clientWidth - rate) + \"px\";\r\n        }else{\r\n            video.currentTime = duration;\r\n            played.setAttribute(\"style\", \"width: 100%\");\r\n            non_played.setAttribute(\"style\", \"width: 0%\");\r\n            }\r\n        }\r\n        index = event.clientX;\r\n    }\r\n    document.querySelector(\"#bar\").ondragend = function(){\r\n        window.time = true;\r\n        video.play()\r\n    }\r\n    document.querySelector(\"#progress\").onclick = function(event){\r\n        rate = (event.clientX - ClientLeft(progress))/progress.clientWidth>1?1:(event.clientX - ClientLeft(progress))/progress.clientWidth;\r\n        video.currentTime = duration*rate;\r\n        played.setAttribute(\"style\", \"width: \" + rate*0.995 + \"%\");\r\n        non_played.setAttribute(\"style\", \"width: \" + rate*0.995 + \"%\");\r\n    }\r\n}\r\n\r\nfunction ClientLeft(element){\r\n    let left = 0;\r\n    while(element != document.body){\r\n        left += element.offsetLeft;\r\n        element = element.parentNode;\r\n    }\r\n    return left;\r\n}\n\n//# sourceURL=webpack:///./app/control/progress.js?");

/***/ }),

/***/ "./app/control/rate.js":
/*!*****************************!*\
  !*** ./app/control/rate.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(button, video){\r\n    window.rate = 1;\r\n    button.innerHTML = window.rate;\r\n    let speedlist = [0.5, 1, 1.25, 1.5, 2];\r\n    button.addEventListener(\"click\", function(){\r\n        let i = speedlist.indexOf(window.rate);\r\n        i = i==4?0:i+1;\r\n        window.rate = speedlist[i];\r\n        video.playbackRate = window.rate;\r\n        button.innerHTML = window.rate;\r\n    })\r\n}\n\n//# sourceURL=webpack:///./app/control/rate.js?");

/***/ }),

/***/ "./app/control/time.js":
/*!*****************************!*\
  !*** ./app/control/time.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function convert(time){\r\n    let second = parseInt(time%60);\r\n    time = parseInt(time/60);\r\n    let minute = time%60;\r\n    time = parseInt(time/60);\r\n    let hour = time%60;\r\n    return hour?hour + \":\" + minute + \":\" + second:minute + \":\" + second;\r\n}\r\n\r\nmodule.exports = function check(video){\r\n    const time = document.querySelector(\"#time\");\r\n    duration = video.duration;\r\n    setTimeout(function(){\r\n        if(window.time){\r\n            let played = document.querySelector(\"#played\");\r\n            let non_played = document.querySelector(\"#non_played\");\r\n            time.innerHTML = convert(video.currentTime) + \"/\" + convert(video.duration);\r\n            played.setAttribute(\"style\", \"width: \" + (video.currentTime / video.duration)*99.5 + \"%\");\r\n            non_played.setAttribute(\"style\", \"width: \" + ((duration - video.currentTime) / duration)*99.5 + \"%\");\r\n        }\r\n        check(video);\r\n    },500);\r\n}\n\n//# sourceURL=webpack:///./app/control/time.js?");

/***/ }),

/***/ "./app/control/volume_change.js":
/*!**************************************!*\
  !*** ./app/control/volume_change.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(video){\r\n    let index = 0\r\n    document.querySelector(\"#slider\").ondrag = function(event){\r\n        let d;\r\n        if(index != 0)\r\n            d = -(event.clientX - index);\r\n        else\r\n            d = 0;\r\n        console.log(d);\r\n        const slid1 = document.querySelector(\"#slid1\");\r\n        const slid2 = document.querySelector(\"#slid2\");\r\n        if(slid2.clientWidth + d <= 100 && slid2.clientWidth + d >= 0){\r\n            video.volume = (slid1.clientWidth - d)/100;\r\n            slid2.setAttribute(\"style\", \"width: \" + (slid2.clientWidth + d) + \"px\");\r\n            slid1.setAttribute(\"style\", \"width: \" + (slid1.clientWidth - d) + \"px\");\r\n        }else if(slid2.clientWidth + d > 100){\r\n            video.volume = (slid1.clientWidth - d)/100;\r\n            slid2.setAttribute(\"style\", \"width: 100px\");\r\n            slid1.setAttribute(\"style\", \"width: 0px\");\r\n            }\r\n        index = event.clientX;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/control/volume_change.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const init = __webpack_require__(/*! ./public/Init */ \"./app/public/Init.js\")\r\ninit();\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ "./app/public/Init.js":
/*!****************************!*\
  !*** ./app/public/Init.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const play_switch = __webpack_require__(/*! ../control/play_switch */ \"./app/control/play_switch.js\");\r\nconst construct = __webpack_require__(/*! ./construct */ \"./app/public/construct.js\")\r\nconst mute_switch = __webpack_require__(/*! ../control/mute_switch */ \"./app/control/mute_switch.js\")\r\nconst volume_change = __webpack_require__(/*! ../control/volume_change */ \"./app/control/volume_change.js\");\r\nconst fullscreen_switch = __webpack_require__(/*! ../control/fullscreen_switch */ \"./app/control/fullscreen_switch.js\");\r\nconst rate_switch = __webpack_require__(/*! ../control/rate */ \"./app/control/rate.js\");\r\nconst progress = __webpack_require__(/*! ../control/progress */ \"./app/control/progress.js\");\r\nconst time = __webpack_require__(/*! ../control/time */ \"./app/control/time.js\");\r\nconst barrage = __webpack_require__(/*! ../barrage/barrage */ \"./app/barrage/barrage.js\");\r\n\r\n\r\n\r\nmodule.exports = function(){\r\n    window.time =true;\r\n    let video = document.querySelector(\"video\");\r\n    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方\r\n    let play_button = document.querySelector(\"#play\");\r\n    let player = document.querySelector(\"#player\");\r\n    let fullscreen = document.querySelector(\"#fullscreen\");\r\n    let clicklist = [video, play_button];\r\n    let rate = document.querySelector(\"#rate\");\r\n\r\n    for(let i = 0; i < clicklist.length;i++){\r\n        play_switch(clicklist[i], video)//播放与暂停监听\r\n    }\r\n    mute_switch(document.querySelector(\"#volume\"), video);//静音点击监听\r\n    volume_change(video);//声音变大变小监听\r\n    fullscreen_switch(fullscreen, player);//全屏切换监听\r\n    rate_switch(rate, video);//视频倍率调节\r\n    progress(video);//视频进度调节\r\n    time(video);//视频当前播放时间获取\r\n    barrage(player);\r\n}\n\n//# sourceURL=webpack:///./app/public/Init.js?");

/***/ }),

/***/ "./app/public/construct.js":
/*!*********************************!*\
  !*** ./app/public/construct.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n    let control = document.createElement(\"div\");\r\n    control.className = \"control\";\r\n\r\n\r\n    let progress = document.createElement(\"div\");\r\n    progress.setAttribute(\"id\", \"progress\");\r\n    let played = document.createElement(\"div\");\r\n    played.setAttribute(\"id\", \"played\");\r\n    let non_played = document.createElement(\"div\")\r\n    non_played.setAttribute(\"id\", \"non_played\");\r\n    let bar = document.createElement(\"div\")\r\n    bar.setAttribute(\"id\", \"bar\");\r\n    bar.setAttribute(\"draggable\", true);\r\n    progress.appendChild(played);\r\n    progress.appendChild(bar);\r\n    progress.appendChild(non_played);\r\n\r\n\r\n    let play = document.createElement(\"button\");\r\n    play.setAttribute(\"id\", \"play\");\r\n    play.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-116\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z\" id=\"ytp-id-116\"></path></svg>'\r\n\r\n\r\n    let rate = document.createElement(\"button\");\r\n    rate.setAttribute(\"id\", \"rate\");\r\n\r\n\r\n    let fullscreen = document.createElement(\"button\");\r\n    fullscreen.setAttribute(\"id\", \"fullscreen\");\r\n    fullscreen.innerHTML='<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><g class=\"ytp-fullscreen-button-corner-0\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-27\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z\" id=\"ytp-id-27\"></path></g><g class=\"ytp-fullscreen-button-corner-1\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-28\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z\" id=\"ytp-id-28\"></path></g><g class=\"ytp-fullscreen-button-corner-2\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-29\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z\" id=\"ytp-id-29\"></path></g><g class=\"ytp-fullscreen-button-corner-3\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-30\"></use><path class=\"ytp-svg-fill\" fill=\"#fff\" d=\"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z\" id=\"ytp-id-30\"></path></g></svg>';\r\n\r\n\r\n    let time = document.createElement(\"p\");\r\n    time.setAttribute(\"id\", \"time\");\r\n\r\n    let volume = document.createElement(\"button\");\r\n    volume.innerHTML = '<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 36 36\" width=\"100%\"><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-17\"></use><use class=\"ytp-svg-shadow\" xlink:href=\"#ytp-id-18\"></use><defs><clipPath id=\"ytp-svg-volume-animation-mask\"><path d=\"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z\"></path><path d=\"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z\"></path><path class=\"ytp-svg-volume-animation-mover\" d=\"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z\" transform=\"translate(0, 0)\"></path></clipPath><clipPath id=\"ytp-svg-volume-animation-slash-mask\"><path class=\"ytp-svg-volume-animation-mover\" d=\"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z\" transform=\"translate(0, 0)\"></path></clipPath></defs><path class=\"ytp-svg-fill ytp-svg-volume-animation-speaker\" clip-path=\"url(#ytp-svg-volume-animation-mask)\" d=\"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z\" fill=\"#fff\" id=\"ytp-id-17\"></path><path class=\"ytp-svg-fill ytp-svg-volume-animation-hider\" clip-path=\"url(#ytp-svg-volume-animation-slash-mask)\" d=\"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z\" fill=\"#fff\" id=\"ytp-id-18\" style=\"display: none;\"></path></svg>';\r\n    volume.setAttribute(\"id\", \"volume\");\r\n    let div = document.createElement(\"div\");\r\n    div.setAttribute(\"id\", \"leng\");\r\n    let slider = document.createElement(\"div\");\r\n    slider.setAttribute(\"id\", \"slider\");\r\n    slider.setAttribute(\"draggable\", true);\r\n    let slid1 = document.createElement(\"div\");\r\n    slid1.setAttribute(\"id\", \"slid1\");\r\n    let slid2 = document.createElement(\"div\");\r\n    slid2.setAttribute(\"id\", \"slid2\");\r\n    div.appendChild(slid1);\r\n    div.appendChild(slider);\r\n    div.appendChild(slid2);\r\n    volume.appendChild(div);\r\n\r\n\r\n    let barrage = document.createElement(\"div\");\r\n    barrage.setAttribute(\"id\", \"barrage\");\r\n    let input = document.createElement(\"input\");\r\n    input.setAttribute(\"id\", \"input\");\r\n    let send = document.createElement(\"button\");\r\n    send.setAttribute(\"id\", \"send\");\r\n    send.innerHTML=\"发送弹幕\";\r\n    barrage.appendChild(input);\r\n    barrage.appendChild(send);\r\n\r\n    components = [progress, play, volume, time, barrage, fullscreen, rate];\r\n    for(let i = 0;i < components.length; i++){\r\n        control.appendChild(components[i])\r\n    }\r\n    return control;\r\n}\n\n//# sourceURL=webpack:///./app/public/construct.js?");

/***/ })

/******/ });