import React from 'react';

function Welcome({name,titleOfTheDay}) {
    return ( 
        <div>
            <h1>Welcome {name}</h1>
            <h2>Title of the Day: {titleOfTheDay}</h2>
        </div>
     );
}

export default Welcome;