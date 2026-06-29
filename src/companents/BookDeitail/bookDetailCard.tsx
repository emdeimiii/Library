
import type { IBook } from "../../types/book.types"

const DetailCard = ({book}: {book: IBook}) =>{
    return(
                  <div className="book-detail-card">
            <div className="book-detail-layout">
              {/* <!-- Book Cover --> */}
              <div className="book-detail-cover">
                <div className="book-cover-placeholder">
                  <span className="book-cover-emoji">📖</span>
                </div>
                <span className={book.isAvailable
                ?"badge badge-unavailable"
                :"badge badge-unavailable"}>{book.isAvailable ? "Доступна" : "Выдана"}</span>
              </div>

              {/* <!-- Book Info --> */}
              <div className="book-detail-info">
                <h1 className="book-detail-title">{book.title}</h1>
                <p className="book-detail-author">{book.author}</p>

                <div className="book-detail-meta">
                  <span className="book-detail-meta-item">
                    <span className="meta-label">Год:</span>
                    <span className="meta-value">{book.year}</span>
                  </span>
                  <span className="book-detail-meta-item">
                    <span className="meta-label">Жанр:</span>
                    <span className="meta-value">{book.genre}</span>
                  </span>
                </div>

                <div className="book-detail-description">
                  <h3>Описание</h3>
                  <p>
                    {book.description}
                  </p>
                </div>

                <div className="book-detail-actions">
                  <button className={book.isAvailable
                  ? "btn btn-primary btn-large"
                  : "btn btn-primary btn-large" } disabled={!book.isAvailable}>
                    {book.isAvailable
                    ? 'Взять книгу'
                    : 'Книга выдана'}
                  </button>
                </div>
              </div>
            </div>
          </div>
    )
}

export default DetailCard