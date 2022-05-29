import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getLink from "./baseUrl";

export const fetchPosts = createAsyncThunk('posts', async(payload)=>{
    const response = await getLink.get('/posts')
    return response.data
})

export const fetchUsers = createAsyncThunk('users', async(payload)=>{
    const response = await getLink.get('/users')
    return response.data
})

export const fetchTodos = createAsyncThunk('todos', async(payload)=>{
    const response = await getLink.get('/todos')
    return response.data
})

 const oneSlice = createSlice({
    name:'slices',
    initialState:{
        post:[],
        user:[],
        todo:[],
        status:''
    },
    extraReducers:{
        [fetchPosts.pending]: (state, action)=> {
            state.status= "pending!"
        },
        [fetchPosts.fulfilled]: (state, {payload})=>{
            state.status = "success!"
            state.post = payload;
        },
        [fetchPosts.rejected]: (state, action)=>{
            state.status = 'failed!'
        },
        [fetchUsers.fulfilled]: (state, {payload})=>{
            state.status = "success!"
            state.user = payload;
        },
        [fetchTodos.fulfilled]: (state, {payload})=>{
            state.status = "success!"
            state.todo = payload;
        },
    }
});
export const getAllPosts = (state)=> state.jsons.post;
export const getAllUsers = (state)=> state.jsons.user;
export const getAllTodos = (state)=> state.jsons.todo;
export default oneSlice.reducer;