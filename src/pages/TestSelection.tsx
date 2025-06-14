
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TestSelection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 animate-fadeIn">
        <div className="max-w-4xl w-full">
          <div className="mb-8 text-center animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
            <h1 className="text-3xl md:text-4xl font-serif mb-4 uppercase tracking-wider title-gold">
              {t('tests.title')}
            </h1>
            <p className="text-lg md:text-xl font-text text-gray-300 mb-6">
              {t('tests.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Teste Rápido de Temperamento */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">{t('tests.quick_test.title')}</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                {t('tests.quick_test.description')}
              </p>
              <Button 
                onClick={() => navigate('/quiz')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                {t('tests.quick_test.button')}
              </Button>
            </div>
            
            {/* Teste de Pe. Hock */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.4s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">{t('tests.pe_hock_test.title')}</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                {t('tests.pe_hock_test.description')}
              </p>
              <Button 
                onClick={() => navigate('/pe-hock-intro')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                {t('tests.pe_hock_test.button')}
              </Button>
            </div>
            
            {/* Teste de Inteligências Múltiplas */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 flex flex-col h-full animate-[fadeIn_0.5s_ease-in-out_0.5s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">{t('tests.multiple_intelligences.title')}</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                {t('tests.multiple_intelligences.description')}
              </p>
              <Button 
                onClick={() => navigate('/inteligencias-multiplas')}
                className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                {t('tests.multiple_intelligences.button')}
              </Button>
            </div>
            
            {/* Teste Completo */}
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-[#D4AF37]/30 flex flex-col h-full md:col-span-3 animate-[fadeIn_0.5s_ease-in-out_0.6s] opacity-0 fill-mode-forwards">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-serif uppercase mb-2 text-amber-400">{t('tests.complete_test.title')}</h2>
              </div>
              <p className="text-gray-300 font-text flex-grow mb-6">
                {t('tests.complete_test.description')}
              </p>
              <Button 
                onClick={() => navigate('/teste-completo')}
                className="w-full bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] 
                  transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                {t('tests.complete_test.button')}
              </Button>
            </div>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8 animate-[fadeIn_0.5s_ease-in-out_0.7s] opacity-0 fill-mode-forwards">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">{t('tests.about.title')}</h2>
            <div className="font-text text-gray-300 space-y-4">
              <p>
                {t('tests.about.description')}
              </p>
              <p>
                {t('tests.about.pe_hock_description')}
              </p>
              <p>
                {t('tests.about.intelligences_description')}
              </p>
              <p>
                {t('tests.about.complete_description')}
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
