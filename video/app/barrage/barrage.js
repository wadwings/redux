const move = require("./move");

module.exports = function(player){
    var btn = document.getElementById("send");
    btn.onclick = function () {
        addBarrage(player);
    };
    document.onkeydown = function (evt) {
        var event = evt || window.event;
        if (event.keyCode == 13) {
            addBarrage(player);
        }
    };
}


function addBarrage(player) {
    const colors = ["#2C3E50","#FF0000","#1E87F0","#7AC84B","#FF7F00","#9B39F4","#FF69B4",]; //弹幕颜色库
    let text = document.getElementById("input").value;
    document.getElementById("input").value = "";
    let index = parseInt(Math.random() * colors.length); //随机弹幕颜色
    let p = document.createElement("p");
    let clientHeight = player.clientHeight - 45;
    let top = new Date()%clientHeight;
    let clientWidth = player.clientWidth + player.offsetLeft;
    p.innerHTML = text;
    p.style.position = "absolute";
    p.style.fontSize = "15px";
    p.style.color = colors[index];
    p.style.top = top + "px";
    p.style.left = clientWidth + "px";
    p.style.transition = "0.3s linear";
    player.appendChild(p);
    console.log(p);

    move(p);
}
