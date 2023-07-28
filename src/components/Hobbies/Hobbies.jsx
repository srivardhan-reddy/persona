import React from 'react'
import './Hobbies.css'
import {TbDeviceGamepad2} from 'react-icons/tb'
import {BiGlassesAlt} from 'react-icons/bi'
import {RiSlideshow3Line} from 'react-icons/ri'
import {TbWritingSign} from 'react-icons/tb'

const Hobbies = () => {
    return (
        <section id='Hobbies'>
            <h5>What I do for leisure</h5>
            <h2>Hobbies</h2>
            <div className='container hobby_cards'>
                <div className='hobby__gaming'>
                    <article className='Gaming'>
                        <TbDeviceGamepad2 className='hobby_icons'/>
                        <h3>Gaming</h3>
                        <small>Get to know about my gaming experience </small>
                    </article>
                </div>
                <div className='hobby__tv'>
                    <article className='TV shows'>
                        <RiSlideshow3Line className='hobby_icons'/>
                        <h3>TV shows</h3>
                        <small>Brief insight into the entertainment that I prefer</small>
                    </article>
                </div>
                <div className='hobby__reading'>
                    <article className='Reading'>
                        <BiGlassesAlt className='hobby_icons'/>
                        <h3>Reading</h3>
                        <small>A recreational habit I'm trying to develop</small>
                    </article>
                </div>
                <div className='hobby__writing'>
                    <article className='Writing'>
                        <TbWritingSign className='hobby_icons'/>
                        <h3>Writing</h3>
                        <small>Accompany me on my endeavour to create</small>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Hobbies
