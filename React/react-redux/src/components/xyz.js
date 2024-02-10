import React from 'react';
import { useSelector } from 'react-redux';
function XYZ() {
    const count= 
    useSelector(state=>
        state.counter.count)
    return ( 
        <div>
            Counter {count}
        </div>
     );
}

export default XYZ;