
import type { IReader } from "../types/reader.types";
import { mockReaders } from "../mocks/readers";
import { createSlice } from "@reduxjs/toolkit";

type TInitState = {
    readers: IReader[],
    error: string
}

const initState: TInitState = {
    readers: mockReaders,
    error: ''
}
export const ReaderSlice = createSlice({
    name: 'reader',
    initialState : initState,
    reducers:{
        addReader: (state, data) =>{
            data.registrationDate = '2026-07-27';
           data.booksHistory= [];
           data.activeBooks=[];
            state.readers.push(data)
        }
    }
});

export const getAllReaders =  (state) => state.readers.readers 
export const getCountReaders = (state) => state.readers.readers.length 