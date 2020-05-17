module.exports = function(video){
    let index = 0
    document.querySelector("#slider").ondrag = function(event){
        let d;
        if(index != 0)
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
            video.volume = (slid1.clientWidth - d)/100;
            slid2.setAttribute("style", "width: 100px");
            slid1.setAttribute("style", "width: 0px");
            }
        index = event.clientX;
    }
}