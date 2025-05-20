import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EducacaoFamiliar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 mt-8">
        <div className="max-w-6xl w-full space-y-8 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Educação Familiar
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Conteúdo em breve...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliar;