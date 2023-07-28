import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {ImYoutube} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Srivardhan Reddy</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Hobbies">Hobbies</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/vardhan98/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.instagram.com/srivardhank/?hl=en" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.youtube.com/channel/UC3urqg_Ehyd_A_RxkpzLBPg" target="_blank" rel="noreferrer"><ImYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Srivardhan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer