
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';

const PeHockIntro = () => {
  const navigate = useNavigate();
  
  const handleStartTest = () => {
    navigate('/pe-hock-teste');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-3xl w-full">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Teste Temperamento Pe. Hock
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              Baseado no Questionário dos Temperamentos do Pe. Hock (edição brasileira)
            </p>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Instruções</h2>
            
            <div className="text-gray-300 font-text space-y-4">
              <p>
                Bem-vindo ao Teste Temperamento Pe. Hock! Este teste ajuda você a descobrir qual dos quatro temperamentos 
                clássicos (Colérico, Sanguíneo, Melancólico, Fleumático) é predominante em sua personalidade.
              </p>
              
              <p>
                Responda cada pergunta de forma honesta e espontânea, pensando em como você realmente é na maior 
                parte do tempo.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>O teste contém 50 perguntas e leva cerca de 10 minutos para ser concluído.</li>
                <li>Não existem respostas certas ou erradas.</li>
                <li>O teste é confidencial e seus resultados são apenas para seu autoconhecimento.</li>
                <li>Ao final, você verá seu resultado e uma breve explicação sobre seu temperamento.</li>
              </ul>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={handleStartTest}
                className="bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Iniciar o Teste
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                onClick={() => navigate('/testes')}
                variant="outline"
                className="bg-transparent text-white border border-white/20 hover:bg-white/10 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                <Home className="mr-2 h-4 w-4" />
                Voltar aos Testes
              </Button>
            </div>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Sobre os Temperamentos</h2>
            
            <div className="text-gray-300 font-text space-y-4">
              <p>
                Os quatro temperamentos - Colérico, Sanguíneo, Melancólico e Fleumático - representam diferentes 
                disposições psicológicas naturais que influenciam nossa forma de pensar, sentir e agir.
              </p>
              
              <p>
                A teoria dos temperamentos tem origem na medicina antiga de Hipócrates e foi desenvolvida por 
                diversos estudiosos ao longo dos séculos, incluindo o Padre Hock, que criou um método detalhado para 
                identificação do temperamento predominante.
              </p>
              
              <p>
                Conhecer seu temperamento ajuda a compreender suas tendências naturais, pontos fortes e desafios, 
                possibilitando um maior autoconhecimento e desenvolvimento pessoal.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeHockIntro;
