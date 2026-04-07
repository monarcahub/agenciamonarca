import { User, ChevronDown, Calculator } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/#inicio" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="https://raw.githubusercontent.com/monarcahub/agenciamonarca/refs/heads/main/_Logo-MonarcaHub-2024-A.png" 
            alt="MonarcaHub Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Right Side: Navigation + Actions */}
        <div className="flex items-center space-x-8">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold text-zinc-700 uppercase tracking-wider">
            <a href="/#inicio" className="hover:text-brand-orange transition-colors">Início</a>
            <a href="/#sobre" className="hover:text-brand-orange transition-colors">Sobre</a>
            <a href="/#servicos" className="hover:text-brand-orange transition-colors">Serviços</a>
            <a href="/#contato" className="hover:text-brand-orange transition-colors">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* User Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-600"
              >
                <User className="w-5 h-5" />
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <>
                  {/* Invisible backdrop to close dropdown when clicking outside */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="px-4 py-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-50 mb-1">
                      Minha Conta
                    </div>
                    <a 
                      href="https://app.monarcahub.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-brand-orange transition-colors font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      IA Cérebro
                    </a>
                    <a 
                      href="https://chat.monarcahub.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-brand-orange transition-colors font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      IA Chat
                    </a>
                    <a 
                      href="https://midias.monarcahub.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-brand-orange transition-colors font-medium"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      IA Mídias
                    </a>
                    <a 
                      href="https://painel.monarcahub.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-zinc-700 hover:bg-orange-50 hover:text-brand-orange transition-colors font-medium border-t border-zinc-50 mt-1 pt-3"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Painel Cliente
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Budget Button */}
            <a 
              href="/#orcamento" 
              className="bg-brand-orange text-white p-2.5 lg:px-6 lg:py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-orange-400 transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center"
            >
              <Calculator className="w-5 h-5 lg:hidden" />
              <span className="hidden lg:inline whitespace-nowrap">Orçamento Grátis</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
