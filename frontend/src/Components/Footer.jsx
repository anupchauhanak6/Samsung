import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";


function Footer() {
  return (
    <div className='sm:text-[.83333333vw]'>
      <div className='!bg-[#f7f7f7] p-[4.44444444vw] leading-[1.33] sm:p-[1.66666667vw]'>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Image simulated. Samsung account login may be required for certain AI features.</p>
        <p className='wrap-anywhere mb-[1.11111111vw] text-[2.77777778vw] sm:text-[.83333333vw]'>*Image simulated. Actual UX/UI may differ. Availability of colours, sizes, models, and watch bands may vary by country or carrier. Products sold separately. Running coach    program is available on Android phones (Android 10 or above) and requires Samsung Health app (v6.30.2 or above). Samsung account login required. Service only available with Galaxy Watch8 Series or later released Galaxy Watch Series. To use running coach program, user needs to take a running level test and get a level before starting the coach program.</p>
      </div>

      <div className='leading-[1.15] border-b border-[#ccc]'>
        <div className='sm:flex border-t-[1px] border-[#ccc]'>
          <p className='hidden'>Footer Nevigation</p>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw]'>
            <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>Shop</p>
            <ul>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Shop Home</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Buy Direct Get More</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>SmartThnings</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Live Shop</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung Care+</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Disvover AI</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Back to school</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung BKC</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Samsung Experience Store</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>For Corporate Employees</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Explore</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw]'>
            <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>Product</p>
            <ul>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Smartphones</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Tab</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Book (Laptops)</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Watch</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Galaxy Buds</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>TVs</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Projects</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Sound Devices</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Refrigarators</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Dishwashers</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Washing Machines</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Vacuum Cleaners</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Monitors</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Memory & Storage</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690] ' to={''}>Accessories</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw]'>
            <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>Support</p>
            <ul>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Support Home</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Manual & Software</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Search Support</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Self-Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Warranty Infomation</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Service Center</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Track Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Book a Repair</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Out of Warranty Repair Charges</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Spare Part Cost</NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>WhatsApp <GoArrowUpRight className='align-middle ml-[.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Digital Services Center <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Chat <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/> </NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Email the CEO</NavLink></li>
              <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Share Your Opinion</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] sm:border-r border-[#d9d9d9] pb-[2.22222222vw]'>
            <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>Account</p>
            <ul>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Why Samsung Account</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Orders</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>My Page</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Product Registration</NavLink></li>
              <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Vouchers</NavLink></li>
            </ul>
          </div>
          <div className='auto w-full sm:w-[20%] pb-[2.22222222vw]'>
            <div className=''>
              <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>Sustainability</p>
              <ul>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Environement</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Security & Privacy</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Accessibility</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Diversity · Equity · Inclusion</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Corporate Citizenship <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline hover:text-[#001690]' to={''}>Corporate Sustainability <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
              </ul>
            </div>
            <div className='sm:mt-[1.11111111vw]'>
              <p className='font-[700] block sm:text-[1.25vw] p-[1.11111111vw_1.66666667vw]'>About Us</p>
              <ul>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Company Info</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Business Area</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Brand Identity</NavLink></li>
                <li><NavLink className='block cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Careers</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Investor Relations <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Newaroom <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Ethics</NavLink></li>
                <li><NavLink className='flex cursor-pointer p-[.48611111vw_1.66666667vw] w-full sm:text-[.97222222vw] hover:underline' to={''}>Samsung Design <GoArrowUpRight className='align-middle ml-[0.13888889vw] translate-y-[10%] sm:text-[.97222222vw]'/></NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className='p-[8.88888889vw_0vw_6.11111111vw_0vw] sm:p-0'>
        <div className='sm:text-[.83333333vw] text-[3.33333333vw] pb-[7.5vw] p-[0vw_6.66666667vw] sm:p-[1.18055556vw_0.83333333vw_1.04166667vw_1.66666667vw] border-b border-[#d9d9d9] wrap-anywhere'>
          <p className=''>Copyright ⓒ 1995-2025 SAMSUNG All Rights reserved.</p>

          <div>
            <br></br>
            {'Please dispose of e-waste and plastic waste responsibly.'}
            <br></br>
            {'For more information or e-waste pick up, please call 1800 5 7267864 or '}
            <NavLink className='cursor-pointer text-blue-600'>click here</NavLink>
            {' for more details.'}
            <br></br>
            <br></br>
            {'Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001'}
            <br></br>
            {'Corporate Identification Number (CIN): U31900DL1995PTC071387'}
          </div>
        </div>

        <div className='pl-[1.66666667vw] h-[4.44444444vw] flex relative'>
          <div className='pr-[1.66666667vw] flex items-center'>
            <NavLink className='font-[700] itmes-center'>India/English</NavLink>
          </div>
          <div></div>
          <div></div>
        </div>  
      </div>
    </div>
  )
}

export default Footer