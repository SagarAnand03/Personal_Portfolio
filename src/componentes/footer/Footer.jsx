//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (

    <div className="footer">

      <a href='#home' className='footer__logo'>Sagar Anand</a>

      <ul className='permalinks'>

        <li><a href='#home'>Home </a></li>
        <li><a href='#about'>About </a></li>
        <li><a href='#experience'>Experience </a></li>
        {/*<li><a href='#services'>Services </a></li>*/}
        <li><a href='#portfolio'>Portfolio </a></li>
        {/*<li><a href='#testimonials'>Testimonials</a></li>*/}
        <li><a href='#contact'>Contact </a></li>

      </ul>

      <div className="footer__socials">

        <a href='https://github.com/SagarAnand03' target='Github'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/SagarAnand03' target='instagram'><BsLinkedin /></a>
        <a href='https://twitter.com/sagarAnand03' target='twitter'><IoLogoTwitter /></a>
        

      </div>

      <div className="footer__copyright">
        <small>
          &copy; All right reserved | Sagar Anand
        </small>
      </div>

    </div>

  )
}

export default Footer
