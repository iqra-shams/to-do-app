import {React,useState } from 'react';


const Todo = () => {
  
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(['hello', 'one', 'twof']);
  const handleSubmit = (event) => {
    
    event.preventDefault();
    // setTodo([...todo, task]);
    // setTodo((todo)=>{const newlist=[...todo, task]
      
    //   console.log(todo)
    //   setTask('');
    //   return newlist
      setTodo((todo) => [...todo, task]);
      setTask('')
    //});
  
  }
 
  const handleChangeName = event => {
    setTask(event.target.value);
  };
const removetask=(i)=>{
  //const updateddata = todo.filter((elem , id)=>{
    //return i!=id;
    todo.splice(i,1)
  //})
  // setTodo(updateddata);
}
  
 
 
 
  return (
    <div className='container'>
        <div>
         <span id='t'>To Dos</span>
         </div>
       
      <form onSubmit={handleSubmit}>
    <div>
       <span>Add New Task</span><br></br>
       <div className='con1'>
       <div> <input type="text" value={task} onChange={ handleChangeName}  placeholder='Add new task'/>  </div>
      
       
      
       {/* <select name='status'
       value={task.status} onChange={e => setTask.status(e.target.value)}>
  <option value="status1">pending</option>
  <option value="status2" selected>in progress</option>
  <option value="status3">Done</option>
</select> */}

</div>
<button   type='submit' >Add</button>
<h2>Task to do</h2> 
{todo!=[]&& todo.map((data,i)=>{
  return(
<div className='List'>

<p key={i}>
  <div className='cont'>
<div className='dd'>{data} </div>
<div>
<button className='btn' onClick={removetask(i)}>-</button>
</div>
</div>

</p>
</div>
  );
})}
</div>
      </form>
    
      </div>

  )
}

export default Todo