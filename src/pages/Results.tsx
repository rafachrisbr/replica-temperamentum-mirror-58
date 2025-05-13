
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import TemperamentCard from '@/components/TemperamentCard';
import TemperamentChart from '@/components/TemperamentChart';
import { useQuiz } from '@/contexts/QuizContext';
import { ArrowLeft, RefreshCcw, Home } from 'lucide-react';

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
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-3xl w-full text-center space-y-8 animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wider">
            Seu Temperamento Predominante
          </h2>
          
          <div className="grid gap-6 mt-8">
            <TemperamentCard 
              temperament={dominantTemperament}
              isDominant={true}
            />
            
            <TemperamentChart results={results} />
          </div>
          
          <div className="mt-10 flex gap-4 justify-center">
            <Button 
              onClick={handleRetakeQuiz}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refazer o teste
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              <Home className="mr-2 h-4 w-4" />
              Página inicial
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-[#A9A9A9] bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#444444] pt-4"></div>
          <p className="text-[#D4AF37] font-serif uppercase italic my-3 text-center">IN TE, DOMINE, SPERAVI NON CONFUNDAR IN AETERNUM</p>
          <p className="text-[#D4AF37] font-serif uppercase my-3 text-center">DEUS CARITAS EST</p>
          <p className="text-sm my-2 text-center">© 2025 Rafael Christiano</p>
          <p className="text-sm my-2">Este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
          <p className="text-xs my-2">Fontes principais: Ensinamentos do Pe. Paulo Ricardo (curso "Os Quatro Temperamentos") e Canção Nova (artigo "Qual é o seu temperamento?").</p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
