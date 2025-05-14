
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LatinPhrase from '@/components/LatinPhrase';
import Footer from '@/components/Footer';
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
  const secondTemperament = results[1];
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <LatinPhrase />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fadeIn">
          <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-wider first-letter:uppercase">
            seu temperamento predominante
          </h2>
          
          <div className="grid gap-6 mt-8">
            <TemperamentCard 
              temperament={dominantTemperament}
              isDominant={true}
            />
            
            <TemperamentChart results={[dominantTemperament, secondTemperament]} />
          </div>
          
          <div className="mt-10 flex gap-4 justify-center">
            <Button 
              onClick={handleRetakeQuiz}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              refazer o teste
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md"
            >
              <Home className="mr-2 h-4 w-4" />
              página inicial
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
