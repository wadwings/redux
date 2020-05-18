const resume = require("./resume");


module.exports = function(player){
    console.log("window");
    const control = document.querySelector(".control");
    control.style.visibility = "hidden";
    player.style.width = "480px";
    player.style.height = "320px";
    player.style.position = "fixed";
    if(!player.style.bottom)
        player.style.bottom = "0";
    if(!player.style.right)
        player.style.right = "0";
    if(!document.querySelector("#shutdown")){
        let shutdown = document.createElement("button");
        shutdown.onmouseover = function(){
            shutdown.style.opacity = "0.5";
        }
        shutdown.onmouseout = function(){
            shutdown.style.opacity = "0";
        }
        shutdown.style.position = "absolute";
        shutdown.style.top = "0px";
        shutdown.style.left = "0";
        shutdown.style.outline = "none";
        shutdown.style.backgroundColor = "rgba(255,255,255,0.4)";
        shutdown.style.width = "30px";
        shutdown.style.height = "30px";
        shutdown.style.padding = "0";
        shutdown.style.border = "0";
        shutdown.style.zIndex = "100";
        shutdown.style.cursor = "pointer";
        shutdown.style.opacity = "0";
        shutdown.style.transition = "0.3s";
        shutdown.innerHTML = "X";
        shutdown.style.fontSize = "20px";
        shutdown.setAttribute("id", "shutdown");
        shutdown.onclick = function(){
            window.window_lock = false;
            resume(player);
            window.window_able = false;
        }
        player.appendChild(shutdown);
    }
}
