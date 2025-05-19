import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import QuizQuestion from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { useQuiz } from '@/contexts/QuizContext';
import { questions } from '@/utils/quiz';
import { ArrowLeft, RefreshCcw, Home } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    selectAnswer, 
    nextQuestion, 
    previousQuestion,
    resetQuiz,
    calculateFinalResults
  } = useQuiz();
  
  const [shuffledOptions, setShuffledOptions] = useState([...questions[currentQuestionIndex].options]);
  
  // Function to shuffle options
  const shuffleOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const shuffled = [...currentQuestion.options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  };
  
  useEffect(() => {
    // Shuffle options when question changes
    shuffleOptions();
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleSelectOption = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId);
    
    // Avanço automático após selecionar uma opção
    if (isLastQuestion) {
      calculateFinalResults();
      navigate('/results');
    } else {
      nextQuestion();
    }
  };
  
  const handlePreviousQuestion = () => {
    previousQuestion();
  };
  
  const handleResetQuiz = () => {
    resetQuiz();
  };

  const handleBackToHome = () => {
    navigate('/testes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 rounded-lg shadow-lg border border-gray-800 mb-6 text-center">
            <h1 className="text-xl md:text-2xl font-serif uppercase tracking-wider mb-2 text-amber-400">
              Teste Rápido de Temperamento
            </h1>
            
            <p className="text-sm text-gray-400">
              Este é um teste rápido, com apenas 13 perguntas. Ele é mais prático, porém menos preciso do que os testes completos.
            </p>

            <div className="mt-4 p-4 bg-[#0a0a0a] rounded-lg">
              <h2 className="text-lg font-medium text-amber-400 mb-2">Instruções</h2>
              <p className="text-gray-300 text-sm">
                Responda rapidamente às perguntas, escolhendo a alternativa que mais se aproxima do seu perfil. 
                O teste é breve e serve para uma avaliação inicial do seu temperamento.
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span className="first-letter:uppercase">pergunta {currentQuestionIndex + 1} de {questions.length}</span>
            </div>
          </div>
          
          {/* Botões de navegação no topo */}
          <div className="mb-6 flex justify-center gap-3">
            <Button 
              variant="outline"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <ArrowLeft className="mr-1 h-3 w-3" />
              voltar
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleResetQuiz}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <RefreshCcw className="mr-1 h-3 w-3" />
              refazer
            </Button>
            
            <Button
              variant="outline"
              onClick={handleBackToHome}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <Home className="mr-1 h-3 w-3" />
              testes
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <QuizQuestion
              question={currentQuestion.text}
              options={shuffledOptions}
              selectedOption={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
            />
            
            {/* Imagem centralizada abaixo das perguntas com tamanho aumentado */}
            <div className="mt-6 flex justify-center">
              <img 
                src="/lovable-uploads/a4947d4e-6c78-4866-b111-328cfdc3e4f8.png" 
                alt="Santo Agostinho" 
                className="h-[150px] w-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;