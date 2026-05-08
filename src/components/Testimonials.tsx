"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ana Silveira",
    role: "Paciente de Harmonização",
    comment: "A experiência na Liora Aura foi transformadora. O resultado ficou extremamente natural, exatamente como eu desejava. O atendimento é impecável.",
    image: "https://i.pravatar.cc/150?u=ana",
  },
  {
    name: "Mariana Costa",
    role: "Paciente de Bioestimuladores",
    comment: "Ambiente sofisticado e profissionais que realmente entendem de estética facial. Me senti segura em cada etapa do procedimento. Recomendo muito!",
    image: "https://i.pravatar.cc/150?u=mariana",
  },
  {
    name: "Beatriz Ramos",
    role: "Paciente de Protocolos Faciais",
    comment: "Finalmente encontrei uma clínica que valoriza a naturalidade acima de tudo. Minha pele nunca esteve tão saudável e radiante. Excelência define.",
    image: "https://i.pravatar.cc/150?u=beatriz",
  },
  {
    name: "Juliana Mendes",
    role: "Paciente de Preenchimento Labial",
    comment: "O atendimento é impecável do início ao fim. O preenchimento labial ficou perfeito, sem exageros e com muita harmonia.",
    image: "https://i.pravatar.cc/150?u=juliana",
  },
  {
    name: "Carla Fonseca",
    role: "Paciente de Lipo de Papada",
    comment: "Resultados surpreendentes com uma recuperação muito rápida. Recomendo a todos que buscam excelência e cuidado real.",
    image: "https://i.pravatar.cc/150?u=carla",
  },
  {
    name: "Renata Lima",
    role: "Paciente de Bioestimuladores",
    comment: "Melhor clínica que já frequentei. O cuidado com o pós-procedimento é o grande diferencial da Liora. Nota dez!",
    image: "https://i.pravatar.cc/150?u=renata",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-beige-light overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Experiências Reais
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-playfair text-softBlack"
            >
              O que nossas <span className="italic text-gold">pacientes</span> dizem.
            </motion.h2>
          </div>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-gold text-gold" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index < 3 ? 0.2 : 0.8, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-10 rounded-3xl premium-shadow relative"
            >
              <Quote className="absolute top-8 right-8 text-nude opacity-30" size={48} />
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-nude">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-playfair text-xl text-softBlack">{item.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{item.role}</p>
                </div>
              </div>
              <p className="text-softBlack/70 font-light italic leading-relaxed">
                "{item.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
