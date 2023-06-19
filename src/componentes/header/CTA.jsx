//Project By :- SagarAnand
//Contact me :- sagaranand03@outlook.com
import React from 'react'
import CV from '../../assets/headerAssets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}download className='btn'>Download CV</a>
        <a href='#contact'className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA