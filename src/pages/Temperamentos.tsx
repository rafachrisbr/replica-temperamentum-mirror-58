import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const Temperamentos = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Traduções para os temperamentos
  const getTemperamentTranslations = (type) => ({
    name: t(`temperaments.${type}.name`),
    description: t(`temperaments.${type}.description`),
    strengths: t(`temperaments.${type}.strengths`, { returnObjects: true }),
    weaknesses: t(`temperaments.${type}.weaknesses`, { returnObjects: true })
  });

  const temperaments = [
    {
      ...getTemperamentTranslations('sanguine'),
      color: '#FFD700',
      imageUrl: '/lovable-uploads/ca760c41-58f0-4db8-8466-a67cf2f92626.png'
    },
    {
      ...getTemperamentTranslations('choleric'),
      color: '#FF0000',
      imageUrl: '/lovable-uploads/d2d79412-d6c9-4b6a-9b47-9334957bce9b.png'
    },
    {
      ...getTemperamentTranslations('melancholic'),
      color: '#808080',
      imageUrl: '/lovable-uploads/f32a525f-6d0d-42d8-b67b-ae0dcc201804.png'
    },
    {
      ...getTemperamentTranslations('phlegmatic'),
      color: '#008000',
      imageUrl: '/lovable-uploads/1803ad9f-005f-4e36-8aba-b03f4e377f73.png'
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
                {t('temperaments.title')}
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {t('temperaments.description')}
            </p>
          </div>
          
          {/* ... restante do componente permanece igual ... */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Temperamentos;
