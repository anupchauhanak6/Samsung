import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRouter from './Router'

function App() {
  return (
    <div className='overflow-x-hidden flex flex-col items-center'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App