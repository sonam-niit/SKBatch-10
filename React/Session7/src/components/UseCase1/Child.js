import React from 'react';
function Child({data,setData}) {
    return ( 
        <div>
            <h1>Child Component</h1>
            <h3>Data:{data}</h3>
            <button onClick={()=>setData("Updated from Child Comp")}>Click me</button>
        </div>
     );
}

export default Child;