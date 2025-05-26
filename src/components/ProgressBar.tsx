/**
 * @file ProgressBar.tsx
 * @description Componente de barra de progresso para os testes
 * @author Temperamentum
 */

import React from 'react';

/**
 * @typedef {Object} ProgressBarProps
 * @property {number} currentStep - Passo atual do processo
 * @property {number} totalSteps - Número total de passos
 */
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

/**
 * @component ProgressBar
 * @description Exibe uma barra de progresso visual para indicar o avanço em um processo de múltiplas etapas
 * @param {ProgressBarProps} props - Propriedades do componente
 * @returns {JSX.Element} Componente de barra de progresso
 * @example
 * <ProgressBar currentStep={3} totalSteps={10} />
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calcula a porcentagem de progresso
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#D4AF37] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;