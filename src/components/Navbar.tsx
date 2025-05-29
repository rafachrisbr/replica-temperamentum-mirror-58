/**
 * @file Navbar.tsx
 * @description Componente de navegação principal do site
 * @author Temperamentum
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @component Navbar
 * @description Barra de navegação responsiva com menu mobile
 * @features
 * - Menu de navegação fixo no topo
 * - Versão responsiva para desktop e mobile
 * - Indicação visual da página atual
 * - Menu dropdown para dispositivos móveis
 * - Navegação programática com useNavigate
 * - Internacionalização com i18next
 * @returns {JSX.Element} Componente de navegação renderizado
 */
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  /**
   * @constant {Array} navItems
   * @description Itens de navegação principal
   */
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.temperaments'), path: '/temperamentos' },
    { name: t('nav.tests'), path: '/testes' },
    { name: t('nav.meditations'), path: '/meditacoes' },
    { name: t('nav.family_education'), path: '/educacao-familiar' },
  ];

  /**
   * @constant {Array} languages
   * @description Idiomas disponíveis com seus códigos e caminhos para as bandeiras
   */
  const languages = [
    { code: 'pt', name: 'Português', flag: '/lovable-uploads/brasil.png' },
    { code: 'fr', name: 'Français', flag: '/lovable-uploads/franca.png' },
    { code: 'it', name: 'Italiano', flag: '/lovable-uploads/italia.png' },
    { code: 'de', name: 'Deutsch', flag: '/lovable-uploads/alemanha.png' },
    { code: 'ca', name: 'Català', flag: '/lovable-uploads/andorra.png' }
  ];

  /**
   * @function changeLanguage
   * @description Altera o idioma da aplicação
   * @param {string} lng - Código do idioma
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div 
            className="text-xl md:text-2xl font-serif text-white cursor-pointer tracking-wider" 
            onClick={() => navigate('/')}
          >
            Conhece-te a ti mesmo
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4 mr-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                      : "text-gray-300 hover:text-white"
                  )}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Language flags for desktop */}
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={cn(
                    "w-6 h-6 rounded-full overflow-hidden transition-all",
                    i18n.language === lang.code ? "ring-2 ring-[#D4AF37] scale-110" : "opacity-70 hover:opacity-100"
                  )}
                  title={lang.name}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          <div className={cn(
            "absolute top-full left-0 right-0 bg-black/95 transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
          )}>
            <div className="flex flex-col space-y-2 px-4 md:hidden">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-left transition-colors rounded-md",
                    location.pathname === item.path
                      ? "text-[#D4AF37] bg-[#D4AF37]/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Language flags for mobile */}
              <div className="flex flex-wrap gap-3 mt-2 pt-2 border-t border-gray-800">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors",
                      i18n.language === lang.code 
                        ? "bg-[#D4AF37]/10 text-[#D4AF37]" 
                        : "text-gray-300 hover:bg-white/5"
                    )}
                  >
                    <img 
                      src={lang.flag} 
                      alt={lang.name} 
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;