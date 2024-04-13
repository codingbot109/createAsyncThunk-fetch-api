
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getUser = createAsyncThunk("user/getUser" , async()=>{
    try{
      const response = await axios.get("https://api.github.com/users")
      return response.data;
    }catch(error){
        console.log("Error occured in getUser" , error);
        throw error;
    }
})


const userGet = createSlice({
    name:"user",
    initialState:{
        loading: false,
        users:[],
        error:"",
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getUser.pending , (state)=>{
             state.loading = true;
           
        });builder
        .addCase(getUser.fulfilled , (state , action)=>{
             state.loading = false;
             state.users.push(...action.payload)
        });builder
        .addCase(getUser.rejected , (state , action)=>{
             state.loading = false;
             state.error = action.error.message
        })
    }
})

export default userGet.reducer