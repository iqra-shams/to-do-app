import React, { useEffect, useState } from "react";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
function Test() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState('');
  const [editId, setEditId] = useState("");
  const [updateddata, setUpdateddata] = useState();
  const [result, SetResult] = useState();


  const filterdata = (e) => {
    setUpdateddata(e.target.value);
    // console.log(updateddata,"567")
    const result = todo.filter(data =>
      data.cstatus === updateddata,);

    console.log(result, "rtyrty");
  }
  const removetask = (taskId) => {
    const updatedData = todo.filter((elem) => elem.id !== taskId);
    setTodo(updatedData);
  };

  const edittask = (taskToEdit) => {
    setEdit(true);
    setEditId(taskToEdit.id);
    setEdited(taskToEdit.name);
  };

  const saveEdit = () => {
    setEdit(false);
    const index = todo.findIndex((task) => task.id === editId);
    if (index !== -1) {
      todo[index].name = edited;
    }
    setEdited('');
  };
  // useEffect(()=>{
  //   console.log("mountain due");
  //   console.log(updateddata);

  //   const result= todo.filter((data)=>
  //     data.cstatus.includes("pending"),
  //   );
  //   console.log(result);
  // },[updateddata])

  return (
    <div className="container">
      <h1 className="heading">To Dos</h1>

      {/* <div className="const">
        <h2 className="heading">Filter task</h2> */}
      {/* Add your filtering checkboxes here */}
      {/* <input type="checkbox"  value="pending"   onClick={()=>{setUpdateddata("pending")}}/>Pending
       <input type="checkbox" value="In progress"   onClick={()=>{setUpdateddata("in progress")}}/>In Progress
       <input type="checkbox" value="Done"    onClick={()=>{setUpdateddata("Done")}}/>Done
      
        
      </div> */}

      <div className="con1">
        <label>Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
        />
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option></option>
          <option>Pending</option>
          <option>In progress</option>
          <option>Done</option>
        </select>
      </div> 
     
      <div className="con1">
     <div>
   <FilterAltOutlinedIcon style={{ fontSize: 30 }}/>
      <select value={updateddata} onChange={(e) => SetResult(e.target.value)}>
       
        <option></option>
        <option>Pending</option>
        <option>In progress</option>
        <option>Done</option>
      </select>
      </div>
      <div>
      <button
        onClick={() => {
          setTodo((todo) => [
            ...todo,
            { id: Date.now(), name: task, cstatus: status },
          ]);
          setTask("");
          setStatus("");
        }}
      >
        <NoteAddOutlinedIcon/ >
        
      </button>
      </div>
     </div>
      {todo?.map((item) => {
        return (
          item.cstatus === result && <div key={item.id} className="cont">
            {edit && item.id === editId ? (
              <input
                type="text"
                placeholder={item.name}
                value={edited}
                onChange={(e) => {
                  setEdited(e.target.value);
                }}
              />
            ) : (
              <div className="dd">{item.name} </div>
            )}
            <div className="dd"> {item.cstatus}</div>
            <div className="dd">
              <button
                onClick={() => {
                  removetask(item.id);
                }}
                className="btn"
              >
               <DeleteIcon style={{ fontSize: 20 }} />
              </button>
            </div>
            {edit && item.id === editId ? (
              <button
                onClick={() => {
                  saveEdit();
                }}
                className="btn"
              >
               <SaveOutlinedIcon/>
              </button>
            ) : (
              <button
                onClick={() => {
                  edittask(item);
                 
                }}
                className="btn"
              >
              <EditNoteOutlinedIcon style={{ fontSize: 20 }} />
              </button>
            )}
          </div>
        );
      })}
     
    </div>
  );
}

export default Test;
