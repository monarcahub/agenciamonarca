import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calculator, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

const options = [
  { id: 'iara', name: 'IARA (WhatsApp IA)', price: 150, description: 'Atendimento inteligente 24/7 por unidade' },
  { id: 'design', name: 'Design com IA', price: 50, description: 'Artes ilimitadas para redes sociais' },
  { id: 'omni', name: 'Painel Omnichannel', price: 150, description: 'Centralize todos os canais' },
  { id: 'direcao', name: 'Direção de marketing', price: 450, description: 'Gestão estratégica e suporte humano constante' },
];

export default function BudgetCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const [webhookHtml, setWebhookHtml] = useState<string | null>(null);

  useEffect(() => {
    const newTotal = selected.reduce((acc, id) => {
      const option = options.find(o => o.id === id);
      return acc + (option?.price || 0);
    }, 0);
    setTotal(newTotal);
  }, [selected]);

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleRequest = async () => {
    if (selected.length === 0) return;
    
    setIsLoading(true);
    setShowRedirect(true);
    setWebhookHtml(null);

    try {
      const response = await fetch('https://webhook.monarcahub.com/webhook/assinar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: selected.map(id => options.find(o => o.id === id)?.name),
          valor_total: total, // Matching the field name in user's n8n example
          source: window.location.href
        }),
      });

      const htmlResponse = await response.text();
      
      // Check if the response looks like HTML (starts with <)
      if (htmlResponse.trim().startsWith('<')) {
        setWebhookHtml(htmlResponse);
        setIsLoading(false);
      } else {
        // Fallback if it's not HTML (maybe it's JSON after all)
        try {
          const data = JSON.parse(htmlResponse);
          if (data.url || data.redirectUrl || data.checkoutUrl) {
            window.location.href = data.url || data.redirectUrl || data.checkoutUrl;
          } else {
            setWebhookHtml('<div style="text-align:center; color:#333;"><p>Solicitação processada com sucesso!</p></div>');
            setIsLoading(false);
          }
        } catch (e) {
          setWebhookHtml(htmlResponse);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error('Erro ao processar solicitação:', error);
      setIsLoading(false);
      setShowRedirect(false);
      alert('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato via WhatsApp.');
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-white relative">
      {/* Redirection Overlay */}
      <AnimatePresence>
        {showRedirect && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowRedirect(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                ✕
              </button>

              {isLoading ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4">Processando...</h3>
                  <p className="text-zinc-600 mb-8">
                    Estamos preparando seu ambiente de <span className="font-bold text-brand-orange text-lg">pagamento seguro</span>. Aguarde um instante...
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-zinc-400 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Ambiente Criptografado & Seguro</span>
                  </div>
                </div>
              ) : (
                <div className="webhook-content">
                  {webhookHtml && (
                    <div dangerouslySetInnerHTML={{ __html: webhookHtml }} />
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Simulador de Investimento</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
              Monte seu plano <br />
              <span className="text-brand-orange">sob medida</span>
            </h3>
            <p className="text-zinc-600 text-lg mb-8">
              Escolha as soluções que sua empresa precisa agora e veja o valor do investimento em tempo real. Sem surpresas, sem taxas ocultas.
            </p>

            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between text-left group ${
                    selected.includes(option.id)
                      ? 'border-brand-orange bg-orange-50/50 shadow-lg shadow-orange-500/5'
                      : 'border-zinc-100 bg-white hover:border-zinc-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selected.includes(option.id)
                        ? 'bg-brand-orange border-brand-orange'
                        : 'border-zinc-200 group-hover:border-zinc-300'
                    }`}>
                      {selected.includes(option.id) && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{option.name}</h4>
                      <p className="text-zinc-500 text-sm">{option.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider block">Mensal</span>
                    <span className="text-lg font-black text-zinc-900">R$ {option.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Summary Card */}
          <div className="sticky top-32">
            <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h4 className="text-xl font-bold">Resumo do Plano</h4>
                </div>

                <div className="space-y-4 mb-12 min-h-[120px]">
                  {selected.length === 0 ? (
                    <p className="text-zinc-400 italic">Selecione ao menos uma solução para ver o resumo.</p>
                  ) : (
                    selected.map(id => {
                      const opt = options.find(o => o.id === id);
                      return (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={id} 
                          className="flex justify-between items-center"
                        >
                          <span className="text-zinc-300">{opt?.name}</span>
                          <span className="font-bold text-brand-orange">R$ {opt?.price}</span>
                        </motion.div>
                      );
                    })
                  )}
                </div>

                <div className="border-t border-white/10 pt-8 mb-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest block mb-1">Total Mensal</span>
                      <span className="text-5xl font-black text-white">R$ {total}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-brand-orange font-bold block">Setup Grátis</span>
                      <span className="text-zinc-500 text-xs">Oferta por tempo limitado</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleRequest}
                  disabled={selected.length === 0 || isLoading}
                  className={`w-full bg-brand-orange text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-orange-400 transition-all flex items-center justify-center space-x-3 group shadow-xl shadow-brand-orange/20 ${
                    (selected.length === 0 || isLoading) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <span>Solicitar Agora</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-zinc-500 text-xs mt-6">
                  Ao clicar em solicitar, você será redirecionado para o nosso checkout seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
