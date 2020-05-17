module.exports = function(ele, video){
    window.timeout = new Array();
    ele.addEventListener('click', function(){
    window.timeout.push(setTimeout(function(){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }},200)
    )})
}
