//Declaring variables
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

//Function to start timer
function start() {
    if (!timer) {
        timer = setInterval(runTimer, 1000); 
    }
}

//Function to stop timer
function stop() {
    clearInterval(timer);
    timer = null;
}

//Function to set the display value of timer
function runTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let displayString = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
    document.getElementById("display").textContent = displayString;
}

//Function to reset timer
function reset() {
    clearInterval(timer);
    timer = null;
    hours = minutes = seconds = 0;
    document.getElementById("display").textContent = "00:00:00";
}
