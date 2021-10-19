import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/chat" component={Chat} />
    </Switch>
  </BrowserRouter>
)

export default App
