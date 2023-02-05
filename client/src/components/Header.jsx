import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import {CiSearch} from 'react-icons/ci'
import {HiBars3} from 'react-icons/hi2'
import {AiOutlineUser} from 'react-icons/ai'


const Header = () => {
  return (
    <header className='p-4 flex items-center justify-between'>
        <a href="" className='flex items-center gap-1'>
          <FaPaperPlane className='h-8 w-8 rotate-6'/>
          <span className="font-dancing font-extrabold text-xl">
            Havenly
          </span>
        </a>
        <div className='flex gap-3 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-gray-300 hover:shadow-md hover:shadow-gray-300 transition-shadow cursor-pointer'>
          <div className='flex items-center font-raleway text-sm'>Anywhere</div>
          <div className='border-l border-gray-300'></div>
          <div className='flex items-center font-raleway text-sm'>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div className='flex items-center font-raleway text-sm'>Guests</div>
          <button className='bg-primary text-white p-1 rounded-full'>
            <CiSearch className='w-4 h-4'/>
          </button>
        </div>
        <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 hover:shadow-md hover:shadow-gray-300 transition-shadow cursor-pointer">
          <HiBars3 className='font-raleway '/>
          <div className='bg-gray-500 border-2 border-gray-500 rounded-full text-white'>
            <AiOutlineUser/>
          </div>
        </div>
      </header>
  )
}

export default Header