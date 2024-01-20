import React from 'react';
import Child from './Child';
function Parent({data,setData}) {
    return ( 
        <div>
            <h2>Parent Component</h2>
            <button onClick={()=>setData("Updated from Parent Comp")}>Click me</button>
            <Child data={data} setData={setData}/>
        </div>
     );
}

export default Parent;