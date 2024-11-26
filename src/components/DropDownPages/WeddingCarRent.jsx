import Booking from "../Builder/Booking"
import CorporateCarSection from "../Builder/CorporateCarSection"
import Intro from "../Builder/Intro"
import SNPRentACarFeatures from "../Builder/SNPRentACarFeatures"

const WeddingCarRent = () => {
  return (
    <div>
        <Intro info={"Wedding Car Rental"} secondary={"Home   || Wedding Car Rental "}/>
        <CorporateCarSection image={"https://www.snprentacar.com/images/services/w-car-1.jpg"}/>
        <SNPRentACarFeatures/>
        <Booking/>
    </div>
  )
}

export default WeddingCarRent