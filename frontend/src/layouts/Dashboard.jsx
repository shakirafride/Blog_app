import React from 'react'

import Sidebar from '../components/headerSlider/Dashbord/Sidebar';
import DashbordNavbar from '../components/headerSlider/Dashbord/DashbordNavbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export default function Dashboard() {

  const user = useSelector((state)=> state.auth.user);
  const Nagitive = useNavigate();


  useEffect(()=>{
 if(!user){
  Nagitive('/')
 }else if(user.role !== 'admin'){
  Nagitive('/')
 }
  },[user,Nagitive])
  return (
    <>
    <DashbordNavbar/>
      <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet/>
        </main>
      </div>
    </>
  )
}
