// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

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
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

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
