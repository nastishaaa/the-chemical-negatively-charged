import { createSlice } from "@reduxjs/toolkit";
import { getAaparts } from "./operations";

const initialState = {
    aparts: [],
    isLoading: false,
}

const apartsSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAaparts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAaparts.fulfilled, (state, action) => {
                state.aparts = action.payload;
                state.isLoading = false;
            })

    }
});

export default apartsSlice.reducer;