
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import TemperamentCard from '@/components/TemperamentCard';
import { useQuiz } from '@/contexts/QuizContext';
import { ArrowLeft } from 'lucide-react';

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
            Seu Temperamento Predominante é: {dominantTemperament.name}
          </h2>
          
          <div className="grid gap-6 mt-8">
            <TemperamentCard 
              temperament={dominantTemperament}
              isDominant={true}
            />
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-serif mb-4 text-amber-400">Outros Temperamentos em sua Personalidade</h3>
            <div className="grid gap-4">
              {results.slice(1).map((temperament) => (
                <TemperamentCard
                  key={temperament.type}
                  temperament={temperament}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleRetakeQuiz}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              Refazer o teste
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              Página inicial
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-[#A9A9A9] bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#444444] pt-4"></div>
          <p className="text-[#D4AF37] font-serif uppercase italic my-3">IN TE, DOMINE, SPERAVI NON CONFUNDAR IN AETERNUM</p>
          <p className="text-sm my-2">Este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
          <p className="text-xs my-2">Fontes principais: Ensinamentos do Pe. Paulo Ricardo (curso "Os Quatro Temperamentos") e Canção Nova (artigo "Qual é o seu temperamento?").</p>
          <p className="text-xs my-2">© 2025 Rafael Christiano</p>
          <p className="text-[#D4AF37] font-serif uppercase my-3">DEUS CARITAS EST</p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
