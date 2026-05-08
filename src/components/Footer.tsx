"use client";

import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-softBlack text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-playfair font-semibold tracking-tighter mb-8">
              LIORA <span className="text-gold italic">AURA</span>
            </h3>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              Excelência em procedimentos estéticos avançados, focada em resultados naturais e harmonia facial.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/50 hover:text-gold transition-colors font-light">Sobre a Clínica</a></li>
              <li><a href="#services" className="text-white/50 hover:text-gold transition-colors font-light">Procedimentos</a></li>
              <li><a href="#benefits" className="text-white/50 hover:text-gold transition-colors font-light">Diferenciais</a></li>
              <li><a href="#gallery" className="text-white/50 hover:text-gold transition-colors font-light">Resultados</a></li>
              <li><a href="#testimonials" className="text-white/50 hover:text-gold transition-colors font-light">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-playfair mb-8">Contato & Localização</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-gold shrink-0" />
                  <p className="text-white/50 font-light leading-relaxed">
                    Av. das Esmeraldas, 1000 - Sala 402<br />
                    Bairro Premium, São Paulo - SP
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone size={24} className="text-gold shrink-0" />
                  <p className="text-white/50 font-light leading-relaxed">
                    (11) 99999-9999
                  </p>
                </div>
                <div className="flex gap-4">
                  <Mail size={24} className="text-gold shrink-0" />
                  <p className="text-white/50 font-light leading-relaxed">
                    contato@lioraaura.com.br
                  </p>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h5 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4">Horários</h5>
                <ul className="space-y-2 text-sm text-white/50 font-light">
                  <li className="flex justify-between"><span>Seg - Sex:</span> <span>09:00 - 19:00</span></li>
                  <li className="flex justify-between"><span>Sábado:</span> <span>09:00 - 13:00</span></li>
                  <li className="flex justify-between"><span>Domingo:</span> <span>Fechado</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <p>© 2026 Liora Aura Clínica de Estética. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
