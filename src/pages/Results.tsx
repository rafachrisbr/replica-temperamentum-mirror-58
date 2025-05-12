
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Button from '@/components/Button';
import TemperamentCard from '@/components/TemperamentCard';
import { useQuiz } from '@/contexts/QuizContext';

const Results = () => {
  const navigate = useNavigate();
  const { results, resetQuiz, isQuizComplete } = useQuiz();
  
  useEffect(() => {
    if (!isQuizComplete && !results) {
      navigate('/');
    }
  }, [isQuizComplete, results, navigate]);
  
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/quiz');
  };
  
  if (!results) {
    return null;
  }
  
  const dominantTemperament = results[0];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="max-w-3xl w-full text-center space-y-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold">Seus resultados</h1>
          
          <p className="text-xl">
            Seu temperamento dominante é <strong>{dominantTemperament.name}</strong> ({dominantTemperament.percentage}%)
          </p>
          
          <div className="grid gap-6 mt-8">
            {results.map((temperament) => (
              <TemperamentCard
                key={temperament.type}
                name={temperament.name}
                percentage={temperament.percentage}
                description={temperament.description}
              />
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/')}
              variant="secondary"
            >
              Página inicial
            </Button>
            
            <Button onClick={handleRetakeQuiz}>
              Refazer o teste
            </Button>
          </div>
          
          <div className="mt-12 text-lg">
            <h2 className="text-2xl font-bold mb-4">Sobre os quatro temperamentos</h2>
            <p className="mb-6 text-left">
              A teoria dos quatro temperamentos tem origem na medicina antiga grega e foi 
              popularizada por Hipócrates. Cada pessoa tem um pouco de cada temperamento, 
              mas geralmente um ou dois são mais dominantes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-sanguine">Sanguíneo</h3>
                <p>Extrovertido, comunicativo, sociável e otimista. Gosta de diversão e novas experiências.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-choleric">Colérico</h3>
                <p>Focado em objetivos, determinado, confiante e orientado para resultados. Um líder natural.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-melancholic">Melancólico</h3>
                <p>Analítico, perfeccionista, sensível e criativo. Aprecia ordem, qualidade e detalhes.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-phlegmatic">Fleumático</h3>
                <p>Calmo, paciente, confiável e equilibrado. Valoriza a paz e evita conflitos.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-gray-500">
        <p>© 2025 Temperamentum - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Results;
