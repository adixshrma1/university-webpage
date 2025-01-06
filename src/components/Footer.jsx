import React from 'react'

const Footer = () => {
  return (
    <div className='w-[80%] my-2.5 mx-auto py-4 flex items-center justify-between border-t border-t-[#797979] text-[#676767] text-sm'>
        <p>&copy; 2025 Edusity. All rights reserved.</p>
        <ul className='flex gap-3'>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer