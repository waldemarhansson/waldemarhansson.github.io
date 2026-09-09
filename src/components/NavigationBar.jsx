import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import hamburgermenu from "../assets/main-menu.png";
import logo from "../assets/gralogga.svg";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="navigation_bar">
      <Link to="/#section0" aria-label="Home" onClick={() => setOpen(false)}>
        <img className="W" src={logo} alt="Visual Storytelling" />
      </Link>
      <button ref={buttonRef} className="menu-toggle" type="button"
        aria-expanded={open} aria-controls="site-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}>
        {open ? <span aria-hidden="true">×</span> : <img src={hamburgermenu} alt="" />}
      </button>
      {open && <Overlay setOpen={setOpen} />}
    </div>
  );
}
