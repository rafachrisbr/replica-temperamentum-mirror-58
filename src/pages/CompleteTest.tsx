
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCompleteTest } from '@/contexts/CompleteTestContext';
import { Button } from '@/components/ui/button';

const CompleteTest = () => {
  const navigate = useNavigate();
  const { setCurrentTestStep } = useCompleteTest();
  
  useEffect(() => {
    // Start directly with Pe. Hock test
    setCurrentTestStep('peHock');
    navigate('/pe-hock-teste');
  }, [navigate, setCurrentTestStep]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl text-center">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Teste Completo
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              Redirecionando para o Teste de Temperamento Pe. Hock...
            </p>
            
            <div className="flex justify-center">
              <Button
                onClick={() => navigate('/testes')}
                className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                Voltar para Seleção de Testes
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompleteTest;
