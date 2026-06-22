import Footer from "../../companents/common/footer"
import Header from "../../companents/common/header"
import ReaderList from "../../companents/Readers/readersList"
import './readers.css'
import { mockReaders } from "../../mocks/readers"
const Readerspage = () =>{
    return(
          <div className="page-wrapper">
    
    <Header/>
    {/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>5</strong>
        </p>
{/*  <!-- Reader List --> */}
        <ReaderList readers={mockReaders}/>
      </div>
    </main>

    {/* <!-- ========== FOOTER ========== --> */}
   <Footer/>
  </div>
    )
}
export default Readerspage