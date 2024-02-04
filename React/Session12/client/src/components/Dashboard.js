import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Dashboard() {

    const [users,setUsers]=useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(!token){
            navigate('/login');
        }
    },[])
    const fetchData=async()=>{
        const token=localStorage.getItem('token');
        try {
           const resp= await axios.get('http://localhost:5000/api/user',
           {headers:{authorization:`Bearer: ${token}`}});
           setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return ( 
        <div>
            <h3>Welcome to my Dashboard Page</h3>
            <h3>User List</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>(
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Dashboard;