
import React, { createContext, useContext, useState } from 'react';
import {
  calculateMultipleIntelligencesResults,
  IntelligenceResult,
  multipleIntelligencesStages
} from '@/utils/multipleIntelligencesQuiz';

interface IntelligencesContextType {
  currentStageIndex: number;
  setCurrentStageIndex: (index: number) => void;
  answers: Record<string, Record<string, number>>;
  setAnswers: (answers: Record<string, Record<string, number>>) => void;
  results: IntelligenceResult[];
  isComplete: boolean;
  setIsComplete: (isComplete: boolean) => void;
  calculateResults: () => IntelligenceResult[];
  resetQuiz: () => void;
  // Adding missing properties used in Intelligences.tsx
  currentQuestionIndex: number;
  selectAnswer: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateFinalResults: () => IntelligenceResult[];
  isQuizComplete: boolean;
}

const defaultContext: IntelligencesContextType = {
  currentStageIndex: 0,
  setCurrentStageIndex: () => {},
  answers: {},
  setAnswers: () => {},
  results: [],
  isComplete: false,
  setIsComplete: () => {},
  calculateResults: () => [],
  resetQuiz: () => {},
  // Default values for added properties
  currentQuestionIndex: 0,
  selectAnswer: () => {},
  nextQuestion: () => {},
  previousQuestion: () => {},
  calculateFinalResults: () => [],
  isQuizComplete: false
};

const IntelligencesContext = createContext<IntelligencesContextType>(defaultContext);

export const IntelligencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({});
  const [results, setResults] = useState<IntelligenceResult[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  
  const calculateResults = (): IntelligenceResult[] => {
    const resultsData = calculateMultipleIntelligencesResults(answers);
    setResults(resultsData);
    return resultsData;
  };
  
  const resetQuiz = () => {
    setCurrentStageIndex(0);
    setAnswers({});
    setResults([]);
    setIsComplete(false);
    setIsQuizComplete(false);
  };
  
  // Implement the missing methods that are used in Intelligences.tsx
  const currentQuestionIndex = currentStageIndex; // Alias for compatibility
  
  const selectAnswer = (questionId: string, value: number) => {
    const stageId = multipleIntelligencesStages[currentStageIndex].id;
    
    setAnswers(prev => ({
      ...prev,
      [stageId]: {
        ...(prev[stageId] || {}),
        [questionId]: value
      }
    }));
  };
  
  const nextQuestion = () => {
    if (currentStageIndex < multipleIntelligencesStages.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
    } else {
      setIsQuizComplete(true);
    }
  };
  
  const previousQuestion = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(prev => prev - 1);
    }
  };
  
  const calculateFinalResults = (): IntelligenceResult[] => {
    const resultsData = calculateResults();
    setIsQuizComplete(true);
    return resultsData;
  };
  
  return (
    <IntelligencesContext.Provider
      value={{
        currentStageIndex,
        setCurrentStageIndex,
        answers,
        setAnswers,
        results,
        isComplete,
        setIsComplete,
        calculateResults,
        resetQuiz,
        // Added properties
        currentQuestionIndex,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        calculateFinalResults,
        isQuizComplete
      }}
    >
      {children}
    </IntelligencesContext.Provider>
  );
};

export const useIntelligences = () => useContext(IntelligencesContext);
