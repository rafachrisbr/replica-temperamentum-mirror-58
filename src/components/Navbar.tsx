import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Temperamentos', path: '/temperamentos' },
    { name: 'Testes', path: '/testes' },
    { name: 'Meditações', path: '/meditacoes' },
    { name: 'Educação Familiar', path: '/educacao-familiar' },
  ];

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
          
          <div className="flex space-x-4">
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
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;