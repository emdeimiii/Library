import BookList from "../../companents/books/bookList"
import Footer from "../../companents/common/footer"
import Header from "../../companents/common/header"
import './books.css'
const BookPage = () =>{
    return(
          <div className="page-wrapper">
<Header/>

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
          <span className="search-result-count">Найдено: 10</span>
        </div>
        <BookList/>
      </div>
    </main>

    <Footer/>
  </div>
    )
}

export default BookPage
