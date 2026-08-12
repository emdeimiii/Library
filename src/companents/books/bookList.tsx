import { useDispatch, useSelector } from "react-redux";
import BookItem from "./bookItem"
import { getAllBooks, getBooks, selectBooksStatus } from "../../store/book-slice";
import type { IBook } from "../../types/book.types";
import type { AppDispatch } from "../../store/store";
import { useEffect } from "react";

const BookList=()=>{
    const dispatch = useDispatch<AppDispatch>();
    const books = useSelector(getAllBooks);
    const status = useSelector(selectBooksStatus);
   console.log('Текущий список книг:', books);
   useEffect(()=>{
    if (status === 'idle'){
        dispatch(getBooks());
    }
   }, [status, dispatch]);
   if (status === 'loading'){
     return(
        <div>⏳ Загрузка..</div>
    )
   }
   if (status === 'failed') return <div>❌ Ошибка</div>;

   if (books.length === 0 ){
        return(
        <div className="empty-state">
            <div className="empty-state-icon"></div>
            <h3>Книги не найдены</h3>
            <p>Попробуйте изменить параметры поиска</p>
        </div>)
    }
    return(
        
        <div className="card-grid">
            {books.map((book: IBook) => {
                
                return <BookItem key={book.id} book={book} />;
            })}
            
        </div>
        )
}
export default BookList