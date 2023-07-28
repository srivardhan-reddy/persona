import React from 'react'
import CV from '../../assets/Srivardhan_FT_SD.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#Contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA