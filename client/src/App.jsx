import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import CheckHistory from './pages/History'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<CheckHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

