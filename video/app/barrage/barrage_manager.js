const addBarrage = require("./barrage_send");
const load_barrage = require("./barrage_from_server");
const switcher = require("./barrage_switch");



module.exports = function(player){
    window.barrage = true;
    var btn = document.getElementById("send");
    load_barrage();
    btn.onclick = function () {
        addBarrage(player);
    };
    switcher(document.querySelector("#barrage_switch"));
    switcher(document.querySelector("#circur"));
}



