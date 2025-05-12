
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';
import { questions } from '@/utils/quiz';
import { ArrowLeft } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    nextQuestion, 
    previousQuestion,
    calculateFinalResults
  } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  
  const handleSelectOption = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId);
  };
  
  const handleNext = () => {
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };
  
  const isOptionSelected = currentQuestion && answers[currentQuestion.id];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span>Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center">
            <QuizQuestion
              question={currentQuestion.text}
              options={currentQuestion.options}
              selectedOption={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
            />
            
            <div className="mt-10 flex gap-4">
              {!isFirstQuestion && (
                <Button 
                  variant="outline"
                  onClick={previousQuestion}
                  className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide rounded-md"
                >
                  Voltar
                </Button>
              )}
              
              <Button
                onClick={handleNext}
                disabled={!isOptionSelected}
                className={`bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-colors uppercase font-semibold tracking-wide rounded-md ${!isOptionSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLastQuestion ? 'Ver resultados' : 'Próxima'}
              </Button>
            </div>

            <div className="mt-8">
              <Button
                variant="ghost"
                onClick={handleBackToHome}
                className="text-[#D4AF37] hover:text-[#E5BF48] hover:bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para página inicial
              </Button>
            </div>
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

export default Quiz;
