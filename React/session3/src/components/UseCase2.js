import React from 'react';

function UseCase2(props) {
    // const name=props.name;
    // const message=props.message;

    const {name,message}= props; //Object destructing
    return ( 
        <div>
            <h3>Welcome {name}, {message}</h3>
        </div>
     );
}

export default UseCase2;