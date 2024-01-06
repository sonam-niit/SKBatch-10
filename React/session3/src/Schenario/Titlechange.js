import React, { useEffect } from 'react';

function PageTitle({title}){
    useEffect(()=>{
        document.title=title;
    },[title])
}

function Home(){
    return(
        <div>
            <PageTitle title={"Home Page"} />
            <h1>Home Component</h1>
        </div>
    )
}
function About(){
    return(
        <div>
            <PageTitle title={"About Us"} />
            <h1>About Component</h1>
        </div>
    )
}

function Titlechange() {
    return ( 
        <div>
            {/* <Home /> */}
            <About />
        </div>
     );
}

export default Titlechange;