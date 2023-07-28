import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Hobbies from './components/Hobbies/Hobbies'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export const App = () => {
    return (
        <div>
            <>
            <Header />
            <Navigation />
            <About />
            <Experience />
            <Hobbies />
            <Contact />
            <Footer />

            </>
        </div>
    )
}
