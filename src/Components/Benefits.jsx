import React from 'react'
import circle_1 from '../assets/circle-1.png'
import circle_2 from '../assets/circle-2.png'
import circle_3 from '../assets/circle-3.png'

import yellow_icon_bg from '../assets/yellow-bg-small.svg'
import circle_1_icon from '../assets/circle-1-icon.svg'
import circle_2_icon from '../assets/circle-2-icon.svg'
import circle_3_icon from '../assets/circle-3-icon.svg'

// FONT AWESOME
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'
// import { faPerson } from '@fortawesome/free-solid-svg-icons'

export default function Benefits() {
    return (
        <section className='event-benefits'>
            <h2>Why you should join <span className='clr-yellow'>Event</span></h2>

            <div className='circles'>
                {/* Circle-1 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_1_icon} alt='' />
                        <img src={yellow_icon_bg} alt='' />
                        <img src={circle_1} alt='' />
                    </div>
                    <h4>Friendly Team</h4>
                </div>

                {/* Circle-2 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_2_icon} alt='' />
                        <img src={yellow_icon_bg} alt='' />
                        <img src={circle_2} alt='' />
                    </div>
                    <h4>Friendly Team</h4>
                </div>

                {/* Circle-3 */}
                <div className='circle'>
                    <div className='circle-img'>
                        <img src={circle_3_icon} alt='' />
                        <img src={yellow_icon_bg} alt='' />
                        <img src={circle_3} alt='' />
                    </div>
                    <h4>Friendly Team</h4>
                </div>
            </div>
        </section>
    )
}
