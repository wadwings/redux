module.exports = function(button, video){
    button.addEventListener("click", function(){
        if(video.muted){
            video.muted = false;
        }else{
            video.muted = true;
        }
    })
}