
import type { IReader } from '../../types/reader.types';
import './addingModal.css';
import type { SubmitEvent, MouseEvent, RefObject } from 'react';

type AddReaderModalProps = {
  hendleClick: ()=>void;
  handlerSubmit: (ev: SubmitEvent<HTMLFormElement>)=>void;
  phone: string;
  handlePhoneChange:()=>void;
  refFullName:RefObject<HTMLInputElement> | null;
  refEmail:RefObject<HTMLInputElement> | null;
  reader?: IReader
}
const AddReaderModal = ({hendleClick, handlerSubmit,refFullName, refEmail, phone, handlePhoneChange, reader} : AddReaderModalProps) => {
  const OverlayClickHendler = (event : MouseEvent<HTMLDivElement>) =>{
    if(event.target === event.currentTarget){
      hendleClick()
    }
  }
    return(
    <div className="modal-overlay" onClick={OverlayClickHendler}>
      <div className="modal">
        <div className="modal-header">
          <h2>Регистрация читателя</h2>
          <button className="modal-close" onClick={hendleClick}>×</button>
        </div>
        
        <form onSubmit={handlerSubmit} >
          <div className="form-group">
            <label htmlFor="fullName">ФИО *</label>
            <input
              id="fullName"
              type="text"
              ref={refFullName}
              defaultValue={reader?.fullName || ''}
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              ref={refEmail}
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Телефон *</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={()=>{handlePhoneChange}}
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-outline" onClick={hendleClick}>
              Отмена
            </button>
            <button type="submit" className="btn btn-primary">
              Зарегистрировать
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default AddReaderModal;
