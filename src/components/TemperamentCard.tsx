
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
        return 'temperament-sanguine';
      case 'colérico':
        return 'temperament-choleric';
      case 'melancólico':
        return 'temperament-melancholic';
      case 'fleumático':
        return 'temperament-phlegmatic';
      default:
        return '';
    }
  };
  
  return (
    <div className={`temperament-card ${getTemperamentClass()}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-2xl font-bold">{percentage}%</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TemperamentCard;
