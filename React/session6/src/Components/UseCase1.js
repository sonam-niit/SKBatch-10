import React,{useEffect, useState} from 'react';
function UseCase1() {
    const [fruits,setFruits]= useState([]);
    const [item,setItem]= useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        fruits.push(item); //updating old array
        setFruits(fruits);//update the state using setFruit function
        setItem('');
    }
    const removeFruit=(name)=>{
       setFruits(fruits.filter(item=>item!==name))
    }
    return ( 
        <div>
            <form onSubmit={handleClick}>
                <label>Enter Your Favourite Fruits:</label>
                <input type='text' name="item" value={item} 
                onChange={(e)=>setItem(e.target.value)} />
                <button type='submit'> Add Item</button>
            </form>
            <h3>Favourite Fruits</h3>
            <ul>
            {
                fruits.map((item,index)=>(
                    <li key={index}>{item}<button 
                    onClick={()=>removeFruit(item)}>delete</button></li>
                ))
            }</ul>
        </div>
     );
}

export default UseCase1;