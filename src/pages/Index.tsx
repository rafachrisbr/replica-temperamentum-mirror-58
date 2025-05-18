
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
              Teoria dos Temperamentos e as Essências do Ser Humano
            </h2>
            
            <div className="space-y-4 text-[#E0E0E0] text-justify font-text">
              <p className="first-letter:uppercase">
                A teoria dos temperamentos tem suas raízes na Grécia Antiga, sendo inicialmente formulada por Hipócrates, conhecido como o pai da medicina. Ele baseou-se nos quatro elementos primários do universo (terra, ar, fogo e água) e em suas qualidades (calor, frio, úmido e seco) para deduzir quatro humores corporais: sangue, fleuma, bile amarela e bile negra. Esses humores, segundo Hipócrates, influenciavam diretamente a saúde e o comportamento das pessoas.
              </p>
              
              {!isMobile && (
                <p className="first-letter:uppercase">
                  Mais tarde, Galeno, outro influente médico grego, expandiu essa teoria em sua obra "De Temperamentis", descrevendo nove temperamentos, incluindo os quatro principais: sanguíneo, colérico, melancólico e fleumático. Galeno relacionou esses temperamentos ao equilíbrio dos humores no corpo e às características comportamentais de cada indivíduo. Apesar de suas origens antigas, a classificação dos quatro temperamentos permanece relevante, sendo frequentemente citada em obras modernas de psicologia e desenvolvimento humano (Feist, Feist & Roberts; Schultz & Schultz).
                </p>
              )}
              
              {!isMobile && (
                <p className="first-letter:uppercase">
                  O temperamento, portanto, é entendido como a parte inata da nossa personalidade, fortemente influenciada por fatores biológicos e genéticos. Ele determina como reagimos emocional e comportamentalmente às situações do cotidiano e permanece relativamente estável ao longo da vida. Pesquisadores contemporâneos, como Mary K. Rothbart e Stella Chess & Alexander Thomas, reforçam que o temperamento aparece já nos primeiros anos de vida, manifestando-se em padrões de reatividade, autorregulação e adaptação ao ambiente.
                </p>
              )}
              
              {isMobile ? (
                <p className="first-letter:uppercase">
                  O temperamento é entendido como a parte inata da nossa personalidade, influenciada por fatores biológicos e genéticos, que determina como reagimos às situações e permanece relativamente estável ao longo da vida.
                </p>
              ) : (
                <p className="first-letter:uppercase">
                  No contexto da compreensão integral do ser humano, é fundamental considerar também as três essências que nos compõem: carne, alma e temperamento.
                </p>
              )}
              
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2 text-left">
                  <span className="text-[#D4AF37]">Temperamento</span>
                </h3>
                <p className="text-justify first-letter:uppercase">
                  {isMobile ? 
                    "O temperamento é a parte da nossa personalidade que é inata e influenciada por fatores biológicos. Ele determina como reagimos emocionalmente e comportamentalmente às situações."
                    :
                    "O temperamento atua como ponte entre a carne e a alma, influenciando como sentimos, pensamos e agimos. É por meio do temperamento que se expressam tanto as tendências naturais do corpo quanto as aspirações mais profundas do espírito."
                  }
                </p>
              </div>
              
              {!isMobile && (
                <>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">Carne</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      A carne refere-se ao corpo físico, a parte tangível e material do ser humano. É por meio dela que experimentamos o mundo, realizamos ações e enfrentamos os limites da existência, como o envelhecimento e a morte. Em muitos contextos espirituais, a carne é vista como a dimensão que precisa ser disciplinada, pois está associada aos impulsos e às tentações naturais.
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      <span className="text-[#D4AF37]">Alma</span>
                    </h3>
                    <p className="text-justify first-letter:uppercase">
                      A alma é a essência imaterial e imortal, responsável pela consciência, moralidade e conexão espiritual. Representa o princípio inteligente e transcendente que sobrevive à existência física, sendo fonte de valores, propósito e sentido.
                    </p>
                  </div>
                </>
              )}
              
              <p className="text-justify pt-2 first-letter:uppercase">
                {isMobile 
                  ? "Conheça seu temperamento e entenda melhor como ele influencia sua personalidade e relacionamentos."
                  : "Essas três dimensões – corpo, alma e temperamento – trabalham juntas para formar a complexidade do ser humano, integrando aspectos físicos, emocionais e espirituais. Compreender essa integração é essencial para o autoconhecimento, o crescimento pessoal e a busca pelo equilíbrio em todas as áreas da vida."
                }
              </p>
              
              {!isMobile && (
                <div className="text-sm text-gray-400 border-t border-gray-700 pt-4 mt-4">
                  <p className="text-left">Fontes:</p>
                  <ul className="list-disc list-inside text-left space-y-1">
                    <li>Galeno. De Temperamentis.</li>
                    <li>Feist, J.; Feist, G.J.; Roberts, T.-A. Teorias da Personalidade.</li>
                    <li>Schultz, D.P.; Schultz, S.E. Teorias da Personalidade.</li>
                    <li>Rothbart, M.K. (1981, 2004).</li>
                    <li>Thomas, A.; Chess, S. (1977).</li>
                    <li>Pereira Ito, Patrícia do Carmo; Guzzo, Raquel Souza Lobo. "Diferenças individuais: temperamento e personalidade; importância da teoria." Revista Estudos de Psicologia, PUC-Campinas, v. 19, n. 1, 2002.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-[#E0E0E0] text-justify font-text max-w-2xl mx-auto">
            <p className="first-letter:uppercase">
              Bem-vindo à aplicação para descobrir o seu temperamento e suas inteligências múltiplas. Nossos testes são baseados nos ensinamentos sobre os quatro temperamentos e na teoria das inteligências múltiplas de Howard Gardner. Responda às perguntas com sinceridade para uma análise mais precisa.
            </p>
          </div>
          
          <div className="mt-6 md:mt-8">
            <Button
              onClick={() => navigate('/testes')}
              className="text-lg py-4 px-8 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Iniciar Teste
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <div className="mt-4">
              <button 
                onClick={() => navigate('/temperamentos')} 
                className="text-[#D4AF37] hover:text-[#FFD700] underline underline-offset-4 text-sm transition-colors"
              >
                Conhecer os quatro temperamentos
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
