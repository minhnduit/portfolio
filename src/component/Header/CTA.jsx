import React from 'react'
import CV from '../../assets/Nguyen Duy Minh_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA