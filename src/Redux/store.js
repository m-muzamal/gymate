import { configureStore } from "@reduxjs/toolkit";
import gymSlice from "./gymSlice/gymSlice";

export const store = configureStore({
    reducer: {
        gym: gymSlice,
    },
})