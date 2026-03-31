import { MessageSquare, Image as ImageIcon, Star, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
        {/* Chat com IA */}
        <div className="flex-1 p-8 flex items-start space-x-4 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-zinc-50 transition-colors group cursor-pointer">
          <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-orange-50 transition-colors">
            <MessageSquare className="w-6 h-6 text-zinc-600 group-hover:text-brand-orange" />
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 text-lg">Chat com IA</h3>
            <p className="text-zinc-500 text-sm italic">Invista em atendimento com Inteligência Artificial!</p>
          </div>
        </div>

        {/* Design com IA */}
        <div className="flex-1 p-8 flex items-start space-x-4 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-zinc-50 transition-colors group cursor-pointer">
          <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-orange-50 transition-colors">
            <ImageIcon className="w-6 h-6 text-zinc-600 group-hover:text-brand-orange" />
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 text-lg">Design com IA</h3>
            <p className="text-zinc-500 text-sm italic">Criações rápidas para seus posts nas redes sociais (beta)</p>
          </div>
        </div>

        {/* Google Stars */}
        <div className="flex-1 bg-brand-orange p-8 flex flex-col items-center justify-center text-white text-center">
          <Star className="w-8 h-8 fill-current mb-2" />
          <span className="font-bold text-lg uppercase tracking-tight">5 estrelas no Google</span>
        </div>

        {/* Safe & Trusted */}
        <div className="flex-1 bg-zinc-600 p-8 flex flex-col items-center justify-center text-white text-center relative overflow-visible">
          <ShieldCheck className="w-8 h-8 mb-2" />
          <span className="font-bold text-lg uppercase tracking-tight">Safe & Trusted Company</span>
          
          {/* Vertical Support Tab */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[45%] rotate-90 bg-zinc-900 text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap rounded-t-lg shadow-lg z-10">
            24/7 Suporte
          </div>
        </div>
      </div>
    </section>
  );
}
