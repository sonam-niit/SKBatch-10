import React from 'react';
function UseCase3({method,name}) {
    return ( 
        <div>
            <button onClick={method}>
                {name}
            </button>
        </div>
     );
}

export default UseCase3;