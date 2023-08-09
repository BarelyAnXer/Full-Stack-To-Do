import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Landing from "./Landing"
import EntityList from './features/Entity/EntityList'
import EntityEditForm from './features/Entity/EntityEditForm.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route path='/notes' >
          <Route index element={<EntityList />} />
          <Route route='/:id' element={<EntityEditForm />} />
          <Route route='/new' element={<p>asd</p>} />
        </Route>
        <Route path='/test' element={<EntityEditForm />} />


      </Routes>
    </>
  )
}

export default App
