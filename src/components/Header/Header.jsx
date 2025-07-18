import { useState } from "react";
import LOGO from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/sponsors", label: "Sponsors" },
    { to: "/registration", label: "Registration" },
    { to: "/venue", label: "Venue" },
    { to: "/transportation", label: "Transportation" },
    { to: "/committees", label: "Committees" },
    { to: "/program", label: "Program" },
    // { to: "/accommodation", label: "Accommodation" },
    // { to: "/tourism", label: "Tourism" },
  ];

  return (
    <header className="flex items-center justify-between z-10 p-5 bg-white">
      <div>
        <Link to="/">
          <img src={LOGO} width={100} height={100} alt="logo icon" />
        </Link>
      </div>

      <motion.nav
        className={`
          text-sm font-bold
          fixed top-0 right-0 w-full h-screen bg-white p-4
          md:relative md:h-auto md:w-auto md:bg-transparent md:p-0
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0 shadow-lg" : "translate-x-full"}
          md:translate-x-0 md:shadow-none
          z-10 md:z-auto
        `}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
      >
        <motion.ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-16 md:mt-0">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={handleLinkClick}>
              <li>{label}</li>
            </Link>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Mobile menu button - hidden on md and larger screens */}
      <motion.button
        className={`md:hidden text-4xl z-30 ${
          isMenuOpen ? "text-neutral-800" : "text-neutral-800"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </motion.button>
    </header>
  );
};

export default Header;
