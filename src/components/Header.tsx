
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full py-6 px-4 md:px-6 flex justify-center items-center">
      <div 
        className="text-2xl md:text-3xl font-serif text-white cursor-pointer uppercase tracking-wider" 
        onClick={() => navigate('/')}
      >
        Descubra seu Temperamento
      </div>
    </header>
  );
};

export default Header;
