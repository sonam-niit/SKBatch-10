import React, { useState } from 'react';

function UseCase1() {

    const [name, setName] = useState('Sonam Soni');
    const handleClick=()=>{
        setName('Skill Academy')
    }
    return ( 
        <div>
            <h2>Welcome {name}</h2>
            <button onClick={handleClick}>Change</button>
        </div>
     );
}

export default UseCase1;