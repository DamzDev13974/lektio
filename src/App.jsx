import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Bibliotheque from './pages/Bibliotheque'
import Lecture from './pages/Lecture'
import Preference from './pages/Preference'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Bibliotheque/>}/>
        <Route path="/lecture/:id" element={<Lecture/>}/>
        <Route path="/preference" element={<Preference/>}/>
      </Routes>
    </>
  )
}

export default App
