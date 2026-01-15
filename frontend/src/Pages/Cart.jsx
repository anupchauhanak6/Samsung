import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
  return (
    <div className='m-0 p-0 align-top'>
        <div className='m-[0_auto] w-full relative'>
            <div className='p-[0_0_24px] xl:w-[1156px]'>
                <div className='p-[0_24px_24px] w-full'>
                    <div className='m-[88px_0_0] relative'>
                        <div className='m-0 p-0 text-center w-full'>
                            <div className='w-full m-0 p-[16px_0] text-center'>
                                <img src='https://www.samsung.com/in/web/_next/static/media/icon_cart.0d9bbb5a.svg' width={'36px'} height={'36px'} className='text-transparent md:w-[48px] md:h-[48px] align-top justify-self-center' />
                            </div>
                            <h2 className='text-[38px] font-[700] leading-[48px] text-center p-[0_0_24px]'>Your cart is empty</h2>
                            <p className={`${user ? 'hidden' : 'block'}`}>Sign in to your Samsung account to view your saved items or continue shopping</p>
                            <div className='flex justify-center align-center flex-row'>
                                <button className={`${user ? 'hidden' : 'block'} order-2 h-[40px] w-[212px] text-[#fff] border border-[#2189ff] rounded-[20px] text-[14px] leading-[18.62px] text-center font-[700] bg-[#2189ff] m-[15px_0] cursor-pointer`}>Sign In</button>
                                <button onClick={()=>navigate(('/'))} className='h-[40px] w-[212px] border rounded-[20px] text-[14px] leading-[18.62px] text-center font-[700] m-[0_10px] self-center cursor-pointer'>Continue shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Cart