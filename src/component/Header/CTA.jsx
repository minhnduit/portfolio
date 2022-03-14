import React from 'react'
import CV from '../../assets/Nguyen Duy Minh_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let' Talk</a>
    </div>
  )
}

export default CTA