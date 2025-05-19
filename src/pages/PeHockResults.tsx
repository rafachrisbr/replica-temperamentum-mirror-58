
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTemperamentDescription } from '@/utils/peHockQuiz';
import TemperamentDetails from '@/components/TemperamentDetails';
import TemperamentScoreTable from '@/components/TemperamentScoreTable';
import ResultActionButtons from '@/components/ResultActionButtons';
import ResultsHeader from '@/components/ResultsHeader';

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
  
  // Get the second temperament
  const secondTemperament = sortedTemperaments[1] ? sortedTemperaments[1].key : '';
  const secondTemperamentDescription = secondTemperament ? getTemperamentDescription(secondTemperament) : '';
  
  const totalPoints = Object.values(results).reduce((sum, score) => sum + score, 0);
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 animate-fadeIn">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <ResultsHeader 
            title="seu temperamento predominante"
            subtitle={getTemperamentName(dominantTemperament)}
          />
          
          {/* Resultados detalhados - Temperamentos principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Temperamento Dominante */}
            <TemperamentDetails 
              temperamentType={dominantTemperament}
              value={sortedTemperaments[0].value}
              totalPoints={totalPoints}
              isPrimary={true}
              description={temperamentDescription}
            />
            
            {/* Segundo Temperamento */}
            {secondTemperament && (
              <TemperamentDetails 
                temperamentType={secondTemperament}
                value={sortedTemperaments[1].value}
                totalPoints={totalPoints}
                description={secondTemperamentDescription}
              />
            )}
          </div>
          
          {/* Tabela de pontuação */}
          <TemperamentScoreTable 
            temperaments={sortedTemperaments}
            totalPoints={totalPoints}
            getTemperamentName={getTemperamentName}
            getTemperamentColor={getTemperamentColor}
          />
          
          <div className="text-center text-sm text-gray-500 mt-2">
            Baseado no Questionário dos Temperamentos do Pe. Hock (edição brasileira).
          </div>
          
          <ResultActionButtons 
            handleRetakeTest={handleRetakeTest}
            shareTitle="Meu Resultado - Teste de Temperamento Pe. Hock"
            shareText={`Meu temperamento predominante é ${getTemperamentName(dominantTemperament)}!`}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeHockResults;
