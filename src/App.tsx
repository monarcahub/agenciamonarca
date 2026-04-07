import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import BudgetCalculator from './components/BudgetCalculator';
import FAQ from './components/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { MessageCircle, Heart, X } from 'lucide-react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function LandingPage({ isZoomed, setIsZoomed }: { isZoomed: boolean, setIsZoomed: (v: boolean) => void }) {
  return (
    <main>
      <div id="inicio">
        <Hero />
      </div>
      <TrustBar />

      {/* About Section */}
      <section id="sobre" className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Quem Somos</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
            Parceiros estratégicos para o seu legado
          </h3>
          <p className="text-zinc-600 text-lg leading-relaxed mb-8">
            A MonarcaHub é um grupo de negócios B2B focado em soluções inovadoras de Marketing, Design e Inteligência Artificial. 
            Nascemos com o propósito de modernizar processos sem perder o toque humano, respeitando os princípios e valores que sustentam as empresas familiares.
          </p>
          <div className="flex items-center space-x-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
            </div>
            <div>
              <p className="font-bold text-zinc-900">Valores Cristãos</p>
              <p className="text-zinc-500 text-sm">Ética e integridade em cada projeto.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div 
            className="aspect-video bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in group"
            onClick={() => setIsZoomed(true)}
          >
            <img 
              src="https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/apoiamos-f1.png" 
              alt="Equipe MonarcaHub" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Clique para ampliar
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 md:p-8 rounded-2xl shadow-xl pointer-events-none">
            <p className="text-lg md:text-xl font-black">AMAMOS TECNOLOGIA,</p>
            <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-80">INOVAÇÃO E VELOCIDADE</p>
          </div>
        </div>

        {/* Image Zoom Modal */}
        {isZoomed && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setIsZoomed(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setIsZoomed(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src="https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/apoiamos-f1.png" 
              alt="Equipe MonarcaHub Ampliada" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </section>

      {/* Clients Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="h-px bg-zinc-200 flex-1" />
          <h2 className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-xs whitespace-nowrap">Nossos Clientes</h2>
          <div className="h-px bg-zinc-200 flex-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-center cursor-pointer">
          {[
            "https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/1-LOGO-imembuy-150x150.jpg",
            "https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/2-LOGO-munareto-150x150.jpg",
            "https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/4-LOGO-CENTERFITNESS-150x150.jpg",
            "https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/accar-parceira-monarca.png",
            "https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/logo-igreen-energy-300x300.jpg"
          ].map((src, i) => (
            <div key={i} className="flex justify-center py-4 md:py-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-500">
              <img 
                src={src} 
                alt={`Cliente ${i + 1}`} 
                className="h-24 md:h-28 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      <div id="servicos">
        <Services />
      </div>

      <BudgetCalculator />
      
      <FAQ />
      
      {/* Contact Section Placeholder */}
      <section id="contato" className="py-12">
        {/* Content can be added here later if needed */}
      </section>
    </main>
  );
}

export default function App() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-50 selection:text-brand-orange">
      <Header />
      
      <Routes>
        <Route path="/" element={<LandingPage isZoomed={isZoomed} setIsZoomed={setIsZoomed} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {/* Chat script installed via index.html */}

      {/* Footer Placeholder */}
      <footer className="bg-zinc-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/_Logo-MonarcaHub-2024-B.png" 
              alt="MonarcaHub Logo Footer" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-zinc-500 text-sm">
            <p>
              © {new Date().getFullYear()} MonarcaHub. Todos os direitos reservados.
            </p>
            <span className="hidden md:inline text-zinc-700">|</span>
            <Link 
              to="/privacy-policy" 
              className="hover:text-brand-orange transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

