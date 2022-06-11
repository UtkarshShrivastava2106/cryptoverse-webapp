import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPIFetch";
import {CryptoNewsApi} from "../services/CryptoNewsApi"
export default configureStore({
    reducer:{
[cryptoApi.reducerPath]:cryptoApi.reducer,
[CryptoNewsApi.reducerPath]:CryptoNewsApi.reducer,
    },
})