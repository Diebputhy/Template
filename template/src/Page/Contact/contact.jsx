import React from 'react'
import { FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6'

function Contact() {
    return (
        <>
            <div className='w-full overflow-hidden md:h-[450px] bg-gray-100 p-3 block md:flex justify-center items-center' id='contact'>
                <div className=' w-full md:w-[40%]  h-full'>
                    <h1 className='text-black text-2xl md:text-3xl  ml-6  mt-10 font-sans font-bold '>Contact Us</h1>
                    <p className='text-xl ml-6 mt-4'>Address</p>
                    <p className='text-lg ml-6 mt-4'>Swing by for a cup of coffee, or whatever.</p>
                    <p className='text-lg ml-6 mt-4 flex'><FaLocationDot className='text-green-700 text-xl flex mr-2' /> Chicago, US</p>
                    <p className='text-lg ml-6 mt-4 flex'><FaPhone className='text-green-700 text-xl flex mr-2' />+00 1515151515</p>
                    <p className='text-lg ml-6 mt-4 flex'><FaMessage className='text-green-700 text-xl flex mr-2' /> test@test.com</p>
                </div>
                <div class="mt-3 md:mt-0 w-full md:w-[70%] h-[90%] mx-auto p-4 bg-white rounded-lg shadow-md">
                    <form>
                        <div class="space-y-4">
                            <label class="block">
                                <span class="text-gray-700 font-bold">Name</span>
                                <input type="text" class=" h-[30px] md:h-[40px] mt-1 block w-full rounded-md border-gray-300 shadow-sm  sm:text-sm" />
                            </label>
                            <label class="block">
                                <span class="text-gray-700 font-bold">Email</span>
                                <input type="email" class= " h-[30px] md:h-[40px] mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm" />
                            </label>
                            <label class="block">
                                <span class="text-gray-700 font-bold">Message</span>
                                <textarea class="mt-1 block h-[30px] md:h-[40px] w-full rounded-md border-gray-300 shadow-sm  sm:text-sm" rows="4"></textarea>
                            </label>
                        </div>
                        <div class="flex items-center mt-5 ">
                            <input id="default-checkbox" type="checkbox" class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ml-2 text-sm text-gray-500">I like it!</label>
                            <div className=' ml-[170px] md:ml-[750px]'>
                            <button type="submit" class="mt-4 bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700">Send</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact