function convert(time){
    let second = parseInt(time%60);
    time = parseInt(time/60);
    let minute = time%60;
    time = parseInt(time/60);
    let hour = time%60;
    return hour?hour + ":" + minute + ":" + second:minute + ":" + second;
}

module.exports = function check(video){
    const time = document.querySelector("#time");
    duration = video.duration;
    setTimeout(function(){
        if(window.time){
            let played = document.querySelector("#played");
            let non_played = document.querySelector("#non_played");
            time.innerHTML = convert(video.currentTime) + "/" + convert(video.duration);
            played.setAttribute("style", "width: " + (video.currentTime / video.duration)*99.5 + "%");
            non_played.setAttribute("style", "width: " + ((duration - video.currentTime) / duration)*99.5 + "%");
        }
        check(video);
    },500);
}