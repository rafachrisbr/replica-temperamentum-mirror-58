/**
 * @file ResultActionButtons.tsx
 * @description Componente para exibir botões de ação nas páginas de resultado
 * @author Temperamentum
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw, Home, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * @typedef {Object} ResultActionButtonsProps
 * @property {Function} handleRetakeTest - Função para reiniciar o teste
 * @property {string} shareTitle - Título para compartilhamento
 * @property {string} shareText - Texto para compartilhamento
 */
type ResultActionButtonsProps = {
  handleRetakeTest: () => void;
  shareTitle: string;
  shareText: string;
};

/**
 * @component ResultActionButtons
 * @description Exibe botões de ação comuns nas páginas de resultado (refazer, voltar, compartilhar)
 * @param {ResultActionButtonsProps} props - Propriedades do componente
 * @returns {JSX.Element} Componente com botões de ação
 */
const ResultActionButtons: React.FC<ResultActionButtonsProps> = ({
  handleRetakeTest,
  shareTitle,
  shareText
}) => {
  const navigate = useNavigate();
  
  /**
   * @function handleShare
   * @description Tenta compartilhar os resultados usando a Web Share API
   */
  const handleShare = () => {
    try {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      alert('Seu navegador não suporta a função de compartilhamento.');
    }
  };
  
  return (
    <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 justify-center animate-fadeIn" style={{animationDelay: "0.5s"}}>
      <Button 
        onClick={handleRetakeTest}
        className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
      >
        <RefreshCcw className="mr-2 h-4 w-4" />
        refazer o teste
      </Button>
      
      <Button
        onClick={() => navigate('/testes')}
        variant="outline"
        className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
      >
        <Home className="mr-2 h-4 w-4" />
        página inicial
      </Button>
      
      <Button
        variant="outline"
        className="bg-transparent text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
        onClick={handleShare}
      >
        <Share2 className="mr-2 h-4 w-4" />
        compartilhar
      </Button>
    </div>
  );
};

export default ResultActionButtons;