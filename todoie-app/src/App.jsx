import React from 'react'
import './App.css'

function App() {

  function addTask() {
    addTask_helper();
  }

  function addTask_helper() {
    let value = document.getElementById("new-task-input").value;
    if (!value) return; 

    let taskContainer = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("span");
    label.innerText = value;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);

    document.getElementsByClassName("Tasks")[0].appendChild(taskContainer);
    document.getElementById("new-task-input").value = "";
  }

  function removeTasks() {
    let tasksDiv = document.getElementsByClassName("Tasks")[0];
    tasksDiv.innerHTML = ""; 
  }

  return (
    <div className="App">
      
      <div className="TodoList">
        <h2>Todo List</h2>
        <div className="Tasks">
          <input type="checkbox" /> Task 1<br/>
          <input type="checkbox" /> Task 2<br/>
        </div>

        <input id="new-task-input" type="text" />

        <div align="center" onClick={addTask} className="AddTask">
          <h3>Add New Task</h3>
        </div>

        <div align="center" onClick={removeTasks} className="RemoveTask">
          <h3>Remove All Tasks</h3>
        </div>
      </div>
    </div>
  )
}

export default App;
