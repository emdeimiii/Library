import { configureStore } from "@reduxjs/toolkit";
import { ReaderSlice } from "./reader-slice";

export const store = configureStore({
    reducer:{
        readers: ReaderSlice.reducer,
        //book: 
    }
});
