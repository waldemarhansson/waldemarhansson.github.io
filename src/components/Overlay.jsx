
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useNavigate } from "react-router-dom";



const Overlay = (props) => {


  const navigate = useNavigate();


  const handleClick = (destination) => {
    props.setOpen(false)
    navigate(destination)


  };

  const getOffset = () => {

    if (window.innerWidth <= 768) {
      return -240; // Offset for mobile view
    } else {
      return -20; // Default offset for other screen sizes
    }
  };


  return (
    <div onClick={handleClick} className="overlay">

      <ul>
        <li ><Link
          activeClass="active"
          to="section0"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            handleClick("/#section0")
          }}
        >
          Home</Link> </li>


        <li>
          <Link

            onClick={() => {
              handleClick("/film");
            }}
          >
            Film
          </Link>
        </li>

        <li>
          <Link

            onClick={() => {
              handleClick("/stills");
            }}
          >
            Stills
          </Link>
        </li>


        <li ><Link activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
          offset={getOffset()}
          onClick={() => {
            handleClick("/#aboutme")
          }}
        >About</Link></li>
        <li ><Link activeClass="active"
          to="contact"
          spy={true}
          smooth={true}

          duration={500}
          onClick={() => {
            handleClick("/#contact")
          }}
        >Contact</Link></li>

        <li ><Link activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => {
            handleClick("/#clients")
          }}
        >Clients</Link></li>

      </ul>



    </div>
  )
}
export default Overlay;




