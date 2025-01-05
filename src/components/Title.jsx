import React from 'react'

const Title = ({props}) => {
  return (
    <div className='text-center mt-16 mb-7'>
        <h1 className='uppercase text-[#212ea0] font-semibold'>{props.title}</h1>
        <p className='capitalize text-[#000f38] text-4xl font-semibold mt-2'>{props.subtitle}</p>
    </div>
  )
}

export default Title