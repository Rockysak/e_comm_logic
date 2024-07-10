import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productslice'
import cartReducers from "../features/cartslice";

const store = configureStore({
    reducer: {
        product : productReducer,
        cart :cartReducers,
    }
})

export default store;