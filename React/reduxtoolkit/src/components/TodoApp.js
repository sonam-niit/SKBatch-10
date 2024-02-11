import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, removeTodo, toggleTodo } from '../redux/slices/todosSlice';
function TodoApp() {
    const [input,setInput] = useState('');
    const dispatch= useDispatch();
    const todos=useSelector(state=>
        state.todos.todos);
    const handleAdd=()=>{
        if(input===''){
            alert("Todo cannot be empty")
        }else{
            const newTodo={
                id:Date.now(),
                task:input,
                completed:false
            }
            dispatch(addtodo(newTodo));
            setInput('');
        }
    }
    return ( 
        <div>
            <h3>Todo App</h3>
            <input type='text' placeholder='Enter your Todo' 
            value={input}
            onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleAdd}>Add Task</button>
            <h3>Todo List</h3>
            {
                todos.map((item)=>(
                    <div key={item.id}>
                        <span style={{textDecoration: 
                        item.completed?'line-through':
                        'none'}} 
                        onClick={()=>dispatch(toggleTodo(item.id))}>
                            {item.task}</span>
                        <button onClick=
                        {()=>dispatch(removeTodo(item.id))}>
                            X</button>
                    </div>
                ))
            }
        </div>
     );
}

export default TodoApp;