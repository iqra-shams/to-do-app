import React, { useState } from "react";

function Test() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState('');
  const [editId, setEditId] = useState("");

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

  return (
    <div className="container">
      <h1 className="heading">To Dos</h1>

      <div className="const">
        <h2 className="heading">Filter task</h2>
        {/* Add your filtering checkboxes here */}
      </div>

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
        Add
      </button>
      {todo?.map((item) => {
        return (
          <div key={item.id} className="cont">
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
                -
              </button>
            </div>
            {edit && item.id === editId ? (
              <button
                onClick={() => {
                  saveEdit();
                }}
                className="btn"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  edittask(item);
                }}
                className="btn"
              >
                Edit
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Test;
