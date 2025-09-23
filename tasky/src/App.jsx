import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';

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

  // form object = 对象 存储用户输入的任务信息
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    // 1️⃣ 复制当前任务数组（浅拷贝) - 为了重新渲染
    const tasks = [...taskState.tasks];
    // 2️⃣ 切换指定任务的完成状态
    tasks[taskIndex].done = !tasks[taskIndex].done;
    // 3️⃣ 更新状态
    setTaskState({tasks});
    // 4️⃣ 输出调试信息
    //console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    // tasks.splice(task index = 从什么索引开始删 1 = 要删除的元素个数)
    tasks.splice(taskIndex, 1);
     // 更新状态
    setTaskState({tasks});
  }

  // 用来处理用户填写的任务信息的更新
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  console.log(formState);

    const formSubmitHandler = (event) => {
    event.preventDefault();

    // 浅拷贝tasks 和 form
    const tasks = [...taskState.tasks];
    const form = {...formState};

    // 用uuid包给form添加uid
    form.id = uuidv4();
    
    // 将form添加到tasks 数组
    tasks.push(form);
    setTaskState({tasks});
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
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
      /> 
      ))} 
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler}/>
    </div>
  );
}

export default App;