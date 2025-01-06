import React from 'react'
import Gallery1 from "../assets/gallery-1.png"
import Gallery2 from "../assets/gallery-2.png"
import Gallery3 from "../assets/gallery-3.png"
import Gallery4 from "../assets/gallery-4.png"
import WhiteArrow from "../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus w-[70%] my-24 mx-auto text-center'>
        <div className='flex justify-between mb-7'>
            <img className='w-[23%] rounded-lg' src={Gallery1}/>
            <img className='w-[23%] rounded-lg' src={Gallery2}/>
            <img className='w-[23%] rounded-lg' src={Gallery3}/>
            <img className='w-[23%] rounded-lg' src={Gallery4}/>
        </div>
        <button className='flex gap-1 items-center mx-auto dark-btn'>See more here <img src={WhiteArrow} className='w-5'/></button>
    </div>
  )
}

export default Campus