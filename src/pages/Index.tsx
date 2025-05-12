
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="py-4">
            <img 
              src="/lovable-uploads/a13f180c-bb8c-4cbb-9bc1-7f0b7cb95564.png" 
              alt="Nossa Senhora com o Menino Jesus"
              className="mx-auto w-48 h-auto shadow-lg"
            />
          </div>
          
          <div className="bg-[#121212] p-6 md:p-8 rounded-lg">
            <h2 className="text-xl font-serif uppercase tracking-wide text-[#D4AF37] mb-6">
              A Teoria dos Temperamentos e as Essências do Ser Humano
            </h2>
            
            <div className="space-y-4 text-[#E0E0E0] text-justify font-serif">
              <p>
                A teoria dos temperamentos tem suas raízes na Grécia Antiga. Hipócrates, conhecido como o pai da medicina, foi um dos primeiros a formular essa teoria. Ele baseou-se nos quatro elementos primários do universo (terra, ar, fogo e água) e nas suas qualidades (calor, frio, úmido e seco) para deduzir quatro humores corporais: sangue, fleuma, bile amarela e bile negra.
              </p>
              <p>
                Mais tarde, Galeno, outro influente médico grego, expandiu essa teoria em sua obra "De Temperamentis". Ele descreveu nove temperamentos, incluindo os quatro principais: sanguíneo, colérico, melancólico e fleumático. Esses temperamentos foram relacionados ao equilíbrio dos humores no corpo e às características comportamentais das pessoas.
              </p>
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">Temperamento</h3>
                <p className="text-left">
                  O temperamento é a parte da nossa personalidade que é inata e influenciada por fatores biológicos. Ele determina como reagimos emocionalmente e comportamentalmente às situações. Existem quatro tipos principais de temperamentos, conforme descrito por Galeno: sanguíneo, colérico, melancólico e fleumático.
                </p>
              </div>
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">Carne</h3>
                <p className="text-left">
                  A carne refere-se ao corpo físico, a parte tangível e material do ser humano. É através da carne que experimentamos o mundo físico e realizamos ações. O corpo é perecível e sujeito ao envelhecimento e à morte. No contexto espiritual, a carne pode ser vista como a parte que deve ser vencida, muitas vezes associada às tentações e aos impulsos naturais.
                </p>
              </div>
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">Alma</h3>
                <p className="text-left">
                  A alma é a essência imaterial e eterna do ser humano. Ela é responsável pela nossa consciência, moralidade e conexão espiritual. A alma é vista como o princípio inteligente que reside em nós e que continua existindo após a morte física.
                </p>
              </div>
              
              <p className="pt-2">
                Essas três essências trabalham juntas para formar a complexidade do ser humano, integrando aspectos físicos, emocionais e espirituais.
              </p>
            </div>
          </div>
          
          <div className="text-[#E0E0E0] text-justify font-serif max-w-2xl mx-auto">
            <p>
              Bem-vindo à aplicação para descobrir o seu temperamento. Este teste é baseado nos ensinamentos sobre os quatro temperamentos: Colérico, Sanguíneo, Melancólico e Fleumático. Responda às 13 perguntas seguintes com sinceridade para uma análise mais precisa.
            </p>
          </div>
          
          <div className="mt-8">
            <Button
              onClick={() => navigate('/quiz')}
              className="text-lg py-4 px-8"
            >
              Iniciar Teste
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-[#A9A9A9] bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#444444] pt-4"></div>
          <p className="text-[#D4AF37] font-serif uppercase italic my-3">IN TE, DOMINE, SPERAVI NON CONFUNDAR IN AETERNUM</p>
          <p className="text-sm my-2">Este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
          <p className="text-xs my-2">Fontes principais: Ensinamentos do Pe. Paulo Ricardo (curso "Os Quatro Temperamentos") e Canção Nova (artigo "Qual é o seu temperamento?").</p>
          <p className="text-xs my-2">© 2025 Rafael Christiano</p>
          <p className="text-[#D4AF37] font-serif uppercase my-3">DEUS CARITAS EST</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
