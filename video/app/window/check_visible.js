const ToWindow = require("./ToWindow");
const resume = require("./resume");
const move = require("./move");


module.exports = function(player, clientHeight, clientTop){
    if((clientTop + clientHeight < document.documentElement.scrollTop||clientTop - clientHeight > document.documentElement.scrollTop)&&window.window_able){
        move(player, false);
        ToWindow(player);
    }else{
        move(player, true);
        resume(player);
    }
}
