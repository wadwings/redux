const move = require("./move");

module.exports = function(player){
    var btn = document.getElementById("send");
    btn.onclick = function () {
        addBarrage(player);
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
    let clientWidth = player.clientWidth;
    p.style.fontSize = (40-text.length > 20 ?40-text.length:20) + "px";
    p.innerHTML = text;
    p.style.position = "absolute";
    p.style.color = colors[index];
    p.style.top = (top - 45) + "px";
    p.style.left = (clientWidth + text.length*parseInt(p.style.fontSize)/2) + "px";
    p.style.transition = "0.3s linear";
    player.appendChild(p);
    console.log(p);

    move(p);
}
