"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Cpu, Star, Phone, MapPin } from "lucide-react";

const benefits = [
  {
    title: "Atendimento Personalizado",
    description: "Cada paciente é único. Criamos protocolos exclusivos para suas necessidades.",
    icon: Star,
  },
  {
    title: "Profissionais Especializados",
    description: "Equipe médica e estética com vasta experiência em resultados naturais.",
    icon: Users,
  },
  {
    title: "Equipamentos Modernos",
    description: "Tecnologia de última geração para garantir segurança e precisão.",
    icon: Cpu,
  },
  {
    title: "Procedimentos Seguros",
    description: "Protocolos rigorosos que garantem a sua saúde e o melhor resultado.",
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white text-softBlack overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Diferenciais Liora Aura
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">
              Por que escolher nossa <span className="italic text-gold">clínica?</span>
            </h2>
            <p className="text-softBlack/60 text-lg font-light leading-relaxed max-w-xl mb-12">
              Unimos a sofisticação de um ambiente premium com o rigor científico dos melhores tratamentos do mercado mundial.
            </p>
            
            <div className="space-y-6 pt-8 border-t border-softBlack/5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-light text-softBlack/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-light text-softBlack/80">Av. das Esmeraldas, 1000 - São Paulo</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-nude rounded-3xl hover:border-gold transition-colors group"
              >
                <benefit.icon size={32} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-playfair mb-3">{benefit.title}</h3>
                <p className="text-softBlack/40 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
