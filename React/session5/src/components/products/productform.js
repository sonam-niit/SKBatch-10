import React, { useState } from 'react';

function ProductForm({addProduct}) {
    const [product,setProduct]= useState({name:'',price:'',category:'',rating:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        addProduct(product);//Calling method from Child to Parent Component
        setProduct({name:'',price:'',category:'',rating:''})
    }
    return ( 
        <div>
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input type='text' placeholder='Enter Price' className='form-control' 
                    value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Category</label>
                    <input type='text' placeholder='Enter Category' className='form-control'
                    value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Rating</label>
                    <input type='text' placeholder='Enter Rating' className='form-control'
                    value={product.rating} onChange={(e)=>setProduct({...product,rating:e.target.value})}/>
                </div>
                <button type='submit' className='btn btn-primary'>Add Product</button>
            </form>
        </div>
     );
}

export default ProductForm;