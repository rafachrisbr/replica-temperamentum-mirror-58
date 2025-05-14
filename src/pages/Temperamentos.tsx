
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LatinPhrase from '@/components/LatinPhrase';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Home, ArrowLeft } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const Temperamentos = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const temperaments = [
    {
      name: 'Sanguíneo',
      color: '#FFD700',
      description: 'Caracterizado por sua vivacidade e entusiasmo. Pessoas com esse temperamento tendem a ser extrovertidas, otimistas e comunicativas. Procuram diversão e são socialmente populares.',
      imageUrl: 'https://placehold.co/400x300/FFD700/111111?text=Sanguíneo',
      strengths: ['Otimismo', 'Carisma', 'Entusiasmo', 'Espontaneidade'],
      weaknesses: ['Distraído', 'Indisciplina', 'Volubilidade', 'Superficialidade']
    },
    {
      name: 'Colérico',
      color: '#FF0000',
      description: 'Caracterizado por sua natureza dinâmica e decidida. Pessoas com esse temperamento tendem a ser líderes naturais, determinados e orientados para objetivos, com forte vontade e autoconfiança.',
      imageUrl: 'https://placehold.co/400x300/FF0000/111111?text=Colérico',
      strengths: ['Liderança', 'Determinação', 'Produtividade', 'Visão'],
      weaknesses: ['Impaciência', 'Autoritarismo', 'Intolerância', 'Insensibilidade']
    },
    {
      name: 'Melancólico',
      color: '#808080',
      description: 'Caracterizado por sua profundidade e contemplação. Pessoas com esse temperamento tendem a ser analíticas, perfeccionistas e sensíveis, com grande capacidade para apreciar arte e beleza.',
      imageUrl: 'https://placehold.co/400x300/808080/111111?text=Melancólico',
      strengths: ['Profundidade', 'Perfeccionismo', 'Lealdade', 'Criatividade'],
      weaknesses: ['Pessimismo', 'Autocrítica', 'Indecisão', 'Hipersensibilidade']
    },
    {
      name: 'Fleumático',
      color: '#008000',
      description: 'Caracterizado por sua calma e equilíbrio. Pessoas com esse temperamento tendem a ser pacíficas, relaxadas e consistentes, adaptando-se facilmente às situações e evitando conflitos.',
      imageUrl: 'https://placehold.co/400x300/008000/111111?text=Fleumático',
      strengths: ['Paciência', 'Diplomacia', 'Consistência', 'Objetividade'],
      weaknesses: ['Passividade', 'Indecisão', 'Indiferença', 'Resistência a mudanças']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <LatinPhrase />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6">
        <div className="max-w-6xl w-full space-y-8 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                os quatro temperamentos
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Compreenda as características fundamentais de cada temperamento e como eles influenciam nossos comportamentos, reações emocionais e relacionamentos.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              voltar
            </Button>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              <Home className="mr-2 h-4 w-4" />
              início
            </Button>
            
            <Button
              onClick={() => navigate('/quiz')}
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all hover:scale-105 uppercase font-semibold tracking-wide rounded-md"
            >
              refazer o teste
            </Button>
          </div>
          
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-8`}>
            {temperaments.map((temp, index) => (
              <Card 
                key={temp.name} 
                className="bg-[#121212] border border-gray-800 overflow-hidden transition-transform duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#D4AF37]/20"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                <CardHeader className={`p-4`} style={{backgroundColor: `${temp.color}20`}}>
                  <h3 className="text-xl md:text-2xl font-serif text-center" style={{color: temp.color}}>
                    {temp.name}
                  </h3>
                </CardHeader>
                <div className="w-full h-40 relative">
                  <AspectRatio ratio={4/3}>
                    <div className="bg-gray-900 h-full flex items-center justify-center">
                      <div className="text-4xl" style={{color: temp.color}}>✝</div>
                    </div>
                  </AspectRatio>
                </div>
                <CardContent className="p-5 space-y-4">
                  <p className="text-gray-300 text-justify first-letter:uppercase">
                    {temp.description.toLowerCase()}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: temp.color}}>virtudes:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {temp.strengths.map((strength, i) => (
                          <li key={i} className="text-gray-300 text-sm first-letter:uppercase">{strength.toLowerCase()}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{color: temp.color}}>defeitos:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {temp.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-gray-300 text-sm first-letter:uppercase">{weakness.toLowerCase()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Temperamentos;
