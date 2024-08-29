import React from 'react'
import map from "../../assets/map.jpg"

function Map() {
  return (
    <>
      <div className='w-full h-[300px] lg:h-[700px] md:h-[600px] bg-red-200 md:mt-0 mt-7'>
        <img src={map} className='w-full h-full object-cover' />
      </div>
    </>
  )
}

export default Map