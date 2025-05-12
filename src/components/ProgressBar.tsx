
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="progress-bar w-full">
      <div 
        className="progress-fill bg-[#D4AF37]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
