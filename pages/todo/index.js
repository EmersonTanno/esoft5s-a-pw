document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  

    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      todoList.appendChild(li);
    }
  
 
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const taskText = input.value.trim(); 
  
      if (taskText !== '') { 
        addTask(taskText); 
        saveTask(taskText); 
        input.value = ''; 
      }
    });
  

    function saveTask(taskText) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  

    function loadTasks() {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => addTask(task));
    }

    loadTasks();
  });
  