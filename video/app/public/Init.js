const play_switch = require("../control/play_switch");
const construct = require("./construct")
const mute_switch = require("../control/mute_switch")
const volume_change = require("../control/volume_change");
const fullscreen_switch = require("../control/fullscreen_switch");
const rate_switch = require("../control/rate");
const progress = require("../control/progress");
const time = require("../control/sync");
const barrage = require("../barrage/barrage_manager");
const key_down = require("./keydown");
const video_window = require("../window/window_manager");


module.exports = function(){
    window.time =true;
    let video = document.querySelector("video");
    video.parentNode.appendChild(construct());//将播放组件添加到播放器下方
    let play_button = document.querySelector("#play");
    let player = document.querySelector("#player");
    console.log(player);
    console.log(player.style.height);
    let fullscreen = document.querySelector("#fullscreen");
    let clicklist = [video, play_button];
    let rate = document.querySelector("#rate");

    for(let i = 0; i < clicklist.length;i++){
        play_switch(clicklist[i], video)//播放与暂停监听
    }
    mute_switch(document.querySelector("#volume"), video);//静音点击监听
    volume_change(video);//声音变大变小监听
    fullscreen_switch(fullscreen, player);//全屏切换监听
    rate_switch(rate, video);//视频倍率调节
    progress(video);//视频进度调节
    time(video);//视频当前播放时间获取
    barrage(player);
    key_down(player);
    video_window(player);
}