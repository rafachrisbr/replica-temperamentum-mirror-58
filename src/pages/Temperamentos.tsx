
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
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
      description: 'Pessoas com temperamento sanguíneo são tipicamente extrovertidas, sociáveis e otimistas, vendo o copo meio cheio. Gostam de estar no centro das atenções, e as interações sociais são fáceis para elas, sendo frequentemente falantes e enérgicas. São conhecidas pela paixão pela vida, pelo amor às pessoas e pela busca por aventura. Possuem um talento inato para a comunicação, usando-o para inspirar e motivar os outros. São espontâneas e se adaptam facilmente a novas situações.',
      imageUrl: '/lovable-uploads/ca760c41-58f0-4db8-8466-a67cf2f92626.png',
      strengths: ['Excelentes em construir relacionamentos', 'Ótimos comunicadores', 'Espírito contagiante', 'Adaptáveis'],
      weaknesses: ['Impulsivos', 'Indecisos', 'Buscam comportamentos de risco', 'Dificuldade em manter o foco']
    },
    {
      name: 'Colérico',
      color: '#FF0000',
      description: 'As características definidoras do temperamento colérico são a dominância e a assertividade. Indivíduos coléricos são orientados para objetivos, motivados e grandes realizadores em contextos como trabalho, escola ou lazer, frequentemente escolhidos como líderes. São pessoas de ação, focadas e práticas, capazes de tomar decisões difíceis com uma comunicação direta.',
      imageUrl: '/lovable-uploads/d2d79412-d6c9-4b6a-9b47-9334957bce9b.png',
      strengths: ['Líderes natos', 'Excelentes em tomar iniciativa', 'Resilientes', 'Decisivos'],
      weaknesses: ['Impacientes', 'Teimosos', 'Podem ser agressivos', 'Dificuldades com a ira']
    },
    {
      name: 'Melancólico',
      color: '#808080',
      description: 'O temperamento melancólico é associado à introspecção e à profundidade de pensamento. Embora possam ser reservados, são atenciosos, sensíveis, analíticos e metódicos, especialmente no ambiente de trabalho. Possuem uma notável capacidade de empatia, estando cientes de suas próprias emoções e das emoções dos outros, e demonstram um coração compassivo e uma compreensão profunda da natureza humana. São pessoas fiéis e comprometidas.',
      imageUrl: '/lovable-uploads/f32a525f-6d0d-42d8-b67b-ae0dcc201804.png',
      strengths: ['Detalhistas', 'Organizados', 'Ponderados', 'Grande empatia'],
      weaknesses: ['Preferem trabalhar sozinhos', 'Ansiosos', 'Perfeccionistas', 'Podem ficar mal-humorados']
    },
    {
      name: 'Fleumático',
      color: '#008000',
      description: 'O termo "descontraído" costuma caracterizar as pessoas com temperamento fleumático. São indivíduos confiáveis, pacientes e que encontram conforto na rotina e nas atividades do dia a dia. Geralmente possuem um temperamento suave e tendem à introversão, preferindo ficar à margem, mas constroem relacionamentos sólidos e duradouros graças à sua natureza amigável e paciente. Evitam conflitos, valorizam a harmonia e são consistentes, raramente se agitando mesmo em situações estressantes.',
      imageUrl: '/lovable-uploads/1803ad9f-005f-4e36-8aba-b03f4e377f73.png',
      strengths: ['Pacificadores', 'Confiáveis', 'Estáveis', 'Pacientes'],
      weaknesses: ['Demonstram pouca emoção', 'Evitam conflitos', 'Complacentes', 'Falta de entusiasmo']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 mt-8">
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
              className="bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all uppercase font-semibold tracking-wide rounded-md"
            >
              refazer o teste
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                <div className="w-full relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={temp.imageUrl} 
                      alt={`Representação do temperamento ${temp.name}`} 
                      className="object-cover w-full h-full"
                    />
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
          
          <div className="bg-[#121212] border border-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-serif mb-4 text-[#D4AF37]">Observações Adicionais</h3>
            <div className="space-y-4 text-gray-300">
              <p className="first-letter:uppercase">
                lembre-se de que a maioria das pessoas não se encaixa perfeitamente em um único tipo, possuindo traços de diferentes temperamentos, embora um geralmente se sobressaia.
              </p>
              <p className="first-letter:uppercase">
                não há consenso científico sobre qual temperamento é o mais raro; essa diversidade deve ser valorizada.
              </p>
              
              <div className="w-full flex justify-center my-4">
                <img 
                  src="/lovable-uploads/da399624-f37e-4a11-9cb9-1920b75282de.png" 
                  alt="Os quatro temperamentos" 
                  className="max-w-full md:max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Temperamentos;
