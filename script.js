function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;


    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }


    const li = document.createElement("li");
    li.textContent = taskText + " ";

    const span = document.createElement("span");
    span.textContent = "❌"; 
    span.style.cursor = "pointer";
    span.style.color = "red";
    span.style.float = "right"; 

    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);


    input.value = ""; 

    span.addEventListener("click", function (e) {
        e.stopPropagation(); // delete click complete na banaye
        li.remove();
        saveTasks();

    });

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        saveTasks();
    });


    saveTasks();
}


function saveTasks() {
    const tasks = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", tasks);
}


function loadTasks() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
        document.getElementById("taskList").innerHTML = tasks;
    }
}


loadTasks();




