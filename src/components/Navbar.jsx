import React, { useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import menuIcon from "../assets/menu-icon.png"

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  return (
    <>
        <div className={`w-full text-white fixed top-0 left-0 z-10 flex items-center justify-between p-4 lg:px-32 transition duration-500 ${sticky ? "bg-[#212ea0]": ""}`}>
            <img src={logo} alt="logo" className='w-36 lg:w-44' />
            <ul className={`${navShow? "": "right-[-200px]"} fixed top-0 right-0 bottom-0 z-[-1] bg-[#212ea0] px-5 pt-16 flex flex-col gap-2 duration-500 lg:p-0 lg:static lg:bg-transparent lg:flex-row lg:items-center lg:gap-5 lg:my-3`}>
                <li className='cursor-pointer '><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li className='cursor-pointer '><Link to='programs' offset={-260} smooth={true} duration={500}>Programs</Link></li>
                <li className='cursor-pointer '><Link to='about' offset={-100} smooth={true} duration={500}>About Us</Link></li>
                <li className='cursor-pointer '><Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
                <li className='cursor-pointer '><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
                <li className=''><Link to='contact' offset={-260} smooth={true} duration={500}><button className='btn'>contact us</button></Link></li>
            </ul>
            <img onClick={()=> setNavShow(prev => !prev)} className="w-6 lg:hidden" src={menuIcon}/>
        </div>
    </>
  )
}

export default Navbar