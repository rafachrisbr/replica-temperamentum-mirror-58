
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, ChevronLeft } from 'lucide-react';

const Meditacoes = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12 animate-fadeIn">
        <div className="max-w-5xl w-full space-y-8">
          <div className="text-center mb-10 animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-6">
              {t('meditations.title')}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {t('meditations.description')} {t('meditations.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card para Meditação sobre São João Evangelista */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  {t('meditations.cards.joao.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('meditations.cards.joao.subtitle')}
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/a1a116ba-8451-4500-a0ee-9655d929d636.png" 
                  alt={t('meditations.cards.joao.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  {t('meditations.cards.joao.description')}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-joao" className="flex items-center justify-center gap-2 w-full">
                    {t('meditations.read_complete')}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para Meditação sobre os Três Amores */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.4s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  {t('meditations.cards.tres_amores.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('meditations.cards.tres_amores.subtitle')}
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/1633b334-1fa7-4520-b9c9-31d93e65a940.png" 
                  alt={t('meditations.cards.tres_amores.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  {t('meditations.cards.tres_amores.description')}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-tres-amores" className="flex items-center justify-center gap-2 w-full">
                    {t('meditations.read_complete')}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para Meditação sobre a Amizade */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.5s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  {t('meditations.cards.amizade.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('meditations.cards.amizade.subtitle')}
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/amigos.jpg" 
                  alt={t('meditations.cards.amizade.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  {t('meditations.cards.amizade.description')}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-amizade" className="flex items-center justify-center gap-2 w-full">
                    {t('meditations.read_complete')}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para A Vocação à Santidade */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.6s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  {t('meditations.cards.vocacao.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('meditations.cards.vocacao.subtitle')}
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/vocatio2.png" 
                  alt={t('meditations.cards.vocacao.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  {t('meditations.cards.vocacao.description')}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-vocacao" className="flex items-center justify-center gap-2 w-full">
                    {t('meditations.read_complete')}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card para A Oração: União com Deus */}
            <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.7s] opacity-0 fill-mode-forwards">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                  {t('meditations.cards.oracao.title')}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {t('meditations.cards.oracao.subtitle')}
                </CardDescription>
              </CardHeader>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/cardOração.png" 
                  alt={t('meditations.cards.oracao.title')}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="py-4 flex-grow">
                <p className="text-gray-300 line-clamp-4">
                  {t('meditations.cards.oracao.description')}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <Link to="/meditacao-oracao" className="flex items-center justify-center gap-2 w-full">
                    {t('meditations.read_complete')}
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
