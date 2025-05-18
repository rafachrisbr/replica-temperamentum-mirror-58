
import React, { createContext, useContext, useState } from 'react';
import {
  calculateMultipleIntelligencesResults,
  IntelligenceResult
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
  resetQuiz: () => {}
};

const IntelligencesContext = createContext<IntelligencesContextType>(defaultContext);

export const IntelligencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({});
  const [results, setResults] = useState<IntelligenceResult[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
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
        resetQuiz
      }}
    >
      {children}
    </IntelligencesContext.Provider>
  );
};

export const useIntelligences = () => useContext(IntelligencesContext);
