import React, { useEffect, useState } from 'react';

import movies from './movies.json';

function Row({ title,type }) {

    const [data, setData] = useState([]);
    useEffect(()=>{
        if(type=='toprated'){
            setData(movies.toprated);
        }else if(type=='trending'){
            setData(movies.trending);
        }

        return ()=>{
            console.log(`unmounting ${title} component`);
        }
    },[])

    if(!data.length){
        return <p>No Data available of {title}</p>
    }

    return (
        <div>
            <h1>{title}</h1>
            {
                data.map((item) => (
                    <div key={item.id}>
                        <h5>{item.movieName}</h5>
                        <img src={item.imgURL} alt={item.movieName} height={350} />
                    </div>
                ))
            }
        </div>
    );
}

export default Row;