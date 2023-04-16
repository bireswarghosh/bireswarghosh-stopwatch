
var isStop = true; // A boolean variable to keep track of whether the stopwatch is stopped or running
var s = 0; // Variable to store seconds
var min = 0; // Variable to store minutes
var hr = 0; // Variable to store hours

function start() {
    if (isStop == true) {
        isStop = false; // Setting isStop to false to indicate that the stopwatch is running
        timer(); // Calling the timer function to start the stopwatch
    }
}

function stop() {
    isStop = true; // Setting isStop to true to indicate that the stopwatch is stopped
}

function reset() {
    isStop = true; // Setting isStop to true to indicate that the stopwatch is stopped
    s = 0; // Resetting seconds to 0
    min = 0; // Resetting minutes to 0
    hr = 0; // Resetting hours to 0
    swatch.innerHTML = "00 : 00 : 00"; // Resetting the stopwatch display
}

function timer() {
    if (isStop == false) {
        s = parseInt(s); // Convert s to integer
        min = parseInt(min); // Convert min to integer
        hr = parseInt(hr); // Convert hr to integer
        s++; // Incrementing seconds
        if (s == 60) {
            s = 0;
            min++; // Incrementing minutes when seconds reach 60
        }
        if (min == 60) {
            min = 0;
            hr++; // Incrementing hours when minutes reach 60
        }
        if (s < 10) {
            s = "0" + s; // Adding leading zero for single-digit seconds
        }
        if (min < 10) {
            min = "0" + min; // Adding leading zero for single-digit minutes
        }
        if (hr < 10) {
            hr = "0" + hr; // Adding leading zero for single-digit hours
        }
        // Update stopwatch display
        swatch.innerHTML = hr + " : " + min + " : " + s;
        setTimeout(timer, 1000);
        // Recursively calling the timer function after 1 second
    }
}
