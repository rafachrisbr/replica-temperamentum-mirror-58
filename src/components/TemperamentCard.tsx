
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
        return 'bg-sanguine text-amber-400';
      case 'choleric':
        return 'bg-choleric text-black';
      case 'melancholic':
        return 'bg-melancholic text-amber-400';
      case 'phlegmatic':
        return 'bg-phlegmatic text-black';
      default:
        return '';
    }
  };
  
  if (isDominant) {
    return (
      <div className={`rounded-lg p-6 bg-[#121212] text-white font-serif`}>
        <div className="flex flex-col mb-4">
          <h3 className={`text-2xl font-semibold text-center mb-2 ${getTemperamentClass()}`}>{temperament.name}</h3>
          <div className="flex justify-center my-2">
            <span className="text-2xl text-white">✝</span>
          </div>
          <p className="text-lg text-justify">{temperament.description}</p>
        </div>
        
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-400">Virtudes (Pontos Fortes):</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {temperament.virtues.map((virtue, index) => (
                  <li key={index} className="text-justify">{virtue}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-amber-400">Defeitos (Desafios a Trabalhar):</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {temperament.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-justify">{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-4 text-amber-400">Perfil no Trabalho e Possíveis Vocações:</h4>
          <p className="mb-4 text-justify">{temperament.careerProfile}</p>
          
          <p className="mb-4 text-justify">
            <strong>Algumas profissões sugeridas:</strong> {temperament.suggestedProfessions.join(', ')}.
          </p>
          
          <h4 className="text-xl font-semibold mb-4 text-amber-400">Santos com este Temperamento:</h4>
          <ul className="list-disc pl-5 mb-4">
            {temperament.saints.map((saint, index) => (
              <li key={index}>{saint}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-4 text-amber-400">Dicas para Fortalecimento Espiritual:</h4>
          <p className="text-justify">{temperament.spiritualTips}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="rounded-lg p-6 bg-[#121212] text-white font-serif">
      <h3 className={`text-xl font-semibold ${getTemperamentClass()}`}>{temperament.name}</h3>
      <p className="mt-2 text-justify">{temperament.description}</p>
    </div>
  );
};

export default TemperamentCard;
