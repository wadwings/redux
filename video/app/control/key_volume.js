module.exports = function(video, volume){
    const slid1 = document.querySelector("#slid1");
    const slid2 = document.querySelector("#slid2");
    if(video.volume + volume/100 > 0){
        slid1.style.width = (slid1.clientWidth + volume) + "px";
        slid2.style.width = (slid2.clientWidth - volume) + "px";
        return video.volume += volume/100;
    }else if(video.volume + volume/100 > 1){
        slid1.style.width = "100px";
        slid2.style.width = "0px";
        return video.volume = 1;
    }else{
        slid1.style.width = "0px";
        slid2.style.width = "100px";
        return video.volume = 0;
    }
}