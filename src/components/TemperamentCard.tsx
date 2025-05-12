
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
  const getTemperamentClass = () => {
    switch (temperament.type) {
      case 'sanguine':
        return 'bg-sanguine';
      case 'choleric':
        return 'bg-choleric';
      case 'melancholic':
        return 'bg-melancholic';
      case 'phlegmatic':
        return 'bg-phlegmatic';
      default:
        return '';
    }
  };
  
  const getTextClass = () => {
    switch (temperament.type) {
      case 'choleric':
      case 'phlegmatic':
        return 'text-black';
      default:
        return 'text-white';
    }
  };
  
  if (isDominant) {
    return (
      <div className={`rounded-lg p-6 ${getTemperamentClass()} ${getTextClass()} font-serif`}>
        <div className="flex flex-col mb-4">
          <h3 className="text-2xl font-semibold text-center mb-2">{temperament.name}</h3>
          <div className="flex justify-center my-2">
            <span className="text-2xl">✝</span>
          </div>
          <p className="text-lg">{temperament.description}</p>
        </div>
        
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Virtudes (Pontos Fortes):</h4>
          <ul className="list-disc pl-5 mb-4">
            {temperament.virtues.map((virtue, index) => (
              <li key={index}>{virtue}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2">Defeitos (Desafios a Trabalhar):</h4>
          <ul className="list-disc pl-5 mb-4">
            {temperament.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2">Perfil no Trabalho e Possíveis Vocações:</h4>
          <p className="mb-2">{temperament.careerProfile}</p>
          
          <p className="mb-4">
            <strong>Algumas profissões sugeridas:</strong> {temperament.suggestedProfessions.join(', ')}.
          </p>
          
          <h4 className="text-xl font-semibold mb-2">Santos com este Temperamento:</h4>
          <ul className="list-disc pl-5 mb-4">
            {temperament.saints.map((saint, index) => (
              <li key={index}>{saint}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2">Dicas para Fortalecimento Espiritual:</h4>
          <p>{temperament.spiritualTips}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`rounded-lg p-6 ${getTemperamentClass()} ${getTextClass()} font-serif`}>
      <h3 className="text-xl font-semibold">{temperament.name}</h3>
      <p className="mt-2">{temperament.description}</p>
    </div>
  );
};

export default TemperamentCard;
