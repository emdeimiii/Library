import { useRef, useState, type ChangeEventHandler, type MouseEvent, type SubmitEvent } from 'react';
import './addingModal.css';
import type { IBook } from '../../types/book.types';
import { addBook } from '../../store/book-slice';
import { useAppDispatch } from '../../store/reader-slice';

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
  book?: IBook | null
}

const AddBookModal = ({ hendleClickBook, book = null }: AddBookrModalProps) => {

  const refTitle = useRef<HTMLInputElement>(null)
  const refAuthor = useRef<HTMLInputElement>(null)
  const refIsbn = useRef<HTMLInputElement>(null)
  const refQuantity = useRef<HTMLInputElement>(null)

  const [errors, setErrors] = useState<Partial<BookData>>({});
  const [year, setYear] = useState('');

  const dispatch = useAppDispatch()

  const submitHandlerBook = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = refTitle.current?.value.trim() || '';
    const author = refAuthor.current?.value.trim() || '';
    const quantity = refQuantity.current?.value.trim() || '';
    const isbn = refIsbn.current?.value.trim() || '';

    const newErrors: Partial<BookData> = {};
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = 'Введите название книги';
      isValid = false;
    }
    if (!author.trim()) {
      newErrors.author = 'Введите имя автора';
      isValid = false;
    }
    if (!year) {
      newErrors.year = 'Введите год';
      isValid = false;
    } else if (year.length !== 4) {
      newErrors.year = 'Год должен состоять из 4 цифр';
      isValid = false;
    }
    if (!quantity || Number(quantity) <= 0) {
      newErrors.quantity = 'Количество должно быть больше 0';
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return;
    }
      const newBook = {
      id: Date.now().toString(),
      title: title,
      author: author,
      isbn: isbn,
      year: year,
      quantity: Number(quantity) 
    }
    dispatch(addBook(newBook));
    setErrors({});
    setYear('');
       hendleClickBook(); 
  }

  const handleYearChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputDataBook = e.target.value.replace(/[^\d]/g, '');
    if (inputDataBook.length <= 4) {
        setYear(inputDataBook);
    }

  }

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

        <form onSubmit={submitHandlerBook}>
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
