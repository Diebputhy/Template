import React from 'react'
import Logo from '../../Page/Logo/logo'
import Team from '../../Page/Team/team'
import Work from '../../Page/Work/work'
import Price from '../../Page/Price/price'
import Contact from '../../Page/Contact/contact'
import Map from '../../Page/Map/map'

function Content() {
    return (
        <>
            <div className='logo mb-10'>
                <Logo />
            </div>
            <div className='team mt-10'>
                <Team />
            </div>
            <div className='team mt-5 mb-5'>
                <Work />
            </div>
            <div className='team mt-10' >
                <Price />
            </div>
            <div className='team mt-10' >
                <Contact />
            </div>
            <div className=''>
                <Map />
            </div>
        </>
    )
}

export default Content