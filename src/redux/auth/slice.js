import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase()
    }
});

export default authSlice.reducer;