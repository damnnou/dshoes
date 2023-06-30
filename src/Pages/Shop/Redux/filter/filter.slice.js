import { createSlice } from "@reduxjs/toolkit";

const initialState = 'yeezy';

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter(state, action) {
            console.log(action);
            state = action.payload;
        },
    }
})

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
