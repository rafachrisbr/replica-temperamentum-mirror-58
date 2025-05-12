
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full py-6 px-4 md:px-6 flex justify-between items-center">
      <div 
        className="text-xl font-serif text-white cursor-pointer uppercase tracking-wider" 
        onClick={() => navigate('/')}
      >
        Temperamentum
      </div>
    </header>
  );
};

export default Header;
