import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from "./pages/HomePage"
import SignIn from "./pages/Singinpage"
import SignUp from "./pages/Singup"
import Otpverification from "./pages/Otpverification"
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import Search from './pages/Search'
import BlogDetail from './pages/BlogDetail'
const Allroutes = () => {
  return (
    <Routes>
  <Route path='/' element={<Homepage />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
    <Route path='/sign-up' element={<SignUp />}></Route>
    <Route path='/otp' element={<Otpverification />}></Route> 
    <Route path='/dashboard' element={<Dashboard />}></Route> 
    <Route path='/create-post' element={<CreatePost />}></Route> 
    <Route path='/blog' element={<Search />}></Route> 
    <Route path="/singlepost/:postId" element={<BlogDetail />}></Route> 

   
 </Routes> 
  
   )
}

export default Allroutes
