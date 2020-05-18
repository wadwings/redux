const remove = require("./public/remove_ele");
const init = require("./public/Init");

class mediaPlayer{
    constructor(rootDom, source, width, height, volume, barrage, floatWin){
        const player = document.createElement("div");
        player.id = "player";
        const video = document.createElement("video");
        video.id = "video";
        video.src = source;
        player.appendChild(video);
        rootDom.appendChild(player);
        player.style.width = width;
        player.style.height = height;
        video.volume = volume;
        window.barrage = barrage;
        window.window_able = floatWin;
        init();
    }
}

let i = new mediaPlayer(document.body, "../12.mp4", "1080px", "640px", "1", true, true);