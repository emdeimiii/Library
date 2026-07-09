import './addingModal.css';

type AddBookrModalProps = {
  hendleClickBook: ()=>void
}

const AddBookModal = ({hendleClickBook} : AddBookrModalProps) =>{
    const OverlayClickHendlerBook = (e : any) =>{
        const clickTargetBook = e.target;
        if(clickTargetBook.className === 'modal-overlay'){
      hendleClickBook()
    }}
    return(
        <div className="modal-overlay" onClick={OverlayClickHendlerBook}>
      <div className="modal">
        <div className="modal-header">
          <h2>Добавление книги</h2>
          <button className="modal-close" onClick={hendleClickBook}>×</button>
        </div>
        
        <form >
          <div className="form-group">
            <label htmlFor="title">Название *</label>
            <input
              id="title"
              type="text"
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="form-group">
            <label htmlFor="author">Автор *</label>
            <input
              id="author"
              type="text"
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <input
              id="isbn"
              type="text"
            />
            <span className="error-text">Текст ошибки</span>
          </div>

          <div className="form-group">
            <label htmlFor="year">Год издания</label>
            <input
              id="year"
              type="number"
            />
            <span className="error-text">Текст ошибки</span>
          </div>

          <div className="form-group">
            <label htmlFor="genre">Жанр</label>
            <select id="genre">
              <option value="">Выберите жанр</option>
              <option value="fiction">Художественная литература</option>
              <option value="science">Научная литература</option>
              <option value="educational">Учебная литература</option>
              <option value="children">Детская литература</option>
              <option value="other">Другое</option>
            </select>
            <span className="error-text">Текст ошибки</span>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Количество экземпляров *</label>
            <input
              id="quantity"
              type="number"
              min="1"
            />
            <span className="error-text">Текст ошибки</span>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-outline" onClick={hendleClickBook}>
              Отмена
            </button>
            <button type="submit" className="btn btn-primary">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}


export default AddBookModal
    