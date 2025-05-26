/**
 * @file TemperamentChart.tsx
 * @description Componente para exibir um gráfico visual dos resultados de temperamento
 * @author Temperamentum
 */

import React, { useState, useEffect } from 'react';
import { TemperamentResult } from '@/utils/quiz';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * @typedef {Object} TemperamentChartProps
 * @property {TemperamentResult[]} results - Resultados do teste de temperamento
 */
interface TemperamentChartProps {
  results: TemperamentResult[];
}

/**
 * @component TemperamentChart
 * @description Exibe um gráfico visual dos resultados de temperamento
 * @param {TemperamentChartProps} props - Propriedades do componente
 * @returns {JSX.Element} Gráfico de temperamentos
 */
const TemperamentChart: React.FC<TemperamentChartProps> = ({ results }) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0]);
  const isMobile = useIsMobile();
  
  const dominantTemperament = results[0];
  const secondTemperament = results[1];
  
  /**
   * @effect
   * @description Efeito para animar os valores dos gráficos
   */
  useEffect(() => {
    // Animar os valores dos gráficos
    const timer = setTimeout(() => {
      setAnimatedValues([dominantTemperament.percentage, secondTemperament.percentage]);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [dominantTemperament.percentage, secondTemperament.percentage]);
  
  /**
   * @function getTemperamentColor
   * @description Obtém a cor associada ao tipo de temperamento
   * @param {string} type - Tipo de temperamento
   * @returns {string} Código de cor hexadecimal
   */
  const getTemperamentColor = (type: string) => {
    switch (type) {
      case 'sanguine':
        return '#FFD700'; // Amarelo
      case 'choleric':
        return '#FF0000'; // Vermelho
      case 'melancholic':
        return '#808080'; // Cinza
      case 'phlegmatic':
        return '#008000'; // Verde
      default:
        return '#D4AF37';
    }
  };
  
  /**
   * @function getGradient
   * @description Cria um gradiente linear baseado na cor do temperamento
   * @param {string} color - Cor base para o gradiente
   * @returns {string} String CSS de gradiente linear
   */
  const getGradient = (color: string) => {
    return `linear-gradient(90deg, ${color}, ${color}80)`;
  };
  
  return (
    <Card className="bg-[#121212] text-white border border-gray-700 w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-serif mb-6 text-center first-letter:uppercase">seu perfil de temperamento</h3>
        
        <div className="space-y-6">
          {/* Gráfico do temperamento dominante */}
          <div>
            <div className="flex justify-between mb-2">
              <span 
                style={{ color: getTemperamentColor(dominantTemperament.type) }} 
                className="first-letter:uppercase font-medium"
              >
                {dominantTemperament.name.toLowerCase()}
              </span>
              <span className="font-mono">{animatedValues[0]}%</span>
            </div>
            <div className="w-full bg-gray-800 h-6 rounded-full overflow-hidden shadow-inner">
              <div 
                className="transition-all duration-1000 ease-out h-full rounded-full"
                style={{ 
                  width: `${animatedValues[0]}%`,
                  background: getGradient(getTemperamentColor(dominantTemperament.type))
                }}
                role="progressbar"
                aria-valuenow={animatedValues[0]}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {!isMobile && (
              <p className="text-xs text-gray-400 mt-1 italic">
                {dominantTemperament.description ? dominantTemperament.description.substring(0, 100) + '...' : `Características predominantes de temperamento ${dominantTemperament.name.toLowerCase()}`}
              </p>
            )}
          </div>
          
          {/* Gráfico do segundo temperamento */}
          <div>
            <div className="flex justify-between mb-2">
              <span 
                style={{ color: getTemperamentColor(secondTemperament.type) }} 
                className="first-letter:uppercase font-medium"
              >
                {secondTemperament.name.toLowerCase()}
              </span>
              <span className="font-mono">{animatedValues[1]}%</span>
            </div>
            <div className="w-full bg-gray-800 h-6 rounded-full overflow-hidden shadow-inner">
              <div 
                className="transition-all duration-1000 ease-out h-full rounded-full"
                style={{ 
                  width: `${animatedValues[1]}%`,
                  background: getGradient(getTemperamentColor(secondTemperament.type))
                }}
                role="progressbar"
                aria-valuenow={animatedValues[1]}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {!isMobile && (
              <p className="text-xs text-gray-400 mt-1 italic">
                {secondTemperament.description ? secondTemperament.description.substring(0, 100) + '...' : `Influência secundária do temperamento ${secondTemperament.name.toLowerCase()}`}
              </p>
            )}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-300">
              O seu temperamento combina características predominantes de 
              <span className="font-medium mx-1" style={{ color: getTemperamentColor(dominantTemperament.type) }}>
                {dominantTemperament.name.toLowerCase()}
              </span>
              com influências de 
              <span className="font-medium mx-1" style={{ color: getTemperamentColor(secondTemperament.type) }}>
                {secondTemperament.name.toLowerCase()}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperamentChart;