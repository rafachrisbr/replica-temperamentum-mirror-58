import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                    <Route path="/" element={<Index />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/temperamentos" element={<Temperamentos />} />
                    <Route path="/meditacoes" element={<Meditacoes />} />
                    <Route path="/meditacao-joao" element={<MeditacaoJoao />} />
                    <Route path="/meditacao-tres-amores" element={<MeditacaoTresAmores />} />
                    <Route path="/meditacao-amizade" element={<MeditacaoAmizade />} />
                    <Route path="/meditacao-vocacao" element={<MeditacaoVocacao />} />
                    <Route path="/testes" element={<TestSelection />} />
                    <Route path="/inteligencias" element={<Intelligences />} />
                    <Route path="/inteligencias-resultados" element={<IntelligencesResults />} />
                    <Route path="/teste-completo" element={<CompleteTest />} />
                    <Route path="/complete-test-results" element={<CompleteTestResults />} />
                    <Route path="/teste-combinado" element={<CombinedTest />} />
                    <Route path="/resultados-combinados" element={<CombinedResults />} />
                    <Route path="/pe-hock-intro" element={<PeHockIntro />} />
                    <Route path="/pe-hock-teste" element={<PeHockTest />} />
                    <Route path="/pe-hock-results" element={<PeHockResults />} />
                    <Route path="/inteligencias-multiplas" element={<MultipleIntelligences />} />
                    <Route path="/inteligencias-multiplas-resultados" element={<MultipleIntelligencesResults />} />
                    <Route path="/complete-test-intro" element={<CompleteTestIntro />} />
                    <Route path="/educacao-familiar" element={<EducacaoFamiliar />} />
                    <Route path="/educacao-familiar/artigo" element={<EducacaoFamiliarArtigo />} />
                    <Route path="/educacao-familiar/familia" element={<EducacaoFamiliarFamilia />} />
                    <Route path="/privacidade" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
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