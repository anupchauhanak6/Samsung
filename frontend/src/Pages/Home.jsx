import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import ImgGalaxy from '../assets/Galaxy-S25-home.webp'

function Home() {
  return (
    <div className=''>

      <HeroSection />
      <img src={ImgGalaxy}></img>
    </div>
  )
}

export default Home