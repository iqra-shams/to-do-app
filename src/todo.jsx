import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [todo, setTodo] = useState([
    {
      id: '',
      name: '',
      cstatus: ''
    }
  ]);
  
  const removetask = (i) => {
    const updateddata = todo.filter((elem)=>{
    return elem.id !== i;
    })
    setTodo(updateddata);
  };

//   const deleteTask = (key) => {
//     const newTaskList = taskList.filter((task)=>{
//      return task.taskId !== key;
//     });
//     setTaskList(newTaskList);
// }

  return (
  
      <div  className='container'>
          <h1 className='heading'>To Dos</h1>
          
          <div className='const'>
          <h2 className='heading'>Filter task</h2>
          <input type="checkbox"   value={status}/>
          <label>Pending</label>
          <input type="checkbox"  value={status}/>
          <label>In Progress</label>
          <input type="checkbox"   value={status}/>
          <label>Done</label>
          </div>
          <div className="con1">  
          <label >Task</label>
    <input
      type="text"
     
      value={task}
      onChange={(e) => setTask(e.target.value)}
      
    />
     <label >Status</label>
     <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option></option>
        <option >Pending</option>
        <option>In progress</option>
        <option >Done</option>
      </select>
      </div>
    <button
      onClick={() => {
        setTodo((todo) => [...todo, { id: Date.now(), name: task, cstatus: status,   }]);
        setTask(" ");
        setStatus("");
      }}
    >
      Add
    </button>
    {todo?.map((item) => {
      return (
        <div key={item.id} className="cont">
          <div className="dd">{item.name} </div> <div className="dd">  {item.cstatus}</div>
          <div className="dd">
          <button onClick={()=>{removetask(item.id)}} className='btn'>-</button> </div>
          {/* <button onClick={()=>{edittask(item.id)}}>-</button> */}
        </div>
      );
    })}
  </div>
);
    
}

export default Todo;
