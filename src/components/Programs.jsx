import React from 'react'
import Program1 from "../assets/program-1.png"
import Program2 from "../assets/program-2.png"
import Program3 from "../assets/program-3.png"
import ProgramIcon1 from "../assets/program-icon-1.png"
import ProgramIcon2 from "../assets/program-icon-2.png"
import ProgramIcon3 from "../assets/program-icon-3.png"

const Programs = () => {
    const cardClasses = "text-white rounded absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex flex-col items-center justify-center opacity-0 hover:opacity-100 hover:cursor-pointer pt-52 hover:pt-0 transition-all duration-500";
  return (
    <>
        <div className='programs flex gap-10 w-[70%] my-20 mx-auto'>
            <div className='relative'>
                <img className='rounded' src={Program1}/>
                <div className={`${cardClasses} `}>
                    <img src={ProgramIcon1} className='w-16 mb-2.5'/>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className='relative'>
                <img className='rounded' src={Program2}/>
                <div className={cardClasses}>
                    <img src={ProgramIcon2} className='w-16 mb-2.5'/>
                    <p>Master Degree</p>
                </div>
            </div>
            <div className='relative'>
                <img className='rounded' src={Program3}/>
                <div className={cardClasses}>
                    <img src={ProgramIcon3} className='w-16 mb-2.5'/>
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Programs