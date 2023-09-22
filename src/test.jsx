import React, { useState } from 'react'

function Test() {
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("");
    const [todo, setTodo] = useState([
        // {
        //     id: '',
        //     name: '',
        //     cstatus: ''
        // }
    ]);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState('');


    const removetask = (i) => {
        const updateddata = todo.filter((elem) => {
            return elem.id !== i;
        })
        setTodo(updateddata);
    };
    const edittask = (i) => {
        setEdit(true);
        setEditId(i)
        todo.map((item)=>{
            i === item.id && setTodo()
        })
        // let updateddata = todo.find((elem) => {
        //     return elem.id !== i
        // })
        // setTodo(updateddata);
        //console.log(updateddata);
    }
    //   const edittask = () => {
    //     setEdit(true);
    //    console.log(edit,"inside edit function")
    //     }
    // setTodo(editedtask);


    //   const edit1 = (id) => {
    //     const newUsers = users.map(task => {
    //       if(user.id === id) {
    //         user.name = 'John Doe';
    //       } 
    //       return user;
    //     });    
    //     setUsers(newUsers);
    //   }


    return (
        <div className='container'>
            <h1 className='heading'>To Dos</h1>

            <div className='const'>
                <h2 className='heading'>Filter task</h2>
                <input type="checkbox" value="s1" />
                <label>Pending</label>
                <input type="checkbox" value="s2" />
                <label>In Progress</label>
                <input type="checkbox" value="s3" />
                <label>Done</label>
            </div>




            {/* {todo?.map((item) => {
                return (
                    <div key={item.id} className="cont">
                        <div className="dd">{item.name} </div> <div className="dd">  {item.cstatus}</div>

                    </div>
                );
            })} */}









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
                    <option >Pending</option>
                    <option>In progress</option>
                    <option >Done</option>
                </select>
            </div>

            <button
                onClick={() => {
                    setTodo((todo) => [...todo, { id: Date.now(), name: task, cstatus: status, }]);
                    setTask(" ");
                    setStatus("");
                }}
            >
                Add
            </button>
            {todo?.map((item) => {
                return (
                    <div key={item.id} className="cont">
                        {
                            edit && (item.id === editId) ? <input type='text' placeholder={item.name} onChange={(e) => { setTask(e.target.value) }} /> :
                                <div className="dd">{item.name} </div>

                        }
                        <div className="dd">  {item.cstatus}</div>
                        <div className="dd">
                            <button onClick={() => { removetask(item.id) }} className='btn'>-</button> </div>
                        {/* {
                            edit && (item.id === editId) ?
                                <button onClick={() => {
                                    setTodo((todo) => [...todo, { id: Date.now(), name: task, cstatus: status, }]);
                                    setTask(" ");
                                    setStatus("");
                                    setEdit(false);
                                    setEditId('');
                                }} className='btn'>add</button> :
                                <button onClick={() => { edittask(item.id) }} className='btn'>e</button>
                        } */}
                        <button onClick={() => { edittask(item.id) }} className='btn'>e</button>
                    </div>
                );
            })}

        </div>
    );

}
export default Test;