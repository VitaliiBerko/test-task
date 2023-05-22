import { createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },

    extraReducers: builder=>{
        builder
        .addCase()
    }


});

export const usersReducer = usersSlice.reducer