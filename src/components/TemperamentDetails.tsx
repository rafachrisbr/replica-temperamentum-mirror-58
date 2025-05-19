
import React from 'react';

type TemperamentDetailsProps = {
  temperamentType: string;
  value: number;
  totalPoints: number;
  isPrimary?: boolean;
  description: string;
};

const TemperamentDetails: React.FC<TemperamentDetailsProps> = ({
  temperamentType,
  value,
  totalPoints,
  isPrimary = false,
  description
}) => {
  const getTemperamentName = (key: string): string => {
    switch (key) {
      case 'choleric': return 'Colérico';
      case 'sanguine': return 'Sanguíneo';
      case 'melancholic': return 'Melancólico';
      case 'phlegmatic': return 'Fleumático';
      default: return key;
    }
  };

  return (
    <div className="p-6 bg-[#121212] rounded-lg border border-gray-700 text-left">
      <h3 className={`text-xl font-serif uppercase mb-2 ${isPrimary ? 'text-amber-400' : 'text-gray-200'}`}>
        {getTemperamentName(temperamentType)}
      </h3>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-sm ${isPrimary ? 'bg-amber-500/20 px-2 py-1 rounded text-amber-300' : 'bg-gray-700/30 px-2 py-1 rounded text-gray-300'}`}>
          {isPrimary ? 'Predominante' : 'Secundário'}
        </span>
        <span className="text-lg font-semibold text-white">
          {Math.round((value / totalPoints) * 100)}%
        </span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default TemperamentDetails;
