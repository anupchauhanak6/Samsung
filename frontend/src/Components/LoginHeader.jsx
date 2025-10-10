import React from 'react'
import { Link,Navigate,NavLink } from 'react-router-dom'
import MobileBar from './MobileBar';
import { FaRegUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";

function LoginHeader() {
  return (
    <div className='mx-1 h-[64px] xl:h-[5.55555556vw] flex gap-[2.22222222vw] items-center w-full top-0  bg-white text-black p-[0_1.11111111vw]'>
        <div className='cursor-pointer w-[120px] mr-[4.44444444vw] h-full items-center flex'>
                <Link to={'/'} className='w-[120px] h-auto'>
                    <img src='https://www.samsung.com/in/web/dist/img/gnb-mobile-240x64.103c8c2.png' className='h-[31.8px] w-[120px]'></img>
                </Link>
        </div>
        
        <div className='h-full items-center flex justify-end w-full'>
            {/* Cart */}
            <Link className='h-full w-[40px] items-center flex'>
                <BsCart2 className='h-[24px] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]'/>
            </Link>

            {/* User */}
            <button className='h-full w-[40px] text-0 items-center cursor-pointer'>
                <FaRegUser className='h-[24px] opacity-[0.5] xl:h-[1.66666667vw] w-[24px] xl:w-[1.66666667vw]'/>
            </button>

            {/* Mobile Bar */}
            <MobileBar />
        </div>
    </div>
  )
}

export default LoginHeader