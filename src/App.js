import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SwitchSection from './components/SwitchSection'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SwitchSection />} />
      </Routes> 
    </Router>
  );
}

export default App
