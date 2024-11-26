import About_Feature from '../Builder/About_Feature'
import AboutUs from '../Builder/AboutUs'
import Booking from '../Builder/Booking'
import Events from '../Builder/Events'
import Intro from '../Builder/Intro'
import RentCar from '../Builder/RentCar'

const About = () => {
  return (
    <div className='' style={{backgroundColor:"#white"}}>
        <Intro info={"About us"} secondary={"Home || About us"}/>
        <AboutUs imageUri={"https://www.bmwusa.com/content/dam/bmw/common/limited-edition/2024/soc25/m4-cs/BMW-LimitedEdition-M4-CSL-all.jpg.bmwimg.small.jpg"}/>
        <About_Feature/>
        <RentCar/>
        <Events color={"white"}/>
        <Booking/>
    </div>
  )
}

export default About