import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

export default function AdmissionScroll() {
  const message =
    "Admissions Open 2026 – Enroll Now | Limited Seats Available | Contact Us Today";

  return (
    <div className="w-full bg-gradient-to-r from-primary  to-primary text-white py-3 overflow-hidden relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/5 blur-xl opacity-30" />

      {/* Scrolling content */}
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap font-semibold text-base px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <FontAwesomeIcon icon={faBullhorn} className="text-yellow-300 text-sm" />
            <span className="tracking-wide">{message}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom highlight line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  );
}
