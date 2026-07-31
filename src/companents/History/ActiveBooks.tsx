import type { IBook } from "../../types/book.types";

  interface ActiveBooksProp {
  activeBooks: IBook[];
  onReturn: (bookId: string) => void;
}

const ActiveBooks = ({activeBooks, onReturn}: ActiveBooksProp) =>{
  if (activeBooks.length === 0) {
    return (
      <section className="profile-section">
        <h2 className="profile-section-title">📖 Активные книги</h2>
        <p className="text-muted">У читателя нет активных книг.</p>
      </section>
    );
  }

    return(
              <section className="profile-section">
            <h2 className="profile-section-title">📖 Активные книги</h2>
            <div className="active-books-list">

              {activeBooks.map((book) => (
          <div
            key={book.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '10px',
              padding: '8px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px'
            }}
            >
              <span className="active-book-item">
                 {book.title}
                <span className="active-book-author">({book.author})</span>
              </span>
                <button 
              className="btn btn-danger btn-sm"
              onClick={() => onReturn(book.id)}
              title="Вернуть книгу"
            >
              ↩ Вернуть
            </button>
          </div>
        ))}
              
            </div>
          </section>)
}
export default ActiveBooks