import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import CorporateRental from './components/DropDownPages/CorporateRental.jsx'
import EmployeeTransportation from './components/DropDownPages/EmployeeTransportation.jsx'
import EventTransportation from './components/DropDownPages/EventTransportation.jsx'
import WeddingCarRent from './components/DropDownPages/WeddingCarRent.jsx'
import Dzire from './components/DropDownPages/Dzire.jsx'
import HondaCity from './components/DropDownPages/HondaCity.jsx'
import Ertiga from './components/DropDownPages/Ertiga.jsx'
import Innova from './components/DropDownPages/Innova.jsx'
import Eclass from './components/DropDownPages/Eclass.jsx'
import BmwSerier from './components/DropDownPages/BmwSerier.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Cities from './components/Cities/Cities.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/corporateRental",
        element:<CorporateRental/>
      },
      {
        path:"/employeeTransportation",
        element:<EmployeeTransportation/>
      },
      {
        path:"/eventTransportation",
        element:<EventTransportation/>
      },
      {
        path:"/weddingCarRent",
        element:<WeddingCarRent/>
      },
      {
        path:"/Dzire",
        element:<Dzire/>
      },
      {
        path:"/hondaCity",
        element:<HondaCity/>
      },
      {
        path:"/ertiga",
        element:<Ertiga/>
      },
      {
        path:"/innova",
        element:<Innova/>
      },
      {
        path:"/eclass",
        element:<Eclass/>
      },
      {
        path:"/bmwserise",
        element:<BmwSerier/>
      },
      {
        path:"gallery",
        element:<Gallery/>
      },
      {
        path:"cities",
        element:<Cities/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
