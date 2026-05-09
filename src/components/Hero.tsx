"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#F2EBE3]">
      {/* Right Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D1A082]/10 -skew-x-6 transform origin-top-right hidden lg:block"></div>

      <div className="container-custom pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-[8rem] font-playfair font-black leading-[0.85] text-softBlack mb-8">
              CUIDADO<br />
              <span className="text-gold italic">REFINADO</span>
            </h1>
            <p className="text-softBlack/60 text-lg font-light leading-relaxed mb-10 max-w-md">
              Descubra a harmonia perfeita entre ciência e bem-estar. Protocolos exclusivos desenhados para realçar sua beleza natural com máxima sofisticação.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-softBlack text-white px-10 py-5 rounded-md text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all shadow-xl"
              >
                Explorar Procedimentos
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="border border-softBlack text-softBlack px-10 py-5 rounded-md text-[10px] uppercase tracking-widest font-bold hover:bg-softBlack hover:text-white transition-all"
              >
                Contato
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-[#F2EBE3] overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?u=1" alt="User" fill className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[#F2EBE3] overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?u=2" alt="User" fill className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[#F2EBE3] overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?u=3" alt="User" fill className="object-cover" />
                </div>
              </div>
              <div>
                <div className="flex gap-1 text-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold" />
                  ))}
                </div>
                <p className="text-[10px] text-softBlack/40 font-bold uppercase tracking-widest">Mais de 10.000 pacientes felizes</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/assets/hero_refined_aura.png" 
                alt="Hero Image" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative Blurs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-64 h-64 bg-softBlack/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
