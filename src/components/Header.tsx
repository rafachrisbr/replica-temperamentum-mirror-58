/**
 * @file Header.tsx
 * @description Componente de cabeçalho principal do site
 * @author Temperamentum
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

/**
 * @component Header
 * @description Componente de cabeçalho que inclui a navegação principal e espaço para o menu fixo
 * @features
 * - Navegação principal através do componente Navbar
 * - Espaço reservado para o menu fixo
 * - Navegação programática com useNavigate
 * - Seletor de idiomas
 * @returns {JSX.Element} Componente de cabeçalho renderizado
 */
const Header: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };
  
  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ca', name: 'Català' }
  ];
  
  return (
    <>
      <Navbar />
      <div className="h-16"></div> {/* Espaço para o menu fixo */}
      
      {/* Language selector */}
      <div className="fixed bottom-4 right-4 z-50">
        <DropdownMenu open={isLanguageMenuOpen} onOpenChange={setIsLanguageMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-black/70 border-gray-700 hover:bg-black/90"
            >
              <Globe className="h-5 w-5 text-[#D4AF37]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black/90 border-gray-700">
            {languages.map((lang) => (
              <DropdownMenuItem 
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`cursor-pointer hover:bg-gray-800 ${
                  i18n.language === lang.code ? 'text-[#D4AF37] font-medium' : 'text-white'
                }`}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Header;