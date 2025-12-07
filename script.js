
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Get references to key DOM elements
    const addButton = document.getElementById("add-task-btn"); // Add Task button
    const taskInput = document.getElementById("task-input");   // Input field for task text
    const taskList = document.getElementById("task-list");     // List to display tasks

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();

        // Prevent empty tasks
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item for the task
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when the button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Add the remove button to the list item, then add the item to the list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = "";
    };

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on pressing 'Enter' in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
