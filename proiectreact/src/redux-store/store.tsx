import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./fetch-produse";
import cartReducer from "./cartNotification";

export const store = configureStore({
    reducer: {
        [productsAPI.reducerPath]: productsAPI.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
})

setupListeners(store.dispatch);