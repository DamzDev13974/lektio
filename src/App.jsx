import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Bibliotheque from './pages/Bibliotheque'
import Lecture from './pages/Lecture'
import Preferences from './pages/Preferences'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Bibliotheque/>}/>
        <Route path="/lecture/:id" element={<Lecture/>}/>
        <Route path="/preference" element={<Preferences/>}/>
      </Routes>
    </>
  )
}

export default App
