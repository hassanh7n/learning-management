import { configureStore } from "@reduxjs/toolkit";
import userSlice from './redux/User'



export const store = configureStore({
    reducer : {
        user : userSlice,
    },
})