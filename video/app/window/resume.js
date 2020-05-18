const remove = require("../public/remove_ele");

module.exports = function(player){
    if(!window.window_lock){
        const control = document.querySelector(".control");
        control.style.visibility = "visible";
        player.style.width = "1080px";
        player.style.height = "640px";
        player.style.position = "relative";
        player.style.bottom = "0";
        player.style.right = "0";
        if(document.querySelector("#shutdown"))
            remove(document.querySelector("#shutdown"))
    }
}