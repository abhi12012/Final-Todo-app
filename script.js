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

    span.addEventListener("click", function () {
        li.remove(); 
    });
}


