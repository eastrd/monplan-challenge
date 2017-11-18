import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import InputComponent from "../components/input"
import FetchAllComponent from "../components/fetchAll"

class App extends Component {
  dataShareCallBack = (allUnitData) => {
    
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Monash Handbook Unit Viewer</h1>
        </header>
        <p className='App-intro'>
          {  }
          <FetchAllComponent />
          <InputComponent />
        </p>
      </div>
    )
  }
}

export default App
