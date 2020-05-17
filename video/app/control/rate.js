module.exports = function(button, video){
    window.rate = 1;
    button.innerHTML = window.rate;
    let speedlist = [0.5, 1, 1.25, 1.5, 2];
    button.addEventListener("click", function(){
        let i = speedlist.indexOf(window.rate);
        i = i==4?0:i+1;
        window.rate = speedlist[i];
        video.playbackRate = window.rate;
        button.innerHTML = window.rate;
    })
}