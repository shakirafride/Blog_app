import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoMoon } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/AuthSlice';
import { post } from '../../serverice/Endpoint';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state)=> state.auth.user);
  const Nagitive = useNavigate();
  const dispatch = useDispatch()
 
  const handlLoutout = async()=>{
    try {
      const res = await post('/api/user/logout');
      const data = await res.data;
      if(res.status === 200){
         Nagitive('/login');
         dispatch(logout());
         toast.success(data.message);
      }
          
    } catch (error) {
      console.log(error)
    }
 
  }
  const hanldeSinup = ()=>{
      Nagitive('/login')
  }

  return (
    <nav className="relative z-10 w-[80%] bg-[#FFFFFF] rounded ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Left: Logo and Links */}
        <div className="flex items-center space-x-8">
          <img src={logo} alt="Logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-black font-medium">
            <li><NavLink to="#" className="hover:text-indigo-300">Categories</NavLink></li>
            <li><NavLink to="#" className="hover:text-indigo-300">Tips & Advice</NavLink></li>
            <li><NavLink to="#" className="hover:text-indigo-300">Daily Ideas</NavLink></li>
          </ul>
        </div>

        {/* Right: Icons and Profile */}
        <div className="flex items-center space-x-4">
          <GoMoon className="h-5 w-5 text-black" />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Profile Dropdown (Desktop) */}
          {
            !user  ? <button onClick={hanldeSinup}>Sing up</button> :(
            <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <img
                src={`http://localhost:5000/images/${user.profile}`}
                alt="Avatar"
                className="w-9 h-9 rounded-full"
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-700 z-50">
                <NavLink
                  to=""
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                 Profile
                </NavLink>
                {
                  user.role=='admin' ? <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </NavLink> :''
                }
                
                <button
                 onClick={handlLoutout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
            )
          }
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 w-full absolute top-full left-0 z-50 flex flex-col items-center py-4 space-y-4">
          <NavLink
            to="#"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            Categories
          </NavLink>
          <NavLink
            to="#"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            Tips & Advice
          </NavLink>
          <NavLink
            to="#"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            Daily Ideas
          </NavLink>
          <NavLink
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            Dashboard
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-lg"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
