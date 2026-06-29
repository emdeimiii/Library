
import DetalSection from '../../companents/BookDeitail/bookDetailSections'
import './bookDeitel.css'
import { mockBooks } from "../../mocks/book"
import { useParams } from 'react-router-dom'
import DetailCard from '../../companents/BookDeitail/bookDetailCard'
import { Link } from 'react-router-dom'
import Footer from '../../companents/common/footer'
import Header from '../../companents/common/header'



const BookDeitel = () =>{
      const { id } = useParams()
      const book = mockBooks.find(b => b.id === id)
       if (!book) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📚</div>
        <h3>Книга не найдена</h3>
        <p>Возможно, она была удалена или перемещена</p>
      </div>
    )
  }
    return (
    
  <div className="page-wrapper">
    {/* <!-- Header --> */}
    <Header/>

    {/* <!-- Main Content --> */}
    <main className="main-content">
      <div className="container">
        <div className="book-detail-wrapper">
          {/* <!-- Back Button --> */}
          <Link to={'/'} className="back-link" >← Назад к каталогу</Link>
          
          {/* <!-- Book Detail Card --> */}

          <DetailCard  book ={book}/>

          {/* <!-- Additional Info --> */}
          <DetalSection book ={book}/>
        </div>
      </div>
    </main>

    {/* <!-- Footer --> */}
   <Footer/>
  </div>


    )
}

export default BookDeitel
