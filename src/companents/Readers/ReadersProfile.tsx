import type { IReader } from "../../types/reader.types"
import { useState } from "react";
import AddReaderModal from "../addModal/addReaderModal";
const ReadersProfile = ({reader}: {reader:IReader}) => {
   const closeHendler = () => {
    setShowModal(false);
  }
  const [showModal, setShowModal] = useState(false);

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
           {showModal && <AddReaderModal closeHendler={closeHendler}
        reader={reader}
        />}
          </>
    )
}
export default ReadersProfile