import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRouter from './Router'
import LoginHeader from './Components/LoginHeader'
import { useLocation } from 'react-router-dom'
import UserProvider from './contexts/UserProvider'

function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login';
  return (
    <UserProvider>
      <div className='overflow-x-hidden flex flex-col items-center max-w-[1440px] justify-center m-auto'>
        {isLoginPage ? <LoginHeader /> : <Header />}
        <AppRouter />
        <Footer />
      </div>
    </UserProvider>
  )
}

export default App