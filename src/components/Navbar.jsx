import React, { useState } from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  return (
    <>
        <div className={`w-full text-white fixed top-0 left-0 z-10 flex items-center justify-between px-32 ${sticky ? "bg-[#212ea0] transition duration-500": ""}`}>
            <img src={logo} alt="logo" className='w-44' />
            <ul className='flex items-center gap-5 my-3'>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar