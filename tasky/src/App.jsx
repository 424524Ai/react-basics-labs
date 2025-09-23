import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
// 项目的根组件
// 流程
// App   -->    main.jsx     -->     public/index.html(div id = "root") 
//     被引入到             渲染到
function App() {
  // task object = 对象
  const [taskState, setTaskState] = useState({
    // task数组
    tasks: [
      {id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "Low", done: false},   // tasks数组元素[0]
      {id: 2, title: "Laundry", description: "Fold laundry and put away", deadline: "Tomorrow", priority: "Medium", done: false}, // tasks数组元素[1]
      {id: 3, title: "Tidy", deadline: "Today", priority: "High", done: false} // tasks数组元素[2]
    ]
  })

  const doneHandler = (taskIndex) => {
    // 1️⃣ 复制当前任务数组（浅拷贝) - 为了重新渲染
    const tasks = [...taskState.tasks];
    // 2️⃣ 切换指定任务的完成状态
    tasks[taskIndex].done = !tasks[taskIndex].done;
    // 3️⃣ 更新状态
    setTaskState({tasks});
    // 4️⃣ 输出调试信息
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  // 渲染给用户看的信息
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
      <Task title = {task.title} 
      description = {task.description} 
      deadline = {task.deadline} 
      priority = {task.priority} 
      key = {task.id} 
      done={task.done}
      markDone={() => doneHandler(index)}/> 
      ))} 
    </div>
  );
}

export default App;