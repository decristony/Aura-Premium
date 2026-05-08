"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-softBlack text-white">
      <div className="container-custom">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Social & Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-white/5 p-12 md:p-16"
          >
            <h2 className="text-4xl font-playfair mb-8">
              Vamos <span className="italic text-gold">conversar?</span>
            </h2>
            <p className="text-white/50 font-light mb-12">
              Estamos prontos para tirar suas dúvidas e agendar sua primeira avaliação personalizada.
            </p>
            
            <div className="space-y-8 mb-16">
              <div className="flex gap-4">
                <Instagram className="text-gold w-6 h-6" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Instagram</h4>
                  <p className="text-sm font-light">@lioraaura</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Facebook className="text-gold w-6 h-6" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Facebook</h4>
                  <p className="text-sm font-light">Liora Aura Clínica</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8 border-t border-white/10">
              <motion.a 
                whileHover={{ y: -5, color: "#C6A27A" }}
                href="#" 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#C6A27A" }}
                href="#" 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 p-12 md:p-16 bg-white"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-softBlack/40">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-nude-dark py-3 focus:border-gold outline-none transition-colors font-light text-softBlack" 
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-softBlack/40">WhatsApp</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-nude-dark py-3 focus:border-gold outline-none transition-colors font-light text-softBlack" 
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-softBlack/40">Procedimento de Interesse</label>
                <select className="w-full border-b border-nude-dark py-3 focus:border-gold outline-none transition-colors font-light bg-transparent text-softBlack cursor-pointer">
                  <option>Selecione um tratamento</option>
                  <option>Harmonização Facial</option>
                  <option>Botox</option>
                  <option>Preenchimento Labial</option>
                  <option>Bioestimuladores</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-softBlack/40">Mensagem</label>
                <textarea 
                  rows={4} 
                  className="w-full border-b border-nude-dark py-3 focus:border-gold outline-none transition-colors font-light resize-none text-softBlack bg-transparent" 
                  placeholder="Como podemos te ajudar?"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="bg-gold text-white px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold-dark transition-all shadow-lg flex items-center gap-3"
              >
                Enviar Mensagem
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
