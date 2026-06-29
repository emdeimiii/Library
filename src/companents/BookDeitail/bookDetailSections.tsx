import type { IBook } from "../../types/book.types"


interface BookDetailSectionsProps {
  book: IBook
}

const DetalSection = ({book}:BookDetailSectionsProps ) =>{
    return(
                  <div className="book-detail-sections">
            <div className="book-detail-section">
              <h3 className="section-title">Информация о книге</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Издательство:</span>
                  <span className="info-value">{book.publisher}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Страниц:</span>
                  <span className="info-value">{book.pages}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Язык:</span>
                  <span className="info-value">{book.language}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">ISBN:</span>
                  <span className="info-value">{book.isbn}</span>
                </div>
              </div>
            </div>
          </div>
    )
}
export default DetalSection