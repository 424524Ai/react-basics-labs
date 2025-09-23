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
      {id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today"},
      {id: 2, title: "Laundry", description: "Fold laundry and put away", deadline: "Tomorrow"},
      {id: 3, title: "Tidy", deadline: "Today"}
    ]
  })

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
      <Task title = {task.title} description = {task.description} deadline = {task.deadline} key = {task.id} /> 
      ))} 
    </div>
  );
}

export default App;