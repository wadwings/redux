const video_time = require("../control/key_time");
const video_volume = require("../control/key_volume");
const addBarrage = require("../barrage/barrage_send");


module.exports = function (player) {
    player.onmouseover = function () {
        document.addEventListener("keydown", control)
    };
    player.onmouseout = function(){
        document.removeEventListener("keydown", control);
    }
};

function control(evt) {
    const player = document.querySelector("#player");
    const video = document.querySelector("video");
    let event = evt || window.event;
    if (event.keyCode == 13) {
        addBarrage(player);
    }else if(event.keyCode == 37){
        video_time(video, -5);
    }else if(event.keyCode == 39){
        video_time(video, 5);
    }else if(event.keyCode == 38){
        video_volume(video, 5);
    }else if(event.keyCode == 40){
        video_volume(video, -5);
    }
}