import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserList() {
    const [users,setUsers]= useState([]);
    const navigate= useNavigate();
    const fetchData=async()=>{
        try {
            const resp= await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const viewUser=(id)=>{
        navigate(`/users/${id}`)
    }
    return ( <div>
            <h3>User List</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-success' 
                                onClick={()=>viewUser(user.id)}
                                >view</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div> );
}

export default UserList;