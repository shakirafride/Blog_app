import React from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <nav className="p-4 space-y-1">
            <NavLink
              to="/dashboard/dashboardcard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              <FaHome className="text-lg" />
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/allpost"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              <FaChartBar className="text-lg" />
            All Post
            </NavLink>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              <FaUser className="text-lg" />
               All Users
            </NavLink>
            <NavLink
              to="/dashboard/addpost"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              <FaCog className="text-lg" />
              Add post
            </NavLink>
            <button
              onClick={() => {
                console.log("Logout clicked");
              }}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-red-50 hover:text-red-600 text-gray-700 w-full text-left"
            >
              <FaSignOutAlt className="text-lg" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
       
        </main>
      </div>
    </>
  );
}
