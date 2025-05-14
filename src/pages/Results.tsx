
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LatinPhrase from '@/components/LatinPhrase';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import TemperamentCard from '@/components/TemperamentCard';
import TemperamentChart from '@/components/TemperamentChart';
import { useQuiz } from '@/contexts/QuizContext';
import { ArrowLeft, RefreshCcw, Home, Share2, BookOpen } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const { results, resetQuiz, isQuizComplete } = useQuiz();
  
  useEffect(() => {
    if (!isQuizComplete && !results) {
      navigate('/');
    }
  }, [isQuizComplete, results, navigate]);
  
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };
  
  if (!results) {
    return null;
  }
  
  const dominantTemperament = results[0];
  const secondTemperament = results[1];

  const getTemperamentColor = (type: string) => {
    switch (type) {
      case 'sanguine':
        return '#FFD700'; // Amarelo
      case 'choleric':
        return '#FF0000'; // Vermelho
      case 'melancholic':
        return '#808080'; // Cinza
      case 'phlegmatic':
        return '#008000'; // Verde
      default:
        return '#D4AF37';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <LatinPhrase />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 animate-fadeIn">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                seu temperamento predominante
              </span>
            </h2>
            
            <div className="inline-block p-3 md:p-4 bg-[#000000] bg-opacity-40 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-serif uppercase" style={{ color: getTemperamentColor(dominantTemperament.type) }}>
                {dominantTemperament.name}
              </h3>
              <p className="text-sm md:text-base text-gray-300 italic mt-1">"{dominantTemperament.shortDescription || 'Conheça mais sobre este temperamento'}"</p>
            </div>
          </div>
          
          <div className="grid gap-6 md:gap-8 mt-4 md:mt-8">
            <TemperamentCard 
              temperament={dominantTemperament}
              isDominant={true}
            />
            
            <div className="mt-6 animate-fadeIn" style={{animationDelay: "0.3s"}}>
              <TemperamentChart results={[dominantTemperament, secondTemperament]} />
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
              onClick={() => navigate('/')}
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
                    title: 'Meu Resultado - Teste dos Temperamentos',
                    text: `Meu temperamento predominante é ${dominantTemperament.name}!`,
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
              onClick={() => navigate('/temperamentos')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              saiba mais
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
