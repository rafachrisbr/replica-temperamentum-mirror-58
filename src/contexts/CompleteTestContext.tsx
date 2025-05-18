
import React, { createContext, useContext, useState } from 'react';
import { TemperamentResult } from '@/utils/quiz';
import { IntelligenceResult } from '@/utils/multipleIntelligencesQuiz';

interface CompleteTestContextType {
  // Quick Temperament Test
  quickTemperamentResults: TemperamentResult[] | null;
  setQuickTemperamentResults: (results: TemperamentResult[]) => void;
  
  // Pe. Hock Test
  peHockResults: any | null;
  setPeHockResults: (results: any) => void;
  
  // Multiple Intelligences Test
  multipleIntelligencesResults: IntelligenceResult[] | null;
  setMultipleIntelligencesResults: (results: IntelligenceResult[]) => void;
  
  // Test Progress
  currentTestStep: 'quick' | 'peHock' | 'multipleIntelligences' | 'results';
  setCurrentTestStep: (step: 'quick' | 'peHock' | 'multipleIntelligences' | 'results') => void;
  
  // Reset all tests
  resetAllTests: () => void;
  
  // Test completion status
  isCompleteTestFinished: boolean;
  setCompleteTestFinished: (status: boolean) => void;
}

const CompleteTestContext = createContext<CompleteTestContextType | undefined>(undefined);

export const CompleteTestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Quick Temperament Test
  const [quickTemperamentResults, setQuickTemperamentResults] = useState<TemperamentResult[] | null>(null);
  
  // Pe. Hock Test
  const [peHockResults, setPeHockResults] = useState<any | null>(null);
  
  // Multiple Intelligences Test
  const [multipleIntelligencesResults, setMultipleIntelligencesResults] = useState<IntelligenceResult[] | null>(null);
  
  // Test Progress
  const [currentTestStep, setCurrentTestStep] = useState<'quick' | 'peHock' | 'multipleIntelligences' | 'results'>('quick');
  
  // Test completion status
  const [isCompleteTestFinished, setCompleteTestFinished] = useState(false);
  
  // Reset all tests
  const resetAllTests = () => {
    setQuickTemperamentResults(null);
    setPeHockResults(null);
    setMultipleIntelligencesResults(null);
    setCurrentTestStep('quick');
    setCompleteTestFinished(false);
  };
  
  return (
    <CompleteTestContext.Provider
      value={{
        quickTemperamentResults,
        setQuickTemperamentResults,
        peHockResults,
        setPeHockResults,
        multipleIntelligencesResults,
        setMultipleIntelligencesResults,
        currentTestStep,
        setCurrentTestStep,
        resetAllTests,
        isCompleteTestFinished,
        setCompleteTestFinished
      }}
    >
      {children}
    </CompleteTestContext.Provider>
  );
};

export const useCompleteTest = (): CompleteTestContextType => {
  const context = useContext(CompleteTestContext);
  if (context === undefined) {
    throw new Error('useCompleteTest must be used within a CompleteTestProvider');
  }
  return context;
};
