module.exports = function() {
    let control = document.createElement("div");
    control.className = "control";


    let progress = document.createElement("div");
    progress.setAttribute("id", "progress");
    let played = document.createElement("div");
    played.setAttribute("id", "played");
    let non_played = document.createElement("div")
    non_played.setAttribute("id", "non_played");
    let bar = document.createElement("div")
    bar.setAttribute("id", "bar");
    bar.setAttribute("draggable", true);
    progress.appendChild(played);
    progress.appendChild(bar);
    progress.appendChild(non_played);


    let play = document.createElement("button");
    play.setAttribute("id", "play");
    play.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-116"></use><path class="ytp-svg-fill" fill="#fff" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-116"></path></svg>'

    let rate = document.createElement("button");
    rate.setAttribute("id", "rate");

    let video_window = document.createElement("button");
    video_window.setAttribute("id", "window");
    video_window.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-23"></use><path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#fff" id="ytp-id-23"></path></svg>';



    let fullscreen = document.createElement("button");
    fullscreen.setAttribute("id", "fullscreen");
    fullscreen.innerHTML='<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-27"></use><path class="ytp-svg-fill" fill="#fff" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-27"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-28"></use><path class="ytp-svg-fill" fill="#fff" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-28"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-29"></use><path class="ytp-svg-fill" fill="#fff" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-29"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-30"></use><path class="ytp-svg-fill" fill="#fff" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-30"></path></g></svg>';


    let time = document.createElement("p");
    time.setAttribute("id", "time");

    let volume = document.createElement("button");
    volume.innerHTML = '<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-17"></use><use class="ytp-svg-shadow" xlink:href="#ytp-id-18"></use><defs><clipPath id="ytp-svg-volume-animation-mask"><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path class="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path></clipPath><clipPath id="ytp-svg-volume-animation-slash-mask"><path class="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="ytp-svg-fill ytp-svg-volume-animation-speaker" clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-id-17"></path><path class="ytp-svg-fill ytp-svg-volume-animation-hider" clip-path="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-18" style="display: none;"></path></svg>';
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


    let barrage = document.createElement("div");
    barrage.setAttribute("id", "barrage");
    let input = document.createElement("input");
    input.setAttribute("id", "input");
    let send = document.createElement("button");
    send.setAttribute("id", "send");
    send.innerHTML="发送弹幕";
    barrage.appendChild(input);
    barrage.appendChild(send);
    let barrage_switch = document.createElement("div");
    barrage_switch.setAttribute("id", "barrage_switch");
    barrage.appendChild(barrage_switch);
    let circur = document.createElement("div");
    circur.setAttribute("id", "circur");
    barrage.appendChild(circur);

    components = [progress, play, volume, time, barrage, fullscreen, video_window, rate];
    for(let i = 0;i < components.length; i++){
        control.appendChild(components[i])
    }
    return control;
}