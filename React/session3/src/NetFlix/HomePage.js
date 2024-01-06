import React from 'react';
import Row from './Row';

function HomePage() {
    return ( 
        <div>
            <h1>Netflix Home Page</h1>
            <hr />
            <Row title="Trending Now" type="trending"/>
            <Row title="Top Rated" type="toprated"/>
        </div>
     );
}

export default HomePage;