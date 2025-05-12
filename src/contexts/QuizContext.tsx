
import React, { createContext, useContext, useState } from 'react';
import { questions, calculateResults, TemperamentResult } from '@/utils/quiz';

interface QuizContextType {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  results: TemperamentResult[] | null;
  selectAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateFinalResults: () => void;
  resetQuiz: () => void;
  isQuizComplete: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<TemperamentResult[] | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

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

  const calculateFinalResults = () => {
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
    setIsQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
    setIsQuizComplete(false);
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
        isQuizComplete
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
