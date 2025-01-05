import React from 'react'
import AboutImg from '../assets/about.png'
import PlayIcon from '../assets/play-icon.png'

const About = () => {
  return (
    <div className='w-[70%] my-24 mx-auto flex items-center justify-between'>
        <div className='basis-[40%] relative  flex items-center justify-center'>
            <img className='rounded-lg' src={AboutImg} alt="" />
            <img src={PlayIcon} className='absolute w-20' />
        </div>
        <div className='basis-[50%]'>
            <h1 className='text-[#212ea0] font-semibold mb-2'>ABOUT UNIVERSITY</h1>
            <h2 className='text-[#000f38] font-semibold text-3xl mb-2'>Nurturing Tomorrow's Leaders Today</h2>
            <p className='text-[#676767] mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam quis itaque quam exercitationem alias architecto non. 
                Consectetur veritatis harum ipsum at laboriosam quisquam dolor 
                eveniet soluta reiciendis libero.</p>
            <p className='text-[#676767] mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Praesentium beatae accusantium iure consequatur numquam, 
                debitis velit minus nulla, exercitationem, totam sint!</p>
            <p className='text-[#676767] mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea voluptatibus at ab maxime qui! Voluptas hic quo doloremque
                laudantium quibusdam incidunt sed quidem ullam quos?</p>
        </div>
    </div>
  )
}

export default About