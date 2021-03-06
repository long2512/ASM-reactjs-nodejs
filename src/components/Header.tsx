import React, { useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'






const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between">
        <div className="px-10 py-2 w-64 h-20">
          <img src="https://khutrungxanh.com/wp-content/uploads/2019/04/kiem-soat-con-trung-h%E1%BB%87-th%E1%BB%91ng-c%E1%BB%A7a-h%C3%A0ng-highland-coffee-300x242.png" alt="" />
        </div>
        <div className="flex mt-12">
          <div className="menu top-0">
            <ul className="flex text-sm text-black">
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Home
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/about' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  About
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/products' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Shop
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/contact' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Contact
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/admin/products' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Admin
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/login' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Signin
                </NavLink>
              </li>
              <li className="hover:text-[#b97c5e] text-2xl">
                <NavLink to='/register' className="block py-4 px-4  font-sans hover:text-[#B97C5E];">
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="mt-4 pr-10">
            <span className="relative ">
              <i className="fa-solid fa-cart-shopping text-2xl text-black"></i>

              <span className="inline-flex absolute  items-center top-[-13px] right-[-20px] justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black  bg-red-600 rounded-full">
                9
              </span>
            </span>
          </div> */}
        </div>
      </nav>

      <div className='block mt-16'>
        <img className='w-full' src="https://th.bing.com/th/id/R.75284639d1349f8dbb3ca6dd9a46c69a?rik=fO3n7st2DC1BDA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5yqa0swfJlU%2fVbOKfjTlKyI%2fAAAAAAAAAdA%2fbRujhOmD3d4%2fs1600%2fbanner-cafe.jpg&ehk=3p0Q2E6ZH5c3nh4KYK4stntfssCWTRlOFVdhtjFDjPU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
      </div>
    </header>
    
  )
}

export default Header