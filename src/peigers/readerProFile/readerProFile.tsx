import Footer from "../../companents/common/footer"
import Header from "../../companents/common/header"
import ActiveBooks from "../../companents/History/ActiveBooks"
import HistorySection from "../../companents/History/History"
import ReadersProfile from "../../companents/Readers/ReadersProfile"
import { mockReaders } from "../../mocks/readers"
import './profile.css'


const ReaderProFilePage = () =>{
  const reader = mockReaders[3]
    return(
        <div className="page-wrapper">
    <Header/>
{/* <!-- ========== MAIN ========== --> */}
    <main className="main-content">
      <div className="container">
        <div className="profile-wrapper">
          {/* <!-- Profile Header --> */}
          <ReadersProfile reader={reader}/>

          {/* <!-- Active Books Section --> */}
          <ActiveBooks/>

          {/* <!-- History Section --> */  }
          <HistorySection history={reader.booksHistory}/>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
    )
}
export default ReaderProFilePage