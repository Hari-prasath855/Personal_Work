let tasks = new Array();

var sortCount = 1;

function handleSubmit(event) { 
    event.preventDefault();
    var task = document.getElementById("value").value;
    if(task === ''){
        window.alert('Enter the Task');
        return;
    }
    tasks.push({"id":Math.random(),"done":false,"task":task,"important":false});
    const form = document.querySelector("form");
    form.reset();
}

function updateEvent() {
    var tag = document.getElementById("taskAndStatus");
    var tag1 = document.getElementById("completedTask");
    tag.innerHTML = "";
    tag1.innerHTML=`<div> Completed </div>`
    tasks.map((value)=>{
        if(value.done) {
            var div = document.createElement("div");
            div.className = "box task";
            tag1.appendChild(div);

            var div1 = document.createElement("div");
            div.appendChild(div1);

            var input = document.createElement("input");
            input.type = "checkbox";
            input.checked = true;
            input.onclick = () => taskUpdate(value.id);

            var span = document.createElement("span");
            span.textContent = value.task;
            span.style = "text-decoration: line-through";

            var input1 = document.createElement("input");
            input1.type = "checkbox";
            input1.checked = value.important;
            input1.onclick = () => important(value.id);

            div1.appendChild(input);
            div1.appendChild(span);
            div.appendChild(input1);
        }
        else {
            var div = document.createElement("div");
            div.className ="box task";
            tag.appendChild(div);

            var div1 = document.createElement("div");
            div.appendChild(div1);

            var input = document.createElement("input");
            input.type="checkbox";
            input.checked = false;
            input.onclick = () => taskUpdate(value.id);

            var span = document.createElement("span");
            span.textContent=value.task;

            var input1 = document.createElement("input");
            input1.type="checkbox";
            input1.checked = value.important;
            input1.onclick = () => important(value.id);

            div1.appendChild(input);
            div1.appendChild(span);
            div.appendChild(input1);
        }
    });
}

function taskUpdate(id){
    const newTasks = tasks.map((value) => {
        if(id === value.id){
            return {...value,done:(value.done)?false:true};
        }
        return value
    });
    tasks = newTasks;
    updateEvent();
}

function important(id){
    const newTasks = tasks.map((value) => {
        if(id === value.id){
            return {...value,important:(value.important)?false:true};
        }
        return value
    });
    tasks = newTasks;
    updateEvent();
}

function sort() {
    if (sortCount % 2 == 1) {
        tasks.sort((a, b) => {
            const titleA = a.task.toLowerCase();
            const titleB = b.task.toLowerCase();

            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
    } else {
        tasks.sort((a, b) => {
            const titleA = a.task.toLowerCase();
            const titleB = b.task.toLowerCase();

            if (titleA > titleB) return -1;
            if (titleA < titleB) return 1;
            return 0;
        });
    }
    sortCount++;
    updateEvent();
}
