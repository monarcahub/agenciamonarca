import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import BudgetCalculator from './components/BudgetCalculator';
import { MessageCircle, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-50 selection:text-brand-orange">
      <Header />
      
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
              Parceiros estratégicos para o seu crescimento
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
            <div className="aspect-video bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/monarca/800/600" 
                alt="Equipe MonarcaHub" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-black">+2.000</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Membros na Comunidade</p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="h-px bg-zinc-200 flex-1" />
            <h2 className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-xs whitespace-nowrap">Nossos Clientes</h2>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-500 cursor-pointer">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-8 w-32 bg-zinc-200 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        </section>

        <div id="servicos">
          <Services />
        </div>

        <BudgetCalculator />
        
        {/* Contact Section Placeholder */}
        <section id="contato" className="py-12">
          {/* Content can be added here later if needed */}
        </section>
      </main>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 z-50 bg-brand-orange text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-orange-400 transition-all flex items-center space-x-2 group">
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Fale conosco no chat</span>
      </button>

      {/* Footer Placeholder */}
      <footer className="bg-zinc-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center font-black text-white text-sm">M</div>
            <span className="text-lg font-black tracking-tighter text-white">
              agência<span className="text-brand-orange">monarca</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MonarcaHub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
