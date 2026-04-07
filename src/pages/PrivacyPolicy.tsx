import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-50 selection:text-brand-orange">
      <Header />
      
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <a 
          href="/" 
          className="inline-flex items-center text-brand-orange font-bold mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Início
        </a>

        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 leading-tight">
          Política de Privacidade
        </h1>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introdução</h2>
            <p>
              A MonarcaHub (CNPJ: 34.248.356/0001-60) valoriza a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao interagir com nossos serviços, incluindo o sistema IARA e nossos projetos institucionais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. O Sistema IARA</h2>
            <p>
              O sistema IARA é nossa solução de Inteligência Artificial proprietária, desenvolvida para modernizar processos e otimizar o atendimento ao cliente. Ao utilizar o IARA, dados de conversas podem ser processados para melhorar a precisão das respostas e personalizar a experiência do usuário, sempre respeitando os limites da LGPD (Lei Geral de Proteção de Dados).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Parceiros e Integrações</h2>
            <p>
              Para oferecer a melhor experiência, a MonarcaHub utiliza tecnologias de parceiros estratégicos, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Meta (Facebook/WhatsApp):</strong> Utilizamos as APIs da Meta para integração de canais de atendimento e gestão de anúncios.</li>
              <li><strong>Google:</strong> Utilizamos serviços do Google para análise de tráfego (Analytics), armazenamento em nuvem e ferramentas de produtividade.</li>
            </ul>
            <p className="mt-4">
              Cada parceiro possui sua própria política de privacidade, e recomendamos a leitura das mesmas para entender como seus dados são tratados por essas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Política de Cookies</h2>
            <p>
              Utilizamos cookies para melhorar a navegação e entender como você utiliza nosso site. Os cookies podem ser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
              <li><strong>Analíticos:</strong> Ajudam-nos a medir o desempenho e melhorar o conteúdo.</li>
              <li><strong>Marketing:</strong> Utilizados para exibir anúncios relevantes baseados em seus interesses.</li>
            </ul>
            <p className="mt-4">
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Seus dados são armazenados em servidores seguros e o acesso é restrito a pessoal autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Contato e Suporte</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos de acesso, retificação ou exclusão de dados, entre em contato conosco:
            </p>
            <p className="mt-2 font-bold">
              E-mail: <a href="mailto:contato@monarcahub.com" className="text-brand-orange">contato@monarcahub.com</a>
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100">
            <p className="text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p className="text-sm">
              MonarcaHub - CNPJ: 34.248.356/0001-60
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MonarcaHub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
