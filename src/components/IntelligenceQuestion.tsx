
import React from 'react';
import { IntelligenceQuestion as IntelligenceQuestionType } from '@/utils/intelligences';

interface IntelligenceQuestionProps {
  question: IntelligenceQuestionType;
  selectedValue: number | null;
  onSelectOption: (value: number) => void;
}

const IntelligenceQuestion: React.FC<IntelligenceQuestionProps> = ({ 
  question, 
  selectedValue, 
  onSelectOption 
}) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white first-letter:uppercase">{question.text}</h2>
      
      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <div
            key={option.value}
            className={`option-card bg-[#121212] hover:bg-[#1a1a1a] transition-colors ${selectedValue === option.value ? 'selected border-[#D4AF37]' : 'border-gray-700'}`}
            onClick={() => onSelectOption(option.value)}
          >
            <p className="text-[#E0E0E0] font-text text-center">{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceQuestion;
