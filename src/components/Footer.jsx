import React from 'react'

const Footer = () => {
  return (
    <div className='w-[80%] mx-auto py-2 md:py-4 flex items-center justify-between border-t border-t-[#797979] text-[#676767] text-[9px] md:text-sm'>
        <p>&copy; 2025 Edusity. All rights reserved.</p>
        <ul className='flex gap-1 md:gap-3'>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer