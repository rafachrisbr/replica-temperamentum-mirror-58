
import React from 'react';
import { questions } from '@/utils/quiz';
import { intelligenceQuestions } from '@/utils/intelligences';

interface CombinedQuestionProps {
  id: string;
  text: string;
  type: 'temperament' | 'intelligence';
  originalId: string;
  selectedTemperamentOption: string | null;
  selectedIntelligenceValue: number | null;
  onSelectTemperamentOption: (optionId: string) => void;
  onSelectIntelligenceOption: (value: number) => void;
}

const CombinedQuestion: React.FC<CombinedQuestionProps> = ({ 
  id, 
  text, 
  type, 
  originalId,
  selectedTemperamentOption,
  selectedIntelligenceValue,
  onSelectTemperamentOption,
  onSelectIntelligenceOption
}) => {
  // For temperament questions
  if (type === 'temperament') {
    const question = questions.find(q => q.id === originalId);
    if (!question) return null;
    
    return (
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white first-letter:uppercase">
          {text}
        </h2>
        
        <div className="flex flex-col gap-4">
          {question.options.map((option) => (
            <div
              key={option.id}
              className={`option-card bg-[#121212] hover:bg-[#1a1a1a] transition-colors ${selectedTemperamentOption === option.id ? 'selected border-[#D4AF37]' : 'border-gray-700'}`}
              onClick={() => onSelectTemperamentOption(option.id)}
            >
              <p className="text-[#E0E0E0] font-text text-justify first-letter:uppercase">{option.text.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // For intelligence questions
  if (type === 'intelligence') {
    const question = intelligenceQuestions.find(q => q.id === originalId);
    if (!question) return null;
    
    return (
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white first-letter:uppercase">
          {text}
        </h2>
        
        <div className="flex flex-col gap-4">
          {question.options.map((option) => (
            <div
              key={option.value}
              className={`option-card bg-[#121212] hover:bg-[#1a1a1a] transition-colors ${selectedIntelligenceValue === option.value ? 'selected border-[#D4AF37]' : 'border-gray-700'}`}
              onClick={() => onSelectIntelligenceOption(option.value)}
            >
              <p className="text-[#E0E0E0] font-text text-center">{option.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};

export default CombinedQuestion;
