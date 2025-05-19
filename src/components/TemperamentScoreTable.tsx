
import React from 'react';

type TemperamentScoreItem = {
  key: string;
  value: number;
};

type TemperamentScoreTableProps = {
  temperaments: TemperamentScoreItem[];
  totalPoints: number;
  getTemperamentName: (key: string) => string;
  getTemperamentColor: (type: string) => string;
};

const TemperamentScoreTable: React.FC<TemperamentScoreTableProps> = ({
  temperaments,
  totalPoints,
  getTemperamentName,
  getTemperamentColor
}) => {
  return (
    <div className="p-6 bg-[#121212] rounded-lg border border-gray-800">
      <h3 className="text-xl font-serif uppercase mb-4 text-amber-400 text-center">Pontuação por Temperamento</h3>
      <div className="space-y-4">
        {temperaments.map((temp) => (
          <div key={temp.key} className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-sm font-medium text-white">
                  {getTemperamentName(temp.key)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-amber-400">
                  {temp.value} pontos
                </span>
                <span className="text-sm ml-1 text-gray-400">
                  ({Math.round((temp.value / totalPoints) * 100)}%)
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-800">
              <div 
                style={{ 
                  width: `${Math.round((temp.value / totalPoints) * 100)}%`,
                  backgroundColor: getTemperamentColor(temp.key)
                }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperamentScoreTable;
