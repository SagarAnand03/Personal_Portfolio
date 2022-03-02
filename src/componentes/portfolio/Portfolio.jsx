import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.gif'
/*import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/image3.png'
import IMG4 from '../../assets/image4.png'
import IMG5 from '../../assets/image5.png'
import IMG6 from '../../assets/image6.gif'*/

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Todos list by using React js',
    github: 'https://github.com/sa24449/Todos_List.git',
    demo: 'https://github.com/sa24449/Todos_List.git',

  },
  {
    id: 2,
    image: IMG1,
    title: 'Password Generator Web Models ',
    github: 'https://github.com/sa24449/Password_Generator.git',
    demo: 'https://github.com/sa24449/Password_Generator.git',

  },
  {
    id: 3,
    image: IMG1,
    title: 'Motion Detection program ',
    github: 'https://github.com/sa24449/Motion_Detection.git',
    demo: 'https://github.com/sa24449/Motion_Detection.git',

  },
  {
    id: 4,
    image: IMG1,
    title: 'BookStore Application ',
    github: 'https://github.com/sa24449/BookStore_Application.git',
    demo: 'https://github.com/sa24449/BookStore_Application.git',

  },
  {
    id: 5,
    image: IMG1,
    title: 'Github profile',
    github: 'https://github.com/sa24449/sa24449.git',
    demo: 'https://github.com/sa24449/sa24449.git',

  },
  {
    id: 6,
    image: IMG1,
    title: 'Web Mapping',
    github: 'https://github.com/sa24449/WebMapping.git',
    demo: 'https://github.com/sa24449/WebMapping.git',

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>

                <div className="portfolio__item-image">

                  <img src={image} alt={title} />

                </div>

                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo}  className='btn bttn-primary' target='github'>Live Demo</a>
                </div>

              </article>
            )
          })
        }


        {/* //testing input follow by above array//
        
        <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>

       </article>

         <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>



        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>



        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>



        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>



        </article>

        <article className='portfolio__item'>

          <div className="portfolio__item-image">

            <img src={IMG1} alt='ss' />

          </div>

          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://github.com' className='btn bttn-primary' target='github'>Live Demo</a>
          </div>



        </article>*/}


      </div>


    </section>
  )
}

export default Portfolio