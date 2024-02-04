import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
function WithAxios() {

    const [users,setUsers]=useState([]);
    const [user,setUser]=useState({name:'',username:'',email:'',password:''});

    const fetchData=async()=>{
        try {
           const resp= await axios.get('http://localhost:5000/api/user');
           setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    const deleteUser=async(id)=>{
        try {
            const resp=await axios.delete(`http://localhost:5000/api/user/${id}`);
            console.log(resp);
            if(resp.status==200){
                toast.success(resp.data.message);
                fetchData();
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post("http://localhost:5000/api/user",user);
            console.log(resp);
            if(resp.status==201){
                toast.success(resp.data.message);
                fetchData();
                setUser({name:'',email:'',username:'',password:''})
            }
        } catch (error) {
            toast.error(error.response.data.message)
            //alert(error.response.data.message)
            console.log(error);
        }
    }
    return ( 
        <div>
            <h3>User List</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>(
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td><button className='btn btn-danger p-3'
                                 onClick={()=>deleteUser(item._id)}>X</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' value={user.name}
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label>UserName</label>
                    <input type='text' placeholder='Enter UserName' value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                    className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>
        </div>
     );
}

export default WithAxios;