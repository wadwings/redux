module.exports = move;

function move(p) {
    p.style.left = (parseInt(p.style.left) - 50) + "px";
    if(parseInt(p.style.left) <= -700){
        setTimeout(function(){
            removeElement(p);
    },300);
    }else{
        setTimeout(function(){
            move(p);
        },300);
    }
}

function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
    _parentElement.removeChild(_element);
    }
}