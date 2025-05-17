
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
          <button
            key={option.value}
            className={`option-card p-4 rounded-lg text-center cursor-pointer transition-all transform hover:scale-102 border-2 ${selectedValue === option.value ? 'bg-[#1a1a1a] border-[#D4AF37]' : 'bg-[#121212] border-gray-700 hover:bg-[#1a1a1a]'}`}
            onClick={() => onSelectOption(option.value)}
          >
            <p className="text-[#E0E0E0] font-text text-center">{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceQuestion;
