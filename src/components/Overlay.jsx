
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";

const Overlay = (props) => {

  const handleClick = () => {
    props.setOpen(false)

  };

  return (
    <div onClick={handleClick} className="overlay">

      <ul>
        <li> <Link to="/#section0">Home</Link></li>
        <li> <Link to="/film">Film</Link></li>
        <li><Link to="/stills">Stills</Link></li>
        <li><Link to="/#aboutme">About</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
        <li><Link to="/#clients">Clients</Link></li>

      </ul>



    </div>
  )
}
export default Overlay;


