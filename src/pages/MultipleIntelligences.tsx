
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useIntelligences } from '@/contexts/IntelligencesContext';
import { useCompleteTest } from '@/contexts/CompleteTestContext';
import { multipleIntelligencesStages, validateStageAnswers } from '@/utils/multipleIntelligencesQuiz';
import { toast } from 'sonner';

const MultipleIntelligences = () => {
  const navigate = useNavigate();
  const { answers, setAnswers, setIsComplete, calculateResults } = useIntelligences();
  const { currentTestStep, setCurrentTestStep, setMultipleIntelligencesResults } = useCompleteTest();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [stageAnswers, setStageAnswers] = useState<Record<string, number>>({});
  const [draggedKey, setDraggedKey] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    // Load saved answers for current stage if they exist
    const currentStageId = multipleIntelligencesStages[currentStageIndex].id;
    if (answers[currentStageId]) {
      setStageAnswers(answers[currentStageId]);
    } else {
      setStageAnswers({});
    }
  }, [currentStageIndex, answers]);

  const currentStage = multipleIntelligencesStages[currentStageIndex];
  const isLastStage = currentStageIndex === multipleIntelligencesStages.length - 1;

  const handleScoreAssignment = (key: string, score: number) => {
    // Check if this score is already assigned to another option
    const existingKey = Object.entries(stageAnswers).find(([_, val]) => val === score)?.[0];
    
    // Create new stage answers object
    let newStageAnswers = { ...stageAnswers };
    
    // If score is already assigned, swap values
    if (existingKey && existingKey !== key) {
      newStageAnswers[existingKey] = stageAnswers[key] || 0;
    }
    
    // Assign new score to selected key
    newStageAnswers[key] = score;
    
    setStageAnswers(newStageAnswers);
  };

  const handleNextStage = () => {
    // Validate that all scores 1-7 are used exactly once
    if (!validateStageAnswers(stageAnswers)) {
      toast.error("Por favor, atribua cada valor de 1 a 7 para as afirmações, sem repetir os valores.");
      return;
    }

    // Save current stage answers
    const updatedAnswers = {
      ...answers,
      [currentStage.id]: stageAnswers
    };
    setAnswers(updatedAnswers);

    // Move to next stage or finish
    if (isLastStage) {
      // Calculate results
      const results = calculateResults();
      setIsComplete(true);
      
      // If part of complete test, save results and move to next step
      if (currentTestStep === 'multipleIntelligences') {
        setMultipleIntelligencesResults(results);
        setCurrentTestStep('results');
        navigate('/complete-test-results');
      } else {
        navigate('/inteligencias-resultados');
      }
    } else {
      setCurrentStageIndex(prev => prev + 1);
    }
  };

  const handlePreviousStage = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(prev => prev - 1);
    }
  };

  const handleBackToHome = () => {
    navigate('/testes');
  };

  const handleDragStart = (key: string) => {
    setDraggedKey(key);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetKey: string) => {
    if (!draggedKey || draggedKey === targetKey) return;
    
    // Swap scores between dragged item and drop target
    const draggedScore = stageAnswers[draggedKey] || 0;
    const targetScore = stageAnswers[targetKey] || 0;
    
    const newStageAnswers = { ...stageAnswers };
    newStageAnswers[draggedKey] = targetScore;
    newStageAnswers[targetKey] = draggedScore;
    
    setStageAnswers(newStageAnswers);
    setDraggedKey(null);
  };

  const getScoreLabel = (score: number): string => {
    switch (score) {
      case 1: return "menor identificação";
      case 7: return "maior identificação";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-4xl">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentStageIndex + 1}
              totalSteps={multipleIntelligencesStages.length}
            />
            
            <div className="mt-2 flex justify-between text-sm text-gray-400">
              <span>Etapa {currentStageIndex + 1} de {multipleIntelligencesStages.length}</span>
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
              onClick={handlePreviousStage}
              disabled={currentStageIndex === 0}
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
          
          <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 mb-6">
            <h2 className="text-xl md:text-2xl font-serif text-center uppercase tracking-wider mb-4 text-amber-400">
              {currentStage.title}
            </h2>
            
            <p className="text-gray-300 mb-4 text-center">
              Atribua notas de 1 a 7 para cada afirmação abaixo, onde 1 representa menor identificação e 7 representa maior identificação.
              <br/>
              <span className="text-amber-400 font-semibold">Cada nota deve ser usada apenas uma vez.</span>
            </p>
            
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {[1, 2, 3, 4, 5, 6, 7].map(score => (
                <div key={score} className="text-sm border border-gray-700 rounded p-1">
                  <span className="font-semibold text-amber-400">{score}</span>
                  {score === 1 || score === 7 ? (
                    <div className="text-xs text-gray-400">{getScoreLabel(score)}</div>
                  ) : null}
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mt-6">
              {currentStage.statements.map((statement) => (
                <div 
                  key={statement.key}
                  className={`p-3 bg-[#0a0a0a] rounded-lg border ${
                    stageAnswers[statement.key] ? 'border-amber-500/60' : 'border-gray-700'
                  } cursor-grab relative`}
                  draggable
                  onDragStart={() => handleDragStart(statement.key)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(statement.key)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-sm font-semibold mr-3">
                        {statement.key}
                      </div>
                      <span className="text-gray-200">{statement.text}</span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <select
                        value={stageAnswers[statement.key] || ''}
                        onChange={(e) => handleScoreAssignment(statement.key, parseInt(e.target.value))}
                        className="bg-gray-800 border border-gray-700 rounded p-2 text-white"
                      >
                        <option value="">-</option>
                        {[1, 2, 3, 4, 5, 6, 7].map(score => (
                          <option 
                            key={score} 
                            value={score}
                            disabled={Object.values(stageAnswers).includes(score) && stageAnswers[statement.key] !== score}
                          >
                            {score}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleNextStage}
                className="bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-[#CFB57C] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
              >
                {isLastStage ? 'Ver Resultados' : 'Próxima Etapa'}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MultipleIntelligences;
