import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Esses valores incluem artes para rede social?",
    answer: "Sim. É possível personalizar com suas necessidades a partir do Plano Plus. O valor MENSAL em média para até 10 entregas com postagens incluídas fica apenas R$890. O máximo que você pode pagar com esses serviços de design e gestão de mídias é R$ 1600."
  },
  {
    question: "Preciso ter conhecimento em tecnologia para usar?",
    answer: "Não. Nossa equipe faz toda a configuração inicial para você. Depois, você usa o sistema de forma simples, como já faz no WhatsApp."
  },
  {
    question: "IA substitui totalmente os atendentes humanos?",
    answer: "Não. Ele é um apoio inteligente. A IA atende de forma automática, mas sempre que necessário, o atendente humano pode assumir a conversa."
  },
  {
    question: "Existe algum custo de instalação?",
    answer: "Não. Mas se você precisar de ajuda para configurar, há apenas uma taxa de setup (que inclui instalação e ativação) para preparar toda a estrutura inicial. Depois, você paga apenas a mensalidade do plano escolhido. A taxa de configuração é apenas R$ 150."
  },
  {
    question: "O sistema consegue aprender com as conversas?",
    answer: "Sim. O sistema IARA evolui conforme o uso, tornando as respostas mais precisas e personalizadas ao longo do tempo."
  },
  {
    question: "Como posso contratar o sistema IARA?",
    answer: "É simples: clique no botão “ASSINAR” nessa página ou entre em contato pelo WhatsApp. Podemos te passar o link para você assinar o seu plano de preferência fazendo o pagamento via PIX ou Cartão de Crédito. Nossa equipe vai iniciar a configuração e em poucos dias você já estará atendendo com a inteligência do sistema IARA."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-0.5 bg-brand-orange" />
                <span className="text-sm font-bold tracking-widest text-zinc-900 uppercase">F.A.Q</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-8">
                PERGUNTAS <br />
                <span className="text-zinc-900">FREQUENTES</span>
              </h2>
              
              <a 
                href="https://wa.me/5555996079863"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-orange text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm shadow-lg shadow-brand-orange/20 hover:bg-orange-400 transition-all"
              >
                Tire suas dúvidas
              </a>

              {/* Background Watermark */}
              <div className="absolute -bottom-20 -left-10 text-[12rem] font-black text-zinc-200/50 select-none pointer-events-none z-0">
                F.A.Q
              </div>
            </div>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:col-span-7 space-y-4 relative z-10">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-sm overflow-hidden shadow-sm border border-zinc-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors hover:bg-zinc-50"
                >
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-brand-orange' : 'text-zinc-800'}`}>
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-zinc-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 pt-2 text-zinc-500 leading-relaxed border-t border-zinc-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
