import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/srivardhanreddykalli/" target="_blank" rel="noreferrer"><GrLinkedin/></a>
        <a href="https://github.com/srivardhan-reddy" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="https://www.instagram.com/srivardhank/?hl=en" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials