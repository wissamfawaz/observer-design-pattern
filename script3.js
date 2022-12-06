// pomodoro timer with sounds
/* CHANGE TABS */

const clock = document.getElementsByClassName('clockbox');
const sound = document.getElementsByClassName('sound');

displayPage(clock);

function displayPage(page){
    page[0].style.display = 'flex';
}

const btnclock1 = document.getElementById('goclock1');
const btnclock2 = document.getElementById('goclock2');
const btnsound1 = document.getElementById('gosd1');
const btnsound2 = document.getElementById('gosd2');

btnclock1.addEventListener('click', function(){
    displayPage(clock)
    sound[0].style.display = 'none';
});
btnclock2.addEventListener('click', function(){
    displayPage(clock)
    sound[0].style.display = 'none';
});


btnsound1.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
});
btnsound2.addEventListener('click', function(){
    displayPage(sound)
    clock[0].style.display = 'none';
});



/* COUNTDOWN TIMERS */
let end = false;
function startTimer(duration, display, state) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        if(!state) {
            document.getElementById('alarm').src = "";
            document.getElementById('sb').addEventListener('click', function (){
                timer = (60 * 5), minutes, seconds;
            })
            document.getElementById('lb').addEventListener('click', function (){
                timer = (60 * 15), minutes, seconds;
            })

            document.getElementById('pause').addEventListener('click', function (){
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('continue').style.display = 'block'
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('play').style.margin = "13.5rem 0 0 4.5rem"
            })
            document.getElementById('continue').addEventListener('click', function (){
                state = false;
                document.getElementById('play').style.display = 'none'
                document.getElementById('continue').style.display = 'none'
                document.getElementById('pause').style.display = 'block'
            })
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                state = true;
                document.getElementById('image').src = "reload.png";
                document.getElementById('play').style.display = 'block'
                document.getElementById('pause').style.display = 'none'
                document.getElementById('alarm').src = "sound/alarm.wav";
            }
        }
    }, 1000);
}

let state = false;
document.getElementById('play').addEventListener('click', function (){
    state = false;
    let countMinutes = 60 * 25,
        display = document.querySelector('#time');
    startTimer(countMinutes, display, state);
    document.getElementById('continue').style.display = 'none'
    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
})

/* SOUND */

document.getElementById('rain').addEventListener('click', function (){
    document.getElementById('audio').src = "rain.mp3";
})
document.getElementById('piano').addEventListener('click', function (){
    document.getElementById('audio').src = "piano.mp3";
})
document.getElementById('waves').addEventListener('click', function (){
    document.getElementById('audio').src = "waves.mp3";
})
document.getElementById('harp').addEventListener('click', function (){
    document.getElementById('audio').src = "harp.mp3";
})
document.getElementById('birds').addEventListener('click', function (){
    document.getElementById('audio').src = "birds.mp3";
})
document.getElementById('none').addEventListener('click', function (){
    document.getElementById('audio').src = "";
})