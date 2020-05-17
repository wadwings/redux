function toFullVideo(videoDom) {
    if (videoDom.requestFullscreen) {
        return videoDom.requestFullscreen();
    } else if (videoDom.webkitRequestFullScreen) {
        return videoDom.webkitRequestFullScreen();
    } else if (videoDom.mozRequestFullScreen) {
        return videoDom.mozRequestFullScreen();
    } else {
        return videoDom.msRequestFullscreen();
    }
}//兼容封装

function ExitFullVideo(videoDom) {
    if (videoDom.exitFullscreen) {
        return videoDom.exitFullscreen();
    } else if (videoDom.msExitFullscreen) {
        return videoDom.msExitFullscreen();
    } else if (videoDom.mozCancelFullScreen) {
        return videoDom.mozCancelFullScreen();
    } else if (videoDom.webkitCancelFullScreen) {
        return videoDom.webkitCancelFullScreen();
    }
}//兼容封装

module.exports = function (button, div) {
    let global = require("./global");
    div.addEventListener("fullscreenchange", function(){
        if(global.fullscreen){
            global.fullscreen = false;
        }else{
            global.fullscreen = true;
        }
    })
    button.addEventListener("click", function () {
        if (global.fullscreen) {
            ExitFullVideo(div);
        }else{
            toFullVideo(div);
        }
    })
    div.addEventListener("dblclick", function () {
        if(global.fullscreen){
            ExitFullVideo(div);
        }else{
            toFullVideo(div);
        }
    })
}