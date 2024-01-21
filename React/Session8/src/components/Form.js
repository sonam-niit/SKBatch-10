import React, { useEffect, useState } from 'react';
function FormDemo() {

    const [name,setName]=useState('');
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Component Mounted");
    },[])//Empty Dependency

    useEffect(()=>{
        console.log("Count "+count);
    },[count])
    useEffect(()=>{
        console.log("Name "+name);
    },[name])
    return ( 
        <div>
            <input type='text' value={name} placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)} />

            <h1>Welcome {name}</h1>
            <h2>count {count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count+1)}>-</button>
        </div>
     );
}

export default FormDemo;