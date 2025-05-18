
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCompleteTest } from '@/contexts/CompleteTestContext';
import { RefreshCcw, Home, Share2 } from 'lucide-react';
import TemperamentChart from '@/components/TemperamentChart';
import { 
  Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell, TooltipProps 
} from 'recharts';
import { getTemperamentDescription } from '@/utils/peHockQuiz';
import DetailedIntelligenceDescription from '@/components/DetailedIntelligenceDescription';
import TemperamentIntelligenceRelation from '@/components/TemperamentIntelligenceRelation';

const CompleteTestResults = () => {
  const navigate = useNavigate();
  const { 
    peHockResults, 
    multipleIntelligencesResults, 
    resetAllTests,
    setCompleteTestFinished,
    isCompleteTestFinished
  } = useCompleteTest();
  
  useEffect(() => {
    if (!peHockResults || !multipleIntelligencesResults) {
      navigate('/testes');
    } else {
      setCompleteTestFinished(true);
    }
  }, [peHockResults, multipleIntelligencesResults, navigate, setCompleteTestFinished]);
  
  const handleRetakeTest = () => {
    resetAllTests();
    navigate('/teste-completo');
  };
  
  if (!peHockResults || !multipleIntelligencesResults || !isCompleteTestFinished) {
    return null;
  }
  
  // Format Pe. Hock results for display
  const peHockTemperaments = Object.entries(peHockResults).map(([type, score]) => ({
    type,
    score: Number(score),
    name: type.charAt(0).toUpperCase() + type.slice(1)
  })).sort((a, b) => b.score - a.score);
  
  const dominantPeHockTemperament = peHockTemperaments[0];
  const secondaryPeHockTemperament = peHockTemperaments[1];
  
  // Prepare multiple intelligences data for chart
  const intelligencesChartData = multipleIntelligencesResults.map(result => ({
    name: result.name.replace('Inteligência ', ''),
    score: result.score,
    color: result.color
  }));
  
  const dominantIntelligence = multipleIntelligencesResults[0];
  const secondaryIntelligence = multipleIntelligencesResults[1];
  const totalMaxScore = 70; // 10 stages × 7 points max

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#121212] p-3 border border-gray-700 rounded-lg shadow">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-amber-400">Pontuação: {payload[0].value}</p>
          <p className="text-sm text-gray-300">
            {Math.round((Number(payload[0].value) / totalMaxScore) * 100)}% do máximo
          </p>
        </div>
      );
    }
    return null;
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

  const totalPeHockPoints = Object.values(peHockResults).reduce(
    (sum, score) => sum + (typeof score === 'number' ? score : 0), 
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 animate-fadeIn">
        <div className="max-w-4xl w-full">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Resultados Completos
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              Análise integrada de temperamento e inteligências
            </p>
          </div>
          
          {/* Temperamentos */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Resultados do Teste de Temperamento
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Temperamento Dominante */}
              <div className="p-6 bg-[#0a0a0a] rounded-lg border border-amber-500/30 text-left">
                <h3 className="text-xl font-serif uppercase mb-2 text-amber-400">
                  {getTemperamentName(dominantPeHockTemperament.type)}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-amber-500/20 px-2 py-1 rounded text-amber-300">
                    Predominante
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {Math.round((dominantPeHockTemperament.score / totalPeHockPoints) * 100)}%
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{getTemperamentDescription(dominantPeHockTemperament.type)}</p>
              </div>
              
              {/* Segundo Temperamento */}
              <div className="p-6 bg-[#0a0a0a] rounded-lg border border-gray-700 text-left">
                <h3 className="text-xl font-serif uppercase mb-2 text-gray-200">
                  {getTemperamentName(secondaryPeHockTemperament.type)}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-gray-700/30 px-2 py-1 rounded text-gray-300">
                    Secundário
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {Math.round((secondaryPeHockTemperament.score / totalPeHockPoints) * 100)}%
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{getTemperamentDescription(secondaryPeHockTemperament.type)}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {peHockTemperaments.map((temp, index) => (
                <div key={temp.type} className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-white">
                        {getTemperamentName(temp.type)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-amber-400">
                        {temp.score} pontos
                      </span>
                      <span className="text-sm ml-1 text-gray-400">
                        ({Math.round((temp.score / totalPeHockPoints) * 100)}%)
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
                    <div 
                      style={{ 
                        width: `${Math.round((temp.score / totalPeHockPoints) * 100)}%`,
                        backgroundColor: index === 0 ? '#D4AF37' : 
                                        index === 1 ? '#9CA3AF' :
                                        '#4B5563'
                      }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Inteligências Múltiplas */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-6 text-amber-400 text-center">
              Resultados das Inteligências Múltiplas
            </h2>
            
            <div className="p-4 bg-[#0a0a0a] bg-opacity-40 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-amber-400 mb-1">
                {dominantIntelligence.name}
              </h3>
              <p className="text-gray-300 text-sm">
                {dominantIntelligence.description}
              </p>
            </div>
            
            <div className="h-[300px] mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={intelligencesChartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    tick={{ fill: '#bbb', fontSize: 12 }}
                    height={60}
                  />
                  <YAxis 
                    domain={[0, totalMaxScore]} 
                    tick={{ fill: '#bbb' }} 
                    label={{ 
                      value: 'Pontuação', 
                      angle: -90, 
                      position: 'insideLeft', 
                      style: { fill: '#bbb' } 
                    }} 
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {intelligencesChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <DetailedIntelligenceDescription 
                type={dominantIntelligence.type} 
                name={dominantIntelligence.name} 
              />
              
              <DetailedIntelligenceDescription 
                type={secondaryIntelligence.type} 
                name={secondaryIntelligence.name} 
              />
            </div>
          </div>
          
          {/* Relação Temperamento x Inteligências */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-6 text-amber-400 text-center">
              Relação entre seu Temperamento e Inteligências
            </h2>
            
            <div className="p-5 bg-[#0a0a0a] rounded-lg border border-gray-700 mb-6">
              <h3 className="text-lg font-medium text-amber-400 mb-3">
                Como seu temperamento {getTemperamentName(dominantPeHockTemperament.type)} influencia suas inteligências
              </h3>
              <p className="text-gray-300 mb-4">
                Cada temperamento possui características que influenciam como expressamos e desenvolvemos nossas inteligências. 
                Confira abaixo como seu temperamento pode interagir com cada tipo de inteligência:
              </p>
              
              <div className="space-y-6">
                {multipleIntelligencesResults.map(intelligence => (
                  <TemperamentIntelligenceRelation
                    key={intelligence.type}
                    temperamentType={dominantPeHockTemperament.type}
                    intelligenceType={intelligence.type}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-amber-400 mb-3">Sugestões para seu desenvolvimento</h3>
              <div className="text-gray-300 space-y-3">
                <p>
                  Com seu temperamento predominante {getTemperamentName(dominantPeHockTemperament.type)} e suas inteligências mais fortes ({dominantIntelligence.name.replace('Inteligência ', '')} e {secondaryIntelligence.name.replace('Inteligência ', '')}), você pode:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Buscar atividades que combinem seu temperamento com suas inteligências predominantes.</li>
                  <li>Trabalhar no desenvolvimento de outras inteligências menos dominantes para um perfil mais equilibrado.</li>
                  <li>Considerar como seu temperamento pode estar influenciando a expressão de suas inteligências.</li>
                  <li>Explorar carreiras e hobbies que valorizem tanto seu temperamento quanto suas inteligências predominantes.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fadeIn" style={{animationDelay: "0.5s"}}>
            <Button 
              onClick={handleRetakeTest}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              refazer o teste completo
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
                    title: 'Meus Resultados Completos',
                    text: `Meu temperamento dominante é ${getTemperamentName(dominantPeHockTemperament.type)} e minha inteligência predominante é ${dominantIntelligence.name.replace('Inteligência ', '')}!`,
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
