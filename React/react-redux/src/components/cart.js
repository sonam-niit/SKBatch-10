import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Cart() {

    const items = useSelector(state => state.item.items);
    const total= useSelector(state=>state.item.total);
    const dispatch= useDispatch();
    const handleDelete=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    return (
        <div>
            <h3>Products in CART</h3>
            {items.length==0 ? 'CART is EMPTY': items.length+" Items in CART"}
            "Total:" { total }
            {
                items.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.product.name}, {item.product.price}
                        <button onClick={()=>handleDelete(item.id)}>X</button> </p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Cart;