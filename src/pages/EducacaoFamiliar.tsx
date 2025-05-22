import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EducacaoFamiliar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 mt-8 animate-fadeIn">
        <div className="max-w-6xl w-full space-y-8">
          <div className="text-center mb-8 animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Educação Familiar
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Reflexões e orientações sobre a educação familiar à luz dos temperamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Card - Original Article */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  A Importância da Educação das Crianças Conforme seu Temperamento
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Compreenda como o temperamento influencia a educação dos seus filhos
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/criancasTemperamento.jpeg" 
                  alt="Educação das crianças"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 text-sm line-clamp-3">
                  A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes.
                </p>
                <Button 
                  onClick={() => navigate('/educacao-familiar/artigo')}
                  className="mt-4 w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  variant="outline"
                >
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Second Card - New Article */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.4s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  A Importância da Família na Sociedade e no Plano de Deus
                </CardTitle>
                <CardDescription className="text-gray-300">
                  A família como primeira instituição e base da sociedade
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/paisFilhos.jpg" 
                  alt="Família unida"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 text-sm line-clamp-3">
                  A família é a instituição social mais antiga da humanidade, fundamento de toda sociedade. Desde as origens, a família foi pensada por Deus como o primeiro ambiente de comunhão, proteção, educação e transmissão de valores.
                </p>
                <Button 
                  onClick={() => navigate('/educacao-familiar/familia')}
                  className="mt-4 w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                  variant="outline"
                >
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliar;