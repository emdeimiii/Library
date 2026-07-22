import type { IReader } from "../../types/reader.types"
import { useState } from "react";
import AddReaderModal from "../addModal/addReaderModal";
import { SubmitEvent } from "react";
import { useRef } from "react";
   import { ChangeEventHandler } from "react";

const ReadersProfile = ({reader}: {reader:IReader}) => {

   const refFullName = useRef<HTMLInputElement>(null);
   const refEmail = useRef<HTMLInputElement>(null);
   const [phone, setPhone] = useState(reader.phone);


     const closeHendler = () => {
    setShowModal(false);
  }
    
  const [showModal, setShowModal] = useState(false);
    const submitHandler=(ev: SubmitEvent<HTMLFormElement>)=>{
      ev.preventDefault();
      // получить данные из формы и валидация
    }

      const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
        const inputData = e.target.value.replace(/\D/g, '');
        // валидация и преобразование 
        // setPhone(FormPhone(inputData));
        setPhone(inputData);
      }

  return(
    <>
                  <div className="profile-header">
            <div className="profile-avatar">
              <span className="profile-avatar-emoji">👤</span>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{reader.fullName}</h1>
              <div className="profile-details">
                <span>✉️ {reader.email}</span>
                <span>📞 {reader.phone}</span>
                <span>📅 {reader.registrationDate.toLocaleDateString('ru-Ru')}</span>
              </div>
              <button className="btn btn-primary" id = 'add-reader-btn' onClick={()=>setShowModal(true)} > Редактировать </button>
              <div className="profile-stats">
                <span>📚 Прочитано книг: <strong>{reader.booksHistory.length}</strong></span>
                <span>📖 Активных книг: <strong>{reader.activeBooks.length}</strong></span>
              </div>
            </div>
          </div>
           {showModal && <AddReaderModal hendleClick={closeHendler} handlerSubmit={submitHandler} 
        refFullName={refFullName} refEmail={refEmail}
        phone={phone} handlePhoneChange={handlePhoneChange}
        reader={reader}
        />}
          </>
    )
}
export default ReadersProfile