let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const secondes = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(secondes)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) pauseClock()
    interval = setInterval(timer, 1000)
}

function pauseClock() {
    clearInterval(interval)
}

function resetClock() {
    secondsElapsed = 0
    setTime()
}
