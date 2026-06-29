import Footer from "../../companents/common/footer";
import Header from "../../companents/common/header";
import ReaderList from "../../companents/Readers/readersList";
import './readers.css';
import { mockReaders } from "../../mocks/readers";
import { useEffect, useState } from "react";
import AddReaderModal from "../../companents/addModal/addReaderModal";
import type {KeyboardEvent} from 'react';


const Readerspage = () =>{
  const [showModal, setShowModal] = useState(false);
  const closeHendler = () => {
    setShowModal(false);
  }
  
  useEffect(()=>{
    const escHendler = (event:KeyboardEvent)=>{
      if(event.key === "Escape"){
        closeHendler()
      }
    }
    if(showModal){
    document.addEventListener('keydown', escHendler);
    }
    return()=>{
      document.removeEventListener('keydown', escHendler);     
    }
  }, [showModal])
  
    return(
      <>
          <div className="page-wrapper">
    
    <Header/>
    {/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <div className="page-header">
        <div>
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>{mockReaders.length}</strong>
        </p>
        </div>
        <div>
        <button className="btn btn-primary" id = 'add-reader-btn' onClick={()=>setShowModal(true)} > + Добавить читателя</button>
        </div>
        </div>
{/*  <!-- Reader List --> */}
        <ReaderList readers={mockReaders}/>
        {showModal && <AddReaderModal hendleClick={closeHendler}/>}
      </div>
    </main>

    {/* <!-- ========== FOOTER ========== --> */}
   <Footer/>
  </div>
  </>
    )
}
export default Readerspage