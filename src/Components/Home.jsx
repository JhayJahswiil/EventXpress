import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import UpcomingEvents from './UpcomingEvents'
import Intl_Business_Summit from './Intl_Business_Summit'
import Benefits from './Benefits'
import Hero_Section from "./Hero_Section";
import Footer from './Footer'
import Logo from '../assets/Logo.png'

// FONT AWESOME LINK
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Event_Features from './Event_Features'
import Photo_Gallery from './Photo_Gallery'
import Event_Feedbacks from './Event_Feedbacks'
import Feedback_Form from './Feedback_Form'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [showLinks, setShowLinks] = useState(false)

    return (
        <>
            <header>
                <nav className='header-nav'>
                    <div className='nav-left'>
                        <div className='nav-logo'>
                            <img src={Logo} alt='EventXpress Logo' />
                        </div>

                        <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
                            <FontAwesomeIcon icon={faBars} />
                            <FontAwesomeIcon icon={faXmark} className="cancel" />
                        </div>

                        <div className='nav-links'>
                            <ul className="nav-links-ul" id={showLinks ? "hidden" : ""}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='about'>About</Link></li>
                                <li><Link to='events'>Events</Link></li>
                                <li><Link to='account'>Account</Link></li>
                                <li><Link to='calendar'>Calendar</Link></li>
                                <li><Link to='contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='nav-right'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search' />
                        <button className='register-btn'>Register Now</button>
                    </div>
                </nav>

                <Hero_Section />
            </header>

            <UpcomingEvents />
            <Benefits />
            <Intl_Business_Summit />
            <Photo_Gallery />
            <Event_Features />
            <Event_Feedbacks />
            <Feedback_Form />
            <Footer />
        </>
    )
}

export default Home