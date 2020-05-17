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
function ExitFullVideo(va) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

module.exports = function (button, div) {
    window.fullscreen = false;
    div.addEventListener("fullscreenchange", function(){
        if(window.fullscreen){
            window.fullscreen = false;
        }else{
            window.fullscreen = true;
        }
    })
    button.addEventListener("click", function () {
        if (window.fullscreen) {
            ExitFullVideo(div);
        }else{
            toFullVideo(div);
        }
    })
    div.addEventListener("dblclick", function () {
        while(window.timeout.length)
            clearTimeout(window.timeout.pop());
        if(window.fullscreen){
            ExitFullVideo(div);
        }else{
            toFullVideo(div);
        }
    })
}