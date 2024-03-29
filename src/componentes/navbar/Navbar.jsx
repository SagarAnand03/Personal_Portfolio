//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import './navbar.css'
import{AiOutlineHome}from 'react-icons/ai'
import{AiOutlineUser}from 'react-icons/ai'
import{BiBook}from 'react-icons/bi'
import{ AiOutlineFundProjectionScreen}from 'react-icons/ai'
/*import{RiServiceLine}from 'react-icons/ri'*/
import{BiMessageSquareDetail}from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#home' onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/*<a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>*/}
      <a href='#portfolio'onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar