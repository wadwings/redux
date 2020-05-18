module.exports = move;
const remove = require("../public/remove_ele");

function move(p) {
    p.style.left = (parseInt(p.style.left) - 50) + "px";
    if(parseInt(p.style.left) <= -700){
        setTimeout(function(){
            remove(p);
    },300);
    }else{
        setTimeout(function(){
            move(p);
        },300);
    }
}