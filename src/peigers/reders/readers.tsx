
import ReaderList from "../../companents/Readers/readersList";
import './readers.css';

import { useEffect, useState } from "react";
import AddReaderModal from "../../companents/addModal/addReaderModal";
import type { KeyboardEvent} from 'react';
import { useSelector } from "react-redux";
import { getCountReaders } from "../../store/reader-slice";



const Readerspage = () =>{

  const [showModal, setShowModal] = useState(false);

  
  const count = useSelector(getCountReaders);

  const closeHendler = () => {
    setShowModal(false);
  }
  //const submitHandler=(ev: SubmitEvent<HTMLFormElement>)=>{
    //ev.preventDefault();
    // получить данные из формы и валидация
    //if (refFullName.current){
    //const fullName = refFullName.current.value.trim();}
 // }
  
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
    
  
    {/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <div className="page-header">
        <div>
        <h1 className="page-title">Читатели библиотеки</h1>
        <p className="page-subtitle">
          Всего читателей: <strong>{count}</strong>
        </p>
        </div>
        <div>
        <button className="btn btn-primary" id = 'add-reader-btn' onClick={()=>setShowModal(true)} > + Добавить читателя</button>
        </div>
        </div>
{/*  <!-- Reader List --> */}
        <ReaderList />
        {showModal && <AddReaderModal 
        closeHendler={closeHendler}
        />}
      </div>
    </main>

    {/* <!-- ========== FOOTER ========== --> */}

  </div>
  </>
    )
}
export default Readerspage