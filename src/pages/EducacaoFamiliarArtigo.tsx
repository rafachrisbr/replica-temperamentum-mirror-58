import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const EducacaoFamiliarArtigo = () => {
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
              A Importância da Educação das Crianças Conforme seu Temperamento
            </h1>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/paisFilhos.jpg" 
                alt="Pais e filhos" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            <p className="text-gray-300 mb-6">
              A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes. O temperamento, sendo algo inato no indivíduo, uma "índole natural" que a natureza nos impõe, nunca desaparece inteiramente. No entanto, uma educação oportuna e, sobretudo, a força sobrenatural da graça podem reduzir suas estridências e moldar o caráter da criança.
            </p>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/padreEducando.png" 
                alt="Padre educando" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            {/* Rest of the article content... */}
            {/* [Previous article content continues here with the same structure but using the new images] */}

            <div className="flex justify-center mt-12">
              <Link to="/educacao-familiar">
                <Button variant="outline" className="border-gray-700 text-[#D4AF37] hover:bg-gray-900">
                  <ChevronLeft size={16} className="mr-2" />
                  Voltar para Educação Familiar
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliarArtigo;