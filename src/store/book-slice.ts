
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import type { IBook, IBookForm } from "../types/book.types"
import { fetchAllBooks, newBooks } from "../services/api"
import type { AppDispatch, RootState } from "../types/store.types"
type TInitState = {
    books: IBook[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string,
    newBook: null,
    items: []
}

const initState: TInitState = {
    books: [],
    status: 'idle',
    error: '',
    newBook: null,
    items: []

}
export const getBooks = createAsyncThunk(
    'books/getAll',
    async () => {
        const data = await fetchAllBooks();
        return data;
    }
)
export const addBooksPost = createAsyncThunk(
    'books/addBook',
    async (newBookData: IBookForm, { rejectWithValue }) => {
        try {
            const data = await newBooks(newBookData);
            return data;
        } catch (error) {
            return rejectWithValue('Ошибка при добавлении книги');
        }
    }
);


export const BookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        // addBook: (state, action) => {
        //     const newBook = action.payload;
        //     newBook.title = '';
        //     newBook.author = '';
        //     state.books.push(newBook);
        //     console.log(action);

        // }
    },
    extraReducers: (builder) => {

        builder
            .addCase(getBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBooks.fulfilled, (state, actions) => {
                state.status = 'succeeded';
                state.books = actions.payload;
            })
            .addCase(getBooks.rejected, (state, actions) => {
                state.status = 'failed';
                state.error = actions.error.message || 'Ошибка загрузки'
            })


            .addCase(addBooksPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addBooksPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items.push(action.payload);
                console.log('  Книга добавлена на сервер:', action.payload);
            })
            .addCase(addBooksPost.rejected, (state) => {
                state.status = 'failed';
                state.error = 'Ошибка загрузки';

            })

    }
})

export const getCountBooks = (state: RootState) => state.books.books.length;
export const getAllBooks = (state: RootState) => state.books.books;
// export const { addBook } = BookSlice.actions;
//export const selectAllBooks = (state: RootState) => state.books;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const selectBooksStatus = (state: RootState) => state.books.status

