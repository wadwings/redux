module.exports = function(player, remove){
    let index = {
        x : 0,
        y : 0
    };
    console.log()
    document.querySelector("#player").ondrag = function move(event){
        if(player.style.position === "fixed"){
            let x;
            if(index.x != 0&&event.clientX != 0)
                x = event.clientX - index.x;
            else
                x = 0;
            console.log(x);
            let y;
            if(index.y != 0&&event.clientY != 0)
                y = event.clientY - index.y;
            else
                y = 0;
            console.log(y);
            player.style.bottom = (-y + parseInt(player.style.bottom)) + "px";
            player.style.right = (-x + parseInt(player.style.right)) + "px";
            index.x = event.clientX;
            index.y = event.clientY;
    }}
}

/*function move(event, index){
    let x;
    if(index.x != 0&&event.clientX != 0)
        x = event.clientX - index.x;
    else
        x = 0;
    console.log(x);
    let y;
    if(index.y != 0&&event.clientY != 0)
        y = event.clientY - index.y;
    else
        y = 0;
    console.log(y);
    player.style.bottom = (y + parseInt(player.style.bottom)) + "px";
    player.style.right = (x + parseInt(player.style.right)) + "px";
    index.x = event.clientX;
    index.y = event.clientY;
}*/