const update = () => {
    let d = new Date
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    hour.innerHTML = h
    minute.innerHTML = m
    if (h < 10){
        second.innerHTML = '0' + h
    }
    else{
        second.innerHTML = h
    }
    if (m < 10){
        second.innerHTML = '0' + m
    }
    else{
        second.innerHTML = m
    }
    if (s < 10){
        second.innerHTML = '0' + s
    }
    else{
        second.innerHTML = s
    }
}

let timerID;
const start = () => {
    if(!timerID){
        timerID = setInterval(update, 1000)
    }
}
const stop = () => {
    clearInterval(timerID)
}