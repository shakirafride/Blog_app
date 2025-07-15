import React from 'react'
import backimg from '../../assets/images/image.png'
import Navbar from '../../components/headerSlider/Navbar'
import Herosection from './Herosection'


export default function Header() {
  return (
    <>
  <div
        style={{
          backgroundImage: `url(${backimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center center',
          width: '100%',
          maxWidth: '1440px',
          height: '92vh',// 549px
          margin: '0 auto',
        position:'fixed',
        position:'relative'
        }}
       >
 <Navbar/>
 <Herosection/>
      </div>
    </>
  )
}
