
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartProductReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
    reducer:{
        products: productReducer,
        cartProducts: cartProductReducer,
        filter: filterReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => {
    //     return [...getDefaultMiddleware(), logger]
    // }
})

export default store