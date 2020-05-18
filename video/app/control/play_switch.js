module.exports = function(ele, video){
    const play = document.querySelector("#play");
    window.timeout = new Array();
    ele.addEventListener('click', function(){
    window.timeout.push(setTimeout(function(){
        if(video.paused){
            video.play();
            play.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-67"></use><path class="ytp-svg-fill" fill="#fff" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-67"></path></svg>'
        }else{
            video.pause();
            play.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-116"></use><path class="ytp-svg-fill" fill="#fff" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-116"></path></svg>'
        }},200)
    )})
}
