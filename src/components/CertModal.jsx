import React, { useEffect } from 'react';
import { X, ExternalLink, Download, Award, CheckCircle2 } from 'lucide-react';

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Clique no fundo para fechar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Caixa de Diálogo */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-autumn-200 max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="p-4 sm:p-5 border-b border-autumn-100 flex items-center justify-between bg-[#FDFBF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-autumn-100 text-autumn-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5 text-autumn-600" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-autumn-950 line-clamp-1">
                {cert.title}
              </h3>
              <p className="text-xs text-autumn-700">
                {cert.issuer} • {cert.hours} Horas • Nível: {cert.level}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-autumn-700 hover:bg-autumn-100 transition-colors"
              title="Abrir imagem original"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-autumn-700 hover:bg-autumn-100 hover:text-autumn-950 transition-colors"
              title="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Visualização da Imagem */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-stone-100 flex items-center justify-center">
          <div className="max-w-3xl w-full shadow-lg rounded-xl overflow-hidden border border-stone-200 bg-white">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-contain max-h-[62vh] mx-auto"
            />
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 sm:p-5 bg-white border-t border-autumn-100 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-autumn-700">
            <span className="font-semibold text-autumn-900">Autenticidade: </span>
            <span className="font-mono bg-autumn-50 px-2 py-0.5 rounded border border-autumn-200 select-all">
              {cert.code}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cert.image}
              download={`${cert.id}.png`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-autumn-700 hover:bg-autumn-800 text-white font-semibold text-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Certificado</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
