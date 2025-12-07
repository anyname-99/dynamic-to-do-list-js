// Run the script after the page content has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the input field, button, and task list
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    // Don't add empty tasks
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item and set its text
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for this task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove the task when the remove button is clicked
    removeBtn.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Add the remove button to the list item, then add the item to the list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input for the next task
    taskInput.value = "";
  };

  // When the user clicks the button, add the task
  addButton.addEventListener("click", addTask);

  // Also allow adding tasks by pressing Enter
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
