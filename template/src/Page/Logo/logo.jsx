import React from 'react'
import sailboat from "../../assets/sailboat.jpg"

function Logo() {
  return (
    <div className='w-full relative' id='logo'>
      <img src={sailboat} className='w-full h-[20rem] md:w-full md:h-[35rem] object-cover  ' alt='Sailboat' />
      <div className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-green-600 md:bg-black absolute bottom-5 left-5 flex items-center justify-center rounded hover:bg-green-400  '>
        <h1 className='text-white text-center text-sm md:text-2xl'>LEARN W3.CSS</h1>
      </div>
    </div>

  )
}

export default Logo