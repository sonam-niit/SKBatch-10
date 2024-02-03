import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function UserDetails() {

    // const params= useParams();
    // const id= params.id;
    const { id } = useParams(); //Directly Destructure
    const [user, setUsers] = useState(null);
    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h3 className='mt-3'>UserDetails: {id} </h3>
            {user && <ul className='list-group'>
                <li className='list-group-item'>Name: {user.name}</li>
                <li className='list-group-item'>Email: {user.email}</li>
                <li className='list-group-item'>Address: {user.address.street},  {user.address.suite}, {user.address.city}, Zipcode:  {user.address.zipcode}</li>
                <li className='list-group-item'>Phone: {user.phone}</li>
                <li className='list-group-item'>Website: {user.website}</li>
                <li className='list-group-item'>company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</li>
            </ul>
            }
        </div>
    );
}

export default UserDetails;