import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Read'
import Create from './Create'
import Edit from './Edit'

function CrudConfig() {
  return (
    <div>
      <h1>CRUD Application</h1>
      <BrowserRouter>
         <div className='container'>
         <Routes>
            <Route exact path='/' element={<Read/>}></Route>
            <Route exact path='/create' element={<Create/>}></Route>
            <Route exact path='/edit' element={<Edit/>}></Route>
         </Routes>
         </div>
      </BrowserRouter>
    </div>
  )
}

export default CrudConfig