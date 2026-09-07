import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { BookOpen, Sparkles, Heart, Target, Award, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  const points = [
    {
      title: "Dedicação & Aprendizado Contínuo",
      desc: "Mesmo em fases iniciais no universo de programação, busco sempre ir além, superando desafios práticos com autonomia e foco.",
      icon: Sparkles
    },
    {
      title: "Espírito Empreendedor",
      desc: "Iniciei a produção de alfajores artesanais com planejamento, controle de custos e compromisso com os clientes no IFAC.",
      icon: Heart
    },
    {
      title: "Domínio de Produtividade",
      desc: "Certificada em nível Avançado em Excel e PowerPoint, utilizando planilhas para organizar despesas, insumos e relatórios.",
      icon: Award
    },
    {
      title: "Versatilidade & Resolução Prática",
      desc: "Facilidade para aprender ferramentas novas, trabalhar em equipe e transformar ideias em resultados concretos.",
      icon: Target
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-transparent via-[#F7F0E6]/50 to-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-autumn-100 text-autumn-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-autumn-600" />
              Trajetória & Essência
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-autumn-950 mb-4">
              Sobre Mim & Meus Objetivos
            </h2>
            <p className="text-autumn-800/80 text-base sm:text-lg leading-relaxed">
              Conheça um pouco da minha história, meus estudos no Instituto Federal do Acre e como a vontade de fazer acontecer guia meu dia a dia.
            </p>
          </Reveal>
        </div>

        {/* Grade de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Texto Narrativo */}
          <div className="lg:col-span-6 space-y-5 text-autumn-900 leading-relaxed text-base">
            <Reveal direction="up" delay={50} duration={700}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 border border-autumn-200/70 shadow-sm space-y-4">
                <h3 className="font-serif text-2xl font-bold text-autumn-900 flex items-center gap-2">
                  <span>Construindo oportunidades com esforço e carinho</span>
                </h3>
                
                <p className="text-autumn-800/90">
                  Atualmente curso o <strong className="text-autumn-950">3º ano do Técnico em Informática para Internet</strong> no renomado <strong className="text-autumn-950">IFAC</strong>. Esse período tem sido fundamental para expandir minha visão de mundo, tecnologia e organização.
                </p>

                <p className="text-autumn-800/90">
                  Embora minhas habilidades com desenvolvimento web complexo estejam no início, compenso com uma enorme vontade de aprender, disciplina e habilidade prática para me adaptar a qualquer rotina ou tarefa.
                </p>

                <p className="text-autumn-800/90">
                  Paralelamente aos estudos, exerço o papel de microempreendedora dentro do campus, onde desenvolvi uma clientela fiel através da venda de alfajores caseiros. Essa vivência me ensinou sobre controle financeiro, prazos, estoque e, acima de tudo, o valor de um bom relacionamento com as pessoas.
                </p>

                {/* Tags Rápidas */}
                <div className="pt-4 flex flex-wrap gap-2 border-t border-autumn-200/60">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-autumn-100 text-autumn-800">
                    📍 Rio Branco - AC
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-autumn-100 text-autumn-800">
                    🎓 3º Ano IFAC
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-autumn-100 text-autumn-800">
                    📊 Excel Avançado
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-autumn-100 text-autumn-800">
                    🍪 Empreendedora Jovem
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Cards de Valores e Pontos Fortes */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <Reveal key={idx} direction="scale" delay={100 + idx * 80}>
                  <div className="autumn-card p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group h-full">
                    <div className="w-10 h-10 rounded-xl bg-autumn-100 text-autumn-700 flex items-center justify-center mb-3 group-hover:bg-autumn-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-autumn-900 text-base mb-1.5 font-serif">
                      {pt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-autumn-700/90 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
