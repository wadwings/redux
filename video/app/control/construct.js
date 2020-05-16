module.exports = function() {
    let control = document.createElement("div");
    control.className = "control";


    let progress = document.createElement("progress");
    progress.setAttribute("value", 0);
    progress.setAttribute("max", 100);
    progress.setAttribute("id", "progress");


    let play = document.createElement("button");
    play.setAttribute("id", "play");


    let rate = document.createElement("button");
    rate.setAttribute("id", "rate");


    let fullscreen = document.createElement("button");
    fullscreen.setAttribute("id", "fullscreen");


    let volume = document.createElement("button");
    volume.setAttribute("id", "volume");
    let div = document.createElement("div");
    div.setAttribute("id", "leng");
    let slider = document.createElement("div");
    slider.setAttribute("id", "slider");
    slider.setAttribute("draggable", true);
    let slid1 = document.createElement("div");
    slid1.setAttribute("id", "slid1");
    let slid2 = document.createElement("div");
    slid2.setAttribute("id", "slid2");
    div.appendChild(slid1);
    div.appendChild(slider);
    div.appendChild(slid2);
    volume.appendChild(div);


    components = [progress, play, rate, fullscreen, volume];
    for(let i = 0;i < components.length; i++){
        control.appendChild(components[i])
    }
    return control;
}