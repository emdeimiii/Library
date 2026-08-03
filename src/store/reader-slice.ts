
import type { IReader } from "../types/reader.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllReaders } from "../services/api";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import type { RootState } from "@reduxjs/toolkit/query";

type TInitState = {
    readers: IReader[],
     status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string
}

const initState: TInitState = {
    readers: [],
    status: 'idle',
    error: ''
}

export const getReaders = createAsyncThunk(
  'readers/getAll',
  async () => {
    const data = await fetchAllReaders();
    return data;
  }
);


export const ReaderSlice = createSlice({
    name: 'reader',
    initialState : initState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getReaders.pending, (state)=>{
            state.status = 'loading';

        })
        .addCase(getReaders.fulfilled, (state, actions)=>{
            state.status = 'succeeded';
            state.readers = actions.payload;
        })
        .addCase(getReaders.rejected, (state, actions)=>{
            state.status = 'failed';
            state.error = actions.error.message || 'Ошибка загрузки';
        });
    }
});

export const getAllReaders =  (state) => state.readers.readers;
export const getCountReaders = (state) => state.readers.readers.length;
export const selectReadersStatus = (state:RootState) => state.readers.status
export const {addReader, updateReader} = StaticRange.arguments ?? {}
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();