import React, {useState} from 'react'
import { Link,NavLink} from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function MobileBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div className='xl:hidden text-2xl items-center flex'>
                <button onClick={()=>setMenuOpen(true)}>
                    <HiMiniBars3 />
                </button>
            </div>
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[40%] bg-white z-10 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                 {/* Close Button */}
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 px-4 py-2 border rounded-full shadow-md"
                        />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl text-black"
                        >
                            <RxCross2 />
                        </button>
                    </div>
                </div>        
                <ul className="flex flex-col gap-4 p-4 text-black font-bold text-2xl">
                    <li><NavLink to='/shop' onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
                    <li><NavLink to='/mobile' onClick={() => setMenuOpen(false)}>Mobile</NavLink></li>
                    <li><NavLink to='/tv&av' onClick={() => setMenuOpen(false)}>TV & AV</NavLink></li>
                    <li><NavLink to='/appliances' onClick={() => setMenuOpen(false)}>Appliances</NavLink></li>
                    <li><NavLink to='/computing&displays' onClick={() => setMenuOpen(false)}>Computing & Displays</NavLink></li>
                    <li><NavLink to='/accessories' onClick={() => setMenuOpen(false)}>Accessories</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default MobileBar