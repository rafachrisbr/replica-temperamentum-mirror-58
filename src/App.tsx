
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "@/contexts/QuizContext";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Temperamentos from "./pages/Temperamentos";
import Meditacoes from "./pages/Meditacoes";
import MeditacaoJoao from "./pages/MeditacaoJoao";
import MeditacaoTresAmores from "./pages/MeditacaoTresAmores";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/temperamentos" element={<Temperamentos />} />
            <Route path="/meditacoes" element={<Meditacoes />} />
            <Route path="/meditacao-joao" element={<MeditacaoJoao />} />
            <Route path="/meditacao-tres-amores" element={<MeditacaoTresAmores />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
