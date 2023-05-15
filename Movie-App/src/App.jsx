import React from 'react'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />}/>
    </Routes>
    
    </>
  )
}

export default App
