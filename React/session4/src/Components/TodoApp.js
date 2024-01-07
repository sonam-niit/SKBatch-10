import React, { useState } from 'react';
import EditTask from './editTask';
function TodoApp() {

    const [task,setTask]=useState('');
    const [todos,setTodos]=useState([]);
    const [selected,setSelected]=useState(null);
    const handleClick=()=>{
        if(task==''){
            alert("Task Can not be empty")
        }else{
            setTodos([...todos,{id:Date.now(),task}]);
            setTask('');
        }
    }
    const updateTodo=(id,data)=>{
        const todoIndex=todos.findIndex((item)=>item.id==id);
        setTodos([...todos,todos[todoIndex].task=data]);
        console.log(todos);
        setSelected(null);
    }
    const editTask=(item)=>{
        setSelected(item);
    }
    const deleteTask=(id)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }
    return ( 
        <div>
            <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}
            placeholder='Enter your task'/>
            <button onClick={handleClick}>Add Task</button>
            <h3>Task List</h3>
            <ul>
                {
                    todos.map((item)=>(
                        <li key={item.id}>
                            {item.task}
                        <button onClick={()=>editTask(item)}>Edit</button>
                        <button onClick={()=>deleteTask(item.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
            {selected && <EditTask data={selected} updateTodo={updateTodo}/> }
        </div>
     );
}

export default TodoApp;