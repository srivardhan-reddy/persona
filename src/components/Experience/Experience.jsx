import React from 'react'
import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaPython} from 'react-icons/fa'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {SiOracle} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiCplusplus} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {GrReactjs} from 'react-icons/gr'
import {FaCss3Alt} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {BiGitBranch} from 'react-icons/bi'
import {SiJunit5} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {SiGooglecloud} from 'react-icons/si'
import {DiLinux} from 'react-icons/di'
import {AiTwotoneApi} from 'react-icons/ai'
import {FaRocket} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
// import boobs from '../../assets/boob.png' 
const Experience = () => {
    return (
        <section id='Experience'>
            <h5>Work and Skills</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__work">
                        <h3>Industry</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <FaRocket />
                                <h4>Flairsoft</h4>
                                <small className='text-light'>Software Engineer</small>
                            </article>
                            <article className='experience__details'>
                                <SiOracle/>
                                <h4>Oracle</h4>
                                <small className='text-light'>Software Developer 2</small>
                            </article>
                            <article className='experience__details'>
                                <FaUniversity />
                                <h4>The Ohio State University</h4>
                                <small className='text-light'>Graduate Teaching Associate</small>
                            </article>
                        </div>
                </div>
                <div className="experience__languages">
                    <h3>Languages</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillCheckCircleFill />
                            <h4>C</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiCplusplus />
                            <h4>C++</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <FaJava />
                            <h4>Java</h4>
                            <small className='text-light'>Experieced</small>
                        </article>
                        <article className='experience__details'>
                            <FaPython />
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <AiFillHtml5 />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <FaCss3Alt />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <IoLogoJavascript />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <AiOutlineConsoleSql />
                            <h4>SQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <GrReactjs />
                            <h4>React</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                        {/* <article className='experience__details'>
                            <img src={boobs} alt="" />
                            <h4>Boobies Lover</h4>
                            <small className='text-light'>Expert</small>
                        </article> */}
                    </div>
                </div>
                <div className="experience__framework">
                    <h3>Framework/Tools</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaNodeJs />
                            <h4>Node JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience__details'>
                            <GrMysql />
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <BiGitBranch />
                            <h4>Git</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiJunit5 />
                            <h4>Junit</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                            <SiScikitlearn />
                            <h4>SciKit</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                        <article className='experience__details'>
                            <SiNumpy />
                            <h4>NumPy</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__Infrastructure">
                    <h3>Infrastructure</h3>
                    <div className="experience__content">
                            <article className='experience__details'>
                                <SiGooglecloud />
                                <h4>GCP</h4>
                                <small className='text-light'>Intermediate</small>
                            </article>
                            <article className='experience__details'>
                                <FaAws />
                                <h4>AWS</h4>
                                <small className='text-light'>Basic</small>
                            </article>
                            <article className='experience__details'>
                                <SiOracle />
                                <h4>OCI</h4>
                                <small className='text-light'>Experienced</small>
                            </article>
                            <article className='experience__details'>
                                <DiLinux />
                                <h4>Linux</h4>
                                <small className='text-light'>Intermediate</small>
                            </article>
                            <article className='experience__details'>
                                <AiTwotoneApi />
                                <h4>REST APIs</h4>
                                <small className='text-light'>Experienced</small>
                            </article>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
