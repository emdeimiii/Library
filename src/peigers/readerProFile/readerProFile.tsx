import { useParams } from "react-router-dom"
import Footer from "../../companents/common/footer"
import Header from "../../companents/common/header"
import ActiveBooks from "../../companents/History/ActiveBooks"
import HistorySection from "../../companents/History/History"
import ReadersProfile from "../../companents/Readers/ReadersProfile"
import { mockReaders } from "../../mocks/readers"
import './profile.css'
import NotFoundPage from "../../companents/common/page404"


const ReaderProFilePage = () => {
  const { id } = useParams()
  const reader = mockReaders.find((reader) => { return (reader.id === id) })
  console.log(reader);
  
  if (!reader){
    return(
      <NotFoundPage/>
    )
  }

  return (
    <div className="page-wrapper">
      <Header />
      {/* <!-- ========== MAIN ========== --> */}
      <main className="main-content">
        <div className="container">
          <div className="profile-wrapper">
            {/* <!-- Profile Header --> */}
            <ReadersProfile reader={reader} />

            {/* <!-- Active Books Section --> */}
            <ActiveBooks />

            {/* <!-- History Section --> */}
            <HistorySection history={reader.booksHistory} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default ReaderProFilePage