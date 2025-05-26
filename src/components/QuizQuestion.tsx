/**
 * @file QuizQuestion.tsx
 * @description Componente para exibir uma pergunta do teste de temperamento
 * @author Temperamentum
 */

import React from 'react';
import { Option } from '@/utils/quiz';

/**
 * @typedef {Object} QuizQuestionProps
 * @property {string} question - Texto da pergunta
 * @property {Option[]} options - Opções de resposta
 * @property {string | null} selectedOption - ID da opção selecionada ou null
 * @property {Function} onSelectOption - Callback para quando uma opção é selecionada
 */
interface QuizQuestionProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
}

/**
 * @component QuizQuestion
 * @description Exibe uma pergunta do teste com suas opções de resposta
 * @param {QuizQuestionProps} props - Propriedades do componente
 * @returns {JSX.Element} Componente de pergunta do quiz
 */
const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  options, 
  selectedOption, 
  onSelectOption 
}) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white first-letter:uppercase">{question.toLowerCase()}</h2>
      
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-card bg-[#121212] hover:bg-[#1a1a1a] transition-colors ${selectedOption === option.id ? 'selected border-[#D4AF37]' : 'border-gray-700'}`}
            onClick={() => onSelectOption(option.id)}
            role="button"
            aria-pressed={selectedOption === option.id}
            tabIndex={0}
          >
            <p className="text-[#E0E0E0] font-text text-justify first-letter:uppercase">{option.text.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;