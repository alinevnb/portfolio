import React from 'react';
import { MapPin, Heart, Sparkles, ArrowUpRight, Clock } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Reveal from './Reveal';

export default function ContactSection() {
  const instagramLink = "https://instagram.com/";

  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-autumn-100 border border-autumn-300/60 text-autumn-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-autumn-600" />
              Conecte-se Comigo
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-autumn-950 mb-4">
              Entre em Contato
            </h2>
            <p className="text-autumn-800/85 text-base sm:text-lg leading-relaxed">
              O canal oficial para conversar, tirar dúvidas e encomendar alfajores é diretamente pelo Instagram ou pessoalmente no campus do IFAC!
            </p>
          </Reveal>
        </div>

        {/* Cards de Contato Focados e Elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Principal: Instagram Oficial */}
          <Reveal direction="right" duration={700}>
            <div className="autumn-card p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 border border-pink-200/70 bg-gradient-to-br from-white via-rose-50/30 to-amber-50/40 h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 text-white flex items-center justify-center shadow-md mb-6">
                  <InstagramIcon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Canal Oficial & Encomendas
                </span>
                <h3 className="font-serif font-bold text-2xl text-autumn-950 mt-1 mb-3">
                  Instagram Direct
                </h3>
                <p className="text-sm text-autumn-800/90 leading-relaxed mb-6">
                  Envie uma mensagem direta no Instagram para tirar dúvidas, saber os sabores disponíveis da semana ou encomendar seus alfajores caseiros.
                </p>
              </div>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:opacity-95 shadow-md hover:shadow-lg transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Conversar pelo Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-pink-200" />
              </a>
            </div>
          </Reveal>

          {/* Card Secundário: Localização & Entregas no IFAC */}
          <Reveal direction="left" delay={100} duration={700}>
            <div className="autumn-card p-8 rounded-3xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 h-full">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-autumn-700 text-white flex items-center justify-center shadow-md mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-autumn-700">
                  Presença Presencial
                </span>
                <h3 className="font-serif font-bold text-2xl text-autumn-950 mt-1 mb-3">
                  Campus IFAC
                </h3>
                <p className="text-sm text-autumn-800/90 leading-relaxed mb-4">
                  Instituto Federal do Acre — Rio Branco, AC. Encontros e entregas de encomendas combinadas nos intervalos das aulas do 3º ano de Informática para Internet.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-autumn-800">
                    <Clock className="w-4 h-4 text-autumn-600 shrink-0" />
                    <span>Entregas nos intervalos e no contraturno</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-autumn-800">
                    <Heart className="w-4 h-4 text-autumn-600 shrink-0" />
                    <span>Alfajores frescos preparados sob encomenda</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-autumn-100 flex items-center justify-between text-xs text-autumn-700">
                <span className="font-semibold text-autumn-900">Rio Branco • Acre</span>
                <span className="bg-autumn-100 px-3 py-1 rounded-full text-autumn-800 font-bold">
                  IFAC 3º Ano
                </span>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
