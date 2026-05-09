"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Flower } from "lucide-react";
import { cn } from "@/lib/utils";

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

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-[#F2EBE3]/90 backdrop-blur-md border-b border-softBlack/5 py-3 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold text-softBlack/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <Flower className="text-gold" size={24} />
          <span className="text-2xl font-playfair font-bold tracking-widest text-softBlack uppercase">
            Liora <span className="italic text-gold">Aura</span>
          </span>
        </motion.div>

        {/* Right Actions (Desktop) */}
        <div className="flex items-center space-x-6">
          <button className="w-10 h-10 rounded-full bg-softBlack/5 flex items-center justify-center hover:bg-gold/10 transition-colors">
            <ShoppingCart className="w-4 h-4 text-softBlack" />
          </button>
          <a
            href="#contact"
            className="hidden md:block bg-softBlack text-white px-8 py-3 rounded-md text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all"
          >
            Agendar Agora
          </a>
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-softBlack p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#F2EBE3] border-t border-softBlack/5 p-8 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-playfair text-softBlack/80 hover:text-gold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-softBlack text-white text-center py-4 rounded-md text-xs uppercase tracking-widest font-bold"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
