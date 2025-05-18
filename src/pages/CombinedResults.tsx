
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import IntelligenceCard from '@/components/IntelligenceCard';
import { useCombinedTest } from '@/contexts/CombinedTestContext';
import { getCombinedAnalysis, getPersonalDevelopmentTips } from '@/utils/combinedResults';
import { RefreshCcw, Home, Share2, ArrowRight } from 'lucide-react';

const CombinedResults = () => {
  const navigate = useNavigate();
  const { 
    temperamentResults, 
    intelligenceResults, 
    resetQuiz, 
    isQuizComplete 
  } = useCombinedTest();
  
  useEffect(() => {
    if (!isQuizComplete || !temperamentResults || !intelligenceResults) {
      navigate('/testes');
    }
  }, [isQuizComplete, temperamentResults, intelligenceResults, navigate]);
  
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/teste-completo');
  };
  
  if (!temperamentResults || !intelligenceResults) {
    return null;
  }
  
  const dominantTemperament = temperamentResults[0];
  const dominantIntelligence = intelligenceResults[0];
  const combinedAnalysis = getCombinedAnalysis(temperamentResults, intelligenceResults);
  const developmentTips = getPersonalDevelopmentTips(temperamentResults, intelligenceResults);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 animate-fadeIn">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                sua análise completa
              </span>
            </h2>
            
            <div className="p-3 md:p-4 bg-[#000000] bg-opacity-40 rounded-lg mb-4">
              <h3 className="text-xl md:text-2xl font-serif uppercase mb-2">
                <span className="text-amber-400">{dominantTemperament.name}</span>
                <span className="mx-2 text-gray-500">+</span>
                <span className="text-amber-400">{dominantIntelligence.name}</span>
              </h3>
              <p className="text-sm md:text-base text-gray-300 mt-1">
                Entenda como seu temperamento e inteligências se complementam para formar seu perfil único
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 md:mt-8">
            <div>
              <h3 className="text-lg font-serif uppercase mb-4 text-amber-400">Temperamento Predominante</h3>
              <div className="p-4 bg-[#121212] rounded-lg border border-gray-700">
                <h4 className="text-lg font-serif text-amber-400">{dominantTemperament.name}</h4>
                <p className="text-gray-300 mt-2">{dominantTemperament.description}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-serif uppercase mb-4 text-amber-400">Inteligência Predominante</h3>
              <IntelligenceCard 
                intelligence={dominantIntelligence}
                isDominant={true}
              />
            </div>
          </div>
          
          <div className="p-6 bg-[#121212] rounded-lg border border-gray-800 mt-8 text-left">
            <h3 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Análise Combinada</h3>
            <div className="text-gray-300 font-text space-y-4">
              <p>{combinedAnalysis}</p>
            </div>
          </div>
          
          <div className="p-6 bg-[#121212] rounded-lg border border-gray-800 mt-6 text-left">
            <h3 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Dicas de Desenvolvimento Pessoal</h3>
            <div className="text-gray-300 font-text">
              <ul className="space-y-3">
                {developmentTips.map((tip, index) => (
                  <li key={index} className="flex">
                    <ArrowRight className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 justify-center animate-fadeIn" style={{animationDelay: "0.5s"}}>
            <Button 
              onClick={handleRetakeQuiz}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              refazer o teste
            </Button>
            
            <Button
              onClick={() => navigate('/testes')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <Home className="mr-2 h-4 w-4" />
              página inicial
            </Button>
            
            <Button
              variant="outline"
              className="bg-transparent text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              onClick={() => {
                try {
                  navigator.share({
                    title: 'Minha Análise Completa - Temperamento e Inteligências',
                    text: `Meu perfil: ${dominantTemperament.name} + ${dominantIntelligence.name}`,
                    url: window.location.href,
                  });
                } catch (error) {
                  console.error('Erro ao compartilhar:', error);
                  alert('Seu navegador não suporta a função de compartilhamento.');
                }
              }}
            >
              <Share2 className="mr-2 h-4 w-4" />
              compartilhar
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CombinedResults;
