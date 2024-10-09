import React, { useState } from 'react'
import { BiHome, BiSearch } from 'react-icons/bi'
import { SlArrowDown } from 'react-icons/sl'
import { TfiAlignJustify, TfiClose } from 'react-icons/tfi'


function Header() {
  const [open, setOpen] = useState(false);
  let menu = [
    { name: "Team", link: "#team", },
    { name: "Work", link: "#work", },
    { name: "Price", link: "#price", },
    { name: "Contact", link: "#contact", },
  ]
  let subMenu = [
    { sub: "Dropdown 1", link: "#" },
    { sub: "Dropdown 2", link: "#" },
    { sub: "Dropdown 3", link: "#" },

  ]

  return (
    <div className='w-full h-10 md:w-full md:h-10  bg-black flex lg:fixed md:fixed relative z-50 '>
      <div className='w-3/4 h-full flex '>
        <ul className='text-lg'>
          <li className='w-full h-full flex items-center px-2 py-1 hover:bg-white hover:text-black transition-colors duration-300 bg-green-500'>
            <BiHome className='text-lg mr-2' />
            Logo
          </li>
        </ul>
        <ul
          className= {`text-black md:text-white my-5 md:my-0  md:mx-0  block md:hidden justify-center items-center text-lg transition-all duration-500 bg-red-600 ${ open?'mx-[-400px]':' mx-[-90px]'}  `}>
          {menu.map((value, index) => (
            <li className=' w-full h-full ml-5 px-2 py-1 my-7 md:my-0 hover:bg-none  md:hover:bg-white hover:text-black transition-colors duration-300 '><a href={value.link}>{value.name}</a></li>
          ))}
          <li className='w-full h-full ml-5 px-2 py-1 my-7 md:my-0 hover:bg-none  md:hover:bg-white hover:text-black transition-colors duration-300 relative group flex'>
            <a href="#">Dropdown</a> <SlArrowDown className='mt-2.5 ml-1 text-sm' />
            <ul className='absolute left-0 w-40 md:w-48 bg-black md:bg-white text-white md:text-black hidden group-hover:block top-7 md:top-[40px]'>
              {
                subMenu.map((value, index) => (
                  <li className='px-4 py-2 hover:bg-none md:hover:bg-gray-200'><a href={value.link}>{value.sub}</a></li>
                ))
              }
            </ul>
          </li>
        </ul>
        <ul
          className= 'text-black md:text-white my-5 md:my-0 mx-[-100px] md:mx-0 bg-black md:bg-none hidden md:flex justify-center items-center text-lg transition-all duration-500 ' >
          {menu.map((value, index) => (
            <li className=' w-full h-full ml-5 px-2 py-1 my-7 md:my-0 hover:bg-none  md:hover:bg-white hover:text-black transition-colors duration-300'><a href={value.link}>{value.name}</a></li>
          ))}
          <li className='w-full h-full ml-5 px-2 py-1 my-7 md:my-0 hover:bg-none  md:hover:bg-white hover:text-black transition-colors duration-300 relative group flex'>
            <a href="#">Dropdown</a> <SlArrowDown className='mt-2.5 ml-1 text-sm' />
            <ul className='absolute left-0 w-40 md:w-48 bg-black md:bg-white text-white md:text-black hidden group-hover:block top-7 md:top-[40px]'>
              {
                subMenu.map((value, inde) => (
                  <li className='px-4 py-2 hover:bg-none md:hover:bg-gray-200'><a href={value.link}>{value.sub}</a></li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
      <div onClick={() => setOpen(!open)} className='text-white block lg:hidden md:hidden '>
        {
          open ? (
            <TfiAlignJustify className='text-xl mt-2.5 ml-16' />
          ) : (

            <TfiClose className='text-xl mt-2.5 ml-16' />
          )

        }

      </div>
      <div className=' w-1/4 h-full  items-center justify-end hidden md:flex '>
        <div className='w-10 h-full hover:bg-green-600 flex justify-center items-center'>
          <BiSearch className=' h-full text-lg  text-white font-bold ' />
        </div>
      </div>
    </div>
  )
}


export default Header