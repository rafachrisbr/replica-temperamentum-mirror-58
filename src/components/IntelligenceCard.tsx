
import React from 'react';
import { IntelligenceResult } from '@/utils/intelligences';
import { Book, Brain, Compass, User, Users, Music, Activity, Leaf } from 'lucide-react';

interface IntelligenceCardProps {
  intelligence: IntelligenceResult;
  isDominant?: boolean;
}

const IntelligenceCard: React.FC<IntelligenceCardProps> = ({ intelligence, isDominant = false }) => {
  const getIcon = () => {
    switch (intelligence.icon) {
      case 'book':
        return <Book className="h-8 w-8" />;
      case 'brain':
        return <Brain className="h-8 w-8" />;
      case 'compass':
        return <Compass className="h-8 w-8" />;
      case 'square-x':
        return <User className="h-8 w-8" />;
      case 'users':
        return <Users className="h-8 w-8" />;
      case 'lightbulb':
        return <Music className="h-8 w-8" />;
      case 'square-pen':
        return <Activity className="h-8 w-8" />;
      case 'square-check':
        return <Leaf className="h-8 w-8" />;
      default:
        return <Brain className="h-8 w-8" />;
    }
  };

  const getBackgroundColor = () => {
    switch (intelligence.type) {
      case 'linguistic':
        return 'bg-gradient-to-br from-blue-800 to-blue-900';
      case 'logical':
        return 'bg-gradient-to-br from-yellow-700 to-yellow-800';
      case 'spatial':
        return 'bg-gradient-to-br from-green-700 to-green-800';
      case 'musical':
        return 'bg-gradient-to-br from-purple-700 to-purple-800';
      case 'bodily':
        return 'bg-gradient-to-br from-red-700 to-red-800';
      case 'interpersonal':
        return 'bg-gradient-to-br from-pink-700 to-pink-800';
      case 'intrapersonal':
        return 'bg-gradient-to-br from-indigo-700 to-indigo-800';
      case 'naturalist':
        return 'bg-gradient-to-br from-green-600 to-emerald-700';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-800';
    }
  };

  return (
    <div className={`${getBackgroundColor()} rounded-xl p-6 border border-white/10 ${isDominant ? 'shadow-lg shadow-amber-900/20' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-serif uppercase ${isDominant ? 'text-amber-400' : 'text-white'}`}>
          {intelligence.name}
        </h3>
        <div className={`flex items-center justify-center rounded-full p-2 ${isDominant ? 'bg-amber-400/20 text-amber-400' : 'bg-white/20 text-white'}`}>
          {getIcon()}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-black/30 h-2 rounded-full">
          <div 
            className={`h-full rounded-full ${isDominant ? 'bg-amber-400' : 'bg-white/70'}`}
            style={{ width: `${intelligence.percentage}%` }}
          ></div>
        </div>
        <div className="text-right mt-1 text-sm font-medium">{intelligence.percentage}%</div>
      </div>
      
      <p className="text-white/90 text-sm font-text mb-4">{intelligence.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-white/80 text-sm font-medium mb-1 uppercase tracking-wider">Pontos Fortes</h4>
          <ul className="text-white/70 text-sm space-y-1">
            {intelligence.strengths.slice(0, 3).map((strength, index) => (
              <li key={index} className="flex items-start space-x-1">
                <span className="inline-block w-1 h-1 rounded-full bg-white/70 mt-2"></span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white/80 text-sm font-medium mb-1 uppercase tracking-wider">Carreiras Compatíveis</h4>
          <ul className="text-white/70 text-sm space-y-1">
            {intelligence.careers.slice(0, 3).map((career, index) => (
              <li key={index} className="flex items-start space-x-1">
                <span className="inline-block w-1 h-1 rounded-full bg-white/70 mt-2"></span>
                <span>{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceCard;
