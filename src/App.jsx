import { Outlet } from "react-router-dom";
import Navbar from "./components/Builder/Navbar";
import Footer from "./components/Builder/Footer";
import Logo from "./components/Builder/Logo"

const App = () => {
  return (
    <div className="bg-white z-10">
      <Logo/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
