import { motion } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Retreats", href: "#destinations" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Journeys", href: "#" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#121212]/80 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Compass className="text-[#C5A059] w-8 h-8" />
          <span className="text-2xl font-serif tracking-[0.2em] text-[#C5A059]">VEDA VOYAGE</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm tracking-[0.3em] uppercase hover:text-[#C5A059] transition-colors text-white/80"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-[#C5A059] text-[#C5A059] text-xs tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300"
          >
            Inquire
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#C5A059]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-y-0 right-0 w-64 bg-[#121212] z-40 md:hidden flex flex-col items-center justify-center gap-8 shadow-2xl"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif tracking-[0.2em] text-[#C5A059]"
          >
            {link.name}
          </a>
        ))}
        <button className="mt-4 px-8 py-3 border border-[#C5A059] text-[#C5A059] tracking-[0.2em] uppercase text-xs">
          Inquire Now
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;