import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 animate-fadeIn mt-8">
        <div className="max-w-2xl w-full text-center space-y-6 md:space-y-8">
          <div className="py-4">
            <img 
              src="/lovable-uploads/a13f180c-bb8c-4cbb-9bc1-7f0b7cb95564.png" 
              alt="Nossa Senhora com o Menino Jesus"
              className="mx-auto w-36 md:w-48 h-auto shadow-lg rounded-md transition-transform hover:scale-105 duration-500"
            />
          </div>
          
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-8 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-wide text-[#D4AF37] mb-4 md:mb-6">
              {t('index_title')}
            </h2>
            
            <div className="space-y-4 text-[#E0E0E0] text-justify font-text">
              <p className="first-letter:uppercase">
                {t('index_intro_hipocrates')}
              </p>
              
              {!isMobile && (
                <p className="first-letter:uppercase">
                  {t('index_intro_galeno')}
                </p>
              )}
              
              {!isMobile && (
                <p className="first-letter:uppercase">
                  {t('index_intro_temperament_innate')}
                </p>
              )}
              
              {isMobile ? (
                <p className="first-letter:uppercase">
                  {t('index_intro_temperament_innate_mobile')}
                </p>
              ) : (
                <p className="first-letter:uppercase">
                  {t('index_intro_three_essences')}
                </p>
              )}
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">
                  <span className="text-[#D4AF37]">{t('index_temperament_heading')}</span>
                </h3>
                <p className="text-justify first-letter:uppercase">
                  {isMobile ? 
                    t('index_temperament_desc_mobile')
                    :
                    t('index_temperament_desc_desktop')
                  }
                </p>
              </div>
              
              {!isMobile && (
                <>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">{t('index_flesh_heading')}</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      {t('index_flesh_desc')}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">{t('index_soul_heading')}</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      {t('index_soul_desc')}
                    </p>
                  </div>
                </>
              )}
              
              <p className="text-justify pt-2 first-letter:uppercase">
                {isMobile 
                  ? t('index_integration_mobile')
                  : t('index_integration_desktop')
                }
              </p>
              
              {!isMobile && (
                <div className="text-sm text-gray-400 border-t border-gray-700 pt-4 mt-4">
                  <p className="text-left">{t('index_sources_heading')}</p>
                  <ul className="list-disc list-inside text-left space-y-1">
                    <li>{t('index_source_galeno')}</li>
                    <li>{t('index_source_feist')}</li>
                    <li>{t('index_source_schultz')}</li>
                    <li>{t('index_source_rothbart')}</li>
                    <li>{t('index_source_thomas')}</li>
                    <li>{t('index_source_pereira')}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-[#E0E0E0] text-justify font-text max-w-2xl mx-auto">
            <p className="first-letter:uppercase">
              {t('index_app_description')}
            </p>
          </div>
          
          <div className="mt-6 md:mt-8">
            <Button
              onClick={() => navigate('/testes')}
              className="text-lg py-4 px-8 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t('index_start_test_button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <div className="mt-4">
              <button 
                onClick={() => navigate('/temperamentos')} 
                className="text-[#D4AF37] hover:text-[#FFD700] underline underline-offset-4 text-sm transition-colors"
              >
                {t('index_learn_temperaments_button')}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;