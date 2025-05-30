/**
 * @file TemperamentCard.tsx
 * @description Componente para exibir informações detalhadas sobre um temperamento
 * @author Temperamentum
 */

import React from 'react';
import { TemperamentResult } from '@/utils/quiz';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Book, User, Briefcase, Quote } from 'lucide-react';

/**
 * @typedef {Object} TemperamentCardProps
 * @property {TemperamentResult} temperament - Dados do temperamento a ser exibido
 * @property {boolean} [isDominant=false] - Indica se este é o temperamento dominante
 */
interface TemperamentCardProps {
  temperament: TemperamentResult;
  isDominant?: boolean;
}

/**
 * @component TemperamentCard
 * @description Exibe um card com informações detalhadas sobre um temperamento
 * @param {TemperamentCardProps} props - Propriedades do componente
 * @returns {JSX.Element} Card de temperamento
 */
const TemperamentCard: React.FC<TemperamentCardProps> = ({ 
  temperament,
  isDominant = false
}) => {
  /**
   * @function getTemperamentColor
   * @description Obtém a cor associada ao temperamento
   * @returns {string} Código de cor hexadecimal
   */
  const getTemperamentColor = () => {
    switch (temperament.type) {
      case 'sanguine':
        return '#FFD700'; // Amarelo
      case 'choleric':
        return '#FF0000'; // Vermelho
      case 'melancholic':
        return '#808080'; // Cinza
      case 'phlegmatic':
        return '#008000'; // Verde
      default:
        return '#D4AF37';
    }
  };
  
  /**
   * @function capitalizeNames
   * @description Capitaliza corretamente nomes próprios
   * @param {string} name - Nome a ser capitalizado
   * @returns {string} Nome capitalizado
   */
  const capitalizeNames = (name: string) => {
    return name.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };
  
  return (
    <div className="rounded-lg p-6 bg-[#121212] text-white font-text shadow-md border border-gray-800">
      <div className="flex flex-col mb-4">
        <h3 className="text-2xl font-serif font-semibold text-center mb-2" style={{ color: getTemperamentColor() }}>
          {temperament.name}
        </h3>
        <div className="flex justify-center my-2">
          <span className="text-2xl text-white">✝</span>
        </div>
        <p className="text-lg text-justify mb-6 first-letter:uppercase">{temperament.description.toLowerCase()}</p>
        
        {/* Tabela de Virtudes e Defeitos */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Book className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">virtudes e defeitos</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333]">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-[#222222]">
                  <TableRow>
                    <TableCell className="font-serif text-lg text-[#D4AF37] w-1/2">virtudes</TableCell>
                    <TableCell className="font-serif text-lg text-[#D4AF37] w-1/2">defeitos</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="align-top p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {temperament.virtues.map((virtue, index) => (
                          <li key={`virtue-${index}`} className="text-white first-letter:uppercase">{virtue.toLowerCase()}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="align-top p-4 border-l border-[#333333]">
                      <ul className="list-disc pl-5 space-y-1">
                        {temperament.weaknesses.map((weakness, index) => (
                          <li key={`weakness-${index}`} className="text-white first-letter:uppercase">{weakness.toLowerCase()}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        
        {/* Santos como exemplos */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">santos com este temperamento</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <ul className="list-disc pl-5 space-y-4">
                {temperament.saintsWithQuotes.map((saintWithQuote, index) => (
                  <li key={`saint-${index}`} className="text-white">
                    <span className="font-semibold">{capitalizeNames(saintWithQuote.name)}</span>: 
                    <span className="italic ml-2">"{saintWithQuote.quote}"</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Profissões Sugeridas */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">profissões recomendadas</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <div className="text-white">
                <p className="mb-3 text-justify first-letter:uppercase">{temperament.careerProfile.toLowerCase()}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {temperament.suggestedProfessions.map((profession, index) => (
                    <span 
                      key={`profession-${index}`}
                      className="px-3 py-1 bg-[#222222] rounded-full text-white text-sm first-letter:uppercase"
                    >
                      {profession.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Dicas Espirituais */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Quote className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">dicas espirituais</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-white first-letter:uppercase">
                "{temperament.spiritualTips.toLowerCase()}"
              </blockquote>
              <div className="mt-6 text-center">
                <blockquote className="italic text-[#D4AF37] font-serif">
                  "o tempo é uma impressão da eternidade. assim, o homem, que é tempo, carrega em si os sinais da eternidade."
                  <footer className="text-sm mt-2 text-white first-letter:uppercase">— santo agostinho</footer>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TemperamentCard;