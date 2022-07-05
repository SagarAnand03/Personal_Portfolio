import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/SagarAnand03' target="Linkedin"><BsLinkedin /></a>
      <a href='https://github.com/SagarAnand03' target="Github"><FaGithub /></a>
      <a href='https://devfolio.co/@SagarAnand' target="Dev"><FaDev /></a>


    </div>
  )
}

export default HeaderSocials
