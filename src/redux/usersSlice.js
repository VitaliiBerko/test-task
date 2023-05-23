import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";
import Notiflix from 'notiflix';



const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },

    extraReducers: builder=>{
        builder
        .addCase(fetchUsers.pending, state=>{
            state.isLoading = true;           
        })
        .addCase(fetchUsers.fulfilled, (state, {payload})=>{
            state.isLoading= false;
            state.error = null;
            state.items= payload;
        })
        .addCase(fetchUsers.rejected, (state, {payload})=>{
            state.isLoading= false;
            state.error = payload;
            Notiflix.Notify.failure(payload)

        })
    }


});

export const usersReducer = usersSlice.reducer