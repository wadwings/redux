module.exports = function(ele, video){
    ele.addEventListener('click', function(){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
})}