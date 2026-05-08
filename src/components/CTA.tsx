"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-nude-light rounded-[3rem] p-12 md:p-24 overflow-hidden text-center"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
              Comece sua Jornada
            </span>
            <h2 className="text-5xl md:text-7xl font-playfair text-softBlack mb-8">
              Agende sua <span className="italic text-gold">avaliação.</span>
            </h2>
            <p className="text-lg md:text-xl text-softBlack/60 font-light mb-12 leading-relaxed">
              Descubra o tratamento ideal para valorizar sua beleza natural com o acompanhamento dos nossos especialistas.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gold text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold flex items-center gap-3 premium-shadow"
              >
                <Calendar size={20} />
                Marcar no Site
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-softBlack text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold flex items-center gap-3 hover:bg-black transition-all"
              >
                <MessageCircle size={20} />
                Entrar em Contato
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
