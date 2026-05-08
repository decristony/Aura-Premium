"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Diferenciais", href: "#benefits" },
  { name: "Resultados", href: "#gallery" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg py-3 shadow-sm text-softBlack" 
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-playfair font-semibold tracking-tighter"
        >
          LIORA <span className="text-gold">AURA</span>
        </motion.div>

        {/* Desktop Links */}
        <div className={cn(
          "hidden md:flex items-center space-x-10 transition-colors duration-500",
          isScrolled ? "text-softBlack/70" : "text-white/80"
        )}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gold text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold premium-shadow hover:bg-gold-dark transition-all"
          >
            Agendar Consulta
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-softBlack p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden absolute top-full left-0 w-full border-t border-nude"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-playfair text-softBlack/80 hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gold text-white w-full py-4 rounded-xl text-sm uppercase tracking-widest font-semibold">
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
