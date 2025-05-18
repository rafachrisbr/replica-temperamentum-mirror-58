import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { peHockQuestions } from '@/utils/peHockQuiz';
import { useCompleteTest } from '@/contexts/CompleteTestContext';

const PeHockTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [startTime, setStartTime] = useState<Date | null>(null);
  
  const { currentTestStep, setPeHockResults, setCurrentTestStep } = useCompleteTest();
  
  useEffect(() => {
    setStartTime(new Date());
  }, []);
  
  const currentQuestion = peHockQuestions[currentQuestionIndex];
  const isLastTwoQuestions = currentQuestionIndex >= peHockQuestions.length - 2;
  
  const handleSelectOption = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
    
    // Automatically move to next question after answering
    if (currentQuestionIndex < peHockQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    } else {
      // Calculate and show results
      calculateResults();
    }
  };
  
  const handleSelectMultipleOption = (option: string) => {
    const currentAnswers = answers[currentQuestion.id] || [];
    let newAnswers;
    
    if (currentAnswers.includes(option)) {
      // Remove option if already selected
      newAnswers = currentAnswers.filter((item: string) => item !== option);
    } else {
      // Add option if not selected (max 2)
      if (currentAnswers.length < 2) {
        newAnswers = [...currentAnswers, option];
      } else {
        return; // Don't allow more than 2 selections
      }
    }
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: newAnswers
    }));
  };
  
  const handleMultipleOptionNext = () => {
    if (answers[currentQuestion.id]?.length > 0) {
      if (currentQuestionIndex < peHockQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        calculateResults();
      }
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const calculateResults = () => {
    const temperamentScores = {
      choleric: 0,
      sanguine: 0,
      melancholic: 0,
      phlegmatic: 0
    };
    
    // Calculate scores for questions 1-48 (scale 1-5)
    for (let i = 0; i < peHockQuestions.length - 2; i++) {
      const question = peHockQuestions[i];
      const answer = parseInt(answers[question.id] || "0");
      
      if (!answer) continue;
      
      question.temperaments.forEach(temperament => {
        temperamentScores[temperament as keyof typeof temperamentScores] += answer;
      });
    }
    
    // Calculate scores for questions 49-50 (multiple choice)
    const q49 = peHockQuestions[peHockQuestions.length - 2];
    const q50 = peHockQuestions[peHockQuestions.length - 1];
    
    const q49Answers = answers[q49.id] || [];
    const q50Answers = answers[q50.id] || [];
    
    // Map options to temperaments for q49
    const q49TemperamentMap: Record<string, keyof typeof temperamentScores> = {
      'a': 'choleric',
      'b': 'phlegmatic',
      'c': 'melancholic',
      'd': 'sanguine'
    };
    
    // Map options to temperaments for q50
    const q50TemperamentMap: Record<string, keyof typeof temperamentScores> = {
      'a': 'phlegmatic',
      'b': 'melancholic',
      'c': 'choleric',
      'd': 'sanguine'
    };
    
    // Add points for selected options in q49
    q49Answers.forEach((option: string) => {
      const temperament = q49TemperamentMap[option];
      if (temperament) {
        temperamentScores[temperament] += 1;
      }
    });
    
    // Add points for selected options in q50
    q50Answers.forEach((option: string) => {
      const temperament = q50TemperamentMap[option];
      if (temperament) {
        temperamentScores[temperament] += 1;
      }
    });
    
    // Store results in session storage
    sessionStorage.setItem('peHockResults', JSON.stringify(temperamentScores));
    
    // If part of the complete test flow, store results and navigate accordingly
    if (currentTestStep === 'peHock') {
      setPeHockResults(temperamentScores);
      setCurrentTestStep('multipleIntelligences');
      navigate('/inteligencias-multiplas');
    } else {
      // Otherwise, navigate to results page
      navigate('/pe-hock-results');
    }
  };
  
  const handleBackToHome = () => {
    navigate('/testes');
  };
  
  const renderQuestion = () => {
    if (isLastTwoQuestions) {
      // For questions 49 and 50 (multiple choice)
      const options = currentQuestion.options || [];
      const selectedOptions = answers[currentQuestion.id] || [];
      
      return (
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white">
            {currentQuestion.text}
          </h2>
          
          <div className="flex flex-col gap-3 mt-2">
            {options.map((option) => (
              <div
                key={option.value}
                className={`p-4 bg-[#121212] border ${
                  selectedOptions.includes(option.value) ? 'border-[#D4AF37]' : 'border-gray-700'
                } rounded-lg cursor-pointer hover:bg-[#1a1a1a] transition-colors`}
                onClick={() => handleSelectMultipleOption(option.value)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border ${
                    selectedOptions.includes(option.value) ? 'bg-[#D4AF37] border-[#D4AF37]' : 'bg-transparent border-white'
                  } mr-3 flex-shrink-0`}></div>
                  <span className="text-[#E0E0E0] font-text">{option.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleMultipleOptionNext}
              disabled={!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all"
            >
              {currentQuestionIndex === peHockQuestions.length - 1 ? 'Ver Resultados' : 'Continuar'}
            </Button>
          </div>
        </div>
      );
    } else {
      // For questions 1-48 (scale 1-5)
      return (
        <div className="flex flex-col gap-6 w-full max-w-2xl">
          <h2 className="text-xl md:text-2xl font-text font-medium text-center text-white">
            {currentQuestion.text}
          </h2>
          
          <RadioGroup 
            value={answers[currentQuestion.id] || ""} 
            onValueChange={handleSelectOption}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-between text-sm text-gray-400 px-2 mb-1">
              <span>Discordo totalmente</span>
              <span>Concordo totalmente</span>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <div
                  key={value}
                  className={`p-4 bg-[#121212] border ${
                    answers[currentQuestion.id] === value.toString() ? 'border-[#D4AF37]' : 'border-gray-700'
                  } rounded-lg cursor-pointer hover:bg-[#1a1a1a] transition-colors flex flex-col items-center justify-center`}
                  onClick={() => handleSelectOption(value.toString())}
                >
                  <RadioGroupItem 
                    value={value.toString()} 
                    id={`option-${value}`}
                    className="sr-only"
                  />
                  <span className="text-xl font-medium text-amber-400">{value}</span>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {currentTestStep === 'peHock' && (
            <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 rounded-lg shadow-lg border border-gray-800 mb-6 text-center">
              <h2 className="text-xl md:text-2xl font-serif text-center uppercase tracking-wider mb-2 text-amber-400">
                Teste Completo
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Etapa 2: Teste de Temperamento Pe. Hock
              </p>
            </div>
          )}
          
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestionIndex + 1}
              totalSteps={peHockQuestions.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span>Pergunta {currentQuestionIndex + 1} de {peHockQuestions.length}</span>
              <span>
                {startTime && (
                  `Tempo: ${Math.floor((new Date().getTime() - startTime.getTime()) / 60000)} min`
                )}
              </span>
            </div>
          </div>
          
          {/* Botão de navegação no topo */}
          <div className="mb-6 flex justify-start gap-3">
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
              onClick={handleBackToHome}
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-colors uppercase font-semibold tracking-wide text-xs rounded-md py-1 px-2"
              size="sm"
            >
              <Home className="mr-1 h-3 w-3" />
              testes
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            {renderQuestion()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeHockTest;
