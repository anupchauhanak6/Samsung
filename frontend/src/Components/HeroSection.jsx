import React from 'react'
import HeroImg from '../assets/heroimage.webp'
import BuyButton from './BuyButton'
import LernMoreButton from './LernMoreButton'

function HeroSection() {
  return (
    <>
      <div className='w-full h-full flex relative'>
          <img className='hidden sm:block' src={HeroImg} alt='HeroImage'></img>
          <img className='block sm:hidden' src='https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/HOME_TS11_Hero-KV_720x1248_mo.jpg?$720_N_JPG$?imwidth=720'></img>

        <div className="flex justify-center items-center absolute top-[25%] left-[30%] sm:top-[60%] sm:left-[5%] gap-[2vh]">
          
          <LernMoreButton Name='Lern more'/>
          <BuyButton Name='Buy'/>

        </div>
      </div>
    </>
  )
}

export default HeroSection