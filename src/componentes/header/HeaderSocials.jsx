import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/sagar-anand-6ba504194' target="Linkedin"><BsLinkedin /></a>
      <a href='https://github.com/sa24449' target="Github"><FaGithub /></a>
      <a href='https://devfolio.co/@SagarAnand' target="Dev"><FaDev /></a>


    </div>
  )
}

export default HeaderSocials