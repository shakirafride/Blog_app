import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { GoMoon } from "react-icons/go";

export default function DashbordNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-40 bg-white p-3 rounded flex justify-between items-center">
      {/* Left side */}
      <div className="flex gap-8 items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <ul className="flex gap-6">
          <li className="list-none">Categories</li>
          <li className="list-none">Tips & Advice</li>
          <li className="list-none">Daily Ideas</li>
        </ul>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        <GoMoon className="h-5 w-5" />

        {/* Profile Dropdown */}
        <div className="relative inline-block text-left">
          {/* Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium text-gray-700 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="w-9 h-9 rounded-full"
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                >
                  Profile
                </button>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                >
                  Home
                </NavLink>
                <button
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
