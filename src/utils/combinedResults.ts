
import { TemperamentResult } from '@/utils/quiz';
import { IntelligenceResult } from '@/utils/intelligences';
import { getIntelligenceCorrelations } from '@/utils/intelligences';

export const getCombinedAnalysis = (
  temperamentResults: TemperamentResult[], 
  intelligenceResults: IntelligenceResult[]
): string => {
  if (!temperamentResults?.length || !intelligenceResults?.length) {
    return '';
  }
  
  const dominantTemperament = temperamentResults[0];
  const topIntelligences = intelligenceResults.slice(0, 2).map(i => i.type);

  let analysis = '';

  // Primary correlation between temperament and top intelligences
  analysis += getIntelligenceCorrelations(dominantTemperament.type, topIntelligences);

  // Additional insights based on temperament and intelligences
  switch (dominantTemperament.type) {
    case 'sanguine':
      analysis += ' Como pessoa sanguínea, você se beneficiaria de usar sua sociabilidade natural e entusiasmo para expressar suas inteligências em ambientes colaborativos e dinâmicos. Atividades em grupo, discussões animadas e projetos interativos potencializarão suas habilidades.';
      break;
    case 'choleric':
      analysis += ' Com seu temperamento colérico, você tende a aplicar suas inteligências com determinação e foco em resultados. Estabelecer metas claras, assumir posições de liderança e buscar desafios competitivos são formas de potencializar suas habilidades naturais.';
      break;
    case 'melancholic':
      analysis += ' Seu temperamento melancólico favorece a expressão de suas inteligências de forma profunda e significativa. Ambientes que permitam concentração, atenção aos detalhes e a busca pela excelência em sua área de interesse serão ideais para seu desenvolvimento.';
      break;
    case 'phlegmatic':
      analysis += ' Como pessoa de temperamento fleumático, você tende a aplicar suas inteligências de forma equilibrada e consistente. Ambientes tranquilos, projetos de longo prazo e atividades que permitam reflexão serão particularmente benéficos para o desenvolvimento de seus talentos.';
      break;
  }
  
  const dominantIntelligence = intelligenceResults[0];
  
  // Career suggestions based on combination
  analysis += ` Considerando seu temperamento ${dominantTemperament.name} e sua ${dominantIntelligence.name} predominante, você pode se destacar em carreiras como ${dominantTemperament.suggestedProfessions.slice(0, 2).join(', ')} ou ${dominantIntelligence.careers.slice(0, 2).join(', ')}, que valorizam tanto suas inclinações naturais quanto suas aptidões intelectuais específicas.`;

  return analysis;
};

export const getPersonalDevelopmentTips = (
  temperamentResults: TemperamentResult[], 
  intelligenceResults: IntelligenceResult[]
): string[] => {
  if (!temperamentResults?.length || !intelligenceResults?.length) {
    return [];
  }
  
  const dominantTemperament = temperamentResults[0];
  const dominantIntelligence = intelligenceResults[0];
  
  const tips: string[] = [];
  
  // General development tip
  tips.push(`Procure ambientes e atividades que combinem seu temperamento ${dominantTemperament.name} com oportunidades para expressar sua ${dominantIntelligence.name}.`);
  
  // Temperament-specific tip
  switch (dominantTemperament.type) {
    case 'sanguine':
      tips.push('Trabalhe sua constância e perseverança, canalizando seu entusiasmo natural em projetos de longo prazo.');
      break;
    case 'choleric':
      tips.push('Cultive a paciência e a capacidade de escuta, equilibrando sua determinação com maior sensibilidade às necessidades dos outros.');
      break;
    case 'melancholic':
      tips.push('Busque equilíbrio entre sua profundidade analítica e a ação prática, evitando o perfeccionismo paralisante.');
      break;
    case 'phlegmatic':
      tips.push('Desenvolva mais iniciativa e expressividade, encontrando motivação para sair da sua zona de conforto.');
      break;
  }
  
  // Intelligence-specific tip
  tips.push(`Para desenvolver ainda mais sua ${dominantIntelligence.name}, experimente regularmente: ${dominantIntelligence.activities.slice(0, 2).join(' e ')}.`);
  
  // Balancing tip
  const weakestIntelligence = intelligenceResults[intelligenceResults.length - 1];
  tips.push(`Considere dedicar algum tempo para desenvolver sua ${weakestIntelligence.name}, o que trará mais equilíbrio ao seu perfil.`);
  
  // Spiritual connection
  if (dominantTemperament.spiritualTips) {
    tips.push(`Em sua vida espiritual, ${dominantTemperament.spiritualTips}`);
  }
  
  return tips;
};
