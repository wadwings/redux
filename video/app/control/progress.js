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
        if(index == 0||event.clientX == 0)
            d = 0;
        else{
            d = event.clientX - index;
        let rate = d;
        console.log(rate);
        if(played.clientWidth + rate <= progress.clientWidth && played.clientWidth + rate >= 0){
            video.currentTime = duration*(played.clientWidth + rate)/progress.clientWidth;
            console.log("1" + played.clientWidth/progress.clientWidth);
            played.style.width = (played.clientWidth + rate) + "px";
            console.log("3" + played.clientWidth + rate);
            console.log("2" + played.clientWidth);
            non_played.style.width= (non_played.clientWidth - rate) + "px";
        }else if(played.clientWidth + rate > progress.clientWidth){
            video.currentTime = duration;
            played.setAttribute("style", "width: 100%");
            non_played.setAttribute("style", "width: 0%");
        }else{
            video.currentTime = 0;
            played.setAttribute("style", "width: 0%");
            non_played.setAttribute("style", "width: 100%");
        }
        }
        index = event.clientX;
    }
    document.querySelector("#bar").ondragend = function(){
        window.time = true;
        video.play()
    }
    document.querySelector("#progress").onclick = function(event){
        rate = (event.clientX - ClientLeft(progress))/progress.clientWidth>1?1:(event.clientX - ClientLeft(progress))/progress.clientWidth;
        video.currentTime = duration*rate;
        played.setAttribute("style", "width: " + rate*0.995 + "%");
        non_played.setAttribute("style", "width: " + rate*0.995 + "%");
    }
}

function ClientLeft(element){
    let left = 0;
    while(element != document.body){
        left += element.offsetLeft;
        element = element.parentNode;
    }
    return left;
}