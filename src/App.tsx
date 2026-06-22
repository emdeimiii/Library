import { useState } from 'react'
import BookPage from './peigers/books/books'
import './index.css'
import ReaderProFilePage from './peigers/readerProFile/readerProFile'
import { Route, Routes } from 'react-router-dom'
import Readerspage from './peigers/reders/readers'



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<BookPage/>}></Route>
      <Route path='/readers' element={<ReaderProFilePage/>}></Route>
      <Route path='/readers/:id' element={<Readerspage/>}></Route>

    </Routes>
    
    </>
  )
}

export default App
