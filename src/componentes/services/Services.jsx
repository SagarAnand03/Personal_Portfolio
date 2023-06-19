//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI / UX Design</h3>
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

          </ul>
        </article>

        {/* End of ux*/}

        <article className='service'>

          <div className='service__head'>

            <h3>Web Development</h3>
            
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

          </ul>
        </article>

        {/*end web development*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Forget about spam, advertising mailings</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services