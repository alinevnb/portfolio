import React, { useState } from 'react';
import { Wind, Play, Pause } from 'lucide-react';

const LEAF_SVG_MAPLE = (
  <path d="M12 2C11.5 4 10 5.5 8 5C8.5 7 7.5 9 6 9.5C7.5 11 7 13 6 15C8 14.5 9.5 16 9 18C11 17.5 12 19 12 22C12 19 13 17.5 15 18C14.5 16 16 14.5 18 15C17 13 16.5 11 18 9.5C16.5 9 15.5 7 16 5C14 5.5 12.5 4 12 2Z" />
);

const LEAF_SVG_OAK = (
  <path d="M12 2C9 5 7 8 8 11C6 11 5 13 6 15C4.5 16 5 18 7 19C7 20.5 9 21.5 12 22C15 21.5 17 20.5 17 19C19 18 19.5 16 18 15C19 13 18 11 16 11C17 8 15 5 12 2Z" />
);

const LEAVES_CONFIG = [
  { id: 1, left: '5%', size: 26, duration: 11, delay: -2, color: '#D86843', type: 'maple', opacity: 0.75 },
  { id: 2, left: '14%', size: 32, duration: 14, delay: -8, color: '#C87D38', type: 'oak', opacity: 0.7 },
  { id: 3, left: '22%', size: 22, duration: 10, delay: -4, color: '#D99849', type: 'maple', opacity: 0.8 },
  { id: 4, left: '33%', size: 28, duration: 13, delay: -11, color: '#944715', type: 'oak', opacity: 0.65 },
  { id: 5, left: '44%', size: 24, duration: 12, delay: -6, color: '#B86221', type: 'maple', opacity: 0.75 },
  { id: 6, left: '55%', size: 34, duration: 16, delay: -1, color: '#E09B42', type: 'oak', opacity: 0.7 },
  { id: 7, left: '65%', size: 20, duration: 9, delay: -7, color: '#D86843', type: 'maple', opacity: 0.8 },
  { id: 8, left: '76%', size: 30, duration: 15, delay: -12, color: '#A0522D', type: 'oak', opacity: 0.65 },
  { id: 9, left: '86%', size: 25, duration: 11, delay: -3, color: '#C87D38', type: 'maple', opacity: 0.75 },
  { id: 10, left: '94%', size: 28, duration: 13, delay: -9, color: '#D99849', type: 'oak', opacity: 0.7 },
  { id: 11, left: '10%', size: 24, duration: 12, delay: -5, color: '#944715', type: 'maple', opacity: 0.7 },
  { id: 12, left: '50%', size: 26, duration: 14, delay: -10, color: '#D86843', type: 'maple', opacity: 0.75 },
  { id: 13, left: '80%', size: 22, duration: 10, delay: -13, color: '#B86221', type: 'oak', opacity: 0.8 },
];

export default function AutumnLeaves() {
  const [active, setActive] = useState(true);

  return (
    <>
      {/* Camada das folhas flutuantes */}
      {active && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
          {LEAVES_CONFIG.map((leaf) => (
            <div
              key={leaf.id}
              className="animate-autumn-fall"
              style={{
                left: leaf.left,
                animationDuration: `${leaf.duration}s`,
                animationDelay: `${leaf.delay}s`,
                width: `${leaf.size}px`,
                height: `${leaf.size}px`,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill={leaf.color}
                style={{ opacity: leaf.opacity }}
                className="w-full h-full drop-shadow-md filter"
              >
                {leaf.type === 'maple' ? LEAF_SVG_MAPLE : LEAF_SVG_OAK}
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Botão de Controle da Animação */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setActive(!active)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg backdrop-blur-md text-xs font-semibold border transition-all duration-300 ${
            active
              ? 'bg-white/90 hover:bg-white text-autumn-900 border-autumn-300 hover:border-autumn-500'
              : 'bg-autumn-100 hover:bg-autumn-200 text-autumn-800 border-autumn-300'
          }`}
          title={active ? 'Pausar efeito de folhas de outono' : 'Ativar efeito de folhas de outono'}
        >
          <Wind className={`w-4 h-4 text-autumn-600 ${active ? 'animate-bounce' : ''}`} />
          <span className="hidden sm:inline">Folhas de Outono:</span>
          <span className="font-bold flex items-center gap-1 text-autumn-700">
            {active ? (
              <>
                <span>Ativas</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </>
            ) : (
              <>
                <span>Pausadas</span>
                <span className="w-2 h-2 rounded-full bg-amber-500" />
              </>
            )}
          </span>
        </button>
      </div>
    </>
  );
}
