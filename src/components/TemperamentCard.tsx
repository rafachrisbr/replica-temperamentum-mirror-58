
import React from 'react';
import { TemperamentResult } from '@/utils/quiz';

interface TemperamentCardProps {
  temperament: TemperamentResult;
  isDominant?: boolean;
}

const TemperamentCard: React.FC<TemperamentCardProps> = ({ 
  temperament,
  isDominant = false
}) => {
  const getTemperamentColor = () => {
    switch (temperament.type) {
      case 'sanguine':
        return '#FFD700'; // Amarelo
      case 'choleric':
        return '#FF0000'; // Vermelho
      case 'melancholic':
        return '#808080'; // Cinza
      case 'phlegmatic':
        return '#008000'; // Verde
      default:
        return '#D4AF37';
    }
  };
  
  return (
    <div className="rounded-lg p-6 bg-[#121212] text-white font-serif shadow-md border border-gray-800">
      <div className="flex flex-col mb-4">
        <h3 className="text-2xl font-semibold text-center mb-2" style={{ color: getTemperamentColor() }}>
          {temperament.name}
        </h3>
        <div className="flex justify-center my-2">
          <span className="text-2xl text-white">✝</span>
        </div>
        <p className="text-lg text-justify">{temperament.description}</p>
      </div>
    </div>
  );
};

export default TemperamentCard;
