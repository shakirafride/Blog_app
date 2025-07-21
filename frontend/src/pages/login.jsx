import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { post } from "../serverice/Endpoint";
import toast from "react-hot-toast";
import {useDispatch} from 'react-redux'
import {AddLogin} from '../redux/AuthSlice'

export default function Login() {
  const [login,Setlogin] = useState({
    email:"",
    password:""
  })
 const useNavite = useNavigate()
 const dispatch = useDispatch()

  const handleLogin = (e)=>{
  const {name,value} = e.target;
  Setlogin({...login,[name]:value})
  }

const handleSubLogin = async(e)=>{
  try {
      e.preventDefault();
    const resp = await post('/api/user/login',login);
    const data = resp.data;
    if(resp.status === 200){
       toast.success(data.message);
       dispatch(AddLogin(data.user))
    };
    useNavite('/')
  } catch (error) {
    console.log('errer',error)
  }}



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        <form className="space-y-5" onSubmit={handleSubLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
             name="email"
             value={login.email}
              type="email"
              id="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              onChange={handleLogin}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            name="password"
            value={login.password}
              type="password"
              id="password"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
             onChange={handleLogin}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600 hover:underline">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}
