import { useState } from "react";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png"
import { Link } from "react-scroll";
import ny from "../assets/gralogga.svg"
import { useLocation, useNavigate } from "react-router-dom";



const NavigtionBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const logoTap = () => {
    navigate("/#section0")
  }

  const menuTap = () => {
    setOpen(!open);
  };

  return (
    <div className="navigation_bar">
      <Link activeClass="active"
        to="section0"
        spy={true}
        smooth={true}
        duration={500}
        href="#"
        onClick={logoTap}

      ><img className="W" src={ny} ></img></Link>
      <img onClick={menuTap} src={hamburgermenu}></img>

      {open ? (<Overlay setOpen={setOpen} />) : (<div></div>)}
    </div>
  );
};


export default NavigtionBar