import React from 'react';
import products from './products.json';
import { useDispatch } from 'react-redux';

function ItemList() {
    const dispatch = useDispatch();
    const handleAddtocart = (pro) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { id: Date.now(), product:pro,quantity:1 }
        })
        alert("Item Added to cart successfully")
    }
    return (
        <div>
            <h2>Products Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.rating}</td>
                                <td>
                                    <button onClick={() => handleAddtocart(item)}>AddToCart</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ItemList;