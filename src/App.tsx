import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QuizProvider } from "@/contexts/QuizContext";
import { IntelligencesProvider } from "@/contexts/IntelligencesContext";
import { CombinedTestProvider } from "@/contexts/CombinedTestContext";
import { CompleteTestProvider } from "@/contexts/CompleteTestContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Temperamentos from "./pages/Temperamentos";
import Meditacoes from "./pages/Meditacoes";
import MeditacaoJoao from "./pages/MeditacaoJoao";
import MeditacaoTresAmores from "./pages/MeditacaoTresAmores";
import MeditacaoAmizade from "./pages/MeditacaoAmizade";
import MeditacaoVocacao from "./pages/MeditacaoVocacao";
import TestSelection from "./pages/TestSelection";
import Intelligences from "./pages/Intelligences";
import IntelligencesResults from "./pages/IntelligencesResults";
import CombinedTest from "./pages/CombinedTest";
import CombinedResults from "./pages/CombinedResults";
import PeHockIntro from "./pages/PeHockIntro";
import PeHockTest from "./pages/PeHockTest";
import PeHockResults from "./pages/PeHockResults";
import MultipleIntelligences from "./pages/MultipleIntelligences";
import MultipleIntelligencesResults from "./pages/MultipleIntelligencesResults";
import CompleteTest from "./pages/CompleteTest";
import CompleteTestResults from "./pages/CompleteTestResults";
import CompleteTestIntro from './pages/CompleteTestIntro';
import EducacaoFamiliar from './pages/EducacaoFamiliar';
import EducacaoFamiliarArtigo from './pages/EducacaoFamiliarArtigo';
import EducacaoFamiliarFamilia from './pages/EducacaoFamiliarFamilia';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animated page wrapper component
const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="animate-fadeIn">
      {children}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <Toaster />
        <Sonner />
        <QuizProvider>
          <IntelligencesProvider>
            <CombinedTestProvider>
              <CompleteTestProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
                    <Route path="/quiz" element={<AnimatedPage><Quiz /></AnimatedPage>} />
                    <Route path="/results" element={<AnimatedPage><Results /></AnimatedPage>} />
                    <Route path="/temperamentos" element={<AnimatedPage><Temperamentos /></AnimatedPage>} />
                    <Route path="/meditacoes" element={<AnimatedPage><Meditacoes /></AnimatedPage>} />
                    <Route path="/meditacao-joao" element={<AnimatedPage><MeditacaoJoao /></AnimatedPage>} />
                    <Route path="/meditacao-tres-amores" element={<AnimatedPage><MeditacaoTresAmores /></AnimatedPage>} />
                    <Route path="/meditacao-amizade" element={<AnimatedPage><MeditacaoAmizade /></AnimatedPage>} />
                    <Route path="/meditacao-vocacao" element={<AnimatedPage><MeditacaoVocacao /></AnimatedPage>} />
                    <Route path="/testes" element={<AnimatedPage><TestSelection /></AnimatedPage>} />
                    <Route path="/inteligencias" element={<AnimatedPage><Intelligences /></AnimatedPage>} />
                    <Route path="/inteligencias-resultados" element={<AnimatedPage><IntelligencesResults /></AnimatedPage>} />
                    <Route path="/teste-completo" element={<AnimatedPage><CompleteTest /></AnimatedPage>} />
                    <Route path="/complete-test-results" element={<AnimatedPage><CompleteTestResults /></AnimatedPage>} />
                    <Route path="/teste-combinado" element={<AnimatedPage><CombinedTest /></AnimatedPage>} />
                    <Route path="/resultados-combinados" element={<AnimatedPage><CombinedResults /></AnimatedPage>} />
                    <Route path="/pe-hock-intro" element={<AnimatedPage><PeHockIntro /></AnimatedPage>} />
                    <Route path="/pe-hock-teste" element={<AnimatedPage><PeHockTest /></AnimatedPage>} />
                    <Route path="/pe-hock-results" element={<AnimatedPage><PeHockResults /></AnimatedPage>} />
                    <Route path="/inteligencias-multiplas" element={<AnimatedPage><MultipleIntelligences /></AnimatedPage>} />
                    <Route path="/inteligencias-multiplas-resultados" element={<AnimatedPage><MultipleIntelligencesResults /></AnimatedPage>} />
                    <Route path="/complete-test-intro" element={<AnimatedPage><CompleteTestIntro /></AnimatedPage>} />
                    <Route path="/educacao-familiar" element={<AnimatedPage><EducacaoFamiliar /></AnimatedPage>} />
                    <Route path="/educacao-familiar/artigo" element={<AnimatedPage><EducacaoFamiliarArtigo /></AnimatedPage>} />
                    <Route path="/educacao-familiar/familia" element={<AnimatedPage><EducacaoFamiliarFamilia /></AnimatedPage>} />
                    <Route path="/privacidade" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
                    <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
                  </Routes>
                </BrowserRouter>
              </CompleteTestProvider>
            </CombinedTestProvider>
          </IntelligencesProvider>
        </QuizProvider>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;