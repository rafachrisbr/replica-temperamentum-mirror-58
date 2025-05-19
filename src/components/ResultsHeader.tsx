
import React from 'react';

type ResultsHeaderProps = {
  title: string;
  subtitle: string;
};

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-b from-[#121212] to-[#171717] p-4 md:p-6 rounded-lg shadow-lg border border-gray-800 animate-scale-in">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-2">
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      
      <div className="inline-block p-3 md:p-4 bg-[#000000] bg-opacity-40 rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-lg md:text-xl font-serif uppercase text-white">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default ResultsHeader;
