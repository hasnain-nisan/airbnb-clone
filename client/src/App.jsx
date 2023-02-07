import { useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
