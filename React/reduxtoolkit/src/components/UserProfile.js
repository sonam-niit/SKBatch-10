import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slices/userSlice';

function UserProfile({userId}) {
    const dispatch= useDispatch();
    const {user,loading,error}= useSelector(state=>state.userRed);

    useEffect(()=>{
        dispatch(fetchData(userId))
    },[dispatch,userId])

    if(loading){
        return <div>Loading.......</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }
    return ( 
        <div>
            <h3>User Profile</h3>
            <h4>Welcome {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
     );
}

export default UserProfile;