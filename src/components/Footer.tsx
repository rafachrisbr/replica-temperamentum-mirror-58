/**
 * @file Footer.tsx
 * @description Componente de rodapé do site
 * @author Temperamentum
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @component Footer
 * @description Componente de rodapé que exibe informações de copyright, fontes e política de privacidade
 * @features
 * - Exibição de informações de copyright
 * - Exibição de fontes e referências
 * - Link para a política de privacidade
 * - Separador visual
 * @returns {JSX.Element} Componente de rodapé renderizado
 */
const Footer: React.FC = () => {
  return (
    <footer className="p-4 md:p-6 text-center text-[#A9A9A9] bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-[#444444] pt-4"></div>
        <p className="text-[#D4AF37] font-serif uppercase my-3 text-center">DEUS CARITAS EST</p>
        <p className="text-xs md:text-sm my-2">Este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
        <p className="text-xs my-2">Fontes principais: ensinamentos do Pe. Paulo Ricardo (curso "os quatro temperamentos") e canção nova (artigo "qual é o seu temperamento?").</p>
        <p className="text-xs my-2">As meditações são baseadas em reflexões teológicas e espirituais sobre os temperamentos e aspectos da vida cristã.</p>
        <div className="flex justify-center space-x-4 text-xs my-2">
          <p>© 2025 Rafael Christiano</p>
          <Link to="/privacidade" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;