import { useState, type MouseEvent } from "react"
import './addingModal.css';
import type { IBook } from "../../types/book.types";
import { mockBooks } from "../../mocks/book";


type AddModalExtraditionProps = {
  handleClickExtradition: () => void;
  onExtradition: (book: IBook) => void;
};

const AddModalExtradition = ({ handleClickExtradition, onExtradition }: AddModalExtraditionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const OverlayClickHendlerExtradition = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClickExtradition()
    }
  }
    const searchBooks = (query: string) => {
      const availableBooks = mockBooks.filter(book => book.isAvailable);
      return availableBooks.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    };
    const handleIssueBook = (book: IBook) => {
    onExtradition(book);     
    handleClickExtradition(); 
  };
    const foundBooks = searchBooks(searchQuery);


  return (

    <div className="modal-overlay" id="issueBookModal" onClick={OverlayClickHendlerExtradition}>
      <div className="modal modal-wide">
        <div className="modal-header">
          <h2>📚 Выдача книг</h2>
          <button className="modal-close" onClick={handleClickExtradition}>×</button>
        </div>

        {/* <!-- Поиск --> */}
        <div className="form-group">
          <label htmlFor="bookSearch">Поиск книги</label>
          <input
            type="text"
            id="bookSearch"
            placeholder="Поиск по названию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             
          />
        </div>

        {/* <!-- Счётчик найденных --> */}
        <div className="search-results-header">
          Найдено: <span id="foundCount">{foundBooks.length}</span>
        </div>

        {/* <!-- Список книг --> */}
        <div className="book-list" id="bookList">
           {foundBooks.length > 0 ? (
            foundBooks.map((book) => (
              <div 
                key={book.id} 
                className="book-item" 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '10px', 
                  borderBottom: '1px solid #eee' 
                }}
              >
                <div>
                  <strong>{book.title}</strong>
                  <div style={{ fontSize: '12px', color: '#666' }}>{book.author}</div>
                </div>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => handleIssueBook(book)}
                >
                  Выдать
                </button>
              </div>
            ))
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
              {searchQuery ? 'Книги не найдены' : 'Введите название для поиска'}
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleClickExtradition}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}
export default AddModalExtradition