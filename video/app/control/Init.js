const play_switch = require("./play_switch");
const construct = require("./construct")
const mute_switch = require("./mute_switch")
const volume_change = require("./volume_change");
const fullscreen_switch = require("./fullscreen_switch");

module.exports = function(){
    let video = document.querySelector("video");
    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方
    let play_button = document.querySelector("#play");
    let player = document.querySelector("#player");
    let fullscreen = document.querySelector("#fullscreen");
    let clicklist = [video, play_button];


    for(let i = 0; i < clicklist.length;i++){
        play_switch(clicklist[i], video)//播放与暂停监听
    }
    mute_switch(document.querySelector("#volume"), video);//静音点击监听
    volume_change(video);//声音变大变小监听
    fullscreen_switch(fullscreen, player);//全屏切换监听
}