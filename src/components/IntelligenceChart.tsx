
import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip 
} from 'recharts';

interface ChartData {
  subject: string;
  value: number;
  fullMark: number;
}

interface IntelligenceChartProps {
  results: Array<{
    name: string;
    percentage?: number;
    score?: number;
    type: string;
  }>;
}

const IntelligenceChart: React.FC<IntelligenceChartProps> = ({ results }) => {
  // Prepare data for chart
  const chartData: ChartData[] = results.map(result => ({
    subject: result.name.replace("Inteligência ", ""),
    value: result.percentage !== undefined ? result.percentage : 
           result.score !== undefined ? Math.round((result.score / 70) * 100) : 0,
    fullMark: 100
  }));

  return (
    <div className="w-full h-[400px] bg-[#121212] rounded-xl p-4 border border-gray-800">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#444" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#e0e0e0', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#e0e0e0' }} />
          <Radar
            name="Suas Inteligências"
            dataKey="value"
            stroke="#D4AF37"
            fill="#D4AF37"
            fillOpacity={0.6}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#212121', borderColor: '#444', color: '#fff' }}
            formatter={(value) => [`${value}%`, 'Pontuação']} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IntelligenceChart;
