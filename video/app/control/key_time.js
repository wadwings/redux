module.exports = function(video, time){
    if(video.currentTime + time > 0)
        return video.currentTime += time;
    else if(video.currentTime + time > video.duration)
        return video.currentTime = video.duration;
    else
        return video.currentTime = 0;
}