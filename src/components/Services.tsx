import { motion } from 'motion/react';
import { Palette, Settings, MessageSquare, LayoutGrid, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: "Design com IA",
    description: "Criação de materiais gráficos e artes para redes sociais utilizando o que há de mais moderno em IA generativa.",
    icon: Palette,
    features: ["Artes para Instagram/Facebook", "Design de alta conversão", "Plano Plus incluso"]
  },
  {
    title: "Consultoria & Setup",
    description: "Configuração completa de funis de atendimento e qualificação de leads para o seu negócio.",
    icon: Settings,
    features: ["Setup estratégico", "Qualificação automática", "Integração de sistemas"]
  },
  {
    title: "IARA - WhatsApp IA",
    description: "Nossa IA proprietária para atendimento via WhatsApp, capaz de gerenciar mídias e design.",
    icon: MessageSquare,
    features: ["Atendimento 24/7", "Gestão de mídias", "Humano e eficiente"]
  },
  {
    title: "Painel Omnichannel",
    description: "Centralize todos os seus canais de comunicação em um único painel inteligente com IA.",
    icon: LayoutGrid,
    features: ["WhatsApp, Insta, Face", "Relatórios em tempo real", "IA integrada"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">Nossas Soluções</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900">Inovação que gera resultados</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-xs font-medium text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
