import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import UpcomingEvents from './UpcomingEvents'
import Intl_Business_Summit from './Intl_Business_Summit'
import Benefits from './Benefits'
import Footer from './Footer'
import Logo from '../assets/Logo.png'

// IMAGES
import Hero_bg_1 from '../assets/hero-bg-1.png'
import Hero_bg_2 from '../assets/hero-bg-2.jpg'
import Hero_bg_3 from '../assets/hero-bg-3.jpg'
import Hero_bg_4 from '../assets/hero-bg-4.jpg'
// FONT AWESOME LINK
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Event_Features from './Event_Features'
import Photo_Gallery from './Photo_Gallery'
import Event_Feedbacks from './Event_Feedbacks'
import Feedback_Form from './Feedback_Form'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <header>
                <nav className='header-nav'>
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

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={Hero_bg_1} /></SwiperSlide>
                    <SwiperSlide><img src={Hero_bg_2} /></SwiperSlide>
                    <SwiperSlide><img src={Hero_bg_3} /></SwiperSlide>
                    <SwiperSlide><img src={Hero_bg_4} /></SwiperSlide>
                </Swiper>

                {/* <div className='hero-section'>
                    <button className='hero-btn'>Business</button>
                    <h1>Africa Startup Festival</h1>
                    <div className='hero-time-container'>
                        <div className='hero-location'>
                            <FontAwesomeIcon icon={faLocationDot} className='clr-yellow' />
                            <p>Ado Ekiti</p>
                        </div>
                        <div className='hero-date'>
                            <FontAwesomeIcon icon={faCalendar} className='clr-yellow' />
                            <p>28th July, 2023</p>
                        </div>
                    </div>
                    <div className='hero-btns'>
                        <button className='details-btn'>Details</button>
                        <button className='book-event-btn'>Book Event</button>
                    </div>
                </div> */}
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