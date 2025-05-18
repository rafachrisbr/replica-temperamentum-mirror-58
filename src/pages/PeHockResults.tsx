
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RefreshCcw, Home, Share2 } from 'lucide-react';
import { getTemperamentDescription } from '@/utils/peHockQuiz';

type TemperamentScores = {
  choleric: number;
  sanguine: number;
  melancholic: number;
  phlegmatic: number;
};

const PeHockResults = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<TemperamentScores | null>(null);
  const [dominantTemperament, setDominantTemperament] = useState<string>('');
  
  useEffect(() => {
    const storedResults = sessionStorage.getItem('peHockResults');
    
    if (storedResults) {
      const parsedResults = JSON.parse(storedResults) as TemperamentScores;
      setResults(parsedResults);
      
      // Determine dominant temperament
      const tempEntries = Object.entries(parsedResults);
      const dominant = tempEntries.reduce((max, current) => 
        current[1] > max[1] ? current : max, tempEntries[0]
      )[0];
      
      setDominantTemperament(dominant);
    } else {
      // If no results found, redirect to test page
      navigate('/pe-hock-teste');
    }
  }, [navigate]);
  
  const handleRetakeTest = () => {
    sessionStorage.removeItem('peHockResults');
    navigate('/pe-hock-teste');
  };
  
  const getTemperamentName = (key: string): string => {
    switch (key) {
      case 'choleric': return 'Colérico';
      case 'sanguine': return 'Sanguíneo';
      case 'melancholic': return 'Melancólico';
      case 'phlegmatic': return 'Fleumático';
      default: return key;
    }
  };
  
  const getTemperamentColor = (type: string) => {
    switch (type) {
      case 'choleric':
        return '#FF0000'; // Vermelho
      case 'sanguine':
        return '#FFD700'; // Amarelo
      case 'melancholic':
        return '#808080'; // Cinza
      case 'phlegmatic':
        return '#008000'; // Verde
      default:
        return '#D4AF37';
    }
  };
  
  if (!results) {
    return null;
  }
  
  const temperamentDescription = getTemperamentDescription(dominantTemperament);
  const sortedTemperaments = Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => ({ key, value }));
  
  // Obter o segundo temperamento mais forte
  const secondTemperament = sortedTemperaments[1] ? sortedTemperaments[1].key : '';
  const secondTemperamentDescription = secondTemperament ? getTemperamentDescription(secondTemperament) : '';
  
  const totalPoints = Object.values(results).reduce((sum, score) => sum + score, 0);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 animate-fadeIn">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                seu temperamento predominante
              </span>
            </h2>
            
            <div className="inline-block p-3 md:p-4 bg-[#000000] bg-opacity-40 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-serif uppercase" style={{ color: getTemperamentColor(dominantTemperament) }}>
                {getTemperamentName(dominantTemperament)}
              </h3>
              <p className="text-sm md:text-base text-gray-300 italic mt-1">
                Teste Pe. Hock
              </p>
            </div>
          </div>
          
          {/* Resultados detalhados - Temperamentos principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Temperamento Dominante */}
            <div className="p-6 bg-[#121212] rounded-lg border border-amber-500/30 text-left">
              <h3 className="text-xl font-serif uppercase mb-2 text-amber-400">
                {getTemperamentName(dominantTemperament)}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm bg-amber-500/20 px-2 py-1 rounded text-amber-300">
                  Predominante
                </span>
                <span className="text-lg font-semibold text-white">
                  {Math.round((sortedTemperaments[0].value / totalPoints) * 100)}%
                </span>
              </div>
              <p className="text-gray-300 text-sm">{temperamentDescription}</p>
            </div>
            
            {/* Segundo Temperamento */}
            {secondTemperament && (
              <div className="p-6 bg-[#121212] rounded-lg border border-gray-700 text-left">
                <h3 className="text-xl font-serif uppercase mb-2 text-gray-200">
                  {getTemperamentName(secondTemperament)}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-gray-700/30 px-2 py-1 rounded text-gray-300">
                    Secundário
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {Math.round((sortedTemperaments[1].value / totalPoints) * 100)}%
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{secondTemperamentDescription}</p>
              </div>
            )}
          </div>
          
          {/* Tabela de pontuação */}
          <div className="p-6 bg-[#121212] rounded-lg border border-gray-800">
            <h3 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Pontuação por Temperamento</h3>
            <div className="space-y-4">
              {sortedTemperaments.map((temp, index) => (
                <div key={temp.key} className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-white">
                        {getTemperamentName(temp.key)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-amber-400">
                        {temp.value} pontos
                      </span>
                      <span className="text-sm ml-1 text-gray-400">
                        ({Math.round((temp.value / totalPoints) * 100)}%)
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div 
                      style={{ 
                        width: `${Math.round((temp.value / totalPoints) * 100)}%`,
                        backgroundColor: getTemperamentColor(temp.key)
                      }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-2">
            Baseado no Questionário dos Temperamentos do Pe. Hock (edição brasileira).
          </div>
          
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 justify-center animate-fadeIn" style={{animationDelay: "0.5s"}}>
            <Button 
              onClick={handleRetakeTest}
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
                    title: 'Meu Resultado - Teste de Temperamento Pe. Hock',
                    text: `Meu temperamento predominante é ${getTemperamentName(dominantTemperament)}!`,
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

export default PeHockResults;
