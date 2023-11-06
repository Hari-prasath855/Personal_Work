let liftQueue = [];
var prev = 0;
var para = document.getElementById("currentFloor");

function addQueue(value){
    liftQueue.push(value);
    var btncolor = document.getElementById(value).style;
    btncolor.backgroundColor = "#03fc30";
}

function liftOperation(value) {
    setTimeout(function () {
        para.innerHTML = `Current Floor ${value}`;
        var liftPosition = document.querySelector(".lift").style;
        var btncolor = document.getElementById(value).style;       
        switch (value) {
            case 1:
                prev=1;
                liftPosition.bottom = "7%";
                break;
            case 2:
                prev=2;
                liftPosition.bottom = "26%";
                break;
            case 3:
                prev=3;
                liftPosition.bottom = "45%";
                break;
            case 4:
                prev=4;
                liftPosition.bottom = "64%";
                break;
            case 5:
                prev=5;
                liftPosition.bottom = "82%";
                break;
        }
        btncolor.backgroundColor = "white";
    }, 1000 * Math.abs(prev-value));
    if(liftQueue.length>0){
        console.log(liftQueue);
        liftOperation(liftQueue.shift());
    }
}