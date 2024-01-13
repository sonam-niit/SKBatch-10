import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faRemove} from '@fortawesome/free-solid-svg-icons';
import ProductForm from './productform';
import ProductDetail from './productdetails';

function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: "Pen", price: 10, category: "stationary", rating: 4.5 },
        { id: 2, name: "Pencil", price: 4, category: "stationary", rating: 4.3 }
    ]);

    const [selected,setSelected]= useState(null);
    const addProduct=(product)=>{
        product.id=Date.now();
        setProducts([...products,product]);
        alert("Product Added");
    }
    const handleDelete=(id)=>{
        setProducts(products.filter(item=>item.id!==id));
    }
    return (
        <div>
            <h2 className='text-bg-primary p-2 mt-3'>Product List</h2>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Opeations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td><button  onClick={()=>setSelected(item)}>
                                <FontAwesomeIcon icon={faEye} style={{color: "#1f513a"}} />
                                </button>
                                <button className='ms-3' onClick={()=>handleDelete(item.id)} >
                                <FontAwesomeIcon icon={faRemove} style={{color: "red"}} />
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='mt-3'>
                <div className='row'>
                    <div className='col'>
                        <ProductForm addProduct={addProduct} />
                    </div>
                    <div className='col'>
                        {selected && <ProductDetail selected={selected} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;