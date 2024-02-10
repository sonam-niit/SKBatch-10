import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Counter() {
    const [input,setInput]=useState('');
    const count= useSelector(state=>state.counter.count);
    const dispatch= useDispatch();
    const handleInc=()=>{
        dispatch({type:'INCREMENT'})
    }
    return ( 
        <div>
            <h3>Counter Compo</h3>
            <h4>Count {count}</h4>
            <button onClick={handleInc}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>
                -</button>
            <br/><br/>
            <input type='text' placeholder='enter any number' 
              value={input}
            onChange={(e)=>setInput(e.target.value)} />
            <button onClick={()=>dispatch({type:'SET',
            payload:parseInt(input)})}>Set</button>
        </div>
     );
}

export default Counter;