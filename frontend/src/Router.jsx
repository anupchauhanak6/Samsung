import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Mobile from './Pages/Mobile'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/mobile' element={<Mobile />}></Route>
    </Routes>
  )
}

export default AppRouter