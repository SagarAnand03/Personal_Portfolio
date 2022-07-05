import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
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
        <a href='https://instagram.com/sagaranand03' target='instagram'><FiInstagram /></a>
        <a href='https://twitter.com/sagaran61717220' target='twitter'><IoLogoTwitter /></a>
        

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
