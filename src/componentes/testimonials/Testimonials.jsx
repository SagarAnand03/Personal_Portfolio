//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/testimonialsAssets/me.jpg'
/*import  IMG1 from '../../assets/me.jpg'
import  IMG1 from '../../assets/me.jpg'
import  IMG1 from '../../assets/me.jpg'
import  IMG1 from '../../assets/me.jpg'*/

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {

    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',

  },
  {

    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',
  },
  {

    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',

  },
  {

    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',

  },
  {
    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',
  },
  {

    avatar: IMG1,
    name: 'Ernest Achiver',
    review: 'If you want to be a Wordle master, you need a strategy,Particularly when it comes to start words. With only six tries to guess a five-letter word, you want to maximize the odds: "ADIEU" is popular, since it includes four vowels,',

  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Name from clients </h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}>     

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>

                <Swiper className="client__avatar">

                  <img src={avatar} alt='Avater one' />


                </Swiper>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>

              </SwiperSlide>

            )
          })
        }
       

        {/*<article className='testimonial'>

          <div className="client__avatar">

            <img src={IMG1} alt='Avater one' />


          </div>
          <h5 className='client__name'>Ernest Achiver</h5>
          <small className='client__name'>
            If you want to be a Wordle master, you need a strategy.
            Particularly when it comes to start words. With only six
            tries to guess a five-letter word, you want to maximize the
            odds: "ADIEU" is popular, since it includes four vowels,
          </small>

        </article>

        <article className='testimonial'>

          <div className="client__avatar">

            <img src={IMG1} alt='Avater one' />


          </div>
          <h5 className='client__name'>Ernest Achiver</h5>
          <small className='client__name'>
            If you want to be a Wordle master, you need a strategy.
            Particularly when it comes to start words. With only six
            tries to guess a five-letter word, you want to maximize the
            odds: "ADIEU" is popular, since it includes four vowels,
          </small>

        </article>

        <article className='testimonial'>

          <div className="client__avatar">

            <img src={IMG1} alt='Avater one' />


          </div>
          <h5 className='client__name'>Ernest Achiver</h5>
          <small className='client__name'>
            If you want to be a Wordle master, you need a strategy.
            Particularly when it comes to start words. With only six
            tries to guess a five-letter word, you want to maximize the
            odds: "ADIEU" is popular, since it includes four vowels,
          </small>

        </article>

        <article className='testimonial'>

          <div className="client__avatar">

            <img src={IMG1} alt='Avater one' />


          </div>
          <h5 className='client__name'>Ernest Achiver</h5>
          <small className='client__name'>
            If you want to be a Wordle master, you need a strategy.
            Particularly when it comes to start words. With only six
            tries to guess a five-letter word, you want to maximize the
            odds: "ADIEU" is popular, since it includes four vowels,
          </small>

  </article>*/}



      </Swiper>


    </section>
  )
}

export default Testimonials