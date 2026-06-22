const ReadersProfile = () => {
    return(
                  <div className="profile-header">
            <div className="profile-avatar">
              <span className="profile-avatar-emoji">👤</span>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Иван Петров</h1>
              <div className="profile-details">
                <span>✉️ ivan@mail.ru</span>
                <span>📞 +7-999-123-45-67</span>
                <span>📅 Регистрация: 15.01.2024</span>
              </div>
              <div className="profile-stats">
                <span>📚 Прочитано книг: <strong>5</strong></span>
                <span>📖 Активных книг: <strong>2</strong></span>
              </div>
            </div>
          </div>
    )
}
export default ReadersProfile