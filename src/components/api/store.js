import { configureStore } from "@reduxjs/toolkit";
import oneSlice from "./slices";

export const store = configureStore({
    reducer:{
        jsons: oneSlice
    }
})