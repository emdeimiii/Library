
import ReaderList from "../../companents/Readers/readersList";
import './readers.css';
import { mockReaders } from "../../mocks/readers";
import { useEffect, useRef, useState } from "react";
import AddReaderModal from "../../companents/addModal/addReaderModal";
import type {ChangeEventHandler, KeyboardEvent, SubmitEvent} from 'react';



const Readerspage = () =>{
  const [showModal, setShowModal] = useState(false);

 const refFullName = useRef<HTMLInputElement>(null);
 const refEmail = useRef<HTMLInputElement>(null);
 const [phone, setPhone] = useState('');

  const closeHendler = () => {
    setShowModal(false);
  }
  // функ для телефона

  const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
    const inputData = e.target.value.replace(/\D/g, '');
    // валидация и преобразование 
    // setPhone(FormPhone(inputData));
    setPhone(inputData);
  }

  const submitHandler=(ev: SubmitEvent<HTMLFormElement>)=>{
    ev.preventDefault();
    
    // получить данные из формы и валидация
    if (refFullName.current){
    const fullName = refFullName.current.value.trim();}
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
        {showModal && <AddReaderModal hendleClick={closeHendler} handlerSubmit={submitHandler} 
        refFullName={refFullName} refEmail={refEmail}
        phone={phone} handlePhoneChange={handlePhoneChange}
        />}
      </div>
    </main>

    {/* <!-- ========== FOOTER ========== --> */}

  </div>
  </>
    )
}
export default Readerspage