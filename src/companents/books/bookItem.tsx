import { Link } from "react-router-dom"
import type { IBook } from "../../types/book.types"


const BookItem = ({book}: {book: IBook}) =>{
    return(
                    <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className={book.isAvailable
              ? "book-status-badge badge badge-available"
              :"book-status-badge badge badge-unavailable"}>
                {book.isAvailable
              ?'Доступна'
              :'Выдана'}
              </span>
            </div>
            <div className="book-content">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="book-meta">
                <span className="book-year">{book.year}</span>
                <span className="book-genre">{book.genre}</span>
              </div>
              <p className="book-description">
                {book.description}
              </p>
              <Link to={`/books/${book.id}`} className="btn btn-primary btn-block">Подробнее</Link>
            </div>
          </article>
    )
}
export default BookItem