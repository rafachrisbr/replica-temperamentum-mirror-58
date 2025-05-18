
import React, { createContext, useContext, useState } from 'react';
import { questions, calculateResults, TemperamentResult } from '@/utils/quiz';

interface QuizContextType {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  results: TemperamentResult[] | null;
  selectAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateFinalResults: () => TemperamentResult[]; // Update return type to match expected type
  resetQuiz: () => void;
  isQuizComplete: boolean;
  isComplete: boolean; // Add this missing property
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<TemperamentResult[] | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isComplete, setIsComplete] = useState(false); // Add state for isComplete

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateFinalResults = (): TemperamentResult[] => {
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
    setIsQuizComplete(true);
    setIsComplete(true); // Set isComplete to true when calculations are done
    return calculatedResults; // Ensure we return the calculated results
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
    setIsQuizComplete(false);
    setIsComplete(false); // Reset isComplete state
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        results,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        calculateFinalResults,
        resetQuiz,
        isQuizComplete,
        isComplete // Include isComplete in the provider value
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
