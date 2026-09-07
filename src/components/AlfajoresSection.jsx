import React, { useState } from 'react';
import { alfajorBusiness, testimonials } from '../data/portfolioData';
import { Sparkles, Heart, Check, Star, ShoppingBag, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Reveal from './Reveal';
import confetti from 'canvas-confetti';

export default function AlfajoresSection() {
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(48);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount(prev => prev + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D86843', '#C87D38', '#F4D39E']
      });
    } else {
      setLiked(false);
      setLikesCount(prev => prev - 1);
    }
  };

  const instagramLink = "https://instagram.com/";

  return (
    <section id="alfajores" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F4ECE1] to-[#FAF6F0]">
      
      {/* Círculos decorativos outonais de fundo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-autumn-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-caramel-light/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-autumn-100 border border-autumn-300/60 text-autumn-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-autumn-600" />
              Microempreendedorismo & Sabor
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-autumn-950 mb-4">
              {alfajorBusiness.title}
            </h2>
            <p className="text-autumn-800/85 text-base sm:text-lg leading-relaxed">
              {alfajorBusiness.subtitle} — produzidos artesanalmente com ingredientes de qualidade e embalados com laço dourado.
            </p>
          </Reveal>
        </div>

        {/* Grade de Destaque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Esquerda: Foto do Produto */}
          <div className="lg:col-span-6 relative flex justify-center">
            <Reveal direction="right" duration={800} className="w-full max-w-md">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-autumn-500 to-terracotta rounded-3xl blur-lg opacity-30 transform -rotate-2" />
                
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white group">
                  <img
                    src={alfajorBusiness.image}
                    alt="Alfajores artesanais da Aline embalados com laço dourado"
                    className="w-full h-96 sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-autumn-900 shadow-md flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                    <span>Sucesso no Campus</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-autumn-200">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-autumn-700">Preparo</p>
                    <p className="text-sm font-bold text-autumn-950">100% Caseiro</p>
                  </div>
                </div>

                {/* Botão de Curtida */}
                <button
                  onClick={handleLike}
                  className={`absolute -bottom-5 -left-4 px-4 py-2.5 rounded-2xl shadow-xl border flex items-center gap-2 transition-all duration-300 ${
                    liked
                      ? 'bg-rose-50 border-rose-300 text-rose-600 scale-105'
                      : 'bg-white/95 border-autumn-200 text-autumn-800 hover:scale-105'
                  }`}
                >
                  <Heart className={`w-5 h-5 transition-transform ${liked ? 'fill-rose-500 text-rose-500 scale-125' : 'text-autumn-600'}`} />
                  <span className="text-xs font-bold font-sans">{likesCount} curtiram</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Direita: Descrição e Destaques */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="up" delay={100} duration={650}>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-autumn-900 leading-snug">
                  Da cozinha para o IFAC: doçura que conecta pessoas
                </h3>
                <p className="text-autumn-800/90 text-base leading-relaxed">
                  {alfajorBusiness.description}
                </p>
              </div>
            </Reveal>

            {/* Bullets de Qualidade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {alfajorBusiness.highlights.map((h, idx) => (
                <Reveal key={idx} direction="scale" delay={160 + idx * 70}>
                  <div className="p-4 rounded-xl bg-white/80 border border-autumn-200/80 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-autumn-300 hover:shadow-xs h-full">
                    <div className="flex items-center gap-2 text-autumn-900 font-bold text-sm mb-1">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h.title}</span>
                    </div>
                    <p className="text-xs text-autumn-700/90 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Seletor de Sabores */}
            <Reveal direction="up" delay={260} duration={650}>
              <div className="pt-2">
                <p className="text-xs font-bold text-autumn-900 uppercase tracking-wider mb-2.5">
                  Escolha seu sabor favorito:
                </p>
                <div className="flex flex-wrap gap-2">
                  {alfajorBusiness.flavors.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFlavor(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                        selectedFlavor === idx
                          ? 'bg-autumn-700 text-white shadow-sm scale-102'
                          : 'bg-white/90 text-autumn-800 border border-autumn-200 hover:bg-autumn-100'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        selectedFlavor === idx ? 'bg-amber-400 text-amber-950 font-bold' : 'bg-autumn-100 text-autumn-700'
                      }`}>
                        {item.tag}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-autumn-800/80 mt-2 italic bg-autumn-50/80 p-2.5 rounded-lg border border-autumn-200/50">
                  ✨ {alfajorBusiness.flavors[selectedFlavor].desc}
                </p>
              </div>
            </Reveal>

            {/* Ações de Pedido */}
            <Reveal direction="up" delay={320} duration={650}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:opacity-95 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                  <span>Pedir pelo Instagram</span>
                  <ArrowUpRight className="w-4 h-4 text-pink-200" />
                </a>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/90 hover:bg-white text-autumn-900 border border-autumn-300 font-semibold text-sm shadow-2xs hover:shadow-xs transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-autumn-600" />
                  <span>Combinar entrega no campus</span>
                </a>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} direction="scale" delay={idx * 150}>
              <div
                className="p-6 rounded-2xl bg-white/80 border border-autumn-200/70 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col justify-between"
              >
                <div className="text-autumn-400 font-serif text-4xl leading-none absolute top-4 right-5 opacity-40">“</div>
                <p className="text-sm text-autumn-900 italic leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-autumn-200 text-autumn-800 flex items-center justify-center font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-autumn-950">{t.name}</div>
                    <div className="text-[11px] text-autumn-700">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
