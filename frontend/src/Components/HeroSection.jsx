import React from 'react'
import HeroImg from '../assets/heroimage.webp'

function HeroSection() {
  return (
    <>
      <div className='w-full h-full relative'>
          <img className='hidden sm:block' src={HeroImg} alt='HeroImage'></img>
          <img className='block sm:hidden' src='https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/HOME_TS11_Hero-KV_720x1248_mo.jpg?$720_N_JPG$?imwidth=720'></img>

        <div className="flex justify-center items-center z-10 absolute top-[60%] left-[5%] gap-[2vh]">
          <button className="cursor-pointer relative text-white font-semibold after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-white after:left-0 after:bottom-[calc(var(--spacing)*-0.61)] after:transition-all after:duration-300 hover:after:w-full underline decoration-1 underline-offset-8 hover:no-underline">
            Learn more
          </button>
          <button className="cursor-pointer px-6 py-2 rounded-full font-bold bg-black text-white hover:bg-white hover:text-black transition border">
            Buy
          </button>

        </div>
      </div>
    </>
  )
}

export default HeroSection