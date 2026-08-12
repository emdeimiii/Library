import { createSlice, } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import type { IBook } from "../types/book.types"
import type { AppDispatch, } from "./store"
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

    }})

export const getCountBooks = (state) => state.books.books.length;
export const getAllBooks = (state) => state.books.books;
export const selectAllBooks = (state) => state.books;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
