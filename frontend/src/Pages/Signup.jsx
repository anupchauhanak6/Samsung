import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        try {
            
            console.log(fullName);
            console.log(email);
            console.log(password);
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='m-auto max-w-[1440px] w-full'>
        <div className='p-[20px_24px] leading-[31.92px] text-center w-full'>
            <h3 className="block w-full text-[24px] p-[5px_0_20px] font-[700]">
                {'SignUp'}
            </h3>
            <div className='"p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full m-0 relative'>
                        <input onChange={(e) => setFullName(e.target.value)} type="text" id="fullname" className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' required/>
                        <label htmlFor='fullname' className={`absolute left-0 transition-all duration-300 pointer-events-none ${fullName ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your FullName</label>
                    </div>

                    <div className='relative w-full m-0'>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' required/>
                        <label htmlFor='email' className={`absolute left-0 transition-all duration-300 pointer-events-none ${email ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your Email</label>
                    </div>

                    <div className='relative w-full m-0'>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" className='peer border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px] pt-[20px]' required/>
                        <label htmlFor='password' className={`absolute left-0 transition-all duration-300 pointer-events-none ${password ? 'top-[3px] text-[12px] text-black' : 'top-[25px] text-[14px] text-[#766767] peer-focus:top-[3px] peer-focus:text-[12px] peer-focus:text-black'}`}>Enter your Password</label>
                    </div>
                    <p className="p-[25px_0] text-center font-[700] text-[1.11111vw] leading-[200%]">
                        <button type='submit' className="cursor-pointer h-[40px] w-[296px] border bg-black text-white rounded-[20px] text-[14px]">SignUp</button>
                    </p>

                    <p className="pb-[25px] text-center font-[700] text-[1.11111vw] leading-[200%]">
                        <button onClick={()=>navigate('/login')} className="cursor-pointer h-[40px] w-[296px] border bg-[#2189ff] text-white rounded-[20px] text-[14px]">Login</button>
                    </p>
                </form>
            </div>
            <p className='font-[400] text-[14px]'>
                {"By logging-in, I consent and accept the Smart club Program and Enrollment "}

                <a href="https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4" target="_blank" className="cursor-pointer text-[#20a2ff]">
                    {"Terms and Conditions "}
                </a>

                {"& "}

                <Link className='cursor-pointer text-[#20a2ff]'>
                    {"Privacy Policy"}
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Signup