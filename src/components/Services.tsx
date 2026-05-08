"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Botox",
    description: "Suavização de linhas de expressão com naturalidade e precisão.",
    icon: Sparkles,
  },
  {
    title: "Harmonização Facial",
    description: "Equilíbrio e realce dos traços faciais respeitando sua essência.",
    icon: UserCheck,
  },
  {
    title: "Limpeza de Pele",
    description: "Tratamento profundo para uma pele radiante, saudável e renovada.",
    icon: Zap,
  },
  {
    title: "Preenchimento Labial",
    description: "Volume e contorno definidos com acabamento suave e elegante.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-nude-light/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Nossos Procedimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair text-softBlack"
          >
            Tratamentos <span className="italic">Exclusivos</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl premium-shadow premium-shadow-hover group"
            >
              <div className="w-16 h-16 bg-nude-light rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <service.icon size={32} className="text-gold group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-playfair text-softBlack mb-4">{service.title}</h3>
              <p className="text-softBlack/60 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="text-xs uppercase tracking-widest font-bold text-gold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Saiba Mais <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
