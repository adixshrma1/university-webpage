import React, { useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  return (
    <>
        <div className={`w-full text-white fixed top-0 left-0 z-10 flex items-center justify-between px-32 transition duration-500 ${sticky ? "bg-[#212ea0]": ""}`}>
            <img src={logo} alt="logo" className='w-44' />
            <ul className='flex items-center gap-5 my-3'>
                <li className='cursor-pointer'><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li className='cursor-pointer'><Link to='programs' offset={-260} smooth={true} duration={500}>Programs</Link></li>
                <li className='cursor-pointer'><Link to='about' offset={-100} smooth={true} duration={500}>About Us</Link></li>
                <li className='cursor-pointer'><Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
                <li className='cursor-pointer'><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' offset={-260} smooth={true} duration={500}><button className='btn'>contact us</button></Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar