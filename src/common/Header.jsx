import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import logo from "/school-logo.webp";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const linkClass = ({ isActive }) =>
    `block px-5 py-3 font-medium transition-all duration-200
     ${
       isActive
         ? "text-primary underline underline-offset-4 decoration-2"
         : "text-text-dark hover:text-primary"
     }`;

  return (
    <header
  className={`sticky top-0 z-50 transition-all duration-300
    ${scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white"}
  `}
>
      {/* ================= TOP BAR ================= */}
<div className="bg-primary-dark text-white text-xs sm:text-sm">
  <div className="max-w-7xl mx-auto px-4 h-12 flex justify-between items-center">
    <div className="flex gap-6">
      <a href="tel:+917981653340" className="flex items-center gap-2 hover:text-accent">
        <FontAwesomeIcon icon={faPhone} />
        +91 79816 53340
      </a>
      <a href="mailto:jmjcbseschool@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-accent">
        <FontAwesomeIcon icon={faEnvelope} />
        jmjcbseschool@gmail.com
      </a>
    </div>

    {/* Updated Social Links */}
    <div className="flex gap-4 text-sm">
      <a 
        href="https://www.facebook.com/profile.php?id=61588074985905" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition hover:text-accent"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a 
        href="https://www.instagram.com/jmjschoolcbse/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition hover:text-accent"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

    </div>
  </div>
</div>
      {/* ================= MAIN BAR ================= */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="JMJ Logo" className="w-14 h-14" />
            <div>
              <h1 className="text-xl font-bold uppercase tracking-wide">
                JMJ School CBSE
              </h1>
              <p className="text-xs text-text-muted">
                Love • Joy • Service
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/academics" className={linkClass}>Academics</NavLink>
            <NavLink to="/admissions" className={linkClass}>Admissions</NavLink>
            <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* ================= FULL HEIGHT MOBILE MENU ================= */}
{open && (
  <div className="md:hidden fixed inset-0 bg-white z-[9999] flex flex-col h-screen w-screen">

    {/* Mobile Menu Header - Keeps branding and close button on top */}
    <div className="flex items-center justify-between px-4 py-4 border-b flex-shrink-0 bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="JMJ Logo" className="w-10 h-10" />
        <div>
          <h2 className="text-base font-bold uppercase">
            JMJ School CBSE
          </h2>
          <p className="text-xs text-text-muted">
            Love • Joy • Service
          </p>
        </div>
      </div>

      <button
        onClick={() => setOpen(false)}
        className="text-2xl text-primary p-2"
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>

    {/* Scrollable Menu Content */}
    {/* Added 'flex-grow' and 'bg-white' to ensure it fills the space */}
    <div className="flex-1 overflow-y-auto flex flex-col items-center gap-6 py-10 text-lg font-medium bg-white">
      <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/academics">Academics</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/admissions">Admissions</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/facilities">Facilities</NavLink>
      <NavLink onClick={() => setOpen(false)} to="/gallery">Gallery</NavLink>

      <NavLink
        onClick={() => setOpen(false)}
        to="/contact"
        className="mt-6 bg-primary text-white px-10 py-3 rounded-xl shadow active:scale-95 transition-transform"
      >
        Contact
      </NavLink>
    </div>
  </div>
)}


    </header>
  );
}