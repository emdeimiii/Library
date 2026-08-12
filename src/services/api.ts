import axios from 'axios';
import type { IBookForm } from '../types/book.types';

const API_URL = 'http://localhost:3001';

// 📋 Запрос на получение всех читателей
export const fetchAllReaders = async () => {
  const response = await axios.get(`${API_URL}/readers`);
  return response.data;
};

export const fetchAllBooks = async () => {
  const response = await axios.get(`${API_URL}/books`)
  return response.data;
}

export const newBooks = async (newBookData: IBookForm) =>{
  const response = await axios.post(`${API_URL}/books`, newBookData)
  return response.data;
}
