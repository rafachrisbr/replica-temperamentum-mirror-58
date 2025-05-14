
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="h-16"></div> {/* Espaço para o menu fixo */}
    </>
  );
};

export default Header;
