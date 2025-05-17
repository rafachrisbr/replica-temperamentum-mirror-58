
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import IntelligenceQuestion from '@/components/IntelligenceQuestion';
import { Button } from '@/components/ui/button';
import { useIntelligences } from '@/contexts/IntelligencesContext';
import { intelligenceQuestions } from '@/utils/intelligences';
import { ArrowLeft, RefreshCcw, Home } from 'lucide-react';
import { Brain } from 'lucide-react';

const Intelligences = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    nextQuestion, 
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  } = useIntelligences();
  
  const currentQuestion = intelligenceQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === intelligenceQuestions.length - 1;
  
  const handleSelectOption = (value: number) => {
    selectAnswer(currentQuestion.id, value);
  };
  
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/inteligencias-resultados');
    } else {
      nextQuestion();
    }
  };
  
  const handlePreviousQuestion = () => {
    previousQuestion();
  };
  
  const handleResetQuiz = () => {
    resetQuiz();
  };

  const handleBackToHome = () => {
    navigate('/testes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={intelligenceQuestions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span className="first-letter:uppercase">pergunta {currentQuestionIndex + 1} de {intelligenceQuestions.length}</span>
            </div>
          </div>
          
          {/* Botões de navegação no topo */}
          <div className="mb-6 flex justify-center gap-3">
            <Button 
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <ArrowLeft className="mr-1 h-3 w-3" />
              voltar
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleResetQuiz}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <RefreshCcw className="mr-1 h-3 w-3" />
              refazer
            </Button>
            
            <Button
              variant="outline"
              onClick={handleBackToHome}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <Home className="mr-1 h-3 w-3" />
              início
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <IntelligenceQuestion
              question={currentQuestion}
              selectedValue={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
            />
            
            <div className="mt-6 w-full flex justify-center">
              <Button 
                onClick={handleNextQuestion}
                disabled={!answers[currentQuestion.id]}
                className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md px-6 py-2 w-full max-w-xs"
              >
                {isLastQuestion ? 'Ver resultados' : 'Próxima pergunta'}
              </Button>
            </div>
            
            {/* Imagem centralizada abaixo das perguntas com tamanho aumentado */}
            <div className="mt-6 flex justify-center">
              <Brain className="h-[150px] w-auto text-amber-400 opacity-20" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Intelligences;
