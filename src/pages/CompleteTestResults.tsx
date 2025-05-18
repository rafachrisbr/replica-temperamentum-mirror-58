
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

const CompleteTestResults = () => {
  const navigate = useNavigate();
  const { 
    quickTemperamentResults, 
    peHockResults, 
    multipleIntelligencesResults, 
    resetAllTests,
    setCompleteTestFinished,
    isCompleteTestFinished
  } = useCompleteTest();
  
  useEffect(() => {
    if (!quickTemperamentResults || !peHockResults || !multipleIntelligencesResults) {
      navigate('/testes');
    } else {
      setCompleteTestFinished(true);
    }
  }, [quickTemperamentResults, peHockResults, multipleIntelligencesResults, navigate, setCompleteTestFinished]);
  
  const handleRetakeTest = () => {
    resetAllTests();
    navigate('/teste-completo');
  };
  
  if (!quickTemperamentResults || !peHockResults || !multipleIntelligencesResults || !isCompleteTestFinished) {
    return null;
  }
  
  const dominantQuickTemperament = quickTemperamentResults[0];
  
  // Format Pe. Hock results for display
  const peHockTemperaments = Object.entries(peHockResults).map(([type, score]) => ({
    type,
    score: Number(score),
    name: type.charAt(0).toUpperCase() + type.slice(1)
  })).sort((a, b) => b.score - a.score);
  
  const dominantPeHockTemperament = peHockTemperaments[0];
  
  // Prepare multiple intelligences data for chart
  const intelligencesChartData = multipleIntelligencesResults.map(result => ({
    name: result.name.replace('Inteligência ', ''),
    score: result.score,
    color: result.color
  }));
  
  const dominantIntelligence = multipleIntelligencesResults[0];
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
          
          {/* Temperamentos - Síntese dos dois testes */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Temperamento Dominante
            </h2>
            
            <div className="p-4 bg-[#0a0a0a] bg-opacity-40 rounded-lg mb-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-medium text-amber-400">
                    {dominantPeHockTemperament.name}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {getTemperamentDescription(dominantPeHockTemperament.type)}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-400">Teste Rápido:</span>
                  <span className="bg-[#1a1a1a] px-2 py-1 rounded text-sm">
                    {dominantQuickTemperament.name} ({dominantQuickTemperament.percentage}%)
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-center text-gray-300 mb-3">Teste Pe. Hock</h3>
                <div className="p-4 bg-[#0a0a0a] rounded-lg">
                  {peHockTemperaments.map((temp, index) => (
                    <div key={temp.type} className="mb-2 last:mb-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className={index === 0 ? 'text-amber-400 font-medium' : 'text-gray-300'}>
                          {temp.name}
                        </span>
                        <span className={index === 0 ? 'text-amber-400 font-medium' : 'text-gray-300'}>
                          {temp.score}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${index === 0 ? 'bg-amber-400' : 'bg-gray-600'}`}
                          style={{ width: `${(temp.score / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-center text-gray-300 mb-3">Teste Rápido</h3>
                <div className="p-4 bg-[#0a0a0a] rounded-lg">
                  <TemperamentChart results={quickTemperamentResults} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Inteligências Múltiplas */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-6 text-amber-400 text-center">
              Inteligências Múltiplas
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
          </div>
          
          {/* Correlações e orientações */}
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Análise Combinada e Orientações
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                <span className="font-medium text-amber-400">Combinação de temperamento e inteligências:</span> Seu temperamento {dominantPeHockTemperament.name} 
                combinado com sua {dominantIntelligence.name} predominante cria um perfil único de aprendizagem e interação.
                Os temperamentos influenciam como expressamos nossas inteligências e como abordamos desafios.
              </p>
              
              <p>
                <span className="font-medium text-amber-400">Potencialidades:</span> Com seu temperamento {dominantPeHockTemperament.name}, 
                você tende a expressar sua {dominantIntelligence.name} de forma {dominantPeHockTemperament.type === 'choleric' ? 'determinada e focada em resultados' : 
                  dominantPeHockTemperament.type === 'sanguine' ? 'entusiástica e expressiva' :
                  dominantPeHockTemperament.type === 'melancholic' ? 'detalhista e profunda' :
                  'equilibrada e estável'}.
                Isso pode ser uma grande vantagem em contextos que valorizem essas qualidades.
              </p>
              
              <p>
                <span className="font-medium text-amber-400">Sugestões de desenvolvimento:</span>
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Busque atividades que combinem seu temperamento com suas inteligências predominantes.
                </li>
                <li>
                  Trabalhe no desenvolvimento de outras inteligências menos dominantes para um perfil mais equilibrado.
                </li>
                <li>
                  Considere como seu temperamento pode estar influenciando a expressão de suas inteligências - consciência é o primeiro passo para o crescimento.
                </li>
                <li>
                  Explore carreiras e hobbies que valorizem tanto seu temperamento quanto suas inteligências predominantes.
                </li>
              </ul>
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
                    text: `Meu temperamento dominante é ${dominantPeHockTemperament.name} e minha inteligência predominante é ${dominantIntelligence.name}!`,
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
