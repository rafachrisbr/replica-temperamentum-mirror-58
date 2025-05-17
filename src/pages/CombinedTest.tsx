
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import CombinedQuestion from '@/components/CombinedQuestion';
import { Button } from '@/components/ui/button';
import { useCombinedTest } from '@/contexts/CombinedTestContext';
import { ArrowLeft, RefreshCcw, Home } from 'lucide-react';

const CombinedTest = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    temperamentAnswers, 
    intelligenceAnswers,
    combinedQuestions,
    selectTemperamentAnswer,
    selectIntelligenceAnswer,
    nextQuestion, 
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  } = useCombinedTest();
  
  const currentQuestion = combinedQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === combinedQuestions.length - 1;
  
  const handleSelectTemperamentOption = (optionId: string) => {
    selectTemperamentAnswer(currentQuestion.originalId, optionId);
    
    // Auto advance after selecting
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/resultados-combinados');
    } else {
      nextQuestion();
    }
  };
  
  const handleSelectIntelligenceOption = (value: number) => {
    selectIntelligenceAnswer(currentQuestion.originalId, value);
    
    // Auto advance after selecting
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/resultados-combinados');
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

  const isAnswered = () => {
    if (currentQuestion.type === 'temperament') {
      return !!temperamentAnswers[currentQuestion.originalId];
    } else {
      return !!intelligenceAnswers[currentQuestion.originalId];
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={combinedQuestions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span className="first-letter:uppercase">pergunta {currentQuestionIndex + 1} de {combinedQuestions.length}</span>
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
            <CombinedQuestion
              id={currentQuestion.id}
              text={currentQuestion.text}
              type={currentQuestion.type}
              originalId={currentQuestion.originalId}
              selectedTemperamentOption={currentQuestion.type === 'temperament' ? 
                temperamentAnswers[currentQuestion.originalId] || null : null}
              selectedIntelligenceValue={currentQuestion.type === 'intelligence' ? 
                intelligenceAnswers[currentQuestion.originalId] || null : null}
              onSelectTemperamentOption={handleSelectTemperamentOption}
              onSelectIntelligenceOption={handleSelectIntelligenceOption}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CombinedTest;
