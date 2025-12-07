// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If taskText is not provided, get it from input
    if (taskText === undefined || taskText === true) {
      taskText = taskInput.value.trim();
      save = true;
    }

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");

    // Create a text node for the task
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Add click event to remove button to delete the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);

      // Remove task from Local Storage
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const taskIndex = storedTasks.indexOf(taskText);
      if (taskIndex > -1) {
        storedTasks.splice(taskIndex, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field only if we're adding from user input
    if (save) {
      taskInput.value = "";
    }

    // Save to Local Storage if save is true
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Load tasks from Local Storage when page loads
  loadTasks();

  // Attach event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Attach event listener to input field for "Enter" key press
  taskInput.addEventListener("keypress", function (event) {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
      addTask();
    }
  });
});
