import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
