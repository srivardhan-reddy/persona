import React from 'react'
import './About.css'
import ME from '../../assets/profile.jpeg'
import {MdWork} from 'react-icons/md'
import {FaUserGraduate} from 'react-icons/fa'
import {BsFillFolderFill} from 'react-icons/bs'
import {GiMaterialsScience} from 'react-icons/gi'

const About = () => {
    return (
        <section id='About'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__image">
                        <img src={ME} alt="About" />
                    </div>

                </div>

                <div className="about__content">
                    <div className="container__cards">
                        <article className='about__card'>
                            <MdWork className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2 Years Full Time</small>
                        </article>
                        <article className='about__card'>
                            <FaUserGraduate className='about__icon'/>
                            <h5>Degree</h5>
                            <small>
                                Pursuing MS in CS degree in OSU
                            </small>
                        </article>
                        <article className='about__card'>
                            <BsFillFolderFill className='about__icon'/>
                            <h5>Projects</h5>
                            <small>3+ Projects</small>
                        </article>
                        <article className='about__card'>
                            <GiMaterialsScience className='about__icon'/>
                            <h5>Research</h5>
                            <small>2 Research Paper Publications</small>
                        </article>
                    </div>

                    <p>
                        A self driven person who is keen on always learning intriguing technologies and apply the learned skills to
                        solve real world problems.
                    </p>

                    <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
  )
}

export default About
