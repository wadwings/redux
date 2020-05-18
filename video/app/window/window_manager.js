const check_visible = require("./check_visible");
const ToWindow = require("./ToWindow");


module.exports = function(player){
    window.window_able = true;
    window.window_lock = false;
    const clientHeight = parseInt(player.style.height);
    const clientTop = OffTop(player);
    console.log(clientHeight);
    console.log(clientTop);
    check_visible(player, clientHeight, clientTop);
    document.body.addEventListener("wheel",function(){
        console.log("1");
        setTimeout(check_visible(player, clientHeight, clientTop), 100);
    });
    document.querySelector("#window").onclick = function(){
        window.window_able = true;
        window.window_lock = true;
        ToWindow(player);
    }
}

function OffTop(element){
    let top = 0;
    while(element != document.body){
        top += element.offsetTop;
        element = element.parentNode;
    }
    return top;
}