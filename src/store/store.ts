import { configureStore } from "@reduxjs/toolkit";
import { ReaderSlice } from "./reader-slice";
import { BookSlice } from "./book-slice";

export const store = configureStore({
    reducer:{
        readers: ReaderSlice.reducer,
        books: BookSlice.reducer 
    }
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
