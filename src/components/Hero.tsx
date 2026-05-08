"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_bg.png"
          alt="Clínica Liora Aura"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container-custom relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-white/80 uppercase tracking-[0.5em] text-xs mb-6 font-semibold">
            Beleza Natural & Ciência Moderna
          </span>
          <h1 className="text-6xl md:text-8xl font-playfair text-white mb-8 leading-[1.1]">
            Realce sua beleza com <span className="italic">naturalidade.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Tratamentos modernos, atendimento personalizado e resultados que valorizam quem você é de verdade.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#A6865E" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gold text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-3 premium-shadow transition-all duration-300"
            >
              Agendar Avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-3 transition-all duration-300"
            >
              Falar no WhatsApp
              <MessageCircle size={18} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-widest text-softBlack/40 font-bold group-hover:text-gold transition-colors">Descobrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent group-hover:h-16 transition-all duration-500" />
      </motion.a>
    </section>
  );
}
