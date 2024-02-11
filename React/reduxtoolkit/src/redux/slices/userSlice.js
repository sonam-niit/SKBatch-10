import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData=createAsyncThunk('user/fetchUser',
async(userId,thunkAPI)=>{
    try {
        const resp= 
        await axios.get('https://jsonplaceholder.typicode.com/users/'+userId);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
const initialState={
    user:{},
    loading:false,
    error:null
}
const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
        })
    },
})

export const {}= userSlice.actions;
export const userReducer= userSlice.reducer;