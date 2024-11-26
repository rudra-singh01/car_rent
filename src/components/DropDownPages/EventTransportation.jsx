import React from 'react'
import Intro from '../Builder/Intro'
import CorporateCarSection from '../Builder/CorporateCarSection'
import SNPRentACarFeatures from '../Builder/SNPRentACarFeatures'
import Booking from '../Builder/Booking'

const EventTransportation = () => {
  return (
    <div>
        <Intro info={"Event Transportation"} secondary={"Home   || Event Transportation "}/>
        <CorporateCarSection image={"https://www.snprentacar.com/images/services/e-trans-1.jpg"}/>
        <SNPRentACarFeatures/>
        <Booking/>
    </div>
  )
}

export default EventTransportation