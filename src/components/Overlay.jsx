
import { Link, animateScroll as scroll } from "react-scroll";


const Overlay = (props) =>{

    const handleClick = () => {
        props.setOpen(false)
        console.log("close the damn overlay");
      };
    
const handleAboutMe = () =>{
console.log("scroll me to info about me");
props.setOpen(false);

}

const handleProjects = () =>{
    console.log("scroll me to projects");
    props.setOpen(false);



}


    return(
        <div onClick={handleClick} className="overlay">

        <ul>
            <li onClick={handleAboutMe}><Link activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={500}>About me</Link></li>

           
            
            <li onClick={handleProjects}><Link   activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={500}>Projects</Link></li>
            
        </ul>



        </div>
    )
}
export default Overlay;