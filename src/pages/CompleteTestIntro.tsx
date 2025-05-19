
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CompleteTestIntro = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-3xl">
          <div className="mb-8">
            <Button
              onClick={() => navigate('/testes')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md"
              size="sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Testes
            </Button>
          </div>
          
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 animate-fadeIn">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4">
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  Teste Completo
                </span>
              </h1>
              
              <div className="w-20 h-20 mx-auto bg-[#D4AF37]/20 rounded-full flex items-center justify-center my-4">
                <span className="text-4xl text-[#D4AF37]">✝</span>
              </div>
              
              <p className="text-lg text-gray-300">
                Descubra seu temperamento e suas inteligências predominantes
              </p>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div className="bg-black/30 p-4 rounded-lg">
                <h2 className="text-xl font-serif mb-3 text-amber-400">Bem-vindo ao Teste Completo!</h2>
                <p>
                  Este teste é composto por duas etapas:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>O Teste do Pe. Hock (para identificar seu temperamento predominante).</li>
                  <li>O Teste de Inteligências Múltiplas (para descobrir seus principais tipos de inteligência).</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-serif mb-3 text-amber-400">Instruções:</h2>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Reserve cerca de <span className="font-semibold text-white">20 a 25 minutos</span> para completar o teste.</li>
                  <li>Escolha um local tranquilo, sem interrupções, para se concentrar melhor.</li>
                  <li>Responda cada pergunta de forma honesta e espontânea, pensando em como você realmente é na maior parte do tempo.</li>
                  <li>Não existem respostas certas ou erradas.</li>
                </ul>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h2 className="text-xl font-serif mb-3 text-amber-400">O que você receberá:</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identificação do seu temperamento predominante segundo o método do Pe. Hock</li>
                  <li>Mapeamento das suas inteligências múltiplas baseado na teoria de Howard Gardner</li>
                  <li>Análise detalhada da relação entre seu temperamento e suas inteligências</li>
                  <li>Sugestões para desenvolvimento pessoal com base nos resultados</li>
                </ul>
              </div>
              
              <div className="text-center italic text-gray-400 border-t border-gray-800 pt-4 mt-6">
                <p>
                  "Conhece-te a ti mesmo e conhecerás o universo e os deuses."
                  <br />
                  <span className="text-sm">— Inscrição no Templo de Delfos</span>
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => navigate('/pe-hock-teste')}
                className="bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md px-8 py-6 text-lg"
              >
                Iniciar Teste Completo
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompleteTestIntro;
