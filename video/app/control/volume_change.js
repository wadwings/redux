module.exports = function(video){
    let index = 0
    document.querySelector("#slider").ondrag = function(event){
        let d;
        if(index != 0&&event.clientX != 0)
            d = -(event.clientX - index);
        else
            d = 0;
        console.log(d);
        const slid1 = document.querySelector("#slid1");
        const slid2 = document.querySelector("#slid2");
        if(slid2.clientWidth + d <= 100 && slid2.clientWidth + d >= 0){
            video.volume = (slid1.clientWidth - d)/100;
            slid2.setAttribute("style", "width: " + (slid2.clientWidth + d) + "px");
            slid1.setAttribute("style", "width: " + (slid1.clientWidth - d) + "px");
        }else if(slid2.clientWidth + d > 100){
            video.volume = 0;
            slid2.setAttribute("style", "width: 100px");
            slid1.setAttribute("style", "width: 0px");
        }else{
            video.volume = 1;
            slid2.setAttribute("style", "width: 0px");
            slid1.setAttribute("style", "width: 100px");
        }
        index = event.clientX;
    }
    const volume = document.querySelector("#volume");
    const leng = document.querySelector("#leng");
    const time = document.querySelector("#time");
    volume.onmouseover = function(){
        leng.style.opacity = 0.5;
        time.style.left = "120px";
    }
    volume.onmouseout = function(){
        leng.style.opacity = 0;
        time.style.left = "0";
    }
}