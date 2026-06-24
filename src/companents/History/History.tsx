import type { IBookHistory } from "../../types/reader.types";
import { mockBooks } from "../../mocks/book";

interface HistoryProps {
    history:IBookHistory[];
}
const HistorySection= ({history}: HistoryProps) =>{
    return(
    <section className="profile-section">
            <h2 className="profile-section-title">📚 История чтения</h2>
            <div className="history-list">
                {history.map(book=>{
                    const returnedAt = book.returnedAt ? `Возвращена: ${book.returnedAt.toLocaleDateString('ru-Ru')}`:"(активна)"
                    const findBook = mockBooks.find((mockBook)=>{
                        return book.bookId === mockBook.id;
                    })
                    const title = findBook ? findBook.title : ''
                    return(
                        <div className="history-item" key={book.bookId}>
                <span className="history-book">{title}</span>
                <span className="history-date">
                  Взята: {book.takenAt.toLocaleDateString('ru-Ru')}, {returnedAt}
                </span>
                </div>
                    )
                })}
              
              </div>
          </section>)

}
export default HistorySection