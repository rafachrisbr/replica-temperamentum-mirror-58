import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useQuiz } from '@/contexts/QuizContext';
import { useCompleteTest } from '@/contexts/CompleteTestContext';
import { questions } from '@/utils/quiz';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

const CompleteTest = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    previousQuestion,
    resetQuiz,
    calculateFinalResults,
    isComplete 
  } = useQuiz();
  
  const { 
    setQuickTemperamentResults, 
    currentTestStep,
    setCurrentTestStep 
  } = useCompleteTest();
  
  useEffect(() => {
    // Reset quiz state when component mounts
    resetQuiz();
  }, [resetQuiz]);
  
  useEffect(() => {
    // If the quiz is complete, save results and move to next test
    if (isComplete) {
      const results = calculateFinalResults();
      setQuickTemperamentResults(results);
      setCurrentTestStep('peHock');
      navigate('/pe-hock-teste');
    }
  }, [isComplete, calculateFinalResults, navigate, setQuickTemperamentResults, setCurrentTestStep]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleSelectOption = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId);
    
    // If this is the last question, mark the quiz as complete
    if (isLastQuestion) {
      const results = calculateFinalResults();
      setQuickTemperamentResults(results);
      setCurrentTestStep('peHock');
      navigate('/pe-hock-teste');
    } else {
      // Otherwise move to next question
      setTimeout(() => {
        // Simulate next question button click
        const nextQuestionEvent = new Event('nextQuestion');
        document.dispatchEvent(nextQuestionEvent);
        
        // Update question index in QuizContext
        // This is handled by nextQuestion() in the QuizContext
      }, 300);
    }
  };
  
  const handlePreviousQuestion = () => {
    previousQuestion();
  };
  
  const handleBackToHome = () => {
    navigate('/testes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-6 rounded-lg shadow-lg border border-gray-800 mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-wider mb-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Teste Completo
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Etapa 1: Teste Rápido de Temperamento
            </p>
            
            <p className="text-sm text-gray-400">
              Este é um teste rápido, com apenas 13 perguntas. Ele é mais prático, porém menos preciso do que os testes completos.
            </p>
          </div>
        
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span>Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
            </div>
          </div>
          
          {/* Botões de navegação no topo */}
          <div className="mb-6 flex justify-start gap-3">
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
              onClick={handleBackToHome}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <Home className="mr-1 h-3 w-3" />
              testes
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <QuizQuestion
              question={currentQuestion.text}
              options={currentQuestion.options}
              selectedOption={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompleteTest;
