import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Mobile from './Pages/Mobile'
import Login from './Components/Login'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRouter