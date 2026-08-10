import { useSelector } from "react-redux";
import BookItem from "./bookItem"
import { getAllBooks } from "../../store/book-slice";
import type { IBook } from "../../types/book.types";

const BookList=()=>{
    const books = useSelector(getAllBooks);
console.log('Текущий список книг:', books);
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