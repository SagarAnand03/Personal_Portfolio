import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
/*import {FiUsers} from 'react-icons/fi'*/
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>

        <div className='about__me-image'>
          <img src={ME} alt='About img'/>
        </div>

        </div>

        <div className='about__content'>

          <div className='about__cards'>

            <article className='about__card'>

            <FaAward className='about__icon'/>            
              <h5>Expreience</h5>
              <small>Fresher</small>

            </article>

            {/*<article className='about__card'>

            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0+ Worldwide</small>

            </article>*/}

            <article className='about__card'>

            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>

            </article>

          </div>

          <p>
          Madison Blackstone is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach. Madison is fueled by her passion for understanding the
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About