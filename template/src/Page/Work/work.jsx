import React from 'react'
import snow from "../../assets/snow.jpg"
import light from "../../assets/lights.jpg"
import mountain from "../../assets/mountains.jpg"
import { IoAddOutline } from 'react-icons/io5'


function Work() {
  let Work = [
    {
      img: snow,
      title1: "Customer 1",
      title2: "Trade",
      titlt3: "Blablabla"
    },
    {
      img: light,
      title1: "Customer 2",
      title2: "Trade",
      titlt3: "Blablabla"
    },
    {
      img: mountain,
      title1: "Customer 3",
      title2: "Trade",
      titlt3: "Blablabla"
    },
  ]
  return (
    <>
      <div className='w-full md:h-[550px]   bg-gray-700 lg:p-10  md:p-3 p-3  block md:flex relative ' id='work'>
        <div className='md:w-[24%] h-full w-full   mr-4'>
          <h1 className='text-white text-3xl mb-4'>Our Work</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {
          Work.map((value, index) => (
            <div className='md:w-[24%] lg:h-full md:h-[75%] h-full w-full bg-white   mr-4'>
              <img src={value.img} className='w-full lg:h-60 md:h-40 h-60' />
              <p className='text-black text-2xl ml-3'>{value.title1}</p>
              <p className='text-black text-xl ml-2'>{value.title2}</p>
              <p className='text-black text-lg ml-2 mt-2'>{value.titlt3}</p>
              <p className='text-black text-lg ml-2 mt-2'>{value.titlt3}</p>
              <p className='text-black text-lg ml-2 mt-2'>{value.titlt3}</p>
              <p className='text-black text-lg ml-2 mt-2'>{value.titlt3}</p>
            </div>
          ))
        }

        <div className='w-11 h-11  md:w-14 md:h-14 bg-green-800 rounded-full mt-[480px] flex justify-center items-center hover:bg-red-400 absolute bottom-0 right-2  md:top-10 md:right-2'>
          <IoAddOutline className='text-3xl text-white' />
        </div>

      </div>
    </>
  )
}

export default Work