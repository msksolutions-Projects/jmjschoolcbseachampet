import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import logo from "/school-logo.webp";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary-dark text-white mt-auto relative">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-15">

        {/* School Info */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-full bg-white p-1">
              <img
                src={logo}
                alt="JMJ School Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold uppercase leading-tight">
              JMJ School <br /> CBSE
            </h3>
          </div>

          <p className="text-sm text-white/80 leading-relaxed">
            JMJ School CBSE is committed to academic excellence, character
            building, and holistic development in a safe and nurturing
            environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/academics", "Academics"],
              ["/admissions", "Admissions"],
              ["/clubs", "Club Activities"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([path, label]) => (
              <li key={path}>
                <NavLink to={path}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3 leading-relaxed">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
              <span>
                H.No. 15-75, Karunapuram<br />
                Peddapendiala, Dharmasagar<br />
                Hanumakonda, Telangana – 506151
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+917981653340">
                +91 79816 53340
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:jmjcbseschool@gmail.com">
                jmjcbseschool@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=61588074985905"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://www.instagram.com/jmjschoolcbse/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-xs sm:text-sm text-white/70">
          © {new Date().getFullYear()} JMJ School CBSE. All Rights Reserved.
        </div>
      </div>

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-primary text-white w-11 h-11 rounded-full shadow-lg z-50"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </footer>
  );
}