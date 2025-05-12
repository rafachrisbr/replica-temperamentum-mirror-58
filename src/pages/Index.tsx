
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold">Descubra seu temperamento</h1>
          
          <p className="text-lg md:text-xl">
            Responda às perguntas e descubra como os quatro temperamentos clássicos 
            (Sanguíneo, Colérico, Melancólico e Fleumático) se manifestam em sua personalidade.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/quiz')}
              className="text-lg py-4 px-8"
            >
              Começar o teste
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-sanguine rounded-lg p-4 text-white font-medium">Sanguíneo</div>
            <div className="bg-choleric rounded-lg p-4 text-black font-medium">Colérico</div>
            <div className="bg-melancholic rounded-lg p-4 text-white font-medium">Melancólico</div>
            <div className="bg-phlegmatic rounded-lg p-4 text-black font-medium">Fleumático</div>
          </div>
        </div>
      </main>
      
      <footer className="p-6 text-center text-gray-500">
        <p>© 2025 Temperamentum - Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Index;
