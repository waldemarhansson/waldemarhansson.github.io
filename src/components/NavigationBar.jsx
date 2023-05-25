import { useState } from "react";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png"
import { Link } from "react-scroll";
import w from "../assets/letter-w_ionvert.png"






const NavigtionBar = () =>{
    const [open, setOpen] = useState(false);


const menuTap= () =>{
setOpen(!open);

}




return (
    <div className="navigation_bar">
      <Link   activeClass="active"
              to="section0"
              spy={true}
              smooth={true}
              duration={500}
              href="#"
            
              ><img className="W" src={w} ></img></Link>
      <img onClick={menuTap} src={hamburgermenu}></img>
      
     {open? (<Overlay setOpen={setOpen} />):(<div></div>)}
    </div>
  );
};


export default NavigtionBar