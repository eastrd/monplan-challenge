import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchComponent from "../components/search"

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Monash Handbook Unit Viewer</h1>
        </header>
        <p className='App-intro'>
          {  }
          <SearchComponent />
        </p>
      </div>
    )
  }
}

export default App
