import React from 'react'
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div className='m-auto max-w-[1440px] w-full pt-[12px]'>
        <div className="p-[20px_24px] leading-[31.92px] text-center">
            <h3 className='block w-full text-[24px] p-[5px_0_20px] font-[700]'>Login</h3>
            <h4 className='block text-[18px] p-[0_0_22px] font-[700]'>Login with mobile to become a member</h4>
            <div className='p-[15px_0_0] w-[33vw] h-[80px] m-auto table relative'>
                <div className='w-full m-0 relative'>
                    <label htmlFor='username' id='username' className='absolute top-[3px] left-0 text-start p-[10px_0_5px] text-[14px] text-[#766767] font-[500] w-auto  pointer-events-none'>Mobile Number / Email Id</label>
                    <input type='text' id='username' className='border-b border-[#8f8f8f] focus:outline-0 text-[14px] font-[400] w-full p-[10px_0_5px]'></input>
                    <div className='text-[#dc2222] text-[12px] leading-[14px] mt-[5px] p-[5px_0]'></div>
                </div>

                <div className='leading-[18.62px] justify-start flex'>
                    <input type='checkbox' className={`appearance-none outline-none cursor-pointer w-[18px] h-[18px] bg-white border rounded-full checked:bg-blue-500 checked:bg-[url(https://upload.wikimedia.org/wikipedia/commons/2/27/White_check.svg)] checked:bg-center checked:bg-no-repeat checked:bg-[length:14px_14px] transition`}></input>
                    <span className='w-full font-normal text-start'>
                        {'I agree to receive personalized offers and updates'}
                        <br/>
                        {'You can opt out anytime by visiting My Page'}
                    </span>
                </div>

                <div>
                    <button></button>
                </div>
            </div>
            <div></div>
            <p className='font-[400] text-[14px]'>
                {'By logging-in, I consent and accept the Smart club Program and Enrollment '}
                <a href='https://images.samsung.com/is/content/samsung/assets/in/microsite/smart-club/smartclub-terms-conditions.pdf?v=4' target='_blank' className='cursor-pointer text-[#20a2ff]'>{'Terms and Conditions '}</a>
                {'& '}
                <Link to={''} className='cursor-pointer text-[#20a2ff]'>{'Privacy Policy'}</Link>
            </p>
        </div>
    </div>
  );
}

export default Login;
