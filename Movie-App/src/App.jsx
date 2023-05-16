import React from 'react'
import './App.css'
import Home from './components/intro/Home'
import SignIn from './components/intro/SignIn'
import { Route, Routes } from 'react-router-dom'
import WebPage from './components/mainpages/WebPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path='/web-page' element={<WebPage />} />
    </Routes>
    
    </>
  )
}

export default App
