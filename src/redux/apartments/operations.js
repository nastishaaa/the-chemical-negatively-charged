import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAaparts = createAsyncThunk(
    'aparts/getAaparts', 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://the-chemical-negatively-charged-app.onrender.com/aparts');
            return res.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)