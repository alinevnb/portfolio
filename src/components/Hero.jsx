import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, ArrowRight, Award, MapPin, CheckCircle, Cookie } from 'lucide-react';
import Reveal from './Reveal';
import confetti from 'canvas-confetti';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C87D38', '#D86843', '#D99849', '#F4D39E']
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-autumn-200/40 via-caramel-light/30 to-terracotta-light/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-5 w-72 h-72 bg-autumn-300/20 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Texto e Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag de destaque */}
            <Reveal direction="up" delay={50} duration={600}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-autumn-100/90 border border-autumn-300/60 text-autumn-800 text-xs sm:text-sm font-medium mb-6 shadow-2xs hover:bg-autumn-200/80 transition-colors">
                <span className="w-2 h-2 rounded-full bg-autumn-600 animate-ping" />
                <span>Estudante IFAC • Confeiteira Artesanal</span>
              </div>
            </Reveal>

            {/* Título Principal */}
            <Reveal direction="up" delay={120} duration={650}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-autumn-950 tracking-tight leading-[1.15] mb-6">
                Prazer, eu sou a{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-autumn-700 via-terracotta to-caramel-dark">
                  Aline Vitória
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#C87D38" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
            </Reveal>

            {/* Descrição */}
            <Reveal direction="up" delay={200} duration={650}>
              <p className="text-lg sm:text-xl text-autumn-800/90 leading-relaxed max-w-2xl mb-8 font-normal">
                Aos 17 anos, transformo dedicação em prática. Aluna do 3º ano de{' '}
                <strong className="text-autumn-900 font-semibold">Informática para Internet</strong> no Instituto Federal do Acre e criadora dos{' '}
                <span className="underline decoration-autumn-400 underline-offset-4 decoration-2">Alfajores da Aline</span>, unindo organização, domínio em produtividade e paixão pelo microempreendedorismo.
              </p>
            </Reveal>

            {/* Botões de Ação */}
            <Reveal direction="up" delay={280} duration={650}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#alfajores"
                  onClick={triggerConfetti}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-autumn-700 via-autumn-600 to-terracotta text-white font-semibold text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Cookie className="w-5 h-5 text-amber-200" />
                  <span>Conhecer os Alfajores</span>
                </a>

                <a
                  href="#conhecimentos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-autumn-900 font-semibold text-base border border-autumn-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Award className="w-5 h-5 text-autumn-600" />
                  <span>O Que Eu Domino</span>
                </a>
              </div>
            </Reveal>

            {/* Estatísticas Rápidas */}
            <div className="pt-6 border-t border-autumn-200/80 w-full grid grid-cols-3 gap-3 sm:gap-6 text-left">
              {[
                { title: '3º Ano', sub: 'IFAC Campus' },
                { title: '78h+', sub: 'Estudo Concluído' },
                { title: '100%', sub: 'Artesanal & Caseiro' },
              ].map((item, idx) => (
                <Reveal key={idx} direction="scale" delay={340 + idx * 80}>
                  <div className="p-3 rounded-2xl bg-white/50 border border-autumn-200/60 shadow-2xs hover:shadow-xs transition-all duration-300">
                    <div className="text-2xl sm:text-3xl font-bold font-serif text-autumn-900">{item.title}</div>
                    <div className="text-xs sm:text-sm text-autumn-700">{item.sub}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Foto de Perfil */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <Reveal direction="scale" delay={200} duration={800}>
              <div className="relative">
                
                {/* Brilho e aura outonal */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-autumn-500/20 via-terracotta/30 to-caramel/20 rounded-[2.5rem] blur-xl transform rotate-3" />
                
                {/* Moldura da Foto */}
                <div className="relative z-10 w-72 h-88 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-autumn-100 group">
                  <img
                    src="/images/aline-perfil.jpg"
                    alt="Aline Vitória Nunes Barros"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-autumn-950/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif font-bold text-lg leading-snug">Aline Vitória</p>
                    <p className="text-xs text-amber-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Rio Branco, Acre
                    </p>
                  </div>
                </div>

                {/* Card Flutuante 1: Confeitaria */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-autumn-200 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-autumn-600 flex items-center justify-center text-white text-lg shadow-sm">
                    🧁
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-autumn-950">Alfajor no Campus</div>
                    <div className="text-[11px] text-autumn-700">Produção Própria</div>
                  </div>
                </div>

                {/* Card Flutuante 2: Excel Avançado */}
                <div className="absolute -top-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-autumn-200 flex items-center gap-2 animate-float-delayed">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                    XL
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-autumn-900">Excel Avançado</div>
                    <div className="text-[10px] text-emerald-700 font-medium">Domínio Prático</div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
