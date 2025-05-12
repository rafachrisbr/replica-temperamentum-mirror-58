
export interface Option {
  id: string;
  text: string;
  temperament: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'Como você age em situações sociais?',
    options: [
      {
        id: 'q1_a',
        text: 'Sou extrovertido e fico energizado ao socializar',
        temperament: 'sanguine'
      },
      {
        id: 'q1_b',
        text: 'Gosto de assumir o controle e liderar conversas',
        temperament: 'choleric'
      },
      {
        id: 'q1_c',
        text: 'Prefiro observar e fazer conexões profundas',
        temperament: 'melancholic'
      },
      {
        id: 'q1_d',
        text: 'Sou relaxado e me adapto ao fluxo da interação',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q2',
    text: 'Como você lida com desafios?',
    options: [
      {
        id: 'q2_a',
        text: 'Encaro com otimismo e busco soluções criativas',
        temperament: 'sanguine'
      },
      {
        id: 'q2_b',
        text: 'Enfrento diretamente e trabalho até resolver',
        temperament: 'choleric'
      },
      {
        id: 'q2_c',
        text: 'Analiso detalhadamente antes de agir',
        temperament: 'melancholic'
      },
      {
        id: 'q2_d',
        text: 'Mantenho a calma e busco o caminho de menor resistência',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q3',
    text: 'O que mais te motiva?',
    options: [
      {
        id: 'q3_a',
        text: 'Diversão, experiências e conexões sociais',
        temperament: 'sanguine'
      },
      {
        id: 'q3_b',
        text: 'Conquistas, resultados e reconhecimento',
        temperament: 'choleric'
      },
      {
        id: 'q3_c',
        text: 'Perfeição, significado e propósito',
        temperament: 'melancholic'
      },
      {
        id: 'q3_d',
        text: 'Paz, harmonia e estabilidade',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q4',
    text: 'Como você toma decisões?',
    options: [
      {
        id: 'q4_a',
        text: 'Impulsivamente, seguindo minha intuição',
        temperament: 'sanguine'
      },
      {
        id: 'q4_b',
        text: 'Rapidamente, baseado em objetivos',
        temperament: 'choleric'
      },
      {
        id: 'q4_c',
        text: 'Cuidadosamente, considerando todos os detalhes',
        temperament: 'melancholic'
      },
      {
        id: 'q4_d',
        text: 'Pacientemente, buscando consenso',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q5',
    text: 'Como você reage ao estresse?',
    options: [
      {
        id: 'q5_a',
        text: 'Busco distração e diversão',
        temperament: 'sanguine'
      },
      {
        id: 'q5_b',
        text: 'Fico irritado e busco resolver imediatamente',
        temperament: 'choleric'
      },
      {
        id: 'q5_c',
        text: 'Me preocupo e analiso todas as possibilidades',
        temperament: 'melancholic'
      },
      {
        id: 'q5_d',
        text: 'Mantenho a calma e evito o conflito',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q6',
    text: 'Como você se vê no trabalho em equipe?',
    options: [
      {
        id: 'q6_a',
        text: 'Sou animado e trago energia positiva',
        temperament: 'sanguine'
      },
      {
        id: 'q6_b',
        text: 'Sou focado em resultados e assumo responsabilidades',
        temperament: 'choleric'
      },
      {
        id: 'q6_c',
        text: 'Sou organizado e atento aos detalhes',
        temperament: 'melancholic'
      },
      {
        id: 'q6_d',
        text: 'Sou paciente e bom mediador',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q7',
    text: 'O que mais te incomoda nos outros?',
    options: [
      {
        id: 'q7_a',
        text: 'Pessoas sérias demais ou negativas',
        temperament: 'sanguine'
      },
      {
        id: 'q7_b',
        text: 'Ineficiência ou falta de ação',
        temperament: 'choleric'
      },
      {
        id: 'q7_c',
        text: 'Desorganização ou falta de atenção aos detalhes',
        temperament: 'melancholic'
      },
      {
        id: 'q7_d',
        text: 'Conflitos ou mudanças repentinas',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q8',
    text: 'Como você passa seu tempo livre?',
    options: [
      {
        id: 'q8_a',
        text: 'Socializando, festas, ou atividades em grupo',
        temperament: 'sanguine'
      },
      {
        id: 'q8_b',
        text: 'Praticando esportes, aprendendo ou em novos projetos',
        temperament: 'choleric'
      },
      {
        id: 'q8_c',
        text: 'Atividades criativas, leitura ou reflexão',
        temperament: 'melancholic'
      },
      {
        id: 'q8_d',
        text: 'Relaxando, assistindo filmes ou com pessoas próximas',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q9',
    text: 'Como você expressa emoções?',
    options: [
      {
        id: 'q9_a',
        text: 'Abertamente, sou expressivo e demonstrativo',
        temperament: 'sanguine'
      },
      {
        id: 'q9_b',
        text: 'Diretamente, sou franco e vou direto ao ponto',
        temperament: 'choleric'
      },
      {
        id: 'q9_c',
        text: 'Profundamente, com intensidade e significado',
        temperament: 'melancholic'
      },
      {
        id: 'q9_d',
        text: 'Calmamente, sem grandes demonstrações',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q10',
    text: 'O que você mais valoriza em um relacionamento?',
    options: [
      {
        id: 'q10_a',
        text: 'Diversão, espontaneidade e entusiasmo',
        temperament: 'sanguine'
      },
      {
        id: 'q10_b',
        text: 'Honestidade, lealdade e respeito mútuo',
        temperament: 'choleric'
      },
      {
        id: 'q10_c',
        text: 'Profundidade emocional e conexão intelectual',
        temperament: 'melancholic'
      },
      {
        id: 'q10_d',
        text: 'Harmonia, estabilidade e segurança',
        temperament: 'phlegmatic'
      }
    ]
  }
];

export interface TemperamentResult {
  type: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
  name: string;
  percentage: number;
  description: string;
}

export const temperamentInfo = {
  sanguine: {
    name: 'Sanguíneo',
    description: 'Extrovertido, falante, entusiasta. Gosta de diversão e está cheio de energia.'
  },
  choleric: {
    name: 'Colérico',
    description: 'Orientado para objetivos, decidido e competitivo. Um líder natural com forte determinação.'
  },
  melancholic: {
    name: 'Melancólico',
    description: 'Pensativo, criativo e perfeccionista. Sensível, analítico e atencioso aos detalhes.'
  },
  phlegmatic: {
    name: 'Fleumático',
    description: 'Relaxado, pacífico e adaptável. Calmo, paciente e evita conflitos.'
  }
};

export const calculateResults = (answers: Record<string, string>): TemperamentResult[] => {
  const counts = {
    sanguine: 0,
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0
  };
  
  // Count the temperament choices
  Object.values(answers).forEach(answerId => {
    const question = questions.find(q => q.options.some(o => o.id === answerId));
    if (question) {
      const selectedOption = question.options.find(o => o.id === answerId);
      if (selectedOption) {
        counts[selectedOption.temperament]++;
      }
    }
  });
  
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  
  // Calculate percentages for each temperament
  const results: TemperamentResult[] = [
    {
      type: 'sanguine',
      name: temperamentInfo.sanguine.name,
      percentage: Math.round((counts.sanguine / total) * 100),
      description: temperamentInfo.sanguine.description
    },
    {
      type: 'choleric',
      name: temperamentInfo.choleric.name,
      percentage: Math.round((counts.choleric / total) * 100),
      description: temperamentInfo.choleric.description
    },
    {
      type: 'melancholic',
      name: temperamentInfo.melancholic.name,
      percentage: Math.round((counts.melancholic / total) * 100),
      description: temperamentInfo.melancholic.description
    },
    {
      type: 'phlegmatic',
      name: temperamentInfo.phlegmatic.name,
      percentage: Math.round((counts.phlegmatic / total) * 100),
      description: temperamentInfo.phlegmatic.description
    }
  ];
  
  // Sort by percentage (highest first)
  return results.sort((a, b) => b.percentage - a.percentage);
};
