import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop link style → underline like reference image
  const linkClass = ({ isActive }) =>
    `relative px-5 py-2 text-sm font-semibold transition-all duration-200
     ${isActive ? "text-white bg-blue-700 rounded-xl shadow" : "text-gray-800 hover:text-blue-700"}`;

  // Mobile link style
  const mobileLinkClass = ({ isActive }) =>
    `block w-full px-5 py-3 text-base font-medium transition rounded-lg
     ${isActive ? "bg-blue-700 text-white" : "text-gray-800 hover:text-blue-700 hover:bg-blue-50"}`;

  const navItems = [
    ["/", "Home"],
    ["/about", "About"],
    ["/academics", "Academics"],
    ["/admissions", "Admissions"],
    ["/facilities", "Facilities"],
    ["/gallery", "Gallery"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="w-full bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* Logo + School Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="School Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-black tracking-wide">
                JMJ SCHOOL CBSE
              </h1>
              <p className="text-sm text-gray-600">Love • Joy • Service</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === "/"} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-blue-700 text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t shadow"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map(([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
