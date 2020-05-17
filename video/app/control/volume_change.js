module.exports = function(video){
    let index = 0
    document.querySelector("#slider").ondrag = function(event){
        let d;
        if(index != 0)
            d = event.clientY - index;
        else
            d = 0;
        const slid1 = document.querySelector("#slid1");
        const slid2 = document.querySelector("#slid2");
        if(slid1.clientHeight + d <= 100 && slid1.clientHeight + d >= 0){
            video.volume = (slid2.clientHeight - d)/100;
            slid1.setAttribute("style", "height: " + (slid1.clientHeight + d) + "px");
            slid2.setAttribute("style", "height: " + (slid2.clientHeight - d) + "px");
        }else if(slid1.clientHeight + d > 100){
            video.volume = (slid2.clientHeight - d)/100;
            slid1.setAttribute("style", "height: 100px");
            slid2.setAttribute("style", "height: 0px");
            }
        index = event.clientY;
    }
}