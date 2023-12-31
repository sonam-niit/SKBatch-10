import React, { useState } from 'react';
function StateDemo() {

    //Let's Declare a State, we will use useState() hook
    const [name,setName]= useState('Sonam Soni');
    const [count,setCount]= useState(0);

    const changeName=()=>{
        setName('Skill Academy')
    }
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return (<div>
        <h2>Welcome {name}</h2>
        <button onClick={changeName}>Change Name</button>
        <h2>Count {count}</h2>
        <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div>);
}

export default StateDemo;