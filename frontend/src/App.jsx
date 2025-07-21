import './App.css'

import Home from './components/headerSlider/Home'
import { BrowserRouter, Routes, Route, NavLink,  } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard from './layouts/Dashboard'
import User from './pages/User'
import Post from './pages/Post'
import Addpost from './pages/Addpost'
import SinglePost from './pages/Singlepost'
import { Toaster } from "react-hot-toast"
import DashboardCards from './components/headerSlider/Dashbord/DashboardCards'
import { useSelector } from 'react-redux'



function App() {
  const user = useSelector((state)=> state.auth.user);
 
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          {!user ? <Route path='/' element={<Home />} /> : <NavLink to='/login'/> }  
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singlepost/:id' element={<SinglePost />} />
          {/* nested routes */}
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='user' element={<User />} />
            <Route path='allpost' element={<Post />} />
            <Route path='addpost' element={<Addpost />} />
            <Route path='dashboardcard' element={<DashboardCards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
