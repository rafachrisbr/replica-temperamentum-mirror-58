
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TestSelection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-4xl w-full">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-wider title-gold">
              Descubra Quem Você É
            </h1>
            <p className="text-lg md:text-xl font-text text-gray-300 mb-6">
              Conheça suas características predominantes com nossos testes de autoconhecimento. 
              Identifique seu temperamento e suas inteligências múltiplas para entender melhor suas 
              forças e potencial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Teste de Temperamento */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste de Temperamentos</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Descubra seu temperamento predominante: Sanguíneo, Colérico, Melancólico ou Fleumático. 
                Aprenda como seus traços naturais influenciam suas emoções e comportamentos.
              </p>
              <Button 
                onClick={() => navigate('/quiz')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Fazer Teste de Temperamento
              </Button>
            </div>
            
            {/* Teste de Inteligências Múltiplas */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste de Inteligências</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Identifique suas inteligências predominantes dentre as 8 inteligências múltiplas 
                de Howard Gardner. Descubra suas habilidades naturais e como potencializá-las.
              </p>
              <Button 
                onClick={() => navigate('/inteligencias')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Fazer Teste de Inteligências
              </Button>
            </div>
            
            {/* Teste Completo */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-[#D4AF37]/30 flex flex-col h-full">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste Completo</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Realize o teste combinado de temperamento e inteligências múltiplas. 
                Receba um relatório integrado mostrando como seus traços de personalidade 
                e habilidades se complementam.
              </p>
              <Button 
                onClick={() => navigate('/teste-completo')}
                className="w-full bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Fazer Teste Completo
              </Button>
            </div>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Sobre Nossos Testes</h2>
            <div className="font-text text-gray-300 space-y-4">
              <p>
                Nossos testes são baseados em teorias consolidadas sobre temperamento e inteligências múltiplas.
                O teste de temperamento identifica a predominância de quatro tipos clássicos: Sanguíneo (extrovertido e sociável), 
                Colérico (determinado e líder), Melancólico (analítico e perfeccionista) e Fleumático (calmo e equilibrado).
              </p>
              <p>
                O teste de inteligências múltiplas fundamenta-se na teoria do psicólogo Howard Gardner, que 
                identificou oito tipos distintos de inteligência: Linguística, Lógico-matemática, Espacial, 
                Musical, Corporal-cinestésica, Interpessoal, Intrapessoal e Naturalista.
              </p>
              <p>
                Ao combinar os resultados de ambos os testes, você poderá entender melhor como sua personalidade 
                e suas habilidades naturais se complementam e influenciam sua vida, relacionamentos e carreira.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestSelection;
