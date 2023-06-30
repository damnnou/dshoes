import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBy: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filterBy = action.payload;
        },
    }
})

export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;
