import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12">
        <div className="max-w-3xl w-full space-y-8">
          <Link to="/">
            <Button variant="outline" className="mb-6 border-gray-700 text-[#D4AF37] hover:bg-gray-900">
              <ChevronLeft size={16} className="mr-2" />
              Voltar para Página Inicial
            </Button>
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] text-center mb-6">
              Política de Privacidade
            </h1>

            <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 space-y-4">
              <p>
                Este site foi criado para oferecer conteúdos de meditação e autoconhecimento, de forma aberta e gratuita.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Não coletamos nenhum dado pessoal dos visitantes.</li>
                <li>Não utilizamos cookies de rastreamento, analytics ou publicidade.</li>
                <li>O site é totalmente estático e não armazena nenhuma informação sobre quem o acessa.</li>
              </ul>

              <p>
                Se, no futuro, houver qualquer alteração nesta política, ela será informada nesta página.
              </p>

              <p>
                Para dúvidas ou sugestões, entre em contato pelo formulário disponível no site.
              </p>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;