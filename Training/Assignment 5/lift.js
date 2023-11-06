let liftQueue = [];
let queue = [1];
let queue2= [];
var prevFloor = 1;
var flag = true;
var flag2 =true;

var div = document.getElementById('input');

function addQueue(value){
    if(prevFloor != value){
        liftQueue.push(value);
        var btncolor = document.getElementById(value).style;
        btncolor.backgroundColor = "#03fc30";
    }   
    if(prevFloor===1){
        flag2 = true;
    }
}

function liftOperation(floor) {
    var btncolor = document.getElementById(floor).style;
    
    setTimeout(function () {
        div.innerHTML = `Current Floor : ${floor}`;
        for (let i = 0; i < liftQueue.length; i++) {
            let val = liftQueue[i];
            if(val<floor && val>0){
                queue2.push(val);
            }else{
                if(val>0 && val!==queue[0]-1 && floor !== val){
                    queue.push(val);
                }else if(val>0 && floor !== val){
                    queue.unshift(val);
                }
            }                
        }
        liftQueue=[];
        if(flag2){
            queue.sort();
        }
        queue2 = decSort(queue2);
        btncolor.backgroundColor = "#fff";
        var liftPosition = document.querySelector(".lift").style; 
        switch (floor) {
            case 1:
                liftPosition.bottom = "7%";
                break;
            case 2:
                liftPosition.bottom = "26%";
                break;
            case 3:
                liftPosition.bottom = "45%";
                break;
            case 4:
                liftPosition.bottom = "64%";
                break;
            case 5:
                liftPosition.bottom = "82%";
                break;
        }
        prevFloor = floor;
        showData(false);
        if(floor > 1 && floor < 5){
            div.innerHTML = `Current Floor : ${floor}<br>Enter Input or skip by pressing 'Go'`;
        }else{
            div.innerHTML = `Current Floor : ${floor}<br>Enter Input :`;
        }
        
    },1000*Math.abs(floor-prevFloor));
}

if(flag){
    liftOperation(queue.shift());
    flag = false;
}

function showData(skip) { 
    

    if(skip){
        if(queue.length > 0){
            liftOperation(queue.shift());
        } else if(queue2.length!==0 && queue2[0]!==0 && liftQueue.length===0) {
            flag2 = false;
            queue = [...queue2];
            queue2 = [];
            liftOperation(queue.shift());
        }else{
            liftOperation(prevFloor);
        }
    }
}

function decSort(arr){
    arr.sort((a,b) => {
        if(a>b) return -1;
        if(a<b) return 1;
        return 0;
    })
    return arr;
}