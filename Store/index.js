import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../Features/Categories'
import productsReducer from "../Features/Products"
import cartReducer from "../Features/Cart"
import orderReducer from "../Features/orders"
import authReducer from "../Features/Auth"

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: orderReducer,
        auth: authReducer,

    }
})

export default store