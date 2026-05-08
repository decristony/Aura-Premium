import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden premium-shadow">
              <Image
                src="/assets/about_image.png"
                alt="Sobre a Liora Aura"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-nude rounded-full -z-10 opacity-50" />
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 border border-gold rounded-full -z-10 animate-float" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-softBlack mb-8 leading-tight">
              Beleza, cuidado e <br /><span className="italic text-gold">autoestima.</span>
            </h2>
            <div className="space-y-6 text-softBlack/70 text-lg leading-relaxed font-light">
              <p>
                Na Liora Aura, acreditamos que a verdadeira beleza reside na harmonia e na naturalidade. Nossa missão é oferecer tratamentos de alto padrão que respeitem a singularidade de cada rosto.
              </p>
              <p>
                Com uma equipe de profissionais altamente especializados e tecnologia de ponta, criamos uma experiência de cuidado completa, em um ambiente projetado para o seu conforto e bem-estar.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <Counter target={5000} />
                <p className="text-sm text-softBlack/50 uppercase tracking-widest mt-1">Pacientes Felizes</p>
              </div>
              <div>
                <Counter target={10} />
                <p className="text-sm text-softBlack/50 uppercase tracking-widest mt-1">Anos de Excelência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const { scrollYProgress } = useScroll(); // Use this or similar to trigger when in view

  return (
    <motion.h4 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }}
      className="text-3xl font-playfair text-softBlack"
    >
      {count}+
    </motion.h4>
  );
}
