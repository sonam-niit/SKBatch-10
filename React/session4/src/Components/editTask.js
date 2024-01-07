import React, { useState } from 'react';
function EditTask({data,updateTodo}) {

    const [task,setTask]= useState(data.task);

    const updateTask=()=>{
        updateTodo(data.id,task);
    }
    return ( 
        <div>
            <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
            <button onClick={updateTask}>Update</button>
        </div>
    );
}

export default EditTask;