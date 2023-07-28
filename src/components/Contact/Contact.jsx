import React from 'react'
import './Contact.css'
import {GrMail} from 'react-icons/gr'
import {FaLinkedin} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1cmufxs', 'template_y1wl2kz', form.current, 'seluvsXDn52Y64xnj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section id='Contact'>
            <h5>Wanna get personal?</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <GrMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>kalli.1@osu.edu</h5>
                        <a href="mailto:kalli.1@osu.edu" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>Srivardhan Reddy</h5>
                        <a href="https://www.linkedin.com/in/srivardhanreddykalli/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <ImWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+1 3802139807</h5>
                        <a href="https://wa.me/+13802139807" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="text" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
