const ReadersItem = () =>{
    return(
        <div className="reader-card">
            <div className="reader-avatar">
              <span className="reader-avatar-emoji">👤</span>
            </div>
            <div className="reader-content">
              <h3 className="reader-name">Иван Петров</h3>
              <p className="reader-email">ivan@mail.ru</p>
              <div className="reader-stats">
                <span className="reader-active-books">
                  📚 Активных книг: <strong>2</strong>
                </span>
              </div>
              <a href="reader-profile.html?id=r1" className="btn btn-primary">
                Профиль
              </a>
            </div>
          </div>
    )
}
export default ReadersItem