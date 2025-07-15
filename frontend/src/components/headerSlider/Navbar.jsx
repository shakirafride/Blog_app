import React from 'react'
import logo from '../../assets/images/logo.png'
import { GoMoon } from "react-icons/go";
import { LuShoppingBasket } from "react-icons/lu";
export default function Navbar() {
  return (
  <>
    <div className='ml-[135px] mr-[135px] min-width-[1170px] bg-[#FFFFFF] p-[15px] rounded
    flex justify-between items-center
    '>
   <div className='left flex gap-[30px] p-[12px]' >
        <div>
          <img src={logo} alt="" />
        </div>
    <li style={{listStyle:"none"}}>Categories</li>
    <li style={{listStyle:"none"}}>Tips $ Advice</li>
    <li style={{listStyle:"none"}}>Daily ideas</li>

   </div>
   <div className='right flex items-center gap-[20px]'>
   <div>
    <GoMoon className='h-5 w-5'/>
   </div>
    <button
      className="flex items-center text-[#FFFFFF] bg-[#212529] gap-2 px-4 py-2 text-white rounded hover:bg-[#3E454D] transition"
    >
      <LuShoppingBasket className="h-5 w-5" />
      Menu button
    </button>
   </div>
 </div>
  </>
  )
}
