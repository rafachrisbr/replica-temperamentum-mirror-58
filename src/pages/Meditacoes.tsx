import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, ChevronLeft } from 'lucide-react';

const Meditacoes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12 animate-fadeIn">
        <div className="max-w-5xl w-full space-y-8">
          <div className="text-center mb-10 animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
              Meditações
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Uma coleção de reflexões espirituais sobre os temperamentos, virtudes e figuras importantes da fé cristã. 
              Estas meditações buscam aproximar a teoria dos temperamentos da vida espiritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card para Meditação sobre São João Evangelista */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  São João Evangelista
                </CardTitle>
                <CardDescription className="text-gray-300">
                  O Discípulo Amado e a Profundidade do Temperamento Melancólico
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/a1a116ba-8451-4500-a0ee-9655d929d636.png" 
                  alt="São João Evangelista"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  Esta meditação explora a figura singular de São João Evangelista, o discípulo a quem Jesus amava, 
                  sob a perspectiva de seu temperamento melancólico. Através da análise de passagens bíblicas e da reflexão 
                  sobre suas características – sensibilidade, intensidade e profundidade.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                  <Link to="/meditacao-joao" className="flex items-center justify-center gap-2 w-full">
                    Ler meditação completa
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para Meditação sobre os Três Amores */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.4s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  Os Três Amores
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Eros, Philia e Ágape – Da Paixão à União Divina
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/1633b334-1fa7-4520-b9c9-31d93e65a940.png" 
                  alt="Os Três Amores - Sagrado Coração"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  Esta meditação explora as três dimensões do amor na tradição cristã: Eros (paixão), 
                  Philia (amizade) e Ágape (amor incondicional). Ao refletir sobre estes três aspectos, 
                  compreendemos como cada forma de amor nos guia à união com o Divino.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-tres-amores" className="flex items-center justify-center gap-2 w-full">
                    Ler meditação completa
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para Meditação sobre a Amizade */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.5s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  A Amizade
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Comunhão de Almas em Cristo
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/amigos.jpg" 
                  alt="Amizade em Cristo"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  Esta meditação explora a amizade como dom precioso e expressão do amor divino, 
                  contemplando a amizade de Jesus com seus apóstolos e as lições de obras como 
                  O Pequeno Príncipe e a Imitação de Cristo.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-amizade" className="flex items-center justify-center gap-2 w-full">
                    Ler meditação completa
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para A Vocação à Santidade */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.6s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  A Vocação à Santidade
                </CardTitle>
                <CardDescription className="text-gray-300">
                  O chamado universal à perfeição cristã
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/vocatio2.png" 
                  alt="A Vocação à Santidade"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  Esta meditação explora o chamado universal à santidade, baseada nos ensinamentos de 
                  Santo Afonso Maria de Ligório e na tradição da Igreja. Descubra como a busca pela 
                  perfeição cristã se realiza no cotidiano através do amor a Jesus Cristo.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-vocacao" className="flex items-center justify-center gap-2 w-full">
                    Ler meditação completa
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Meditacoes;