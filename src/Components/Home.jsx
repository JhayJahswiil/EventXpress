import React from 'react'
import UpcomingEvents from './UpcomingEvents'
import Benefits from './Benefits'
import Logo from '../assets/Logo.png'

// FONT AWESOME LINK
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='nav-left'>
                        <div className='nav-logo'>
                            <img src={Logo} alt='EventXpress Logo' />
                        </div>

                        <div className='nav-links'>
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Events</a></li>
                                <li><a>Account</a></li>
                                <li><a>Calendar</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='nav-right'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='search' />
                        <button className='register-btn'>Register Now</button>
                    </div>
                </nav>
            </header>

            <UpcomingEvents />
            <Benefits />

        </>
    )
}

export default Home