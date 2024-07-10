
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;


















// const ADD_TO_CART = 'ADD_TO_CART';

// export const addToCart = (product) => ({
//     type: ADD_TO_CART,
//     payload : product
// });

// const initialState = {
//     items : [],
// }

// const cartReducers = (state=initialState,action) => {
//     switch(action.type) {
//         case ADD_TO_CART: 
//             return {
//                 ...state ,
//                 items : [state.items,action.payload],
//             };
//             default : 
//             return state;
//         }
// };

// export default cartReducers;