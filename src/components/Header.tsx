/**
 * @file Header.tsx
 * @description Componente de cabeçalho principal do site
 * @author Temperamentum
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

/**
 * @component Header
 * @description Componente de cabeçalho que inclui a navegação principal e espaço para o menu fixo
 * @features
 * - Navegação principal através do componente Navbar
 * - Espaço reservado para o menu fixo
 * - Navegação programática com useNavigate
 * @returns {JSX.Element} Componente de cabeçalho renderizado
 */
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