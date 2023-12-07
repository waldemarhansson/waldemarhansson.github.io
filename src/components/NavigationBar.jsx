import { useState } from "react";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png"
import { Link } from "react-router-dom";
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
      <Link
        to="/#section0"

        onClick={logoTap}

      ><img className="W" src={ny} ></img></Link>
      <img onClick={menuTap} src={hamburgermenu}></img>

      {open ? (<Overlay setOpen={setOpen} />) : (<div></div>)}
    </div>
  );
};


export default NavigtionBar