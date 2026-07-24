import type { MouseEvent, RefObject, SubmitEvent } from 'react';
import './addingModal.css';
import type { IBook } from '../../types/book.types';

interface BookData {
  title: string;
  author: string;
  isbn: string;
  year: string;
  genre: string;
  quantity: string;
} 
type AddBookrModalProps = {
  hendleClickBook: () => void;
  submitHandlerBook: (e: SubmitEvent<HTMLFormElement>) => void;
  handleYearChange: () => void;
  year: string;
  refTitle: RefObject<HTMLInputElement> | null;
  refAuthor: RefObject<HTMLInputElement> | null;
  refIsbn: RefObject<HTMLInputElement> | null;
  refQuantity: RefObject<HTMLInputElement> | null;
  book: IBook;
   errors: Partial<BookData>;
 
}

const AddBookModal = ({ hendleClickBook, refTitle, refAuthor, refIsbn, refQuantity, year, handleYearChange, submitHandlerBook, book, errors }: AddBookrModalProps) => {
  const OverlayClickHendlerBook = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hendleClickBook()
    }
  }
  return (
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
              ref={refTitle}
              defaultValue={book?.title || ''}
            />
             {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="author">Автор *</label>
            <input
              id="author"
              type="text"
              ref={refAuthor}
               defaultValue={book?.author || ''}
            />
             {errors.author && <span className="error-text">{errors.author}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <input
              id="isbn"
              type="text"
              ref={refIsbn}
                defaultValue={book?.isbn || ''}
            />
              {errors.isbn && <span className="error-text">{errors.isbn}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="year">Год издания</label>
            <input
              id="year"
              type="text"
              value={year}
              onChange={handleYearChange}
               maxLength={4}
            />
               {errors.year && <span className="error-text">{errors.year}</span>}
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
              ref={refQuantity}
            />
          {errors.quantity && <span className="error-text">{errors.quantity}</span>}
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
