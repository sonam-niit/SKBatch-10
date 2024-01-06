import React from 'react';
//Default Props
function UseCase4({name,age,greeting}) {
    return ( 
        <div>
            <h3>Welcome {name}</h3>
            <hr></hr>
            <h4>Age: {age}</h4>
            <h4>Message:{greeting}</h4>
        </div>
     );
}
UseCase4.defaultProps={
    name:"User",
    age:'40',
    greeting:"Good Day..."
}

export default UseCase4;