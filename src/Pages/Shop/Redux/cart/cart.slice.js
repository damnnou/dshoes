import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.push(action.payload);
            console.log(action);
        },

        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;