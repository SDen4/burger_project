const vid = document.querySelector(".video");
const playerStart = document.querySelector(".player__start");
const playerPaused = document.querySelector(".player__pause");
const playerVolume = document.querySelector(".player__volume");
const playerMute = document.querySelector(".player__mute");
const scrollDur = document.querySelector(".player__scroll_duration");
const bigWwiteBtn = document.querySelector(".video__big-button");


playerStart.addEventListener('click', function() {
    vid.play();
    playerPaused.classList.add('player__pause_active');
    playerStart.classList.add('player__start_unactive');
    bigWwiteBtn.classList.add('player__start_unactive');

    interval = setInterval(function() {
        let durPercent = (vid.currentTime / vid.duration) * 100;
        scrollDur.style.left = `${durPercent}%`;
    }, 1000);
});

playerPaused.addEventListener('click', function() {
    vid.pause();
    playerStart.classList.remove('player__start_unactive');
    playerPaused.classList.remove('player__pause_active');
    bigWwiteBtn.classList.remove('player__start_unactive');
});

bigWwiteBtn.addEventListener('click', function() {
    vid.play();
    playerPaused.classList.add('player__pause_active');
    playerStart.classList.add('player__start_unactive');
    bigWwiteBtn.classList.add('player__start_unactive');

    interval = setInterval(function() {
        let durPercent = (vid.currentTime / vid.duration) * 100;
        scrollDur.style.left = `${durPercent}%`;
    }, 1000);
});


playerVolume.addEventListener('click', function() {
    vid.muted = true;
    playerMute.classList.add('player__mute_active');
});

playerMute.addEventListener('click', function() {
    vid.muted = false;
    playerMute.classList.remove('player__mute_active');
});



const lenghtlVal = document.querySelector(".player__volume-duration");
const scrollVal = document.querySelector(".player__scroll_volume");
let coords = {};
vid.volume = 1;


const measureElem = (elem, event) => {
    const measures = elem.getBoundingClientRect();

    return {
        offsetTop: measures.top,
        offsetLeft: measures.left,
        width: measures.width,
        clickedX: event.layerX
    }
}

const setupMeasures = e => {
    lenghtlVal.classList.add('allow');

    coords.line = measureElem(lenghtlVal, e);
    coords.btn = measureElem(scrollVal, e);
}

const checkEdges = (btn, line) => {
    var x = btn.x;

    if (x<0) x = 0;

    if (x>line.width - btn.width) {
        x = line.width - btn.width
    };

    scrollVal.style.left = `${x}px`;

    let maxVolume = line.width - btn.width;
    let curVolume = x;

    vid.volume = curVolume/maxVolume;
};

const setupBlockPos = e => {
    if(!lenghtlVal.classList.contains('allow')) return;

    var {line, btn} = coords;
    btn.x = e.pageX - line.offsetLeft - btn.clickedX;

    checkEdges (btn, line);
};

scrollVal.addEventListener('mousedown', setupMeasures);
document.addEventListener('mousemove', setupBlockPos);
document.addEventListener('mouseup', e=> {
    lenghtlVal.classList.remove('allow');
});