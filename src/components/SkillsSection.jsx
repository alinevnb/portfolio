import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Sparkles, CheckCircle, FileSpreadsheet, Store, Cpu, Award } from 'lucide-react';
import Reveal from './Reveal';

const ICON_MAP = {
  FileSpreadsheet: FileSpreadsheet,
  Store: Store,
  Cpu: Cpu
};

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 bg-gradient-to-b from-transparent via-[#F7F0E6]/60 to-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-autumn-100 border border-autumn-300/60 text-autumn-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-autumn-600" />
              Competências & Ferramentas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-autumn-950 mb-4">
              Habilidades em Ação
            </h2>
            <p className="text-autumn-800/85 text-base sm:text-lg leading-relaxed">
              A combinação de conhecimento técnico em ferramentas corporativas com a capacidade prática de empreender e se comunicar com excelência.
            </p>
          </Reveal>
        </div>

        {/* Grade de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Award;
            return (
              <Reveal key={idx} direction="up" delay={idx * 120}>
                <div className="autumn-card rounded-3xl p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-autumn-100 text-autumn-700 flex items-center justify-center mb-5 shadow-2xs">
                      <Icon className="w-6 h-6 text-autumn-700" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-autumn-950 mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-autumn-700/90 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Lista de Habilidades */}
                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-autumn-900">{skill.name}</span>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-autumn-100 text-autumn-800 border border-autumn-200">
                              {skill.tag}
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-autumn-200/70 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-autumn-500 to-terracotta transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-autumn-100 flex items-center gap-2 text-xs text-autumn-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Prática aplicada com excelência</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
