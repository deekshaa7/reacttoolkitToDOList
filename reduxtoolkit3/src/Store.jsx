import{ configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todoSlice";

const Store=configureStore({
    reducer:{
        todo:todoReducer
    }
})
export default Store;