import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AlfajoresSection from './components/AlfajoresSection';
import CertificatesSection from './components/CertificatesSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AutumnLeaves from './components/AutumnLeaves';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Camada das Folhas Flutuantes de Outono */}
      <AutumnLeaves />

      {/* Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal com Revelação Fluida e Segura */}
      <main className="flex-1">
        <Hero />
        <About />
        <AlfajoresSection />
        <CertificatesSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
