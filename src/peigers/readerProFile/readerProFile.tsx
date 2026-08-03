import { useParams } from "react-router-dom"
import ActiveBooks from "../../companents/History/ActiveBooks"
import HistorySection from "../../companents/History/History"
import ReadersProfile from "../../companents/Readers/ReadersProfile"
import { mockReaders } from "../../mocks/readers"
import './profile.css'
import NotFoundPage from "../../companents/common/page404"
import { useEffect, useMemo, useState } from "react"
import AddModalExtradition from "../../companents/addModal/addModalExtradition"
import type { IBook } from "../../types/book.types"
import type { IReader } from "../../types/reader.types"
import { mockBooks } from "../../mocks/book"



const ReaderProFilePage = () => {
  const { id } = useParams()
  const [showModalExtradition, setShowModalExtradition] = useState(false);

  const [books, setBooks] = useState<IBook[]>(mockBooks);
  const [reader, setReader] = useState<IReader | undefined >(
    mockReaders.find((r) => r.id === id)
  );
  console.log(reader);

  const activeBooksData = useMemo(() => {
    if (!reader) return [];
    return books.filter((book) => reader.activeBooks.includes(book.id));
  }, [reader, books]);



  const closeHandlerExtradition = () => {
    setShowModalExtradition(false)
  }

    const handleExtradition = (book: IBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === book.id ? { ...b, isAvailable: false } : b))
    );
    setReader((prevReader) => {
      if (!prevReader) return prevReader;
      return {
        ...prevReader,
        activeBooks: [...prevReader.activeBooks, book.id], 
        booksHistory: [
          ...prevReader.booksHistory,
          {
            id: `r-${Date.now()}`,
            bookId: book.id,
            takenAt: new Date(),
          },
        ],
      };
    });

    setShowModalExtradition(false);
  };

 const handleReturnBook = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === bookId ? { ...b, isAvailable: true } : b))
    );

    setReader((prevReader) => {
      if (!prevReader) return prevReader;
      return {
        ...prevReader,
        activeBooks: prevReader.activeBooks.filter((id) => id !== bookId),
        booksHistory: prevReader.booksHistory.map((e) =>
          e.bookId === bookId 
            ?  { ...e,  returnedAt: new Date() }
            : e
        ),
      };
    });
  };

    useEffect(() => {
      const escHendler = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeHandlerExtradition()
        }
      }
      if (showModalExtradition) {
        document.addEventListener('keydown', escHendler);
      }
      return () => {
        document.removeEventListener('keydown', escHendler);
      }
    }, [showModalExtradition])


    if (!reader) {
      return (
        <NotFoundPage />
      )
    }

    return (
      <div className="page-wrapper">

        {/* <!-- ========== MAIN ========== --> */}
        <main className="main-content">
          <div className="container">
            <div className="profile-wrapper">
              {/* <!-- Profile Header --> */}
              <ReadersProfile reader={reader} />

              {/* <!-- Active Books Section --> */}
              <ActiveBooks
                activeBooks={activeBooksData}
                onReturn={handleReturnBook}

              />
              <button className="btn btn-primary" id='add-reader-btn' onClick={() => setShowModalExtradition(true)}>Выдача книг</button>
              {/* <!-- History Section --> */}
              <HistorySection history={reader.booksHistory} books={books} />
              {showModalExtradition && (<AddModalExtradition
                handleClickExtradition={closeHandlerExtradition}
                onExtradition={handleExtradition}


              />)}
            </div>
          </div>
        </main>

      </div>
    )
  }
  export default ReaderProFilePage