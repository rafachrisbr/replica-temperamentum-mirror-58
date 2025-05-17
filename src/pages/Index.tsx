
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
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
              a teoria dos temperamentos e as essências do ser humano
            </h2>
            
            <div className="space-y-4 text-[#E0E0E0] text-justify font-text">
              {isMobile ? (
                // Versão compacta para dispositivos móveis
                <p className="first-letter:uppercase">
                  a teoria dos temperamentos, originada na grécia antiga, descreve quatro principais tipos de personalidade: sanguíneo, colérico, melancólico e fleumático. cada pessoa possui uma combinação única destes temperamentos, influenciando como reagimos às situações e nos relacionamos com os outros.
                </p>
              ) : (
                // Versão completa para desktop
                <>
                  <p className="first-letter:uppercase">
                    a teoria dos temperamentos tem suas raízes na grécia antiga. Hipócrates, conhecido como o pai da medicina, foi um dos primeiros a formular essa teoria. ele baseou-se nos quatro elementos primários do universo (terra, ar, fogo e água) e nas suas qualidades (calor, frio, úmido e seco) para deduzir quatro humores corporais: sangue, fleuma, bile amarela e bile negra.
                  </p>
                  <p className="first-letter:uppercase">
                    mais tarde, Galeno, outro influente médico grego, expandiu essa teoria em sua obra "de temperamentis". ele descreveu nove temperamentos, incluindo os quatro principais: sanguíneo, colérico, melancólico e fleumático. esses temperamentos foram relacionados ao equilíbrio dos humores no corpo e às características comportamentais das pessoas.
                  </p>
                </>
              )}
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">
                  <span className="text-[#D4AF37]">Temperamento</span>
                </h3>
                <p className="text-justify first-letter:uppercase">
                  o temperamento é a parte da nossa personalidade que é inata e influenciada por fatores biológicos. ele determina como reagimos emocionalmente e comportamentalmente às situações. existem quatro tipos principais de temperamentos, conforme descrito por galeno: sanguíneo, colérico, melancólico e fleumático.
                </p>
              </div>
              
              {!isMobile && (
                <>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">Carne</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      a carne refere-se ao corpo físico, a parte tangível e material do ser humano. é através da carne que experimentamos o mundo físico e realizamos ações. o corpo é perecível e sujeito ao envelhecimento e à morte. no contexto espiritual, a carne pode ser vista como a parte que deve ser vencida, muitas vezes associada às tentações e aos impulsos naturais.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">Alma</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      a alma é a essência imaterial e imortal do ser humano. ela é responsável pela nossa consciência, moralidade e conexão espiritual. a alma é vista como o princípio inteligente que reside em nós e que continua existindo após a morte física.
                    </p>
                  </div>
                </>
              )}
              
              <p className="text-justify pt-2 first-letter:uppercase">
                {isMobile 
                  ? "conheça seu temperamento e entenda melhor como ele influencia sua personalidade e relacionamentos."
                  : "essas três essências trabalham juntas para formar a complexidade do ser humano, integrando aspectos físicos, emocionais e espirituais."
                }
              </p>
            </div>
          </div>
          
          <div className="text-[#E0E0E0] text-justify font-text max-w-2xl mx-auto">
            <p className="first-letter:uppercase">
              bem-vindo à aplicação para descobrir o seu temperamento. este teste é baseado nos ensinamentos sobre os quatro temperamentos: colérico, sanguíneo, melancólico e fleumático. responda às 13 perguntas seguintes com sinceridade para uma análise mais precisa.
            </p>
          </div>
          
          <div className="mt-6 md:mt-8">
            <Button
              onClick={() => navigate('/testes')}
              className="text-lg py-4 px-8 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                iniciar teste
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <div className="mt-4">
              <button 
                onClick={() => navigate('/temperamentos')} 
                className="text-[#D4AF37] hover:text-[#FFD700] underline underline-offset-4 text-sm transition-colors"
              >
                conhecer os quatro temperamentos
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
