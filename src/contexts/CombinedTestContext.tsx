
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { questions } from '@/utils/quiz';
import { intelligenceQuestions } from '@/utils/intelligences';
import { TemperamentResult, calculateResults } from '@/utils/quiz';
import { IntelligenceResult, calculateIntelligenceResults } from '@/utils/intelligences';

interface CombinedQuestion {
  id: string;
  text: string;
  type: 'temperament' | 'intelligence';
  originalId: string;
}

// Create a set of selected questions from both tests
const createCombinedQuestions = (): CombinedQuestion[] => {
  // Use all temperament questions
  const temperamentQuestions = questions.map(q => ({
    id: `t_${q.id}`,
    text: q.text,
    type: 'temperament' as const,
    originalId: q.id
  }));
  
  // Use one question per intelligence type
  const intelligenceTypes = [
    'linguistic', 'logical', 'spatial', 'musical', 
    'bodily', 'interpersonal', 'intrapersonal', 'naturalist'
  ];
  
  const selectedIntelligenceQuestions: CombinedQuestion[] = [];
  
  intelligenceTypes.forEach(type => {
    const questionsOfType = intelligenceQuestions.filter(q => q.type === type);
    if (questionsOfType.length > 0) {
      const selectedQuestion = questionsOfType[0];
      selectedIntelligenceQuestions.push({
        id: `i_${selectedQuestion.id}`,
        text: selectedQuestion.text,
        type: 'intelligence' as const,
        originalId: selectedQuestion.id
      });
    }
  });
  
  // Combine and shuffle
  return [...temperamentQuestions, ...selectedIntelligenceQuestions]
    .sort(() => Math.random() - 0.5);
};

const combinedQuestions = createCombinedQuestions();

interface CombinedTestContextType {
  currentQuestionIndex: number;
  temperamentAnswers: Record<string, string>;
  intelligenceAnswers: Record<string, number>;
  combinedQuestions: CombinedQuestion[];
  temperamentResults: TemperamentResult[] | null;
  intelligenceResults: IntelligenceResult[] | null;
  isQuizComplete: boolean;
  selectTemperamentAnswer: (questionId: string, optionId: string) => void;
  selectIntelligenceAnswer: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  calculateFinalResults: () => void;
}

const CombinedTestContext = createContext<CombinedTestContextType | undefined>(undefined);

export const useCombinedTest = () => {
  const context = useContext(CombinedTestContext);
  if (context === undefined) {
    throw new Error('useCombinedTest must be used within a CombinedTestProvider');
  }
  return context;
};

interface CombinedTestProviderProps {
  children: ReactNode;
}

export const CombinedTestProvider = ({ children }: CombinedTestProviderProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [temperamentAnswers, setTemperamentAnswers] = useState<Record<string, string>>({});
  const [intelligenceAnswers, setIntelligenceAnswers] = useState<Record<string, number>>({});
  const [temperamentResults, setTemperamentResults] = useState<TemperamentResult[] | null>(null);
  const [intelligenceResults, setIntelligenceResults] = useState<IntelligenceResult[] | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const selectTemperamentAnswer = (questionId: string, optionId: string) => {
    setTemperamentAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const selectIntelligenceAnswer = (questionId: string, value: number) => {
    setIntelligenceAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < combinedQuestions.length - 1) {
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
    setTemperamentAnswers({});
    setIntelligenceAnswers({});
    setTemperamentResults(null);
    setIntelligenceResults(null);
    setIsQuizComplete(false);
  };

  const calculateFinalResults = () => {
    // Calculate temperament results
    const processedTemperamentAnswers: Record<string, string> = {};
    
    Object.entries(temperamentAnswers).forEach(([combinedId, optionId]) => {
      const originalId = combinedId.replace('t_', '');
      processedTemperamentAnswers[originalId] = optionId;
    });
    
    const calculatedTemperamentResults = calculateResults(processedTemperamentAnswers);
    
    // Calculate intelligence results
    const processedIntelligenceAnswers: Record<string, number> = {};
    
    Object.entries(intelligenceAnswers).forEach(([combinedId, value]) => {
      const originalId = combinedId.replace('i_', '');
      processedIntelligenceAnswers[originalId] = value;
    });
    
    const calculatedIntelligenceResults = calculateIntelligenceResults(processedIntelligenceAnswers);
    
    setTemperamentResults(calculatedTemperamentResults);
    setIntelligenceResults(calculatedIntelligenceResults);
    setIsQuizComplete(true);
  };

  const value = {
    currentQuestionIndex,
    temperamentAnswers,
    intelligenceAnswers,
    combinedQuestions,
    temperamentResults,
    intelligenceResults,
    isQuizComplete,
    selectTemperamentAnswer,
    selectIntelligenceAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  };

  return (
    <CombinedTestContext.Provider value={value}>
      {children}
    </CombinedTestContext.Provider>
  );
};
