
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCompleteTest } from '@/contexts/CompleteTestContext';
import { RefreshCcw, Home, Share2 } from 'lucide-react';
import TemperamentIntelligenceRelation from '@/components/TemperamentIntelligenceRelation';
import { IntelligenceResult } from '@/utils/multipleIntelligencesQuiz';

// Make sure to cast the values properly to avoid TypeScript errors
const CompleteTestResults = () => {
  const navigate = useNavigate();
  const {
    peHockResults,
    multipleIntelligencesResults,
    resetAllTests,
    isCompleteTestFinished,
    setCompleteTestFinished
  } = useCompleteTest();

  useEffect(() => {
    // If either test result is missing, redirect to the complete test page
    if (!peHockResults || !multipleIntelligencesResults) {
      navigate('/teste-completo');
      return;
    }

    setCompleteTestFinished(true);
  }, [peHockResults, multipleIntelligencesResults, navigate, setCompleteTestFinished]);

  const handleRetakeTests = () => {
    resetAllTests();
    navigate('/teste-completo');
  };

  // Determine the dominant temperament
  const getDominantTemperament = () => {
    if (!peHockResults) return '';

    const tempEntries = Object.entries(peHockResults);
    return tempEntries.reduce((max, current) => 
      (current[1] as number) > (max[1] as number) ? current : max, tempEntries[0]
    )[0];
  };

  const dominantTemperament = getDominantTemperament();

  // Safety check to ensure we have data to display
  if (!peHockResults || !multipleIntelligencesResults) {
    return null;
  }

  // Convert peHockResults to a format that can be displayed in a chart
  const getTemperamentName = (key: string): string => {
    switch (key) {
      case 'choleric': return 'Colérico';
      case 'sanguine': return 'Sanguíneo';
      case 'melancholic': return 'Melancólico';
      case 'phlegmatic': return 'Fleumático';
      default: return key;
    }
  };

  const temperamentTotalPoints = Object.values(peHockResults).reduce(
    (sum, score) => sum + (score as number), 0
  );

  const temperamentChartData = Object.entries(peHockResults).map(([key, value]) => ({
    name: getTemperamentName(key),
    value: value as number,
    percentage: Math.round(((value as number) / temperamentTotalPoints) * 100)
  })).sort((a, b) => b.value - a.value);

  // Top two intelligences
  const topIntelligences = multipleIntelligencesResults.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6">
        <div className="max-w-4xl w-full space-y-8">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Resultados Completos
              </span>
            </h1>
            
            <p className="text-gray-300 mt-2 mb-4">
              Abaixo você encontrará os resultados dos testes de temperamento e inteligências múltiplas,
              bem como a relação entre eles.
            </p>
          </div>

          {/* Pe. Hock Results Summary */}
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Seu Temperamento Predominante: {getTemperamentName(dominantTemperament)}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {temperamentChartData.map((item, index) => (
                <div 
                  key={item.name}
                  className={`p-4 rounded-lg ${index === 0 ? 'bg-amber-900/30 border-amber-500/30' : 'bg-gray-800/30 border-gray-700'} border`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="text-amber-400 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Button 
                onClick={() => navigate('/pe-hock-results')}
                variant="outline" 
                className="text-amber-400 border-amber-500/50 hover:bg-amber-500/10"
              >
                Ver Resultados Detalhados
              </Button>
            </div>
          </div>
          
          {/* Multiple Intelligences Summary */}
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Suas Inteligências Predominantes
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {topIntelligences.map((intelligence: IntelligenceResult, index) => (
                <div 
                  key={intelligence.type}
                  className={`p-4 rounded-lg ${index === 0 ? 'bg-amber-900/20 border-amber-500/40' : 'bg-gray-800/30 border-gray-700'} border`}
                >
                  <h3 className="font-medium text-lg mb-1" style={{ color: intelligence.color }}>
                    {intelligence.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">
                    Pontuação: <span className="font-bold text-amber-400">{intelligence.score}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {intelligence.description.substring(0, 120)}...
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Button 
                onClick={() => navigate('/inteligencias-multiplas-resultados')}
                variant="outline" 
                className="text-amber-400 border-amber-500/50 hover:bg-amber-500/10"
              >
                Ver Resultados Detalhados
              </Button>
            </div>
          </div>
          
          {/* Temperament and Intelligence Relation */}
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-6 text-amber-400 text-center">
              Relação Entre Seu Temperamento e Inteligências
            </h2>
            
            <TemperamentIntelligenceRelation temperamentType={dominantTemperament} />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 mb-8">
            <Button 
              onClick={handleRetakeTests}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              refazer os testes
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
                    title: 'Meus Resultados - Teste Completo',
                    text: `Meu temperamento predominante é ${getTemperamentName(dominantTemperament)} e minha inteligência principal é ${topIntelligences[0].name}!`,
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

export default CompleteTestResults;
