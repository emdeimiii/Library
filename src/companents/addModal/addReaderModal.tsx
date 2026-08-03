
import { useDispatch } from 'react-redux';
import type { IReader } from '../../types/reader.types';
import './addingModal.css';
import { type SubmitEvent, type MouseEvent, type RefObject, type SubmitEventHandler, useRef, useState, type ChangeEventHandler } from 'react';
import { addReader } from '../../store/reader-slice';

type AddReaderModalProps = {
  closeHendler: ()=>void;
//  handlerSubmit: (ev: SubmitEvent<HTMLFormElement>)=>void;
  reader?: IReader | null
}
const AddReaderModal = ({ reader= null, closeHendler} : AddReaderModalProps) => {
  
  const refFullName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState('');
  
  const dispatch = useDispatch()

  const handlerSubmit: SubmitEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault()
    // валидация 
    const newReader = {
        fullName: refFullName.current?.value,
        email: refEmail.current?.value,
        phone: phone
    }
    dispatch(addReader(newReader));
    closeHendler()
  }
  //format phone def
    const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
    const inputData = e.target.value.replace(/\D/g, '');
    // валидация и преобразование 
    // setPhone(FormPhone(inputData));
    setPhone(inputData);
  }


  const OverlayClickHendler = (event : MouseEvent<HTMLDivElement>) =>{
    if(event.target === event.currentTarget){
      closeHendler()
    }
  }
    return(
    <div className="modal-overlay" onClick={OverlayClickHendler}>
      <div className="modal">
        <div className="modal-header">
          <h2>Регистрация читателя</h2>
          <button className="modal-close" onClick={closeHendler}>×</button>
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
            <button type="button" className="btn btn-outline" onClick={closeHendler}>
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
