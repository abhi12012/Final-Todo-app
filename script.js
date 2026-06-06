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

    const editSpan = document.createElement("span");
    editSpan.textContent = "✏️";
    editSpan.style.cursor = "pointer";
    editSpan.style.marginRight = "10px";
    editSpan.style.float = "right";


    li.appendChild(span);
    li.appendChild(editSpan);

    document.getElementById("taskList").appendChild(li);


    input.value = ""; 



    span.addEventListener("click", function (e) {
        e.stopPropagation(); // delete click complete na banaye
        li.remove();
        saveTasks();

    });



    editSpan.addEventListener("click", function (e) {
    e.stopPropagation(); // complete toggle na ho


    let newText = prompt("Edit your task:", li.firstChild.textContent.trim());


    if (newText !== null && newText !== "") {
        li.firstChild.textContent = newText + " ";
        saveTasks();
    }
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


function clearAll() {
    const list = document.getElementById("taskList");


    if (confirm("Are you sure you want to delete all tasks?")) {
        list.innerHTML = "";
        localStorage.removeItem("tasks");
    }
}


function showAll() {
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(function (li) {
        li.style.display = "block";
    });
}


function showCompleted() {
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(function (li) {
        if (li.classList.contains("completed")) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}


function showCompleted() {
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(function (li) {
        if (li.classList.contains("completed")) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}


function showPending() {
    const tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(function (li) {
        if (!li.classList.contains("completed")) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}

function saveTasks() {
    const tasks = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", tasks);
}


function searchTask() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(function (li) {
        const text = li.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}


