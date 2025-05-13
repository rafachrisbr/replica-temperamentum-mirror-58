
import React from 'react';
import { TemperamentResult } from '@/utils/quiz';
import { Card, CardContent } from '@/components/ui/card';

interface TemperamentChartProps {
  results: TemperamentResult[];
}

const TemperamentChart: React.FC<TemperamentChartProps> = ({ results }) => {
  const dominantTemperament = results[0];
  const secondTemperament = results[1];
  
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
  
  return (
    <Card className="bg-[#121212] text-white border-gray-700 w-full mt-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-serif mb-4 text-center">Seu Temperamento Principal</h3>
        
        <div className="flex justify-between mb-2">
          <span style={{ color: getTemperamentColor(dominantTemperament.type) }}>
            {dominantTemperament.name}
          </span>
          <span>{dominantTemperament.percentage}%</span>
        </div>
        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div 
            className="h-full rounded-full transition-all" 
            style={{ 
              width: `${dominantTemperament.percentage}%`,
              backgroundColor: getTemperamentColor(dominantTemperament.type)
            }}
          ></div>
        </div>
        
        <div className="flex justify-between mb-2 mt-4">
          <span style={{ color: getTemperamentColor(secondTemperament.type) }}>
            {secondTemperament.name}
          </span>
          <span>{secondTemperament.percentage}%</span>
        </div>
        <div className="w-full bg-gray-800 h-4 rounded-full">
          <div 
            className="h-full rounded-full transition-all" 
            style={{ 
              width: `${secondTemperament.percentage}%`,
              backgroundColor: getTemperamentColor(secondTemperament.type)
            }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperamentChart;
