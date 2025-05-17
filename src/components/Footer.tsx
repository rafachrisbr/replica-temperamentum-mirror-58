
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 text-center text-[#A9A9A9] bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-[#444444] pt-4"></div>
        <p className="text-[#D4AF37] font-serif uppercase my-3 text-center">DEUS CARITAS EST</p>
        <p className="text-sm my-2 first-letter:uppercase">Este teste é uma ferramenta de autoconhecimento e não substitui o acompanhamento espiritual.</p>
        <p className="text-xs my-2 first-letter:uppercase">Fontes principais: ensinamentos do Pe. Paulo Ricardo (curso "os quatro temperamentos") e canção nova (artigo "qual é o seu temperamento?").</p>
        <p className="text-xs my-2 first-letter:uppercase">As meditações são baseadas em reflexões teológicas e espirituais sobre os temperamentos e aspectos da vida cristã.</p>
        <p className="text-sm my-2 text-center first-letter:uppercase">© 2025 Rafael Christiano</p>
      </div>
    </footer>
  );
};

export default Footer;
