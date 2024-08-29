import React from 'react'
import { BiLogoFacebook, BiLogoGoogle, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { SlArrowUp } from 'react-icons/sl'


function Footer() {
  const dataIcon =[
    { icon:  <BiLogoFacebook /> },{icon: <BiLogoTwitter /> }, {icon :  <BiLogoGoogle />},
    {icon:  <BiLogoInstagram />},{icon: <BiLogoLinkedin /> }

  ]
  return (
    <>
      <div className='w-full h-[300px] bg-black overflow-hidden  relative '>
        <div className=' mt-11 md:mt-[50px]'>
          <p className='text-xl font-bold text-white text-center '>Follow Us</p>
        </div>
        <div className='flex mt-3 md:mt-5 justify-center items-center group'>
          {
            dataIcon.map((key , index) =>(
              <div className='size-[37px] md:size-[50px] bg-green-800 flex justify-center items-center rounded-sm text-white text-2xl  ml-1 lg:ml-[10px]  hover:bg-white hover:text-black  '>
                  {key.icon}
              </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center mt-5'>
          <p className='text-white text-center mr-2'>Powered by</p>
          <p className='text-green-600 text-center underline'>W3.css</p>
        </div>
        <div className='w-[40px] h-[40px] absolute right-[20px] top-[100px] md:right-[50px] md:top-[150px] bg-transparent hover:bg-white flex items-center justify-center group'>
          <div className='w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center font-bold group-hover:bg-black'>
            <SlArrowUp className='text-black text-lg group-hover:text-white' />
          </div>
          <div className='w-[100px] h-[35px] rounded-sm bg-green-800 absolute right-[50px] top-[0px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
              <a href="#logo" className='text-white text-lg'>Go to top</a>
            </div>
        </div>
      </div>
    </>
  )
}


export default Footer