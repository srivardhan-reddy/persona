import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profile_home.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Srivardhan Reddy Kalli</h1>
        <h5 className="text-light">Computer Science Engineer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header