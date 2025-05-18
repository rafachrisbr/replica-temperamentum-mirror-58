
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useIntelligences } from '@/contexts/IntelligencesContext';
import { RefreshCcw, Home, Share2 } from 'lucide-react';
import { 
  Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell, TooltipProps 
} from 'recharts';

const MultipleIntelligencesResults = () => {
  const navigate = useNavigate();
  const { results, isComplete, resetQuiz } = useIntelligences();
  
  useEffect(() => {
    if (!isComplete || !results.length) {
      navigate('/testes');
    }
  }, [isComplete, results, navigate]);
  
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/inteligencias-multiplas');
  };
  
  if (!results.length) {
    return null;
  }
  
  const chartData = results.map(result => ({
    name: result.name.replace('Inteligência ', ''),
    score: result.score,
    color: result.color
  }));
  
  const dominantIntelligence = results[0];
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
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-4xl w-full">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Resultado: Inteligências Múltiplas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Baseado na Teoria das Inteligências Múltiplas de Howard Gardner
            </p>
            
            <div className="p-4 bg-[#0a0a0a] bg-opacity-40 rounded-lg mb-4">
              <h2 className="text-xl md:text-2xl font-serif mb-2 text-amber-400">
                Sua Inteligência Predominante:
              </h2>
              <h3 className="text-xl font-medium text-white mb-1">
                {dominantIntelligence.name}
              </h3>
              <p className="text-gray-300">
                {dominantIntelligence.description}
              </p>
            </div>
          </div>
          
          <div className="bg-[#121212] p-4 md:p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-6 text-amber-400 text-center">
              Distribuição das Inteligências
            </h2>
            
            <div className="h-[400px] mb-8 animate-fade-in">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
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
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-amber-400 text-center mb-4">
                Pontuação Detalhada
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((intelligence, index) => (
                  <div 
                    key={intelligence.type}
                    className={`p-4 bg-[#0a0a0a] rounded-lg border ${
                      index === 0 ? 'border-amber-500' : 'border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">
                        {intelligence.name.replace('Inteligência ', '')}
                      </h4>
                      <span className="text-xl font-semibold" style={{ color: intelligence.color }}>
                        {intelligence.score}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${(intelligence.score / totalMaxScore) * 100}%`,
                          backgroundColor: intelligence.color 
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-right">
                      {Math.round((intelligence.score / totalMaxScore) * 100)}% do máximo
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-lg border border-gray-800 mb-8">
            <h2 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">
              Sobre as Inteligências Múltiplas
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                A Teoria das Inteligências Múltiplas foi desenvolvida pelo psicólogo Howard Gardner e sugere 
                que a inteligência não é um conceito unitário, mas sim um conjunto de capacidades, talentos 
                ou habilidades mentais distintas.
              </p>
              <p>
                Gardner propôs inicialmente sete inteligências básicas, argumentando que cada pessoa possui 
                todas elas em diferentes graus de desenvolvimento. Conhecer seu perfil de inteligências pode 
                ajudar a entender melhor suas habilidades naturais e áreas de potencial desenvolvimento.
              </p>
              <p>
                Lembre-se que estas inteligências podem ser desenvolvidas e aprimoradas ao longo da vida através 
                de prática e exposição a experiências enriquecedoras nas respectivas áreas.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
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
                    title: 'Meu Resultado: Inteligências Múltiplas',
                    text: `Minha inteligência dominante é ${dominantIntelligence.name} com ${dominantIntelligence.score} pontos!`,
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

export default MultipleIntelligencesResults;
