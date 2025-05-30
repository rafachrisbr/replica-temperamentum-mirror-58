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
      
      <main className="flex-1 flex flex-col items-center p-6 animate-fadeIn">
        <div className="max-w-4xl w-full">
          <div className="mb-8 text-center animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
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
            {/* Teste Rápido de Temperamento */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste Rápido</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Descubra seu temperamento predominante através de 13 questões. 
                Teste rápido e prático, porém menos preciso que os testes completos.
              </p>
              <Button 
                onClick={() => navigate('/quiz')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Teste Rápido
              </Button>
            </div>
            
            {/* Teste de Pe. Hock */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.4s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste Pe. Hock</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Descubra seu temperamento com o método do Pe. Hock. Este teste mais detalhado analisa 
                suas tendências naturais com base em 50 questões elaboradas especificamente para 
                identificar seu temperamento predominante.
              </p>
              <Button 
                onClick={() => navigate('/pe-hock-intro')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Teste Pe. Hock
              </Button>
            </div>
            
            {/* Teste de Inteligências Múltiplas */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.5s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Inteligências Múltiplas</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Identifique suas inteligências predominantes dentre as 7 inteligências múltiplas 
                de Howard Gardner. Descubra suas habilidades naturais em 10 etapas de avaliação.
              </p>
              <Button 
                onClick={() => navigate('/inteligencias-multiplas')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Teste de Inteligências
              </Button>
            </div>
            
            {/* Teste Completo */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-[#D4AF37]/30 flex flex-col h-full md:col-span-3 animate-[fadeIn_0.5s_ease-in-out_0.6s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">Teste Completo</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                Realize o teste completo que integra dois testes em sequência: 
                Teste de Pe. Hock (50 questões) e Teste de Inteligências Múltiplas (10 etapas). 
                Receba um relatório integrado mostrando como seus traços de personalidade 
                e habilidades se complementam.
              </p>
              <Button 
                onClick={() => navigate('/teste-completo')}
                className="w-full bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Teste Completo
              </Button>
            </div>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8 animate-[fadeIn_0.5s_ease-in-out_0.7s] opacity-0 fill-mode-forwards">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Sobre Nossos Testes</h2>
            <div className="font-text text-gray-300 space-y-4">
              <p>
                Nossos testes são baseados em teorias consolidadas sobre temperamento e inteligências múltiplas.
                O teste rápido identifica a predominância de quatro tipos clássicos: Sanguíneo (extrovertido e sociável), 
                Colérico (determinado e líder), Melancólico (analítico e perfeccionista) e Fleumático (calmo e equilibrado).
              </p>
              <p>
                O teste de Pe. Hock é uma análise mais detalhada dos temperamentos, baseada no Questionário dos Temperamentos 
                do Pe. Hock (edição brasileira), que utiliza 50 perguntas para determinar com maior precisão seu perfil predominante.
              </p>
              <p>
                O teste de inteligências múltiplas fundamenta-se na teoria do psicólogo Howard Gardner, que 
                identificou sete tipos distintos de inteligência: Verbal-Linguística, Lógico-matemática, Espacial, 
                Musical, Corporal-cinestésica, Interpessoal e Intrapessoal.
              </p>
              <p>
                O teste completo combina o teste de Pe. Hock e o teste de inteligências múltiplas em sequência, 
                fornecendo uma análise integrada de como seu temperamento e suas inteligências se complementam, 
                oferecendo insights valiosos para seu autoconhecimento, vida pessoal e desenvolvimento profissional.
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