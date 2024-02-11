import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from '../redux/slices/counterSlice';
function Counter() {

    const [input,setInput]=useState('');
    const count= useSelector(state=>state.counter.count);
    const dispatch= useDispatch();
    const handleSet=()=>{
        const newValue= parseInt(input);
        if(!isNaN(newValue)){
            dispatch(set(newValue))
        }else{
            alert("Kindly enter Number in your input field")
        }
        setInput('')
    }
    return ( 
        <div>
            <h3>Counter Component</h3>
            <h4>Counter {count}</h4>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <br/><br/>
            <input type='text' value={input} placeholder='Enter any value'
            onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleSet}>Set Value</button>
        </div>
     );
}

export default Counter;