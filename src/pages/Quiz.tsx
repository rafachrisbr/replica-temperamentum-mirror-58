
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';
import { questions } from '@/utils/quiz';
import { ArrowLeft, RefreshCcw, Home } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    nextQuestion, 
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleSelectOption = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId);
    
    // Avanço automático após selecionar uma opção
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/results');
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
    navigate('/');
  };

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
              <span className="first-letter:uppercase">pergunta {currentQuestionIndex + 1} de {questions.length}</span>
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
            <QuizQuestion
              question={currentQuestion.text}
              options={currentQuestion.options}
              selectedOption={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
            />
            
            {/* Imagem centralizada abaixo das perguntas */}
            <div className="mt-6 flex justify-center">
              <img 
                src="/lovable-uploads/a4947d4e-6c78-4866-b111-328cfdc3e4f8.png" 
                alt="Santo Agostinho" 
                className="h-[100px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-[#A9A9A9] bg-[#121212]">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-[#444444] pt-4"></div>
          <p className="text-[#D4AF37] font-serif uppercase my-3 text-center">IN TE, DOMINE, SPERAVI NON CONFUNDAR IN AETERNUM</p>
          <p className="text-[#D4AF37] font-serif uppercase my-3 text-center">DEUS CARITAS EST</p>
          <p className="text-sm my-2 text-center first-letter:uppercase">© 2025 rafael christiano</p>
          <p className="text-sm my-2 first-letter:uppercase">este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
          <p className="text-xs my-2 first-letter:uppercase">fontes principais: ensinamentos do pe. paulo ricardo (curso "os quatro temperamentos") e canção nova (artigo "qual é o seu temperamento?").</p>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
