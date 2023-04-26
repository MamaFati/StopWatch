let second = 0;
let minute = 0;
let hours = 0;
let interval;

function start(){
    if(!interval){
        interval = setInterval(startTimer, 1000);
    } 
}
function stop(){
    clearInterval(interval);
    interval = null;
}
function startTimer(){
    second++;
    if(second === 60){
        second = 0;
        minute++;
        if(minute === 60){
            hours++;
    }
}
document.getElementById("startwatch").innerHTML = formatTime(hours) + " : " + formatTime(minute)+ " : " + formatTime(second);
}
function reset(){
    clearInterval(interval);
    interval = null;
    second =0;
    minute = 0;
    hours = 0;
    document.getElementById("startwatch").innerHTML = " 00 : 00 : 00 ";
}
function formatTime(time){
    return time < 10 ? "0" + time : time;
}