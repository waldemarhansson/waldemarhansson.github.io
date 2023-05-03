import { useState } from "react";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png"






const NavigtionBar = () =>{
    const [open, setOpen] = useState(false);


const menuTap= () =>{
setOpen(!open);
console.log("tapped the button")
}




return (
    <div className="navigation_bar">
      <img onClick={menuTap} src={hamburgermenu}></img>
      
     {open? (<Overlay setOpen={setOpen} />):(<div></div>)}
    </div>
  );
};


export default NavigtionBar