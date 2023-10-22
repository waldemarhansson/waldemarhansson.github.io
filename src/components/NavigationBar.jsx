import { useState } from "react";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png"
import { Link } from "react-scroll";
import ny from "../assets/gralogga.svg"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavigtionBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate()
  const isOnHomePage = location.pathname === "/";

  const menuTap = () => {
    if (location.pathname === "/") {
      setOpen(!open);
    } else {
      // Navigate to the home page "/"
      navigate("/");
    }
  };

  const onLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  return (
    <div className="navigation_bar">
      <Link activeClass="active"
        to="section0"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onLogoClick}
        href="#"

      ><img className="W" src={ny} ></img></Link>
      <img onClick={menuTap} src={hamburgermenu}></img>

      {open && isOnHomePage ? (<Overlay setOpen={setOpen} />) : (<div></div>)}
    </div>
  );
};


export default NavigtionBar