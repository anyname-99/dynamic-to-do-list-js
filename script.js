document.addEventListener("DOMContentLoaded", () => {
  // Reference DOM elements
  const addButton = document.getElementById("add-task-btn"); // Button to add new tasks
  const taskInput = document.getElementById("task-input"); // Input field for task text
  const taskList = document.getElementById("task-list"); // Unordered list to display tasks

  /**
   * Adds a new task to the list.
   * Validates input, creates the task element with a remove button,
   * appends it to the task list, and clears the input field.
   */
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      // Notify the user if no task text is provided
      alert("Please enter a task.");
      return;
    }

    // Create a new list item and set its text
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Attach event handler to remove the task from the list
    removeBtn.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item and the item to the task list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = "";
  };

  // Event listener: add task when the add button is clicked
  addButton.addEventListener("click", addTask);

  // Event listener: add task when pressing 'Enter' in the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
