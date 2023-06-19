//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { SiMicrosoftteams} from 'react-icons/si'
import { LuPhoneCall } from 'react-icons/lu'

/*import for emails js*/

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  /* Email js part https://www.emailjs.com/docs/examples/reactjs/ */

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdnhomi', 'template_tkjp3gn', form.current, 'XOb5e68hIAj1gJUbL')
    e.target.reset()
  };


  /* main body part */

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className='contact__option'>

            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sagaranand03@outlook.com</h5>
            <a href='mailto:sagaranand03@outlook.com' target='email'>Send a Message</a>

          </article>

          <article className='contact__option'>

            <SiMicrosoftteams className='contact__option-icon' />
            <h4>Microsoft Team</h4>
            <h5>Sagar Anand</h5>
            <a href='https://teams.live.com/l/invite/FEA5EgyHPOZnkmEuwE' target='Microsoft_Team'>Send a Message</a>

          </article>

          <article className='contact__option'>

            <LuPhoneCall className='contact__option-icon' />
            <h4>Call</h4>
            <h5>+918555082705</h5>
            <a href='tel:+918555082705'target='call'>Click to Call</a>

          </article>



        </div>

        {/* END OF CONTACT OPTIONs & Starting Of form --Email Js */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='Message' placeholder='Your Message' rows='7'></textarea>
          <button type='sumbit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section >
  )
}

export default Contact