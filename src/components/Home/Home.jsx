import AboutUs from "../Builder/AboutUs"
import ClientReview from "../Builder/ClientReview"
import Events from "../Builder/Events"
import FeaturesSection from "../Builder/FeaturesSection"
import HeroSection from "../Builder/HeroSection"
import HowItsWork from "../Builder/HowItsWork"
import OurFleets from "../Builder/OurFleets"
import WhatWeDo from "../Builder/WhatWeDo"

const Home = () => {
  return (
    <div className="bg-white">
       <div className="">
        <HeroSection/>
        <FeaturesSection/>
        <OurFleets/>    
        <AboutUs imageUri={"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80&q=80"}/>
        <Events/>
        <WhatWeDo/>
        <HowItsWork/>
        <ClientReview/>
       </div>
    </div>
  )
}

export default Home