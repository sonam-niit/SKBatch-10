import React, { useEffect, useState } from 'react';

function EffectDemo() {

    const [count,setCount]=useState(0);
    //if your want run something as a side effect then use useEffect hook
    useEffect(()=>{
        console.log('Use Effect Running');
    }, []); //Empty array dependency is informing the hook to run only once
    return (
        <div>
            <h1>Hello {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    );
}

export default EffectDemo;