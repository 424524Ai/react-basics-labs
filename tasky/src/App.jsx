import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
// 项目的根组件
// 流程
// App   -->    main.jsx     -->     public/index.html(div id = "root") 
//     被引入到             渲染到
function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {title: "Dishes", description: "Empty dishwasher", deadline: "Today"},
      {title: "Laundry", description: "Fold laundry and put away", deadline: "Tomorrow"},
      {title: "Tidy", deadline: "Today"}
    ]
  })

  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title = {taskState.tasks[0].title} deadline = {taskState.tasks[0].deadline} description = {taskState.tasks[0].description} />
      
      <Task title = {taskState.tasks[1].title} deadline = {taskState.tasks[1].deadline} description = {taskState.tasks[1].description} />

      <Task title = {taskState.tasks[2].title} deadline = {taskState.tasks[2].deadline} />
    </div>
  );
}

export default App;