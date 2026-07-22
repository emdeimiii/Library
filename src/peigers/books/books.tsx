import BookList from "../../companents/books/bookList";
import './books.css';
import { mockBooks } from "../../mocks/book";
import { useEffect, useState } from "react";

import type {KeyboardEvent} from 'react';
import AddBookModal from "../../companents/addModal/addBookModal";


const BookPage = () =>{
  const [showModalBook, setShowModalBook] = useState(false)
  const closeHendlerBook = () => {
    setShowModalBook(false)
  }
  useEffect(()=>{
    const escHendlerBook = (e : KeyboardEvent) =>{
      if (e.key === "Escape"){
        closeHendlerBook()
      }
    }
    if(showModalBook){
    document.addEventListener('keydown', escHendlerBook);
    }
    return()=>{
      document.removeEventListener('keydown', escHendlerBook);     
    }
  }, [showModalBook])
  
    return(
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
        <button className="btn btn-primary" id = 'add-reader-btn' onClick={()=>setShowModalBook(true)} > + Добавить книгу </button>
        </div>
          <span className="search-result-count">Найдено: 10</span>
        </div>
        <BookList books ={mockBooks}/>
        {showModalBook && <AddBookModal  hendleClickBook={closeHendlerBook}/>}
      </div>
    </main>

  
  </div>
    )
}

export default BookPage
