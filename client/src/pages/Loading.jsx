import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
        <FaPaperPlane size={50} className="animate-pulse"/>
        <p className="font-raleway text-2xl mt-2 animate-pulse">Loading...</p>
    </div>
  )
}

export default Loading