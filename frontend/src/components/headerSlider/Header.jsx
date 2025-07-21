import React from 'react'
import backimg from '../../assets/images/image.png'
import Navbar from '../../components/headerSlider/Navbar'
import Herosection from './Herosection'

// bg-[#FFFFFF]

export default function Header() {
  return (
    <>
      <div className="absolute w-[100%] top-5 flex justify-center items-center">
        <Navbar />
      </div>

      <div
        style={{
          backgroundImage: `url(${backimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center center',
          width: '100%',
          maxWidth: '1440px',
          height: '92vh',// 549px
          margin: '0 auto',
          position: 'relative',
        }}
        className='flex justify-center   items-center'
      >
        <Herosection />
      </div>
    </>
  )
}
