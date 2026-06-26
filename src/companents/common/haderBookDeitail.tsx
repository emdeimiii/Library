const HeaderDeitl = () => {
    return(
        <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="index.html" className="logo">
            <span className="logo-icon">📚</span>
            <span>Библиотека</span>
          </a>
          <nav className="nav">
            <a href="index.html" className="active">
              <span>📖</span>
              <span>Книги</span>
              <span className="nav-badge">10</span>
            </a>
            <a href="readers.html">
              <span>👤</span>
              <span>Читатели</span>
              <span className="nav-badge">5</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
    )
}
export default HeaderDeitl