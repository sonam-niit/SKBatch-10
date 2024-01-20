import React from 'react';
import { useMyContext } from './MyContext';

function MyChild() {
    const {data,setData}= useMyContext();
    return ( 
        <div>
            <h1>Child Component</h1>
            {data}
            <button onClick={()=>setData("From Child")} >
                Set Data from Child
            </button>
        </div>
     );
}

export default MyChild;