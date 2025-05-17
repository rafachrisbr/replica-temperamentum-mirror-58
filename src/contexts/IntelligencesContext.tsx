
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IntelligenceResult, intelligenceQuestions, calculateIntelligenceResults } from '@/utils/intelligences';

interface IntelligencesContextType {
  currentQuestionIndex: number;
  answers: Record<string, number>;
  results: IntelligenceResult[] | null;
  isQuizComplete: boolean;
  selectAnswer: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  calculateFinalResults: () => void;
}

const IntelligencesContext = createContext<IntelligencesContextType | undefined>(undefined);

export const useIntelligences = () => {
  const context = useContext(IntelligencesContext);
  if (context === undefined) {
    throw new Error('useIntelligences must be used within an IntelligencesProvider');
  }
  return context;
};

interface IntelligencesProviderProps {
  children: ReactNode;
}

export const IntelligencesProvider = ({ children }: IntelligencesProviderProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<IntelligenceResult[] | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const selectAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < intelligenceQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
    setIsQuizComplete(false);
  };

  const calculateFinalResults = () => {
    const calculatedResults = calculateIntelligenceResults(answers);
    setResults(calculatedResults);
    setIsQuizComplete(true);
  };

  const value = {
    currentQuestionIndex,
    answers,
    results,
    isQuizComplete,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  };

  return (
    <IntelligencesContext.Provider value={value}>
      {children}
    </IntelligencesContext.Provider>
  );
};
