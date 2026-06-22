import type { IBook } from "../../types/book.types"
import BookItem from "./bookItem"
interface BookListPops{
    books: IBook[];
}

const BookList=({books}: BookListPops)=>{
    if (books.length === 0 ){
        return(
        <div className="empty-state">
            <div className="empty-state-icon"></div>
            <h3>Книги не найдены</h3>
            <p>Попробуйте изменить параментры поиска</p>
        </div>)
    }
    return(
        <div className="card-grid">
            {books.map((book) => {
                return <BookItem book={book} key={book.id} />;
            })}
        </div>
        )
}
export default BookList