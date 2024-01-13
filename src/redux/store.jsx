import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import pageReducer from "./slices/DashBoardPageSlice";
import cartReducer from './slices/CartSlice'
import favouriteReducer from './slices/FavouriteSlice'
import { productsApi } from "./apis/productApi";
import { userapi } from "./apis/userApi";
import { ordersApi } from "./apis/OrdersApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    page: pageReducer,
    cart:cartReducer,
    favourite:favouriteReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userapi.reducerPath]: userapi.reducer,
    [ordersApi.reducerPath]:ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, userapi.middleware,ordersApi.middleware),
});

setupListeners(store.dispatch);

export default store;
