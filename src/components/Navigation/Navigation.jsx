import React from 'react'
import './Navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiComputerFill} from 'react-icons/ri'
import {RiGameFill} from 'react-icons/ri'
import {HiOutlinePhone} from 'react-icons/hi'
import {useState} from 'react'

const Navigation = () => {
  /* current Use State hook and update function respectively */
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><RiComputerFill/></a>
      <a href="#Hobbies" onClick={() => setActiveNav('#Hobbies')} className={activeNav === '#Hobbies' ? 'active' : ''}><RiGameFill/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><HiOutlinePhone/></a>
    </nav>
  )
}

export default Navigation