import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target="Linkedin"><BsLinkedin /></a>
      <a href='https://github.com' target="Github"><FaGithub /></a>
      <a href='https://dribble.com' target="Dribble"><FiDribbble /></a>


    </div>
  )
}

export default HeaderSocials