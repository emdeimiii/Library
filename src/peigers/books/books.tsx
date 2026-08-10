import BookList from "../../companents/books/bookList";
import './books.css';
import { useEffect, useState } from "react";
import AddBookModal from "../../companents/addModal/addBookModal";
import { getCountBooks } from "../../store/book-slice";
import { useSelector } from "react-redux";

const BookPage = () => {
  const [showModalBook, setShowModalBook] = useState(false)
  const closeHendlerBook = () => {
    setShowModalBook(false)
  }
   const count = useSelector(getCountBooks);
  useEffect(() => {
    const escHendlerBook = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHendlerBook()
      }
    }
    if (showModalBook) {
      document.addEventListener('keydown', escHendlerBook);
    }
    return () => {
      
      document.removeEventListener('keydown', escHendlerBook);
    }
  }, [showModalBook])


  return (
    <div className="page-wrapper">


      {/* <!-- ========== MAIN ========== --> */}
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Каталог книг</h1>
          <p className="page-subtitle">
            Всего книг: <strong>{count}</strong>
          </p>

          {/* <!-- Toolbar --> */}
          <div className="page-toolbar">
            <div className="book-search">
              <input
                type="text"
                className="book-search-input"
                placeholder="🔍 Поиск по названию или автору..."
              />
              <button className="book-search-clear">✕</button>
            </div>
            <div>
              <button className="btn btn-primary" id='add-reader-btn' onClick={() => setShowModalBook(true)} > + Добавить книгу </button>
            </div>
            <span className="search-result-count">Найдено: {count}</span>
          </div>
          <BookList />
          {showModalBook && <AddBookModal hendleClickBook={closeHendlerBook}
          />}
        </div>
      </main>


    </div>
  )
}

export default BookPage
