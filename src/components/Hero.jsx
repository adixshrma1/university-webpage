import React from 'react'
import "./Hero.css"
import darkArrow from "../assets/dark-arrow.png"

const Hero = () => {
  return (
    <>
        <div className='hero h-screen text-white flex items-center justify-center'>
            <div className='text-center w-1/2'>
                <h1 className='text-6xl font-semibold'>We ensure better education for a better world</h1>
                <p className='mt-2 mb-5 mx-auto max-w-[700px] font-light'>Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn flex items-center mx-auto'>Explore more <img src={darkArrow} className='w-5 ml-2' alt="" /></button>
            </div>
        </div>
    </>
  )
}

export default Hero