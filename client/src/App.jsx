import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Landing from "./Landing"
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  )
}

export default App
