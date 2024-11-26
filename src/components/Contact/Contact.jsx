import Contact_cards from "../Builder/Contact_cards"
import Contact_form from "../Builder/Contact_form"
import Intro from "../Builder/Intro"
import Location from "../Builder/Location"

const Contact = () => {
  return (
    <div>
        <Intro info={"Contact Us"} secondary={"Home || Contact Us"}/>
        <Contact_cards/>
        <Location/>
        <Contact_form/>
    </div>
  )
}

export default Contact