const play_switch = require("./play_switch");
const construct = require("./construct")
const mute_switch = require("./mute_switch")
const volume_change = require("./volume_change");

function Init(){
    let video = document.querySelector("video");
    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方

    let play_button = document.querySelector("#play");
    let clicklist = [video, play_button];
    for(let i = 0; i < clicklist.length;i++){
        play_switch(clicklist[i], video)//点击切换播放
    }

    mute_switch(document.querySelector("#volume"), video);
    volume_change(video);
}

module.exports = Init;