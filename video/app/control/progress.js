module.exports = function(video){
    let index = 0;
    const played = document.querySelector("#played");
    const non_played = document.querySelector("#non_played");
    const progress = document.querySelector("#progress");
    document.querySelector("#bar").ondrag = function(event){
        window.time = false;
        const duration = video.duration;
        video.pause();
        let d = 0;
        console.log(index);
        if(index == 0)
            d = 0;
        else{
            d = event.clientX - index;
        let rate = -(d/progress.clientWidth);
        if(played.clientWidth/progress.clientWidth + rate <= 99.5 && played.clientWidth/progress.clientWidth + rate >= 0){
            video.currentTime = duration*(played.clientWidth/progress.clientWidth + rate);
            played.setAttribute("style", "width: " + (played.clientWidth/progress.clientWidth + rate) + "%");
            non_played.setAttribute("style", "width: " + (non_played.clientWidth/progress.clientWidth - rate) + "%");
        }else{
            video.currentTime = duration;
            played.setAttribute("style", "width: 99.5%");
            non_played.setAttribute("style", "width: 0%");
            }
        }
        index = event.clientX;
    }
    document.querySelector("#bar").ondragend = function(){
        window.time = true;
        video.play()
    }
    document.querySelector("#progress").onclick = function(event){
        rate = (event.clientX - progress.offsetLeft)/progress.clientWidth>1?1:(event.clientX - progress.offsetLeft)/progress.clientWidth;
        video.currentTime = duration*rate;
        played.setAttribute("style", "width: " + rate*0.995 + "%");
        non_played.setAttribute("style", "width: " + rate*0.995 + "%");
    }
}