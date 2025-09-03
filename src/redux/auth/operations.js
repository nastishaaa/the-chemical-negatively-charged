import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'auth/login',
    async (body, thunkAPI) => {
        try {
            const res = await axios.post('https://the-chemical-negatively-charged-app.onrender.com/auth/login', body);
            return res.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async (body, thunkAPI) => {
        try {
            const res = await axios.post('https://the-chemical-negatively-charged-app.onrender.com/auth/register', body);
            return res.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('https://the-chemical-negatively-charged-app.onrender.com/auth/logout');
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);