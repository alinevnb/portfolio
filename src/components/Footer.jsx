import React from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-autumn-950 text-autumn-100/90 pt-16 pb-12 relative overflow-hidden border-t border-autumn-900">
      
      {/* Linha de Destaque Superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-autumn-500 via-amber-400 to-terracotta" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-autumn-900/60">
            
            {/* Marca / Identidade */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🍂</span>
                <span className="font-serif font-bold text-2xl text-white tracking-tight">
                  Aline Vitória Nunes Barros
                </span>
              </div>
              <p className="text-xs text-autumn-300 max-w-md">
                Estudante de Informática para Internet no IFAC • Microempreendedora com paixão por confeitaria artesanal e inovação prática.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-autumn-200">
              <a href="#sobre" className="hover:text-amber-300 transition-colors">Sobre Mim</a>
              <a href="#alfajores" className="hover:text-amber-300 transition-colors">Alfajores Artesanais</a>
              <a href="#conhecimentos" className="hover:text-amber-300 transition-colors">O Que Eu Domino</a>
              <a href="#habilidades" className="hover:text-amber-300 transition-colors">Habilidades</a>
              <a href="#contato" className="hover:text-amber-300 transition-colors">Contato</a>
            </div>

            {/* Botão de Retorno ao Topo */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-autumn-900 hover:bg-autumn-800 text-autumn-200 hover:text-white transition-all border border-autumn-800 shadow-sm hover:scale-105 active:scale-95"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Direitos & Mensagem */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-autumn-400 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Aline Vitória Nunes Barros. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5 text-autumn-300">
              <span>Desenvolvido com carinho e tema outonal</span>
              <span className="text-amber-400">🍂</span>
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
