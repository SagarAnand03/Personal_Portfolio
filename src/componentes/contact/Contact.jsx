import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

/*import for emails js*/

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  /* Email js part https://www.emailjs.com/docs/examples/reactjs/ */

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nwh8115', 'template_jn5mtl1', form.current, 'IUwppOSZ56YWu6G5o')
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
            <h5>sa24449@Hotmail.com</h5>
            <a href='mailto:sa24449@hotmail.com' target='email'>Send a Message</a>

          </article>

          <article className='contact__option'>

            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Sagar Anand</h5>
            <a href='https://m.me/sagaranand' target='Messenger'>Send a Message</a>

          </article>

          <article className='contact__option'>

            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatapp</h4>
            <h5>+12453984245</h5>
            <a href='https://api.whatapp.com/send?phone=+918500355444' target='Whatapp'>Send a Message</a>

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