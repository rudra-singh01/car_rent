import Booking from "../Builder/Booking"
import CorporateCarSection from "../Builder/CorporateCarSection"
import Intro from "../Builder/Intro"
import SNPRentACarFeatures from "../Builder/SNPRentACarFeatures"

const EmployeeTransportation = () => {
  return (
    <div>
        <Intro info={"Employee Transportation"} secondary={"Home   || Employee Transportation "}/>
        <CorporateCarSection image={"https://www.snprentacar.com/images/services/emp-trans-1.jpg"}/>
        <SNPRentACarFeatures/>
        <Booking/>
    </div>
  )
}

export default EmployeeTransportation