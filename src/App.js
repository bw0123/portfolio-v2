import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SwitchSection from './components/SwitchSection'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <SwitchSection />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App
