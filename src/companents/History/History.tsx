import type { IBookHistory } from "../../types/reader.types";
import { mockBooks } from "../../mocks/book";
import type { IBook } from "../../types/book.types";

interface HistoryProps {
    history:IBookHistory[];
      books: IBook[]
}
const HistorySection= ({history, books}: HistoryProps) =>{
    return(
        <section className="profile-section">
      <h2 className="profile-section-title">📚 История чтения</h2>
      <div className="history-list">
        {history.length === 0 ? (
          <p className="text-muted">История пуста</p>
        ) : (
          history.map((e) => {
              console.log('History entry:', e);
            const findBook = books.find((mockBook) => mockBook.id === e.bookId);
            const title = findBook ? findBook.title : 'Неизвестная книга';
            
            const takenAt = e.takenAt 
              ? e.takenAt.toLocaleDateString('ru-RU')
              : e.takenAt;

            const returnedAt = e.returnedAt
              ? `Возвращена: ${e.returnedAt.toLocaleDateString('ru-RU')}`
              : '(активна)';

            return (
              <div className="history-item" key={e.id}>
                <span className="history-book">{title}</span>
                <span className="history-date">
                  Взята: {takenAt}, {returnedAt}
                </span>
              </div>
            );
          })
        )}
      </div>
    </section>
    )

}
export default HistorySection