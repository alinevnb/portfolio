import React, { useState } from 'react';
import { masteredKnowledge } from '../data/portfolioData';
import { Table, Presentation, ShieldCheck, Globe, CheckCircle2, Award, Clock, Sparkles, FileText, ChevronRight } from 'lucide-react';
import CertModal from './CertModal';
import Reveal from './Reveal';

const ICON_COMPONENTS = {
  Table: Table,
  Presentation: Presentation,
  ShieldCheck: ShieldCheck,
  Globe: Globe
};

export default function CertificatesSection() {
  const [selectedProof, setSelectedProof] = useState(null);

  return (
    <section id="conhecimentos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-autumn-100 border border-autumn-300/60 text-autumn-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-autumn-600" />
              Capacidades Práticas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-autumn-950 mb-4">
              O Que Eu Domino
            </h2>
            <p className="text-autumn-800/85 text-base sm:text-lg leading-relaxed">
              Mais do que títulos no papel, são ferramentas e conhecimentos que aplico ativamente na minha rotina acadêmica no IFAC e na gestão do meu negócio.
            </p>
          </Reveal>
        </div>

        {/* Resumo Rápido */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { value: 'Avançado', label: 'Nível em Excel' },
            { value: '78h+', label: 'Estudo Complementar' },
            { value: '100%', label: 'Aplicação Prática' },
            { value: 'IFAC', label: 'Formação Técnica' }
          ].map((stat, idx) => (
            <Reveal key={idx} direction="scale" delay={idx * 70}>
              <div className="p-4 rounded-2xl bg-white/80 border border-autumn-200 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-autumn-300 hover:shadow-sm">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-autumn-800">{stat.value}</div>
                <div className="text-xs text-autumn-700 font-medium mt-0.5">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Grade de Conhecimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {masteredKnowledge.map((item, idx) => {
            const Icon = ICON_COMPONENTS[item.icon] || Award;
            return (
              <Reveal key={item.id} direction="up" delay={idx * 120}>
                <div className="autumn-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 h-full">
                  <div>
                    {/* Topo do Card */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-autumn-500 to-terracotta text-white flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-autumn-700">
                            {item.category}
                          </span>
                          <h3 className="font-serif font-bold text-xl text-autumn-950">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-autumn-100 text-autumn-900 border border-autumn-200 shrink-0">
                        {item.level}
                      </span>
                    </div>

                    {/* Resumo da Capacidade */}
                    <p className="text-sm font-medium text-autumn-900 bg-autumn-50/80 p-3 rounded-xl border border-autumn-200/50 mb-5">
                      "{item.summary}"
                    </p>

                    {/* O que eu sei fazer na prática */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-autumn-800">
                        Na prática, eu sei:
                      </p>
                      {item.skillsApplied.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-autumn-800/90 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rodapé do Card: Validação e Comprovante Discreto */}
                  <div className="pt-4 border-t border-autumn-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-autumn-700">
                      <Award className="w-3.5 h-3.5 text-autumn-600" />
                      <span>{item.verifiedBy}</span>
                    </div>

                    {item.certImage && (
                      <button
                        onClick={() => setSelectedProof({
                          title: item.title,
                          issuer: item.verifiedBy,
                          hours: item.hours,
                          level: item.level,
                          image: item.certImage,
                          code: "Validação Oficial Fundação Bradesco"
                        })}
                        className="text-xs font-semibold text-autumn-700 hover:text-autumn-950 flex items-center gap-1 hover:underline transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-autumn-500" />
                        <span>Ver comprovante</span>
                      </button>
                    )}
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* Modal Discreto para Visualizar Comprovante se Alguém Quiser */}
      {selectedProof && (
        <CertModal
          cert={selectedProof}
          onClose={() => setSelectedProof(null)}
        />
      )}
    </section>
  );
}
