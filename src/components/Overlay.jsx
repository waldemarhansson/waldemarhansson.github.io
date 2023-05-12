
import { Link, animateScroll as scroll } from "react-scroll";


const Overlay = (props) =>{

    const handleClick = () => {
        props.setOpen(false)
        console.log("close the damn overlay");
      };
    



    return(
        <div onClick={handleClick} className="overlay">

        <ul>
            <li ><Link
            activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >
            Stills</Link> </li>

           
            
            

               <li ><Link   activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >Work</Link></li>
                <li ><Link   activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >contact</Link></li>

<li ><Link   activeClass="active"
              to="clients"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >client</Link></li>
            
        </ul>



        </div>
    )
}
export default Overlay;