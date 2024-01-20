import React, { useState } from 'react';
import Parent from './Parent';
function GrandParent({data,setData}) {

    
    return ( 
        <div>
            <h2>GrandParent Component</h2>
            <button onClick={()=>setData("Updated from GrantParent Comp")}>Click me</button>
            <Parent data={data} setData={setData} />
        </div>
     );
}

export default GrandParent;