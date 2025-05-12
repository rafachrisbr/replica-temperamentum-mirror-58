
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import Button from '@/components/Button';
import { useQuiz } from '@/contexts/QuizContext';
import { questions } from '@/utils/quiz';

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
  
  const isOptionSelected = currentQuestion && answers[currentQuestion.id];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
              {!isLastQuestion && <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>}
              {isLastQuestion && <span>100%</span>}
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
                  variant="secondary"
                  onClick={previousQuestion}
                >
                  Voltar
                </Button>
              )}
              
              <Button
                onClick={handleNext}
                disabled={!isOptionSelected}
                className={!isOptionSelected ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {isLastQuestion ? 'Ver resultados' : 'Próxima'}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
