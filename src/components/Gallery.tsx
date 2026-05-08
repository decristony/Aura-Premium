"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const results = [
  {
    id: 1,
    title: "Equilíbrio & Proporção",
    category: "Harmonização Facial",
    description: "Procedimento focado na definição do contorno mandibular e mento.",
    image: "/assets/result_1.png",
  },
  {
    id: 2,
    title: "Volume & Hidratação",
    category: "Preenchimento Labial",
    description: "Técnica exclusiva para lábios definidos e naturais.",
    image: "/assets/result_2.png",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Portfólio de Resultados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair text-softBlack leading-tight"
          >
            A arte da <span className="italic text-gold">transformação</span> sutil.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 bg-nude-light shadow-xl">
                <Image
                  src={result.image}
                  alt={result.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold">{result.category}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-playfair text-softBlack mb-2">{result.title}</h3>
                <p className="text-softBlack/50 text-sm font-light leading-relaxed max-w-md">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
