
import React from 'react';
import { TemperamentResult } from '@/utils/quiz';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Book, User, Briefcase, Quote } from 'lucide-react';

interface TemperamentCardProps {
  temperament: TemperamentResult;
  isDominant?: boolean;
}

const TemperamentCard: React.FC<TemperamentCardProps> = ({ 
  temperament,
  isDominant = false
}) => {
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
  
  return (
    <div className="rounded-lg p-6 bg-[#121212] text-white font-serif shadow-md border border-gray-800">
      <div className="flex flex-col mb-4">
        <h3 className="text-2xl font-semibold text-center mb-2" style={{ color: getTemperamentColor() }}>
          {temperament.name}
        </h3>
        <div className="flex justify-center my-2">
          <span className="text-2xl text-white">✝</span>
        </div>
        <p className="text-lg text-justify mb-6">{temperament.description}</p>
        
        {/* Tabela de Virtudes e Defeitos */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Book className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">Virtudes e Defeitos</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333]">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-[#222222]">
                  <TableRow>
                    <TableCell className="font-serif text-lg text-[#D4AF37] w-1/2">Virtudes</TableCell>
                    <TableCell className="font-serif text-lg text-[#D4AF37] w-1/2">Defeitos</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="align-top p-4">
                      <ul className="list-disc pl-5 space-y-1">
                        {temperament.virtues.map((virtue, index) => (
                          <li key={`virtue-${index}`} className="text-white">{virtue}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="align-top p-4 border-l border-[#333333]">
                      <ul className="list-disc pl-5 space-y-1">
                        {temperament.weaknesses.map((weakness, index) => (
                          <li key={`weakness-${index}`} className="text-white">{weakness}</li>
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
            <h4 className="text-xl text-[#D4AF37]">Santos com este temperamento</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <ul className="list-disc pl-5 space-y-2">
                {temperament.saints.map((saint, index) => (
                  <li key={`saint-${index}`} className="text-white">{saint}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Profissões Sugeridas */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xl text-[#D4AF37]">Profissões Recomendadas</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <div className="text-white">
                <p className="mb-3 text-justify">{temperament.careerProfile}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {temperament.suggestedProfessions.map((profession, index) => (
                    <span 
                      key={`profession-${index}`}
                      className="px-3 py-1 bg-[#222222] rounded-full text-white text-sm"
                    >
                      {profession}
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
            <h4 className="text-xl text-[#D4AF37]">Dicas Espirituais</h4>
          </div>
          
          <Card className="bg-transparent border-[#333333] p-4">
            <CardContent className="pt-0">
              <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-white">
                "{temperament.spiritualTips}"
              </blockquote>
              <div className="mt-6 text-center">
                <blockquote className="italic text-[#D4AF37] font-serif">
                  "O tempo é uma impressão da eternidade. Assim, o homem, que é tempo, carrega em si os sinais da eternidade."
                  <footer className="text-sm mt-2 text-white">— Santo Agostinho</footer>
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
