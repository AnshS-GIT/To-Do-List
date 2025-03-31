// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-container">
                <input type="checkbox" class="task-checkbox">
                <span>${taskText}</span>
            </div>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskActions(event) {
        const target = event.target;
        const li = target.closest('li');

        if (!li) return;

        if (target.classList.contains('delete')) {
            li.remove();
        } else if (target.classList.contains('task-checkbox')) {
            const span = li.querySelector('span');
            span.classList.toggle('completed');
        }
    }
});