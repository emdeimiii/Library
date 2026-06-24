
import BookPage from './peigers/books/books'
import './index.css'
import ReaderProFilePage from './peigers/readerProFile/readerProFile'
import { Route, Routes } from 'react-router-dom'
import Readerspage from './peigers/reders/readers'



function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Layot/>}> */}
      <Route path='' element={<BookPage/>}/>
      <Route path='readers' element={<Readerspage/>}/>
      <Route path='readers/:id' element={<ReaderProFilePage/>}/>
      {/* </Route> */}
      
    </Routes>
    
    </>
  )
}

export default App
