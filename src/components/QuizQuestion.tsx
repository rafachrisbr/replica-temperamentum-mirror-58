
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
      <h2 className="text-xl md:text-2xl font-medium text-center">{question}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => onSelectOption(option.id)}
          >
            <p>{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
