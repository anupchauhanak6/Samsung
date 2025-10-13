import React from 'react'
import HeroImg from '../assets/heroimage.webp'
import BuyButton from './BuyButton'
import LernMoreButton from './LernMoreButton'

function HeroSection() {
  return (
    <>
      <div className='max-w-[1440px] h-full flex relative m-auto'>
          <img className='hidden sm:block h-fit w-full' src='https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/25_bf_hero-kv_preview_pc_1920x1080_text_.jpg?$1920_N_JPG$?imwidth=2560' alt='HeroImage'></img>
          <img className='block sm:hidden' src='https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/25_bf-hero_kv_mo_720x1120.jpg?$720_N_JPG$?imwidth=720'></img>

        <div className="absolute left-[50%] top-[50%] -translate-y-[50%] w-[43.05555556vw] pt-[3.61111111vw] pb-[4.16666667vw] pl-[4.16666667vw] -ml-[50vw] mt-[52.7031px] text-[#fff]">
          <h1 className='text-[4.16666667vw] font-bold leading-[1.2]'>
            <span className=''>Fab Grab Fest</span>
            <span className='hidden'>Fab Grab Fest</span>
          </h1>

          <p className='mt-[1.31944444vw] text-[2.22222222vw] leading-[1.2]'>
            <span className=''>Get the latest AI tech</span>
            <span className='hidden'>Get the latest AI tech</span>
          </p>

          <div className='mt-[1.52777778vw] sm:ml-[1.73611111vw]'>
            <BuyButton Name='Buy'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroSection