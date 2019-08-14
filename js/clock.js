function clock(){
    const fullDate = new Date(); // Build Up function to get the date
    const hours = fullDate.getHours(); // Getting the hours
    const mins = fullDate.getMinutes(); // Getting the minutes
    const secs = fullDate.getSeconds(); // Getting the seconds
    // This will add a 0  beside to the clock if the value is lower 10
    if( hours < 10 ){
        hours = "0" + hours ;
    }
    if( mins < 10 ){
        mins = "0" + mins ;
    }
    if( secs < 10 ){
        secs = "0" + secs ;
    }
    // Target all the DOM elements here
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
}
// This will update the clock every milliseconds
setInterval(clock, 100);