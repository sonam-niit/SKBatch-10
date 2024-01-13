import React from 'react';

function ProductDetail({selected}) {
    return ( 
        <div>
            <h2>Product Detail</h2>
            <ul className='list-group'>
                <li className='list-group-item'>Id: {selected.id}</li>
                <li className='list-group-item'>Name: {selected.name}</li>
                <li className='list-group-item'>Price: {selected.price}</li>
                <li className='list-group-item'>Category: {selected.category}</li>
                <li className='list-group-item'>Rating: {selected.rating}</li>
            </ul>
        </div>
     );
}

export default ProductDetail;