
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import IntelligenceCard from '@/components/IntelligenceCard';
import IntelligenceChart from '@/components/IntelligenceChart';
import { useIntelligences } from '@/contexts/IntelligencesContext';
import { RefreshCcw, Home, Share2, BookOpen } from 'lucide-react';
import { IntelligenceResult as MultipleIntelligencesResult } from '@/utils/multipleIntelligencesQuiz';

const IntelligencesResults = () => {
  const navigate = useNavigate();
  const { results, resetQuiz, isQuizComplete } = useIntelligences();
  
  useEffect(() => {
    if (!isQuizComplete && !results) {
      navigate('/testes');
    }
  }, [isQuizComplete, results, navigate]);
  
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/inteligencias');
  };
  
  if (!results) {
    return null;
  }
  
  const dominantIntelligence = results[0];
  const secondIntelligence = results[1];
  
  // Function to adapt MultipleIntelligencesResult to work with IntelligenceCard component
  const adaptIntelligenceResult = (result: MultipleIntelligencesResult) => {
    return {
      ...result,
      percentage: result.percentage || Math.round((result.score / 70) * 100),
      strengths: [],
      careers: [],
      icon: result.type === 'kinesthetic' ? 'square-pen' : 
             result.type === 'spatial' ? 'compass' :
             result.type === 'interpersonal' ? 'users' :
             result.type === 'intrapersonal' ? 'square-x' :
             result.type === 'linguistic' ? 'book' :
             result.type === 'logical' ? 'brain' : 'lightbulb'
    };
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 animate-fadeIn">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                suas inteligências múltiplas
              </span>
            </h2>
            
            <div className="inline-block p-3 md:p-4 bg-[#000000] bg-opacity-40 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-serif uppercase text-amber-400">
                {dominantIntelligence.name}
              </h3>
              <p className="text-sm md:text-base text-gray-300 italic mt-1">
                "{dominantIntelligence.description.substring(0, 120)}..."
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 md:gap-8 mt-4 md:mt-8">
            <IntelligenceCard 
              intelligence={adaptIntelligenceResult(dominantIntelligence)}
              isDominant={true}
            />
            
            <div className="mt-6 animate-fadeIn" style={{animationDelay: "0.3s"}}>
              <IntelligenceChart results={results.map(adaptIntelligenceResult)} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {results.slice(1, 3).map((intelligence) => (
                <IntelligenceCard 
                  key={intelligence.type}
                  intelligence={adaptIntelligenceResult(intelligence)}
                />
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-[#121212] rounded-lg border border-gray-800 mt-8">
            <h3 className="text-xl font-serif uppercase mb-4 text-amber-400">Desenvolvimento das Suas Inteligências</h3>
            <div className="text-gray-300 font-text space-y-4">
              <p>
                Cada pessoa possui um perfil único de inteligências múltiplas. Seu resultado destaca as áreas 
                em que você demonstra maior afinidade e potencial. Lembre-se que todas as inteligências 
                podem ser desenvolvidas com prática e dedicação.
              </p>
              <p>
                Para potencializar sua inteligência predominante ({dominantIntelligence.name}), 
                considere incorporar estas atividades ao seu cotidiano:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {dominantIntelligence.activities && dominantIntelligence.activities.slice(0, 3).map((activity, index) => (
                  <li key={index}>{activity}</li>
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
              className="bg-transparent text-white border border-white/20 hover:bg-[#D4AF37]/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              onClick={() => {
                try {
                  navigator.share({
                    title: 'Meu Resultado - Teste de Inteligências Múltiplas',
                    text: `Minha inteligência predominante é ${dominantIntelligence.name}!`,
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
            
            <Button
              variant="outline"
              className="bg-transparent text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              onClick={() => navigate('/teste-combinado')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              teste combinado
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntelligencesResults;
