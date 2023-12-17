function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    li.classList.add("slide"); 

    var completeButton = document.createElement("span");
    completeButton.textContent = " ✅";
    completeButton.classList.add("complete");
    completeButton.onclick = function () {
      li.style.textDecoration = "line-through";
      li.style.color = "green";
    };

    var deleteButton = document.createElement("span");
    deleteButton.textContent = " ❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}
