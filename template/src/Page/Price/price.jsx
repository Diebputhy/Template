import React from 'react'
import { IoCheckmark } from 'react-icons/io5'

function Price() {
    let price = [
        {
            header: "Basic",
            bg: "bg-green-500",
            storage: 10,
            email: 10,
            domain: 10,
            suport: "Endless",
            pay: 10,
        },
        {
            header: "Premium",
            bg: "bg-blue-500",
            storage: 25,
            email: 25,
            domain: 25,
            suport: "Endless",
            pay: 25,
        },
        {
            header: "Pro",
            bg: "bg-red-500",
            storage: 50,
            email: 50,
            domain: 50,
            suport: "Endless",
            pay: 50,
        },
    ];
    return (
        <>
            <div className='w-full h-[1750px] md:h-[700px]  p-4 mt-5' id='price'>
                <h1 className='text-black text-2xl md:text-3xl text-center mb-2'>PRICING</h1>
                <p className='text-black  text-md md:text-lg text-center mb-5'>Choose a pricing plan that fits your needs.</p>
                <div className='w-full h-[550px]  mt-6 block md:flex'>
                    {
                        price.map((value, index) => (
                            <div className=' w-full md:w-[30%] h-full border-inherit border-slate-500 ml-0 md:ml-10 mb-0 md:mb-0'>
                                <div className={`  lg:h-[20%] md:h-[20%] w-full ${value.bg} flex justify-center items-center'`}  >
                                    <p className='text-white text-2xl flex items-center justify-center lg:p-0 md:p-0 p-3' >{value.header}</p>
                                </div>
                                <div className='w-full h-[60%]  '>
                                    <div className=' w-full h-[16%] bg-white  border-inherit border  flex justify-center items-center '>
                                        <p className='font-bold mr-2'>{value.storage}GB</p> Storage
                                    </div>
                                    <div className=' w-full h-[16%] bg-white  border-inherit border  flex justify-center items-center '>
                                        <p className='font-bold mr-2'>{value.email}GB</p> Email
                                    </div>
                                    <div className=' w-full h-[16%] bg-white  border-inherit border  flex justify-center items-center '>
                                        <p className='font-bold mr-2'>{value.domain}GB</p> Domains
                                    </div>
                                    <div className=' w-full h-[16%] bg-white  border-inherit border  flex justify-center items-center '>
                                        <p className='font-bold mr-2'>{value.suport}</p> Support
                                    </div>
                                    <div className=' w-full h-[36%] bg-white  border-inherit border '>
                                        <p className='text-center text-4xl mb-3 mt-2 font-bold'>$ {value.pay}</p>
                                        <p className='text-center text-lg'>Per months</p>
                                    </div>

                                </div>
                                <div className='w-full h-[15%] md:h-[20%] bg-gray-400 flex justify-center items-center font-bold'>
                                    <button className='w-[130px] h-[50px] bg-indigo-600 text-black text-lg flex justify-center items-center hover:bg-white'><IoCheckmark className='text- size-7' />Sign Up</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Price