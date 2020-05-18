module.exports = function(button){
    console.log('1');
    button.onclick = function(){
        let circur = document.querySelector("#circur");
        window.barrage = window.barrage?false:true;
        if(window.barrage)
            circur.style.opacity = "0";
        else
            circur.style.opacity = "1";
    }
}