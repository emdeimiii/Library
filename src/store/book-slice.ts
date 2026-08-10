import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import type { IBook } from "../types/book.types"
import type { AppDispatch, RootState } from "./store"
type TInitState = {
    books: IBook[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string
}

const initState: TInitState = {
    books: [],
    status: 'idle',
    error: ''
}

export const BookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        addBook: (state, action) => {
            const newBook = action.payload;
            newBook.title = '';
            newBook.author = '';
            state.books.push(newBook);
            console.log(action);

        }},
    })

export const getCountBooks = (state: RootState) => state.books.books.length;
export const getAllBooks = (state: RootState) => state.books.books;
export const { addBook } = BookSlice.actions;
export const selectAllBooks = (state: RootState) => state.books;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
