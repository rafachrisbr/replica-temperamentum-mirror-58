import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const EducacaoFamiliarFamilia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12">
        <div className="max-w-3xl w-full space-y-8">
          <Link to="/educacao-familiar">
            <Button variant="outline" className="mb-6 border-gray-700 text-[#D4AF37] hover:bg-gray-900">
              <ChevronLeft size={16} className="mr-2" />
              Voltar para Educação Familiar
            </Button>
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] text-center mb-6">
              A Importância da Família na Sociedade e no Plano de Deus
            </h1>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliarFamilia;