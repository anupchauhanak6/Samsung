import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRouter from './Router'
import LoginHeader from './Components/LoginHeader'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login';
  return (
    <div className='overflow-x-hidden flex flex-col items-center'>
      {isLoginPage ? <LoginHeader /> : <Header />}
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App