
import { Link, animateScroll as scroll } from "react-scroll";


const Overlay = (props) =>{

    const handleClick = () => {
        props.setOpen(false)
       
      };
    
      const getOffset = () => {
      
        if (window.innerWidth <= 768) {
          return -240; // Offset for mobile view
        } else {
          return -20; // Default offset for other screen sizes
        }
      };


    return(
        <div onClick={handleClick} className="overlay">

        <ul>
            <li ><Link
            activeClass="active"
              to="section0"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >
            Home</Link> </li>

           
            
            

               <li ><Link   activeClass="active"
              to="section1"
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
              offset={getOffset()}
              onClick={() => {
                props.setOpen(false);
              }}
              >About</Link></li>
                <li ><Link   activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
             
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >Contact</Link></li>

<li ><Link   activeClass="active"
              to="clients"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                props.setOpen(false);
              }}
              >Clients</Link></li>
            
        </ul>



        </div>
    )
}
export default Overlay;