/**
 * @file QuizContext.tsx
 * @description Contexto para gerenciar o estado do teste de temperamento
 * @author Temperamentum
 */

import React, { createContext, useContext, useState } from 'react';
import { questions, calculateResults, TemperamentResult } from '@/utils/quiz';

/**
 * @typedef {Object} QuizContextType
 * @description Interface do contexto do quiz
 * @property {number} currentQuestionIndex - Índice da pergunta atual
 * @property {Record<string, string>} answers - Respostas do usuário (id da pergunta -> id da opção)
 * @property {TemperamentResult[] | null} results - Resultados do teste ou null se não calculado
 * @property {Function} selectAnswer - Função para selecionar uma resposta
 * @property {Function} nextQuestion - Função para avançar para a próxima pergunta
 * @property {Function} previousQuestion - Função para voltar à pergunta anterior
 * @property {Function} calculateFinalResults - Função para calcular os resultados finais
 * @property {Function} resetQuiz - Função para reiniciar o quiz
 * @property {boolean} isQuizComplete - Indica se o quiz foi concluído
 * @property {boolean} isComplete - Indica se o quiz foi concluído (alias para compatibilidade)
 */
interface QuizContextType {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  results: TemperamentResult[] | null;
  selectAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateFinalResults: () => TemperamentResult[]; 
  resetQuiz: () => void;
  isQuizComplete: boolean;
  isComplete: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

/**
 * @component QuizProvider
 * @description Provedor do contexto do quiz
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Componentes filhos
 * @returns {JSX.Element} Provedor do contexto do quiz
 */
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<TemperamentResult[] | null>(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  /**
   * @function selectAnswer
   * @description Seleciona uma resposta para uma pergunta
   * @param {string} questionId - ID da pergunta
   * @param {string} optionId - ID da opção selecionada
   */
  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  /**
   * @function nextQuestion
   * @description Avança para a próxima pergunta
   */
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  /**
   * @function previousQuestion
   * @description Volta para a pergunta anterior
   */
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  /**
   * @function calculateFinalResults
   * @description Calcula os resultados finais do teste
   * @returns {TemperamentResult[]} Resultados calculados
   */
  const calculateFinalResults = (): TemperamentResult[] => {
    const calculatedResults = calculateResults(answers);
    setResults(calculatedResults);
    setIsQuizComplete(true);
    setIsComplete(true);
    return calculatedResults;
  };

  /**
   * @function resetQuiz
   * @description Reinicia o quiz para o estado inicial
   */
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
    setIsQuizComplete(false);
    setIsComplete(false);
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
        isComplete
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

/**
 * @function useQuiz
 * @description Hook para acessar o contexto do quiz
 * @returns {QuizContextType} Contexto do quiz
 * @throws {Error} Se usado fora de um QuizProvider
 */
export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};