import React, { useEffect, useState } from 'react';

function LifeCycleExample() {

    const [count,setCount]= useState(0);

    useEffect(()=>{
        console.log("LifeCycleComp is Mounted");
        //when this is getting unmounted it will run this cleanup Function
        return ()=>{
            console.log("Component will unmount");
        }
    },[])
    useEffect(()=>{
        //Component Updated
        console.log('Count Updated ',count);
        //every time when the old value replaced it getting executed
        return ()=>{
            console.log("Count will unmount",count);
        }
    },[count]);
    return ( 
        <div>
            <h3>LifeCycle Component Demo {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
     );
}

export default LifeCycleExample;
