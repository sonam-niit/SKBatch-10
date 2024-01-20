import React from 'react';
import { useMyContext } from './MyContext';
import MyChild from './MyChild';
function MyParent() {

    const {data,setData}= useMyContext();
    return ( 
        <div>
            <h2>MyParent</h2>
            {data}
            <MyChild />
        </div>
     );
}

export default MyParent;