
import React from 'react';
import { Option } from '@/utils/quiz';

interface QuizQuestionProps {
  question: string;
  options: Option[];
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  options, 
  selectedOption, 
  onSelectOption 
}) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <h2 className="text-xl md:text-2xl font-serif font-medium text-center text-white">{question}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-card bg-[#121212] hover:bg-[#1a1a1a] ${selectedOption === option.id ? 'selected border-[#D4AF37]' : 'border-gray-700'}`}
            onClick={() => onSelectOption(option.id)}
          >
            <p className="text-[#E0E0E0] font-serif">{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
