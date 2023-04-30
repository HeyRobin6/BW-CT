let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
var semiCircle = document.getElementById("semicircle");
var container = document.getElementsByClassName("container")[0];
var opacity = 0;
var counter = document.getElementById("counter");
var text = document.getElementById("inhale-exhale");

startButton.addEventListener("click", () => {
    //window.alert("Hello world!");
    var i = 0;
    counter.textContent = i + "/6";
    doubleFadeIn(counter, text);
    startButton.style.display = "none";
    stopButton.style.display = "inline";
    updateCircle(i);
})

stopButton.addEventListener("click", () => {
    location.reload();
})

function updateCircle(i) {
    var semiCircle = document.getElementById("semicircle");
    var width = 2
    var height = 1
    var margin = 85;
    var intervalId = setInterval(frame, 59.5);
    function frame() {
        if (width===170 && height===85) {
            clearInterval(intervalId);
            text.textContent = "Exhale"
            //alert("Text Context=exhale");
            fadeIn(text);
            outdateCircle(i);
        } else {
            width= width + 2;
            height++;
            margin--;
            semiCircle.style.width = width + "px";
            semiCircle.style.height = height + "px";
            semiCircle.style.marginTop = margin + "px";
        }
    }
}

function outdateCircle(i) {
    var semiCircle = document.getElementById("semicircle");
    var width = 170;
    var height = 85;
    var margin = 1;
    var intervalId = setInterval(frame, 59.5);
    function frame() {
        if (width===2 && height===1) {
            if (i<5) {
                i++;
                counter.textContent = i + "/6";
                clearInterval(intervalId);
                text.textContent = "Inhale"
                fadeIn(text);
                updateCircle(i);
            }
            else {
                location.reload();
            }
        } else {
            width = width - 2;
            height--;
            margin++
            semiCircle.style.width= width + "px";
            semiCircle.style.height= height + "px";
            semiCircle.style.marginTop = margin + "px";
        }
    }
}