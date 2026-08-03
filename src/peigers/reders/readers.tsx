
import ReaderList from "../../companents/Readers/readersList";
import './readers.css';

import { useEffect, useState } from "react";
import AddReaderModal from "../../companents/addModal/addReaderModal";

import type { ChangeEventHandler, KeyboardEvent, SubmitEvent } from 'react';


import { useSelector } from "react-redux";
import { getCountReaders } from "../../store/reader-slice";



const Readerspage = () => {

  const [showModal, setShowModal] = useState(false);

  const refFullName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState('');



  

  const count = useSelector(getCountReaders);

  const closeHendler = () => {
    setShowModal(false);
  }

  const formatPhone = (raw: string): string => {
    // +7 (999) 999-99-99
    let result = '';
    if (raw.length === 0) return result;
    result += '+7';
    if (raw.length > 1) {
      result += ' (' + raw.substring(1, 4);
    }
    if (raw.length > 4) {
      result += ') ' + raw.substring(4, 7);
    }
    if (raw.length > 7) {
      result += '-' + raw.substring(7, 9);
    }
    if (raw.length > 9) {
      result += '-' + raw.substring(9, 11);
    }
    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    const formatted = formatPhone(raw); 
    setPhone(formatted);
  };


  const submitHandler = (ev: SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // получить данные из формы и валидация
    if (refFullName.current) {
      const fullName = refFullName.current.value.trim();
    }
  }

  useEffect(() => {
    const escHendler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {


        closeHendler()
      }
    }
    if (showModal) {
      document.addEventListener('keydown', escHendler);
    }
    return () => {
      document.removeEventListener('keydown', escHendler);
    }
  }, [showModal])


  return (
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
                <button className="btn btn-primary" id='add-reader-btn' onClick={() => setShowModal(true)} > + Добавить читателя</button>
              </div>
            </div>
            {/*  <!-- Reader List --> */}
            <ReaderList />
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