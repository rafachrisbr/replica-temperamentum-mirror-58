
import React from 'react';

interface TemperamentCardProps {
  name: string;
  percentage: number;
  description: string;
}

const TemperamentCard: React.FC<TemperamentCardProps> = ({ 
  name, 
  percentage, 
  description 
}) => {
  const getTemperamentClass = () => {
    switch (name.toLowerCase()) {
      case 'sanguíneo':
        return 'bg-sanguine';
      case 'colérico':
        return 'bg-choleric';
      case 'melancólico':
        return 'bg-melancholic';
      case 'fleumático':
        return 'bg-phlegmatic';
      default:
        return '';
    }
  };
  
  const getTextClass = () => {
    switch (name.toLowerCase()) {
      case 'colérico':
      case 'fleumático':
        return 'text-black';
      default:
        return 'text-white';
    }
  };
  
  return (
    <div className={`rounded-lg p-6 ${getTemperamentClass()} ${getTextClass()} font-serif`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TemperamentCard;
