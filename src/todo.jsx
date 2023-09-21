import { React, useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([
    {
      id: '',
      name: '',
      status: ''
    }
  ]);
  const handleSubmit = (event) => {
    event.preventDefault();
    // setTodo([...todo, task]);
    // setTodo((todo)=>{const newlist=[...todo, task]

    //   console.log(todo)
    //   setTask('');
    //   return newlist
    setTodo((todo) => [...todo, task]);
    setTask("");
    //});
  };

  const handleChangeName = (event) => {
    setTask(event.target.value);
  };
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
    // <div className="container">
    //   <div>
    //     <span id="t">To Dos</span>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <span>Add New Task</span>
    //       <br></br>
    //       <div className="con1">
    //         <div>
    //           {" "}
    //           <input
    //             type="text"
    //             value={task}
    //             onChange={handleChangeName}
    //             placeholder="Add new task"
    //           />{" "}
    //         </div>
    //       </div>
    //       <button type="submit">Add</button>
    //       <h2>Task to do</h2>
    //       {todo != [] &&
    //         todo.map((data, i) => {
    //           return (
    //             <div className="List">
    //               <p key={i}>
    //                 <div className="cont">
    //                   <div className="dd">{data} </div>
    //                   <div>
    //                     <button className="btn" onClick={removetask(i)}>
    //                       -
    //                     </button>
    //                   </div>
    //                 </div>
    //               </p>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </form>
    // </div>

    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTodo((todo) => [...todo, { id: Date.now(), name: task,  }]);
          setTask(" ");
        }}
      >
        Add
      </button>
      {todo?.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex', gap: '10px'}}>
            <li>{item.name}</li>
            <button onClick={()=>{removetask(item.id)}}>-</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
