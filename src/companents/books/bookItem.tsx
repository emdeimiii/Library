const BookItem = () =>{
    return(
                    <article className="book-card">
            <div className="book-cover">
              <div className="book-cover-placeholder">
                <span className="book-cover-emoji">📖</span>
              </div>
              <span className="book-status-badge badge badge-available">Доступна</span>
            </div>
            <div className="book-content">
              <h3 className="book-title">Война и мир</h3>
              <p className="book-author">Лев Толстой</p>
              <div className="book-meta">
                <span className="book-year">1869</span>
                <span className="book-genre">Эпопея</span>
              </div>
              <p className="book-description">
                Масштабное произведение о русском обществе в эпоху наполеоновских войн.
              </p>
              <button className="btn btn-primary btn-block">Подробнее</button>
            </div>
          </article>
    )
}
export default BookItem