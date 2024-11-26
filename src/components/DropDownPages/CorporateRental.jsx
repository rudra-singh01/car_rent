import Booking from "../Builder/Booking"
import CorporateCarSection from "../Builder/CorporateCarSection"
import Intro from "../Builder/Intro"
import SNPRentACarFeatures from "../Builder/SNPRentACarFeatures"

const CorporateRental = () => {
  return (
    <div>
        <Intro info={"Corporate Car Rental"} secondary={"Home || Corporate Car Rental"}/>
        <CorporateCarSection image={"https://www.snprentacar.com/images/services/img-1.jpg"}/>
        <SNPRentACarFeatures/>
        <Booking/>
    </div>
  )
}

export default CorporateRental