import BookList from "../../companents/books/bookList";
import './books.css';
import { mockBooks } from "../../mocks/book";
import { useEffect, useRef, useState } from "react";

import type { ChangeEventHandler, KeyboardEvent } from 'react';
import AddBookModal from "../../companents/addModal/addBookModal";
import type { SubmitEvent } from "react";

interface BookData {
  title: string;
  author: string;
  isbn: string;
  year: string;
  quantity: string;
}

const BookPage = () => {
  const [showModalBook, setShowModalBook] = useState(false)
  const closeHendlerBook = () => {
    setShowModalBook(false)
  }
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

  const refTitle = useRef<HTMLInputElement>(null)
  const refAuthor = useRef<HTMLInputElement>(null)
  const refIsbn = useRef<HTMLInputElement>(null)
  const [year, setYear] = useState('');
  const refQuantity = useRef<HTMLInputElement>(null)
   const [errors, setErrors] = useState<Partial<BookData>>({});

  const handleYearChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputDataBook = e.target.value.replace(/[^\d]/g, '');
    setYear(inputDataBook)
  }

  const submitHandlerBook = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
     const newErrors: Partial<BookData> = {};
       let isValid = true;
      const title = refTitle.current?.value.trim() || '';
      const author = refAuthor.current?.value.trim() || '';
       const quantity = refQuantity.current?.value.trim() || '';
        const isbn = refIsbn.current?.value.trim() || '';
      if (!title.trim()) {
      newErrors.title = 'Введите название книги';
      isValid = false;
    }
    if (!author.trim()) {
      newErrors.author = 'Введите имя автора';
      isValid = false;
    }
    if (!year) {
      newErrors.year = 'Введите год';
      isValid = false;
    } else if (year.length !== 4) {
      newErrors.year = 'Год должен состоять из 4 цифр';
      isValid = false;
    }
     if (!quantity || Number(quantity) <= 0) {
      newErrors.quantity = 'Количество должно быть больше 0';
      isValid = false;
    }
     if (!isValid) {
      setErrors(newErrors);
      return;
    }
     setErrors({});
    }
    
  return (
    <div className="page-wrapper">


      {/* <!-- ========== MAIN ========== --> */}
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Каталог книг</h1>
          <p className="page-subtitle">
            Всего книг: <strong>10</strong>
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
            <span className="search-result-count">Найдено: 10</span>
          </div>
          <BookList books={mockBooks} />
          {showModalBook && <AddBookModal hendleClickBook={closeHendlerBook}
            refTitle={refTitle} refAuthor={refAuthor} refIsbn={refIsbn} refQuantity={refQuantity}
            year={year} handleYearChange={handleYearChange} submitHandlerBook={submitHandlerBook}
            errors={errors}

          />}
        </div>
      </main>


    </div>
  )
}

export default BookPage
