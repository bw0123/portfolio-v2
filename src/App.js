import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
        </Routes> 
    </Router>
  );
}

export default App
