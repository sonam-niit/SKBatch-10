import React from 'react';
import PropTypes from 'prop-types';

function UseCase5({name,age,isStudent,cb}) {

    return ( 
        <div>
            <h3>{name} is {age} Years old</h3>
            {isStudent && <p>Student..!!</p>}
            <button onClick={cb}>Click Me..!</button>
        </div>
     );
}

UseCase5.propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isStudent:PropTypes.bool,
    cb:PropTypes.func.isRequired
}

export default UseCase5;