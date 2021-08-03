const casualClock = document.querySelector(".clock")
const digitalClock = document.querySelector(".digital-clock")
const hours = document.querySelector(".hour")
const min = document.querySelector(".min")
const second = document.querySelector(".second")
const dhours = document.querySelector(".digital-hour")
const dmin = document.querySelector(".digital-min")
const dsecond = document.querySelector(".digital-second")
const clockType = document.querySelector('#clockType')


function play() {
    if (clockType.selectedIndex == 0) {
        digitalClock.style.top = "-1000px"
        casualClock.style.top = "0"
    } else {
        digitalClock.style.top = "0"
        casualClock.style.top = "-1000px"
    }
    let date = new Date()
    const hoursNumber = date.getHours()
    const hoursDegree = (((hoursNumber / 60) * 360) + 90)
    const minNumber = date.getMinutes()
    const minDegree = (((minNumber / 60) * 360) + 90)
    const secondNumber = date.getSeconds()
    const secondDegree = (((secondNumber / 60) * 360) + 90)

    hours.style.transform = `rotate(${hoursDegree}deg)`
    min.style.transform = `rotate(${minDegree}deg)`
    second.style.transform = `rotate(${secondDegree}deg)`

    if (hoursNumber >= 10) dhours.innerHTML = hoursNumber
    else dhours.innerHTML = "0" + hoursNumber
    if (minNumber >= 10) dmin.innerHTML = minNumber
    else dmin.innerHTML = "0" + minNumber
    if (secondNumber >= 10) dsecond.innerHTML = secondNumber
    else dsecond.innerHTML = "0" + secondNumber

}

setInterval(play, 1000);